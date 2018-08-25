<template>
    <div></div>
</template>
<script>
    import Global from '@/libs/global'
    import Catalog from '@/components/Catalog'
    export default {
        data () {
            return {
                catalog: [],
                showPreview: false,
                previewList: [],
                previewIndex: 0
            }
        },
        components: {
            Catalog
        },
        created () {
            const that = this
            window.addEventListener('scroll', that.doHandlerScroll)
        },
        mounted () {
            const that = this
            that.$nextTick(() => {
                // insert icp&copyright info
                const footer = document.createElement('footer')
                footer.innerHTML = '©2018 zhangjialin 赣ICP备<a href="http://www.miitbeian.gov.cn/">18011067号</a>'
                that.$el.appendChild(footer)
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
                // image preview
                const imageList = document.querySelectorAll('.content figure>img')
                if (imageList.length > 0) {
                    that.getImageSize(0, imageList)
                }
            })
        },
        methods: {
            getImageSize (index, imageList) {
                const that = this
                let img = new Image()
                let el = imageList[index]
                img.onload = function () {
                    that.previewList.push({
                        src: el.src,
                        w: this.width,
                        h: this.height
                    })
                    index++
                    if (index < imageList.length) {
                        that.getImageSize(index, imageList) // 获取下一个图片的尺寸
                    } else {
                        that.$el.addEventListener('click', that.doPreview) // 对img增加click监听
                    }
                }
                img.src = el.src
            },
            doPreview (e) {
                const that = this
                if (/img/i.test(e.target.tagName) && !that.showPreview && !e.target.classList.contains('pswp__img')) {
                    that.previewIndex = 0 // 获取index
                    for (let i = 0; i < that.previewList.length; i++) {
                        if (that.previewList[i].src == e.target.src) {
                            that.previewIndex = i
                            break
                        }
                    }
                    that.showPreview = true
                }
            },
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
            const that = this
            window.removeEventListener('scroll', that.doHandlerScroll)
            if (that.previewList.length > 0) {
                that.$el.removeEventListener('click', that.doPreview)
            }
        }
    }
</script>
