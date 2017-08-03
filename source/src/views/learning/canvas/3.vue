<style scoped>
    .exp{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    canvas{
        width: 300px;
        height: 150px !important;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
    }
</style>
<template>
    <div class="page article">
        <h2 class="title">Canvas学习笔记之三：文本</h2>
        <div class="content">
            <h3 class="title">概述</h3>
            <p>Canvas绘图环境提供的与文本有关的方法：</p>
            <p><strong>1、strokeText(text, x, y, maxWidth)</strong>：文本的描边；</p>
            <p><strong>2、fillText(text, x, y, maxWidth)</strong>：文本的填充；</p>
            <p><strong>3、measureText(text)</strong>：计算文本所占据的宽度。</p>
            <p>与文本有关的属性：<strong>font</strong>、<strong>textAlign</strong>、<strong>textBaseline</strong></p>
            <h3 class="title">文本的描边与填充</h3>
            <p>文本的描边（带阴影）：</p>
            <div class="exp">
                <canvas ref="c1" width="300" height="150"></canvas>
            </div>
            <pre><code>drawStrokedText () {
    let that = this
    let el = that.$refs.c1
    let context = el.getContext('2d')
    let w = el.width
    let h = el.height
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.strokeStyle = '#f96'
    context.font = '80px 宋体'

    // 增加阴影
    context.shadowColor = 'rgba(0,0,0,0.6)'
    context.shadowOffsetX = 5
    context.shadowOffsetY = 5
    context.shadowBlur = 8

    context.strokeText('HTML5', w / 2, h / 2)
}</code></pre>
            <p>文本的填充（带阴影）：</p>
            <div class="exp">
                <canvas ref="c2" width="300" height="150"></canvas>
            </div>
            <pre><code>context.fillStyle = '#f96'
context.fillText('HTML5', w / 2, h / 2)</code></pre>
            <p>填充和描边：</p>
            <div class="exp">
                <canvas ref="c3" width="300" height="150"></canvas>
            </div>
            <pre><code>context.strokeStyle = '#f96'
context.fillStyle = '#f96'
context.strokeText('HTML5', w / 2, h / 2)
context.fillText('HTML5', w / 2, h / 2)</code></pre>
            <p><strong>strokeText()和fillText()方法可以通过可选的第四参数来指定文本的最大宽度。</strong></p>
            <h3 class="title">字型属性font设置</h3>
            <p>font的各个分量：</p>
            <p><strong>1、font-style</strong>：可取值normal、italic（斜体字）、oblique（倾斜的字）</p>
            <p><strong>2、font-variant</strong>：可取值normal、small-caps（设置小型大写字母显示，所有小写字母均会被转换为大写，但是字体会显的略小一点）</p>
            <p><strong>3、font-weight</strong>：可取值normal、bold、bolder、lighter、100、200、300...900（normal相当于数值400，bold相当于数值700）</p>
            <p><strong>4、font-size</strong>：可取值xx-small、x-small、medium、large、x-large、xx-large、smaller、larger、length与%</p>
            <p><strong>5、line-height</strong>：浏览器强制设置为normal</p>
            <p><strong>6、font-family</strong>：字体名称</p>
        </div>
        <footer>2016年06月25日</footer>
        <comments></comments>
    </div>
</template>
<script>
    import Page from '../../page'
    module.exports = {
        extends: Page,
        mounted () {
            let that = this
            that.$nextTick(() => {
                that.drawStrokedText()
                that.drawFilledText()
                that.drawStrokedFilledText()
            })
        },
        methods: {
            drawStrokedText () {
                let that = this
                let el = that.$refs.c1
                let context = el.getContext('2d')
                let w = el.width
                let h = el.height
                context.textAlign = 'center'
                context.textBaseline = 'middle'
                context.strokeStyle = '#f96'
                context.font = '80px 宋体'

                // 增加阴影
                context.shadowColor = 'rgba(0,0,0,0.6)'
                context.shadowOffsetX = 5
                context.shadowOffsetY = 5
                context.shadowBlur = 8

                context.strokeText('HTML5', w / 2, h / 2)
            },
            drawFilledText () {
                let that = this
                let el = that.$refs.c2
                let context = el.getContext('2d')
                let w = el.width
                let h = el.height
                context.textAlign = 'center'
                context.textBaseline = 'middle'
                context.fillStyle = '#f96'
                context.font = '80px 宋体'

                // 增加阴影
                context.shadowColor = 'rgba(0,0,0,0.6)'
                context.shadowOffsetX = 5
                context.shadowOffsetY = 5
                context.shadowBlur = 8

                context.fillText('HTML5', w / 2, h / 2)
            },
            drawStrokedFilledText () {
                let that = this
                let el = that.$refs.c3
                let context = el.getContext('2d')
                let w = el.width
                let h = el.height
                context.textAlign = 'center'
                context.textBaseline = 'middle'
                context.fillStyle = '#f96'
                context.strokeStyle = '#f96'
                context.font = '80px 宋体'

                // 增加阴影
                context.shadowColor = 'rgba(0,0,0,0.6)'
                context.shadowOffsetX = 5
                context.shadowOffsetY = 5
                context.shadowBlur = 8

                context.strokeText('HTML5', w / 2, h / 2)
                context.fillText('HTML5', w / 2, h / 2)
            }
        }
    }
</script>
