webpackJsonp([4],{2109:function(t,e,a){(t.exports=a("D/Sv")(!1)).push([t.i,"",""])},"4koi":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("y0YP"),c=a("Vo7i"),l=a("UGLA"),r={name:"sentences",data:function(){return{articleId:"",articleTitle:"",articleContent:"",imgUrl:"",desc:""}},created:function(){var t=this;t.articleId=t.$store.state.currRouter.query.id||"",Object(c.a)({url:"https://d.apicloud.com/mcm/api/news/{newsId}",params:{newsId:t.articleId}}).then(function(e){t.articleTitle=e.title,t.articleContent=e.content,t.imgUrl=e.imgUrl,t.desc=e.desc,Object(i.a)(!1)})},methods:{doSave:function(){var t=this,e=t.articleTitle.trim(),a=t.imgUrl.trim(),r=t.desc.trim(),n=t.$refs.ue.getUEContent();if(!e)return Object(l.a)("请输入文章标题！"),void t.$refs.title.focus();t.articleId?Object(c.a)({url:"https://d.apicloud.com/mcm/api/news/{newsId}",method:"put",params:{newsId:t.articleId},data:{$set:{content:n,title:e,imgUrl:a,desc:r}}}).then(function(){Object(l.a)("保存成功！"),Object(i.a)(!1),setTimeout(function(){t.$router.back()},1e3)}):Object(c.a)({url:"https://d.apicloud.com/mcm/api/news",method:"post",data:{title:e,content:n,author:t.$store.state.userName,status:"draft",viewCount:0,imgUrl:a,desc:r}}).then(function(){Object(l.a)("保存成功！"),Object(i.a)(!1),setTimeout(function(){t.$router.back()},1e3)})},doBack:function(){this.$router.back()}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-page",attrs:{id:"sentences-page"}},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-title"},[a("h3",[t._v("编辑文章")]),a("button",{staticClass:"back-btn",on:{click:t.doBack}},[t._v("返回")]),a("button",{on:{click:t.doSave}},[t._v("保存")])]),t._v(" "),a("div",{staticClass:"panel-content"},[a("div",{staticClass:"article-title"},[a("label",[t._v("文章标题：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.articleTitle,expression:"articleTitle"}],ref:"title",attrs:{placeholder:"请输入文章标题",maxlength:"100",type:"text"},domProps:{value:t.articleTitle},on:{input:function(e){e.target.composing||(t.articleTitle=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"article-title"},[a("label",[t._v("图片链接：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.imgUrl,expression:"imgUrl"}],ref:"imgUrl",attrs:{placeholder:"请输入图片链接",maxlength:"1000",type:"text"},domProps:{value:t.imgUrl},on:{input:function(e){e.target.composing||(t.imgUrl=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"article-title"},[a("label",[t._v("文章描述：")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],ref:"desc",attrs:{placeholder:"请输入文章的描述",maxlength:"2000",type:"text"},domProps:{value:t.desc},on:{input:function(e){e.target.composing||(t.desc=e.target.value)}}})])])])])},staticRenderFns:[]};var s=a("U5Ua")(r,n,!1,function(t){a("Gt90")},null,null);e.default=s.exports},Gt90:function(t,e,a){var i=a("2109");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("P+mm")("63b0edfa",i,!0,{})}});