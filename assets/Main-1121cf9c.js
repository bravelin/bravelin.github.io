import{u as a}from"./highlight-2e3cec98.js";import{u as o}from"./catalog-69e48a3d.js";import{u as i}from"./photoSwipe-32ceb5bd.js";import{_ as c,r as l,b as g,c as p,e as t,g as n,l as r}from"./index-4afbb925.js";import"./article-1b647556.js";const m={setup(){return a(),o(),i(),{prefix:l("./imgs/gis/odm/")}}},A={class:"article-container"},h=t("h2",{class:"article-title"},"从无人机航拍图到高清地图影像",-1),d={class:"article-content"},_=t("p",null,"高清影像地图直观逼真、信息丰富，现实性比较强。比如google影像地图：",-1),f={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV6ioe-AFuWfAAhFQc5_7qI67.jpeg","data-pswp-width":"1923","data-pswp-height":"958",target:"_blank"},w=["src"],u=t("p",null,[n("我们国家的"),t("a",{href:"https://www.tianditu.gov.cn/",target:"_blank"},"天地图"),n("，清晰度也很高：")],-1),b={class:"common"},x={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV6iof2ABg8fAA3fHJpK9pU64.jpeg","data-pswp-width":"1918","data-pswp-height":"911",target:"_blank"},j=["src"],L=t("p",null,"无人机航拍，清晰度可以做的更高。文章介绍了从原始航拍图到生成高清地图影像的方法。",-1),R=t("h3",{class:"title"},"给航拍图片添加经纬度",-1),V=t("p",null,"获取无人机垂直镜头拍摄的照片，先查看下图片是否有GPS信息：",-1),y={class:"common"},D={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RDCCAJU_9AARa8OVzvK802.jpeg","data-pswp-width":"1654","data-pswp-height":"921",target:"_blank"},M=["src"],G=r(`<p>如若没有GPS信息，需要将此数据从POS文件写入到图片文件中。可以写个小工具来处理：（node.js的方法，依赖库<strong>piexifjs</strong>）</p><pre><code>const fileName = img.fileName
const jpeg = fs.readFileSync(img.path)
const imageData = jpeg.toString(&#39;binary&#39;)
const exifObj = piexif.load(imageData)
const geoData = exifObj[&#39;GPS&#39;]
const convertLatObj = convertGeoNum(geo.lat)
const convertLngObj = convertGeoNum(geo.lng)
// 填充经纬度GeoData
geoData[&#39;0&#39;] = [2, 3, 0, 0]
geoData[&#39;1&#39;] = [&#39;N&#39;]
geoData[&#39;2&#39;] = [[0, 1], [0, 1], [0, 10000]]
geoData[&#39;2&#39;][0][0] = convertLatObj.deg
geoData[&#39;2&#39;][1][0] = convertLatObj.min
geoData[&#39;2&#39;][2][0] = convertLatObj.sec
geoData[&#39;3&#39;] = [&#39;E&#39;]
geoData[&#39;4&#39;] = [[0, 1], [0, 1], [0, 10000]]
geoData[&#39;4&#39;][0][0] = convertLngObj.deg
geoData[&#39;4&#39;][1][0] = convertLngObj.min
geoData[&#39;4&#39;][2][0] = convertLngObj.sec
geoData[&#39;5&#39;] = 0
geoData[&#39;6&#39;] = [geo.height * 1000, 1000]
// 写入新文件中
const exifBytes = piexif.dump(exifObj)
const newData = piexif.insert(exifBytes, imageData)
const newJpeg = Buffer.from(newData, &#39;binary&#39;)
fs.writeFileSync(distImagePath + fileName, newJpeg)</code></pre><p>convertGeoNum函数的作用是将经纬度小数形式转成度分秒格式：</p><pre><code>function convertGeoNum (num) {
    const deg = parseInt(num)
    const min = parseInt((num - deg) * 60)
    const sec = parseInt(((num - deg) * 60 - min) * 60 * 10000)
    return { deg, min, sec }
}</code></pre><p>由于我们国家使用GCJ-02投影坐标系统，原始的GPS坐标在写入图片之前还需要进行转换，否则有偏移。转换算法如下：</p><pre><code>const PI = Math.PI
const EARTH_RADIUS = 6378245.0
const EE = 0.00669342162296594323

function outOfChina (lat, lng) {
    if (lng &lt; 72.004 || lng &gt; 137.8347) { return true }
    if (lat &lt; 0.8293 || lat &gt; 55.8271) { return true }
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
</code></pre><h3 class="title">Pix4D软件生成正射图</h3><p>比较了多个航拍图片的处理软件，包括photoscan、webodm，发现<strong>Pix4D Mapper</strong>生成的正射影像图效果是目前最好的。</p><p>新建一个项目，项目名中文也是支持的：</p>`,9),O={class:"common"},E={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RDTmAJ7YbAADZCo5nWcM28.jpeg","data-pswp-width":"1848","data-pswp-height":"1024",target:"_blank"},I=["src"],k=t("p",null,"之后添加图片，软件会读取每张图片的元数据，直接next：",-1),F={class:"common"},C={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RDUuAYAX8AAGz6zCPxsw51.jpeg","data-pswp-width":"766","data-pswp-height":"689",target:"_blank"},P=["src"],v={class:"common"},B={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RDXOAUitIAAEp40IC9To54.jpeg","data-pswp-width":"766","data-pswp-height":"689",target:"_blank"},S=["src"],T=t("p",null,"输出坐标选用自动检测的WGS84，点next：",-1),Z={class:"common"},q={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RDZyASIprAABvbhjExnQ77.jpeg","data-pswp-width":"766","data-pswp-height":"689",target:"_blank"},z=["src"],N=t("p",null,"处理模板选用3DMaps，将“开始处理”选项取消勾选，之后点finish：",-1),U={class:"common"},J={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RDbKAbsh7AAELwAmZe7I03.jpeg","data-pswp-width":"766","data-pswp-height":"689",target:"_blank"},W=["src"],Y=t("p",null,"点击左侧的处理选项，弹出处理选项对话框：",-1),K={class:"common"},X={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RDdOAYn9xAAFLyuJpo2o62.jpeg","data-pswp-width":"1655","data-pswp-height":"946",target:"_blank"},H=["src"],Q=t("p",null,"按如下设置，我们不勾选“导出谷歌地图瓦片和KML”，因为直接导出的地图瓦片边缘因重叠率不够导致不规整，需要使用另外的工具再去裁剪（虽然pix4d也可以在开始处理之前圈定一个多边形范围进行裁剪，但那种方式是“盲圈”）：",-1),$={class:"common"},tt={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RDlKAcpgOAAFZsaW3K-416.jpeg","data-pswp-width":"1743","data-pswp-height":"918",target:"_blank"},st=["src"],nt=t("p",null,[t("strong",null,"最好选用CPU性能好、内存大的机器去处理此种任务。")],-1),et=t("p",null,"经过漫长时间的等待之后，我们得到了一张tif格式的正射图：",-1),at={class:"common"},ot={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7REquAeCbtAABMw74wqVw45.jpeg","data-pswp-width":"744","data-pswp-height":"300",target:"_blank"},it=["src"],ct=t("h3",{class:"title"},"GlobalMapper裁剪边缘、导出瓦片",-1),lt=t("p",null,"1、使用GlobalMapper打开tif图：",-1),gt={class:"common"},pt={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RFkqAYSe3AAjz_j0D7x070.jpeg","data-pswp-width":"1909","data-pswp-height":"1039",target:"_blank"},rt=["src"],mt=t("p",null,"2、工具栏点击“Create Area Feature”：",-1),At={class:"common"},ht={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RFqqARJD6AAkOjL-VWuc82.jpeg","data-pswp-width":"1903","data-pswp-height":"1036",target:"_blank"},dt=["src"],_t=t("p",null,"3、绘制裁剪的多边形，点击右键结束绘制",-1),ft={class:"common"},wt={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RFymAXlpjAAeYQsDzY5A04.jpeg","data-pswp-width":"1905","data-pswp-height":"1032",target:"_blank"},ut=["src"],bt=t("p",null,"4、输入Feature的名称，比如“cut01”，点击“ok”按钮关闭对话框：",-1),xt={class:"common"},jt={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RF1OAIgAiAAEDvNOFUKo90.jpeg","data-pswp-width":"416","data-pswp-height":"617",target:"_blank"},Lt=["src"],Rt=t("p",null,"5、点击工具栏上的“Digitizer Tool”工具，然后在绘制的多边形上点击一下，使多边形选中：",-1),Vt={class:"common"},yt={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RF4eAGEuSAAme-HZ49bU46.jpeg","data-pswp-width":"1901","data-pswp-height":"1032",target:"_blank"},Dt=["src"],Mt=t("p",null,"6、在Current Workspace侧边栏双击tif图层：",-1),Gt={class:"common"},Ot={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RF6aARXf-AAicL35j3kg73.jpeg","data-pswp-width":"1516","data-pswp-height":"1014",target:"_blank"},Et=["src"],It=t("p",null,"7、会弹出一个Raster Options对话框，点击“Cropping”页面：",-1),kt={class:"common"},Ft={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RF-uAeusmAAEVgbdM0EU63.jpeg","data-pswp-width":"394","data-pswp-height":"663",target:"_blank"},Ct=["src"],Pt=t("p",null,"8、选择“Crop to Currently Selected Polygon”，然后点击确定按钮：",-1),vt={class:"common"},Bt={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RGB-AXlHqAAEyFi4sx6A93.jpeg","data-pswp-width":"399","data-pswp-height":"662",target:"_blank"},St=["src"],Tt=t("p",null,"9、可以看到tif被裁剪掉了：",-1),Zt={class:"common"},qt={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RGEWADihZAAb470baGFM38.jpeg","data-pswp-width":"1697","data-pswp-height":"898",target:"_blank"},zt=["src"],Nt=t("p",null,"10、在侧边栏Current Workspace将多边形前面的复选框勾掉，使之不选中：",-1),Ut={class:"common"},Jt={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RGGWAeMNlAATAffEjTjI99.jpeg","data-pswp-width":"1155","data-pswp-height":"940",target:"_blank"},Wt=["src"],Yt=t("p",null,"11、依次选择菜单“File”->“Export”->“Export Web Format”，导出web格式：",-1),Kt={class:"common"},Xt={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RGJuATMuoAAfuA68e3mY63.jpeg","data-pswp-width":"1401","data-pswp-height":"1022",target:"_blank"},Ht=["src"],Qt=t("p",null,"12、在弹出的对话框中选中TMS格式，（注意并不是Google Map Tiles格式）",-1),$t={class:"common"},ts={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RGMCAJV5XAABDZDn4O6E95.jpeg","data-pswp-width":"372","data-pswp-height":"206",target:"_blank"},ss=["src"],ns=t("p",null,"13、按以下配置，自定义导出格式：%z\\%x\\%y.png",-1),es={class:"common"},as={class:"pswp-img",href:"./imgs/gis/odm/fwAAAV7RGN2ATvLUAAK4B03RTOw39.jpeg","data-pswp-width":"929","data-pswp-height":"687",target:"_blank"},os=["src"],is=t("p",null,"14、选择保存的位置，并输入文件名，点击确定等待处理完毕，通常这个步骤耗时也比较久。",-1),cs=t("h3",{class:"title"},"加载瓦片生成地图",-1),ls=t("p",null,"使用openlayer或者leaflet.js插件都可以加载导出的瓦片，从而实现高清影像地图：",-1),gs=t("pre",null,[t("code",null,`<!DOCTYPE html>
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
</html>`)],-1),ps=t("p",null,"以上就是leaflet的例子，边界经纬度可以从tif图片中获取到。",-1),rs=t("footer",null,"2021年09月25日",-1);function ms(e,As,hs,s,ds,_s){return g(),p("div",A,[h,t("div",d,[_,t("figure",null,[t("a",f,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV6ioe-AFuWfAAhFQc5_7qI67.jpeg"},null,8,w)])]),u,t("figure",b,[t("a",x,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV6iof2ABg8fAA3fHJpK9pU64.jpeg"},null,8,j)])]),L,R,V,t("figure",y,[t("a",D,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RDCCAJU_9AARa8OVzvK802.jpeg"},null,8,M)])]),G,t("figure",O,[t("a",E,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RDTmAJ7YbAADZCo5nWcM28.jpeg"},null,8,I)])]),k,t("figure",F,[t("a",C,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RDUuAYAX8AAGz6zCPxsw51.jpeg"},null,8,P)])]),t("figure",v,[t("a",B,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RDXOAUitIAAEp40IC9To54.jpeg"},null,8,S)])]),T,t("figure",Z,[t("a",q,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RDZyASIprAABvbhjExnQ77.jpeg"},null,8,z)])]),N,t("figure",U,[t("a",J,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RDbKAbsh7AAELwAmZe7I03.jpeg"},null,8,W)])]),Y,t("figure",K,[t("a",X,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RDdOAYn9xAAFLyuJpo2o62.jpeg"},null,8,H)])]),Q,t("figure",$,[t("a",tt,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RDlKAcpgOAAFZsaW3K-416.jpeg"},null,8,st)])]),nt,et,t("figure",at,[t("a",ot,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7REquAeCbtAABMw74wqVw45.jpeg"},null,8,it)])]),ct,lt,t("figure",gt,[t("a",pt,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RFkqAYSe3AAjz_j0D7x070.jpeg"},null,8,rt)])]),mt,t("figure",At,[t("a",ht,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RFqqARJD6AAkOjL-VWuc82.jpeg"},null,8,dt)])]),_t,t("figure",ft,[t("a",wt,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RFymAXlpjAAeYQsDzY5A04.jpeg"},null,8,ut)])]),bt,t("figure",xt,[t("a",jt,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RF1OAIgAiAAEDvNOFUKo90.jpeg"},null,8,Lt)])]),Rt,t("figure",Vt,[t("a",yt,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RF4eAGEuSAAme-HZ49bU46.jpeg"},null,8,Dt)])]),Mt,t("figure",Gt,[t("a",Ot,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RF6aARXf-AAicL35j3kg73.jpeg"},null,8,Et)])]),It,t("figure",kt,[t("a",Ft,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RF-uAeusmAAEVgbdM0EU63.jpeg"},null,8,Ct)])]),Pt,t("figure",vt,[t("a",Bt,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RGB-AXlHqAAEyFi4sx6A93.jpeg"},null,8,St)])]),Tt,t("figure",Zt,[t("a",qt,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RGEWADihZAAb470baGFM38.jpeg"},null,8,zt)])]),Nt,t("figure",Ut,[t("a",Jt,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RGGWAeMNlAATAffEjTjI99.jpeg"},null,8,Wt)])]),Yt,t("figure",Kt,[t("a",Xt,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RGJuATMuoAAfuA68e3mY63.jpeg"},null,8,Ht)])]),Qt,t("figure",$t,[t("a",ts,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RGMCAJV5XAABDZDn4O6E95.jpeg"},null,8,ss)])]),ns,t("figure",es,[t("a",as,[t("img",{class:"thumbnail-img",src:s.prefix+"fwAAAV7RGN2ATvLUAAK4B03RTOw39.jpeg"},null,8,os)])]),is,cs,ls,gs,ps]),rs])}const js=c(m,[["render",ms]]);export{js as default};
