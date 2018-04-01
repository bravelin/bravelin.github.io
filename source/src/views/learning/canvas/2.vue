<style scoped>
    .exp{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .gradient{
        justify-content: space-around;
        flex-wrap: wrap;
        padding-bottom: 5px !important;
    }
    canvas{
        width: 250px;
        height: 250px !important;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
    }
    .gradient>canvas{
        margin-bottom: 15px;
    }
    .grid>canvas{
        width: 95%;
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
gradient.addColorStop(0, '#333')
gradient.addColorStop(1, '#fff')
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
            <li>5、<strong>rect(x,y,w,h)</strong>：添加矩形子路径，逆时针方向创建；</li>
            <li>6、<strong>arc(centerX,centerY,radius,startAngle,endAngle,counterClockwise)</strong>：添加圆弧子路径，counterClockwise默认为false(顺时针)，设置为true则逆时针。</li>
        </ol>
        <p>填充路径是使用<strong>非零环绕原则</strong>：从区域内部画一条足够长的线段，与路径的顺时针部分相交则加1，逆时针部分相交则-1，如果最终值为0则不填充该区域，否则填充。</p>
        <p>绘制圆环：</p>
        <div class="exp circle">
            <canvas ref="c6" width="250" height="250"></canvas>
        </div>
        <pre><code>drawTwoCircle () {
    let that = this
    let el = that.$refs.c6
    let context = el.getContext('2d')
    let w = el.width
    let h = el.height
    context.fillStyle = 'rgba(0,0,0,0.5)'
    context.shadowColor = 'rgba(0,0,0,0.8)'
    context.shadowOffsetX = 8
    context.shadowOffsetY = 8
    context.shadowBlur = 20
    context.arc(w / 2, h / 2, 100, 0, 2 * Math.PI, true)
    context.arc(w / 2, h / 2, 70, 0, 2 * Math.PI, false)
    context.fill()
}</code></pre>
        <h3 class="title">线段</h3>
        <p>主要有两个API：<strong>moveTo(x,y)</strong>和<strong>lineTo(x,y)</strong>。<strong>如果要绘制一像素的线条，需要将其绘制在某两个像素之间的那个像素中。</strong></p>
        <p>网格的绘制：</p>
        <div class="exp grid" ref="grid">
            <canvas ref="c7" width="250" height="250"></canvas>
        </div>
        <pre><code>drawGrid () {
    let that = this
    let el = that.$refs.c7
    let context = el.getContext('2d')
    let w = el.width
    let h = el.height
    let stepX = 10
    let stepY = 10

    context.clearRect(0, 0, w, h)
    context.strokeStyle = '#e0e0e0'
    context.lineWidth = 0.5
    for (let i = stepX + 0.5; i < w; i += stepX) {
        context.beginPath()
        context.moveTo(i, 0)
        context.lineTo(i, h)
        context.stroke()
    }

    for (let j = stepY + 0.5; j < h; j += stepY) {
        context.beginPath()
        context.moveTo(0, j)
        context.lineTo(w, j)
        context.stroke()
    }
}</code></pre>
            <p>虚线的绘制：</p>
            <div class="exp grid"><canvas ref="c8" width="250" height="250"></canvas></div>
            <pre><code>drawDashedLine () {
    let that = this
    let el = that.$refs.c8
    let context = el.getContext('2d')
    let w = el.width
    let h = el.height
    let startPoint = {x: 15, y: 15}
    let endPoint = {x: w - 20, y: h - 30}
    let deltX = endPoint.x - startPoint.x
    let deltY = endPoint.y - startPoint.y
    let dashLen = 4
    let num = Math.floor(Math.sqrt(deltX * deltX + deltY * deltY) / dashLen)

    context.beginPath()
    context.strokeStyle = 'rgba(0,0,0,0.8)'
    context.lineWidth = 1
    for (let i = 0; i < num; i++) {
        context[i % 2 == 0 ? 'moveTo' : 'lineTo'](startPoint.x + (deltX / num) * i, startPoint.y + (deltY / num) * i)
    }
    context.stroke()
}</code></pre>
            <p>lineCap的取值：butt、round、square，默认为butt，控制线段端点的绘制。</p>
            <p>lineJoin的取值：round、bevel、miter，默认值为miter，控制线段的连接点的绘制。</p>
            <p>miterLimit：斜接线长度与二分之一线宽的比值，如果斜接线的长度超过了此值，浏览器将以bevel的方式绘制线段的连接点。</p>
            <h3 class="title">圆弧与圆形</h3>
            <p>arc()方法所绘制可能不仅仅是圆弧，如果当前路径有子路径的话，浏览器会将子路径的终点与圆弧的起点用线段连接起来。</p>
            <p>另外一个用于创建圆弧路径的方法是arcTo(x1,y1,x2,y2,radius)，参数分别代表两个点及半径，此圆弧与当前点到第一个点(x1,y1)，的连线相切，并且与(x1,y1)到(x2,y2)的连线也相切。</p>
            <p>圆角矩形的绘制：</p>
            <div class="exp grid" ref="grid">
                <canvas ref="c9" width="250" height="250"></canvas>
            </div>
            <pre><code>drawRoundedRect () {
    let that = this
    let el = that.$refs.c9
    let context = el.getContext('2d')
    let w = Math.floor(el.width * 0.9)
    let h = Math.floor(el.height * 0.9)
    let startX = (el.width - w) / 2
    let startY = (el.height - h) / 2
    let radius = 20
    let endX = startX + w
    let endY = startY + h
    context.strokeStyle = 'rgba(0,0,0,0.5)'
    context.fillStyle = 'rgba(0,0,0,0.3)'
    context.lineWidth = 1
    context.beginPath()
    context.moveTo(startX + radius, startY)
    context.arcTo(endX, startY, endX, startY + radius, radius)
    context.arcTo(endX, endY, endX - radius, endY, radius)
    context.arcTo(startX, endY, startX, endY - radius, radius)
    context.arcTo(startX, startY, startX + radius, startY, radius)
    context.stroke()
    context.fill()
}</code></pre>
            <h3 class="title">贝塞尔曲线</h3>
            <p>分为<strong>平方贝塞尔曲线</strong>（由两个锚点和一个控制点）和<strong>立方贝塞尔曲线</strong>（两个锚点以及两个控制点）。</p>
            <p>平方贝塞尔曲线使用quadraticCurveTo方法绘制，接受四个参数，分别表示控制点和锚点的X、Y坐标。所绘制的曲线，会将锚点与当前路径中最后一个点连接起来。</p>
            <p>使用贝赛尔曲线绘制圆角：</p>
            <div class="exp grid">
                <canvas ref="c10" width="250" height="250"></canvas>
            </div>
            <pre><code>drawArrow () {
    let that = this
    let el = that.$refs.c10
    let context = el.getContext('2d')
    let margin = 30
    let w = el.width
    let h = el.height
    context.strokeStyle = 'rgba(0,0,0,0.5)'
    context.fillStyle = 'rgba(0,0,0,0.3)'
    context.beginPath()
    context.moveTo(w - margin, margin * 2)
    context.lineTo(w - margin, h - margin * 2)
    context.quadraticCurveTo(w - margin, h - margin, w - margin * 2, h - margin)
    context.lineTo(w - 250, h / 2 + margin)
    context.quadraticCurveTo(w - 300, h / 2, w - 250, h / 2 - margin)
    context.lineTo(w - margin * 2, margin)
    context.quadraticCurveTo(w - margin, margin, w - margin, margin * 2)
    context.fill()
    context.stroke()
}</code></pre>
            <h3 class="title">坐标系的变换</h3>
            <p>Canvas中平移、旋转、缩放坐标系的方法：</p>
            <ol>
                <li>1、<strong>rotate(angle)</strong>：按照给定的角度旋转坐标系；</li>
                <li>2、<strong>scale(x, y)</strong>：在X、Y方向上按照设定的数值来缩放坐标系；</li>
                <li>3、<strong>translate(x, y)</strong>：在X、Y方向上平移坐标系。</li>
            </ol>
            <p><strong>水平镜像变换：scale(-1, 1)；垂直镜像变换：scale(1, -1)。</strong></p>
            <p>操作变换矩阵的方法：<strong>transform(a,b,c,d,e,f)</strong>（在当前的变换矩阵之上叠加运用变换效果）和<strong>setTransform(a,b,c,d,e,f)</strong>（重置当前的变换矩阵）。两者可以实现上面三种变换方法无法实现的变换，比如错切。</p>
            <p>坐标(x, y)绕原点旋转angle角度之后的坐标(x', y')计算如下：</p>
            <pre><code>x' = x * cos(angle) - y * sin(angle)
y' = y * cos(angle) + y * sin(angle)</code></pre>
            <p>矩阵变换有下面的方程式：</p>
            <pre><code>x' = a * x + c * y + e
y' = b * x + d * y + f</code></pre>
            <h3 class="title">剪辑区域</h3>
            <p>由路径定义的一块区域，浏览器会将所有的绘图操作都限制在本区域内。默认情况下剪辑区域就是整个Canvas，除非创建路径并调用clip()方法显式地设置剪辑区域。</p>
            <p>利用剪辑区域实现的伸缩式动画：</p>
            <div class="exp clip">
                <canvas ref="c11" width="280" height="280" style="width:280px;height:280px !important;"></canvas>
            </div>
            <pre><code>drawClipAni () {
    let that = this
    let context = that.$refs.c11.getContext('2d')
    let w = context.canvas.width
    let h = context.canvas.height
    let radius = w / 2
    let direction = -1

    setInterval(function () {
        context.fillStyle = '#333333'
        context.fillRect(0, 0, w, h)
        if (direction == -1) {
            radius -= w / 100
            if (radius > 0) {
                that.drawAni(radius)
            } else {
                direction = 1
            }
        } else {
            radius += w / 100
            if (radius < w / 2) {
                that.drawAni(radius)
            } else {
                direction = -1
            }
        }
    }, 50)
},
drawClipText () {
    let that = this
    let context = that.$refs.c11.getContext('2d')
    let w = context.canvas.width
    let h = context.canvas.height
    context.save()
    context.font = 'normal 70px 微软雅黑'
    context.lineWidth = 4
    context.shadowColor = 'rgba(100,100,150,0.8)'
    context.shadowOffsetX = 5
    context.shadowOffsetY = 5
    context.shadowBlur = 10

    context.fillStyle = '#ff6666'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText('Canvas', w / 2, h / 2)
    context.restore()
},
drawAni (radius) {
    let that = this
    let context = that.$refs.c11.getContext('2d')
    let w = context.canvas.width
    let h = context.canvas.height

    context.save()
    context.beginPath()
    context.arc(w / 2, h / 2, radius, 0, 2 * Math.PI, true)
    context.clip()
    context.fillStyle = '#dddddd'
    context.fillRect(0, 0, w, h)
    that.drawClipText()
    context.restore()
}</code></pre>
        </div>
        <footer>2016年06月15日</footer>
        <comments></comments>
        <Catalog :catalog="catalog"></Catalog>
    </div>
</template>
<script>
    import Page from '../../page'
    export default {
        extends: Page,
        data () {
            return {
                drawClipAniTimer: null
            }
        },
        mounted () {
            let that = this
            that.$nextTick(() => {
                that.initLinearGradient() // 绘制线性渐变
                that.initRadialGradient() // 绘制放射渐变
                that.drawTwoCircle() // 绘制圆环
                that.initGrid() // 绘制网格
                that.drawDashedLine() // 绘制虚线
                that.drawRoundedRect() // 绘制圆角矩形
                that.drawArrow() // 绘制箭头形状
                that.drawClipAni() // 绘制伸缩式动画
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
                gradient.addColorStop(0, '#333')
                gradient.addColorStop(1, '#fff')
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
            },
            /**
            * 绘制圆环
            */
            drawTwoCircle () {
                let that = this
                let el = that.$refs.c6
                let context = el.getContext('2d')
                let w = el.width
                let h = el.height
                context.fillStyle = 'rgba(0,0,0,0.5)'
                context.shadowColor = 'rgba(0,0,0,0.8)'
                context.shadowOffsetX = 8
                context.shadowOffsetY = 8
                context.shadowBlur = 20
                context.arc(w / 2, h / 2, 100, 0, 2 * Math.PI, true)
                context.arc(w / 2, h / 2, 70, 0, 2 * Math.PI, false)
                context.fill()
            },
            /**
             * 绘制网格
             */
            initGrid () {
                let that = this
                let refs = that.$refs
                let c7 = refs.c7
                let c8 = refs.c8
                let c9 = refs.c9
                let c10 = refs.c10
                let box = refs.grid
                let rect = box.getBoundingClientRect()
                let w = (rect.right - rect.left) * 0.95
                c7.setAttribute('width', w)
                c8.setAttribute('width', w)
                c9.setAttribute('width', w)
                c10.setAttribute('width', w)
                that.drawGrid(c7)
                that.drawGrid(c8)
                that.drawGrid(c9)
                that.drawGrid(c10)
            },
            drawGrid (el) {
                let context = el.getContext('2d')
                let w = el.width
                let h = el.height
                let stepX = 10
                let stepY = 10

                context.clearRect(0, 0, w, h)
                context.strokeStyle = '#e0e0e0'
                context.lineWidth = 0.5
                for (let i = stepX + 0.5; i < w; i += stepX) {
                    context.beginPath()
                    context.moveTo(i, 0)
                    context.lineTo(i, h)
                    context.stroke()
                }

                for (let j = stepY + 0.5; j < h; j += stepY) {
                    context.beginPath()
                    context.moveTo(0, j)
                    context.lineTo(w, j)
                    context.stroke()
                }
            },
            /**
             * 绘制虚线
             */
            drawDashedLine () {
                let that = this
                let el = that.$refs.c8
                let context = el.getContext('2d')
                let w = el.width
                let h = el.height
                let startPoint = {x: 15, y: 15}
                let endPoint = {x: w - 20, y: h - 30}
                let deltX = endPoint.x - startPoint.x
                let deltY = endPoint.y - startPoint.y
                let dashLen = 4
                let num = Math.floor(Math.sqrt(deltX * deltX + deltY * deltY) / dashLen)

                context.beginPath()
                context.strokeStyle = 'rgba(0,0,0,0.8)'
                context.lineWidth = 1
                for (let i = 0; i < num; i++) {
                    context[i % 2 == 0 ? 'moveTo' : 'lineTo'](startPoint.x + (deltX / num) * i, startPoint.y + (deltY / num) * i)
                }
                context.stroke()
            },
            /**
             * 绘制圆角矩形
             */
            drawRoundedRect () {
                let that = this
                let el = that.$refs.c9
                let context = el.getContext('2d')
                let w = Math.floor(el.width * 0.9)
                let h = Math.floor(el.height * 0.9)
                let startX = (el.width - w) / 2
                let startY = (el.height - h) / 2
                let radius = 20
                let endX = startX + w
                let endY = startY + h
                context.strokeStyle = 'rgba(0,0,0,0.5)'
                context.fillStyle = 'rgba(0,0,0,0.3)'
                context.lineWidth = 1
                context.beginPath()
                context.moveTo(startX + radius, startY)
                context.arcTo(endX, startY, endX, startY + radius, radius)
                context.arcTo(endX, endY, endX - radius, endY, radius)
                context.arcTo(startX, endY, startX, endY - radius, radius)
                context.arcTo(startX, startY, startX + radius, startY, radius)
                context.stroke()
                context.fill()
            },
            /**
            * 绘制箭头形状
            */
            drawArrow () {
                let that = this
                let el = that.$refs.c10
                let context = el.getContext('2d')
                let margin = 30
                let w = el.width
                let h = el.height
                context.strokeStyle = 'rgba(0,0,0,0.5)'
                context.fillStyle = 'rgba(0,0,0,0.3)'
                context.beginPath()
                context.moveTo(w - margin, margin * 2)
                context.lineTo(w - margin, h - margin * 2)
                context.quadraticCurveTo(w - margin, h - margin, w - margin * 2, h - margin)
                context.lineTo(w - 250, h / 2 + margin)
                context.quadraticCurveTo(w - 300, h / 2, w - 250, h / 2 - margin)
                context.lineTo(w - margin * 2, margin)
                context.quadraticCurveTo(w - margin, margin, w - margin, margin * 2)
                context.fill()
                context.stroke()
            },
            /**
            * 剪辑区域示例
            */
            drawClipAni () {
                let that = this
                let context = that.$refs.c11.getContext('2d')
                let w = context.canvas.width
                let h = context.canvas.height
                let radius = w / 2
                let direction = -1

                that.drawClipAniTimer = setInterval(function () {
                    context.fillStyle = '#999999'
                    context.fillRect(0, 0, w, h)
                    if (direction == -1) {
                        radius -= w / 100
                        if (radius > 0) {
                            that.drawAni(radius)
                        } else {
                            direction = 1
                        }
                    } else {
                        radius += w / 100
                        if (radius < w / 2) {
                            that.drawAni(radius)
                        } else {
                            direction = -1
                        }
                    }
                }, 50)
            },
            drawClipText () {
                let that = this
                let context = that.$refs.c11.getContext('2d')
                let w = context.canvas.width
                let h = context.canvas.height
                context.save()
                context.font = 'normal 70px 微软雅黑'
                context.lineWidth = 4
                context.shadowColor = 'rgba(100,100,150,0.8)'
                context.shadowOffsetX = 5
                context.shadowOffsetY = 5
                context.shadowBlur = 10

                context.fillStyle = '#ff6666'
                context.textAlign = 'center'
                context.textBaseline = 'middle'
                context.fillText('Canvas', w / 2, h / 2)
                context.restore()
            },
            drawAni (radius) {
                let that = this
                let context = that.$refs.c11.getContext('2d')
                let w = context.canvas.width
                let h = context.canvas.height

                context.save()
                context.beginPath()
                context.arc(w / 2, h / 2, radius, 0, 2 * Math.PI, true)
                context.clip()
                context.fillStyle = '#dddddd'
                context.fillRect(0, 0, w, h)
                that.drawClipText()
                context.restore()
            }
        },
        beforeDestroy () {
            let that = this
            if (that.drawClipAniTimer) {
                window.clearInterval(that.drawClipAniTimer)
            }
        }
    }
</script>
