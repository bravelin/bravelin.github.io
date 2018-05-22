<template>
    <div class="page article">
        <h2 class="title">Git的常用命令</h2>
        <div class="content">
            <p><strong>git init</strong>：在本地新建一个repo，使用这个命令初始化repo；</p>
            <p><strong>git clone [repo-url]</strong>：克隆远程repo；</p>
            <p><strong>git status</strong>：查询repo的状态；</p>
            <p><strong>git reset --hard origin dev</strong>：恢复成origin/dev分支的状态；</p>
            <p><strong>git add [file]</strong>：将工作文件修改提交到本地暂存区；</p>
            <p><strong>git rm [file]</strong>：从版本库中删除文件；</p>
            <p><strong>git push origin :serverfix</strong>：删除远程分支；</p>
            <p><strong>git branch -D [branchName]</strong>：删除本地分支；</p>
            <p><strong>git fetch origin --prune</strong>：更新分支信息；</p>
        </div>
        <footer>2016年08月11日</footer>
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
