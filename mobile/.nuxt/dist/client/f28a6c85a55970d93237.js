(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{656:function(t,e,r){"use strict";r.r(e);var n,o=r(99),l=(r(45),r(26)),c={layout:"default/main",asyncData:(n=Object(l.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,t.next=3,r.get("browse/deals");case 3:return n=t.sent,t.abrupt("return",{deals:n.data.deals.data,dealsData:n.data.deals,seo:{title:n.data.seo.title,separator:n.data.seo.separator,description:n.data.seo.description,favicon:n.data.seo.favicon,image:n.data.seo.image}});case 5:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)}),data:function(){return{loading:!1}},head:function(){return{title:this.$t("t_recent_deals"),titleTemplate:"%s ".concat(this.seo.separator," ").concat(this.seo.title),meta:[{name:"description",content:this.seo.description},{name:"robots",content:"index, follow"},{property:"og:type",content:"article"},{property:"og:title",content:"".concat(this.$t("t_recent_deals")," ").concat(this.seo.separator," ").concat(this.seo.title)},{property:"og:description",content:this.seo.description},{property:"og:image",content:this.seo.image},{property:"og:url",content:this.$home("browse/deals")},{property:"og:site_name",content:this.seo.title},{property:"twitter:title",content:"".concat(this.$t("t_recent_deals")," ").concat(this.seo.separator," ").concat(this.seo.title)},{property:"twitter:description",content:this.seo.description},{property:"twitter:image",content:this.seo.image}],link:[{rel:"icon",type:"image/x-icon",href:this.seo.favicon}]}},methods:{getNextPage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,this.$axios.get("browse/deals?page="+e).then((function(e){t.dealsData=e.data.deals,t.deals=e.data.deals.data,void 0!==("undefined"==typeof window?"undefined":Object(o.a)(window))&&window.scrollTo(0,0),t.loading=!1})).catch((function(e){t.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1}))},preview:function(t){return 0===t.photosNumber?this.$homeApi("storage/app/uploads/default/classifieds/no-image.png"):this.$homeApi("storage/app/uploads/classifieds/"+t.unique_id+"/preview_0.jpg")},avatar:function(t){return null===t?this.$homeApi("storage/app/uploads/default/avatar/noavatar.png"):this.$homeApi("storage/app/"+t)}}},d=r(52),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t")])],1),t._v(" "),r("v-content",[r("v-container",{attrs:{fluid:"","grid-list-xl":""}},[r("v-layout",{attrs:{"align-center":"",wrap:""}},[r("v-flex",{staticClass:"my-3",attrs:{xs12:""}},[r("div",{staticClass:"text-center"},[r("h1",{staticClass:"display-1 text-uppercase font-weight-black mb-5"},[t._v(t._s(t.$t("t_recent_deals")))])])]),t._v(" "),t._l(t.deals,(function(e,n){return r("v-flex",{key:n,attrs:{xs12:""}},[r("v-card",{staticClass:"m-card",class:e.isUpgraded&&"highlight"===e.upgradedTo?"deal-highlight":""},[r("nuxt-link",{staticStyle:{position:"absolute",height:"100%",width:"100%"},attrs:{to:"/listing/"+e.unique_slug}}),t._v(" "),r("v-container",{attrs:{fluid:"","grid-list-xl":""}},[r("v-layout",[r("v-flex",{attrs:{xs4:""}},[r("v-img",{attrs:{src:t.preview(e),height:"80px",contain:""},on:{click:function(r){return t.$router.push("/listing/"+e.unique_slug)}}})],1),t._v(" "),r("v-flex",{staticClass:"pr-4 pl-0",attrs:{xs8:""}},[r("v-card-title",{staticClass:"pa-0",attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"deal-title"},[e.isUpgraded&&"urgent"===e.upgradedTo?r("span",{staticClass:"deal-urgent"},[t._v(t._s(t.$t("t_urgent")))]):t._e(),t._v(" "+t._s(e.title))]),t._v(" "),r("div",{staticClass:"deal-description"},[t._v(t._s(t.$description(e.description)))])])])],1)],1)],1),t._v(" "),r("v-divider",{attrs:{light:""}}),t._v(" "),r("v-card-actions",{staticClass:"py-0 px-2"},[r("v-list-item",{staticClass:"grow deal-avatar"},[r("v-list-item-avatar",{attrs:{size:"25px"}},[r("v-img",{attrs:{src:t.avatar(e.user.avatar)}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"deal-username"},[t._v(t._s(e.user.username))])],1),t._v(" "),r("v-layout",{staticStyle:{"margin-bottom":"14px"},attrs:{"align-center":"","justify-end":""}},[e.price&&e.currency&&e.locale?r("span",{staticClass:"deal-price"},[t._v(t._s(t.$getCurrency(e.price,e.currency,e.locale)))]):t._e()])],1)],1)],1)],1)})),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"text-center pt-2"},[r("pagination",{attrs:{data:t.dealsData,limit:-1,align:t.$vuetify.rtl?"left":"right"},on:{"pagination-change-page":t.getNextPage}},[r("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[r("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_right":"chevron_left"))])]),t._v(" "),r("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[r("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_left":"chevron_right"))])])])],1)])],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);