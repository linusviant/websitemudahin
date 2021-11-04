exports.ids=[16],exports.modules={226:function(e,t,r){"use strict";r.r(t);var o=r(68),l=r.n(o),c=(r(77),r(78),r(69)),n=r.n(c),d=r(70),f=r.n(d);var h={layout:"default/admin",middleware:"administrator",component:l()(n.a,f.a),async asyncData({app:e,$axios:t,params:r,redirect:o}){e.$adgate.allow(e.$auth.user,"access","deals")||o("/administrator");let l=await t.post("administrator/deals/options/create/fetch");return{form:{currency:l.data.currency.currency.code,title:null,description:"",price:null,category:null,sub_cat:null,video:null,images:[],fields:[]},currencies:l.data.currencies,categories:l.data.categories}},data:function(){return{childs:[],fields:[],errors:[],dialogs:{currency:!1},loading:!0}},head(){return{title:this.$t("t_create_deal"),titleTemplate:`%s ${this.$store.state.settings.separator} ${this.$t("t_dashboard")}`,meta:[{name:"robots",content:"noindex, nofollow"}],link:[{rel:"icon",type:"image/x-icon",href:this.$store.state.settings.favicon?this.$homeApi(`storage/app/${this.$store.state.settings.favicon}`):this.$homeApi("storage/app/uploads/default/settings/favicon/favicon.png")}]}},methods:{create:function(){if(this.$adgate.allow(this.$auth.user,"access","deals"))try{this.loading=!0;let e=JSON.stringify(this.form.fields),data=new FormData;data.append("title",this.form.title),this.form.description&&data.append("description",this.form.description),this.form.video&&data.append("video",this.form.video),this.form.price&&data.append("price",this.form.price),data.append("category",this.form.category),this.form.sub_cat&&data.append("sub_cat",this.form.sub_cat),this.selected&&data.append("package",this.selected),this.form.currency&&data.append("currency",this.form.currency),data.append("fields",e);for(let i=0;i<this.$refs.pond.getFiles().length;i++)data.append("images[]",this.$refs.pond.getFiles()[i].file);this.$axios.post("administrator/deals/options/create",data,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{this.errors=[],this.fields=[],this.childs=[],this.form={title:"",description:"",category:"",price:"",currency:"",video:"",images:[],fields:[]},this.$toasted.show(this.$t("t_toasted_deal_created"),{icon:"done_all",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1}).catch(e=>{e.response.data.errors&&(this.errors=e.response.data.errors),this.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1})}catch(e){this.$toasted.error(this.$t("t_toasted_something_went_wrong"),{icon:"error",className:this.$vuetify.rtl?"toasted-rtl":""}),this.loading=!1}else this.$router.push("/administrator")},changeCurrency:function(){this.dialogs.currency=!this.dialogs.currency},fetchFields:function(e=!1){this.form.fields=[],this.loading=!0;let t=e?this.form.sub_cat:this.form.category;this.$axios.post("ajax/fetch/fields",{category:t}).then(e=>{this.fields=e.data,this.loading=!1}).catch(e=>{console.log(e),this.loading=!1})},fetchChilds:function(){this.loading=!0,this.$axios.post("ajax/fetch/categories/childs",{id:this.form.category}).then(e=>{0===e.data.length?(this.form.sub_cat=null,this.childs=[]):this.childs=e.data,this.loading=!1}).catch(e=>{console.log(e),this.loading=!1})},fetchSubs:function(){this.loading=!0,this.$axios.post("ajax/fetch/categories/childs",{id:this.form.sub_cat}).then(e=>{if(0!==e.data.length){let t=this.form.sub_cat;this.form.sub_cat=null,this.$nextTick(()=>{this.childs=e.data,this.form.sub_cat=t})}this.loading=!1}).catch(e=>{console.log(e),this.loading=!1})},addDropdownField:function(e,t){let r=this,data={slug:t,value:e};if(0===r.form.fields.length)r.form.fields.push(data);else{if(r.form.fields.some(a=>a.slug===t)){for(var o in r.form.fields){let l=r.form.fields[o];if(l.slug===t){l.value=e;break}}return}r.form.fields.push(data)}},addCheckboxField:function(e,t,r){let o=this,data={slug:t,value:[e]};if(0===o.form.fields.length)o.form.fields.push(data);else{if(o.form.fields.some(a=>a.slug===t)){for(var l in o.form.fields){let n=o.form.fields[l];if(n.slug===t){let t=n.value;for(var c in 0===t.length&&t.push(e),t){let t=o.form.fields[l].value[c];if(null===e&&t===r){o.$delete(o.form.fields[l].value,c);break}if(null!==e&&r!==t){o.form.fields[l].value.push(e);break}}break}}return}o.form.fields.push(data)}},addRadioField:function(e,t){let r=this,data={slug:t,value:e};if(0===r.form.fields.length)r.form.fields.push(data);else{if(r.form.fields.some(a=>a.slug===t)){for(var o in r.form.fields){let l=r.form.fields[o];if(l.slug===t){l.value=e;break}}return}r.form.fields.push(data)}}},mounted(){0}},m=r(1),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-overlay",{attrs:{opacity:"0.8"},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"80",width:"4",color:"white"}},[e._v("\n\t\t\t\t"+e._s(e.$t("t_loading"))+"\n\t\t\t")])],1),e._v(" "),r("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticClass:"m-card px-3",attrs:{flat:""}},[r("v-card-title",{staticClass:"pa-4",attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"title"},[e._v(e._s(e.$t("t_create_deal")))]),e._v(" "),r("span",{staticClass:"card-description"},[e._v(e._s(e.$t("t_fill_form_to_create_deal")))])])]),e._v(" "),r("v-container",{staticClass:"pa-4",attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:e.$t("t_title"),placeholder:e.$t("t_enter_title"),counter:"100",maxlength:"100",rules:e.errors.title,error:!!e.errors.title},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"form-group mb-4",class:[e.errors.description?"has-danger":""]},[r("label",{attrs:{for:"input-normal"}},[e._v(e._s(e.$t("t_description")))]),e._v(" "),r("ckeditor",{staticClass:"form-control",attrs:{config:{language:this.$i18n.locale},type:"classic"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),e.errors.description?r("small",{staticClass:"red--text block"},[e._v(e._s(e.errors.description[0]))]):e._e()]),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-autocomplete",{attrs:{items:e.categories,"item-text":"title","item-value":"id",label:e.$t("t_category"),placeholder:e.$t("t_choose_category"),autocomplete:"off",color:"grey lighten-1",rules:e.errors.category,error:!!e.errors.category,dense:""},on:{change:function(t){e.fetchFields(),e.fetchChilds()}},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}})],1),e._v(" "),0!==e.childs.length?r("v-flex",{attrs:{xs12:""}},[r("v-autocomplete",{attrs:{items:e.childs,"item-text":"title","item-value":"id",label:e.$t("t_sub_category"),placeholder:e.$t("t_choose_sub_category"),autocomplete:"off",color:"grey lighten-1",rules:e.errors.sub_cat,error:!!e.errors.sub_cat,dense:""},on:{change:function(t){e.fetchFields(!0),e.fetchSubs()}},model:{value:e.form.sub_cat,callback:function(t){e.$set(e.form,"sub_cat",t)},expression:"form.sub_cat"}})],1):e._e(),e._v(" "),e._l(e.fields,(function(t){return r("div",{key:t.id,staticStyle:{width:"100%"}},["dropdown"===t.field.type?r("v-flex",{attrs:{xs12:""}},[r("v-select",{attrs:{items:t.field.options.split(","),placeholder:t.field.name,label:t.field.name,autocomplete:"off",color:"grey lighten-1",rules:e.errors[t.field.slug],error:!!e.errors[t.field.slug],dense:""},on:{change:function(r){return e.addDropdownField(r,t.field.slug)}}})],1):e._e(),e._v(" "),"checkbox"===t.field.type?r("v-flex",{attrs:{xs12:""}},[r("div",{class:e.errors[t.field.slug]?"error--text":""},[e._v(e._s(t.field.name))]),e._v(" "),e._l(t.field.options.split(","),(function(o,l){return r("v-checkbox",{key:l,staticClass:"mb-3",attrs:{label:o,color:"red",value:o,"hide-details":""},on:{change:function(r){return e.addCheckboxField(r,t.field.slug,o)}}})})),e._v(" "),e.errors[t.field.slug]?r("small",{staticClass:"error--text"},[e._v(e._s(e.errors[t.field.slug][0]))]):e._e()],2):e._e(),e._v(" "),"radio"===t.field.type?r("v-flex",{attrs:{xs12:""}},[r("div",{class:e.errors[t.field.slug]?"error--text":""},[e._v(e._s(t.field.name))]),e._v(" "),r("v-radio-group",{attrs:{column:""}},[e._l(t.field.options.split(","),(function(o){return r("v-radio",{key:o,staticClass:"mb-3",attrs:{label:o,color:"red",value:o,"hide-details":""},on:{change:function(r){return e.addRadioField(o,t.field.slug)}}})})),e._v(" "),e.errors[t.field.slug]?r("small",{staticClass:"error--text"},[e._v(e._s(e.errors[t.field.slug][0]))]):e._e()],2)],1):e._e()],1)})),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:e.$t("t_price"),placeholder:e.$t("t_enter_price"),prefix:e.$currencySymbol(e.form.currency),"append-icon":"mdi-dots-vertical",rules:e.errors.price,error:!!e.errors.price},on:{"click:append":e.changeCurrency},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),e._v(" "),e.dialogs.currency?r("v-flex",{attrs:{xs12:""}},[r("v-autocomplete",{attrs:{autocomplete:"off",color:"grey lighten-1",items:e.currencies,"item-text":"name","item-value":"code",placeholder:e.$t("t_enter_currency"),label:e.$t("t_currency"),dense:""},on:{change:function(t){e.dialogs.currency=!e.dialogs.currency}},model:{value:e.form.currency,callback:function(t){e.$set(e.form,"currency",t)},expression:"form.currency"}})],1):e._e(),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{color:"grey lighten-1",label:e.$t("t_youtube_video"),placeholder:e.$t("t_enter_youtube_video"),rules:e.errors.video,error:!!e.errors.video},model:{value:e.form.video,callback:function(t){e.$set(e.form,"video",t)},expression:"form.video"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("client-only",[r("div",[r("div",[r("file-pond",{ref:"pond",attrs:{name:"test","label-idle":e.$t("t_drag_deal_images"),"allow-multiple":"true","accepted-file-types":"image/jpeg, image/png",files:e.form.images}})],1)])])],1),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"mb-1",attrs:{disabled:e.loading,loading:e.loading,block:"",depressed:"",color:"blue",dark:""},on:{click:function(t){return t.preventDefault(),e.create(t)}}},[e._v(e._s(e.$t("t_create")))])],1)],2)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,"477c688c");t.default=component.exports},77:function(e,t){},78:function(e,t){}};