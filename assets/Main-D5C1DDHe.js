import{_ as r,s as t,x as o,h as a,o as s,f as l,y as n}from"./index-CxcENImR.js";const p={};function c(i,e){const u=a("MyArticle");return s(),t(u,{title:"ES6标准入门笔记之二：正则、数值、数组、函数和对象的扩展",date:"2017年03月21日"},{default:o(()=>[...e[0]||(e[0]=[l("div",{class:"_article-content"},[l("h3",{class:"title"},"RegExp构造函数"),l("p",null,"ES6允许RegExp构造函数接受正则表达式作为参数，而不仅仅是字符串：var reg = new RegExp(/xyz/i)。"),l("p",null,"如果使用构造函数的第二个参数指定修饰符，则返回的正则表达式会忽略原有的正则表达式修饰符。只使用新指定的修饰符：new RegExp(/abc/ig, 'i')"),l("h3",{class:"title"},"字符串的正则方法"),l("p",null,"字符串对象的match()、replace()、search()和split()方法可以使用正则表达式。"),l("h3",{class:"title"},"u修饰符"),l("p",null,'新增的u修饰符，含义为"Unicode模式"，用来处理大于\\uffff的Unicode字符。'),l("pre",null,[l("code",null,`/^\\uD83D/u.test('\\uD83D\\uDC2A')  // false
/^\\uD83D/.test('\\uD83D\\uDC2A')  // true`)]),l("p",null,'"83D2A"是一个4字节的UTF-16编码，代表一个字符。ES5将其识别成两个字符，因此第二个正则为true。增加了u修饰符，ES6将其识别为一个字符，所以第一个正则为false。'),l("p",null,[l("strong",null,"点字符是匹配除换行符以外的任意单个字符。"),n("对于码点大于0xffff的Unicode字符，点字符不能识别，必须加上u修饰符。")]),l("p",null,"ES6新增了使用大括号的Unicode字符表示法，这种表示法在正则中必须加上u修饰符才能识别，否则会被解读为量词。"),l("pre",null,[l("code",null,`/\\u{61}/.test('a') // false
/\\u{61}/u.test('a') // true
/^\\u{3}$/.test('uuu') // true`)]),l("p",null,"u修饰符也影响到预定义模式能否正确识别码点大于0xfffff的Unicode字符。"),l("h3",{class:"title"},"y修饰符"),l("p",null,[n("称为粘连（sticky）修饰符。与g修饰符类似，也是全局匹配。后一次匹配都成上一次匹配成功的下一个位置开始。不同之处在于，g修饰符只要剩余位置中存在匹配就行， "),l("strong",null,"而y修饰符会确保匹配从剩余的第一个位置开始。")]),l("pre",null,[l("code",null,`var s = 'aaa_aa_a'
var r1 = /a+/g
var r2 = /a+/y

r1.exec(s) // ['aaa']
r2.exec(s) // ['aaa']

r1.exec(s) // ['aa']
r2.exec(s) // null

/b/y.exec('aba') // null`)]),l("p",null,"第一次匹配的结果相同，第二次就不一样了。进一步说，y修饰符隐藏了头部的的匹配标志（^）"),l("p",null,"在split方法中使用y修饰符，原字符串必须以分隔符开头。意味着只要匹配成功，数组的第一个成员定是空字符串。"),l("pre",null,[l("code",null,`'x##'.split(/#/y) // 没有找到匹配 ['x##']
'##x'.split(/#/y) // 找到两个匹配 ['', '', 'x']
'#x#'.split(/#/y) // ['', 'x#']`)]),l("p",null,"replace例子："),l("pre",null,[l("code",null,`var reg = /a/gy
'aaxa'.replace(reg, '-') // '--xa'`)]),l("h3",{class:"title"},"sticky属性"),l("p",null,"ES6正则对象新增的这个属性表示是否设置了y修饰符。"),l("pre",null,[l("code",null,`var reg = /abc/y
reg.sticky // true`)]),l("h3",{class:"title"},"flags属性"),l("p",null,"此属性返回正则表达式的修饰符。"),l("pre",null,[l("code",null,`/abc/ig.source // source属性返回正则表达式的正文 abc
/abc/ig.flags // flags属性返回修饰符 gi`)]),l("h3",{class:"title"},"二进制和八进制数值表示法"),l("p",null,"ES6对二进制和八进制提供了新的表示方法：分别用前缀0b(0B)和0o(0O)表示："),l("pre",null,[l("code",null,`0b111110111 === 503
0o767 === 503`)]),l("p",null,"在严格模式中，八进制数据不允许使用0前缀表示，需使用0o前缀。使用Number方法可以将这种前缀表示的数值字符串转为十进制数值："),l("pre",null,[l("code",null,`Number('0b111110111') // 503
Number('0o767') // 503`)]),l("h3",{class:"title"},"Number.isFinite()、Number.isNaN()"),l("p",null,"分别用来检查Infinite和NaN这两个特殊值。"),l("p",null,[n("Number.isFinite()用来检查一个数值是否"),l("strong",null,"非无穷"),n("（infinity）。")]),l("p",null,"Number.isNaN()用来检查一个值是否为NaN。"),l("p",null,[n("这两个方法与传统的全局方法isFinite()和isNaN()的区别在于，"),l("strong",null,"传统的方法会先调用Number将非数值转为数值，再进行判断。而新方法只对数值有效。")]),l("pre",null,[l("code",null,`isFinite(25) // true
isFinite('25') // true
Number.isFinite(25) // true
Number.isFinite('25') // false
isNaN('NaN') // true
Number.isNaN('NaN') // false`)]),l("h3",{class:"title"},"Number.parseInt()、Number.parseFloat()"),l("p",null,"与传统的全局方法parseInt()和parseFloat()是等价的，只是移植到了Number对象上。"),l("p",null,"其目的是逐步减少全局方法，使语言逐步模块化。"),l("h3",{class:"title"},"Number.isInteger()"),l("p",null,"用来判断一个值是否为整数。在JS内部，整数和浮点数是相同的存储方法，3和3.0是相同的数值。"),l("pre",null,[l("code",null,`Number.isInteger(3) // true
Number.isInteger(3.0) // true
Number.isInteger('3') // false`)]),l("h3",{class:"title"},"Number.EPSILON"),l("p",null,"新增的极小常量："),l("pre",null,[l("code",null,`Number.EPSILON // 2.220446049250313e-16
Number.EPSILON.toFixed(20) // "0.00000000000000022204"`)]),l("p",null,"因为浮点数的计算是不精确的，可以利用这个值设置误差范围："),l("pre",null,[l("code",null,`function withinErrorMargin (v1, v2) { // 判断两个值是否相等（在一定误差范围之内）
        return Math.abs(v1 - v2) < Number.EPSILON
}
withinErrorMargin(0.1 + 0.2, 0.3) // true
0.1+0.2 == 0.3 // false`)]),l("h3",{class:"title"},"Number.isSafeInteger()"),l("p",null,[n("JS可以精确表示的整数范围是-2 "),l("sup",null,"53"),n("~2 "),l("sup",null,"53"),n("之间，超出这个范围无法精确表示。ES6新增了 "),l("strong",null,"Number.MAX_SAFE_INTEGER"),n("和 "),l("strong",null,"Number.MIN_SAFE_INTEGER"),n("两个常量，用来表示这个范围的上下限。")]),l("p",null,[n("Number.isSafeInteger()用来判断一个 "),l("strong",null,"整数"),n("是否位于这个范围之内。")]),l("pre",null,[l("code",null,`Math.pow(2,53) // 9007199254740992
Math.pow(2,53)+1 // 9007199254740992
Math.pow(-2,53) // -9007199254740992
Math.pow(-2,53)-1 // -9007199254740992

Number.MAX_SAFE_INTEGER // 9007199254740991
Number.MIN_SAFE_INTEGER // -9007199254740991`)]),l("pre",null,[l("code",null,`Number.isSafeInteger('a') // false
Number.isSafeInteger(null) // false
Number.isSafeInteger(NaN) // false
Number.isSafeInteger(1.2) // false
Number.isSafeInteger(1.0) // true`)]),l("h3",{class:"title"},"Math对象的扩展"),l("p",null,"Math对象新增了17个与数学相关的静态方法。"),l("p",null,[l("strong",null,"1、Math.trunc()")]),l("p",null,"用于获取一个数（如果不是数值，会先转换）的整数部分："),l("pre",null,[l("code",null,`Math.trunc(1.1) // 1
Math.trunc(-1.1) // -1
Math.trunc("-1.1") // -1`)]),l("p",null,"等价于此方法："),l("pre",null,[l("code",null,`function (x) {
    return x > 0 ? Math.floor(x) : Math.ceil(x)
}`)]),l("p",null,[l("strong",null,"2、Math.sign()")]),l("p",null,"用于判断一个数是正数、负数、0：参数为正数，返回1；参数为负数，返回-1；参数为0，返回0，参数为-0，返回-0；其他值，返回NaN。"),l("pre",null,[l("code",null,`Math.sign(11) // 1
Math.sign(-11) // -1
Math.sign(-0) // -0
Math.sign(0) // 0
Math.sign('A') // NaN`)]),l("p",null,[l("strong",null,"3、Math.cbrt()")]),l("p",null,"用于计算一个数（如果不是数值，会先转换）的立方根："),l("pre",null,[l("code",null,"Math.cbrt(2) // 1.2599210498948732")]),l("p",null,"等价于此方法："),l("pre",null,[l("code",null,`function (x) {
    var y = Math.pow(Math.abs(x), 1/3)
    return x > 0 ? y : -y
}`)]),l("p",null,[l("strong",null,"4、Math.clz32()")]),l("p",null,'返回一个数的32位无符号整数形式有多少个前导0，函数名称来自"count leading zero bits in 32-bit binary representations of a number"'),l("pre",null,[l("code",null,`Math.clz32(1) // 31
Math.clz32(0) // 32
Math.clz32(1 << 1) // 30`)]),l("p",null,"对于小数，该方法只考虑整数部分。其他非数值参数会先转换成数值。"),l("p",null,[l("strong",null,"5、Math.imul()")]),l("p",null,"返回两个数以32位带符号整数形式相乘的结果（也是一个32位带符号整数）。"),l("p",null,"如果只考虑32位，大多数情况下，Math.imul(a * b)与a * b的结果是相同的（（a * b）|0）。超出32位的部分溢出。"),l("pre",null,[l("code",null,`Math.imul(2, 4) // 8
Math.imul(-2, -2) // 4
Math.imul(0x7fffffff, 0x7fffffff) // 1`)]),l("p",null,"之所以增加此方法，是因为JS有精度限制，超出2的53次方无法精确表示出来。Math.imul()可以返回正确的低位数值。"),l("p",null,[l("strong",null,"6、Math.fround()")]),l("p",null,"返回一个数的单精度浮点数形式："),l("pre",null,[l("code",null,`Math.fround(1) // 1
Math.fround(1.337) // 1.3370000123977661
Math.fround(1.5) // 1.5`)]),l("p",null,"对于整数，此方法返回同样的整数；区别在于那些无法使用64位二进制位表示精确表示的数，Math.fround()会返回最接近这个小数的单精度浮点数。"),l("p",null,[l("strong",null,"7、Math.hypot()")]),l("p",null,"此方法返回所有参数（如果参数不是数值，会先转换）平方和的平方根："),l("pre",null,[l("code",null,`Math.hypot(3, 4) // 5
Math.hypot(3, 4, 5) // 7.0710678118654755
Math.hypot(-3) // 3`)]),l("p",null,[l("strong",null,"8、Math.expm1()")]),l("p",null,"等价于Math.exp(x) - 1，即e的x次方再减去1的结果。"),l("pre",null,[l("code",null,"Math.expm1(1) // 1.718281828459045")]),l("p",null,[l("strong",null,"9、Math.log1p()")]),l("p",null,"等价于Math.log(1+x)，即求x加1之和的自然对数。"),l("pre",null,[l("code",null,"Math.log1p(Math.E-1) // 1")]),l("p",null,[l("strong",null,"10、Math.log10()")]),l("p",null,"返回以10为底的x的对数。"),l("pre",null,[l("code",null,"Math.log10(1000) // 3")]),l("p",null,[l("strong",null,"11、Math.log2()")]),l("p",null,"返回以2为底的x的对数。"),l("pre",null,[l("code",null,"Math.log2(1024) // 10")]),l("p",null,[l("strong",null,"12、Math.sinh(x)"),n("：返回x的双曲正旋。")]),l("p",null,[l("strong",null,"13、Math.cosh(x)"),n("：返回x的双曲余旋。")]),l("p",null,[l("strong",null,"14、Math.tanh(x)"),n("：返回x的双曲正切。")]),l("p",null,[l("strong",null,"15、Math.asinh(x)"),n("：返回x的反双曲正旋。")]),l("p",null,[l("strong",null,"16、Math.acosh(x)"),n("：返回x的反双曲余旋。")]),l("p",null,[l("strong",null,"17、Math.atanh(x)"),n("：返回x的反双曲正切。")]),l("h3",{class:"title"},"指数运算符"),l("p",null,"ES7里面新增的一个运算符（**）"),l("pre",null,[l("code",null,"2 ** 4 // 16")]),l("p",null,"与等号结合，形成一个新的赋值运算符：（**=）"),l("pre",null,[l("code",null,`let b = 3
b **= 3 // 27`)]),l("h3",{class:"title"},"Array.from()"),l("p",null,"用于将两类的对象转为真正的数组：类似数组的对象（array-like object）和可遍历的对象（iterable，包括Set和Map）。"),l("pre",null,[l("code",null,`let arrLike = { '0' : 'a', '1' : 'b', '2' : 'c', length : 3 }
// es5的写法
var arr1 = [].slice.call(arrLike) // ["a", "b", "c"]

// es6的写法
var arr2 = Array.from(arrLike) // ["a", "b", "c"]`)]),l("p",null,"常见的类似数组的对象有DOM操作的NodeList对象、函数内部的arguments对象。Array.from都可以将它们转为真正的数组。"),l("pre",null,[l("code",null,`var ps = document.querySelector('p')
Array.from(ps).forEach(function (p) { console.dir(p) }) // 数组对象才有forEach方法

Array.from('abcde') // ["a", "b", "c", "d", "e"] 字符串转数组

let newSet = new Set(['a', 'b'])
Array.from(newSet) // ["a", "b"]`)]),l("p",null,"因为字符串和Set都有Iterator结构，因此可以被Array.from转为正真的数组。"),l("p",null,[l("strong",null,"扩展运算符（...）也可以将某些数据结构转为数组：")]),l("pre",null,[l("code",null,`function foo() { var args = [...arguments] } // arguments对象
[...document.querySelectorAll('div')] // NodeList对象`)]),l("p",null,"扩展运算符背后调用的是遍历器接口（Symbol.iterator）；如果一个对象没有这个接口，将无法转换。"),l("p",null,[l("strong",null,"类似数组的对象本质特征是具有length属性。"),n("任何有此属性的对象，都可以通过Array.from方法进行转换。")]),l("pre",null,[l("code",null,"Array.from({ length: 3 }) // [undefined, undefined, undefined]")]),l("p",null,"Array.from可以接受第二个参数，作用类似数组的map方法，用来对每个元素进行处理，将处理之后的值返回放入的数组。"),l("pre",null,[l("code",null,`Array.from([1, 2, 3], (x) => x * x ) // [1, 4, 9]
Array.from({ length: 2}, () => 'jack' ) // ['jack', 'jack']`)]),l("h3",{class:"title"},"Array.of()"),l("p",null,"用于将一组值转为数组，弥补数组构造函数Array()的不足。"),l("pre",null,[l("code",null,`Array.of(1, 2, 3) // [1, 2, 3]
Array.of() // []
Array.of(3) // [3]`)]),l("p",null,"等价于下面的方法："),l("pre",null,[l("code",null,"function ArrayOf() { return [].slice.call(arguments) }")]),l("h3",{class:"title"},"数组实例的copyWithin()"),l("p",null,"在当前数组内将指定位置的成员复制到其他的位置（覆盖原有的成员），然后返回当前数组。"),l("p",null,[l("strong",null,"Array.prototype.copyWithin(target, start = 0, end = this.length)"),n("：target是从该位置开始替换数据；start是从该位置读取数据，默认为0（可以用负值表示倒数）；end表示到该位置前停止读取数据，默认为数组的长度（可以用负值表示倒数）。")]),l("pre",null,[l("code",null,`[1,2,3,4,5].copyWithin(0,2) // [3, 4, 5, 4, 5]
[1,2,3,4,5].copyWithin(0,-2) // [4, 5, 3, 4, 5]`)]),l("h3",{class:"title"},"数组实例的find()和findIndex()"),l("p",null,"find()方法用于查找第一个符合条件的数组成员，它的参数是一个回调函数，所有数组成员依次执行此函数，直到找出第一个返回true的成员，然后返回该成员；如果没有符合条件的，返回undefined。"),l("pre",null,[l("code",null,"[1,2,3,4].find(function(value, index, arr) { return value > 3 }) // 4 找出大于3的成员")]),l("p",null,"回调函数可以接受3个参数，依次为当前值、当前的位置和原数组。"),l("p",null,"findIndex()和find()方法类似，不同的是它返回的是符合条件的成员的位置，如果所有成员都不符合，则返回-1。"),l("h3",{class:"title"},"数组实例的fill()"),l("p",null,"使用给定值填充数组，返回填充之后的数组。"),l("p",null,[l("strong",null,"Array.prototype.fill(value, start = 0, end = this.length)"),n("：value是填充的值，start是起始填充位置，end表示到该位置之前结束填充。")]),l("pre",null,[l("code",null,`[1,2,3].fill(8) // [8, 8, 8]
 new Array(3).fill(6) // [6, 6, 6]`)]),l("h3",{class:"title"},"数组实例的entries()、keys()、values()"),l("p",null,"遍历数组的方法。都返回一个遍历器对象，可以用for...of循环遍历，唯一的区别是：keys()是对键名的遍历；values()是对键值得遍历；entries()是对键值对的遍历。"),l("pre",null,[l("code",null,`for(let index of ['a', 'b'].keys()) { console.log(index) }
// 0
// 1

for(let val of ['a', 'b'].values()) { console.log(val) } // chrome不支持
// 'a'
// 'b'

for(let [index, val] of ['a', 'b'].entries()) { console.log(index, val) }
//0 'a'
//1 'b'
            `)]),l("h3",{class:"title"},"数组实例的includes()"),l("p",null,"返回一个布尔值，表示数组是否包含给定的值。是属于ES7的内容。"),l("pre",null,[l("code",null,"[1, 2, 3].includes(3) // true")]),l("p",null,"该方法可以传入第二个参数，表示搜索的起始位置。indexOf方法也可以检查数组是否包含某个值："),l("pre",null,[l("code",null,"if (arr.indexOf(el) !== -1) { }")]),l("p",null,"Map结构的has方法是用来查找键名的；Set结构的has方法是用来查找值得。"),l("h3",{class:"title"},"数组的空位"),l("p",null,"数组的空位表示在该位置上没有任何值（不是undefined，也不是null）："),l("pre",null,[l("code",null,"Array(3) // [, , ,]")]),l("p",null,"数组实例的方法对空位的处理不统一，需要避免出现空位。"),l("h3",{class:"title"},"数组的推导"),l("p",null,"数组推导（array comprehension）属于ES7的内容，允许直接通过现有的数组生成新数组。"),l("pre",null,[l("code",null,`var a1 = [1, 2, 3, 4]
var a2 = [for(i of a1) i*2] // [2, 4, 6, 8]`)]),l("h3",{class:"title"},"函数参数的默认值"),l("p",null,"ES6允许为函数参数设置默认值，直接写在参数定义的后面："),l("pre",null,[l("code",null,`function log (x, y = 'abc') { console.log(x, y) }

function Point (x = 0, y = 0) {
    this.x = x
    this.y = y
}`)]),l("p",null,"参数默认值可以与解构赋值的默认值结合起来使用："),l("pre",null,[l("code",null,`function fetch (url, { method = 'GET' } = { }) {
    console.log(method)
}
fetch('http://example.com') // GET`)]),l("p",null,"上面调用fetch函数中，没有传入第二个参数。因此函数参数的默认值{}生效，之后是解构赋值的默认值生效。"),l("p",null,[n("通常情况下，定义了默认值的参数应该是函数的"),l("strong",null,"尾参数"),n("。如果传入undefined，将触发该参数等于默认值。")]),l("p",null,"指定了默认值以后，函数的length属性将返回没有指定默认值的参数个数。也即是指定了函数参数默认值，length属性将失真。"),l("pre",null,[l("code",null,`(function (a) {}).length // 1
(function (a = 5) {}).length // 0`)]),l("p",null,"length属性是函数预期传入的参数个数。rest参数也不会计入length属性。"),l("p",null,[n("如果参数默认值是一个变量，则该变量应当"),l("strong",null,"先是当前函数的作用域，然后才是全局作用域。")]),l("pre",null,[l("code",null,`var x = 1
function f(x, y = x) { console.log(y) }
f(2) // 2`)]),l("h3",{class:"title"},"rest参数"),l("p",null,"rest参数用于获取函数的多余参数，这样可以不用arguments对象。rest参数搭配的变量是一个数组，该变量将多余的参数放入其中。"),l("pre",null,[l("code",null,`function add (...values) {
    let sum = 0
    for (var v of values) {
        sum += v
    }
    return sum
}
add(2, 3, 6) // 11`)]),l("p",null,"上面的add求和函数利用rest参数可以传入任意数目的参数。"),l("p",null,[l("strong",null,"rest参数的变量代表一个数组，数组特有的方法都可以用于这个变量。"),n("rest参数之后不能再有其他的参数（即只能是最后一个参数），否则报错。")]),l("h3",{class:"title"},"扩展运算符"),l("p",null,"扩展运算符是三个点（...），好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。"),l("pre",null,[l("code",null,"console.log(...[1, 2, 3]) // 1 2 3")]),l("p",null,"该运算符主要用于函数调用："),l("pre",null,[l("code",null,`function push (array, ...items) {
    array.push(...items)
}
function add (x, y) { return x + y }
var nums = [4, 38]
add(...nums) // 42`)]),l("p",null,"由于扩展运算符可以展开数组，因此不再需要apply方法将数组转为函数参数序列了。"),l("pre",null,[l("code",null,`// ES5的写法
function f(x, y, z) {}
var args = [1, 2, 3]
f.apply(null, args)

// ES6的写法
f(...args)`)]),l("p",null,"扩展运算符提供了数组合并的新写法："),l("pre",null,[l("code",null,`// ES5的写法
[1, 2].concat(more)
// ES6的写法
[1, 2, ...more]`)]),l("p",null,"与解构赋值结合起来可以生成数组："),l("pre",null,[l("code",null,`const [first, ...rest] = [1, 2, 3, 4, 5, 6]
first // 1
rest // [2, 3, 4, 5, 6]`)]),l("p",null,[l("strong",null,"如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则报错。")]),l("p",null,"扩展运算符还可以将字符串转为真正的数组（并且能够正确识别32位的unicode字符）："),l("pre",null,[l("code",null,'[..."hello"] // ["h", "e", "l", "l", "o"]')]),l("p",null,"返回正确的字符串长度可以这样求得："),l("pre",null,[l("code",null,"function len (str) { return [...str].length }")]),l("p",null,"凡是涉及操作32位的Unicode字符都有这个问题，因此，最好都用扩展运算符改写："),l("pre",null,[l("code",null,`let str = 'x\\uD83D\\uDE80y'
str.split('').reverse().join('') // error
[...str].reverse().join('') // good`)]),l("p",null,"任何类似数组的对象都可以使用扩展运算符转为真正的数组："),l("pre",null,[l("code",null,`var nodeList = document.querySelectorAll("div")
var array = [...nodeList]`)]),l("p",null,[l("strong",null,"扩展运算符内部调用的是数据结构的Iterator接口，因此只要具有Iterator接口的对象，都可以使用扩展运算符。"),n("比如Map、Set、Generator函数。")]),l("pre",null,[l("code",null,`let map = new Map([ [1, 'one'], [2, 'two'], [3, 'three'] ])
let arr = [...map.keys()] // [1, 2, 3]

var go = function* () {
    yield 1;
    yield 2;
    yield 3
}
[...go()] // [1, 2, 3]`)]),l("h3",{class:"title"},"name属性"),l("p",null,"函数的name属性会返回该函数的名称。"),l("p",null,"如果将一个具名函数赋值给一个变量，name属性返回这个具名函数原本的名字。"),l("pre",null,[l("code",null,`const bar = function abc() { }
bar.name // "abc"`)]),l("p",null,"Function构造函数返回的函数实例，name属性的值为：anonymous"),l("pre",null,[l("code",null,'(new Function).name // "anonymous"')]),l("p",null,"bind返回的函数，name属性值会加上bound的前缀："),l("pre",null,[l("code",null,`function foo () {}
foo.bind({}).name // "bound foo"`)]),l("h3",{class:"title"},"箭头函数"),l("p",null,"使用箭头定义函数："),l("pre",null,[l("code",null,`var f = v => v
var f = () => v
var sum = (v1, v2) => { v1 = v1 * 2; return v1 + v2 }`)]),l("p",null,"需要注意的地方："),l("p",null,[l("strong",null,"1、函数体内的this对象就是定义时所在的对象，而不是使用时所在的对象；")]),l("p",null,[l("strong",null,"2、不可以当做构造函数；")]),l("p",null,[l("strong",null,"3、不可以使用arguments对象，该对象在函数体内不存在；可以使用rest参数代替；")]),l("p",null,[l("strong",null,"4、不可以使用yield命令，因此箭头函数不能用作Generator函数；")]),l("h3",{class:"title"},"函数的绑定"),l("p",null,"ES7提出函数绑定运算符（::），用来取代call、apply、bind的调用。该运算符自动将左边的对象作为上下文环境（this对象）绑定到右边的函数上。"),l("pre",null,[l("code",null,`foo::bar // 等同于 bar.bind(foo)
foo::bar(...arguments) // 等同于 bar.apply(foo, arguments)`)]),l("p",null,"如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上。"),l("pre",null,[l("code",null,`var method = obj::obj.foo // 等同于 var method = ::obj.foo
let log = ::console.log // 等同于 var log = console.log.bind(console)`)]),l("h3",{class:"title"},"属性的简洁表示法"),l("p",null,"ES6允许直接写入变量和函数作为对象的属性和方法："),l("pre",null,[l("code",null,`var foo = 'bar'
var baz = { foo } // { foo : 'bar' }
var o = {
    method() { return 'abc' }
}`)]),l("p",null,[l("strong",null,"在对象中只写属性名，不写属性值，此时属性值等于属性名代表的变量。")]),l("p",null,"ES6允许字面量定义对象时使用表达式作为对象的属性名，即把表达式放在方括号内。"),l("pre",null,[l("code",null,`let propKey = 'foo'
let obj = { [propKey]: true, ['a' + 'bc']: 123 }`)]),l("h3",{class:"title"},"方法的name属性"),l("p",null,[n("函数的name属性返回函数的名称。对象方法也是函数，因此也有name属性。返回对应的方法名，如果是取值方法，则会在方法名之前加get "),l("strong",null,"(有疑问？)"),n("；如果是存值方法，则会在方法名前加set。")]),l("pre",null,[l("code",null,`var person = {
    sayName: function () { return 'a' },
    get firstName() { return 'b' }
}
console.log(person.sayName.name) // 'sayName'
console.log(person.sayName.firstName) // 预期是'get firstName' chrom输出是undefined`)]),l("p",null,"如果对象的方法是一个Symbol，name属性返回的是这个Symbol值的描述。"),l("pre",null,[l("code",null,`const k = Symbol("abc")
let obj = { [key]() { } }
obj[key].name // "[abc]"`)]),l("h3",{class:"title"},"Object.is()"),l("p",null,"用于比较两个值是否严格相等。与严格比较符（===）的行为基本一致。不同之处是：+0不等于-0；NaN等于自身。"),l("pre",null,[l("code",null,`+0 === -0 // true
NaN === NaN // false
Object.is(+0,-0) // false
Object.is(NaN, NaN) // true`)]),l("h3",{class:"title"},"Object.assign()"),l("p",null,"将来源对象（source）的所有可枚举属性复制到目标对象（target）。有至少有两个参数，第一个参数是target对象，后面的参数是source对象。所有参数必须是对象。"),l("pre",null,[l("code",null,`var target  = { a: 1 }
var source1 = { b: 2, d: 5 }
var source2 = { c: 3, b: 4 }
Object.assign(target, source1, source2) // { a: 1, b: 4, c: 3, d: 5 }`)]),l("p",null,"如果目标对象与源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性。"),l("p",null,"Object.assign只复制自身的属性，不可枚举的属性（enumerable为false）和继承的属性不会复制。"),l("p",null,"属性值为Symbol的属性，也会被复制进去。"),l("p",null,[l("strong",null,"对于嵌套的对象，Object.assign的处理方法是替换，而不是添加。")]),l("pre",null,[l("code",null,`var target = { a: { b: 'c', d: 'e' } }
var source = { a: { b: 'hello' } }
Object.assign(target, source) // { a: { b: 'hello' } }`)]),l("p",null,[l("strong",null,"Object.assign可以处理数组，但是会将其视为对象：")]),l("pre",null,[l("code",null,"Object.assign([1, 2, 3], [4, 5]) // [4, 5, 3]")]),l("p",null,"Object.assign只能克隆原始对象的自身的值，不能克隆它继承的值。如果想要保持继承链，可以使用下面的方式："),l("pre",null,[l("code",null,`function clone (origin) {
    let originProto = Object.getPrototypeOf(origin)
    return Object.assign(Object.create(originProto), origin)
}`)]),l("p",null,"将多个对象合并到某个对象："),l("pre",null,[l("code",null,"const merge = (target, ...source) => Object.assign(target, ...source)")]),l("p",null,"如果期望合并之后返回新的对象，可以将所有对象合并到一个空对象："),l("pre",null,[l("code",null,"const merge = (...source) => Object.assign({}, ...source)")]),l("h3",{class:"title"},"属性的可枚举性"),l("p",null,"对象的每个属性都有一个描述对象（Descriptor），用于控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。"),l("pre",null,[l("code",null,`let obj = { foo: 123 }
Object.getOwnPropertyDescriptor(obj, "foo") // { configurable: true, enumerable: true, value: 123, writable: true }`)]),l("p",null,"描述对象中的enumerable称之为“可枚举性”，如果该属性为false，下列操作会忽略当前属性："),l("p",null,"1、for...in循环：只遍历对象自身的和继承的可枚举属性；"),l("p",null,"2、Object.keys()：返回对象自身的所有可枚举属性的键名；"),l("p",null,"3、JSON.stringify()：只串行化对象自身的可枚举属性；"),l("p",null,"4、Object.assign()：只复制对象自身的可枚举属性；"),l("p",null,"5、Reflect.enumerate()：返回所有for...in循环会遍历的属性；"),l("p",null,[l("strong",null,"操作中引入继承的属性会让问题复杂化，大部分时候只需要知道对象的自身属性。尽量不要使用for... in循环，而用Object.keys()。")]),l("h3",{class:"title"},"属性的遍历"),l("p",null,"ES6一共有6种方法遍历对象的属性："),l("p",null,[l("strong",null,"1、for...in")]),l("p",null,"for...in循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）。"),l("p",null,[l("strong",null,"2、Object.keys(obj)")]),l("p",null,"返回一个数组，包含对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。"),l("p",null,[l("strong",null,"3、Object.getOwnPropertyNames(obj)")]),l("p",null,"返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。"),l("p",null,[l("strong",null,"4、Object.getOwnPropertySymbols(obj)")]),l("p",null,"返回一个数组，包含对象自身的所有Symbol属性。"),l("p",null,[l("strong",null,"5、Reflect.ownKeys(obj)")]),l("p",null,"返回一个数组，包含对象自身的所有属性（包括不可枚举、Symbol属性）。"),l("p",null,[l("strong",null,"6、Reflect.enumerate(obj)")]),l("p",null,"返回一个Iterator对象，遍历对象自身的和继承的所有可枚举属性（不含Symbol属性，和for...in循环一样）。"),l("p",null,"属性遍历遵循以下的规则："),l("p",null,"首先遍历所有属性名为数值的属性，按照数字排序；"),l("p",null,"其次遍历所有属性名为字符串的属性，按照生成时间排序；"),l("p",null,"最后遍历所有属性名为Symbol值的属性，按照生成时间排序。"),l("h3",{class:"title"},"_proto_"),l("p",null,"_proto_属性用来读取或者设置当前对象的prototype对象。"),l("p",null,"最好不要使用这个属性，而是使用Object.setPrototypeOf()、Object.getPrototypeOf()代替直接读写操作。"),l("h3",{class:"title"},"对象的扩展运算符"),l("p",null,"ES7中的一项提案，将rest参数/扩展运算符（...）引入对象。Babel转码器已支持。"),l("p",null,[l("strong",null,"Rest参数")]),l("p",null,"rest参数用于从一个对象取值，相当于将所有可遍历但尚未被读取的属性，分配到指定的对象上，所有键及其值都会复制到新的对象上。"),l("pre",null,[l("code",null,`let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
x // 1
y // 2
z // { a: 3, b: 4 }`)]),l("p",null,"rest复制是浅复制，如果一个键的值是复合类型（数组、对象、函数），rest参数复制的是这个值的引用。"),l("p",null,"rest也不会复制继承自原型对象的属性。"),l("p",null,[l("strong",null,"扩展运算符")]),l("p",null,"扩展运算符用于取出参数对象的所有可遍历属性，复制到当前对象中。"),l("pre",null,[l("code",null,`let z = { a: 3, b: 4 }
let n = { ...z } // { a: 3, b: 4 }`)]),l("p",null,"等同于使用Object.assign方法。"),l("p",null,"可以合并两个对象："),l("pre",null,[l("code",null,"let ab = { ...a, ...b }")])],-1)])]),_:1})}const d=r(p,[["render",c]]);export{d as default};
