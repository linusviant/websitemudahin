(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{534:function(t,e,r){"use strict";r(535)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},535:function(t,e,r){var o=r(56),n=r(85),l=r(122),c=/"/g,d=function(t,e,r,o){var n=String(l(t)),d="<"+e;return""!==r&&(d+=" "+r+'="'+String(o).replace(c,"&quot;")+'"'),d+">"+n+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(d),o(o.P+o.F*n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",r)}},718:function(t,e,r){"use strict";r.r(e);r(534),r(45);var o,n=r(26),l={layout:"default/admin",middleware:"administrator",asyncData:(o=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,o,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,o=e.$axios,n=e.redirect,r.$adgate.allow(r.$auth.user,"create","pages")||n("/administrator"),t.next=4,o.get("administrator/pages/options/create");case 4:return l=t.sent,t.abrupt("return",{columns:{first:l.data.first,second:l.data.second,third:l.data.third,fourth:l.data.fourth}});case 6:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),data:function(){return{form:{title:"",slug:"",content:"",is_link:!1,link:"",column:""},errors:[],loading:!1}},head:function(){return{title:this.$t("t_create_page"),titleTemplate:"%s ".concat(this.$store.state.settings.separator," ").concat(this.$t("t_dashboard")),meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi("storage/app/".concat(this.$store.state.settings.favicon)):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{create:function(){var t=this;this.$adgate.allow(this.$auth.user,"create","pages")?(this.loading=!0,this.$axios.post("administrator/pages/options/create",{title:this.form.title,slug:this.form.slug,content:this.form.content,is_link:this.form.is_link,link:this.form.link,column:this.form.column}).then((function(e){t.errors=[],t.form={title:"",slug:"",content:"",is_link:!1,link:"",column:""},t.$toasted.show(t.$t("t_toasted_page_created"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1})).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),t.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1}))):this.$router.push("/administrator")}}},c=r(52),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t")])],1),t._v(" "),r("v-container",[r("v-card",{staticClass:"m-card",attrs:{flat:""}},[r("v-card-title",{staticClass:"pa-4",attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"title"},[t._v(t._s(t.$t("t_create_page")))]),t._v(" "),r("span",{staticClass:"card-description"},[t._v(t._s(t.$t("t_create_page_para")))])])]),t._v(" "),r("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_title"),placeholder:t.$t("t_enter_title"),counter:"100",maxlength:"100",rules:t.errors.title,error:!!t.errors.title},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_slug"),placeholder:t.$t("t_enter_slug"),counter:"100",maxlength:"100",rules:t.errors.slug,error:!!t.errors.slug},model:{value:t.form.slug,callback:function(e){t.$set(t.form,"slug",e)},expression:"form.slug"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"form-group",class:[t.errors.content?"has-danger":""]},[r("label",{attrs:{for:"input-normal"}},[t._v(t._s(t.$t("t_content")))]),t._v(" "),r("ckeditor",{staticClass:"form-control",attrs:{config:{language:this.$i18n.locale},type:"classic"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),t.errors.content?r("small",{staticClass:"red--text block"},[t._v(t._s(t.errors.content[0]))]):t._e()]),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("label",{staticClass:"form-group has-float-label",class:[t.errors.is_link?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"blue"},model:{value:t.form.is_link,callback:function(e){t.$set(t.form,"is_link",e)},expression:"form.is_link"}}),t._v(" "),r("span",[t._v(t._s(t.$t("t_create_link")))])],1),t._v(" "),t.errors.is_link?r("small",{staticClass:"error-text"},[t._v(t._s(t.errors.is_link[0]))]):t._e()]),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_link"),placeholder:t.$t("t_enter_link"),rules:t.errors.link,error:!!t.errors.link,disabled:!t.form.is_link},model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-select",{attrs:{color:"grey lighten-1",items:[{name:t.columns.first,id:"first"},{name:t.columns.second,id:"second"},{name:t.columns.third,id:"third"},{name:t.columns.fourth,id:"fourth"}],"item-text":"name","item-value":"id",placeholder:t.$t("t_choose_footer_column"),label:t.$t("t_footer_column"),rules:t.errors.column,error:!!t.errors.column,dense:""},model:{value:t.form.column,callback:function(e){t.$set(t.form,"column",e)},expression:"form.column"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"mb-1 white--text",attrs:{disabled:t.loading,loading:t.loading,block:"",depressed:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.create(e)}}},[t._v(t._s(t.$t("t_create")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);