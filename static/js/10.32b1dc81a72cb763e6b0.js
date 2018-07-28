webpackJsonp([10],{"1e6/":function(t,e,a){var n=a("bG8p");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("FIqI")("1f6b2418",n,!0,{})},bG8p:function(t,e,a){(t.exports=a("UTlt")(!1)).push([t.i,"\n.exp[data-v-2710279a]{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\ncanvas[data-v-2710279a]{\n    width: 300px;\n    height: 200px;\n    border: 1px solid #e0e0e0;\n    border-radius: 4px;\n}\n",""])},gqMk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={extends:a("3ErM").a,data:function(){return{offScreenCanvas:null}},mounted:function(){var t=this;t.$nextTick(function(){t.drawImg(),t.drawMagnifier(),t.negativeFilter(),t.greyFilter(),t.embossFilter()})},methods:{drawImg:function(){var t=this.$refs.c1,e=t.getContext("2d"),a=t.width,n=t.height,i=new Image;i.onload=function(){e.drawImage(i,0,0,a,n)},i.src="./static/img/1.jpeg"},drawMagnifier:function(){var t=this,e=t.$refs.c2,a=e.getContext("2d"),n=e.width,i=e.height;t.offScreenCanvas=document.createElement("canvas");var s=t.offScreenCanvas.getContext("2d");t.offScreenCanvas.width=n,t.offScreenCanvas.height=i;var r=new Image;r.onload=function(){a.drawImage(r,0,0,n,i),s.drawImage(r,0,0,n,i),t.addMagnifier(a,n,i,n/2,i/2,r)},r.src="./static/img/1.jpeg"},addMagnifier:function(t,e,a,n,i,s){t.save(),t.beginPath(),t.strokeStyle="#ffffff",t.lineWidth=2,t.shadowColor="rgba(0,0,0,0.8)",t.shadowOffsetX=8,t.shadowOffsetY=8,t.shadowBlur=10,t.arc(n,i,20,0,2*Math.PI,!0),t.stroke(),t.clip(),t.drawImage(this.offScreenCanvas,n-20/1.8,i-20/1.8,20/1.8*2,20/1.8*2,n-20,i-20,40,40),t.restore()},windowToCanvas:function(t,e,a){var n=t.getBoundingClientRect();return{x:(e-n.left)*(t.width/n.width),y:(a-n.top)*(t.height/n.height)}},doMouseMoveForMagnifier:function(t){var e=this,a=e.$refs.c2,n=a.getContext("2d"),i=a.width,s=a.height,r=new Image,o=e.windowToCanvas(a,t.clientX,t.clientY);r.onload=function(){n.clearRect(0,0,i,s),n.drawImage(r,0,0,i,s),e.addMagnifier(n,i,s,o.x,o.y,e.offScreenCanvas,r)},r.src="./static/img/1.jpeg"},negativeFilter:function(){var t=this.$refs.c3,e=t.getContext("2d"),a=t.width,n=t.height,i=new Image;i.onload=function(){e.drawImage(i,0,0,a,n);for(var t=e.getImageData(0,0,a,n),s=0;s<t.data.length;s+=4)t.data[s]=255-t.data[s],t.data[s+1]=255-t.data[s+1],t.data[s+2]=255-t.data[s+2];e.putImageData(t,0,0)},i.src="./static/img/1.jpeg"},greyFilter:function(){var t=this.$refs.c4,e=t.getContext("2d"),a=t.width,n=t.height,i=new Image;i.onload=function(){e.drawImage(i,0,0,a,n);for(var t=e.getImageData(0,0,a,n),s=void 0,r=0;r<t.data.length;r+=4)s=(t.data[r]+t.data[r+1]+t.data[r+2])/3,t.data[r]=s,t.data[r+1]=s,t.data[r+2]=s;e.putImageData(t,0,0)},i.src="./static/img/1.jpeg"},embossFilter:function(){var t=this.$refs.c5,e=t.getContext("2d"),a=t.width,n=t.height,i=new Image;i.onload=function(){e.drawImage(i,0,0,a,n);for(var t=e.getImageData(0,0,a,n),s=t.data,r=t.width,o=s.length,c=0;c<o;c++)c<=o-4*r?(c+1)%4!=0&&((c+4)%(4*r)==0?(s[c]=s[c-4],s[c+1]=s[c-3],s[c+2]=s[c-2],s[c+3]=s[c-1],c+=4):s[c]=127.5+2*s[c]-s[c+4]-s[c+4*r]):(c+1)%4!=0&&(s[c]=s[c-4*r]);e.putImageData(t,0,0)},i.src="./static/img/1.jpeg"}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page article"},[a("h2",{staticClass:"title"},[t._v("Canvas学习笔记之四：图像与视频")]),t._v(" "),a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("h3",{staticClass:"title"},[t._v("图像的绘制")]),t._v(" "),a("p",[t._v("必须等待图片加载完成之后才能对其进行绘制，如果尚未完成加载，drawImage()方法将会失败，并且没有任何提示。通常绘制的方法会放在onload()回调函数中。")]),t._v(" "),a("p",[t._v("图像的绘制效果受制于阴影、剪辑区域、图像合成等因素。")]),t._v(" "),a("p",[t._v("drawImage()方法会将一幅图像绘制到canvas中，所绘的图像称之为“源图像”，绘制到的地方称之为“目标canvas”。drawImage()可以接收以下3套参数：")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("第一个参数可以是图像对象，也可以是一个canvas对象，或者video视频对象。")]),t._v(" "),a("div",{staticClass:"exp"},[a("canvas",{ref:"c1",attrs:{width:"300",height:"200"}})]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("h3",{staticClass:"title"},[t._v("离屏Canvas")]),t._v(" "),a("p",[t._v("离屏Canavs通常用来存放临时性的图像信息：")]),t._v(" "),a("p",[t._v("1、创建用做离屏Canvas的元素；")]),t._v(" "),a("p",[t._v("2、设置离屏Canvas的宽度与高度；")]),t._v(" "),a("p",[t._v("3、在离屏Canvas中进行绘制；")]),t._v(" "),a("p",[t._v("4、将离屏Canvas的全部或者一部分内容复制到正在显示的Canvas中。")]),t._v(" "),a("div",{staticClass:"exp"},[a("canvas",{ref:"c2",attrs:{width:"300",height:"200"},on:{mousemove:t.doMouseMoveForMagnifier,touchmove:t.doMouseMoveForMagnifier}})]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("DOM结构：")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("mousemove事件与touchmove事件处理：")]),t._v(" "),t._m(8),t._v(" "),a("h3",{staticClass:"title"},[t._v("操作像素")]),t._v(" "),a("p",[t._v("两个方法：getImageData()和putImageData()。")]),t._v(" "),a("p",[t._v("getImageData方法所返回的ImageData对象包含下列三个属性：width、height、data。")]),t._v(" "),a("p",[t._v("putImageData(Image,dx,dy,dirtyX,dirtyY,dirtyWidth,dirtyHeight)，其中dx与dy表示所绘制的图像距离canvas左上角的X、Y偏移量；方法的最后4个参数代表以设备为单位的脏矩形，当浏览器将脏矩形复制到canvas时，它会将设备像素转换为CSS像素。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("div",{staticClass:"exp"},[a("canvas",{ref:"c3",attrs:{width:"300",height:"200"}})]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("div",{staticClass:"exp"},[a("canvas",{ref:"c4",attrs:{width:"300",height:"200"}})]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("div",{staticClass:"exp"},[a("canvas",{ref:"c5",attrs:{width:"300",height:"200"}})]),t._v(" "),t._m(15),t._v(" "),t._m(16)]),t._v(" "),a("footer",[t._v("2016年06月30日")]),t._v(" "),a("Comments"),t._v(" "),a("Catalog",{attrs:{catalog:t.catalog}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Canvas环境对象提供了4个用于绘制及操作图像的方法："),e("strong",[this._v("drawImage、putImageData、getImageData、createImageData")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("drawImage(image, dx, dy)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("drawImage(image, dx, dy, dw, dh)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("let that = this\nlet el = that.$refs.c1\nlet context = el.getContext('2d')\nlet w = el.width\nlet h = el.height\nlet img = new Image()\nimg.onload = function () { // 在image的onload事件中绘制\n    context.drawImage(img, 0, 0, w, h)\n}\nimg.src = './static/img/1.jpeg'")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("在使用drawImage方法时，务必保证所绘图片已经加载好了。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("drawMagnifier () {\n    let that = this\n    let el = that.$refs.c2\n    let context = el.getContext('2d')\n    let w = el.width\n    let h = el.height\n    that.offScreenCanvas = document.createElement('canvas')\n    let offScreenContext = that.offScreenCanvas.getContext('2d')\n    that.offScreenCanvas.width = w\n    that.offScreenCanvas.height = h\n    let img = new Image()\n    img.onload = function () {\n        context.drawImage(img, 0, 0, w, h)\n        offScreenContext.drawImage(img, 0, 0, w, h)\n        that.addMagnifier(context, w, h, w / 2, h / 2, img)\n    }\n    img.src = './static/img/1.jpeg'\n}\n// 绘制放大镜\naddMagnifier (context, w, h, x, y, img) {\n    const that = this\n    let scale = 1.8\n    let radius = 20\n    context.save()\n    context.beginPath()\n    context.strokeStyle = '#ffffff'\n    context.lineWidth = 2\n    context.shadowColor = 'rgba(0,0,0,0.8)'\n    context.shadowOffsetX = 8\n    context.shadowOffsetY = 8\n    context.shadowBlur = 10\n    context.arc(x, y, radius, 0, 2 * Math.PI, true)\n    context.stroke()\n    context.clip()\n    context.drawImage(that.offScreenCanvas, x - radius / scale, y - radius / scale, (radius / scale) * 2, (radius / scale) * 2, x - radius, y - radius, radius * 2, radius * 2)\n    context.restore()\n}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('<canvas ref="c2" width="300" height="200" @mousemove="doMouseMoveForMagnifier" @touchmove="doMouseMoveForMagnifier"></canvas>')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("doMouseMoveForMagnifier (e) {\n    const that = this\n    let el = that.$refs.c2\n    let context = el.getContext('2d')\n    let w = el.width\n    let h = el.height\n    let img = new Image()\n    let pos = that.windowToCanvas(el, e.clientX, e.clientY)\n    img.onload = function () {\n        context.clearRect(0, 0, w, h)\n        context.drawImage(img, 0, 0, w, h)\n        that.addMagnifier(context, w, h, pos.x, pos.y, that.offScreenCanvas, img)\n    }\n    img.src = './static/img/1.jpeg' // 图片地址\n}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("putImageData方法不受全局设置（globalAlpha、globalCompositeOperation等）的影响。因为它是直接操作像素的。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("负片滤镜")]),this._v("：从255中减去每个RGB分量值，再将差值设置回去，相当于“反转”了该像素的颜色。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("let imgData = context.getImageData(0, 0, w, h)\nfor (let i = 0; i < imgData.data.length; i = i + 4) {\n    imgData.data[i] = 255 - imgData.data[i]\n    imgData.data[i + 1] = 255 - imgData.data[i + 1]\n    imgData.data[i + 2] = 255 - imgData.data[i + 2]\n}\ncontext.putImageData(imgData, 0, 0)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("黑白滤镜")]),this._v("：计算每个像素的RGB分量的平均值，然后将三个分量都设置为这个均值，于是图片由彩色变成了灰白了。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("let imgData = context.getImageData(0, 0, w, h)\nlet v\nfor (let i = 0; i < imgData.data.length; i = i + 4) {\n    v = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3\n    imgData.data[i] = v\n    imgData.data[i + 1] = v\n    imgData.data[i + 2] = v\n}\ncontext.putImageData(imgData, 0, 0)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("浮雕滤镜")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("let imgData = context.getImageData(0, 0, w, h)\nlet data = imgData.data\nlet width = imgData.width\nlet length = data.length\nfor (let i = 0; i < length; i++) {\n    if (i <= length - width * 4) { // 最后一行像素点特殊处理\n        if ((i + 1) % 4 !== 0) { //RGB分量\n            if ((i + 4) % (width * 4) == 0) { // 每一行最后一个像素点\n                data[i] = data[i - 4]\n                data[i + 1] = data[i - 3]\n                data[i + 2] = data[i - 2]\n                data[i + 3] = data[i - 1]\n                i += 4\n            } else {\n                data[i] = 255 / 2 + 2 * data[i] - data[i + 4] - data[i + width * 4] // 关键点\n            }\n        }\n    } else {\n        if ((i + 1) % 4 !== 0) {\n            data[i] = data[i - width * 4]\n        }\n    }\n}\ncontext.putImageData(imgData, 0, 0)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("如果在大一些的图片上应用复杂的处理算法，可以使用WebWorker。")])])}]};var s=a("Z0/y")(n,i,!1,function(t){a("1e6/")},"data-v-2710279a",null);e.default=s.exports}});