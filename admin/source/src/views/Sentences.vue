<style lang="sass">
    @import '../sass/views/sentences.scss';
</style>
<template>
    <div class="app-page" id="sentences-page">
        <div class="panel">
            <div class="panel-title"><h3>编辑文章</h3><button @click="doBack" class="back-btn">返回</button><button @click="doSave">保存</button></div>
            <div class="panel-content">
                <div class="article-title"><label>文章标题：</label><input placeholder="请输入文章标题" maxlength="100" type="text" v-model="articleTitle" ref="title"/></div>
                <div class="article-title"><label>图片链接：</label><input placeholder="请输入图片链接" maxlength="1000" type="text" v-model="imgUrl" ref="imgUrl"/></div>
                <div class="article-title"><label>文章描述：</label><textarea placeholder="请输入文章的描述" maxlength="2000" type="text" v-model="desc" ref="desc"/></textarea></div>
                 
            </div>
        </div>
    </div>
</template>

<script>
    import loading from '@/utils/loading'
    import fetch from '@/utils/fetch'
    import tipShow from '@/utils/tipShow'

    export default {
        name: 'sentences',
        data () {
            return {
                articleId: '',
                articleTitle: '',
                articleContent: '',
                imgUrl: '',
                desc: ''
            }
        },
        created () {
            const that = this
            that.articleId = that.$store.state.currRouter.query.id || ''
            fetch({
                url: 'https://d.apicloud.com/mcm/api/news/{newsId}',
                params: {
                    newsId: that.articleId
                }
            }).then(res => {
                that.articleTitle = res.title
                that.articleContent = res.content
                that.imgUrl = res.imgUrl
                that.desc = res.desc
                loading(false)
            })
        },
        methods: {
            doSave () {
                const that = this
                let title = that.articleTitle.trim()
                let imgUrl = that.imgUrl.trim()
                let desc = that.desc.trim()
                let content = that.$refs.ue.getUEContent()
                if (!title) {
                    tipShow('请输入文章标题！')
                    that.$refs.title.focus()
                    return
                }
                // if (!imgUrl) {
                //     tipShow('请输入图片链接！')
                //     that.$refs.imgUrl.focus()
                //     return
                // }
                // if (!desc) {
                //     tipShow('请输入文章描述！')
                //     that.$refs.desc.focus()
                //     return
                // }
                if (that.articleId) { // 编辑的情况下
                    fetch({
                        url: 'https://d.apicloud.com/mcm/api/news/{newsId}',
                        method: 'put',
                        params: {
                            newsId: that.articleId
                        },
                        data: {
                            '$set': {
                                content: content,
                                title: title,
                                imgUrl: imgUrl,
                                desc: desc
                            }
                        }
                    }).then(() => {
                        tipShow('保存成功！')
                        loading(false)
                        setTimeout(() => {
                            that.$router.back()
                        }, 1000)
                    })
                } else { // 添加文章
                    fetch({
                        url: 'https://d.apicloud.com/mcm/api/news',
                        method: 'post',
                        data: {
                            title: title,
                            content: content,
                            author: that.$store.state.userName,
                            status: 'draft',
                            viewCount: 0,
                            imgUrl: imgUrl,
                            desc: desc
                        }
                    }).then(() => {
                        tipShow('保存成功！')
                        loading(false)
                        setTimeout(() => {
                            that.$router.back()
                        }, 1000)
                    })
                }
            },
            doBack () {
                this.$router.back()
            }
        }
    }
</script>
