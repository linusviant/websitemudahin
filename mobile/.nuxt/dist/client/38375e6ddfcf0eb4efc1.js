(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{640:function(e,t,r){"use strict";r.r(t);var o,l=r(228),n=(r(45),r(26)),c=r(529),d=r.n(c),f=(r(530),r(531),r(532)),v=r.n(f),m=r(533),h=r.n(m),_={middleware:"auth",layout:"default/main",component:d()(v.a,h.a),asyncData:(o=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.post("create/fetch");case 3:return o=e.sent,e.abrupt("return",{form:{currency:o.data.currency.currency.code,title:"",description:"",price:"",category:"",sub_cat:"",video:"",images:[],fields:[]},countries:o.data.countries,currencies:o.data.currencies,categories:o.data.categories,advertisement:o.data.advertisement,packages:o.data.packages,seo:{title:o.data.seo.title,separator:o.data.seo.separator,description:o.data.seo.description,favicon:o.data.seo.favicon}});case 5:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)}),data:function(){return{fields:[],childs:[],errors:[],selected:null,loading:!1,dialogs:{currency:!1}}},head:function(){return{title:this.$t("t_post_new"),titleTemplate:"%s ".concat(this.seo.separator," ").concat(this.seo.title),meta:[{name:"description",content:this.seo.description},{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.seo.favicon}]}},methods:{create:function(){var e=this;try{this.loading=!0;var t=JSON.stringify(this.form.fields),data=new FormData;data.append("title",this.form.title),this.form.description&&data.append("description",this.form.description),this.form.video&&data.append("video",this.form.video),this.form.price&&data.append("price",this.form.price),data.append("category",this.form.category),this.form.sub_cat&&data.append("sub_cat",this.form.sub_cat),this.selected&&data.append("package",this.selected),this.form.currency&&data.append("currency",this.form.currency),data.append("fields",t);for(var i=0;i<this.$refs.pond.getFiles().length;i++)data.append("images[]",this.$refs.pond.getFiles()[i].file);this.$axios.post("create",data,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){if(e.errors=[],e.form={title:"",description:"",price:"",video:"",fields:[]},"approval_required"===t.data)return e.$router.push("/"),e.$toasted.success(e.$t("t_toasted_deal_requires_approval"),{icon:"sync",className:e.$vuetify.rtl?"toasted-rtl":""}),void(e.loading=!1);e.$router.push(t.data),e.loading=!1})).catch((function(t){t.response.data.errors&&(e.errors=t.response.data.errors),e.$toasted.error(e.$t("t_toasted_something_went_wrong"),{icon:"error",className:e.$vuetify.rtl?"toasted-rtl":""}),e.loading=!1}))}catch(e){this.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1}},changeCurrency:function(){this.dialogs.currency=!this.dialogs.currency},remove:function(e){this.form.categories.splice(this.form.categories.indexOf(e),1),this.form.categories=Object(l.a)(this.form.categories)},icon:function(e){return null===e?this.home("/application/storage/app/uploads/default/category/no-icon.png"):this.home("/application/storage/app/"+e)},fetchFields:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.form.fields=[],this.loading=!0;var r=t?this.form.sub_cat:this.form.category;this.$axios.post("ajax/fetch/fields",{category:r}).then((function(t){e.fields=t.data,e.loading=!1})).catch((function(t){console.log(t),e.loading=!1}))},fetchChilds:function(){var e=this;this.loading=!0,this.$axios.post("ajax/fetch/categories/childs",{id:this.form.category}).then((function(t){0===t.data.length?(e.form.sub_cat=null,e.childs=[]):e.childs=t.data,e.loading=!1})).catch((function(t){console.log(t),e.loading=!1}))},fetchSubs:function(){var e=this;this.loading=!0,this.$axios.post("ajax/fetch/categories/childs",{id:this.form.sub_cat}).then((function(t){if(0!==t.data.length){var r=e.form.sub_cat;e.form.sub_cat=null,e.$nextTick((function(){e.childs=t.data,e.form.sub_cat=r}))}e.loading=!1})).catch((function(t){console.log(t),e.loading=!1}))},addDropdownField:function(e,t){var r=this,data={slug:t,value:e};if(0!==r.form.fields.length)if(r.form.fields.some((function(a){return a.slug===t})))for(var o in r.form.fields){var l=r.form.fields[o];if(l.slug===t){l.value=e;break}}else r.form.fields.push(data);else r.form.fields.push(data)},addCheckboxField:function(e,t,r){var o=this,data={slug:t,value:[e]};if(0!==o.form.fields.length)if(o.form.fields.some((function(a){return a.slug===t})))for(var l in o.form.fields){var n=o.form.fields[l];if(n.slug===t){var c=n.value;for(var d in 0===c.length&&c.push(e),c){var f=o.form.fields[l].value[d];if(null===e&&f===r){o.$delete(o.form.fields[l].value,d);break}if(null!==e&&r!==f){o.form.fields[l].value.push(e);break}}break}}else o.form.fields.push(data);else o.form.fields.push(data)},addRadioField:function(e,t){var r=this,data={slug:t,value:e};if(0!==r.form.fields.length)if(r.form.fields.some((function(a){return a.slug===t})))for(var o in r.form.fields){var l=r.form.fields[o];if(l.slug===t){l.value=e;break}}else r.form.fields.push(data);else r.form.fields.push(data)}}},x=r(52),component=Object(x.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[e._v("\n\t\t\t\t"+e._s(e.$t("t_loading"))+"\n\t\t\t")])],1),e._v(" "),r("v-content",[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticClass:"m-card mb-4",attrs:{flat:""}},[r("v-card-title",{staticClass:"text-center pa-5",attrs:{"primary-title":""}},[r("div",{staticClass:"text-center",staticStyle:{width:"100%"}},[r("v-icon",{attrs:{color:"grey darken-1",size:"80"}},[e._v("mdi-image-multiple")])],1)]),e._v(" "),r("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:e.$t("t_title"),placeholder:e.$t("t_enter_title"),counter:"100",maxlength:"100",rules:e.errors.title,error:!!e.errors.title},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"form-group mb-4",class:[e.errors.description?"has-danger":""]},[r("label",{attrs:{for:"input-normal"}},[e._v(e._s(e.$t("t_description")))]),e._v(" "),r("ckeditor",{staticClass:"form-control",attrs:{config:{language:this.$i18n.locale},type:"classic"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),e.errors.description?r("small",{staticClass:"red--text block"},[e._v(e._s(e.errors.description[0]))]):e._e()]),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-autocomplete",{attrs:{items:e.categories,"item-text":"title","item-value":"id",label:e.$t("t_category"),placeholder:e.$t("t_choose_category"),autocomplete:"off",color:"grey lighten-1",rules:e.errors.category,error:!!e.errors.category,dense:""},on:{change:function(t){e.fetchFields(),e.fetchChilds()}},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}})],1),e._v(" "),0!==e.childs.length?r("v-flex",{attrs:{xs12:""}},[r("v-autocomplete",{attrs:{items:e.childs,"item-text":"title","item-value":"id",label:e.$t("t_sub_category"),placeholder:e.$t("t_choose_sub_category"),autocomplete:"off",color:"grey lighten-1",rules:e.errors.sub_cat,error:!!e.errors.sub_cat,dense:""},on:{change:function(t){e.fetchFields(!0),e.fetchSubs()}},model:{value:e.form.sub_cat,callback:function(t){e.$set(e.form,"sub_cat",t)},expression:"form.sub_cat"}})],1):e._e(),e._v(" "),e._l(e.fields,(function(t){return r("div",{key:t.id,staticStyle:{width:"100%"}},["dropdown"===t.field.type?r("v-flex",{attrs:{xs12:""}},[r("v-select",{attrs:{items:t.field.options.split(","),placeholder:t.field.name,label:t.field.name,autocomplete:"off",color:"grey lighten-1",rules:e.errors[t.field.slug],error:!!e.errors[t.field.slug],dense:""},on:{change:function(r){return e.addDropdownField(r,t.field.slug)}}})],1):e._e(),e._v(" "),"checkbox"===t.field.type?r("v-flex",{attrs:{xs12:""}},[r("div",{class:e.errors[t.field.slug]?"error--text":""},[e._v(e._s(t.field.name))]),e._v(" "),e._l(t.field.options.split(","),(function(o){return r("v-checkbox",{key:o,staticClass:"mb-3",attrs:{label:o,color:e.$vuetify.theme.dark?"white":"red",value:o,"hide-details":""},on:{change:function(r){return e.addCheckboxField(r,t.field.slug,o)}}})})),e._v(" "),e.errors[t.field.slug]?r("small",{staticClass:"error--text"},[e._v(e._s(e.errors[t.field.slug][0]))]):e._e()],2):e._e(),e._v(" "),"radio"===t.field.type?r("v-flex",{attrs:{xs12:""}},[r("div",{class:e.errors[t.field.slug]?"error--text":""},[e._v(e._s(t.field.name))]),e._v(" "),r("v-radio-group",{attrs:{column:""}},[e._l(t.field.options.split(","),(function(o){return r("v-radio",{key:o,staticClass:"mb-3",attrs:{label:o,color:e.$vuetify.theme.dark?"white":"red",value:o,"hide-details":""},on:{change:function(r){return e.addRadioField(o,t.field.slug)}}})})),e._v(" "),e.errors[t.field.slug]?r("small",{staticClass:"error--text"},[e._v(e._s(e.errors[t.field.slug][0]))]):e._e()],2)],1):e._e()],1)})),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:e.$t("t_price"),placeholder:e.$t("t_enter_price"),prefix:e.$currencySymbol(e.form.currency),"append-icon":"mdi-dots-vertical",rules:e.errors.price,error:!!e.errors.price},on:{"click:append":e.changeCurrency},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),e._v(" "),e.dialogs.currency?r("v-flex",{attrs:{xs12:""}},[r("v-autocomplete",{attrs:{autocomplete:"off",color:"grey lighten-1",items:e.currencies,"item-text":"name","item-value":"code",placeholder:e.$t("t_enter_currency"),label:e.$t("t_currency"),dense:""},on:{change:function(t){e.dialogs.currency=!e.dialogs.currency}},model:{value:e.form.currency,callback:function(t){e.$set(e.form,"currency",t)},expression:"form.currency"}})],1):e._e(),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:e.$t("t_youtube_video"),placeholder:e.$t("t_enter_youtube_video"),rules:e.errors.video,error:!!e.errors.video},model:{value:e.form.video,callback:function(t){e.$set(e.form,"video",t)},expression:"form.video"}})],1)],2)],1)],1),e._v(" "),r("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[r("v-layout",{attrs:{column:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("client-only",[r("div",{staticClass:"mt-4"},[r("div",[r("file-pond",{ref:"pond",attrs:{name:"test","label-idle":e.$t("t_drag_deal_images_mobile"),"allow-multiple":"true","accepted-file-types":"image/jpeg, image/png",files:e.form.images}})],1)])])],1),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-container",{staticClass:"pa-0",attrs:{"grid-list-xl":""}},[r("v-layout",{attrs:{row:"",wrap:"","align-start":"","justify-start":""}},[e._l(e.packages,(function(p,t){return r("v-flex",{key:t,attrs:{xs6:""}},[r("v-card",{staticClass:"py-3 cursor-pointer",class:e.selected===p.id?"selected-package":"",staticStyle:{"box-shadow":"0px 1px 1px rgba(0, 0, 0, 0.08)"},attrs:{flat:"",color:e.selected===p.id?"#878d8b":e.$vuetify.theme.dark?"#3a3939":"white"}},[r("v-icon",{directives:[{name:"show",rawName:"v-show",value:p.id===e.selected,expression:"p.id === selected"}],staticStyle:{position:"absolute",top:"10px",right:"10px"},attrs:{size:"16px",color:"white"},on:{click:function(t){e.selected=null}}},[e._v("mdi-close")]),e._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[r("v-icon",e._g({directives:[{name:"show",rawName:"v-show",value:e.selected!==p.id,expression:"selected !== p.id"}],staticStyle:{position:"absolute",top:"10px",left:"10px"},attrs:{size:"16px",color:"#7a7a7a"},on:{click:function(t){e.selected=null}}},o),[e._v("mdi-information-variant")])]}}],null,!0)},[e._v(" "),r("span",[e._v(e._s(p.title))])]),e._v(" "),r("v-card-title",{staticClass:"layout justify-center pb-5",attrs:{"primary-title":""},on:{click:function(t){e.selected=p.id}}},[r("v-chip",{directives:[{name:"show",rawName:"v-show",value:"highlight"===p.type,expression:"p.type === 'highlight'"}],attrs:{small:"",label:"",color:"amber lighten-4","text-color":"amber darken-2"}},[e._v(e._s(e.$t("t_highlight")))]),e._v(" "),r("v-chip",{directives:[{name:"show",rawName:"v-show",value:"urgent"===p.type,expression:"p.type === 'urgent'"}],attrs:{small:"",label:"",color:"red lighten-4","text-color":"red darken-2"}},[e._v(e._s(e.$t("t_urgent")))]),e._v(" "),r("v-chip",{directives:[{name:"show",rawName:"v-show",value:"featured"===p.type,expression:"p.type === 'featured'"}],attrs:{small:"",label:"",color:"light-green lighten-4","text-color":"light-green darken-2"}},[e._v(e._s(e.$t("t_featured")))])],1),e._v(" "),r("v-card-text",{staticClass:"text-center",on:{click:function(t){e.selected=p.id}}},[r("span",{staticClass:"package-price pb-5",staticStyle:{"font-family":"'Open sans',sans-serif","font-size":"16px!important","letter-spacing":"1px","font-weight":"700"}},[e._v(e._s(e.$getCurrency(p.price,p.currency,p.locale)))]),e._v(" "),r("div",{staticClass:"grey--text pt-5"},[r("span",{staticClass:"package-days",staticStyle:{"font-family":"Hind, 'Noto Kufi Arabic',sans-serif","font-weight":"500","text-transform":"uppercase","font-size":"10px","letter-spacing":"1px",color:"#595959","padding-top":"15px"}},[e._v(e._s(e._f("numeralFormat")(p.days))+" "+e._s(e.$t("t_days")))]),r("br"),e._v(" "),r("br")])])],1)],1)})),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"mb-1 white--text",attrs:{disabled:e.loading,loading:e.loading,block:"",depressed:"",color:"blue"},on:{click:function(t){return t.preventDefault(),e.create(t)}}},[e._v(e._s(e.$t("t_create")))])],1)],2)],1)],1)],1)],1)],1),e._v(" "),r("v-flex",{attrs:{xs12:""}},[e.advertisement?r("v-card",{staticClass:"advertisement mt-4 m-card pa-0 text-center",domProps:{innerHTML:e._s(e.advertisement.ad_deal_sidebar)}}):e._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);