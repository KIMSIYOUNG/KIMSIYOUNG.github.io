(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(4),i=n.n(l),r=n(2),o=n(1);n(10);var u=function(e){var t=e.list,n=e.complete,a=e.deleted,l=e.editing,i=e.input,r=e.changeInput,o=e.enterToUpdate;return c.a.createElement("div",{className:"main"},c.a.createElement("input",{className:"toggle-all",type:"checkbox"}),c.a.createElement("ul",{id:"todo-list",className:"todo-list"}," ",t.map((function(e){return c.a.createElement("li",{key:e.id,className:e.isCompleted?"completed":e.onEdit?"editing":"ready"},c.a.createElement("div",{className:"view"},c.a.createElement("input",{className:"toggle",type:"checkbox",onClick:function(){return n(e.id)}}),c.a.createElement("label",{className:"label",onDoubleClick:function(){return l(e.id)}},e.text),c.a.createElement("button",{className:"destroy",onClick:function(){return a(e.id)}})),c.a.createElement("input",{className:"edit",placeholder:e.text,value:i,onChange:r,onKeyUp:function(t){return o(t,e.id)}}))}))," "))};var d=function(e){var t=e.calculateSum,n=e.count;return c.a.createElement("div",{className:"count-container"},c.a.createElement("span",{className:"todo-count"},"\ucd1d ",c.a.createElement("strong",null,n)," \uac1c"),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("a",{className:"all selected",href:"#/",onClick:function(){return t("ALL")}},"\uc804\uccb4\ubcf4\uae30")),c.a.createElement("li",null,c.a.createElement("a",{className:"active",href:"#/active",onClick:function(){return t("ACTIVE")}},"\ud574\uc57c\ud560 \uc77c")),c.a.createElement("li",null,c.a.createElement("a",{className:"completed",href:"#/completed",onClick:function(){return t("COMPLETE")}},"\uc644\ub8cc\ud55c \uc77c"))))};var m=function(e){var t=e.input,n=e.change,a=e.enterToAdd;return c.a.createElement("div",null,c.a.createElement("h1",null,"TODOS"),c.a.createElement("input",{id:"new-todo-title",className:"new-todo",placeholder:"\ud560\uc77c\uc744 \ucd94\uac00\ud574\uc8fc\uc138\uc694",autoFocus:!0,value:t,onChange:n,onKeyUp:a}))};var s=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),p=s[0],E=s[1],f=Object(a.useState)([{id:1,text:"\uc548\ub155\ud558\uc138\uc694",isCompleted:!1,onEdit:!1},{id:2,text:"\uae00\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694.",isCompleted:!1,onEdit:!1}]),v=Object(o.a)(f,2),C=v[0],b=v[1],g=Object(a.useState)("ALL"),h=Object(o.a)(g,2),O=h[0],N=h[1],j=Object(a.useState)(3),k=Object(o.a)(j,2),L=k[0],A=k[1],T=Object(a.useState)(2),x=Object(o.a)(T,2),y=x[0],S=x[1];return c.a.createElement("div",{className:"App"},c.a.createElement("section",{className:"todoapp"},c.a.createElement(m,{input:n,change:function(e){l(e.target.value)},enterToAdd:function(e){if("Enter"===e.key&&""!==e.target.value.trim()){var t={id:L,text:n,isCompleted:!1,onEdit:!1};A(L+1),S(y+1),l(""),b(C.concat(t))}}}),c.a.createElement(u,{list:function(e){return"ALL"===e?C:"ACTIVE"===e?C.filter((function(e){return!e.isCompleted})):"COMPLETED"===e?C.filter((function(e){return e.isCompleted})):void 0}(O),complete:function(e){var t=C.map((function(t){return t.id===e?Object(r.a)({},t,{isCompleted:!t.isCompleted}):t}));b(t)},deleted:function(e){b(C.filter((function(t){return t.id!==e}))),S(y-1)},editing:function(e){var t=C.map((function(t){return t.id===e?Object(r.a)({},t,{onEdit:!t.onEdit}):t}));b(t)},input:p,changeInput:function(e){E(e.target.value)},enterToUpdate:function(e,t){if("Escape"===e.key){var n=C.map((function(e){return e.id===t?e={id:t,text:e.text,isCompleted:!1,onEdit:!1}:e}));b(n)}if("Enter"===e.key&&""!==e.target.value.trim()){var a=C.map((function(e){return e.id===t?e={id:t,text:p,isCompleted:!1,onEdit:!1}:e}));b(a)}}}),c.a.createElement(d,{calculateSum:function(e){return"ALL"===e?(S(C.length),void N("ALL")):"ACTIVE"===e?(S(C.filter((function(e){return!e.isCompleted})).length),N("ACTIVE")):(S(C.filter((function(e){return e.isCompleted})).length),N("COMPLETED"))},count:y})))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.1d307b21.chunk.js.map