(function(e){function t(t){for(var c,i,o=t[0],l=t[1],s=t[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(c=!1)}c&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={app:0},a=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/alefDev/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b8d":function(e,t,n){e.exports=n.p+"img/Union.01071ddb.svg"},"18e0":function(e,t,n){"use strict";n("b3d4")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,a,i){var o=Object(c["y"])("Header"),l=Object(c["y"])("router-view");return Object(c["r"])(),Object(c["e"])("div",null,[Object(c["h"])(o),Object(c["h"])(l)])}var a=n("cf05"),i=n.n(a),o=function(e){return Object(c["u"])("data-v-31fd94bc"),e=e(),Object(c["s"])(),e},l={class:"header"},s={class:"container"},f={class:"d-flex justify-content-between align-items-center pt-4 pb-4"},u=o((function(){return Object(c["f"])("a",null,[Object(c["f"])("img",{src:i.a})],-1)})),d={class:"d-flex menu m-0"},b={class:"menu-item"},O=Object(c["g"])("Форма"),j={class:"menu-item"},v=Object(c["g"])("Превью");function m(e,t,n,r,a,i){var o=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["e"])("div",l,[Object(c["f"])("div",s,[Object(c["f"])("div",f,[u,Object(c["f"])("ul",d,[Object(c["f"])("li",b,[Object(c["h"])(o,{class:"router-link",to:"/alefDev"},{default:Object(c["E"])((function(){return[O]})),_:1})]),Object(c["f"])("li",j,[Object(c["h"])(o,{class:"router-link",to:"/preview"},{default:Object(c["E"])((function(){return[v]})),_:1})])])])])])}var p={name:"Header"},h=(n("c15f"),n("6b0d")),g=n.n(h);const A=g()(p,[["render",m],["__scopeId","data-v-31fd94bc"]]);var y=A,w={name:"App",components:{Header:y}};const x=g()(w,[["render",r]]);var I=x,S=(n("f9e3"),n("845f"),n("6c02")),C=(n("b0c0"),n("0b8d")),P=n.n(C),k=function(e){return Object(c["u"])("data-v-4c8266b6"),e=e(),Object(c["s"])(),e},F={class:"container form"},M={class:"row"},X={class:"col-lg-8 col-12 m-auto"},Y=k((function(){return Object(c["f"])("h2",{class:"form-title"},"Персональные данные",-1)})),U=k((function(){return Object(c["f"])("label",{for:"name"},"Имя",-1)})),z=k((function(){return Object(c["f"])("label",{for:"age"},"Возраст",-1)})),V={class:"child-wrapper"},H={class:"d-flex justify-content-between align-items-center mb-3"},N=k((function(){return Object(c["f"])("h2",{class:"form-title m-0"},"Дети (макс. 5)",-1)})),E=k((function(){return Object(c["f"])("img",{class:"mr-2",src:P.a},null,-1)})),K=Object(c["g"])(" Добавить ребенка"),R=[E,K],G=["for"],J=["onUpdate:modelValue","id"],Z=["for"],D=["onUpdate:modelValue","id"],Q=["onClick"];function _(e,t,n,r,a,i){return Object(c["r"])(),Object(c["e"])("div",F,[Object(c["f"])("div",M,[Object(c["f"])("div",X,[Y,Object(c["f"])("div",{class:Object(c["n"])(["form-input",{active:a.validation}])},[U,Object(c["F"])(Object(c["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.personal_info.name=e}),id:"name"},null,512),[[c["C"],a.personal_info.name]])],2),Object(c["f"])("div",{class:Object(c["n"])(["form-input",{active:a.validation}])},[z,Object(c["F"])(Object(c["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.personal_info.age=e}),id:"age"},null,512),[[c["C"],a.personal_info.age]])],2),Object(c["f"])("div",V,[Object(c["f"])("div",H,[N,a.children.length<5?(Object(c["r"])(),Object(c["e"])("button",{key:0,onClick:t[2]||(t[2]=function(e){return i.addChild()}),class:"add-child"},R)):Object(c["d"])("",!0)]),(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(a.children,(function(e){return Object(c["r"])(),Object(c["e"])("div",{class:"child-form",key:e.id},[Object(c["f"])("div",{class:Object(c["n"])(["form-input",{active:!0===e.valid}])},[Object(c["f"])("label",{for:"child-name"+e.id},"Имя",8,G),Object(c["F"])(Object(c["f"])("input",{"onUpdate:modelValue":function(t){return e.name=t},id:"child-name"+e.id},null,8,J),[[c["C"],e.name]])],2),Object(c["f"])("div",{class:Object(c["n"])(["form-input",{active:!0===e.valid}])},[Object(c["f"])("label",{for:"child-age"+e.id},"Возраст",8,Z),Object(c["F"])(Object(c["f"])("input",{"onUpdate:modelValue":function(t){return e.age=t},id:"child-age"+e.id},null,8,D),[[c["C"],e.age]])],2),Object(c["f"])("span",{onClick:function(t){return i.removeChild(e.id)},class:"delete-child"},"Удалить",8,Q)])})),128)),i.showSave?(Object(c["r"])(),Object(c["e"])("button",{key:0,onClick:t[3]||(t[3]=function(e){return i.saveData()}),class:"save"},"Сохранить")):Object(c["d"])("",!0)])])])])}n("4de4"),n("d3b7"),n("e9c4");var T={name:"Form",data:function(){return{validation:!1,children:[],personal_info:{name:"",age:""}}},computed:{showSave:function(){return 0!==this.children.length}},methods:{addChild:function(){this.children.length<5?this.children.push({valid:!1,id:Date.now(),name:"",age:""}):alert("Max child is 5")},removeChild:function(e){this.children=this.children.filter((function(t){return t.id!==e})),0===this.children.length&&localStorage.removeItem("children")},saveData:function(){""===this.personal_info.name||""===this.personal_info.age?this.validation=!0:(this.validation=!1,localStorage.setItem("children",JSON.stringify(this.children)),localStorage.setItem("personal_info",JSON.stringify(this.personal_info)),alert("You have saved your data"))}},mounted:function(){var e=JSON.parse(localStorage.getItem("children")),t=JSON.parse(localStorage.getItem("personal_info"));e&&(this.children=e),t&&(this.personal_info=t)}};n("18e0");const B=g()(T,[["render",_],["__scopeId","data-v-4c8266b6"]]);var L=B,W=function(e){return Object(c["u"])("data-v-f8e862aa"),e=e(),Object(c["s"])(),e},q={class:"container"},$={class:"row"},ee={class:"col-lg-8 col-12 m-auto"},te=W((function(){return Object(c["f"])("h3",{class:"title"},"Персональные данные",-1)})),ne={key:0,class:"name"},ce=W((function(){return Object(c["f"])("h3",{class:"title"},"Дети",-1)})),re={key:0,class:"preview-child"},ae={key:0};function ie(e,t,n,r,a,i){return Object(c["r"])(),Object(c["e"])("div",null,[Object(c["f"])("div",q,[Object(c["f"])("div",$,[Object(c["f"])("div",ee,[te,""!==a.personal_info.name&&""!==a.personal_info.age?(Object(c["r"])(),Object(c["e"])("h2",ne,Object(c["A"])(a.personal_info.name)+", "+Object(c["A"])(a.personal_info.age)+" лет ",1)):Object(c["d"])("",!0),ce,(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(a.children,(function(e){return Object(c["r"])(),Object(c["e"])("div",{key:e.id},[""!==e.name?(Object(c["r"])(),Object(c["e"])("div",re,[Object(c["g"])(Object(c["A"])(e.name)+" "+Object(c["A"])(e.age)+" ",1),""!==e.age?(Object(c["r"])(),Object(c["e"])("span",ae,"лет")):Object(c["d"])("",!0)])):Object(c["d"])("",!0)])})),128))])])])])}var oe={name:"Preview",data:function(){return{personal_info:{name:"",age:""},children:[]}},mounted:function(){this.children=JSON.parse(localStorage.getItem("children")),this.personal_info=JSON.parse(localStorage.getItem("personal_info"))}};n("f6a6");const le=g()(oe,[["render",ie],["__scopeId","data-v-f8e862aa"]]);var se=le,fe=[{path:"/alefDev",name:"Form",component:L},{path:"/preview",name:"Preview",component:se}],ue=Object(S["a"])({history:Object(S["b"])(),routes:fe}),de=ue,be=Object(c["c"])(I);be.use(de),be.mount("#app")},"769a":function(e,t,n){},"845f":function(e,t,n){},b3d4:function(e,t,n){},c15f:function(e,t,n){"use strict";n("769a")},c816:function(e,t,n){},cf05:function(e,t){e.exports="data:image/png;base64,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"},f6a6:function(e,t,n){"use strict";n("c816")}});
//# sourceMappingURL=app.74c2e76d.js.map