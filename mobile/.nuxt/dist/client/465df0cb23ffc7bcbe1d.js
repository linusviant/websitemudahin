(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{619:function(t,e,o){"use strict";o.r(e);var n,r=o(99),l=(o(45),o(26)),c={layout:"default/moderator",middleware:"moderator",asyncData:(n=Object(l.a)(regeneratorRuntime.mark((function t(e){var o,n,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.app,n=e.$axios,r=e.redirect,o.$mogate.allow(o.$auth.user,"reported","comments")||r("/moderator"),t.next=4,n.get("moderator/reports/comments");case 4:return l=t.sent,t.abrupt("return",{reportsData:l.data,reports:l.data.data});case 6:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)}),data:function(){return{selected:[],dialogs:{delete:!1,read:!1,edit:!1},readComment:"",editComment:{newComment:"",comment:{},index:null},loading:!1}},head:function(){return{title:this.$t("t_pending_reported_comments"),titleTemplate:"%s ".concat(this.$store.state.settings.separator," ").concat(this.$t("t_dashboard")),meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi("storage/app/".concat(this.$store.state.settings.favicon)):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},computed:{headers:function(){return[{text:this.$t("t_reporter"),value:"author",sortable:!1,align:this.$vuetify.rtl?"right":"left"},{text:this.$t("t_status"),value:"status",sortable:!1,align:"center"},{text:this.$t("t_created"),value:"created",sortable:!1,align:"center"},{text:this.$t("t_options"),value:"options",sortable:!1,align:"center"}]}},methods:{getNextPage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,this.$axios.get("administrator/reports/comments?page="+e).then((function(e){t.selected=[],t.reportsData=e.data,t.reports=e.data.data,void 0!==("undefined"==typeof window?"undefined":Object(r.a)(window))&&window.scrollTo(0,0),t.loading=!1}))},read:function(t){this.readComment=t,this.dialogs.read=!0},edit:function(t,e){this.editComment.comment=t,this.editComment.newComment=this.$striphtml(t.comment),this.editComment.index=e,this.dialogs.edit=!0},update:function(){var t=this;this.$adgate.allow(this.$auth.user,"edit","comments")?(this.loading=!0,this.$axios.post("administrator/comments/options/update",{id:this.editComment.comment.id,comment:this.editComment.newComment}).then((function(e){t.reports[t.editComment.index].comment.comment=t.editComment.newComment,t.$toasted.show(t.$t("t_toasted_comment_updated"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),t.dialogs.edit=!1,t.loading=!1})).catch((function(e){t.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1}))):this.$router.push("/administrator")},readReport:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.selected,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this;n.loading=!0,this.$axios.post("administrator/reports/comments/options/read",{reports:e}).then((function(e){null!==o?t.reports.splice(o,1):n.selected.forEach((function(t,e){n.reports.forEach((function(e,o){t.unique_id===e.unique_id&&n.reports.splice(o,1)}))})),n.$toasted.show(t.$t("t_toasted_reports_read"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),n.loading=!1})).catch((function(e){console.log(e),n.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),n.loading=!1}))},remove:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.selected,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.$adgate.allow(this.$auth.user,"delete","comments")){var n=this;n.loading=!0,this.$axios.post("administrator/reports/comments/options/delete",{reports:e}).then((function(e){null!==o?(t.reports[o].comment.isPending=!1,t.reports[o].comment.isActive=!1,t.reports[o].comment.isSpam=!1,t.reports[o].comment.deleted_at=!0):n.selected.forEach((function(t,e){n.reports.forEach((function(e,o){t.unique_id===e.unique_id&&(n.reports[o].comment.isSpam=!1,n.reports[o].comment.isActive=!1,n.reports[o].comment.isPending=!1,n.reports[o].comment.deleted_at=!0)}))})),n.$toasted.show(t.$t("t_toasted_comments_moved_to_trash"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),n.dialogs.delete=!1,n.loading=!1})).catch((function(e){console.log(e),n.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),n.loading=!1}))}else this.$router.push("/administrator")}}},d=o(52),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[o("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t\t")])],1),t._v(" "),t.$adgate.allow(t.$auth.user,"delete","comments")?o("v-dialog",{attrs:{"max-width":"400",persistent:""},model:{value:t.dialogs.delete,callback:function(e){t.$set(t.dialogs,"delete",e)},expression:"dialogs.delete"}},[o("v-card",{staticClass:"py-2"},[o("v-card-text",[o("div",{staticClass:"text-center mb-5"},[o("v-icon",{attrs:{size:"100px",color:"error"}},[t._v("mdi-alert-octagon-outline")])],1),t._v(" "),o("div",{staticClass:"mb-4 text-center headline font-weight-black text-uppercase"},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("t_are_you_sure"))+"\n\t\t\t\t\t")])]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialogs.delete=!1}}},[t._v("\n\t\t\t\t\t\tCancel\n\t\t\t\t\t")]),t._v(" "),o("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){return t.remove()}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.selected.length>1?t.$t("t_delete_comments"):t.$t("t_delete_comment"))+"\n\t\t\t\t\t")])],1)],1)],1):t._e(),t._v(" "),t.$adgate.allow(t.$auth.user,"access","comments")?o("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogs.read,callback:function(e){t.$set(t.dialogs,"read",e)},expression:"dialogs.read"}},[o("v-card",{staticClass:"pa-3"},[o("v-card-title",{staticClass:"pt-1",attrs:{"primary-title":""}},[o("h3",{staticClass:"body-2 mb-0 text-uppercase font-weight-black"},[t._v(t._s(t.$t("t_read_comment")))]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialogs.read=!1}}},[o("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),o("v-card-text",{domProps:{innerHTML:t._s(t.readComment)}})],1)],1):t._e(),t._v(" "),t.$adgate.allow(t.$auth.user,"edit","comments")?o("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogs.edit,callback:function(e){t.$set(t.dialogs,"edit",e)},expression:"dialogs.edit"}},[o("v-card",{staticClass:"pa-2"},[o("v-card-title",{staticClass:"pt-1",attrs:{"primary-title":""}},[o("h3",{staticClass:"body-2 mb-0 text-uppercase font-weight-black"},[t._v(t._s(t.$t("t_edit_comment")))]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialogs.edit=!1}}},[o("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),o("v-card-text",[o("v-container",{staticClass:"pa-0",attrs:{"grid-list-md":""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-textarea",{attrs:{color:"grey lighten-1",label:t.$t("t_comment"),placeholder:t.$t("t_enter_comment"),counter:"500",maxlength:"500","no-resize":"",required:""},model:{value:t.editComment.newComment,callback:function(e){t.$set(t.editComment,"newComment",e)},expression:"editComment.newComment"}})],1)],1)],1)],1),t._v(" "),o("v-card-actions",{staticClass:"pa-2"},[o("v-spacer"),t._v(" "),o("client-only",[o("v-btn",{attrs:{color:t.$vuetify.theme.dark?"#bfbfbf":"#2e3131",text:"",disabled:t.$striphtml(t.editComment.comment.comment)===t.editComment.newComment||""===t.editComment.newComment},on:{click:function(e){return t.update()}}},[t._v(t._s(t.$t("t_update")))])],1)],1)],1)],1):t._e(),t._v(" "),o("v-container",[o("div",{staticClass:"m-card"},[o("v-toolbar",{attrs:{flat:""}},[o("v-toolbar-title",[t._v(t._s(t.$t("t_pending_reported_comments")))]),t._v(" "),o("v-spacer"),t._v(" "),t.$adgate.allow(t.$auth.user,"delete","comments")?o("v-fade-transition",[t.selected.length>0?o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{text:"",icon:""},on:{click:function(e){t.dialogs.delete=!0}}},n),[o("v-icon",[t._v("mdi-delete")])],1)]}}],null,!1,3064050874)},[t._v(" "),o("span",[t._v(t._s(t.$t("t_delete")))])]):t._e()],1):t._e()],1),t._v(" "),o("v-data-table",{attrs:{headers:t.headers,items:t.reports,"item-key":"id","hide-default-footer":"",loading:t.loading,"show-select":"","disable-pagination":"","no-data-text":t.$t("t_table_no_data_available"),"mobile-breakpoint":1},scopedSlots:t._u([{key:"item.author",fn:function(e){var o=e.item;return[t._v("\n\t\t\t\t\t\t"+t._s(o.reporter.username)+"\n\t\t\t\t\t")]}},{key:"item.status",fn:function(e){var n=e.item;return[null===n.comment.deleted_at?o("div",[n.comment.isActive?o("v-btn",{attrs:{text:"",color:"#26c281"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("t_active"))+"\n\t\t\t\t\t\t\t")]):n.comment.isPending?o("v-btn",{attrs:{text:"",color:"warning"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("t_pending"))+"\n\t\t\t\t\t\t\t")]):n.comment.isSpam?o("v-btn",{attrs:{text:"",color:"info"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("t_spam"))+"\n\t\t\t\t\t\t\t")]):t._e()],1):t._e(),t._v(" "),null!==n.comment.deleted_at?o("v-btn",{attrs:{text:"",color:"error"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("t_deleted"))+"\n\t\t\t\t\t\t")]):t._e()]}},{key:"item.created",fn:function(e){var o=e.item;return[t._v(t._s(t.$ago(o.comment.created_at)))]}},{key:"item.options",fn:function(e){var n=e.item;return[o("v-menu",{attrs:{bottom:"",left:!t.$vuetify.rtl,right:!!t.$vuetify.rtl,origin:"center center","max-height":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{small:"",icon:""}},n),[o("v-icon",{attrs:{size:"18px",color:t.$vuetify.theme.dark?"white":"grey darken-1"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),o("v-list",{attrs:{dense:""}},[t.$adgate.allow(t.$auth.user,"access","comments")?o("v-list-item",{on:{click:function(e){return t.read(n.comment.comment)}}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-comment-eye")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t("t_read")))])],1)],1):t._e(),t._v(" "),t.$adgate.allow(t.$auth.user,"edit","comments")?o("v-list-item",{on:{click:function(e){t.edit(n.comment,t.reports.indexOf(n))}}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-square-edit-outline")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t("t_edit")))])],1)],1):t._e(),t._v(" "),null===n.deleted_at&&t.$adgate.allow(t.$auth.user,"delete","comments")?o("v-list-item",{on:{click:function(e){t.remove([n],t.reports.indexOf(n))}}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-delete")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t("t_delete")))])],1)],1):t._e(),t._v(" "),o("v-list-item",{on:{click:function(e){t.readReport([n],t.reports.indexOf(n))}}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-eye")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t("t_mark_as_read")))])],1)],1),t._v(" "),null===n.comment.deleted_at&&t.$adgate.allow(t.$auth.user,"delete","comments")?o("v-list-item",{on:{click:function(e){t.remove([n],t.reports.indexOf(n))}}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-delete")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t("t_delete")))])],1)],1):t._e()],1)],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),o("div",{staticClass:"text-center pt-2"},[o("pagination",{attrs:{data:t.reportsData,limit:8,align:t.$vuetify.rtl?"left":"right"},on:{"pagination-change-page":t.getNextPage}},[o("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[o("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_right":"chevron_left"))])]),t._v(" "),o("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[o("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_left":"chevron_right"))])])])],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);