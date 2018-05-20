<template>
    <div class="page">
        <comments :query-article="!allComments"></comments>
        <div class="modal confirm-del-comment" ref="confirmModal">
            <div>
                <h3>确认<span @click="doCloseConfirmModal()">X</span></h3>
                <div class="content">
                    <div>确定要删除这条评论？</div>
                </div>
                <div class="footer">
                    <a class="ok" @click="doDel()">确定</a>
                    <a class="cancel" @click="doCloseConfirmModal()">取消</a>
                </div>
                <div class='page-mask'>
                    <div><i></i><i></i><i></i><i></i><i></i></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import eventHub from '../libs/hub'
    import Global from '../libs/global'

    export default {
        data () {
            return {
                allComments: true,
                delCommentId: ''
            }
        },
        created () {
            eventHub.$on('pop-confirm-del-modal', this.doShowConfirmModal)
        },
        beforeDestroy () {
            eventHub.$off('pop-confirm-del-modal', this.doShowConfirmModal)
        },
        methods: {
            doDel () {
                const that = this
                const now = (+new Date())
                const global = Global
                const appKey = global.sha(global.appKey + now) + '.' + now
                that.$http.delete('https://d.apicloud.com/mcm/api/comments/' + that.delCommentId, {
                    headers: {
                        'X-APICloud-AppKey': appKey
                    }
                }).then((res) => {
                    if (res.status == 200) {
                        eventHub.$emit('refresh-comments')
                        global.tipShow('删除成功！')
                        that.doCloseConfirmModal()
                    }
                })
            },
            doShowConfirmModal (commentId) {
                this.delCommentId = commentId
                console.log('commentId：' + commentId)
                let confirmModal = this.$refs.confirmModal
                confirmModal.style.display = 'block'
                setTimeout(() => {
                    confirmModal.classList.add('active')
                }, 200)
            },
            doCloseConfirmModal () {
                let confirmModal = this.$refs.confirmModal
                confirmModal.classList.remove('active')
                setTimeout(() => {
                    confirmModal.style.display = 'none'
                }, 600)
            }
        }
    }
</script>
