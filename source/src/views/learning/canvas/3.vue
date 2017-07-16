<style scoped>
    .exp{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    canvas{
        width: 250px;
        height: 250px !important;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
    }
</style>
<template>
    <div class="page article">
        <h2 class="title">Canvas学习笔记之三：文本</h2>
        <div class="content">
            <h3 class="title">概述</h3>
            <p>Canvas绘图环境提供的与文本有关的方法：</p>
            <ul>
                <li><strong>strokeText(text, x, y, maxWidth)</strong>：文本的描边；</li>
                <li><strong>fillText(text, x, y, maxWidth)</strong>：文本的填充；</li>
                <li><strong>measureText(text)</strong>：计算文本所占据的宽度。</li>
            </ul>
            <p>与文本有关的属性：</p>
            <ul>
                <li><strong>font</strong>、<strong>textAlign</strong>、<strong>textBaseline</strong></li>
            </ul>
            <h3 class="title">文本的描边与填充</h3>
        </div>
        <footer>2016年06月25日</footer>
        <comments></comments>
    </div>
</template>
<script>
    import Page from '../../page'
    module.exports = {
        extends: Page,
        mounted () {
        },
        methods: {
        }
    }
</script>
