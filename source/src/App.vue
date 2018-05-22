<style lang="sass">
    @import './sass/page/index.scss';
</style>
<template>
    <div class="app-wrap" :class="{ 'has-catalog': global.hasCatalog }">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <Spinner v-show="global.loading"></Spinner>
        <nav class="article-nav-menu" v-show="global.showArticleNavMenu">
            <router-link class="back" title="前一篇" v-if="global.prevArticle" :to="{ name: global.prevArticle }"></router-link>
            <router-link class="next" title="后一篇" v-if="global.nextArticle" :to="{ name: global.nextArticle }"></router-link>
            <router-link class="home" title="主页" :to="{ name: 'home' }"></router-link>
        </nav>
    </div>
</template>
<script>
    import Spinner from '@/components/Spinner'
    import Global from '@/libs/global'

    export default {
        data () {
            return {
                global: Global,
                isFixedTop: false
            }
        },
        components: {
            Spinner
        },
        created () {
            Global.getArticles()
            Global.getSentences()
        },
        mounted () {
            let that = this
            that.$nextTick(() => {
                that.global.loading = true
                window.addEventListener('scroll', () => {
                    that.doHandlerScroll()
                })
            })
        },
        methods: {
            doHandlerScroll () {
                const doc = document
                const top = doc.body.scrollTop || doc.documentElement.scrollTop
                sessionStorage.setItem(Global.currPage, top)
            }
        }
    }
</script>
