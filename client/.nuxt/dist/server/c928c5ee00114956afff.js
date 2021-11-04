exports.ids=[145],exports.modules={177:function(t,e,r){"use strict";r.r(e);var o={layout:"default/moderator",middleware:"moderator",asyncData:async({app:t,$axios:e,redirect:r})=>({countries:(await e.post("ajax/fetch/countries")).data}),data:function(){return{form:{username:this.$auth.user.username,current_password:"",new_password:"",email:this.$auth.user.email,phone:this.$auth.user.phone,avatar:"",preview:"",country:this.$auth.user.country,state:this.$auth.user.state,city:this.$auth.user.city},states:[],cities:[],errors:[],loading:{dialog:!1,button:!1}}},head(){return{title:this.$t("t_my_profile"),titleTemplate:`%s ${this.$store.state.settings.separator} ${this.$t("t_dashboard")}`,meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi(`storage/app/${this.$store.state.settings.favicon}`):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{update:function(){this.loading.dialog=!0,this.loading.button=!0;let data=new FormData;data.append("username",this.form.username),data.append("current_password",this.form.current_password),data.append("new_password",this.form.new_password),data.append("email",this.form.email),data.append("avatar",this.form.avatar),this.form.phone&&data.append("phone",this.form.phone),this.form.country&&data.append("country",this.form.country),this.form.state&&data.append("state",this.form.state),this.form.city&&data.append("city",this.form.city),this.$axios.post("moderator/profile",data,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{this.errors=[],this.$auth.fetchUser(),this.$toasted.show(this.$t("t_toasted_profile_updated"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading.dialog=!1,this.loading.button=!1}).catch(t=>{t.response.data.errors&&(this.errors=t.response.data.errors),"error_password"===t.response.data?this.$toasted.error(this.$t("t_toasted_password_not_match"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}):this.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading.dialog=!1,this.loading.button=!1})},fetchStates:function(){this.loading.dialog=!0,this.$axios.post("ajax/fetch/states",{country:this.form.country}).then(t=>{this.states=t.data.states,this.cities=t.data.cities,this.loading.dialog=!1}).catch(t=>{this.loading.dialog=!1})},fetchCities:function(){this.loading.dialog=!0,this.$axios.post("ajax/fetch/cities",{state:this.form.state}).then(t=>{this.cities=t.data,this.loading.dialog=!1}).catch(t=>{this.loading.dialog=!1})},avatar:function(t){this.form.preview=URL.createObjectURL(t),this.form.avatar=t},preview(){return null!==this.$auth.user.avatar?this.$homeApi("storage/app/"+this.$auth.user.avatar):this.$homeApi("storage/app/uploads/default/avatar/noavatar.png")}},created:function(){this.$auth.user.country&&this.fetchStates(),this.$auth.user.state&&this.fetchCities()}},n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading.dialog,callback:function(e){t.$set(t.loading,"dialog",e)},expression:"loading.dialog"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t")])],1),t._v(" "),r("v-container",[r("v-card",{staticClass:"m-card",attrs:{flat:""}},[r("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"text-center mb-4",attrs:{xs12:""}},[r("v-avatar",{staticClass:"mb-3",attrs:{size:"110"}},[r("img",{attrs:{src:t.form.preview?t.form.preview:t.preview(),alt:"Avatar"}})]),t._v(" "),r("client-only",[r("upload-btn",{staticClass:"pa-0 text-small",attrs:{accept:"image/*",title:t.$t("t_change_avatar"),color:"grey lighten-3"},on:{"file-update":t.avatar}})],1)],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_username"),placeholder:t.$t("t_enter_username"),rules:t.errors.username,error:!!t.errors.username},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_email"),placeholder:t.$t("t_enter_email"),rules:t.errors.email,error:!!t.errors.email,type:"email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_phone"),placeholder:t.$t("t_enter_phone"),rules:t.errors.phone,error:!!t.errors.phone},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-autocomplete",{attrs:{autocomplete:"off",items:t.countries,"item-text":"name","item-value":"id",color:"grey lighten-1",label:t.$t("t_country"),placeholder:t.$t("t_choose_country"),rules:t.errors.country,error:!!t.errors.country,dense:""},on:{change:function(e){return t.fetchStates()}},model:{value:t.form.country,callback:function(e){t.$set(t.form,"country",e)},expression:"form.country"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-autocomplete",{attrs:{autocomplete:"off",items:t.states,"item-text":"name","item-value":"id",color:"grey lighten-1",label:t.$t("t_state"),placeholder:t.$t("t_choose_state"),rules:t.errors.state,error:!!t.errors.state,dense:""},on:{change:function(e){return t.fetchCities()}},model:{value:t.form.state,callback:function(e){t.$set(t.form,"state",e)},expression:"form.state"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-autocomplete",{attrs:{autocomplete:"off",items:t.cities,"item-text":"name","item-value":"id",color:"grey lighten-1",label:t.$t("t_city"),placeholder:t.$t("t_choose_city"),rules:t.errors.city,error:!!t.errors.city,dense:""},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_current_password"),placeholder:t.$t("t_enter_current_password"),"persistent-hint":"",hint:t.$t("t_password_leave_empty"),rules:t.errors.current_password,error:!!t.errors.current_password,type:"password"},model:{value:t.form.current_password,callback:function(e){t.$set(t.form,"current_password",e)},expression:"form.current_password"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_new_password"),placeholder:t.$t("t_enter_new_password"),"persistent-hint":"",hint:t.$t("t_password_leave_empty"),rules:t.errors.new_password,error:!!t.errors.new_password,type:"password"},model:{value:t.form.new_password,callback:function(e){t.$set(t.form,"new_password",e)},expression:"form.new_password"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"white--text mt-0",attrs:{depressed:"",loading:t.loading.button,disabled:t.loading.button,block:"",color:"light-blue lighten-1"},on:{click:function(e){return e.preventDefault(),t.update()}}},[t._v(t._s(t.$t("t_update")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,"265acd47");e.default=component.exports}};