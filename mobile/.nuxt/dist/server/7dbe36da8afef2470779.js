exports.ids=[65],exports.modules={184:function(t,e,n){"use strict";n.r(e);var r={layout:"default/admin",middleware:"administrator",async asyncData({app:t,$axios:e,redirect:n}){t.$owgate.allow(t.$auth.user,"access","maintenance")||n("/administrator");let r=await e.get("administrator/maintenance");return{form:{enable:r.data.enabled,token:r.data.enabled?r.data.token:null}}},data:function(){return{errors:[],loading:!1}},head(){return{title:this.$t("t_maintenance_mode"),titleTemplate:`%s ${this.$store.state.settings.separator} ${this.$t("t_dashboard")}`,meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi(`storage/app/${this.$store.state.settings.favicon}`):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{update:function(){this.$owgate.allow(this.$auth.user,"access","maintenance")?(this.loading=!0,this.form.enable||(this.form.token=null),this.$axios.post("administrator/maintenance",{enable:this.form.enable,token:this.form.token}).then(t=>{this.errors=[],this.$toasted.show(this.$t("t_toasted_maintenance_updated"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1}).catch(t=>{this.errors=t.response.data.errors,this.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1})):this.$router.push("/administrator")},generate:function(){this.form.enable?(this.loading=!0,this.$axios.post("administrator/maintenance/generate",{isEnabled:this.form.enable}).then(t=>{this.form.token=t.data,this.loading=!1}).catch(t=>{this.loading=!1})):this.loading=!1}}},o=n(1),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t")])],1),t._v(" "),n("v-container",[n("v-card",{staticClass:"m-card",attrs:{flat:""}},[n("v-card-title",{staticClass:"pa-4",attrs:{"primary-title":""}},[n("div",[n("div",{staticClass:"title"},[t._v(t._s(t.$t("t_maintenance_mode")))]),t._v(" "),n("span",{staticClass:"card-description"},[t._v(t._s(t.$t("t_maintenance_mode_para")))]),t._v(" "),null!==t.form.token?n("div",{staticClass:"pt-3",staticStyle:{width:"100%"}},[n("span",{staticClass:"card-description error--text"},[t._v(t._s(t.$t("t_maintenance_mode_warning")))]),n("br"),t._v(" "),n("a",{staticClass:"pt-2 card-description",staticStyle:{display:"block"},attrs:{href:t.$home("maintenance/disable?token="+t.form.token),target:"_blank"}},[t._v(t._s(t.$home("maintenance/disable?token=")+t.form.token))])]):t._e()])]),t._v(" "),n("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("label",{staticClass:"form-group has-float-label",class:[t.errors.enable?"has-danger":""]},[n("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"blue"},on:{change:t.generate},model:{value:t.form.enable,callback:function(e){t.$set(t.form,"enable",e)},expression:"form.enable"}}),t._v(" "),n("span",[t._v(t._s(t.$t("t_enable_maintenance")))]),t._v(" "),t.errors.enable?n("small",{staticClass:"form-text"},[t._v(t._s(t.errors.enable[0]))]):t._e()],1)]),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{disabled:"",color:"grey lighten-1",label:t.$t("t_maintenance_disable_token"),placeholder:t.$t("t_enter_maintenance_disable_token"),rules:t.errors.token,error:!!t.errors.token},model:{value:t.form.token,callback:function(e){t.$set(t.form,"token",e)},expression:"form.token"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-btn",{staticClass:"mb-1 white--text",attrs:{disabled:t.loading,loading:t.loading,block:"",depressed:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.update(e)}}},[t._v(t._s(t.$t("t_update")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,"2f6b0a62");e.default=component.exports}};