(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{722:function(t,e,r){"use strict";r.r(e);r(83),r(47);var o,n=r(27),c={layout:"default/admin",middleware:"administrator",asyncData:(o=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,o,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,o=e.$axios,n=e.redirect,r.$owgate.allow(r.$auth.user,"create","geo")||n("/administrator"),t.next=4,o.get("administrator/geolocation/states/options/create");case 4:return c=t.sent,t.abrupt("return",{countries:c.data});case 6:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),data:function(){return{form:{name:"",country:"",has_cities:0},errors:[],loading:!1}},head:function(){return{title:this.$t("t_create_state"),titleTemplate:"%s ".concat(this.$store.state.settings.separator," ").concat(this.$t("t_dashboard")),meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi("storage/app/".concat(this.$store.state.settings.favicon)):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{create:function(){var t=this;this.$owgate.allow(this.$auth.user,"create","geo")?(this.loading=!0,this.$axios.post("administrator/geolocation/states/options/create",{name:this.form.name,country:this.form.country,has_cities:this.form.has_cities}).then((function(e){t.errors=[],t.form={name:"",country:"",has_cities:0},t.$toasted.show(t.$t("t_toasted_state_created"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1})).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),t.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1}))):this.$router.push("/administrator")}}},l=r(52),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t")])],1),t._v(" "),r("v-container",[r("v-card",{staticClass:"m-card",attrs:{flat:""}},[r("v-card-title",{staticClass:"pa-4",attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"title"},[t._v(t._s(t.$t("t_create_state")))]),t._v(" "),r("span",{staticClass:"card-description"},[t._v(t._s(t.$t("t_create_state_para")))])])]),t._v(" "),r("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-autocomplete",{attrs:{items:t.countries,"item-text":"name","item-value":"id",color:"grey lighten-1",label:t.$t("t_country"),placeholder:t.$t("t_choose_country"),rules:t.errors.country,error:!!t.errors.country,dense:""},model:{value:t.form.country,callback:function(e){t.$set(t.form,"country",e)},expression:"form.country"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_state_name"),placeholder:t.$t("t_enter_state_name"),counter:"60",maxlength:"60",rules:t.errors.name,error:!!t.errors.name},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("label",{staticClass:"form-group has-float-label",class:[t.errors.has_cities?"has-danger":""]},[r("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{"true-value":1,"false-value":0,color:"blue"},model:{value:t.form.has_cities,callback:function(e){t.$set(t.form,"has_cities",e)},expression:"form.has_cities"}}),t._v(" "),r("span",[t._v(t._s(t.$t("t_state_has_cities")))])],1),t._v(" "),t.errors.has_cities?r("small",{staticClass:"error-text"},[t._v(t._s(t.errors.has_cities[0]))]):t._e()]),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"mb-1 white--text",attrs:{disabled:t.loading,loading:t.loading,block:"",depressed:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.create(e)}}},[t._v(t._s(t.$t("t_create")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);