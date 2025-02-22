import{_ as g,m as c,p as f,h as p,o as y,e as n,q as s}from"./index-D4Bwbg5j.js";const v={data(){return{drawClipAniTimer:null}},mounted(){const o=this;o.$nextTick(()=>{o.initLinearGradient(),o.initRadialGradient(),o.drawRing(),o.initGrid(),o.drawDashedLine(),o.drawRoundedRect(),o.drawArrow(),o.drawClipAni()})},methods:{initLinearGradient(){const o=this,t=o.$refs,e=250,l=250;o.drawLinearGradient(t.c1,{x0:0,y0:0,x1:e,y1:0}),o.drawLinearGradient(t.c2,{x0:0,y0:0,x1:0,y1:l}),o.drawLinearGradient(t.c3,{x0:0,y0:0,x1:e,y1:l}),o.drawLinearGradient(t.c4,{x0:0,y0:0,x1:0,y1:l/2})},drawLinearGradient(o,t){const e=o.getContext("2d"),l=e.createLinearGradient(t.x0,t.y0,t.x1,t.y1);l.addColorStop(0,"#333"),l.addColorStop(1,"#fff"),e.fillStyle=l,e.fillRect(0,0,o.width,o.height)},initRadialGradient(){const t=this.$refs.c5,e=t.getContext("2d"),l=t.width,i=t.height,r=e.createRadialGradient(l/2,i,1,l/2,0,128);r.addColorStop(0,"blue"),r.addColorStop(.25,"white"),r.addColorStop(.5,"purple"),r.addColorStop(.75,"red"),r.addColorStop(1,"yellow"),e.fillStyle=r,e.fillRect(0,0,t.width,t.height)},drawRing(){const t=this.$refs.c6,e=t.getContext("2d"),l=t.width,i=t.height;e.fillStyle="rgba(0,0,0,0.5)",e.shadowColor="rgba(0,0,0,0.8)",e.shadowOffsetX=8,e.shadowOffsetY=8,e.shadowBlur=20,e.arc(l/2,i/2,100,0,2*Math.PI,!0),e.arc(l/2,i/2,70,0,2*Math.PI,!1),e.fill()},initGrid(){const o=this,t=o.$refs,e=t.c7,l=t.c8,i=t.c9,r=t.c10,d=t.grid.getBoundingClientRect(),u=(d.right-d.left)*.95;e.setAttribute("width",u),l.setAttribute("width",u),i.setAttribute("width",u),r.setAttribute("width",u),o.drawGrid(e),o.drawGrid(l),o.drawGrid(i),o.drawGrid(r)},drawGrid(o){const t=o.getContext("2d"),e=o.width,l=o.height,i=10,r=10;t.clearRect(0,0,e,l),t.strokeStyle="#e0e0e0",t.lineWidth=.5;for(let a=i+.5;a<e;a+=i)t.beginPath(),t.moveTo(a,0),t.lineTo(a,l),t.stroke();for(let a=r+.5;a<l;a+=r)t.beginPath(),t.moveTo(0,a),t.lineTo(e,a),t.stroke()},drawDashedLine(){const t=this.$refs.c8,e=t.getContext("2d"),l=t.width,i=t.height,r={x:15,y:15},a={x:l-20,y:i-30},d=a.x-r.x,u=a.y-r.y,w=Math.floor(Math.sqrt(d*d+u*u)/4);e.beginPath(),e.strokeStyle="rgba(0,0,0,0.8)",e.lineWidth=1;for(let h=0;h<w;h++)e[h%2==0?"moveTo":"lineTo"](r.x+d/w*h,r.y+u/w*h);e.stroke()},drawRoundedRect(){const t=this.$refs.c9,e=t.getContext("2d"),l=Math.floor(t.width*.9),i=Math.floor(t.height*.9),r=(t.width-l)/2,a=(t.height-i)/2,d=20,u=r+l,x=a+i;e.strokeStyle="rgba(0,0,0,0.5)",e.fillStyle="rgba(0,0,0,0.3)",e.lineWidth=1,e.beginPath(),e.moveTo(r+d,a),e.arcTo(u,a,u,a+d,d),e.arcTo(u,x,u-d,x,d),e.arcTo(r,x,r,x-d,d),e.arcTo(r,a,r+d,a,d),e.stroke(),e.fill()},drawArrow(){const t=this.$refs.c10,e=t.getContext("2d"),l=30,i=t.width,r=t.height;e.strokeStyle="rgba(0,0,0,0.5)",e.fillStyle="rgba(0,0,0,0.3)",e.beginPath(),e.moveTo(i-l,l*2),e.lineTo(i-l,r-l*2),e.quadraticCurveTo(i-l,r-l,i-l*2,r-l),e.lineTo(i-250,r/2+l),e.quadraticCurveTo(i-300,r/2,i-250,r/2-l),e.lineTo(i-l*2,l),e.quadraticCurveTo(i-l,l,i-l,l*2),e.fill(),e.stroke()},drawClipAni(){const o=this,t=o.$refs.c11.getContext("2d"),e=t.canvas.width,l=t.canvas.height;let i=e/2,r=-1;o.drawClipAniTimer=setInterval(function(){t.fillStyle="#999999",t.fillRect(0,0,e,l),r==-1?(i-=e/100,i>0?o.drawAni(i):r=1):(i+=e/100,i<e/2?o.drawAni(i):r=-1)},50)},drawClipText(){const t=this.$refs.c11.getContext("2d"),e=t.canvas.width,l=t.canvas.height;t.save(),t.font="normal 70px 微软雅黑",t.lineWidth=4,t.shadowColor="rgba(100,100,150,0.8)",t.shadowOffsetX=5,t.shadowOffsetY=5,t.shadowBlur=10,t.fillStyle="#ff6666",t.textAlign="center",t.textBaseline="middle",t.fillText("Canvas",e/2,l/2),t.restore()},drawAni(o){const t=this,e=t.$refs.c11.getContext("2d"),l=e.canvas.width,i=e.canvas.height;e.save(),e.beginPath(),e.arc(l/2,i/2,o,0,2*Math.PI,!0),e.clip(),e.fillStyle="#dddddd",e.fillRect(0,0,l,i),t.drawClipText(),e.restore()}},beforeUnmount(){const o=this;o.drawClipAniTimer&&window.clearInterval(o.drawClipAniTimer)}},C={class:"_article-content readingNotes-canvas-02"},b={class:"exp gradient"},m={ref:"c1",width:"250",height:"250"},T={ref:"c2",width:"250",height:"250"},S={ref:"c3",width:"250",height:"250"},P={ref:"c4",width:"250",height:"250"},X={class:"exp gradient"},Y={ref:"c5",width:"290",height:"290"},A={class:"exp circle"},G={ref:"c6",width:"250",height:"250"},R={class:"exp grid",ref:"grid"},k={ref:"c7",width:"250",height:"250"},L={class:"exp grid"},$={ref:"c8",width:"250",height:"250"},M={class:"exp grid",ref:"grid"},O={ref:"c9",width:"250",height:"250"},q={class:"exp grid"},B={ref:"c10",width:"250",height:"250"},I={class:"exp clip"},j={ref:"c11",width:"280",height:"280",style:{width:"280px",height:"280px !important"}};function W(o,t,e,l,i,r){const a=p("MyArticle");return y(),c(a,{title:"Canvas学习笔记之二：绘制",date:"2016年06月15日"},{default:f(()=>[n("div",C,[t[0]||(t[0]=n("h3",{class:"title"},"Canvas的绘制模型",-1)),t[1]||(t[1]=n("p",null,"浏览器按照如下步骤来绘制图形：",-1)),t[2]||(t[2]=n("p",null,"(1)将图形绘制到一个无限大的透明位图中，在绘制时遵循当前的填充模式、描边模式以及线条样式；",-1)),t[3]||(t[3]=n("p",null,"(2)使用当前绘图环境的阴影设定将图形的阴影绘制到另外的一幅位图中；",-1)),t[4]||(t[4]=n("p",null,"(3)将阴影中的每一个像素的alpha分量乘以绘图环境对象的globalAlpha属性值；",-1)),t[5]||(t[5]=n("p",null,"(4)将绘有阴影的位图与经过剪辑区域剪切过的canvas进行图像合成，使用当前的合成模式参数；",-1)),t[6]||(t[6]=n("p",null,"(5)将图形的每一个像素颜色分量，乘以绘图环境对象的globalAlpha属性值；",-1)),t[7]||(t[7]=n("p",null,"(6)将绘有图形的位图，合成到当前经过剪辑区域剪切过的canvas位图之上，使用当前的合成操作符。",-1)),t[8]||(t[8]=n("p",null,"只有在启用阴影时才会执行第2~4步。",-1)),t[9]||(t[9]=n("h3",{class:"title"},"矩形的绘制",-1)),t[10]||(t[10]=n("p",null,"Canvas提供如下3个api，分别用于矩形的清除、描边、填充：",-1)),t[11]||(t[11]=n("pre",null,[n("code",null,`clearRect(double x, double y, double w, double h)
strokeRect(double x, double y, double w, double h)
fillRect(double x, double y, double w, double h)`)],-1)),t[12]||(t[12]=n("h3",{class:"title"},"渐变色",-1)),t[13]||(t[13]=n("p",null,"Canvas支持线性（linear）渐变与放射（radial）渐变。",-1)),t[14]||(t[14]=n("p",null,[s("线性渐变通过调用 "),n("strong",null,"createLinearGradient()"),s("方法创建，需要向该方法传入两个点的坐标，两点之间的连线就是canvas建立线性渐变效果的依据，该方法会返回CanvasGradient实例。可以添加颜色停止点设置渐变色。")],-1)),n("div",b,[n("canvas",m,null,512),n("canvas",T,null,512),n("canvas",S,null,512),n("canvas",P,null,512)]),t[15]||(t[15]=n("pre",null,[n("code",null,`initLinearGradient () {
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
}`)],-1)),t[16]||(t[16]=n("p",null,[n("strong",null,"使用线性渐变填充时，Canvas会使用最后一种颜色来填充非渐变区域。")],-1)),t[17]||(t[17]=n("p",null,"创建线性渐变，需要使用两个圆，他们表示某个圆锥的起始位置。",-1)),n("div",X,[n("canvas",Y,null,512)]),t[18]||(t[18]=n("pre",null,[n("code",null,`let context = el.getContext('2d')
let w = el.width
let h = el.height
let gradient = context.createRadialGradient(w / 2, h, 1, w / 2, 0, 128)
gradient.addColorStop(0, '#333')
gradient.addColorStop(1, '#fff')
context.fillStyle = gradient
context.fillRect(0, 0, el.width, el.height)`)],-1)),t[19]||(t[19]=n("p",null,[n("strong",null,"放射渐变的填充范围仅局限于两个圆形所定义的圆锥区域，不会使用最后一个渐变色填充剩余区域。")],-1)),t[20]||(t[20]=n("h3",{class:"title"},"图案填充",-1)),t[21]||(t[21]=n("p",null,[s("Canavs允许使用图案对图形和文本进行填充，图案元素可以是这3种： "),n("strong",null,"Image元素、Video元素、canvas元素。")],-1)),t[22]||(t[22]=n("p",null,'使用createPattern(patternObj, repeatTypeString)方法创建图案，patternObj指的是图案元素，repeatTypeString指的是图案的重复方式："repeat"、"repeat-x"、"repeat-y"以及"no-repeat"4种方式。',-1)),t[23]||(t[23]=n("h3",{class:"title"},"阴影",-1)),t[24]||(t[24]=n("p",null,"阴影效果通过如下4个属性值设置：",-1)),t[25]||(t[25]=n("ol",null,[n("li",null,"1、shadowColor：CSS3格式的颜色，默认值：rgba(0,0,0,0)；"),n("li",null,"2、shadowOffsetX：阴影的水平像素偏移；"),n("li",null,"3、shadowOffsetY：阴影的垂直像素偏移；"),n("li",null,"4、shadowBlur：一个与像素无关的值，该值被用于高斯模糊方程之中。")],-1)),t[26]||(t[26]=n("h3",{class:"title"},"路径、描边与填充",-1)),t[27]||(t[27]=n("p",null,[s("strokeRect()和fillRect()是Canavs中仅有的两个可以立即绘制图形的方法，其他方法都是基于路径的。 "),n("strong",null,"不论一个路径是否开放或者封闭，都可以进行填充。"),s("与路径有关的方法：")],-1)),t[28]||(t[28]=n("ol",null,[n("li",null,[s("1、 "),n("strong",null,"beginPath()"),s("：将当前路径下的子路径都清除，以此重置当前路径；")]),n("li",null,[s("2、 "),n("strong",null,"closePath()"),s("：显式地封闭某段开放路径；")]),n("li",null,[s("3、 "),n("strong",null,"fill()"),s("：填充；")]),n("li",null,[s("4、 "),n("strong",null,"stroke()"),s("：描边；")]),n("li",null,[s("5、 "),n("strong",null,"rect(x,y,w,h)"),s("：添加矩形子路径，逆时针方向创建；")]),n("li",null,[s("6、 "),n("strong",null,"arc(centerX,centerY,radius,startAngle,endAngle,counterClockwise)"),s("：添加圆弧子路径，counterClockwise默认为false(顺时针)，设置为true则逆时针。")])],-1)),t[29]||(t[29]=n("p",null,[s("填充路径是使用 "),n("strong",null,"非零环绕原则"),s("：从区域内部画一条足够长的线段，与路径的顺时针部分相交则加1，逆时针部分相交则-1，如果最终值为0则不填充该区域，否则填充。")],-1)),t[30]||(t[30]=n("p",null,"绘制圆环：",-1)),n("div",A,[n("canvas",G,null,512)]),t[31]||(t[31]=n("pre",null,[n("code",null,`drawRing () {
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
}`)],-1)),t[32]||(t[32]=n("h3",{class:"title"},"线段",-1)),t[33]||(t[33]=n("p",null,[s("主要有两个API： "),n("strong",null,"moveTo(x,y)"),s("和 "),n("strong",null,"lineTo(x,y)"),s("。 "),n("strong",null,"如果要绘制一像素的线条，需要将其绘制在某两个像素之间的那个像素中。")],-1)),t[34]||(t[34]=n("p",null,"网格的绘制：",-1)),n("div",R,[n("canvas",k,null,512)],512),t[35]||(t[35]=n("pre",null,[n("code",null,`drawGrid () {
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
}`)],-1)),t[36]||(t[36]=n("p",null,"虚线的绘制：",-1)),n("div",L,[n("canvas",$,null,512)]),t[37]||(t[37]=n("pre",null,[n("code",null,`drawDashedLine () {
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
}`)],-1)),t[38]||(t[38]=n("p",null,"lineCap的取值：butt、round、square，默认为butt，控制线段端点的绘制。",-1)),t[39]||(t[39]=n("p",null,"lineJoin的取值：round、bevel、miter，默认值为miter，控制线段的连接点的绘制。",-1)),t[40]||(t[40]=n("p",null,"miterLimit：斜接线长度与二分之一线宽的比值，如果斜接线的长度超过了此值，浏览器将以bevel的方式绘制线段的连接点。",-1)),t[41]||(t[41]=n("h3",{class:"title"},"圆弧与圆形",-1)),t[42]||(t[42]=n("p",null,"arc()方法所绘制可能不仅仅是圆弧，如果当前路径有子路径的话，浏览器会将子路径的终点与圆弧的起点用线段连接起来。",-1)),t[43]||(t[43]=n("p",null,"另外一个用于创建圆弧路径的方法是arcTo(x1,y1,x2,y2,radius)，参数分别代表两个点及半径，此圆弧与当前点到第一个点(x1,y1)，的连线相切，并且与(x1,y1)到(x2,y2)的连线也相切。",-1)),t[44]||(t[44]=n("p",null,"圆角矩形的绘制：",-1)),n("div",M,[n("canvas",O,null,512)],512),t[45]||(t[45]=n("pre",null,[n("code",null,`drawRoundedRect () {
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
}`)],-1)),t[46]||(t[46]=n("h3",{class:"title"},"贝塞尔曲线",-1)),t[47]||(t[47]=n("p",null,[s("分为 "),n("strong",null,"平方贝塞尔曲线"),s("（由两个锚点和一个控制点）和 "),n("strong",null,"立方贝塞尔曲线"),s("（两个锚点以及两个控制点）。")],-1)),t[48]||(t[48]=n("p",null,"平方贝塞尔曲线使用quadraticCurveTo方法绘制，接受四个参数，分别表示控制点和锚点的X、Y坐标。所绘制的曲线，会将锚点与当前路径中最后一个点连接起来。",-1)),t[49]||(t[49]=n("p",null,"使用贝赛尔曲线绘制圆角：",-1)),n("div",q,[n("canvas",B,null,512)]),t[50]||(t[50]=n("pre",null,[n("code",null,`drawArrow () {
    let that = this
    let el = that.$refs.c10
    let context = el.getContext('2d')
    let margin = 30
    let w = el.width
    let h = el.height
    context.strokeStyle = 'rgba(0,0,0,0.5)'
    context.fillStyle = 'rgba(0,0,0,0.3)'
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
}`)],-1)),t[51]||(t[51]=n("h3",{class:"title"},"坐标系的变换",-1)),t[52]||(t[52]=n("p",null,"Canvas中平移、旋转、缩放坐标系的方法：",-1)),t[53]||(t[53]=n("ol",null,[n("li",null,[s("1、 "),n("strong",null,"rotate(angle)"),s("：按照给定的角度旋转坐标系；")]),n("li",null,[s("2、 "),n("strong",null,"scale(x, y)"),s("：在X、Y方向上按照设定的数值来缩放坐标系；")]),n("li",null,[s("3、 "),n("strong",null,"translate(x, y)"),s("：在X、Y方向上平移坐标系。")])],-1)),t[54]||(t[54]=n("p",null,[n("strong",null,"水平镜像变换：scale(-1, 1)；垂直镜像变换：scale(1, -1)。")],-1)),t[55]||(t[55]=n("p",null,[s("操作变换矩阵的方法： "),n("strong",null,"transform(a,b,c,d,e,f)"),s("（在当前的变换矩阵之上叠加运用变换效果）和 "),n("strong",null,"setTransform(a,b,c,d,e,f)"),s("（重置当前的变换矩阵）。两者可以实现上面三种变换方法无法实现的变换，比如错切。")],-1)),t[56]||(t[56]=n("p",null,"坐标(x, y)绕原点旋转angle角度之后的坐标(x', y')计算如下：",-1)),t[57]||(t[57]=n("pre",null,[n("code",null,`x' = x * cos(angle) - y * sin(angle)
y' = y * cos(angle) + y * sin(angle)`)],-1)),t[58]||(t[58]=n("p",null,"矩阵变换有下面的方程式：",-1)),t[59]||(t[59]=n("pre",null,[n("code",null,`x' = a * x + c * y + e
y' = b * x + d * y + f`)],-1)),t[60]||(t[60]=n("h3",{class:"title"},"剪辑区域",-1)),t[61]||(t[61]=n("p",null,"由路径定义的一块区域，浏览器会将所有的绘图操作都限制在本区域内。默认情况下剪辑区域就是整个Canvas，除非创建路径并调用clip()方法显式地设置剪辑区域。",-1)),t[62]||(t[62]=n("p",null,"利用剪辑区域实现的伸缩式动画：",-1)),n("div",I,[n("canvas",j,null,512)]),t[63]||(t[63]=n("pre",null,[n("code",null,`drawClipAni () {
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
}`)],-1))])]),_:1})}const N=g(v,[["render",W]]);export{N as default};
