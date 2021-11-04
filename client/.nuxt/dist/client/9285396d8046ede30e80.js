(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{721:function(t,e,n){"use strict";n.r(e);n(83);var o,r=n(97),c=(n(47),n(27)),l={layout:"default/admin",middleware:"administrator",asyncData:(o=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,o,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,o=e.$axios,r=e.redirect,n.$owgate.allow(n.$auth.user,"access","geo")||r("/administrator"),t.next=4,o.get("administrator/geolocation/states");case 4:return c=t.sent,t.abrupt("return",{statesData:c.data,states:c.data.data});case 6:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),data:function(){return{countries:[],headers:[{text:this.$t("t_flag"),value:"flag",sortable:!1,align:"center"},{text:this.$t("t_country"),value:"country",sortable:!1,align:"center"},{text:this.$t("t_state"),value:"state",sortable:!1,align:"center"},{text:this.$t("t_cities"),value:"cities",sortable:!1,align:"center"},{text:this.$t("t_options"),value:"options",sortable:!1,align:"center"}],edit:{state:{id:"",name:"",country:"",has_city:!1},index:null,dialog:!1},errors:[],loading:!1}},head:function(){return{title:this.$t("t_states"),titleTemplate:"%s ".concat(this.$store.state.settings.separator," ").concat(this.$t("t_dashboard")),meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi("storage/app/".concat(this.$store.state.settings.favicon)):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{getNextPage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,this.$axios.get("administrator/geolocation/states?page="+e).then((function(e){t.selected=[],t.statesData=e.data,t.states=e.data.data,void 0!==("undefined"==typeof window?"undefined":Object(r.a)(window))&&window.scrollTo(0,0),t.loading=!1}))},change:function(t,e){this.edit.state.id=t.id,this.edit.state.name=t.name,this.edit.state.country=t.country_id,this.edit.state.has_city=t.has_city,this.edit.index=e,this.edit.dialog=!0},update:function(){var t=this;this.$owgate.allow(this.$auth.user,"edit","geo")?(this.loading=!0,this.$axios.post("administrator/geolocation/states/options/edit",{id:this.edit.state.id,name:this.edit.state.name,country:this.edit.state.country,has_city:this.edit.state.has_city}).then((function(e){t.states[t.edit.index].name=e.data.name,t.states[t.edit.index].country=e.data.country,t.states[t.edit.index].country_id=e.data.country_id,t.states[t.edit.index].has_city=e.data.has_city,t.edit.dialog=!1,t.edit.state.name="",t.edit.state.country="",t.edit.state.has_city=!1,t.edit.state.index=null,t.$toasted.show(t.$t("t_toasted_state_updated"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1})).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),t.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1}))):this.$router.push("/administrator")},getCountries:function(){var t=this;this.$axios.post("ajax/fetch/countries").then((function(e){t.countries=e.data})).catch((function(t){console.log(t)}))}},created:function(){this.getCountries()}},d=n(52),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t\t")])],1),t._v(" "),t.$owgate.allow(t.$auth.user,"edit","geo")?n("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.edit.dialog,callback:function(e){t.$set(t.edit,"dialog",e)},expression:"edit.dialog"}},[n("v-card",{staticClass:"pa-2"},[n("v-card-title",{staticClass:"pt-1",attrs:{"primary-title":""}},[n("h3",{staticClass:"body-2 mb-0 text-uppercase font-weight-black"},[t._v(t._s(t.$t("t_edit_state")))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.edit.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-card-text",[n("v-container",{staticClass:"pa-0",attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{color:"grey lighten-1",label:t.$t("t_state_name"),placeholder:t.$t("t_enter_state_name"),counter:"60",maxlength:"60",rules:t.errors.name,error:!!t.errors.name},model:{value:t.edit.state.name,callback:function(e){t.$set(t.edit.state,"name",e)},expression:"edit.state.name"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-autocomplete",{attrs:{autocomplete:"off",items:t.countries,"item-text":"name","item-value":"id",color:"grey lighten-1",label:t.$t("t_country"),placeholder:t.$t("t_choose_country"),rules:t.errors.country,error:!!t.errors.country,dense:""},model:{value:t.edit.state.country,callback:function(e){t.$set(t.edit.state,"country",e)},expression:"edit.state.country"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("label",{staticClass:"form-group has-float-label",class:[t.errors.has_city?"has-danger":""]},[n("v-switch",{staticClass:"ma-0 form-group form-control",attrs:{color:"blue"},model:{value:t.edit.state.has_city,callback:function(e){t.$set(t.edit.state,"has_city",e)},expression:"edit.state.has_city"}}),t._v(" "),n("span",[t._v(t._s(t.$t("t_state_has_cities")))]),t._v(" "),t.errors.has_city?n("small",{staticClass:"form-text"},[t._v(t._s(t.errors.has_city[0]))]):t._e()],1)])],1)],1)],1),t._v(" "),n("v-card-actions",{staticClass:"pa-2"},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"#2e3131",text:""},on:{click:function(e){return t.update()}}},[t._v(t._s(t.$t("t_update")))])],1)],1)],1):t._e(),t._v(" "),n("v-container",[n("div",{staticClass:"m-card"},[n("v-toolbar",{staticClass:"elevation-0",attrs:{color:"white"}},[n("v-toolbar-title",[t._v(t._s(t.$t("t_states")))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{to:"/administrator/geolocation/states/create",text:"",icon:""}},o),[n("v-icon",[t._v("add")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("t_create")))])])],1),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.states,"item-key":"id","hide-default-footer":"","disable-pagination":"","no-data-text":t.$t("t_table_no_data_available")},scopedSlots:t._u([{key:"item.flag",fn:function(e){var o=e.item;return[n("v-avatar",{attrs:{size:"36px"}},[n("img",{attrs:{src:t.$homeApi("public/images/flags/large/"+o.country.code.toUpperCase()+".png")}})])]}},{key:"item.country",fn:function(e){var n=e.item;return[t._v(t._s(n.country.name))]}},{key:"item.state",fn:function(e){var n=e.item;return[t._v(t._s(n.name))]}},{key:"item.cities",fn:function(e){return[e.item.has_city?n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{text:"",icon:"",color:"green accent-3"}},o),[n("i",{staticClass:"mdi mdi-check-all fs-20"})])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(t.$t("t_has_cities")))])]):n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{text:"",icon:"",color:"error"}},o),[n("i",{staticClass:"mdi mdi-close fs-20"})])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(t.$t("t_no_cities")))])])]}},{key:"item.options",fn:function(e){var o=e.item;return[t.$owgate.allow(t.$auth.user,"edit","geo")?n("v-btn",{attrs:{small:"",icon:""},on:{click:function(e){t.change(o,t.states.indexOf(o))}}},[n("v-icon",{attrs:{size:"18px",color:"grey darken-1"}},[t._v("mdi-square-edit-outline")])],1):t._e()]}}])})],1),t._v(" "),n("div",{staticClass:"text-center pt-2"},[n("pagination",{attrs:{data:t.statesData,limit:8,align:t.$vuetify.rtl?"left":"right"},on:{"pagination-change-page":t.getNextPage}},[n("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[n("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_right":"chevron_left"))])]),t._v(" "),n("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[n("i",{staticClass:"v-icon material-icons theme--light",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.$vuetify.rtl?"chevron_left":"chevron_right"))])])])],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);