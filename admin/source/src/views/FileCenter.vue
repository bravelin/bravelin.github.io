<style lang="sass">
    @import '../../static/webuploader/webuploader.scss';
    @import '../sass/views/fileCenter.scss';
</style>
<template>
    <div class="app-page" id="file-center-page" :class="{ 'pagination-page' : totalPage>1 }">
        <div class="panel">
            <div class="panel-title"><h3>文件列表</h3><button class="add-btn" @click="doAdd">添加</button></div>
            <SearchInput placeholderText="输入关键字" @submit="queryDataList()" :search-key.sync="searchKey"></SearchInput>
            <div class="panel-content">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th style="width:6%">序号</th>
                            <th style="width:15%">文件名</th>
                            <th style="width:19%">预览</th>
                            <th style="width:13%">链接</th>
                            <th style="width:9%">上传者</th>
                            <th style="width:14%">创建时间</th>
                            <th style="width:8%">类型</th>
                            <th style="width:8%">大小</th>
                            <th style="width:8%">操作</th>
                        </tr>
                    </thead>
                    <tbody v-if="dataList.length > 0">
                        <tr v-for="(item, index) in dataList" :key="item.id">
                            <td>{{ (index + 1) + (page - 1) * pageSize }}</td>
                            <td>{{ item.name }}</td>
                            <td><img :src="item.url" alt=""/></td>
                            <td class="link-content"><a :href="item.url" target="_blank">{{ item.url }}</a></td>
                            <td>{{ item.author }}</td>
                            <td>{{ item.createdAt | DateTimeFilter }}</td>
                            <td>{{ item.type }}</td>
                            <td>{{ item.size | FileSizeFilter }}</td>
                            <td class="ope-btns">
                                <a class="tool-btn-delete" @click="doDel(item)">删除</a>
                            </td>
                        </tr>
                    </tbody>
                    <tbody class="data-table-null-data" v-if="dataList.length == 0"><tr><td colspan="9"></td></tr></tbody>
                </table>
            </div>
        </div>
        <Pagination :curr="page" :total="totalPage" @switch="doSwitchPage"></Pagination>
        <Modal title="删除确认" :is-show.sync="isShowDelConfirmModal" :is-show-close-btn="false" @commit="doCommitDel">
            <div class="modal-confirm">确认要删除名称为“<strong>{{ delTitle }}</strong>”的文件？</div>
        </Modal>
        <Modal title="文件上传" :tip.sync="uploadTip" :is-show.sync="isShowUploaderModal" @commit="doCommitUploader" :commit-btn="{ label: '上传', isShow: true }" :cancel-btn="{ label: '关闭', isShow: true }">
            <div>
                <ul v-show="fileList.length != 0" class="file-list">
                    <li v-for="file in fileList"><div>{{ file.filename }}</div><div>{{ file.size | FileSizeFilter }}</div><div>{{ file.progress == 0 ? '未上传' : (file.progress == 100 ? '已上传' : file.progress + '%') }}</div></li>
                </ul>
                <div v-show="fileList.length == 0"><div id="file-picker">选择文件</div></div>
            </div>
        </Modal>
    </div>
</template>

<script>
    import loading from '@/utils/loading'
    import DateTimeFilter from '@/filters/dateTimeFilter'
    import FileSizeFilter from '@/filters/fileSizeFilter'
    import fetch from '@/utils/fetch'
    import SearchInput from '@/components/common/SearchInput'
    import Pagination from '@/components/common/Pagination'
    import Modal from '@/components/common/Modal'
    import tipShow from '@/utils/tipShow'
    import sha from '@/utils/sha'
    import Config from '@/utils/config'

    export default {
        name: 'home',
        components: {
            SearchInput, Pagination, Modal
        },
        filters: {
            DateTimeFilter, FileSizeFilter
        },
        data () {
            return {
                dataList: [],
                searchKey: '', // 搜索的文本
                page: 1, // 当前页
                pageSize: 20, // 每页数量
                totalPage: 0,
                isShowDelConfirmModal: false,
                delTitle: '',
                delId: '',
                wp: null,
                isShowUploaderModal: false,
                fileList: [],
                uploadCount: 0,
                uploadTip: ''
            }
        },
        created () {
            const that = this
            const query = that.$store.state.currRouter.query
            that.page = query.page || 1
            that.searchKey = query.key ? decodeURIComponent(query.key) : ''
            that.queryDataList()
            loading(false)
        },
        mounted () {
            const that = this
            const AppKey = Config.appId + 'UZ' + Config.appKey + 'UZ'
            that.$nextTick(() => {
                that.wp = WebUploader.create({
                    server: 'https://d.apicloud.com/mcm/api/file',
                    auto: false,
                    pick: '#file-picker',
                    resize: false,
                    fileSingleSizeLimit: 20 * 1024 * 1024,
                    fileSizeLimit: 50 * 1024 * 1024,
                    fileNumLimit: 50
                })
                that.wp.on('fileQueued', function (file) {
                    that.fileList.push({
                        id: file.id,
                        filename: file.name,
                        size: file.size,
                        progress: 0
                    })
                    that.wp.option('formData', {
                        filename: file.name,
                        type: file.type,
                        author: that.$store.state.userName
                    })
                })

                // 文件上传成功
                that.wp.on('uploadSuccess', function (file, res) {
                    if (res && res.id) {
                        that.uploadTip = file.name + '上传成功！'
                    } else if (res && res.status == 0) {
                        that.uploadTip = file.name + '上传失败！'
                    } else {
                        that.uploadTip = file.name + '上传失败'
                    }
                })

                // 文件上传失败
                that.wp.on('uploadError', function (file, reason) {
                    that.uploadTip = file.name + '上传失败'
                })

                // 上传完成，不管成功失败
                that.wp.on('uploadComplete', function (file) {
                    that.wp.removeFile(file)
                    that.uploadCount ++
                    if (that.fileList.length == that.uploadCount) {
                        setTimeout(() => {
                            that.isShowUploaderModal = false
                        }, 1500)
                        that.queryDataList(1)
                    }
                })

                that.wp.on('uploadBeforeSend', function (block, data, headers) {
                    let now = (+new Date())
                    let appKey = sha(AppKey + now) + '.' + now
                    headers['X-APICloud-AppKey'] = appKey
                    headers['X-APICloud-AppId'] = Config.appId
                })

                // 上传中
                that.wp.on('uploadProgress', function (file, percentage) {
                    let fileIndex = that.findFile(file.id)
                    if (fileIndex >= 0) {
                        let fileObj = that.fileList[fileIndex]
                        fileObj.progress = (percentage * 100).toFixed(0)
                        that.fileList.splice(fileIndex, 1, fileObj)
                    }
                })
            })
        },
        methods: {
            findFile (id) {
                const that = this
                for (let i = 0; i < that.fileList.length; i++) {
                    if (that.fileList[i].id == id) {
                        return i
                    }
                }
                return -1
            },
            doAdd () {
                const that = this
                that.isShowUploaderModal = true
                that.fileList = []
                that.uploadCount = 0
            },
            doDel (item) {
                const that = this
                that.delTitle = item.name
                that.delId = item.id
                that.isShowDelConfirmModal = true
            },
            doCommitDel () {
                const that = this
                loading(true)
                fetch({
                    url: 'https://d.apicloud.com/mcm/api/file/{fileId}',
                    method: 'DELETE',
                    params: {
                        fileId: that.delId
                    }
                }).then(() => {
                    tipShow('删除成功！')
                    loading(false)
                    that.queryDataList()
                    that.isShowDelConfirmModal = false
                })
            },
            queryDataList (page) {
                const that = this
                page = page || that.page
                let searchKey = that.searchKey.trim()
                let filter = {
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
                if (searchKey) {
                    filter.where.name = { 'like': searchKey }
                    totalPageFilter.where.name = { 'like': searchKey }
                }
                that.$router.replace({ name: 'fileCenter', query: { key: encodeURIComponent(that.searchKey), page: page } })
                // 查询总页数
                fetch({
                    url: 'https://d.apicloud.com/mcm/api/file',
                    params: { filter: JSON.stringify(totalPageFilter) }
                }).then(data => {
                    that.totalPage = Math.ceil(data.length / that.pageSize)
                })
                // 查询当页数据
                fetch({
                    url: 'https://d.apicloud.com/mcm/api/file',
                    params: { filter: JSON.stringify(filter) }
                }).then(res => {
                    that.dataList = res || []
                    that.page = page
                    loading(false)
                })
            },
            doSwitchPage (page) {
                this.queryDataList(page)
            },
            doCommitUploader () {
                const that = this
                that.wp.upload()
            }
        }
    }
</script>
