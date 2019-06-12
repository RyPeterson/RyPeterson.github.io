(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,a,t){},110:function(e,a,t){},111:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),l=t.n(c),i=(t(60),t(61),t(62),t(113)),s=t(12),o=t(118),m=t(120),u=t(112);t(63);var f=function(e){var a=e.user,t=Object(s.a)(e,["user"]);return r.a.createElement(o.a,Object.assign({bg:"dark",expand:"md",className:"navi"},t),r.a.createElement(o.a.Brand,{href:"/"},"Yamhillia"),r.a.createElement(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(o.a.Collapse,{id:"yamhillia-navbar-collapse"},r.a.createElement(m.a.Link,{href:"/"},"Home"),r.a.createElement(m.a.Link,{href:"/animals"},"Animals"),a&&r.a.createElement(u.a,{className:"right-page-actions"},r.a.createElement(m.a.Link,{className:"user-welcome",href:"/profile"},"Welcome ",function(e){var a=e.lastName?e.lastName.charAt(0):"";return"".concat(e.firstName).concat(a.length?" ".concat(a,"."):"")}(a)),r.a.createElement(m.a.Link,{href:"/logout"},"Logout")),!a&&r.a.createElement(u.a,{className:"right-page-actions"},r.a.createElement(m.a.Link,{href:"/login"},"Login"),r.a.createElement(m.a.Link,{href:"/register"},"Register"))))};t(77);var g=function(e){return r.a.createElement(i.a,{className:"page"},void((a=e.title)&&(document.title=a)),r.a.createElement(f,{user:e.user}),e.children);var a},p=t(10),d=t.n(p),h=t(16),E=function(e){return t(79)("./".concat(e,".svg"))},v=[{name:"Chicken",defaultImage:E("chicken")},{name:"Cow",defaultImage:E("cow")},{name:"Duck",defaultImage:E("duck")},{name:"Goat",defaultImage:E("goat")},{name:"Goose",defaultImage:E("goose")},{name:"Horse",defaultImage:E("horse")},{name:"Llama",defaultImage:E("llama")},{name:"Pig",defaultImage:E("pig")},{name:"Rabbit",defaultImage:E("rabbit")},{name:"Turkey",defaultImage:E("turkey")}],b=v;var O={getAnimals:function(e){for(var a=[],t=function(e){var t=function(){switch(e%3){case 0:return"Male";case 1:return"Female";case 2:return"Other";default:throw new Error("This shall not happen")}}(),n=b[e%b.length];a.push({name:"Animal ".concat(n.name," ").concat(e),dateOfBirth:new Date,dateOfDeath:e%4===0?new Date:void 0,species:n,animalGender:t,id:e+1})},n=0;n<(e||30);n++)t(n);return Promise.resolve(a)},getAnimal:function(){var e=Object(h.a)(d.a.mark(function e(a){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAnimals(30);case 2:return t=e.sent,e.abrupt("return",t.find(function(e){return e.id===a})||null);case 4:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),getUser:function(){return{email:"testuser@test.com",firstName:"Test",lastName:"User"}},fetchUser:function(){return Promise.resolve(this.getUser())}};function k(){return O}var N=function(e){return r.a.createElement(g,Object.assign({},e,{user:k().getUser()}),"TODO this is the index")},y=t(17),x=t(54),j=(t(90),t(35)),w=t.n(j),D=t(50),C=t(119),A=t(114),I=t(115),P=t(121);function B(e,a){return a===e-1?"nav-item-previous":a===e+1?"nav-item-next":""}var L=Math.floor(2.5),M=L%2!==0?L:L+1;console.log(5,L,M);var T=function(e){var a=e.activePage,t=e.pageNumber,n=(e.pageNumbers,e.onPageSelected),c=Object(s.a)(e,["activePage","pageNumber","pageNumbers","onPageSelected"]);return r.a.createElement(P.a.Item,Object.assign({active:t===a,onClick:function(){return n(t)},className:B(a,t)},c),t)},U=function(e){var a=e.availablePages,t=e.onPageSelected,n=e.currentPage,c=Object(s.a)(e,["availablePages","onPageSelected","currentPage"]),l=Array.apply(null,Array(a)).map(function(e,a){return a+1}),i=function(e,a){return e>=a.length-5?a.slice(Math.min(e-M,a.length-5),Math.min(e+L,a.length)):e<=M?a.slice(0,5):a.slice(e-M,Math.min(e+L,a.length))}(n,l),o=n-5+1>=0,m=n-M>=l.length-5,u=i.length<l.length&&!m;return r.a.createElement(P.a,Object.assign({size:"lg"},c),a>1&&r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a.First,{onClick:function(){return t(1)}}),r.a.createElement(P.a.Prev,{onClick:function(){return t(Math.max(1,n-1))}}),o&&r.a.createElement(P.a.Ellipsis,{onClick:function(){t(Math.max(0,n-5))}}),i.map(function(e){return r.a.createElement(T,{key:"page_".concat(e),activePage:n,pageNumber:e,onPageSelected:t,pageNumbers:l})}),u&&r.a.createElement(P.a.Ellipsis,{onClick:function(){t(Math.min(a,n+5))}}),r.a.createElement(P.a.Next,{onClick:function(){return t(Math.min(a,n+1))}}),r.a.createElement(P.a.Last,{onClick:function(){return t(a)}})))};function S(e){return"".concat(e.getMonth()+1,"/").concat(e.getDay(),"/").concat(e.getFullYear())}var G=function(e){var a=e.date,t=e.label,n=e.renderEmpty,c=e.className;return a||n?!a&&n?r.a.createElement(D.a,{className:"".concat(c," empty")},"none"):r.a.createElement(D.a,{className:c},t," ",a&&S(a)):null},F=function(e){var a=e.animal,t=e.onAnimalDetailsClicked;return r.a.createElement(C.a,{className:"animal-card ".concat(a.empty&&"empty-card"),"aria-hidden":a.empty},r.a.createElement(C.a.Img,{className:"animal-profile-image",variant:"top",src:a.species.defaultImage}),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,null,a.name),r.a.createElement(A.a,null,r.a.createElement(D.a,null,"Gender: ",a.animalGender),r.a.createElement(G,{className:"date-of-birth",date:a.dateOfBirth,label:"Date of Birth:"}),r.a.createElement(G,{className:"date-of-death",date:a.dateOfDeath,label:"Date of Death:",renderEmpty:!0})),r.a.createElement(I.a,{className:"animal-details",onClick:function(){return!a.empty&&t&&t(a.id)}},"Details")))},_=function(e){var a=e.animals,t=e.onAnimalDetailsClicked,c=Object(s.a)(e,["animals","onAnimalDetailsClicked"]),l=4-a.length%4,o=a.map(function(e){return Object(x.a)({},e)}).concat(function(e){for(var a=[],t=0;t<e;t++)a.push({empty:!0,name:"",animalGender:"Male",species:b[0],id:-(t+1)});return a}(l)),m=Object(n.useState)(1),f=Object(y.a)(m,2),g=f[0],p=f[1],d=w()(o,12),h=w()(d[g-1],4);return r.a.createElement(i.a,Object.assign({className:"animal-list-page"},c),r.a.createElement(U,{className:"animal-list-paginator",availablePages:d.length,onPageSelected:function(e){p(e)},currentPage:g}),r.a.createElement(i.a,{className:"animal-list"},h.map(function(e,a){return r.a.createElement(u.a,{key:"animal_row_".concat(a),className:"animal-card-row"},e.map(function(e){return r.a.createElement(F,{animal:e,key:"animal_".concat(e.id),onAnimalDetailsClicked:t})}))})))},W=t(7),Y=23;function H(){return J.apply(this,arguments)}function J(){return(J=Object(h.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k().getAnimals(Y);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var R=Object(W.e)(function(e){var a=Object(n.useState)([]),t=Object(y.a)(a,2),c=t[0],l=t[1],i=k().getUser();return Object(n.useEffect)(function(){function e(){return(e=Object(h.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,H();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),r.a.createElement(g,Object.assign({title:"Yamhillia - Animals"},e,{user:i}),r.a.createElement(_,{animals:c,onAnimalDetailsClicked:function(a){e.history.push("/animal-details/".concat(a))}}))}),z=function(e){return r.a.createElement(g,Object.assign({},e,{user:null}),"TODO all the logins are belong to us")},$=function(e){return r.a.createElement(g,Object.assign({},e,{user:null}),"TODO all the registrations are belong to us")},q=t(116),K=(t(109),function(e){var a=e.message;return r.a.createElement(i.a,{className:"loading-spinner"},r.a.createElement(i.a,{className:"contents"},r.a.createElement(i.a,{className:"spinner-and-message"},r.a.createElement(u.a,{className:"spinner-container"},r.a.createElement(q.a,{className:"spinner",animation:"border",variant:"primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading"))),a&&r.a.createElement(u.a,{className:"loading-spinner-message"},a))))}),Q=t(117),V=(t(110),function(e){var a=e.animal,t=e.onEditClicked,n=e.onNavigateBack;return r.a.createElement(i.a,{className:"animal-component"},r.a.createElement(u.a,{className:"animal-profile-picture"},r.a.createElement(Q.a,{className:"profile-image",src:a.species.defaultImage,rounded:!0})),r.a.createElement(i.a,{className:"animal-details"},r.a.createElement(u.a,{className:"animal-name"},a.name),r.a.createElement(u.a,{className:"animal-gender"},r.a.createElement("label",null,"Gender:"),a.animalGender),r.a.createElement(u.a,{className:"animal-date-of-birth"},a.dateOfBirth&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"Date of Birth:"),S(a.dateOfBirth))),r.a.createElement(u.a,{className:"animal-date-of-death"},a.dateOfDeath&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"Date of Death"),S(a.dateOfDeath)))),r.a.createElement(u.a,{className:"animal-actions"},r.a.createElement(I.a,{className:"edit-information",variant:"primary",onClick:t},"Edit Information"),r.a.createElement(I.a,{className:"back",variant:"secondary",onClick:n},"Back")))}),X=Object(W.e)(function(e){var a=e.match,t=e.history,c=Object(s.a)(e,["match","history"]),l=a.params.animalId,i=Object(n.useState)(null),o=Object(y.a)(i,2),m=o[0],u=o[1],f=Object(n.useState)(!0),p=Object(y.a)(f,2),E=p[0],v=p[1],b=k().getUser();return Object(n.useEffect)(function(){function e(){return(e=Object(h.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l){e.next=3;break}return t.push("/animals"),e.abrupt("return");case 3:if(a=Number.parseInt(l)){e.next=7;break}return t.push("/animals"),e.abrupt("return");case 7:return e.t0=u,e.next=10,k().getAnimal(a);case 10:e.t1=e.sent,(0,e.t0)(e.t1),v(!1);case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),E||m?E?r.a.createElement(K,{message:"Loading Animal"}):r.a.createElement(g,Object.assign({},c,{user:b}),r.a.createElement(V,{animal:m,onEditClicked:function(){console.log("Edit this animal")},onNavigateBack:function(){t.push("/animals")}})):null}),Z=t(53),ee=function(e){return r.a.createElement(g,Object.assign({},e,{user:k().getUser()}),"TODO: All the profiles are belong to us")},ae=function(e){return r.a.createElement(g,Object.assign({},e,{user:k().getUser()}),"TODO: All the logouts are belong to us")},te=function(e){return r.a.createElement(Z.a,null,r.a.createElement(W.a,{path:"/",exact:!0,component:N}),r.a.createElement(W.a,{path:"/animals",exact:!0,component:R}),r.a.createElement(W.a,{path:"/animal-details/:animalId",exact:!0,component:X}),r.a.createElement(W.a,{path:"/login",exact:!0,component:z}),r.a.createElement(W.a,{path:"/register",exact:!0,component:$}),r.a.createElement(W.a,{path:"/profile",exact:!0,component:ee}),r.a.createElement(W.a,{path:"/logout",exact:!0,component:ae}),!1)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,a,t){e.exports=t(111)},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},77:function(e,a,t){},79:function(e,a,t){var n={"./chicken.svg":80,"./cow.svg":81,"./duck.svg":82,"./goat.svg":83,"./goose.svg":84,"./horse.svg":85,"./llama.svg":86,"./pig.svg":87,"./rabbit.svg":88,"./turkey.svg":89};function r(e){var a=c(e);return t(a)}function c(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=79},80:function(e,a,t){e.exports=t.p+"static/media/chicken.e668faa2.svg"},81:function(e,a,t){e.exports=t.p+"static/media/cow.4b722d5e.svg"},82:function(e,a,t){e.exports=t.p+"static/media/duck.54f3e23d.svg"},83:function(e,a,t){e.exports=t.p+"static/media/goat.74585008.svg"},84:function(e,a,t){e.exports=t.p+"static/media/goose.fd0fd882.svg"},85:function(e,a,t){e.exports=t.p+"static/media/horse.821d41f4.svg"},86:function(e,a,t){e.exports=t.p+"static/media/llama.c2e39b78.svg"},87:function(e,a,t){e.exports=t.p+"static/media/pig.5f2c34e0.svg"},88:function(e,a,t){e.exports=t.p+"static/media/rabbit.d2a6fafa.svg"},89:function(e,a,t){e.exports=t.p+"static/media/turkey.2d9e0cf4.svg"},90:function(e,a,t){}},[[55,1,2]]]);
//# sourceMappingURL=main.e192f5cb.chunk.js.map