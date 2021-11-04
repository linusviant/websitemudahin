(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{683:function(e,r,t){"use strict";t.r(r);t(84);var o={layout:"default/admin",middleware:"administrator",asyncData:function(e){var r=e.app,t=e.redirect;r.$owgate.allow(r.$auth.user,"create","roles")||t("/administrator")},data:function(){return{form:{name:"",access_categories:!1,create_categories:!1,edit_categories:!1,delete_categories:!1,access_custom_fields:!1,create_custom_fields:!1,edit_custom_fields:!1,delete_custom_fields:!1,access_blog:!1,create_articles:!1,edit_articles:!1,delete_articles:!1,access_pages:!1,create_pages:!1,edit_pages:!1,delete_pages:!1,access_conversations:!1,access_chat:!1,access_users_messages:!1,access_admin_messages:!1,access_users:!1,approve_users:!1,edit_users:!1,delete_users:!1,create_users:!1,access_classifieds:!1,approve_classifieds:!1,edit_classifieds:!1,delete_classifieds:!1,classifieds_stats:!1,access_stores:!1,approve_stores:!1,edit_stores:!1,delete_stores:!1,access_comments:!1,approve_comments:!1,edit_comments:!1,delete_comments:!1,reported_comments:!1},errors:[],loading:!1}},head:function(){return{title:this.$t("t_create_administrator_role"),titleTemplate:"%s ".concat(this.$store.state.settings.separator," ").concat(this.$t("t_dashboard")),meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi("storage/app/".concat(this.$store.state.settings.favicon)):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{create:function(){var e=this;this.$owgate.allow(this.$auth.user,"create","roles")?(this.loading=!0,this.$axios.post("administrator/roles/options/create/administrator",{name:this.form.name,access_categories:this.form.access_categories,create_categories:this.form.create_categories,edit_categories:this.form.edit_categories,delete_categories:this.form.delete_categories,access_custom_fields:this.form.access_custom_fields,create_custom_fields:this.form.create_custom_fields,edit_custom_fields:this.form.edit_custom_fields,delete_custom_fields:this.form.delete_custom_fields,access_blog:this.form.access_blog,create_articles:this.form.create_articles,edit_articles:this.form.edit_articles,delete_articles:this.form.delete_articles,access_pages:this.form.access_pages,create_pages:this.form.create_pages,edit_pages:this.form.edit_pages,delete_pages:this.form.delete_pages,access_conversations:this.form.access_conversations,access_chat:this.form.access_chat,access_users_messages:this.form.access_users_messages,access_admin_messages:this.form.access_admin_messages,access_users:this.form.access_users,approve_users:this.form.approve_users,edit_users:this.form.edit_users,delete_users:this.form.delete_users,create_users:this.form.create_users,access_classifieds:this.form.access_classifieds,approve_classifieds:this.form.approve_classifieds,edit_classifieds:this.form.edit_classifieds,delete_classifieds:this.form.delete_classifieds,classifieds_stats:this.form.classifieds_stats,access_stores:this.form.access_stores,approve_stores:this.form.approve_stores,edit_stores:this.form.edit_stores,delete_stores:this.form.delete_stores,access_comments:this.form.access_comments,approve_comments:this.form.approve_comments,edit_comments:this.form.edit_comments,delete_comments:this.form.delete_comments,reported_comments:this.form.reported_comments}).then((function(r){e.errors=[],e.form={name:"",access_categories:!1,create_categories:!1,edit_categories:!1,delete_categories:!1,access_custom_fields:!1,create_custom_fields:!1,edit_custom_fields:!1,delete_custom_fields:!1,access_blog:!1,create_articles:!1,edit_articles:!1,delete_articles:!1,access_pages:!1,create_pages:!1,edit_pages:!1,delete_pages:!1,access_conversations:!1,access_chat:!1,access_users_messages:!1,access_admin_messages:!1,access_users:!1,approve_users:!1,edit_users:!1,delete_users:!1,create_users:!1,access_classifieds:!1,approve_classifieds:!1,edit_classifieds:!1,delete_classifieds:!1,classifieds_stats:!1,access_stores:!1,approve_stores:!1,edit_stores:!1,delete_stores:!1,access_comments:!1,approve_comments:!1,edit_comments:!1,delete_comments:!1,reported_comments:!1},e.$toasted.show(e.$t("t_toasted_admin_role_created"),{icon:"done_all",className:e.$vuetify.rtl?"toasted-rtl":""}),e.loading=!1})).catch((function(r){e.errors=r.response.data.errors,e.$toasted.error(e.$t("t_toasted_something_went_wrong"),{icon:"error",className:e.$vuetify.rtl?"toasted-rtl":""}),e.loading=!1}))):this.$router.push("/administrator")}}},l=t(52),component=Object(l.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-app",{attrs:{id:"inspire"}},[t("v-overlay",{attrs:{opacity:"0.8"},model:{value:e.loading,callback:function(r){e.loading=r},expression:"loading"}},[t("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[e._v("\n\t\t\t"+e._s(e.$t("t_loading"))+"\n\t\t")])],1),e._v(" "),t("v-container",[t("v-card",{staticClass:"m-card",attrs:{flat:""}},[t("v-card-title",{staticClass:"pa-4",attrs:{"primary-title":""}},[t("div",[t("div",{staticClass:"title"},[e._v(e._s(e.$t("t_create_administrator_role")))]),e._v(" "),t("span",{staticClass:"card-description"},[e._v(e._s(e.$t("t_create_admin_role_para")))])])]),e._v(" "),t("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[t("v-layout",{attrs:{wrap:""}},[t("v-flex",{attrs:{xs12:""}},[t("v-text-field",{attrs:{color:"grey lighten-1",label:e.$t("t_role_name"),placeholder:e.$t("t_enter_role_name"),counter:"60",maxlength:"60",rules:e.errors.name,error:!!e.errors.name},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}})],1),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.access_categories?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"green"},model:{value:e.form.access_categories,callback:function(r){e.$set(e.form,"access_categories",r)},expression:"form.access_categories"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_access_categories")))]),e._v(" "),e.errors.access_categories?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_categories[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.create_categories?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_categories,color:"green"},model:{value:e.form.create_categories,callback:function(r){e.$set(e.form,"create_categories",r)},expression:"form.create_categories"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_create_categories")))]),e._v(" "),e.errors.create_categories?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.create_categories[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.edit_categories?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_categories,color:"green"},model:{value:e.form.edit_categories,callback:function(r){e.$set(e.form,"edit_categories",r)},expression:"form.edit_categories"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_edit_categories")))]),e._v(" "),e.errors.edit_categories?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.edit_categories[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.delete_categories?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_categories,color:"green"},model:{value:e.form.delete_categories,callback:function(r){e.$set(e.form,"delete_categories",r)},expression:"form.delete_categories"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_delete_categories")))]),e._v(" "),e.errors.delete_categories?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.delete_categories[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.access_custom_fields?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"green"},model:{value:e.form.access_custom_fields,callback:function(r){e.$set(e.form,"access_custom_fields",r)},expression:"form.access_custom_fields"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_access_fields")))]),e._v(" "),e.errors.access_custom_fields?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_custom_fields[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.create_custom_fields?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_custom_fields,color:"green"},model:{value:e.form.create_custom_fields,callback:function(r){e.$set(e.form,"create_custom_fields",r)},expression:"form.create_custom_fields"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_create_fields")))]),e._v(" "),e.errors.create_custom_fields?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.create_custom_fields[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.edit_custom_fields?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_custom_fields,color:"green"},model:{value:e.form.edit_custom_fields,callback:function(r){e.$set(e.form,"edit_custom_fields",r)},expression:"form.edit_custom_fields"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_edit_fields")))]),e._v(" "),e.errors.edit_custom_fields?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.edit_custom_fields[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.delete_custom_fields?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_custom_fields,color:"green"},model:{value:e.form.delete_custom_fields,callback:function(r){e.$set(e.form,"delete_custom_fields",r)},expression:"form.delete_custom_fields"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_delete_fields")))]),e._v(" "),e.errors.delete_custom_fields?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.delete_custom_fields[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.access_blog?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"green"},model:{value:e.form.access_blog,callback:function(r){e.$set(e.form,"access_blog",r)},expression:"form.access_blog"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_access_blog")))]),e._v(" "),e.errors.access_blog?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_blog[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.create_articles?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_blog,color:"green"},model:{value:e.form.create_articles,callback:function(r){e.$set(e.form,"create_articles",r)},expression:"form.create_articles"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_create_articles")))]),e._v(" "),e.errors.create_articles?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.create_articles[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.edit_articles?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_blog,color:"green"},model:{value:e.form.edit_articles,callback:function(r){e.$set(e.form,"edit_articles",r)},expression:"form.edit_articles"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_edit_articles")))]),e._v(" "),e.errors.edit_articles?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.edit_articles[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.delete_articles?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_blog,color:"green"},model:{value:e.form.delete_articles,callback:function(r){e.$set(e.form,"delete_articles",r)},expression:"form.delete_articles"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_delete_articles")))]),e._v(" "),e.errors.delete_articles?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.delete_articles[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.access_pages?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"green"},model:{value:e.form.access_pages,callback:function(r){e.$set(e.form,"access_pages",r)},expression:"form.access_pages"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_access_pages")))]),e._v(" "),e.errors.access_pages?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_pages[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.create_pages?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_pages,color:"green"},model:{value:e.form.create_pages,callback:function(r){e.$set(e.form,"create_pages",r)},expression:"form.create_pages"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_create_pages")))]),e._v(" "),e.errors.create_pages?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.create_pages[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.edit_pages?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_pages,color:"green"},model:{value:e.form.edit_pages,callback:function(r){e.$set(e.form,"edit_pages",r)},expression:"form.edit_pages"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_edit_pages")))]),e._v(" "),e.errors.edit_pages?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.edit_pages[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.delete_pages?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_pages,color:"green"},model:{value:e.form.delete_pages,callback:function(r){e.$set(e.form,"delete_pages",r)},expression:"form.delete_pages"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_delete_pages")))]),e._v(" "),e.errors.delete_pages?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.delete_pages[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.access_conversations?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"green"},model:{value:e.form.access_conversations,callback:function(r){e.$set(e.form,"access_conversations",r)},expression:"form.access_conversations"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_access_conversations")))]),e._v(" "),e.errors.access_conversations?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_conversations[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.access_chat?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_conversations,color:"green"},model:{value:e.form.access_chat,callback:function(r){e.$set(e.form,"access_chat",r)},expression:"form.access_chat"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_access_chat")))]),e._v(" "),e.errors.access_chat?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_chat[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.access_users_messages?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_conversations,color:"green"},model:{value:e.form.access_users_messages,callback:function(r){e.$set(e.form,"access_users_messages",r)},expression:"form.access_users_messages"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_users_messages")))]),e._v(" "),e.errors.access_users_messages?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_users_messages[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.access_admin_messages?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_conversations,color:"green"},model:{value:e.form.access_admin_messages,callback:function(r){e.$set(e.form,"access_admin_messages",r)},expression:"form.access_admin_messages"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_access_admin_messages")))]),e._v(" "),e.errors.access_admin_messages?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_admin_messages[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.access_users?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"green"},model:{value:e.form.access_users,callback:function(r){e.$set(e.form,"access_users",r)},expression:"form.access_users"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_access_users")))]),e._v(" "),e.errors.access_users?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_users[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.approve_users?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_users,color:"green"},model:{value:e.form.approve_users,callback:function(r){e.$set(e.form,"approve_users",r)},expression:"form.approve_users"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_approve_users")))]),e._v(" "),e.errors.approve_users?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.approve_users[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.create_users?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_users,color:"green"},model:{value:e.form.create_users,callback:function(r){e.$set(e.form,"create_users",r)},expression:"form.create_users"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_create_users")))]),e._v(" "),e.errors.create_users?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.create_users[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.edit_users?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_users,color:"green"},model:{value:e.form.edit_users,callback:function(r){e.$set(e.form,"edit_users",r)},expression:"form.edit_users"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_edit_users")))]),e._v(" "),e.errors.edit_users?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.edit_users[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.delete_users?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_users,color:"green"},model:{value:e.form.delete_users,callback:function(r){e.$set(e.form,"delete_users",r)},expression:"form.delete_users"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_delete_users")))]),e._v(" "),e.errors.delete_users?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.delete_users[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.access_classifieds?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"green"},model:{value:e.form.access_classifieds,callback:function(r){e.$set(e.form,"access_classifieds",r)},expression:"form.access_classifieds"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_access_deals")))]),e._v(" "),e.errors.access_classifieds?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_classifieds[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.approve_classifieds?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_classifieds,color:"green"},model:{value:e.form.approve_classifieds,callback:function(r){e.$set(e.form,"approve_classifieds",r)},expression:"form.approve_classifieds"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_approve_deals")))]),e._v(" "),e.errors.approve_classifieds?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.approve_classifieds[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.edit_classifieds?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_classifieds,color:"green"},model:{value:e.form.edit_classifieds,callback:function(r){e.$set(e.form,"edit_classifieds",r)},expression:"form.edit_classifieds"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_edit_deals")))]),e._v(" "),e.errors.edit_classifieds?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.edit_classifieds[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.delete_classifieds?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_classifieds,color:"green"},model:{value:e.form.delete_classifieds,callback:function(r){e.$set(e.form,"delete_classifieds",r)},expression:"form.delete_classifieds"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_delete_deals")))]),e._v(" "),e.errors.delete_classifieds?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.delete_classifieds[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.classifieds_stats?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_classifieds,color:"green"},model:{value:e.form.classifieds_stats,callback:function(r){e.$set(e.form,"classifieds_stats",r)},expression:"form.classifieds_stats"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_deals_stats")))]),e._v(" "),e.errors.classifieds_stats?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.classifieds_stats[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.access_stores?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"green"},model:{value:e.form.access_stores,callback:function(r){e.$set(e.form,"access_stores",r)},expression:"form.access_stores"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_access_shops")))]),e._v(" "),e.errors.access_stores?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_stores[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.approve_stores?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_stores,color:"green"},model:{value:e.form.approve_stores,callback:function(r){e.$set(e.form,"approve_stores",r)},expression:"form.approve_stores"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_approve_shops")))]),e._v(" "),e.errors.approve_stores?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.approve_stores[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.edit_stores?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_stores,color:"green"},model:{value:e.form.edit_stores,callback:function(r){e.$set(e.form,"edit_stores",r)},expression:"form.edit_stores"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_edit_shops")))]),e._v(" "),e.errors.edit_stores?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.edit_stores[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.delete_stores?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_stores,color:"green"},model:{value:e.form.delete_stores,callback:function(r){e.$set(e.form,"delete_stores",r)},expression:"form.delete_stores"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_delete_shops")))]),e._v(" "),e.errors.delete_stores?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.delete_stores[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.access_comments?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"green"},model:{value:e.form.access_comments,callback:function(r){e.$set(e.form,"access_comments",r)},expression:"form.access_comments"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_access_comments")))]),e._v(" "),e.errors.access_comments?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.access_comments[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.approve_comments?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_comments,color:"green"},model:{value:e.form.approve_comments,callback:function(r){e.$set(e.form,"approve_comments",r)},expression:"form.approve_comments"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_approve_comments")))]),e._v(" "),e.errors.approve_comments?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.approve_comments[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.edit_comments?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_comments,color:"green"},model:{value:e.form.edit_comments,callback:function(r){e.$set(e.form,"edit_comments",r)},expression:"form.edit_comments"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_edit_comments")))]),e._v(" "),e.errors.edit_comments?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.edit_comments[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.delete_comments?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_comments,color:"green"},model:{value:e.form.delete_comments,callback:function(r){e.$set(e.form,"delete_comments",r)},expression:"form.delete_comments"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_delete_comments")))]),e._v(" "),e.errors.delete_comments?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.delete_comments[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("label",{staticClass:"form-group has-float-label",class:[e.errors.reported_comments?"has-danger":""]},[t("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{disabled:!e.form.access_comments,color:"green"},model:{value:e.form.reported_comments,callback:function(r){e.$set(e.form,"reported_comments",r)},expression:"form.reported_comments"}}),e._v(" "),t("span",[e._v(e._s(e.$t("t_role_reported_comments")))]),e._v(" "),e.errors.reported_comments?t("small",{staticClass:"form-text"},[e._v(e._s(e.errors.reported_comments[0]))]):e._e()],1)]),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("v-btn",{staticClass:"mb-1 white--text",attrs:{disabled:e.loading,loading:e.loading,block:"",depressed:"",color:"blue"},on:{click:function(r){return r.preventDefault(),e.create(r)}}},[e._v(e._s(e.$t("t_create")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports}}]);