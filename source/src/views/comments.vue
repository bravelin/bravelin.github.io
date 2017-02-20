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
    import {eventHub} from '../libs/hub'
    import {Global} from '../libs/global'

    module.exports = {
        data: function () {
            return {
                allComments: true,
                delCommentId: ''
            }
        },
        created: function () {
            eventHub.$on('pop-confirm-del-modal', this.doShowConfirmModal)
        },
        beforeDestroy: function () {
            eventHub.$off('pop-confirm-del-modal', this.doShowConfirmModal)
        },
        methods: {
            doDel: function () {
                var that = this
                var now = (+new Date())
                var global = Global
                var appKey = global.sha(global.appKey + now) + '.' + now
                that.$http.delete('https://d.apicloud.com/mcm/api/comments/' + that.delCommentId, {
                    headers: {
                        'X-APICloud-AppKey': appKey
                    }
                }).then(function (res) {
                    if (res.status == 200) {
                        eventHub.$emit('refresh-comments')
                        global.tipShow('删除成功！')
                        that.doCloseConfirmModal()
                    }
                })
            },
            doShowConfirmModal: function (commentId) {
                this.delCommentId = commentId
                console.log('commentId：' + commentId)
                var confirmModal = this.$refs.confirmModal
                confirmModal.style.display = 'block'
                setTimeout(function () {
                    confirmModal.classList.add('active')
                }, 200)
            },
            doCloseConfirmModal: function () {
                var confirmModal = this.$refs.confirmModal
                confirmModal.classList.remove('active')
                setTimeout(function () {
                    confirmModal.style.display = 'none'
                }, 600)
            }
        }
    }
</script>
