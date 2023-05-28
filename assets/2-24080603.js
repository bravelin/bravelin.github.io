import{u as _}from"./highlight-2e3cec98.js";import{u as v}from"./catalog-69e48a3d.js";import{_ as C,b as I,c as M,e as a,l as m,g as D}from"./index-4afbb925.js";import"./article-1b647556.js";let p=null;const h="./imgs/1.jpeg",T={setup(){_(),v()},data(){return{currRotateAngle:0,rotateSpeed:1,lastTime:0}},mounted(){const e=this;e.drawStrokedText(),e.drawFilledText(),e.drawStrokedFilledText(),p=requestAnimationFrame(e.drawCircleText),e.drawImg(),e.drawMagnifier(),e.negativeFilter(),e.greyFilter(),e.embossFilter()},methods:{drawStrokedText(){const n=this.$refs.c1,t=n.getContext("2d"),i=n.width,l=n.height;t.textAlign="center",t.textBaseline="middle",t.strokeStyle="#f96",t.font="80px 宋体",t.shadowColor="rgba(0,0,0,0.6)",t.shadowOffsetX=5,t.shadowOffsetY=5,t.shadowBlur=8,t.strokeText("HTML5",i/2,l/2)},drawFilledText(){const n=this.$refs.c2,t=n.getContext("2d"),i=n.width,l=n.height;t.textAlign="center",t.textBaseline="middle",t.fillStyle="#f96",t.font="80px 宋体",t.shadowColor="rgba(0,0,0,0.6)",t.shadowOffsetX=5,t.shadowOffsetY=5,t.shadowBlur=8,t.fillText("HTML5",i/2,l/2)},drawStrokedFilledText(){const n=this.$refs.c3,t=n.getContext("2d"),i=n.width,l=n.height;t.textAlign="center",t.textBaseline="middle",t.fillStyle="#f96",t.strokeStyle="#f96",t.font="80px 宋体",t.shadowColor="rgba(0,0,0,0.6)",t.shadowOffsetX=5,t.shadowOffsetY=5,t.shadowBlur=8,t.strokeText("HTML5",i/2,l/2),t.fillText("HTML5",i/2,l/2)},drawCircleText(){const e=this,n=e.$refs.c4;if(!n)return;const t=n.getContext("2d"),i=n.width,l=n.height,r=i/2,s=l/2;t.fillStyle="#f96",t.strokeStyle="#f96",t.font="32px 微软雅黑",t.textAlign="center",t.textBaseline="middle",t.clearRect(0,0,i,l);const o="ABCDEFGHIJKLNMOPQRSTUVWXYZ",d=i/2-22,g=2*Math.PI/o.length;let c=0,x=0,w="";const u=Date.now();e.lastTime!=0&&(x=e.currRotateAngle+e.rotateSpeed*(u-e.lastTime)/1e3),e.lastTime=u,e.currRotateAngle=x;for(let f=0;f<o.length;f++)w=o.charAt(f),c=(.5-f)*g+x,t.save(),t.beginPath(),t.translate(r+Math.cos(c)*d,s-Math.sin(c)*d),t.rotate(Math.PI/2-c),t.fillText(w,0,0),t.strokeText(w,0,0),t.restore();requestAnimationFrame(e.drawCircleText)},drawImg(){const n=this.$refs.c5,t=n.getContext("2d"),i=n.width,l=n.height,r=new Image;r.onload=function(){t.drawImage(r,0,0,i,l)},r.src=h},drawMagnifier(){const e=this,n=e.$refs.c6,t=n.getContext("2d"),i=n.width,l=n.height;e.offScreenCanvas=document.createElement("canvas");const r=e.offScreenCanvas.getContext("2d");e.offScreenCanvas.width=i,e.offScreenCanvas.height=l;const s=new Image;s.onload=function(){t.drawImage(s,0,0,i,l),r.drawImage(s,0,0,i,l),e.addMagnifier(t,i,l,i/2,l/2,s)},s.src=h},addMagnifier(e,n,t,i,l){const r=this,s=1.8,o=20;e.save(),e.beginPath(),e.strokeStyle="#ffffff",e.lineWidth=2,e.shadowColor="rgba(0,0,0,0.8)",e.shadowOffsetX=8,e.shadowOffsetY=8,e.shadowBlur=10,e.arc(i,l,o,0,2*Math.PI,!0),e.stroke(),e.clip(),e.drawImage(r.offScreenCanvas,i-o/s,l-o/s,o/s*2,o/s*2,i-o,l-o,o*2,o*2),e.restore()},windowToCanvas(e,n,t){const i=e.getBoundingClientRect();return{x:(n-i.left)*(e.width/i.width),y:(t-i.top)*(e.height/i.height)}},doMouseMoveForMagnifier(e){const n=this,t=n.$refs.c6,i=t.getContext("2d"),l=t.width,r=t.height,s=new Image,o=n.windowToCanvas(t,e.clientX,e.clientY);s.onload=function(){i.clearRect(0,0,l,r),i.drawImage(s,0,0,l,r),n.addMagnifier(i,l,r,o.x,o.y,n.offScreenCanvas,s)},s.src=h},negativeFilter(){const n=this.$refs.c7,t=n.getContext("2d"),i=n.width,l=n.height,r=new Image;r.onload=function(){t.drawImage(r,0,0,i,l);const s=t.getImageData(0,0,i,l);for(let o=0;o<s.data.length;o=o+4)s.data[o]=255-s.data[o],s.data[o+1]=255-s.data[o+1],s.data[o+2]=255-s.data[o+2];t.putImageData(s,0,0)},r.src=h},greyFilter(){const n=this.$refs.c8,t=n.getContext("2d"),i=n.width,l=n.height,r=new Image;r.onload=function(){t.drawImage(r,0,0,i,l);const s=t.getImageData(0,0,i,l);let o;for(let d=0;d<s.data.length;d=d+4)o=(s.data[d]+s.data[d+1]+s.data[d+2])/3,s.data[d]=o,s.data[d+1]=o,s.data[d+2]=o;t.putImageData(s,0,0)},r.src=h},embossFilter(){const n=this.$refs.c9,t=n.getContext("2d"),i=n.width,l=n.height,r=new Image;r.onload=function(){t.drawImage(r,0,0,i,l);const s=t.getImageData(0,0,i,l),o=s.data,d=s.width,g=o.length;for(let c=0;c<g;c++)c<=g-d*4?(c+1)%4!==0&&((c+4)%(d*4)==0?(o[c]=o[c-4],o[c+1]=o[c-3],o[c+2]=o[c-2],o[c+3]=o[c-1],c+=4):o[c]=255/2+2*o[c]-o[c+4]-o[c+d*4]):(c+1)%4!==0&&(o[c]=o[c-d*4]);t.putImageData(s,0,0)},r.src=h}},beforeUnmount(){p&&cancelAnimationFrame(p)}},S={class:"article-container canvas-learning-2-article"},y=a("h2",{class:"article-title"},"Canvas学习笔记之二：文本、图像与视频",-1),k={class:"article-content"},A=m('<h3 class="title">文本的描边与填充</h3><p>Canvas绘图环境提供的与文本有关的方法：</p><p><strong>1、strokeText(text, x, y, maxWidth)</strong>：文本的描边；</p><p><strong>2、fillText(text, x, y, maxWidth)</strong>：文本的填充；</p><p><strong>3、measureText(text)</strong>：计算文本所占据的宽度。</p><p>与文本有关的属性：<strong>font</strong>、<strong>textAlign</strong>、<strong>textBaseline</strong></p><p>文本的描边（带阴影）：</p>',7),b={class:"exp"},B={ref:"c1",width:"300",height:"150"},F=a("pre",null,[a("code",null,`drawStrokedText () {
    let that = this
    let el = that.$refs.c1
    let context = el.getContext('2d')
    let w = el.width
    let h = el.height
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.strokeStyle = '#f96'
    context.font = '80px 宋体'

    // 增加阴影
    context.shadowColor = 'rgba(0,0,0,0.6)'
    context.shadowOffsetX = 5
    context.shadowOffsetY = 5
    context.shadowBlur = 8

    context.strokeText('HTML5', w / 2, h / 2)
}`)],-1),O=a("p",null,"文本的填充（带阴影）：",-1),X={class:"exp"},Y={ref:"c2",width:"300",height:"150"},$=a("pre",null,[a("code",null,`context.fillStyle = '#f96'
context.fillText('HTML5', w / 2, h / 2)`)],-1),q=a("p",null,"填充和描边：",-1),R={class:"exp"},H={ref:"c3",width:"300",height:"150"},P=m(`<pre><code>context.strokeStyle = &#39;#f96&#39;
context.fillStyle = &#39;#f96&#39;
context.strokeText(&#39;HTML5&#39;, w / 2, h / 2)
context.fillText(&#39;HTML5&#39;, w / 2, h / 2)</code></pre><p><strong>strokeText()和fillText()方法可以通过可选的第四参数来指定文本的最大宽度。</strong></p><h3 class="title">字型属性font设置</h3><p>font的各个分量：</p><p><strong>1、font-style</strong>：可取值normal、italic（斜体字）、oblique（倾斜的字）</p><p><strong>2、font-variant</strong>：可取值normal、small-caps（设置小型大写字母显示，所有小写字母均会被转换为大写，但是字体会显的略小一点）</p><p><strong>3、font-weight</strong>：可取值normal、bold、bolder、lighter、100、200、300...900（normal相当于数值400，bold相当于数值700）</p><p><strong>4、font-size</strong>：可取值xx-small、x-small、medium、large、x-large、xx-large、smaller、larger、length与%</p><p><strong>5、line-height</strong>：浏览器强制设置为normal</p><p><strong>6、font-family</strong>：字体集名称</p><h3 class="title">文本的定位</h3><p><strong>textAlign可以取的值有：start、center、end、left、right</strong>，当canvas元素的dir属性是ltr时，left的效果与start相同，right的效果与end一致；当canvas元素的dir属性是rtl时，left的效果与end相同，right的效果与start一致。</p><p><strong>textBaseline可以取的值有：top、bottom、middle、alphabetic、ideographic、hanging</strong>，默认属性是alphabetic。</p><p><strong>measureText(str)</strong>：此方法可以度量文本的宽度。虽然是不够精确的。</p><h3 class="title">在圆弧周围绘制文本</h3>`,15),L={class:"exp"},W={class:"circle",ref:"c4",width:"300",height:"300"},E=m(`<pre><code>drawCircleText () {
    let that = this
    let el = that.$refs.c4
    let context = el.getContext(&#39;2d&#39;)
    let w = el.width
    let h = el.height
    let centerX = w / 2
    let centerY = h / 2

    context.fillStyle = &#39;#f96&#39;
    context.strokeStyle = &#39;#f96&#39;
    context.font = &#39;32px 微软雅黑&#39;
    context.textAlign = &#39;center&#39;
    context.textBaseline = &#39;middle&#39;

    let textStr = &#39;ABCDEFGHIJKLNMOPQRSTUVWXYZ&#39;
    let radius = w / 2 - 22
    let angleDelt = (2 * Math.PI) / textStr.length
    let currAngle = 0
    let currChar = &#39;&#39;

    for (let k = 0; k &lt; textStr.length; k++) {
        currChar = textStr.charAt(k)
        currAngle = (0.5 - k) * angleDelt
        context.save()
        context.beginPath()
        context.translate(centerX + Math.cos(currAngle) * radius, centerY - Math.sin(currAngle) * radius)
        context.rotate(Math.PI / 2 - currAngle)
        context.fillText(currChar, 0, 0)
        context.strokeText(currChar, 0, 0)
        context.restore()
    }
}</code></pre><h3 class="title">图像的绘制</h3><p>Canvas环境对象提供了4个用于绘制及操作图像的方法： <strong>drawImage、putImageData、getImageData、createImageData</strong>。</p><p>必须等待图片加载完成之后才能对其进行绘制，如果尚未完成加载，drawImage()方法将会失败，并且没有任何提示。通常绘制的方法会放在onload()回调函数中。</p><p>图像的绘制效果受制于阴影、剪辑区域、图像合成等因素。</p><p>drawImage()方法会将一幅图像绘制到canvas中，所绘的图像称之为“源图像”，绘制到的地方称之为“目标canvas”。drawImage()可以接收以下3套参数：</p><p><strong>drawImage(image, dx, dy)</strong></p><p><strong>drawImage(image, dx, dy, dw, dh)</strong></p><p><strong>drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)</strong></p><p>第一个参数可以是图像对象，也可以是一个canvas对象，或者video视频对象。</p>`,10),G={class:"exp img"},N={ref:"c5",width:"550",height:"413"},V=a("pre",null,[a("code",null,`let that = this
let el = that.$refs.c1
let context = el.getContext('2d')
let w = el.width
let h = el.height
let img = new Image()
img.onload = function () { // 在image的onload事件中绘制
    context.drawImage(img, 0, 0, w, h)
}
img.src = './static/img/1.jpeg'`)],-1),j=a("p",null,[a("strong",null,"在使用drawImage方法时，务必保证所绘图片已经加载好了。")],-1),U=a("h3",{class:"title"},"离屏Canvas",-1),J=a("p",null,"离屏Canavs通常用来存放临时性的图像信息：",-1),K=a("p",null,"1、创建用做离屏Canvas的元素；",-1),Q=a("p",null,"2、设置离屏Canvas的宽度与高度；",-1),Z=a("p",null,"3、在离屏Canvas中进行绘制；",-1),z=a("p",null,"4、将离屏Canvas的全部或者一部分内容复制到正在显示的Canvas中。",-1),tt={class:"exp img"},et=m(`<pre><code>drawMagnifier () {
    let that = this
    let el = that.$refs.c2
    let context = el.getContext(&#39;2d&#39;)
    let w = el.width
    let h = el.height
    that.offScreenCanvas = document.createElement(&#39;canvas&#39;)
    let offScreenContext = that.offScreenCanvas.getContext(&#39;2d&#39;)
    that.offScreenCanvas.width = w
    that.offScreenCanvas.height = h
    let img = new Image()
    img.onload = function () {
        context.drawImage(img, 0, 0, w, h)
        offScreenContext.drawImage(img, 0, 0, w, h)
        that.addMagnifier(context, w, h, w / 2, h / 2, img)
    }
    img.src = &#39;./static/img/1.jpeg&#39;
}
// 绘制放大镜
addMagnifier (context, w, h, x, y, img) {
    const that = this
    let scale = 1.8
    let radius = 20
    context.save()
    context.beginPath()
    context.strokeStyle = &#39;#ffffff&#39;
    context.lineWidth = 2
    context.shadowColor = &#39;rgba(0,0,0,0.8)&#39;
    context.shadowOffsetX = 8
    context.shadowOffsetY = 8
    context.shadowBlur = 10
    context.arc(x, y, radius, 0, 2 * Math.PI, true)
    context.stroke()
    context.clip()
    context.drawImage(that.offScreenCanvas, x - radius / scale, y - radius / scale, (radius / scale) * 2, (radius / scale) * 2, x - radius, y - radius, radius * 2, radius * 2)
    context.restore()
}</code></pre><p>DOM结构：</p><pre><code>&lt;canvas ref=&quot;c2&quot; width=&quot;300&quot; height=&quot;200&quot; @mousemove=&quot;doMouseMoveForMagnifier&quot; @touchmove=&quot;doMouseMoveForMagnifier&quot;&gt;&lt;/canvas&gt;</code></pre><p>mousemove事件与touchmove事件处理：</p><pre><code>doMouseMoveForMagnifier (e) {
    const that = this
    let el = that.$refs.c2
    let context = el.getContext(&#39;2d&#39;)
    let w = el.width
    let h = el.height
    let img = new Image()
    let pos = that.windowToCanvas(el, e.clientX, e.clientY)
    img.onload = function () {
        context.clearRect(0, 0, w, h)
        context.drawImage(img, 0, 0, w, h)
        that.addMagnifier(context, w, h, pos.x, pos.y, that.offScreenCanvas, img)
    }
    img.src = &#39;./static/img/1.jpeg&#39; // 图片地址
}</code></pre><h3 class="title">操作像素</h3><p>两个方法：getImageData()和putImageData()。</p><p>getImageData方法所返回的ImageData对象包含下列三个属性：width、height、data。</p><p>putImageData(Image,dx,dy,dirtyX,dirtyY,dirtyWidth,dirtyHeight)，其中dx与dy表示所绘制的图像距离canvas左上角的X、Y偏移量；方法的最后4个参数代表以设备为单位的脏矩形，当浏览器将脏矩形复制到canvas时，它会将设备像素转换为CSS像素。</p><p><strong>putImageData方法不受全局设置（globalAlpha、globalCompositeOperation等）的影响。因为它是直接操作像素的。</strong></p><p><em>负片滤镜</em>：从255中减去每个RGB分量值，再将差值设置回去，相当于“反转”了该像素的颜色。</p>`,11),nt={class:"exp img"},at={ref:"c7",width:"550",height:"413"},ot=a("pre",null,[a("code",null,`let imgData = context.getImageData(0, 0, w, h)
for (let i = 0; i < imgData.data.length; i = i + 4) {
    imgData.data[i] = 255 - imgData.data[i]
    imgData.data[i + 1] = 255 - imgData.data[i + 1]
    imgData.data[i + 2] = 255 - imgData.data[i + 2]
}
context.putImageData(imgData, 0, 0)`)],-1),st=a("p",null,[a("em",null,"黑白滤镜"),D("：计算每个像素的RGB分量的平均值，然后将三个分量都设置为这个均值，于是图片由彩色变成了灰白了。")],-1),it={class:"exp img"},lt={ref:"c8",width:"550",height:"413"},rt=a("pre",null,[a("code",null,`let imgData = context.getImageData(0, 0, w, h)
let v
for (let i = 0; i < imgData.data.length; i = i + 4) {
    v = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    imgData.data[i] = v
    imgData.data[i + 1] = v
    imgData.data[i + 2] = v
}
context.putImageData(imgData, 0, 0)`)],-1),ct=a("p",null,[a("em",null,"浮雕滤镜")],-1),dt={class:"exp img"},ht={ref:"c9",width:"550",height:"413"},gt=a("pre",null,[a("code",null,`let imgData = context.getImageData(0, 0, w, h)
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
context.putImageData(imgData, 0, 0)`)],-1),ft=a("p",null,[a("strong",null,"如果在大一些的图片上应用复杂的处理算法，可以使用WebWorker。")],-1),mt=a("footer",null,"2016年06月25日",-1);function xt(e,n,t,i,l,r){return I(),M("div",S,[y,a("div",k,[A,a("div",b,[a("canvas",B,null,512)]),F,O,a("div",X,[a("canvas",Y,null,512)]),$,q,a("div",R,[a("canvas",H,null,512)]),P,a("div",L,[a("canvas",W,null,512)]),E,a("div",G,[a("canvas",N,null,512)]),V,j,U,J,K,Q,Z,z,a("div",tt,[a("canvas",{ref:"c6",width:"550",height:"413",onMousemove:n[0]||(n[0]=(...s)=>r.doMouseMoveForMagnifier&&r.doMouseMoveForMagnifier(...s)),onTouchmove:n[1]||(n[1]=(...s)=>r.doMouseMoveForMagnifier&&r.doMouseMoveForMagnifier(...s))},null,544)]),et,a("div",nt,[a("canvas",at,null,512)]),ot,st,a("div",it,[a("canvas",lt,null,512)]),rt,ct,a("div",dt,[a("canvas",ht,null,512)]),gt,ft]),mt])}const vt=C(T,[["render",xt]]);export{vt as default};
