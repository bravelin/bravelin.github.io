<template>
    <div class="page article">
        <h2 class="title">《ES6标准入门》笔记之五：数值的扩展</h2>
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
            <p>Number.isSafeInteger()用来判断一个整数是否位于这个范围之内。</p>
        </div>
        <footer>2017年03月17日</footer>
        <comments></comments>
    </div>
</template>
<script>
    module.exports = {
        mounted: function () {
            this.$nextTick(function () {
                var codes = document.querySelectorAll('code')
                if (codes.length > 0) {
                    for (let k = 0; k < codes.length; k++) {
                        hljs.highlightBlock(codes[k])
                    }
                }
            })
        }
    }
</script>
