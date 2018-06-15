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
            <p>width可以将一个没有或者有多个属性的对象处理为一个完全隔离的词法作用域，因此这个对象的属性也会被处理为定义在这个作用域中的词法标识符。<strong>这个块内部正常的var声明并不会被限制在这个块的作用域中，而是被添加到width所处的函数作用域中。</strong></p>
            <p><strong>严格模式下，width被禁止使用。</strong></p>
            <p>try-catch结构在catch分局中具有块作用域。</p>
            <p>for循环头部的let不仅将i绑定到了for循环的块中，实际上它将重新绑定到了循环的每一个迭代中。</p>
            <p><strong>函数声明会被提升，而函数表达式则不会。</strong></p>
            <pre><code>foo(); // TYpeError
bar(); // ReferenceError
var foo = function bar () { }</code></pre>
            <p><strong>函数声明和变量声明都会被提升，函数会首先被提升，然后才是变量。</strong></p>
            <pre><code>foo(); // 1
var foo;
function foo() { console.log(1) }
foo = function() { console.log(2) }</code></pre>
            <p>后面的函数声明可以覆盖前面的声明。</p>
            <p><strong>闭包是基于词法作用域书写代码时所产生的自然结果。</strong></p>
            <p>函数执行完毕之后依然持有对该作用域的引用，使得作用域不被GC回收，这个引用称之为<strong>闭包</strong>。</p>
            <h3 class="title">this</h3>
            <p>对于this，通常有两种误解：指向自身和指向函数的作用域。<strong>this是在运行时进行绑定的,并不是在编写时绑定,它的上下文取决于函数调用时的各种条件。this的绑定和函数声明的位置没有任何关系,只取决于函数的调用方式。</strong></p>
            <p>在代码中插入debugger，浏览器会在那里暂停执行从而进入调试模式。</p>
            <p><em>this的绑定规则：</em></p>
            <p><strong>1、默认绑定</strong>：无法应用其他规则时的默认规则，非严格模式下，绑定到全局对象；严格模式下则无法使用默认绑定。</p>
            <pre><code>function foo() {
    console.log(this.a) // 2
}
var a = 2
foo()</code></pre>
            <p><strong>2、隐式绑定</strong>：调用位置有上下文对象，或者说被某个对象拥有。</p>
            <p>隐式丢失的问题：</p>
            <pre><code>function foo() { console.log(this.a) }
var obj = { a: 2, foo: foo }
var a = 'oop'
setTimeout(obj.foo, 100) // oop</code></pre>
            <p>此种情况下应用的是默认绑定，this绑定到全局对象或者undefined上面。</p>
            <p><strong>3、显式绑定</strong>：使用call和apply方法，在第一个参数中传入要绑定this的对象。</p>
            <pre><code>// 辅助绑定函数
function bind (fn, obj) {
    return function () {
        fn.apply(obj, arguments)
    }
}</code></pre>
            <p><strong>等价于Function.prototype.bind。</strong></p>
            <p><strong>4、new绑定</strong></p>
            <pre><code>function foo(a) {
    this.a = a;
}
var bar = new foo(2);
console.log( bar.a ); // 2</code></pre>
            <p>使用new来调用函数（所有函数都可以）,或者说发生<strong>构造函数</strong>调用时，会自动执行下面的操作：创建(或者说构造)一个全新的对象；这个新对象会被执行[[原型]]连接；这个新对象会绑定到函数调用的this；如果函数没有返回其他对象,那么new表达式中的函数调用会自动返回这个新对象。</p>
            <p><em>this绑定优先级：</em></p>
            <p><strong>new绑定 > 显式绑定 > 隐式绑定 > 默认绑定</strong></p>
            <p><strong>把null或者undefined作为this的绑定对象传入call、apply、bind进行显式绑定，此时应用默认绑定规则。</strong></p>
            <p>JS中创建一个空对象的方式：<strong>Object.create(null)</strong>，一种更安全的是使用空对象进行显式绑定。</p>
            <p><strong>间接应用函数会使用默认绑定规则：</strong></p>
            <pre><code>function foo() { console.log(this.a) }
var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };
(p.foo = o.foo)() // 2，等价于调用foo()</code></pre>
            <p><strong>箭头函数不使用以上this的四种判定规则，而是根据外层作用域来决定this。箭头函数的绑定无法被修改。</strong></p>
            <pre><code>function foo () {
    return (a) => { // return a function
        console.log(this.a)
    }
}
var obj1 = { a: 2 }
var obj2 = { a: 3 }
var bar = foo.call(obj1) // 得到绑定了obj1的箭头函数
bar.call(obj2) // 2，箭头函数的绑定无法修改</code></pre>
            <h3 class="title">对象</h3>
            <p>要理解基本类型的字面量与之对应的装箱对象之间的关系。</p>
            <p>在对象中，属性名都是字符串或者symbol。</p>
            <p><strong>Object.getOwnPropertyDescriptor</strong>获取对象某个属性的描述符：</p>
            <pre><code>Object.getOwnPropertyDescriptor(Math,'abs');
// {value: ƒ abs(), writable: true, enumerable: false, configurable: true}</code></pre>
            <p>描述符writable (决定是否可以修改属性的值)、enumerable (可枚举，控制该属性是否出现在该对象的可枚举属性中，for...in循环中是否能遍历到)和 configurable (是否可配置，是否可以使用defineProperty修改属性描述符，<strong>将configurable改成false是单向操作，不可修改，也会禁止使用delete删除这个属性</strong>)。</p>
            <p><strong>Object.defineProperty</strong>可以为对象添加一个新属性或者修改一个已有属性，并对特性进行设置：</p>
            <pre><code>var myObj = { b: 2 }
Object.defineProperty(myObj, 'a'，{
    value: 1, writable: true, enumerable: true, configurable: true
})
myObj.a //1</code></pre>
            <p><strong>对象常量：writable和configureable设置为false</strong>，对象的属性将不可修改、删除、重新定义。</p>
            <p><strong>禁止扩展：Object.preventExtensions</strong>，禁止一个对象添加新属性。</p>
            <p><strong>密封对象：Object.seal</strong>,实际上对该对象调用Object.preventExtensions并把所有属性的configureable标记为false。</p>
            <p><strong>冻结对象：Object.freeze</strong>，实际上对该对象调用Object.seal并把所有属性的writeable标记为false，这样无法修改他们的值。</p>
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
