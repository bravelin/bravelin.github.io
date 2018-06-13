<template>
    <div class="page article">
        <h2 class="title">你不知道的JavaScript（上卷）笔记</h2>
        <div class="content">
            <h3 class="title">作用域</h3>
            <p><strong>作用域</strong>是存储变量并如何找寻变量的规则。通常将JavaScript归为动态或解释型语言，但<strong>实际上它是一门编译语言</strong>，只是它不是提前编译，编译结果也不能移植。大部分情况下编译发生在执行前的几微秒，看起来像解释执行一样。</p>
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
