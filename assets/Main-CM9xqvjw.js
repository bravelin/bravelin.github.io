import{_ as J0,r as g,a as K0,b as Q0,m as $0,p as t1,h as n1,o as e1,e as o,q as x,w as f,v as p}from"./index-DAung_sQ.js";import{i as r1}from"./webgl-BYb_5Ot-.js";import{D as S0}from"./draw1-CsRNesyS.js";class B{constructor(n,t,e,r,a=!1,s=!1){const c=window.getComputedStyle(n,null);n.width=parseInt(c.width),n.height=parseInt(c.height);const u=n.getContext("webgl2");if(a&&u.enable(u.DEPTH_TEST),s&&u.enable(u.POLYGON_OFFSET_FILL),!r1(u,`
            attribute vec4 a_Position;
            attribute vec4 a_Color;
            uniform mat4 u_Matrix;
            varying vec4 v_Color;
            void main() {
                gl_Position = u_Matrix * a_Position;
                v_Color = a_Color;
            }
        `,`
            precision mediump float;
            varying vec4 v_Color;
            void main() {
                gl_FragColor = v_Color;
            }
        `)){console.log("init shader error");return}const w=(v=>{const R=new Float32Array(t),y=e,F=v.createBuffer();if(!F)return-1;v.bindBuffer(v.ARRAY_BUFFER,F),v.bufferData(v.ARRAY_BUFFER,R,v.STATIC_DRAW);const L=R.BYTES_PER_ELEMENT,b=v.getAttribLocation(v.program,"a_Position");v.vertexAttribPointer(b,3,v.FLOAT,!1,6*L,0),v.enableVertexAttribArray(b);const T=v.getAttribLocation(v.program,"a_Color");return v.vertexAttribPointer(T,3,v.FLOAT,!1,6*L,3*L),v.enableVertexAttribArray(T),y})(u);if(w<0){console.log("initVertexBuffers failed");return}const M=u.getUniformLocation(u.program,"u_Matrix");u.uniformMatrix4fv(M,!1,r),u.clearColor(0,0,0,1),a?u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT):u.clear(u.COLOR_BUFFER_BIT),s&&u.polygonOffset(1,1),u.drawArrays(u.TRIANGLES,0,w),this.gl=u,this.el=n,this.vertexCount=e,this.depthEnable=a,this.img=n.toDataURL("image/png")}redraw(n){const t=this.gl,e=this.el,r=t.getUniformLocation(t.program,"u_Matrix");t.uniformMatrix4fv(r,!1,n),this.depthEnable?t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT):t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLES,0,this.vertexCount),this.img=e.toDataURL("image/png")}}const i=function(l){var n,t,e;if(l&&typeof l=="object"&&l.hasOwnProperty("elements")){for(t=l.elements,e=new Float32Array(16),n=0;n<16;++n)e[n]=t[n];this.elements=e}else this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])};i.prototype.setIdentity=function(){var l=this.elements;return l[0]=1,l[4]=0,l[8]=0,l[12]=0,l[1]=0,l[5]=1,l[9]=0,l[13]=0,l[2]=0,l[6]=0,l[10]=1,l[14]=0,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this};i.prototype.set=function(l){var n,t,e;if(t=l.elements,e=this.elements,t!==e){for(n=0;n<16;++n)e[n]=t[n];return this}};i.prototype.concat=function(l){var n,t,e,r,a,s,c,u;if(t=this.elements,e=this.elements,r=l.elements,t===r)for(r=new Float32Array(16),n=0;n<16;++n)r[n]=t[n];for(n=0;n<4;n++)a=e[n],s=e[n+4],c=e[n+8],u=e[n+12],t[n]=a*r[0]+s*r[1]+c*r[2]+u*r[3],t[n+4]=a*r[4]+s*r[5]+c*r[6]+u*r[7],t[n+8]=a*r[8]+s*r[9]+c*r[10]+u*r[11],t[n+12]=a*r[12]+s*r[13]+c*r[14]+u*r[15];return this};i.prototype.multiply=i.prototype.concat;i.prototype.multiplyVector3=function(l){var n=this.elements,t=l.elements,e=new P0,r=e.elements;return r[0]=t[0]*n[0]+t[1]*n[4]+t[2]*n[8]+n[11],r[1]=t[0]*n[1]+t[1]*n[5]+t[2]*n[9]+n[12],r[2]=t[0]*n[2]+t[1]*n[6]+t[2]*n[10]+n[13],e};i.prototype.multiplyVector4=function(l){var n=this.elements,t=l.elements,e=new l1,r=e.elements;return r[0]=t[0]*n[0]+t[1]*n[4]+t[2]*n[8]+t[3]*n[12],r[1]=t[0]*n[1]+t[1]*n[5]+t[2]*n[9]+t[3]*n[13],r[2]=t[0]*n[2]+t[1]*n[6]+t[2]*n[10]+t[3]*n[14],r[3]=t[0]*n[3]+t[1]*n[7]+t[2]*n[11]+t[3]*n[15],e};i.prototype.transpose=function(){var l,n;return l=this.elements,n=l[1],l[1]=l[4],l[4]=n,n=l[2],l[2]=l[8],l[8]=n,n=l[3],l[3]=l[12],l[12]=n,n=l[6],l[6]=l[9],l[9]=n,n=l[7],l[7]=l[13],l[13]=n,n=l[11],l[11]=l[14],l[14]=n,this};i.prototype.setInverseOf=function(l){var n,t,e,r,a;if(t=l.elements,e=this.elements,r=new Float32Array(16),r[0]=t[5]*t[10]*t[15]-t[5]*t[11]*t[14]-t[9]*t[6]*t[15]+t[9]*t[7]*t[14]+t[13]*t[6]*t[11]-t[13]*t[7]*t[10],r[4]=-t[4]*t[10]*t[15]+t[4]*t[11]*t[14]+t[8]*t[6]*t[15]-t[8]*t[7]*t[14]-t[12]*t[6]*t[11]+t[12]*t[7]*t[10],r[8]=t[4]*t[9]*t[15]-t[4]*t[11]*t[13]-t[8]*t[5]*t[15]+t[8]*t[7]*t[13]+t[12]*t[5]*t[11]-t[12]*t[7]*t[9],r[12]=-t[4]*t[9]*t[14]+t[4]*t[10]*t[13]+t[8]*t[5]*t[14]-t[8]*t[6]*t[13]-t[12]*t[5]*t[10]+t[12]*t[6]*t[9],r[1]=-t[1]*t[10]*t[15]+t[1]*t[11]*t[14]+t[9]*t[2]*t[15]-t[9]*t[3]*t[14]-t[13]*t[2]*t[11]+t[13]*t[3]*t[10],r[5]=t[0]*t[10]*t[15]-t[0]*t[11]*t[14]-t[8]*t[2]*t[15]+t[8]*t[3]*t[14]+t[12]*t[2]*t[11]-t[12]*t[3]*t[10],r[9]=-t[0]*t[9]*t[15]+t[0]*t[11]*t[13]+t[8]*t[1]*t[15]-t[8]*t[3]*t[13]-t[12]*t[1]*t[11]+t[12]*t[3]*t[9],r[13]=t[0]*t[9]*t[14]-t[0]*t[10]*t[13]-t[8]*t[1]*t[14]+t[8]*t[2]*t[13]+t[12]*t[1]*t[10]-t[12]*t[2]*t[9],r[2]=t[1]*t[6]*t[15]-t[1]*t[7]*t[14]-t[5]*t[2]*t[15]+t[5]*t[3]*t[14]+t[13]*t[2]*t[7]-t[13]*t[3]*t[6],r[6]=-t[0]*t[6]*t[15]+t[0]*t[7]*t[14]+t[4]*t[2]*t[15]-t[4]*t[3]*t[14]-t[12]*t[2]*t[7]+t[12]*t[3]*t[6],r[10]=t[0]*t[5]*t[15]-t[0]*t[7]*t[13]-t[4]*t[1]*t[15]+t[4]*t[3]*t[13]+t[12]*t[1]*t[7]-t[12]*t[3]*t[5],r[14]=-t[0]*t[5]*t[14]+t[0]*t[6]*t[13]+t[4]*t[1]*t[14]-t[4]*t[2]*t[13]-t[12]*t[1]*t[6]+t[12]*t[2]*t[5],r[3]=-t[1]*t[6]*t[11]+t[1]*t[7]*t[10]+t[5]*t[2]*t[11]-t[5]*t[3]*t[10]-t[9]*t[2]*t[7]+t[9]*t[3]*t[6],r[7]=t[0]*t[6]*t[11]-t[0]*t[7]*t[10]-t[4]*t[2]*t[11]+t[4]*t[3]*t[10]+t[8]*t[2]*t[7]-t[8]*t[3]*t[6],r[11]=-t[0]*t[5]*t[11]+t[0]*t[7]*t[9]+t[4]*t[1]*t[11]-t[4]*t[3]*t[9]-t[8]*t[1]*t[7]+t[8]*t[3]*t[5],r[15]=t[0]*t[5]*t[10]-t[0]*t[6]*t[9]-t[4]*t[1]*t[10]+t[4]*t[2]*t[9]+t[8]*t[1]*t[6]-t[8]*t[2]*t[5],a=t[0]*r[0]+t[1]*r[4]+t[2]*r[8]+t[3]*r[12],a===0)return this;for(a=1/a,n=0;n<16;n++)e[n]=r[n]*a;return this};i.prototype.invert=function(){return this.setInverseOf(this)};i.prototype.setOrtho=function(l,n,t,e,r,a){var s,c,u,m;if(l===n||t===e||r===a)throw"null frustum";return c=1/(n-l),u=1/(e-t),m=1/(a-r),s=this.elements,s[0]=2*c,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2*u,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=-2*m,s[11]=0,s[12]=-(n+l)*c,s[13]=-(e+t)*u,s[14]=-(a+r)*m,s[15]=1,this};i.prototype.ortho=function(l,n,t,e,r,a){return this.concat(new i().setOrtho(l,n,t,e,r,a))};i.prototype.setFrustum=function(l,n,t,e,r,a){var s,c,u,m;if(l===n||e===t||r===a)throw"null frustum";if(r<=0)throw"near <= 0";if(a<=0)throw"far <= 0";return c=1/(n-l),u=1/(e-t),m=1/(a-r),s=this.elements,s[0]=2*r*c,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2*r*u,s[6]=0,s[7]=0,s[8]=(n+l)*c,s[9]=(e+t)*u,s[10]=-(a+r)*m,s[11]=-1,s[12]=0,s[13]=0,s[14]=-2*r*a*m,s[15]=0,this};i.prototype.frustum=function(l,n,t,e,r,a){return this.concat(new i().setFrustum(l,n,t,e,r,a))};i.prototype.setPerspective=function(l,n,t,e){var r,a,s,c;if(t===e||n===0)throw"null frustum";if(t<=0)throw"near <= 0";if(e<=0)throw"far <= 0";if(l=Math.PI*l/180/2,s=Math.sin(l),s===0)throw"null frustum";return a=1/(e-t),c=Math.cos(l)/s,r=this.elements,r[0]=c/n,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=c,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=-(e+t)*a,r[11]=-1,r[12]=0,r[13]=0,r[14]=-2*t*e*a,r[15]=0,this};i.prototype.perspective=function(l,n,t,e){return this.concat(new i().setPerspective(l,n,t,e))};i.prototype.setScale=function(l,n,t){var e=this.elements;return e[0]=l,e[4]=0,e[8]=0,e[12]=0,e[1]=0,e[5]=n,e[9]=0,e[13]=0,e[2]=0,e[6]=0,e[10]=t,e[14]=0,e[3]=0,e[7]=0,e[11]=0,e[15]=1,this};i.prototype.scale=function(l,n,t){var e=this.elements;return e[0]*=l,e[4]*=n,e[8]*=t,e[1]*=l,e[5]*=n,e[9]*=t,e[2]*=l,e[6]*=n,e[10]*=t,e[3]*=l,e[7]*=n,e[11]*=t,this};i.prototype.setTranslate=function(l,n,t){var e=this.elements;return e[0]=1,e[4]=0,e[8]=0,e[12]=l,e[1]=0,e[5]=1,e[9]=0,e[13]=n,e[2]=0,e[6]=0,e[10]=1,e[14]=t,e[3]=0,e[7]=0,e[11]=0,e[15]=1,this};i.prototype.translate=function(l,n,t){var e=this.elements;return e[12]+=e[0]*l+e[4]*n+e[8]*t,e[13]+=e[1]*l+e[5]*n+e[9]*t,e[14]+=e[2]*l+e[6]*n+e[10]*t,e[15]+=e[3]*l+e[7]*n+e[11]*t,this};i.prototype.setRotate=function(l,n,t,e){var r,a,s,c,u,m,d,A,w,M,v,R;return l=Math.PI*l/180,r=this.elements,a=Math.sin(l),s=Math.cos(l),n!==0&&t===0&&e===0?(n<0&&(a=-a),r[0]=1,r[4]=0,r[8]=0,r[12]=0,r[1]=0,r[5]=s,r[9]=-a,r[13]=0,r[2]=0,r[6]=a,r[10]=s,r[14]=0,r[3]=0,r[7]=0,r[11]=0,r[15]=1):n===0&&t!==0&&e===0?(t<0&&(a=-a),r[0]=s,r[4]=0,r[8]=a,r[12]=0,r[1]=0,r[5]=1,r[9]=0,r[13]=0,r[2]=-a,r[6]=0,r[10]=s,r[14]=0,r[3]=0,r[7]=0,r[11]=0,r[15]=1):n===0&&t===0&&e!==0?(e<0&&(a=-a),r[0]=s,r[4]=-a,r[8]=0,r[12]=0,r[1]=a,r[5]=s,r[9]=0,r[13]=0,r[2]=0,r[6]=0,r[10]=1,r[14]=0,r[3]=0,r[7]=0,r[11]=0,r[15]=1):(c=Math.sqrt(n*n+t*t+e*e),c!==1&&(u=1/c,n*=u,t*=u,e*=u),m=1-s,d=n*t,A=t*e,w=e*n,M=n*a,v=t*a,R=e*a,r[0]=n*n*m+s,r[1]=d*m+R,r[2]=w*m-v,r[3]=0,r[4]=d*m-R,r[5]=t*t*m+s,r[6]=A*m+M,r[7]=0,r[8]=w*m+v,r[9]=A*m-M,r[10]=e*e*m+s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1),this};i.prototype.rotate=function(l,n,t,e){return this.concat(new i().setRotate(l,n,t,e))};i.prototype.setLookAt=function(l,n,t,e,r,a,s,c,u){var m,d,A,w,M,v,R,y,F,L,b,T;return d=e-l,A=r-n,w=a-t,M=1/Math.sqrt(d*d+A*A+w*w),d*=M,A*=M,w*=M,v=A*u-w*c,R=w*s-d*u,y=d*c-A*s,F=1/Math.sqrt(v*v+R*R+y*y),v*=F,R*=F,y*=F,L=R*w-y*A,b=y*d-v*w,T=v*A-R*d,m=this.elements,m[0]=v,m[1]=L,m[2]=-d,m[3]=0,m[4]=R,m[5]=b,m[6]=-A,m[7]=0,m[8]=y,m[9]=T,m[10]=-w,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,this.translate(-l,-n,-t)};i.prototype.lookAt=function(l,n,t,e,r,a,s,c,u){return this.concat(new i().setLookAt(l,n,t,e,r,a,s,c,u))};i.prototype.dropShadow=function(l,n){var t=new i,e=t.elements,r=l[0]*n[0]+l[1]*n[1]+l[2]*n[2]+l[3]*n[3];return e[0]=r-n[0]*l[0],e[1]=-n[1]*l[0],e[2]=-n[2]*l[0],e[3]=-n[3]*l[0],e[4]=-n[0]*l[1],e[5]=r-n[1]*l[1],e[6]=-n[2]*l[1],e[7]=-n[3]*l[1],e[8]=-n[0]*l[2],e[9]=-n[1]*l[2],e[10]=r-n[2]*l[2],e[11]=-n[3]*l[2],e[12]=-n[0]*l[3],e[13]=-n[1]*l[3],e[14]=-n[2]*l[3],e[15]=r-n[3]*l[3],this.concat(t)};i.prototype.dropShadowDirectionally=function(l,n,t,e,r,a,s,c,u){var m=e*l+r*n+a*t;return this.dropShadow([l,n,t,-m],[s,c,u,0])};var P0=function(l){var n=new Float32Array(3);l&&typeof l=="object"&&(n[0]=l[0],n[1]=l[1],n[2]=l[2]),this.elements=n};P0.prototype.normalize=function(){var l=this.elements,n=l[0],t=l[1],e=l[2],r=Math.sqrt(n*n+t*t+e*e);if(r){if(r==1)return this}else return l[0]=0,l[1]=0,l[2]=0,this;return r=1/r,l[0]=n*r,l[1]=t*r,l[2]=e*r,this};var l1=function(l){var n=new Float32Array(4);l&&typeof l=="object"&&(n[0]=l[0],n[1]=l[1],n[2]=l[2],n[3]=l[3]),this.elements=n};const o1={setup(){const l=g(null),n=g(null),t=g(null),e=g(null);let r=null;const a=g(null),s=g(null);let c=null;const u=g(null),m=g(null),d=g(null),A=g(null),w=g(null),M=g(null),v=g(null),R=g(null),y=g(null),F=g(null),L=g(null),b=g(null);let T=null;const W=g(null),z=g(null);let h=null;return K0(()=>{const r0=new i;r0.setLookAt(.2,.25,.25,0,0,0,0,1,0);const Z=new Float32Array([0,.5,-.4,.4,1,.4,-.5,-.5,-.4,.4,1,.4,.5,-.5,-.4,1,.4,.4,.5,.4,-.2,1,.4,.4,-.5,.4,-.2,1,1,.4,0,-.6,-.2,1,1,.4,0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,1,.4,.4]);n.value=new B(l.value,Z,9,r0.elements).img;const _=15;let N=0,l0=Date.now(),C=new i;C.setLookAt(.2,.25,.25,0,0,0,0,1,0);const V=new i;V.setRotate(N,0,0,1);const O0=C.multiply(V),X=new B(t.value,Z,9,O0.elements);e.value=X.img;const o0=()=>{const E=Date.now();N=(N+_*(E-l0)/1e3)%360,l0=E,C=new i,C.setLookAt(.2,.25,.25,0,0,0,0,1,0),V.setRotate(N,0,0,1),X.redraw(C.multiply(V).elements),e.value=X.img,r=requestAnimationFrame(o0)};r=requestAnimationFrame(o0);let k=0,s0=Date.now(),I=new i;I.setLookAt(.2,.25,.25,0,0,0,0,1,0);const G=new i;G.setRotate(k,0,0,1);let J=I.multiply(G),S=new i;S.setOrtho(-1,1,-1,1,-1,2);const U0=S.multiply(J),K=new B(a.value,Z,9,U0.elements);s.value=K.img;const i0=()=>{const E=Date.now();k=(k+_*(E-s0)/1e3)%360,s0=E,I=new i,G.setRotate(k,0,0,1),I.setLookAt(.2,.25,.25,0,0,0,0,1,0),J=I.multiply(G),S=new i,S.setOrtho(-1,1,-1,1,-1,2),K.redraw(S.multiply(J).elements),s.value=K.img,c=requestAnimationFrame(i0)};c=requestAnimationFrame(i0);const D0=new Float32Array([.75,1,-4,.4,1,.4,.25,-1,-4,.4,1,.4,1.25,-1,-4,1,.4,.4,.75,1,-2,1,1,.4,.25,-1,-2,1,1,.4,1.25,-1,-2,1,.4,.4,.75,1,0,.4,.4,1,.25,-1,0,.4,.4,1,1.25,-1,0,1,.4,.4,-.75,1,-4,.4,1,.4,-1.25,-1,-4,.4,1,.4,-.25,-1,-4,1,.4,.4,-.75,1,-2,1,1,.4,-1.25,-1,-2,1,1,.4,-.25,-1,-2,1,.4,.4,-.75,1,0,.4,.4,1,-1.25,-1,0,.4,.4,1,-.25,-1,0,1,.4,.4]),a0=new i;a0.setLookAt(0,0,5,0,0,-100,0,1,0);const u0=new i,m0=window.getComputedStyle(u.value,null);u0.setPerspective(30,parseInt(m0.width)/parseInt(m0.height),1,100);const h0=u0.multiply(a0),_0=new B(u.value,D0,18,h0.elements);m.value=_0.img;const c0=new Float32Array([.75,1,0,.4,.4,1,.25,-1,0,.4,.4,1,1.25,-1,0,1,.4,.4,.75,1,-2,1,1,.4,.25,-1,-2,1,1,.4,1.25,-1,-2,1,.4,.4,.75,1,-4,.4,1,.4,.25,-1,-4,.4,1,.4,1.25,-1,-4,1,.4,.4,-.75,1,0,.4,.4,1,-1.25,-1,0,.4,.4,1,-.25,-1,0,1,.4,.4,-.75,1,-2,1,1,.4,-1.25,-1,-2,1,1,.4,-.25,-1,-2,1,.4,.4,-.75,1,-4,.4,1,.4,-1.25,-1,-4,.4,1,.4,-.25,-1,-4,1,.4,.4]),v0=new i;v0.setLookAt(0,0,5,0,0,-100,0,1,0);const w0=new i,g0=window.getComputedStyle(d.value,null);w0.setPerspective(30,parseInt(g0.width)/parseInt(g0.height),1,100);const N0=w0.multiply(v0),V0=new B(d.value,c0,18,N0.elements,!1);A.value=V0.img;const f0=new i;f0.setLookAt(0,0,5,0,0,-100,0,1,0);const p0=new i,d0=window.getComputedStyle(w.value,null);p0.setPerspective(30,parseInt(d0.width)/parseInt(d0.height),1,100);const k0=p0.multiply(f0),G0=new B(w.value,c0,18,k0.elements,!0);M.value=G0.img;const A0=new Float32Array([.75,1,-3,.4,.4,1,.25,-1,-3,.4,.4,1,1.25,-1,-3,1,.4,.4,.75,1,-3,1,1,.4,.25,-1,-3,1,1,.4,1.25,-1,-3,1,.4,.4,.75,1,-3,.4,1,.4,.25,-1,-3,.4,1,.4,1.25,-1,-3,1,.4,.4,-.75,1,-3,.4,.4,1,-1.25,-1,-3,.4,.4,1,-.25,-1,-3,1,.4,.4,-.75,1,-3,1,1,.4,-1.25,-1,-3,1,1,.4,-.25,-1,-3,1,.4,.4,-.75,1,-3,.4,1,.4,-1.25,-1,-3,.4,1,.4,-.25,-1,-3,1,.4,.4]),Q=new i;Q.setLookAt(0,0,5,0,0,-100,0,1,0);const R0=new i,x0=window.getComputedStyle(v.value,null);R0.setPerspective(30,parseInt(x0.width)/parseInt(x0.height),1,100);const Y0=R0.multiply(Q),j0=new B(v.value,A0,18,Y0.elements,!0);R.value=j0.img,new i().setLookAt(0,0,5,0,0,-100,0,1,0);const M0=new i,y0=window.getComputedStyle(y.value,null);M0.setPerspective(30,parseInt(y0.width)/parseInt(y0.height),1,100);const H0=M0.multiply(Q),q0=new B(y.value,A0,18,H0.elements,!0,!0);F.value=q0.img;let Y=0,E0=Date.now(),P=new i;P.setLookAt(3,3,7,0,0,0,0,1,0);const j=new i;j.setRotate(Y,0,0,1);let $=P.multiply(j),O=new i;const F0=window.getComputedStyle(L.value,null),L0=parseInt(F0.width)/parseInt(F0.height);O.setPerspective(30,L0,1,100);const W0=new Float32Array([1,1,1,1,1,1,-1,1,1,1,0,1,-1,-1,1,1,0,0,1,-1,1,1,1,0,1,-1,-1,0,1,0,1,1,-1,0,1,1,-1,1,-1,0,0,1,-1,-1,-1,0,0,0]),z0=new Uint8Array([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,1,1,6,7,1,7,2,7,4,3,7,3,2,4,7,6,4,6,5]),t0=new S0(L.value,W0,z0,O.multiply($).elements);b.value=t0.img;const T0=()=>{const E=Date.now();Y=(Y+_*(E-E0)/1e3)%360,E0=E,P=new i,P.setLookAt(3,3,7,0,0,0,0,1,0),j.setRotate(Y,0,0,1),$=P.multiply(j),O=new i,O.setPerspective(30,L0,1,100),t0.redraw(O.multiply($).elements),b.value=t0.img,T=requestAnimationFrame(T0)};T=requestAnimationFrame(T0);let H=0,b0=Date.now(),U=new i;U.setLookAt(3,3,7,0,0,0,0,1,0);const q=new i;q.setRotate(H,0,0,1);let n0=U.multiply(q),D=new i;const B0=window.getComputedStyle(W.value,null),C0=parseInt(B0.width)/parseInt(B0.height);D.setPerspective(30,C0,1,100);const Z0=new Float32Array([1,1,1,.4,.4,1,-1,1,1,.4,.4,1,-1,-1,1,.4,.4,1,1,-1,1,.4,.4,1,1,1,1,.4,1,.4,1,-1,1,.4,1,.4,1,-1,-1,.4,1,.4,1,1,-1,.4,1,.4,1,1,1,1,.4,.4,1,1,-1,1,.4,.4,-1,1,-1,1,.4,.4,-1,1,1,1,.4,.4,-1,1,1,1,1,.4,-1,1,-1,1,1,.4,-1,-1,-1,1,1,.4,-1,-1,1,1,1,.4,-1,-1,-1,1,1,1,1,-1,-1,1,1,1,1,-1,1,1,1,1,-1,-1,1,1,1,1,1,-1,-1,.4,1,1,-1,-1,-1,.4,1,1,-1,1,-1,.4,1,1,1,1,-1,.4,1,1]),X0=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),e0=new S0(W.value,Z0,X0,D.multiply(n0).elements);z.value=e0.img;const I0=()=>{const E=Date.now();H=(H+_*(E-b0)/1e3)%360,b0=E,U=new i,U.setLookAt(3,3,7,0,0,0,0,1,0),q.setRotate(H,0,0,1),n0=U.multiply(q),D=new i,D.setPerspective(30,C0,1,100),e0.redraw(D.multiply(n0).elements),z.value=e0.img,h=requestAnimationFrame(I0)};h=requestAnimationFrame(I0)}),Q0(()=>{r&&cancelAnimationFrame(r),c&&cancelAnimationFrame(c),T&&cancelAnimationFrame(T),h&&cancelAnimationFrame(h)}),{canvasRef0:l,img0:n,canvasRef1:t,img1:e,canvasRef2:a,img2:s,canvasRef3:u,img3:m,canvasRef4:d,img4:A,canvasRef5:w,img5:M,canvasRef6:v,img6:R,canvasRef7:y,img7:F,canvasRef8:L,img8:b,canvasRef9:W,img9:z}}},s1={class:"_article-content"},i1={ref:"canvasRef0",class:"webgl-canvas"},a1=["src"],u1={ref:"canvasRef1",class:"webgl-canvas"},m1=["src"],c1={ref:"canvasRef2",class:"webgl-canvas"},v1=["src"],w1={ref:"canvasRef3",class:"webgl-canvas"},g1=["src"],f1={ref:"canvasRef4",class:"webgl-canvas"},p1=["src"],d1={ref:"canvasRef5",class:"webgl-canvas"},A1=["src"],R1={ref:"canvasRef6",class:"webgl-canvas"},x1=["src"],M1={ref:"canvasRef7",class:"webgl-canvas"},y1=["src"],E1={ref:"canvasRef8",class:"webgl-canvas"},F1=["src"],L1={ref:"canvasRef9",class:"webgl-canvas"},T1=["src"];function b1(l,n,t,e,r,a){const s=n1("MyArticle");return e1(),$0(s,{class:"readingNotes-webgl-06",title:"WebGL学习笔记之六：进入三维世界",date:"2021年05月19日"},{default:t1(()=>[o("div",s1,[n[0]||(n[0]=o("p",null,"将讲解视图矩阵、投影矩阵；学习如何控制三维可视空间，处理物体的前后关系，以及绘制三维的立方体。",-1)),n[1]||(n[1]=o("h3",{class:"title"},"视图矩阵",-1)),n[2]||(n[2]=o("p",null,[o("strong",null,"立方体由三角形构成。"),x("绘制三维物体时，需要考虑它们的深度信息。")],-1)),n[3]||(n[3]=o("p",null,"视图矩阵(view matrix)由以下三个矢量构成：",-1)),n[4]||(n[4]=o("p",null,[o("strong",null,"视点"),x("：观察者所处的位置。视线的起点，坐标(eyeX, eyeY, eyeZ)表示。")],-1)),n[5]||(n[5]=o("p",null,[o("strong",null,"观察目标点"),x("：被观察目标所在的点。视线从视点出发，穿过观察目标点并继续延伸。观察目标点是一个点，而不是视线方向，只有同时知道观察目标点和视点，才能算出视线方向。坐标用(atX, atY, atZ)表示。")],-1)),n[6]||(n[6]=o("p",null,[o("strong",null,"上方向"),x("：最终绘制在屏幕上的影像中的向上的方向。这个方向将观察者固定住了。用坐标(upX, upY, upZ)表示。")],-1)),n[7]||(n[7]=o("p",null,"使用以下方法设置视图矩阵：",-1)),n[8]||(n[8]=o("pre",null,[o("code",null,`Matrix4.setLookAt(eyeX, eyeY, eyeZ, atX, atY, atZ, upX, upY, upZ)
// 观察者的默认状态是：视点为系统原点(0,0,0)；视线为Z轴负方向，观察点为(0,0,-1)；上方向为Y轴负方向(0,1,0)`)],-1)),f(o("canvas",i1,null,512),[[p,!e.img0]]),f(o("img",{src:e.img0,class:"webgl-canvas"},null,8,a1),[[p,e.img0]]),n[9]||(n[9]=o("pre",null,[o("code",null,`// 视图矩阵为：
viewMatrix.setLookAt(0.20, 0.25, 0.25, 0, 0, 0, 0, 1.0, 0)

// 点坐标与颜色值
const datas = new Float32Array([
    0.0, 0.5, -0.4, 0.4, 1.0, 0.4,
    -0.5, -0.5, -0.4, 0.4, 1.0, 0.4,
    0.5, -0.5, -0.4, 1.0, 0.4, 0.4,

    0.5, 0.4, -0.2, 1.0, 0.4, 0.4,
    -0.5, 0.4, -0.2, 1.0, 1.0, 0.4,
    0.0, -0.6, -0.2, 1.0, 1.0, 0.4,

    0.0, 0.5, 0.0, 0.4, 0.4, 1.0,
    -0.5, -0.5, 0.0, 0.4, 0.4, 1.0,
    0.5, -0.5, 0.0, 1.0, 0.4, 0.4
])

// 顶点着色器
const VSHADER_SOURCE = \`
    attribute vec4 a_Position;
    attribute vec4 a_Color;
    uniform mat4 u_ViewMatrix;
    varying vec4 v_Color;
    void main() {
        gl_Position = u_ViewMatrix * a_Position;
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
\`
......
// 设置视图矩阵
const uViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix')
gl.uniformMatrix4fv(uViewMatrix, false, viewMatrix)

gl.clearColor(0.0, 0.0, 0.0, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT)
gl.drawArrays(gl.TRIANGLES, 0, n)`)],-1)),n[10]||(n[10]=o("p",null,[x("视图矩阵被传给了顶点着色器，并与顶点坐标相乘。"),o("strong",null,"“根据自定义的观察者状态，绘制观察者看到的景象”与“使用默认的观察状态，但对三维对象进行平移、旋转等变换，再绘制观察者看到的景象”，这两者行为是等价的。")],-1)),n[11]||(n[11]=o("pre",null,[o("code",null,`"从视点看上去"的旋转顶点坐标 = 视图矩阵 * 旋转矩阵 * 原始顶点坐标 = 模型视图矩阵 * 原始顶点坐标
模型视图矩阵 = 视图矩阵 * 模型矩阵`)],-1)),n[12]||(n[12]=o("p",null,"模型视图矩阵的应用——旋转变换：",-1)),f(o("canvas",u1,null,512),[[p,!e.img1]]),f(o("img",{src:e.img1,class:"webgl-canvas"},null,8,m1),[[p,e.img1]]),n[13]||(n[13]=o("pre",null,[o("code",null,`const viewMatrix = new Matrix4()
viewMatrix.setLookAt(0.20, 0.25, 0.25, 0, 0, 0, 0, 1.0, 0)
const modelMatrix = new CuonMatrix4()
modelMatrix.setRotate(-20, 0, 0, 1) // 旋转矩阵
const modelViewMatrix = viewMatrix.multiply(modelMatrix)`)],-1)),n[14]||(n[14]=o("p",null,"简写成以下形式也可以：",-1)),n[15]||(n[15]=o("pre",null,[o("code",null,`const modelViewMatrix = new Matrix4()
modelViewMatrix.setLookAt(0.20, 0.25, 0.25, 0, 0, 0, 0, 1.0, 0).rotate(-20, 0, 0, 1)`)],-1)),n[16]||(n[16]=o("h3",{class:"title"},"可视范围",-1)),n[17]||(n[17]=o("p",null,[x("当以上三角形旋转至某个位置时，会缺少一部分没显示出来。原因是没有指定"),o("strong",null,"可视范围"),x("，即实际观察得到的区域边界。WebGL只显示可视范围之内的区域。不绘制可视范围之外的对象，是降低程序开销的基本手段。人类能看到眼前范围的东西，水平视角大约200度左右。")],-1)),n[18]||(n[18]=o("p",null,[x("水平视角、重置视角和可视深度，定义了"),o("strong",null,"可视空间"),x("。有两类可视空间，长方体可视空间（盒状空间，由"),o("strong",null,"正射投影"),x("产生）和四棱锥/金字塔可视空间（由"),o("strong",null,"透视投影"),x("产生）。")],-1)),n[19]||(n[19]=o("p",null,[x("盒状可视空间由前后两个矩形表面确定，分别称为"),o("strong",null,"近裁剪面"),x("和"),o("strong",null,"远裁剪面"),x("，前者的四个顶点为(right, top, near)、(left, top, near)、(left, bottom, near)、(right, bottom, near)，而后者的四个顶点为(right, top, far)、(left, top, far)、(left, bottom, far)、(right, bottom, far)。canvas上显示的就是可视空间中物体在近裁剪面的投影。如果裁剪面的宽高比和canvas不一样，那么画面会被按照canvas的宽高比进行压缩，物体会被扭曲显示。")],-1)),n[20]||(n[20]=o("p",null,"Matrix4.setOrtho()方法可以用来设置投影矩阵，定义盒状可视空间：",-1)),n[21]||(n[21]=o("pre",null,[o("code",null,"Matrix4.setOrtho(left, right, bottom, top, near, far)")],-1)),f(o("canvas",c1,null,512),[[p,!e.img2]]),f(o("img",{src:e.img2,class:"webgl-canvas"},null,8,v1),[[p,e.img2]]),n[22]||(n[22]=o("pre",null,[o("code",null,`const projectMatrix = new Matrix4()
projectMatrix.setOrtho(-1, 1, -1, 1, -1.0, 2.0)`)],-1)),n[23]||(n[23]=o("p",null,"可视空间设置的足够大，没有再出现未能完整显示的情况：",-1)),n[24]||(n[24]=o("pre",null,[o("code",null,"最终顶点坐标 = 投影矩阵 * 视图模型矩阵")],-1)),n[25]||(n[25]=o("p",null,"使用透视投影矩阵，WebGL会自动将距离远的物体缩小显示，从而产生深度感。使用Matrix4对象的setPerspective()方法来定义透视投影可视空间。",-1)),n[26]||(n[26]=o("pre",null,[o("code",null,`Matrix4.setPerspective(fov, aspect, near, far)
// fov：垂直视角，可视空间顶面和底面间的夹角，必须大于0
// aspect：近裁剪面的宽高比
// near，far：近裁剪面和远裁剪面的位置，near和far必须大于0`)],-1)),f(o("canvas",w1,null,512),[[p,!e.img3]]),f(o("img",{src:e.img3,class:"webgl-canvas"},null,8,g1),[[p,e.img3]]),n[27]||(n[27]=o("pre",null,[o("code",null,`// 视图矩阵
const viewMatrix = new Matrix4()
viewMatrix.setLookAt(0, 0, 5, 0, 0, -100, 0, 1.0, 0)
const projectMatrix = new Matrix4()
const size = window.getComputedStyle(canvasRef.value, null)
// 投影矩阵
projectMatrix.setPerspective(30, parseInt(size.width) / parseInt(size.height), 1, 100)
const matrix = projectMatrix.multiply(viewMatrix)`)],-1)),n[28]||(n[28]=o("p",null,"顶点坐标的计算公式：",-1)),n[29]||(n[29]=o("pre",null,[o("code",null,"投影矩阵 * 视图矩阵 * 模型矩阵 * 顶点坐标")],-1)),n[30]||(n[30]=o("h3",{class:"title"},"隐藏面消除",-1)),n[31]||(n[31]=o("p",null,"在默认情况下，WebGL为了加速绘图操作，是按照顶点在缓冲区中的顺序来处理的。后绘制的图形将覆盖已经绘制好的图形。",-1)),f(o("canvas",f1,null,512),[[p,!e.img4]]),f(o("img",{src:e.img4,class:"webgl-canvas"},null,8,p1),[[p,e.img4]]),n[32]||(n[32]=o("p",null,"调整三角形顶点的位置，本该出现在最远处的绿色三角形，挡住了近处的黄色和蓝色三角形。WebGL提供了隐藏面消除功能，这个功能可以消除那些被遮挡的表面，可以放心地绘制场景而不必顾及各物体在缓冲区中的顺序：",-1)),n[33]||(n[33]=o("pre",null,[o("code",null,`// 1.开启隐藏面消除功能
gl.enable(gl.DEPTH_TEST); // gl.DEPTH_TEST、gl.BLEND(混合)、gl.POLYGON_OFFSET_FILL(多边形位移)
// 2.在绘制前，清除深度缓冲区
gl.clear(gl.DEPTH_BUFFER_BIT)`)],-1)),n[34]||(n[34]=o("p",null,"深度缓冲区是一个中间对象，用来存储深度信息，其作用是帮助WebGL进行隐藏面消除，也称为Z缓存区。",-1)),n[35]||(n[35]=o("pre",null,[o("code",null,`const gl = el.getContext('webgl2')
gl.enable(gl.DEPTH_TEST)
......
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT) // 清空颜色和深度缓冲区，每一帧绘制之前，都需要清空深度缓存区。
gl.drawArrays(gl.TRIANGLES, 0, n)`)],-1)),n[36]||(n[36]=o("p",null,"启用隐藏面消除：",-1)),f(o("canvas",d1,null,512),[[p,!e.img5]]),f(o("img",{src:e.img5,class:"webgl-canvas"},null,8,A1),[[p,e.img5]]),n[37]||(n[37]=o("h3",{class:"title"},"深度冲突",-1)),n[38]||(n[38]=o("p",null,"当物体表面过于接近时，深度缓冲区有限的精度已经不能区分哪个在前，哪个在后了。使用多边形偏移机制可以解决该问题，该机制将自动在Z值加上一个偏移量，偏移量的值由物体表面相对于观察者视线的角度来确定。",-1)),n[39]||(n[39]=o("p",null,"将6个三角形的Z值改成一样：",-1)),f(o("canvas",R1,null,512),[[p,!e.img6]]),f(o("img",{src:e.img6,class:"webgl-canvas"},null,8,x1),[[p,e.img6]]),n[40]||(n[40]=o("pre",null,[o("code",null,`// 1.启用多边形偏移
gl.enable(gl.POLYGON_OFFSET_FILL);
// 2.指定用来计算偏移量的参数
gl.polygonOffset(factor, units);`)],-1)),n[41]||(n[41]=o("p",null,"启用之后，效果好像不太明显：",-1)),f(o("canvas",M1,null,512),[[p,!e.img7]]),f(o("img",{src:e.img7,class:"webgl-canvas"},null,8,y1),[[p,e.img7]]),n[42]||(n[42]=o("h3",{class:"title"},"立方体的绘制",-1)),n[43]||(n[43]=o("p",null,"使用gl.drawElements()代替gl.drawArrays()进行绘制，能够避免重复定义顶点，保持顶点数量最小。",-1)),n[44]||(n[44]=o("pre",null,[o("code",null,`gl.drawElements(mode, count, type, offset) // 执行着色器，按照mode参数指定的方式，根据绑定到gl.ELEMENT_ARRAY_BUFFER的缓冲区中的顶点索引值绘制图形。
// mode：指定绘制方式，gl.POINTS、gl.LINES、gl.LINE_STRIP、gl.LINE_LOOP、gl.TRIANGLES、gl.TRIANGLE_STRIP、gl.TRIANGLE_FAN
// count：指定绘制顶点的个数
// type：指定索引值数据类型，gl.UNSIGNED_BYTE或者gl.UNSIGNED_SHORT
// offset：指定索引数组中开始绘制的位置，以字节为单位`)],-1)),n[45]||(n[45]=o("pre",null,[o("code",null,`const initVertexBuffers = (gl) => {
    // 创建缓冲区
    const verticeColorBuffer = gl.createBuffer()
    const indexBuffer = gl.createBuffer()
    if (!verticeColorBuffer || !indexBuffer) {
        return -1
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, verticeColorBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, datas, gl.STATIC_DRAW)
    const eleSize = datas.BYTES_PER_ELEMENT

    const aPosition = gl.getAttribLocation(gl.program, 'a_Position')
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 6 * eleSize, 0)
    gl.enableVertexAttribArray(aPosition)

    const aColor = gl.getAttribLocation(gl.program, 'a_Color')
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 6 * eleSize, 3 * eleSize)
    gl.enableVertexAttribArray(aColor)

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW)
    return indices.length
}

// 设置视图/变换矩阵
const uMatrix = gl.getUniformLocation(gl.program, 'u_Matrix')
gl.uniformMatrix4fv(uMatrix, false, matrix)

gl.clearColor(0.0, 0.0, 0.0, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_BYTE, 0)`)],-1)),n[46]||(n[46]=o("p",null,"顶点颜色已经索引值数据：",-1)),n[47]||(n[47]=o("pre",null,[o("code",null,`viewMatrix8.setPerspective(30, parseInt(size8.width) / parseInt(size8.height), 1, 100)
viewMatrix8.lookAt(3, 3, 7, 0, 0, 0, 0, 1.0, 0)
const datas4 = new Float32Array([
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, // v0 White
    -1.0, 1.0, 1.0, 1.0, 0.0, 1.0, // v1 Magenta
    -1.0, -1.0, 1.0, 1.0, 0.0, 0.0, // v2 Red
    1.0, -1.0, 1.0, 1.0, 1.0, 0.0, // v3 Yellow
    1.0, -1.0, -1.0, 0.0, 1.0, 0.0, // v4 Green
    1.0, 1.0, -1.0, 0.0, 1.0, 1.0, // v5 Cyan
    -1.0, 1.0, -1.0, 0.0, 0.0, 1.0, // v6 Blue
    -1.0, -1.0, -1.0, 0.0, 0.0, 0.0 // v7 Black
])
const indices = new Uint8Array([
    0, 1, 2, 0, 2, 3,
    0, 3, 4, 0, 4, 5,
    0, 5, 6, 0, 6, 1,
    1, 6, 7, 1, 7, 2,
    7, 4, 3, 7, 3, 2,
    4, 7, 6, 4, 6, 5
])`)],-1)),f(o("canvas",E1,null,512),[[p,!e.img8]]),f(o("img",{src:e.img8,class:"webgl-canvas"},null,8,F1),[[p,e.img8]]),n[48]||(n[48]=o("p",null,"在调用gl.drawElements()时，WebGL首先从绑定到gl.ELEMENT_ARRAY_BUFFER的缓冲区中获取顶点的索引值，然后根据该索引值，从绑定到gl.ARRAY_BUFFER的缓冲区中获取顶点的坐标、颜色等信息，然后传递给attribute变量执行顶点着色器。这种方式通过索引来访问数据，从而循环利用顶点信息，控制内存开销。",-1)),n[49]||(n[49]=o("p",null,"每个面单一颜色的立方体：",-1)),f(o("canvas",L1,null,512),[[p,!e.img9]]),f(o("img",{src:e.img9,class:"webgl-canvas"},null,8,T1),[[p,e.img9]]),n[50]||(n[50]=o("p",null,"需要使用24个顶点，每个面四个顶点设置成一致的颜色值：",-1)),n[51]||(n[51]=o("pre",null,[o("code",null,`const datas = new Float32Array([
    1.0, 1.0, 1.0, 0.4, 0.4, 1.0, // front
    -1.0, 1.0, 1.0, 0.4, 0.4, 1.0,
    -1.0, -1.0, 1.0, 0.4, 0.4, 1.0,
    1.0, -1.0, 1.0, 0.4, 0.4, 1.0,

    1.0, 1.0, 1.0, 0.4, 1.0, 0.4, // right
    1.0, -1.0, 1.0, 0.4, 1.0, 0.4,
    1.0, -1.0, -1.0, 0.4, 1.0, 0.4,
    1.0, 1.0, -1.0, 0.4, 1.0, 0.4,

    1.0, 1.0, 1.0, 1.0, 0.4, 0.4, // up
    1.0, 1.0, -1.0, 1.0, 0.4, 0.4,
    -1.0, 1.0, -1.0, 1.0, 0.4, 0.4,
    -1.0, 1.0, 1.0, 1.0, 0.4, 0.4,

    -1.0, 1.0, 1.0, 1.0, 1.0, 0.4, // left
    -1.0, 1.0, -1.0, 1.0, 1.0, 0.4,
    -1.0, -1.0, -1.0, 1.0, 1.0, 0.4,
    -1.0, -1.0, 1.0, 1.0, 1.0, 0.4,

    -1.0, -1.0, -1.0, 1.0, 1.0, 1.0, // down
    1.0, -1.0, -1.0, 1.0, 1.0, 1.0,
    1.0, -1.0, 1.0, 1.0, 1.0, 1.0,
    -1.0, -1.0, 1.0, 1.0, 1.0, 1.0,

    1.0, -1.0, -1.0, 0.4, 1.0, 1.0, // back
    -1.0, -1.0, -1.0, 0.4, 1.0, 1.0,
    -1.0, 1.0, -1.0, 0.4, 1.0, 1.0,
    1.0, 1.0, -1.0, 0.4, 1.0, 1.0
])
const indices = new Uint8Array([
    0, 1, 2, 0, 2, 3,
    4, 5, 6, 4, 6, 7,
    8, 9, 10, 8, 10, 11,
    12, 13, 14, 12, 14, 15,
    16, 17, 18, 16, 18, 19,
    20, 21, 22, 20, 22, 23
])`)],-1))])]),_:1})}const P1=J0(o1,[["render",b1]]);export{P1 as default};
