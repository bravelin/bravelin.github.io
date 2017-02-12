<template>
<div class="page">
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
        return a.date < b.date ? 1 : -1
      })
      this.list = list
    }
  }
</script>
