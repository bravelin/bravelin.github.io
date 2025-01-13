import{_ as h,m as w,p as c,h as v,o as p,e as a,q as f}from"./index-CiokbSjR.js";const m="./imgs/01.jpeg",x={data(){return{offScreenCanvas:null}},mounted(){const e=this;e.$nextTick(()=>{e.drawImg(),e.drawMagnifier(),e.negativeFilter(),e.greyFilter(),e.embossFilter()})},methods:{drawImg(){const t=this.$refs.c1,l=t.getContext("2d"),o=t.width,d=t.height,s=new Image;s.onload=function(){l.drawImage(s,0,0,o,d)},s.src=m},drawMagnifier(){const e=this,t=e.$refs.c2,l=t.getContext("2d"),o=t.width,d=t.height;e.offScreenCanvas=document.createElement("canvas");const s=e.offScreenCanvas.getContext("2d");e.offScreenCanvas.width=o,e.offScreenCanvas.height=d;const i=new Image;i.onload=function(){l.drawImage(i,0,0,o,d),s.drawImage(i,0,0,o,d),e.addMagnifier(l,o,d,o/2,d/2,i)},i.src=m},addMagnifier(e,t,l,o,d,s){const i=this,n=1.8,g=20;e.save(),e.beginPath(),e.strokeStyle="#ffffff",e.lineWidth=2,e.shadowColor="rgba(0,0,0,0.8)",e.shadowOffsetX=8,e.shadowOffsetY=8,e.shadowBlur=10,e.arc(o,d,g,0,2*Math.PI,!0),e.stroke(),e.clip(),e.drawImage(i.offScreenCanvas,o-g/n,d-g/n,g/n*2,g/n*2,o-g,d-g,g*2,g*2),e.restore()},windowToCanvas(e,t,l){const o=e.getBoundingClientRect();return{x:(t-o.left)*(e.width/o.width),y:(l-o.top)*(e.height/o.height)}},doMouseMoveForMagnifier(e){const t=this,l=t.$refs.c2,o=l.getContext("2d"),d=l.width,s=l.height,i=new Image,n=t.windowToCanvas(l,e.clientX,e.clientY);i.onload=function(){o.clearRect(0,0,d,s),o.drawImage(i,0,0,d,s),t.addMagnifier(o,d,s,n.x,n.y,t.offScreenCanvas,i)},i.src=m},negativeFilter(){const t=this.$refs.c3,l=t.getContext("2d"),o=t.width,d=t.height,s=new Image;s.onload=function(){l.drawImage(s,0,0,o,d);const i=l.getImageData(0,0,o,d);for(let n=0;n<i.data.length;n=n+4)i.data[n]=255-i.data[n],i.data[n+1]=255-i.data[n+1],i.data[n+2]=255-i.data[n+2];l.putImageData(i,0,0)},s.src=m},greyFilter(){const t=this.$refs.c4,l=t.getContext("2d"),o=t.width,d=t.height,s=new Image;s.onload=function(){l.drawImage(s,0,0,o,d);const i=l.getImageData(0,0,o,d);let n;for(let g=0;g<i.data.length;g=g+4)n=(i.data[g]+i.data[g+1]+i.data[g+2])/3,i.data[g]=n,i.data[g+1]=n,i.data[g+2]=n;l.putImageData(i,0,0)},s.src=m},embossFilter(){const t=this.$refs.c5,l=t.getContext("2d"),o=t.width,d=t.height,s=new Image;s.onload=function(){l.drawImage(s,0,0,o,d);const i=l.getImageData(0,0,o,d),n=i.data,g=i.width,u=n.length;for(let r=0;r<u;r++)r<=u-g*4?(r+1)%4!==0&&((r+4)%(g*4)==0?(n[r]=n[r-4],n[r+1]=n[r-3],n[r+2]=n[r-2],n[r+3]=n[r-1],r+=4):n[r]=255/2+2*n[r]-n[r+4]-n[r+g*4]):(r+1)%4!==0&&(n[r]=n[r-g*4]);l.putImageData(i,0,0)},s.src=m}}},I={class:"_article-content readingNotes-canvas-04"},D={class:"exp"},C={ref:"c1",width:"300",height:"200"},M={class:"exp"},y={class:"exp"},S={ref:"c3",width:"300",height:"200"},F={class:"exp"},b={ref:"c4",width:"300",height:"200"},$={class:"exp"},B={ref:"c5",width:"300",height:"200"};function k(e,t,l,o,d,s){const i=v("MyArticle");return p(),w(i,{title:"Canvas学习笔记之四：图像与视频",date:"2016年06月30日"},{default:c(()=>[a("div",I,[t[2]||(t[2]=a("p",null,[f("Canvas环境对象提供了4个用于绘制及操作图像的方法： "),a("strong",null,"drawImage、putImageData、getImageData、createImageData"),f("。")],-1)),t[3]||(t[3]=a("h3",{class:"title"},"图像的绘制",-1)),t[4]||(t[4]=a("p",null,"必须等待图片加载完成之后才能对其进行绘制，如果尚未完成加载，drawImage()方法将会失败，并且没有任何提示。通常绘制的方法会放在onload()回调函数中。",-1)),t[5]||(t[5]=a("p",null,"图像的绘制效果受制于阴影、剪辑区域、图像合成等因素。",-1)),t[6]||(t[6]=a("p",null,"drawImage()方法会将一幅图像绘制到canvas中，所绘的图像称之为“源图像”，绘制到的地方称之为“目标canvas”。drawImage()可以接收以下3套参数：",-1)),t[7]||(t[7]=a("p",null,[a("strong",null,"drawImage(image, dx, dy)")],-1)),t[8]||(t[8]=a("p",null,[a("strong",null,"drawImage(image, dx, dy, dw, dh)")],-1)),t[9]||(t[9]=a("p",null,[a("strong",null,"drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)")],-1)),t[10]||(t[10]=a("p",null,"第一个参数可以是图像对象，也可以是一个canvas对象，或者video视频对象。",-1)),a("div",D,[a("canvas",C,null,512)]),t[11]||(t[11]=a("pre",null,[a("code",null,`let that = this
let el = that.$refs.c1
let context = el.getContext('2d')
let w = el.width
let h = el.height
let img = new Image()
img.onload = function () { // 在image的onload事件中绘制
    context.drawImage(img, 0, 0, w, h)
}
img.src = './static/img/1.jpeg'`)],-1)),t[12]||(t[12]=a("p",null,[a("strong",null,"在使用drawImage方法时，务必保证所绘图片已经加载好了。")],-1)),t[13]||(t[13]=a("h3",{class:"title"},"离屏Canvas",-1)),t[14]||(t[14]=a("p",null,"离屏Canavs通常用来存放临时性的图像信息：",-1)),t[15]||(t[15]=a("p",null,"1、创建用做离屏Canvas的元素；",-1)),t[16]||(t[16]=a("p",null,"2、设置离屏Canvas的宽度与高度；",-1)),t[17]||(t[17]=a("p",null,"3、在离屏Canvas中进行绘制；",-1)),t[18]||(t[18]=a("p",null,"4、将离屏Canvas的全部或者一部分内容复制到正在显示的Canvas中。",-1)),a("div",M,[a("canvas",{ref:"c2",width:"300",height:"200",onMousemove:t[0]||(t[0]=(...n)=>s.doMouseMoveForMagnifier&&s.doMouseMoveForMagnifier(...n)),onTouchmove:t[1]||(t[1]=(...n)=>s.doMouseMoveForMagnifier&&s.doMouseMoveForMagnifier(...n))},null,544)]),t[19]||(t[19]=a("pre",null,[a("code",null,`drawMagnifier () {
    let that = this
    let el = that.$refs.c2
    let context = el.getContext('2d')
    let w = el.width
    let h = el.height
    that.offScreenCanvas = document.createElement('canvas')
    let offScreenContext = that.offScreenCanvas.getContext('2d')
    that.offScreenCanvas.width = w
    that.offScreenCanvas.height = h
    let img = new Image()
    img.onload = function () {
        context.drawImage(img, 0, 0, w, h)
        offScreenContext.drawImage(img, 0, 0, w, h)
        that.addMagnifier(context, w, h, w / 2, h / 2, img)
    }
    img.src = './static/img/1.jpeg'
}
// 绘制放大镜
addMagnifier (context, w, h, x, y, img) {
    const that = this
    let scale = 1.8
    let radius = 20
    context.save()
    context.beginPath()
    context.strokeStyle = '#ffffff'
    context.lineWidth = 2
    context.shadowColor = 'rgba(0,0,0,0.8)'
    context.shadowOffsetX = 8
    context.shadowOffsetY = 8
    context.shadowBlur = 10
    context.arc(x, y, radius, 0, 2 * Math.PI, true)
    context.stroke()
    context.clip()
    context.drawImage(that.offScreenCanvas, x - radius / scale, y - radius / scale, (radius / scale) * 2, (radius / scale) * 2, x - radius, y - radius, radius * 2, radius * 2)
    context.restore()
}`)],-1)),t[20]||(t[20]=a("p",null,"DOM结构：",-1)),t[21]||(t[21]=a("pre",null,[a("code",null,'<canvas ref="c2" width="300" height="200" @mousemove="doMouseMoveForMagnifier" @touchmove="doMouseMoveForMagnifier"></canvas>')],-1)),t[22]||(t[22]=a("p",null,"mousemove事件与touchmove事件处理：",-1)),t[23]||(t[23]=a("pre",null,[a("code",null,`doMouseMoveForMagnifier (e) {
    const that = this
    let el = that.$refs.c2
    let context = el.getContext('2d')
    let w = el.width
    let h = el.height
    let img = new Image()
    let pos = that.windowToCanvas(el, e.clientX, e.clientY)
    img.onload = function () {
        context.clearRect(0, 0, w, h)
        context.drawImage(img, 0, 0, w, h)
        that.addMagnifier(context, w, h, pos.x, pos.y, that.offScreenCanvas, img)
    }
    img.src = './static/img/1.jpeg' // 图片地址
}`)],-1)),t[24]||(t[24]=a("h3",{class:"title"},"操作像素",-1)),t[25]||(t[25]=a("p",null,"两个方法：getImageData()和putImageData()。",-1)),t[26]||(t[26]=a("p",null,"getImageData方法所返回的ImageData对象包含下列三个属性：width、height、data。",-1)),t[27]||(t[27]=a("p",null,"putImageData(Image,dx,dy,dirtyX,dirtyY,dirtyWidth,dirtyHeight)，其中dx与dy表示所绘制的图像距离canvas左上角的X、Y偏移量；方法的最后4个参数代表以设备为单位的脏矩形，当浏览器将脏矩形复制到canvas时，它会将设备像素转换为CSS像素。",-1)),t[28]||(t[28]=a("p",null,[a("strong",null,"putImageData方法不受全局设置（globalAlpha、globalCompositeOperation等）的影响。因为它是直接操作像素的。")],-1)),t[29]||(t[29]=a("p",null,[a("em",null,"负片滤镜"),f("：从255中减去每个RGB分量值，再将差值设置回去，相当于“反转”了该像素的颜色。")],-1)),a("div",y,[a("canvas",S,null,512)]),t[30]||(t[30]=a("pre",null,[a("code",null,`let imgData = context.getImageData(0, 0, w, h)
for (let i = 0; i < imgData.data.length; i = i + 4) {
    imgData.data[i] = 255 - imgData.data[i]
    imgData.data[i + 1] = 255 - imgData.data[i + 1]
    imgData.data[i + 2] = 255 - imgData.data[i + 2]
}
context.putImageData(imgData, 0, 0)`)],-1)),t[31]||(t[31]=a("p",null,[a("em",null,"黑白滤镜"),f("：计算每个像素的RGB分量的平均值，然后将三个分量都设置为这个均值，于是图片由彩色变成了灰白了。")],-1)),a("div",F,[a("canvas",b,null,512)]),t[32]||(t[32]=a("pre",null,[a("code",null,`let imgData = context.getImageData(0, 0, w, h)
let v
for (let i = 0; i < imgData.data.length; i = i + 4) {
    v = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    imgData.data[i] = v
    imgData.data[i + 1] = v
    imgData.data[i + 2] = v
}
context.putImageData(imgData, 0, 0)`)],-1)),t[33]||(t[33]=a("p",null,[a("em",null,"浮雕滤镜")],-1)),a("div",$,[a("canvas",B,null,512)]),t[34]||(t[34]=a("pre",null,[a("code",null,`let imgData = context.getImageData(0, 0, w, h)
let data = imgData.data
let width = imgData.width
let length = data.length
for (let i = 0; i < length; i++) {
    if (i <= length - width * 4) { // 最后一行像素点特殊处理
        if ((i + 1) % 4 !== 0) { //RGB分量
            if ((i + 4) % (width * 4) == 0) { // 每一行最后一个像素点
                data[i] = data[i - 4]
                data[i + 1] = data[i - 3]
                data[i + 2] = data[i - 2]
                data[i + 3] = data[i - 1]
                i += 4
            } else {
                data[i] = 255 / 2 + 2 * data[i] - data[i + 4] - data[i + width * 4] // 关键点
            }
        }
    } else {
        if ((i + 1) % 4 !== 0) {
            data[i] = data[i - width * 4]
        }
    }
}
context.putImageData(imgData, 0, 0)`)],-1)),t[35]||(t[35]=a("p",null,[a("strong",null,"如果在大一些的图片上应用复杂的处理算法，可以使用WebWorker。")],-1))])]),_:1})}const R=h(x,[["render",k]]);export{R as default};
