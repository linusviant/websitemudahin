(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{705:function(t,e,n){"use strict";n.r(e);var o,r=n(97),l=(n(47),n(27)),c={layout:"default/admin",middleware:"administrator",asyncData:(o=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,o,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,o=e.$axios,r=e.redirect,n.$adgate.allow(n.$auth.user,"admins","conversations")||r("/administrator"),t.next=4,o.get("administrator/conversations/admin");case 4:return l=t.sent,t.abrupt("return",{messagesData:l.data,messages:l.data.data});case 6:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),data:function(){return{selected:[],headers:[{text:this.$t("t_from"),value:"from",sortable:!1,align:this.$vuetify.rtl?"right":"left"},{text:this.$t("t_subject"),value:"subject",sortable:!1,align:this.$vuetify.rtl?"right":"left"},{text:this.$t("t_ip"),value:"ip",sortable:!1,align:"center"},{text:this.$t("t_created"),value:"created",sortable:!1,align:"center"},{text:this.$t("t_options"),value:"options",sortable:!1,align:"center"}],dialogs:{delete:!1,read:!1,reply:!1},message:{index:null,content:null},form:{index:null,id:null,subject:null,message:null},errors:[],loading:!1}},head:function(){return{title:this.$t("t_admins_messages"),titleTemplate:"%s ".concat(this.$store.state.settings.separator," ").concat(this.$t("t_dashboard")),meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi("storage/app/".concat(this.$store.state.settings.favicon)):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{getNextPage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,this.$axios.get("administrator/conversations/admin?page="+e).then((function(e){t.selected=[],t.messagesData=e.data,t.messages=e.data.data,void 0!==("undefined"==typeof window?"undefined":Object(r.a)(window))&&window.scrollTo(0,0),t.loading=!1}))},avatar:function(t){return null===t?this.$homeApi("storage/app/uploads/default/avatar/noavatar.png"):this.$homeApi("storage/app/"+t)},preview:function(t){return 0==t.photosNumber?this.$homeApi("storage/app/uploads/default/classifieds/no-image.png"):this.$homeApi("storage/app/uploads/classifieds/"+t.unique_id+"/preview_0.jpg")},show:function(t,e){t.isRead||this.read(t,e),this.message.index=e,this.message.content=t.message,this.dialogs.read=!0},reply:function(t,e){this.form.index=e,this.form.id=t.unique_id,this.form.subject="Re: "+t.subject,this.dialogs.reply=!0},send:function(){var t=this;this.$adgate.allow(this.$auth.user,"admins","conversations")?(this.loading=!0,this.$axios.post("administrator/conversations/admin/options/reply",{id:this.form.id,subject:this.form.subject,message:this.form.message}).then((function(e){t.messages[t.form.index].isReplied=!0,t.messages[t.form.index].isRead=!0,t.dialogs.reply=!1,t.form.id=null,t.form.index=null,t.form.subject=null,t.form.message=null,t.$toasted.show(t.$t("t_toasted_message_sent"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1})).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),console.log(e),t.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1}))):this.$router.push("/administrator")},read:function(t,e){var n=this;this.loading=!0,this.$axios.post("administrator/conversations/admin/options/read",{id:t.unique_id}).then((function(t){n.messages[e].isRead=!0,n.loading=!1})).catch((function(t){console.log(t),n.$toasted.error(n.$t("t_toasted_something_went_wrong"),{icon:"error",className:n.$vuetify.rtl?"toasted-rtl":""}),n.loading=!1}))},remove:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.selected,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.$adgate.allow(this.$auth.user,"admins","conversations")){var o=this;o.loading=!0,this.$axios.post("administrator/conversations/admin/options/delete",{messages:e}).then((function(e){null!==n?t.messages.splice(n,1):o.selected.forEach((function(t,e){o.messages.forEach((function(e,n){t.unique_id===e.unique_id&&o.messages.splice(n,1)}))})),o.$toasted.show(t.$t("t_toasted_message_deleted"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),o.dialogs.delete=!1,o.loading=!1})).catch((function(e){console.log(e),o.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),o.loading=!1}))}else this.$router.push("/administrator")}}},d=n(52),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t\t")])],1),t._v(" "),t.$adgate.allow(t.$auth.user,"admins","conversations")?n("v-dialog",{attrs:{"max-width":"400",persistent:""},model:{value:t.dialogs.delete,callback:function(e){t.$set(t.dialogs,"delete",e)},expression:"dialogs.delete"}},[n("v-card",{staticClass:"py-2"},[n("v-card-text",[n("div",{staticClass:"text-center mb-5"},[n("v-icon",{attrs:{size:"100px",color:"error"}},[t._v("mdi-alert-octagon-outline")])],1),t._v(" "),n("div",{staticClass:"mb-4 text-center headline font-weight-black text-uppercase"},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("t_are_you_sure"))+"\n\t\t\t\t\t")])]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialogs.delete=!1}}},[t._v("\n\t\t\t\t\t\tCancel\n\t\t\t\t\t")]),t._v(" "),n("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){return t.remove()}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.selected.length>1?t.$t("t_delete_messages"):this.$t("t_delete_message"))+"\n\t\t\t\t\t")])],1)],1)],1):t._e(),t._v(" "),t.$adgate.allow(t.$auth.user,"admins","conversations")?n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogs.read,callback:function(e){t.$set(t.dialogs,"read",e)},expression:"dialogs.read"}},[n("v-card",{staticClass:"pa-3"},[n("v-card-title",{staticClass:"pt-1",attrs:{"primary-title":""}},[n("h3",{staticClass:"body-2 mb-0 text-uppercase font-weight-black"},[t._v(t._s(t.$t("t_read_message")))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialogs.read=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-card-text",{domProps:{innerHTML:t._s(t.message.content)}})],1)],1):t._e(),t._v(" "),t.$adgate.allow(t.$auth.user,"admins","conversations")?n("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogs.reply,callback:function(e){t.$set(t.dialogs,"reply",e)},expression:"dialogs.reply"}},[n("v-card",{staticClass:"pa-2"},[n("v-card-title",{staticClass:"pt-1",attrs:{"primary-title":""}},[n("h3",{staticClass:"body-2 mb-0 text-uppercase font-weight-black"},[t._v(t._s(t.$t("t_reply_message")))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialogs.reply=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-card-text",[n("v-container",{staticClass:"pa-0",attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_subject"),placeholder:t.$t("t_enter_subject"),counter:"100",maxlength:"100",rules:t.errors.subject,error:!!t.errors.subject},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-textarea",{attrs:{color:"grey lighten-1",label:t.$t("t_message"),placeholder:t.$t("t_enter_message"),"no-resize":""},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",{staticClass:"pa-2"},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"#2e3131",text:"",disabled:!t.form.message||!t.form.subject},on:{click:function(e){return t.send()}}},[t._v(t._s(t.$t("t_send")))])],1)],1)],1):t._e(),t._v(" "),n("v-container",[n("div",{staticClass:"m-card"},[n("v-toolbar",{staticClass:"elevation-0",attrs:{color:"white"}},[n("v-toolbar-title",[t._v(t._s(t.$t("t_admins_messages")))]),t._v(" "),n("v-spacer"),t._v(" "),t.$adgate.allow(t.$auth.user,"admins","conversations")?n("v-fade-transition",[t.selected.length>0?n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{text:"",icon:""},on:{click:function(e){t.dialogs.delete=!0}}},o),[n("v-icon",[t._v("mdi-delete")])],1)]}}],null,!1,3064050874)},[t._v(" "),n("span",[t._v(t._s(t.$t("t_delete")))])]):t._e()],1):t._e()],1),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.messages,"item-key":"id","hide-default-footer":"",loading:t.loading,"show-select":"","disable-pagination":"","no-data-text":t.$t("t_table_no_data_available")},scopedSlots:t._u([{key:"item.from",fn:function(e){var o=e.item;return[n("span",{staticClass:"table-wrap-title"},[t._v(t._s(o.name))]),t._v(" "),n("small",{staticClass:"pb-1 font-weight-regular text-uppercase d-block"},[t._v(t._s(o.email))])]}},{key:"item.subject",fn:function(e){var o=e.item;return[n("div",{staticClass:"cursor-pointer",class:o.isRead?"font-weight-regular":"font-weight-bold",on:{click:function(e){t.show(o,t.messages.indexOf(o))}}},[o.isReplied?n("v-icon",{attrs:{small:""}},[t._v("mdi-arrow-left-bold")]):t._e(),t._v(" "),n("span",[t._v(t._s(o.subject))])],1)]}},{key:"item.ip",fn:function(e){var n=e.item;return[t._v(t._s(n.ip))]}},{key:"item.created",fn:function(e){var n=e.item;return[t._v(t._s(t.$ago(n.created_at)))]}},{key:"item.options",fn:function(e){var o=e.item;return[t.$adgate.allow(t.$auth.user,"admins","conversations")?n("v-icon",{attrs:{small:"",color:"grey darken-1"},on:{click:function(e){t.remove([o],t.messages.indexOf(o))}}},[t._v("mdi-delete")]):t._e(),t._v(" "),t.$adgate.allow(t.$auth.user,"admins","conversations")?n("v-icon",{attrs:{small:"",color:"grey darken-1"},on:{click:function(e){t.reply(o,t.messages.indexOf(o))}}},[t._v("mdi-reply")]):t._e()]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),n("div",{staticClass:"text-center pt-2"},[n("pagination",{attrs:{data:t.messagesData,limit:8,align:t.$vuetify.rtl?"left":"right"},on:{"pagination-change-page":t.getNextPage}},[n("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[n("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_right":"chevron_left"))])]),t._v(" "),n("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[n("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_left":"chevron_right"))])])])],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);