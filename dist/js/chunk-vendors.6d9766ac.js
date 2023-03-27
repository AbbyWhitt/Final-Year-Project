(self["webpackChunkanother_project2"]=self["webpackChunkanother_project2"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),o=n(6244),s=function(e){return function(t,n,s){var a,l=r(t),u=o(l),c=i(s,u);if(e&&n!=n){while(u>c)if(a=l[c++],a!=a)return!0}else for(;u>c;c++)if((e||c in l)&&l[c]===n)return e||c||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),l=Object,u="Arguments"==o(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=l(e),a))?n:u?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=i(t),l=s.f,u=o.f,c=0;c<a.length;c++){var d=a[c];r(e,d)||n&&r(n,d)||l(e,d,u(t,d))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),o=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&o(n,u,a),a.global)l?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(c){}l?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,i,o=n(7854),s=n(8113),a=o.process,l=o.Deno,u=a&&a.versions||l&&l.version,c=u&&u.v8;c&&(r=c.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,o=r("".replace),s=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(s);e.exports=function(e,t){if(l&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),l=n(9920),u=n(4705);e.exports=function(e,t){var n,c,d,h,f,p,v=e.target,m=e.global,g=e.stat;if(c=m?r:g?r[v]||a(v,{}):(r[v]||{}).prototype,c)for(d in t){if(f=t[d],e.dontCallGetSet?(p=i(c,d),h=p&&p.value):h=c[d],n=u(m?d:v+(g?".":"#")+d,e.forced),!n&&void 0!==h){if(typeof f==typeof h)continue;l(f,h)}(e.sham||h&&h.sham)&&o(f,"sham",!0),s(c,d,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),l=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),o=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a(e,""):s(e)}:s},9587:function(e,t,n){var r=n(614),i=n(111),o=n(7674);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},9909:function(e,t,n){var r,i,o,s=n(4811),a=n(7854),l=n(111),u=n(8880),c=n(2597),d=n(5465),h=n(6200),f=n(3501),p="Object already initialized",v=a.TypeError,m=a.WeakMap,g=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw v("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var b=d.state||(d.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw v(p);return t.facade=e,b.set(e,t),t},i=function(e){return b.get(e)||{}},o=function(e){return b.has(e)}}else{var w=h("state");f[w]=!0,r=function(e,t){if(c(e,w))throw v(p);return t.facade=e,u(e,w,t),t},i=function(e){return c(e,w)?e[w]:{}},o=function(e){return c(e,w)}}e.exports={set:r,get:i,has:o,enforce:g,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(e,t){var n=l[a(e)];return n==c||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},l=s.data={},u=s.NATIVE="N",c=s.POLYFILL="P";e.exports=s},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===o}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),i=n(7293),o=n(614),s=n(2597),a=n(9781),l=n(6530).CONFIGURABLE,u=n(2788),c=n(9909),d=c.enforce,h=c.get,f=String,p=Object.defineProperty,v=r("".slice),m=r("".replace),g=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===v(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||l&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=d(e);return s(r,"source")||(r.source=g(b,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return o(this)&&h(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),l=TypeError,u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,d="enumerable",h="configurable",f="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=c(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:d in n?n[d]:r[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),l=n(4948),u=n(2597),c=n(4664),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=l(t),c)try{return d(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),l=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,c=[];for(n in r)!i(a,n)&&i(r,n)&&l(c,n);while(t.length>u)i(r,n=t[u++])&&(~s(c,n)||l(c,n));return c}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),o=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw s("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),l=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?l(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.27.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),l=n(5112),u=TypeError,c=l("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,l=s(e,c);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},5112:function(e,t,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),l=n(3307),u=r.Symbol,c=i("wks"),d=l?u["for"]||u:u&&u.withoutSetter||s;e.exports=function(e){return o(c,e)||(c[e]=a&&o(u,e)?u[e]:d("Symbol."+e)),c[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),l=n(7293),u=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},d=u||!c();r({target:"Array",proto:!0,arity:1,forced:d},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var l=0;l<r;l++)t[n]=arguments[l],n++;return s(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(5117),l=n(7207),u=1!==[].unshift(0),c=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},d=u||!c();r({target:"Array",proto:!0,arity:1,forced:d},{unshift:function(e){var t=i(this),n=o(t),r=arguments.length;if(r){l(n+r);var u=n;while(u--){var c=u+r;u in t?t[c]=t[u]:a(t,c)}for(var d=0;d<r;d++)t[d]=arguments[d]}return s(t,n+r)}})},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),o=n(5005),s=n(9114),a=n(3070).f,l=n(2597),u=n(5787),c=n(9587),d=n(6277),h=n(3678),f=n(1060),p=n(9781),v=n(1913),m="DOMException",g=o("Error"),y=o(m),b=function(){u(this,w);var e=arguments.length,t=d(e<1?void 0:arguments[0]),n=d(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=g(t);return i.name=m,a(r,"stack",s(1,f(i.stack,1))),c(r,this,b),r},w=b.prototype=y.prototype,_="stack"in g(m),I="stack"in new y(1,2),E=y&&p&&Object.getOwnPropertyDescriptor(i,m),S=!!E&&!(E.writable&&E.configurable),k=_&&!S&&!I;r({global:!0,constructor:!0,forced:v||k},{DOMException:k?b:y});var C=o(m),T=C.prototype;if(T.constructor!==C)for(var x in v||a(T,"constructor",s(1,C)),h)if(l(h,x)){var A=h[x],O=A.s;l(C,O)||a(C,O,s(6,A.c))}},8099:function(){},348:function(){},9773:function(){},223:function(e,t,n){"use strict";n.d(t,{$s:function(){return G},BH:function(){return y},L:function(){return a},LL:function(){return O},P0:function(){return v},Pz:function(){return g},Sg:function(){return b},ZR:function(){return A},aH:function(){return m},b$:function(){return E},eu:function(){return C},hl:function(){return k},m9:function(){return K},ne:function(){return U},pd:function(){return M},q4:function(){return p},ru:function(){return I},tV:function(){return l},uI:function(){return _},vZ:function(){return F},w1:function(){return S},xO:function(){return P},xb:function(){return D},z$:function(){return w},zI:function(){return T},zd:function(){return V}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,u=t>>2,c=(3&t)<<4|s>>4;let d=(15&s)<<2|l>>6,h=63&l;a||(h=64,o||(d=64)),r.push(n[u],n[c],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,l=a?n[e.charAt(i)]:64;++i;const u=i<e.length,c=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==l||null==c)throw Error();const d=t<<2|s>>4;if(r.push(d),64!==l){const e=s<<4&240|l>>2;if(r.push(e),64!==c){const e=l<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return o.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},l=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c=()=>u().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},h=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},f=()=>{try{return c()||d()||h()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},p=e=>{var t,n;return null===(n=null===(t=f())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},v=e=>{const t=p(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},m=()=>{var e;return null===(e=f())||void 0===e?void 0:e.config},g=e=>{var t;return null===(t=f())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),l].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function _(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function I(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function E(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function S(){const e=w();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){try{return"object"===typeof indexedDB}catch(e){return!1}}function C(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function T(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x="FirebaseError";class A extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=x,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?R(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new A(r,s,n);return a}}function R(e,t){return e.replace(N,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function F(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(L(n)&&L(o)){if(!F(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function V(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function M(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){const n=new B(e,t);return n.subscribe.bind(n)}class B{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=$(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=j),void 0===r.error&&(r.error=j),void 0===r.complete&&(r.complete=j);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function $(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function j(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const W=1e3,q=2,H=144e5,z=.5;function G(e,t=W,n=q){const r=t*Math.pow(n,e),i=Math.round(z*r*(Math.random()-.5)*2);return Math.min(H,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{B:function(){return s},BK:function(){return qe},Bj:function(){return o},EB:function(){return l},Fl:function(){return Ye},IU:function(){return Oe},Jd:function(){return k},OT:function(){return Se},PG:function(){return Ce},SU:function(){return $e},Um:function(){return Ee},Vh:function(){return ze},WL:function(){return We},X$:function(){return A},X3:function(){return Ae},XI:function(){return Me},Xl:function(){return Re},dq:function(){return Pe},iH:function(){return Ve},j:function(){return T},lk:function(){return C},qj:function(){return Ie},qq:function(){return _},yT:function(){return xe}});n(7658);var r=n(2268);let i;class o{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function s(e){return new o(e)}function a(e,t=i){t&&t.active&&t.effects.push(e)}function l(e){i&&i.cleanups.push(e)}const u=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&m)>0,d=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!d(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},p=new WeakMap;let v=0,m=1;const g=30;let y;const b=Symbol(""),w=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=y,t=E;while(e){if(e===this)return;e=e.parent}try{return this.parent=y,y=this,E=!0,m=1<<++v,v<=g?h(this):I(this),this.fn()}finally{v<=g&&f(this),m=1<<--v,y=this.parent,E=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(I(this),this.onStop&&this.onStop(),this.active=!1)}}function I(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const S=[];function k(){S.push(E),E=!1}function C(){const e=S.pop();E=void 0===e||e}function T(e,t,n){if(E&&y){let t=p.get(e);t||p.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=u());const i=void 0;x(r,i)}}function x(e,t){let n=!1;v<=g?d(e)||(e.n|=m,n=!c(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function A(e,t,n,i,o,s){const a=p.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=(0,r.He)(i);a.forEach(((t,n)=>{("length"===n||n>=e)&&l.push(t)}))}else switch(void 0!==n&&l.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&l.push(a.get("length")):(l.push(a.get(b)),(0,r._N)(e)&&l.push(a.get(w)));break;case"delete":(0,r.kJ)(e)||(l.push(a.get(b)),(0,r._N)(e)&&l.push(a.get(w)));break;case"set":(0,r._N)(e)&&l.push(a.get(b));break}if(1===l.length)l[0]&&O(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);O(u(e))}}function O(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&R(r,t);for(const r of n)r.computed||R(r,t)}function R(e,t){(e!==y||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),F=U(),L=U(!1,!0),P=U(!0),V=M();function M(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Oe(this);for(let t=0,i=this.length;t<i;t++)T(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Oe)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){k();const n=Oe(this)[t].apply(this,e);return C(),n}})),e}function U(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?be:ye:t?ge:me).get(n))return n;const s=(0,r.kJ)(n);if(!e&&s&&(0,r.RI)(V,i))return Reflect.get(V,i,o);const a=Reflect.get(n,i,o);return((0,r.yk)(i)?D.has(i):N(i))?a:(e||T(n,"get",i),t?a:Pe(a)?s&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Se(a):Ie(a):a)}}const B=j(),$=j(!0);function j(e=!1){return function(t,n,i,o){let s=t[n];if(Te(s)&&Pe(s)&&!Pe(i))return!1;if(!e&&(xe(i)||Te(i)||(s=Oe(s),i=Oe(i)),!(0,r.kJ)(t)&&Pe(s)&&!Pe(i)))return s.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),l=Reflect.set(t,n,i,o);return t===Oe(o)&&(a?(0,r.aU)(i,s)&&A(t,"set",n,i,s):A(t,"add",n,i)),l}}function W(e,t){const n=(0,r.RI)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&A(e,"delete",t,void 0,i),o}function q(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&D.has(t)||T(e,"has",t),n}function H(e){return T(e,"iterate",(0,r.kJ)(e)?"length":b),Reflect.ownKeys(e)}const z={get:F,set:B,deleteProperty:W,has:q,ownKeys:H},G={get:P,set(e,t){return!0},deleteProperty(e,t){return!0}},K=(0,r.l7)({},z,{get:L,set:$}),Y=e=>e,J=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Oe(e),o=Oe(t);n||(t!==o&&T(i,"get",t),T(i,"get",o));const{has:s}=J(i),a=r?Y:n?De:Ne;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],r=Oe(n),i=Oe(e);return t||(e!==i&&T(r,"has",e),T(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Z(e,t=!1){return e=e["__v_raw"],!t&&T(Oe(e),"iterate",b),Reflect.get(e,"size",e)}function ee(e){e=Oe(e);const t=Oe(this),n=J(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function te(e,t){t=Oe(t);const n=Oe(this),{has:i,get:o}=J(n);let s=i.call(n,e);s||(e=Oe(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?(0,r.aU)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function ne(e){const t=Oe(this),{has:n,get:r}=J(t);let i=n.call(t,e);i||(e=Oe(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&A(t,"delete",e,void 0,o),s}function re(){const e=Oe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function ie(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Oe(o),a=t?Y:e?De:Ne;return!e&&T(s,"iterate",b),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function oe(e,t,n){return function(...i){const o=this["__v_raw"],s=Oe(o),a=(0,r._N)(s),l="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,c=o[e](...i),d=n?Y:t?De:Ne;return!t&&T(s,"iterate",u?w:b),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:l?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function se(e){return function(...t){return"delete"!==e&&this}}function ae(){const e={get(e){return Q(this,e)},get size(){return Z(this)},has:X,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return Z(this)},has:X,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:ie(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:ie(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=oe(i,!1,!1),n[i]=oe(i,!0,!1),t[i]=oe(i,!1,!0),r[i]=oe(i,!0,!0)})),[e,n,t,r]}const[le,ue,ce,de]=ae();function he(e,t){const n=t?e?de:ce:e?ue:le;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,o)}const fe={get:he(!1,!1)},pe={get:he(!1,!0)},ve={get:he(!0,!1)};const me=new WeakMap,ge=new WeakMap,ye=new WeakMap,be=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _e(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we((0,r.W7)(e))}function Ie(e){return Te(e)?e:ke(e,!1,z,fe,me)}function Ee(e){return ke(e,!1,K,pe,ge)}function Se(e){return ke(e,!0,G,ve,ye)}function ke(e,t,n,i,o){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=_e(e);if(0===a)return e;const l=new Proxy(e,2===a?i:n);return o.set(e,l),l}function Ce(e){return Te(e)?Ce(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Te(e){return!(!e||!e["__v_isReadonly"])}function xe(e){return!(!e||!e["__v_isShallow"])}function Ae(e){return Ce(e)||Te(e)}function Oe(e){const t=e&&e["__v_raw"];return t?Oe(t):e}function Re(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ne=e=>(0,r.Kn)(e)?Ie(e):e,De=e=>(0,r.Kn)(e)?Se(e):e;function Fe(e){E&&y&&(e=Oe(e),x(e.dep||(e.dep=u())))}function Le(e,t){e=Oe(e),e.dep&&O(e.dep)}function Pe(e){return!(!e||!0!==e.__v_isRef)}function Ve(e){return Ue(e,!1)}function Me(e){return Ue(e,!0)}function Ue(e,t){return Pe(e)?e:new Be(e,t)}class Be{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Oe(e),this._value=t?e:Ne(e)}get value(){return Fe(this),this._value}set value(e){const t=this.__v_isShallow||xe(e)||Te(e);e=t?e:Oe(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ne(e),Le(this,e))}}function $e(e){return Pe(e)?e.value:e}const je={get:(e,t,n)=>$e(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function We(e){return Ce(e)?e:new Proxy(e,je)}function qe(e){const t=(0,r.kJ)(e)?new Array(e.length):{};for(const n in e)t[n]=ze(e,n);return t}class He{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ze(e,t,n){const r=e[t];return Pe(r)?r:new He(e,t,n)}var Ge;class Ke{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Ge]=!1,this._dirty=!0,this.effect=new _(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Oe(this);return Fe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ye(e,t,n=!1){let i,o;const s=(0,r.mf)(e);s?(i=e,o=r.dG):(i=e.get,o=e.set);const a=new Ke(i,o,s||!o,n);return a}Ge="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return a},Cn:function(){return V},FN:function(){return Tn},Fl:function(){return Wn},HY:function(){return zt},Ho:function(){return vn},JJ:function(){return G},Jd:function(){return xe},Ko:function(){return qe},LL:function(){return Be},P$:function(){return oe},Q2:function(){return $e},Q6:function(){return de},U2:function(){return ae},Uk:function(){return mn},Us:function(){return Nt},Wm:function(){return hn},Y3:function(){return b},Y8:function(){return ne},YP:function(){return Q},ZK:function(){return o},_:function(){return dn},aZ:function(){return he},bv:function(){return ke},dD:function(){return P},dG:function(){return _n},dl:function(){return me},f3:function(){return K},h:function(){return qn},iD:function(){return rn},ic:function(){return Te},j4:function(){return on},kq:function(){return gn},lR:function(){return qt},m0:function(){return Y},mx:function(){return He},nK:function(){return ce},se:function(){return ge},up:function(){return Me},w5:function(){return M},wF:function(){return Se},wg:function(){return Xt},wy:function(){return Fe},xv:function(){return Gt}});n(7658),n(541);var r=n(4870),i=n(2268);function o(e,...t){}function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){l(o,t,n)}return i}function a(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{l(e,t,n)})),o}const o=[];for(let i=0;i<e.length;i++)o.push(a(e[i],t,n,r));return o}function l(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}u(e,n,i,r)}function u(e,t,n,r=!0){console.error(e)}let c=!1,d=!1;const h=[];let f=0;const p=[];let v=null,m=0;const g=Promise.resolve();let y=null;function b(e){const t=y||g;return e?t.then(this?e.bind(this):e):t}function w(e){let t=f+1,n=h.length;while(t<n){const r=t+n>>>1,i=T(h[r]);i<e?t=r+1:n=r}return t}function _(e){h.length&&h.includes(e,c&&e.allowRecurse?f+1:f)||(null==e.id?h.push(e):h.splice(w(e.id),0,e),I())}function I(){c||d||(d=!0,y=g.then(A))}function E(e){const t=h.indexOf(e);t>f&&h.splice(t,1)}function S(e){(0,i.kJ)(e)?p.push(...e):v&&v.includes(e,e.allowRecurse?m+1:m)||p.push(e),I()}function k(e,t=(c?f+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function C(e){if(p.length){const e=[...new Set(p)];if(p.length=0,v)return void v.push(...e);for(v=e,v.sort(((e,t)=>T(e)-T(t))),m=0;m<v.length;m++)v[m]();v=null,m=0}}const T=e=>null==e.id?1/0:e.id,x=(e,t)=>{const n=T(e)-T(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function A(e){d=!1,c=!0,h.sort(x);i.dG;try{for(f=0;f<h.length;f++){const e=h[f];e&&!1!==e.active&&s(e,null,14)}}finally{f=0,h.length=0,C(e),c=!1,y=null,(h.length||p.length)&&A(e)}}new Set;new Map;function O(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let o=n;const s=t.startsWith("update:"),l=s&&t.slice(7);if(l&&l in r){const e=`${"modelValue"===l?"model":l}Modifiers`,{number:t,trim:s}=r[e]||i.kT;s&&(o=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(o=n.map(i.He))}let u;let c=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!c&&s&&(c=r[u=(0,i.hR)((0,i.rs)(t))]),c&&a(c,e,6,o);const d=r[u+"Once"];if(d){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,a(d,e,6,o)}}function R(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const s=e.emits;let a={},l=!1;if(!(0,i.mf)(e)){const r=e=>{const n=R(e,t,!0);n&&(l=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||l?((0,i.kJ)(s)?s.forEach((e=>a[e]=null)):(0,i.l7)(a,s),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function N(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let D=null,F=null;function L(e){const t=D;return D=e,F=e&&e.type.__scopeId||null,t}function P(e){F=e}function V(){F=null}function M(e,t=D,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&tn(-1);const i=L(t);let o;try{o=e(...n)}finally{L(i),r._d&&tn(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function U(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[a],slots:u,attrs:c,emit:d,render:h,renderCache:f,data:p,setupState:v,ctx:m,inheritAttrs:g}=e;let y,b;const w=L(e);try{if(4&n.shapeFlag){const e=o||r;y=yn(h.call(e,e,f,s,v,p,m)),b=c}else{const e=t;0,y=yn(e.length>1?e(s,{attrs:c,slots:u,emit:d}):e(s,null)),b=t.props?c:B(c)}}catch(I){Jt.length=0,l(I,e,1),y=hn(Kt)}let _=y;if(b&&!1!==g){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(a&&e.some(i.tR)&&(b=$(b,a)),_=vn(_,b))}return n.dirs&&(_=vn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),y=_,L(w),y}const B=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},$=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function j(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:l}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||W(r,s,u):!!s);if(1024&l)return!0;if(16&l)return r?W(r,s,u):!!s;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!N(u,n))return!0}}return!1}function W(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!N(n,o))return!0}return!1}function q({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const H=e=>e.__isSuspense;function z(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):S(e)}function G(e,t){if(Cn){let n=Cn.provides;const r=Cn.parent&&Cn.parent.provides;r===n&&(n=Cn.provides=Object.create(r)),n[e]=t}else 0}function K(e,t,n=!1){const r=Cn||D;if(r){const o=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}function Y(e,t){return X(e,null,t)}const J={};function Q(e,t,n){return X(e,t,n)}function X(e,t,{immediate:n,deep:o,flush:l,onTrack:u,onTrigger:c}=i.kT){const d=Cn;let h,f,p=!1,v=!1;if((0,r.dq)(e)?(h=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(h=()=>e,o=!0):(0,i.kJ)(e)?(v=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),h=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?te(e):(0,i.mf)(e)?s(e,d,2):void 0))):h=(0,i.mf)(e)?t?()=>s(e,d,2):()=>{if(!d||!d.isUnmounted)return f&&f(),a(e,d,3,[g])}:i.dG,t&&o){const e=h;h=()=>te(e())}let m,g=e=>{f=I.onStop=()=>{s(e,d,4)}};if(Dn){if(g=i.dG,t?n&&a(t,d,3,[h(),v?[]:void 0,g]):h(),"sync"!==l)return i.dG;{const e=zn();m=e.__watcherHandles||(e.__watcherHandles=[])}}let y=v?new Array(e.length).fill(J):J;const b=()=>{if(I.active)if(t){const e=I.run();(o||p||(v?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(f&&f(),a(t,d,3,[e,y===J?void 0:v&&y[0]===J?[]:y,g]),y=e)}else I.run()};let w;b.allowRecurse=!!t,"sync"===l?w=b:"post"===l?w=()=>Rt(b,d&&d.suspense):(b.pre=!0,d&&(b.id=d.uid),w=()=>_(b));const I=new r.qq(h,w);t?n?b():y=I.run():"post"===l?Rt(I.run.bind(I),d&&d.suspense):I.run();const E=()=>{I.stop(),d&&d.scope&&(0,i.Od)(d.scope.effects,I)};return m&&m.push(E),E}function Z(e,t,n){const r=this.proxy,o=(0,i.HD)(e)?e.includes(".")?ee(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.mf)(t)?s=t:(s=t.handler,n=t);const a=Cn;xn(this);const l=X(o,s.bind(r),n);return a?xn(a):An(),l}function ee(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function te(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))te(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)te(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{te(e,t)}));else if((0,i.PO)(e))for(const n in e)te(e[n],t);return e}function ne(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ke((()=>{e.isMounted=!0})),xe((()=>{e.isUnmounting=!0})),e}const re=[Function,Array],ie={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:re,onEnter:re,onAfterEnter:re,onEnterCancelled:re,onBeforeLeave:re,onLeave:re,onAfterLeave:re,onLeaveCancelled:re,onBeforeAppear:re,onAppear:re,onAfterAppear:re,onAppearCancelled:re},setup(e,{slots:t}){const n=Tn(),i=ne();let o;return()=>{const s=t.default&&de(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==Kt){0,a=t,e=!0;break}}const l=(0,r.IU)(e),{mode:u}=l;if(i.isLeaving)return le(a);const c=ue(a);if(!c)return le(a);const d=ae(c,l,i,n);ce(c,d);const h=n.subTree,f=h&&ue(h);let p=!1;const{getTransitionKey:v}=c.type;if(v){const e=v();void 0===o?o=e:e!==o&&(o=e,p=!0)}if(f&&f.type!==Kt&&(!an(c,f)||p)){const e=ae(f,l,i,n);if(ce(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},le(a);"in-out"===u&&c.type!==Kt&&(e.delayLeave=(e,t,n)=>{const r=se(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=n})}return a}}},oe=ie;function se(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ae(e,t,n,r){const{appear:o,mode:s,persisted:l=!1,onBeforeEnter:u,onEnter:c,onAfterEnter:d,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:v,onLeaveCancelled:m,onBeforeAppear:g,onAppear:y,onAfterAppear:b,onAppearCancelled:w}=t,_=String(e.key),I=se(n,e),E=(e,t)=>{e&&a(e,r,9,t)},S=(e,t)=>{const n=t[1];E(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},k={mode:s,persisted:l,beforeEnter(t){let r=u;if(!n.isMounted){if(!o)return;r=g||u}t._leaveCb&&t._leaveCb(!0);const i=I[_];i&&an(e,i)&&i.el._leaveCb&&i.el._leaveCb(),E(r,[t])},enter(e){let t=c,r=d,i=h;if(!n.isMounted){if(!o)return;t=y||c,r=b||d,i=w||h}let s=!1;const a=e._enterCb=t=>{s||(s=!0,E(t?i:r,[e]),k.delayedLeave&&k.delayedLeave(),e._enterCb=void 0)};t?S(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();E(f,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),E(n?m:v,[t]),t._leaveCb=void 0,I[i]===e&&delete I[i])};I[i]=e,p?S(p,[t,s]):s()},clone(e){return ae(e,t,n,r)}};return k}function le(e){if(pe(e))return e=vn(e),e.children=null,e}function ue(e){return pe(e)?e.children?e.children[0]:void 0:e}function ce(e,t){6&e.shapeFlag&&e.component?ce(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function de(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===zt?(128&s.patchFlag&&i++,r=r.concat(de(s.children,t,a))):(t||s.type!==Kt)&&r.push(null!=a?vn(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function he(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const fe=e=>!!e.type.__asyncLoader;const pe=e=>e.type.__isKeepAlive;RegExp,RegExp;function ve(e,t){return(0,i.kJ)(e)?e.some((e=>ve(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function me(e,t){ye(e,"a",t)}function ge(e,t){ye(e,"da",t)}function ye(e,t,n=Cn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Ie(t,r,n),n){let e=n.parent;while(e&&e.parent)pe(e.parent.vnode)&&be(r,t,n,e),e=e.parent}}function be(e,t,n,r){const o=Ie(t,e,r,!0);Ae((()=>{(0,i.Od)(r[t],o)}),n)}function we(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function _e(e){return 128&e.shapeFlag?e.ssContent:e}function Ie(e,t,n=Cn,i=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),xn(n);const o=a(t,n,e,i);return An(),(0,r.lk)(),o});return i?o.unshift(s):o.push(s),s}}const Ee=e=>(t,n=Cn)=>(!Dn||"sp"===e)&&Ie(e,((...e)=>t(...e)),n),Se=Ee("bm"),ke=Ee("m"),Ce=Ee("bu"),Te=Ee("u"),xe=Ee("bum"),Ae=Ee("um"),Oe=Ee("sp"),Re=Ee("rtg"),Ne=Ee("rtc");function De(e,t=Cn){Ie("ec",e,t)}function Fe(e,t){const n=D;if(null===n)return e;const r=Bn(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,l=i.kT]=t[s];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&te(n),o.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:l}))}return e}function Le(e,t,n,i){const o=e.dirs,s=t&&t.dirs;for(let l=0;l<o.length;l++){const u=o[l];s&&(u.oldValue=s[l].value);let c=u.dir[i];c&&((0,r.Jd)(),a(c,n,8,[e.el,u,e,t]),(0,r.lk)())}}const Pe="components",Ve="directives";function Me(e,t){return je(Pe,e,!0,t)||e}const Ue=Symbol();function Be(e){return(0,i.HD)(e)?je(Pe,e,!1)||e:e||Ue}function $e(e){return je(Ve,e)}function je(e,t,n=!0,r=!1){const o=D||Cn;if(o){const n=o.type;if(e===Pe){const e=$n(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const s=We(o[e]||n[e],t)||We(o.appContext[e],t);return!s&&r?n:s}}function We(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function qe(e,t,n,r){let o;const s=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}function He(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:(0,i.hR)(r)]=e[r];return n}const ze=e=>e?On(e)?Bn(e)||e.proxy:ze(e.parent):null,Ge=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ze(e.parent),$root:e=>ze(e.root),$emit:e=>e.emit,$options:e=>tt(e),$forceUpdate:e=>e.f||(e.f=()=>_(e.update)),$nextTick:e=>e.n||(e.n=b.bind(e.proxy)),$watch:e=>Z.bind(e)}),Ke=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),Ye={get({_:e},t){const{ctx:n,setupState:o,data:s,props:a,accessCache:l,type:u,appContext:c}=e;let d;if("$"!==t[0]){const r=l[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(Ke(o,t))return l[t]=1,o[t];if(s!==i.kT&&(0,i.RI)(s,t))return l[t]=2,s[t];if((d=e.propsOptions[0])&&(0,i.RI)(d,t))return l[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return l[t]=4,n[t];Je&&(l[t]=0)}}const h=Ge[t];let f,p;return h?("$attrs"===t&&(0,r.j)(e,"get",t),h(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(l[t]=4,n[t]):(p=c.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return Ke(o,t)?(o[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let l;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||Ke(t,a)||(l=s[0])&&(0,i.RI)(l,a)||(0,i.RI)(r,a)||(0,i.RI)(Ge,a)||(0,i.RI)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Je=!0;function Qe(e){const t=tt(e),n=e.proxy,o=e.ctx;Je=!1,t.beforeCreate&&Ze(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:l,watch:u,provide:c,inject:d,created:h,beforeMount:f,mounted:p,beforeUpdate:v,updated:m,activated:g,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:I,render:E,renderTracked:S,renderTriggered:k,errorCaptured:C,serverPrefetch:T,expose:x,inheritAttrs:A,components:O,directives:R,filters:N}=t,D=null;if(d&&Xe(d,o,D,e.appContext.config.unwrapInjectedRef),l)for(const r in l){const e=l[r];(0,i.mf)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Je=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const s=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,l=Wn({get:t,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(u)for(const r in u)et(u[r],o,n,r);if(c){const e=(0,i.mf)(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{G(t,e[t])}))}function F(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&Ze(h,e,"c"),F(Se,f),F(ke,p),F(Ce,v),F(Te,m),F(me,g),F(ge,y),F(De,C),F(Ne,S),F(Re,k),F(xe,w),F(Ae,I),F(Oe,T),(0,i.kJ)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.dG&&(e.render=E),null!=A&&(e.inheritAttrs=A),O&&(e.components=O),R&&(e.directives=R)}function Xe(e,t,n=i.dG,o=!1){(0,i.kJ)(e)&&(e=st(e));for(const s in e){const n=e[s];let a;a=(0,i.Kn)(n)?"default"in n?K(n.from||s,n.default,!0):K(n.from||s):K(n),(0,r.dq)(a)&&o?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[s]=a}}function Ze(e,t,n){a((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function et(e,t,n,r){const o=r.includes(".")?ee(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&Q(o,n)}else if((0,i.mf)(e))Q(o,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>et(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&Q(o,r,e)}else 0}function tt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,l=s.get(t);let u;return l?u=l:o.length||n||r?(u={},o.length&&o.forEach((e=>nt(u,e,a,!0))),nt(u,t,a)):u=t,(0,i.Kn)(t)&&s.set(t,u),u}function nt(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&nt(e,o,n,!0),i&&i.forEach((t=>nt(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=rt[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const rt={data:it,props:lt,emits:lt,methods:lt,computed:lt,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:lt,directives:lt,watch:ut,provide:it,inject:ot};function it(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function ot(e,t){return lt(st(e),st(t))}function st(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function at(e,t){return e?[...new Set([].concat(e,t))]:t}function lt(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function ut(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=at(e[r],t[r]);return n}function ct(e,t,n,o=!1){const s={},a={};(0,i.Nj)(a,ln,1),e.propsDefaults=Object.create(null),ht(e,t,s,a);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=o?s:(0,r.Um)(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function dt(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:l}}=e,u=(0,r.IU)(s),[c]=e.propsOptions;let d=!1;if(!(o||l>0)||16&l){let r;ht(e,t,s,a)&&(d=!0);for(const o in u)t&&((0,i.RI)(t,o)||(r=(0,i.rs)(o))!==o&&(0,i.RI)(t,r))||(c?!n||void 0===n[o]&&void 0===n[r]||(s[o]=ft(c,u,o,void 0,e,!0)):delete s[o]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],d=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(N(e.emitsOptions,o))continue;const l=t[o];if(c)if((0,i.RI)(a,o))l!==a[o]&&(a[o]=l,d=!0);else{const t=(0,i._A)(o);s[t]=ft(c,u,t,l,e,!1)}else l!==a[o]&&(a[o]=l,d=!0)}}d&&(0,r.X$)(e,"set","$attrs")}function ht(e,t,n,o){const[s,a]=e.propsOptions;let l,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const c=t[r];let d;s&&(0,i.RI)(s,d=(0,i._A)(r))?a&&a.includes(d)?(l||(l={}))[d]=c:n[d]=c:N(e.emitsOptions,r)||r in o&&c===o[r]||(o[r]=c,u=!0)}if(a){const t=(0,r.IU)(n),o=l||i.kT;for(let r=0;r<a.length;r++){const l=a[r];n[l]=ft(s,t,l,o[l],e,!(0,i.RI)(o,l))}}return u}function ft(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=o;n in i?r=i[n]:(xn(o),r=i[n]=e.call(null,t),An())}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function pt(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},l=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=pt(e,t,!0);(0,i.l7)(a,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(s))for(let d=0;d<s.length;d++){0;const e=(0,i._A)(s[d]);vt(e)&&(a[e]=i.kT)}else if(s){0;for(const e in s){const t=(0,i._A)(e);if(vt(t)){const n=s[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=yt(Boolean,r.type),n=yt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&l.push(t)}}}}const c=[a,l];return(0,i.Kn)(e)&&r.set(e,c),c}function vt(e){return"$"!==e[0]}function mt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function gt(e,t){return mt(e)===mt(t)}function yt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>gt(t,e))):(0,i.mf)(t)&&gt(t,e)?0:-1}const bt=e=>"_"===e[0]||"$stable"===e,wt=e=>(0,i.kJ)(e)?e.map(yn):[yn(e)],_t=(e,t,n)=>{if(t._n)return t;const r=M(((...e)=>wt(t(...e))),n);return r._c=!1,r},It=(e,t,n)=>{const r=e._ctx;for(const o in e){if(bt(o))continue;const n=e[o];if((0,i.mf)(n))t[o]=_t(o,n,r);else if(null!=n){0;const e=wt(n);t[o]=()=>e}}},Et=(e,t)=>{const n=wt(t);e.slots.default=()=>n},St=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):It(t,e.slots={})}else e.slots={},t&&Et(e,t);(0,i.Nj)(e.slots,ln,1)},kt=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,i.l7)(o,t),n||1!==e||delete o._):(s=!t.$stable,It(t,o)),a=t}else t&&(Et(e,t),a={default:1});if(s)for(const i in o)bt(i)||i in a||delete o[i]};function Ct(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tt=0;function xt(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const o=Ct(),s=new Set;let a=!1;const l=o.app={_uid:Tt++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:Gn,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,i.mf)(e.install)?(s.add(e),e.install(l,...t)):(0,i.mf)(e)&&(s.add(e),e(l,...t))),l},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),l},component(e,t){return t?(o.components[e]=t,l):o.components[e]},directive(e,t){return t?(o.directives[e]=t,l):o.directives[e]},mount(i,s,u){if(!a){0;const c=hn(n,r);return c.appContext=o,s&&t?t(c,i):e(c,i,u),a=!0,l._container=i,i.__vue_app__=l,Bn(c.component)||c.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return o.provides[e]=t,l}};return l}}function At(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>At(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(fe(o)&&!a)return;const l=4&o.shapeFlag?Bn(o.component)||o.component.proxy:o.el,u=a?null:l,{i:c,r:d}=e;const h=t&&t.r,f=c.refs===i.kT?c.refs={}:c.refs,p=c.setupState;if(null!=h&&h!==d&&((0,i.HD)(h)?(f[h]=null,(0,i.RI)(p,h)&&(p[h]=null)):(0,r.dq)(h)&&(h.value=null)),(0,i.mf)(d))s(d,c,12,[u,f]);else{const t=(0,i.HD)(d),o=(0,r.dq)(d);if(t||o){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,d)?p[d]:f[d]:d.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,l):(0,i.kJ)(n)?n.includes(l)||n.push(l):t?(f[d]=[l],(0,i.RI)(p,d)&&(p[d]=f[d])):(d.value=[l],e.k&&(f[e.k]=d.value))}else t?(f[d]=u,(0,i.RI)(p,d)&&(p[d]=u)):o&&(d.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,Rt(r,n)):r()}else 0}}function Ot(){}const Rt=z;function Nt(e){return Dt(e)}function Dt(e,t){Ot();const n=(0,i.E9)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:l,createText:u,createComment:c,setText:d,setElementText:h,parentNode:f,nextSibling:p,setScopeId:v=i.dG,insertStaticContent:m}=e,g=(e,t,n,r=null,i=null,o=null,s=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!an(e,t)&&(r=X(e),G(e,i,o,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:u,ref:c,shapeFlag:d}=t;switch(u){case Gt:y(e,t,n,r);break;case Kt:b(e,t,n,r);break;case Yt:null==e&&w(t,n,r,s);break;case zt:F(e,t,n,r,i,o,s,a,l);break;default:1&d?T(e,t,n,r,i,o,s,a,l):6&d?L(e,t,n,r,i,o,s,a,l):(64&d||128&d)&&u.process(e,t,n,r,i,o,s,a,l,ee)}null!=c&&i&&At(c,e&&e.ref,o,t||e,!t)},y=(e,t,n,r)=>{if(null==e)o(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},b=(e,t,n,r)=>{null==e?o(t.el=c(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),o(e,n,r),e=i;o(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},T=(e,t,n,r,i,o,s,a,l)=>{s=s||"svg"===t.type,null==e?x(t,n,r,i,o,s,a,l):R(e,t,i,o,s,a,l)},x=(e,t,n,r,s,u,c,d)=>{let f,p;const{type:v,props:m,shapeFlag:g,transition:y,dirs:b}=e;if(f=e.el=l(e.type,u,m&&m.is,m),8&g?h(f,e.children):16&g&&O(e.children,f,null,r,s,u&&"foreignObject"!==v,c,d),b&&Le(e,null,r,"created"),m){for(const t in m)"value"===t||(0,i.Gg)(t)||a(f,t,null,m[t],u,e.children,r,s,Q);"value"in m&&a(f,"value",null,m.value),(p=m.onVnodeBeforeMount)&&In(p,r,e)}A(f,e,e.scopeId,c,r),b&&Le(e,null,r,"beforeMount");const w=(!s||s&&!s.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(f),o(f,t,n),((p=m&&m.onVnodeMounted)||w||b)&&Rt((()=>{p&&In(p,r,e),w&&y.enter(f),b&&Le(e,null,r,"mounted")}),s)},A=(e,t,n,r,i)=>{if(n&&v(e,n),r)for(let o=0;o<r.length;o++)v(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,o,s,a,l=0)=>{for(let u=l;u<e.length;u++){const l=e[u]=a?bn(e[u]):yn(e[u]);g(null,l,t,n,r,i,o,s,a)}},R=(e,t,n,r,o,s,l)=>{const u=t.el=e.el;let{patchFlag:c,dynamicChildren:d,dirs:f}=t;c|=16&e.patchFlag;const p=e.props||i.kT,v=t.props||i.kT;let m;n&&Ft(n,!1),(m=v.onVnodeBeforeUpdate)&&In(m,n,t,e),f&&Le(t,e,n,"beforeUpdate"),n&&Ft(n,!0);const g=o&&"foreignObject"!==t.type;if(d?N(e.dynamicChildren,d,u,n,r,g,s):l||$(e,t,u,null,n,r,g,s,!1),c>0){if(16&c)D(u,t,p,v,n,r,o);else if(2&c&&p.class!==v.class&&a(u,"class",null,v.class,o),4&c&&a(u,"style",p.style,v.style,o),8&c){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const s=i[t],l=p[s],c=v[s];c===l&&"value"!==s||a(u,s,l,c,o,e.children,n,r,Q)}}1&c&&e.children!==t.children&&h(u,t.children)}else l||null!=d||D(u,t,p,v,n,r,o);((m=v.onVnodeUpdated)||f)&&Rt((()=>{m&&In(m,n,t,e),f&&Le(t,e,n,"updated")}),r)},N=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const l=e[a],u=t[a],c=l.el&&(l.type===zt||!an(l,u)||70&l.shapeFlag)?f(l.el):n;g(l,u,c,null,r,i,o,s,!0)}},D=(e,t,n,r,o,s,l)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,l,t.children,o,s,Q);for(const u in r){if((0,i.Gg)(u))continue;const c=r[u],d=n[u];c!==d&&"value"!==u&&a(e,u,d,c,l,t.children,o,s,Q)}"value"in r&&a(e,"value",n.value,r.value)}},F=(e,t,n,r,i,s,a,l,c)=>{const d=t.el=e?e.el:u(""),h=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:v}=t;v&&(l=l?l.concat(v):v),null==e?(o(d,n,r),o(h,n,r),O(t.children,n,h,i,s,a,l,c)):f>0&&64&f&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,i,s,a,l),(null!=t.key||i&&t===i.subTree)&&Lt(e,t,!0)):$(e,t,n,h,i,s,a,l,c)},L=(e,t,n,r,i,o,s,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,l):P(t,n,r,i,o,s,l):V(e,t,l)},P=(e,t,n,r,i,o,s)=>{const a=e.component=kn(e,r,i);if(pe(e)&&(a.ctx.renderer=ee),Fn(a),a.asyncDep){if(i&&i.registerDep(a,M),!e.el){const e=a.subTree=hn(Kt);b(null,e,t,n)}}else M(a,e,t,n,i,o,s)},V=(e,t,n)=>{const r=t.component=e.component;if(j(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,E(r.update),r.update()}else t.el=e.el,r.vnode=t},M=(e,t,n,o,s,a,l)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:o,parent:u,vnode:c}=e,d=n;0,Ft(e,!1),n?(n.el=c.el,B(e,n,l)):n=c,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&In(t,u,n,c),Ft(e,!0);const h=U(e);0;const p=e.subTree;e.subTree=h,g(p,h,f(p.el),X(p),e,s,a),n.el=h.el,null===d&&q(e,h.el),o&&Rt(o,s),(t=n.props&&n.props.onVnodeUpdated)&&Rt((()=>In(t,u,n,c)),s)}else{let r;const{el:l,props:u}=t,{bm:c,m:d,parent:h}=e,f=fe(t);if(Ft(e,!1),c&&(0,i.ir)(c),!f&&(r=u&&u.onVnodeBeforeMount)&&In(r,h,t),Ft(e,!0),l&&ne){const n=()=>{e.subTree=U(e),ne(l,e.subTree,e,s,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=U(e);0,g(null,r,n,o,e,s,a),t.el=r.el}if(d&&Rt(d,s),!f&&(r=u&&u.onVnodeMounted)){const e=t;Rt((()=>In(r,h,e)),s)}(256&t.shapeFlag||h&&fe(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&Rt(e.a,s),e.isMounted=!0,t=n=o=null}},c=e.effect=new r.qq(u,(()=>_(d)),e.scope),d=e.update=()=>c.run();d.id=e.uid,Ft(e,!0),d()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,dt(e,t.props,i,n),kt(e,t.children,n),(0,r.Jd)(),k(),(0,r.lk)()},$=(e,t,n,r,i,o,s,a,l=!1)=>{const u=e&&e.children,c=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void H(u,d,n,r,i,o,s,a,l);if(256&f)return void W(u,d,n,r,i,o,s,a,l)}8&p?(16&c&&Q(u,i,o),d!==u&&h(n,d)):16&c?16&p?H(u,d,n,r,i,o,s,a,l):Q(u,i,o,!0):(8&c&&h(n,""),16&p&&O(d,n,r,i,o,s,a,l))},W=(e,t,n,r,o,s,a,l,u)=>{e=e||i.Z6,t=t||i.Z6;const c=e.length,d=t.length,h=Math.min(c,d);let f;for(f=0;f<h;f++){const r=t[f]=u?bn(t[f]):yn(t[f]);g(e[f],r,n,null,o,s,a,l,u)}c>d?Q(e,o,s,!0,!1,h):O(t,n,r,o,s,a,l,u,h)},H=(e,t,n,r,o,s,a,l,u)=>{let c=0;const d=t.length;let h=e.length-1,f=d-1;while(c<=h&&c<=f){const r=e[c],i=t[c]=u?bn(t[c]):yn(t[c]);if(!an(r,i))break;g(r,i,n,null,o,s,a,l,u),c++}while(c<=h&&c<=f){const r=e[h],i=t[f]=u?bn(t[f]):yn(t[f]);if(!an(r,i))break;g(r,i,n,null,o,s,a,l,u),h--,f--}if(c>h){if(c<=f){const e=f+1,i=e<d?t[e].el:r;while(c<=f)g(null,t[c]=u?bn(t[c]):yn(t[c]),n,i,o,s,a,l,u),c++}}else if(c>f)while(c<=h)G(e[c],o,s,!0),c++;else{const p=c,v=c,m=new Map;for(c=v;c<=f;c++){const e=t[c]=u?bn(t[c]):yn(t[c]);null!=e.key&&m.set(e.key,c)}let y,b=0;const w=f-v+1;let _=!1,I=0;const E=new Array(w);for(c=0;c<w;c++)E[c]=0;for(c=p;c<=h;c++){const r=e[c];if(b>=w){G(r,o,s,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=v;y<=f;y++)if(0===E[y-v]&&an(r,t[y])){i=y;break}void 0===i?G(r,o,s,!0):(E[i-v]=c+1,i>=I?I=i:_=!0,g(r,t[i],n,null,o,s,a,l,u),b++)}const S=_?Pt(E):i.Z6;for(y=S.length-1,c=w-1;c>=0;c--){const e=v+c,i=t[e],h=e+1<d?t[e+1].el:r;0===E[c]?g(null,i,n,h,o,s,a,l,u):_&&(y<0||c!==S[y]?z(i,n,h,2):y--)}}},z=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:l,children:u,shapeFlag:c}=e;if(6&c)return void z(e.component.subTree,t,n,r);if(128&c)return void e.suspense.move(t,n,r);if(64&c)return void a.move(e,t,n,ee);if(a===zt){o(s,t,n);for(let e=0;e<u.length;e++)z(u[e],t,n,r);return void o(e.anchor,t,n)}if(a===Yt)return void I(e,t,n);const d=2!==r&&1&c&&l;if(d)if(0===r)l.beforeEnter(s),o(s,t,n),Rt((()=>l.enter(s)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=l,a=()=>o(s,t,n),u=()=>{e(s,(()=>{a(),i&&i()}))};r?r(s,a,u):u()}else o(s,t,n)},G=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:l,dynamicChildren:u,shapeFlag:c,patchFlag:d,dirs:h}=e;if(null!=a&&At(a,null,n,e,!0),256&c)return void t.ctx.deactivate(e);const f=1&c&&h,p=!fe(e);let v;if(p&&(v=s&&s.onVnodeBeforeUnmount)&&In(v,t,e),6&c)J(e.component,n,r);else{if(128&c)return void e.suspense.unmount(n,r);f&&Le(e,null,t,"beforeUnmount"),64&c?e.type.remove(e,t,n,i,ee,r):u&&(o!==zt||d>0&&64&d)?Q(u,t,n,!1,!0):(o===zt&&384&d||!i&&16&c)&&Q(l,t,n),r&&K(e)}(p&&(v=s&&s.onVnodeUnmounted)||f)&&Rt((()=>{v&&In(v,t,e),f&&Le(e,null,t,"unmounted")}),n)},K=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===zt)return void Y(n,r);if(t===Yt)return void S(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},Y=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},J=(e,t,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:l}=e;r&&(0,i.ir)(r),o.stop(),s&&(s.active=!1,G(a,e,t,n)),l&&Rt(l,t),Rt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)G(e[s],t,n,r,i)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),k(),C(),t._vnode=e},ee={p:g,um:G,m:z,r:K,mt:P,mc:O,pc:$,pbc:N,n:X,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Z,hydrate:te,createApp:xt(Z,te)}}function Ft({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Lt(e,t,n=!1){const r=e.children,o=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=bn(o[i]),t.el=e.el),n||Lt(e,t)),t.type===Gt&&(t.el=e.el)}}function Pt(e){const t=e.slice(),n=[0];let r,i,o,s,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<l?o=a+1:s=a;l<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const Vt=e=>e.__isTeleport,Mt=e=>e&&(e.disabled||""===e.disabled),Ut=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,Bt=(e,t)=>{const n=e&&e.to;if((0,i.HD)(n)){if(t){const e=t(n);return e}return null}return n},$t={__isTeleport:!0,process(e,t,n,r,i,o,s,a,l,u){const{mc:c,pc:d,pbc:h,o:{insert:f,querySelector:p,createText:v,createComment:m}}=u,g=Mt(t.props);let{shapeFlag:y,children:b,dynamicChildren:w}=t;if(null==e){const e=t.el=v(""),u=t.anchor=v("");f(e,n,r),f(u,n,r);const d=t.target=Bt(t.props,p),h=t.targetAnchor=v("");d&&(f(h,d),s=s||Ut(d));const m=(e,t)=>{16&y&&c(b,e,t,i,o,s,a,l)};g?m(n,u):d&&m(d,h)}else{t.el=e.el;const r=t.anchor=e.anchor,c=t.target=e.target,f=t.targetAnchor=e.targetAnchor,v=Mt(e.props),m=v?n:c,y=v?r:f;if(s=s||Ut(c),w?(h(e.dynamicChildren,w,m,i,o,s,a),Lt(e,t,!0)):l||d(e,t,m,y,i,o,s,a,!1),g)v||jt(t,n,r,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Bt(t.props,p);e&&jt(t,e,null,u,0)}else v&&jt(t,c,f,u,1)}Ht(t)},remove(e,t,n,r,{um:i,o:{remove:o}},s){const{shapeFlag:a,children:l,anchor:u,targetAnchor:c,target:d,props:h}=e;if(d&&o(c),(s||!Mt(h))&&(o(u),16&a))for(let f=0;f<l.length;f++){const e=l[f];i(e,t,n,!0,!!e.dynamicChildren)}},move:jt,hydrate:Wt};function jt(e,t,n,{o:{insert:r},m:i},o=2){0===o&&r(e.targetAnchor,t,n);const{el:s,anchor:a,shapeFlag:l,children:u,props:c}=e,d=2===o;if(d&&r(s,t,n),(!d||Mt(c))&&16&l)for(let h=0;h<u.length;h++)i(u[h],t,n,2);d&&r(a,t,n)}function Wt(e,t,n,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:l}},u){const c=t.target=Bt(t.props,l);if(c){const l=c._lpa||c.firstChild;if(16&t.shapeFlag)if(Mt(t.props))t.anchor=u(s(e),t,a(e),n,r,i,o),t.targetAnchor=l;else{t.anchor=s(e);let a=l;while(a)if(a=s(a),a&&8===a.nodeType&&"teleport anchor"===a.data){t.targetAnchor=a,c._lpa=t.targetAnchor&&s(t.targetAnchor);break}u(l,t,c,n,r,i,o)}Ht(t)}return t.anchor&&s(t.anchor)}const qt=$t;function Ht(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;while(n!==e.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const zt=Symbol(void 0),Gt=Symbol(void 0),Kt=Symbol(void 0),Yt=Symbol(void 0),Jt=[];let Qt=null;function Xt(e=!1){Jt.push(Qt=e?null:[])}function Zt(){Jt.pop(),Qt=Jt[Jt.length-1]||null}let en=1;function tn(e){en+=e}function nn(e){return e.dynamicChildren=en>0?Qt||i.Z6:null,Zt(),en>0&&Qt&&Qt.push(e),e}function rn(e,t,n,r,i,o){return nn(dn(e,t,n,r,i,o,!0))}function on(e,t,n,r,i){return nn(hn(e,t,n,r,i,!0))}function sn(e){return!!e&&!0===e.__v_isVNode}function an(e,t){return e.type===t.type&&e.key===t.key}const ln="__vInternal",un=({key:e})=>null!=e?e:null,cn=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:D,r:e,k:t,f:!!n}:e:null;function dn(e,t=null,n=null,r=0,o=null,s=(e===zt?0:1),a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&un(t),ref:t&&cn(t),scopeId:F,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:D};return l?(wn(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),en>0&&!a&&Qt&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Qt.push(u),u}const hn=fn;function fn(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==Ue||(e=Kt),sn(e)){const r=vn(e,t,!0);return n&&wn(r,n),en>0&&!a&&Qt&&(6&r.shapeFlag?Qt[Qt.indexOf(e)]=r:Qt.push(r)),r.patchFlag|=-2,r}if(jn(e)&&(e=e.__vccOpts),t){t=pn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const l=(0,i.HD)(e)?1:H(e)?128:Vt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return dn(e,t,n,o,s,l,a,!0)}function pn(e){return e?(0,r.X3)(e)||ln in e?(0,i.l7)({},e):e:null}function vn(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:a}=e,l=t?_n(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&un(l),ref:t&&t.ref?n&&o?(0,i.kJ)(o)?o.concat(cn(t)):[o,cn(t)]:cn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==zt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vn(e.ssContent),ssFallback:e.ssFallback&&vn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx};return u}function mn(e=" ",t=0){return hn(Gt,null,e,t)}function gn(e="",t=!1){return t?(Xt(),on(Kt,null,e)):hn(Kt,null,e)}function yn(e){return null==e||"boolean"===typeof e?hn(Kt):(0,i.kJ)(e)?hn(zt,null,e.slice()):"object"===typeof e?bn(e):hn(Gt,null,String(e))}function bn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:vn(e)}function wn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),wn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||ln in t?3===r&&D&&(1===D.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=D}}else(0,i.mf)(t)?(t={default:t,_ctx:D},n=32):(t=String(t),64&r?(n=16,t=[mn(t)]):n=8);e.children=t,e.shapeFlag|=n}function _n(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.kJ)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function In(e,t,n,r=null){a(e,t,7,[n,r])}const En=Ct();let Sn=0;function kn(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||En,a={uid:Sn++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pt(o,s),emitsOptions:R(o,s),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:o.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=O.bind(null,a),e.ce&&e.ce(a),a}let Cn=null;const Tn=()=>Cn||D,xn=e=>{Cn=e,e.scope.on()},An=()=>{Cn&&Cn.scope.off(),Cn=null};function On(e){return 4&e.vnode.shapeFlag}let Rn,Nn,Dn=!1;function Fn(e,t=!1){Dn=t;const{props:n,children:r}=e.vnode,i=On(e);ct(e,n,i,t),St(e,r);const o=i?Ln(e,t):void 0;return Dn=!1,o}function Ln(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Ye));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Un(e):null;xn(e),(0,r.Jd)();const a=s(o,e,0,[e.props,n]);if((0,r.lk)(),An(),(0,i.tI)(a)){if(a.then(An,An),t)return a.then((n=>{Pn(e,n,t)})).catch((t=>{l(t,e,0)}));e.asyncDep=a}else Pn(e,a,t)}else Vn(e,t)}function Pn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Vn(e,n)}function Vn(e,t,n){const o=e.type;if(!e.render){if(!t&&Rn&&!o.render){const t=o.template||tt(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,l=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:s},r),a);o.render=Rn(t,l)}}e.render=o.render||i.dG,Nn&&Nn(e)}xn(e),(0,r.Jd)(),Qe(e),(0,r.lk)(),An()}function Mn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Un(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Mn(e))},slots:e.slots,emit:e.emit,expose:t}}function Bn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ge?Ge[n](e):void 0},has(e,t){return t in e||t in Ge}}))}function $n(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function jn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Wn=(e,t)=>(0,r.Fl)(e,t,Dn);function qn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?sn(t)?hn(e,null,[t]):hn(e,t):hn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&sn(n)&&(n=[n]),hn(e,t,n))}const Hn=Symbol(""),zn=()=>{{const e=K(Hn);return e}};const Gn="3.2.45"},9242:function(e,t,n){"use strict";n.d(t,{F8:function(){return fe},W3:function(){return te},iM:function(){return he},nr:function(){return ue},ri:function(){return ye},uT:function(){return L}});n(7658);var r=n(2268),i=n(3396),o=n(4870);const s="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,l=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(s,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{l.innerHTML=r?`<svg>${e}</svg>`:e;const i=l.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function c(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function d(e,t,n){const i=e.style,o=(0,r.HD)(n);if(n&&!o){for(const e in n)f(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"")}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const h=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);h.test(n)?e.setProperty((0,r.rs)(i),n.replace(h,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],v={};function m(e,t){const n=v[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return v[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return v[t]=n}return t}const g="http://www.w3.org/1999/xlink";function y(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function b(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",l=!0):"number"===i&&(n=0,l=!0)}try{e[t]=n}catch(u){0}l&&e.removeAttribute(t)}function w(e,t,n,r){e.addEventListener(t,n,r)}function _(e,t,n,r){e.removeEventListener(t,n,r)}function I(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=S(t);if(r){const s=o[t]=x(r,i);w(e,n,s,a)}else s&&(_(e,n,s,a),o[t]=void 0)}}const E=/(?:Once|Passive|Capture)$/;function S(e){let t;if(E.test(e)){let n;t={};while(n=e.match(E))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let k=0;const C=Promise.resolve(),T=()=>k||(C.then((()=>k=0)),k=Date.now());function x(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(A(e,n.value),t,5,[e])};return n.value=e,n.attached=T(),n}function A(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const O=/^on[a-z]/,R=(e,t,n,i,o=!1,s,a,l,u)=>{"class"===t?c(e,i,o):"style"===t?d(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||I(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):N(e,t,i,o))?b(e,t,i,s,a,l,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,o))};function N(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&O.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!O.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const D="transition",F="animation",L=(e,{slots:t})=>(0,i.h)(i.P$,B(e),t);L.displayName="Transition";const P={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},V=L.props=(0,r.l7)({},i.P$.props,P),M=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},U=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function B(e){const t={};for(const r in e)r in P||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:c=a,appearToClass:d=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,v=$(o),m=v&&v[0],g=v&&v[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:I,onBeforeAppear:E=y,onAppear:S=b,onAppearCancelled:k=w}=t,C=(e,t,n)=>{q(e,t?d:l),q(e,t?c:a),n&&n()},T=(e,t)=>{e._isLeaving=!1,q(e,h),q(e,p),q(e,f),t&&t()},x=e=>(t,n)=>{const r=e?S:b,o=()=>C(t,e,n);M(r,[t,o]),H((()=>{q(t,e?u:s),W(t,e?d:l),U(r)||G(t,i,m,o)}))};return(0,r.l7)(t,{onBeforeEnter(e){M(y,[e]),W(e,s),W(e,a)},onBeforeAppear(e){M(E,[e]),W(e,u),W(e,c)},onEnter:x(!1),onAppear:x(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>T(e,t);W(e,h),Q(),W(e,f),H((()=>{e._isLeaving&&(q(e,h),W(e,p),U(_)||G(e,i,g,n))})),M(_,[e,n])},onEnterCancelled(e){C(e,!1),M(w,[e])},onAppearCancelled(e){C(e,!0),M(k,[e])},onLeaveCancelled(e){T(e),M(I,[e])}})}function $(e){if(null==e)return null;if((0,r.Kn)(e))return[j(e.enter),j(e.leave)];{const t=j(e);return[t,t]}}function j(e){const t=(0,r.He)(e);return t}function W(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function q(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function H(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let z=0;function G(e,t,n,r){const i=e._endId=++z,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:l}=K(e,t);if(!s)return r();const u=s+"end";let c=0;const d=()=>{e.removeEventListener(u,h),o()},h=t=>{t.target===e&&++c>=l&&d()};setTimeout((()=>{c<l&&d()}),a+1),e.addEventListener(u,h)}function K(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${D}Delay`),o=r(`${D}Duration`),s=Y(i,o),a=r(`${F}Delay`),l=r(`${F}Duration`),u=Y(a,l);let c=null,d=0,h=0;t===D?s>0&&(c=D,d=s,h=o.length):t===F?u>0&&(c=F,d=u,h=l.length):(d=Math.max(s,u),c=d>0?s>u?D:F:null,h=c?c===D?o.length:l.length:0);const f=c===D&&/\b(transform|all)(,|$)/.test(r(`${D}Property`).toString());return{type:c,timeout:d,propCount:h,hasTransform:f}}function Y(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>J(t)+J(e[n]))))}function J(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Q(){return document.body.offsetHeight}const X=new WeakMap,Z=new WeakMap,ee={name:"TransitionGroup",props:(0,r.l7)({},V,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let s,a;return(0,i.ic)((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!oe(s[0].el,n.vnode.el,t))return;s.forEach(ne),s.forEach(re);const r=s.filter(ie);Q(),r.forEach((e=>{const n=e.el,r=n.style;W(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,q(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const l=(0,o.IU)(e),u=B(l);let c=l.tag||i.HY;s=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,u,r,n))}if(s)for(let e=0;e<s.length;e++){const t=s[e];(0,i.nK)(t,(0,i.U2)(t,u,r,n)),X.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(c,null,a)}}},te=ee;function ne(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function re(e){Z.set(e,e.el.getBoundingClientRect())}function ie(e){const t=X.get(e),n=Z.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function oe(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:o}=K(r);return i.removeChild(r),o}const se=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function ae(e){e.target.composing=!0}function le(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ue={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=se(o);const s=i||o.props&&"number"===o.props.type;w(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),s&&(i=(0,r.He)(i)),e._assign(i)})),n&&w(e,"change",(()=>{e.value=e.value.trim()})),t||(w(e,"compositionstart",ae),w(e,"compositionend",le),w(e,"change",le))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=se(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ce=["ctrl","shift","alt","meta"],de={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ce.some((n=>e[`${n}Key`]&&!t.includes(n)))},he=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=de[t[e]];if(r&&r(n,t))return}return e(n,...r)},fe={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):pe(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),pe(e,!0),r.enter(e)):r.leave(e,(()=>{pe(e,!1)})):pe(e,t))},beforeUnmount(e,{value:t}){pe(e,t)}};function pe(e,t){e.style.display=t?e._vod:"none"}const ve=(0,r.l7)({patchProp:R},u);let me;function ge(){return me||(me=(0,i.Us)(ve))}const ye=(...e)=>{const t=ge().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=be(e);if(!i)return;const o=t._component;(0,r.mf)(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function be(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},2268:function(e,t,n){"use strict";n.d(t,{C_:function(){return d},DM:function(){return D},E9:function(){return ie},F7:function(){return k},Gg:function(){return H},HD:function(){return P},He:function(){return ne},Kn:function(){return M},NO:function(){return E},Nj:function(){return te},Od:function(){return x},PO:function(){return W},Pq:function(){return f},RI:function(){return O},S0:function(){return q},W7:function(){return j},WV:function(){return m},Z6:function(){return _},_A:function(){return K},_N:function(){return N},aU:function(){return Z},dG:function(){return I},e1:function(){return o},fY:function(){return r},hR:function(){return X},hq:function(){return g},ir:function(){return ee},j5:function(){return s},kC:function(){return Q},kJ:function(){return R},kT:function(){return w},l7:function(){return T},mf:function(){return L},rs:function(){return J},tI:function(){return U},tR:function(){return C},yA:function(){return p},yk:function(){return V},zw:function(){return y}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);function s(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=P(r)?c(r):s(r);if(i)for(const e in i)t[e]=i[e]}return t}return P(e)||M(e)?e:void 0}const a=/;(?![^(]*\))/g,l=/:([^]+)/,u=/\/\*.*?\*\//gs;function c(e){const t={};return e.replace(u,"").split(a).forEach((e=>{if(e){const n=e.split(l);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function d(e){let t="";if(P(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=d(e[n]);r&&(t+=r+" ")}else if(M(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const h="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f=r(h);function p(e){return!!e||""===e}function v(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=F(e),r=F(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=V(e),r=V(t),n||r)return e===t;if(n=R(e),r=R(t),n||r)return!(!n||!r)&&v(e,t);if(n=M(e),r=M(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const y=e=>P(e)?e:null==e?"":R(e)||M(e)&&(e.toString===B||!L(e.toString))?JSON.stringify(e,b,2):String(e),b=(e,t)=>t&&t.__v_isRef?b(e,t.value):N(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:D(t)?{[`Set(${t.size})`]:[...t.values()]}:!M(t)||R(t)||W(t)?t:String(t),w={},_=[],I=()=>{},E=()=>!1,S=/^on[^a-z]/,k=e=>S.test(e),C=e=>e.startsWith("onUpdate:"),T=Object.assign,x=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,O=(e,t)=>A.call(e,t),R=Array.isArray,N=e=>"[object Map]"===$(e),D=e=>"[object Set]"===$(e),F=e=>"[object Date]"===$(e),L=e=>"function"===typeof e,P=e=>"string"===typeof e,V=e=>"symbol"===typeof e,M=e=>null!==e&&"object"===typeof e,U=e=>M(e)&&L(e.then)&&L(e.catch),B=Object.prototype.toString,$=e=>B.call(e),j=e=>$(e).slice(8,-1),W=e=>"[object Object]"===$(e),q=e=>P(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),z=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},G=/-(\w)/g,K=z((e=>e.replace(G,((e,t)=>t?t.toUpperCase():"")))),Y=/\B([A-Z])/g,J=z((e=>e.replace(Y,"-$1").toLowerCase())),Q=z((e=>e.charAt(0).toUpperCase()+e.slice(1))),X=z((e=>e?`on${Q(e)}`:"")),Z=(e,t)=>!Object.is(e,t),ee=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},te=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ne=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let re;const ie=()=>re||(re="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},7139:function(e,t,n){"use strict";n.d(t,{MT:function(){return te},oR:function(){return g}});n(7658),n(541);var r=n(3396),i=n(4870);function o(){return s().__VUE_DEVTOOLS_GLOBAL_HOOK__}function s(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,l="devtools-plugin:setup",u="plugin:settings:set";let c,d;function h(){var e;return void 0!==c||("undefined"!==typeof window&&window.performance?(c=!0,d=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(c=!0,d=n.g.perf_hooks.performance):c=!1),c}function f(){return h()?d.now():Date.now()}class p{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const s in e.settings){const t=e.settings[s];n[s]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(o){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(o){}i=e},now(){return f()}},t&&t.on(u,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function v(e,t){const n=e,r=s(),i=o(),u=a&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const e=u?new p(n,i):null,o=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];o.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else i.emit(l,e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var m="store";function g(e){return void 0===e&&(e=null),(0,r.f3)(null!==e?e:m)}function y(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function b(e){return null!==e&&"object"===typeof e}function w(e){return e&&"function"===typeof e.then}function _(e,t){return function(){return e(t)}}function I(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function E(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;k(e,n,[],e._modules.root,!0),S(e,n,t)}function S(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var o=e._wrappedGetters,s={};y(o,(function(t,n){s[n]=_(t,e),Object.defineProperty(e.getters,n,{get:function(){return s[n]()},enumerable:!0})})),e._state=(0,i.qj)({data:t}),e.strict&&R(e),r&&n&&e._withCommit((function(){r.data=null}))}function k(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s],e._modulesNamespaceMap[s]=r),!o&&!i){var a=N(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){a[l]=r.state}))}var u=r.context=C(e,s,n);r.forEachMutation((function(t,n){var r=s+n;x(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;A(e,r,i,u)})),r.forEachGetter((function(t,n){var r=s+n;O(e,r,t,u)})),r.forEachChild((function(r,o){k(e,t,n.concat(o),r,i)}))}function C(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=D(n,r,i),s=o.payload,a=o.options,l=o.type;return a&&a.root||(l=t+l),e.dispatch(l,s)},commit:r?e.commit:function(n,r,i){var o=D(n,r,i),s=o.payload,a=o.options,l=o.type;a&&a.root||(l=t+l),e.commit(l,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return T(e,t)}},state:{get:function(){return N(e.state,n)}}}),i}function T(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function x(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function A(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return w(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function O(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function R(e){(0,r.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function N(e,t){return t.reduce((function(e,t){return e[t]}),e)}function D(e,t,n){return b(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var F="vuex bindings",L="vuex:mutations",P="vuex:actions",V="vuex",M=0;function U(e,t){v({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[F]},(function(n){n.addTimelineLayer({id:L,label:"Vuex Mutations",color:B}),n.addTimelineLayer({id:P,label:"Vuex Actions",color:B}),n.addInspector({id:V,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===V)if(n.filter){var r=[];z(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[H(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===V){var r=n.nodeId;T(t,r),n.state=G(Y(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===V){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(V),n.sendInspectorState(V),n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=M++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:P,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var B=8702998,$=6710886,j=16777215,W={label:"namespaced",textColor:j,backgroundColor:$};function q(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function H(e,t){return{id:t||"root",label:q(t),tags:e.namespaced?[W]:[],children:Object.keys(e._children).map((function(n){return H(e._children[n],t+n+"/")}))}}function z(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[W]:[]}),Object.keys(t._children).forEach((function(i){z(e,t._children[i],n,r+i+"/")}))}function G(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var o=K(t);i.getters=Object.keys(o).map((function(e){return{key:e.endsWith("/")?q(e):e,editable:!1,value:J((function(){return o[e]}))}}))}return i}function K(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,o=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[o]=J((function(){return e[n]}))}else t[n]=J((function(){return e[n]}))})),t}function Y(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var o=e[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?o:o._children}),"root"===t?e:e.root._children)}function J(e){try{return e()}catch(t){return t}}var Q=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},X={namespaced:{configurable:!0}};X.namespaced.get=function(){return!!this._rawModule.namespaced},Q.prototype.addChild=function(e,t){this._children[e]=t},Q.prototype.removeChild=function(e){delete this._children[e]},Q.prototype.getChild=function(e){return this._children[e]},Q.prototype.hasChild=function(e){return e in this._children},Q.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Q.prototype.forEachChild=function(e){y(this._children,e)},Q.prototype.forEachGetter=function(e){this._rawModule.getters&&y(this._rawModule.getters,e)},Q.prototype.forEachAction=function(e){this._rawModule.actions&&y(this._rawModule.actions,e)},Q.prototype.forEachMutation=function(e){this._rawModule.mutations&&y(this._rawModule.mutations,e)},Object.defineProperties(Q.prototype,X);var Z=function(e){this.register([],e,!1)};function ee(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;ee(e.concat(r),t.getChild(r),n.modules[r])}}Z.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Z.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},Z.prototype.update=function(e){ee([],this.root,e)},Z.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new Q(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&y(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},Z.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},Z.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function te(e){return new ne(e)}var ne=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Z(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,s=this,a=s.dispatch,l=s.commit;this.dispatch=function(e,t){return a.call(o,e,t)},this.commit=function(e,t,n){return l.call(o,e,t,n)},this.strict=r;var u=this._modules.root.state;k(this,u,[],this._modules.root),S(this,u),n.forEach((function(e){return e(t)}))},re={state:{configurable:!0}};ne.prototype.install=function(e,t){e.provide(t||m,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&U(e,this)},re.state.get=function(){return this._state.data},re.state.set=function(e){0},ne.prototype.commit=function(e,t,n){var r=this,i=D(e,t,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),l=this._mutations[o];l&&(this._withCommit((function(){l.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},ne.prototype.dispatch=function(e,t){var n=this,r=D(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){0}var l=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){0}t(e)}))}))}},ne.prototype.subscribe=function(e,t){return I(e,this._subscribers,t)},ne.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return I(n,this._actionSubscribers,t)},ne.prototype.watch=function(e,t,n){var i=this;return(0,r.YP)((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},ne.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},ne.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),k(this,this.state,e,this._modules.get(e),n.preserveState),S(this,this.state)},ne.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=N(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),E(this)},ne.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},ne.prototype.hotUpdate=function(e){this._modules.update(e),E(this,!0)},ne.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(ne.prototype,re);se((function(e,t){var n={};return ie(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=ae(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),se((function(e,t){var n={};return ie(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=ae(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),se((function(e,t){var n={};return ie(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||ae(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),se((function(e,t){var n={};return ie(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=ae(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function ie(e){return oe(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function oe(e){return Array.isArray(e)||b(e)}function se(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ae(e,t,n){var r=e._modulesNamespaceMap[n];return r}},9684:function(e,t,n){"use strict";n.d(t,{Jn:function(){return G},KN:function(){return J},Mq:function(){return Y},Xd:function(){return j},ZF:function(){return K},qX:function(){return W}});n(7658);var r=n(7142),i=n(5168),o=n(223),s=n(3831);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(l(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function l(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const u="@firebase/app",c="0.9.1",d=new i.Yd("@firebase/app"),h="@firebase/app-compat",f="@firebase/analytics-compat",p="@firebase/analytics",v="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",y="@firebase/auth-compat",b="@firebase/database",w="@firebase/database-compat",_="@firebase/functions",I="@firebase/functions-compat",E="@firebase/installations",S="@firebase/installations-compat",k="@firebase/messaging",C="@firebase/messaging-compat",T="@firebase/performance",x="@firebase/performance-compat",A="@firebase/remote-config",O="@firebase/remote-config-compat",R="@firebase/storage",N="@firebase/storage-compat",D="@firebase/firestore",F="@firebase/firestore-compat",L="firebase",P="9.16.0",V="[DEFAULT]",M={[u]:"fire-core",[h]:"fire-core-compat",[p]:"fire-analytics",[f]:"fire-analytics-compat",[m]:"fire-app-check",[v]:"fire-app-check-compat",[g]:"fire-auth",[y]:"fire-auth-compat",[b]:"fire-rtdb",[w]:"fire-rtdb-compat",[_]:"fire-fn",[I]:"fire-fn-compat",[E]:"fire-iid",[S]:"fire-iid-compat",[k]:"fire-fcm",[C]:"fire-fcm-compat",[T]:"fire-perf",[x]:"fire-perf-compat",[A]:"fire-rc",[O]:"fire-rc-compat",[R]:"fire-gcs",[N]:"fire-gcs-compat",[D]:"fire-fst",[F]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},U=new Map,B=new Map;function $(e,t){try{e.container.addComponent(t)}catch(n){d.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function j(e){const t=e.name;if(B.has(t))return d.debug(`There were multiple attempts to register component ${t}.`),!1;B.set(t,e);for(const n of U.values())$(n,e);return!0}function W(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},H=new o.LL("app","Firebase",q);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=P;function K(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:V,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw H.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw H.create("no-options");const a=U.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw H.create("duplicate-app",{appName:s})}const l=new r.H0(s);for(const r of B.values())l.addComponent(r);const u=new z(n,i,l);return U.set(s,u),u}function Y(e=V){const t=U.get(e);if(!t&&e===V)return K();if(!t)throw H.create("no-app",{appName:e});return t}function J(e,t,n){var i;let o=null!==(i=M[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void d.warn(e.join(" "))}j(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q="firebase-heartbeat-database",X=1,Z="firebase-heartbeat-store";let ee=null;function te(){return ee||(ee=(0,s.X3)(Q,X,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Z)}}}).catch((e=>{throw H.create("idb-open",{originalErrorMessage:e.message})}))),ee}async function ne(e){try{const t=await te();return t.transaction(Z).objectStore(Z).get(ie(e))}catch(t){if(t instanceof o.ZR)d.warn(t.message);else{const e=H.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});d.warn(e.message)}}}async function re(e,t){try{const n=await te(),r=n.transaction(Z,"readwrite"),i=r.objectStore(Z);return await i.put(t,ie(e)),r.done}catch(n){if(n instanceof o.ZR)d.warn(n.message);else{const e=H.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});d.warn(e.message)}}}function ie(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=1024,se=2592e6;class ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ce(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=le();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=se})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=le(),{heartbeatsToSend:t,unsentEntries:n}=ue(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function le(){const e=new Date;return e.toISOString().substring(0,10)}function ue(e,t=oe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),de(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),de(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ce{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function de(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){j(new r.wA("platform-logger",(e=>new a(e)),"PRIVATE")),j(new r.wA("heartbeat",(e=>new ae(e)),"PRIVATE")),J(u,c,e),J(u,c,"esm2017"),J("fire-js","")}he("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},4466:function(e,t,n){"use strict";n.d(t,{IH:function(){return yt}});n(7658);var r=n(9684),i=n(5168),o=n(223),s=n(7142),a=(n(2801),n(3831));const l="@firebase/installations",u="0.6.1",c=1e4,d=`w:${u}`,h="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",p=36e5,v="installations",m="Installations",g={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},y=new o.LL(v,m,g);function b(e){return e instanceof o.ZR&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w({projectId:e}){return`${f}/projects/${e}/installations`}function _(e){return{token:e.token,requestStatus:2,expiresIn:C(e.expiresIn),creationTime:Date.now()}}async function I(e,t){const n=await t.json(),r=n.error;return y.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function E({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function S(e,{refreshToken:t}){const n=E(e);return n.append("Authorization",T(t)),n}async function k(e){const t=await e();return t.status>=500&&t.status<600?e():t}function C(e){return Number(e.replace("s","000"))}function T(e){return`${h} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=w(e),i=E(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={fid:n,authVersion:h,appId:e.appId,sdkVersion:d},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await k((()=>fetch(r,a)));if(l.ok){const e=await l.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:_(e.authToken)};return t}throw await I("Create Installation",l)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=/^[cdef][\w-]{21}$/,N="";function D(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=F(e);return R.test(n)?n:N}catch(e){return N}}function F(e){const t=O(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=new Map;function V(e,t){const n=L(e);M(n,t),U(n,t)}function M(e,t){const n=P.get(e);if(n)for(const r of n)r(t)}function U(e,t){const n=$();n&&n.postMessage({key:e,fid:t}),j()}let B=null;function $(){return!B&&"BroadcastChannel"in self&&(B=new BroadcastChannel("[Firebase] FID Change"),B.onmessage=e=>{M(e.data.key,e.data.fid)}),B}function j(){0===P.size&&B&&(B.close(),B=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="firebase-installations-database",q=1,H="firebase-installations-store";let z=null;function G(){return z||(z=(0,a.X3)(W,q,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(H)}}})),z}async function K(e,t){const n=L(e),r=await G(),i=r.transaction(H,"readwrite"),o=i.objectStore(H),s=await o.get(n);return await o.put(t,n),await i.done,s&&s.fid===t.fid||V(e,t.fid),t}async function Y(e){const t=L(e),n=await G(),r=n.transaction(H,"readwrite");await r.objectStore(H).delete(t),await r.done}async function J(e,t){const n=L(e),r=await G(),i=r.transaction(H,"readwrite"),o=i.objectStore(H),s=await o.get(n),a=t(s);return void 0===a?await o.delete(n):await o.put(a,n),await i.done,!a||s&&s.fid===a.fid||V(e,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){let t;const n=await J(e.appConfig,(n=>{const r=X(n),i=Z(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===N?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function X(e){const t=e||{fid:D(),registrationStatus:0};return re(t)}function Z(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(y.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ee(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:te(e)}:{installationEntry:t}}async function ee(e,t){try{const n=await x(e,t);return K(e.appConfig,n)}catch(n){throw b(n)&&409===n.customData.serverCode?await Y(e.appConfig):await K(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function te(e){let t=await ne(e.appConfig);while(1===t.registrationStatus)await A(100),t=await ne(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Q(e);return n||t}return t}function ne(e){return J(e,(e=>{if(!e)throw y.create("installation-not-found");return re(e)}))}function re(e){return ie(e)?{fid:e.fid,registrationStatus:0}:e}function ie(e){return 1===e.registrationStatus&&e.registrationTime+c<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe({appConfig:e,heartbeatServiceProvider:t},n){const r=se(e,n),i=S(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={installation:{sdkVersion:d,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await k((()=>fetch(r,a)));if(l.ok){const e=await l.json(),t=_(e);return t}throw await I("Generate Auth Token",l)}function se(e,{fid:t}){return`${w(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t=!1){let n;const r=await J(e.appConfig,(r=>{if(!de(r))throw y.create("not-registered");const i=r.authToken;if(!t&&he(i))return r;if(1===i.requestStatus)return n=le(e,t),r;{if(!navigator.onLine)throw y.create("app-offline");const t=pe(r);return n=ce(e,t),t}})),i=n?await n:r.authToken;return i}async function le(e,t){let n=await ue(e.appConfig);while(1===n.authToken.requestStatus)await A(100),n=await ue(e.appConfig);const r=n.authToken;return 0===r.requestStatus?ae(e,t):r}function ue(e){return J(e,(e=>{if(!de(e))throw y.create("not-registered");const t=e.authToken;return ve(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function ce(e,t){try{const n=await oe(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await K(e.appConfig,r),n}catch(n){if(!b(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await K(e.appConfig,n)}else await Y(e.appConfig);throw n}}function de(e){return void 0!==e&&2===e.registrationStatus}function he(e){return 2===e.requestStatus&&!fe(e)}function fe(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+p}function pe(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ve(e){return 1===e.requestStatus&&e.requestTime+c<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function me(e){const t=e,{installationEntry:n,registrationPromise:r}=await Q(t);return r?r.catch(console.error):ae(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ge(e,t=!1){const n=e;await ye(n);const r=await ae(n,t);return r.token}async function ye(e){const{registrationPromise:t}=await Q(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function be(e){if(!e||!e.options)throw we("App Configuration");if(!e.name)throw we("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw we(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function we(e){return y.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="installations",Ie="installations-internal",Ee=e=>{const t=e.getProvider("app").getImmediate(),n=be(t),i=(0,r.qX)(t,"heartbeat"),o={app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return o},Se=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r.qX)(t,_e).getImmediate(),i={getId:()=>me(n),getToken:e=>ge(n,e)};return i};function ke(){(0,r.Xd)(new s.wA(_e,Ee,"PUBLIC")),(0,r.Xd)(new s.wA(Ie,Se,"PRIVATE"))}ke(),(0,r.KN)(l,u),(0,r.KN)(l,u,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ce="analytics",Te="firebase_id",xe="origin",Ae=6e4,Oe="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Re="https://www.googletagmanager.com/gtag/js",Ne=new i.Yd("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function De(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Fe(e,t){const n=document.createElement("script");n.src=`${Re}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Le(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Pe(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const e=await De(n),r=e.find((e=>e.measurementId===i));r&&await t[r.appId]}}catch(a){Ne.error(a)}e("config",i,o)}async function Ve(e,t,n,r,i){try{let o=[];if(i&&i["send_to"]){let e=i["send_to"];Array.isArray(e)||(e=[e]);const r=await De(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Ne.error(o)}}function Me(e,t,n,r){async function i(i,o,s){try{"event"===i?await Ve(e,t,n,o,s):"config"===i?await Pe(e,t,n,r,o,s):"consent"===i?e("consent","update",s):e("set",o)}catch(a){Ne.error(a)}}return i}function Ue(e,t,n,r,i){let o=function(...e){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(o=window[i]),window[i]=Me(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function Be(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Re)&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},je=new o.LL("analytics","Analytics",$e),We=30,qe=1e3;class He{constructor(e={},t=qe){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ze=new He;function Ge(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ke(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Ge(r)},o=Oe.replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw je.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}async function Ye(e,t=ze,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw je.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw je.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ze;return setTimeout((async()=>{a.abort()}),void 0!==n?n:Ae),Je({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Je(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=ze){var s;const{appId:a,measurementId:l}=e;try{await Qe(r,t)}catch(u){if(l)return Ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${null===u||void 0===u?void 0:u.message}]`),{appId:a,measurementId:l};throw u}try{const t=await Ke(e);return i.deleteThrottleMetadata(a),t}catch(u){const t=u;if(!Xe(t)){if(i.deleteThrottleMetadata(a),l)return Ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${null===t||void 0===t?void 0:t.message}]`),{appId:a,measurementId:l};throw u}const c=503===Number(null===(s=null===t||void 0===t?void 0:t.customData)||void 0===s?void 0:s.httpStatus)?(0,o.$s)(n,i.intervalMillis,We):(0,o.$s)(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(a,d),Ne.debug(`Calling attemptFetch again in ${c} millis`),Je(e,d,r,i)}}function Qe(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(o),r(je.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Xe(e){if(!(e instanceof o.ZR)||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class Ze{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et,tt;async function nt(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}function rt(e){tt=e}function it(e){et=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(){if(!(0,o.hl)())return Ne.warn(je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,o.eu)()}catch(e){return Ne.warn(je.create("indexeddb-unavailable",{errorInfo:null===e||void 0===e?void 0:e.toString()}).message),!1}return!0}async function st(e,t,n,r,i,o,s){var a;const l=Ye(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Ne.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Ne.error(e))),t.push(l);const u=ot().then((e=>e?r.getId():void 0)),[c,d]=await Promise.all([l,u]);Be(o)||Fe(o,c.measurementId),tt&&(i("consent","default",tt),rt(void 0)),i("js",new Date);const h=null!==(a=null===s||void 0===s?void 0:s.config)&&void 0!==a?a:{};return h[xe]="firebase",h.update=!0,null!=d&&(h[Te]=d),i("config",c.measurementId,h),et&&(i("set",et),it(void 0)),c.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.app=e}_delete(){return delete lt[this.app.options.appId],Promise.resolve()}}let lt={},ut=[];const ct={};let dt,ht,ft="dataLayer",pt="gtag",vt=!1;function mt(){const e=[];if((0,o.ru)()&&e.push("This is a browser extension environment."),(0,o.zI)()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=je.create("invalid-analytics-context",{errorInfo:t});Ne.warn(n.message)}}function gt(e,t,n){mt();const r=e.options.appId;if(!r)throw je.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw je.create("no-api-key");Ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=lt[r])throw je.create("already-exists",{id:r});if(!vt){Le(ft);const{wrappedGtag:e,gtagCore:t}=Ue(lt,ut,ct,ft,pt);ht=e,dt=t,vt=!0}lt[r]=st(e,ut,ct,t,dt,ft,n);const i=new at(e);return i}function yt(e=(0,r.Mq)()){e=(0,o.m9)(e);const t=(0,r.qX)(e,Ce);return t.isInitialized()?t.getImmediate():bt(e)}function bt(e,t={}){const n=(0,r.qX)(e,Ce);if(n.isInitialized()){const e=n.getImmediate();if((0,o.vZ)(t,n.getOptions()))return e;throw je.create("already-initialized")}const i=n.initialize({options:t});return i}function wt(e,t,n,r){e=(0,o.m9)(e),nt(ht,lt[e.app.options.appId],t,n,r).catch((e=>Ne.error(e)))}const _t="@firebase/analytics",It="0.9.1";function Et(){function e(e){try{const t=e.getProvider(Ce).getImmediate();return{logEvent:(e,n,r)=>wt(t,e,n,r)}}catch(t){throw je.create("interop-component-reg-failed",{reason:t})}}(0,r.Xd)(new s.wA(Ce,((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return gt(n,r,t)}),"PUBLIC")),(0,r.Xd)(new s.wA("analytics-internal",e,"PRIVATE")),(0,r.KN)(_t,It),(0,r.KN)(_t,It,"esm2017")}Et()},7795:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(9684),i="firebase",o="9.16.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,o,"app")},6696:function(e,t,n){"use strict";n.d(t,{w9:function(){return Ze},Xb:function(){return yt},h8:function(){return xt},v0:function(){return Rr},Aj:function(){return Ct},aF:function(){return vt},LS:function(){return gt},e5:function(){return bt},w7:function(){return Tt},gQ:function(){return It},ck:function(){return _t}});n(7658);var r=n(223),i=n(9684),o=n(5168);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(7142);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=l,c=new r.LL("auth","Firebase",l()),d=new o.Yd("@firebase/auth");function h(e,...t){d.logLevel<=o["in"].ERROR&&d.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function v(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r.LL("auth","Firebase",i);return o.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function g(e,t,...n){if(!e)throw m(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw h(t),new Error(t)}function b(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function _(e){b(e instanceof Function,"Expected a class definition");let t=w.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,w.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function E(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},D=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,i,o={}){return P(e,o,(async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),R.fetch()(M(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))}))}async function P(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),t);try{const t=new U(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw B(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw B(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw B(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw v(e,a,s);f(e,a)}}catch(o){if(o instanceof r.ZR)throw o;f(e,"network-request-failed")}}async function V(e,t,n,r,i={}){const o=await L(e,t,n,r,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{_serverResponse:o}),o}function M(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?O(e.config,i):`${e.config.apiScheme}://${i}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),D.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function j(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),o=z(i);g(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:W(H(o.auth_time)),issuedAtTime:W(H(o.iat)),expirationTime:W(H(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function H(e){return 1e3*Number(e)}function z(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return h("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(o){return h("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function G(e){const t=z(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&Y(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,j(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),c=!!l&&u,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Q(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function Z(e){const t=(0,r.m9)(e);await X(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await P(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=M(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(g("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:I,stsTokenManager:E}=t;g(b&&E,e,"internal-error");const S=re.fromJSON(this.name,E);g("string"===typeof b,e,"internal-error"),ie(c,e.name),ie(d,e.name),g("boolean"===typeof w,e,"internal-error"),g("boolean"===typeof _,e,"internal-error"),ie(h,e.name),ie(f,e.name),ie(p,e.name),ie(v,e.name),ie(m,e.name),ie(y,e.name);const k=new oe({uid:b,auth:e,email:d,emailVerified:w,displayName:c,isAnonymous:_,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:S,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(k.providerData=I.map((e=>Object.assign({},e)))),v&&(k._redirectEventId=v),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await X(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=le(this.userKey,r.apiKey,i),this.fullPersistenceKey=le("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(_(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||_(ae);const o=le(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=oe._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(l){}}))),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(ve(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,r.z$)()){return/firefox\//i.test(e)}function he(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function ve(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ge(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function be(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return(0,r.w1)()&&10===document.documentMode}function _e(e=(0,r.z$)()){return ye(e)||ve(e)||ge(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Ie(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=ce((0,r.z$)());break;case"Worker":n=`${ce((0,r.z$)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Te(this),this.idTokenSubscription=new Te(this),this.beforeStateQueue=new Se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await X(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return g(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ce(e){return(0,r.m9)(e)}class Te{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function xe(e,t,n){const r=Ce(e);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Ae(t),{host:s,port:a}=Oe(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ne()}function Ae(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Oe(e){const t=Ae(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Re(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Re(t)}}}function Re(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ne(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Le(e,t){return V(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function Pe(e,t){return L(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function Ve(e,t){return Pe(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Me(e,t){return V(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function Ue(e,t){return V(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends De{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Be(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Be(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Le(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Me(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Fe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ue(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return V(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="http://localhost";class We extends De{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new We(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new We(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return $e(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,$e(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$e(e,t)}buildRequest(){const e={requestUri:je,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function He(e,t){return V(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function ze(e,t){const n=await V(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw B(e,"account-exists-with-different-credential",n);return n}const Ge={["USER_NOT_FOUND"]:"user-not-found"};async function Ke(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return V(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,n),Ge)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends De{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ye({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ye({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return He(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ze(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ke(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ye({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qe(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||t||e}class Xe{constructor(e){var t,n,i,o,s,a;const l=(0,r.zd)((0,r.pd)(e)),u=null!==(t=l["apiKey"])&&void 0!==t?t:null,c=null!==(n=l["oobCode"])&&void 0!==n?n:null,d=Je(null!==(i=l["mode"])&&void 0!==i?i:null);g(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=null!==(o=l["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=l["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Qe(e);try{return new Xe(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(){this.providerId=Ze.PROVIDER_ID}static credential(e,t){return Be._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Xe.parseLink(t);return g(n,"argument-error"),Be._fromEmailAndCode(e,n.code,n.tenantId)}}Ze.PROVIDER_ID="password",Ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends et{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends tt{constructor(){super("facebook.com")}static credential(e){return We._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.FACEBOOK_SIGN_IN_METHOD="facebook.com",nt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends tt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return We._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com",rt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it extends tt{constructor(){super("github.com")}static credential(e){return We._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch(t){return null}}}it.GITHUB_SIGN_IN_METHOD="github.com",it.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot extends tt{constructor(){super("twitter.com")}static credential(e,t){return We._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ot.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function st(e,t){return V(e,"POST","/v1/accounts:signUp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot.TWITTER_SIGN_IN_METHOD="twitter.com",ot.PROVIDER_ID="twitter.com";class at{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=lt(n),s=new at({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=lt(n);return new at({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function lt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ut.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ut(e,t,n,r)}}function ct(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ut._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return at._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ht(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await K(e,ct(r,i,t,e),n);g(o.idToken,r,"internal-error");const s=z(o.idToken);g(s,r,"internal-error");const{sub:a}=s;return g(e.uid===a,r,"user-mismatch"),at._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t,n=!1){const r="signIn",i=await ct(e,r,t),o=await at._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function pt(e,t){return ft(Ce(e),t)}async function vt(e,t){return ht((0,r.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mt(e,t,n){var r;g((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),g("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(g(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(g(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(e,t,n){const i=(0,r.m9)(e),o={requestType:"PASSWORD_RESET",email:t};n&&mt(i,o,n),await Ve(i,o)}async function yt(e,t,n){const r=Ce(e),i=await st(r,{returnSecureToken:!0,email:t,password:n}),o=await at._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function bt(e,t,n){return pt((0,r.m9)(e),Ze.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function wt(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.m9)(e),o=await i.getIdToken(),s={idToken:o,displayName:t,photoUrl:n,returnSecureToken:!0},a=await K(i,wt(i.auth,s));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const l=i.providerData.find((({providerId:e})=>"password"===e));l&&(l.displayName=i.displayName,l.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function It(e,t){return Et((0,r.m9)(e),null,t)}async function Et(e,t,n){const{auth:r}=e,i=await e.getIdToken(),o={idToken:i,returnSecureToken:!0};t&&(o.email=t),n&&(o.password=n);const s=await K(e,Fe(r,o));await e._updateTokensIfNecessary(s,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function kt(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function Ct(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}function Tt(e){return(0,r.m9)(e).signOut()}async function xt(e){return(0,r.m9)(e).delete()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function At(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function Ot(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}new WeakMap;const Rt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Rt,"1"),this.storage.removeItem(Rt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){const e=(0,r.z$)();return he(e)||ye(e)}const Ft=1e3,Lt=10;class Pt extends Nt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dt()&&Ie(),this.fallbackToPolling=_e(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);we()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Lt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Ft)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pt.type="LOCAL";const Vt=Pt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Nt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Mt.type="SESSION";const Ut=Mt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new $t(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await Bt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t.receivers=[];class Wt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const l=jt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return window}function Ht(e){qt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return"undefined"!==typeof qt()["WorkerGlobalScope"]&&"function"===typeof qt()["importScripts"]}async function Gt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Kt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Yt(){return zt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="firebaseLocalStorageDb",Qt=1,Xt="firebaseLocalStorage",Zt="fbase_key";class en{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function tn(e,t){return e.transaction([Xt],t?"readwrite":"readonly").objectStore(Xt)}function nn(){const e=indexedDB.deleteDatabase(Jt);return new en(e).toPromise()}function rn(){const e=indexedDB.open(Jt,Qt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Xt,{keyPath:Zt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Xt)?t(n):(n.close(),await nn(),t(await rn()))}))}))}async function on(e,t,n){const r=tn(e,!0).put({[Zt]:t,value:n});return new en(r).toPromise()}async function sn(e,t){const n=tn(e,!1).get(t),r=await new en(n).toPromise();return void 0===r?null:r.value}function an(e,t){const n=tn(e,!0).delete(t);return new en(n).toPromise()}const ln=800,un=3;class cn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await rn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>un)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$t._getInstance(Yt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Gt(),!this.activeServiceWorker)return;this.sender=new Wt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Kt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rn();return await on(e,Rt,"1"),await an(e,Rt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>on(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>sn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>an(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=tn(e,!1).getAll();return new en(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),ln)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}cn.type="LOCAL";const dn=cn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function fn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function vn(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",pn().appendChild(r)}))}function mn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
mn("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn="recaptcha";async function yn(e,t,n){var r;const i=await n.verify();try{let o;if(g("string"===typeof i,e,"argument-error"),g(n.type===gn,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){g("enroll"===t.type,e,"internal-error");const n=await At(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;g(n,e,"missing-multi-factor-info");const s=await hn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await qe(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn{constructor(e){this.providerId=bn.PROVIDER_ID,this.auth=Ce(e)}verifyPhoneNumber(e,t){return yn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Ye._fromVerification(e,t)}static credentialFromResult(e){const t=e;return bn.credentialFromTaggedObject(t)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ye._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wn(e,t){return t?_(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn.PROVIDER_ID="phone",bn.PHONE_SIGN_IN_METHOD="phone";class _n extends De{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $e(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $e(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $e(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function In(e){return ft(e.auth,new _n(e),e.bypassAuthState)}function En(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),ht(n,new _n(e),e.bypassAuthState)}async function Sn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),dt(n,new _n(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return In;case"linkViaPopup":case"linkViaRedirect":return Sn;case"reauthViaPopup":case"reauthViaRedirect":return En;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new A(2e3,1e4);class Tn extends kn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=jt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Cn.get())};e()}}Tn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xn="pendingRedirect",An=new Map;class On extends kn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=An.get(this.auth._key());if(!e){try{const t=await Rn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}An.set(this.auth._key(),e)}return this.bypassAuthState||An.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Rn(e,t){const n=Fn(t),r=Dn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Nn(e,t){An.set(e._key(),t)}function Dn(e){return _(e._redirectPersistence)}function Fn(e){return le(xn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(e,t,n=!1){const r=Ce(e),i=wn(r,t),o=new On(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pn=6e5;class Vn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Bn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Un(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mn(e))}saveEventToCache(e){this.cachedEventUids.add(Mn(e)),this.lastProcessedEventTime=Date.now()}}function Mn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Un({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Bn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Un(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wn=/^https?/;async function qn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await $n(e);for(const r of t)try{if(Hn(r))return}catch(n){}f(e,"unauthorized-domain")}function Hn(e){const t=S(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Wn.test(n))return!1;if(jn.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new A(3e4,6e4);function Gn(){const e=qt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Kn(e){return new Promise(((t,n)=>{var r,i,o;function s(){Gn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Gn(),n(p(e,"network-request-failed"))},timeout:zn.get()})}if(null===(i=null===(r=qt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=qt().gapi)||void 0===o?void 0:o.load)){const t=mn("iframefcb");return qt()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},vn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Yn=null,e}))}let Yn=null;function Jn(e){return Yn=Yn||Kn(e),Yn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new A(5e3,15e3),Xn="__/auth/iframe",Zn="emulator/auth/iframe",er={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nr(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,Zn):`https://${e.config.authDomain}/${Xn}`,o={apiKey:t.apiKey,appName:e.name,v:i.Jn},s=tr.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function rr(e){const t=await Jn(e),n=qt().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:nr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:er,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=qt().setTimeout((()=>{r(i)}),Qn.get());function s(){qt().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},or=500,sr=600,ar="_blank",lr="http://localhost";class ur{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function cr(e,t,n,i=or,o=sr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u=Object.assign(Object.assign({},ir),{width:i.toString(),height:o.toString(),top:s,left:a}),c=(0,r.z$)().toLowerCase();n&&(l=fe(c)?ar:n),de(c)&&(t=t||lr,u.scrollbars="yes");const d=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(c)&&"_self"!==l)return dr(t||"",l),new ur(null);const h=window.open(t||"",l,d);g(h,e,"popup-blocked");try{h.focus()}catch(f){}return new ur(h)}function dr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="__/auth/handler",fr="emulator/auth/handler";function pr(e,t,n,o,s,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.Jn,eventId:s};if(t instanceof et){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof tt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const u=l;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${vr(e)}?${(0,r.xO)(u).slice(1)}`}function vr({config:e}){return e.emulator?O(e,fr):`https://${e.authDomain}/${hr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="webStorageSupport";class gr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ut,this._completeRedirectFn=Ln,this._overrideRedirectResult=Nn}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=pr(e,t,n,S(),r);return cr(e,o,jt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Ht(pr(e,t,n,S(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await rr(e),n=new Vn(e);return t.register("authEvent",(t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(mr,{type:mr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[mr];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _e()||he()||ye()}}const yr=gr;class br{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class wr extends br{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new wr(e)}_finalizeEnroll(e,t,n){return Ot(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return fn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class _r{constructor(){}static assertion(e){return wr._fromCredential(e)}}_r.FACTOR_ID="phone";var Ir="@firebase/auth",Er="0.21.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Cr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((t,r)=>{g(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),g(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},a=new ke(t,r,i);return E(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Ce(e.getProvider("auth").getImmediate());return(e=>new Sr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(Ir,Er,kr(e)),(0,i.KN)(Ir,Er,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=300,xr=(0,r.Pz)("authIdTokenMaxAge")||Tr;let Ar=null;const Or=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xr)return;const i=null===n||void 0===n?void 0:n.token;Ar!==i&&(Ar=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Rr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=I(e,{popupRedirectResolver:yr,persistence:[dn,Vt,Ut]}),o=(0,r.Pz)("authTokenSyncURL");if(o){const e=Or(o);kt(n,e,(()=>e(n.currentUser))),St(n,(t=>e(t)))}const s=(0,r.q4)("auth");return s&&xe(n,`http://${s}`),n}Cr("Browser")},36:function(e,t,n){"use strict";n.d(t,{ET:function(){return Rd},hJ:function(){return vc},B$:function(){return mc},oe:function(){return Od},JU:function(){return gc},QT:function(){return Cd},PL:function(){return xd},ad:function(){return Rc},cf:function(){return Nd},IO:function(){return dd},r7:function(){return Ad},ar:function(){return fd}});n(7658),n(2801);var r,i=n(9684),o=n(7142),s=n(5168),a=n(223),l=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),u={},c=c||{},d=l||self;function h(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function v(e){return Object.prototype.hasOwnProperty.call(e,m)&&e[m]||(e[m]=++g)}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function b(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function w(e,t,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:b,w.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var S=0;E.prototype.s=!1,E.prototype.na=function(){this.s||(this.s=!0,this.M(),0==S)||v(this)},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function C(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function T(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function x(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",h,t),d.removeEventListener("test",h,t)}catch(n){}return e}();function O(e){return/^[\s\xa0]*$/.test(e)}var R=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function N(e,t){return e<t?-1:e>t?1:0}function D(){var e=d.navigator;return e&&(e=e.userAgent)?e:""}function F(e){return-1!=D().indexOf(e)}function L(e){return L[" "](e),e}function P(e){var t=Y;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}L[" "]=h;var V,M=F("Opera"),U=F("Trident")||F("MSIE"),B=F("Edge"),$=B||U,j=F("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),W=-1!=D().toLowerCase().indexOf("webkit")&&!F("Edge");function q(){var e=d.document;return e?e.documentMode:void 0}e:{var H="",z=function(){var e=D();return j?/rv:([^\);]+)(\)|;)/.exec(e):B?/Edge\/([\d\.]+)/.exec(e):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):W?/WebKit\/(\S+)/.exec(e):M?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(z&&(H=z?z[1]:""),U){var G=q();if(null!=G&&G>parseFloat(H)){V=String(G);break e}}V=H}var K,Y={};function J(){return P((function(){let e=0;const t=R(String(V)).split("."),n=R("9").split("."),r=Math.max(t.length,n.length);for(let s=0;0==e&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;e=N(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||N(0==i[2].length,0==o[2].length)||N(i[2],o[2]),i=i[3],o=o[3]}while(0==e)}return 0<=e}))}if(d.document&&U){var Q=q();K=Q||(parseInt(V,10)||void 0)}else K=void 0;var X=K;function Z(e,t){if(x.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(j){e:{try{L(t.nodeName);var i=!0;break e}catch(o){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.X.h.call(this)}}I(Z,x);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ne,this.ba=this.ea=!1}function ie(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function oe(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function se(e){const t={};for(const n in e)t[n]=e[n];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function le(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ae.length;t++)n=ae[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ue(e){this.src=e,this.g={},this.h=0}function ce(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=k(i,t);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ba&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}ue.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=de(e,t,r,i);return-1<s?(t=e[s],n||(t.ea=!1)):(t=new re(t,this.src,o,!!r,i),t.ea=n,e.push(t)),t};var he="closure_lm_"+(1e6*Math.random()|0),fe={};function pe(e,t,n,r,i){if(r&&r.once)return ge(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)pe(e,t[o],n,r,i);return null}return n=Se(n),e&&e[te]?e.N(t,n,p(r)?!!r.capture:!!r,i):ve(e,t,n,!1,r,i)}function ve(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=p(i)?!!i.capture:!!i,a=Ie(e);if(a||(e[he]=a=new ue(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=me(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)A||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(we(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function me(){function e(n){return t.call(e.src,e.listener,n)}const t=_e;return e}function ge(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)ge(e,t[o],n,r,i);return null}return n=Se(n),e&&e[te]?e.O(t,n,p(r)?!!r.capture:!!r,i):ve(e,t,n,!0,r,i)}function ye(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)ye(e,t[o],n,r,i);else r=p(r)?!!r.capture:!!r,n=Se(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=de(o,n,r,i),-1<n&&(ie(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=Ie(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,i)),(n=-1<e?t[e]:null)&&be(n))}function be(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])ce(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(we(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ie(t))?(ce(n,e),0==n.h&&(n.src=null,t[he]=null)):ie(e)}}}function we(e){return e in fe?fe[e]:fe[e]="on"+e}function _e(e,t){if(e.ba)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&be(e),e=n.call(r,t)}return e}function Ie(e){return e=e[he],e instanceof ue?e:null}var Ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function Se(e){return"function"===typeof e?e:(e[Ee]||(e[Ee]=function(t){return e.handleEvent(t)}),e[Ee])}function ke(){E.call(this),this.i=new ue(this),this.P=this,this.I=null}function Ce(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new x(t,e);else if(t instanceof x)t.target=t.target||e;else{var i=t;t=new x(r,e),le(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=Te(s,r,!0,t)&&i}if(s=t.g=e,i=Te(s,r,!0,t)&&i,i=Te(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=Te(s,r,!1,t)&&i}function Te(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&ce(e.i,s),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}I(ke,E),ke.prototype[te]=!0,ke.prototype.removeEventListener=function(e,t,n,r){ye(this,e,t,n,r)},ke.prototype.M=function(){if(ke.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.I=null},ke.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ke.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var xe=d.JSON.stringify;function Ae(){var e=Me;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Oe{constructor(){this.h=this.g=null}add(e,t){const n=Ne.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Re,Ne=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new De),(e=>e.reset()));class De{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Fe(e){d.setTimeout((()=>{throw e}),0)}function Le(e,t){Re||Pe(),Ve||(Re(),Ve=!0),Me.add(e,t)}function Pe(){var e=d.Promise.resolve(void 0);Re=function(){e.then(Ue)}}var Ve=!1,Me=new Oe;function Ue(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(n){Fe(n)}var t=Ne;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ve=!1}function Be(e,t){ke.call(this),this.h=e||1,this.g=t||d,this.j=w(this.lb,this),this.l=Date.now()}function $e(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function je(e,t,n){if("function"===typeof e)n&&(e=w(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=w(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function We(e){e.g=je((()=>{e.g=null,e.i&&(e.i=!1,We(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}I(Be,ke),r=Be.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ce(this,"tick"),this.ca&&($e(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Be.X.M.call(this),$e(this),delete this.g};class qe extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:We(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(e){E.call(this),this.h=e,this.g={}}I(He,E);var ze=[];function Ge(e,t,n,r){Array.isArray(n)||(n&&(ze[0]=n.toString()),n=ze);for(var i=0;i<n.length;i++){var o=pe(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function Ke(e){oe(e.g,(function(e,t){this.g.hasOwnProperty(t)&&be(e)}),e),e.g={}}function Ye(){this.g=!0}function Je(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");s=2<=d.length&&"type"==d[1]?s+(c+"=")+u+"&":s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s}))}function Qe(e,t,n,r,i,o,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+s}))}function Xe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,n)+(r?" "+r:"")}))}function Ze(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return xe(n)}catch(a){return t}}He.prototype.M=function(){He.X.M.call(this),Ke(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ye.prototype.Aa=function(){this.g=!1},Ye.prototype.info=function(){};var tt={},nt=null;function rt(){return nt=nt||new ke}function it(e){x.call(this,tt.Pa,e)}function ot(e){const t=rt();Ce(t,new it(t))}function st(e,t){x.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=rt();Ce(t,new st(t,e))}function lt(e,t){x.call(this,tt.Qa,e),this.size=t}function ut(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",I(it,x),tt.STAT_EVENT="statevent",I(st,x),tt.Qa="timingevent",I(lt,x);var ct={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},dt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ht(){}function ft(e){return e.h||(e.h=e.i())}function pt(){}ht.prototype.h=null;var vt,mt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function gt(){x.call(this,"d")}function yt(){x.call(this,"c")}function bt(){}function wt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new He(this),this.O=It,e=$?125:void 0,this.T=new Be(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _t}function _t(){this.i=null,this.g="",this.h=!1}I(gt,x),I(yt,x),I(bt,ht),bt.prototype.g=function(){return new XMLHttpRequest},bt.prototype.i=function(){return{}},vt=new bt;var It=45e3,Et={},St={};function kt(e,t,n){e.K=1,e.v=Gt(jt(t)),e.s=n,e.P=!0,Ct(e,null)}function Ct(e,t){e.F=Date.now(),Ot(e),e.A=jt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),e.C=0,n=e.l.H,e.h=new _t,e.g=dr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new qe(w(e.La,e,e.g),e.N)),Ge(e.S,e.g,"readystatechange",e.ib),t=e.H?se(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),ot(),Je(e.j,e.u,e.A,e.m,e.U,e.s)}function Tt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function xt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=At(e,n),r==St){4==t&&(e.o=4,at(14),i=!1),Xe(e.j,e.m,null,"[Incomplete Response]");break}if(r==Et){e.o=4,at(15),Xe(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Xe(e.j,e.m,r,null),Lt(e,r)}Tt(e)&&r!=St&&r!=Et&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,at(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(t),t.K=!0,at(11))):(Xe(e.j,e.m,n,"[Invalid Chunked Response]"),Ft(e),Dt(e))}function At(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?St:(n=Number(t.substring(n,r)),isNaN(n)?Et:(r+=1,r+n>t.length?St:(t=t.substr(r,n),e.C=r+n,t)))}function Ot(e){e.V=Date.now()+e.O,Rt(e,e.O)}function Rt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ut(w(e.gb,e),t)}function Nt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Dt(e){0==e.l.G||e.I||sr(e.l,e)}function Ft(e){Nt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,$e(e.T),Ke(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Lt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||vn(n.h,e)))if(!e.J&&vn(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;or(n),Kn(n)}nr(n),at(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ut(w(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else lr(n,11)}else if((e.J||n.g==e)&&or(n),!O(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const c=u[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.h;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(mn(o,o.h),o.h=null))}if(r.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,zt(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=e;if(r.sa=cr(r,r.H?r.ka:null,r.V),s.J){gn(r.h,s);var a=s,l=r.J;l&&a.setTimeout(l),a.B&&(Nt(a),Ot(a)),r.g=s}else tr(r);0<n.i.length&&Jn(n)}else"stop"!=u[0]&&"close"!=u[0]||lr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?lr(n,7):Gn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}ot(4)}catch(u){}}function Pt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Vt(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Mt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Vt(e),r=Pt(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}r=wt.prototype,r.setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==$n(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const c=$n(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(3!=c||$||this.g&&(this.h.h||this.g.fa()||jn(this.g)))){this.I||4!=c||7==t||ot(8==t||0>=h?3:2),Nt(this);var n=this.g.aa();this.Y=n;t:if(Tt(this)){var r=jn(this.g);e="";var i=r.length,o=4==$n(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ft(this),Dt(this);var s="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==n,Qe(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,at(12),Ft(this),Dt(this);break e}Xe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lt(this,n)}this.P?(xt(this,c,s),$&&this.i&&3==c&&(Ge(this.S,this.T,"tick",this.hb),this.T.start())):(Xe(this.j,this.m,s,null),Lt(this,s)),4==c&&Ft(this),this.i&&!this.I&&(4==c?sr(this.l,this):(this.i=!1,Ot(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Ft(this),Dt(this)}}}catch(c){}},r.hb=function(){if(this.g){var e=$n(this.g),t=this.g.fa();this.C<t.length&&(Nt(this),xt(this,e,t),this.i&&4!=e&&Ot(this))}},r.cancel=function(){this.I=!0,Ft(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ze(this.j,this.A),2!=this.K&&(ot(),at(17)),Ft(this),this.o=2,Dt(this)):Rt(this,this.V-e)};var Ut=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $t(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof $t){this.h=void 0!==t?t:e.h,Wt(this,e.j),this.s=e.s,this.g=e.g,qt(this,e.m),this.l=e.l,t=e.i;var n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ht(this,n),this.o=e.o}else e&&(n=String(e).match(Ut))?(this.h=!!t,Wt(this,n[1]||"",!0),this.s=Kt(n[2]||""),this.g=Kt(n[3]||"",!0),qt(this,n[4]),this.l=Kt(n[5]||"",!0),Ht(this,n[6]||"",!0),this.o=Kt(n[7]||"")):(this.h=!!t,this.i=new nn(null,this.h))}function jt(e){return new $t(e)}function Wt(e,t,n){e.j=n?Kt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function qt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ht(e,t,n){t instanceof nn?(e.i=t,un(e.i,e.h)):(n||(t=Yt(t,en)),e.i=new nn(t,e.h))}function zt(e,t,n){e.i.set(t,n)}function Gt(e){return zt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Yt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Jt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Jt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}$t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Yt(t,Qt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Yt(t,Qt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Yt(n,"/"==n.charAt(0)?Zt:Xt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Yt(n,tn)),e.join("")};var Qt=/[#\/\?@]/g,Xt=/[#\?:]/g,Zt=/[#\?]/g,en=/[#\?@]/g,tn=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rn(e){e.g||(e.g=new Map,e.h=0,e.i&&Bt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function on(e,t){rn(e),t=ln(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function sn(e,t){return rn(e),t=ln(e,t),e.g.has(t)}function an(e,t,n){on(e,t),0<n.length&&(e.i=null,e.g.set(ln(e,t),C(n)),e.h+=n.length)}function ln(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function un(e,t){t&&!e.j&&(rn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(on(this,t),an(this,n,e))}),e)),e.j=t}r=nn.prototype,r.add=function(e,t){rn(this),this.i=null,e=ln(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.W=function(e){rn(this);let t=[];if("string"===typeof e)sn(this,e)&&(t=t.concat(this.g.get(ln(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return rn(this),this.i=null,e=ln(this,e),sn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};var cn=class{constructor(e,t){this.h=e,this.g=t}};function dn(e){this.l=e||hn,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ga&&d.g.Ga()&&d.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hn=10;function fn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function pn(e){return e.h?1:e.g?e.g.size:0}function vn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function mn(e,t){e.g?e.g.add(t):e.h=t}function gn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function yn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return C(e.i)}function bn(){}function wn(){this.g=new bn}function _n(e,t,n){const r=n||"";try{Mt(e,(function(e,n){let i=e;p(e)&&(i=xe(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function In(e,t){const n=new Ye;if(d.Image){const r=new Image;r.onload=_(En,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(En,n,r,"TestLoadImage: error",!1,t),r.onabort=_(En,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(En,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function En(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(o){}}function Sn(e){this.l=e.ac||null,this.j=e.jb||!1}function kn(e,t){ke.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},bn.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},bn.prototype.parse=function(e){return d.JSON.parse(e,void 0)},I(Sn,ht),Sn.prototype.g=function(){return new kn(this.l,this.j)},Sn.prototype.i=function(e){return function(){return e}}({}),I(kn,ke);var Cn=0;function Tn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function xn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,An(e)}function An(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=kn.prototype,r.open=function(e,t){if(this.readyState!=Cn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,An(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||d).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xn(this)),this.readyState=Cn},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xn(this):An(this),3==this.readyState&&Tn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,xn(this))},r.Ua=function(e){this.g&&(this.response=e,xn(this))},r.ga=function(){this.g&&xn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var On=d.JSON.parse;function Rn(e){ke.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nn,this.K=this.L=!1}I(Rn,ke);var Nn="",Dn=/^https?$/i,Fn=["POST","PUT"];function Ln(e){return U&&J()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Pn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Vn(e),Un(e)}function Vn(e){e.D||(e.D=!0,Ce(e,"complete"),Ce(e,"error"))}function Mn(e){if(e.h&&"undefined"!=typeof c&&(!e.C[1]||4!=$n(e)||2!=e.aa()))if(e.v&&4==$n(e))je(e.Ha,0,e);else if(Ce(e,"readystatechange"),4==$n(e)){e.h=!1;try{const l=e.aa();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===l){var i=String(e.H).match(Ut)[1]||null;if(!i&&d.self&&d.self.location){var o=d.self.location.protocol;i=o.substr(0,o.length-1)}r=!Dn.test(i?i.toLowerCase():"")}n=r}if(n)Ce(e,"complete"),Ce(e,"success");else{e.m=6;try{var s=2<$n(e)?e.g.statusText:""}catch(a){s=""}e.j=s+" ["+e.aa()+"]",Vn(e)}}finally{Un(e)}}}function Un(e,t){if(e.g){Bn(e);const r=e.g,i=e.C[0]?h:null;e.g=null,e.C=null,t||Ce(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Bn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function $n(e){return e.g?e.g.readyState:0}function jn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Nn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Tr){return null}}function Wn(e){let t="";return oe(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function qn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Wn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):zt(e,t,n))}function Hn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zn(e){this.Ca=0,this.i=[],this.j=new Ye,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Hn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Hn("baseRetryDelayMs",5e3,e),this.bb=Hn("retryDelaySeedMs",1e4,e),this.$a=Hn("forwardChannelMaxRetries",2,e),this.ta=Hn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new dn(e&&e.concurrentRequestLimit),this.Fa=new wn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Gn(e){if(Yn(e),3==e.G){var t=e.U++,n=jt(e.F);zt(n,"SID",e.I),zt(n,"RID",t),zt(n,"TYPE","terminate"),Zn(e,n),t=new wt(e,e.j,t,void 0),t.K=2,t.v=Gt(jt(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(t.v.toString(),"")),!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=dr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Ot(t)}ur(e)}function Kn(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Yn(e){Kn(e),e.u&&(d.clearTimeout(e.u),e.u=null),or(e),e.h.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function Jn(e){fn(e.h)||e.m||(e.m=!0,Le(e.Ja,e),e.C=0)}function Qn(e,t){return!(pn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=ut(w(e.Ja,e,t),ar(e,e.C)),e.C++,!0))}function Xn(e,t){var n;n=t?t.m:e.U++;const r=jt(e.F);zt(r,"SID",e.I),zt(r,"RID",n),zt(r,"AID",e.T),Zn(e,r),e.o&&e.s&&qn(r,e.o,e.s),n=new wt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=er(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),mn(e.h,n),kt(n,r,t)}function Zn(e,t){e.ia&&oe(e.ia,(function(e,n){zt(t,n,e)})),e.l&&Mt({},(function(e,n){zt(t,n,e)}))}function er(e,t,n){n=Math.min(e.i.length,n);var r=e.l?w(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].h;const l=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),s=!1;else try{_n(l,e,"req"+n+"_")}catch(o){r&&r(l)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tr(e){e.g||e.u||(e.Z=1,Le(e.Ia,e),e.A=0)}function nr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ut(w(e.Ia,e),ar(e,e.A)),e.A++,!0)}function rr(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function ir(e){e.g=new wt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=jt(e.sa);zt(t,"RID","rpc"),zt(t,"SID",e.I),zt(t,"CI",e.L?"0":"1"),zt(t,"AID",e.T),zt(t,"TYPE","xmlhttp"),Zn(e,t),e.o&&e.s&&qn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Gt(jt(t)),n.s=null,n.P=!0,Ct(n,e)}function or(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function sr(e,t){var n=null;if(e.g==t){or(e),rr(e),e.g=null;var r=2}else{if(!vn(e.h,t))return;n=t.D,gn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=rt(),Ce(r,new lt(r,n)),Jn(e)}else tr(e);else if(i=t.o,3==i||0==i&&0<e.pa||!(1==r&&Qn(e,t)||2==r&&nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:lr(e,5);break;case 4:lr(e,10);break;case 3:lr(e,6);break;default:lr(e,2)}}function ar(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function lr(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=w(e.kb,e);n||(n=new $t("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Wt(n,"https"),Gt(n)),In(n.toString(),r)}else at(2);e.G=0,e.l&&e.l.va(t),ur(e),Yn(e)}function ur(e){if(e.G=0,e.la=[],e.l){const t=yn(e.h);0==t.length&&0==e.i.length||(T(e.la,t),T(e.la,e.i),e.h.i.length=0,C(e.i),e.i.length=0),e.l.ua()}}function cr(e,t,n){var r=n instanceof $t?jt(n):new $t(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),qt(r,r.m);else{var i=d.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new $t(null,void 0);r&&Wt(o,r),t&&(o.g=t),i&&qt(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.za,n&&t&&zt(r,n,t),zt(r,"VER",e.ma),Zn(e,r),r}function dr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Rn(new Sn({jb:!0})):new Rn(e.ra),t.Ka(e.H),t}function hr(){}function fr(){if(U&&!(10<=Number(X)))throw Error("Environmental error: no available transport.")}function pr(e,t){ke.call(this),this.g=new zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new gr(this)}function vr(e){gt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function mr(){yt.call(this),this.status=1}function gr(e){this.g=e}r=Rn.prototype,r.Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vt.g(),this.C=this.u?ft(this.u):ft(vt),this.g.onreadystatechange=w(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(o){return void Pn(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=d.FormData&&e instanceof d.FormData,!(0<=k(Fn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bn(this),0<this.B&&((this.K=Ln(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.qa,this)):this.A=je(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){Pn(this,o)}},r.qa=function(){"undefined"!=typeof c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ce(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ce(this,"complete"),Ce(this,"abort"),Un(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Un(this,!0)),Rn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Mn(this):this.fb())},r.fb=function(){Mn(this)},r.aa=function(){try{return 2<$n(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),On(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=zn.prototype,r.ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new wt(this,this.j,e,void 0);let o=this.s;if(this.S&&(o?(o=se(o),le(o,this.S)):o=this.S),null!==this.o||this.N||(i.H=o,o=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=er(this,i,t),n=jt(this.F),zt(n,"RID",e),zt(n,"CVER",22),this.D&&zt(n,"X-HTTP-Session-Id",this.D),Zn(this,n),o&&(this.N?t="headers="+encodeURIComponent(String(Wn(o)))+"&"+t:this.o&&qn(n,this.o,o)),mn(this.h,i),this.Ya&&zt(n,"TYPE","init"),this.O?(zt(n,"$req",t),zt(n,"SID","null"),i.Z=!0,kt(i,n,null)):kt(i,n,t),this.G=2}}else 3==this.G&&(e?Xn(this,e):0==this.i.length||fn(this.h)||Xn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ut(w(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Kn(this),ir(this))},r.cb=function(){null!=this.v&&(this.v=null,Kn(this),nr(this),at(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},r=hr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},fr.prototype.g=function(e,t){return new pr(e,t)},I(pr,ke),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=cr(e,null,e.V),Jn(e)},pr.prototype.close=function(){Gn(this.g)},pr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=xe(e),e=n);t.i.push(new cn(t.ab++,e)),3==t.G&&Jn(t)},pr.prototype.M=function(){this.g.l=null,delete this.j,Gn(this.g),delete this.g,pr.X.M.call(this)},I(vr,gt),I(mr,yt),I(gr,hr),gr.prototype.xa=function(){Ce(this.g,"a")},gr.prototype.wa=function(e){Ce(this.g,new vr(e))},gr.prototype.va=function(e){Ce(this.g,new mr)},gr.prototype.ua=function(){Ce(this.g,"b")},fr.prototype.createWebChannel=fr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,ct.NO_ERROR=0,ct.TIMEOUT=8,ct.HTTP_ERROR=6,dt.COMPLETE="complete",pt.EventType=mt,mt.OPEN="a",mt.CLOSE="b",mt.ERROR="c",mt.MESSAGE="d",ke.prototype.listen=ke.prototype.N,Rn.prototype.listenOnce=Rn.prototype.O,Rn.prototype.getLastError=Rn.prototype.Oa,Rn.prototype.getLastErrorCode=Rn.prototype.Ea,Rn.prototype.getStatus=Rn.prototype.aa,Rn.prototype.getResponseJson=Rn.prototype.Sa,Rn.prototype.getResponseText=Rn.prototype.fa,Rn.prototype.send=Rn.prototype.da,Rn.prototype.setWithCredentials=Rn.prototype.Ka;var yr=u.createWebChannelTransport=function(){return new fr},br=u.getStatEventTarget=function(){return rt()},wr=u.ErrorCode=ct,_r=u.EventType=dt,Ir=u.Event=tt,Er=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Sr=u.FetchXmlHttpFactory=Sn,kr=u.WebChannel=pt,Cr=u.XhrIo=Rn;const Tr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xr.UNAUTHENTICATED=new xr(null),xr.GOOGLE_CREDENTIALS=new xr("google-credentials-uid"),xr.FIRST_PARTY=new xr("first-party-uid"),xr.MOCK_USER=new xr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ar="9.16.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new s.Yd("@firebase/firestore");function Rr(){return Or.logLevel}function Nr(e,...t){if(Or.logLevel<=s["in"].DEBUG){const n=t.map(Lr);Or.debug(`Firestore (${Ar}): ${e}`,...n)}}function Dr(e,...t){if(Or.logLevel<=s["in"].ERROR){const n=t.map(Lr);Or.error(`Firestore (${Ar}): ${e}`,...n)}}function Fr(e,...t){if(Or.logLevel<=s["in"].WARN){const n=t.map(Lr);Or.warn(`Firestore (${Ar}): ${e}`,...n)}}function Lr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(e="Unexpected state"){const t=`FIRESTORE (${Ar}) INTERNAL ASSERTION FAILED: `+e;throw Dr(t),new Error(t)}function Vr(e,t){e||Pr()}function Mr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Br extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(xr.UNAUTHENTICATED)))}shutdown(){}}class qr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Hr{constructor(e){this.t=e,this.currentUser=xr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new $r;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $r,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},s=e=>{Nr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((e=>s(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(Nr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $r)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Nr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Vr("string"==typeof t.accessToken),new jr(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Vr(null===e||"string"==typeof e),new xr(e)}}class zr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=xr.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Vr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Gr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new zr(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(xr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Kr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yr{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Nr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Nr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Nr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Nr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Vr("string"==typeof e.token),this.A=e.token,new Kr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Jr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Xr(e,t){return e<t?-1:e>t?1:0}function Zr(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Br(Ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Br(Ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Br(Ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Br(Ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ei.fromMillis(Date.now())}static fromDate(e){return ei.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ei(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Xr(this.nanoseconds,e.nanoseconds):Xr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ti(e)}static min(){return new ti(new ei(0,0))}static max(){return new ti(new ei(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n){void 0===t?t=0:t>e.length&&Pr(),void 0===n?n=e.length-t:n>e.length-t&&Pr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ni.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ni?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ri extends ni{construct(e,t,n){return new ri(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Br(Ur.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ri(t)}static emptyPath(){return new ri([])}}const ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oi extends ni{construct(e,t,n){return new oi(e,t,n)}static isValidIdentifier(e){return ii.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oi.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new oi(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Br(Ur.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Br(Ur.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Br(Ur.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new Br(Ur.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oi(t)}static emptyPath(){return new oi([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.path=e}static fromPath(e){return new si(ri.fromString(e))}static fromName(e){return new si(ri.fromString(e).popFirst(5))}static empty(){return new si(ri.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ri.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ri.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new si(new ri(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}ai.UNKNOWN_ID=-1;function li(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ti.fromTimestamp(1e9===r?new ei(n+1,0):new ei(n,r));return new ci(i,si.empty(),t)}function ui(e){return new ci(e.readTime,e.key,-1)}class ci{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ci(ti.min(),si.empty(),-1)}static max(){return new ci(ti.max(),si.empty(),-1)}}function di(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=si.comparator(e.documentKey,t.documentKey),0!==n?n:Xr(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(e){if(e.code!==Ur.FAILED_PRECONDITION||e.message!==hi)throw e;Nr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Pr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new vi(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof vi?t:vi.resolve(t)}catch(e){return vi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):vi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):vi.reject(t)}static resolve(e){return new vi(((t,n)=>{t(e)}))}static reject(e){return new vi(((t,n)=>{n(e)}))}static waitFor(e){return new vi(((t,n)=>{let r=0,i=0,o=!1;e.forEach((e=>{++r,e.next((()=>{++i,o&&i===r&&t()}),(e=>n(e)))})),o=!0,i===r&&t()}))}static or(e){let t=vi.resolve(!1);for(const n of e)t=t.next((e=>e?vi.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new vi(((n,r)=>{const i=e.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next((e=>{o[l]=e,++s,s===i&&n(o)}),(e=>r(e)))}}))}static doWhile(e,t){return new vi(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}gi.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yi{constructor(e,t,n,r,i,o,s,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class bi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new bi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof bi&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function _i(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ii(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(e){return null==e}function Si(e){return 0===e&&1/e==-1/0}function ki(e){return"number"==typeof e&&Number.isInteger(e)&&!Si(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ci{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ci(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ci(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Xr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ci.EMPTY_BYTE_STRING=new Ci("");const Ti=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xi(e){if(Vr(!!e),"string"==typeof e){let t=0;const n=Ti.exec(e);if(Vr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ai(e.seconds),nanos:Ai(e.nanos)}}function Ai(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Oi(e){return"string"==typeof e?Ci.fromBase64String(e):Ci.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ni(e){const t=e.mapValue.fields.__previous_value__;return Ri(t)?Ni(t):t}function Di(e){const t=xi(e.mapValue.fields.__local_write_time__.timestampValue);return new ei(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Li(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ri(e)?4:Yi(e)?9007199254740991:10:Pr()}function Pi(e,t){if(e===t)return!0;const n=Li(e);if(n!==Li(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Di(e).isEqual(Di(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=xi(e.timestampValue),r=xi(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Oi(e.bytesValue).isEqual(Oi(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ai(e.geoPointValue.latitude)===Ai(t.geoPointValue.latitude)&&Ai(e.geoPointValue.longitude)===Ai(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ai(e.integerValue)===Ai(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ai(e.doubleValue),r=Ai(t.doubleValue);return n===r?Si(n)===Si(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Zr(e.arrayValue.values||[],t.arrayValue.values||[],Pi);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(wi(n)!==wi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Pi(n[i],r[i])))return!1;return!0}(e,t);default:return Pr()}}function Vi(e,t){return void 0!==(e.values||[]).find((e=>Pi(e,t)))}function Mi(e,t){if(e===t)return 0;const n=Li(e),r=Li(t);if(n!==r)return Xr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Xr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ai(e.integerValue||e.doubleValue),r=Ai(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Ui(e.timestampValue,t.timestampValue);case 4:return Ui(Di(e),Di(t));case 5:return Xr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Oi(e),r=Oi(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Xr(n[i],r[i]);if(0!==e)return e}return Xr(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Xr(Ai(e.latitude),Ai(t.latitude));return 0!==n?n:Xr(Ai(e.longitude),Ai(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Mi(n[i],r[i]);if(e)return e}return Xr(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Fi.mapValue&&t===Fi.mapValue)return 0;if(e===Fi.mapValue)return 1;if(t===Fi.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const e=Xr(r[s],o[s]);if(0!==e)return e;const t=Mi(n[r[s]],i[o[s]]);if(0!==t)return t}return Xr(r.length,o.length)}(e.mapValue,t.mapValue);default:throw Pr()}}function Ui(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Xr(e,t);const n=xi(e),r=xi(t),i=Xr(n.seconds,r.seconds);return 0!==i?i:Xr(n.nanos,r.nanos)}function Bi(e){return $i(e)}function $i(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=xi(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Oi(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,si.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=$i(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${$i(e.fields[i])}`;return n+"}"}(e.mapValue):Pr();var t,n}function ji(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Wi(e){return!!e&&"integerValue"in e}function qi(e){return!!e&&"arrayValue"in e}function Hi(e){return!!e&&"nullValue"in e}function zi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Gi(e){return!!e&&"mapValue"in e}function Ki(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return _i(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ki(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ki(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Yi(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(e,t){this.position=e,this.inclusive=t}}function Qi(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(r=o.field.isKeyField()?si.comparator(si.fromName(s.referenceValue),n.key):Mi(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function Xi(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Pi(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{}class eo extends Zi{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new lo(e,t,n):"array-contains"===t?new fo(e,n):"in"===t?new po(e,n):"not-in"===t?new vo(e,n):"array-contains-any"===t?new mo(e,n):new eo(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new uo(e,n):new co(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Mi(t,this.value)):null!==t&&Li(this.value)===Li(t)&&this.matchesComparison(Mi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Pr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class to extends Zi{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new to(e,t)}matches(e){return no(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function no(e){return"and"===e.op}function ro(e){return io(e)&&no(e)}function io(e){for(const t of e.filters)if(t instanceof to)return!1;return!0}function oo(e){if(e instanceof eo)return e.field.canonicalString()+e.op.toString()+Bi(e.value);if(ro(e))return e.filters.map((e=>oo(e))).join(",");{const t=e.filters.map((e=>oo(e))).join(",");return`${e.op}(${t})`}}function so(e,t){return e instanceof eo?function(e,t){return t instanceof eo&&e.op===t.op&&e.field.isEqual(t.field)&&Pi(e.value,t.value)}(e,t):e instanceof to?function(e,t){return t instanceof to&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&so(n,t.filters[r])),!0)}(e,t):void Pr()}function ao(e){return e instanceof eo?function(e){return`${e.field.canonicalString()} ${e.op} ${Bi(e.value)}`}(e):e instanceof to?function(e){return e.op.toString()+" {"+e.getFilters().map(ao).join(" ,")+"}"}(e):"Filter"}class lo extends eo{constructor(e,t,n){super(e,t,n),this.key=si.fromName(n.referenceValue)}matches(e){const t=si.comparator(e.key,this.key);return this.matchesComparison(t)}}class uo extends eo{constructor(e,t){super(e,"in",t),this.keys=ho("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class co extends eo{constructor(e,t){super(e,"not-in",t),this.keys=ho("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ho(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>si.fromName(e.referenceValue)))}class fo extends eo{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qi(t)&&Vi(t.arrayValue,this.value)}}class po extends eo{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Vi(this.value.arrayValue,t)}}class vo extends eo{constructor(e,t){super(e,"not-in",t)}matches(e){if(Vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Vi(this.value.arrayValue,t)}}class mo extends eo{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Vi(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t="asc"){this.field=e,this.dir=t}}function yo(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t){this.comparator=e,this.root=t||_o.EMPTY}insert(e,t){return new bo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_o.BLACK,null,null))}remove(e){return new bo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_o.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wo(this.root,e,this.comparator,!0)}}class wo{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _o{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:_o.RED,this.left=null!=r?r:_o.EMPTY,this.right=null!=i?i:_o.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new _o(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return _o.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return _o.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_o.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_o.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Pr();if(this.right.isRed())throw Pr();const e=this.left.check();if(e!==this.right.check())throw Pr();return e+(this.isRed()?0:1)}}_o.EMPTY=null,_o.RED=!0,_o.BLACK=!1,_o.EMPTY=new class{constructor(){this.size=0}get key(){throw Pr()}get value(){throw Pr()}get color(){throw Pr()}get left(){throw Pr()}get right(){throw Pr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new _o(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(e){this.comparator=e,this.data=new bo(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Eo(this.data.getIterator())}getIteratorFrom(e){return new Eo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Io))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Io(this.comparator);return t.data=e,t}}class Eo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(e){this.fields=e,e.sort(oi.comparator)}static empty(){return new So([])}unionWith(e){let t=new Io(oi.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new So(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.value=e}static empty(){return new ko({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Gi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ki(t)}setAll(e){let t=oi.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Ki(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Gi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Gi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){_i(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new ko(Ki(this.value))}}function Co(e){const t=[];return _i(e.fields,((e,n)=>{const r=new oi([e]);if(Gi(n)){const e=Co(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new So(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class To{constructor(e,t,n,r,i,o,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=s}static newInvalidDocument(e){return new To(e,0,ti.min(),ti.min(),ti.min(),ko.empty(),0)}static newFoundDocument(e,t,n,r){return new To(e,1,t,ti.min(),n,r,0)}static newNoDocument(e,t){return new To(e,2,t,ti.min(),ti.min(),ko.empty(),0)}static newUnknownDocument(e,t){return new To(e,3,t,ti.min(),ti.min(),ko.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ti.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ko.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ko.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ti.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof To&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new To(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t=null,n=[],r=[],i=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.ft=null}}function Ao(e,t=null,n=[],r=[],i=null,o=null,s=null){return new xo(e,t,n,r,i,o,s)}function Oo(e){const t=Mr(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>oo(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ei(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Bi(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Bi(e))).join(",")),t.ft=e}return t.ft}function Ro(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!yo(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!so(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Xi(e.startAt,t.startAt)&&Xi(e.endAt,t.endAt)}function No(e){return si.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Do{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Fo(e,t,n,r,i,o,s,a){return new Do(e,t,n,r,i,o,s,a)}function Lo(e){return new Do(e)}function Po(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Vo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Mo(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Uo(e){return null!==e.collectionGroup}function Bo(e){const t=Mr(e);if(null===t.dt){t.dt=[];const e=Mo(t),n=Vo(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new go(e)),t.dt.push(new go(oi.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new go(oi.keyField(),e))}}}return t.dt}function $o(e){const t=Mr(e);if(!t._t)if("F"===t.limitType)t._t=Ao(t.path,t.collectionGroup,Bo(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Bo(t)){const t="desc"===i.dir?"asc":"desc";e.push(new go(i.field,t))}const n=t.endAt?new Ji(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ji(t.startAt.position,t.startAt.inclusive):null;t._t=Ao(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function jo(e,t){t.getFirstInequalityField(),Mo(e);const n=e.filters.concat([t]);return new Do(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Wo(e,t,n){return new Do(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function qo(e,t){return Ro($o(e),$o(t))&&e.limitType===t.limitType}function Ho(e){return`${Oo($o(e))}|lt:${e.limitType}`}function zo(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>ao(e))).join(", ")}]`),Ei(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Bi(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Bi(e))).join(",")),`Target(${t})`}($o(e))}; limitType=${e.limitType})`}function Go(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):si.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Bo(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Qi(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Bo(e),t))&&!(e.endAt&&!function(e,t,n){const r=Qi(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Bo(e),t))}(e,t)}function Ko(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Yo(e){return(t,n)=>{let r=!1;for(const i of Bo(e)){const e=Jo(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Jo(e,t,n){const r=e.field.isKeyField()?si.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Mi(r,i):Pr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Pr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Si(t)?"-0":t}}function Xo(e){return{integerValue:""+e}}function Zo(e,t){return ki(t)?Xo(t):Qo(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this._=void 0}}function ts(e,t,n){return e instanceof is?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof os?ss(e,t):e instanceof as?ls(e,t):function(e,t){const n=rs(e,t),r=cs(n)+cs(e.gt);return Wi(n)&&Wi(e.gt)?Xo(r):Qo(e.yt,r)}(e,t)}function ns(e,t,n){return e instanceof os?ss(e,t):e instanceof as?ls(e,t):n}function rs(e,t){return e instanceof us?Wi(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class is extends es{}class os extends es{constructor(e){super(),this.elements=e}}function ss(e,t){const n=ds(t);for(const r of e.elements)n.some((e=>Pi(e,r)))||n.push(r);return{arrayValue:{values:n}}}class as extends es{constructor(e){super(),this.elements=e}}function ls(e,t){let n=ds(t);for(const r of e.elements)n=n.filter((e=>!Pi(e,r)));return{arrayValue:{values:n}}}class us extends es{constructor(e,t){super(),this.yt=e,this.gt=t}}function cs(e){return Ai(e.integerValue||e.doubleValue)}function ds(e){return qi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof os&&t instanceof os||e instanceof as&&t instanceof as?Zr(e.elements,t.elements,Pi):e instanceof us&&t instanceof us?Pi(e.gt,t.gt):e instanceof is&&t instanceof is}(e.transform,t.transform)}class fs{constructor(e,t){this.version=e,this.transformResults=t}}class ps{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ps}static exists(e){return new ps(void 0,e)}static updateTime(e){return new ps(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vs(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ms{}function gs(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ts(e.key,ps.none()):new Is(e.key,e.data,ps.none());{const n=e.data,r=ko.empty();let i=new Io(oi.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Es(e.key,r,new So(i.toArray()),ps.none())}}function ys(e,t,n){e instanceof Is?function(e,t,n){const r=e.value.clone(),i=ks(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Es?function(e,t,n){if(!vs(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ks(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Ss(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function bs(e,t,n,r){return e instanceof Is?function(e,t,n,r){if(!vs(e.precondition,t))return n;const i=e.value.clone(),o=Cs(e.fieldTransforms,r,t);return i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Es?function(e,t,n,r){if(!vs(e.precondition,t))return n;const i=Cs(e.fieldTransforms,r,t),o=t.data;return o.setAll(Ss(e)),o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return vs(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ws(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=rs(r.transform,e||null);null!=i&&(null===n&&(n=ko.empty()),n.set(r.field,i))}return n||null}function _s(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Zr(e,t,((e,t)=>hs(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Is extends ms{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Es extends ms{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ss(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function ks(e,t,n){const r=new Map;Vr(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,ns(s,a,n[i]))}return r}function Cs(e,t,n){const r=new Map;for(const i of e){const e=i.transform,o=n.data.field(i.field);r.set(i.field,ts(e,o,t))}return r}class Ts extends ms{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xs extends ms{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Os,Rs;function Ns(e){switch(e){default:return Pr();case Ur.CANCELLED:case Ur.UNKNOWN:case Ur.DEADLINE_EXCEEDED:case Ur.RESOURCE_EXHAUSTED:case Ur.INTERNAL:case Ur.UNAVAILABLE:case Ur.UNAUTHENTICATED:return!1;case Ur.INVALID_ARGUMENT:case Ur.NOT_FOUND:case Ur.ALREADY_EXISTS:case Ur.PERMISSION_DENIED:case Ur.FAILED_PRECONDITION:case Ur.ABORTED:case Ur.OUT_OF_RANGE:case Ur.UNIMPLEMENTED:case Ur.DATA_LOSS:return!0}}function Ds(e){if(void 0===e)return Dr("GRPC error has no .code"),Ur.UNKNOWN;switch(e){case Os.OK:return Ur.OK;case Os.CANCELLED:return Ur.CANCELLED;case Os.UNKNOWN:return Ur.UNKNOWN;case Os.DEADLINE_EXCEEDED:return Ur.DEADLINE_EXCEEDED;case Os.RESOURCE_EXHAUSTED:return Ur.RESOURCE_EXHAUSTED;case Os.INTERNAL:return Ur.INTERNAL;case Os.UNAVAILABLE:return Ur.UNAVAILABLE;case Os.UNAUTHENTICATED:return Ur.UNAUTHENTICATED;case Os.INVALID_ARGUMENT:return Ur.INVALID_ARGUMENT;case Os.NOT_FOUND:return Ur.NOT_FOUND;case Os.ALREADY_EXISTS:return Ur.ALREADY_EXISTS;case Os.PERMISSION_DENIED:return Ur.PERMISSION_DENIED;case Os.FAILED_PRECONDITION:return Ur.FAILED_PRECONDITION;case Os.ABORTED:return Ur.ABORTED;case Os.OUT_OF_RANGE:return Ur.OUT_OF_RANGE;case Os.UNIMPLEMENTED:return Ur.UNIMPLEMENTED;case Os.DATA_LOSS:return Ur.DATA_LOSS;default:return Pr()}}(Rs=Os||(Os={}))[Rs.OK=0]="OK",Rs[Rs.CANCELLED=1]="CANCELLED",Rs[Rs.UNKNOWN=2]="UNKNOWN",Rs[Rs.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Rs[Rs.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Rs[Rs.NOT_FOUND=5]="NOT_FOUND",Rs[Rs.ALREADY_EXISTS=6]="ALREADY_EXISTS",Rs[Rs.PERMISSION_DENIED=7]="PERMISSION_DENIED",Rs[Rs.UNAUTHENTICATED=16]="UNAUTHENTICATED",Rs[Rs.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Rs[Rs.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Rs[Rs.ABORTED=10]="ABORTED",Rs[Rs.OUT_OF_RANGE=11]="OUT_OF_RANGE",Rs[Rs.UNIMPLEMENTED=12]="UNIMPLEMENTED",Rs[Rs.INTERNAL=13]="INTERNAL",Rs[Rs.UNAVAILABLE=14]="UNAVAILABLE",Rs[Rs.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){_i(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Ii(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new bo(si.comparator);function Ps(){return Ls}const Vs=new bo(si.comparator);function Ms(...e){let t=Vs;for(const n of e)t=t.insert(n.key,n);return t}function Us(e){let t=Vs;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Bs(){return js()}function $s(){return js()}function js(){return new Fs((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Ws=new bo(si.comparator),qs=new Io(si.comparator);function Hs(...e){let t=qs;for(const n of e)t=t.add(n);return t}const zs=new Io(Xr);function Gs(){return zs}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Ys.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ks(ti.min(),r,Gs(),Ps(),Hs())}}class Ys{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ys(n,t,Hs(),Hs(),Hs())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class Qs{constructor(e,t){this.targetId=e,this.Et=t}}class Xs{constructor(e,t,n=Ci.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Zs{constructor(){this.At=0,this.Rt=na(),this.bt=Ci.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Hs(),t=Hs(),n=Hs();return this.Rt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Pr()}})),new Ys(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=na()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class ea{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Ps(),this.qt=ta(),this.Ut=new Io(Xr)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,(t=>{const n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:Pr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.zt(n)&&t(n)}))}Jt(e){const t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){const e=r.target;if(No(e))if(0===n){const n=new si(e.path);this.Qt(t,n,To.newNoDocument(n,ti.min()))}else Vr(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach(((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&No(i.target)){const t=new si(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,To.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}}));let n=Hs();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const r=new Ks(e,t,this.Ut,this.Lt,n);return this.Lt=Ps(),this.qt=ta(),this.Ut=new Io(Xr),r}Gt(e,t){if(!this.zt(e))return;const n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new Zs,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new Io(Xr),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||Nr("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Zs),this.$t.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function ta(){return new bo(si.comparator)}function na(){return new bo(si.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),ia=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),oa=(()=>{const e={and:"AND",or:"OR"};return e})();class sa{constructor(e,t){this.databaseId=e,this.wt=t}}function aa(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function la(e,t){return e.wt?t.toBase64():t.toUint8Array()}function ua(e,t){return aa(e,t.toTimestamp())}function ca(e){return Vr(!!e),ti.fromTimestamp(function(e){const t=xi(e);return new ei(t.seconds,t.nanos)}(e))}function da(e,t){return function(e){return new ri(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function ha(e){const t=ri.fromString(e);return Vr(La(t)),t}function fa(e,t){return da(e.databaseId,t.path)}function pa(e,t){const n=ha(t);if(n.get(1)!==e.databaseId.projectId)throw new Br(Ur.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Br(Ur.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new si(ya(n))}function va(e,t){return da(e.databaseId,t)}function ma(e){const t=ha(e);return 4===t.length?ri.emptyPath():ya(t)}function ga(e){return new ri(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ya(e){return Vr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ba(e,t,n){return{name:fa(e,t),fields:n.value.mapValue.fields}}function wa(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Pr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(e,t){return e.wt?(Vr(void 0===t||"string"==typeof t),Ci.fromBase64String(t||"")):(Vr(void 0===t||t instanceof Uint8Array),Ci.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(e){const t=void 0===e.code?Ur.UNKNOWN:Ds(e.code);return new Br(t,e.message||"")}(s);n=new Xs(r,i,o,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=pa(e,r.document.name),o=ca(r.document.updateTime),s=r.document.createTime?ca(r.document.createTime):ti.min(),a=new ko({mapValue:{fields:r.document.fields}}),l=To.newFoundDocument(i,o,s,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Js(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=pa(e,r.document),o=r.readTime?ca(r.readTime):ti.min(),s=To.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Js([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=pa(e,r.document),o=r.removedTargetIds||[];n=new Js([],o,i,null)}else{if(!("filter"in t))return Pr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new As(r),o=e.targetId;n=new Qs(o,i)}}return n}function _a(e,t){let n;if(t instanceof Is)n={update:ba(e,t.key,t.value)};else if(t instanceof Ts)n={delete:fa(e,t.key)};else if(t instanceof Es)n={update:ba(e,t.key,t.data),updateMask:Fa(t.fieldMask)};else{if(!(t instanceof xs))return Pr();n={verify:fa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof is)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof os)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof as)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof us)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw Pr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ua(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Pr()}(e,t.precondition)),n}function Ia(e,t){return e&&e.length>0?(Vr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ca(e.updateTime):ca(t);return n.isEqual(ti.min())&&(n=ca(t)),new fs(n,e.transformResults||[])}(e,t)))):[]}function Ea(e,t){return{documents:[va(e,t.path)]}}function Sa(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=va(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=va(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return Da(to.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Ra(e.field),direction:xa(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(e,t){return e.wt||Ei(t)?t:{value:t}}(e,t.limit);var a;return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ka(e){let t=ma(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Vr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=function(e){const t=Ta(e);return t instanceof to&&ro(t)?t.getFilters():[t]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((e=>function(e){return new go(Na(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ei(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Ji(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ji(n,t)}(n.endAt)),Fo(t,i,s,o,a,"F",l,u)}function Ca(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Pr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Ta(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Na(e.unaryFilter.field);return eo.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Na(e.unaryFilter.field);return eo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Na(e.unaryFilter.field);return eo.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Na(e.unaryFilter.field);return eo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Pr()}}(e):void 0!==e.fieldFilter?function(e){return eo.create(Na(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Pr()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return to.create(e.compositeFilter.filters.map((e=>Ta(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Pr()}}(e.compositeFilter.op))}(e):Pr()}function xa(e){return ra[e]}function Aa(e){return ia[e]}function Oa(e){return oa[e]}function Ra(e){return{fieldPath:e.canonicalString()}}function Na(e){return oi.fromServerFormat(e.fieldPath)}function Da(e){return e instanceof eo?function(e){if("=="===e.op){if(zi(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NAN"}};if(Hi(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(zi(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NOT_NAN"}};if(Hi(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ra(e.field),op:Aa(e.op),value:e.value}}}(e):e instanceof to?function(e){const t=e.getFilters().map((e=>Da(e)));return 1===t.length?t[0]:{compositeFilter:{op:Oa(e.op),filters:t}}}(e):Pr()}function Fa(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function La(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Va=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ma=Va;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ua{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&ys(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=bs(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=bs(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=$s();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=t.has(r.key)?null:s;const a=gs(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(ti.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Hs())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,((e,t)=>_s(e,t)))&&Zr(this.baseMutations,e.baseMutations,((e,t)=>_s(e,t)))}}class Ba{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Vr(e.mutations.length===n.length);let r=Ws;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new Ba(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t,n,r,i=ti.min(),o=ti.min(),s=Ci.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(e){return new ja(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new ja(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ja(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.ie=e}}function qa(e){const t=ka({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Wo(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(Ai(e.integerValue));else if("doubleValue"in e){const n=Ai(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),Si(n)?t.le(0):t.le(n))}else if("timestampValue"in e){const n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(Oi(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?Yi(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):Pr()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const n=e.fields||{};this.he(t,55);for(const r of Object.keys(n))this.de(r,t),this.ce(n[r],t)}ye(e,t){const n=e.values||[];this.he(t,50);for(const r of n)this.ce(r,t)}me(e,t){this.he(t,37),si.fromName(e).path.forEach((e=>{this.he(t,60),this.pe(e,t)}))}he(e,t){e.le(t)}_e(e){e.le(2)}}Ha.Ie=new Ha;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za{constructor(){this.Je=new Ga}addToCollectionParentIndex(e,t){return this.Je.add(t),vi.resolve()}getCollectionParents(e,t){return vi.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return vi.resolve()}deleteFieldIndex(e,t){return vi.resolve()}getDocumentsMatchingTarget(e,t){return vi.resolve(null)}getIndexType(e,t){return vi.resolve(0)}getFieldIndexes(e,t){return vi.resolve([])}getNextCollectionGroupToUpdate(e){return vi.resolve(null)}getMinOffset(e,t){return vi.resolve(ci.min())}getMinOffsetFromCollectionGroup(e,t){return vi.resolve(ci.min())}updateCollectionGroup(e,t,n){return vi.resolve()}updateIndexEntries(e,t){return vi.resolve()}}class Ga{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Io(ri.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Io(ri.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ka{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ka(e,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ka.DEFAULT_COLLECTION_PERCENTILE=10,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ka.DEFAULT=new Ka(41943040,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ka.DISABLED=new Ka(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ya(0)}static vn(){return new Ya(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja{constructor(){this.changes=new Fs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,To.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?vi.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&bs(n.mutation,e,So.empty(),ei.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Hs()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Hs()){const r=Bs();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Ms();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Bs();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Hs())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Ps();const o=js(),s=js();return t.forEach(((e,t)=>{const s=n.get(t.key);r.has(t.key)&&(void 0===s||s.mutation instanceof Es)?i=i.insert(t.key,t):void 0!==s?(o.set(t.key,s.mutation.getFieldMask()),bs(s.mutation,t,s.mutation.getFieldMask(),ei.now())):o.set(t.key,So.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>o.set(e,t))),t.forEach(((e,t)=>{var n;return s.set(e,new Qa(t,null!==(n=o.get(e))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(e,t){const n=js();let r=new bo(((e,t)=>e-t)),i=Hs();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const o=t.get(e);if(null===o)return;let s=n.get(e)||So.empty();s=i.applyToLocalView(o,s),n.set(e,s);const a=(r.get(i.batchId)||Hs()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,l=r.value,u=$s();l.forEach((e=>{if(!i.has(e)){const r=gs(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),o.push(this.documentOverlayCache.saveOverlays(e,a,u))}return vi.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return si.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Uo(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):vi.resolve(Bs());let s=-1,a=i;return o.next((t=>vi.forEach(t,((t,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(t)?vi.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Hs()))).next((e=>({batchId:s,changes:Us(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new si(t)).next((e=>{let t=Ms();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Ms();return this.indexManager.getCollectionParents(e,r).next((o=>vi.forEach(o,(o=>{const s=function(e,t){return new Do(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(r));return this.getDocumentsMatchingCollectionQuery(e,s,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,To.newInvalidDocument(n)))}));let n=Ms();return r.forEach(((r,i)=>{const o=e.get(r);void 0!==o&&bs(o.mutation,i,So.empty(),ei.now()),Go(t,i)&&(n=n.insert(r,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return vi.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:ca(n.createTime)}),vi.resolve()}getNamedQuery(e,t){return vi.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:qa(e.bundledQuery),readTime:ca(e.readTime)}}(t)),vi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.overlays=new bo(si.comparator),this.es=new Map}getOverlay(e,t){return vi.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Bs();return vi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.oe(e,t,r)})),vi.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),vi.resolve()}getOverlaysForCollection(e,t,n){const r=Bs(),i=t.length+1,o=new si(t.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const e=s.getNext().value,o=e.getKey();if(!t.isPrefixOf(o.path))break;o.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return vi.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new bo(((e,t)=>e-t));const o=this.overlays.getIterator();for(;o.hasNext();){const e=o.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Bs(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const s=Bs(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>s.set(e,t))),s.size()>=r)break;return vi.resolve(s)}oe(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new $a(t,n));let i=this.es.get(t);void 0===i&&(i=Hs(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.ns=new Io(nl.ss),this.rs=new Io(nl.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new nl(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new nl(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new si(new ri([])),n=new nl(t,e),r=new nl(t,e+1),i=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),i.push(e.key)})),i}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new si(new ri([])),n=new nl(t,e),r=new nl(t,e+1);let i=Hs();return this.rs.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new nl(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nl{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return si.comparator(e.key,t.key)||Xr(e._s,t._s)}static os(e,t){return Xr(e._s,t._s)||si.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new Io(nl.ss)}checkEmpty(e){return vi.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ua(i,t,n,r);this.mutationQueue.push(o);for(const s of r)this.gs=this.gs.add(new nl(s.key,i)),this.indexManager.addToCollectionParentIndex(e,s.key.path.popLast());return vi.resolve(o)}lookupMutationBatch(e,t){return vi.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),i=r<0?0:r;return vi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return vi.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return vi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new nl(t,0),r=new nl(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);i.push(t)})),vi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Io(Xr);return t.forEach((e=>{const t=new nl(e,0),r=new nl(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),vi.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;si.isDocumentKey(i)||(i=i.child(""));const o=new nl(new si(i),0);let s=new Io(Xr);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(s=s.add(e._s)),!0)}),o),vi.resolve(this.Is(s))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Vr(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return vi.forEach(t.mutations,(r=>{const i=new nl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new nl(t,0),r=this.gs.firstAfterOrEqual(n);return vi.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,vi.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this.Es=e,this.docs=new bo(si.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return vi.resolve(n?n.document.mutableCopy():To.newInvalidDocument(t))}getEntries(e,t){let n=Ps();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():To.newInvalidDocument(e))})),vi.resolve(n)}getAllFromCollection(e,t,n){let r=Ps();const i=new si(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:e,value:{document:i}}=o.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||di(ui(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return vi.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Pr()}As(e,t){return vi.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ol(this)}getSize(e){return vi.resolve(this.size)}}class ol extends Ja{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),vi.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.persistence=e,this.Rs=new Fs((e=>Oo(e)),Ro),this.lastRemoteSnapshotVersion=ti.min(),this.highestTargetId=0,this.bs=0,this.Ps=new tl,this.targetCount=0,this.vs=Ya.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),vi.resolve()}getLastRemoteSnapshotVersion(e){return vi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return vi.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),vi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),vi.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Ya(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,vi.resolve()}updateTargetData(e,t){return this.Dn(t),vi.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,vi.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Rs.forEach(((o,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)})),vi.waitFor(i).next((()=>r))}getTargetCount(e){return vi.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return vi.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),vi.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),vi.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),vi.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return vi.resolve(n)}containsKey(e,t){return vi.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new gi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new sl(this),this.indexManager=new za,this.remoteDocumentCache=function(e){return new il(e)}((e=>this.referenceDelegate.xs(e))),this.yt=new Wa(t),this.Ns=new Za(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new el,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new rl(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){Nr("MemoryPersistence","Starting transaction:",e);const r=new ll(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ms(e,t){return vi.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class ll extends fi{constructor(e){super(),this.currentSequenceNumber=e}}class ul{constructor(e){this.persistence=e,this.Fs=new tl,this.$s=null}static Bs(e){return new ul(e)}get Ls(){if(this.$s)return this.$s;throw Pr()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),vi.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),vi.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),vi.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return vi.forEach(this.Ls,(n=>{const r=si.fromPath(n);return this.qs(e,r).next((e=>{e||t.removeEntry(r,ti.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.qs(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}qs(e,t){return vi.or([()=>vi.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=Hs(),r=Hs();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new cl(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((i=>i||this.Oi(e,t,r,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(Po(t))return vi.resolve(null);let n=$o(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Wo(t,null,"F"),n=$o(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Hs(...r);return this.Ni.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const o=this.Fi(t,r);return this.$i(t,o,i,n.readTime)?this.ki(e,Wo(t,null,"F")):this.Bi(e,o,t,n)}))))})))))}Oi(e,t,n,r){return Po(t)||r.isEqual(ti.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((i=>{const o=this.Fi(t,i);return this.$i(t,o,n,r)?this.Mi(e,t):(Rr()<=s["in"].DEBUG&&Nr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),zo(t)),this.Bi(e,o,t,li(r,-1)))}))}Fi(e,t){let n=new Io(Yo(e));return t.forEach(((t,r)=>{Go(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return Rr()<=s["in"].DEBUG&&Nr("QueryEngine","Using full collection scan to execute query:",zo(t)),this.Ni.getDocumentsMatchingQuery(e,t,ci.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new bo(Xr),this.Ui=new Fs((e=>Oo(e)),Ro),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xa(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qi)))}}function fl(e,t,n,r){return new hl(e,t,n,r)}async function pl(e,t){const n=Mr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],o=[];let s=Hs();for(const e of r){i.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){o.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return n.localDocuments.getDocuments(e,s).next((e=>({ji:e,removedBatchIds:i,addedBatchIds:o})))}))}))}function vl(e,t){const n=Mr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,o=i.keys();let s=vi.resolve();return o.forEach((e=>{s=s.next((()=>r.getEntry(t,e))).next((t=>{const o=n.docVersions.get(e);Vr(null!==o),t.version.compareTo(o)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),s.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Hs();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function ml(e){const t=Mr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function gl(e,t){const n=Mr(e),r=t.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const s=[];t.targetChanges.forEach(((o,a)=>{const l=i.get(a);if(!l)return;s.push(n.Cs.removeMatchingKeys(e,o.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,o.addedDocuments,a))));let u=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Ci.EMPTY_BYTE_STRING,ti.min()).withLastLimboFreeSnapshotVersion(ti.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,u,o)&&s.push(n.Cs.updateTargetData(e,u))}));let a=Ps(),l=Hs();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),s.push(yl(e,o,t.documentUpdates).next((e=>{a=e.Wi,l=e.zi}))),!r.isEqual(ti.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));s.push(t)}return vi.waitFor(s).next((()=>o.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.qi=i,e)))}function yl(e,t,n){let r=Hs(),i=Hs();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Ps();return n.forEach(((n,o)=>{const s=e.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(ti.min())?(t.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(o),r=r.insert(n,o)):Nr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)})),{Wi:r,zi:i}}))}function bl(e,t){const n=Mr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function wl(e,t){const n=Mr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((i=>i?(r=i,vi.resolve(r)):n.Cs.allocateTargetId(e).next((i=>(r=new ja(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e}))}async function _l(e,t,n){const r=Mr(e),i=r.qi.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!mi(e))throw e;Nr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qi=r.qi.remove(t),r.Ui.delete(i.target)}function Il(e,t,n){const r=Mr(e);let i=ti.min(),o=Hs();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Mr(e),i=r.Ui.get(n);return void 0!==i?vi.resolve(r.qi.get(i)):r.Cs.getTargetData(t,n)}(r,e,$o(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{o=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?i:ti.min(),n?o:Hs()))).next((e=>(El(r,Ko(t),e),{documents:e,Hi:o})))))}function El(e,t,n){let r=e.Ki.get(t)||ti.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}class Sl{constructor(){this.activeTargetIds=Gs()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kl{constructor(){this.Lr=new Sl,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Sl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{Ur(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Nr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Nr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){const o=this.ho(e,t);Nr("RestConnection","Sending: ",o,n);const s={};return this.lo(s,r,i),this.fo(e,o,s,n).then((e=>(Nr("RestConnection","Received: ",e),e)),(t=>{throw Fr("RestConnection",`${e} failed with error: `,t,"url: ",o,"request:",n),t}))}_o(e,t,n,r,i,o){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ar,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=xl[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((i,o)=>{const s=new Cr;s.setWithCredentials(!0),s.listenOnce(_r.COMPLETE,(()=>{try{switch(s.getLastErrorCode()){case wr.NO_ERROR:const t=s.getResponseJson();Nr("Connection","XHR received:",JSON.stringify(t)),i(t);break;case wr.TIMEOUT:Nr("Connection",'RPC "'+e+'" timed out'),o(new Br(Ur.DEADLINE_EXCEEDED,"Request time out"));break;case wr.HTTP_ERROR:const n=s.getStatus();if(Nr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",s.getResponseText()),n>0){let e=s.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ur).indexOf(t)>=0?t:Ur.UNKNOWN}(t.status);o(new Br(e,t.message))}else o(new Br(Ur.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new Br(Ur.UNAVAILABLE,"Connection failed."));break;default:Pr()}}finally{Nr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);s.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=yr(),o=br(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new Sr({})),this.lo(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;const a=r.join("");Nr("Connection","Creating WebChannel: "+a,s);const l=i.createWebChannel(a,s);let u=!1,c=!1;const d=new Al({Hr:e=>{c?Nr("Connection","Not sending because WebChannel is closed:",e):(u||(Nr("Connection","Opening WebChannel transport."),l.open(),u=!0),Nr("Connection","WebChannel sending:",e),l.send(e))},Jr:()=>l.close()}),h=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return h(l,kr.EventType.OPEN,(()=>{c||Nr("Connection","WebChannel transport opened.")})),h(l,kr.EventType.CLOSE,(()=>{c||(c=!0,Nr("Connection","WebChannel transport closed"),d.io())})),h(l,kr.EventType.ERROR,(e=>{c||(c=!0,Fr("Connection","WebChannel transport errored:",e),d.io(new Br(Ur.UNAVAILABLE,"The operation could not be completed")))})),h(l,kr.EventType.MESSAGE,(e=>{var t;if(!c){const n=e.data[0];Vr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Nr("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Os[e];if(void 0!==t)return Ds(t)}(e),n=i.message;void 0===t&&(t=Ur.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),c=!0,d.io(new Br(t,n)),l.close()}else Nr("Connection","WebChannel received:",n),d.ro(n)}})),h(o,Ir.STAT_EVENT,(e=>{e.stat===Er.PROXY?Nr("Connection","Detected buffering proxy"):e.stat===Er.NOPROXY&&Nr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.so()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(e){return new sa(e,!0)}class Dl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&Nr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t,n,r,i,o,s,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Dl(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===Ur.RESOURCE_EXHAUSTED?(Dr(t.toString()),Dr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===Ur.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new Br(Ur.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return Nr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(Nr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ll extends Fl{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=wa(this.yt,e),n=function(e){if(!("targetChange"in e))return ti.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ti.min():t.readTime?ca(t.readTime):ti.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=ga(this.yt),t.addTarget=function(e,t){let n;const r=t.target;return n=No(r)?{documents:Ea(e,r)}:{query:Sa(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=la(e,t.resumeToken):t.snapshotVersion.compareTo(ti.min())>0&&(n.readTime=aa(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);const n=Ca(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=ga(this.yt),t.removeTarget=e,this.Bo(t)}}class Pl extends Fl{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Vr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=Ia(e.writeResults,e.commitTime),n=ca(e.commitTime);return this.listener.Zo(n,t)}return Vr(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ga(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>_a(this.yt,e)))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new Br(Ur.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Br(Ur.UNKNOWN,e.toString())}))}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection._o(e,t,n,i,o,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Br(Ur.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class Ml{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Dr(t),this.ou=!1):Nr("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur((e=>{n.enqueueAndForget((async()=>{Kl(this)&&(Nr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Mr(e);t._u.add(4),await $l(t),t.gu.set("Unknown"),t._u.delete(4),await Bl(t)}(this))}))})),this.gu=new Ml(n,r)}}async function Bl(e){if(Kl(e))for(const t of e.wu)await t(!0)}async function $l(e){for(const t of e.wu)await t(!1)}function jl(e,t){const n=Mr(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Gl(n)?zl(n):hu(n).ko()&&ql(n,t))}function Wl(e,t){const n=Mr(e),r=hu(n);n.du.delete(t),r.ko()&&Hl(n,t),0===n.du.size&&(r.ko()?r.Fo():Kl(n)&&n.gu.set("Unknown"))}function ql(e,t){e.yu.Ot(t.targetId),hu(e).zo(t)}function Hl(e,t){e.yu.Ot(t),hu(e).Ho(t)}function zl(e){e.yu=new ea({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),hu(e).start(),e.gu.uu()}function Gl(e){return Kl(e)&&!hu(e).No()&&e.du.size>0}function Kl(e){return 0===Mr(e)._u.size}function Yl(e){e.yu=void 0}async function Jl(e){e.du.forEach(((t,n)=>{ql(e,t)}))}async function Ql(e,t){Yl(e),Gl(e)?(e.gu.hu(t),zl(e)):e.gu.set("Unknown")}async function Xl(e,t,n){if(e.gu.set("Online"),t instanceof Xs&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){Nr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Zl(e,n)}else if(t instanceof Js?e.yu.Kt(t):t instanceof Qs?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(ti.min()))try{const t=await ml(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.Zt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(Ci.EMPTY_BYTE_STRING,n.snapshotVersion)),Hl(e,t);const r=new ja(n.target,t,1,n.sequenceNumber);ql(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Nr("RemoteStore","Failed to raise snapshot:",t),await Zl(e,t)}}async function Zl(e,t,n){if(!mi(t))throw t;e._u.add(1),await $l(e),e.gu.set("Offline"),n||(n=()=>ml(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Nr("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Bl(e)}))}function eu(e,t){return t().catch((n=>Zl(e,n,t)))}async function tu(e){const t=Mr(e),n=fu(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;nu(t);)try{const e=await bl(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,ru(t,e)}catch(e){await Zl(t,e)}iu(t)&&ou(t)}function nu(e){return Kl(e)&&e.fu.length<10}function ru(e,t){e.fu.push(t);const n=fu(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function iu(e){return Kl(e)&&!fu(e).No()&&e.fu.length>0}function ou(e){fu(e).start()}async function su(e){fu(e).eu()}async function au(e){const t=fu(e);for(const n of e.fu)t.Xo(n.mutations)}async function lu(e,t,n){const r=e.fu.shift(),i=Ba.from(r,t,n);await eu(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await tu(e)}async function uu(e,t){t&&fu(e).Yo&&await async function(e,t){if(n=t.code,Ns(n)&&n!==Ur.ABORTED){const n=e.fu.shift();fu(e).Mo(),await eu(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await tu(e)}var n}(e,t),iu(e)&&ou(e)}async function cu(e,t){const n=Mr(e);n.asyncQueue.verifyOperationInProgress(),Nr("RemoteStore","RemoteStore received new credentials");const r=Kl(n);n._u.add(3),await $l(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Bl(n)}async function du(e,t){const n=Mr(e);t?(n._u.delete(2),await Bl(n)):t||(n._u.add(2),await $l(n),n.gu.set("Unknown"))}function hu(e){return e.pu||(e.pu=function(e,t,n){const r=Mr(e);return r.su(),new Ll(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:Jl.bind(null,e),Zr:Ql.bind(null,e),Wo:Xl.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),Gl(e)?zl(e):e.gu.set("Unknown")):(await e.pu.stop(),Yl(e))}))),e.pu}function fu(e){return e.Iu||(e.Iu=function(e,t,n){const r=Mr(e);return r.su(),new Pl(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(e.datastore,e.asyncQueue,{Yr:su.bind(null,e),Zr:uu.bind(null,e),tu:au.bind(null,e),Zo:lu.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await tu(e)):(await e.Iu.stop(),e.fu.length>0&&(Nr("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class pu{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new $r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,s=new pu(e,t,o,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Br(Ur.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vu(e,t){if(Dr("AsyncQueue",`${t}: ${e}`),mi(e))return new Br(Ur.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){this.comparator=e?(t,n)=>e(t,n)||si.comparator(t.key,n.key):(e,t)=>si.comparator(e.key,t.key),this.keyedMap=Ms(),this.sortedSet=new bo(this.comparator)}static emptySet(e){return new mu(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mu))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new mu;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(){this.Tu=new bo(si.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Pr():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class yu{constructor(e,t,n,r,i,o,s,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach((e=>{o.push({type:0,doc:e})})),new yu(e,t,mu.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this.Au=void 0,this.listeners=[]}}class wu{constructor(){this.queries=new Fs((e=>Ho(e)),qo),this.onlineState="Unknown",this.Ru=new Set}}async function _u(e,t){const n=Mr(e),r=t.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new bu),i)try{o.Au=await n.onListen(r)}catch(e){const n=vu(e,`Initialization of query '${zo(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,o),o.listeners.push(t),t.bu(n.onlineState),o.Au&&t.Pu(o.Au)&&ku(n)}async function Iu(e,t){const n=Mr(e),r=t.query;let i=!1;const o=n.queries.get(r);if(o){const e=o.listeners.indexOf(t);e>=0&&(o.listeners.splice(e,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Eu(e,t){const n=Mr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Pu(i)&&(r=!0);t.Au=i}}r&&ku(n)}function Su(e,t,n){const r=Mr(e),i=r.queries.get(t);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(t)}function ku(e){e.Ru.forEach((e=>{e.next()}))}class Cu{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new yu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=yu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tu{constructor(e){this.key=e}}class xu{constructor(e){this.key=e}}class Au{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Hs(),this.mutatedKeys=Hs(),this.Gu=Yo(e),this.Qu=new mu(this.Gu)}get ju(){return this.qu}Wu(e,t){const n=t?t.zu:new gu,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=Go(this.query,t)?t:null,d=!!u&&this.mutatedKeys.has(u.key),h=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?d!==h&&(n.track({type:3,doc:c}),f=!0):this.Hu(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Gu(c,a)>0||l&&this.Gu(c,l)<0)&&(s=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(s=!0)),f&&(c?(o=o.add(c),i=h?i.add(e):i.delete(e)):(o=o.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const e="F"===this.query.limitType?o.last():o.first();o=o.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:o,zu:n,$i:s,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Pr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const o=t?this.Yu():[],s=0===this.Ku.size&&this.current?1:0,a=s!==this.Uu;return this.Uu=s,0!==i.length||a?{snapshot:new yu(this.query,e.Qu,r,i,e.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new gu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.qu=this.qu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.qu=this.qu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Hs(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new xu(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new Tu(n))})),t}tc(e){this.qu=e.Hi,this.Ku=Hs();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return yu.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class Ou{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ru{constructor(e){this.key=e,this.nc=!1}}class Nu{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Fs((e=>Ho(e)),qo),this.rc=new Map,this.oc=new Set,this.uc=new bo(si.comparator),this.cc=new Map,this.ac=new tl,this.hc={},this.lc=new Map,this.fc=Ya.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Du(e,t){const n=Xu(e);let r,i;const o=n.ic.get(t);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.ec();else{const e=await wl(n.localStore,$o(t));n.isPrimaryClient&&jl(n.remoteStore,e);const o=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Fu(n,t,r,"current"===o,e.resumeToken)}return i}async function Fu(e,t,n,r,i){e._c=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await Il(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,i))));const o=r&&r.targetChanges.get(t.targetId),s=t.view.applyChanges(i,e.isPrimaryClient,o);return zu(e,t.targetId,s.Xu),s.snapshot}(e,t,n,r);const o=await Il(e.localStore,t,!0),s=new Au(t,o.Hi),a=s.Wu(o.documents),l=Ys.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=s.applyChanges(a,e.isPrimaryClient,l);zu(e,n,u.Xu);const c=new Ou(t,n,s);return e.ic.set(t,c),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function Lu(e,t){const n=Mr(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((e=>!qo(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await _l(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Wl(n.remoteStore,r.targetId),qu(n,r.targetId)})).catch(pi)):(qu(n,r.targetId),await _l(n.localStore,r.targetId,!0))}async function Pu(e,t,n){const r=Zu(e);try{const e=await function(e,t){const n=Mr(e),r=ei.now(),i=t.reduce(((e,t)=>e.add(t.key)),Hs());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Ps(),l=Hs();return n.Gi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{o=i;const s=[];for(const e of t){const t=ws(e,o.get(e.key).overlayedDocument);null!=t&&s.push(new Es(e.key,t,Co(t.value.mapValue),ps.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,s,t)})).next((t=>{s=t;const r=t.applyToLocalDocumentSet(o,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:s.batchId,changes:Us(o)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new bo(Xr)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Yu(r,e.changes),await tu(r.remoteStore)}catch(e){const t=vu(e,"Failed to persist write");n.reject(t)}}async function Vu(e,t){const n=Mr(e);try{const e=await gl(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.cc.get(t);r&&(Vr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?Vr(r.nc):e.removedDocuments.size>0&&(Vr(r.nc),r.nc=!1))})),await Yu(n,e,t)}catch(e){await pi(e)}}function Mu(e,t,n){const r=Mr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Mr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.bu(t)&&(r=!0)})),r&&ku(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Uu(e,t,n){const r=Mr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),o=i&&i.key;if(o){let e=new bo(si.comparator);e=e.insert(o,To.newNoDocument(o,ti.min()));const n=Hs().add(o),i=new Ks(ti.min(),new Map,new Io(Xr),e,n);await Vu(r,i),r.uc=r.uc.remove(o),r.cc.delete(t),Ku(r)}else await _l(r.localStore,t,!1).then((()=>qu(r,t,n))).catch(pi)}async function Bu(e,t){const n=Mr(e),r=t.batch.batchId;try{const e=await vl(n.localStore,t);Wu(n,r,null),ju(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yu(n,e)}catch(e){await pi(e)}}async function $u(e,t,n){const r=Mr(e);try{const e=await function(e,t){const n=Mr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Vr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Wu(r,t,n),ju(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Yu(r,e)}catch(n){await pi(n)}}function ju(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function Wu(e,t,n){const r=Mr(e);let i=r.hc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function qu(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||Hu(e,t)}))}function Hu(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(Wl(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Ku(e))}function zu(e,t,n){for(const r of n)r instanceof Tu?(e.ac.addReference(r.key,t),Gu(e,r)):r instanceof xu?(Nr("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||Hu(e,r.key)):Pr()}function Gu(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(Nr("SyncEngine","New document in limbo: "+n),e.oc.add(r),Ku(e))}function Ku(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new si(ri.fromString(t)),r=e.fc.next();e.cc.set(r,new Ru(n)),e.uc=e.uc.insert(n,r),jl(e.remoteStore,new ja($o(Lo(n.path)),r,2,gi.at))}}async function Yu(e,t,n){const r=Mr(e),i=[],o=[],s=[];r.ic.isEmpty()||(r.ic.forEach(((e,a)=>{s.push(r._c(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=cl.Ci(a.targetId,e);o.push(t)}})))})),await Promise.all(s),r.sc.Wo(i),await async function(e,t){const n=Mr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>vi.forEach(t,(t=>vi.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>vi.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!mi(e))throw e;Nr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.qi.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(e,i)}}}(r.localStore,o))}async function Ju(e,t){const n=Mr(e);if(!n.currentUser.isEqual(t)){Nr("SyncEngine","User change. New user:",t.toKey());const e=await pl(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new Br(Ur.CANCELLED,t))}))})),e.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Yu(n,e.ji)}}function Qu(e,t){const n=Mr(e),r=n.cc.get(t);if(r&&r.nc)return Hs().add(r.key);{let e=Hs();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}function Xu(e){const t=Mr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Vu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qu.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Uu.bind(null,t),t.sc.Wo=Eu.bind(null,t.eventManager),t.sc.wc=Su.bind(null,t.eventManager),t}function Zu(e){const t=Mr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Bu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$u.bind(null,t),t}class ec{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Nl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return fl(this.persistence,new dl,e.initialUser,this.yt)}yc(e){return new al(ul.Bs,this.yt)}gc(e){return new kl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Mu(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ju.bind(null,this.syncEngine),await du(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wu}createDatastore(e){const t=Nl(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ol(r));var r;return function(e,t,n,r){return new Vl(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Mu(this.syncEngine,e,0),o=Tl.C()?new Tl:new Cl,new Ul(t,n,r,i,o);var t,n,r,i,o}createSyncEngine(e,t){return function(e,t,n,r,i,o,s){const a=new Nu(e,t,n,r,i,o);return s&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Mr(e);Nr("RemoteStore","RemoteStore shutting down."),t._u.add(5),await $l(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(e,t,n){if(!n)throw new Br(Ur.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function rc(e,t,n,r){if(!0===t&&!0===r)throw new Br(Ur.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ic(e){if(!si.isDocumentKey(e))throw new Br(Ur.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oc(e){if(si.isDocumentKey(e))throw new Br(Ur.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function sc(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Pr()}function ac(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Br(Ur.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sc(e);throw new Br(Ur.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lc=new Map;class uc{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Br(Ur.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Br(Ur.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Br(Ur.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Br(Ur.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uc(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Wr;switch(e.type){case"gapi":const t=e.client;return new Gr(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Br(Ur.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=lc.get(e);t&&(Nr("ComponentProvider","Removing Datastore"),lc.delete(e),t.terminate())}(this),Promise.resolve()}}function dc(e,t,n,r={}){var i;const o=(e=ac(e,cc))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==t&&Fr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=xr.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new Br(Ur.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new xr(o)}e._authCredentials=new qr(new jr(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hc(this.firestore,e,this._key)}}class fc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new fc(this.firestore,e,this._query)}}class pc extends fc{constructor(e,t,n){super(e,t,Lo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hc(this.firestore,null,new si(e))}withConverter(e){return new pc(this.firestore,e,this._path)}}function vc(e,t,...n){if(e=(0,a.m9)(e),nc("collection","path",t),e instanceof cc){const r=ri.fromString(t,...n);return oc(r),new pc(e,null,r)}{if(!(e instanceof hc||e instanceof pc))throw new Br(Ur.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ri.fromString(t,...n));return oc(r),new pc(e.firestore,null,r)}}function mc(e,t){if(e=ac(e,cc),nc("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new Br(Ur.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new fc(e,null,function(e){return new Do(ri.emptyPath(),e)}(t))}function gc(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=Qr.R()),nc("doc","path",t),e instanceof cc){const r=ri.fromString(t,...n);return ic(r),new hc(e,null,new si(r))}{if(!(e instanceof hc||e instanceof pc))throw new Br(Ur.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ri.fromString(t,...n));return ic(r),new hc(e.firestore,e instanceof pc?e.converter:null,new si(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Dr("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bc{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=xr.UNAUTHENTICATED,this.clientId=Qr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Nr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Nr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Br(Ur.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=vu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function wc(e,t){e.asyncQueue.verifyOperationInProgress(),Nr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await pl(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function _c(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ic(e);Nr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>cu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>cu(t.remoteStore,n))),e.onlineComponents=t}async function Ic(e){return e.offlineComponents||(Nr("FirestoreClient","Using default OfflineComponentProvider"),await wc(e,new ec)),e.offlineComponents}async function Ec(e){return e.onlineComponents||(Nr("FirestoreClient","Using default OnlineComponentProvider"),await _c(e,new tc)),e.onlineComponents}function Sc(e){return Ec(e).then((e=>e.syncEngine))}async function kc(e){const t=await Ec(e),n=t.eventManager;return n.onListen=Du.bind(null,t.syncEngine),n.onUnlisten=Lu.bind(null,t.syncEngine),n}function Cc(e,t,n={}){const r=new $r;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const o=new yc({next:o=>{t.enqueueAndForget((()=>Iu(e,s)));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new Br(Ur.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new Br(Ur.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),s=new Cu(Lo(n.path),o,{includeMetadataChanges:!0,Nu:!0});return _u(e,s)}(await kc(e),e.asyncQueue,t,n,r))),r.promise}function Tc(e,t,n={}){const r=new $r;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const o=new yc({next:n=>{t.enqueueAndForget((()=>Iu(e,s))),n.fromCache&&"server"===r.source?i.reject(new Br(Ur.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),s=new Cu(n,o,{includeMetadataChanges:!0,Nu:!0});return _u(e,s)}(await kc(e),e.asyncQueue,t,n,r))),r.promise}class xc{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Dl(this,"async_queue_retry"),this.Wc=()=>{const e=Rl();e&&Nr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=Rl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=Rl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise((()=>{}));const t=new $r;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(I){if(!mi(I))throw I;Nr("AsyncQueue","Operation failed with retryable error: "+I)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Dr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=pu.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.Uc.push(r),r}zc(){this.Kc&&Pr()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function Ac(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Oc extends cc{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new xc,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Dc(this),this._firestoreClient.terminate()}}function Rc(e,t){const n="object"==typeof e?e:(0,i.Mq)(),r="string"==typeof e?e:t||"(default)",o=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const e=(0,a.P0)("firestore");e&&dc(o,...e)}return o}function Nc(e){return e._firestoreClient||Dc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Dc(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new yi(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new bc(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fc(Ci.fromBase64String(e))}catch(e){throw new Br(Ur.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Fc(Ci.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Br(Ur.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oi(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pc{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Br(Ur.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Br(Ur.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Xr(this._lat,e._lat)||Xr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=/^__.*__$/;class Uc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Es(e,this.data,this.fieldMask,t,this.fieldTransforms):new Is(e,this.data,t,this.fieldTransforms)}}class Bc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Es(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function $c(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Pr()}}class jc{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new jc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return rd(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if($c(this.sa)&&Mc.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Wc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||Nl(e)}da(e,t,n,r=!1){return new jc({sa:e,methodName:t,fa:n,path:oi.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function qc(e){const t=e._freezeSettings(),n=Nl(e._databaseId);return new Wc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Hc(e,t,n,r,i,o={}){const s=e.da(o.merge||o.mergeFields?2:0,t,n,i);Zc("Data must be an object, but it was:",s,r);const a=Qc(r,s);let l,u;if(o.merge)l=new So(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const e=[];for(const r of o.mergeFields){const i=ed(t,r,n);if(!s.contains(i))throw new Br(Ur.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);id(e,i)||e.push(i)}l=new So(e),u=s.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=s.fieldTransforms;return new Uc(new ko(a),l,u)}class zc extends Pc{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zc}}function Gc(e,t,n,r){const i=e.da(1,t,n);Zc("Data must be an object, but it was:",i,r);const o=[],s=ko.empty();_i(r,((e,r)=>{const l=nd(t,e,n);r=(0,a.m9)(r);const u=i.ca(l);if(r instanceof zc)o.push(l);else{const e=Jc(r,u);null!=e&&(o.push(l),s.set(l,e))}}));const l=new So(o);return new Bc(s,l,i.fieldTransforms)}function Kc(e,t,n,r,i,o){const s=e.da(1,t,n),l=[ed(t,r,n)],u=[i];if(o.length%2!=0)throw new Br(Ur.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<o.length;a+=2)l.push(ed(t,o[a])),u.push(o[a+1]);const c=[],d=ko.empty();for(let f=l.length-1;f>=0;--f)if(!id(c,l[f])){const e=l[f];let t=u[f];t=(0,a.m9)(t);const n=s.ca(e);if(t instanceof zc)c.push(e);else{const r=Jc(t,n);null!=r&&(c.push(e),d.set(e,r))}}const h=new So(c);return new Bc(d,h,s.fieldTransforms)}function Yc(e,t,n,r=!1){return Jc(n,e.da(r?4:3,t))}function Jc(e,t){if(Xc(e=(0,a.m9)(e)))return Zc("Unsupported field value:",t,e),Qc(e,t);if(e instanceof Pc)return function(e,t){if(!$c(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Jc(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Zo(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ei.fromDate(e);return{timestampValue:aa(t.yt,n)}}if(e instanceof ei){const n=new ei(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:aa(t.yt,n)}}if(e instanceof Vc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Fc)return{bytesValue:la(t.yt,e._byteString)};if(e instanceof hc){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:da(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${sc(e)}`)}(e,t)}function Qc(e,t){const n={};return Ii(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_i(e,((e,r)=>{const i=Jc(r,t.ra(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Xc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ei||e instanceof Vc||e instanceof Fc||e instanceof hc||e instanceof Pc)}function Zc(e,t,n){if(!Xc(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=sc(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function ed(e,t,n){if((t=(0,a.m9)(t))instanceof Lc)return t._internalPath;if("string"==typeof t)return nd(e,t);throw rd("Field path arguments must be of type string or ",e,!1,void 0,n)}const td=new RegExp("[~\\*/\\[\\]]");function nd(e,t,n){if(t.search(td)>=0)throw rd(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Lc(...t.split("."))._internalPath}catch(r){throw rd(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function rd(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new Br(Ur.INVALID_ARGUMENT,a+e+l)}function id(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new hc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new sd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ad("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sd extends od{data(){return super.data()}}function ad(e,t){return"string"==typeof t?nd(e,t):t instanceof Lc?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Br(Ur.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ud{}class cd extends ud{}function dd(e,t,...n){let r=[];t instanceof ud&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof pd)).length,n=e.filter((e=>e instanceof hd)).length;if(t>1||t>0&&n>0)throw new Br(Ur.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class hd extends cd{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new hd(e,t,n)}_apply(e){const t=this._parse(e);return gd(e._query,t),new fc(e.firestore,e.converter,jo(e._query,t))}_parse(e){const t=qc(e.firestore),n=function(e,t,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new Br(Ur.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){md(s,o);const t=[];for(const n of s)t.push(vd(r,e,n));a={arrayValue:{values:t}}}else a=vd(r,e,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||md(s,o),a=Yc(n,t,s,"in"===o||"not-in"===o);return eo.create(i,o,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function fd(e,t,n){const r=t,i=ad("where",e);return hd._create(i,r,n)}class pd extends ud{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new pd(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:to.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)gd(n,i),n=jo(n,i)}(e._query,t),new fc(e.firestore,e.converter,jo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function vd(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Br(Ur.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Uo(t)&&-1!==n.indexOf("/"))throw new Br(Ur.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ri.fromString(n));if(!si.isDocumentKey(r))throw new Br(Ur.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ji(e,new si(r))}if(n instanceof hc)return ji(e,n._key);throw new Br(Ur.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sc(n)}.`)}function md(e,t){if(!Array.isArray(e)||0===e.length)throw new Br(Ur.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Br(Ur.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function gd(e,t){if(t.isInequality()){const n=Mo(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new Br(Ur.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=Vo(e);null!==i&&yd(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Br(Ur.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Br(Ur.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function yd(e,t,n){if(!n.isEqual(t))throw new Br(Ur.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class bd{convertValue(e,t="none"){switch(Li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ai(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Pr()}}convertObject(e,t){const n={};return _i(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Vc(Ai(e.latitude),Ai(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ni(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Di(e));default:return null}}convertTimestamp(e){const t=xi(e);return new ei(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ri.fromString(e);Vr(La(n));const r=new bi(n.get(1),n.get(3)),i=new si(n.popFirst(5));return r.isEqual(t)||Dr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _d{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Id extends od{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ed(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ad("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ed extends Id{data(e={}){return super.data(e)}}class Sd{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new _d(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Ed(this._firestore,this._userDataWriter,n.key,n,new _d(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Br(Ur.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Ed(e._firestore,e._userDataWriter,n.doc.key,n.doc,new _d(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Ed(e._firestore,e._userDataWriter,t.doc.key,t.doc,new _d(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,o=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),o=n.indexOf(t.doc.key)),{type:kd(t.type),doc:r,oldIndex:i,newIndex:o}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function kd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Pr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cd(e){e=ac(e,hc);const t=ac(e.firestore,Oc);return Cc(Nc(t),e._key).then((n=>Fd(t,e,n)))}class Td extends bd{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new hc(this.firestore,null,t)}}function xd(e){e=ac(e,fc);const t=ac(e.firestore,Oc),n=Nc(t),r=new Td(t);return ld(e._query),Tc(n,e._query).then((n=>new Sd(t,r,e,n)))}function Ad(e,t,n,...r){e=ac(e,hc);const i=ac(e.firestore,Oc),o=qc(i);let s;return s="string"==typeof(t=(0,a.m9)(t))||t instanceof Lc?Kc(o,"updateDoc",e._key,t,n,r):Gc(o,"updateDoc",e._key,t),Dd(i,[s.toMutation(e._key,ps.exists(!0))])}function Od(e){return Dd(ac(e.firestore,Oc),[new Ts(e._key,ps.none())])}function Rd(e,t){const n=ac(e.firestore,Oc),r=gc(e),i=wd(e.converter,t);return Dd(n,[Hc(qc(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,ps.exists(!1))]).then((()=>r))}function Nd(e,...t){var n,r,i;e=(0,a.m9)(e);let o={includeMetadataChanges:!1},s=0;"object"!=typeof t[s]||Ac(t[s])||(o=t[s],s++);const l={includeMetadataChanges:o.includeMetadataChanges};if(Ac(t[s])){const e=t[s];t[s]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[s+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[s+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,c,d;if(e instanceof hc)c=ac(e.firestore,Oc),d=Lo(e._key.path),u={next:n=>{t[s]&&t[s](Fd(c,e,n))},error:t[s+1],complete:t[s+2]};else{const n=ac(e,fc);c=ac(n.firestore,Oc),d=n._query;const r=new Td(c);u={next:e=>{t[s]&&t[s](new Sd(c,r,n,e))},error:t[s+1],complete:t[s+2]},ld(e._query)}return function(e,t,n,r){const i=new yc(r),o=new Cu(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>_u(await kc(e),o))),()=>{i.bc(),e.asyncQueue.enqueueAndForget((async()=>Iu(await kc(e),o)))}}(Nc(c),d,l,u)}function Dd(e,t){return function(e,t){const n=new $r;return e.asyncQueue.enqueueAndForget((async()=>Pu(await Sc(e),t,n))),n.promise}(Nc(e),t)}function Fd(e,t,n){const r=n.docs.get(t._key),i=new Td(e);return new Id(e,i,t._key,r,new _d(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Ar=e}(i.Jn),(0,i.Xd)(new o.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),o=new Oc(new Hr(e.getProvider("auth-internal")),new Yr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Br(Ur.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bi(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Tr,"3.8.1",e),(0,i.KN)(Tr,"3.8.1","esm2017")}()},3831:function(e,t,n){"use strict";n.d(t,{X3:function(){return _}});n(2801);const r=(e,t)=>t.some((t=>e instanceof t));let i,o;function s(){return i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l=new WeakMap,u=new WeakMap,c=new WeakMap,d=new WeakMap,h=new WeakMap;function f(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(b(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&l.set(t,e)})).catch((()=>{})),h.set(t,e),t}function p(e){if(u.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));u.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function m(e){v=e(v)}function g(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?a().includes(e)?function(...t){return e.apply(w(this),t),b(l.get(this))}:function(...t){return b(e.apply(w(this),t))}:function(t,...n){const r=e.call(w(this),t,...n);return c.set(r,t.sort?t.sort():[t]),b(r)}}function y(e){return"function"===typeof e?g(e):(e instanceof IDBTransaction&&p(e),r(e,s())?new Proxy(e,v):e)}function b(e){if(e instanceof IDBRequest)return f(e);if(d.has(e))return d.get(e);const t=y(e);return t!==e&&(d.set(e,t),h.set(t,e)),t}const w=e=>h.get(e);function _(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=b(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(b(s.result),e.oldVersion,e.newVersion,b(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],E=["put","add","delete","clear"],S=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=E.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return S.set(t,o),o}m((e=>({...e,get:(t,n,r)=>k(t,n)||e.get(t,n,r),has:(t,n)=>!!k(t,n)||e.has(t,n)})))},2483:function(e,t,n){"use strict";n.d(t,{PO:function(){return U},p7:function(){return tt},tv:function(){return it}});n(7658),n(541);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof window;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function l(e,t){const n={};for(const r in t){const i=t[r];n[r]=c(i)?i.map(e):e(i)}return n}const u=()=>{},c=Array.isArray;const d=/\/$/,h=e=>e.replace(d,"");function f(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),o=t.slice(l+1,a>-1?a:t.length),i=e(o)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=_(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function v(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function m(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&g(t.matched[r],n.matched[i])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function g(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!b(e[n],t[n]))return!1;return!0}function b(e,t){return c(e)?w(e,t):c(t)?w(t,e):e===t}function w(e,t){return c(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function _(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],"."!==o){if(".."!==o)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var I,E;(function(e){e["pop"]="pop",e["push"]="push"})(I||(I={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(E||(E={}));function S(e){if(!e)if(o){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),h(e)}const k=/^[^#]+#/;function C(e,t){return e.replace(k,"#")+t}function T(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const x=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=T(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function O(e,t){const n=history.state?history.state.position-t:-1;return n+e}const R=new Map;function N(e,t){R.set(e,t)}function D(e){const t=R.get(e);return R.delete(e),t}let F=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),v(n,"")}const s=v(n,e);return s+r+i}function P(e,t,n,r){let i=[],o=[],s=null;const l=({state:o})=>{const a=L(e,location),l=n.value,u=t.value;let c=0;if(o){if(n.value=a,t.value=o,s&&s===l)return void(s=null);c=u?o.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,l,{delta:c,type:I.pop,direction:c?c>0?E.forward:E.back:E.unknown})}))};function u(){s=n.value}function c(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function d(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:x()}),"")}function h(){for(const e of o)e();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:u,listen:c,destroy:h}}function V(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?x():null}}function M(e){const{history:t,location:n}=window,r={value:L(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:F()+e+r;try{t[s?"replaceState":"pushState"](o,"",l),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](l)}}function s(e,n){const s=a({},t.state,V(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function l(e,n){const s=a({},i.value,t.state,{forward:e,scroll:x()});o(s.current,s,!0);const l=a({},V(r.value,e,null),{position:s.position+1},n);o(e,l,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:l,replace:s}}function U(e){e=S(e);const t=M(e),n=P(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:C.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function B(e){return"string"===typeof e||e&&"object"===typeof e}function $(e){return"string"===typeof e||"symbol"===typeof e}const j={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},W=Symbol("");var q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(q||(q={}));function H(e,t){return a(new Error,{type:e,[W]:!0},t)}function z(e,t){return e instanceof Error&&W in e&&(null==t||!!(e.type&t))}const G="[^/]+?",K={sensitive:!1,strict:!1,start:!0,end:!0},Y=/[.+*?^${}()[\]/\\]/g;function J(e,t){const n=a({},K,t),r=[];let i=n.start?"^":"";const o=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(Y,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;o.push({name:e,repeatable:n,optional:l});const c=u||G;if(c!==G){s+=10;try{new RegExp(`(${c})`)}catch(d){throw new Error(`Invalid custom RegExp for param "${e}" (${c}): `+d.message)}}let h=n?`((?:${c})(?:/(?:${c}))*)`:`(${c})`;t||(h=l&&a.length<2?`(?:/${h})`:"/"+h),l&&(h+="?"),i+=h,s+=20,l&&(s+=-8),n&&(s+=-20),".*"===c&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function l(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,l=o in t?t[o]:"";if(c(l)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=c(l)?l.join("/"):l;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:s,score:r,keys:o,parse:l,stringify:u}}function Q(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function X(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Q(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(Z(r))return 1;if(Z(i))return-1}return i.length-r.length}function Z(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,l=0,u="",c="";function d(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:c,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function h(){u+=a}while(l<e.length)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&d(),s()):":"===a?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:"("===a?n=2:te.test(a)?h():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==c[c.length-1]?c=c.slice(0,-1)+a:n=3:c+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,c="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),d(),s(),i}function re(e,t,n){const r=J(ne(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ie(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,l=se(e);l.aliasOf=r&&r.record;const d=ce(t,e),h=[l];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)h.push(a({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let f,p;for(const t of h){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=re(t,n,d),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!le(f)&&s(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&c(f)}return p?()=>{s(p)}:u}function s(e){if($(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function l(){return n}function c(e){let t=0;while(t<n.length&&X(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!le(e)&&r.set(e.record.name,e)}function d(e,t){let i,o,s,l={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw H(1,{location:e});0,s=i.record.name,l=a(oe(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,i.keys.map((e=>e.name)))),o=i.stringify(l)}else if("path"in e)o=e.path,i=n.find((e=>e.re.test(o))),i&&(l=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw H(1,{location:e,currentLocation:t});s=i.record.name,l=a({},t.params,e.params),o=i.stringify(l)}const u=[];let c=i;while(c)u.unshift(c.record),c=c.parent;return{name:s,path:o,params:l,matched:u,meta:ue(u)}}return t=ce({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:d,removeRoute:s,getRoutes:l,getRecordMatcher:i}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function se(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function le(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function ce(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const he=/#/g,fe=/&/g,pe=/\//g,ve=/=/g,me=/\?/g,ge=/\+/g,ye=/%5B/g,be=/%5D/g,we=/%5E/g,_e=/%60/g,Ie=/%7B/g,Ee=/%7C/g,Se=/%7D/g,ke=/%20/g;function Ce(e){return encodeURI(""+e).replace(Ee,"|").replace(ye,"[").replace(be,"]")}function Te(e){return Ce(e).replace(Ie,"{").replace(Se,"}").replace(we,"^")}function xe(e){return Ce(e).replace(ge,"%2B").replace(ke,"+").replace(he,"%23").replace(fe,"%26").replace(_e,"`").replace(Ie,"{").replace(Se,"}").replace(we,"^")}function Ae(e){return xe(e).replace(ve,"%3D")}function Oe(e){return Ce(e).replace(he,"%23").replace(me,"%3F")}function Re(e){return null==e?"":Oe(e).replace(pe,"%2F")}function Ne(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ge," "),n=e.indexOf("="),o=Ne(n<0?e:e.slice(0,n)),s=n<0?null:Ne(e.slice(n+1));if(o in t){let e=t[o];c(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Fe(e){let t="";for(let n in e){const r=e[n];if(n=Ae(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=c(r)?r.map((e=>e&&xe(e))):[r&&xe(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Le(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=c(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Pe=Symbol(""),Ve=Symbol(""),Me=Symbol(""),Ue=Symbol(""),Be=Symbol("");function $e(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function je(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((s,a)=>{const l=e=>{!1===e?a(H(4,{from:n,to:t})):e instanceof Error?a(e):B(e)?a(H(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},u=e.call(r&&r.instances[i],t,n,l);let c=Promise.resolve(u);e.length<3&&(c=c.then(l)),c.catch((e=>a(e)))}))}function We(e,t,n,r){const i=[];for(const o of e){0;for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(qe(a)){const s=a.__vccOpts||a,l=s[t];l&&i.push(je(l,n,r,o,e))}else{let l=a();0,i.push((()=>l.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const a=s(i)?i.default:i;o.components[e]=a;const l=a.__vccOpts||a,u=l[t];return u&&je(u,n,r,o,e)()}))))}}}return i}function qe(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=(0,r.f3)(Me),n=(0,r.f3)(Ue),o=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),s=(0,r.Fl)((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(g.bind(null,r));if(s>-1)return s;const a=Je(e[t-2]);return t>1&&Je(r)===a&&i[i.length-1].path!==a?i.findIndex(g.bind(null,e[t-2])):s})),a=(0,r.Fl)((()=>s.value>-1&&Ye(n.params,o.value.params))),l=(0,r.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&y(n.params,o.value.params)));function c(n={}){return Ke(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:o,href:(0,r.Fl)((()=>o.value.href)),isActive:a,isExactActive:l,navigate:c}}const ze=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=(0,i.qj)(He(e)),{options:o}=(0,r.f3)(Me),s=(0,r.Fl)((()=>({[Qe(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ge=ze;function Ke(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!c(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=(0,r.f3)(Be),s=(0,r.Fl)((()=>e.route||o.value)),l=(0,r.f3)(Ve,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(l);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),c=(0,r.Fl)((()=>s.value.matched[u.value]));(0,r.JJ)(Ve,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Pe,c),(0,r.JJ)(Be,s);const d=(0,i.iH)();return(0,r.YP)((()=>[d.value,c.value,e.name]),(([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&g(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=s.value,o=e.name,l=c.value,u=l&&l.components[o];if(!u)return Ze(n.default,{Component:u,route:i});const h=l.props[o],f=h?!0===h?i.params:"function"===typeof h?h(i):h:null,p=e=>{e.component.isUnmounted&&(l.instances[o]=null)},v=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:d}));return Ze(n.default,{Component:v,route:i})||v}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Xe;function tt(e){const t=ie(e.routes,e),n=e.parseQuery||De,s=e.stringifyQuery||Fe,d=e.history;const h=$e(),v=$e(),g=$e(),y=(0,i.XI)(j);let b=j;o&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=l.bind(null,(e=>""+e)),_=l.bind(null,Re),E=l.bind(null,Ne);function S(e,n){let r,i;return $(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function k(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function C(){return t.getRoutes().map((e=>e.record))}function T(e){return!!t.getRecordMatcher(e)}function R(e,r){if(r=a({},r||y.value),"string"===typeof e){const i=f(n,e,r.path),o=t.resolve({path:i.path},r),s=d.createHref(i.fullPath);return a(i,o,{params:E(o.params),hash:Ne(i.hash),redirectedFrom:void 0,href:s})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:_(e.params)}),r.params=_(r.params)}const o=t.resolve(i,r),l=e.hash||"";o.params=w(E(o.params));const u=p(s,a({},e,{hash:Te(l),path:o.path})),c=d.createHref(u);return a({fullPath:u,hash:l,query:s===Fe?Le(e.query):e.query||{}},o,{redirectedFrom:void 0,href:c})}function F(e){return"string"===typeof e?f(n,e,y.value.path):a({},e)}function L(e,t){if(b!==e)return H(8,{from:t,to:e})}function P(e){return U(e)}function V(e){return P(a(F(e),{replace:!0}))}function M(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=F(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function U(e,t){const n=b=R(e),r=y.value,i=e.state,o=e.force,l=!0===e.replace,u=M(n);if(u)return U(a(F(u),{state:"object"===typeof u?a({},i,u.state):i,force:o,replace:l}),t||n);const c=n;let d;return c.redirectedFrom=t,!o&&m(s,r,n)&&(d=H(16,{to:c,from:r}),ne(r,r,!0,!1)),(d?Promise.resolve(d):W(c,r)).catch((e=>z(e)?z(e,2)?e:te(e):Z(e,c,r))).then((e=>{if(e){if(z(e,2))return U(a({replace:l},F(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:o}),t||c)}else e=G(c,r,!0,l,i);return q(c,r,e),e}))}function B(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function W(e,t){let n;const[r,i,o]=rt(e,t);n=We(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(je(r,e,t))}));const s=B.bind(null,e,t);return n.push(s),nt(n).then((()=>{n=[];for(const r of h.list())n.push(je(r,e,t));return n.push(s),nt(n)})).then((()=>{n=We(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(je(r,e,t))}));return n.push(s),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(c(r.beforeEnter))for(const i of r.beforeEnter)n.push(je(i,e,t));else n.push(je(r.beforeEnter,e,t));return n.push(s),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=We(o,"beforeRouteEnter",e,t),n.push(s),nt(n)))).then((()=>{n=[];for(const r of v.list())n.push(je(r,e,t));return n.push(s),nt(n)})).catch((e=>z(e,8)?e:Promise.reject(e)))}function q(e,t,n){for(const r of g.list())r(e,t,n)}function G(e,t,n,r,i){const s=L(e,t);if(s)return s;const l=t===j,u=o?history.state:{};n&&(r||l?d.replace(e.fullPath,a({scroll:l&&u&&u.scroll},i)):d.push(e.fullPath,i)),y.value=e,ne(e,t,n,l),te()}let K;function Y(){K||(K=d.listen(((e,t,n)=>{if(!ae.listening)return;const r=R(e),i=M(r);if(i)return void U(a(i,{replace:!0}),r).catch(u);b=r;const s=y.value;o&&N(O(s.fullPath,n.delta),x()),W(r,s).catch((e=>z(e,12)?e:z(e,2)?(U(e.to,r).then((e=>{z(e,20)&&!n.delta&&n.type===I.pop&&d.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&d.go(-n.delta,!1),Z(e,r,s)))).then((e=>{e=e||G(r,s,!1),e&&(n.delta&&!z(e,8)?d.go(-n.delta,!1):n.type===I.pop&&z(e,20)&&d.go(-1,!1)),q(r,s,e)})).catch(u)})))}let J,Q=$e(),X=$e();function Z(e,t,n){te(e);const r=X.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return J&&y.value!==j?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))}function te(e){return J||(J=!e,Y(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset()),e}function ne(t,n,i,s){const{scrollBehavior:a}=e;if(!o||!a)return Promise.resolve();const l=!i&&D(O(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,l))).then((e=>e&&A(e))).catch((e=>Z(e,t,n)))}const re=e=>d.go(e);let oe;const se=new Set,ae={currentRoute:y,listening:!0,addRoute:S,removeRoute:k,hasRoute:T,getRoutes:C,resolve:R,options:e,push:P,replace:V,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:h.add,beforeResolve:v.add,afterEach:g.add,onError:X.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),o&&!oe&&y.value===j&&(oe=!0,P(d.location).catch((e=>{0})));const n={};for(const i in j)n[i]=(0,r.Fl)((()=>y.value[i]));e.provide(Me,t),e.provide(Ue,(0,i.qj)(n)),e.provide(Be,y);const s=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(b=j,K&&K(),K=null,y.value=j,oe=!1,J=!1),s()}}};return ae}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find((e=>g(e,o)))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find((e=>g(e,a)))||i.push(a))}return[n,r,i]}function it(){return(0,r.f3)(Me)}},6439:function(e,t,n){"use strict";n.d(t,{L:function(){return C}});var r=n(3396),i=n(836),o=n(8952),s=n(8694),a=n(1138),l=n(320),u=n(9888);const c=(0,l.ev)()({name:"VToolbarTitle",props:{text:String,...(0,a.Q)()},setup(e,t){let{slots:n}=t;return(0,u.L)((()=>{var t;const i=!!(n.default||n.text||e.text);return(0,r.Wm)(e.tag,{class:"v-toolbar-title"},{default:()=>[i&&(0,r.Wm)("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():e.text,null==(t=n.default)?void 0:t.call(n)])]})})),{}}});var d=n(2718),h=n(2465),f=n(4231),p=n(7041),v=n(8434),m=n(2370),g=n(4870),y=n(3766),b=n(131);const w=[null,"prominent","default","comfortable","compact"],_=(0,y.U)({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>w.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...(0,d.m)(),...(0,h.c)(),...(0,f.I)(),...(0,a.Q)({tag:"header"}),...(0,p.x$)()},"v-toolbar"),I=(0,l.ev)()({name:"VToolbar",props:_(),setup(e,t){var n;let{slots:a}=t;const{backgroundColorClasses:l,backgroundColorStyles:y}=(0,m.Y5)((0,g.Vh)(e,"color")),{borderClasses:w}=(0,d.P)(e),{elevationClasses:_}=(0,h.Y)(e),{roundedClasses:I}=(0,f.b)(e),{themeClasses:E}=(0,p.ER)(e),S=(0,g.iH)(!!(e.extended||null!=(n=a.extension)&&n.call(a))),k=(0,r.Fl)((()=>parseInt(Number(e.height)+("prominent"===e.density?Number(e.height):0)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0),10))),C=(0,r.Fl)((()=>S.value?parseInt(Number(e.extensionHeight)+("prominent"===e.density?Number(e.extensionHeight):0)-("comfortable"===e.density?4:0)-("compact"===e.density?8:0),10):0));return(0,v.AF)({VBtn:{variant:"text"}}),(0,u.L)((()=>{var t,n,u,d,h;const f=!(!e.title&&!a.title),p=!(!a.image&&!e.image),v=null==(t=a.extension)?void 0:t.call(a);return S.value=!(!e.extended&&!v),(0,r.Wm)(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,w.value,_.value,I.value,E.value],style:[y.value]},{default:()=>[p&&(0,r.Wm)("div",{key:"image",class:"v-toolbar__image"},[(0,r.Wm)(i.z,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[a.image?null==(n=a.image)?void 0:n.call(a):(0,r.Wm)(s.f,null,null)]})]),(0,r.Wm)(i.z,{defaults:{VTabs:{height:(0,b.kb)(k.value)}}},{default:()=>[(0,r.Wm)("div",{class:"v-toolbar__content",style:{height:(0,b.kb)(k.value)}},[a.prepend&&(0,r.Wm)("div",{class:"v-toolbar__prepend"},[null==(u=a.prepend)?void 0:u.call(a)]),f&&(0,r.Wm)(c,{key:"title",text:e.title},{text:a.title}),null==(d=a.default)?void 0:d.call(a),a.append&&(0,r.Wm)("div",{class:"v-toolbar__append"},[null==(h=a.append)?void 0:h.call(a)])])]}),(0,r.Wm)(i.z,{defaults:{VTabs:{height:(0,b.kb)(C.value)}}},{default:()=>[(0,r.Wm)(o.Fx,null,{default:()=>[S.value&&(0,r.Wm)("div",{class:"v-toolbar__extension",style:{height:(0,b.kb)(C.value)}},[v])]})]})]})})),{contentHeight:k,extensionHeight:C}}});function E(e){return(0,b.ei)(e,Object.keys((null==I?void 0:I.props)??{}))}var S=n(7396),k=n(8717);const C=(0,l.ev)()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},..._(),...(0,S.o8)(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const i=(0,g.iH)(),o=(0,k.z)(e,"modelValue"),s=(0,r.Fl)((()=>{var e,t;const n=(null==(e=i.value)?void 0:e.contentHeight)??0,r=(null==(t=i.value)?void 0:t.extensionHeight)??0;return n+r})),{layoutItemStyles:a}=(0,S.eW)({id:e.name,order:(0,r.Fl)((()=>parseInt(e.order,10))),position:(0,g.Vh)(e,"location"),layoutSize:s,elementSize:s,active:o,absolute:(0,g.Vh)(e,"absolute")});return(0,u.L)((()=>{const[t]=E(e);return(0,r.Wm)(I,(0,r.dG)({ref:i,class:["v-app-bar",{"v-app-bar--bottom":"bottom"===e.location}],style:{...a.value,height:void 0}},t),n)})),{}}})},7718:function(e,t,n){"use strict";n.d(t,{q:function(){return u}});var r=n(3396),i=n(7396),o=n(7041),s=n(1629),a=n(320),l=n(9888);const u=(0,a.aZ)({name:"VApp",props:{...(0,i.GB)({fullHeight:!0}),...(0,o.x$)()},setup(e,t){let{slots:n}=t;const a=(0,o.ER)(e),{layoutClasses:u,layoutStyles:c,getLayoutItem:d,items:h,layoutRef:f}=(0,i.te)(e),{rtlClasses:p}=(0,s.Vw)();return(0,l.L)((()=>{var e;return(0,r.Wm)("div",{ref:f,class:["v-application",a.themeClasses.value,u.value,p.value],style:c.value},[(0,r.Wm)("div",{class:"v-application__wrap"},[null==(e=n.default)?void 0:e.call(n)])])})),{getLayoutItem:d,items:h,theme:a}}})},9357:function(e,t,n){"use strict";n.d(t,{f:function(){return Q}});var r=n(3396),i=n(165),o=n(1550),s=n(9242),a=n(652),l=n(1970),u=n(1138),c=n(7041),d=n(5221),h=n(8434),f=n(320),p=n(131),v=n(9888),m=n(4870);const g=Symbol.for("vuetify:v-chip-group");(0,f.aZ)({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:p.vZ},...(0,l.k4)({selectedClass:"v-chip--selected"}),...(0,u.Q)(),...(0,c.x$)(),...(0,d.bk)({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{themeClasses:i}=(0,c.ER)(e),{isSelected:o,select:s,next:a,prev:u,selected:d}=(0,l._v)(e,g);return(0,h.AF)({VChip:{color:(0,m.Vh)(e,"color"),disabled:(0,m.Vh)(e,"disabled"),filter:(0,m.Vh)(e,"filter"),variant:(0,m.Vh)(e,"variant")}}),(0,v.L)((()=>{var t;return(0,r.Wm)(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},i.value]},{default:()=>[null==(t=n.default)?void 0:t.call(n,{isSelected:o,select:s,next:a,prev:u,selected:d.value})]})})),{}}});var y=n(836),b=n(8952),w=n(3289),_=n(2718),I=n(9694),E=n(2465),S=n(4231),k=n(6183),C=n(9374),T=n(8717),x=n(4960),A=n(3824);const O=(0,f.aZ)({name:"VChip",directives:{Ripple:A.H},props:{activeClass:String,appendAvatar:String,appendIcon:x.lE,closable:Boolean,closeIcon:{type:x.lE,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:x.lE,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:p.as,onClickOnce:p.as,...(0,_.m)(),...(0,I.f)(),...(0,E.c)(),...(0,l.YQ)(),...(0,S.I)(),...(0,k.GN)(),...(0,C.Z)(),...(0,u.Q)({tag:"span"}),...(0,c.x$)(),...(0,d.bk)({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,t){let{attrs:n,emit:i,slots:o}=t;const{borderClasses:u}=(0,_.P)(e),{colorClasses:h,colorStyles:f,variantClasses:p}=(0,d.c1)(e),{densityClasses:v}=(0,I.t)(e),{elevationClasses:m}=(0,E.Y)(e),{roundedClasses:x}=(0,S.b)(e),{sizeClasses:A}=(0,C.t)(e),{themeClasses:O}=(0,c.ER)(e),R=(0,T.z)(e,"modelValue"),N=(0,l.Yt)(e,g,!1),D=(0,k.nB)(e,n),F=(0,r.Fl)((()=>!1!==e.link&&D.isLink.value)),L=(0,r.Fl)((()=>!e.disabled&&!1!==e.link&&(!!N||e.link||D.isClickable.value)));function P(e){R.value=!1,i("click:close",e)}function V(e){var t;i("click",e),L.value&&(null==(t=D.navigate)||t.call(D,e),null==N||N.toggle())}function M(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),V(e))}return()=>{var t;const n=D.isLink.value?"a":e.tag,i=!!(o.append||e.appendIcon||e.appendAvatar),l=!(!o.close&&!e.closable),c=!(!o.filter&&!e.filter)&&N,g=!!(o.prepend||e.prependIcon||e.prependAvatar),_=!N||N.isSelected.value;return R.value&&(0,r.wy)((0,r.Wm)(n,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":L.value,"v-chip--filter":c,"v-chip--pill":e.pill},O.value,u.value,_?h.value:void 0,v.value,m.value,x.value,A.value,p.value,null==N?void 0:N.selectedClass.value],style:[_?f.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:D.href.value,tabindex:L.value?0:void 0,onClick:V,onKeydown:L.value&&!F.value&&M},{default:()=>[(0,d.Ux)(L.value,"v-chip"),c&&(0,r.Wm)(y.z,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[(0,r.Wm)(b.Zq,null,{default:()=>[(0,r.wy)((0,r.Wm)("div",{class:"v-chip__filter"},[o.filter?o.filter():(0,r.Wm)(w.t,null,null)]),[[s.F8,N.isSelected.value]])]})]}),g&&(0,r.Wm)(y.z,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[o.prepend?(0,r.Wm)("div",{class:"v-chip__prepend"},[o.prepend()]):e.prependAvatar?(0,r.Wm)(a.V,{start:!0},null):e.prependIcon?(0,r.Wm)(w.t,{start:!0},null):void 0]}),(null==(t=o.default)?void 0:t.call(o,{isSelected:null==N?void 0:N.isSelected.value,selectedClass:null==N?void 0:N.selectedClass.value,select:null==N?void 0:N.select,toggle:null==N?void 0:N.toggle,value:null==N?void 0:N.value.value,disabled:e.disabled}))??e.text,i&&(0,r.Wm)(y.z,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[o.append?(0,r.Wm)("div",{class:"v-chip__append"},[o.append()]):e.appendAvatar?(0,r.Wm)(a.V,{end:!0},null):e.appendIcon?(0,r.Wm)(w.t,{end:!0},null):void 0]}),l&&(0,r.Wm)(y.z,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[(0,r.Wm)("div",{class:"v-chip__close",onClick:P},[o.close?o.close():(0,r.Wm)(w.t,null,null)])]})]}),[[(0,r.Q2)("ripple"),L.value&&e.ripple,null]])}}});var R=n(2583),N=n(2329),D=n(3150),F=n(8551),L=n(3185),P=n(5975),V=n(7514),M=n(4360);const U=(0,f.ev)()({name:"VMenu",props:{id:String,...(0,p.CE)((0,F.BU)({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:R.v}}),["absolute"])},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const i=(0,T.z)(e,"modelValue"),{scopeId:o}=(0,P.a)(),s=(0,V.sq)(),a=(0,r.Fl)((()=>e.id||`v-menu-${s}`)),l=(0,m.iH)(),u=(0,r.f3)(M.N,null);let c=0;function d(){null==u||u.closeParents()}return(0,r.JJ)(M.N,{register(){++c},unregister(){--c},closeParents(){setTimeout((()=>{c||(i.value=!1,null==u||u.closeParents())}),40)}}),(0,r.YP)(i,(e=>{e?null==u||u.register():null==u||u.unregister()})),(0,v.L)((()=>{const[t]=(0,F.Fe)(e);return(0,r.Wm)(F.yc,(0,r.dG)({ref:l,class:["v-menu"]},t,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,absolute:!0,activatorProps:(0,r.dG)({"aria-haspopup":"menu","aria-expanded":String(i.value),"aria-owns":a.value},e.activatorProps),"onClick:outside":d},o),{activator:n.activator,default:function(){for(var e,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return(0,r.Wm)(y.z,{root:!0},{default:()=>[null==(e=n.default)?void 0:e.call(n,...i)]})}})})),(0,L.F)({id:a},l)}});var B=n(6185),$=n(4906),j=n(4357),W=n(1629),q=n(3766);const H=(0,q.U)({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:x.lE,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:p.vZ},...(0,B.S1)({itemChildren:!1})},"v-select");(0,f.ev)()({name:"VSelect",props:{...H(),...(0,p.CE)((0,i.wG)({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...(0,$.X)({transition:{component:R.v}})},emits:{"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,t){let{slots:n}=t;const{t:s}=(0,W.bU)(),a=(0,m.iH)(),l=(0,T.z)(e,"menu"),{items:u,transformIn:c,transformOut:d}=(0,B.Ce)(e),h=(0,T.z)(e,"modelValue",[],(e=>c((0,p.FT)(e))),(t=>{const n=d(t);return e.multiple?n:n[0]??null})),f=(0,j.cI)(),g=(0,r.Fl)((()=>h.value.map((t=>u.value.find((n=>e.valueComparator(n.value,t.value)))||t)))),b=(0,r.Fl)((()=>g.value.map((e=>e.props.value)))),w=(0,r.Fl)((()=>e.hideSelected?u.value.filter((e=>!g.value.some((t=>t===e)))):u.value)),_=(0,m.iH)();function I(t){h.value=[],e.openOnClear&&(l.value=!0)}function E(){e.hideNoData&&!u.value.length||e.readonly||null!=f&&f.isReadonly.value||(l.value=!l.value)}function S(t){var n;if(!(e.readonly||null!=f&&f.isReadonly.value))if(["Enter","ArrowDown"," "].includes(t.key)&&(t.preventDefault(),l.value=!0),["Escape","Tab"].includes(t.key)&&(l.value=!1),"ArrowDown"===t.key)null==(n=_.value)||n.focus("next");else if("ArrowUp"===t.key){var r;t.preventDefault(),null==(r=_.value)||r.focus("prev")}else if("Home"===t.key){var i;t.preventDefault(),null==(i=_.value)||i.focus("first")}else if("End"===t.key){var o;t.preventDefault(),null==(o=_.value)||o.focus("last")}}function k(t){if(e.multiple){const n=b.value.findIndex((n=>e.valueComparator(n,t.value)));if(-1===n)h.value=[...h.value,t];else{const e=[...h.value];e.splice(n,1),h.value=e}}else h.value=[t],l.value=!1}function C(e){var t;null!=(t=_.value)&&t.$el.contains(e.relatedTarget)||(l.value=!1)}function x(e){var t;null==e.relatedTarget&&(null==(t=a.value)||t.focus())}return(0,v.L)((()=>{const t=!(!e.chips&&!n.chip),u=!!(!e.hideNoData||w.value.length||n.prepend||n.append||n["no-data"]),[c]=(0,i.a)(e);return(0,r.Wm)(i.hw,(0,r.dG)({ref:a},c,{modelValue:h.value.map((e=>e.props.value)).join(", "),"onUpdate:modelValue":e=>{null==e&&(h.value=[])},validationValue:h.externalValue,dirty:h.value.length>0,class:["v-select",{"v-select--active-menu":l.value,"v-select--chips":!!e.chips,["v-select--"+(e.multiple?"multiple":"single")]:!0,"v-select--selected":h.value.length}],appendInnerIcon:e.menuIcon,readonly:!0,"onClick:clear":I,"onClick:control":E,onBlur:C,onKeydown:S}),{...n,default:()=>{var i,a,c;return(0,r.Wm)(r.HY,null,[(0,r.Wm)(U,(0,r.dG)({modelValue:l.value,"onUpdate:modelValue":e=>l.value=e,activator:"parent",contentClass:"v-select__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[u&&(0,r.Wm)(N.i,{ref:_,selected:b.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onFocusout:x},{default:()=>[!w.value.length&&!e.hideNoData&&((null==(i=n["no-data"])?void 0:i.call(n))??(0,r.Wm)(D.l,{title:s(e.noDataText)},null)),null==(a=n["prepend-item"])?void 0:a.call(n),w.value.map(((t,i)=>{var s;return n.item?null==(s=n.item)?void 0:s.call(n,{item:t,index:i,props:(0,r.dG)(t.props,{onClick:()=>k(t)})}):(0,r.Wm)(D.l,(0,r.dG)({key:i},t.props,{onClick:()=>k(t)}),{prepend:t=>{let{isSelected:n}=t;return e.multiple&&!e.hideSelected?(0,r.Wm)(o.pM,{modelValue:n,ripple:!1},null):void 0}})})),null==(c=n["append-item"])?void 0:c.call(n)]})]}),g.value.map(((i,o)=>{function s(e){e.stopPropagation(),e.preventDefault(),k(i)}const a={"onClick:close":s,modelValue:!0,"onUpdate:modelValue":void 0};return(0,r.Wm)("div",{key:i.value,class:"v-select__selection"},[t?(0,r.Wm)(y.z,{defaults:{VChip:{closable:e.closableChips,size:"small",text:i.title}}},{default:()=>[n.chip?n.chip({item:i,index:o,props:a}):(0,r.Wm)(O,a,null)]}):n.selection?n.selection({item:i,index:o}):(0,r.Wm)("span",{class:"v-select__selection-text"},[i.title,e.multiple&&o<g.value.length-1&&(0,r.Wm)("span",{class:"v-select__selection-comma"},[(0,r.Uk)(",")])])])}))])}})})),(0,L.F)({menu:l,select:k},a)}});n(7658);const z=(e,t,n)=>null==e||null==t?-1:e.toString().toLocaleLowerCase().indexOf(t.toString().toLocaleLowerCase()),G=(0,q.U)({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function K(e,t,n){const r=[],i=(null==n?void 0:n.default)??z,o=!(null==n||!n.filterKeys)&&(0,p.FT)(n.filterKeys),s=Object.keys((null==n?void 0:n.customKeyFilter)??{}).length;if(null==e||!e.length)return r;e:for(let l=0;l<e.length;l++){const u=e[l],c={},d={};let h=-1;if(t&&(null==n||!n.noFilter)){if("object"===typeof u){const e=o||Object.keys(u);for(const r of e){var a;const e=(0,p.qF)(u,r,u),o=null==n||null==(a=n.customKeyFilter)?void 0:a[r];if(h=o?o(e,t,u):i(e,t,u),-1!==h&&!1!==h)o?c[r]=h:d[r]=h;else if("every"===(null==n?void 0:n.filterMode))continue e}}else h=i(u,t,u),-1!==h&&!1!==h&&(d.title=h);const e=Object.keys(d).length,r=Object.keys(c).length;if(!e&&!r)continue;if("union"===(null==n?void 0:n.filterMode)&&r!==s&&!e)continue;if("intersection"===(null==n?void 0:n.filterMode)&&(r!==s||!e))continue}r.push({index:l,matches:{...d,...c}})}return r}function Y(e,t,n,i){const o=(0,r.Fl)((()=>"string"!==typeof(null==n?void 0:n.value)&&"number"!==typeof(null==n?void 0:n.value)?"":String(n.value))),s=(0,m.iH)([]),a=(0,m.iH)(new Map);function l(e){return a.value.get(e.value)}return(0,r.m0)((()=>{s.value=[],a.value=new Map;const n=(0,m.SU)(t),r=K(n,o.value,{customKeyFilter:e.customKeyFilter,default:e.customFilter,filterKeys:(0,m.SU)(null==i?void 0:i.filterKeys)??e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter});r.forEach((e=>{let{index:t,matches:r}=e;const i=n[t];s.value.push(i),a.value.set(i.value,r)}))})),{filteredItems:s,filteredMatches:a,getMatches:l}}function J(e,t,n){if(null==t)return e;if(Array.isArray(t))throw new Error("Multiple matches is not implemented");return"number"===typeof t&&~t?(0,r.Wm)(r.HY,null,[(0,r.Wm)("span",{class:"v-autocomplete__unmask"},[e.substr(0,t)]),(0,r.Wm)("span",{class:"v-autocomplete__mask"},[e.substr(t,n)]),(0,r.Wm)("span",{class:"v-autocomplete__unmask"},[e.substr(t+n)])]):e}const Q=(0,f.ev)()({name:"VAutocomplete",props:{search:String,...G({filterKeys:["title"]}),...H(),...(0,p.CE)((0,i.wG)({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...(0,$.X)({transition:!1})},emits:{"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,t){let{slots:n}=t;const{t:s}=(0,W.bU)(),a=(0,m.iH)(),l=(0,m.iH)(!1),u=(0,m.iH)(!0),c=(0,T.z)(e,"menu"),{items:d,transformIn:h,transformOut:f}=(0,B.Ce)(e),g=(0,T.z)(e,"search",""),b=(0,T.z)(e,"modelValue",[],(e=>h((0,p.FT)(e))),(t=>{const n=f(t);return e.multiple?n:n[0]??null})),w=(0,j.cI)(),{filteredItems:_,getMatches:I}=Y(e,d,(0,r.Fl)((()=>u.value?void 0:g.value))),E=(0,r.Fl)((()=>b.value.map((t=>d.value.find((n=>e.valueComparator(n.value,t.value)))||t)))),S=(0,r.Fl)((()=>e.hideSelected?_.value.filter((e=>!E.value.some((t=>t.value===e.value)))):_.value)),k=(0,r.Fl)((()=>E.value.map((e=>e.props.value)))),C=(0,m.iH)();function x(t){b.value=[],e.openOnClear&&(c.value=!0),g.value=""}function A(){e.hideNoData&&!d.value.length||e.readonly||null!=w&&w.isReadonly.value||(c.value=!0)}function R(t){var n;if(!(e.readonly||null!=w&&w.isReadonly.value))if(["Enter","ArrowDown"].includes(t.key)&&(c.value=!0),["Escape"].includes(t.key)&&(c.value=!1),["Enter","Escape","Tab"].includes(t.key)&&(u.value=!0),"ArrowDown"===t.key)t.preventDefault(),null==(n=C.value)||n.focus("next");else if("ArrowUp"===t.key){var r;t.preventDefault(),null==(r=C.value)||r.focus("prev")}}function F(e){g.value=e.target.value}function P(){l.value&&(u.value=!0)}function V(e){l.value=!0}function M(e){var t;null==e.relatedTarget&&(null==(t=a.value)||t.focus())}const $=(0,m.iH)(!1);function q(t){if(e.multiple){const n=k.value.findIndex((n=>e.valueComparator(n,t.value)));if(-1===n)b.value=[...b.value,t],g.value="";else{const e=[...b.value];e.splice(n,1),b.value=e}}else b.value=[t],$.value=!0,n.selection||(g.value=t.title),c.value=!1,u.value=!0,(0,r.Y3)((()=>$.value=!1))}return(0,r.YP)(l,(t=>{var i;t?($.value=!0,g.value=e.multiple||n.selection?"":String((null==(i=E.value.at(-1))?void 0:i.props.title)??""),u.value=!0,(0,r.Y3)((()=>$.value=!1))):(c.value=!1,g.value="")})),(0,r.YP)(g,(e=>{l.value&&!$.value&&(e&&(c.value=!0),u.value=!e)})),(0,v.L)((()=>{const t=!(!e.chips&&!n.chip),d=!!(!e.hideNoData||S.value.length||n.prepend||n.append||n["no-data"]),[h]=(0,i.a)(e);return(0,r.Wm)(i.hw,(0,r.dG)({ref:a},h,{modelValue:g.value,"onUpdate:modelValue":e=>{null==e&&(b.value=[])},validationValue:b.externalValue,dirty:b.value.length>0,onInput:F,class:["v-autocomplete",{"v-autocomplete--active-menu":c.value,"v-autocomplete--chips":!!e.chips,["v-autocomplete--"+(e.multiple?"multiple":"single")]:!0,"v-autocomplete--selection-slot":!!n.selection}],appendInnerIcon:e.menuIcon,readonly:e.readonly,"onClick:clear":x,"onClick:control":A,"onClick:input":A,onFocus:()=>l.value=!0,onBlur:()=>l.value=!1,onKeydown:R}),{...n,default:()=>{var i,a,l;return(0,r.Wm)(r.HY,null,[(0,r.Wm)(U,(0,r.dG)({modelValue:c.value,"onUpdate:modelValue":e=>c.value=e,activator:"parent",contentClass:"v-autocomplete__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:P},e.menuProps),{default:()=>[d&&(0,r.Wm)(N.i,{ref:C,selected:k.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onFocusin:V,onFocusout:M},{default:()=>[!S.value.length&&!e.hideNoData&&((null==(i=n["no-data"])?void 0:i.call(n))??(0,r.Wm)(D.l,{title:s(e.noDataText)},null)),null==(a=n["prepend-item"])?void 0:a.call(n),S.value.map(((t,i)=>{var s;return(null==(s=n.item)?void 0:s.call(n,{item:t,index:i,props:(0,r.dG)(t.props,{onClick:()=>q(t)})}))??(0,r.Wm)(D.l,(0,r.dG)({key:i},t.props,{onClick:()=>q(t)}),{prepend:t=>{let{isSelected:n}=t;return e.multiple&&!e.hideSelected?(0,r.Wm)(o.pM,{modelValue:n,ripple:!1},null):void 0},title:()=>{var e,n;return u.value?t.title:J(t.title,null==(e=I(t))?void 0:e.title,(null==(n=g.value)?void 0:n.length)??0)}})})),null==(l=n["append-item"])?void 0:l.call(n)]})]}),E.value.map(((i,o)=>{function s(e){e.stopPropagation(),e.preventDefault(),q(i)}const a={"onClick:close":s,modelValue:!0,"onUpdate:modelValue":void 0};return(0,r.Wm)("div",{key:i.value,class:"v-autocomplete__selection"},[t?(0,r.Wm)(y.z,{defaults:{VChip:{closable:e.closableChips,size:"small",text:i.title}}},{default:()=>[n.chip?n.chip({item:i,index:o,props:a}):(0,r.Wm)(O,a,null)]}):n.selection?n.selection({item:i,index:o}):(0,r.Wm)("span",{class:"v-autocomplete__selection-text"},[i.title,e.multiple&&o<E.value.length-1&&(0,r.Wm)("span",{class:"v-autocomplete__selection-comma"},[(0,r.Uk)(",")])])])}))])}})})),(0,L.F)({isFocused:l,isPristine:u,menu:c,search:g,filteredItems:_,select:q},a)}})},652:function(e,t,n){"use strict";n.d(t,{V:function(){return g}});var r=n(3396),i=n(3289),o=n(8694),s=n(5221),a=n(4960),l=n(9694),u=n(4231),c=n(9374),d=n(1138),h=n(7041),f=n(3766),p=n(320),v=n(9888);const m=(0,f.U)({start:Boolean,end:Boolean,icon:a.lE,image:String,...(0,l.f)(),...(0,u.I)(),...(0,c.Z)(),...(0,d.Q)(),...(0,h.x$)(),...(0,s.bk)({variant:"flat"})},"v-avatar"),g=(0,p.aZ)({name:"VAvatar",props:m(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=(0,h.ER)(e),{colorClasses:d,colorStyles:f,variantClasses:p}=(0,s.c1)(e),{densityClasses:m}=(0,l.t)(e),{roundedClasses:g}=(0,u.b)(e),{sizeClasses:y,sizeStyles:b}=(0,c.t)(e);return(0,v.L)((()=>{var t;return(0,r.Wm)(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,d.value,m.value,g.value,y.value,p.value],style:[f.value,b.value]},{default:()=>[e.image?(0,r.Wm)(o.f,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?(0,r.Wm)(i.t,{key:"icon",icon:e.icon},null):null==(t=n.default)?void 0:t.call(n),(0,s.Ux)(!1,"v-avatar")]})})),{}}})},870:function(e,t,n){"use strict";n.d(t,{T:function(){return F}});var r=n(3396),i=n(2718),o=n(9694),s=n(2465),a=n(4231),l=n(1138),u=n(7041),c=n(5221),d=n(8434),h=n(320),f=n(9888),p=n(4870);const v=(0,h.aZ)({name:"VBtnGroup",props:{divided:Boolean,...(0,i.m)(),...(0,o.f)(),...(0,s.c)(),...(0,a.I)(),...(0,l.Q)(),...(0,u.x$)(),...(0,c.bk)()},setup(e,t){let{slots:n}=t;const{themeClasses:l}=(0,u.ER)(e),{densityClasses:c}=(0,o.t)(e),{borderClasses:h}=(0,i.P)(e),{elevationClasses:v}=(0,s.Y)(e),{roundedClasses:m}=(0,a.b)(e);(0,d.AF)({VBtn:{height:"auto",color:(0,p.Vh)(e,"color"),density:(0,p.Vh)(e,"density"),flat:!0,variant:(0,p.Vh)(e,"variant")}}),(0,f.L)((()=>(0,r.Wm)(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},l.value,h.value,c.value,v.value,m.value]},n)))}});var m=n(1970);const g=Symbol.for("vuetify:v-btn-toggle");(0,h.ev)()({name:"VBtnToggle",props:(0,m.k4)(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{isSelected:i,next:o,prev:s,select:a,selected:l}=(0,m._v)(e,g);return(0,f.L)((()=>{var e;return(0,r.Wm)(v,{class:"v-btn-toggle"},{default:()=>[null==(e=n.default)?void 0:e.call(n,{isSelected:i,next:o,prev:s,select:a,selected:l})]})})),{next:o,prev:s,select:a}}});var y=n(836),b=n(3289),w=n(9374),_=n(1477),I=n(3712),E=n(2370),S=n(131);const k=(0,h.aZ)({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...(0,w.Z)(),...(0,l.Q)({tag:"div"}),...(0,u.x$)()},setup(e,t){let{slots:n}=t;const i=20,o=2*Math.PI*i,s=(0,p.iH)(),{themeClasses:a}=(0,u.ER)(e),{sizeClasses:l,sizeStyles:c}=(0,w.t)(e),{textColorClasses:d,textColorStyles:h}=(0,E.rY)((0,p.Vh)(e,"color")),{textColorClasses:v,textColorStyles:m}=(0,E.rY)((0,p.Vh)(e,"bgColor")),{intersectionRef:g,isIntersecting:y}=(0,_.S)(),{resizeRef:b,contentRect:k}=(0,I.y)(),C=(0,r.Fl)((()=>Math.max(0,Math.min(100,parseFloat(e.modelValue))))),T=(0,r.Fl)((()=>Number(e.width))),x=(0,r.Fl)((()=>c.value?Number(e.size):k.value?k.value.width:Math.max(T.value,32))),A=(0,r.Fl)((()=>i/(1-T.value/x.value)*2)),O=(0,r.Fl)((()=>T.value/x.value*A.value)),R=(0,r.Fl)((()=>(0,S.kb)((100-C.value)/100*o)));return(0,r.m0)((()=>{g.value=s.value,b.value=s.value})),(0,f.L)((()=>(0,r.Wm)(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":y.value,"v-progress-circular--disable-shrink":"disable-shrink"===e.indeterminate},a.value,l.value,d.value],style:[c.value,h.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:C.value},{default:()=>[(0,r.Wm)("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${A.value} ${A.value}`},[(0,r.Wm)("circle",{class:["v-progress-circular__underlay",v.value],style:m.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":O.value,"stroke-dasharray":o,"stroke-dashoffset":0},null),(0,r.Wm)("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":O.value,"stroke-dasharray":o,"stroke-dashoffset":R.value},null)]),n.default&&(0,r.Wm)("div",{class:"v-progress-circular__content"},[n.default({value:C.value})])]}))),{}}});var C=n(3824),T=n(4960),x=n(4544),A=n(6791),O=n(5180),R=n(489),N=n(6183);function D(e,t){(0,r.YP)((()=>{var t;return null==(t=e.isActive)?void 0:t.value}),(n=>{e.isLink.value&&n&&t&&(0,r.Y3)((()=>{t(!0)}))}),{immediate:!0})}const F=(0,h.aZ)({name:"VBtn",directives:{Ripple:C.H},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:g},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:T.lE,appendIcon:T.lE,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...(0,i.m)(),...(0,a.I)(),...(0,o.f)(),...(0,x.x)(),...(0,s.c)(),...(0,m.YQ)(),...(0,A.fF)(),...(0,O.y)(),...(0,R.F)(),...(0,N.GN)(),...(0,w.Z)(),...(0,l.Q)({tag:"button"}),...(0,u.x$)(),...(0,c.bk)({variant:"elevated"})},emits:{"group:selected":e=>!0},setup(e,t){let{attrs:n,slots:l}=t;const{themeClasses:d}=(0,u.ER)(e),{borderClasses:h}=(0,i.P)(e),{colorClasses:p,colorStyles:v,variantClasses:g}=(0,c.c1)(e),{densityClasses:_}=(0,o.t)(e),{dimensionStyles:I}=(0,x.$)(e),{elevationClasses:E}=(0,s.Y)(e),{loaderClasses:S}=(0,A.U2)(e),{locationStyles:C}=(0,O.T)(e),{positionClasses:T}=(0,R.K)(e),{roundedClasses:F}=(0,a.b)(e),{sizeClasses:L,sizeStyles:P}=(0,w.t)(e),V=(0,m.Yt)(e,e.symbol,!1),M=(0,N.nB)(e,n),U=(0,r.Fl)((()=>{return void 0!==e.active?e.active:M.isLink.value?null==(t=M.isActive)?void 0:t.value:null==V?void 0:V.isSelected.value;var t})),B=(0,r.Fl)((()=>(null==V?void 0:V.disabled.value)||e.disabled)),$=(0,r.Fl)((()=>"elevated"===e.variant&&!(e.disabled||e.flat||e.border)));return D(M,null==V?void 0:V.select),(0,f.L)((()=>{var t,n,i,o;const s=M.isLink.value?"a":e.tag,a=!V||U.value,u=!(!e.prependIcon&&!l.prepend),f=!(!e.appendIcon&&!l.append),m=!(!e.icon||!0===e.icon);return(0,r.wy)((0,r.Wm)(s,{type:"a"===s?void 0:"button",class:["v-btn",null==V?void 0:V.selectedClass.value,{"v-btn--active":U.value,"v-btn--block":e.block,"v-btn--disabled":B.value,"v-btn--elevated":$.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},d.value,h.value,a?p.value:void 0,_.value,E.value,S.value,T.value,F.value,L.value,g.value],style:[a?v.value:void 0,I.value,C.value,P.value],disabled:B.value||void 0,href:M.href.value,onClick:e=>{var t;B.value||(null==(t=M.navigate)||t.call(M,e),null==V||V.toggle())}},{default:()=>[(0,c.Ux)(!0,"v-btn"),!e.icon&&u&&(0,r.Wm)(y.z,{key:"prepend",defaults:{VIcon:{icon:e.prependIcon}}},{default:()=>[(0,r.Wm)("span",{class:"v-btn__prepend"},[(null==(t=l.prepend)?void 0:t.call(l))??(0,r.Wm)(b.t,null,null)])]}),(0,r.Wm)("span",{class:"v-btn__content","data-no-activator":""},[(0,r.Wm)(y.z,{key:"content",defaults:{VIcon:{icon:m?e.icon:void 0}}},{default:()=>[(null==(n=l.default)?void 0:n.call(l))??(m&&(0,r.Wm)(b.t,{key:"icon"},null))]})]),!e.icon&&f&&(0,r.Wm)(y.z,{key:"append",defaults:{VIcon:{icon:e.appendIcon}}},{default:()=>[(0,r.Wm)("span",{class:"v-btn__append"},[(null==(i=l.append)?void 0:i.call(l))??(0,r.Wm)(b.t,null,null)])]}),!!e.loading&&(0,r.Wm)("span",{key:"loader",class:"v-btn__loader"},[(null==(o=l.loader)?void 0:o.call(l))??(0,r.Wm)(k,{color:"boolean"===typeof e.loading?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[(0,r.Q2)("ripple"),!B.value&&e.ripple,null]])})),{}}})},11:function(e,t,n){"use strict";n.d(t,{_:function(){return A}});var r=n(3396),i=n(1334),o=n(652),s=n(1114);const a=(0,s.J)("v-card-subtitle");var l=n(6572),u=n(836),c=n(4960),d=n(9694),h=n(320),f=n(9888);const p=(0,h.aZ)({name:"VCardItem",props:{appendAvatar:String,appendIcon:c.lE,prependAvatar:String,prependIcon:c.lE,subtitle:String,title:String,...(0,d.f)()},setup(e,t){let{slots:n}=t;return(0,f.L)((()=>{var t,i,s,c,d;const h=!!(e.prependAvatar||e.prependIcon||n.prepend),f=!!(e.appendAvatar||e.appendIcon||n.append),p=!(!e.title&&!n.title),v=!(!e.subtitle&&!n.subtitle);return(0,r.Wm)("div",{class:"v-card-item"},[h&&(0,r.Wm)(u.z,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[(0,r.Wm)("div",{class:"v-card-item__prepend"},[(null==(t=n.prepend)?void 0:t.call(n))??(0,r.Wm)(o.V,null,null)])]}),(0,r.Wm)("div",{class:"v-card-item__content"},[p&&(0,r.Wm)(l.E,{key:"title"},{default:()=>[(null==(i=n.title)?void 0:i.call(n))??e.title]}),v&&(0,r.Wm)(a,{key:"subtitle"},{default:()=>[(null==(s=n.subtitle)?void 0:s.call(n))??e.subtitle]}),null==(c=n.default)?void 0:c.call(n)]),f&&(0,r.Wm)(u.z,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[(0,r.Wm)("div",{class:"v-card-item__append"},[(null==(d=n.append)?void 0:d.call(n))??(0,r.Wm)(o.V,null,null)])]})])})),{}}});var v=n(1888),m=n(8694),g=n(3824),y=n(5221),b=n(6791),w=n(2718),_=n(4544),I=n(2465),E=n(5180),S=n(489),k=n(4231),C=n(6183),T=n(1138),x=n(7041);const A=(0,h.aZ)({name:"VCard",directives:{Ripple:g.H},props:{appendAvatar:String,appendIcon:c.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:c.lE,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...(0,x.x$)(),...(0,w.m)(),...(0,d.f)(),...(0,_.x)(),...(0,I.c)(),...(0,b.fF)(),...(0,E.y)(),...(0,S.F)(),...(0,k.I)(),...(0,C.GN)(),...(0,T.Q)(),...(0,y.bk)({variant:"elevated"})},setup(e,t){let{attrs:n,slots:o}=t;const{themeClasses:s}=(0,x.ER)(e),{borderClasses:a}=(0,w.P)(e),{colorClasses:l,colorStyles:c,variantClasses:h}=(0,y.c1)(e),{densityClasses:g}=(0,d.t)(e),{dimensionStyles:T}=(0,_.$)(e),{elevationClasses:A}=(0,I.Y)(e),{loaderClasses:O}=(0,b.U2)(e),{locationStyles:R}=(0,E.T)(e),{positionClasses:N}=(0,S.K)(e),{roundedClasses:D}=(0,k.b)(e),F=(0,C.nB)(e,n),L=(0,r.Fl)((()=>!1!==e.link&&F.isLink.value)),P=(0,r.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||F.isClickable.value)));return(0,f.L)((()=>{var t,n,d;const f=L.value?"a":e.tag,w=!(!o.title&&!e.title),_=!(!o.subtitle&&!e.subtitle),I=w||_,E=!!(o.append||e.appendAvatar||e.appendIcon),S=!!(o.prepend||e.prependAvatar||e.prependIcon),k=!(!o.image&&!e.image),C=I||S||E,x=!(!o.text&&!e.text);return(0,r.wy)((0,r.Wm)(f,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":P.value},s.value,a.value,l.value,g.value,A.value,O.value,N.value,D.value,h.value],style:[c.value,T.value,R.value],href:F.href.value,onClick:P.value&&F.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[k&&(0,r.Wm)(u.z,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[(0,r.Wm)("div",{class:"v-card__image"},[(null==(t=o.image)?void 0:t.call(o))??(0,r.Wm)(m.f,null,null)])]}),(0,r.Wm)(b.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:o.loader}),C&&(0,r.Wm)(p,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:o.item,prepend:o.prepend,title:o.title,subtitle:o.subtitle,append:o.append}),x&&(0,r.Wm)(v.Z,{key:"text"},{default:()=>[(null==(n=o.text)?void 0:n.call(o))??e.text]}),null==(d=o.default)?void 0:d.call(o),o.actions&&(0,r.Wm)(i.h,null,{default:o.actions}),(0,y.Ux)(P.value,"v-card")]}),[[(0,r.Q2)("ripple"),P.value&&e.ripple]])})),{}}})},1334:function(e,t,n){"use strict";n.d(t,{h:function(){return a}});var r=n(3396),i=n(8434),o=n(320),s=n(9888);const a=(0,o.aZ)({name:"VCardActions",setup(e,t){let{slots:n}=t;return(0,i.AF)({VBtn:{variant:"text"}}),(0,s.L)((()=>{var e;return(0,r.Wm)("div",{class:"v-card-actions"},[null==(e=n.default)?void 0:e.call(n)])})),{}}})},1888:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(1114);const i=(0,r.J)("v-card-text")},6572:function(e,t,n){"use strict";n.d(t,{E:function(){return i}});var r=n(1114);const i=(0,r.J)("v-card-title")},1222:function(e,t,n){"use strict";n.d(t,{x:function(){return d}});var r=n(3396),i=n(8302),o=n(1550),s=n(8969),a=n(320),l=n(7514),u=n(9888),c=n(131);const d=(0,a.aZ)({name:"VCheckbox",inheritAttrs:!1,props:{...(0,i.co)(),...(0,o.w4)()},emits:{"update:focused":e=>!0},setup(e,t){let{attrs:n,slots:a}=t;const{isFocused:d,focus:h,blur:f}=(0,s.K)(e),p=(0,l.sq)(),v=(0,r.Fl)((()=>e.id||`checkbox-${p}`));return(0,u.L)((()=>{const[t,s]=(0,c.An)(n),[l,u]=(0,i.PE)(e),[p,m]=(0,o.CI)(e);return(0,r.Wm)(i.q8,(0,r.dG)({class:"v-checkbox"},t,l,{id:v.value,focused:d.value}),{...a,default:e=>{let{id:t,messagesId:n,isDisabled:i,isReadonly:l}=e;return(0,r.Wm)(o.pM,(0,r.dG)(p,{id:t.value,"aria-describedby":n.value,disabled:i.value,readonly:l.value},s,{onFocus:h,onBlur:f}),a)}})})),{}}})},1550:function(e,t,n){"use strict";n.d(t,{pM:function(){return C},CI:function(){return T},w4:function(){return k}});var r=n(3396),i=n(3289),o=n(7302),s=n(4960),a=n(9694),l=n(7041),u=n(8434),c=n(8717),d=n(4870),h=n(3766),f=n(131),p=n(320),v=n(7514),m=n(9888);const g=Symbol.for("vuetify:selection-control-group"),y=(0,h.U)({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:s.lE,trueIcon:s.lE,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:f.vZ},...(0,l.x$)(),...(0,a.f)()},"v-selection-control-group");(0,p.aZ)({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...y()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const i=(0,c.z)(e,"modelValue"),o=(0,v.sq)(),s=(0,r.Fl)((()=>e.id||`v-selection-control-group-${o}`)),a=(0,r.Fl)((()=>e.name||s.value)),l=new Set;return(0,r.JJ)(g,{modelValue:i,forceUpdate:()=>{l.forEach((e=>e()))},onForceUpdate:e=>{l.add(e),(0,d.EB)((()=>{l.delete(e)}))}}),(0,u.AF)({[e.defaultsTarget]:{color:(0,d.Vh)(e,"color"),disabled:(0,d.Vh)(e,"disabled"),density:(0,d.Vh)(e,"density"),error:(0,d.Vh)(e,"error"),inline:(0,d.Vh)(e,"inline"),modelValue:i,multiple:(0,r.Fl)((()=>!!e.multiple||null==e.multiple&&Array.isArray(i.value))),name:a,falseIcon:(0,d.Vh)(e,"falseIcon"),trueIcon:(0,d.Vh)(e,"trueIcon"),readonly:(0,d.Vh)(e,"readonly"),ripple:(0,d.Vh)(e,"ripple"),type:(0,d.Vh)(e,"type"),valueComparator:(0,d.Vh)(e,"valueComparator")}}),(0,m.L)((()=>{var t;return(0,r.Wm)("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline}],role:"radio"===e.type?"radiogroup":void 0},[null==(t=n.default)?void 0:t.call(n)])})),{}}});var b=n(3824),w=n(2370),_=n(2385);const I=(0,h.U)({label:String,trueValue:null,falseValue:null,value:null,...y()},"v-selection-control");function E(e){const t=(0,r.f3)(g,void 0),{densityClasses:n}=(0,a.t)(e),i=(0,c.z)(e,"modelValue"),o=(0,r.Fl)((()=>void 0!==e.trueValue?e.trueValue:void 0===e.value||e.value)),s=(0,r.Fl)((()=>void 0!==e.falseValue&&e.falseValue)),l=(0,r.Fl)((()=>!!e.multiple||null==e.multiple&&Array.isArray(i.value))),u=(0,r.Fl)({get(){const n=t?t.modelValue.value:i.value;return l.value?n.some((t=>e.valueComparator(t,o.value))):e.valueComparator(n,o.value)},set(n){if(e.readonly)return;const r=n?o.value:s.value;let a=r;l.value&&(a=n?[...(0,f.FT)(i.value),r]:(0,f.FT)(i.value).filter((t=>!e.valueComparator(t,o.value)))),t?t.modelValue.value=a:i.value=a}}),{textColorClasses:d,textColorStyles:h}=(0,w.rY)((0,r.Fl)((()=>!u.value||e.error||e.disabled?void 0:e.color))),p=(0,r.Fl)((()=>u.value?e.trueIcon:e.falseIcon));return{group:t,densityClasses:n,trueValue:o,falseValue:s,model:u,textColorClasses:d,textColorStyles:h,icon:p}}const S=(0,p.ev)()({name:"VSelectionControl",directives:{Ripple:b.H},inheritAttrs:!1,props:I(),emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:s}=t;const{group:a,densityClasses:l,icon:u,model:c,textColorClasses:h,textColorStyles:p,trueValue:g}=E(e),y=(0,v.sq)(),b=(0,r.Fl)((()=>e.id||`input-${y}`)),w=(0,d.iH)(!1),I=(0,d.iH)(!1),S=(0,d.iH)();function k(e){w.value=!0,(!_.Z1||_.Z1&&e.target.matches(":focus-visible"))&&(I.value=!0)}function C(){w.value=!1,I.value=!1}function T(t){e.readonly&&a&&(0,r.Y3)((()=>a.forceUpdate())),c.value=t.target.checked}return null==a||a.onForceUpdate((()=>{S.value&&(S.value.checked=c.value)})),(0,m.L)((()=>{var t,a;const d=s.label?s.label({label:e.label,props:{for:b.value}}):e.label,[v,m]=(0,f.An)(n);return(0,r.Wm)("div",(0,r.dG)({class:["v-selection-control",{"v-selection-control--dirty":c.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":w.value,"v-selection-control--focus-visible":I.value,"v-selection-control--inline":e.inline},l.value]},v),[(0,r.Wm)("div",{class:["v-selection-control__wrapper",h.value],style:p.value},[null==(t=s.default)?void 0:t.call(s),(0,r.wy)((0,r.Wm)("div",{class:["v-selection-control__input"]},[u.value&&(0,r.Wm)(i.t,{key:"icon",icon:u.value},null),(0,r.Wm)("input",(0,r.dG)({ref:S,checked:c.value,disabled:e.disabled,id:b.value,onBlur:C,onFocus:k,onInput:T,"aria-disabled":e.readonly,type:e.type,value:g.value,name:e.name,"aria-checked":"checkbox"===e.type?c.value:void 0},m),null),null==(a=s.input)?void 0:a.call(s,{model:c,textColorClasses:h,textColorStyles:p,props:{onFocus:k,onBlur:C,id:b.value}})]),[[(0,r.Q2)("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),d&&(0,r.Wm)(o.J,{for:b.value,clickable:!0},{default:()=>[d]})])})),{isFocused:w,input:S}}});const k=(0,h.U)({indeterminate:Boolean,indeterminateIcon:{type:s.lE,default:"$checkboxIndeterminate"},...I({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),C=(0,p.aZ)({name:"VCheckboxBtn",props:k(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,t){let{slots:n}=t;const i=(0,c.z)(e,"indeterminate"),o=(0,c.z)(e,"modelValue");function s(e){i.value&&(i.value=!1)}const a=(0,r.Fl)((()=>e.indeterminate?e.indeterminateIcon:e.falseIcon)),l=(0,r.Fl)((()=>e.indeterminate?e.indeterminateIcon:e.trueIcon));return(0,m.L)((()=>(0,r.Wm)(S,(0,r.dG)(e,{modelValue:o.value,"onUpdate:modelValue":[e=>o.value=e,s],class:"v-checkbox-btn",type:"checkbox",inline:!0,falseIcon:a.value,trueIcon:l.value,"aria-checked":e.indeterminate?"mixed":void 0}),n))),{}}});function T(e){return(0,f.ei)(e,Object.keys(C.props))}},2816:function(e,t,n){"use strict";n.d(t,{_:function(){return u}});var r=n(3396),i=n(9242),o=n(8952),s=n(4906),a=n(320),l=n(9888);const u=(0,a.aZ)({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...(0,s.X)({transition:{component:o.cu}})},setup(e,t){let{slots:n}=t;const o=(0,r.Fl)((()=>e.max?`${e.value} / ${e.max}`:String(e.value)));return(0,l.L)((()=>(0,r.Wm)(s.J,{transition:e.transition},{default:()=>[(0,r.wy)((0,r.Wm)("div",{class:"v-counter"},[n.default?n.default({counter:o.value,max:e.max,value:e.value}):o.value]),[[i.F8,e.active]])]}))),{}}})},836:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var r=n(8434),i=n(3396),o=n(4870);const s=(0,i.aZ)({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:n}=t;const{defaults:i,reset:s,root:a,scoped:l}=(0,o.BK)(e);return(0,r.AF)(i,{reset:s,root:a,scoped:l}),()=>{var e;return null==(e=n.default)?void 0:e.call(n)}}})},3601:function(e,t,n){"use strict";n.d(t,{B:function(){return p}});var r=n(3396),i=n(2583),o=n(836),s=n(8551),a=n(8717),l=n(5975),u=n(3185),c=n(4870),d=n(320),h=n(2385),f=n(9888);const p=(0,d.ev)()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...(0,s.BU)({origin:"center center",scrollStrategy:"block",transition:{component:i.v},zIndex:2400})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const i=(0,a.z)(e,"modelValue"),{scopeId:d}=(0,l.a)(),p=(0,c.iH)();function v(e){var t,n;const r=e.relatedTarget,i=e.target;if(r!==i&&null!=(t=p.value)&&t.contentEl&&null!=(n=p.value)&&n.globalTop&&![document,p.value.contentEl].includes(i)&&!p.value.contentEl.contains(i)){const e=[...p.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter((e=>!e.hasAttribute("disabled")&&!e.matches('[tabindex="-1"]')));if(!e.length)return;const t=e[0],n=e[e.length-1];r===t?n.focus():t.focus()}}return h.BR&&(0,r.YP)((()=>i.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",v):document.removeEventListener("focusin",v)}),{immediate:!0}),(0,r.YP)(i,(async e=>{var t,n;(await(0,r.Y3)(),e)?null==(t=p.value.contentEl)||t.focus({preventScroll:!0}):null==(n=p.value.activatorEl)||n.focus({preventScroll:!0})})),(0,f.L)((()=>{const[t]=(0,s.Fe)(e);return(0,r.Wm)(s.yc,(0,r.dG)({ref:p,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable}]},t,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,"aria-role":"dialog","aria-modal":"true",activatorProps:(0,r.dG)({"aria-haspopup":"dialog","aria-expanded":String(i.value)},e.activatorProps)},d),{activator:n.activator,default:function(){for(var e,t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return(0,r.Wm)(o.z,{root:!0},{default:()=>[null==(e=n.default)?void 0:e.call(n,...i)]})}})})),(0,u.F)({},p)}})},4075:function(e,t,n){"use strict";n.d(t,{J:function(){return c}});var r=n(3396),i=n(7041),o=n(2370),s=n(4870),a=n(320),l=n(131),u=n(9888);const c=(0,a.aZ)({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...(0,i.x$)()},setup(e,t){let{attrs:n}=t;const{themeClasses:a}=(0,i.ER)(e),{backgroundColorClasses:c,backgroundColorStyles:d}=(0,o.Y5)((0,s.Vh)(e,"color")),h=(0,r.Fl)((()=>{const t={};return e.length&&(t[e.vertical?"maxHeight":"maxWidth"]=(0,l.kb)(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=(0,l.kb)(e.thickness)),t}));return(0,u.L)((()=>(0,r.Wm)("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,c.value],style:[h.value,d.value],"aria-orientation":n.role&&"separator"!==n.role?void 0:e.vertical?"vertical":"horizontal",role:`${n.role||"separator"}`},null))),{}}})},3446:function(e,t,n){"use strict";n.d(t,{M:function(){return v}});n(7658);var r=n(3396),i=n(6191),o=n(4108),s=n(4580),a=n(2465),l=n(1970),u=n(1136),c=n(4231),d=n(1138),h=n(2370),f=n(320),p=n(9888);const v=(0,f.aZ)({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...(0,a.c)(),...(0,l.YQ)(),...(0,u.H)(),...(0,c.I)(),...(0,d.Q)(),...(0,i.w)()},emits:{"group:selected":e=>!0},setup(e,t){let{slots:n}=t;const u=(0,l.Yt)(e,o.j),{backgroundColorClasses:d,backgroundColorStyles:f}=(0,h.Y5)(e,"bgColor"),{elevationClasses:v}=(0,a.Y)(e),{roundedClasses:m}=(0,c.b)(e),g=(0,r.Fl)((()=>(null==u?void 0:u.disabled.value)||e.disabled)),y=(0,r.Fl)((()=>u.group.items.value.reduce(((e,t,n)=>(u.group.selected.value.includes(t.id)&&e.push(n),e)),[]))),b=(0,r.Fl)((()=>{const e=u.group.items.value.findIndex((e=>e.id===u.id));return!u.isSelected.value&&y.value.some((t=>t-e===1))})),w=(0,r.Fl)((()=>{const e=u.group.items.value.findIndex((e=>e.id===u.id));return!u.isSelected.value&&y.value.some((t=>t-e===-1))}));return(0,r.JJ)(o.j,u),(0,p.L)((()=>{var t;const o=!(!n.text&&!e.text),a=!(!n.title&&!e.title);return(0,r.Wm)(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":u.isSelected.value,"v-expansion-panel--before-active":b.value,"v-expansion-panel--after-active":w.value,"v-expansion-panel--disabled":g.value},m.value,d.value],style:f.value,"aria-expanded":u.isSelected.value},{default:()=>[(0,r.Wm)("div",{class:["v-expansion-panel__shadow",...v.value]},null),a&&(0,r.Wm)(i.V,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),o&&(0,r.Wm)(s.H,{key:"text",eager:e.eager},{default:()=>[n.text?n.text():e.text]}),null==(t=n.default)?void 0:t.call(n)]})})),{}}})},4580:function(e,t,n){"use strict";n.d(t,{H:function(){return c}});var r=n(3396),i=n(9242),o=n(8952),s=n(4108),a=n(1136),l=n(320),u=n(9888);const c=(0,l.aZ)({name:"VExpansionPanelText",props:{...(0,a.H)()},setup(e,t){let{slots:n}=t;const l=(0,r.f3)(s.j);if(!l)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:c,onAfterLeave:d}=(0,a.l)(e,l.isSelected);return(0,u.L)((()=>{var e;return(0,r.Wm)(o.Fx,{onAfterLeave:d},{default:()=>[(0,r.wy)((0,r.Wm)("div",{class:"v-expansion-panel-text"},[n.default&&c.value&&(0,r.Wm)("div",{class:"v-expansion-panel-text__wrapper"},[null==(e=n.default)?void 0:e.call(n)])]),[[i.F8,l.isSelected.value]])]})})),{}}})},6191:function(e,t,n){"use strict";n.d(t,{V:function(){return f},w:function(){return h}});var r=n(3396),i=n(4108),o=n(3289),s=n(3824),a=n(4960),l=n(2370),u=n(3766),c=n(320),d=n(9888);const h=(0,u.U)({color:String,expandIcon:{type:a.lE,default:"$expand"},collapseIcon:{type:a.lE,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),f=(0,c.aZ)({name:"VExpansionPanelTitle",directives:{Ripple:s.H},props:{...h()},setup(e,t){let{slots:n}=t;const s=(0,r.f3)(i.j);if(!s)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:a,backgroundColorStyles:u}=(0,l.Y5)(e,"color"),c=(0,r.Fl)((()=>({collapseIcon:e.collapseIcon,disabled:s.disabled.value,expanded:s.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})));return(0,d.L)((()=>{var t;return(0,r.wy)((0,r.Wm)("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":s.isSelected.value},a.value],style:u.value,type:"button",tabindex:s.disabled.value?-1:void 0,disabled:s.disabled.value,"aria-expanded":s.isSelected.value,onClick:e.readonly?void 0:s.toggle},[(0,r.Wm)("span",{class:"v-expansion-panel-title__overlay"},null),null==(t=n.default)?void 0:t.call(n,c.value),!e.hideActions&&(0,r.Wm)("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(c.value):(0,r.Wm)(o.t,{icon:s.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[(0,r.Q2)("ripple"),e.ripple]])})),{}}})},4108:function(e,t,n){"use strict";n.d(t,{j:function(){return d},V:function(){return f}});var r=n(3396),i=n(1970),o=n(1138),s=n(7041),a=n(8434),l=n(4870),u=n(320),c=n(9888);const d=Symbol.for("vuetify:v-expansion-panel"),h=["default","accordion","inset","popout"],f=(0,u.aZ)({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>h.includes(e)},readonly:Boolean,...(0,i.k4)(),...(0,o.Q)(),...(0,s.x$)()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;(0,i._v)(e,d);const{themeClasses:o}=(0,s.ER)(e),u=(0,r.Fl)((()=>e.variant&&`v-expansion-panels--variant-${e.variant}`));return(0,a.AF)({VExpansionPanel:{color:(0,l.Vh)(e,"color")},VExpansionPanelTitle:{readonly:(0,l.Vh)(e,"readonly")}}),(0,c.L)((()=>(0,r.Wm)(e.tag,{class:["v-expansion-panels",o.value,u.value]},n))),{}}})},7173:function(e,t,n){"use strict";n.d(t,{hF:function(){return S},g8:function(){return k},hy:function(){return E}});var r=n(3396),i=n(9242),o=n(8952),s=n(6308),a=n(7302),l=n(320),u=n(9888);const c=(0,l.aZ)({name:"VFieldLabel",props:{floating:Boolean},setup(e,t){let{slots:n}=t;return(0,u.L)((()=>(0,r.Wm)(a.J,{class:["v-field-label",{"v-field-label--floating":e.floating}],"aria-hidden":e.floating||void 0},n))),{}}});var d=n(4960),h=n(6791),f=n(8969),p=n(7041),v=n(2370),m=n(4870),g=n(3766),y=n(131),b=n(7514),w=n(3122),_=n(8587);const I=["underlined","outlined","filled","solo","plain"],E=(0,g.U)({appendInnerIcon:d.lE,bgColor:String,clearable:Boolean,clearIcon:{type:d.lE,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:d.lE,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>I.includes(e)},"onClick:clear":y.as,"onClick:appendInner":y.as,"onClick:prependInner":y.as,...(0,p.x$)(),...(0,h.fF)()},"v-field"),S=(0,l.ev)()({name:"VField",inheritAttrs:!1,props:{id:String,...(0,f.B)(),...E()},emits:{"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:a,slots:l}=t;const{themeClasses:d}=(0,p.ER)(e),{loaderClasses:g}=(0,h.U2)(e),{focusClasses:I,isFocused:E,focus:S,blur:k}=(0,f.K)(e),{InputIcon:C}=(0,s.v)(e),T=(0,r.Fl)((()=>e.dirty||e.active)),x=(0,r.Fl)((()=>!e.singleLine&&!(!e.label&&!l.label))),A=(0,b.sq)(),O=(0,r.Fl)((()=>e.id||`input-${A}`)),R=(0,r.Fl)((()=>`${O.value}-messages`)),N=(0,m.iH)(),D=(0,m.iH)(),F=(0,m.iH)(),{backgroundColorClasses:L,backgroundColorStyles:P}=(0,v.Y5)((0,m.Vh)(e,"bgColor")),{textColorClasses:V,textColorStyles:M}=(0,v.rY)((0,r.Fl)((()=>T.value&&E.value&&!e.error&&!e.disabled?e.color:void 0)));(0,r.YP)(T,(e=>{if(x.value){const t=N.value.$el,n=D.value.$el,r=(0,w.G)(t),i=n.getBoundingClientRect(),o=i.x-r.x,s=i.y-r.y-(r.height/2-i.height/2),a=i.width/.75,l=Math.abs(a-r.width)>1?{maxWidth:(0,y.kb)(a)}:void 0,u=getComputedStyle(t),c=getComputedStyle(n),d=1e3*parseFloat(u.transitionDuration)||150,h=parseFloat(c.getPropertyValue("--v-field-label-scale")),f=c.getPropertyValue("color");t.style.visibility="visible",n.style.visibility="hidden",(0,w.j)(t,{transform:`translate(${o}px, ${s}px) scale(${h})`,color:f,...l},{duration:d,easing:_.Ly,direction:e?"normal":"reverse"}).finished.then((()=>{t.style.removeProperty("visibility"),n.style.removeProperty("visibility")}))}}),{flush:"post"});const U=(0,r.Fl)((()=>({isActive:T,isFocused:E,controlRef:F,blur:k,focus:S})));function B(e){e.target!==document.activeElement&&e.preventDefault(),a("click:control",e)}return(0,u.L)((()=>{var t,s,a;const u="outlined"===e.variant,f=l["prepend-inner"]||e.prependInnerIcon,p=!(!e.clearable&&!l.clear),v=!!(l["append-inner"]||e.appendInnerIcon||p),m=l.label?l.label({label:e.label,props:{for:O.value}}):e.label;return(0,r.Wm)("div",(0,r.dG)({class:["v-field",{"v-field--active":T.value,"v-field--appended":v,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":f,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!m,[`v-field--variant-${e.variant}`]:!0},d.value,L.value,I.value,g.value],style:[P.value,M.value],onClick:B},n),[(0,r.Wm)("div",{class:"v-field__overlay"},null),(0,r.Wm)(h.rD,{name:"v-field",active:!!e.loading,color:e.error?"error":e.color},{default:l.loader}),f&&(0,r.Wm)("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&(0,r.Wm)(C,{key:"prepend-icon",name:"prependInner"},null),null==(t=l["prepend-inner"])?void 0:t.call(l,U.value)]),(0,r.Wm)("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(e.variant)&&x.value&&(0,r.Wm)(c,{key:"floating-label",ref:D,class:[V.value],floating:!0,for:O.value},{default:()=>[m]}),(0,r.Wm)(c,{ref:N,for:O.value},{default:()=>[m]}),null==(s=l.default)?void 0:s.call(l,{...U.value,props:{id:O.value,class:"v-field__input","aria-describedby":R.value},focus:S,blur:k})]),p&&(0,r.Wm)(o.Zq,{key:"clear"},{default:()=>[(0,r.wy)((0,r.Wm)("div",{class:"v-field__clearable"},[l.clear?l.clear():(0,r.Wm)(C,{name:"clear"},null)]),[[i.F8,e.dirty]])]}),v&&(0,r.Wm)("div",{key:"append",class:"v-field__append-inner"},[null==(a=l["append-inner"])?void 0:a.call(l,U.value),e.appendInnerIcon&&(0,r.Wm)(C,{key:"append-icon",name:"appendInner"},null)]),(0,r.Wm)("div",{class:["v-field__outline",V.value]},[u&&(0,r.Wm)(r.HY,null,[(0,r.Wm)("div",{class:"v-field__outline__start"},null),x.value&&(0,r.Wm)("div",{class:"v-field__outline__notch"},[(0,r.Wm)(c,{ref:D,floating:!0,for:O.value},{default:()=>[m]})]),(0,r.Wm)("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(e.variant)&&x.value&&(0,r.Wm)(c,{ref:D,floating:!0,for:O.value},{default:()=>[m]})])])})),{controlRef:F}}});function k(e){const t=Object.keys(S.props).filter((e=>!(0,y.F7)(e)));return(0,y.ei)(e,t)}},6422:function(e,t,n){"use strict";n.d(t,{O:function(){return u}});var r=n(3396),i=n(4357),o=n(3185),s=n(4870),a=n(320),l=n(9888);const u=(0,a.aZ)({name:"VForm",props:{...(0,i.vC)()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:n,emit:a}=t;const u=(0,i.Np)(e),c=(0,s.iH)();function d(e){e.preventDefault(),u.reset()}function h(e){const t=e,n=u.validate();t.then=n.then.bind(n),t.catch=n.catch.bind(n),t.finally=n.finally.bind(n),a("submit",t),t.defaultPrevented||n.then((e=>{let{valid:t}=e;var n;t&&(null==(n=c.value)||n.submit())})),t.preventDefault()}return(0,l.L)((()=>{var e;return(0,r.Wm)("form",{ref:c,class:"v-form",novalidate:!0,onReset:d,onSubmit:h},[null==(e=n.default)?void 0:e.call(n,u)])})),(0,o.F)(u,c)}})},8521:function(e,t,n){"use strict";n.d(t,{D:function(){return p}});n(7658),n(8099);var r=n(1138),i=n(2268),o=n(3396),s=n(320);const a=["sm","md","lg","xl","xxl"],l=(()=>a.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),u=(()=>a.reduce(((e,t)=>(e["offset"+(0,i.kC)(t)]={type:[String,Number],default:null},e)),{}))(),c=(()=>a.reduce(((e,t)=>(e["order"+(0,i.kC)(t)]={type:[String,Number],default:null},e)),{}))(),d={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(c)};function h(e,t,n){let r=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");r+=`-${n}`}return"col"===e&&(r="v-"+r),"col"!==e||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const f=["auto","start","end","center","baseline","stretch"],p=(0,s.aZ)({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...u,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>f.includes(e)},...(0,r.Q)()},setup(e,t){let{slots:n}=t;const r=(0,o.Fl)((()=>{const t=[];let n;for(n in d)d[n].forEach((r=>{const i=e[r],o=h(n,r,i);o&&t.push(o)}));const r=t.some((e=>e.startsWith("v-col-")));return t.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}));return()=>{var t;return(0,o.h)(e.tag,{class:r.value},null==(t=n.default)?void 0:t.call(n))}}})},3369:function(e,t,n){"use strict";n.d(t,{K:function(){return a}});var r=n(3396),i=(n(8099),n(1138)),o=n(320),s=n(9888);const a=(0,o.aZ)({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...(0,i.Q)()},setup(e,t){let{slots:n}=t;return(0,s.L)((()=>(0,r.Wm)(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},n))),{}}})},6824:function(e,t,n){"use strict";n.d(t,{o:function(){return E}});n(7658),n(8099);var r=n(1138),i=n(2268),o=n(3396),s=n(320);const a=["sm","md","lg","xl","xxl"],l=["start","end","center"],u=["space-between","space-around","space-evenly"];function c(e,t){return a.reduce(((n,r)=>(n[e+(0,i.kC)(r)]=t(),n)),{})}const d=[...l,"baseline","stretch"],h=e=>d.includes(e),f=c("align",(()=>({type:String,default:null,validator:h}))),p=[...l,...u],v=e=>p.includes(e),m=c("justify",(()=>({type:String,default:null,validator:v}))),g=[...l,...u,"stretch"],y=e=>g.includes(e),b=c("alignContent",(()=>({type:String,default:null,validator:y}))),w={align:Object.keys(f),justify:Object.keys(m),alignContent:Object.keys(b)},_={align:"align",justify:"justify",alignContent:"align-content"};function I(e,t,n){let r=_[e];if(null!=n){if(t){const n=t.replace(e,"");r+=`-${n}`}return r+=`-${n}`,r.toLowerCase()}}const E=(0,s.aZ)({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h},...f,justify:{type:String,default:null,validator:v},...m,alignContent:{type:String,default:null,validator:y},...b,...(0,r.Q)()},setup(e,t){let{slots:n}=t;const r=(0,o.Fl)((()=>{const t=[];let n;for(n in w)w[n].forEach((r=>{const i=e[r],o=I(n,r,i);o&&t.push(o)}));return t.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),t}));return()=>{var t;return(0,o.h)(e.tag,{class:["v-row",r.value]},null==(t=n.default)?void 0:t.call(n))}}})},9234:function(e,t,n){"use strict";n.d(t,{C:function(){return i}});var r=n(1114);const i=(0,r.J)("flex-grow-1","div","VSpacer")},3289:function(e,t,n){"use strict";n.d(t,{t:function(){return v}});var r=n(3396),i=n(4960),o=n(9374),s=n(1138),a=n(7041),l=n(2370),u=n(4870),c=n(3766),d=n(320),h=n(9888),f=n(131);const p=(0,c.U)({color:String,start:Boolean,end:Boolean,icon:i.lE,...(0,o.Z)(),...(0,s.Q)({tag:"i"}),...(0,a.x$)()},"v-icon"),v=(0,d.aZ)({name:"VIcon",props:p(),setup(e,t){let n,{attrs:s,slots:c}=t;c.default&&(n=(0,r.Fl)((()=>{var e,t;const n=null==(e=c.default)?void 0:e.call(c);if(n)return null==(t=n.filter((e=>e.type===r.xv&&e.children&&"string"===typeof e.children))[0])?void 0:t.children})));const{themeClasses:d}=(0,a.ER)(e),{iconData:p}=(0,i.bi)(n||e),{sizeClasses:v}=(0,o.t)(e),{textColorClasses:m,textColorStyles:g}=(0,l.rY)((0,u.Vh)(e,"color"));return(0,h.L)((()=>{var t;return(0,r.Wm)(p.value.component,{tag:e.tag,icon:p.value.icon,class:["v-icon","notranslate",d.value,v.value,m.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[v.value?void 0:{fontSize:(0,f.kb)(e.size),height:(0,f.kb)(e.size),width:(0,f.kb)(e.size)},g.value],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},{default:()=>[null==(t=c.default)?void 0:t.call(c)]})})),{}}})},8694:function(e,t,n){"use strict";n.d(t,{f:function(){return v}});var r=n(3396),i=n(4544),o=n(320),s=n(9888);function a(e){return{aspectStyles:(0,r.Fl)((()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0}))}}const l=(0,o.aZ)({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...(0,i.x)()},setup(e,t){let{slots:n}=t;const{aspectStyles:o}=a(e),{dimensionStyles:l}=(0,i.$)(e);return(0,s.L)((()=>{var t;return(0,r.Wm)("div",{class:"v-responsive",style:l.value},[(0,r.Wm)("div",{class:"v-responsive__sizer",style:o.value},null),null==(t=n.additional)?void 0:t.call(n),n.default&&(0,r.Wm)("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])})),{}}});var u=n(7052),c=n(4906),d=n(4870),h=n(9242),f=n(2385),p=n(131);const v=(0,o.aZ)({name:"VImg",directives:{intersect:u.Z},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...(0,c.X)()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:i}=t;const o=(0,d.iH)(""),a=(0,d.iH)(),u=(0,d.iH)(e.eager?"loading":"idle"),v=(0,d.iH)(),m=(0,d.iH)(),g=(0,r.Fl)((()=>e.src&&"object"===typeof e.src?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)})),y=(0,r.Fl)((()=>g.value.aspect||v.value/m.value||0));function b(t){if((!e.eager||!t)&&(!f.cu||t||e.eager)){if(u.value="loading",g.value.lazySrc){const e=new Image;e.src=g.value.lazySrc,S(e,null)}g.value.src&&(0,r.Y3)((()=>{var e,t;if(n("loadstart",(null==(e=a.value)?void 0:e.currentSrc)||g.value.src),null!=(t=a.value)&&t.complete){if(a.value.naturalWidth||_(),"error"===u.value)return;y.value||S(a.value,null),w()}else y.value||S(a.value),I()}))}}function w(){var e;I(),u.value="loaded",n("load",(null==(e=a.value)?void 0:e.currentSrc)||g.value.src)}function _(){var e;u.value="error",n("error",(null==(e=a.value)?void 0:e.currentSrc)||g.value.src)}function I(){const e=a.value;e&&(o.value=e.currentSrc||e.src)}(0,r.YP)((()=>e.src),(()=>{b("idle"!==u.value)})),(0,r.YP)(y,((e,t)=>{!e&&t&&a.value&&S(a.value)})),(0,r.wF)((()=>b()));let E=-1;function S(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=()=>{clearTimeout(E);const{naturalHeight:r,naturalWidth:i}=e;r||i?(v.value=i,m.value=r):e.complete||"loading"!==u.value||null==t?(e.currentSrc.endsWith(".svg")||e.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,m.value=1):E=window.setTimeout(n,t)};n()}const k=(0,r.Fl)((()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover}))),C=()=>{var t;if(!g.value.src||"idle"===u.value)return null;const n=(0,r.Wm)("img",{class:["v-img__img",k.value],src:g.value.src,srcset:g.value.srcset,alt:"",sizes:e.sizes,ref:a,onLoad:w,onError:_},null),o=null==(t=i.sources)?void 0:t.call(i);return(0,r.Wm)(c.J,{transition:e.transition,appear:!0},{default:()=>[(0,r.wy)(o?(0,r.Wm)("picture",{class:"v-img__picture"},[o,n]):n,[[h.F8,"loaded"===u.value]])]})},T=()=>(0,r.Wm)(c.J,{transition:e.transition},{default:()=>[g.value.lazySrc&&"loaded"!==u.value&&(0,r.Wm)("img",{class:["v-img__img","v-img__img--preload",k.value],src:g.value.lazySrc,alt:""},null)]}),x=()=>i.placeholder?(0,r.Wm)(c.J,{transition:e.transition,appear:!0},{default:()=>[("loading"===u.value||"error"===u.value&&!i.error)&&(0,r.Wm)("div",{class:"v-img__placeholder"},[i.placeholder()])]}):null,A=()=>i.error?(0,r.Wm)(c.J,{transition:e.transition,appear:!0},{default:()=>["error"===u.value&&(0,r.Wm)("div",{class:"v-img__error"},[i.error()])]}):null,O=()=>e.gradient?(0,r.Wm)("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,R=(0,d.iH)(!1);{const e=(0,r.YP)(y,(t=>{t&&(requestAnimationFrame((()=>{requestAnimationFrame((()=>{R.value=!0}))})),e())}))}return(0,s.L)((()=>(0,r.wy)((0,r.Wm)(l,{class:["v-img",{"v-img--booting":!R.value}],style:{width:(0,p.kb)("auto"===e.width?v.value:e.width)},aspectRatio:y.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>(0,r.Wm)(r.HY,null,[(0,r.Wm)(C,null,null),(0,r.Wm)(T,null,null),(0,r.Wm)(O,null,null),(0,r.Wm)(x,null,null),(0,r.Wm)(A,null,null)]),default:i.default}),[[(0,r.Q2)("intersect"),{handler:b,options:e.options},null,{once:!0}]]))),{currentSrc:o,image:a,state:u,naturalWidth:v,naturalHeight:m}}})},6308:function(e,t,n){"use strict";n.d(t,{v:function(){return s}});var r=n(3396),i=n(3289),o=n(1629);function s(e){const{t:t}=(0,o.bU)();function n(n){let{name:o}=n;const s={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[o],a=e[`onClick:${o}`],l=a&&s?t(`$vuetify.input.${s}`,e.label??""):void 0;return(0,r.Wm)(i.t,{icon:e[`${o}Icon`],"aria-label":l,onClick:a},null)}return{InputIcon:n}}},8302:function(e,t,n){"use strict";n.d(t,{q8:function(){return S},PE:function(){return k},co:function(){return E}});var r=n(3396),i=n(8952),o=n(4906),s=n(2370),a=n(320),l=n(131),u=n(9888);const c=(0,a.aZ)({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...(0,o.X)({transition:{component:i.cu,leaveAbsolute:!0,group:!0}})},setup(e,t){let{slots:n}=t;const i=(0,r.Fl)((()=>(0,l.FT)(e.messages))),{textColorClasses:a,textColorStyles:c}=(0,s.rY)((0,r.Fl)((()=>e.color)));return(0,u.L)((()=>(0,r.Wm)(o.J,{transition:e.transition,tag:"div",class:["v-messages",a.value],style:c.value,role:"alert","aria-live":"polite"},{default:()=>[e.active&&i.value.map(((e,t)=>(0,r.Wm)("div",{class:"v-messages__message",key:`${t}-${i.value}`},[n.message?n.message({message:e}):e])))]}))),{}}});var d=n(4960),h=n(9694),f=(n(7658),n(4357)),p=n(8717),v=n(4770),m=n(8969),g=n(4870),y=n(3766),b=n(7514);const w=(0,y.U)({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...(0,m.B)()},"validation");function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,b.BL)(),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,b.sq)();const i=(0,p.z)(e,"modelValue"),o=(0,r.Fl)((()=>void 0===e.validationValue?i.value:e.validationValue)),s=(0,f.cI)(),a=(0,g.iH)([]),u=(0,g.iH)(!0),c=(0,r.Fl)((()=>!(!(0,l.FT)(""===i.value?null:i.value).length&&!(0,l.FT)(""===o.value?null:o.value).length))),d=(0,r.Fl)((()=>!!(e.disabled||null!=s&&s.isDisabled.value))),h=(0,r.Fl)((()=>!!(e.readonly||null!=s&&s.isReadonly.value))),m=(0,r.Fl)((()=>e.errorMessages.length?(0,l.FT)(e.errorMessages).slice(0,Math.max(0,+e.maxErrors)):a.value)),y=(0,r.Fl)((()=>!e.error&&!m.value.length&&(!e.rules.length||(!u.value||null)))),w=(0,g.iH)(!1),_=(0,r.Fl)((()=>({[`${t}--error`]:!1===y.value,[`${t}--dirty`]:c.value,[`${t}--disabled`]:d.value,[`${t}--readonly`]:h.value}))),I=(0,r.Fl)((()=>e.name??(0,g.SU)(n)));(0,r.wF)((()=>{null==s||s.register({id:I.value,validate:C,reset:S,resetValidation:k})})),(0,r.Jd)((()=>{null==s||s.unregister(I.value)}));const E=(0,r.Fl)((()=>e.validateOn||(null==s?void 0:s.validateOn.value)||"input"));function S(){k(),i.value=null}function k(){u.value=!0,a.value=[]}async function C(){const t=[];w.value=!0;for(const n of e.rules){if(t.length>=(e.maxErrors??1))break;const r="function"===typeof n?n:()=>n,i=await r(o.value);!0!==i&&("string"===typeof i?t.push(i):console.warn(`${i} is not a valid value. Rule functions must return boolean true or a string.`))}return a.value=t,w.value=!1,u.value=!1,a.value}return(0,r.bv)((()=>null==s?void 0:s.update(I.value,y.value,m.value))),(0,v.U)((()=>"input"===E.value),(()=>{(0,r.YP)(o,(()=>{if(null!=o.value)C();else if(e.focused){const t=(0,r.YP)((()=>e.focused),(e=>{e||C(),t()}))}}))})),(0,v.U)((()=>"blur"===E.value),(()=>{(0,r.YP)((()=>e.focused),(e=>{e||C()}))})),(0,r.YP)(y,(()=>{null==s||s.update(I.value,y.value,m.value)})),{errorMessages:m,isDirty:c,isDisabled:d,isReadonly:h,isPristine:u,isValid:y,isValidating:w,reset:S,resetValidation:k,validate:C,validationClasses:_}}var I=n(6308);const E=(0,y.U)({id:String,appendIcon:d.lE,prependIcon:d.lE,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":l.as,"onClick:append":l.as,...(0,h.f)(),...w()},"v-input"),S=(0,a.ev)()({name:"VInput",props:{...E()},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:i,emit:o}=t;const{densityClasses:s}=(0,h.t)(e),{InputIcon:a}=(0,I.v)(e),l=(0,b.sq)(),d=(0,r.Fl)((()=>e.id||`input-${l}`)),f=(0,r.Fl)((()=>`${d.value}-messages`)),{errorMessages:p,isDirty:v,isDisabled:m,isReadonly:g,isPristine:y,isValid:w,isValidating:E,reset:S,resetValidation:k,validate:C,validationClasses:T}=_(e,"v-input",d),x=(0,r.Fl)((()=>({id:d,messagesId:f,isDirty:v,isDisabled:m,isReadonly:g,isPristine:y,isValid:w,isValidating:E,reset:S,resetValidation:k,validate:C})));return(0,u.L)((()=>{var t,n,o,l,u;const d=!(!i.prepend&&!e.prependIcon),h=!(!i.append&&!e.appendIcon),v=!!(null!=(t=e.messages)&&t.length||p.value.length),m=!e.hideDetails||"auto"===e.hideDetails&&(v||!!i.details);return(0,r.Wm)("div",{class:["v-input",`v-input--${e.direction}`,s.value,T.value]},[d&&(0,r.Wm)("div",{key:"prepend",class:"v-input__prepend"},[null==(n=i.prepend)?void 0:n.call(i,x.value),e.prependIcon&&(0,r.Wm)(a,{key:"prepend-icon",name:"prepend"},null)]),i.default&&(0,r.Wm)("div",{class:"v-input__control"},[null==(o=i.default)?void 0:o.call(i,x.value)]),h&&(0,r.Wm)("div",{key:"append",class:"v-input__append"},[e.appendIcon&&(0,r.Wm)(a,{key:"append-icon",name:"append"},null),null==(l=i.append)?void 0:l.call(i,x.value)]),m&&(0,r.Wm)("div",{class:"v-input__details"},[(0,r.Wm)(c,{id:f.value,active:v,messages:p.value.length>0?p.value:e.messages},{message:i.message}),null==(u=i.details)?void 0:u.call(i,x.value)])])})),{reset:S,resetValidation:k,validate:C}}});function k(e){const t=Object.keys(S.props).filter((e=>!(0,l.F7)(e)));return(0,l.ei)(e,t)}},7302:function(e,t,n){"use strict";n.d(t,{J:function(){return a}});var r=n(3396),i=n(7041),o=n(320),s=n(9888);const a=(0,o.aZ)({name:"VLabel",props:{text:String,clickable:Boolean,...(0,i.x$)()},setup(e,t){let{slots:n}=t;return(0,s.L)((()=>{var t;return(0,r.Wm)("label",{class:["v-label",{"v-label--clickable":e.clickable}]},[e.text,null==(t=n.default)?void 0:t.call(n)])})),{}}})},2329:function(e,t,n){"use strict";n.d(t,{i:function(){return V}});n(7658);var r=n(3396),i=n(4075),o=n(9242),s=n(836),a=n(8952),l=n(3867),u=n(4960),c=n(1138),d=n(6479),h=n(4870),f=n(320),p=n(3766),v=n(9888),m=n(131);const g=(0,f.aZ)({name:"VListGroupActivator",setup(e,t){let{slots:n}=t;return(0,d._$)(),()=>{var e;return null==(e=n.default)?void 0:e.call(n)}}}),y=(0,p.U)({activeColor:String,color:String,collapseIcon:{type:u.lE,default:"$collapse"},expandIcon:{type:u.lE,default:"$expand"},prependIcon:u.lE,appendIcon:u.lE,fluid:Boolean,subgroup:Boolean,value:null,...(0,c.Q)()},"v-list-group"),b=(0,f.ev)()({name:"VListGroup",props:{title:String,...y()},setup(e,t){let{slots:n}=t;const{isOpen:i,open:u,id:c}=(0,d.Io)((0,h.Vh)(e,"value"),!0),f=(0,r.Fl)((()=>`v-list-group--id-${String(c.value)}`)),p=(0,l.sm)();function m(e){u(!i.value,e)}const y=(0,r.Fl)((()=>({onClick:m,class:"v-list-group__header",id:f.value}))),b=(0,r.Fl)((()=>i.value?e.collapseIcon:e.expandIcon));return(0,v.L)((()=>{var t;return(0,r.Wm)(e.tag,{class:["v-list-group",{"v-list-group--prepend":null==p?void 0:p.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":i.value}]},{default:()=>[n.activator&&(0,r.Wm)(s.z,{defaults:{VListItem:{active:i.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&b.value,appendIcon:e.appendIcon||!e.subgroup&&b.value,title:e.title,value:e.value}}},{default:()=>[(0,r.Wm)(g,null,{default:()=>[n.activator({props:y.value,isOpen:i})]})]}),(0,r.Wm)(a.Fx,null,{default:()=>[(0,r.wy)((0,r.Wm)("div",{class:"v-list-group__items",role:"group","aria-labelledby":f.value},[null==(t=n.default)?void 0:t.call(n)]),[[o.F8,i.value]])]})]})})),{}}});function w(e){return(0,m.ei)(e,Object.keys(b.props))}var _=n(3150),I=n(2370);const E=(0,f.aZ)({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...(0,c.Q)()},setup(e,t){let{slots:n}=t;const{textColorClasses:i,textColorStyles:o}=(0,I.rY)((0,h.Vh)(e,"color"));return(0,v.L)((()=>{var t;const s=!(!n.default&&!e.title);return(0,r.Wm)(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},i.value],style:{textColorStyles:o}},{default:()=>[s&&(0,r.Wm)("div",{class:"v-list-subheader__text"},[(null==(t=n.default)?void 0:t.call(n))??e.title])]})})),{}}}),S=(0,f.ev)()({name:"VListChildren",props:{items:Array},setup(e,t){let{slots:n}=t;return(0,l.$l)(),()=>{var t,o;return(null==(t=n.default)?void 0:t.call(n))??(null==(o=e.items)?void 0:o.map((e=>{let{children:t,props:o,type:s,raw:a}=e;var l,u;if("divider"===s)return(null==(l=n.divider)?void 0:l.call(n,{props:o}))??(0,r.Wm)(i.J,o,null);if("subheader"===s)return(null==(u=n.subheader)?void 0:u.call(n,{props:o}))??(0,r.Wm)(E,o,{default:n.subheader});const c={subtitle:n.subtitle?e=>{var t;return null==(t=n.subtitle)?void 0:t.call(n,{...e,item:a})}:void 0,prepend:n.prepend?e=>{var t;return null==(t=n.prepend)?void 0:t.call(n,{...e,item:a})}:void 0,append:n.append?e=>{var t;return null==(t=n.append)?void 0:t.call(n,{...e,item:a})}:void 0,default:n.default?e=>{var t;return null==(t=n.default)?void 0:t.call(n,{...e,item:a})}:void 0,title:n.title?e=>{var t;return null==(t=n.title)?void 0:t.call(n,{...e,item:a})}:void 0},[d,h]=w(o);return t?(0,r.Wm)(b,(0,r.dG)({value:null==o?void 0:o.value},d),{activator:e=>{let{props:t}=e;return n.header?n.header({...o,...t}):(0,r.Wm)(_.l,(0,r.dG)(o,t),c)},default:()=>(0,r.Wm)(S,{items:t},n)}):n.item?n.item(o):(0,r.Wm)(_.l,o,c)})))}}});var k=n(2718),C=n(9694),T=n(4544),x=n(2465),A=n(6185),O=n(4231),R=n(7041),N=n(5221),D=n(8434);function F(e,t){const n=(0,m.qF)(t,e.itemType,"item"),r="string"===typeof t?t:(0,m.qF)(t,e.itemTitle),i=(0,m.qF)(t,e.itemValue,void 0),o=(0,m.qF)(t,e.itemChildren),s=!0===e.itemProps?(0,m.ei)(t,["children"])[1]:(0,m.qF)(t,e.itemProps),a={title:r,value:i,...s};return{type:n,title:a.title,value:a.value,props:a,children:"item"===n&&o?L(e,o):void 0,raw:t}}function L(e,t){const n=[];for(const r of t)n.push(F(e,r));return n}function P(e){const t=(0,r.Fl)((()=>L(e,e.items)));return{items:t}}const V=(0,f.ev)()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...(0,d.Gp)({selectStrategy:"single-leaf",openStrategy:"list"}),...(0,k.m)(),...(0,C.f)(),...(0,T.x)(),...(0,x.c)(),itemType:{type:String,default:"type"},...(0,A.S1)(),...(0,O.I)(),...(0,c.Q)(),...(0,R.x$)(),...(0,N.bk)({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,t){let{slots:n}=t;const{items:i}=P(e),{themeClasses:o}=(0,R.ER)(e),{backgroundColorClasses:s,backgroundColorStyles:a}=(0,I.Y5)((0,h.Vh)(e,"bgColor")),{borderClasses:u}=(0,k.P)(e),{densityClasses:c}=(0,C.t)(e),{dimensionStyles:f}=(0,T.$)(e),{elevationClasses:p}=(0,x.Y)(e),{roundedClasses:m}=(0,O.b)(e),{open:g,select:y}=(0,d.Ek)(e),b=(0,r.Fl)((()=>e.lines?`v-list--${e.lines}-line`:void 0)),w=(0,h.Vh)(e,"activeColor"),_=(0,h.Vh)(e,"color");(0,l.$l)(),(0,D.AF)({VListGroup:{activeColor:w,color:_},VListItem:{activeClass:(0,h.Vh)(e,"activeClass"),activeColor:w,color:_,density:(0,h.Vh)(e,"density"),disabled:(0,h.Vh)(e,"disabled"),lines:(0,h.Vh)(e,"lines"),nav:(0,h.Vh)(e,"nav"),variant:(0,h.Vh)(e,"variant")}});const E=(0,h.iH)(!1),A=(0,h.iH)();function N(e){E.value=!0}function F(e){E.value=!1}function L(e){var t;E.value||e.relatedTarget&&null!=(t=A.value)&&t.contains(e.relatedTarget)||M()}function V(e){if(A.value){if("ArrowDown"===e.key)M("next");else if("ArrowUp"===e.key)M("prev");else if("Home"===e.key)M("first");else{if("End"!==e.key)return;M("last")}e.preventDefault()}}function M(e){if(!A.value)return;const t=[...A.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter((e=>!e.hasAttribute("disabled"))),n=t.indexOf(document.activeElement);var r;if(e)if("first"===e){var i;null==(i=t[0])||i.focus()}else if("last"===e){var o;null==(o=t.at(-1))||o.focus()}else{let r,i=n;const o="next"===e?1:-1;do{i+=o,r=t[i]}while((!r||null==r.offsetParent)&&i<t.length&&i>=0);r?r.focus():M("next"===e?"first":"last")}else A.value.contains(document.activeElement)||null==(r=t[0])||r.focus()}return(0,v.L)((()=>(0,r.Wm)(e.tag,{ref:A,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},o.value,s.value,u.value,c.value,p.value,b.value,m.value],style:[a.value,f.value],role:"listbox","aria-activedescendant":void 0,onFocusin:N,onFocusout:F,onFocus:L,onKeydown:V},{default:()=>[(0,r.Wm)(S,{items:i.value},n)]}))),{open:g,select:y,focus:M}}})},3150:function(e,t,n){"use strict";n.d(t,{l:function(){return k}});var r=n(3396),i=n(652),o=n(836),s=n(3289),a=n(7769),l=n(2127),u=n(3824),c=n(5221),d=n(4960),h=n(2718),f=n(9694),p=n(4544),v=n(2465),m=n(4231),g=n(6183),y=n(1138),b=n(7041),w=n(3867),_=n(6479),I=n(320),E=n(131),S=n(9888);const k=(0,I.ev)()({name:"VListItem",directives:{Ripple:u.H},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:d.lE,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:d.lE,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:E.as,onClickOnce:E.as,...(0,h.m)(),...(0,f.f)(),...(0,p.x)(),...(0,v.c)(),...(0,m.I)(),...(0,g.GN)(),...(0,y.Q)(),...(0,b.x$)(),...(0,c.bk)({variant:"text"})},emits:{click:e=>!0},setup(e,t){let{attrs:n,slots:u,emit:d}=t;const y=(0,g.nB)(e,n),I=(0,r.Fl)((()=>e.value??y.href.value)),{select:E,isSelected:k,isIndeterminate:C,isGroupActivator:T,root:x,parent:A,openOnSelect:O}=(0,_.Io)(I,!1),R=(0,w.sm)(),N=(0,r.Fl)((()=>{var t;return!1!==e.active&&(e.active||(null==(t=y.isActive)?void 0:t.value)||k.value)})),D=(0,r.Fl)((()=>!1!==e.link&&y.isLink.value)),F=(0,r.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||y.isClickable.value||null!=e.value&&!!R))),L=(0,r.Fl)((()=>e.rounded||e.nav)),P=(0,r.Fl)((()=>({color:N.value?e.activeColor??e.color:e.color,variant:e.variant})));(0,r.YP)((()=>{var e;return null==(e=y.isActive)?void 0:e.value}),(e=>{e&&null!=A.value&&x.open(A.value,!0),e&&O(e)}),{immediate:!0});const{themeClasses:V}=(0,b.ER)(e),{borderClasses:M}=(0,h.P)(e),{colorClasses:U,colorStyles:B,variantClasses:$}=(0,c.c1)(P),{densityClasses:j}=(0,f.t)(e),{dimensionStyles:W}=(0,p.$)(e),{elevationClasses:q}=(0,v.Y)(e),{roundedClasses:H}=(0,m.b)(L),z=(0,r.Fl)((()=>e.lines?`v-list-item--${e.lines}-line`:void 0)),G=(0,r.Fl)((()=>({isActive:N.value,select:E,isSelected:k.value,isIndeterminate:C.value})));function K(t){var n;d("click",t),!T&&F.value&&(null==(n=y.navigate)||n.call(y,t),null!=e.value&&E(!k.value,t))}function Y(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),K(e))}return(0,S.L)((()=>{var t,n,d,h,f;const p=D.value?"a":e.tag,v=!R||k.value||N.value,m=u.title||e.title,g=u.subtitle||e.subtitle,b=!!(u.append||e.appendAvatar||e.appendIcon),w=!!(u.prepend||e.prependAvatar||e.prependIcon);return null==R||R.updateHasPrepend(w),(0,r.wy)((0,r.Wm)(p,{class:["v-list-item",{"v-list-item--active":N.value,"v-list-item--disabled":e.disabled,"v-list-item--link":F.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!w&&(null==R?void 0:R.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&N.value},V.value,M.value,v?U.value:void 0,j.value,q.value,z.value,H.value,$.value],style:[v?B.value:void 0,W.value],href:y.href.value,tabindex:F.value?0:void 0,onClick:K,onKeydown:F.value&&!D.value&&Y},{default:()=>[(0,c.Ux)(F.value||N.value,"v-list-item"),w&&(0,r.Wm)(o.z,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[(0,r.Wm)("div",{class:"v-list-item__prepend"},[e.prependAvatar&&(0,r.Wm)(i.V,{key:"prepend-avatar"},null),e.prependIcon&&(0,r.Wm)(s.t,{key:"prepend-icon"},null),null==(t=u.prepend)?void 0:t.call(u,G.value)])]}),(0,r.Wm)("div",{class:"v-list-item__content","data-no-activator":""},[m&&(0,r.Wm)(l.V,{key:"title"},{default:()=>[(null==(n=u.title)?void 0:n.call(u,{title:e.title}))??e.title]}),g&&(0,r.Wm)(a.o,{key:"subtitle"},{default:()=>[(null==(d=u.subtitle)?void 0:d.call(u,{subtitle:e.subtitle}))??e.subtitle]}),null==(h=u.default)?void 0:h.call(u,G.value)]),b&&(0,r.Wm)(o.z,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[(0,r.Wm)("div",{class:"v-list-item__append"},[null==(f=u.append)?void 0:f.call(u,G.value),e.appendIcon&&(0,r.Wm)(s.t,{key:"append-icon"},null),e.appendAvatar&&(0,r.Wm)(i.V,{key:"append-avatar"},null)])]})]}),[[(0,r.Q2)("ripple"),F.value&&e.ripple]])})),{}}})},8389:function(e,t,n){"use strict";n.d(t,{m:function(){return a}});var r=n(3396),i=n(1138),o=n(320),s=n(9888);const a=(0,o.aZ)({name:"VListItemAction",props:{start:Boolean,end:Boolean,...(0,i.Q)()},setup(e,t){let{slots:n}=t;return(0,s.L)((()=>(0,r.Wm)(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end}]},n))),{}}})},7769:function(e,t,n){"use strict";n.d(t,{o:function(){return i}});var r=n(1114);const i=(0,r.J)("v-list-item-subtitle")},2127:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(1114);const i=(0,r.J)("v-list-item-title")},3867:function(e,t,n){"use strict";n.d(t,{$l:function(){return s},sm:function(){return a}});var r=n(3396),i=n(4870);Symbol.for("vuetify:depth");const o=Symbol.for("vuetify:list");function s(){const e=(0,r.f3)(o,{hasPrepend:(0,i.iH)(!1),updateHasPrepend:()=>null}),t={hasPrepend:(0,i.iH)(!1),updateHasPrepend:e=>{e&&(t.hasPrepend.value=e)}};return(0,r.JJ)(o,t),e}function a(){return(0,r.f3)(o,null)}},3140:function(e,t,n){"use strict";n.d(t,{O:function(){return u}});var r=n(3396),i=n(1138),o=n(7396),s=n(1372),a=n(320),l=n(9888);const u=(0,a.aZ)({name:"VMain",props:{scrollable:Boolean,...(0,i.Q)({tag:"main"})},setup(e,t){let{slots:n}=t;const{mainStyles:i}=(0,o.$Y)(),{ssrBootStyles:a}=(0,s.u)();return(0,l.L)((()=>{var t,o;return(0,r.Wm)(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[i.value,a.value]},{default:()=>[e.scrollable?(0,r.Wm)("div",{class:"v-main__scroller"},[null==(t=n.default)?void 0:t.call(n)]):null==(o=n.default)?void 0:o.call(n)]})})),{}}})},4360:function(e,t,n){"use strict";n.d(t,{N:function(){return r}});const r=Symbol.for("vuetify:v-menu")},9657:function(e,t,n){"use strict";n.d(t,{V:function(){return D}});var r=n(3396),i=n(2718),o=n(2465),s=n(7396),a=n(4231),l=n(1138),u=n(7041),c=n(8434),d=n(2370),h=n(8157),f=n(8717),p=n(6183),v=n(1629),m=n(1372),g=n(4870),y=n(131);function b(e){let{rootEl:t,isSticky:n,layoutItemStyles:i}=e;const o=(0,g.iH)(!1),s=(0,g.iH)(0),a=(0,r.Fl)((()=>{const e="boolean"===typeof o.value?"top":o.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,o.value?{[e]:(0,y.kb)(s.value)}:{top:i.value.top}]}));(0,r.bv)((()=>{(0,r.YP)(n,(e=>{e?window.addEventListener("scroll",u,{passive:!0}):window.removeEventListener("scroll",u)}),{immediate:!0})})),(0,r.Jd)((()=>{document.removeEventListener("scroll",u)}));let l=0;function u(){const e=l>window.scrollY?"up":"down",n=t.value.getBoundingClientRect(),r=parseFloat(i.value.top??0),a=window.scrollY-Math.max(0,s.value-r),u=n.height+Math.max(s.value,r)-window.scrollY-window.innerHeight;n.height<window.innerHeight-r?(o.value="top",s.value=r):"up"===e&&"bottom"===o.value||"down"===e&&"top"===o.value?(s.value=window.scrollY+n.top,o.value=!0):"down"===e&&u<=0?(s.value=0,o.value="bottom"):"up"===e&&a<=0&&(s.value=n.top+a,o.value="top"),l=window.scrollY}return{isStuck:o,stickyStyles:a}}n(7658);const w=100,_=20;function I(e){const t=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*t}function E(e){if(e.length<2)return 0;if(2===e.length)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let t=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const r=I(t),i=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);t+=(i-r)*Math.abs(i),n===e.length-1&&(t*=.5)}return 1e3*I(t)}function S(){const e={};function t(t){Array.from(t.changedTouches).forEach((n=>{const r=e[n.identifier]??(e[n.identifier]=new y.PU(_));r.push([t.timeStamp,n])}))}function n(t){Array.from(t.changedTouches).forEach((t=>{delete e[t.identifier]}))}function r(t){var n;const r=null==(n=e[t])?void 0:n.values().reverse();if(!r)throw new Error(`No samples for touch id ${t}`);const i=r[0],o=[],s=[];for(const e of r){if(i[0]-e[0]>w)break;o.push({t:e[0],d:e[1].clientX}),s.push({t:e[0],d:e[1].clientY})}return{x:E(o),y:E(s),get direction(){const{x:e,y:t}=this,[n,r]=[Math.abs(e),Math.abs(t)];return n>r&&e>=0?"right":n>r&&e<=0?"left":r>n&&t>=0?"down":r>n&&t<=0?"up":k()}}}return{addMovement:t,endTouch:n,getVelocity:r}}function k(){throw new Error}function C(e){let{isActive:t,isTemporary:n,width:i,touchless:o,position:s}=e;(0,r.bv)((()=>{window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("touchmove",w,{passive:!1}),window.addEventListener("touchend",_,{passive:!0})})),(0,r.Jd)((()=>{window.removeEventListener("touchstart",b),window.removeEventListener("touchmove",w),window.removeEventListener("touchend",_)}));const a=(0,r.Fl)((()=>"bottom"!==s.value)),{addMovement:l,endTouch:u,getVelocity:c}=S();let d=!1;const h=(0,g.iH)(!1),f=(0,g.iH)(0),p=(0,g.iH)(0);let v;function m(e,t){return("left"===s.value?e:"right"===s.value?document.documentElement.clientWidth-e:"bottom"===s.value?document.documentElement.clientHeight-e:T())-(t?i.value:0)}function y(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n="left"===s.value?(e-p.value)/i.value:"right"===s.value?(document.documentElement.clientWidth-e-p.value)/i.value:"bottom"===s.value?(document.documentElement.clientHeight-e-p.value)/i.value:T();return t?Math.max(0,Math.min(1,n)):n}function b(e){if(o.value)return;const r=e.changedTouches[0].clientX,c=e.changedTouches[0].clientY,h=25,g="left"===s.value?r<h:"right"===s.value?r>document.documentElement.clientWidth-h:"bottom"===s.value?c>document.documentElement.clientHeight-h:T(),b=t.value&&("left"===s.value?r<i.value:"right"===s.value?r>document.documentElement.clientWidth-i.value:"bottom"===s.value?c>document.documentElement.clientHeight-i.value:T());(g||b||t.value&&n.value)&&(d=!0,v=[r,c],p.value=m(a.value?r:c,t.value),f.value=y(a.value?r:c),u(e),l(e))}function w(e){const t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY;if(d){if(!e.cancelable)return void(d=!1);const r=Math.abs(t-v[0]),i=Math.abs(n-v[1]),o=a.value?r>i&&r>3:i>r&&i>3;o?(h.value=!0,d=!1):(a.value?i:r)>3&&(d=!1)}if(!h.value)return;e.preventDefault(),l(e);const r=y(a.value?t:n,!1);f.value=Math.max(0,Math.min(1,r)),r>1?p.value=m(a.value?t:n,!0):r<0&&(p.value=m(a.value?t:n,!1))}function _(e){if(d=!1,!h.value)return;l(e),h.value=!1;const n=c(e.changedTouches[0].identifier),r=Math.abs(n.x),i=Math.abs(n.y),o=a.value?r>i&&r>400:i>r&&i>3;t.value=o?n.direction===({left:"right",right:"left",bottom:"up"}[s.value]||T()):f.value>.5}const I=(0,r.Fl)((()=>h.value?{transform:"left"===s.value?`translateX(calc(-100% + ${f.value*i.value}px))`:"right"===s.value?`translateX(calc(100% - ${f.value*i.value}px))`:"bottom"===s.value?`translateY(calc(100% - ${f.value*i.value}px))`:T(),transition:"none"}:void 0));return{isDragging:h,dragProgress:f,dragStyles:I}}function T(){throw new Error}var x=n(9242),A=n(320),O=n(2879),R=n(9888);const N=["start","end","left","right","bottom"],D=(0,A.aZ)({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>N.includes(e)},sticky:Boolean,...(0,i.m)(),...(0,o.c)(),...(0,s.o8)(),...(0,a.I)(),...(0,l.Q)({tag:"nav"}),...(0,u.x$)()},emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,t){let{attrs:n,emit:l,slots:w}=t;const{isRtl:_}=(0,v.Vw)(),{themeClasses:I}=(0,u.ER)(e),{borderClasses:E}=(0,i.P)(e),{backgroundColorClasses:S,backgroundColorStyles:k}=(0,d.Y5)((0,g.Vh)(e,"color")),{elevationClasses:T}=(0,o.Y)(e),{mobile:A}=(0,h.AW)(),{roundedClasses:N}=(0,a.b)(e),D=(0,p.tv)(),F=(0,f.z)(e,"modelValue",null,(e=>!!e)),{ssrBootStyles:L}=(0,m.u)(),P=(0,g.iH)(),V=(0,g.iH)(!1),M=(0,r.Fl)((()=>e.rail&&e.expandOnHover&&V.value?Number(e.width):Number(e.rail?e.railWidth:e.width))),U=(0,r.Fl)((()=>(0,O.Wc)(e.location,_.value))),B=(0,r.Fl)((()=>!e.permanent&&(A.value||e.temporary))),$=(0,r.Fl)((()=>e.sticky&&!B.value&&"bottom"!==U.value));e.expandOnHover&&null!=e.rail&&(0,r.YP)(V,(e=>l("update:rail",!e))),e.disableResizeWatcher||(0,r.YP)(B,(t=>!e.permanent&&(0,r.Y3)((()=>F.value=!t)))),!e.disableRouteWatcher&&D&&(0,r.YP)(D.currentRoute,(()=>B.value&&(F.value=!1))),(0,r.YP)((()=>e.permanent),(e=>{e&&(F.value=!0)})),(0,r.wF)((()=>{null!=e.modelValue||B.value||(F.value=e.permanent||!A.value)}));const{isDragging:j,dragProgress:W,dragStyles:q}=C({isActive:F,isTemporary:B,width:M,touchless:(0,g.Vh)(e,"touchless"),position:U}),H=(0,r.Fl)((()=>{const t=B.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):M.value;return j.value?t*W.value:t})),{layoutItemStyles:z,layoutRect:G,layoutItemScrimStyles:K}=(0,s.eW)({id:e.name,order:(0,r.Fl)((()=>parseInt(e.order,10))),position:U,layoutSize:H,elementSize:M,active:(0,r.Fl)((()=>F.value||j.value)),disableTransitions:(0,r.Fl)((()=>j.value)),absolute:(0,r.Fl)((()=>e.absolute||$.value&&"string"!==typeof Y.value))}),{isStuck:Y,stickyStyles:J}=b({rootEl:P,isSticky:$,layoutItemStyles:z}),Q=(0,d.Y5)((0,r.Fl)((()=>"string"===typeof e.scrim?e.scrim:null))),X=(0,r.Fl)((()=>({...j.value?{opacity:.2*W.value,transition:"none"}:void 0,...G.value?{left:(0,y.kb)(G.value.left),right:(0,y.kb)(G.value.right),top:(0,y.kb)(G.value.top),bottom:(0,y.kb)(G.value.bottom)}:void 0,...K.value})));return(0,c.AF)({VList:{bgColor:"transparent"}}),(0,R.L)((()=>{var t,i,o,s;const a=w.image||e.image;return(0,r.Wm)(r.HY,null,[(0,r.Wm)(e.tag,(0,r.dG)({ref:P,onMouseenter:()=>V.value=!0,onMouseleave:()=>V.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${U.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":V.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":B.value,"v-navigation-drawer--active":F.value,"v-navigation-drawer--sticky":$.value},I.value,S.value,E.value,T.value,N.value],style:[k.value,z.value,q.value,L.value,J.value]},n),{default:()=>[a&&(0,r.Wm)("div",{key:"image",class:"v-navigation-drawer__img"},[w.image?null==(t=w.image)?void 0:t.call(w,{image:e.image}):(0,r.Wm)("img",{src:e.image,alt:""},null)]),w.prepend&&(0,r.Wm)("div",{class:"v-navigation-drawer__prepend"},[null==(i=w.prepend)?void 0:i.call(w)]),(0,r.Wm)("div",{class:"v-navigation-drawer__content"},[null==(o=w.default)?void 0:o.call(w)]),w.append&&(0,r.Wm)("div",{class:"v-navigation-drawer__append"},[null==(s=w.append)?void 0:s.call(w)])]}),(0,r.Wm)(x.uT,{name:"fade-transition"},{default:()=>[B.value&&(j.value||F.value)&&!!e.scrim&&(0,r.Wm)("div",{class:["v-navigation-drawer__scrim",Q.backgroundColorClasses.value],style:[X.value,Q.backgroundColorStyles.value],onClick:()=>F.value=!1},null)]})])})),{isStuck:Y}}})},8551:function(e,t,n){"use strict";n.d(t,{yc:function(){return _e},Fe:function(){return Ie},BU:function(){return we}});var r=n(3396),i=n(9242),o=n(3766),s=n(2385);const a=(0,o.U)({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function l(e,t){const n={},r=r=>()=>{if(!s.BR)return Promise.resolve(!0);const i="openDelay"===r;return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise((o=>{const s=parseInt(e[r]??0,10);n[r]=window.setTimeout((()=>{null==t||t(i),o(i)}),s)}))};return{runCloseDelay:r("closeDelay"),runOpenDelay:r("openDelay")}}var u=n(4360),c=n(131),d=n(7514),h=n(4870);const f=(0,o.U)({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...a()},"v-overlay-activator");function p(e,t){let{isActive:n,isTop:i}=t;const o=(0,h.iH)();let a=!1,f=!1,p=!0;const m=(0,r.Fl)((()=>e.openOnFocus||null==e.openOnFocus&&e.openOnHover)),g=(0,r.Fl)((()=>e.openOnClick||null==e.openOnClick&&!e.openOnHover&&!m.value)),{runOpenDelay:y,runCloseDelay:b}=l(e,(t=>{t!==(e.openOnHover&&a||m.value&&f)||e.openOnHover&&n.value&&!i.value||(n.value!==t&&(p=!0),n.value=t)})),w={click:e=>{e.stopPropagation(),o.value=e.currentTarget||e.target,n.value=!n.value},mouseenter:e=>{a=!0,o.value=e.currentTarget||e.target,y()},mouseleave:e=>{a=!1,b()},focus:e=>{s.Z1&&!e.target.matches(":focus-visible")||(f=!0,e.stopPropagation(),o.value=e.currentTarget||e.target,y())},blur:e=>{f=!1,e.stopPropagation(),b()}},_=(0,r.Fl)((()=>{const t={};return g.value&&(t.click=w.click),e.openOnHover&&(t.mouseenter=w.mouseenter,t.mouseleave=w.mouseleave),m.value&&(t.focus=w.focus,t.blur=w.blur),t})),I=(0,r.Fl)((()=>{const t={};if(e.openOnHover&&(t.mouseenter=()=>{a=!0,y()},t.mouseleave=()=>{a=!1,b()}),e.closeOnContentClick){const e=(0,r.f3)(u.N,null);t.click=()=>{n.value=!1,null==e||e.closeParents()}}return t})),E=(0,r.Fl)((()=>{const t={};return e.openOnHover&&(t.mouseenter=()=>{p&&(a=!0,p=!1,y())},t.mouseleave=()=>{a=!1,b()}),t}));(0,r.YP)(i,(t=>{!t||(!e.openOnHover||a||m.value&&f)&&(!m.value||f||e.openOnHover&&a)||(n.value=!1)}));const S=(0,h.iH)();(0,r.m0)((()=>{S.value&&(0,r.Y3)((()=>{const e=S.value;o.value=(0,c.rU)(e)?e.$el:e}))}));const k=(0,d.FN)("useActivator");let C;return(0,r.YP)((()=>!!e.activator),(t=>{t&&s.BR?(C=(0,h.B)(),C.run((()=>{v(e,k,{activatorEl:o,activatorEvents:_})}))):C&&C.stop()}),{flush:"post",immediate:!0}),(0,h.EB)((()=>{var e;null==(e=C)||e.stop()})),{activatorEl:o,activatorRef:S,activatorEvents:_,contentEvents:I,scrimEvents:E}}function v(e,t,n){let{activatorEl:i,activatorEvents:o}=n;function s(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps;t&&(Object.entries(o.value).forEach((e=>{let[n,r]=e;t.addEventListener(n,r)})),Object.keys(n).forEach((e=>{null==n[e]?t.removeAttribute(e):t.setAttribute(e,n[e])})))}function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps;t&&(Object.entries(o.value).forEach((e=>{let[n,r]=e;t.removeEventListener(n,r)})),Object.keys(n).forEach((e=>{t.removeAttribute(e)})))}function l(){var n;let r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.activator;if(o)if("parent"===o){var s,a;let e=null==t||null==(s=t.proxy)||null==(a=s.$el)?void 0:a.parentNode;while(e.hasAttribute("data-no-activator"))e=e.parentNode;r=e}else r="string"===typeof o?document.querySelector(o):"$el"in o?o.$el:o;return i.value=(null==(n=r)?void 0:n.nodeType)===Node.ELEMENT_NODE?r:null,i.value}(0,r.YP)((()=>e.activator),((e,t)=>{if(t&&e!==t){const e=l(t);e&&a(e)}e&&(0,r.Y3)((()=>s()))}),{immediate:!0}),(0,r.YP)((()=>e.activatorProps),(()=>{s()})),(0,h.EB)((()=>{a()}))}var m=n(4544),g=n(1136),y=(n(7658),n(3122));function b(e){while(e){if("fixed"===window.getComputedStyle(e).position)return!0;e=e.offsetParent}return!1}var w=n(2879);function _(e){while(e){if(E(e))return e;e=e.parentElement}return document.scrollingElement}function I(e,t){const n=[];if(t&&e&&!t.contains(e))return n;while(e){if(E(e)&&n.push(e),e===t)break;e=e.parentElement}return n}function E(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return"scroll"===t.overflowY||"auto"===t.overflowY&&e.scrollHeight>e.clientHeight}var S=n(6033),k=n(6309);function C(e,t){return{x:e.x+t.x,y:e.y+t.y}}function T(e,t){return{x:e.x-t.x,y:e.y-t.y}}function x(e,t){if("top"===e.side||"bottom"===e.side){const{side:n,align:r}=e,i="left"===r?0:"center"===r?t.width/2:"right"===r?t.width:r,o="top"===n?0:"bottom"===n?t.height:n;return C({x:i,y:o},t)}if("left"===e.side||"right"===e.side){const{side:n,align:r}=e,i="left"===n?0:"right"===n?t.width:n,o="top"===r?0:"center"===r?t.height/2:"bottom"===r?t.height:r;return C({x:i,y:o},t)}return C({x:t.width/2,y:t.height/2},t)}const A={static:N,connected:F},O=(0,o.U)({locationStrategy:{type:[String,Function],default:"static",validator:e=>"function"===typeof e||e in A},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function R(e,t){const n=(0,h.iH)({}),i=(0,h.iH)();let o;function a(e){var t;null==(t=i.value)||t.call(i,e)}return(0,r.m0)((async()=>{var a;null==(a=o)||a.stop(),i.value=void 0,s.BR&&t.isActive.value&&e.locationStrategy&&(o=(0,h.B)(),"connected"!==e.locationStrategy&&await(0,r.Y3)(),o.run((()=>{var r,o;"function"===typeof e.locationStrategy?i.value=null==(r=e.locationStrategy(t,e,n))?void 0:r.updateLocation:i.value=null==(o=A[e.locationStrategy](t,e,n))?void 0:o.updateLocation})))})),s.BR&&window.addEventListener("resize",a,{passive:!0}),(0,h.EB)((()=>{var e;s.BR&&window.removeEventListener("resize",a),i.value=void 0,null==(e=o)||e.stop()})),{contentStyles:n,updateLocation:i}}function N(){}function D(e){const t=(0,y.G)(e);return t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function F(e,t,n){const i=b(e.activatorEl.value);i&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:o,preferredOrigin:s}=(0,c.S3)((()=>{const n=(0,w.wW)(t.location,e.isRtl.value),r="overlap"===t.origin?n:"auto"===t.origin?(0,w.tb)(n):(0,w.wW)(t.origin,e.isRtl.value);return n.side===r.side&&n.align===(0,w.aw)(r).align?{preferredAnchor:(0,w.Oe)(n),preferredOrigin:(0,w.Oe)(r)}:{preferredAnchor:n,preferredOrigin:r}})),[a,l,u,d]=["minWidth","minHeight","maxWidth","maxHeight"].map((e=>(0,r.Fl)((()=>{const n=parseFloat(t[e]);return isNaN(n)?1/0:n})))),f=(0,r.Fl)((()=>{if(Array.isArray(t.offset))return t.offset;if("string"===typeof t.offset){const e=t.offset.split(" ").map(parseFloat);return e.length<2&&e.push(0),e}return"number"===typeof t.offset?[t.offset,0]:[0,0]}));let p=!1;const v=new ResizeObserver((()=>{p&&m()}));function m(){if(p=!1,requestAnimationFrame((()=>{requestAnimationFrame((()=>p=!0))})),!e.activatorEl.value||!e.contentEl.value)return;const t=e.activatorEl.value.getBoundingClientRect(),r=D(e.contentEl.value),i=I(e.contentEl.value),h=12;i.length||(i.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(r.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),r.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const v=i.reduce(((e,t)=>{const n=t.getBoundingClientRect(),r=new k.x({x:t===document.documentElement?0:n.x,y:t===document.documentElement?0:n.y,width:t.clientWidth,height:t.clientHeight});return e?new k.x({x:Math.max(e.left,r.left),y:Math.max(e.top,r.top),width:Math.min(e.right,r.right)-Math.max(e.left,r.left),height:Math.min(e.bottom,r.bottom)-Math.max(e.top,r.top)}):r}),void 0);v.x+=h,v.y+=h,v.width-=2*h,v.height-=2*h;let m={anchor:o.value,origin:s.value};function g(e){const n=new k.x(r),i=x(e.anchor,t),o=x(e.origin,n);let{x:s,y:a}=T(i,o);switch(e.anchor.side){case"top":a-=f.value[0];break;case"bottom":a+=f.value[0];break;case"left":s-=f.value[0];break;case"right":s+=f.value[0];break}switch(e.anchor.align){case"top":a-=f.value[1];break;case"bottom":a+=f.value[1];break;case"left":s-=f.value[1];break;case"right":s+=f.value[1];break}n.x+=s,n.y+=a,n.width=Math.min(n.width,u.value),n.height=Math.min(n.height,d.value);const l=(0,k.p)(n,v);return{overflows:l,x:s,y:a}}let y=0,b=0;const _={x:0,y:0},E={x:!1,y:!1};let C=-1;while(1){if(C++>10){(0,S.N6)("Infinite loop detected in connectedLocationStrategy");break}const{x:e,y:t,overflows:n}=g(m);y+=e,b+=t,r.x+=e,r.y+=t;{const e=(0,w.dd)(m.anchor),t=n.x.before||n.x.after,r=n.y.before||n.y.after;let i=!1;if(["x","y"].forEach((o=>{if("x"===o&&t&&!E.x||"y"===o&&r&&!E.y){const t={anchor:{...m.anchor},origin:{...m.origin}},r="x"===o?"y"===e?w.aw:w.tb:"y"===e?w.tb:w.aw;t.anchor=r(t.anchor),t.origin=r(t.origin);const{overflows:s}=g(t);(s[o].before<=n[o].before&&s[o].after<=n[o].after||s[o].before+s[o].after<(n[o].before+n[o].after)/2)&&(m=t,i=E[o]=!0)}})),i)continue}n.x.before&&(y+=n.x.before,r.x+=n.x.before),n.x.after&&(y-=n.x.after,r.x-=n.x.after),n.y.before&&(b+=n.y.before,r.y+=n.y.before),n.y.after&&(b-=n.y.after,r.y-=n.y.after);{const e=(0,k.p)(r,v);_.x=v.width-e.x.before-e.x.after,_.y=v.height-e.y.before-e.y.after,y+=e.x.before,r.x+=e.x.before,b+=e.y.before,r.y+=e.y.before}break}const A=(0,w.dd)(m.anchor);Object.assign(n.value,{"--v-overlay-anchor-origin":`${m.anchor.side} ${m.anchor.align}`,transformOrigin:`${m.origin.side} ${m.origin.align}`,top:(0,c.kb)(L(b)),left:(0,c.kb)(L(y)),minWidth:(0,c.kb)("y"===A?Math.min(a.value,t.width):a.value),maxWidth:(0,c.kb)(P((0,c.uZ)(_.x,a.value===1/0?0:a.value,u.value))),maxHeight:(0,c.kb)(P((0,c.uZ)(_.y,l.value===1/0?0:l.value,d.value)))})}return(0,r.YP)([e.activatorEl,e.contentEl],((e,t)=>{let[n,r]=e,[i,o]=t;i&&v.unobserve(i),n&&v.observe(n),o&&v.unobserve(o),r&&v.observe(r)}),{immediate:!0}),(0,h.EB)((()=>{v.disconnect()})),(0,r.YP)((()=>[o.value,s.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight]),(()=>m()),{immediate:!i}),i&&(0,r.Y3)((()=>m())),requestAnimationFrame((()=>{n.value.maxHeight&&m()})),{updateLocation:m}}function L(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function P(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let V=!0;const M=[];function U(e){!V||M.length?(M.push(e),$()):(V=!1,e(),$())}let B=-1;function $(){cancelAnimationFrame(B),B=requestAnimationFrame((()=>{const e=M.shift();e&&e(),M.length?$():V=!0}))}const j={none:null,close:H,block:z,reposition:G},W=(0,o.U)({scrollStrategy:{type:[String,Function],default:"block",validator:e=>"function"===typeof e||e in j}},"v-overlay-scroll-strategies");function q(e,t){if(!s.BR)return;let n;(0,r.m0)((async()=>{var i;null==(i=n)||i.stop(),t.isActive.value&&e.scrollStrategy&&(n=(0,h.B)(),await(0,r.Y3)(),n.run((()=>{var n;"function"===typeof e.scrollStrategy?e.scrollStrategy(t,e):null==(n=j[e.scrollStrategy])||n.call(j,t,e)})))})),(0,h.EB)((()=>{var e;null==(e=n)||e.stop()}))}function H(e){function t(t){e.isActive.value=!1}K(e.activatorEl.value??e.contentEl.value,t)}function z(e,t){var n;const r=null==(n=e.root.value)?void 0:n.offsetParent,i=[...new Set([...I(e.activatorEl.value,t.contained?r:void 0),...I(e.contentEl.value,t.contained?r:void 0)])].filter((e=>!e.classList.contains("v-overlay-scroll-blocked"))),o=window.innerWidth-document.documentElement.offsetWidth,s=(e=>E(e)&&e)(r||document.documentElement);s&&e.root.value.classList.add("v-overlay--scroll-blocked"),i.forEach(((e,t)=>{e.style.setProperty("--v-body-scroll-x",(0,c.kb)(-e.scrollLeft)),e.style.setProperty("--v-body-scroll-y",(0,c.kb)(-e.scrollTop)),e.style.setProperty("--v-scrollbar-offset",(0,c.kb)(o)),e.classList.add("v-overlay-scroll-blocked")})),(0,h.EB)((()=>{i.forEach(((e,t)=>{const n=parseFloat(e.style.getPropertyValue("--v-body-scroll-x")),r=parseFloat(e.style.getPropertyValue("--v-body-scroll-y"));e.style.removeProperty("--v-body-scroll-x"),e.style.removeProperty("--v-body-scroll-y"),e.style.removeProperty("--v-scrollbar-offset"),e.classList.remove("v-overlay-scroll-blocked"),e.scrollLeft=-n,e.scrollTop=-r})),s&&e.root.value.classList.remove("v-overlay--scroll-blocked")}))}function G(e){let t=!1,n=-1;function r(n){U((()=>{var r,i;const o=performance.now();null==(r=(i=e.updateLocation).value)||r.call(i,n);const s=performance.now()-o;t=s/(1e3/60)>2}))}K(e.activatorEl.value??e.contentEl.value,(e=>{t?(cancelAnimationFrame(n),n=requestAnimationFrame((()=>{n=requestAnimationFrame((()=>{r(e)}))}))):r(e)}))}function K(e,t){const n=[document,...I(e)];n.forEach((e=>{e.addEventListener("scroll",t,{passive:!0})})),(0,h.EB)((()=>{n.forEach((e=>{e.removeEventListener("scroll",t)}))}))}var Y=n(7041),J=n(4906),Q=n(6183),X=n(2370),Z=n(8717),ee=n(8157);function te(){if(!s.BR)return(0,h.iH)(!1);const{ssr:e}=(0,ee.AW)();if(e){const e=(0,h.iH)(!1);return(0,r.bv)((()=>{e.value=!0})),e}return(0,h.iH)(!0)}var ne=n(1629),re=n(5975),ie=n(4770);const oe=Symbol.for("vuetify:stack"),se=(0,h.qj)([]);function ae(e,t,n){const i=(0,d.FN)("useStack"),o=!n,s=(0,r.f3)(oe,void 0),a=(0,h.qj)({activeChildren:new Set});(0,r.JJ)(oe,a);const l=(0,h.iH)(+t.value);(0,ie.U)(e,(()=>{var e;const n=null==(e=se.at(-1))?void 0:e[1];l.value=n?n+10:+t.value,o&&se.push([i.uid,l.value]),null==s||s.activeChildren.add(i.uid),(0,h.EB)((()=>{if(o){const e=se.findIndex((e=>e[0]===i.uid));se.splice(e,1)}null==s||s.activeChildren.delete(i.uid)}))}));const u=(0,h.iH)(!0);o&&(0,r.m0)((()=>{var e;const t=(null==(e=se.at(-1))?void 0:e[0])===i.uid;setTimeout((()=>u.value=t))}));const c=(0,r.Fl)((()=>!a.activeChildren.size));return{globalTop:(0,h.OT)(u),localTop:c,stackStyles:(0,r.Fl)((()=>({zIndex:l.value})))}}function le(e){const t=(0,r.Fl)((()=>{const t=e.value;if(!0===t||!s.BR)return;const n=!1===t?document.body:"string"===typeof t?document.querySelector(t):t;if(null==n)return void(0,r.ZK)(`Unable to locate target ${t}`);let i=n.querySelector(".v-overlay-container");return i||(i=document.createElement("div"),i.className="v-overlay-container",n.appendChild(i)),i}));return{teleportTarget:t}}function ue(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function ce(){return!0}function de(e,t,n){if(!e||!1===he(e,n))return!1;const r=ue(t);if("undefined"!==typeof ShadowRoot&&r instanceof ShadowRoot&&r.host===e.target)return!1;const i=("object"===typeof n.value&&n.value.include||(()=>[]))();return i.push(t),!i.some((t=>null==t?void 0:t.contains(e.target)))}function he(e,t){const n="object"===typeof t.value&&t.value.closeConditional||ce;return n(e)}function fe(e,t,n){const r="function"===typeof n.value?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&de(e,t,n)&&setTimeout((()=>{he(e,n)&&r&&r(e)}),0)}function pe(e,t){const n=ue(e);t(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&t(n)}const ve={mounted(e,t){const n=n=>fe(n,e,t),r=n=>{e._clickOutside.lastMousedownWasOutside=de(n,e,t)};pe(e,(e=>{e.addEventListener("click",n,!0),e.addEventListener("mousedown",r,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:r}},unmounted(e,t){e._clickOutside&&(pe(e,(n=>{var r;if(!n||null==(r=e._clickOutside)||!r[t.instance.$.uid])return;const{onClick:i,onMousedown:o}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",i,!0),n.removeEventListener("mousedown",o,!0)})),delete e._clickOutside[t.instance.$.uid])}};var me=n(320),ge=n(8587),ye=n(9888);function be(e){const{modelValue:t,color:n,...o}=e;return(0,r.Wm)(i.uT,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&(0,r.Wm)("div",(0,r.dG)({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const we=(0,o.U)({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...f(),...(0,m.x)(),...(0,g.H)(),...O(),...W(),...(0,Y.x$)(),...(0,J.X)()},"v-overlay"),_e=(0,me.ev)()({name:"VOverlay",directives:{ClickOutside:ve},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...we()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const l=(0,Z.z)(e,"modelValue"),u=(0,r.Fl)({get:()=>l.value,set:t=>{t&&e.disabled||(l.value=t)}}),{teleportTarget:d}=le((0,r.Fl)((()=>e.attach||e.contained))),{themeClasses:f}=(0,Y.ER)(e),{rtlClasses:v,isRtl:b}=(0,ne.Vw)(),{hasContent:w,onAfterLeave:I}=(0,g.l)(e,u),E=(0,X.Y5)((0,r.Fl)((()=>"string"===typeof e.scrim?e.scrim:null))),{globalTop:S,localTop:k,stackStyles:C}=ae(u,(0,h.Vh)(e,"zIndex"),e._disableGlobalStack),{activatorEl:T,activatorRef:x,activatorEvents:A,contentEvents:O,scrimEvents:N}=p(e,{isActive:u,isTop:k}),{dimensionStyles:D}=(0,m.$)(e),F=te(),{scopeId:L}=(0,re.a)();(0,r.YP)((()=>e.disabled),(e=>{e&&(u.value=!1)}));const P=(0,h.iH)(),V=(0,h.iH)(),{contentStyles:M,updateLocation:U}=R(e,{isRtl:b,contentEl:V,activatorEl:T,isActive:u});function B(t){a("click:outside",t),e.persistent?z():u.value=!1}function $(){return u.value&&S.value}function j(t){"Escape"===t.key&&S.value&&(e.persistent?z():u.value=!1)}q(e,{root:P,contentEl:V,activatorEl:T,isActive:u,updateLocation:U}),s.BR&&(0,r.YP)(u,(e=>{e?window.addEventListener("keydown",j):window.removeEventListener("keydown",j)}),{immediate:!0});const W=(0,Q.tv)();(0,ie.U)((()=>e.closeOnBack),(()=>{(0,Q.Kx)(W,(t=>{S.value&&u.value?(t(!1),e.persistent?z():u.value=!1):t()}))}));const H=(0,h.iH)();function z(){e.noClickAnimation||V.value&&(0,y.j)(V.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ge.Ly})}return(0,r.YP)((()=>u.value&&(e.absolute||e.contained)&&null==d.value),(e=>{if(e){const e=_(P.value);e&&e!==document.scrollingElement&&(H.value=e.scrollTop)}})),(0,ye.L)((()=>{var t,s;return(0,r.Wm)(r.HY,null,[null==(t=n.activator)?void 0:t.call(n,{isActive:u.value,props:(0,r.dG)({ref:x},(0,r.mx)(A.value),e.activatorProps)}),F.value&&(0,r.Wm)(r.lR,{disabled:!d.value,to:d.value},{default:()=>[w.value&&(0,r.Wm)("div",(0,r.dG)({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":u.value,"v-overlay--contained":e.contained},f.value,v.value],style:[C.value,{top:(0,c.kb)(H.value)}],ref:P},L,o),[(0,r.Wm)(be,(0,r.dG)({color:E,modelValue:u.value&&!!e.scrim},(0,r.mx)(N.value)),null),(0,r.Wm)(J.J,{appear:!0,persisted:!0,transition:e.transition,target:T.value,onAfterLeave:()=>{I(),a("afterLeave")}},{default:()=>[(0,r.wy)((0,r.Wm)("div",(0,r.dG)({ref:V,class:["v-overlay__content",e.contentClass],style:[D.value,M.value]},(0,r.mx)(O.value),e.contentProps),[null==(s=n.default)?void 0:s.call(n,{isActive:u})]),[[i.F8,u.value],[(0,r.Q2)("click-outside"),{handler:B,closeConditional:$,include:()=>[T.value]}]])]})])]})])})),{activatorEl:T,animateClick:z,contentEl:V,globalTop:S,localTop:k,updateLocation:U}}});function Ie(e){return(0,c.ei)(e,Object.keys(_e.props))}},4286:function(e,t,n){"use strict";n.d(t,{C:function(){return v}});var r=n(3396),i=n(2718),o=n(4544),s=n(2465),a=n(5180),l=n(489),u=n(4231),c=n(1138),d=n(7041),h=n(2370),f=n(320),p=n(4870);const v=(0,f.aZ)({name:"VSheet",props:{color:String,...(0,i.m)(),...(0,o.x)(),...(0,s.c)(),...(0,a.y)(),...(0,l.F)(),...(0,u.I)(),...(0,c.Q)(),...(0,d.x$)()},setup(e,t){let{slots:n}=t;const{themeClasses:c}=(0,d.ER)(e),{backgroundColorClasses:f,backgroundColorStyles:v}=(0,h.Y5)((0,p.Vh)(e,"color")),{borderClasses:m}=(0,i.P)(e),{dimensionStyles:g}=(0,o.$)(e),{elevationClasses:y}=(0,s.Y)(e),{locationStyles:b}=(0,a.T)(e),{positionClasses:w}=(0,l.K)(e),{roundedClasses:_}=(0,u.b)(e);return()=>(0,r.Wm)(e.tag,{class:["v-sheet",c.value,f.value,m.value,y.value,w.value,_.value],style:[v.value,g.value,b.value]},n)}})},4413:function(e,t,n){"use strict";n.d(t,{Y:function(){return c}});var r=n(3396),i=n(9694),o=n(1138),s=n(7041),a=n(320),l=n(9888),u=n(131);const c=(0,a.aZ)({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...(0,i.f)(),...(0,o.Q)(),...(0,s.x$)()},setup(e,t){let{slots:n}=t;const{themeClasses:o}=(0,s.ER)(e),{densityClasses:a}=(0,i.t)(e);return(0,l.L)((()=>{var t,i,s;return(0,r.Wm)(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!n.top,"v-table--has-bottom":!!n.bottom,"v-table--hover":e.hover},o.value,a.value]},{default:()=>[null==(t=n.top)?void 0:t.call(n),n.default?(0,r.Wm)("div",{class:"v-table__wrapper",style:{height:(0,u.kb)(e.height)}},[(0,r.Wm)("table",null,[n.default()])]):null==(i=n.wrapper)?void 0:i.call(n),null==(s=n.bottom)?void 0:s.call(n)]})})),{}}})},165:function(e,t,n){"use strict";n.d(t,{a:function(){return b},hw:function(){return y},wG:function(){return g}});var r=n(3396),i=(n(348),n(7173)),o=n(8302),s=n(2816),a=n(7052),l=n(3185),u=n(8969),c=n(8717),d=n(4870),h=n(3766),f=n(320),p=n(131),v=n(9888);const m=["color","file","time","date","datetime-local","week","month"],g=(0,h.U)({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...(0,o.co)(),...(0,i.hy)()},"v-text-field"),y=(0,f.ev)()({name:"VTextField",directives:{Intersect:a.Z},inheritAttrs:!1,props:g(),emits:{"click:control":e=>!0,"click:input":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:a,slots:h}=t;const f=(0,c.z)(e,"modelValue"),{isFocused:g,focus:y,blur:b}=(0,u.K)(e),w=(0,r.Fl)((()=>"function"===typeof e.counterValue?e.counterValue(f.value):(f.value??"").toString().length)),_=(0,r.Fl)((()=>n.maxlength?n.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter));function I(t,n){var r,i;e.autofocus&&t&&(null==(r=n[0].target)||null==(i=r.focus)||i.call(r))}const E=(0,d.iH)(),S=(0,d.iH)(),k=(0,d.iH)(),C=(0,r.Fl)((()=>m.includes(e.type)||e.persistentPlaceholder||g.value)),T=(0,r.Fl)((()=>e.messages.length?e.messages:g.value||e.persistentHint?e.hint:""));function x(){var e;k.value!==document.activeElement&&(null==(e=k.value)||e.focus());g.value||y()}function A(e){x(),a("click:control",e)}function O(t){t.stopPropagation(),x(),(0,r.Y3)((()=>{f.value=null,(0,p.dr)(e["onClick:clear"],t)}))}function R(e){f.value=e.target.value}return(0,v.L)((()=>{const t=!!(h.counter||e.counter||e.counterValue),l=!(!t&&!h.details),[u,c]=(0,p.An)(n),[{modelValue:d,...v}]=(0,o.PE)(e),[m]=(0,i.g8)(e);return(0,r.Wm)(o.q8,(0,r.dG)({ref:E,modelValue:f.value,"onUpdate:modelValue":e=>f.value=e,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},u,v,{focused:g.value,messages:T.value}),{...h,default:t=>{let{id:n,isDisabled:o,isDirty:s,isReadonly:l,isValid:u}=t;return(0,r.Wm)(i.hF,(0,r.dG)({ref:S,onMousedown:e=>{e.target!==k.value&&e.preventDefault()},"onClick:control":A,"onClick:clear":O,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},m,{id:n.value,active:C.value||s.value,dirty:s.value||e.dirty,focused:g.value,error:!1===u.value}),{...h,default:t=>{let{props:{class:n,...i}}=t;const s=(0,r.wy)((0,r.Wm)("input",(0,r.dG)({ref:k,value:f.value,onInput:R,autofocus:e.autofocus,readonly:l.value,disabled:o.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:x,onBlur:b},i,c),null),[[(0,r.Q2)("intersect"),{handler:I},null,{once:!0}]]);return(0,r.Wm)(r.HY,null,[e.prefix&&(0,r.Wm)("span",{class:"v-text-field__prefix"},[e.prefix]),h.default?(0,r.Wm)("div",{class:n,onClick:e=>a("click:input",e),"data-no-activator":""},[h.default(),s]):(0,r.Ho)(s,{class:n}),e.suffix&&(0,r.Wm)("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:l?n=>{var i;return(0,r.Wm)(r.HY,null,[null==(i=h.details)?void 0:i.call(h,n),t&&(0,r.Wm)(r.HY,null,[(0,r.Wm)("span",null,null),(0,r.Wm)(s._,{active:e.persistentCounter||g.value,value:w.value,max:_.value},h.counter)])])}:void 0})})),(0,l.F)({},E,S,k)}});function b(e){return(0,p.ei)(e,Object.keys(y.props))}},4842:function(e,t,n){"use strict";n.d(t,{z:function(){return m}});var r=n(3396),i=n(9242),o=(n(348),n(7173)),s=n(8302),a=n(2816),l=n(7052),u=n(3185),c=n(8969),d=n(8717),h=n(4870),f=n(320),p=n(131),v=n(9888);const m=(0,f.aZ)({name:"VTextarea",directives:{Intersect:l.Z},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...(0,s.co)(),...(0,o.hy)()},emits:{"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:l,slots:f}=t;const m=(0,d.z)(e,"modelValue"),{isFocused:g,focus:y,blur:b}=(0,c.K)(e),w=(0,r.Fl)((()=>"function"===typeof e.counterValue?e.counterValue(m.value):(m.value||"").toString().length)),_=(0,r.Fl)((()=>n.maxlength?n.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter));function I(t,n){var r,i;e.autofocus&&t&&(null==(r=n[0].target)||null==(i=r.focus)||i.call(r))}const E=(0,h.iH)(),S=(0,h.iH)(),k=(0,h.iH)(""),C=(0,h.iH)(),T=(0,r.Fl)((()=>g.value||e.persistentPlaceholder)),x=(0,r.Fl)((()=>e.messages.length?e.messages:T.value||e.persistentHint?e.hint:""));function A(){var e;C.value!==document.activeElement&&(null==(e=C.value)||e.focus());g.value||y()}function O(e){A(),l("click:control",e)}function R(t){t.stopPropagation(),A(),(0,r.Y3)((()=>{m.value="",(0,p.dr)(e["onClick:clear"],t)}))}function N(e){m.value=e.target.value}const D=(0,h.iH)();function F(){e.autoGrow&&(0,r.Y3)((()=>{if(!D.value||!S.value)return;const t=getComputedStyle(D.value),n=getComputedStyle(S.value.$el),r=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),i=D.value.scrollHeight,o=parseFloat(t.lineHeight),s=Math.max(parseFloat(e.rows)*o+r,parseFloat(n.getPropertyValue("--v-input-control-height"))),a=parseFloat(e.maxRows)*o+r||1/0;k.value=(0,p.kb)((0,p.uZ)(i??0,s,a))}))}let L;return(0,r.bv)(F),(0,r.YP)(m,F),(0,r.YP)((()=>e.rows),F),(0,r.YP)((()=>e.maxRows),F),(0,r.YP)((()=>e.density),F),(0,r.YP)(D,(e=>{var t;e?(L=new ResizeObserver(F),L.observe(D.value)):null==(t=L)||t.disconnect()})),(0,r.Jd)((()=>{var e;null==(e=L)||e.disconnect()})),(0,v.L)((()=>{const t=!!(f.counter||e.counter||e.counterValue),l=!(!t&&!f.details),[u,c]=(0,p.An)(n),[{modelValue:d,...h}]=(0,s.PE)(e),[v]=(0,o.g8)(e);return(0,r.Wm)(s.q8,(0,r.dG)({ref:E,modelValue:m.value,"onUpdate:modelValue":e=>m.value=e,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},u,h,{focused:g.value,messages:x.value}),{...f,default:t=>{let{isDisabled:n,isDirty:s,isReadonly:a,isValid:l}=t;return(0,r.Wm)(o.hF,(0,r.dG)({ref:S,style:{"--v-textarea-control-height":k.value},"onClick:control":O,"onClick:clear":R,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},v,{active:T.value||s.value,dirty:s.value||e.dirty,focused:g.value,error:!1===l.value}),{...f,default:t=>{let{props:{class:o,...s}}=t;return(0,r.Wm)(r.HY,null,[e.prefix&&(0,r.Wm)("span",{class:"v-text-field__prefix"},[e.prefix]),(0,r.wy)((0,r.Wm)("textarea",(0,r.dG)({ref:C,class:o,value:m.value,onInput:N,autofocus:e.autofocus,readonly:a.value,disabled:n.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:A,onBlur:b},s,c),null),[[(0,r.Q2)("intersect"),{handler:I},null,{once:!0}]]),e.autoGrow&&(0,r.wy)((0,r.Wm)("textarea",{class:[o,"v-textarea__sizer"],"onUpdate:modelValue":e=>m.value=e,ref:D,readonly:!0,"aria-hidden":"true"},null),[[i.nr,m.value]]),e.suffix&&(0,r.Wm)("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:l?n=>{var i;return(0,r.Wm)(r.HY,null,[null==(i=f.details)?void 0:i.call(f,n),t&&(0,r.Wm)(r.HY,null,[(0,r.Wm)("span",null,null),(0,r.Wm)(a._,{active:e.persistentCounter||g.value,value:w.value,max:_.value},f.counter)])])}:void 0})})),(0,u.F)({},E,S,C)}})},795:function(e,t,n){"use strict";n.d(t,{R:function(){return h}});var r=n(3396),i=n(9694),o=n(1138),s=n(7041),a=n(8434),l=n(4870),u=n(320),c=n(9888),d=n(131);const h=(0,u.aZ)({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>null==e||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...(0,i.f)(),...(0,o.Q)(),...(0,s.x$)()},setup(e,t){let{slots:n}=t;const{themeClasses:o}=(0,s.ER)(e),{densityClasses:u}=(0,i.t)(e);(0,a.AF)({VTimelineDivider:{lineColor:(0,l.Vh)(e,"lineColor")},VTimelineItem:{density:(0,l.Vh)(e,"density"),lineInset:(0,l.Vh)(e,"lineInset")}});const h=(0,r.Fl)((()=>{const t=e.side?e.side:"default"!==e.density?"end":null;return t&&`v-timeline--side-${t}`})),f=(0,r.Fl)((()=>{const t=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return t;case"start":return t[0];case"end":return t[1];default:return null}}));return(0,c.L)((()=>(0,r.Wm)(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,f.value,{"v-timeline--inset-line":!!e.lineInset},o.value,u.value,h.value],style:{"--v-timeline-line-thickness":(0,d.kb)(e.lineThickness)}},n))),{}}})},2773:function(e,t,n){"use strict";n.d(t,{N:function(){return y}});var r=n(3396),i=n(3289),o=n(4960),s=n(2465),a=n(4231),l=n(9374),u=n(8434),c=n(2370),d=n(320),h=n(9888),f=n(4870);const p=(0,d.aZ)({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:o.lE,iconColor:String,lineColor:String,...(0,a.I)(),...(0,l.Z)(),...(0,s.c)()},setup(e,t){let{slots:n}=t;const{sizeClasses:o,sizeStyles:d}=(0,l.t)(e,"v-timeline-divider__dot"),{backgroundColorStyles:p,backgroundColorClasses:v}=(0,c.Y5)((0,f.Vh)(e,"dotColor")),{roundedClasses:m}=(0,a.b)(e,"v-timeline-divider__dot"),{elevationClasses:g}=(0,s.Y)(e),{backgroundColorClasses:y,backgroundColorStyles:b}=(0,c.Y5)((0,f.Vh)(e,"lineColor"));return(0,u.AF)({VIcon:{color:(0,f.Vh)(e,"iconColor"),icon:(0,f.Vh)(e,"icon"),size:(0,f.Vh)(e,"size")}}),(0,h.L)((()=>{var t;return(0,r.Wm)("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot}]},[(0,r.Wm)("div",{class:["v-timeline-divider__before",y.value],style:b.value},null),!e.hideDot&&(0,r.Wm)("div",{key:"dot",class:["v-timeline-divider__dot",g.value,m.value,o.value],style:d.value},[(0,r.Wm)("div",{class:["v-timeline-divider__inner-dot",v.value,m.value],style:p.value},[(null==(t=n.default)?void 0:t.call(n))??(e.icon?(0,r.Wm)(i.t,null,null):void 0)])]),(0,r.Wm)("div",{class:["v-timeline-divider__after",y.value],style:b.value},null)])})),{}}});var v=n(1138),m=n(131),g=n(4544);const y=(0,d.aZ)({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:o.lE,iconColor:String,lineInset:[Number,String],...(0,a.I)(),...(0,s.c)(),...(0,l.Z)(),...(0,v.Q)(),...(0,g.x)()},setup(e,t){let{slots:n}=t;const{dimensionStyles:i}=(0,g.$)(e),o=(0,f.iH)(0),s=(0,f.iH)();return(0,r.YP)(s,(e=>{var t;e&&(o.value=(null==(t=e.$el.querySelector(".v-timeline-divider__dot"))?void 0:t.getBoundingClientRect().width)??0)}),{flush:"post"}),(0,h.L)((()=>{var t,a;return(0,r.Wm)("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot}],style:{"--v-timeline-dot-size":(0,m.kb)(o.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${(0,m.kb)(e.lineInset)})`:(0,m.kb)(0)}},[(0,r.Wm)("div",{class:"v-timeline-item__body",style:i.value},[null==(t=n.default)?void 0:t.call(n)]),(0,r.Wm)(p,{ref:s,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:n.icon}),"compact"!==e.density&&(0,r.Wm)("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&(null==(a=n.opposite)?void 0:a.call(n))])])})),{}}})},678:function(e,t,n){"use strict";n.d(t,{N:function(){return f}});var r=n(3396),i=n(8551),o=n(8717),s=n(5975),a=n(3185),l=n(4870),u=n(320),c=n(131),d=n(7514),h=n(9888);const f=(0,u.ev)()({name:"VTooltip",props:{id:String,text:String,...(0,c.CE)((0,i.BU)({closeOnBack:!1,location:"end",locationStrategy:"connected",minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent","eager"])},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const u=(0,o.z)(e,"modelValue"),{scopeId:c}=(0,s.a)(),f=(0,d.sq)(),p=(0,r.Fl)((()=>e.id||`v-tooltip-${f}`)),v=(0,l.iH)(),m=(0,r.Fl)((()=>e.location.split(" ").length>1?e.location:e.location+" center")),g=(0,r.Fl)((()=>"auto"===e.origin||"overlap"===e.origin||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center")),y=(0,r.Fl)((()=>e.transition?e.transition:u.value?"scale-transition":"fade-transition"));return(0,h.L)((()=>{const[t]=(0,i.Fe)(e);return(0,r.Wm)(i.yc,(0,r.dG)({ref:v,class:["v-tooltip"],id:p.value},t,{modelValue:u.value,"onUpdate:modelValue":e=>u.value=e,transition:y.value,absolute:!0,location:m.value,origin:g.value,persistent:!0,role:"tooltip",eager:!0,activatorProps:(0,r.dG)({"aria-describedby":p.value},e.activatorProps),_disableGlobalStack:!0},c),{activator:n.activator,default:function(){for(var t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(null==(t=n.default)?void 0:t.call(n,...i))??e.text}})})),(0,a.F)({},v)}})},2583:function(e,t,n){"use strict";n.d(t,{v:function(){return l}});var r=n(3396),i=n(9242),o=n(320),s=n(3122),a=n(8587);const l=(0,o.aZ)({name:"VDialogTransition",props:{target:Object},setup(e,t){let{slots:n}=t;const o={onBeforeEnter(e){e.style.pointerEvents="none",e.style.visibility="hidden"},async onEnter(t,n){var r;await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),t.style.visibility="";const{x:i,y:o,sx:l,sy:d,speed:h}=c(e.target,t),f=(0,s.j)(t,[{transform:`translate(${i}px, ${o}px) scale(${l}, ${d})`,opacity:0},{}],{duration:225*h,easing:a.uX});null==(r=u(t))||r.forEach((e=>{(0,s.j)(e,[{opacity:0},{opacity:0,offset:.33},{}],{duration:450*h,easing:a.Ly})})),f.finished.then((()=>n()))},onAfterEnter(e){e.style.removeProperty("pointer-events")},onBeforeLeave(e){e.style.pointerEvents="none"},async onLeave(t,n){var r;await new Promise((e=>requestAnimationFrame(e)));const{x:i,y:o,sx:l,sy:d,speed:h}=c(e.target,t),f=(0,s.j)(t,[{},{transform:`translate(${i}px, ${o}px) scale(${l}, ${d})`,opacity:0}],{duration:125*h,easing:a.x0});f.finished.then((()=>n())),null==(r=u(t))||r.forEach((e=>{(0,s.j)(e,[{},{opacity:0,offset:.2},{opacity:0}],{duration:250*h,easing:a.Ly})}))},onAfterLeave(e){e.style.removeProperty("pointer-events")}};return()=>e.target?(0,r.Wm)(i.uT,(0,r.dG)({name:"dialog-transition"},o,{css:!1}),n):(0,r.Wm)(i.uT,{name:"dialog-transition"},n)}});function u(e){var t;const n=null==(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))?void 0:t.children;return n&&[...n]}function c(e,t){const n=e.getBoundingClientRect(),r=(0,s.G)(t),[i,o]=getComputedStyle(t).transformOrigin.split(" ").map((e=>parseFloat(e))),[a,l]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=n.left+n.width/2;"left"===a||"left"===l?u-=n.width/2:"right"!==a&&"right"!==l||(u+=n.width/2);let c=n.top+n.height/2;"top"===a||"top"===l?c-=n.height/2:"bottom"!==a&&"bottom"!==l||(c+=n.height/2);const d=n.width/r.width,h=n.height/r.height,f=Math.max(1,d,h),p=d/f||0,v=h/f||0,m=r.width*r.height/(window.innerWidth*window.innerHeight),g=m>.12?Math.min(1.5,10*(m-.12)+1):1;return{x:u-(i+r.left),y:c-(o+r.top),sx:p,sy:v,speed:g}}},8952:function(e,t,n){"use strict";n.d(t,{Fx:function(){return d},Zq:function(){return h},cu:function(){return c}});var r=n(9242),i=n(3396),o=n(320);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return(0,o.aZ)({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:t}},setup(t,n){let{slots:o}=n;return()=>{const n=t.group?r.W3:r.uT;return(0,i.h)(n,{name:e,mode:t.mode,onBeforeEnter(e){e.style.transformOrigin=t.origin},onLeave(e){if(t.leaveAbsolute){const{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${t}px`,e.style.left=`${n}px`,e.style.width=`${r}px`,e.style.height=`${i}px`}t.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(t.leaveAbsolute&&null!=e&&e._transitionInitialStyles){const{position:t,top:n,left:r,width:i,height:o}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=n||"",e.style.left=r||"",e.style.width=i||"",e.style.height=o||""}}},o.default)}}})}function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return(0,o.aZ)({name:e,props:{mode:{type:String,default:n}},setup(n,o){let{slots:s}=o;return()=>(0,i.h)(r.uT,{name:e,...t},s.default)}})}var l=n(2268);function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=t?"width":"height",r=(0,l._A)(`offset-${n}`);return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[n]:e.style[n]}},onEnter(t){const i=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const o=`${t[r]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=i.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[n]=o}))},onAfterEnter:o,onEnterCancelled:o,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[n]:e.style[n]},e.style.overflow="hidden",e.style[n]=`${e[r]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[n]="0"))},onAfterLeave:i,onLeaveCancelled:i};function i(t){e&&t._parent&&t._parent.classList.remove(e),o(t)}function o(e){const t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}}s("fab-transition","center center","out-in"),s("dialog-bottom-transition"),s("dialog-top-transition"),s("fade-transition"),s("scale-transition"),s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition"),s("slide-x-reverse-transition");const c=s("slide-y-transition"),d=(s("slide-y-reverse-transition"),a("expand-transition",u())),h=a("expand-x-transition",u("",!0))},2718:function(e,t,n){"use strict";n.d(t,{P:function(){return l},m:function(){return a}});n(7658);var r=n(3396),i=n(4870),o=n(3766),s=n(7514);const a=(0,o.U)({border:[Boolean,Number,String]},"border");function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.BL)();const n=(0,r.Fl)((()=>{const n=(0,i.dq)(e)?e.value:e.border,r=[];if(!0===n||""===n)r.push(`${t}--border`);else if("string"===typeof n||0===n)for(const e of String(n).split(" "))r.push(`border-${e}`);return r}));return{borderClasses:n}}},2370:function(e,t,n){"use strict";n.d(t,{Y5:function(){return u},rY:function(){return l},rd:function(){return a}});n(7658);var r=n(3396),i=n(4870),o=n(131),s=n(661);function a(e){return(0,o.S3)((()=>{const t=[],n={};return e.value.background&&((0,s.NA)(e.value.background)?n.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&((0,s.NA)(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}}))}function l(e,t){const n=(0,r.Fl)((()=>({text:(0,i.dq)(e)?e.value:t?e[t]:null}))),{colorClasses:o,colorStyles:s}=a(n);return{textColorClasses:o,textColorStyles:s}}function u(e,t){const n=(0,r.Fl)((()=>({background:(0,i.dq)(e)?e.value:t?e[t]:null}))),{colorClasses:o,colorStyles:s}=a(n);return{backgroundColorClasses:o,backgroundColorStyles:s}}},8434:function(e,t,n){"use strict";n.d(t,{AF:function(){return u},qy:function(){return l},tI:function(){return s},yB:function(){return a}});var r=n(4870),i=n(3396),o=n(131);const s=Symbol.for("vuetify:defaults");function a(e){return(0,r.iH)(e??{})}function l(){const e=(0,i.f3)(s);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function u(e,t){const n=l(),a=(0,r.iH)(e),u=(0,i.Fl)((()=>{const e=(0,r.SU)(null==t?void 0:t.scoped),i=(0,r.SU)(null==t?void 0:t.reset),s=(0,r.SU)(null==t?void 0:t.root);let l=(0,o.Ee)(a.value,{prev:n.value});if(e)return l;if(i||s){const e=Number(i||1/0);for(let t=0;t<=e;t++){if(!l.prev)break;l=l.prev}return l}return(0,o.Ee)(l.prev,l)}));return(0,i.JJ)(s,u),u}},9694:function(e,t,n){"use strict";n.d(t,{f:function(){return a},t:function(){return l}});var r=n(3396),i=n(3766),o=n(7514);const s=[null,"default","comfortable","compact"],a=(0,i.U)({density:{type:String,default:"default",validator:e=>s.includes(e)}},"density");function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.BL)();const n=(0,r.Fl)((()=>`${t}--density-${e.density}`));return{densityClasses:n}}},4544:function(e,t,n){"use strict";n.d(t,{$:function(){return a},x:function(){return s}});var r=n(3396),i=n(3766),o=n(131);const s=(0,i.U)({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function a(e){const t=(0,r.Fl)((()=>({height:(0,o.kb)(e.height),maxHeight:(0,o.kb)(e.maxHeight),maxWidth:(0,o.kb)(e.maxWidth),minHeight:(0,o.kb)(e.minHeight),minWidth:(0,o.kb)(e.minWidth),width:(0,o.kb)(e.width)})));return{dimensionStyles:t}}},8157:function(e,t,n){"use strict";n.d(t,{AW:function(){return p},fT:function(){return f},x6:function(){return a}});var r=n(4870),i=n(3396),o=n(131),s=n(2385);const a=Symbol.for("vuetify:display"),l={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return(0,o.Ee)(l,e)};function c(e){return s.BR&&!e?window.innerWidth:0}function d(e){return s.BR&&!e?window.innerHeight:0}function h(){const e=s.BR?window.navigator.userAgent:"ssr";function t(t){return Boolean(e.match(t))}const n=t(/android/i),r=t(/iphone|ipad|ipod/i),i=t(/cordova/i),o=t(/electron/i),a=t(/chrome/i),l=t(/edge/i),u=t(/firefox/i),c=t(/opera/i),d=t(/win/i),h=t(/mac/i),f=t(/linux/i),p=t(/ssr/i);return{android:n,ios:r,cordova:i,electron:o,chrome:a,edge:l,firefox:u,opera:c,win:d,mac:h,linux:f,touch:s.sR,ssr:p}}function f(e,t){const{thresholds:n,mobileBreakpoint:o}=u(e),a=(0,r.iH)(d(t)),l=h(),f=(0,r.qj)({}),p=(0,r.iH)(c(t));function v(){a.value=d(),p.value=c()}return(0,i.m0)((()=>{const e=p.value<n.sm,t=p.value<n.md&&!e,r=p.value<n.lg&&!(t||e),i=p.value<n.xl&&!(r||t||e),s=p.value<n.xxl&&!(i||r||t||e),u=p.value>=n.xxl,c=e?"xs":t?"sm":r?"md":i?"lg":s?"xl":"xxl",d="number"===typeof o?o:n[o],h=l.ssr?l.android||l.ios||l.opera:p.value<d;f.xs=e,f.sm=t,f.md=r,f.lg=i,f.xl=s,f.xxl=u,f.smAndUp=!e,f.mdAndUp=!(e||t),f.lgAndUp=!(e||t||r),f.xlAndUp=!(e||t||r||i),f.smAndDown=!(r||i||s||u),f.mdAndDown=!(i||s||u),f.lgAndDown=!(s||u),f.xlAndDown=!u,f.name=c,f.height=a.value,f.width=p.value,f.mobile=h,f.mobileBreakpoint=o,f.platform=l,f.thresholds=n})),s.BR&&window.addEventListener("resize",v,{passive:!0}),{...(0,r.BK)(f),update:v,ssr:!!t}}function p(){const e=(0,i.f3)(a);if(!e)throw new Error("Could not find Vuetify display injection");return e}},2465:function(e,t,n){"use strict";n.d(t,{Y:function(){return a},c:function(){return s}});n(7658);var r=n(3396),i=n(4870),o=n(3766);const s=(0,o.U)({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function a(e){const t=(0,r.Fl)((()=>{const t=(0,i.dq)(e)?e.value:e.elevation,n=[];return null==t||n.push(`elevation-${t}`),n}));return{elevationClasses:t}}},8969:function(e,t,n){"use strict";n.d(t,{B:function(){return a},K:function(){return l}});var r=n(8717),i=n(3396),o=n(3766),s=n(7514);const a=(0,o.U)({focused:Boolean},"focus");function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.BL)();const n=(0,r.z)(e,"focused"),o=(0,i.Fl)((()=>({[`${t}--focused`]:n.value})));function a(){n.value=!0}function l(){n.value=!1}return{focusClasses:o,isFocused:n,focus:a,blur:l}}},4357:function(e,t,n){"use strict";n.d(t,{Np:function(){return c},cI:function(){return d},vC:function(){return u}});n(7658);var r=n(3396),i=n(4870),o=n(8717),s=n(3766),a=n(6033);const l=Symbol.for("vuetify:form"),u=(0,s.U)({disabled:Boolean,fastFail:Boolean,lazyValidation:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function c(e){const t=(0,o.z)(e,"modelValue"),n=(0,r.Fl)((()=>e.disabled)),s=(0,r.Fl)((()=>e.readonly)),u=(0,i.iH)(!1),c=(0,i.iH)([]),d=(0,i.iH)([]);async function h(){const t=[];let n=!0;d.value=[],u.value=!0;for(const r of c.value){const i=await r.validate();if(i.length>0&&(n=!1,t.push({id:r.id,errorMessages:i})),!n&&e.fastFail)break}return d.value=t,u.value=!1,{valid:n,errors:d.value}}function f(){c.value.forEach((e=>e.reset())),t.value=null}function p(){c.value.forEach((e=>e.resetValidation())),d.value=[],t.value=null}return(0,r.YP)(c,(()=>{let e=0,n=0;const r=[];for(const t of c.value)!1===t.isValid?(n++,r.push({id:t.id,errorMessages:t.errorMessages})):!0===t.isValid&&e++;d.value=r,t.value=!(n>0)&&(e===c.value.length||null)}),{deep:!0}),(0,r.JJ)(l,{register:e=>{let{id:t,validate:n,reset:r,resetValidation:i}=e;c.value.some((e=>e.id===t))&&(0,a.Kd)(`Duplicate input name "${t}"`),c.value.push({id:t,validate:n,reset:r,resetValidation:i,isValid:null,errorMessages:[]})},unregister:e=>{c.value=c.value.filter((t=>t.id!==e))},update:(e,t,n)=>{const r=c.value.find((t=>t.id===e));r&&(r.isValid=t,r.errorMessages=n)},isDisabled:n,isReadonly:s,isValidating:u,items:c,validateOn:(0,i.Vh)(e,"validateOn")}),{errors:d,isDisabled:n,isReadonly:s,isValidating:u,items:c,validate:h,reset:f,resetValidation:p}}function d(){return(0,r.f3)(l,null)}},3185:function(e,t,n){"use strict";n.d(t,{F:function(){return i}});n(7658);const r=Symbol("Forwarded refs");function i(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return e[r]=n,new Proxy(e,{get(e,t){if(Reflect.has(e,t))return Reflect.get(e,t);for(const r of n)if(r.value&&Reflect.has(r.value,t)){const e=Reflect.get(r.value,t);return"function"===typeof e?e.bind(r.value):e}},getOwnPropertyDescriptor(e,t){const i=Reflect.getOwnPropertyDescriptor(e,t);if(i)return i;if("symbol"!==typeof t&&!t.startsWith("__")){for(const e of n){if(!e.value)continue;const n=Reflect.getOwnPropertyDescriptor(e.value,t);if(n)return n;if("_"in e.value&&"setupState"in e.value._){const n=Reflect.getOwnPropertyDescriptor(e.value._.setupState,t);if(n)return n}}for(const e of n){let n=e.value&&Object.getPrototypeOf(e.value);while(n){const e=Reflect.getOwnPropertyDescriptor(n,t);if(e)return e;n=Object.getPrototypeOf(n)}}for(const e of n){const n=e.value&&e.value[r];if(!n)continue;const i=n.slice();while(i.length){const e=i.shift(),n=Reflect.getOwnPropertyDescriptor(e.value,t);if(n)return n;const o=e.value&&e.value[r];o&&i.push(...o)}}}}})}},1970:function(e,t,n){"use strict";n.d(t,{YQ:function(){return d},Yt:function(){return h},_v:function(){return f},k4:function(){return c}});n(7658);var r=n(8717),i=n(3396),o=n(4870),s=n(3766),a=n(7514),l=n(131),u=n(6033);const c=(0,s.U)({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),d=(0,s.U)({value:null,disabled:Boolean,selectedClass:String},"group-item");function h(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=(0,a.FN)("useGroupItem");if(!r)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=(0,a.sq)();(0,i.JJ)(Symbol.for(`${t.description}:id`),s);const l=(0,i.f3)(t,null);if(!l){if(!n)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const u=(0,o.Vh)(e,"value"),c=(0,i.Fl)((()=>l.disabled.value||e.disabled));l.register({id:s,value:u,disabled:c},r),(0,i.Jd)((()=>{l.unregister(s)}));const d=(0,i.Fl)((()=>l.isSelected(s))),h=(0,i.Fl)((()=>d.value&&[l.selectedClass.value,e.selectedClass]));return(0,i.YP)(d,(e=>{r.emit("group:selected",{value:e})})),{id:s,isSelected:d,toggle:()=>l.select(s,!d.value),select:e=>l.select(s,e),selectedClass:h,value:u,disabled:c,group:l}}function f(e,t){let n=!1;const s=(0,o.qj)([]),c=(0,r.z)(e,"modelValue",[],(e=>null==e?[]:v(s,(0,l.FT)(e))),(t=>{const n=m(s,t);return e.multiple?n:n[0]})),d=(0,a.FN)("useGroup");function h(e,n){const r=e,i=Symbol.for(`${t.description}:id`),o=(0,l.bY)(i,null==d?void 0:d.vnode),a=o.indexOf(n);a>-1?s.splice(a,0,r):s.push(r)}function f(e){if(n)return;g();const t=s.findIndex((t=>t.id===e));s.splice(t,1)}function g(){const t=s.find((e=>!e.disabled));t&&"force"===e.mandatory&&!c.value.length&&(c.value=[t.id])}function y(t,n){const r=s.find((e=>e.id===t));if(!n||null==r||!r.disabled)if(e.multiple){const r=c.value.slice(),i=r.findIndex((e=>e===t)),o=~i;if(n=n??!o,o&&e.mandatory&&r.length<=1)return;if(!o&&null!=e.max&&r.length+1>e.max)return;i<0&&n?r.push(t):i>=0&&!n&&r.splice(i,1),c.value=r}else{const r=c.value.includes(t);if(e.mandatory&&r)return;c.value=n??!r?[t]:[]}}function b(t){if(e.multiple&&(0,u.Kd)('This method is not supported when using "multiple" prop'),c.value.length){const e=c.value[0],n=s.findIndex((t=>t.id===e));let r=(n+t)%s.length,i=s[r];while(i.disabled&&r!==n)r=(r+t)%s.length,i=s[r];if(i.disabled)return;c.value=[s[r].id]}else{const e=s.find((e=>!e.disabled));e&&(c.value=[e.id])}}(0,i.bv)((()=>{g()})),(0,i.Jd)((()=>{n=!0}));const w={register:h,unregister:f,selected:c,select:y,disabled:(0,o.Vh)(e,"disabled"),prev:()=>b(s.length-1),next:()=>b(1),isSelected:e=>c.value.includes(e),selectedClass:(0,i.Fl)((()=>e.selectedClass)),items:(0,i.Fl)((()=>s)),getItemIndex:e=>p(s,e)};return(0,i.JJ)(t,w),w}function p(e,t){const n=v(e,[t]);return n.length?e.findIndex((e=>e.id===n[0])):-1}function v(e,t){const n=[];for(let r=0;r<e.length;r++){const i=e[r];null!=i.value?null!=t.find((e=>(0,l.vZ)(e,i.value)))&&n.push(i.id):t.includes(r)&&n.push(i.id)}return n}function m(e,t){const n=[];for(let r=0;r<e.length;r++){const i=e[r];t.includes(i.id)&&n.push(null!=i.value?i.value:r)}return n}},4960:function(e,t,n){"use strict";n.d(t,{YK:function(){return d},lE:function(){return c},$0:function(){return v},_i:function(){return g},bi:function(){return y}});var r=n(3396);const i={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},o={component:e=>(0,r.h)(v,{...e,class:"mdi"})};var s=n(4870),a=n(3766),l=n(320),u=n(131);const c=[String,Function,Object],d=Symbol.for("vuetify:icons"),h=(0,a.U)({icon:{type:c},tag:{type:String,required:!0}},"icon"),f=(0,l.aZ)({name:"VComponentIcon",props:h(),setup(e,t){let{slots:n}=t;return()=>{var t;return(0,r.Wm)(e.tag,null,{default:()=>[e.icon?(0,r.Wm)(e.icon,null,null):null==(t=n.default)?void 0:t.call(n)]})}}}),p=(0,l.aZ)({name:"VSvgIcon",inheritAttrs:!1,props:h(),setup(e,t){let{attrs:n}=t;return()=>(0,r.Wm)(e.tag,(0,r.dG)(n,{style:null}),{default:()=>[(0,r.Wm)("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[(0,r.Wm)("path",{d:e.icon},null)])]})}}),v=((0,l.aZ)({name:"VLigatureIcon",props:h(),setup(e){return()=>(0,r.Wm)(e.tag,null,{default:()=>[e.icon]})}}),(0,l.aZ)({name:"VClassIcon",props:h(),setup(e){return()=>(0,r.Wm)(e.tag,{class:e.icon},null)}})),m={svg:{component:p},class:{component:v}};function g(e){return(0,u.Ee)({defaultSet:"mdi",sets:{...m,mdi:o},aliases:i},e)}const y=e=>{const t=(0,r.f3)(d);if(!t)throw new Error("Missing Vuetify Icons provide!");const n=(0,r.Fl)((()=>{const n=(0,s.dq)(e)?e.value:e.icon;if(!n)return{component:f};let r=n;var i;"string"===typeof r&&(r=r.trim(),r.startsWith("$")&&(r=null==(i=t.aliases)?void 0:i[r.slice(1)]));if(!r)throw new Error(`Could not find aliased icon "${n}"`);if("string"!==typeof r)return{component:f,icon:r};const o=Object.keys(t.sets).find((e=>"string"===typeof r&&r.startsWith(`${e}:`))),a=o?r.slice(o.length+1):r,l=t.sets[o??t.defaultSet];return{component:l.component,icon:a}}));return{iconData:n}}},1477:function(e,t,n){"use strict";n.d(t,{S:function(){return s}});var r=n(4870),i=n(3396),o=n(2385);function s(e){const t=(0,r.iH)(),n=(0,r.iH)(!1);if(o.cu){const r=new IntersectionObserver((t=>{null==e||e(t,r),n.value=!!t.find((e=>e.isIntersecting))}));(0,i.Jd)((()=>{r.disconnect()})),(0,i.YP)(t,((e,t)=>{t&&(r.unobserve(t),n.value=!1),e&&r.observe(e)}),{flush:"post"})}return{intersectionRef:t,isIntersecting:n}}},6185:function(e,t,n){"use strict";n.d(t,{Ce:function(){return u},S1:function(){return s}});n(7658);var r=n(3396),i=n(3766),o=n(131);const s=(0,i.U)({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function a(e,t){const n=(0,o.qF)(t,e.itemTitle,t),r=e.returnObject?t:(0,o.qF)(t,e.itemValue,n),i=(0,o.qF)(t,e.itemChildren),s=!0===e.itemProps?"object"!==typeof t||null==t||Array.isArray(t)?void 0:"children"in t?(0,o.ei)(t,["children"])[1]:t:(0,o.qF)(t,e.itemProps),a={title:n,value:r,...s};return{title:String(a.title??""),value:a.value,props:a,children:Array.isArray(i)?l(e,i):void 0,raw:t}}function l(e,t){const n=[];for(const r of t)n.push(a(e,r));return n}function u(e){const t=(0,r.Fl)((()=>l(e,e.items)));function n(t){return t.map((t=>a(e,t)))}function i(e){return e.map((e=>{let{props:t}=e;return t.value}))}return{items:t,transformIn:n,transformOut:i}}},7396:function(e,t,n){"use strict";n.d(t,{$Y:function(){return p},GB:function(){return h},eW:function(){return v},o8:function(){return f},te:function(){return g}});n(7658);var r=n(3712),i=n(3396),o=n(4870),s=n(3766),a=n(7514),l=n(131);const u=Symbol.for("vuetify:layout"),c=Symbol.for("vuetify:layout-item"),d=1e3,h=(0,s.U)({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),f=(0,s.U)({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function p(){const e=(0,i.f3)(u);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function v(e){const t=(0,i.f3)(u);if(!t)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${(0,a.sq)()}`,r=(0,a.FN)("useLayoutItem");(0,i.JJ)(c,{id:n});const s=(0,o.iH)(!1);(0,i.se)((()=>s.value=!0)),(0,i.dl)((()=>s.value=!1));const{layoutItemStyles:l,layoutItemScrimStyles:d}=t.register(r,{...e,active:(0,i.Fl)((()=>!s.value&&e.active.value)),id:n});return(0,i.Jd)((()=>t.unregister(n))),{layoutItemStyles:l,layoutRect:t.layoutRect,layoutItemScrimStyles:d}}const m=(e,t,n,r)=>{let i={top:0,left:0,right:0,bottom:0};const o=[{id:"",layer:{...i}}];for(const s of e){const e=t.get(s),a=n.get(s),l=r.get(s);if(!e||!a||!l)continue;const u={...i,[e.value]:parseInt(i[e.value],10)+(l.value?parseInt(a.value,10):0)};o.push({id:s,layer:u}),i=u}return o};function g(e){const t=(0,i.f3)(u,null),n=(0,i.Fl)((()=>t?t.rootZIndex.value-100:d)),s=(0,o.iH)([]),h=(0,o.qj)(new Map),f=(0,o.qj)(new Map),p=(0,o.qj)(new Map),v=(0,o.qj)(new Map),g=(0,o.qj)(new Map),{resizeRef:y,contentRect:b}=(0,r.y)(),w=(0,i.Fl)((()=>{const t=new Map,n=e.overlaps??[];for(const e of n.filter((e=>e.includes(":")))){const[n,r]=e.split(":");if(!s.value.includes(n)||!s.value.includes(r))continue;const i=h.get(n),o=h.get(r),a=f.get(n),l=f.get(r);i&&o&&a&&l&&(t.set(r,{position:i.value,amount:parseInt(a.value,10)}),t.set(n,{position:o.value,amount:-parseInt(l.value,10)}))}return t})),_=(0,i.Fl)((()=>{const e=[...new Set([...p.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[];for(const n of e){const e=s.value.filter((e=>{var t;return(null==(t=p.get(e))?void 0:t.value)===n}));t.push(...e)}return m(t,h,f,v)})),I=(0,i.Fl)((()=>!Array.from(g.values()).some((e=>e.value)))),E=(0,i.Fl)((()=>_.value[_.value.length-1].layer)),S=(0,i.Fl)((()=>({"--v-layout-left":(0,l.kb)(E.value.left),"--v-layout-right":(0,l.kb)(E.value.right),"--v-layout-top":(0,l.kb)(E.value.top),"--v-layout-bottom":(0,l.kb)(E.value.bottom),...I.value?void 0:{transition:"none"}}))),k=(0,i.Fl)((()=>_.value.slice(1).map(((e,t)=>{let{id:n}=e;const{layer:r}=_.value[t],i=f.get(n),o=h.get(n);return{id:n,...r,size:Number(i.value),position:o.value}})))),C=e=>k.value.find((t=>t.id===e)),T=(0,a.FN)("createLayout"),x=(0,o.iH)(!1);(0,i.bv)((()=>{x.value=!0})),(0,i.JJ)(u,{register:(e,t)=>{let{id:r,order:o,position:a,layoutSize:u,elementSize:m,active:y,disableTransitions:b,absolute:E}=t;p.set(r,o),h.set(r,a),f.set(r,u),v.set(r,y),b&&g.set(r,b);const S=(0,l.bY)(c,null==T?void 0:T.vnode),C=S.indexOf(e);C>-1?s.value.splice(C,0,r):s.value.push(r);const A=(0,i.Fl)((()=>k.value.findIndex((e=>e.id===r)))),O=(0,i.Fl)((()=>n.value+2*_.value.length-2*A.value)),R=(0,i.Fl)((()=>{const e="left"===a.value||"right"===a.value,t="right"===a.value,i="bottom"===a.value,o={[a.value]:0,zIndex:O.value,transform:`translate${e?"X":"Y"}(${(y.value?0:-110)*(t||i?-1:1)}%)`,position:E.value||n.value!==d?"absolute":"fixed",...I.value?void 0:{transition:"none"}};if(!x.value)return o;const s=k.value[A.value];if(!s)throw new Error(`[Vuetify] Could not find layout item "${r}"`);const l=w.value.get(r);return l&&(s[l.position]+=l.amount),{...o,height:e?`calc(100% - ${s.top}px - ${s.bottom}px)`:m.value?`${m.value}px`:void 0,left:t?void 0:`${s.left}px`,right:t?`${s.right}px`:void 0,top:"bottom"!==a.value?`${s.top}px`:void 0,bottom:"top"!==a.value?`${s.bottom}px`:void 0,width:e?m.value?`${m.value}px`:void 0:`calc(100% - ${s.left}px - ${s.right}px)`}})),N=(0,i.Fl)((()=>({zIndex:O.value-1})));return{layoutItemStyles:R,layoutItemScrimStyles:N,zIndex:O}},unregister:e=>{p.delete(e),h.delete(e),f.delete(e),v.delete(e),g.delete(e),s.value=s.value.filter((t=>t!==e))},mainRect:E,mainStyles:S,getLayoutItem:C,items:k,layoutRect:b,rootZIndex:n});const A=(0,i.Fl)((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),O=(0,i.Fl)((()=>({zIndex:n.value,position:t?"relative":void 0,overflow:t?"hidden":void 0})));return{layoutClasses:A,layoutStyles:O,getLayoutItem:C,items:k,layoutRect:b,layoutRef:y}}},1136:function(e,t,n){"use strict";n.d(t,{H:function(){return s},l:function(){return a}});var r=n(4870),i=n(3396),o=n(3766);const s=(0,o.U)({eager:Boolean},"lazy");function a(e,t){const n=(0,r.iH)(!1),o=(0,i.Fl)((()=>n.value||e.eager||t.value));function s(){e.eager||(n.value=!1)}return(0,i.YP)(t,(()=>n.value=!0)),{isBooted:n,hasContent:o,onAfterLeave:s}}},6791:function(e,t,n){"use strict";n.d(t,{rD:function(){return _},fF:function(){return b},U2:function(){return w}});var r=n(3396),i=n(4231),o=n(1138),s=n(5180),a=n(7041),l=n(2370),u=n(1477),c=n(8717),d=n(1629),h=n(9242),f=n(320),p=n(9888),v=n(131);const m=(0,f.aZ)({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...(0,s.y)({location:"top"}),...(0,i.I)(),...(0,o.Q)(),...(0,a.x$)()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const o=(0,c.z)(e,"modelValue"),{isRtl:f}=(0,d.Vw)(),{themeClasses:m}=(0,a.ER)(e),{locationStyles:g}=(0,s.T)(e),{textColorClasses:y,textColorStyles:b}=(0,l.rY)(e,"color"),{backgroundColorClasses:w,backgroundColorStyles:_}=(0,l.Y5)((0,r.Fl)((()=>e.bgColor||e.color))),{backgroundColorClasses:I,backgroundColorStyles:E}=(0,l.Y5)(e,"color"),{roundedClasses:S}=(0,i.b)(e),{intersectionRef:k,isIntersecting:C}=(0,u.S)(),T=(0,r.Fl)((()=>parseInt(e.max,10))),x=(0,r.Fl)((()=>parseInt(e.height,10))),A=(0,r.Fl)((()=>parseFloat(e.bufferValue)/T.value*100)),O=(0,r.Fl)((()=>parseFloat(o.value)/T.value*100)),R=(0,r.Fl)((()=>f.value!==e.reverse)),N=(0,r.Fl)((()=>e.indeterminate?"fade-transition":"slide-x-transition")),D=(0,r.Fl)((()=>null==e.bgOpacity?e.bgOpacity:parseFloat(e.bgOpacity)));function F(e){if(!k.value)return;const{left:t,right:n,width:r}=k.value.getBoundingClientRect(),i=R.value?r-e.clientX+(n-r):e.clientX-t;o.value=Math.round(i/r*T.value)}return(0,p.L)((()=>(0,r.Wm)(e.tag,{ref:k,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&C.value,"v-progress-linear--reverse":R.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},S.value,m.value],style:{bottom:"bottom"===e.location?0:void 0,top:"top"===e.location?0:void 0,height:e.active?(0,v.kb)(x.value):0,"--v-progress-linear-height":(0,v.kb)(x.value),...g.value},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:O.value,onClick:e.clickable&&F},{default:()=>[e.stream&&(0,r.Wm)("div",{key:"stream",class:["v-progress-linear__stream",y.value],style:{...b.value,[R.value?"left":"right"]:(0,v.kb)(-x.value),borderTop:`${(0,v.kb)(x.value/2)} dotted`,opacity:D.value,top:`calc(50% - ${(0,v.kb)(x.value/4)})`,width:(0,v.kb)(100-A.value,"%"),"--v-progress-linear-stream-to":(0,v.kb)(x.value*(R.value?1:-1))}},null),(0,r.Wm)("div",{class:["v-progress-linear__background",w.value],style:[_.value,{opacity:D.value,width:(0,v.kb)(e.stream?A.value:100,"%")}]},null),(0,r.Wm)(h.uT,{name:N.value},{default:()=>[e.indeterminate?(0,r.Wm)("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map((e=>(0,r.Wm)("div",{key:e,class:["v-progress-linear__indeterminate",e,I.value],style:E.value},null)))]):(0,r.Wm)("div",{class:["v-progress-linear__determinate",I.value],style:[E.value,{width:(0,v.kb)(O.value,"%")}]},null)]}),n.default&&(0,r.Wm)("div",{class:"v-progress-linear__content"},[n.default({value:O.value,buffer:A.value})])]}))),{}}});var g=n(3766),y=n(7514);const b=(0,g.U)({loading:[Boolean,String]},"loader");function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,y.BL)();const n=(0,r.Fl)((()=>({[`${t}--loading`]:e.loading})));return{loaderClasses:n}}function _(e,t){var n;let{slots:i}=t;return(0,r.Wm)("div",{class:`${e.name}__loader`},[(null==(n=i.default)?void 0:n.call(i,{color:e.color,isActive:e.active}))||(0,r.Wm)(m,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}},1629:function(e,t,n){"use strict";n.d(t,{O:function(){return g},$2:function(){return b},bU:function(){return w},Vw:function(){return I}});var r=n(3396),i=n(4870),o=n(131),s=n(6033),a=n(8717),l={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}};const u="$vuetify.",c=(e,t)=>e.replace(/\{(\d+)\}/g,((e,n)=>String(t[+n]))),d=(e,t,n)=>function(r){for(var i=arguments.length,a=new Array(i>1?i-1:0),l=1;l<i;l++)a[l-1]=arguments[l];if(!r.startsWith(u))return c(r,a);const d=r.replace(u,""),h=e.value&&n.value[e.value],f=t.value&&n.value[t.value];let p=(0,o.vO)(h,d,null);return p||((0,s.Kd)(`Translation key "${r}" not found in "${e.value}", trying fallback locale`),p=(0,o.vO)(f,d,null)),p||((0,s.N6)(`Translation key "${r}" not found in fallback`),p=r),"string"!==typeof p&&((0,s.N6)(`Translation key "${r}" has a non-string value`),p=r),c(p,a)};function h(e,t){return(n,r)=>{const i=new Intl.NumberFormat([e.value,t.value],r);return i.format(n)}}function f(e,t,n){const i=(0,a.z)(e,t,e[t]??n.value);return i.value=e[t]??n.value,(0,r.YP)(n,(r=>{null==e[t]&&(i.value=n.value)})),i}function p(e){return t=>{const n=f(t,"locale",e.current),r=f(t,"fallback",e.fallback),i=f(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:r,messages:i,t:d(n,r,i),n:h(n,r),provide:p({current:n,fallback:r,messages:i})}}}function v(e){const t=(0,i.iH)((null==e?void 0:e.locale)??"en"),n=(0,i.iH)((null==e?void 0:e.fallback)??"en"),r=(0,i.iH)({en:l,...null==e?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:r,t:d(t,n,r),n:h(t,n),provide:p({current:t,fallback:n,messages:r})}}const m={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},g=Symbol.for("vuetify:locale");function y(e){return null!=e.name}function b(e){const t=null!=e&&e.adapter&&y(null==e?void 0:e.adapter)?null==e?void 0:e.adapter:v(e),n=_(t,e);return{...t,...n}}function w(){const e=(0,r.f3)(g);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}Symbol.for("vuetify:rtl");function _(e,t){const n=(0,i.iH)((null==t?void 0:t.rtl)??m),o=(0,r.Fl)((()=>n.value[e.current.value]??!1));return{isRtl:o,rtl:n,rtlClasses:(0,r.Fl)((()=>"v-locale--is-"+(o.value?"rtl":"ltr")))}}function I(){const e=(0,r.f3)(g);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}},5180:function(e,t,n){"use strict";n.d(t,{T:function(){return u},y:function(){return l}});var r=n(1629),i=n(3396),o=n(3766),s=n(2879);const a={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},l=(0,o.U)({location:String},"location");function u(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;const{isRtl:o}=(0,r.Vw)(),l=(0,i.Fl)((()=>{if(!e.location)return{};const{side:r,align:i}=(0,s.wW)(e.location.split(" ").length>1?e.location:`${e.location} center`,o.value);function l(e){return n?n(e):0}const u={};return"center"!==r&&(t?u[a[r]]=`calc(100% - ${l(r)}px)`:u[r]=0),"center"!==i?t?u[a[i]]=`calc(100% - ${l(i)}px)`:u[i]=0:("center"===r?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),u}));return{locationStyles:l}}},6479:function(e,t,n){"use strict";n.d(t,{Gp:function(){return y},Ek:function(){return b},_$:function(){return _},Io:function(){return w}});n(541),n(7658);var r=n(8717),i=n(3766),o=n(7514),s=n(4870),a=n(3396);const l={open:e=>{let{id:t,value:n,opened:r,parents:i}=e;if(n){const e=new Set;e.add(t);let n=i.get(t);while(null!=n)e.add(n),n=i.get(n);return e}return r.delete(t),r},select:()=>null},u={open:e=>{let{id:t,value:n,opened:r,parents:i}=e;if(n){let e=i.get(t);r.add(t);while(null!=e&&e!==t)r.add(e),e=i.get(e);return r}return r.delete(t),r},select:()=>null},c={open:u.open,select:e=>{let{id:t,value:n,opened:r,parents:i}=e;if(!n)return r;const o=[];let s=i.get(t);while(null!=s)o.push(s),s=i.get(s);return new Set(o)}},d=e=>{const t={select:t=>{let{id:n,value:r,selected:i}=t;if(e&&!r){const e=Array.from(i.entries()).reduce(((e,t)=>{let[n,r]=t;return"on"===r?[...e,n]:e}),[]);if(1===e.length&&e[0]===n)return i}return i.set(n,r?"on":"off"),i},in:(e,n,r)=>{let i=new Map;for(const o of e||[])i=t.select({id:o,value:!0,selected:new Map(i),children:n,parents:r});return i},out:e=>{const t=[];for(const[n,r]of e.entries())"on"===r&&t.push(n);return t}};return t},h=e=>{const t=d(e),n={select:e=>{let{selected:n,id:r,...i}=e;const o=n.has(r)?new Map([[r,n.get(r)]]):new Map;return t.select({...i,id:r,selected:o})},in:(e,n,r)=>{let i=new Map;return null!=e&&e.length&&(i=t.in(e.slice(0,1),n,r)),i},out:(e,n,r)=>t.out(e,n,r)};return n},f=e=>{const t=d(e),n={select:e=>{let{id:n,selected:r,children:i,...o}=e;return i.has(n)?r:t.select({id:n,selected:r,children:i,...o})},in:t.in,out:t.out};return n},p=e=>{const t=h(e),n={select:e=>{let{id:n,selected:r,children:i,...o}=e;return i.has(n)?r:t.select({id:n,selected:r,children:i,...o})},in:t.in,out:t.out};return n},v=e=>{const t={select:t=>{let{id:n,value:r,selected:i,children:o,parents:s}=t;const a=new Map(i),l=[n];while(l.length){const e=l.shift();i.set(e,r?"on":"off"),o.has(e)&&l.push(...o.get(e))}let u=s.get(n);while(u){const e=o.get(u),t=e.every((e=>"on"===i.get(e))),n=e.every((e=>!i.has(e)||"off"===i.get(e)));i.set(u,t?"on":n?"off":"indeterminate"),u=s.get(u)}if(e&&!r){const e=Array.from(i.entries()).reduce(((e,t)=>{let[n,r]=t;return"on"===r?[...e,n]:e}),[]);if(0===e.length)return a}return i},in:(e,n,r)=>{let i=new Map;for(const o of e||[])i=t.select({id:o,value:!0,selected:new Map(i),children:n,parents:r});return i},out:(e,t)=>{const n=[];for(const[r,i]of e.entries())"on"!==i||t.has(r)||n.push(r);return n}};return t},m=Symbol.for("vuetify:nested"),g={id:(0,s.iH)(),root:{register:()=>null,unregister:()=>null,parents:(0,s.iH)(new Map),children:(0,s.iH)(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:(0,s.iH)(new Set),selected:(0,s.iH)(new Map),selectedValues:(0,s.iH)([])}},y=(0,i.U)({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),b=e=>{let t=!1;const n=(0,s.iH)(new Map),i=(0,s.iH)(new Map),g=(0,r.z)(e,"opened",e.opened,(e=>new Set(e)),(e=>[...e.values()])),y=(0,a.Fl)((()=>{if("object"===typeof e.selectStrategy)return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return p(e.mandatory);case"leaf":return f(e.mandatory);case"independent":return d(e.mandatory);case"single-independent":return h(e.mandatory);case"classic":default:return v(e.mandatory)}})),b=(0,a.Fl)((()=>{if("object"===typeof e.openStrategy)return e.openStrategy;switch(e.openStrategy){case"list":return c;case"single":return l;case"multiple":default:return u}})),w=(0,r.z)(e,"selected",e.selected,(e=>y.value.in(e,n.value,i.value)),(e=>y.value.out(e,n.value,i.value)));function _(e){const t=[];let n=e;while(null!=n)t.unshift(n),n=i.value.get(n);return t}(0,a.Jd)((()=>{t=!0}));const I=(0,o.FN)("nested"),E={id:(0,s.iH)(),root:{opened:g,selected:w,selectedValues:(0,a.Fl)((()=>{const e=[];for(const[t,n]of w.value.entries())"on"===n&&e.push(t);return e})),register:(e,t,r)=>{t&&e!==t&&i.value.set(e,t),r&&n.value.set(e,[]),null!=t&&n.value.set(t,[...n.value.get(t)||[],e])},unregister:e=>{if(t)return;n.value.delete(e);const r=i.value.get(e);if(r){const t=n.value.get(r)??[];n.value.set(r,t.filter((t=>t!==e)))}i.value.delete(e),g.value.delete(e)},open:(e,t,r)=>{I.emit("click:open",{id:e,value:t,path:_(e),event:r});const o=b.value.open({id:e,value:t,opened:new Set(g.value),children:n.value,parents:i.value,event:r});o&&(g.value=o)},openOnSelect:(e,t,r)=>{const o=b.value.select({id:e,value:t,selected:new Map(w.value),opened:new Set(g.value),children:n.value,parents:i.value,event:r});o&&(g.value=o)},select:(e,t,r)=>{I.emit("click:select",{id:e,value:t,path:_(e),event:r});const o=y.value.select({id:e,value:t,selected:new Map(w.value),children:n.value,parents:i.value,event:r});o&&(w.value=o),E.root.openOnSelect(e,t,r)},children:n,parents:i}};return(0,a.JJ)(m,E),E.root},w=(e,t)=>{const n=(0,a.f3)(m,g),r=(0,a.Fl)((()=>e.value??Symbol((0,o.sq)()))),i={...n,id:r,open:(e,t)=>n.root.open(r.value,e,t),openOnSelect:(e,t)=>n.root.openOnSelect(r.value,e,t),isOpen:(0,a.Fl)((()=>n.root.opened.value.has(r.value))),parent:(0,a.Fl)((()=>n.root.parents.value.get(r.value))),select:(e,t)=>n.root.select(r.value,e,t),isSelected:(0,a.Fl)((()=>"on"===n.root.selected.value.get(r.value))),isIndeterminate:(0,a.Fl)((()=>"indeterminate"===n.root.selected.value.get(r.value))),isLeaf:(0,a.Fl)((()=>!n.root.children.value.get(r.value))),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(r.value,n.id.value,t),(0,a.Jd)((()=>{!n.isGroupActivator&&n.root.unregister(r.value)})),t&&(0,a.JJ)(m,i),i},_=()=>{const e=(0,a.f3)(m,g);(0,a.JJ)(m,{...e,isGroupActivator:!0})}},489:function(e,t,n){"use strict";n.d(t,{F:function(){return a},K:function(){return l}});var r=n(3396),i=n(3766),o=n(7514);const s=["static","relative","fixed","absolute","sticky"],a=(0,i.U)({position:{type:String,validator:e=>s.includes(e)}},"position");function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.BL)();const n=(0,r.Fl)((()=>e.position?`${t}--${e.position}`:void 0));return{positionClasses:n}}},8717:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(4870),i=n(3396),o=n(7514),s=n(131),a=n(4770);function l(e,t,n){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>e,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e=>e;const c=(0,o.FN)("useProxiedModel"),d=(0,r.iH)(void 0!==e[t]?e[t]:n),h=(0,s.mA)(t),f=h!==t,p=f?(0,i.Fl)((()=>{var n,r,i,o;return e[t],!(!(null!=(n=c.vnode.props)&&n.hasOwnProperty(t)||null!=(r=c.vnode.props)&&r.hasOwnProperty(h))||!(null!=(i=c.vnode.props)&&i.hasOwnProperty(`onUpdate:${t}`)||null!=(o=c.vnode.props)&&o.hasOwnProperty(`onUpdate:${h}`)))})):(0,i.Fl)((()=>{var n,r;return e[t],!(null==(n=c.vnode.props)||!n.hasOwnProperty(t)||null==(r=c.vnode.props)||!r.hasOwnProperty(`onUpdate:${t}`))}));(0,a.U)((()=>!p.value),(()=>{(0,i.YP)((()=>e[t]),(e=>{d.value=e}))}));const v=(0,i.Fl)({get(){return l(p.value?e[t]:d.value)},set(n){const r=u(n);(p.value?e[t]:d.value)!==r&&l(p.value?e[t]:d.value)!==n&&(d.value=r,null==c||c.emit(`update:${t}`,r))}});return Object.defineProperty(v,"externalValue",{get:()=>p.value?e[t]:d.value}),v}},3712:function(e,t,n){"use strict";n.d(t,{y:function(){return s}});var r=n(4870),i=n(3396),o=n(2385);function s(e){const t=(0,r.iH)(),n=(0,r.iH)();if(o.BR){const r=new ResizeObserver((t=>{null==e||e(t,r),t.length&&(n.value=t[0].contentRect)}));(0,i.Jd)((()=>{r.disconnect()})),(0,i.YP)(t,((e,t)=>{t&&(r.unobserve(t),n.value=void 0),e&&r.observe(e)}),{flush:"post"})}return{resizeRef:t,contentRect:(0,r.OT)(n)}}},4231:function(e,t,n){"use strict";n.d(t,{I:function(){return a},b:function(){return l}});n(7658);var r=n(3396),i=n(4870),o=n(3766),s=n(7514);const a=(0,o.U)({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.BL)();const n=(0,r.Fl)((()=>{const n=(0,i.dq)(e)?e.value:e.rounded,r=[];if(!0===n||""===n)r.push(`${t}--rounded`);else if("string"===typeof n||0===n)for(const e of String(n).split(" "))r.push(`rounded-${e}`);return r}));return{roundedClasses:n}}},6183:function(e,t,n){"use strict";n.d(t,{GN:function(){return d},Kx:function(){return f},nB:function(){return c},tv:function(){return u}});var r=n(7514),i=n(131),o=n(3766),s=n(2385),a=n(3396),l=n(4870);function u(){var e,t;return null==(e=(0,r.FN)("useRouter"))||null==(t=e.proxy)?void 0:t.$router}function c(e,t){const n=(0,a.LL)("RouterLink"),r=(0,a.Fl)((()=>!(!e.href&&!e.to))),o=(0,a.Fl)((()=>(null==r?void 0:r.value)||(0,i.B0)(t,"click")||(0,i.B0)(e,"click")));if("string"===typeof n)return{isLink:r,isClickable:o,href:(0,l.Vh)(e,"href")};const s=e.to?n.useLink(e):void 0;return{isLink:r,isClickable:o,route:null==s?void 0:s.route,navigate:null==s?void 0:s.navigate,isActive:s&&(0,a.Fl)((()=>{var t,n;return e.exact?null==(t=s.isExactActive)?void 0:t.value:null==(n=s.isActive)?void 0:n.value})),href:(0,a.Fl)((()=>e.to?null==s?void 0:s.route.value.href:e.href))}}const d=(0,o.U)({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let h=!1;function f(e,t){let n,r,i=!1;function o(e){var t;null!=(t=e.state)&&t.replaced||(i=!0,setTimeout((()=>i=!1)))}s.BR&&((0,a.Y3)((()=>{window.addEventListener("popstate",o),n=null==e?void 0:e.beforeEach(((e,n,r)=>{h?i?t(r):r():setTimeout((()=>i?t(r):r())),h=!0})),r=null==e?void 0:e.afterEach((()=>{h=!1}))})),(0,l.EB)((()=>{var e,t;window.removeEventListener("popstate",o),null==(e=n)||e(),null==(t=r)||t()})))}},5975:function(e,t,n){"use strict";n.d(t,{a:function(){return i}});var r=n(7514);function i(){const e=(0,r.FN)("useScopeId"),t=e.vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}},9374:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},t:function(){return l}});var r=n(3766),i=n(7514),o=n(131);const s=["x-small","small","default","large","x-large"],a=(0,r.U)({size:{type:[String,Number],default:"default"}},"size");function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,i.BL)();return(0,o.S3)((()=>{let n,r;return(0,o.q9)(s,e.size)?n=`${t}--size-${e.size}`:e.size&&(r={width:(0,o.kb)(e.size),height:(0,o.kb)(e.size)}),{sizeClasses:n,sizeStyles:r}}))}},1372:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r=n(4870),i=n(3396);function o(){const e=(0,r.iH)(!1);(0,i.bv)((()=>{window.requestAnimationFrame((()=>{e.value=!0}))}));const t=(0,i.Fl)((()=>e.value?void 0:{transition:"none !important"}));return{ssrBootStyles:t,isBooted:(0,r.OT)(e)}}},1138:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var r=n(3766);const i=(0,r.U)({tag:{type:String,default:"div"}},"tag")},7041:function(e,t,n){"use strict";n.d(t,{bo:function(){return x},jG:function(){return N},x$:function(){return A},ER:function(){return D}});n(7658);var r=n(4870),i=n(3396),o=n(3766),s=n(131),a=n(661),l=n(2385),u=n(7514);
/**
 * WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
 * @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
 */
const c=2.4,d=.2126729,h=.7151522,f=.072175,p=.55,v=.58,m=.57,g=.62,y=.03,b=1.45,w=5e-4,_=1.25,I=1.25,E=.078,S=12.82051282051282,k=.06,C=.001;function T(e,t){const n=(e.r/255)**c,r=(e.g/255)**c,i=(e.b/255)**c,o=(t.r/255)**c,s=(t.g/255)**c,a=(t.b/255)**c;let l,u=n*d+r*h+i*f,T=o*d+s*h+a*f;if(u<=y&&(u+=(y-u)**b),T<=y&&(T+=(y-T)**b),Math.abs(T-u)<w)return 0;if(T>u){const e=(T**p-u**v)*_;l=e<C?0:e<E?e-e*S*k:e-k}else{const e=(T**g-u**m)*I;l=e>-C?0:e>-E?e-e*S*k:e+k}return 100*l}const x=Symbol.for("vuetify:theme"),A=(0,o.U)({theme:String},"theme"),O={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function R(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;if(!e)return{...O,isDisabled:!0};const t={};for(const[i,o]of Object.entries(e.themes??{})){var n,r;const e=o.dark||"dark"===i?null==(n=O.themes)?void 0:n.dark:null==(r=O.themes)?void 0:r.light;t[i]=(0,s.Ee)(e,o)}return(0,s.Ee)(O,{...e,themes:t})}function N(e){const t=(0,r.qj)(R(e)),n=(0,r.iH)(t.defaultTheme),o=(0,r.iH)(t.themes),u=(0,i.Fl)((()=>{const e={};for(const[n,r]of Object.entries(o.value)){const i=e[n]={...r,colors:{...r.colors}};if(t.variations)for(const e of t.variations.colors){const n=i.colors[e];if(n)for(const r of["lighten","darken"]){const o="lighten"===r?a.$n:a._j;for(const l of(0,s.MT)(t.variations[r],1))i.colors[`${e}-${r}-${l}`]=(0,a.qX)(o((0,a.lu)(n),l))}}for(const e of Object.keys(i.colors)){if(/^on-[a-z]/.test(e)||i.colors[`on-${e}`])continue;const t=`on-${e}`,n=(0,a.lu)(i.colors[e]),r=Math.abs(T((0,a.lu)(0),n)),o=Math.abs(T((0,a.lu)(16777215),n));i.colors[t]=o>Math.min(r,50)?"#fff":"#000"}}return e})),c=(0,i.Fl)((()=>u.value[n.value])),d=(0,i.Fl)((()=>{const e=[];c.value.dark&&F(e,":root",["color-scheme: dark"]);for(const[i,o]of Object.entries(u.value)){const{variables:t,dark:n}=o;F(e,`.v-theme--${i}`,["color-scheme: "+(n?"dark":"normal"),...L(o),...Object.keys(t).map((e=>{const n=t[e],r="string"===typeof n&&n.startsWith("#")?(0,a.lu)(n):void 0,i=r?`${r.r}, ${r.g}, ${r.b}`:void 0;return`--v-${e}: ${i??n}`}))])}const t=[],n=[],r=new Set(Object.values(u.value).flatMap((e=>Object.keys(e.colors))));for(const i of r)/^on-[a-z]/.test(i)?F(n,`.${i}`,[`color: rgb(var(--v-theme-${i})) !important`]):(F(t,`.bg-${i}`,[`--v-theme-overlay-multiplier: var(--v-theme-${i}-overlay-multiplier)`,`background: rgb(var(--v-theme-${i})) !important`,`color: rgb(var(--v-theme-on-${i})) !important`]),F(n,`.text-${i}`,[`color: rgb(var(--v-theme-${i})) !important`]),F(n,`.border-${i}`,[`--v-border-color: var(--v-theme-${i})`]));return e.push(...t,...n),e.map(((e,t)=>0===t?e:`    ${e}`)).join("")}));function h(e){const n=e._context.provides.usehead;if(n)n.addHeadObjs((0,i.Fl)((()=>{const e={children:d.value,type:"text/css",id:"vuetify-theme-stylesheet"};return t.cspNonce&&(e.nonce=t.cspNonce),{style:[e]}}))),l.BR&&(0,i.m0)((()=>n.updateDOM()));else{let r=l.BR?document.getElementById("vuetify-theme-stylesheet"):null;function o(){if(!t.isDisabled){if("undefined"!==typeof document&&!r){const e=document.createElement("style");e.type="text/css",e.id="vuetify-theme-stylesheet",t.cspNonce&&e.setAttribute("nonce",t.cspNonce),r=e,document.head.appendChild(r)}r&&(r.innerHTML=d.value)}}(0,i.YP)(d,o,{immediate:!0})}}const f=(0,i.Fl)((()=>t.isDisabled?void 0:`v-theme--${n.value}`));return{install:h,isDisabled:t.isDisabled,name:n,themes:o,current:c,computedThemes:u,themeClasses:f,styles:d,global:{name:n,current:c}}}function D(e){(0,u.FN)("provideTheme");const t=(0,i.f3)(x,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=(0,i.Fl)((()=>e.theme??(null==t?void 0:t.name.value))),r=(0,i.Fl)((()=>t.isDisabled?void 0:`v-theme--${n.value}`)),o={...t,name:n,themeClasses:r};return(0,i.JJ)(x,o),o}function F(e,t,n){e.push(`${t} {\n`,...n.map((e=>`  ${e};\n`)),"}\n")}function L(e){const t=e.dark?2:1,n=e.dark?1:2,r=[];for(const[i,o]of Object.entries(e.colors)){const e=(0,a.lu)(o);r.push(`--v-theme-${i}: ${e.r},${e.g},${e.b}`),i.startsWith("on-")||r.push(`--v-theme-${i}-overlay-multiplier: ${(0,a.zT)(o)>.18?t:n}`)}return r}},4770:function(e,t,n){"use strict";n.d(t,{U:function(){return o}});var r=n(3396),i=n(4870);function o(e,t){let n;(0,r.YP)(e,(e=>{if(e&&!n)n=(0,i.B)(),n.run(t);else if(!e){var r;null==(r=n)||r.stop(),n=void 0}}),{immediate:!0}),(0,i.EB)((()=>{var e;null==(e=n)||e.stop()}))}},4906:function(e,t,n){"use strict";n.d(t,{J:function(){return a},X:function(){return s}});var r=n(9242),i=n(3396),o=n(3766);const s=(0,o.U)({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>!0!==e}},"transition"),a=(e,t)=>{let{slots:n}=t;const{transition:o,...s}=e,{component:a=r.uT,...l}="object"===typeof o?o:{};return(0,i.h)(a,(0,i.dG)("string"===typeof o?{name:o}:l,s),n)}},5221:function(e,t,n){"use strict";n.d(t,{Ux:function(){return u},bk:function(){return c},c1:function(){return d}});var r=n(3396),i=n(2370),o=n(4870),s=n(3766),a=n(7514);const l=["elevated","flat","tonal","outlined","text","plain"];function u(e,t){return(0,r.Wm)(r.HY,null,[e&&(0,r.Wm)("span",{key:"overlay",class:`${t}__overlay`},null),(0,r.Wm)("span",{key:"underlay",class:`${t}__underlay`},null)])}const c=(0,s.U)({color:String,variant:{type:String,default:"elevated",validator:e=>l.includes(e)}},"variant");function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.BL)();const n=(0,r.Fl)((()=>{const{variant:n}=(0,o.SU)(e);return`${t}--variant-${n}`})),{colorClasses:s,colorStyles:l}=(0,i.rd)((0,r.Fl)((()=>{const{variant:t,color:n}=(0,o.SU)(e);return{[["elevated","flat"].includes(t)?"background":"text"]:n}})));return{colorClasses:s,colorStyles:l,variantClasses:n}}},7052:function(e,t,n){"use strict";var r=n(2385);function i(e,t){if(!r.cu)return;const n=t.modifiers||{},i=t.value,{handler:s,options:a}="object"===typeof i?i:{handler:i,options:{}},l=new IntersectionObserver((function(){var r;let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;const l=null==(r=e._observe)?void 0:r[t.instance.$.uid];if(!l)return;const u=i.some((e=>e.isIntersecting));!s||n.quiet&&!l.init||n.once&&!u&&!l.init||s(u,i,a),u&&n.once?o(e,t):l.init=!0}),a);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:l},l.observe(e)}function o(e,t){var n;const r=null==(n=e._observe)?void 0:n[t.instance.$.uid];r&&(r.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const s={mounted:i,unmounted:o};t["Z"]=s},3824:function(e,t,n){"use strict";n.d(t,{H:function(){return C}});var r=n(131);const i=Symbol("rippleStop"),o=80;function s(e,t){e.style.transform=t,e.style.webkitTransform=t}function a(e,t){e.style.opacity=`calc(${t} * var(--v-theme-overlay-multiplier))`}function l(e){return"TouchEvent"===e.constructor.name}function u(e){return"KeyboardEvent"===e.constructor.name}const c=function(e,t){var n;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=0,o=0;if(!u(e)){const n=t.getBoundingClientRect(),r=l(e)?e.touches[e.touches.length-1]:e;i=r.clientX-n.left,o=r.clientY-n.top}let s=0,a=.3;null!=(n=t._ripple)&&n.circle?(a=.15,s=t.clientWidth/2,s=r.center?s:s+Math.sqrt((i-s)**2+(o-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=(t.clientWidth-2*s)/2+"px",d=(t.clientHeight-2*s)/2+"px",h=r.center?c:i-s+"px",f=r.center?d:o-s+"px";return{radius:s,scale:a,x:h,y:f,centerX:c,centerY:d}},d={show(e,t){var n;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==t||null==(n=t._ripple)||!n.enabled)return;const i=document.createElement("span"),o=document.createElement("span");i.appendChild(o),i.className="v-ripple__container",r.class&&(i.className+=` ${r.class}`);const{radius:l,scale:u,x:d,y:h,centerX:f,centerY:p}=c(e,t,r),v=2*l+"px";o.className="v-ripple__animation",o.style.width=v,o.style.height=v,t.appendChild(i);const m=window.getComputedStyle(t);m&&"static"===m.position&&(t.style.position="relative",t.dataset.previousPosition="static"),o.classList.add("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--visible"),s(o,`translate(${d}, ${h}) scale3d(${u},${u},${u})`),a(o,0),o.dataset.activated=String(performance.now()),setTimeout((()=>{o.classList.remove("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--in"),s(o,`translate(${f}, ${p}) scale3d(1,1,1)`),a(o,.08)}),0)},hide(e){var t;if(null==e||null==(t=e._ripple)||!t.enabled)return;const n=e.getElementsByClassName("v-ripple__animation");if(0===n.length)return;const r=n[n.length-1];if(r.dataset.isHiding)return;r.dataset.isHiding="true";const i=performance.now()-Number(r.dataset.activated),o=Math.max(250-i,0);setTimeout((()=>{r.classList.remove("v-ripple__animation--in"),r.classList.add("v-ripple__animation--out"),a(r,0),setTimeout((()=>{const t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),r.parentNode&&e.removeChild(r.parentNode)}),300)}),o)}};function h(e){return"undefined"===typeof e||!!e}function f(e){const t={},n=e.currentTarget;if(null!=n&&n._ripple&&!n._ripple.touched&&!e[i]){if(e[i]=!0,l(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||u(e),n._ripple.class&&(t.class=n._ripple.class),l(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{d.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{var e;null!=n&&null!=(e=n._ripple)&&e.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),o)}else d.show(e,n,t)}}function p(e){e[i]=!0}function v(e){const t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=window.setTimeout((()=>{v(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),d.hide(t)}}function m(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let g=!1;function y(e){g||e.keyCode!==r.Do.enter&&e.keyCode!==r.Do.space||(g=!0,f(e))}function b(e){g=!1,v(e)}function w(e){g&&(g=!1,v(e))}function _(e,t,n){const{value:i,modifiers:o}=t,s=h(i);if(s||d.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=o.center,e._ripple.circle=o.circle,(0,r.Kn)(i)&&i.class&&(e._ripple.class=i.class),s&&!n){if(o.stop)return e.addEventListener("touchstart",p,{passive:!0}),void e.addEventListener("mousedown",p);e.addEventListener("touchstart",f,{passive:!0}),e.addEventListener("touchend",v,{passive:!0}),e.addEventListener("touchmove",m,{passive:!0}),e.addEventListener("touchcancel",v),e.addEventListener("mousedown",f),e.addEventListener("mouseup",v),e.addEventListener("mouseleave",v),e.addEventListener("keydown",y),e.addEventListener("keyup",b),e.addEventListener("blur",w),e.addEventListener("dragstart",v,{passive:!0})}else!s&&n&&I(e)}function I(e){e.removeEventListener("mousedown",f),e.removeEventListener("touchstart",f),e.removeEventListener("touchend",v),e.removeEventListener("touchmove",m),e.removeEventListener("touchcancel",v),e.removeEventListener("mouseup",v),e.removeEventListener("mouseleave",v),e.removeEventListener("keydown",y),e.removeEventListener("keyup",b),e.removeEventListener("dragstart",v),e.removeEventListener("blur",w)}function E(e,t){_(e,t,!1)}function S(e){delete e._ripple,I(e)}function k(e,t){if(t.value===t.oldValue)return;const n=h(t.oldValue);_(e,t,n)}const C={mounted:E,unmounted:S,updated:k}},8957:function(e,t,n){"use strict";n.d(t,{Rd:function(){return p}});var r=n(8434),i=n(8157),o=n(4960),s=n(1629),a=n(7041),l=n(131),u=n(320),c=n(2385),d=n(7514),h=n(3396),f=n(4870);function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{blueprint:t,...n}=e,p=(0,l.Ee)(t,n),{aliases:v={},components:g={},directives:y={}}=p,b=(0,r.yB)(p.defaults),w=(0,i.fT)(p.display,p.ssr),_=(0,a.jG)(p.theme),I=(0,o._i)(p.icons),E=(0,s.$2)(p.locale),S=e=>{for(const t in y)e.directive(t,y[t]);for(const t in g)e.component(t,g[t]);for(const t in v)e.component(t,(0,u.aZ)({...v[t],name:t,aliasName:v[t].name}));if(_.install(e),e.provide(r.tI,b),e.provide(i.x6,w),e.provide(a.bo,_),e.provide(o.YK,I),e.provide(s.O,E),c.BR&&p.ssr)if(e.$nuxt)e.$nuxt.hook("app:suspense:resolve",(()=>{w.update()}));else{const{mount:t}=e;e.mount=function(){const n=t(...arguments);return(0,h.Y3)((()=>w.update())),e.mount=t,n}}d.sq.reset(),e.mixin({computed:{$vuetify(){return(0,f.qj)({defaults:m.call(this,r.tI),display:m.call(this,i.x6),theme:m.call(this,a.bo),icons:m.call(this,o.YK),locale:m.call(this,s.O)})}}})};return{install:S,defaults:b,display:w,theme:_,icons:I,locale:E}}const v="3.1.2";function m(e){var t,n;const r=this.$,i=(null==(t=r.parent)?void 0:t.provides)??(null==(n=r.vnode.appContext)?void 0:n.provides);if(i&&e in i)return i[e]}p.version=v},2879:function(e,t,n){"use strict";n.d(t,{Oe:function(){return c},Wc:function(){return a},aw:function(){return u},dd:function(){return d},tb:function(){return l},wW:function(){return s}});var r=n(131);const i=["top","bottom"],o=["start","end","left","right"];function s(e,t){let[n,s]=e.split(" ");return s||(s=(0,r.q9)(i,n)?"start":(0,r.q9)(o,n)?"top":"center"),{side:a(n,t),align:a(s,t)}}function a(e,t){return"start"===e?t?"right":"left":"end"===e?t?"left":"right":e}function l(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function u(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function c(e){return{side:e.align,align:e.side}}function d(e){return(0,r.q9)(i,e.side)?"y":"x"}},3122:function(e,t,n){"use strict";n.d(t,{G:function(){return i},j:function(){return o}});var r=n(6309);function i(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),i=n.transform;if(i){let o,s,a,l,u;if(i.startsWith("matrix3d("))o=i.slice(9,-1).split(/, /),s=+o[0],a=+o[5],l=+o[12],u=+o[13];else{if(!i.startsWith("matrix("))return new r.x(t);o=i.slice(7,-1).split(/, /),s=+o[0],a=+o[3],l=+o[4],u=+o[5]}const c=n.transformOrigin,d=t.x-l-(1-s)*parseFloat(c),h=t.y-u-(1-a)*parseFloat(c.slice(c.indexOf(" ")+1)),f=s?t.width/s:e.offsetWidth+1,p=a?t.height/a:e.offsetHeight+1;return new r.x({x:d,y:h,width:f,height:p})}return new r.x(t)}function o(e,t,n){if("undefined"===typeof e.animate)return{finished:Promise.resolve()};const r=e.animate(t,n);return"undefined"===typeof r.finished&&(r.finished=new Promise((e=>{r.onfinish=()=>{e(r)}}))),r}},6309:function(e,t,n){"use strict";n.d(t,{p:function(){return i},x:function(){return r}});class r{constructor(e){let{x:t,y:n,width:r,height:i}=e;this.x=t,this.y=n,this.width=r,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function i(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}},661:function(e,t,n){"use strict";n.d(t,{qX:function(){return b},_j:function(){return I},zT:function(){return E},NA:function(){return m},$n:function(){return _},lu:function(){return g}});var r=n(6033),i=n(131);const o=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],s=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,a=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],l=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function u(e){const t=Array(3),n=s,r=o;for(let o=0;o<3;++o)t[o]=Math.round(255*(0,i.uZ)(n(r[o][0]*e[0]+r[o][1]*e[1]+r[o][2]*e[2])));return{r:t[0],g:t[1],b:t[2]}}function c(e){let{r:t,g:n,b:r}=e;const i=[0,0,0],o=l,s=a;t=o(t/255),n=o(n/255),r=o(r/255);for(let a=0;a<3;++a)i[a]=s[a][0]*t+s[a][1]*n+s[a][2]*r;return i}const d=.20689655172413793,h=e=>e>d**3?Math.cbrt(e):e/(3*d**2)+4/29,f=e=>e>d?e**3:3*d**2*(e-4/29);function p(e){const t=h,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function v(e){const t=f,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}function m(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function g(e){if("number"===typeof e)return(isNaN(e)||e<0||e>16777215)&&(0,r.Kd)(`'${e}' is not a valid hex color`),{r:(16711680&e)>>16,g:(65280&e)>>8,b:255&e};if("string"===typeof e){let t=e.startsWith("#")?e.slice(1):e;[3,4].includes(t.length)?t=t.split("").map((e=>e+e)).join(""):[6,8].includes(t.length)||(0,r.Kd)(`'${e}' is not a valid hex(a) color`);const n=parseInt(t,16);return(isNaN(n)||n<0||n>4294967295)&&(0,r.Kd)(`'${e}' is not a valid hex(a) color`),w(t)}throw new TypeError(`Colors can only be numbers or strings, recieved ${null==e?e:e.constructor.name} instead`)}function y(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function b(e){let{r:t,g:n,b:r,a:i}=e;return`#${[y(t),y(n),y(r),void 0!==i?y(Math.round(255*i)):"FF"].join("")}`}function w(e){let[t,n,r,o]=(0,i.yo)(e,2).map((e=>parseInt(e,16)));return o=void 0===o?o:Math.round(o/255*100)/100,{r:t,g:n,b:r,a:o}}function _(e,t){const n=p(c(e));return n[0]=n[0]+10*t,u(v(n))}function I(e,t){const n=p(c(e));return n[0]=n[0]-10*t,u(v(n))}function E(e){const t=g(e);return c(t)[1]}},6033:function(e,t,n){"use strict";n.d(t,{Kd:function(){return i},N6:function(){return o}});n(7658);function r(e,t,n){if(n&&(t={__isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?u(t):"")}function i(e,t,n){const i=r(e,t,n);null!=i&&console.warn(i)}function o(e,t,n){const i=r(e,t,n);null!=i&&console.error(i)}const s=/(?:^|[-_])(\w)/g,a=e=>e.replace(s,(e=>e.toUpperCase())).replace(/[-_]/g,"");function l(e,t){if(e.$root===e)return"<Root>";const n="function"===typeof e&&null!=e.cid?e.options:e.__isVue?e.$options||e.constructor.options:e||{};let r=n.name||n._componentTag;const i=n.__file;if(!r&&i){const e=i.match(/([^/\\]+)\.vue$/);r=null==e?void 0:e[1]}return(r?`<${a(r)}>`:"<Anonymous>")+(i&&!1!==t?` at ${i}`:"")}function u(e){if(e.__isVue&&e.$parent){const t=[];let n=0;while(e){if(t.length>0){const r=t[t.length-1];if(r.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${l(e[0])}... (${e[1]} recursive calls)`:l(e)}`)).join("\n")}return`\n\n(found in ${l(e)})`}},1114:function(e,t,n){"use strict";n.d(t,{J:function(){return s}});var r=n(2268),i=n(3396),o=n(320);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return(0,o.aZ)({name:n??(0,r.kC)((0,r._A)(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t}},setup(t,n){let{slots:r}=n;return()=>{var n;return(0,i.h)(t.tag,{class:e},null==(n=r.default)?void 0:n.call(r))}}})}},320:function(e,t,n){"use strict";n.d(t,{aZ:function(){return f},ev:function(){return p}});var r=n(3396),i=n(4870),o=n(6033),s=n(131),a=n(7514);function l(e){const{provides:t}=(0,a.FN)("injectSelf");if(t&&e in t)return t[e]}var u=n(8434),c=n(4770),d=n(3766);function h(e,t){var n,r;return"undefined"!==typeof(null==(n=e.props)?void 0:n[t])||"undefined"!==typeof(null==(r=e.props)?void 0:r[(0,s.mA)(t)])}const f=function(e){return e._setup=e._setup??e.setup,e.name?(e._setup&&(e.props=e.props??{},e.props=(0,d.U)(e.props,(0,s.mA)(e.name))(),e.props._as=String,e.setup=function(t,n){const o=(0,r.FN)(),a=(0,u.qy)(),d=(0,i.XI)(),f=(0,i.Um)({...(0,i.IU)(t)});(0,r.m0)((()=>{const n=a.value.global,r=a.value[t._as??e.name];if(r){const e=Object.entries(r).filter((e=>{let[t]=e;return t.startsWith(t[0].toUpperCase())}));e.length&&(d.value=Object.fromEntries(e))}for(const e of Object.keys(t)){let i=t[e];h(o.vnode,e)||(i=(null==r?void 0:r[e])??(null==n?void 0:n[e])??t[e]),f[e]!==i&&(f[e]=i)}}));const p=e._setup(f,n);return(0,c.U)(d,(()=>{var e;(0,u.AF)((0,s.Ee)((null==(e=l(u.tI))?void 0:e.value)??{},d.value))})),p}),e):((0,o.Kd)("The component is missing an explicit name, unable to generate default prop value"),e)};function p(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return t=>(e?f:r.aZ)(t)}},8587:function(e,t,n){"use strict";n.d(t,{Ly:function(){return r},uX:function(){return i},x0:function(){return o}});const r="cubic-bezier(0.4, 0, 0.2, 1)",i="cubic-bezier(0.0, 0, 0.2, 1)",o="cubic-bezier(0.4, 0, 1, 1)"},7514:function(e,t,n){"use strict";n.d(t,{BL:function(){return s},FN:function(){return o},sq:function(){return u}});var r=n(3396),i=n(131);function o(e,t){const n=(0,r.FN)();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables";const t=o(e).type;return(0,i.mA)((null==t?void 0:t.aliasName)||(null==t?void 0:t.name))}let a=0,l=new WeakMap;function u(){const e=o("getUid");if(l.has(e))return l.get(e);{const t=a++;return l.set(e,t),t}}u.reset=()=>{a=0,l=new WeakMap}},2385:function(e,t,n){"use strict";n.d(t,{BR:function(){return r},Z1:function(){return s},cu:function(){return i},sR:function(){return o}});const r="undefined"!==typeof window,i=r&&"IntersectionObserver"in window,o=r&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),s=r&&"undefined"!==typeof CSS&&CSS.supports("selector(:focus-visible)")},131:function(e,t,n){"use strict";n.d(t,{An:function(){return S},B0:function(){return U},CE:function(){return E},Do:function(){return _},Ee:function(){return x},F7:function(){return V},FT:function(){return k},Kn:function(){return b},MT:function(){return g},PU:function(){return D},S3:function(){return F},as:function(){return M},bY:function(){return O},dr:function(){return B},ei:function(){return I},kb:function(){return y},mA:function(){return A},q9:function(){return L},qF:function(){return m},rU:function(){return w},uZ:function(){return C},vO:function(){return v},vZ:function(){return p},yo:function(){return T}});n(7658);var r=n(4870),i=n(3396),o=n(2268);function s(e,t,n){a(e,t),t.set(e,n)}function a(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function l(e,t,n){var r=d(e,t,"set");return u(e,r,n),n}function u(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}function c(e,t){var n=d(e,t,"get");return h(e,n)}function d(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function h(e,t){return t.get?t.get.call(e):t.value}function f(e,t,n){const r=t.length-1;if(r<0)return void 0===e?n:e;for(let i=0;i<r;i++){if(null==e)return n;e=e[t[i]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function p(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>p(e[n],t[n])))}function v(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),f(e,t.split("."),n)):n}function m(e,t,n){if(null==t)return void 0===e?n:e;if(e!==Object(e)){if("function"!==typeof t)return n;const r=t(e,n);return"undefined"===typeof r?n:r}if("string"===typeof t)return v(e,t,n);if(Array.isArray(t))return f(e,t,n);if("function"!==typeof t)return n;const r=t(e,n);return"undefined"===typeof r?n:r}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},((e,n)=>t+n))}function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function b(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function w(e){return null==e?void 0:e.$el}const _=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function I(e,t){const n=Object.create(null),r=Object.create(null);for(const i in e)t.some((e=>e instanceof RegExp?e.test(i):e===i))?n[i]=e[i]:r[i]=e[i];return[n,r]}function E(e,t){const n={...e};return t.forEach((e=>delete n[e])),n}function S(e){return I(e,["class","style","id",/^data-/])}function k(e){return null==e?[]:Array.isArray(e)?e:[e]}function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(t,Math.min(n,e))}function T(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const n=[];let r=0;while(r<e.length)n.push(e.substr(r,t)),r+=t;return n}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const i in e)r[i]=e[i];for(const i in t){const o=e[i],s=t[i];b(o)&&b(s)?r[i]=x(o,s,n):Array.isArray(o)&&Array.isArray(s)&&n?r[i]=n(o,s):r[i]=s}return r}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function O(e,t){if(!t||"object"!==typeof t)return[];if(Array.isArray(t))return t.map((t=>O(e,t))).flat(1);if(Array.isArray(t.children))return t.children.map((t=>O(e,t))).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return O(e,t.component.subTree).flat(1)}return[]}var R=new WeakMap,N=new WeakMap;class D{constructor(e){s(this,R,{writable:!0,value:[]}),s(this,N,{writable:!0,value:0}),this.size=e}push(e){c(this,R)[c(this,N)]=e,l(this,N,(c(this,N)+1)%this.size)}values(){return c(this,R).slice(c(this,N)).concat(c(this,R).slice(0,c(this,N)))}}function F(e){const t=(0,r.qj)({}),n=(0,i.Fl)(e);return(0,i.m0)((()=>{for(const e in n.value)t[e]=n.value[e]}),{flush:"sync"}),(0,r.BK)(t)}function L(e,t){return e.includes(t)}const P=/^on[^a-z]/,V=e=>P.test(e),M=[Function,Array];function U(e,t){return t="on"+(0,o.kC)(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function B(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Array.isArray(e))for(const i of e)i(...n);else"function"===typeof e&&e(...n)}},3766:function(e,t,n){"use strict";function r(e,t){return n=>Object.keys(e).reduce(((r,i)=>{const o="object"===typeof e[i]&&null!=e[i]&&!Array.isArray(e[i]),s=o?e[i]:{type:e[i]};return r[i]=n&&i in n?{...s,default:n[i]}:s,t&&!r[i].source&&(r[i].source=t),r}),{})}n.d(t,{U:function(){return r}})},9888:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=n(7514);function i(e){const t=(0,r.FN)("useRender");t.render=e}}}]);
//# sourceMappingURL=chunk-vendors.6d9766ac.js.map