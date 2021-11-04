exports.ids=[11],exports.modules={155:function(t,e,n){"use strict";n.r(e);var o={middleware:"auth",layout:"default/main",components:{"v-sidebar":n(73).a},async asyncData({app:t,$axios:e,redirect:n}){t.$megate.allow(t.$auth.user,"make","offers")||n("/administrator");let o=await e.get("account/offers");return{offersData:o.data.offers,offers:o.data.offers.data,seo:{title:o.data.seo.title,separator:o.data.seo.separator,description:o.data.seo.description,favicon:o.data.seo.favicon}}},data:function(){return{selected:[],dialogs:{delete:!1},loading:!1}},head(){return{title:this.$t("t_received_offers"),titleTemplate:`%s ${this.seo.separator} ${this.seo.title}`,meta:[{name:"description",content:this.seo.description},{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.seo.favicon}]}},computed:{headers(){return[{text:this.$t("t_deal"),value:"deal",sortable:!1,align:this.$vuetify.rtl?"right":"left"},{text:this.$t("t_offer_price"),value:"price",sortable:!1,align:"center"},{text:this.$t("t_offer_from"),value:"from",sortable:!1,align:"center"},{text:this.$t("t_status"),value:"status",sortable:!1,align:"center"},{text:this.$t("t_created"),value:"created",sortable:!1,align:"center"},{text:this.$t("t_options"),value:"options",sortable:!1,align:"center"}]}},methods:{getNextPage(t=1){this.loading=!0,this.$axios.get("account/offers?page="+t).then(t=>{this.selected=[],this.offersData=t.data.offers,this.offers=t.data.data.offers,void 0!==typeof window&&window.scrollTo(0,0),this.loading=!1})},preview:function(t){return 0==t.photosNumber?this.$homeApi("storage/app/uploads/default/classifieds/no-image.png"):this.$homeApi("storage/app/uploads/classifieds/"+t.unique_id+"/preview_0.jpg")},requireAction:function(t){return!(!t.isPending||t.isAccepted||t.isRefused)},accept:function(t=this.selected,e=null){let n=this;n.loading=!0,this.$axios.post("account/offers/options/accept",{offers:t}).then(t=>{null!==e?this.offers[e].isAccepted=!0:n.selected.forEach((function(t,e){n.offers.forEach((function(e,o){t.unique_id===e.unique_id&&(n.offers[o].isAccepted=!0)}))})),n.$toasted.show(this.$t("t_toasted_offers_accepted"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),n.dialogs.delete=!1,n.loading=!1}).catch(t=>{n.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),n.loading=!1})},refuse:function(t=this.selected,e=null){let n=this;n.loading=!0,this.$axios.post("account/offers/options/refuse",{offers:t}).then(t=>{null!==e?this.offers[e].isRefused=!0:n.selected.forEach((function(t,e){n.offers.forEach((function(e,o){t.unique_id===e.unique_id&&(n.offers[o].isRefused=!0)}))})),n.$toasted.show(this.$t("t_toasted_offers_refused"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),n.dialogs.delete=!1,n.loading=!1}).catch(t=>{n.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),n.loading=!1})}}},r=n(1),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t\t")])],1),t._v(" "),n("v-content",[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{wrap:"","fill-height":""}},[n("v-sidebar"),t._v(" "),n("v-flex",{attrs:{xs9:""}},[n("v-card",{staticClass:"m-card",attrs:{flat:""}},[n("v-toolbar",{attrs:{color:"white",flat:""}},[n("v-toolbar-title",{staticClass:"title"},[t._v(t._s(t.$t("t_received_offers")))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-fade-transition",[t.selected.length>0?n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{text:"",icon:"",color:"grey darken-3"},on:{click:function(e){return t.refuse()}}},o),[n("v-icon",[t._v("mdi-cancel")])],1)]}}],null,!1,4237190064)},[t._v(" "),n("span",[t._v(t._s(t.$t("t_refuse")))])]):t._e()],1),t._v(" "),n("v-fade-transition",[t.selected.length>0?n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{text:"",icon:"",color:"grey darken-3"},on:{click:function(e){return t.accept()}}},o),[n("v-icon",[t._v("mdi-check-all")])],1)]}}],null,!1,1860658734)},[t._v(" "),n("span",[t._v(t._s(t.$t("t_accept")))])]):t._e()],1)],1),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.offers,"item-key":"id","hide-default-footer":"","show-select":"","disable-pagination":"","no-data-text":t.$t("t_table_no_data_available")},scopedSlots:t._u([{key:"item.deal",fn:function(e){var o=e.item;return[n("v-list",{staticClass:"transparent",attrs:{"one-line":""}},[n("v-list-item",{attrs:{nuxt:"",to:"/listing/"+o.deal.unique_slug,target:"_blank",ripple:!1}},[n("v-list-item-avatar",[n("img",{attrs:{src:t.preview(o.deal)}})]),t._v(" "),n("v-list-item-content",{staticClass:"table-wrap-title"},[n("v-list-item-title",{staticClass:"table-wrap-title",domProps:{innerHTML:t._s(o.deal.title)}})],1)],1)],1)]}},{key:"item.price",fn:function(e){var o=e.item;return[o.price&&o.currency&&o.locale?n("div",{staticClass:"text-center font-weight-bold"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.$getCurrency(o.price,o.currency,o.locale))+"\n\t\t\t\t\t\t\t\t\t")]):t._e()]}},{key:"item.from",fn:function(e){var o=e.item;return[n("div",{staticClass:"text-center font-weight-bold"},[t._v(t._s(o.from.username))])]}},{key:"item.status",fn:function(e){var o=e.item;return[null===o.deleted_at?n("div",[!o.isPending||o.isAccepted||o.isRefused?o.isAccepted?n("v-btn",{attrs:{small:"",block:"",depressed:"",text:"",color:"#2ecc71"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("t_accepted"))+"\n\t\t\t\t\t\t\t\t\t\t")]):o.isRefused?n("v-btn",{attrs:{small:"",block:"",depressed:"",text:"",color:"#bdc3c7"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("t_refused"))+"\n\t\t\t\t\t\t\t\t\t\t")]):t._e():n("v-btn",{attrs:{small:"",depressed:"",dark:"",color:"warning",block:"",text:""}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("t_pending"))+"\n\t\t\t\t\t\t\t\t\t\t")])],1):n("div",[n("v-btn",{attrs:{small:"",block:"",depressed:"",text:"",color:"error"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t("t_deleted"))+"\n\t\t\t\t\t\t\t\t\t\t")])],1)]}},{key:"item.created",fn:function(e){var n=e.item;return[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.$ago(n.created_at))+"\n\t\t\t\t\t\t\t\t")]}},{key:"item.options",fn:function(e){var o=e.item;return[t.requireAction(o)?n("v-menu",{attrs:{bottom:"",left:!t.$vuetify.rtl,right:!!t.$vuetify.rtl,origin:"center center","max-height":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{small:"",icon:""}},o),[n("v-icon",{attrs:{size:"20px",color:"grey darken-1"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-item",{on:{click:function(e){t.accept([o],t.offers.indexOf(o))}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-check-all")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("t_accept")))])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){t.refuse([o],t.offers.indexOf(o))}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-cancel")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("t_refuse")))])],1)],1)],1)],1):t._e()]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),n("div",{staticClass:"text-center pt-2"},[n("pagination",{attrs:{data:t.offersData,limit:8,align:t.$vuetify.rtl?"left":"right"},on:{"pagination-change-page":t.getNextPage}},[n("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[n("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_right":"chevron_left"))])]),t._v(" "),n("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[n("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_left":"chevron_right"))])])])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,"6693bf36");e.default=component.exports},69:function(t,e){},70:function(t,e){},71:function(t,e,n){"use strict";n.r(e);var o=n(69),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},72:function(t,e,n){"use strict";n.r(e);var o=n(70),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},73:function(t,e,n){"use strict";var o={name:"sidebar",middleware:"auth",layout:"default/main",data:function(){return{items:[{icon:"mdi-settings",title:"t_account_settings",to:"/account/settings",enabled:!0},{icon:"mdi-image-multiple",title:"t_my_deals",to:"/account/deals",enabled:!0},{icon:"mdi-message",title:"t_message_center",to:"/account/messages",enabled:this.$megate.allow(this.$auth.user,"receive","messages")},{icon:"mdi-tag",title:"t_received_offers",to:"/account/offers",enabled:this.$megate.allow(this.$auth.user,"receive","offers")},{icon:"mdi-folder-search",title:"t_saved_search",to:"/account/search",enabled:this.$megate.allow(this.$auth.user,"save","search")},{icon:"mdi-store",title:"t_following_shops",to:"/account/following",enabled:this.$megate.allow(this.$auth.user,"follow","shops")},{icon:"mdi-wallet-membership",title:"t_membership",to:"/account/subscription",enabled:!0},{divider:!0},{icon:"mdi-two-factor-authentication",title:"t_two_factor_auth",to:"/account/2fa",enabled:!0}]}},methods:{async logout(){await this.$auth.logout(),this.$router.push({name:"mainIndex"})}}},r=n(1);var component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{staticClass:"user-area",attrs:{xs3:""}},[n("v-navigation-drawer",{staticClass:"m-card pb-3",staticStyle:{height:"auto"},attrs:{width:"auto"}},[n("v-list",{staticClass:"user-sidebar",attrs:{dense:""}},[t._l(t.items,(function(e,o){return[e.divider?n("v-divider",{key:e.to}):t._e(),t._v(" "),e.divider?t._e():n("nuxt-link",{key:o,attrs:{to:e.to,tag:"v-list-item","active-class":"active-item"}},[n("v-list-item",[n("v-list-item-action",[n("v-icon",{staticClass:"v-icon theme--light mdi",class:e.icon})],1),t._v(" "),n("v-list-item-title",{directives:[{name:"t",rawName:"v-t",value:e.title,expression:"item.title"}]})],1)],1)]})),t._v(" "),n("v-list-item",{staticClass:"user-signout",on:{click:function(e){return e.preventDefault(),t.logout()}}},[n("v-list-item-action",[n("v-icon",{staticClass:"v-icon theme--light mdi mdi-logout"})],1),t._v(" "),n("v-list-item-title",[t._v(t._s(t.$t("t_sign_out")))])],1)],2)],1)],1)}),[],!1,(function(t){var e=n(71);e.__inject__&&e.__inject__(t);var o=n(72);o.__inject__&&o.__inject__(t)}),"7a304184","49e3b5b1");e.a=component.exports}};