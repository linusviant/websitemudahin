(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{679:function(e,t,r){"use strict";r.r(t);r(83);var c={layout:"default/admin",middleware:"administrator",asyncData:function(e){var t=e.app,r=e.redirect;t.$owgate.allow(t.$auth.user,"create","roles")||r("/administrator")},data:function(){return{form:{name:"",access_plans:!1,create_plans:!1,edit_plans:!1,delete_plans:!1,access_currencies:!1,create_currencies:!1,edit_currencies:!1,delete_currencies:!1,access_geolocation:!1,create_geolocation:!1,edit_geolocation:!1,delete_geolocation:!1,access_roles:!1,create_roles:!1,edit_roles:!1,delete_roles:!1,access_themes:!1,edit_themes:!1,request_themes:!1,access_settings:!1,access_general_settings:!1,access_auth_settings:!1,access_smtp_settings:!1,access_security_settings:!1,access_geo_settings:!1,access_seo_settings:!1,access_uploading_settings:!1,access_payment_gateways_settings:!1,access_social_media_settings:!1,access_watermark_settings:!1,access_footer_settings:!1,access_users_subscriptions:!1,access_payment_gateways:!1,access_sms_services:!1,access_clouds:!1,access_advertisements:!1,access_support:!1,access_maintenance:!1},errors:[],loading:!1}},head:function(){return{title:this.$t("t_create_owner_role"),titleTemplate:"%s ".concat(this.$store.state.settings.separator," ").concat(this.$t("t_dashboard")),meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi("storage/app/".concat(this.$store.state.settings.favicon)):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{create:function(){var e=this;this.$owgate.allow(this.$auth.user,"create","roles")?(this.loading=!0,this.$axios.post("administrator/roles/options/create/owner",{name:this.form.name,access_plans:this.form.access_plans,create_plans:this.form.create_plans,edit_plans:this.form.edit_plans,delete_plans:this.form.delete_plans,access_currencies:this.form.access_currencies,create_currencies:this.form.create_currencies,edit_currencies:this.form.edit_currencies,delete_currencies:this.form.delete_currencies,access_geolocation:this.form.access_geolocation,create_geolocation:this.form.create_geolocation,edit_geolocation:this.form.edit_geolocation,delete_geolocation:this.form.delete_geolocation,access_roles:this.form.access_roles,create_roles:this.form.create_roles,edit_roles:this.form.edit_roles,delete_roles:this.form.delete_roles,access_themes:this.form.access_themes,edit_themes:this.form.edit_themes,request_themes:this.form.request_themes,access_settings:this.form.access_settings,access_general_settings:this.form.access_general_settings,access_auth_settings:this.form.access_auth_settings,access_smtp_settings:this.form.access_smtp_settings,access_security_settings:this.form.access_security_settings,access_geo_settings:this.form.access_geo_settings,access_seo_settings:this.form.access_seo_settings,access_uploading_settings:this.form.access_uploading_settings,access_payment_gateways_settings:this.form.access_payment_gateways_settings,access_social_media_settings:this.form.access_social_media_settings,access_watermark_settings:this.form.access_watermark_settings,access_footer_settings:this.form.access_footer_settings,access_users_subscriptions:this.form.access_users_subscriptions,access_payment_gateways:this.form.access_payment_gateways,access_sms_services:this.form.access_sms_services,access_clouds:this.form.access_clouds,access_advertisements:this.form.access_advertisements,access_support:this.form.access_support,access_maintenance:this.form.access_maintenance}).then((function(t){e.errors=[],e.form={name:"",access_plans:!1,create_plans:!1,edit_plans:!1,delete_plans:!1,access_currencies:!1,create_currencies:!1,edit_currencies:!1,delete_currencies:!1,access_geolocation:!1,create_geolocation:!1,edit_geolocation:!1,delete_geolocation:!1,access_roles:!1,create_roles:!1,edit_roles:!1,delete_roles:!1,access_themes:!1,edit_themes:!1,request_themes:!1,access_settings:!1,access_general_settings:!1,access_auth_settings:!1,access_smtp_settings:!1,access_security_settings:!1,access_geo_settings:!1,access_seo_settings:!1,access_uploading_settings:!1,access_payment_gateways_settings:!1,access_social_media_settings:!1,access_watermark_settings:!1,access_footer_settings:!1,access_users_subscriptions:!1,access_payment_gateways:!1,access_sms_services:!1,access_clouds:!1,access_advertisements:!1,access_support:!1,access_maintenance:!1},e.$toasted.show(e.$t("t_toasted_owner_role_created"),{icon:"done_all",className:e.$vuetify.rtl?"toasted-rtl":""}),e.loading=!1})).catch((function(t){e.errors=t.response.data.errors,e.$toasted.error(e.$t("t_toasted_something_went_wrong"),{icon:"error",className:e.$vuetify.rtl?"toasted-rtl":""}),e.loading=!1}))):this.$router.push("/administrator")}}},o=r(52),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[e._v("\n\t\t\t"+e._s(e.$t("t_loading"))+"\n\t\t")])],1),e._v(" "),r("v-container",[r("v-card",{staticClass:"m-card",attrs:{flat:""}},[r("v-card-title",{staticClass:"pa-4",attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"title"},[e._v(e._s(e.$t("t_create_owner_role")))]),e._v(" "),r("span",{staticClass:"card-description"},[e._v(e._s(e.$t("t_create_owner_role_para")))])])]),e._v(" "),r("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:e.$t("t_role_name"),placeholder:e.$t("t_enter_role_name"),counter:"60",maxlength:"60",rules:e.errors.name,error:!!e.errors.name},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_plans?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"red"},model:{value:e.form.access_plans,callback:function(t){e.$set(e.form,"access_plans",t)},expression:"form.access_plans"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_access_packages_plans")))]),e._v(" "),e.errors.access_plans?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_plans[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.create_plans?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_plans,color:"red"},model:{value:e.form.create_plans,callback:function(t){e.$set(e.form,"create_plans",t)},expression:"form.create_plans"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_create_plans")))]),e._v(" "),e.errors.create_plans?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.create_plans[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.edit_plans?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_plans,color:"red"},model:{value:e.form.edit_plans,callback:function(t){e.$set(e.form,"edit_plans",t)},expression:"form.edit_plans"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_edit_plans")))]),e._v(" "),e.errors.edit_plans?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.edit_plans[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.delete_plans?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_plans,color:"red"},model:{value:e.form.delete_plans,callback:function(t){e.$set(e.form,"delete_plans",t)},expression:"form.delete_plans"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_delete_plans")))]),e._v(" "),e.errors.delete_plans?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.delete_plans[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_currencies?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"red"},model:{value:e.form.access_currencies,callback:function(t){e.$set(e.form,"access_currencies",t)},expression:"form.access_currencies"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_currencies")))]),e._v(" "),e.errors.access_currencies?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_currencies[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.create_currencies?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_currencies,color:"red"},model:{value:e.form.create_currencies,callback:function(t){e.$set(e.form,"create_currencies",t)},expression:"form.create_currencies"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_create_currencies")))]),e._v(" "),e.errors.create_currencies?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.create_currencies[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.edit_currencies?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_currencies,color:"red"},model:{value:e.form.edit_currencies,callback:function(t){e.$set(e.form,"edit_currencies",t)},expression:"form.edit_currencies"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_edit_currencies")))]),e._v(" "),e.errors.edit_currencies?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.edit_currencies[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.delete_currencies?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_currencies,color:"red"},model:{value:e.form.delete_currencies,callback:function(t){e.$set(e.form,"delete_currencies",t)},expression:"form.delete_currencies"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_delete_currencies")))]),e._v(" "),e.errors.delete_currencies?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.delete_currencies[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_geolocation?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"red"},model:{value:e.form.access_geolocation,callback:function(t){e.$set(e.form,"access_geolocation",t)},expression:"form.access_geolocation"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_geo")))]),e._v(" "),e.errors.access_geolocation?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_geolocation[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.create_geolocation?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_geolocation,color:"red"},model:{value:e.form.create_geolocation,callback:function(t){e.$set(e.form,"create_geolocation",t)},expression:"form.create_geolocation"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_create_geo")))]),e._v(" "),e.errors.create_geolocation?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.create_geolocation[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.edit_geolocation?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_geolocation,color:"red"},model:{value:e.form.edit_geolocation,callback:function(t){e.$set(e.form,"edit_geolocation",t)},expression:"form.edit_geolocation"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_edit_geo")))]),e._v(" "),e.errors.edit_geolocation?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.edit_geolocation[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.delete_geolocation?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_geolocation,color:"red"},model:{value:e.form.delete_geolocation,callback:function(t){e.$set(e.form,"delete_geolocation",t)},expression:"form.delete_geolocation"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_delete_geo")))]),e._v(" "),e.errors.delete_geolocation?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.delete_geolocation[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_roles?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"red"},model:{value:e.form.access_roles,callback:function(t){e.$set(e.form,"access_roles",t)},expression:"form.access_roles"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_roles")))]),e._v(" "),e.errors.access_roles?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_roles[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.create_roles?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_roles,color:"red"},model:{value:e.form.create_roles,callback:function(t){e.$set(e.form,"create_roles",t)},expression:"form.create_roles"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_create_roles")))]),e._v(" "),e.errors.create_roles?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.create_roles[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.edit_roles?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_roles,color:"red"},model:{value:e.form.edit_roles,callback:function(t){e.$set(e.form,"edit_roles",t)},expression:"form.edit_roles"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_edit_roles")))]),e._v(" "),e.errors.edit_roles?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.edit_roles[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.delete_roles?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_roles,color:"red"},model:{value:e.form.delete_roles,callback:function(t){e.$set(e.form,"delete_roles",t)},expression:"form.delete_roles"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_delete_roles")))]),e._v(" "),e.errors.delete_roles?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.delete_roles[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_themes?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"red"},model:{value:e.form.access_themes,callback:function(t){e.$set(e.form,"access_themes",t)},expression:"form.access_themes"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_themes")))]),e._v(" "),e.errors.access_themes?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_themes[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs6:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.edit_themes?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_themes,color:"red"},model:{value:e.form.edit_themes,callback:function(t){e.$set(e.form,"edit_themes",t)},expression:"form.edit_themes"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_edit_themes")))]),e._v(" "),e.errors.edit_themes?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.edit_themes[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs6:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.request_themes?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_themes,color:"red"},model:{value:e.form.request_themes,callback:function(t){e.$set(e.form,"request_themes",t)},expression:"form.request_themes"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_request_themes")))]),e._v(" "),e.errors.request_themes?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.request_themes[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_settings?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"red"},model:{value:e.form.access_settings,callback:function(t){e.$set(e.form,"access_settings",t)},expression:"form.access_settings"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_settings")))]),e._v(" "),e.errors.access_settings?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_settings[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_general_settings?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_settings,color:"red"},model:{value:e.form.access_general_settings,callback:function(t){e.$set(e.form,"access_general_settings",t)},expression:"form.access_general_settings"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_settings_general")))]),e._v(" "),e.errors.access_general_settings?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_general_settings[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_auth_settings?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_settings,color:"red"},model:{value:e.form.access_auth_settings,callback:function(t){e.$set(e.form,"access_auth_settings",t)},expression:"form.access_auth_settings"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_settings_authentication")))]),e._v(" "),e.errors.access_auth_settings?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_auth_settings[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_smtp_settings?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_settings,color:"red"},model:{value:e.form.access_smtp_settings,callback:function(t){e.$set(e.form,"access_smtp_settings",t)},expression:"form.access_smtp_settings"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_settings_smtp")))]),e._v(" "),e.errors.access_smtp_settings?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_smtp_settings[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_security_settings?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_settings,color:"red"},model:{value:e.form.access_security_settings,callback:function(t){e.$set(e.form,"access_security_settings",t)},expression:"form.access_security_settings"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_settings_security")))]),e._v(" "),e.errors.access_security_settings?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_security_settings[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_geo_settings?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_settings,color:"red"},model:{value:e.form.access_geo_settings,callback:function(t){e.$set(e.form,"access_geo_settings",t)},expression:"form.access_geo_settings"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_settings_geolocation")))]),e._v(" "),e.errors.access_geo_settings?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_geo_settings[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_seo_settings?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_settings,color:"red"},model:{value:e.form.access_seo_settings,callback:function(t){e.$set(e.form,"access_seo_settings",t)},expression:"form.access_seo_settings"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_settings_seo")))]),e._v(" "),e.errors.access_seo_settings?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_seo_settings[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_uploading_settings?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_settings,color:"red"},model:{value:e.form.access_uploading_settings,callback:function(t){e.$set(e.form,"access_uploading_settings",t)},expression:"form.access_uploading_settings"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_settings_uploading")))]),e._v(" "),e.errors.access_uploading_settings?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_uploading_settings[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_payment_gateways_settings?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_settings,color:"red"},model:{value:e.form.access_payment_gateways_settings,callback:function(t){e.$set(e.form,"access_payment_gateways_settings",t)},expression:"form.access_payment_gateways_settings"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_settings_payments")))]),e._v(" "),e.errors.access_payment_gateways_settings?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_payment_gateways_settings[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_social_media_settings?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_settings,color:"red"},model:{value:e.form.access_social_media_settings,callback:function(t){e.$set(e.form,"access_social_media_settings",t)},expression:"form.access_social_media_settings"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_settings_social")))]),e._v(" "),e.errors.access_social_media_settings?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_social_media_settings[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_watermark_settings?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_settings,color:"red"},model:{value:e.form.access_watermark_settings,callback:function(t){e.$set(e.form,"access_watermark_settings",t)},expression:"form.access_watermark_settings"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_settings_watermark")))]),e._v(" "),e.errors.access_watermark_settings?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_watermark_settings[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_footer_settings?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_settings,color:"red"},model:{value:e.form.access_footer_settings,callback:function(t){e.$set(e.form,"access_footer_settings",t)},expression:"form.access_footer_settings"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_settings_footer")))]),e._v(" "),e.errors.access_footer_settings?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_footer_settings[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_users_subscriptions?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"red"},model:{value:e.form.access_users_subscriptions,callback:function(t){e.$set(e.form,"access_users_subscriptions",t)},expression:"form.access_users_subscriptions"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_users_subscriptions")))]),e._v(" "),e.errors.access_users_subscriptions?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_users_subscriptions[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_payment_gateways?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"red"},model:{value:e.form.access_payment_gateways,callback:function(t){e.$set(e.form,"access_payment_gateways",t)},expression:"form.access_payment_gateways"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_payments_gateways")))]),e._v(" "),e.errors.access_payment_gateways?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_payment_gateways[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_sms_services?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"red"},model:{value:e.form.access_sms_services,callback:function(t){e.$set(e.form,"access_sms_services",t)},expression:"form.access_sms_services"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_sms")))]),e._v(" "),e.errors.access_sms_services?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_sms_services[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_clouds?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"red"},model:{value:e.form.access_clouds,callback:function(t){e.$set(e.form,"access_clouds",t)},expression:"form.access_clouds"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_clouds")))]),e._v(" "),e.errors.access_clouds?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_clouds[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_advertisements?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"red"},model:{value:e.form.access_advertisements,callback:function(t){e.$set(e.form,"access_advertisements",t)},expression:"form.access_advertisements"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_advertisements")))]),e._v(" "),e.errors.access_advertisements?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_advertisements[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_support?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"red"},model:{value:e.form.access_support,callback:function(t){e.$set(e.form,"access_support",t)},expression:"form.access_support"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_support")))]),e._v(" "),e.errors.access_support?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_support[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[e.errors.access_maintenance?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"red"},model:{value:e.form.access_maintenance,callback:function(t){e.$set(e.form,"access_maintenance",t)},expression:"form.access_maintenance"}}),e._v(" "),r("span",[e._v(e._s(e.$t("t_role_access_maintenance")))]),e._v(" "),e.errors.access_maintenance?r("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_maintenance[0]))]):e._e()],1)]),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"mb-1 white--text",attrs:{disabled:e.loading,loading:e.loading,block:"",depressed:"",color:"blue"},on:{click:function(t){return t.preventDefault(),e.create(t)}}},[e._v(e._s(e.$t("t_create")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);