webpackJsonp([5,17],{24:function(e,t,n){"use strict";var r=n(1);e.exports={data:function(){return{currRotateDeg:0,needRotateDeg:0,needRotateDuration:5,inRotating:!1,winningPrize:null,prizes:[{name:"移动电源",deg:0},{name:"¥100元现金券",deg:0},{name:"谢谢惠顾",deg:0},{name:"iphone 6s",deg:0},{name:"签字笔",deg:0},{name:"再来一次",deg:0}]}},mounted:function(){var e=this;e.$nextTick(function(){var t=document.querySelectorAll("code");if(t.length>0)for(var n=0;n<t.length;n++)hljs.highlightBlock(t[n]);e.drawWheel()})},methods:{drawWheel:function(){var e=this,t=Math.PI,n=e.$refs.wheel.getContext("2d");n.strokeStyle="#ffb534",n.lineWidth=8,n.arc(331,331,323,0,2*t),n.stroke(),n.beginPath(),n.strokeStyle="#de910d",n.fillStyle="#f8d300",n.lineWidth=1,n.arc(331,331,319,0,2*t),n.stroke(),n.fill(),n.beginPath(),n.strokeStyle="#d28500",n.lineWidth=11,n.arc(331,331,289,0,2*t),n.stroke();var r=6,i=8,l=307,a=20*(t/180),o=t/2;n.fillStyle="#fff";for(var s=0;s<9;s++)n.beginPath(),n.arc(331+Math.cos(o)*l,331+Math.sin(o)*l,r,0,2*t),n.fill(),o+=a,n.beginPath(),n.arc(331+Math.cos(o)*l,331+Math.sin(o)*l,i,0,2*t),n.fill(),o+=a;var d=e.prizes,g=[{color:"#b92401",bgColor:"#fff6e5"},{color:"#590202",bgColor:"#ffd488"},{color:"#b92401",bgColor:"#fee0d5"}];a=360/d.length*(t/180);var p=360/d.length,c=283;o=t/2;var h,f=90;n.font="bold 44px 微软雅黑";var v=2*t*c*.58/d.length;n.textAlign="center",n.textBaseline="middle";var u,_,x,m,D,w;for(s=0;s<d.length;s++)w=d[s],n.beginPath(),n.moveTo(331,331),n.arc(331,331,c,o,o+a),n.lineTo(331,331),h=g[s%3],n.fillStyle=h.bgColor,n.fill(),n.closePath(),w.deg=f+p/2,w.deg>360&&(w.deg=w.deg-360),w.deg<270?w.deg=270-w.deg:w.deg=360-(w.deg-270),n.fillStyle=h.color,n.save(),n.translate(331,331),n.rotate(o+a/2+t/2),u=d[s].name,n.measureText(u).width>v?(D=u.split(" "),2==D.length?(_=D[0],x=D[1]):(m=e.getTextSplitPos(u,n,v),_=u.substr(0,m),x=u.substr(m)),n.fillText(_,0,.72*-c,v),n.fillText(x,0,.52*-c,v)):n.fillText(u,0,.65*-c),n.restore(),o+=a,f+=p;console.dir(d);var C=e.$refs.pointer.getContext("2d");C.fillStyle="#ffa406";var b=79,R=210-b;C.arc(b,R,b,0,2*t),C.fill(),C.beginPath();var z=80,T=64;C.fillStyle="#eb1244",C.moveTo(b,0),C.lineTo(b-T/2,z),C.lineTo(b,z),C.lineTo(b,0),C.closePath(),C.fill(),C.fillStyle="#b9072f",C.beginPath(),C.moveTo(b,0),C.lineTo(b+T/2,z),C.lineTo(b,z),C.lineTo(b,0),C.closePath(),C.fill(),C.beginPath(),C.fillStyle="#fa5f75",C.arc(b,R,b-15,0,2*t),C.closePath(),C.fill(),C.beginPath();var P=C.createRadialGradient(b,R,0,b,R,b-25);P.addColorStop(0,"#f5385f"),P.addColorStop(.75,"#f5385f"),P.addColorStop(.82,"#eb1244"),P.addColorStop(1,"#eb1244"),C.fillStyle=P,C.arc(b,R,b-25,0,2*t),C.closePath(),C.fill(),C.font="bold 36px 微软雅黑",C.textAlign="center",C.textBaseline="middle",C.fillStyle="#fff",C.fillText("点击",b,R-24),C.fillText("抽奖",b,R+16)},getTextSplitPos:function(e,t,n){if(e.length<=3)return e.length;if(/^[\u4E00-\u9FFF]+$/.test(e))return Math.ceil(e.length/2);for(var r=e.substr(0,3),i=3;i<e.length;i++)if(r+=e.charAt(i),t.measureText(r).width>n)return i+1;return e.length},doClickLotteryBtn:function(){var e=this;if(e.inRotating)return r.Global.tipShow("抽奖中...");var t=e.prizes;e.winningPrize=t[parseInt(Math.random()*t.length)],e.inRotating=!0;var n=1080+e.winningPrize.deg-e.currRotateDeg%360;e.needRotateDuration=.75*(n/180),e.needRotateDeg=e.currRotateDeg+n,e.currRotateDeg=e.needRotateDeg},doHandlerRotateEnd:function(){var e=this;e.inRotating&&(e.inRotating=!1,r.Global.tipShow("您抽中了："+e.winningPrize.name))}}}},68:function(e,t,n){var r,i;r=n(24);var l=n(89);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=l.render,i.staticRenderFns=l.staticRenderFns,e.exports=r},89:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[e._v("转盘抽奖的前端实现")]),e._v(" "),n("div",{staticClass:"content"},[n("p",[e._v("转盘抽奖一般用于吸引用户，提升活跃度。上周应产品需求，实现了这个功能。下面的转盘使用随机数模拟中奖结果（可点击抽奖）：")]),e._v(" "),n("div",{staticClass:"exp turn-table-draw"},[n("div",[n("canvas",{ref:"wheel",style:{transform:"rotate("+e.needRotateDeg+"deg)","transition-duration":e.needRotateDuration+"s"},attrs:{width:"662",height:"662"},on:{transitionend:function(t){e.doHandlerRotateEnd()}}}),e._v(" "),n("canvas",{ref:"pointer",attrs:{width:"158",height:"210"},on:{click:function(t){e.doClickLotteryBtn()}}})])]),e._v(" "),n("p",[e._v("个人觉得实现的难点有三：一是如何根据奖品的数目绘制转盘背景；二是如何将不同长度的奖品文字绘制在扇区上面，并旋转相应的角度；三是如何计算出中奖之后转盘应该旋转的角度。")]),e._v(" "),n("p",[e._v("如果这三点实现了的话，再加上用户可抽奖次数控制逻辑、中奖之后奖品的弹窗显示等功能基本上就完成了。")]),e._v(" "),n("p",[e._v("定义奖品的数据结构：")]),e._v(" "),e._m(0),e._v(" "),n("p",[e._v("奖品对象中的deg保存的是当转盘旋转角度为0时（初始状态），如果让指针指向奖品时转盘需要旋转的角度。")]),e._v(" "),n("p",[e._v("绘制转盘背景：")]),e._v(" "),n("p",[e._v("绘制黄色外边框及填充圆没什么好说的，注意在边框处有一层大小间隔的白点。绘制白点需要计算出白点的圆心位置：")]),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("接下来是绘制礼物所在的扇区及礼物文本。从90度的位置开始绘制。因为指针的位置在270度，所以礼物的旋转度数使用以下方法求得：")]),e._v(" "),e._m(2),e._v(" "),n("p",[e._v('\n                currDegNum是扇区右边缘的度数，指针指向的是扇区的中心点，所以需要加二分之一的扇区度数。上述方式求得的奖品旋转依次为：150、90、30、330、270、210度。（即初始状态下如果中了"移动电源"，转盘转150+n*360度就可以了）')]),e._v(" "),n("p",[e._v('\n                绘制奖品的文本是比较麻烦的，因为它们的长度不一。有可能需要分两行显示，如"谢谢惠顾"；也有可能一行显示足矣，如"签字笔"。因此需要求得扇区所能容纳一行文本的宽度是多少，当文本的宽度超过此宽度时，则需要分两行显示。（有一种特殊点的情况，如"iphone\n                6s"，中间有空格，程序中是从空格处分隔成两行。）')]),e._v(" "),n("p",[e._v("文本绘制的另外一个问题是如何绘制出旋转一定角度的文本。处理方式是使用绘图环境变换：")]),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("将绘图环境的原点移动到转盘中心点，并旋转当前扇区的中线度数+90度。")]),e._v(" "),n("p",[e._v("绘制扇区和文本的完整代码如下：")]),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("获取文本的间隔点位置方法如下：如果文本长度大于3个字符，一行显示就够了；如果两行显示的话，先判断文本是否都是汉字，因为汉字的字宽基本一致，可以直接从中间位置分隔。否则使用measureText计算出来。")]),e._v(" "),e._m(5),e._v(" "),n("p",[e._v("关于点击抽奖之后转盘的旋转：其实当点击抽奖按钮之时，中奖结果已经出来了。接下来只是让转盘旋转一定的角度，使指针指向抽中的结果，并在旋转完之后显示结果。")]),e._v(" "),n("p",[e._v("使用一变量记下当前转盘的旋转角度，转盘抽中之后旋转的角度needRotateDeg以及旋转的时间needRotateDuration如下计算出来：")]),e._v(" "),e._m(6),e._v(" "),n("p",[e._v("上面设定的旋转速率是0.75s/180deg，将上面两个值设定到转盘transform中的rotate和transition-duration中就可以了。(vue中的写法)")]),e._v(" "),e._m(7),e._v(" "),n("p",[e._v("关于如何在旋转完之后弹出显示中奖结果，可以监听转盘的transitionend事件。(vue中的写法)")]),e._v(" "),e._m(8)]),e._v(" "),n("footer",[e._v("2016年12月07日")]),e._v(" "),n("comments")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("prizes: [\n      {name: '移动电源', deg: 0}, {name: '¥100元现金券', deg: 0}, {name: '谢谢惠顾', deg: 0},\n      {name: 'iphone 6s', deg: 0}, {name: '签字笔', deg: 0}, {name: '再来一次', deg: 0}\n  ]")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("// 绘制白点\nvar pi = Math.PI\nvar smallRadius = 6 // 小的白点半径\nvar bigRadius = 8 // 大的白点的半径\nvar dotRadius = 307 // 白点圆心距转盘圆心的距离\nvar perDeg = 360 / 18 * (pi / 180) // 总共18个点，perDeg定义出相邻两点间间隔的弧度数\nvar currDeg = pi / 2 // 从90度开始，转盘圆心位置(331,331)\nwheelCtx.fillStyle = '#fff'\n\nfor (var k = 0; k < 9; k++) {\n  wheelCtx.beginPath()\n  wheelCtx.arc(331 + Math.cos(currDeg) * dotRadius, 331 + Math.sin(currDeg) * dotRadius, smallRadius, 0, 2 * pi) // 绘制小的白点\n  wheelCtx.fill()\n  currDeg += perDeg\n  wheelCtx.beginPath()\n  wheelCtx.arc(331 + Math.cos(currDeg) * dotRadius, 331 + Math.sin(currDeg) * dotRadius, bigRadius, 0, 2 * pi) // 绘制大的白点\n  wheelCtx.fill()\n  currDeg += perDeg\n}")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("// 求得礼物的旋转度数\nprize.deg = currDegNum + perDegNum / 2\nif (prize.deg > 360) {\n  prize.deg = prize.deg - 360\n}\nif (prize.deg < 270) {\n  prize.deg = 270 - prize.deg\n} else {\n  prize.deg = 360 - (prize.deg - 270)\n}")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("wheelCtx.save()\nwheelCtx.translate(331, 331)\nwheelCtx.rotate(currDeg + perDeg / 2 + pi / 2)\n// draw text...\nwheelCtx.restore()")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("var pieStyleArr = [{color: '#b92401', bgColor: '#fff6e5'}, {color: '#590202', bgColor: '#ffd488'}, {color: '#b92401', bgColor: '#fee0d5'}] // 定义每个扇区的字体颜色和填充背景色，当扇区数目大于3时，则从头取\nperDeg = 360 / prizes.length * (pi / 180) // 每个扇区的弧度数\nvar perDegNum = 360 / prizes.length // 每个扇区的度数\nvar pieRadius = 283 // 扇区的半径\ncurrDeg = pi / 2 // 起始的弧度数\nvar currDegNum = 90\nvar pieStyle\n\nwheelCtx.font = 'bold 44px 微软雅黑'\nvar pieLineWidth = (2 * pi * pieRadius * 0.58) / prizes.length // 每个扇区上所能容纳一行字的宽度\nwheelCtx.textAlign = 'center'\nwheelCtx.textBaseline = 'middle'\n\nvar prizeName\nvar topText\nvar bottomText\nvar splitTextPos\nvar splitArr\nvar prize\n\nfor (k = 0; k < prizes.length; k++) {\n    prize = prizes[k]\n    // 绘制扇区\n    wheelCtx.beginPath()\n    wheelCtx.moveTo(331, 331)\n    wheelCtx.arc(331, 331, pieRadius, currDeg, currDeg + perDeg)\n    wheelCtx.lineTo(331, 331)\n    pieStyle = pieStyleArr[k % 3]\n    wheelCtx.fillStyle = pieStyle.bgColor\n    wheelCtx.fill()\n    wheelCtx.closePath()\n\n    prize.deg = currDegNum + perDegNum / 2 // 求得礼物的旋转度数\n    if (prize.deg > 360) {\n      prize.deg = prize.deg - 360\n    }\n    if (prize.deg < 270) {\n      prize.deg = 270 - prize.deg\n    } else {\n      prize.deg = 360 - (prize.deg - 270)\n    }\n    // 写入文本\n    wheelCtx.fillStyle = pieStyle.color\n    wheelCtx.save()\n\n    wheelCtx.translate(331, 331)\n    wheelCtx.rotate(currDeg + perDeg / 2 + pi / 2)\n\n    prizeName = prizes[k].name\n    if (wheelCtx.measureText(prizeName).width > pieLineWidth) { // 处理两行字的情况\n      splitArr = prizeName.split(' ')\n      if (splitArr.length == 2) { // 有空格间隔\n        topText = splitArr[0]\n        bottomText = splitArr[1]\n      } else {\n        splitTextPos = that.getTextSplitPos(prizeName, wheelCtx, pieLineWidth)\n        topText = prizeName.substr(0, splitTextPos)\n        bottomText = prizeName.substr(splitTextPos)\n      }\n      wheelCtx.fillText(topText, 0, -pieRadius * 0.72, pieLineWidth)\n      wheelCtx.fillText(bottomText, 0, -pieRadius * 0.52, pieLineWidth)\n    } else {\n      wheelCtx.fillText(prizeName, 0, -pieRadius * 0.65) // 一行字直接绘制在中心点\n    }\n\n    wheelCtx.restore()\n    currDeg += perDeg\n    currDegNum += perDegNum\n  }")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("getTextSplitPos: function (text, ctx, lineWidth) { // 计算出文本换行的分割点\n  if (text.length <= 3) {\n    return text.length\n  }\n  if (/^[\\u4E00-\\u9FFF]+$/.test(text)) { // 文本都是汉字，从中间分隔\n    return Math.ceil(text.length / 2)\n  } else { // 依据字宽计算出分隔点\n    var str = text.substr(0, 3)\n    for (var i = 3; i < text.length; i++) {\n      str = str + text.charAt(i)\n      if (ctx.measureText(str).width > lineWidth) {\n        return i + 1\n      }\n    }\n  }\n  return text.length\n}")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("var deltDeg = 360 * 3 + that.winningPrize.deg - that.currRotateDeg % 360\nthat.needRotateDeg = that.currRotateDeg + deltDeg\nthat.needRotateDuration = 0.75 * (deltDeg / 180)")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v(":style=\"{ transform: 'rotate('+ needRotateDeg +'deg)', 'transition-duration' : needRotateDuration+'s'}\"")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v('@transitionend="doHandlerRotateEnd()"')])])}]}}});