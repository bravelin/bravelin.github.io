import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navigationStatus: true, // 顶部导航显示与隐藏
        navigatorStatus: false, // false pc端 / true 移动端
        currRouter: {
            from: '',
            to: '',
            query: null,
            instance: null // 路由实例
        }
    },
    mutations: {
        setNavigationStatus (state, isShow) {
            state.navigationStatus = isShow
        },
        setCurrRouter (state, payload) {
        }
    }
})
