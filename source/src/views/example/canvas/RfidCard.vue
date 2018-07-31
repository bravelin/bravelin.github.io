<style scoped>
    .exp{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.exp>canvas.card{
        width: 1125px;
        height: 722px;
        background: #fff;
    }
    @media screen and (max-width: 740px) {
        div.exp>canvas.card{
            width: 494px;
            height: 318px;
        }
    }
    @media screen and (max-width: 580px) {
        div.exp>canvas.card{
            width: 370px;
            height: 238px;
        }
    }
    @media screen and (max-width: 420px) {
        div.exp>canvas.card{
            width: 309px;
            height: 199px;
        }
    }
</style>
<template>
    <div class="page article">
        <h2 class="title">CAMeleon Card</h2>
        <div class="content">
            <div class="exp">
                <canvas ref="card" width="1125" height="722" class="card"></canvas>
            </div>
            <p>鼠标右键，可另存为图片。</p>
            <p>chroma-js的使用：</p>
            <pre><code>import chroma from 'chroma-js'</code></pre>
            <pre><code>chroma('#D40880').brighter().alpha(0.4).css() // rgba(255,86,175,0.4)
chroma('#D40880').darken().css() // rgb(157,0,84)</code></pre>
        </div>
        <footer>2018年07月27日</footer>
        <Comments></Comments>
    </div>
</template>
<script>
    import Page from '@/views/Page'
    import chroma from 'chroma-js'
    export default {
        extends: Page,
        data () {
            return {
                context: null,
                allWidth: 1125,
                allHeight: 722,
                gap: 10, // 边距
                cardWidth: 0,
                cardHeight: 0,
                centerX: 0, // 中心点
                centerY: 0
            }
        },
        mounted () {
            let that = this
            that.centerX = that.allWidth / 2
            that.centerY = that.allHeight / 2
            that.cardWidth = that.allWidth - 2 * that.gap
            that.cardHeight = that.allHeight - 2 * that.gap
            that.$nextTick(() => {
                that.init() // 绘制
            })
        },
        methods: {
            init () {
                const that = this
                const el = that.$refs.card
                that.context = el.getContext('2d')
                that.drawBackground()
                // that.drawTitleText()
                that.drawLogoText()
                that.drawLinesBackground()
                that.drawLeftLines()
                that.drawRightLines()
                that.drawLogo()
                // console.log(chroma('#D40880').darken().css())
                // console.log(chroma('#D40880'), chroma('#D40880').brighter().alpha(0.4).css())
            },
            drawLogo () {
                const that = this
                const context = that.context
                const baseColor = '#61ff42'
                context.shadowOffsetX = 3
                context.shadowOffsetY = 3
                context.shadowColor = chroma(baseColor).alpha(0.4).css()
                context.shadowBlur = 10
                const img = new Image()
                let scale = 0.72
                let w = 512 * scale
                let h = 396 * scale
                img.onload = function () {
                    context.drawImage(img, (that.allWidth - w) / 2, 160, w, h)
                }
                img.src = './static/img/card.png'
            },
            drawRightLines () {
                const that = this
                const context = that.context
                context.save()
                const baseColor = '#61ff42'
                context.lineWidth = 2
                context.lineCap = 'round'
                context.lineJoin = 'round'
                context.shadowOffsetX = 1
                context.shadowOffsetY = 1
                context.shadowColor = chroma(baseColor).alpha(0.9).css()
                context.shadowBlur = 4
                context.fillStyle = context.strokeStyle = chroma(baseColor).darken(1).css()
                // 1
                const right = that.allWidth - that.gap
                context.beginPath()
                context.moveTo(right, that.gap + 150)
                context.lineTo(right - 160, that.gap + 150)
                context.lineTo(right - 160 - 26, that.gap + 150 + 24)
                context.lineTo(right - 160 - 26 - 80, that.gap + 150 + 24)
                context.stroke()
                context.beginPath()
                context.arc(right - 160 - 26 - 80 - 4, that.gap + 150 + 24, 4, 0, 2 * Math.PI, false)
                context.stroke()
                // 2
                context.beginPath()
                context.moveTo(right, that.gap + 172)
                context.lineTo(right - 149, that.gap + 172)
                context.lineTo(right - 149 - 26, that.gap + 172 + 24)
                context.lineTo(right - 149 - 26 - 189, that.gap + 172 + 24)
                context.stroke()
                context.beginPath()
                context.arc(right - 149 - 26 - 189 - 5, that.gap + 172 + 24, 3, 0, 2 * Math.PI, false)
                context.stroke()
                // 3
                context.beginPath()
                context.moveTo(right, that.gap + 230)
                context.lineTo(right - 400, that.gap + 230)
                context.stroke()
                // 4
                context.beginPath()
                context.moveTo(right, that.gap + 290)
                context.lineTo(right - 140, that.gap + 290)
                context.lineTo(right - 140 - 26, that.gap + 290 - 24)
                context.lineTo(right - 140 - 26 - 300, that.gap + 290 - 24)
                context.stroke()
                // 5
                context.beginPath()
                context.moveTo(right, that.gap + 330)
                context.lineTo(right - 149, that.gap + 330)
                context.lineTo(right - 149 - 26, that.gap + 330 - 24)
                context.lineTo(right - 149 - 26 - 123, that.gap + 330 - 24)
                context.stroke()
                context.beginPath()
                context.arc(right - 149 - 26 - 123 - 4, that.gap + 330 - 24, 3, 0, 2 * Math.PI, false)
                context.stroke()
                // 1====
                context.shadowColor = undefined
                context.shadowBlur = 0
                context.shadowOffsetX = 0
                context.shadowOffsetY = 0
                context.lineWidth = 2
                context.strokeStyle = chroma(baseColor).darken(3.2).css()
                context.beginPath()
                context.moveTo(right, that.gap + 135)
                context.lineTo(right - 164, that.gap + 135)
                context.lineTo(right - 164 - 26, that.gap + 159)
                context.lineTo(right - 164 - 26 - 70, that.gap + 159)
                context.stroke()
                // 2
                context.beginPath()
                context.moveTo(right, that.gap + 189)
                context.lineTo(right - 135, that.gap + 189)
                context.lineTo(right - 135 - 26, that.gap + 189 + 24)
                context.lineTo(right - 135 - 26 - 240, that.gap + 189 + 24)
                context.stroke()
                // 3
                context.beginPath()
                context.moveTo(right, that.gap + 205)
                context.lineTo(right - 129, that.gap + 205)
                context.stroke()
                // 4
                context.beginPath()
                context.moveTo(right, that.gap + 269)
                context.lineTo(right - 140, that.gap + 269)
                context.lineTo(right - 140 - 26, that.gap + 269 - 24)
                context.lineTo(right - 140 - 26 - 220, that.gap + 269 - 24)
                context.stroke()
                // 5
                context.beginPath()
                context.moveTo(right, that.gap + 249)
                context.lineTo(right - 143, that.gap + 249)
                context.stroke()
                // 6
                context.beginPath()
                context.moveTo(right, that.gap + 318)
                context.lineTo(right - 400, that.gap + 318)
                context.stroke()
                context.restore()
            },
            drawLeftLines () {
                const that = this
                const context = that.context
                context.save()
                const baseColor = '#61ff42'
                // 1
                context.lineWidth = 2
                context.lineCap = 'round'
                context.lineJoin = 'round'
                context.shadowOffsetX = 1
                context.shadowOffsetY = 1
                context.shadowColor = chroma(baseColor).alpha(0.9).css()
                context.shadowBlur = 4
                context.fillStyle = context.strokeStyle = chroma(baseColor).darken(1).css()
                context.beginPath()
                context.moveTo(that.gap, that.gap + 150)
                context.lineTo(that.gap + 110, that.gap + 150)
                context.lineTo(that.gap + 110 + 24, that.gap + 150 + 26)
                context.lineTo(that.gap + 110 + 24 + 157, that.gap + 150 + 26)
                context.stroke()
                // 2
                context.beginPath()
                context.moveTo(that.gap, that.gap + 170)
                context.lineTo(that.gap + 98, that.gap + 170)
                context.lineTo(that.gap + 98 + 24, that.gap + 170 + 26)
                context.lineTo(that.gap + 98 + 24 + 215, that.gap + 170 + 26)
                context.stroke()
                context.beginPath()
                context.lineWidth = 2
                context.arc(that.gap + 98 + 24 + 215 + 6, that.gap + 170 + 26, 5, 0, 2 * Math.PI, false)
                context.stroke()
                // 3
                context.lineWidth = 2
                context.beginPath()
                context.moveTo(that.gap, that.gap + 270)
                context.lineTo(that.gap + 186, that.gap + 270)
                context.stroke()
                context.beginPath()
                context.lineWidth = 1
                context.arc(that.gap + 186 + 4, that.gap + 270, 4, 0, 2 * Math.PI, false)
                context.fill()
                // 4
                context.lineWidth = 2
                context.beginPath()
                context.moveTo(that.gap, that.gap + 314)
                context.lineTo(that.gap + 120, that.gap + 314)
                context.lineTo(that.gap + 120 + 24, that.gap + 290)
                context.lineTo(that.gap + 133 + 220, that.gap + 290)
                context.stroke()
                context.beginPath()
                context.lineWidth = 2
                context.arc(that.gap + 133 + 220 + 5, that.gap + 290, 4, 0, 2 * Math.PI, false)
                context.stroke()
                // 5
                context.beginPath()
                context.lineWidth = 2
                context.moveTo(that.gap, that.gap + 355)
                context.lineTo(that.gap + 40 + 88, that.gap + 355)
                context.lineTo(that.gap + 40 + 88 + 26, that.gap + 329)
                context.lineTo(that.gap + 40 + 88 + 380, that.gap + 329)
                context.stroke()
                context.beginPath()
                context.lineWidth = 2
                context.arc(that.gap + 430, that.gap + 329 - 6, 5, 0, 2 * Math.PI, false)
                context.stroke()

                // 1====
                context.shadowColor = undefined
                context.shadowBlur = 0
                context.shadowOffsetX = 0
                context.shadowOffsetY = 0
                context.lineWidth = 2
                context.strokeStyle = chroma(baseColor).darken(3.2).css()
                context.beginPath()
                context.moveTo(that.gap, that.gap + 185)
                context.lineTo(that.gap + 132, that.gap + 185)
                context.lineTo(that.gap + 132 + 24, that.gap + 185 + 26)
                context.lineTo(that.gap + 132 + 24 + 137, that.gap + 185 + 26)
                context.stroke()
                // 2
                context.beginPath()
                context.moveTo(that.gap, that.gap + 223)
                context.lineTo(that.gap + 395, that.gap + 223)
                context.stroke()
                // 3
                context.beginPath()
                context.moveTo(that.gap, that.gap + 235)
                context.lineTo(that.gap + 96, that.gap + 235)
                context.lineTo(that.gap + 96 + 24, that.gap + 250)
                context.lineTo(that.gap + 96 + 24 + 250, that.gap + 250)
                context.stroke()
                // 4
                context.beginPath()
                context.moveTo(that.gap, that.gap + 285)
                context.lineTo(that.gap + 80, that.gap + 285)
                context.stroke()
                // 5
                context.beginPath()
                context.moveTo(that.gap, that.gap + 295)
                context.lineTo(that.gap + 118, that.gap + 295)
                context.lineTo(that.gap + 118 + 20, that.gap + 278)
                context.lineTo(that.gap + 118 + 20 + 270, that.gap + 278)
                context.stroke()
                // 6
                context.beginPath()
                context.moveTo(that.gap, that.gap + 208)
                context.lineTo(that.gap + 71, that.gap + 208)
                context.stroke()
                // 7
                context.beginPath()
                context.moveTo(that.gap, that.gap + 335)
                context.lineTo(that.gap + 125, that.gap + 335)
                context.lineTo(that.gap + 125 + 24, that.gap + 311)
                context.lineTo(that.gap + 125 + 24 + 430, that.gap + 311)
                context.stroke()
                context.restore()
            },
            drawLinesBackground () {
                const that = this
                const context = that.context
                context.save()
                const baseColor = '#61ff42'
                const color = chroma(baseColor).brighter()
                let startY = that.allHeight * 0.17
                let h = that.allHeight * 0.45
                let gradient = context.createLinearGradient(that.gap, that.gap + startY, that.gap, that.gap + startY + h)
                gradient.addColorStop(0, color.alpha(0.06).css())
                gradient.addColorStop(0.78, color.alpha(0.05).css())
                gradient.addColorStop(1, color.alpha(0).css())
                context.fillStyle = gradient
                context.beginPath()

                let topL = that.allWidth * 0.23
                let rectL = 40
                context.moveTo(that.gap, that.gap + startY)
                context.lineTo(that.gap + topL, that.gap + startY)
                context.lineTo(that.gap + topL + rectL, that.gap + startY + 45)
                context.lineTo(that.allWidth - that.gap - topL - rectL, that.gap + startY + 45)
                context.lineTo(that.allWidth - that.gap - topL, that.gap + startY)
                context.lineTo(that.allWidth - that.gap, that.gap + startY)
                context.lineTo(that.allWidth - that.gap, that.gap + startY + h)
                context.lineTo(that.gap, that.gap + startY + h)
                context.lineTo(that.gap, that.gap + startY)
                context.fill()
                context.closePath()
                context.restore()
            },
            drawLogoText () {
                const that = this
                const context = that.context
                let startX = that.centerX
                let startY = that.cardHeight - 110
                context.save()
                context.textAlign = 'center'
                context.textBaseline = 'middle'
                context.strokeStyle = '#00080a'
                context.fillStyle = '#ffffff'
                context.font = '98px Arial'
                context.strokeText('CAMeleon', startX, startY)
                context.fillText('CAMeleon', startX, startY)
                context.restore()
            },
            drawTitleText () {
                const that = this
                const context = that.context
                let startX = that.gap + 23
                let startY = that.gap + 29
                context.save()
                context.textAlign = 'left'
                context.textBaseline = 'top'
                context.strokeStyle = '#00080a'
                context.fillStyle = '#ffffff'
                context.font = '20px Arial'
                context.strokeText('LIGHTEN', startX, startY)
                context.fillText('LIGHTEN', startX, startY)
                context.restore()
            },
            drawBackground () {
                const that = this
                const context = that.context
                // context.fillStyle = '#ffffff'
                // context.fillRect(0, 0, that.allWidth, that.allHeight)
                let startX = that.gap
                let startY = that.gap
                let radius = 20
                let endX = that.allWidth - that.gap
                let endY = that.allHeight - that.gap
                // let gradient = context.createLinearGradient(startX, startY, startX, endY)
                // gradient.addColorStop(0, '#26333b')
                // gradient.addColorStop(0.6, '#20282b')
                // gradient.addColorStop(1, '#2c2c2a')
                // context.fillStyle = gradient
                // context.strokeStyle = '#1d1918'
                context.fillStyle = 'rgba(0,0,0,1)'
                context.lineWidth = 1
                context.beginPath()
                context.moveTo(startX + radius, startY)
                context.arcTo(endX, startY, endX, startY + radius, radius)
                context.arcTo(endX, endY, endX - radius, endY, radius)
                context.arcTo(startX, endY, startX, endY - radius, radius)
                context.arcTo(startX, startY, startX + radius, startY, radius)
                context.stroke()
                context.fill()
            }
        }
    }
</script>
