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
            <p><strong>扩展运算符（...）也可以将某些数据结构转为数组：</strong></p>
            <pre><code>function foo() { var args = [...arguments] } // arguments对象
[...document.querySelectorAll('div')] // NodeList对象</code></pre>
            <p>扩展运算符背后调用的是遍历器接口（Symbol.iterator）；如果一个对象没有这个接口，将无法转换。</p>
            <p><strong>类似数组的对象本质特征是具有length属性。</strong>任何有此属性的对象，都可以通过Array.from方法进行转换。</p>
            <pre><code>Array.from({ length: 3 }) // [undefined, undefined, undefined]</code></pre>
            <p>Array.from可以接受第二个参数，作用类似数组的map方法，用来对每个元素进行处理，将处理之后的值返回放入的数组。</p>
            <pre><code>Array.from([1, 2, 3], (x) => x * x ) // [1, 4, 9]
Array.from({ length: 2}, () => 'jack' ) // ['jack', 'jack']</code></pre>
            <h3 class="title">Array.of()</h3>
            <p>用于将一组值转为数组，弥补数组构造函数Array()的不足。</p>
            <pre><code>Array.of(1, 2, 3) // [1, 2, 3]
Array.of() // []
Array.of(3) // [3]</code></pre>
            <p>等价于下面的方法：</p>
            <pre><code>function ArrayOf() { return [].slice.call(arguments) }</code></pre>
            <h3 class="title">数组实例的copyWithin()</h3>
            <p>在当前数组内将指定位置的成员复制到其他的位置（覆盖原有的成员），然后返回当前数组。</p>
            <p><strong>Array.prototype.copyWithin(target, start = 0, end = this.length)</strong>：target是从该位置开始替换数据；start是从该位置读取数据，默认为0（可以用负值表示倒数）；end表示到该位置前停止读取数据，默认为数组的长度（可以用负值表示倒数）。</p>
            <pre><code>[1,2,3,4,5].copyWithin(0,2) // [3, 4, 5, 4, 5]
[1,2,3,4,5].copyWithin(0,-2) // [4, 5, 3, 4, 5]</code></pre>
            <h3 class="title">数组实例的find()和findIndex()</h3>
            <p>find()方法用于查找第一个符合条件的数组成员，它的参数是一个回调函数，所有数组成员依次执行此函数，直到找出第一个返回true的成员，然后返回该成员；如果没有符合条件的，返回undefined。</p>
            <pre><code>[1,2,3,4].find(function(value, index, arr) { return value > 3 }) // 4 找出大于3的成员</code></pre>
            <p>回调函数可以接受3个参数，依次为当前值、当前的位置和原数组。</p>
            <p>findIndex()和find()方法类似，不同的是它返回的是符合条件的成员的位置，如果所有成员都不符合，则返回-1。</p>
            <h3 class="title">数组实例的fill()</h3>
            <p>使用给定值填充数组，返回填充之后的数组。</p>
            <p><strong>Array.prototype.fill(value, start = 0, end = this.length)</strong>：value是填充的值，start是起始填充位置，end表示到该位置之前结束填充。</p>
            <pre><code>[1,2,3].fill(8) // [8, 8, 8]
 new Array(3).fill(6) // [6, 6, 6]</code></pre>
            <h3 class="title">数组实例的entries()、keys()、values()</h3>
            <p>遍历数组的方法。都返回一个遍历器对象，可以用for...of循环遍历，唯一的区别是：keys()是对键名的遍历；values()是对键值得遍历；entries()是对键值对的遍历。</p>
            <pre><code>for(let index of ['a', 'b'].keys()) { console.log(index) }
// 0
// 1

for(let val of ['a', 'b'].values()) { console.log(val) } // chrome不支持
// 'a'
// 'b'

for(let [index, val] of ['a', 'b'].entries()) { console.log(index, val) }
//0 'a'
//1 'b'
            </code></pre>
            <h3 class="title">数组实例的includes()</h3>
            <p>返回一个布尔值，表示数组是否包含给定的值。是属于ES7的内容。</p>
            <pre><code>[1, 2, 3].includes(3) // true</code></pre>
            <p>该方法可以传入第二个参数，表示搜索的起始位置。indexOf方法也可以检查数组是否包含某个值：</p>
            <pre><code>if (arr.indexOf(el) !== -1) { }</code></pre>
            <p>Map结构的has方法是用来查找键名的；Set结构的has方法是用来查找值得。</p>
            <h3 class="title">数组的空位</h3>
            <p>数组的空位表示在该位置上没有任何值（不是undefined，也不是null）：</p>
            <pre><code>Array(3) // [, , ,]</code></pre>
            <p>数组实例的方法对空位的处理不统一，需要避免出现空位。</p>
            <h3 class="title">数组的推导</h3>
            <p>数组推导（array comprehension）属于ES7的内容，允许直接通过现有的数组生成新数组。</p>
            <pre><code>var a1 = [1, 2, 3, 4]
var a2 = [for(i of a1) i*2] // [2, 4, 6, 8]</code></pre>
        </div>
        <footer>2017年03月21日</footer>
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