(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f5b0e40"],{"17c4":function(e,t,i){"use strict";var o=i("6fbb"),a=i.n(o);a.a},"2bbe":function(e,t,i){var o=i("9cde"),a=i("d302").set;e.exports=function(e,t,i){var n,r=t.constructor;return r!==i&&"function"==typeof r&&(n=r.prototype)!==i.prototype&&o(n)&&a&&a(e,n),e}},6636:function(e,t,i){"use strict";var o=i("690f"),a=i("bdac"),n=i("0016"),r=i("2bbe"),s=i("ae18"),c=i("e96b"),l=i("e2fa").f,u=i("7f0c").f,d=i("9ba3").f,f=i("b703").trim,v="Number",h=o[v],m=h,p=h.prototype,_=n(i("d115")(p))==v,g="trim"in String.prototype,w=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=g?t.trim():f(t,3);var i,o,a,n=t.charCodeAt(0);if(43===n||45===n){if(i=t.charCodeAt(2),88===i||120===i)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+t}for(var r,c=t.slice(2),l=0,u=c.length;l<u;l++)if(r=c.charCodeAt(l),r<48||r>a)return NaN;return parseInt(c,o)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof h&&(_?c(function(){p.valueOf.call(i)}):n(i)!=v)?r(new m(w(t)),i,h):w(t)};for(var S,y=i("241c")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;y.length>I;I++)a(m,S=y[I])&&!a(h,S)&&d(h,S,u(m,S));h.prototype=p,p.constructor=h,i("3871")(o,v,h)}},"6fbb":function(e,t,i){},"7f0c":function(e,t,i){var o=i("c2ce"),a=i("e3d6"),n=i("e5e3"),r=i("ae18"),s=i("bdac"),c=i("a3a9"),l=Object.getOwnPropertyDescriptor;t.f=i("241c")?l:function(e,t){if(e=n(e),t=r(t,!0),c)try{return l(e,t)}catch(i){}if(s(e,t))return a(!o.f.call(e,t),e[t])}},"89f1":function(e,t,i){"use strict";var o=i("ac6d"),a=i.n(o);a.a},ac6d:function(e,t,i){},b703:function(e,t,i){var o=i("ac1b"),a=i("346b"),n=i("e96b"),r=i("d953"),s="["+r+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),d=function(e,t,i){var a={},s=n(function(){return!!r[e]()||c[e]()!=c}),l=a[e]=s?t(f):r[e];i&&(a[i]=l),o(o.P+o.F*s,"String",a)},f=d.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},c2ce:function(e,t){t.f={}.propertyIsEnumerable},d302:function(e,t,i){var o=i("9cde"),a=i("f66f"),n=function(e,t){if(a(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,o){try{o=i("5eff")(Function.call,i("7f0c").f(Object.prototype,"__proto__").set,2),o(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,i){return n(e,i),t?e.__proto__=i:o(e,i),e}}({},!1):void 0),check:n}},d953:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e2fa:function(e,t,i){var o=i("6ddc"),a=i("2f9d").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,a)}},ec84:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page machining-monitor-page"},[i("CameraStatus"),i("CameraList")],1)},a=[],n=i("eb57"),r=i("0706"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"camera-status"},[i("div",{staticClass:"camera-top-title"},[i("ul",[i("li",[i("div",[e._v("摄像头总数")]),i("div",[e._v(e._s(e.cameraTotalAmount))])]),i("li",[i("div",[e._v("在线摄像头")]),i("div",[e._v(e._s(e.cameraOnlineAmount))])])])]),e._m(0),i("vue-scroll",{attrs:{ops:e.scrollOptions}},[i("ul",{staticClass:"status-list-content"},e._l(e.cameraList,function(t,o){return i("li",{key:o,class:{normal:1==t.status,error:0==t.status}},[i("div",[e._v(e._s(t.name))]),i("div",[e._v(e._s(1==t.status?"播放中":"异常"))]),i("div")])}),0)])],1)},c=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"status-list-header"},[i("div",[e._v("摄像头名称")]),i("div",[e._v("状态")]),i("div",[e._v("指示灯")])])}],l=i("de57"),u=i("f2de"),d=r["a"].MACHINING_MONITOR,f=Object(u["a"])(d).mapState,v={name:"MachiningMonitorCameraStatus",computed:Object(l["a"])({},f(["cameraTotalAmount","cameraOnlineAmount","cameraList"])),data:function(){return{scrollOptions:{vuescroll:{mode:"native",zooming:!1},bar:{background:"rgba(1, 187, 190, 0.7)"}}}}},h=v,m=i("25c1"),p=Object(m["a"])(h,s,c,!1,null,null,null);p.options.__file="CameraStatus.vue";var _,g=p.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"camera-list",class:{full:e.fullMode}},[i("div",{staticClass:"camera-list-content"},e._l(e.currPageList,function(t,o){return i("CameraVideo",{key:t.id,attrs:{no:o+(e.currPage-1)*e.pageSize,name:t.name,url:t.url,status:t.status}})}),1),i("Pagination",{directives:[{name:"show",rawName:"v-show",value:!e.fullMode,expression:"!fullMode"}],attrs:{curr:e.currPage,total:e.totalPage},on:{switch:e.doSwitchPage}}),i("Pagination",{directives:[{name:"show",rawName:"v-show",value:e.fullMode,expression:"fullMode"}],staticClass:"float",attrs:{curr:e.fullModeVideoIndex+1,"show-nums":!1,total:e.cameraList.length},on:{switch:e.doSwitchFullModePage}})],1)},S=[],y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"camera-video",style:{width:e.width+"px",height:e.height+"px"}},[i("div",{staticClass:"video-title"},[i("i",{staticClass:"iconfont"},[e._v("")]),i("span",[e._v(e._s(e.videoName))]),i("i",{class:{normal:1==e.videoStatus,error:0==e.videoStatus}}),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.fullScreen&&(e.fullMode||1==e.videoStatus),expression:"!fullScreen && (fullMode || videoStatus==1)"}],staticClass:"iconfont",on:{click:function(t){e.switchFullScreen(!0)}}},[e._v("")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.fullScreen&&(e.fullMode||1==e.videoStatus),expression:"fullScreen  && (fullMode || videoStatus==1)"}],staticClass:"iconfont",on:{click:function(t){e.switchFullScreen(!1)}}},[e._v("")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.videoStatus,expression:"videoStatus==1"}],ref:"container",staticClass:"video-container"},[i("video-player",{staticClass:"video-player-box",attrs:{options:e.playerOptions,playsinline:!0},on:{ready:e.playerReadied}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:0==e.videoStatus,expression:"videoStatus==0"}],staticClass:"video-error iconfont"},[e._v(""),i("div",{directives:[{name:"show",rawName:"v-show",value:e.fullScreen,expression:"fullScreen"}]},[e._v(e._s(e.timeCount)+"秒之后切换到下一个视频......")])])])},I=[],C=i("a6eb"),N=i.n(C),M=(i("6636"),i("f44b")),b=(i("d85c"),i("175c"),i("bc97"),i("a5be"),r["a"].MACHINING_MONITOR),O=Object(u["a"])(b).mapState,E="$store.state.".concat(b,".fullMode"),x="$store.state.".concat(b,".fullModeVideoUrl"),V="$store.state.".concat(b,".fullModeVideoIndex"),P=388,T=211,$={computed:Object(l["a"])({},O(["fullMode","fullModeVideoIndex","fullModeVideoName","fullModeVideoUrl","fullModeVideoStatus"]),{containerWidth:function(){var e=this,t=30,i=12;return(.74*(e.$store.state.winWidth-2*t)-10-2*i)/3},containerHeight:function(){var e=this,t=e.$store.state,i=t.winHeight-106,o=0;o=t.winWidth<=1400?i>840?i:840:i>720?i:720;var a=o-10-60,n=12;return(a-2*n)/3},videoName:function(){var e=this;return e.fullMode&&(e.fullModeVideoIndex==e.no||e.fullScreen)?e.fullModeVideoName:e.name},videoStatus:function(){var e=this;return e.fullMode&&(e.fullModeVideoIndex==e.no||e.fullScreen)?e.fullModeVideoStatus:e.status}}),watch:(_={},Object(M["a"])(_,E,function(){var e=this;e.fullMode?(console.log("full mode change to true"),e.no!=e.fullModeVideoIndex&&e.$el.classList.add("fade")):(console.log("full mode change to false"),e.$el.classList.remove("fade"))}),Object(M["a"])(_,x,function(){var e=this;e.fullScreen&&(e.fullModeVideoUrl?e.fullModeVideoUrl&&(e.currUrl!=e.fullModeVideoUrl?(e.player.src(e.fullModeVideoUrl),e.player.load(),console.log("reload load video...",e.fullModeVideoUrl)):console.log("do not reload video...")):(e.currUrl="",console.log("load null video...")))}),Object(M["a"])(_,V,function(){var e=this;if(e.fullScreen&&(e.timeCount=3,!e.fullModeVideoUrl))var t=setInterval(function(){e.timeCount--,0==e.timeCount&&(clearInterval(t),e.$store.commit(b+"/"+n["a"].SWITCH_NEXT_VIDEOS))},1e3)}),_),props:{no:{type:Number},status:{type:Number,default:0},name:{type:String,default:"摄像头"},url:{type:String}},created:function(){var e=this;e.width=e.containerWidth,e.height=e.containerHeight},mounted:function(){var e=this;e.$nextTick(function(){if(1==e.status){var t=e.$refs.container;if(t){var i=getComputedStyle(t,null),o=e.playerOptions;o.width=P=N()(i.width),o.height=T=N()(i.height),o.sources[0].src=e.url,e.currUrl=e.url,console.log("success camers video...",e.name)}else console.log("error camers video...",e.name)}})},data:function(){return{width:400,height:250,fullScreen:!1,ready:!1,player:null,currUrl:"",timeCount:3,playerOptions:{autoplay:!0,width:P,height:T,fluid:!1,preload:"auto",language:"zh-CN",sources:[{type:"video/mp4",src:""}],notSupportedMessage:"暂无法播放",controlBar:{fullscreenToggle:!1,remainingTimeDisplay:!1}}}},methods:{playerReadied:function(e){var t=this;t.player=e},resizeVideo:function(e,t){var i=this,o=i.player;o&&(o.width(e),o.height(t))},switchFullScreen:function(e){var t=this;if(e){t.$store.commit(b+"/"+n["a"].SWITCH_VIDEO_FULL_SCREEN,{fullMode:!0,index:t.no,name:t.name,status:t.status,url:t.url});var i=document.querySelector(".camera-list-content");if(i){var o=getComputedStyle(i,null),a=t.$el;setTimeout(function(){a.style.cssText="position: absolute;top:0;left:0;width:".concat(o.width,";height:").concat(o.height);var e=N()(o.width)-10,i=N()(o.height)-40;t.$refs.container.style.height=i+"px",t.playerOptions.width=e,t.playerOptions.height=i,t.resizeVideo(e,i)},300)}}else{t.playerOptions.width=P,t.playerOptions.height=T;var r=t.$el,s=t.$refs.container;s&&(s.style.cssText=""),r.style.cssText="width:".concat(t.containerWidth,"px;height:").concat(t.containerHeight,"px"),t.resizeVideo(t.playerOptions.width,t.playerOptions.height),setTimeout(function(){t.$store.commit(b+"/"+n["a"].SWITCH_VIDEO_FULL_SCREEN,{fullMode:!1,index:t.no}),t.$store.commit(b+"/"+n["a"].GET_CURR_PAGE_VIDEOS,N()(t.fullModeVideoIndex/9)+1)},300)}t.fullScreen=e}}},L=$,A=Object(m["a"])(L,y,I,!1,null,null,null);A.options.__file="CameraVideo.vue";var k=A.exports,R=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pagination-wrap"},[i("div",{staticClass:"prev-page",class:{disabled:!e.hasPrev},on:{click:function(t){e.switchPrevPage()}}}),i("i"),i("ul",{directives:[{name:"show",rawName:"v-show",value:e.showNums,expression:"showNums"}]},e._l(e.posList,function(t,o){return i("li",{key:o,class:{active:t==e.curr},on:{click:function(i){e.switchPage(t)}}},[e._v(e._s(t))])}),0),i("div",{staticClass:"next-page",class:{disabled:!e.hasNext},on:{click:function(t){e.switchNextPage()}}})])},U=[],j={name:"Pagination",props:{showNums:{type:Boolean,default:!0},total:{type:Number,default:0},curr:{type:Number,default:0}},computed:{posList:function(){var e=this,t=[],i=0,o=e.total;if(0==o||0==e.curr)return t;if(o<=7)for(i=1;i<=o;i++)t.push(i);else{t[0]=1,t[6]=o;var a=e.curr-1,n=e.curr+1;if(a<3){for(i=1;i<=4;i++)t[i]=i+1;t[5]="..."}else if(o-n<3){for(i=5;i>=2;i--)t[i]=t[i+1]-1;t[1]="..."}else t[1]="...",t[2]=a,t[3]=e.curr,t[4]=n,t[5]="..."}return t},hasPrev:function(){return this.curr>1},hasNext:function(){var e=this;return e.curr!=e.total}},methods:{switchPage:function(e){var t=this;"..."!=e&&t.$emit("switch",e)},switchPrevPage:function(){var e=this;e.hasPrev&&e.$emit("switch",e.curr-1)},switchNextPage:function(){var e=this;e.hasNext&&e.$emit("switch",e.curr+1)}}},D=j,F=(i("89f1"),Object(m["a"])(D,R,U,!1,null,null,null));F.options.__file="Pagination.vue";var G=F.exports,H=r["a"].MACHINING_MONITOR,W=Object(u["a"])(H).mapState,z={name:"MachiningMonitorCameraList",components:{CameraVideo:k,Pagination:G},computed:Object(l["a"])({},W(["currPageList","currPage","totalPage","fullMode","fullModeVideoIndex","cameraList"])),data:function(){return{pageSize:9}},methods:{doSwitchPage:function(e){var t=this;t.$store.commit(H+"/"+n["a"].GET_CURR_PAGE_VIDEOS,e)},doSwitchFullModePage:function(e){var t=this;e-=1,t.$store.commit(H+"/"+n["a"].SWITCH_FULL_MODE_VIDEO,e)}}},X=z,B=Object(m["a"])(X,w,S,!1,null,null,null);B.options.__file="CameraList.vue";var J=B.exports,Y=r["a"].MACHINING_MONITOR,q={name:"MachiningMonitorIndex",components:{CameraStatus:g,CameraList:J},data:function(){return{inSwitch:!1}},created:function(){var e=this;e.$store.commit(n["a"].SWITCH_LOADING,!1),e.$store.commit(Y+"/"+n["a"].GET_CURR_PAGE_VIDEOS,1),document.addEventListener("keyup",e.doSwitchVideo)},activated:function(){var e=this;e.$store.commit(n["a"].SWITCH_LOADING,!1),document.addEventListener("keyup",e.doSwitchVideo)},deactivated:function(){var e=this;document.removeEventListener("keyup",e.doSwitchVideo)},methods:{doSwitchVideo:function(e){var t=this;t.inSwitch||(t.inSwitch=!0,37==e.keyCode?t.$store.commit(Y+"/"+n["a"].SWITCH_PREV_VIDEOS):39==e.keyCode&&t.$store.commit(Y+"/"+n["a"].SWITCH_NEXT_VIDEOS),setTimeout(function(){t.inSwitch=!1},1e3))}},beforeDestroy:function(){var e=this;document.removeEventListener("keyup",e.doSwitchVideo);var t=e.$store;t.state[Y].fullMode&&t.commit(Y+"/"+n["a"].SWITCH_VIDEO_FULL_SCREEN,{fullMode:!1}),t.commit(Y+"/"+n["a"].GET_CURR_PAGE_VIDEOS,1)}},K=q,Q=(i("17c4"),Object(m["a"])(K,o,a,!1,null,null,null));Q.options.__file="Index.vue";t["default"]=Q.exports}}]);