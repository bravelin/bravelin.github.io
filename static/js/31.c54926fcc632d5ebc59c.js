webpackJsonp([31],{VHka:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={extends:s("wkh7").a},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page article"},[e("h2",{staticClass:"title"},[this._v("《CSS 揭秘》笔记之八：过渡与动画")]),this._v(" "),this._m(0),this._v(" "),e("footer",[this._v("2017年01月22日")]),this._v(" "),e("comments")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h3",{staticClass:"title"},[t._v("缓动效果")]),t._v(" "),s("p",[t._v("缓动曲线指定了动画过程在整段时间中是如何推进的。默认并不是匀速效果，而是ease。内置的调速函数有："),s("strong",[t._v("ease-in、ease-out、ease-in-out、linear")])]),t._v(" "),s("p",[s("strong",[t._v("弹跳动画")]),t._v("的关键是在小球下落的过程中是加速的（ease-in），弹起转变方向是速度是减速的（ease-out）：")]),t._v(" "),s("div",{staticClass:"exp bounce"},[s("div",{staticClass:"ball"})]),t._v(" "),s("pre",[s("code",[t._v(".ball{\n  animation: bounce 3s ease-in infinite;\n}\n@keyframes bounce {\n  60%, 80%, to { transform: translateY(300px); animation-timing-function: ease-out; }\n  70%{ transform: translateY(200px); }\n  90%{ transform: translateY(250px); }\n}")])]),t._v(" "),s("p",[s("strong",[t._v("cubic-bezier(x1, y1, x2, y2)")]),t._v("允许我们自定义调速函数。四个参数代表两个控制锚点的坐标值。曲线的两个端点分别固定在(0,0)和(1,1)")])])}]},i=s("rAbc")(n,a,!1,null,null,null);e.default=i.exports}});