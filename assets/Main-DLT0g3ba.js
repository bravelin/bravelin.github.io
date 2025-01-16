import{_ as a,m as r,p as o,h as t,o as u,e as n,q as p}from"./index-CB7K47Ib.js";const s={};function i(y,e){const l=t("MyArticle");return u(),r(l,{title:"基于西瓜播放器xgplayer封装视频直播/点播组件",date:"2024年10月24日"},{default:o(()=>e[0]||(e[0]=[n("div",{class:"_article-content"},[n("p",null,[p("目标构建一个支持直播、点播，支持mp4、flv、hls格式的视频播放Vue3组件，xgPlayer文档地址："),n("a",{href:"https://v2.h5player.bytedance.com/gettingStarted/",target:"_blank"},"https://v2.h5player.bytedance.com/gettingStarted/")]),n("p",null,"package.json增加以下依赖项："),n("pre",null,[n("code",null,`yarn add xgplayer
yarn add xgplayer-flv
yarn add xgplayer-hls`)]),n("p",null,"在main.js中全局引入样式文件："),n("pre",null,[n("code",null,"import 'xgplayer/dist/index.min.css'")]),n("p",null,"定义Dom结构："),n("pre",null,[n("code",null,`<div class="_video-player">
    <div v-show="url" ref="videoEl" class="_container"></div>
    <div v-show="!url" class="_no-video-url">
        <span>监控播放出错</span>
    </div>
</div>`)]),n("p",null,"定义该组件props："),n("pre",null,[n("code",null,`props: {
    url: { // 播放地址
        type: String,
        default: ''
    },
    poster: { // 视频封面图
        type: String,
        default: ''
    },
    autoplay: { // 是否自动播放
        type: Boolean,
        default: true
    },
    live: { // 是否直播
        type: Boolean,
        default: true
    },
    loop: { // 是否循环
        type: Boolean,
        default: false
    },
    fullevent: { // 是否监听/拦截fullscreen事件
        type: Boolean,
        default: false
    }
}`)]),n("p",null,"解构Props，定义相关变量："),n("pre",null,[n("code",null,`const { url, live, loop, fullevent, autoplay, poster } = toRefs(props)
const videoEl = ref(null)
let playerObj = null // 播放器对象
let currVideoType = '' // 当前视频类型
const isPaused = ref(false) // 是否暂停
let isReady = false`)]),n("p",null,"视频类型判定："),n("pre",null,[n("code",null,`const videoType = computed(() => { // 视频类型
    if (/\\.flv/.test(url.value)) {
        return 'flv'
    } else if (/\\.mp4/.test(url.value)) {
        return 'mp4'
    } else if (/m3u8/.test(url.value)) {
        return 'hls'
    }
    return ''
})`)]),n("p",null,"开始播放逻辑："),n("pre",null,[n("code",null,`const doStartPlay = () => {
    isReady = false
    if (url.value) {
        if (!playerObj) {
            const option = {
                el: videoEl.value,
                url: url.value,
                isLive: live.value,
                loop: loop.value,
                lang: 'zh-cn',
                playsinline: false,
                videoFillMode: 'fill',
                cssFullscreen: false,
                playbackRate: false,
                plugins: null
            }
            if (poster.value) {
                option.poster = poster.value
            }
            if (autoplay.value) {
                option.autoplay = true
                option.autoplayMuted = true
            } else {
                option.autoplay = false
            }
            // console.log('videoType.value....', videoType.value)
            if (videoType.value == 'hls') {
                option.plugins = [HlsPlugin]
            } else if (videoType.value == 'flv') {
                option.plugins = [FlvPlugin]
            }
            playerObj = new Player(option)
            currVideoType = videoType.value

            // 拦截全屏操作
            if (fullevent.value) {
                playerObj.usePluginHooks('fullscreen', 'fullscreenChange', () => {
                    emit('full')
                    return false
                })
            }
            playerObj.on('error', (error) => {
                console.log('player error....', error)
            })

            playerObj.on('canplay', () => {
                if (!isReady) {
                    emit('ready')
                    isReady = true
                }
            })
        } else {
            if (currVideoType == videoType.value) {
                playerObj.switchURL(url.value)
                rePlay()
            } else {
                playerObj.destroy()
                playerObj = null
                setTimeout(() => { doStartPlay() }, 15)
            }
        }
    }
}`)]),n("p",null,"暂停与继续播放："),n("pre",null,[n("code",null,`const pause = () => { // 暂停
    if (playerObj && !playerObj.paused) {
        playerObj.pause()
    }
}
const rePlay = () => { // 继续播放
    if (playerObj && playerObj.paused) {
        playerObj.play()
    }
}`)]),n("p",null,"当播放地址url改变时候的处理逻辑："),n("pre",null,[n("code",null,`watch(url, (newVal) => {
    if (newVal) {
        doStartPlay()
    } else {
        if (playerObj) { // 销毁之
            playerObj.destroy()
            playerObj = null
        }
    }
})`)]),n("p",null,"组件钩子函数中的处理："),n("pre",null,[n("code",null,`onMounted(() => {
    if (url.value) {
        doStartPlay()
    }
})
onBeforeUnmount(() => {
    if (playerObj) {
        playerObj.destroy()
        playerObj = null
    }
})`)])],-1)])),_:1})}const c=a(s,[["render",i]]);export{c as default};
