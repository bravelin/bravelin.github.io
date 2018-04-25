<style lang="sass">
    @import '../../sass/components/modal.scss';
</style>
<template>
    <div class="modal" :class="{ active: isPop }">
        <div ref="wrap" :class="{ active: isActive }" @transitionend="onTransitionEndOfWrap()" :style="{ left: left+'px', top: top+'px' }">
            <h3 class="modal-header" :class="{ draging: inDraging }" @mousedown="doStartDrag" @mousemove="doDrag" @mouseup="doEndDrag">{{ title }}<span v-show="isShowCloseBtn" @click="doClickCloseBtn()"><i class="icon-close"></i></span></h3>
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
                inDraging: false
            }
        },
        computed: {
            tipStr () {
                let that = this
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
            // console.log('create：', this.title, this.isShow)
            let that = this
            that.doHandlerShow()
            document.body.addEventListener('keypress', that.doPresskey)
        },
        updated () {
            // console.log('updated：', this.tip)
            this.doHandlerShow()
        },
        methods: {
            // 处理隐藏与显示
            doHandlerShow () {
                let that = this
                if (that.isShow) {
                    that.doShow()
                } else {
                    that.doClose()
                }
            },
            // 点击关闭按钮
            doClickCloseBtn () {
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
                let that = this
                let wrap = that.$refs.wrap
                let getComputedStyle = window.getComputedStyle
                let w = parseInt(getComputedStyle(wrap, null).width)
                let h = parseInt(getComputedStyle(wrap, null).height)
                let storeState = that.$store.state
                // 初始时居中
                that.top = (storeState.winHeight - h) / 2
                that.left = (storeState.winWidth - w) / 2
            },
            // 显示逻辑
            doShow () {
                let that = this
                if (that.isPop) {
                    return
                }
                that.isPop = true
                if (that.left == 0 && that.top == 0) {
                    setTimeout(() => {
                        that.doInitPosition()
                    }, 0)
                }
                setTimeout(() => {
                    that.isActive = true
                }, 50)
            },
            // 关闭逻辑
            doClose () {
                let that = this
                if (!that.isActive) {
                    return
                }
                that.isActive = false
            },
            // 动画结束逻辑
            onTransitionEndOfWrap () {
                let that = this
                if (!that.isActive) {
                    setTimeout(() => {
                        that.isPop = false
                    }, 0)
                }
            },
            // tip show
            doShowTip () {
                let that = this
                that.isShowTip = true
                setTimeout(() => {
                    that.isShowTip = false
                    setTimeout(() => {
                        that.$emit('update:tip', '')
                    }, 300)
                }, 1500)
            },
            // start move
            doStartDrag (e) {
                let that = this
                that.lastX = e.clientX
                that.lastY = e.clientY
                that.inDraging = true
            },
            // 执行拖动
            doDrag (e) {
                let that = this
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
                let that = this
                that.lastX = 0
                that.lastY = 0
                that.inDraging = false
            },
            // 回车键处理
            doPresskey (e) {
                let that = this
                if (e.keyCode == 13 && that.isShow && that.commitBtn.isShow) {
                    that.doClickCommitBtn()
                }
            }
        },
        destroyed () {
            document.body.removeEventListener('keypress', this.doPresskey)
        }
    }
</script>
