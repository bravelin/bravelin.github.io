webpackJsonp([0],{"3ErM":function(t,e,i){"use strict";var n=i("vbKY"),r={data:function(){return{timer:null,timeCount:0}},props:{catalog:{type:Array,default:function(){return[]}}},methods:{slideTo:function(t){var e=t.getBoundingClientRect().top;this.timer&&clearTimeout(this.timer),this.timeCount=0,this.scrollTo(e,t,e>0)},scrollTo:function(t,e,i){var n=this,r=i?Math.ceil(t/5):Math.floor(t/5);window.scrollBy(0,r),t=e.getBoundingClientRect().top,(i&&t>0||!i&&t<0)&&(n.timer=setTimeout(function(){n.timeCount++,n.timeCount>40?clearTimeout(n.timer):n.scrollTo(t,e,i)},10))}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.catalog.length>0?i("div",{staticClass:"article-catalog"},[i("div",[t._v("文章目录")]),t._v(" "),i("ul",t._l(t.catalog,function(e,n){return i("li",{key:n,class:{active:e.active},on:{click:function(i){t.slideTo(e.el)}}},[i("a",[t._v(t._s(n+1)+". "+t._s(e.text))])])}))]):t._e()},staticRenderFns:[]},l={data:function(){return{catalog:[],showPreview:!1,previewList:[],previewIndex:0}},components:{Catalog:i("rAbc")(r,o,!1,null,null,null).exports},created:function(){window.addEventListener("scroll",this.doHandlerScroll)},mounted:function(){var t=this;t.$nextTick(function(){var e=document.querySelectorAll("code");e.length>0&&e.forEach(function(t){hljs.highlightBlock(t)});var i=document.querySelectorAll("h3.title");if(i.length>0){var r=[],o=Math.round(1e6*Math.random()),l="";t.catalog=i.forEach(function(t,e){l="section"+o+"-"+e,t.setAttribute("id",l),r.push({text:t.innerHTML,id:l,el:t,active:!1})}),t.catalog=r,r.length>0&&(n.a.hasCatalog=!0)}var c=document.querySelectorAll(".content figure>img");c.length>0&&t.getImageSize(0,c)})},methods:{getImageSize:function(t,e){var i=this,n=new Image,r=e[t];n.onload=function(){i.previewList.push({src:r.src,w:this.width,h:this.height}),++t<e.length?i.getImageSize(t,e):i.$el.addEventListener("click",i.doPreview)},n.src=r.src},doPreview:function(t){if(/img/i.test(t.target.tagName)&&!this.showPreview&&!t.target.classList.contains("pswp__img")){this.previewIndex=0;for(var e=0;e<this.previewList.length;e++)if(this.previewList[e].src==t.target.src){this.previewIndex=e;break}this.showPreview=!0}},doHandlerScroll:function(){for(var t=this.catalog.length-1,e=void 0;t>=0;t--)if(this.catalog[t].el.getBoundingClientRect().top<10){e=t;break}this.catalog=this.catalog.map(function(t,i){return t.active=i==e,t})}},beforeDestroy:function(){window.removeEventListener("scroll",this.doHandlerScroll),this.previewList.length>0&&this.$el.removeEventListener("click",this.doPreview)}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},a=i("rAbc")(l,c,!1,null,null,null);e.a=a.exports}});