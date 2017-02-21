<template>
    <div class="note-wrap modal" ref="noteWrap">
        <div>
            <h3>{{ isReply ? '回复@'+replyName : '留言' }}<span @click="doCloseNoteModal()">X</span></h3>
            <div class="content">
                <div class="clear-fix" v-show="!isReply">
                    <label>您的称呼：</label>
                    <input ref='noteNameEl' v-model="noteName" type="text" placeholder="your name" maxlength="20"/>
                </div>
                <div class="clear-fix">
                    <label>{{ isReply ? "回复的话" : "您想说的话" }}：</label>
                    <textarea ref='noteContentEl' v-model="noteContent" placeholder="message content" maxlength="2000"></textarea>
                </div>
            </div>
            <div class="footer">
                <a class="ok" @click="doSubmitNoteContent()">提交</a>
                <a class="cancel" @click="doCloseNoteModal()">取消</a>
            </div>
            <div class='page-mask'>
                <div><i></i><i></i><i></i><i></i><i></i></div>
            </div>
        </div>
    </div>
</template>
<script>
    import { Global } from '../libs/global'
    import { eventHub } from '../libs/hub'

    export default {
        data: function () {
            return {
                noteName: '',
                noteContent: '',
                isReply: false,
                replyName: '',
                replyId: ''
            }
        },
        props: {
            queryArticle: {
                type: Boolean,
                required: false,
                default: true
            }
        },
        created: function () {
            var that = this
            eventHub.$on('pop-reply-modal', that.doPopReplyModal)
        },
        beforeDestroy: function () {
            var that = this
            eventHub.$off('pop-reply-modal', this.doPopReplyModal)
        },
        methods: {
            doPopReplyModal: function (replyObj) {
                var that = this
                that.isReply = true
                that.replyName = replyObj.name
                that.replyId = replyObj.id
                that.doShowNoteModal()
            },
            doSubmitNoteContent: function () {
                var that = this
                var global = Global
                var noteName = that.noteName.trim()
                var noteContent = that.noteContent.trim()
                var noteWrapEl = that.$refs.noteWrap
                if (noteName.length == 0 && !that.isReply) {
                    that.$refs.noteNameEl.focus()
                    return
                }
                if (noteContent.length == 0) {
                    that.$refs.noteContentEl.focus()
                    return
                }
                that.noteName = noteName
                that.noteContent = noteContent
                // console.log('提交...')
                noteWrapEl.classList.add('loading')
                var now = (+new Date())
                var appKey = Global.sha(Global.appKey + now) + '.' + now
                that.$http.post('https://d.apicloud.com/mcm/api/comments', {
                    articleId: that.isReply ? '' : global.currArticleId,
                    userName: that.isReply ? 'linz' : noteName,
                    commentContent: noteContent,
                    articleName: that.isReply ? '' : global.currArticleName,
                    pageRouter: that.isReply ? '' : global.currPage,
                    replyId: that.isReply ? that.replyId : ''
                }, {
                    headers: {
                        'X-APICloud-AppKey': appKey
                    }
                }).then(function (res) {
                    noteWrapEl.classList.remove('loading')
                    if (res.status == 200) {
                        eventHub.$emit('refresh-comments')
                        global.tipShow('提交成功！')
                        that.doCloseNoteModal()
                    } else {
                        global.tipShow('提交失败！请稍后再试！')
                    }
                }, function () {
                    noteWrapEl.classList.remove('loading')
                    global.tipShow('提交失败！请稍后再试！')
                })
            },
            doShowNoteModal: function () {
                var that = this
                var noteWrap = this.$refs.noteWrap
                that.noteName = ''
                that.noteContent = ''
                noteWrap.style.display = 'block'
                setTimeout(function () {
                    noteWrap.classList.add('active')
                }, 200)
            },
            doCloseNoteModal: function () {
                var noteWrap = this.$refs.noteWrap
                noteWrap.classList.remove('active')
                setTimeout(function () {
                    noteWrap.style.display = 'none'
                }, 600)
            }
        }
    }
</script>
