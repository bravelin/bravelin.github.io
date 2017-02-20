webpackJsonp([6,16],{30:function(t,n,e){"use strict";var i=e(1);t.exports={mounted:function(){this.$nextTick(function(){var t=document.querySelectorAll("code");if(t.length>0)for(var n=0;n<t.length;n++)hljs.highlightBlock(t[n])}),i.Global.setArticleNavMenu("learning-css-secrects-7")}}},50:function(t,n,e){var i,v;i=e(30);var a=e(67);v=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(v=i=i.default),"function"==typeof v&&(v=v.options),v.render=a.render,v.staticRenderFns=a.staticRenderFns,t.exports=i},67:function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page article"},[e("h2",{staticClass:"title"},[t._v("《CSS 揭秘》笔记之七：结构与布局")]),t._v(" "),t._m(0),t._v(" "),e("footer",[t._v("2017年01月10日")]),t._v(" "),e("comments")])},staticRenderFns:[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"content"},[i("h3",{staticClass:"title"},[t._v("自适应内部元素")]),t._v(" "),i("p",[t._v("如果希望元素自适应其内容的宽度，可以设置 "),i("strong",[t._v("width: min-content")])]),t._v(" "),i("p",[t._v("如下，如果figure元素不设置宽度的话，将占据整行。（如果浏览器不支持，可以设置一个max-width值，保证平稳退化。）")]),t._v(" "),i("div",{staticClass:"exp auto-width"},[i("figure",[i("img",{attrs:{src:e(2)}}),t._v(" "),i("figcaption",[t._v("这是一张图片的说明文字。图片底部的文字自动换行了。")])])]),t._v(" "),i("pre",[i("code",[t._v("figure{\n  border:1px solid #ccc;\n  max-width: 300px;\n  max-width: min-content;\n  padding: 8px;\n  text-align: center;\n  margin: 0 auto;\n}")])]),t._v(" "),i("h3",{staticClass:"title"},[t._v("精确控制表格列宽")]),t._v(" "),i("p",[t._v("表格的列宽通常都是根据内容进行调整的，即使显示地指定了width。CSS2.1有一个属性称之为："),i("strong",[t._v("table-layout")]),t._v("，默认值为auto，此时浏览器会使用自动表格布局算法调整表格的布局。如果设置为另外的一个值：fixed，则可以对表格更多控制。\n            ")]),t._v(" "),i("p",[t._v("这种固定表格布局算法将使表格布局更快。应用此属性时需要同时指定表格的宽度。")]),t._v(" "),i("h3",{staticClass:"title"},[t._v("根据兄弟元素的数量来设置样式")]),t._v(" "),i("p",[t._v("只有一个列表项时，可以使用:only-child，它等效于:first-child:last-child。即第一项同时也是最后一项。")]),t._v(" "),i("p",[t._v("例如ul元素下的li列表项，当列表项有4项时，以下选择符可以命中所有项：")]),t._v(" "),i("pre",[i("code",[t._v("li:first-child:nth-last-child(4),li:first-child:nth-last-child(4) ~ li { }")])]),t._v(" "),i("p",[i("strong",[t._v("根据兄弟元素的数量范围来匹配元素：")])]),t._v(" "),i("p",[t._v(":nth-child()选择符参数可以不仅可以是简单的数字，也可以如an+b类似的表达式，例如"),i("strong",[t._v("n+b")]),t._v("，可以选中从第b个开始的所有子元素。")]),t._v(" "),i("pre",[i("code",[t._v("//当列表项至少包含4项时，命中所有列表项\nli:first-child:nth-last-child(n+4),li:first-child:nth-last-child(n+4) ~ li {}")])]),t._v(" "),i("p",[t._v("同理，-n+b这种形式的表达式可以选中开头的b个元素。")]),t._v(" "),i("pre",[i("code",[t._v("//当列表项最多包含4项时，命中所有列表项\nli:first-child:nth-last-child(-n+4),li:first-child:nth-last-child(-n+4) ~ li {}")])]),t._v(" "),i("h3",{staticClass:"title"},[t._v("满幅的背景，定宽的内容")]),t._v(" "),i("p",[t._v("书中将如下dom结构：")]),t._v(" "),i("pre",[i("code",[t._v("<footer><div class='wrapper'></div></footer>")])]),t._v(" "),i("p",[t._v("样式写法：")]),t._v(" "),i("pre",[i("code",[t._v("footer{\n    background: #333;\n  }\n  .wrapper{\n    max-width: 900px;\n    margin: 1em auto;\n  }")])]),t._v(" "),i("p",[t._v("利用calc，精简成如下的形式：")]),t._v(" "),i("pre",[i("code",[t._v("footer{\n    padding: 1em calc(50% - 450px);\n    background: #333;\n  }")])]),t._v(" "),i("h3",{staticClass:"title"},[t._v("垂直居中")]),t._v(" "),i("p",[i("strong",[t._v("基于绝对定位的方案：")]),t._v("此方案要求元素具有固定的宽度和高度。")]),t._v(" "),i("pre",[i("code",[t._v("main {\n  position: absolute;\n  width: 18em;\n  height: 6em;\n  top: 50%;\n  left: 50%;\n  margin-top: -3em;\n  margin-left: -9em;\n}")])]),t._v(" "),i("p",[t._v("改进型方案（并不要求元素的宽度高度固定）：")]),t._v(" "),i("pre",[i("code",[t._v("main {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}")])]),t._v(" "),i("p",[i("strong",[t._v("基于视口单位的方案：")]),t._v("此方案只适应于在视口居中的场景。")]),t._v(" "),i("p",[t._v("视口单位1vw表示视口宽度的1%，1vh表示视口高度的1%。1vmin取1vh和1vw两者中的最小值，1vmax取1vh和1vw两者中的最大值。")]),t._v(" "),i("p",[t._v("下面样式可以使main元素居中：")]),t._v(" "),i("pre",[i("code",[t._v("main {\n    width: 18em;\n    padding: 1em 1.5em;\n    margin: 50vh auto 0;\n    transform: translateY(-50%);\n  }")])]),t._v(" "),i("p",[i("strong",[t._v("基于Flexbox的方案：")]),t._v("设置父元素display: flex，待居中元素margin: auto即可。")]),t._v(" "),i("h3",{staticClass:"title"},[t._v("紧贴底部的页脚")]),t._v(" "),i("p",[i("strong",[t._v("使用视口+calc计算方案：")]),t._v("设置中间内容区域的min-height为页面的高度减去头部和底部的高度。页面的整体结构如下：")]),t._v(" "),i("pre",[i("code",[t._v("<header></header><main></main><footer></footer></code>")])]),t._v(" "),i("p",[t._v("如果header和footer的高度分别为2.5em和7em：")]),t._v(" "),i("pre",[i("code",[t._v("main {\n  min-height: calc(100vh - 2.5em - 7em)\n  box-sizing: border-box;\n}")])]),t._v(" "),i("p",[i("strong",[t._v("Flexbox的方案：")]),t._v("body元素设置为display: flex，触发伸缩盒布局。内容区块的高度自动伸展并占满所有的可用空间。")]),t._v(" "),i("pre",[i("code",[t._v("body{\n  display: flex,\n  flex-flow: column;\n  min-height: 100vh;\n}\nmain{ flex: 1 }")])])])}]}}});