<template>
    <div class="page article">
        <h2 class="title">《ES6标准入门》笔记之八：对象的扩展</h2>
        <div class="content">
            <h3 class="title">属性的简洁表示法</h3>
            <p>ES6允许直接写入变量和函数作为对象的属性和方法：</p>
            <pre><code>var foo = 'bar'
var baz = { foo } // { foo : 'bar' }
var o = {
    method() { return 'abc' }
}</code></pre>
            <p><strong>在对象中只写属性名，不写属性值，此时属性值等于属性名代表的变量。</strong></p>
            <p>ES6允许字面量定义对象时使用表达式作为对象的属性名，即把表达式放在方括号内。</p>
            <pre><code>let propKey = 'foo'
let obj = { [propKey]: true, ['a' + 'bc']: 123 }</code></pre>
            <h3 class="title">方法的name属性</h3>
            <p>函数的name属性返回函数的名称。对象方法也是函数，因此也有name属性。返回对应的方法名，如果是取值方法，则会在方法名之前加get<strong>(有疑问？)</strong>；如果是存值方法，则会在方法名前加set。</p>
            <pre><code>var person = {
    sayName: function () { return 'a' },
    get firstName() { return 'b' }
}
console.log(person.sayName.name) // 'sayName'
console.log(person.sayName.firstName) // 预期是'get firstName' chrom输出是undefined</code></pre>
            <p>如果对象的方法是一个Symbol，name属性返回的是这个Symbol值的描述。</p>
            <pre><code>const k = Symbol("abc")
let obj = { [key]() { } }
obj[key].name // "[abc]"</code></pre>
            <h3 class="title">Object.is()</h3>
            <p>用于比较两个值是否严格相等。与严格比较符（===）的行为基本一致。不同之处是：+0不等于-0；NaN等于自身。</p>
            <pre><code>+0 === -0 // true
NaN === NaN // false
Object.is(+0,-0) // false
Object.is(NaN, NaN) // true</code></pre>
        </div>
        <footer>2017年05月09日</footer>
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
