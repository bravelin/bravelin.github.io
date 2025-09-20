import{_ as g,s as m,x as u,i as v,o as w,f as o,y as f}from"./index-Dav9PDu2.js";class d{constructor(t){this.name=t.name||"sprite",this.painter=t.painter,this.top=t.top||0,this.left=t.left||0,this.width=t.width||0,this.height=t.height||0,this.velocityX=t.velocityX||0,this.velocityY=t.velocityY||0,this.visible=t.visible||!0,this.animating=t.animating||!1,this.behaviors=t.behaviors||[],Object.keys(t).forEach(a=>{this[a]==null&&(this[a]=t[a])})}paint(t){this.painter&&this.visible&&this.painter.paint(this,t)}update(t,a){this.behaviors.forEach(r=>{r.execute(this,t,a)})}}const p={paint(n,t){const a=t.createRadialGradient(n.left,n.top,0,n.left,n.top,n.radius);a.addColorStop(.3,n.innerColor),a.addColorStop(.5,n.middleColor),a.addColorStop(1,n.outerColor),t.save(),t.fillStyle=a,t.strokeStyle=n.strokeStyle,t.beginPath(),t.arc(n.left,n.top,n.radius,0,Math.PI*2,!1),t.fill(),t.stroke(),t.restore()}},y={data(){return{ball:null,lobBalls:[],pendulum:null}},mounted(){const n=this;n.$nextTick(()=>{n.startGravityForce(),n.startLob(),n.startPendulum()})},methods:{startGravityForce(){const n=this,t=9.81,a=.01,r={execute(l,s,e){l.top+l.velocityY+l.radius>s.canvas.height&&(l.velocityY=0,l.top=0,l.lastTime=+new Date,l.elapseTime=0),e=e||+new Date;const i=e-l.lastTime,h=1e3/i;l.top+=l.velocityY/h,l.elapseTime+=i,l.velocityY=t*(l.elapseTime/1e3)*a}};n.ball=new d({painter:p,behaviors:[r],left:150,top:20,velocityX:0,velocityY:0,lastTime:+new Date,elapseTime:0,radius:10,innerColor:"rgba(100,145,230,1)",middleColor:"rgba(100,145,230,0.7)",outerColor:"rgba(100,145,230,0.5)",strokeStyle:"blue"}),n.animateGravityForce()},animateGravityForce(n){const t=this,a=t.$refs.c1,r=a.getContext("2d");r.fillStyle="#ffffff",r.fillRect(0,0,a.width,a.height),t.ball.update(r),t.ball.paint(r),window.requestAnimationFrame(t.animateGravityForce)},startLob(){const n=this,t=9.81,a=.6,r={execute(s,e,i){(s.top+s.velocityY>e.canvas.height||s.left+s.velocityX>e.canvas.width)&&(s.velocityY=0,s.lastTime=+new Date,s.elapseTime=0,s.left=parseInt(200*Math.random()),s.top=400-parseInt(20*Math.random())),i=i||+new Date;const h=i-s.lastTime,c=1e3/h;s.top+=s.velocityY/c,s.left+=s.velocityX/c,s.elapseTime+=h,s.velocityY=-(s.initVelocityY-t*(s.elapseTime/1e3))*a}},l=[];for(let s=0;s<1;s++)l.push(new d({painter:p,behaviors:[r],left:parseInt(200*Math.random()),top:400-parseInt(20*Math.random()),velocityX:4+10*Math.random(),velocityY:0,initVelocityY:100-50*Math.random(),lastTime:+new Date,elapseTime:0,radius:12,innerColor:"rgba(100,145,230,1)",middleColor:"rgba(100,145,230,0.7)",outerColor:"rgba(100,145,230,0.5)",strokeStyle:"blue"}));n.lobBalls=l,n.animateLob()},animateLob(n){const t=this,a=t.$refs.c2,r=a.getContext("2d");r.fillStyle="#ffffff",r.fillRect(0,0,a.width,a.height),t.lobBalls.forEach(l=>{l.update(r)}),t.lobBalls.forEach(l=>{l.paint(r)}),window.requestAnimationFrame(t.animateLob)},startPendulum(){const n=this,t=32,a=.8,r={execute(e,i,h){h=h||+new Date,e.elapseTime+=(h-e.lastTime)/1e3,e.angle=e.initAngle*Math.cos(Math.sqrt(t/a)*e.elapseTime),e.weightX=e.x+Math.sin(e.angle)*e.rodLength,e.weightY=e.y+Math.cos(e.angle)*e.rodLength,e.lastTime=h}},l={pivotFillStyle:"rgba(0,0,0,0.2)",weightShadowCOlor:"rgb(0,0,0)",pivotShadowColor:"rgb(255,255,0)",strokeColor:"rgb(100,100,195)",paint(e,i){this.drawPivot(e,i),this.drawRod(e,i),this.drawWeight(e,i)},drawWeight(e,i){i.save(),i.beginPath(),i.arc(e.weightX,e.weightY,e.weightRadius,0,Math.PI*2,!1),i.clip(),i.shadowColor=this.weightShadowCOlor,i.shadowOffsetX=-4,i.shadowOffsetY=-4,i.shadowBlur=8,i.lineWidth=2,i.strokeStyle=this.strokeColor,i.stroke(),i.beginPath(),i.arc(e.weightX,e.weightY,e.weightRadius/2,0,Math.PI*2,!1),i.clip(),i.shadowColor=this.pivotShadowColor,i.shadowOffsetX=-4,i.shadowOffsetY=-4,i.shadowBlur=8,i.stroke(),i.restore()},drawPivot(e,i){i.save(),i.beginPath(),i.fillStyle=this.pivotFillStyle,i.arc(e.x+e.pivotRadius,e.y,e.pivotRadius,0,Math.PI*2,!1),i.fill(),i.stroke(),i.restore()},drawRod(e,i){i.beginPath(),i.moveTo(e.x+e.pivotRadius+e.pivotRadius*Math.sin(e.angle),e.y+e.pivotRadius*Math.cos(e.angle)),i.lineTo(e.weightX-e.weightRadius*Math.sin(e.angle),e.weightY-e.weightRadius*Math.cos(e.angle)),i.stroke()}},s=Math.PI/7;n.pendulum=new d({painter:l,behaviors:[r],initAngle:s,angle:s,x:150,y:30,weightX:0,weightY:0,weightRadius:25,rodLength:320,pivotRadius:7,lastTime:+new Date,elapseTime:0}),n.animatePendulum()},animatePendulum(){const n=this,t=n.$refs.c3,a=t.getContext("2d");a.fillStyle="#ffffff",a.fillRect(0,0,t.width,t.height),n.pendulum.update(a),n.pendulum.paint(a),window.requestAnimationFrame(n.animatePendulum)}}},b={class:"_article-content readingNotes-canvas-07"},T={class:"exp"},x={ref:"c1",width:"300",height:"400"},Y={class:"exp"},M={ref:"c2",width:"300",height:"400"},C={class:"exp"},R={ref:"c3",width:"300",height:"400"};function P(n,t,a,r,l,s){const e=v("MyArticle");return w(),m(e,{title:"Canvas学习笔记之七：物理效果",date:"2016年07月19日"},{default:u(()=>[o("div",b,[t[0]||(t[0]=o("h3",{class:"title"},"自由落体",-1)),t[1]||(t[1]=o("p",null,"重力是最弱的宇宙基本力。四种宇宙基本力：强核作用力、电磁力、弱核作用力以及重力。",-1)),t[2]||(t[2]=o("p",null,[f("在现实世界中，地球表面的物体在下坠时，其加速度都是9.81m/s/s，也可以表示为32ft/s/s。速度公式： "),o("strong",null,"v = gt")],-1)),o("div",T,[o("canvas",x,null,512)]),t[3]||(t[3]=o("pre",null,[o("code",null,`const move = {
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
}`)],-1)),t[4]||(t[4]=o("h3",{class:"title"},"抛物线运动",-1)),o("div",Y,[o("canvas",M,null,512)]),t[5]||(t[5]=o("pre",null,[o("code",null,`const move = {
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
}`)],-1)),t[6]||(t[6]=o("h3",{class:"title"},"钟摆运动",-1)),o("div",C,[o("canvas",R,null,512)]),t[7]||(t[7]=o("p",null,"定义精灵对象：",-1)),t[8]||(t[8]=o("pre",null,[o("code",null,`const initAngle = Math.PI / 7
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
})`)],-1)),t[9]||(t[9]=o("p",null,"绘制器对象：",-1)),t[10]||(t[10]=o("pre",null,[o("code",null,`const pendulumPainter = {
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
}`)],-1)),t[11]||(t[11]=o("p",null,"行为对象：",-1)),t[12]||(t[12]=o("pre",null,[o("code",null,`const move = {
    execute (sprite, context, time) {
        time = time || (+new Date())
        sprite.elapseTime += (time - sprite.lastTime) / 1000
        sprite.angle = sprite.initAngle * Math.cos(Math.sqrt(gravity / rodLength) * sprite.elapseTime)
        sprite.weightX = sprite.x + Math.sin(sprite.angle) * sprite.rodLength
        sprite.weightY = sprite.y + Math.cos(sprite.angle) * sprite.rodLength
        sprite.lastTime = time
    }
}`)],-1))])]),_:1})}const X=g(y,[["render",P]]);export{X as default};
