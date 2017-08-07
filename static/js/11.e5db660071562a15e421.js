webpackJsonp([11,39],{1:function(e,t){"use strict";e.exports={mounted:function(){this.$nextTick(function(){var e=document.querySelectorAll("code");if(e.length>0)for(var t=0;t<e.length;t++)hljs.highlightBlock(e[t])})}}},2:function(e,t,r){var o,v;o=r(1);var n=r(3);v=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(v=o=o.default),"function"==typeof v&&(v=v.options),v.render=n.render,v.staticRenderFns=n.staticRenderFns,e.exports=o},3:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div")},staticRenderFns:[]}},41:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var v=r(2),n=o(v);e.exports={extends:n.default}},101:function(e,t,r){var o,v;o=r(41);var n=r(129);v=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(v=o=o.default),"function"==typeof v&&(v=v.options),v.render=n.render,v.staticRenderFns=n.staticRenderFns,e.exports=o},129:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page article"},[r("h2",{staticClass:"title"},[e._v("《ES6标准入门》笔记之八：对象的扩展")]),e._v(" "),e._m(0),e._v(" "),r("footer",[e._v("2017年05月09日")]),e._v(" "),r("comments")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h3",{staticClass:"title"},[e._v("属性的简洁表示法")]),e._v(" "),r("p",[e._v("ES6允许直接写入变量和函数作为对象的属性和方法：")]),e._v(" "),r("pre",[r("code",[e._v("var foo = 'bar'\nvar baz = { foo } // { foo : 'bar' }\nvar o = {\n    method() { return 'abc' }\n}")])]),e._v(" "),r("p",[r("strong",[e._v("在对象中只写属性名，不写属性值，此时属性值等于属性名代表的变量。")])]),e._v(" "),r("p",[e._v("ES6允许字面量定义对象时使用表达式作为对象的属性名，即把表达式放在方括号内。")]),e._v(" "),r("pre",[r("code",[e._v("let propKey = 'foo'\nlet obj = { [propKey]: true, ['a' + 'bc']: 123 }")])]),e._v(" "),r("h3",{staticClass:"title"},[e._v("方法的name属性")]),e._v(" "),r("p",[e._v("函数的name属性返回函数的名称。对象方法也是函数，因此也有name属性。返回对应的方法名，如果是取值方法，则会在方法名之前加get"),r("strong",[e._v("(有疑问？)")]),e._v("；如果是存值方法，则会在方法名前加set。")]),e._v(" "),r("pre",[r("code",[e._v("var person = {\n    sayName: function () { return 'a' },\n    get firstName() { return 'b' }\n}\nconsole.log(person.sayName.name) // 'sayName'\nconsole.log(person.sayName.firstName) // 预期是'get firstName' chrom输出是undefined")])]),e._v(" "),r("p",[e._v("如果对象的方法是一个Symbol，name属性返回的是这个Symbol值的描述。")]),e._v(" "),r("pre",[r("code",[e._v('const k = Symbol("abc")\nlet obj = { [key]() { } }\nobj[key].name // "[abc]"')])]),e._v(" "),r("h3",{staticClass:"title"},[e._v("Object.is()")]),e._v(" "),r("p",[e._v("用于比较两个值是否严格相等。与严格比较符（===）的行为基本一致。不同之处是：+0不等于-0；NaN等于自身。")]),e._v(" "),r("pre",[r("code",[e._v("+0 === -0 // true\nNaN === NaN // false\nObject.is(+0,-0) // false\nObject.is(NaN, NaN) // true")])]),e._v(" "),r("h3",{staticClass:"title"},[e._v("Object.assign()")]),e._v(" "),r("p",[e._v("将来源对象（source）的所有可枚举属性复制到目标对象（target）。有至少有两个参数，第一个参数是target对象，后面的参数是source对象。所有参数必须是对象。")]),e._v(" "),r("pre",[r("code",[e._v("var target  = { a: 1 }\nvar source1 = { b: 2, d: 5 }\nvar source2 = { c: 3, b: 4 }\nObject.assign(target, source1, source2) // { a: 1, b: 4, c: 3, d: 5 }")])]),e._v(" "),r("p",[e._v("如果目标对象与源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性。")]),e._v(" "),r("p",[e._v("Object.assign只复制自身的属性，不可枚举的属性（enumerable为false）和继承的属性不会复制。")]),e._v(" "),r("p",[e._v("属性值为Symbol的属性，也会被复制进去。")]),e._v(" "),r("p",[r("strong",[e._v("对于嵌套的对象，Object.assign的处理方法是替换，而不是添加。")])]),e._v(" "),r("pre",[r("code",[e._v("var target = { a: { b: 'c', d: 'e' } }\nvar source = { a: { b: 'hello' } }\nObject.assign(target, source) // { a: { b: 'hello' } }")])]),e._v(" "),r("p",[r("strong",[e._v("Object.assign可以处理数组，但是会将其视为对象：")])]),e._v(" "),r("pre",[r("code",[e._v("Object.assign([1, 2, 3], [4, 5]) // [4, 5, 3]")])]),e._v(" "),r("p",[e._v("Object.assign只能克隆原始对象的自身的值，不能克隆它继承的值。如果想要保持继承链，可以使用下面的方式：")]),e._v(" "),r("pre",[r("code",[e._v("function clone (origin) {\n    let originProto = Object.getPrototypeOf(origin)\n    return Object.assign(Object.create(originProto), origin)\n}")])]),e._v(" "),r("p",[e._v("将多个对象合并到某个对象：")]),e._v(" "),r("pre",[r("code",[e._v("const merge = (target, ...source) => Object.assign(target, ...source)")])]),e._v(" "),r("p",[e._v("如果期望合并之后返回新的对象，可以将所有对象合并到一个空对象：")]),e._v(" "),r("pre",[r("code",[e._v("const merge = (...source) => Object.assign({}, ...source)")])]),e._v(" "),r("h3",{staticClass:"title"},[e._v("属性的可枚举性")]),e._v(" "),r("p",[e._v("对象的每个属性都有一个描述对象（Descriptor），用于控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。")]),e._v(" "),r("pre",[r("code",[e._v('let obj = { foo: 123 }\nObject.getOwnPropertyDescriptor(obj, "foo") // { configurable: true, enumerable: true, value: 123, writable: true }')])]),e._v(" "),r("p",[e._v("描述对象中的enumerable称之为“可枚举性”，如果该属性为false，下列操作会忽略当前属性：")]),e._v(" "),r("p",[e._v("1、for...in循环：只遍历对象自身的和继承的可枚举属性；")]),e._v(" "),r("p",[e._v("2、Object.keys()：返回对象自身的所有可枚举属性的键名；")]),e._v(" "),r("p",[e._v("3、JSON.stringify()：只串行化对象自身的可枚举属性；")]),e._v(" "),r("p",[e._v("4、Object.assign()：只复制对象自身的可枚举属性；")]),e._v(" "),r("p",[e._v("5、Reflect.enumerate()：返回所有for...in循环会遍历的属性；")]),e._v(" "),r("p",[r("strong",[e._v("操作中引入继承的属性会让问题复杂化，大部分时候只需要知道对象的自身属性。尽量不要使用for... in循环，而用Object.keys()。")])]),e._v(" "),r("h3",{staticClass:"title"},[e._v("属性的遍历")]),e._v(" "),r("p",[e._v("ES6一共有6种方法遍历对象的属性：")]),e._v(" "),r("p",[r("strong",[e._v("1、for...in")])]),e._v(" "),r("p",[e._v("for...in循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）。")]),e._v(" "),r("p",[r("strong",[e._v("2、Object.keys(obj)")])]),e._v(" "),r("p",[e._v("返回一个数组，包含对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。")]),e._v(" "),r("p",[r("strong",[e._v("3、Object.getOwnPropertyNames(obj)")])]),e._v(" "),r("p",[e._v("返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。")]),e._v(" "),r("p",[r("strong",[e._v("4、Object.getOwnPropertySymbols(obj)")])]),e._v(" "),r("p",[e._v("返回一个数组，包含对象自身的所有Symbol属性。")]),e._v(" "),r("p",[r("strong",[e._v("5、Reflect.ownKeys(obj)")])]),e._v(" "),r("p",[e._v("返回一个数组，包含对象自身的所有属性（包括不可枚举、Symbol属性）。")]),e._v(" "),r("p",[r("strong",[e._v("6、Reflect.enumerate(obj)")])]),e._v(" "),r("p",[e._v("返回一个Iterator对象，遍历对象自身的和继承的所有可枚举属性（不含Symbol属性，和for...in循环一样）。")]),e._v(" "),r("p",[e._v("属性遍历遵循以下的规则：")]),e._v(" "),r("p",[e._v("首先遍历所有属性名为数值的属性，按照数字排序；")]),e._v(" "),r("p",[e._v("其次遍历所有属性名为字符串的属性，按照生成时间排序；")]),e._v(" "),r("p",[e._v("最后遍历所有属性名为Symbol值的属性，按照生成时间排序。")]),e._v(" "),r("h3",{staticClass:"title"},[e._v("_proto_")]),e._v(" "),r("p",[e._v("_proto_属性用来读取或者设置当前对象的prototype对象。")]),e._v(" "),r("p",[e._v("最好不要使用这个属性，而是使用Object.setPrototypeOf()、Object.getPrototypeOf()代替直接读写操作。")]),e._v(" "),r("h3",{staticClass:"title"},[e._v("对象的扩展运算符")]),e._v(" "),r("p",[e._v("ES7中的一项提案，将rest参数/扩展运算符（...）引入对象。Babel转码器已支持。")]),e._v(" "),r("p",[r("strong",[e._v("Rest参数")])]),e._v(" "),r("p",[e._v("rest参数用于从一个对象取值，相当于将所有可遍历但尚未被读取的属性，分配到指定的对象上，所有键及其值都会复制到新的对象上。")]),e._v(" "),r("pre",[r("code",[e._v("let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }\nx // 1\ny // 2\nz // { a: 3, b: 4 }")])]),e._v(" "),r("p",[e._v("rest复制是浅复制，如果一个键的值是复合类型（数组、对象、函数），rest参数复制的是这个值的引用。")]),e._v(" "),r("p",[e._v("rest也不会复制继承自原型对象的属性。")]),e._v(" "),r("p",[r("strong",[e._v("扩展运算符")])]),e._v(" "),r("p",[e._v("扩展运算符用于取出参数对象的所有可遍历属性，复制到当前对象中。")]),e._v(" "),r("pre",[r("code",[e._v("let z = { a: 3, b: 4 }\nlet n = { ...z } // { a: 3, b: 4 }")])]),e._v(" "),r("p",[e._v("等同于使用Object.assign方法。")]),e._v(" "),r("p",[e._v("可以合并两个对象：")]),e._v(" "),r("pre",[r("code",[e._v("let ab = { ...a, ...b }")])])])}]}}});