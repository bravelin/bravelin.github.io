<style>
    @import './styles/page/index.css';
</style>
<template>
    <div @click="doHideSideMenu()">
        <header>
            <div class="wrap">
                <router-link class="logo" :to="{name: 'about'}" tag="div"></router-link>
                <div class="title">
                    <h1>linz blog</h1>
                    <h2>年华易老，不忘初心。</h2>
                </div>
            </div>
            <nav :class="{ fixedTop: isFixedTop }">
                <ul>
                    <li>
                        <router-link :to="{ name: 'about' }">About Me</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'comments' }">Comments</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'topics' }">Topics</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <!--<li><router-link :to="{ name: 'home' }">Home</router-link></li>-->
                </ul>
            </nav>
        </header>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <spinner v-show="global.loading"></spinner>
        <div class="side-menu-icon" :class="{ fixedTop: isFixedTop }" @click="doClickMenuBtn($event)"></div>
        <nav class="side-menu" :class="{active: showSizeMenu}" @click="doClickSideMenuWrap($event)">
            <ul>
                <!--<li><router-link :to="{ name: 'home' }">Home</router-link></li>-->
                <li>
                    <router-link :to="{ name: 'home' }">Home</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'topics' }">Topics</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'comments' }">Comments</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'about' }">About Me</router-link>
                </li>
            </ul>
        </nav>
        <nav class="article-nav-menu" v-show="global.showArticleNavMenu">
            <router-link class="back" title="前一篇" v-if="global.prevArticle" :to="{ name: global.prevArticle }"></router-link>
            <router-link class="next" title="后一篇" v-if="global.nextArticle" :to="{ name: global.nextArticle }"></router-link>
            <a class="note" title="留言" @click="doClickNoteBtn()"></a>
        </nav>
        <note></note>
    </div>
</template>
<script>
    import Spinner from './components/spinner'
    import Note from './components/note'
    import {Global} from './libs/global'
    import {eventHub} from './libs/hub.js'

    module.exports = {
        data () {
            return {
                global: Global,
                isFixedTop: false,
                showSizeMenu: false
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
                document.querySelector('header').style.opacity = 1
                document.querySelector('body>footer').style.opacity = 1
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
            },
            doClickSideMenuWrap (event) {
                // event.stopPropagation()
            },
            doHideSideMenu () {
                this.showSizeMenu = false
            },
            doClickMenuBtn (event) {
                this.showSizeMenu = !this.showSizeMenu
                event.stopPropagation()
            }
        }
    }
</script>
