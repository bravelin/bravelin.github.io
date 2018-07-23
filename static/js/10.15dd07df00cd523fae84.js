webpackJsonp([10],{"/6p1":function(t,e,n){(t.exports=n("UTlt")(!1)).push([t.i,"\n.exp[data-v-1f082ed6]{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\ndiv.exp>canvas.clock[data-v-1f082ed6]{\n    height: 400px;\n    width: 400px;\n    background: #fff;\n}\n",""])},O1hH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={extends:n("3ErM").a,data:function(){return{context:null,centerX:0,centerY:0,deg:0}},mounted:function(){var t=this;t.$nextTick(function(){t.init()})},methods:{init:function(){var t=this.$refs,e=t.clock,n=t.grid.getBoundingClientRect(),i=.95*(n.right-n.left);i<400&&(e.style.width=i+"px",e.style.height=i+"px");var a=e.getAttribute("width"),r=e.getAttribute("height");this.centerX=a/2,this.centerY=r/2,this.context=e.getContext("2d"),this.startTimer()},startTimer:function(){var t=this;(window.requestAnimationFrame||window.webkitRequestAnimationFrame)(function(){t.drawRose(),t.startTimer()})},drawRose:function(){this.drawGrid(),this.drawRoseLine(1,5,29,11)},drawGrid:function(){var t=this.context,e=t.canvas,n=e.width,i=e.height;t.clearRect(0,0,n,i),t.save(),t.beginPath(),t.strokeStyle="rgba(0,0,0,0.05)",t.lineWidth=.5;for(var a=10.5;a<n;a+=10)t.beginPath(),t.moveTo(a,0),t.lineTo(a,i),t.stroke();for(var r=10.5;r<i;r+=10)t.beginPath(),t.moveTo(0,r),t.lineTo(n,r),t.stroke();t.restore()},drawRoseLine:function(t,e,n,i){var a=this.context,r=0,s=2*Math.PI/360,o=0,c=0,l=0;for(this.deg+=s,a.save(),a.translate(this.centerX,this.centerY),a.rotate(this.deg),a.strokeStyle="rgba(255,0,0,0.6)",a.fillStyle="rgba(255,0,0,0.1)",a.beginPath();r<=4320;)o=t/e+Math.sin(n*r/i*s),c=(o*=150)*Math.cos(r*s),l=o*Math.sin(r*s),r+=.1,a.lineTo(c,l);a.stroke(),a.fill(),a.restore()}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[t._v("Canvas绘制的玫瑰曲线")]),t._v(" "),n("div",{staticClass:"content"},[n("div",{ref:"grid",staticClass:"exp"},[n("canvas",{ref:"clock",staticClass:"clock",attrs:{width:"400",height:"400"}})]),t._v(" "),n("h3",{staticClass:"title"},[t._v("The Code")]),t._v(" "),n("p",[t._v("data定义：")]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("初始化：")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("随着时间走：")]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("绘制：")]),t._v(" "),t._m(3)]),t._v(" "),n("footer",[t._v("2017年06月18日")]),t._v(" "),n("Comments"),t._v(" "),n("Catalog",{attrs:{catalog:t.catalog}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("return {\n    context: null,\n    centerX: 0, // 中心点\n    centerY: 0,\n    deg: 0\n}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("let that = this\nthat.$nextTick(() => {\n    that.init() // 绘制\n})\n\ninit () {\n    let that = this\n    let refs = that.$refs\n    let el = refs.clock\n    let box = refs.grid\n    let rect = box.getBoundingClientRect()\n    let w = (rect.right - rect.left) * 0.95\n    if (w < 400) {\n        el.style.width = w + 'px'\n        el.style.height = w + 'px'\n    }\n    let canvasWidth = el.getAttribute('width')\n    let canvasHeight = el.getAttribute('height')\n    that.centerX = canvasWidth / 2\n    that.centerY = canvasHeight / 2\n    that.context = el.getContext('2d')\n    that.startTimer()\n}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("startTimer () {\n    let that = this\n    let requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame\n    requestAnimationFrame(function () {\n        that.drawRose()\n        that.startTimer()\n    })\n}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("drawRose () {\n    let that = this\n    that.drawGrid()\n    that.drawRoseLine(1, 5, 29, 11)\n}\n\ndrawRoseLine (a, b, m, n) {\n    let that = this\n    let context = that.context\n    let e = 0\n    let c = 150\n    let k = 2 * Math.PI / 360\n    let r = 0\n    let x = 0\n    let y = 0\n    that.deg += k\n    context.save()\n    context.translate(that.centerX, that.centerY)\n    context.rotate(that.deg)\n    context.strokeStyle = 'rgba(255,0,0,0.6)'\n    context.fillStyle = 'rgba(255,0,0,0.1)'\n    context.beginPath()\n    while (e <= 4320) {\n        r = a / b + Math.sin(m * e / n * k)\n        r = r * c\n        x = r * Math.cos(e * k)\n        y = r * Math.sin(e * k)\n        e += 0.1\n        context.lineTo(x, y)\n    }\n    context.stroke()\n    context.fill()\n    context.restore()\n}")])])}]};var r=n("Z0/y")(i,a,!1,function(t){n("h+s6")},"data-v-1f082ed6",null);e.default=r.exports},"h+s6":function(t,e,n){var i=n("/6p1");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("FIqI")("a367e75e",i,!0,{})}});