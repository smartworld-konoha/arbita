(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ccb2"],{2725:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"blog-widget"},[s("div",{staticClass:"blog-layout-v1"},[s("img",{staticClass:"img-responsive mb-3",attrs:{src:t.data.thumbnail}}),s("div",{staticClass:"app-card-title pa-0 mb-2"},[s("h5",[t._v(t._s(t.data.title))])]),s("span",{staticClass:"grey--text fs-12 mb-2 d-block"},[t._v("Last updated: "+t._s(t.data.date))]),s("p",[t._v(t._s(t.data.body))])]),s("div",{staticClass:"d-custom-flex justify-space-between"},[s("div",[s("v-btn",{attrs:{icon:""}},[s("v-icon",{attrs:{color:"grey"}},[t._v("share")])],1),s("v-btn",{attrs:{icon:""}},[s("v-icon",{attrs:{color:"grey"}},[t._v("favorite")])],1)],1),s("v-btn",{attrs:{icon:""}},[s("v-icon",{staticClass:"grey--text"},[t._v("more_horiz")])],1)],1)])},a=[],l={props:["data"]},n=l,o=s("2877"),u=Object(o["a"])(n,e,a,!1,null,null,null);u.options.__file="BlogLayoutOne.vue";i["a"]=u.exports},a953:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("page-title-bar"),s("v-container",{attrs:{fluid:"","grid-list-xl":"","pt-0":""}},[s("div",{staticClass:"blog-list"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xl9:"",lg8:"",md8:"",sm8:"",xs12:""}},[s("v-layout",{attrs:{row:"",wrap:""}},t._l(t.blogs,function(t){return s("app-card",{key:t.id,attrs:{colClasses:"xl6 lg6 md6 sm12 xs12"}},[s("blog-layout-one",{attrs:{data:t}})],1)}))],1),s("v-flex",{attrs:{xl3:"",lg4:"",md4:"",sm4:"",xs12:""}},[s("div",{staticClass:"blog-sidebar"},[s("app-card",{attrs:{heading:"Categories",customClasses:"mb-4 category-widget",contentCustomClass:"pt-0"}},[s("ul",{staticClass:"list-unstyled"},t._l(t.categories,function(i,e){return s("li",{key:e},[s("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(i))])])}))]),s("app-card",{attrs:{heading:"Tags",customClasses:"mb-4 tags-widget",contentCustomClass:"pt-0"}},[s("ul",{staticClass:"list-unstyled"},t._l(t.tags,function(i,e){return s("li",{key:e},[s("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(i))])])}))]),s("app-card",{attrs:{heading:"Popular Blog",customClasses:"mb-4"}},[s("ul",{staticClass:"list-unstyled pa-0 ma-0"},t._l(t.populerBlogs,function(i){return s("li",{key:i.id,staticClass:"d-custom-flex mb-2"},[s("div",{staticClass:"blog-thumb mr-4"},[s("img",{staticClass:"img-responsive",attrs:{width:"80",height:"80",src:i.thumbnail}})]),s("div",{staticClass:"blog-content"},[s("p",{staticClass:"mb-0"},[s("a",{staticClass:"fs-12 fw-semi-bold",attrs:{href:"javascript:void(0)"}},[t._v(t._s(i.title))])]),s("span",{staticClass:"grey--text  fs-12"},[t._v("Likes: "+t._s(i.likes)+", Comments: "+t._s(i.comments))])])])}))])],1)])],1)],1)])],1)},a=[],l=s("2725"),n={components:{BlogLayoutOne:l["a"]},data:function(){return{blogs:[{id:1,thumbnail:"/static/img/blog-1.jpg",title:"lorem ipsum is simply dummy text",body:"Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",date:"1-jun-2018"},{id:2,thumbnail:"/static/img/blog-2.jpg",title:"lorem ipsum is simply dummy text",body:"Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",date:"1-jun-2018"},{id:3,thumbnail:"/static/img/blog-3.jpg",title:"lorem ipsum is simply dummy text",body:"Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",date:"1-jun-2018"},{id:4,thumbnail:"/static/img/blog-4.jpg",title:"lorem ipsum is simply dummy text",body:"Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",date:"1-jun-2018"},{id:5,thumbnail:"/static/img/blog-5.jpg",title:"lorem ipsum is simply dummy text",body:"Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",date:"1-jun-2018"},{id:6,thumbnail:"/static/img/blog-6.jpg",title:"lorem ipsum is simply dummy text",body:"Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",date:"1-jun-2018"}],populerBlogs:[{id:1,title:"7 Things You Need To Know About Consulting Today",thumbnail:"/static/img/gallery1.jpg",likes:220,comments:50},{id:2,title:"7 Things You Need To Know About Consulting Today",thumbnail:"/static/img/gallery2.jpg",likes:200,comments:40},{id:3,title:"7 Things You Need To Know About Consulting Today",thumbnail:"/static/img/gallery3.jpg",likes:180,comments:20},{id:4,title:"7 Things You Need To Know About Consulting Today",thumbnail:"/static/img/gallery4.jpg",likes:50,comments:2}],categories:["Trending","Sports","News","Travel","Social","Adventure"],tags:["Consulting","Finance","Ideas","Market","Online Service","Planning","Tips"]}}},o=n,u=s("2877"),r=Object(u["a"])(o,e,a,!1,null,null,null);r.options.__file="Blog.vue";i["default"]=r.exports}}]);
//# sourceMappingURL=chunk-ccb2.b9f250d3.js.map