<!--TabMenu Item项-->
<template>
    <canvas :width="w" :height="h" @mouseover="doHover()" @mouseleave="doOut()" @click="doClickMenu()" :style="{ 'z-index': zIndex }"/>
</template>

<script>
    export default {
        name: 'tabMenuItem',
        watch: {
            'isActive' () {
                let that = this
                that.doDraw(that.isActive)
            }
        },
        data () {
            return {
                zIndex: 1
            }
        },
        props: {
            w: {
                type: Number,
                default: 130
            },
            h: {
                type: Number,
                default: 40
            },
            text: {
                type: String,
                default: ''
            },
            isActive: {
                type: Boolean,
                default: false
            },
            menuIndex: {
                type: Number
            }
        },
        mounted () {
            let that = this
            that.$nextTick(() => {
                that.doDraw(that.isActive)
            })
        },
        methods: {
            doDraw (tag, isHover) {
                let that = this
                let ctx = that.$el.getContext('2d')
                let w = that.w
                let h = that.h
                let top = 1
                let bottom = h - 0
                let r = 18
                let fillStyle = '#646f86'
                let strokeStyle = '#646f86'
                let textColor = '#fff'
                if (!tag) {
                    fillStyle = '#eef1f5'
                    strokeStyle = '#ccc'
                    textColor = '#646f86'
                } else if (isHover) {
                    fillStyle = 'rgba(100, 111, 134, 0.6)'
                }
                ctx.clearRect(0, 0, w, h)
                ctx.beginPath()
                ctx.fillStyle = fillStyle
                ctx.strokeStyle = strokeStyle
                ctx.lineWidth = 1
                ctx.moveTo(2 * r, top)
                ctx.bezierCurveTo(r - 12, top, r, bottom, 0, bottom)
                ctx.lineTo(w, bottom)
                ctx.bezierCurveTo(w - r, bottom, w - r + 12, top, w - 2 * r, top)
                ctx.lineTo(2 * r, top)
                if (!tag) {
                    ctx.stroke()
                }
                ctx.fill()
                ctx.font = 'normal 16px 微软雅黑'
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.fillStyle = textColor
                ctx.fillText(that.text, w / 2, h / 2)
                that.zIndex = tag ? 10 : 10 - that.menuIndex
            },
            doHover () {
                this.doDraw(true, true)
            },
            doOut () {
                this.doDraw(this.isActive)
            },
            doClickMenu () {
                let that = this
                if (!that.isActive) {
                    that.$emit('switch', that.menuIndex)
                }
            }
        }
    }
</script>
