<template>
  <div class="page">
    <h2 class="title">《CSS 揭秘》笔记之七：结构与布局</h2>
    <div class="content">
      <h3 class="title">自适应内部元素</h3>
      <p>如果希望元素自适应其内容的宽度，可以设置 <strong>width: min-content</strong></p>
      <p>如下，如果figure元素不设置宽度的话，将占据整行。（如果浏览器不支持，可以设置一个max-width值，保证平稳退化。）</p>
      <div class="exp auto-width"><figure><img src="../../../../assets/header.jpg"/><figcaption>这是一张图片的说明文字。图片底部的文字自动换行了。</figcaption></figure></div>
      <pre><code>figure{
  border:1px solid #ccc;
  max-width: 300px;
  max-width: min-content;
  padding: 8px;
  text-align: center;
  margin: 0 auto;
}</code></pre>
      <h3 class="title"></h3>
    </div>
    <footer>2017年01月10日</footer>
  </div>
</template>
<script>
  import { Global } from '../../../../libs/global'

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
      Global.setArticleNavMenu('learning-css-secrects-7')
    }
  }
</script>
