<template>
  <div class="page">
    <h2 class="title">《CSS 揭秘》笔记之六：用户体验</h2>
    <div class="content">
      <h3 class="title">选择合适的鼠标光标</h3>
      <p>CSS2.1中提供的内建光标：<em>default、crosshair、help、move、pointer、progress、text、wait、e-resize、ne-resize、nw-resize、n-resize、se-resize、sw-resize、s-resize、w-resize</em></p>
      <p>CSS3中新增的内建光标：<em>none、context-menu、cell、verticle-text、alias、copy、no-drop、not-allowed、ew-resize、ns-resize、nesw-resize、nwse-resize、col-resize、row-resize、all-scroll、zoom-in、zoom-out</em></p>
      <p>提示禁用状态可以使用cursor：not-allowed；隐藏鼠标光标可以使用cursor：none。</p>
      <h3 class="title">扩大可点击区域</h3>
      <p>对于较小的区域，将其热区向外扩张可以带来可用性的提升。一种扩张的方式是使用透明的边框（如果需要边框，可以使用内嵌投影实现）</p>
      <div class="exp expand-hot-area expand-1"><div>+</div></div>
      <pre><code>border:10px solid transparent;
background-clip: padding-box;
box-shadow: 0 0 0 1px rgba(0,0,0,0.7) inset;</code></pre>
      <p>另外一个方案是使用伪元素（设置为透明，覆盖在元素上部），伪元素同样可以代表其宿主元素响应鼠标交互。</p>
      <div class="exp expand-hot-area expand-2"><div>+</div></div>
      <pre><code>position: relative;
&:before{
  content: "";
  position: absolute;
  top: -10px;
  right: -10px;
  bottom: -10px;
  left: -10px;
}</code></pre>
      <h3 class="title">自定义复选框</h3>
    </div>
    <footer>2016年12月20日</footer>
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
      Global.setArticleNavMenu('learning-css-secrects-6')
    }
  }
</script>
