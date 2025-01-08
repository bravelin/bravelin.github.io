import{_ as M,k as W,m as c,p as B,h as L,o as F,e as n,s as $}from"./index-uvxfBn81.js";let P=null;const E={data(){return{currRotateDeg:0,needRotateDeg:0,needRotateDuration:5,inRotating:!1,winningPrize:null,prizes:[{name:"移动电源",deg:0},{name:"¥100元现金券",deg:0},{name:"谢谢惠顾",deg:0},{name:"iphone 6s",deg:0},{name:"签字笔",deg:0},{name:"再来一次",deg:0}]}},mounted(){this.drawWheel(),P=W()},methods:{drawWheel(){const r=this,e=Math.PI,t=r.$refs.wheel.getContext("2d");t.strokeStyle="#ffb534",t.lineWidth=8,t.arc(331,331,323,0,2*e),t.stroke(),t.beginPath(),t.strokeStyle="#de910d",t.fillStyle="#f8d300",t.lineWidth=1,t.arc(331,331,319,0,2*e),t.stroke(),t.fill(),t.beginPath(),t.strokeStyle="#d28500",t.lineWidth=11,t.arc(331,331,289,0,2*e),t.stroke();const f=6,a=8,p=307;let d=360/18*(e/180),o=e/2;t.fillStyle="#fff";for(let N=0;N<9;N++)t.beginPath(),t.arc(331+Math.cos(o)*p,331+Math.sin(o)*p,f,0,2*e),t.fill(),o+=d,t.beginPath(),t.arc(331+Math.cos(o)*p,331+Math.sin(o)*p,a,0,2*e),t.fill(),o+=d;const x=r.prizes,A=[{color:"#b92401",bgColor:"#fff6e5"},{color:"#590202",bgColor:"#ffd488"},{color:"#b92401",bgColor:"#fee0d5"}];d=360/x.length*(e/180);const S=360/x.length,m=283;o=e/2;let y=90,z;t.font="bold 44px 微软雅黑";const C=2*e*m*.58/x.length;t.textAlign="center",t.textBaseline="middle";let g,b,T,v,w,s,h=0;for(h=0;h<x.length;h++)s=x[h],t.beginPath(),t.moveTo(331,331),t.arc(331,331,m,o,o+d),t.lineTo(331,331),z=A[h%3],t.fillStyle=z.bgColor,t.fill(),t.closePath(),s.deg=y+S/2,s.deg>360&&(s.deg=s.deg-360),s.deg<270?s.deg=270-s.deg:s.deg=360-(s.deg-270),t.fillStyle=z.color,t.save(),t.translate(331,331),t.rotate(o+d/2+e/2),g=x[h].name,t.measureText(g).width>C?(w=g.split(" "),w.length==2?(b=w[0],T=w[1]):(v=r.getTextSplitPos(g,t,C),b=g.substr(0,v),T=g.substr(v)),t.fillText(b,0,-m*.72,C),t.fillText(T,0,-m*.52,C)):t.fillText(g,0,-m*.65),t.restore(),o+=d,y+=S;const l=r.$refs.pointer.getContext("2d");l.fillStyle="#ffa406";const i=79,u=210-i;l.arc(i,u,i,0,2*e),l.fill(),l.beginPath();const R=80,k=64;l.fillStyle="#eb1244",l.moveTo(i,0),l.lineTo(i-k/2,R),l.lineTo(i,R),l.lineTo(i,0),l.closePath(),l.fill(),l.fillStyle="#b9072f",l.beginPath(),l.moveTo(i,0),l.lineTo(i+k/2,R),l.lineTo(i,R),l.lineTo(i,0),l.closePath(),l.fill(),l.beginPath(),l.fillStyle="#fa5f75",l.arc(i,u,i-15,0,2*e),l.closePath(),l.fill(),l.beginPath();const D=l.createRadialGradient(i,u,0,i,u,i-25);D.addColorStop(0,"#f5385f"),D.addColorStop(.75,"#f5385f"),D.addColorStop(.82,"#eb1244"),D.addColorStop(1,"#eb1244"),l.fillStyle=D,l.arc(i,u,i-25,0,2*e),l.closePath(),l.fill(),l.font="bold 36px 微软雅黑",l.textAlign="center",l.textBaseline="middle",l.fillStyle="#fff",l.fillText("点击",i,u-24),l.fillText("抽奖",i,u+16)},getTextSplitPos(r,e,t){if(r.length<=3)return r.length;if(/^[\u4E00-\u9FFF]+$/.test(r))return Math.ceil(r.length/2);{let f=r.substr(0,3);for(let a=3;a<r.length;a++)if(f=f+r.charAt(a),e.measureText(f).width>t)return a+1}return r.length},doClickLotteryBtn(){const r=this;if(r.inRotating)return P.info("抽奖中...");const e=r.prizes;r.winningPrize=e[parseInt(Math.random()*e.length)],r.inRotating=!0;const t=360*3+r.winningPrize.deg-r.currRotateDeg%360;r.needRotateDuration=.75*(t/180),r.needRotateDeg=r.currRotateDeg+t,r.currRotateDeg=r.needRotateDeg},doHandlerRotateEnd(){const r=this;r.inRotating&&(r.inRotating=!1,P.success("您抽中了："+r.winningPrize.name))}}},H={class:"_article-content"},I={class:"exp"};function G(r,e,t,f,a,p){const d=L("MyArticle");return F(),c(d,{class:"spin-draw-article",title:"一个转盘抽奖的前端实现例子",date:"2016年12月07日"},{default:B(()=>[n("div",H,[e[2]||(e[2]=n("p",null,"转盘抽奖一般用于吸引用户，提升活跃度。上周应产品需求，实现了这个功能。下面的转盘使用随机数模拟中奖结果（可尝试点击）：",-1)),n("div",I,[n("canvas",{ref:"wheel",width:"662",height:"662",style:$({transform:"rotate("+a.needRotateDeg+"deg)","transition-duration":a.needRotateDuration+"s"}),onTransitionend:e[0]||(e[0]=o=>p.doHandlerRotateEnd())},null,36),n("canvas",{ref:"pointer",width:"158",height:"210",onClick:e[1]||(e[1]=o=>p.doClickLotteryBtn())},null,512)]),e[3]||(e[3]=n("p",null,"个人觉得实现的难点有三：一是如何根据奖品的数目绘制转盘背景；二是如何将不同长度的奖品文字绘制在扇区上面，并旋转相应的角度；三是如何计算出中奖之后转盘应该旋转的角度。",-1)),e[4]||(e[4]=n("p",null,"如果这三点实现了的话，再加上用户可抽奖次数控制逻辑、中奖之后奖品的弹窗显示等功能基本上就完成了。",-1)),e[5]||(e[5]=n("p",null,"定义奖品的数据结构：",-1)),e[6]||(e[6]=n("pre",null,[n("code",null,`prizes: [
      { name: '移动电源', deg: 0 }, { name: '¥100元现金券', deg: 0 }, { name: '谢谢惠顾', deg: 0 },
      { name: 'iphone 6s', deg: 0 }, { name: '签字笔', deg: 0 }, { name: '再来一次', deg: 0 }
  ]`)],-1)),e[7]||(e[7]=n("p",null,"奖品对象中的deg保存的是当转盘旋转角度为0时（初始状态），如果让指针指向奖品时转盘需要旋转的角度。",-1)),e[8]||(e[8]=n("p",null,"绘制转盘背景：",-1)),e[9]||(e[9]=n("p",null,"绘制黄色外边框及填充圆没什么好说的，注意在边框处有一层大小间隔的白点。绘制白点需要计算出白点的圆心位置：",-1)),e[10]||(e[10]=n("pre",null,[n("code",null,`// 绘制白点
var pi = Math.PI
var smallRadius = 6 // 小的白点半径
var bigRadius = 8 // 大的白点的半径
var dotRadius = 307 // 白点圆心距转盘圆心的距离
var perDeg = 360 / 18 * (pi / 180) // 总共18个点，perDeg定义出相邻两点间间隔的弧度数
var currDeg = pi / 2 // 从90度开始，转盘圆心位置(331,331)
wheelCtx.fillStyle = '#fff'

for (var k = 0; k < 9; k++) {
  wheelCtx.beginPath()
  wheelCtx.arc(331 + Math.cos(currDeg) * dotRadius, 331 + Math.sin(currDeg) * dotRadius, smallRadius, 0, 2 * pi) // 绘制小的白点
  wheelCtx.fill()
  currDeg += perDeg
  wheelCtx.beginPath()
  wheelCtx.arc(331 + Math.cos(currDeg) * dotRadius, 331 + Math.sin(currDeg) * dotRadius, bigRadius, 0, 2 * pi) // 绘制大的白点
  wheelCtx.fill()
  currDeg += perDeg
}`)],-1)),e[11]||(e[11]=n("p",null,"接下来是绘制礼物所在的扇区及礼物文本。从90度的位置开始绘制。因为指针的位置在270度，所以礼物的旋转度数使用以下方法求得：",-1)),e[12]||(e[12]=n("pre",null,[n("code",null,`// 求得礼物的旋转度数
prize.deg = currDegNum + perDegNum / 2
if (prize.deg > 360) {
  prize.deg = prize.deg - 360
}
if (prize.deg < 270) {
  prize.deg = 270 - prize.deg
} else {
  prize.deg = 360 - (prize.deg - 270)
}`)],-1)),e[13]||(e[13]=n("p",null,' currDegNum是扇区右边缘的度数，指针指向的是扇区的中心点，所以需要加二分之一的扇区度数。上述方式求得的奖品旋转依次为：150、90、30、330、270、210度。（即初始状态下如果中了"移动电源"，转盘转150+n*360度就可以了）',-1)),e[14]||(e[14]=n("p",null,' 绘制奖品的文本是比较麻烦的，因为它们的长度不一。有可能需要分两行显示，如"谢谢惠顾"；也有可能一行显示足矣，如"签字笔"。因此需要求得扇区所能容纳一行文本的宽度是多少，当文本的宽度超过此宽度时，则需要分两行显示。（有一种特殊点的情况，如"iphone 6s"，中间有空格，程序中是从空格处分隔成两行。） ',-1)),e[15]||(e[15]=n("p",null,"文本绘制的另外一个问题是如何绘制出旋转一定角度的文本。处理方式是使用绘图环境变换：",-1)),e[16]||(e[16]=n("pre",null,[n("code",null,`wheelCtx.save()
wheelCtx.translate(331, 331)
wheelCtx.rotate(currDeg + perDeg / 2 + pi / 2)
// draw text...
wheelCtx.restore()`)],-1)),e[17]||(e[17]=n("p",null,"将绘图环境的原点移动到转盘中心点，并旋转当前扇区的中线度数+90度。",-1)),e[18]||(e[18]=n("p",null,"绘制扇区和文本的完整代码如下：",-1)),e[19]||(e[19]=n("pre",null,[n("code",null,`var pieStyleArr = [{color: '#b92401', bgColor: '#fff6e5'}, {color: '#590202', bgColor: '#ffd488'}, {color: '#b92401', bgColor: '#fee0d5'}] // 定义每个扇区的字体颜色和填充背景色，当扇区数目大于3时，则从头取
perDeg = 360 / prizes.length * (pi / 180) // 每个扇区的弧度数
var perDegNum = 360 / prizes.length // 每个扇区的度数
var pieRadius = 283 // 扇区的半径
currDeg = pi / 2 // 起始的弧度数
var currDegNum = 90
var pieStyle

wheelCtx.font = 'bold 44px 微软雅黑'
var pieLineWidth = (2 * pi * pieRadius * 0.58) / prizes.length // 每个扇区上所能容纳一行字的宽度
wheelCtx.textAlign = 'center'
wheelCtx.textBaseline = 'middle'

var prizeName
var topText
var bottomText
var splitTextPos
var splitArr
var prize

for (k = 0; k < prizes.length; k++) {
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
    if (prize.deg > 360) {
      prize.deg = prize.deg - 360
    }
    if (prize.deg < 270) {
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
    if (wheelCtx.measureText(prizeName).width > pieLineWidth) { // 处理两行字的情况
      splitArr = prizeName.split(' ')
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
  }`)],-1)),e[20]||(e[20]=n("p",null,"获取文本的间隔点位置方法如下：如果文本长度大于3个字符，一行显示就够了；如果两行显示的话，先判断文本是否都是汉字，因为汉字的字宽基本一致，可以直接从中间位置分隔。否则使用measureText计算出来。",-1)),e[21]||(e[21]=n("pre",null,[n("code",null,`getTextSplitPos: function (text, ctx, lineWidth) { // 计算出文本换行的分割点
  if (text.length <= 3) {
    return text.length
  }
  if (/^[\\u4E00-\\u9FFF]+$/.test(text)) { // 文本都是汉字，从中间分隔
    return Math.ceil(text.length / 2)
  } else { // 依据字宽计算出分隔点
    var str = text.substr(0, 3)
    for (var i = 3; i < text.length; i++) {
      str = str + text.charAt(i)
      if (ctx.measureText(str).width > lineWidth) {
        return i + 1
      }
    }
  }
  return text.length
}`)],-1)),e[22]||(e[22]=n("p",null,"关于点击抽奖之后转盘的旋转：其实当点击抽奖按钮之时，中奖结果已经出来了。接下来只是让转盘旋转一定的角度，使指针指向抽中的结果，并在旋转完之后显示结果。",-1)),e[23]||(e[23]=n("p",null,"使用一变量记下当前转盘的旋转角度，转盘抽中之后旋转的角度needRotateDeg以及旋转的时间needRotateDuration如下计算出来：",-1)),e[24]||(e[24]=n("pre",null,[n("code",null,`var deltDeg = 360 * 3 + that.winningPrize.deg - that.currRotateDeg % 360
that.needRotateDeg = that.currRotateDeg + deltDeg
that.needRotateDuration = 0.75 * (deltDeg / 180)`)],-1)),e[25]||(e[25]=n("p",null,"上面设定的旋转速率是0.75s/180deg，将上面两个值设定到转盘transform中的rotate和transition-duration中就可以了。(vue中的写法)",-1)),e[26]||(e[26]=n("pre",null,[n("code",null,`:style="{ transform: 'rotate('+ needRotateDeg +'deg)', 'transition-duration' : needRotateDuration+'s'}"`)],-1)),e[27]||(e[27]=n("p",null,"关于如何在旋转完之后弹出显示中奖结果，可以监听转盘的transitionend事件。(vue中的写法)",-1)),e[28]||(e[28]=n("pre",null,[n("code",null,'@transitionend="doHandlerRotateEnd()"')],-1))])]),_:1})}const j=M(E,[["render",G]]);export{j as default};
