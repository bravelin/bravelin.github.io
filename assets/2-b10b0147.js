import{u as e}from"./highlight-2e3cec98.js";import{u as r}from"./catalog-69e48a3d.js";import{_ as t,b as o,c as p,l as n}from"./index-4afbb925.js";import"./article-1b647556.js";const a={setup(){e(),r()}},s={class:"article-container"},c=n(`<h2 class="article-title">ES6标准入门笔记之二：正则、数值、数组、函数和对象的扩展</h2><div class="article-content"><h3 class="title">RegExp构造函数</h3><p>ES6允许RegExp构造函数接受正则表达式作为参数，而不仅仅是字符串：var reg = new RegExp(/xyz/i)。</p><p>如果使用构造函数的第二个参数指定修饰符，则返回的正则表达式会忽略原有的正则表达式修饰符。只使用新指定的修饰符：new RegExp(/abc/ig, &#39;i&#39;)</p><h3 class="title">字符串的正则方法</h3><p>字符串对象的match()、replace()、search()和split()方法可以使用正则表达式。</p><h3 class="title">u修饰符</h3><p>新增的u修饰符，含义为&quot;Unicode模式&quot;，用来处理大于\\uffff的Unicode字符。</p><pre><code>/^\\uD83D/u.test(&#39;\\uD83D\\uDC2A&#39;)  // false
/^\\uD83D/.test(&#39;\\uD83D\\uDC2A&#39;)  // true</code></pre><p>&quot;83D2A&quot;是一个4字节的UTF-16编码，代表一个字符。ES5将其识别成两个字符，因此第二个正则为true。增加了u修饰符，ES6将其识别为一个字符，所以第一个正则为false。</p><p><strong>点字符是匹配除换行符以外的任意单个字符。</strong>对于码点大于0xffff的Unicode字符，点字符不能识别，必须加上u修饰符。</p><p>ES6新增了使用大括号的Unicode字符表示法，这种表示法在正则中必须加上u修饰符才能识别，否则会被解读为量词。</p><pre><code>/\\u{61}/.test(&#39;a&#39;) // false
/\\u{61}/u.test(&#39;a&#39;) // true
/^\\u{3}$/.test(&#39;uuu&#39;) // true</code></pre><p>u修饰符也影响到预定义模式能否正确识别码点大于0xfffff的Unicode字符。</p><h3 class="title">y修饰符</h3><p>称为粘连（sticky）修饰符。与g修饰符类似，也是全局匹配。后一次匹配都成上一次匹配成功的下一个位置开始。不同之处在于，g修饰符只要剩余位置中存在匹配就行， <strong>而y修饰符会确保匹配从剩余的第一个位置开始。</strong></p><pre><code>var s = &#39;aaa_aa_a&#39;
var r1 = /a+/g
var r2 = /a+/y

r1.exec(s) // [&#39;aaa&#39;]
r2.exec(s) // [&#39;aaa&#39;]

r1.exec(s) // [&#39;aa&#39;]
r2.exec(s) // null

/b/y.exec(&#39;aba&#39;) // null</code></pre><p>第一次匹配的结果相同，第二次就不一样了。进一步说，y修饰符隐藏了头部的的匹配标志（^）</p><p>在split方法中使用y修饰符，原字符串必须以分隔符开头。意味着只要匹配成功，数组的第一个成员定是空字符串。</p><pre><code>&#39;x##&#39;.split(/#/y) // 没有找到匹配 [&#39;x##&#39;]
&#39;##x&#39;.split(/#/y) // 找到两个匹配 [&#39;&#39;, &#39;&#39;, &#39;x&#39;]
&#39;#x#&#39;.split(/#/y) // [&#39;&#39;, &#39;x#&#39;]</code></pre><p>replace例子：</p><pre><code>var reg = /a/gy
&#39;aaxa&#39;.replace(reg, &#39;-&#39;) // &#39;--xa&#39;</code></pre><h3 class="title">sticky属性</h3><p>ES6正则对象新增的这个属性表示是否设置了y修饰符。</p><pre><code>var reg = /abc/y
reg.sticky // true</code></pre><h3 class="title">flags属性</h3><p>此属性返回正则表达式的修饰符。</p><pre><code>/abc/ig.source // source属性返回正则表达式的正文 abc
/abc/ig.flags // flags属性返回修饰符 gi</code></pre><h3 class="title">二进制和八进制数值表示法</h3><p>ES6对二进制和八进制提供了新的表示方法：分别用前缀0b(0B)和0o(0O)表示：</p><pre><code>0b111110111 === 503
0o767 === 503</code></pre><p>在严格模式中，八进制数据不允许使用0前缀表示，需使用0o前缀。使用Number方法可以将这种前缀表示的数值字符串转为十进制数值：</p><pre><code>Number(&#39;0b111110111&#39;) // 503
Number(&#39;0o767&#39;) // 503</code></pre><h3 class="title">Number.isFinite()、Number.isNaN()</h3><p>分别用来检查Infinite和NaN这两个特殊值。</p><p>Number.isFinite()用来检查一个数值是否<strong>非无穷</strong>（infinity）。</p><p>Number.isNaN()用来检查一个值是否为NaN。</p><p>这两个方法与传统的全局方法isFinite()和isNaN()的区别在于，<strong>传统的方法会先调用Number将非数值转为数值，再进行判断。而新方法只对数值有效。</strong></p><pre><code>isFinite(25) // true
isFinite(&#39;25&#39;) // true
Number.isFinite(25) // true
Number.isFinite(&#39;25&#39;) // false
isNaN(&#39;NaN&#39;) // true
Number.isNaN(&#39;NaN&#39;) // false</code></pre><h3 class="title">Number.parseInt()、Number.parseFloat()</h3><p>与传统的全局方法parseInt()和parseFloat()是等价的，只是移植到了Number对象上。</p><p>其目的是逐步减少全局方法，使语言逐步模块化。</p><h3 class="title">Number.isInteger()</h3><p>用来判断一个值是否为整数。在JS内部，整数和浮点数是相同的存储方法，3和3.0是相同的数值。</p><pre><code>Number.isInteger(3) // true
Number.isInteger(3.0) // true
Number.isInteger(&#39;3&#39;) // false</code></pre><h3 class="title">Number.EPSILON</h3><p>新增的极小常量：</p><pre><code>Number.EPSILON // 2.220446049250313e-16
Number.EPSILON.toFixed(20) // &quot;0.00000000000000022204&quot;</code></pre><p>因为浮点数的计算是不精确的，可以利用这个值设置误差范围：</p><pre><code>function withinErrorMargin (v1, v2) { // 判断两个值是否相等（在一定误差范围之内）
        return Math.abs(v1 - v2) &lt; Number.EPSILON
}
withinErrorMargin(0.1 + 0.2, 0.3) // true
0.1+0.2 == 0.3 // false</code></pre><h3 class="title">Number.isSafeInteger()</h3><p>JS可以精确表示的整数范围是-2 <sup>53</sup>~2 <sup>53</sup>之间，超出这个范围无法精确表示。ES6新增了 <strong>Number.MAX_SAFE_INTEGER</strong>和 <strong>Number.MIN_SAFE_INTEGER</strong>两个常量，用来表示这个范围的上下限。</p><p>Number.isSafeInteger()用来判断一个 <strong>整数</strong>是否位于这个范围之内。</p><pre><code>Math.pow(2,53) // 9007199254740992
Math.pow(2,53)+1 // 9007199254740992
Math.pow(-2,53) // -9007199254740992
Math.pow(-2,53)-1 // -9007199254740992

Number.MAX_SAFE_INTEGER // 9007199254740991
Number.MIN_SAFE_INTEGER // -9007199254740991</code></pre><pre><code>Number.isSafeInteger(&#39;a&#39;) // false
Number.isSafeInteger(null) // false
Number.isSafeInteger(NaN) // false
Number.isSafeInteger(1.2) // false
Number.isSafeInteger(1.0) // true</code></pre><h3 class="title">Math对象的扩展</h3><p>Math对象新增了17个与数学相关的静态方法。</p><p><strong>1、Math.trunc()</strong></p><p>用于获取一个数（如果不是数值，会先转换）的整数部分：</p><pre><code>Math.trunc(1.1) // 1
Math.trunc(-1.1) // -1
Math.trunc(&quot;-1.1&quot;) // -1</code></pre><p>等价于此方法：</p><pre><code>function (x) {
    return x &gt; 0 ? Math.floor(x) : Math.ceil(x)
}</code></pre><p><strong>2、Math.sign()</strong></p><p>用于判断一个数是正数、负数、0：参数为正数，返回1；参数为负数，返回-1；参数为0，返回0，参数为-0，返回-0；其他值，返回NaN。</p><pre><code>Math.sign(11) // 1
Math.sign(-11) // -1
Math.sign(-0) // -0
Math.sign(0) // 0
Math.sign(&#39;A&#39;) // NaN</code></pre><p><strong>3、Math.cbrt()</strong></p><p>用于计算一个数（如果不是数值，会先转换）的立方根：</p><pre><code>Math.cbrt(2) // 1.2599210498948732</code></pre><p>等价于此方法：</p><pre><code>function (x) {
    var y = Math.pow(Math.abs(x), 1/3)
    return x &gt; 0 ? y : -y
}</code></pre><p><strong>4、Math.clz32()</strong></p><p>返回一个数的32位无符号整数形式有多少个前导0，函数名称来自&quot;count leading zero bits in 32-bit binary representations of a number&quot;</p><pre><code>Math.clz32(1) // 31
Math.clz32(0) // 32
Math.clz32(1 &lt;&lt; 1) // 30</code></pre><p>对于小数，该方法只考虑整数部分。其他非数值参数会先转换成数值。</p><p><strong>5、Math.imul()</strong></p><p>返回两个数以32位带符号整数形式相乘的结果（也是一个32位带符号整数）。</p><p>如果只考虑32位，大多数情况下，Math.imul(a * b)与a * b的结果是相同的（（a * b）|0）。超出32位的部分溢出。</p><pre><code>Math.imul(2, 4) // 8
Math.imul(-2, -2) // 4
Math.imul(0x7fffffff, 0x7fffffff) // 1</code></pre><p>之所以增加此方法，是因为JS有精度限制，超出2的53次方无法精确表示出来。Math.imul()可以返回正确的低位数值。</p><p><strong>6、Math.fround()</strong></p><p>返回一个数的单精度浮点数形式：</p><pre><code>Math.fround(1) // 1
Math.fround(1.337) // 1.3370000123977661
Math.fround(1.5) // 1.5</code></pre><p>对于整数，此方法返回同样的整数；区别在于那些无法使用64位二进制位表示精确表示的数，Math.fround()会返回最接近这个小数的单精度浮点数。</p><p><strong>7、Math.hypot()</strong></p><p>此方法返回所有参数（如果参数不是数值，会先转换）平方和的平方根：</p><pre><code>Math.hypot(3, 4) // 5
Math.hypot(3, 4, 5) // 7.0710678118654755
Math.hypot(-3) // 3</code></pre><p><strong>8、Math.expm1()</strong></p><p>等价于Math.exp(x) - 1，即e的x次方再减去1的结果。</p><pre><code>Math.expm1(1) // 1.718281828459045</code></pre><p><strong>9、Math.log1p()</strong></p><p>等价于Math.log(1+x)，即求x加1之和的自然对数。</p><pre><code>Math.log1p(Math.E-1) // 1</code></pre><p><strong>10、Math.log10()</strong></p><p>返回以10为底的x的对数。</p><pre><code>Math.log10(1000) // 3</code></pre><p><strong>11、Math.log2()</strong></p><p>返回以2为底的x的对数。</p><pre><code>Math.log2(1024) // 10</code></pre><p><strong>12、Math.sinh(x)</strong>：返回x的双曲正旋。</p><p><strong>13、Math.cosh(x)</strong>：返回x的双曲余旋。</p><p><strong>14、Math.tanh(x)</strong>：返回x的双曲正切。</p><p><strong>15、Math.asinh(x)</strong>：返回x的反双曲正旋。</p><p><strong>16、Math.acosh(x)</strong>：返回x的反双曲余旋。</p><p><strong>17、Math.atanh(x)</strong>：返回x的反双曲正切。</p><h3 class="title">指数运算符</h3><p>ES7里面新增的一个运算符（**）</p><pre><code>2 ** 4 // 16</code></pre><p>与等号结合，形成一个新的赋值运算符：（**=）</p><pre><code>let b = 3
b **= 3 // 27</code></pre><h3 class="title">Array.from()</h3><p>用于将两类的对象转为真正的数组：类似数组的对象（array-like object）和可遍历的对象（iterable，包括Set和Map）。</p><pre><code>let arrLike = { &#39;0&#39; : &#39;a&#39;, &#39;1&#39; : &#39;b&#39;, &#39;2&#39; : &#39;c&#39;, length : 3 }
// es5的写法
var arr1 = [].slice.call(arrLike) // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]

// es6的写法
var arr2 = Array.from(arrLike) // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</code></pre><p>常见的类似数组的对象有DOM操作的NodeList对象、函数内部的arguments对象。Array.from都可以将它们转为真正的数组。</p><pre><code>var ps = document.querySelector(&#39;p&#39;)
Array.from(ps).forEach(function (p) { console.dir(p) }) // 数组对象才有forEach方法

Array.from(&#39;abcde&#39;) // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;] 字符串转数组

let newSet = new Set([&#39;a&#39;, &#39;b&#39;])
Array.from(newSet) // [&quot;a&quot;, &quot;b&quot;]</code></pre><p>因为字符串和Set都有Iterator结构，因此可以被Array.from转为正真的数组。</p><p><strong>扩展运算符（...）也可以将某些数据结构转为数组：</strong></p><pre><code>function foo() { var args = [...arguments] } // arguments对象
[...document.querySelectorAll(&#39;div&#39;)] // NodeList对象</code></pre><p>扩展运算符背后调用的是遍历器接口（Symbol.iterator）；如果一个对象没有这个接口，将无法转换。</p><p><strong>类似数组的对象本质特征是具有length属性。</strong>任何有此属性的对象，都可以通过Array.from方法进行转换。</p><pre><code>Array.from({ length: 3 }) // [undefined, undefined, undefined]</code></pre><p>Array.from可以接受第二个参数，作用类似数组的map方法，用来对每个元素进行处理，将处理之后的值返回放入的数组。</p><pre><code>Array.from([1, 2, 3], (x) =&gt; x * x ) // [1, 4, 9]
Array.from({ length: 2}, () =&gt; &#39;jack&#39; ) // [&#39;jack&#39;, &#39;jack&#39;]</code></pre><h3 class="title">Array.of()</h3><p>用于将一组值转为数组，弥补数组构造函数Array()的不足。</p><pre><code>Array.of(1, 2, 3) // [1, 2, 3]
Array.of() // []
Array.of(3) // [3]</code></pre><p>等价于下面的方法：</p><pre><code>function ArrayOf() { return [].slice.call(arguments) }</code></pre><h3 class="title">数组实例的copyWithin()</h3><p>在当前数组内将指定位置的成员复制到其他的位置（覆盖原有的成员），然后返回当前数组。</p><p><strong>Array.prototype.copyWithin(target, start = 0, end = this.length)</strong>：target是从该位置开始替换数据；start是从该位置读取数据，默认为0（可以用负值表示倒数）；end表示到该位置前停止读取数据，默认为数组的长度（可以用负值表示倒数）。</p><pre><code>[1,2,3,4,5].copyWithin(0,2) // [3, 4, 5, 4, 5]
[1,2,3,4,5].copyWithin(0,-2) // [4, 5, 3, 4, 5]</code></pre><h3 class="title">数组实例的find()和findIndex()</h3><p>find()方法用于查找第一个符合条件的数组成员，它的参数是一个回调函数，所有数组成员依次执行此函数，直到找出第一个返回true的成员，然后返回该成员；如果没有符合条件的，返回undefined。</p><pre><code>[1,2,3,4].find(function(value, index, arr) { return value &gt; 3 }) // 4 找出大于3的成员</code></pre><p>回调函数可以接受3个参数，依次为当前值、当前的位置和原数组。</p><p>findIndex()和find()方法类似，不同的是它返回的是符合条件的成员的位置，如果所有成员都不符合，则返回-1。</p><h3 class="title">数组实例的fill()</h3><p>使用给定值填充数组，返回填充之后的数组。</p><p><strong>Array.prototype.fill(value, start = 0, end = this.length)</strong>：value是填充的值，start是起始填充位置，end表示到该位置之前结束填充。</p><pre><code>[1,2,3].fill(8) // [8, 8, 8]
 new Array(3).fill(6) // [6, 6, 6]</code></pre><h3 class="title">数组实例的entries()、keys()、values()</h3><p>遍历数组的方法。都返回一个遍历器对象，可以用for...of循环遍历，唯一的区别是：keys()是对键名的遍历；values()是对键值得遍历；entries()是对键值对的遍历。</p><pre><code>for(let index of [&#39;a&#39;, &#39;b&#39;].keys()) { console.log(index) }
// 0
// 1

for(let val of [&#39;a&#39;, &#39;b&#39;].values()) { console.log(val) } // chrome不支持
// &#39;a&#39;
// &#39;b&#39;

for(let [index, val] of [&#39;a&#39;, &#39;b&#39;].entries()) { console.log(index, val) }
//0 &#39;a&#39;
//1 &#39;b&#39;
            </code></pre><h3 class="title">数组实例的includes()</h3><p>返回一个布尔值，表示数组是否包含给定的值。是属于ES7的内容。</p><pre><code>[1, 2, 3].includes(3) // true</code></pre><p>该方法可以传入第二个参数，表示搜索的起始位置。indexOf方法也可以检查数组是否包含某个值：</p><pre><code>if (arr.indexOf(el) !== -1) { }</code></pre><p>Map结构的has方法是用来查找键名的；Set结构的has方法是用来查找值得。</p><h3 class="title">数组的空位</h3><p>数组的空位表示在该位置上没有任何值（不是undefined，也不是null）：</p><pre><code>Array(3) // [, , ,]</code></pre><p>数组实例的方法对空位的处理不统一，需要避免出现空位。</p><h3 class="title">数组的推导</h3><p>数组推导（array comprehension）属于ES7的内容，允许直接通过现有的数组生成新数组。</p><pre><code>var a1 = [1, 2, 3, 4]
var a2 = [for(i of a1) i*2] // [2, 4, 6, 8]</code></pre><h3 class="title">函数参数的默认值</h3><p>ES6允许为函数参数设置默认值，直接写在参数定义的后面：</p><pre><code>function log (x, y = &#39;abc&#39;) { console.log(x, y) }

function Point (x = 0, y = 0) {
    this.x = x
    this.y = y
}</code></pre><p>参数默认值可以与解构赋值的默认值结合起来使用：</p><pre><code>function fetch (url, { method = &#39;GET&#39; } = { }) {
    console.log(method)
}
fetch(&#39;http://example.com&#39;) // GET</code></pre><p>上面调用fetch函数中，没有传入第二个参数。因此函数参数的默认值{}生效，之后是解构赋值的默认值生效。</p><p>通常情况下，定义了默认值的参数应该是函数的<strong>尾参数</strong>。如果传入undefined，将触发该参数等于默认值。</p><p>指定了默认值以后，函数的length属性将返回没有指定默认值的参数个数。也即是指定了函数参数默认值，length属性将失真。</p><pre><code>(function (a) {}).length // 1
(function (a = 5) {}).length // 0</code></pre><p>length属性是函数预期传入的参数个数。rest参数也不会计入length属性。</p><p>如果参数默认值是一个变量，则该变量应当<strong>先是当前函数的作用域，然后才是全局作用域。</strong></p><pre><code>var x = 1
function f(x, y = x) { console.log(y) }
f(2) // 2</code></pre><h3 class="title">rest参数</h3><p>rest参数用于获取函数的多余参数，这样可以不用arguments对象。rest参数搭配的变量是一个数组，该变量将多余的参数放入其中。</p><pre><code>function add (...values) {
    let sum = 0
    for (var v of values) {
        sum += v
    }
    return sum
}
add(2, 3, 6) // 11</code></pre><p>上面的add求和函数利用rest参数可以传入任意数目的参数。</p><p><strong>rest参数的变量代表一个数组，数组特有的方法都可以用于这个变量。</strong>rest参数之后不能再有其他的参数（即只能是最后一个参数），否则报错。</p><h3 class="title">扩展运算符</h3><p>扩展运算符是三个点（...），好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。</p><pre><code>console.log(...[1, 2, 3]) // 1 2 3</code></pre><p>该运算符主要用于函数调用：</p><pre><code>function push (array, ...items) {
    array.push(...items)
}
function add (x, y) { return x + y }
var nums = [4, 38]
add(...nums) // 42</code></pre><p>由于扩展运算符可以展开数组，因此不再需要apply方法将数组转为函数参数序列了。</p><pre><code>// ES5的写法
function f(x, y, z) {}
var args = [1, 2, 3]
f.apply(null, args)

// ES6的写法
f(...args)</code></pre><p>扩展运算符提供了数组合并的新写法：</p><pre><code>// ES5的写法
[1, 2].concat(more)
// ES6的写法
[1, 2, ...more]</code></pre><p>与解构赋值结合起来可以生成数组：</p><pre><code>const [first, ...rest] = [1, 2, 3, 4, 5, 6]
first // 1
rest // [2, 3, 4, 5, 6]</code></pre><p><strong>如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则报错。</strong></p><p>扩展运算符还可以将字符串转为真正的数组（并且能够正确识别32位的unicode字符）：</p><pre><code>[...&quot;hello&quot;] // [&quot;h&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot;]</code></pre><p>返回正确的字符串长度可以这样求得：</p><pre><code>function len (str) { return [...str].length }</code></pre><p>凡是涉及操作32位的Unicode字符都有这个问题，因此，最好都用扩展运算符改写：</p><pre><code>let str = &#39;x\\uD83D\\uDE80y&#39;
str.split(&#39;&#39;).reverse().join(&#39;&#39;) // error
[...str].reverse().join(&#39;&#39;) // good</code></pre><p>任何类似数组的对象都可以使用扩展运算符转为真正的数组：</p><pre><code>var nodeList = document.querySelectorAll(&quot;div&quot;)
var array = [...nodeList]</code></pre><p><strong>扩展运算符内部调用的是数据结构的Iterator接口，因此只要具有Iterator接口的对象，都可以使用扩展运算符。</strong>比如Map、Set、Generator函数。</p><pre><code>let map = new Map([ [1, &#39;one&#39;], [2, &#39;two&#39;], [3, &#39;three&#39;] ])
let arr = [...map.keys()] // [1, 2, 3]

var go = function* () {
    yield 1;
    yield 2;
    yield 3
}
[...go()] // [1, 2, 3]</code></pre><h3 class="title">name属性</h3><p>函数的name属性会返回该函数的名称。</p><p>如果将一个具名函数赋值给一个变量，name属性返回这个具名函数原本的名字。</p><pre><code>const bar = function abc() { }
bar.name // &quot;abc&quot;</code></pre><p>Function构造函数返回的函数实例，name属性的值为：anonymous</p><pre><code>(new Function).name // &quot;anonymous&quot;</code></pre><p>bind返回的函数，name属性值会加上bound的前缀：</p><pre><code>function foo () {}
foo.bind({}).name // &quot;bound foo&quot;</code></pre><h3 class="title">箭头函数</h3><p>使用箭头定义函数：</p><pre><code>var f = v =&gt; v
var f = () =&gt; v
var sum = (v1, v2) =&gt; { v1 = v1 * 2; return v1 + v2 }</code></pre><p>需要注意的地方：</p><p><strong>1、函数体内的this对象就是定义时所在的对象，而不是使用时所在的对象；</strong></p><p><strong>2、不可以当做构造函数；</strong></p><p><strong>3、不可以使用arguments对象，该对象在函数体内不存在；可以使用rest参数代替；</strong></p><p><strong>4、不可以使用yield命令，因此箭头函数不能用作Generator函数；</strong></p><h3 class="title">函数的绑定</h3><p>ES7提出函数绑定运算符（::），用来取代call、apply、bind的调用。该运算符自动将左边的对象作为上下文环境（this对象）绑定到右边的函数上。</p><pre><code>foo::bar // 等同于 bar.bind(foo)
foo::bar(...arguments) // 等同于 bar.apply(foo, arguments)</code></pre><p>如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上。</p><pre><code>var method = obj::obj.foo // 等同于 var method = ::obj.foo
let log = ::console.log // 等同于 var log = console.log.bind(console)</code></pre><h3 class="title">属性的简洁表示法</h3><p>ES6允许直接写入变量和函数作为对象的属性和方法：</p><pre><code>var foo = &#39;bar&#39;
var baz = { foo } // { foo : &#39;bar&#39; }
var o = {
    method() { return &#39;abc&#39; }
}</code></pre><p><strong>在对象中只写属性名，不写属性值，此时属性值等于属性名代表的变量。</strong></p><p>ES6允许字面量定义对象时使用表达式作为对象的属性名，即把表达式放在方括号内。</p><pre><code>let propKey = &#39;foo&#39;
let obj = { [propKey]: true, [&#39;a&#39; + &#39;bc&#39;]: 123 }</code></pre><h3 class="title">方法的name属性</h3><p>函数的name属性返回函数的名称。对象方法也是函数，因此也有name属性。返回对应的方法名，如果是取值方法，则会在方法名之前加get <strong>(有疑问？)</strong>；如果是存值方法，则会在方法名前加set。</p><pre><code>var person = {
    sayName: function () { return &#39;a&#39; },
    get firstName() { return &#39;b&#39; }
}
console.log(person.sayName.name) // &#39;sayName&#39;
console.log(person.sayName.firstName) // 预期是&#39;get firstName&#39; chrom输出是undefined</code></pre><p>如果对象的方法是一个Symbol，name属性返回的是这个Symbol值的描述。</p><pre><code>const k = Symbol(&quot;abc&quot;)
let obj = { [key]() { } }
obj[key].name // &quot;[abc]&quot;</code></pre><h3 class="title">Object.is()</h3><p>用于比较两个值是否严格相等。与严格比较符（===）的行为基本一致。不同之处是：+0不等于-0；NaN等于自身。</p><pre><code>+0 === -0 // true
NaN === NaN // false
Object.is(+0,-0) // false
Object.is(NaN, NaN) // true</code></pre><h3 class="title">Object.assign()</h3><p>将来源对象（source）的所有可枚举属性复制到目标对象（target）。有至少有两个参数，第一个参数是target对象，后面的参数是source对象。所有参数必须是对象。</p><pre><code>var target  = { a: 1 }
var source1 = { b: 2, d: 5 }
var source2 = { c: 3, b: 4 }
Object.assign(target, source1, source2) // { a: 1, b: 4, c: 3, d: 5 }</code></pre><p>如果目标对象与源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性。</p><p>Object.assign只复制自身的属性，不可枚举的属性（enumerable为false）和继承的属性不会复制。</p><p>属性值为Symbol的属性，也会被复制进去。</p><p><strong>对于嵌套的对象，Object.assign的处理方法是替换，而不是添加。</strong></p><pre><code>var target = { a: { b: &#39;c&#39;, d: &#39;e&#39; } }
var source = { a: { b: &#39;hello&#39; } }
Object.assign(target, source) // { a: { b: &#39;hello&#39; } }</code></pre><p><strong>Object.assign可以处理数组，但是会将其视为对象：</strong></p><pre><code>Object.assign([1, 2, 3], [4, 5]) // [4, 5, 3]</code></pre><p>Object.assign只能克隆原始对象的自身的值，不能克隆它继承的值。如果想要保持继承链，可以使用下面的方式：</p><pre><code>function clone (origin) {
    let originProto = Object.getPrototypeOf(origin)
    return Object.assign(Object.create(originProto), origin)
}</code></pre><p>将多个对象合并到某个对象：</p><pre><code>const merge = (target, ...source) =&gt; Object.assign(target, ...source)</code></pre><p>如果期望合并之后返回新的对象，可以将所有对象合并到一个空对象：</p><pre><code>const merge = (...source) =&gt; Object.assign({}, ...source)</code></pre><h3 class="title">属性的可枚举性</h3><p>对象的每个属性都有一个描述对象（Descriptor），用于控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。</p><pre><code>let obj = { foo: 123 }
Object.getOwnPropertyDescriptor(obj, &quot;foo&quot;) // { configurable: true, enumerable: true, value: 123, writable: true }</code></pre><p>描述对象中的enumerable称之为“可枚举性”，如果该属性为false，下列操作会忽略当前属性：</p><p>1、for...in循环：只遍历对象自身的和继承的可枚举属性；</p><p>2、Object.keys()：返回对象自身的所有可枚举属性的键名；</p><p>3、JSON.stringify()：只串行化对象自身的可枚举属性；</p><p>4、Object.assign()：只复制对象自身的可枚举属性；</p><p>5、Reflect.enumerate()：返回所有for...in循环会遍历的属性；</p><p><strong>操作中引入继承的属性会让问题复杂化，大部分时候只需要知道对象的自身属性。尽量不要使用for... in循环，而用Object.keys()。</strong></p><h3 class="title">属性的遍历</h3><p>ES6一共有6种方法遍历对象的属性：</p><p><strong>1、for...in</strong></p><p>for...in循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）。</p><p><strong>2、Object.keys(obj)</strong></p><p>返回一个数组，包含对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。</p><p><strong>3、Object.getOwnPropertyNames(obj)</strong></p><p>返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。</p><p><strong>4、Object.getOwnPropertySymbols(obj)</strong></p><p>返回一个数组，包含对象自身的所有Symbol属性。</p><p><strong>5、Reflect.ownKeys(obj)</strong></p><p>返回一个数组，包含对象自身的所有属性（包括不可枚举、Symbol属性）。</p><p><strong>6、Reflect.enumerate(obj)</strong></p><p>返回一个Iterator对象，遍历对象自身的和继承的所有可枚举属性（不含Symbol属性，和for...in循环一样）。</p><p>属性遍历遵循以下的规则：</p><p>首先遍历所有属性名为数值的属性，按照数字排序；</p><p>其次遍历所有属性名为字符串的属性，按照生成时间排序；</p><p>最后遍历所有属性名为Symbol值的属性，按照生成时间排序。</p><h3 class="title">_proto_</h3><p>_proto_属性用来读取或者设置当前对象的prototype对象。</p><p>最好不要使用这个属性，而是使用Object.setPrototypeOf()、Object.getPrototypeOf()代替直接读写操作。</p><h3 class="title">对象的扩展运算符</h3><p>ES7中的一项提案，将rest参数/扩展运算符（...）引入对象。Babel转码器已支持。</p><p><strong>Rest参数</strong></p><p>rest参数用于从一个对象取值，相当于将所有可遍历但尚未被读取的属性，分配到指定的对象上，所有键及其值都会复制到新的对象上。</p><pre><code>let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
x // 1
y // 2
z // { a: 3, b: 4 }</code></pre><p>rest复制是浅复制，如果一个键的值是复合类型（数组、对象、函数），rest参数复制的是这个值的引用。</p><p>rest也不会复制继承自原型对象的属性。</p><p><strong>扩展运算符</strong></p><p>扩展运算符用于取出参数对象的所有可遍历属性，复制到当前对象中。</p><pre><code>let z = { a: 3, b: 4 }
let n = { ...z } // { a: 3, b: 4 }</code></pre><p>等同于使用Object.assign方法。</p><p>可以合并两个对象：</p><pre><code>let ab = { ...a, ...b }</code></pre></div><footer>2017年03月21日</footer>`,3),i=[c];function l(u,d,g,h,f,b){return o(),p("div",s,i)}const v=t(a,[["render",l]]);export{v as default};
