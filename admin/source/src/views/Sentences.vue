<style lang="sass">
    @import '../sass/views/sentences.scss';
</style>
<template>
    <div class="app-page" id="sentences-page" :class="{ 'pagination-page' : totalPage>1 }">
        <div class="panel">
            <div class="panel-title"><h3>短语列表</h3><button @click="doAdd" class="add-btn">添加</button></div>
            <TabMenu :list="menus" :active-id="activeMenuId" @switch="doSwitchMenu"></TabMenu>
            <SearchInput placeholderText="输入关键字" @submit="queryDataList()" :search-key.sync="searchKey"></SearchInput>
            <div class="panel-content">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th style="width:5%">序号</th>
                            <th style="width:35%">内容</th>
                            <th style="width:12%">来源</th>
                            <th style="width:15%">添加时间</th>
                            <th style="width:10%">状态</th>
                            <th style="width:15%">操作</th>
                        </tr>
                    </thead>
                    <tbody v-if="dataList.length > 0">
                        <tr v-for="(item, index) in dataList" :key="item.id">
                            <td>{{ (index + 1) + (page - 1) * pageSize }}</td>
                            <td>{{ item.content }}</td>
                            <td>{{ item.origin }}</td>
                           <td>{{ item.updatedAt | DateTimeFilter }}</td>
                            <td>{{ statusObj[item.status] }}</td>
                            <td class="ope-btns">
                                <a v-if="item.status != 'online'" class="tool-btn-delete" @click="doDel(item)">删除</a>
                                <a v-if="item.status != 'online'" class="tool-btn-detail" @click="doEdit(item)">修改</a>
                                <a v-if="item.status != 'online'" class="tool-btn-online" @click="doChangeStatus(item, 'online')">发布</a>
                                <a v-if="item.status == 'online'" class="tool-btn-downline" @click="doChangeStatus(item, 'downline')">下线</a>
                            </td>
                        </tr>
                    </tbody>
                    <tbody class="data-table-null-data" v-if="dataList.length == 0"><tr><td colspan="6"></td></tr></tbody>
                </table>
            </div>
        </div>
        <Pagination :curr="page" :total="totalPage" @switch="doSwitchPage"></Pagination>
        <Modal title="添加" class="add-modal" :is-show.sync="isShowAddModal" :tip.sync="addModalCommitTip" @commit="doAddModalCommit()">
            <div class="modal-form form">
                <div class="form-item">
                    <label>内容：</label>
                    <textarea type="text" placeholder="请输入内容" v-model="addForm.content" maxlength="900" ref="contentInput"></textarea>
                </div>
                <div class="form-item">
                    <label>来源：</label>
                    <input type="text" placeholder="请输入来源" v-model="addForm.origin" maxlength="150" ref="typeInput"/>
                </div>
            </div>
        </Modal>

        <Modal title="账号删除确认" :is-show.sync="isShowDelConfirmModal" :is-show-close-btn="false" @commit="doCommitDel">
            <div class="modal-confirm">确认要删除这条短语？</div>
        </Modal>
    </div>
</template>

<script>
    import loading from '@/utils/loading'
    import Modal from '@/components/common/Modal'
    import TabMenu from '@/components/common/TabMenu/TabMenu'
    import fetch from '@/utils/fetch'
    import tipShow from '@/utils/tipShow'
    import SearchInput from '@/components/common/SearchInput'
    import Pagination from '@/components/common/Pagination'
    import DateTimeFilter from '@/filters/dateTimeFilter'

    export default {
        name: 'sentences',
        components: {
            Modal, SearchInput, Pagination, TabMenu
        },
        filters: {
            DateTimeFilter
        },
        data () {
            return {
                menus: [{ label: '全部', id: 'all' }, { label: '草稿', id: 'draft' }, { label: '已发布', id: 'online' }, { label: '已下线', id: 'downline' }],
                activeMenuId: 'all',
                statusObj: {
                    draft: '草稿',
                    online: '已发布',
                    downline: '已下线'
                },
                searchKey: '',
                dataList: [],
                page: 1,
                totalPage: 0,
                pageSize: 20,
                isShowAddModal: false,
                addModalCommitTip: '',
                addForm: {
                    id: '',
                    content: '',
                    origin: ''
                },
                isShowDelConfirmModal: false,
                delTitle: '',
                delId: ''
            }
        },
        created () {
            const that = this
            const query = that.$store.state.currRouter.query
            that.activeMenuId = query.status || 'all'
            that.page = query.page || 1
            that.searchKey = query.key ? decodeURIComponent(query.key) : ''
            that.queryDataList()
            loading(false)
        },
        methods: {
            doSwitchMenu (menuId) {
                let that = this
                if (that.activeMenuId != menuId) {
                    that.activeMenuId = menuId
                    that.queryDataList(1)
                }
            },
            doSwitchPage (page) {
                this.queryDataList(page)
            },
            queryDataList (page) {
                const that = this
                page = page || that.page
                let searchKey = that.searchKey.trim()
                let filter = {
                    fields: {
                    },
                    limit: that.pageSize,
                    where: {},
                    skip: (page - 1) * that.pageSize,
                    order: 'createdAt DESC'
                }
                // 求总的页数的请求filter
                let totalPageFilter = {
                    fields: {
                        id: true
                    },
                    limit: 10000,
                    where: {}
                }
                if (that.activeMenuId != 'all') {
                    filter.where.status = that.activeMenuId
                    totalPageFilter.where.status = that.activeMenuId
                }
                if (searchKey) {
                    filter.where.content = { 'like': searchKey }
                    totalPageFilter.where.content = { 'like': searchKey }
                }
                that.$router.replace({ name: 'sentences', query: { status: that.activeMenuId, key: encodeURIComponent(that.searchKey), page: page } })
                // 查询总页数
                fetch({
                    url: 'https://d.apicloud.com/mcm/api/sentences',
                    params: { filter: JSON.stringify(totalPageFilter) }
                }).then(data => {
                    that.totalPage = Math.ceil(data.length / that.pageSize)
                })
                // 查询当页数据
                fetch({
                    url: 'https://d.apicloud.com/mcm/api/sentences',
                    params: { filter: JSON.stringify(filter) }
                }).then(res => {
                    that.dataList = res || []
                    that.page = page
                    loading(false)
                })
            },
            doDel (u) {
                const that = this
                that.delTitle = u.content
                that.delId = u.id
                that.isShowDelConfirmModal = true
            },
            doCommitDel () {
                const that = this
                loading(true)
                fetch({
                    url: 'https://d.apicloud.com/mcm/api/sentences/{id}',
                    method: 'DELETE',
                    params: {
                        id: that.delId
                    }
                }).then(() => {
                    tipShow('删除成功！')
                    loading(false)
                    that.queryDataList()
                    that.isShowDelConfirmModal = false
                })
            },
            doChangeStatus (item, ope) {
                const that = this
                loading(true)
                fetch({
                    url: 'https://d.apicloud.com/mcm/api/sentences/{id}',
                    method: 'put',
                    params: {
                        id: item.id
                    },
                    data: {
                        '$set': {
                            status: ope
                        }
                    }
                }).then(() => {
                    tipShow('操作成功！')
                    loading(false)
                    that.queryDataList()
                })
            },
            doEdit (item) {
                const that = this
                const addForm = that.addForm
                addForm.content = item.content
                addForm.origin = item.origin
                addForm.id = item.id
                that.isShowAddModal = true
            },
            doAdd () {
                const that = this
                const addForm = that.addForm
                addForm.content = ''
                addForm.origin = ''
                addForm.id = ''
                that.isShowAddModal = true
            },
            doAddModalCommit () {
                const that = this
                const addForm = that.addForm
                addForm.content = addForm.content.trim()
                addForm.origin = addForm.origin.trim()
                loading(true)
                if (!addForm.id) {
                    fetch({
                        url: 'https://d.apicloud.com/mcm/api/sentences',
                        method: 'post',
                        data: {
                            content: addForm.content,
                            origin: addForm.origin,
                            status: 'draft'
                        }
                    }).then((res) => {
                        if (res.id) {
                            that.isShowAddModal = false
                            that.queryDataList()
                            tipShow('添加成功！', true)
                        } else {
                            that.addModalCommitTip = res.error.message || '添加失败！'
                        }
                        loading(false)
                    })
                } else {
                    fetch({
                        url: `https://d.apicloud.com/mcm/api/sentences/${addForm.id}`,
                        method: 'PUT',
                        data: {
                            content: addForm.content,
                            origin: addForm.origin
                        }
                    }).then((res) => {
                        if (res.id) {
                            that.isShowAddModal = false
                            that.queryDataList()
                            tipShow('修改成功！', true)
                        } else {
                            that.addModalCommitTip = res.error.message || '修改失败！'
                        }
                        loading(false)
                    })
                }
            }
        }
    }
</script>
