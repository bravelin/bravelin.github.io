<template>
    <div class="page article">
        <h2 class="title">《ES6标准入门》笔记之二：变量的解构赋值</h2>
        <div class="content">
            <h3 class="title">数组的解构赋值</h3>
            <p><strong>Destructuring</strong>：按照一定模式，从数组和对象中提取值，对变量进行赋值，称之为解构。</p>
            <pre><code>var [a, b, c] = [1, 2, 3]

var [a, ...b] = [1, 2, 3, 4]
console.log(a) // 1
console.log(b) // [2, 3, 4]</code></pre>
            <p>上面按照位置的对应关系对变量赋值。这种写法属于<strong>模式匹配</strong>，只要等号两边的模式相同，左边的变量就会被赋予对应的值。</p>
            <p>如果解构不成功，变量的值为undefined。不完全解构也是支持的。</p>
            <pre><code>let [x, y] = [1, 2, 3]</code></pre>
            <p>如果等号的右边不是数组（不是可遍历的结构），那么将会报错。</p>
            <p>对于Set结构以及具有Iterator接口的数据结构，也可以使用数组的解构赋值：</p>
            <pre><code>let [x, y, z] = new Set(['a', 'b', 'c'])</code></pre>
            <p><strong>解构赋值允许指定默认值：</strong>当相应的位置值严格等于undefined时，变量值取默认值。</p>
            <pre><code>[x, y = 'b'] = ['a', undefined] // x = 'a'  y = 'b'
[x = 1] = [null] // x = null</code></pre>
            <p>如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候才会求值。</p>
            <p>默认值可以引用解构赋值的其他变量，但该变量必须已经赋值：</p>
            <pre><code>let [x = 1, y = x] = [] // x=1; y=1
let [x = 1, y = x] = [2] // x=2; y=2</code></pre>
            <h3 class="title">对象的解构赋值</h3>
            <p>对象的解构相同的属性名为依据获取正确的值，未能获取则值为undefined：</p>
            <pre><code>var { foo, bar } = { foo: '111', bar: '222' } // foo = '111' bar = '222'</code></pre>
            <p>上式真正的形式为：</p>
            <pre><code>var { foo: foo, bar: bar } = { foo: '111', bar: '222' } // foo = '111' bar = '222'</code></pre>
            <p>其内部机制是先找到同名属性，然后再赋值给对应的变量。真正被赋值的不是属性，而是变量。</p>
            <p>和数组一样，解构也可用于嵌套结构的对象。</p>
            <pre><code>let obj = {}
let arr = []
({ foo : obj.prop, bar : arr[0] } = { foo: 123, bar: true } ) // obj = { prop: 123 }  arr = [true]</code></pre>
            <p>对象的解构也可以指定默认值，条件是对象的属性值严格等于undefined。</p>
            <p>未能成功解构，对象的值为undefined。</p>
            <p>如果将一个已经声明的变量用于解构赋值，必须非常小心：</p>
            <pre><code>// 错误的写法
var x
{ x } = { x: 1 }

// 正确的写法
({ x } = { x: 1 })</code></pre>
            <p>对象的解构赋值可以将现有对象的方法赋值到某个变量：let { sin, cos, log } = Math</p>
            <h3 class="title">字符串的解构赋值</h3>
            <p>字符串也可以解构赋值，此时字符串被转换成了一个类似数组的对象：</p>
            <pre><code>const [a, b, c, d, e] = 'hello'
a // 'h'
b // 'e'</code></pre>
            <p>类似数组的对象都有length属性，可以对这个属性进行解构赋值：</p>
            <pre><code>let { length: len } = 'hello'
len // 5</code></pre>
            <h3 class="title">数值和布尔值的解构赋值</h3>
            <p>如果等号右边的是数值或者布尔值，则会先转换成对象：</p>
            <pre><code>let { toString: s } = 123
s === Number.prototype.toString // true

let { toString: s } = true
s === Boolean.prototype.toString // true
            </code></pre>
            <p><strong>解构赋值的规则是，只要等号右边的值不是对象，则会先转换成对象。undefined和null无法转换成对象，所以对它们的解构赋值都会报错。</strong></p>
            <h3 class="title">函数参数的解构赋值</h3>
            <p>函数的参数也可以解构赋值：</p>
            <pre><code>[[1, 2], [3, 4]].map(([a, b] => a+b)) // [3, 7]</code></pre>
            <p>也可以使用默认值：</p>
            <pre><code>function move({x = 0, y = 0} = {}) { return [x, y] }
move({ x: 3, y: 8}) // [3, 8]
move({ x: 3}) // [3, 0]</code></pre>
            <p>参数是一个对象，对这个对象进行解构，得到变量x和y的值。如果解构失败，则x和y等于默认值。</p>
            <p>下面的写法为参数指定默认值，而不是为变量x和y指定默认值，注意区分写法：</p>
            <pre><code>function move({ x, y } = { x: 0, y: 0 }) { return [x, y] }
move({x: 3, y: 8}) // [3, 8]
move({x: 3}) // [3, undefined]
move() // [0,0]</code></pre>
            <p><strong>undefined会触发函数参数的默认值。</strong></p>
            <h3 class="title">圆括号的问题</h3>
            <p>ES6的规则是，只要有可能导致解构奇异，就不得使用圆括号。不能使用圆括号的情况：</p>
            <p><strong>1、变量声明语句中，模式不能带有圆括号；</strong></p>
            <p><strong>2、函数参数中，模式不能带有圆括号；</strong></p>
            <p><strong>3、不能将整个模式或者嵌套模式中的一层放在括号中；</strong></p>
            <p>可以使用圆括号的情况：<strong>赋值语句的非模式部分可以使用圆括号：</strong></p>
            <h3 class="title">用途</h3>
            <p><strong>1、交换变量的值：[x, y] = [y, x]</strong></p>
            <p><strong>2、从函数返回多个值</strong></p>
            <pre><code>function exp() { return [1, 2, 3] }
var [a, b, c] = exp()</code></pre>
            <p><strong>3、函数参数的定义</strong></p>
            <pre><code>function f([x, y, z]) { ... }
f([1, 2, 3])

function f({x, y, z}) { ... }
f({ x: 1, y: 2, z: 3 })</code></pre>
            <p><strong>4、提取JSON数据对象</strong></p>
            <p><strong>5、函数参数的默认值</strong></p>
            <p><strong>6、遍历Map结构：</strong></p>
            <pre><code>var map = new Map()
map.set('first', 'hello')
map.set('second', 'world')
for(let [key, value] of map) { console.log(key + ' is ' +value) }</code></pre>
            <p><strong>7、输入模块的指定方法：</strong></p>
            <pre><code>const { SourceNode } = require('source-map')</code></pre>
        </div>
        <footer>2017年03月09日</footer>
        <comments></comments>
    </div>
</template>
<script>
    import Page from '../../page'
    export default {
        extends: Page
    }
</script>
