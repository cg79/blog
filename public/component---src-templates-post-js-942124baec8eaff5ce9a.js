(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{191:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"pageQuery",function(){return f});t(23);var a=t(0),r=t.n(a),l=t(198),i=t.n(l),o=t(242),c=t.n(o),m=t(196),s=t(195),d=function(e){var n=e.list,t=void 0===n?[]:n;return r.a.createElement(a.Fragment,null,"Categories 1:",r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(s.a,{to:"/"+e},e.split("/").pop()))})))};function u(e){var n=e.data,t=n.site,a=n.mdx,l=e.pageContext,o=l.next,u=l.prev;return r.a.createElement(m.a,{site:t,frontmatter:a.frontmatter},r.a.createElement("h1",null,a.frontmatter.title),r.a.createElement("h2",null,a.frontmatter.date),r.a.createElement("h2",null,a.frontmatter.baselink),a.frontmatter.banner&&r.a.createElement(i.a,{sizes:a.frontmatter.banner.childImageSharp.sizes,alt:t.siteMetadata.keywords.join(", ")}),r.a.createElement(d,{list:a.frontmatter.categories}),r.a.createElement("hr",null),r.a.createElement(c.a,null,a.code.body),r.a.createElement("div",null,u&&r.a.createElement("span",null,"Previous"," ",r.a.createElement(s.a,{to:u.fields.slug},u.fields.title)),o&&r.a.createElement("span",null,"Next"," ",r.a.createElement(s.a,{to:o.fields.slug},o.fields.title))))}var f="2522984836"},195:function(e,n,t){"use strict";t(16),t(7),t(6),t(1),t(15);var a=t(0),r=t.n(a),l=t(17),i=t.n(l);n.a=function(e){var n=e.children,t=e.to,a=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["children","to"]);return/^\/(?!\/)/.test(t)?r.a.createElement(i.a,Object.assign({to:t},a),n):r.a.createElement("a",Object.assign({href:t},a),n)}},196:function(e,n,t){"use strict";t(12),t(7),t(6),t(1),t(15);var a=t(0),r=t.n(a),l=t(201),i=t.n(l),o=t(65),c=t(194),m=t(197),s=t(207),d=t(208),u=t(203),f=(t(204),t(205),t(195)),p=t(206),g=c.b.h1.withConfig({displayName:"Title",componentId:"sc-114b0wi-0"})(["text-align:center;font-size:24px;font-weight:400;line-height:1.1;border-top:1px solid #f3f3f3;margin-top:20px;margin-bottom:20px;padding-top:30px;padding-bottom:10px;"]),E=c.b.h2.withConfig({displayName:"Subtitle",componentId:"tu7p3x-0"})(["text-align:left;font-size:18px;margin-top:20px;margin-bottom:20px;font-weight:900;line-height:1.1;"]),h=c.b.p.withConfig({displayName:"Paragraph",componentId:"eezutt-0"})(["text-align:left;font-size:16px;line-height:1.58;letter-spacing:-0.003em;color:#555555;"]),b={h1:function(e){return r.a.createElement(g,e)},h2:function(e){return r.a.createElement(E,e)},p:function(e){return r.a.createElement(h,e)}},v={Link:f.a,YouTube:p.a};function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){w(e,n,t[n])})}return e}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n\n  ","\n\n  pre {\n    background-color: #2f1e2e !important;\n    border-radius: 4px;\n    font-size: 14px;\n  }\n\n  .gatsby-highlight-code-line {\n    background-color: #4f424c;\n    display: block;\n    margin-right: -1em;\n    margin-left: -1em;\n    padding-right: 1em;\n    padding-left: 1em;\n  }\n\n  .navcontainer {\n    border: 5px solid #ffcc5c;\n    display: flex;\n  }\n  \n  .navcontainer > li {\n    flex: 1;\n  }\n\n  .search {  \n    flex: 1;  \n  }\n\n  .navtoggle {\n    display: none;\n  }\n  .navbody .hid {\n    display: none;\n  }\n\n  @media all and (max-width: 800px) {  \n    \n    .navcontainer {  \n      flex-wrap: wrap;  \n      border: 5px solid green;\n    }  \n    .navcontainer > li {  \n      flex-basis: 50%;  \n    }\n  }\n\n  @media all and (max-width: 600px) {  \n\n    .navtoggle {\n    }\n    .navcontainer {  \n      border: 5px solid blue;\n    }  \n    .navcontainer > li {  \n      flex-basis: 100%;  \n    }  \n    .search {  \n      order: 1;  \n    }  \n\n    .navtoggle {\n      align-self: flex-end;\n      display: initial;\n      position: absolute;\n      cursor: pointer;\n    }\n  }\n\n"]);return y=function(){return e},e}m.b.add(s.a,d.b,d.c,d.a);var N=Object(c.a)(y(),function(){return null});n.a=function(e){var n=e.site,t=e.frontmatter,l=void 0===t?{}:t,c=e.children,m=n.siteMetadata,s=m.title,d=m.description,f=m.keywords,p=l.keywords,g=l.description,E=(p||f).join(", "),h=g||d,w=Object(a.useState)({navVis:!1,extraNavcss:"vis"}),y=w[0],k=w[1];return r.a.createElement(a.Fragment,null,r.a.createElement(i.a,{title:s,meta:[{name:"description",content:h},{name:"keywords",content:E}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(N,null),r.a.createElement(o.MDXProvider,{components:x({},b,v)},r.a.createElement(a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("div",{className:"navtoggle"},r.a.createElement(u.a,{icon:["fa","bars"],style:{color:"#000000"},onClick:function(){return e=!y.navVis,void k({navVis:e,extraNavcss:e?"hid":"vis"});var e}})),r.a.createElement("div",{className:"navbody"},r.a.createElement("ul",{className:y.extraNavcss+" navcontainer"},r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/algo"},"Algorithms")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/react"},"React")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/mongo"},"Node & Mongo")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/css"},"Html & css")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/reactnative"},"React native")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/dotnet"},"C#")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/gaming"},"Gaming")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/patterns"},"Patterns")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/security"},"Security")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/devops"},"DevOps")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/about"},"About"))))),r.a.createElement("div",{className:"col-md-9"},c))))}}}]);
//# sourceMappingURL=component---src-templates-post-js-942124baec8eaff5ce9a.js.map