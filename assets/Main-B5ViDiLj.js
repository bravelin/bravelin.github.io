import{_ as s,q as r,s as o,h as a,o as l,e}from"./index-BMi8E4Cr.js";const c={};function i(p,t){const n=a("MyArticle");return l(),r(n,{title:"Web端可直接调用的相关地图服务",date:"2022年12月05日"},{default:o(()=>t[0]||(t[0]=[e("div",{class:"_article-content"},[e("p",null,"调用天地图服务API接口搜索地址"),e("pre",null,[e("code",null,`async function searchPlaces (placeName) {
    const postStr = encodeURIComponent(JSON.stringify({
        queryType: '1',
        start: 0,
        mapBound: '73.66,3.86,135.05,53.55',
        level: 18,
        keyWord: placeName,
        count: 10,
        sourceType: 0
    }))
    const res = await fetch(\`https://api.tianditu.gov.cn/v2/search?type=query&postStr=\${postStr}&tk=\${tk}\`).then(res => res.json())

    const pois = res.pois || []
    let latlng = null
    let detail = ''
    const list = pois.map(item => {
        latlng = item.lonlat.split(',').reverse()
        detail = item.address + item.name
        return {
            name: detail,
            latlng
        }
    })
    return list
}`)]),e("p",null,"调用天地图服务API接口地址逆解析"),e("pre",null,[e("code",null,`function getPlaceByLatlng (lat, lon) {
    const postStr = encodeURIComponent(JSON.stringify({ lon, lat, ver: 1 }))
    const url = \`https://api.tianditu.gov.cn/geocoder?postStr=\${postStr}&type=geocode&tk=\${tk}\`
    return fetch(url).then(res => res.json()).then(res => {
        if (res.msg == 'ok' && res.result) {
            return res.result.formatted_address
        } else {
            return ''
        }
    })
}`)]),e("p",null,"调用天地图服务API接口获取地址的经纬度"),e("pre",null,[e("code",null,`function getPlaceLatLng (address) {
    address = encodeURIComponent(JSON.stringify({ keyWord: address }))
    return fetch(\`https://api.tianditu.gov.cn/geocoder?tk=\${tk}&ds=\${address}\`).then(res => res.json()).then(res => {
        if (res.msg == 'ok' && res.location) {
            const resData = res.location
            return { status: true, latlng: [resData.lat, resData.lon] }
        } else {
            return { status: false, msg: '未能获取到经纬度！' }
        }
    })
}`)]),e("p",null,"调用高德地图API获取某个城市对应的天气情况"),e("pre",null,[e("code",null,`async function getWeather (cityCode = 360726) {
    const res = await fetch(\`https://restapi.amap.com/v3/weather/weatherInfo?key=\${amapKey}&city=\${cityCode}&extensions=base\`).then(obj => obj.json())
    if (res.status == 1) {
        return {
            text: res.lives[0].weather,
            temp: res.lives[0].temperature
        }
    }
    return { text: '', temp: '' }
}`)])],-1)])),_:1})}const d=s(c,[["render",i]]);export{d as default};
