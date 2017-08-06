webpackJsonp([2,38],{1:function(t,e){"use strict";t.exports={mounted:function(){this.$nextTick(function(){var t=document.querySelectorAll("code");if(t.length>0)for(var e=0;e<t.length;e++)hljs.highlightBlock(t[e])})}}},2:function(t,e,n){var r,i;r=n(1);var a=n(3);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},3:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},staticRenderFns:[]}},19:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(2),a=r(i);t.exports={extends:a.default,data:function(){return{context:null,centerX:0,centerY:0,deg:0}},mounted:function(){var t=this;t.$nextTick(function(){t.init()})},methods:{init:function(){var t=this,e=t.$refs,n=e.clock,r=e.grid,i=r.getBoundingClientRect(),a=.95*(i.right-i.left);a<400&&(n.style.width=a+"px",n.style.height=a+"px");var c=n.getAttribute("width"),o=n.getAttribute("height");t.centerX=c/2,t.centerY=o/2,t.context=n.getContext("2d"),t.startTimer()},startTimer:function(){var t=this,e=window.requestAnimationFrame||window.webkitRequestAnimationFrame;e(function(){t.drawRose(),t.startTimer()})},drawRose:function(){var t=this;t.drawGrid(),t.drawRoseLine(1,5,29,11)},drawGrid:function(){var t=this,e=t.context,n=e.canvas,r=n.width,i=n.height,a=10,c=10;e.clearRect(0,0,r,i),e.save(),e.beginPath(),e.strokeStyle="rgba(0,0,0,0.05)",e.lineWidth=.5;for(var o=a+.5;o<r;o+=a)e.beginPath(),e.moveTo(o,0),e.lineTo(o,i),e.stroke();for(var s=c+.5;s<i;s+=c)e.beginPath(),e.moveTo(0,s),e.lineTo(r,s),e.stroke();e.restore()},drawRoseLine:function(t,e,n,r){var i=this,a=i.context,c=0,o=150,s=2*Math.PI/360,l=0,h=0,d=0;for(i.deg+=s,a.save(),a.translate(i.centerX,i.centerY),a.rotate(i.deg),a.strokeStyle="rgba(255,0,0,0.6)",a.fillStyle="rgba(255,0,0,0.1)",a.beginPath();c<=4320;)l=t/e+Math.sin(n*c/r*s),l*=o,h=l*Math.cos(c*s),d=l*Math.sin(c*s),c+=.1,a.lineTo(h,d);a.stroke(),a.fill(),a.restore()}}}},55:function(t,e,n){e=t.exports=n(5)(),e.push([t.id,".exp[data-v-5cc11c6a]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}div.exp>canvas.clock[data-v-5cc11c6a]{height:400px;width:400px;background:#fff}",""])},61:function(t,e,n){var r=n(55);"string"==typeof r&&(r=[[t.id,r,""]]);n(6)(r,{});r.locals&&(t.exports=r.locals)},76:function(t,e,n){var r,i;n(61),r=n(19);var a=n(118);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-5cc11c6a",t.exports=r},118:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[t._v("Canvas绘制的玫瑰曲线")]),t._v(" "),n("div",{staticClass:"content"},[n("div",{ref:"grid",staticClass:"exp"},[n("canvas",{ref:"clock",staticClass:"clock",attrs:{width:"400",height:"400"}})]),t._v(" "),n("h3",{staticClass:"title"},[t._v("The Code")]),t._v(" "),n("p",[t._v("data定义：")]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("初始化：")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("随着时间走：")]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("绘制：")]),t._v(" "),t._m(3)]),t._v(" "),n("footer",[t._v("2017年06月18日")]),t._v(" "),n("comments")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("return {\n    context: null,\n    centerX: 0, // 中心点\n    centerY: 0,\n    deg: 0\n}")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("let that = this\nthat.$nextTick(() => {\n    that.init() // 绘制\n})\n\ninit () {\n    let that = this\n    let refs = that.$refs\n    let el = refs.clock\n    let box = refs.grid\n    let rect = box.getBoundingClientRect()\n    let w = (rect.right - rect.left) * 0.95\n    if (w < 400) {\n        el.style.width = w + 'px'\n        el.style.height = w + 'px'\n    }\n    let canvasWidth = el.getAttribute('width')\n    let canvasHeight = el.getAttribute('height')\n    that.centerX = canvasWidth / 2\n    that.centerY = canvasHeight / 2\n    that.context = el.getContext('2d')\n    that.startTimer()\n}")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("startTimer () {\n    let that = this\n    let requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame\n    requestAnimationFrame(function () {\n        that.drawRose()\n        that.startTimer()\n    })\n}")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("drawRose () {\n    let that = this\n    that.drawGrid()\n    that.drawRoseLine(1, 5, 29, 11)\n}\n\ndrawRoseLine (a, b, m, n) {\n    let that = this\n    let context = that.context\n    let e = 0\n    let c = 150\n    let k = 2 * Math.PI / 360\n    let r = 0\n    let x = 0\n    let y = 0\n    that.deg += k\n    context.save()\n    context.translate(that.centerX, that.centerY)\n    context.rotate(that.deg)\n    context.strokeStyle = 'rgba(255,0,0,0.6)'\n    context.fillStyle = 'rgba(255,0,0,0.1)'\n    context.beginPath()\n    while (e <= 4320) {\n        r = a / b + Math.sin(m * e / n * k)\n        r = r * c\n        x = r * Math.cos(e * k)\n        y = r * Math.sin(e * k)\n        e += 0.1\n        context.lineTo(x, y)\n    }\n    context.stroke()\n    context.fill()\n    context.restore()\n}")])])}]}}});