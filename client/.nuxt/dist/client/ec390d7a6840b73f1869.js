(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{689:function(t,e,r){"use strict";r.r(e);r(83),r(47);var o,n=r(27),l={layout:"default/admin",middleware:"administrator",asyncData:(o=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,o,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,o=e.$axios,n=e.redirect,r.$owgate.allow(r.$auth.user,"smtp","settings")||n("/administrator"),t.next=4,o.get("administrator/settings/smtp");case 4:return l=t.sent,t.abrupt("return",{form:{driver:l.data.driver,host:l.data.host,port:l.data.port,encryption:l.data.encryption,username:l.data.username,email:l.data.email,name:l.data.name}});case 6:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),data:function(){return{drivers:[{id:"smtp",name:this.$t("t_smtp")},{id:"sendmail",name:this.$t("t_sendmail")},{id:"log",name:this.$t("t_log")}],encryptions:[{id:"tls",name:this.$t("t_tls")},{id:"ssl",name:this.$t("t_ssl")}],errors:[],loading:!1}},head:function(){return{title:this.$t("t_smtp_settings"),titleTemplate:"%s ".concat(this.$store.state.settings.separator," ").concat(this.$t("t_dashboard")),meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi("storage/app/".concat(this.$store.state.settings.favicon)):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{update:function(){var t=this;this.$owgate.allow(this.$auth.user,"smtp","settings")?(this.loading=!0,this.$axios.post("administrator/settings/smtp",{driver:this.form.driver,host:this.form.host,port:this.form.port,encryption:this.form.encryption,username:this.form.username,password:this.form.password,email:this.form.email,name:this.form.name}).then((function(e){t.errors=[],t.$toasted.show(t.$t("t_toasted_smtp_settings_updated"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1})).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),t.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1}))):this.$router.push("/administrator")}}},m=r(52),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t")])],1),t._v(" "),r("v-container",[r("v-card",{staticClass:"m-card",attrs:{flat:""}},[r("v-card-title",{staticClass:"pa-4",attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"title"},[t._v(t._s(t.$t("t_smtp_settings")))]),t._v(" "),r("span",{staticClass:"card-description"},[t._v(t._s(t.$t("t_smtp_settings_para")))])])]),t._v(" "),r("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-select",{attrs:{items:t.drivers,"item-text":"name","item-value":"id",color:"grey lighten-1",label:t.$t("t_driver"),placeholder:t.$t("t_driver_para"),rules:t.errors.driver,error:!!t.errors.driver,dense:""},model:{value:t.form.driver,callback:function(e){t.$set(t.form,"driver",e)},expression:"form.driver"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_smtp_host"),placeholder:t.$t("t_enter_smtp_host"),rules:t.errors.host,error:!!t.errors.host},model:{value:t.form.host,callback:function(e){t.$set(t.form,"host",e)},expression:"form.host"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_port"),placeholder:t.$t("t_enter_port"),rules:t.errors.port,error:!!t.errors.port},model:{value:t.form.port,callback:function(e){t.$set(t.form,"port",e)},expression:"form.port"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-select",{attrs:{items:t.encryptions,"item-text":"name","item-value":"id",color:"grey lighten-1",label:t.$t("t_encryption_protocol"),placeholder:t.$t("t_choose_encryption_protocol"),rules:t.errors.encryption,error:!!t.errors.encryption,dense:""},model:{value:t.form.encryption,callback:function(e){t.$set(t.form,"encryption",e)},expression:"form.encryption"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_smtp_username"),placeholder:t.$t("t_enter_smtp_username"),rules:t.errors.username,error:!!t.errors.username},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_smtp_password"),placeholder:t.$t("t_enter_smtp_password"),rules:t.errors.password,error:!!t.errors.password},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_smtp_email"),placeholder:t.$t("t_enter_smtp_email"),rules:t.errors.email,error:!!t.errors.email},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_smtp_name"),placeholder:t.$t("t_enter_smtp_name"),rules:t.errors.name,error:!!t.errors.name},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"mb-1 white--text",attrs:{disabled:t.loading,loading:t.loading,block:"",depressed:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.update(e)}}},[t._v(t._s(t.$t("t_update")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);