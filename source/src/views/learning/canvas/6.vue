<style scoped>
    .exp{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    canvas{
        width: 300px;
        height: 200px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
    }
</style>
<template>
    <div class="page article">
        <h2 class="title">Canvas学习笔记之六：精灵</h2>
        <div class="content">
            <h3 class="title">概述</h3>
            <p>精灵对象可以接受调用者的命令，来执行某些特定的操作，例如下落、飞行、弹起等。</p>
            <p>painter属性是一个指向Painter对象的引用，该对象使用paint(sprite, context)方法来绘制精灵；behaviors属性指向一个对象数组，数组中的每个对象都会以execute(sprite,context,time)方法来对精灵进行某种形式的操作：</p>
            <pre><code>// canvas 精灵对象
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
export default Sprite</code></pre>
            <p>使用精灵绘制的小球：</p>
            <div class="exp">
                <canvas ref="c1" width="300" height="200"></canvas>
            </div>
            <p>定义一个painterObj即可：</p>
            <pre><code>const that = this
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
ball.paint(ctx)</code></pre>
                <h3 class="title">绘制器</h3>
                <p>Sprite对象与绘制其内容的绘制器之间是解耦的。如此可在程序运行时动态地设置绘制器，提高了灵活性。</p>
                <p><strong>精灵对象不需要自己完成绘制操作，而是将绘制操作代理给另外一个对象来做。</strong></p>
                <p>多个小球，复用painter：</p>
                <div class="exp">
                    <canvas ref="c2" width="300" height="200"></canvas>
                </div>
                <pre><code>const that = this
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
b2.paint(ctx)</code></pre>
                <h3 class="title">动画循环</h3>
                <p>大部分情况下，基于精灵的可以复用的动画循环模式如下：</p>
                <pre><code>var sprites = [new Sprite(), ...]
var context = ...
function animate (time) {
    var i = 0
    ...
    context.clearRect(0,0,context.canvas.width,context.canvas.height)
    drawBackground() // 绘制背景
    for(i = 0; i &lt; sprites.length; i++) { // 更新状态
        sprites[i].update(context, time)
    }
    for(i = 0; i &lt; sprites.length; i++) { // 绘制
        sprites[i].paint(context)
    }
    window.requestAnimationFrame(animate)
}</code></pre>
                <p>使用精灵模式实现的三个小球运动动画：</p>
                <div class="exp">
                    <canvas ref="c3" width="300" height="200"></canvas>
                </div>
                <p>定义绘制器对象和行为对象：</p>
                <pre><code>const that = this
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
}</code></pre>
                <p>添加三个精灵：</p>
                <pre><code>let arr = [] // 添加三个精灵
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
that.animate()</code></pre>
                <p>执行动画函数：</p>
                <pre><code>animate (time) {
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
}</code></pre>
        </div>
        <footer>2016年07月15日</footer>
        <Comments></Comments>
        <Catalog :catalog="catalog"></Catalog>
    </div>
</template>
<script>
    import Page from '@/views/Page'
    import Sprite from '@/libs/sprite'
    const radius = 25
    const painterObj = {
        paint (sprite, context) {
            context.save()
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
            context.restore()
        }
    }
    export default {
        extends: Page,
        data () {
            return {
                sprites: []
            }
        },
        mounted () {
            const that = this
            that.$nextTick(() => {
                that.drawBallBySprite()
                that.drawBalls()
                that.drawAniBalls()
            })
        },
        methods: {
            drawBallBySprite () {
                const that = this
                const c1 = that.$refs.c1
                const ctx = c1.getContext('2d')
                let ball = new Sprite({
                    painter: painterObj,
                    left: 100,
                    top: 100
                })
                ctx.fillStyle = '#ffffff'
                ctx.fillRect(0, 0, c1.width, c1.height)
                ball.paint(ctx)
            },
            drawBalls () {
                const that = this
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
                b2.paint(ctx)
            },
            drawAniBalls () {
                const that = this
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
                }
                let arr = [] // 添加三个精灵
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
                that.animate()
            },
            animate (time) {
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
            }
        }
    }
</script>
