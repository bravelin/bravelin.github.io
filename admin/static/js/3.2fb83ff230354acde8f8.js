webpackJsonp([3],{"0HiE":function(e,t,i){var n=i("L904");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("vK0y")("2bd21cb6",n,!0,{})},"1uts":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("i/rw"),a=i.n(n),l=i("y0YP"),o=i("UNbi"),s=i("Vo7i"),r=i("0ecl"),d=i("aIbl"),p=i("2iX2"),c=i("UGLA"),f=i("GlOO"),u=i("bzuE"),h={name:"home",components:{SearchInput:r.a,Pagination:d.a,Modal:p.a},filters:{DateTimeFilter:o.a,FileSizeFilter:function(e){if(e<1024)return e+"B";var t=e/1024;return t<1024?t.toFixed(1)+"K":(t/1024).toFixed(2)+"M"}},data:function(){return{dataList:[],searchKey:"",page:1,pageSize:20,totalPage:0,isShowDelConfirmModal:!1,delTitle:"",delId:"",wp:null,isShowUploaderModal:!1,fileList:[],uploadCount:0,uploadTip:""}},created:function(){var e=this.$store.state.currRouter.query;this.page=e.page||1,this.searchKey=e.key?decodeURIComponent(e.key):"",this.queryDataList(),Object(l.a)(!1)},mounted:function(){var e=this,t=u.a.appId+"UZ"+u.a.appKey+"UZ";e.$nextTick(function(){e.wp=WebUploader.create({server:"https://d.apicloud.com/mcm/api/file",auto:!1,pick:"#file-picker",resize:!1,fileSingleSizeLimit:20971520,fileSizeLimit:52428800,fileNumLimit:50}),e.wp.on("fileQueued",function(t){e.fileList.push({id:t.id,filename:t.name,size:t.size,progress:0}),e.wp.option("formData",{filename:t.name,type:t.type,author:e.$store.state.userName})}),e.wp.on("uploadSuccess",function(t,i){i&&i.id?e.uploadTip=t.name+"上传成功！":i&&0==i.status?e.uploadTip=t.name+"上传失败！":e.uploadTip=t.name+"上传失败"}),e.wp.on("uploadError",function(t,i){e.uploadTip=t.name+"上传失败"}),e.wp.on("uploadComplete",function(t){e.wp.removeFile(t),e.uploadCount++,e.fileList.length==e.uploadCount&&(setTimeout(function(){e.isShowUploaderModal=!1},1500),e.queryDataList(1))}),e.wp.on("uploadBeforeSend",function(e,i,n){var a=+new Date,l=Object(f.a)(t+a)+"."+a;n["X-APICloud-AppKey"]=l,n["X-APICloud-AppId"]=u.a.appId}),e.wp.on("uploadProgress",function(t,i){var n=e.findFile(t.id);if(n>=0){var a=e.fileList[n];a.progress=(100*i).toFixed(0),e.fileList.splice(n,1,a)}})})},methods:{findFile:function(e){for(var t=0;t<this.fileList.length;t++)if(this.fileList[t].id==e)return t;return-1},doAdd:function(){this.isShowUploaderModal=!0,this.fileList=[],this.uploadCount=0},doDel:function(e){this.delTitle=e.name,this.delId=e.id,this.isShowDelConfirmModal=!0},doCommitDel:function(){var e=this;Object(l.a)(!0),Object(s.a)({url:"https://d.apicloud.com/mcm/api/file/{fileId}",method:"DELETE",params:{fileId:e.delId}}).then(function(){Object(c.a)("删除成功！"),Object(l.a)(!1),e.queryDataList(),e.isShowDelConfirmModal=!1})},queryDataList:function(e){var t=this;e=e||t.page;var i=t.searchKey.trim(),n={limit:t.pageSize,where:{},skip:(e-1)*t.pageSize,order:"createdAt DESC"},o={fields:{id:!0},limit:1e4,where:{}};i&&(n.where.name={like:i},o.where.name={like:i}),t.$router.replace({name:"fileCenter",query:{key:encodeURIComponent(t.searchKey),page:e}}),Object(s.a)({url:"https://d.apicloud.com/mcm/api/file",params:{filter:a()(o)}}).then(function(e){t.totalPage=Math.ceil(e.length/t.pageSize)}),Object(s.a)({url:"https://d.apicloud.com/mcm/api/file",params:{filter:a()(n)}}).then(function(i){t.dataList=i||[],t.page=e,Object(l.a)(!1)})},doSwitchPage:function(e){this.queryDataList(e)},doCommitUploader:function(){this.wp.upload()}}},m={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-page",class:{"pagination-page":e.totalPage>1},attrs:{id:"file-center-page"}},[i("div",{staticClass:"panel"},[i("div",{staticClass:"panel-title"},[i("h3",[e._v("文件列表")]),i("button",{staticClass:"add-btn",on:{click:e.doAdd}},[e._v("添加")])]),e._v(" "),i("SearchInput",{attrs:{placeholderText:"输入关键字","search-key":e.searchKey},on:{submit:function(t){e.queryDataList()},"update:searchKey":function(t){e.searchKey=t}}}),e._v(" "),i("div",{staticClass:"panel-content"},[i("table",{staticClass:"data-table"},[e._m(0),e._v(" "),e.dataList.length>0?i("tbody",e._l(e.dataList,function(t,n){return i("tr",{key:t.id},[i("td",[e._v(e._s(n+1+(e.page-1)*e.pageSize))]),e._v(" "),i("td",[e._v(e._s(t.name))]),e._v(" "),i("td",[i("img",{attrs:{src:t.url,alt:""}})]),e._v(" "),i("td",{staticClass:"link-content"},[i("a",{attrs:{href:t.url,target:"_blank"}},[e._v(e._s(t.url))])]),e._v(" "),i("td",[e._v(e._s(t.author))]),e._v(" "),i("td",[e._v(e._s(e._f("DateTimeFilter")(t.createdAt)))]),e._v(" "),i("td",[e._v(e._s(t.type))]),e._v(" "),i("td",[e._v(e._s(e._f("FileSizeFilter")(t.size)))]),e._v(" "),i("td",{staticClass:"ope-btns"},[i("a",{staticClass:"tool-btn-delete",on:{click:function(i){e.doDel(t)}}},[e._v("删除")])])])})):e._e(),e._v(" "),0==e.dataList.length?i("tbody",{staticClass:"data-table-null-data"},[e._m(1)]):e._e()])])],1),e._v(" "),i("Pagination",{attrs:{curr:e.page,total:e.totalPage},on:{switch:e.doSwitchPage}}),e._v(" "),i("Modal",{attrs:{title:"删除确认","is-show":e.isShowDelConfirmModal,"is-show-close-btn":!1},on:{"update:isShow":function(t){e.isShowDelConfirmModal=t},commit:e.doCommitDel}},[i("div",{staticClass:"modal-confirm"},[e._v("确认要删除名称为“"),i("strong",[e._v(e._s(e.delTitle))]),e._v("”的文件？")])]),e._v(" "),i("Modal",{attrs:{title:"文件上传",tip:e.uploadTip,"is-show":e.isShowUploaderModal,"commit-btn":{label:"上传",isShow:!0},"cancel-btn":{label:"关闭",isShow:!0}},on:{"update:tip":function(t){e.uploadTip=t},"update:isShow":function(t){e.isShowUploaderModal=t},commit:e.doCommitUploader}},[i("div",[i("ul",{directives:[{name:"show",rawName:"v-show",value:0!=e.fileList.length,expression:"fileList.length != 0"}],staticClass:"file-list"},e._l(e.fileList,function(t){return i("li",[i("div",[e._v(e._s(t.filename))]),i("div",[e._v(e._s(e._f("FileSizeFilter")(t.size)))]),i("div",[e._v(e._s(0==t.progress?"未上传":100==t.progress?"已上传":t.progress+"%"))])])})),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0==e.fileList.length,expression:"fileList.length == 0"}]},[i("div",{attrs:{id:"file-picker"}},[e._v("选择文件")])])])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",[i("tr",[i("th",{staticStyle:{width:"6%"}},[e._v("序号")]),e._v(" "),i("th",{staticStyle:{width:"15%"}},[e._v("文件名")]),e._v(" "),i("th",{staticStyle:{width:"19%"}},[e._v("预览")]),e._v(" "),i("th",{staticStyle:{width:"13%"}},[e._v("链接")]),e._v(" "),i("th",{staticStyle:{width:"9%"}},[e._v("上传者")]),e._v(" "),i("th",{staticStyle:{width:"14%"}},[e._v("创建时间")]),e._v(" "),i("th",{staticStyle:{width:"8%"}},[e._v("类型")]),e._v(" "),i("th",{staticStyle:{width:"8%"}},[e._v("大小")]),e._v(" "),i("th",{staticStyle:{width:"8%"}},[e._v("操作")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",{attrs:{colspan:"9"}})])}]};var v=i("rAbc")(h,m,!1,function(e){i("0HiE")},null,null);t.default=v.exports},L904:function(e,t,i){(e.exports=i("iQ/U")(!1)).push([e.i,"\n.webuploader-container {\n  position: relative;\n}\n.webuploader-element-invisible {\n  position: absolute !important;\n  clip: rect(1px 1px 1px 1px);\n  /* IE6, IE7 */\n  clip: rect(1px, 1px, 1px, 1px);\n}\n.webuploader-pick {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  background: #00b7ee;\n  padding: 10px 15px;\n  color: #fff;\n  text-align: center;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.webuploader-pick-hover {\n  background: #00a2d4;\n}\n.webuploader-pick-disable {\n  opacity: 0.6;\n  pointer-events: none;\n}\n#file-center-page .search-input {\n  padding: 10px 0 10px 20px;\n}\n#file-center-page #file-picker {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 20px 0;\n}\n#file-center-page #file-picker .webuploader-pick {\n    background: #7e899f;\n}\n#file-center-page #file-picker .webuploader-pick:hover {\n      background: #646f86;\n}\n#file-center-page #file-picker .webuploader-pick + div {\n      right: 0;\n      bottom: 0;\n      width: 100% !important;\n      height: 100% !important;\n}\n#file-center-page .modal-content {\n  max-height: 240px;\n  overflow-y: auto;\n}\n#file-center-page .link-content {\n  padding: 15px 12px;\n  text-decoration: underline;\n}\n#file-center-page .link-content:hover {\n    color: #f66;\n}\n#file-center-page td > img {\n  max-width: 150px;\n}\n#file-center-page .file-list {\n  padding: 0 12px;\n}\n#file-center-page .file-list li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    border-bottom: 1px dotted #ccc;\n    line-height: 36px;\n}\n#file-center-page .file-list li > div:nth-of-type(1) {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      text-align: left;\n}\n#file-center-page .file-list li > div:nth-of-type(2) {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 100px;\n      text-align: right;\n}\n#file-center-page .file-list li > div:nth-of-type(3) {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 90px;\n      text-align: right;\n}\n",""])},UNbi:function(e,t,i){"use strict";var n=i("VSB1");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";return Object(n.b)(new Date(e),t)}}});