webpackJsonp([38],{"4koi":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t("vbKY"),n=t("771+"),r={filters:{TimeFilter:t.n(n).a},data:function(){return{list:s.a.sentenceList,previewList:[],previewIndex:0,showPreview:!1}},methods:{doPreview:function(e,i){this.previewList=e,this.previewIndex=i,this.showPreview=!0}}},l={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"page list-page"},[t("Banner"),e._v(" "),t("ul",{staticClass:"article-list"},e._l(e.list,function(i){return t("li",{key:i.id},[t("h4",[e._v(e._s(e._f("TimeFilter")(i.updatedAt)))]),e._v(" "),t("h3",[e._v(e._s(i.content))]),e._v(" "),t("ul",{staticClass:"pics"},e._l(i.imgs,function(s,n){return t("li",{on:{click:function(t){e.doPreview(i.imgs,n)}}},[t("img",{attrs:{src:s.src}})])})),e._v(" "),t("div",[e._v("出自："+e._s(i.origin||"lin"))])])})),e._v(" "),t("Preview",{attrs:{"is-show":e.showPreview,list:e.previewList,index:e.previewIndex},on:{"update:isShow":function(i){e.showPreview=i}}})],1)},staticRenderFns:[]},v=t("rAbc")(r,l,!1,null,null,null);i.default=v.exports}});