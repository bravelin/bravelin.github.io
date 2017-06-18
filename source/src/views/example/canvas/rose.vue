<style scoped>
    .exp{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.exp>canvas.clock{
        height: 400px;
        width: 400px;
        background: #fff;
        border-radius: 10px;
    }
</style>
<template>
    <div class="page article">
        <h2 class="title">Canvas绘制的玫瑰曲线</h2>
        <div class="content">
            <div class="exp" ref="grid">
                <canvas ref="clock" width="400" height="400" class="clock"></canvas>
            </div>
            <h3 class="title">The Code</h3>
            <p>data定义：</p>
        </div>
        <footer>2017年06月18日</footer>
        <comments></comments>
    </div>
</template>
<script>
    import Page from '../../page'
    module.exports = {
        extends: Page,
        data () {
            return {
                context: null,
                centerX: 0, // 中心点
                centerY: 0
            }
        },
        mounted () {
            let that = this
            that.$nextTick(() => {
                that.init() // 绘制
            })
        },
        methods: {
            /**
            *启动绘制
            **/
            init () {
                let that = this
                let refs = that.$refs
                let el = refs.clock
                let box = refs.grid
                let rect = box.getBoundingClientRect()
                let w = (rect.right - rect.left) * 0.95
                if (w < 400) {
                    el.style.width = w + 'px'
                    el.style.height = w + 'px'
                }
                let canvasWidth = el.getAttribute('width')
                let canvasHeight = el.getAttribute('height')
                that.centerX = canvasWidth / 2
                that.centerY = canvasHeight / 2
                that.context = el.getContext('2d')
                that.startTimer()
            },
            /**
            * 随着时间走
            */
            startTimer () {
                let that = this
                let requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                requestAnimationFrame(function () {
                    that.drawRose()
                    that.startTimer()
                })
            },
            /**
             * 绘制
             */
            drawRose () {
                let that = this
                that.drawGrid()
                that.drawRoseLine(1, 5, 29, 11)
            },
            /**
             * 绘制网格
             */
            drawGrid () {
                let that = this
                let context = that.context
                let el = context.canvas
                let w = el.width
                let h = el.height
                let stepX = 10
                let stepY = 10

                context.clearRect(0, 0, w, h)
                context.save()
                context.beginPath()
                context.strokeStyle = 'rgba(0,0,0,0.05)'
                context.lineWidth = 0.5
                for (let i = stepX + 0.5; i < w; i += stepX) {
                    context.beginPath()
                    context.moveTo(i, 0)
                    context.lineTo(i, h)
                    context.stroke()
                }

                for (let j = stepY + 0.5; j < h; j += stepY) {
                    context.beginPath()
                    context.moveTo(0, j)
                    context.lineTo(w, j)
                    context.stroke()
                }
                context.restore()
            },
            drawRoseLine (a, b, m, n) {
                let that = this
                let context = that.context
                let e = 0
                let c = 150
                let k = 2 * Math.PI / 360
                let r = 0
                let x = 0
                let y = 0
                context.save()
                context.translate(that.centerX, that.centerY)
                context.strokeStyle = 'rgba(255,0,0,0.6)'
                context.fillStyle = 'rgba(255,0,0,0.1)'
                context.beginPath()
                while (e <= 4320) {
                    r = a / b + Math.sin(m * e / n * k)
                    r = r * c
                    x = r * Math.cos(e * k)
                    y = r * Math.sin(e * k)
                    e += 0.1
                    context.lineTo(x, y)
                }
                context.stroke()
                context.fill()
                context.restore()
            }
        }
    }
</script>
