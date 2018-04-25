<style lang="sass">
    @import '../../sass/components/pagination.scss';
</style>
<template>
    <div class="pagination" v-show="total>1">
        <div>
            <a class="prev" :class="{ disable: !hasPrev }" @click="doPrev"><i class='icon-arrow-left'></i>上一页</a>
            <a v-for="item in posArr" :class="{ curr: item==curr }" @click="doClickItem(item)">{{ item }}</a>
            <a class="next" :class="{ disable: !hasNext }" @click="doNext"><i class='icon-arrow-right'></i>下一页</a>
            <span class="total"> 共 {{ total }} 页</span>
            <div>到 <input type="text"  maxlength="5" v-model="gotoPage" @input="doInputGotoPage" @keyup.enter="doGo"/> 页</div>
            <button @click="doGo">确定</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'pagination',
        data () {
            return {
                gotoPage: '' // 跳转的页码
            }
        },
        computed: {
            hasPrev () {
                return this.curr != 1
            },
            hasNext () {
                let that = this
                return that.curr != that.total
            },
            posArr () {
                let that = this
                let list = []
                let i = 0
                let total = that.total
                if (total <= 7) {
                    for (i = 1; i <= total; i++) {
                        list.push(i)
                    }
                } else {
                    list[0] = 1
                    list[6] = total
                    let left = that.curr - 1
                    let right = that.curr + 1
                    if (left < 3) {
                        for (i = 1; i <= 4; i++) {
                            list[i] = i + 1
                        }
                        list[5] = '...'
                    } else if (total - right < 3) {
                        for (i = 5; i >= 2; i--) {
                            list[i] = list[i + 1] - 1
                        }
                        list[1] = '...'
                    } else {
                        list[1] = '...'
                        list[2] = left
                        list[3] = that.curr
                        list[4] = right
                        list[5] = '...'
                    }
                }
                return list
            }
        },
        props: {
            total: { // 总页数
                type: Number,
                required: true
            },
            curr: {
                type: Number,
                required: true
            }
        },
        methods: {
            doInputGotoPage () {
                let that = this
                let val = that.gotoPage
                if (/\D/.test(val)) {
                    val = val.replace(/\D/g, '')
                }
                that.gotoPage = val
                if (val && parseInt(val) > that.total) {
                    that.gotoPage = val.substring(0, val.length - 1)
                }
            },
            doGo () {
                let that = this
                let page = that.gotoPage - 0
                if (page > 0 && page <= that.total) {
                    that.$emit('switch', page)
                }
            },
            doPrev () {
                let that = this
                if (that.hasPrev) {
                    that.$emit('switch', that.curr - 1)
                }
            },
            doNext () {
                let that = this
                if (that.hasNext) {
                    that.$emit('switch', that.curr + 1)
                }
            },
            doClickItem (page) {
                if (page != '...') {
                    this.$emit('switch', page)
                }
            }
        }
    }
</script>