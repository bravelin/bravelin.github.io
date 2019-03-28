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
})

// flag为true表明是在小程序中
function initViewer (flag) {
    let navBarOptions
    if (!flag) {
        navBarOptions = ['autorotate', 'zoom', 'download', 'markers', 'caption', 'fullscreen']
    } else {
        navBarOptions = ['autorotate', 'zoom', 'download', 'markers', {
            id: 'back-button',
            title: '返回',
            className: 'psv-button--hover-scale back-button',
            content: '<i class="back-icon"></i>',
            onClick: function () {
                wx.miniProgram.navigateBack({ delta: 2 })
            }
        }, 'caption', 'fullscreen']
    }
    new PhotoSphereViewer({
        panorama: url,
        container: document.getElementById('app'),
        time_anim: false,
        navbar: navBarOptions,
        default_fov: 90
    })
}