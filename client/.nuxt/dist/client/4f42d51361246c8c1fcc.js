(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{540:function(t,e,r){},565:function(t,e,r){"use strict";var o=r(540);r.n(o).a},659:function(t,e,r){"use strict";r.r(e);r(47);var o,n=r(27),c={layout:"default/main",asyncData:(o=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.app,r=e.$axios,e.redirect,t.next=3,r.get("contact/feedback");case 3:return o=t.sent,t.abrupt("return",{seo:{title:o.data.title,separator:o.data.separator,description:o.data.description,favicon:o.data.favicon,image:o.data.image}});case 5:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),head:function(){return{title:this.$t("t_feedback"),titleTemplate:"%s ".concat(this.seo.separator," ").concat(this.seo.title),meta:[{name:"description",content:this.seo.description},{name:"robots",content:"index, follow"},{property:"og:type",content:"article"},{property:"og:title",content:"".concat(this.$t("t_feedback")," ").concat(this.seo.separator," ").concat(this.seo.title)},{property:"og:description",content:this.seo.description},{property:"og:image",content:this.seo.image},{property:"og:url",content:this.$home("feedback")},{property:"og:site_name",content:this.seo.title},{property:"twitter:title",content:"".concat(this.$t("t_feedback")," ").concat(this.seo.separator," ").concat(this.seo.title)},{property:"twitter:description",content:this.seo.description},{property:"twitter:image",content:this.seo.image}],link:[{rel:"icon",type:"image/x-icon",href:this.seo.favicon}]}},data:function(){return{form:{isSatisfied:"",feedback:""},errors:[],loading:!1}},methods:{send:function(){var t=this;this.loading=!0,this.$axios.post("contact/feedback",{isSatisfied:this.form.isSatisfied,feedback:this.form.feedback}).then((function(e){t.errors=[],t.form={isSatisfied:"",feedback:""},t.$toasted.show(t.$t("t_toasted_feedback_sent"),{icon:"done_all",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1})).catch((function(e){e.response.data.errors&&(t.errors=e.response.data.errors),t.$toasted.error(t.$t("t_toasted_something_went_wrong"),{icon:"error",className:t.$vuetify.rtl?"toasted-rtl":""}),t.loading=!1}))}}},l=(r(565),r(52)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[t._v("\n\t\t\t\t"+t._s(t.$t("t_loading"))+"\n\t\t\t")])],1),t._v(" "),r("v-content",[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-row",{attrs:{justify:"center"}},[r("v-flex",{attrs:{xs6:""}},[r("v-card",{staticClass:"m-card mt-12",attrs:{flat:""}},[r("v-card-title",{staticClass:"pa-0 justify-center",attrs:{"primary-title":""}},[r("h1",{staticClass:"display-1 font-weight-black text-uppercase pt-12"},[t._v(t._s(t.$t("t_feedback")))])]),t._v(" "),r("v-container",{staticClass:"pa-7 mt-4",attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-chip-group",{staticClass:"satisfied-btn",attrs:{mandatory:""}},[r("v-chip",{attrs:{"text-color":1===t.form.isSatisfied?"success":""},on:{click:function(e){t.form.isSatisfied=1}}},[t._v(t._s(t.$t("t_i_am_satisfied")))]),t._v(" "),r("v-chip",{attrs:{"text-color":0===t.form.isSatisfied?"error":""},on:{click:function(e){t.form.isSatisfied=0}}},[t._v(t._s(t.$t("t_i_am_unsatisfied")))])],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-textarea",{attrs:{color:"grey lighten-1",label:t.$t("t_feedback"),placeholder:t.$t("t_enter_feedback"),counter:"700",maxlength:"700",rules:t.errors.feedback,error:!!t.errors.feedback},model:{value:t.form.feedback,callback:function(e){t.$set(t.form,"feedback",e)},expression:"form.feedback"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"mt-0",attrs:{depressed:"",loading:t.loading,disabled:t.loading,block:"",color:"light-blue lighten-1",dark:""},on:{click:function(e){return e.preventDefault(),t.send()}}},[t._v(t._s(t.$t("t_send")))])],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);