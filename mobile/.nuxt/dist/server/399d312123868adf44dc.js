exports.ids=[100],exports.modules={194:function(t,e,r){"use strict";r.r(e);var o={layout:"default/admin",middleware:"administrator",async asyncData({app:t,$axios:e,redirect:r}){t.$owgate.allow(t.$auth.user,"watermark","settings")||r("/administrator");let o=await e.get("administrator/settings/watermark");return{form:{position:o.data.position,enabled:o.data.isActive}}},data:function(){return{positions:[{id:"top-left",name:this.$t("t_top_left")},{id:"top",name:this.$t("t_top")},{id:"top-right",name:this.$t("t_top_right")},{id:"left",name:this.$t("t_left")},{id:"right",name:this.$t("t_right")},{id:"center",name:this.$t("t_center")},{id:"bottom-left",name:this.$t("t_bottom_left")},{id:"bottom",name:this.$t("t_bottom")},{id:"bottom-right",name:this.$t("t_bottom_right")}],errors:[],loading:!1}},head(){return{title:this.$t("t_watermark_settings"),titleTemplate:`%s ${this.$store.state.settings.separator} ${this.$t("t_dashboard")}`,meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi(`storage/app/${this.$store.state.settings.favicon}`):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{update:function(){if(!this.$owgate.allow(this.$auth.user,"watermark","settings"))return void this.$router.push("/administrator");this.loading=!0;let data=new FormData;data.append("watermark",this.form.watermark),data.append("position",this.form.position),data.append("enabled",this.form.enabled),this.$axios.post("administrator/settings/watermark",data,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{this.errors=[],this.$toasted.show(this.$t("t_toasted_watermark_settings_updated"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1}).catch(t=>{this.errors=t.response.data.errors,this.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1})},watermark:function(t){this.form.watermark=t}}},n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t")])],1),t._v(" "),r("v-container",[r("v-card",{staticClass:"m-card",attrs:{flat:""}},[r("v-card-title",{staticClass:"pa-4",attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"title"},[t._v(t._s(t.$t("t_watermark_settings")))]),t._v(" "),r("span",{staticClass:"card-description"},[t._v(t._s(t.$t("t_watermark_settings_para")))])])]),t._v(" "),r("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("label",{staticClass:"form-group has-float-label",class:[t.errors.enabled?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{"true-value":1,"false-value":0,color:"blue"},model:{value:t.form.enabled,callback:function(e){t.$set(t.form,"enabled",e)},expression:"form.enabled"}}),t._v(" "),r("span",[t._v(t._s(t.$t("t_enable_watermark")))])],1),t._v(" "),t.errors.enabled?r("small",{staticClass:"red--text"},[t._v(t._s(t.errors.enabled[0]))]):t._e()]),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("upload-btn",{staticClass:"pa-0",attrs:{uniqueId:"",block:"",accept:"image/*",title:t.$t("t_upload_watermark"),color:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-3"},on:{"file-update":t.watermark}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-select",{attrs:{items:t.positions,"item-text":"name","item-value":"id",color:"grey lighten-1",label:t.$t("t_watermark_position"),placeholder:t.$t("t_choose_watermark_position"),rules:t.errors.position,error:!!t.errors.position,dense:""},model:{value:t.form.position,callback:function(e){t.$set(t.form,"position",e)},expression:"form.position"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"mb-1 white--text",attrs:{disabled:t.loading,loading:t.loading,block:"",depressed:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.update(e)}}},[t._v(t._s(t.$t("t_update")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,"f71db914");e.default=component.exports}};