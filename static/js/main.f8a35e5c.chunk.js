(this.webpackJsonpmy_todo_list=this.webpackJsonpmy_todo_list||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(8),o=n.n(a),s=(n(14),n(15),n(2)),r=n(9),l=n(7),u=n(5),j=n.n(u),d=n(0);function b(t){var e=Object(s.a)({},t),n=e.datalist,c=(e.updateData,e.handleDelete),i=e.handleToggle;return Object(d.jsx)(d.Fragment,{children:n.map((function(t){return Object(d.jsxs)("div",{className:j.a.list_component,children:[Object(d.jsx)("div",{style:{textDecoration:t.status&&"line-through"},children:t.title}),Object(d.jsx)("div",{}),Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10%"},children:[Object(d.jsx)("button",{onClick:function(){return c(t.id)},children:"X"}),Object(d.jsx)("button",{onClick:function(){return i(t.id)},children:t.status?Object(d.jsx)("img",{className:j.a.toggle_image,src:"https://image.flaticon.com/icons/png/128/640/640120.png"}):Object(d.jsx)("img",{className:j.a.toggle_image,src:"https://image.flaticon.com/icons/png/128/1932/1932860.png"})})]})]})}))})}var g=n(20);n(17);function h(){var t=i.a.useState(""),e=Object(l.a)(t,2),n=e[0],c=e[1],a=i.a.useState([]),o=Object(l.a)(a,2),u=o[0],j=o[1],h=function(t){return j(t)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{style:{color:"black",textShadow:"2px 2px magenta"},children:"My Todo List"}),Object(d.jsxs)("h4",{style:{color:"Blue"},children:["Developed & maintained by",Object(d.jsx)("span",{style:{color:"red",marginLeft:"1%"},children:"Suman Chakraborty"})]}),Object(d.jsxs)("form",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",value:n,onChange:function(t){return function(t){c(t.target.value)}(t)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:n.length>1?function(t){return function(t){t.preventDefault();var e={title:n,status:!1,id:Object(g.a)()},c=[].concat(Object(r.a)(u),[e]);h(c)}(t)}:function(t){return function(t){alert("Please Enter Something"),t.preventDefault()}(t)},children:"+"})})]}),Object(d.jsx)(b,{datalist:u,updateData:h,handleDelete:function(t){var e=u.filter((function(e){return e.id!=t}));h(e)},handleToggle:function(t){var e=u.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{status:!e.status}):Object(s.a)({},e)}));h(e)}})]})}var f=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(h,{})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),p()},5:function(t,e,n){t.exports={list_component:"TodoList_list_component__2CUpt",toggle_image:"TodoList_toggle_image__3X2ug"}}},[[18,1,2]]]);
//# sourceMappingURL=main.f8a35e5c.chunk.js.map