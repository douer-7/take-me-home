(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-622923fe"],{"74cb":function(t,a,n){},"95f9":function(t,a,n){"use strict";var s=n("74cb"),e=n.n(s);e.a},b199:function(t,a,n){},b5eb:function(t,a,n){"use strict";var s=n("b199"),e=n.n(s);e.a},d924:function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"view-B"},[n("div",{staticClass:"catList"},t._l(t.cats,(function(a){return n("CatPreview",{key:a.id,staticClass:"cat-card",attrs:{name:a.name,avator:a.avator,sex:a.sex,age:a.age,catInfo:a},nativeOn:{click:function(n){return t.toCatInfo(a.id)}}})})),1)])},e=[],c=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"card"},[n("div",{staticClass:"imgBox"},[n("img",{staticClass:"card-img",attrs:{src:t.avator}})]),n("div",{staticClass:"catInfo"},[n("p",{staticClass:"age"},[t._v(t._s(t.age))]),n("p",{staticClass:"sex"},[t._v(t._s(t.sex))])])])},i=[],o={name:"",props:{name:String,avator:String,width:String,sex:String,age:String},data:function(){return{}},components:{},computed:{},beforeMount:function(){},mounted:function(){},methods:{},watch:{}},r=o,u=(n("95f9"),n("2877")),f=Object(u["a"])(r,c,i,!1,null,"730c568a",null),l=f.exports,d=n("1bab"),v={data:function(){return{cats:[]}},computed:{},components:{CatPreview:l},methods:{getCatList:function(){var t=this;Object(d["a"])({url:"/catList.json"}).then((function(a){console.log(a),t.cats=a.data.data}))},toCatInfo:function(t){this.$router.push("/catInfo/"+t)}},created:function(){this.getCatList()}},b=v,g=(n("b5eb"),Object(u["a"])(b,s,e,!1,null,"33569f90",null));a["default"]=g.exports}}]);
//# sourceMappingURL=chunk-622923fe.c6a99b9d.js.map