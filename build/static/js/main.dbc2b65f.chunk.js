(this["webpackJsonpnethouse-rm"]=this["webpackJsonpnethouse-rm"]||[]).push([[0],{12:function(t,e,c){t.exports={character:"character_character__2RiY9",character__description:"character_character__description__2CGJH",character__status_alive:"character_character__status_alive__105hx",character__status_dead:"character_character__status_dead__2zcJ4",character__status_unknown:"character_character__status_unknown__2fYM6"}},33:function(t,e,c){t.exports={charListItem:"characterListItem_charListItem__3GVbk"}},35:function(t,e,c){t.exports={charList:"characterList_charList__Jc745"}},42:function(t,e,c){},68:function(t,e,c){"use strict";c.r(e);var a=c(0),r=c.n(a),n=c(31),s=c.n(n),i=(c(42),c(13)),u=c(2),h=c(8),o=c.n(h),j=c(9),l=c(11),p=c(21),d=c(37);function b(t,e){switch(e.type){case"INIT":return e.payload;case"LOADMORE":return{info:Object(d.a)({},e.payload.info),results:[].concat(Object(p.a)(t.results),Object(p.a)(e.payload.results))};default:return t}}var f=c(32),O=c.n(f);function _(){return(_=Object(j.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var x=function(t){return _.apply(this,arguments)},m=c(33),v=c.n(m),y=c(1),k=function(t){var e=t.src,c=t.name,a=t.id;return Object(y.jsx)("li",{className:v.a.charListItem,children:Object(y.jsxs)(i.b,{to:"char/".concat(a),children:[Object(y.jsx)("figure",{children:Object(y.jsx)("img",{src:e,alt:c})}),Object(y.jsx)("p",{children:c})]})})},w=c(35),g=c.n(w),L=function(t){var e=t.chars.map((function(t){return Object(y.jsx)(k,{id:t.id,name:t.name,src:t.image},t.id)}));return Object(y.jsx)("ul",{className:g.a.charList,children:e})},N=c(36),I=function(){var t=Object(a.useReducer)(b),e=Object(l.a)(t,2),c=e[0],r=e[1],n=Object(a.useState)(""),s=Object(l.a)(n,2),i=s[0],u=s[1];function h(){return(h=Object(j.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c.info.next){t.next=3;break}return t.next=3,x(c.info.next).then((function(t){return r({type:"LOADMORE",payload:t.data})})).catch((function(){u("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043d\u0435 \u0443\u0434\u0430\u043b\u0430\u0441\u044c")}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function t(){return(t=Object(j.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x("https://rickandmortyapi.com/api/character").then((function(t){return r({type:"INIT",payload:t.data})})).catch((function(){u("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043d\u0435 \u0443\u0434\u0430\u043b\u0430\u0441\u044c")}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(y.jsxs)("div",{children:[c?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(L,{chars:c.results}),Object(y.jsx)(N.a,{onChange:function(t){return t&&c.info?function(){return h.apply(this,arguments)}():null}})]}):null,i?Object(y.jsx)("p",{className:"error",children:i}):null]})},E=c(12),J=c.n(E),S=function(t){var e=t.character,c="";switch(e.status){case"Alive":c=J.a.character__status_alive;break;case"Dead":c=J.a.character__status_dead;break;default:c=J.a.character__status_unknown}return Object(y.jsxs)("div",{className:J.a.character,children:[Object(y.jsx)("figure",{children:Object(y.jsx)("img",{src:e.image,alt:e.name})}),Object(y.jsxs)("div",{className:J.a.character__description,children:[Object(y.jsxs)("p",{children:["Name: ",e.name]}),Object(y.jsxs)("p",{children:["Status: ",Object(y.jsx)("span",{className:c,children:e.status})]}),Object(y.jsxs)("p",{children:["Gender: ",e.gender]}),Object(y.jsxs)("p",{children:["Location: ",e.location.name]})]})]})},M=function(){var t=Object(a.useState)({}),e=Object(l.a)(t,2),c=e[0],r=e[1],n=Object(a.useState)(""),s=Object(l.a)(n,2),i=s[0],h=s[1],p=+Object(u.f)().pathname.slice(6);return Object(a.useEffect)((function(){function t(){return(t=Object(j.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x("https://rickandmortyapi.com/api/character/".concat(p)).then((function(t){return r(t.data)})).catch((function(){h("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043d\u0435 \u0443\u0434\u0430\u043b\u0430\u0441\u044c")}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(y.jsxs)(y.Fragment,{children:[c.id?Object(y.jsx)(S,{character:c}):null,i?Object(y.jsx)("p",{className:"error",children:i}):null]})};var R=function(){return Object(y.jsx)(i.a,{children:Object(y.jsxs)(u.c,{children:[Object(y.jsx)(u.a,{exact:!0,path:"/",children:Object(y.jsx)(I,{})}),Object(y.jsx)(u.a,{path:"/char",children:Object(y.jsx)(M,{})})]})})};s.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(R,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.dbc2b65f.chunk.js.map