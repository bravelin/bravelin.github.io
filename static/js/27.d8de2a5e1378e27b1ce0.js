webpackJsonp([27],{EzkC:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={extends:r("wkh7").a},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page article"},[r("h2",{staticClass:"title"},[e._v("《ES6标准入门》笔记之十：Proxy和Reflect")]),e._v(" "),e._m(0),e._v(" "),r("footer",[e._v("2017年05月14日")]),e._v(" "),r("comments"),e._v(" "),r("Catalog",{attrs:{catalog:e.catalog}})],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h3",{staticClass:"title"},[e._v("Proxy概述")]),e._v(" "),r("p",[e._v("用于修改某些操作的默认行为，在目标对象之前架设一“拦截”层，外界对该对象的访问都必须先通过这层拦截。"),r("strong",[e._v("提供一种机制，可以对外界的访问进行过滤和拦截。")])]),e._v(" "),r("p",[e._v("ES6提供原生的Proxy构造函数，用于生成Proxy实例。")]),e._v(" "),r("pre",[r("code",[e._v("var proxy = new Proxy(target, handler) // target拦截的目标对象")])]),e._v(" "),r("p",[e._v("拦截读取属性：")]),e._v(" "),r("pre",[r("code",[e._v("var proxy = new Proxy({}, {\n    get: function (target, property) {\n        return 35\n    }\n})\nproxy.time // 35\nproxy.abc // 35")])]),e._v(" "),r("p",[r("strong",[e._v("要使Proxy起作用，必须针对Proxy实例进行操作，而不是针对目标对象。")])]),e._v(" "),r("p",[e._v("如果handler没有设置任何拦截，等同于直接通向原对象：")]),e._v(" "),r("pre",[r("code",[e._v("var target = {}\nvar handler = {}\nvar proxy = new Proxy(target, handler)\nproxy.a = 'b'\ntarget.a // 'b'")])]),e._v(" "),r("p",[e._v("目标对象可以是函数。")]),e._v(" "),r("h3",{staticClass:"title"},[e._v("Reflect概述")]),e._v(" "),r("p",[e._v("也是ES6为了操作对象而提供的新的API，设计目标如下：")]),e._v(" "),r("p",[e._v("1、将Object对象一些属于语言层面的方法放到Reflect对象上；")]),e._v(" "),r("p",[e._v("2、修改某些Object方法的返回结果，让其变得更合理；")]),e._v(" "),r("p",[e._v("3、让Object操作都变成函数行为，如 name in obj和delete obj[name]变成Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)；")]),e._v(" "),r("p",[e._v("4、Reflect对象的方法和Proxy对象的方法一一对应。可以使Proxy对象方便地调用Reflect方法完成默认行为。")])])}]},v=r("rAbc")(a,n,!1,null,null,null);t.default=v.exports}});