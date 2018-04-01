<template>
    <div></div>
</template>
<script>
    import Global from '@/libs/global'
    import Catalog from '@/components/catalog'
    export default {
        data () {
            return {
                catalog: []
            }
        },
        components: {
            Catalog
        },
        created () {
            let that = this
            window.addEventListener('scroll', that.doHandlerScroll)
        },
        mounted () {
            const that = this
            that.$nextTick(() => {
                const codes = document.querySelectorAll('code')
                if (codes.length > 0) {
                    codes.forEach(code => { hljs.highlightBlock(code) })
                }
                const catalogList = document.querySelectorAll('h3.title')
                if (catalogList.length > 0) {
                    const list = []
                    const random = Math.round(Math.random() * 1000000)
                    let sectionId = ''
                    that.catalog = catalogList.forEach((item, index) => {
                        sectionId = 'section' + random + '-' + index
                        item.setAttribute('id', sectionId)
                        list.push({ text: item.innerHTML, id: sectionId, el: item, active: false })
                    })
                    that.catalog = list
                    if (list.length > 0) {
                        Global.hasCatalog = true
                    }
                    // console.log('that.catalog：', that.catalog)
                }
            })
        },
        methods: {
            doHandlerScroll () {
                const that = this
                let i = that.catalog.length - 1
                let el
                let activeIndex
                for (; i >= 0; i--) {
                    el = that.catalog[i].el
                    if (el.getBoundingClientRect().top < 10) {
                        activeIndex = i
                        break
                    }
                }
                that.catalog = that.catalog.map((item, index) => {
                    item.active = (index == activeIndex)
                    return item
                })
            }
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.doHandlerScroll)
        }
    }
</script>
