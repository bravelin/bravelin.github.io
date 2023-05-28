import{u as A}from"./highlight-2e3cec98.js";import{u as F}from"./catalog-69e48a3d.js";import{r as Y,o as X,a as R,_ as I,b as O,c as E,e,g as k,l as P}from"./index-4afbb925.js";import"./article-1b647556.js";function q(){let d=0;const a=[{x:150,y:80,lastX:150,lastY:80,velocityX:-32,velocityY:35,radius:20,innerColor:"rgba(255,255,0,1)",middleColor:"rgba(255,255,0,0.7)",outerColor:"rgba(255,255,0,0.5)",strokeStyle:"gray"},{x:50,y:150,lastX:50,lastY:150,velocityX:22,velocityY:25,radius:20,innerColor:"rgba(100,145,230,1)",middleColor:"rgba(100,145,230,0.7)",outerColor:"rgba(100,145,230,0.5)",strokeStyle:"blue"},{x:150,y:75,lastX:150,lastY:75,velocityX:12,velocityY:15,radius:20,innerColor:"rgba(255,0,0,1)",middleColor:"rgba(255,0,0,0.7)",outerColor:"rgba(255,0,0,0.5)",strokeStyle:"orange"}];let s=null;const p=Y(null);let f=null;const m=()=>{const v=p.value;if(!v)return;let h;s.fillStyle="#ffffff",s.clearRect(0,0,v.width,v.height),s.fillRect(0,0,v.width,v.height),a.forEach(o=>{h=s.createRadialGradient(o.x,o.y,0,o.x,o.y,o.radius),h.addColorStop(.3,o.innerColor),h.addColorStop(.5,o.middleColor),h.addColorStop(1,o.outerColor),s.save(),s.beginPath(),s.arc(o.x,o.y,o.radius,0,Math.PI*2,!1),s.fillStyle=h,s.strokeStyle=o.strokeStyle,s.fill(),s.stroke(),s.restore()})},y=()=>{let v=0,h=0;const o=+new Date,l=d?o-d:0,g=s.canvas;a.forEach(t=>{v=t.velocityX*(l/1e3),h=t.velocityY*(l/1e3),(t.x+v+t.radius>g.width||t.x+v-t.radius<0)&&(t.velocityX=-t.velocityX),(t.y+h+t.radius>g.height||t.y+h-t.radius<0)&&(t.velocityY=-t.velocityY),t.x+=v,t.y+=h}),d=o},x=()=>{y(),m(),f=window.requestAnimationFrame(x)},S=()=>{s=p.value.getContext("2d"),x()},b=()=>{if(p.value){const v=parseInt(window.getComputedStyle(p.value.parentNode,null).width),h=window.devicePixelRatio||1;p.value.width=v*h}};return X(()=>{b(),S(),window.addEventListener("resize",b),setTimeout(()=>{b()},2e3)}),R(()=>{f&&window.cancelAnimationFrame(f),window.removeEventListener("resize",b)}),{c1:p}}class C{constructor(a){this.name=a.name||"sprite",this.painter=a.painter,this.top=a.top||0,this.left=a.left||0,this.width=a.width||0,this.height=a.height||0,this.velocityX=a.velocityX||0,this.velocityY=a.velocityY||0,this.visible=a.visible||!0,this.animating=a.animating||!1,this.behaviors=a.behaviors||[],Object.keys(a).forEach(s=>{this[s]==null&&(this[s]=a[s])})}paint(a){this.painter&&this.visible&&this.painter.paint(this,a)}update(a,s){this.behaviors.forEach(p=>{p.execute(this,a,s)})}}function D(){const a={paint(o,l){l.save(),l.beginPath(),l.arc(o.left+o.width/2,o.top+o.height/2,25,0,Math.PI*2,!1),l.clip(),l.shadowColor="rgb(0,0,0)",l.shadowOffsetX=-4,l.shadowOffsetY=-4,l.shadowBlur=8,l.lineWidth=2,l.strokeStyle="rgb(100, 100, 195)",l.fillStyle="rgba(30, 144, 255, 0.15)",l.stroke(),l.fill(),l.restore()}};let s=[],p=null;const f=Y(null),m=Y(null),y=Y(null),x=()=>{const o=f.value.getContext("2d"),l=new C({painter:a,left:100,top:100});o.fillStyle="#ffffff",o.fillRect(0,0,f.value.width,f.value.height),l.paint(o)},S=()=>{const o=m.value.getContext("2d"),l=new C({painter:a,left:60,top:60}),g=new C({painter:a,left:160,top:160});o.fillStyle="#ffffff",o.fillRect(0,0,m.value.width,m.value.height),l.paint(o),g.paint(o)},b=()=>{const o=y.value,l=o.getContext("2d");l.fillStyle="#ffffff",l.fillRect(0,0,o.width,o.height),s.forEach(g=>{g.update(l)}),s.forEach(g=>{g.paint(l)}),p=window.requestAnimationFrame(b)},v=()=>{const o={paint(t,r){const w=r.createRadialGradient(t.left,t.top,0,t.left,t.top,t.radius);w.addColorStop(.3,t.innerColor),w.addColorStop(.5,t.middleColor),w.addColorStop(1,t.outerColor),r.save(),r.fillStyle=w,r.strokeStyle=t.strokeStyle,r.beginPath(),r.arc(t.left,t.top,t.radius,0,Math.PI*2,!1),r.fill(),r.stroke(),r.restore()}},l={execute(t,r){(t.left+t.velocityX+t.radius>r.canvas.width||t.left+t.velocityX-t.radius<0)&&(t.velocityX=-t.velocityX),(t.top+t.velocityY+t.radius>r.canvas.height||t.top+t.velocityY-t.radius<0)&&(t.velocityY=-t.velocityY),t.left+=t.velocityX,t.top+=t.velocityY}},g=[];g.push(new C({painter:o,behaviors:[l],left:50,top:20,velocityX:-3.2,velocityY:3.5,radius:16,innerColor:"rgba(255,255,0,1)",middleColor:"rgba(255,255,0,0.7)",outerColor:"rgba(255,255,0,0.5)",strokeStyle:"gray"})),g.push(new C({painter:o,behaviors:[l],left:50,top:150,velocityX:2.2,velocityY:2.5,radius:22,innerColor:"rgba(100,145,230,1)",middleColor:"rgba(100,145,230,0.7)",outerColor:"rgba(100,145,230,0.5)",strokeStyle:"blue"})),g.push(new C({painter:o,behaviors:[l],left:150,top:75,velocityX:1.2,velocityY:1.5,radius:18,innerColor:"rgba(255,0,0,1)",middleColor:"rgba(255,0,0,0.7)",outerColor:"rgba(255,0,0,0.5)",strokeStyle:"orange"})),s=g,b()},h=()=>{if(f.value){const o=parseInt(window.getComputedStyle(f.value.parentNode,null).width),l=window.devicePixelRatio||1;f.value.width=o*l,m.value.width=o*l,y.value.width=o*l,x(),S()}};return X(()=>{h(),x(),S(),v(),window.addEventListener("resize",h),setTimeout(()=>{h()},2e3)}),R(()=>{p&&window.cancelAnimationFrame(p),window.removeEventListener("resize",h)}),{c2:f,c3:m,c4:y}}const M={paint(d,a){const s=a.createRadialGradient(d.left,d.top,0,d.left,d.top,d.radius);s.addColorStop(.3,d.innerColor),s.addColorStop(.5,d.middleColor),s.addColorStop(1,d.outerColor),a.save(),a.fillStyle=s,a.strokeStyle=d.strokeStyle,a.beginPath(),a.arc(d.left,d.top,d.radius,0,Math.PI*2,!1),a.fill(),a.stroke(),a.restore()}};function B(){let d=null,a=[],s=null;const p=Y(null),f=Y(null),m=Y(null);let y=null,x=null,S=null;const b=()=>{const t=p.value,r=t.getContext("2d");r.fillStyle="#ffffff",r.fillRect(0,0,t.width,t.height),d.update(r),d.paint(r),y=window.requestAnimationFrame(b)},v=()=>{const w={execute(u,c,n){u.top+u.velocityY+u.radius>c.canvas.height&&(u.velocityY=0,u.top=0,u.lastTime=+new Date,u.elapseTime=0),n=n||+new Date;const i=n-u.lastTime,_=1e3/i;u.top+=u.velocityY/_,u.elapseTime+=i,u.velocityY=9.81*(u.elapseTime/1e3)*.01}};d=new C({painter:M,behaviors:[w],left:150,top:20,velocityX:0,velocityY:0,lastTime:+new Date,elapseTime:0,radius:10,innerColor:"rgba(100,145,230,1)",middleColor:"rgba(100,145,230,0.7)",outerColor:"rgba(100,145,230,0.5)",strokeStyle:"blue"}),b()},h=()=>{const w={execute(c,n,i){(c.top+c.velocityY>n.canvas.height||c.left+c.velocityX>n.canvas.width)&&(c.velocityY=0,c.lastTime=+new Date,c.elapseTime=0,c.left=parseInt(200*Math.random()),c.top=400-parseInt(20*Math.random())),i=i||+new Date;const _=i-c.lastTime,T=1e3/_;c.top+=c.velocityY/T,c.left+=c.velocityX/T,c.elapseTime+=_,c.velocityY=-(c.initVelocityY-9.81*(c.elapseTime/1e3))*.6}},u=[];for(let c=0;c<1;c++)u.push(new C({painter:M,behaviors:[w],left:parseInt(200*Math.random()),top:400-parseInt(20*Math.random()),velocityX:4+10*Math.random(),velocityY:0,initVelocityY:100-50*Math.random(),lastTime:+new Date,elapseTime:0,radius:12,innerColor:"rgba(100,145,230,1)",middleColor:"rgba(100,145,230,0.7)",outerColor:"rgba(100,145,230,0.5)",strokeStyle:"blue"}));a=u,o()},o=()=>{const t=f.value,r=t.getContext("2d");r.fillStyle="#ffffff",r.fillRect(0,0,t.width,t.height),a.forEach(w=>{w.update(r)}),a.forEach(w=>{w.paint(r)}),x=window.requestAnimationFrame(o)},l=()=>{const w={execute(n,i,_){_=_||+new Date,n.elapseTime+=(_-n.lastTime)/1e3,n.angle=n.initAngle*Math.cos(Math.sqrt(40)*n.elapseTime),n.weightX=n.x+Math.sin(n.angle)*n.rodLength,n.weightY=n.y+Math.cos(n.angle)*n.rodLength,n.lastTime=_}},u={pivotFillStyle:"rgba(0,0,0,0.2)",weightShadowCOlor:"rgb(0,0,0)",pivotShadowColor:"rgb(255,255,0)",strokeColor:"rgb(100,100,195)",paint(n,i){this.drawPivot(n,i),this.drawRod(n,i),this.drawWeight(n,i)},drawWeight(n,i){i.save(),i.beginPath(),i.arc(n.weightX,n.weightY,n.weightRadius,0,Math.PI*2,!1),i.clip(),i.shadowColor=this.weightShadowCOlor,i.shadowOffsetX=-4,i.shadowOffsetY=-4,i.shadowBlur=8,i.lineWidth=2,i.strokeStyle=this.strokeColor,i.stroke(),i.beginPath(),i.arc(n.weightX,n.weightY,n.weightRadius/2,0,Math.PI*2,!1),i.clip(),i.shadowColor=this.pivotShadowColor,i.shadowOffsetX=-4,i.shadowOffsetY=-4,i.shadowBlur=8,i.stroke(),i.restore()},drawPivot(n,i){i.save(),i.beginPath(),i.fillStyle=this.pivotFillStyle,i.arc(n.x+n.pivotRadius,n.y,n.pivotRadius,0,Math.PI*2,!1),i.fill(),i.stroke(),i.restore()},drawRod(n,i){i.beginPath(),i.moveTo(n.x+n.pivotRadius+n.pivotRadius*Math.sin(n.angle),n.y+n.pivotRadius*Math.cos(n.angle)),i.lineTo(n.weightX-n.weightRadius*Math.sin(n.angle),n.weightY-n.weightRadius*Math.cos(n.angle)),i.stroke()}},c=Math.PI/7;s=new C({painter:u,behaviors:[w],initAngle:c,angle:c,x:150,y:30,weightX:0,weightY:0,weightRadius:25,rodLength:320,pivotRadius:7,lastTime:+new Date,elapseTime:0}),g()},g=()=>{const t=m.value,r=t.getContext("2d");r.fillStyle="#ffffff",r.fillRect(0,0,t.width,t.height),s.update(r),s.paint(r),S=window.requestAnimationFrame(g)};return X(()=>{v(),h(),l()}),R(()=>{y&&window.cancelAnimationFrame(y),x&&window.cancelAnimationFrame(x),S&&window.cancelAnimationFrame(S)}),{c5:p,c6:f,c7:m}}const L={setup(){A(),F();const{c1:d}=q(),{c2:a,c3:s,c4:p}=D(),{c5:f,c6:m,c7:y}=B();return{c1:d,c2:a,c3:s,c4:p,c5:f,c6:m,c7:y}}},j={class:"article-container canvas-learning-3-article"},W=e("h2",{class:"article-title"},"Canvas学习笔记之三：动画、精灵与物理效果",-1),$={class:"article-content"},z=e("h3",{class:"title"},"动画循环",-1),G=e("p",null,[k("实现动画循环的首选方式，是使用"),e("strong",null,"requestAnimationFrame()"),k("方法，而不是使用setInterval和setTimeout方法。")],-1),V=e("p",null,"不需要指定帧速率，浏览器会自行决定最佳的帧速率。cancelRequestAnimationFrame()可以取消回调函数。",-1),N=e("p",null,"使用requestAnimationFrame的polyfill代码：",-1),H=e("pre",null,[e("code",null,`window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (callback, element) {
            var self = this
            var start
            var finish
            window.setTimeout(function () {
                start = +new Date()
                callback(start)
                finish = +new Date()
                self.timeout = 1000 / 60 - (finish - start) // 大约60fps
            }, self.timeout)
        }
})()`)],-1),U=e("p",null,[e("em",null,"3个小球的匀速运动：")],-1),J={class:"exp"},K={ref:"c1",width:"300",height:"400",style:{height:"400px"}},Q=P(`<p>定义数据结构：</p><pre><code>discs: [
    {
        x: 150,
        y: 80,
        lastX: 150,
        lastY: 80,
        velocityX: -3.2,
        velocityY: 3.5,
        radius: 25,
        innerColor: &#39;rgba(255,255,0,1)&#39;,
        middleColor: &#39;rgba(255,255,0,0.7)&#39;,
        outerColor: &#39;rgba(255,255,0,0.5)&#39;,
        strokeStyle: &#39;gray&#39;
    },
    {
        x: 50,
        y: 150,
        lastX: 50,
        lastY: 150,
        velocityX: 2.2,
        velocityY: 2.5,
        radius: 25,
        innerColor: &#39;rgba(100,145,230,1)&#39;,
        middleColor: &#39;rgba(100,145,230,0.7)&#39;,
        outerColor: &#39;rgba(100,145,230,0.5)&#39;,
        strokeStyle: &#39;blue&#39;
    },
    {
        x: 150,
        y: 75,
        lastX: 150,
        lastY: 75,
        velocityX: 1.2,
        velocityY: 1.5,
        radius: 25,
        innerColor: &#39;rgba(255,0,0,1)&#39;,
        middleColor: &#39;rgba(255,0,0,0.7)&#39;,
        outerColor: &#39;rgba(255,0,0,0.5)&#39;,
        strokeStyle: &#39;orange&#39;
    }
]</code></pre><p>绘制的方法：</p><pre><code>draw () {
    const that = this
    const canvas = that.$refs.c1
    const ctx = that.ctx
    let gradient
    ctx.fillStyle = &#39;#ffffff&#39;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    that.discs.forEach(disc =&gt; {
        gradient = ctx.createRadialGradient(disc.x, disc.y, 0, disc.x, disc.y, disc.radius)
        gradient.addColorStop(0.3, disc.innerColor)
        gradient.addColorStop(0.5, disc.middleColor)
        gradient.addColorStop(1, disc.outerColor)
        ctx.save()
        ctx.beginPath()
        ctx.arc(disc.x, disc.y, disc.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = gradient
        ctx.strokeStyle = disc.strokeStyle
        ctx.fill()
        ctx.stroke()
        ctx.restore()
      })
    }</code></pre><p>更新位置的方法：</p><pre><code>update () {
    const that = this
    that.discs.forEach(disc =&gt; {
        if (disc.x + disc.velocityX + disc.radius &gt; that.ctx.canvas.width || disc.x + disc.velocityX - disc.radius &lt; 0) {
            disc.velocityX = -disc.velocityX
        }
        if (disc.y + disc.velocityY + disc.radius &gt; that.ctx.canvas.height || disc.y + disc.velocityY - disc.radius &lt; 0) {
            disc.velocityY = -disc.velocityY
        }
        disc.x += disc.velocityX
        disc.y += disc.velocityY
    })
}</code></pre><p>动画方法：</p><pre><code>animate () {
    const that = this
    that.update()
    that.draw()
    window.requestAnimationFrame(that.animate)
}</code></pre><h3 class="title">帧速率的计算</h3><p>可以根据当前帧距离上一帧的时间，计算出动画每秒钟播放的帧数（frame per second，fps）。</p><pre><code>var lastTime = 0
function calculateFps () {
    var now = (+new Date())
    var fps = 1000 / (now - lastTime)
    lastTime = now
    return fps
}</code></pre><h3 class="title">动画的一些原则</h3><p><strong>将业务逻辑的更新与动画的绘制分开；</strong></p><p><strong>使用“基于时间的运动”来协调动画的播放速度；</strong></p><p><strong>使用剪辑区域或图块复制技术将复杂的背景恢复到屏幕之上；</strong></p><p><strong>必要时可使用一个或者多个离屏缓冲区以提升绘制速度；</strong></p><h3 class="title">精灵概述</h3><p>精灵对象可以接受调用者的命令，来执行某些特定的操作，例如下落、飞行、弹起等。</p><p>painter属性是一个指向Painter对象的引用，该对象使用paint(sprite, context)方法来绘制精灵；behaviors属性指向一个对象数组，数组中的每个对象都会以execute(sprite,context,time)方法来对精灵进行某种形式的操作：</p><pre><code>// canvas 精灵对象
class Sprite {
    constructor (options) {
        this.name = options.name || &#39;sprite&#39;
        this.painter = options.painter

        this.top = options.top || 0
        this.left = options.left || 0
        this.width = options.width || 0
        this.height = options.height || 0
        this.velocityX = options.velocityX || 0
        this.velocityY = options.velocityY || 0
        this.visible = options.visible || true
        this.animating = options.animating || false
        this.behaviors = options.behaviors || []
        // 精灵对象的其他属性
        Object.keys(options).forEach(key =&gt; {
            if (this[key] == undefined) {
                this[key] = options[key]
            }
        })
    }
    paint (context) {
        if (this.painter &amp;&amp; this.visible) {
            this.painter.paint(this, context)
        }
    }
    update (context, time) {
        this.behaviors.forEach(behavior =&gt; {
            behavior.execute(this, context, time)
        })
    }
}
export default Sprite</code></pre><p>使用精灵绘制的小球：</p>`,21),Z={class:"exp"},tt={ref:"c2",width:"300",height:"200"},et=e("p",null,"定义一个painterObj即可：",-1),nt=e("pre",null,[e("code",null,`const that = this
const c1 = that.$refs.c1
const ctx = c1.getContext('2d')
const radius = 25
const painterObj = {
    paint (sprite, context) {
        context.beginPath()
        context.arc(sprite.left + sprite.width / 2, sprite.top + sprite.height / 2, radius, 0, Math.PI * 2, false)
        context.clip()
        context.shadowColor = 'rgb(0,0,0)'
        context.shadowOffsetX = -4
        context.shadowOffsetY = -4
        context.shadowBlur = 8
        context.lineWidth = 2
        context.strokeStyle = 'rgb(100, 100, 195)'
        context.fillStyle = 'rgba(30, 144, 255, 0.15)'
        context.stroke()
        context.fill()
    }
}
let ball = new Sprite({
    painter: painterObj,
    left: 100,
    top: 100
})
ctx.fillStyle = '#ffffff'
ctx.fillRect(0, 0, c1.width, c1.height)
ball.paint(ctx)`)],-1),it=e("h3",{class:"title"},"绘制器",-1),ot=e("p",null,"Sprite对象与绘制其内容的绘制器之间是解耦的。如此可在程序运行时动态地设置绘制器，提高了灵活性。",-1),at=e("p",null,[e("strong",null,"精灵对象不需要自己完成绘制操作，而是将绘制操作代理给另外一个对象来做。")],-1),st=e("p",null,"多个小球，复用painter：",-1),lt={class:"exp"},rt={ref:"c3",width:"300",height:"200"},ct=e("pre",null,[e("code",null,`const that = this
const c2 = that.$refs.c2
const ctx = c2.getContext('2d')
const b1 = new Sprite({
    painter: painterObj,
    left: 60,
    top: 60
})
const b2 = new Sprite({
    painter: painterObj,
    left: 160,
    top: 160
})
ctx.fillStyle = '#ffffff'
ctx.fillRect(0, 0, c2.width, c2.height)
b1.paint(ctx)
b2.paint(ctx)`)],-1),dt=e("h3",{class:"title"},"基于精灵的动画循环",-1),ht=e("p",null,"大部分情况下，基于精灵的可以复用的动画循环模式如下：",-1),pt=e("pre",null,[e("code",null,`var sprites = [new Sprite(), ...]
var context = ...
function animate (time) {
    var i = 0
    ...
    context.clearRect(0,0,context.canvas.width,context.canvas.height)
    drawBackground() // 绘制背景
    for(i = 0; i < sprites.length; i++) { // 更新状态
        sprites[i].update(context, time)
    }
    for(i = 0; i < sprites.length; i++) { // 绘制
        sprites[i].paint(context)
    }
    window.requestAnimationFrame(animate)
}`)],-1),ut=e("p",null,"使用精灵模式实现的三个小球运动动画：",-1),ft={class:"exp"},vt={ref:"c4",width:"300",height:"250"},gt=P(`<p>定义绘制器对象和行为对象：</p><pre><code>const that = this
const painter = { // 绘制器对象
    paint (sprite, context) {
        let gradient = context.createRadialGradient(sprite.left, sprite.top, 0, sprite.left, sprite.top, sprite.radius)
        gradient.addColorStop(0.3, sprite.innerColor)
        gradient.addColorStop(0.5, sprite.middleColor)
        gradient.addColorStop(1, sprite.outerColor)
        context.save()
        context.fillStyle = gradient
        context.strokeStyle = sprite.strokeStyle
        context.beginPath()
        context.arc(sprite.left, sprite.top, sprite.radius, 0, Math.PI * 2, false)
        context.fill()
        context.stroke()
        context.restore()
    }
}
const move = { // behavior对象
    execute (sprite, context, time) {
        if (sprite.left + sprite.velocityX + sprite.radius &gt; context.canvas.width || sprite.left + sprite.velocityX - sprite.radius &lt; 0) {
            sprite.velocityX = -sprite.velocityX
        }
        if (sprite.top + sprite.velocityY + sprite.radius &gt; context.canvas.height || sprite.top + sprite.velocityY - sprite.radius &lt; 0) {
            sprite.velocityY = -sprite.velocityY
        }
        sprite.left += sprite.velocityX
        sprite.top += sprite.velocityY
    }
}</code></pre><p>添加三个精灵：</p><pre><code>let arr = [] // 添加三个精灵
arr.push(new Sprite({
    painter: painter,
    behaviors: [move],
    left: 50,
    top: 20,
    velocityX: -3.2,
    velocityY: 3.5,
    radius: 16,
    innerColor: &#39;rgba(255,255,0,1)&#39;,
    middleColor: &#39;rgba(255,255,0,0.7)&#39;,
    outerColor: &#39;rgba(255,255,0,0.5)&#39;,
    strokeStyle: &#39;gray&#39;
}))
arr.push(new Sprite({
    painter: painter,
    behaviors: [move],
    left: 50,
    top: 150,
    velocityX: 2.2,
    velocityY: 2.5,
    radius: 22,
    innerColor: &#39;rgba(100,145,230,1)&#39;,
    middleColor: &#39;rgba(100,145,230,0.7)&#39;,
    outerColor: &#39;rgba(100,145,230,0.5)&#39;,
    strokeStyle: &#39;blue&#39;
}))
arr.push(new Sprite({
    painter: painter,
    behaviors: [move],
    left: 150,
    top: 75,
    velocityX: 1.2,
    velocityY: 1.5,
    radius: 18,
    innerColor: &#39;rgba(255,0,0,1)&#39;,
    middleColor: &#39;rgba(255,0,0,0.7)&#39;,
    outerColor: &#39;rgba(255,0,0,0.5)&#39;,
    strokeStyle: &#39;orange&#39;
}))
that.sprites = arr
that.animate()</code></pre><p>执行动画函数：</p><pre><code>animate (time) {
    const that = this
    const canvas = that.$refs.c3
    const ctx = canvas.getContext(&#39;2d&#39;)
    ctx.fillStyle = &#39;#ffffff&#39;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    that.sprites.forEach(sprite =&gt; {
        sprite.update(ctx)
    })
    that.sprites.forEach(sprite =&gt; {
        sprite.paint(ctx)
    })
    window.requestAnimationFrame(that.animate)
}</code></pre><h3 class="title">物理效果之自由落体</h3><p>重力是最弱的宇宙基本力。四种宇宙基本力：强核作用力、电磁力、弱核作用力以及重力。</p><p>在现实世界中，地球表面的物体在下坠时，其加速度都是9.81m/s/s，也可以表示为32ft/s/s。速度公式：<strong>v = gt</strong></p>`,9),wt={class:"exp spec"},mt={ref:"c5",width:"300",height:"400"},yt=e("pre",null,[e("code",null,`const move = {
    execute (sprite, context, time) {
        if (sprite.top + sprite.velocityY + sprite.radius > context.canvas.height) {
            sprite.velocityY = 0
            sprite.top = 0
            sprite.lastTime = (+new Date())
            sprite.elapseTime = 0
        }
        time = time || (+new Date())
        let deltTime = time - sprite.lastTime
        let fps = 1000 / deltTime
        sprite.top += sprite.velocityY / fps
        sprite.elapseTime += deltTime
        sprite.velocityY = gravity * (sprite.elapseTime / 1000) * metersRatio
    }
}`)],-1),bt=e("h3",{class:"title"},"物理效果之抛物线运动",-1),xt={class:"exp spec"},_t={ref:"c6",width:"300",height:"400"},Ct=e("pre",null,[e("code",null,`const move = {
    execute (sprite, context, time) {
        if (sprite.top + sprite.velocityY > context.canvas.height || sprite.left + sprite.velocityX > context.canvas.width) {
            sprite.velocityY = 0
            sprite.lastTime = (+new Date())
            sprite.elapseTime = 0
            sprite.left = parseInt(200 * Math.random())
            sprite.top = 400 - parseInt(20 * Math.random())
        }
        time = time || (+new Date())
        let deltTime = time - sprite.lastTime
        let fps = 1000 / deltTime
        sprite.top += sprite.velocityY / fps
        sprite.left += sprite.velocityX / fps
        sprite.elapseTime += deltTime
        sprite.velocityY = -(sprite.initVelocityY - gravity * (sprite.elapseTime / 1000)) * metersRatio
    }
}`)],-1),St=e("h3",{class:"title"},"物理效果之钟摆运动",-1),Yt={class:"exp spec"},Xt={ref:"c7",width:"300",height:"400"},Rt=e("p",null,"定义精灵对象：",-1),Tt=e("pre",null,[e("code",null,`const initAngle = Math.PI / 7
that.pendulum = new Sprite({
    painter: pendulumPainter,
    behaviors: [move],
    initAngle: initAngle,
    angle: initAngle,
    x: 150,
    y: 30,
    weightX: 0,
    weightY: 0,
    weightRadius: 25,
    rodLength: 320,
    pivotRadius: 7,
    lastTime: (+new Date()),
    elapseTime: 0
})`)],-1),kt=e("p",null,"绘制器对象：",-1),Mt=e("pre",null,[e("code",null,`const pendulumPainter = {
    pivotFillStyle: 'rgba(0,0,0,0.2)',
    weightShadowCOlor: 'rgb(0,0,0)',
    pivotShadowColor: 'rgb(255,255,0)',
    strokeColor: 'rgb(100,100,195)',
    paint (sprite, context) {
        this.drawPivot(sprite, context)
        this.drawRod(sprite, context)
        this.drawWeight(sprite, context)
    },
    drawWeight (sprite, context) {
        context.save()
        context.beginPath()
        context.arc(sprite.weightX, sprite.weightY, sprite.weightRadius, 0, Math.PI * 2, false)
        context.clip()
        context.shadowColor = this.weightShadowCOlor
        context.shadowOffsetX = -4
        context.shadowOffsetY = -4
        context.shadowBlur = 8
        context.lineWidth = 2
        context.strokeStyle = this.strokeColor
        context.stroke()
        context.beginPath()
        context.arc(sprite.weightX, sprite.weightY, sprite.weightRadius / 2, 0, Math.PI * 2, false)
        context.clip()
        context.shadowColor = this.pivotShadowColor
        context.shadowOffsetX = -4
        context.shadowOffsetY = -4
        context.shadowBlur = 8
        context.stroke()
        context.restore()
    },
    drawPivot (sprite, context) {
        context.save()
        context.beginPath()
        context.fillStyle = this.pivotFillStyle
        context.arc(sprite.x + sprite.pivotRadius, sprite.y, sprite.pivotRadius, 0, Math.PI * 2, false)
        context.fill()
        context.stroke()
        context.restore()
    },
    drawRod (sprite, context) {
        context.beginPath()
        context.moveTo(sprite.x + sprite.pivotRadius + sprite.pivotRadius * Math.sin(sprite.angle), sprite.y + sprite.pivotRadius * Math.cos(sprite.angle))
        context.lineTo(sprite.weightX - sprite.weightRadius * Math.sin(sprite.angle), sprite.weightY - sprite.weightRadius * Math.cos(sprite.angle))
        context.stroke()
    }
}`)],-1),Pt=e("p",null,"行为对象：",-1),At=e("pre",null,[e("code",null,`const move = {
    execute (sprite, context, time) {
        time = time || (+new Date())
        sprite.elapseTime += (time - sprite.lastTime) / 1000
        sprite.angle = sprite.initAngle * Math.cos(Math.sqrt(gravity / rodLength) * sprite.elapseTime)
        sprite.weightX = sprite.x + Math.sin(sprite.angle) * sprite.rodLength
        sprite.weightY = sprite.y + Math.cos(sprite.angle) * sprite.rodLength
        sprite.lastTime = time
    }
}`)],-1),Ft=e("footer",null,"2016年07月19日",-1);function It(d,a,s,p,f,m){return O(),E("div",j,[W,e("div",$,[z,G,V,N,H,U,e("div",J,[e("canvas",K,null,512)]),Q,e("div",Z,[e("canvas",tt,null,512)]),et,nt,it,ot,at,st,e("div",lt,[e("canvas",rt,null,512)]),ct,dt,ht,pt,ut,e("div",ft,[e("canvas",vt,null,512)]),gt,e("div",wt,[e("canvas",mt,null,512)]),yt,bt,e("div",xt,[e("canvas",_t,null,512)]),Ct,St,e("div",Yt,[e("canvas",Xt,null,512)]),Rt,Tt,kt,Mt,Pt,At]),Ft])}const Bt=I(L,[["render",It]]);export{Bt as default};
