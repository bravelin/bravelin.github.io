import{_ as u,s as m,x as c,z as s,h as y,o as f,f as n,y as d}from"./index-CxcENImR.js";const v={data(){return{lastTime:0,discs:[{x:150,y:80,lastX:150,lastY:80,velocityX:-32,velocityY:35,radius:20,innerColor:"rgba(255,255,0,1)",middleColor:"rgba(255,255,0,0.7)",outerColor:"rgba(255,255,0,0.5)",strokeStyle:"gray"},{x:50,y:150,lastX:50,lastY:150,velocityX:22,velocityY:25,radius:20,innerColor:"rgba(100,145,230,1)",middleColor:"rgba(100,145,230,0.7)",outerColor:"rgba(100,145,230,0.5)",strokeStyle:"blue"},{x:150,y:75,lastX:150,lastY:75,velocityX:12,velocityY:15,radius:20,innerColor:"rgba(255,0,0,1)",middleColor:"rgba(255,0,0,0.7)",outerColor:"rgba(255,0,0,0.5)",strokeStyle:"orange"}],ctx:null}},mounted(){const e=this;e.$nextTick(()=>{e.startAnimation()})},methods:{init(){window.requestAnimationFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){const i=this;let r,o;window.setTimeout(function(){r=+new Date,e(r),o=+new Date,i.timeout=1e3/60-(o-r)},i.timeout)}})()},startAnimation(){const e=this;e.ctx=e.$refs.c1.getContext("2d"),e.animate()},animate(){const e=this;e.update(),e.draw(),window.requestAnimationFrame(e.animate)},draw(){const e=this,t=e.$refs.c1;if(!t)return;const i=s(e.ctx);let r;i.fillStyle="#ffffff",i.clearRect(0,0,t.width,t.height),i.fillRect(0,0,t.width,t.height),e.discs.forEach(o=>{r=i.createRadialGradient(o.x,o.y,0,o.x,o.y,o.radius),r.addColorStop(.3,o.innerColor),r.addColorStop(.5,o.middleColor),r.addColorStop(1,o.outerColor),i.save(),i.beginPath(),i.arc(o.x,o.y,o.radius,0,Math.PI*2,!1),i.fillStyle=r,i.strokeStyle=o.strokeStyle,i.fill(),i.stroke(),i.restore()})},update(){const e=this;let t=0,i=0;const r=+new Date,o=e.lastTime?r-e.lastTime:0,a=s(e.ctx).canvas;e.discs.forEach(l=>{t=l.velocityX*(o/1e3),i=l.velocityY*(o/1e3),(l.x+t+l.radius>a.width||l.x+t-l.radius<0)&&(l.velocityX=-l.velocityX),(l.y+i+l.radius>a.height||l.y+i-l.radius<0)&&(l.velocityY=-l.velocityY),l.x+=t,l.y+=i}),e.lastTime=r}}},w={class:"_article-content readingNotes-canvas-05"},p={class:"exp"},x={ref:"c1",width:"300",height:"400",style:{height:"400px"}};function g(e,t,i,r,o,a){const l=y("MyArticle");return f(),m(l,{title:"Canvas学习笔记之五：动画",date:"2016年07月10日"},{default:c(()=>[n("div",w,[t[0]||(t[0]=n("h3",{class:"title"},"动画循环",-1)),t[1]||(t[1]=n("p",null,[d("实现动画循环的首选方式，是使用 "),n("strong",null,"requestAnimationFrame()"),d("方法，而不是使用setInterval和setTimeout方法。")],-1)),t[2]||(t[2]=n("p",null,"不需要指定帧速率，浏览器会自行决定最佳的帧速率。cancelRequestAnimationFrame()可以取消回调函数。",-1)),t[3]||(t[3]=n("p",null,"使用requestAnimationFrame的polyfill代码：",-1)),t[4]||(t[4]=n("pre",null,[n("code",null,`window.requestAnimationFrame = (function () {
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
})()`)],-1)),t[5]||(t[5]=n("p",null,[n("em",null,"3个小球的匀速运动：")],-1)),n("div",p,[n("canvas",x,null,512)]),t[6]||(t[6]=n("p",null,"定义数据结构：",-1)),t[7]||(t[7]=n("pre",null,[n("code",null,`discs: [
    {
        x: 150,
        y: 80,
        lastX: 150,
        lastY: 80,
        velocityX: -3.2,
        velocityY: 3.5,
        radius: 25,
        innerColor: 'rgba(255,255,0,1)',
        middleColor: 'rgba(255,255,0,0.7)',
        outerColor: 'rgba(255,255,0,0.5)',
        strokeStyle: 'gray'
    },
    {
        x: 50,
        y: 150,
        lastX: 50,
        lastY: 150,
        velocityX: 2.2,
        velocityY: 2.5,
        radius: 25,
        innerColor: 'rgba(100,145,230,1)',
        middleColor: 'rgba(100,145,230,0.7)',
        outerColor: 'rgba(100,145,230,0.5)',
        strokeStyle: 'blue'
    },
    {
        x: 150,
        y: 75,
        lastX: 150,
        lastY: 75,
        velocityX: 1.2,
        velocityY: 1.5,
        radius: 25,
        innerColor: 'rgba(255,0,0,1)',
        middleColor: 'rgba(255,0,0,0.7)',
        outerColor: 'rgba(255,0,0,0.5)',
        strokeStyle: 'orange'
    }
]`)],-1)),t[8]||(t[8]=n("p",null,"绘制的方法：",-1)),t[9]||(t[9]=n("pre",null,[n("code",null,`draw () {
    const that = this
    const canvas = that.$refs.c1
    const ctx = that.ctx
    let gradient
    ctx.fillStyle = '#ffffff'
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    that.discs.forEach(disc => {
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
    }`)],-1)),t[10]||(t[10]=n("p",null,"更新位置的方法：",-1)),t[11]||(t[11]=n("pre",null,[n("code",null,`update () {
    const that = this
    that.discs.forEach(disc => {
        if (disc.x + disc.velocityX + disc.radius > that.ctx.canvas.width || disc.x + disc.velocityX - disc.radius < 0) {
            disc.velocityX = -disc.velocityX
        }
        if (disc.y + disc.velocityY + disc.radius > that.ctx.canvas.height || disc.y + disc.velocityY - disc.radius < 0) {
            disc.velocityY = -disc.velocityY
        }
        disc.x += disc.velocityX
        disc.y += disc.velocityY
    })
}`)],-1)),t[12]||(t[12]=n("p",null,"动画方法：",-1)),t[13]||(t[13]=n("pre",null,[n("code",null,`animate () {
    const that = this
    that.update()
    that.draw()
    window.requestAnimationFrame(that.animate)
}`)],-1)),t[14]||(t[14]=n("h3",{class:"title"},"帧速率的计算",-1)),t[15]||(t[15]=n("p",null,"可以根据当前帧距离上一帧的时间，计算出动画每秒钟播放的帧数（frame per second，fps）。",-1)),t[16]||(t[16]=n("pre",null,[n("code",null,`var lastTime = 0
function calculateFps () {
    var now = (+new Date())
    var fps = 1000 / (now - lastTime)
    lastTime = now
    return fps
}`)],-1)),t[17]||(t[17]=n("h3",{class:"title"},"动画的一些原则",-1)),t[18]||(t[18]=n("p",null,[n("strong",null,"将业务逻辑的更新与动画的绘制分开；")],-1)),t[19]||(t[19]=n("p",null,[n("strong",null,"使用“基于时间的运动”来协调动画的播放速度；")],-1)),t[20]||(t[20]=n("p",null,[n("strong",null,"使用剪辑区域或图块复制技术将复杂的背景恢复到屏幕之上；")],-1)),t[21]||(t[21]=n("p",null,[n("strong",null,"必要时可使用一个或者多个离屏缓冲区以提升绘制速度；")],-1))])]),_:1})}const h=u(v,[["render",g]]);export{h as default};
