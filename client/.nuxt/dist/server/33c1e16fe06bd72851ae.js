exports.ids=[104],exports.modules={187:function(t,e,r){"use strict";r.r(e);var o={layout:"default/admin",middleware:"administrator",asyncData({app:t,redirect:e}){t.$owgate.allow(t.$auth.user,"access","support")||e("/administrator")},data:function(){return{form:{name:"",email:"",message:"",priority:"low"},priorities:[{id:"low",name:this.$t("t_low_priority")},{id:"medium",name:this.$t("t_medium_priority")},{id:"high",name:this.$t("t_high_priority")},{id:"extra",name:this.$t("t_extra_priority")}],errors:[],loading:!1,confirm:!1}},head(){return{title:this.$t("t_contact_support"),titleTemplate:`%s ${this.$store.state.settings.separator} ${this.$t("t_dashboard")}`,meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi(`storage/app/${this.$store.state.settings.favicon}`):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{contact:function(){this.$owgate.allow(this.$auth.user,"access","support")?(this.loading=!0,this.$axios.post("administrator/support/contact",{name:this.form.name,email:this.form.email,message:this.form.message,priority:this.form.priority}).then(t=>{this.errors=[],this.form={name:"",email:"",message:"",priority:"low"},this.$toasted.show(this.$t("t_toasted_support_message_sent"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1}).catch(t=>{t.response.data.errors&&(this.errors=t.response.data.errors),this.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1})):this.$router.push("/administrator")},extraHigh:function(){"extra"===this.form.priority&&(this.confirm=!0)}}},n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t")])],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:t.confirm,callback:function(e){t.confirm=e},expression:"confirm"}},[r("v-card",[r("v-card-title",{staticClass:"font-weight-bold text-uppercase"},[t._v(t._s(t.$t("t_support_confirm_extra")))]),t._v(" "),r("v-card-text",[t._v("\n\t\t\t\t"+t._s(t.$t("t_support_confirm_extra_para"))+"\n\t\t\t")]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){t.confirm=!1}}},[t._v("\n\t\t\t\t\t"+t._s(t.$t("t_confirm"))+"\n\t\t\t\t")])],1)],1)],1),t._v(" "),r("v-container",[r("v-card",{staticClass:"m-card",attrs:{flat:""}},[r("v-card-title",{staticClass:"pa-4",attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"title"},[t._v(t._s(t.$t("t_contact_mendelmangroup")))]),t._v(" "),r("span",{staticClass:"card-description",domProps:{innerHTML:t._s(t.$t("t_contact_mendelmangroup_para"))}})])]),t._v(" "),r("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_name"),placeholder:t.$t("t_enter_name"),rules:t.errors.name,error:!!t.errors.name},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_email"),placeholder:t.$t("t_enter_email"),rules:t.errors.email,error:!!t.errors.email},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-select",{attrs:{items:t.priorities,"item-text":"name","item-value":"id",color:"grey lighten-1",label:t.$t("t_priority"),placeholder:t.$t("t_choose_priority"),rules:t.errors.priority,error:!!t.errors.priority,dense:""},on:{change:function(e){return t.extraHigh()}},model:{value:t.form.priority,callback:function(e){t.$set(t.form,"priority",e)},expression:"form.priority"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-textarea",{attrs:{color:"grey lighten-1",label:t.$t("t_message"),placeholder:t.$t("t_support_enter_message"),"no-resize":"",rules:t.errors.message,error:!!t.errors.message},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"mb-1 white--text",attrs:{disabled:t.loading,loading:t.loading,block:"",depressed:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.contact(e)}}},[t._v(t._s(t.$t("t_send")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,"bf8dbbac");e.default=component.exports}};