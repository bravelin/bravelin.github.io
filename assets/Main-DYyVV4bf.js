import{_ as o,i as a,j as s,f as r,o as i,d as e,k as n}from"./index-h-_S0RxM.js";const p={};function c(d,l){const t=r("MyArticle");return i(),a(t,{title:"CSS揭秘笔记之三：字体排印和用户体验",date:"2016年12月05日"},{default:s(()=>l[0]||(l[0]=[e("div",{class:"_article-content readingNotes-cssSecret-03"},[e("h3",{class:"title"},"连字符断行"),e("p",null,"使用样式text-align：justify设置两端对齐时，会出行单词孤岛现象。"),e("p",null,"CSS3的新属性hyphens（3个值：none、manual、auto，manual为默认值），可以实现断词折行的效果。但是浏览器兼容性不是很好，chrome目前不支持。除此之外，也可以手动设置软连字符：&shy。"),e("h3",{class:"title"},"插入换行"),e("p",null,"使用伪元素+CSS3选择符可以实现结构整洁的换行功能："),e("div",{class:"exp break-line"},[e("div",null,[e("dl",null,[e("dt",null,"Name："),e("dd",null,"Lea Verou"),e("dt",null,"Email："),e("dd",null,"lea@verou.com"),e("dt",null,"Location："),e("dd",null,"Earth")])])]),e("pre",null,[e("code",null,`dt,dd{
    display: inline;
}
dd{
    font-weight: bold;
}
dd + dt::before{
    content: "\\A";
    white-space: pre;
}
dd + dd::before{
    content: "";
    font-weight: normal;
}`)]),e("h3",{class:"title"},"文本行的斑马条纹"),e("p",null,"使用水平条纹背景，将background-size设置为line-height的两倍，并设置background-position以content-box为边缘。可以实现此效果："),e("div",{class:"exp stripe-text"},"豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。"),e("pre",null,[e("code",null,`padding: 0.8em;
line-height: 2;
background-image: linear-gradient(rgba(246,246,174,0.9) 50%, transparent 0);
background-size: auto 4em;
background-origin: content-box;`)]),e("h3",{class:"title"},"调整Tab的宽度"),e("p",null,"CSS3有一个新属性：tab-size可以控制tab的字符数，如tab-size：2，一般用于代码段的缩进效果。"),e("p",null,"可以通过这种方式获取字符的unicode编码：'&'.charCodeAt(0).toString(16)。"),e("h3",{class:"title"},"自定义下划线"),e("p",null,"文本的下划线在不同浏览器下的渲染效果大相庭径。类似文本的斑马条纹，可以使用渐变生成文本的下划线："),e("pre",null,[e("code",null,`padding: 0.8em;
line-height: 2;
background: #eee linear-gradient(#f96, #f96) no-repeat 0 2.8rem;
background-size: 100% 1px;
border: 1px solid #eee;`)]),e("p",null,"在第一行字加红色的下划线："),e("div",{class:"exp underline-text-1"},"时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿；临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。"),e("p",null,"虚线的下划线："),e("pre",null,[e("code",null,`padding: 0.8em;
line-height: 2;
background: #eee linear-gradient(90deg, #f96 60%, transparent 0) repeat-x 0 2.8rem;
background-size: 0.4em 1px;
border: 1px solid #eee;`)]),e("div",{class:"exp underline-text-2"},"披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰迷津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨；雁阵惊寒，声断衡阳之浦。"),e("h3",{class:"title"},"现实中的文字效果"),e("p",null,[e("strong",null,"空心字效果："),n("使用多个text-shadow，分别为这些投影加上不同方向的少量偏移。")]),e("div",{class:"exp text-effect-1"},"CSS"),e("pre",null,[e("code",null,"text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;")]),e("p",null,"对于越粗的描边，这种方式越糟糕。这种情况下使用SVG效果比较好。"),e("p",null,[e("strong",null,"文字外发光效果：")]),e("div",{class:"exp text-effect-2"},"Glow"),e("p",null,"鼠标悬停下的发光效果："),e("div",{class:"exp text-effect-3"},"Dizzy"),e("pre",null,[e("code",null,`background: #203;
text-align: center;
font-size: 56px;
color: #ffc;
transition: 1s;
&:hover{
    color: transparent;
    text-shadow: 0 0 0.1em, 0 0 0.3em;
}`)]),e("p",null,[e("strong",null,"文字凸起效果："),n("使用一长串累加的投影，不设模糊并以1px的跨度逐渐错开，使之逐渐变暗，然后在底部加一层强烈模糊的投影，从而模拟出完整的立体效果。")]),e("div",{class:"exp text-effect-4"},"CSS 3D"),e("pre",null,[e("code",null,`text-shadow: 0 1px hsl(0,0%, 85%),0 2px hsl(0,0%, 80%),
    0 3px hsl(0,0%, 75%),0 4px hsl(0,0%, 70%),
    0 5px hsl(0,0%, 65%), 0 5px 10px black;`)]),e("p",null,"另外一种效果："),e("div",{class:"exp text-effect-5"},"RETRO"),e("pre",null,[e("code",null,`text-shadow: 1px 1px black, 2px 2px black,
    3px 3px black, 4px 4px black,
    5px 5px black, 6px 6px black,
    7px 7px black, 8px 8px black;`)]),e("h3",{class:"title"},"选择合适的鼠标光标"),e("p",null,[n("CSS2.1中提供的内建光标："),e("em",null,"default、crosshair、help、move、pointer、progress、text、wait、e-resize、ne-resize、nw-resize、n-resize、se-resize、sw-resize、s-resize、w-resize")]),e("p",null,[n("CSS3中新增的内建光标："),e("em",null,"none、context-menu、cell、verticle-text、alias、copy、no-drop、not-allowed、ew-resize、ns-resize、nesw-resize、nwse-resize、col-resize、row-resize、all-scroll、zoom-in、zoom-out")]),e("p",null,"提示禁用状态可以使用cursor：not-allowed；隐藏鼠标光标可以使用cursor：none。"),e("h3",{class:"title"},"扩大可点击区域"),e("p",null,"对于较小的区域，将其热区向外扩张可以带来可用性的提升。一种扩张的方式是使用透明的边框（如果需要边框，可以使用内嵌投影实现）"),e("div",{class:"exp expand-hot-area expand-1"},[e("div",null,"+")]),e("pre",null,[e("code",null,`border:10px solid transparent;
background-clip: padding-box;
box-shadow: 0 0 0 1px rgba(0,0,0,0.7) inset;`)]),e("p",null,"另外一个方案是使用伪元素（设置为透明，覆盖在元素上部），伪元素同样可以代表其宿主元素响应鼠标交互。"),e("div",{class:"exp expand-hot-area expand-2"},[e("div",null,"+")]),e("pre",null,[e("code",null,`position: relative;
&:before{
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
}`)]),e("h3",{class:"title"},"自定义复选框"),e("p",null,"浏览器默认的复选框和单选框样式都是无法设置的。下面所说的方案是借助组合选择符来给其他元素设置样式。当label元素与复选框关联之后，可以起到触发开关的作用。"),e("p",null,"设定DOM结构如下："),e("pre",null,[e("code",null,`<input type='checkbox' id='awesome' />
<label for='awesome'>Awesome!</label>`)]),e("div",{class:"exp checkbox"},[e("input",{type:"checkbox",id:"awesome"}),e("label",{for:"awesome"},"Awesome！")]),e("p",null,"设置样式：（checkbox需要隐藏，当不能使用display: none）"),e("pre",null,[e("code",null,`input[type="checkbox"] + label::before{
    content: "\\a0";
    display: inline-block;
    vertical-align: 0.1em;
    width: 0.8em;
    height: 0.8em;
    margin-right: 0.4em;
    border-radius: 0.2em;
    background: silver;
    text-indent: 0.15em;
    line-height: 0.65;
    cursor: pointer;
}
input[type="checkbox"]{
    position: absolute;
    clip: rect(0,0,0,0);
}
input[type="checkbox"]:checked + label::before{
    content: "\\2713";
    background: yellowgreen;
}`)]),e("h3",{class:"title"},"通过模糊来弱化背景"),e("p",null,"通常的弹出层是通过一层半透明的遮罩将后面的整体调暗以突显某个特定的UI元素。"),e("p",null,"当我们的视线聚焦在距离较近的物体上时，远处的背景是虚化的。"),e("p",null,"实现的方案是将需要模糊处理的所有元素包裹在一个元素里面，当弹出层出现时使用模糊滤镜。下面是当前页面的实现方式，当弹出时div.content会增加blur样式：（div.content并没有包裹住页面上一些元素。）"),e("pre",null,[e("code",null,`div.content{
  transition: 0.6s filter, transform 0.6s ease-out;
  &.blur{
    filter: blur(4px);
    transform: scale(0.96,0.96);
  }
}`)])],-1)])),_:1})}const x=o(p,[["render",c]]);export{x as default};
