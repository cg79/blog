(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{191:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u}),a.d(t,"pageQuery",function(){return p});a(23);var n=a(0),r=a.n(n),l=a(197),o=a.n(l),i=a(234),c=a.n(i),m=a(196),s=a(195),d=function(e){var t=e.list,a=void 0===t?[]:t;return r.a.createElement(n.Fragment,null,"Categories 1:",r.a.createElement("ul",null,a.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(s.a,{to:"/"+e},e.split("/").pop()))})))};function u(e){var t=e.data,a=t.site,n=t.mdx,l=e.pageContext,i=l.next,u=l.prev;return r.a.createElement(m.a,{site:a,frontmatter:n.frontmatter},r.a.createElement("h1",null,n.frontmatter.title),r.a.createElement("h2",null,n.frontmatter.date),r.a.createElement("h2",null,n.frontmatter.baselink),n.frontmatter.banner&&r.a.createElement(o.a,{sizes:n.frontmatter.banner.childImageSharp.sizes,alt:a.siteMetadata.keywords.join(", ")}),r.a.createElement(d,{list:n.frontmatter.categories}),r.a.createElement("hr",null),r.a.createElement(c.a,null,n.code.body),r.a.createElement("div",null,u&&r.a.createElement("span",null,"Previous"," ",r.a.createElement(s.a,{to:u.fields.slug},u.fields.title)),i&&r.a.createElement("span",null,"Next"," ",r.a.createElement(s.a,{to:i.fields.slug},i.fields.title))))}var p="2522984836"},195:function(e,t,a){"use strict";a(16),a(7),a(6),a(1),a(15);var n=a(0),r=a.n(n),l=a(17),o=a.n(l);t.a=function(e){var t=e.children,a=e.to,n=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["children","to"]);return/^\/(?!\/)/.test(a)?r.a.createElement(o.a,Object.assign({to:a},n),t):r.a.createElement("a",Object.assign({href:a},n),t)}},196:function(e,t,a){"use strict";a(12),a(7),a(6),a(1),a(15);var n=a(0),r=a.n(n),l=a(200),o=a.n(l),i=a(65),c=a(194),m=(a(201),a(202),a(203),a(204),a(195)),s=a(205),d=c.b.h1.withConfig({displayName:"Title",componentId:"sc-114b0wi-0"})(["text-align:center;font-size:24px;font-weight:400;line-height:1.1;border-top:1px solid #f3f3f3;margin-top:20px;margin-bottom:20px;padding-top:30px;padding-bottom:10px;"]),u=c.b.h2.withConfig({displayName:"Subtitle",componentId:"tu7p3x-0"})(["text-align:left;font-size:18px;margin-top:20px;margin-bottom:20px;font-weight:900;line-height:1.1;"]),p=c.b.p.withConfig({displayName:"Paragraph",componentId:"eezutt-0"})(["text-align:left;font-size:16px;line-height:1.58;letter-spacing:-0.003em;color:#555555;"]),g={h1:function(e){return r.a.createElement(d,e)},h2:function(e){return r.a.createElement(u,e)},p:function(e){return r.a.createElement(p,e)}},f={Link:m.a,YouTube:s.a};function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){E(e,t,a[t])})}return e}function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function v(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n\n  ","\n\n  pre {\n    background-color: #2f1e2e !important;\n    border-radius: 4px;\n    font-size: 14px;\n  }\n\n  .gatsby-highlight-code-line {\n    background-color: #4f424c;\n    display: block;\n    margin-right: -1em;\n    margin-left: -1em;\n    padding-right: 1em;\n    padding-left: 1em;\n  }\n"]);return v=function(){return e},e}var h=Object(c.a)(v(),function(){return null}),w=[{to:"/",label:"About"},{to:"/blog",label:"Blog"},{to:"/algo",label:"Algorithms"},{to:"/mongo",label:"MongoDB"},{to:"https://roadtoreact.com",label:"Courses"}];t.a=function(e){var t=e.site,a=e.frontmatter,l=void 0===a?{}:a,c=e.children,s=t.siteMetadata,d=s.title,u=s.description,p=s.keywords,E=l.keywords,v=l.description,N=(E||p).join(", "),y=v||u;return r.a.createElement(n.Fragment,null,r.a.createElement(o.a,{title:d,meta:[{name:"description",content:y},{name:"keywords",content:N}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(h,null),r.a.createElement(i.MDXProvider,{components:b({},g,f)},r.a.createElement(n.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"#"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Link")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Algorithms"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"/algo/arrays"},"Arrays"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Stack"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Tree"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"/algo/regex"},"Regex"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link disabled",href:"#"},"Disabled"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("ul",null,w.map(function(e){return r.a.createElement("li",{key:e.label},r.a.createElement(m.a,{to:e.to},e.label))}))),r.a.createElement("div",{className:"col-md-9"},c)))))}}}]);
//# sourceMappingURL=component---src-templates-post-js-f4fa6774d771a34420ba.js.map