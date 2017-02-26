/**
 * main.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './app.vue'
import { Global } from './libs/global'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.http.headers.common['X-APICloud-AppId'] = 'A6931492233958'

var Comments = require('./components/comments.vue')
Vue.component('comments', Comments)
var TimeFormatter = require('./filters/time-formatter')
Vue.filter('timeFormatter', TimeFormatter)

window['_g'] = Global
var _global = Global
/* var pageRouterList = [
 // 'home',
 'articles',
 'topics',
 'comments',
 'about',
 'topicArticles',
 '404',
 'working-project-gztjjweb',
 'learning-css-secrects-1',
 'learning-css-secrects-2',
 'learning-css-secrects-3',
 'learning-css-secrects-4',
 'learning-css-secrects-5',
 'learning-css-secrects-6',
 'learning-css-secrects-7',
 'learning-css-secrects-8',
 'working-canvas-turnTableDraw'
 ]  // 页面列表
 var pageRouterOption = []         // 构造router

 function RouterOption (name) {
 this.path = '/' + name.replace(/-/g, '/')
 this.name = name
 this.component = function (resolve) {
 require(['./views/' + name.replace(/-/g, '/') + '.vue'], resolve)
 }
 }

 pageRouterList.forEach(function (pageName) {
 pageRouterOption.push(new RouterOption(pageName))
 }) */

var pageRouterOption = [
    {
        path: '/articles',
        name: 'articles',
        component: function (resolve) {
            require(['./views/articles.vue'], resolve)
        }
    },
    {
        path: '/topics',
        name: 'topics',
        component: function (resolve) {
            require(['./views/topics.vue'], resolve)
        }
    },
    {
        path: '/comments',
        name: 'comments',
        component: function (resolve) {
            require(['./views/comments.vue'], resolve)
        }
    },
    {
        path: '/about',
        name: 'about',
        component: function (resolve) {
            require(['./views/about.vue'], resolve)
        }
    },
    {
        path: '/topicArticles',
        name: 'topicArticles',
        component: function (resolve) {
            require(['./views/topicArticles.vue'], resolve)
        }
    },
    {
        path: '/404',
        name: '404',
        component: function (resolve) {
            require(['./views/404.vue'], resolve)
        }
    },
    {
        path: '/working/project/gztjjweb',
        name: 'working-project-gztjjweb',
        component: function (resolve) {
            require(['./views/working/project/gztjjweb.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/1',
        name: 'learning-css-secrects-1',
        component: function (resolve) {
            require(['./views/learning/css/secrects/1.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/2',
        name: 'learning-css-secrects-2',
        component: function (resolve) {
            require(['./views/learning/css/secrects/2.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/3',
        name: 'learning-css-secrects-3',
        component: function (resolve) {
            require(['./views/learning/css/secrects/3.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/4',
        name: 'learning-css-secrects-4',
        component: function (resolve) {
            require(['./views/learning/css/secrects/4.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/5',
        name: 'learning-css-secrects-5',
        component: function (resolve) {
            require(['./views/learning/css/secrects/5.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/6',
        name: 'learning-css-secrects-6',
        component: function (resolve) {
            require(['./views/learning/css/secrects/6.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/7',
        name: 'learning-css-secrects-7',
        component: function (resolve) {
            require(['./views/learning/css/secrects/7.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/8',
        name: 'learning-css-secrects-8',
        component: function (resolve) {
            require(['./views/learning/css/secrects/8.vue'], resolve)
        }
    },
    {
        path: '/working/canvas/turnTableDraw',
        name: 'working-canvas-turnTableDraw',
        component: function (resolve) {
            require(['./views/working/canvas/turnTableDraw.vue'], resolve)
        }
    },
    {
        path: '/working/project/base',
        name: 'working-project-base',
        component: function (resolve) {
            require(['./views/working/project/base.vue'], resolve)
        }
    },
    {
        path: '/',
        redirect: {name: 'articles'}
    },
    {
        path: '/home',
        redirect: {name: 'articles'}
    },
    {
        path: '*',
        redirect: {name: '404'}
    }
]

// 路由配置
var router = new VueRouter({
    linkActiveClass: 'active',
    routes: pageRouterOption
})

// console.dir(router)

// 加载页面之前
router.beforeEach(function (to, from, next) {
    _global.loading = true
    _global.currPage = to.name
    _global.currPageParams = to.query
    next()
})
// 加载页面之后
router.afterEach(function (to) {
    setTimeout(function () {
        _global.loading = false
    }, 300)
    if (/^(home|topicArticles|topics|404|articles|about)$/.test(to.name)) {
        _global.showArticleNavMenu = (to.name == 'comments')
        _global.nextArticle = ''
        _global.prevArticle = ''
        _global.currArticleId = ''
        _global.currArticleName = ''
    } else {
        _global.setArticleNavMenu(to.name)
    }
})

new Vue({router, render: h => h(App)}).$mount('#app')
