<template>
    <div class="page article">
        <h2 class="title">《ES6标准入门》笔记之八：对象的扩展</h2>
        <div class="content">
            <h3 class="title">属性的简洁表示法</h3>
        </div>
        <footer>2017年05月09日</footer>
        <comments></comments>
    </div>
</template>
<script>
    module.exports = {
        mounted: function () {
            this.$nextTick(function () {
                var codes = document.querySelectorAll('code')
                if (codes.length > 0) {
                    for (let k = 0; k < codes.length; k++) {
                        hljs.highlightBlock(codes[k])
                    }
                }
            })
        }
    }
</script>
