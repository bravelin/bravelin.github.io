<template>
    <div class="page article">
        <h2 class="title">《ES6标准入门》笔记之十一：二进制数组</h2>
        <div class="content">
            <p>二进制数组是JS操作二进制数据的接口。其目的是方便浏览器（WebGL）与显卡之间进行大量的、实时的交换数据。类似C语言的数组，可以直接操作内存。包括以下3类对象：</p>
            <p><strong>ArrayBuffer对象</strong>：代表内存中的一段二进制数据，可以通过“视图”进行操作。</p>
            <p><strong>TypedArray对象</strong>：共包括9种类型的视图，包括Int8、Uint8、Uint8C、Int16、Uint16、Int32、Uint32、Float32、Float64，主要用于读写简单类型的二进制数据。</p>
            <p><strong>DataView对象</strong>：自定义复合格式的视图。</p>
            <h3 class='title'>ArrayBuffer对象</h3>
            <p>代表存储二进制数据的一段内存，<strong>不能直接读写，只能通过视图进行读写。</strong>同时也是一个构造函数，用于分配一段可以存放数据的连续区域：</p>
            <pre><code>var buf = new ArrayBuffer(bytes) // bytes代表字节数，每个字节默认值为0</code></pre>
            <p>使用DataView读取ArrayBuffer：</p>
            <pre><code>var buf = new ArrayBuffer(32)
var dataView = new DataView(buf)
dataView.getUint8(0) // 无符号8位整数格式读取：0</code></pre>
            <p>TypedArray视图是一组构造函数，代表不同的数据格式：</p>
            <pre><code>var buffer = new ArrayBuffer(12)
var x1 = new Int32Array(buffer) // 32位带符号整数
x1[0] = 1
var x2 = new Uint8Array(buffer) // 8位无符号整数
x2[0] = 2
x1[0] // 2</code></pre>
        <p>ArrayBuffer实例的byteLength属性，返回所分配的内存区域字节长度。如果要分配的内存区域很大，有可能分配失败，因此有必要检查是否分配成功：</p>
        <pre><code>if (buf.byteLength == n) {
    // 分配成功
} else {
    // 分配失败
}</code></pre>
            <p>ArrayBuffer实例的slice()方法，可以将内存区域的一部分复制生成一个新的ArrayBuffer对象：</p>
            <pre><code>var buf = new ArrayBuffer(8)
var newBuf = buf.slice(0, 3) // 复制前3个字节</code></pre>
            <p>slice方法的第一个参数表示复制开始的字节序号（含该字节），第二个参数表示复制结束的字节序号（不含，默认到结尾）。</p>
            <p><strong>ArrayBuffer.isView()</strong>，静态方法，判断参数是否为ArrayBuffer的视图实例：</p>
            <pre><code>var buf = new ArrayBuffer(32)
var v = new Int32Array(buf)
ArrayBuffer.isView(v) // true</code></pre>
            <h3 class="title">TypedArray视图</h3>
            <p>TypedArray视图一共包括9种类型，每一种视图都是一种构造函数：</p>
            <p><strong>1、Int8Array</strong>：8位有符号整数；</p>
            <p><strong>2、Uint8Array</strong>：8位无符号整数；</p>
            <p><strong>3、Uint8ClampedArray</strong>：8位无符号整数，溢出处理不同；</p>
            <p><strong>4、Int16Array</strong>：16位有符号整数；</p>
            <p><strong>5、Uint16Array</strong>：16位无符号整数；</p>
            <p><strong>6、Int32Array</strong>：32位有符号整数；</p>
            <p><strong>7、Uint32Array</strong>：32位无符号整数；</p>
            <p><strong>8、Float32Array</strong>：32位浮点数；</p>
            <p><strong>9、Float64Array</strong>：64位浮点数；</p>
            <p>普通数组与TypedArray数组的区别：</p>
            <p><strong>1、TypedArray数组的所有成员都是同一种类型；</strong></p>
            <p><strong>2、TypedArray数组的成员是连续的，不会有空位；</strong></p>
            <p><strong>3、TypedArray数组成员的默认值是0.</strong></p>
            <p><strong>4、TypedArray数组只是一层视图，本身不储存数据。</strong></p>
            <p>构造函数原型：<strong>TypedArray(buffer, byteOffset=0, length?)</strong>：第一个参数必须，指向底层ArrayBuffer对象；第二个可选，视图开始的字节序号，默认为0；第三个可选，视图包含的数据个数，默认到内存区域结尾。</p>
            <p>注意，byteOffset必须与所要建立的数据类型一致，否则会报错：</p>
            <pre><code>var buf = new ArrayBuffer(32)
var v = new Int16Array(buf, 1) // ERROR</code></pre>
            <p>如果需要从任意字节开始解读ArrayBuffer对象，必须使用DataView视图。</p>
            <p><strong>TypedArray(length)</strong>：视图还可以不通过ArrayBuffer，直接分配内存生成。</p>
            <pre><code>var f64a = new Float64Array(8) // 64字节</code></pre>
            <p><strong>TypedArray(typedArray)</strong>：接收另外一个TypedArray实例作为参数构造生成，此时新数组会开辟新的内存区域储存数据，不会在原数组的内存区域之上建立视图。</p>
            <pre><code>var x = new Int8Array([1, 1])
var y = new Int8Array(x)</code></pre>
            <p>如果想基于相同的内存区域构造不同的视图，可以这样写：</p>
            <pre><code>var x = new Int8Array([1, 1])
var y = new Int8Array(x.buffer)</code></pre>
            <p><strong>TypedArray(arrayLikeObj)</strong>：构造函数的参数也可以是一个普通数组，直接生成TypedArray实例。此时会重新开辟内存区域。</p>
            <p><strong>字节序</strong>：指的是数值在内存中的表示方式：</p>
            <pre><code>var buf = new ArrayBuffer(16)
var int32View = new Int32Array(buf)
for (var i = 0; i &lt; int32View.length; i++) {
    int32View[i] = i * 2
}
console.log(int32View) // 0 2 4 6
var int16View = new Int16Array(buf)
console.log(int16View) // 0 0 2 0 4 0 6 0</code></pre>
            <p>x86体系的计算机都采用<strong>小端字节序（litter endian），相对重要的字节（高字节）排在后面，不重要的字节（低字节）排在前面。大端字节序列则相反。TypedArray内部也采用小端字节序列读写。DataView对象可以设定字节序列。</strong></p>
            <p>下面的方法可以判断当前视图是否是小端字节序，还是大端字节序：</p>
            <pre><code>const BIG_ENDIAN = Symbol('BIG_ENDINA')
const LITTER_ENDINA = Symbol('LITTER_ENDINA')
function getPlatformEndianness() {
    let arr32 = Uint32Array.of(0x12345678)
    let arr8 = new Uint8Array(arr32.buffer)
    switch ((arr8[0]*0x1000000) + (arr8[1]*0x10000) + (arr8[2]*0x100)+(arr8[3])) {
        case 0x12345678: return BIG_ENDIAN;
        case 0x78563412: return LITTER_ENDINA;
        default: throw new Error('Unknow endianness')
    }
}</code></pre>
            <p>每一种TypedArray视图，都有一个BYTES_PER_ELEMENT属性，表示这种数据类型占据的字节数：</p>
            <pre><code>Int8Array.BYTES_PER_ELEMENT // 1
Float64Array.BYTES_PER_ELEMENT // 8</code></pre>
            <p>ArrayBuffer与字符串的相互转换：（前提是字符串的编码方法是确定的，比如UTF-16）</p>
            <pre><code>// ArrayBuffer转为字符串
function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf))
}
// 字符串转为ArrayBuffer
function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2)
    var bufView = new Uint16Array(buf)
    for(var i = 0; i &lt; str.length; i++) {
        bufView[i] = str.charCodeAt(i)
    }
    return buf
}</code></pre>
            <p><strong>正向溢出(overflow)</strong>：输入值大于当前数据类型的最大值时，最后得到的值是当前数据类型的最小值加上余值，再减去1；<strong>负向溢出(underflow)</strong>：输入值小于当前数据类型的最小值时，当前数据类型的最大值减去余值，再加上1。</p>
            <pre><code>var uint8 = new Uint8Array(1)
uint8[0] = 256 // 0
uint8[0] = -1 // 255
var int8 = new Int8Array(1)
int8[0] = 128 // -128
int8[0] = -129 // 127</code></pre>
            <p><strong>Uint8ClampedArray</strong>视图的溢出与上面的规则不同，正向溢出都等于255，负向溢出都等于0：</p>
            <pre><code>var uint8c = new Uint8ClampedArray(1)
uint8c[0] = 256 // 255
uint8c[0] = -1 // 0</code></pre>
            <p><strong>TypedArray.prototype.buffer</strong>：返回整段内存区域对应的ArrayBuffer对象。</p>
            <p><strong>TypedArray.prototype.byteLength</strong>：返回数组占据的内存长度。</p>
            <p><strong>TypedArray.prototype.length</strong>：返回数组的成员数目。</p>
            <p><strong>TypedArray.prototype.byteOffset</strong>：返回数组从底层ArrayBuffer对象的哪个字节开始。</p>
            <p><strong>TypedArray.prototype.set()</strong>：用于复制数组（普通数组或者TypedArray数组）,将一段内存完全复制到另外一段内存,可以指定从哪个位置开始复制。</p>
            <pre><code>var a = new Uint8Array(8)
var b = new Uint8Array(10)
b.set(a, 2) // 从a[2]开始</code></pre>
            <p><strong>TypedArray.prototype.subarray()</strong>：对于TypedArray的一部分再建立一个新的视图，第1个参数是起始的字节序号，第2个参数是结束成员序号（不包含）：</p>
            <pre><code>var a = new Uint8Array(8)
var b = a.subarray(2,3)
b.byteLength // 1</code></pre>
            <p><strong>TypedArray.prototype.slice()</strong>：返回一个指定位置的新的TypedArray实例，支持负值：</p>
            <pre><code>let uint8 = Uint8Array.of(1,2,3)
uint8.slice(-1) // [3]</code></pre>
            <p><strong>TypedArray.of()</strong>：静态方法，用于将参数转为一个TypedArray实例。</p>
            <pre><code>Float32Array.of(0.1,0.2,3)</code></pre>
            <p>TypedArray的构造方法：</p>
            <pre><code>let a1 = new Uint8Array([1,2,3])
let a2 = new Uint8Array.of(1,2,3)
let a3 = new Uint8Array(3)
a3[0] = 1
a3[1] = 2
a3[2] = 3</code></pre>
            <p><strong>TypedArray.from()</strong>：接受一个可遍历的结构（比如数组）作为参数，返回一个基于此结构的TypedArray实例。</p>
            <pre><code>Uint16Array.from([0,1,2])</code></pre>
            <p>还可以将一种TypedArray转为另外一种：</p>
            <pre><code>var uint16 = Uint16Array.from(Uint8Array.of(1,2,3))</code></pre>
            <p>还可以接受一个函数作为第二个参数，对每个元素进行遍历：</p>
            <pre><code>Int16Array.from(Int8Array.of(1,2,3), x => 2*x) // [2,4,6]</code></pre>
            <h3 class="title">复合视图</h3>
            <p>视图的构造函数可以指定起始位置和长度，所以在同一段内存中可以依次存放不同类型的数据：</p>
            <pre><code>var buf = new ArrayBuffer(24)
var idView = new Uint32Array(buf,0,1) // 字节0~3：1个32位无符号整数
var userNameView = new Uint8Array(buf,4,16) // 字节4~19：16个8位无符号整数
var amountView = new Float32Array(buf, 20, 1) // 字节20~23:1个32位浮点数</code></pre>
            <h3 class="title">DataView视图</h3>
            <p>DataView支持设定字节序，接受一个ArrayBuffer对象作为参数生成视图。</p>
            <pre><code>var buf = new ArrayBuffer(32)
var dv = new DateView(buf, 2, 4) // 支持设定起始位置和长度</code></pre>
            <p>DataView实例的<strong>buffer、byteLength、byteOffset</strong>属性与TypedArray含义一致。</p>
            <p>DataView实例提供以下8个方法读取内存：<strong>getInt8、getUint8、getInt16、getUint16、getInt32、getUint32、getFloat32、getFloat64</strong>，方法的参数是一个字节序号，表示读取的起始位置：</p>
            <pre><code>var buf = new ArrayBuffer(32)
var dv = new DataView(buf)
var v1 = dv.getUint8(0) // 从第0个字节读取一个uint8
var v2 = dv.getUint16(1) // 从第1个字节读取一个uint16</code></pre>
            <p>如果一次读取两个或者两个以上的字节，则必须明确数据的储存方式，是小端序列还是大端序列（默认），如果是小端序列，第2个参数需要设定为true：</p>
            <pre><code>var v3 = dv.getUint8(4, true)</code></pre>
            <p>DataView提供以下8个方法写入内存：<strong>setUint8、setInt8、setUint16、setInt16、setInt32、setUint32、setFloat32、setFloat64</strong>，接受3个参数，第1个参数表示写入的位置，第2个参数是写入的数据，第3个参数表面数据的储存方式（大小端）：</p>
            <pre><code>dv.setUint32(0, 32, true)</code></pre>
        </div>
        <footer>2017年05月18日</footer>
        <comments></comments>
        <Catalog :catalog="catalog"></Catalog>
    </div>
</template>
<script>
    import Page from '../../page'
    export default {
        extends: Page
    }
</script>
