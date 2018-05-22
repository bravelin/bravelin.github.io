<template>
    <div class="note-wrap modal" :class="{ loading: inSubmit }">
        <div>
            <h3>{{ noteType=='reply' ? '回复@'+replyName : ( noteType=='note' ? '留言' : '评论') }}<span @click="doCloseNoteModal()">X</span></h3>
            <div class="content">
                <div class="clear-fix" v-show="noteType!='reply'">
                    <label>您的称呼：</label>
                    <input ref='noteNameEl' v-model="noteName" type="text" placeholder="your name" maxlength="20"/>
                </div>
                <div class="clear-fix">
                    <label>{{ noteType=='reply' ? "回复的话" : "您想说的话" }}：</label>
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
    import Global from '../libs/global'
    import eventHub from '../libs/hub'

    export default {
        data () {
            return {
                noteName: '',
                noteContent: '',
                noteType: 'note', // note 留言 reply 回复 comment 评论
                replyName: '',
                replyId: '',
                articleId: '', // 评论的文章ID
                articleName: '', // 评论的文章名
                pageName: '', // 评论的页面（router）
                inSubmit: false
            }
        },
        created () {
            eventHub.$on('pop-note-modal', this.doHandlerPopModal)
        },
        beforeDestroy () {
            eventHub.$off('pop-note-modal', this.doHandlerPopModal)
        },
        methods: {
            doHandlerPopModal (noteObj) {
                var that = this
                that.noteType = noteObj.noteType
                if (that.noteType == 'reply') {
                    that.replyName = noteObj.replyName
                    that.replyId = noteObj.replyId
                }
                that.articleId = noteObj.articleId || ''
                that.articleName = noteObj.articleName || ''
                that.pageName = noteObj.pageName || ''
                that.doShowNoteModal()
            },
            doSubmitNoteContent () {
                var that = this
                var global = Global
                var noteName = that.noteName.trim()
                var noteContent = that.noteContent.trim()

                if (noteName.length == 0 && that.noteType != 'reply') {
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
                that.inSubmit = true
                var now = (+new Date())
                var appKey = Global.sha(Global.appKey + now) + '.' + now
                var submitData = {
                    articleId: that.articleId,
                    userName: noteName,
                    commentContent: noteContent,
                    articleName: that.articleName,
                    pageRouter: that.pageName,
                    replyId: ''
                }
                if (that.noteType == 'reply') {
                    submitData.replyId = that.replyId
                    submitData.userName = 'linz'
                }
                that.$http.post('https://d.apicloud.com/mcm/api/comments', submitData, {
                    headers: {
                        'X-APICloud-AppKey': appKey
                    }
                }).then((res) => {
                    that.inSubmit = false
                    if (res.status == 200) {
                        eventHub.$emit('refresh-comments')
                        global.tipShow('提交成功！')
                        that.doCloseNoteModal()
                    } else {
                        global.tipShow('提交失败！请稍后再试！')
                    }
                }, function () {
                    that.inSubmit = false
                    global.tipShow('提交失败！请稍后再试！')
                })
            },
            doShowNoteModal () {
                var that = this
                var noteWrap = that.$el
                that.noteName = ''
                that.noteContent = ''
                noteWrap.style.display = 'block'
                setTimeout(() => {
                    noteWrap.classList.add('active')
                }, 200)
            },
            doCloseNoteModal () {
                var that = this
                var noteWrap = that.$el
                noteWrap.classList.remove('active')
                setTimeout(() => {
                    noteWrap.style.display = 'none'
                }, 600)
            }
        }
    }
</script>
