import{u as l}from"./highlight-2e3cec98.js";import{u as e}from"./catalog-69e48a3d.js";import{u as r}from"./photoSwipe-32ceb5bd.js";import{_ as o,r as i,b as s,c as g,e as n,l as c}from"./index-4afbb925.js";import"./article-1b647556.js";const m={setup(){return l(),e(),r(),{prefix:i("./imgs/gis/leaflet/")}}},p={class:"article-container"},u=n("h2",{class:"article-title"},"与leaflet.js相关应用总结",-1),d={class:"article-content"},h=c(`<h3 class="title">使加载出错的tile图片不显示</h3><p>添加以下样式，可使加载出错的tile不显示</p><pre><code>.leaflet-tile-container img.leaflet-tile{
    border: none !important;
    opacity: 0 !important;
}

.leaflet-tile-container img.leaflet-tile.leaflet-tile-loaded {
    visibility: inherit;
    opacity: 1 !important;
}</code></pre><h3 class="title">添加天地图</h3><p>相关配置：</p><pre><code>const tiandituKey = &#39;&#39;
const config = {
    bg: {
        url: \`https://t{s}.tianditu.gov.cn/DataServer?T=img_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=\${tiandituKey}\`,
        options: {
            subdomains: [&#39;0&#39;, &#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;, &#39;6&#39;, &#39;7&#39;],
            minZoom: 6,
            maxZoom: 21,
            maxNativeZoom: 18,
            detectRetina: true,
            errorTileUrl
        }
    },
    label: {
        url: \`https://t{s}.tianditu.gov.cn/DataServer?T=cia_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=\${tiandituKey}\`,
        options: {
            subdomains: [&#39;0&#39;, &#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;, &#39;6&#39;, &#39;7&#39;],
            minZoom: 6,
            maxZoom: 19,
            maxNativeZoom: 18,
            detectRetina: true,
            errorTileUrl
        }
    }
}</code></pre><h3 class="title">获取区域的中心点（质心）</h3><pre><code>export function computeArea (p0, p1, p2) {
    let area = 0.0
    area = p0[1] * p1[0] + p1[1] * p2[0] + p2[1] * p0[0] - p1[1] * p0[0] - p2[1] * p1[0] - p0[1] * p2[0]
    return area / 2
}

export function getRegionCenterPoint (latlngs, isArray = false, resArr = false) {
    const pointsArr = isArray ? latlngs : latlngs.map(item =&gt; [item.lat, item.lng])
    let sumX = 0
    let sumY = 0
    let sumArea = 0
    let p1 = pointsArr[1]
    let p2 = null
    let area = 0
    for (let i = 2; i &lt; pointsArr.length; i++) {
        p2 = pointsArr[i]
        area = computeArea(pointsArr[0], p1, p2)
        sumArea += area
        sumX += (pointsArr[0][1] + p1[1] + p2[1]) * area
        sumY += (pointsArr[0][0] + p1[0] + p2[0]) * area
        p1 = p2
    }
    const lat = sumY / sumArea / 3
    const lng = sumX / sumArea / 3
    return !resArr ? { lat, lng } : [lat, lng]
}</code></pre><h3 class="title">转换Polygon格式为latlngs</h3><pre><code>export function transformPolygonData (polygonData) {
    if (polygonData.startsWith(&#39;POLYGON&#39;) &amp;&amp; polygonData.length &gt; 12) {
        polygonData = polygonData.slice(9, -2)
        const arr = polygonData.split(&#39;,&#39;)
        const list = []
        const len = arr.length
        let tempArr = null
        for (let i = 0; i &lt; len; i++) {
            tempArr = arr[i].split(&#39; &#39;)
            list.push([tempArr[1] - 0, tempArr[0] - 0])
        }
        return list
    }
    return []
}</code></pre><h3 class="title">GCJ02与WGS-84坐标系的互转</h3><pre><code>const PI = Math.PI
const a = 6378245.0
const ee = 0.00669342162296594323

function outOfChina (lng, lat) {
    lat = +lat
    lng = +lng
    // 纬度3.86~53.55,经度73.66~135.05
    return !(lng &gt; 73.66 &amp;&amp; lng &lt; 135.05 &amp;&amp; lat &gt; 3.86 &amp;&amp; lat &lt; 53.55)
}

function transformlng (lng, lat) {
    lat = +lat
    lng = +lng
    let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng))
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0
    ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0
    ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0
    return ret
}

function transformlat (lng, lat) {
    lat = +lat
    lng = +lng
    let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng))
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0
    ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0
    ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0
    return ret
}

// 坐标系转换
export function gcj02towgs84 (latlng) {
    let [lat, lng] = latlng
    lat = +lat
    lng = +lng
    if (outOfChina(lng, lat)) {
        return [lat, lng]
    } else {
        let dlat = transformlat(lng - 105.0, lat - 35.0)
        let dlng = transformlng(lng - 105.0, lat - 35.0)
        const radlat = lat / 180.0 * PI
        let magic = Math.sin(radlat)
        magic = 1 - ee * magic * magic
        const sqrtmagic = Math.sqrt(magic)
        dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI)
        dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI)
        const mglat = lat + dlat
        const mglng = lng + dlng
        return [lat * 2 - mglat, lng * 2 - mglng]
    }
}

export function wgs84togcj02 (lng, lat) {
    lat = +lat
    lng = +lng
    if (outOfChina(lng, lat)) {
        return [lng, lat]
    } else {
        let dlat = transformlat(lng - 105.0, lat - 35.0)
        let dlng = transformlng(lng - 105.0, lat - 35.0)
        const radlat = lat / 180.0 * PI
        let magic = Math.sin(radlat)
        magic = 1 - ee * magic * magic
        const sqrtmagic = Math.sqrt(magic)
        dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI)
        dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI)
        const mglat = lat + dlat
        const mglng = lng + dlng
        return [mglng, mglat]
    }
}</code></pre><h3 class="title">求出多边形的边界点</h3><pre><code>export function getRegionBoundsFromArr (latlngs) {
    let minLat = 999
    let minLng = 999
    let maxLat = 0
    let maxLng = 0
    let lat = 0
    let lng = 0
    latlngs.forEach(latlng =&gt; {
        if (latlng[0] &lt; latlng[1]) {
            lat = latlng[0]
            lng = latlng[1]
        } else {
            lat = latlng[1]
            lng = latlng[0]
        }
        if (lat &gt; maxLat) { maxLat = lat }
        if (lat &lt; minLat) { minLat = lat }
        if (lng &gt; maxLng) { maxLng = lng }
        if (lng &lt; minLng) { minLng = lng }
    })
    return [[maxLat, minLng], [maxLat, maxLng], [minLat, maxLng], [minLat, minLng], [maxLat, minLng]]
}</code></pre><h3 class="title">高亮显示区域</h3>`,15),f={class:"common"},_={class:"pswp-img",href:"./imgs/gis/leaflet/02.png","data-pswp-width":"1351","data-pswp-height":"877",target:"_blank"},x=["src"],y=n("p",null,"处理外层geojson数据，添加外层[[360, 90], [360, -90], [-360, -90], [-360, 90]]",-1),L=n("pre",null,[n("code",null,`export function handlerCoordinatesOfOuter (layerFeature) {
    const coordinates = layerFeature.geometry.coordinates
    if (coordinates[0][0][0] instanceof Array) {
        if (coordinates[0][0][0][0] != 360) {
            coordinates.unshift([[[360, 90], [360, -90], [-360, -90], [-360, 90]]])
        }
    } else if (coordinates[0][0][0] != 360) {
        coordinates.unshift([[360, 90], [360, -90], [-360, -90], [-360, 90]])
    }
}`)],-1),P=n("pre",null,[n("code",null,`const contourDatas = geoJson.features[0]
handlerCoordinatesOfOuter(contourDatas)
const outerLayer = L.geoJSON(contourDatas, { style: { weight: 2.5, color: '#8eadfe', fill: true, fillColor: '#000', fillOpacity: 0.5, stroke: true, interactive: false } })
outerLayer.addTo(map)`)],-1),M=n("footer",null,"2022年12月10日",-1);function A(t,I,D,a,b,O){return s(),g("div",p,[u,n("div",d,[h,n("figure",f,[n("a",_,[n("img",{class:"thumbnail-img",src:a.prefix+"02.png"},null,8,x)])]),y,L,P]),M])}const N=o(m,[["render",A]]);export{N as default};
