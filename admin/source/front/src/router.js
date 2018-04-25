/**
 * 页面路由定义
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var routerOption = [
    {   // 首页
        path: '/home', name: 'home', component (resolve) { require(['./views/Home.vue'], resolve) }
    },
    {   // 产品
        path: '/product', name: 'product', component (resolve) { require(['./views/Product.vue'], resolve) }
    },
    {   // 案例
        path: '/case', name: 'case', component (resolve) { require(['./views/Case.vue'], resolve) }
    },
    {   // 行业知识
        path: '/industryKnowledge', name: 'industryKnowledge', component (resolve) { require(['./views/IndustryKnowledge.vue'], resolve) }
    }
]

routerOption.push({
    path: '/', redirect: { name: 'home' }
})
routerOption.push({
    path: '*', redirect: { name: 'home' }
})

// 路由配置
var router = new Router({
    linkActiveClass: 'active',
    routes: routerOption
})

router.beforeEach((to, from, next) => {
    // store.commit(storeTypes.SWITCH_LOADING, true)
    next(true)
})
router.afterEach((to, from) => {
    // console.log('after each....', to.name, store.state.activeMenuCode)
})
export default router
