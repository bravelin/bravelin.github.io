<template>
    <div class="page article">
        <h2 class="title">你不知道的JavaScript（中卷）笔记</h2>
        <div class="content">
            <h3 class="title">类型</h3>
            <p><strong>对语言引擎和开发人员来说，类型是值的内部特征，它定义了值的行为，以使其区别于其他值。</strong></p>
            <p>JavaScript不要求“类型强制”，也就是说，语言引擎不要求变量总是持有与其初始值同类型的值。</p>
            <p>转换类数组对象：Array.prototype.slice.call(obj)，或者Array.from(obj)</p>
            <p>JS中的整数就是没有小数的十进制数，42.0即等同于整数42.</p>
            <p>JS中的机器精度大约是2^-52，该值定义在Number.EPSILON.</p>
            <p>整数检测：Number.isInteger：</p>
            <pre><code>if (!Number.isInteger) {
    Number.isInteger = function (num) {
        return typeof num == 'number' && num % 1 == 0
    }
}</code></pre>
            <p><strong>void运算符</strong>：void不改变表达式的结果，只是让表达式返回undefined.</p>
            <pre><code>var a = 42
console.log(void a, a) // undefined 42</code></pre>
            <p><strong>NaN是JS中唯一一个不等于自身的值。</strong></p>
        </div>
        <footer>2018年06月05日</footer>
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
