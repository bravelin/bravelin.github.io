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
        <h2 class="title">Canvas学习笔记之七：物理效果</h2>
        <div class="content">
            <h3 class="title">重力</h3>
            <p>重力是最弱的宇宙基本力。四种宇宙基本力：强核作用力、电磁力、弱核作用力以及重力。</p>
            <p>在现实世界中，地球表面的物体在下坠时，其加速度都是9.81m/s2，也可以表示为32ft/s2。速度公式：<strong>v = gt</strong></p>
            <div class="exp">
                <canvas ref="c1" width="300" height="400" style="height:400px"></canvas>
            </div>
            <pre><code>const move = {
    execute (sprite, context, time) {
        if (sprite.top + sprite.velocityY + sprite.radius > context.canvas.height) {
            sprite.velocityY = 0
            sprite.top = 0
            sprite.lastTime = (+new Date())
        }
        time = time || (+new Date())
        let deltTime = (time - sprite.lastTime) / 1000
        sprite.velocityY += deltTime * gravity // gravity是重力加速度
        sprite.top += sprite.velocityY * deltTime
    }
}</code></pre>
        </div>
        <footer>2016年07月19日</footer>
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
                ball: null
            }
        },
        mounted () {
            const that = this
            that.$nextTick(() => {
                that.startGravityForce()
            })
        },
        methods: {
            startGravityForce () {
                const that = this
                const gravity = 0.018
                const painter = {
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
                const move = {
                    execute (sprite, context, time) {
                        if (sprite.top + sprite.velocityY + sprite.radius > context.canvas.height) {
                            sprite.velocityY = 0
                            sprite.top = 0
                            sprite.lastTime = (+new Date())
                        }
                        time = time || (+new Date())
                        let deltTime = (time - sprite.lastTime) / 1000
                        sprite.velocityY += deltTime * gravity
                        sprite.top += sprite.velocityY * deltTime
                    }
                }
                that.ball = new Sprite({
                    painter: painter,
                    behaviors: [move],
                    left: 150,
                    top: 20,
                    velocityX: 0,
                    velocityY: 0,
                    lastTime: (+new Date()),
                    radius: 16,
                    innerColor: 'rgba(100,145,230,1)',
                    middleColor: 'rgba(100,145,230,0.7)',
                    outerColor: 'rgba(100,145,230,0.5)',
                    strokeStyle: 'blue'
                })
                that.animateGravityForce()
            },
            animateGravityForce (time) {
                const that = this
                const canvas = that.$refs.c1
                const ctx = canvas.getContext('2d')
                ctx.fillStyle = '#ffffff'
                ctx.fillRect(0, 0, canvas.width, canvas.height)
                that.ball.update(ctx)
                that.ball.paint(ctx)
                window.requestAnimationFrame(that.animateGravityForce)
            }
        }
    }
</script>
