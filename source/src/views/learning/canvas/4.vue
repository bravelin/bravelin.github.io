<style scoped>
    .exp{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    canvas{
        width: 300px;
        height: 200px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
    }
</style>
<template>
    <div class="page article">
        <h2 class="title">Canvas学习笔记之四：图像与视频</h2>
        <div class="content">
            <p>Canvas环境对象提供了4个用于绘制及操作图像的方法：<strong>drawImage、putImageData、getImageData、createImageData</strong>。</p>
            <h3 class="title">图像的绘制</h3>
            <p>必须等待图片加载完成之后才能对其进行绘制，如果尚未完成加载，drawImage()方法将会失败，并且没有任何提示。通常绘制的方法会放在onload()回调函数中。</p>
            <p>图像的绘制效果受制于阴影、剪辑区域、图像合成等因素。</p>
            <p>drawImage()方法会将一幅图像绘制到canvas中，所绘的图像称之为“源图像”，绘制到的地方称之为“目标canvas”。drawImage()可以接收以下3套参数：</p>
            <p><strong>drawImage(image, dx, dy)</strong></p>
            <p><strong>drawImage(image, dx, dy, dw, dh)</strong></p>
            <p><strong>drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)</strong></p>
            <p>第一个参数可以是图像对象，也可以是一个canvas对象，或者video视频对象。</p>
            <div class="exp">
                <canvas ref="c1" width="300" height="200"></canvas>
            </div>
            <pre><code>let that = this
let el = that.$refs.c1
let context = el.getContext('2d')
let w = el.width
let h = el.height
let img = new Image()
img.onload = function () { // 在image的onload事件中绘制
    context.drawImage(img, 0, 0, w, h)
}
img.src = './static/img/1.jpeg'</code></pre>
            <p><strong>在使用drawImage方法时，务必保证所绘图片已经加载好了。</strong></p>
            <h3 class="title">离屏Canvas</h3>
            <p>离屏Canavs通常用来存放临时性的图像信息：</p>
            <p>1、创建用做离屏Canvas的元素；</p>
            <p>2、设置离屏Canvas的宽度与高度；</p>
            <p>3、在离屏Canvas中进行绘制；</p>
            <p>4、将离屏Canvas的全部或者一部分内容复制到正在显示的Canvas中。</p>
            <div class="exp">
                <canvas ref="c2" width="300" height="200" @mousemove="doMouseMoveForMagnifier" @touchmove="doMouseMoveForMagnifier"></canvas>
            </div>
            <pre><code>drawMagnifier () {
    let that = this
    let el = that.$refs.c2
    let context = el.getContext('2d')
    let w = el.width
    let h = el.height
    that.offScreenCanvas = document.createElement('canvas')
    let offScreenContext = that.offScreenCanvas.getContext('2d')
    that.offScreenCanvas.width = w
    that.offScreenCanvas.height = h
    let img = new Image()
    img.onload = function () {
        context.drawImage(img, 0, 0, w, h)
        offScreenContext.drawImage(img, 0, 0, w, h)
        that.addMagnifier(context, w, h, w / 2, h / 2, img)
    }
    img.src = './static/img/1.jpeg'
}
// 绘制放大镜
addMagnifier (context, w, h, x, y, img) {
    const that = this
    let scale = 1.8
    let radius = 20
    context.save()
    context.beginPath()
    context.strokeStyle = '#ffffff'
    context.lineWidth = 2
    context.shadowColor = 'rgba(0,0,0,0.8)'
    context.shadowOffsetX = 8
    context.shadowOffsetY = 8
    context.shadowBlur = 10
    context.arc(x, y, radius, 0, 2 * Math.PI, true)
    context.stroke()
    context.clip()
    context.drawImage(that.offScreenCanvas, x - radius / scale, y - radius / scale, (radius / scale) * 2, (radius / scale) * 2, x - radius, y - radius, radius * 2, radius * 2)
    context.restore()
}</code></pre>
            <p>DOM结构：</p>
            <pre><code>&lt;canvas ref="c2" width="300" height="200" @mousemove="doMouseMoveForMagnifier" @touchmove="doMouseMoveForMagnifier"&gt;&lt;/canvas&gt;</code></pre>
            <p>mousemove事件与touchmove事件处理：</p>
            <pre><code>doMouseMoveForMagnifier (e) {
    const that = this
    let el = that.$refs.c2
    let context = el.getContext('2d')
    let w = el.width
    let h = el.height
    let img = new Image()
    let pos = that.windowToCanvas(el, e.clientX, e.clientY)
    img.onload = function () {
        context.clearRect(0, 0, w, h)
        context.drawImage(img, 0, 0, w, h)
        that.addMagnifier(context, w, h, pos.x, pos.y, that.offScreenCanvas, img)
    }
    img.src = './static/img/1.jpeg' // 图片地址
}</code></pre>
            <h3 class="title">操作像素</h3>
            <p>两个方法：getImageData()和putImageData()。</p>
            <p>getImageData方法所返回的ImageData对象包含下列三个属性：width、height、data。</p>
            <p>putImageData(Image,dx,dy,dirtyX,dirtyY,dirtyWidth,dirtyHeight)，其中dx与dy表示所绘制的图像距离canvas左上角的X、Y偏移量；方法的最后4个参数代表以设备为单位的脏矩形，当浏览器将脏矩形复制到canvas时，它会将设备像素转换为CSS像素。</p>
            <p><strong>putImageData方法不受全局设置（globalAlpha、globalCompositeOperation等）的影响。因为它是直接操作像素的。</strong></p>
            <p><em>负片滤镜</em>：从255中减去每个RGB分量值，再将差值设置回去，相当于“反转”了该像素的颜色。</p>
            <div class="exp">
                <canvas ref="c3" width="300" height="200"></canvas>
            </div>
            <pre><code>let imgData = context.getImageData(0, 0, w, h)
for (let i = 0; i &lt; imgData.data.length; i = i + 4) {
    imgData.data[i] = 255 - imgData.data[i]
    imgData.data[i + 1] = 255 - imgData.data[i + 1]
    imgData.data[i + 2] = 255 - imgData.data[i + 2]
}
context.putImageData(imgData, 0, 0)</code></pre>
            <p><em>黑白滤镜</em>：计算每个像素的RGB分量的平均值，然后将三个分量都设置为这个均值，于是图片由彩色变成了灰白了。</p>
            <div class="exp">
                <canvas ref="c4" width="300" height="200"></canvas>
            </div>
            <pre><code>let imgData = context.getImageData(0, 0, w, h)
let v
for (let i = 0; i &lt; imgData.data.length; i = i + 4) {
    v = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    imgData.data[i] = v
    imgData.data[i + 1] = v
    imgData.data[i + 2] = v
}
context.putImageData(imgData, 0, 0)</code></pre>
            <p><em>浮雕滤镜</em></p>
            <div class="exp">
                <canvas ref="c5" width="300" height="200"></canvas>
            </div>
            <pre><code>let imgData = context.getImageData(0, 0, w, h)
let data = imgData.data
let width = imgData.width
let length = data.length
for (let i = 0; i < length; i++) {
    if (i <= length - width * 4) { // 最后一行像素点特殊处理
        if ((i + 1) % 4 !== 0) { //RGB分量
            if ((i + 4) % (width * 4) == 0) { // 每一行最后一个像素点
                data[i] = data[i - 4]
                data[i + 1] = data[i - 3]
                data[i + 2] = data[i - 2]
                data[i + 3] = data[i - 1]
                i += 4
            } else {
                data[i] = 255 / 2 + 2 * data[i] - data[i + 4] - data[i + width * 4] // 关键点
            }
        }
    } else {
        if ((i + 1) % 4 !== 0) {
            data[i] = data[i - width * 4]
        }
    }
}
context.putImageData(imgData, 0, 0)</code></pre>
            <p><strong>如果在大一些的图片上应用复杂的处理算法，可以使用WebWorker。</strong></p>
        </div>
        <footer>2016年06月30日</footer>
        <Comments></Comments>
        <Catalog :catalog="catalog"></Catalog>
    </div>
</template>
<script>
    import Page from '@/views/Page'
    export default {
        extends: Page,
        data () {
            return {
                offScreenCanvas: null
            }
        },
        mounted () {
            let that = this
            that.$nextTick(() => {
                that.drawImg()
                that.drawMagnifier()
                that.negativeFilter()
                that.greyFilter()
                that.embossFilter()
            })
        },
        methods: {
            drawImg () {
                let that = this
                let el = that.$refs.c1
                let context = el.getContext('2d')
                let w = el.width
                let h = el.height
                let img = new Image()
                img.onload = function () {
                    context.drawImage(img, 0, 0, w, h)
                }
                img.src = './static/img/1.jpeg'
            },
            drawMagnifier () {
                let that = this
                let el = that.$refs.c2
                let context = el.getContext('2d')
                let w = el.width
                let h = el.height
                that.offScreenCanvas = document.createElement('canvas')
                let offScreenContext = that.offScreenCanvas.getContext('2d')
                that.offScreenCanvas.width = w
                that.offScreenCanvas.height = h
                let img = new Image()
                img.onload = function () {
                    context.drawImage(img, 0, 0, w, h)
                    offScreenContext.drawImage(img, 0, 0, w, h)
                    that.addMagnifier(context, w, h, w / 2, h / 2, img)
                }
                img.src = './static/img/1.jpeg'
            },
            addMagnifier (context, w, h, x, y, img) {
                const that = this
                let scale = 1.8
                let radius = 20
                context.save()
                context.beginPath()
                context.strokeStyle = '#ffffff'
                context.lineWidth = 2
                context.shadowColor = 'rgba(0,0,0,0.8)'
                context.shadowOffsetX = 8
                context.shadowOffsetY = 8
                context.shadowBlur = 10
                context.arc(x, y, radius, 0, 2 * Math.PI, true)
                context.stroke()
                context.clip()
                context.drawImage(that.offScreenCanvas, x - radius / scale, y - radius / scale, (radius / scale) * 2, (radius / scale) * 2, x - radius, y - radius, radius * 2, radius * 2)
                context.restore()
            },
            windowToCanvas (canvas, x, y) {
                let box = canvas.getBoundingClientRect()
                return { x: (x - box.left) * (canvas.width / box.width), y: (y - box.top) * (canvas.height / box.height) }
            },
            doMouseMoveForMagnifier (e) {
                const that = this
                let el = that.$refs.c2
                let context = el.getContext('2d')
                let w = el.width
                let h = el.height
                let img = new Image()
                let pos = that.windowToCanvas(el, e.clientX, e.clientY)
                img.onload = function () {
                    context.clearRect(0, 0, w, h)
                    context.drawImage(img, 0, 0, w, h)
                    that.addMagnifier(context, w, h, pos.x, pos.y, that.offScreenCanvas, img)
                }
                img.src = './static/img/1.jpeg'
            },
            negativeFilter () {
                let that = this
                let el = that.$refs.c3
                let context = el.getContext('2d')
                let w = el.width
                let h = el.height
                let img = new Image()
                img.onload = function () {
                    context.drawImage(img, 0, 0, w, h)
                    let imgData = context.getImageData(0, 0, w, h)
                    for (let i = 0; i < imgData.data.length; i = i + 4) {
                        imgData.data[i] = 255 - imgData.data[i]
                        imgData.data[i + 1] = 255 - imgData.data[i + 1]
                        imgData.data[i + 2] = 255 - imgData.data[i + 2]
                    }
                    context.putImageData(imgData, 0, 0)
                }
                img.src = './static/img/1.jpeg'
            },
            greyFilter () {
                let that = this
                let el = that.$refs.c4
                let context = el.getContext('2d')
                let w = el.width
                let h = el.height
                let img = new Image()
                img.onload = function () {
                    context.drawImage(img, 0, 0, w, h)
                    let imgData = context.getImageData(0, 0, w, h)
                    let v
                    for (let i = 0; i < imgData.data.length; i = i + 4) {
                        v = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
                        imgData.data[i] = v
                        imgData.data[i + 1] = v
                        imgData.data[i + 2] = v
                    }
                    context.putImageData(imgData, 0, 0)
                }
                img.src = './static/img/1.jpeg'
            },
            embossFilter () {
                let that = this
                let el = that.$refs.c5
                let context = el.getContext('2d')
                let w = el.width
                let h = el.height
                let img = new Image()
                img.onload = function () {
                    context.drawImage(img, 0, 0, w, h)
                    let imgData = context.getImageData(0, 0, w, h)
                    let data = imgData.data
                    let width = imgData.width
                    let length = data.length
                    for (let i = 0; i < length; i++) {
                        if (i <= length - width * 4) {
                            if ((i + 1) % 4 !== 0) {
                                if ((i + 4) % (width * 4) == 0) {
                                    data[i] = data[i - 4]
                                    data[i + 1] = data[i - 3]
                                    data[i + 2] = data[i - 2]
                                    data[i + 3] = data[i - 1]
                                    i += 4
                                } else {
                                    data[i] = 255 / 2 + 2 * data[i] - data[i + 4] - data[i + width * 4]
                                }
                            }
                        } else {
                            if ((i + 1) % 4 !== 0) {
                                data[i] = data[i - width * 4]
                            }
                        }
                    }
                    context.putImageData(imgData, 0, 0)
                }
                img.src = './static/img/1.jpeg'
            }
        }
    }
</script>
