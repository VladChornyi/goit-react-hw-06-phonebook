(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{20:function(t,e,n){t.exports={form:"Filter_form__1RgDp",data:"Filter_data__3uUkx",title:"Filter_title__9pe_T"}},30:function(t,e,n){t.exports={delBtn:"ContactsList_delBtn__2gMi4"}},36:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(11),r=n.n(a),o=(n(36),n(21)),s=n(4),u=n(7),b=n.n(u),i=n(15),l=n(10),j=n.n(l);j.a.defaults.baseURL="http://localhost:4040/";var d,f,h=function(t){return j.a.post("contacts",t).then((function(t){return t.data})).catch((function(t){throw t}))},O=function(t){return j.a.delete("contacts/".concat(t)).then((function(t){return t.data})).catch((function(t){throw t}))},p=n(2),m=(Object(p.b)("phonebook/Delete"),Object(p.b)("phonebook/ChangeFilter")),x=Object(p.b)("phonebook/getContactsRequest"),v=Object(p.b)("phonebook/getContactsSuccess"),k=Object(p.b)("phonebook/getContactsError"),C=Object(p.b)("phonebook/AddContactsRequest"),_=Object(p.b)("phonebook/AddContactsSuccess"),g=Object(p.b)("phonebook/AddContactsError"),w=Object(p.b)("phonebook/DeleteContactsRequest"),y=Object(p.b)("phonebook/DeleteContactsSuccess"),F=Object(p.b)("phonebook/DeleteContactsError"),N=n(12),A=function(t){return t.phonebook.items},B=function(t){return t.phonebook.filter},D=Object(N.a)([A,B],(function(t,e){return function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(t,e)})),L=n(8),R=n.n(L),S=n(1),q=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),u=Object(o.a)(r,2),l=u[0],j=u[1],d=Object(s.b)(),f=Object(s.c)(A),O=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":j(c)}};return Object(S.jsxs)("form",{className:R.a.form,onSubmit:function(t){var e;t.preventDefault(),f.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(l.name," is already in contacts")):d((e={name:n,number:l},function(){var t=Object(i.a)(b.a.mark((function t(n){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(C()),t.prev=1,t.next=4,h(e);case 4:c=t.sent,n(_(c)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(g(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())),a(""),j("")},children:[Object(S.jsxs)("label",{className:R.a.title,children:["Name",Object(S.jsx)("input",{className:R.a.data,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:O})]}),Object(S.jsxs)("label",{className:R.a.title,children:["Number",Object(S.jsx)("input",{className:R.a.data,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:O})]}),Object(S.jsx)("button",{className:R.a.addBtn,type:"submit",children:"add contact"})]})},E=n(30),z=n.n(E),Z=function(){var t=Object(s.b)();Object(c.useEffect)((function(){t(function(){var t=Object(i.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x()),t.prev=1,t.next=4,j.a.get("contacts").then((function(t){return t.data})).catch((function(t){throw t}));case 4:n=t.sent,e(v(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(k(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[t]);var e=Object(s.c)(D),n=function(e){var n;t((n=e,function(){var t=Object(i.a)(b.a.mark((function t(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(w()),t.prev=1,t.next=4,O(n);case 4:e(y(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e(F(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()))};return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("ul",{children:e.length>0&&e.map((function(t){return Object(S.jsxs)("li",{children:["".concat(t.name," : ").concat(t.number),Object(S.jsx)("button",{className:z.a.delBtn,type:"button",name:"delete",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})},J=n(20),M=n.n(J),T=function(){var t=Object(s.b)(),e=Object(s.c)(B);return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("label",{className:M.a.title,children:["Find contacts by name",Object(S.jsx)("input",{className:M.a.data,type:"text",value:e,onChange:function(e){return t(m(e.target.value))}})]})})},U=function(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:"Phonebook"}),Object(S.jsx)(q,{}),Object(S.jsx)("h2",{children:"Contacts"}),Object(S.jsx)(T,{}),Object(S.jsx)(Z,{})]})})},I=n(14),K=n(31),P=n.n(K),Q=n(6),$=n(5),G=Object(p.c)([],(d={},Object(Q.a)(d,v,(function(t,e){return e.payload})),Object(Q.a)(d,_,(function(t,e){var n=e.payload;return[].concat(Object(I.a)(t),[n])})),Object(Q.a)(d,y,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),d)),H=Object(p.c)("",Object(Q.a)({},m,(function(t,e){return e.payload}))),V=Object(p.c)(null,(f={},Object(Q.a)(f,k,(function(t,e){return e.message})),Object(Q.a)(f,x,(function(){return null})),Object(Q.a)(f,g,(function(t,e){return e.message})),Object(Q.a)(f,C,(function(){return null})),Object(Q.a)(f,F,(function(t,e){return e.message})),Object(Q.a)(f,w,(function(){return null})),f)),W=Object($.b)({items:G,filter:H,error:V}),X=[].concat(Object(I.a)(Object(p.d)()),[P.a]),Y=Object(p.a)({reducer:{phonebook:W},middleware:X,devTools:!1});r.a.render(Object(S.jsx)(s.a,{store:Y,children:Object(S.jsx)(U,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"ContactsForm_form__2C-c8",addBtn:"ContactsForm_addBtn__33vKj",data:"ContactsForm_data__3efRM",title:"ContactsForm_title__3Z2QA"}}},[[63,1,2]]]);
//# sourceMappingURL=main.38b9ca68.chunk.js.map