import{u as t}from"./highlight-2e3cec98.js";import{u as o}from"./catalog-69e48a3d.js";import{_ as e,b as n,c as r,l as p}from"./index-4afbb925.js";import"./article-1b647556.js";const s={setup(){t(),o()}},c={class:"article-container"},i=p(`<h2 class="article-title">你不知道的JavaScript（上卷）笔记</h2><div class="article-content"><h3 class="title">作用域</h3><p><strong>作用域</strong>是存储变量并如何找寻变量的规则。通常将JavaScript归为动态或解释型语言，但<strong>实际上它是一门编译语言</strong>，只是它不是提前编译，编译结果也不能移植。大部分情况下编译发生在执行前的几微秒，看起来像解释执行一样。</p><p>如果RHS查询在所有嵌套的作用域中遍寻不到所需的变量，引擎就会抛出ReferenceError异常。如果执行LHS查询是，<strong>非严格模式下</strong>，如果在顶层也无法找到目标变量，全局作用域中就会创建一个具有该名称的变量。</p><p><strong>严格模式下则会禁止自动或者隐式地创建全局变量。</strong></p><p>作用域查找会在找到的第一个匹配的标识符时停止。</p><p><strong>有两种方式可以在运行时修改词法作用域：eval和width。</strong></p><p>默认的非严格模式下，如果eval中所执行的代码包含有一个或多个声明，就会对eval所处的词法作用域进行修改。</p><p><strong>在严格模式中，eval在运行时有其自己的词法作用域，意味着其中的声明无法修改所在的作用域：</strong></p><pre><code>function foo (str) {
    &quot;use strict&quot;;
    eval(str);
    console.log(a); // ReferenceError
}
foo(&quot;var a=2&quot;)</code></pre><p>JS中还有其他一些功能效果和eval()类似，setTimeout和setInterval的第一个参数可以是字符串，字符串的内容可以被解释为一段动态生成的代码。但这种功能已过时且不应该再使用。</p><p>width通常被当做重复引用同一个对象中的多个属性的快捷方式，可以不需要重复引用对象本身。</p><p>width可以将一个没有或者有多个属性的对象处理为一个完全隔离的词法作用域，因此这个对象的属性也会被处理为定义在这个作用域中的词法标识符。<strong>这个块内部正常的var声明并不会被限制在这个块的作用域中，而是被添加到width所处的函数作用域中。</strong></p><p><strong>严格模式下，width被禁止使用。</strong></p><p>try-catch结构在catch分局中具有块作用域。</p><p>for循环头部的let不仅将i绑定到了for循环的块中，实际上它将重新绑定到了循环的每一个迭代中。</p><p><strong>函数声明会被提升，而函数表达式则不会。</strong></p><pre><code>foo(); // TYpeError
bar(); // ReferenceError
var foo = function bar () { }</code></pre><p><strong>函数声明和变量声明都会被提升，函数会首先被提升，然后才是变量。</strong></p><pre><code>foo(); // 1
var foo;
function foo() { console.log(1) }
foo = function() { console.log(2) }</code></pre><p>后面的函数声明可以覆盖前面的声明。</p><p><strong>闭包是基于词法作用域书写代码时所产生的自然结果。</strong></p><p>函数执行完毕之后依然持有对该作用域的引用，使得作用域不被GC回收，这个引用称之为<strong>闭包</strong>。</p><h3 class="title">this</h3><p>对于this，通常有两种误解：指向自身和指向函数的作用域。<strong>this是在运行时进行绑定的,并不是在编写时绑定,它的上下文取决于函数调用时的各种条件。this的绑定和函数声明的位置没有任何关系,只取决于函数的调用方式。</strong></p><p>在代码中插入debugger，浏览器会在那里暂停执行从而进入调试模式。</p><p><em>this的绑定规则：</em></p><p><strong>1、默认绑定</strong>：无法应用其他规则时的默认规则，非严格模式下，绑定到全局对象；严格模式下则无法使用默认绑定。</p><pre><code>function foo() {
    console.log(this.a) // 2
}
var a = 2
foo()</code></pre><p><strong>2、隐式绑定</strong>：调用位置有上下文对象，或者说被某个对象拥有。</p><p>隐式丢失的问题：</p><pre><code>function foo() { console.log(this.a) }
var obj = { a: 2, foo: foo }
var a = &#39;oop&#39;
setTimeout(obj.foo, 100) // oop</code></pre><p>此种情况下应用的是默认绑定，this绑定到全局对象或者undefined上面。</p><p><strong>3、显式绑定</strong>：使用call和apply方法，在第一个参数中传入要绑定this的对象。</p><pre><code>// 辅助绑定函数
function bind (fn, obj) {
    return function () {
        fn.apply(obj, arguments)
    }
}</code></pre><p><strong>等价于Function.prototype.bind。</strong></p><p><strong>4、new绑定</strong></p><pre><code>function foo(a) {
    this.a = a;
}
var bar = new foo(2);
console.log( bar.a ); // 2</code></pre><p>使用new来调用函数（所有函数都可以）,或者说发生<strong>构造函数</strong>调用时，会自动执行下面的操作：创建(或者说构造)一个全新的对象；这个新对象会被执行[[原型]]连接；这个新对象会绑定到函数调用的this；如果函数没有返回其他对象,那么new表达式中的函数调用会自动返回这个新对象。</p><p><em>this绑定优先级：</em></p><p><strong>new绑定 &gt; 显式绑定 &gt; 隐式绑定 &gt; 默认绑定</strong></p><p><strong>把null或者undefined作为this的绑定对象传入call、apply、bind进行显式绑定，此时应用默认绑定规则。</strong></p><p>JS中创建一个空对象的方式：<strong>Object.create(null)</strong>，一种更安全的是使用空对象进行显式绑定。</p><p><strong>间接应用函数会使用默认绑定规则：</strong></p><pre><code>function foo() { console.log(this.a) }
var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };
(p.foo = o.foo)() // 2，等价于调用foo()</code></pre><p><strong>箭头函数不使用以上this的四种判定规则，而是根据外层作用域来决定this。箭头函数的绑定无法被修改。</strong></p><pre><code>function foo () {
    return (a) =&gt; { // return a function
        console.log(this.a)
    }
}
var obj1 = { a: 2 }
var obj2 = { a: 3 }
var bar = foo.call(obj1) // 得到绑定了obj1的箭头函数
bar.call(obj2) // 2，箭头函数的绑定无法修改</code></pre><h3 class="title">对象</h3><p>要理解基本类型的字面量与之对应的装箱对象之间的关系。</p><p>在对象中，属性名都是字符串或者symbol。</p><p><strong>Object.getOwnPropertyDescriptor</strong>获取对象某个属性的描述符：</p><pre><code>Object.getOwnPropertyDescriptor(Math,&#39;abs&#39;);
// {value: ƒ abs(), writable: true, enumerable: false, configurable: true}</code></pre><p>描述符writable (决定是否可以修改属性的值)、enumerable (可枚举，控制该属性是否出现在该对象的可枚举属性中，for...in循环中是否能遍历到,in中总是可以的)和 configurable (是否可配置，是否可以使用defineProperty修改属性描述符， <strong>将configurable改成false是单向操作，不可修改，也会禁止使用delete删除这个属性</strong>)。</p><p><strong>Object.defineProperty</strong>可以为对象添加一个新属性或者修改一个已有属性，并对特性进行设置：</p><pre><code>var myObj = { b: 2 }
Object.defineProperty(myObj, &#39;a&#39;，{
    value: 1, writable: true, enumerable: true, configurable: true
})
myObj.a //1</code></pre><p><strong>对象常量：writable和configureable设置为false</strong>，对象的属性将不可修改、删除、重新定义。</p><p><strong>禁止扩展：Object.preventExtensions</strong>，禁止一个对象添加新属性。</p><p><strong>密封对象：Object.seal</strong>,实际上对该对象调用Object.preventExtensions并把所有属性的configureable标记为false。</p><p><strong>冻结对象：Object.freeze</strong>，实际上对该对象调用Object.seal并把所有属性的writeable标记为false，这样无法修改他们的值。</p><p><em>对象的getter与setter：</em>获取属性值调用的是对象的[[Get]]操作，相对应地设置属性值调用的是对象的[[Put]]操作。</p><p><em>[[Put]]操作</em>：如果已经存在这个属性，会进行如下检查：①属性是否是访问描述符，如果是并且存在setter就调用setter，②属性的数据描述符中writeable是否是false，如果是，非严格模式下静默失败，严格模式下抛出TypeError异常。③如果都不是，将该值设置为属性的值。</p><p><strong>对于访问描述符来说，JS会忽略它们的value和writeable特性，只关心set和get方法。</strong></p><p>定于getter的两种方法（setter亦类似）：</p><pre><code>var obj = {
    get a() { return 2 }
}

Object.defineProperty(obj, &#39;b&#39;, {
    get: function () { return 4 },
    enumerable: false
})

obj.a // 2
obj.b // 4</code></pre><p>hasOwnProperty会检查属性是否在对象的自有属性中，而不会检查原型链；in操作符则会检查。</p><p>propertyIsEnumerable会检查属性是否直接存在与对象中，并且满足enumerable为true；Object.keys返回一个数组，包含所有可枚举属性。</p><h3 class="title">类</h3><p><strong>类/继承描述了一种代码的组织结构形式——在软件中对真实世界中问题领域的建模方法。</strong></p><p><strong>多态</strong>：父类的通用行为可以被子类更特殊的行为重写。</p><p>JS本身不提供多重继承功能，mixin有两种类型：隐式和显式。</p><pre><code>function mixin (targetObj, sourceObj) {
    for (var key in sourceObj) {
        if (!key in targetObj) {
            targetObj[key] = sourceObj[key]
        }
    }
    return targetObj
}</code></pre><h3 class="title">原型</h3><p>JS中的对象有一个特殊的[[prototype]]内置属性，这个属性可以为空。</p><p>对于对象的[[GET]]操作，如果无法在对象自身中找到需要的属性，就会继续访问对象的[[prototype]]对象，如果原型对象非空并且也找不到这个属性的话，将会继续查找原型对象的原型对象，直到查找到这个属性或者整条原型链都找不到，将返回undefined。</p><p>for...in遍历以及in操作符都会查找对象的原型链。原型链的尽头为<strong>Object.prototye</strong>。</p><pre><code>myObj.foo = &#39;bar&#39;</code></pre><p>如果myObj对象中包含foo普通数据访问属性，这条赋值语句就会修改已有的属性值。如果foo不直接存在与myObj对象中，将会遍历原型链，如果在原型链中找不到foo，将会在myObj中添加新属性foo，并赋值。</p><p>如果在原型链找到foo，将分以下几种情况：</p><p>1、原型链上层的foo没有被标记为只读（writeable为false），那就会直接在myObj上添加新属性foo；</p><p>2、原型链上层的foo被标记为只读（writeable为true），那么无法修改已有属性或者创建新属性foo；</p><p><strong>3、原型链上层存在foo并且是一个setter，那就一定会调用这个setter。</strong></p><p>如果想在第二三种情况下屏蔽foo，那就不能使用=来进行赋值，可以使用<strong>Object.defineProperty</strong>方法来添加属性。</p><p>new函数原型关联：</p><pre><code>function Foo () { ... }
var a = new Foo()
Object.getPrototypeOf(a) === Foo.prototype</code></pre><p><strong>调用new Foo()时会创建a，其中的一步就是给a一个内部的[[Prototype]]链接,关联到Foo.prototype指向的那个对象。</strong></p><p>继承意味着复制操作，JS并不会复制对象属性，JS只是在两个对象之间创建一个关联。这样一个对象就可以通过 <strong>委托</strong>访问另外一个对象的属性或者函数。</p><p><em>构造函数constructor</em></p><pre><code>function Foo () { ... }
Foo.prototype.constructor === Foo // true
var a = new Foo()
a.constructor === Foo // true，此处其实是a.prototype.constructor = Foo.prototype.constructor导致</code></pre><p><strong>当且仅当使用new时，函数调用会变成&quot;构造函数调用&quot;。</strong></p><p><strong>对象的.constructor（不可枚举，但可以被修改的属性）会默认指向一个函数，这个函数可以通过对象的.prototype引用。</strong></p><p>Bar继承Foo的两种实现：</p><pre><code>function Foo () { ... }
function Bar () { ... }
Bar.prototype = Object.create(Foo.prototype) // 方法一
Object.setPrototypeOf(Bar.prototype,Foo.prototype) // 方法二，ES6新增的方法</code></pre><p>Object.create的polyfill代码：</p><pre><code>if (!Object.create) {
    Object.create = function (o) {
        function F() {}
        F.prototype = o
        return new F()
    }
}</code></pre><p><strong>对象之间的关系不是复制而是委托。</strong></p><h3 class="title">行为委托</h3><p>原型链代表的是一种不同于类的设计模式。 <strong>委托意味着某些对象在找不到属性或者方法时会把请求委托给另外一个对象。</strong></p><p>实现Button组件继承Widget的三种方法</p><p>① 使用prototype实现的继承：</p><pre><code>// 父类
function Widget(width, height){
    this.width = width || 50
    this.height = height || 100
}
Widget.prototype.render = function () { ... }

// 子类
function Button(width, height, label) {
    // 调用父类函数
    Widget.call(this,width,height)
    this.label = label || &#39;btn&#39;
}

// 让Button继承Widget
Button.prototype = Object.create(Widget.prototype)
Button.prototype.onClick = function () { ... }

// 实例
var btn1 = new Button(10,20,&#39;btn1&#39;)
var btn2 = new Button(10,20,&#39;btn2&#39;)</code></pre><p>② class的写法：</p><pre><code>class Widget {
    constructor (width, height) {
        this.width = width || 50
        this.height = height || 100
    }
    render() { ... }
}

class Button extends Widget {
    constructor (width, height, label) {
        super(width,height)
        this.label = label || &#39;btn&#39;
    }
    render () { ... }
    onClick () { ... }
}

// 实例
var btn1 = new BUtton(10,20,&#39;btn1&#39;)
var btn2 = new BUtton(10,20,&#39;btn2&#39;)</code></pre><p>③ 委托的形式：</p><pre><code>var Widget = {
    init: function (width,height) {
        this.width = width
        this.height = height
    },
    render: function () { ... }
}

var Button=Object.create(Widget)
Button.setup = function (width,height,label) {
    this.init(width,height)
    this.label = label || &#39;btn&#39;
}
Button.onClick = function () { ... }

// 实例
var btn1 = Object.create(Button)
btn1.setup(10,20,&#39;btn1&#39;)
var btn2 = Object.create(Button)
btn2.setup(10,20,&#39;btn2&#39;)</code></pre></div><footer>2018年05月20日</footer>`,3),a=[i];function g(l,b,u,f,d,h){return n(),r("div",c,a)}const O=e(s,[["render",g]]);export{O as default};
