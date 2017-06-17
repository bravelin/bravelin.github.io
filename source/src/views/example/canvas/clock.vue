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
            <audio src="http://14.215.93.19/m10.music.126.net/20170617182319/c3db8e0f31aac0e3305e9e535d57de62/ymusic/d40f/58d8/0bfc/4c77347a6a0232fede6ea0e022d10433.mp3?wshc_tag=0&wsts_tag=5944fd3b&wsid_tag=7923b496&wsiphost=ipdbm" autoplay="true">

            </audio>
            <h3 class="title">The Code</h3>
            <p>data定义：</p>
            <pre><code>data () {
    return {
        context: null,
        centerX: 0, // 中心点
        centerY: 0,
        ringInnerRadius: 150, // 内圆环半径
        ringOuterRadius: 170, // 外圆环半径
        hourTickLen: 10, // 大刻度长度
        minTickLen: 5 // 小刻度长度
    }
}</code></pre>
        <p>初始化部分：</p>
        <pre><code>init () {
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
}</code></pre>
        <p>绘制整个时钟的方法：</p>
        <pre><code>drawClock () {
    let that = this
    that.drawGrid() // 网格
    that.drawCentroid() // 中心点
    that.drawRing() // 圆环
    that.drawTicks() // 刻度
    that.drawPoints() // 指针及文本
}</code></pre>
        <p>随着时间重绘：</p>
        <pre><code>startTimer () {
    let that = this
    let requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
    requestAnimationFrame(function () {
        that.drawClock()
        that.startTimer()
    })
}</code></pre>
        <p>绘制底层网格：</p>
        <pre><code>drawGrid () {
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
}</code></pre>
        <p>绘制中心点：</p>
        <pre><code>drawCentroid () {
    let that = this
    let context = that.context
    context.save()
    context.beginPath()
    context.strokeStyle = 'rgba(0,0,0,0.3)'
    context.fillStyle = 'rgba(0,0,0,0.25)'
    context.arc(that.centerX, that.centerY, 10, 0, 2 * Math.PI, true)
    context.stroke()
    context.fill()
    context.restore()
}</code></pre>
        <p>绘制圆环：</p>
        <pre><code>drawRing () {
    let that = this
    let context = that.context
    context.save()
    context.beginPath()

    // 外侧的圆
    context.shadowColor = 'rgba(0,0,0,0.7)'
    context.shadowOffsetX = 4
    context.shadowOffsetY = 4
    context.shadowBlur = 8
    context.fillStyle = 'rgba(0,0,0,0.16)'
    context.strokeStyle = 'rgba(0,0,0,0.25)'
    context.arc(that.centerX, that.centerY, that.ringOuterRadius, 0, 2 * Math.PI, false)
    context.stroke()
    // 内侧的圆
    context.strokeStyle = 'rgba(0,0,0,0.2)'
    context.arc(that.centerX, that.centerY, that.ringInnerRadius, 0, 2 * Math.PI, true)
    context.fill()
    context.beginPath()
    context.arc(that.centerX, that.centerY, that.ringInnerRadius, 0, 2 * Math.PI, true)
    context.stroke()
    context.restore()
}</code></pre>
        <p>绘制刻度：</p>
        <pre><code>drawTicks () {
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
}</code></pre>
        <p>绘制指针以及时间文本：</p>
        <pre><code>drawPoints () {
    let that = this
    let context = that.context
    let pi = Math.PI
    let currDate = new Date()
    let hour = currDate.getHours()
    let min = currDate.getMinutes()
    let second = currDate.getSeconds()
    let hourPointLen = 55
    let hourEngle = -(pi / 2) + (2 * pi / 12) * (hour % 12)
    let minPointLen = 85
    let minEngle = -(pi / 2) + (2 * pi / 60) * min
    let secondPointLen = 115
    let secondEngle = -(pi / 2) + (2 * pi / 60) * second
    context.save()
    context.lineCap = 'round'
    context.strokeStyle = 'rgba(0,0,0,0.5)'
    // 小时的指针
    context.lineWidth = 4
    context.beginPath()
    context.moveTo(that.centerX, that.centerY)
    context.lineTo(that.centerX + hourPointLen * Math.cos(hourEngle), that.centerY + hourPointLen * Math.sin(hourEngle))
    context.stroke()

    // 分钟的指针
    context.lineWidth = 3
    context.beginPath()
    context.moveTo(that.centerX, that.centerY)
    context.lineTo(that.centerX + minPointLen * Math.cos(minEngle), that.centerY + minPointLen * Math.sin(minEngle))
    context.stroke()

    // 秒的指针
    context.lineWidth = 2
    context.beginPath()
    context.moveTo(that.centerX, that.centerY)
    context.lineTo(that.centerX + secondPointLen * Math.cos(secondEngle), that.centerY + secondPointLen * Math.sin(secondEngle))
    context.stroke()

    // 当前时间文本
    let timeStr = (hour < 10 ? '0' + hour : hour) + ' : ' + (min < 10 ? '0' + min : min) + ' : ' + (second < 10 ? '0' + second : second)
    context.font = '14px 微软雅黑 normal'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.strokeStyle = 'rgba(0,0,0,0.5)'
    context.lineWidth = 1
    context.strokeText(timeStr, that.centerX, that.centerY + 45)
    let month = currDate.getMonth() + 1
    let date = currDate.getDate()
    let day = currDate.getDay()
    let weekObj = ['日', '一', '二', '三', '四', '五', '六']
    timeStr = currDate.getFullYear() + ' / ' + (month < 10 ? '0' + month : month) + ' / ' + (date < 10 ? '0' + date : date) + ' 星期' + weekObj[day]
    context.strokeText(timeStr, that.centerX, that.centerY + 75)
    context.restore()
}</code></pre>
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
                centerX: 0, // 中心点
                centerY: 0,
                ringInnerRadius: 150, // 内圆环半径
                ringOuterRadius: 170, // 外圆环半径
                hourTickLen: 10, // 大刻度长度
                minTickLen: 5 // 小刻度长度
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
                    that.drawClock()
                    that.startTimer()
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
                that.drawTicks()
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
            /**
             * 绘制中心点
             */
            drawCentroid () {
                let that = this
                let context = that.context
                context.save()
                context.beginPath()
                context.strokeStyle = 'rgba(0,0,0,0.3)'
                context.fillStyle = 'rgba(0,0,0,0.25)'
                context.arc(that.centerX, that.centerY, 10, 0, 2 * Math.PI, true)
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
            drawTicks () {
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
                let hour = currDate.getHours()
                let min = currDate.getMinutes()
                let second = currDate.getSeconds()
                let hourPointLen = 55
                let hourEngle = -(pi / 2) + (2 * pi / 12) * (hour % 12)
                let minPointLen = 85
                let minEngle = -(pi / 2) + (2 * pi / 60) * min
                let secondPointLen = 115
                let secondEngle = -(pi / 2) + (2 * pi / 60) * second
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

                let timeStr = (hour < 10 ? '0' + hour : hour) + ' : ' + (min < 10 ? '0' + min : min) + ' : ' + (second < 10 ? '0' + second : second)
                context.font = '14px 微软雅黑 normal'
                context.textAlign = 'center'
                context.textBaseline = 'middle'
                context.strokeStyle = 'rgba(0,0,0,0.5)'
                context.lineWidth = 1
                context.strokeText(timeStr, that.centerX, that.centerY + 45)
                let month = currDate.getMonth() + 1
                let date = currDate.getDate()
                let day = currDate.getDay()
                let weekObj = ['日', '一', '二', '三', '四', '五', '六']
                timeStr = currDate.getFullYear() + ' / ' + (month < 10 ? '0' + month : month) + ' / ' + (date < 10 ? '0' + date : date) + ' 星期' + weekObj[day]
                context.strokeText(timeStr, that.centerX, that.centerY + 75)
                context.restore()
            }
        }
    }
</script>
