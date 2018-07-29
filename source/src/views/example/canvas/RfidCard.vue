<style scoped>
    .exp{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.exp>canvas.card{
        height: 398px;
        width: 618px;
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
                <canvas ref="card" width="618" height="398" class="card"></canvas>
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
                allWidth: 618,
                allHeight: 398,
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
                let w = 79
                let h = 63
                img.onload = function () {
                    context.drawImage(img, (that.allWidth - w * 2.2) / 2 + 8, 140, w * 2.2, h * 2.2)
                }
                img.src = './static/img/card.png'
            },
            drawRightLines () {
                const that = this
                const context = that.context
                context.save()
                const baseColor = '#61ff42'
                context.lineWidth = 1
                context.lineCap = 'round'
                context.lineJoin = 'round'
                context.shadowOffsetX = 1
                context.shadowOffsetY = -1
                context.shadowColor = chroma(baseColor).alpha(0.9).css()
                context.shadowBlur = 4
                context.fillStyle = context.strokeStyle = chroma(baseColor).brighter().css()
                // 1
                const right = that.allWidth - that.gap
                context.beginPath()
                context.moveTo(right, that.gap + 148)
                context.lineTo(right - 141, that.gap + 148)
                context.lineTo(right - 141 - 10, that.gap + 148 + 10)
                context.lineTo(right - 141 - 10 - 54, that.gap + 148 + 10)
                context.stroke()
                context.beginPath()
                context.arc(right - 141 - 10 - 54 - 4, that.gap + 158, 4, 0, 2 * Math.PI, false)
                context.stroke()
                // 2
                context.beginPath()
                context.moveTo(right, that.gap + 165)
                context.lineTo(right - 149, that.gap + 165)
                context.lineTo(right - 149 - 11, that.gap + 165 + 11)
                context.lineTo(right - 149 - 11 - 35, that.gap + 165 + 11)
                context.stroke()
                context.beginPath()
                context.arc(right - 149 - 11 - 35 - 3, that.gap + 176, 3, 0, 2 * Math.PI, false)
                context.stroke()
                // 3
                context.beginPath()
                context.moveTo(right, that.gap + 190)
                context.lineTo(right - 300, that.gap + 190)
                context.stroke()
                // 4
                context.beginPath()
                context.moveTo(right, that.gap + 226)
                context.lineTo(right - 140, that.gap + 226)
                context.lineTo(right - 140 - 12, that.gap + 226 - 12)
                context.lineTo(right - 140 - 12 - 100, that.gap + 226 - 12)
                context.stroke()
                // 5
                context.beginPath()
                context.moveTo(right, that.gap + 259)
                context.lineTo(right - 149, that.gap + 259)
                context.lineTo(right - 149 - 12, that.gap + 259 - 12)
                context.lineTo(right - 149 - 12 - 53, that.gap + 259 - 12)
                context.stroke()
                context.beginPath()
                context.arc(right - 149 - 12 - 53 - 3, that.gap + 259 - 12, 3, 0, 2 * Math.PI, false)
                context.stroke()
                // 1====
                context.shadowColor = undefined
                context.shadowBlur = 0
                context.lineWidth = 0.5
                context.strokeStyle = chroma(baseColor).darken(6).css()
                context.beginPath()
                context.moveTo(right, that.gap + 120)
                context.lineTo(right - 164, that.gap + 120)
                context.lineTo(right - 164 - 12, that.gap + 132)
                context.lineTo(right - 164 - 32, that.gap + 132)
                context.stroke()
                // 2
                context.beginPath()
                context.moveTo(right, that.gap + 178)
                context.lineTo(right - 130, that.gap + 178)
                context.lineTo(right - 134, that.gap + 178 + 4)
                context.lineTo(right - 134 - 38, that.gap + 178 + 4)
                context.stroke()
                // 3
                context.beginPath()
                context.moveTo(right, that.gap + 182)
                context.lineTo(right - 125, that.gap + 182)
                context.stroke()
                // 4
                context.beginPath()
                context.moveTo(right, that.gap + 220)
                context.lineTo(right - 155, that.gap + 220)
                context.lineTo(right - 155 - 10, that.gap + 220 - 13)
                context.lineTo(right - 155 - 10 - 16, that.gap + 220 - 13)
                context.stroke()
                // 5
                context.beginPath()
                context.moveTo(right, that.gap + 245)
                context.lineTo(right - 132, that.gap + 245)
                context.lineTo(right - 132 - 6, that.gap + 245 + 4)
                context.lineTo(right - 132 - 6 - 35, that.gap + 245 + 4)
                context.stroke()
                // 6
                context.beginPath()
                context.moveTo(right, that.gap + 271)
                context.lineTo(right - 125, that.gap + 271)
                context.stroke()
                context.restore()
            },
            drawLeftLines () {
                const that = this
                const context = that.context
                context.save()
                const baseColor = '#61ff42'
                // 1
                context.lineWidth = 1
                context.lineCap = 'round'
                context.lineJoin = 'round'
                context.shadowOffsetX = 1
                context.shadowOffsetY = -1
                context.shadowColor = chroma(baseColor).alpha(0.9).css()
                context.shadowBlur = 4
                context.fillStyle = context.strokeStyle = chroma(baseColor).brighter().css()
                context.beginPath()
                context.moveTo(that.gap, that.gap + 127)
                context.lineTo(that.gap + 83, that.gap + 127)
                context.lineTo(that.gap + 83 + 20, that.gap + 127 + 22)
                context.lineTo(that.gap + 83 + 20 + 98, that.gap + 127 + 22)
                context.stroke()
                // 2
                context.beginPath()
                context.moveTo(that.gap, that.gap + 137)
                context.lineTo(that.gap + 73, that.gap + 137)
                context.lineTo(that.gap + 73 + 20, that.gap + 137 + 22)
                context.lineTo(that.gap + 73 + 20 + 128, that.gap + 137 + 22)
                context.stroke()
                context.beginPath()
                context.arc(that.gap + 73 + 20 + 128 + 5, that.gap + 137 + 22, 5, 0, 2 * Math.PI, false)
                context.stroke()
                // 3
                context.beginPath()
                context.moveTo(that.gap, that.gap + 190)
                context.lineTo(that.gap + 126, that.gap + 190)
                context.stroke()
                context.beginPath()
                context.arc(that.gap + 126 + 4, that.gap + 190, 4, 0, 2 * Math.PI, false)
                context.fill()
                // 4
                context.beginPath()
                context.moveTo(that.gap, that.gap + 222)
                context.lineTo(that.gap + 83, that.gap + 222)
                context.lineTo(that.gap + 83 + 20, that.gap + 204)
                context.lineTo(that.gap + 103 + 125, that.gap + 204)
                context.stroke()
                context.beginPath()
                context.arc(that.gap + 103 + 125 + 4, that.gap + 204, 4, 0, 2 * Math.PI, false)
                context.stroke()
                // 5
                context.beginPath()
                context.moveTo(that.gap + 29, that.gap + 249)
                context.lineTo(that.gap + 29 + 73, that.gap + 249)
                context.lineTo(that.gap + 29 + 73 + 20, that.gap + 231)
                context.lineTo(that.gap + 29 + 73 + 80, that.gap + 231)
                context.stroke()
                context.beginPath()
                context.arc(that.gap + 29 + 73 + 55, that.gap + 231 - 6, 5, 0, 2 * Math.PI, false)
                context.stroke()

                // 1====
                context.shadowColor = undefined
                context.shadowBlur = 0
                context.lineWidth = 0.5
                context.strokeStyle = chroma(baseColor).darken(6).css()
                context.beginPath()
                context.moveTo(that.gap, that.gap + 150)
                context.lineTo(that.gap + 95, that.gap + 150)
                context.lineTo(that.gap + 95 + 16, that.gap + 150 + 17)
                context.lineTo(that.gap + 95 + 16 + 72, that.gap + 150 + 17)
                context.stroke()
                // 2
                context.beginPath()
                context.moveTo(that.gap, that.gap + 170)
                context.lineTo(that.gap + 55, that.gap + 170)
                context.stroke()
                // 3
                context.beginPath()
                context.moveTo(that.gap, that.gap + 179)
                context.lineTo(that.gap + 58, that.gap + 179)
                context.lineTo(that.gap + 64, that.gap + 184)
                context.lineTo(that.gap + 64 + 295, that.gap + 184)
                context.stroke()
                // 4
                context.beginPath()
                context.moveTo(that.gap, that.gap + 199)
                context.lineTo(that.gap + 79, that.gap + 199)
                context.stroke()
                // 5
                context.beginPath()
                context.moveTo(that.gap, that.gap + 204)
                context.lineTo(that.gap + 87, that.gap + 204)
                context.lineTo(that.gap + 93, that.gap + 198)
                context.lineTo(that.gap + 93 + 232, that.gap + 198)
                context.stroke()
                // 6
                context.beginPath()
                context.moveTo(that.gap, that.gap + 212)
                context.lineTo(that.gap + 71, that.gap + 212)
                context.stroke()
                // 7
                context.beginPath()
                context.moveTo(that.gap, that.gap + 231)
                context.lineTo(that.gap + 87, that.gap + 231)
                context.lineTo(that.gap + 87 + 16, that.gap + 215)
                context.lineTo(that.gap + 87 + 16 + 97, that.gap + 215)
                context.stroke()
                context.restore()
            },
            drawLinesBackground () {
                const that = this
                const context = that.context
                context.save()
                const baseColor = '#61ff42'
                const color = chroma(baseColor).brighter()
                let gradient = context.createLinearGradient(that.gap, that.gap + 106, that.gap, that.gap + 106 + 147)
                gradient.addColorStop(0, color.alpha(0.06).css())
                gradient.addColorStop(0.5, color.alpha(0.05).css())
                gradient.addColorStop(1, color.alpha(0).css())
                context.fillStyle = gradient
                context.beginPath()
                context.moveTo(that.gap, that.gap + 106)
                context.lineTo(that.gap + 96, that.gap + 106)
                context.lineTo(that.gap + 125, that.gap + 106 + 32)
                context.lineTo(that.allWidth - that.gap - 225, that.gap + 106 + 32)
                context.lineTo(that.allWidth - that.gap - 96 - 100, that.gap + 106)
                context.lineTo(that.allWidth - that.gap, that.gap + 106)
                context.lineTo(that.allWidth - that.gap, that.gap + 106 + 147)
                context.lineTo(that.gap, that.gap + 106 + 147)
                context.lineTo(that.gap, that.gap + 106)
                context.fill()
                context.closePath()
                context.restore()
            },
            drawLogoText () {
                const that = this
                const context = that.context
                let startX = that.centerX
                let startY = that.cardHeight - 62
                context.save()
                context.textAlign = 'center'
                context.textBaseline = 'middle'
                context.strokeStyle = '#00080a'
                context.fillStyle = '#ffffff'
                context.font = '40px Arial'
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
                context.fillStyle = '#ffffff'
                context.fillRect(0, 0, that.allWidth, that.allHeight)
                let startX = that.gap
                let startY = that.gap
                let radius = 18
                let endX = that.allWidth - that.gap
                let endY = that.allHeight - that.gap
                let gradient = context.createLinearGradient(startX, startY, startX, endY)
                gradient.addColorStop(0, '#26333b')
                gradient.addColorStop(0.5, '#20282b')
                gradient.addColorStop(1, '#2c2c2a')
                context.fillStyle = gradient
                context.strokeStyle = '#1d1918'
                // context.fillStyle = 'rgba(41,40,38,1)'
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
