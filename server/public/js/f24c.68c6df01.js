(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["f24c"],{f24c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart-wrapper"},[a("page-title-bar"),a("v-container",{attrs:{fluid:"","pt-0":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("app-card",{attrs:{fullBlock:!0,colClasses:"xl12 lg12 md12 sm12 xs12 pa-0"}},[a("app-section-loader",{attrs:{status:t.loader}}),a("v-data-table",{attrs:{headers:t.headers,items:t.cart,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"d-custom-flex align-items-center justify-center product-item px-1"},[a("img",{staticClass:"img-responsive",attrs:{src:e.item.productImg,height:"100",width:"100"}})]),a("td",[a("h6",{staticClass:"mb-0"},[t._v(t._s(e.item.name))])]),a("td",{staticClass:"text-center count-wrap"},[a("input",{attrs:{type:"number",min:"1"},domProps:{value:e.item.quantity},on:{change:function(a){t.onChangeQuantity(a,e.item)}}})]),a("td",{staticClass:"text-center"},[a("span",{staticClass:"fw-light error--text"},[t._v("$ "+t._s(e.item.price))])]),a("td",{staticClass:"text-center"},[t._v("$"+t._s(e.item.total))]),a("td",{staticClass:"text-center"},[a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(a){t.deleteProductFromCart(e.item)}}},[a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("close")])],1)],1)]}}])},[a("template",{slot:"no-data"},[a("span",[t._v(t._s(t.$t("message.noItemsFound")))])]),a("template",{slot:"footer"},[a("td",{attrs:{colspan:"2"}},[a("v-text-field",{attrs:{solo:"",placeholder:"Apply Promo Code"}})],1),a("td",{staticClass:"text-center"},[a("v-btn",{staticClass:"ma-0",attrs:{color:"warning"}},[t._v("Apply")])],1),a("td",{staticClass:"text-center"},[a("span",{staticClass:"fw-semi-bold"},[t._v(t._s(t.$t("message.total")))])]),a("td",{staticClass:"text-center"},[a("span",{staticClass:"fw-semi-bold"},[t._v("$"+t._s(t.getTotalPrice))])]),a("td",[a("v-btn",{staticClass:"ma-0",attrs:{color:"primary",to:"/"+t.getCurrentAppLayoutHandler()+"/ecommerce/checkout"}},[t._v("\n                  Checkout\n                ")])],1)])],2),a("delete-confirmation-dialog",{ref:"deleteConfirmationDialog",attrs:{heading:"Are You Sure You Want To Delete?",message:"Are you sure you want to delete this product permanently?"},on:{onConfirm:t.onDeleteProductFromCart}})],1)],1)],1)],1)},r=[],o=(a("ac4d"),a("8a81"),a("ac6a"),a("c93e")),n=a("2f62"),l=a("4da1"),c={data:function(){return{selectDeletedProduct:null,loader:!1,headers:[{text:"",align:"center",sortable:!1,class:"w-10"},{text:"Product",value:"product",sortable:!1,class:"w-50"},{text:"Quantity",value:"quantity",sortable:!1,align:"center",class:"w-10"},{text:"Price",value:"price",sortable:!1,align:"center",class:"w-10"},{text:"Total",value:"total",sortable:!1,align:"center",class:"w-10"},{text:"Remove",sortable:!1,align:"center",class:"w-10"}]}},computed:Object(o["a"])({},Object(n["b"])(["cart"]),{getTotalPrice:function(){var t=0;if(this.cart.length>0){var e=!0,a=!1,s=void 0;try{for(var r,o=this.cart[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var n=r.value;t+=n.total}}catch(t){a=!0,s=t}finally{try{e||null==o.return||o.return()}finally{if(a)throw s}}return t.toFixed(2)}return t}}),methods:{getCurrentAppLayoutHandler:function(){return Object(l["a"])(this.$router)},onChangeQuantity:function(t,e){this.$store.dispatch("changeQuantityHandler",{e:t,cartItem:e})},deleteProductFromCart:function(t){this.$refs.deleteConfirmationDialog.openDialog(),this.selectDeletedProduct=t},onDeleteProductFromCart:function(){var t=this;this.$refs.deleteConfirmationDialog.close(),this.loader=!0,setTimeout(function(){t.loader=!1,t.$store.dispatch("onDeleteProductFromCart",t.selectDeletedProduct)},1500)}}},i=c,u=a("2877"),d=Object(u["a"])(i,s,r,!1,null,null,null);d.options.__file="Cart.vue";e["default"]=d.exports}}]);
//# sourceMappingURL=f24c.68c6df01.js.map