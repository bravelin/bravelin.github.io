(function(e){function a(a){for(var l,n,i=a[0],c=a[1],o=a[2],s=0,v=[];s<i.length;s++)n=i[s],u[n]&&v.push(u[n][0]),u[n]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);m&&m(a);while(v.length)v.shift()();return r.push.apply(r,o||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],l=!0,n=1;n<t.length;n++){var i=t[n];0!==u[i]&&(l=!1)}l&&(r.splice(a--,1),e=c(c.s=t[0]))}return e}var l={},n={app:0},u={app:0},r=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-27acbab2":"2827318b","chunk-2613c65e":"a25e2183","chunk-6a1f89a4":"7c2fb52b","chunk-be5b18b6":"d6629ded","chunk-e2acc2e0":"83c196ea","chunk-00119d6c":"2b16586d","chunk-bb7f7ae6":"ad944dfc","chunk-ecf4cbac":"88d9288b"}[e]+".js"}function c(a){if(l[a])return l[a].exports;var t=l[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var a=[],t={"chunk-2613c65e":1,"chunk-6a1f89a4":1,"chunk-be5b18b6":1,"chunk-00119d6c":1,"chunk-bb7f7ae6":1,"chunk-ecf4cbac":1};n[e]?a.push(n[e]):0!==n[e]&&t[e]&&a.push(n[e]=new Promise(function(a,t){for(var l="css/"+({}[e]||e)+"."+{"chunk-27acbab2":"31d6cfe0","chunk-2613c65e":"d793ce56","chunk-6a1f89a4":"1c6e2c65","chunk-be5b18b6":"028ded9e","chunk-e2acc2e0":"31d6cfe0","chunk-00119d6c":"823d857f","chunk-bb7f7ae6":"eebf04cc","chunk-ecf4cbac":"fb0c57cd"}[e]+".css",u=c.p+l,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var o=r[i],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===l||s===u))return a()}var v=document.getElementsByTagName("style");for(i=0;i<v.length;i++){o=v[i],s=o.getAttribute("data-href");if(s===l||s===u)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var l=a&&a.target&&a.target.src||u,r=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");r.request=l,delete n[e],m.parentNode.removeChild(m),t(r)},m.href=u;var d=document.getElementsByTagName("head")[0];d.appendChild(m)}).then(function(){n[e]=0}));var l=u[e];if(0!==l)if(l)a.push(l[2]);else{var r=new Promise(function(a,t){l=u[e]=[a,t]});a.push(l[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e),o=function(a){s.onerror=s.onload=null,clearTimeout(v);var t=u[e];if(0!==t){if(t){var l=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src,r=new Error("Loading chunk "+e+" failed.\n("+l+": "+n+")");r.type=l,r.request=n,t[1](r)}u[e]=void 0}};var v=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(a)},c.m=e,c.c=l,c.d=function(e,a,t){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var l in e)c.d(t,l,function(a){return e[a]}.bind(null,l));return t},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="",c.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=a,o=o.slice();for(var v=0;v<o.length;v++)a(o[v]);var m=s;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"0706":function(e,a,t){"use strict";a["a"]={HOME:"home",IOT:"iot",FARMING:"farming",PLANT:"plant",WAREHOUSE:"warehouse",ORIGIN:"origin"}},1:function(e,a){},"56d7":function(e,a,t){"use strict";t.r(a);t("5c07"),t("53da"),t("2556"),t("d0f8");var l,n,u,r=t("8973"),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{style:{height:e.winHeight+"px"},attrs:{id:"app"}},[t("NavMenu"),t("router-view",{style:{height:e.pageHeight+"px"}}),t("Spinner",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]})],1)},c=[],o=t("bd31"),s=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"spinner-wrap"},[t("div",{staticClass:"spinner"},[t("div",{staticClass:"spinner-container container1"},[t("div",{staticClass:"circle1"}),t("div",{staticClass:"circle2"}),t("div",{staticClass:"circle3"}),t("div",{staticClass:"circle4"})]),t("div",{staticClass:"spinner-container container2"},[t("div",{staticClass:"circle1"}),t("div",{staticClass:"circle2"}),t("div",{staticClass:"circle3"}),t("div",{staticClass:"circle4"})]),t("div",{staticClass:"spinner-container container3"},[t("div",{staticClass:"circle1"}),t("div",{staticClass:"circle2"}),t("div",{staticClass:"circle3"}),t("div",{staticClass:"circle4"})])])])}],m=t("d2f3"),d={},b=Object(m["a"])(d,s,v,!1,null,null,null),f=b.exports,_={getMonitorData:"./api-json/monitor.json",getFmsData:"./api-json/fms.json",getFmsHourChartData:"./api-json/iot.hour.json",getFmsWeekChartData:"./api-json/iot.week.json"},T=t("52c1"),p=t("eb57"),A=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"nav-menu"},[e._m(0),t("ul",{staticClass:"menu"},[t("router-link",{attrs:{tag:"li",to:{name:"home"}}},[e._v("智慧全息")]),t("router-link",{attrs:{tag:"li",to:{name:"iot"}}},[e._v("物联监控")]),t("router-link",{attrs:{tag:"li",to:{name:"plant"}}},[e._v("种植分布")]),t("router-link",{attrs:{tag:"li",to:{name:"farming"}}},[e._v("农事活动")]),t("router-link",{attrs:{tag:"li",to:{name:"warehouse"}}},[e._v("出库入库")]),t("router-link",{attrs:{tag:"li",to:{name:"origin"}}},[e._v("溯源数据")])],1)])},h=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"logo"},[t("div",[e._v("智所未见 尽在未来")])])}],E={},O=Object(m["a"])(E,A,h,!1,null,null,null),R=O.exports,g={name:"app",components:{Spinner:f,NavMenu:R},data:function(){return{}},computed:Object(o["a"])({},Object(T["c"])(["loading","winHeight","screenFullState"]),{pageHeight:function(){var e=this.$store.state,a=e.winHeight-105;return a>720?a:720}}),created:function(){var e=this,a=e.$store,t=window;t.addEventListener("resize",function(){a.commit(p["a"].GET_WINDOW_SIZE)}),a.commit(p["a"].GET_WINDOW_SIZE)}},S=g,D=(t("5c0b"),Object(m["a"])(S,i,c,!1,null,null,null)),C=D.exports,G=(t("3a23"),t("5f19")),N=window,M=document,I=(l={},Object(G["a"])(l,p["a"].SWITCH_LOADING,function(e,a){e.loading=a}),Object(G["a"])(l,p["a"].SWITCH_SCREEN_FULL,function(e,a){e.screenFullState=a}),Object(G["a"])(l,p["a"].GET_WINDOW_SIZE,function(e){e.winHeight=M.documentElement.clientHeight||N.innerHeight,e.winWidth=M.documentElement.clientWidth||N.innerWidth,M.body.style.minHeight=e.winHeight+"px"}),Object(G["a"])(l,p["a"].SET_CURR_ROUTER,function(e,a){var t=e.currRouter;t.from=a.from,t.to=a.to,t.query=a.query,t.instance=a.instance,t.to||(e.loading=!1,e.screenFullState=!1)}),l),y=t("0706"),H=t("0649"),F=t.n(H),k=(t("44a2"),t("ab56"),[{place:"星村镇",data:1200},{place:"五夫镇",data:1120},{place:"上梅乡",data:1033},{place:"杨庄乡",data:982},{place:"兴田镇",data:900},{place:"岚谷乡",data:890},{place:"吴屯乡",data:721},{place:"崇安街道",data:523},{place:"武夷街道",data:356},{place:"新丰街道",data:200}]),j=["一","二","三","四","五","六","七","八","九","十"],L=(n={},Object(G["a"])(n,p["a"].HOME_GET_AMOUNT_RANK_DATA,function(e){setTimeout(function(){if(""==e.state.currSelectedRegion)e.state.amountRankDatas=k.sort(function(e,a){return e.data>a.data?1:-1});else{var a=j.map(function(e){return{place:"公司"+e,data:F()(1500*Math.random())}});a.sort(function(e,a){return e.data>a.data?1:-1}),e.state.amountRankDatas=a}},600)}),Object(G["a"])(n,p["a"].HOME_GET_FARMING_ACT_DATA,function(e){var a=[{label:"有机肥",value:32},{label:"无机肥",value:22},{label:"饼肥",value:46},{label:"复合肥",value:26}];setTimeout(function(){e.state.farmingActdatas=a.map(function(e){return{label:e.label,value:F()(100*Math.random())}})},700)}),Object(G["a"])(n,p["a"].HOME_GET_PICK_DATA,function(e){var a=[{label:"大红袍",value:292},{label:"奇种",value:495},{label:"肉桂",value:742},{label:"水仙",value:1035},{label:"名枞",value:535}];setTimeout(function(){var t=0,l=0,n=""==e.state.currSelectedRegion?1e3:400;e.state.pickDatas=a.map(function(e){return l=F()(n*Math.random()),t+=l,{label:e.label,value:l}}),e.state.teaTotalAmount=t},400)}),Object(G["a"])(n,p["a"].HOME_GET_WAREHOUSE_DATA,function(e){var a=[{date:"1月",in:1380,out:1140},{date:"2月",in:580,out:654},{date:"3月",in:880,out:741},{date:"4月",in:254,out:365},{date:"5月",in:630,out:470},{date:"6月",in:471,out:369},{date:"7月",in:1120,out:874},{date:"8月",in:635,out:147},{date:"9月",in:208,out:259},{date:"10月",in:544,out:998},{date:"11月",in:639,out:657},{date:"12月",in:479,out:759}];setTimeout(function(){var t=""==e.state.currSelectedRegion?1500:400;e.state.warehouseDatas=a.map(function(e){return{date:e.date,in:F()(t*Math.random())+50,out:F()(t*Math.random())+50}})},1e3)}),Object(G["a"])(n,p["a"].HOME_GET_CITY_DATA,function(e){var a=[{name:"北京市",value:53},{name:"天津市",value:13},{name:"南昌市",value:15},{name:"南宁市",value:6},{name:"武夷山市",value:223},{name:"深圳市",value:53},{name:"赣州市",value:43},{name:"南京市",value:123},{name:"抚州市",value:43},{name:"福州市",value:22},{name:"厦门市",value:69},{name:"上海市",value:111},{name:"苏州市",value:200},{name:"兰州市",value:31},{name:"齐齐哈尔市",value:53},{name:"广州",value:323},{name:"惠州市",value:93},{name:"河源市",value:83},{name:"长沙市",value:143},{name:"武汉市",value:323},{name:"石家庄市",value:23},{name:"太原市",value:99},{name:"杭州市",value:88},{name:"镇江市",value:222},{name:"鹰潭市",value:103},{name:"瑞金市",value:53},{name:"遵义市",value:253},{name:"贵阳市",value:43},{name:"昆明市",value:13},{name:"拉萨市",value:63},{name:"保定市",value:39},{name:"邯郸市",value:45}];setTimeout(function(){var t=""==e.state.currSelectedRegion?360:90;e.state.cityDatas=a.map(function(e){return{name:e.name,value:F()(t*Math.random())}})},200)}),Object(G["a"])(n,p["a"].HOME_GET_MONITOR_AMOUNT,function(e){setTimeout(function(){var a=""==e.state.currSelectedRegion?600:100;e.state.cameraAmount=F()(a*Math.random())+50,e.state.monitorAmount=F()(a*Math.random())+30},250)}),Object(G["a"])(n,p["a"].HOME_GET_TEA_LEVEL_DATA,function(e){var a=[{label:"大师级",value:292},{label:"特级",value:495},{label:"一级",value:742},{label:"二级",value:1035}];setTimeout(function(){var t=""==e.state.currSelectedRegion?1400:500;e.state.levelDatas=a.map(function(e){return{label:e.label,value:F()(t*Math.random())+30}})},600)}),n),w=(u={},Object(G["a"])(u,p["a"].HOME_CHANGE_CURR_REGION,function(e,a){e.currSelectedRegion=a}),Object(G["a"])(u,p["a"].HOME_CHANGE_FULL_STATE,function(e,a){e[a.fullStateName]=a.state}),u),U={namespaced:!0,state:{cameraAmount:0,monitorAmount:0,teaTotalAmount:0,farmingActdatas:[],pickDatas:[],levelDatas:[],amountRankUnit:"亩",amountRankDatas:[],warehouseUnit:"吨",warehouseDatas:[],cityDatas:[],currSelectedRegion:"",amountRankFullState:!1,farmingInfoFullState:!1,pickInfoFullState:!1,warehouseFullState:!1,originDataFullState:!1,levelInfoFullState:!1,mapFullState:!1},actions:L,mutations:w},P=t("a700"),W=t.n(P),x=t("7f43"),q=t.n(x);q.a.defaults.baseURL="",q.a.interceptors.request.use(function(e){return e},function(e){return W.a.reject(e)}),q.a.interceptors.response.use(function(e){return W.a.resolve(e)},function(e){return W.a.reject(e)});var Y,$,V,z,B,K,Z,J,Q=function(e){return new W.a(function(a,t){q.a.request(e).then(function(e){a(e.data)},function(e){t(e)})})},X=(Y={},Object(G["a"])(Y,p["a"].GET_MONITORS,function(e){Q({url:_.getMonitorData}).then(function(a){var t=a.monaList||[];e.state.monitors=t.map(function(e,a){return{id:e.vdcam_id,name:e.vdcam_name,lng:e.vdcam_gislong,lat:e.vdcam_gislatd,type:"mn",isActive:!1,index:a}})})}),Object(G["a"])(Y,p["a"].GET_FMS,function(e){Q({url:_.getFmsData}).then(function(a){var t=a.fmList||[];e.state.fms=t.map(function(a,t){return 0==t&&(e.state.currActive.index=0,e.state.currActive.type="fm"),{id:a.fldstnId,gardenId:a.fldstnOrcId,fieldId:a.fldstnOrcd01Id,name:a.fldstnName,lng:a.fldstnGislong,lat:a.fldstnGislatd,type:"fm",isActive:0==t,index:t}}),e.dispatch(p["a"].GET_FMS_DATA),e.dispatch(p["a"].GET_FMS_CHART_DATA)})}),Object(G["a"])(Y,p["a"].GET_FMS_DATA,function(e){var a=e.state,t=a.fmData;setTimeout(function(){t.temperature=(20*Math.random()).toFixed(2),t.humidity=(100*Math.random()).toFixed(1),t.light=(1e4*Math.random()).toFixed(1),t.pressure=(1e4*Math.random()).toFixed(1)},1200)}),Object(G["a"])(Y,p["a"].GET_FMS_CHART_DATA,function(e){var a=e.state,t=a.currFmDataType;a.currFm;"HOUR"==t?Q({url:_.getFmsHourChartData}).then(function(e){var t=e.todayBrokenLineList||[];a.fmChartDatas=t.map(function(e){return{title:e.template_txdate,data:F()(e.brokenLineValue||0)+F()(50*Math.random())}})}):"WEEK"==t&&Q({url:_.getFmsWeekChartData}).then(function(e){var t=e.weekDayBrokenLineList||[];a.fmChartDatas=t.map(function(e){return{title:e.template_txdate,data:F()(e.brokenLineValue||0)+F()(50*Math.random())}})})}),Y),ee=($={},Object(G["a"])($,p["a"].CHANGE_ACTIVE_MARKER,function(e,a){var t=e.currActive,l=t.index,n=t.type,u="mn"==n?e.monitors:e.fms;u[l].isActive=!1;var r="mn"==a.type?e.monitors:e.fms;r[a.index].isActive=!0,t.type=a.type,t.index=a.index}),Object(G["a"])($,p["a"].SWITCH_FM,function(e,a){e.currFm=a.value,e.currFmName=a.name,"temperature"==a.value?e.chartUnit="℃":"humidity"==a.value?e.chartUnit="%":"light"==a.value?e.chartUnit="Lux":"pressure"==a.value&&(e.chartUnit="Pa"),console.log("payload.value...",a.value,e.chartUnit)}),Object(G["a"])($,p["a"].SWITCH_FM_DATA_TYPE,function(e,a){e.currFmDataType=a}),Object(G["a"])($,p["a"].IOT_CURVE_FULL_STATE_CHANGE,function(e,a){e.curveChartFullState=void 0!==a?a:!e.curveChartFullState}),$),ae={namespaced:!0,state:{monitors:[],fms:[],currActive:{index:0,type:"mn"},currFm:"temperature",currFmName:"温度",chartUnit:"%",currFmDataType:"HOUR",fmData:{temperature:"12.13",humidity:"52.7",light:"9987.0",pressure:"988.51"},fmChartDatas:[],curveChartFullState:!1},actions:X,mutations:ee},te=(V={},Object(G["a"])(V,p["a"].PLANT_GET_STAT_DATA,function(e){var a=[{label:"茶园总数",data:"1322",unit:"家"},{label:"茶园面积",data:"14.2万",unit:"亩"},{label:"预估产量",data:"1988",unit:"吨"}];setTimeout(function(){var t=""==e.state.currSelectedRegion?1220:600,l=""==e.state.currSelectedRegion?50:20;e.state.totalData=a.map(function(e,a){return{label:e.label,data:1==a?(l*Math.random()).toFixed(1):F()(t*Math.random()),unit:e.unit}})},500)}),Object(G["a"])(V,p["a"].PLANT_GET_TREE_AGE_DATA,function(e){var a=[{type:"3-4年",data:1200},{type:"5-8年",data:3120},{type:"9-20年",data:5033},{type:"20年以上",data:982}];setTimeout(function(){var t=""==e.state.currSelectedRegion?3e3:1e3;e.state.treeAgeDistributeDatas=a.map(function(e){return{type:e.type,data:F()(Math.random()*t)+900}})},300)}),Object(G["a"])(V,p["a"].PLANT_GET_TEA_FARM_DATA,function(e){var a=[{label:"高山",value:2566},{label:"半岩",value:895},{label:"正岩",value:442},{label:"其他",value:535}];setTimeout(function(){var t=""==e.state.currSelectedRegion?1020:500,l=0,n=0;e.state.teaFarmTypeDatas=a.map(function(e){return n=F()(Math.random()*t)+300,l+=n,{label:e.label,value:n}}),e.state.farmTotalArea=l},800)}),Object(G["a"])(V,p["a"].PLANT_GET_TEA_VARIETIES_DATA,function(e){var a=[{label:"大红袍",value:292},{label:"奇种",value:495},{label:"肉桂",value:742},{label:"水仙",value:1035},{label:"名枞",value:535}];setTimeout(function(){var t=""==e.state.currSelectedRegion?1020:500,l=0,n=0;e.state.varietiesDatas=a.map(function(e){return n=F()(Math.random()*t),l+=n,{label:e.label,value:n}}),e.state.varietiesTotalData=l},600)}),V),le=(z={},Object(G["a"])(z,p["a"].PLANT_CHANGE_CURR_REGION,function(e,a){e.currSelectedRegion=a}),Object(G["a"])(z,p["a"].PLANT_CHANGE_FULL_STATE,function(e,a){e[a.fullStateName]=a.state}),z),ne={namespaced:!0,state:{currSelectedRegion:"",amountRankUnit:"亩",amountRankDatas:[{place:"星村镇",data:1200},{place:"五夫镇",data:1120},{place:"上梅乡",data:1033},{place:"杨庄乡",data:982},{place:"兴田镇",data:900},{place:"岚谷乡",data:890},{place:"吴屯乡",data:721},{place:"崇安街道",data:523},{place:"武夷街道",data:356},{place:"新丰街道",data:200}],farmTotalArea:0,teaFarmTypeDatas:[],varietiesTotalData:0,varietiesDatas:[],treeAgeDistributeUnit:"亩",treeAgeDistributeDatas:[],totalData:[],totalDataFullState:!1,treeAgeFullState:!1,teaVarietiesFullState:!1,plantRankFullState:!1,teaFarmFullState:!1},actions:te,mutations:le},ue=(B={},Object(G["a"])(B,p["a"].FARMING_GET_PLANT_ACT_DATA,function(e){var a=[{label:"大红袍",value:292},{label:"奇种",value:495},{label:"肉桂",value:742},{label:"水仙",value:1035},{label:"名枞",value:535}],t=[{label:"1月",value:55},{label:"2月",value:257},{label:"3月",value:95},{label:"4月",value:350},{label:"5月",value:651},{label:"6月",value:752},{label:"7月",value:154},{label:"8月",value:255},{label:"9月",value:85},{label:"10月",value:123}];setTimeout(function(){var l=""==e.state.currSelectedRegion?1200:500;e.state.plantActPieDatas=a.map(function(e){return{label:e.label,value:F()(l*Math.random())}}),e.state.plantActLineDatas=t.map(function(e){return{label:e.label,value:F()(l*Math.random())}})},500)}),Object(G["a"])(B,p["a"].FARMING_GET_FERTILIZER_ACT_DATA,function(e){var a=[{label:"有机肥",value:192},{label:"无机肥",value:405},{label:"饼肥",value:742},{label:"复合肥",value:435}],t=[{label:"1月",value:655},{label:"2月",value:207},{label:"3月",value:195},{label:"4月",value:50},{label:"5月",value:251},{label:"6月",value:552},{label:"7月",value:254},{label:"8月",value:355},{label:"9月",value:285},{label:"10月",value:423}];setTimeout(function(){var l=""==e.state.currSelectedRegion?1200:500;e.state.fertilizerActPieDatas=a.map(function(e){return{label:e.label,value:F()(l*Math.random())}}),e.state.fertilizerActLineDatas=t.map(function(e){return{label:e.label,value:F()(l*Math.random())}})},500)}),Object(G["a"])(B,p["a"].FARMING_GET_PROTECTION_ACT_DATA,function(e){var a=[{label:"虫害",value:292},{label:"病害",value:455}],t=[{label:"1月",value:105},{label:"2月",value:267},{label:"3月",value:595},{label:"4月",value:502},{label:"5月",value:351},{label:"6月",value:152},{label:"7月",value:654},{label:"8月",value:555},{label:"9月",value:385},{label:"10月",value:623}];setTimeout(function(){var l=""==e.state.currSelectedRegion?1200:500;e.state.protectionActPieDatas=a.map(function(e){return{label:e.label,value:F()(l*Math.random())}}),e.state.protectionActLineDatas=t.map(function(e){return{label:e.label,value:F()(l*Math.random())}})},500)}),B),re=(K={},Object(G["a"])(K,p["a"].FARMING_CHANGE_CURR_REGION,function(e,a){e.currSelectedRegion=a}),Object(G["a"])(K,p["a"].FARMING_CHANGE_FULL_STATE,function(e,a){e[a.fullStateName]=a.state}),K),ie={namespaced:!0,state:{currSelectedRegion:"",plantActPieDatas:[],plantActLineDatas:[],fertilizerActPieDatas:[],fertilizerActLineDatas:[],protectionActPieDatas:[],protectionActLineDatas:[],plantFullState:!1,protectionFullState:!1,fertilizerFullState:!1},actions:ue,mutations:re},ce=(Z={},Object(G["a"])(Z,p["a"].WAREHOUSE_GET_TODAY_DATA,function(e){setTimeout(function(){var a=""==e.state.currSelectedRegion?2e3:800;e.state.toDayInAmount=F()(Math.random()*a),e.state.toDayOutAmount=F()(Math.random()*a)},600)}),Object(G["a"])(Z,p["a"].WAREHOUSE_GET_THIS_YEAR_IN_DATA,function(e){var a=""==e.state.currSelectedRegion?1500:600,t=[{label:"1月",value:633},{label:"2月",value:211},{label:"3月",value:302},{label:"4月",value:458},{label:"5月",value:987},{label:"6月",value:541},{label:"7月",value:201},{label:"8月",value:104},{label:"9月",value:589},{label:"10月",value:607},{label:"11月",value:567},{label:"12月",value:467}];setTimeout(function(){e.state.thisYearInDatas=t.map(function(e){return{label:e.label,value:F()(Math.random()*a)}})},688)}),Object(G["a"])(Z,p["a"].WAREHOUSE_GET_THIS_YEAR_OUT_DATA,function(e){var a=""==e.state.currSelectedRegion?1300:600,t=[{label:"1月",value:633},{label:"2月",value:211},{label:"3月",value:302},{label:"4月",value:458},{label:"5月",value:987},{label:"6月",value:541},{label:"7月",value:201},{label:"8月",value:104},{label:"9月",value:589},{label:"10月",value:607},{label:"11月",value:567},{label:"12月",value:467}];setTimeout(function(){e.state.thisYearOutDatas=t.map(function(e){return{label:e.label,value:F()(Math.random()*a)}})},700)}),Object(G["a"])(Z,p["a"].WAREHOUSE_GET_HISTORY_IN_DATA,function(e){var a=[{year:"2017",list:[{label:"1月",value:496},{label:"2月",value:647},{label:"3月",value:700},{label:"4月",value:535},{label:"5月",value:321},{label:"6月",value:459},{label:"7月",value:444},{label:"8月",value:335},{label:"9月",value:366},{label:"10月",value:498},{label:"11月",value:200},{label:"12月",value:463}]},{year:"2018",list:[{label:"1月",value:433},{label:"2月",value:111},{label:"3月",value:202},{label:"4月",value:658},{label:"5月",value:787},{label:"6月",value:241},{label:"7月",value:301},{label:"8月",value:404},{label:"9月",value:689},{label:"10月",value:107},{label:"11月",value:367},{label:"12月",value:767}]}],t=""==e.state.currSelectedRegion?1300:600;setTimeout(function(){e.state.historyInDatas=a.map(function(e){return{year:e.year,list:e.list.map(function(e){return{label:e.label,value:F()(Math.random()*t)}})}})},400)}),Object(G["a"])(Z,p["a"].WAREHOUSE_GET_HISTORY_OUT_DATA,function(e){var a=[{year:"2017",list:[{label:"1月",value:496},{label:"2月",value:647},{label:"3月",value:700},{label:"4月",value:535},{label:"5月",value:321},{label:"6月",value:459},{label:"7月",value:444},{label:"8月",value:335},{label:"9月",value:366},{label:"10月",value:498},{label:"11月",value:200},{label:"12月",value:463}]},{year:"2018",list:[{label:"1月",value:433},{label:"2月",value:111},{label:"3月",value:202},{label:"4月",value:658},{label:"5月",value:787},{label:"6月",value:241},{label:"7月",value:301},{label:"8月",value:404},{label:"9月",value:689},{label:"10月",value:107},{label:"11月",value:367},{label:"12月",value:767}]}],t=""==e.state.currSelectedRegion?1300:600;setTimeout(function(){e.state.historyOutDatas=a.map(function(e){return{year:e.year,list:e.list.map(function(e){return{label:e.label,value:F()(Math.random()*t)}})}})},400)}),Z),oe=Object(G["a"])({},p["a"].WAREHOUSE_CHANGE_CURR_REGION,function(e,a){e.currSelectedRegion=a}),se={namespaced:!0,state:{currSelectedRegion:"",toDayInAmount:0,toDayOutAmount:0,thisYearInDatas:[],thisYearOutDatas:[],historyInDatas:[],historyOutDatas:[{year:"2017",list:[{label:"1月",value:496},{label:"2月",value:647},{label:"3月",value:700},{label:"4月",value:535},{label:"5月",value:321},{label:"6月",value:459},{label:"7月",value:444},{label:"8月",value:335},{label:"9月",value:366},{label:"10月",value:498},{label:"11月",value:200},{label:"12月",value:463}]},{year:"2018",list:[{label:"1月",value:433},{label:"2月",value:111},{label:"3月",value:202},{label:"4月",value:658},{label:"5月",value:787},{label:"6月",value:241},{label:"7月",value:301},{label:"8月",value:404},{label:"9月",value:689},{label:"10月",value:107},{label:"11月",value:367},{label:"12月",value:767}]}]},actions:ce,mutations:oe},ve={},me={},de=[{date:"2018-10-16",list:[{time:"09:10",place:"江西省赣州市南康区东山大道110号",tel:"196****2202"},{time:"09:11",place:"广东省广州市南沙区五湖大道111号",tel:"196****2203"},{time:"09:12",place:"广东省广州市南沙区大道112号",tel:"196****2204"},{time:"09:13",place:"广东省广州市南沙区大道113号",tel:"196****2205"},{time:"09:14",place:"广东省广州市南沙区大道114号",tel:"196****2206"}]},{date:"2018-10-15",list:[{time:"12:10",place:"江西省赣州市南康区东山大道110号",tel:"196****2202"},{time:"13:11",place:"江西省赣州市南康区东山大道111号",tel:"196****2203"},{time:"13:12",place:"江西省赣州市南康区东山大道112号",tel:"196****2204"},{time:"15:13",place:"江西省赣州市南康区东山大道113号",tel:"196****2205"},{time:"16:14",place:"江西省赣州市南康区东山大道114号",tel:"196****2206"}]},{date:"2018-10-14",list:[{time:"12:10",place:"江西省赣州市南康区东山大道110号",tel:"196****2202"},{time:"13:11",place:"江西省赣州市南康区东山大道111号",tel:"196****2203"},{time:"13:12",place:"江西省赣州市南康区东山大道112号",tel:"196****2204"},{time:"15:13",place:"江西省赣州市南康区东山大道113号",tel:"196****2205"},{time:"16:14",place:"江西省赣州市南康区东山大道114号",tel:"196****2206"}]},{date:"2018-10-13",list:[{time:"12:10",place:"江西省赣州市南康区东山大道110号",tel:"196****2202"},{time:"13:11",place:"江西省赣州市南康区东山大道111号",tel:"196****2203"},{time:"13:12",place:"江西省赣州市南康区东山大道112号",tel:"196****2204"},{time:"15:13",place:"江西省赣州市南康区东山大道113号",tel:"196****2205"},{time:"16:14",place:"江西省赣州市南康区东山大道114号",tel:"196****2206"}]}],be={namespaced:!0,state:{cityDatas:[{name:"北京市",value:53},{name:"天津市",value:13},{name:"南昌市",value:15},{name:"南宁市",value:6},{name:"武夷山市",value:223},{name:"深圳市",value:53},{name:"赣州市",value:43},{name:"南京市",value:123},{name:"抚州市",value:43},{name:"福州市",value:22},{name:"厦门市",value:69},{name:"上海市",value:111},{name:"苏州市",value:200},{name:"兰州市",value:31},{name:"齐齐哈尔市",value:53},{name:"广州",value:323},{name:"惠州市",value:93},{name:"河源市",value:83},{name:"长沙市",value:143},{name:"武汉市",value:323},{name:"石家庄市",value:23},{name:"太原市",value:99},{name:"杭州市",value:88},{name:"镇江市",value:222},{name:"鹰潭市",value:103},{name:"瑞金市",value:53},{name:"遵义市",value:253},{name:"贵阳市",value:43},{name:"昆明市",value:13},{name:"拉萨市",value:63},{name:"保定市",value:39},{name:"邯郸市",value:45}],countStatDatas:[{label:"1月",value:224},{label:"2月",value:334},{label:"3月",value:552},{label:"4月",value:661},{label:"5月",value:741},{label:"6月",value:356},{label:"7月",value:471},{label:"8月",value:308},{label:"9月",value:224},{label:"10月",value:781}],addressList:de,mapDatas:[{name:"大庆",value:[125.03,46.58,112]},{name:"武汉",value:[114.31,30.52,693]},{name:"合肥",value:[117.27,31.86,256]},{name:"菏泽",value:[115.480656,35.23375,364]},{name:"廊坊",value:[116.7,39.53,455]},{name:"衢州",value:[118.88,28.97,102]},{name:"长沙",value:[113,28.21,95]},{name:"秦皇岛",value:[119.57,39.95,475]},{name:"荆州",value:[112.239741,30.335165,147]}]},actions:ve,mutations:me},fe=(J={},Object(G["a"])(J,y["a"].HOME,U),Object(G["a"])(J,y["a"].IOT,ae),Object(G["a"])(J,y["a"].PLANT,ne),Object(G["a"])(J,y["a"].FARMING,ie),Object(G["a"])(J,y["a"].WAREHOUSE,se),Object(G["a"])(J,y["a"].ORIGIN,be),J);r["default"].use(T["b"]);var _e=new T["b"].Store({state:{winHeight:0,winWidth:0,currRouter:{from:"",to:"",query:null,instance:null},chartFullPage:!1,loading:!1,screenFullState:!1},mutations:I,modules:fe}),Te=t("081a");r["default"].use(Te["a"]);var pe=new Te["a"]({base:"",linkActiveClass:"active",routes:[{path:"/home",name:"home",component:function(){return Promise.all([t.e("chunk-27acbab2"),t.e("chunk-e2acc2e0"),t.e("chunk-bb7f7ae6")]).then(t.bind(null,"8a00"))}},{path:"/iot",name:"iot",component:function(){return Promise.all([t.e("chunk-27acbab2"),t.e("chunk-be5b18b6")]).then(t.bind(null,"ecf9"))}},{path:"/plant",name:"plant",component:function(){return Promise.all([t.e("chunk-27acbab2"),t.e("chunk-ecf4cbac")]).then(t.bind(null,"3501"))}},{path:"/farming",name:"farming",component:function(){return Promise.all([t.e("chunk-27acbab2"),t.e("chunk-2613c65e")]).then(t.bind(null,"af20"))}},{path:"/warehouse",name:"warehouse",component:function(){return Promise.all([t.e("chunk-27acbab2"),t.e("chunk-6a1f89a4")]).then(t.bind(null,"bc30"))}},{path:"/origin",name:"origin",component:function(){return Promise.all([t.e("chunk-27acbab2"),t.e("chunk-e2acc2e0"),t.e("chunk-00119d6c")]).then(t.bind(null,"7f36"))}},{path:"*",redirect:{name:"home"}}]});pe.beforeEach(function(e,a,t){_e.commit({type:p["a"].SET_CURR_ROUTER,from:a.name,to:e.name,query:e.query,instance:pe}),e.name&&e.name!==a.name&&_e.commit(p["a"].SWITCH_LOADING,!0),t(!0)});var Ae=pe,he=t("696e"),Ee=t.n(he),Oe=t("e248"),Re=t.n(Oe),ge=(t("de9c"),t("07cd"),function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"plane",class:{"full-screen":e.full}},[t("canvas",{ref:"bg"}),e._t("default")],2)}),Se=[],De=(t("244e"),{name:"Plane",props:{full:{type:Boolean,default:!1}},watch:{full:function(){var e=this;setTimeout(function(){e.draw()},500)}},mounted:function(){var e=this;e.$nextTick(function(){e.draw(),window.addEventListener("resize",function(){e.draw()})})},methods:{draw:function(){var e=this,a=e.$el,t=getComputedStyle(a,null),l=F()(t.width),n=F()(t.height);if(isNaN(l)||isNaN(n))setTimeout(function(){e.draw()},1e3);else{var u=e.$refs.bg;u.width=l,u.height=n;var r=u.getContext("2d");r.clearRect(0,0,l,n);var i=4,c=.5;r.strokeStyle="rgba(53, 121, 255, 0.15)",r.fillStyle="rgba(18, 35, 87, 0.1)",r.lineWidth=1,r.beginPath(),r.moveTo(i,c),r.lineTo(l-i-.5,c),r.quadraticCurveTo(l-.5,c,l-.5,c+i),r.lineTo(l-.5,n-i),r.quadraticCurveTo(l-.5,n-.5,l-i-.5,n-.5),r.lineTo(i,n-.5),r.quadraticCurveTo(.5,n-.5,.5,n-i-.5),r.lineTo(.5,i),r.quadraticCurveTo(.5,c,i,c),r.stroke(),r.fill();var o=9;r.strokeStyle="rgba(53, 121, 255, 0.2)",r.lineWidth=2,r.beginPath(),r.moveTo(.5,i+o),r.lineTo(.5,i),r.quadraticCurveTo(.5,c,i,c),r.lineTo(i+o,c),r.moveTo(l-i-.5-o,c),r.lineTo(l-i-.5,c),r.quadraticCurveTo(l-.5,c,l-.5,c+i),r.lineTo(l-.5,c+i+o),r.moveTo(l-.5,n-i-o),r.lineTo(l-.5,n-i),r.quadraticCurveTo(l-.5,n-.5,l-i-.5,n-.5),r.lineTo(l-i-.5-o,n-.5),r.moveTo(i+o,n-.5),r.lineTo(i,n-.5),r.quadraticCurveTo(.5,n-.5,.5,n-i-.5),r.lineTo(.5,n-i-.5-o),r.stroke()}}}}),Ce=De,Ge=Object(m["a"])(Ce,ge,Se,!1,null,null,null),Ne=Ge.exports,Me=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h2",{staticClass:"plane-title"},[t("i"),e._t("default")],2)},Ie=[],ye={},He=Object(m["a"])(ye,Me,Ie,!1,null,null,null),Fe=He.exports,ke=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"panel-tools"},[t("i",{staticClass:"iconfont full-icon",domProps:{innerHTML:e._s(e.full?"&#xe621;":"&#xe629;")},on:{click:function(a){return e.change()}}}),t("i",{staticClass:"iconfont download-icon",on:{click:function(a){return e.download()}}},[e._v("")])])},je=[],Le=(t("48fb"),t("4ccc"),{name:"PlaneTools",props:{full:{type:Boolean,default:!1}},methods:{change:function(){var e=this;e.$emit("change",!e.full)},download:function(){var e=this,a=e.$el,t=a.parentNode,l=t.querySelector(".plane-content canvas");if(l||(l=t.querySelector(".wuyishan-map-container canvas")),l){var n=t.querySelector(".plane-title"),u=n?n.innerText:Math.random().toString(36).substr(2),r=document.createElement("canvas");r.width=l.width,r.height=l.height;var i=r.getContext("2d");i.fillStyle="rgba(18, 35, 87, 0.98)",i.fillRect(0,0,l.width,l.height),i.drawImage(l,0,0,l.width,l.height);var c=document.createElement("a");c.download=u,c.href=r.toDataURL("image/png"),document.body.appendChild(c),c.click(),c.remove()}}}}),we=Le,Ue=Object(m["a"])(we,ke,je,!1,null,null,null),Pe=Ue.exports;r["default"].config.productionTip=!1,r["default"].prototype.$ajax=Q,r["default"].use(Ee.a),r["default"].use(Re.a),r["default"].component("Plane",Ne),r["default"].component("PlaneTitle",Fe),r["default"].component("PlaneTools",Pe),new r["default"]({router:Ae,store:_e,render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,a,t){"use strict";var l=t("ee6c"),n=t.n(l);n.a},eb57:function(e,a,t){"use strict";t("0b9e");var l=["SWITCH_LOADING","SWITCH_SCREEN_FULL","GET_WINDOW_SIZE","SET_CURR_ROUTER","GET_MONITORS","GET_FMS","CHANGE_ACTIVE_MARKER","SWITCH_FM","GET_FMS_DATA","GET_FMS_CHART_DATA","SWITCH_FM_DATA_TYPE","IOT_CURVE_FULL_STATE_CHANGE","FARMING_CHANGE_CURR_REGION","FARMING_GET_PLANT_ACT_DATA","FARMING_GET_FERTILIZER_ACT_DATA","FARMING_GET_PROTECTION_ACT_DATA","FARMING_CHANGE_FULL_STATE","WAREHOUSE_CHANGE_CURR_REGION","WAREHOUSE_GET_TODAY_DATA","WAREHOUSE_GET_THIS_YEAR_IN_DATA","WAREHOUSE_GET_THIS_YEAR_OUT_DATA","WAREHOUSE_GET_HISTORY_IN_DATA","WAREHOUSE_GET_HISTORY_OUT_DATA","PLANT_CHANGE_CURR_REGION","PLANT_GET_STAT_DATA","PLANT_GET_TREE_AGE_DATA","PLANT_GET_TEA_FARM_DATA","PLANT_GET_TEA_VARIETIES_DATA","PLANT_CHANGE_FULL_STATE","HOME_CHANGE_CURR_REGION","HOME_GET_AMOUNT_RANK_DATA","HOME_GET_FARMING_ACT_DATA","HOME_GET_PICK_DATA","HOME_GET_WAREHOUSE_DATA","HOME_GET_CITY_DATA","HOME_GET_MONITOR_AMOUNT","HOME_GET_TEA_LEVEL_DATA","HOME_CHANGE_FULL_STATE"],n={};l.forEach(function(e){n[e]=e}),a["a"]=n},ee6c:function(e,a,t){}});