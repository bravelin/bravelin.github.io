<template>
    <div class="page article">
        <h2 class="title">Canvas学习笔记之一：基础知识</h2>
        <div class="content">
            <h3 class="title">Canvas元素</h3>
            <p>在设置Canvas的宽度与高度属性时，不能使用px后缀，并且只能是非负整数。</p>
            <p>默认情况下，浏览器创建的Canvas元素是300*150的尺寸。Canvas元素有两套尺寸，一是元素本身的大小；二是元素绘图表面的大小。</p>
            <p>通过设置属性width和height时，实际上同时修改了该元素本身的大小和绘图表面的大小；如果通过CSS设定Canvas元素的大小，那么只会改变元素本身的大小，而不会影响到绘图表面，此时浏览器会对绘图表面进行缩放，使其符合元素的大小。</p>
            <p>Canvas元素提供如下3个方法：</p>
            <p><strong>1、getContent()</strong>：返回与该canvas元素相关的绘图环境对象；</p>
            <p><strong>2、toDataURL(type, quality)</strong>：返回一个数据地址（图片的base64编码），type默认为image/png，第二个参数是0~1.0之间的数值，表示JPEG图片的质量（当type为image/jpeg）。</p>
            <p><strong>3、toBlob(callback, type, args...)</strong>：创建一个表示此canvas元素图像文件的Blob，type为image/png或者image/jpeg，第3个参数如同toDataURL中的quality。</p>
            <h3 class="title">绘图环境</h3>
        </div>
        <footer>2016年06月08日</footer>
        <comments></comments>
    </div>
</template>
<script>
    import Page from '../../page'
    module.exports = {
        extends: Page
    }
</script>