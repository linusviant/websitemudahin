(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{542:function(t,e,r){},567:function(t,e,r){"use strict";var n=r(542);r.n(n).a},658:function(t,e,r){"use strict";r.r(e);r(45);var n,c=r(26),l={layout:"default/main",asyncData:(n=Object(c.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,t.next=3,r.post("pricing");case 3:return n=t.sent,t.abrupt("return",{plans:n.data.plans,seo:{title:n.data.seo.title,separator:n.data.seo.separator,description:n.data.seo.description,favicon:n.data.seo.favicon,image:n.data.seo.image}});case 5:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)}),data:function(){return{loading:!1}},head:function(){return{title:this.$t("t_pricing"),titleTemplate:"%s ".concat(this.seo.separator," ").concat(this.seo.title),meta:[{name:"description",content:this.seo.description},{name:"robots",content:"index, follow"},{property:"og:type",content:"article"},{property:"og:title",content:"".concat(this.$t("t_pricing")," ").concat(this.seo.separator," ").concat(this.seo.title)},{property:"og:description",content:this.seo.description},{property:"og:image",content:this.seo.image},{property:"og:url",content:this.$home("pricing")},{property:"og:site_name",content:this.seo.title},{property:"twitter:title",content:"".concat(this.$t("t_pricing")," ").concat(this.seo.separator," ").concat(this.seo.title)},{property:"twitter:description",content:this.seo.description},{property:"twitter:image",content:this.seo.image}],link:[{rel:"icon",type:"image/x-icon",href:this.seo.favicon}]}},methods:{icon:function(t){return this.$homeApi("storage/app/"+t)},frequency:function(t){switch(t){case"daily":return this.$t("t_daily");case"weekly":return this.$t("t_weekly");case"monthly":return this.$t("t_monthly");case"yearly":return this.$t("t_yearly")}}}},o=(r(567),r(52)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t\t")])],1),t._v(" "),r("v-content",[r("v-container",{attrs:{fluid:"","grid-list-xl":""}},[r("v-layout",{attrs:{"align-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"text-center"},[r("h1",{staticClass:"display-1 text-uppercase font-weight-black mb-5"},[t._v(t._s(t.$t("t_select_plan")))])])]),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-container",{attrs:{"grid-list-xl":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.plans,(function(e,n){return[e.price?r("v-flex",{key:n,attrs:{xs6:"",sm4:""}},[r("v-card",{staticClass:"m-card mb-3 plan",attrs:{flat:""}},[r("v-card-title",{staticClass:"layout justify-center pb-0",attrs:{"primary-title":""}},[r("div",{staticClass:"plan-title"},[t._v(t._s(e.title))])]),t._v(" "),r("v-card-text",{staticClass:"text-center px-0"},[r("div",{staticClass:"plan-price"},[r("div",{staticClass:"plan-price-currency"},[r("div",{staticClass:"plan-currency"},[t._v(t._s(e.currency))]),t._v(t._s(e.price)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),r("div",{staticClass:"plan-billing"},[t._v(t._s(t.$t("t_billed",{frequency:t.frequency(e.frequency)})))]),t._v(" "),r("div",{staticClass:"text-center py-4"},[r("v-btn",{staticClass:"px-5 plan-get-started no-border-radius",attrs:{block:"",text:"",color:e.isRecommended?"#ff2e2e":"#24b8ff",depressed:"",dark:"",to:"/pricing/checkout/"+e.slug}},[t._v(t._s(t.$t("t_get_started")))])],1),t._v(" "),r("v-list",{staticClass:"transparent",class:t.$vuetify.rtl?"text-right":"text-left",attrs:{dense:""}},[r("v-list-item",{staticClass:"px-1"},[r("v-list-item-avatar",{staticClass:"ml-0 mr-0"},[r("v-icon",{attrs:{size:"20px",color:"green accent-3"}},[t._v("mdi-check")])],1),t._v(" "),r("v-list-item-content",[r("span",{staticClass:"plan-feature plan-feature-enabled"},[t._v(t._s(t.$t("t_powerful_dashboard")))])])],1),t._v(" "),r("v-list-item",{staticClass:"px-1"},[r("v-list-item-avatar",{staticClass:"ml-0 mr-0"},[r("v-icon",{attrs:{color:e.isStores?"green accent-3":"grey"}},[t._v(t._s(e.isStores?"check":"close"))])],1),t._v(" "),r("v-list-item-content",[r("span",{staticClass:"plan-feature",class:e.isStores?"plan-feature-enabled":"plan-feature-disabled"},[t._v(t._s(t.$t("t_create_shops")))])])],1),t._v(" "),r("v-list-item",{staticClass:"px-1"},[r("v-list-item-avatar",{staticClass:"ml-0 mr-0"},[r("v-icon",{attrs:{color:e.isWorkingHours?"green accent-3":"grey"}},[t._v(t._s(e.isWorkingHours?"check":"close"))])],1),t._v(" "),r("v-list-item-content",[r("span",{staticClass:"plan-feature",class:e.isWorkingHours?"plan-feature-enabled":"plan-feature-disabled"},[t._v(t._s(t.$t("t_business_hours")))])])],1),t._v(" "),r("v-list-item",{staticClass:"px-1"},[r("v-list-item-avatar",{staticClass:"ml-0 mr-0"},[r("v-icon",{attrs:{color:e.isCustomWatermark?"green accent-3":"grey"}},[t._v(t._s(e.isCustomWatermark?"check":"close"))])],1),t._v(" "),r("v-list-item-content",[r("span",{staticClass:"plan-feature",class:e.isCustomWatermark?"plan-feature-enabled":"plan-feature-disabled"},[t._v(t._s(t.$t("t_custom_watermark")))])])],1),t._v(" "),r("v-list-item",{staticClass:"px-1"},[r("v-list-item-avatar",{staticClass:"ml-0 mr-0"},[r("v-icon",{attrs:{color:e.isAutoshare?"green accent-3":"grey"}},[t._v(t._s(e.isAutoshare?"check":"close"))])],1),t._v(" "),r("v-list-item-content",[r("span",{staticClass:"plan-feature",class:e.isAutoshare?"plan-feature-enabled":"plan-feature-disabled"},[t._v(t._s(t.$t("t_social_autoshare")))])])],1),t._v(" "),r("v-list-item",{staticClass:"px-1"},[r("v-list-item-avatar",{staticClass:"ml-0 mr-0"},[r("v-icon",{attrs:{size:"20px",color:"green accent-3"}},[t._v("mdi-check")])],1),t._v(" "),r("v-list-item-content",[r("span",{staticClass:"plan-feature plan-feature-enabled"},[t._v(t._s(t.$t("t_24_support")))])])],1)],1)],1)],1)],1):t._e()]}))],2)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);