(this["webpackJsonpe-shop"]=this["webpackJsonpe-shop"]||[]).push([[0],{45:function(t,e,c){},46:function(t,e,c){},71:function(t,e,c){"use strict";c.r(e),c.d(e,"store",(function(){return q}));var n=c(0),a=c.n(n),r=c(21),i=c.n(r),s=(c(45),c(46),c(13)),o=c(4),l=c(12),d=c(8),j=function(t){return{type:"ADD_TO_CART",payload:parseInt(t)}},u=function(t){return{type:"SET_STORE",payload:t}},b=c(23);var O=function(t,e){var c=Math.floor(t);return e?c:(t-c).toFixed(2).slice(1)},m=c(38);var h=function(){var t=document.querySelector(".cart-menu");t.classList.remove("hidden"),window.addEventListener("click",(function(e){var c=t.querySelectorAll("*");if(!e.target.classList.contains("add-to-cart")&&e.target!==t&&!e.target.classList.contains("remove-btn")&&"path"!==e.target.nodeName){var n,a=Object(m.a)(c);try{for(a.s();!(n=a.n()).done;){if(n.value===e.target)return}}catch(r){a.e(r)}finally{a.f()}t.classList.add("hidden")}}))},p=c(1);var f=function(t){var e=t.id,c=t.price,n=t.title,a=t.img,r=Object(d.b)();return Object(p.jsxs)("div",{className:"item-card",children:[Object(p.jsxs)(s.b,{to:"/products/".concat(e),children:[Object(p.jsx)("img",{src:a,alt:"itemIMG"}),Object(p.jsx)(b.a,{text:n,maxLine:"2",ellipsis:"...",trimRight:!0,basedOn:"words",className:"elipsis"})]}),Object(p.jsxs)("h5",{className:"price",children:[O(c,!0),Object(p.jsx)("u",{children:O(c,!1)})]}),Object(p.jsx)("button",{className:"btn add-to-cart",onClick:function(t){t.preventDefault(),r(j(e)),h()},children:"Add to cart"})]})};var x=function(t){var e=t.items,c=t.sort;return"asc"===c&&e.sort((function(t,e){return t.price-e.price})),"desc"===c&&e.sort((function(t,e){return e.price-t.price})),Object(p.jsx)("div",{className:"items-container",children:e.map((function(t){return Object(p.jsx)(f,{id:t.id,price:t.price,title:t.title,description:t.description,img:t.image},t.id)}))})},v=c(17),g=c(18);var N=function(t){var e=t.id,c=t.price,n=t.title,a=(t.description,t.img),r=t.amount,i=Object(d.b)();return Object(p.jsxs)("div",{className:"cart-block",children:[Object(p.jsx)("button",{className:"remove-btn",onClick:function(){return i(function(t){return{type:"REMOVE_FROM_CART",payload:t}}(e))},children:Object(p.jsx)(v.a,{icon:g.b,className:"x-icon"})}),Object(p.jsx)("img",{src:a,alt:"item-image"}),Object(p.jsxs)("div",{className:"cart-block-top",children:[Object(p.jsx)(b.a,{text:n,maxLine:"1",ellipsis:"...",trimRight:!0,basedOn:"words",className:"cart-elipsis"}),Object(p.jsxs)("h6",{className:"price",children:["$ ",O(c,!0),Object(p.jsx)("u",{children:O(c,!1)})]})]}),Object(p.jsxs)("h6",{className:"amount",children:["Quantity: ",r]}),Object(p.jsxs)("div",{className:"amount-control",children:[Object(p.jsx)("button",{className:r>1?"desc-btn":"desc-btn disabled",onClick:function(){return i(function(t){return{type:"DECREMENT",payload:t}}(e))},children:"-"}),Object(p.jsx)("button",{className:"inc-btn",onClick:function(){return i(j(e))},children:"+"})]})]})};var y=function(t){var e=t.cart;return Object(p.jsx)("div",{className:"cart-list",children:e.map((function(t){return Object(p.jsx)(N,{id:t.id,price:t.price,title:t.title,description:t.description,img:t.image,amount:t.amount},t.id)}))})};var k=function(){var t=Object(d.c)((function(t){return t.cartReducer.cart})),e=Object(d.c)((function(t){return t.cartReducer.total})),c=Object(n.useState)(!1),a=Object(l.a)(c,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){r?document.querySelector(".cart-menu").classList.remove("hidden"):document.querySelector(".cart-menu").classList.add("hidden")}),[r]),Object(p.jsxs)("div",{className:"cart-menu hidden",children:[Object(p.jsxs)("div",{className:"cart-btn",onClick:function(){return i(!r)},children:[Object(p.jsx)(v.a,{icon:g.b,className:"x-icon"}),Object(p.jsx)(v.a,{icon:g.a,className:"cart-icon"})]}),t.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{cart:t}),Object(p.jsxs)("div",{className:"cart-bottom",children:[Object(p.jsxs)("div",{className:"totals",children:[Object(p.jsx)("h4",{children:"Subtotal"}),Object(p.jsxs)("h3",{children:["$ ",e.toFixed(2)]})]}),Object(p.jsx)(s.b,{to:"#",className:"checkout",children:"Checkout"})]})]}):Object(p.jsx)("h2",{className:"empty-cart",children:"Your cart is empty"})]})},C=c(39),E=c.n(C),S=function(t){var e=Object(n.useState)(null),c=Object(l.a)(e,2),a=c[0],r=c[1],i=Object(n.useState)(!0),s=Object(l.a)(i,2),o=s[0],d=s[1],j=Object(n.useState)(!1),u=Object(l.a)(j,2),b=u[0],O=u[1];return Object(n.useEffect)((function(){t&&E.a.get(t).then((function(t){r(t.data),d(!1),O(!1)})).catch((function(t){console.error(t),d(!1),O(!0)}))}),[t]),{data:a,isFetching:o,error:b}};var R=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),c=e[0],a=e[1],r=S("https://fakestoreapi.com/products?limit=15"),i=r.data,s=r.isFetching,o=r.error,j=Object(d.b)();return Object(n.useEffect)((function(){null!==i&&j(u(i))}),[i]),Object(p.jsxs)("div",{className:"store-page main-block",children:[Object(p.jsx)(k,{}),o&&Object(p.jsx)("h2",{className:"error-msg",children:"Could not load products"}),s?Object(p.jsx)("h2",{className:"loading-msg",children:"Loading..."}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"page-top",children:[Object(p.jsxs)("h6",{children:[i.length," products found"]}),Object(p.jsxs)("div",{className:"sort",children:[Object(p.jsx)("label",{htmlFor:"sort",children:"Sort by price:"}),Object(p.jsxs)("select",{defaultValue:"select",name:"sort",id:"cars",onChange:function(t){return a(t.target.value)},children:[Object(p.jsx)("option",{disabled:!0,value:"select",children:"Select"}),Object(p.jsx)("option",{value:"asc",children:"Ascending"}),Object(p.jsx)("option",{value:"desc",children:"Descending"})]})]})]}),Object(p.jsx)(x,{items:i,sort:c})]})]})};var T=function(){var t=Object(o.g)().id,e=Object(o.f)(),c=S("https://fakestoreapi.com/products?limit=15"),a=c.data,r=c.isFetching,i=c.error,s=Object(d.b)(),b=Object(n.useState)(null),O=Object(l.a)(b,2),m=O[0],f=O[1];return Object(n.useEffect)((function(){null!==a&&(s(u(a)),f(a.find((function(e){return e.id===parseInt(t)}))))}),[a]),Object(p.jsxs)("div",{className:"main-block",children:[Object(p.jsx)(k,{}),i&&Object(p.jsx)("h2",{children:"Could not load the item"}),r||null===m?Object(p.jsx)("h2",{className:"loading-msg",children:"Loading..."}):Object(p.jsxs)("div",{className:"item-block ",children:[Object(p.jsx)("img",{src:m.image,alt:"itemIMG"}),Object(p.jsxs)("div",{className:"item-right",children:[Object(p.jsx)("h1",{children:m.title}),Object(p.jsxs)("h3",{className:"price",children:["$ ",m.price.toFixed(2)]}),Object(p.jsx)("button",{className:"btn add-to-cart",onClick:function(e){e.preventDefault(),s(j(t)),h()},children:"Add to cart"}),Object(p.jsx)("h3",{className:"description",children:"Product description"}),Object(p.jsx)("p",{className:"description",children:m.description}),Object(p.jsx)("button",{className:"btn back",onClick:function(){return e.goBack()},children:"Back"})]})]})]})};var F=function(){return Object(p.jsx)("h1",{className:"not-found",children:"Page not found"})};var L=function(){return Object(p.jsx)(s.a,{basename:"/e-shop",children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",component:R}),Object(p.jsx)(o.a,{exact:!0,path:"/products/:id",component:T}),Object(p.jsx)(o.a,{path:"*",component:F})]})})},A=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),r(t),i(t)}))},M=c(24),_=c(40),D=c(5),w={store:[],cart:[],total:0},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;if("SET_STORE"===e.type)return t.store.length>0?t:Object(D.a)(Object(D.a)({},t),{},{store:e.payload});if("ADD_TO_CART"===e.type){var c=t.cart.find((function(t){return e.payload===t.id}));if(!c){var n=t.store.find((function(t){return e.payload===t.id}));return n.amount=1,Object(D.a)(Object(D.a)({},t),{},{cart:[].concat(Object(_.a)(t.cart),[n]),total:t.total+n.price})}return Object(D.a)(Object(D.a)({},t),{},{cart:t.cart.map((function(t){return t.id===e.payload?Object(D.a)(Object(D.a)({},t),{},{amount:++t.amount}):t})),total:t.total+c.price})}if("DECREMENT"===e.type){var a=t.cart.find((function(t){return e.payload===t.id}));return a.amount>=2?Object(D.a)(Object(D.a)({},t),{},{cart:t.cart.map((function(t){return t.id===e.payload?Object(D.a)(Object(D.a)({},t),{},{amount:--t.amount}):t})),total:t.total-a.price}):t}if("REMOVE_FROM_CART"===e.type){var r=t.cart.find((function(t){return e.payload===t.id}));return Object(D.a)(Object(D.a)({},t),{},{cart:t.cart.filter((function(t){return t.id!==e.payload})),total:t.total-r.price*r.amount})}return"EMPTY_CART"===e.type?Object(D.a)(Object(D.a)({},t),{},{cart:[],total:0}):t},P=Object(M.a)({cartReducer:I}),q=Object(M.b)(P);i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(d.a,{store:q,children:Object(p.jsx)(L,{})})}),document.getElementById("root")),A()}},[[71,1,2]]]);
//# sourceMappingURL=main.ed7c46af.chunk.js.map