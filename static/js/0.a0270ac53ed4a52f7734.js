webpackJsonp([0,41],{1:function(e,t){"use strict";e.exports={mounted:function(){this.$nextTick(function(){var e=document.querySelectorAll("code");if(e.length>0)for(var t=0;t<e.length;t++)hljs.highlightBlock(e[t])})}}},2:function(e,t,n){var a,s;a=n(1);var r=n(3);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,e.exports=a},3:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},staticRenderFns:[]}},23:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var s=n(2),r=a(s);e.exports={extends:r.default,mounted:function(){},methods:{}}},57:function(e,t,n){t=e.exports=n(5)(),t.push([e.id,".exp[data-v-0256993d]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}canvas[data-v-0256993d]{width:300px;height:150px;border:1px solid #e0e0e0;border-radius:4px}",""])},64:function(e,t,n){var a=n(57);"string"==typeof a&&(a=[[e.id,a,""]]);n(6)(a,{});a.locals&&(e.exports=a.locals)},84:function(e,t,n){var a,s;n(64),a=n(23);var r=n(119);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,s._scopeId="data-v-0256993d",e.exports=a},119:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[e._v("Canvas学习笔记之四：图像与视频")]),e._v(" "),e._m(0),e._v(" "),n("footer",[e._v("2016年06月30日")]),e._v(" "),n("comments")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("p",[e._v("Canvas环境对象提供了4个用于绘制及操作图像的方法："),n("strong",[e._v("drawImage、putImageData、getImageData、createImageData")]),e._v("。")]),e._v(" "),n("h3",{staticClass:"title"},[e._v("图像的绘制")]),e._v(" "),n("p",[e._v("必须等待图片加载完成之后才能对其进行绘制，如果尚未完成加载，drawImage()方法将会失败，并且没有任何提示。通常绘制的方法会放在onload()回调函数中。")]),e._v(" "),n("p",[e._v("图像的绘制效果受制于阴影、剪辑区域、图像合成等因素。")]),e._v(" "),n("p",[e._v("drawImage()方法会将一幅图像绘制到canvas中，所绘的图像称之为“源图像”，绘制到的地方称之为“目标canvas”。drawImage()可以接收以下3套参数：")]),e._v(" "),n("p",[n("strong",[e._v("drawImage(image, dx, dy)")])]),e._v(" "),n("p",[n("strong",[e._v("drawImage(image, dx, dy, dw, dh)")])]),e._v(" "),n("p",[n("strong",[e._v("drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)")])]),e._v(" "),n("p",[e._v("第一个参数可以是图像对象，也可以是一个canvas对象，或者video视频对象。")])])}]}}});