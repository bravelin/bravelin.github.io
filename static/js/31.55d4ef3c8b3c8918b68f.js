webpackJsonp([31],{DL8S:function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={extends:v("3ErM").a},a={render:function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"page article"},[v("h2",{staticClass:"title"},[t._v("ES6标准入门笔记之三：字符串的扩展")]),t._v(" "),t._m(0),t._v(" "),v("footer",[t._v("2017年03月11日")]),t._v(" "),v("Comments"),t._v(" "),v("Catalog",{attrs:{catalog:t.catalog}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"content"},[v("h3",{staticClass:"title"},[t._v("字符的Unicode表示法")]),t._v(" "),v("p",[t._v("JS中可以使用\\uxxxx表示一个字符，但这个表示法仅限于\\u0000-\\uffff之间的字符，超出这个范围的字符，必须用2个双字节的形式表达。")]),t._v(" "),v("pre",[v("code",[t._v('"\\uD842\\uDFB7" // "𠮷"\n"\\u20BB7"  // "₻7"\n"\\u{20BB7}" // "𠮷"')])]),t._v(" "),v("p",[t._v("如果直接在\\u后面跟上超过0xffff的数值，JS会理解成\\u20BB+7。在ES6中，将码点放入大括号中即可正确解读该字符，并且大括号表示法与四字节的UTF-16编码是等价的。")]),t._v(" "),v("p",[t._v("可以使用以下六种方式表示一个字符：")]),t._v(" "),v("pre",[v("code",[t._v("'\\z'\n'\\172'  // 八进制\n'\\x7A'  // 十六进制\n'\\u007A'\n'\\u{7A}'")])]),t._v(" "),v("h3",{staticClass:"title"},[t._v("codePointAt()")]),t._v(" "),v("p",[t._v("在JS内部，字符以UTF-16的格式存储，每个字符固定为2个字节。对于那些需要4个字节存储的字符（码点大于0xFFFF），JS会认为它们是两个字符：")]),t._v(" "),v("pre",[v("code",[t._v("var s = '\\u{20BB7}'\ns.length // 2\ns.charCodeAt(0) // 55362\ns.charCodeAt(1) // 57271\ns.codePointAt(0) // 134071")])]),t._v(" "),v("p",[t._v("codePointAt可以正确处理4个字节存储的字符，返回一个字符的码点（十进制表示）。而对于两个字节存储的常规字符，它的返回结果与charCodeAt一样。")]),t._v(" "),v("pre",[v("code",[t._v("var s = '\\u{20BB7}a' // 在JS中长度是3\ns.codePointAt(0).toString(16) // 20BB7\ns.codePointAt(2).toString(16) // 61，正确序号其实是1")])]),t._v(" "),v("p",[t._v("可以使用for of循环遍历字符：")]),t._v(" "),v("pre",[v("code",[t._v("var s = '\\u{20BB7}a'\nfor(let ch of s){ console.log(ch.codePointAt(0).toString(16)) }")])]),t._v(" "),v("p",[t._v("测试一个字符是由两个字节组成还是四个字节组成：")]),t._v(" "),v("pre",[v("code",[t._v("function is32Bit(c) { return c.codePointAt(0) > 0xffff }")])]),t._v(" "),v("h3",{staticClass:"title"},[t._v("String.fromCodePoint")]),t._v(" "),v("p",[t._v("ES5的String.fromCharCode方法用于从码点返回对应字符，但这个方法不能识别32位的UTF-16字符。String.fromCodePoint方法则可以。在作用上，与codePointAt方法相反。")]),t._v(" "),v("h3",{staticClass:"title"},[t._v("字符串的遍历器接口")]),t._v(" "),v("p",[t._v("ES6为字符串提供了遍历器接口，使字符串可以由for...of循环遍历。")]),t._v(" "),v("pre",[v("code",[t._v("for(let codePoint of 'foo') { console.log(codePoint) }\n// 'f'\n// 'o'\n// 'o'")])]),t._v(" "),v("p",[t._v("这个遍历器的最大优点是可以识别大于0xFFFF的码点。")]),t._v(" "),v("h3",{staticClass:"title"},[t._v("at()")]),t._v(" "),v("p",[t._v("ES5中的charAt方法返回字符串给定位置的字符，该方法不能识别大于0xffff的字符。at方法则可以识别。")]),t._v(" "),v("h3",{staticClass:"title"},[t._v("includes()、startsWidth()、endsWidth()")]),t._v(" "),v("p",[t._v("除了indexOf()之外，es6提供的这3种方法也可以确定一个字符串是否包含在另外的一个字符串中。")]),t._v(" "),v("p",[t._v("includes()：返回布尔值，表示是否找到了参数字符串。")]),t._v(" "),v("p",[t._v("startsWidth()：返回布尔值，表示参数字符串是否在源字符串的头部。")]),t._v(" "),v("p",[t._v("endsWidth()：返回布尔值，表示参数字符串是否在源字符串的尾部。")]),t._v(" "),v("p",[v("strong",[t._v("这3个方法都支持第二个参数n，表示开始搜索的位置。(endsWidth的n表示前n个字符)")])]),t._v(" "),v("h3",{staticClass:"title"},[t._v("repeat()")]),t._v(" "),v("p",[t._v("repeat方法返回一个新的字符串，表示将原字符重复n次。（参数会被转成整数。）")]),t._v(" "),v("h3",{staticClass:"title"},[t._v("padStart()、padEnd()")]),t._v(" "),v("p",[t._v("ES7推出了字符串补全功能，如果某个字符串未达到指定的长度，则在头部或者尾部补全之。")]),t._v(" "),v("pre",[v("code",[t._v("'x'.padStart(5,'ab') // ababx\n'x'.padEnd(5,'ab') // xabab")])]),t._v(" "),v("p",[t._v("第一个参数指定字符串的最小长度，第二个参数（默认为空格）则是用来补全的字符串。")]),t._v(" "),v("h3",{staticClass:"title"},[t._v("模板字符串")]),t._v(" "),v("p",[t._v("模板字符串（template string）是增强版的字符串，使用反撇号（`：一般和~是同一个按键）标识。它可以当做普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量：")]),t._v(" "),v("pre",[v("code",[t._v("`In JavaScript '\\n' is a line-feed` // 普通字符串\n\n// 多行字符串，可以直接换行\n`In JavaScript this is\n    not legal`\n\n// 在字符串中嵌入变量\nvar name = 'bob', time = 'today'\n`Hello ${name}, how are you ${time}` // Hello bob, how are you today")])]),t._v(" "),v("p",[v("strong",[t._v("如果在模板字符串中使用反撇号，则前面需要使用反斜杠转义。")]),t._v("如果使用模板字符串表示多行字符，则所有的缩进和空格都会保留在输出中。")]),t._v(" "),v("p",[t._v("在模板字符串中嵌入变量，需要写在"),v("strong",[t._v(" ${} ")]),t._v("中。大括号内可以放入任意的JavaScript表达式（甚至调用函数），可以进行运算，以及引用对象的属性。")]),t._v(" "),v("pre",[v("code",[t._v("var x = 1, y = 2\n`${x} + ${y} = ${ x+ y}`\n\nfunction fn() { return 'good luck!' }\n`foo ${fn()} boo` // foo good luck! boo")])]),t._v(" "),v("p",[t._v("如果大括号中的对象不是字符串，则会调用对象的toString()方法转为字符串。如果引用的对象没有声明，则报错。")]),t._v(" "),v("h3",{staticClass:"title"},[t._v("模板编译")]),t._v(" "),v("p",[t._v("待编译的模板：")]),t._v(" "),v("pre",[v("code",[t._v("var template = `\n<ul>\n    <% for(var i = 0; i < data.length; i++) { %>\n        <li><%= data[i] %></li>\n    <% } %>\n</ul>\n                `")])]),t._v(" "),v("p",[t._v("使用正则表达式将其转为JavaScript表达式字符串：")]),t._v(" "),v("pre",[v("code",[t._v("var evalExpr = /<%=(.+?)%>/g\nvar expr = /<%([\\s\\S]+?)%>/g\ntemplate = template.replace(evalExpr, '`); \\n echo( $1 ); \\n echo(`').replace(expr, '`); \\n $1 \\n echo(`')\ntemplate = 'echo(`' + template + '`)'")])]),t._v(" "),v("p",[t._v("处理之后的结果是：")]),t._v(" "),v("pre",[v("code",[t._v("echo(`<ul>`);\nfor(var i = 0; i < data.length; i++) {\n     echo(`<li>`);\n     echo(  data[i]  );\n     echo(`</li>`);\n}\necho(`</ul>`)")])]),t._v(" "),v("p",[t._v("最终的脚本：")]),t._v(" "),v("pre",[v("code",[t._v("var script = `(function parse(data){\n    var output = ''\n    function echo (html) { output += html }\n    ${ template }\n    return output\n})`")])]),t._v(" "),v("h3",{staticClass:"title"},[t._v("标签模板（tagged template）")]),t._v(" "),v("p",[t._v("模板字符串可以紧跟在一个函数名的后面，该函数将被调用来处理这个模板字符串。")]),t._v(" "),v("p",[v("strong",[t._v('标签模板其实不是模板，而是函数调用的一种形式。"标签"指的是函数，紧跟在后面的模板字符串就是它的参数。')])]),t._v(" "),v("pre",[v("code",[t._v("var a = 5, b = 10\ntag `Hello ${ a + b } world ${ a * b }`\n\nfunction tag (stringArr, ...values) {}\n// 实际上是 tag (['Hello ', ' world', ''], 15, 50)")])]),t._v(" "),v("p",[t._v("tag函数的第一个参数是一个数组，该数组的成员是模板字符串中那些没有变量替换的部分。其他参数是模板字符串中各个变量被替换之后的值。")]),t._v(" "),v("p",[t._v("tag函数的第一个参数有一个raw属性，也指向一个数组。该数组的成员与此参数数组几乎完全一致。两者唯一的区别，是字符串里面的反斜杠被转义了。")]),t._v(" "),v("h3",{staticClass:"title"},[t._v("String.raw()")]),t._v(" "),v("p",[t._v("通常用来充当模板字符串的处理函数，返回一个反斜线都被转义的字符串，对应于替换变量之后的模板字符串"),v("strong",[t._v("（好像不太对）")]),t._v("：")]),t._v(" "),v("pre",[v("code",[t._v("String.raw `Hi\\n ${ 1 + 2 }` // Hi\\\\n 3，实际中chrome输出Hi\\n 3")])])])}]},o=v("Z0/y")(n,a,!1,null,null,null);e.default=o.exports}});