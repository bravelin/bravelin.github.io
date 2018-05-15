webpackJsonp([8],{W0sf:function(t,e,n){(t.exports=n("iQ/U")(!1)).push([t.i,"\n.exp[data-v-260d22aa]{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\ncanvas[data-v-260d22aa]{\n    width: 300px;\n    height: 150px;\n    border: 1px solid #e0e0e0;\n    border-radius: 4px;\n}\ncanvas.circle[data-v-260d22aa]{\n    height: 300px;\n}\n",""])},esUf:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={extends:n("wkh7").a,mounted:function(){var t=this;t.$nextTick(function(){t.drawStrokedText(),t.drawFilledText(),t.drawStrokedFilledText(),t.drawCircleText()})},methods:{drawStrokedText:function(){var t=this.$refs.c1,e=t.getContext("2d"),n=t.width,s=t.height;e.textAlign="center",e.textBaseline="middle",e.strokeStyle="#f96",e.font="80px 宋体",e.shadowColor="rgba(0,0,0,0.6)",e.shadowOffsetX=5,e.shadowOffsetY=5,e.shadowBlur=8,e.strokeText("HTML5",n/2,s/2)},drawFilledText:function(){var t=this.$refs.c2,e=t.getContext("2d"),n=t.width,s=t.height;e.textAlign="center",e.textBaseline="middle",e.fillStyle="#f96",e.font="80px 宋体",e.shadowColor="rgba(0,0,0,0.6)",e.shadowOffsetX=5,e.shadowOffsetY=5,e.shadowBlur=8,e.fillText("HTML5",n/2,s/2)},drawStrokedFilledText:function(){var t=this.$refs.c3,e=t.getContext("2d"),n=t.width,s=t.height;e.textAlign="center",e.textBaseline="middle",e.fillStyle="#f96",e.strokeStyle="#f96",e.font="80px 宋体",e.shadowColor="rgba(0,0,0,0.6)",e.shadowOffsetX=5,e.shadowOffsetY=5,e.shadowBlur=8,e.strokeText("HTML5",n/2,s/2),e.fillText("HTML5",n/2,s/2)},drawCircleText:function(){var t=this.$refs.c4,e=t.getContext("2d"),n=t.width,s=n/2,r=t.height/2;e.fillStyle="#f96",e.strokeStyle="#f96",e.font="32px 微软雅黑",e.textAlign="center",e.textBaseline="middle";for(var i="ABCDEFGHIJKLNMOPQRSTUVWXYZ",a=n/2-22,l=2*Math.PI/i.length,c=0,o="",h=0;h<i.length;h++)o=i.charAt(h),c=(.5-h)*l,e.save(),e.beginPath(),e.translate(s+Math.cos(c)*a,r-Math.sin(c)*a),e.rotate(Math.PI/2-c),e.fillText(o,0,0),e.strokeText(o,0,0),e.restore()}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[t._v("Canvas学习笔记之三：文本")]),t._v(" "),n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v("概述")]),t._v(" "),n("p",[t._v("Canvas绘图环境提供的与文本有关的方法：")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("h3",{staticClass:"title"},[t._v("文本的描边与填充")]),t._v(" "),n("p",[t._v("文本的描边（带阴影）：")]),t._v(" "),n("div",{staticClass:"exp"},[n("canvas",{ref:"c1",attrs:{width:"300",height:"150"}})]),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("文本的填充（带阴影）：")]),t._v(" "),n("div",{staticClass:"exp"},[n("canvas",{ref:"c2",attrs:{width:"300",height:"150"}})]),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("填充和描边：")]),t._v(" "),n("div",{staticClass:"exp"},[n("canvas",{ref:"c3",attrs:{width:"300",height:"150"}})]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("h3",{staticClass:"title"},[t._v("字型属性font设置")]),t._v(" "),n("p",[t._v("font的各个分量：")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),n("h3",{staticClass:"title"},[t._v("文本的定位")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),n("h3",{staticClass:"title"},[t._v("在圆弧周围绘制文本")]),t._v(" "),n("div",{staticClass:"exp"},[n("canvas",{ref:"c4",staticClass:"circle",attrs:{width:"300",height:"300"}})]),t._v(" "),t._m(17)]),t._v(" "),n("footer",[t._v("2016年06月25日")]),t._v(" "),n("comments"),t._v(" "),n("Catalog",{attrs:{catalog:t.catalog}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("1、strokeText(text, x, y, maxWidth)")]),this._v("：文本的描边；")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("2、fillText(text, x, y, maxWidth)")]),this._v("：文本的填充；")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("3、measureText(text)")]),this._v("：计算文本所占据的宽度。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("与文本有关的属性："),e("strong",[this._v("font")]),this._v("、"),e("strong",[this._v("textAlign")]),this._v("、"),e("strong",[this._v("textBaseline")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("drawStrokedText () {\n    let that = this\n    let el = that.$refs.c1\n    let context = el.getContext('2d')\n    let w = el.width\n    let h = el.height\n    context.textAlign = 'center'\n    context.textBaseline = 'middle'\n    context.strokeStyle = '#f96'\n    context.font = '80px 宋体'\n\n    // 增加阴影\n    context.shadowColor = 'rgba(0,0,0,0.6)'\n    context.shadowOffsetX = 5\n    context.shadowOffsetY = 5\n    context.shadowBlur = 8\n\n    context.strokeText('HTML5', w / 2, h / 2)\n}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("context.fillStyle = '#f96'\ncontext.fillText('HTML5', w / 2, h / 2)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("context.strokeStyle = '#f96'\ncontext.fillStyle = '#f96'\ncontext.strokeText('HTML5', w / 2, h / 2)\ncontext.fillText('HTML5', w / 2, h / 2)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("strokeText()和fillText()方法可以通过可选的第四参数来指定文本的最大宽度。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("1、font-style")]),this._v("：可取值normal、italic（斜体字）、oblique（倾斜的字）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("2、font-variant")]),this._v("：可取值normal、small-caps（设置小型大写字母显示，所有小写字母均会被转换为大写，但是字体会显的略小一点）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("3、font-weight")]),this._v("：可取值normal、bold、bolder、lighter、100、200、300...900（normal相当于数值400，bold相当于数值700）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("4、font-size")]),this._v("：可取值xx-small、x-small、medium、large、x-large、xx-large、smaller、larger、length与%")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("5、line-height")]),this._v("：浏览器强制设置为normal")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("6、font-family")]),this._v("：字体集名称")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("textAlign可以取的值有：start、center、end、left、right")]),this._v("，当canvas元素的dir属性是ltr时，left的效果与start相同，right的效果与end一致；当canvas元素的dir属性是rtl时，left的效果与end相同，right的效果与start一致。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("textBaseline可以取的值有：top、bottom、middle、alphabetic、ideographic、hanging")]),this._v("，默认属性是alphabetic。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("measureText(str)")]),this._v("：此方法可以度量文本的宽度。虽然是不够精确的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("drawCircleText () {\n    let that = this\n    let el = that.$refs.c4\n    let context = el.getContext('2d')\n    let w = el.width\n    let h = el.height\n    let centerX = w / 2\n    let centerY = h / 2\n\n    context.fillStyle = '#f96'\n    context.strokeStyle = '#f96'\n    context.font = '32px 微软雅黑'\n    context.textAlign = 'center'\n    context.textBaseline = 'middle'\n\n    let textStr = 'ABCDEFGHIJKLNMOPQRSTUVWXYZ'\n    let radius = w / 2 - 22\n    let angleDelt = (2 * Math.PI) / textStr.length\n    let currAngle = 0\n    let currChar = ''\n\n    for (let k = 0; k < textStr.length; k++) {\n        currChar = textStr.charAt(k)\n        currAngle = (0.5 - k) * angleDelt\n        context.save()\n        context.beginPath()\n        context.translate(centerX + Math.cos(currAngle) * radius, centerY - Math.sin(currAngle) * radius)\n        context.rotate(Math.PI / 2 - currAngle)\n        context.fillText(currChar, 0, 0)\n        context.strokeText(currChar, 0, 0)\n        context.restore()\n    }\n}")])])}]};var i=n("rAbc")(s,r,!1,function(t){n("fU7/")},"data-v-260d22aa",null);e.default=i.exports},"fU7/":function(t,e,n){var s=n("W0sf");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("vK0y")("89d62cea",s,!0,{})}});