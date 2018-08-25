<template>
  <div class="article-catalog" v-if="catalog.length>0">
    <h3>Catalog</h3>
    <ul><li v-for="(item, itemIndex) in catalog" :key="itemIndex" :class="{ active: item.active }" @click="slideTo(item.el)"><a>{{ itemIndex + 1 }}. {{ item.text }}</a></li></ul>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                timer: null,
                timeCount: 0
            }
        },
        props: {
            catalog: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        methods: {
            slideTo (el) {
                let that = this
                let scrollY = el.getBoundingClientRect().top
                if (that.timer) {
                    clearTimeout(that.timer)
                }
                that.timeCount = 0
                that.scrollTo(scrollY, el, scrollY > 0)
            },
            scrollTo (destY, el, isDown) { // isDown向下滑动
                const that = this
                let speeding = 5
                let scrollY = isDown ? Math.ceil(destY / speeding) : Math.floor(destY / speeding)
                window.scrollBy(0, scrollY)
                destY = el.getBoundingClientRect().top
                if ((isDown && destY > 0) || (!isDown && destY < 0)) {
                    that.timer = setTimeout(() => {
                        that.timeCount ++
                        if (that.timeCount > 40) {
                            clearTimeout(that.timer)
                        } else {
                            that.scrollTo(destY, el, isDown)
                        }
                    }, 10)
                }
            }
        }
    }
</script>
