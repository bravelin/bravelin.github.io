import{u as r}from"./highlight-2e3cec98.js";import{u as n}from"./catalog-69e48a3d.js";import{_ as e,b as o,c as a,l as t}from"./index-4afbb925.js";import"./article-1b647556.js";const d={setup(){r(),n()}},p={class:"article-container"},i=t(`<h2 class="article-title">CSS揭秘笔记之一：边框与背景</h2><div class="article-content css-learning-1"><h3 class="title">概述</h3><p>这本书不单单只介绍CSS的技巧，作者会深入分析背后的思路，循序渐进地找到解决问题的方法。<strong>&quot;理解发现解决方案的过程比解决方案本身更有用&quot;。</strong></p><p>贯穿书中的编程理念是<em>DRY</em>（Don&#39;t Repeat Yourself：不应该重复你已经做过的事。在改动某个参数时，做到只改尽量少的地方）、<em>可维护</em>、<em>灵活性</em>、<em>轻量级</em>以及<em>要符合标准</em>。 以下是首页到第一章的一些知识点。</p><p><strong>标准语法应该写在最后；</strong></p><p><strong>当使用渐变时，如果需要考虑兼容性，可以使用渐变色的平均值作为回退机制。</strong></p><pre><code class="css">background: rgb(255, 128, 0); // 渐变色的平均值
  background: -moz-linear-gradient(0deg, yellow, red);
  background: -o-linear-gradient(0deg, yellow, red);
  background: -webkit-linear-gradient(0deg, yellow, red);
  background: linear-gradient(90deg, yellow, red); // 标准语法</code></pre><p>关于浏览器对样式是否支持的判断，可以使用<strong>特性检测：Modernizr或者@supports</strong></p><p>以下是小段JavaScript代码，实现特性检测并给根元素添加辅助类：</p><pre><code class="javascript">function testProperty (property) {
    var root = document.documentElement
    if (property in root.style) {
      root.classList.add(property.toLowerCase())
      return true
    }
    root.classList.add(&#39;no&#39; + property.toLowerCase())
    return false
  }</code></pre><p>如果需要检测某个具体的属性值是否支持，则需要把它赋值给相应的属性，然后再检查浏览器是否还保存这个值：</p><pre><code>function testValue (value, property) {
    var dummy = document.createElement(&#39;p&#39;)
    dummy.style[property] = value

    if (dummy.style[property]) {
      return true
    }
    return false
  }</code></pre><p class="dot">浏览器可以解析某个CSS特性并不能表示它已经正确实现了这个特性。</p><p><strong>W3C并不产生标准。</strong>CSS规范由CSS工作组的成员来编写，大部分成员来自W3C会员公司。每项规范从最初启动到最终成熟，都会经过多个阶段。</p><p>CSS1规范发表于1996年，两年之后，CSS2规范发布了。<strong>尽管&quot;CSS3&quot;这个名词非常流行，但实际上并没有在任何规范中定义过。</strong>CSS3指的是一个非正式的集合，它包括CSS规范第三版及一些版本号还是1的新规范。</p><h3 class="title">CSS编码技巧</h3><p><strong>尽量减少重复的代码。</strong>当某些值相互依赖时，应该把它们的相互关系用代码表示出来。 <strong>currentColor是一个特殊的颜色关键字，CSS中有史以来的第一个变量。</strong>减少重复多使用 <strong>inherit关键字。</strong></p><p><strong>相信你的眼睛，而不是数字。</strong></p><p><strong>关于响应式布局，应尽最大努力实现弹性可伸缩的布局，并在各个断点区间内指定相应尺寸。</strong>当网页本身的设计足够灵活时，让它变成响应式应该只需要用到简短的媒体查询代码。</p><p><strong>合理使用简写。</strong></p><p><strong>合理使用预处理器。</strong></p><h3 class="title">半透明边框</h3><p>默认情况下，背景会延伸到边框所在区域的下层，此时即使设置边框为透明的颜色，也无法达到预期的效果。可以通过<strong>background-clip</strong>属性来调整。这个属性初始值默认为border-box，设置为padding-box可以用内边距的外沿将背景裁剪掉。</p><div class="exp transparent-border"><div>未设置background-clip</div></div><div class="exp transparent-border"><div class="act">设置background-clip</div></div><pre><code class="css">background: #fff;
border:25px dotted rgba(0,0,255,0.1);
background-clip: padding-box;</code></pre><h3 class="title">多重边框</h3><p><strong>box-shadow方案：</strong>利用box-shadow的第四个参数——扩张半径，加上为0的偏移量和模糊值，可以得到一道实线边框。由于box-shadow支持多个投影，因此可以实现多重边框。</p><p>需要注意的是box-shadow是重重叠加的，需要按一定的规律调整扩张半径；投影不会影响布局，也不会受到box-sizing属性影响。此外投影生成的边框不会响应鼠标事件。</p><div class="exp multiple-border-box-shadow"><div></div></div><pre><code>background-color: white;
box-shadow: 0 0 0 5px #655, 0 0 0 10px deeppink, 0 2px 5px 10px rgba(0,0,0,0.6);</code></pre><p>可以给box-shadow属性加上<strong>inset</strong>关键字，使投影绘制在元素的内圈，此时的&quot;边框&quot;就能响应鼠标事件了。</p><p><strong>outline方案：</strong>如果只需要两重边框的话，可以使用border产生常规边框，再使用outline产生外层边框。</p><div class="exp multiple-border-outline"><div></div></div><pre><code>background-color: white;
border:5px solid #655;
outline:5px solid deeppink;</code></pre><p>outline并不支持设置多个，并且边框不会贴合border-radius产生的圆角，描边目前只能是直角效果。</p><h3 class="title">灵活的背景定位</h3><p><strong>background-position扩展语法：</strong>在CSS3中可以指定背景图片距离任意角的偏移量，只要我们在偏移量前面指定关键字。</p><div class="exp bg bg-position"></div><p>上面的背景图片定位在距容器右侧20px，底部10px的地方，即使改变窗口的宽度。</p><pre><code>background: url(&quot;...&quot;) no-repeat bottom right rgb(225,213,216);
background-position: right 20px bottom 10px;</code></pre><p><strong>background-origin方案：</strong>每个元素都存在3个矩形框：border-box、padding-box、content-box，background-position默认以padding-box为准。CSS3中增加的background-origin可以改变这种行为。定义如下样式也能达到同样的效果：</p><pre><code>background: url(&quot;...&quot;) no-repeat bottom right rgb(225,213,216);
padding:10px 20px;
background-origin: content-box;</code></pre><div class="exp bg bg-origin"></div><p><strong>calc()方案：</strong>calc()函数可以对位置执行动态计算。</p><pre><code>background: url(&quot;...&quot;) no-repeat bottom right rgb(225,213,216);
background-position: calc(100% - 20px) calc(100% - 10px);</code></pre><div class="exp bg bg-calc"></div><p>使用calc()函数需要注意的是操作符&quot;+&quot;、&quot;-&quot;两侧需要留有空白。</p><h3 class="title">边框内圆角</h3><p><strong>描边不会跟着元素的圆角走，而box-shadow确是会的。</strong>两者叠加到一起，box-shadow填充描边和容器圆角之间的空隙，可以达到此种效果。需要注意的是，box-shadow的扩张值大约是border-radius的一半。</p><div class="exp inner-border-radius"><div></div></div><pre><code>background: tan;
border-radius: 12px;
box-shadow: 0 0 0 6px #655;
outline:9px solid #655;</code></pre><h3 class="title">条纹背景</h3><p><strong>对于渐变，当多个色标具有相同的位置时，它们会产生一个无限小的过渡区域。从效果上看，颜色在那个位置突然变化了。</strong></p><p>条纹背景示例：</p><div class="exp linear-1"><div></div></div><pre><code>background: linear-gradient(#fb3 50%, #58a 50%);
background-size: 100% 30px;</code></pre><p><strong>如果某个色标的位置比它之前的位置值小，那么它会被解析为前面所有色标位置的最大值。</strong></p><p>上例可以写成：background: linear-gradient(#fb3 50%, #58a 0);</p><p><strong>垂直条纹</strong>的效果需要加额外的参数来指定渐变方向：to right</p><div class="exp linear-2"><div></div></div><pre><code>background: linear-gradient(to right ,#fb3 50%, #58a 0);
background-size: 30px 100%;</code></pre><p><strong><b>45度斜向条纹：</b></strong></p><p>方法一：使用linear-gradient，background-size设置为条纹宽度的2*1.414倍</p><div class="exp linear-3"><div></div></div><pre><code>background: linear-gradient(45deg, #fb3 25%, #58a 25%, #58a 50%, #fb3 50%, #fb3 75%, #58a 75%);
background-size: 42.426px 42.426px;</code></pre><p>方法二：使用repeating-linear-gradient</p><div class="exp linear-4"><div></div></div><pre><code>background: repeating-linear-gradient(45deg,#fb3, #fb3 15px, #58a 15px, #58a 30px);</code></pre><p><strong><b>同色系条纹：</b></strong></p><p>将最深的颜色指定为背景色，把半透明的白色条纹叠加到背景色之上</p><div class="exp linear-5"><div></div></div><pre><code>background: #58a;
background-image: repeating-linear-gradient(30deg,hsla(0, 0%, 100%, .1),
        hsla(0, 0%, 100%, .1) 15px, transparent 15px, transparent 30px);</code></pre><p><strong>使用CSS渐变来产生任何种类的几何图案都是可能的。</strong>原理是将多个渐变图案组合起来。</p><p><strong>桌布方格图案：</strong></p><div class="exp linear-6"><div></div></div><pre><code>background: white;
background-image: linear-gradient(90deg, rgba(200,0,0,0.5) 50%, transparent 0),
    linear-gradient(rgba(200,0,0,0.5) 50%, transparent 0);
background-size: 30px 30px;</code></pre><p><strong>网格图案：</strong></p><div class="exp linear-7"><div></div></div><pre><code>background: #58a;
background-image: linear-gradient(#ccc 1px, transparent 0),
    linear-gradient(90deg, #ccc 1px, transparent 0);
background-size: 20px 20px;</code></pre><p><strong>叠加多重渐变的蓝图网格：</strong>使用background-size调整间距。</p><div class="exp linear-8"><div></div></div><pre><code>background: #58a;
background-image: linear-gradient(white 2px, transparent 0),
    linear-gradient(90deg, white 2px, transparent 0),
    linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),
    linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);
background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;</code></pre><p><strong>波点图案：</strong>使用径向渐变。</p><div class="exp linear-9"><div></div></div><pre><code>background: #655;
background-image: radial-gradient(tan 20%, transparent 0);
background-size: 30px 30px;</code></pre><p><strong>复杂点的波点图案：</strong>使用background-position错开位置。</p><div class="exp linear-10"><div></div></div><pre><code>background: #655;
background-image: radial-gradient(tan 20%, transparent 0),
    radial-gradient(tan 20%, transparent 0);
background-size: 30px 30px;
background-position: 0 0, 15px 15px;</code></pre><p><strong>信封样式边框：</strong>设置两层背景，内层纯白色（使用渐变实现），斜纹背景溢出到边框区域。边框设置为透明。</p><div class="exp linear-11"><div></div></div><pre><code>padding:1em;
border:1em solid transparent;
background: linear-gradient(white,white),
    repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 12.5%,transparent 25%, #58a 25%, #58a 37.5%, transparent 37.5%, transparent 50%);
background-size: 3em 3em;
background-clip: padding-box, border-box;</code></pre><p><strong><b>蚂蚁行军边框：</b></strong>动起来的关键是使用animation设置background-position。</p><div class="exp marching-ants"><div></div></div><pre><code>@keyframes ants {
    to {
      background-position: 100%;
    }
}

div.marching-ants{
    padding: 1em;
    border:1px solid transparent;
    background: linear-gradient(white,white),
        repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%);
    background-clip: padding-box, border-box;
    background-size: 0.6em 0.6em;
    animation: ants 12s linear infinite;
}</code></pre></div><footer>2016年10月30日</footer>`,3),s=[i];function g(c,l,b,u,x,v){return o(),a("div",p,s)}const f=e(d,[["render",g]]);export{f as default};
