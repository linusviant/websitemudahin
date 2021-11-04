exports.ids=[56],exports.modules={238:function(t,e,o){"use strict";o.r(e);var l={layout:"default/admin",middleware:"administrator",async asyncData({app:t,$axios:e,redirect:o}){t.$adgate.allow(t.$auth.user,"access","fields")||o("/administrator");let l=await e.get("administrator/fields");return{fieldsData:l.data,fields:l.data.data}},data:function(){return{selected:[],headers:[{text:this.$t("t_name"),value:"name",sortable:!1,align:this.$vuetify.rtl?"right":"left"},{text:this.$t("t_categories"),value:"categories",sortable:!1,align:"center"},{text:this.$t("t_type"),value:"type",sortable:!1,align:this.$vuetify.rtl?"right":"left"},{text:this.$t("t_field_options"),value:"options",sortable:!1,align:"center"},{text:this.$t("t_status"),value:"status",sortable:!1,align:"center"},{text:this.$t("t_options"),value:"actions",sortable:!1,align:"center"}],dialogs:{delete:!1,options:!1},field:{},loading:!1}},head(){return{title:this.$t("t_custom_fields"),titleTemplate:`%s ${this.$store.state.settings.separator} ${this.$t("t_dashboard")}`,meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi(`storage/app/${this.$store.state.settings.favicon}`):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{getNextPage(t=1){this.loading=!0,this.$axios.get("administrator/fields?page="+t).then(t=>{this.selected=[],this.fieldsData=t.data,this.fields=t.data.data,void 0!==typeof window&&window.scrollTo(0,0),this.loading=!1})},remove:function(t=this.selected,e=null){if(!this.$adgate.allow(this.$auth.user,"delete","fields"))return void this.$router.push("/administrator");let o=this;o.loading=!0,this.$axios.post("administrator/fields/options/delete",{fields:t}).then(t=>{null!==e?this.fields[e].deleted_at=!0:o.selected.forEach((function(t,e){o.fields.forEach((function(e,l){t.unique_id===e.unique_id&&(o.fields[l].deleted_at=!0)}))})),o.$toasted.show(this.$t("t_toasted_fields_deleted"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),o.loading=!1}).catch(t=>{console.log(t),o.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),o.loading=!1})},restore:function(t=this.selected,e=null){if(!this.$adgate.allow(this.$auth.user,"delete","fields"))return void this.$router.push("/administrator");let o=this;o.loading=!0,this.$axios.post("administrator/fields/options/restore",{fields:t}).then(t=>{null!==e?this.fields[e].deleted_at=null:o.selected.forEach((function(t,e){o.fields.forEach((function(e,l){t.unique_id===e.unique_id&&(o.fields[l].deleted_at=null)}))})),o.$toasted.show(this.$t("t_toasted_fields_restored"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),o.loading=!1}).catch(t=>{console.log(t),o.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),o.loading=!1})},options:function(t){this.field=t,this.dialogs.options=!0},type(t){switch(t){case"dropdown":return this.$t("t_dropdown");case"checkbox":return this.$t("t_checkbox");case"radio":return this.$t("t_radio");default:return this.$t("t_dropdown")}}}},n=o(1),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[o("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t\t")])],1),t._v(" "),t.$adgate.allow(t.$auth.user,"delete","fields")?o("v-dialog",{attrs:{"max-width":"400",persistent:""},model:{value:t.dialogs.delete,callback:function(e){t.$set(t.dialogs,"delete",e)},expression:"dialogs.delete"}},[o("v-card",{staticClass:"py-2"},[o("v-card-text",[o("div",{staticClass:"text-center mb-5"},[o("v-icon",{attrs:{size:"100px",color:"error"}},[t._v("mdi-alert-octagon-outline")])],1),t._v(" "),o("div",{staticClass:"mb-4 text-center headline font-weight-black text-uppercase"},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("t_are_you_sure"))+"\n\t\t\t\t\t")])]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialogs.delete=!1}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("t_cancel"))+"\n\t\t\t\t\t")]),t._v(" "),o("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){return t.remove()}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.selected.length>1?t.$t("t_delete_fields"):t.$t("t_delete_field"))+"\n\t\t\t\t\t")])],1)],1)],1):t._e(),t._v(" "),t.$adgate.allow(t.$auth.user,"access","fields")?o("v-dialog",{attrs:{"max-width":"400",persistent:""},model:{value:t.dialogs.options,callback:function(e){t.$set(t.dialogs,"options",e)},expression:"dialogs.options"}},[o("v-card",{staticClass:"py-2"},[o("v-card-text",["dropdown"===t.field.type?o("div",[o("v-flex",{staticClass:"pt-4",attrs:{xs12:""}},[o("v-select",{attrs:{autocomplete:"off",color:"grey lighten-1",items:t.field.options.split(","),placeholder:t.field.name,label:t.field.name,dense:""}})],1)],1):t._e(),t._v(" "),"checkbox"===t.field.type?o("div",[o("p",[t._v(t._s(t.field.name))]),t._v(" "),t._l(t.field.options.split(","),(function(option){return o("v-checkbox",{key:option,attrs:{label:option,color:"grey darken-3",value:option,"hide-details":""}})}))],2):t._e(),t._v(" "),"radio"===t.field.type?o("div",[o("p",[t._v(t._s(t.field.name))]),t._v(" "),o("v-radio-group",{attrs:{mandatory:!1}},t._l(t.field.options.split(","),(function(option){return o("v-radio",{key:option,attrs:{label:option,value:option,color:"grey darken-3"}})})),1)],1):t._e()]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialogs.options=!1}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("t_cancel"))+"\n\t\t\t\t\t")])],1)],1)],1):t._e(),t._v(" "),o("v-container",[o("div",{staticClass:"m-card"},[o("v-toolbar",{attrs:{flat:""}},[o("v-toolbar-title",[t._v(t._s(t.$t("t_custom_fields")))]),t._v(" "),o("v-spacer"),t._v(" "),t.$adgate.allow(t.$auth.user,"delete","fields")?o("v-fade-transition",[t.selected.length>0?o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[o("v-btn",t._g({attrs:{text:"",icon:"",color:t.$vuetify.theme.dark?"white":"grey darken-3"},on:{click:function(e){t.dialogs.delete=!0}}},l),[o("v-icon",[t._v("mdi-delete")])],1)]}}],null,!1,228501886)},[t._v(" "),o("span",[t._v(t._s(t.$t("t_delete")))])]):t._e()],1):t._e(),t._v(" "),t.$adgate.allow(t.$auth.user,"delete","fields")?o("v-fade-transition",[t.selected.length>0?o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[o("v-btn",t._g({attrs:{text:"",icon:"",color:t.$vuetify.theme.dark?"white":"grey darken-3"},on:{click:function(e){return t.restore()}}},l),[o("v-icon",[t._v("mdi-delete-restore")])],1)]}}],null,!1,1586185791)},[t._v(" "),o("span",[t._v(t._s(t.$t("t_restore")))])]):t._e()],1):t._e(),t._v(" "),t.$adgate.allow(t.$auth.user,"create","fields")?o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[o("v-btn",t._g({attrs:{to:"/administrator/fields/create",text:"",icon:""}},l),[o("v-icon",[t._v("add")])],1)]}}],null,!1,3482964684)},[t._v(" "),o("span",[t._v(t._s(t.$t("t_create")))])]):t._e()],1),t._v(" "),o("v-data-table",{attrs:{headers:t.headers,items:t.fields,"item-key":"id","hide-default-footer":"",loading:t.loading,"show-select":"","disable-pagination":"","mobile-breakpoint":1,"no-data-text":t.$t("t_table_no_data_available")},scopedSlots:t._u([{key:"item.name",fn:function(e){var l=e.item;return[o("div",{staticClass:"table-wrap-title"},[t._v(t._s(l.name))]),t._v(" "),o("small",{staticClass:"pb-1 font-weight-regular text-uppercase d-block"},[t._v(t._s(l.slug))])]}},{key:"item.categories",fn:function(e){e.item;return[o("v-btn",{attrs:{text:"",icon:"",color:"grey darken-3"}},[o("v-icon",{attrs:{size:"22px"}},[t._v("mdi-format-list-bulleted-type")])],1)]}},{key:"item.type",fn:function(e){var o=e.item;return[t._v(t._s(t.type(o.type)))]}},{key:"item.options",fn:function(e){var l=e.item;return[o("v-btn",{attrs:{text:"",icon:"",color:"grey darken-3"},on:{click:function(e){return t.options(l)}}},[o("v-icon",{attrs:{size:"20px"}},[t._v("mdi-tune")])],1)]}},{key:"item.status",fn:function(e){var l=e.item;return[null===l.deleted_at?o("div",[o("v-btn",{attrs:{text:"",color:"#2ecc71"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("t_active"))+"\n\t\t\t\t\t\t\t")])],1):t._e(),t._v(" "),null!==l.deleted_at?o("v-btn",{attrs:{text:"",color:"error"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("t_deleted"))+"\n\t\t\t\t\t\t")]):t._e()]}},{key:"item.actions",fn:function(e){var l=e.item;return[o("v-menu",{attrs:{bottom:"",left:!t.$vuetify.rtl,right:!!t.$vuetify.rtl,origin:"center center","max-height":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[o("v-btn",t._g({attrs:{icon:""}},l),[o("v-icon",{attrs:{size:"20px",color:"grey darken-1"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),o("v-list",{attrs:{dense:""}},[t.$adgate.allow(t.$auth.user,"edit","fields")?o("v-list-item",{attrs:{to:"/administrator/fields/edit/"+l.unique_id}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-square-edit-outline")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t("t_edit")))])],1)],1):t._e(),t._v(" "),null===l.deleted_at&&t.$adgate.allow(t.$auth.user,"delete","fields")?o("v-list-item",{on:{click:function(e){t.remove([l],t.fields.indexOf(l))}}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-delete")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t("t_delete")))])],1)],1):t._e(),t._v(" "),null!==l.deleted_at&&t.$adgate.allow(t.$auth.user,"delete","fields")?o("v-list-item",{on:{click:function(e){t.restore([l],t.fields.indexOf(l))}}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-delete-restore")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t("t_restore")))])],1)],1):t._e()],1)],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),o("div",{staticClass:"text-center pt-2"},[o("pagination",{attrs:{data:t.fieldsData,limit:8,align:t.$vuetify.rtl?"left":"right"},on:{"pagination-change-page":t.getNextPage}},[o("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[o("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_right":"chevron_left"))])]),t._v(" "),o("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[o("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_left":"chevron_right"))])])])],1)])],1)}),[],!1,null,null,"533f8f81");e.default=component.exports}};