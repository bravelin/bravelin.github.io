<template>
    <div class="page page-404" :style="{ height: h + 'px' }">
        <p>404</p>
        <p>当前您访问的页面不存在！{{ count }}秒之后回到
            <router-link :to="{ name: 'home' }">主页</router-link>
        </p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                timer: null,
                count: 5,
                h: 500
            }
        },
        mounted () {
            const that = this
            that.$nextTick(() => {
                that.h = (document.documentElement.clientHeight || window.innerHeight) - 45
            })
        },
        created () {
            this.doCount()
        },
        methods: {
            doCount () {
                var that = this
                that.timer = setTimeout(() => {
                    if (that.count > 0) {
                        that.count--
                        that.doCount()
                    } else {
                        that.$router.push({name: 'home'})
                    }
                }, 1000)
            }
        },
        beforeDestroy () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
        }
    }
</script>
