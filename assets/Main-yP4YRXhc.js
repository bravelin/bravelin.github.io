import{_ as F,r as T,a as L,m as D,p as I,h as w,o as y,e,w as v,v as d,q as b}from"./index-C7OB3MDI.js";import{i as C}from"./webgl-BYb_5Ot-.js";function O(a,t,A,l){const s=window.getComputedStyle(a,null);a.width=parseInt(s.width),a.height=parseInt(s.height);const g=a.getContext("webgl2");if(!C(g,`
        attribute vec4 a_Position;
        attribute float a_PointSize;
        void main() {
            gl_Position = a_Position;
            gl_PointSize = a_PointSize;
        }
    `,`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `)){console.log("init shader error");return}const i=(o=>{const R=new Float32Array(t),r=new Float32Array(A),f=l,n=o.createBuffer(),c=o.createBuffer();if(!n||!c)return-1;o.bindBuffer(o.ARRAY_BUFFER,n),o.bufferData(o.ARRAY_BUFFER,R,o.STATIC_DRAW);const u=o.getAttribLocation(o.program,"a_Position");o.vertexAttribPointer(u,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(u),o.bindBuffer(o.ARRAY_BUFFER,c),o.bufferData(o.ARRAY_BUFFER,r,o.STATIC_DRAW);const _=o.getAttribLocation(o.program,"a_PointSize");return o.vertexAttribPointer(_,1,o.FLOAT,!1,0,0),o.enableVertexAttribArray(_),f})(g);if(i<0){console.log("initVertexBuffers failed");return}return g.clearColor(0,0,0,1),g.clear(g.COLOR_BUFFER_BIT),g.drawArrays(g.POINTS,0,i),a.toDataURL("image/png")}function z(a,t,A){const l=window.getComputedStyle(a,null);a.width=parseInt(l.width),a.height=parseInt(l.height);const s=a.getContext("webgl2");if(!C(s,`
        attribute vec4 a_Position;
        attribute float a_PointSize;
        void main() {
            gl_Position = a_Position;
            gl_PointSize = a_PointSize;
        }
    `,`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `)){console.log("init shader error");return}const m=(i=>{const o=new Float32Array(t),R=A,r=i.createBuffer();if(!r)return-1;i.bindBuffer(i.ARRAY_BUFFER,r),i.bufferData(i.ARRAY_BUFFER,o,i.STATIC_DRAW);const f=o.BYTES_PER_ELEMENT,n=i.getAttribLocation(i.program,"a_Position");i.vertexAttribPointer(n,2,i.FLOAT,!1,3*f,0),i.enableVertexAttribArray(n);const c=i.getAttribLocation(i.program,"a_PointSize");return i.vertexAttribPointer(c,1,i.FLOAT,!1,3*f,2*f),i.enableVertexAttribArray(c),R})(s);if(m<0){console.log("initVertexBuffers failed");return}return s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.POINTS,0,m),a.toDataURL("image/png")}function B(a,t,A,l="POINTS"){const s=window.getComputedStyle(a,null);a.width=parseInt(s.width),a.height=parseInt(s.height);const g=a.getContext("webgl2");if(!C(g,`
        attribute vec4 a_Position;
        attribute float a_PointSize;
        attribute vec4 a_Color;
        varying vec4 v_Color;
        void main() {
            gl_Position = a_Position;
            gl_PointSize = a_PointSize;
            v_Color = a_Color;
        }
    `,`
        precision mediump float;
        varying vec4 v_Color;
        void main() {
            gl_FragColor = v_Color;
        }
    `)){console.log("init shader error");return}const i=(o=>{const R=new Float32Array(t),r=A,f=o.createBuffer();if(!f)return-1;o.bindBuffer(o.ARRAY_BUFFER,f),o.bufferData(o.ARRAY_BUFFER,R,o.STATIC_DRAW);const n=R.BYTES_PER_ELEMENT,c=o.getAttribLocation(o.program,"a_Position");o.vertexAttribPointer(c,2,o.FLOAT,!1,6*n,0),o.enableVertexAttribArray(c);const u=o.getAttribLocation(o.program,"a_PointSize");o.vertexAttribPointer(u,1,o.FLOAT,!1,6*n,2*n),o.enableVertexAttribArray(u);const _=o.getAttribLocation(o.program,"a_Color");return o.vertexAttribPointer(_,3,o.FLOAT,!1,6*n,3*n),o.enableVertexAttribArray(_),r})(g);if(i<0){console.log("initVertexBuffers failed");return}return g.clearColor(0,0,0,1),g.clear(g.COLOR_BUFFER_BIT),g.drawArrays(g[l],0,i),a.toDataURL("image/png")}function N(a,t,A){const l=window.getComputedStyle(a,null);a.width=parseInt(l.width),a.height=parseInt(l.height);const s=a.getContext("webgl2");if(!C(s,`
        attribute vec4 a_Position;
        attribute float a_PointSize;
        void main() {
            gl_Position = a_Position;
            gl_PointSize = a_PointSize;
        }
    `,`
        precision mediump float;
        uniform float u_Width;
        uniform float u_Height;
        void main() {
            gl_FragColor = vec4(gl_FragCoord.x/u_Width, 0.0, gl_FragCoord.y/u_Height, 1.0);
        }
    `)){console.log("init shader error");return}const m=(i=>{const o=new Float32Array(t),R=A,r=i.createBuffer();if(!r)return-1;i.bindBuffer(i.ARRAY_BUFFER,r),i.bufferData(i.ARRAY_BUFFER,o,i.STATIC_DRAW);const f=o.BYTES_PER_ELEMENT,n=i.getAttribLocation(i.program,"a_Position");i.vertexAttribPointer(n,2,i.FLOAT,!1,3*f,0),i.enableVertexAttribArray(n);const c=i.getAttribLocation(i.program,"a_PointSize");i.vertexAttribPointer(c,1,i.FLOAT,!1,3*f,2*f),i.enableVertexAttribArray(c);const u=i.getUniformLocation(i.program,"u_Width"),_=i.getUniformLocation(i.program,"u_Height");return i.uniform1f(u,a.width),i.uniform1f(_,a.height),R})(s);if(m<0){console.log("initVertexBuffers failed");return}return s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLES,0,m),a.toDataURL("image/png")}function V(a,t,A){const l=window.getComputedStyle(a,null);a.width=parseInt(l.width),a.height=parseInt(l.height);const s=a.getContext("webgl2"),g=`
        attribute vec4 a_Position;
        attribute vec2 a_TexCoord;
        varying vec2 v_TexCoord;
        void main() {
            gl_Position = a_Position;
            v_TexCoord = a_TexCoord;
        }
    `,x=`
        precision mediump float;
        uniform sampler2D u_Sampler;
        varying vec2 v_TexCoord;
        void main() {
            gl_FragColor = texture2D(u_Sampler, v_TexCoord);
        }
    `;return new Promise(E=>{C(s,g,x)||(console.log("init shader error"),E(null));const m=r=>{const f=new Float32Array(t),n=A,c=r.createBuffer();if(!c)return-1;r.bindBuffer(r.ARRAY_BUFFER,c),r.bufferData(r.ARRAY_BUFFER,f,r.STATIC_DRAW);const u=f.BYTES_PER_ELEMENT,_=r.getAttribLocation(r.program,"a_Position");r.vertexAttribPointer(_,2,r.FLOAT,!1,4*u,0),r.enableVertexAttribArray(_);const p=r.getAttribLocation(r.program,"a_TexCoord");return r.vertexAttribPointer(p,2,r.FLOAT,!1,4*u,2*u),r.enableVertexAttribArray(p),n},i=(r,f)=>{const n=r.createTexture(),c=r.getUniformLocation(r.program,"u_Sampler"),u=new Image;return u.onload=function(){o(r,f,n,c,u)},u.src=/(localhost|192\.168)/.test(location.origin)?"./logo.jpg":"https://bravelin.top/public/client/logo.jpg",!0},o=(r,f,n,c,u)=>{r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,n),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texImage2D(r.TEXTURE_2D,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,u),r.uniform1i(c,0),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_STRIP,0,f),E(a.toDataURL("image/png"))},R=m(s);R<0&&(console.log("initVertexBuffers failed"),E(null)),i(s,R)})}function Y(a,t,A){const l=window.getComputedStyle(a,null);a.width=parseInt(l.width),a.height=parseInt(l.height);const s=a.getContext("webgl2"),g=`
        attribute vec4 a_Position;
        attribute vec2 a_TexCoord;
        varying vec2 v_TexCoord;
        void main() {
            gl_Position = a_Position;
            v_TexCoord = a_TexCoord;
        }
    `,x=`
        precision mediump float;
        uniform sampler2D u_Sampler0;
        uniform sampler2D u_Sampler1;
        varying vec2 v_TexCoord;
        void main() {
            vec4 color0 = texture2D(u_Sampler0, v_TexCoord);
            vec4 color1 = texture2D(u_Sampler1, v_TexCoord);
            gl_FragColor = color0 * color1;
        }
    `;return new Promise(E=>{C(s,g,x)||(console.log("init shader error"),E(null));const m=n=>{const c=new Float32Array(t),u=A,_=n.createBuffer();if(!_)return-1;n.bindBuffer(n.ARRAY_BUFFER,_),n.bufferData(n.ARRAY_BUFFER,c,n.STATIC_DRAW);const p=c.BYTES_PER_ELEMENT,S=n.getAttribLocation(n.program,"a_Position");n.vertexAttribPointer(S,2,n.FLOAT,!1,4*p,0),n.enableVertexAttribArray(S);const P=n.getAttribLocation(n.program,"a_TexCoord");return n.vertexAttribPointer(P,2,n.FLOAT,!1,4*p,2*p),n.enableVertexAttribArray(P),u},i=(n,c)=>{const u=n.createTexture(),_=n.createTexture(),p=n.getUniformLocation(n.program,"u_Sampler0"),S=n.getUniformLocation(n.program,"u_Sampler1"),P=new Image;P.onload=function(){r(n,c,u,p,P,0)},P.src=/(localhost|192\.168)/.test(location.origin)?"./logo.jpg":"https://bravelin.top/public/client/logo.jpg";const U=new Image;return U.onload=function(){r(n,c,_,S,U,1)},U.src=/(localhost|192\.168)/.test(location.origin)?"./m.png":"https://bravelin.top/public/client/m.png",!0};let o=!1,R=!1;const r=(n,c,u,_,p,S)=>{n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,1),S==0?(n.activeTexture(n.TEXTURE0),o=!0):(n.activeTexture(n.TEXTURE1),R=!0),n.bindTexture(n.TEXTURE_2D,u),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),S==0?n.texImage2D(n.TEXTURE_2D,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,p):n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,p),n.uniform1i(_,S),o&&R&&(n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.TRIANGLE_STRIP,0,c),E(a.toDataURL("image/png")))},f=m(s);f<0&&(console.log("initVertexBuffers failed"),E(null)),i(s,f)})}const W={setup(){const a=T(null),t=T(null),A=T(null),l=T(null),s=T(null),g=T(null),x=T(null),E=T(null),m=T(null),i=T(null),o=T(null),R=T(null),r=T(null),f=T(null);return L(()=>{t.value=O(a.value,[-.5,-.5,.5,-.5,0,.5],[8,16,32],3),l.value=z(A.value,[-.5,-.5,8,.5,-.5,16,0,.5,32],3),g.value=B(s.value,[-.5,-.5,8,1,0,0,.5,-.5,16,0,1,0,0,.5,32,0,0,1],3),E.value=B(x.value,[-.5,-.5,8,1,0,0,.5,-.5,16,0,1,0,0,.5,32,0,0,1],3,"TRIANGLES"),i.value=N(m.value,[-.5,-.5,8,.5,-.5,16,0,.5,32],3);let n=[-.5,.5,0,1,-.5,-.5,0,0,.5,.5,1,1,.5,-.5,1,0];(document.documentElement.clientWidth||window.innerWidth)>1600&&(n=[-.3,.8,0,1,-.3,-.8,0,0,.3,.8,1,1,.3,-.8,1,0]),V(o.value,n,4).then(u=>{u&&(R.value=u)}),Y(r.value,n,4).then(u=>{u&&(f.value=u)})}),{canvasRef0:a,img0:t,canvasRef1:A,img1:l,canvasRef2:s,img2:g,canvasRef3:x,img3:E,canvasRef4:m,img4:i,canvasRef5:o,img5:R,canvasRef6:r,img6:f}}},H={class:"_article-content"},G={ref:"canvasRef0",class:"webgl-canvas spec-canvas"},X=["src"],M={ref:"canvasRef1",class:"webgl-canvas spec-canvas"},h=["src"],j={ref:"canvasRef2",class:"webgl-canvas spec-canvas"},K=["src"],k={ref:"canvasRef3",class:"webgl-canvas spec-canvas"},q=["src"],J={ref:"canvasRef4",class:"webgl-canvas spec-canvas"},Q=["src"],Z={ref:"canvasRef5",class:"webgl-canvas spec-canvas"},$=["src"],tt={ref:"canvasRef6",class:"webgl-canvas spec-canvas"},et=["src"];function nt(a,t,A,l,s,g){const x=w("MyArticle");return y(),D(x,{class:"readingNotes-webgl-04",title:"WebGL学习笔记之四：颜色与纹理",date:"2021年02月13日"},{default:I(()=>[e("div",H,[t[0]||(t[0]=e("p",null,"将主要讲解图元光栅化过程，纹理映射到图形或者三维对象表明的方法。",-1)),t[1]||(t[1]=e("h3",{class:"title"},"顶点着色器传入非坐标数据",-1)),t[2]||(t[2]=e("p",null,"通过设置多个缓冲区（点的坐标数据、点的大小数据），以实现动态设置点的大小：",-1)),v(e("canvas",G,null,512),[[d,!l.img0]]),v(e("img",{src:l.img0,class:"webgl-canvas spec-canvas"},null,8,X),[[d,l.img0]]),t[3]||(t[3]=e("pre",null,[e("code",null,`// 顶点着色器
const VSHADER_SOURCE = \`
    attribute vec4 a_Position;
    attribute float a_PointSize;
    void main() {
        gl_Position = a_Position;
        gl_PointSize = a_PointSize;
    }
\``)],-1)),t[4]||(t[4]=e("pre",null,[e("code",null,`const initVertexBuffers = (gl) => {
    const vertices = new Float32Array(vertexDatas) // [-0.5, -0.5, 0.5, -0.5, 0, 0.5]
    const sizes = new Float32Array(sizeDatas) // [8.0, 16.0, 32.0]
    const n = vertexCount
    // 创建缓冲区
    const verticesBuffer = gl.createBuffer()
    const sizesBuffer = gl.createBuffer()
    if (!verticesBuffer || !sizesBuffer) {
        return -1
    }
    // 将缓冲区对象绑定到目标
    gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
    // 向缓冲区对象中写入数据
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
    const aPosition = gl.getAttribLocation(gl.program, 'a_Position')
    // 将缓冲区对象分配给attribute变量
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
    // 连接a_Position变量与分配给它的缓冲区对象
    gl.enableVertexAttribArray(aPosition)

    // 接下来处理点的尺寸数据
    gl.bindBuffer(gl.ARRAY_BUFFER, sizesBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW)
    const aPointSize = gl.getAttribLocation(gl.program, 'a_PointSize')
    gl.vertexAttribPointer(aPointSize, 1, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(aPointSize)
    return n
}`)],-1)),t[5]||(t[5]=e("p",null,[b("利用vertexAttribPointer()函数，"),e("strong",null,"点的位置与大小数据交错在一个缓冲区中"),b("，也能实现上面效果：")],-1)),t[6]||(t[6]=e("pre",null,[e("code",null,`const initVertexBuffers = (gl) => {
    const vertices = new Float32Array(vertexDatas) // [-0.5, -0.5, 8.0, 0.5, -0.5, 16.0, 0, 0.5, 32.0]
    const n = vertexCount
    // 创建缓冲区
    const verticesBuffer = gl.createBuffer()
    if (!verticesBuffer) {
        return -1
    }
    // 将缓冲区对象绑定到目标
    gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
    // 向缓冲区对象中写入数据
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
    const eleSize = vertices.BYTES_PER_ELEMENT

    // 处理position
    const aPosition = gl.getAttribLocation(gl.program, 'a_Position')
    // 将缓冲区对象分配给attribute变量
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 3 * eleSize, 0) // 每3个元素一组，从0个元素开始
    // 连接a_Position变量与分配给它的缓冲区对象
    gl.enableVertexAttribArray(aPosition)

    // 处理point size
    const aPointSize = gl.getAttribLocation(gl.program, 'a_PointSize')
    gl.vertexAttribPointer(aPointSize, 1, gl.FLOAT, false, 3 * eleSize, 2 * eleSize) // 每3个元素一组，从第2个元素开始
    gl.enableVertexAttribArray(aPointSize)
    return n
}`)],-1)),v(e("canvas",M,null,512),[[d,!l.img1]]),v(e("img",{src:l.img1,class:"webgl-canvas spec-canvas"},null,8,h),[[d,l.img1]]),t[7]||(t[7]=e("p",null,[b("将顶点的坐标和尺寸数据打包到同一个缓冲区对象中，并通过vertexAttribPointer方法设置"),e("strong",null,"步进和偏移量"),b("，访问缓冲区对象中不同种类的数据。")],-1)),t[8]||(t[8]=e("h3",{class:"title"},"varying变量",-1)),t[9]||(t[9]=e("p",null,"varying变量的作用是从顶点着色器向片元着色器传输数据。",-1)),v(e("canvas",j,null,512),[[d,!l.img2]]),v(e("img",{src:l.img2,class:"webgl-canvas spec-canvas"},null,8,K),[[d,l.img2]]),t[10]||(t[10]=e("pre",null,[e("code",null,`// 顶点着色器
const VSHADER_SOURCE = \`
    attribute vec4 a_Position;
    attribute float a_PointSize;
    attribute vec4 a_Color;
    varying vec4 v_Color;
    void main() {
        gl_Position = a_Position;
        gl_PointSize = a_PointSize;
        v_Color = a_Color;
    }
\`
// 片元着色器
const FSHADER_SOURCE = \`
    precision mediump float;
    varying vec4 v_Color;
    void main() {
        gl_FragColor = v_Color;
    }
\``)],-1)),t[11]||(t[11]=e("p",null,[e("strong",null,"在WebGl中，如果顶点着色器与片元着色器有类型和命名都相同的varying变量，那么顶点着色器赋给该变量的值就会自动传入片元着色器。")],-1)),t[12]||(t[12]=e("p",null,"彩色三角形：",-1)),v(e("canvas",k,null,512),[[d,!l.img3]]),v(e("img",{src:l.img3,class:"webgl-canvas spec-canvas"},null,8,q),[[d,l.img3]]),t[13]||(t[13]=e("p",null,"在顶点着色器与片元着色器之间，进行图形装配过程和光栅化过程。图形装配即将孤立的顶点坐标装配成几何图形，几何图形的类别由gl.drawArrays()函数的第一个参数决定。光栅化即将几何图形转换成片元。",-1)),t[14]||(t[14]=e("p",null,"片元着色器的逐片元执行：",-1)),t[15]||(t[15]=e("pre",null,[e("code",null,`const FSHADER_SOURCE = \`
    precision mediump float;
    uniform float u_Width;
    uniform float u_Height;
    void main() {
        gl_FragColor = vec4(gl_FragCoord.x/u_Width, 0.0, gl_FragCoord.y/u_Height, 1.0);
    }
\``)],-1)),t[16]||(t[16]=e("p",null,"u_Width和u_Height取canvas元素的宽高：",-1)),t[17]||(t[17]=e("pre",null,[e("code",null,`const uWidth = gl.getUniformLocation(gl.program, 'u_Width')
const uHeight = gl.getUniformLocation(gl.program, 'u_Height')
gl.uniform1f(uWidth, el.width)
gl.uniform1f(uHeight, el.height)`)],-1)),v(e("canvas",J,null,512),[[d,!l.img4]]),v(e("img",{src:l.img4,class:"webgl-canvas spec-canvas"},null,8,Q),[[d,l.img4]]),t[18]||(t[18]=e("h3",{class:"title"},"在矩形表面贴图",-1)),t[19]||(t[19]=e("p",null,[e("strong",null,"纹理映射"),b("是将一张图像映射（贴）到一个几何图形表面上去。其作用是为之前光栅化之后的片元涂上合适的颜色。组成纹理图像的像素称为纹素。在WebGL中进行纹理映射的步骤如下：")],-1)),t[20]||(t[20]=e("p",null,"1、准备好映射到几何图形上的纹理图像；2、为几何图形配置纹理映射方式；3、加载纹理图像，对其进行一些配置；4、在片元着色器中将相应的纹素抽取出来，赋给片元。",-1)),t[21]||(t[21]=e("p",null,"WebGl中的纹理坐标是二维的，左下角为原点（0.0, 0.0），右上角为（1.0, 1.0）。",-1)),v(e("canvas",Z,null,512),[[d,!l.img5]]),v(e("img",{src:l.img5,class:"webgl-canvas spec-canvas"},null,8,$),[[d,l.img5]]),t[22]||(t[22]=e("p",null,"两个着色器程序的定义：",-1)),t[23]||(t[23]=e("pre",null,[e("code",null,`// 顶点着色器
const VSHADER_SOURCE = \`
    attribute vec4 a_Position;
    attribute vec2 a_TexCoord;
    varying vec2 v_TexCoord;
    void main() {
        gl_Position = a_Position;
        v_TexCoord = a_TexCoord;
    }
\`
// 片元着色器
const FSHADER_SOURCE = \`
    precision mediump float;
    uniform sampler2D u_Sampler;
    varying vec2 v_TexCoord;
    void main() {
        gl_FragColor = texture2D(u_Sampler, v_TexCoord);
    }
\``)],-1)),t[24]||(t[24]=e("p",null,"定义顶点坐标与纹理坐标之间的对应关系，将数据写入缓冲区对象：",-1)),t[25]||(t[25]=e("pre",null,[e("code",null,`const vertexDatas = [-0.5, 0.5, 0.0, 1.0,
    -0.5, -0.5, 0.0, 0.0,
    0.5, 0.5, 1.0, 1.0,
    0.5, -0.5, 1.0, 0.0
]
const initVertexBuffers = (gl) => {
    const vertices = new Float32Array(vertexDatas)
    const n = vertexCount
    // 创建缓冲区
    const verticesBuffer = gl.createBuffer()
    if (!verticesBuffer) {
        return -1
    }
    // 将缓冲区对象绑定到目标
    gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
    // 向缓冲区对象中写入数据
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
    const eleSize = vertices.BYTES_PER_ELEMENT
    const aPosition = gl.getAttribLocation(gl.program, 'a_Position')
    // 将缓冲区对象分配给attribute变量
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 4 * eleSize, 0)
    // 连接a_Position变量与分配给它的缓冲区对象
    gl.enableVertexAttribArray(aPosition)
    const aTexCoord = gl.getAttribLocation(gl.program, 'a_TexCoord')
    gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, 4 * eleSize, 2 * eleSize)
    gl.enableVertexAttribArray(aTexCoord)
    return n
}`)],-1)),t[26]||(t[26]=e("p",null,"初始化纹理对象，加载图片：",-1)),t[27]||(t[27]=e("pre",null,[e("code",null,`const initTextures = (gl, n) => {
    const texture = gl.createTexture() // 创建纹理对象
    const uSampler = gl.getUniformLocation(gl.program, 'u_Sampler') // 获取取样器的位置
    const image = new Image()
    image.onload = function () {
        loadTexture(gl, n, texture, uSampler, image)
    }
    image.src = './logo.jpg'
    return true
}`)],-1)),t[28]||(t[28]=e("p",null,"从纹理图像中获取纹素颜色的过程，相当于从纹理图像中取样。即输入纹理坐标返回颜色值的过程。gl.createTexture()创建纹理对象，gl.deleteTexture(texture)可以删除纹理对象。",-1)),t[29]||(t[29]=e("p",null,"配置纹理对象，绘制图形：",-1)),t[30]||(t[30]=e("pre",null,[e("code",null,`const loadTexture = (gl, n, texture, uSampler, image) => {
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1) // 对纹理图像进行Y轴翻转
    gl.activeTexture(gl.TEXTURE0) // 开启0号纹理单元
    gl.bindTexture(gl.TEXTURE_2D, texture) // 绑定纹理对象
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR) // 配置纹理参数
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image) // 配置纹理图像
    gl.uniform1i(uSampler, 0) // 将0号纹理传递给取样器

    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, n)
}`)],-1)),t[31]||(t[31]=e("p",null,"WebGl纹理坐标系统中的t轴的方向与图片的坐标系统Y轴方向是相反的，gl.pixelStorei的定义如下：",-1)),t[32]||(t[32]=e("pre",null,[e("code",null,`gl.pixelStorei(pname, param) // pname取值gl.UNPACK_FLIP_Y_WEBGL（对图像进行Y轴反转）、
// gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL（将图像rgb颜色值的每一个分量乘A
// param：指定非0（true）或0（false），必须为整数
`)],-1)),t[33]||(t[33]=e("p",null,"WebGl中通过使用纹理单元的机制来同时使用多个纹理，每个纹理单元有个编号，从gl.TEXTURE0~gl.TEXTURE7。在使用之前，需要调用gl.activeTexture()来激活它。",-1)),t[34]||(t[34]=e("pre",null,[e("code",null,"gl.activeTexture(texUnit) // texUnit取值gl.TEXTURE0、gl.TEXTURE1...gl.TEXTURE7")],-1)),t[35]||(t[35]=e("p",null,[b("纹理对象有两种："),e("strong",null,"gl.TEXTURE_2D（二维纹理）、gl.TEXTURE_CUBE_MAP（立方体纹理）"),b("。WebGl中没法直接操作纹理对象，必须通过将纹理对象绑定到纹理单元上，然后通过操作纹理单元来操作纹理对象。")],-1)),t[36]||(t[36]=e("pre",null,[e("code",null,"gl.bindTexture(target, texture) // 开启texture指定的纹理对象，并将其绑定到目标上。如果已经通过gl.activeTexture()激活了某个单元，则纹理对象也会绑定到这个纹理单元上。")],-1)),t[37]||(t[37]=e("p",null,"配置纹理对象的参数，以此来设置纹理对象映射到图形上的具体方式，即告诉WebGl系统如何根据纹理坐标来获取颜色值，按何种方式重复填充纹理。",-1)),t[38]||(t[38]=e("pre",null,[e("code",null,`gl.texParameteri(target, pname, param)
// target：gl.TEXTURE_2D或者gl.TEXTURE_CUBE_MAP
// pname纹理参数：gl.TEXTURE_MAG_FILTER(放大方法，默认值gl.LINEAR)、gl.TEXTURE_MIN_FILTER(缩小方法，默认值gl.NEAREST_MIPMAP_LINEAR)、gl.TEXTURE_WRAP_S(水平填充方法，默认值gl.REPEAT)、gl.TEXTURE_WRAP_T(垂直填充方法，默认值gl.REPEAT)
// gl.NEAREST:使用原纹理上距离映射后像素中心最近的那个像素的颜色值
// gl.LINEAR：使用距离新像素中心最近的四个像素的颜色值的加权平均值
// gl.REPEAT：平铺式的重复纹理
// gl.MIRRPRED_REPEAT：镜像对称式的重复纹理
// gl.CLAMP_TO_EDGE:使用纹理图像边缘值`)],-1)),t[39]||(t[39]=e("p",null,"gl.texImage2D可以将纹理图像分配给纹理对象：",-1)),t[40]||(t[40]=e("pre",null,[e("code",null,`gl.texImage2D(target, level, internalformat, format, type, image)
// target：gl.TEXTURE_2D或者gl.TEXTURE_CUBE_MAP
// level：传入0
// intervalformat：图像的内部格式（gl.RGB、gl.RGBA、gl.ALPHA、gl.LUMINANCE、gl.LUMINANCE_ALPHA）
// format：纹理数据的格式，与intervalformat相同的值
// type：纹理数据的类型
// image：包含纹理图像的Image对象`)],-1)),t[41]||(t[41]=e("p",null,[e("strong",null,"流明"),b("表示感知到的物体表面的亮度，通常使用物体表面的红、绿、蓝颜色分量的加权平均值来计算。")],-1)),t[42]||(t[42]=e("h3",{class:"title"},"使用多幅纹理",-1)),v(e("canvas",tt,null,512),[[d,!l.img6]]),v(e("img",{src:l.img6,class:"webgl-canvas spec-canvas"},null,8,et),[[d,l.img6]]),t[43]||(t[43]=e("p",null,"片元着色器：",-1)),t[44]||(t[44]=e("pre",null,[e("code",null,`const FSHADER_SOURCE = \`
    precision mediump float;
    uniform sampler2D u_Sampler0;
    uniform sampler2D u_Sampler1;
    varying vec2 v_TexCoord;
    void main() {
        vec4 color0 = texture2D(u_Sampler0, v_TexCoord);
        vec4 color1 = texture2D(u_Sampler1, v_TexCoord);
        gl_FragColor = color0 * color1;
    }
\``)],-1)),t[45]||(t[45]=e("pre",null,[e("code",null,`const initTextures = (gl, n) => {
    const texture0 = gl.createTexture()
    const texture1 = gl.createTexture()
    const uSampler0 = gl.getUniformLocation(gl.program, 'u_Sampler0')
    const uSampler1 = gl.getUniformLocation(gl.program, 'u_Sampler1')
    const image0 = new Image()
    image0.onload = function () {
        loadTexture(gl, n, texture0, uSampler0, image0, 0)
    }
    image0.src = './logo.jpg'

    const image1 = new Image()
    image1.onload = function () {
        loadTexture(gl, n, texture1, uSampler1, image1, 1)
    }
    image1.src = './m.png'
    return true
}
let texUnit0 = false
let texUnit1 = false
const loadTexture = (gl, n, texture, uSampler, image, texUnit) => {
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1)
    if (texUnit == 0) {
        gl.activeTexture(gl.TEXTURE0)
        texUnit0 = true
    } else {
        gl.activeTexture(gl.TEXTURE1)
        texUnit1 = true
    }
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image)
    gl.uniform1i(uSampler, texUnit)

    if (texUnit0 && texUnit1) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, n)
    }
}`)],-1))])]),_:1})}const it=F(W,[["render",nt]]);export{it as default};
