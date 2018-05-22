<template>
    <div class="page article">
        <h2 class="title">《CSS 揭秘》笔记之八：过渡与动画</h2>
        <div class="content">
            <h3 class="title">缓动效果</h3>
            <p>缓动曲线指定了动画过程在整段时间中是如何推进的。默认并不是匀速效果，而是ease。内置的调速函数有：<strong>ease-in、ease-out、ease-in-out、linear</strong>
            </p>
            <p><strong>弹跳动画</strong>的关键是在小球下落的过程中是加速的（ease-in），弹起转变方向是速度是减速的（ease-out）：</p>
            <div class="exp bounce">
                <div class="ball"></div>
            </div>
            <pre><code>.ball{
  animation: bounce 3s ease-in infinite;
}
@keyframes bounce {
  60%, 80%, to { transform: translateY(300px); animation-timing-function: ease-out; }
  70%{ transform: translateY(200px); }
  90%{ transform: translateY(250px); }
}</code></pre>
            <p><strong>cubic-bezier(x1, y1, x2, y2)</strong>允许我们自定义调速函数。四个参数代表两个控制锚点的坐标值。曲线的两个端点分别固定在(0,0)和(1,1)</p>
        </div>
        <footer>2017年01月22日</footer>
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