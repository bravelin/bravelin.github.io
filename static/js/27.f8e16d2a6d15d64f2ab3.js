webpackJsonp([27],{mMNX:function(e,v,_){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var t={extends:_("wkh7").a},n={render:function(){var e=this.$createElement,v=this._self._c||e;return v("div",{staticClass:"page article"},[v("h2",{staticClass:"title"},[this._v("《ES6标准入门》笔记之二：变量的解构赋值")]),this._v(" "),this._m(0),this._v(" "),v("footer",[this._v("2017年03月09日")]),this._v(" "),v("comments")],1)},staticRenderFns:[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("div",{staticClass:"content"},[_("h3",{staticClass:"title"},[e._v("数组的解构赋值")]),e._v(" "),_("p",[_("strong",[e._v("Destructuring")]),e._v("：按照一定模式，从数组和对象中提取值，对变量进行赋值，称之为解构。")]),e._v(" "),_("pre",[_("code",[e._v("var [a, b, c] = [1, 2, 3]\n\nvar [a, ...b] = [1, 2, 3, 4]\nconsole.log(a) // 1\nconsole.log(b) // [2, 3, 4]")])]),e._v(" "),_("p",[e._v("上面按照位置的对应关系对变量赋值。这种写法属于"),_("strong",[e._v("模式匹配")]),e._v("，只要等号两边的模式相同，左边的变量就会被赋予对应的值。")]),e._v(" "),_("p",[e._v("如果解构不成功，变量的值为undefined。不完全解构也是支持的。")]),e._v(" "),_("pre",[_("code",[e._v("let [x, y] = [1, 2, 3]")])]),e._v(" "),_("p",[e._v("如果等号的右边不是数组（不是可遍历的结构），那么将会报错。")]),e._v(" "),_("p",[e._v("对于Set结构以及具有Iterator接口的数据结构，也可以使用数组的解构赋值：")]),e._v(" "),_("pre",[_("code",[e._v("let [x, y, z] = new Set(['a', 'b', 'c'])")])]),e._v(" "),_("p",[_("strong",[e._v("解构赋值允许指定默认值：")]),e._v("当相应的位置值严格等于undefined时，变量值取默认值。")]),e._v(" "),_("pre",[_("code",[e._v("[x, y = 'b'] = ['a', undefined] // x = 'a'  y = 'b'\n[x = 1] = [null] // x = null")])]),e._v(" "),_("p",[e._v("如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候才会求值。")]),e._v(" "),_("p",[e._v("默认值可以引用解构赋值的其他变量，但该变量必须已经赋值：")]),e._v(" "),_("pre",[_("code",[e._v("let [x = 1, y = x] = [] // x=1; y=1\nlet [x = 1, y = x] = [2] // x=2; y=2")])]),e._v(" "),_("h3",{staticClass:"title"},[e._v("对象的解构赋值")]),e._v(" "),_("p",[e._v("对象的解构相同的属性名为依据获取正确的值，未能获取则值为undefined：")]),e._v(" "),_("pre",[_("code",[e._v("var { foo, bar } = { foo: '111', bar: '222' } // foo = '111' bar = '222'")])]),e._v(" "),_("p",[e._v("上式真正的形式为：")]),e._v(" "),_("pre",[_("code",[e._v("var { foo: foo, bar: bar } = { foo: '111', bar: '222' } // foo = '111' bar = '222'")])]),e._v(" "),_("p",[e._v("其内部机制是先找到同名属性，然后再赋值给对应的变量。真正被赋值的不是属性，而是变量。")]),e._v(" "),_("p",[e._v("和数组一样，解构也可用于嵌套结构的对象。")]),e._v(" "),_("pre",[_("code",[e._v("let obj = {}\nlet arr = []\n({ foo : obj.prop, bar : arr[0] } = { foo: 123, bar: true } ) // obj = { prop: 123 }  arr = [true]")])]),e._v(" "),_("p",[e._v("对象的解构也可以指定默认值，条件是对象的属性值严格等于undefined。")]),e._v(" "),_("p",[e._v("未能成功解构，对象的值为undefined。")]),e._v(" "),_("p",[e._v("如果将一个已经声明的变量用于解构赋值，必须非常小心：")]),e._v(" "),_("pre",[_("code",[e._v("// 错误的写法\nvar x\n{ x } = { x: 1 }\n\n// 正确的写法\n({ x } = { x: 1 })")])]),e._v(" "),_("p",[e._v("对象的解构赋值可以将现有对象的方法赋值到某个变量：let { sin, cos, log } = Math")]),e._v(" "),_("h3",{staticClass:"title"},[e._v("字符串的解构赋值")]),e._v(" "),_("p",[e._v("字符串也可以解构赋值，此时字符串被转换成了一个类似数组的对象：")]),e._v(" "),_("pre",[_("code",[e._v("const [a, b, c, d, e] = 'hello'\na // 'h'\nb // 'e'")])]),e._v(" "),_("p",[e._v("类似数组的对象都有length属性，可以对这个属性进行解构赋值：")]),e._v(" "),_("pre",[_("code",[e._v("let { length: len } = 'hello'\nlen // 5")])]),e._v(" "),_("h3",{staticClass:"title"},[e._v("数值和布尔值的解构赋值")]),e._v(" "),_("p",[e._v("如果等号右边的是数值或者布尔值，则会先转换成对象：")]),e._v(" "),_("pre",[_("code",[e._v("let { toString: s } = 123\ns === Number.prototype.toString // true\n\nlet { toString: s } = true\ns === Boolean.prototype.toString // true\n            ")])]),e._v(" "),_("p",[_("strong",[e._v("解构赋值的规则是，只要等号右边的值不是对象，则会先转换成对象。undefined和null无法转换成对象，所以对它们的解构赋值都会报错。")])]),e._v(" "),_("h3",{staticClass:"title"},[e._v("函数参数的解构赋值")]),e._v(" "),_("p",[e._v("函数的参数也可以解构赋值：")]),e._v(" "),_("pre",[_("code",[e._v("[[1, 2], [3, 4]].map(([a, b] => a+b)) // [3, 7]")])]),e._v(" "),_("p",[e._v("也可以使用默认值：")]),e._v(" "),_("pre",[_("code",[e._v("function move({x = 0, y = 0} = {}) { return [x, y] }\nmove({ x: 3, y: 8}) // [3, 8]\nmove({ x: 3}) // [3, 0]")])]),e._v(" "),_("p",[e._v("参数是一个对象，对这个对象进行解构，得到变量x和y的值。如果解构失败，则x和y等于默认值。")]),e._v(" "),_("p",[e._v("下面的写法为参数指定默认值，而不是为变量x和y指定默认值，注意区分写法：")]),e._v(" "),_("pre",[_("code",[e._v("function move({ x, y } = { x: 0, y: 0 }) { return [x, y] }\nmove({x: 3, y: 8}) // [3, 8]\nmove({x: 3}) // [3, undefined]\nmove() // [0,0]")])]),e._v(" "),_("p",[_("strong",[e._v("undefined会触发函数参数的默认值。")])]),e._v(" "),_("h3",{staticClass:"title"},[e._v("圆括号的问题")]),e._v(" "),_("p",[e._v("ES6的规则是，只要有可能导致解构奇异，就不得使用圆括号。不能使用圆括号的情况：")]),e._v(" "),_("p",[_("strong",[e._v("1、变量声明语句中，模式不能带有圆括号；")])]),e._v(" "),_("p",[_("strong",[e._v("2、函数参数中，模式不能带有圆括号；")])]),e._v(" "),_("p",[_("strong",[e._v("3、不能将整个模式或者嵌套模式中的一层放在括号中；")])]),e._v(" "),_("p",[e._v("可以使用圆括号的情况："),_("strong",[e._v("赋值语句的非模式部分可以使用圆括号：")])]),e._v(" "),_("h3",{staticClass:"title"},[e._v("用途")]),e._v(" "),_("p",[_("strong",[e._v("1、交换变量的值：[x, y] = [y, x]")])]),e._v(" "),_("p",[_("strong",[e._v("2、从函数返回多个值")])]),e._v(" "),_("pre",[_("code",[e._v("function exp() { return [1, 2, 3] }\nvar [a, b, c] = exp()")])]),e._v(" "),_("p",[_("strong",[e._v("3、函数参数的定义")])]),e._v(" "),_("pre",[_("code",[e._v("function f([x, y, z]) { ... }\nf([1, 2, 3])\n\nfunction f({x, y, z}) { ... }\nf({ x: 1, y: 2, z: 3 })")])]),e._v(" "),_("p",[_("strong",[e._v("4、提取JSON数据对象")])]),e._v(" "),_("p",[_("strong",[e._v("5、函数参数的默认值")])]),e._v(" "),_("p",[_("strong",[e._v("6、遍历Map结构：")])]),e._v(" "),_("pre",[_("code",[e._v("var map = new Map()\nmap.set('first', 'hello')\nmap.set('second', 'world')\nfor(let [key, value] of map) { console.log(key + ' is ' +value) }")])]),e._v(" "),_("p",[_("strong",[e._v("7、输入模块的指定方法：")])]),e._v(" "),_("pre",[_("code",[e._v("const { SourceNode } = require('source-map')")])])])}]},o=_("U5Ua")(t,n,!1,null,null,null);v.default=o.exports}});