webpackJsonp([16,40],{1:function(e,t){"use strict";e.exports={mounted:function(){this.$nextTick(function(){var e=document.querySelectorAll("code");if(e.length>0)for(var t=0;t<e.length;t++)hljs.highlightBlock(e[t])})}}},2:function(e,t,n){var a,s;a=n(1);var r=n(3);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,e.exports=a},3:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},staticRenderFns:[]}},37:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var s=n(2),r=a(s);e.exports={extends:r.default}},101:function(e,t,n){var a,s;a=n(37);var r=n(153);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,e.exports=a},153:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[e._v("《ES6标准入门》笔记之四：正则的扩展")]),e._v(" "),e._m(0),e._v(" "),n("footer",[e._v("2017年03月13日")]),e._v(" "),n("comments")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[e._v("RegExp构造函数")]),e._v(" "),n("p",[e._v("ES6允许RegExp构造函数接受正则表达式作为参数，而不仅仅是字符串：var reg = new RegExp(/xyz/i)。")]),e._v(" "),n("p",[e._v("如果使用构造函数的第二个参数指定修饰符，则返回的正则表达式会忽略原有的正则表达式修饰符。只使用新指定的修饰符：new RegExp(/abc/ig, 'i')")]),e._v(" "),n("h3",{staticClass:"title"},[e._v("字符串的正则方法")]),e._v(" "),n("p",[e._v("字符串对象的match()、replace()、search()和split()方法可以使用正则表达式。")]),e._v(" "),n("h3",{staticClass:"title"},[e._v("u修饰符")]),e._v(" "),n("p",[e._v('新增的u修饰符，含义为"Unicode模式"，用来处理大于\\uffff的Unicode字符。')]),e._v(" "),n("pre",[n("code",[e._v("/^\\uD83D/u.test('\\uD83D\\uDC2A')  // false\n/^\\uD83D/.test('\\uD83D\\uDC2A')  // true")])]),e._v(" "),n("p",[e._v('"83D2A"是一个4字节的UTF-16编码，代表一个字符。ES5将其识别成两个字符，因此第二个正则为true。增加了u修饰符，ES6将其识别为一个字符，所以第一个正则为false。')]),e._v(" "),n("p",[n("strong",[e._v("点字符是匹配除换行符以外的任意单个字符。")]),e._v("对于码点大于0xffff的Unicode字符，点字符不能识别，必须加上u修饰符。")]),e._v(" "),n("p",[e._v("ES6新增了使用大括号的Unicode字符表示法，这种表示法在正则中必须加上u修饰符才能识别，否则会被解读为量词。")]),e._v(" "),n("pre",[n("code",[e._v("/\\u{61}/.test('a') // false\n/\\u{61}/u.test('a') // true\n/^\\u{3}$/.test('uuu') // true")])]),e._v(" "),n("p",[e._v("u修饰符也影响到预定义模式能否正确识别码点大于0xfffff的Unicode字符。")]),e._v(" "),n("h3",{staticClass:"title"},[e._v("y修饰符")]),e._v(" "),n("p",[e._v("称为粘连（sticky）修饰符。与g修饰符类似，也是全局匹配。后一次匹配都成上一次匹配成功的下一个位置开始。不同之处在于，g修饰符只要剩余位置中存在匹配就行，"),n("strong",[e._v("而y修饰符会确保匹配从剩余的第一个位置开始。")])]),e._v(" "),n("pre",[n("code",[e._v("var s = 'aaa_aa_a'\nvar r1 = /a+/g\nvar r2 = /a+/y\n\nr1.exec(s) // ['aaa']\nr2.exec(s) // ['aaa']\n\nr1.exec(s) // ['aa']\nr2.exec(s) // null\n\n/b/y.exec('aba') // null")])]),e._v(" "),n("p",[e._v("第一次匹配的结果相同，第二次就不一样了。进一步说，y修饰符隐藏了头部的的匹配标志（^）")]),e._v(" "),n("p",[e._v("在split方法中使用y修饰符，原字符串必须以分隔符开头。意味着只要匹配成功，数组的第一个成员定是空字符串。")]),e._v(" "),n("pre",[n("code",[e._v("'x##'.split(/#/y) // 没有找到匹配 ['x##']\n'##x'.split(/#/y) // 找到两个匹配 ['', '', 'x']\n'#x#'.split(/#/y) // ['', 'x#']")])]),e._v(" "),n("p",[e._v("replace例子：")]),e._v(" "),n("pre",[n("code",[e._v("var reg = /a/gy\n'aaxa'.replace(reg, '-') // '--xa'")])]),e._v(" "),n("h3",{staticClass:"title"},[e._v("sticky属性")]),e._v(" "),n("p",[e._v("ES6正则对象新增的这个属性表示是否设置了y修饰符。")]),e._v(" "),n("pre",[n("code",[e._v("var reg = /abc/y\nreg.sticky // true")])]),e._v(" "),n("h3",{staticClass:"title"},[e._v("flags属性")]),e._v(" "),n("p",[e._v("此属性返回正则表达式的修饰符。")]),e._v(" "),n("pre",[n("code",[e._v("/abc/ig.source // source属性返回正则表达式的正文 abc\n/abc/ig.flags // flags属性返回修饰符 gi")])])])}]}}});