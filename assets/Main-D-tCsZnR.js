import{_ as i,m as n,p,h as r,o as m,e as t,q as a}from"./index-D4Bwbg5j.js";const l={};function o(g,e){const s=r("MyArticle");return m(),n(s,{class:"spin-draw-article",title:"从无人机航拍图到高清地图影像",date:"2021年09月25日"},{default:p(()=>e[0]||(e[0]=[t("div",{class:"_article-content"},[t("p",null,"高清影像地图直观逼真、信息丰富，现实性比较强。比如google影像地图："),t("figure",null,[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV6ioe-AFuWfAAhFQc5_7qI67.webp","data-pswp-width":"1923","data-pswp-height":"958",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV6ioe-AFuWfAAhFQc5_7qI67.webp"})])]),t("p",null,"利用无人机航拍生成的地图，清晰度可以做的更高。本文介绍了从原始航拍图到生成web端高清地图影像的实现方法。"),t("h3",{class:"title"},"给航拍图片添加经纬度"),t("p",null,"获取无人机垂直镜头拍摄的照片，先查看下图片是否有GPS信息："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDCCAJU_9AARa8OVzvK802.webp","data-pswp-width":"1654","data-pswp-height":"921",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDCCAJU_9AARa8OVzvK802.webp"})])]),t("p",null,[a("如若没有GPS信息，需要将此数据从POS文件写入到图片文件中。可以写个小工具来处理：（node.js的方法，依赖库"),t("strong",null,"piexifjs"),a("）")]),t("pre",null,[t("code",null,`const fileName = img.fileName
const jpeg = fs.readFileSync(img.path)
const imageData = jpeg.toString('binary')
const exifObj = piexif.load(imageData)
const geoData = exifObj['GPS']
const convertLatObj = convertGeoNum(geo.lat)
const convertLngObj = convertGeoNum(geo.lng)
// 填充经纬度GeoData
geoData['0'] = [2, 3, 0, 0]
geoData['1'] = ['N']
geoData['2'] = [[0, 1], [0, 1], [0, 10000]]
geoData['2'][0][0] = convertLatObj.deg
geoData['2'][1][0] = convertLatObj.min
geoData['2'][2][0] = convertLatObj.sec
geoData['3'] = ['E']
geoData['4'] = [[0, 1], [0, 1], [0, 10000]]
geoData['4'][0][0] = convertLngObj.deg
geoData['4'][1][0] = convertLngObj.min
geoData['4'][2][0] = convertLngObj.sec
geoData['5'] = 0
geoData['6'] = [geo.height * 1000, 1000]
// 写入新文件中
const exifBytes = piexif.dump(exifObj)
const newData = piexif.insert(exifBytes, imageData)
const newJpeg = Buffer.from(newData, 'binary')
fs.writeFileSync(distImagePath + fileName, newJpeg)`)]),t("p",null,"convertGeoNum函数的作用是将经纬度小数形式转成度分秒格式："),t("pre",null,[t("code",null,`function convertGeoNum (num) {
    const deg = parseInt(num)
    const min = parseInt((num - deg) * 60)
    const sec = parseInt(((num - deg) * 60 - min) * 60 * 10000)
    return { deg, min, sec }
}`)]),t("p",null,"由于我们国家使用GCJ-02投影坐标系统，原始的GPS坐标在写入图片之前还需要进行转换，否则有偏移。转换算法如下："),t("pre",null,[t("code",null,`const PI = Math.PI
const EARTH_RADIUS = 6378245.0
const EE = 0.00669342162296594323

function outOfChina (lat, lng) {
    if (lng < 72.004 || lng > 137.8347) { return true }
    if (lat < 0.8293 || lat > 55.8271) { return true }
    return false
}

function transformLat (x, y) {
    let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x))
    ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0
    ret += (20.0 * Math.sin(y * PI) + 40.0 * Math.sin(y / 3.0 * PI)) * 2.0 / 3.0
    ret += (160.0 * Math.sin(y / 12.0 * PI) + 320 * Math.sin(y * PI / 30.0)) * 2.0 / 3.0
    return ret
}

function transformLng (x, y) {
    let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x))
    ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0
    ret += (20.0 * Math.sin(x * PI) + 40.0 * Math.sin(x / 3.0 * PI)) * 2.0 / 3.0
    ret += (150.0 * Math.sin(x / 12.0 * PI) + 300.0 * Math.sin(x / 30.0 * PI)) * 2.0 / 3.0
    return ret
}

function transformLatlng (wgLat, wgLon) {
    const latlng = []
    if (outOfChina(wgLat, wgLon)) {
        latlng[0] = wgLat
        latlng[1] = wgLon
        return
    }
    let dLat = transformLat(wgLon - 105.0, wgLat - 35.0)
    let dLon = transformLng(wgLon - 105.0, wgLat - 35.0)
    let radLat = wgLat / 180.0 * PI
    let magic = Math.sin(radLat)
    magic = 1 - EE * magic * magic
    let sqrtMagic = Math.sqrt(magic)
    dLat = (dLat * 180.0) / ((EARTH_RADIUS * (1 - EE)) / (magic * sqrtMagic) * PI)
    dLon = (dLon * 180.0) / (EARTH_RADIUS / sqrtMagic * Math.cos(radLat) * PI)
    latlng[0] = wgLat + dLat
    latlng[1] = wgLon + dLon
    return latlng
}
`)]),t("h3",{class:"title"},"Pix4D软件生成正射图"),t("p",null,[a("比较了多个航拍图片的处理软件，包括photoscan、webodm，发现"),t("strong",null,"Pix4D Mapper"),a("生成的正射影像图效果是目前最好的。")]),t("p",null,"新建一个项目，项目名中文也是支持的："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDTmAJ7YbAADZCo5nWcM28.webp","data-pswp-width":"1848","data-pswp-height":"1024",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDTmAJ7YbAADZCo5nWcM28.webp"})])]),t("p",null,"之后添加图片，软件会读取每张图片的元数据，直接next："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDUuAYAX8AAGz6zCPxsw51.webp","data-pswp-width":"766","data-pswp-height":"689",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDUuAYAX8AAGz6zCPxsw51.webp"})])]),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDXOAUitIAAEp40IC9To54.webp","data-pswp-width":"766","data-pswp-height":"689",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDXOAUitIAAEp40IC9To54.webp"})])]),t("p",null,"输出坐标选用自动检测的WGS84，点next："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDZyASIprAABvbhjExnQ77.webp","data-pswp-width":"766","data-pswp-height":"689",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDZyASIprAABvbhjExnQ77.webp"})])]),t("p",null,"处理模板选用3DMaps，将“开始处理”选项取消勾选，之后点finish："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDbKAbsh7AAELwAmZe7I03.webp","data-pswp-width":"766","data-pswp-height":"689",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDbKAbsh7AAELwAmZe7I03.webp"})])]),t("p",null,"点击左侧的处理选项，弹出处理选项对话框："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDdOAYn9xAAFLyuJpo2o62.webp","data-pswp-width":"1655","data-pswp-height":"946",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDdOAYn9xAAFLyuJpo2o62.webp"})])]),t("p",null,"按如下设置，我们不勾选“导出谷歌地图瓦片和KML”，因为直接导出的地图瓦片边缘因重叠率不够导致不规整，需要使用另外的工具再去裁剪（虽然pix4d也可以在开始处理之前圈定一个多边形范围进行裁剪，但那种方式是“盲圈”）："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDlKAcpgOAAFZsaW3K-416.webp","data-pswp-width":"1743","data-pswp-height":"918",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RDlKAcpgOAAFZsaW3K-416.webp"})])]),t("p",null,[t("strong",null,"最好选用CPU性能好、内存大的机器去处理此种任务。")]),t("p",null,"经过漫长时间的等待之后，我们得到了一张tif格式的正射图："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7REquAeCbtAABMw74wqVw45.webp","data-pswp-width":"744","data-pswp-height":"300",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7REquAeCbtAABMw74wqVw45.webp"})])]),t("h3",{class:"title"},"GlobalMapper裁剪边缘、导出瓦片"),t("p",null,"1、使用GlobalMapper打开tif图："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RFkqAYSe3AAjz_j0D7x070.webp","data-pswp-width":"1909","data-pswp-height":"1039",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RFkqAYSe3AAjz_j0D7x070.webp"})])]),t("p",null,"2、工具栏点击“Create Area Feature”："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RFqqARJD6AAkOjL-VWuc82.webp","data-pswp-width":"1903","data-pswp-height":"1036",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RFqqARJD6AAkOjL-VWuc82.webp"})])]),t("p",null,"3、绘制裁剪的多边形，点击右键结束绘制"),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RFymAXlpjAAeYQsDzY5A04.webp","data-pswp-width":"1905","data-pswp-height":"1032",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RFymAXlpjAAeYQsDzY5A04.webp"})])]),t("p",null,"4、输入Feature的名称，比如“cut01”，点击“ok”按钮关闭对话框："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RF1OAIgAiAAEDvNOFUKo90.webp","data-pswp-width":"416","data-pswp-height":"617",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RF1OAIgAiAAEDvNOFUKo90.webp"})])]),t("p",null,"5、点击工具栏上的“Digitizer Tool”工具，然后在绘制的多边形上点击一下，使多边形选中："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RF4eAGEuSAAme-HZ49bU46.webp","data-pswp-width":"1901","data-pswp-height":"1032",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RF4eAGEuSAAme-HZ49bU46.webp"})])]),t("p",null,"6、在Current Workspace侧边栏双击tif图层："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RF6aARXf-AAicL35j3kg73.webp","data-pswp-width":"1516","data-pswp-height":"1014",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RF6aARXf-AAicL35j3kg73.webp"})])]),t("p",null,"7、会弹出一个Raster Options对话框，点击“Cropping”页面："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RF-uAeusmAAEVgbdM0EU63.webp","data-pswp-width":"394","data-pswp-height":"663",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RF-uAeusmAAEVgbdM0EU63.webp"})])]),t("p",null,"8、选择“Crop to Currently Selected Polygon”，然后点击确定按钮："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RGB-AXlHqAAEyFi4sx6A93.webp","data-pswp-width":"399","data-pswp-height":"662",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RGB-AXlHqAAEyFi4sx6A93.webp"})])]),t("p",null,"9、可以看到tif被裁剪掉了："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RGEWADihZAAb470baGFM38.webp","data-pswp-width":"1697","data-pswp-height":"898",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RGEWADihZAAb470baGFM38.webp"})])]),t("p",null,"10、在侧边栏Current Workspace将多边形前面的复选框勾掉，使之不选中："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RGGWAeMNlAATAffEjTjI99.webp","data-pswp-width":"1155","data-pswp-height":"940",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RGGWAeMNlAATAffEjTjI99.webp"})])]),t("p",null,"11、依次选择菜单“File”->“Export”->“Export Web Format”，导出web格式："),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RGJuATMuoAAfuA68e3mY63.webp","data-pswp-width":"1401","data-pswp-height":"1022",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RGJuATMuoAAfuA68e3mY63.webp"})])]),t("p",null,"12、在弹出的对话框中选中TMS格式，（注意并不是Google Map Tiles格式）"),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RGMCAJV5XAABDZDn4O6E95.webp","data-pswp-width":"372","data-pswp-height":"206",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RGMCAJV5XAABDZDn4O6E95.webp"})])]),t("p",null,"13、按以下配置，自定义导出格式：%z\\%x\\%y.png"),t("figure",{class:"common"},[t("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RGN2ATvLUAAK4B03RTOw39.webp","data-pswp-width":"929","data-pswp-height":"687",target:"_blank"},[t("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/odm/fwAAAV7RGN2ATvLUAAK4B03RTOw39.webp"})])]),t("p",null,"14、选择保存的位置，并输入文件名，点击确定等待处理完毕，通常这个步骤耗时也比较久。"),t("h3",{class:"title"},"加载瓦片生成地图"),t("p",null,"使用openlayer或者leaflet.js插件都可以加载导出的瓦片，从而实现高清影像地图："),t("pre",null,[t("code",null,`<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <script type="text/javascript" src="https://cdn.bootcss.com/leaflet/1.5.1/leaflet.js"><\/script>
    <link rel="stylesheet" href="https://cdn.bootcss.com/leaflet/1.5.1/leaflet.css"/>
    <style>
        html, body{
            margin:0px; padding:0px;width:100%; height:100%;
        }
        #map{
            width:100%;
            height:100%;
        }
    </style>

    <script>
        function init () {
            const wrap = document.querySelector('#map')
            const maxZoom = 22
            const minZoom = 9
            const map = L.map(wrap, { scrollWheelZoom: true, positionControl: true, zoomControl: false })
            // 添加google地图底图
            const bgLayerOption = { attribution: 'Map data: © Google Maps', subdomains: ['mt0', 'mt1', 'mt2', 'mt3'], maxZoom, minZoom, label: 'Google Maps Hybrid' }
            const labelLayerOption = { attribution: 'Map data: © Google Maps', maxZoom, minZoom, label: 'Google Maps Label' }
            const bgLayer = L.tileLayer(\`http://{s}.google.cn/maps/vt?lyrs=s%40845&hl=zh-CN&gl=CN&x={x}&y={y}&z={z}\`, bgLayerOption)
            const labelLayer = L.tileLayer(\`http://maps.google.cn/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i476184508!3m17!2szh-CN!3sCN!5e18!12m4!1e68!2m2!1sset!2sRoadmapSatellite!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmwuaXxwLnY6b2Zm!4e0\`, labelLayerOption) // 标签层，不要标记
            const group = L.layerGroup().addLayer(bgLayer).addLayer(labelLayer)
            group.addTo(map)

            // 创建瓦片覆盖层
            const bounds = L.latLngBounds([[27.56467241524822, 117.93169120418992], [27.568749936490338, 117.94758398547549]])
            const url = \`./{z}/{x}/{y}.png\`
            let mapBounds = L.latLngBounds()
            mapBounds.extend(bounds)
            map.fitBounds(mapBounds)
            L.tileLayer(url, { bounds, minZoom, maxZoom, tms: true, detectRetina: true }).addTo(map)
        }
    <\/script>
</head>

<body onload="init()">
    <div id="map"></div>
</body>
</html>`)]),t("p",null,"以上就是leaflet的例子，边界经纬度可以从tif图片中获取到。")],-1)])),_:1})}const A=i(l,[["render",o]]);export{A as default};
