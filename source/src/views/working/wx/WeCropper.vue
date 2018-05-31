<template>
    <div class="page article">
        <h2 class="title">MpVue中使用WeCropper实现图片裁剪</h2>
        <div class="content">
            <h3 class="title">在mpvue框架中使用</h3>
            <p>we-cropper——一款灵活小巧的canvas图片裁剪器，github地址：<a target="_blank" href="https://github.com/we-plugin/we-cropper">https://github.com/we-plugin/we-cropper</a>。</p>
            <p>mpvue中可以通过npm install的方式引入到项目中，它封装了一个mpvue-cropper.vue组件可供使用。然而因为它提供的getCropperBase64方法在IOS中会导致图片翻转的严重问题。因此直接引入其源码文件we-cropper.js并修改。</p>
            <p>裁剪页面template结构：</p>
            <pre><code>&lt;template&gt;
    &lt;div class="container cropper-wrapper" :style="{ height: height + 'px' }"&gt;
        &lt;canvas class="cropper" disable-scroll="true" canvas-id="cropper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :style="{width: cropperOption.width + 'px', height: cropperOption.height + 'px', 'background-color': 'rgba(0, 0, 0, 0.8)'}"&gt;&lt;/canvas&gt;
        &lt;div class="cropper-buttons" style="height: 50px"&gt;
            &lt;div @click="doCancel" class="cancel-btn"&gt;取消&lt;/div&gt;
            &lt;div @click="doCommit" class="commit-btn"&gt;确定&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
            <p>touchStart、touchMove、touchEnd这3个事件的绑定发现是必须要的。</p>
            <p>基本用法：</p>
            <pre><code>import WeCropper from '@/libs/we-cropper'
const device = wx.getSystemInfoSync() // 获取设备信息
const deviceWidth = device.windowWidth // 示例为一个与屏幕等宽的正方形裁剪框
const deviceHeight = device.windowHeight - 50

export default {
    data () {
        return {
            height: deviceHeight,
            wecropper: null, // 裁剪实例
            cropperOption: {
                id: 'cropper',
                width: deviceWidth,  // 画布宽度
                height: deviceHeight, // 画布高度
                scale: 2.5, // 最大缩放倍数
                zoom: 8, // 缩放系数
                cut: {
                    x: (deviceWidth - 300) / 2, // 裁剪框x轴起点
                    y: (deviceHeight - 300) / 2, // 裁剪框y轴期起点
                    width: 300, // 裁剪框宽度
                    height: 300 // 裁剪框高度
                }
            }
        }
    },
    onLoad (option) {
        const that = this
        let ratio = 1
        let w = 300
        let h = ratio * 300
        let cutOpt = { // 此处可以调整裁剪框
            x: (deviceWidth - w) / 2,
            y: (deviceHeight - h) / 2,
            width: w,
            height: h
        }
        that.cropperOption.cut = cutOpt
        if (option.src) { // 传入要裁剪图片的地址
            that.cropperOption.src = option.src
            that.wecropper = new WeCropper(that.cropperOption).on('beforeImageLoad', (ctx) => {
                wx.showToast({ title: '上传中', icon: 'loading' })
            }).on('imageLoad', (ctx) => {
                wx.hideToast()
            }).updateCanvas()
        }
    },
    methods: {
        touchStart (e) {
            this.wecropper.touchStart(e.mp)
        },
        touchMove (e) {
            this.wecropper.touchMove(e.mp)
        },
        touchEnd (e) {
            this.wecropper.touchEnd(e.mp)
        },
        doCancel () { // 返回
            wx.navigateBack()
        },
        doCommit () { // 提交
            const that = this
            that.wecropper.getCropperBase64(data => {
                ...... // that.doUpload(), 获取到图片的base64编码，做上传处理
            })
        }
    }
}</code></pre>
            <p>小程序的页面效果：</p>
            <figure class="common">
                <img style="max-width: 420px;" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/dfcab4f8b2bc77f95e6a2b27ce0f38c9.png"/>
            </figure>
            <h3 class="title">修复在IOS中翻转问题</h3>
            <p>在苹果手机中获取base64编码之后保存的图片是翻转的：</p>
            <figure class="common">
                <img style="max-width: 420px;" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/66fc0ca5556509efc0d8fe9ad2d18d81.jpg"/>
            </figure>
            <p>一开始认为we-cropper.js在加载图片之后没有处理orientation导致。小程序的接口getImageInfo()在1.9.90版本增加了表示图片方向的orientation字段：</p>
            <figure class="common">
                <img src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/337c2037167b8d72a0c593a6917b28f9.png"/>
            </figure>
            <p>但调试中发现加载图片时返回的orientation依然是up，并不是down、left、right之类的值...</p>
            <p>之后打算在生成base64编码之前将图片旋转180度：</p>
            <pre><code>self.updateCanvas = function (putResCanvas) {
    if (self.croperTarget) {
        // 画布绘制图片
        let ctx = self.ctx
        if (putResCanvas && isIOS) { // 旋转180度
            ctx.save()
            ctx.translate(boundWidth/2, boundHeight/2)
            ctx.rotate(Math.PI)
            ctx.drawImage(self.croperTarget, self.imgLeft - boundWidth/2, self.imgTop - boundHeight/2, self.scaleWidth, self.scaleHeight);
            ctx.restore()
        } else { // 正常的绘制
            ctx.drawImage(self.croperTarget, self.imgLeft, self.imgTop, self.scaleWidth, self.scaleHeight);
        }
    }
    isFunction(self.onBeforeDraw) && self.onBeforeDraw(self.ctx, self);
    ...... // 后续代码
}
</code></pre>
            <p>获取base64编码之前重绘，再次调用updateCanvas，在IOS中可以看到此时图片突然倒置了（不过这个时候已经在保存提交中了）：</p>
            <pre><code>self.getCropperBase64 = function (done) {
    if ( done === void 0 ) done = function () {};
    self.updateCanvas(true) // putResCanvas标志传入true

    CanvasToBase64.convertToBMP... // 后续代码
}</code></pre>
            <p>真实效果中，翻转与旋转180度的效果并不是一样的：</p>
            <p>裁剪的图片：</p>
            <figure class="common">
                <img style="max-width: 420px;" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/31484b1ec2bc92715b641cb050f92d0b.png"/>
            </figure>
            <p>使用旋转180度方式生成的图片：</p>
            <figure class="common">
                <img style="max-width: 420px;" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/a86828651ef5a4b054bf34f1874995e1.png"/>
            </figure>
            <p>可以看到图片左右方向反了，所以上述方法是行不通的。</p>
            <p>比较可行的方式是修改获取base64编码时构建位图数据的方式，可以看到we-cropper.js中是以倒序的方式读取每一行的像素数据：</p>
            <pre><code>function genBitmapImage (oData) {
    ......
    var y = biHeight;
    var fromCharCode = String.fromCharCode;

    do { // 逆序读取
        var iOffsetY = biWidth4 * (y - 1);
        var strPixelRow = '';
        for (var x = 0; x < biWidth; x++) {
        var iOffsetX = x << 2;
        strPixelRow += fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) +
            fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) +
            fromCharCode(aImgData[iOffsetY + iOffsetX]);
        }

        for (var c = 0; c < iPadding; c++) {
            strPixelRow += String.fromCharCode(0);
        }

        strPixelData += strPixelRow;
    } while (--y)
    ......
}</code></pre>
            <p>如果这种逆序的读取方式会使IOS的图片翻转的话，那么正序读取岂不是就正常了？修改如下：</p>
            <p>在最顶部增加定义isIOS和fromCharCode：</p>
            <pre><code>var isIOS = false; // 判定设备是否是苹果手机
var fromCharCode = String.fromCharCode;</code></pre>
            <p>attachPage方法中调用wx.getSystemInfo，判定设备是否是苹果手机：</p>
            <pre><code>self.attachPage = function () {
    ......
    wx.getSystemInfo({
        success (res) {
            isIOS = /ios/i.test(res.system)
        }
    })
}</code></pre>
            <p>修改genBitmapImage方法：</p>
            <pre><code>function genBitmapImage (oData) {
    ......
    var iPadding = (4 - ((biWidth * 3) % 4)) % 4;
    var aImgData = oData.data;
    var strPixelData = '';
    var biWidth4 = biWidth << 2;
    var y = biHeight;

    if (isIOS) { // 倒置情况下
        for (y = 0; y < biHeight; y++) {
            strPixelData += getRowPixelData(y, biWidth4, biWidth, aImgData, iPadding)
        }
    } else { // 正常情况下
        for (y = biHeight - 1; y >= 0; y--) {
            strPixelData += getRowPixelData(y, biWidth4, biWidth, aImgData, iPadding)
        }
    }

    var strEncoded = encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData);
    return strEncoded
}</code></pre>
            <p>增加getRowPixelData方法：</p>
            <pre><code>function getRowPixelData (y, biWidth4, biWidth, aImgData, iPadding) {
    var iOffsetY = biWidth4 * y;
    var strPixelRow = '';
    var iOffsetX
    for (var x = 0; x < biWidth; x++) {
        iOffsetX = x << 2;
        strPixelRow += fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) + fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) + fromCharCode(aImgData[iOffsetY + iOffsetX]);
    }
    for (var c = 0; c < iPadding; c++) {
        strPixelRow += fromCharCode(0);
    }
    return strPixelRow
}</code></pre>
            <p>如此修改即可修复图片翻转问题。</p>
        </div>
        <footer>2018年05月12日</footer>
        <Comments></Comments>
        <Catalog :catalog="catalog"></Catalog>
        <Preview :is-show.sync="showPreview" :list="previewList" :index="previewIndex"></Preview>
    </div>
</template>
<script>
    import Page from '@/views/Page'
    export default {
        extends: Page
    }
</script>
