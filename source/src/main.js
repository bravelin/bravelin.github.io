/**
 * main.js
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import Comments from './components/GitComments.vue'
import TimeFormatter from './filters/time-formatter'
import Preview from '@/components/Preview'
import Banner from '@/views/Banner'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
// Vue.http.headers.common['X-APICloud-AppId'] = Config.appId
Vue.component('Comments', Comments)
Vue.filter('timeFormatter', TimeFormatter)

Vue.component('Preview', Preview) // Preview
Vue.component('Banner', Banner)
new Vue({router, render: h => h(App)}).$mount('#app')
