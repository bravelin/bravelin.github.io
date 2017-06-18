/**
 * main.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import { Global } from './libs/global'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.http.headers.common['X-APICloud-AppId'] = 'A6931492233958'
Vue.component('comments', require('./components/comments.vue'))
Vue.filter('timeFormatter', require('./filters/time-formatter'))

window['_g'] = Global
var _global = Global
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
        path: '/working/ubuntu/1',
        name: 'working-ubuntu-1',
        component: function (resolve) {
            require(['./views/working/ubuntu/1.vue'], resolve)
        }
    },
    {
        path: '/working/atom/1',
        name: 'working-atom-1',
        component: function (resolve) {
            require(['./views/working/atom/1.vue'], resolve)
        }
    },
    {
        path: '/working/project/git',
        name: 'working-project-git',
        component: function (resolve) {
            require(['./views/working/project/git.vue'], resolve)
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
        path: '/learning/es6/1',
        name: 'learning-es6-1',
        component: function (resolve) {
            require(['./views/learning/es6/1.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/2',
        name: 'learning-es6-2',
        component: function (resolve) {
            require(['./views/learning/es6/2.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/3',
        name: 'learning-es6-3',
        component: function (resolve) {
            require(['./views/learning/es6/3.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/4',
        name: 'learning-es6-4',
        component: function (resolve) {
            require(['./views/learning/es6/4.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/5',
        name: 'learning-es6-5',
        component: function (resolve) {
            require(['./views/learning/es6/5.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/6',
        name: 'learning-es6-6',
        component: function (resolve) {
            require(['./views/learning/es6/6.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/7',
        name: 'learning-es6-7',
        component: function (resolve) {
            require(['./views/learning/es6/7.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/8',
        name: 'learning-es6-8',
        component: function (resolve) {
            require(['./views/learning/es6/8.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/9',
        name: 'learning-es6-9',
        component: function (resolve) {
            require(['./views/learning/es6/9.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/10',
        name: 'learning-es6-10',
        component: function (resolve) {
            require(['./views/learning/es6/10.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/11',
        name: 'learning-es6-11',
        component: function (resolve) {
            require(['./views/learning/es6/11.vue'], resolve)
        }
    },
    /** ********************************************************
     * * canvas
     ***********************************************************/
    {
        path: '/learning/canvas/1',
        name: 'learning-canvas-1',
        component: function (resolve) {
            require(['./views/learning/canvas/1.vue'], resolve)
        }
    },
    {
        path: '/learning/canvas/2',
        name: 'learning-canvas-2',
        component: function (resolve) {
            require(['./views/learning/canvas/2.vue'], resolve)
        }
    },
    /**********************************************************
    **canvas例子
    **********************************************************/
    {
        path: '/example/canvas/clock',
        name: 'example-canvas-clock',
        meta: {
            shareTitle: '嘀嗒嘀嗒......',
            shareImg: '/static/assets/clock.png'
        },
        component: function (resolve) {
            require(['./views/example/canvas/clock.vue'], resolve)
        }
    },
    {
        path: '/example/canvas/rose',
        name: 'example-canvas-rose',
        meta: {
            shareTitle: '玫瑰曲线',
            shareImg: '/static/assets/clock.png'
        },
        component: function (resolve) {
            require(['./views/example/canvas/rose.vue'], resolve)
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
    }, 250)
    if (/^(home|topicArticles|topics|404|articles|about)$/.test(to.name)) {
        _global.showArticleNavMenu = (to.name == 'comments')
        _global.nextArticle = ''
        _global.prevArticle = ''
        _global.currArticleId = ''
        _global.currArticleName = ''
    } else {
        _global.setArticleNavMenu(to.name)
    }
    if (to.meta && to.meta.shareTitle && to.meta.shareImg) {
        _global.shareConfig('linz blog：' + to.meta.shareTitle, to.meta.shareImg)
    } else {
        _global.shareConfig(_global.shareTitle, _global.shareImg)
    }
})

new Vue({router, render: h => h(App)}).$mount('#app')
