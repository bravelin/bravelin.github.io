<style lang="sass">
    @import '../sass/views/industryKnowledge.scss';
</style>
<template>
    <div id="industry-knowledge-page">
        <!--轮播图-->
        <div class="item-banner">
            <div class="item-img"></div>
        </div>
        <div class="item-case">
            <div class="item-container container active" v-for="item in dataList" :key="item.id">
                <div><img :src="item.imgUrl"/></div>
                <div>
                    <div class="title">{{ item.title }}</div>
                    <div class="content">{{ item.desc }}</div>
                    <div class="detail">查看详情</div>
                </div>
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
                that.$router.replace({ name: 'industryKnowledge', query: { page: page } })
                // 查询总页数
                fetch({
                    url: 'https://d.apicloud.com/mcm/api/news',
                    params: { filter: JSON.stringify(totalPageFilter) }
                }).then(data => {
                    that.totalPage = Math.ceil(data.length / that.pageSize)
                })
                // 查询当页数据
                fetch({
                    url: 'https://d.apicloud.com/mcm/api/news',
                    params: { filter: JSON.stringify(filter) }
                }).then(res => {
                    that.dataList = res || []
                    that.page = page
                })
            }
        }
    }
</script>
