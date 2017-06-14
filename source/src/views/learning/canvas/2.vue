<style scope>
    .gradient{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        padding-bottom: 5px !important;
    }
    .gradient>canvas{
        width: 250px;
        height: 250px;
        border: 1px solid #e0e0e0;
        margin-bottom: 15px;
    }
</style>
<template>
    <div class="page article">
        <h2 class="title">Canvas学习笔记之二：绘制</h2>
        <div class="content">
            <h3 class="title">Canvas的绘制模型</h3>
            <p>浏览器按照如下步骤来绘制图形：</p>
            <p>(1)、将图形绘制到一个无限大的透明位图中，在绘制时遵循当前的填充模式、描边模式以及线条样式；</p>
            <p>(2)、使用当前绘图环境的阴影设定将图形的阴影绘制到另外的一幅位图中；</p>
            <p>(3)、将阴影中的每一个像素的alpha分量乘以绘图环境对象的globalAlpha属性值；</p>
            <p>(4)、将绘有阴影的位图与经过剪辑区域剪切过的canvas进行图像合成，使用当前的合成模式参数；</p>
            <p>(5)、将图形的每一个像素颜色分量，乘以绘图环境对象的globalAlpha属性值；</p>
            <p>(6)、将绘有图形的位图，合成到当前经过剪辑区域剪切过的canvas位图之上，使用当前的合成操作符。</p>
            <p>只有在启用阴影时才会执行第2~4步。</p>
            <h3 class="title">矩形的绘制</h3>
            <p>Canvas提供如下3个api，分别用于矩形的清除、描边、填充：</p>
            <pre><code>clearRect(double x, double y, double w, double h)
strokeRect(double x, double y, double w, double h)
fillRect(double x, double y, double w, double h)</code></pre>
            <h3 class="title">渐变色</h3>
            <p>Canvas支持线性（linear）渐变与放射（radial）渐变。</p>
            <p>线性渐变通过调用<strong>createLinearGradient()</strong>方法创建，需要向该方法传入两个点的坐标，两点之间的连线就是canvas建立线性渐变效果的依据，该方法会返回CanvasGradient实例。可以添加颜色停止点设置渐变色。</p>
            <div class="exp gradient">
                <canvas ref="c1" width="250" height="250"></canvas>
                <canvas ref="c2" width="250" height="250"></canvas>
                <canvas ref="c3" width="250" height="250"></canvas>
                <canvas ref="c4" width="250" height="250"></canvas>
            </div>
            <pre><code>initLinearGradient () {
    let that = this
    let refs = that.$refs
    let w = 250
    let h = 250
    that.drawLinearGradient(refs.c1, {x0: 0, y0: 0, x1: w, y1: 0})
    that.drawLinearGradient(refs.c2, {x0: 0, y0: 0, x1: 0, y1: h})
    that.drawLinearGradient(refs.c3, {x0: 0, y0: 0, x1: w, y1: h})
    that.drawLinearGradient(refs.c4, {x0: 0, y0: 0, x1: 0, y1: h / 2})
}
drawLinearGradient (el, pos) {
    let context = el.getContext('2d')
    let gradient = context.createLinearGradient(pos.x0, pos.y0, pos.x1, pos.y1)
    gradient.addColorStop(0, 'blue')
    gradient.addColorStop(0.25, 'white')
    gradient.addColorStop(0.5, 'purple')
    gradient.addColorStop(0.75, 'red')
    gradient.addColorStop(1, 'yellow')
    context.fillStyle = gradient
    context.fillRect(0, 0, el.width, el.height)
}</code></pre>
        <p><strong>使用线性渐变填充时，Canvas会使用最后一种颜色来填充非渐变区域。</strong></p>
        <p>创建线性渐变，需要使用两个圆，他们表示某个圆锥的起始位置。</p>
        <div class="exp gradient">
            <canvas ref="c5" width="290" height="290"></canvas>
        </div>
        <pre><code>let context = el.getContext('2d')
let w = el.width
let h = el.height
let gradient = context.createRadialGradient(w / 2, h, 1, w / 2, 0, 128)
gradient.addColorStop(0, 'blue')
gradient.addColorStop(0.25, 'white')
gradient.addColorStop(0.5, 'purple')
gradient.addColorStop(0.75, 'red')
gradient.addColorStop(1, 'yellow')
context.fillStyle = gradient
context.fillRect(0, 0, el.width, el.height)</code></pre>
        <p><strong>放射渐变的填充范围仅局限于两个圆形所定义的圆锥区域，不会使用最后一个渐变色填充剩余区域。</strong></p>
        <h3 class="title">图案填充</h3>
        <p>Canavs允许使用图案对图形和文本进行填充，图案元素可以是这3种：<strong>Image元素、Video元素、canvas元素。</strong></p>
        <p>使用createPattern(patternObj, repeatTypeString)方法创建图案，patternObj指的是图案元素，repeatTypeString指的是图案的重复方式："repeat"、"repeat-x"、"repeat-y"以及"no-repeat"4种方式。</p>
        <h3 class="title">阴影</h3>
        <p>阴影效果通过如下4个属性值设置：</p>
        <ol>
            <li>1、shadowColor：CSS3格式的颜色，默认值：rgba(0,0,0,0)；</li>
            <li>2、shadowOffsetX：阴影的水平像素偏移；</li>
            <li>3、shadowOffsetY：阴影的垂直像素偏移；</li>
            <li>4、shadowBlur：一个与像素无关的值，该值被用于高斯模糊方程之中。</li>
        </ol>
        <h3 class="title">路径、描边与填充</h3>
        <p>strokeRect()和fillRect()是Canavs中仅有的两个可以立即绘制图形的方法，其他方法都是基于路径的。<strong>不论一个路径是否开放或者封闭，都可以进行填充。</strong>与路径有关的方法：</p>
        <ol>
            <li>1、<strong>beginPath()</strong>：将当前路径下的子路径都清除，以此重置当前路径；</li>
            <li>2、<strong>closePath()</strong>：显式地封闭某段开放路径；</li>
            <li>3、<strong>fill()</strong>：填充；</li>
            <li>4、<strong>stroke()</strong>：描边；</li>
        </ol>
        </div>
        <footer>2016年06月15日</footer>
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
                that.initLinearGradient() // 绘制线性渐变
                that.initRadialGradient() // 绘制线性渐变
            })
        },
        methods: {
            /**
            *绘制线性渐变
            **/
            initLinearGradient () {
                let that = this
                let refs = that.$refs
                let w = 250
                let h = 250
                that.drawLinearGradient(refs.c1, {x0: 0, y0: 0, x1: w, y1: 0})
                that.drawLinearGradient(refs.c2, {x0: 0, y0: 0, x1: 0, y1: h})
                that.drawLinearGradient(refs.c3, {x0: 0, y0: 0, x1: w, y1: h})
                that.drawLinearGradient(refs.c4, {x0: 0, y0: 0, x1: 0, y1: h / 2})
            },
            drawLinearGradient (el, pos) {
                let context = el.getContext('2d')
                let gradient = context.createLinearGradient(pos.x0, pos.y0, pos.x1, pos.y1)
                gradient.addColorStop(0, 'blue')
                gradient.addColorStop(0.25, 'white')
                gradient.addColorStop(0.5, 'purple')
                gradient.addColorStop(0.75, 'red')
                gradient.addColorStop(1, 'yellow')
                context.fillStyle = gradient
                context.fillRect(0, 0, el.width, el.height)
            },
            /**
            * 创建放射渐变
            */
            initRadialGradient () {
                let that = this
                let el = that.$refs.c5
                let context = el.getContext('2d')
                let w = el.width
                let h = el.height
                let gradient = context.createRadialGradient(w / 2, h, 1, w / 2, 0, 128)
                gradient.addColorStop(0, 'blue')
                gradient.addColorStop(0.25, 'white')
                gradient.addColorStop(0.5, 'purple')
                gradient.addColorStop(0.75, 'red')
                gradient.addColorStop(1, 'yellow')
                context.fillStyle = gradient
                context.fillRect(0, 0, el.width, el.height)
            }
        }
    }
</script>
