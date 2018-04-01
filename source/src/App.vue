<style lang="sass">
    @import './sass/page/index.scss';
</style>
<template>
    <div class="app-wrap" :class="{ 'has-catalog': global.hasCatalog }">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <spinner v-show="global.loading"></spinner>
        <nav class="article-nav-menu" v-show="global.showArticleNavMenu">
            <router-link class="back" title="前一篇" v-if="global.prevArticle" :to="{ name: global.prevArticle }"></router-link>
            <router-link class="next" title="后一篇" v-if="global.nextArticle" :to="{ name: global.nextArticle }"></router-link>
            <a class="note" title="留言" @click="doClickNoteBtn()"></a>
            <router-link class="home" title="主页" :to="{ name: 'home' }"></router-link>
        </nav>
        <note></note>
        <footer v-show="global.showFooter">© 2018 zhangjialin</footer>
    </div>
</template>
<script>
    import Spinner from './components/spinner'
    import Note from './components/note'
    import Global from './libs/global'
    import eventHub from './libs/hub.js'

    export default {
        data () {
            return {
                global: Global,
                isFixedTop: false
            }
        },
        components: {
            spinner: Spinner,
            note: Note
        },
        mounted () {
            var that = this
            that.$nextTick(() => {
                that.global.loading = true
                window.addEventListener('scroll', () => {
                    that.doHandlerScroll()
                })
            })
        },
        methods: {
            doClickNoteBtn () {
                var global = Global
                var noteObj = {
                    noteType: 'comment',
                    replyId: '',
                    replyName: '',
                    articleId: global.currArticleId,
                    articleName: global.currArticleName,
                    pageName: global.currPage
                }
                if (global.currPage == 'comments') {
                    noteObj.noteType = 'note'
                    noteObj.articleId = ''
                    noteObj.articleName = ''
                }
                eventHub.$emit('pop-note-modal', noteObj)
            },
            doHandlerScroll () {
                var doc = document
                var top = doc.body.scrollTop || doc.documentElement.scrollTop
                this.isFixedTop = top > 188
            }
        }
    }
</script>
