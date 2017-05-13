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
            <h3 class="title">Object.assign()</h3>
            <p>将来源对象（source）的所有可枚举属性复制到目标对象（target）。有至少有两个参数，第一个参数是target对象，后面的参数是source对象。所有参数必须是对象。</p>
            <pre><code>var target  = { a: 1 }
var source1 = { b: 2, d: 5 }
var source2 = { c: 3, b: 4 }
Object.assign(target, source1, source2) // { a: 1, b: 4, c: 3, d: 5 }</code></pre>
            <p>如果目标对象与源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性。</p>
            <p>Object.assign只复制自身的属性，不可枚举的属性（enumerable为false）和继承的属性不会复制。</p>
            <p>属性值为Symbol的属性，也会被复制进去。</p>
            <p><strong>对于嵌套的对象，Object.assign的处理方法是替换，而不是添加。</strong></p>
            <pre><code>var target = { a: { b: 'c', d: 'e' } }
var source = { a: { b: 'hello' } }
Object.assign(target, source) // { a: { b: 'hello' } }</code></pre>
            <p><strong>Object.assign可以处理数组，但是会将其视为对象：</strong></p>
            <pre><code>Object.assign([1, 2, 3], [4, 5]) // [4, 5, 3]</code></pre>
            <p>Object.assign只能克隆原始对象的自身的值，不能克隆它继承的值。如果想要保持继承链，可以使用下面的方式：</p>
            <pre><code>function clone (origin) {
    let originProto = Object.getPrototypeOf(origin)
    return Object.assign(Object.create(originProto), origin)
}</code></pre>
            <p>将多个对象合并到某个对象：</p>
            <pre><code>const merge = (target, ...source) => Object.assign(target, ...source)</code></pre>
            <p>如果期望合并之后返回新的对象，可以将所有对象合并到一个空对象：</p>
            <pre><code>const merge = (...source) => Object.assign({}, ...source)</code></pre>
            <h3 class="title">属性的可枚举性</h3>
            <p>对象的每个属性都有一个描述对象（Descriptor），用于控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。</p>
            <pre><code>let obj = { foo: 123 }
Object.getOwnPropertyDescriptor(obj, "foo") // { configurable: true, enumerable: true, value: 123, writable: true }</code></pre>
            <p>描述对象中的enumerable称之为“可枚举性”，如果该属性为false，下列操作会忽略当前属性：</p>
            <p>1、for...in循环：只遍历对象自身的和继承的可枚举属性；</p>
            <p>2、Object.keys()：返回对象自身的所有可枚举属性的键名；</p>
            <p>3、JSON.stringify()：只串行化对象自身的可枚举属性；</p>
            <p>4、Object.assign()：只复制对象自身的可枚举属性；</p>
            <p>5、Reflect.enumerate()：返回所有for...in循环会遍历的属性；</p>
            <p><strong>操作中引入继承的属性会让问题复杂化，大部分时候只需要知道对象的自身属性。尽量不要使用for... in循环，而用Object.keys()。</strong></p>
            <h3 class="title">属性的遍历</h3>
            <p>ES6一共有6种方法遍历对象的属性：</p>
            <p><strong>1、for...in</strong></p>
            <p>for...in循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）。</p>
            <p><strong>2、Object.keys(obj)</strong></p>
            <p>返回一个数组，包含对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。</p>
            <p><strong>3、Object.getOwnPropertyNames(obj)</strong></p>
            <p>返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。</p>
            <p><strong>4、Object.getOwnPropertySymbols(obj)</strong></p>
            <p>返回一个数组，包含对象自身的所有Symbol属性。</p>
            <p><strong>5、Reflect.ownKeys(obj)</strong></p>
            <p>返回一个数组，包含对象自身的所有属性（包括不可枚举、Symbol属性）。</p>
            <p><strong>6、Reflect.enumerate(obj)</strong></p>
            <p>返回一个Iterator对象，遍历对象自身的和继承的所有可枚举属性（不含Symbol属性，和for...in循环一样）。</p>
            <p>属性遍历遵循以下的规则：</p>
            <p>首先遍历所有属性名为数值的属性，按照数字排序；</p>
            <p>其次遍历所有属性名为字符串的属性，按照生成时间排序；</p>
            <p>最后遍历所有属性名为Symbol值的属性，按照生成时间排序。</p>
            <h3 class="title">_proto_</h3>
            <p>_proto_属性用来读取或者设置当前对象的prototype对象。</p>
            <p>最好不要使用这个属性，而是使用Object.setPrototypeOf()、Object.getPrototypeOf()代替直接读写操作。</p>
            <h3 class="title">对象的扩展运算符</h3>
            <p>ES7中的一项提案，将rest参数/扩展运算符（...）引入对象。Babel转码器已支持。</p>
            <p><strong>Rest参数</strong></p>
            <p>rest参数用于从一个对象取值，相当于将所有可遍历但尚未被读取的属性，分配到指定的对象上，所有键及其值都会复制到新的对象上。</p>
            <pre><code>let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
x // 1
y // 2
z // { a: 3, b: 4 }</code></pre>
            <p>rest复制是浅复制，如果一个键的值是复合类型（数组、对象、函数），rest参数复制的是这个值的引用。</p>
            <p>rest也不会复制继承自原型对象的属性。</p>
            <p><strong>扩展运算符</strong></p>
            <p>扩展运算符用于取出参数对象的所有可遍历属性，复制到当前对象中。</p>
            <pre><code>let z = { a: 3, b: 4 }
let n = { ...z } // { a: 3, b: 4 }</code></pre>
            <p>等同于使用Object.assign方法。</p>
            <p>可以合并两个对象：</p>
            <pre><code>let ab = { ...a, ...b }</code></pre>
        </div>
        <footer>2017年05月09日</footer>
        <comments></comments>
    </div>
</template>
<script>
    import Page from '../../page'
    module.exports = {
        extends: Page
    }
</script>