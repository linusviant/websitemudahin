exports.ids=[119],exports.modules={129:function(t,e,r){"use strict";r.r(e);var o={data:()=>({loading:!0}),methods:{async register(t,e,path=null){this.$axios.post(`auth/${t}`,{token:e}).then(t=>{this.$auth.setUserToken(t.data)})},async google(path){await this.$axios.post(path.replace("/callback","")).then(t=>{this.$auth.setUserToken(t.data)})}},mounted(){switch(this.$route.params.provider){case"facebook":var t=window.location.href.split("access_token=")[1];this.register(this.$route.params.provider,t.split("&")[0]);break;case"twitter":this.register(this.$route.params.provider,this.$route.query.oauth_token,this.$route.query.oauth_verifier);break;case"google":this.google(this.$route.fullPath)}}},l=r(1),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-card",{attrs:{color:"black",dark:""}},[r("v-card-text",[t._v("\n                    Please stand by\n                    "),r("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)}),[],!1,null,null,"67dbbe22");e.default=component.exports}};