/**
 * main.js
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import Comment from './components/comments.vue'
import TimeFormatter from './filters/time-formatter'
import Config from './libs/config'

import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import Preview from '@/components/preview'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.http.headers.common['X-APICloud-AppId'] = Config.appId
Vue.component('comments', Comment)
Vue.filter('timeFormatter', TimeFormatter)

Vue.component('Preview', Preview) // Preview
new Vue({router, render: h => h(App)}).$mount('#app')
