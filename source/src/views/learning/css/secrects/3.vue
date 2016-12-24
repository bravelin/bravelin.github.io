<template>
  <div class="page">
    <h2 class="title">《CSS 揭秘》笔记之三：形状</h2>
    <div class="content">
      <h3 class="title">自适应的椭圆</h3>
      <p>border-radius可以单独指定水平和垂直半径。用斜杠分隔这两个值。</p>
      <p>指定宽高的一半，可以得到一个精确的椭圆：border-radius: 155px / 60px;</p>
      <div class="exp ellipse-1"><div></div></div>
      <p>border-radius还可以使用百分比值。这个百分比是基于元素的尺寸进行解析。这意味着相同的百分比会计算出不同的水平和垂直半径。</p>
      <p>要创建自适应的椭圆，使用：<strong>border-radius: 50% 50%</strong> 就可以。</p>
      <p>border-radius支持四个角设置成不同的水平和垂直半径。方法是在斜杠之前指定1~4个值，在斜杠之后指定另外的1~4个值。如10px / 5px 20px，展开为10px 10px 10px 10px / 5px 20px 5px 20px。四个角的水平半径为10px，垂直半径则分别为5,20,5,20px。</p>
      <p>半椭圆效果：<strong>border-radius:50% / 100% 100% 0 0</strong></p>
      <div class="exp ellipse-2"><div></div></div>
      <p>沿着纵轴劈开的半椭圆效果：<strong>border-radius:100% 0 0 100% / 50%</strong></p>
      <div class="exp ellipse-3"><div></div></div>
      <p>四分之一椭圆效果：<strong>border-radius: 100% 0 0 / 100% 0 0</strong></p>
      <div class="exp ellipse-4"><div></div></div>
      <h3 class="title">平行四边形</h3>
      <p>在视觉设计中，平行四边形可以表达出一种动感。</p>
      <p><strong>方法一：嵌套元素抵消变形</strong></p>
      <div class="exp paralle-1"><div><div>平行四边形</div></div></div>
      <pre><code>div{
    background-color: #58a;
    transform: skewX(-45deg);
  }
  div>div{
    transform: skewX(45deg);
  }</code></pre>
      <p><strong>方法二：伪元素方案</strong>，伪元素设置z-index为-1，使堆叠层次在主元素之后。此种技巧还适用于其他任何变形样式。</p>
      <pre><code>div{
    position: relative;
    z-index:0;
    background-color: transparent;
  }
  div::before{
    content: '';
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    transform: skewX(-45deg);
    z-index: -1;
    background-color: #58a;
  }</code></pre>
      <div class="exp paralle-2"><div>平行四边形</div></div>
      <h3 class="title">菱形图片</h3>
      <p><strong>基于变形的方案：旋转并放大1.42倍。</strong>如果不放大将成八角形。</p>
      <div class="exp diamond-1"><div><img src="../../../../assets/header.jpg"/></div></div>
      <pre><code>div{
    width:150px;
    height:150px;
    transform: rotate(45deg);
    overflow: hidden;
  }
  div>img{
    width:100%;
    height:100%;
    transform: rotate(-45deg) scale(1.42);
  }</code></pre>
      <p><strong>裁切路径方案。</strong>如果处理的是一张非正方形的图片，上面的方法就会有问题。<strong>clip-path</strong>允许将元素裁剪成任何形状，并支持动画。只是浏览器的支持程度有限。</p>
      <div class="exp diamond-2"><img src="../../../../assets/header.jpg"/></div>
      <pre><code>img{
    width:150px;
    height:150px;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    transition: clip-path 1s;
  }
  img:hover{
    clip-path: polygon(0 0, 100% 0,100% 100%,0 100%);
  }</code></pre>
      <h3 class="title">切角效果</h3>
      <p>切角效果是一种流行的设计风格，它的常见形态是将元素的一个或者多个角切成45度的缺口。</p>
      <p><strong>使用渐变实现一个角的切角效果：</strong></p>
      <div class="exp cuttingAngle-1"><div></div></div>
      <pre><code>background: #58a;
  background: linear-gradient(-45deg, transparent 15px, #58a 15px);</code></pre>
      <p><strong>使用两层渐变实现两个角的切角效果：（注意需要使用background-size设置每层的渐变宽度为50%，否则会相互覆盖）</strong></p>
      <div class="exp cuttingAngle-2"><div></div></div>
      <pre><code>background: linear-gradient(-45deg, transparent 15px, #58a 15px) top right, linear-gradient(45deg, transparent 15px, #58a 15px) top left;
  background-size: 50% 100%;
  background-repeat: no-repeat;</code></pre>
      <p><strong>使用四层渐变实现四个角的切角效果：（四层渐变的区域各占四分之一）</strong></p>
      <div class="exp cuttingAngle-3"><div></div></div>
      <pre><code>background: #58a;
  background: linear-gradient(-45deg, transparent 15px, #58a 15px) bottom right,
                      linear-gradient(45deg, transparent 15px, #58a 15px) bottom left,
                      linear-gradient(-135deg, transparent 15px, #58a 15px) top right,
                      linear-gradient(135deg, transparent 15px, #58a 15px) top left;
  background-size: 50% 50%;
  background-repeat: no-repeat;</code></pre>
      <p><strong>弧形切角：使用径向渐变实现内凹圆角效果</strong></p>
      <div class="exp cuttingAngle-4"><div></div></div>
      <pre><code>background: #58a;
  background: radial-gradient(circle at top left, transparent 15px,#58a 15px) top left,
                      radial-gradient(circle at bottom left, transparent 15px,#58a 15px) bottom left,
                      radial-gradient(circle at top right, transparent 15px,#58a 15px) top right,
                      radial-gradient(circle at bottom right, transparent 15px,#58a 15px) bottom right;
  background-size: 50% 50%;
  background-repeat: no-repeat;</code></pre>
      <p><strong>使用内联SVG与border-image实现切角效果：</strong>border宽度设置为20px，大约是使用渐变实现效果时15px的1.414倍。</p>
      <div class="exp cuttingAngle-5"><div></div></div>
      <pre><code>border:20px solid #58a;
  border-image: 1 url("data:image/svg+xml,
                        &lt;svg xmlns='http://www.w3.org/2000/svg' width='3' height='3' fill='%2358a'&gt;
                         &lt;polygon points='0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2'/&gt;&lt;/svg&gt;");
  background: #58a;
  background-clip: padding-box;</code></pre>
      <p><strong>使用clip-path实现切角效果（适应于元素背景是图片的情况下）：</strong></p>
      <div class="exp cuttingAngle-6"><img src="../../../../assets/header.jpg"/></div>
      <pre><code>clip-path: polygon(20px 0,calc(100% - 20px) 0,100% 20px,100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px, 20px 0);</code></pre>
      <h3 class="title">梯形标签页</h3>
      <p>使用3D旋转+伪元素模拟出梯形效果：（对元素使用了3D变形之后，其内部的变形效应几乎是不可逆转的）</p>
      <div class="exp tab-1"><div></div></div>
      <pre><code>position: relative;
  padding: .5em 1em .35em;
  color:white;
  z-index:0;
  background: transparent;
  &:before{
    content:"";
    position: absolute;
    top:0; left:0; right:0; bottom:0;
    z-index:-1;
    background: #58a;
    transform-origin: bottom;
    transform: scaleY(2.2) perspective(.5em) rotateX(5deg);
  }</code></pre>
      <p>注意在Y轴上需要放大一定的倍数。</p>
      <h3 class="title">简单的饼图</h3>
      <p>若要得到20%的比率显示，将元素显示成圆形，一半为绿色，一半为棕色；伪元素占据右半部分，并设置背景色为绿色，绕圆心旋转72deg，可以得到如下的效果。</p>
      <div class="exp pie pie-1"><div></div></div>
      <pre><code>width:220px;
  height:220px;
  border-radius: 50%;
  background: yellowgreen;
  background-image: linear-gradient(to right, transparent 50%, #655 50%);
  &:before{
    content : "";
    display: block;
    margin-left:50%;
    height:100%;
    background-color: inherit;
    transform-origin: 0 50%;
    border-radius: 0 100% 100% 0 / 50%;
    transform: rotate(72deg);
  }</code></pre>
      <p>上述方案在显示0~50%比率时是正常的，要得到60%比率的饼图，需要将伪元素背景色设置为棕色，并只旋转36deg。</p>
      <div class="exp pie pie-2"><div></div></div>
      <pre><code>&:before{
    background-color: #655;
    transform: rotate(36deg);
  }</code></pre>
      <p>从0%到100%的进度指示器：伪元素在0~180deg范围之间旋转，每当旋转到180deg时，改变背景色，以实现50%~100%的比率显示效果。</p>
      <div class="exp pie pie-3"><div></div></div>
      <pre><code>@keyframes pie-spin {
  to{
    transform: rotate(180deg);
  }
}
@keyframes pie-bg {
  50%{
    background-color: #655;
  }
}
&:before{
  background-color: inherit;
  animation: pie-spin 3s linear infinite, pie-bg 6s step-end infinite;
}</code></pre>
      <p>不足点是在比率为50%的时候，因背景色的突变，会闪动一下。</p>
      <p><strong>负的动画时延（animation-delay）会直接跳至动画中的任意时间点，并定格在那里。</strong>如果动画持续时间为6秒，animation-delay设置为-1.2s可以使饼图显示出20%的比率。为计算简单考虑，可以设置动画持续时间为100s。</p>
      <p>因为动画是设置在伪元素上的，为方便灵活显示不同的比率，可在主元素内联设置animation-delay，伪元素则<strong>inherit</strong>这个值。</p>
      <div class="exp pie pie-4"><div style="animation-delay:-20s"></div></div>
      <pre><code>&:before{
  animation: pie-spin 50s linear infinite, pie-bg 100s step-end infinite;
  animation-play-state: paused;
  animation-delay:inherit;
}</code></pre>
      <p>元素简单设置即可：</p>
      <pre><code>&lt;div style='animation-delay:-20s'&gt;&lt;/div&gt;</code></pre>
      <p>使用SVG也可以实现饼图，但感觉有点麻烦。而且SVG的兼容性也不是很好。</p>
    </div>
    <footer>2016年11月08日</footer>
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
      Global.setArticleNavMenu('learning-css-secrects-3')
    }
  }
</script>
