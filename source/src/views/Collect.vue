<style scoped>
    .article-list>li>div{
        border-top: 1px dotted #e0e0e0;
        color: #939393;
    }
</style>
<template>
    <div class="page list-page">
        <Banner></Banner>
        <ul class="article-list">
            <li v-for="(item,index) in list" :key="index" @click="doClickLink(item)">
                <h3>{{ item.content }}</h3>
                <div>{{ item.remark }}</div>
            </li>
        </ul>
    </div>
</template>
<script>
    import links from '@/data/links'
    export default {
        data () {
            return {
                list: links
            }
        },
        methods: {
            doClickLink (item) {
                location.href = item.link
            }
        }
    }
</script>
