import{u as N}from"./highlight-8de9ea77.js";import{_ as M,u as A,b as W,c as q,e as c,k as B,j as L}from"./index-5b6eec6c.js";let v=null;const E={setup(){N()},data(){return{currRotateDeg:0,needRotateDeg:0,needRotateDuration:5,inRotating:!1,winningPrize:null,prizes:[{name:"移动电源",deg:0},{name:"¥100元现金券",deg:0},{name:"谢谢惠顾",deg:0},{name:"iphone 6s",deg:0},{name:"签字笔",deg:0},{name:"再来一次",deg:0}]}},mounted(){this.drawWheel(),v=A()},methods:{drawWheel(){const n=this,r=Math.PI,e=n.$refs.wheel.getContext("2d");e.strokeStyle="#ffb534",e.lineWidth=8,e.arc(331,331,323,0,2*r),e.stroke(),e.beginPath(),e.strokeStyle="#de910d",e.fillStyle="#f8d300",e.lineWidth=1,e.arc(331,331,319,0,2*r),e.stroke(),e.fill(),e.beginPath(),e.strokeStyle="#d28500",e.lineWidth=11,e.arc(331,331,289,0,2*r),e.stroke();const h=6,a=8,d=307;let s=360/18*(r/180),l=r/2;e.fillStyle="#fff";for(let _=0;_<9;_++)e.beginPath(),e.arc(331+Math.cos(l)*d,331+Math.sin(l)*d,h,0,2*r),e.fill(),l+=s,e.beginPath(),e.arc(331+Math.cos(l)*d,331+Math.sin(l)*d,a,0,2*r),e.fill(),l+=s;const u=n.prizes,k=[{color:"#b92401",bgColor:"#fff6e5"},{color:"#590202",bgColor:"#ffd488"},{color:"#b92401",bgColor:"#fee0d5"}];s=360/u.length*(r/180);const S=360/u.length,x=283;l=r/2;let P=90,R;e.font="bold 44px 微软雅黑";const D=2*r*x*.58/u.length;e.textAlign="center",e.textBaseline="middle";let p,z,b,T,C,o,f=0;for(f=0;f<u.length;f++)o=u[f],e.beginPath(),e.moveTo(331,331),e.arc(331,331,x,l,l+s),e.lineTo(331,331),R=k[f%3],e.fillStyle=R.bgColor,e.fill(),e.closePath(),o.deg=P+S/2,o.deg>360&&(o.deg=o.deg-360),o.deg<270?o.deg=270-o.deg:o.deg=360-(o.deg-270),e.fillStyle=R.color,e.save(),e.translate(331,331),e.rotate(l+s/2+r/2),p=u[f].name,e.measureText(p).width>D?(C=p.split(" "),C.length==2?(z=C[0],b=C[1]):(T=n.getTextSplitPos(p,e,D),z=p.substr(0,T),b=p.substr(T)),e.fillText(z,0,-x*.72,D),e.fillText(b,0,-x*.52,D)):e.fillText(p,0,-x*.65),e.restore(),l+=s,P+=S;const t=n.$refs.pointer.getContext("2d");t.fillStyle="#ffa406";const i=79,g=210-i;t.arc(i,g,i,0,2*r),t.fill(),t.beginPath();const w=80,y=64;t.fillStyle="#eb1244",t.moveTo(i,0),t.lineTo(i-y/2,w),t.lineTo(i,w),t.lineTo(i,0),t.closePath(),t.fill(),t.fillStyle="#b9072f",t.beginPath(),t.moveTo(i,0),t.lineTo(i+y/2,w),t.lineTo(i,w),t.lineTo(i,0),t.closePath(),t.fill(),t.beginPath(),t.fillStyle="#fa5f75",t.arc(i,g,i-15,0,2*r),t.closePath(),t.fill(),t.beginPath();const m=t.createRadialGradient(i,g,0,i,g,i-25);m.addColorStop(0,"#f5385f"),m.addColorStop(.75,"#f5385f"),m.addColorStop(.82,"#eb1244"),m.addColorStop(1,"#eb1244"),t.fillStyle=m,t.arc(i,g,i-25,0,2*r),t.closePath(),t.fill(),t.font="bold 36px 微软雅黑",t.textAlign="center",t.textBaseline="middle",t.fillStyle="#fff",t.fillText("点击",i,g-24),t.fillText("抽奖",i,g+16)},getTextSplitPos(n,r,e){if(n.length<=3)return n.length;if(/^[\u4E00-\u9FFF]+$/.test(n))return Math.ceil(n.length/2);{let h=n.substr(0,3);for(let a=3;a<n.length;a++)if(h=h+n.charAt(a),r.measureText(h).width>e)return a+1}return n.length},doClickLotteryBtn(){const n=this;if(n.inRotating)return v.info("抽奖中...");const r=n.prizes;n.winningPrize=r[parseInt(Math.random()*r.length)],n.inRotating=!0;const e=360*3+n.winningPrize.deg-n.currRotateDeg%360;n.needRotateDuration=.75*(e/180),n.needRotateDeg=n.currRotateDeg+e,n.currRotateDeg=n.needRotateDeg},doHandlerRotateEnd(){const n=this;n.inRotating&&(n.inRotating=!1,v.success("您抽中了："+n.winningPrize.name))}}},F={class:"article-container spin-draw-article"},$=c("h2",{class:"article-title"},"一个转盘抽奖的前端实现例子",-1),H={class:"article-content"},I=c("p",null,"转盘抽奖一般用于吸引用户，提升活跃度。上周应产品需求，实现了这个功能。下面的转盘使用随机数模拟中奖结果（可尝试点击）：",-1),V={class:"exp"},j=L(`<p>个人觉得实现的难点有三：一是如何根据奖品的数目绘制转盘背景；二是如何将不同长度的奖品文字绘制在扇区上面，并旋转相应的角度；三是如何计算出中奖之后转盘应该旋转的角度。</p><p>如果这三点实现了的话，再加上用户可抽奖次数控制逻辑、中奖之后奖品的弹窗显示等功能基本上就完成了。</p><p>定义奖品的数据结构：</p><pre><code>prizes: [
      { name: &#39;移动电源&#39;, deg: 0 }, { name: &#39;¥100元现金券&#39;, deg: 0 }, { name: &#39;谢谢惠顾&#39;, deg: 0 },
      { name: &#39;iphone 6s&#39;, deg: 0 }, { name: &#39;签字笔&#39;, deg: 0 }, { name: &#39;再来一次&#39;, deg: 0 }
  ]</code></pre><p>奖品对象中的deg保存的是当转盘旋转角度为0时（初始状态），如果让指针指向奖品时转盘需要旋转的角度。</p><p>绘制转盘背景：</p><p>绘制黄色外边框及填充圆没什么好说的，注意在边框处有一层大小间隔的白点。绘制白点需要计算出白点的圆心位置：</p><pre><code>// 绘制白点
var pi = Math.PI
var smallRadius = 6 // 小的白点半径
var bigRadius = 8 // 大的白点的半径
var dotRadius = 307 // 白点圆心距转盘圆心的距离
var perDeg = 360 / 18 * (pi / 180) // 总共18个点，perDeg定义出相邻两点间间隔的弧度数
var currDeg = pi / 2 // 从90度开始，转盘圆心位置(331,331)
wheelCtx.fillStyle = &#39;#fff&#39;

for (var k = 0; k &lt; 9; k++) {
  wheelCtx.beginPath()
  wheelCtx.arc(331 + Math.cos(currDeg) * dotRadius, 331 + Math.sin(currDeg) * dotRadius, smallRadius, 0, 2 * pi) // 绘制小的白点
  wheelCtx.fill()
  currDeg += perDeg
  wheelCtx.beginPath()
  wheelCtx.arc(331 + Math.cos(currDeg) * dotRadius, 331 + Math.sin(currDeg) * dotRadius, bigRadius, 0, 2 * pi) // 绘制大的白点
  wheelCtx.fill()
  currDeg += perDeg
}</code></pre><p>接下来是绘制礼物所在的扇区及礼物文本。从90度的位置开始绘制。因为指针的位置在270度，所以礼物的旋转度数使用以下方法求得：</p><pre><code>// 求得礼物的旋转度数
prize.deg = currDegNum + perDegNum / 2
if (prize.deg &gt; 360) {
  prize.deg = prize.deg - 360
}
if (prize.deg &lt; 270) {
  prize.deg = 270 - prize.deg
} else {
  prize.deg = 360 - (prize.deg - 270)
}</code></pre><p> currDegNum是扇区右边缘的度数，指针指向的是扇区的中心点，所以需要加二分之一的扇区度数。上述方式求得的奖品旋转依次为：150、90、30、330、270、210度。（即初始状态下如果中了&quot;移动电源&quot;，转盘转150+n*360度就可以了）</p><p> 绘制奖品的文本是比较麻烦的，因为它们的长度不一。有可能需要分两行显示，如&quot;谢谢惠顾&quot;；也有可能一行显示足矣，如&quot;签字笔&quot;。因此需要求得扇区所能容纳一行文本的宽度是多少，当文本的宽度超过此宽度时，则需要分两行显示。（有一种特殊点的情况，如&quot;iphone 6s&quot;，中间有空格，程序中是从空格处分隔成两行。） </p><p>文本绘制的另外一个问题是如何绘制出旋转一定角度的文本。处理方式是使用绘图环境变换：</p><pre><code>wheelCtx.save()
wheelCtx.translate(331, 331)
wheelCtx.rotate(currDeg + perDeg / 2 + pi / 2)
// draw text...
wheelCtx.restore()</code></pre><p>将绘图环境的原点移动到转盘中心点，并旋转当前扇区的中线度数+90度。</p><p>绘制扇区和文本的完整代码如下：</p><pre><code>var pieStyleArr = [{color: &#39;#b92401&#39;, bgColor: &#39;#fff6e5&#39;}, {color: &#39;#590202&#39;, bgColor: &#39;#ffd488&#39;}, {color: &#39;#b92401&#39;, bgColor: &#39;#fee0d5&#39;}] // 定义每个扇区的字体颜色和填充背景色，当扇区数目大于3时，则从头取
perDeg = 360 / prizes.length * (pi / 180) // 每个扇区的弧度数
var perDegNum = 360 / prizes.length // 每个扇区的度数
var pieRadius = 283 // 扇区的半径
currDeg = pi / 2 // 起始的弧度数
var currDegNum = 90
var pieStyle

wheelCtx.font = &#39;bold 44px 微软雅黑&#39;
var pieLineWidth = (2 * pi * pieRadius * 0.58) / prizes.length // 每个扇区上所能容纳一行字的宽度
wheelCtx.textAlign = &#39;center&#39;
wheelCtx.textBaseline = &#39;middle&#39;

var prizeName
var topText
var bottomText
var splitTextPos
var splitArr
var prize

for (k = 0; k &lt; prizes.length; k++) {
    prize = prizes[k]
    // 绘制扇区
    wheelCtx.beginPath()
    wheelCtx.moveTo(331, 331)
    wheelCtx.arc(331, 331, pieRadius, currDeg, currDeg + perDeg)
    wheelCtx.lineTo(331, 331)
    pieStyle = pieStyleArr[k % 3]
    wheelCtx.fillStyle = pieStyle.bgColor
    wheelCtx.fill()
    wheelCtx.closePath()

    prize.deg = currDegNum + perDegNum / 2 // 求得礼物的旋转度数
    if (prize.deg &gt; 360) {
      prize.deg = prize.deg - 360
    }
    if (prize.deg &lt; 270) {
      prize.deg = 270 - prize.deg
    } else {
      prize.deg = 360 - (prize.deg - 270)
    }
    // 写入文本
    wheelCtx.fillStyle = pieStyle.color
    wheelCtx.save()

    wheelCtx.translate(331, 331)
    wheelCtx.rotate(currDeg + perDeg / 2 + pi / 2)

    prizeName = prizes[k].name
    if (wheelCtx.measureText(prizeName).width &gt; pieLineWidth) { // 处理两行字的情况
      splitArr = prizeName.split(&#39; &#39;)
      if (splitArr.length == 2) { // 有空格间隔
        topText = splitArr[0]
        bottomText = splitArr[1]
      } else {
        splitTextPos = that.getTextSplitPos(prizeName, wheelCtx, pieLineWidth)
        topText = prizeName.substr(0, splitTextPos)
        bottomText = prizeName.substr(splitTextPos)
      }
      wheelCtx.fillText(topText, 0, -pieRadius * 0.72, pieLineWidth)
      wheelCtx.fillText(bottomText, 0, -pieRadius * 0.52, pieLineWidth)
    } else {
      wheelCtx.fillText(prizeName, 0, -pieRadius * 0.65) // 一行字直接绘制在中心点
    }

    wheelCtx.restore()
    currDeg += perDeg
    currDegNum += perDegNum
  }</code></pre><p>获取文本的间隔点位置方法如下：如果文本长度大于3个字符，一行显示就够了；如果两行显示的话，先判断文本是否都是汉字，因为汉字的字宽基本一致，可以直接从中间位置分隔。否则使用measureText计算出来。</p><pre><code>getTextSplitPos: function (text, ctx, lineWidth) { // 计算出文本换行的分割点
  if (text.length &lt;= 3) {
    return text.length
  }
  if (/^[\\u4E00-\\u9FFF]+$/.test(text)) { // 文本都是汉字，从中间分隔
    return Math.ceil(text.length / 2)
  } else { // 依据字宽计算出分隔点
    var str = text.substr(0, 3)
    for (var i = 3; i &lt; text.length; i++) {
      str = str + text.charAt(i)
      if (ctx.measureText(str).width &gt; lineWidth) {
        return i + 1
      }
    }
  }
  return text.length
}</code></pre><p>关于点击抽奖之后转盘的旋转：其实当点击抽奖按钮之时，中奖结果已经出来了。接下来只是让转盘旋转一定的角度，使指针指向抽中的结果，并在旋转完之后显示结果。</p><p>使用一变量记下当前转盘的旋转角度，转盘抽中之后旋转的角度needRotateDeg以及旋转的时间needRotateDuration如下计算出来：</p><pre><code>var deltDeg = 360 * 3 + that.winningPrize.deg - that.currRotateDeg % 360
that.needRotateDeg = that.currRotateDeg + deltDeg
that.needRotateDuration = 0.75 * (deltDeg / 180)</code></pre><p>上面设定的旋转速率是0.75s/180deg，将上面两个值设定到转盘transform中的rotate和transition-duration中就可以了。(vue中的写法)</p><pre><code>:style=&quot;{ transform: &#39;rotate(&#39;+ needRotateDeg +&#39;deg)&#39;, &#39;transition-duration&#39; : needRotateDuration+&#39;s&#39;}&quot;</code></pre><p>关于如何在旋转完之后弹出显示中奖结果，可以监听转盘的transitionend事件。(vue中的写法)</p><pre><code>@transitionend=&quot;doHandlerRotateEnd()&quot;</code></pre>`,26),G=c("footer",null,"2016年12月07日",-1);function J(n,r,e,h,a,d){return W(),q("div",F,[$,c("div",H,[I,c("div",V,[c("canvas",{ref:"wheel",width:"662",height:"662",style:B({transform:"rotate("+a.needRotateDeg+"deg)","transition-duration":a.needRotateDuration+"s"}),onTransitionend:r[0]||(r[0]=s=>d.doHandlerRotateEnd())},null,36),c("canvas",{ref:"pointer",width:"158",height:"210",onClick:r[1]||(r[1]=s=>d.doClickLotteryBtn())},null,512)]),j]),G])}const Q=M(E,[["render",J]]);export{Q as default};
