webpackJsonp([7,20],{40:function(t,e){"use strict";t.exports={mounted:function(){this.$nextTick(function(){var t=document.querySelectorAll("code");if(t.length>0)for(var e=0;e<t.length;e++)hljs.highlightBlock(t[e])})}}},65:function(t,e,n){var o,c;o=n(40);var r=n(91);c=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(c=o=o.default),"function"==typeof c&&(c=c.options),c.render=r.render,c.staticRenderFns=r.staticRenderFns,t.exports=o},91:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[t._v("《ES6标准入门》笔记之三：字符串的扩展")]),t._v(" "),t._m(0),t._v(" "),n("footer",[t._v("2017年03月11日")]),t._v(" "),n("comments")])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v("字符的Unicode表示法")]),t._v(" "),n("p",[t._v("JS中可以使用\\uxxxx表示一个字符，但这个表示法仅限于\\u0000-\\uffff之间的字符，超出这个范围的字符，必须用2个双字节的形式表达。")]),t._v(" "),n("pre",[n("code",[t._v('"\\uD842\\uDFB7" // "𠮷"\n"\\u20BB7"  // "₻7"\n"\\u{20BB7}" // "𠮷"')])]),t._v(" "),n("p",[t._v("如果直接在\\u后面跟上超过0xffff的数值，JS会理解成\\u20BB+7。在ES6中，将码点放入大括号中即可正确解读该字符，并且大括号表示法与四字节的UTF-16编码是等价的。")]),t._v(" "),n("p",[t._v("可以使用以下六种方式表示一个字符：")]),t._v(" "),n("pre",[n("code",[t._v("'\\z'\n'\\172'  // 八进制\n'\\x7A'  // 十六进制\n'\\u007A'\n'\\u{7A}'")])]),t._v(" "),n("h3",{staticClass:"title"},[t._v("codePointAt()")]),t._v(" "),n("p",[t._v("在JS内部，字符以UTF-16的格式存储，每个字符固定为2个字节。对于那些需要4个字节存储的字符（码点大于0xFFFF），JS会认为它们是两个字符：")]),t._v(" "),n("pre",[n("code",[t._v("var s = '\\u{20BB7}'\ns.length // 2\ns.charCodeAt(0) // 55362\ns.charCodeAt(1) // 57271\ns.codePointAt(0) // 134071")])]),t._v(" "),n("p",[t._v("codePointAt可以正确处理4个字节存储的字符，返回一个字符的码点（十进制表示）。而对于两个字节存储的常规字符，它的返回结果与charCodeAt一样。")]),t._v(" "),n("pre",[n("code",[t._v("var s = '\\u{20BB7}a' // 在JS中长度是3\ns.codePointAt(0).toString(16) // 20BB7\ns.codePointAt(2).toString(16) // 61，正确序号其实是1")])]),t._v(" "),n("p",[t._v("可以使用for of循环遍历字符：")]),t._v(" "),n("pre",[n("code",[t._v("var s = '\\u{20BB7}a'\nfor(let ch of s){ console.log(ch.codePointAt(0).toString(16)) }")])]),t._v(" "),n("p",[t._v("测试一个字符是由两个字节组成还是四个字节组成：")]),t._v(" "),n("pre",[n("code",[t._v("function is32Bit(c) { return c.codePointAt(0) > 0xffff }")])])])}]}}});