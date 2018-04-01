<template>
    <div class="page article">
        <h2 class="title">《ES6标准入门》笔记之一：let与const命令</h2>
        <div class="content">
            <p>ECMAScript 6（ES6）是JavaScript语言的下一代标准，2015年6月正式发布。计划以后每年发布一次标准，ES6又称ECMAScript 2015.</p>
            <p><strong>ECMAScript和JavaScript的关系：一个是国际标准，一个是标准的实现。</strong></p>
            <p>2013年3月，ES6草案封闭，不再接受新的功能。新功能将被加入ES7。</p>
            <p>向TC39提交的提案，变成正式标准需要经历5个阶段：<strong>Strawman（展示阶段）、Proposal（征求意见阶段）、Draft（草案阶段）、Candidate（候选阶段）、Finished（定案阶段）。</strong></p>
            <h3 class="title">let命令</h3>
            <p>用于声明变量，作用类似var，但只在let变量的代码块内有效。</p>
            <p>for循环的计数器，很适合使用let命令：for(let i = 0; i < len; i++) {}</p>
            <p><strong>不存在变量提升：</strong>变量必须先声明后使用，否则报错。</p>
            <p><strong>暂时性死区：</strong>只要块级作用域内存在let命令，它所声明的变量就“绑定”在这个区域，不受外部的影响。此时变量已存在，但不可获取。只有在声明之后才可使用。</p>
            <pre><code>var tmp = 123
if (true) {
    tmp = 234 // 报错 ReferenceError
    let tmp
}</code></pre>
            <p><strong>在代码块内，使用let、const声明变量之前，该变量都是不可用的，语法上称之为“暂时性死区”。</strong></p>
            <p>let不允许在相同的作用域内重复声明同一个变量。</p>
            <h3 class="title">块级作用域</h3>
            <p>let为JavaScript新增了块级作用域：</p>
            <pre><code>function f1() {
    let n = 5
    if (true) {
        let n = 10 // 内层块，不影响外部
    }
    console.log(n) // 5
}</code></pre>
            <p>ES6允许块级作用域任意嵌套，外层作用域无法读取内层变量，内层作用域可以定义外层作用域同名的变量。</p>
            <p>在ES5中，函数声明会提升到当前作用域的顶部得到执行。ES6支持块级作用域，内部声明的函数不会影响到外部。<i>（书中的例子好像有问题）</i></p>
            <p>在严格模式下，函数只能在顶层作用域内和函数内声明，其他情况下（if代码块、循环代码块）声明都会报错。</p>
            <h3 class="title">const命令</h3>
            <p>const用来声明变量。<strong>一旦声明，其值就不能改变。</strong>意味着必须立即初始化，不能在以后赋值。</p>
            <p>const的作用域与let相同，只在声明所在的块级作用域内有效。</p>
            <p>对于复合类型的变量，变量名不指向数据，而是指向数据所在的地址。<strong>const命令只是保证地址不变，数据是可变的。</strong></p>
            <p>如果想将对象冻结，可以使用Object.freeze方法。除了将对象冻结，也可以将属性冻结。</p>
            <p>利用递归彻底冻结一个对象：</p>
            <pre><code>var constantize = (obj) => {
    Object.freeze(obj)
    Object.keys(obj).forEach( (key, value) => {
        if (typeof obj[key] === 'object') {
            constantize(obj[key])
        }
    })
}</code></pre>
            <p>ES6一共有6种声明变量的方法：var、function、let、const、import、class</p>
            <h3 class="title">跨模块常量</h3>
            <p>const声明的变量只在当前代码块有效，跨模块常量可以如下设置：</p>
            <pre><code>// constants.js
export const A = 1
export const B = 2

// test1.js
import * as constants from './constants'
console.log(constants.A)
console.log(constants.A)

// test2.js
import {A, B} from './constants'
console.log(A)
console.log(B)</code></pre>
            <p><strong>全局对象在浏览器环境中是window对象，在node.js中是global对象。</strong></p>
        </div>
        <footer>2017年03月08日</footer>
        <comments></comments>
        <Catalog :catalog="catalog"></Catalog>
    </div>
</template>
<script>
    import Page from '../../page'
    export default {
        extends: Page
    }
</script>