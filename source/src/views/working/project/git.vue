<template>
    <div class="page article">
        <h2 class="title">Git的常用命令</h2>
        <div class="content">
            <p><strong>git init</strong>：在本地新建一个repo，使用这个命令初始化repo；</p>
            <p><strong>git clone [repo-url]</strong>：克隆远程repo；</p>
            <p><strong>git status</strong>：查询repo的状态；</p>
            <p>......</p>
        </div>
        <footer>2016年08月11日</footer>
        <comments></comments>
    </div>
</template>
<script>
    import Page from '../../page'
    module.exports = {
        extends: Page
    }
</script>
