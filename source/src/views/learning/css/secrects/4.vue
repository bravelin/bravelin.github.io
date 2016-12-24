<template>
  <div class="page">
    <h2 class="title">《CSS 揭秘》笔记之四：视觉效果</h2>
    <div class="content">
      <h3 class="title">单侧投影</h3>
      <p>box-shadow的通常使用方式是指定3个长度值和一个颜色值：</p>
      <pre><code>box-shadow: 2px 3px 4px rgba(0,0,0,.5)</code></pre>
      <div class="exp shadow-1"><div></div></div>
      <p><strong>阴影的绘制原理：</strong></p>
      <p>(1)：以该元素相同的尺寸和位置，绘制一个背景色rgba(0,0,0,.5)的矩形</p>
      <p>(2)：将此矩形右移2px，下移3px</p>
      <p>(3)：使用高斯模糊算法将它进行4px的模糊处理。在阴影的边缘发生阴影色和纯透明色之间的颜色过渡长度近似于模糊半径的两倍。</p>
      <p>(4)：切除模糊后的矩形与原始元素的交集部分</p>
      <p><strong>没有任何阴影是绘制在元素的下层的。</strong>虽然阴影看起来是在元素的“后面”。</p>
      <p>要得到单侧投影的效果需要使用到box-shadow的第四个参数：<strong>扩张半径</strong>。这个参数会根据指定的值去扩大或缩小（当为负值时）投影的尺寸。</p>
      <p>使用负的扩张半径值，使它的值刚好等于模糊半径值，可以使投影的尺寸与元素的尺寸完全一致。此时使用偏移量移动投影，可以得到单侧效果。</p>
      <pre><code>background: #58a;
  box-shadow: 0 8px 4px -4px rgba(0,0,0,.5);</code></pre>
      <div class="exp shadow-2"><div></div></div>
      <p>叠加上面的效果，可以得到<strong>双侧投影：</strong></p>
      <div class="exp shadow-3"><div></div></div>
      <pre><code>background: #58a;
  box-shadow: 8px 0 4px -4px rgba(0,0,0,.5), -8px 0 4px -4px rgba(0,0,0,.5);</code></pre>
      <h3 class="title">不规则投影</h3>
      <p>滤镜<strong>filter</strong>效果可以实现不规则的投影。它的写法是指定一些滤镜函数，以空格分隔，如：</p>
      <pre><code>filter: blur() grayscale() drop-shadow()</code></pre>
      <p>drop-shadow()滤镜参数和box-shadow基本类似，但不包括扩张半径，不包括inset关键字，也不支持多层投影。使用滤镜应用下面的切角矩形：</p>
      <div class="exp cuttingAngle-3 filter-1"><div></div></div>
      <pre><code>filter: drop-shadow(2px 2px 10px rgba(0,0,0,0.5))</code></pre>
      <h3 class="title">染色效果</h3>
      <p><strong>基于滤镜的方案：</strong>sepia()滤镜会给图片增加一种降饱和度的橙黄色效果；saturate()滤镜可以提升每个像素的饱和度；hue-rotate()滤镜可以将每个像素的色相以指定的度数进行偏移。</p>
      <div class="exp filter-2"><img src="../../../../assets/header.jpg"/></div>
      <pre><code>filter: sepia(1) saturate(4) hue-rotate(295deg);
  transition: 0.5s filter;
  &:hover{
    filter: none
  }</code></pre>
      <p>滤镜支持transition渐变。</p>
      <p><strong>基于混合模式的方案：</strong>在Adobe Photo中混合模式定义了上层元素的颜色与下层元素的颜色进行混合的方式。使用luminosity模式可以实现染色效果。这种模式会保留上层元素的HSL亮度信息，并从它的下层吸取色相饱和度信息。</p>
      <p>mix-blend-mode可以为整个元素设置混合模式。background-blend-mode可以为每层背景单独指定混合模式。</p>
      <p>如果div中包含img，应用如下样式可以得到染色效果：</p>
      <pre><code>div{
    background: hsl(335, 100%, 50%);
    &gt;img{
      width:100%;
      height:100%;
      mix-blend-mode: luminosity;
    }
  }</code></pre>
      <div class="exp filter-3"><div><img src="../../../../assets/header.jpg"/></div></div>
      <p>另外一种方式，是将图片当做div的背景。</p>
      <pre><code>width: 150px;
  height: 150px;
  background-size: cover;
  background-color: hsl(335, 100%, 50%);
  background-blend-mode: luminosity;
  transition: .5s background-color;
  background-image: url("../../assets/header.jpg");
  &:hover{
    background-color: transparent;
  }</code></pre>
      <div class="exp filter-4"><div></div></div>
      <h3 class="title">折角效果</h3>
      <p><strong>使用渐变实现45度折角效果：</strong></p>
      <p>需要使用两层渐变，一层渐变实现切角效果；另外一层实现右上角的折角，使用background-size限制尺寸为折角那区块，并且其值是切角渐变的1.414倍。</p>
      <div class="exp angle-1"><div></div></div>
      <pre><code>background: #58a;
  background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,0.4) 0) no-repeat 100% 0 / 2em 2em,linear-gradient(-135deg, transparent 1.414em, #58a 0);</code></pre>
      <p><strong>其他角度折角的解决方案：</strong>如下30度折角的方法。</p>
      <div class="exp angle-2"><div></div></div>
      <pre><code>background: #58a;
  background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,0.4) 0) no-repeat 100% 0 / 3em 1.73em,linear-gradient(-150deg, transparent 1.5em, #58a 0);</code></pre>
      <p>折角的长宽3em和1.73em是依据三角形的勾股定理得来的。</p>
      <p>上面的折角其实是不真实的，真实的折角会旋转一定的角度。由于无法旋转背景，只好使用伪元素。</p>
      <p>伪元素的写法：</p>
      <pre><code>position: relative;
  background: #58a;
  background: linear-gradient(-150deg, transparent 1.5em,#58a 0);
  &:before{
    content: "";
    position: absolute;
    width:3em;
    height:1.73em;
    top:0;
    right:0;
    background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,0.4) 0);
  }</code></pre>
      <div class="exp angle-3"><div></div></div>
      <p>要做到真实的效果，需要将折页三角形的宽和高对调，向上偏移一定的位置并旋转30度。</p>
      <div class="exp angle-3 angle-4"><div></div></div>
      <pre><code>&:before{
  width:1.73em;
  height:3em;
  transform: translateY(-1.3em) rotate(-30deg);
  transform-origin: bottom right;
}</code></pre>
      <p>更加好看的一种折角效果：（增加了阴影，圆角）</p>
      <div class="exp angle-3 angle-4 angle-5"><div></div></div>
      <pre><code>border-radius: .5em;
&:before{
  border-bottom-left-radius: inherit;
  box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0,0,0,0.15);
}</code></pre>
    </div>
    <footer>2016年11月20日</footer>
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
      Global.setArticleNavMenu('learning-css-secrects-4')
    }
  }
</script>
