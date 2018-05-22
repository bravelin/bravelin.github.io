<template>
    <div class="page article">
        <h2 class="title">你不知道的JavaScript（上卷）笔记</h2>
        <div class="content">
            <h3 class="title">let命令</h3>
            <p>用于声明变量，作用类似var，但只在let变量的代码块内有效。</p>
        </div>
        <footer>2018年05月20日</footer>
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
