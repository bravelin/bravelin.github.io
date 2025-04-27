import{_ as t,q as u,s as r,h as p,o as a,e as l,x as n}from"./index-5cTkXVTa.js";const c={};function s(i,e){const o=p("MyArticle");return a(),u(o,{title:"ES6标准入门笔记之一：let与const命令、变量的解构赋值、字符串的扩展",date:"2017年03月08日"},{default:r(()=>e[0]||(e[0]=[l("div",{class:"_article-content"},[l("p",null,"ECMAScript 6（ES6）是JavaScript语言的下一代标准，2015年6月正式发布。计划以后每年发布一次标准，ES6又称ECMAScript 2015."),l("p",null,[l("strong",null,"ECMAScript和JavaScript的关系：一个是国际标准，一个是标准的实现。")]),l("p",null,"2013年3月，ES6草案封闭，不再接受新的功能。新功能将被加入ES7。"),l("p",null,[n("向TC39提交的提案，变成正式标准需要经历5个阶段："),l("strong",null,"Strawman（展示阶段）、Proposal（征求意见阶段）、Draft（草案阶段）、Candidate（候选阶段）、Finished（定案阶段）。")]),l("h3",{class:"title"},"let命令"),l("p",null,"用于声明变量，作用类似var，但只在let变量的代码块内有效。"),l("p",null,"for循环的计数器，很适合使用let命令：for(let i = 0; i< len; i++) {}"),l("p",null,[l("strong",null,"不存在变量提升："),n("变量必须先声明后使用，否则报错。")]),l("p",null,[l("strong",null,"暂时性死区："),n("只要块级作用域内存在let命令，它所声明的变量就“绑定”在这个区域，不受外部的影响。此时变量已存在，但不可获取。只有在声明之后才可使用。")]),l("pre",null,[l("code",null,`var tmp = 123
if (true) {
    tmp = 234 // 报错 ReferenceError
    let tmp
}`)]),l("p",null,[l("strong",null,"在代码块内，使用let、const声明变量之前，该变量都是不可用的，语法上称之为“暂时性死区”。")]),l("p",null,"let不允许在相同的作用域内重复声明同一个变量。"),l("h3",{class:"title"},"块级作用域"),l("p",null,"let为JavaScript新增了块级作用域："),l("pre",null,[l("code",null,`function f1() {
    let n = 5
    if (true) {
        let n = 10 // 内层块，不影响外部
    }
    console.log(n) // 5
}`)]),l("p",null,"ES6允许块级作用域任意嵌套，外层作用域无法读取内层变量，内层作用域可以定义外层作用域同名的变量。"),l("p",null,[n("在ES5中，函数声明会提升到当前作用域的顶部得到执行。ES6支持块级作用域，内部声明的函数不会影响到外部。"),l("i",null,"（书中的例子好像有问题）")]),l("p",null,"在严格模式下，函数只能在顶层作用域内和函数内声明，其他情况下（if代码块、循环代码块）声明都会报错。"),l("h3",{class:"title"},"const命令"),l("p",null,[n("const用来声明变量。"),l("strong",null,"一旦声明，其值就不能改变。"),n("意味着必须立即初始化，不能在以后赋值。")]),l("p",null,"const的作用域与let相同，只在声明所在的块级作用域内有效。"),l("p",null,[n("对于复合类型的变量，变量名不指向数据，而是指向数据所在的地址。"),l("strong",null,"const命令只是保证地址不变，数据是可变的。")]),l("p",null,"如果想将对象冻结，可以使用Object.freeze方法。除了将对象冻结，也可以将属性冻结。"),l("p",null,"利用递归彻底冻结一个对象："),l("pre",null,[l("code",null,`var constantize = (obj) => {
    Object.freeze(obj)
    Object.keys(obj).forEach( (key, value) => {
        if (typeof obj[key] === 'object') {
            constantize(obj[key])
        }
    })
}`)]),l("p",null,"ES6一共有6种声明变量的方法：var、function、let、const、import、class"),l("p",null,"const声明的变量只在当前代码块有效，跨模块常量可以如下设置："),l("pre",null,[l("code",null,`// constants.js
export const A = 1
export const B = 2

// test1.js
import * as constants from './constants'
console.log(constants.A)
console.log(constants.A)

// test2.js
import {A, B} from './constants'
console.log(A)
console.log(B)`)]),l("p",null,[l("strong",null,"全局对象在浏览器环境中是window对象，在node.js中是global对象。")]),l("h3",{class:"title"},"数组的解构赋值"),l("p",null,[l("strong",null,"Destructuring"),n("：按照一定模式，从数组和对象中提取值，对变量进行赋值，称之为解构。")]),l("pre",null,[l("code",null,`var [a, b, c] = [1, 2, 3]

var [a, ...b] = [1, 2, 3, 4]
console.log(a) // 1
console.log(b) // [2, 3, 4]`)]),l("p",null,[n("上面按照位置的对应关系对变量赋值。这种写法属于"),l("strong",null,"模式匹配"),n("，只要等号两边的模式相同，左边的变量就会被赋予对应的值。")]),l("p",null,"如果解构不成功，变量的值为undefined。不完全解构也是支持的。"),l("pre",null,[l("code",null,"let [x, y] = [1, 2, 3]")]),l("p",null,"如果等号的右边不是数组（不是可遍历的结构），那么将会报错。"),l("p",null,"对于Set结构以及具有Iterator接口的数据结构，也可以使用数组的解构赋值："),l("pre",null,[l("code",null,"let [x, y, z] = new Set(['a', 'b', 'c'])")]),l("p",null,[l("strong",null,"解构赋值允许指定默认值："),n("当相应的位置值严格等于undefined时，变量值取默认值。")]),l("pre",null,[l("code",null,`[x, y = 'b'] = ['a', undefined] // x = 'a'  y = 'b'
[x = 1] = [null] // x = null`)]),l("p",null,"如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候才会求值。"),l("p",null,"默认值可以引用解构赋值的其他变量，但该变量必须已经赋值："),l("pre",null,[l("code",null,`let [x = 1, y = x] = [] // x=1; y=1
let [x = 1, y = x] = [2] // x=2; y=2`)]),l("h3",{class:"title"},"对象、字符串的解构赋值"),l("p",null,"对象的解构相同的属性名为依据获取正确的值，未能获取则值为undefined："),l("pre",null,[l("code",null,"var { foo, bar } = { foo: '111', bar: '222' } // foo = '111' bar = '222'")]),l("p",null,"上式真正的形式为："),l("pre",null,[l("code",null,"var { foo: foo, bar: bar } = { foo: '111', bar: '222' } // foo = '111' bar = '222'")]),l("p",null,"其内部机制是先找到同名属性，然后再赋值给对应的变量。真正被赋值的不是属性，而是变量。"),l("p",null,"和数组一样，解构也可用于嵌套结构的对象。"),l("pre",null,[l("code",null,`let obj = {}
let arr = []
({ foo : obj.prop, bar : arr[0] } = { foo: 123, bar: true } ) // obj = { prop: 123 }  arr = [true]`)]),l("p",null,"对象的解构也可以指定默认值，条件是对象的属性值严格等于undefined。"),l("p",null,"未能成功解构，对象的值为undefined。"),l("p",null,"如果将一个已经声明的变量用于解构赋值，必须非常小心："),l("pre",null,[l("code",null,`// 错误的写法
var x
{ x } = { x: 1 }

// 正确的写法
({ x } = { x: 1 })`)]),l("p",null,"对象的解构赋值可以将现有对象的方法赋值到某个变量：let { sin, cos, log } = Math"),l("p",null,"字符串也可以解构赋值，此时字符串被转换成了一个类似数组的对象："),l("pre",null,[l("code",null,`const [a, b, c, d, e] = 'hello'
a // 'h'
b // 'e'`)]),l("p",null,"类似数组的对象都有length属性，可以对这个属性进行解构赋值："),l("pre",null,[l("code",null,`let { length: len } = 'hello'
len // 5`)]),l("h3",{class:"title"},"数值和布尔值、函数参数的解构赋值"),l("p",null,"如果等号右边的是数值或者布尔值，则会先转换成对象："),l("pre",null,[l("code",null,`let { toString: s } = 123
s === Number.prototype.toString // true

let { toString: s } = true
s === Boolean.prototype.toString // true
            `)]),l("p",null,[l("strong",null,"解构赋值的规则是，只要等号右边的值不是对象，则会先转换成对象。undefined和null无法转换成对象，所以对它们的解构赋值都会报错。")]),l("p",null,"函数的参数也可以解构赋值："),l("pre",null,[l("code",null,"[[1, 2], [3, 4]].map(([a, b] => a+b)) // [3, 7]")]),l("p",null,"也可以使用默认值："),l("pre",null,[l("code",null,`function move({x = 0, y = 0} = {}) { return [x, y] }
move({ x: 3, y: 8}) // [3, 8]
move({ x: 3}) // [3, 0]`)]),l("p",null,"参数是一个对象，对这个对象进行解构，得到变量x和y的值。如果解构失败，则x和y等于默认值。"),l("p",null,"下面的写法为参数指定默认值，而不是为变量x和y指定默认值，注意区分写法："),l("pre",null,[l("code",null,`function move({ x, y } = { x: 0, y: 0 }) { return [x, y] }
move({x: 3, y: 8}) // [3, 8]
move({x: 3}) // [3, undefined]
move() // [0,0]`)]),l("p",null,[l("strong",null,"undefined会触发函数参数的默认值。")]),l("p",null,"ES6的规则是，只要有可能导致解构奇异，就不得使用圆括号。不能使用圆括号的情况："),l("p",null,[l("strong",null,"1、变量声明语句中，模式不能带有圆括号；")]),l("p",null,[l("strong",null,"2、函数参数中，模式不能带有圆括号；")]),l("p",null,[l("strong",null,"3、不能将整个模式或者嵌套模式中的一层放在括号中；")]),l("p",null,[n("可以使用圆括号的情况："),l("strong",null,"赋值语句的非模式部分可以使用圆括号：")]),l("p",null,[l("strong",null,"1、交换变量的值：[x, y] = [y, x]")]),l("p",null,[l("strong",null,"2、从函数返回多个值")]),l("pre",null,[l("code",null,`function exp() { return [1, 2, 3] }
var [a, b, c] = exp()`)]),l("p",null,[l("strong",null,"3、函数参数的定义")]),l("pre",null,[l("code",null,`function f([x, y, z]) { ... }
f([1, 2, 3])

function f({x, y, z}) { ... }
f({ x: 1, y: 2, z: 3 })`)]),l("p",null,[l("strong",null,"4、提取JSON数据对象")]),l("p",null,[l("strong",null,"5、函数参数的默认值")]),l("p",null,[l("strong",null,"6、遍历Map结构：")]),l("pre",null,[l("code",null,`var map = new Map()
map.set('first', 'hello')
map.set('second', 'world')
for(let [key, value] of map) { console.log(key + ' is ' +value) }`)]),l("p",null,[l("strong",null,"7、输入模块的指定方法：")]),l("pre",null,[l("code",null,"const { SourceNode } = require('source-map')")]),l("h3",{class:"title"},"字符的Unicode表示法"),l("p",null,"JS中可以使用\\uxxxx表示一个字符，但这个表示法仅限于\\u0000-\\uffff之间的字符，超出这个范围的字符，必须用2个双字节的形式表达。"),l("pre",null,[l("code",null,`"\\uD842\\uDFB7" // "𠮷"
"\\u20BB7"  // "₻7"
"\\u{20BB7}" // "𠮷"`)]),l("p",null,"如果直接在\\u后面跟上超过0xffff的数值，JS会理解成\\u20BB+7。在ES6中，将码点放入大括号中即可正确解读该字符，并且大括号表示法与四字节的UTF-16编码是等价的。"),l("p",null,"可以使用以下六种方式表示一个字符："),l("pre",null,[l("code",null,`'\\z'
'\\172'  // 八进制
'\\x7A'  // 十六进制
'\\u007A'
'\\u{7A}'`)]),l("h3",{class:"title"},"codePointAt()"),l("p",null,"在JS内部，字符以UTF-16的格式存储，每个字符固定为2个字节。对于那些需要4个字节存储的字符（码点大于0xFFFF），JS会认为它们是两个字符："),l("pre",null,[l("code",null,`var s = '\\u{20BB7}'
s.length // 2
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271
s.codePointAt(0) // 134071`)]),l("p",null,"codePointAt可以正确处理4个字节存储的字符，返回一个字符的码点（十进制表示）。而对于两个字节存储的常规字符，它的返回结果与charCodeAt一样。"),l("pre",null,[l("code",null,`var s = '\\u{20BB7}a' // 在JS中长度是3
s.codePointAt(0).toString(16) // 20BB7
s.codePointAt(2).toString(16) // 61，正确序号其实是1`)]),l("p",null,"可以使用for of循环遍历字符："),l("pre",null,[l("code",null,`var s = '\\u{20BB7}a'
for(let ch of s){ console.log(ch.codePointAt(0).toString(16)) }`)]),l("p",null,"测试一个字符是由两个字节组成还是四个字节组成："),l("pre",null,[l("code",null,"function is32Bit(c) { return c.codePointAt(0) > 0xffff }")]),l("h3",{class:"title"},"String.fromCodePoint、字符串的遍历器接口"),l("p",null,"ES5的String.fromCharCode方法用于从码点返回对应字符，但这个方法不能识别32位的UTF-16字符。String.fromCodePoint方法则可以。在作用上，与codePointAt方法相反。"),l("p",null,"ES6为字符串提供了遍历器接口，使字符串可以由for...of循环遍历。"),l("pre",null,[l("code",null,`for(let codePoint of 'foo') { console.log(codePoint) }
// 'f'
// 'o'
// 'o'`)]),l("p",null,"这个遍历器的最大优点是可以识别大于0xFFFF的码点。"),l("h3",{class:"title"},"at()、includes()、startsWidth()、endsWidth()"),l("p",null,"ES5中的charAt方法返回字符串给定位置的字符，该方法不能识别大于0xffff的字符。at方法则可以识别。"),l("p",null,"除了indexOf()之外，es6提供的这3种方法也可以确定一个字符串是否包含在另外的一个字符串中。"),l("p",null,"includes()：返回布尔值，表示是否找到了参数字符串。"),l("p",null,"startsWidth()：返回布尔值，表示参数字符串是否在源字符串的头部。"),l("p",null,"endsWidth()：返回布尔值，表示参数字符串是否在源字符串的尾部。"),l("p",null,[l("strong",null,"这3个方法都支持第二个参数n，表示开始搜索的位置。(endsWidth的n表示前n个字符)")]),l("h3",{class:"title"},"repeat()、padStart()、padEnd()"),l("p",null,"repeat方法返回一个新的字符串，表示将原字符重复n次。（参数会被转成整数。）"),l("p",null,"ES7推出了字符串补全功能，如果某个字符串未达到指定的长度，则在头部或者尾部补全之。"),l("pre",null,[l("code",null,`'x'.padStart(5,'ab') // ababx
'x'.padEnd(5,'ab') // xabab`)]),l("p",null,"第一个参数指定字符串的最小长度，第二个参数（默认为空格）则是用来补全的字符串。"),l("h3",{class:"title"},"模板字符串、模板编译与标签模板"),l("p",null,"模板字符串（template string）是增强版的字符串，使用反撇号（`：一般和~是同一个按键）标识。它可以当做普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量："),l("pre",null,[l("code",null,"`In JavaScript '\\n' is a line-feed` // 普通字符串\n\n// 多行字符串，可以直接换行\n`In JavaScript this is\n    not legal`\n\n// 在字符串中嵌入变量\nvar name = 'bob', time = 'today'\n`Hello ${name}, how are you ${time}` // Hello bob, how are you today")]),l("p",null,[l("strong",null,"如果在模板字符串中使用反撇号，则前面需要使用反斜杠转义。"),n("如果使用模板字符串表示多行字符，则所有的缩进和空格都会保留在输出中。")]),l("p",null,[n("在模板字符串中嵌入变量，需要写在"),l("strong",null," ${} "),n("中。大括号内可以放入任意的JavaScript表达式（甚至调用函数），可以进行运算，以及引用对象的属性。")]),l("pre",null,[l("code",null,"var x = 1, y = 2\n`${x} + ${y} = ${ x+ y}`\n\nfunction fn() { return 'good luck!' }\n`foo ${fn()} boo` // foo good luck! boo")]),l("p",null,"如果大括号中的对象不是字符串，则会调用对象的toString()方法转为字符串。如果引用的对象没有声明，则报错。"),l("p",null,"待编译的模板："),l("pre",null,[l("code",null,`var template = \`
<ul>
    <% for(var i = 0; i < data.length; i++) { %>
        <li><%= data[i] %></li>
    <% } %>
</ul>
                \``)]),l("p",null,"使用正则表达式将其转为JavaScript表达式字符串："),l("pre",null,[l("code",null,"var evalExpr = /<%=(.+?)%>/g\nvar expr = /<%([\\s\\S]+?)%>/g\ntemplate = template.replace(evalExpr, '`); \\n echo( $1 ); \\n echo(`').replace(expr, '`); \\n $1 \\n echo(`')\ntemplate = 'echo(`' + template + '`)'")]),l("p",null,"处理之后的结果是："),l("pre",null,[l("code",null,"echo(`<ul>`);\nfor(var i = 0; i < data.length; i++) {\n     echo(`<li>`);\n     echo(  data[i]  );\n     echo(`</li>`);\n}\necho(`</ul>`)")]),l("p",null,"最终的脚本："),l("pre",null,[l("code",null,`var script = \`(function parse(data){
    var output = ''
    function echo (html) { output += html }
    \${ template }
    return output
})\``)]),l("p",null,"模板字符串可以紧跟在一个函数名的后面，该函数将被调用来处理这个模板字符串。"),l("p",null,[l("strong",null,'标签模板其实不是模板，而是函数调用的一种形式。"标签"指的是函数，紧跟在后面的模板字符串就是它的参数。')]),l("pre",null,[l("code",null,"var a = 5, b = 10\ntag `Hello ${ a + b } world ${ a * b }`\n\nfunction tag (stringArr, ...values) {}\n// 实际上是 tag (['Hello ', ' world', ''], 15, 50)")]),l("p",null,"tag函数的第一个参数是一个数组，该数组的成员是模板字符串中那些没有变量替换的部分。其他参数是模板字符串中各个变量被替换之后的值。"),l("p",null,"tag函数的第一个参数有一个raw属性，也指向一个数组。该数组的成员与此参数数组几乎完全一致。两者唯一的区别，是字符串里面的反斜杠被转义了。"),l("h3",{class:"title"},"String.raw()"),l("p",null,[n("通常用来充当模板字符串的处理函数，返回一个反斜线都被转义的字符串，对应于替换变量之后的模板字符串"),l("strong",null,"（好像不太对）"),n("：")]),l("pre",null,[l("code",null,"String.raw `Hi\\n ${ 1 + 2 }` // Hi\\\\n 3，实际中chrome输出Hi\\n 3")])],-1)])),_:1})}const f=t(c,[["render",s]]);export{f as default};
