import{_ as d,r as p,c as a,e as s,F as _,i as m,o as n,j as r,u as g}from"./index-CrCJ6E4y.js";const f=[{title:"当前地址定位",time:"2013/09/30",path:"/tools/currLocation"},{title:"在线视频播放器",time:"2024/11/21",path:"/tools/videoPlayer"},{title:"地球仪-ArcGis地图",time:"2024/12/15",path:"/tools/globe"}],h={setup(){const l=g();return{datas:p(f.sort((t,i)=>t.time>i.time?-1:1)),toPage:t=>{l.push({path:t})}}}},k={class:"_page tools-page"},v={class:"note-list"},P={class:"item-list"},x=["onClick"];function y(l,o,c,t,i,B){return n(),a("div",k,[s("div",v,[o[1]||(o[1]=s("strong",null,"工具集合",-1)),s("ul",P,[(n(!0),a(_,null,m(t.datas,(e,u)=>(n(),a("li",{key:u,onClick:$=>t.toPage(e.path)},[s("div",null,r(e.title),1),o[0]||(o[0]=s("i",null,null,-1)),s("span",null,r(e.time),1)],8,x))),128))])])])}const D=d(h,[["render",y]]);export{D as default};
