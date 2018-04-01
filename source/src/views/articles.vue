<template>
    <div class="page home-page">
        <banner></banner>
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
    import articleList from '../data/list'
    import banner from '@/views/banner'
    export default {
        components: {
            banner
        },
        data () {
            return {
                list: []
            }
        },
        created () {
            var list = articleList.list
            list.sort((a, b) => {
                return a.date < b.date ? 1 : -1
            })
            this.list = list
        }
    }
</script>
