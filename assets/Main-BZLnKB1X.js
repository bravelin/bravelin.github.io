import{_ as N,r as e,a as F,m as O,p as M,h as V,o as D,e as t,q as m,w as u,v as f}from"./index-CB7K47Ib.js";import{i as w}from"./webgl-BYb_5Ot-.js";function P(l,n,A,s){const a=window.getComputedStyle(l,null);l.width=parseInt(a.width),l.height=parseInt(a.height);const r=l.getContext("webgl2");if(!w(r,`
        attribute vec4 a_Position;
        void main() {
            gl_Position = a_Position;
            gl_PointSize = 10.0;
        }
    `,`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `)){console.log("init shader error");return}const R=(o=>{const v=new Float32Array(n),i=A,c=o.createBuffer();if(!c)return-1;o.bindBuffer(o.ARRAY_BUFFER,c),o.bufferData(o.ARRAY_BUFFER,v,o.STATIC_DRAW);const d=o.getAttribLocation(o.program,"a_Position");return o.vertexAttribPointer(d,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(d),i})(r);if(R<0){console.log("initVertexBuffers failed");return}return r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r[s],0,R),l.toDataURL("image/png")}function C(l,n,A,s,a,r){const p=window.getComputedStyle(l,null);l.width=parseInt(p.width),l.height=parseInt(p.height);const g=l.getContext("webgl2");if(!w(g,`
        attribute vec4 a_Position;
        uniform vec4 u_Translation;
        void main() {
            gl_Position = a_Position + u_Translation;
            gl_PointSize = 10.0;
        }
    `,`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `)){console.log("init shader error");return}const v=(i=>{const c=i.getUniformLocation(i.program,"u_Translation");i.uniform4f(c,s,a,r,0);const d=new Float32Array(n),S=A,B=i.createBuffer();if(!B)return-1;i.bindBuffer(i.ARRAY_BUFFER,B),i.bufferData(i.ARRAY_BUFFER,d,i.STATIC_DRAW);const x=i.getAttribLocation(i.program,"a_Position");return i.vertexAttribPointer(x,2,i.FLOAT,!1,0,0),i.enableVertexAttribArray(x),S})(g);if(v<0){console.log("initVertexBuffers failed");return}g.clearColor(0,0,0,1),g.clear(g.COLOR_BUFFER_BIT),g.drawArrays(g.TRIANGLES,0,v)}function U(l,n,A,s){const a=window.getComputedStyle(l,null);l.width=parseInt(a.width),l.height=parseInt(a.height);const r=l.getContext("webgl2");if(!w(r,`
        attribute vec4 a_Position;
        uniform float u_CosB, u_SinB;
        void main() {
            gl_Position.x = a_Position.x * u_CosB - a_Position.y * u_SinB;
            gl_Position.y = a_Position.x * u_SinB + a_Position.y * u_CosB;
            gl_Position.z = a_Position.z;
            gl_Position.w = 1.0;
            gl_PointSize = 10.0;
        }
    `,`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `)){console.log("init shader error");return}const R=(o=>{const v=Math.PI*s/180,i=Math.cos(v),c=Math.sin(v);console.log(s,i,c);const d=o.getUniformLocation(o.program,"u_CosB");o.uniform1f(d,i);const S=o.getUniformLocation(o.program,"u_SinB");o.uniform1f(S,c);const B=new Float32Array(n),x=A,_=o.createBuffer();if(!_)return-1;o.bindBuffer(o.ARRAY_BUFFER,_),o.bufferData(o.ARRAY_BUFFER,B,o.STATIC_DRAW);const E=o.getAttribLocation(o.program,"a_Position");return o.vertexAttribPointer(E,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(E),x})(r);if(R<0){console.log("initVertexBuffers failed");return}r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLES,0,R)}function z(l,n,A,s){const a=window.getComputedStyle(l,null);l.width=parseInt(a.width),l.height=parseInt(a.height);const r=l.getContext("webgl2");if(!w(r,`
        attribute vec4 a_Position;
        uniform mat4 u_xformMatrix;
        void main() {
            gl_Position = u_xformMatrix * a_Position;
            gl_PointSize = 10.0;
        }
    `,`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `)){console.log("init shader error");return}const R=(o=>{const v=Math.PI*s/180,i=Math.cos(v),c=Math.sin(v),d=new Float32Array([i,c,0,0,-c,i,0,0,0,0,1,0,0,0,0,1]),S=o.getUniformLocation(o.program,"u_xformMatrix");o.uniformMatrix4fv(S,!1,d);const B=new Float32Array(n),x=A,_=o.createBuffer();if(!_)return-1;o.bindBuffer(o.ARRAY_BUFFER,_),o.bufferData(o.ARRAY_BUFFER,B,o.STATIC_DRAW);const E=o.getAttribLocation(o.program,"a_Position");return o.vertexAttribPointer(E,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(E),x})(r);if(R<0){console.log("initVertexBuffers failed");return}r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLES,0,R)}const G={setup(){const l=e(null),n=e(null),A=e(null),s=e(null),a=e(null),r=e(null),p=e(null),g=e(null),b=e(null),R=e(null),o=e(null),v=e(null),i=e(null),c=e(null);F(()=>{g.value=P(l.value,[0,.5,-.5,-.5,.5,-.5],3,"POINTS"),b.value=P(n.value,[-.5,-.5,-.25,.5,.25,-.5,.5,.5],4,"LINES"),R.value=P(A.value,[-.5,-.5,-.25,.5,.25,-.5,.5,.5],4,"LINE_STRIP"),o.value=P(s.value,[-.5,-.5,-.25,.5,.25,-.5,.5,.5],4,"LINE_LOOP"),v.value=P(a.value,[-.5,-.5,-.25,.5,.25,-.5,.5,.5],4,"TRIANGLES"),i.value=P(r.value,[-.5,-.5,-.25,.5,.25,-.5,.5,.5],4,"TRIANGLE_STRIP");const E=.65,y=[],T=30,L=Math.PI;for(let I=0;I<=6;I++)y.push(E*Math.cos(I*T/180*L)),y.push(E*Math.sin(I*T/180*L));y.unshift(0,-.5),c.value=P(p.value,y,8,"TRIANGLE_FAN")});const d=e(null),S=e(null);F(()=>{C(d.value,[-.5,-.5,-.25,.5,.25,-.5],4,0,0,0),C(S.value,[-.5,-.5,-.25,.5,.25,-.5],4,.25,.25,0)});const B=e(null),x=e(null);F(()=>{U(B.value,[-.5,-0,-0,.5,.5,-0],3,0),U(x.value,[-.5,-0,-0,.5,.5,-0],3,20)});const _=e(null);return F(()=>{z(_.value,[-.5,-0,-0,.5,.5,-0],3,20)}),{img0:g,img1:b,img2:R,img3:o,img4:v,img5:i,img6:c,canvasRef0:l,canvasRef1:n,canvasRef2:A,canvasRef3:s,canvasRef4:a,canvasRef5:r,canvasRef6:p,canvasRef7:d,canvasRef8:S,canvasRef9:B,canvasRef10:x,canvasRef11:_}}},H={class:"_article-content"},Y={ref:"canvasRef0",class:"webgl-canvas spec-canvas"},W=["src"],k={ref:"canvasRef1",class:"webgl-canvas spec-canvas"},q=["src"],j={ref:"canvasRef2",class:"webgl-canvas spec-canvas"},J=["src"],K={ref:"canvasRef3",class:"webgl-canvas spec-canvas"},Q=["src"],X={ref:"canvasRef4",class:"webgl-canvas spec-canvas"},Z=["src"],$={ref:"canvasRef5",class:"webgl-canvas spec-canvas"},h=["src"],nn={ref:"canvasRef6",class:"webgl-canvas spec-canvas"},tn=["src"],on={ref:"canvasRef7",class:"webgl-canvas"},sn={ref:"canvasRef8",class:"webgl-canvas"},rn={ref:"canvasRef9",class:"webgl-canvas spec-canvas"},ln={ref:"canvasRef10",class:"webgl-canvas spec-canvas"},en={ref:"canvasRef11",class:"webgl-canvas spec-canvas"};function an(l,n,A,s,a,r){const p=V("MyArticle");return D(),O(p,{class:"readingNotes-webgl-02",title:"WebGL学习笔记之二：绘制和变换三角形",date:"2021年02月05日"},{default:M(()=>[t("div",H,[n[0]||(n[0]=t("p",null,"描述WebGL如何绘制三角形，使用三角形绘制其他类型的基本图形以及基本的移动、旋转、缩放变换。",-1)),n[1]||(n[1]=t("h3",{class:"title"},"绘制多个点",-1)),n[2]||(n[2]=t("p",null,[m("构成三维模型的基本单位是"),t("strong",null,"三角形"),m("，再复杂的模型，也是由许多个三角形以及这些三角形的顶点构成的。通过创建更细小和更大量的三角形，可以创建更复杂和更逼真的三维模型。")],-1)),n[3]||(n[3]=t("p",null,[m("WebGL提供"),t("strong",null,"缓冲区对象"),m("，可以一次性地向着色器传入多个顶点的数据。缓冲区对象是WebGL系统中的一块内存区域。")],-1)),u(t("canvas",Y,null,512),[[f,!s.img0]]),u(t("img",{src:s.img0,class:"webgl-canvas spec-canvas"},null,8,W),[[f,s.img0]]),n[4]||(n[4]=t("pre",null,[t("code",null,`// 定义顶点着色器
const VSHADER_SOURCE = \`
    attribute vec4 a_Position;
    void main() {
        gl_Position = a_Position;
        gl_PointSize = 10.0;
    }
\`
// 设置顶点位置
const n = initVertexBuffers(gl)
if (n < 0) {
    console.log('initVertexBuffers failed')
    return
}
gl.clearColor(0.0, 0.0, 0.0, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT)
gl.drawArrays(gl.POINTS, 0, n)`)],-1)),n[5]||(n[5]=t("p",null,"initVertexBuffers函数的任务是创建顶点缓冲区对象，并将多个顶点的数据保存在缓冲区中，然后将缓冲区传给顶点着色器。",-1)),n[6]||(n[6]=t("pre",null,[t("code",null,`const initVertexBuffers = (gl) => {
    const vertices = new Float32Array([0.0, 0.5, -0.5, -0.5, 0.5, -0.5])
    const n = 3
    // 创建缓冲区
    const buffer = gl.createBuffer()
    if (!buffer) {
        return -1
    }
    // 将缓冲区对象绑定到目标
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    // 向缓冲区对象中写入数据
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
    const aPosition = gl.getAttribLocation(gl.program, 'a_Position')
    // 将缓冲区对象分配给attribute变量
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
    // 连接a_Position变量与分配给它的缓冲区对象
    gl.enableVertexAttribArray(aPosition)
    return n
}`)],-1)),n[7]||(n[7]=t("p",null,"创建或者删除缓冲区对象：",-1)),n[8]||(n[8]=t("pre",null,[t("code",null,`gl.createBuffer()
gl.deleteBuffer(buffer) // 删除buffer表示的对象`)],-1)),n[9]||(n[9]=t("p",null,"创建缓冲区之后是将缓冲区对象绑定到WebGl系统中已经存在的目标上，这个目标表示缓冲区对象的用途：",-1)),n[10]||(n[10]=t("pre",null,[t("code",null,`gl.bindBuffer(target, buffer)
// target参数可以有：
// ① gl.ARRAY_BUFFER（缓冲区对象中包含了顶点的数据）
// ② gl.ELEMENT_ARRAY_BUFFER（缓冲区对象中包含了顶点的索引值）`)],-1)),n[11]||(n[11]=t("p",null,"不能直接向缓冲区写入数据，而只能向目标写入数据：",-1)),n[12]||(n[12]=t("pre",null,[t("code",null,`gl.bufferData(target, data, usage)
// target为 gl.ARRAY_BUFFER或者 gl.ELEMENT_ARRAY_BUFFER
// data为写入缓冲区对象的数据
// usage参数可以有：
// ① gl.STATIC_DRAW 只会向缓冲区对象中写入一次数据，但需要绘制很多次
// ② gl.STREAM_DRAW 只会向缓冲区对象中写入一次数据，然后绘制若干次
// ③ gl.DYNAMIC_DRAW 会向缓冲区中多次写入数据，并绘制多次`)],-1)),n[13]||(n[13]=t("p",null,"类型化数组与Array数组类似，但不支持push和pop方法：",-1)),n[14]||(n[14]=t("pre",null,[t("code",null,`Int8Array // 8位整型数
UInt8Array // 8位无符号整型数
Int16Array // 16位整型数
UInt16Array // 16位无符号整型数
Int32Array // 32位整型数
UInt32Array // 32位无符号整型数
Float32Array // 单精度32位浮点数
Float64Array // 双精度64位浮点数`)],-1)),n[15]||(n[15]=t("p",null,"具有以下方法和属性：",-1)),n[16]||(n[16]=t("pre",null,[t("code",null,`get(index) // 获取第index个元素
set(index, value) // 设置第index个元素的值为value
set(array, offset) // 从offset个元素开始将数组array中的值填充进去
length // 数组的长度
BYTES_PER_ELEMENT // 数组中每个元素所占的字节数`)],-1)),n[17]||(n[17]=t("p",null,"通过vertexAttribPointer方法将绑定到gl.ARRAY_BUFFER的缓冲区对象分配给attribute变量：",-1)),n[18]||(n[18]=t("pre",null,[t("code",null,`gl.vertextAttribPointer(location, size, type, normalized, stride, offset)
// location：attribute变量的存储位置
// size：指定缓冲区中每个顶点的分量个数
// type：gl.UNSIGNED_BYTE、gl.SHORT、gl.UNSIGNED_SHORT、gl.INT、gl.UNSIGNED_INT、gl.FLOAT
// normalize：true或者false，表明是否将非浮点数归一化到[0,1]或者[-1,1]区间
// stride：指定相邻两个节点间的字节数，默认为0
// offset：指定缓冲区对象中的偏移量`)],-1)),n[19]||(n[19]=t("p",null,"通过使用gl.enableVertexAttribArray()方法使顶点着色器能够访问缓冲区内的数据；使用gl.disableVertexAttribArray()来关闭分配。",-1)),n[20]||(n[20]=t("h3",{class:"title"},"基本图形的绘制",-1)),n[21]||(n[21]=t("p",null,"gl.drawArrays()方法：",-1)),n[22]||(n[22]=t("pre",null,[t("code",null,`gl.drawArrays(mode, first, count)
// mode：gl.POINTS、gl.LINES、gl.LINE_STRIP、gl.LINE_LOOP、gl.TRIANGLES、gl.TRIANGLE_STRIP、gl.TRIANGLE_FAN
// first：指定从哪个顶点开始绘制
// count：指定绘制需要用到多少个顶点`)],-1)),n[23]||(n[23]=t("p",null,[t("strong",null,"gl.LINES"),m("：一系列单独的线段，绘制在(v0, v1)、(v2, v3)、(v4, v5)...，如果点的个数是奇数，最后一个点将被忽略：")],-1)),u(t("canvas",k,null,512),[[f,!s.img1]]),u(t("img",{src:s.img1,class:"webgl-canvas spec-canvas"},null,8,q),[[f,s.img1]]),n[24]||(n[24]=t("pre",null,[t("code",null,`const initVertexBuffers = (gl) => {
    const vertices = new Float32Array([-0.5, -0.5, -0.25, 0.5, 0.25, -0.5, 0.5, 0.5])
    ...
gl.drawArrays(gl.LINES, 0, n)`)],-1)),n[25]||(n[25]=t("p",null,[t("strong",null,"gl.LINE_STRIP"),m("：一系列连接的线段，绘制在(v0, v1)、(v1, v2)、(v2, v3)...")],-1)),u(t("canvas",j,null,512),[[f,!s.img2]]),u(t("img",{src:s.img2,class:"webgl-canvas spec-canvas"},null,8,J),[[f,s.img2]]),n[26]||(n[26]=t("pre",null,[t("code",null,`const initVertexBuffers = (gl) => {
    const vertices = new Float32Array([-0.5, -0.5, -0.25, 0.5, 0.25, -0.5, 0.5, 0.5])
    ...
gl.drawArrays(gl.LINE_STRIP, 0, n)`)],-1)),n[27]||(n[27]=t("p",null,[t("strong",null,"gl.LINE_LOOP"),m("：一系列连接的点，绘制在(v0, v1)、(v1, v2)、(v2, v3)...(vn-1, vn)、(vn, v0)，增加了一条从最后一个点到第一个点的线段：")],-1)),u(t("canvas",K,null,512),[[f,!s.img3]]),u(t("img",{src:s.img3,class:"webgl-canvas spec-canvas"},null,8,Q),[[f,s.img3]]),n[28]||(n[28]=t("pre",null,[t("code",null,`const initVertexBuffers = (gl) => {
    const vertices = new Float32Array([-0.5, -0.5, -0.25, 0.5, 0.25, -0.5, 0.5, 0.5])
    ...
gl.drawArrays(gl.LINE_LOOP, 0, n)`)],-1)),n[29]||(n[29]=t("p",null,[t("strong",null,"gl.TRIANGLES"),m("：一系列单独的三角形，绘制在(v0, v1, v2)、(v3, v4, v5)...，如果点的个数不是3的整数倍，多余的一个或者两个点将被忽略。")],-1)),u(t("canvas",X,null,512),[[f,!s.img4]]),u(t("img",{src:s.img4,class:"webgl-canvas spec-canvas"},null,8,Z),[[f,s.img4]]),n[30]||(n[30]=t("pre",null,[t("code",null,`const initVertexBuffers = (gl) => {
    const vertices = new Float32Array([-0.5, -0.5, -0.25, 0.5, 0.25, -0.5, 0.5, 0.5])
    ...
gl.drawArrays(gl.TRIANGLES, 0, n)`)],-1)),n[31]||(n[31]=t("p",null,[t("strong",null,"gl.TRIANGLE_STRIP"),m("：一系列条带状的三角形，前三个点构成了第一个三角形，从第二个点开始的三个点构成了第二个三角形。绘制在(v0, v1, v2)、(v2, v1, v3)、(v2, v3, v4)...，如果点的个数不是3的整数倍，多余的一个或者两个点将被忽略。")],-1)),u(t("canvas",$,null,512),[[f,!s.img5]]),u(t("img",{src:s.img5,class:"webgl-canvas spec-canvas"},null,8,h),[[f,s.img5]]),n[32]||(n[32]=t("pre",null,[t("code",null,`const initVertexBuffers = (gl) => {
    const vertices = new Float32Array([-0.5, -0.5, -0.25, 0.5, 0.25, -0.5, 0.5, 0.5])
    ...
gl.drawArrays(gl.TRIANGLE_STRIP, 0, n)`)],-1)),n[33]||(n[33]=t("p",null,[t("strong",null,"gl.TRIANGLE_FAN"),m("：一系列三角形构成的类似于扇形的图形，绘制在(v0, v1, v2)，(v0, v2, v3)，(v0, v3, v4)...")],-1)),u(t("canvas",nn,null,512),[[f,!s.img6]]),u(t("img",{src:s.img6,class:"webgl-canvas spec-canvas"},null,8,tn),[[f,s.img6]]),n[34]||(n[34]=t("pre",null,[t("code",null,`// 扇形
const radius = 0.75
const points = []
const delt = 30
const PI = Math.PI
for (let i = 0; i ≷= 6; i++) {
    points.push(radius * Math.cos(i * delt / 180 * PI))
    points.push(radius * Math.sin(i * delt / 180 * PI))
}
points.unshift(...[0.0, -0.5])
...
gl.drawArrays(gl.TRIANGLE_FAN, 0, n)`)],-1)),n[35]||(n[35]=t("h3",{class:"title"},"移动、旋转和缩放",-1)),n[36]||(n[36]=t("p",null,"平移之后坐标分量为：",-1)),n[37]||(n[37]=t("pre",null,[t("code",null,`x' = x + Tx
y' = y + Ty
z' = z + Tz`)],-1)),n[38]||(n[38]=t("p",null,"将平移距离传入顶点着色器，然后分别在顶点坐标的对应分量上相加，赋值给gl_Position：",-1)),n[39]||(n[39]=t("pre",null,[t("code",null,`// 顶点着色器
const VSHADER_SOURCE = \`
    attribute vec4 a_Position;
    uniform vec4 u_Translation;
    void main() {
        gl_Position = a_Position + u_Translation;
        gl_PointSize = 10.0;
    }
\`
...
const uTranslation = gl.getUniformLocation(gl.program, 'u_Translation')
gl.uniform4f(uTranslation, tx, ty, tz, 0.0)`)],-1)),n[40]||(n[40]=t("p",null,"原来的位置：",-1)),t("canvas",on,null,512),n[41]||(n[41]=t("p",null,"x、y分量各自平移0.25之后的位置：",-1)),t("canvas",sn,null,512),n[42]||(n[42]=t("p",null,"旋转β角度之后坐标分量与原坐标的关系：",-1)),n[43]||(n[43]=t("pre",null,[t("code",null,`x' = x cosβ - y sinβ
y' = x sinβ + y cosβ
z' = z

// 推算过程：设点P(x,y)与原点的连线夹角为α，到原点的距离为R，旋转β角度之后的坐标为：
x' = cos(α+β) * R = cosα * cosβ * R - sinα * sinβ * R = x * cosβ - y * sinβ
y' = sin(α+β) * R = sinα * cosβ * R + cosα * sinβ * R = y * cosβ + x * sinβ`)],-1)),n[44]||(n[44]=t("p",null,"先计算出旋转角度的正弦和余弦值，然后再传值进uniform变量中去：",-1)),n[45]||(n[45]=t("pre",null,[t("code",null,`const VSHADER_SOURCE = \`
    attribute vec4 a_Position;
    uniform float u_CosB, u_SinB;
    void main() {
        gl_Position.x = a_Position.x * u_CosB - a_Position.y * u_SinB;
        gl_Position.y = a_Position.x * u_SinB + a_Position.y * u_CosB;
        gl_Position.z = a_Position.z;
        gl_Position.w = 1.0;
        gl_PointSize = 10.0;
    }
\`
...
const radian = Math.PI * angle / 180.0
const cosB = Math.cos(radian)
const sinB = Math.sin(radian)
const uCosB = gl.getUniformLocation(gl.program, 'u_CosB')
gl.uniform1f(uCosB, cosB)
const uSinB = gl.getUniformLocation(gl.program, 'u_SinB')
gl.uniform1f(uSinB, sinB)`)],-1)),n[46]||(n[46]=t("p",null,"旋转之前：",-1)),t("canvas",rn,null,512),n[47]||(n[47]=t("p",null,"旋转20度之后：",-1)),t("canvas",ln,null,512),n[48]||(n[48]=t("p",null,[m("对于简单的变换，可以使用数学表达式来实现，但是复杂时，则可以使用矩阵运算："),t("strong",null,"[x', y', z', w'] = xformMatrix * [x, y, z, w]")],-1)),n[49]||(n[49]=t("pre",null,[t("code",null,`// 旋转矩阵
cosB  -sinB   0   0
sinB   cosB    0   0
  0        0      1    0
  0        0      0    1
`)],-1)),n[50]||(n[50]=t("p",null,"通过旋转矩阵来旋转：",-1)),n[51]||(n[51]=t("pre",null,[t("code",null,`// 顶点着色器，矩阵可以直接相乘
const VSHADER_SOURCE = \`
    attribute vec4 a_Position;
    uniform mat4 u_xformMatrix;
    void main() {
        gl_Position = u_xformMatrix * a_Position;
        gl_PointSize = 10.0;
    }
\`
...
const radian = Math.PI * angle / 180.0
const cosB = Math.cos(radian)
const sinB = Math.sin(radian)
const xformMatrix = new Float32Array([ // 按列主序储存矩阵
    cosB, sinB, 0.0, 0.0,
    -sinB, cosB, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
])
const uxformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix')
gl.uniformMatrix4fv(uxformMatrix, false, xformMatrix)`)],-1)),t("canvas",en,null,512),n[52]||(n[52]=t("pre",null,[t("code",null,`gl.uniformMatrix4fv(location, transpose, array)
// 将array表示的4x4矩阵分配给由location指定的uniform变量
// location：uniform变量的储存位置
// transpose：在webgl中固定为false即可
// array：待传输的类型化数组，4x4矩阵按列主序储存在其中`)],-1)),n[53]||(n[53]=t("p",null,"平移矩阵：",-1)),n[54]||(n[54]=t("pre",null,[t("code",null,`1     0     0     tx
0     1     0     ty
0     0     1     tz
0     0     0      1`)],-1)),n[55]||(n[55]=t("p",null,"缩放矩阵：",-1)),n[56]||(n[56]=t("pre",null,[t("code",null,`Sx     0     0     0
0     Sy     0     0
0      0     Sz     0
0      0     0      1`)],-1))])]),_:1})}const gn=N(G,[["render",an]]);export{gn as default};
