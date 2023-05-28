import{u as e}from"./highlight-2e3cec98.js";import{u as n}from"./catalog-69e48a3d.js";import{_ as r,b as o,c as t,l as p}from"./index-4afbb925.js";import"./article-1b647556.js";const a={setup(){e(),n()}},s={class:"article-container"},c=p(`<h2 class="article-title">你不知道的JavaScript（中卷）笔记</h2><div class="article-content"><h3 class="title">类型</h3><p><strong>对语言引擎和开发人员来说，类型是值的内部特征，它定义了值的行为，以使其区别于其他值。</strong></p><p>JavaScript不要求“类型强制”，也就是说，语言引擎不要求变量总是持有与其初始值同类型的值。</p><p>转换类数组对象：Array.prototype.slice.call(obj)，或者Array.from(obj)</p><p>JS中的整数就是没有小数的十进制数，42.0即等同于整数42.</p><p>JS中的机器精度大约是2^-52，该值定义在Number.EPSILON.</p><p>整数检测：Number.isInteger：</p><pre><code>if (!Number.isInteger) {
    Number.isInteger = function (num) {
        return typeof num == &#39;number&#39; &amp;&amp; num % 1 == 0
    }
}</code></pre><p><strong>void运算符</strong>：void不改变表达式的结果，只是让表达式返回undefined.</p><pre><code>var a = 42
console.log(void a, a) // undefined 42</code></pre><p><strong>NaN是JS中唯一一个不等于自身的值。</strong></p><p>Function.prototype是一个空函数，Array.prototype是一个空数组，RegExp.prototype是一个空的正则表达式。</p><h3 class="title">强制类型转换</h3><p><strong>JS中的强制类型转换总是返回标量基本类型值，如string、number、boolean。类型转换发生在静态类型语言的编译阶段，而强制类型转换则发生在动态类型语言的运行时（runtime）。</strong></p><p><em>1、toString</em></p><p>字符串化规则为：null转化为&#39;null&#39;；undefined转化为&#39;undefined&#39;；true转化为&#39;true&#39;；false转化为&#39;false&#39;；数字的字符串化遵循通用规则，极大和极小的数字使用指数的形式；</p><pre><code>var a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;
console.log(a + &#39;&#39;) // 1.07e+21</code></pre><p>对于对象来说，除非自定义，否则返回toString返回内部属性的值；数组的toString则是将单元字符串化以后再用逗号连接起来：</p><pre><code>var a = [1,2,3]
console.log(a + &#39;&#39;) // 1,2,3</code></pre><p>JSON.stringify在将JSON对象序列化为字符串时也使用到了toString。所有安全的JSON值都是可以字符串化的。</p><p><strong>不安全的JSON值指的是undefined、function、symbol和包含循环引用的对象。</strong>JSON.stringify在对象中遇到undefined、function、symbol时会自动将其忽略，在数组中则会返回null；如果对象中包含循环引用，则报错。</p><p>如果对象中定义了toJSON方法，JSON字符串化时会首先调用此方法。然后用它的返回值进行序列化。</p><pre><code>var a = { val: [1,2,3], toJSON: function () { return this.val.slice(1) } }
JSON.stringify(a) // [2,3]</code></pre><p><em>2、toNumber</em></p><p>true转为1；false转为0；null转为0；undefined转为NaN。</p><p>对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为数字。会尝试调用valueOf方法，再次toString方法。</p><pre><code>var a = { valueOf: function() { return &#39;42&#39; }}
Number(a) // 42
Number(&#39;&#39;) // 0
Number([]) // 0
Number([1,2]) // NaN</code></pre><p><em>3、toBoolean</em></p><p><strong>以下这些是假值：undefined、null、&#39;&#39;、false、+0、-0、NaN；假值以外的值都是真值。</strong></p><p><strong>~~x能将值截除为一个32位整数，x|0也可以：</strong></p><pre><code>~~32.11 // 32
32.11 | 0 // 32</code></pre><p>隐式强制类型转换的作用是减少冗余，让代码更简洁。</p><p><strong>||和&amp;&amp;返回它们其中一个操作数的值。</strong></p><p><em>抽象相等：</em></p><p>1、字符串与数字之间的相等比较：字符串会被转化成数字再进行比较。</p><pre><code>var a = 42
var b = &#39;42&#39;
a === b // false
a == b // true</code></pre><p>2、其他类型与布尔类型的比较：布尔类型先转成数值再与对方进行比较。</p><pre><code>&#39;42&#39; == true // false，相当于比较：42 == 1
&#39;42&#39; == false // false，相当于比较：42 == 0</code></pre><p><strong>无论什么情况下都不要使用==true和==false.</strong></p><p>3、null == undefined为true。null和undefined没有对应的封装对象：</p><pre><code>var a = &#39;abc&#39;
var b = Object(a)
a == b // true

var c = undefined
var d = Object(c)
c == d // false

var e = null
var f = Object(f)
e == f // false</code></pre><p><strong>&amp;&amp;运算符的优先级高于||，||运算符的优先级高于? :</strong></p></div><footer>2018年06月05日</footer>`,3),i=[c];function l(u,d,f,m,g,N){return o(),t("div",s,i)}const J=r(a,[["render",l]]);export{J as default};
