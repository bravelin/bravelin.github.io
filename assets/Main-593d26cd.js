import{u as o}from"./highlight-2e3cec98.js";import{u as i}from"./catalog-69e48a3d.js";import{_ as s,r,b as a,c as l,e as t,g as c,l as p}from"./index-4afbb925.js";import"./article-1b647556.js";const d={setup(){const e=r("./imgs/1.jpeg");return o(),i(),{imgUrl:e}}},h={class:"article-container"},g=t("h2",{class:"article-title"},"CSS揭秘笔记之四：结构与布局、过渡与动画",-1),m={class:"article-content css-learning-4"},f=t("h3",{class:"title"},"自适应内部元素",-1),u=t("p",null,[c("如果希望元素自适应其内容的宽度，可以设置"),t("strong",null,"width: min-content")],-1),_=t("p",null,"如下，如果figure元素不设置宽度的话，将占据整行。（如果浏览器不支持，可以设置一个max-width值，保证平稳退化。）",-1),x={class:"exp auto-width"},b=["src"],v=t("figcaption",null,"这是一张图片的说明文字。图片底部的文字自动换行了。这是一张图片的说明文字。图片底部的文字自动换行了。这是一张图片的说明文字。图片底部的文字自动换行了。",-1),w=p(`<pre><code>figure{
  border:1px solid #ccc;
  max-width: 300px;
  max-width: min-content;
  padding: 8px;
  text-align: center;
  margin: 0 auto;
}</code></pre><h3 class="title">精确控制表格列宽</h3><p>表格的列宽通常都是根据内容进行调整的，即使显示地指定了width。CSS2.1有一个属性称之为：<strong>table-layout</strong>，默认值为auto，此时浏览器会使用自动表格布局算法调整表格的布局。如果设置为另外的一个值：fixed，则可以对表格更多控制。</p><p>这种固定表格布局算法将使表格布局更快。应用此属性时需要同时指定表格的宽度。</p><h3 class="title">根据兄弟元素的数量来设置样式</h3><p>只有一个列表项时，可以使用:only-child，它等效于:first-child:last-child。即第一项同时也是最后一项。</p><p>例如ul元素下的li列表项，当列表项有4项时，以下选择符可以命中所有项：</p><pre><code>li:first-child:nth-last-child(4),li:first-child:nth-last-child(4) ~ li { }</code></pre><p><strong>根据兄弟元素的数量范围来匹配元素：</strong></p><p>:nth-child()选择符参数可以不仅可以是简单的数字，也可以如an+b类似的表达式，例如<strong>n+b</strong>，可以选中从第b个开始的所有子元素。</p><pre><code>//当列表项至少包含4项时，命中所有列表项
li:first-child:nth-last-child(n+4),li:first-child:nth-last-child(n+4) ~ li {}</code></pre><p>同理，-n+b这种形式的表达式可以选中开头的b个元素。</p><pre><code>//当列表项最多包含4项时，命中所有列表项
li:first-child:nth-last-child(-n+4),li:first-child:nth-last-child(-n+4) ~ li {}</code></pre><h3 class="title">满幅的背景，定宽的内容</h3><p>书中将如下dom结构：</p><pre><code>&lt;footer&gt;&lt;div class=&#39;wrapper&#39;&gt;&lt;/div&gt;&lt;/footer&gt;</code></pre><p>样式写法：</p><pre><code>footer{
    background: #333;
  }
  .wrapper{
    max-width: 900px;
    margin: 1em auto;
  }</code></pre><p>利用calc，精简成如下的形式：</p><pre><code>footer{
    padding: 1em calc(50% - 450px);
    background: #333;
  }</code></pre><h3 class="title">垂直居中</h3><p><strong>基于绝对定位的方案：</strong>此方案要求元素具有固定的宽度和高度。</p><pre><code>main {
  position: absolute;
  width: 18em;
  height: 6em;
  top: 50%;
  left: 50%;
  margin-top: -3em;
  margin-left: -9em;
}</code></pre><p>改进型方案（并不要求元素的宽度高度固定）：</p><pre><code>main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}</code></pre><p><strong>基于视口单位的方案：</strong>此方案只适应于在视口居中的场景。</p><p>视口单位1vw表示视口宽度的1%，1vh表示视口高度的1%。1vmin取1vh和1vw两者中的最小值，1vmax取1vh和1vw两者中的最大值。</p><p>下面样式可以使main元素居中：</p><pre><code>main {
    width: 18em;
    padding: 1em 1.5em;
    margin: 50vh auto 0;
    transform: translateY(-50%);
  }</code></pre><p><strong>基于Flexbox的方案：</strong>设置父元素display: flex，待居中元素margin: auto即可。</p><h3 class="title">紧贴底部的页脚</h3><p><strong>使用视口+calc计算方案：</strong>设置中间内容区域的min-height为页面的高度减去头部和底部的高度。页面的整体结构如下：</p><pre><code>&lt;header&gt;&lt;/header&gt;&lt;main&gt;&lt;/main&gt;&lt;footer&gt;&lt;/footer&gt;&lt;/code&gt;</code></pre><p>如果header和footer的高度分别为2.5em和7em：</p><pre><code>main {
  min-height: calc(100vh - 2.5em - 7em)
  box-sizing: border-box;
}</code></pre><p><strong>Flexbox的方案：</strong>body元素设置为display: flex，触发伸缩盒布局。内容区块的高度自动伸展并占满所有的可用空间。</p><pre><code>body{
  display: flex,
  flex-flow: column;
  min-height: 100vh;
}
main{ flex: 1 }</code></pre><h3 class="title">缓动效果</h3><p>缓动曲线指定了动画过程在整段时间中是如何推进的。默认并不是匀速效果，而是ease。内置的调速函数有：<strong>ease-in、ease-out、ease-in-out、linear</strong></p><p><strong>弹跳动画</strong>的关键是在小球下落的过程中是加速的（ease-in），弹起转变方向是速度是减速的（ease-out）：</p><div class="exp bounce"><div class="ball"></div></div><pre><code>.ball{
  animation: bounce 3s ease-in infinite;
}
@keyframes bounce {
  60%, 80%, to { transform: translateY(300px); animation-timing-function: ease-out; }
  70%{ transform: translateY(200px); }
  90%{ transform: translateY(250px); }
}</code></pre><p><strong>cubic-bezier(x1, y1, x2, y2)</strong>允许我们自定义调速函数。四个参数代表两个控制锚点的坐标值。曲线的两个端点分别固定在(0,0)和(1,1)</p>`,43),y=t("footer",null,"2017年01月22日",-1);function k(e,S,Y,n,B,C){return a(),l("div",h,[g,t("div",m,[f,u,_,t("div",x,[t("figure",null,[t("img",{src:n.imgUrl},null,8,b),v])]),w]),y])}const F=s(d,[["render",k]]);export{F as default};
