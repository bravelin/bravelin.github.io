webpackJsonp([41],{elja:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("wKTW"),i=o("vbKY"),s={data:function(){return{allComments:!0,delCommentId:""}},created:function(){n.a.$on("pop-confirm-del-modal",this.doShowConfirmModal)},beforeDestroy:function(){n.a.$off("pop-confirm-del-modal",this.doShowConfirmModal)},methods:{doDel:function(){var t=this,e=+new Date,o=i.a,s=o.sha(o.appKey+e)+"."+e;t.$http.delete("https://d.apicloud.com/mcm/api/comments/"+t.delCommentId,{headers:{"X-APICloud-AppKey":s}}).then(function(e){200==e.status&&(n.a.$emit("refresh-comments"),o.tipShow("删除成功！"),t.doCloseConfirmModal())})},doShowConfirmModal:function(t){this.delCommentId=t,console.log("commentId："+t);var e=this.$refs.confirmModal;e.style.display="block",setTimeout(function(){e.classList.add("active")},200)},doCloseConfirmModal:function(){var t=this.$refs.confirmModal;t.classList.remove("active"),setTimeout(function(){t.style.display="none"},600)}}},a={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("comments",{attrs:{"query-article":!t.allComments}}),t._v(" "),o("div",{ref:"confirmModal",staticClass:"modal confirm-del-comment"},[o("div",[o("h3",[t._v("确认"),o("span",{on:{click:function(e){t.doCloseConfirmModal()}}},[t._v("X")])]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"footer"},[o("a",{staticClass:"ok",on:{click:function(e){t.doDel()}}},[t._v("确定")]),t._v(" "),o("a",{staticClass:"cancel",on:{click:function(e){t.doCloseConfirmModal()}}},[t._v("取消")])]),t._v(" "),t._m(1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",[this._v("确定要删除这条评论？")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-mask"},[e("div",[e("i"),e("i"),e("i"),e("i"),e("i")])])}]},l=o("U5Ua")(s,a,!1,null,null,null);e.default=l.exports}});