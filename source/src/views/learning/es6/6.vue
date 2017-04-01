<template>
    <div class="page article">
        <h2 class="title">《ES6标准入门》笔记之六：数组的扩展</h2>
        <div class="content">
            <h3 class="title">Array.from()</h3>
            <p>用于将两类的对象转为真正的数组：类似数组的对象（array-like object）和可遍历的对象（iterable，包括Set和Map）。</p>
            <pre><code>let arrLike = { '0' : 'a', '1' : 'b', '2' : 'c', length : 3 }
// es5的写法
var arr1 = [].slice.call(arrLike) // ["a", "b", "c"]

// es6的写法
var arr2 = Array.from(arrLike) // ["a", "b", "c"]</code></pre>
            <p>常见的类似数组的对象有DOM操作的NodeList对象、函数内部的arguments对象。Array.from都可以将它们转为真正的数组。</p>
            <pre><code>var ps = document.querySelector('p')
Array.from(ps).forEach(function (p) { console.dir(p) }) // 数组对象才有forEach方法

Array.from('abcde') // ["a", "b", "c", "d", "e"] 字符串转数组

let newSet = new Set(['a', 'b'])
Array.from(newSet) // ["a", "b"]</code></pre>
            <p>因为字符串和Set都有Iterator结构，因此可以被Array.from转为正真的数组。</p>
        </div>
        <footer>2017年03月21日</footer>
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
