(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{901:function(e){const n=Math.asin,t=Math.cos,r=Math.sin,o=Math.sqrt,a=Math.PI;function u(e){return e*a/180}function i(e){return function(e){return e*e}(r(e/2))}e.exports=function(e,r){const a=u(Array.isArray(e)?e[1]:e.latitude||e.lat),l=u(Array.isArray(r)?r[1]:r.latitude||r.lat),c=u(Array.isArray(e)?e[0]:e.longitude||e.lng||e.lon),f=u(Array.isArray(r)?r[0]:r.longitude||r.lng||r.lon),s=i(l-a)+t(a)*t(l)*i(f-c);return 12756274*n(o(s))}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(30)}])},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},u=t(6273),i=t(387),l=t(7190);var c={};function f(e,n,t,r){if(e&&u.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=i.useRouter(),s=a.default.useMemo((function(){var n=r(u.resolveHref(o,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?u.resolveHref(o,e.as):a||t}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,g=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var w=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,b=r(l.useIntersection({rootMargin:"200px"}),2),_=b[0],x=b[1],E=a.default.useCallback((function(e){_(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,_]);a.default.useEffect((function(){var e=x&&t&&u.isLocalURL(d),n="undefined"!==typeof m?m:o&&o.locale,r=c[d+"%"+p+(n?"%"+n:"")];e&&!r&&f(o,d,p,{locale:n})}),[p,d,x,m,t,o]);var M={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:i}))}(e,o,d,p,h,y,g,m)},onMouseEnter:function(e){u.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof m?m:o&&o.locale,A=o&&o.isLocaleDomain&&u.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);M.href=A||u.addBasePath(u.addLocale(p,k,o&&o.defaultLocale))}return a.default.cloneElement(n,M)};n.default=s},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,l=o.useRef(),c=r(o.useState(!1),2),f=c[0],s=c[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,u=r.elements;return u.set(e,n),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!u&&!f){var e=a.requestIdleCallback((function(){return s(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=t(7294),a=t(9311),u="undefined"!==typeof IntersectionObserver;var i=new Map},30:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return l},default:function(){return c}});var r=t(5893),o=t(1664),a=t(7294),u=t(901),i=t.n(u),l=!0,c=function(e){var n=e.workouts,t=(0,a.useState)(15e4),u=t[0],l=t[1],c={latitude:50,longitude:50};return(0,r.jsxs)("div",{className:"w-full max-w-3xl mx-auto my-16 px-2",children:[(0,r.jsx)("p",{children:"Workouts"}),(0,r.jsx)("input",{value:u,onChange:function(e){return l(+e.target.value)}}),n.filter((function(e){return function(e,n,t){return i()(e,n)<t}(e,c,u)})).map((function(e){return(0,r.jsx)(o.default,{href:"/".concat(e.id),children:(0,r.jsx)("a",{className:"p-8 h-40 mb-4 shadow rounded text-xl flex",children:(0,r.jsx)("pre",{children:JSON.stringify(e,null,2)})})},e.id)}))]})}},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);