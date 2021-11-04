exports.ids=[68],exports.modules={254:function(t,e,r){"use strict";r.r(e);var o={layout:"default/admin",middleware:"administrator",async asyncData({app:t,$axios:e,params:r,redirect:o}){t.$adgate.allow(t.$auth.user,"edit","pages")||o("/administrator");let l=await e.post("administrator/pages/options/edit",{slug:r.slug});return{columns:{first:l.data.config.first,second:l.data.config.second,third:l.data.config.third,fourth:l.data.config.fourth},form:{id:l.data.page.id,title:l.data.page.title,slug:l.data.page.slug,content:l.data.page.content,is_link:l.data.page.isLink,link:l.data.page.link,column:l.data.page.column}}},data:function(){return{errors:[],loading:!1}},head(){return{title:this.$t("t_edit_page"),titleTemplate:`%s ${this.$store.state.settings.separator} ${this.$t("t_dashboard")}`,meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi(`storage/app/${this.$store.state.settings.favicon}`):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{update:function(){this.$adgate.allow(this.$auth.user,"edit","pages")?(this.loading=!0,this.$axios.post("administrator/pages/options/update",{id:this.form.id,title:this.form.title,slug:this.form.slug,content:this.form.content,is_link:this.form.is_link,link:this.form.link,column:this.form.column}).then(t=>{this.errors=[],this.$toasted.show(this.$t("t_toasted_page_updated"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1}).catch(t=>{t.response.data.errors&&(this.errors=t.response.data.errors),this.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1})):this.$router.push("/administrator")}}},l=r(1),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t")])],1),t._v(" "),r("v-container",[r("v-card",{staticClass:"m-card",attrs:{flat:""}},[r("v-card-title",{staticClass:"pa-4",attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"title"},[t._v(t._s(t.$t("t_edit_page")))]),t._v(" "),r("span",{staticClass:"card-description"},[t._v(t._s(t.$t("t_edit_page_para")))])])]),t._v(" "),r("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_title"),placeholder:t.$t("t_enter_title"),counter:"100",maxlength:"100",rules:t.errors.title,error:!!t.errors.title},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_slug"),placeholder:t.$t("t_enter_slug"),counter:"100",maxlength:"100",rules:t.errors.slug,error:!!t.errors.slug},model:{value:t.form.slug,callback:function(e){t.$set(t.form,"slug",e)},expression:"form.slug"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"form-group",class:[t.errors.content?"has-danger":""]},[r("label",{attrs:{for:"input-normal"}},[t._v(t._s(t.$t("t_content")))]),t._v(" "),r("ckeditor",{staticClass:"form-control",attrs:{config:{language:this.$i18n.locale},type:"classic"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),t.errors.content?r("small",{staticClass:"red--text block"},[t._v(t._s(t.errors.content[0]))]):t._e()]),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("label",{staticClass:"form-group has-float-label",class:[t.errors.is_link?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"blue"},model:{value:t.form.is_link,callback:function(e){t.$set(t.form,"is_link",e)},expression:"form.is_link"}}),t._v(" "),r("span",[t._v(t._s(t.$t("t_create_link")))])],1),t._v(" "),t.errors.is_link?r("small",{staticClass:"error-text"},[t._v(t._s(t.errors.is_link[0]))]):t._e()]),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_link"),placeholder:t.$t("t_enter_link"),rules:t.errors.link,error:!!t.errors.link,disabled:!t.form.is_link},model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-select",{attrs:{color:"grey lighten-1",items:[{name:t.columns.first,id:"first"},{name:t.columns.second,id:"second"},{name:t.columns.third,id:"third"},{name:t.columns.fourth,id:"fourth"}],"item-text":"name","item-value":"id",placeholder:t.$t("t_choose_footer_column"),label:t.$t("t_footer_column"),rules:t.errors.column,error:!!t.errors.column,dense:""},model:{value:t.form.column,callback:function(e){t.$set(t.form,"column",e)},expression:"form.column"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"mb-1 white--text",attrs:{disabled:t.loading,loading:t.loading,block:"",depressed:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.update(e)}}},[t._v(t._s(t.$t("t_update")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,"c517984e");e.default=component.exports}};