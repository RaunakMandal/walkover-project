(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,a){},44:function(e,t,a){e.exports=a(82)},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a(1),o=a(7),i=a.n(o),u=a(15),m=a(22),s=a(17),d=a(14),b=Object(c.g)((function(){var e=Object(d.b)(),t=e.loginWithRedirect,a=e.isAuthenticated,n=e.logout;return l.a.createElement("div",null,l.a.createElement("ul",{className:"nav nav-tabs bg-dark"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{className:"nav-link",to:"/"},"Tables")),a?l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{className:"nav-link",to:"/",onClick:n},"Logout")):l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{className:"nav-link",to:"/",onClick:t},"Login"))))})),p=function(e){var t=e.className,a=void 0===t?"bg-dark text-white p-4":t,n=e.children;return l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:a},n)))},E=a(16),f=a.n(E),v=(a(38),a(41)),h=a.n(v),g=function(){var e=Object(d.b)(),t=e.isAuthenticated,a=e.user,r=Object(n.useState)(""),o=Object(s.a)(r,2),b=o[0],E=o[1],v=Object(n.useState)([{name:"",type:"",primary:!1}]),g=Object(s.a)(v,2),y=g[0],N=g[1],k=function(e,t){var a=e.target,n=a.name,l=a.value,r=Object(m.a)(y);r[t][n]=l,N(r)},w=function(){var e=Object(u.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),console.log(b),""!==b){e.next=6;break}alert("Please enter a table name"),e.next=16;break;case 6:if(0!==y.length){e.next=10;break}alert("Please enter all details"),e.next=16;break;case 10:if(!t){e.next=15;break}return e.next=13,f.a.post("http://localhost:8000/addTable",{tableName:b,userID:a.nickname,fields:y}).then((function(e){console.log(e),N([{name:"",type:"",primary:!1}]),document.getElementById("mainForm").reset()})).catch((function(e){console.log(e)}));case 13:e.next=16;break;case 15:alert("Not logged in");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(p,null,t?l.a.createElement("form",{onSubmit:w,id:"mainForm"},l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("h1",{className:"col-form-label"},"Table Name")),l.a.createElement("div",{className:"col-auto"},l.a.createElement("input",{placeholder:"Enter Table Name",type:"text",className:"form-control",onChange:function(e){return function(e){E(e.target.value)}(e)}}))),y.map((function(e,t){return l.a.createElement("div",{className:"container",key:t},l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col"},l.a.createElement("input",{name:"name",placeholder:"Enter Field Name",value:e.name,onChange:function(e){return k(e,t)}})),l.a.createElement("div",{className:"col"},l.a.createElement("select",{name:"type",value:e.type,onChange:function(e){return k(e,t)}},l.a.createElement("option",{value:""},"Select Type"),l.a.createElement("option",{value:"String"},"String"),l.a.createElement("option",{value:"Number"},"Number"),l.a.createElement("option",{value:"Boolean"},"Boolean"),l.a.createElement("option",{value:"Email"},"Email"),l.a.createElement("option",{value:"DateTime"},"DateTime"))),l.a.createElement("div",{className:"col"},l.a.createElement("label",null,l.a.createElement("div",{className:"col align-items-center"},l.a.createElement("span",null,"Primary Key?"),l.a.createElement(h.a,{name:"primary",value:e.primary,checked:e.primary,onChange:function(e){return function(e,t){console.log(e);for(var a=0;a<y.length;a++)if(e&&y[a].primary)return void alert("Only 1 primary key allowed");var n=Object(m.a)(y);n[t].primary=e,N(n)}(e,t)}})))),l.a.createElement("div",{className:"col"},t?l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return function(e){var t=Object(m.a)(y);t.splice(e,1),N(t)}(t)}},"Remove"):null,l.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return function(){for(var e=0;e<y.length;e++)if(""===y[e].name||""===y[e].type)return void alert("Fill all fields then add new field");N([].concat(Object(m.a)(y),[{name:"",type:"",primary:!1}]))}()}},"Add"))))})),l.a.createElement("div",{className:"col justify-contents-center"},l.a.createElement("button",{type:"submit",className:"btn btn-success"},"Submit"))):l.a.createElement(c.a,{to:"/"}))},y=a(84),N=function(){var e=Object(d.b)(),t=e.isAuthenticated,a=e.user,c=e.loginWithRedirect;console.log("User: ",a);var o=t,m=Object(n.useState)([]),b=Object(s.a)(m,2),E=b[0],v=b[1],h=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("http://localhost:8000/tables/".concat(a.nickname)).then((function(e){return v(e.data)})).catch((function(e){return console.log("Not work",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o&&(h(),o=!1)}),[o]),l.a.createElement(p,null,t?l.a.createElement("div",null,l.a.createElement("p",null,"Hey ",a.nickname,", You're logged in! Tables show here"),l.a.createElement(r.b,{to:"/add"},l.a.createElement("button",{className:"btn btn-primary"},"Add Table")),l.a.createElement("br",null),l.a.createElement("h1",null,E.length),E.length>0?E.map((function(e){return l.a.createElement(y.a,{key:e._id},l.a.createElement(y.a.Body,null,l.a.createElement(r.b,{to:"/view/".concat(e._id)},l.a.createElement(y.a.Title,{className:"mb-2 text-muted"},e.tableName))))})):"No tables yet"):l.a.createElement("div",null,l.a.createElement("p",null,"Please"," ",l.a.createElement(r.b,{to:"/",onClick:c},l.a.createElement("button",{className:"btn btn-primary"},"Login"))," ","to add a table")))},k=a(42),w=function(e){var t,a,r,o,m=e.match.params.id,d=Object(n.useState)({}),b=Object(s.a)(d,2),E=b[0],v=b[1],h=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("http://localhost:8000/table/".concat(m)).then((function(e){return v(e.data)})).catch((function(e){return console.log("Not work",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=[];Object(n.useEffect)((function(){h()}),[]),console.log(null===(t=E.fields)||void 0===t?void 0:t.length);var y=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("http://localhost:8000/delete/".concat(m));case 2:if(t=e.sent,console.log(t.status),200!=t.status){e.next=6;break}return e.abrupt("return",l.a.createElement(c.a,{to:"/"}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(g),e.next=3,f.a.post("http://localhost:8000/addRow/".concat(m),{row:g}).then((function(e){return console.log(e)}),window.location.reload()).catch();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(E.rows),l.a.createElement(p,null,l.a.createElement("h1",null,"TableView"),E?l.a.createElement("div",null,l.a.createElement("p",null,"Table Name: ",E.tableName),l.a.createElement("p",null,"Created by: ",E.userID),l.a.createElement("button",{className:"btn btn-danger",onClick:y},"Delete"),l.a.createElement(k.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,null===(a=E.fields)||void 0===a?void 0:a.map((function(e,t){return l.a.createElement("th",{key:t},e.name)})))),l.a.createElement("tbody",null,null===(r=E.rows)||void 0===r?void 0:r.map((function(e,t){return l.a.createElement("tr",null,e.row.map((function(e,t){return l.a.createElement("td",{key:t},e)})))})),null===(o=E.fields)||void 0===o?void 0:o.map((function(e,t){return l.a.createElement("td",{key:e._id},l.a.createElement("input",{type:e.type,onBlur:function(e){!function(e){console.log(e.target.value),g.push(e.target.value)}(e)}}))}))),l.a.createElement("button",{className:"btn btn-success",onClick:N},"Add"))):l.a.createElement("p",null,"Loading..."))},j=function(){return console.log("Router"),l.a.createElement(r.a,null,l.a.createElement(c.d,null,l.a.createElement(c.b,{path:"/",exact:!0,component:N}),l.a.createElement(c.b,{path:"/add",component:g}),l.a.createElement(c.b,{path:"/view/:id",component:w})))},O=a(43);a.n(O).a.render(l.a.createElement(d.a,{domain:"raunak-auth0.us.auth0.com",clientId:"5XjEZJCieWGwrvAQ0T0UflYJpQ8OlzmQ",redirectUri:window.location.origin},l.a.createElement(j,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e75a2c42.chunk.js.map