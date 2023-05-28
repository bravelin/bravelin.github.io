import{u as i}from"./highlight-2e3cec98.js";import{u as a}from"./catalog-69e48a3d.js";import{_ as d,r as p,b as s,c as l,e,p as c,l as t,g as r}from"./index-4afbb925.js";import"./article-1b647556.js";const g={setup(){const o=p("header.jpg");return i(),a(),{headerImg:o}}},v={class:"article-container"},h=e("h2",{class:"article-title"},"CSS揭秘笔记之二：形状与视觉效果",-1),x={class:"article-content css-learning-2"},u=t(`<h3 class="title">自适应的椭圆</h3><p>border-radius可以单独指定水平和垂直半径。用斜杠分隔这两个值。</p><p>指定宽高的一半，可以得到一个精确的椭圆：border-radius: 155px / 60px;</p><div class="exp ellipse-1"><div></div></div><p>border-radius还可以使用百分比值。这个百分比是基于元素的尺寸进行解析。这意味着相同的百分比会计算出不同的水平和垂直半径。</p><p>要创建自适应的椭圆，使用：<strong>border-radius: 50% 50%</strong> 就可以。</p><p>border-radius支持四个角设置成不同的水平和垂直半径。方法是在斜杠之前指定1~4个值，在斜杠之后指定另外的1~4个值。如10px / 5px 20px，展开为10px 10px 10px 10px / 5px 20px 5px 20px。四个角的水平半径为10px，垂直半径则分别为5,20,5,20px。</p><p>半椭圆效果：<strong>border-radius:50% / 100% 100% 0 0</strong></p><div class="exp ellipse-2"><div></div></div><p>沿着纵轴劈开的半椭圆效果：<strong>border-radius:100% 0 0 100% / 50%</strong></p><div class="exp ellipse-3"><div></div></div><p>四分之一椭圆效果：<strong>border-radius: 100% 0 0 / 100% 0 0</strong></p><div class="exp ellipse-4"><div></div></div><h3 class="title">平行四边形</h3><p>在视觉设计中，平行四边形可以表达出一种动感。</p><p><strong>方法一：嵌套元素抵消变形</strong></p><div class="exp paralle-1"><div><div>平行四边形</div></div></div><pre><code>div{
    background-color: #58a;
    transform: skewX(-45deg);
}
div&gt;div{
    transform: skewX(45deg);
}</code></pre><p><strong>方法二：伪元素方案</strong>，伪元素设置z-index为-1，使堆叠层次在主元素之后。此种技巧还适用于其他任何变形样式。</p><pre><code>div{
    position: relative;
    z-index:0;
    background-color: transparent;
}
div::before{
    content: &#39;&#39;;
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    transform: skewX(-45deg);
    z-index: -1;
    background-color: #58a;
}</code></pre><div class="exp paralle-2"><div>平行四边形</div></div><h3 class="title">菱形图片</h3><p><strong>基于变形的方案：旋转并放大1.42倍。</strong>如果不放大将成八角形。</p>`,23),b={class:"exp diamond-1"},m=["src"],_=e("pre",null,[e("code",null,`div{
    width:150px;
    height:150px;
    transform: rotate(45deg);
    overflow: hidden;
}
div>img{
    width:100%;
    height:100%;
    transform: rotate(-45deg) scale(1.42);
}`)],-1),f=e("p",null,[e("strong",null,"裁切路径方案。"),r("如果处理的是一张非正方形的图片，上面的方法就会有问题。"),e("strong",null,"clip-path"),r("允许将元素裁剪成任何形状，并支持动画。只是浏览器的支持程度有限。")],-1),k={class:"exp diamond-2"},w=["src"],y=t(`<pre><code>img{
    width:150px;
    height:150px;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    transition: clip-path 1s;
}
img:hover{
    clip-path: polygon(0 0, 100% 0,100% 100%,0 100%);
}</code></pre><h3 class="title">切角效果</h3><p>切角效果是一种流行的设计风格，它的常见形态是将元素的一个或者多个角切成45度的缺口。</p><p><strong>使用渐变实现一个角的切角效果：</strong></p><div class="exp cuttingAngle-1"><div></div></div><pre><code>background: #58a;
background: linear-gradient(-45deg, transparent 15px, #58a 15px);</code></pre><p><strong>使用两层渐变实现两个角的切角效果：（注意需要使用background-size设置每层的渐变宽度为50%，否则会相互覆盖）</strong></p><div class="exp cuttingAngle-2"><div></div></div><pre><code>background: linear-gradient(-45deg, transparent 15px, #58a 15px) top right, linear-gradient(45deg, transparent 15px, #58a 15px) top left;
background-size: 50% 100%;
background-repeat: no-repeat;</code></pre><p><strong>使用四层渐变实现四个角的切角效果：（四层渐变的区域各占四分之一）</strong></p><div class="exp cuttingAngle-3"><div></div></div><pre><code>background: #58a;
background: linear-gradient(-45deg, transparent 15px, #58a 15px) bottom right,
                      linear-gradient(45deg, transparent 15px, #58a 15px) bottom left,
                      linear-gradient(-135deg, transparent 15px, #58a 15px) top right,
                      linear-gradient(135deg, transparent 15px, #58a 15px) top left;
background-size: 50% 50%;
background-repeat: no-repeat;</code></pre><p><strong>弧形切角：使用径向渐变实现内凹圆角效果</strong></p><div class="exp cuttingAngle-4"><div></div></div><pre><code>background: #58a;
background: radial-gradient(circle at top left, transparent 15px,#58a 15px) top left,
                      radial-gradient(circle at bottom left, transparent 15px,#58a 15px) bottom left,
                      radial-gradient(circle at top right, transparent 15px,#58a 15px) top right,
                      radial-gradient(circle at bottom right, transparent 15px,#58a 15px) bottom right;
background-size: 50% 50%;
background-repeat: no-repeat;</code></pre><p><strong>使用内联SVG与border-image实现切角效果：</strong>border宽度设置为20px，大约是使用渐变实现效果时15px的1.414倍。</p><div class="exp cuttingAngle-5"><div></div></div><pre><code>border:20px solid #58a;
border-image: 1 url(&quot;data:image/svg+xml,
                        &lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;3&#39; height=&#39;3&#39; fill=&#39;%2358a&#39;&gt;
                         &lt;polygon points=&#39;0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2&#39;/&gt;&lt;/svg&gt;&quot;);
background: #58a;
background-clip: padding-box;</code></pre><p><strong>使用clip-path实现切角效果（适应于元素背景是图片的情况下）：</strong></p>`,19),z={class:"exp cuttingAngle-6"},q=["src"],A=t(`<pre><code>clip-path: polygon(20px 0,calc(100% - 20px) 0,100% 20px,100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px, 20px 0);</code></pre><h3 class="title">梯形标签页</h3><p>使用3D旋转+伪元素模拟出梯形效果：（对元素使用了3D变形之后，其内部的变形效应几乎是不可逆转的）</p><div class="exp tab-1"><div></div></div><pre><code>position: relative;
padding: .5em 1em .35em;
color:white;
z-index:0;
background: transparent;
&amp;:before{
    content:&quot;&quot;;
    position: absolute;
    top:0; left:0; right:0; bottom:0;
    z-index:-1;
    background: #58a;
    transform-origin: bottom;
    transform: scaleY(2.2) perspective(.5em) rotateX(5deg);
}</code></pre><p>注意在Y轴上需要放大一定的倍数。</p><h3 class="title">简单的饼图</h3><p>若要得到20%的比率显示，将元素显示成圆形，一半为绿色，一半为棕色；伪元素占据右半部分，并设置背景色为绿色，绕圆心旋转72deg，可以得到如下的效果。</p><div class="exp pie pie-1"><div></div></div><pre><code>width:220px;
height:220px;
border-radius: 50%;
background: yellowgreen;
background-image: linear-gradient(to right, transparent 50%, #655 50%);
&amp;:before{
    content : &quot;&quot;;
    display: block;
    margin-left:50%;
    height:100%;
    background-color: inherit;
    transform-origin: 0 50%;
    border-radius: 0 100% 100% 0 / 50%;
    transform: rotate(72deg);
}</code></pre><p>上述方案在显示0~50%比率时是正常的，要得到60%比率的饼图，需要将伪元素背景色设置为棕色，并只旋转36deg。</p><div class="exp pie pie-2"><div></div></div><pre><code>&amp;:before{
    background-color: #655;
    transform: rotate(36deg);
}</code></pre><p>从0%到100%的进度指示器：伪元素在0~180deg范围之间旋转，每当旋转到180deg时，改变背景色，以实现50%~100%的比率显示效果。</p><div class="exp pie pie-3"><div></div></div><pre><code>@keyframes pie-spin {
    to{
        transform: rotate(180deg);
    }
}
@keyframes pie-bg {
    50%{
        background-color: #655;
    }
}
&amp;:before{
    background-color: inherit;
    animation: pie-spin 3s linear infinite, pie-bg 6s step-end infinite;
}</code></pre><p>不足点是在比率为50%的时候，因背景色的突变，会闪动一下。</p><p><strong>负的动画时延（animation-delay）会直接跳至动画中的任意时间点，并定格在那里。</strong>如果动画持续时间为6秒，animation-delay设置为-1.2s可以使饼图显示出20%的比率。为计算简单考虑，可以设置动画持续时间为100s。</p><p>因为动画是设置在伪元素上的，为方便灵活显示不同的比率，可在主元素内联设置animation-delay，伪元素则<strong>inherit</strong>这个值。</p><div class="exp pie pie-4"><div style="animation-delay:-20s;"></div></div><pre><code>&amp;:before{
    animation: pie-spin 50s linear infinite, pie-bg 100s step-end infinite;
    animation-play-state: paused;
    animation-delay:inherit;
}</code></pre><p>元素简单设置即可：</p><pre><code>&lt;div style=&#39;animation-delay:-20s&#39;&gt;&lt;/div&gt;</code></pre><p>使用SVG也可以实现饼图，但感觉有点麻烦。而且SVG的兼容性也不是很好。</p><h3 class="title">单侧投影</h3><p>box-shadow的通常使用方式是指定3个长度值和一个颜色值：</p><pre><code>box-shadow: 2px 3px 4px rgba(0,0,0,.5)</code></pre><div class="exp shadow-1"><div></div></div><p><strong>阴影的绘制原理：</strong></p><p>(1)：以该元素相同的尺寸和位置，绘制一个背景色rgba(0,0,0,.5)的矩形</p><p>(2)：将此矩形右移2px，下移3px</p><p>(3)：使用高斯模糊算法将它进行4px的模糊处理。在阴影的边缘发生阴影色和纯透明色之间的颜色过渡长度近似于模糊半径的两倍。</p><p>(4)：切除模糊后的矩形与原始元素的交集部分</p><p><strong>没有任何阴影是绘制在元素的下层的。</strong>虽然阴影看起来是在元素的“后面”。</p><p>要得到单侧投影的效果需要使用到box-shadow的第四个参数：<strong>扩张半径</strong>。这个参数会根据指定的值去扩大或缩小（当为负值时）投影的尺寸。</p><p>使用负的扩张半径值，使它的值刚好等于模糊半径值，可以使投影的尺寸与元素的尺寸完全一致。此时使用偏移量移动投影，可以得到单侧效果。</p><pre><code>background: #58a;
box-shadow: 0 8px 4px -4px rgba(0,0,0,.5);</code></pre><div class="exp shadow-2"><div></div></div><p>叠加上面的效果，可以得到<strong>双侧投影：</strong></p><div class="exp shadow-3"><div></div></div><pre><code>background: #58a;
box-shadow: 8px 0 4px -4px rgba(0,0,0,.5), -8px 0 4px -4px rgba(0,0,0,.5);</code></pre><h3 class="title">不规则投影</h3><p>滤镜<strong>filter</strong>效果可以实现不规则的投影。它的写法是指定一些滤镜函数，以空格分隔，如：</p><pre><code>filter: blur() grayscale() drop-shadow()</code></pre><p>drop-shadow()滤镜参数和box-shadow基本类似，但不包括扩张半径，不包括inset关键字，也不支持多层投影。使用滤镜应用下面的切角矩形：</p><div class="exp cuttingAngle-3 filter-1"><div></div></div><pre><code>filter: drop-shadow(2px 2px 10px rgba(0,0,0,0.5))</code></pre><h3 class="title">染色效果</h3><p><strong>基于滤镜的方案：</strong>sepia()滤镜会给图片增加一种降饱和度的橙黄色效果；saturate()滤镜可以提升每个像素的饱和度；hue-rotate()滤镜可以将每个像素的色相以指定的度数进行偏移。</p>`,49),S={class:"exp filter-2"},I=["src"],V=e("pre",null,[e("code",null,`filter: sepia(1) saturate(4) hue-rotate(295deg);
transition: 0.5s filter;
&:hover{
    filter: none
}`)],-1),X=e("p",null,"滤镜支持transition渐变。",-1),B=e("p",null,[e("strong",null,"基于混合模式的方案："),r("在Adobe Photo中混合模式定义了上层元素的颜色与下层元素的颜色进行混合的方式。使用luminosity模式可以实现染色效果。这种模式会保留上层元素的HSL亮度信息，并从它的下层吸取色相饱和度信息。")],-1),G=e("p",null,"mix-blend-mode可以为整个元素设置混合模式。background-blend-mode可以为每层背景单独指定混合模式。",-1),N=e("p",null,"如果div中包含img，应用如下样式可以得到染色效果：",-1),Y=e("pre",null,[e("code",null,`div{
    background: hsl(335, 100%, 50%);
    >img{
        width:100%;
        height:100%;
        mix-blend-mode: luminosity;
    }
}`)],-1),j={class:"exp filter-3"},C=["src"],D=e("p",null,"另外一种方式，是将图片当做div的背景。",-1),H=e("pre",null,[e("code",null,`width: 150px;
height: 150px;
background-size: cover;
background-color: hsl(335, 100%, 50%);
background-blend-mode: luminosity;
transition: .5s background-color;
background-image: url("/static/assets/header.jpg");
&:hover{
    background-color: transparent;
}`)],-1),M={class:"exp filter-4"},E=t(`<h3 class="title">折角效果</h3><p><strong>使用渐变实现45度折角效果：</strong></p><p>需要使用两层渐变，一层渐变实现切角效果；另外一层实现右上角的折角，使用background-size限制尺寸为折角那区块，并且其值是切角渐变的1.414倍。</p><div class="exp angle-1"><div></div></div><pre><code>background: #58a;
background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,0.4) 0) no-repeat 100% 0 / 2em 2em,linear-gradient(-135deg, transparent 1.414em, #58a 0);</code></pre><p><strong>其他角度折角的解决方案：</strong>如下30度折角的方法。</p><div class="exp angle-2"><div></div></div><pre><code>background: #58a;
background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,0.4) 0) no-repeat 100% 0 / 3em 1.73em,linear-gradient(-150deg, transparent 1.5em, #58a 0);</code></pre><p>折角的长宽3em和1.73em是依据三角形的勾股定理得来的。</p><p>上面的折角其实是不真实的，真实的折角会旋转一定的角度。由于无法旋转背景，只好使用伪元素。</p><p>伪元素的写法：</p><pre><code>position: relative;
background: #58a;
background: linear-gradient(-150deg, transparent 1.5em,#58a 0);
&amp;:before{
    content: &quot;&quot;;
    position: absolute;
    width:3em;
    height:1.73em;
    top:0;
    right:0;
    background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,0.4) 0);
}</code></pre><div class="exp angle-3"><div></div></div><p>要做到真实的效果，需要将折页三角形的宽和高对调，向上偏移一定的位置并旋转30度。</p><div class="exp angle-3 angle-4"><div></div></div><pre><code>&amp;:before{
    width:1.73em;
    height:3em;
    transform: translateY(-1.3em) rotate(-30deg);
    transform-origin: bottom right;
}</code></pre><p>更加好看的一种折角效果：（增加了阴影，圆角）</p><div class="exp angle-3 angle-4 angle-5"><div></div></div><pre><code>border-radius: .5em;
&amp;:before{
    border-bottom-left-radius: inherit;
    box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0,0,0,0.15);
}</code></pre>`,19),L=e("footer",null,"2016年11月08日",-1);function P(o,T,F,n,J,K){return s(),l("div",v,[h,e("div",x,[u,e("div",b,[e("div",null,[e("img",{src:n.headerImg},null,8,m)])]),_,f,e("div",k,[e("img",{src:n.headerImg},null,8,w)]),y,e("div",z,[e("img",{src:n.headerImg},null,8,q)]),A,e("div",S,[e("img",{src:n.headerImg},null,8,I)]),V,X,B,G,N,Y,e("div",j,[e("div",null,[e("img",{src:n.headerImg},null,8,C)])]),D,H,e("div",M,[e("div",{style:c({"background-image":"url("+n.headerImg+")"})},null,4)]),E]),L])}const W=d(g,[["render",P]]);export{W as default};
