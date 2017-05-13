<template>
    <div class="page article">
        <h2 class="title">《ES6标准入门》笔记之九：Symbol</h2>
        <div class="content">
            <h3 class="title">概述</h3>
            <p>ES5中对象属性名都是字符串，容易造成属性名的冲突。引入Symbol的目的就是解决这个问题。它是JavaScript语言的第七种类型（Undefined、NULL、Boolean、String、Number、Object）。</p>
            <p>Symbol值通过Symbol函数生成，可以接受一个字符串作为参数，表示对Symbol实例的描述，使之在控制台显示或者转为字符串时好区分。</p>
            <pre><code>var s1 = Symbol('foo') // Symbol(foo)
var s2 = Symbol('bar') // Symbol(bar)</code></pre>
            <p><strong>Symbol值不能与其他类型的值进行运算，否则报错。</strong></p>
            <p>Symbol值可以显示转为字符串或者布尔值，但是不能转为数值。</p>
            <pre><code>var sym = Symbol()
Boolean(sym) // true
sym.toString() // "Symbol()"</code></pre>
            <h3 class="title">作为属性名的Symbol</h3>
            <p>由于每个Symbol值都是不相等的，因此Symbol值可以作为标识符用于对象的属性名，保证不会出现同名的属性。</p>
            <pre><code>var sym = Symbol()
var a = {}
a[sym] = "abc"

var b = { [sym]: "123" }</code></pre>
            <p><strong>Symbol值作为对象属性名时不能使用点运算符。</strong></p>
            <p>Symbol类型可用于定义一组常量，可保证这组常量的值都是不相等的。</p>
            <pre><code>log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
}</code></pre>
            <h3 class="title">属性名的遍历</h3>
            <p>Symbol作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()返回。有一个Object.getOwnPropertySymbols方法可以指定对象的所有Symbol属性。</p>
            <pre><code>var obj = { a: 111 }
var foo = Symbol('foo')
var bar = Symbol('bar')
obj[foo] = '222'
obj[bar] = '333'
Object.getOwnPropertyNames(obj) // ["a"]
Object.getOwnPropertySymbols(obj) // [Symbol(foo), Symbol(bar)]</code></pre>
            <p>另外一个新的API：<strong>Reflect.ownKeys</strong>方法可以返回所有类型的键名（包括了Symbol键名）。</p>
        </div>
        <footer>2017年05月13日</footer>
        <comments></comments>
    </div>
</template>
<script>
    import Page from '../../page'
    module.exports = {
        extends: Page
    }
</script>