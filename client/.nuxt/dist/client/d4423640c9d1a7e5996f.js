(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{685:function(t,e,n){"use strict";n.r(e);var o,l=n(97),r=(n(47),n(27)),c={layout:"default/admin",middleware:"administrator",asyncData:(o=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,o,l,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,o=e.$axios,l=e.redirect,n.$owgate.allow(n.$auth.user,"access","plans")||l("/administrator"),t.next=4,o.get("administrator/deals/packages");case 4:return r=t.sent,t.abrupt("return",{packagesData:r.data,packages:r.data.data});case 6:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),data:function(){return{selected:[],headers:[{text:this.$t("t_title"),value:"title",sortable:!1,align:this.$vuetify.rtl?"right":"left"},{text:this.$t("t_price"),value:"price",sortable:!1,align:"center"},{text:this.$t("t_discount"),value:"discount",sortable:!1,align:"center"},{text:this.$t("t_type"),value:"type",sortable:!1,align:"center"},{text:this.$t("t_head_days"),value:"days",sortable:!1,align:"center"},{text:this.$t("t_options"),value:"options",sortable:!1,align:"center"}],dialogs:{delete:!1},loading:!1}},head:function(){return{title:this.$t("t_packages"),titleTemplate:"%s ".concat(this.$store.state.settings.separator," ").concat(this.$t("t_dashboard")),meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi("storage/app/".concat(this.$store.state.settings.favicon)):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{getNextPage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,this.$axios.get("administrator/deals/packages?page="+e).then((function(e){t.selected=[],t.packagesData=e.data,t.packages=e.data.data,void 0!==("undefined"==typeof window?"undefined":Object(l.a)(window))&&window.scrollTo(0,0),t.loading=!1}))},remove:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.selected,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.$owgate.allow(this.$auth.user,"delete","plans")){var o=this;o.loading=!0,this.$axios.post("administrator/membership/plans/options/delete",{plans:e}).then((function(e){null!==n?t.plans[n].deleted_at=!0:o.selected.forEach((function(t,e){o.plans.forEach((function(e,n){t.unique_id===e.unique_id&&(o.plans[n].deleted_at=!0)}))})),o.$toasted.show(t.$t("t_toasted_plans_deleted"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),o.dialogs.delete=!1,o.loading=!1})).catch((function(e){console.log(e),o.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),o.loading=!1}))}else this.$router.push("/administrator")},restore:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.selected,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.$owgate.allow(this.$auth.user,"delete","plans")){var o=this;o.loading=!0,this.$axios.post("administrator/membership/plans/options/restore",{plans:e}).then((function(e){null!==n?t.plans[n].deleted_at=null:o.selected.forEach((function(t,e){o.plans.forEach((function(e,n){t.unique_id===e.unique_id&&(o.plans[n].deleted_at=null)}))})),o.$toasted.show(t.$t("t_toasted_plans_restored"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),o.loading=!1})).catch((function(e){console.log(e),o.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),o.loading=!1}))}else this.$router.push("/administrator")}}},d=n(52),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t\t")])],1),t._v(" "),t.$owgate.allow(t.$auth.user,"delete","plans")?n("v-dialog",{attrs:{"max-width":"400",persistent:""},model:{value:t.dialogs.delete,callback:function(e){t.$set(t.dialogs,"delete",e)},expression:"dialogs.delete"}},[n("v-card",{staticClass:"py-2"},[n("v-card-text",[n("div",{staticClass:"text-center mb-5"},[n("v-icon",{attrs:{size:"100px",color:"error"}},[t._v("mdi-alert-octagon-outline")])],1),t._v(" "),n("div",{staticClass:"mb-4 text-center headline font-weight-black text-uppercase"},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("t_are_you_sure"))+"\n\t\t\t\t\t")])]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialogs.delete=!1}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("t_cancel"))+"\n\t\t\t\t\t")]),t._v(" "),n("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){return t.remove()}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.selected.length>1?t.$t("t_delete_plans"):t.$t("t_delete_plan"))+"\n\t\t\t\t\t")])],1)],1)],1):t._e(),t._v(" "),n("v-container",[n("div",{staticClass:"m-card"},[n("v-toolbar",{staticClass:"elevation-0",attrs:{color:"white"}},[n("v-toolbar-title",[t._v(t._s(t.$t("t_packages")))]),t._v(" "),n("v-spacer"),t._v(" "),t.$owgate.allow(t.$auth.user,"delete","plans")?n("v-fade-transition",[t.selected.length>0?n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{text:"",icon:"",color:"grey darken-3"},on:{click:function(e){t.dialogs.delete=!0}}},o),[n("v-icon",[t._v("mdi-delete")])],1)]}}],null,!1,421198673)},[t._v(" "),n("span",[t._v(t._s(t.$t("t_delete")))])]):t._e()],1):t._e(),t._v(" "),t.$owgate.allow(t.$auth.user,"delete","plans")?n("v-fade-transition",[t.selected.length>0?n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{text:"",icon:"",color:"grey darken-3"},on:{click:function(e){return t.restore()}}},o),[n("v-icon",[t._v("mdi-delete-restore")])],1)]}}],null,!1,2635020496)},[t._v(" "),n("span",[t._v(t._s(t.$t("t_restore")))])]):t._e()],1):t._e(),t._v(" "),t.$owgate.allow(t.$auth.user,"create","plans")?n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{to:"/administrator/deals/packages/create",text:"",icon:""}},o),[n("v-icon",[t._v("add")])],1)]}}],null,!1,3606121988)},[t._v(" "),n("span",[t._v(t._s(t.$t("t_create")))])]):t._e()],1),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.packages,"item-key":"id","hide-default-footer":"",loading:t.loading,"show-select":"","disable-pagination":"","no-data-text":t.$t("t_table_no_data_available")},scopedSlots:t._u([{key:"item.title",fn:function(e){var o=e.item;return[n("v-list",{staticClass:"transparent",attrs:{"two-line":""}},[n("v-list-item",[n("v-list-item-content",{staticClass:"table-wrap-title"},[n("v-list-item-title",{staticClass:"table-wrap-title pb-2",domProps:{innerHTML:t._s(o.title)}}),t._v(" "),n("v-list-item-subtitle",{staticClass:"pb-1 text-uppercase text-small font-weight-regular d-block",domProps:{innerHTML:t._s(o.slug)}})],1)],1)],1)]}},{key:"item.price",fn:function(e){var o=e.item;return[n("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$getCurrency(o.price,o.currency,o.locale)))])]}},{key:"item.discount",fn:function(e){var o=e.item;return[o.discount?n("div",{staticClass:"font-weight-black"},[t._v("\n\t\t\t\t\t\t\t"+t._s(o.discount)+" %\n\t\t\t\t\t\t")]):t._e()]}},{key:"item.type",fn:function(e){var o=e.item;return["featured"===o.type?n("v-btn",{attrs:{text:"",color:"#44add5"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("t_featured"))+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),"urgent"===o.type?n("v-btn",{attrs:{text:"",color:"#f85050"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("t_urgent"))+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),"highlight"===o.type?n("v-btn",{attrs:{text:"",color:"#fcc62c"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("t_highlight"))+"\n\t\t\t\t\t\t")]):t._e()]}},{key:"item.days",fn:function(e){var o=e.item;return[n("div",{staticClass:"font-weight-black"},[t._v(t._s(t._f("numeralFormat")(o.days)))])]}},{key:"item.options",fn:function(e){var o=e.item;return[n("v-menu",{attrs:{bottom:"",left:!t.$vuetify.rtl,right:!!t.$vuetify.rtl,origin:"center center","max-height":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{small:"",icon:""}},o),[n("v-icon",{attrs:{size:"20px",color:"grey darken-1"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),n("v-list",{attrs:{dense:""}},[t.$owgate.allow(t.$auth.user,"edit","plans")?n("v-list-item",{attrs:{to:"/administrator/deals/packages/edit/"+o.unique_id}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-square-edit-outline")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("t_edit")))])],1)],1):t._e(),t._v(" "),null===o.deleted_at&&t.$owgate.allow(t.$auth.user,"delete","plans")?n("v-list-item",{on:{click:function(e){t.remove([o],t.packages.indexOf(o))}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-delete")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("t_delete")))])],1)],1):t._e(),t._v(" "),null!==o.deleted_at&&t.$owgate.allow(t.$auth.user,"delete","plans")?n("v-list-item",{on:{click:function(e){t.restore([o],t.packages.indexOf(o))}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-delete-restore")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("t_restore")))])],1)],1):t._e()],1)],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),n("div",{staticClass:"text-center pt-2"},[n("pagination",{attrs:{data:t.packagesData,limit:8,align:t.$vuetify.rtl?"left":"right"},on:{"pagination-change-page":t.getNextPage}},[n("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[n("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_right":"chevron_left"))])]),t._v(" "),n("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[n("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_left":"chevron_right"))])])])],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);