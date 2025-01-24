import{_ as r,r as u,m as d,p,h as e,o as m,e as n,q as t}from"./index-ChNXl_Yx.js";const f={setup(){return{imgUrl:u("./imgs/01.jpeg")}}},g={class:"_article-content readingNotes-cssSecret-04"},x={class:"exp auto-width"},a=["src"];function b(i,l,v,o,w,y){const s=e("MyArticle");return m(),d(s,{title:"CSS揭秘笔记之四：结构与布局、过渡与动画",date:"2017年01月22日"},{default:p(()=>[n("div",g,[l[1]||(l[1]=n("h3",{class:"title"},"自适应内部元素",-1)),l[2]||(l[2]=n("p",null,[t("如果希望元素自适应其内容的宽度，可以设置"),n("strong",null,"width: min-content")],-1)),l[3]||(l[3]=n("p",null,"如下，如果figure元素不设置宽度的话，将占据整行。（如果浏览器不支持，可以设置一个max-width值，保证平稳退化。）",-1)),n("div",x,[n("figure",null,[n("img",{src:o.imgUrl},null,8,a),l[0]||(l[0]=n("figcaption",null,"这是一张图片的说明文字。图片底部的文字自动换行了。这是一张图片的说明文字。图片底部的文字自动换行了。这是一张图片的说明文字。图片底部的文字自动换行了。",-1))])]),l[4]||(l[4]=n("pre",null,[n("code",null,`figure{
    border:1px solid #ccc;
    max-width: 300px;
    max-width: min-content;
    padding: 8px;
    text-align: center;
    margin: 0 auto;
}`)],-1)),l[5]||(l[5]=n("h3",{class:"title"},"精确控制表格列宽",-1)),l[6]||(l[6]=n("p",null,[t("表格的列宽通常都是根据内容进行调整的，即使显示地指定了width。CSS2.1有一个属性称之为："),n("strong",null,"table-layout"),t("，默认值为auto，此时浏览器会使用自动表格布局算法调整表格的布局。如果设置为另外的一个值：fixed，则可以对表格更多控制。")],-1)),l[7]||(l[7]=n("p",null,"这种固定表格布局算法将使表格布局更快。应用此属性时需要同时指定表格的宽度。",-1)),l[8]||(l[8]=n("h3",{class:"title"},"根据兄弟元素的数量来设置样式",-1)),l[9]||(l[9]=n("p",null,"只有一个列表项时，可以使用:only-child，它等效于:first-child:last-child。即第一项同时也是最后一项。",-1)),l[10]||(l[10]=n("p",null,"例如ul元素下的li列表项，当列表项有4项时，以下选择符可以命中所有项：",-1)),l[11]||(l[11]=n("pre",null,[n("code",null,"li:first-child:nth-last-child(4),li:first-child:nth-last-child(4) ~ li { }")],-1)),l[12]||(l[12]=n("p",null,[n("strong",null,"根据兄弟元素的数量范围来匹配元素：")],-1)),l[13]||(l[13]=n("p",null,[t(":nth-child()选择符参数可以不仅可以是简单的数字，也可以如an+b类似的表达式，例如"),n("strong",null,"n+b"),t("，可以选中从第b个开始的所有子元素。")],-1)),l[14]||(l[14]=n("pre",null,[n("code",null,`//当列表项至少包含4项时，命中所有列表项
li:first-child:nth-last-child(n+4),li:first-child:nth-last-child(n+4) ~ li {}`)],-1)),l[15]||(l[15]=n("p",null,"同理，-n+b这种形式的表达式可以选中开头的b个元素。",-1)),l[16]||(l[16]=n("pre",null,[n("code",null,`//当列表项最多包含4项时，命中所有列表项
li:first-child:nth-last-child(-n+4),li:first-child:nth-last-child(-n+4) ~ li {}`)],-1)),l[17]||(l[17]=n("h3",{class:"title"},"满幅的背景，定宽的内容",-1)),l[18]||(l[18]=n("p",null,"书中将如下dom结构：",-1)),l[19]||(l[19]=n("pre",null,[n("code",null,"<footer><div class='wrapper'></div></footer>")],-1)),l[20]||(l[20]=n("p",null,"样式写法：",-1)),l[21]||(l[21]=n("pre",null,[n("code",null,`footer{
    background: #333;
}
.wrapper{
    max-width: 900px;
    margin: 1em auto;
}`)],-1)),l[22]||(l[22]=n("p",null,"利用calc，精简成如下的形式：",-1)),l[23]||(l[23]=n("pre",null,[n("code",null,`footer{
    padding: 1em calc(50% - 450px);
    background: #333;
}`)],-1)),l[24]||(l[24]=n("h3",{class:"title"},"垂直居中",-1)),l[25]||(l[25]=n("p",null,[n("strong",null,"基于绝对定位的方案："),t("此方案要求元素具有固定的宽度和高度。")],-1)),l[26]||(l[26]=n("pre",null,[n("code",null,`main {
    position: absolute;
    width: 18em;
    height: 6em;
    top: 50%;
    left: 50%;
    margin-top: -3em;
    margin-left: -9em;
}`)],-1)),l[27]||(l[27]=n("p",null,"改进型方案（并不要求元素的宽度高度固定）：",-1)),l[28]||(l[28]=n("pre",null,[n("code",null,`main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}`)],-1)),l[29]||(l[29]=n("p",null,[n("strong",null,"基于视口单位的方案："),t("此方案只适应于在视口居中的场景。")],-1)),l[30]||(l[30]=n("p",null,"视口单位1vw表示视口宽度的1%，1vh表示视口高度的1%。1vmin取1vh和1vw两者中的最小值，1vmax取1vh和1vw两者中的最大值。",-1)),l[31]||(l[31]=n("p",null,"下面样式可以使main元素居中：",-1)),l[32]||(l[32]=n("pre",null,[n("code",null,`main {
    width: 18em;
    padding: 1em 1.5em;
    margin: 50vh auto 0;
    transform: translateY(-50%);
}`)],-1)),l[33]||(l[33]=n("p",null,[n("strong",null,"基于Flexbox的方案："),t("设置父元素display: flex，待居中元素margin: auto即可。")],-1)),l[34]||(l[34]=n("h3",{class:"title"},"紧贴底部的页脚",-1)),l[35]||(l[35]=n("p",null,[n("strong",null,"使用视口+calc计算方案："),t("设置中间内容区域的min-height为页面的高度减去头部和底部的高度。页面的整体结构如下：")],-1)),l[36]||(l[36]=n("pre",null,[n("code",null,"<header></header><main></main><footer></footer></code>")],-1)),l[37]||(l[37]=n("p",null,"如果header和footer的高度分别为2.5em和7em：",-1)),l[38]||(l[38]=n("pre",null,[n("code",null,`main {
    min-height: calc(100vh - 2.5em - 7em)
    box-sizing: border-box;
}`)],-1)),l[39]||(l[39]=n("p",null,[n("strong",null,"Flexbox的方案："),t("body元素设置为display: flex，触发伸缩盒布局。内容区块的高度自动伸展并占满所有的可用空间。")],-1)),l[40]||(l[40]=n("pre",null,[n("code",null,`body{
    display: flex,
    flex-flow: column;
    min-height: 100vh;
}
main{ flex: 1 }`)],-1)),l[41]||(l[41]=n("h3",{class:"title"},"缓动效果",-1)),l[42]||(l[42]=n("p",null,[t("缓动曲线指定了动画过程在整段时间中是如何推进的。默认并不是匀速效果，而是ease。内置的调速函数有："),n("strong",null,"ease-in、ease-out、ease-in-out、linear")],-1)),l[43]||(l[43]=n("p",null,[n("strong",null,"弹跳动画"),t("的关键是在小球下落的过程中是加速的（ease-in），弹起转变方向是速度是减速的（ease-out）：")],-1)),l[44]||(l[44]=n("div",{class:"exp bounce"},[n("div",{class:"ball"})],-1)),l[45]||(l[45]=n("pre",null,[n("code",null,`.ball{
    animation: bounce 3s ease-in infinite;
}
@keyframes bounce {
    60%, 80%, to { transform: translateY(300px); animation-timing-function: ease-out; }
    70%{ transform: translateY(200px); }
    90%{ transform: translateY(250px); }
}`)],-1)),l[46]||(l[46]=n("p",null,[n("strong",null,"cubic-bezier(x1, y1, x2, y2)"),t("允许我们自定义调速函数。四个参数代表两个控制锚点的坐标值。曲线的两个端点分别固定在(0,0)和(1,1)")],-1))])]),_:1})}const S=r(f,[["render",b]]);export{S as default};
