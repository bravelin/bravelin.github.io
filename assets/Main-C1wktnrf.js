import{_ as kt,r as P,a as qt,b as jt,m as Wt,p as Jt,h as Kt,o as Qt,e as l,q as S,w as F,v as U}from"./index-uvxfBn81.js";import{i as V}from"./webgl-BYb_5Ot-.js";import{D as Xt}from"./draw1-CsRNesyS.js";class Zt{constructor(o,t,e,r,i,a){const _=window.getComputedStyle(o,null);o.width=parseInt(_.width),o.height=parseInt(_.height);const u=o.getContext("webgl2");if(u.enable(u.DEPTH_TEST),!V(u,`
            attribute vec4 a_Position;
            attribute vec4 a_Color;
            attribute vec4 a_Normal;
            uniform mat4 u_Matrix;
            uniform vec3 u_LightColor;
            uniform vec3 u_LightDirection;
            varying vec4 v_Color;
            void main() {
                gl_Position = u_Matrix * a_Position;
                vec3 normal = normalize(vec3(a_Normal));
                float nDotL = max(dot(u_LightDirection, normal), 0.0);
                vec3 diffuse = u_LightColor * vec3(a_Color) * nDotL;
                v_Color = vec4(diffuse, a_Color.a);
            }
        `,`
            precision mediump float;
            varying vec4 v_Color;
            void main() {
                gl_FragColor = v_Color;
            }
        `)){console.log("init shader error");return}const b=(g=>{const R=g.createBuffer(),C=g.createBuffer();if(!R||!C)return-1;g.bindBuffer(g.ARRAY_BUFFER,R),g.bufferData(g.ARRAY_BUFFER,t,g.STATIC_DRAW);const E=t.BYTES_PER_ELEMENT,L=g.getAttribLocation(g.program,"a_Position");g.vertexAttribPointer(L,3,g.FLOAT,!1,9*E,0),g.enableVertexAttribArray(L);const w=g.getAttribLocation(g.program,"a_Color");g.vertexAttribPointer(w,3,g.FLOAT,!1,9*E,3*E),g.enableVertexAttribArray(w);const d=g.getAttribLocation(g.program,"a_Normal");return g.vertexAttribPointer(d,3,g.FLOAT,!1,9*E,6*E),g.enableVertexAttribArray(d),g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,C),g.bufferData(g.ELEMENT_ARRAY_BUFFER,e,g.STATIC_DRAW),e.length})(u);if(b<0){console.log("initVertexBuffers failed");return}const v=u.getUniformLocation(u.program,"u_Matrix");u.uniformMatrix4fv(v,!1,r);const p=u.getUniformLocation(u.program,"u_LightColor");u.uniform3f(p,...i);const c=u.getUniformLocation(u.program,"u_LightDirection");u.uniform3fv(c,a),u.clearColor(0,0,0,1),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.drawElements(u.TRIANGLES,b,u.UNSIGNED_BYTE,0),this.gl=u,this.el=o,this.vertexCount=b,this.img=o.toDataURL("image/png")}}class $t{constructor(o,t,e,r,i,a,_){const u=window.getComputedStyle(o,null);o.width=parseInt(u.width),o.height=parseInt(u.height);const s=o.getContext("webgl2");if(s.enable(s.DEPTH_TEST),!V(s,`
            attribute vec4 a_Position;
            attribute vec4 a_Color;
            attribute vec4 a_Normal;
            uniform mat4 u_Matrix;
            uniform vec3 u_LightColor;
            uniform vec3 u_LightDirection;
            uniform vec3 u_AmbientLight;
            varying vec4 v_Color;
            void main() {
                gl_Position = u_Matrix * a_Position;
                vec3 normal = normalize(vec3(a_Normal));
                float nDotL = max(dot(u_LightDirection, normal), 0.0);
                vec3 diffuse = u_LightColor * vec3(a_Color) * nDotL;
                vec3 ambient = u_AmbientLight * a_Color.rgb;
                v_Color = vec4(diffuse + ambient, a_Color.a);
            }
        `,`
            precision mediump float;
            varying vec4 v_Color;
            void main() {
                gl_FragColor = v_Color;
            }
        `)){console.log("init shader error");return}const v=(C=>{const E=C.createBuffer(),L=C.createBuffer();if(!E||!L)return-1;C.bindBuffer(C.ARRAY_BUFFER,E),C.bufferData(C.ARRAY_BUFFER,t,C.STATIC_DRAW);const w=t.BYTES_PER_ELEMENT,d=C.getAttribLocation(C.program,"a_Position");C.vertexAttribPointer(d,3,C.FLOAT,!1,9*w,0),C.enableVertexAttribArray(d);const M=C.getAttribLocation(C.program,"a_Color");C.vertexAttribPointer(M,3,C.FLOAT,!1,9*w,3*w),C.enableVertexAttribArray(M);const A=C.getAttribLocation(C.program,"a_Normal");return C.vertexAttribPointer(A,3,C.FLOAT,!1,9*w,6*w),C.enableVertexAttribArray(A),C.bindBuffer(C.ELEMENT_ARRAY_BUFFER,L),C.bufferData(C.ELEMENT_ARRAY_BUFFER,e,C.STATIC_DRAW),e.length})(s);if(v<0){console.log("initVertexBuffers failed");return}const p=s.getUniformLocation(s.program,"u_Matrix");s.uniformMatrix4fv(p,!1,r);const c=s.getUniformLocation(s.program,"u_LightColor");s.uniform3f(c,...i);const g=s.getUniformLocation(s.program,"u_LightDirection");s.uniform3fv(g,a);const R=s.getUniformLocation(s.program,"u_AmbientLight");s.uniform3f(R,..._),s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT),s.drawElements(s.TRIANGLES,v,s.UNSIGNED_BYTE,0),this.gl=s,this.el=o,this.vertexCount=v,this.img=o.toDataURL("image/png")}}class to{constructor(o,t,e,r,i,a,_,u){const s=window.getComputedStyle(o,null);o.width=parseInt(s.width),o.height=parseInt(s.height);const f=o.getContext("webgl2");if(f.enable(f.DEPTH_TEST),!V(f,`
            attribute vec4 a_Position;
            attribute vec4 a_Color;
            attribute vec4 a_Normal;
            uniform mat4 u_Matrix;
            uniform mat4 u_NormalMatrix;
            uniform vec3 u_LightColor;
            uniform vec3 u_LightDirection;
            uniform vec3 u_AmbientLight;
            varying vec4 v_Color;
            void main() {
                gl_Position = u_Matrix * a_Position;
                vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
                float nDotL = max(dot(u_LightDirection, normal), 0.0);
                vec3 diffuse = u_LightColor * vec3(a_Color) * nDotL;
                vec3 ambient = u_AmbientLight * a_Color.rgb;
                v_Color = vec4(diffuse + ambient, a_Color.a);
            }
        `,`
            precision mediump float;
            varying vec4 v_Color;
            void main() {
                gl_FragColor = v_Color;
            }
        `)){console.log("init shader error");return}const p=(L=>{const w=L.createBuffer(),d=L.createBuffer();if(!w||!d)return-1;L.bindBuffer(L.ARRAY_BUFFER,w),L.bufferData(L.ARRAY_BUFFER,t,L.STATIC_DRAW);const M=t.BYTES_PER_ELEMENT,A=L.getAttribLocation(L.program,"a_Position");L.vertexAttribPointer(A,3,L.FLOAT,!1,9*M,0),L.enableVertexAttribArray(A);const x=L.getAttribLocation(L.program,"a_Color");L.vertexAttribPointer(x,3,L.FLOAT,!1,9*M,3*M),L.enableVertexAttribArray(x);const D=L.getAttribLocation(L.program,"a_Normal");return L.vertexAttribPointer(D,3,L.FLOAT,!1,9*M,6*M),L.enableVertexAttribArray(D),L.bindBuffer(L.ELEMENT_ARRAY_BUFFER,d),L.bufferData(L.ELEMENT_ARRAY_BUFFER,e,L.STATIC_DRAW),e.length})(f);if(p<0){console.log("initVertexBuffers failed");return}const c=f.getUniformLocation(f.program,"u_Matrix");f.uniformMatrix4fv(c,!1,r);const g=f.getUniformLocation(f.program,"u_LightColor");f.uniform3f(g,...i);const R=f.getUniformLocation(f.program,"u_LightDirection");f.uniform3fv(R,a);const C=f.getUniformLocation(f.program,"u_AmbientLight");f.uniform3f(C,..._);const E=f.getUniformLocation(f.program,"u_NormalMatrix");f.uniformMatrix4fv(E,!1,u),f.clearColor(0,0,0,1),f.clear(f.COLOR_BUFFER_BIT|f.DEPTH_BUFFER_BIT),f.drawElements(f.TRIANGLES,p,f.UNSIGNED_BYTE,0),this.gl=f,this.el=o,this.vertexCount=p,this.img=o.toDataURL("image/png")}redraw(o,t){const e=this.gl,r=this.el,i=e.getUniformLocation(e.program,"u_Matrix");e.uniformMatrix4fv(i,!1,o);const a=e.getUniformLocation(e.program,"u_NormalMatrix");e.uniformMatrix4fv(a,!1,t),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.drawElements(e.TRIANGLES,this.vertexCount,e.UNSIGNED_BYTE,0),this.img=r.toDataURL("image/png")}}class yt{constructor(o,t,e,r,i,a,_,u,s,f=!1,h=0){const b=window.getComputedStyle(o,null);o.width=parseInt(b.width),o.height=parseInt(b.height);const v=o.getContext("webgl2");if(v.enable(v.DEPTH_TEST),f){if(!V(v,`
                attribute vec4 a_Position;
                attribute vec4 a_Color;
                attribute vec4 a_Normal;
                uniform mat4 u_Matrix;
                uniform mat4 u_ModelMatrix;
                uniform mat4 u_NormalMatrix;
                varying vec4 v_Color;
                varying vec3 v_Normal;
                varying vec3 v_Position;
                void main() {
                    gl_Position = u_Matrix * a_Position;
                    v_Position = vec3(u_ModelMatrix * a_Position);
                    v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));
                    v_Color = a_Color;
                }
            `,`
                precision mediump float;
                uniform vec3 u_LightColor;
                uniform vec3 u_LightPosition;
                uniform vec3 u_AmbientLight;
                varying vec3 v_Normal;
                varying vec3 v_Position;
                varying vec4 v_Color;
                void main() {
                    vec3 normal = normalize(v_Normal);
                    vec3 lightDirection = normalize(u_LightPosition - v_Position);
                    float nDotL = max(dot(lightDirection, normal),0.0);
                    vec3 diffuse = u_LightColor * v_Color.rgb * nDotL;
                    vec3 ambient = u_AmbientLight * v_Color.rgb;
                    gl_FragColor = vec4(diffuse + ambient, v_Color.a);
                }
            `)){console.log("init shader error");return}}else if(!V(v,`
                attribute vec4 a_Position;
                attribute vec4 a_Color;
                attribute vec4 a_Normal;
                uniform mat4 u_Matrix;
                uniform mat4 u_ModelMatrix;
                uniform mat4 u_NormalMatrix;
                uniform vec3 u_LightColor;
                uniform vec3 u_LightPosition;
                uniform vec3 u_AmbientLight;
                varying vec4 v_Color;
                void main() {
                    gl_Position = u_Matrix * a_Position;
                    vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
                    vec4 vertexPosition = u_ModelMatrix * a_Position;
                    vec3 lightDirection = normalize(u_LightPosition - vec3(vertexPosition));
                    float nDotL = max(dot(lightDirection, normal), 0.0);
                    vec3 diffuse = u_LightColor * vec3(a_Color) * nDotL;
                    vec3 ambient = u_AmbientLight * a_Color.rgb;
                    v_Color = vec4(diffuse + ambient, a_Color.a);
                }
            `,`
                precision mediump float;
                varying vec4 v_Color;
                void main() {
                    gl_FragColor = v_Color;
                }
            `)){console.log("init shader error");return}const c=(d=>{const M=d.createBuffer(),A=d.createBuffer();if(!M||!A)return-1;d.bindBuffer(d.ARRAY_BUFFER,M),d.bufferData(d.ARRAY_BUFFER,t,d.STATIC_DRAW);const x=t.BYTES_PER_ELEMENT,D=d.getAttribLocation(d.program,"a_Position");d.vertexAttribPointer(D,3,d.FLOAT,!1,9*x,0),d.enableVertexAttribArray(D);const B=d.getAttribLocation(d.program,"a_Color");d.vertexAttribPointer(B,3,d.FLOAT,!1,9*x,3*x),d.enableVertexAttribArray(B);const T=d.getAttribLocation(d.program,"a_Normal");return d.vertexAttribPointer(T,3,d.FLOAT,!1,9*x,6*x),d.enableVertexAttribArray(T),d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,A),d.bufferData(d.ELEMENT_ARRAY_BUFFER,e,d.STATIC_DRAW),e.length})(v);if(c<0){console.log("initVertexBuffers failed");return}const g=v.getUniformLocation(v.program,"u_Matrix");v.uniformMatrix4fv(g,!1,r);const R=v.getUniformLocation(v.program,"u_LightColor");v.uniform3f(R,...i);const C=v.getUniformLocation(v.program,"u_LightPosition");v.uniform3f(C,...a);const E=v.getUniformLocation(v.program,"u_AmbientLight");v.uniform3f(E,..._);const L=v.getUniformLocation(v.program,"u_NormalMatrix");v.uniformMatrix4fv(L,!1,u);const w=v.getUniformLocation(v.program,"u_ModelMatrix");v.uniformMatrix4fv(w,!1,s),v.clearColor(0,0,0,1),v.clear(v.COLOR_BUFFER_BIT|v.DEPTH_BUFFER_BIT),v.drawElements(v.TRIANGLES,c,h==0?v.UNSIGNED_BYTE:v.UNSIGNED_SHORT,0),this.gl=v,this.el=o,this.vertexCount=c,this.img=o.toDataURL("image/png")}redraw(o,t,e,r=0){const i=this.gl,a=this.el,_=i.getUniformLocation(i.program,"u_Matrix");i.uniformMatrix4fv(_,!1,o);const u=i.getUniformLocation(i.program,"u_NormalMatrix");i.uniformMatrix4fv(u,!1,t);const s=i.getUniformLocation(i.program,"u_ModelMatrix");i.uniformMatrix4fv(s,!1,e),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),i.drawElements(i.TRIANGLES,this.vertexCount,r==0?i.UNSIGNED_BYTE:i.UNSIGNED_SHORT,0),this.img=a.toDataURL("image/png")}}class oo{constructor(o,t,e,r,i,a,_,u,s,f,h,b=!1,v=0){const p=window.getComputedStyle(o,null);o.width=parseInt(p.width),o.height=parseInt(p.height);const c=o.getContext("webgl2");if(c.enable(c.DEPTH_TEST),b){if(!V(c,`
                attribute vec4 a_Position;
                attribute vec4 a_Color;
                attribute vec4 a_Normal;
                uniform mat4 u_Matrix;
                uniform mat4 u_ModelMatrix;
                uniform mat4 u_NormalMatrix;
                varying vec4 v_Color;
                varying vec3 v_Normal;
                varying vec3 v_Position;
                void main() {
                    gl_Position = u_Matrix * a_Position;
                    v_Position = vec3(u_ModelMatrix * a_Position);
                    v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));
                    v_Color = a_Color;
                }
            `,`
                precision mediump float;
                uniform vec3 u_LightColor;
                uniform vec3 u_LightPosition;
                uniform vec3 u_AmbientLight;
                varying vec3 v_Normal;
                varying vec3 v_Position;
                varying vec4 v_Color;
                void main() {
                    vec3 normal = normalize(v_Normal);
                    vec3 lightDirection = normalize(u_LightPosition - v_Position);
                    float nDotL = max(dot(lightDirection, normal),0.0);
                    vec3 diffuse = u_LightColor * v_Color.rgb * nDotL;
                    vec3 ambient = u_AmbientLight * v_Color.rgb;
                    gl_FragColor = vec4(diffuse + ambient, v_Color.a);
                }
            `)){console.log("init shader error");return}}else if(!V(c,`
                attribute vec4 a_Position;
                attribute vec4 a_Color;
                attribute vec4 a_Normal;
                uniform mat4 u_Matrix;
                uniform mat4 u_ModelMatrix;
                uniform mat4 u_NormalMatrix;
                uniform vec3 u_LightColor;
                uniform vec3 u_LightPosition;
                uniform vec3 u_AmbientLight;
                varying vec4 v_Color;
                void main() {
                    gl_Position = u_Matrix * a_Position;
                    vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
                    vec4 vertexPosition = u_ModelMatrix * a_Position;
                    vec3 lightDirection = normalize(u_LightPosition - vec3(vertexPosition));
                    float nDotL = max(dot(lightDirection, normal), 0.0);
                    vec3 diffuse = u_LightColor * vec3(a_Color) * nDotL;
                    vec3 ambient = u_AmbientLight * a_Color.rgb;
                    v_Color = vec4(diffuse + ambient, a_Color.a);
                }
            `,`
                precision mediump float;
                varying vec4 v_Color;
                void main() {
                    gl_FragColor = v_Color;
                }
            `)){console.log("init shader error");return}const R=(A=>{const x=A.createBuffer(),D=A.createBuffer(),B=A.createBuffer();if(!x||!D||!B)return-1;A.bindBuffer(A.ARRAY_BUFFER,x),A.bufferData(A.ARRAY_BUFFER,t,A.STATIC_DRAW);const T=A.getAttribLocation(A.program,"a_Position");A.vertexAttribPointer(T,3,A.FLOAT,!1,0,0),A.enableVertexAttribArray(T),A.bindBuffer(A.ARRAY_BUFFER,B),A.bufferData(A.ARRAY_BUFFER,r,A.STATIC_DRAW);const H=A.getAttribLocation(A.program,"a_Normal");A.vertexAttribPointer(H,3,A.FLOAT,!1,0,0),A.enableVertexAttribArray(H);const st=A.getAttribLocation(A.program,"a_Color");return A.vertexAttrib3f(st,...i),A.bindBuffer(A.ELEMENT_ARRAY_BUFFER,D),A.bufferData(A.ELEMENT_ARRAY_BUFFER,e,A.STATIC_DRAW),e.length})(c);if(R<0){console.log("initVertexBuffers failed");return}const C=c.getUniformLocation(c.program,"u_Matrix");c.uniformMatrix4fv(C,!1,a);const E=c.getUniformLocation(c.program,"u_LightColor");c.uniform3f(E,..._);const L=c.getUniformLocation(c.program,"u_LightPosition");c.uniform3f(L,...u);const w=c.getUniformLocation(c.program,"u_AmbientLight");c.uniform3f(w,...s);const d=c.getUniformLocation(c.program,"u_NormalMatrix");c.uniformMatrix4fv(d,!1,f);const M=c.getUniformLocation(c.program,"u_ModelMatrix");c.uniformMatrix4fv(M,!1,h),c.clearColor(0,0,0,1),c.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT),c.drawElements(c.TRIANGLES,R,v==0?c.UNSIGNED_BYTE:c.UNSIGNED_SHORT,0),this.gl=c,this.el=o,this.vertexCount=R,this.img=o.toDataURL("image/png")}redraw(o,t,e,r=0){const i=this.gl,a=this.el,_=i.getUniformLocation(i.program,"u_Matrix");i.uniformMatrix4fv(_,!1,o);const u=i.getUniformLocation(i.program,"u_NormalMatrix");i.uniformMatrix4fv(u,!1,t);const s=i.getUniformLocation(i.program,"u_ModelMatrix");i.uniformMatrix4fv(s,!1,e),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),i.drawElements(i.TRIANGLES,this.vertexCount,r==0?i.UNSIGNED_BYTE:i.UNSIGNED_SHORT,0),this.img=a.toDataURL("image/png")}}function eo(n){let o=0,t=0,e=0,r=0,i=0,a=0,_=0,u=0,s=0,f=0;const h=[],b=[];for(i=0;i<=n;i++)for(a=i*Math.PI/n,_=Math.sin(a),u=Math.cos(a),o=0;o<=n;o++)t=o*2*Math.PI/n,e=Math.sin(t),r=Math.cos(t),h.push(e*_),h.push(u),h.push(r*_);for(i=0;i<n;i++)for(o=0;o<n;o++)s=i*(n+1)+o,f=s+(n+1),b.push(s),b.push(f),b.push(s+1),b.push(s+1),b.push(f),b.push(f+1);return{positions:h,indices:b}}const m=function(n){var o,t,e;if(n&&typeof n=="object"&&n.hasOwnProperty("elements")){for(t=n.elements,e=new Float32Array(16),o=0;o<16;++o)e[o]=t[o];this.elements=e}else this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])};m.prototype.setIdentity=function(){var n=this.elements;return n[0]=1,n[4]=0,n[8]=0,n[12]=0,n[1]=0,n[5]=1,n[9]=0,n[13]=0,n[2]=0,n[6]=0,n[10]=1,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1,this};m.prototype.set=function(n){var o,t,e;if(t=n.elements,e=this.elements,t!==e){for(o=0;o<16;++o)e[o]=t[o];return this}};m.prototype.concat=function(n){var o,t,e,r,i,a,_,u;if(t=this.elements,e=this.elements,r=n.elements,t===r)for(r=new Float32Array(16),o=0;o<16;++o)r[o]=t[o];for(o=0;o<4;o++)i=e[o],a=e[o+4],_=e[o+8],u=e[o+12],t[o]=i*r[0]+a*r[1]+_*r[2]+u*r[3],t[o+4]=i*r[4]+a*r[5]+_*r[6]+u*r[7],t[o+8]=i*r[8]+a*r[9]+_*r[10]+u*r[11],t[o+12]=i*r[12]+a*r[13]+_*r[14]+u*r[15];return this};m.prototype.multiply=m.prototype.concat;m.prototype.multiplyVector3=function(n){var o=this.elements,t=n.elements,e=new Lt,r=e.elements;return r[0]=t[0]*o[0]+t[1]*o[4]+t[2]*o[8]+o[11],r[1]=t[0]*o[1]+t[1]*o[5]+t[2]*o[9]+o[12],r[2]=t[0]*o[2]+t[1]*o[6]+t[2]*o[10]+o[13],e};m.prototype.multiplyVector4=function(n){var o=this.elements,t=n.elements,e=new ro,r=e.elements;return r[0]=t[0]*o[0]+t[1]*o[4]+t[2]*o[8]+t[3]*o[12],r[1]=t[0]*o[1]+t[1]*o[5]+t[2]*o[9]+t[3]*o[13],r[2]=t[0]*o[2]+t[1]*o[6]+t[2]*o[10]+t[3]*o[14],r[3]=t[0]*o[3]+t[1]*o[7]+t[2]*o[11]+t[3]*o[15],e};m.prototype.transpose=function(){var n,o;return n=this.elements,o=n[1],n[1]=n[4],n[4]=o,o=n[2],n[2]=n[8],n[8]=o,o=n[3],n[3]=n[12],n[12]=o,o=n[6],n[6]=n[9],n[9]=o,o=n[7],n[7]=n[13],n[13]=o,o=n[11],n[11]=n[14],n[14]=o,this};m.prototype.setInverseOf=function(n){var o,t,e,r,i;if(t=n.elements,e=this.elements,r=new Float32Array(16),r[0]=t[5]*t[10]*t[15]-t[5]*t[11]*t[14]-t[9]*t[6]*t[15]+t[9]*t[7]*t[14]+t[13]*t[6]*t[11]-t[13]*t[7]*t[10],r[4]=-t[4]*t[10]*t[15]+t[4]*t[11]*t[14]+t[8]*t[6]*t[15]-t[8]*t[7]*t[14]-t[12]*t[6]*t[11]+t[12]*t[7]*t[10],r[8]=t[4]*t[9]*t[15]-t[4]*t[11]*t[13]-t[8]*t[5]*t[15]+t[8]*t[7]*t[13]+t[12]*t[5]*t[11]-t[12]*t[7]*t[9],r[12]=-t[4]*t[9]*t[14]+t[4]*t[10]*t[13]+t[8]*t[5]*t[14]-t[8]*t[6]*t[13]-t[12]*t[5]*t[10]+t[12]*t[6]*t[9],r[1]=-t[1]*t[10]*t[15]+t[1]*t[11]*t[14]+t[9]*t[2]*t[15]-t[9]*t[3]*t[14]-t[13]*t[2]*t[11]+t[13]*t[3]*t[10],r[5]=t[0]*t[10]*t[15]-t[0]*t[11]*t[14]-t[8]*t[2]*t[15]+t[8]*t[3]*t[14]+t[12]*t[2]*t[11]-t[12]*t[3]*t[10],r[9]=-t[0]*t[9]*t[15]+t[0]*t[11]*t[13]+t[8]*t[1]*t[15]-t[8]*t[3]*t[13]-t[12]*t[1]*t[11]+t[12]*t[3]*t[9],r[13]=t[0]*t[9]*t[14]-t[0]*t[10]*t[13]-t[8]*t[1]*t[14]+t[8]*t[2]*t[13]+t[12]*t[1]*t[10]-t[12]*t[2]*t[9],r[2]=t[1]*t[6]*t[15]-t[1]*t[7]*t[14]-t[5]*t[2]*t[15]+t[5]*t[3]*t[14]+t[13]*t[2]*t[7]-t[13]*t[3]*t[6],r[6]=-t[0]*t[6]*t[15]+t[0]*t[7]*t[14]+t[4]*t[2]*t[15]-t[4]*t[3]*t[14]-t[12]*t[2]*t[7]+t[12]*t[3]*t[6],r[10]=t[0]*t[5]*t[15]-t[0]*t[7]*t[13]-t[4]*t[1]*t[15]+t[4]*t[3]*t[13]+t[12]*t[1]*t[7]-t[12]*t[3]*t[5],r[14]=-t[0]*t[5]*t[14]+t[0]*t[6]*t[13]+t[4]*t[1]*t[14]-t[4]*t[2]*t[13]-t[12]*t[1]*t[6]+t[12]*t[2]*t[5],r[3]=-t[1]*t[6]*t[11]+t[1]*t[7]*t[10]+t[5]*t[2]*t[11]-t[5]*t[3]*t[10]-t[9]*t[2]*t[7]+t[9]*t[3]*t[6],r[7]=t[0]*t[6]*t[11]-t[0]*t[7]*t[10]-t[4]*t[2]*t[11]+t[4]*t[3]*t[10]+t[8]*t[2]*t[7]-t[8]*t[3]*t[6],r[11]=-t[0]*t[5]*t[11]+t[0]*t[7]*t[9]+t[4]*t[1]*t[11]-t[4]*t[3]*t[9]-t[8]*t[1]*t[7]+t[8]*t[3]*t[5],r[15]=t[0]*t[5]*t[10]-t[0]*t[6]*t[9]-t[4]*t[1]*t[10]+t[4]*t[2]*t[9]+t[8]*t[1]*t[6]-t[8]*t[2]*t[5],i=t[0]*r[0]+t[1]*r[4]+t[2]*r[8]+t[3]*r[12],i===0)return this;for(i=1/i,o=0;o<16;o++)e[o]=r[o]*i;return this};m.prototype.invert=function(){return this.setInverseOf(this)};m.prototype.setOrtho=function(n,o,t,e,r,i){var a,_,u,s;if(n===o||t===e||r===i)throw"null frustum";return _=1/(o-n),u=1/(e-t),s=1/(i-r),a=this.elements,a[0]=2*_,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2*u,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=-2*s,a[11]=0,a[12]=-(o+n)*_,a[13]=-(e+t)*u,a[14]=-(i+r)*s,a[15]=1,this};m.prototype.ortho=function(n,o,t,e,r,i){return this.concat(new m().setOrtho(n,o,t,e,r,i))};m.prototype.setFrustum=function(n,o,t,e,r,i){var a,_,u,s;if(n===o||e===t||r===i)throw"null frustum";if(r<=0)throw"near <= 0";if(i<=0)throw"far <= 0";return _=1/(o-n),u=1/(e-t),s=1/(i-r),a=this.elements,a[0]=2*r*_,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2*r*u,a[6]=0,a[7]=0,a[8]=(o+n)*_,a[9]=(e+t)*u,a[10]=-(i+r)*s,a[11]=-1,a[12]=0,a[13]=0,a[14]=-2*r*i*s,a[15]=0,this};m.prototype.frustum=function(n,o,t,e,r,i){return this.concat(new m().setFrustum(n,o,t,e,r,i))};m.prototype.setPerspective=function(n,o,t,e){var r,i,a,_;if(t===e||o===0)throw"null frustum";if(t<=0)throw"near <= 0";if(e<=0)throw"far <= 0";if(n=Math.PI*n/180/2,a=Math.sin(n),a===0)throw"null frustum";return i=1/(e-t),_=Math.cos(n)/a,r=this.elements,r[0]=_/o,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=_,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=-(e+t)*i,r[11]=-1,r[12]=0,r[13]=0,r[14]=-2*t*e*i,r[15]=0,this};m.prototype.perspective=function(n,o,t,e){return this.concat(new m().setPerspective(n,o,t,e))};m.prototype.setScale=function(n,o,t){var e=this.elements;return e[0]=n,e[4]=0,e[8]=0,e[12]=0,e[1]=0,e[5]=o,e[9]=0,e[13]=0,e[2]=0,e[6]=0,e[10]=t,e[14]=0,e[3]=0,e[7]=0,e[11]=0,e[15]=1,this};m.prototype.scale=function(n,o,t){var e=this.elements;return e[0]*=n,e[4]*=o,e[8]*=t,e[1]*=n,e[5]*=o,e[9]*=t,e[2]*=n,e[6]*=o,e[10]*=t,e[3]*=n,e[7]*=o,e[11]*=t,this};m.prototype.setTranslate=function(n,o,t){var e=this.elements;return e[0]=1,e[4]=0,e[8]=0,e[12]=n,e[1]=0,e[5]=1,e[9]=0,e[13]=o,e[2]=0,e[6]=0,e[10]=1,e[14]=t,e[3]=0,e[7]=0,e[11]=0,e[15]=1,this};m.prototype.translate=function(n,o,t){var e=this.elements;return e[12]+=e[0]*n+e[4]*o+e[8]*t,e[13]+=e[1]*n+e[5]*o+e[9]*t,e[14]+=e[2]*n+e[6]*o+e[10]*t,e[15]+=e[3]*n+e[7]*o+e[11]*t,this};m.prototype.setRotate=function(n,o,t,e){var r,i,a,_,u,s,f,h,b,v,p,c;return n=Math.PI*n/180,r=this.elements,i=Math.sin(n),a=Math.cos(n),o!==0&&t===0&&e===0?(o<0&&(i=-i),r[0]=1,r[4]=0,r[8]=0,r[12]=0,r[1]=0,r[5]=a,r[9]=-i,r[13]=0,r[2]=0,r[6]=i,r[10]=a,r[14]=0,r[3]=0,r[7]=0,r[11]=0,r[15]=1):o===0&&t!==0&&e===0?(t<0&&(i=-i),r[0]=a,r[4]=0,r[8]=i,r[12]=0,r[1]=0,r[5]=1,r[9]=0,r[13]=0,r[2]=-i,r[6]=0,r[10]=a,r[14]=0,r[3]=0,r[7]=0,r[11]=0,r[15]=1):o===0&&t===0&&e!==0?(e<0&&(i=-i),r[0]=a,r[4]=-i,r[8]=0,r[12]=0,r[1]=i,r[5]=a,r[9]=0,r[13]=0,r[2]=0,r[6]=0,r[10]=1,r[14]=0,r[3]=0,r[7]=0,r[11]=0,r[15]=1):(_=Math.sqrt(o*o+t*t+e*e),_!==1&&(u=1/_,o*=u,t*=u,e*=u),s=1-a,f=o*t,h=t*e,b=e*o,v=o*i,p=t*i,c=e*i,r[0]=o*o*s+a,r[1]=f*s+c,r[2]=b*s-p,r[3]=0,r[4]=f*s-c,r[5]=t*t*s+a,r[6]=h*s+v,r[7]=0,r[8]=b*s+p,r[9]=h*s-v,r[10]=e*e*s+a,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1),this};m.prototype.rotate=function(n,o,t,e){return this.concat(new m().setRotate(n,o,t,e))};m.prototype.setLookAt=function(n,o,t,e,r,i,a,_,u){var s,f,h,b,v,p,c,g,R,C,E,L;return f=e-n,h=r-o,b=i-t,v=1/Math.sqrt(f*f+h*h+b*b),f*=v,h*=v,b*=v,p=h*u-b*_,c=b*a-f*u,g=f*_-h*a,R=1/Math.sqrt(p*p+c*c+g*g),p*=R,c*=R,g*=R,C=c*b-g*h,E=g*f-p*b,L=p*h-c*f,s=this.elements,s[0]=p,s[1]=C,s[2]=-f,s[3]=0,s[4]=c,s[5]=E,s[6]=-h,s[7]=0,s[8]=g,s[9]=L,s[10]=-b,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,this.translate(-n,-o,-t)};m.prototype.lookAt=function(n,o,t,e,r,i,a,_,u){return this.concat(new m().setLookAt(n,o,t,e,r,i,a,_,u))};m.prototype.dropShadow=function(n,o){var t=new m,e=t.elements,r=n[0]*o[0]+n[1]*o[1]+n[2]*o[2]+n[3]*o[3];return e[0]=r-o[0]*n[0],e[1]=-o[1]*n[0],e[2]=-o[2]*n[0],e[3]=-o[3]*n[0],e[4]=-o[0]*n[1],e[5]=r-o[1]*n[1],e[6]=-o[2]*n[1],e[7]=-o[3]*n[1],e[8]=-o[0]*n[2],e[9]=-o[1]*n[2],e[10]=r-o[2]*n[2],e[11]=-o[3]*n[2],e[12]=-o[0]*n[3],e[13]=-o[1]*n[3],e[14]=-o[2]*n[3],e[15]=r-o[3]*n[3],this.concat(t)};m.prototype.dropShadowDirectionally=function(n,o,t,e,r,i,a,_,u){var s=e*n+r*o+i*t;return this.dropShadow([n,o,t,-s],[a,_,u,0])};const Lt=function(n){var o=new Float32Array(3);n&&typeof n=="object"&&(o[0]=n[0],o[1]=n[1],o[2]=n[2]),this.elements=o};Lt.prototype.normalize=function(){var n=this.elements,o=n[0],t=n[1],e=n[2],r=Math.sqrt(o*o+t*t+e*e);if(r){if(r==1)return this}else return n[0]=0,n[1]=0,n[2]=0,this;return r=1/r,n[0]=o*r,n[1]=t*r,n[2]=e*r,this};var ro=function(n){var o=new Float32Array(4);n&&typeof n=="object"&&(o[0]=n[0],o[1]=n[1],o[2]=n[2],o[3]=n[3]),this.elements=o};const no={setup(){const n=P(null),o=P(null),t=P(null),e=P(null),r=P(null),i=P(null),a=P(null),_=P(null);let u=null;const s=P(null),f=P(null);let h=null;const b=P(null),v=P(null);let p=null;const c=P(null),g=P(null);let R=null;return qt(()=>{const E=new m;E.setLookAt(3,3,7,0,0,0,0,1,0);const L=new m;L.setRotate(0,0,0,1);const w=E.multiply(L),d=new m,M=window.getComputedStyle(n.value,null),A=parseInt(M.width)/parseInt(M.height);d.setPerspective(30,A,1,100);const x=new Float32Array([1,1,1,.4,.4,1,0,0,1,-1,1,1,.4,.4,1,0,0,1,-1,-1,1,.4,.4,1,0,0,1,1,-1,1,.4,.4,1,0,0,1,1,1,1,.4,1,.4,1,0,0,1,-1,1,.4,1,.4,1,0,0,1,-1,-1,.4,1,.4,1,0,0,1,1,-1,.4,1,.4,1,0,0,1,1,1,1,.4,.4,0,1,0,1,1,-1,1,.4,.4,0,1,0,-1,1,-1,1,.4,.4,0,1,0,-1,1,1,1,.4,.4,0,1,0,-1,1,1,1,1,.4,-1,0,0,-1,1,-1,1,1,.4,-1,0,0,-1,-1,-1,1,1,.4,-1,0,0,-1,-1,1,1,1,.4,-1,0,0,-1,-1,-1,1,1,1,0,-1,0,1,-1,-1,1,1,1,0,-1,0,1,-1,1,1,1,1,0,-1,0,-1,-1,1,1,1,1,0,-1,0,1,-1,-1,.4,1,1,0,0,-1,-1,-1,-1,.4,1,1,0,0,-1,-1,1,-1,.4,1,1,0,0,-1,1,1,-1,.4,1,1,0,0,-1]),D=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),B=[1,1,1],T=new Lt([.5,3,4]);T.normalize();const H=d.multiply(w).elements,st=new Zt(n.value,x,D,H,B,T.elements);o.value=st.img;const Ot=new Float32Array([1,1,1,.4,.4,1,-1,1,1,.4,.4,1,-1,-1,1,.4,.4,1,1,-1,1,.4,.4,1,1,1,1,.4,1,.4,1,-1,1,.4,1,.4,1,-1,-1,.4,1,.4,1,1,-1,.4,1,.4,1,1,1,1,.4,.4,1,1,-1,1,.4,.4,-1,1,-1,1,.4,.4,-1,1,1,1,.4,.4,-1,1,1,1,1,.4,-1,1,-1,1,1,.4,-1,-1,-1,1,1,.4,-1,-1,1,1,1,.4,-1,-1,-1,1,1,1,1,-1,-1,1,1,1,1,-1,1,1,1,1,-1,-1,1,1,1,1,1,-1,-1,.4,1,1,-1,-1,-1,.4,1,1,-1,1,-1,.4,1,1,1,1,-1,.4,1,1]),It=new Xt(t.value,Ot,D,H);e.value=It.img;const ot=[.2,.2,.2],Vt=new $t(r.value,x,D,H,B,T.elements,ot);i.value=Vt.img;let et=0;const lt=15;let dt=Date.now(),j=new m;j.setLookAt(3,3,7,0,0,0,0,1,0);const Y=new m;Y.setRotate(et,0,0,1);let ut=j.multiply(Y),W=new m;const Ct=window.getComputedStyle(a.value,null),bt=parseInt(Ct.width)/parseInt(Ct.height);W.setPerspective(30,bt,1,100);const z=new m;z.setInverseOf(Y),z.transpose();const mt=new to(a.value,x,D,W.multiply(ut).elements,B,T.elements,ot,z.elements);_.value=mt.img;const ht=()=>{const N=Date.now();et=(et+lt*(N-dt)/1e3)%360,dt=N,j=new m,j.setLookAt(3,3,7,0,0,0,0,1,0),Y.setRotate(et,0,0,1),ut=j.multiply(Y),W=new m,W.setPerspective(30,bt,1,100),z.setInverseOf(Y),z.transpose(),mt.redraw(W.multiply(ut).elements,z.elements),_.value=mt.img,u=requestAnimationFrame(ht)};u=requestAnimationFrame(ht);let rt=0,pt=Date.now(),J=new m;J.setLookAt(3,3,7,0,0,0,0,1,0);const y=new m;y.setRotate(rt,0,0,1);let ct=J.multiply(y),K=new m;const Rt=window.getComputedStyle(s.value,null),Et=parseInt(Rt.width)/parseInt(Rt.height);K.setPerspective(30,Et,1,100);const xt=[0,3,4],Mt=[2,2,2],G=new m;G.setInverseOf(y),G.transpose();const ft=new yt(s.value,x,D,K.multiply(ct).elements,Mt,xt,ot,G.elements,y.elements);f.value=ft.img;const wt=()=>{const N=Date.now();rt=(rt+lt*(N-pt)/1e3)%360,pt=N,J=new m,J.setLookAt(3,3,7,0,0,0,0,1,0),y.setRotate(rt,0,0,1),ct=J.multiply(y),K=new m,K.setPerspective(30,Et,1,100),G.setInverseOf(y),G.transpose(),ft.redraw(K.multiply(ct).elements,G.elements,y.elements),f.value=ft.img,h=requestAnimationFrame(wt)};h=requestAnimationFrame(wt);let nt=0,Dt=Date.now(),Q=new m;Q.setLookAt(3,3,7,0,0,0,0,1,0);const O=new m;O.setRotate(nt,0,0,1);let vt=Q.multiply(O),X=new m;const Pt=window.getComputedStyle(b.value,null),St=parseInt(Pt.width)/parseInt(Pt.height);X.setPerspective(30,St,1,100);const k=new m;k.setInverseOf(O),k.transpose();const _t=new yt(b.value,x,D,X.multiply(vt).elements,Mt,xt,ot,k.elements,O.elements,!0);v.value=_t.img;const Ft=()=>{const N=Date.now();nt=(nt+lt*(N-Dt)/1e3)%360,Dt=N,Q=new m,Q.setLookAt(3,3,7,0,0,0,0,1,0),O.setRotate(nt,0,0,1),vt=Q.multiply(O),X=new m,X.setPerspective(30,St,1,100),k.setInverseOf(O),k.transpose(),_t.redraw(X.multiply(vt).elements,k.elements,O.elements),v.value=_t.img,p=requestAnimationFrame(Ft)};p=requestAnimationFrame(Ft);let{positions:Z,indices:it}=eo(25);console.log("sphereData...",Z,it),Z=new Float32Array(Z),it=new Uint16Array(it);let at=0,Ut=Date.now(),$=new m;$.setLookAt(0,0,6,0,0,0,0,1,0);const I=new m;I.setRotate(at,0,1,0);let gt=$.multiply(I),tt=new m;const Nt=window.getComputedStyle(c.value,null),Tt=parseInt(Nt.width)/parseInt(Nt.height);tt.setPerspective(30,Tt,1,100);const q=new m;q.setInverseOf(I),q.transpose();const Ht=[.8,.8,.8],Yt=[.2,.2,.2],zt=[5,8,7],At=new oo(c.value,Z,it,Z,[1,1,1],tt.multiply(gt).elements,Ht,zt,Yt,q.elements,I.elements,!0,1);g.value=At.img;const Gt=25,Bt=()=>{const N=Date.now();at=(at+Gt*(N-Ut)/1e3)%360,Ut=N,$=new m,$.setLookAt(0,0,6,0,0,0,0,1,0),I.setRotate(at,0,1,0),gt=$.multiply(I),tt=new m,tt.setPerspective(30,Tt,1,100),q.setInverseOf(I),q.transpose(),At.redraw(tt.multiply(gt).elements,q.elements,I.elements,1),g.value=At.img,R=requestAnimationFrame(Bt)};R=requestAnimationFrame(Bt)}),jt(()=>{u&&cancelAnimationFrame(u),h&&cancelAnimationFrame(h),p&&cancelAnimationFrame(p),R&&cancelAnimationFrame(R)}),{canvasRef0:n,img0:o,canvasRef1:t,img1:e,canvasRef2:r,img2:i,canvasRef3:a,img3:_,canvasRef4:s,img4:f,canvasRef5:b,img5:v,canvasRef6:c,img6:g}}},io={class:"_article-content"},ao={ref:"canvasRef1",class:"webgl-canvas"},so=["src"],lo={ref:"canvasRef0",class:"webgl-canvas"},uo=["src"],mo={ref:"canvasRef2",class:"webgl-canvas"},co=["src"],fo={ref:"canvasRef3",class:"webgl-canvas"},vo=["src"],_o={ref:"canvasRef4",class:"webgl-canvas"},go=["src"],Ao={ref:"canvasRef5",class:"webgl-canvas"},Lo=["src"],Co={ref:"canvasRef6",class:"webgl-canvas"},bo=["src"];function ho(n,o,t,e,r,i){const a=Kt("MyArticle");return Qt(),Wt(a,{class:"readingNotes-webgl-07",title:"WebGL学习笔记之七：光照",date:"2021年05月25日"},{default:Jt(()=>[l("div",io,[o[0]||(o[0]=l("p",null,"讲述如何在三维场景中实现不同类型的光照以及其产生的效果。包括点光源光、平行光、环境光、漫反射以及环境反射等内容。",-1)),o[1]||(o[1]=l("p",null,"术语“着色”的真正含义就是，根据光照条件重建物体各表面明暗不一的效果的过程。",-1)),o[2]||(o[2]=l("h3",{class:"title"},"光源类型与反射光",-1)),o[3]||(o[3]=l("p",null,[l("strong",null,"平行光"),S("：光线是相互平行的，平行光具有方向。平行光可以看作是无限远处的光源发出的光，可以用一个方向和一个颜色来定义。")],-1)),o[4]||(o[4]=l("p",null,[l("strong",null,"点光源光"),S("：从一个点向周围的所有的方向发出的光。光线的方向将根据点光源的位置和被照射之处的位置计算出来。")],-1)),o[5]||(o[5]=l("p",null,[l("strong",null,"环境光"),S("：指那些经光源（点光源或者平行光源）发出后，被墙壁等物体多次反射，然后照射到物体表面上的光。环境光从各个角度照射物体，其强度都是一致的。环境光不需要指定位置和方向，只需要指定颜色即可。")],-1)),o[6]||(o[6]=l("p",null,[S("物体反射光取决于两个因素："),l("strong",null,"入射光和物体表面的类型"),S("，入射光包括光的方向和颜色，物体表面的信息包括表面的固有颜色和反射特性。")],-1)),o[7]||(o[7]=l("p",null,[S("物体表面反射光线的方式有两种："),l("strong",null,"漫反射（diffuse reflection）"),S("、"),l("strong",null,"环境反射（environemnt reflection）"),S("。")],-1)),o[8]||(o[8]=l("p",null,[S("在漫反射中，反射光的颜色取决于入射光的颜色、表面的基底色、入射光与表面形成的入射角。"),l("strong",null,"入射角是入射光与表面的法线形成的夹角，用θ表示。"),S("漫反射的光颜色通过下列公式计算得到：")],-1)),o[9]||(o[9]=l("pre",null,[l("code",null,"漫反射光颜色 = 入射光颜色 * 表面基底色 * cosθ")],-1)),o[10]||(o[10]=l("p",null,"在环境反射中，反射光的方向可以认为就是入射光的反方向。由于环境光照射物体的方式就是各方向均匀、强度相等的，所以反射光也是均匀的：",-1)),o[11]||(o[11]=l("pre",null,[l("code",null,"环境反射光颜色 = 入射光颜色 * 表面基底色")],-1)),o[12]||(o[12]=l("p",null,"当漫反射与环境反射同时存在时，物体最终的反射光颜色是两者之和：",-1)),o[13]||(o[13]=l("pre",null,[l("code",null,"表面的反射光颜色 = 漫反射光颜色 + 环境反射光颜色")],-1)),o[14]||(o[14]=l("h3",{class:"title"},"平行光下的漫反射",-1)),o[15]||(o[15]=l("p",null,"入射角的余弦值可以通过下列公式计算出来：",-1)),o[16]||(o[16]=l("pre",null,[l("code",null,"cosθ = 光线方向 * 法线方向")],-1)),o[17]||(o[17]=l("p",null,[l("strong",null,"光线方向其实是入射方向的反方向，即从入射点指向光源方向。"),S("光线方向矢量和法线方向矢量的长度必须为1。将一个矢量的长度调整为1，可以使用GLSL ES内置的归一化函数。从而漫反射光的颜色计算式子变为：")],-1)),o[18]||(o[18]=l("pre",null,[l("code",null,"漫反射光颜色 = 入射光颜色 * 表面基底色 * (光线方向 * 法线方向)")],-1)),o[19]||(o[19]=l("p",null,[l("strong",null,"法线，即物体表面的朝向，即垂直于表面的方向"),S("。物体表面的正面和背面取决于绘制表面时的顶点顺序。正表面的绘制顶点顺序是顺时针的。一个平面只有一个法向量。")],-1)),o[20]||(o[20]=l("p",null,"无光照情况下的效果：",-1)),F(l("canvas",ao,null,512),[[U,!e.img1]]),F(l("img",{src:e.img1,class:"webgl-canvas"},null,8,so),[[U,e.img1]]),o[21]||(o[21]=l("p",null,"添加以下平行光之后的效果：",-1)),o[22]||(o[22]=l("pre",null,[l("code",null,`const lightColor = [1.0, 1.0, 1.0]
const lightDirection = new Vector3([0.5, 3.0, 4.0])`)],-1)),F(l("canvas",lo,null,512),[[U,!e.img0]]),F(l("img",{src:e.img0,class:"webgl-canvas"},null,8,uo),[[U,e.img0]]),o[23]||(o[23]=l("pre",null,[l("code",null,`// 顶点着色器
const VSHADER_SOURCE = \`
    attribute vec4 a_Position;
    attribute vec4 a_Color;
    attribute vec4 a_Normal; // 法向量
    uniform mat4 u_Matrix;
    uniform vec3 u_LightColor; // 光线颜色
    uniform vec3 u_LightDirection; // 光线方向，归一化的世界坐标
    varying vec4 v_Color;
    void main() {
        gl_Position = u_Matrix * a_Position;
        vec3 normal = normalize(vec3(a_Normal));
        float nDotL = max(dot(u_LightDirection, normal), 0.0); // 如果入射角大于90度，则表明光线照射在背面
        vec3 diffuse = u_LightColor * vec3(a_Color) * nDotL;
        v_Color = vec4(diffuse, a_Color.a);
    }
\`
......
const eleSize = datas.BYTES_PER_ELEMENT

const aPosition = gl.getAttribLocation(gl.program, 'a_Position')
gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 9 * eleSize, 0)
gl.enableVertexAttribArray(aPosition)

const aColor = gl.getAttribLocation(gl.program, 'a_Color')
gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 9 * eleSize, 3 * eleSize)
gl.enableVertexAttribArray(aColor)

const aNormal = gl.getAttribLocation(gl.program, 'a_Normal')
gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 9 * eleSize, 6 * eleSize)
gl.enableVertexAttribArray(aNormal)

// 顶点数据定义如下：
const datas = new Float32Array([
    1.0, 1.0, 1.0, 0.4, 0.4, 1.0, 0.0, 0.0, 1.0, // front
    -1.0, 1.0, 1.0, 0.4, 0.4, 1.0, 0.0, 0.0, 1.0,
    -1.0, -1.0, 1.0, 0.4, 0.4, 1.0, 0.0, 0.0, 1.0,
    1.0, -1.0, 1.0, 0.4, 0.4, 1.0, 0.0, 0.0, 1.0,

    1.0, 1.0, 1.0, 0.4, 1.0, 0.4, 1.0, 0.0, 0.0, // right
    1.0, -1.0, 1.0, 0.4, 1.0, 0.4, 1.0, 0.0, 0.0,
    1.0, -1.0, -1.0, 0.4, 1.0, 0.4, 1.0, 0.0, 0.0,
    1.0, 1.0, -1.0, 0.4, 1.0, 0.4, 1.0, 0.0, 0.0,

    1.0, 1.0, 1.0, 1.0, 0.4, 0.4, 0.0, 1.0, 0.0, // up
    1.0, 1.0, -1.0, 1.0, 0.4, 0.4, 0.0, 1.0, 0.0,
    -1.0, 1.0, -1.0, 1.0, 0.4, 0.4, 0.0, 1.0, 0.0,
    -1.0, 1.0, 1.0, 1.0, 0.4, 0.4, 0.0, 1.0, 0.0,

    -1.0, 1.0, 1.0, 1.0, 1.0, 0.4, -1.0, 0.0, 0.0, // left
    -1.0, 1.0, -1.0, 1.0, 1.0, 0.4, -1.0, 0.0, 0.0,
    -1.0, -1.0, -1.0, 1.0, 1.0, 0.4, -1.0, 0.0, 0.0,
    -1.0, -1.0, 1.0, 1.0, 1.0, 0.4, -1.0, 0.0, 0.0,

    -1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 0.0, -1.0, 0.0, // down
    1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 0.0, -1.0, 0.0,
    1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 0.0, -1.0, 0.0,
    -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 0.0, -1.0, 0.0,

    1.0, -1.0, -1.0, 0.4, 1.0, 1.0, 0.0, 0.0, -1.0, // back
    -1.0, -1.0, -1.0, 0.4, 1.0, 1.0, 0.0, 0.0, -1.0,
    -1.0, 1.0, -1.0, 0.4, 1.0, 1.0, 0.0, 0.0, -1.0,
    1.0, 1.0, -1.0, 0.4, 1.0, 1.0, 0.0, 0.0, -1.0
])
const indices = new Uint8Array([
    0, 1, 2, 0, 2, 3,
    4, 5, 6, 4, 6, 7,
    8, 9, 10, 8, 10, 11,
    12, 13, 14, 12, 14, 15,
    16, 17, 18, 16, 18, 19,
    20, 21, 22, 20, 22, 23
])`)],-1)),o[24]||(o[24]=l("h3",{class:"title"},"环境光下的漫反射",-1)),o[25]||(o[25]=l("p",null,"上述立方体的右侧面几乎是全黑的，原因是缺少环境光。增加环境光之后，效果更逼真：",-1)),o[26]||(o[26]=l("pre",null,[l("code",null,"const ambientLight = [0.2, 0.2, 0.2]")],-1)),F(l("canvas",mo,null,512),[[U,!e.img2]]),F(l("img",{src:e.img2,class:"webgl-canvas"},null,8,co),[[U,e.img2]]),o[27]||(o[27]=l("pre",null,[l("code",null,`// 顶点着色器
const VSHADER_SOURCE = \`
    attribute vec4 a_Position;
    attribute vec4 a_Color;
    attribute vec4 a_Normal;
    uniform mat4 u_Matrix;
    uniform vec3 u_LightColor;
    uniform vec3 u_LightDirection;
    uniform vec3 u_AmbientLight;
    varying vec4 v_Color;
    void main() {
        gl_Position = u_Matrix * a_Position;
        vec3 normal = normalize(vec3(a_Normal));
        float nDotL = max(dot(u_LightDirection, normal), 0.0);
        vec3 diffuse = u_LightColor * vec3(a_Color) * nDotL;
        vec3 ambient = u_AmbientLight * a_Color.rgb; // 计算环境光的反射
        v_Color = vec4(diffuse + ambient, a_Color.a);
    }
\`
......
// 设置环境光颜色
const uAmbientLightColor = gl.getUniformLocation(gl.program, 'u_AmbientLight')
gl.uniform3f(uAmbientLightColor, ...ambientLight)`)],-1)),o[28]||(o[28]=l("h3",{class:"title"},"运动物体的光照效果",-1)),o[29]||(o[29]=l("p",null,[S("可以通过将变换之前的法向量乘以模型矩阵的"),l("strong",null,"逆转置矩阵"),S("，即逆矩阵的转置。")],-1)),o[30]||(o[30]=l("p",null,"如果矩阵M的逆矩阵是R，那么R*M或者M*R的结果为单位矩阵。转置则是将矩阵的行列进行调换。Matrix4对象有以下方法求逆转置矩阵：",-1)),o[31]||(o[31]=l("pre",null,[l("code",null,`Matrix4.setInverseOf(m) // 使自身成为矩阵m的逆矩阵
Matrix4.transpose() // 对自身进行转置操作，并将自身设置为转置之后的结果`)],-1)),F(l("canvas",fo,null,512),[[U,!e.img3]]),F(l("img",{src:e.img3,class:"webgl-canvas"},null,8,vo),[[U,e.img3]]),o[32]||(o[32]=l("pre",null,[l("code",null,`// 顶点着色器
const VSHADER_SOURCE = \`
    attribute vec4 a_Position;
    attribute vec4 a_Color;
    attribute vec4 a_Normal;
    uniform mat4 u_Matrix;
    uniform mat4 u_NormalMatrix; // 逆转置矩阵
    uniform vec3 u_LightColor;
    uniform vec3 u_LightDirection;
    uniform vec3 u_AmbientLight;
    varying vec4 v_Color;
    void main() {
        gl_Position = u_Matrix * a_Position;
        vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal)); // 计算变换之后的法向量并归一化
        float nDotL = max(dot(u_LightDirection, normal), 0.0);
        vec3 diffuse = u_LightColor * vec3(a_Color) * nDotL;
        vec3 ambient = u_AmbientLight * a_Color.rgb;
        v_Color = vec4(diffuse + ambient, a_Color.a);
    }
\``)],-1)),o[33]||(o[33]=l("h3",{class:"title"},"点光源",-1)),o[34]||(o[34]=l("p",null,"点光源发出的光，在三维空间的不同位置上其方向也不同，在对点光源下的物体进行着色时，需要在每个入射点计算点光源的光在该处的方向。着色器需要知道点光源所在的位置，然后根据每个顶点的位置逐一计算。",-1)),F(l("canvas",_o,null,512),[[U,!e.img4]]),F(l("img",{src:e.img4,class:"webgl-canvas"},null,8,go),[[U,e.img4]]),o[35]||(o[35]=l("p",null,"设置点光源的颜色和位置：",-1)),o[36]||(o[36]=l("pre",null,[l("code",null,`const lightPosition = [0.0, 3.0, 4.0]
const lightColor = [2.0, 2.0, 2.0] // 更强烈的白光`)],-1)),o[37]||(o[37]=l("pre",null,[l("code",null,`// 顶点着色器
const VSHADER_SOURCE = \`
    attribute vec4 a_Position;
    attribute vec4 a_Color;
    attribute vec4 a_Normal;
    uniform mat4 u_Matrix;
    uniform mat4 u_ModelMatrix; // 模型矩阵
    uniform mat4 u_NormalMatrix;
    uniform vec3 u_LightColor; // 光的颜色
    uniform vec3 u_LightPosition; // 光源位置
    uniform vec3 u_AmbientLight;
    varying vec4 v_Color;
    void main() {
        gl_Position = u_Matrix * a_Position;
        vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
        vec4 vertexPosition = u_ModelMatrix * a_Position; // 计算顶点的世界坐标
        vec3 lightDirection = normalize(u_LightPosition - vec3(vertexPosition)); // 计算光线方向并归一化
        float nDotL = max(dot(lightDirection, normal), 0.0);
        vec3 diffuse = u_LightColor * vec3(a_Color) * nDotL;
        vec3 ambient = u_AmbientLight * a_Color.rgb;
        v_Color = vec4(diffuse + ambient, a_Color.a);
    }
\``)],-1)),o[38]||(o[38]=l("p",null,"逐片元渲染模式，可以使效果更加逼真：",-1)),F(l("canvas",Ao,null,512),[[U,!e.img5]]),F(l("img",{src:e.img5,class:"webgl-canvas"},null,8,Lo),[[U,e.img5]]),o[39]||(o[39]=l("pre",null,[l("code",null,`const VSHADER_SOURCE = \`
    attribute vec4 a_Position;
    attribute vec4 a_Color;
    attribute vec4 a_Normal;
    uniform mat4 u_Matrix;
    uniform mat4 u_ModelMatrix;
    uniform mat4 u_NormalMatrix;
    varying vec4 v_Color;
    varying vec3 v_Normal;
    varying vec3 v_Position;
    void main() {
        gl_Position = u_Matrix * a_Position;
        v_Position = vec3(u_ModelMatrix * a_Position);
        v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));
        v_Color = a_Color;
    }
\`
const FSHADER_SOURCE = \`
    precision mediump float;
    uniform vec3 u_LightColor;
    uniform vec3 u_LightPosition;
    uniform vec3 u_AmbientLight;
    varying vec3 v_Normal;
    varying vec3 v_Position;
    varying vec4 v_Color;
    void main() {
        vec3 normal = normalize(v_Normal); // 对法线进行归一化
        vec3 lightDirection = normalize(u_LightPosition - v_Position);
        float nDotL = max(dot(lightDirection, normal),0.0);
        vec3 diffuse = u_LightColor * v_Color.rgb * nDotL;
        vec3 ambient = u_AmbientLight * v_Color.rgb;
        gl_FragColor = vec4(diffuse + ambient, v_Color.a);
    }
\``)],-1)),o[40]||(o[40]=l("p",null,"旋转的三维球体：",-1)),F(l("canvas",Co,null,512),[[U,!e.img6]]),F(l("img",{src:e.img6,class:"webgl-canvas"},null,8,bo),[[U,e.img6]])])]),_:1})}const xo=kt(no,[["render",ho]]);export{xo as default};
