<style lang="sass">
    @import '../../sass/components/modal.scss';
</style>
<template>
    <div class="modal" :class="{ active: isPop }">
        <div ref="wrap" :class="{ active: isActive, moved: moved }" @transitionend="onTransitionEndOfWrap()" :style="{ left: left+'px', top: top+'px' }">
            <h3 class="modal-header" :class="{ draging: inDraging }" @mousedown="doStartDrag" @mouseout="doEndDrag" @mousemove="doDrag" @mouseup="doEndDrag">{{ title }}<span v-show="isShowCloseBtn" @click="doClickCloseBtn($event)"><i class="icon-close"></i></span></h3>
            <div class="modal-content"><slot></slot></div>
            <div class="modal-footer" v-show="isShowFooter">
                <span class="modal-tip" :class="{ active: isShowTip }">{{ tipStr }}</span>
                <a class="modal-ok-btn" @click="doClickCommitBtn()" v-show="commitBtn.isShow">{{ commitBtn.label }}</a>
                <a class="modal-cancel-btn" @click="doClickCancelBtn()" v-show="cancelBtn.isShow">{{ cancelBtn.label }}</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'modal',
        data () {
            return {
                isPop: false, // 控制弹出
                isActive: false, // 控制显示窗口
                isShowTip: false, // 控制tip的显示
                currShowTipIndex: -1,
                left: 0, // 用于drag
                top: 0,
                lastX: 0,
                lastY: 0,
                inDraging: false,
                moved: false
            }
        },
        computed: {
            tipStr () {
                const that = this
                if (that.tip) {
                    that.doShowTip()
                }
                return that.tip
            }
        },
        props: {
            title: { // 标题
                type: String,
                default: ''
            },
            isShow: { // 控制显示/隐藏
                type: Boolean,
                default: false
            },
            isShowFooter: { // 是否显示底部区域
                type: Boolean,
                default: true
            },
            isShowCloseBtn: { // 是否显示关闭按钮
                type: Boolean,
                default: true
            },
            commitBtn: { // 确定按钮
                type: Object,
                default () {
                    return {
                        label: '确定', isShow: true
                    }
                }
            },
            cancelBtn: { // 取消按钮
                type: Object,
                default () {
                    return {
                        label: '取消', isShow: true
                    }
                }
            },
            tip: {
                type: String,
                default: ''
            }
        },
        created () {
            const that = this
            that.doHandlerShow()
            document.body.addEventListener('keypress', that.doPresskey)
        },
        updated () {
            this.doHandlerShow()
        },
        methods: {
            // 处理隐藏与显示
            doHandlerShow () {
                const that = this
                if (that.isShow) {
                    that.doShow()
                } else {
                    that.doClose()
                }
            },
            // 点击关闭按钮
            doClickCloseBtn (e) {
                if (e) {
                    e.stopPropagation()
                }
                this.$emit('update:isShow', false)
                this.$emit('close')
            },
            // 点击确定按钮
            doClickCommitBtn () {
                this.$emit('commit')
            },
            // 点击取消按钮
            doClickCancelBtn () {
                this.$emit('cancel')
                this.$emit('update:isShow', false)
            },
            // 窗口位置init
            doInitPosition () {
                const that = this
                let wrap = that.$refs.wrap
                let box = wrap.getBoundingClientRect()
                that.top = box.top - box.height * 0.15
                that.left = box.left
            },
            // 显示逻辑
            doShow () {
                const that = this
                if (that.isPop) {
                    return
                }
                that.isPop = true
                setTimeout(() => { that.isActive = true }, 50)
            },
            // 关闭逻辑
            doClose () {
                const that = this
                if (!that.isActive) {
                    return
                }
                that.isActive = false
            },
            // 动画结束逻辑
            onTransitionEndOfWrap () {
                const that = this
                if (!that.isActive) {
                    setTimeout(() => {
                        that.isPop = false
                        that.moved = false
                        that.left = 0
                        that.top = 0
                    }, 0)
                }
            },
            // tip show
            doShowTip () {
                const that = this
                that.isShowTip = true
                setTimeout(() => {
                    that.isShowTip = false
                    setTimeout(() => { that.$emit('update:tip', '') }, 300)
                }, 1500)
            },
            // start move
            doStartDrag (e) {
                const that = this
                that.lastX = e.clientX
                that.lastY = e.clientY
                that.inDraging = true
                if (!that.moved) { // 进入拖动状态，绝对定位
                    that.doInitPosition()
                    that.moved = true
                }
            },
            // 执行拖动
            doDrag (e) {
                const that = this
                if (that.inDraging) {
                    let deltX = e.clientX - that.lastX
                    let deltY = e.clientY - that.lastY
                    that.left = that.left + deltX
                    that.top = that.top + deltY
                    that.lastX = e.clientX
                    that.lastY = e.clientY
                }
            },
            // 结束拖动
            doEndDrag (e) {
                const that = this
                that.lastX = 0
                that.lastY = 0
                that.inDraging = false
            },
            // 回车键处理
            doPresskey (e) {
                // const that = this
                // if (e.keyCode == 13 && that.isShow && that.commitBtn.isShow) {
                //     that.doClickCommitBtn()
                // }
            }
        },
        beforeDestroy () {
            document.body.removeEventListener('keypress', this.doPresskey)
        }
    }
</script>
