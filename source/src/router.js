import Vue from 'vue'
import VueRouter from 'vue-router'
import Global from './libs/global'

Vue.use(VueRouter)
const _global = Global
let pageRouterOption = [
    {
        path: '/home',
        name: 'home',
        component (resolve) {
            require(['./views/articles.vue'], resolve)
        }
    },
    {
        path: '/topics',
        name: 'topics',
        component (resolve) {
            require(['./views/topics.vue'], resolve)
        }
    },
    {
        path: '/comments',
        name: 'comments',
        component (resolve) {
            require(['./views/comments.vue'], resolve)
        }
    },
    {
        path: '/about',
        name: 'about',
        component (resolve) {
            require(['./views/about.vue'], resolve)
        }
    },
    {
        path: '/resume',
        name: 'resume',
        component (resolve) {
            require(['./views/resume.vue'], resolve)
        }
    },
    {
        path: '/score',
        name: 'score',
        component (resolve) {
            require(['./views/other/score.vue'], resolve)
        }
    },
    {
        path: '/topicArticles',
        name: 'topicArticles',
        component (resolve) {
            require(['./views/topicArticles.vue'], resolve)
        }
    },
    {
        path: '/404',
        name: '404',
        component (resolve) {
            require(['./views/404.vue'], resolve)
        }
    },
    {
        path: '/working/project/gztjjweb',
        name: 'working-project-gztjjweb',
        component (resolve) {
            require(['./views/working/project/gztjjweb.vue'], resolve)
        }
    },
    {
        path: '/working/ubuntu/1',
        name: 'working-ubuntu-1',
        component (resolve) {
            require(['./views/working/ubuntu/1.vue'], resolve)
        }
    },
    {
        path: '/working/atom/1',
        name: 'working-atom-1',
        component (resolve) {
            require(['./views/working/atom/1.vue'], resolve)
        }
    },
    {
        path: '/working/project/git',
        name: 'working-project-git',
        component (resolve) {
            require(['./views/working/project/git.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/1',
        name: 'learning-css-secrects-1',
        component (resolve) {
            require(['./views/learning/css/secrects/1.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/2',
        name: 'learning-css-secrects-2',
        component (resolve) {
            require(['./views/learning/css/secrects/2.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/3',
        name: 'learning-css-secrects-3',
        component (resolve) {
            require(['./views/learning/css/secrects/3.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/4',
        name: 'learning-css-secrects-4',
        component (resolve) {
            require(['./views/learning/css/secrects/4.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/5',
        name: 'learning-css-secrects-5',
        component (resolve) {
            require(['./views/learning/css/secrects/5.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/6',
        name: 'learning-css-secrects-6',
        component (resolve) {
            require(['./views/learning/css/secrects/6.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/7',
        name: 'learning-css-secrects-7',
        component (resolve) {
            require(['./views/learning/css/secrects/7.vue'], resolve)
        }
    },
    {
        path: '/learning/css/secrects/8',
        name: 'learning-css-secrects-8',
        component (resolve) {
            require(['./views/learning/css/secrects/8.vue'], resolve)
        }
    },
    {
        path: '/working/canvas/turnTableDraw',
        name: 'working-canvas-turnTableDraw',
        component (resolve) {
            require(['./views/working/canvas/turnTableDraw.vue'], resolve)
        }
    },
    {
        path: '/working/project/base',
        name: 'working-project-base',
        component (resolve) {
            require(['./views/working/project/base.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/1',
        name: 'learning-es6-1',
        component (resolve) {
            require(['./views/learning/es6/1.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/2',
        name: 'learning-es6-2',
        component (resolve) {
            require(['./views/learning/es6/2.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/3',
        name: 'learning-es6-3',
        component (resolve) {
            require(['./views/learning/es6/3.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/4',
        name: 'learning-es6-4',
        component (resolve) {
            require(['./views/learning/es6/4.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/5',
        name: 'learning-es6-5',
        component (resolve) {
            require(['./views/learning/es6/5.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/6',
        name: 'learning-es6-6',
        component (resolve) {
            require(['./views/learning/es6/6.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/7',
        name: 'learning-es6-7',
        component (resolve) {
            require(['./views/learning/es6/7.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/8',
        name: 'learning-es6-8',
        component (resolve) {
            require(['./views/learning/es6/8.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/9',
        name: 'learning-es6-9',
        component (resolve) {
            require(['./views/learning/es6/9.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/10',
        name: 'learning-es6-10',
        component (resolve) {
            require(['./views/learning/es6/10.vue'], resolve)
        }
    },
    {
        path: '/learning/es6/11',
        name: 'learning-es6-11',
        component (resolve) {
            require(['./views/learning/es6/11.vue'], resolve)
        }
    },
    /** ********************************************************
     * * canvas
     ***********************************************************/
    {
        path: '/learning/canvas/1',
        name: 'learning-canvas-1',
        component (resolve) {
            require(['./views/learning/canvas/1.vue'], resolve)
        }
    },
    {
        path: '/learning/canvas/2',
        name: 'learning-canvas-2',
        component (resolve) {
            require(['./views/learning/canvas/2.vue'], resolve)
        }
    },
    {
        path: '/learning/canvas/3',
        name: 'learning-canvas-3',
        component (resolve) {
            require(['./views/learning/canvas/3.vue'], resolve)
        }
    },
    {
        path: '/learning/canvas/4',
        name: 'learning-canvas-4',
        component (resolve) {
            require(['./views/learning/canvas/4.vue'], resolve)
        }
    },
     /**********************************************************
    **react
    **********************************************************/
    {
        path: '/learning/react/1',
        name: 'learning-react-1',
        component (resolve) {
            require(['./views/learning/react/1.vue'], resolve)
        }
    },
    {
        path: '/learning/react/2',
        name: 'learning-react-2',
        component (resolve) {
            require(['./views/learning/react/2.vue'], resolve)
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
        component (resolve) {
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
        component (resolve) {
            require(['./views/example/canvas/rose.vue'], resolve)
        }
    },
    {
        path: '/other/tour',
        name: 'other-tour',
        meta: {
            shareTitle: '汕头行',
            shareImg: '/static/assets/clock.png'
        },
        component (resolve) {
            require(['./views/other/tour.vue'], resolve)
        }
    },
    {
        path: '/',
        redirect: {name: 'home'}
    },
    {
        path: '/articles',
        redirect: {name: 'home'}
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
// 加载页面之前
router.beforeEach(function (to, from, next) {
    _global.loading = true
    _global.currPage = to.name
    _global.currPageParams = to.query
    next()
})
// 加载页面之后
router.afterEach(function (to) {
    _global.hasCatalog = false
    setTimeout(function () {
        _global.loading = false
        window.scrollTo(0, sessionStorage.getItem(_global.currPage) || 0)
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
    _global.showFooter = !/^(home|about)$/.test(to.name)
    if (to.meta && to.meta.shareTitle && to.meta.shareImg) {
        _global.shareConfig('Lin\'s Notes：' + to.meta.shareTitle, to.meta.shareImg)
    } else {
        _global.shareConfig(_global.shareTitle, _global.shareImg)
    }
})

export default router
