(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),r=c(4),l=c.n(r),i=c(2),j=(c(10),c(11),function(e){var t=e.handleSexFilter,c=Object(a.useState)(!1),n=Object(i.a)(c,2),r=n[0],l=n[1],j=Object(a.useState)(!1),u=Object(i.a)(j,2),h=u[0],b=u[1],d=function(e){var t=e.target,c=t.checked,s=t.name;"m"===s?l(c):"f"===s&&b(c)};return Object(a.useEffect)((function(){t(r,h)}),[r,h]),Object(s.jsxs)("div",{className:"checkbox-area",children:[Object(s.jsx)("p",{className:"checkbox-area__title",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043b:"}),Object(s.jsx)("div",{className:"checkbox-area__wrapper",children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"checkbox",checked:r,name:"m",className:"checkbox-area__item",onChange:d}),"\u041c\u0443\u0436\u0441\u043a\u043e\u0439"]})}),Object(s.jsx)("div",{className:"checkbox-area__wrapper",children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"checkbox",checked:h,name:"f",className:"checkbox-area__item",onChange:d}),"\u0416\u0435\u043d\u0441\u043a\u0438\u0439"]})})]})}),u=(c(12),function(e){var t=e.handleFilter,c=e.handleSexFilter,n=Object(a.useState)(""),r=Object(i.a)(n,2),l=r[0],u=r[1],h=Object(a.useState)(""),b=Object(i.a)(h,2),d=b[0],x=b[1],o=Object(a.useState)(""),O=Object(i.a)(o,2),p=O[0],f=O[1];return Object(s.jsxs)("div",{className:"search-fields",children:[Object(s.jsxs)("label",{children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f:",Object(s.jsx)("input",{type:"text",value:l,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",className:"search-fields__input",onChange:function(e){var c=e.target.value;u(c),t(c,"name")}})]}),Object(s.jsxs)("label",{children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e:",Object(s.jsx)("input",{type:"text",value:d,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e",className:"search-fields__input",onChange:function(e){var c=e.target.value;x(c),t(c,"lastname")}})]}),Object(s.jsxs)("label",{children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u0437\u0440\u0430\u0441\u0442:",Object(s.jsx)("input",{type:"text",value:p,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u0437\u0440\u0430\u0441\u0442",className:"search-fields__input",onChange:function(e){var c=Number(e.target.value)||null;f(c),t(c,"age")}})]}),Object(s.jsx)(j,{handleSexFilter:c})]})}),h=(c(13),function(e){var t=e.users;return Object(s.jsx)("ul",{className:"users",children:t.map((function(e){return Object(s.jsxs)("li",{className:"users__item",children:[Object(s.jsx)("p",{className:"users__name",children:"".concat(e.name," ").concat(e.lastname)}),Object(s.jsxs)("p",{className:"users__age",children:[Object(s.jsx)("span",{className:"users__age-heading",children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442:\xa0"}),Object(s.jsx)("span",{children:e.age})]}),Object(s.jsxs)("p",{className:"users__sex",children:[Object(s.jsx)("span",{className:"users__sex-heading",children:"\u041f\u043e\u043b:\xa0"}),Object(s.jsx)("span",{children:"m"===e.sex?"\u043c\u0443\u0436\u0441\u043a\u043e\u0439":"\u0436\u0435\u043d\u0441\u043a\u0438\u0439"})]})]},e.id)}))})}),b=function(){var e=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){fetch("https://venbest-test.herokuapp.com/").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),c.forEach((function(e,t){Object.assign(e,{id:t})})),c}(),t=Object(a.useState)(e),c=Object(i.a)(t,2),n=c[0],r=c[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("div",{className:"App__search-area",children:[Object(s.jsx)("h2",{className:"App__search-heading",children:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"}),Object(s.jsx)(u,{handleFilter:function(t,c){var s=e.filter((function(e){return"string"===typeof e[c]?e[c].includes(t):e[c]===t}));r(s)},handleSexFilter:function(t,c){var s;s=t&&!c?e.filter((function(e){return"m"===e.sex})):!t&&c?e.filter((function(e){return"f"===e.sex})):e,r(s)}})]}),Object(s.jsxs)("div",{className:"App__users-list",children:[Object(s.jsx)("h1",{className:"App__users-heading",children:"\u041d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"}),!e.length&&Object(s.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),n.length?Object(s.jsx)(h,{users:n}):Object(s.jsx)(h,{users:e})]})]})};l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.dbc859b8.chunk.js.map