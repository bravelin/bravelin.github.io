<style lang="sass">
    @import '../../sass/components/imageCut.scss';
</style>
<template>
    <div class="image-cut-wrap">
        <div class="image-cut-content-wrap">
            <img ref="cutImg"/>
        </div>
        <div class="image-cut-preview-wrap">
            <div ref="preview"></div>
            <div v-show="imgWidth!='-' ">{{ imgWidth }}px * {{ imgHeight }}px</div>
        </div>
    </div>
</template>
<script>
    import Cropper from 'cropperjs'
    import tipShow from '../../utils/tipShow'

    window.URL = window.URL || window.webkitURL
    export default {
        name: 'imageCut',
        data () {
            return {
                corpper: null,
                fileInputEl: null, // 选择图片的type=file的input
                option: null,
                cutImg: null,
                preview: null,
                loadOption: {},
                imgWidth: '-',
                imgHeight: '-'
            }
        },
        props: {
            config: {
                type: Object
            }
        },
        created () {
            let that = this
            that.option = { ...that.config }
            let option = that.option
            option.maxSize = option.maxSize || 10240
            option.ratioW = option.ratioW || 1
            option.ratioH = option.ratioH || 1
            option.viewMode = option.viewMode || 1
            option.autoCropArea = option.autoCropArea || 1
            // 选择图片的input的class---option.fileInput
            if (!option.fileInput) {
                console.log('ImageCut组件缺少fileInput')
            }
        },
        mounted () {
            let that = this
            that.$nextTick(() => {
                let refs = that.$refs
                if (that.option.fileInput) {
                    that.fileInputEl = document.querySelector('.' + that.option.fileInput)
                    if (that.fileInputEl) {
                        that.fileInputEl.addEventListener('change', that.doFileInputChange)
                        that.fileInputEl.addEventListener('click', that.doFileInputClick)
                    }
                }
                that.cutImg = refs.cutImg
                that.preview = refs.preview
            })
        },
        methods: {
            doFileInputClick () {
                this.fileInputEl.value = ''
            },
            doFileInputChange () {
                let that = this
                let option = that.option
                let el = that.fileInputEl
                if (el.files[0]) {
                    let filePath = el.value
                    let dotIndex = filePath.lastIndexOf('.')
                    let fileExt = filePath.substr(dotIndex + 1).toLowerCase()

                    if (!/^(jpg|png|jpeg)$/.test(fileExt)) {
                        el.value = ''
                        tipShow('请上传后缀名为jpg或png的照片！', false)
                        return false
                    }
                    let fileSize = el.files[0].size
                    fileSize = Math.round(fileSize / 1024 * 100) / 100
                    if (fileSize >= option.maxSize) {
                        let maxSizeStr
                        if (option.maxSize >= 1024) {
                            maxSizeStr = Math.round(option.maxSize / 1024) + 'MB'
                        } else {
                            maxSizeStr = Math.round(option.maxSize) + 'KB'
                        }
                        el.value = ''
                        tipShow('照片最大尺寸为' + maxSizeStr + '，请重新上传！')
                        return false
                    }
                    let url = URL.createObjectURL(el.files[0])
                    that.load(url, { blobURL: url })
                    that.$emit('load')
                }
            },
            load (imgSrc, loadOption) {
                let that = this
                let option = that.option
                loadOption = loadOption || {}
                that.loadOption = loadOption
                loadOption.autoCropArea = loadOption.autoCropArea || 1
                that.cutImg.src = imgSrc
                if (!that.corpper) {
                    let corpperOption = {
                        aspectRatio: option.ratioW / option.ratioH,
                        autoCrop: true,
                        checkCrossOrigin: false,
                        autoCropArea: option.autoCropArea,
                        viewMode: option.viewMode,
                        preview: that.preview,
                        built: function () {
                            if (loadOption.blobURL) {
                                URL.revokeObjectURL(loadOption.blobURL)
                            }
                        },
                        crop: function (e) {
                            let detail = e.detail
                            that.imgHeight = Math.round(detail.height)
                            that.imgWidth = Math.round(detail.width)
                        }
                    }
                    that.corpper = new Cropper(that.cutImg, corpperOption)
                    that.$emit('ready', that.corpper)
                } else {
                    that.corpper.replace(imgSrc)
                }
            }
        },
        destroyed () {
            let that = this
            if (that.fileInputEl) {
                that.fileInputEl.removeEventListener('change', that.doFileInputChange)
                that.fileInputEl.removeEventListener('click', that.doFileInputClick)
            }
            if (that.corpper) {
                that.corpper.destroy()
            }
        }
    }
</script> 