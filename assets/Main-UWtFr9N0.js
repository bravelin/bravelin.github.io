import{_ as r,s as t,x as o,h as a,o as s,f as l,y as e}from"./index-CxcENImR.js";const p={};function i(c,n){const u=a("MyArticle");return s(),t(u,{title:"你不知道的JavaScript（中卷）笔记",date:"2018年06月05日"},{default:o(()=>[...n[0]||(n[0]=[l("div",{class:"_article-content"},[l("h3",{class:"title"},"类型"),l("p",null,[l("strong",null,"对语言引擎和开发人员来说，类型是值的内部特征，它定义了值的行为，以使其区别于其他值。")]),l("p",null,"JavaScript不要求“类型强制”，也就是说，语言引擎不要求变量总是持有与其初始值同类型的值。"),l("p",null,"转换类数组对象：Array.prototype.slice.call(obj)，或者Array.from(obj)"),l("p",null,"JS中的整数就是没有小数的十进制数，42.0即等同于整数42."),l("p",null,"JS中的机器精度大约是2^-52，该值定义在Number.EPSILON."),l("p",null,"整数检测：Number.isInteger："),l("pre",null,[l("code",null,`if (!Number.isInteger) {
    Number.isInteger = function (num) {
        return typeof num == 'number' && num % 1 == 0
    }
}`)]),l("p",null,[l("strong",null,"void运算符"),e("：void不改变表达式的结果，只是让表达式返回undefined.")]),l("pre",null,[l("code",null,`var a = 42
console.log(void a, a) // undefined 42`)]),l("p",null,[l("strong",null,"NaN是JS中唯一一个不等于自身的值。")]),l("p",null,"Function.prototype是一个空函数，Array.prototype是一个空数组，RegExp.prototype是一个空的正则表达式。"),l("h3",{class:"title"},"强制类型转换"),l("p",null,[l("strong",null,"JS中的强制类型转换总是返回标量基本类型值，如string、number、boolean。类型转换发生在静态类型语言的编译阶段，而强制类型转换则发生在动态类型语言的运行时（runtime）。")]),l("p",null,[l("em",null,"1、toString")]),l("p",null,"字符串化规则为：null转化为'null'；undefined转化为'undefined'；true转化为'true'；false转化为'false'；数字的字符串化遵循通用规则，极大和极小的数字使用指数的形式；"),l("pre",null,[l("code",null,`var a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;
console.log(a + '') // 1.07e+21`)]),l("p",null,"对于对象来说，除非自定义，否则返回toString返回内部属性的值；数组的toString则是将单元字符串化以后再用逗号连接起来："),l("pre",null,[l("code",null,`var a = [1,2,3]
console.log(a + '') // 1,2,3`)]),l("p",null,"JSON.stringify在将JSON对象序列化为字符串时也使用到了toString。所有安全的JSON值都是可以字符串化的。"),l("p",null,[l("strong",null,"不安全的JSON值指的是undefined、function、symbol和包含循环引用的对象。"),e("JSON.stringify在对象中遇到undefined、function、symbol时会自动将其忽略，在数组中则会返回null；如果对象中包含循环引用，则报错。")]),l("p",null,"如果对象中定义了toJSON方法，JSON字符串化时会首先调用此方法。然后用它的返回值进行序列化。"),l("pre",null,[l("code",null,`var a = { val: [1,2,3], toJSON: function () { return this.val.slice(1) } }
JSON.stringify(a) // [2,3]`)]),l("p",null,[l("em",null,"2、toNumber")]),l("p",null,"true转为1；false转为0；null转为0；undefined转为NaN。"),l("p",null,"对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为数字。会尝试调用valueOf方法，再次toString方法。"),l("pre",null,[l("code",null,`var a = { valueOf: function() { return '42' }}
Number(a) // 42
Number('') // 0
Number([]) // 0
Number([1,2]) // NaN`)]),l("p",null,[l("em",null,"3、toBoolean")]),l("p",null,[l("strong",null,"以下这些是假值：undefined、null、''、false、+0、-0、NaN；假值以外的值都是真值。")]),l("p",null,[l("strong",null,"~~x能将值截除为一个32位整数，x|0也可以：")]),l("pre",null,[l("code",null,`~~32.11 // 32
32.11 | 0 // 32`)]),l("p",null,"隐式强制类型转换的作用是减少冗余，让代码更简洁。"),l("p",null,[l("strong",null,"||和&&返回它们其中一个操作数的值。")]),l("p",null,[l("em",null,"抽象相等：")]),l("p",null,"1、字符串与数字之间的相等比较：字符串会被转化成数字再进行比较。"),l("pre",null,[l("code",null,`var a = 42
var b = '42'
a === b // false
a == b // true`)]),l("p",null,"2、其他类型与布尔类型的比较：布尔类型先转成数值再与对方进行比较。"),l("pre",null,[l("code",null,`'42' == true // false，相当于比较：42 == 1
'42' == false // false，相当于比较：42 == 0`)]),l("p",null,[l("strong",null,"无论什么情况下都不要使用==true和==false.")]),l("p",null,"3、null == undefined为true。null和undefined没有对应的封装对象："),l("pre",null,[l("code",null,`var a = 'abc'
var b = Object(a)
a == b // true

var c = undefined
var d = Object(c)
c == d // false

var e = null
var f = Object(f)
e == f // false`)]),l("p",null,[l("strong",null,"&&运算符的优先级高于||，||运算符的优先级高于? :")])],-1)])]),_:1})}const d=r(p,[["render",i]]);export{d as default};
