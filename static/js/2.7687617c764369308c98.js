webpackJsonp([2],{EPFC:function(e,a,t){(e.exports=t("iQ/U")(!1)).push([e.i,"\n.exp[data-v-af7384e2]{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\ncanvas[data-v-af7384e2]{\n    width: 300px;\n    height: 150px;\n    border: 1px solid #e0e0e0;\n    border-radius: 4px;\n}\n",""])},gqMk:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={extends:t("wkh7").a,mounted:function(){},methods:{}},s={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"page article"},[a("h2",{staticClass:"title"},[this._v("Canvas学习笔记之四：图像与视频")]),this._v(" "),this._m(0),this._v(" "),a("footer",[this._v("2016年06月30日")]),this._v(" "),a("comments")],1)},staticRenderFns:[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("p",[e._v("Canvas环境对象提供了4个用于绘制及操作图像的方法："),t("strong",[e._v("drawImage、putImageData、getImageData、createImageData")]),e._v("。")]),e._v(" "),t("h3",{staticClass:"title"},[e._v("图像的绘制")]),e._v(" "),t("p",[e._v("必须等待图片加载完成之后才能对其进行绘制，如果尚未完成加载，drawImage()方法将会失败，并且没有任何提示。通常绘制的方法会放在onload()回调函数中。")]),e._v(" "),t("p",[e._v("图像的绘制效果受制于阴影、剪辑区域、图像合成等因素。")]),e._v(" "),t("p",[e._v("drawImage()方法会将一幅图像绘制到canvas中，所绘的图像称之为“源图像”，绘制到的地方称之为“目标canvas”。drawImage()可以接收以下3套参数：")]),e._v(" "),t("p",[t("strong",[e._v("drawImage(image, dx, dy)")])]),e._v(" "),t("p",[t("strong",[e._v("drawImage(image, dx, dy, dw, dh)")])]),e._v(" "),t("p",[t("strong",[e._v("drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)")])]),e._v(" "),t("p",[e._v("第一个参数可以是图像对象，也可以是一个canvas对象，或者video视频对象。")])])}]};var i=t("rAbc")(n,s,!1,function(e){t("rRuf")},"data-v-af7384e2",null);a.default=i.exports},rRuf:function(e,a,t){var n=t("EPFC");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("vK0y")("54c354bd",n,!0,{})}});