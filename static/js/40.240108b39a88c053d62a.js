webpackJsonp([40],{P0W8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("0G0L"),a=n("vbKY"),i={components:{banner:r.a},data:function(){return{list:a.a.articleList}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page home-page"},[n("banner"),e._v(" "),n("ul",{staticClass:"article-list"},e._l(e.list,function(t){return n("router-link",{key:t.id,attrs:{tag:"li",to:{name:t.routerName}}},[n("h4",[e._v(e._s(t.date))]),e._v(" "),n("h3",[e._v(e._s(t.title))]),e._v(" "),t.description?n("div",[e._v(e._s(t.description))]):e._e()])}))],1)},staticRenderFns:[]},l=n("rAbc")(i,s,!1,null,null,null);t.default=l.exports}});