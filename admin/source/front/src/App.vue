<style lang="sass">
    @import './sass/common/common.scss';
    @import './sass/views/app.scss';
</style>

<template>
    <div id="app">
        <!--top header-->
        <header class="mobile-app-header" v-if="navigatorStatus">
            <div><i></i><i></i></div>
        </header>
        <header class="app-header" v-if="navStatus && !navigatorStatus" :class="{active: navigationScrollStatus}">
            <div class="bann">
                <a class="logo"><img src="./assets/images/common/logo_1.png" alt="小摩豆"/></a>
                <div class="menu">
                    <ul>
                        <li v-for="item in tabMenu" :class="{active: currTab==item.value}" @click="doMenu(item.value)">{{ item.name }}</li>
                    </ul>
                </div>
            </div>
        </header>
        <!--view content-->
        <transition name="app-page-fade">
            <router-view/>
        </transition>
        <footer class="mobile-app-footer" v-if="navigatorStatus">
            <div>
                <div>手机版 | <span>电脑版</span></div>
                <div>© 2018 小摩豆 版权所有 粤ICP备15112271号-1</div>
            </div>
        </footer>
        <footer class="app-footer" v-if="!navigatorStatus">
            <div class="item-footer">
                <div class="item-tel">
                    <div>400-829-9358</div>
                    <div>周一至周六 9:00-22:00</div>
                </div>
                <div class="item-choice">
                    <div>关于我们</div>
                    <div>公司简介</div>
                    <div>公司新闻</div>
                    <div>联系我们</div>
                    <div>加入我们</div>
                </div>
                <div class="item-about-tav">
                    <div>联系我们</div>
                    <div class="item-phone">
                        <p>Phone</p>
                        <div>824205946 / 400 - 829 - 9358</div>
                    </div>
                    <div class="item-phone">
                        <p>E-Mail</p>
                        <div>support@xiaomodo.com</div>
                    </div>
                    <div class="item-phone">
                        <p>Address</p>
                        <div>深圳市福强路3030号中国新媒体产业大厦16F</div>
                    </div>
                </div>
                <div class="item-attention">
                    <div>关注小摩豆</div>
                    <div><img src="./assets/images/home/icon06.png"/></div>
                </div>
            </div>
            <div class="item-bottom">© 2018 小摩豆 版权所有 粤ICP备15112271号-1</div>
        </footer>

        <!--右边菜单-->
        <div class="right-navigation" v-if="!navigatorStatus">
            <div></div>
            <div></div>
            <div></div>
            <div @click="doClickTop()"></div>
        </div>
        <!-- :class="{ active: loading }"-->
        <!--<Spinner></Spinner>-->
    </div>
</template>

<script>
    import Spinner from './components/app/Spinner'
    export default {
        name: 'app',
        components: {
            Spinner
        },
        data () {
            return {
                tabMenu: [{name: '首页', value: 0}, {name: '产品', value: 1}, {name: '案例', value: 2}, {name: '行业知识', value: 3}, {name: '联系我们', value: 4}],
                currTab: 0,
                navigationScrollStatus: false,
                routeName: ''
            }
        },
        created () {
            let that = this
            let store = that.$store
            if (!(/(android|iphone|ipad|PlayBook|BB10)/i).test(window.navigator.userAgent)) {
                console.log('pc端')
                store.state.navigatorStatus = false
            }
            if ((/(android|iphone|ipad|PlayBook|BB10)/i).test(window.navigator.userAgent)) {
                console.log('移动端')
                store.state.navigatorStatus = true
            }
        },
        mounted () {
            let that = this
            window.addEventListener('scroll', that.handleScroll)
        },
        computed: {
            navStatus () {
                let that = this
                let store = that.$store
                that.routeName = this.$route.name
                return store.state.navigationStatus
            },
            navigatorStatus () {
                let that = this
                let store = that.$store
                return store.state.navigatorStatus
            }
        },
        methods: {
            doMenu (tab) {
                let that = this
                that.currTab = tab
                document.documentElement.scrollTop = 0
                if (tab == 0) {
                    that.$router.push({name: 'home'})
                } else if (tab == 1) {
                    that.$router.push({name: 'product'})
                } else if (tab == 2) {
                    that.$router.push({name: 'case'})
                } else {
                    that.$router.push({name: 'industryKnowledge'})
                }
            },
            handleScroll () {
                let that = this
                if (that.routeName == 'home') {
                    that.scrollY(620)
                } else if (that.routeName == 'product') {
                    that.scrollY(500)
                } else if (that.routeName == 'case') {
                    that.scrollY(460)
                } else if (that.routeName == 'industryKnowledge') {
                    that.scrollY(462)
                }
            },
            scrollY (height) {
                if (window.scrollY > height) {
                    this.navigationScrollStatus = window.scrollY > 0
                } else {
                    this.navigationScrollStatus = false
                }
            },
            doClickTop () {
                if (document.documentElement.scrollTop > 0) {
                    document.documentElement.scrollTop = 0
                }
            }
        }
    }
</script>
