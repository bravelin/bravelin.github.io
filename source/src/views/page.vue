<template>
    <div></div>
</template>
<script>
    export default {
        mounted () {
            console.log('222222222222222')
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
