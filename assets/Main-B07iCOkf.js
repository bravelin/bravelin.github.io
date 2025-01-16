import{_ as o,m as r,p as u,h as p,o as a,e as n,q as l}from"./index-CB7K47Ib.js";const i={};function s(c,t){const e=p("MyArticle");return a(),r(e,{title:"你不知道的JavaScript（上卷）笔记",date:"2018年05月20日"},{default:u(()=>t[0]||(t[0]=[n("div",{class:"_article-content"},[n("h3",{class:"title"},"作用域"),n("p",null,[n("strong",null,"作用域"),l("是存储变量并如何找寻变量的规则。通常将JavaScript归为动态或解释型语言，但"),n("strong",null,"实际上它是一门编译语言"),l("，只是它不是提前编译，编译结果也不能移植。大部分情况下编译发生在执行前的几微秒，看起来像解释执行一样。")]),n("p",null,[l("如果RHS查询在所有嵌套的作用域中遍寻不到所需的变量，引擎就会抛出ReferenceError异常。如果执行LHS查询是，"),n("strong",null,"非严格模式下"),l("，如果在顶层也无法找到目标变量，全局作用域中就会创建一个具有该名称的变量。")]),n("p",null,[n("strong",null,"严格模式下则会禁止自动或者隐式地创建全局变量。")]),n("p",null,"作用域查找会在找到的第一个匹配的标识符时停止。"),n("p",null,[n("strong",null,"有两种方式可以在运行时修改词法作用域：eval和width。")]),n("p",null,"默认的非严格模式下，如果eval中所执行的代码包含有一个或多个声明，就会对eval所处的词法作用域进行修改。"),n("p",null,[n("strong",null,"在严格模式中，eval在运行时有其自己的词法作用域，意味着其中的声明无法修改所在的作用域：")]),n("pre",null,[n("code",null,`function foo (str) {
    "use strict";
    eval(str);
    console.log(a); // ReferenceError
}
foo("var a=2")`)]),n("p",null,"JS中还有其他一些功能效果和eval()类似，setTimeout和setInterval的第一个参数可以是字符串，字符串的内容可以被解释为一段动态生成的代码。但这种功能已过时且不应该再使用。"),n("p",null,"width通常被当做重复引用同一个对象中的多个属性的快捷方式，可以不需要重复引用对象本身。"),n("p",null,[l("width可以将一个没有或者有多个属性的对象处理为一个完全隔离的词法作用域，因此这个对象的属性也会被处理为定义在这个作用域中的词法标识符。"),n("strong",null,"这个块内部正常的var声明并不会被限制在这个块的作用域中，而是被添加到width所处的函数作用域中。")]),n("p",null,[n("strong",null,"严格模式下，width被禁止使用。")]),n("p",null,"try-catch结构在catch分局中具有块作用域。"),n("p",null,"for循环头部的let不仅将i绑定到了for循环的块中，实际上它将重新绑定到了循环的每一个迭代中。"),n("p",null,[n("strong",null,"函数声明会被提升，而函数表达式则不会。")]),n("pre",null,[n("code",null,`foo(); // TYpeError
bar(); // ReferenceError
var foo = function bar () { }`)]),n("p",null,[n("strong",null,"函数声明和变量声明都会被提升，函数会首先被提升，然后才是变量。")]),n("pre",null,[n("code",null,`foo(); // 1
var foo;
function foo() { console.log(1) }
foo = function() { console.log(2) }`)]),n("p",null,"后面的函数声明可以覆盖前面的声明。"),n("p",null,[n("strong",null,"闭包是基于词法作用域书写代码时所产生的自然结果。")]),n("p",null,[l("函数执行完毕之后依然持有对该作用域的引用，使得作用域不被GC回收，这个引用称之为"),n("strong",null,"闭包"),l("。")]),n("h3",{class:"title"},"this"),n("p",null,[l("对于this，通常有两种误解：指向自身和指向函数的作用域。"),n("strong",null,"this是在运行时进行绑定的,并不是在编写时绑定,它的上下文取决于函数调用时的各种条件。this的绑定和函数声明的位置没有任何关系,只取决于函数的调用方式。")]),n("p",null,"在代码中插入debugger，浏览器会在那里暂停执行从而进入调试模式。"),n("p",null,[n("em",null,"this的绑定规则：")]),n("p",null,[n("strong",null,"1、默认绑定"),l("：无法应用其他规则时的默认规则，非严格模式下，绑定到全局对象；严格模式下则无法使用默认绑定。")]),n("pre",null,[n("code",null,`function foo() {
    console.log(this.a) // 2
}
var a = 2
foo()`)]),n("p",null,[n("strong",null,"2、隐式绑定"),l("：调用位置有上下文对象，或者说被某个对象拥有。")]),n("p",null,"隐式丢失的问题："),n("pre",null,[n("code",null,`function foo() { console.log(this.a) }
var obj = { a: 2, foo: foo }
var a = 'oop'
setTimeout(obj.foo, 100) // oop`)]),n("p",null,"此种情况下应用的是默认绑定，this绑定到全局对象或者undefined上面。"),n("p",null,[n("strong",null,"3、显式绑定"),l("：使用call和apply方法，在第一个参数中传入要绑定this的对象。")]),n("pre",null,[n("code",null,`// 辅助绑定函数
function bind (fn, obj) {
    return function () {
        fn.apply(obj, arguments)
    }
}`)]),n("p",null,[n("strong",null,"等价于Function.prototype.bind。")]),n("p",null,[n("strong",null,"4、new绑定")]),n("pre",null,[n("code",null,`function foo(a) {
    this.a = a;
}
var bar = new foo(2);
console.log( bar.a ); // 2`)]),n("p",null,[l("使用new来调用函数（所有函数都可以）,或者说发生"),n("strong",null,"构造函数"),l("调用时，会自动执行下面的操作：创建(或者说构造)一个全新的对象；这个新对象会被执行[[原型]]连接；这个新对象会绑定到函数调用的this；如果函数没有返回其他对象,那么new表达式中的函数调用会自动返回这个新对象。")]),n("p",null,[n("em",null,"this绑定优先级：")]),n("p",null,[n("strong",null,"new绑定 > 显式绑定 > 隐式绑定 > 默认绑定")]),n("p",null,[n("strong",null,"把null或者undefined作为this的绑定对象传入call、apply、bind进行显式绑定，此时应用默认绑定规则。")]),n("p",null,[l("JS中创建一个空对象的方式："),n("strong",null,"Object.create(null)"),l("，一种更安全的是使用空对象进行显式绑定。")]),n("p",null,[n("strong",null,"间接应用函数会使用默认绑定规则：")]),n("pre",null,[n("code",null,`function foo() { console.log(this.a) }
var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };
(p.foo = o.foo)() // 2，等价于调用foo()`)]),n("p",null,[n("strong",null,"箭头函数不使用以上this的四种判定规则，而是根据外层作用域来决定this。箭头函数的绑定无法被修改。")]),n("pre",null,[n("code",null,`function foo () {
    return (a) => { // return a function
        console.log(this.a)
    }
}
var obj1 = { a: 2 }
var obj2 = { a: 3 }
var bar = foo.call(obj1) // 得到绑定了obj1的箭头函数
bar.call(obj2) // 2，箭头函数的绑定无法修改`)]),n("h3",{class:"title"},"对象"),n("p",null,"要理解基本类型的字面量与之对应的装箱对象之间的关系。"),n("p",null,"在对象中，属性名都是字符串或者symbol。"),n("p",null,[n("strong",null,"Object.getOwnPropertyDescriptor"),l("获取对象某个属性的描述符：")]),n("pre",null,[n("code",null,`Object.getOwnPropertyDescriptor(Math,'abs');
// {value: ƒ abs(), writable: true, enumerable: false, configurable: true}`)]),n("p",null,[l("描述符writable (决定是否可以修改属性的值)、enumerable (可枚举，控制该属性是否出现在该对象的可枚举属性中，for...in循环中是否能遍历到,in中总是可以的)和 configurable (是否可配置，是否可以使用defineProperty修改属性描述符， "),n("strong",null,"将configurable改成false是单向操作，不可修改，也会禁止使用delete删除这个属性"),l(")。")]),n("p",null,[n("strong",null,"Object.defineProperty"),l("可以为对象添加一个新属性或者修改一个已有属性，并对特性进行设置：")]),n("pre",null,[n("code",null,`var myObj = { b: 2 }
Object.defineProperty(myObj, 'a'，{
    value: 1, writable: true, enumerable: true, configurable: true
})
myObj.a //1`)]),n("p",null,[n("strong",null,"对象常量：writable和configureable设置为false"),l("，对象的属性将不可修改、删除、重新定义。")]),n("p",null,[n("strong",null,"禁止扩展：Object.preventExtensions"),l("，禁止一个对象添加新属性。")]),n("p",null,[n("strong",null,"密封对象：Object.seal"),l(",实际上对该对象调用Object.preventExtensions并把所有属性的configureable标记为false。")]),n("p",null,[n("strong",null,"冻结对象：Object.freeze"),l("，实际上对该对象调用Object.seal并把所有属性的writeable标记为false，这样无法修改他们的值。")]),n("p",null,[n("em",null,"对象的getter与setter："),l("获取属性值调用的是对象的[[Get]]操作，相对应地设置属性值调用的是对象的[[Put]]操作。")]),n("p",null,[n("em",null,"[[Put]]操作"),l("：如果已经存在这个属性，会进行如下检查：①属性是否是访问描述符，如果是并且存在setter就调用setter，②属性的数据描述符中writeable是否是false，如果是，非严格模式下静默失败，严格模式下抛出TypeError异常。③如果都不是，将该值设置为属性的值。")]),n("p",null,[n("strong",null,"对于访问描述符来说，JS会忽略它们的value和writeable特性，只关心set和get方法。")]),n("p",null,"定于getter的两种方法（setter亦类似）："),n("pre",null,[n("code",null,`var obj = {
    get a() { return 2 }
}

Object.defineProperty(obj, 'b', {
    get: function () { return 4 },
    enumerable: false
})

obj.a // 2
obj.b // 4`)]),n("p",null,"hasOwnProperty会检查属性是否在对象的自有属性中，而不会检查原型链；in操作符则会检查。"),n("p",null,"propertyIsEnumerable会检查属性是否直接存在与对象中，并且满足enumerable为true；Object.keys返回一个数组，包含所有可枚举属性。"),n("h3",{class:"title"},"类"),n("p",null,[n("strong",null,"类/继承描述了一种代码的组织结构形式——在软件中对真实世界中问题领域的建模方法。")]),n("p",null,[n("strong",null,"多态"),l("：父类的通用行为可以被子类更特殊的行为重写。")]),n("p",null,"JS本身不提供多重继承功能，mixin有两种类型：隐式和显式。"),n("pre",null,[n("code",null,`function mixin (targetObj, sourceObj) {
    for (var key in sourceObj) {
        if (!key in targetObj) {
            targetObj[key] = sourceObj[key]
        }
    }
    return targetObj
}`)]),n("h3",{class:"title"},"原型"),n("p",null,"JS中的对象有一个特殊的[[prototype]]内置属性，这个属性可以为空。"),n("p",null,"对于对象的[[GET]]操作，如果无法在对象自身中找到需要的属性，就会继续访问对象的[[prototype]]对象，如果原型对象非空并且也找不到这个属性的话，将会继续查找原型对象的原型对象，直到查找到这个属性或者整条原型链都找不到，将返回undefined。"),n("p",null,[l("for...in遍历以及in操作符都会查找对象的原型链。原型链的尽头为"),n("strong",null,"Object.prototye"),l("。")]),n("pre",null,[n("code",null,"myObj.foo = 'bar'")]),n("p",null,"如果myObj对象中包含foo普通数据访问属性，这条赋值语句就会修改已有的属性值。如果foo不直接存在与myObj对象中，将会遍历原型链，如果在原型链中找不到foo，将会在myObj中添加新属性foo，并赋值。"),n("p",null,"如果在原型链找到foo，将分以下几种情况："),n("p",null,"1、原型链上层的foo没有被标记为只读（writeable为false），那就会直接在myObj上添加新属性foo；"),n("p",null,"2、原型链上层的foo被标记为只读（writeable为true），那么无法修改已有属性或者创建新属性foo；"),n("p",null,[n("strong",null,"3、原型链上层存在foo并且是一个setter，那就一定会调用这个setter。")]),n("p",null,[l("如果想在第二三种情况下屏蔽foo，那就不能使用=来进行赋值，可以使用"),n("strong",null,"Object.defineProperty"),l("方法来添加属性。")]),n("p",null,"new函数原型关联："),n("pre",null,[n("code",null,`function Foo () { ... }
var a = new Foo()
Object.getPrototypeOf(a) === Foo.prototype`)]),n("p",null,[n("strong",null,"调用new Foo()时会创建a，其中的一步就是给a一个内部的[[Prototype]]链接,关联到Foo.prototype指向的那个对象。")]),n("p",null,[l("继承意味着复制操作，JS并不会复制对象属性，JS只是在两个对象之间创建一个关联。这样一个对象就可以通过"),n("strong",null,"委托"),l("访问另外一个对象的属性或者函数。")]),n("p",null,[n("em",null,"构造函数constructor")]),n("pre",null,[n("code",null,`function Foo () { ... }
Foo.prototype.constructor === Foo // true
var a = new Foo()
a.constructor === Foo // true，此处其实是a.prototype.constructor = Foo.prototype.constructor导致`)]),n("p",null,[n("strong",null,'当且仅当使用new时，函数调用会变成"构造函数调用"。')]),n("p",null,[n("strong",null,"对象的.constructor（不可枚举，但可以被修改的属性）会默认指向一个函数，这个函数可以通过对象的.prototype引用。")]),n("p",null,"Bar继承Foo的两种实现："),n("pre",null,[n("code",null,`function Foo () { ... }
function Bar () { ... }
Bar.prototype = Object.create(Foo.prototype) // 方法一
Object.setPrototypeOf(Bar.prototype,Foo.prototype) // 方法二，ES6新增的方法`)]),n("p",null,"Object.create的polyfill代码："),n("pre",null,[n("code",null,`if (!Object.create) {
    Object.create = function (o) {
        function F() {}
        F.prototype = o
        return new F()
    }
}`)]),n("p",null,[n("strong",null,"对象之间的关系不是复制而是委托。")]),n("h3",{class:"title"},"行为委托"),n("p",null,[l("原型链代表的是一种不同于类的设计模式。"),n("strong",null,"委托意味着某些对象在找不到属性或者方法时会把请求委托给另外一个对象。")]),n("p",null,"实现Button组件继承Widget的三种方法"),n("p",null,"① 使用prototype实现的继承："),n("pre",null,[n("code",null,`// 父类
function Widget(width, height){
    this.width = width || 50
    this.height = height || 100
}
Widget.prototype.render = function () { ... }

// 子类
function Button(width, height, label) {
    // 调用父类函数
    Widget.call(this,width,height)
    this.label = label || 'btn'
}

// 让Button继承Widget
Button.prototype = Object.create(Widget.prototype)
Button.prototype.onClick = function () { ... }

// 实例
var btn1 = new Button(10,20,'btn1')
var btn2 = new Button(10,20,'btn2')`)]),n("p",null,"② class的写法："),n("pre",null,[n("code",null,`class Widget {
    constructor (width, height) {
        this.width = width || 50
        this.height = height || 100
    }
    render() { ... }
}

class Button extends Widget {
    constructor (width, height, label) {
        super(width,height)
        this.label = label || 'btn'
    }
    render () { ... }
    onClick () { ... }
}

// 实例
var btn1 = new BUtton(10,20,'btn1')
var btn2 = new BUtton(10,20,'btn2')`)]),n("p",null,"③ 委托的形式："),n("pre",null,[n("code",null,`var Widget = {
    init: function (width,height) {
        this.width = width
        this.height = height
    },
    render: function () { ... }
}

var Button=Object.create(Widget)
Button.setup = function (width,height,label) {
    this.init(width,height)
    this.label = label || 'btn'
}
Button.onClick = function () { ... }

// 实例
var btn1 = Object.create(Button)
btn1.setup(10,20,'btn1')
var btn2 = Object.create(Button)
btn2.setup(10,20,'btn2')`)])],-1)])),_:1})}const f=o(i,[["render",s]]);export{f as default};
