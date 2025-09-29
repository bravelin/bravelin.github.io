import{_ as r,s as o,x as s,h as l,o as p,f as n,y as a}from"./index-CxcENImR.js";const i={};function c(d,e){const t=l("MyArticle");return p(),o(t,{title:"大华ICC平台监控对接总结",date:"2025年01月13日"},{default:s(()=>[...e[0]||(e[0]=[n("div",{class:"_article-content"},[n("p",null,[a("对接文档地址："),n("a",{href:"https://open-icc.dahuatech.com/#/home",target:"_blank"},"https://open-icc.dahuatech.com/#/home")]),n("p",null,[a("wsplayer文档地址："),n("a",{href:"https://open-icc.dahuatech.com/wsplayer/#/start",target:"_blank"},"https://open-icc.dahuatech.com/wsplayer/#/start")]),n("p",null,"欲实现在自主平台播放大华ICC监控视频，需对接以下接口："),n("p",null,"1、鉴权相关接口："),n("pre",null,[n("code",null,`获取公钥： https://{host}/evo-apigw/evo-oauth/1.0.0/oauth/public-key
认证： https://{host}/evo-apigw/evo-oauth/1.0.0/oauth/extend/token
刷新认证信息： https://{host}/evo-apigw/evo-oauth/{version}/oauth/extend/refresh/token`)]),n("p",null,"2、设备组织树接口"),n("p",null,"查询设备组织树根节点和第一层节点数据："),n("pre",null,[n("code",null,`POST https://{host}/evo-apigw/admin/API/org_dev/tree
Content-Type：application/json
Body：{"menu":0,"type":"001;00;1"}`)]),n("p",null,"将返回类似以下数据："),n("pre",{style:{"max-height":"400px","overflow-y":"auto"}},[n("code",null,`{
    "code": 1000,
    "desc": "Success",
    "data": {
        "value": [
            {
                "id": "001",
                "name": "安远县果业发展服务中心",
                "pId": "", // 根节点
                "type": "org_base",
                "isParent": true,
                "iconType": "/bResource/static/image/treeIcons/org_org_base",
                "checkStat": 1,
                "sort": 1,
                "isCheck": false,
                "nodeType": "org",
                "hasMoreNode": false,
                "path": ""
            },
            {
                "id": "001002",
                "name": "亿丰龙源果业",
                "pId": "001", // 第一层节点
                "type": "org_base",
                "isParent": true,
                "iconType": "/bResource/static/image/treeIcons/org_org_base",
                "checkStat": 1,
                "sort": 1,
                "isCheck": false,
                "nodeType": "org",
                "hasMoreNode": false,
                "path": ""
            },
            {
                "id": "001003",
                "name": "橙香源果业",
                "pId": "001", // 第一层节点
                "type": "org_base",
                "isParent": true,
                "iconType": "/bResource/static/image/treeIcons/org_org_base",
                "checkStat": 1,
                "sort": 2,
                "isCheck": false,
                "nodeType": "org",
                "hasMoreNode": false,
                "path": ""
            },
            ......
        ]
    }
}`)]),n("p",null,"获取某个节点的子节点数据，接口地址同上，但传入参数不一样："),n("pre",null,[n("code",null,`POST https://{host}/evo-apigw/admin/API/org_dev/tree
Content-Type：application/json
Body：{"id":"001003","checkStat":1,"menu":0,"type":"001;00;1"} // id为该节点ID`)]),n("p",null,"将返回子节点数据："),n("pre",{style:{"max-height":"400px","overflow-y":"auto"}},[n("code",null,`{
    "code": 1000,
    "desc": "Success",
    "data": {
        "value": [
            {
                "id": "1000005$1$0$0",
                "name": "橙香源进出口",
                "pId": "001003",
                "type": "001010601",
                "isParent": false,
                "iconType": "/vss/static/image/treeIcons/ch_1_2",
                "checkStat": 1,
                "isCheck": false,
                "nodeType": "ch",
                "hasMoreNode": false,
                "path": "",
                "deviceCategory": 1,
                "deviceType": 6,
                "deviceModel": "4",
                "isOnline": 1,
                "capability": "00000000000000010000000000000001",
                "channelType": "1",
                "ownerCode": "001003",
                "cameraType": "2",
                "unitType": 1,
                "deviceCode": "1000005",
                "channelCode": "1000005$1$0$0",
                "channelSeq": "0"
            },
            {
                "id": "1000005$1$0$1",
                "name": "橙香源生产区",
                "pId": "001003",
                "type": "001010601",
                "isParent": false,
                "iconType": "/vss/static/image/treeIcons/ch_1_1",
                "checkStat": 1,
                "isCheck": false,
                "nodeType": "ch",
                "hasMoreNode": false,
                "path": "",
                "deviceCategory": 1,
                "deviceType": 6,
                "deviceModel": "4",
                "isOnline": 1,
                "capability": "00000000000000000000000000000001",
                "channelType": "1",
                "ownerCode": "001003",
                "cameraType": "1",
                "unitType": 1,
                "deviceCode": "1000005",
                "channelCode": "1000005$1$0$1",
                "channelSeq": "1"
            },
            ......
        ]
    },
    "success": true
}`)]),n("p",null,"3、获取监控播放地址接口"),n("p",null,"子节点数据中的channelCode字段为该设备的通道号，传入以下接口，获取其rtsp播放地址："),n("pre",null,[n("code",null,`POST：https://{host}/evo-apigw/admin/API/MTS/Video/StartVideo
Content-Type：application/json
Body：{
    "data": {
        "channelId": "1000005$1$0$1",
        "clientSupportWSSDirect": 1,
        "dataType": "3",
        "streamType": "1"
    }
}`)]),n("p",null,"返回结果如下："),n("pre",null,[n("code",null,`{
    "code": 1000,
    "desc": "Success",
    "data": {
        "minRate": null,
        "protocol": null,
        "ip": null,
        "port": null,
        "stunEnable": null,
        "stunPort": null,
        "url": "rtsp://110.22.11.217:9102/dss/monitor/param/cameraid=1000005%241%26substream=1|rtsp://192.168.1.118:9102/dss/monitor/param/cameraid=1000005%241%26substream=1",
        "urlList": null,
        "connectType": null,
        "session": "10245",
        "token": "10245",
        "trackId": null,
        "stream": null,
        "innerIp": "192.168.1.118",
        "compress": false,
        "reachable": null,
        "wssDirect": 1,
        "netFlag": ""
    },
    "success": true
}`)]),n("p",null,"返回的字段从url中取出，竖线分割，并拼接token值："),n("pre",null,[n("code",null,"rtsp://110.22.11.217:9102/dss/monitor/param/cameraid=1000005%241%26substream=1?token=10245")]),n("p",null,"对应的websocket地址取ip+端口号："),n("pre",null,[n("code",null,"wss://110.22.11.217:9102")]),n("p",null,"如果当前页面是http协议，参数clientSupportWSSDirect传0，将返回端口为9100的播放地址，对应的websocket地址也需要相应改变："),n("pre",null,[n("code",null,`rtsp://110.22.11.217:9100/dss/monitor/param/cameraid=1000005%241%26substream=1?token=10245
ws://110.22.11.217:9100`)]),n("p",null,"wsplayer播放器调用播放方法需要用到上述两个地址。"),n("p",null,"页面引入wsplayer播放器的相关脚本文件："),n("pre",null,[n("code",null,`<script type="text/javascript" src="./js/WSPlayer/PlaySDKInterface.js"><\/script>
<script type="text/javascript" src="./js/WSPlayer/WSPlayer.js"><\/script>`)]),n("p",null,"PlayerManager改造如下："),n("pre",{style:{"max-height":"400px","overflow-y":"auto"}},[n("code",null,`export default class PlayerManager {
    constructor(opt) {
        // 播放器所在的容器ID
        this.el = opt.el;
        // 实时预览播放器
        this.realPlayer = null;
        // 录像回放播放器
        this.recordPlayer = null;
        this.player = null;
        // 实时预览还是录像回放播放器
        this.type = "real";
        // 窗口的数量
        this.playNum = 1;
        // 当前选中的窗口的索引
        this.playIndex = 0;
        // 当前选中窗口正在播放视频的通道
        this.currentChannelId = "";
        // 索引对应窗口，保存当日录像信息
        this.recordList = [];

        /**
         * 兼容老版本字段 【已废弃】
         * 在 ws/wss 直连模式下, serverIp 表示MTS流媒体服务 IP
         * 在 代理 模式下, serverIp 表示的是 代理服务器的IP 地址
         */
         this.serverIp = opt.serverIp

         /**
          * V1.2.8 版本新增字段
          * 解码库资源文件前缀
          */
         this.prefixUrl = opt.prefixUrl || './static'
         /**
          * V1.2.8 版本新增字段
          * 优先级最高，该方法传入后
          * 结构如下：
          * eg:
          * (rtspUrl) => {
          *     return "wss://{ip}:9102"
          * }
          * 配置后：protocol, isIntranet, proxyServerIp, streamServerIp
          */
         this.setWSUrl = opt.setWSUrl
        /**
         * V1.2.8 版本新增字段
         * websocket协议，http支持wss协议拉流，因此增加protocol配置
         */
        this.protocol = opt.protocol
        /**
         * V1.2.8 版本新增字段[组合使用]
         * @desc 注意事项： 用于有内外网场景和分布式场景
         * @param isIntranet 是否内网, 用于有内外网环境，多台大华服务器[分布式]拉流场景配置
         * @param intranetMap 映射关系，结构 { "内网ip": "外网ip", ... }
         *
         */
        this.isIntranet = opt.isIntranet
        this.intranetMap = opt.intranetMap
         /**
          * V1.2.7 版本新增字段
          * 用于只有内网
          * @desc 代理 模式下，代理服务器的IP 地址
          * 如果代理服务有端口则拼接端口
          *
          */
         this.proxyServerIp = opt.proxyServerIp
         /**
          * V1.2.7 版本新增字段
          * 用于只有内网
          * @desc 流媒体服务 IP 地址
          * 如果拉流的 9100 9320 端口发生修改，则需要后面拼接修改后的端口
          */
         this.streamServerIp = opt.streamServerIp
         /**
          * V1.2.7 版本新增字段
          * @desc 模式类型 是直连模式/代理模式
          */
         this.useNginxProxy = opt.useNginxProxy || false

        this.initPlayer(opt)
    }

    // 初始化播放器
    initPlayer(opt) {
        // 初始化播放器
        if(window.WSPlayer.WSPlayer) {
            window.WSPlayer = window.WSPlayer.WSPlayer
        }
        switch(opt.type) {
            case "real":
                this.initRealPlayer(opt);
                break;
            case "record":
                this.initRecordPlayer(opt);
                break;
            default:
                break;
        }
    }

    /**
     * 初始化实时预览播放器
     */
    initRealPlayer(opt) {
        this.playNum = opt.num;
        this.type = "real";
        this.realPlayer = new WSPlayer({
            el: this.el,
            type: 'real',
            importLoad: opt.importLoad, // 是否动态加载库
            serverIp: this.serverIp, // V1.2.7 版本已废弃[兼容老版本]
            prefixUrl: this.prefixUrl, // 解码库资源前缀
            protocol: this.protocol, // 协议 ws  wss
            isIntranet: this.isIntranet, // 传入当前是 内网还是外网, true-内网 false-外网. 内外网 + 分布式下, 使用该模式
            intranetMap: this.intranetMap, // 传入当前的内外网关系映射 {"内网ip": "外网ip"}.  内外网 + 分布式下, 使用该模式
            proxyServerIp: this.proxyServerIp, // V1.2.7 版本新增该配置 代理服务器的ip 【ws/wss直连时不传】
            streamServerIp: this.streamServerIp, // V1.2.7 版本新增该配置 流媒体服务器的ip
            rtspResponseTimeout: opt.rtspResponseTimeout, // rtsp 拉流超时时间
            setWSUrl: this.setWSUrl, // 开放式的 传入函数， return websocket 连接地址，第三方自行处理
            config: {
                num: opt.num,
                maxNum: opt.maxNum,
                showControl: opt.showControl, // 默认是否显示工具栏
                useNginxProxy: this.useNginxProxy, // V1.2.7 版本新增该配置 直连时需要改为 false, 代理模式为 true
                showIcons: opt.showIcons || {
                    streamChangeSelect: true, // 主辅码流切换
                    replayIcon:true, // 刷新重播按钮
                    ivsIcon: true, // 控制智能帧按钮
                    talkIcon: true, // 对讲功能按钮
                    localRecordIcon: true, // 本地录像功能按钮
                    audioIcon: true, // 开启关闭声音按钮
                    snapshotIcon: true, // 抓图按钮
                    closeIcon: true, // 关闭视频按钮
                }, // V1.2.8 新增配置 顶部按钮自定义
                openIvs: typeof opt.openIvs === 'boolean' ? opt.openIvs : true, // 默认显示智能帧
                draggable: opt.draggable, // 1.3.0 新增，是否支持拖拽
                downloadMp4Record: typeof opt.downloadMp4Record === 'boolean' ? opt.downloadMp4Record : true,
                useH265MSE: typeof opt.useH265MSE === 'boolean' ? opt.useH265MSE : true,
                localeLang: opt.localeLang || 'zhCN', // zhCN 中文 enUS 英文
                localeI18n: opt.localeI18n, // 1.3.2新增配置
                cacheMode: opt.cacheMode || 1, //1.3.4新增 0-关闭实时流自适应缓冲模式 1-自适应缓冲 2-实时优先 3-流畅优先 4-智能缓冲模式
                ivsTypeArr: opt.ivsTypeArr || [1, 2], // 传入数组，支持显示的情况, 空表示没有智能信息，1-智能规则线 2-智能目标框
                isWebView: opt.isWebView, // 是否webview引擎 true-是 false-不是
                picCapCb: opt.picCapCb, // 是否需要抓图回调
                onlyLoadSingleLib: true
            },
            receiveMessageFromWSPlayer: opt.receiveMessageFromWSPlayer || this.__receiveMessageFromWSPlayer.bind(this),
            getRealRtsp: () => {}, // 获取实时预览rtsp接口 (不要做任何改动, 只传入方法, API.getRealmonitor() 是错误的， 会报错)
            getTalkRtsp: () => {}, // 获取对讲rtsp接口  (不要做任何改动, 只传入方法, API.getTalkRtsp() 是错误的， 会报错)
            stopTalk: () => {}, // 关闭对讲rtsp接口  (不要做任何改动, 只传入方法, API.stopTalk() 是错误的， 会报错)
        })
        this.player = this.realPlayer;
        // 初始化云台控制组件
        // if(opt.pztEl) {
        //     this.realPlayer.initPanTilt({
        //         // 云台控制容器的id
        //         el: opt.pztEl,
        //         // 云台区域控制接口
        //         // setPtzDirection: API.setPtzDirection,
        //         // 云台镜头控制接口
        //         // setPtzCamera: API.setPtzCamera,
        //         // 云台三维定位接口
        //         // controlSitPosition: API.controlSitPosition
        //     })
        // }
    }

    /**
     * 播放实时预览视频
     * @param opt.channelList: {Array<Object>} 必填，通道列表
     * @param opt.streamType: {Number|String} 选填，码流类型，不填默认播放辅码流1，若不存在辅码流1，则自动切换到主码流  1-主码流 2-辅码流1 3-辅码流2
     * @param opt.windowIndex: {Number} 选填，指定从哪个窗口开始播放。不填默认从选中的窗口开始播放
     */
    // channelList: [{
    //     id: channelCode, // {String} 通道编码 -- 用于预览，必填
    //     deviceCode: deviceCode, // {String} 设备编码 -- 用于对讲，对讲必填，无对讲功能可不填
    //     deviceType: deviceType, // {String} 设备类型 -- 用于对讲，对讲必填，无对讲功能可不填
    //     channelSeq: channelSeq, // {String|Number} 通道序号 -- 用于对讲，对讲必填，无对讲功能可不填
    //     cameraType: cameraType, // {String|Number} 摄像头类型 -- 用于云台，云台必填，无云台功能可不填
    //     capability: capability, // {String} 能力集 -- 用于云台，云台必填，无云台功能可不填
    // }]
    playRealVideo(opt) {
        this.realPlayer && this.realPlayer.playRealVideo({
            channelList: opt.channelList,
            streamType: opt.streamType,
            windowIndex: opt.windowIndex
        })
    }

    /**
     * 传入 wsUri 和 wsUrl 播放预览视频
     * @param { String } opt.rtspURL 必传 rtsp流地址
     * @param { String } opt.wsURL 必传 建立的websocket连接地址
     * @param { String } opt.channelId 必传 通道id
     * @param { String } opt.streamType 必传 码流类型 1-主码流 2-辅码流1  3-辅码流2
     * @param { String } opt.streamServerIp 选传 流媒体服务ip
     * @param { String } opt.playerAdapter 选传 是否拉伸窗口 selfAdaption 自适应 | stretching 拉伸
     * @param { Number } opt.selectIndex 必传 窗口号 从0开始
     * @param { Object } opt.channelData 选传 通道信息，若使用云台功能，则必传
     */
    realByUrl(opt) {
        this.realPlayer && this.realPlayer.realByUrl(opt)
    }

    /**
     * @name talkByUrl
     * @desc 通过流地址方式进行对讲
     * @param playTalk 流地址方式
     * @param rtspURL rtsp的地址
     * @param wsURL websocket地址
     * @param selectIndex 窗口号
     * @param audioType 音频类型
     */
    talkByUrl(opt) {
        this.realPlayer && this.realPlayer.talkByUrl(opt)
    }

    /**
     * @name 停止流地址对讲
     * @desc 流地址停止对讲
     */
    stopUrlTalk(windowIndex) {
        this.realPlayer && this.realPlayer.stopUrlTalk(windowIndex)
    }

    // 音量设置
    /**
     * 开启声音
     */
    openVolume(windowIndex) {
        this.player.openVolume(windowIndex)
    }

    /**
     * 关闭声音
     */
    closeVolume(windowIndex) {
        this.player.closeVolume(windowIndex)
    }

    /**
     * 设置声音
     * @param volume 声音大小 传 0-1 小数点一位的小数
     */
    setVolume(windowIndex, volume) {
        this.player.setVolume(windowIndex, volume)
    }

    /**
     * 播放录像回放
     * @param opt.channelList {Array<Object>} 通道集合 必填
     * @param opt.startTime {String|Number} 开始时间  必选  timestamp到秒
     * @param opt.endTime {String|Number} 结束时间  必选  timestamp到秒
     * @param opt.recordSource {String|Number} 录像来源  必选 2表示设备录像  3表示中心录像
     * @param opt.streamType {String|Number} 码流类型 可选
     * @param opt.recordType {String|Number} 录像类型 可选
     * @param {Boolean} opt.playRecordByFile 选传 是否根据文件播放，默认为false
     */
    // channelList: [{
    //     id: channelCode, // {String} 通道编码 -- 用于回放，必填
    // }]
    playRecordVideo(opt) {
        this.recordPlayer && this.recordPlayer.playRecordVideo(opt)
    }

    /**
     * 传入 wsUri 和 wsUrl 播放回放视频
     * @param {Object} opt
     * @param {String} opt.wsURL 必传 拉流的websocket连接地址
     * @param {String} opt.rtspURL 必传 rtsp地址
     * @param {String} opt.channelId 必传 通道id
     * @param {String} opt.startTime 必传 开始时间 到秒的时间戳
     * @param {String} opt.endTime 必传 结束时间 到秒的时间戳
     * @param {String} opt.playerAdapter 选传 是否拉伸窗口 selfAdaption 自适应 | stretching 拉伸
     * @param {Number} opt.selectIndex 选传 窗口号
     * @param {Object} opt.channelData 选传 通道信息
     * @param {Array} opt.records 录像文件信息 [数组格式，用于渲染进度条]
     * @param {Boolean} opt.playRecordByTime 是否设备录像播放 true-设备录像播放，false-中心录像播放
     */
    recordByUrl(opt) {
        this.recordPlayer && this.recordPlayer.recordByUrl(opt)
    }

    /**
     * 录像暂停
     * 只有正在播放的录像调用才有效
     * @param { number } index 窗口号
     */
    pause(index) {
        this.recordPlayer && this.recordPlayer.pause(index);
    }

    /**
     * 录像暂停后播放
     * 只有暂停后的录像调用才有效
     * @param { number } index 窗口号
     */
    play(index) {
        this.recordPlayer && this.recordPlayer.play(index);
    }

    /**
     * 倍速播放
     * @param { number } speed 速率 0.125 0.25 0.5 1 1.25 1.5 2 4 8 共7种速率
     * @param { number } index 窗口号
     */
    playSpeed(speed, index) {
        this.recordPlayer && this.recordPlayer.playSpeed(speed, index);
    }

    /**
     * 关闭播放器
     * @param {number} index 可选，关闭指定索引的窗口的播放器，不传则表示关闭所有播放器
     */
    close(index) {
        this.player && this.player.close(index);
    }

    /**
     * 设置全屏
     */
    setFullScreen() {
        this.player.setFullScreen();
    }
    /**
     * 设置退出全屏
     */
    setExitFullScreen() {
        this.player.setExitFullScreen();
    }

    /**
     * 设置窗口自适应还是拉伸
     * @param {string} playerAdapter selfAdaption 自适应 | stretching 拉伸
     */
    setPlayerAdapter(playerAdapter) {
        this.player.setPlayerAdapter(playerAdapter);
    }

    /**
     * 控制视频播放器显示的路数: 1 2 3 4 6 8 9 16 25，不会超过最大显示路数
     * @param {number} number
     */
    setPlayerNum(number) {
        this.player.setPlayerNum(number);
    }

    /**
     * 设置选中的播放器的索引
     * @param {number} index 设置选中的窗口的索引
     */
    setSelectIndex(index) {
        this.player.setSelectIndex(index);
    }

    /**
     * 录像跳转播放
     * /**
     * 根据时间跳转播放
     * @param {String|Number} time
     * time格式支持情况如下：
     * new Date("2024-11-01 01:00:00") // 时间戳对象格式 (直接跳转到当前时间)
     * "2024-11-01 01:00:00" // 时间字符串 (同上)
     * "2024/11/01 01:00:00" // 时间字符串 (同上)
     * 1706979600 // 到秒时间戳, (同上)
     * "1706979600" // 到秒时间戳字符串 (同上)
     * 1706979600000 // 到毫秒时间戳 (同上)
     * "1706979600000" // 到毫秒时间戳字符串 (同上)
     * "01:00:00" // 当日时分秒跳转 (此值跳转到开始播放的当前的时间点， 如录像是 11-1号的，则跳转到 11-1号01:00:00)
     * "3600" // 1点的时间戳 (此值根据录像的开始时间，往后推1小时，跳转到这个时间点, 如开始时间为 11-1号2点，则跳转到 11-1号3点开始播放)
     * 3600 // 1点的时间戳字符串 (同上)
     * @param {number} selectIndex 窗口号
     */
    jumpPlayByTime(time, selectIndex) {
        this.player.jumpPlayByTime(time, selectIndex);
    }

    /**
     * 开始本地录像
     * @param selectIndex 选择本地录像下载的窗口索引 必填
     * @param name 录像名称 必填
     * @param size 单个录像文件大小（单位M） 可选，默认值为 ./config/config.js 中 localRecordSize
     * @param downloadMp4Record 可选，默认值为全局配置。 true - 以MP4格式下载录像，false - 以dav格式下载录像
     */
    startLocalRecord(selectIndex, name, size, downloadMp4Record) {
        this.player.startLocalRecord(selectIndex, name, size, downloadMp4Record)
    }
    /**
     * 停止本地录像下载
     * @param {Number} selectIndex 选择关闭本地录像下载的窗口索引
     */
    stopLocalRecord(selectIndex) {
        this.player.stopLocalRecord(selectIndex)
    }

    /**
     * 智能规则线和目标框设置
     * @param {Boolean} showIvs 是否显示智能规则线和目标框，true-显示，false-隐藏
     * @param {Number} selectIndex 选择的窗口号
     * @param {Array} ivsType [1] - 智能规则线， [2] - 智能目标框， [1, 2] - 规则线和智能目标框都显示
     */
    setIvs(showIvs, selectIndex, ivsType) {
        this.player.setIvs({
            showIvs,
            ivsType,
            selectIndex
        })
    }

    /**
     * 抓图
     * @param {Number} index 抓图的窗口索引
     * @param {String} name 抓图的图片名称（选填）
     */
    picCap(index, name) {
        this.player.picCap(index, name)
    }

    /**
     * 在窗口里显示自定义信息
     * @param index 窗口索引
     * @param msg 显示的信息
     * @param channelData 通道信息
     */
    showMsgInWindow(index, msg, channelData) {
        this.player.showMsgInWindow(index, msg, channelData)
    }
    /**
     * 创建自定义dom(可自定义水印,智能帧等)
     * @param {*} domId
     */
    createCustomDom(domId) {
        this.player.createCustomDom(domId)
    }

    /**
     * destroy 销毁播放器
     * @param {*} method
     * @param {*} data
     */
    destroy() {
        this.player.destroy();
    }

    // ----------------- 播放器事件 ------------------------
    __receiveMessageFromWSPlayer(method, data) {
        switch(method) {
            // ------------- 公共事件 ---------------------
            case "initializationCompleted":
                // 初始化完成，可调用播放方法（适用于动态加载解码库）
                break;
            case "realSuccess": // 实时预览成功
                console.log("实时预览成功")
                break;
            case "realError": // 实时预览失败
                console.log("实时预览失败")
                break;
            case "talkError": // 对讲失败
                console.log("对讲失败");
                break;
            case "recordSuccess": // 录像回放成功
                console.log("录像回放成功");
                break;
            case "recordError": // 录像回放失败
                console.log("录像回放失败");
                break;
            case 'recordFinish':
                console.log("当前录像播放完成", data)
                break;
            case "selectWindowChanged": // 选中的窗口发生改变
                this.currentChannelId = data.channelId;
                this.playIndex = data.playIndex;
                break;
            case "windowNumChanged": // 播放器显示的路数发生改变
                this.playNum = data;
                break;
            case "closeVideo": // 视频关闭
                // 点击关闭按钮引发的视频关闭进行提示
                // 切换视频引发的视频关闭不进行提示
                if(!data.changeVideoFlag) {
                    console.log(\`窗口\${data.selectIndex}的视频已关闭\`)
                }
                break;
            case "statusChanged": // 视频状态发生改变
                break;
            case "getVideoFrameInfo":
                // 获取视频帧信息
                break;
            case "getAudioFrameInfo":
                // 获取视频内音频帧信息
                break;
            case "getPlayBackStreamRange":
                // 获取录像回放时长
                console.log("getPlayBackStreamRange", data)
                break;
            case "dragWindow":
                // 拖拽窗口
                console.log(\`窗口\${data.dragIndex}的视频拖拽到窗口\${data.dropIndex}上\`)
                break;
            case "errorInfo": // 错误信息提示
                console.log(data, "可打印查看错误消息");
                // data = {
                //     errorCode: xxx,
                //     errorMsg: "",
                //     errorData: {
                //         channelList: [],
                //         apiErrorInfo: {},
                //         method: "",
                //         arguments: [],
                //     },
                // }
                console.error(data)
                break;
            case 'picCap': // 抓图回调，配置在 new PlayerManager 中配置 picCapCb为true后即可触发
                // data.index 窗口索引
                // data.base64Img
                break;
            default:
                break;
        }
    }
}`)]),n("p",null,"初始化PlayerManager："),n("pre",null,[n("code",{style:{"max-height":"400px","overflow-y":"auto"}},`const playerObj = new PlayerManager({
    el: 'player-container',
    type: 'real',
    maxNum: 1,
    num: 1,
    showControl: false,
    prefixUrl: 'js',
    showIcons: {
        streamChangeSelect: false,
        closeIcon: false,
        localRecordIcon: false,
        talkIcon: false,
        ivsIcon: false,
        replayIcon:true, // 刷新重播按钮
        audioIcon: true, // 开启关闭声音按钮
        snapshotIcon: true // 抓图按钮
    },
    receiveMessageFromWSPlayer: (methods, data, err) => {
        switch (methods) {
            case 'initializationCompleted': {
                // console.log('初始化完成')
                playerObj.setPlayerAdapter('stretching')
                doStartIccRealPlay()
                break
            }
            case 'realSuccess': {
                // console.log('实时预览成功')
                break
            }
            case 'realError': {
                // console.log('实时预览失败', err)
                break
            }
            case 'statusChanged': {
                // console.log('视频状态发生改变')
                break
            }
            case 'errorInfo': {
                // console.log(data, '可打印查看错误消息', err)
                break
            }
            case 'closeVideo': {
                if (!data.changeVideoFlag) {
                    console.log(\`窗口\${data.selectIndex}的视频已关闭\`)
                }
                break
            }
        }
    }
})`)]),n("p",null,"传入通道号、rtsp地址、websocket地址，播放监控："),n("pre",null,[n("code",null,`const doStartIccRealPlay = (channelCode, rtspUrl, wsUrl) => {
    const playOption = {
        rtspURL: rtspUrl,
        wsURL: wsUrl,
        selectIndex: 0,
        channelId: channelCode, // 必传, 通道id
        streamType: 1, // 必传, 码流类型
        playerAdapter: 'stretching', // 选传, selfAdaption 自适应 | stretching 拉伸
        channelData: {} // 建议传, 通道树信息
    }
    playerObj.realByUrl(playOption)
}`)]),n("p",null,"如果当前页面是https协议，播放器显示websocket连接出错，可以让浏览器先访问需要对接的大华ICC监控平台，让浏览器先认证通过该平台的证书，然后再刷新监控播放页面。")],-1)])]),_:1})}const h=r(i,[["render",c]]);export{h as default};
