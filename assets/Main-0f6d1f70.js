import{_ as i,j as u,u as p,k as m,o as _,d as s,b as f,c as g,f as r,n as y}from"./index-4afbb925.js";import{u as C}from"./article-1b647556.js";function x(o){const e=document.createElement("textarea");return document.body.appendChild(e),e.value=o,e.select(),console.log(o),document.execCommand("copy")?(document.execCommand("copy"),document.body.removeChild(e),!0):(document.body.removeChild(e),!1)}const S={setup(){const o=u(),e=C(),n=p();window.copyCode==null&&(window.copyCode=c=>{const a=c.target.parentNode.querySelector("code").innerText;a&&x(a)&&o.info("代码已复制到粘贴板！")});const t=m(()=>e.catalogDatas);return _(()=>{n.isShow=!1}),{catalogDatas:t}}};function w(o,e,n,t,c,a){const d=s("Catalog"),l=s("RouterView");return f(),g("div",{class:y(["_page article-page",{catalog:t.catalogDatas.length>0}])},[r(d,{datas:t.catalogDatas},null,8,["datas"]),r(l)],2)}const D=i(S,[["render",w]]);export{D as default};
