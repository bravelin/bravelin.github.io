<template>
    <div class="page article">
        <h2 class="title">ES6标准入门笔记之五：数值的扩展</h2>
        <div class="content">
            <h3 class="title">二进制和八进制数值表示法</h3>
            <p>ES6对二进制和八进制提供了新的表示方法：分别用前缀0b(0B)和0o(0O)表示：</p>
            <pre><code>0b111110111 === 503
0o767 === 503</code></pre>
            <p>在严格模式中，八进制数据不允许使用0前缀表示，需使用0o前缀。使用Number方法可以将这种前缀表示的数值字符串转为十进制数值：</p>
            <pre><code>Number('0b111110111') // 503
Number('0o767') // 503</code></pre>
            <h3 class="title">Number.isFinite()、Number.isNaN()</h3>
            <p>分别用来检查Infinite和NaN这两个特殊值。</p>
            <p>Number.isFinite()用来检查一个数值是否<strong>非无穷</strong>（infinity）。</p>
            <p>Number.isNaN()用来检查一个值是否为NaN。</p>
            <p>这两个方法与传统的全局方法isFinite()和isNaN()的区别在于，<strong>传统的方法会先调用Number将非数值转为数值，再进行判断。而新方法只对数值有效。</strong></p>
            <pre><code>isFinite(25) // true
isFinite('25') // true
Number.isFinite(25) // true
Number.isFinite('25') // false
isNaN('NaN') // true
Number.isNaN('NaN') // false</code></pre>
            <h3 class="title">Number.parseInt()、Number.parseFloat()</h3>
            <p>与传统的全局方法parseInt()和parseFloat()是等价的，只是移植到了Number对象上。</p>
            <p>其目的是逐步减少全局方法，使语言逐步模块化。</p>
            <h3 class="title">Number.isInteger()</h3>
            <p>用来判断一个值是否为整数。在JS内部，整数和浮点数是相同的存储方法，3和3.0是相同的数值。</p>
            <pre><code>Number.isInteger(3) // true
Number.isInteger(3.0) // true
Number.isInteger('3') // false</code></pre>
            <h3 class="title">Number.EPSILON</h3>
            <p>新增的极小常量：</p>
            <pre><code>Number.EPSILON // 2.220446049250313e-16
Number.EPSILON.toFixed(20) // "0.00000000000000022204"</code></pre>
            <p>因为浮点数的计算是不精确的，可以利用这个值设置误差范围：</p>
            <pre><code>function withinErrorMargin (v1, v2) { // 判断两个值是否相等（在一定误差范围之内）
        return Math.abs(v1 - v2) < Number.EPSILON
}
withinErrorMargin(0.1 + 0.2, 0.3) // true
0.1+0.2 == 0.3 // false</code></pre>
            <h3 class="title">Number.isSafeInteger()</h3>
            <p>JS可以精确表示的整数范围是-2<sup>53</sup>~2<sup>53</sup>之间，超出这个范围无法精确表示。ES6新增了<strong>Number.MAX_SAFE_INTEGER</strong>和<strong>Number.MIN_SAFE_INTEGER</strong>两个常量，用来表示这个范围的上下限。</p>
            <p>Number.isSafeInteger()用来判断一个<strong>整数</strong>是否位于这个范围之内。</p>
            <pre><code>Math.pow(2,53) // 9007199254740992
Math.pow(2,53)+1 // 9007199254740992
Math.pow(-2,53) // -9007199254740992
Math.pow(-2,53)-1 // -9007199254740992

Number.MAX_SAFE_INTEGER // 9007199254740991
Number.MIN_SAFE_INTEGER // -9007199254740991</code></pre>
            <pre><code>Number.isSafeInteger('a') // false
Number.isSafeInteger(null) // false
Number.isSafeInteger(NaN) // false
Number.isSafeInteger(1.2) // false
Number.isSafeInteger(1.0) // true</code></pre>
            <h3 class="title">Math对象的扩展</h3>
            <p>Math对象新增了17个与数学相关的静态方法。</p>
            <p><strong>1、Math.trunc()</strong></p>
            <p>用于获取一个数（如果不是数值，会先转换）的整数部分：</p>
            <pre><code>Math.trunc(1.1) // 1
Math.trunc(-1.1) // -1
Math.trunc("-1.1") // -1</code></pre>
            <p>等价于此方法：</p>
            <pre><code>function (x) {
    return x > 0 ? Math.floor(x) : Math.ceil(x)
}</code></pre>
            <p><strong>2、Math.sign()</strong></p>
            <p>用于判断一个数是正数、负数、0：参数为正数，返回1；参数为负数，返回-1；参数为0，返回0，参数为-0，返回-0；其他值，返回NaN。</p>
            <pre><code>Math.sign(11) // 1
Math.sign(-11) // -1
Math.sign(-0) // -0
Math.sign(0) // 0
Math.sign('A') // NaN</code></pre>
            <p><strong>3、Math.cbrt()</strong></p>
            <p>用于计算一个数（如果不是数值，会先转换）的立方根：</p>
            <pre><code>Math.cbrt(2) // 1.2599210498948732</code></pre>
            <p>等价于此方法：</p>
            <pre><code>function (x) {
    var y = Math.pow(Math.abs(x), 1/3)
    return x > 0 ? y : -y
}</code></pre>
            <p><strong>4、Math.clz32()</strong></p>
            <p>返回一个数的32位无符号整数形式有多少个前导0，函数名称来自"count leading zero bits in 32-bit binary representations of a number"</p>
            <pre><code>Math.clz32(1) // 31
Math.clz32(0) // 32
Math.clz32(1 << 1) // 30</code></pre>
            <p>对于小数，该方法只考虑整数部分。其他非数值参数会先转换成数值。</p>
            <p><strong>5、Math.imul()</strong></p>
            <p>返回两个数以32位带符号整数形式相乘的结果（也是一个32位带符号整数）。</p>
            <p>如果只考虑32位，大多数情况下，Math.imul(a * b)与a * b的结果是相同的（（a * b）|0）。超出32位的部分溢出。</p>
            <pre><code>Math.imul(2, 4) // 8
Math.imul(-2, -2) // 4
Math.imul(0x7fffffff, 0x7fffffff) // 1</code></pre>
            <p>之所以增加此方法，是因为JS有精度限制，超出2的53次方无法精确表示出来。Math.imul()可以返回正确的低位数值。</p>
            <p><strong>6、Math.fround()</strong></p>
            <p>返回一个数的单精度浮点数形式：</p>
            <pre><code>Math.fround(1) // 1
Math.fround(1.337) // 1.3370000123977661
Math.fround(1.5) // 1.5</code></pre>
            <p>对于整数，此方法返回同样的整数；区别在于那些无法使用64位二进制位表示精确表示的数，Math.fround()会返回最接近这个小数的单精度浮点数。</p>
            <p><strong>7、Math.hypot()</strong></p>
            <p>此方法返回所有参数（如果参数不是数值，会先转换）平方和的平方根：</p>
            <pre><code>Math.hypot(3, 4) // 5
Math.hypot(3, 4, 5) // 7.0710678118654755
Math.hypot(-3) // 3</code></pre>
            <p><strong>8、Math.expm1()</strong></p>
            <p>等价于Math.exp(x) - 1，即e的x次方再减去1的结果。</p>
            <pre><code>Math.expm1(1) // 1.718281828459045</code></pre>
            <p><strong>9、Math.log1p()</strong></p>
            <p>等价于Math.log(1+x)，即求x加1之和的自然对数。</p>
            <pre><code>Math.log1p(Math.E-1) // 1</code></pre>
            <p><strong>10、Math.log10()</strong></p>
            <p>返回以10为底的x的对数。</p>
            <pre><code>Math.log10(1000) // 3</code></pre>
            <p><strong>11、Math.log2()</strong></p>
            <p>返回以2为底的x的对数。</p>
            <pre><code>Math.log2(1024) // 10</code></pre>
            <p><strong>12、Math.sinh(x)</strong>：返回x的双曲正旋。</p>
            <p><strong>13、Math.cosh(x)</strong>：返回x的双曲余旋。</p>
            <p><strong>14、Math.tanh(x)</strong>：返回x的双曲正切。</p>
            <p><strong>15、Math.asinh(x)</strong>：返回x的反双曲正旋。</p>
            <p><strong>16、Math.acosh(x)</strong>：返回x的反双曲余旋。</p>
            <p><strong>17、Math.atanh(x)</strong>：返回x的反双曲正切。</p>
            <h3 class="title">指数运算符</h3>
            <p>ES7里面新增的一个运算符（**）</p>
            <pre><code>2 ** 4 // 16</code></pre>
            <p>与等号结合，形成一个新的赋值运算符：（**=）</p>
            <pre><code>let b = 3
b **= 3 // 27</code></pre>
        </div>
        <footer>2017年03月17日</footer>
        <Comments></Comments>
        <Catalog :catalog="catalog"></Catalog>
    </div>
</template>
<script>
    import Page from '@/views/Page'
    export default {
        extends: Page
    }
</script>
