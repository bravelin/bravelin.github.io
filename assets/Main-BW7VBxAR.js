import{_ as u,r as d,c as a,e as s,F as _,i as m,o as i,j as r,u as g}from"./index-DAung_sQ.js";const h=[{title:"当前地址定位",time:"2013/09/30",path:"/tools/currLocation"},{title:"在线视频播放器",time:"2024/11/21",path:"/tools/videoPlayer"},{title:"地球仪-ArcGis地图",time:"2024/12/15",path:"/tools/globe"},{title:"地图上范围圈画和导出",time:"2025/01/30",path:"/tools/mapDrawAndPrint"},{title:"Ai大模型聊天对话",time:"2025/02/25",path:"/tools/aiChat"}],f={setup(){const l=g();return{datas:d(h.sort((t,n)=>t.time>n.time?-1:1)),toPage:t=>{l.push({path:t})}}}},k={class:"_page tools-page"},v={class:"note-list"},P={class:"item-list"},x=["onClick"];function y(l,o,c,t,n,A){return i(),a("div",k,[s("div",v,[o[1]||(o[1]=s("strong",null,"工具集合",-1)),s("ul",P,[(i(!0),a(_,null,m(t.datas,(e,p)=>(i(),a("li",{key:p,onClick:B=>t.toPage(e.path)},[s("div",null,r(e.title),1),o[0]||(o[0]=s("i",null,null,-1)),s("span",null,r(e.time),1)],8,x))),128))])])])}const D=u(f,[["render",y]]);export{D as default};
