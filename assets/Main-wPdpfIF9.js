import{_ as t,q as r,s as u,h as s,o as a,e as n,x as l}from"./index-5cTkXVTa.js";const p={};function c(i,e){const o=s("MyArticle");return a(),r(o,{title:"你不知道的JavaScript（下卷）笔记",date:"2018年06月09日"},{default:u(()=>e[0]||(e[0]=[n("div",{class:"_article-content"},[n("p",null,"下册主要讲解的是一些基础概念及ES6语法，个人以为应该放到这部书系列的第一本来读比较好。"),n("h3",{class:"title"},"基础"),n("p",null,[l("基本上可以说JavaScript是 "),n("strong",null,"解释型"),l("语言，因为每次执行JavaScript源码都需要进行处理。当JS引擎其实是 "),n("strong",null,"动态编译"),l("程序的，然后立即执行编译之后的代码。")]),n("p",null,[l("变量的主要用途是 "),n("strong",null,"管理程序的状态"),l("。")]),n("p",null,[n("strong",null,"作用域"),l("基本上是变量的一个集合以及如何通过名称访问这些变量的规则。")]),n("p",null,[l("七种类型： "),n("strong",null,"number、boolean、string、null、undefined、object、symbol"),l("，其中需要注意typeof null返回object，typeof数组返回object，typeof一个函数返回function，虽然函数是object的子类型。")]),n("p",null,[l("JS中的假值有： "),n("strong",null,"''、0、-0、NaN、null、undefined、false。")]),n("p",null,[n("strong",null,"==检查的是允许类型转换情况下的值的相等性；===则是不允许类型转换下的值的相等性。")]),n("p",null,[l("如果试图在一个作用域中访问一个不可访问的变量，则会抛出ReferenceError，如果试图给未声明的变量赋值， "),n("strong",null,"非严格模式情况下，会在顶层全局作用域创建这个变量。")]),n("p",null,[n("strong",null,"严格模式使代码保持在一个更安全、更适当的规范集合之内。")]),n("p",null,[n("strong",null,"IIFE"),l("，立即调用函数表达式。会创建新的变量作用域。")]),n("p",null,[n("strong",null,"闭包"),l("可以看做“记忆”并在函数运行完毕之后可以继续访问函数作用域的一种方法。")]),n("p",null,[n("strong",null,"函数中的this需要根据函数如何被调用来确定，并不指向函数本身。")]),n("p",null,[l("当引用某个对象的属性时，如果这个属性不存在，那么JS会自动使用对象的内部原型引用找到另外一个对象来寻找这个属性。从一个对象到其后备对象的内部原型引用的链接是在创建对象的时候发生的。可以使用 "),n("strong",null,"Object.create()"),l("方法在创建对象时指定原型对象：")]),n("pre",null,[n("code",null,`var foo = { a: 42 }
var bar = Object.create(foo)
bar.b = 12
console.log(bar.a) // 42`)]),n("p",null,[n("strong",null,"polyfilling"),l("用于表示根据新特性的定义，创建一段与之行为等价但能够在旧的JS环境中运行的代码。")]),n("p",null,"Object.is的polyfilling："),n("pre",null,[n("code",null,`if (!Object.is) {
    Object.is = function (v1, v2) {
        // 检查 0 与 -0
        if (v1 === 0 && v2 === 0) {
            return 1/v1 === 1/v2
        }
        // 检查NaN
        if (v1 !=== v1) {
            return v2 !=== v2
        }
        // 其他情况下的判断
        return v1 === v2
    }
}`)]),n("h3",{class:"title"},"ES6及更新版本"),n("p",null,[l("ES6的特性： "),n("strong",null,"解构、默认参数值、块作用域、Symbol、简洁方法、计算属性、箭头函数、promise、生成器、迭代器、module、代理、WeakMap...")]),n("p",null,[n("strong",null,"暂时性死区（TDZ）"),l("：在代码块内，使用let、const命令声明变量之前，该变量都是不可用的。")]),n("pre",null,[n("code",null,`var t = 123
if (true) {
    console.log(t) // ReferenceError，在声明之前访问变量，if块里面是变量t的作用域，虽然声明了，但还处于死区之内
    let t
}`)]),n("p",null,"const声明必须要有显示的初始化值。常量不是对值本身的限制，而是对赋值的那个变量的限制。如果那个值是复杂值，其内容是可以修改的，比如对象或者数组。"),n("p",null,"新运算符...，通常称为spread或rest(展开或收集)，取决于它如何使用。"),n("p",null,"undefined会触发函数参数的默认赋值。函数参数默认值可以是任意合法的表达式，甚至是函数调用。"),n("p",null,[n("strong",null,"函数声明中形式参数是在他们自己的作用域中，而不是在函数体作用域中。")]),n("pre",null,[n("code",null,`var w = 1, z = 2;
function foo(x = w + 1, y = x + 1, z = z + 1) { // z=z+1 报错
    console.log(x,y,z)
}`)]),n("p",null,[l("解构是一个 "),n("strong",null,"结构化赋值"),l("方法。对象或者数组解构的赋值表达式的完成值是所有右侧对象/数组的值。")]),n("p",null,"一种利用解构默认值为类或者组件组合config的方法："),n("pre",null,[n("code",null,`// 把default合并进config
{
    let {
        options: {
            remove = defaults.options.remove,
            enable = defaults.options.enable,
            instance = defaults.options.instance
        } = {},
        log: {
            warn = defaults.log.warn,
            error = defaults.log.error
        } = {}
    } = config;
    // 重新组合
    config = {
        options: { remove, enable, instance },
        log: { warn, error }
    }
}`)]),n("p",null,[n("strong",null,"super只允许在简洁方法中出现，而不允许在普通函数表达式属性中出现，也只允许以spuer.xxx的形式存在，不能以spuer()的形式出现。")]),n("p",null,"在插入字符串字面量的${...}内可以出现任何合法的表达式，包括函数调用、在线函数表达式、甚至其他插入字符串字面量。"),n("p",null,[n("strong",null,"JS中默认提供iterable的标准（可以使用for of迭代）内建值包括：Array、String、Generator、Collection")]),n("p",null,"Symbol的主要意义是创建一个类似字符串的不会与其他任何值相冲突的值。"),n("p",null,"单例模式的模块："),n("pre",null,[n("code",null,`const INSTANCE = Symbol('instance')
function HappyFace() {
    if (HappyFace[INSTANCE]) return HappyFace[INSTANCE]
    function smile () { ... }
    return HappyFace[INSTANCE] = { // 函数也是对象
        smile: smile
    }
}
var me = HappyFace()
you = HappyFace()
me === you // true`)]),n("p",null,[n("strong",null,"使用Symbol.for注册全局的Symbol，Symbol.keyFor提取注册符号的描述文本。"),l("Object.getOwnPropertySymbols获取对象的Symbol属性。")])],-1)])),_:1})}const g=t(p,[["render",c]]);export{g as default};
