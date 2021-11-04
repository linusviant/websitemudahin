exports.ids=[101],exports.modules={243:function(t,e,r){"use strict";r.r(e);var o={layout:"default/admin",middleware:"administrator",async asyncData({app:t,$axios:e,redirect:r}){t.$adgate.allow(t.$auth.user,"access","shops")||r("/administrator");let o=await e.post("administrator/shops/options/create/fetch");return{countries:o.data.countries,users:o.data.users}},data:function(){return{form:{store:"",title:"",subtitle:"",description:"",address1:"",address2:"",country:"",state:"",city:"",zip:"",customer_email:"",phone:"",primary_locale:"",logo:"",cover:"",user:null},locales:[{value:"en",name:this.$t("t_english")},{value:"fr",name:this.$t("t_french")},{value:"ar",name:this.$t("t_arabic")}],states:[],cities:[],errors:[],loading:!1}},head(){return{title:this.$t("t_create_shop"),titleTemplate:`%s ${this.$store.state.settings.separator} ${this.$t("t_dashboard")}`,meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi(`storage/app/${this.$store.state.settings.favicon}`):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{create:function(){if(!this.$adgate.allow(this.$auth.user,"access","shops"))return void this.$router.push("/administrator");this.loading=!0;let data=new FormData;data.append("store",this.form.store),data.append("title",this.form.title),data.append("subtitle",this.form.subtitle),data.append("description",this.form.description),data.append("address1",this.form.address1),data.append("address2",this.form.address2),data.append("country",this.form.country),data.append("state",this.form.state),data.append("city",this.form.city),data.append("zip",this.form.zip),data.append("customer_email",this.form.customer_email),data.append("phone",this.form.phone),data.append("primary_locale",this.form.primary_locale),data.append("logo",this.form.logo),data.append("cover",this.form.cover),data.append("user",this.form.user),this.$axios.post("administrator/shops/options/create",data,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{this.errors=[],this.form={store:"",title:"",subtitle:"",description:"",address1:"",address2:"",country:"",state:"",city:"",zip:"",customer_email:"",phone:"",primary_locale:"",logo:"",cover:"",user:null},this.$toasted.show(this.$t("t_toasted_shop_created"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1}).catch(t=>{t.response.data.errors&&(this.errors=t.response.data.errors),this.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1})},avatar:function(t){return null===t?this.$homeApi("storage/app/uploads/default/avatar/noavatar.png"):this.$homeApi("storage/app/"+t)},cover:function(t){this.form.cover=t},logo:function(t){this.form.logo=t},fetchStates:function(){this.loading=!0,this.$axios.post("ajax/fetch/states",{country:this.form.country}).then(t=>{this.states=t.data.states,this.cities=t.data.cities,this.loading=!1}).catch(t=>{this.loading=!1,console.log(t.response.data.errors)})},fetchCities:function(){this.loading=!0,this.$axios.post("ajax/fetch/cities",{state:this.form.state}).then(t=>{this.cities=t.data,this.loading=!1}).catch(t=>{this.loading=!1,console.log(t.response.data.errors)})}}},l=r(1),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t")])],1),t._v(" "),r("v-container",[r("v-card",{staticClass:"m-card",attrs:{flat:""}},[r("v-card-title",{staticClass:"pa-4",attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"title"},[t._v(t._s(t.$t("t_create_shop")))]),t._v(" "),r("span",{staticClass:"card-description"},[t._v(t._s(t.$t("t_fill_form_create_shop")))])])]),t._v(" "),r("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_shop_username"),placeholder:t.$t("t_enter_shop_username"),hint:t.$t("t_shop_username_look")+" "+t.$home("shop/")+t.form.store,"persistent-hint":"",rules:t.errors.store,error:!!t.errors.store,counter:"60",maxlength:"60"},model:{value:t.form.store,callback:function(e){t.$set(t.form,"store",e)},expression:"form.store"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_shop_title"),placeholder:t.$t("t_enter_shop_title"),rules:t.errors.title,error:!!t.errors.title,counter:"100",maxlength:"100"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_shop_subtitle"),placeholder:t.$t("t_enter_shop_subtitle"),rules:t.errors.subtitle,error:!!t.errors.subtitle,counter:"100",maxlength:"100"},model:{value:t.form.subtitle,callback:function(e){t.$set(t.form,"subtitle",e)},expression:"form.subtitle"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"form-group form-group-ckeditor",class:[t.errors.description?"has-danger":""]},[r("label",{attrs:{for:"input-normal"}},[t._v(t._s(t.$t("t_description")))]),t._v(" "),r("ckeditor",{staticClass:"form-control",attrs:{config:{language:this.$i18n.locale},type:"classic"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),t.errors.description?r("small",{staticClass:"red--text block"},[t._v(t._s(t.errors.description[0]))]):t._e()]),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-autocomplete",{attrs:{items:t.users,color:"grey lighten-1",label:t.$t("t_default_owner"),placeholder:t.$t("t_choose_default_owner"),"item-text":"username","item-value":"id"},scopedSlots:t._u([{key:"selection",fn:function(data){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(data.item.username)+"\n\t\t\t\t\t\t\t")]}},{key:"item",fn:function(data){return["object"!=typeof data.item?[r("v-list-item-content",{domProps:{textContent:t._s(data.item)}})]:[r("v-list-item-avatar",[r("img",{attrs:{src:t.avatar(data.item.avatar)}})]),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{innerHTML:t._s(data.item.username)}}),t._v(" "),r("v-list-item-subtitle",{domProps:{innerHTML:t._s(data.item.email)}})],1)]]}}]),model:{value:t.form.user,callback:function(e){t.$set(t.form,"user",e)},expression:"form.user"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_address1"),placeholder:t.$t("t_enter_address1"),rules:t.errors.address1,error:!!t.errors.address1},model:{value:t.form.address1,callback:function(e){t.$set(t.form,"address1",e)},expression:"form.address1"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_address2"),placeholder:t.$t("t_enter_address2"),rules:t.errors.address2,error:!!t.errors.address2},model:{value:t.form.address2,callback:function(e){t.$set(t.form,"address2",e)},expression:"form.address2"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_zip"),placeholder:t.$t("t_enter_zip"),rules:t.errors.zip,error:!!t.errors.zip},model:{value:t.form.zip,callback:function(e){t.$set(t.form,"zip",e)},expression:"form.zip"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-autocomplete",{attrs:{autocomplete:"off",items:t.countries,"item-text":"name","item-value":"id",placeholder:t.$t("t_choose_country"),color:"grey lighten-1",label:t.$t("t_country"),rules:t.errors.country,error:!!t.errors.country,dense:""},on:{change:function(e){return t.fetchStates()}},model:{value:t.form.country,callback:function(e){t.$set(t.form,"country",e)},expression:"form.country"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-autocomplete",{attrs:{autocomplete:"off",items:t.states,"item-text":"name","item-value":"id",placeholder:t.$t("t_choose_state"),color:"grey lighten-1",label:t.$t("t_state"),rules:t.errors.state,error:!!t.errors.state,dense:""},on:{change:function(e){return t.fetchCities()}},model:{value:t.form.state,callback:function(e){t.$set(t.form,"state",e)},expression:"form.state"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-autocomplete",{attrs:{autocomplete:"off",items:t.cities,"item-text":"name","item-value":"id",placeholder:t.$t("t_choose_city"),color:"grey lighten-1",label:t.$t("t_city"),rules:t.errors.city,error:!!t.errors.city,dense:""},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_customer_email"),placeholder:t.$t("t_enter_customer_email"),rules:t.errors.customer_email,error:!!t.errors.customer_email},model:{value:t.form.customer_email,callback:function(e){t.$set(t.form,"customer_email",e)},expression:"form.customer_email"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_phone"),placeholder:t.$t("t_enter_phone"),rules:t.errors.phone,error:!!t.errors.phone},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-select",{attrs:{color:"grey lighten-1",items:t.locales,"item-text":"name","item-value":"value",label:t.$t("t_shop_locale"),placeholder:t.$t("t_choose_shop_locale"),rules:t.errors.primary_locale,error:!!t.errors.primary_locale,dense:""},model:{value:t.form.primary_locale,callback:function(e){t.$set(t.form,"primary_locale",e)},expression:"form.primary_locale"}})],1),t._v(" "),r("v-flex",{staticClass:"mb-3",attrs:{xs6:""}},[r("upload-btn",{staticClass:"pa-0",attrs:{uniqueId:"",block:"",accept:"image/*",title:t.$t("t_choose_logo"),color:"grey lighten-3"},on:{"file-update":t.logo}})],1),t._v(" "),r("v-flex",{staticClass:"mb-3",attrs:{xs6:""}},[r("upload-btn",{staticClass:"pa-0",attrs:{uniqueId:"",block:"",accept:"image/*",title:t.$t("t_choose_cover"),color:"grey lighten-3"},on:{"file-update":t.cover}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"mb-1 white--text",attrs:{disabled:t.loading,loading:t.loading,block:"",depressed:"",color:"blue"},on:{click:t.create}},[t._v(t._s(t.$t("t_create")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,"2f6aaa1c");e.default=component.exports}};