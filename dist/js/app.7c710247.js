(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)r=s[u],i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function r(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-62a6f3ec":"174d26c2"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(t),o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");r.type=a,r.request=o,n[1](r)}i[t]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},o=[],r=(n("5c0b"),n("2877")),s={},c=Object(r["a"])(s,i,o,!1,null,null,null),l=c.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container has-text-centered"},[n("div",{staticClass:"column is-4 is-offset-4"},[n("div",{staticClass:"box"},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("label",{staticClass:"label",attrs:{for:"name"}},[t._v("Name")]),n("div",{staticClass:"select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"select",attrs:{id:"name",type:"text",name:"name"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.name=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"Dev"}},[t._v("Dev")]),n("option",{attrs:{value:"Manager"}},[t._v("Manager")]),n("option",{attrs:{value:"Student"}},[t._v("Student")])])])])]),n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("label",{staticClass:"label",attrs:{for:"name"}},[t._v("When did the user first join ?")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"input",attrs:{id:"date",type:"date",name:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})])]),n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("label",{staticClass:"label",attrs:{for:"name"}},[t._v("Is this person located in Victoria ?")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],attrs:{id:"location",value:"YES",type:"radio",name:"location"},domProps:{checked:t._q(t.location,"YES")},on:{click:function(e){return t.locationPick()},change:function(e){t.location="YES"}}}),t._v("\n            YES\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],attrs:{id:"location",value:"NO",type:"radio",name:"location"},domProps:{checked:t._q(t.location,"NO")},on:{click:function(e){return t.locationUnPick()},change:function(e){t.location="NO"}}}),t._v("\n            NO\n          ")])]),n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[t.isVic?n("p",[n("label",{staticClass:"label",attrs:{for:"name"}},[t._v("Where in Victoria ?")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"input",attrs:{id:"city",type:"text",name:"city",input:"","is-large":""},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}})]):t._e()])]),n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){return t.back()}}},[t._v("Back")]),n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){return t.next()}}},[t._v("Next")])])])])},p=[],f=(n("7f7f"),n("92c6"),n("c0d6")),v={name:"PageOne",store:f["a"],data:function(){return 0===f["a"].state.lists.length?{name:"",date:"",location:"",city:"",isVic:!1}:f["a"].state.lists[f["a"].state.lists.length-1]},methods:{next:function(){this.date?"YES"!==this.location?alert("please fill the location"):this.city?(f["a"].commit("addItem",{name:this.name,date:this.date,location:this.location,city:this.city,isVic:this.isVic}),this.$router.push("/pagetwo")):alert("please fill the city"):alert("please fill the date")},locationPick:function(){this.isVic=!0},locationUnPick:function(){this.isVic=!1}}},m=v,h=Object(r["a"])(m,d,p,!1,null,null,null),b=h.exports;a["a"].use(u["a"]);var g=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"pageOne",component:b},{path:"/pagetwo",name:"pageTwo",component:function(){return n.e("chunk-62a6f3ec").then(n.bind(null,"1944"))}}]});a["a"].config.productionTip=!1,new a["a"]({router:g,store:f["a"],render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),i=n.n(a);i.a},"5e27":function(t,e,n){},c0d6:function(t,e,n){"use strict";n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=n("2f62");a["a"].use(i["a"]),e["a"]=new i["a"].Store({state:{lists:[],pageTwo:[]},mutations:{addItem:function(t,e){t.lists.push(e)},addItemPageTwo:function(t,e){t.pageTwo.push(e)}},actions:{}})}});
//# sourceMappingURL=app.7c710247.js.map