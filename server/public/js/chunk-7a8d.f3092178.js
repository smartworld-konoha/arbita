(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a8d"],{"0ba6":function(t,a,s){"use strict";s("c5f6");var e=s("1fca"),i=s("4b4c"),r=s("4da1");a["a"]={extends:e["e"],props:{dataSet:{type:Array,default:function(){return[85,50,80,90,10,5,15,60,30,20,50]}},lineTension:{type:Number,default:function(){return 0}},dataLabels:{type:Array,default:function(){return["A","B","C","D","E","F","G","H","I","J","K"]}},enableXAxesLine:{type:Boolean,default:!0},color:{type:String,default:function(){return i["a"].color.white}},gridLines:{type:Boolean,default:!1}},data:function(){return{gradient:null,options:{scales:{yAxes:[{gridLines:{display:!1,drawBorder:!1},ticks:{display:!1},display:!1}],xAxes:[{gridLines:{display:this.gridLines,drawBorder:!1},ticks:{display:this.enableXAxesLine},display:this.enableXAxesLine}]},tooltip:{enabled:!0},legend:{display:!1},responsive:!0,maintainAspectRatio:!0}}},mounted:function(){this.gradient=this.$refs.canvas.getContext("2d").createLinearGradient(0,280,0,0),this.gradient.addColorStop(0,Object(r["b"])("#FFF",.1)),this.gradient.addColorStop(1,Object(r["b"])(this.color,.4)),this.renderChart({labels:this.dataLabels,datasets:[{label:"Data",lineTension:this.lineTension,pointRadius:0,fill:!0,backgroundColor:this.gradient,borderColor:this.color,data:this.dataSet,borderWidth:3}]},this.options)}}},"1fca":function(t,a,s){"use strict";var e=s("5b20"),i=s.n(e);function r(t,a){return{render:function(t){return t("div",{style:this.styles,class:this.cssClasses},[t("canvas",{attrs:{id:this.chartId,width:this.width,height:this.height},ref:"canvas"})])},props:{chartId:{default:t,type:String},width:{default:400,type:Number},height:{default:400,type:Number},cssClasses:{type:String,default:""},styles:{type:Object},plugins:{type:Array,default:function(){return[]}}},data:function(){return{_chart:null,_plugins:this.plugins}},methods:{addPlugin:function(t){this.$data._plugins.push(t)},generateLegend:function(){if(this.$data._chart)return this.$data._chart.generateLegend()},renderChart:function(t,s){this.$data._chart&&this.$data._chart.destroy(),this.$data._chart=new i.a(this.$refs.canvas.getContext("2d"),{type:a,data:t,options:s,plugins:this.$data._plugins})}},beforeDestroy:function(){this.$data._chart&&this.$data._chart.destroy()}}}var l=r("bar-chart","bar"),n=r("horizontalbar-chart","horizontalBar"),o=r("doughnut-chart","doughnut"),c=r("line-chart","line"),d=r("pie-chart","pie"),u=r("polar-chart","polarArea"),v=r("radar-chart","radar"),p=r("bubble-chart","bubble");r("scatter-chart","scatter");s.d(a,"a",function(){return l}),s.d(a,"d",function(){return n}),s.d(a,"c",function(){return o}),s.d(a,"e",function(){return c}),s.d(a,"f",function(){return d}),s.d(a,"g",function(){return u}),s.d(a,"h",function(){return v}),s.d(a,"b",function(){return p})},2100:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"support-ticket-wrap"},[s("app-section-loader",{attrs:{status:t.loader}}),s("vue-perfect-scrollbar",{staticStyle:{height:"411px"},attrs:{settings:t.settings}},[s("v-list",[t._l(t.supportTickets,function(a){return[s("div",{key:a.userName,staticClass:"listing"},[s("v-list-tile",[s("v-list-tile-avatar",[s("img",{staticClass:"img-responsive",attrs:{src:a.avatar,alt:"user image"}})]),s("v-list-tile-content",[s("v-list-tile-sub-title",[s("div",{staticClass:"d-custom-flex align-items-center mb-2"},[s("h5",{staticClass:"fs-14 mb-0 mr-2"},[t._v(t._s(a.userName))]),1===a.status?s("v-badge",{staticClass:"primary"},[t._v("Open")]):s("v-badge",{staticClass:"warning"},[t._v("Closed")])],1)]),s("p",{key:a.id,staticClass:"fs-14 mb-0 grey--text"},[t._v("            \n\t\t\t\t\t\t\t\t"+t._s(a.body)+"\n\t\t\t\t\t\t\t")]),s("div",{staticClass:"d-custom-flex"},[s("a",{staticClass:"mr-3 ripple",attrs:{href:"javascript:void(0)"}},[s("i",{staticClass:"zmdi zmdi-eye primary--text"})]),s("a",{staticClass:"mr-3",attrs:{href:"javascript:void(0)"}},[s("i",{staticClass:"zmdi zmdi-edit success--text"})]),s("a",{staticClass:"mr-3",attrs:{href:"javascript:void(0)"}},[s("i",{staticClass:"zmdi zmdi-delete error--text"})])])],1),s("v-list-tile-action",{staticClass:"w-20"},[s("span",{staticClass:"fs-12 grey--text"},[t._v(t._s(a.date))])])],1)],1)]})],2)],1)],1)},i=[],r=s("365c"),l={data:function(){return{loader:!0,supportTickets:null,settings:{maxScrollbarLength:100}}},mounted:function(){this.getTickets()},methods:{getTickets:function(){var t=this;r["a"].get("vuely/supportTickets.js").then(function(a){t.loader=!1,t.supportTickets=a.data}).catch(function(t){console.log(t)})}}},n=l,o=s("2877"),c=Object(o["a"])(n,e,i,!1,null,null,null);c.options.__file="SupportTickets.vue";a["a"]=c.exports},"4b4c":function(t,a,s){"use strict";s.d(a,"a",function(){return e});var e={color:{primary:"#5D92F4",warning:"#FFB70F",danger:"#FF3739",success:"#00D014",info:"#00D0BD",white:"#fff",lightGrey:"#E8ECEE"},lineChartAxesColor:"#E9ECEF",legendFontColor:"#AAAEB3",chartGridColor:"#EAEAEA",axesColor:"#657786",shadowColor:"rgba(0,0,0,0.3)"}},"6efc":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pos-relative h-100 overflow-hidden server-load-widget"},[t._m(0),s("div",{staticClass:"server-load-chart",style:t.styles,attrs:{id:"chartdiv"}})])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-custom-flex justify-space-between align-items-center mb-3"},[s("div",[s("span",{staticClass:"fs-12 grey--text"},[t._v("Space")]),s("h5",{staticClass:"mb-0"},[s("span",{staticClass:"primary--text"},[t._v("98GB ")]),s("span",{staticClass:"info--text"},[t._v("/ 124GB")])])]),s("div",[s("span",{staticClass:"fs-12 grey--text"},[t._v("Bandwidth")]),s("h5",{staticClass:"mb-0"},[s("span",{staticClass:"error--text"},[t._v("512MB ")]),s("span",{staticClass:"info--text"},[t._v("/ 1024MB")])])])])}],r=s("4b4c"),l={props:["styles"],mounted:function(){var t=AmCharts.makeChart("chartdiv",{theme:"none",type:"gauge",axes:[{topTextFontSize:16,topTextYOffset:50,axisColor:"#354052",axisThickness:1,endValue:100,gridInside:!0,inside:!0,radius:"75%",valueInterval:20,tickColor:"#354052",startAngle:-90,endAngle:90,bandOutlineAlpha:0,bands:[{color:"#E2E7EE",endValue:100,innerRadius:"105%",radius:"140%",startValue:0},{color:"#39B54A",endValue:0,innerRadius:"105%",radius:"140%",gradientRatio:[-1,0,1],startValue:0}]}],arrows:[{alpha:1,innerRadius:"25%",nailRadius:0,radius:"140%"}]});function a(){var a=Math.round(100*Math.random());t.axes[0].bands[1].color=a>70?r["a"].color.danger:a>50&&a<70?r["a"].color.warning:r["a"].color.success,t.arrows[0].setValue(a),t.axes[0].setTopText(a+"%"),t.axes[0].bands[1].setEndValue(a)}setTimeout(function(){setInterval(a,2e3)},4e3)}},n=l,o=s("2877"),c=Object(o["a"])(n,e,i,!1,null,null,null);c.options.__file="ServerLoad.vue";a["a"]=c.exports},"91b4":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("v-container",{attrs:{fluid:"","px-0":"","py-0":""}},[s("visitors-area-chart")],1),s("v-container",{attrs:{fluid:"","grid-list-xl":""}},[s("v-layout",{staticClass:"stats-card-v4",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xl4:"",lg4:"",md4:"",sm4:"",xs12:"","b-50":""}},[s("stats-card-v4",{attrs:{title:t.$t("message.totalPageViews"),value:"35,455",body:"+5% from yesterday",status:1,data:[20,15,12,6,18,17,20,2],labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],color:t.ChartConfig.color.info}})],1),s("v-flex",{attrs:{xl4:"",lg4:"",md4:"",sm4:"",xs12:"","b-50":""}},[s("stats-card-v4",{attrs:{title:t.$t("message.totalEarnings"),value:"$4,500",body:"-2% from yesterday",status:0,data:[15,20,6,9,18,17,20,2],labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],color:t.ChartConfig.color.warning}})],1),s("v-flex",{attrs:{xl4:"",lg4:"",md4:"",sm4:"",xs12:"","b-50":""}},[s("stats-card-v4",{attrs:{title:t.$t("message.impressions"),value:"45,000",body:"+5% from yesterday",status:1,data:[1,15,12,6,18,17,20,22],labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],color:t.ChartConfig.color.danger}})],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("app-card",{attrs:{heading:t.$t("message.activityAroundWorld"),fullScreen:!0,closeable:!0,reloadable:!0,colClasses:"xl8 lg8 md7 sm6 xs12",contentCustomClass:"pt-0"}},[s("activity-around-world")],1),s("app-card",{attrs:{heading:t.$t("message.deviceSeparations"),fullScreen:!0,closeable:!0,reloadable:!0,colClasses:"xl4 lg4 md5 sm6 xs12",customClasses:"device-seperation-wrap"}},[s("device-separations")],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("app-card",{attrs:{heading:t.$t("message.browserStatics"),fullBlock:!0,fullScreen:!0,closeable:!0,reloadable:!0,colClasses:"xl4 lg4 md4  sm12 xs12"}},[s("browser-statics")],1),s("app-card",{attrs:{heading:t.$t("message.trafficChannel"),fullScreen:!0,closeable:!0,reloadable:!0,footer:!0,colClasses:"xl4 lg4 md4 sm6 xs12",contentCustomClass:"pt-0"}},[s("traffic-channel-v2"),s("span",{staticClass:"grey--text d-custom-flex align-items-center justify-content-end",attrs:{slot:"footer"},slot:"footer"},[s("i",{staticClass:"zmdi zmdi-replay mr-2"}),s("span",{staticClass:"fs-12"},[t._v(t._s(t.$t("message.updated10MinAgo")))])])],1),s("app-card",{attrs:{heading:t.$t("message.serverLoad"),fullScreen:!0,closeable:!0,reloadable:!0,colClasses:"xl4 lg4 md4 sm6 xs12",contentCustomClass:"pt-0 h-100"}},[s("server-load",{attrs:{styles:"width: 100%; height: 275px;"}})],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("app-card",{attrs:{colClasses:"xl6 lg6 md6 sm6 xs12",contentCustomClass:"pb-0 px-0"}},[s("bandwidth-usage-v2")],1),s("app-card",{attrs:{contentCustomClass:"pb-0 px-0",colClasses:"xl6 lg6 md6 sm6 xs12"}},[s("total-downloading")],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("app-card",{attrs:{heading:t.$t("message.notifications"),fullBlock:!0,closeable:!0,reloadable:!0,fullScreen:!0,footer:!0,colClasses:"xl4 lg4 md6 sm12 xs12"}},[s("notifications"),s("div",{staticClass:"d-custom-flex justify-space-between",attrs:{slot:"footer"},slot:"footer"},[s("v-btn",{attrs:{small:"",color:"primary"}},[t._v("View All")]),s("span",{staticClass:"grey--text d-custom-flex align-items-center"},[s("i",{staticClass:"zmdi zmdi-replay mr-2"}),s("span",{staticClass:"fs-12"},[t._v("Updated 10 min ago")])])],1)],1),s("app-card",{attrs:{heading:t.$t("message.supportTickets"),fullBlock:!0,closeable:!0,reloadable:!0,fullScreen:!0,footer:!0,colClasses:"xl8 lg8 md6 sm12 xs12"}},[s("support-tickets"),s("div",{staticClass:"d-custom-flex justify-space-between",attrs:{slot:"footer"},slot:"footer"},[s("v-btn",{attrs:{small:"",color:"primary"}},[t._v("View All")]),s("span",{staticClass:"grey--text d-custom-flex align-items-center"},[s("i",{staticClass:"zmdi zmdi-replay mr-2"}),s("span",{staticClass:"fs-12"},[t._v("Updated 10 min ago")])])],1)],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"xl3 lg3 md6 sm6 xs6 stats-widget-v3"},[s("stats-card-v3",{attrs:{icon:"bookmark",title:t.$t("message.totalBookmarked"),value:"25,700",color:"primary"}})],1),s("v-flex",{staticClass:"xl3 lg3 md6 sm6 xs6 stats-widget-v3"},[s("stats-card-v3",{attrs:{icon:"cloud_download",title:t.$t("message.itemsDownloads"),value:"14,200",color:"success"}})],1),s("v-flex",{staticClass:"xl3 lg3 md6 sm6 xs6 stats-widget-v3"},[s("stats-card-v3",{attrs:{icon:"cloud_upload",title:t.$t("message.itemsUploaded"),value:"5,400",color:"error"}})],1),s("v-flex",{staticClass:"xl3 lg3 md6 sm6 xs6 stats-widget-v3"},[s("stats-card-v3",{attrs:{icon:"insert_chart",title:t.$t("message.totalAnalytics"),value:"1,288",color:"info"}})],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("app-card",{attrs:{heading:t.$t("message.hotKeywords"),fullBlock:!0,closeable:!0,reloadable:!0,fullScreen:!0,footer:!0,colClasses:"xl6 lg6 md6 sm12 xs12"}},[s("hot-keywords"),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("span",{staticClass:"grey--text d-custom-flex align-items-center"},[s("i",{staticClass:"zmdi zmdi-replay mr-2"}),s("span",{staticClass:"fs-12"},[t._v("Updated 10 min ago")])])])],1),s("v-flex",{staticClass:"xl6 lg6 md6 xs12 sm12"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"xl6 lg6 md6 sm6 xs12 d-block"},[s("users-stat")],1),s("v-flex",{staticClass:"xl6 lg6 md6 xs12 sm6 d-block"},[s("platform-users-stat")],1),s("app-card",{attrs:{heading:t.$t("message.serverStatus"),colClasses:"xl12 lg12 md12 xs12 d-xs-half-block w-full",closeable:!0,reloadable:!0,fullScreen:!0,footer:!0,contentCustomClass:"py-0"}},[s("server-status"),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("span",{staticClass:"grey--text d-custom-flex align-items-center"},[s("i",{staticClass:"zmdi zmdi-replay mr-2"}),s("span",{staticClass:"fs-12"},[t._v("Updated 10 min ago")])])])],1)],1)],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"xl6 lg6 md6 sm12 xs12"},[s("customer-support-service")],1),s("v-flex",{staticClass:"xl6 lg6 md6 sm12 xs12"},[s("promo-widget")],1)],1)],1)],1)},i=[],r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mt-4 visitor-area-chart"},[t._m(0),s("div",{staticClass:"px-4 pos-relative"},[s("visitors-stacked-area-chart",{attrs:{height:220}})],1)])},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-custom-flex justify-space-between px-4 mb-4 label-wrap"},[s("h4",[t._v("Visitors")]),s("div",{staticClass:"d-custom-flex justify-space-between w-30"},[s("div",{staticClass:"w-50"},[s("h4",{staticClass:"info--text mb-0"},[t._v("$ 35,455")]),s("p",{staticClass:"fs-12 grey--text mb-0"},[t._v("International Visior")])]),s("div",{staticClass:"w-50"},[s("h4",{staticClass:"primary--text mb-0"},[t._v("$ 35,455")]),s("p",{staticClass:"fs-12 grey--text mb-0"},[t._v("Domestic Visior")])])])])}],n=s("1fca"),o=s("4b4c"),c=s("4da1"),d={extends:n["e"],data:function(){return{gradient1:null,options:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0,display:!1},gridLines:{display:!1,drawBorder:!1,drawTicks:!1}}],xAxes:[{ticks:{display:!0,beginAtZero:!0},gridLines:{display:!1,drawBorder:!1}}]},legend:{display:!1}}}},mounted:function(){var t=this.$refs.canvas.getContext("2d"),a=t.stroke;t.stroke=function(){t.save(),t.shadowColor="rgba(0,0,0,0.5)",t.shadowBlur=8,t.shadowOffsetX=0,t.shadowOffsetY=4,a.apply(this,arguments),t.restore()};this.gradient1=this.$refs.canvas.getContext("2d").createLinearGradient(0,110,0,0),this.gradient1.addColorStop(0,Object(c["b"])(o["a"].color.white,.2)),this.gradient1.addColorStop(.5,Object(c["b"])(o["a"].color.info,.2)),this.gradient2=this.$refs.canvas.getContext("2d").createLinearGradient(0,110,0,0),this.gradient2.addColorStop(0,Object(c["b"])(o["a"].color.white,.1)),this.gradient2.addColorStop(.5,Object(c["b"])(o["a"].color.primary,.1)),this.renderChart({labels:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Data 1",data:[30,70,40,50,20,30,40,50,20,50,70,30],lineTension:.5,backgroundColor:this.gradient2,borderColor:o["a"].color.primary,pointBorderWidth:0,pointHoverRadius:0,pointRadius:0,pointHoverBorderWidth:0,borderWidth:2,fill:!0},{label:"Data 2",data:[45,65,50,20,30,25,20,15,55,45,70,45],lineTension:.5,backgroundColor:this.gradient1,borderColor:o["a"].color.info,pointBorderWidth:0,pointHoverRadius:0,pointRadius:0,pointHoverBorderWidth:0,borderWidth:2,fill:!0}]},this.options)}},u={components:{VisitorsStackedAreaChart:d}},v=u,p=s("2877"),m=Object(p["a"])(v,r,l,!1,null,null,null);m.options.__file="VisitorsAreaChart.vue";var f=m.exports,g=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-list",{staticClass:"traffic-channel-widget"},[s("v-list-tile",[s("p",[t._v("Direct")]),s("div",[s("span",[t._v("55%")]),s("v-progress-linear",{attrs:{value:"55",height:"7",color:"primary"}})],1)]),s("v-list-tile",[s("p",[t._v("Referral")]),s("div",[s("span",[t._v("78%")]),s("v-progress-linear",{attrs:{value:"78",height:"7",color:"primary"}})],1)]),s("v-list-tile",[s("p",[t._v("Facebook")]),s("div",[s("span",[t._v("68%")]),s("v-progress-linear",{attrs:{value:"68",height:"7",color:"primary"}})],1)]),s("v-list-tile",[s("p",[t._v("Google")]),s("div",[s("span",[t._v("23%")]),s("v-progress-linear",{attrs:{value:"23",height:"7",color:"primary"}})],1)]),s("v-list-tile",[s("p",[t._v("Instagram")]),s("div",[s("span",[t._v("57%")]),s("v-progress-linear",{attrs:{value:"57",height:"7",color:"primary"}})],1)])],1)},h=[],C={},b=Object(p["a"])(C,g,h,!1,null,null,null);b.options.__file="TrafficChannelV2.vue";var _=b.exports,x=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"browser-statics-wrapper"},[t._m(0),s("v-list",[s("v-list-tile",[s("div",[s("img",{staticClass:"mr-3",attrs:{src:"/static/img/firefox_icon.png",alt:"firefox_icon",height:"20",width:"20"}}),s("h6",[t._v("Firefox")])]),s("div",{staticClass:"justify-space-between"},[s("span",{staticClass:"fw-light"},[t._v("8,250")]),s("h6",{staticClass:"primary--text"},[t._v("+85%")])])]),s("v-list-tile",[s("div",[s("img",{staticClass:"mr-3",attrs:{src:"/static/img/safari_icon.png",alt:"safari_icon",height:"20",width:"20"}}),s("h6",[t._v("Safari")])]),s("div",{staticClass:"justify-space-between"},[s("span",{staticClass:"fw-light"},[t._v("1,255")]),s("h6",{staticClass:"primary--text"},[t._v("-53%")])])]),s("v-list-tile",[s("div",[s("img",{staticClass:"mr-3",attrs:{src:"/static/img/chrome_icon.png",alt:"chrome_icon",height:"20",width:"20"}}),s("h6",[t._v("Chrome")])]),s("div",{staticClass:"justify-space-between"},[s("span",{staticClass:"fw-light"},[t._v("3,050")]),s("h6",{staticClass:"primary--text"},[t._v("-20%")])])]),s("v-list-tile",[s("div",[s("img",{staticClass:"mr-3",attrs:{src:"/static/img/opera_icon.png",alt:"opera_icon",height:"20",width:"20"}}),s("h6",[t._v("Opera")])]),s("div",{staticClass:"justify-space-between"},[s("span",{staticClass:"fw-light"},[t._v("3,650")]),s("h6",{staticClass:"primary--text"},[t._v("+34%")])])])],1)],1)},y=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"grayish-blue d-custom-flex justify-space-between pa-4"},[s("div",{staticClass:"white--text"},[s("h1",{staticClass:"mb-0"},[t._v("23,488")]),s("p",{staticClass:"mb-0 fs-14"},[t._v("Active Users")])]),s("div",{staticClass:"pr-4"},[s("i",{staticClass:"zmdi font-3x success--text zmdi-accounts"})])])}],w={},S=Object(p["a"])(w,x,y,!1,null,null,null);S.options.__file="BrowserStatics.vue";var k=S.exports,A=s("6efc"),$=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bandwidth-widget"},[s("div",{staticClass:"mb-3 pl-4"},[s("h2",[t._v(t._s(t.$t("message.bandwidthUsage")))]),s("p",{staticClass:"fs-14 mb-0 fw-light"},[t._v("March 2018")])]),s("line-chart-with-area",{attrs:{dataSet:t.bandwidthData,dataLabels:t.labels,lineTension:.5,height:105,color:t.ChartConfig.color.info,enableXAxesLine:!1}})],1)},L=[],E=s("0ba6"),j={data:function(){return{labels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44"],bandwidthData:[40,10,30,40,60,70,60,40,80,25,44,59,20,52,40,80,45,68,40,38,85,64,25,45,65,95,40,10,30,40,60,70,60,40,80,25,14,18,22,65,85,75,95,40],ChartConfig:o["a"]}},components:{LineChartWithArea:E["a"]}},B=j,U=Object(p["a"])(B,$,L,!1,null,null,null);U.options.__file="BandwidthUsageV2.vue";var T=U.exports,F=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bandwidth-widget"},[s("div",{staticClass:"pl-4 mb-3"},[s("h2",[t._v(t._s(t.$t("message.totalDownloading")))]),s("p",{staticClass:"fs-14 mb-0 fw-light"},[t._v("March 2018")])]),s("line-chart-with-area",{attrs:{dataSet:t.bandwidthData,dataLabels:t.labels,lineTension:.5,height:105,color:t.ChartConfig.color.warning,enableXAxesLine:!1}})],1)},O=[],V={data:function(){return{labels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44"],bandwidthData:[40,10,30,40,60,70,60,40,80,25,44,59,20,52,40,80,45,68,40,38,85,64,25,45,65,95,40,10,30,40,60,70,60,40,80,25,14,18,22,65,85,75,95,40],ChartConfig:o["a"]}},components:{LineChartWithArea:E["a"]}},D=V,M=Object(p["a"])(D,F,O,!1,null,null,null);M.options.__file="TotalDownloading.vue";var z=M.exports,W=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("vue-perfect-scrollbar",{staticStyle:{height:"410px"},attrs:{settings:t.settings}},[s("v-list",{staticClass:"notification-wrap",attrs:{"two-line":""}},[t._l(t.notifications,function(a){return[s("v-list-tile",{key:a.id,attrs:{avatar:"",ripple:""},on:{click:function(t){}}},[s("v-list-tile-avatar",[s("v-icon",{attrs:{color:a.iconColor}},[t._v(t._s(a.icon))])],1),s("v-list-tile-content",[s("v-list-tile-sub-title",{staticClass:"grey--text fs-12"},[t._v(t._s(a.label))]),s("v-list-tile-title",[s("h6",{staticClass:"mb-0"},[t._v(t._s(a.body))])])],1),s("v-list-tile-action",[s("v-list-tile-action-text",[t._v(t._s(a.time))])],1)],1)]})],2)],1)},H=[],J={data:function(){return{notifications:[{id:1,body:"New invoice received",label:"Admin",time:"1 Hour Ago",icon:"notifications_active",iconColor:"warning"},{id:2,body:"New Feedback from Aric",label:"Admin",time:"1 Hour Ago",icon:"format_quote",iconColor:"primary"},{id:3,body:"DB overloaded 80% ",label:"Action",time:"1 Hour Ago",icon:"notifications_active",iconColor:"info"},{id:4,body:"System error - Check",label:"Error",time:"1 Hour Ago",icon:"warning",iconColor:"error"},{id:5,body:"System Memory Full",label:"Timeout",time:"1 Hour Ago",icon:"access_alarm",iconColor:"warning"},{id:6,body:"Production server up",label:"System",time:"1 Hour Ago",icon:"access_alarm",iconColor:"primary"},{id:7,body:"Clear server cache for more space",label:"Timeout",time:"1 Hour Ago",icon:"access_alarm",iconColor:"warning"}],settings:{maxScrollbarLength:150}}}},R=J,N=Object(p["a"])(R,W,H,!1,null,null,null);N.options.__file="Notifications.vue";var P=N.exports,G=s("2100"),I=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("app-section-loader",{attrs:{status:t.loader}}),s("vue-perfect-scrollbar",{staticStyle:{height:"584px"},attrs:{settings:t.settings}},[s("v-data-table",{attrs:{headers:t.headers,items:t.keywords,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(a){return[s("td",[t._v(t._s(a.item.name))]),s("td",[t._v(t._s(a.item.visitors))]),s("td",[t._v(t._s(a.item.visitDuration))])]}}])})],1)],1)},K=[],X=s("365c"),Z={data:function(){return{loader:!0,headers:[{text:"Keyword Name",sortable:!1,value:"keywordName"},{text:"Unique Visitors",value:"uniqueVisitors",sortable:!1},{text:"Visit duraton",value:"visitduraton",sortable:!1}],keywords:[],settings:{maxScrollbarLength:150}}},mounted:function(){this.getKeywords()},methods:{getKeywords:function(){var t=this;X["a"].get("vuely/hotKeywords.js").then(function(a){t.loader=!1,t.keywords=a.data}).catch(function(t){console.log(t)})}}},q=Z,Y=Object(p["a"])(q,I,K,!1,null,null,null);Y.options.__file="HotKeywords.vue";var Q=Y.exports,tt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("app-card",{attrs:{customClasses:"user-stats-wrap"}},[s("p",{staticClass:"grey--text fs-12 mb-2"},[t._v(t._s(t.$t("message.maleUsers")))]),s("h4",[t._v("4250(56%)")]),s("v-progress-linear",{attrs:{height:"6"},model:{value:t.maleUsers,callback:function(a){t.maleUsers=a},expression:"maleUsers"}}),s("p",{staticClass:"grey--text fs-12 mb-2"},[t._v(t._s(t.$t("message.femaleUsers")))]),s("h4",[t._v("3250(44%)")]),s("v-progress-linear",{attrs:{color:"warning",height:"6"},model:{value:t.femaleUsers,callback:function(a){t.femaleUsers=a},expression:"femaleUsers"}})],1)},at=[],st={data:function(){return{maleUsers:70,femaleUsers:50}}},et=st,it=Object(p["a"])(et,tt,at,!1,null,null,null);it.options.__file="UsersStat.vue";var rt=it.exports,lt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("app-card",{attrs:{customClasses:"platform-user-stats"}},[s("p",{staticClass:"grey--text fs-12 mb-2"},[t._v(t._s(t.$t("message.androidUsers")))]),s("h4",[t._v("4250(56%)")]),s("v-progress-linear",{attrs:{height:"6",color:"info"},model:{value:t.androidUsers,callback:function(a){t.androidUsers=a},expression:"androidUsers"}}),s("p",{staticClass:"grey--text fs-12 mb-2"},[t._v(t._s(t.$t("message.iOSUsers")))]),s("h4",[t._v("3250(44%)")]),s("v-progress-linear",{attrs:{color:"error",height:"6"},model:{value:t.iosUsers,callback:function(a){t.iosUsers=a},expression:"iosUsers"}})],1)},nt=[],ot={data:function(){return{androidUsers:70,iosUsers:50}}},ct=ot,dt=Object(p["a"])(ct,lt,nt,!1,null,null,null);dt.options.__file="PlatformUsersStat.vue";var ut=dt.exports,vt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"server-status-widget"},[s("ul",{staticClass:"list-unstyled"},t._l(t.serverStatus,function(a){return s("li",{key:a.id},[s("div",{staticClass:"d-custom-flex justify-space-between"},[s("h6",{staticClass:"mb-0"},[t._v(t._s(a.name))]),s("span",{staticClass:"grey--text fs-12"},[t._v(t._s(a.value)+"%")])]),s("v-progress-linear",{attrs:{height:"6",value:a.value}})],1)}))])},pt=[],mt={data:function(){return{serverStatus:[{id:1,name:"CPU Usage (25/35 Cpus)",value:40},{id:2,name:"Domain (2/5 Used)",value:66},{id:3,name:"Database (90/100)",value:90},{id:4,name:"Email Account (25/50 Used)",value:50},{id:5,name:"Disk Usage(120/250GB)",value:55}]}}},ft=mt,gt=Object(p["a"])(ft,vt,pt,!1,null,null,null);gt.options.__file="ServerStatus.vue";var ht=gt.exports,Ct=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"promo-widget"},[s("app-card",{attrs:{customClasses:"border-primary"}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xl3:"",lg3:"",md2:"",sm3:"",xs4:"","b-50":""}},[s("div",{staticClass:"d-custom-flex justify-center align-items-center"},[s("img",{staticClass:"img-responsive",attrs:{alt:"comment",src:"/static/img/Comments.png"}})])]),s("v-flex",{attrs:{xl9:"",lg9:"",md10:"",sm9:"",xs8:"","b-50":""}},[s("div",[s("h4",[t._v("24x7 Customer Support")]),s("p",{staticClass:"fs-12 grey--text"},[t._v("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Even the all-powerful Pointing has no control about the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.")]),s("v-btn",{staticClass:"fs-12",attrs:{color:"primary"}},[t._v(t._s(t.$t("message.letsGetInTouch")))])],1)])],1)],1)],1)},bt=[],_t={},xt=Object(p["a"])(_t,Ct,bt,!1,null,null,null);xt.options.__file="24x7CustomerSupport.vue";var yt=xt.exports,wt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"promo-widget"},[s("app-card",{attrs:{customClasses:"border-info"}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xl3:"",lg3:"",md2:"",sm3:"",xs4:"","b-50":""}},[s("div",{staticClass:"d-custom-flex justify-center align-items-center"},[s("img",{staticClass:"img-responsive",attrs:{alt:"transform",src:"/static/img/Freetransform.png"}})])]),s("v-flex",{attrs:{xl9:"",lg9:"",md10:"",sm9:"",xs8:"","b-50":""}},[s("div",[s("h4",[t._v("Pixel Perfect Design")]),s("p",{staticClass:"fs-12 grey--text"},[t._v("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Even the all-powerful Pointing has no control about the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.")]),s("v-btn",{staticClass:"fs-12",attrs:{color:"info"}},[t._v(t._s(t.$t("message.purchaseVuely")))])],1)])],1)],1)],1)},St=[],kt={},At=Object(p["a"])(kt,wt,St,!1,null,null,null);At.options.__file="PromoWidget.vue";var $t=At.exports,Lt=s("9ac0"),Et=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"pos-relative mb-5"},[s("device-seprations",{attrs:{height:180}}),t._m(0)],1),t._m(1)])},jt=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"overlay-content d-custom-flex justify-center align-items-center"},[s("span",{staticClass:"grey--text font-2x fw-semi-bold"},[t._v("2500")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-custom-flex px-4 justify-space-between align-items-center"},[s("div",{staticClass:"fs-12 grey--text"},[s("span",{staticClass:"v-badge rounded primary mr-2"}),s("span",[t._v("Computer")])]),s("div",{staticClass:"fs-12 grey--text"},[s("span",{staticClass:"v-badge rounded info mr-2"}),s("span",[t._v("Mobile")])]),s("div",{staticClass:"fs-12 grey--text"},[s("span",{staticClass:"v-badge rounded warning mr-2"}),s("span",[t._v("Tablets")])])])}],Bt={extends:n["c"],data:function(){return{options:{cutoutPercentage:70,legend:{display:!1,position:"bottom"}}}},mounted:function(){this.renderChart({labels:["Computer","Mobile","Tablets"],datasets:[{data:[250,100,70],backgroundColor:[o["a"].color.primary,o["a"].color.info,o["a"].color.warning],borderWidth:[0,0,0],hoverBackgroundColor:[o["a"].color.primary,o["a"].color.info,o["a"].color.warning]}]},this.options)}},Ut={components:{DeviceSeprations:Bt}},Tt=Ut,Ft=Object(p["a"])(Tt,Et,jt,!1,null,null,null);Ft.options.__file="DeviceSeprations.vue";var Ot=Ft.exports,Vt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("app-card",[s("div",{staticClass:"d-custom-flex justify-space-between"},[s("div",[s("h2",[t._v(t._s(t.value))]),s("p",{staticClass:"mb-0 fs-12 grey--text"},[t._v(t._s(t.title))])]),s("div",[s("span",{staticClass:"icon-style"},[s("i",{class:"material-icons font-2x "+t.color+"--text"},[t._v(t._s(t.icon))])])])])])},Dt=[],Mt={props:["icon","title","value","color"]},zt=Mt,Wt=Object(p["a"])(zt,Vt,Dt,!1,null,null,null);Wt.options.__file="StatsCardV3.vue";var Ht=Wt.exports,Jt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("app-card",[s("div",{staticClass:"d-custom-flex justify-space-between align-items-center pa-2"},[s("div",{staticClass:"w-50"},[s("p",{staticClass:"mb-2"},[t._v(t._s(t.title))]),s("h4",{staticClass:"mb-2"},[t._v(t._s(t.value)+" "),s("i",{class:[{"ti-arrow-up success--text ml-2":1===t.status,"ti-arrow-down warning--text ml-2":0===t.status}]})]),s("p",{staticClass:"fs-12 grey--text mb-0"},[t._v(t._s(t.body))])]),s("div",{staticClass:"w-50"},[s("line-chartv2",{attrs:{height:60,data:t.data,labels:t.labels,color:t.color}})],1)])])},Rt=[],Nt=s("b5c6"),Pt={props:["title","value","body","status","data","color","labels"],components:{LineChartv2:Nt["a"]}},Gt=Pt,It=Object(p["a"])(Gt,Jt,Rt,!1,null,null,null);It.options.__file="StatsCardV4.vue";var Kt=It.exports,Xt={components:{VisitorsAreaChart:f,TrafficChannelV2:_,BrowserStatics:k,ServerLoad:A["a"],BandwidthUsageV2:T,TotalDownloading:z,Notifications:P,SupportTickets:G["a"],HotKeywords:Q,UsersStat:rt,PlatformUsersStat:ut,ServerStatus:ht,CustomerSupportService:yt,PromoWidget:$t,StatsCardV3:Ht,ActivityAroundWorld:Lt["a"],DeviceSeparations:Ot,StatsCardV4:Kt},data:function(){return{ChartConfig:o["a"]}}},Zt=Xt,qt=Object(p["a"])(Zt,e,i,!1,null,null,null);qt.options.__file="WebAnalytics.vue";a["default"]=qt.exports},"9ac0":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"activity-around-world"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xl6:"",lg6:"",md6:"",xs12:""}},[s("ul",{staticClass:"list-unstyled country-progress"},t._l(t.activitiesInWorld,function(a){return s("li",{key:a.id,staticClass:"d-custom-flex align-items-center py-3 w-80"},[s("img",{staticClass:"img-responsive mr-4",attrs:{width:"45",height:"30",src:"/static/flag-icons/"+a.iso+".png"}}),s("div",{staticClass:"w-100"},[s("div",{staticClass:"mb-2 d-custom-flex justify-space-between align-items-center"},[s("h6",{staticClass:"mb-0"},[t._v(t._s(a.name))]),s("span",{staticClass:"fs-12 grey--text"},[t._v(t._s(a.value)+"%")])]),s("v-progress-linear",{staticClass:"ma-0",attrs:{value:a.value,height:"4"}})],1)])}))]),s("v-flex",{staticClass:"world-map",attrs:{xl6:"",lg6:"",md6:"",xs6:"","b-50":""}},[s("div",{staticStyle:{width:"100%",height:"250px"},attrs:{id:"world-map-markers"}})])],1)],1)},i=[],r=s("1157"),l=s.n(r),n={data:function(){return{activitiesInWorld:[{id:1,iso:"icons8-austria",value:"42",name:"Austria - 4100"},{id:2,iso:"icons8-japan",value:"31",name:"Japan-2300"},{id:3,iso:"icons8-usa",value:"93",name:"USA-2300"},{id:4,iso:"icons8-china",value:"15",name:"China-800"},{id:5,iso:"icons8-france",value:"38",name:"France-3521"}]}},mounted:function(){var t=this;l()(function(){l()("#world-map-markers").vectorMap({map:"world_mill_en",scaleColors:["#C8EEFF","#0071A4"],normalizeFunction:"polynomial",zoomButtons:!1,hoverOpacity:.7,hoverColor:!1,markerStyle:{initial:{fill:t.$store.getters.darkMode?"#727891":"#F7981C",stroke:t.$store.getters.darkMode?"#303030":"#F7981C"}},regionStyle:{initial:{fill:t.$store.getters.darkMode?"#303030":"#E8ECEE"}},backgroundColor:t.$store.getters.darkMode?"#2c3644":"#FFF",markers:[{latLng:[41.9,12.45],name:"Vatican City"},{latLng:[43.73,7.41],name:"Monaco"},{latLng:[-.52,166.93],name:"Nauru"},{latLng:[-8.51,179.21],name:"Tuvalu"},{latLng:[43.93,12.46],name:"San Marino"},{latLng:[47.14,9.52],name:"Liechtenstein"},{latLng:[7.11,171.06],name:"Marshall Islands"},{latLng:[17.3,-62.73],name:"Saint Kitts and Nevis"},{latLng:[3.2,73.22],name:"Maldives"},{latLng:[35.88,14.5],name:"Malta"},{latLng:[12.05,-61.75],name:"Grenada"},{latLng:[13.16,-61.23],name:"Saint Vincent and the Grenadines"},{latLng:[13.16,-59.55],name:"Barbados"},{latLng:[17.11,-61.85],name:"Antigua and Barbuda"},{latLng:[-4.61,55.45],name:"Seychelles"},{latLng:[7.35,134.46],name:"Palau"},{latLng:[42.5,1.51],name:"Andorra"},{latLng:[14.01,-60.98],name:"Saint Lucia"},{latLng:[6.91,158.18],name:"Federated States of Micronesia"},{latLng:[1.3,103.8],name:"Singapore"},{latLng:[1.46,173.03],name:"Kiribati"},{latLng:[-21.13,-175.2],name:"Tonga"},{latLng:[15.3,-61.38],name:"Dominica"},{latLng:[-20.2,57.5],name:"Mauritius"},{latLng:[26.02,50.55],name:"Bahrain"},{latLng:[.33,6.73],name:"São Tomé and Príncipe"}]})})}},o=n,c=s("2877"),d=Object(c["a"])(o,e,i,!1,null,null,null);d.options.__file="ActivityAroundWorld.vue";a["a"]=d.exports},b5c6:function(t,a,s){"use strict";s("c5f6");var e=s("1fca"),i=s("4b4c");a["a"]={extends:e["e"],props:{data:{type:Array,default:function(){return[10,30,30,60,75,10]}},lineTension:{type:Number,default:function(){return.6}},labels:{type:Array,default:function(){return["A","B","C","D","E","F"]}},color:{type:String,default:function(){return i["a"].color.info}},enableShadow:{type:Boolean,default:!1}},data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0,display:!1},gridLines:{display:!1,drawBorder:!1,drawTicks:!1},display:!1}],xAxes:[{ticks:{display:!1,beginAtZero:!0},gridLines:{display:!0,drawBorder:!1},display:!1}]},legend:{display:!1}}}},mounted:function(){if(!1!==this.enableShadow){var t=this.$refs.canvas.getContext("2d"),a=t.stroke;t.stroke=function(){t.save(),t.shadowColor=i["a"].shadowColor,t.shadowBlur=10,t.shadowOffsetX=0,t.shadowOffsetY=6,a.apply(this,arguments),t.restore()}}this.renderChart({labels:this.labels,datasets:[{label:"My First dataset",data:this.data,lineTension:this.lineTension,borderColor:this.color,pointBorderWidth:0,pointHoverRadius:0,pointRadius:0,pointHoverBorderWidth:0,borderWidth:2,fill:!1}]},this.options)}}}}]);
//# sourceMappingURL=chunk-7a8d.f3092178.js.map