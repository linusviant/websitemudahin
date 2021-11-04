exports.ids=[134],exports.modules={139:function(t,e,o){"use strict";o.r(e);var r={layout:"default/main",async asyncData({$axios:t,params:e}){let o=await t.post(`shop/${e.shop}`),r=await t.get(`shop/${e.shop}/deals?page=1`);return{shop:o.data.shop,isFollowing:o.data.isFollowing,dealsData:r.data,deals:r.data.data,seo:{title:o.data.seo.title,image:o.data.seo.image,separator:o.data.seo.separator,description:o.data.seo.description,favicon:o.data.seo.favicon}}},data:function(){return{form:{message:null,subject:null},loading:{app:!1,follow:!1,message:!1},dialogs:{message:!1},selection:1,errors:[]}},head(){return{title:this.shop.title,titleTemplate:`%s ${this.seo.separator} ${this.seo.title}`,meta:[{name:"description",content:this.seo.description},{name:"robots",content:"index, follow"},{property:"og:type",content:"article"},{property:"og:title",content:`${this.shop.title} ${this.seo.separator} ${this.seo.title}`},{property:"og:description",content:this.seo.description},{property:"og:image",content:this.seo.image},{property:"og:url",content:this.$home(`shop/${this.shop.store}`)},{property:"og:site_name",content:this.seo.title},{property:"twitter:title",content:`${this.shop.title} ${this.seo.separator} ${this.seo.title}`},{property:"twitter:description",content:this.seo.description},{property:"twitter:image",content:this.seo.image}],link:[{rel:"icon",type:"image/x-icon",href:this.seo.favicon}]}},computed:{cover:function(){return null===this.shop.cover?this.$homeApi("storage/app/uploads/default/store/no-cover.png"):this.$homeApi("storage/app/"+this.shop.cover)},logo:function(){return null===this.shop.logo?this.$homeApi("storage/app/uploads/default/store/no-logo.png"):this.$homeApi("storage/app/"+this.shop.logo)}},methods:{follow:function(){this.$auth.loggedIn?(this.loading.follow=!0,this.$axios.post("shop/options/follow",{shop:this.shop.store}).then(t=>{this.isFollowing=!0,this.loading.follow=!1}).catch(t=>{console.log(t),this.loading.follow=!1})):this.$toasted.error("Oops! You need to login to follow this shop.",{icon:"alert",action:null})},unfollow:function(){this.$auth.loggedIn&&(this.loading.follow=!0,this.$axios.post("shop/options/unfollow",{shop:this.shop.store}).then(t=>{this.isFollowing=!1,this.loading.follow=!1}).catch(t=>{console.log(t),this.loading.follow=!1}))},message:function(){this.$auth.loggedIn&&(this.form.message||this.form.subject)&&(this.loading.message=!0,this.$axios.post("shop/options/message",{shop:this.shop.store,subject:this.form.subject,message:this.form.message}).then(t=>{this.errors=[],this.$toasted.show("Your message has been successfully sent.",{icon:"done_all"}),this.loading.message=!1,this.dialogs.message=!1,this.form.subject=null,this.form.message=null}).catch(t=>{t.response.data.errors&&(this.errors=t.response.data.errors),this.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",action:null}),this.loading.message=!1}))},getDeals:function(t=1){this.loading.app=!0,this.$axios.get("shop/"+this.shop.store+"/deals?page="+t).then(t=>{this.dealsData=t.data,this.deals=t.data.data,this.loading.app=!1}).catch(t=>{console.log(t),this.loading.app=!1})},preview:function(t){return 0===t.photosNumber?this.$homeApi("storage/app/uploads/default/classifieds/no-image.png"):this.$homeApi("storage/app/uploads/classifieds/"+t.unique_id+"/preview_0.jpg")},avatar:function(t){return null===t?this.$homeApi("storage/app/uploads/default/avatar/noavatar.png"):this.$homeApi("storage/app/"+t)}}},l=o(1),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading.app,callback:function(e){t.$set(t.loading,"app",e)},expression:"loading.app"}},[o("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t\t")])],1),t._v(" "),t.$auth.loggedIn&&t.$megate.allow(t.$auth.user,"contact","shops")?o("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogs.message,callback:function(e){t.$set(t.dialogs,"message",e)},expression:"dialogs.message"}},[o("v-card",{staticClass:"pa-2"},[o("v-card-title",{staticClass:"pt-1",attrs:{"primary-title":""}},[o("h3",{staticClass:"body-2 mb-0 text-uppercase font-weight-black"},[t._v(t._s(t.$t("t_contact_user",{user:t.shop.title})))]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(e){t.dialogs.message=!1}}},[o("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),o("v-card-text",[o("v-container",{staticClass:"pa-0",attrs:{"grid-list-md":""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_subject"),placeholder:t.$t("t_enter_subject"),counter:"100",maxlength:"100",rules:t.errors.subject,error:!!t.errors.subject},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:""}},[o("v-textarea",{attrs:{color:"grey lighten-1",label:t.$t("t_message"),placeholder:t.$t("t_enter_message"),counter:"750",maxlength:"750",rules:t.errors.message,error:!!t.errors.message,"no-resize":"",required:""},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1)],1)],1)],1),t._v(" "),o("v-card-actions",{staticClass:"pa-2"},[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:t.$vuetify.theme.dark?"#bfbfbf":"#2e3131",text:"",disabled:t.loading.message||!t.form.message||!t.form.subject,loading:t.loading.message},on:{click:t.message}},[t._v(t._s(t.$t("t_send")))])],1)],1)],1):t._e(),t._v(" "),o("v-content",[o("v-container",{attrs:{fluid:"","grid-list-xl":""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-card",{staticClass:"m-card store-card pb-3 mb-4"},[o("v-img",{attrs:{height:"200",src:t.cover}},[o("v-layout",{attrs:{column:"","fill-height":""}},[o("v-spacer"),t._v(" "),o("v-card-title",{staticClass:"justify-center"},[o("v-avatar",{staticClass:"text-center",class:t.shop.logo?"":"no-shop-logo",attrs:{size:"70px"}},[o("img",{attrs:{src:t.logo}})])],1)],1)],1),t._v(" "),o("v-card-title",{staticClass:"px-4"},[t._v(t._s(t.shop.title))]),t._v(" "),o("v-card-text",{staticClass:"px-4"},[o("client-only",[t.shop.description?o("truncate",{attrs:{"action-class":"text-center caption text-uppercase",clamp:t.$t("t_show_more"),length:350,less:t.$t("t_show_less"),type:"html",text:t.shop.description}}):t._e()],1)],1),t._v(" "),o("v-divider",{staticClass:"mx-4"}),t._v(" "),o("v-card-text",{staticClass:"px-4 text-center"},[t.shop.phone?o("v-chip",{staticClass:"mb-2 mx-2",attrs:{label:"",color:"#2196f3"}},[t.$vuetify.rtl?o("div",[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.phone)+"\n\t\t\t\t\t\t\t\t\t\t"),o("v-icon",{attrs:{right:"",size:"19"}},[t._v("mdi-phone")])],1):o("div",[o("v-icon",{attrs:{left:"",size:"19"}},[t._v("mdi-phone")]),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.phone)+"\n\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),t.shop.customer_email?o("v-chip",{staticClass:"mb-2 mx-2",attrs:{label:"",color:"#2196f3"}},[t.$vuetify.rtl?o("div",[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.customer_email)+"\n\t\t\t\t\t\t\t\t\t\t"),o("v-icon",{attrs:{right:"",size:"19"}},[t._v("mdi-at")])],1):o("div",[o("v-icon",{attrs:{left:"",size:"19"}},[t._v("mdi-at")]),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.customer_email)+"\n\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),t.shop.country?o("v-chip",{staticClass:"mb-2 mx-2",attrs:{label:"",color:"#2196f3"}},[t.$vuetify.rtl?o("div",[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.country.name)+"\n\t\t\t\t\t\t\t\t\t\t"),o("v-icon",{attrs:{right:"",size:"19"}},[t._v("mdi-flag")])],1):o("div",[o("v-icon",{attrs:{left:"",size:"19"}},[t._v("mdi-flag")]),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.country.name)+"\n\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),t.shop.state?o("v-chip",{staticClass:"mb-2 mx-2",attrs:{label:"",color:"#2196f3"}},[t.$vuetify.rtl?o("div",[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.state.name)+"\n\t\t\t\t\t\t\t\t\t\t"),o("v-icon",{attrs:{right:"",size:"19"}},[t._v("mdi-flag")])],1):o("div",[o("v-icon",{attrs:{left:"",size:"19"}},[t._v("mdi-flag")]),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.state.name)+"\n\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),t.shop.city?o("v-chip",{staticClass:"mb-2 mx-2",attrs:{label:"",color:"#2196f3"}},[t.$vuetify.rtl?o("div",[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.city.name)+"\n\t\t\t\t\t\t\t\t\t\t"),o("v-icon",{attrs:{right:"",size:"19"}},[t._v("mdi-flag")])],1):o("div",[o("v-icon",{attrs:{left:"",size:"19"}},[t._v("mdi-flag")]),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.city.name)+"\n\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),t.shop.address1?o("v-chip",{staticClass:"mb-2 mx-2",attrs:{label:"",color:"#2196f3"}},[t.$vuetify.rtl?o("div",[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.address1)+"\n\t\t\t\t\t\t\t\t\t\t"),o("v-icon",{attrs:{right:"",size:"19"}},[t._v("mdi-map")])],1):o("div",[o("v-icon",{attrs:{left:"",size:"19"}},[t._v("mdi-map")]),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.address1)+"\n\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),t.shop.address2?o("v-chip",{staticClass:"mb-2 mx-2",attrs:{label:"",color:"#2196f3"}},[t.$vuetify.rtl?o("div",[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.address2)+"\n\t\t\t\t\t\t\t\t\t\t"),o("v-icon",{attrs:{right:"",size:"19"}},[t._v("mdi-map")])],1):o("div",[o("v-icon",{attrs:{left:"",size:"19"}},[t._v("mdi-map")]),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.address2)+"\n\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),t.shop.zip?o("v-chip",{staticClass:"mb-2 mx-2",attrs:{label:"",color:"#2196f3"}},[t.$vuetify.rtl?o("div",[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.zip)+"\n\t\t\t\t\t\t\t\t\t\t"),o("v-icon",{attrs:{right:"",size:"19"}},[t._v("mdi-barcode")])],1):o("div",[o("v-icon",{attrs:{left:"",size:"19"}},[t._v("mdi-barcode")]),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.shop.zip)+"\n\t\t\t\t\t\t\t\t\t")],1)]):t._e()],1),t._v(" "),o("v-card-actions",{staticClass:"follow-btn px-4"},[t.$megate.allow(t.$auth.user,"contact","shops")?o("v-btn",{staticClass:"px-4",attrs:{text:""},on:{click:function(e){t.dialogs.message=!0}}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.$t("t_contact_us"))+"\n\t\t\t\t\t\t\t\t")]):t._e(),t._v(" "),o("v-spacer"),t._v(" "),t.$megate.allow(t.$auth.user,"follow","shops")&&!t.isFollowing?o("v-btn",{staticClass:"px-4",attrs:{text:"",disabled:t.loading.follow,loading:t.loading.follow},on:{click:t.follow}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.$t("t_follow_shop",{shop:t.shop.title}))+"\n\t\t\t\t\t\t\t\t")]):t._e()],1)],1),t._v(" "),t.shop.latitude&&t.shop.longitude?o("v-card",{staticClass:"m-card mb-4",attrs:{text:""}},[o("iframe",{staticStyle:{"margin-bottom":"-6px"},attrs:{width:"100%",height:"250",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",src:"https://maps.google.com/maps?q="+t.shop.latitude+","+t.shop.longitude+"&hl=es;z=14&output=embed"}})]):t._e()],1),t._v(" "),o("v-flex",{attrs:{xs12:""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"mb-2",attrs:{xs12:""}},[o("div",{staticClass:"section-title"},[o("h3",[t._v(t._s(t.$t("t_deals")))]),t._v(" "),o("div",{staticClass:"more"},[o("nuxt-link",{attrs:{to:"/browse/deals"}},[t._v(t._s(t.$t("t_see_more")))])],1)])]),t._v(" "),t._l(t.deals,(function(e){return o("v-flex",{key:e.unique_id,attrs:{xs12:""}},[o("v-card",{staticClass:"m-card",class:e.isUpgraded&&"highlight"===e.upgradedTo?"deal-highlight":""},[o("nuxt-link",{staticStyle:{position:"absolute",height:"100%",width:"100%"},attrs:{to:"/listing/"+e.unique_slug}}),t._v(" "),o("v-container",{attrs:{fluid:"","grid-list-xl":""}},[o("v-layout",[o("v-flex",{attrs:{xs4:""}},[o("v-img",{attrs:{src:t.preview(e),height:"80px",contain:""},on:{click:function(o){return t.$router.push("/listing/"+e.unique_slug)}}})],1),t._v(" "),o("v-flex",{staticClass:"pr-4 pl-0",attrs:{xs8:""}},[o("v-card-title",{staticClass:"pa-0",attrs:{"primary-title":""}},[o("div",[o("div",{staticClass:"deal-title"},[e.isUpgraded&&"urgent"===e.upgradedTo?o("span",{staticClass:"deal-urgent"},[t._v(t._s(t.$t("t_urgent")))]):t._e(),t._v(" "+t._s(e.title))]),t._v(" "),o("div",{staticClass:"deal-description"},[t._v(t._s(t.$description(e.description)))])])])],1)],1)],1),t._v(" "),o("v-divider",{attrs:{light:""}}),t._v(" "),o("v-card-actions",{staticClass:"py-0 px-2"},[o("v-list-item",{staticClass:"grow deal-avatar"},[o("v-list-item-avatar",{attrs:{size:"25px"}},[o("v-img",{attrs:{src:t.avatar(e.user.avatar)}})],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{staticClass:"deal-username"},[t._v(t._s(e.user.username))])],1),t._v(" "),o("v-layout",{staticStyle:{"margin-bottom":"14px"},attrs:{"align-center":"","justify-end":""}},[e.price&&e.currency&&e.locale?o("span",{staticClass:"deal-price"},[t._v(t._s(t.$getCurrency(e.price,e.currency,e.locale)))]):t._e()])],1)],1)],1)],1)})),t._v(" "),o("v-flex",{attrs:{xs12:""}},[o("div",{staticClass:"text-center pt-2"},[o("pagination",{attrs:{data:t.dealsData,limit:-1,align:t.$vuetify.rtl?"left":"right"},on:{"pagination-change-page":t.getDeals}},[o("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[o("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_right":"chevron_left"))])]),t._v(" "),o("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[o("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_left":"chevron_right"))])])])],1)])],2)],1)],1)],1)],1)],1)}),[],!1,null,null,"20783e97");e.default=component.exports}};