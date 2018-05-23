import Vue from 'vue'
import VueRouter from 'vue-router'
import Global from './libs/global'

Vue.use(VueRouter)
const global = Global
let pageRouterOption = [
    { // 首页
        path: '/home', name: 'home', component (resolve) { require(['./views/Articles.vue'], resolve) }
    },
    { // 关于页
        path: '/about', name: 'about', component (resolve) { require(['./views/About.vue'], resolve) }
    },
    { // 简历
        path: '/resume', name: 'resume', component (resolve) { require(['./views/Resume.vue'], resolve) }
    },
    { // 闲言碎语
        path: '/sentences', name: 'sentences', component (resolve) { require(['./views/Sentences.vue'], resolve) }
    },
    { // 收藏
        path: '/collect', name: 'collect', component (resolve) { require(['./views/Collect.vue'], resolve) }
    },
    { // 为翔第报考查询的分数与人数
        path: '/score', name: 'score', component (resolve) { require(['./views/other/Score.vue'], resolve) }
    },
    { // 404
        path: '/404', name: '404', component (resolve) { require(['./views/404.vue'], resolve) }
    },
    {
        path: '/articles', redirect: { name: 'home' }
    },
    {
        path: '/', redirect: { name: 'home' }
    },
    {
        path: '*', redirect: { name: '404' }
    },

    /**********************************************************************************************************
     * 工作相关总结
     **********************************************************************************************************/
    { // mpvue中使用WeCropper实现小程序中的图片裁剪
        path: '/working/wx/weCropper', name: 'working-wx-weCropper', component (resolve) { require(['./views/working/wx/WeCropper.vue'], resolve) }
    },
    { // ubuntu使用记录
        path: '/working/ubuntu/1', name: 'working-ubuntu-1', component (resolve) { require(['./views/working/ubuntu/1.vue'], resolve) }
    },
    { // git命令
        path: '/working/project/git', name: 'working-project-git', component (resolve) { require(['./views/working/project/Git.vue'], resolve) }
    },
    { // 转盘抽奖的实现
        path: '/working/canvas/turnTableDraw', name: 'working-canvas-turnTableDraw', component (resolve) { require(['./views/working/canvas/TurnTableDraw.vue'], resolve) }
    },
    { // 环境的搭建
        path: '/working/project/base', name: 'working-project-base', component (resolve) { require(['./views/working/project/Base.vue'], resolve) }
    },

     /**********************************************************************************************************
     * CSS揭密笔记
     **********************************************************************************************************/
    {
        path: '/learning/css/secrects/1', name: 'learning-css-secrects-1', component (resolve) { require(['./views/learning/css/secrects/1.vue'], resolve) }
    },
    {
        path: '/learning/css/secrects/2', name: 'learning-css-secrects-2', component (resolve) { require(['./views/learning/css/secrects/2.vue'], resolve) }
    },
    {
        path: '/learning/css/secrects/3', name: 'learning-css-secrects-3', component (resolve) { require(['./views/learning/css/secrects/3.vue'], resolve) }
    },
    {
        path: '/learning/css/secrects/4', name: 'learning-css-secrects-4', component (resolve) { require(['./views/learning/css/secrects/4.vue'], resolve) }
    },
    {
        path: '/learning/css/secrects/5', name: 'learning-css-secrects-5', component (resolve) { require(['./views/learning/css/secrects/5.vue'], resolve) }
    },
    {
        path: '/learning/css/secrects/6', name: 'learning-css-secrects-6', component (resolve) { require(['./views/learning/css/secrects/6.vue'], resolve) }
    },
    {
        path: '/learning/css/secrects/7', name: 'learning-css-secrects-7', component (resolve) { require(['./views/learning/css/secrects/7.vue'], resolve) }
    },
    {
        path: '/learning/css/secrects/8', name: 'learning-css-secrects-8', component (resolve) { require(['./views/learning/css/secrects/8.vue'], resolve) }
    },

    /**********************************************************************************************************
     * 你不知道的JavaScript笔记
     **********************************************************************************************************/
    {
        path: '/learning/javascript/1', name: 'learning-javascript-1', component (resolve) { require(['./views/learning/javascript/1.vue'], resolve) }
    },

    /**********************************************************************************************************
     * ES6笔记
     **********************************************************************************************************/
    {
        path: '/learning/es6/1', name: 'learning-es6-1', component (resolve) { require(['./views/learning/es6/1.vue'], resolve) }
    },
    {
        path: '/learning/es6/2', name: 'learning-es6-2', component (resolve) { require(['./views/learning/es6/2.vue'], resolve) }
    },
    {
        path: '/learning/es6/3', name: 'learning-es6-3', component (resolve) { require(['./views/learning/es6/3.vue'], resolve) }
    },
    {
        path: '/learning/es6/4', name: 'learning-es6-4', component (resolve) { require(['./views/learning/es6/4.vue'], resolve) }
    },
    {
        path: '/learning/es6/5', name: 'learning-es6-5', component (resolve) { require(['./views/learning/es6/5.vue'], resolve) }
    },
    {
        path: '/learning/es6/6', name: 'learning-es6-6', component (resolve) { require(['./views/learning/es6/6.vue'], resolve) }
    },
    {
        path: '/learning/es6/7', name: 'learning-es6-7', component (resolve) { require(['./views/learning/es6/7.vue'], resolve) }
    },
    {
        path: '/learning/es6/8', name: 'learning-es6-8', component (resolve) { require(['./views/learning/es6/8.vue'], resolve) }
    },
    {
        path: '/learning/es6/9', name: 'learning-es6-9', component (resolve) { require(['./views/learning/es6/9.vue'], resolve) }
    },
    {
        path: '/learning/es6/10', name: 'learning-es6-10', component (resolve) { require(['./views/learning/es6/10.vue'], resolve) }
    },
    {
        path: '/learning/es6/11', name: 'learning-es6-11', component (resolve) { require(['./views/learning/es6/11.vue'], resolve) }
    },

     /**********************************************************************************************************
     * Canvas笔记
     **********************************************************************************************************/
    {
        path: '/learning/canvas/1', name: 'learning-canvas-1', component (resolve) { require(['./views/learning/canvas/1.vue'], resolve) }
    },
    {
        path: '/learning/canvas/2', name: 'learning-canvas-2', component (resolve) { require(['./views/learning/canvas/2.vue'], resolve) }
    },
    {
        path: '/learning/canvas/3', name: 'learning-canvas-3', component (resolve) { require(['./views/learning/canvas/3.vue'], resolve) }
    },
    {
        path: '/learning/canvas/4', name: 'learning-canvas-4', component (resolve) { require(['./views/learning/canvas/4.vue'], resolve) }
    },

    /**********************************************************************************************************
     * React笔记
     **********************************************************************************************************/
    {
        path: '/learning/react/1', name: 'learning-react-1', component (resolve) { require(['./views/learning/react/1.vue'], resolve) }
    },
    {
        path: '/learning/react/2', name: 'learning-react-2', component (resolve) { require(['./views/learning/react/2.vue'], resolve) }
    },

    /**********************************************************************************************************
     * Canvas例子
     **********************************************************************************************************/
    {
        path: '/example/canvas/clock', name: 'example-canvas-clock', meta: { shareTitle: '嘀嗒嘀嗒......', shareImg: '/static/assets/clock.png' }, component (resolve) { require(['./views/example/canvas/Clock.vue'], resolve) }
    },
    {
        path: '/example/canvas/rose', name: 'example-canvas-rose', component (resolve) { require(['./views/example/canvas/Rose.vue'], resolve) }
    },

    /**********************************************************************************************************
     * 感想
     **********************************************************************************************************/
    {
        path: '/other/tour', name: 'other-tour', component (resolve) { require(['./views/other/Tour.vue'], resolve) }
    }
]

// 路由配置
const router = new VueRouter({
    linkActiveClass: 'active',
    routes: pageRouterOption
})

// 加载页面之前
router.beforeEach((to, from, next) => {
    global.loading = true
    global.currPage = to.name
    global.currPageParams = to.query
    next()
})

// 加载页面之后
router.afterEach(to => {
    global.hasCatalog = false
    setTimeout(() => {
        if (global.articleList.length != 0) {
            global.loading = false
        }
        window.scrollTo(0, sessionStorage.getItem(global.currPage) || 0)
    }, 250)
    if (/^(home|sentences|404|articles|collect|about)$/.test(to.name)) {
        global.nextArticle = ''
        global.prevArticle = ''
        global.currArticleId = ''
        global.currArticleName = ''
        global.showArticleNavMenu = false
    } else {
        global.setArticleNavMenu(to.name)
    }
    if (to.meta && to.meta.shareTitle && to.meta.shareImg) {
        global.shareConfig('Lin\'s Notes：' + to.meta.shareTitle, to.meta.shareImg)
    } else {
        global.shareConfig(global.shareTitle, global.shareImg)
    }
})

export default router
