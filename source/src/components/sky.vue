<template>
    <canvas class="sky-bg"></canvas>
</template>
<script>
    import Star from '../libs/star'
    export default {
        data () {
            return {
                stars: [],
                ctx: null,
                hue: 0,
                w: 0,
                h: 0
            }
        },
        mounted () {
            let that = this
            that.$nextTick(() => {
                let el = that.$el
                that.ctx = el.getContext('2d')
                that.draw()
            })
        },
        methods: {
            draw () {
                let that = this
                let el = that.$el
                let ctx = that.ctx
                let w = that.w = el.width = window.innerWidth
                let h = that.h = el.height = window.innerHeight
                let hue = that.hue = 217
                let maxStars = 1200
                let canvas2 = document.createElement('canvas')
                let ctx2 = canvas2.getContext('2d')
                canvas2.width = 100
                canvas2.height = 100
                let half = canvas2.width / 2
                let gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
                gradient2.addColorStop(0.025, '#fff')
                gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)')
                gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)')
                gradient2.addColorStop(1, 'transparent')

                ctx2.fillStyle = gradient2
                ctx2.beginPath()
                ctx2.arc(half, half, half, 0, Math.PI * 2)
                ctx2.fill()
                for (var i = 0; i < maxStars; i++) {
                    that.stars.push(new Star(w, h, ctx, ctx2, canvas2))
                }
                that.animation()
            },
            animation () {
                let that = this
                let ctx = that.ctx
                ctx.globalCompositeOperation = 'source-over'
                ctx.globalAlpha = 0.8
                ctx.fillStyle = 'hsla(' + that.hue + ', 64%, 6%, 1)'
                ctx.fillRect(0, 0, that.w, that.h)
                ctx.globalCompositeOperation = 'lighter'
                for (var i = 1, l = that.stars.length; i < l; i++) {
                    that.stars[i].draw()
                }
                window.requestAnimationFrame(that.animation)
            }
        }
    }
</script>
