(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{193:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return i}),a.d(n,"pageQuery",function(){return o});var t=a(0),r=a.n(t),l=a(196);function i(e){var n=e.data.site;return r.a.createElement(l.a,{site:n},"Landing Page")}var o="1256710295"},195:function(e,n,a){"use strict";a(16),a(7),a(6),a(1),a(15);var t=a(0),r=a.n(t),l=a(17),i=a.n(l);n.a=function(e){var n=e.children,a=e.to,t=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["children","to"]);return/^\/(?!\/)/.test(a)?r.a.createElement(i.a,Object.assign({to:a},t),n):r.a.createElement("a",Object.assign({href:a},t),n)}},196:function(e,n,a){"use strict";a(12),a(7),a(6),a(1),a(15);var t=a(0),r=a.n(t),l=a(201),i=a.n(l),o=a(65),c=a(194),m=a(197),s=a(207),d=a(208),u=a(203),p=(a(204),a(205),a(195)),f=a(206),g=c.b.h1.withConfig({displayName:"Title",componentId:"sc-114b0wi-0"})(["text-align:center;font-size:24px;font-weight:400;line-height:1.1;border-top:1px solid #f3f3f3;margin-top:20px;margin-bottom:20px;padding-top:30px;padding-bottom:10px;"]),h=c.b.h2.withConfig({displayName:"Subtitle",componentId:"tu7p3x-0"})(["text-align:left;font-size:18px;margin-top:20px;margin-bottom:20px;font-weight:900;line-height:1.1;"]),E=c.b.p.withConfig({displayName:"Paragraph",componentId:"eezutt-0"})(["text-align:left;font-size:16px;line-height:1.58;letter-spacing:-0.003em;color:#555555;"]),b={h1:function(e){return r.a.createElement(g,e)},h2:function(e){return r.a.createElement(h,e)},p:function(e){return r.a.createElement(E,e)}},v={Link:p.a,YouTube:f.a};function w(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(n){x(e,n,a[n])})}return e}function x(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function N(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n\n  ","\n\n  pre {\n    background-color: #2f1e2e !important;\n    border-radius: 4px;\n    font-size: 14px;\n  }\n\n  .gatsby-highlight-code-line {\n    background-color: #4f424c;\n    display: block;\n    margin-right: -1em;\n    margin-left: -1em;\n    padding-right: 1em;\n    padding-left: 1em;\n  }\n\n  .navcontainer {\n    border: 5px solid #ffcc5c;\n    display: flex;\n  }\n  \n  .navcontainer > li {\n    flex: 1;\n  }\n\n  .search {  \n    flex: 1;  \n  }\n\n  .navtoggle {\n    display: none;\n  }\n  .navbody .hid {\n    display: none;\n  }\n\n  @media all and (max-width: 800px) {  \n    \n    .navcontainer {  \n      flex-wrap: wrap;  \n      border: 5px solid green;\n    }  \n    .navcontainer > li {  \n      flex-basis: 50%;  \n    }\n  }\n\n  @media all and (max-width: 600px) {  \n\n    .navtoggle {\n    }\n    .navcontainer {  \n      border: 5px solid blue;\n    }  \n    .navcontainer > li {  \n      flex-basis: 100%;  \n    }  \n    .search {  \n      order: 1;  \n    }  \n\n    .navtoggle {\n      align-self: flex-end;\n      display: initial;\n      position: absolute;\n      cursor: pointer;\n    }\n  }\n\n"]);return N=function(){return e},e}m.b.add(s.a,d.b,d.c,d.a);var y=Object(c.a)(N(),function(){return null});n.a=function(e){var n=e.site,a=e.frontmatter,l=void 0===a?{}:a,c=e.children,m=n.siteMetadata,s=m.title,d=m.description,p=m.keywords,f=l.keywords,g=l.description,h=(f||p).join(", "),E=g||d,x=Object(t.useState)({navVis:!1,extraNavcss:"vis"}),N=x[0],O=x[1];return r.a.createElement(t.Fragment,null,r.a.createElement(i.a,{title:s,meta:[{name:"description",content:E},{name:"keywords",content:h}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(y,null),r.a.createElement(o.MDXProvider,{components:w({},b,v)},r.a.createElement(t.Fragment,null,r.a.createElement("nav",null,r.a.createElement("div",{className:"navtoggle"},r.a.createElement(u.a,{icon:["fa","bars"],style:{color:"#000000"},onClick:function(){return e=!N.navVis,void O({navVis:e,extraNavcss:e?"hid":"vis"});var e}})),r.a.createElement("div",{className:"navbody"},r.a.createElement("ul",{className:N.extraNavcss+" navcontainer"},r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/algo"},"Algorithms")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/react"},"React")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/mongo"},"Node & Mongo")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/css"},"Html & css")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/angular"},"Angular")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/git"},"Git")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/reactnative"},"React native")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/javascript"},"Javascript")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/dotnet"},"C#")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/php"},"Php")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/kotlin"},"Kotlin")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/golang"},"Golang")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/testing"},"Testing")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/python"},"Python")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/gaming"},"Gaming")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/patterns"},"Patterns")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/security"},"Security")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/devops"},"DevOps")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/about"},"About"))))),r.a.createElement("div",{className:"col-md-9"},c))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-8d5a198c9f8559e5b2a2.js.map