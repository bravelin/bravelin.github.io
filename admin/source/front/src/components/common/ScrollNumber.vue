<style lang="sass">
    @import '../../sass/components/scrollNumber.scss';
</style>
<template>
    <div class="scroll-num-wrap" :style="{ width: cursors.length * 40 + 'px' }">
        <ScrollNumberItem v-for="(v, index) in cursors" :index="v" :key="index"></ScrollNumberItem>
    </div>
</template>
<script>
    import ScrollNumberItem from '@/components/common/ScrollNumberItem'
    export default {
        name: 'ScrollNumber',
        components: {
            ScrollNumberItem
        },
        data () {
            return {
                cursors: []
            }
        },
        watch: {
            num (newVal, oldVal) {
                this.splitNum()
            }
        },
        props: {
            num: {
                type: Number,
                default: 0
            }
        },
        created () {
            const that = this
            that.splitNum()
        },
        methods: {
            splitNum () {
                const that = this
                let cursors = (that.num + '').split('')
                for (let i = cursors.length - 2; i >= 0; i = i - 3) {
                    if (i > 1) {
                        cursors.splice(i - 1, 0, 10)
                    }
                }
                let tempCursors = cursors.map(item => {
                    if (item - 0 < 10) {
                        return 0
                    } else {
                        return item
                    }
                })
                that.cursors = tempCursors
                let reallyCursors = cursors.map(item => item - 0)
                setTimeout(() => {
                    that.cursors = reallyCursors
                }, 30)
            }
        }
    }
</script>
