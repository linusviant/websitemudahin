(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{604:function(t,e,r){"use strict";r.r(e);r(47);var o,l=r(27),n={layout:"default/admin",middleware:"administrator",asyncData:(o=Object(l.a)(regeneratorRuntime.mark((function t(e){var r,o,l,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,o=e.$axios,l=e.redirect,r.$owgate.allow(r.$auth.user,"access","settings")||l("/administrator"),t.next=4,o.get("administrator/settings/posting");case 4:return n=t.sent,t.abrupt("return",{form:{deals_per_day:n.data.deals_day,deals_expires_after:n.data.deals_life,deals_max_images:n.data.deals_images}});case 6:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),data:function(){return{errors:[],loading:!1}},head:function(){return{title:this.$t("t_posting_settings"),titleTemplate:"%s ".concat(this.$store.state.settings.separator," ").concat(this.$t("t_dashboard")),meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi("storage/app/".concat(this.$store.state.settings.favicon)):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{update:function(){var t=this;this.$owgate.allow(this.$auth.user,"access","settings")?(this.loading=!0,this.$axios.post("administrator/settings/posting",{deals_per_day:this.form.deals_per_day,deals_expires_after:this.form.deals_expires_after,deals_max_images:this.form.deals_max_images}).then((function(e){t.errors=[],t.$toasted.show(t.$t("t_toasted_posting_settings_updated"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1})).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),t.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1}))):this.$router.push("/administrator")}}},d=r(52),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t")])],1),t._v(" "),r("v-container",[r("v-card",{staticClass:"m-card",attrs:{flat:""}},[r("v-card-title",{staticClass:"pa-4",attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"title"},[t._v(t._s(t.$t("t_posting_settings")))]),t._v(" "),r("span",{staticClass:"card-description"},[t._v(t._s(t.$t("t_posting_settings_para")))])])]),t._v(" "),r("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_plan_deals_limits"),placeholder:t.$t("t_enter_plan_deals_limits"),rules:t.errors.deals_per_day,error:!!t.errors.deals_per_day,type:"number"},model:{value:t.form.deals_per_day,callback:function(e){t.$set(t.form,"deals_per_day",e)},expression:"form.deals_per_day"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_plan_deal_expiration_period"),placeholder:t.$t("t_enter_plan_deal_expiration_period"),rules:t.errors.deals_expires_after,error:!!t.errors.deals_expires_after,type:"number"},model:{value:t.form.deals_expires_after,callback:function(e){t.$set(t.form,"deals_expires_after",e)},expression:"form.deals_expires_after"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_plan_deals_photos_limits"),placeholder:t.$t("t_enter_plan_deals_photos_limits"),rules:t.errors.deals_max_images,error:!!t.errors.deals_max_images,type:"number"},model:{value:t.form.deals_max_images,callback:function(e){t.$set(t.form,"deals_max_images",e)},expression:"form.deals_max_images"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"mb-1 white--text",attrs:{disabled:t.loading,loading:t.loading,block:"",depressed:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.update(e)}}},[t._v(t._s(t.$t("t_update")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);