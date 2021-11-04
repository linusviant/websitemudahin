(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{654:function(t,e,o){"use strict";o.r(e);var n,r=o(97),c=(o(47),o(27)),l={layout:"default/main",asyncData:(n=Object(c.a)(regeneratorRuntime.mark((function t(e){var o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.$axios,t.next=3,o.get("browse/shops");case 3:return n=t.sent,t.abrupt("return",{shopsData:n.data.shops,shops:n.data.shops.data,seo:{title:n.data.seo.title,separator:n.data.seo.separator,description:n.data.seo.description,favicon:n.data.seo.favicon,image:n.data.seo.image}});case 5:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)}),data:function(){return{loading:!1}},head:function(){return{title:this.$t("t_browse_shops"),titleTemplate:"%s ".concat(this.seo.separator," ").concat(this.seo.title),meta:[{name:"description",content:this.seo.description},{name:"robots",content:"index, follow"},{property:"og:type",content:"article"},{property:"og:title",content:"".concat(this.$t("t_browse_shops")," ").concat(this.seo.separator," ").concat(this.seo.title)},{property:"og:description",content:this.seo.description},{property:"og:image",content:this.seo.image},{property:"og:url",content:this.$home("browse/shops")},{property:"og:site_name",content:this.seo.title},{property:"twitter:title",content:"".concat(this.$t("t_browse_shops")," ").concat(this.seo.separator," ").concat(this.seo.title)},{property:"twitter:description",content:this.seo.description},{property:"twitter:image",content:this.seo.image}],link:[{rel:"icon",type:"image/x-icon",href:this.seo.favicon}]}},methods:{getNextPage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,this.$axios.get("browse/shops?page="+e).then((function(e){console.log(e.data),t.shopsData=e.data.shops,t.shops=e.data.shops.data,void 0!==("undefined"==typeof window?"undefined":Object(r.a)(window))&&window.scrollTo(0,0),t.loading=!1})).catch((function(e){t.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1}))},cover:function(t){return null===t?this.$homeApi("storage/app/uploads/default/store/no-cover.png"):this.$homeApi("storage/app/"+t)},logo:function(t){return null===t?this.$homeApi("storage/app/uploads/default/store/no-logo.png"):this.$homeApi("storage/app/"+t)}}},h=o(52),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[o("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t")])],1),t._v(" "),o("v-content",[o("v-container",{attrs:{fluid:"","grid-list-xl":""}},[o("v-layout",{attrs:{"align-center":"",wrap:""}},[o("v-flex",{staticClass:"my-3 pt-5",attrs:{xs12:""}},[o("div",{staticClass:"text-center"},[o("h1",{staticClass:"pt-5 display-1 text-uppercase font-weight-black mb-5"},[t._v(t._s(t.$t("t_browse_shops")))])])]),t._v(" "),t._l(t.shops,(function(e,n){return o("v-flex",{key:n,staticClass:"mb-5",attrs:{xs3:""}},[o("v-card",{staticClass:"m-card store-card",attrs:{flat:""}},[o("v-img",{staticClass:"text-center",attrs:{"aspect-ratio":16/9,height:"150","lazy-src":t.$homeApi("public/images/default/lazy.jpg"),src:t.cover(e.cover)}},[o("v-container",{staticClass:"pa-0",attrs:{"fill-height":""}},[o("v-layout",{attrs:{"align-center":"","justify-center":""}},[o("nuxt-link",{attrs:{to:"/shop/"+e.store}},[o("v-avatar",{staticClass:"my-4",attrs:{size:"60",color:"grey lighten-4"}},[o("img",{attrs:{src:t.logo(e.logo)}})])],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"text-center px-3 py-3"},[o("div",{staticClass:"pb-2"},[o("nuxt-link",{staticClass:"store-title",attrs:{to:"/shop/"+e.store}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t    \t")]),t._v(" "),o("div",{staticClass:"tagline"},[t._v(t._s(e.subtitle))])],1),t._v(" "),o("div",{staticClass:"pb-4"}),t._v(" "),o("div",{staticClass:"follow-btn"},[o("nuxt-link",{attrs:{to:"/shop/"+e.store}},[o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{icon:"",text:"",color:"#c0c0c0",ripple:""}},n),[o("v-icon",{attrs:{size:"20px"}},[t._v("mdi-chevron-right")])],1)]}}],null,!0)},[t._v(" "),o("span",[t._v(t._s(t.$t("t_visit_shop",{shop:e.title})))])])],1)],1)])],1)],1)})),t._v(" "),o("v-flex",{attrs:{xs12:""}},[o("div",{staticClass:"text-center pt-2"},[o("pagination",{attrs:{data:t.shopsData,limit:8,align:t.$vuetify.rtl?"left":"right"},on:{"pagination-change-page":t.getNextPage}},[o("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[o("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_right":"chevron_left"))])]),t._v(" "),o("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[o("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_left":"chevron_right"))])])])],1)])],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);