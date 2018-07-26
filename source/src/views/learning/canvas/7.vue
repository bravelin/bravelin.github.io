<style scoped>
    .exp{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    canvas{
        width: 300px;
        height: 400px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
    }
</style>
<template>
    <div class="page article">
        <h2 class="title">Canvas学习笔记之七：物理效果</h2>
        <div class="content">
            <h3 class="title">自由落体</h3>
            <p>重力是最弱的宇宙基本力。四种宇宙基本力：强核作用力、电磁力、弱核作用力以及重力。</p>
            <p>在现实世界中，地球表面的物体在下坠时，其加速度都是9.81m/s/s，也可以表示为32ft/s/s。速度公式：<strong>v = gt</strong></p>
            <div class="exp">
                <canvas ref="c1" width="300" height="400"></canvas>
            </div>
            <pre><code>const move = {
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
}</code></pre>
            <h3 class="title">抛物线运动</h3>
            <div class="exp">
                <canvas ref="c2" width="300" height="400"></canvas>
            </div>
            <pre><code>const move = {
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
}</code></pre>
            <h3 class="title">钟摆运动</h3>
            <div class="exp">
                <canvas ref="c3" width="300" height="400"></canvas>
            </div>
            <p>定义精灵对象：</p>
            <pre><code>const initAngle = Math.PI / 7
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
})</code></pre>
                <p>绘制器对象：</p>
                <pre><code>const pendulumPainter = {
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
}</code></pre>
            <p>行为对象：</p>
            <pre><code>const move = {
    execute (sprite, context, time) {
        time = time || (+new Date())
        sprite.elapseTime += (time - sprite.lastTime) / 1000
        sprite.angle = sprite.initAngle * Math.cos(Math.sqrt(gravity / rodLength) * sprite.elapseTime)
        sprite.weightX = sprite.x + Math.sin(sprite.angle) * sprite.rodLength
        sprite.weightY = sprite.y + Math.cos(sprite.angle) * sprite.rodLength
        sprite.lastTime = time
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
    export default {
        extends: Page,
        data () {
            return {
                ball: null,
                lobBalls: [],
                pendulum: null
            }
        },
        mounted () {
            const that = this
            that.$nextTick(() => {
                that.startGravityForce()
                that.startLob()
                that.startPendulum()
            })
        },
        methods: {
            startGravityForce () {
                const that = this
                const gravity = 9.81
                const metersRatio = 0.01
                const move = {
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
                }
                that.ball = new Sprite({
                    painter: painter,
                    behaviors: [move],
                    left: 150,
                    top: 20,
                    velocityX: 0,
                    velocityY: 0,
                    lastTime: (+new Date()),
                    elapseTime: 0,
                    radius: 10,
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
            },
            startLob () {
                const that = this
                const gravity = 9.81
                const metersRatio = 0.6
                const move = {
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
                }
                let balls = []
                for (let i = 0; i < 1; i++) { // 4个小球
                    balls.push(new Sprite({
                        painter: painter,
                        behaviors: [move],
                        left: parseInt(200 * Math.random()),
                        top: 400 - parseInt(20 * Math.random()),
                        velocityX: 4 + 10 * Math.random(),
                        velocityY: 0,
                        initVelocityY: 100 - 50 * Math.random(),
                        lastTime: (+new Date()),
                        elapseTime: 0,
                        radius: 12,
                        innerColor: 'rgba(100,145,230,1)',
                        middleColor: 'rgba(100,145,230,0.7)',
                        outerColor: 'rgba(100,145,230,0.5)',
                        strokeStyle: 'blue'
                    }))
                }
                that.lobBalls = balls
                that.animateLob()
            },
            animateLob (time) {
                const that = this
                const canvas = that.$refs.c2
                const ctx = canvas.getContext('2d')
                ctx.fillStyle = '#ffffff'
                ctx.fillRect(0, 0, canvas.width, canvas.height)
                that.lobBalls.forEach(ball => {
                    ball.update(ctx)
                })
                that.lobBalls.forEach(ball => {
                    ball.paint(ctx)
                })
                window.requestAnimationFrame(that.animateLob)
            },
            startPendulum () {
                const that = this
                const gravity = 32
                const rodLength = 0.8
                const move = {
                    execute (sprite, context, time) {
                        time = time || (+new Date())
                        sprite.elapseTime += (time - sprite.lastTime) / 1000
                        sprite.angle = sprite.initAngle * Math.cos(Math.sqrt(gravity / rodLength) * sprite.elapseTime)
                        sprite.weightX = sprite.x + Math.sin(sprite.angle) * sprite.rodLength
                        sprite.weightY = sprite.y + Math.cos(sprite.angle) * sprite.rodLength
                        sprite.lastTime = time
                    }
                }
                const pendulumPainter = {
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
                }
                const initAngle = Math.PI / 7
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
                })
                that.animatePendulum()
            },
            animatePendulum () {
                const that = this
                const canvas = that.$refs.c3
                const ctx = canvas.getContext('2d')
                ctx.fillStyle = '#ffffff'
                ctx.fillRect(0, 0, canvas.width, canvas.height)
                that.pendulum.update(ctx)
                that.pendulum.paint(ctx)
                window.requestAnimationFrame(that.animatePendulum)
            }
        }
    }
</script>
