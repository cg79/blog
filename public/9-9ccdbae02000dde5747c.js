(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{197:function(e,t,r){"use strict";r(7),r(6),r(1),r(41),r(135),r(198);var a=r(19);t.__esModule=!0,t.default=void 0;var n,i=a(r(64)),o=a(r(66)),s=a(r(133)),l=a(r(134)),c=a(r(0)),u=a(r(4)),d=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,r=e.fixed;return(t&&t[0]||r&&r[0]).src},p=Object.create({}),g=function(e){var t=d(e),r=f(t);return p[r]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,b=m&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map(function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),c.default.createElement("source",{media:n,srcSet:r,sizes:i}))})}function S(e){var t=[],r=[];return e.forEach(function(e){return(e.media?t:r).push(e)}),t.concat(r)}function w(e){return e.map(function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})})}function E(e){return e.map(function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})})}function O(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),n);return r&&(r.observe(e),y.set(e,t)),function(){r.unobserve(e),y.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)}).join("")+"<img "+c+o+s+r+a+t+i+n+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,n=e.spreadProps,i=c.default.createElement(V,(0,l.default)({src:t},n));return r.length>1?c.default.createElement("picture",null,a(r),i):i},V=c.default.forwardRef(function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:r,srcSet:a,src:n},p,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});V.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var j=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=m&&g(t),r.addNoScript=!(t.critical&&!t.fadeIn),r.useIOSupport=!h&&b&&!t.critical&&!r.seenBefore;var a=t.critical||m&&(h||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)((0,o.default)(r))),r.handleRef=r.handleRef.bind((0,o.default)((0,o.default)(r))),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=f(t),p[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,O=e.loading,L=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,l.default)({opacity:j?1:0,transition:z?"opacity "+b+"ms":"none"},s),x="boolean"==typeof m?"lightgray":m,k={transitionDelay:b+"ms"},C=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&k,s,f),F={title:t,alt:this.state.isVisible?"":r,style:C,className:p};if(g){var T=g,N=T[0];return c.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),x&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&k)}),N.base64&&c.default.createElement(I,{src:N.base64,spreadProps:F,imageVariants:T,generateSources:E}),N.tracedSVG&&c.default.createElement(I,{src:N.tracedSVG,spreadProps:F,imageVariants:T,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,v(T),c.default.createElement(V,{alt:r,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:O,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:r,title:t,loading:O},N,{imageVariants:T}))}}))}if(h){var M=h,_=M[0],q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},i);return"inherit"===i.display&&delete q.display,c.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(_.srcSet)},x&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:x,width:_.width,opacity:this.state.imgLoaded?0:1,height:_.height},z&&k)}),_.base64&&c.default.createElement(I,{src:_.base64,spreadProps:F,imageVariants:M,generateSources:E}),_.tracedSVG&&c.default.createElement(I,{src:_.tracedSVG,spreadProps:F,imageVariants:M,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,v(M),c.default.createElement(V,{alt:r,title:t,width:_.width,height:_.height,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:O,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:r,title:t,loading:O},_,{imageVariants:M}))}}))}return null},t}(c.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),P=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});j.propTypes={resolutions:z,sizes:P,fixed:u.default.oneOfType([z,u.default.arrayOf(z)]),fluid:u.default.oneOfType([P,u.default.arrayOf(P)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var x=j;t.default=x},198:function(e,t,r){"use strict";r(199)("fixed",function(e){return function(){return e(this,"tt","","")}})},199:function(e,t,r){var a=r(8),n=r(13),i=r(40),o=/"/g,s=function(e,t,r,a){var n=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),a(a.P+a.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",r)}},207:function(e,t,r){var a=r(8),n=r(67),i=r(39),o=r(9),s=r(10),l=r(13),c=r(234),u=(r(5).Reflect||{}).construct,d=l(function(){function e(){}return!(u(function(){},[],e)instanceof e)}),f=!l(function(){u(function(){})});a(a.S+a.F*(d||f),"Reflect",{construct:function(e,t){i(e),o(t);var r=arguments.length<3?e:i(arguments[2]);if(f&&!d)return u(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var a=[null];return a.push.apply(a,t),new(c.apply(e,a))}var l=r.prototype,p=n(s(l)?l:Object.prototype),g=Function.apply.call(e,p,t);return s(g)?g:p}})},233:function(e,t,r){function a(e,t,r){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return r&&n(i,r.prototype),i}).apply(null,arguments)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){o(e,t,r[t])})}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(12),r(7),r(6),r(15),r(131),r(93),r(1),r(207),r(93),r(207),r(131),r(12),r(7),r(6),r(1),r(15);var s=r(0),l=r(65),c=l.useMDXComponents,u=l.mdx,d=r(114).useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,n=e.children,o=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["scope","components","children"]),l=c(r),f=d(t),p=s.useMemo(function(){if(!n)return null;var e=i({React:s,mdx:u},f),t=Object.keys(e),r=t.map(function(t){return e[t]});return a(Function,["_fn"].concat(t,[""+n])).apply(void 0,[{}].concat(r))},[n,t]);return s.createElement(p,i({components:l},o))}},234:function(e,t,r){"use strict";var a=r(39),n=r(10),i=r(136),o=[].slice,s={};e.exports=Function.bind||function(e){var t=a(this),r=o.call(arguments,1),l=function(){var a=r.concat(o.call(arguments));return this instanceof l?function(e,t,r){if(!(t in s)){for(var a=[],n=0;n<t;n++)a[n]="a["+n+"]";s[t]=Function("F,a","return new F("+a.join(",")+")")}return s[t](e,r)}(t,a.length,a):i(t,a,e)};return n(t.prototype)&&(l.prototype=t.prototype),l}}}]);
//# sourceMappingURL=9-9ccdbae02000dde5747c.js.map