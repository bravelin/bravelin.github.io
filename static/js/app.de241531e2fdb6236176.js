webpackJsonp([20,19],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(6),i=a(r),o=n(90),s=a(o),c=n(89),l=a(c),u=n(43),d=a(u),p=n(1);i.default.use(s.default),i.default.use(l.default),i.default.http.options.emulateJSON=!0,i.default.http.headers.common["X-APICloud-AppId"]="A6931492233958";var m=n(44);i.default.component("comments",m);var f=n(7);i.default.filter("timeFormatter",f),window._g=p.Global;var v=p.Global,h=[{path:"/articles",name:"articles",component:function(e){n.e(17,function(t){var n=[t(49)];e.apply(null,n)}.bind(this))}},{path:"/topics",name:"topics",component:function(e){n.e(3,function(t){var n=[t(62)];e.apply(null,n)}.bind(this))}},{path:"/comments",name:"comments",component:function(e){n.e(16,function(t){var n=[t(50)];e.apply(null,n)}.bind(this))}},{path:"/about",name:"about",component:function(e){n.e(1,function(t){var n=[t(48)];e.apply(null,n)}.bind(this))}},{path:"/topicArticles",name:"topicArticles",component:function(e){n.e(4,function(t){var n=[t(61)];e.apply(null,n)}.bind(this))}},{path:"/404",name:"404",component:function(e){n.e(18,function(t){var n=[t(47)];e.apply(null,n)}.bind(this))}},{path:"/working/project/gztjjweb",name:"working-project-gztjjweb",component:function(e){n.e(5,function(t){var n=[t(65)];e.apply(null,n)}.bind(this))}},{path:"/learning/css/secrects/1",name:"learning-css-secrects-1",component:function(e){n.e(2,function(t){var n=[t(51)];e.apply(null,n)}.bind(this))}},{path:"/learning/css/secrects/2",name:"learning-css-secrects-2",component:function(e){n.e(15,function(t){var n=[t(52)];e.apply(null,n)}.bind(this))}},{path:"/learning/css/secrects/3",name:"learning-css-secrects-3",component:function(e){n.e(14,function(t){var n=[t(53)];e.apply(null,n)}.bind(this))}},{path:"/learning/css/secrects/4",name:"learning-css-secrects-4",component:function(e){n.e(13,function(t){var n=[t(54)];e.apply(null,n)}.bind(this))}},{path:"/learning/css/secrects/5",name:"learning-css-secrects-5",component:function(e){n.e(12,function(t){var n=[t(55)];e.apply(null,n)}.bind(this))}},{path:"/learning/css/secrects/6",name:"learning-css-secrects-6",component:function(e){n.e(11,function(t){var n=[t(56)];e.apply(null,n)}.bind(this))}},{path:"/learning/css/secrects/7",name:"learning-css-secrects-7",component:function(e){n.e(10,function(t){var n=[t(57)];e.apply(null,n)}.bind(this))}},{path:"/learning/css/secrects/8",name:"learning-css-secrects-8",component:function(e){n.e(9,function(t){var n=[t(58)];e.apply(null,n)}.bind(this))}},{path:"/working/canvas/turnTableDraw",name:"working-canvas-turnTableDraw",component:function(e){n.e(6,function(t){var n=[t(63)];e.apply(null,n)}.bind(this))}},{path:"/working/project/base",name:"working-project-base",component:function(e){n.e(0,function(t){var n=[t(64)];e.apply(null,n)}.bind(this))}},{path:"/learning/es6/1",name:"learning-es6-1",component:function(e){n.e(8,function(t){var n=[t(59)];e.apply(null,n)}.bind(this))}},{path:"/learning/es6/2",name:"learning-es6-2",component:function(e){n.e(7,function(t){var n=[t(60)];e.apply(null,n)}.bind(this))}},{path:"/",redirect:{name:"articles"}},{path:"/home",redirect:{name:"articles"}},{path:"*",redirect:{name:"404"}}],y=new s.default({linkActiveClass:"active",routes:h});y.beforeEach(function(e,t,n){v.loading=!0,v.currPage=e.name,v.currPageParams=e.query,n()}),y.afterEach(function(e){setTimeout(function(){v.loading=!1},300),/^(home|topicArticles|topics|404|articles|about)$/.test(e.name)?(v.showArticleNavMenu="comments"==e.name,v.nextArticle="",v.prevArticle="",v.currArticleId="",v.currArticleName=""):v.setArticleNavMenu(e.name)}),new i.default({router:y,render:function(e){return e(d.default)}}).$mount("#app")},1:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(4),i=a(r),o=n(3);t.Global={loading:!1,tip:null,showArticleNavMenu:!1,prevArticle:"",nextArticle:"",currArticleId:"",currArticleName:"",currPage:"",currPageParams:"",appKey:"A6931492233958UZ861E0A3C-95CD-E681-E0CA-E70127FFECE7UZ",setArticleNavMenu:function(e){var t=this;t.showArticleNavMenu=!0;for(var n=i.default.list,a=0;a<n.length;a++)if(n[a].routerName==e){t.currArticleId=n[a].id,t.currArticleName=n[a].title,a>0?t.prevArticle=n[a-1].routerName:t.prevArticle="",a<n.length-1?t.nextArticle=n[a+1].routerName:t.nextArticle="";break}setTimeout(function(){o.eventHub.$emit("refresh-comments")},4e3)},tipShow:function(e,t){var n=this.tip;n||(n=this.tip=document.querySelector("#app-tip")),n.children[0].innerHTML=e,n.classList.add("active"),setTimeout(function(){n.classList.remove("active")},t||3e3)},sha:function(e){function t(e,t){var n=e<<t|e>>>32-t;return n}function n(e){var t,n,a="";for(t=7;t>=0;t--)n=e>>>4*t&15,a+=n.toString(16);return a}function a(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var a=e.charCodeAt(n);a<128?t+=String.fromCharCode(a):a>127&&a<2048?(t+=String.fromCharCode(a>>6|192),t+=String.fromCharCode(63&a|128)):(t+=String.fromCharCode(a>>12|224),t+=String.fromCharCode(a>>6&63|128),t+=String.fromCharCode(63&a|128))}return t}var r,i,o,s,c,l,u,d,p,m=new Array(80),f=1732584193,v=4023233417,h=2562383102,y=271733878,g=3285377520;e=a(e);var _=e.length,C=new Array;for(i=0;i<_-3;i+=4)o=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3),C.push(o);switch(_%4){case 0:i=2147483648;break;case 1:i=e.charCodeAt(_-1)<<24|8388608;break;case 2:i=e.charCodeAt(_-2)<<24|e.charCodeAt(_-1)<<16|32768;break;case 3:i=e.charCodeAt(_-3)<<24|e.charCodeAt(_-2)<<16|e.charCodeAt(_-1)<<8|128}for(C.push(i);C.length%16!=14;)C.push(0);for(C.push(_>>>29),C.push(_<<3&4294967295),r=0;r<C.length;r+=16){for(i=0;i<16;i++)m[i]=C[r+i];for(i=16;i<=79;i++)m[i]=t(m[i-3]^m[i-8]^m[i-14]^m[i-16],1);for(s=f,c=v,l=h,u=y,d=g,i=0;i<=19;i++)p=t(s,5)+(c&l|~c&u)+d+m[i]+1518500249&4294967295,d=u,u=l,l=t(c,30),c=s,s=p;for(i=20;i<=39;i++)p=t(s,5)+(c^l^u)+d+m[i]+1859775393&4294967295,d=u,u=l,l=t(c,30),c=s,s=p;for(i=40;i<=59;i++)p=t(s,5)+(c&l|c&u|l&u)+d+m[i]+2400959708&4294967295,d=u,u=l,l=t(c,30),c=s,s=p;for(i=60;i<=79;i++)p=t(s,5)+(c^l^u)+d+m[i]+3395469782&4294967295,d=u,u=l,l=t(c,30),c=s,s=p;f=f+s&4294967295,v=v+c&4294967295,h=h+l&4294967295,y=y+u&4294967295,g=g+d&4294967295}return p=n(f)+n(v)+n(h)+n(y)+n(g),p.toLowerCase()}}},2:function(e,t,n){e.exports=n.p+"static/img/header.a45dcce.jpg"},3:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(6),i=a(r);t.eventHub=new i.default},4:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={author:"zhangjialin",list:[{id:"1",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之一：前言",description:"由W3C CSS工作组特邀专家、CSS语言设计者之一的Lea Verou撰写。'十年来最重要的CSS图书，没有之一'。前言中主要是编程理念，特性检测与CSS编码技巧。",date:"2016/10/30",routerName:"learning-css-secrects-1",topicId:"0"},{id:"2",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之二：背景与边框",description:"此书第二章的内容。分别描述了半透明边框、多重边框、背景定位、边框内圆角以及多种多样的条纹背景效果实现技巧。",date:"2016/11/03",routerName:"learning-css-secrects-2",topicId:"0"},{id:"3",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之三：形状",description:"此书第三章的内容。主要讲解了自适应椭圆、平行四边形、菱形图片、切角效果、梯形效果及饼图的实现方案。",date:"2016/11/08",routerName:"learning-css-secrects-3",topicId:"0"},{id:"4",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之四：视觉效果",description:"此书第四章的内容。讲解单侧投影、不规则投影、染色效果和折角效果的实现。",date:"2016/11/20",routerName:"learning-css-secrects-4",topicId:"0"},{id:"5",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之五：字体排印",description:"此书第五章的内容。讲解连字符断行、简洁的插入换行、文本斑马线、自定义下划线以及几种文字效果的实现。",date:"2016/12/05",routerName:"learning-css-secrects-5",topicId:"0"},{id:"6",type:"工作总结",category:"canvas",title:"转盘抽奖的前端实现",description:"介绍转盘抽奖页面实现过程中转盘的绘制、旋转度数的计算方案及前端使用随机数模拟的效果。",date:"2016/12/07",routerName:"working-canvas-turnTableDraw",topicId:"1"},{id:"7",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之六：用户体验",description:"此书第六章的内容。主要内容是如何扩大点击区域、自定义复选框以及如何通过模糊弱化背景的实现。",date:"2016/12/20",routerName:"learning-css-secrects-6",topicId:"0"},{id:"8",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之七：结构与布局",description:"此书第七章的内容。如何做到自适应内部元素、根据兄弟元素的数量来设置样式以及垂直居中是此章节的主题。",date:"2017/01/10",routerName:"learning-css-secrects-7",topicId:"0"},{id:"10",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之八：过渡与动画",description:"此书第八章的内容。（未完）",date:"2017/01/22",routerName:"learning-css-secrects-8",topicId:"0"},{id:"11",type:"技术基础",category:"js",title:"前端基础开发环境的配置",description:"主要记录安装完node.js和ruby之后sass的配置、淘宝cnpm以及gulp插件的安装。",date:"2016/05/15",routerName:"working-project-base",topicId:""},{id:"12",type:"读书笔记",category:"es6",title:"《ES6标准入门》笔记之一：let与const命令",description:"let、const命令以及块级作用域概念。",date:"2017/03/08",routerName:"learning-es6-1",topicId:"2"},{id:"13",type:"读书笔记",category:"es6",title:"《ES6标准入门》笔记之二",description:"",date:"2017/03/09",routerName:"learning-es6-2",topicId:"2"}]}},7:function(e,t){"use strict";e.exports=function(e,t){var n=new Date(e);t=t||"yyyy/MM/dd hh:mm:ss";var a={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in a)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[r]:("00"+a[r]).substr((""+a[r]).length)));return t}},8:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(46),i=a(r),o=n(45),s=a(o),c=n(1),l=n(3);e.exports={data:function(){return{global:c.Global,isFixedTop:!1,showSizeMenu:!1}},components:{spinner:i.default,note:s.default},mounted:function(){var e=this;e.$nextTick(function(){e.global.loading=!0,document.querySelector("header").style.opacity=1,document.querySelector("body>footer").style.opacity=1,window.addEventListener("scroll",function(){e.doHandlerScroll()})})},methods:{doClickNoteBtn:function(){var e=c.Global,t={noteType:"comment",replyId:"",replyName:"",articleId:e.currArticleId,articleName:e.currArticleName,pageName:e.currPage};"comments"==e.currPage&&(t.noteType="note",t.articleId="",t.articleName=""),l.eventHub.$emit("pop-note-modal",t)},doHandlerScroll:function(){var e=document.body;this.isFixedTop=e&&e.scrollTop>188},doClickSideMenuWrap:function(e){},doHideSideMenu:function(){this.showSizeMenu=!1},doClickMenuBtn:function(e){this.showSizeMenu=!this.showSizeMenu,e.stopPropagation()}}}},9:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(29),i=a(r),o=n(1),s=n(3);t.default={data:function(){return{dataList:[],timer:null,hasStarted:!1,showDelBtn:!1,showReplyBtn:!1}},props:{queryArticle:{type:Boolean,required:!1,default:!0}},created:function(){var e=this,t=o.Global.currPageParams;if("true"==t.del&&(e.showDelBtn=!0),"true"==t.reply&&(e.showReplyBtn=!0),!e.queryArticle){var n=sessionStorage.getItem("all-comments");n&&(n=JSON.parse(n),e.handlerData(n)),e.refresh()}s.eventHub.$on("refresh-comments",e.refresh)},beforeDestroy:function(){var e=this;s.eventHub.$off("refresh-comments",e.refresh),e.timer&&clearTimeout(e.timer)},methods:{doTimerRefresh:function(){var e=this;e.timer=setTimeout(function(){e.refresh(),e.doTimerRefresh()},2e4)},doReply:function(e){s.eventHub.$emit("pop-note-modal",{noteType:"reply",replyId:e.id,replyName:e.userName,articleId:e.articleId,articleName:e.articleName,pageName:e.pageRouter})},doDelete:function(e){s.eventHub.$emit("pop-confirm-del-modal",e)},handlerData:function(e){var t,n,a,r=this,i=[],o={};for(t=e.length-1;t>=0;t--)n=e[t],n.replyId?(a=i[o[n.replyId]],a&&(a.reply=n)):(o[n.id]=i.length,i.push(n));i=i.reverse(),r.dataList=i,r.hasStarted||(r.hasStarted=!0)},refresh:function(){var e=this,t=+new Date,n=o.Global,a=n.sha(n.appKey+t)+"."+t,r={order:"createdAt DESC"};e.queryArticle&&(r.where={articleId:n.currArticleId}),e.$http.get("https://d.apicloud.com/mcm/api/comments",{headers:{"X-APICloud-AppKey":a},params:{filter:(0,i.default)(r)}}).then(function(t){if(200==t.status){var n=t.body||[];e.queryArticle||sessionStorage.setItem("all-comments",(0,i.default)(n)),e.handlerData(n)}})}}}},10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=n(3);t.default={data:function(){return{noteName:"",noteContent:"",noteType:"note",replyName:"",replyId:"",articleId:"",articleName:"",pageName:"",inSubmit:!1}},created:function(){r.eventHub.$on("pop-note-modal",this.doHandlerPopModal)},beforeDestroy:function(){r.eventHub.$off("pop-note-modal",this.doHandlerPopModal)},methods:{doHandlerPopModal:function(e){var t=this;t.noteType=e.noteType,"reply"==t.noteType&&(t.replyName=e.replyName,t.replyId=e.replyId),t.articleId=e.articleId||"",t.articleName=e.articleName||"",t.pageName=e.pageName||"",t.doShowNoteModal()},doSubmitNoteContent:function(){var e=this,t=a.Global,n=e.noteName.trim(),i=e.noteContent.trim();if(0==n.length&&"reply"!=e.noteType)return void e.$refs.noteNameEl.focus();if(0==i.length)return void e.$refs.noteContentEl.focus();e.noteName=n,e.noteContent=i,e.inSubmit=!0;var o=+new Date,s=a.Global.sha(a.Global.appKey+o)+"."+o,c={articleId:e.articleId,userName:n,commentContent:i,articleName:e.articleName,pageRouter:e.pageName,replyId:""};"reply"==e.noteType&&(c.replyId=e.replyId,c.userName="linz"),e.$http.post("https://d.apicloud.com/mcm/api/comments",c,{headers:{"X-APICloud-AppKey":s}}).then(function(n){e.inSubmit=!1,200==n.status?(r.eventHub.$emit("refresh-comments"),t.tipShow("提交成功！"),e.doCloseNoteModal()):t.tipShow("提交失败！请稍后再试！")},function(){e.inSubmit=!1,t.tipShow("提交失败！请稍后再试！")})},doShowNoteModal:function(){var e=this,t=e.$el;e.noteName="",e.noteContent="",t.style.display="block",setTimeout(function(){t.classList.add("active")},200)},doCloseNoteModal:function(){var e=this,t=e.$el;t.classList.remove("active"),setTimeout(function(){t.style.display="none"},600)}}}},34:function(e,t){},36:function(e,t){},43:function(e,t,n){var a,r;n(36),a=n(8);var i=n(88);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=a},44:function(e,t,n){var a,r;a=n(9);var i=n(84);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=a},45:function(e,t,n){var a,r;a=n(10);var i=n(82);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=a},46:function(e,t,n){var a,r;n(34);var i=n(77);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=a},77:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spinner-wrap"},[n("div",{staticClass:"spinner"},[n("div",{staticClass:"spinner-container container1"},[n("div",{staticClass:"circle1"}),e._v(" "),n("div",{staticClass:"circle2"}),e._v(" "),n("div",{staticClass:"circle3"}),e._v(" "),n("div",{staticClass:"circle4"})]),e._v(" "),n("div",{staticClass:"spinner-container container2"},[n("div",{staticClass:"circle1"}),e._v(" "),n("div",{staticClass:"circle2"}),e._v(" "),n("div",{staticClass:"circle3"}),e._v(" "),n("div",{staticClass:"circle4"})]),e._v(" "),n("div",{staticClass:"spinner-container container3"},[n("div",{staticClass:"circle1"}),e._v(" "),n("div",{staticClass:"circle2"}),e._v(" "),n("div",{staticClass:"circle3"}),e._v(" "),n("div",{staticClass:"circle4"})])])])}]}},82:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"note-wrap modal",class:{loading:e.inSubmit}},[n("div",[n("h3",[e._v(e._s("reply"==e.noteType?"回复@"+e.replyName:"note"==e.noteType?"留言":"评论")),n("span",{on:{click:function(t){e.doCloseNoteModal()}}},[e._v("X")])]),e._v(" "),n("div",{staticClass:"content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:"reply"!=e.noteType,expression:"noteType!='reply'"}],staticClass:"clear-fix"},[n("label",[e._v("您的称呼：")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.noteName,expression:"noteName"}],ref:"noteNameEl",attrs:{type:"text",placeholder:"your name",maxlength:"20"},domProps:{value:e.noteName},on:{input:function(t){t.target.composing||(e.noteName=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"clear-fix"},[n("label",[e._v(e._s("reply"==e.noteType?"回复的话":"您想说的话")+"：")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.noteContent,expression:"noteContent"}],ref:"noteContentEl",attrs:{placeholder:"message content",maxlength:"2000"},domProps:{value:e.noteContent},on:{input:function(t){t.target.composing||(e.noteContent=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"footer"},[n("a",{staticClass:"ok",on:{click:function(t){e.doSubmitNoteContent()}}},[e._v("提交")]),e._v(" "),n("a",{staticClass:"cancel",on:{click:function(t){e.doCloseNoteModal()}}},[e._v("取消")])]),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-mask"},[n("div",[n("i"),n("i"),n("i"),n("i"),n("i")])])}]}},84:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{directives:[{name:"show",rawName:"v-show",value:e.dataList.length>0,expression:"dataList.length>0"}],staticClass:"comments",class:{all:!e.queryArticle}},e._l(e.dataList,function(t){return n("li",{key:t.id},[n("div",[n("span",[e._v(e._s(e._f("timeFormatter")(t.createdAt)))]),e._v(e._s(t.userName)+"\n            "),e.showDelBtn?n("a",{on:{click:function(n){e.doDelete(t.id)}}},[e._v("删除")]):e._e(),e._v(" "),e.showReplyBtn&&!t.reply?n("a",{staticClass:"reply",on:{click:function(n){e.doReply(t)}}},[e._v("回复")]):e._e()]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.queryArticle&&t.articleName&&t.pageRouter,expression:"!queryArticle && item.articleName && item.pageRouter"}]},[e._v('在文章"\n            '),n("router-link",{attrs:{to:{name:t.pageRouter}}},[e._v(e._s(t.articleName))]),e._v('"处留言：\n        ')],1),e._v(" "),n("div",[e._v(e._s(t.commentContent))]),e._v(" "),t.reply?[n("div",[e._v(e._s(e._f("timeFormatter")(t.reply.createdAt))+" linz回复 @"+e._s(t.userName))]),e._v(" "),n("div",[e._v(e._s(t.reply.commentContent))])]:e._e()],2)}))},staticRenderFns:[]}},88:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{click:function(t){e.doHideSideMenu()}}},[n("header",[e._m(0),e._v(" "),n("nav",{class:{fixedTop:e.isFixedTop}},[n("ul",[n("li",[n("router-link",{attrs:{to:{name:"about"}}},[e._v("About Me")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:{name:"comments"}}},[e._v("Comments")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:{name:"topics"}}},[e._v("Topics")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:{name:"articles"}}},[e._v("Articles")])],1)])])]),e._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1),e._v(" "),n("spinner",{directives:[{name:"show",rawName:"v-show",value:e.global.loading,expression:"global.loading"}]}),e._v(" "),n("div",{staticClass:"side-menu-icon",class:{fixedTop:e.isFixedTop},on:{click:function(t){e.doClickMenuBtn(t)}}}),e._v(" "),n("nav",{staticClass:"side-menu",class:{active:e.showSizeMenu},on:{click:function(t){e.doClickSideMenuWrap(t)}}},[n("ul",[n("li",[n("router-link",{attrs:{to:{name:"articles"}}},[e._v("Articles")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:{name:"topics"}}},[e._v("Topics")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:{name:"comments"}}},[e._v("Comments")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:{name:"about"}}},[e._v("About Me")])],1)])]),e._v(" "),n("nav",{directives:[{name:"show",rawName:"v-show",value:e.global.showArticleNavMenu,expression:"global.showArticleNavMenu"}],staticClass:"article-nav-menu"},[e.global.prevArticle?n("router-link",{staticClass:"back",attrs:{title:"前一篇",to:{name:e.global.prevArticle}}}):e._e(),e._v(" "),e.global.nextArticle?n("router-link",{staticClass:"next",attrs:{title:"后一篇",to:{name:e.global.nextArticle}}}):e._e(),e._v(" "),n("a",{staticClass:"note",attrs:{title:"留言"},on:{click:function(t){e.doClickNoteBtn()}}})],1),e._v(" "),n("note")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"logo"}),e._v(" "),n("div",{staticClass:"title"},[n("h1",[e._v("linz blog")]),e._v(" "),n("h2",[e._v("年华易老，不忘初心。")])])])}]}},92:function(e,t){}});