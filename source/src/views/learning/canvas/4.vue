<style scoped>
    .exp{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    canvas{
        width: 300px;
        height: 150px;
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
        mounted () {
        },
        methods: {
        }
    }
</script>
