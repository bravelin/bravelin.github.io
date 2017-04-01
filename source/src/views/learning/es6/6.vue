<template>
    <div class="page article">
        <h2 class="title">《ES6标准入门》笔记之六：数组的扩展</h2>
        <div class="content">
            <h3 class="title">RegExp构造函数</h3>
        </div>
        <footer>2017年03月21日</footer>
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
