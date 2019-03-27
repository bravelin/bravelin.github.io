// 全景图地址
let url = './exp/0.jpg'

document.addEventListener('DOMContentLoaded', function () {
    const viewer = new PhotoSphereViewer({
        panorama: url,
        container: document.getElementById('app'),
        time_anim: false,
        navbar: true,
        default_fov: 90
    })
})