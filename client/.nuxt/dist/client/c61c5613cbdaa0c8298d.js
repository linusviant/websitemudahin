(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{618:function(t,e,r){"use strict";r.r(e);var n,o=r(97),l=(r(47),r(27)),d={layout:"default/moderator",middleware:"moderator",asyncData:(n=Object(l.a)(regeneratorRuntime.mark((function t(e){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,n=e.$axios,o=e.redirect,r.$mogate.allow(r.$auth.user,"access","deals")||o("/moderator"),t.next=4,n.get("moderator/reports/deals");case 4:return l=t.sent,t.abrupt("return",{reportsData:l.data,reports:l.data.data});case 6:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)}),data:function(){return{selected:[],dialogs:{delete:!1},loading:!1}},head:function(){return{title:this.$t("t_pending_reported_deals"),titleTemplate:"%s ".concat(this.$store.state.settings.separator," ").concat(this.$t("t_dashboard")),meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi("storage/app/".concat(this.$store.state.settings.favicon)):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},computed:{headers:function(){return[{text:this.$t("t_preview"),value:"preview",sortable:!1,align:"center"},{text:this.$t("t_title"),value:"title",sortable:!1,align:this.$vuetify.rtl?"right":"left"},{text:this.$t("t_price"),value:"price",sortable:!1,align:"center"},{text:this.$t("t_reporter"),value:"reporter",sortable:!1,align:"center"},{text:this.$t("t_status"),value:"status",sortable:!1,align:"center"},{text:this.$t("t_created"),value:"created",sortable:!1,align:"center"},{text:this.$t("t_options"),value:"options",sortable:!1,align:"center"}]}},methods:{getNextPage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,this.$axios.get("administrator/reports/deals?page="+e).then((function(e){t.selected=[],t.reportsData=e.data,t.reports=e.data.data,void 0!==("undefined"==typeof window?"undefined":Object(o.a)(window))&&window.scrollTo(0,0),t.loading=!1}))},read:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.selected,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this;n.loading=!0,this.$axios.post("administrator/reports/deals/options/read",{reports:e}).then((function(e){null!==r?t.reports.splice(r,1):n.selected.forEach((function(t,e){n.reports.forEach((function(e,r){t.unique_id===e.unique_id&&n.reports.splice(r,1)}))})),n.$toasted.show(t.$t("t_toasted_reports_read"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),n.loading=!1})).catch((function(e){console.log(e),n.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),n.loading=!1}))},remove:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.selected,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.$adgate.allow(this.$auth.user,"delete","deals")){var n=this;n.loading=!0,this.$axios.post("administrator/reports/deals/options/delete",{reports:e}).then((function(e){null!==r?(t.reports[r].deal.isPending=!1,t.reports[r].deal.isActive=!1,t.reports[r].deal.isArchived=!1,t.reports[r].deal.deleted_at=!0):n.selected.forEach((function(t,e){n.deals.forEach((function(e,r){t.unique_id===e.unique_id&&(n.reports[r].deal.isArchived=!1,n.reports[r].deal.isActive=!1,n.reports[r].deal.isPending=!1,n.reports[r].deal.deleted_at=!0)}))})),n.$toasted.show(t.$t("t_toasted_deals_deleted"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),n.loading=!1})).catch((function(e){console.log(e),n.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),n.loading=!1}))}else this.$router.push("/administrator")},preview:function(t){return 0==t.photosNumber?this.$homeApi("storage/app/uploads/default/classifieds/no-image.png"):this.$homeApi("storage/app/uploads/classifieds/"+t.unique_id+"/preview_0.jpg")}}},c=r(52),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t\t")])],1),t._v(" "),t.$adgate.allow(t.$auth.user,"delete","deals")?r("v-dialog",{attrs:{"max-width":"400",persistent:""},model:{value:t.dialogs.delete,callback:function(e){t.$set(t.dialogs,"delete",e)},expression:"dialogs.delete"}},[r("v-card",{staticClass:"py-2"},[r("v-card-text",[r("div",{staticClass:"text-center mb-5"},[r("v-icon",{attrs:{size:"100px",color:"error"}},[t._v("mdi-alert-octagon-outline")])],1),t._v(" "),r("div",{staticClass:"mb-4 text-center headline font-weight-black text-uppercase"},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("t_are_you_sure"))+"\n\t\t\t\t\t")])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialogs.delete=!1}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("t_cancel"))+"\n\t\t\t\t\t")]),t._v(" "),r("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){return t.remove()}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.selected.length>1?t.$t("t_delete_deals"):t.$t("t_delete_deal"))+"\n\t\t\t\t\t")])],1)],1)],1):t._e(),t._v(" "),r("v-container",[r("div",{staticClass:"m-card"},[r("v-toolbar",{staticClass:"elevation-0",attrs:{color:"white"}},[r("v-toolbar-title",[t._v(t._s(t.$t("t_pending_reported_deals")))]),t._v(" "),r("v-spacer"),t._v(" "),t.$adgate.allow(t.$auth.user,"delete","deals")?r("v-fade-transition",[t.selected.length>0?r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{text:"",icon:"",color:"grey darken-3"},on:{click:function(e){t.dialogs.delete=!0}}},n),[r("v-icon",[t._v("mdi-delete")])],1)]}}],null,!1,421198673)},[t._v(" "),r("span",[t._v(t._s(t.$t("t_delete")))])]):t._e()],1):t._e(),t._v(" "),r("v-fade-transition",[t.selected.length>0?r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{text:"",icon:"",color:"grey darken-3"},on:{click:function(e){return t.read()}}},n),[r("v-icon",[t._v("mdi-eye")])],1)]}}],null,!1,970395183)},[t._v(" "),r("span",[t._v(t._s(t.$t("t_mark_as_read")))])]):t._e()],1)],1),t._v(" "),r("v-data-table",{attrs:{headers:t.headers,items:t.reports,"item-key":"id","hide-default-footer":"",loading:t.loading,"show-select":"","disable-pagination":"","no-data-text":t.$t("t_table_no_data_available")},scopedSlots:t._u([{key:"item.preview",fn:function(e){var n=e.item;return[r("v-avatar",{attrs:{size:"36px"}},[r("img",{attrs:{src:t.preview(n.deal)}})])]}},{key:"item.title",fn:function(e){var n=e.item;return[r("nuxt-link",{staticClass:"table-wrap-title",attrs:{to:"/listing/"+n.deal.unique_slug,target:"_blank"}},[t._v(t._s(n.deal.title))]),t._v(" "),r("small",{staticClass:"pb-1 font-weight-regular text-uppercase d-block"},[t._v(t._s(n.deal.user.username))])]}},{key:"item.price",fn:function(e){var n=e.item;return[null===n.deal.price&&null===n.deal.currency&&null===n.deal.locale?r("div"):r("div",[t._v(t._s(t.$getCurrency(n.deal.price,n.deal.currency,n.deal.locale)))])]}},{key:"item.reporter",fn:function(e){var r=e.item;return[t._v(t._s(r.reporter.username))]}},{key:"item.status",fn:function(e){var n=e.item;return[null===n.deal.deleted_at?r("div",[!n.deal.isUpgraded||n.deal.isPending||n.deal.isArchived?n.deal.isActive?r("v-btn",{attrs:{text:"",color:"#2ecc71"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("t_active"))+"\n\t\t\t\t\t\t\t")]):n.deal.isArchived?r("v-btn",{attrs:{text:"",color:"warning"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("t_archived"))+"\n\t\t\t\t\t\t\t")]):t._e():r("v-btn",{attrs:{text:"",color:"#19b5fe"}},["urgent"===n.deal.upgradedTo?r("span",[t._v(t._s(t.$t("t_urgent")))]):t._e(),t._v(" "),"highlight"===n.deal.upgradedTo?r("span",[t._v(t._s(t.$t("t_highlight")))]):t._e(),t._v(" "),"featured"===n.deal.upgradedTo?r("span",[t._v(t._s(t.$t("t_featured")))]):t._e()])],1):t._e(),t._v(" "),null!==n.deal.deleted_at?r("v-btn",{attrs:{text:"",color:"error"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("t_deleted"))+"\n\t\t\t\t\t\t")]):t._e()]}},{key:"item.created",fn:function(e){var r=e.item;return[t._v(t._s(t.$ago(r.deal.created_at)))]}},{key:"item.options",fn:function(e){var n=e.item;return[r("v-menu",{attrs:{bottom:"",left:!t.$vuetify.rtl,right:!!t.$vuetify.rtl,origin:"center center","max-height":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{small:"",icon:""}},n),[r("v-icon",{attrs:{size:"18px",color:"grey darken-1"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),r("v-list",{attrs:{dense:""}},[t.$adgate.allow(t.$auth.user,"edit","deals")?r("v-list-item",{attrs:{to:"/administrator/deals/options/edit/"+n.deal.unique_id}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-square-edit-outline")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$t("t_edit")))])],1)],1):t._e(),t._v(" "),null===n.deal.deleted_at&&t.$adgate.allow(t.$auth.user,"delete","deals")?r("v-list-item",{on:{click:function(e){t.remove([n],t.reports.indexOf(n))}}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-delete")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$t("t_delete")))])],1)],1):t._e(),t._v(" "),r("v-list-item",{on:{click:function(e){t.read([n],t.reports.indexOf(n))}}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-eye")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$t("t_mark_as_read")))])],1)],1)],1)],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),r("div",{staticClass:"text-center pt-2"},[r("pagination",{attrs:{data:t.reportsData,limit:8,align:t.$vuetify.rtl?"left":"right"},on:{"pagination-change-page":t.getNextPage}},[r("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[r("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_right":"chevron_left"))])]),t._v(" "),r("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[r("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_left":"chevron_right"))])])])],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);