<template>
<div class="page">
  <ul class="article-list">
    <router-link tag="li" v-for="article in list" :to="{ name : article.routerName }">
      <h3>{{ article.title }}</h3>
      <div>{{ article.description }}</div>
      <div>【{{ article.type }}】{{ article.date }}</div>
    </router-link>
  </ul>
</div>
</template>
<script>
  import articleList from '../data/list'
  module.exports = {
    data: function () {
      return {
        list: []
      }
    },
    created: function () {
      var list = articleList.list
      list.sort(function (a, b) {
        return a.date < b.date
      })
      this.list = list
    }
  }
</script>
