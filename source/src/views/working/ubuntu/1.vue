<template>
    <div class="page article">
        <h2 class="title">ubuntu使用摘要</h2>
        <div class="content">
            <h3 class="title">使用root账户权限</h3>
            <p>执行以下命令修改root密码：</p>
            <pre><code>sudo passwd</code></pre>
        </div>
        <footer>2016年06月02日</footer>
        <Comments></Comments>
    </div>
</template>
<script>
    import Page from '@/views/Page'
    export default {
        extends: Page
    }
</script>
