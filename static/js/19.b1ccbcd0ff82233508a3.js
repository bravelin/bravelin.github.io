webpackJsonp([19,23],{13:function(e,t){"use strict";e.exports={mounted:function(){this.$nextTick(function(){var e=document.querySelectorAll("code");if(e.length>0)for(var t=0;t<e.length;t++)hljs.highlightBlock(e[t])})},methods:{testProperty:function(e){var t=document.documentElement;return e in t.style?void alert("true"):void alert("false")},testValue:function(e,t){var r=document.createElement("p");return r.style[t]=e,r.style[t]?void alert("true"):void alert("false")}}}},48:function(e,t,r){var n,s;n=r(13);var o=r(79);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,e.exports=n},79:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page article"},[r("h2",{staticClass:"title"},[e._v("《CSS 揭秘》笔记之一：前言")]),e._v(" "),r("div",{staticClass:"content"},[r("p",[e._v('"十年来最重要的CSS图书，没有之一"。')]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("\n              这并不是一本厚厚的权威指南，并不适合初学者，它的目标读者是正在由中级向高级进阶的CSS开发者。作者在书中揭示了47个鲜为人知的CSS技巧，为前端开发遇到的各种网页难题，探寻出了更优雅的解决方案。主要包括7大主题：")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),r("p",[e._v("以下是小段JavaScript代码，实现特性检测并给根元素添加辅助类：")]),e._v(" "),e._m(9),e._v(" "),r("button",{on:{click:function(t){e.testProperty("textShadow")}}},[e._v("检测浏览器是否支持textShadow")]),e._v(" "),r("p",[e._v("如果需要检测某个具体的属性值是否支持，则需要把它赋值给相应的属性，然后再检查浏览器是否还保存这个值：")]),e._v(" "),e._m(10),e._v(" "),r("button",{on:{click:function(t){e.testValue("linear-gradient(red,tan)","backgroundImage")}}},[e._v("检测浏览器是否支持linear-gradient(red,tan)\n          ")]),e._v(" "),r("p",{staticClass:"dot"},[e._v("浏览器可以解析某个CSS特性并不能表示它已经正确实现了这个特性。")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),r("h3",{staticClass:"title"},[e._v("CSS编码技巧：")]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17)]),e._v(" "),r("footer",[e._v("2016年10月30日")]),e._v(" "),r("comments")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",{staticClass:"common"},[r("img",{staticStyle:{"max-width":"800px"},attrs:{src:"/static/assets/exp/css-secrects/2.png"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("这本书的作者是W3C CSS工作组特邀专家、CSS语言设计者之一："),r("em",[e._v("Lea Verou")]),e._v("。令人惊叹的是，这本书完全由HTML5写成，布局与排版由CSS渲染。此书在"),r("a",{attrs:{href:"https://book.douban.com/subject/26745943/"}},[e._v("豆瓣")]),e._v("上的评分高达9.3，是一本诸多前端大师倾情推荐的好书。中文版由"),r("a",{attrs:{href:"https://github.com/cssmagic/blog/issues/54"}},[e._v("CSS 魔法")]),e._v("翻译。")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("背景与边框、形状、视觉效果、字体排印、用户体验、结构与布局、过渡与动画")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("这本书不单单只介绍CSS的技巧，作者会深入分析背后的思路，循序渐进地找到解决问题的方法。"),r("strong",[e._v('"理解发现解决方案的过程比解决方案本身更有用"。')])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("贯穿书中的编程理念是"),r("em",[e._v("DRY")]),e._v("（Don't Repeat\n              Yourself：不应该重复你已经做过的事。在改动某个参数时，做到只改尽量少的地方）、"),r("em",[e._v("可维护")]),e._v("、"),r("em",[e._v("灵活性")]),e._v("、"),r("em",[e._v("轻量级")]),e._v("以及"),r("em",[e._v("要符合标准")]),e._v("。\n              以下是首页到第一章的一些知识点。")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("标准语法应该写在最后；")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("当使用渐变时，如果需要考虑兼容性，可以使用渐变色的平均值作为回退机制。")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",{staticClass:"css"},[e._v("background: rgb(255, 128, 0); // 渐变色的平均值\nbackground: -moz-linear-gradient(0deg, yellow, red);\nbackground: -o-linear-gradient(0deg, yellow, red);\nbackground: -webkit-linear-gradient(0deg, yellow, red);\nbackground: linear-gradient(90deg, yellow, red); // 标准语法")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("关于浏览器对样式是否支持的判断，可以使用"),r("strong",[e._v("特性检测：Modernizr或者@supports")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",{staticClass:"javascript"},[e._v("function testProperty (property) {\n  var root = document.documentElement\n  if (property in root.style) {\n    root.classList.add(property.toLowerCase())\n    return true\n  }\n  root.classList.add('no' + property.toLowerCase())\n  return false\n}")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",[e._v("function testValue (value, property) {\n  var dummy = document.createElement('p')\n  dummy.style[property] = value\n\n  if (dummy.style[property]) {\n    return true\n  }\n  return false\n}")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("W3C并不产生标准。")]),e._v("CSS规范由CSS工作组的成员来编写，大部分成员来自W3C会员公司。每项规范从最初启动到最终成熟，都会经过多个阶段。")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("CSS1规范发表于1996年，两年之后，CSS2规范发布了。"),r("strong",[e._v('尽管"CSS3"这个名词非常流行，但实际上并没有在任何规范中定义过。')]),e._v("CSS3指的是一个非正式的集合，它包括CSS规范第三版及一些版本号还是1的新规范。\n          ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("尽量减少重复的代码。")]),e._v("当某些值相互依赖时，应该把它们的相互关系用代码表示出来。"),r("strong",[e._v("currentColor是一个特殊的颜色关键字，CSS中有史以来的第一个变量。")]),e._v("减少重复多使用"),r("strong",[e._v("inherit关键字。")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("相信你的眼睛，而不是数字。")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("关于响应式布局，应尽最大努力实现弹性可伸缩的布局，并在各个断点区间内指定相应尺寸。")]),e._v("当网页本身的设计足够灵活时，让它变成响应式应该只需要用到简短的媒体查询代码。")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("合理使用简写。")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("合理使用预处理器。")])])}]}}});