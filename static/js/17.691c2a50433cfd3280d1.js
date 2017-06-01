webpackJsonp([17,30],{1:function(e,t){"use strict";e.exports={mounted:function(){this.$nextTick(function(){var e=document.querySelectorAll("code");if(e.length>0)for(var t=0;t<e.length;t++)hljs.highlightBlock(e[t])})}}},2:function(e,t,n){var a,r;a=n(1);var o=n(3);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=a},3:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},staticRenderFns:[]}},20:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(2),o=a(r);e.exports={extends:o.default}},62:function(e,t,n){var a,r;a=n(20);var o=n(98);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=a},98:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[e._v("《CSS 揭秘》笔记之四：视觉效果")]),e._v(" "),e._m(0),e._v(" "),n("footer",[e._v("2016年11月20日")]),e._v(" "),n("comments")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[e._v("单侧投影")]),e._v(" "),n("p",[e._v("box-shadow的通常使用方式是指定3个长度值和一个颜色值：")]),e._v(" "),n("pre",[n("code",[e._v("box-shadow: 2px 3px 4px rgba(0,0,0,.5)")])]),e._v(" "),n("div",{staticClass:"exp shadow-1"},[n("div")]),e._v(" "),n("p",[n("strong",[e._v("阴影的绘制原理：")])]),e._v(" "),n("p",[e._v("(1)：以该元素相同的尺寸和位置，绘制一个背景色rgba(0,0,0,.5)的矩形")]),e._v(" "),n("p",[e._v("(2)：将此矩形右移2px，下移3px")]),e._v(" "),n("p",[e._v("(3)：使用高斯模糊算法将它进行4px的模糊处理。在阴影的边缘发生阴影色和纯透明色之间的颜色过渡长度近似于模糊半径的两倍。")]),e._v(" "),n("p",[e._v("(4)：切除模糊后的矩形与原始元素的交集部分")]),e._v(" "),n("p",[n("strong",[e._v("没有任何阴影是绘制在元素的下层的。")]),e._v("虽然阴影看起来是在元素的“后面”。")]),e._v(" "),n("p",[e._v("要得到单侧投影的效果需要使用到box-shadow的第四个参数："),n("strong",[e._v("扩张半径")]),e._v("。这个参数会根据指定的值去扩大或缩小（当为负值时）投影的尺寸。")]),e._v(" "),n("p",[e._v("使用负的扩张半径值，使它的值刚好等于模糊半径值，可以使投影的尺寸与元素的尺寸完全一致。此时使用偏移量移动投影，可以得到单侧效果。")]),e._v(" "),n("pre",[n("code",[e._v("background: #58a;\n  box-shadow: 0 8px 4px -4px rgba(0,0,0,.5);")])]),e._v(" "),n("div",{staticClass:"exp shadow-2"},[n("div")]),e._v(" "),n("p",[e._v("叠加上面的效果，可以得到"),n("strong",[e._v("双侧投影：")])]),e._v(" "),n("div",{staticClass:"exp shadow-3"},[n("div")]),e._v(" "),n("pre",[n("code",[e._v("background: #58a;\n  box-shadow: 8px 0 4px -4px rgba(0,0,0,.5), -8px 0 4px -4px rgba(0,0,0,.5);")])]),e._v(" "),n("h3",{staticClass:"title"},[e._v("不规则投影")]),e._v(" "),n("p",[e._v("滤镜"),n("strong",[e._v("filter")]),e._v("效果可以实现不规则的投影。它的写法是指定一些滤镜函数，以空格分隔，如：")]),e._v(" "),n("pre",[n("code",[e._v("filter: blur() grayscale() drop-shadow()")])]),e._v(" "),n("p",[e._v("drop-shadow()滤镜参数和box-shadow基本类似，但不包括扩张半径，不包括inset关键字，也不支持多层投影。使用滤镜应用下面的切角矩形：")]),e._v(" "),n("div",{staticClass:"exp cuttingAngle-3 filter-1"},[n("div")]),e._v(" "),n("pre",[n("code",[e._v("filter: drop-shadow(2px 2px 10px rgba(0,0,0,0.5))")])]),e._v(" "),n("h3",{staticClass:"title"},[e._v("染色效果")]),e._v(" "),n("p",[n("strong",[e._v("基于滤镜的方案：")]),e._v("sepia()滤镜会给图片增加一种降饱和度的橙黄色效果；saturate()滤镜可以提升每个像素的饱和度；hue-rotate()滤镜可以将每个像素的色相以指定的度数进行偏移。\n            ")]),e._v(" "),n("div",{staticClass:"exp filter-2"},[n("img",{attrs:{src:"/static/assets/header.jpg"}})]),e._v(" "),n("pre",[n("code",[e._v("filter: sepia(1) saturate(4) hue-rotate(295deg);\n  transition: 0.5s filter;\n  &:hover{\n    filter: none\n  }")])]),e._v(" "),n("p",[e._v("滤镜支持transition渐变。")]),e._v(" "),n("p",[n("strong",[e._v("基于混合模式的方案：")]),e._v("在Adobe\n                Photo中混合模式定义了上层元素的颜色与下层元素的颜色进行混合的方式。使用luminosity模式可以实现染色效果。这种模式会保留上层元素的HSL亮度信息，并从它的下层吸取色相饱和度信息。")]),e._v(" "),n("p",[e._v("mix-blend-mode可以为整个元素设置混合模式。background-blend-mode可以为每层背景单独指定混合模式。")]),e._v(" "),n("p",[e._v("如果div中包含img，应用如下样式可以得到染色效果：")]),e._v(" "),n("pre",[n("code",[e._v("div{\n    background: hsl(335, 100%, 50%);\n    >img{\n      width:100%;\n      height:100%;\n      mix-blend-mode: luminosity;\n    }\n  }")])]),e._v(" "),n("div",{staticClass:"exp filter-3"},[n("div",[n("img",{attrs:{src:"/static/assets/header.jpg"}})])]),e._v(" "),n("p",[e._v("另外一种方式，是将图片当做div的背景。")]),e._v(" "),n("pre",[n("code",[e._v('width: 150px;\n  height: 150px;\n  background-size: cover;\n  background-color: hsl(335, 100%, 50%);\n  background-blend-mode: luminosity;\n  transition: .5s background-color;\n  background-image: url("/static/assets/header.jpg");\n  &:hover{\n    background-color: transparent;\n  }')])]),e._v(" "),n("div",{staticClass:"exp filter-4"},[n("div")]),e._v(" "),n("h3",{staticClass:"title"},[e._v("折角效果")]),e._v(" "),n("p",[n("strong",[e._v("使用渐变实现45度折角效果：")])]),e._v(" "),n("p",[e._v("需要使用两层渐变，一层渐变实现切角效果；另外一层实现右上角的折角，使用background-size限制尺寸为折角那区块，并且其值是切角渐变的1.414倍。")]),e._v(" "),n("div",{staticClass:"exp angle-1"},[n("div")]),e._v(" "),n("pre",[n("code",[e._v("background: #58a;\n  background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,0.4) 0) no-repeat 100% 0 / 2em 2em,linear-gradient(-135deg, transparent 1.414em, #58a 0);")])]),e._v(" "),n("p",[n("strong",[e._v("其他角度折角的解决方案：")]),e._v("如下30度折角的方法。")]),e._v(" "),n("div",{staticClass:"exp angle-2"},[n("div")]),e._v(" "),n("pre",[n("code",[e._v("background: #58a;\n  background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,0.4) 0) no-repeat 100% 0 / 3em 1.73em,linear-gradient(-150deg, transparent 1.5em, #58a 0);")])]),e._v(" "),n("p",[e._v("折角的长宽3em和1.73em是依据三角形的勾股定理得来的。")]),e._v(" "),n("p",[e._v("上面的折角其实是不真实的，真实的折角会旋转一定的角度。由于无法旋转背景，只好使用伪元素。")]),e._v(" "),n("p",[e._v("伪元素的写法：")]),e._v(" "),n("pre",[n("code",[e._v('position: relative;\n  background: #58a;\n  background: linear-gradient(-150deg, transparent 1.5em,#58a 0);\n  &:before{\n    content: "";\n    position: absolute;\n    width:3em;\n    height:1.73em;\n    top:0;\n    right:0;\n    background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,0.4) 0);\n  }')])]),e._v(" "),n("div",{staticClass:"exp angle-3"},[n("div")]),e._v(" "),n("p",[e._v("要做到真实的效果，需要将折页三角形的宽和高对调，向上偏移一定的位置并旋转30度。")]),e._v(" "),n("div",{staticClass:"exp angle-3 angle-4"},[n("div")]),e._v(" "),n("pre",[n("code",[e._v("&:before{\n  width:1.73em;\n  height:3em;\n  transform: translateY(-1.3em) rotate(-30deg);\n  transform-origin: bottom right;\n}")])]),e._v(" "),n("p",[e._v("更加好看的一种折角效果：（增加了阴影，圆角）")]),e._v(" "),n("div",{staticClass:"exp angle-3 angle-4 angle-5"},[n("div")]),e._v(" "),n("pre",[n("code",[e._v("border-radius: .5em;\n&:before{\n  border-bottom-left-radius: inherit;\n  box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0,0,0,0.15);\n}")])])])}]}}});