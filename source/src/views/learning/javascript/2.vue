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
            <p>Function.prototype是一个空函数，Array.prototype是一个空数组，RegExp.prototype是一个空的正则表达式。</p>
            <h3 class="title">强制类型转换</h3>
            <p><strong>JS中的强制类型转换总是返回标量基本类型值，如string、number、boolean。类型转换发生在静态类型语言的编译阶段，而强制类型转换则发生在动态类型语言的运行时（runtime）。</strong></p>
            <p><em>1、toString</em></p>
            <p>字符串化规则为：null转化为'null'；undefined转化为'undefined'；true转化为'true'；false转化为'false'；数字的字符串化遵循通用规则，极大和极小的数字使用指数的形式；</p>
            <pre><code>var a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;
console.log(a + '') // 1.07e+21</code></pre>
            <p>对于对象来说，除非自定义，否则返回toString返回内部属性的值；数组的toString则是将单元字符串化以后再用逗号连接起来：</p>
            <pre><code>var a = [1,2,3]
console.log(a + '') // 1,2,3</code></pre>
            <p>JSON.stringify在将JSON对象序列化为字符串时也使用到了toString。所有安全的JSON值都是可以字符串化的。</p>
            <p><strong>不安全的JSON值指的是undefined、function、symbol和包含循环引用的对象。</strong>JSON.stringify在对象中遇到undefined、function、symbol时会自动将其忽略，在数组中则会返回null；如果对象中包含循环引用，则报错。</p>
            <p>如果对象中定义了toJSON方法，JSON字符串化时会首先调用此方法。然后用它的返回值进行序列化。</p>
            <pre><code>var a = { val: [1,2,3], toJSON: function () { return this.val.slice(1) } }
JSON.stringify(a) // [2,3]</code></pre>
            <p><em>2、toNumber</em></p>
            <p>true转为1；false转为0；null转为0；undefined转为NaN。</p>
            <p><em>3、toBoolean</em></p>
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
