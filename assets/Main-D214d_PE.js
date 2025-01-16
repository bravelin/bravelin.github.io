import{_ as E,r as A,a as B,y as U,m as D,p as O,h as P,o as L,e as m,w,v as R}from"./index-CB7K47Ib.js";import{i as S}from"./webgl-BYb_5Ot-.js";function C(o,n,t,r){const e=window.getComputedStyle(o,null);o.width=parseInt(e.width),o.height=parseInt(e.height);const s=o.getContext("webgl2");if(!S(s,`
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
    `)){console.log("init shader error");return}const a=(f=>{const x=f.getUniformLocation(f.program,"u_xformMatrix");f.uniformMatrix4fv(x,!1,r.elements);const v=new Float32Array(n),d=t,h=f.createBuffer();if(!h)return-1;f.bindBuffer(f.ARRAY_BUFFER,h),f.bufferData(f.ARRAY_BUFFER,v,f.STATIC_DRAW);const p=f.getAttribLocation(f.program,"a_Position");return f.vertexAttribPointer(p,2,f.FLOAT,!1,0,0),f.enableVertexAttribArray(p),d})(s);if(a<0){console.log("initVertexBuffers failed");return}return s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLES,0,a),o.toDataURL("image/png")}class T{constructor(n,t,r,e,s){const i=window.getComputedStyle(n,null);n.width=parseInt(i.width),n.height=parseInt(i.height);const l=n.getContext("webgl2");if(this.gl=l,this.xformMatrix=e,this.vertexDatas=t,this.vertexCount=r,this.updateCallback=s,this.uxformMatrix=null,this.tick=null,!S(l,`
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
        `)){console.log("init shader error");return}const f=this.initVertexBuffers(l);if(f<0){console.log("initVertexBuffers failed");return}l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT),l.drawArrays(l.TRIANGLES,0,f)}start(){this.stop(),this.update()}update(){const n=this;n.updateCallback&&n.updateCallback(n.xformMatrix);const t=n.gl;t.uniformMatrix4fv(n.uxformMatrix,!1,n.xformMatrix.elements),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLES,0,n.vertexCount),n.tick=requestAnimationFrame(n.update.bind(n))}stop(){this.tick&&cancelAnimationFrame(this.tick)}initVertexBuffers(){const n=this.gl,t=n.getUniformLocation(n.program,"u_xformMatrix");this.uxformMatrix=t,n.uniformMatrix4fv(t,!1,this.xformMatrix.elements);const r=new Float32Array(this.vertexDatas),e=this.vertexCount,s=n.createBuffer();if(!s)return-1;n.bindBuffer(n.ARRAY_BUFFER,s),n.bufferData(n.ARRAY_BUFFER,r,n.STATIC_DRAW);const i=n.getAttribLocation(n.program,"a_Position");return n.vertexAttribPointer(i,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(i),e}}const u=function(o){var n,t,r;if(o&&typeof o=="object"&&o.hasOwnProperty("elements")){for(t=o.elements,r=new Float32Array(16),n=0;n<16;++n)r[n]=t[n];this.elements=r}else this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])};u.prototype.setIdentity=function(){var o=this.elements;return o[0]=1,o[4]=0,o[8]=0,o[12]=0,o[1]=0,o[5]=1,o[9]=0,o[13]=0,o[2]=0,o[6]=0,o[10]=1,o[14]=0,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this};u.prototype.set=function(o){var n,t,r;if(t=o.elements,r=this.elements,t!==r){for(n=0;n<16;++n)r[n]=t[n];return this}};u.prototype.concat=function(o){var n,t,r,e,s,i,l,c;if(t=this.elements,r=this.elements,e=o.elements,t===e)for(e=new Float32Array(16),n=0;n<16;++n)e[n]=t[n];for(n=0;n<4;n++)s=r[n],i=r[n+4],l=r[n+8],c=r[n+12],t[n]=s*e[0]+i*e[1]+l*e[2]+c*e[3],t[n+4]=s*e[4]+i*e[5]+l*e[6]+c*e[7],t[n+8]=s*e[8]+i*e[9]+l*e[10]+c*e[11],t[n+12]=s*e[12]+i*e[13]+l*e[14]+c*e[15];return this};u.prototype.multiply=u.prototype.concat;u.prototype.multiplyVector3=function(o){var n=this.elements,t=o.elements,r=new _,e=r.elements;return e[0]=t[0]*n[0]+t[1]*n[4]+t[2]*n[8]+n[11],e[1]=t[0]*n[1]+t[1]*n[5]+t[2]*n[9]+n[12],e[2]=t[0]*n[2]+t[1]*n[6]+t[2]*n[10]+n[13],r};u.prototype.multiplyVector4=function(o){var n=this.elements,t=o.elements,r=new I,e=r.elements;return e[0]=t[0]*n[0]+t[1]*n[4]+t[2]*n[8]+t[3]*n[12],e[1]=t[0]*n[1]+t[1]*n[5]+t[2]*n[9]+t[3]*n[13],e[2]=t[0]*n[2]+t[1]*n[6]+t[2]*n[10]+t[3]*n[14],e[3]=t[0]*n[3]+t[1]*n[7]+t[2]*n[11]+t[3]*n[15],r};u.prototype.transpose=function(){var o,n;return o=this.elements,n=o[1],o[1]=o[4],o[4]=n,n=o[2],o[2]=o[8],o[8]=n,n=o[3],o[3]=o[12],o[12]=n,n=o[6],o[6]=o[9],o[9]=n,n=o[7],o[7]=o[13],o[13]=n,n=o[11],o[11]=o[14],o[14]=n,this};u.prototype.setInverseOf=function(o){var n,t,r,e,s;if(t=o.elements,r=this.elements,e=new Float32Array(16),e[0]=t[5]*t[10]*t[15]-t[5]*t[11]*t[14]-t[9]*t[6]*t[15]+t[9]*t[7]*t[14]+t[13]*t[6]*t[11]-t[13]*t[7]*t[10],e[4]=-t[4]*t[10]*t[15]+t[4]*t[11]*t[14]+t[8]*t[6]*t[15]-t[8]*t[7]*t[14]-t[12]*t[6]*t[11]+t[12]*t[7]*t[10],e[8]=t[4]*t[9]*t[15]-t[4]*t[11]*t[13]-t[8]*t[5]*t[15]+t[8]*t[7]*t[13]+t[12]*t[5]*t[11]-t[12]*t[7]*t[9],e[12]=-t[4]*t[9]*t[14]+t[4]*t[10]*t[13]+t[8]*t[5]*t[14]-t[8]*t[6]*t[13]-t[12]*t[5]*t[10]+t[12]*t[6]*t[9],e[1]=-t[1]*t[10]*t[15]+t[1]*t[11]*t[14]+t[9]*t[2]*t[15]-t[9]*t[3]*t[14]-t[13]*t[2]*t[11]+t[13]*t[3]*t[10],e[5]=t[0]*t[10]*t[15]-t[0]*t[11]*t[14]-t[8]*t[2]*t[15]+t[8]*t[3]*t[14]+t[12]*t[2]*t[11]-t[12]*t[3]*t[10],e[9]=-t[0]*t[9]*t[15]+t[0]*t[11]*t[13]+t[8]*t[1]*t[15]-t[8]*t[3]*t[13]-t[12]*t[1]*t[11]+t[12]*t[3]*t[9],e[13]=t[0]*t[9]*t[14]-t[0]*t[10]*t[13]-t[8]*t[1]*t[14]+t[8]*t[2]*t[13]+t[12]*t[1]*t[10]-t[12]*t[2]*t[9],e[2]=t[1]*t[6]*t[15]-t[1]*t[7]*t[14]-t[5]*t[2]*t[15]+t[5]*t[3]*t[14]+t[13]*t[2]*t[7]-t[13]*t[3]*t[6],e[6]=-t[0]*t[6]*t[15]+t[0]*t[7]*t[14]+t[4]*t[2]*t[15]-t[4]*t[3]*t[14]-t[12]*t[2]*t[7]+t[12]*t[3]*t[6],e[10]=t[0]*t[5]*t[15]-t[0]*t[7]*t[13]-t[4]*t[1]*t[15]+t[4]*t[3]*t[13]+t[12]*t[1]*t[7]-t[12]*t[3]*t[5],e[14]=-t[0]*t[5]*t[14]+t[0]*t[6]*t[13]+t[4]*t[1]*t[14]-t[4]*t[2]*t[13]-t[12]*t[1]*t[6]+t[12]*t[2]*t[5],e[3]=-t[1]*t[6]*t[11]+t[1]*t[7]*t[10]+t[5]*t[2]*t[11]-t[5]*t[3]*t[10]-t[9]*t[2]*t[7]+t[9]*t[3]*t[6],e[7]=t[0]*t[6]*t[11]-t[0]*t[7]*t[10]-t[4]*t[2]*t[11]+t[4]*t[3]*t[10]+t[8]*t[2]*t[7]-t[8]*t[3]*t[6],e[11]=-t[0]*t[5]*t[11]+t[0]*t[7]*t[9]+t[4]*t[1]*t[11]-t[4]*t[3]*t[9]-t[8]*t[1]*t[7]+t[8]*t[3]*t[5],e[15]=t[0]*t[5]*t[10]-t[0]*t[6]*t[9]-t[4]*t[1]*t[10]+t[4]*t[2]*t[9]+t[8]*t[1]*t[6]-t[8]*t[2]*t[5],s=t[0]*e[0]+t[1]*e[4]+t[2]*e[8]+t[3]*e[12],s===0)return this;for(s=1/s,n=0;n<16;n++)r[n]=e[n]*s;return this};u.prototype.invert=function(){return this.setInverseOf(this)};u.prototype.setOrtho=function(o,n,t,r,e,s){var i,l,c,a;if(o===n||t===r||e===s)throw"null frustum";return l=1/(n-o),c=1/(r-t),a=1/(s-e),i=this.elements,i[0]=2*l,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*c,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-2*a,i[11]=0,i[12]=-(n+o)*l,i[13]=-(r+t)*c,i[14]=-(s+e)*a,i[15]=1,this};u.prototype.ortho=function(o,n,t,r,e,s){return this.concat(new u().setOrtho(o,n,t,r,e,s))};u.prototype.setFrustum=function(o,n,t,r,e,s){var i,l,c,a;if(o===n||r===t||e===s)throw"null frustum";if(e<=0)throw"near <= 0";if(s<=0)throw"far <= 0";return l=1/(n-o),c=1/(r-t),a=1/(s-e),i=this.elements,i[0]=2*e*l,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*e*c,i[6]=0,i[7]=0,i[8]=(n+o)*l,i[9]=(r+t)*c,i[10]=-(s+e)*a,i[11]=-1,i[12]=0,i[13]=0,i[14]=-2*e*s*a,i[15]=0,this};u.prototype.frustum=function(o,n,t,r,e,s){return this.concat(new u().setFrustum(o,n,t,r,e,s))};u.prototype.setPerspective=function(o,n,t,r){var e,s,i,l;if(t===r||n===0)throw"null frustum";if(t<=0)throw"near <= 0";if(r<=0)throw"far <= 0";if(o=Math.PI*o/180/2,i=Math.sin(o),i===0)throw"null frustum";return s=1/(r-t),l=Math.cos(o)/i,e=this.elements,e[0]=l/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=-(r+t)*s,e[11]=-1,e[12]=0,e[13]=0,e[14]=-2*t*r*s,e[15]=0,this};u.prototype.perspective=function(o,n,t,r){return this.concat(new u().setPerspective(o,n,t,r))};u.prototype.setScale=function(o,n,t){var r=this.elements;return r[0]=o,r[4]=0,r[8]=0,r[12]=0,r[1]=0,r[5]=n,r[9]=0,r[13]=0,r[2]=0,r[6]=0,r[10]=t,r[14]=0,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this};u.prototype.scale=function(o,n,t){var r=this.elements;return r[0]*=o,r[4]*=n,r[8]*=t,r[1]*=o,r[5]*=n,r[9]*=t,r[2]*=o,r[6]*=n,r[10]*=t,r[3]*=o,r[7]*=n,r[11]*=t,this};u.prototype.setTranslate=function(o,n,t){var r=this.elements;return r[0]=1,r[4]=0,r[8]=0,r[12]=o,r[1]=0,r[5]=1,r[9]=0,r[13]=n,r[2]=0,r[6]=0,r[10]=1,r[14]=t,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this};u.prototype.translate=function(o,n,t){var r=this.elements;return r[12]+=r[0]*o+r[4]*n+r[8]*t,r[13]+=r[1]*o+r[5]*n+r[9]*t,r[14]+=r[2]*o+r[6]*n+r[10]*t,r[15]+=r[3]*o+r[7]*n+r[11]*t,this};u.prototype.setRotate=function(o,n,t,r){var e,s,i,l,c,a,f,x,v,d,h,p;return o=Math.PI*o/180,e=this.elements,s=Math.sin(o),i=Math.cos(o),n!==0&&t===0&&r===0?(n<0&&(s=-s),e[0]=1,e[4]=0,e[8]=0,e[12]=0,e[1]=0,e[5]=i,e[9]=-s,e[13]=0,e[2]=0,e[6]=s,e[10]=i,e[14]=0,e[3]=0,e[7]=0,e[11]=0,e[15]=1):n===0&&t!==0&&r===0?(t<0&&(s=-s),e[0]=i,e[4]=0,e[8]=s,e[12]=0,e[1]=0,e[5]=1,e[9]=0,e[13]=0,e[2]=-s,e[6]=0,e[10]=i,e[14]=0,e[3]=0,e[7]=0,e[11]=0,e[15]=1):n===0&&t===0&&r!==0?(r<0&&(s=-s),e[0]=i,e[4]=-s,e[8]=0,e[12]=0,e[1]=s,e[5]=i,e[9]=0,e[13]=0,e[2]=0,e[6]=0,e[10]=1,e[14]=0,e[3]=0,e[7]=0,e[11]=0,e[15]=1):(l=Math.sqrt(n*n+t*t+r*r),l!==1&&(c=1/l,n*=c,t*=c,r*=c),a=1-i,f=n*t,x=t*r,v=r*n,d=n*s,h=t*s,p=r*s,e[0]=n*n*a+i,e[1]=f*a+p,e[2]=v*a-h,e[3]=0,e[4]=f*a-p,e[5]=t*t*a+i,e[6]=x*a+d,e[7]=0,e[8]=v*a+h,e[9]=x*a-d,e[10]=r*r*a+i,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1),this};u.prototype.rotate=function(o,n,t,r){return this.concat(new u().setRotate(o,n,t,r))};u.prototype.setLookAt=function(o,n,t,r,e,s,i,l,c){var a,f,x,v,d,h,p,g,M,y,F,b;return f=r-o,x=e-n,v=s-t,d=1/Math.sqrt(f*f+x*x+v*v),f*=d,x*=d,v*=d,h=x*c-v*l,p=v*i-f*c,g=f*l-x*i,M=1/Math.sqrt(h*h+p*p+g*g),h*=M,p*=M,g*=M,y=p*v-g*x,F=g*f-h*v,b=h*x-p*f,a=this.elements,a[0]=h,a[1]=y,a[2]=-f,a[3]=0,a[4]=p,a[5]=F,a[6]=-x,a[7]=0,a[8]=g,a[9]=b,a[10]=-v,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this.translate(-o,-n,-t)};u.prototype.lookAt=function(o,n,t,r,e,s,i,l,c){return this.concat(new u().setLookAt(o,n,t,r,e,s,i,l,c))};u.prototype.dropShadow=function(o,n){var t=new u,r=t.elements,e=o[0]*n[0]+o[1]*n[1]+o[2]*n[2]+o[3]*n[3];return r[0]=e-n[0]*o[0],r[1]=-n[1]*o[0],r[2]=-n[2]*o[0],r[3]=-n[3]*o[0],r[4]=-n[0]*o[1],r[5]=e-n[1]*o[1],r[6]=-n[2]*o[1],r[7]=-n[3]*o[1],r[8]=-n[0]*o[2],r[9]=-n[1]*o[2],r[10]=e-n[2]*o[2],r[11]=-n[3]*o[2],r[12]=-n[0]*o[3],r[13]=-n[1]*o[3],r[14]=-n[2]*o[3],r[15]=e-n[3]*o[3],this.concat(t)};u.prototype.dropShadowDirectionally=function(o,n,t,r,e,s,i,l,c){var a=r*o+e*n+s*t;return this.dropShadow([o,n,t,-a],[i,l,c,0])};var _=function(o){var n=new Float32Array(3);o&&typeof o=="object"&&(n[0]=o[0],n[1]=o[1],n[2]=o[2]),this.elements=n};_.prototype.normalize=function(){var o=this.elements,n=o[0],t=o[1],r=o[2],e=Math.sqrt(n*n+t*t+r*r);if(e){if(e==1)return this}else return o[0]=0,o[1]=0,o[2]=0,this;return e=1/e,o[0]=n*e,o[1]=t*e,o[2]=r*e,this};var I=function(o){var n=new Float32Array(4);o&&typeof o=="object"&&(n[0]=o[0],n[1]=o[1],n[2]=o[2],n[3]=o[3]),this.elements=n};const V={setup(){const o=A(null),n=A(null),t=A(null),r=A(null),e=A(null),s=A(null),i=A(null);let l=null;return B(()=>{const c=new u;c.setRotate(20,0,0,1),n.value=C(o.value,[-.5,-.5,.5,-.5,0,.5],3,c);const a=new u;a.setRotate(20,0,0,1),a.translate(.5,0,0),r.value=C(t.value,[-.5,-.5,.5,-.5,0,.5],3,a);const f=new u;f.setTranslate(.5,0,0),f.rotate(20,0,0,1),s.value=C(e.value,[-.5,-.5,.5,-.5,0,.5],3,f);const x=new u,v=45;let d=0,h=Date.now();const p=g=>{const M=Date.now();d=(d+v*(M-h)/1e3)%360,h=M,g.setRotate(d,0,0,1),g.translate(.35,0,0)};l=new T(i.value,[-.5,-.5,.5,-.5,0,.5],3,x,p),l.start()}),U(()=>{l&&l.stop()}),{canvasRef0:o,img0:n,canvasRef1:t,img1:r,canvasRef2:e,img2:s,canvasRef3:i}}},k={class:"_article-content"},H={ref:"canvasRef0",class:"webgl-canvas spec-canvas"},q=["src"],G={ref:"canvasRef1",class:"webgl-canvas spec-canvas"},N=["src"],W={ref:"canvasRef2",class:"webgl-canvas spec-canvas"},j=["src"],Y={ref:"canvasRef3",class:"webgl-canvas spec-canvas"};function z(o,n,t,r,e,s){const i=P("MyArticle");return L(),D(i,{class:"readingNotes-webgl-03",title:"WebGL学习笔记之三：绘制和变换三角形",date:"2021年02月12日"},{default:O(()=>[m("div",k,[n[0]||(n[0]=m("p",null,"进一步研究变换矩阵，并在此基础上制作一些简单的效果。",-1)),n[1]||(n[1]=m("h3",{class:"title"},"平移再旋转",-1)),n[2]||(n[2]=m("p",null,"为了简化编程，大多数WebGL开发者都使用矩阵操作函数库来隐藏矩阵计算的细节，简化与矩阵有关的操作。cuon-marix.js是一个专门的函数库，重写旋转变换的代码：",-1)),n[3]||(n[3]=m("pre",null,[m("code",null,`const xformMatrix = new CuonMatrix4() // CuonMatrix4对象
xformMatrix.setRotate(angle, 0, 0, 1) // 设置为旋转矩阵
const uxformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix')
gl.uniformMatrix4fv(uxformMatrix, false, xformMatrix.elements) // 将旋转矩阵传输给顶点着色器`)],-1)),w(m("canvas",H,null,512),[[R,!r.img0]]),w(m("img",{src:r.img0,class:"webgl-canvas spec-canvas"},null,8,q),[[R,r.img0]]),n[4]||(n[4]=m("p",null,"CuonMatrix4类的方法与属性：",-1)),n[5]||(n[5]=m("pre",null,[m("code",null,`CuonMatrix4.setIdentity() // 将实例初始化为单位矩阵
CuonMatrix4.setRotate(angle, x, y, z) // angle：旋转角度   x, y, z 构成旋转轴
CuonMatrix4.setTranslate(x, y, z) // 将实例设置为平移变换矩阵
CuonMatrix4.setScale(x, y, z) // 将实例设置为缩放矩阵
CuonMatrix4.translate(x, y, z) // 将实例乘以一个平移变换矩阵
CuonMatrix4.rotate(angle, x, y, z) // 将实例乘以一个旋转矩阵
CuonMatrix4.scale(x, y, z) // 将实例乘以一个缩放矩阵
CuonMatrix4.set(m) // 将实例设置为m，m也是一个CuonMatrix4实例
CuonMatrix4.elements // 获取矩阵数据类型化数组`)],-1)),n[6]||(n[6]=m("p",null,"先平移再旋转复合变换的实现：",-1)),n[7]||(n[7]=m("pre",null,[m("code",null,"先平移再旋转后的坐标 = 旋转矩阵 * (平移矩阵 * 原始坐标)  ==>  先平移再旋转后的坐标 = (旋转矩阵 * 平移矩阵) * 原始坐标")],-1)),w(m("canvas",G,null,512),[[R,!r.img1]]),w(m("img",{src:r.img1,class:"webgl-canvas spec-canvas"},null,8,N),[[R,r.img1]]),n[8]||(n[8]=m("pre",null,[m("code",null,`const xformMatrix = new CuonMatrix4()
xformMatrix.setRotate(20, 0, 0, 1) // 旋转角
xformMatrix.translate(0.5, 0, 0.0) // tx平移0.5

const uxformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix')
gl.uniformMatrix4fv(uxformMatrix, false, xformMatrix.elements)`)],-1)),n[9]||(n[9]=m("p",null,"先旋转，再平移的效果：（两者的效果不一样）",-1)),w(m("canvas",W,null,512),[[R,!r.img2]]),w(m("img",{src:r.img2,class:"webgl-canvas spec-canvas"},null,8,j),[[R,r.img2]]),n[10]||(n[10]=m("h3",{class:"title"},"动画",-1)),n[11]||(n[11]=m("p",null,"矩阵运算结合requestAnimationFrame实现一个三角形旋转的动画：",-1)),m("canvas",Y,null,512),n[12]||(n[12]=m("p",null,"定义动画类：",-1)),n[13]||(n[13]=m("pre",null,[m("code",null,`export default class Ani {
    constructor (el, vertexDatas, vertexCount, xformMatrix, updateCallback) {
        const styles = window.getComputedStyle(el, null)
        el.width = parseInt(styles.width)
        el.height = parseInt(styles.height)
        const gl = el.getContext('webgl2')
        this.gl = gl
        this.xformMatrix = xformMatrix
        this.vertexDatas = vertexDatas
        this.vertexCount = vertexCount
        this.updateCallback = updateCallback // 回调更新矩阵数据的函数
        this.uxformMatrix = null // 矩阵变量的uniform地址
        this.tick = null // requestAnimationFrame的返回

        // 顶点着色器
        const VSHADER_SOURCE = \`
            attribute vec4 a_Position;
            uniform mat4 u_xformMatrix;
            void main() {
                gl_Position = u_xformMatrix * a_Position;
                gl_PointSize = 10.0;
            }
        \`
        const FSHADER_SOURCE = \`
            void main() {
                gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
            }
        \`
        if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
            console.log('init shader error')
            return
        }
        // 设置顶点位置
        const n = this.initVertexBuffers(gl)
        if (n < 0) {
            console.log('initVertexBuffers failed')
            return
        }
        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.drawArrays(gl.TRIANGLES, 0, n)
    }

    start () { // 开始动画
        this.stop()
        this.update()
    }

    update () { // 更新
        const that = this
        if (that.updateCallback) {
            that.updateCallback(that.xformMatrix) // 更新变换矩阵
        }
        const gl = that.gl
        gl.uniformMatrix4fv(that.uxformMatrix, false, that.xformMatrix.elements)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.drawArrays(gl.TRIANGLES, 0, that.vertexCount)
        that.tick = requestAnimationFrame(that.update.bind(that))
    }

    stop () { // 停止动画
        if (this.tick) {
            cancelAnimationFrame(this.tick)
        }
    }

    initVertexBuffers () {
        const gl = this.gl
        const uxformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix')
        this.uxformMatrix = uxformMatrix
        gl.uniformMatrix4fv(uxformMatrix, false, this.xformMatrix.elements)
        const vertices = new Float32Array(this.vertexDatas)
        const n = this.vertexCount
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
    }
}`)],-1)),n[14]||(n[14]=m("p",null,"外部调用如下：",-1)),n[15]||(n[15]=m("pre",null,[m("code",null,`const xformMatrix = new CuonMatrix4()
const rotateStep = 45.0 // 旋转速度
let currAngle = 0
let currTime = Date.now()
const aniUpdate = (formMatrix) => {
    const now = Date.now()
    currAngle = (currAngle + (rotateStep * (now - currTime)) / 1000) % 360
    currTime = now
    formMatrix.setRotate(currAngle, 0, 0, 1)
    formMatrix.translate(0.35, 0, 0)
}
const ani = new Ani(canvasRef.value, [-0.5, -0.5, 0.5, -0.5, 0, 0.5], 3, xformMatrix, aniUpdate)
ani.start() // 启动动画`)],-1))])]),_:1})}const Q=E(V,[["render",z]]);export{Q as default};
