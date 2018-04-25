<style lang="sass">
    @import '../sass/views/case.scss';
</style>
<template>
    <div id="case-page">
        <!--轮播图-->
        <div class="item-banner">
            <div class="item-img"></div>
        </div>
        <div class="item-case">

            <div class="item-container container" v-for="(item, index) in dataList">
                <div class="item-content active">
                    <div class="item-left">
                        <img v-if="index%2==0" :src="item.imgUrl"/>
                        <div v-else>
                            <div><span></span> 获得成效</div>
                            <div>{{ item.effect }}</div>
                        </div>
                    </div>
                    <div class="item-center">
                        <div class="title">{{ item.title }}</div>
                        <div class="describe"><span>会所痛点 </span>{{ item.painPoint }}</div>
                        <div>
                            <div><span>会所面积</span><div>{{ item.clubArea }}</div></div>
                            <div><span>会所类型</span><div>{{ item.clubType }}</div></div>
                        </div>
                    </div>
                    <div class="item-right">
                        <div v-if="index%2==0">
                            <div><span></span> 获得成效</div>
                            <div>{{ item.effect }}</div>
                        </div>
                        <img v-else :src="item.imgUrl"/>
                    </div>
                </div>
                <div class="item-detail">查看详情</div>
            </div>
            <Pagination class="container" :curr="page" :total="totalPage" @switch="doSwitchPage"></Pagination>
        </div>
    </div>
</template>
<script>
    import Pagination from '../components/common/Pagination'
    import fetch from '@/utils/fetch'
    export default {
        name: 'case',
        data () {
            return {
                page: 1,
                pageSize: 5,
                totalPage: 0,
                dataList: []
            }
        },
        components: {
            Pagination
        },
        created () {
            const that = this
            that.page = (that.$route.query.page || 1) - 0
            console.log('page：', that.page)
            that.queryData()
        },
        methods: {
            doSwitchPage (page) {
                this.page = page
                this.queryData(page)
            },
            queryData (page) {
                const that = this
                page = page || that.page
                let filter = {
                    fields: {
                        content: false
                    },
                    limit: that.pageSize,
                    where: { status: 'online' },
                    skip: (page - 1) * that.pageSize,
                    order: 'createdAt DESC'
                }
                // 求总的页数的请求filter
                let totalPageFilter = {
                    fields: {
                        id: true
                    },
                    where: { status: 'online' }
                }
                that.$router.replace({ name: 'case', query: { page: page } })
                // 查询总页数
                fetch({
                    url: 'https://d.apicloud.com/mcm/api/case',
                    params: { filter: JSON.stringify(totalPageFilter) }
                }).then(data => {
                    that.totalPage = Math.ceil(data.length / that.pageSize)
                })
                // 查询当页数据
                fetch({
                    url: 'https://d.apicloud.com/mcm/api/case',
                    params: { filter: JSON.stringify(filter) }
                }).then(res => {
                    that.dataList = res || []
                    that.page = page
                })
            }
        }
    }
</script>
