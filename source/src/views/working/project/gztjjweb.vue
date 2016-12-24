<template>
  <div class="page">
    <h2 class="title">赣州统计信息网前端页面的重构</h2>
    <div class="content">
      <h3 class="title"></h3>
      <p><a href="http://www.gztj.gov.cn" target="_blank">赣州统计信息网</a>是赣州统计局的官方网站。2014年大学同学介绍做的私下项目，当时对于构建web还只是菜鸟级别(现在稍微有点长进)。后台按要求使用Java实现，前端是纯粹的html页面，数据交互使用ajax。</p>
      <p>这个网站主要是发布新闻资讯，解答访问者的咨询，公布一些信息。文章发布是核心，大约占据了90%的网站内容。因此提供了一个管理者后台，方便对栏目文章的管理。</p>
    </div>
    <footer>2016年05月15日</footer>
  </div>
</template>
<script>
  import { Global } from '../../../libs/global'

  module.exports = {
    mounted: function () {
      this.$nextTick(function () {
        var codes = document.querySelectorAll('code')
        if (codes.length > 0) {
          for (var k = 0; k < codes.length; k++) {
            hljs.highlightBlock(codes[k])
          }
        }
      })
      Global.setArticleNavMenu('working-project-gztjjweb')
    }
  }
</script>
