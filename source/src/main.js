/**
 * main.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import { Global } from './libs/global'

Vue.use(VueRouter)
window['_g'] = Global
var _global = Global
var pageRouterList = [
  'home',
  'notes',
  'summary',
  'about',
  'working-project-gztjjweb',
  'learning-css-secrects-1',
  'learning-css-secrects-2',
  'learning-css-secrects-3',
  'learning-css-secrects-4',
  'learning-css-secrects-5',
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
})

// 其他链接
pageRouterOption.push({
  path: '*', redirect: { name: 'home' }
})

// 路由配置
var router = new VueRouter({
  linkActiveClass: 'active',
  routes: pageRouterOption
})

// console.dir(router)

// 加载页面之前
router.beforeEach(function (to, from, next) {
  _global.loading = true
  next()
})
// 加载页面之后
router.afterEach(function (to) {
  setTimeout(function () {
    _global.loading = false
  }, 500)
  if (/^(home|css|canvas|about)$/.test(to.name)) {
    _global.showArticleNavMenu = false
    _global.nextArticle = ''
    _global.prevArticle = ''
  }
})

new Vue({router, render: h => h(App)}).$mount('#app')
