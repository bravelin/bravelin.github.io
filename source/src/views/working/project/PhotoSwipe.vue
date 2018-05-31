<template>
    <div class="page article">
        <h2 class="title">使用PhotoSwipe构建图片预览组件</h2>
        <div class="content">
            <h3 class="title">概述</h3>
            <p><a href="http://photoswipe.com/">PhotoSwipe</a>是一款用于浏览图集的不依赖于其他库的JavaScript插件。功能强大，支持移动端通过手势缩放图片，支持分享、全屏、键盘快捷键等功能。</p>
            <p>官方文档地址：<a href="http://photoswipe.com/documentation/getting-started.html">http://photoswipe.com/documentation/getting-started.html</a></p>
            <h3 class="title">封装成组件</h3>
            <p>在vue框架中使用的话，先通过npm install photoswipe下载模块。</p>
            <p>新建组件Preview.vue，其中template结构如下：</p>
            <pre><code>&lt;div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"&gt;
    &lt;!-- Background of PhotoSwipe. It's a separate element as animating opacity is faster than rgba(). --&gt;
    &lt;div class="pswp__bg"&gt;&lt;/div&gt;

    &lt;!-- Slides wrapper with overflow:hidden. --&gt;
    &lt;div class="pswp__scroll-wrap"&gt;
        &lt;!-- Container that holds slides. 
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. --&gt;
        &lt;div class="pswp__container"&gt;
            &lt;div class="pswp__item"&gt;&lt;/div&gt;
            &lt;div class="pswp__item"&gt;&lt;/div&gt;
            &lt;div class="pswp__item"&gt;&lt;/div&gt;
        &lt;/div&gt;

        &lt;!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. --&gt;
        &lt;div class="pswp__ui pswp__ui--hidden"&gt;
            &lt;div class="pswp__top-bar"&gt;
                &lt;!--  Controls are self-explanatory. Order can be changed. --&gt;
                &lt;div class="pswp__counter"&gt;&lt;/div&gt;
                &lt;button class="pswp__button pswp__button--close" title="Close (Esc)"&gt;&lt;/button&gt;
                &lt;!-- &lt;button class="pswp__button pswp__button--fs" title="Toggle fullscreen"&gt;&lt;/button&gt; --&gt;
                &lt;button class="pswp__button pswp__button--zoom" title="Zoom in/out"&gt;&lt;/button&gt;

                &lt;!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR --&gt;
                &lt;!-- element will get class pswp__preloader--active when preloader is running --&gt;
                &lt;div class="pswp__preloader"&gt;
                    &lt;div class="pswp__preloader__icn"&gt;
                        &lt;div class="pswp__preloader__cut"&gt;
                        &lt;div class="pswp__preloader__donut"&gt;&lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;!-- 把左右方向按钮去掉了 --&gt;
            &lt;!-- &lt;button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"&gt;&lt;/button&gt;
            &lt;button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"&gt;&lt;/button&gt; --&gt;

            &lt;div class="pswp__caption"&gt;
                &lt;div class="pswp__caption__center"&gt;&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
            <p>import以下模块：</p>
            <pre><code>import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default'</code></pre>
            <p>定义组件的3个prop，其中图片的数据需要src（链接）、w（宽度）、h（高度）三项：</p>
            <pre><code>props: {
    list: { // 图片列表 [{ src: '', w: 100, h: 100 }]
        type: Array,
        default: []
    },
    isShow: { // 控制显示隐藏
        type: Boolean,
        default: false
    },
    index: 0 // 初始显示的图片索引值
}</code></pre>
            <p>监听isShow，当为true时初始化预览组件：</p>
            <pre><code>watch: {
    isShow (newVal, oldVal) {
        const that = this
        if (newVal) {
            let gallery = new PhotoSwipe(that.$el, PhotoSwipeUI, that.list, {
                index: that.index || 0
            })
            gallery.init()
            gallery.listen('close', () => { // 关闭的时候isShow置为false
                that.$emit('update:isShow', false)
            })
        }
    }
}</code></pre>
            <p>源码：<a href="https://github.com/bravelin/bravelin.github.io/blob/master/source/src/components/Preview.vue">https://github.com/bravelin/bravelin.github.io/blob/master/source/src/components/Preview.vue</a></p>
            <h3 class="title">使用方法</h3>
            <p>在组件中使用的话，data中定义好list、index、isShow即可：</p>
            <pre><code>&lt;Preview :is-show.sync="showPreview" :list="previewList" :index="previewIndex"&gt;&lt;/Preview&gt;</code></pre>
            <p>需要预览的话：</p>
            <pre><code>doPreview (pics, picIndex) {
    const that = this
    that.previewList = pics
    that.previewIndex = picIndex
    that.showPreview = true
}</code></pre>
            <p>如果需要动态获取页面上的图片，并点击任意一张图片都可以进入预览模式的话，可以如下处理。</p>
            <p>页面加载之后获取所有img标签：</p>
            <pre><code>mounted () {
    const that = this
    const imageList = document.querySelectorAll('.content figure>img')
    if (imageList.length > 0) {
        that.getImageSize(0, imageList) // 获取图片的宽高
    }
}</code></pre>
            <p>因为预览图片还需要知道图片的宽高，使用队列依次在Image的onload回调函数里面获取：</p>
            <pre><code>getImageSize (index, imageList) {
    const that = this
    let img = new Image()
    let el = imageList[index]
    img.onload = function () {
        that.previewList.push({ // 保存进去
            src: el.src,
            w: this.width,
            h: this.height
        })
        index++
        if (index &lt; imageList.length) {
            that.getImageSize(index, imageList) // 获取队列中下一个图片的尺寸
        } else {
            that.$el.addEventListener('click', that.doPreview) // 对img增加click监听
        }
    }
    img.src = el.src
}</code></pre>
        <p>页面的click事件处理中，如果点击的是图片，则弹出预览：</p>
        <pre><code>doPreview (e) {
    const that = this
    if (/img/i.test(e.target.tagName) && !that.showPreview && !e.target.classList.contains('pswp__img')) {
        that.previewIndex = 0 // 获取index
        for (let i = 0; i < that.previewList.length; i++) {
            if (that.previewList[i].src == e.target.src) {
                that.previewIndex = i
                break
            }
        }
        that.showPreview = true
    }
}</code></pre>
        </div>
        <footer>2018年05月23日</footer>
        <Comments></Comments>
        <Catalog :catalog="catalog"></Catalog>
    </div>
</template>
<script>
    import Page from '@/views/Page'
    export default {
        extends: Page
    }
</script>
