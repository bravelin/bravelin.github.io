/**
 * main.js
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'

Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.http.headers.common['X-APICloud-AppId'] = 'A6931492233958'
Vue.component('comments', require('./components/comments.vue'))
Vue.filter('timeFormatter', require('./filters/time-formatter'))

new Vue({router, render: h => h(App)}).$mount('#app')
