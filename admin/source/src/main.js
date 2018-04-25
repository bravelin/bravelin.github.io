/**
 * 主入口文件
 */
import Vue from 'vue'
import store from './store/index'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 调试之用
window['_store'] = store

/* eslint-disable no-new */
new Vue({el: '#app', router, store, render: h => h(App)})
