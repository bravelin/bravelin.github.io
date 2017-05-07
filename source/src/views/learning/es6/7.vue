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
        </div>
        <footer>2017年05月07日</footer>
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
