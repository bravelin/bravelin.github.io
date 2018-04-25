<style lang="sass">
    @import '../sass/views/login.scss';
</style>
<template>
    <div id="login-page">
        <Sky></Sky>
        <div class="dialog" :class="{ active: isDialogActive }">
            <div class="descri"><div></div></div>
            <div class="form">
                <h1>Lin's Notes Login</h1>
                <div class="person">
                    <input type="text" ref="un" tabindex="1" v-model="userName" :disabled="isProcessing" placeholder="请输入用户名" maxlength="45" autocomplete="off"/>
                </div>
                <div class="lock">
                    <input type="password" ref="pw" tabindex="2" v-model="password" :disabled="isProcessing" placeholder="请输入密码" maxlength="45" autocomplete="off"/>
                </div>
                <div class="btn" tabindex="3" @click="doLogin()" :class="{ active: userName && password, processing: isProcessing }">{{ isProcessing ? '正在登录...' : '立即登录' }}</div>
            </div>
            <div class="info" :class="{ active: isShowTip, success: isSuccess }">{{ tipStr }}</div>
        </div>
        <footer>© 2018 zhangjialin</footer>
    </div>
</template>

<script>
    import fetch from '../utils/fetch'
    import storeTypes from '../store/types'
    import loading from '../utils/loading'
    import Sky from '../components/common/Sky'

    export default {
        name: 'login-page',
        components: {
            Sky
        },
        data () {
            return {
                isDialogActive: false,
                isSuccess: false,
                isShowTip: false,
                tipStr: '',
                isRemember: true,
                isProcessing: false,
                userName: '',
                password: ''
            }
        },
        created () {
            // 从localstorage里面读取
            let that = this
            let ls = localStorage
            that.userName = ls.getItem('lin-website-un')
            that.password = ls.getItem('lin-website-pw')
            that.isRemember = true

            // 监听按键事件，回车执行登录操作
            document.body.addEventListener('keypress', that.doPresskey)
            loading(false)
        },
        mounted () {
            let that = this
            that.$nextTick(() => {
                let state = that.$store.state
                if (state.userToken && state.role) {
                    that.toPage(state.role)
                } else {
                    let userName = that.userName = that.userName
                    let password = that.password = that.password
                    let refs = that.$refs
                    setTimeout(() => {
                        that.isDialogActive = true
                        refs.pw.value = that.password = password
                        refs.un.value = that.userName = userName
                        if (!userName) {
                            refs.un.focus()
                        } else if (!password) {
                            refs.pw.focus()
                        }
                    }, 500)
                }
            })
        },
        methods: {
            // 勾选记住账号的处理
            doClickRememberBtn () {
                let that = this
                if (!that.isProcessing) {
                    that.isRemember = !that.isRemember
                }
            },
            // 显示提示信息
            showTip (str, isSuccess = false) {
                let that = this
                that.tipStr = str
                that.isSuccess = isSuccess
                that.isShowTip = true
                setTimeout(() => {
                    that.isShowTip = false
                }, 1500)
            },
            // 处理登录逻辑
            doLogin () {
                let that = this
                let refs = that.$refs
                if (that.isProcessing) {
                    return
                }
                that.userName = that.userName.trim()
                if (!that.userName) {
                    refs.un.focus()
                    return that.showTip('请输入用户名！')
                }
                if (!that.password) {
                    refs.pw.focus()
                    return that.showTip('请输入密码！')
                }
                let ls = localStorage
                if (that.isRemember) { // 记住账号信息
                    ls.setItem('lin-website-un', that.userName)
                    ls.setItem('lin-website-pw', that.password)
                    ls.setItem('lin-website-is-remember', '1')
                } else { // 清除账号信息
                    ls.removeItem('lin-website-un')
                    ls.removeItem('lin-website-pw')
                    ls.removeItem('lin-website-is-remember')
                }
                that.isProcessing = true
                fetch({
                    url: 'https://d.apicloud.com/mcm/api/user/login',
                    method: 'post',
                    data: {
                        username: that.userName,
                        password: that.password
                    }
                }).then(res => {
                    if (res.id) {
                        let store = that.$store
                        store.commit(storeTypes.SET_USER_INFO, {
                            userToken: res.id,
                            userId: res.userId
                        })
                        that.showTip('登录成功！', true)
                        that.$router.push({ name: 'articles' })
                        store.dispatch(storeTypes.GET_USER_INFO)
                        store.dispatch(storeTypes.GET_MENU_DATA)
                    } else {
                        that.isProcessing = false
                        that.showTip('用户名或密码错误！', false)
                    }
                }, () => {
                    that.isProcessing = false
                    that.showTip('用户名或密码错误！', false)
                })
            },
            // 按键监听的处理
            doPresskey (e) {
                if (e.keyCode == 13) {
                    this.doLogin()
                }
            }
        },
        beforeDestroy () {
            // 移除事件
            document.body.removeEventListener('keypress', this.doPresskey)
        }
    }
</script>
