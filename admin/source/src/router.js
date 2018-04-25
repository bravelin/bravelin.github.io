/**
 * 页面路由定义
 */
import Vue from 'vue'
import Router from 'vue-router'
import store from './store/index'
import storeTypes from './store/types'

Vue.use(Router)

var routerOption = [
    {   // 登录
        path: '/login', name: 'login', component (resolve) { require(['./views/Login.vue'], resolve) }
    },
    {   // 文件管理
        path: '/fileCenter', name: 'fileCenter', component (resolve) { require(['./views/FileCenter.vue'], resolve) }
    },
    {   // 文章列表
        path: '/articles', name: 'articles', component (resolve) { require(['./views/Articles.vue'], resolve) }
    },
    {   // 短文列表
        path: '/sentences', name: 'sentences', component (resolve) { require(['./views/Sentences.vue'], resolve) }
    }
]

routerOption.push({
    path: '/', redirect: { name: 'articles' }
})
routerOption.push({
    path: '*', redirect: { name: 'articles' }
})

// 路由配置
var router = new Router({
    linkActiveClass: 'active',
    routes: routerOption
})

router.beforeEach((to, from, next) => {
    store.commit({
        type: storeTypes.SET_CURR_ROUTER,
        from: from.name,
        to: to.name,
        query: to.query,
        instance: router
    })
    store.commit(storeTypes.SWITCH_LOADING, true)
    next(true)
})

router.afterEach((to, from) => {
    if (to.name != store.state.activeMenuCode) {
        store.commit({
            type: storeTypes.SWITCH_MENU_STATUS,
            code: to.name,
            isOpened: true
        })
    }
})
export default router
