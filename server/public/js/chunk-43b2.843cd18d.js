(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43b2"],{44160:function(s,t,i){"use strict";i.r(t);var e=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"session-wrapper"},[i("div",{staticClass:"session-left"},[i("session-slider-widget")],1),i("div",{staticClass:"session-right text-xs-center"},[i("div",{staticClass:"session-table-cell"},[i("div",{staticClass:"session-content"},[i("img",{staticClass:"img-responsive mb-3",attrs:{src:s.appLogo,width:"78",height:"78"}}),i("h2",{staticClass:"mb-3"},[s._v(s._s(s.$t("message.forgotPassword")))]),i("p",{staticClass:"fs-14"},[s._v(s._s(s.$t("message.enterYourEmailToSendYouAResetLink"))+".")]),i("v-form",{staticClass:"mb-4",model:{value:s.valid,callback:function(t){s.valid=t},expression:"valid"}},[i("v-text-field",{attrs:{label:"E-mail ID",rules:s.emailRules,required:""},model:{value:s.email,callback:function(t){s.email=t},expression:"email"}}),i("v-btn",{attrs:{color:"primary",block:"",to:"/session/reset-password"},on:{click:function(s){}}},[s._v("Send Email")])],1),i("div",[i("router-link",{attrs:{to:"/session/login"}},[s._v(s._s(s.$t("message.backToSignIn")))])],1)],1)])])])},a=[],n=i("7d36"),l=i("e065"),o={components:{SessionSliderWidget:n["a"]},data:function(){return{email:"",valid:!1,emailRules:[function(s){return!!s||"E-mail is required"},function(s){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(s)||"E-mail must be valid"}],appLogo:l["a"].appLogo2}}},r=o,c=i("2877"),d=Object(c["a"])(r,e,a,!1,null,null,null);d.options.__file="ForgotPassword.vue";t["default"]=d.exports},"7d36":function(s,t,i){"use strict";var e=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",[i("app-section-loader",{attrs:{status:s.loader}}),s.testimonials?i("slick",{attrs:{options:s.slickOptions}},[s._l(s.testimonials,function(t){return[i("div",{key:t.id,staticClass:"session-slider"},[i("div",{staticClass:"slider-content"},[i("img",{staticClass:"rounded-circle img-responsive",attrs:{src:t.avatar,width:"170",height:"170"}}),i("div",{staticClass:"slider-meta mb-3"},[i("span",{staticClass:"d-block client-name fw-bold"},[i("i",[s._v(s._s(t.name))])]),i("span",{staticClass:"d-block client-digg"},[s._v(s._s(t.designation))])]),i("p",{staticClass:"px-4"},[s._v(s._s(t.body))])])])]})],2):s._e()],1)},a=[],n=i("5957"),l=i("365c"),o={components:{Slick:n["a"]},mounted:function(){this.getTestimonials()},computed:{slickOptions:function(){return{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!1,rtl:this.$store.getters.rtlLayout}}},data:function(){return{loader:!0,testimonials:null}},methods:{getTestimonials:function(){var s=this;l["a"].get("testimonials.js").then(function(t){s.loader=!1,s.testimonials=t.data}).catch(function(s){console.log(s)})}}},r=o,c=i("2877"),d=Object(c["a"])(r,e,a,!1,null,null,null);d.options.__file="SessionSlider.vue";t["a"]=d.exports}}]);
//# sourceMappingURL=chunk-43b2.843cd18d.js.map