<template>
    <div></div>
</template>
<script>
    export default {
        data () {
            return {
                catalog: []
            }
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
                        list.push({ text: item.innerHTML, id: sectionId, el: item })
                    })
                    that.catalog = list
                    console.log('that.catalog：', that.catalog)
                }
            })
        },
        methods: {
            doHandlerScroll () {
                const that = this
                const doc = document
                const top = doc.body.scrollTop || doc.documentElement.scrollTop
                console.log('top')
            }
        },
        beforeDestoryed () {
            window.removeEventListener('scroll', this.doHandlerScroll)
        }
    }
</script>
