(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),u=t.n(o),c=t(4),l=t(2),i=function(e){var n=e.persons,t=e.eventHandler;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement("div",{key:e.id},e.name," ",e.number," ",r.a.createElement("button",{value:e.id,"data-name":e.name,onClick:t},"Delete"))})))},d=function(e){var n=e.text,t=e.value,a=e.eventHandler;return r.a.createElement("div",null,n,": ",r.a.createElement("input",{value:t,onChange:a}))},m=function(e){var n=e.addPerson,t=e.newName,a=e.newNumber,o=e.handleNameChange,u=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement(d,{text:"Name",value:t,eventHandler:o}),r.a.createElement(d,{text:"Number",value:a,eventHandler:u}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Add")))},f=function(e){var n=e.message,t=e.isError;if(null===n)return null;var a={color:t?"red":"green",background:t?"lightpink":"lightgreen",borderStyle:"solid",borderRadius:5,borderColor:t?"red":"green",fontSize:20};return r.a.createElement("p",{style:a},n)},s=t(3),b=t.n(s),h="/api/persons",v=function(){return b.a.get(h).then((function(e){return e.data}))},E=function(e){return b.a.post(h,e).then((function(e){return e.data}))},p=function(e){return b.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},g=function(e,n){return b.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),s=Object(l.a)(u,2),b=s[0],h=s[1],w=Object(a.useState)(""),j=Object(l.a)(w,2),C=j[0],O=j[1],N=Object(a.useState)(""),k=Object(l.a)(N,2),S=k[0],y=k[1],H=Object(a.useState)(null),L=Object(l.a)(H,2),x=L[0],T=L[1],D=Object(a.useState)(!1),A=Object(l.a)(D,2),P=A[0],I=A[1];Object(a.useEffect)((function(){v().then((function(e){o(e)}))}),[]);var J=""===S?t:t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(f,{message:x,isError:P}),r.a.createElement(d,{text:"Search",value:S,eventHandler:function(e){y(e.target.value)}}),r.a.createElement("h2",null,"Add person"),r.a.createElement(m,{addPerson:function(e){if(e.preventDefault(),t.find((function(e){return e.name.toLowerCase()===b.toLowerCase()}))){if(window.confirm("".concat(b," has already been added to the phonebook. Replace the old number with ").concat(C,"?"))){var n=Object(c.a)(Object(c.a)({},t.find((function(e){return e.name.toLowerCase()===b.toLowerCase()}))),{},{number:C});g(n.id,n).then((function(e){o(t.map((function(t){return t.id!==n.id?t:e}))),h(""),O("")})).catch((function(e){console.log(e),I(!0),o(t.filter((function(e){return e.id!==n.id}))),T("Error: Could not change the number. ".concat(n.name," has already been removed from the server.")),setTimeout((function(){T(null),I(!1)}),5e3)})),T("Changed number for ".concat(n.name)),setTimeout((function(){T(null)}),5e3)}}else{var a={name:b,number:C};E(a).then((function(e){o(t.concat(e)),h(""),O("")})),T("Added ".concat(a.name)),setTimeout((function(){T(null)}),5e3)}},newName:b,newNumber:C,handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(i,{persons:J,eventHandler:function(e){var n=parseInt(e.target.value),a=e.target.dataset.name;window.confirm("Delete ".concat(a,"?"))&&(p(n).then(o(t.filter((function(e){return e.id!==n})))).catch((function(e){console.log(e),I(!0),o(t.filter((function(e){return e.id!==n}))),T("Error: ".concat(a," has already been removed from the server.")),setTimeout((function(){T(null),I(!1)}),5e3)})),T("Deleted ".concat(a)),setTimeout((function(){T(null)}),5e3))}}))};u.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d6f01399.chunk.js.map