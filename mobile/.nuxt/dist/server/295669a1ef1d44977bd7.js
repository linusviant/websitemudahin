exports.ids=[13],exports.modules={158:function(t,e,o){"use strict";o.r(e);var r={middleware:"auth",layout:"default/main",components:{"v-sidebar":o(76).a},async asyncData({$axios:t}){let e=await t.post("account/2fa");return{account:e.data.user,google2fa_url:e.data.google2fa_url,seo:{title:e.data.seo.title,separator:e.data.seo.separator,description:e.data.seo.description,favicon:e.data.seo.favicon}}},data:()=>({form:{verifyCode:"",password:""},errors:[],loading:!1}),head(){return{title:this.$t("t_2fa_verification"),titleTemplate:`%s ${this.seo.separator} ${this.seo.title}`,meta:[{name:"description",content:this.seo.description},{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.seo.favicon}]}},methods:{generate:function(){this.loading=!0,this.$axios.post("account/2fa/generate").then(t=>{this.account.password_security=t.data.password_security,this.google2fa_url=t.data.google2fa_url,this.$toasted.show(this.$t("t_toasted_2fa_secret_generated"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1}).catch(t=>{this.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1})},enable:function(){""!==this.form.verifyCode&&(this.loading=!0,this.$axios.post("account/2fa/enable",{verifyCode:this.form.verifyCode}).then(t=>{t.data.isFailed?(this.$toasted.error(this.$t("t_toasted_2fa_code_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1):(this.account.password_security=t.data,this.$toasted.show(this.$t("t_toasted_2fa_enabled"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1)}).catch(t=>{t.response.data.errors&&(this.errors=t.response.data.errors),this.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1}))},disable:function(){""!==this.form.password&&(this.loading=!0,this.$axios.post("account/2fa/disable",{password:this.form.password}).then(t=>{t.data.isFailed?(this.$toasted.error(this.$t("t_toasted_wrong_password"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1):(this.form.verifyCode=null,this.account.password_security=t.data,this.$toasted.show(this.$t("t_toasted_2fa_disabled"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1)}).catch(t=>{t.response.data.errors&&(this.errors=t.response.data.errors),this.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1}))}}},n=o(1),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[o("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t\t")])],1),t._v(" "),o("v-content",[o("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[o("v-layout",{attrs:{wrap:"","fill-height":""}},[o("v-flex",{attrs:{xs12:""}},[o("v-card",{staticClass:"m-card pb-5",attrs:{flat:""}},[o("v-card-title",{staticClass:"pa-4",attrs:{"primary-title":""}},[o("div",[o("div",{staticClass:"title pb-3"},[t._v(t._s(t.$t("t_2fa_verification")))]),t._v(" "),o("span",{staticClass:"card-description"},[t._v(t._s(t.$t("t_2fa_verification_para")))])])]),t._v(" "),o("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[o("v-layout",{attrs:{wrap:""}},[o("v-row",{attrs:{justify:"center"}},[o("v-flex",{staticClass:"text-center",attrs:{xs10:""}},[t.account.password_security?t.account.password_security.google2fa_enable?o("div",[o("h1",{staticClass:"headline font-weight-black text-uppercase my-5",domProps:{innerHTML:t._s(t.$t("t_2fa_currently_enabled"))}}),t._v(" "),o("p",{staticClass:"title pb-4"},[t._v(t._s(t.$t("t_2fa_disable_para")))]),t._v(" "),o("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_password"),placeholder:t.$t("t_enter_password"),rules:t.errors.password,error:!!t.errors.password,type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),o("v-btn",{staticClass:"white--text",attrs:{block:"",depressed:"",color:t.$vuetify.theme.dark?"#606060":"grey darken-3"},on:{click:function(e){return e.preventDefault(),t.disable()}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("t_disable_2fa"))+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])],1):o("div",[o("h1",{staticClass:"headline font-weight-black text-uppercase my-5"},[t._v(t._s(t.$t("t_download_2fa_app")))]),t._v(" "),o("v-row",[o("v-col",{attrs:{cols:"6",md:"4"}},[o("v-btn",{attrs:{color:"black",dark:"",depressed:"",block:"",href:"https://authy.com/download/",target:"_blank"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAuthy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),o("v-icon",{attrs:{right:""}},[t._v("mdi-download")])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"6",md:"4"}},[o("v-btn",{attrs:{color:"black",dark:"",depressed:"",block:"",href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2",target:"_blank"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAuthenticator\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),o("v-icon",{attrs:{right:""}},[t._v("mdi-google-play")])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"6",md:"4"}},[o("v-btn",{attrs:{color:"black",dark:"",depressed:"",block:"",href:"https://apps.apple.com/us/app/google-authenticator/id388497605",target:"_blank"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAuthenticator\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),o("v-icon",{attrs:{right:""}},[t._v("mdi-apple")])],1)],1)],1),t._v(" "),o("h1",{staticClass:"headline font-weight-black text-uppercase my-5"},[t._v(t._s(t.$t("t_scan_this_qrcode")))]),t._v(" "),o("img",{attrs:{src:t.google2fa_url,alt:""}}),t._v(" "),o("h1",{staticClass:"headline font-weight-black text-uppercase my-5"},[t._v(t._s(t.$t("t_enter_6_digit_generated")))]),t._v(" "),o("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_verification_code"),placeholder:t.$t("t_enter_verification_code"),rules:t.errors.verifyCode,error:!!t.errors.verifyCode},model:{value:t.form.verifyCode,callback:function(e){t.$set(t.form,"verifyCode",e)},expression:"form.verifyCode"}}),t._v(" "),o("v-btn",{staticClass:"mt-4",attrs:{block:"",depressed:"",color:t.$vuetify.theme.dark?"#606060":"grey darken-3",dark:""},on:{click:function(e){return e.preventDefault(),t.enable()}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("t_enable_2fa"))+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])],1):o("div",[o("v-btn",{staticClass:"white--text",attrs:{block:"",depressed:"",color:t.$vuetify.theme.dark?"#606060":"grey darken-3"},on:{click:function(e){return e.preventDefault(),t.generate()}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("t_generate_2fa_secret"))+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])],1)])],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,"0b5677f5");e.default=component.exports},72:function(t,e){},73:function(t,e){},74:function(t,e,o){"use strict";o.r(e);var r=o(72),n=o.n(r);for(var l in r)"default"!==l&&function(t){o.d(e,t,(function(){return r[t]}))}(l);e.default=n.a},75:function(t,e,o){"use strict";o.r(e);var r=o(73),n=o.n(r);for(var l in r)"default"!==l&&function(t){o.d(e,t,(function(){return r[t]}))}(l);e.default=n.a},76:function(t,e,o){"use strict";var r={name:"sidebar",middleware:"auth",layout:"default/main",data:function(){return{items:[{icon:"mdi-settings",title:"t_account_settings",to:"/account/settings",enabled:!0},{icon:"mdi-image-multiple",title:"t_my_deals",to:"/account/deals",enabled:!0},{icon:"mdi-message",title:"t_message_center",to:"/account/messages",enabled:this.$megate.allow(this.$auth.user,"receive","messages")},{icon:"mdi-tag",title:"t_received_offers",to:"/account/offers",enabled:this.$megate.allow(this.$auth.user,"receive","offers")},{icon:"mdi-folder-search",title:"t_saved_search",to:"/account/search",enabled:this.$megate.allow(this.$auth.user,"save","search")},{icon:"mdi-store",title:"t_following_shops",to:"/account/following",enabled:this.$megate.allow(this.$auth.user,"follow","shops")},{icon:"mdi-wallet-membership",title:"t_membership",to:"/account/subscription",enabled:!0},{divider:!0},{icon:"mdi-two-factor-authentication",title:"t_two_factor_auth",to:"/account/2fa",enabled:!0}]}},methods:{async logout(){await this.$auth.logout(),this.$router.push({name:"mainIndex"})}}},n=o(1);var component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-flex",{staticClass:"user-area",attrs:{xs3:""}},[o("v-navigation-drawer",{staticClass:"m-card pb-3",staticStyle:{height:"auto"},attrs:{width:"auto"}},[o("v-list",{staticClass:"user-sidebar",attrs:{dense:""}},[t._l(t.items,(function(e,r){return[e.divider?o("v-divider",{key:e.to}):t._e(),t._v(" "),e.divider?t._e():o("nuxt-link",{key:r,attrs:{to:e.to,tag:"v-list-item","active-class":"active-item"}},[o("v-list-item",[o("v-list-item-action",[o("v-icon",{staticClass:"v-icon theme--light mdi",class:e.icon})],1),t._v(" "),o("v-list-item-title",{directives:[{name:"t",rawName:"v-t",value:e.title,expression:"item.title"}]})],1)],1)]})),t._v(" "),o("v-list-item",{staticClass:"user-signout",on:{click:function(e){return e.preventDefault(),t.logout()}}},[o("v-list-item-action",[o("v-icon",{staticClass:"v-icon theme--light mdi mdi-logout"})],1),t._v(" "),o("v-list-item-title",[t._v(t._s(t.$t("t_sign_out")))])],1)],2)],1)],1)}),[],!1,(function(t){var e=o(74);e.__inject__&&e.__inject__(t);var r=o(75);r.__inject__&&r.__inject__(t)}),"7a304184","9f11acc2");e.a=component.exports}};