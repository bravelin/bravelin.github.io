webpackJsonp([22],{Jocv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={extends:n("3ErM").a},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[e._v("你不知道的JavaScript（中卷）笔记")]),e._v(" "),e._m(0),e._v(" "),n("footer",[e._v("2018年06月05日")]),e._v(" "),n("Comments"),e._v(" "),n("Catalog",{attrs:{catalog:e.catalog}})],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[e._v("类型")]),e._v(" "),n("p",[n("strong",[e._v("对语言引擎和开发人员来说，类型是值的内部特征，它定义了值的行为，以使其区别于其他值。")])]),e._v(" "),n("p",[e._v("JavaScript不要求“类型强制”，也就是说，语言引擎不要求变量总是持有与其初始值同类型的值。")]),e._v(" "),n("p",[e._v("转换类数组对象：Array.prototype.slice.call(obj)，或者Array.from(obj)")]),e._v(" "),n("p",[e._v("JS中的整数就是没有小数的十进制数，42.0即等同于整数42.")]),e._v(" "),n("p",[e._v("JS中的机器精度大约是2^-52，该值定义在Number.EPSILON.")]),e._v(" "),n("p",[e._v("整数检测：Number.isInteger：")]),e._v(" "),n("pre",[n("code",[e._v("if (!Number.isInteger) {\n    Number.isInteger = function (num) {\n        return typeof num == 'number' && num % 1 == 0\n    }\n}")])]),e._v(" "),n("p",[n("strong",[e._v("void运算符")]),e._v("：void不改变表达式的结果，只是让表达式返回undefined.")]),e._v(" "),n("pre",[n("code",[e._v("var a = 42\nconsole.log(void a, a) // undefined 42")])]),e._v(" "),n("p",[n("strong",[e._v("NaN是JS中唯一一个不等于自身的值。")])])])}]},a=n("Z0/y")(r,v,!1,null,null,null);t.default=a.exports}});