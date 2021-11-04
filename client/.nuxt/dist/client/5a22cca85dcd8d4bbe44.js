(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{692:function(t,e,n){"use strict";n.r(e);var o,r=n(97),l=(n(47),n(27)),c={layout:"default/admin",middleware:"administrator",asyncData:(o=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,o,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,o=e.$axios,r=e.redirect,n.$adgate.allow(n.$auth.user,"access","categories")||r("/administrator"),t.next=4,o.get("administrator/categories");case 4:return l=t.sent,t.abrupt("return",{categoriesData:l.data,categories:l.data.data});case 6:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),data:function(){return{selected:[],headers:[{text:this.$t("t_icon"),value:"icon",sortable:!1,align:"center"},{text:this.$t("t_title"),value:"title",sortable:!1,align:this.$vuetify.rtl?"right":"left"},{text:this.$t("t_sub_categories"),value:"subcategories",sortable:!1,align:"center"},{text:this.$t("t_deals"),value:"deals",sortable:!1,align:"center"},{text:this.$t("t_created"),value:"created",sortable:!1,align:"center"},{text:this.$t("t_options"),value:"options",sortable:!1,align:"center"}],dialogs:{delete:!1},loading:!1}},head:function(){return{title:this.$t("t_categories"),titleTemplate:"%s ".concat(this.$store.state.settings.separator," ").concat(this.$t("t_dashboard")),meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi("storage/app/".concat(this.$store.state.settings.favicon)):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{getNextPage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,this.$axios.get("administrator/categories?page="+e).then((function(e){t.selected=[],t.categoriesData=e.data,t.categories=e.data.data,void 0!==("undefined"==typeof window?"undefined":Object(r.a)(window))&&window.scrollTo(0,0),t.loading=!1}))},icon:function(t){return null===t?this.$homeApi("storage/app/uploads/default/category/no-icon.png"):this.$homeApi("storage/app/"+t)},remove:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.selected;this.$adgate.allow(this.$auth.user,"delete","categories")?this.$axios.post("administrator/deals/options/delete",{deals:e}).then((function(n){var o=t;o.selected.forEach((function(t,e){o.deals.forEach((function(e,n){t.unique_id===e.unique_id&&(e.deleted_at=!0)}))})),t.selected=[],t.dialogs.delete=!1,t.$toasted.show("Selected ".concat(e.length>1?"deals":"deal"," has been successfully deleted."),{icon:"done_all"})})).catch((function(e){console.log(e),t.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",action:null})})):this.$router.push("/administrator")}}},d=n(52),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t\t")])],1),t._v(" "),t.$adgate.allow(t.$auth.user,"delete","categories")?n("v-dialog",{attrs:{"max-width":"400",persistent:""},model:{value:t.dialogs.delete,callback:function(e){t.$set(t.dialogs,"delete",e)},expression:"dialogs.delete"}},[n("v-card",{staticClass:"py-2"},[n("v-card-text",[n("div",{staticClass:"text-center mb-5"},[n("v-icon",{attrs:{size:"100px",color:"error"}},[t._v("mdi-alert-octagon-outline")])],1),t._v(" "),n("div",{staticClass:"mb-4 text-center headline font-weight-black text-uppercase"},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("t_are_you_sure"))+"\n\t\t\t\t\t")])]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialogs.delete=!1}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("t_cancel"))+"\n\t\t\t\t\t")]),t._v(" "),n("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){return t.remove()}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.selected.length>1?t.$t("t_delete_categories"):t.$t("t_delete_category"))+"\n\t\t\t\t\t")])],1)],1)],1):t._e(),t._v(" "),n("v-container",[n("div",{staticClass:"m-card"},[n("v-toolbar",{staticClass:"elevation-0",attrs:{color:"white"}},[n("v-toolbar-title",[t._v(t._s(t.$t("t_categories")))]),t._v(" "),n("v-spacer"),t._v(" "),t.$adgate.allow(t.$auth.user,"delete","categories")?n("v-fade-transition",[t.selected.length>0?n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{text:"",icon:""},on:{click:function(e){t.dialogs.delete=!0}}},o),[n("v-icon",[t._v("mdi-delete")])],1)]}}],null,!1,3064050874)},[t._v(" "),n("span",[t._v(t._s(t.$t("t_delete")))])]):t._e()],1):t._e(),t._v(" "),t.$adgate.allow(t.$auth.user,"delete","categories")?n("v-fade-transition",[t.selected.length>0?n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{text:"",icon:""},on:{click:function(e){return t.restore()}}},o),[n("v-icon",[t._v("mdi-delete-restore")])],1)]}}],null,!1,2460523131)},[t._v(" "),n("span",[t._v(t._s(t.$t("t_restore")))])]):t._e()],1):t._e(),t._v(" "),t.$adgate.allow(t.$auth.user,"create","categories")?n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{to:"/administrator/categories/create",text:"",icon:""}},o),[n("v-icon",[t._v("add")])],1)]}}],null,!1,518611563)},[t._v(" "),n("span",[t._v(t._s(t.$t("t_create")))])]):t._e()],1),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.categories,"item-key":"id","hide-default-footer":"",loading:t.loading,"show-select":"","disable-pagination":"","no-data-text":t.$t("t_table_no_data_available")},scopedSlots:t._u([{key:"item.icon",fn:function(e){var o=e.item;return[n("v-avatar",{attrs:{size:"36px"}},[n("img",{attrs:{src:t.icon(o.icon)}})])]}},{key:"item.title",fn:function(e){var o=e.item;return[n("nuxt-link",{staticClass:"table-wrap-title",attrs:{to:"/category/"+o.slug,target:"_blank"}},[t._v(t._s(o.title))]),t._v(" "),n("small",{staticClass:"pb-1 font-weight-regular text-uppercase d-block"},[t._v(t._s(o.slug))])]}},{key:"item.subcategories",fn:function(e){var n=e.item;return[t._v(t._s(n.childs.length))]}},{key:"item.deals",fn:function(e){var n=e.item;return[t._v(t._s(n.deals.length))]}},{key:"item.created",fn:function(e){var n=e.item;return[t._v(t._s(t.$ago(n.created_at)))]}},{key:"item.options",fn:function(e){var o=e.item;return[n("v-menu",{attrs:{bottom:"",left:!t.$vuetify.rtl,right:!!t.$vuetify.rtl,origin:"center center","max-height":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{small:"",icon:""}},o),[n("v-icon",{attrs:{size:"18px",color:"grey darken-1"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),n("v-list",{attrs:{dense:""}},[t.$adgate.allow(t.$auth.user,"edit","categories")?n("v-list-item",{attrs:{to:"/administrator/categories/edit/"+o.slug}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-square-edit-outline")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("t_edit")))])],1)],1):t._e(),t._v(" "),null===o.deleted_at&&t.$adgate.allow(t.$auth.user,"delete","categories")?n("v-list-item",{on:{click:function(e){t.remove([o],t.categories.indexOf(o))}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-delete")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("t_delete")))])],1)],1):t._e(),t._v(" "),null!==o.deleted_at&&t.$adgate.allow(t.$auth.user,"delete","categories")?n("v-list-item",{on:{click:function(e){t.restore([o],t.categories.indexOf(o))}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-delete-restore")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("t_restore")))])],1)],1):t._e()],1)],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),n("div",{staticClass:"text-center pt-2"},[n("pagination",{attrs:{data:t.categoriesData,limit:8,align:t.$vuetify.rtl?"left":"right"},on:{"pagination-change-page":t.getNextPage}},[n("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[n("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_right":"chevron_left"))])]),t._v(" "),n("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[n("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_left":"chevron_right"))])])])],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);