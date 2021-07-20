(this["webpackJsonpe-shop"]=this["webpackJsonpe-shop"]||[]).push([[0],{44:function(t,e,c){},45:function(t,e,c){},70:function(t,e,c){"use strict";c.r(e),c.d(e,"store",(function(){return w}));var n=c(0),a=c.n(n),r=c(20),i=c.n(r),s=(c(44),c(45),c(13)),o=c(4),l=c(12),d=c(8),j=function(t){return{type:"ADD_TO_CART",payload:parseInt(t)}},u=function(t){return{type:"SET_STORE",payload:t}},b=c(23);var O=function(t,e){var c=Math.floor(t);return e?c:(t-c).toFixed(2).slice(1)};var m=function(){var t=document.querySelector(".cart-menu");t.classList.remove("hidden");var e=null;function c(){e=setTimeout((function(){t.classList.add("hidden")}),3e3)}c(),t.addEventListener("mouseenter",(function(){clearTimeout(e)})),t.addEventListener("mouseleave",(function(){c()}))},h=c(1);var p=function(t){var e=t.id,c=t.price,n=t.title,a=t.img,r=Object(d.b)();return Object(h.jsxs)("div",{className:"item-card",children:[Object(h.jsxs)(s.b,{to:"/products/".concat(e),children:[Object(h.jsx)("img",{src:a,alt:"itemIMG"}),Object(h.jsx)(b.a,{text:n,maxLine:"2",ellipsis:"...",trimRight:!0,basedOn:"words",className:"elipsis"})]}),Object(h.jsxs)("h5",{className:"price",children:[O(c,!0),Object(h.jsx)("u",{children:O(c,!1)})]}),Object(h.jsx)("button",{className:"btn",onClick:function(t){t.preventDefault(),r(j(e)),m()},children:"Add to cart"})]})};var f=function(t){var e=t.items,c=t.sort;return"asc"===c&&e.sort((function(t,e){return t.price-e.price})),"desc"===c&&e.sort((function(t,e){return e.price-t.price})),Object(h.jsx)("div",{className:"items-container",children:e.map((function(t){return Object(h.jsx)(p,{id:t.id,price:t.price,title:t.title,description:t.description,img:t.image},t.id)}))})},x=c(16),v=c(17);var g=function(t){var e=t.id,c=t.price,n=t.title,a=(t.description,t.img),r=t.amount,i=Object(d.b)();return Object(h.jsxs)("div",{className:"cart-block",children:[Object(h.jsx)("button",{className:"remove-btn",onClick:function(){return i(function(t){return{type:"REMOVE_FROM_CART",payload:t}}(e))},children:Object(h.jsx)(x.a,{icon:v.b,className:"x-icon"})}),Object(h.jsx)("img",{src:a,alt:"item-image"}),Object(h.jsxs)("div",{className:"cart-block-top",children:[Object(h.jsx)(b.a,{text:n,maxLine:"1",ellipsis:"...",trimRight:!0,basedOn:"words",className:"cart-elipsis"}),Object(h.jsxs)("h6",{className:"price",children:["$ ",O(c,!0),Object(h.jsx)("u",{children:O(c,!1)})]})]}),Object(h.jsxs)("h6",{className:"amount",children:["Quantity: ",r]}),Object(h.jsxs)("div",{className:"amount-control",children:[Object(h.jsx)("button",{className:r>1?"desc-btn":"desc-btn disabled",onClick:function(t){return i(function(t){return{type:"DECREMENT",payload:t}}(e,t.target))},children:"-"}),Object(h.jsx)("button",{className:"inc-btn",onClick:function(t){return i(j(e,t.target))},children:"+"})]})]})};var N=function(t){var e=t.cart;return Object(h.jsx)("div",{className:"cart-list",children:e.map((function(t){return Object(h.jsx)(g,{id:t.id,price:t.price,title:t.title,description:t.description,img:t.image,amount:t.amount},t.id)}))})};var y=function(){var t=Object(d.c)((function(t){return t.cartReducer.cart})),e=Object(d.c)((function(t){return t.cartReducer.total})),c=Object(n.useState)(!1),a=Object(l.a)(c,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){r?document.querySelector(".cart-menu").classList.remove("hidden"):document.querySelector(".cart-menu").classList.add("hidden")}),[r]),Object(h.jsxs)("div",{className:"cart-menu hidden",children:[Object(h.jsxs)("div",{className:"cart-btn",onClick:function(){return i(!r)},children:[Object(h.jsx)(x.a,{icon:v.b,className:"x-icon"}),Object(h.jsx)(x.a,{icon:v.a,className:"cart-icon"})]}),t.length>0?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(N,{cart:t}),Object(h.jsxs)("div",{className:"cart-bottom",children:[Object(h.jsxs)("div",{className:"totals",children:[Object(h.jsx)("h4",{children:"Subtotal"}),Object(h.jsxs)("h3",{children:["$ ",e.toFixed(2)]})]}),Object(h.jsx)(s.b,{to:"",className:"checkout",children:"Checkout"})]})]}):Object(h.jsx)("h2",{className:"empty-cart",children:"Your cart is empty"})]})},E=c(38),k=c.n(E),C=function(t){var e=Object(n.useState)(null),c=Object(l.a)(e,2),a=c[0],r=c[1],i=Object(n.useState)(!0),s=Object(l.a)(i,2),o=s[0],d=s[1],j=Object(n.useState)(!1),u=Object(l.a)(j,2),b=u[0],O=u[1];return Object(n.useEffect)((function(){t&&k.a.get(t).then((function(t){r(t.data),d(!1),O(!1)})).catch((function(t){console.error(t),d(!1),O(!0)}))}),[t]),{data:a,isFetching:o,error:b}};var R=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),c=e[0],a=e[1],r=C("https://fakestoreapi.com/products?limit=15"),i=r.data,s=r.isFetching,o=r.error,j=Object(d.b)();return Object(n.useEffect)((function(){null!==i&&j(u(i))}),[i]),Object(h.jsxs)("div",{className:"store-page main-block",children:[Object(h.jsx)(y,{}),o&&Object(h.jsx)("h2",{className:"error-msg",children:"Could not load products"}),s?Object(h.jsx)("h2",{className:"loading-msg",children:"Loading..."}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"page-top",children:[Object(h.jsxs)("h6",{children:[i.length," products found"]}),Object(h.jsxs)("div",{className:"sort",children:[Object(h.jsx)("label",{htmlFor:"sort",children:"Sort by price:"}),Object(h.jsxs)("select",{defaultValue:"select",name:"sort",id:"cars",onChange:function(t){return a(t.target.value)},children:[Object(h.jsx)("option",{disabled:!0,value:"select",children:"Select"}),Object(h.jsx)("option",{value:"asc",children:"Ascending"}),Object(h.jsx)("option",{value:"desc",children:"Descending"})]})]})]}),Object(h.jsx)(f,{items:i,sort:c})]})]})};var S=function(){var t=Object(o.g)().id,e=Object(o.f)(),c=C("https://fakestoreapi.com/products?limit=15"),a=c.data,r=c.isFetching,i=c.error,s=Object(d.b)(),b=Object(n.useState)(null),O=Object(l.a)(b,2),p=O[0],f=O[1];return Object(n.useEffect)((function(){null!==a&&(s(u(a)),f(a.find((function(e){return e.id===parseInt(t)}))))}),[a]),Object(h.jsxs)("div",{className:"main-block",children:[Object(h.jsx)(y,{}),i&&Object(h.jsx)("h2",{children:"Could not load the item"}),r||null===p?Object(h.jsx)("h2",{className:"loading-msg",children:"Loading..."}):Object(h.jsxs)("div",{className:"item-block ",children:[Object(h.jsx)("img",{src:p.image,alt:"itemIMG"}),Object(h.jsxs)("div",{className:"item-right",children:[Object(h.jsx)("h1",{children:p.title}),Object(h.jsxs)("h3",{className:"price",children:["$ ",p.price.toFixed(2)]}),Object(h.jsx)("button",{className:"btn",onClick:function(e){e.preventDefault(),s(j(t)),m()},children:"Add to cart"}),Object(h.jsx)("h3",{className:"description",children:"Product description"}),Object(h.jsx)("p",{className:"description",children:p.description}),Object(h.jsx)("button",{className:"btn back",onClick:function(){return e.goBack()},children:"Back"})]})]})]})};var T=function(){return Object(h.jsx)("h1",{className:"not-found",children:"Page not found"})};var F=function(){return Object(h.jsx)(s.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:R}),Object(h.jsx)(o.a,{exact:!0,path:"/products/:id",component:S}),Object(h.jsx)(o.a,{path:"*",component:T})]})})},L=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),r(t),i(t)}))},M=c(24),_=c(39),A=c(5),D={store:[],cart:[],total:0},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;if("SET_STORE"===e.type)return t.store.length>0?t:Object(A.a)(Object(A.a)({},t),{},{store:e.payload});if("ADD_TO_CART"===e.type){console.log(e.payload),console.log(t.store);var c=t.cart.find((function(t){return e.payload===t.id}));if(!c){var n=t.store.find((function(t){return e.payload===t.id}));return n.amount=1,Object(A.a)(Object(A.a)({},t),{},{cart:[].concat(Object(_.a)(t.cart),[n]),total:t.total+n.price})}return Object(A.a)(Object(A.a)({},t),{},{cart:t.cart.map((function(t){return t.id===e.payload?Object(A.a)(Object(A.a)({},t),{},{amount:++t.amount}):t})),total:t.total+c.price})}if("DECREMENT"===e.type){var a=t.cart.find((function(t){return e.payload===t.id}));return a.amount>=2?Object(A.a)(Object(A.a)({},t),{},{cart:t.cart.map((function(t){return t.id===e.payload?Object(A.a)(Object(A.a)({},t),{},{amount:--t.amount}):t})),total:t.total-a.price}):t}if("REMOVE_FROM_CART"===e.type){var r=t.cart.find((function(t){return e.payload===t.id}));return Object(A.a)(Object(A.a)({},t),{},{cart:t.cart.filter((function(t){return t.id!==e.payload})),total:t.total-r.price*r.amount})}return"EMPTY_CART"===e.type?Object(A.a)(Object(A.a)({},t),{},{cart:[],total:0}):t},P=Object(M.a)({cartReducer:I}),w=Object(M.b)(P);i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(d.a,{store:w,children:Object(h.jsx)(F,{})})}),document.getElementById("root")),L()}},[[70,1,2]]]);
//# sourceMappingURL=main.6fa93808.chunk.js.map