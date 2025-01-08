import{i as A}from"./webgl-BYb_5Ot-.js";class l{constructor(o,e,i,a){const _=window.getComputedStyle(o,null);o.width=parseInt(_.width),o.height=parseInt(_.height);const r=o.getContext("webgl2");if(r.enable(r.DEPTH_TEST),!A(r,`
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
        `)){console.log("init shader error");return}const n=(t=>{const f=t.createBuffer(),E=t.createBuffer();if(!f||!E)return-1;t.bindBuffer(t.ARRAY_BUFFER,f),t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW);const s=e.BYTES_PER_ELEMENT,c=t.getAttribLocation(t.program,"a_Position");t.vertexAttribPointer(c,3,t.FLOAT,!1,6*s,0),t.enableVertexAttribArray(c);const R=t.getAttribLocation(t.program,"a_Color");return t.vertexAttribPointer(R,3,t.FLOAT,!1,6*s,3*s),t.enableVertexAttribArray(R),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,E),t.bufferData(t.ELEMENT_ARRAY_BUFFER,i,t.STATIC_DRAW),i.length})(r);if(n<0){console.log("initVertexBuffers failed");return}const u=r.getUniformLocation(r.program,"u_Matrix");r.uniformMatrix4fv(u,!1,a),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.drawElements(r.TRIANGLES,n,r.UNSIGNED_BYTE,0),this.gl=r,this.el=o,this.vertexCount=n,this.img=o.toDataURL("image/png")}redraw(o){const e=this.gl,i=this.el,a=e.getUniformLocation(e.program,"u_Matrix");e.uniformMatrix4fv(a,!1,o),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.drawElements(e.TRIANGLES,this.vertexCount,e.UNSIGNED_BYTE,0),this.img=i.toDataURL("image/png")}}export{l as D};
