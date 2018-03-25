<template>
    <div class="page article">
        <h2 class="title">《ES6标准入门》笔记之七：函数的扩展</h2>
        <div class="content">
            <h3 class="title">函数参数的默认值</h3>
            <p>ES6允许为函数参数设置默认值，直接写在参数定义的后面：</p>
            <pre><code>function log (x, y = 'abc') { console.log(x, y) }

function Point (x = 0, y = 0) {
    this.x = x
    this.y = y
}</code></pre>
            <p>参数默认值可以与解构赋值的默认值结合起来使用：</p>
            <pre><code>function fetch (url, { method = 'GET' } = { }) {
    console.log(method)
}
fetch('http://example.com') // GET</code></pre>
            <p>上面调用fetch函数中，没有传入第二个参数。因此函数参数的默认值{}生效，之后是解构赋值的默认值生效。</p>
            <p>通常情况下，定义了默认值的参数应该是函数的<strong>尾参数</strong>。如果传入undefined，将触发该参数等于默认值。</p>
            <p>指定了默认值以后，函数的length属性将返回没有指定默认值的参数个数。也即是指定了函数参数默认值，length属性将失真。</p>
            <pre><code>(function (a) {}).length // 1
(function (a = 5) {}).length // 0</code></pre>
            <p>length属性是函数预期传入的参数个数。rest参数也不会计入length属性。</p>
            <p>如果参数默认值是一个变量，则该变量应当<strong>先是当前函数的作用域，然后才是全局作用域。</strong></p>
            <pre><code>var x = 1
function f(x, y = x) { console.log(y) }
f(2) // 2</code></pre>
            <h3 class="title">rest参数</h3>
            <p>rest参数用于获取函数的多余参数，这样可以不用arguments对象。rest参数搭配的变量是一个数组，该变量将多余的参数放入其中。</p>
            <pre><code>function add (...values) {
    let sum = 0
    for (var v of values) {
        sum += v
    }
    return sum
}
add(2, 3, 6) // 11</code></pre>
            <p>上面的add求和函数利用rest参数可以传入任意数目的参数。</p>
            <p><strong>rest参数的变量代表一个数组，数组特有的方法都可以用于这个变量。</strong>rest参数之后不能再有其他的参数（即只能是最后一个参数），否则报错。</p>
            <h3 class="title">扩展运算符</h3>
            <p>扩展运算符是三个点（...），好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。</p>
            <pre><code>console.log(...[1, 2, 3]) // 1 2 3</code></pre>
            <p>该运算符主要用于函数调用：</p>
            <pre><code>function push (array, ...items) {
    array.push(...items)
}
function add (x, y) { return x + y }
var nums = [4, 38]
add(...nums) // 42</code></pre>
            <p>由于扩展运算符可以展开数组，因此不再需要apply方法将数组转为函数参数序列了。</p>
            <pre><code>// ES5的写法
function f(x, y, z) {}
var args = [1, 2, 3]
f.apply(null, args)

// ES6的写法
f(...args)</code></pre>
            <p>扩展运算符提供了数组合并的新写法：</p>
            <pre><code>// ES5的写法
[1, 2].concat(more)
// ES6的写法
[1, 2, ...more]</code></pre>
            <p>与解构赋值结合起来可以生成数组：</p>
            <pre><code>const [first, ...rest] = [1, 2, 3, 4, 5, 6]
first // 1
rest // [2, 3, 4, 5, 6]</code></pre>
            <p><strong>如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则报错。</strong></p>
            <p>扩展运算符还可以将字符串转为真正的数组（并且能够正确识别32位的unicode字符）：</p>
            <pre><code>[..."hello"] // ["h", "e", "l", "l", "o"]</code></pre>
            <p>返回正确的字符串长度可以这样求得：</p>
            <pre><code>function len (str) { return [...str].length }</code></pre>
            <p>凡是涉及操作32位的Unicode字符都有这个问题，因此，最好都用扩展运算符改写：</p>
            <pre><code>let str = 'x\uD83D\uDE80y'
str.split('').reverse().join('') // error
[...str].reverse().join('') // good</code></pre>
            <p>任何类似数组的对象都可以使用扩展运算符转为真正的数组：</p>
            <pre><code>var nodeList = document.querySelectorAll("div")
var array = [...nodeList]</code></pre>
            <p><strong>扩展运算符内部调用的是数据结构的Iterator接口，因此只要具有Iterator接口的对象，都可以使用扩展运算符。</strong>比如Map、Set、Generator函数。</p>
            <pre><code>let map = new Map([ [1, 'one'], [2, 'two'], [3, 'three'] ])
let arr = [...map.keys()] // [1, 2, 3]

var go = function* () {
    yield 1;
    yield 2;
    yield 3
}
[...go()] // [1, 2, 3]</code></pre>
            <h3 class="title">name属性</h3>
            <p>函数的name属性会返回该函数的名称。</p>
            <p>如果将一个具名函数赋值给一个变量，name属性返回这个具名函数原本的名字。</p>
            <pre><code>const bar = function abc() { }
bar.name // "abc"</code></pre>
            <p>Function构造函数返回的函数实例，name属性的值为：anonymous</p>
            <pre><code>(new Function).name // "anonymous"</code></pre>
            <p>bind返回的函数，name属性值会加上bound的前缀：</p>
            <pre><code>function foo () {}
foo.bind({}).name // "bound foo"</code></pre>
            <h3 class="title">箭头函数</h3>
            <p>使用箭头定义函数：</p>
            <pre><code>var f = v => v
var f = () => v
var sum = (v1, v2) => { v1 = v1 * 2; return v1 + v2 }</code></pre>
            <p>需要注意的地方：</p>
            <p><strong>1、函数体内的this对象就是定义时所在的对象，而不是使用时所在的对象；</strong></p>
            <p><strong>2、不可以当做构造函数；</strong></p>
            <p><strong>3、不可以使用arguments对象，该对象在函数体内不存在；可以使用rest参数代替；</strong></p>
            <p><strong>4、不可以使用yield命令，因此箭头函数不能用作Generator函数；</strong></p>
            <h3 class="title">函数的绑定</h3>
            <p>ES7提出函数绑定运算符（::），用来取代call、apply、bind的调用。该运算符自动将左边的对象作为上下文环境（this对象）绑定到右边的函数上。</p>
            <pre><code>foo::bar // 等同于 bar.bind(foo)
foo::bar(...arguments) // 等同于 bar.apply(foo, arguments)</code></pre>
            <p>如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上。</p>
            <pre><code>var method = obj::obj.foo // 等同于 var method = ::obj.foo
let log = ::console.log // 等同于 var log = console.log.bind(console)</code></pre>
        </div>
        <footer>2017年05月07日</footer>
        <comments></comments>
    </div>
</template>
<script>
    import Page from '../../page'
    export default {
        extends: Page
    }
</script>