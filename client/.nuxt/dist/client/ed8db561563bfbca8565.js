(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{725:function(t,e,r){"use strict";r.r(e);r(47);var o,d=r(27),l={layout:"default/admin",middleware:"administrator",asyncData:(o=Object(d.a)(regeneratorRuntime.mark((function t(e){var r,o,d,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,o=e.$axios,d=e.redirect,r.$owgate.allow(r.$auth.user,"access","advertisements")||d("/administrator"),t.next=4,o.get("administrator/advertisements");case 4:return l=t.sent,t.abrupt("return",{form:{ad_deal_sidebar:l.data.ad_deal_sidebar,ad_deal_top_related:l.data.ad_deal_top_related,ad_deal_bottom_related:l.data.ad_deal_bottom_related}});case 6:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),data:function(){return{errors:[],loading:!1}},head:function(){return{title:this.$t("t_advertisements"),titleTemplate:"%s ".concat(this.$store.state.settings.separator," ").concat(this.$t("t_dashboard")),meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi("storage/app/".concat(this.$store.state.settings.favicon)):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{update:function(){var t=this;this.$owgate.allow(this.$auth.user,"access","advertisements")?(this.loading=!0,this.$axios.post("administrator/advertisements",{ad_deal_sidebar:this.form.ad_deal_sidebar,ad_deal_top_related:this.form.ad_deal_top_related,ad_deal_bottom_related:this.form.ad_deal_bottom_related}).then((function(e){t.errors=[],t.$toasted.show(t.$t("t_toasted_advertisements_updated"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1})).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),t.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1}))):this.$router.push("/administrator")}}},n=r(52),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t")])],1),t._v(" "),r("v-container",[r("v-card",{staticClass:"m-card",attrs:{flat:""}},[r("v-card-title",{staticClass:"pa-4",attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"title"},[t._v(t._s(t.$t("t_advertisements")))]),t._v(" "),r("span",{staticClass:"card-description"},[t._v(t._s(t.$t("t_adsense_paragraph")))])])]),t._v(" "),r("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-textarea",{attrs:{color:"grey lighten-1",label:t.$t("t_deal_sidebar_ad"),placeholder:this.$t("t_put_ad_code"),"no-resize":"",rules:t.errors.ad_deal_sidebar,error:!!t.errors.ad_deal_sidebar},model:{value:t.form.ad_deal_sidebar,callback:function(e){t.$set(t.form,"ad_deal_sidebar",e)},expression:"form.ad_deal_sidebar"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-textarea",{attrs:{color:"grey lighten-1",label:t.$t("t_related_deals_top_ad"),placeholder:this.$t("t_put_ad_code"),"no-resize":"",rules:t.errors.ad_deal_top_related,error:!!t.errors.ad_deal_top_related},model:{value:t.form.ad_deal_top_related,callback:function(e){t.$set(t.form,"ad_deal_top_related",e)},expression:"form.ad_deal_top_related"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-textarea",{attrs:{color:"grey lighten-1",label:t.$t("t_related_deals_bottom_ad"),placeholder:this.$t("t_put_ad_code"),"no-resize":"",rules:t.errors.ad_deal_bottom_related,error:!!t.errors.ad_deal_bottom_related},model:{value:t.form.ad_deal_bottom_related,callback:function(e){t.$set(t.form,"ad_deal_bottom_related",e)},expression:"form.ad_deal_bottom_related"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"mb-1 white--text",attrs:{disabled:t.loading,loading:t.loading,block:"",depressed:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.update(e)}}},[t._v(t._s(t.$t("t_update")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);