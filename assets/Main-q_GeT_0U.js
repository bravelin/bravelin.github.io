import{_ as d,r as p,m as s,p as e,h as u,o as g,e as l,q as r,x as a}from"./index-CrCJ6E4y.js";const x={setup(){return{headerImg:p("./logo.jpg")}}},b={class:"_article-content readingNotes-cssSecret-02"},m={class:"exp diamond-1"},v=["src"],f={class:"exp diamond-2"},k=["src"],w={class:"exp cuttingAngle-6"},y=["src"],z={class:"exp filter-2"},A=["src"],I={class:"exp filter-3"},S=["src"],V={class:"exp filter-4"};function X(o,n,B,t,C,G){const i=u("MyArticle");return g(),s(i,{title:"CSS揭秘笔记之二：形状与视觉效果",date:"2016年11月08日"},{default:e(()=>[l("div",b,[n[0]||(n[0]=l("h3",{class:"title"},"自适应的椭圆",-1)),n[1]||(n[1]=l("p",null,"border-radius可以单独指定水平和垂直半径。用斜杠分隔这两个值。",-1)),n[2]||(n[2]=l("p",null,"指定宽高的一半，可以得到一个精确的椭圆：border-radius: 155px / 60px;",-1)),n[3]||(n[3]=l("div",{class:"exp ellipse-1"},[l("div")],-1)),n[4]||(n[4]=l("p",null,"border-radius还可以使用百分比值。这个百分比是基于元素的尺寸进行解析。这意味着相同的百分比会计算出不同的水平和垂直半径。",-1)),n[5]||(n[5]=l("p",null,[r("要创建自适应的椭圆，使用："),l("strong",null,"border-radius: 50% 50%"),r(" 就可以。")],-1)),n[6]||(n[6]=l("p",null,"border-radius支持四个角设置成不同的水平和垂直半径。方法是在斜杠之前指定1~4个值，在斜杠之后指定另外的1~4个值。如10px / 5px 20px，展开为10px 10px 10px 10px / 5px 20px 5px 20px。四个角的水平半径为10px，垂直半径则分别为5,20,5,20px。",-1)),n[7]||(n[7]=l("p",null,[r("半椭圆效果："),l("strong",null,"border-radius:50% / 100% 100% 0 0")],-1)),n[8]||(n[8]=l("div",{class:"exp ellipse-2"},[l("div")],-1)),n[9]||(n[9]=l("p",null,[r("沿着纵轴劈开的半椭圆效果："),l("strong",null,"border-radius:100% 0 0 100% / 50%")],-1)),n[10]||(n[10]=l("div",{class:"exp ellipse-3"},[l("div")],-1)),n[11]||(n[11]=l("p",null,[r("四分之一椭圆效果："),l("strong",null,"border-radius: 100% 0 0 / 100% 0 0")],-1)),n[12]||(n[12]=l("div",{class:"exp ellipse-4"},[l("div")],-1)),n[13]||(n[13]=l("h3",{class:"title"},"平行四边形",-1)),n[14]||(n[14]=l("p",null,"在视觉设计中，平行四边形可以表达出一种动感。",-1)),n[15]||(n[15]=l("p",null,[l("strong",null,"方法一：嵌套元素抵消变形")],-1)),n[16]||(n[16]=l("div",{class:"exp paralle-1"},[l("div",null,[l("div",null,"平行四边形")])],-1)),n[17]||(n[17]=l("pre",null,[l("code",null,`div{
    background-color: #58a;
    transform: skewX(-45deg);
}
div>div{
    transform: skewX(45deg);
}`)],-1)),n[18]||(n[18]=l("p",null,[l("strong",null,"方法二：伪元素方案"),r("，伪元素设置z-index为-1，使堆叠层次在主元素之后。此种技巧还适用于其他任何变形样式。")],-1)),n[19]||(n[19]=l("pre",null,[l("code",null,`div{
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
}`)],-1)),n[20]||(n[20]=l("div",{class:"exp paralle-2"},[l("div",null,"平行四边形")],-1)),n[21]||(n[21]=l("h3",{class:"title"},"菱形图片",-1)),n[22]||(n[22]=l("p",null,[l("strong",null,"基于变形的方案：旋转并放大1.42倍。"),r("如果不放大将成八角形。")],-1)),l("div",m,[l("div",null,[l("img",{src:t.headerImg},null,8,v)])]),n[23]||(n[23]=l("pre",null,[l("code",null,`div{
    width:150px;
    height:150px;
    transform: rotate(45deg);
    overflow: hidden;
}
div>img{
    width:100%;
    height:100%;
    transform: rotate(-45deg) scale(1.42);
}`)],-1)),n[24]||(n[24]=l("p",null,[l("strong",null,"裁切路径方案。"),r("如果处理的是一张非正方形的图片，上面的方法就会有问题。"),l("strong",null,"clip-path"),r("允许将元素裁剪成任何形状，并支持动画。只是浏览器的支持程度有限。")],-1)),l("div",f,[l("img",{src:t.headerImg},null,8,k)]),n[25]||(n[25]=l("pre",null,[l("code",null,`img{
    width:150px;
    height:150px;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    transition: clip-path 1s;
}
img:hover{
    clip-path: polygon(0 0, 100% 0,100% 100%,0 100%);
}`)],-1)),n[26]||(n[26]=l("h3",{class:"title"},"切角效果",-1)),n[27]||(n[27]=l("p",null,"切角效果是一种流行的设计风格，它的常见形态是将元素的一个或者多个角切成45度的缺口。",-1)),n[28]||(n[28]=l("p",null,[l("strong",null,"使用渐变实现一个角的切角效果：")],-1)),n[29]||(n[29]=l("div",{class:"exp cuttingAngle-1"},[l("div")],-1)),n[30]||(n[30]=l("pre",null,[l("code",null,`background: #58a;
background: linear-gradient(-45deg, transparent 15px, #58a 15px);`)],-1)),n[31]||(n[31]=l("p",null,[l("strong",null,"使用两层渐变实现两个角的切角效果：（注意需要使用background-size设置每层的渐变宽度为50%，否则会相互覆盖）")],-1)),n[32]||(n[32]=l("div",{class:"exp cuttingAngle-2"},[l("div")],-1)),n[33]||(n[33]=l("pre",null,[l("code",null,`background: linear-gradient(-45deg, transparent 15px, #58a 15px) top right, linear-gradient(45deg, transparent 15px, #58a 15px) top left;
background-size: 50% 100%;
background-repeat: no-repeat;`)],-1)),n[34]||(n[34]=l("p",null,[l("strong",null,"使用四层渐变实现四个角的切角效果：（四层渐变的区域各占四分之一）")],-1)),n[35]||(n[35]=l("div",{class:"exp cuttingAngle-3"},[l("div")],-1)),n[36]||(n[36]=l("pre",null,[l("code",null,`background: #58a;
background: linear-gradient(-45deg, transparent 15px, #58a 15px) bottom right,
                      linear-gradient(45deg, transparent 15px, #58a 15px) bottom left,
                      linear-gradient(-135deg, transparent 15px, #58a 15px) top right,
                      linear-gradient(135deg, transparent 15px, #58a 15px) top left;
background-size: 50% 50%;
background-repeat: no-repeat;`)],-1)),n[37]||(n[37]=l("p",null,[l("strong",null,"弧形切角：使用径向渐变实现内凹圆角效果")],-1)),n[38]||(n[38]=l("div",{class:"exp cuttingAngle-4"},[l("div")],-1)),n[39]||(n[39]=l("pre",null,[l("code",null,`background: #58a;
background: radial-gradient(circle at top left, transparent 15px,#58a 15px) top left,
                      radial-gradient(circle at bottom left, transparent 15px,#58a 15px) bottom left,
                      radial-gradient(circle at top right, transparent 15px,#58a 15px) top right,
                      radial-gradient(circle at bottom right, transparent 15px,#58a 15px) bottom right;
background-size: 50% 50%;
background-repeat: no-repeat;`)],-1)),n[40]||(n[40]=l("p",null,[l("strong",null,"使用内联SVG与border-image实现切角效果："),r("border宽度设置为20px，大约是使用渐变实现效果时15px的1.414倍。")],-1)),n[41]||(n[41]=l("div",{class:"exp cuttingAngle-5"},[l("div")],-1)),n[42]||(n[42]=l("pre",null,[l("code",null,`border:20px solid #58a;
border-image: 1 url("data:image/svg+xml,
                        <svg xmlns='http://www.w3.org/2000/svg' width='3' height='3' fill='%2358a'>
                         <polygon points='0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2'/></svg>");
background: #58a;
background-clip: padding-box;`)],-1)),n[43]||(n[43]=l("p",null,[l("strong",null,"使用clip-path实现切角效果（适应于元素背景是图片的情况下）：")],-1)),l("div",w,[l("img",{src:t.headerImg},null,8,y)]),n[44]||(n[44]=l("pre",null,[l("code",null,"clip-path: polygon(20px 0,calc(100% - 20px) 0,100% 20px,100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px, 20px 0);")],-1)),n[45]||(n[45]=l("h3",{class:"title"},"梯形标签页",-1)),n[46]||(n[46]=l("p",null,"使用3D旋转+伪元素模拟出梯形效果：（对元素使用了3D变形之后，其内部的变形效应几乎是不可逆转的）",-1)),n[47]||(n[47]=l("div",{class:"exp tab-1"},[l("div")],-1)),n[48]||(n[48]=l("pre",null,[l("code",null,`position: relative;
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
}`)],-1)),n[49]||(n[49]=l("p",null,"注意在Y轴上需要放大一定的倍数。",-1)),n[50]||(n[50]=l("h3",{class:"title"},"简单的饼图",-1)),n[51]||(n[51]=l("p",null,"若要得到20%的比率显示，将元素显示成圆形，一半为绿色，一半为棕色；伪元素占据右半部分，并设置背景色为绿色，绕圆心旋转72deg，可以得到如下的效果。",-1)),n[52]||(n[52]=l("div",{class:"exp pie pie-1"},[l("div")],-1)),n[53]||(n[53]=l("pre",null,[l("code",null,`width:220px;
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
}`)],-1)),n[54]||(n[54]=l("p",null,"上述方案在显示0~50%比率时是正常的，要得到60%比率的饼图，需要将伪元素背景色设置为棕色，并只旋转36deg。",-1)),n[55]||(n[55]=l("div",{class:"exp pie pie-2"},[l("div")],-1)),n[56]||(n[56]=l("pre",null,[l("code",null,`&:before{
    background-color: #655;
    transform: rotate(36deg);
}`)],-1)),n[57]||(n[57]=l("p",null,"从0%到100%的进度指示器：伪元素在0~180deg范围之间旋转，每当旋转到180deg时，改变背景色，以实现50%~100%的比率显示效果。",-1)),n[58]||(n[58]=l("div",{class:"exp pie pie-3"},[l("div")],-1)),n[59]||(n[59]=l("pre",null,[l("code",null,`@keyframes pie-spin {
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
}`)],-1)),n[60]||(n[60]=l("p",null,"不足点是在比率为50%的时候，因背景色的突变，会闪动一下。",-1)),n[61]||(n[61]=l("p",null,[l("strong",null,"负的动画时延（animation-delay）会直接跳至动画中的任意时间点，并定格在那里。"),r("如果动画持续时间为6秒，animation-delay设置为-1.2s可以使饼图显示出20%的比率。为计算简单考虑，可以设置动画持续时间为100s。")],-1)),n[62]||(n[62]=l("p",null,[r("因为动画是设置在伪元素上的，为方便灵活显示不同的比率，可在主元素内联设置animation-delay，伪元素则"),l("strong",null,"inherit"),r("这个值。")],-1)),n[63]||(n[63]=l("div",{class:"exp pie pie-4"},[l("div",{style:{"animation-delay":"-20s"}})],-1)),n[64]||(n[64]=l("pre",null,[l("code",null,`&:before{
    animation: pie-spin 50s linear infinite, pie-bg 100s step-end infinite;
    animation-play-state: paused;
    animation-delay:inherit;
}`)],-1)),n[65]||(n[65]=l("p",null,"元素简单设置即可：",-1)),n[66]||(n[66]=l("pre",null,[l("code",null,"<div style='animation-delay:-20s'></div>")],-1)),n[67]||(n[67]=l("p",null,"使用SVG也可以实现饼图，但感觉有点麻烦。而且SVG的兼容性也不是很好。",-1)),n[68]||(n[68]=l("h3",{class:"title"},"单侧投影",-1)),n[69]||(n[69]=l("p",null,"box-shadow的通常使用方式是指定3个长度值和一个颜色值：",-1)),n[70]||(n[70]=l("pre",null,[l("code",null,"box-shadow: 2px 3px 4px rgba(0,0,0,.5)")],-1)),n[71]||(n[71]=l("div",{class:"exp shadow-1"},[l("div")],-1)),n[72]||(n[72]=l("p",null,[l("strong",null,"阴影的绘制原理：")],-1)),n[73]||(n[73]=l("p",null,"(1)：以该元素相同的尺寸和位置，绘制一个背景色rgba(0,0,0,.5)的矩形",-1)),n[74]||(n[74]=l("p",null,"(2)：将此矩形右移2px，下移3px",-1)),n[75]||(n[75]=l("p",null,"(3)：使用高斯模糊算法将它进行4px的模糊处理。在阴影的边缘发生阴影色和纯透明色之间的颜色过渡长度近似于模糊半径的两倍。",-1)),n[76]||(n[76]=l("p",null,"(4)：切除模糊后的矩形与原始元素的交集部分",-1)),n[77]||(n[77]=l("p",null,[l("strong",null,"没有任何阴影是绘制在元素的下层的。"),r("虽然阴影看起来是在元素的“后面”。")],-1)),n[78]||(n[78]=l("p",null,[r("要得到单侧投影的效果需要使用到box-shadow的第四个参数："),l("strong",null,"扩张半径"),r("。这个参数会根据指定的值去扩大或缩小（当为负值时）投影的尺寸。")],-1)),n[79]||(n[79]=l("p",null,"使用负的扩张半径值，使它的值刚好等于模糊半径值，可以使投影的尺寸与元素的尺寸完全一致。此时使用偏移量移动投影，可以得到单侧效果。",-1)),n[80]||(n[80]=l("pre",null,[l("code",null,`background: #58a;
box-shadow: 0 8px 4px -4px rgba(0,0,0,.5);`)],-1)),n[81]||(n[81]=l("div",{class:"exp shadow-2"},[l("div")],-1)),n[82]||(n[82]=l("p",null,[r("叠加上面的效果，可以得到"),l("strong",null,"双侧投影：")],-1)),n[83]||(n[83]=l("div",{class:"exp shadow-3"},[l("div")],-1)),n[84]||(n[84]=l("pre",null,[l("code",null,`background: #58a;
box-shadow: 8px 0 4px -4px rgba(0,0,0,.5), -8px 0 4px -4px rgba(0,0,0,.5);`)],-1)),n[85]||(n[85]=l("h3",{class:"title"},"不规则投影",-1)),n[86]||(n[86]=l("p",null,[r("滤镜"),l("strong",null,"filter"),r("效果可以实现不规则的投影。它的写法是指定一些滤镜函数，以空格分隔，如：")],-1)),n[87]||(n[87]=l("pre",null,[l("code",null,"filter: blur() grayscale() drop-shadow()")],-1)),n[88]||(n[88]=l("p",null,"drop-shadow()滤镜参数和box-shadow基本类似，但不包括扩张半径，不包括inset关键字，也不支持多层投影。使用滤镜应用下面的切角矩形：",-1)),n[89]||(n[89]=l("div",{class:"exp cuttingAngle-3 filter-1"},[l("div")],-1)),n[90]||(n[90]=l("pre",null,[l("code",null,"filter: drop-shadow(2px 2px 10px rgba(0,0,0,0.5))")],-1)),n[91]||(n[91]=l("h3",{class:"title"},"染色效果",-1)),n[92]||(n[92]=l("p",null,[l("strong",null,"基于滤镜的方案："),r("sepia()滤镜会给图片增加一种降饱和度的橙黄色效果；saturate()滤镜可以提升每个像素的饱和度；hue-rotate()滤镜可以将每个像素的色相以指定的度数进行偏移。")],-1)),l("div",z,[l("img",{src:t.headerImg},null,8,A)]),n[93]||(n[93]=l("pre",null,[l("code",null,`filter: sepia(1) saturate(4) hue-rotate(295deg);
transition: 0.5s filter;
&:hover{
    filter: none
}`)],-1)),n[94]||(n[94]=l("p",null,"滤镜支持transition渐变。",-1)),n[95]||(n[95]=l("p",null,[l("strong",null,"基于混合模式的方案："),r("在Adobe Photo中混合模式定义了上层元素的颜色与下层元素的颜色进行混合的方式。使用luminosity模式可以实现染色效果。这种模式会保留上层元素的HSL亮度信息，并从它的下层吸取色相饱和度信息。")],-1)),n[96]||(n[96]=l("p",null,"mix-blend-mode可以为整个元素设置混合模式。background-blend-mode可以为每层背景单独指定混合模式。",-1)),n[97]||(n[97]=l("p",null,"如果div中包含img，应用如下样式可以得到染色效果：",-1)),n[98]||(n[98]=l("pre",null,[l("code",null,`div{
    background: hsl(335, 100%, 50%);
    >img{
        width:100%;
        height:100%;
        mix-blend-mode: luminosity;
    }
}`)],-1)),l("div",I,[l("div",null,[l("img",{src:t.headerImg},null,8,S)])]),n[99]||(n[99]=l("p",null,"另外一种方式，是将图片当做div的背景。",-1)),n[100]||(n[100]=l("pre",null,[l("code",null,`width: 150px;
height: 150px;
background-size: cover;
background-color: hsl(335, 100%, 50%);
background-blend-mode: luminosity;
transition: .5s background-color;
background-image: url("/static/assets/header.jpg");
&:hover{
    background-color: transparent;
}`)],-1)),l("div",V,[l("div",{style:a({"background-image":"url("+t.headerImg+")"})},null,4)]),n[101]||(n[101]=l("h3",{class:"title"},"折角效果",-1)),n[102]||(n[102]=l("p",null,[l("strong",null,"使用渐变实现45度折角效果：")],-1)),n[103]||(n[103]=l("p",null,"需要使用两层渐变，一层渐变实现切角效果；另外一层实现右上角的折角，使用background-size限制尺寸为折角那区块，并且其值是切角渐变的1.414倍。",-1)),n[104]||(n[104]=l("div",{class:"exp angle-1"},[l("div")],-1)),n[105]||(n[105]=l("pre",null,[l("code",null,`background: #58a;
background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,0.4) 0) no-repeat 100% 0 / 2em 2em,linear-gradient(-135deg, transparent 1.414em, #58a 0);`)],-1)),n[106]||(n[106]=l("p",null,[l("strong",null,"其他角度折角的解决方案："),r("如下30度折角的方法。")],-1)),n[107]||(n[107]=l("div",{class:"exp angle-2"},[l("div")],-1)),n[108]||(n[108]=l("pre",null,[l("code",null,`background: #58a;
background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,0.4) 0) no-repeat 100% 0 / 3em 1.73em,linear-gradient(-150deg, transparent 1.5em, #58a 0);`)],-1)),n[109]||(n[109]=l("p",null,"折角的长宽3em和1.73em是依据三角形的勾股定理得来的。",-1)),n[110]||(n[110]=l("p",null,"上面的折角其实是不真实的，真实的折角会旋转一定的角度。由于无法旋转背景，只好使用伪元素。",-1)),n[111]||(n[111]=l("p",null,"伪元素的写法：",-1)),n[112]||(n[112]=l("pre",null,[l("code",null,`position: relative;
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
}`)],-1)),n[113]||(n[113]=l("div",{class:"exp angle-3"},[l("div")],-1)),n[114]||(n[114]=l("p",null,"要做到真实的效果，需要将折页三角形的宽和高对调，向上偏移一定的位置并旋转30度。",-1)),n[115]||(n[115]=l("div",{class:"exp angle-3 angle-4"},[l("div")],-1)),n[116]||(n[116]=l("pre",null,[l("code",null,`&:before{
    width:1.73em;
    height:3em;
    transform: translateY(-1.3em) rotate(-30deg);
    transform-origin: bottom right;
}`)],-1)),n[117]||(n[117]=l("p",null,"更加好看的一种折角效果：（增加了阴影，圆角）",-1)),n[118]||(n[118]=l("div",{class:"exp angle-3 angle-4 angle-5"},[l("div")],-1)),n[119]||(n[119]=l("pre",null,[l("code",null,`border-radius: .5em;
&:before{
    border-bottom-left-radius: inherit;
    box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0,0,0,0.15);
}`)],-1))])]),_:1})}const N=d(x,[["render",X]]);export{N as default};
