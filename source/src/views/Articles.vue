<template>
    <div class="page list-page">
        <Banner></Banner>
        <ul class="article-list">
            <router-link tag="li" v-for="article in list" :to="{ name : article.routerName }" :key="article.id">
                <h4>{{ article.date }}</h4>
                <h3>{{ article.title }}</h3>
                <div v-if="article.description">{{ article.description }}</div>
            </router-link>
        </ul>
    </div>
</template>
<script>
    import global from '@/libs/global'
    export default {
        data () {
            return {
                list: global.articleList
            }
        }
    }
</script>
