<template>
    <div class="page article">
        <h2 class="title">你不知道的JavaScript（上卷）笔记</h2>
        <div class="content">
            <h3 class="title">作用域</h3>
            <p><strong>作用域</strong>是存储变量并如何找寻变量的规则。通常将JavaScript归为动态或解释型语言，但<strong>实际上它是一门编译语言</strong>，只是它不是提前编译，编译结果也不能移植。大部分情况下编译发生在执行前的几微秒，看起来像解释执行一样。</p>
            <p>如果RHS查询在所有嵌套的作用域中遍寻不到所需的变量，引擎就会抛出ReferenceError异常。如果执行LHS查询是，<strong>非严格模式下</strong>，如果在顶层也无法找到目标变量，全局作用域中就会创建一个具有该名称的变量。</p>
            <p><strong>严格模式下则会禁止自动或者隐式地创建全局变量。</strong></p>
            <p>作用域查找会在找到的第一个匹配的标识符时停止。</p>
            <p><strong>有两种方式可以在运行时修改词法作用域：eval和width。</strong></p>
            <p>默认的非严格模式下，如果eval中所执行的代码包含有一个或多个声明，就会对eval所处的词法作用域进行修改。</p>
            <p><strong>在严格模式中，eval在运行时有其自己的词法作用域，意味着其中的声明无法修改所在的作用域：</strong></p>
            <pre><code>function foo (str) {
    "use strict";
    eval(str);
    console.log(a); // ReferenceError
}
foo("var a=2")</code></pre>
            <p>JS中还有其他一些功能效果和eval()类似，setTimeout和setInterval的第一个参数可以是字符串，字符串的内容可以被解释为一段动态生成的代码。但这种功能已过时且不应该再使用。</p>
            <p>width通常被当做重复引用同一个对象中的多个属性的快捷方式，可以不需要重复引用对象本身。</p>
            <h3 class="title">词法作用域</h3>
        </div>
        <footer>2018年05月20日</footer>
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
