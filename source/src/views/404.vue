<template>
    <div class="page page-404">
        <p>404</p>
        <p>当前您访问的页面不存在！{{ count }}秒之后回到
            <router-link :to="{ name: 'articles' }">主页</router-link>
        </p>
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                timer: null,
                count: 5
            }
        },
        created: function () {
            this.doCount()
        },
        methods: {
            doCount: function () {
                var that = this
                that.timer = setTimeout(function () {
                    if (that.count > 0) {
                        that.count--
                        that.doCount()
                    } else {
                        that.$router.push({name: 'articles'})
                    }
                }, 1000)
            }
        },
        beforeDestroy: function () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
        }
    }
</script>
