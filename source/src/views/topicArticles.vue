<template>
    <div class="page">
        <div class="topic-title">topic：{{ topicName }}</div>
        <ul class="article-list">
            <router-link tag="li" v-for="article in list" :to="{ name : article.routerName }">
                <h4>{{ article.date }}</h4>
                <h3>{{ article.title }}</h3>
                <div>{{ article.description }}</div>
            </router-link>
        </ul>
    </div>
</template>
<script>
    import {Global} from '../libs/global'
    import articleList from '../data/list'
    import topics from '../data/topics'

    module.exports = {
        data: function () {
            return {
                topicName: '',
                list: []
            }
        },
        created: function () {
            var articles = articleList.list
            var list = []
            var i = 0
            var topicId = Global.currPageParams.id
            if (topicId == undefined) {
                return this.$router.back()
            }
            for (; i < topics.list.length; i++) {
                if (topics.list[i].id == topicId) {
                    this.topicName = topics.list[i].title
                }
            }
            for (i = 0; i < articles.length; i++) {
                if (articles[i].topicId != undefined && articles[i].topicId == topicId) {
                    list.push(articles[i])
                }
            }
            list.sort(function (a, b) {
                return a.date < b.date ? 1 : -1
            })
            this.list = list
        }
    }
</script>
