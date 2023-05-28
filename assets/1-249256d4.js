import{u as e}from"./highlight-2e3cec98.js";import{u as o}from"./catalog-69e48a3d.js";import{_ as t,b as n,c as p,l as r}from"./index-4afbb925.js";import"./article-1b647556.js";const c={setup(){e(),o()}},s={class:"article-container"},a=r(`<h2 class="article-title">ES6标准入门笔记之一：let与const命令、变量的解构赋值、字符串的扩展</h2><div class="article-content"><p>ECMAScript 6（ES6）是JavaScript语言的下一代标准，2015年6月正式发布。计划以后每年发布一次标准，ES6又称ECMAScript 2015.</p><p><strong>ECMAScript和JavaScript的关系：一个是国际标准，一个是标准的实现。</strong></p><p>2013年3月，ES6草案封闭，不再接受新的功能。新功能将被加入ES7。</p><p>向TC39提交的提案，变成正式标准需要经历5个阶段：<strong>Strawman（展示阶段）、Proposal（征求意见阶段）、Draft（草案阶段）、Candidate（候选阶段）、Finished（定案阶段）。</strong></p><h3 class="title">let命令</h3><p>用于声明变量，作用类似var，但只在let变量的代码块内有效。</p><p>for循环的计数器，很适合使用let命令：for(let i = 0; i&lt; len; i++) {}</p><p><strong>不存在变量提升：</strong>变量必须先声明后使用，否则报错。</p><p><strong>暂时性死区：</strong>只要块级作用域内存在let命令，它所声明的变量就“绑定”在这个区域，不受外部的影响。此时变量已存在，但不可获取。只有在声明之后才可使用。</p><pre><code>var tmp = 123
if (true) {
    tmp = 234 // 报错 ReferenceError
    let tmp
}</code></pre><p><strong>在代码块内，使用let、const声明变量之前，该变量都是不可用的，语法上称之为“暂时性死区”。</strong></p><p>let不允许在相同的作用域内重复声明同一个变量。</p><h3 class="title">块级作用域</h3><p>let为JavaScript新增了块级作用域：</p><pre><code>function f1() {
    let n = 5
    if (true) {
        let n = 10 // 内层块，不影响外部
    }
    console.log(n) // 5
}</code></pre><p>ES6允许块级作用域任意嵌套，外层作用域无法读取内层变量，内层作用域可以定义外层作用域同名的变量。</p><p>在ES5中，函数声明会提升到当前作用域的顶部得到执行。ES6支持块级作用域，内部声明的函数不会影响到外部。<i>（书中的例子好像有问题）</i></p><p>在严格模式下，函数只能在顶层作用域内和函数内声明，其他情况下（if代码块、循环代码块）声明都会报错。</p><h3 class="title">const命令</h3><p>const用来声明变量。<strong>一旦声明，其值就不能改变。</strong>意味着必须立即初始化，不能在以后赋值。</p><p>const的作用域与let相同，只在声明所在的块级作用域内有效。</p><p>对于复合类型的变量，变量名不指向数据，而是指向数据所在的地址。<strong>const命令只是保证地址不变，数据是可变的。</strong></p><p>如果想将对象冻结，可以使用Object.freeze方法。除了将对象冻结，也可以将属性冻结。</p><p>利用递归彻底冻结一个对象：</p><pre><code>var constantize = (obj) =&gt; {
    Object.freeze(obj)
    Object.keys(obj).forEach( (key, value) =&gt; {
        if (typeof obj[key] === &#39;object&#39;) {
            constantize(obj[key])
        }
    })
}</code></pre><p>ES6一共有6种声明变量的方法：var、function、let、const、import、class</p><p>const声明的变量只在当前代码块有效，跨模块常量可以如下设置：</p><pre><code>// constants.js
export const A = 1
export const B = 2

// test1.js
import * as constants from &#39;./constants&#39;
console.log(constants.A)
console.log(constants.A)

// test2.js
import {A, B} from &#39;./constants&#39;
console.log(A)
console.log(B)</code></pre><p><strong>全局对象在浏览器环境中是window对象，在node.js中是global对象。</strong></p><h3 class="title">数组的解构赋值</h3><p><strong>Destructuring</strong>：按照一定模式，从数组和对象中提取值，对变量进行赋值，称之为解构。</p><pre><code>var [a, b, c] = [1, 2, 3]

var [a, ...b] = [1, 2, 3, 4]
console.log(a) // 1
console.log(b) // [2, 3, 4]</code></pre><p>上面按照位置的对应关系对变量赋值。这种写法属于<strong>模式匹配</strong>，只要等号两边的模式相同，左边的变量就会被赋予对应的值。</p><p>如果解构不成功，变量的值为undefined。不完全解构也是支持的。</p><pre><code>let [x, y] = [1, 2, 3]</code></pre><p>如果等号的右边不是数组（不是可遍历的结构），那么将会报错。</p><p>对于Set结构以及具有Iterator接口的数据结构，也可以使用数组的解构赋值：</p><pre><code>let [x, y, z] = new Set([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;])</code></pre><p><strong>解构赋值允许指定默认值：</strong>当相应的位置值严格等于undefined时，变量值取默认值。</p><pre><code>[x, y = &#39;b&#39;] = [&#39;a&#39;, undefined] // x = &#39;a&#39;  y = &#39;b&#39;
[x = 1] = [null] // x = null</code></pre><p>如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候才会求值。</p><p>默认值可以引用解构赋值的其他变量，但该变量必须已经赋值：</p><pre><code>let [x = 1, y = x] = [] // x=1; y=1
let [x = 1, y = x] = [2] // x=2; y=2</code></pre><h3 class="title">对象、字符串的解构赋值</h3><p>对象的解构相同的属性名为依据获取正确的值，未能获取则值为undefined：</p><pre><code>var { foo, bar } = { foo: &#39;111&#39;, bar: &#39;222&#39; } // foo = &#39;111&#39; bar = &#39;222&#39;</code></pre><p>上式真正的形式为：</p><pre><code>var { foo: foo, bar: bar } = { foo: &#39;111&#39;, bar: &#39;222&#39; } // foo = &#39;111&#39; bar = &#39;222&#39;</code></pre><p>其内部机制是先找到同名属性，然后再赋值给对应的变量。真正被赋值的不是属性，而是变量。</p><p>和数组一样，解构也可用于嵌套结构的对象。</p><pre><code>let obj = {}
let arr = []
({ foo : obj.prop, bar : arr[0] } = { foo: 123, bar: true } ) // obj = { prop: 123 }  arr = [true]</code></pre><p>对象的解构也可以指定默认值，条件是对象的属性值严格等于undefined。</p><p>未能成功解构，对象的值为undefined。</p><p>如果将一个已经声明的变量用于解构赋值，必须非常小心：</p><pre><code>// 错误的写法
var x
{ x } = { x: 1 }

// 正确的写法
({ x } = { x: 1 })</code></pre><p>对象的解构赋值可以将现有对象的方法赋值到某个变量：let { sin, cos, log } = Math</p><p>字符串也可以解构赋值，此时字符串被转换成了一个类似数组的对象：</p><pre><code>const [a, b, c, d, e] = &#39;hello&#39;
a // &#39;h&#39;
b // &#39;e&#39;</code></pre><p>类似数组的对象都有length属性，可以对这个属性进行解构赋值：</p><pre><code>let { length: len } = &#39;hello&#39;
len // 5</code></pre><h3 class="title">数值和布尔值、函数参数的解构赋值</h3><p>如果等号右边的是数值或者布尔值，则会先转换成对象：</p><pre><code>let { toString: s } = 123
s === Number.prototype.toString // true

let { toString: s } = true
s === Boolean.prototype.toString // true
            </code></pre><p><strong>解构赋值的规则是，只要等号右边的值不是对象，则会先转换成对象。undefined和null无法转换成对象，所以对它们的解构赋值都会报错。</strong></p><p>函数的参数也可以解构赋值：</p><pre><code>[[1, 2], [3, 4]].map(([a, b] =&gt; a+b)) // [3, 7]</code></pre><p>也可以使用默认值：</p><pre><code>function move({x = 0, y = 0} = {}) { return [x, y] }
move({ x: 3, y: 8}) // [3, 8]
move({ x: 3}) // [3, 0]</code></pre><p>参数是一个对象，对这个对象进行解构，得到变量x和y的值。如果解构失败，则x和y等于默认值。</p><p>下面的写法为参数指定默认值，而不是为变量x和y指定默认值，注意区分写法：</p><pre><code>function move({ x, y } = { x: 0, y: 0 }) { return [x, y] }
move({x: 3, y: 8}) // [3, 8]
move({x: 3}) // [3, undefined]
move() // [0,0]</code></pre><p><strong>undefined会触发函数参数的默认值。</strong></p><p>ES6的规则是，只要有可能导致解构奇异，就不得使用圆括号。不能使用圆括号的情况：</p><p><strong>1、变量声明语句中，模式不能带有圆括号；</strong></p><p><strong>2、函数参数中，模式不能带有圆括号；</strong></p><p><strong>3、不能将整个模式或者嵌套模式中的一层放在括号中；</strong></p><p>可以使用圆括号的情况：<strong>赋值语句的非模式部分可以使用圆括号：</strong></p><p><strong>1、交换变量的值：[x, y] = [y, x]</strong></p><p><strong>2、从函数返回多个值</strong></p><pre><code>function exp() { return [1, 2, 3] }
var [a, b, c] = exp()</code></pre><p><strong>3、函数参数的定义</strong></p><pre><code>function f([x, y, z]) { ... }
f([1, 2, 3])

function f({x, y, z}) { ... }
f({ x: 1, y: 2, z: 3 })</code></pre><p><strong>4、提取JSON数据对象</strong></p><p><strong>5、函数参数的默认值</strong></p><p><strong>6、遍历Map结构：</strong></p><pre><code>var map = new Map()
map.set(&#39;first&#39;, &#39;hello&#39;)
map.set(&#39;second&#39;, &#39;world&#39;)
for(let [key, value] of map) { console.log(key + &#39; is &#39; +value) }</code></pre><p><strong>7、输入模块的指定方法：</strong></p><pre><code>const { SourceNode } = require(&#39;source-map&#39;)</code></pre><h3 class="title">字符的Unicode表示法</h3><p>JS中可以使用\\uxxxx表示一个字符，但这个表示法仅限于\\u0000-\\uffff之间的字符，超出这个范围的字符，必须用2个双字节的形式表达。</p><pre><code>&quot;\\uD842\\uDFB7&quot; // &quot;𠮷&quot;
&quot;\\u20BB7&quot;  // &quot;₻7&quot;
&quot;\\u{20BB7}&quot; // &quot;𠮷&quot;</code></pre><p>如果直接在\\u后面跟上超过0xffff的数值，JS会理解成\\u20BB+7。在ES6中，将码点放入大括号中即可正确解读该字符，并且大括号表示法与四字节的UTF-16编码是等价的。</p><p>可以使用以下六种方式表示一个字符：</p><pre><code>&#39;\\z&#39;
&#39;\\172&#39;  // 八进制
&#39;\\x7A&#39;  // 十六进制
&#39;\\u007A&#39;
&#39;\\u{7A}&#39;</code></pre><h3 class="title">codePointAt()</h3><p>在JS内部，字符以UTF-16的格式存储，每个字符固定为2个字节。对于那些需要4个字节存储的字符（码点大于0xFFFF），JS会认为它们是两个字符：</p><pre><code>var s = &#39;\\u{20BB7}&#39;
s.length // 2
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271
s.codePointAt(0) // 134071</code></pre><p>codePointAt可以正确处理4个字节存储的字符，返回一个字符的码点（十进制表示）。而对于两个字节存储的常规字符，它的返回结果与charCodeAt一样。</p><pre><code>var s = &#39;\\u{20BB7}a&#39; // 在JS中长度是3
s.codePointAt(0).toString(16) // 20BB7
s.codePointAt(2).toString(16) // 61，正确序号其实是1</code></pre><p>可以使用for of循环遍历字符：</p><pre><code>var s = &#39;\\u{20BB7}a&#39;
for(let ch of s){ console.log(ch.codePointAt(0).toString(16)) }</code></pre><p>测试一个字符是由两个字节组成还是四个字节组成：</p><pre><code>function is32Bit(c) { return c.codePointAt(0) &gt; 0xffff }</code></pre><h3 class="title">String.fromCodePoint、字符串的遍历器接口</h3><p>ES5的String.fromCharCode方法用于从码点返回对应字符，但这个方法不能识别32位的UTF-16字符。String.fromCodePoint方法则可以。在作用上，与codePointAt方法相反。</p><p>ES6为字符串提供了遍历器接口，使字符串可以由for...of循环遍历。</p><pre><code>for(let codePoint of &#39;foo&#39;) { console.log(codePoint) }
// &#39;f&#39;
// &#39;o&#39;
// &#39;o&#39;</code></pre><p>这个遍历器的最大优点是可以识别大于0xFFFF的码点。</p><h3 class="title">at()、includes()、startsWidth()、endsWidth()</h3><p>ES5中的charAt方法返回字符串给定位置的字符，该方法不能识别大于0xffff的字符。at方法则可以识别。</p><p>除了indexOf()之外，es6提供的这3种方法也可以确定一个字符串是否包含在另外的一个字符串中。</p><p>includes()：返回布尔值，表示是否找到了参数字符串。</p><p>startsWidth()：返回布尔值，表示参数字符串是否在源字符串的头部。</p><p>endsWidth()：返回布尔值，表示参数字符串是否在源字符串的尾部。</p><p><strong>这3个方法都支持第二个参数n，表示开始搜索的位置。(endsWidth的n表示前n个字符)</strong></p><h3 class="title">repeat()、padStart()、padEnd()</h3><p>repeat方法返回一个新的字符串，表示将原字符重复n次。（参数会被转成整数。）</p><p>ES7推出了字符串补全功能，如果某个字符串未达到指定的长度，则在头部或者尾部补全之。</p><pre><code>&#39;x&#39;.padStart(5,&#39;ab&#39;) // ababx
&#39;x&#39;.padEnd(5,&#39;ab&#39;) // xabab</code></pre><p>第一个参数指定字符串的最小长度，第二个参数（默认为空格）则是用来补全的字符串。</p><h3 class="title">模板字符串、模板编译与标签模板</h3><p>模板字符串（template string）是增强版的字符串，使用反撇号（\`：一般和~是同一个按键）标识。它可以当做普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量：</p><pre><code>\`In JavaScript &#39;\\n&#39; is a line-feed\` // 普通字符串

// 多行字符串，可以直接换行
\`In JavaScript this is
    not legal\`

// 在字符串中嵌入变量
var name = &#39;bob&#39;, time = &#39;today&#39;
\`Hello \${name}, how are you \${time}\` // Hello bob, how are you today</code></pre><p><strong>如果在模板字符串中使用反撇号，则前面需要使用反斜杠转义。</strong>如果使用模板字符串表示多行字符，则所有的缩进和空格都会保留在输出中。</p><p>在模板字符串中嵌入变量，需要写在<strong> \${} </strong>中。大括号内可以放入任意的JavaScript表达式（甚至调用函数），可以进行运算，以及引用对象的属性。</p><pre><code>var x = 1, y = 2
\`\${x} + \${y} = \${ x+ y}\`

function fn() { return &#39;good luck!&#39; }
\`foo \${fn()} boo\` // foo good luck! boo</code></pre><p>如果大括号中的对象不是字符串，则会调用对象的toString()方法转为字符串。如果引用的对象没有声明，则报错。</p><p>待编译的模板：</p><pre><code>var template = \`
&lt;ul&gt;
    &lt;% for(var i = 0; i &lt; data.length; i++) { %&gt;
        &lt;li&gt;&lt;%= data[i] %&gt;&lt;/li&gt;
    &lt;% } %&gt;
&lt;/ul&gt;
                \`</code></pre><p>使用正则表达式将其转为JavaScript表达式字符串：</p><pre><code>var evalExpr = /&lt;%=(.+?)%&gt;/g
var expr = /&lt;%([\\s\\S]+?)%&gt;/g
template = template.replace(evalExpr, &#39;\`); \\n echo( $1 ); \\n echo(\`&#39;).replace(expr, &#39;\`); \\n $1 \\n echo(\`&#39;)
template = &#39;echo(\`&#39; + template + &#39;\`)&#39;</code></pre><p>处理之后的结果是：</p><pre><code>echo(\`&lt;ul&gt;\`);
for(var i = 0; i &lt; data.length; i++) {
     echo(\`&lt;li&gt;\`);
     echo(  data[i]  );
     echo(\`&lt;/li&gt;\`);
}
echo(\`&lt;/ul&gt;\`)</code></pre><p>最终的脚本：</p><pre><code>var script = \`(function parse(data){
    var output = &#39;&#39;
    function echo (html) { output += html }
    \${ template }
    return output
})\`</code></pre><p>模板字符串可以紧跟在一个函数名的后面，该函数将被调用来处理这个模板字符串。</p><p><strong>标签模板其实不是模板，而是函数调用的一种形式。&quot;标签&quot;指的是函数，紧跟在后面的模板字符串就是它的参数。</strong></p><pre><code>var a = 5, b = 10
tag \`Hello \${ a + b } world \${ a * b }\`

function tag (stringArr, ...values) {}
// 实际上是 tag ([&#39;Hello &#39;, &#39; world&#39;, &#39;&#39;], 15, 50)</code></pre><p>tag函数的第一个参数是一个数组，该数组的成员是模板字符串中那些没有变量替换的部分。其他参数是模板字符串中各个变量被替换之后的值。</p><p>tag函数的第一个参数有一个raw属性，也指向一个数组。该数组的成员与此参数数组几乎完全一致。两者唯一的区别，是字符串里面的反斜杠被转义了。</p><h3 class="title">String.raw()</h3><p>通常用来充当模板字符串的处理函数，返回一个反斜线都被转义的字符串，对应于替换变量之后的模板字符串<strong>（好像不太对）</strong>：</p><pre><code>String.raw \`Hi\\n \${ 1 + 2 }\` // Hi\\\\n 3，实际中chrome输出Hi\\n 3</code></pre></div><footer>2017年03月08日</footer>`,3),l=[a];function d(i,g,u,f,h,x){return n(),p("div",s,l)}const y=t(c,[["render",d]]);export{y as default};
