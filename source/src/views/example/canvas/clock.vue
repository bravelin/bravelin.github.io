<style scope>
    .exp{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    canvas{
        height: 400px;
        width: 400px;
        background: #fff;
        border-radius: 10px;
    }
</style>
<template>
    <div class="page article">
        <h2 class="title">Canvas绘制的时钟</h2>
        <div class="content">
            <div class="exp" ref="grid">
                <canvas ref="clock" width="400" height="400"></canvas>
            </div>
        </div>
        <footer>2017年06月17日</footer>
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
                centerX: 0,
                centerY: 0,
                centroid: {
                    radius: 10,
                    strokeStyle: 'rgba(0,0,0,0.3)',
                    fillStyle: 'rgba(0,0,0,0.25)'
                },
                ringInnerRadius: 150,
                ringOuterRadius: 170,
                hourTickLen: 10,
                minTickLen: 5
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
                that.drawClock()
                that.startCounter()
            },
            startCounter () {
                let that = this
                window.requestAnimationFrame(function () {
                    that.context.clearRect(0, 0, 400, 400)
                    that.drawClock()
                    that.startCounter()
                })
            },
            /**
             * 绘制时钟
             */
            drawClock () {
                let that = this
                that.drawGrid()
                that.drawCentroid()
                that.drawRing()
                that.drawTick()
                that.drawPoints()
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
                context.strokeStyle = 'rgba(0,0,0,0.03)'
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
            /**
             * 绘制中心点
             */
            drawCentroid () {
                let that = this
                let context = that.context
                context.save()
                context.beginPath()
                context.strokeStyle = that.centroid.strokeStyle
                context.fillStyle = that.centroid.fillStyle
                context.arc(that.centerX, that.centerY, that.centroid.radius, 0, 2 * Math.PI, true)
                context.stroke()
                context.fill()
                context.restore()
            },
            /**
             * 绘制圆环
             */
            drawRing () {
                let that = this
                let context = that.context
                context.save()
                context.beginPath()

                // 外侧的圆环
                context.shadowColor = 'rgba(0,0,0,0.7)'
                context.shadowOffsetX = 4
                context.shadowOffsetY = 4
                context.shadowBlur = 8
                context.fillStyle = 'rgba(0,0,0,0.16)'
                context.strokeStyle = 'rgba(0,0,0,0.25)'
                context.arc(that.centerX, that.centerY, that.ringOuterRadius, 0, 2 * Math.PI, false)
                context.stroke()
                context.strokeStyle = 'rgba(0,0,0,0.2)'
                context.arc(that.centerX, that.centerY, that.ringInnerRadius, 0, 2 * Math.PI, true)
                context.fill()
                context.beginPath()
                context.arc(that.centerX, that.centerY, that.ringInnerRadius, 0, 2 * Math.PI, true)
                context.stroke()
                context.restore()
            },
            /**
             * 绘制刻度
             */
            drawTick () {
                let that = this
                let context = that.context
                let hourTickRadius = that.ringInnerRadius - that.hourTickLen
                let minTickRadius = that.ringInnerRadius - that.minTickLen
                let pi = Math.PI
                let startEngle = -(pi / 2)
                let deltEngle = 2 * pi / (4 * 12)
                let startPointX = 0
                let startPointY = 0
                let endPointX = 0
                let endPointY = 0
                let currEngle = startEngle
                let currTickLen
                let num

                context.save()
                context.lineWidth = 1
                context.textAlign = 'center'
                context.textBaseline = 'middle'
                context.font = '12px 微软雅黑 normal'
                for (let i = 0; i < 48; i++) {
                    currTickLen = (i % 4 == 0 ? hourTickRadius : minTickRadius)
                    context.lineWidth = (i % 4 == 0 ? 2 : 1)
                    context.strokeStyle = 'rgba(0,0,0,0.2)'
                    startPointX = that.centerX + Math.cos(currEngle) * currTickLen
                    startPointY = that.centerY + Math.sin(currEngle) * currTickLen
                    endPointX = that.centerX + Math.cos(currEngle) * that.ringInnerRadius
                    endPointY = that.centerY + Math.sin(currEngle) * that.ringInnerRadius
                    context.beginPath()
                    context.moveTo(startPointX, startPointY)
                    context.lineTo(endPointX, endPointY)
                    context.stroke()
                    if (i % 4 == 0) { // 绘制数字
                        num = i / 4
                        num = (num == 0 ? 12 : num)
                        context.strokeStyle = 'rgba(0,0,0,0.5)'
                        context.strokeText(num, that.centerX + Math.cos(currEngle) * (currTickLen - 10), that.centerY + Math.sin(currEngle) * (currTickLen - 10))
                    }
                    currEngle += deltEngle
                }
                context.restore()
            },
            /**
             * 绘制指针
             */
            drawPoints () {
                let that = this
                let context = that.context
                let pi = Math.PI
                let currDate = new Date()
                let hourPointLen = 55
                let hourEngle = -(pi / 2) + (2 * pi / 12) * (currDate.getHours() % 12)
                let minPointLen = 85
                let minEngle = -(pi / 2) + (2 * pi / 60) * currDate.getMinutes()
                let secondPointLen = 115
                let secondEngle = -(pi / 2) + (2 * pi / 60) * currDate.getSeconds()
                context.save()
                context.lineCap = 'round'
                context.strokeStyle = 'rgba(0,0,0,0.5)'
                context.lineWidth = 4
                context.beginPath()
                context.moveTo(that.centerX, that.centerY)
                context.lineTo(that.centerX + hourPointLen * Math.cos(hourEngle), that.centerY + hourPointLen * Math.sin(hourEngle))
                context.stroke()

                context.lineWidth = 3
                context.beginPath()
                context.moveTo(that.centerX, that.centerY)
                context.lineTo(that.centerX + minPointLen * Math.cos(minEngle), that.centerY + minPointLen * Math.sin(minEngle))
                context.stroke()

                context.lineWidth = 2
                context.beginPath()
                context.moveTo(that.centerX, that.centerY)
                context.lineTo(that.centerX + secondPointLen * Math.cos(secondEngle), that.centerY + secondPointLen * Math.sin(secondEngle))
                context.stroke()

                context.restore()
            }
        }
    }
</script>
