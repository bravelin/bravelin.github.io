const defaultUrl = './exp/0.jpg' // 全景图地址

// 从链接上获取图片的url
let querys = location.search
const paramsObj = {}
if (querys) {
    querys = querys.slice(1)
    const queryArr = querys.split('&')
    if (queryArr) {
        queryArr.forEach(function (item) {
            let itemArr = item.split('=')
            if (itemArr && itemArr.length == 2) {
                paramsObj[itemArr[0]] = decodeURIComponent(itemArr[1])
            }
        })
    }
}

// 全景图图片url
const url = paramsObj.url || defaultUrl

document.addEventListener('DOMContentLoaded', function () {
    const ua = navigator.userAgent.toLowerCase()
    if (/miniProgram/i.test(ua)) { // 小程序中
        initViewer(true)
    } else {
        const timer = setTimeout(function () {
            initViewer(false)
        }, 1000)
        wx.miniProgram.getEnv(function (res) { // 非微信浏览器中不会触发回调
            clearTimeout(timer)
            initViewer(res.miniprogram)
        })
    }
    document.getElementById('back-button').onclick = function () {
        wx.miniProgram.reLaunch({ url: '/pages/video/video' })
    }
})

// flag为true表明是在小程序中
function initViewer (flag) {
    new PhotoSphereViewer({
        panorama: url,
        container: document.getElementById('app'),
        time_anim: false,
        default_fov: 90,
        navbar: ['autorotate', 'download', 'markers', 'caption', 'gyroscope', 'stereo', 'fullscreen']
    })
    if (flag) {
        document.getElementById('back-button').style.zIndex = 99999
    }
}