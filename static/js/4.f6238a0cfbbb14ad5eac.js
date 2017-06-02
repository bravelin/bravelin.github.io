webpackJsonp([4,30],{1:function(o,e){"use strict";o.exports={mounted:function(){this.$nextTick(function(){var o=document.querySelectorAll("code");if(o.length>0)for(var e=0;e<o.length;e++)hljs.highlightBlock(o[e])})}}},2:function(o,e,t){var r,n;r=t(1);var l=t(3);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(n=r=r.default),"function"==typeof n&&(n=n.options),n.render=l.render,n.staticRenderFns=l.staticRenderFns,o.exports=r},3:function(o,e){o.exports={render:function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div")},staticRenderFns:[]}},34:function(o,e,t){"use strict";function r(o){return o&&o.__esModule?o:{default:o}}var n=t(2),l=r(n);o.exports={extends:l.default}},76:function(o,e,t){var r,n;r=t(34);var l=t(97);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(n=r=r.default),"function"==typeof n&&(n=n.options),n.render=l.render,n.staticRenderFns=l.staticRenderFns,o.exports=r},97:function(o,e){o.exports={render:function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"page article"},[t("h2",{staticClass:"title"},[o._v("《ES6标准入门》笔记之九：Symbol")]),o._v(" "),o._m(0),o._v(" "),t("footer",[o._v("2017年05月13日")]),o._v(" "),t("comments")],1)},staticRenderFns:[function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"content"},[t("h3",{staticClass:"title"},[o._v("概述")]),o._v(" "),t("p",[o._v("ES5中对象属性名都是字符串，容易造成属性名的冲突。引入Symbol的目的就是解决这个问题。它是JavaScript语言的第七种类型（Undefined、NULL、Boolean、String、Number、Object）。")]),o._v(" "),t("p",[o._v("Symbol值通过Symbol函数生成，可以接受一个字符串作为参数，表示对Symbol实例的描述，使之在控制台显示或者转为字符串时好区分。")]),o._v(" "),t("pre",[t("code",[o._v("var s1 = Symbol('foo') // Symbol(foo)\nvar s2 = Symbol('bar') // Symbol(bar)")])]),o._v(" "),t("p",[t("strong",[o._v("Symbol值不能与其他类型的值进行运算，否则报错。")])]),o._v(" "),t("p",[o._v("Symbol值可以显示转为字符串或者布尔值，但是不能转为数值。")]),o._v(" "),t("pre",[t("code",[o._v('var sym = Symbol()\nBoolean(sym) // true\nsym.toString() // "Symbol()"')])]),o._v(" "),t("h3",{staticClass:"title"},[o._v("作为属性名的Symbol")]),o._v(" "),t("p",[o._v("由于每个Symbol值都是不相等的，因此Symbol值可以作为标识符用于对象的属性名，保证不会出现同名的属性。")]),o._v(" "),t("pre",[t("code",[o._v('var sym = Symbol()\nvar a = {}\na[sym] = "abc"\n\nvar b = { [sym]: "123" }')])]),o._v(" "),t("p",[t("strong",[o._v("Symbol值作为对象属性名时不能使用点运算符。")])]),o._v(" "),t("p",[o._v("Symbol类型可用于定义一组常量，可保证这组常量的值都是不相等的。")]),o._v(" "),t("pre",[t("code",[o._v("log.levels = {\n    DEBUG: Symbol('debug'),\n    INFO: Symbol('info'),\n    WARN: Symbol('warn')\n}")])]),o._v(" "),t("h3",{staticClass:"title"},[o._v("属性名的遍历")]),o._v(" "),t("p",[o._v("Symbol作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()返回。有一个Object.getOwnPropertySymbols方法可以指定对象的所有Symbol属性。")]),o._v(" "),t("pre",[t("code",[o._v("var obj = { a: 111 }\nvar foo = Symbol('foo')\nvar bar = Symbol('bar')\nobj[foo] = '222'\nobj[bar] = '333'\nObject.getOwnPropertyNames(obj) // [\"a\"]\nObject.getOwnPropertySymbols(obj) // [Symbol(foo), Symbol(bar)]\nReflect.ownKeys(obj) // [\"a\", Symbol(foo), Symbol(bar)]")])]),o._v(" "),t("p",[o._v("另外一个新的API："),t("strong",[o._v("Reflect.ownKeys")]),o._v("方法可以返回所有类型的键名（包括了Symbol键名）。")]),o._v(" "),t("h3",{staticClass:"title"},[o._v("Symbol.for()、Symbol.keyFor()")]),o._v(" "),t("p",[o._v("Symbol.for()接受一个字符串作为参数，搜索是否有以此参数作为名称的Symbol值。如果有，则返回这个Symbol值，否则新建并返回一个以该字符串作为名称的Symbol值。")]),o._v(" "),t("pre",[t("code",[o._v("let s1 = Symbol.for('foo')\nlet s2 = Symbol.for('foo')\ns1 === s2 // true")])]),o._v(" "),t("p",[t("strong",[o._v("Symbol.for()与Symbol()都会生成新的Symbol，区别在于前者会被登记在全局环境中供搜索，而后者不会。")]),o._v("Symbol.for()不会每次都返回新的Symbol值，而是会先检查给定的key是否存在，如果不存在才会返回新的值。")]),o._v(" "),t("p",[o._v("Symbol.keyFor()方法返回一个已登记的Symbol类型值的key。")]),o._v(" "),t("pre",[t("code",[o._v("var s1 = Symbol.for('foo')\nSymbol.keyFor(s1) // 'foo'\nvar s2 = Symbol()\nSymbol.keyFor(s2) // undefined")])]),o._v(" "),t("p",[t("strong",[o._v("Symbol.for为Symbol值登记的名字是全局环境的，在不同的iframe后者service worker中可以取到相同的值。")])])])}]}}});