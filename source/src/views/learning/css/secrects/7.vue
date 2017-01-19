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
      <h3 class="title">精确控制表格列宽</h3>
      <p>表格的列宽通常都是根据内容进行调整的，即使显示地指定了width。CSS2.1有一个属性称之为：<strong>table-layout</strong>，默认值为auto，此时浏览器会使用自动表格布局算法调整表格的布局。如果设置为另外的一个值：fixed，则可以对表格更多控制。</p>
      <p>这种固定表格布局算法将使表格布局更快。应用此属性时需要同时指定表格的宽度。</p>
      <h3 class="title">根据兄弟元素的数量来设置样式</h3>
      <p>只有一个列表项时，可以使用:only-child，它等效于:first-child:last-child。即第一项同时也是最后一项。</p>
      <p>例如ul元素下的li列表项，当列表项有4项时，以下选择符可以命中所有项：</p>
      <pre><code>li:first-child:nth-last-child(4),li:first-child:nth-last-child(4) ~ li { }</code></pre>
      <p><strong>根据兄弟元素的数量范围来匹配元素：</strong></p>
      <p>:nth-child()选择符参数可以不仅可以是简单的数字，也可以如an+b类似的表达式，例如<strong>n+b</strong>，可以选中从第b个开始的所有子元素。</p>
      <pre><code>//当列表项至少包含4项时，命中所有列表项
li:first-child:nth-last-child(n+4),li:first-child:nth-last-child(n+4) ~ li {}</code></pre>
      <p>同理，-n+b这种形式的表达式可以选中开头的b个元素。</p>
      <pre><code>//当列表项最多包含4项时，命中所有列表项
li:first-child:nth-last-child(-n+4),li:first-child:nth-last-child(-n+4) ~ li {}</code></pre>
      <h3 class="title">满幅的背景，定宽的内容</h3>
      <p>书中将如下dom结构：</p>
      <pre><code>&lt;footer&gt;&lt;div class='wrapper'&gt;&lt;/div&gt;&lt;/footer&gt;</code></pre>
      <p>样式写法：</p>
      <pre><code>footer{
    background: #333;
  }
  .wrapper{
    max-width: 900px;
    margin: 1em auto;
  }</code></pre>
      <p>利用calc，精简成如下的形式：</p>
      <pre><code>footer{
    padding: 1em calc(50% - 450px);
    background: #333;
  }</code></pre>
      <h3 class="title">垂直居中</h3>
      <p><strong>基于绝对定位的方案：</strong>此方案要求元素具有固定的宽度和高度。</p>
      <pre><code>main {
  position: absolute;
  width: 18em;
  height: 6em;
  top: 50%;
  left: 50%;
  margin-top: -3em;
  margin-left: -9em;
}</code></pre>
      <p>改进型方案（并不要求元素的宽度高度固定）：</p>
      <pre><code>main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}</code></pre>

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
