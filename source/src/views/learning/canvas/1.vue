<template>
    <div class="page article">
        <h2 class="title">Canvas学习笔记之一：基础知识</h2>
        <div class="content">
            <h3 class="title">Canvas元素</h3>
            <p>在设置Canvas的宽度与高度属性时，不能使用px后缀，并且只能是非负整数。</p>
            <p>默认情况下，浏览器创建的Canvas元素是300*150的尺寸。Canvas元素有两套尺寸，一是元素本身的大小；二是元素绘图表面的大小。</p>
            <p>通过设置属性width和height时，实际上同时修改了该元素本身的大小和绘图表面的大小；如果通过CSS设定Canvas元素的大小，那么只会改变元素本身的大小，而不会影响到绘图表面，此时浏览器会对绘图表面进行缩放，使其符合元素的大小。</p>
            <p>Canvas元素提供如下3个方法：</p>
            <p><strong>1、getContent()</strong>：返回与该canvas元素相关的绘图环境对象；</p>
            <p><strong>2、toDataURL(type, quality)</strong>：返回一个数据地址（图片的base64编码），type默认为image/png，第二个参数是0~1.0之间的数值，表示JPEG图片的质量（当type为image/jpeg）。</p>
            <p><strong>3、toBlob(callback, type, args...)</strong>：创建一个表示此canvas元素图像文件的Blob，type为image/png或者image/jpeg，第3个参数如同toDataURL中的quality（写成args...是可能会扩展）。</p>
            <h3 class="title">绘图环境</h3>
            <p>2D绘图环境通常指CanvasRenderingContent2D对象，此对象的属性如下：</p>
            <p><strong>1、canvas</strong>：指向绘图环境所属的canvas对象，常见用途是用来获取canvas的宽度与高度，分别调用context.canvas.width与context.canvas.height。</p>
            <p><strong>2、fillstyle</strong>：设定绘图环境在后续图形填充操作中所使用的颜色、渐变色和图案。</p>
            <p><strong>3、font</strong>：在调用绘图环境对象的fillText()或者strokeText()方法时，使用的字型。</p>
            <p><strong>4、globalAlpha</strong>：全局透明度设定，0~1.0之间的值。浏览器会将每个像素的alpha值与之相乘。</p>
            <p><strong>5、globalCompsiteOperation：</strong>设定将某个物体绘制在其他物体之上时的绘制方式。</p>
            <p><strong>6、lineCap</strong>：设置绘制线段端点的方式。</p>
            <p><strong>7、lineWidth</strong>：设置绘制线段的屏幕像素的宽度，默认值1.0。</p>
            <p><strong>8、lineJoin</strong>：设定两条线段相交时如何绘制焦点，可取的值：bevel、round、miter（默认值）。</p>
            <p><strong>9、miterLimit</strong>：设定如何绘制miter形式的焦点。</p>
            <p><strong>10、strokeStyle</strong>：设定对路径进行描边的风格，可以是某个颜色值、渐变色或者图案。</p>
            <p><strong>11、textAlign</strong>：设定文本的水平对齐方式。</p>
            <p><strong>11、textBaseline</strong>：设定文本的垂直对齐方式。</p>
            <p>阴影相关的属性：</p>
            <p><strong>12、shadowBlur</strong>：设定阴影的延伸效果，值越高，阴影延伸的越远，默认值为0。</p>
            <p><strong>13、shadowColor</strong>：设定阴影的颜色。通常使用半透明色。</p>
            <p><strong>14、shadowOffsetX</strong>：阴影效果的水平方向偏移量。</p>
            <p><strong>15、shadowOffsetY</strong>：阴影效果的垂直方向偏移量。</p>
            <p>save()和restore()是绘图环境对象中与状态操作的两个方法。</p>
            <p>鼠标坐标转为Canvas坐标，使用如下方法</p>
            <pre><code>function windowToCanvas (canvas, x ,y) {
    var box = canvas.getBoundingClientRect()
    return { x: (x - box.left) * (canvas.width / box.width), y: (y - box.top) * (canvas.height / box.height) }
}</code></pre>
            <p><strong>Canvas常用的是“立即模式”（immediate-mode）来绘制图形的，它会立即将所指定的内容绘制在canvas上，然后忘记刚才绘制的内容。“保留模式”（retained-mode）会维护一份所绘图形对象的列表。</strong></p>
            <h3 class="title">基础数学知识</h3>
            <p>弧度与角度的转换：<strong>π = 180度&nbsp;&nbsp; 1弧度 = (180 / π) 度 &nbsp;&nbsp; 1度 = (π / 180) 弧度</strong></p>
            <p>二维向量含有两个值：方向和大小。{ x: x, y: y }，向量的大小通过勾股定理（毕达哥拉斯定理）计算出来：</p>
            <pre><code>var magnitude = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2))</code></pre>
            <p>单位向量是长度为1的向量，通常用来指示方向：</p>
            <pre><code>var magnitude = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2))
var unitVector = new Vector()
uniteVector.x = vector.x / magnitude
uniteVector.y = vector.y / magnitude</code></pre>
            <p>向量的加减即将两个向量对应的x和y相加减即可。</p>
            <p><strong>向量的点积</strong>是将两个向量的对应分量相乘然后再相加：v1.x * v2.x + v1.y * v2.y。当点积大于0，意味着两个向量大致处在同一个方向上。</p>
            <p><strong>动画的移动应该以时间为基准的（time-bases motion）。</strong>帧速率是每帧持续的时间（frame rate，毫秒）。如果设定了物体的移动速度（每秒移动多少像素），可以求得每帧移动的像素数：</p>
            <p><strong>像素/帧 = （X * Y）/ 1000</strong>&nbsp;&nbsp;（X：用毫秒/帧表示的帧速率，Y：用像素/秒表示的速度）</p>
        </div>
        <footer>2016年06月08日</footer>
        <comments></comments>
    </div>
</template>
<script>
    import Page from '../../page'
    module.exports = {
        extends: Page
    }
</script>