webpackJsonp([9],{GwGv:function(t,e,i){"use strict";e.a={author:"zhangjialin",list:[{id:"0",type:"读书笔记",category:"css",title:"《CSS揭秘》读书笔记系列",description:"从第一章到第八章",date:"2016/10/30"},{id:"1",type:"应用示例",category:"canvas",title:"Canvas应用",description:"",date:"2016/11/05"},{id:"2",type:"学习笔记",category:"es6",title:"ES6标准学习",description:"ES6标准入门学习笔记",date:"2017/03/08"},{id:"3",type:"学习笔记",category:"canvas",title:"canvas学习",description:"html5 canvas核心技术一书学习笔记",date:"2016/06/08"},{id:"4",type:"学习笔记",category:"react",title:"react学习",description:"深入React技术栈一书学习笔记",date:"2017/10/29"}]}},UTHw:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("GwGv"),s={data:function(){return{list:[]}},created:function(){var t=a.a.list;t.sort(function(t,e){return t.date<e.date?1:-1}),this.list=t}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("ul",{staticClass:"article-list"},t._l(t.list,function(e){return i("router-link",{key:e.id,attrs:{tag:"li",to:{name:"topicArticles",query:{id:e.id}}}},[i("h4",[t._v(t._s(e.date))]),t._v(" "),i("h3",[t._v(t._s(e.title))]),t._v(" "),i("div",[t._v(t._s(e.description))])])}))])},staticRenderFns:[]},r=i("U5Ua")(s,n,!1,null,null,null);e.default=r.exports}});