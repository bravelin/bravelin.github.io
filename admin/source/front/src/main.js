/**
 * 主入口文件
 */
import Vue from 'vue'
import store from './store/index'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

require('swiper/dist/css/swiper.css')
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({el: '#app', router, store, render: h => h(App)})
