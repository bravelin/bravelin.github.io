/**
 * 封装的ajax请求方法
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import sha from './sha'
import Config from './config'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.http.headers.common['X-APICloud-AppId'] = Config.appId
const AppKey = Config.appId + 'UZ' + Config.appKey + 'UZ'

Vue.http.interceptors.push((request, next) => { // 设置全局的请求参数
    let requestParam
    if (request.method.toLowerCase() === 'get') {
        request.params = request.params || {}
        requestParam = request.params
        requestParam['_'] = (+new Date()) // 时间戳
    }
    let now = (+new Date())
    let appKey = sha(AppKey + now) + '.' + now
    request.headers.set('X-APICloud-AppKey', appKey)
})

export default function fetch (options) {
    options.method = options.method || 'GET'
    if (options.data) {
        options.body = options.data
    }
    return new Promise((resolve, reject) => {
        Vue.http(options).then((res) => {
            res = res.body
            resolve(res)
        }, (error) => {
            reject(error)
        })
    })
}
