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
        </div>
        <footer>2016年07月15日</footer>
        <Comments></Comments>
        <Catalog :catalog="catalog"></Catalog>
    </div>
</template>
<script>
    import Page from '@/views/Page'
    import Sprite from '@/libs/sprite'
    export default {
        extends: Page,
        data () {
            return {

            }
        },
        mounted () {
            const that = this
            that.$nextTick(() => {
                that.drawBallBySprite()
            })
        },
        methods: {
            drawBallBySprite () {
                const that = this
                const c1 = that.$refs.c1
                const ctx = c1.getContext('2d')
                const radius = 25
                let painterObj = {
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
                ball.paint(ctx)
            }
        }
    }
</script>
