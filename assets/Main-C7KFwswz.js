import{_ as d,q as h,s as f,h as c,o as u,e}from"./index-Gk4_0vGT.js";class a{constructor(t){this.name=t.name||"sprite",this.painter=t.painter,this.top=t.top||0,this.left=t.left||0,this.width=t.width||0,this.height=t.height||0,this.velocityX=t.velocityX||0,this.velocityY=t.velocityY||0,this.visible=t.visible||!0,this.animating=t.animating||!1,this.behaviors=t.behaviors||[],Object.keys(t).forEach(i=>{this[i]==null&&(this[i]=t[i])})}paint(t){this.painter&&this.visible&&this.painter.paint(this,t)}update(t,i){this.behaviors.forEach(r=>{r.execute(this,t,i)})}}const v=25,p={paint(o,t){t.save(),t.beginPath(),t.arc(o.left+o.width/2,o.top+o.height/2,v,0,Math.PI*2,!1),t.clip(),t.shadowColor="rgb(0,0,0)",t.shadowOffsetX=-4,t.shadowOffsetY=-4,t.shadowBlur=8,t.lineWidth=2,t.strokeStyle="rgb(100, 100, 195)",t.fillStyle="rgba(30, 144, 255, 0.15)",t.stroke(),t.fill(),t.restore()}},y={data(){return{sprites:[]}},mounted(){const o=this;o.$nextTick(()=>{o.drawBallBySprite(),o.drawBalls(),o.drawAniBalls()})},methods:{drawBallBySprite(){const t=this.$refs.c1,i=t.getContext("2d"),r=new a({painter:p,left:100,top:100});i.fillStyle="#ffffff",i.fillRect(0,0,t.width,t.height),r.paint(i)},drawBalls(){const t=this.$refs.c2,i=t.getContext("2d"),r=new a({painter:p,left:60,top:60}),n=new a({painter:p,left:160,top:160});i.fillStyle="#ffffff",i.fillRect(0,0,t.width,t.height),r.paint(i),n.paint(i)},drawAniBalls(){const o=this,t={paint(n,l){const s=l.createRadialGradient(n.left,n.top,0,n.left,n.top,n.radius);s.addColorStop(.3,n.innerColor),s.addColorStop(.5,n.middleColor),s.addColorStop(1,n.outerColor),l.save(),l.fillStyle=s,l.strokeStyle=n.strokeStyle,l.beginPath(),l.arc(n.left,n.top,n.radius,0,Math.PI*2,!1),l.fill(),l.stroke(),l.restore()}},i={execute(n,l,s){(n.left+n.velocityX+n.radius>l.canvas.width||n.left+n.velocityX-n.radius<0)&&(n.velocityX=-n.velocityX),(n.top+n.velocityY+n.radius>l.canvas.height||n.top+n.velocityY-n.radius<0)&&(n.velocityY=-n.velocityY),n.left+=n.velocityX,n.top+=n.velocityY}},r=[];r.push(new a({painter:t,behaviors:[i],left:50,top:20,velocityX:-3.2,velocityY:3.5,radius:16,innerColor:"rgba(255,255,0,1)",middleColor:"rgba(255,255,0,0.7)",outerColor:"rgba(255,255,0,0.5)",strokeStyle:"gray"})),r.push(new a({painter:t,behaviors:[i],left:50,top:150,velocityX:2.2,velocityY:2.5,radius:22,innerColor:"rgba(100,145,230,1)",middleColor:"rgba(100,145,230,0.7)",outerColor:"rgba(100,145,230,0.5)",strokeStyle:"blue"})),r.push(new a({painter:t,behaviors:[i],left:150,top:75,velocityX:1.2,velocityY:1.5,radius:18,innerColor:"rgba(255,0,0,1)",middleColor:"rgba(255,0,0,0.7)",outerColor:"rgba(255,0,0,0.5)",strokeStyle:"orange"})),o.sprites=r,o.animate()},animate(o){const t=this,i=t.$refs.c3,r=i.getContext("2d");r.fillStyle="#ffffff",r.fillRect(0,0,i.width,i.height),t.sprites.forEach(n=>{n.update(r)}),t.sprites.forEach(n=>{n.paint(r)}),window.requestAnimationFrame(t.animate)}}},g={class:"_article-content readingNotes-canvas-06"},b={class:"exp"},w={ref:"c1",width:"300",height:"200"},x={class:"exp"},m={ref:"c2",width:"300",height:"200"},C={class:"exp"},S={ref:"c3",width:"300",height:"200"};function k(o,t,i,r,n,l){const s=c("MyArticle");return u(),h(s,{title:"Canvas学习笔记之六：精灵",date:"2016年07月15日"},{default:f(()=>[e("div",g,[t[0]||(t[0]=e("h3",{class:"title"},"概述",-1)),t[1]||(t[1]=e("p",null,"精灵对象可以接受调用者的命令，来执行某些特定的操作，例如下落、飞行、弹起等。",-1)),t[2]||(t[2]=e("p",null,"painter属性是一个指向Painter对象的引用，该对象使用paint(sprite, context)方法来绘制精灵；behaviors属性指向一个对象数组，数组中的每个对象都会以execute(sprite,context,time)方法来对精灵进行某种形式的操作：",-1)),t[3]||(t[3]=e("pre",null,[e("code",null,`// canvas 精灵对象
class Sprite {
    constructor (options) {
        this.name = options.name || 'sprite'
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
        Object.keys(options).forEach(key => {
            if (this[key] == undefined) {
                this[key] = options[key]
            }
        })
    }
    paint (context) {
        if (this.painter && this.visible) {
            this.painter.paint(this, context)
        }
    }
    update (context, time) {
        this.behaviors.forEach(behavior => {
            behavior.execute(this, context, time)
        })
    }
}
export default Sprite`)],-1)),t[4]||(t[4]=e("p",null,"使用精灵绘制的小球：",-1)),e("div",b,[e("canvas",w,null,512)]),t[5]||(t[5]=e("p",null,"定义一个painterObj即可：",-1)),t[6]||(t[6]=e("pre",null,[e("code",null,`const that = this
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
ball.paint(ctx)`)],-1)),t[7]||(t[7]=e("h3",{class:"title"},"绘制器",-1)),t[8]||(t[8]=e("p",null,"Sprite对象与绘制其内容的绘制器之间是解耦的。如此可在程序运行时动态地设置绘制器，提高了灵活性。",-1)),t[9]||(t[9]=e("p",null,[e("strong",null,"精灵对象不需要自己完成绘制操作，而是将绘制操作代理给另外一个对象来做。")],-1)),t[10]||(t[10]=e("p",null,"多个小球，复用painter：",-1)),e("div",x,[e("canvas",m,null,512)]),t[11]||(t[11]=e("pre",null,[e("code",null,`const that = this
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
b2.paint(ctx)`)],-1)),t[12]||(t[12]=e("h3",{class:"title"},"动画循环",-1)),t[13]||(t[13]=e("p",null,"大部分情况下，基于精灵的可以复用的动画循环模式如下：",-1)),t[14]||(t[14]=e("pre",null,[e("code",null,`var sprites = [new Sprite(), ...]
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
}`)],-1)),t[15]||(t[15]=e("p",null,"使用精灵模式实现的三个小球运动动画：",-1)),e("div",C,[e("canvas",S,null,512)]),t[16]||(t[16]=e("p",null,"定义绘制器对象和行为对象：",-1)),t[17]||(t[17]=e("pre",null,[e("code",null,`const that = this
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
        if (sprite.left + sprite.velocityX + sprite.radius > context.canvas.width || sprite.left + sprite.velocityX - sprite.radius < 0) {
            sprite.velocityX = -sprite.velocityX
        }
        if (sprite.top + sprite.velocityY + sprite.radius > context.canvas.height || sprite.top + sprite.velocityY - sprite.radius < 0) {
            sprite.velocityY = -sprite.velocityY
        }
        sprite.left += sprite.velocityX
        sprite.top += sprite.velocityY
    }
}`)],-1)),t[18]||(t[18]=e("p",null,"添加三个精灵：",-1)),t[19]||(t[19]=e("pre",null,[e("code",null,`let arr = [] // 添加三个精灵
arr.push(new Sprite({
    painter: painter,
    behaviors: [move],
    left: 50,
    top: 20,
    velocityX: -3.2,
    velocityY: 3.5,
    radius: 16,
    innerColor: 'rgba(255,255,0,1)',
    middleColor: 'rgba(255,255,0,0.7)',
    outerColor: 'rgba(255,255,0,0.5)',
    strokeStyle: 'gray'
}))
arr.push(new Sprite({
    painter: painter,
    behaviors: [move],
    left: 50,
    top: 150,
    velocityX: 2.2,
    velocityY: 2.5,
    radius: 22,
    innerColor: 'rgba(100,145,230,1)',
    middleColor: 'rgba(100,145,230,0.7)',
    outerColor: 'rgba(100,145,230,0.5)',
    strokeStyle: 'blue'
}))
arr.push(new Sprite({
    painter: painter,
    behaviors: [move],
    left: 150,
    top: 75,
    velocityX: 1.2,
    velocityY: 1.5,
    radius: 18,
    innerColor: 'rgba(255,0,0,1)',
    middleColor: 'rgba(255,0,0,0.7)',
    outerColor: 'rgba(255,0,0,0.5)',
    strokeStyle: 'orange'
}))
that.sprites = arr
that.animate()`)],-1)),t[20]||(t[20]=e("p",null,"执行动画函数：",-1)),t[21]||(t[21]=e("pre",null,[e("code",null,`animate (time) {
    const that = this
    const canvas = that.$refs.c3
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    that.sprites.forEach(sprite => {
        sprite.update(ctx)
    })
    that.sprites.forEach(sprite => {
        sprite.paint(ctx)
    })
    window.requestAnimationFrame(that.animate)
}`)],-1))])]),_:1})}const Y=d(y,[["render",k]]);export{Y as default};
