// 全景图地址
let url = 'http://stdag-image.oss-cn-beijing.aliyuncs.com/camera_one_image/20190327/31384703333230301b002800_1553665597-20190327134716847.jpg'

document.addEventListener('DOMContentLoaded', function () {
    const viewer = new PhotoSphereViewer({
        panorama: url,
        container: document.getElementById('app'),
        time_anim: false,
        navbar: true,
        default_fov: 90
    })
})