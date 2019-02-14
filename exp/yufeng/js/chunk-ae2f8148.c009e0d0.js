(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae2f8148"],{"08db":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page transport-trajectory-page"},[a("Map"),a("Info"),a("Search")],1)},n=[],i=a("f2de"),o=a("eb57"),c=a("0706"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map-wrap"})},l=[],u=(a("b4c2"),a("de57")),p=a("1a1e"),d=c["a"].TRANSPORT_TRAJECTORY,v=Object(i["a"])(d).mapState,f=Math.PI,m=25,h={name:"TransportTrajectoryMap",computed:Object(u["a"])({},v(["pathArr","truckDatas","currActiveTruckIndex"])),data:function(){return{map:null,mapReady:!1,markers:[],startPointCanvas:null,endPointCanvas:null,startPointRadius:0,endPointRadius:0,startPoint:{x:0,y:0},endPoint:{x:0,y:0}}},created:function(){var t=this;t.$store.commit(d+"/"+o["a"].SWITCH_ACTIVE_TRUCK,0)},mounted:function(){var t=this;t.$nextTick(function(){var e=new AMap.Map(t.$el,{zoom:p["a"].transportTrajectoryMap.zoom,center:p["a"].transportTrajectoryMap.center,mapStyle:p["a"].mapStyle,resizeEnable:!0});new AMap.Polyline({map:e,path:t.pathArr,showDir:!1,strokeColor:"#4f92e8",strokeOpacity:.7,strokeWeight:8}),new AMap.Polyline({map:e,path:t.pathArr,showDir:!1,strokeColor:"#fff",strokeOpacity:.7,strokeWeight:1});e.on("complete",function(){t.mapReady=!0,t.map=e,e.setFitView(),t.addLayer(),t.addMarkers(),t.updateMarkerIndex()}),e.on("zoomchange",function(){t.doZoomMap()}),e.on("mapmove",function(){t.doZoomMap()}),e.on("dragging",function(){t.doZoomMap()})})},methods:{addMarkers:function(){var t=this,e=t.map;e&&(t.markers=t.truckDatas.map(function(e){return t.createMarker(e)}),e.add(t.markers))},updateMarkerIndex:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1200;setTimeout(function(){var t=document.querySelector("div.amap-layers>div.amap-markers");t&&(t.style.zIndex=122)},t)},createMarker:function(t){var e=this,a=t.carNumber,r=t.driver,n=t.lng,i=t.lat,o=t.index,c=new AMap.LngLat(n,i),s=o==e.currActiveTruckIndex?p["a"].truckImgUrl.active:p["a"].truckImgUrl.normal,l=new AMap.Marker({position:c,offset:new AMap.Pixel(-22,-22),icon:s,title:r+"-"+a,zoom:13});return l.self=t,l.on("click",function(t){e.doHandlerClickMarker(t.target.self,t.target)}),l},doHandlerClickMarker:function(t,e){var a=this,r=a.map;if(t.index!=a.currActiveTruckIndex){for(var n=null,i=a.currActiveTruckIndex,c=0;c<a.markers.length;)n=a.markers[c],n.self.index==a.currActiveTruckIndex||n.self.index==t.index?(r.remove(n),a.markers.splice(c,1)):c++;a.$store.commit(d+"/"+o["a"].SWITCH_ACTIVE_TRUCK,t.index);var s=a.createMarker(t);r.add(s),a.markers.push(s);var l=a.createMarker(a.truckDatas[i]);r.add(l),a.markers.push(l),a.updateMarkerIndex(300)}},drawCircle:function(t){var e=this,a="START"==t?e.startPointCanvas:e.endPointCanvas,r="START"==t?e.startPointRadius:e.endPointRadius,n="START"==t?e.startPoint:e.endPoint,i=a.getContext("2d");i.beginPath(),i.arc(n.x,n.y,r,0,2*f),i.closePath(),i.lineWidth=2,i.strokeStyle="START"==t?"#3C9A35":"#f84067",i.stroke(),r+=.5,r>m&&(r=0),"START"==t?e.startPointRadius=r:e.endPointRadius=r},renderCanvas:function(t){var e=this,a="START"==t?e.startPointCanvas:e.endPointCanvas,r=a.getContext("2d"),n=r.globalCompositeOperation;r.globalCompositeOperation="destination-in",r.globalAlpha=.95,r.fillRect(0,0,a.width,a.height),r.globalCompositeOperation=n,e.drawCircle(t)},animDraw:function(){var t=this;AMap.Util.requestAnimFrame(t.animDraw),t.renderCanvas("START"),t.renderCanvas("END")},setCanvasSize:function(){var t=this,e=AMap.Browser.retina,a=t.map,r=a.getSize(),n=r.width,i=r.height;t.startPointCanvas&&t.endPointCanvas&&(t.startPointCanvas.style.width=n+"px",t.startPointCanvas.style.height=i+"px",t.endPointCanvas.style.width=n+"px",t.endPointCanvas.style.height=i+"px",e&&(n*=2,i*=2),t.startPointCanvas.width=n,t.startPointCanvas.height=i,t.endPointCanvas.width=n,t.endPointCanvas.height=i)},doZoomMap:function(){var t=this,e=t.map,a=t.pathArr[0],r=t.pathArr[t.pathArr.length-1];t.startPoint=e.lngLatToContainer(a),t.endPoint=e.lngLatToContainer(r),t.setCanvasSize(),t.updateMarkerIndex(300)},addLayer:function(){var t=this,e=t.map;AMap.plugin("AMap.CustomLayer",function(){var a=document.createElement("canvas"),r=document.createElement("canvas"),n=new AMap.CustomLayer(a,{zooms:[3,18],alwaysRender:!0,zIndex:120}),i=new AMap.CustomLayer(r,{zooms:[3,18],alwaysRender:!0,zIndex:121});t.startPointCanvas=a,t.endPointCanvas=r;var o=t.pathArr[0],c=t.pathArr[t.pathArr.length-1];t.startPoint=e.lngLatToContainer(o),t.endPoint=e.lngLatToContainer(c),t.setCanvasSize(),n.render=function(){t.renderCanvas("START")},i.render=function(){t.renderCanvas("END")},n.setMap(e),i.setMap(e),t.animDraw()})}}},g=h,C=a("25c1"),T=Object(C["a"])(g,s,l,!1,null,null,null);T.options.__file="Map.vue";var _=T.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-wrap"},[a("h3",[t._v("当前运输记录")]),t._m(0),a("div",{staticClass:"transport-chart"},[a("div",{style:{left:t.currActiveTruck.progress}}),a("PointWave",{attrs:{color:"#3C9A35",w:44,h:44}}),a("PointWave",{attrs:{color:"#f84067",w:44,h:44}})],1),a("div",{staticClass:"plane-wrap plane"},[a("div",[a("label",[t._v("运输人员：")]),t._v(t._s(t.currActiveTruck.driver))]),a("div",[a("label",[t._v("运输车号：")]),t._v(t._s(t.currActiveTruck.carNumber))])]),a("div",{staticClass:"plane-wrap plane"},[a("div",[a("label",[t._v("运输预计耗时：")]),t._v(t._s(t.currActiveTruck.expectedTimeConsuming))]),a("div",[a("label",[t._v("运输实际耗时：")]),t._v(t._s(t.currActiveTruck.actualTimeConsuming))]),a("div",[a("label",[t._v("运输开始时间：")]),t._v(t._s(t.currActiveTruck.startTime))]),a("div",[a("label",[t._v("运输结束时间：")]),t._v(t._s(t.currActiveTruck.endTime))]),a("div",[a("label",[t._v("当前距离终点：")]),t._v(t._s(t.currActiveTruck.distance))])])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"transport-name"},[a("div",[t._v("配送中心")]),a("div"),a("div",[t._v("南康中学")])])}],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("canvas",{staticClass:"point-wave",attrs:{width:t.w,height:t.h}})},y=[],w=(a("4f70"),a("6636"),a("175c"),a("bc97"),a("a5be"),Math.PI),x=9,P={name:"PointWave",props:{w:{type:Number,default:60},h:{type:Number,default:60},color:{type:String,default:"rgba(250,250,50,1)"}},computed:{center:function(){return{x:this.w/2,y:this.h/2}}},data:function(){return{radius:x,ctx:null,backCanvas:null}},mounted:function(){var t=this;t.$nextTick(function(){var e=t.$el,a=t.ctx=e.getContext("2d");a.fillStyle=t.color,a.strokeStyle=t.color,a.lineWidth=1,a.globalAlpha=.7;var r=t.backCanvas=document.createElement("canvas");t.backCanvasCtx=t.backCanvas.getContext("2d"),r.width=e.width,r.height=e.height,t.backCanvasCtx.globalCompositeOperation="copy",t.paint(),t.draw()})},methods:{draw:function(){var t=this;requestAnimationFrame(t.draw),t.render()},render:function(){var t=this,e=t.ctx,a=t.backCanvas.getContext("2d");a.drawImage(t.$el,0,0,t.w,t.h),e.clearRect(0,0,t.w,t.h),t.paint(),e.drawImage(t.backCanvas,0,0,t.w,t.h)},paint:function(){var t=this,e=t.ctx;e.beginPath(),e.arc(t.center.x,t.center.y,x,0,2*w),e.closePath(),e.fill(),e.stroke();for(var a=1;a<4;a++)e.save(),e.globalAlpha=.8-.2*a,e.beginPath(),e.lineWidth=1.5,e.arc(t.center.x,t.center.y,t.radius+3*a,0,2*w),e.closePath(),e.stroke(),e.restore();t.radius+=.18,t.radius>t.center.x-12&&(t.radius=0)}}},I=P,M=Object(C["a"])(I,k,y,!1,null,null,null);M.options.__file="PointWave.vue";var S=M.exports,R=c["a"].TRANSPORT_TRAJECTORY,O=Object(i["a"])(R).mapState,E={name:"TransportTrajectoryInfo",components:{PointWave:S},computed:Object(u["a"])({},O(["currActiveTruck"]))},N=E,j=Object(C["a"])(N,b,A,!1,null,null,null);j.options.__file="Info.vue";var z=j.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-wrap"})},$=[],W=c["a"].TRANSPORT_TRAJECTORY,D=(Object(i["a"])(W).mapState,{name:"TransportTrajectorySearch"}),F=D,U=Object(C["a"])(F,L,$,!1,null,null,null);U.options.__file="Search.vue";var J=U.exports,V=c["a"].TRANSPORT_TRAJECTORY,H=(Object(i["a"])(V).mapState,{name:"TransportTrajectoryIndex",components:{Map:_,Info:z,Search:J},created:function(){var t=this,e=t.$store;e.commit(o["a"].SWITCH_LOADING,!1)},activated:function(){var t=this,e=t.$store;e.commit(o["a"].SWITCH_LOADING,!1)}}),Y=H,G=(a("82f2"),Object(C["a"])(Y,r,n,!1,null,null,null));G.options.__file="Index.vue";e["default"]=G.exports},"1a1e":function(t,e,a){"use strict";e["a"]={geoJsonBaseUrl:"./geo-json/china/",mapStyle:"amap://styles/darkblue",monitorMarkerImgUrl:{normal:"./images/4/1.png",active:"./images/4/2.png"},fmMarkerImgUrl:{normal:"./images/4/3.png",active:"./images/4/4.png"},productionMonitorMap:{center:[114.9,25.807761],zoom:7},transportTrajectoryMap:{center:[116.397428,39.90923],zoom:17},truckImgUrl:{normal:"./images/6/1.png",active:"./images/6/2.png"}}},"2bbe":function(t,e,a){var r=a("9cde"),n=a("d302").set;t.exports=function(t,e,a){var i,o=e.constructor;return o!==a&&"function"==typeof o&&(i=o.prototype)!==a.prototype&&r(i)&&n&&n(t,i),t}},"4f70":function(t,e,a){var r=a("ac1b");r(r.P,"Array",{fill:a("b8cf")}),a("442f")("fill")},5310:function(t,e,a){},6636:function(t,e,a){"use strict";var r=a("690f"),n=a("bdac"),i=a("0016"),o=a("2bbe"),c=a("ae18"),s=a("e96b"),l=a("e2fa").f,u=a("7f0c").f,p=a("9ba3").f,d=a("b703").trim,v="Number",f=r[v],m=f,h=f.prototype,g=i(a("d115")(h))==v,C="trim"in String.prototype,T=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=C?e.trim():d(e,3);var a,r,n,i=e.charCodeAt(0);if(43===i||45===i){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var o,s=e.slice(2),l=0,u=s.length;l<u;l++)if(o=s.charCodeAt(l),o<48||o>n)return NaN;return parseInt(s,r)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof f&&(g?s(function(){h.valueOf.call(a)}):i(a)!=v)?o(new m(T(e)),a,f):T(e)};for(var _,b=a("241c")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;b.length>A;A++)n(m,_=b[A])&&!n(f,_)&&p(f,_,u(m,_));f.prototype=h,h.constructor=f,a("3871")(r,v,f)}},"7f0c":function(t,e,a){var r=a("c2ce"),n=a("e3d6"),i=a("e5e3"),o=a("ae18"),c=a("bdac"),s=a("a3a9"),l=Object.getOwnPropertyDescriptor;e.f=a("241c")?l:function(t,e){if(t=i(t),e=o(e,!0),s)try{return l(t,e)}catch(a){}if(c(t,e))return n(!r.f.call(t,e),t[e])}},"82f2":function(t,e,a){"use strict";var r=a("5310"),n=a.n(r);n.a},b703:function(t,e,a){var r=a("ac1b"),n=a("346b"),i=a("e96b"),o=a("d953"),c="["+o+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),p=function(t,e,a){var n={},c=i(function(){return!!o[t]()||s[t]()!=s}),l=n[t]=c?e(d):o[t];a&&(n[a]=l),r(r.P+r.F*c,"String",n)},d=p.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=p},b8cf:function(t,e,a){"use strict";var r=a("e1de"),n=a("3bcf"),i=a("5b7f");t.exports=function(t){var e=r(this),a=i(e.length),o=arguments.length,c=n(o>1?arguments[1]:void 0,a),s=o>2?arguments[2]:void 0,l=void 0===s?a:n(s,a);while(l>c)e[c++]=t;return e}},c2ce:function(t,e){e.f={}.propertyIsEnumerable},d302:function(t,e,a){var r=a("9cde"),n=a("f66f"),i=function(t,e){if(n(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=a("5eff")(Function.call,a("7f0c").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,a){return i(t,a),e?t.__proto__=a:r(t,a),t}}({},!1):void 0),check:i}},d953:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e2fa:function(t,e,a){var r=a("6ddc"),n=a("2f9d").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,n)}}}]);