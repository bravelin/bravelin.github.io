<template>
    <div></div>
</template>
<script>
    module.exports = {
        mounted () {
            this.$nextTick(() => {
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
