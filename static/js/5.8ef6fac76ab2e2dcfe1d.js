webpackJsonp([5],{"3rd9":function(t,e,n){var i=n("Q2ji");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("FIqI")("255802f3",i,!0,{})},Q2ji:function(t,e,n){(t.exports=n("UTlt")(!1)).push([t.i,"\n.exp[data-v-43c83fe2]{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.gradient[data-v-43c83fe2]{\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    padding-bottom: 5px !important;\n}\ncanvas[data-v-43c83fe2]{\n    width: 250px;\n    height: 250px !important;\n    border: 1px solid #e0e0e0;\n    border-radius: 4px;\n}\n.gradient>canvas[data-v-43c83fe2]{\n    margin-bottom: 15px;\n}\n.grid>canvas[data-v-43c83fe2]{\n    width: 95%;\n}\n",""])},hUYA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={extends:n("3ErM").a,data:function(){return{drawClipAniTimer:null}},mounted:function(){var t=this;t.$nextTick(function(){t.initLinearGradient(),t.initRadialGradient(),t.drawTwoCircle(),t.initGrid(),t.drawDashedLine(),t.drawRoundedRect(),t.drawArrow(),t.drawClipAni()})},methods:{initLinearGradient:function(){var t=this.$refs;this.drawLinearGradient(t.c1,{x0:0,y0:0,x1:250,y1:0}),this.drawLinearGradient(t.c2,{x0:0,y0:0,x1:0,y1:250}),this.drawLinearGradient(t.c3,{x0:0,y0:0,x1:250,y1:250}),this.drawLinearGradient(t.c4,{x0:0,y0:0,x1:0,y1:125})},drawLinearGradient:function(t,e){var n=t.getContext("2d"),i=n.createLinearGradient(e.x0,e.y0,e.x1,e.y1);i.addColorStop(0,"#333"),i.addColorStop(1,"#fff"),n.fillStyle=i,n.fillRect(0,0,t.width,t.height)},initRadialGradient:function(){var t=this.$refs.c5,e=t.getContext("2d"),n=t.width,i=t.height,a=e.createRadialGradient(n/2,i,1,n/2,0,128);a.addColorStop(0,"blue"),a.addColorStop(.25,"white"),a.addColorStop(.5,"purple"),a.addColorStop(.75,"red"),a.addColorStop(1,"yellow"),e.fillStyle=a,e.fillRect(0,0,t.width,t.height)},drawTwoCircle:function(){var t=this.$refs.c6,e=t.getContext("2d"),n=t.width,i=t.height;e.fillStyle="rgba(0,0,0,0.5)",e.shadowColor="rgba(0,0,0,0.8)",e.shadowOffsetX=8,e.shadowOffsetY=8,e.shadowBlur=20,e.arc(n/2,i/2,100,0,2*Math.PI,!0),e.arc(n/2,i/2,70,0,2*Math.PI,!1),e.fill()},initGrid:function(){var t=this.$refs,e=t.c7,n=t.c8,i=t.c9,a=t.c10,r=t.grid.getBoundingClientRect(),s=.95*(r.right-r.left);e.setAttribute("width",s),n.setAttribute("width",s),i.setAttribute("width",s),a.setAttribute("width",s),this.drawGrid(e),this.drawGrid(n),this.drawGrid(i),this.drawGrid(a)},drawGrid:function(t){var e=t.getContext("2d"),n=t.width,i=t.height;e.clearRect(0,0,n,i),e.strokeStyle="#e0e0e0",e.lineWidth=.5;for(var a=10.5;a<n;a+=10)e.beginPath(),e.moveTo(a,0),e.lineTo(a,i),e.stroke();for(var r=10.5;r<i;r+=10)e.beginPath(),e.moveTo(0,r),e.lineTo(n,r),e.stroke()},drawDashedLine:function(){var t=this.$refs.c8,e=t.getContext("2d"),n=15,i=15,a=t.width-20-n,r=t.height-30-i,s=Math.floor(Math.sqrt(a*a+r*r)/4);e.beginPath(),e.strokeStyle="rgba(0,0,0,0.8)",e.lineWidth=1;for(var l=0;l<s;l++)e[l%2==0?"moveTo":"lineTo"](n+a/s*l,i+r/s*l);e.stroke()},drawRoundedRect:function(){var t=this.$refs.c9,e=t.getContext("2d"),n=Math.floor(.9*t.width),i=Math.floor(.9*t.height),a=(t.width-n)/2,r=(t.height-i)/2,s=a+n,l=r+i;e.strokeStyle="rgba(0,0,0,0.5)",e.fillStyle="rgba(0,0,0,0.3)",e.lineWidth=1,e.beginPath(),e.moveTo(a+20,r),e.arcTo(s,r,s,r+20,20),e.arcTo(s,l,s-20,l,20),e.arcTo(a,l,a,l-20,20),e.arcTo(a,r,a+20,r,20),e.stroke(),e.fill()},drawArrow:function(){var t=this.$refs.c10,e=t.getContext("2d"),n=t.width,i=t.height;e.strokeStyle="rgba(0,0,0,0.5)",e.fillStyle="rgba(0,0,0,0.3)",e.beginPath(),e.moveTo(n-30,60),e.lineTo(n-30,i-60),e.quadraticCurveTo(n-30,i-30,n-60,i-30),e.lineTo(n-250,i/2+30),e.quadraticCurveTo(n-300,i/2,n-250,i/2-30),e.lineTo(n-60,30),e.quadraticCurveTo(n-30,30,n-30,60),e.fill(),e.stroke()},drawClipAni:function(){var t=this,e=t.$refs.c11.getContext("2d"),n=e.canvas.width,i=e.canvas.height,a=n/2,r=-1;t.drawClipAniTimer=setInterval(function(){e.fillStyle="#999999",e.fillRect(0,0,n,i),-1==r?(a-=n/100)>0?t.drawAni(a):r=1:(a+=n/100)<n/2?t.drawAni(a):r=-1},50)},drawClipText:function(){var t=this.$refs.c11.getContext("2d"),e=t.canvas.width,n=t.canvas.height;t.save(),t.font="normal 70px 微软雅黑",t.lineWidth=4,t.shadowColor="rgba(100,100,150,0.8)",t.shadowOffsetX=5,t.shadowOffsetY=5,t.shadowBlur=10,t.fillStyle="#ff6666",t.textAlign="center",t.textBaseline="middle",t.fillText("Canvas",e/2,n/2),t.restore()},drawAni:function(t){var e=this.$refs.c11.getContext("2d"),n=e.canvas.width,i=e.canvas.height;e.save(),e.beginPath(),e.arc(n/2,i/2,t,0,2*Math.PI,!0),e.clip(),e.fillStyle="#dddddd",e.fillRect(0,0,n,i),this.drawClipText(),e.restore()}},beforeDestroy:function(){this.drawClipAniTimer&&window.clearInterval(this.drawClipAniTimer)}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page article"},[n("h2",{staticClass:"title"},[t._v("Canvas学习笔记之二：绘制")]),t._v(" "),n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v("Canvas的绘制模型")]),t._v(" "),n("p",[t._v("浏览器按照如下步骤来绘制图形：")]),t._v(" "),n("p",[t._v("(1)将图形绘制到一个无限大的透明位图中，在绘制时遵循当前的填充模式、描边模式以及线条样式；")]),t._v(" "),n("p",[t._v("(2)使用当前绘图环境的阴影设定将图形的阴影绘制到另外的一幅位图中；")]),t._v(" "),n("p",[t._v("(3)将阴影中的每一个像素的alpha分量乘以绘图环境对象的globalAlpha属性值；")]),t._v(" "),n("p",[t._v("(4)将绘有阴影的位图与经过剪辑区域剪切过的canvas进行图像合成，使用当前的合成模式参数；")]),t._v(" "),n("p",[t._v("(5)将图形的每一个像素颜色分量，乘以绘图环境对象的globalAlpha属性值；")]),t._v(" "),n("p",[t._v("(6)将绘有图形的位图，合成到当前经过剪辑区域剪切过的canvas位图之上，使用当前的合成操作符。")]),t._v(" "),n("p",[t._v("只有在启用阴影时才会执行第2~4步。")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("矩形的绘制")]),t._v(" "),n("p",[t._v("Canvas提供如下3个api，分别用于矩形的清除、描边、填充：")]),t._v(" "),t._m(0),t._v(" "),n("h3",{staticClass:"title"},[t._v("渐变色")]),t._v(" "),n("p",[t._v("Canvas支持线性（linear）渐变与放射（radial）渐变。")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"exp gradient"},[n("canvas",{ref:"c1",attrs:{width:"250",height:"250"}}),t._v(" "),n("canvas",{ref:"c2",attrs:{width:"250",height:"250"}}),t._v(" "),n("canvas",{ref:"c3",attrs:{width:"250",height:"250"}}),t._v(" "),n("canvas",{ref:"c4",attrs:{width:"250",height:"250"}})]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("创建线性渐变，需要使用两个圆，他们表示某个圆锥的起始位置。")]),t._v(" "),n("div",{staticClass:"exp gradient"},[n("canvas",{ref:"c5",attrs:{width:"290",height:"290"}})]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("h3",{staticClass:"title"},[t._v("图案填充")]),t._v(" "),t._m(6),t._v(" "),n("p",[t._v('使用createPattern(patternObj, repeatTypeString)方法创建图案，patternObj指的是图案元素，repeatTypeString指的是图案的重复方式："repeat"、"repeat-x"、"repeat-y"以及"no-repeat"4种方式。')]),t._v(" "),n("h3",{staticClass:"title"},[t._v("阴影")]),t._v(" "),n("p",[t._v("阴影效果通过如下4个属性值设置：")]),t._v(" "),t._m(7),t._v(" "),n("h3",{staticClass:"title"},[t._v("路径、描边与填充")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),n("p",[t._v("绘制圆环：")]),t._v(" "),n("div",{staticClass:"exp circle"},[n("canvas",{ref:"c6",attrs:{width:"250",height:"250"}})]),t._v(" "),t._m(11),t._v(" "),n("h3",{staticClass:"title"},[t._v("线段")]),t._v(" "),t._m(12),t._v(" "),n("p",[t._v("网格的绘制：")]),t._v(" "),n("div",{ref:"grid",staticClass:"exp grid"},[n("canvas",{ref:"c7",attrs:{width:"250",height:"250"}})]),t._v(" "),t._m(13),t._v(" "),n("p",[t._v("虚线的绘制：")]),t._v(" "),n("div",{staticClass:"exp grid"},[n("canvas",{ref:"c8",attrs:{width:"250",height:"250"}})]),t._v(" "),t._m(14),t._v(" "),n("p",[t._v("lineCap的取值：butt、round、square，默认为butt，控制线段端点的绘制。")]),t._v(" "),n("p",[t._v("lineJoin的取值：round、bevel、miter，默认值为miter，控制线段的连接点的绘制。")]),t._v(" "),n("p",[t._v("miterLimit：斜接线长度与二分之一线宽的比值，如果斜接线的长度超过了此值，浏览器将以bevel的方式绘制线段的连接点。")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("圆弧与圆形")]),t._v(" "),n("p",[t._v("arc()方法所绘制可能不仅仅是圆弧，如果当前路径有子路径的话，浏览器会将子路径的终点与圆弧的起点用线段连接起来。")]),t._v(" "),n("p",[t._v("另外一个用于创建圆弧路径的方法是arcTo(x1,y1,x2,y2,radius)，参数分别代表两个点及半径，此圆弧与当前点到第一个点(x1,y1)，的连线相切，并且与(x1,y1)到(x2,y2)的连线也相切。")]),t._v(" "),n("p",[t._v("圆角矩形的绘制：")]),t._v(" "),n("div",{ref:"grid",staticClass:"exp grid"},[n("canvas",{ref:"c9",attrs:{width:"250",height:"250"}})]),t._v(" "),t._m(15),t._v(" "),n("h3",{staticClass:"title"},[t._v("贝塞尔曲线")]),t._v(" "),t._m(16),t._v(" "),n("p",[t._v("平方贝塞尔曲线使用quadraticCurveTo方法绘制，接受四个参数，分别表示控制点和锚点的X、Y坐标。所绘制的曲线，会将锚点与当前路径中最后一个点连接起来。")]),t._v(" "),n("p",[t._v("使用贝赛尔曲线绘制圆角：")]),t._v(" "),n("div",{staticClass:"exp grid"},[n("canvas",{ref:"c10",attrs:{width:"250",height:"250"}})]),t._v(" "),t._m(17),t._v(" "),n("h3",{staticClass:"title"},[t._v("坐标系的变换")]),t._v(" "),n("p",[t._v("Canvas中平移、旋转、缩放坐标系的方法：")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),n("p",[t._v("坐标(x, y)绕原点旋转angle角度之后的坐标(x', y')计算如下：")]),t._v(" "),t._m(21),t._v(" "),n("p",[t._v("矩阵变换有下面的方程式：")]),t._v(" "),t._m(22),t._v(" "),n("h3",{staticClass:"title"},[t._v("剪辑区域")]),t._v(" "),n("p",[t._v("由路径定义的一块区域，浏览器会将所有的绘图操作都限制在本区域内。默认情况下剪辑区域就是整个Canvas，除非创建路径并调用clip()方法显式地设置剪辑区域。")]),t._v(" "),n("p",[t._v("利用剪辑区域实现的伸缩式动画：")]),t._v(" "),n("div",{staticClass:"exp clip"},[n("canvas",{ref:"c11",staticStyle:{width:"280px",height:"280px !important"},attrs:{width:"280",height:"280"}})]),t._v(" "),t._m(23)]),t._v(" "),n("footer",[t._v("2016年06月15日")]),t._v(" "),n("Comments"),t._v(" "),n("Catalog",{attrs:{catalog:t.catalog}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("clearRect(double x, double y, double w, double h)\nstrokeRect(double x, double y, double w, double h)\nfillRect(double x, double y, double w, double h)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("线性渐变通过调用"),e("strong",[this._v("createLinearGradient()")]),this._v("方法创建，需要向该方法传入两个点的坐标，两点之间的连线就是canvas建立线性渐变效果的依据，该方法会返回CanvasGradient实例。可以添加颜色停止点设置渐变色。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("initLinearGradient () {\n    let that = this\n    let refs = that.$refs\n    let w = 250\n    let h = 250\n    that.drawLinearGradient(refs.c1, {x0: 0, y0: 0, x1: w, y1: 0})\n    that.drawLinearGradient(refs.c2, {x0: 0, y0: 0, x1: 0, y1: h})\n    that.drawLinearGradient(refs.c3, {x0: 0, y0: 0, x1: w, y1: h})\n    that.drawLinearGradient(refs.c4, {x0: 0, y0: 0, x1: 0, y1: h / 2})\n}\ndrawLinearGradient (el, pos) {\n    let context = el.getContext('2d')\n    let gradient = context.createLinearGradient(pos.x0, pos.y0, pos.x1, pos.y1)\n    gradient.addColorStop(0, 'blue')\n    gradient.addColorStop(0.25, 'white')\n    gradient.addColorStop(0.5, 'purple')\n    gradient.addColorStop(0.75, 'red')\n    gradient.addColorStop(1, 'yellow')\n    context.fillStyle = gradient\n    context.fillRect(0, 0, el.width, el.height)\n}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("使用线性渐变填充时，Canvas会使用最后一种颜色来填充非渐变区域。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("let context = el.getContext('2d')\nlet w = el.width\nlet h = el.height\nlet gradient = context.createRadialGradient(w / 2, h, 1, w / 2, 0, 128)\ngradient.addColorStop(0, '#333')\ngradient.addColorStop(1, '#fff')\ncontext.fillStyle = gradient\ncontext.fillRect(0, 0, el.width, el.height)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("放射渐变的填充范围仅局限于两个圆形所定义的圆锥区域，不会使用最后一个渐变色填充剩余区域。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Canavs允许使用图案对图形和文本进行填充，图案元素可以是这3种："),e("strong",[this._v("Image元素、Video元素、canvas元素。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("1、shadowColor：CSS3格式的颜色，默认值：rgba(0,0,0,0)；")]),this._v(" "),e("li",[this._v("2、shadowOffsetX：阴影的水平像素偏移；")]),this._v(" "),e("li",[this._v("3、shadowOffsetY：阴影的垂直像素偏移；")]),this._v(" "),e("li",[this._v("4、shadowBlur：一个与像素无关的值，该值被用于高斯模糊方程之中。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("strokeRect()和fillRect()是Canavs中仅有的两个可以立即绘制图形的方法，其他方法都是基于路径的。"),e("strong",[this._v("不论一个路径是否开放或者封闭，都可以进行填充。")]),this._v("与路径有关的方法：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[t._v("1、"),n("strong",[t._v("beginPath()")]),t._v("：将当前路径下的子路径都清除，以此重置当前路径；")]),t._v(" "),n("li",[t._v("2、"),n("strong",[t._v("closePath()")]),t._v("：显式地封闭某段开放路径；")]),t._v(" "),n("li",[t._v("3、"),n("strong",[t._v("fill()")]),t._v("：填充；")]),t._v(" "),n("li",[t._v("4、"),n("strong",[t._v("stroke()")]),t._v("：描边；")]),t._v(" "),n("li",[t._v("5、"),n("strong",[t._v("rect(x,y,w,h)")]),t._v("：添加矩形子路径，逆时针方向创建；")]),t._v(" "),n("li",[t._v("6、"),n("strong",[t._v("arc(centerX,centerY,radius,startAngle,endAngle,counterClockwise)")]),t._v("：添加圆弧子路径，counterClockwise默认为false(顺时针)，设置为true则逆时针。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("填充路径是使用"),e("strong",[this._v("非零环绕原则")]),this._v("：从区域内部画一条足够长的线段，与路径的顺时针部分相交则加1，逆时针部分相交则-1，如果最终值为0则不填充该区域，否则填充。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("drawTwoCircle () {\n    let that = this\n    let el = that.$refs.c6\n    let context = el.getContext('2d')\n    let w = el.width\n    let h = el.height\n    context.fillStyle = 'rgba(0,0,0,0.5)'\n    context.shadowColor = 'rgba(0,0,0,0.8)'\n    context.shadowOffsetX = 8\n    context.shadowOffsetY = 8\n    context.shadowBlur = 20\n    context.arc(w / 2, h / 2, 100, 0, 2 * Math.PI, true)\n    context.arc(w / 2, h / 2, 70, 0, 2 * Math.PI, false)\n    context.fill()\n}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("主要有两个API："),e("strong",[this._v("moveTo(x,y)")]),this._v("和"),e("strong",[this._v("lineTo(x,y)")]),this._v("。"),e("strong",[this._v("如果要绘制一像素的线条，需要将其绘制在某两个像素之间的那个像素中。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("drawGrid () {\n    let that = this\n    let el = that.$refs.c7\n    let context = el.getContext('2d')\n    let w = el.width\n    let h = el.height\n    let stepX = 10\n    let stepY = 10\n\n    context.clearRect(0, 0, w, h)\n    context.strokeStyle = '#e0e0e0'\n    context.lineWidth = 0.5\n    for (let i = stepX + 0.5; i < w; i += stepX) {\n        context.beginPath()\n        context.moveTo(i, 0)\n        context.lineTo(i, h)\n        context.stroke()\n    }\n\n    for (let j = stepY + 0.5; j < h; j += stepY) {\n        context.beginPath()\n        context.moveTo(0, j)\n        context.lineTo(w, j)\n        context.stroke()\n    }\n}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("drawDashedLine () {\n    let that = this\n    let el = that.$refs.c8\n    let context = el.getContext('2d')\n    let w = el.width\n    let h = el.height\n    let startPoint = {x: 15, y: 15}\n    let endPoint = {x: w - 20, y: h - 30}\n    let deltX = endPoint.x - startPoint.x\n    let deltY = endPoint.y - startPoint.y\n    let dashLen = 4\n    let num = Math.floor(Math.sqrt(deltX * deltX + deltY * deltY) / dashLen)\n\n    context.beginPath()\n    context.strokeStyle = 'rgba(0,0,0,0.8)'\n    context.lineWidth = 1\n    for (let i = 0; i < num; i++) {\n        context[i % 2 == 0 ? 'moveTo' : 'lineTo'](startPoint.x + (deltX / num) * i, startPoint.y + (deltY / num) * i)\n    }\n    context.stroke()\n}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("drawRoundedRect () {\n    let that = this\n    let el = that.$refs.c9\n    let context = el.getContext('2d')\n    let w = Math.floor(el.width * 0.9)\n    let h = Math.floor(el.height * 0.9)\n    let startX = (el.width - w) / 2\n    let startY = (el.height - h) / 2\n    let radius = 20\n    let endX = startX + w\n    let endY = startY + h\n    context.strokeStyle = 'rgba(0,0,0,0.5)'\n    context.fillStyle = 'rgba(0,0,0,0.3)'\n    context.lineWidth = 1\n    context.beginPath()\n    context.moveTo(startX + radius, startY)\n    context.arcTo(endX, startY, endX, startY + radius, radius)\n    context.arcTo(endX, endY, endX - radius, endY, radius)\n    context.arcTo(startX, endY, startX, endY - radius, radius)\n    context.arcTo(startX, startY, startX + radius, startY, radius)\n    context.stroke()\n    context.fill()\n}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("分为"),e("strong",[this._v("平方贝塞尔曲线")]),this._v("（由两个锚点和一个控制点）和"),e("strong",[this._v("立方贝塞尔曲线")]),this._v("（两个锚点以及两个控制点）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("drawArrow () {\n    let that = this\n    let el = that.$refs.c10\n    let context = el.getContext('2d')\n    let margin = 30\n    let w = el.width\n    let h = el.height\n    context.strokeStyle = 'rgba(0,0,0,0.5)'\n    context.fillStyle = 'rgba(0,0,0,0.3)'\n    context.beginPath()\n    context.moveTo(w - margin, margin * 2)\n    context.lineTo(w - margin, h - margin * 2)\n    context.quadraticCurveTo(w - margin, h - margin, w - margin * 2, h - margin)\n    context.lineTo(w - 250, h / 2 + margin)\n    context.quadraticCurveTo(w - 300, h / 2, w - 250, h / 2 - margin)\n    context.lineTo(w - margin * 2, margin)\n    context.quadraticCurveTo(w - margin, margin, w - margin, margin * 2)\n    context.fill()\n    context.stroke()\n}")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[t._v("1、"),n("strong",[t._v("rotate(angle)")]),t._v("：按照给定的角度旋转坐标系；")]),t._v(" "),n("li",[t._v("2、"),n("strong",[t._v("scale(x, y)")]),t._v("：在X、Y方向上按照设定的数值来缩放坐标系；")]),t._v(" "),n("li",[t._v("3、"),n("strong",[t._v("translate(x, y)")]),t._v("：在X、Y方向上平移坐标系。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("水平镜像变换：scale(-1, 1)；垂直镜像变换：scale(1, -1)。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("操作变换矩阵的方法："),e("strong",[this._v("transform(a,b,c,d,e,f)")]),this._v("（在当前的变换矩阵之上叠加运用变换效果）和"),e("strong",[this._v("setTransform(a,b,c,d,e,f)")]),this._v("（重置当前的变换矩阵）。两者可以实现上面三种变换方法无法实现的变换，比如错切。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("x' = x * cos(angle) - y * sin(angle)\ny' = y * cos(angle) + y * sin(angle)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("x' = a * x + c * y + e\ny' = b * x + d * y + f")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("drawClipAni () {\n    let that = this\n    let context = that.$refs.c11.getContext('2d')\n    let w = context.canvas.width\n    let h = context.canvas.height\n    let radius = w / 2\n    let direction = -1\n\n    setInterval(function () {\n        context.fillStyle = '#333333'\n        context.fillRect(0, 0, w, h)\n        if (direction == -1) {\n            radius -= w / 100\n            if (radius > 0) {\n                that.drawAni(radius)\n            } else {\n                direction = 1\n            }\n        } else {\n            radius += w / 100\n            if (radius < w / 2) {\n                that.drawAni(radius)\n            } else {\n                direction = -1\n            }\n        }\n    }, 50)\n},\ndrawClipText () {\n    let that = this\n    let context = that.$refs.c11.getContext('2d')\n    let w = context.canvas.width\n    let h = context.canvas.height\n    context.save()\n    context.font = 'normal 70px 微软雅黑'\n    context.lineWidth = 4\n    context.shadowColor = 'rgba(100,100,150,0.8)'\n    context.shadowOffsetX = 5\n    context.shadowOffsetY = 5\n    context.shadowBlur = 10\n\n    context.fillStyle = '#ff6666'\n    context.textAlign = 'center'\n    context.textBaseline = 'middle'\n    context.fillText('Canvas', w / 2, h / 2)\n    context.restore()\n},\ndrawAni (radius) {\n    let that = this\n    let context = that.$refs.c11.getContext('2d')\n    let w = context.canvas.width\n    let h = context.canvas.height\n\n    context.save()\n    context.beginPath()\n    context.arc(w / 2, h / 2, radius, 0, 2 * Math.PI, true)\n    context.clip()\n    context.fillStyle = '#dddddd'\n    context.fillRect(0, 0, w, h)\n    that.drawClipText()\n    context.restore()\n}")])])}]};var r=n("Z0/y")(i,a,!1,function(t){n("3rd9")},"data-v-43c83fe2",null);e.default=r.exports}});