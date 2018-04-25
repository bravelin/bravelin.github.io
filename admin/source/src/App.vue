<style lang="sass">
    @import './sass/common/common.scss';
    @import './sass/views/app.scss';
</style>

<template>
    <div id="app" :class="{ 'no-min-width': isLogin }">
        <!--top header-->
        <header class="app-header" v-show="!isLogin">
            <div class="logo"></div>
            <div class="title">Blog管理后台</div>
            <div class="club-name"></div>
            <div class="header-tool-btn icon-header-3" @click="doExit">退出登录</div>
        </header>
        <section :style="{ height: sectionHeight + 'px' }">
            <!--left menu-->
            <AppMenu v-show="!isLogin"></AppMenu>
            <section>
                <BreadCrumb v-show="!isLogin"></BreadCrumb>
                <!--view content-->
                <transition name="app-page-fade">
                    <router-view :style="{ height: viewHeight + 'px' }"/>
                </transition>
            </section>
        </section>
        <Spinner :class="{ active: loading }"></Spinner>
        <TipShow></TipShow>
    </div>
</template>

<script>
    import storeTypes from './store/types'
    import AppMenu from './components/app/AppMenu'
    import BreadCrumb from './components/app/BreadCrumb'
    import Spinner from './components/app/Spinner'
    import TipShow from './components/common/TipShow'
    import fetch from './utils/fetch'
    import { mapState } from 'vuex'

    export default {
        name: 'app',
        components: {
            AppMenu,
            BreadCrumb,
            Spinner,
            TipShow
        },
        computed: {
            sectionHeight () {
                let state = this.$store.state
                let winHeight = state.winHeight
                if (state.currRouter.to == 'login') {
                    return winHeight
                } else {
                    return winHeight - 70
                }
            },
            viewHeight () {
                let that = this
                let state = that.$store.state
                let sectionHeight = that.sectionHeight
                if (state.currRouter.to == 'login') {
                    return sectionHeight
                } else {
                    return sectionHeight - 42
                }
            },
            isLogin () {
                return this.$store.state.currRouter.to == 'login'
            },
            ...mapState(['loading', 'role'])
        },
        created () {
            let that = this
            let store = that.$store
            let win = window
            // 监听窗口大小的改变
            win.addEventListener('resize', () => {
                store.commit(storeTypes.GET_WIN_HEIGHT)
            })
            store.commit(storeTypes.GET_WIN_HEIGHT)
            if (store.state.userToken) {
                store.dispatch(storeTypes.GET_MENU_DATA)
                store.dispatch(storeTypes.GET_USER_INFO)
            } else {
                that.$router.push({ name: 'login' })
            }
        },
        methods: {
            doExit () { // 退出登录
                let that = this
                let store = that.$store
                fetch({
                    url: 'https://d.apicloud.com/mcm/api/user/logout',
                    method: 'post'
                }).then(() => {
                    store.commit(storeTypes.CLEAR_USER_INFO)
                    that.$router.push({ name: 'login' })
                })
            }
        }
    }
</script>
