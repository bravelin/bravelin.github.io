<template>
    <div class="page">
        <ul class="article-list">
            <router-link tag="li" v-for="article in list" :to="{ name : article.routerName }" :key="article.id">
                <h4>{{ article.date }}</h4>
                <h3>{{ article.title }}</h3>
                <div>{{ article.description }}</div>
            </router-link>
        </ul>
        <div v-show="list.length==0">数据加载中...</div>
    </div>
</template>
<script>
    import articleList from '../data/list'
    export default {
        data () {
            return {
                list: []
            }
        },
        created () {
            let list = articleList.list
            list.sort((a, b) => {
                return a.date < b.date ? 1 : -1
            })
            this.list = list
        }
    }
</script>
