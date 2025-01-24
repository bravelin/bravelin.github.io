import{i as f}from"./webgl-BYb_5Ot-.js";import{_ as A,r as S,a as p,m as L,p as w,h as P,o as U,e as t,q as e}from"./index-ChNXl_Yx.js";const I={setup(){const C=S(null);p(()=>{const o=C.value.getContext("webgl2");o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT)});const n=S(null);p(()=>{const o=n.value,r=window.getComputedStyle(o,null);o.width=parseInt(r.width),o.height=parseInt(r.height);const l=o.getContext("webgl2");if(!f(l,`
                void main() {
                    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
                    gl_PointSize = 10.0;
                }
            `,`
                void main() {
                    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
                }
            `)){console.log("init shader error");return}l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT),l.drawArrays(l.POINTS,0,1)});const E=S(null);p(()=>{const o=E.value,r=window.getComputedStyle(o,null);o.width=parseInt(r.width),o.height=parseInt(r.height);const l=o.getContext("webgl2");f(l,`
                attribute vec4 a_Position;
                void main() {
                    gl_Position = a_Position;
                    gl_PointSize = 10.0;
                }`,`
                void main() {
                    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
                }`)||console.log("initShaders error");const i=l.getAttribLocation(l.program,"a_Position");if(i<0){console.log("getAttribLocation error...");return}l.vertexAttrib3f(i,.5,0,0),l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT),l.drawArrays(l.POINTS,0,1)});const O=S(null);p(()=>{const o=O.value,r=window.getComputedStyle(o,null);o.width=parseInt(r.width),o.height=parseInt(r.height);const l=o.getContext("webgl2");f(l,`
                attribute vec4 a_Position;
                void main() {
                    gl_Position = a_Position;
                    gl_PointSize = 10.0;
                }`,`
                void main() {
                    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
                }`)||console.log("initShaders error");const i=l.getAttribLocation(l.program,"a_Position");if(i<0){console.log("getAttribLocation error...");return}const a=[];o.addEventListener("click",s=>{let u=s.clientX,c=s.clientY;const d=o.getBoundingClientRect();u=(u-d.left-o.width/2)/(o.width/2),c=(o.height/2-(c-d.top))/(o.height/2),a.push({x:u,y:c}),l.clear(l.COLOR_BUFFER_BIT);const R=a.length;for(let g=0;g<R;g++)l.vertexAttrib3f(i,a[g].x,a[g].y,0),l.drawArrays(l.POINTS,0,1)}),l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT)});const _=S(null);return p(()=>{const o=_.value,r=window.getComputedStyle(o,null);o.width=parseInt(r.width),o.height=parseInt(r.height);const l=o.getContext("webgl2");f(l,`
                attribute vec4 a_Position;
                void main() {
                    gl_Position = a_Position;
                    gl_PointSize = 10.0;
                }`,`
                precision mediump float;
                uniform vec4 u_FragColor;
                void main() {
                    gl_FragColor = u_FragColor;
                }`)||console.log("initShaders error");const i=l.getAttribLocation(l.program,"a_Position");if(i<0){console.log("getAttribLocation error...");return}const a=l.getUniformLocation(l.program,"u_FragColor");if(a<0){console.log("getUniformLocation error...");return}const s=[];let u="";o.addEventListener("click",c=>{let d=c.clientX,R=c.clientY;const g=o.getBoundingClientRect();d=(d-g.left-o.width/2)/(o.width/2),R=(o.height/2-(R-g.top))/(o.height/2),u=[Math.random(),Math.random(),Math.random(),1],s.push({x:d,y:R,color:u}),l.clear(l.COLOR_BUFFER_BIT);const m=s.length;for(let v=0;v<m;v++)l.vertexAttrib3f(i,s[v].x,s[v].y,0),l.uniform4f(a,...s[v].color),l.drawArrays(l.POINTS,0,1)}),l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT)}),{canvasRef:C,canvasRef2:n,canvasRef3:E,canvasRef4:O,canvasRef5:_}}},y={class:"_article-content"},h={ref:"canvasRef",class:"webgl-canvas"},B={ref:"canvasRef2",class:"webgl-canvas"},x={ref:"canvasRef3",class:"webgl-canvas"},T={ref:"canvasRef4",class:"webgl-canvas ref4-canvas"},H={ref:"canvasRef5",class:"webgl-canvas ref5-canvas"};function D(C,n,E,O,_,o){const r=P("MyArticle");return U(),L(r,{class:"readingNotes-webgl-01",title:"WebGL学习笔记之一：概述与入门",date:"2020年12月20日"},{default:w(()=>[t("div",y,[n[0]||(n[0]=t("h3",{class:"title"},"概述",-1)),n[1]||(n[1]=t("p",null,[e("WebGL是一项在网页上绘制和渲染三维图形，并可以和用户进行交互的技术。WebGL是内嵌在浏览器中，不必安装插件和库就可以直接使用它。其技术规范继承自免费和开源的OpenGL标准。支持"),t("strong",null,"可编程着色器方法"),e("，一种类似于C的编程语言并实现了精美的视觉效果。所以WebGL页面包含三种语言："),t("strong",null,"HTML5、JavaScript、GLSL ES（着色器语言）"),e("。")],-1)),n[2]||(n[2]=t("h3",{class:"title"},"清空绘图区",-1)),n[3]||(n[3]=t("p",null,"WebGL也是在canvas元素中绘制三维图形：",-1)),n[4]||(n[4]=t("pre",null,[t("code",null,'<canvas ref="canvasRef" class="webgl-canvas"></canvas>')],-1)),n[5]||(n[5]=t("pre",null,[t("code",null,`setup () {
    const canvasRef = ref(null)
    onMounted(() => {
        const gl = canvasRef.value.getContext('webgl2')
        gl.clearColor(0.0, 0.0, 0.0, 1.0) // 指定背景颜色
        gl.clear(gl.COLOR_BUFFER_BIT)
    })
    return { canvasRef }
}`)],-1)),t("canvas",h,null,512),n[6]||(n[6]=t("p",null,"由于WebGL是继承自OpenGL，所以它遵循传统的OpenGL颜色分量的取值范围，即从0.0~1.0，一旦指定了背景色之后，背景色就会驻存在WebGL系统中，在下一次调用gl.clearColor()方法之前是不会改变的。清空颜色缓冲区将导致WebGL清空页面上的canvas区域。",-1)),n[7]||(n[7]=t("pre",null,[t("code",null,"gl.clear(buffer) // 将指定缓冲区设定为预定的值")],-1)),n[8]||(n[8]=t("p",null,[e("buffer值为"),t("strong",null,"gl.COLOR_BUFFER_BIT"),e("（颜色缓冲区）、"),t("strong",null,"gl.DEPTH_BUFFER_BIT"),e("(深度缓冲区)、"),t("strong",null,"gl.STENCIL_BUFFER_BIT"),e("（模板缓冲区）之一或者使用位操作符（|）指定多个。")],-1)),n[9]||(n[9]=t("h3",{class:"title"},"绘制一个点",-1)),n[10]||(n[10]=t("p",null,[e("WebGL依赖于一种新的称为"),t("strong",null,"着色器（shader）"),e("的绘图机制。着色器提供了灵活且强大的绘制二维或三维图形的方法，所有WebGL程序必须使用它。")],-1)),t("canvas",B,null,512),n[11]||(n[11]=t("pre",null,[t("code",null,`const canvasRef2 = ref(null)
onMounted(() => {
    const el = canvasRef2.value
    const styles = window.getComputedStyle(el, null)
    el.width = parseInt(styles.width)
    el.height = parseInt(styles.height)
    const gl = el.getContext('webgl2')

    // 顶点着色器
    const VSHADER_SOURCE = \`
        void main() {
            gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
            gl_PointSize = 10.0;
        }
    \`
    // 片元着色器
    const FSHADER_SOURCE = \`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    \`
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('init shader error')
        return
    }
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.POINTS, 0, 1)
})`)],-1)),n[12]||(n[12]=t("p",null,[t("strong",null,"着色器程序是以字符串的形式“嵌入”在JavaScript文件中的，在程序真正开始运行之前它就已经设置好了。")],-1)),n[13]||(n[13]=t("p",null,[t("strong",null,"顶点着色器（Vertex shader）"),e("：用来描述顶点特性（位置、颜色）的程序；"),t("strong",null,"片元着色器（Fragment shader）"),e("：进行逐片元处理过程如光照的程序。片元着色器接收到的是经过光栅化处理后的片元值。gl_Position和gl_PointSize这两个变量是内置在顶点着色器里面的。gl_FragColor变量是片元着色器唯一的内置变量，它控制着像素在屏幕上的最终颜色。")],-1)),n[14]||(n[14]=t("pre",null,[t("code",null,`gl.drawArrays(mode, first, count)
// mode取值gl.POINTS、gl.LINES、gl.LINE_STRIP、gl.LINE_LOOP、gl.TRIANGLES、gl.TRIANGLE_STRIP、gl.TRIANGLE_FAN
// first指定从哪个顶点开始绘制
// count指定绘制需要用到多少个顶点`)],-1)),n[15]||(n[15]=t("p",null,[t("strong",null,"WebGL程序包括运行在浏览器中的JavaScript和运行在WebG系统中的着色器程序这两部分。")],-1)),n[16]||(n[16]=t("p",null,"GLSL ES是一种强类型的编程语言。开发者需要明确指出某个变量的某种类型。",-1)),n[17]||(n[17]=t("p",null,"WebGL为右手坐标系，X轴水平的（正方向为右）；Y轴垂直的（正方向为下）；Z轴垂直于屏幕（正方向为外）。",-1)),n[18]||(n[18]=t("h3",{class:"title"},"使用attribute变量",-1)),n[19]||(n[19]=t("p",null,[e("实现将位置信息从JavaScript传递给顶点着色器，"),t("strong",null,"attribute变量"),e("和"),t("strong",null,"uniform变量"),e("可以做到。attribute变量传输那些与顶点相关的数据，而uniform变量则传递那些对于所有顶点都相同（或者与顶点无关）的数据。")],-1)),n[20]||(n[20]=t("p",null,"attribute变量是一种GLSL ES变量，被用来从外部向顶点着色器传输数据，只有顶点着色器能使用它。使用步骤如下：",-1)),n[21]||(n[21]=t("pre",null,[t("code",null,`1、在顶点着色器中，声明attribute变量；
2、将attribute变量赋值给gl_Position变量；
3、向attribute变量传输数据；`)],-1)),t("canvas",x,null,512),n[22]||(n[22]=t("pre",null,[t("code",null,`const canvasRef = ref(null)
onMounted(() => {
    const el = canvasRef.value
    const styles = window.getComputedStyle(el, null)
    el.width = parseInt(styles.width)
    el.height = parseInt(styles.height)
    const gl = el.getContext('webgl2')

    const VSHADER_SOURCE = \` // 顶点着色器
        attribute vec4 a_Position;
        void main() {
            gl_Position = a_Position;
            gl_PointSize = 10.0;
        }\`
    const FSHADER_SOURCE = \` // 片元着色器
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }\`
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('initShaders error')
    }
    const aPosition = gl.getAttribLocation(gl.program, 'a_Position') // 获取attribute变量的存储地址
    if (aPosition < 0) {
        console.log('getAttribLocation error...')
        return
    }
    gl.vertexAttrib3f(aPosition, 0.5, 0.0, 0.0) // 传递顶点位置
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.POINTS, 0, 1)
})`)],-1)),n[23]||(n[23]=t("p",null,"gl.vertexAttrib3f()是一系列同族函数中的一个，该系列函数的任务就是从JavaScript向顶点着色器中的attribute变量传值：",-1)),n[24]||(n[24]=t("pre",null,[t("code",null,`gl.vertexAttrib1f(location, v0)
gl.vertexAttrib2f(location, v0, v1)
gl.vertexAttrib3f(location, v0, v1, v2)
gl.vertexAttrib4f(location, v0, v1, v2, v3)`)],-1)),n[25]||(n[25]=t("h3",{class:"title"},"通过点击绘制点",-1)),t("canvas",T,null,512),n[26]||(n[26]=t("pre",null,[t("code",null,`const canvasRef4 = ref(null)
onMounted(() => {
    const el = canvasRef4.value
    const styles = window.getComputedStyle(el, null)
    el.width = parseInt(styles.width)
    el.height = parseInt(styles.height)
    const gl = el.getContext('webgl2')

    const VSHADER_SOURCE = \`
        attribute vec4 a_Position;
        void main() {
            gl_Position = a_Position;
            gl_PointSize = 10.0;
        }\`
    const FSHADER_SOURCE = \`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }\`
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('initShaders error')
    }
    const aPosition = gl.getAttribLocation(gl.program, 'a_Position')
    if (aPosition < 0) {
        console.log('getAttribLocation error...')
        return
    }
    const points = []
    el.addEventListener('click', e => {
        let x = e.clientX
        let y = e.clientY
        const rect = el.getBoundingClientRect()
        x = ((x - rect.left) - el.width / 2) / (el.width / 2) // 转换坐标
        y = (el.height / 2 - (y - rect.top)) / (el.height / 2)
        points.push({ x, y })
        gl.clear(gl.COLOR_BUFFER_BIT)
        const len = points.length
        for (let i = 0; i < len; i++) {
            gl.vertexAttrib3f(aPosition, points[i].x, points[i].y, 0.0)
            gl.drawArrays(gl.POINTS, 0, 1)
        }
    })
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT)
})`)],-1)),n[27]||(n[27]=t("p",null,"WebGl系统中的绘制操作实际上是在颜色缓冲区中进行绘制的，绘制结束之后系统将缓冲区中的内容显示在屏幕上，然后颜色缓冲区会被重置，其中的内容会丢失。",-1)),n[28]||(n[28]=t("h3",{class:"title"},"改变点的颜色",-1)),n[29]||(n[29]=t("p",null,"可以使用uniform变量将颜色值传给片元着色器，以实现点的颜色的动态改变。",-1)),n[30]||(n[30]=t("p",null,"在片元着色器中准备uniform变量；用这个uniform变量向gl_FragColor赋值；将颜色值从JavaScript传给该uniform变量。",-1)),t("canvas",H,null,512),n[31]||(n[31]=t("pre",null,[t("code",null,`const FSHADER_SOURCE = \`
    precision mediump float;
    uniform vec4 u_FragColor;
    void main() {
        gl_FragColor = u_FragColor;
    }\`
// 获取uniform变量的储存位置
const uFragColor = gl.getUniformLocation(gl.program, 'u_FragColor')
if (uFragColor < 0) {
    console.log('getUniformLocation error...')
    return
}`)],-1)),n[32]||(n[32]=t("p",null,"每次点击生成随机颜色值：",-1)),n[33]||(n[33]=t("pre",null,[t("code",null,`const points = []
let color = ''
el.addEventListener('click', e => {
    let x = e.clientX
    let y = e.clientY
    const rect = el.getBoundingClientRect()
    x = ((x - rect.left) - el.width / 2) / (el.width / 2)
    y = (el.height / 2 - (y - rect.top)) / (el.height / 2)
    color = [Math.random(), Math.random(), Math.random(), 1.0] // 随机颜色值
    points.push({ x, y, color })
    gl.clear(gl.COLOR_BUFFER_BIT)
    const len = points.length
    for (let i = 0; i < len; i++) {
        gl.vertexAttrib3f(aPosition, points[i].x, points[i].y, 0.0)
        gl.uniform4f(uFragColor, ...points[i].color)
        gl.drawArrays(gl.POINTS, 0, 1)
    }
})
gl.clearColor(0.0, 0.0, 0.0, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT)`)],-1))])]),_:1})}const V=A(I,[["render",D]]);export{V as default};
