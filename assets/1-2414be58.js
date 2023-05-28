import{u as w}from"./highlight-2e3cec98.js";import{u}from"./catalog-69e48a3d.js";import{_ as f,b as v,c as _,e as n,l as x,g as h}from"./index-4afbb925.js";import"./article-1b647556.js";const y={setup(){w(),u()},mounted(){const s=this;s.initLinearGradient(),s.initRadialGradient(),s.drawRing(),s.initGrid(),s.drawDashedLine(),s.drawRoundedRect(),s.drawArrow(),s.drawClipAni()},methods:{initLinearGradient(){const s=this,e=s.$refs,t=250,o=250;s.drawLinearGradient(e.c1,{x0:0,y0:0,x1:t,y1:0}),s.drawLinearGradient(e.c2,{x0:0,y0:0,x1:0,y1:o}),s.drawLinearGradient(e.c3,{x0:0,y0:0,x1:t,y1:o}),s.drawLinearGradient(e.c4,{x0:0,y0:0,x1:0,y1:o/2})},drawLinearGradient(s,e){const t=s.getContext("2d"),o=t.createLinearGradient(e.x0,e.y0,e.x1,e.y1);o.addColorStop(0,"#333"),o.addColorStop(1,"#fff"),t.fillStyle=o,t.fillRect(0,0,s.width,s.height)},initRadialGradient(){const e=this.$refs.c5,t=e.getContext("2d"),o=e.width,a=e.height,i=t.createRadialGradient(o/2,a,1,o/2,0,128);i.addColorStop(0,"blue"),i.addColorStop(.25,"white"),i.addColorStop(.5,"purple"),i.addColorStop(.75,"red"),i.addColorStop(1,"yellow"),t.fillStyle=i,t.fillRect(0,0,e.width,e.height)},drawRing(){const e=this.$refs.c6,t=e.getContext("2d"),o=e.width,a=e.height;t.fillStyle="rgba(0,0,0,0.5)",t.shadowColor="rgba(0,0,0,0.8)",t.shadowOffsetX=8,t.shadowOffsetY=8,t.shadowBlur=20,t.arc(o/2,a/2,100,0,2*Math.PI,!0),t.arc(o/2,a/2,70,0,2*Math.PI,!1),t.fill()},initGrid(){const s=this,e=s.$refs,t=e.c7,o=e.c8,a=e.c9,i=e.c10,l=e.grid.getBoundingClientRect(),c=(l.right-l.left)*.95;t.setAttribute("width",c),o.setAttribute("width",c),a.setAttribute("width",c),i.setAttribute("width",c),s.drawGrid(t),s.drawGrid(o),s.drawGrid(a),s.drawGrid(i)},drawGrid(s){const e=s.getContext("2d"),t=s.width,o=s.height,a=10,i=10;e.clearRect(0,0,t,o),e.strokeStyle="#e0e0e0",e.lineWidth=.5;for(let r=a+.5;r<t;r+=a)e.beginPath(),e.moveTo(r,0),e.lineTo(r,o),e.stroke();for(let r=i+.5;r<o;r+=i)e.beginPath(),e.moveTo(0,r),e.lineTo(t,r),e.stroke()},drawDashedLine(){const e=this.$refs.c8,t=e.getContext("2d"),o=e.width,a=e.height,i={x:15,y:15},r={x:o-20,y:a-30},l=r.x-i.x,c=r.y-i.y,d=4,p=Math.floor(Math.sqrt(l*l+c*c)/d);t.beginPath(),t.strokeStyle="rgba(0,0,0,0.8)",t.lineWidth=1;for(let g=0;g<p;g++)t[g%2==0?"moveTo":"lineTo"](i.x+l/p*g,i.y+c/p*g);t.stroke()},drawRoundedRect(){const e=this.$refs.c9,t=e.getContext("2d"),o=Math.floor(e.width*.9),a=Math.floor(e.height*.9),i=(e.width-o)/2,r=(e.height-a)/2,l=20,c=i+o,d=r+a;t.strokeStyle="rgba(0,0,0,0.5)",t.fillStyle="rgba(0,0,0,0.3)",t.lineWidth=1,t.beginPath(),t.moveTo(i+l,r),t.arcTo(c,r,c,r+l,l),t.arcTo(c,d,c-l,d,l),t.arcTo(i,d,i,d-l,l),t.arcTo(i,r,i+l,r,l),t.stroke(),t.fill()},drawArrow(){const e=this.$refs.c10,t=e.getContext("2d"),o=30,a=e.width,i=e.height;t.strokeStyle="rgba(0,0,0,0.5)",t.fillStyle="rgba(0,0,0,0.3)",t.beginPath(),t.moveTo(a-o,o*2),t.lineTo(a-o,i-o*2),t.quadraticCurveTo(a-o,i-o,a-o*2,i-o),t.lineTo(a-250,i/2+o),t.quadraticCurveTo(a-300,i/2,a-250,i/2-o),t.lineTo(a-o*2,o),t.quadraticCurveTo(a-o,o,a-o,o*2),t.fill(),t.stroke()},drawClipAni(){const s=this,e=s.$refs.c11.getContext("2d"),t=e.canvas.width,o=e.canvas.height;let a=t/2,i=-1;s.drawClipAniTimer=setInterval(function(){e.fillStyle="#999999",e.fillRect(0,0,t,o),i==-1?(a-=t/100,a>0?s.drawAni(a):i=1):(a+=t/100,a<t/2?s.drawAni(a):i=-1)},50)},drawClipText(){const e=this.$refs.c11.getContext("2d"),t=e.canvas.width,o=e.canvas.height;e.save(),e.font="normal 70px 微软雅黑",e.lineWidth=4,e.shadowColor="rgba(100,100,150,0.8)",e.shadowOffsetX=5,e.shadowOffsetY=5,e.shadowBlur=10,e.fillStyle="#ff6666",e.textAlign="center",e.textBaseline="middle",e.fillText("Canvas",t/2,o/2),e.restore()},drawAni(s){const e=this,t=e.$refs.c11.getContext("2d"),o=t.canvas.width,a=t.canvas.height;t.save(),t.beginPath(),t.arc(o/2,a/2,s,0,2*Math.PI,!0),t.clip(),t.fillStyle="#dddddd",t.fillRect(0,0,o,a),e.drawClipText(),t.restore()}},beforeUnmount(){}},C={class:"article-container canvas-learning-1-article"},m=n("h2",{class:"article-title"},"Canvas学习笔记之一：基础知识与基本的绘制方法",-1),b={class:"article-content"},T=x(`<h3 class="title">Canvas元素</h3><p>在设置Canvas的宽度与高度属性时，不能使用px后缀，并且只能是非负整数。</p><p>默认情况下，浏览器创建的Canvas元素是300*150的尺寸。Canvas元素有两套尺寸，一是元素本身的大小；二是元素绘图表面的大小。</p><p>通过设置属性width和height时，实际上同时修改了该元素本身的大小和绘图表面的大小；如果通过CSS设定Canvas元素的大小，那么只会改变元素本身的大小，而不会影响到绘图表面，此时浏览器会对绘图表面进行缩放，使其符合元素的大小。</p><p>Canvas元素提供如下3个方法：</p><p><strong>1、getContext()</strong>：返回与该canvas元素相关的绘图环境对象；</p><p><strong>2、toDataURL(type, quality)</strong>：返回一个数据地址（图片的base64编码），type默认为image/png，第二个参数是0~1.0之间的数值，表示JPEG图片的质量（当type为image/jpeg）。</p><p><strong>3、toBlob(callback, type, args...)</strong>：创建一个表示此canvas元素图像文件的Blob，type为image/png或者image/jpeg，第3个参数如同toDataURL中的quality（写成args...是可能会扩展）。</p><h3 class="title">绘图环境</h3><p>2D绘图环境通常指CanvasRenderingContent2D对象，此对象的属性如下：</p><p><strong>1、canvas</strong>：指向绘图环境所属的canvas对象，常见用途是用来获取canvas的宽度与高度，分别调用context.canvas.width与context.canvas.height。</p><p><strong>2、fillstyle</strong>：设定绘图环境在后续图形填充操作中所使用的颜色、渐变色和图案。</p><p><strong>3、font</strong>：在调用绘图环境对象的fillText()或者strokeText()方法时，使用的字型。</p><p><strong>4、globalAlpha</strong>：全局透明度设定，0~1.0之间的值。浏览器会将每个像素的alpha值与之相乘。</p><p><strong>5、globalCompsiteOperation：</strong>设定将某个物体绘制在其他物体之上时的绘制方式。</p><p><strong>6、lineCap</strong>：设置绘制线段端点的方式。</p><p><strong>7、lineWidth</strong>：设置绘制线段的屏幕像素的宽度，默认值1.0。</p><p><strong>8、lineJoin</strong>：设定两条线段相交时如何绘制焦点，可取的值：bevel、round、miter（默认值）。</p><p><strong>9、miterLimit</strong>：设定如何绘制miter形式的焦点。</p><p><strong>10、strokeStyle</strong>：设定对路径进行描边的风格，可以是某个颜色值、渐变色或者图案。</p><p><strong>11、textAlign</strong>：设定文本的水平对齐方式。</p><p><strong>11、textBaseline</strong>：设定文本的垂直对齐方式。</p><p>阴影相关的属性：</p><p><strong>12、shadowBlur</strong>：设定阴影的延伸效果，值越高，阴影延伸的越远，默认值为0。</p><p><strong>13、shadowColor</strong>：设定阴影的颜色。通常使用半透明色。</p><p><strong>14、shadowOffsetX</strong>：阴影效果的水平方向偏移量。</p><p><strong>15、shadowOffsetY</strong>：阴影效果的垂直方向偏移量。</p><p>save()和restore()是绘图环境对象中与状态操作的两个方法。</p><p>鼠标坐标转为Canvas坐标，使用如下方法</p><pre><code>function windowToCanvas (canvas, x ,y) {
    var box = canvas.getBoundingClientRect()
    return { x: (x - box.left) * (canvas.width / box.width), y: (y - box.top) * (canvas.height / box.height) }
}</code></pre><p><strong>Canvas常用的是“立即模式”（immediate-mode）来绘制图形的，它会立即将所指定的内容绘制在canvas上，然后忘记刚才绘制的内容。“保留模式”（retained-mode）会维护一份所绘图形对象的列表。</strong></p><h3 class="title">基础数学知识</h3><p>弧度与角度的转换：<strong>π = 180度   1弧度 = (180 / π) 度    1度 = (π / 180) 弧度</strong></p><p>二维向量含有两个值：方向和大小。{ x: x, y: y }，向量的大小通过勾股定理（毕达哥拉斯定理）计算出来：</p><pre><code>var magnitude = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2))</code></pre><p>单位向量是长度为1的向量，通常用来指示方向：</p><pre><code>var magnitude = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2))
var unitVector = new Vector()
uniteVector.x = vector.x / magnitude
uniteVector.y = vector.y / magnitude</code></pre><p>向量的加减即将两个向量对应的x和y相加减即可。</p><p><strong>向量的点积</strong>是将两个向量的对应分量相乘然后再相加：v1.x * v2.x + v1.y * v2.y。当点积大于0，意味着两个向量大致处在同一个方向上。</p><p><strong>动画的移动应该以时间为基准的（time-bases motion）。</strong>帧速率是每帧持续的时间（frame rate，毫秒）。如果设定了物体的移动速度（每秒移动多少像素），可以求得每帧移动的像素数：</p><p><strong>像素/帧 = （X * Y）/ 1000</strong>  （X：用毫秒/帧表示的帧速率，Y：用像素/秒表示的速度）</p><h3 class="title">Canvas的绘制模型</h3><p>浏览器按照如下步骤来绘制图形：</p><p>(1)将图形绘制到一个无限大的透明位图中，在绘制时遵循当前的填充模式、描边模式以及线条样式；</p><p>(2)使用当前绘图环境的阴影设定将图形的阴影绘制到另外的一幅位图中；</p><p>(3)将阴影中的每一个像素的alpha分量乘以绘图环境对象的globalAlpha属性值；</p><p>(4)将绘有阴影的位图与经过剪辑区域剪切过的canvas进行图像合成，使用当前的合成模式参数；</p><p>(5)将图形的每一个像素颜色分量，乘以绘图环境对象的globalAlpha属性值；</p><p>(6)将绘有图形的位图，合成到当前经过剪辑区域剪切过的canvas位图之上，使用当前的合成操作符。</p><p>只有在启用阴影时才会执行第2~4步。</p><h3 class="title">矩形的绘制</h3><p>Canvas提供如下3个api，分别用于矩形的清除、描边、填充：</p><pre><code>clearRect(double x, double y, double w, double h)
strokeRect(double x, double y, double w, double h)
fillRect(double x, double y, double w, double h)</code></pre><h3 class="title">渐变色</h3><p>Canvas支持线性（linear）渐变与放射（radial）渐变。</p><p>线性渐变通过调用<strong>createLinearGradient()</strong>方法创建，需要向该方法传入两个点的坐标，两点之间的连线就是canvas建立线性渐变效果的依据，该方法会返回CanvasGradient实例。可以添加颜色停止点设置渐变色。</p>`,56),S={class:"exp gradient1"},X={ref:"c1",width:"250",height:"250"},Y={ref:"c2",width:"250",height:"250"},P={ref:"c3",width:"250",height:"250"},R={ref:"c4",width:"250",height:"250"},G=n("pre",null,[n("code",null,`initLinearGradient () {
    let that = this
    let refs = that.$refs
    let w = 250
    let h = 250
    that.drawLinearGradient(refs.c1, {x0: 0, y0: 0, x1: w, y1: 0})
    that.drawLinearGradient(refs.c2, {x0: 0, y0: 0, x1: 0, y1: h})
    that.drawLinearGradient(refs.c3, {x0: 0, y0: 0, x1: w, y1: h})
    that.drawLinearGradient(refs.c4, {x0: 0, y0: 0, x1: 0, y1: h / 2})
}
drawLinearGradient (el, pos) {
    let context = el.getContext('2d')
    let gradient = context.createLinearGradient(pos.x0, pos.y0, pos.x1, pos.y1)
    gradient.addColorStop(0, 'blue')
    gradient.addColorStop(0.25, 'white')
    gradient.addColorStop(0.5, 'purple')
    gradient.addColorStop(0.75, 'red')
    gradient.addColorStop(1, 'yellow')
    context.fillStyle = gradient
    context.fillRect(0, 0, el.width, el.height)
}`)],-1),k=n("p",null,[n("strong",null,"使用线性渐变填充时，Canvas会使用最后一种颜色来填充非渐变区域。")],-1),A=n("p",null,"创建线性渐变，需要使用两个圆，他们表示某个圆锥的起始位置。",-1),L={class:"exp gradient2"},$={ref:"c5",width:"290",height:"290"},q=x(`<pre><code>let context = el.getContext(&#39;2d&#39;)
let w = el.width
let h = el.height
let gradient = context.createRadialGradient(w / 2, h, 1, w / 2, 0, 128)
gradient.addColorStop(0, &#39;#333&#39;)
gradient.addColorStop(1, &#39;#fff&#39;)
context.fillStyle = gradient
context.fillRect(0, 0, el.width, el.height)</code></pre><p><strong>放射渐变的填充范围仅局限于两个圆形所定义的圆锥区域，不会使用最后一个渐变色填充剩余区域。</strong></p><h3 class="title">图案填充</h3><p>Canavs允许使用图案对图形和文本进行填充，图案元素可以是这3种：<strong>Image元素、Video元素、canvas元素。</strong></p><p>使用createPattern(patternObj, repeatTypeString)方法创建图案，patternObj指的是图案元素，repeatTypeString指的是图案的重复方式：&quot;repeat&quot;、&quot;repeat-x&quot;、&quot;repeat-y&quot;以及&quot;no-repeat&quot;4种方式。</p><h3 class="title">阴影</h3><p>阴影效果通过如下4个属性值设置：</p><ol><li>1、shadowColor：CSS3格式的颜色，默认值：rgba(0,0,0,0)；</li><li>2、shadowOffsetX：阴影的水平像素偏移；</li><li>3、shadowOffsetY：阴影的垂直像素偏移；</li><li>4、shadowBlur：一个与像素无关的值，该值被用于高斯模糊方程之中。</li></ol><h3 class="title">路径、描边与填充</h3><p>strokeRect()和fillRect()是Canavs中仅有的两个可以立即绘制图形的方法，其他方法都是基于路径的。<strong>不论一个路径是否开放或者封闭，都可以进行填充。</strong>与路径有关的方法：</p><ol><li>1、<strong>beginPath()</strong>：将当前路径下的子路径都清除，以此重置当前路径；</li><li>2、<strong>closePath()</strong>：显式地封闭某段开放路径；</li><li>3、<strong>fill()</strong>：填充；</li><li>4、<strong>stroke()</strong>：描边；</li><li>5、<strong>rect(x,y,w,h)</strong>：添加矩形子路径，逆时针方向创建；</li><li>6、<strong>arc(centerX,centerY,radius,startAngle,endAngle,counterClockwise)</strong>：添加圆弧子路径，counterClockwise默认为false(顺时针)，设置为true则逆时针。</li></ol><p>填充路径是使用<strong>非零环绕原则</strong>：从区域内部画一条足够长的线段，与路径的顺时针部分相交则加1，逆时针部分相交则-1，如果最终值为0则不填充该区域，否则填充。</p><p>绘制圆环：</p>`,13),M={class:"exp circle"},B={ref:"c6",width:"250",height:"250"},O=n("pre",null,[n("code",null,`drawRing () {
    let that = this
    let el = that.$refs.c6
    let context = el.getContext('2d')
    let w = el.width
    let h = el.height
    context.fillStyle = 'rgba(0,0,0,0.5)'
    context.shadowColor = 'rgba(0,0,0,0.8)'
    context.shadowOffsetX = 8
    context.shadowOffsetY = 8
    context.shadowBlur = 20
    context.arc(w / 2, h / 2, 100, 0, 2 * Math.PI, true)
    context.arc(w / 2, h / 2, 70, 0, 2 * Math.PI, false)
    context.fill()
}`)],-1),j=n("h3",{class:"title"},"线段",-1),I=n("p",null,[h("主要有两个API："),n("strong",null,"moveTo(x,y)"),h("和"),n("strong",null,"lineTo(x,y)"),h("。"),n("strong",null,"如果要绘制一像素的线条，需要将其绘制在某两个像素之间的那个像素中。")],-1),W=n("p",null,"网格的绘制：",-1),V={class:"exp grid",ref:"grid"},D={ref:"c7",width:"250",height:"250"},J=n("pre",null,[n("code",null,`drawGrid () {
    let that = this
    let el = that.$refs.c7
    let context = el.getContext('2d')
    let w = el.width
    let h = el.height
    let stepX = 10
    let stepY = 10

    context.clearRect(0, 0, w, h)
    context.strokeStyle = '#e0e0e0'
    context.lineWidth = 0.5
    for (let i = stepX + 0.5; i < w; i += stepX) {
        context.beginPath()
        context.moveTo(i, 0)
        context.lineTo(i, h)
        context.stroke()
    }

    for (let j = stepY + 0.5; j < h; j += stepY) {
        context.beginPath()
        context.moveTo(0, j)
        context.lineTo(w, j)
        context.stroke()
    }
}`)],-1),N=n("p",null,"虚线的绘制：",-1),U={class:"exp grid"},E={ref:"c8",width:"250",height:"250"},H=n("pre",null,[n("code",null,`drawDashedLine () {
    let that = this
    let el = that.$refs.c8
    let context = el.getContext('2d')
    let w = el.width
    let h = el.height
    let startPoint = {x: 15, y: 15}
    let endPoint = {x: w - 20, y: h - 30}
    let deltX = endPoint.x - startPoint.x
    let deltY = endPoint.y - startPoint.y
    let dashLen = 4
    let num = Math.floor(Math.sqrt(deltX * deltX + deltY * deltY) / dashLen)

    context.beginPath()
    context.strokeStyle = 'rgba(0,0,0,0.8)'
    context.lineWidth = 1
    for (let i = 0; i < num; i++) {
        context[i % 2 == 0 ? 'moveTo' : 'lineTo'](startPoint.x + (deltX / num) * i, startPoint.y + (deltY / num) * i)
    }
    context.stroke()
}`)],-1),z=n("p",null,"lineCap的取值：butt、round、square，默认为butt，控制线段端点的绘制。",-1),F=n("p",null,"lineJoin的取值：round、bevel、miter，默认值为miter，控制线段的连接点的绘制。",-1),K=n("p",null,"miterLimit：斜接线长度与二分之一线宽的比值，如果斜接线的长度超过了此值，浏览器将以bevel的方式绘制线段的连接点。",-1),Q=n("h3",{class:"title"},"圆弧与圆形",-1),Z=n("p",null,"arc()方法所绘制可能不仅仅是圆弧，如果当前路径有子路径的话，浏览器会将子路径的终点与圆弧的起点用线段连接起来。",-1),tt=n("p",null,"另外一个用于创建圆弧路径的方法是arcTo(x1,y1,x2,y2,radius)，参数分别代表两个点及半径，此圆弧与当前点到第一个点(x1,y1)，的连线相切，并且与(x1,y1)到(x2,y2)的连线也相切。",-1),et=n("p",null,"圆角矩形的绘制：",-1),nt={class:"exp grid",ref:"grid"},ot={ref:"c9",width:"250",height:"250"},st=n("pre",null,[n("code",null,`drawRoundedRect () {
    let that = this
    let el = that.$refs.c9
    let context = el.getContext('2d')
    let w = Math.floor(el.width * 0.9)
    let h = Math.floor(el.height * 0.9)
    let startX = (el.width - w) / 2
    let startY = (el.height - h) / 2
    let radius = 20
    let endX = startX + w
    let endY = startY + h
    context.strokeStyle = 'rgba(0,0,0,0.5)'
    context.fillStyle = 'rgba(0,0,0,0.3)'
    context.lineWidth = 1
    context.beginPath()
    context.moveTo(startX + radius, startY)
    context.arcTo(endX, startY, endX, startY + radius, radius)
    context.arcTo(endX, endY, endX - radius, endY, radius)
    context.arcTo(startX, endY, startX, endY - radius, radius)
    context.arcTo(startX, startY, startX + radius, startY, radius)
    context.stroke()
    context.fill()
}`)],-1),at=n("h3",{class:"title"},"贝塞尔曲线",-1),it=n("p",null,[h("分为"),n("strong",null,"平方贝塞尔曲线"),h("（由两个锚点和一个控制点）和"),n("strong",null,"立方贝塞尔曲线"),h("（两个锚点以及两个控制点）。")],-1),rt=n("p",null,"平方贝塞尔曲线使用quadraticCurveTo方法绘制，接受四个参数，分别表示控制点和锚点的X、Y坐标。所绘制的曲线，会将锚点与当前路径中最后一个点连接起来。",-1),lt=n("p",null,"使用贝赛尔曲线绘制圆角：",-1),ct={class:"exp grid"},dt={ref:"c10",width:"250",height:"250"},ht=x(`<pre><code>drawArrow () {
    let that = this
    let el = that.$refs.c10
    let context = el.getContext(&#39;2d&#39;)
    let margin = 30
    let w = el.width
    let h = el.height
    context.strokeStyle = &#39;rgba(0,0,0,0.5)&#39;
    context.fillStyle = &#39;rgba(0,0,0,0.3)&#39;
    context.beginPath()
    context.moveTo(w - margin, margin * 2)
    context.lineTo(w - margin, h - margin * 2)
    context.quadraticCurveTo(w - margin, h - margin, w - margin * 2, h - margin)
    context.lineTo(w - 250, h / 2 + margin)
    context.quadraticCurveTo(w - 300, h / 2, w - 250, h / 2 - margin)
    context.lineTo(w - margin * 2, margin)
    context.quadraticCurveTo(w - margin, margin, w - margin, margin * 2)
    context.fill()
    context.stroke()
}</code></pre><h3 class="title">坐标系的变换</h3><p>Canvas中平移、旋转、缩放坐标系的方法：</p><ol><li>1、<strong>rotate(angle)</strong>：按照给定的角度旋转坐标系；</li><li>2、<strong>scale(x, y)</strong>：在X、Y方向上按照设定的数值来缩放坐标系；</li><li>3、<strong>translate(x, y)</strong>：在X、Y方向上平移坐标系。</li></ol><p><strong>水平镜像变换：scale(-1, 1)；垂直镜像变换：scale(1, -1)。</strong></p><p>操作变换矩阵的方法：<strong>transform(a,b,c,d,e,f)</strong>（在当前的变换矩阵之上叠加运用变换效果）和<strong>setTransform(a,b,c,d,e,f)</strong>（重置当前的变换矩阵）。两者可以实现上面三种变换方法无法实现的变换，比如错切。</p><p>坐标(x, y)绕原点旋转angle角度之后的坐标(x&#39;, y&#39;)计算如下：</p><pre><code>x&#39; = x * cos(angle) - y * sin(angle)
y&#39; = y * cos(angle) + y * sin(angle)</code></pre><p>矩阵变换有下面的方程式：</p><pre><code>x&#39; = a * x + c * y + e
y&#39; = b * x + d * y + f</code></pre><h3 class="title">剪辑区域</h3><p>由路径定义的一块区域，浏览器会将所有的绘图操作都限制在本区域内。默认情况下剪辑区域就是整个Canvas，除非创建路径并调用clip()方法显式地设置剪辑区域。</p><p>利用剪辑区域实现的伸缩式动画：</p>`,13),gt={class:"exp clip"},pt={ref:"c11",width:"280",height:"280",style:{width:"280px",height:"280px !important"}},xt=n("pre",null,[n("code",null,`drawClipAni () {
    let that = this
    let context = that.$refs.c11.getContext('2d')
    let w = context.canvas.width
    let h = context.canvas.height
    let radius = w / 2
    let direction = -1

    setInterval(function () {
        context.fillStyle = '#333333'
        context.fillRect(0, 0, w, h)
        if (direction == -1) {
            radius -= w / 100
            if (radius > 0) {
                that.drawAni(radius)
            } else {
                direction = 1
            }
        } else {
            radius += w / 100
            if (radius < w / 2) {
                that.drawAni(radius)
            } else {
                direction = -1
            }
        }
    }, 50)
},
drawClipText () {
    let that = this
    let context = that.$refs.c11.getContext('2d')
    let w = context.canvas.width
    let h = context.canvas.height
    context.save()
    context.font = 'normal 70px 微软雅黑'
    context.lineWidth = 4
    context.shadowColor = 'rgba(100,100,150,0.8)'
    context.shadowOffsetX = 5
    context.shadowOffsetY = 5
    context.shadowBlur = 10

    context.fillStyle = '#ff6666'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText('Canvas', w / 2, h / 2)
    context.restore()
},
drawAni (radius) {
    let that = this
    let context = that.$refs.c11.getContext('2d')
    let w = context.canvas.width
    let h = context.canvas.height

    context.save()
    context.beginPath()
    context.arc(w / 2, h / 2, radius, 0, 2 * Math.PI, true)
    context.clip()
    context.fillStyle = '#dddddd'
    context.fillRect(0, 0, w, h)
    that.drawClipText()
    context.restore()
}`)],-1),wt=n("footer",null,"2016年06月15日",-1);function ut(s,e,t,o,a,i){return v(),_("div",C,[m,n("div",b,[T,n("div",S,[n("canvas",X,null,512),n("canvas",Y,null,512),n("canvas",P,null,512),n("canvas",R,null,512)]),G,k,A,n("div",L,[n("canvas",$,null,512)]),q,n("div",M,[n("canvas",B,null,512)]),O,j,I,W,n("div",V,[n("canvas",D,null,512)],512),J,N,n("div",U,[n("canvas",E,null,512)]),H,z,F,K,Q,Z,tt,et,n("div",nt,[n("canvas",ot,null,512)],512),st,at,it,rt,lt,n("div",ct,[n("canvas",dt,null,512)]),ht,n("div",gt,[n("canvas",pt,null,512)]),xt]),wt])}const Ct=f(y,[["render",ut]]);export{Ct as default};
