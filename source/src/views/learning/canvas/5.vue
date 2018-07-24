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
        <h2 class="title">Canvas学习笔记之五：动画</h2>
        <div class="content">
            <h3 class="title">动画循环</h3>
            <p>实现动画循环的首选方式，是使用<strong>requestAnimationFrame()</strong>方法，而不是使用setInterval和setTimeout方法。</p>
            <p>不需要指定帧速率，浏览器会自行决定最佳的帧速率。cancelRequestAnimationFrame()可以取消回调函数。</p>
            <p>使用requestAnimationFrame的polyfill代码：</p>
            <pre><code>window.requestAnimationFrame = (function () {
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
})()</code></pre>
            <p><em>3个小球的匀速运动：</em></p>
            <div class="exp">
                <canvas ref="c1" width="300" height="400" style="height:400px"></canvas>
            </div>
            <p>定义数据结构：</p>
            <pre><code>discs: [
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
]</code></pre>
            <p>绘制的方法：</p>
            <pre><code>draw () {
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
    }</code></pre>
                <p>更新位置的方法：</p>
                <pre><code>update () {
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
}</code></pre>
            <p>动画方法：</p>
            <pre><code>animate () {
    const that = this
    that.update()
    that.draw()
    window.requestAnimationFrame(that.animate)
}</code></pre>
                <h3 class="title">帧速率的计算</h3>
                <p>可以根据当前帧距离上一帧的时间，计算出动画每秒钟播放的帧数（frame per second，fps）。</p>
                <pre><code>var lastTime = 0
function calculateFps () {
    var now = (+new Date())
    var fps = 1000 / (now - lastTime)
    lastTime = now
    return fps
}</code></pre>
                <h3 class="title">动画的一些原则</h3>
                <p><strong>将业务逻辑的更新与动画的绘制分开；</strong></p>
                <p><strong>使用“基于时间的运动”来协调动画的播放速度；</strong></p>
                <p><strong>使用剪辑区域或图块复制技术将复杂的背景恢复到屏幕之上；</strong></p>
                <p><strong>必要时可使用一个或者多个离屏缓冲区以提升绘制速度；</strong></p>
        </div>
        <footer>2016年07月10日</footer>
        <Comments></Comments>
        <Catalog :catalog="catalog"></Catalog>
    </div>
</template>
<script>
    import Page from '@/views/Page'
    export default {
        extends: Page,
        data () {
            return {
                lastTime: 0,
                discs: [
                    {
                        x: 150,
                        y: 80,
                        lastX: 150,
                        lastY: 80,
                        velocityX: -32,
                        velocityY: 35,
                        radius: 20,
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
                        velocityX: 22,
                        velocityY: 25,
                        radius: 20,
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
                        velocityX: 12,
                        velocityY: 15,
                        radius: 20,
                        innerColor: 'rgba(255,0,0,1)',
                        middleColor: 'rgba(255,0,0,0.7)',
                        outerColor: 'rgba(255,0,0,0.5)',
                        strokeStyle: 'orange'
                    }
                ],
                ctx: null
            }
        },
        mounted () {
            let that = this
            that.$nextTick(() => {
                that.startAnimation()
            })
        },
        methods: {
            init () {
                window.requestAnimationFrame = (function () {
                    return window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        function (callback, element) {
                            var self = this
                            var start
                            var finish
                            window.setTimeout(function () {
                                start = +new Date()
                                callback(start)
                                finish = +new Date()
                                self.timeout = 1000 / 60 - (finish - start)
                            }, self.timeout)
                        }
                })()
            },
            startAnimation () {
                const that = this
                that.ctx = that.$refs.c1.getContext('2d')
                that.animate()
            },
            animate () {
                const that = this
                that.update()
                that.draw()
                window.requestAnimationFrame(that.animate)
            },
            draw () {
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
            },
            update () {
                const that = this
                let deltX = 0
                let deltY = 0
                let time = (+new Date())
                let elapsedTime = that.lastTime ? (time - that.lastTime) : 0
                that.discs.forEach(disc => {
                    deltX = disc.velocityX * (elapsedTime / 1000)
                    deltY = disc.velocityY * (elapsedTime / 1000)
                    if (disc.x + deltX + disc.radius > that.ctx.canvas.width || disc.x + deltX - disc.radius < 0) {
                        disc.velocityX = -disc.velocityX
                    }
                    if (disc.y + deltY + disc.radius > that.ctx.canvas.height || disc.y + deltY - disc.radius < 0) {
                        disc.velocityY = -disc.velocityY
                    }
                    disc.x += deltX
                    disc.y += deltY

                    // if (disc.x + disc.velocityX + disc.radius > that.ctx.canvas.width || disc.x + disc.velocityX - disc.radius < 0) {
                    //     disc.velocityX = -disc.velocityX
                    // }
                    // if (disc.y + disc.velocityY + disc.radius > that.ctx.canvas.height || disc.y + disc.velocityY - disc.radius < 0) {
                    //     disc.velocityY = -disc.velocityY
                    // }
                    // disc.x += disc.velocityX
                    // disc.y += disc.velocityY
                })
                that.lastTime = time
            }
        }
    }
</script>
