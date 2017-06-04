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
            <p>构造函数原型：TypedArray(buffer, byteOffset=0, length?)：第一个参数必须，指向底层ArrayBuffer对象；第二个可选，视图开始的字节序号，默认为0；第三个可选，视图包含的数据个数，默认到内存区域结尾。</p>
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
        </div>
        <footer>2017年05月18日</footer>
        <comments></comments>
    </div>
</template>
<script>
    import Page from '../../page'
    module.exports = {
        extends: Page
    }
</script>
