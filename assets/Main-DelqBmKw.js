import{_ as r,s as a,x as l,h as i,o,f as e,y as s}from"./index-CxcENImR.js";const p={};function c(m,t){const n=i("MyArticle");return o(),a(n,{title:"基于cesium.js的web端项目加载shpfile大文件数据",date:"2025年07月30日"},{default:l(()=>[...t[0]||(t[0]=[e("div",{class:"_article-content"},[e("h3",{class:"title"},"一、转成geojson文件后使用Primitive方式渲染"),e("p",null,"QGIS软件可以将shpfile文件转为geojson格式。将shpfile文件拖动到QGIS软件中，右键图层，在弹出菜单中选择“导出”，再选择“要素另存为”："),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/01.webp","data-pswp-width":"1911","data-pswp-height":"1026",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/01.webp"})])]),e("p",null,"在弹出的窗口中设置好导出文件位置，CRS选“EPSG:4326-WGS84”，为减少导出json文件大小，可以将不需要的属性字段勾去，并且将经纬度数据精度（小数位数）调低："),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/02.webp","data-pswp-width":"593","data-pswp-height":"664",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/02.webp"})])]),e("p",null,"如果导出之后的json文件比较大，则需要想办法压缩json文件："),e("p",null,"1、去除json文件里面的空格、无用的属性、经纬度数据的第三位数据："),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/03.webp","data-pswp-width":"1722","data-pswp-height":"930",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/03.webp"})])]),e("p",null,"2、开启gzip压缩，构建时生成gz文件，vite.config中plugins如下配置："),e("pre",null,[e("code",null,`plugins: [
    vue(),
    compressPlugin({
        ext: '.gz',
        algorithm: 'gzip',
        threshold: 10240,
        deleteOriginFile: false
    })
]`)]),e("p",null,"nginx配置如下："),e("pre",null,[e("code",null,`gzip on;
gzip_static on;
gzip_comp_level 4;
gzip_types text/plain text/html text/css application/x-javascript text/xml application/xml application/xml application/json;`)]),e("p",null,"在cesium中显示polygon可以使用entity绘制，但在数据量大的情况下则不可取，会非常卡顿，需改用Primitive方式绘制："),e("pre",null,[e("code",null,`const addFeatures = (features) => {
    const color = 'rgba(26,89,7,0.8)' // 设置多边形颜色
    const instances = []
    let polygonArr = null
    let polygon = null
    let geometry = null
    let feature = null
    let coordinates = null
    let j = 0
    for (let i = 0; i < features.length; i++) {
        feature = features[i]
        for(j = 0; j < feature.geometry.coordinates.length; j++) {
            coordinates = feature.geometry.coordinates[j]
            coordinates.forEach(item => {
                polygonArr = item.flat()
                polygon = new Cesium.PolygonGeometry({
                    polygonHierarchy: new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArray(polygonArr)),
                    vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT
                })
                geometry = Cesium.PolygonGeometry.createGeometry(polygon)
                instances.push(new Cesium.GeometryInstance({
                    geometry: geometry,
                    attributes: {
                        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromCssColorString(color))
                    }
                }))
            })
        }
    }
    const primitive = new Cesium.Primitive({
        geometryInstances: instances,
        show: true,
        appearance: new Cesium.PerInstanceColorAppearance({ translucent: true, closed: false }),
        asynchronous: false
    })
    viewer.scene.primitives.add(primitive)
}

// 加载geojson文件
const res = await fetch('export_data.geojson').then(response => response.json())
addFeatures(res.features, entitiesArr[type].color, type)`)]),e("h3",{class:"title"},"二、利用GeoServer将矢量地图数据发布为TMS瓦片服务"),e("p",null,[s("对于更大的geojson文件（几十M或者上百M），以上方式依然存在加载慢、渲染慢等性能问题。"),e("a",{href:"https://geoserver.org/?lang=zh-cn",target:"_blank"},"GeoServer"),s("是开源软件，可以将shp文件转成栅格瓦片服务，在cesium中添加瓦片图层即可实现相同的渲染效果。")]),e("p",null,"GeoServer依赖jdk8/jdk11/jdk17环境，需要先安装这三个版本之一的jdk。"),e("h3",{class:"sub-title"},"2.1 在centos上安装GeoServer"),e("p",null,"下载并解压最新版本的安装包："),e("pre",null,[e("code",null,`cd /opt/geoserver
wget https://jaist.dl.sourceforge.net/project/geoserver/GeoServer/2.27.2/geoserver-2.27.2-bin.zip?viasf=1
unzip geoserver-2.27.2-bin.zip
sudo chown -R $USER:$USER /opt/geoserver // 设置Geoserver目录的所有者为当前用户`)]),e("p",null,"启动GeoServer："),e("pre",null,[e("code",null,`cd /opt/geoserver/bin
./start.sh`)]),e("p",null,"启动成功后，Geoserver默认监听8080端口，通过以下地址访问服务："),e("pre",null,[e("code",null,"http://localhost:8080/geoserver")]),e("p",null,"默认账号：admin，密码：geoserver"),e("h3",{class:"sub-title"},"2.2 配置GeoServer为系统服务"),e("p",null,"创建systemd服务文件："),e("pre",null,[e("code",null,"vi /etc/systemd/system/geoserver.service")]),e("p",null,"输入以下内容，根据实际安装路径和用户进行调整："),e("pre",null,[e("code",null,`[Unit]
Description=GeoServer Service
After=network.target

[Service]
Type=simple
User=root
ExecStart=/opt/geoserver/bin/startup.sh
ExecStop=/opt/geoserver/bin/shutdown.sh
WorkingDirectory=/opt/geoserver
Restart=on-abort

[Install]
WantedBy=multi-user.target
`)]),e("p",null,"保存之后设置脚本权限："),e("pre",null,[e("code",null,`sudo chmod +x /opt/geoserver/bin/startup.sh
sudo chmod +x /opt/geoserver/bin/shutdown.sh`)]),e("p",null,"启用并启动服务："),e("pre",null,[e("code",null,`sudo systemctl daemon-reload
sudo systemctl enable geoserver // 启用服务
sudo systemctl start geoserver // 启动服务
sudo systemctl status geoserver // 查看服务状态
// sudo systemctl restart geoserver // 重启服务
// sudo systemctl stop geoserver // 停止服务`)]),e("h3",{class:"sub-title"},"2.3 shpfile文件构建TMS瓦片图层服务"),e("p",null,"登录geoserver，创建工作空间："),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/05.webp","data-pswp-width":"1572","data-pswp-height":"967",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/05.webp"})])]),e("p",null,"输入空间名称，可设为默认，点击保存："),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/04.webp","data-pswp-width":"1109","data-pswp-height":"537",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/04.webp"})])]),e("p",null,"创建存储空间："),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/06.webp","data-pswp-width":"1617","data-pswp-height":"761",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/06.webp"})])]),e("p",null,"矢量数据源选择shapefile："),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/07.webp","data-pswp-width":"1706","data-pswp-height":"889",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/07.webp"})])]),e("p",null,"填写数据源名称，选择shapefile文件位置，保存："),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/08.webp","data-pswp-width":"1920","data-pswp-height":"945",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/08.webp"})])]),e("p",null,"在新建图层页面点击发布："),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/09.webp","data-pswp-width":"1920","data-pswp-height":"945",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/09.webp"})])]),e("p",null,"进入编辑图层页面，(图层命名最好以英文命名)"),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/10.webp","data-pswp-width":"1920","data-pswp-height":"945",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/10.webp"})])]),e("p",null,"图层边框点击“从数据中计算”、“Compute from native bounds”，保存："),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/11.webp","data-pswp-width":"1920","data-pswp-height":"945",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/11.webp"})])]),e("p",null,"图层tms列表地址可以从下面链接中找到："),e("pre",null,[e("code",null,"http://localhost:8080/geoserver/gwc/service/tms/1.0.0")]),e("p",null,"选择EPSG:900913的那个png格式的地址："),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/12.webp","data-pswp-width":"1888","data-pswp-height":"994",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/12.webp"})])]),e("p",null,"使用leaflet预览该图层："),e("pre",null,[e("code",null,`<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <title>预览GeoServer</title>
    <script type="text/javascript" src="https://cdn.bootcdn.net/ajax/libs/leaflet/1.9.4/leaflet.min.js"/>
    <link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/leaflet/1.9.4/leaflet.min.css"/>
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
            const maxZoom = 21
            const minZoom = 4
            const map = L.map(wrap, { scrollWheelZoom: true, positionControl: true, zoomControl: false })
            const bounds = L.latLngBounds([[23.84907894, 113.15847545], [30.49762609, 118.83103814]])
            const url = \`http://localhost:8080/geoserver/gwc/service/tms/1.0.0/yrsz%3A%E6%B1%9F%E8%A5%BF%E7%9C%81_%E5%8E%BF%E7%95%8C@EPSG%3A900913@png/{z}/{x}/{y}.png?authkey=\${authkey}\`
            map.fitBounds(bounds)
            const layer = L.tileLayer(url, {
                bounds,
                minZoom,
                maxZoom,
                tms: true, // 是否反转Y轴的索引值
                opacity: 1,
                detectRetina: true
            }).addTo(map)
        }
    <\/script>
</head>
<body onload="init()">
    <div id="map"/>
</body>
</html>
`)]),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/13.webp","data-pswp-width":"1920","data-pswp-height":"945",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/gis/geoserver/13.webp"})])]),e("p",null,"设置样式：以#0AED5D填充、边线颜色为黑色"),e("pre",null,[e("code",null,`<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" 
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <NamedLayer>
    <Name>polygonStyle</Name>
    <UserStyle>
      <Title>Ayly Polygon</Title>
      <Abstract>A sample style that draws a polygon</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <Name>rule1</Name>
          <Title>Gray Polygon with Black Outline</Title>
          <Abstract>A polygon with a gray fill and a 1 pixel black outline</Abstract>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#0AED5D</CssParameter>
              <CssParameter name="fill-opacity">0.8</CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#000000</CssParameter>
              <CssParameter name="stroke-width">0.5</CssParameter>
              <CssParameter name="stroke-opacity">0.1</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
`)])],-1)])]),_:1})}const u=r(p,[["render",c]]);export{u as default};
