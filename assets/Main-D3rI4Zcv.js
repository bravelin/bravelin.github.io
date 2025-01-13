import{_ as t,m as a,p as u,h as o,o as y,e as n,q as l}from"./index-CiokbSjR.js";const p={};function f(s,r){const e=o("MyArticle");return y(),a(e,{title:"ES6标准入门笔记之三：Symbol、Proxy、Reflect和二进制数组",date:"2017年05月14日"},{default:u(()=>r[0]||(r[0]=[n("div",{class:"_article-content"},[n("h3",{class:"title"},"Symbol概述"),n("p",null,"ES5中对象属性名都是字符串，容易造成属性名的冲突。引入Symbol的目的就是解决这个问题。它是JavaScript语言的第七种类型（Undefined、NULL、Boolean、String、Number、Object）。"),n("p",null,"Symbol值通过Symbol函数生成，可以接受一个字符串作为参数，表示对Symbol实例的描述，使之在控制台显示或者转为字符串时好区分。"),n("pre",null,[n("code",null,`var s1 = Symbol('foo') // Symbol(foo)
var s2 = Symbol('bar') // Symbol(bar)`)]),n("p",null,[n("strong",null,"Symbol值不能与其他类型的值进行运算，否则报错。")]),n("p",null,"Symbol值可以显示转为字符串或者布尔值，但是不能转为数值。"),n("pre",null,[n("code",null,`var sym = Symbol()
Boolean(sym) // true
sym.toString() // "Symbol()"`)]),n("h3",{class:"title"},"作为属性名的Symbol"),n("p",null,"由于每个Symbol值都是不相等的，因此Symbol值可以作为标识符用于对象的属性名，保证不会出现同名的属性。"),n("pre",null,[n("code",null,`var sym = Symbol()
var a = {}
a[sym] = "abc"

var b = { [sym]: "123" }`)]),n("p",null,[n("strong",null,"Symbol值作为对象属性名时不能使用点运算符。")]),n("p",null,"Symbol类型可用于定义一组常量，可保证这组常量的值都是不相等的。"),n("pre",null,[n("code",null,`log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
}`)]),n("h3",{class:"title"},"属性名的遍历"),n("p",null,"Symbol作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()返回。有一个Object.getOwnPropertySymbols方法可以指定对象的所有Symbol属性。"),n("pre",null,[n("code",null,`var obj = { a: 111 }
var foo = Symbol('foo')
var bar = Symbol('bar')
obj[foo] = '222'
obj[bar] = '333'
Object.getOwnPropertyNames(obj) // ["a"]
Object.getOwnPropertySymbols(obj) // [Symbol(foo), Symbol(bar)]
Reflect.ownKeys(obj) // ["a", Symbol(foo), Symbol(bar)]`)]),n("p",null,[l("另外一个新的API： "),n("strong",null,"Reflect.ownKeys"),l("方法可以返回所有类型的键名（包括了Symbol键名）。")]),n("h3",{class:"title"},"Symbol.for()、Symbol.keyFor()"),n("p",null,"Symbol.for()接受一个字符串作为参数，搜索是否有以此参数作为名称的Symbol值。如果有，则返回这个Symbol值，否则新建并返回一个以该字符串作为名称的Symbol值。"),n("pre",null,[n("code",null,`let s1 = Symbol.for('foo')
let s2 = Symbol.for('foo')
s1 === s2 // true`)]),n("p",null,[n("strong",null,"Symbol.for()与Symbol()都会生成新的Symbol，区别在于前者会被登记在全局环境中供搜索，而后者不会。"),l("Symbol.for()不会每次都返回新的Symbol值，而是会先检查给定的key是否存在，如果不存在才会返回新的值。")]),n("p",null,"Symbol.keyFor()方法返回一个已登记的Symbol类型值的key。"),n("pre",null,[n("code",null,`var s1 = Symbol.for('foo')
Symbol.keyFor(s1) // 'foo'
var s2 = Symbol()
Symbol.keyFor(s2) // undefined`)]),n("p",null,[n("strong",null,"Symbol.for为Symbol值登记的名字是全局环境的，在不同的iframe后者service worker中可以取到相同的值。")]),n("h3",{class:"title"},"Proxy概述"),n("p",null,[l("用于修改某些操作的默认行为，在目标对象之前架设一“拦截”层，外界对该对象的访问都必须先通过这层拦截。"),n("strong",null,"提供一种机制，可以对外界的访问进行过滤和拦截。")]),n("p",null,"ES6提供原生的Proxy构造函数，用于生成Proxy实例。"),n("pre",null,[n("code",null,"var proxy = new Proxy(target, handler) // target拦截的目标对象")]),n("p",null,"拦截读取属性："),n("pre",null,[n("code",null,`var proxy = new Proxy({}, {
        get: function (target, property) {
            return 35
        }
    })
    proxy.time // 35
    proxy.abc // 35`)]),n("p",null,[n("strong",null,"要使Proxy起作用，必须针对Proxy实例进行操作，而不是针对目标对象。")]),n("p",null,"如果handler没有设置任何拦截，等同于直接通向原对象："),n("pre",null,[n("code",null,`var target = {}
    var handler = {}
    var proxy = new Proxy(target, handler)
    proxy.a = 'b'
    target.a // 'b'`)]),n("p",null,"目标对象可以是函数。"),n("h3",{class:"title"},"Reflect概述"),n("p",null,"也是ES6为了操作对象而提供的新的API，设计目标如下："),n("p",null,"1、将Object对象一些属于语言层面的方法放到Reflect对象上；"),n("p",null,"2、修改某些Object方法的返回结果，让其变得更合理；"),n("p",null,"3、让Object操作都变成函数行为，如 name in obj和delete obj[name]变成Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)；"),n("p",null,"4、Reflect对象的方法和Proxy对象的方法一一对应。可以使Proxy对象方便地调用Reflect方法完成默认行为。"),n("p",null,"二进制数组是JS操作二进制数据的接口。其目的是方便浏览器（WebGL）与显卡之间进行大量的、实时的交换数据。类似C语言的数组，可以直接操作内存。包括以下3类对象："),n("p",null,[n("strong",null,"ArrayBuffer对象"),l("：代表内存中的一段二进制数据，可以通过“视图”进行操作。")]),n("p",null,[n("strong",null,"TypedArray对象"),l("：共包括9种类型的视图，包括Int8、Uint8、Uint8C、Int16、Uint16、Int32、Uint32、Float32、Float64，主要用于读写简单类型的二进制数据。")]),n("p",null,[n("strong",null,"DataView对象"),l("：自定义复合格式的视图。")]),n("h3",{class:"title"},"ArrayBuffer对象"),n("p",null,[l("代表存储二进制数据的一段内存，"),n("strong",null,"不能直接读写，只能通过视图进行读写。"),l("同时也是一个构造函数，用于分配一段可以存放数据的连续区域：")]),n("pre",null,[n("code",null,"var buf = new ArrayBuffer(bytes) // bytes代表字节数，每个字节默认值为0")]),n("p",null,"使用DataView读取ArrayBuffer："),n("pre",null,[n("code",null,`var buf = new ArrayBuffer(32)
var dataView = new DataView(buf)
dataView.getUint8(0) // 无符号8位整数格式读取：0`)]),n("p",null,"TypedArray视图是一组构造函数，代表不同的数据格式："),n("pre",null,[n("code",null,`var buffer = new ArrayBuffer(12)
var x1 = new Int32Array(buffer) // 32位带符号整数
x1[0] = 1
var x2 = new Uint8Array(buffer) // 8位无符号整数
x2[0] = 2
x1[0] // 2`)]),n("p",null,"ArrayBuffer实例的byteLength属性，返回所分配的内存区域字节长度。如果要分配的内存区域很大，有可能分配失败，因此有必要检查是否分配成功："),n("pre",null,[n("code",null,`if (buf.byteLength == n) {
    // 分配成功
} else {
    // 分配失败
}`)]),n("p",null,"ArrayBuffer实例的slice()方法，可以将内存区域的一部分复制生成一个新的ArrayBuffer对象："),n("pre",null,[n("code",null,`var buf = new ArrayBuffer(8)
var newBuf = buf.slice(0, 3) // 复制前3个字节`)]),n("p",null,"slice方法的第一个参数表示复制开始的字节序号（含该字节），第二个参数表示复制结束的字节序号（不含，默认到结尾）。"),n("p",null,[n("strong",null,"ArrayBuffer.isView()"),l("，静态方法，判断参数是否为ArrayBuffer的视图实例：")]),n("pre",null,[n("code",null,`var buf = new ArrayBuffer(32)
var v = new Int32Array(buf)
ArrayBuffer.isView(v) // true`)]),n("h3",{class:"title"},"TypedArray视图"),n("p",null,"TypedArray视图一共包括9种类型，每一种视图都是一种构造函数："),n("p",null,[n("strong",null,"1、Int8Array"),l("：8位有符号整数；")]),n("p",null,[n("strong",null,"2、Uint8Array"),l("：8位无符号整数；")]),n("p",null,[n("strong",null,"3、Uint8ClampedArray"),l("：8位无符号整数，溢出处理不同；")]),n("p",null,[n("strong",null,"4、Int16Array"),l("：16位有符号整数；")]),n("p",null,[n("strong",null,"5、Uint16Array"),l("：16位无符号整数；")]),n("p",null,[n("strong",null,"6、Int32Array"),l("：32位有符号整数；")]),n("p",null,[n("strong",null,"7、Uint32Array"),l("：32位无符号整数；")]),n("p",null,[n("strong",null,"8、Float32Array"),l("：32位浮点数；")]),n("p",null,[n("strong",null,"9、Float64Array"),l("：64位浮点数；")]),n("p",null,"普通数组与TypedArray数组的区别："),n("p",null,[n("strong",null,"1、TypedArray数组的所有成员都是同一种类型；")]),n("p",null,[n("strong",null,"2、TypedArray数组的成员是连续的，不会有空位；")]),n("p",null,[n("strong",null,"3、TypedArray数组成员的默认值是0.")]),n("p",null,[n("strong",null,"4、TypedArray数组只是一层视图，本身不储存数据。")]),n("p",null,[l("构造函数原型："),n("strong",null,"TypedArray(buffer, byteOffset=0, length?)"),l("：第一个参数必须，指向底层ArrayBuffer对象；第二个可选，视图开始的字节序号，默认为0；第三个可选，视图包含的数据个数，默认到内存区域结尾。")]),n("p",null,"注意，byteOffset必须与所要建立的数据类型一致，否则会报错："),n("pre",null,[n("code",null,`var buf = new ArrayBuffer(32)
var v = new Int16Array(buf, 1) // ERROR`)]),n("p",null,"如果需要从任意字节开始解读ArrayBuffer对象，必须使用DataView视图。"),n("p",null,[n("strong",null,"TypedArray(length)"),l("：视图还可以不通过ArrayBuffer，直接分配内存生成。")]),n("pre",null,[n("code",null,"var f64a = new Float64Array(8) // 64字节")]),n("p",null,[n("strong",null,"TypedArray(typedArray)"),l("：接收另外一个TypedArray实例作为参数构造生成，此时新数组会开辟新的内存区域储存数据，不会在原数组的内存区域之上建立视图。")]),n("pre",null,[n("code",null,`var x = new Int8Array([1, 1])
var y = new Int8Array(x)`)]),n("p",null,"如果想基于相同的内存区域构造不同的视图，可以这样写："),n("pre",null,[n("code",null,`var x = new Int8Array([1, 1])
var y = new Int8Array(x.buffer)`)]),n("p",null,[n("strong",null,"TypedArray(arrayLikeObj)"),l("：构造函数的参数也可以是一个普通数组，直接生成TypedArray实例。此时会重新开辟内存区域。")]),n("p",null,[n("strong",null,"字节序"),l("：指的是数值在内存中的表示方式：")]),n("pre",null,[n("code",null,`var buf = new ArrayBuffer(16)
var int32View = new Int32Array(buf)
for (var i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2
}
console.log(int32View) // 0 2 4 6
var int16View = new Int16Array(buf)
console.log(int16View) // 0 0 2 0 4 0 6 0`)]),n("p",null,[l("x86体系的计算机都采用"),n("strong",null,"小端字节序（litter endian），相对重要的字节（高字节）排在后面，不重要的字节（低字节）排在前面。大端字节序列则相反。TypedArray内部也采用小端字节序列读写。DataView对象可以设定字节序列。")]),n("p",null,"下面的方法可以判断当前视图是否是小端字节序，还是大端字节序："),n("pre",null,[n("code",null,`const BIG_ENDIAN = Symbol('BIG_ENDINA')
const LITTER_ENDINA = Symbol('LITTER_ENDINA')
function getPlatformEndianness() {
    let arr32 = Uint32Array.of(0x12345678)
    let arr8 = new Uint8Array(arr32.buffer)
    switch ((arr8[0]*0x1000000) + (arr8[1]*0x10000) + (arr8[2]*0x100)+(arr8[3])) {
        case 0x12345678: return BIG_ENDIAN;
        case 0x78563412: return LITTER_ENDINA;
        default: throw new Error('Unknow endianness')
    }
}`)]),n("p",null,"每一种TypedArray视图，都有一个BYTES_PER_ELEMENT属性，表示这种数据类型占据的字节数："),n("pre",null,[n("code",null,`Int8Array.BYTES_PER_ELEMENT // 1
Float64Array.BYTES_PER_ELEMENT // 8`)]),n("p",null,"ArrayBuffer与字符串的相互转换：（前提是字符串的编码方法是确定的，比如UTF-16）"),n("pre",null,[n("code",null,`// ArrayBuffer转为字符串
function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf))
}
// 字符串转为ArrayBuffer
function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2)
    var bufView = new Uint16Array(buf)
    for(var i = 0; i < str.length; i++) {
        bufView[i] = str.charCodeAt(i)
    }
    return buf
}`)]),n("p",null,[n("strong",null,"正向溢出(overflow)"),l("：输入值大于当前数据类型的最大值时，最后得到的值是当前数据类型的最小值加上余值，再减去1； "),n("strong",null,"负向溢出(underflow)"),l("：输入值小于当前数据类型的最小值时，当前数据类型的最大值减去余值，再加上1。")]),n("pre",null,[n("code",null,`var uint8 = new Uint8Array(1)
uint8[0] = 256 // 0
uint8[0] = -1 // 255
var int8 = new Int8Array(1)
int8[0] = 128 // -128
int8[0] = -129 // 127`)]),n("p",null,[n("strong",null,"Uint8ClampedArray"),l("视图的溢出与上面的规则不同，正向溢出都等于255，负向溢出都等于0：")]),n("pre",null,[n("code",null,`var uint8c = new Uint8ClampedArray(1)
uint8c[0] = 256 // 255
uint8c[0] = -1 // 0`)]),n("p",null,[n("strong",null,"TypedArray.prototype.buffer"),l("：返回整段内存区域对应的ArrayBuffer对象。")]),n("p",null,[n("strong",null,"TypedArray.prototype.byteLength"),l("：返回数组占据的内存长度。")]),n("p",null,[n("strong",null,"TypedArray.prototype.length"),l("：返回数组的成员数目。")]),n("p",null,[n("strong",null,"TypedArray.prototype.byteOffset"),l("：返回数组从底层ArrayBuffer对象的哪个字节开始。")]),n("p",null,[n("strong",null,"TypedArray.prototype.set()"),l("：用于复制数组（普通数组或者TypedArray数组）,将一段内存完全复制到另外一段内存,可以指定从哪个位置开始复制。")]),n("pre",null,[n("code",null,`var a = new Uint8Array(8)
var b = new Uint8Array(10)
b.set(a, 2) // 从a[2]开始`)]),n("p",null,[n("strong",null,"TypedArray.prototype.subarray()"),l("：对于TypedArray的一部分再建立一个新的视图，第1个参数是起始的字节序号，第2个参数是结束成员序号（不包含）：")]),n("pre",null,[n("code",null,`var a = new Uint8Array(8)
var b = a.subarray(2,3)
b.byteLength // 1`)]),n("p",null,[n("strong",null,"TypedArray.prototype.slice()"),l("：返回一个指定位置的新的TypedArray实例，支持负值：")]),n("pre",null,[n("code",null,`let uint8 = Uint8Array.of(1,2,3)
uint8.slice(-1) // [3]`)]),n("p",null,[n("strong",null,"TypedArray.of()"),l("：静态方法，用于将参数转为一个TypedArray实例。")]),n("pre",null,[n("code",null,"Float32Array.of(0.1,0.2,3)")]),n("p",null,"TypedArray的构造方法："),n("pre",null,[n("code",null,`let a1 = new Uint8Array([1,2,3])
let a2 = new Uint8Array.of(1,2,3)
let a3 = new Uint8Array(3)
a3[0] = 1
a3[1] = 2
a3[2] = 3`)]),n("p",null,[n("strong",null,"TypedArray.from()"),l("：接受一个可遍历的结构（比如数组）作为参数，返回一个基于此结构的TypedArray实例。")]),n("pre",null,[n("code",null,"Uint16Array.from([0,1,2])")]),n("p",null,"还可以将一种TypedArray转为另外一种："),n("pre",null,[n("code",null,"var uint16 = Uint16Array.from(Uint8Array.of(1,2,3))")]),n("p",null,"还可以接受一个函数作为第二个参数，对每个元素进行遍历："),n("pre",null,[n("code",null,"Int16Array.from(Int8Array.of(1,2,3), x => 2*x) // [2,4,6]")]),n("h3",{class:"title"},"复合视图"),n("p",null,"视图的构造函数可以指定起始位置和长度，所以在同一段内存中可以依次存放不同类型的数据："),n("pre",null,[n("code",null,`var buf = new ArrayBuffer(24)
var idView = new Uint32Array(buf,0,1) // 字节0~3：1个32位无符号整数
var userNameView = new Uint8Array(buf,4,16) // 字节4~19：16个8位无符号整数
var amountView = new Float32Array(buf, 20, 1) // 字节20~23:1个32位浮点数`)]),n("h3",{class:"title"},"DataView视图"),n("p",null,"DataView支持设定字节序，接受一个ArrayBuffer对象作为参数生成视图。"),n("pre",null,[n("code",null,`var buf = new ArrayBuffer(32)
var dv = new DateView(buf, 2, 4) // 支持设定起始位置和长度`)]),n("p",null,[l("DataView实例的 "),n("strong",null,"buffer、byteLength、byteOffset"),l("属性与TypedArray含义一致。")]),n("p",null,[l("DataView实例提供以下8个方法读取内存： "),n("strong",null,"getInt8、getUint8、getInt16、getUint16、getInt32、getUint32、getFloat32、getFloat64"),l("，方法的参数是一个字节序号，表示读取的起始位置：")]),n("pre",null,[n("code",null,`var buf = new ArrayBuffer(32)
var dv = new DataView(buf)
var v1 = dv.getUint8(0) // 从第0个字节读取一个uint8
var v2 = dv.getUint16(1) // 从第1个字节读取一个uint16`)]),n("p",null,"如果一次读取两个或者两个以上的字节，则必须明确数据的储存方式，是小端序列还是大端序列（默认），如果是小端序列，第2个参数需要设定为true："),n("pre",null,[n("code",null,"var v3 = dv.getUint8(4, true)")]),n("p",null,[l("DataView提供以下8个方法写入内存： "),n("strong",null,"setUint8、setInt8、setUint16、setInt16、setInt32、setUint32、setFloat32、setFloat64"),l("，接受3个参数，第1个参数表示写入的位置，第2个参数是写入的数据，第3个参数表面数据的储存方式（大小端）：")]),n("pre",null,[n("code",null,"dv.setUint32(0, 32, true)")])],-1)])),_:1})}const i=t(p,[["render",f]]);export{i as default};
