webpackJsonp([2],{AA3o:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},LROm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("3ErM"),r=n("u3//"),o={paint:function(t,e){e.save(),e.beginPath(),e.arc(t.left+t.width/2,t.top+t.height/2,25,0,2*Math.PI,!1),e.clip(),e.shadowColor="rgb(0,0,0)",e.shadowOffsetX=-4,e.shadowOffsetY=-4,e.shadowBlur=8,e.lineWidth=2,e.strokeStyle="rgb(100, 100, 195)",e.fillStyle="rgba(30, 144, 255, 0.15)",e.stroke(),e.fill(),e.restore()}},a={extends:i.a,data:function(){return{sprites:[]}},mounted:function(){var t=this;t.$nextTick(function(){t.drawBallBySprite(),t.drawBalls(),t.drawAniBalls()})},methods:{drawBallBySprite:function(){var t=this.$refs.c1,e=t.getContext("2d"),n=new r.a({painter:o,left:100,top:100});e.fillStyle="#ffffff",e.fillRect(0,0,t.width,t.height),n.paint(e)},drawBalls:function(){var t=this.$refs.c2,e=t.getContext("2d"),n=new r.a({painter:o,left:60,top:60}),i=new r.a({painter:o,left:160,top:160});e.fillStyle="#ffffff",e.fillRect(0,0,t.width,t.height),n.paint(e),i.paint(e)},drawAniBalls:function(){var t={paint:function(t,e){var n=e.createRadialGradient(t.left,t.top,0,t.left,t.top,t.radius);n.addColorStop(.3,t.innerColor),n.addColorStop(.5,t.middleColor),n.addColorStop(1,t.outerColor),e.save(),e.fillStyle=n,e.strokeStyle=t.strokeStyle,e.beginPath(),e.arc(t.left,t.top,t.radius,0,2*Math.PI,!1),e.fill(),e.stroke(),e.restore()}},e={execute:function(t,e,n){(t.left+t.velocityX+t.radius>e.canvas.width||t.left+t.velocityX-t.radius<0)&&(t.velocityX=-t.velocityX),(t.top+t.velocityY+t.radius>e.canvas.height||t.top+t.velocityY-t.radius<0)&&(t.velocityY=-t.velocityY),t.left+=t.velocityX,t.top+=t.velocityY}},n=[];n.push(new r.a({painter:t,behaviors:[e],left:50,top:20,velocityX:-3.2,velocityY:3.5,radius:16,innerColor:"rgba(255,255,0,1)",middleColor:"rgba(255,255,0,0.7)",outerColor:"rgba(255,255,0,0.5)",strokeStyle:"gray"})),n.push(new r.a({painter:t,behaviors:[e],left:50,top:150,velocityX:2.2,velocityY:2.5,radius:22,innerColor:"rgba(100,145,230,1)",middleColor:"rgba(100,145,230,0.7)",outerColor:"rgba(100,145,230,0.5)",strokeStyle:"blue"})),n.push(new r.a({painter:t,behaviors:[e],left:150,top:75,velocityX:1.2,velocityY:1.5,radius:18,innerColor:"rgba(255,0,0,1)",middleColor:"rgba(255,0,0,0.7)",outerColor:"rgba(255,0,0,0.5)",strokeStyle:"orange"})),this.sprites=n,this.animate()},animate:function(t){var e=this.$refs.c3,n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,e.width,e.height),this.sprites.forEach(function(t){t.update(n)}),this.sprites.forEach(function(t){t.paint(n)}),window.requestAnimationFrame(this.animate)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[t._v("Canvas学习笔记之六：精灵")]),t._v(" "),n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v("概述")]),t._v(" "),n("p",[t._v("精灵对象可以接受调用者的命令，来执行某些特定的操作，例如下落、飞行、弹起等。")]),t._v(" "),n("p",[t._v("painter属性是一个指向Painter对象的引用，该对象使用paint(sprite, context)方法来绘制精灵；behaviors属性指向一个对象数组，数组中的每个对象都会以execute(sprite,context,time)方法来对精灵进行某种形式的操作：")]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("使用精灵绘制的小球：")]),t._v(" "),n("div",{staticClass:"exp"},[n("canvas",{ref:"c1",attrs:{width:"300",height:"200"}})]),t._v(" "),n("p",[t._v("定义一个painterObj即可：")]),t._v(" "),t._m(1),t._v(" "),n("h3",{staticClass:"title"},[t._v("绘制器")]),t._v(" "),n("p",[t._v("Sprite对象与绘制其内容的绘制器之间是解耦的。如此可在程序运行时动态地设置绘制器，提高了灵活性。")]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("多个小球，复用painter：")]),t._v(" "),n("div",{staticClass:"exp"},[n("canvas",{ref:"c2",attrs:{width:"300",height:"200"}})]),t._v(" "),t._m(3),t._v(" "),n("h3",{staticClass:"title"},[t._v("动画循环")]),t._v(" "),n("p",[t._v("大部分情况下，基于精灵的可以复用的动画循环模式如下：")]),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("使用精灵模式实现的三个小球运动动画：")]),t._v(" "),n("div",{staticClass:"exp"},[n("canvas",{ref:"c3",attrs:{width:"300",height:"200"}})]),t._v(" "),n("p",[t._v("定义绘制器对象和行为对象：")]),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("添加三个精灵：")]),t._v(" "),t._m(6),t._v(" "),n("p",[t._v("执行动画函数：")]),t._v(" "),t._m(7)]),t._v(" "),n("footer",[t._v("2016年07月15日")]),t._v(" "),n("Comments"),t._v(" "),n("Catalog",{attrs:{catalog:t.catalog}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("// canvas 精灵对象\nclass Sprite {\n    constructor (options) {\n        this.name = options.name || 'sprite'\n        this.painter = options.painter\n\n        this.top = options.top || 0\n        this.left = options.left || 0\n        this.width = options.width || 0\n        this.height = options.height || 0\n        this.velocityX = options.velocityX || 0\n        this.velocityY = options.velocityY || 0\n        this.visible = options.visible || true\n        this.animating = options.animating || false\n        this.behaviors = options.behaviors || []\n        // 精灵对象的其他属性\n        Object.keys(options).forEach(key => {\n            if (this[key] == undefined) {\n                this[key] = options[key]\n            }\n        })\n    }\n    paint (context) {\n        if (this.painter && this.visible) {\n            this.painter.paint(this, context)\n        }\n    }\n    update (context, time) {\n        this.behaviors.forEach(behavior => {\n            behavior.execute(this, context, time)\n        })\n    }\n}\nexport default Sprite")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("const that = this\nconst c1 = that.$refs.c1\nconst ctx = c1.getContext('2d')\nconst radius = 25\nconst painterObj = {\n    paint (sprite, context) {\n        context.beginPath()\n        context.arc(sprite.left + sprite.width / 2, sprite.top + sprite.height / 2, radius, 0, Math.PI * 2, false)\n        context.clip()\n        context.shadowColor = 'rgb(0,0,0)'\n        context.shadowOffsetX = -4\n        context.shadowOffsetY = -4\n        context.shadowBlur = 8\n        context.lineWidth = 2\n        context.strokeStyle = 'rgb(100, 100, 195)'\n        context.fillStyle = 'rgba(30, 144, 255, 0.15)'\n        context.stroke()\n        context.fill()\n    }\n}\nlet ball = new Sprite({\n    painter: painterObj,\n    left: 100,\n    top: 100\n})\nctx.fillStyle = '#ffffff'\nctx.fillRect(0, 0, c1.width, c1.height)\nball.paint(ctx)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("精灵对象不需要自己完成绘制操作，而是将绘制操作代理给另外一个对象来做。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("const that = this\nconst c2 = that.$refs.c2\nconst ctx = c2.getContext('2d')\nconst b1 = new Sprite({\n    painter: painterObj,\n    left: 60,\n    top: 60\n})\nconst b2 = new Sprite({\n    painter: painterObj,\n    left: 160,\n    top: 160\n})\nctx.fillStyle = '#ffffff'\nctx.fillRect(0, 0, c2.width, c2.height)\nb1.paint(ctx)\nb2.paint(ctx)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("var sprites = [new Sprite(), ...]\nvar context = ...\nfunction animate (time) {\n    var i = 0\n    ...\n    context.clearRect(0,0,context.canvas.width,context.canvas.height)\n    drawBackground() // 绘制背景\n    for(i = 0; i < sprites.length; i++) { // 更新状态\n        sprites[i].update(context, time)\n    }\n    for(i = 0; i < sprites.length; i++) { // 绘制\n        sprites[i].paint(context)\n    }\n    window.requestAnimationFrame(animate)\n}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("const that = this\nconst painter = { // 绘制器对象\n    paint (sprite, context) {\n        let gradient = context.createRadialGradient(sprite.left, sprite.top, 0, sprite.left, sprite.top, sprite.radius)\n        gradient.addColorStop(0.3, sprite.innerColor)\n        gradient.addColorStop(0.5, sprite.middleColor)\n        gradient.addColorStop(1, sprite.outerColor)\n        context.save()\n        context.fillStyle = gradient\n        context.strokeStyle = sprite.strokeStyle\n        context.beginPath()\n        context.arc(sprite.left, sprite.top, sprite.radius, 0, Math.PI * 2, false)\n        context.fill()\n        context.stroke()\n        context.restore()\n    }\n}\nconst move = { // behavior对象\n    execute (sprite, context, time) {\n        if (sprite.left + sprite.velocityX + sprite.radius > context.canvas.width || sprite.left + sprite.velocityX - sprite.radius < 0) {\n            sprite.velocityX = -sprite.velocityX\n        }\n        if (sprite.top + sprite.velocityY + sprite.radius > context.canvas.height || sprite.top + sprite.velocityY - sprite.radius < 0) {\n            sprite.velocityY = -sprite.velocityY\n        }\n        sprite.left += sprite.velocityX\n        sprite.top += sprite.velocityY\n    }\n}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("let arr = [] // 添加三个精灵\narr.push(new Sprite({\n    painter: painter,\n    behaviors: [move],\n    left: 50,\n    top: 20,\n    velocityX: -3.2,\n    velocityY: 3.5,\n    radius: 16,\n    innerColor: 'rgba(255,255,0,1)',\n    middleColor: 'rgba(255,255,0,0.7)',\n    outerColor: 'rgba(255,255,0,0.5)',\n    strokeStyle: 'gray'\n}))\narr.push(new Sprite({\n    painter: painter,\n    behaviors: [move],\n    left: 50,\n    top: 150,\n    velocityX: 2.2,\n    velocityY: 2.5,\n    radius: 22,\n    innerColor: 'rgba(100,145,230,1)',\n    middleColor: 'rgba(100,145,230,0.7)',\n    outerColor: 'rgba(100,145,230,0.5)',\n    strokeStyle: 'blue'\n}))\narr.push(new Sprite({\n    painter: painter,\n    behaviors: [move],\n    left: 150,\n    top: 75,\n    velocityX: 1.2,\n    velocityY: 1.5,\n    radius: 18,\n    innerColor: 'rgba(255,0,0,1)',\n    middleColor: 'rgba(255,0,0,0.7)',\n    outerColor: 'rgba(255,0,0,0.5)',\n    strokeStyle: 'orange'\n}))\nthat.sprites = arr\nthat.animate()")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("animate (time) {\n    const that = this\n    const canvas = that.$refs.c3\n    const ctx = canvas.getContext('2d')\n    ctx.fillStyle = '#ffffff'\n    ctx.fillRect(0, 0, canvas.width, canvas.height)\n    that.sprites.forEach(sprite => {\n        sprite.update(ctx)\n    })\n    that.sprites.forEach(sprite => {\n        sprite.paint(ctx)\n    })\n    window.requestAnimationFrame(that.animate)\n}")])])}]};var l=n("Z0/y")(a,s,!1,function(t){n("Md6X")},"data-v-36b26b66",null);e.default=l.exports},Md6X:function(t,e,n){var i=n("SOqR");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("FIqI")("e300f534",i,!0,{})},SOqR:function(t,e,n){(t.exports=n("UTlt")(!1)).push([t.i,"\n.exp[data-v-36b26b66]{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\ncanvas[data-v-36b26b66]{\n    width: 300px;\n    height: 200px;\n    border: 1px solid #e0e0e0;\n    border-radius: 4px;\n}\n",""])},"u3//":function(t,e,n){"use strict";var i=n("ZLEe"),r=n.n(i),o=n("AA3o"),a=n.n(o),s=n("xSur"),l=n.n(s),c=function(){function t(e){var n=this;a()(this,t),this.name=e.name||"sprite",this.painter=e.painter,this.top=e.top||0,this.left=e.left||0,this.width=e.width||0,this.height=e.height||0,this.velocityX=e.velocityX||0,this.velocityY=e.velocityY||0,this.visible=e.visible||!0,this.animating=e.animating||!1,this.behaviors=e.behaviors||[],r()(e).forEach(function(t){void 0==n[t]&&(n[t]=e[t])})}return l()(t,[{key:"paint",value:function(t){this.painter&&this.visible&&this.painter.paint(this,t)}},{key:"update",value:function(t,e){var n=this;this.behaviors.forEach(function(i){i.execute(n,t,e)})}}]),t}();e.a=c},xSur:function(t,e,n){"use strict";e.__esModule=!0;var i,r=n("liLe"),o=(i=r)&&i.__esModule?i:{default:i};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()}});