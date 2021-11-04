exports.ids=[40],exports.modules={263:function(t,e,o){"use strict";o.r(e);var l={layout:"default/admin",middleware:"administrator",async asyncData({app:t,$axios:e,redirect:o}){t.$adgate.allow(t.$auth.user,"access","blog")||o("/administrator");let l=await e.get("administrator/blog");return{blogData:l.data,blog:l.data.data}},data:function(){return{selected:[],headers:[{text:this.$t("t_cover"),value:"cover",sortable:!1,align:"center"},{text:this.$t("t_title"),value:"title",sortable:!1,align:this.$vuetify.rtl?"right":"left"},{text:this.$t("t_author"),value:"author",sortable:!1,align:"center"},{text:this.$t("t_created"),value:"created",sortable:!1,align:"center"},{text:this.$t("t_status"),value:"status",sortable:!1,align:"center"},{text:this.$t("t_options"),value:"options",sortable:!1,align:"center"}],dialogs:{delete:!1},loading:!1}},head(){return{title:this.$t("t_blog"),titleTemplate:`%s ${this.$store.state.settings.separator} ${this.$t("t_dashboard")}`,meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi(`storage/app/${this.$store.state.settings.favicon}`):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{getNextPage(t=1){this.loading=!0,this.$axios.get("administrator/blog?page="+t).then(t=>{this.selected=[],this.blogData=t.data,this.blog=t.data.data,void 0!==typeof window&&window.scrollTo(0,0),this.loading=!1})},cover:function(article){return null===article.cover?this.$homeApi("storage/app/uploads/default/article/no-image.png"):this.$homeApi("storage/app/"+article.cover)},remove:function(t=this.selected,e=null){if(!this.$adgate.allow(this.$auth.user,"delete","blog"))return void this.$router.push("/administrator");let o=this;o.loading=!0,this.$axios.post("administrator/blog/options/delete",{articles:t}).then(t=>{null!==e?this.blog[e].deleted_at=!0:o.selected.forEach((function(t,e){o.blog.forEach((function(e,l){t.id===e.id&&(o.blog[l].deleted_at=!0)}))})),o.$toasted.show(this.$t("t_toasted_articles_moved_to_trash"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),o.dialogs.delete=!1,o.loading=!1}).catch(t=>{console.log(t),o.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),o.loading=!1})},restore:function(t=this.selected,e=null){if(!this.$adgate.allow(this.$auth.user,"delete","blog"))return void this.$router.push("/administrator");let o=this;o.loading=!0,this.$axios.post("administrator/blog/options/restore",{articles:t}).then(t=>{null!==e?this.blog[e].deleted_at=null:o.selected.forEach((function(t,e){o.blog.forEach((function(e,l){t.id===e.id&&(o.blog[l].deleted_at=null)}))})),o.$toasted.show(this.$t("t_toasted_articles_restored"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),o.loading=!1}).catch(t=>{console.log(t),o.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),o.loading=!1})}}},n=o(1),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[o("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t\t")])],1),t._v(" "),t.$adgate.allow(t.$auth.user,"delete","blog")?o("v-dialog",{attrs:{"max-width":"400",persistent:""},model:{value:t.dialogs.delete,callback:function(e){t.$set(t.dialogs,"delete",e)},expression:"dialogs.delete"}},[o("v-card",{staticClass:"py-2"},[o("v-card-text",[o("div",{staticClass:"text-center mb-5"},[o("v-icon",{attrs:{size:"100px",color:"error"}},[t._v("mdi-alert-octagon-outline")])],1),t._v(" "),o("div",{staticClass:"mb-4 text-center headline font-weight-black text-uppercase"},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("t_are_you_sure"))+"\n\t\t\t\t\t")])]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialogs.delete=!1}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("t_cancel"))+"\n\t\t\t\t\t")]),t._v(" "),o("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){return t.remove()}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.selected.length>1?this.$t("t_delete_articles"):this.$t("t_delete_article"))+"\n\t\t\t\t\t")])],1)],1)],1):t._e(),t._v(" "),o("v-container",[o("div",{staticClass:"m-card"},[o("v-toolbar",{attrs:{flat:""}},[o("v-toolbar-title",[t._v(t._s(t.$t("t_articles")))]),t._v(" "),o("v-spacer"),t._v(" "),t.$adgate.allow(t.$auth.user,"delete","blog")?o("v-fade-transition",[t.selected.length>0?o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[o("v-btn",t._g({attrs:{text:"",icon:""},on:{click:function(e){t.dialogs.delete=!0}}},l),[o("v-icon",[t._v("mdi-delete")])],1)]}}],null,!1,3064050874)},[t._v(" "),o("span",[t._v(t._s(t.$t("t_delete")))])]):t._e()],1):t._e(),t._v(" "),t.$adgate.allow(t.$auth.user,"delete","blog")?o("v-fade-transition",[t.selected.length>0?o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[o("v-btn",t._g({attrs:{text:"",icon:""},on:{click:function(e){return t.restore()}}},l),[o("v-icon",[t._v("mdi-delete-restore")])],1)]}}],null,!1,2460523131)},[t._v(" "),o("span",[t._v(t._s(t.$t("t_restore")))])]):t._e()],1):t._e(),t._v(" "),t.$adgate.allow(t.$auth.user,"create","blog")?o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[o("v-btn",t._g({attrs:{to:"/administrator/blog/create",text:"",icon:""}},l),[o("v-icon",[t._v("add")])],1)]}}],null,!1,3814717627)},[t._v(" "),o("span",[t._v(t._s(t.$t("t_create")))])]):t._e()],1),t._v(" "),o("v-data-table",{attrs:{headers:t.headers,items:t.blog,"item-key":"id","hide-default-footer":"",loading:t.loading,"show-select":"","disable-pagination":"","mobile-breakpoint":1,"no-data-text":t.$t("t_table_no_data_available")},scopedSlots:t._u([{key:"item.cover",fn:function(e){var l=e.item;return[o("v-avatar",{attrs:{size:"36px"}},[o("img",{attrs:{src:t.cover(l)}})])]}},{key:"item.title",fn:function(e){var l=e.item;return[o("nuxt-link",{staticClass:"font-weight-medium",attrs:{target:"_blank",to:"/blog/"+l.slug}},[t._v(t._s(l.title))])]}},{key:"item.author",fn:function(e){var o=e.item;return[t._v(t._s(o.author.username))]}},{key:"item.created",fn:function(e){var o=e.item;return[t._v(t._s(t.$ago(o.created_at)))]}},{key:"item.status",fn:function(e){var l=e.item;return[null===l.deleted_at?o("v-btn",{attrs:{text:"",color:"#26c281"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("t_active"))+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),null!==l.deleted_at?o("v-btn",{attrs:{text:"",color:"error"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("t_deleted"))+"\n\t\t\t\t\t\t")]):t._e()]}},{key:"item.options",fn:function(e){var l=e.item;return[o("v-menu",{attrs:{bottom:"",left:!t.$vuetify.rtl,right:!!t.$vuetify.rtl,origin:"center center","max-height":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[o("v-btn",t._g({attrs:{small:"",icon:""}},l),[o("v-icon",{attrs:{size:"18px",color:t.$vuetify.theme.dark?"white":"grey darken-1"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),o("v-list",{attrs:{dense:""}},[t.$adgate.allow(t.$auth.user,"edit","blog")?o("v-list-item",{attrs:{to:"/administrator/blog/edit/"+l.unique_id}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-square-edit-outline")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t("t_edit")))])],1)],1):t._e(),t._v(" "),null===l.deleted_at&&t.$adgate.allow(t.$auth.user,"delete","blog")?o("v-list-item",{on:{click:function(e){t.remove([l],t.blog.indexOf(l))}}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-delete")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t("t_delete")))])],1)],1):t._e(),t._v(" "),null!==l.deleted_at&&t.$adgate.allow(t.$auth.user,"delete","blog")?o("v-list-item",{on:{click:function(e){t.restore([l],t.blog.indexOf(l))}}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-delete-restore")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t("t_restore")))])],1)],1):t._e()],1)],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),o("div",{staticClass:"text-center pt-2"},[o("pagination",{attrs:{data:t.blogData,limit:8,align:t.$vuetify.rtl?"left":"right"},on:{"pagination-change-page":t.getNextPage}},[o("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[o("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_right":"chevron_left"))])]),t._v(" "),o("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[o("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_left":"chevron_right"))])])])],1)])],1)}),[],!1,null,null,"29931dfc");e.default=component.exports}};