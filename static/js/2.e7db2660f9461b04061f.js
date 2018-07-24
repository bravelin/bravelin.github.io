webpackJsonp([2],{"8SKc":function(t,e,n){(t.exports=n("UTlt")(!1)).push([t.i,"\n.exp[data-v-30a35048]{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\ncanvas[data-v-30a35048]{\n    width: 300px;\n    height: 200px;\n    border: 1px solid #e0e0e0;\n    border-radius: 4px;\n}\n",""])},AA3o:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},"L/z0":function(t,e,n){var i=n("8SKc");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("FIqI")("62ae0196",i,!0,{})},LROm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("3ErM"),s=n("AA3o"),a=n.n(s),o=n("xSur"),r=n.n(o),c=function(){function t(e){a()(this,t),this.name=e.name||"sprite",this.painter=e.painter,this.top=e.top||0,this.left=e.left||0,this.width=e.width||0,this.height=e.height||0,this.velocityX=e.velocityX||0,this.velocityY=e.velocityY||0,this.visible=e.visible||!0,this.animating=e.animating||!1,this.behaviors=e.behaviors||[]}return r()(t,[{key:"paint",value:function(t){this.painter&&this.visible&&this.painter.paint(this,t)}},{key:"update",value:function(t,e){var n=this;this.behaviors.forEach(function(i){i.execute(n,t,e)})}}]),t}(),l={extends:i.a,data:function(){return{}},mounted:function(){var t=this;t.$nextTick(function(){t.drawBallBySprite()})},methods:{drawBallBySprite:function(){var t=this.$refs.c1,e=t.getContext("2d"),n=new c({painter:{paint:function(t,e){e.beginPath(),e.arc(t.left+t.width/2,t.top+t.height/2,25,0,2*Math.PI,!1),e.clip(),e.shadowColor="rgb(0,0,0)",e.shadowOffsetX=-4,e.shadowOffsetY=-4,e.shadowBlur=8,e.lineWidth=2,e.strokeStyle="rgb(100, 100, 195)",e.fillStyle="rgba(30, 144, 255, 0.15)",e.stroke(),e.fill()}},left:100,top:100});e.fillStyle="#ffffff",e.fillRect(0,0,t.width,t.height),n.paint(e)}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[t._v("Canvas学习笔记之六：精灵")]),t._v(" "),n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v("概述")]),t._v(" "),n("p",[t._v("精灵对象可以接受调用者的命令，来执行某些特定的操作，例如下落、飞行、弹起等。")]),t._v(" "),n("p",[t._v("painter属性是一个指向Painter对象的引用，该对象使用paint(sprite, context)方法来绘制精灵；behaviors属性指向一个对象数组，数组中的每个对象都会以execute(sprite,context,time)方法来对精灵进行某种形式的操作：")]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("使用精灵绘制的小球：")]),t._v(" "),n("div",{staticClass:"exp"},[n("canvas",{ref:"c1",attrs:{width:"300",height:"200"}})]),t._v(" "),n("p",[t._v("定义一个painterObj即可：")]),t._v(" "),t._m(1),t._v(" "),n("h3",{staticClass:"title"},[t._v("绘制器")])]),t._v(" "),n("footer",[t._v("2016年07月15日")]),t._v(" "),n("Comments"),t._v(" "),n("Catalog",{attrs:{catalog:t.catalog}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("// canvas 精灵对象\nclass Sprite {\n    constructor (options) {\n        this.name = options.name || 'sprite'\n        this.painter = options.painter\n\n        this.top = options.top || 0\n        this.left = options.left || 0\n        this.width = options.width || 0\n        this.height = options.height || 0\n        this.velocityX = options.velocityX || 0\n        this.velocityY = options.velocityY || 0\n        this.visible = options.visible || true\n        this.animating = options.animating || false\n        this.behaviors = options.behaviors || []\n    }\n    paint (context) {\n        if (this.painter && this.visible) {\n            this.painter.paint(this, context)\n        }\n    }\n    update (context, time) {\n        this.behaviors.forEach(behavior => {\n            behavior.execute(this, context, time)\n        })\n    }\n}\nexport default Sprite")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("const that = this\nconst c1 = that.$refs.c1\nconst ctx = c1.getContext('2d')\nconst radius = 25\nconst painterObj = {\n    paint (sprite, context) {\n        context.beginPath()\n        context.arc(sprite.left + sprite.width / 2, sprite.top + sprite.height / 2, radius, 0, Math.PI * 2, false)\n        context.clip()\n        context.shadowColor = 'rgb(0,0,0)'\n        context.shadowOffsetX = -4\n        context.shadowOffsetY = -4\n        context.shadowBlur = 8\n        context.lineWidth = 2\n        context.strokeStyle = 'rgb(100, 100, 195)'\n        context.fillStyle = 'rgba(30, 144, 255, 0.15)'\n        context.stroke()\n        context.fill()\n    }\n}\nlet ball = new Sprite({\n    painter: painterObj,\n    left: 100,\n    top: 100\n})\nctx.fillStyle = '#ffffff'\nctx.fillRect(0, 0, c1.width, c1.height)\nball.paint(ctx)")])])}]};var p=n("Z0/y")(l,h,!1,function(t){n("L/z0")},"data-v-30a35048",null);e.default=p.exports},xSur:function(t,e,n){"use strict";e.__esModule=!0;var i,s=n("liLe"),a=(i=s)&&i.__esModule?i:{default:i};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,a.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()}});