/**
 * main.js
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import Comment from './components/comments.vue'
import TimeFormatter from './filters/time-formatter'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.http.headers.common['X-APICloud-AppId'] = 'A6931492233958'
Vue.component('comments', Comment)
Vue.filter('timeFormatter', TimeFormatter)

new Vue({router, render: h => h(App)}).$mount('#app')
