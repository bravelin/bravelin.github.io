<template>
<div class="page">
  <ul class="article-list">
    <router-link tag="li" v-for="topic in list" :to="{ name : 'topicArticles', query: { id: topic.id } }">
      <h4>{{ topic.date }}</h4>
      <h3>{{ topic.title }}</h3>
      <div>{{ topic.description }}</div>
    </router-link>
  </ul>
</div>
</template>
<script>
  import topics from '../data/topics'
  module.exports = {
    data: function () {
      return {
        list: []
      }
    },
    created: function () {
      var list = topics.list
      list.sort(function (a, b) {
        return a.date < b.date ? 1 : -1
      })
      this.list = list
    }
  }
</script>
