(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var rg={exports:{}},oc={},sg={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),uv=Symbol.for("react.portal"),fv=Symbol.for("react.fragment"),hv=Symbol.for("react.strict_mode"),dv=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),mv=Symbol.for("react.context"),gv=Symbol.for("react.forward_ref"),_v=Symbol.for("react.suspense"),vv=Symbol.for("react.memo"),xv=Symbol.for("react.lazy"),Ud=Symbol.iterator;function yv(t){return t===null||typeof t!="object"?null:(t=Ud&&t[Ud]||t["@@iterator"],typeof t=="function"?t:null)}var og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ag=Object.assign,lg={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=lg,this.updater=n||og}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cg(){}cg.prototype=Ks.prototype;function Sh(t,e,n){this.props=t,this.context=e,this.refs=lg,this.updater=n||og}var Mh=Sh.prototype=new cg;Mh.constructor=Sh;ag(Mh,Ks.prototype);Mh.isPureReactComponent=!0;var Fd=Array.isArray,ug=Object.prototype.hasOwnProperty,Eh={current:null},fg={key:!0,ref:!0,__self:!0,__source:!0};function hg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ug.call(e,i)&&!fg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:da,type:t,key:s,ref:o,props:r,_owner:Eh.current}}function Sv(t,e){return{$$typeof:da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wh(t){return typeof t=="object"&&t!==null&&t.$$typeof===da}function Mv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Od=/\/+/g;function Rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mv(""+t.key):e.toString(36)}function hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case da:case uv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Rc(o,0):i,Fd(r)?(n="",t!=null&&(n=t.replace(Od,"$&/")+"/"),hl(r,e,n,"",function(c){return c})):r!=null&&(wh(r)&&(r=Sv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Od,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Fd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Rc(s,a);o+=hl(s,e,n,l,r)}else if(l=yv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Rc(s,a++),o+=hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sa(t,e,n){if(t==null)return t;var i=[],r=0;return hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},dl={transition:null},wv={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:dl,ReactCurrentOwner:Eh};function dg(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!wh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=Ks;Je.Fragment=fv;Je.Profiler=dv;Je.PureComponent=Sh;Je.StrictMode=hv;Je.Suspense=_v;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;Je.act=dg;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ag({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Eh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ug.call(e,l)&&!fg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:da,type:t.type,key:r,ref:s,props:i,_owner:o}};Je.createContext=function(t){return t={$$typeof:mv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pv,_context:t},t.Consumer=t};Je.createElement=hg;Je.createFactory=function(t){var e=hg.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:gv,render:t}};Je.isValidElement=wh;Je.lazy=function(t){return{$$typeof:xv,_payload:{_status:-1,_result:t},_init:Ev}};Je.memo=function(t,e){return{$$typeof:vv,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=dl.transition;dl.transition={};try{t()}finally{dl.transition=e}};Je.unstable_act=dg;Je.useCallback=function(t,e){return rn.current.useCallback(t,e)};Je.useContext=function(t){return rn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return rn.current.useEffect(t,e)};Je.useId=function(){return rn.current.useId()};Je.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return rn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};Je.useRef=function(t){return rn.current.useRef(t)};Je.useState=function(t){return rn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return rn.current.useTransition()};Je.version="18.3.1";sg.exports=Je;var Be=sg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv=Be,Av=Symbol.for("react.element"),Rv=Symbol.for("react.fragment"),Cv=Object.prototype.hasOwnProperty,bv=Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pv={key:!0,ref:!0,__self:!0,__source:!0};function pg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Cv.call(e,i)&&!Pv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Av,type:t,key:s,ref:o,props:r,_owner:bv.current}}oc.Fragment=Rv;oc.jsx=pg;oc.jsxs=pg;rg.exports=oc;var ce=rg.exports,mg={exports:{}},En={},gg={exports:{}},_g={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,Z){var ae=U.length;U.push(Z);e:for(;0<ae;){var ve=ae-1>>>1,Ie=U[ve];if(0<r(Ie,Z))U[ve]=Z,U[ae]=Ie,ae=ve;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var Z=U[0],ae=U.pop();if(ae!==Z){U[0]=ae;e:for(var ve=0,Ie=U.length,We=Ie>>>1;ve<We;){var qe=2*(ve+1)-1,$e=U[qe],J=qe+1,ue=U[J];if(0>r($e,ae))J<Ie&&0>r(ue,$e)?(U[ve]=ue,U[J]=ae,ve=J):(U[ve]=$e,U[qe]=ae,ve=qe);else if(J<Ie&&0>r(ue,ae))U[ve]=ue,U[J]=ae,ve=J;else break e}}return Z}function r(U,Z){var ae=U.sortIndex-Z.sortIndex;return ae!==0?ae:U.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=U)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function y(U){if(v=!1,x(U),!g)if(n(l)!==null)g=!0,j(C);else{var Z=n(c);Z!==null&&te(y,Z.startTime-U)}}function C(U,Z){g=!1,v&&(v=!1,u(b),b=-1),p=!0;var ae=d;try{for(x(Z),h=n(l);h!==null&&(!(h.expirationTime>Z)||U&&!N());){var ve=h.callback;if(typeof ve=="function"){h.callback=null,d=h.priorityLevel;var Ie=ve(h.expirationTime<=Z);Z=t.unstable_now(),typeof Ie=="function"?h.callback=Ie:h===n(l)&&i(l),x(Z)}else i(l);h=n(l)}if(h!==null)var We=!0;else{var qe=n(c);qe!==null&&te(y,qe.startTime-Z),We=!1}return We}finally{h=null,d=ae,p=!1}}var A=!1,R=null,b=-1,E=5,M=-1;function N(){return!(t.unstable_now()-M<E)}function z(){if(R!==null){var U=t.unstable_now();M=U;var Z=!0;try{Z=R(!0,U)}finally{Z?X():(A=!1,R=null)}}else A=!1}var X;if(typeof _=="function")X=function(){_(z)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,k=se.port2;se.port1.onmessage=z,X=function(){k.postMessage(null)}}else X=function(){m(z,0)};function j(U){R=U,A||(A=!0,X())}function te(U,Z){b=m(function(){U(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,j(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var Z=3;break;default:Z=d}var ae=d;d=Z;try{return U()}finally{d=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ae=d;d=U;try{return Z()}finally{d=ae}},t.unstable_scheduleCallback=function(U,Z,ae){var ve=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?ve+ae:ve):ae=ve,U){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=ae+Ie,U={id:f++,callback:Z,priorityLevel:U,startTime:ae,expirationTime:Ie,sortIndex:-1},ae>ve?(U.sortIndex=ae,e(c,U),n(l)===null&&U===n(c)&&(v?(u(b),b=-1):v=!0,te(y,ae-ve))):(U.sortIndex=Ie,e(l,U),g||p||(g=!0,j(C))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var Z=d;return function(){var ae=d;d=Z;try{return U.apply(this,arguments)}finally{d=ae}}}})(_g);gg.exports=_g;var Lv=gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv=Be,Mn=Lv;function pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vg=new Set,Ho={};function Gr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Ho[t]=e,t=0;t<e.length;t++)vg.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,Nv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kd={},zd={};function Iv(t){return Fu.call(zd,t)?!0:Fu.call(kd,t)?!1:Nv.test(t)?zd[t]=!0:(kd[t]=!0,!1)}function Uv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Fv(t,e,n,i){if(e===null||typeof e>"u"||Uv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Th=/[\-:]([a-z])/g;function Ah(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Th,Ah);Gt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Th,Ah);Gt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Th,Ah);Gt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rh(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fv(e,n,r,i)&&(n=null),i||r===null?Iv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),ds=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),Ch=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),xg=Symbol.for("react.provider"),yg=Symbol.for("react.context"),bh=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),Ph=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),Sg=Symbol.for("react.offscreen"),Bd=Symbol.iterator;function oo(t){return t===null||typeof t!="object"?null:(t=Bd&&t[Bd]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,Cc;function So(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var bc=!1;function Pc(t,e){if(!t||bc)return"";bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function Ov(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function Bu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ps:return"Fragment";case ds:return"Portal";case Ou:return"Profiler";case Ch:return"StrictMode";case ku:return"Suspense";case zu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yg:return(t.displayName||"Context")+".Consumer";case xg:return(t._context.displayName||"Context")+".Provider";case bh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ph:return e=t.displayName||null,e!==null?e:Bu(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return Bu(t(e))}catch{}}return null}function kv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bu(e);case 8:return e===Ch?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zv(t){var e=Mg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=zv(t))}function Eg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hu(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wg(t,e){e=e.checked,e!=null&&Rh(t,"checked",e,!1)}function Vu(t,e){wg(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gu(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gu(t,e,n){(e!=="number"||bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mo=Array.isArray;function Cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(pe(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(pe(92));if(Mo(n)){if(1<n.length)throw Error(pe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function Tg(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Wd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ag(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ag(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,Rg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bv=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){Bv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function Cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function bg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Cg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Hv=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ju(t,e){if(e){if(Hv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(pe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(pe(62))}}function Yu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qu=null;function Lh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $u=null,bs=null,Ps=null;function Xd(t){if(t=ga(t)){if(typeof $u!="function")throw Error(pe(280));var e=t.stateNode;e&&(e=fc(e),$u(t.stateNode,t.type,e))}}function Pg(t){bs?Ps?Ps.push(t):Ps=[t]:bs=t}function Lg(){if(bs){var t=bs,e=Ps;if(Ps=bs=null,Xd(t),e)for(t=0;t<e.length;t++)Xd(e[t])}}function Dg(t,e){return t(e)}function Ng(){}var Lc=!1;function Ig(t,e,n){if(Lc)return t(e,n);Lc=!0;try{return Dg(t,e,n)}finally{Lc=!1,(bs!==null||Ps!==null)&&(Ng(),Lg())}}function Go(t,e){var n=t.stateNode;if(n===null)return null;var i=fc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(pe(231,e,typeof n));return n}var Ku=!1;if(Ci)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Ku=!1}function Vv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Co=!1,Pl=null,Ll=!1,Zu=null,Gv={onError:function(t){Co=!0,Pl=t}};function Wv(t,e,n,i,r,s,o,a,l){Co=!1,Pl=null,Vv.apply(Gv,arguments)}function Xv(t,e,n,i,r,s,o,a,l){if(Wv.apply(this,arguments),Co){if(Co){var c=Pl;Co=!1,Pl=null}else throw Error(pe(198));Ll||(Ll=!0,Zu=c)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ug(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jd(t){if(Wr(t)!==t)throw Error(pe(188))}function jv(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(pe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return jd(r),t;if(s===i)return jd(r),e;s=s.sibling}throw Error(pe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(pe(189))}}if(n.alternate!==i)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?t:e}function Fg(t){return t=jv(t),t!==null?Og(t):null}function Og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Og(t);if(e!==null)return e;t=t.sibling}return null}var kg=Mn.unstable_scheduleCallback,Yd=Mn.unstable_cancelCallback,Yv=Mn.unstable_shouldYield,qv=Mn.unstable_requestPaint,Rt=Mn.unstable_now,$v=Mn.unstable_getCurrentPriorityLevel,Dh=Mn.unstable_ImmediatePriority,zg=Mn.unstable_UserBlockingPriority,Dl=Mn.unstable_NormalPriority,Kv=Mn.unstable_LowPriority,Bg=Mn.unstable_IdlePriority,ac=null,oi=null;function Zv(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(ac,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:ex,Jv=Math.log,Qv=Math.LN2;function ex(t){return t>>>=0,t===0?32:31-(Jv(t)/Qv|0)|0}var Ta=64,Aa=4194304;function Eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Eo(a):(s&=o,s!==0&&(i=Eo(s)))}else o=n&~r,o!==0?i=Eo(o):s!==0&&(i=Eo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kn(e),r=1<<n,i|=t[n],e&=~r;return i}function tx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Kn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=tx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hg(){var t=Ta;return Ta<<=1,!(Ta&4194240)&&(Ta=64),t}function Dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function ix(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Nh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function Vg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gg,Ih,Wg,Xg,jg,Qu=!1,Ra=[],Zi=null,Ji=null,Qi=null,Wo=new Map,Xo=new Map,Xi=[],rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qd(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(e.pointerId)}}function lo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ga(e),e!==null&&Ih(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sx(t,e,n,i,r){switch(e){case"focusin":return Zi=lo(Zi,t,e,n,i,r),!0;case"dragenter":return Ji=lo(Ji,t,e,n,i,r),!0;case"mouseover":return Qi=lo(Qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wo.set(s,lo(Wo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Xo.set(s,lo(Xo.get(s)||null,t,e,n,i,r)),!0}return!1}function Yg(t){var e=Rr(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ug(n),e!==null){t.blockedOn=e,jg(t.priority,function(){Wg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ef(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);qu=i,n.target.dispatchEvent(i),qu=null}else return e=ga(n),e!==null&&Ih(e),t.blockedOn=n,!1;e.shift()}return!0}function $d(t,e,n){pl(t)&&n.delete(e)}function ox(){Qu=!1,Zi!==null&&pl(Zi)&&(Zi=null),Ji!==null&&pl(Ji)&&(Ji=null),Qi!==null&&pl(Qi)&&(Qi=null),Wo.forEach($d),Xo.forEach($d)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,Qu||(Qu=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,ox)))}function jo(t){function e(r){return co(r,t)}if(0<Ra.length){co(Ra[0],t);for(var n=1;n<Ra.length;n++){var i=Ra[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&co(Zi,t),Ji!==null&&co(Ji,t),Qi!==null&&co(Qi,t),Wo.forEach(e),Xo.forEach(e),n=0;n<Xi.length;n++)i=Xi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xi.length&&(n=Xi[0],n.blockedOn===null);)Yg(n),n.blockedOn===null&&Xi.shift()}var Ls=Di.ReactCurrentBatchConfig,Il=!0;function ax(t,e,n,i){var r=at,s=Ls.transition;Ls.transition=null;try{at=1,Uh(t,e,n,i)}finally{at=r,Ls.transition=s}}function lx(t,e,n,i){var r=at,s=Ls.transition;Ls.transition=null;try{at=4,Uh(t,e,n,i)}finally{at=r,Ls.transition=s}}function Uh(t,e,n,i){if(Il){var r=ef(t,e,n,i);if(r===null)Vc(t,e,i,Ul,n),qd(t,i);else if(sx(r,t,e,n,i))i.stopPropagation();else if(qd(t,i),e&4&&-1<rx.indexOf(t)){for(;r!==null;){var s=ga(r);if(s!==null&&Gg(s),s=ef(t,e,n,i),s===null&&Vc(t,e,i,Ul,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Vc(t,e,i,null,n)}}var Ul=null;function ef(t,e,n,i){if(Ul=null,t=Lh(i),t=Rr(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ug(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function qg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($v()){case Dh:return 1;case zg:return 4;case Dl:case Kv:return 16;case Bg:return 536870912;default:return 16}default:return 16}}var qi=null,Fh=null,ml=null;function $g(){if(ml)return ml;var t,e=Fh,n=e.length,i,r="value"in qi?qi.value:qi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ml=r.slice(t,1<i?1-i:void 0)}function gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function Kd(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ca:Kd,this.isPropagationStopped=Kd,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oh=wn(Zs),ma=wt({},Zs,{view:0,detail:0}),cx=wn(ma),Nc,Ic,uo,lc=wt({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Nc=t.screenX-uo.screenX,Ic=t.screenY-uo.screenY):Ic=Nc=0,uo=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),Zd=wn(lc),ux=wt({},lc,{dataTransfer:0}),fx=wn(ux),hx=wt({},ma,{relatedTarget:0}),Uc=wn(hx),dx=wt({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),px=wn(dx),mx=wt({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gx=wn(mx),_x=wt({},Zs,{data:0}),Jd=wn(_x),vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yx[t])?!!e[t]:!1}function kh(){return Sx}var Mx=wt({},ma,{key:function(t){if(t.key){var e=vx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kh,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ex=wn(Mx),wx=wt({},lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=wn(wx),Tx=wt({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kh}),Ax=wn(Tx),Rx=wt({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=wn(Rx),bx=wt({},lc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Px=wn(bx),Lx=[9,13,27,32],zh=Ci&&"CompositionEvent"in window,bo=null;Ci&&"documentMode"in document&&(bo=document.documentMode);var Dx=Ci&&"TextEvent"in window&&!bo,Kg=Ci&&(!zh||bo&&8<bo&&11>=bo),ep=" ",tp=!1;function Zg(t,e){switch(t){case"keyup":return Lx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function Nx(t,e){switch(t){case"compositionend":return Jg(e);case"keypress":return e.which!==32?null:(tp=!0,ep);case"textInput":return t=e.data,t===ep&&tp?null:t;default:return null}}function Ix(t,e){if(ms)return t==="compositionend"||!zh&&Zg(t,e)?(t=$g(),ml=Fh=qi=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kg&&e.locale!=="ko"?null:e.data;default:return null}}var Ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ux[t.type]:e==="textarea"}function Qg(t,e,n,i){Pg(i),e=Fl(e,"onChange"),0<e.length&&(n=new Oh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Po=null,Yo=null;function Fx(t){u_(t,0)}function cc(t){var e=vs(t);if(Eg(e))return t}function Ox(t,e){if(t==="change")return e}var e_=!1;if(Ci){var Fc;if(Ci){var Oc="oninput"in document;if(!Oc){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),Oc=typeof ip.oninput=="function"}Fc=Oc}else Fc=!1;e_=Fc&&(!document.documentMode||9<document.documentMode)}function rp(){Po&&(Po.detachEvent("onpropertychange",t_),Yo=Po=null)}function t_(t){if(t.propertyName==="value"&&cc(Yo)){var e=[];Qg(e,Yo,t,Lh(t)),Ig(Fx,e)}}function kx(t,e,n){t==="focusin"?(rp(),Po=e,Yo=n,Po.attachEvent("onpropertychange",t_)):t==="focusout"&&rp()}function zx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cc(Yo)}function Bx(t,e){if(t==="click")return cc(e)}function Hx(t,e){if(t==="input"||t==="change")return cc(e)}function Vx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:Vx;function qo(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fu.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function op(t,e){var n=sp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sp(n)}}function n_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function i_(){for(var t=window,e=bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bl(t.document)}return e}function Bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gx(t){var e=i_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n_(n.ownerDocument.documentElement,n)){if(i!==null&&Bh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=op(n,s);var o=op(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Wx=Ci&&"documentMode"in document&&11>=document.documentMode,gs=null,tf=null,Lo=null,nf=!1;function ap(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nf||gs==null||gs!==bl(i)||(i=gs,"selectionStart"in i&&Bh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Lo&&qo(Lo,i)||(Lo=i,i=Fl(tf,"onSelect"),0<i.length&&(e=new Oh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=gs)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},kc={},r_={};Ci&&(r_=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function uc(t){if(kc[t])return kc[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in r_)return kc[t]=e[n];return t}var s_=uc("animationend"),o_=uc("animationiteration"),a_=uc("animationstart"),l_=uc("transitionend"),c_=new Map,lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){c_.set(t,e),Gr(e,[t])}for(var zc=0;zc<lp.length;zc++){var Bc=lp[zc],Xx=Bc.toLowerCase(),jx=Bc[0].toUpperCase()+Bc.slice(1);fr(Xx,"on"+jx)}fr(s_,"onAnimationEnd");fr(o_,"onAnimationIteration");fr(a_,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(l_,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yx=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function cp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Xv(i,e,void 0,t),t.currentTarget=null}function u_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;cp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;cp(r,a,c),s=l}}}if(Ll)throw t=Zu,Ll=!1,Zu=null,t}function mt(t,e){var n=e[lf];n===void 0&&(n=e[lf]=new Set);var i=t+"__bubble";n.has(i)||(f_(e,t,2,!1),n.add(i))}function Hc(t,e,n){var i=0;e&&(i|=4),f_(n,t,i,e)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function $o(t){if(!t[Pa]){t[Pa]=!0,vg.forEach(function(n){n!=="selectionchange"&&(Yx.has(n)||Hc(n,!1,t),Hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pa]||(e[Pa]=!0,Hc("selectionchange",!1,e))}}function f_(t,e,n,i){switch(qg(e)){case 1:var r=ax;break;case 4:r=lx;break;default:r=Uh}n=r.bind(null,e,n,t),r=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Vc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Rr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ig(function(){var c=s,f=Lh(n),h=[];e:{var d=c_.get(t);if(d!==void 0){var p=Oh,g=t;switch(t){case"keypress":if(gl(n)===0)break e;case"keydown":case"keyup":p=Ex;break;case"focusin":g="focus",p=Uc;break;case"focusout":g="blur",p=Uc;break;case"beforeblur":case"afterblur":p=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ax;break;case s_:case o_:case a_:p=px;break;case l_:p=Cx;break;case"scroll":p=cx;break;case"wheel":p=Px;break;case"copy":case"cut":case"paste":p=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Qd}var v=(e&4)!==0,m=!v&&t==="scroll",u=v?d!==null?d+"Capture":null:d;v=[];for(var _=c,x;_!==null;){x=_;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,u!==null&&(y=Go(_,u),y!=null&&v.push(Ko(_,y,x)))),m)break;_=_.return}0<v.length&&(d=new p(d,g,null,n,f),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==qu&&(g=n.relatedTarget||n.fromElement)&&(Rr(g)||g[bi]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Rr(g):null,g!==null&&(m=Wr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=Zd,y="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=Qd,y="onPointerLeave",u="onPointerEnter",_="pointer"),m=p==null?d:vs(p),x=g==null?d:vs(g),d=new v(y,_+"leave",p,n,f),d.target=m,d.relatedTarget=x,y=null,Rr(f)===c&&(v=new v(u,_+"enter",g,n,f),v.target=x,v.relatedTarget=m,y=v),m=y,p&&g)t:{for(v=p,u=g,_=0,x=v;x;x=Zr(x))_++;for(x=0,y=u;y;y=Zr(y))x++;for(;0<_-x;)v=Zr(v),_--;for(;0<x-_;)u=Zr(u),x--;for(;_--;){if(v===u||u!==null&&v===u.alternate)break t;v=Zr(v),u=Zr(u)}v=null}else v=null;p!==null&&up(h,d,p,v,!1),g!==null&&m!==null&&up(h,m,g,v,!0)}}e:{if(d=c?vs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=Ox;else if(np(d))if(e_)C=Hx;else{C=zx;var A=kx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=Bx);if(C&&(C=C(t,c))){Qg(h,C,n,f);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Gu(d,"number",d.value)}switch(A=c?vs(c):window,t){case"focusin":(np(A)||A.contentEditable==="true")&&(gs=A,tf=c,Lo=null);break;case"focusout":Lo=tf=gs=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,ap(h,n,f);break;case"selectionchange":if(Wx)break;case"keydown":case"keyup":ap(h,n,f)}var R;if(zh)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ms?Zg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Kg&&n.locale!=="ko"&&(ms||b!=="onCompositionStart"?b==="onCompositionEnd"&&ms&&(R=$g()):(qi=f,Fh="value"in qi?qi.value:qi.textContent,ms=!0)),A=Fl(c,b),0<A.length&&(b=new Jd(b,t,null,n,f),h.push({event:b,listeners:A}),R?b.data=R:(R=Jg(n),R!==null&&(b.data=R)))),(R=Dx?Nx(t,n):Ix(t,n))&&(c=Fl(c,"onBeforeInput"),0<c.length&&(f=new Jd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=R))}u_(h,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Go(t,n),s!=null&&i.unshift(Ko(t,s,r)),s=Go(t,e),s!=null&&i.push(Ko(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function up(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Go(n,s),l!=null&&o.unshift(Ko(n,l,a))):r||(l=Go(n,s),l!=null&&o.push(Ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var qx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function fp(t){return(typeof t=="string"?t:""+t).replace(qx,`
`).replace($x,"")}function La(t,e,n){if(e=fp(e),fp(t)!==e&&n)throw Error(pe(425))}function Ol(){}var rf=null,sf=null;function of(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var af=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,Zx=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(t){return hp.resolve(null).then(t).catch(Jx)}:af;function Jx(t){setTimeout(function(){throw t})}function Gc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),jo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);jo(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),ii="__reactFiber$"+Js,Zo="__reactProps$"+Js,bi="__reactContainer$"+Js,lf="__reactEvents$"+Js,Qx="__reactListeners$"+Js,ey="__reactHandles$"+Js;function Rr(t){var e=t[ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dp(t);t!==null;){if(n=t[ii])return n;t=dp(t)}return e}t=n,n=t.parentNode}return null}function ga(t){return t=t[ii]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(pe(33))}function fc(t){return t[Zo]||null}var cf=[],xs=-1;function hr(t){return{current:t}}function gt(t){0>xs||(t.current=cf[xs],cf[xs]=null,xs--)}function dt(t,e){xs++,cf[xs]=t.current,t.current=e}var lr={},Kt=hr(lr),un=hr(!1),Ir=lr;function ks(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function kl(){gt(un),gt(Kt)}function pp(t,e,n){if(Kt.current!==lr)throw Error(pe(168));dt(Kt,e),dt(un,n)}function h_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(pe(108,kv(t)||"Unknown",r));return wt({},n,i)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Ir=Kt.current,dt(Kt,t),dt(un,un.current),!0}function mp(t,e,n){var i=t.stateNode;if(!i)throw Error(pe(169));n?(t=h_(t,e,Ir),i.__reactInternalMemoizedMergedChildContext=t,gt(un),gt(Kt),dt(Kt,t)):gt(un),dt(un,n)}var Si=null,hc=!1,Wc=!1;function d_(t){Si===null?Si=[t]:Si.push(t)}function ty(t){hc=!0,d_(t)}function dr(){if(!Wc&&Si!==null){Wc=!0;var t=0,e=at;try{var n=Si;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,hc=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),kg(Dh,dr),r}finally{at=e,Wc=!1}}return null}var ys=[],Ss=0,Bl=null,Hl=0,Ln=[],Dn=0,Ur=null,Ei=1,wi="";function Sr(t,e){ys[Ss++]=Hl,ys[Ss++]=Bl,Bl=t,Hl=e}function p_(t,e,n){Ln[Dn++]=Ei,Ln[Dn++]=wi,Ln[Dn++]=Ur,Ur=t;var i=Ei;t=wi;var r=32-Kn(i)-1;i&=~(1<<r),n+=1;var s=32-Kn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-Kn(e)+r|n<<r|i,wi=s+t}else Ei=1<<s|n<<r|i,wi=t}function Hh(t){t.return!==null&&(Sr(t,1),p_(t,1,0))}function Vh(t){for(;t===Bl;)Bl=ys[--Ss],ys[Ss]=null,Hl=ys[--Ss],ys[Ss]=null;for(;t===Ur;)Ur=Ln[--Dn],Ln[Dn]=null,wi=Ln[--Dn],Ln[Dn]=null,Ei=Ln[--Dn],Ln[Dn]=null}var Sn=null,yn=null,_t=!1,Xn=null;function m_(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:Ei,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function uf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ff(t){if(_t){var e=yn;if(e){var n=e;if(!gp(t,e)){if(uf(t))throw Error(pe(418));e=er(n.nextSibling);var i=Sn;e&&gp(t,e)?m_(i,n):(t.flags=t.flags&-4097|2,_t=!1,Sn=t)}}else{if(uf(t))throw Error(pe(418));t.flags=t.flags&-4097|2,_t=!1,Sn=t}}}function _p(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function Da(t){if(t!==Sn)return!1;if(!_t)return _p(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!of(t.type,t.memoizedProps)),e&&(e=yn)){if(uf(t))throw g_(),Error(pe(418));for(;e;)m_(t,e),e=er(e.nextSibling)}if(_p(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?er(t.stateNode.nextSibling):null;return!0}function g_(){for(var t=yn;t;)t=er(t.nextSibling)}function zs(){yn=Sn=null,_t=!1}function Gh(t){Xn===null?Xn=[t]:Xn.push(t)}var ny=Di.ReactCurrentBatchConfig;function fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var i=n.stateNode}if(!i)throw Error(pe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,t))}return t}function Na(t,e){throw t=Object.prototype.toString.call(e),Error(pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vp(t){var e=t._init;return e(t._payload)}function __(t){function e(u,_){if(t){var x=u.deletions;x===null?(u.deletions=[_],u.flags|=16):x.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=rr(u,_),u.index=0,u.sibling=null,u}function s(u,_,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<_?(u.flags|=2,_):x):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,x,y){return _===null||_.tag!==6?(_=Zc(x,u.mode,y),_.return=u,_):(_=r(_,x),_.return=u,_)}function l(u,_,x,y){var C=x.type;return C===ps?f(u,_,x.props.children,y,x.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vi&&vp(C)===_.type)?(y=r(_,x.props),y.ref=fo(u,_,x),y.return=u,y):(y=El(x.type,x.key,x.props,null,u.mode,y),y.ref=fo(u,_,x),y.return=u,y)}function c(u,_,x,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=Jc(x,u.mode,y),_.return=u,_):(_=r(_,x.children||[]),_.return=u,_)}function f(u,_,x,y,C){return _===null||_.tag!==7?(_=Nr(x,u.mode,y,C),_.return=u,_):(_=r(_,x),_.return=u,_)}function h(u,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Zc(""+_,u.mode,x),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ma:return x=El(_.type,_.key,_.props,null,u.mode,x),x.ref=fo(u,null,_),x.return=u,x;case ds:return _=Jc(_,u.mode,x),_.return=u,_;case Vi:var y=_._init;return h(u,y(_._payload),x)}if(Mo(_)||oo(_))return _=Nr(_,u.mode,x,null),_.return=u,_;Na(u,_)}return null}function d(u,_,x,y){var C=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(u,_,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ma:return x.key===C?l(u,_,x,y):null;case ds:return x.key===C?c(u,_,x,y):null;case Vi:return C=x._init,d(u,_,C(x._payload),y)}if(Mo(x)||oo(x))return C!==null?null:f(u,_,x,y,null);Na(u,x)}return null}function p(u,_,x,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(x)||null,a(_,u,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ma:return u=u.get(y.key===null?x:y.key)||null,l(_,u,y,C);case ds:return u=u.get(y.key===null?x:y.key)||null,c(_,u,y,C);case Vi:var A=y._init;return p(u,_,x,A(y._payload),C)}if(Mo(y)||oo(y))return u=u.get(x)||null,f(_,u,y,C,null);Na(_,y)}return null}function g(u,_,x,y){for(var C=null,A=null,R=_,b=_=0,E=null;R!==null&&b<x.length;b++){R.index>b?(E=R,R=null):E=R.sibling;var M=d(u,R,x[b],y);if(M===null){R===null&&(R=E);break}t&&R&&M.alternate===null&&e(u,R),_=s(M,_,b),A===null?C=M:A.sibling=M,A=M,R=E}if(b===x.length)return n(u,R),_t&&Sr(u,b),C;if(R===null){for(;b<x.length;b++)R=h(u,x[b],y),R!==null&&(_=s(R,_,b),A===null?C=R:A.sibling=R,A=R);return _t&&Sr(u,b),C}for(R=i(u,R);b<x.length;b++)E=p(R,u,b,x[b],y),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?b:E.key),_=s(E,_,b),A===null?C=E:A.sibling=E,A=E);return t&&R.forEach(function(N){return e(u,N)}),_t&&Sr(u,b),C}function v(u,_,x,y){var C=oo(x);if(typeof C!="function")throw Error(pe(150));if(x=C.call(x),x==null)throw Error(pe(151));for(var A=C=null,R=_,b=_=0,E=null,M=x.next();R!==null&&!M.done;b++,M=x.next()){R.index>b?(E=R,R=null):E=R.sibling;var N=d(u,R,M.value,y);if(N===null){R===null&&(R=E);break}t&&R&&N.alternate===null&&e(u,R),_=s(N,_,b),A===null?C=N:A.sibling=N,A=N,R=E}if(M.done)return n(u,R),_t&&Sr(u,b),C;if(R===null){for(;!M.done;b++,M=x.next())M=h(u,M.value,y),M!==null&&(_=s(M,_,b),A===null?C=M:A.sibling=M,A=M);return _t&&Sr(u,b),C}for(R=i(u,R);!M.done;b++,M=x.next())M=p(R,u,b,M.value,y),M!==null&&(t&&M.alternate!==null&&R.delete(M.key===null?b:M.key),_=s(M,_,b),A===null?C=M:A.sibling=M,A=M);return t&&R.forEach(function(z){return e(u,z)}),_t&&Sr(u,b),C}function m(u,_,x,y){if(typeof x=="object"&&x!==null&&x.type===ps&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ma:e:{for(var C=x.key,A=_;A!==null;){if(A.key===C){if(C=x.type,C===ps){if(A.tag===7){n(u,A.sibling),_=r(A,x.props.children),_.return=u,u=_;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vi&&vp(C)===A.type){n(u,A.sibling),_=r(A,x.props),_.ref=fo(u,A,x),_.return=u,u=_;break e}n(u,A);break}else e(u,A);A=A.sibling}x.type===ps?(_=Nr(x.props.children,u.mode,y,x.key),_.return=u,u=_):(y=El(x.type,x.key,x.props,null,u.mode,y),y.ref=fo(u,_,x),y.return=u,u=y)}return o(u);case ds:e:{for(A=x.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(u,_.sibling),_=r(_,x.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Jc(x,u.mode,y),_.return=u,u=_}return o(u);case Vi:return A=x._init,m(u,_,A(x._payload),y)}if(Mo(x))return g(u,_,x,y);if(oo(x))return v(u,_,x,y);Na(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,x),_.return=u,u=_):(n(u,_),_=Zc(x,u.mode,y),_.return=u,u=_),o(u)):n(u,_)}return m}var Bs=__(!0),v_=__(!1),Vl=hr(null),Gl=null,Ms=null,Wh=null;function Xh(){Wh=Ms=Gl=null}function jh(t){var e=Vl.current;gt(Vl),t._currentValue=e}function hf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Gl=t,Wh=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Wh!==t)if(t={context:t,memoizedValue:e,next:null},Ms===null){if(Gl===null)throw Error(pe(308));Ms=t,Gl.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return e}var Cr=null;function Yh(t){Cr===null?Cr=[t]:Cr.push(t)}function x_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Yh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gi=!1;function qh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Yh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nh(t,n)}}function xp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,i){var r=t.updateQueue;Gi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=wt({},h,d);break e;case 2:Gi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Or|=o,t.lanes=o,t.memoizedState=h}}function yp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(pe(191,r));r.call(i)}}}var _a={},ai=hr(_a),Jo=hr(_a),Qo=hr(_a);function br(t){if(t===_a)throw Error(pe(174));return t}function $h(t,e){switch(dt(Qo,e),dt(Jo,t),dt(ai,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xu(e,t)}gt(ai),dt(ai,e)}function Hs(){gt(ai),gt(Jo),gt(Qo)}function S_(t){br(Qo.current);var e=br(ai.current),n=Xu(e,t.type);e!==n&&(dt(Jo,t),dt(ai,n))}function Kh(t){Jo.current===t&&(gt(ai),gt(Jo))}var St=hr(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xc=[];function Zh(){for(var t=0;t<Xc.length;t++)Xc[t]._workInProgressVersionPrimary=null;Xc.length=0}var vl=Di.ReactCurrentDispatcher,jc=Di.ReactCurrentBatchConfig,Fr=0,Et=null,Dt=null,kt=null,jl=!1,Do=!1,ea=0,iy=0;function Wt(){throw Error(pe(321))}function Jh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function Qh(t,e,n,i,r,s){if(Fr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?ay:ly,t=n(i,r),Do){s=0;do{if(Do=!1,ea=0,25<=s)throw Error(pe(301));s+=1,kt=Dt=null,e.updateQueue=null,vl.current=cy,t=n(i,r)}while(Do)}if(vl.current=Yl,e=Dt!==null&&Dt.next!==null,Fr=0,kt=Dt=Et=null,jl=!1,e)throw Error(pe(300));return t}function ed(){var t=ea!==0;return ea=0,t}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Et.memoizedState=kt=t:kt=kt.next=t,kt}function Fn(){if(Dt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=kt===null?Et.memoizedState:kt.next;if(e!==null)kt=e,Dt=t;else{if(t===null)throw Error(pe(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},kt===null?Et.memoizedState=kt=t:kt=kt.next=t}return kt}function ta(t,e){return typeof e=="function"?e(t):e}function Yc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Fr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Et.lanes|=f,Or|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Qn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,Or|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Qn(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function M_(){}function E_(t,e){var n=Et,i=Fn(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,td(A_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,na(9,T_.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(pe(349));Fr&30||w_(n,e,r)}return r}function w_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function T_(t,e,n,i){e.value=n,e.getSnapshot=i,R_(e)&&C_(t)}function A_(t,e,n){return n(function(){R_(e)&&C_(t)})}function R_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function C_(t){var e=Pi(t,1);e!==null&&Zn(e,t,1,-1)}function Sp(t){var e=ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=oy.bind(null,Et,t),[e.memoizedState,t]}function na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function b_(){return Fn().memoizedState}function xl(t,e,n,i){var r=ti();Et.flags|=t,r.memoizedState=na(1|e,n,void 0,i===void 0?null:i)}function dc(t,e,n,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var o=Dt.memoizedState;if(s=o.destroy,i!==null&&Jh(i,o.deps)){r.memoizedState=na(e,n,s,i);return}}Et.flags|=t,r.memoizedState=na(1|e,n,s,i)}function Mp(t,e){return xl(8390656,8,t,e)}function td(t,e){return dc(2048,8,t,e)}function P_(t,e){return dc(4,2,t,e)}function L_(t,e){return dc(4,4,t,e)}function D_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function N_(t,e,n){return n=n!=null?n.concat([t]):null,dc(4,4,D_.bind(null,e,t),n)}function nd(){}function I_(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function U_(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function F_(t,e,n){return Fr&21?(Qn(n,e)||(n=Hg(),Et.lanes|=n,Or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function ry(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=jc.transition;jc.transition={};try{t(!1),e()}finally{at=n,jc.transition=i}}function O_(){return Fn().memoizedState}function sy(t,e,n){var i=ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},k_(t))z_(e,n);else if(n=x_(t,e,n,i),n!==null){var r=tn();Zn(n,t,i,r),B_(n,e,i)}}function oy(t,e,n){var i=ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(k_(t))z_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Qn(a,o)){var l=e.interleaved;l===null?(r.next=r,Yh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=x_(t,e,r,i),n!==null&&(r=tn(),Zn(n,t,i,r),B_(n,e,i))}}function k_(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function z_(t,e){Do=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nh(t,n)}}var Yl={readContext:Un,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},ay={readContext:Un,useCallback:function(t,e){return ti().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:Mp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,D_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sy.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=ti();return t={current:t},e.memoizedState=t},useState:Sp,useDebugValue:nd,useDeferredValue:function(t){return ti().memoizedState=t},useTransition:function(){var t=Sp(!1),e=t[0];return t=ry.bind(null,t[1]),ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=ti();if(_t){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=e(),zt===null)throw Error(pe(349));Fr&30||w_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Mp(A_.bind(null,i,s,t),[t]),i.flags|=2048,na(9,T_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ti(),e=zt.identifierPrefix;if(_t){var n=wi,i=Ei;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ly={readContext:Un,useCallback:I_,useContext:Un,useEffect:td,useImperativeHandle:N_,useInsertionEffect:P_,useLayoutEffect:L_,useMemo:U_,useReducer:Yc,useRef:b_,useState:function(){return Yc(ta)},useDebugValue:nd,useDeferredValue:function(t){var e=Fn();return F_(e,Dt.memoizedState,t)},useTransition:function(){var t=Yc(ta)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:M_,useSyncExternalStore:E_,useId:O_,unstable_isNewReconciler:!1},cy={readContext:Un,useCallback:I_,useContext:Un,useEffect:td,useImperativeHandle:N_,useInsertionEffect:P_,useLayoutEffect:L_,useMemo:U_,useReducer:qc,useRef:b_,useState:function(){return qc(ta)},useDebugValue:nd,useDeferredValue:function(t){var e=Fn();return Dt===null?e.memoizedState=t:F_(e,Dt.memoizedState,t)},useTransition:function(){var t=qc(ta)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:M_,useSyncExternalStore:E_,useId:O_,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function df(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pc={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=ir(t),s=Ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(Zn(e,t,r,i),_l(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=ir(t),s=Ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(Zn(e,t,r,i),_l(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=ir(t),r=Ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=tr(t,r,i),e!==null&&(Zn(e,t,i,n),_l(e,t,i))}};function Ep(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!qo(n,i)||!qo(r,s):!0}function H_(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=fn(e)?Ir:Kt.current,i=e.contextTypes,s=(i=i!=null)?ks(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function wp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&pc.enqueueReplaceState(e,e.state,null)}function pf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},qh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=fn(e)?Ir:Kt.current,r.context=ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(df(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&pc.enqueueReplaceState(r,r.state,null),Wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,e){try{var n="",i=e;do n+=Ov(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function $c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uy=typeof WeakMap=="function"?WeakMap:Map;function V_(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){$l||($l=!0,Tf=i),mf(t,e)},n}function G_(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){mf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mf(t,e),typeof i!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new uy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=wy.bind(null,t,e,n),e.then(t,t))}function Ap(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var fy=Di.ReactCurrentOwner,cn=!1;function en(t,e,n,i){e.child=t===null?v_(e,null,n,i):Bs(e,t.child,n,i)}function Cp(t,e,n,i,r){n=n.render;var s=e.ref;return Ds(e,r),i=Qh(t,e,n,i,s,r),n=ed(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(_t&&n&&Hh(e),e.flags|=1,en(t,e,i,r),e.child)}function bp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ud(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,W_(t,e,s,i,r)):(t=El(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qo,n(o,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function W_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(qo(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Li(t,e,r)}return gf(t,e,n,i,r)}function X_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(ws,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(ws,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(ws,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(ws,vn),vn|=i;return en(t,e,r,n),e.child}function j_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gf(t,e,n,i,r){var s=fn(n)?Ir:Kt.current;return s=ks(e,s),Ds(e,r),n=Qh(t,e,n,i,s,r),i=ed(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(_t&&i&&Hh(e),e.flags|=1,en(t,e,n,r),e.child)}function Pp(t,e,n,i,r){if(fn(n)){var s=!0;zl(e)}else s=!1;if(Ds(e,r),e.stateNode===null)yl(t,e),H_(e,n,i),pf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=fn(n)?Ir:Kt.current,c=ks(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&wp(e,o,i,c),Gi=!1;var d=e.memoizedState;o.state=d,Wl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||un.current||Gi?(typeof f=="function"&&(df(e,n,f,i),l=e.memoizedState),(a=Gi||Ep(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,y_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=fn(n)?Ir:Kt.current,l=ks(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&wp(e,o,i,l),Gi=!1,d=e.memoizedState,o.state=d,Wl(e,i,o,r);var g=e.memoizedState;a!==h||d!==g||un.current||Gi?(typeof p=="function"&&(df(e,n,p,i),g=e.memoizedState),(c=Gi||Ep(e,n,c,i,d,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return _f(t,e,n,i,s,r)}function _f(t,e,n,i,r,s){j_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&mp(e,n,!1),Li(t,e,s);i=e.stateNode,fy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,a,s)):en(t,e,a,s),e.memoizedState=i.state,r&&mp(e,n,!0),e.child}function Y_(t){var e=t.stateNode;e.pendingContext?pp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pp(t,e.context,!1),$h(t,e.containerInfo)}function Lp(t,e,n,i,r){return zs(),Gh(r),e.flags|=256,en(t,e,n,i),e.child}var vf={dehydrated:null,treeContext:null,retryLane:0};function xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function q_(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(St,r&1),t===null)return ff(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_c(o,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xf(n),e.memoizedState=vf,t):id(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=rr(a,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vf,i}return s=t.child,t=s.sibling,i=rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function id(t,e){return e=_c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ia(t,e,n,i){return i!==null&&Gh(i),Bs(e,t.child,null,n),t=id(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=$c(Error(pe(422))),Ia(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=_c({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Bs(e,t.child,null,o),e.child.memoizedState=xf(o),e.memoizedState=vf,s);if(!(e.mode&1))return Ia(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(pe(419)),i=$c(s,i,void 0),Ia(t,e,o,i)}if(a=(o&t.childLanes)!==0,cn||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),Zn(i,t,r,-1))}return cd(),i=$c(Error(pe(421))),Ia(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ty.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=er(r.nextSibling),Sn=e,_t=!0,Xn=null,t!==null&&(Ln[Dn++]=Ei,Ln[Dn++]=wi,Ln[Dn++]=Ur,Ei=t.id,wi=t.overflow,Ur=e),e=id(e,i.children),e.flags|=4096,e)}function Dp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hf(t.return,e,n)}function Kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function $_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dp(t,n,e);else if(t.tag===19)Dp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Kc(e,!0,n,null,s);break;case"together":Kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(pe(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dy(t,e,n){switch(e.tag){case 3:Y_(e),zs();break;case 5:S_(e);break;case 1:fn(e.type)&&zl(e);break;case 4:$h(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Vl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?q_(t,e,n):(dt(St,St.current&1),t=Li(t,e,n),t!==null?t.sibling:null);dt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return $_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,X_(t,e,n)}return Li(t,e,n)}var K_,yf,Z_,J_;K_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yf=function(){};Z_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,br(ai.current);var s=null;switch(n){case"input":r=Hu(t,r),i=Hu(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Wu(t,r),i=Wu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ol)}ju(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ho.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};J_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ho(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function py(t,e,n){var i=e.pendingProps;switch(Vh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return fn(e.type)&&kl(),Xt(e),null;case 3:return i=e.stateNode,Hs(),gt(un),gt(Kt),Zh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(Cf(Xn),Xn=null))),yf(t,e),Xt(e),null;case 5:Kh(e);var r=br(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)Z_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(pe(166));return Xt(e),null}if(t=br(ai.current),Da(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ii]=e,i[Zo]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<wo.length;r++)mt(wo[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":Hd(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Gd(i,s),mt("invalid",i)}ju(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&La(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&La(i.textContent,a,t),r=["children",""+a]):Ho.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":Ea(i),Vd(i,s,!0);break;case"textarea":Ea(i),Wd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ag(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ii]=e,t[Zo]=i,K_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yu(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<wo.length;r++)mt(wo[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":Hd(t,i),r=Hu(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":Gd(t,i),r=Wu(t,i),mt("invalid",t);break;default:r=i}ju(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?bg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vo(t,l):typeof l=="number"&&Vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ho.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Rh(t,s,l,o))}switch(n){case"input":Ea(t),Vd(t,i,!1);break;case"textarea":Ea(t),Wd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)J_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(pe(166));if(n=br(Qo.current),br(ai.current),Da(e)){if(i=e.stateNode,n=e.memoizedProps,i[ii]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:La(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&La(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return Xt(e),null;case 13:if(gt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&yn!==null&&e.mode&1&&!(e.flags&128))g_(),zs(),e.flags|=98560,s=!1;else if(s=Da(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(pe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(pe(317));s[ii]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else Xn!==null&&(Cf(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Nt===0&&(Nt=3):cd())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Hs(),yf(t,e),t===null&&$o(e.stateNode.containerInfo),Xt(e),null;case 10:return jh(e.type._context),Xt(e),null;case 17:return fn(e.type)&&kl(),Xt(e),null;case 19:if(gt(St),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ho(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,ho(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>Gs&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return Xt(e),null}else 2*Rt()-s.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=St.current,dt(St,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return ld(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(pe(156,e.tag))}function my(t,e){switch(Vh(e),e.tag){case 1:return fn(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),gt(un),gt(Kt),Zh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kh(e),null;case 13:if(gt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(St),null;case 4:return Hs(),null;case 10:return jh(e.type._context),null;case 22:case 23:return ld(),null;case 24:return null;default:return null}}var Ua=!1,qt=!1,gy=typeof WeakSet=="function"?WeakSet:Set,De=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function Sf(t,e,n){try{n()}catch(i){At(t,e,i)}}var Np=!1;function _y(t,e){if(rf=Il,t=i_(),Bh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sf={focusedElem:t,selectionRange:n},Il=!1,De=e;De!==null;)if(e=De,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,De=t;else for(;De!==null;){e=De;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:Vn(e.type,v),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(y){At(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,De=t;break}De=e.return}return g=Np,Np=!1,g}function No(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Sf(e,n,s)}r=r.next}while(r!==i)}}function mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Mf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Q_(t){var e=t.alternate;e!==null&&(t.alternate=null,Q_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ii],delete e[Zo],delete e[lf],delete e[Qx],delete e[ey])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function e0(t){return t.tag===5||t.tag===3||t.tag===4}function Ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||e0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(i!==4&&(t=t.child,t!==null))for(Ef(t,e,n),t=t.sibling;t!==null;)Ef(t,e,n),t=t.sibling}function wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(wf(t,e,n),t=t.sibling;t!==null;)wf(t,e,n),t=t.sibling}var Bt=null,Wn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)t0(t,e,n),n=n.sibling}function t0(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(ac,n)}catch{}switch(n.tag){case 5:qt||Es(n,e);case 6:var i=Bt,r=Wn;Bt=null,Ii(t,e,n),Bt=i,Wn=r,Bt!==null&&(Wn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Wn?(t=Bt,n=n.stateNode,t.nodeType===8?Gc(t.parentNode,n):t.nodeType===1&&Gc(t,n),jo(t)):Gc(Bt,n.stateNode));break;case 4:i=Bt,r=Wn,Bt=n.stateNode.containerInfo,Wn=!0,Ii(t,e,n),Bt=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sf(n,e,o),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!qt&&(Es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Ii(t,e,n),qt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function Up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gy),e.forEach(function(i){var r=Ay.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Wn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Wn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Wn=!0;break e}a=a.return}if(Bt===null)throw Error(pe(160));t0(s,o,r),Bt=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)n0(e,t),e=e.sibling}function n0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),ei(t),i&4){try{No(3,t,t.return),mc(3,t)}catch(v){At(t,t.return,v)}try{No(5,t,t.return)}catch(v){At(t,t.return,v)}}break;case 1:kn(e,t),ei(t),i&512&&n!==null&&Es(n,n.return);break;case 5:if(kn(e,t),ei(t),i&512&&n!==null&&Es(n,n.return),t.flags&32){var r=t.stateNode;try{Vo(r,"")}catch(v){At(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&wg(r,s),Yu(a,o);var c=Yu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?bg(r,h):f==="dangerouslySetInnerHTML"?Rg(r,h):f==="children"?Vo(r,h):Rh(r,f,h,c)}switch(a){case"input":Vu(r,s);break;case"textarea":Tg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Cs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Cs(r,!!s.multiple,s.defaultValue,!0):Cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Zo]=s}catch(v){At(t,t.return,v)}}break;case 6:if(kn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(pe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){At(t,t.return,v)}}break;case 3:if(kn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(v){At(t,t.return,v)}break;case 4:kn(e,t),ei(t);break;case 13:kn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(od=Rt())),i&4&&Up(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||f,kn(e,t),qt=c):kn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(De=t,f=t.child;f!==null;){for(h=De=f;De!==null;){switch(d=De,p=d.child,d.tag){case 0:case 11:case 14:case 15:No(4,d,d.return);break;case 1:Es(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){At(i,n,v)}}break;case 5:Es(d,d.return);break;case 22:if(d.memoizedState!==null){Op(h);continue}}p!==null?(p.return=d,De=p):Op(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Cg("display",o))}catch(v){At(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){At(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kn(e,t),ei(t),i&4&&Up(t);break;case 21:break;default:kn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(e0(n)){var i=n;break e}n=n.return}throw Error(pe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Vo(r,""),i.flags&=-33);var s=Ip(t);wf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ip(t);Ef(t,a,o);break;default:throw Error(pe(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vy(t,e,n){De=t,i0(t)}function i0(t,e,n){for(var i=(t.mode&1)!==0;De!==null;){var r=De,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ua;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=Ua;var c=qt;if(Ua=o,(qt=l)&&!c)for(De=r;De!==null;)o=De,l=o.child,o.tag===22&&o.memoizedState!==null?kp(r):l!==null?(l.return=o,De=l):kp(r);for(;s!==null;)De=s,i0(s),s=s.sibling;De=r,Ua=a,qt=c}Fp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,De=s):Fp(t)}}function Fp(t){for(;De!==null;){var e=De;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||mc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&jo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}qt||e.flags&512&&Mf(e)}catch(d){At(e,e.return,d)}}if(e===t){De=null;break}if(n=e.sibling,n!==null){n.return=e.return,De=n;break}De=e.return}}function Op(t){for(;De!==null;){var e=De;if(e===t){De=null;break}var n=e.sibling;if(n!==null){n.return=e.return,De=n;break}De=e.return}}function kp(t){for(;De!==null;){var e=De;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mc(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{Mf(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{Mf(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){De=null;break}var a=e.sibling;if(a!==null){a.return=e.return,De=a;break}De=e.return}}var xy=Math.ceil,ql=Di.ReactCurrentDispatcher,rd=Di.ReactCurrentOwner,In=Di.ReactCurrentBatchConfig,it=0,zt=null,Pt=null,Ht=0,vn=0,ws=hr(0),Nt=0,ia=null,Or=0,gc=0,sd=0,Io=null,ln=null,od=0,Gs=1/0,yi=null,$l=!1,Tf=null,nr=null,Fa=!1,$i=null,Kl=0,Uo=0,Af=null,Sl=-1,Ml=0;function tn(){return it&6?Rt():Sl!==-1?Sl:Sl=Rt()}function ir(t){return t.mode&1?it&2&&Ht!==0?Ht&-Ht:ny.transition!==null?(Ml===0&&(Ml=Hg()),Ml):(t=at,t!==0||(t=window.event,t=t===void 0?16:qg(t.type)),t):1}function Zn(t,e,n,i){if(50<Uo)throw Uo=0,Af=null,Error(pe(185));pa(t,n,i),(!(it&2)||t!==zt)&&(t===zt&&(!(it&2)&&(gc|=n),Nt===4&&ji(t,Ht)),hn(t,i),n===1&&it===0&&!(e.mode&1)&&(Gs=Rt()+500,hc&&dr()))}function hn(t,e){var n=t.callbackNode;nx(t,e);var i=Nl(t,t===zt?Ht:0);if(i===0)n!==null&&Yd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Yd(n),e===1)t.tag===0?ty(zp.bind(null,t)):d_(zp.bind(null,t)),Zx(function(){!(it&6)&&dr()}),n=null;else{switch(Vg(i)){case 1:n=Dh;break;case 4:n=zg;break;case 16:n=Dl;break;case 536870912:n=Bg;break;default:n=Dl}n=f0(n,r0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function r0(t,e){if(Sl=-1,Ml=0,it&6)throw Error(pe(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var i=Nl(t,t===zt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Zl(t,i);else{e=i;var r=it;it|=2;var s=o0();(zt!==t||Ht!==e)&&(yi=null,Gs=Rt()+500,Dr(t,e));do try{My();break}catch(a){s0(t,a)}while(!0);Xh(),ql.current=s,it=r,Pt!==null?e=0:(zt=null,Ht=0,e=Nt)}if(e!==0){if(e===2&&(r=Ju(t),r!==0&&(i=r,e=Rf(t,r))),e===1)throw n=ia,Dr(t,0),ji(t,i),hn(t,Rt()),n;if(e===6)ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!yy(r)&&(e=Zl(t,i),e===2&&(s=Ju(t),s!==0&&(i=s,e=Rf(t,s))),e===1))throw n=ia,Dr(t,0),ji(t,i),hn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(pe(345));case 2:Mr(t,ln,yi);break;case 3:if(ji(t,i),(i&130023424)===i&&(e=od+500-Rt(),10<e)){if(Nl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=af(Mr.bind(null,t,ln,yi),e);break}Mr(t,ln,yi);break;case 4:if(ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Kn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*xy(i/1960))-i,10<i){t.timeoutHandle=af(Mr.bind(null,t,ln,yi),i);break}Mr(t,ln,yi);break;case 5:Mr(t,ln,yi);break;default:throw Error(pe(329))}}}return hn(t,Rt()),t.callbackNode===n?r0.bind(null,t):null}function Rf(t,e){var n=Io;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=ln,ln=n,e!==null&&Cf(e)),t}function Cf(t){ln===null?ln=t:ln.push.apply(ln,t)}function yy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(t,e){for(e&=~sd,e&=~gc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),i=1<<n;t[n]=-1,e&=~i}}function zp(t){if(it&6)throw Error(pe(327));Ns();var e=Nl(t,0);if(!(e&1))return hn(t,Rt()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var i=Ju(t);i!==0&&(e=i,n=Rf(t,i))}if(n===1)throw n=ia,Dr(t,0),ji(t,e),hn(t,Rt()),n;if(n===6)throw Error(pe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,ln,yi),hn(t,Rt()),null}function ad(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(Gs=Rt()+500,hc&&dr())}}function kr(t){$i!==null&&$i.tag===0&&!(it&6)&&Ns();var e=it;it|=1;var n=In.transition,i=at;try{if(In.transition=null,at=1,t)return t()}finally{at=i,In.transition=n,it=e,!(it&6)&&dr()}}function ld(){vn=ws.current,gt(ws)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Kx(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Vh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&kl();break;case 3:Hs(),gt(un),gt(Kt),Zh();break;case 5:Kh(i);break;case 4:Hs();break;case 13:gt(St);break;case 19:gt(St);break;case 10:jh(i.type._context);break;case 22:case 23:ld()}n=n.return}if(zt=t,Pt=t=rr(t.current,null),Ht=vn=e,Nt=0,ia=null,sd=gc=Or=0,ln=Io=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Cr=null}return t}function s0(t,e){do{var n=Pt;try{if(Xh(),vl.current=Yl,jl){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}jl=!1}if(Fr=0,kt=Dt=Et=null,Do=!1,ea=0,rd.current=null,n===null||n.return===null){Nt=1,ia=e,Pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Ap(o);if(p!==null){p.flags&=-257,Rp(p,o,a,s,e),p.mode&1&&Tp(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){Tp(s,c,e),cd();break e}l=Error(pe(426))}}else if(_t&&a.mode&1){var m=Ap(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Rp(m,o,a,s,e),Gh(Vs(l,a));break e}}s=l=Vs(l,a),Nt!==4&&(Nt=2),Io===null?Io=[s]:Io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=V_(s,l,e);xp(s,u);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(nr===null||!nr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=G_(s,a,e);xp(s,y);break e}}s=s.return}while(s!==null)}l0(n)}catch(C){e=C,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function o0(){var t=ql.current;return ql.current=Yl,t===null?Yl:t}function cd(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),zt===null||!(Or&268435455)&&!(gc&268435455)||ji(zt,Ht)}function Zl(t,e){var n=it;it|=2;var i=o0();(zt!==t||Ht!==e)&&(yi=null,Dr(t,e));do try{Sy();break}catch(r){s0(t,r)}while(!0);if(Xh(),it=n,ql.current=i,Pt!==null)throw Error(pe(261));return zt=null,Ht=0,Nt}function Sy(){for(;Pt!==null;)a0(Pt)}function My(){for(;Pt!==null&&!Yv();)a0(Pt)}function a0(t){var e=u0(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?l0(t):Pt=e,rd.current=null}function l0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=my(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Pt=null;return}}else if(n=py(n,e,vn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Nt===0&&(Nt=5)}function Mr(t,e,n){var i=at,r=In.transition;try{In.transition=null,at=1,Ey(t,e,n,i)}finally{In.transition=r,at=i}return null}function Ey(t,e,n,i){do Ns();while($i!==null);if(it&6)throw Error(pe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(pe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ix(t,s),t===zt&&(Pt=zt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fa||(Fa=!0,f0(Dl,function(){return Ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=at;at=1;var a=it;it|=4,rd.current=null,_y(t,n),n0(n,t),Gx(sf),Il=!!rf,sf=rf=null,t.current=n,vy(n),qv(),it=a,at=o,In.transition=s}else t.current=n;if(Fa&&(Fa=!1,$i=t,Kl=r),s=t.pendingLanes,s===0&&(nr=null),Zv(n.stateNode),hn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if($l)throw $l=!1,t=Tf,Tf=null,t;return Kl&1&&t.tag!==0&&Ns(),s=t.pendingLanes,s&1?t===Af?Uo++:(Uo=0,Af=t):Uo=0,dr(),null}function Ns(){if($i!==null){var t=Vg(Kl),e=In.transition,n=at;try{if(In.transition=null,at=16>t?16:t,$i===null)var i=!1;else{if(t=$i,$i=null,Kl=0,it&6)throw Error(pe(331));var r=it;for(it|=4,De=t.current;De!==null;){var s=De,o=s.child;if(De.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(De=c;De!==null;){var f=De;switch(f.tag){case 0:case 11:case 15:No(8,f,s)}var h=f.child;if(h!==null)h.return=f,De=h;else for(;De!==null;){f=De;var d=f.sibling,p=f.return;if(Q_(f),f===c){De=null;break}if(d!==null){d.return=p,De=d;break}De=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}De=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,De=o;else e:for(;De!==null;){if(s=De,s.flags&2048)switch(s.tag){case 0:case 11:case 15:No(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,De=u;break e}De=s.return}}var _=t.current;for(De=_;De!==null;){o=De;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,De=x;else e:for(o=_;De!==null;){if(a=De,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mc(9,a)}}catch(C){At(a,a.return,C)}if(a===o){De=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,De=y;break e}De=a.return}}if(it=r,dr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(ac,t)}catch{}i=!0}return i}finally{at=n,In.transition=e}}return!1}function Bp(t,e,n){e=Vs(n,e),e=V_(t,e,1),t=tr(t,e,1),e=tn(),t!==null&&(pa(t,1,e),hn(t,e))}function At(t,e,n){if(t.tag===3)Bp(t,t,n);else for(;e!==null;){if(e.tag===3){Bp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(nr===null||!nr.has(i))){t=Vs(n,t),t=G_(e,t,1),e=tr(e,t,1),t=tn(),e!==null&&(pa(e,1,t),hn(e,t));break}}e=e.return}}function wy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Ht&n)===n&&(Nt===4||Nt===3&&(Ht&130023424)===Ht&&500>Rt()-od?Dr(t,0):sd|=n),hn(t,e)}function c0(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=tn();t=Pi(t,e),t!==null&&(pa(t,e,n),hn(t,n))}function Ty(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),c0(t,n)}function Ay(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(pe(314))}i!==null&&i.delete(e),c0(t,n)}var u0;u0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,dy(t,e,n);cn=!!(t.flags&131072)}else cn=!1,_t&&e.flags&1048576&&p_(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yl(t,e),t=e.pendingProps;var r=ks(e,Kt.current);Ds(e,n),r=Qh(null,e,i,t,r,n);var s=ed();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,zl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qh(e),r.updater=pc,e.stateNode=r,r._reactInternals=e,pf(e,i,t,n),e=_f(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&Hh(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Cy(i),t=Vn(i,t),r){case 0:e=gf(null,e,i,t,n);break e;case 1:e=Pp(null,e,i,t,n);break e;case 11:e=Cp(null,e,i,t,n);break e;case 14:e=bp(null,e,i,Vn(i.type,t),n);break e}throw Error(pe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),gf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Pp(t,e,i,r,n);case 3:e:{if(Y_(e),t===null)throw Error(pe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,y_(t,e),Wl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vs(Error(pe(423)),e),e=Lp(t,e,i,n,r);break e}else if(i!==r){r=Vs(Error(pe(424)),e),e=Lp(t,e,i,n,r);break e}else for(yn=er(e.stateNode.containerInfo.firstChild),Sn=e,_t=!0,Xn=null,n=v_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zs(),i===r){e=Li(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return S_(e),t===null&&ff(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,of(i,r)?o=null:s!==null&&of(i,s)&&(e.flags|=32),j_(t,e),en(t,e,o,n),e.child;case 6:return t===null&&ff(e),null;case 13:return q_(t,e,n);case 4:return $h(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Bs(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Cp(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(Vl,i._currentValue),i._currentValue=o,s!==null)if(Qn(s.value,o)){if(s.children===r.children&&!un.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ai(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(pe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=Un(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),bp(t,e,i,r,n);case 15:return W_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),yl(t,e),e.tag=1,fn(i)?(t=!0,zl(e)):t=!1,Ds(e,n),H_(e,i,r),pf(e,i,r,n),_f(null,e,i,!0,t,n);case 19:return $_(t,e,n);case 22:return X_(t,e,n)}throw Error(pe(156,e.tag))};function f0(t,e){return kg(t,e)}function Ry(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new Ry(t,e,n,i)}function ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cy(t){if(typeof t=="function")return ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bh)return 11;if(t===Ph)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function El(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ud(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ps:return Nr(n.children,r,s,e);case Ch:o=8,r|=8;break;case Ou:return t=Nn(12,n,e,r|2),t.elementType=Ou,t.lanes=s,t;case ku:return t=Nn(13,n,e,r),t.elementType=ku,t.lanes=s,t;case zu:return t=Nn(19,n,e,r),t.elementType=zu,t.lanes=s,t;case Sg:return _c(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xg:o=10;break e;case yg:o=9;break e;case bh:o=11;break e;case Ph:o=14;break e;case Vi:o=16,i=null;break e}throw Error(pe(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function _c(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=Sg,t.lanes=n,t.stateNode={isHidden:!1},t}function Zc(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function by(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dc(0),this.expirationTimes=Dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function fd(t,e,n,i,r,s,o,a,l){return t=new by(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qh(s),t}function Py(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ds,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function h0(t){if(!t)return lr;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(pe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(pe(171))}if(t.tag===1){var n=t.type;if(fn(n))return h_(t,n,e)}return e}function d0(t,e,n,i,r,s,o,a,l){return t=fd(n,i,!0,t,r,s,o,a,l),t.context=h0(null),n=t.current,i=tn(),r=ir(n),s=Ai(i,r),s.callback=e??null,tr(n,s,r),t.current.lanes=r,pa(t,r,i),hn(t,i),t}function vc(t,e,n,i){var r=e.current,s=tn(),o=ir(r);return n=h0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=tr(r,e,o),t!==null&&(Zn(t,r,o,s),_l(t,r,o)),o}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hd(t,e){Hp(t,e),(t=t.alternate)&&Hp(t,e)}function Ly(){return null}var p0=typeof reportError=="function"?reportError:function(t){console.error(t)};function dd(t){this._internalRoot=t}xc.prototype.render=dd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(pe(409));vc(t,e,null,null)};xc.prototype.unmount=dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){vc(null,t,null,null)}),e[bi]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xi.length&&e!==0&&e<Xi[n].priority;n++);Xi.splice(n,0,t),n===0&&Yg(t)}};function pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function Dy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Jl(o);s.call(c)}}var o=d0(e,i,t,0,null,!1,!1,"",Vp);return t._reactRootContainer=o,t[bi]=o.current,$o(t.nodeType===8?t.parentNode:t),kr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Jl(l);a.call(c)}}var l=fd(t,0,!1,null,null,!1,!1,"",Vp);return t._reactRootContainer=l,t[bi]=l.current,$o(t.nodeType===8?t.parentNode:t),kr(function(){vc(e,l,n,i)}),l}function Sc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Jl(o);a.call(l)}}vc(e,o,t,r)}else o=Dy(n,e,t,r,i);return Jl(o)}Gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Eo(e.pendingLanes);n!==0&&(Nh(e,n|1),hn(e,Rt()),!(it&6)&&(Gs=Rt()+500,dr()))}break;case 13:kr(function(){var i=Pi(t,1);if(i!==null){var r=tn();Zn(i,t,1,r)}}),hd(t,1)}};Ih=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=tn();Zn(e,t,134217728,n)}hd(t,134217728)}};Wg=function(t){if(t.tag===13){var e=ir(t),n=Pi(t,e);if(n!==null){var i=tn();Zn(n,t,e,i)}hd(t,e)}};Xg=function(){return at};jg=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};$u=function(t,e,n){switch(e){case"input":if(Vu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=fc(i);if(!r)throw Error(pe(90));Eg(i),Vu(i,r)}}}break;case"textarea":Tg(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};Dg=ad;Ng=kr;var Ny={usingClientEntryPoint:!1,Events:[ga,vs,fc,Pg,Lg,ad]},po={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Iy={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fg(t),t===null?null:t.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||Ly,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{ac=Oa.inject(Iy),oi=Oa}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ny;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pd(e))throw Error(pe(200));return Py(t,e,null,n)};En.createRoot=function(t,e){if(!pd(t))throw Error(pe(299));var n=!1,i="",r=p0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=fd(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,$o(t.nodeType===8?t.parentNode:t),new dd(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(pe(188)):(t=Object.keys(t).join(","),Error(pe(268,t)));return t=Fg(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return kr(t)};En.hydrate=function(t,e,n){if(!yc(e))throw Error(pe(200));return Sc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!pd(t))throw Error(pe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=p0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=d0(e,null,t,1,n??null,r,!1,s,o),t[bi]=e.current,$o(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new xc(e)};En.render=function(t,e,n){if(!yc(e))throw Error(pe(200));return Sc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!yc(t))throw Error(pe(40));return t._reactRootContainer?(kr(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};En.unstable_batchedUpdates=ad;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!yc(n))throw Error(pe(200));if(t==null||t._reactInternals===void 0)throw Error(pe(38));return Sc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function m0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m0)}catch(t){console.error(t)}}m0(),mg.exports=En;var Uy=mg.exports,g0,Gp=Uy;g0=Gp.createRoot,Gp.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Xr=(t,e)=>{const n=Be.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},f)=>Be.createElement("svg",{ref:f,...Fy,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Oy(t)}`,a].join(" "),...c},[...e.map(([h,d])=>Be.createElement(h,d)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=Xr("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=Xr("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=Xr("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=Xr("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=Xr("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=Xr("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=Xr("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const md="180",Is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vy=0,Yp=1,Gy=2,_0=1,v0=2,xi=3,cr=0,dn=1,Yn=2,sr=0,Us=1,qp=2,$p=3,Kp=4,Wy=5,Tr=100,Xy=101,jy=102,Yy=103,qy=104,$y=200,Ky=201,Zy=202,Jy=203,bf=204,Pf=205,Qy=206,eS=207,tS=208,nS=209,iS=210,rS=211,sS=212,oS=213,aS=214,Lf=0,Df=1,Nf=2,Ws=3,If=4,Uf=5,Ff=6,Of=7,x0=0,lS=1,cS=2,or=0,uS=1,fS=2,hS=3,dS=4,pS=5,mS=6,gS=7,y0=300,Xs=301,js=302,kf=303,zf=304,Mc=306,Bf=1e3,Pr=1001,Hf=1002,Jn=1003,_S=1004,ka=1005,ri=1006,Qc=1007,Lr=1008,ci=1009,S0=1010,M0=1011,ra=1012,gd=1013,zr=1014,Ti=1015,va=1016,_d=1017,vd=1018,sa=1020,E0=35902,w0=35899,T0=1021,A0=1022,$n=1023,oa=1026,aa=1027,R0=1028,xd=1029,C0=1030,yd=1031,Sd=1033,wl=33776,Tl=33777,Al=33778,Rl=33779,Vf=35840,Gf=35841,Wf=35842,Xf=35843,jf=36196,Yf=37492,qf=37496,$f=37808,Kf=37809,Zf=37810,Jf=37811,Qf=37812,eh=37813,th=37814,nh=37815,ih=37816,rh=37817,sh=37818,oh=37819,ah=37820,lh=37821,ch=36492,uh=36494,fh=36495,hh=36283,dh=36284,ph=36285,mh=36286,vS=3200,xS=3201,b0=0,yS=1,Yi="",Pn="srgb",Ys="srgb-linear",Ql="linear",ct="srgb",Jr=7680,Zp=519,SS=512,MS=513,ES=514,P0=515,wS=516,TS=517,AS=518,RS=519,Jp=35044,Qp="300 es",si=2e3,ec=2001;class jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let em=1234567;const Fo=Math.PI/180,la=180/Math.PI;function Yr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Ye(t,e,n){return Math.max(e,Math.min(n,t))}function Md(t,e){return(t%e+e)%e}function CS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function bS(t,e,n){return t!==e?(n-t)/(e-t):0}function Oo(t,e,n){return(1-n)*t+n*e}function PS(t,e,n,i){return Oo(t,e,1-Math.exp(-n*i))}function LS(t,e=1){return e-Math.abs(Md(t,e*2)-e)}function DS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function NS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function IS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function US(t,e){return t+Math.random()*(e-t)}function FS(t){return t*(.5-Math.random())}function OS(t){t!==void 0&&(em=t);let e=em+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kS(t){return t*Fo}function zS(t){return t*la}function BS(t){return(t&t-1)===0&&t!==0}function HS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function VS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function GS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*f,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*f,a*c);break;case"XZX":t.set(a*f,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*f,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Hi={DEG2RAD:Fo,RAD2DEG:la,generateUUID:Yr,clamp:Ye,euclideanModulo:Md,mapLinear:CS,inverseLerp:bS,lerp:Oo,damp:PS,pingpong:LS,smoothstep:DS,smootherstep:NS,randInt:IS,randFloat:US,randFloatSpread:FS,seededRandom:OS,degToRad:kS,radToDeg:zS,isPowerOfTwo:BS,ceilPowerOfTwo:HS,floorPowerOfTwo:VS,setQuaternionFromProperEuler:GS,normalize:Jt,denormalize:hs};class ye{constructor(e=0,n=0){ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Br{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(h!==v||l!==d||c!==p||f!==g){let m=1-a;const u=l*d+c*p+f*g+h*v,_=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,u*_);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const y=a*_;if(l=l*m+d*y,c=c*m+p*y,f=f*m+g*y,h=h*m+v*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=C,c*=C,f*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+f*h+l*p-c*d,e[n+1]=l*g+f*d+c*h-a*p,e[n+2]=c*g+f*p+a*d-l*h,e[n+3]=f*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*p*g,this._y=c*p*h-d*f*g,this._z=c*f*g+d*p*h,this._w=c*f*h-d*p*g;break;case"YXZ":this._x=d*f*h+c*p*g,this._y=c*p*h-d*f*g,this._z=c*f*g-d*p*h,this._w=c*f*h+d*p*g;break;case"ZXY":this._x=d*f*h-c*p*g,this._y=c*p*h+d*f*g,this._z=c*f*g+d*p*h,this._w=c*f*h-d*p*g;break;case"ZYX":this._x=d*f*h-c*p*g,this._y=c*p*h+d*f*g,this._z=c*f*g-d*p*h,this._w=c*f*h+d*p*g;break;case"YZX":this._x=d*f*h+c*p*g,this._y=c*p*h+d*f*g,this._z=c*f*g-d*p*h,this._w=c*f*h-d*p*g;break;case"XZY":this._x=d*f*h-c*p*g,this._y=c*p*h-d*f*g,this._z=c*f*g+d*p*h,this._w=c*f*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eu.copy(this).projectOnVector(e),this.sub(eu)}reflect(e){return this.sub(eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eu=new D,tm=new Br;class Xe{constructor(e,n,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],u=r[6],_=r[1],x=r[4],y=r[7],C=r[2],A=r[5],R=r[8];return s[0]=o*v+a*_+l*C,s[3]=o*m+a*x+l*A,s[6]=o*u+a*y+l*R,s[1]=c*v+f*_+h*C,s[4]=c*m+f*x+h*A,s[7]=c*u+f*y+h*R,s[2]=d*v+p*_+g*C,s[5]=d*m+p*x+g*A,s[8]=d*u+p*y+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,p=c*s-o*l,g=n*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(tu.makeScale(e,n)),this}rotate(e){return this.premultiply(tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tu=new Xe;function L0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function tc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function WS(){const t=tc("canvas");return t.style.display="block",t}const nm={};function ca(t){t in nm||(nm[t]=!0,console.warn(t))}function XS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const im=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rm=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jS(){const t={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=Fs(r.r),r.g=Fs(r.g),r.b=Fs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?Ql:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ca("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ca("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ys]:{primaries:e,whitePoint:i,transfer:Ql,toXYZ:im,fromXYZ:rm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:im,fromXYZ:rm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),t}const st=jS();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Qr;class YS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qr===void 0&&(Qr=tc("canvas")),Qr.width=e.width,Qr.height=e.height;const r=Qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Qr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=tc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qS=0;class Ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nu(r[o].image)):s.push(nu(r[o]))}else s=nu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?YS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $S=0;const iu=new D;class nn extends jr{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Pr,r=Pr,s=ri,o=Lr,a=$n,l=ci,c=nn.DEFAULT_ANISOTROPY,f=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Yr(),this.name="",this.source=new Ed(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(iu).x}get height(){return this.source.getSize(iu).y}get depth(){return this.source.getSize(iu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bf:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case Hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bf:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case Hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=y0;nn.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,n=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(p+1)/2,C=(u+1)/2,A=(f+d)/4,R=(h+v)/4,b=(g+m)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=R/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-v)/_,this.z=(d-f)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this.w=Ye(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this.w=Ye(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KS extends jr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new ft(0,0,e,n),this.scissorTest=!1,this.viewport=new ft(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new nn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ed(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hr extends KS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class D0 extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZS extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Ba.subVectors(this.max,mo),es.subVectors(e.a,mo),ts.subVectors(e.b,mo),ns.subVectors(e.c,mo),Ui.subVectors(ts,es),Fi.subVectors(ns,ts),mr.subVectors(es,ns);let n=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-mr.z,mr.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,mr.z,0,-mr.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-mr.y,mr.x,0];return!ru(n,es,ts,ns,Ba)||(n=[1,0,0,0,1,0,0,0,1],!ru(n,es,ts,ns,Ba))?!1:(Ha.crossVectors(Ui,Fi),n=[Ha.x,Ha.y,Ha.z],ru(n,es,ts,ns,Ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pi=[new D,new D,new D,new D,new D,new D,new D,new D],zn=new D,za=new Qs,es=new D,ts=new D,ns=new D,Ui=new D,Fi=new D,mr=new D,mo=new D,Ba=new D,Ha=new D,gr=new D;function ru(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){gr.fromArray(t,s);const a=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),c=n.dot(gr),f=i.dot(gr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const JS=new Qs,go=new D,su=new D;class Ec{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):JS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const n=go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(su)),this.expandByPoint(go.copy(e.center).sub(su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const mi=new D,ou=new D,Va=new D,Oi=new D,au=new D,Ga=new D,lu=new D;class wd{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ou.copy(e).add(n).multiplyScalar(.5),Va.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(ou);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Va),a=Oi.dot(this.direction),l=-Oi.dot(Va),c=Oi.lengthSq(),f=Math.abs(1-o*o);let h,d,p,g;if(f>0)if(h=o*l-a,d=o*a-l,g=s*f,h>=0)if(d>=-g)if(d<=g){const v=1/f;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ou).addScaledVector(Va,d),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){au.subVectors(n,e),Ga.subVectors(i,e),lu.crossVectors(au,Ga);let o=this.direction.dot(lu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(Ga.crossVectors(Oi,Ga));if(l<0)return null;const c=a*this.direction.dot(au.cross(Oi));if(c<0||l+c>o)return null;const f=-a*Oi.dot(lu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,c,f,h,d,p,g,v,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,p,g,v,m)}set(e,n,i,r,s,o,a,l,c,f,h,d,p,g,v,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/is.setFromMatrixColumn(e,0).length(),s=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,p=o*h,g=a*f,v=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,g=c*f,v=c*h;n[0]=d+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=p*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,g=c*f,v=c*h;n[0]=d-v*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*f,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,p=o*h,g=a*f,v=a*h;n[0]=l*f,n[4]=g*c-p,n[8]=d*c+v,n[1]=l*h,n[5]=v*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*f,n[4]=v-d*h,n[8]=g*h+p,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*h+g,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+v,n[5]=o*f,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*f,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QS,e,e1)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),ki.crossVectors(i,gn),ki.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),ki.crossVectors(i,gn)),ki.normalize(),Wa.crossVectors(gn,ki),r[0]=ki.x,r[4]=Wa.x,r[8]=gn.x,r[1]=ki.y,r[5]=Wa.y,r[9]=gn.y,r[2]=ki.z,r[6]=Wa.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],u=i[14],_=i[3],x=i[7],y=i[11],C=i[15],A=r[0],R=r[4],b=r[8],E=r[12],M=r[1],N=r[5],z=r[9],X=r[13],se=r[2],k=r[6],j=r[10],te=r[14],U=r[3],Z=r[7],ae=r[11],ve=r[15];return s[0]=o*A+a*M+l*se+c*U,s[4]=o*R+a*N+l*k+c*Z,s[8]=o*b+a*z+l*j+c*ae,s[12]=o*E+a*X+l*te+c*ve,s[1]=f*A+h*M+d*se+p*U,s[5]=f*R+h*N+d*k+p*Z,s[9]=f*b+h*z+d*j+p*ae,s[13]=f*E+h*X+d*te+p*ve,s[2]=g*A+v*M+m*se+u*U,s[6]=g*R+v*N+m*k+u*Z,s[10]=g*b+v*z+m*j+u*ae,s[14]=g*E+v*X+m*te+u*ve,s[3]=_*A+x*M+y*se+C*U,s[7]=_*R+x*N+y*k+C*Z,s[11]=_*b+x*z+y*j+C*ae,s[15]=_*E+x*X+y*te+C*ve,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],u=e[15];return g*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*f-s*l*f)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],u=e[15],_=h*m*c-v*d*c+v*l*p-a*m*p-h*l*u+a*d*u,x=g*d*c-f*m*c-g*l*p+o*m*p+f*l*u-o*d*u,y=f*v*c-g*h*c+g*a*p-o*v*p-f*a*u+o*h*u,C=g*h*l-f*v*l-g*a*d+o*v*d+f*a*m-o*h*m,A=n*_+i*x+r*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=_*R,e[1]=(v*d*s-h*m*s-v*r*p+i*m*p+h*r*u-i*d*u)*R,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*u+i*l*u)*R,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*R,e[4]=x*R,e[5]=(f*m*s-g*d*s+g*r*p-n*m*p-f*r*u+n*d*u)*R,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*u-n*l*u)*R,e[7]=(o*d*s-f*l*s+f*r*c-n*d*c-o*r*p+n*l*p)*R,e[8]=y*R,e[9]=(g*h*s-f*v*s-g*i*p+n*v*p+f*i*u-n*h*u)*R,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*u+n*a*u)*R,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*p-n*a*p)*R,e[12]=C*R,e[13]=(f*v*r-g*h*r+g*i*d-n*v*d-f*i*m+n*h*m)*R,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*R,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,p=s*f,g=s*h,v=o*f,m=o*h,u=a*h,_=l*c,x=l*f,y=l*h,C=i.x,A=i.y,R=i.z;return r[0]=(1-(v+u))*C,r[1]=(p+y)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(d+u))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(g+x)*R,r[9]=(m-_)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=is.set(r[0],r[1],r[2]).length();const o=is.set(r[4],r[5],r[6]).length(),a=is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,f=1/o,h=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=f,Bn.elements[5]*=f,Bn.elements[6]*=f,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=si,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===si)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ec)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=si,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===si)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===ec)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const is=new D,Bn=new vt,QS=new D(0,0,0),e1=new D(1,1,1),ki=new D,Wa=new D,gn=new D,sm=new vt,om=new Br;class ui{constructor(e=0,n=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class N0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let t1=0;const am=new D,rs=new Br,gi=new vt,Xa=new D,_o=new D,n1=new D,i1=new Br,lm=new D(1,0,0),cm=new D(0,1,0),um=new D(0,0,1),fm={type:"added"},r1={type:"removed"},ss={type:"childadded",child:null},cu={type:"childremoved",child:null};class Vt extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new D,n=new ui,i=new Br,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Xe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(lm,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(um,e)}translateOnAxis(e,n){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(lm,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xa.copy(e):Xa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(_o,Xa,this.up):gi.lookAt(Xa,_o,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),rs.setFromRotationMatrix(gi),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fm),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(r1),cu.child=e,this.dispatchEvent(cu),cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fm),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,n1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,i1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new D(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new D,_i=new D,uu=new D,vi=new D,os=new D,as=new D,hm=new D,fu=new D,hu=new D,du=new D,pu=new ft,mu=new ft,gu=new ft;class qn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),_i.subVectors(i,n),uu.subVectors(e,n);const o=Hn.dot(Hn),a=Hn.dot(_i),l=Hn.dot(uu),c=_i.dot(_i),f=_i.dot(uu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*f)*d,g=(o*f-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return pu.setScalar(0),mu.setScalar(0),gu.setScalar(0),pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,i),gu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(pu,s.x),o.addScaledVector(mu,s.y),o.addScaledVector(gu,s.z),o}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),_i.subVectors(e,n),Hn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Hn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),as.subVectors(s,i),fu.subVectors(e,i);const l=os.dot(fu),c=as.dot(fu);if(l<=0&&c<=0)return n.copy(i);hu.subVectors(e,r);const f=os.dot(hu),h=as.dot(hu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(os,o);du.subVectors(e,s);const p=os.dot(du),g=as.dot(du);if(g>=0&&p<=g)return n.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(as,a);const m=f*g-p*h;if(m<=0&&h-f>=0&&p-g>=0)return hm.subVectors(s,r),a=(h-f)/(h-f+(p-g)),n.copy(r).addScaledVector(hm,a);const u=1/(m+v+d);return o=v*u,a=d*u,n.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ja={h:0,s:0,l:0};function _u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=Md(e,1),n=Ye(n,0,1),i=Ye(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=_u(o,s,e+1/3),this.g=_u(o,s,e),this.b=_u(o,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,n=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pn){const i=I0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return st.workingToColorSpace(Yt.copy(this),e),Math.round(Ye(Yt.r*255,0,255))*65536+Math.round(Ye(Yt.g*255,0,255))*256+Math.round(Ye(Yt.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Pn){st.workingToColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==Pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(ja);const i=Oo(zi.h,ja.h,n),r=Oo(zi.s,ja.s,n),s=Oo(zi.l,ja.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ze;Ze.NAMES=I0;let s1=0;class eo extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=Us,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bf,this.blendDst=Pf,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bf&&(i.blendSrc=this.blendSrc),this.blendDst!==Pf&&(i.blendDst=this.blendDst),this.blendEquation!==Tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ko extends eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=x0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new D,Ya=new ye;let o1=0;class li{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:o1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Jp,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ya.fromBufferAttribute(this,n),Ya.applyMatrix3(e),this.setXY(n,Ya.x,Ya.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=hs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=hs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=hs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=hs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=hs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),e}}class U0 extends li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class F0 extends li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends li{constructor(e,n,i){super(new Float32Array(e),n,i)}}let a1=0;const bn=new vt,vu=new Vt,ls=new D,_n=new Qs,vo=new Qs,Ot=new D;class On extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L0(e)?F0:U0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return vu.lookAt(e),vu.updateMatrix(),this.applyMatrix4(vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ec);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(_n.min,vo.min),_n.expandByPoint(Ot),Ot.addVectors(_n.max,vo.max),_n.expandByPoint(Ot)):(_n.expandByPoint(vo.min),_n.expandByPoint(vo.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ot.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),Ot.add(ls)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new D,l[b]=new D;const c=new D,f=new D,h=new D,d=new ye,p=new ye,g=new ye,v=new D,m=new D;function u(b,E,M){c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),f.sub(c),h.sub(c),p.sub(d),g.sub(d);const N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(v.copy(f).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(N),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(N),a[b].add(v),a[E].add(v),a[M].add(v),l[b].add(m),l[E].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,E=_.length;b<E;++b){const M=_[b],N=M.start,z=M.count;for(let X=N,se=N+z;X<se;X+=3)u(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const x=new D,y=new D,C=new D,A=new D;function R(b){C.fromBufferAttribute(r,b),A.copy(C);const E=a[b];x.copy(E),x.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(A,E);const N=y.dot(l[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,N)}for(let b=0,E=_.length;b<E;++b){const M=_[b],N=M.start,z=M.count;for(let X=N,se=N+z;X<se;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,f=new D,h=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*f;for(let u=0;u<f;u++)d[g++]=c[p++]}return new li(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new On,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dm=new vt,_r=new wd,qa=new Ec,pm=new D,$a=new D,Ka=new D,Za=new D,xu=new D,Ja=new D,mm=new D,Qa=new D;class bt extends Vt{constructor(e=new On,n=new ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(xu.fromBufferAttribute(h,e),o?Ja.addScaledVector(xu,f):Ja.addScaledVector(xu.sub(n),f))}n.add(Ja)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(qa.containsPoint(_r.origin)===!1&&(_r.intersectSphere(qa,pm)===null||_r.origin.distanceToSquared(pm)>(e.far-e.near)**2))&&(dm.copy(s).invert(),_r.copy(e.ray).applyMatrix4(dm),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],u=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=x;y<C;y+=3){const A=a.getX(y),R=a.getX(y+1),b=a.getX(y+2);r=el(this,u,e,i,c,f,h,A,R,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=el(this,o,e,i,c,f,h,_,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],u=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=x;y<C;y+=3){const A=y,R=y+1,b=y+2;r=el(this,u,e,i,c,f,h,A,R,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const _=m,x=m+1,y=m+2;r=el(this,o,e,i,c,f,h,_,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function l1(t,e,n,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cr,a),l===null)return null;Qa.copy(a),Qa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Qa);return c<n.near||c>n.far?null:{distance:c,point:Qa.clone(),object:t}}function el(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,$a),t.getVertexPosition(l,Ka),t.getVertexPosition(c,Za);const f=l1(t,e,n,i,$a,Ka,Za,mm);if(f){const h=new D;qn.getBarycoord(mm,$a,Ka,Za,h),r&&(f.uv=qn.getInterpolatedAttribute(r,a,l,c,h,new ye)),s&&(f.uv1=qn.getInterpolatedAttribute(s,a,l,c,h,new ye)),o&&(f.normal=qn.getInterpolatedAttribute(o,a,l,c,h,new D),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};qn.getNormal($a,Ka,Za,d.normal),f.face=d,f.barycoord=h}return f}class to extends On{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(h,2));function g(v,m,u,_,x,y,C,A,R,b,E){const M=y/R,N=C/b,z=y/2,X=C/2,se=A/2,k=R+1,j=b+1;let te=0,U=0;const Z=new D;for(let ae=0;ae<j;ae++){const ve=ae*N-X;for(let Ie=0;Ie<k;Ie++){const We=Ie*M-z;Z[v]=We*_,Z[m]=ve*x,Z[u]=se,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[u]=A>0?1:-1,f.push(Z.x,Z.y,Z.z),h.push(Ie/R),h.push(1-ae/b),te+=1}}for(let ae=0;ae<b;ae++)for(let ve=0;ve<R;ve++){const Ie=d+ve+k*ae,We=d+ve+k*(ae+1),qe=d+(ve+1)+k*(ae+1),$e=d+(ve+1)+k*ae;l.push(Ie,We,$e),l.push(We,qe,$e),U+=6}a.addGroup(p,U,E),p+=U,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function c1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function O0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const u1={clone:qs,merge:Qt};var f1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f1,this.fragmentShader=h1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=c1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class k0 extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new D,gm=new ye,_m=new ye;class xn extends k0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,gm,_m),n.subVectors(_m,gm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,us=1;class d1 extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new xn(cs,us,e,n);s.layers=this.layers,this.add(s);const o=new xn(cs,us,e,n);o.layers=this.layers,this.add(o);const a=new xn(cs,us,e,n);a.layers=this.layers,this.add(a);const l=new xn(cs,us,e,n);l.layers=this.layers,this.add(l);const c=new xn(cs,us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class z0 extends nn{constructor(e=[],n=Xs,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class p1 extends Hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new z0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new to(5,5,5),s=new ur({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:sr});s.uniforms.tEquirect.value=n;const o=new bt(r,s),a=n.minFilter;return n.minFilter===Lr&&(n.minFilter=ri),new d1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class jn extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m1={type:"move"};class yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Td{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=n,this.far=i}clone(){return new Td(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class g1 extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Su=new D,_1=new D,v1=new Xe;class Wi{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Su.subVectors(i,n).cross(_1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Su),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||v1.getNormalMatrix(e),r=this.coplanarPoint(Su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Ec,x1=new ye(.5,.5),tl=new D;class Ad{constructor(e=new Wi,n=new Wi,i=new Wi,r=new Wi,s=new Wi,o=new Wi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=si,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],p=s[7],g=s[8],v=s[9],m=s[10],u=s[11],_=s[12],x=s[13],y=s[14],C=s[15];if(r[0].setComponents(c-o,p-f,u-g,C-_).normalize(),r[1].setComponents(c+o,p+f,u+g,C+_).normalize(),r[2].setComponents(c+a,p+h,u+v,C+x).normalize(),r[3].setComponents(c-a,p-h,u-v,C-x).normalize(),i)r[4].setComponents(l,d,m,y).normalize(),r[5].setComponents(c-l,p-d,u-m,C-y).normalize();else if(r[4].setComponents(c-l,p-d,u-m,C-y).normalize(),n===si)r[5].setComponents(c+l,p+d,u+m,C+y).normalize();else if(n===ec)r[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const n=x1.distanceTo(e.center);return vr.radius=.7071067811865476+n,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(tl.x=r.normal.x>0?e.max.x:e.min.x,tl.y=r.normal.y>0?e.max.y:e.min.y,tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class B0 extends eo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nc=new D,ic=new D,vm=new vt,xo=new wd,nl=new Ec,Mu=new D,xm=new D;class y1 extends Vt{constructor(e=new On,n=new B0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)nc.fromBufferAttribute(n,r-1),ic.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=nc.distanceTo(ic);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(r),nl.radius+=s,e.ray.intersectsSphere(nl)===!1)return;vm.copy(r).invert(),xo.copy(e.ray).applyMatrix4(vm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const u=f.getX(v),_=f.getX(v+1),x=il(this,e,xo,l,u,_,v);x&&n.push(x)}if(this.isLineLoop){const v=f.getX(g-1),m=f.getX(p),u=il(this,e,xo,l,v,m,g-1);u&&n.push(u)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const u=il(this,e,xo,l,v,v+1,v);u&&n.push(u)}if(this.isLineLoop){const v=il(this,e,xo,l,g-1,p,g-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function il(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(nc.fromBufferAttribute(a,r),ic.fromBufferAttribute(a,s),n.distanceSqToSegment(nc,ic,Mu,xm)>i)return;Mu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Mu);if(!(c<e.near||c>e.far))return{distance:c,point:xm.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class rl extends nn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class H0 extends nn{constructor(e,n,i=zr,r,s,o,a=Jn,l=Jn,c,f=oa,h=1){if(f!==oa&&f!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ed(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class V0 extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rd extends On{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const x=new D,y=new D,C=new D;for(let A=0;A<n.length;A+=3)p(n[A+0],x),p(n[A+1],y),p(n[A+2],C),l(x,y,C,_)}function l(_,x,y,C){const A=C+1,R=[];for(let b=0;b<=A;b++){R[b]=[];const E=_.clone().lerp(y,b/A),M=x.clone().lerp(y,b/A),N=A-b;for(let z=0;z<=N;z++)z===0&&b===A?R[b][z]=E:R[b][z]=E.clone().lerp(M,z/N)}for(let b=0;b<A;b++)for(let E=0;E<2*(A-b)-1;E++){const M=Math.floor(E/2);E%2===0?(d(R[b][M+1]),d(R[b+1][M]),d(R[b][M])):(d(R[b][M+1]),d(R[b+1][M+1]),d(R[b+1][M]))}}function c(_){const x=new D;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(_),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function f(){const _=new D;for(let x=0;x<s.length;x+=3){_.x=s[x+0],_.y=s[x+1],_.z=s[x+2];const y=m(_)/2/Math.PI+.5,C=u(_)/Math.PI+.5;o.push(y,1-C)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){const x=o[_+0],y=o[_+2],C=o[_+4],A=Math.max(x,y,C),R=Math.min(x,y,C);A>.9&&R<.1&&(x<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function p(_,x){const y=_*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function g(){const _=new D,x=new D,y=new D,C=new D,A=new ye,R=new ye,b=new ye;for(let E=0,M=0;E<s.length;E+=9,M+=6){_.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),A.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),b.set(o[M+4],o[M+5]),C.copy(_).add(x).add(y).divideScalar(3);const N=m(C);v(A,M+0,_,N),v(R,M+2,x,N),v(b,M+4,y,N)}}function v(_,x,y,C){C<0&&_.x===1&&(o[x]=_.x-1),y.x===0&&y.z===0&&(o[x]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rd(e.vertices,e.indices,e.radius,e.details)}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],d=i[r+1]-f,p=(o-f)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ye:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new D,r=[],s=[],o=[],a=new D,l=new vt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ye(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ye(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Cd extends fi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ye){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*f-p*h+this.aX,c=d*h+p*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class S1 extends Cd{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function bd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,h){let d=(o-s)/c-(a-s)/(c+f)+(a-o)/f,p=(a-o)/f-(l-o)/(f+h)+(l-a)/h;d*=f,p*=f,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const sl=new D,Eu=new bd,wu=new bd,Tu=new bd;class G0 extends fi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(sl.subVectors(r[0],r[1]).add(r[0]),c=sl);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(sl.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=sl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(f),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Eu.initNonuniformCatmullRom(c.x,h.x,d.x,f.x,g,v,m),wu.initNonuniformCatmullRom(c.y,h.y,d.y,f.y,g,v,m),Tu.initNonuniformCatmullRom(c.z,h.z,d.z,f.z,g,v,m)}else this.curveType==="catmullrom"&&(Eu.initCatmullRom(c.x,h.x,d.x,f.x,this.tension),wu.initCatmullRom(c.y,h.y,d.y,f.y,this.tension),Tu.initCatmullRom(c.z,h.z,d.z,f.z,this.tension));return i.set(Eu.calc(l),wu.calc(l),Tu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ym(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function M1(t,e){const n=1-t;return n*n*e}function E1(t,e){return 2*(1-t)*t*e}function w1(t,e){return t*t*e}function zo(t,e,n,i){return M1(t,e)+E1(t,n)+w1(t,i)}function T1(t,e){const n=1-t;return n*n*n*e}function A1(t,e){const n=1-t;return 3*n*n*t*e}function R1(t,e){return 3*(1-t)*t*t*e}function C1(t,e){return t*t*t*e}function Bo(t,e,n,i,r){return T1(t,e)+A1(t,n)+R1(t,i)+C1(t,r)}class W0 extends fi{constructor(e=new ye,n=new ye,i=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Bo(e,r.x,s.x,o.x,a.x),Bo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b1 extends fi{constructor(e=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Bo(e,r.x,s.x,o.x,a.x),Bo(e,r.y,s.y,o.y,a.y),Bo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class X0 extends fi{constructor(e=new ye,n=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ye){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ye){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P1 extends fi{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j0 extends fi{constructor(e=new ye,n=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(zo(e,r.x,s.x,o.x),zo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L1 extends fi{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(zo(e,r.x,s.x,o.x),zo(e,r.y,s.y,o.y),zo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y0 extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ye){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(ym(a,l.x,c.x,f.x,h.x),ym(a,l.y,c.y,f.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ye().fromArray(r))}return this}}var gh=Object.freeze({__proto__:null,ArcCurve:S1,CatmullRomCurve3:G0,CubicBezierCurve:W0,CubicBezierCurve3:b1,EllipseCurve:Cd,LineCurve:X0,LineCurve3:P1,QuadraticBezierCurve:j0,QuadraticBezierCurve3:L1,SplineCurve:Y0});class D1 extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const f=l[c];i&&i.equals(f)||(n.push(f),i=f)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new gh[r.type]().fromJSON(r))}return this}}class Sm extends D1{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new X0(this.currentPoint.clone(),new ye(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new j0(this.currentPoint.clone(),new ye(e,n),new ye(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new W0(this.currentPoint.clone(),new ye(e,n),new ye(i,r),new ye(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Y0(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,n+f,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Cd(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class _h extends Sm{constructor(e){super(e),this.uuid=Yr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Sm().fromJSON(r))}return this}}function N1(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=q0(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=k1(t,e,s,n)),t.length>80*n){a=1/0,l=1/0;let f=-1/0,h=-1/0;for(let d=n;d<r;d+=n){const p=t[d],g=t[d+1];p<a&&(a=p),g<l&&(l=g),p>f&&(f=p),g>h&&(h=g)}c=Math.max(f-a,h-l),c=c!==0?32767/c:0}return ua(s,o,n,a,l,c,0),o}function q0(t,e,n,i,r){let s;if(r===$1(t,e,n,i)>0)for(let o=e;o<n;o+=i)s=Mm(o/i|0,t[o],t[o+1],s);else for(let o=n-i;o>=e;o-=i)s=Mm(o/i|0,t[o],t[o+1],s);return s&&$s(s,s.next)&&(ha(s),s=s.next),s}function Vr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&($s(n,n.next)||Mt(n.prev,n,n.next)===0)){if(ha(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ua(t,e,n,i,r,s,o){if(!t)return;!o&&s&&G1(t,i,r,s);let a=t;for(;t.prev!==t.next;){const l=t.prev,c=t.next;if(s?U1(t,i,r,s):I1(t)){e.push(l.i,t.i,c.i),ha(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=F1(Vr(t),e),ua(t,e,n,i,r,s,2)):o===2&&O1(t,e,n,i,r,s):ua(Vr(t),e,n,i,r,s,1);break}}}function I1(t){const e=t.prev,n=t,i=t.next;if(Mt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,f=Math.min(r,s,o),h=Math.min(a,l,c),d=Math.max(r,s,o),p=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=f&&g.x<=d&&g.y>=h&&g.y<=p&&To(r,a,s,l,o,c,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function U1(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Mt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,f=r.y,h=s.y,d=o.y,p=Math.min(a,l,c),g=Math.min(f,h,d),v=Math.max(a,l,c),m=Math.max(f,h,d),u=vh(p,g,e,n,i),_=vh(v,m,e,n,i);let x=t.prevZ,y=t.nextZ;for(;x&&x.z>=u&&y&&y.z<=_;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&To(a,f,l,h,c,d,x.x,x.y)&&Mt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&To(a,f,l,h,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=u;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&To(a,f,l,h,c,d,x.x,x.y)&&Mt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&To(a,f,l,h,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function F1(t,e){let n=t;do{const i=n.prev,r=n.next.next;!$s(i,r)&&K0(i,n,n.next,r)&&fa(i,r)&&fa(r,i)&&(e.push(i.i,n.i,r.i),ha(n),ha(n.next),n=t=r),n=n.next}while(n!==t);return Vr(n)}function O1(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&j1(o,a)){let l=Z0(o,a);o=Vr(o,o.next),l=Vr(l,l.next),ua(o,e,n,i,r,s,0),ua(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function k1(t,e,n,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=q0(t,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(X1(c))}r.sort(z1);for(let s=0;s<r.length;s++)n=B1(r[s],n);return n}function z1(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),r=(e.next.y-e.y)/(e.next.x-e.x);n=i-r}return n}function B1(t,e){const n=H1(t,e);if(!n)return e;const i=Z0(n,t);return Vr(i,i.next),Vr(n,n.next)}function H1(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;if($s(t,n))return n;do{if($s(t,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const h=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=i&&h>s&&(s=h,o=n.x<n.next.x?n:n.next,h===i))return o}n=n.next}while(n!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let f=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&$0(r<c?i:s,r,l,c,r<c?s:i,r,n.x,n.y)){const h=Math.abs(r-n.y)/(i-n.x);fa(n,t)&&(h<f||h===f&&(n.x>o.x||n.x===o.x&&V1(o,n)))&&(o=n,f=h)}n=n.next}while(n!==a);return o}function V1(t,e){return Mt(t.prev,t,e.prev)<0&&Mt(e.next,t,t.next)<0}function G1(t,e,n,i){let r=t;do r.z===0&&(r.z=vh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,W1(r)}function W1(t){let e,n=1;do{let i=t,r;t=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=o}s.nextZ=null,n*=2}while(e>1);return t}function vh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function X1(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function $0(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function To(t,e,n,i,r,s,o,a){return!(t===o&&e===a)&&$0(t,e,n,i,r,s,o,a)}function j1(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Y1(t,e)&&(fa(t,e)&&fa(e,t)&&q1(t,e)&&(Mt(t.prev,t,e.prev)||Mt(t,e.prev,e))||$s(t,e)&&Mt(t.prev,t,t.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function $s(t,e){return t.x===e.x&&t.y===e.y}function K0(t,e,n,i){const r=al(Mt(t,e,n)),s=al(Mt(t,e,i)),o=al(Mt(n,i,t)),a=al(Mt(n,i,e));return!!(r!==s&&o!==a||r===0&&ol(t,n,e)||s===0&&ol(t,i,e)||o===0&&ol(n,t,i)||a===0&&ol(n,e,i))}function ol(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function al(t){return t>0?1:t<0?-1:0}function Y1(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&K0(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function fa(t,e){return Mt(t.prev,t,t.next)<0?Mt(t,e,t.next)>=0&&Mt(t,t.prev,e)>=0:Mt(t,e,t.prev)<0||Mt(t,t.next,e)<0}function q1(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Z0(t,e){const n=xh(t.i,t.x,t.y),i=xh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Mm(t,e,n,i){const r=xh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ha(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function xh(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $1(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class K1{static triangulate(e,n,i=2){return N1(e,n,i)}}class As{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return As.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Em(e),wm(i,e);let o=e.length;n.forEach(Em);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,wm(i,n[l]);const a=K1.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Em(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function wm(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class rc extends On{constructor(e=new _h([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new $t(r,3)),this.setAttribute("uv",new $t(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,f=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,v=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const u=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:Z1;let x,y=!1,C,A,R,b;u&&(x=u.getSpacedPoints(f),y=!0,d=!1,C=u.computeFrenetFrames(f,!1),A=new D,R=new D,b=new D),d||(m=0,p=0,g=0,v=0);const E=a.extractPoints(c);let M=E.shape;const N=E.holes;if(!As.isClockWise(M)){M=M.reverse();for(let fe=0,oe=N.length;fe<oe;fe++){const re=N[fe];As.isClockWise(re)&&(N[fe]=re.reverse())}}function X(fe){const re=10000000000000001e-36;let V=fe[0];for(let Q=1;Q<=fe.length;Q++){const $=Q%fe.length,Y=fe[$],Ce=Y.x-V.x,Me=Y.y-V.y,T=Ce*Ce+Me*Me,S=Math.max(Math.abs(Y.x),Math.abs(Y.y),Math.abs(V.x),Math.abs(V.y)),I=re*S*S;if(T<=I){fe.splice($,1),Q--;continue}V=Y}}X(M),N.forEach(X);const se=N.length,k=M;for(let fe=0;fe<se;fe++){const oe=N[fe];M=M.concat(oe)}function j(fe,oe,re){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(oe,re)}const te=M.length;function U(fe,oe,re){let V,Q,$;const Y=fe.x-oe.x,Ce=fe.y-oe.y,Me=re.x-fe.x,T=re.y-fe.y,S=Y*Y+Ce*Ce,I=Y*T-Ce*Me;if(Math.abs(I)>Number.EPSILON){const B=Math.sqrt(S),ne=Math.sqrt(Me*Me+T*T),H=oe.x-Ce/B,Se=oe.y+Y/B,he=re.x-T/ne,Pe=re.y+Me/ne,me=((he-H)*T-(Pe-Se)*Me)/(Y*T-Ce*Me);V=H+Y*me-fe.x,Q=Se+Ce*me-fe.y;const ee=V*V+Q*Q;if(ee<=2)return new ye(V,Q);$=Math.sqrt(ee/2)}else{let B=!1;Y>Number.EPSILON?Me>Number.EPSILON&&(B=!0):Y<-Number.EPSILON?Me<-Number.EPSILON&&(B=!0):Math.sign(Ce)===Math.sign(T)&&(B=!0),B?(V=-Ce,Q=Y,$=Math.sqrt(S)):(V=Y,Q=Ce,$=Math.sqrt(S/2))}return new ye(V/$,Q/$)}const Z=[];for(let fe=0,oe=k.length,re=oe-1,V=fe+1;fe<oe;fe++,re++,V++)re===oe&&(re=0),V===oe&&(V=0),Z[fe]=U(k[fe],k[re],k[V]);const ae=[];let ve,Ie=Z.concat();for(let fe=0,oe=se;fe<oe;fe++){const re=N[fe];ve=[];for(let V=0,Q=re.length,$=Q-1,Y=V+1;V<Q;V++,$++,Y++)$===Q&&($=0),Y===Q&&(Y=0),ve[V]=U(re[V],re[$],re[Y]);ae.push(ve),Ie=Ie.concat(ve)}let We;if(m===0)We=As.triangulateShape(k,N);else{const fe=[],oe=[];for(let re=0;re<m;re++){const V=re/m,Q=p*Math.cos(V*Math.PI/2),$=g*Math.sin(V*Math.PI/2)+v;for(let Y=0,Ce=k.length;Y<Ce;Y++){const Me=j(k[Y],Z[Y],$);Ue(Me.x,Me.y,-Q),V===0&&fe.push(Me)}for(let Y=0,Ce=se;Y<Ce;Y++){const Me=N[Y];ve=ae[Y];const T=[];for(let S=0,I=Me.length;S<I;S++){const B=j(Me[S],ve[S],$);Ue(B.x,B.y,-Q),V===0&&T.push(B)}V===0&&oe.push(T)}}We=As.triangulateShape(fe,oe)}const qe=We.length,$e=g+v;for(let fe=0;fe<te;fe++){const oe=d?j(M[fe],Ie[fe],$e):M[fe];y?(R.copy(C.normals[0]).multiplyScalar(oe.x),A.copy(C.binormals[0]).multiplyScalar(oe.y),b.copy(x[0]).add(R).add(A),Ue(b.x,b.y,b.z)):Ue(oe.x,oe.y,0)}for(let fe=1;fe<=f;fe++)for(let oe=0;oe<te;oe++){const re=d?j(M[oe],Ie[oe],$e):M[oe];y?(R.copy(C.normals[fe]).multiplyScalar(re.x),A.copy(C.binormals[fe]).multiplyScalar(re.y),b.copy(x[fe]).add(R).add(A),Ue(b.x,b.y,b.z)):Ue(re.x,re.y,h/f*fe)}for(let fe=m-1;fe>=0;fe--){const oe=fe/m,re=p*Math.cos(oe*Math.PI/2),V=g*Math.sin(oe*Math.PI/2)+v;for(let Q=0,$=k.length;Q<$;Q++){const Y=j(k[Q],Z[Q],V);Ue(Y.x,Y.y,h+re)}for(let Q=0,$=N.length;Q<$;Q++){const Y=N[Q];ve=ae[Q];for(let Ce=0,Me=Y.length;Ce<Me;Ce++){const T=j(Y[Ce],ve[Ce],V);y?Ue(T.x,T.y+x[f-1].y,x[f-1].x+re):Ue(T.x,T.y,h+re)}}}J(),ue();function J(){const fe=r.length/3;if(d){let oe=0,re=te*oe;for(let V=0;V<qe;V++){const Q=We[V];Fe(Q[2]+re,Q[1]+re,Q[0]+re)}oe=f+m*2,re=te*oe;for(let V=0;V<qe;V++){const Q=We[V];Fe(Q[0]+re,Q[1]+re,Q[2]+re)}}else{for(let oe=0;oe<qe;oe++){const re=We[oe];Fe(re[2],re[1],re[0])}for(let oe=0;oe<qe;oe++){const re=We[oe];Fe(re[0]+te*f,re[1]+te*f,re[2]+te*f)}}i.addGroup(fe,r.length/3-fe,0)}function ue(){const fe=r.length/3;let oe=0;Le(k,oe),oe+=k.length;for(let re=0,V=N.length;re<V;re++){const Q=N[re];Le(Q,oe),oe+=Q.length}i.addGroup(fe,r.length/3-fe,1)}function Le(fe,oe){let re=fe.length;for(;--re>=0;){const V=re;let Q=re-1;Q<0&&(Q=fe.length-1);for(let $=0,Y=f+m*2;$<Y;$++){const Ce=te*$,Me=te*($+1),T=oe+V+Ce,S=oe+Q+Ce,I=oe+Q+Me,B=oe+V+Me;Ke(T,S,I,B)}}}function Ue(fe,oe,re){l.push(fe),l.push(oe),l.push(re)}function Fe(fe,oe,re){ot(fe),ot(oe),ot(re);const V=r.length/3,Q=_.generateTopUV(i,r,V-3,V-2,V-1);P(Q[0]),P(Q[1]),P(Q[2])}function Ke(fe,oe,re,V){ot(fe),ot(oe),ot(V),ot(oe),ot(re),ot(V);const Q=r.length/3,$=_.generateSideWallUV(i,r,Q-6,Q-3,Q-2,Q-1);P($[0]),P($[1]),P($[3]),P($[1]),P($[2]),P($[3])}function ot(fe){r.push(l[fe*3+0]),r.push(l[fe*3+1]),r.push(l[fe*3+2])}function P(fe){s.push(fe.x),s.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return J1(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new gh[r.type]().fromJSON(r)),new rc(i,e.options)}}const Z1={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],f=e[r*3+1];return[new ye(s,o),new ye(a,l),new ye(c,f)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],f=e[i*3+1],h=e[i*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],u=e[s*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new ye(o,1-l),new ye(c,1-h),new ye(d,1-g),new ye(v,1-u)]:[new ye(a,1-l),new ye(f,1-h),new ye(p,1-g),new ye(m,1-u)]}};function J1(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Pd extends Rd{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Pd(e.radius,e.detail)}}class Mi extends On{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,p=[],g=[],v=[],m=[];for(let u=0;u<f;u++){const _=u*d-o;for(let x=0;x<c;x++){const y=x*h-s;g.push(y,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const x=_+c*u,y=_+c*(u+1),C=_+1+c*(u+1),A=_+1+c*u;p.push(x,y,A),p.push(y,C,A)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.widthSegments,e.heightSegments)}}class sc extends On{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new D,h=new D,d=new D;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const v=g/r*s,m=p/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(v),h.y=(e+n*Math.cos(m))*Math.sin(v),h.z=n*Math.sin(m),a.push(h.x,h.y,h.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const v=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,u=(r+1)*(p-1)+g,_=(r+1)*p+g;o.push(v,m,_),o.push(m,u,_)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Er extends eo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=b0,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Q1 extends eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eM extends eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ld extends Vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Au=new vt,Tm=new D,Am=new D;class J0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ad,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Tm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tm),Am.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Am),n.updateMatrixWorld(),Au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rm=new vt,yo=new D,Ru=new D;class tM extends J0{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),yo.setFromMatrixPosition(e.matrixWorld),i.position.copy(yo),Ru.copy(i.position),Ru.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Ru),i.updateMatrixWorld(),r.makeTranslation(-yo.x,-yo.y,-yo.z),Rm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rm,i.coordinateSystem,i.reversedDepth)}}class Cm extends Ld{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new tM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Q0 extends k0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class nM extends J0{constructor(){super(new Q0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iM extends Ld{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new nM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rM extends Ld{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class sM extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class bm{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ye(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class oM extends jr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Pm(t,e,n,i){const r=aM(i);switch(n){case T0:return t*e;case R0:return t*e/r.components*r.byteLength;case xd:return t*e/r.components*r.byteLength;case C0:return t*e*2/r.components*r.byteLength;case yd:return t*e*2/r.components*r.byteLength;case A0:return t*e*3/r.components*r.byteLength;case $n:return t*e*4/r.components*r.byteLength;case Sd:return t*e*4/r.components*r.byteLength;case wl:case Tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Al:case Rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gf:case Xf:return Math.max(t,16)*Math.max(e,8)/4;case Vf:case Wf:return Math.max(t,8)*Math.max(e,8)/2;case jf:case Yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case eh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case th:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case nh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ih:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case oh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ah:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case lh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ch:case uh:case fh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case hh:case dh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ph:case mh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function aM(t){switch(t){case ci:case S0:return{byteLength:1,components:1};case ra:case M0:case va:return{byteLength:2,components:1};case _d:case vd:return{byteLength:2,components:4};case zr:case gd:case Ti:return{byteLength:4,components:1};case E0:case w0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=md);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ev(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function lM(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];t.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var cM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_M=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,MM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,EM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,DM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ME=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,XE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ew=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_w=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ww=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ow=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:cM,alphahash_pars_fragment:uM,alphamap_fragment:fM,alphamap_pars_fragment:hM,alphatest_fragment:dM,alphatest_pars_fragment:pM,aomap_fragment:mM,aomap_pars_fragment:gM,batching_pars_vertex:_M,batching_vertex:vM,begin_vertex:xM,beginnormal_vertex:yM,bsdfs:SM,iridescence_fragment:MM,bumpmap_pars_fragment:EM,clipping_planes_fragment:wM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:AM,clipping_planes_vertex:RM,color_fragment:CM,color_pars_fragment:bM,color_pars_vertex:PM,color_vertex:LM,common:DM,cube_uv_reflection_fragment:NM,defaultnormal_vertex:IM,displacementmap_pars_vertex:UM,displacementmap_vertex:FM,emissivemap_fragment:OM,emissivemap_pars_fragment:kM,colorspace_fragment:zM,colorspace_pars_fragment:BM,envmap_fragment:HM,envmap_common_pars_fragment:VM,envmap_pars_fragment:GM,envmap_pars_vertex:WM,envmap_physical_pars_fragment:tE,envmap_vertex:XM,fog_vertex:jM,fog_pars_vertex:YM,fog_fragment:qM,fog_pars_fragment:$M,gradientmap_pars_fragment:KM,lightmap_pars_fragment:ZM,lights_lambert_fragment:JM,lights_lambert_pars_fragment:QM,lights_pars_begin:eE,lights_toon_fragment:nE,lights_toon_pars_fragment:iE,lights_phong_fragment:rE,lights_phong_pars_fragment:sE,lights_physical_fragment:oE,lights_physical_pars_fragment:aE,lights_fragment_begin:lE,lights_fragment_maps:cE,lights_fragment_end:uE,logdepthbuf_fragment:fE,logdepthbuf_pars_fragment:hE,logdepthbuf_pars_vertex:dE,logdepthbuf_vertex:pE,map_fragment:mE,map_pars_fragment:gE,map_particle_fragment:_E,map_particle_pars_fragment:vE,metalnessmap_fragment:xE,metalnessmap_pars_fragment:yE,morphinstance_vertex:SE,morphcolor_vertex:ME,morphnormal_vertex:EE,morphtarget_pars_vertex:wE,morphtarget_vertex:TE,normal_fragment_begin:AE,normal_fragment_maps:RE,normal_pars_fragment:CE,normal_pars_vertex:bE,normal_vertex:PE,normalmap_pars_fragment:LE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:NE,clearcoat_pars_fragment:IE,iridescence_pars_fragment:UE,opaque_fragment:FE,packing:OE,premultiplied_alpha_fragment:kE,project_vertex:zE,dithering_fragment:BE,dithering_pars_fragment:HE,roughnessmap_fragment:VE,roughnessmap_pars_fragment:GE,shadowmap_pars_fragment:WE,shadowmap_pars_vertex:XE,shadowmap_vertex:jE,shadowmask_pars_fragment:YE,skinbase_vertex:qE,skinning_pars_vertex:$E,skinning_vertex:KE,skinnormal_vertex:ZE,specularmap_fragment:JE,specularmap_pars_fragment:QE,tonemapping_fragment:ew,tonemapping_pars_fragment:tw,transmission_fragment:nw,transmission_pars_fragment:iw,uv_pars_fragment:rw,uv_pars_vertex:sw,uv_vertex:ow,worldpos_vertex:aw,background_vert:lw,background_frag:cw,backgroundCube_vert:uw,backgroundCube_frag:fw,cube_vert:hw,cube_frag:dw,depth_vert:pw,depth_frag:mw,distanceRGBA_vert:gw,distanceRGBA_frag:_w,equirect_vert:vw,equirect_frag:xw,linedashed_vert:yw,linedashed_frag:Sw,meshbasic_vert:Mw,meshbasic_frag:Ew,meshlambert_vert:ww,meshlambert_frag:Tw,meshmatcap_vert:Aw,meshmatcap_frag:Rw,meshnormal_vert:Cw,meshnormal_frag:bw,meshphong_vert:Pw,meshphong_frag:Lw,meshphysical_vert:Dw,meshphysical_frag:Nw,meshtoon_vert:Iw,meshtoon_frag:Uw,points_vert:Fw,points_frag:Ow,shadow_vert:kw,shadow_frag:zw,sprite_vert:Bw,sprite_frag:Hw},Re={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ni={basic:{uniforms:Qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Qt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Qt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Qt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Qt([Re.points,Re.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Qt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Qt([Re.common,Re.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Qt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Qt([Re.sprite,Re.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Qt([Re.common,Re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Qt([Re.lights,Re.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ni.physical={uniforms:Qt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ll={r:0,b:0,g:0},xr=new ui,Vw=new vt;function Gw(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,f,h=null,d=0,p=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function v(x){let y=!1;const C=g(x);C===null?u(a,l):C&&C.isColor&&(u(C,1),y=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,y){const C=g(y);C&&(C.isCubeTexture||C.mapping===Mc)?(f===void 0&&(f=new bt(new to(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:qs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),xr.copy(y.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Vw.makeRotationFromEuler(xr)),f.material.toneMapped=st.getTransfer(C.colorSpace)!==ct,(h!==C||d!==C.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=C,d=C.version,p=t.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new bt(new Mi(2,2),new ur({name:"BackgroundMaterial",uniforms:qs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(C.colorSpace)!==ct,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=C,d=C.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,y){x.getRGB(ll,O0(t)),i.buffers.color.setClear(ll.r,ll.g,ll.b,y,o)}function _(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:v,addToRenderList:m,dispose:_}}function Ww(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,N,z,X,se){let k=!1;const j=h(X,z,N);s!==j&&(s=j,c(s.object)),k=p(M,X,z,se),k&&g(M,X,z,se),se!==null&&e.update(se,t.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(M,N,z,X),se!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function f(M){return t.deleteVertexArray(M)}function h(M,N,z){const X=z.wireframe===!0;let se=i[M.id];se===void 0&&(se={},i[M.id]=se);let k=se[N.id];k===void 0&&(k={},se[N.id]=k);let j=k[X];return j===void 0&&(j=d(l()),k[X]=j),j}function d(M){const N=[],z=[],X=[];for(let se=0;se<n;se++)N[se]=0,z[se]=0,X[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:X,object:M,attributes:{},index:null}}function p(M,N,z,X){const se=s.attributes,k=N.attributes;let j=0;const te=z.getAttributes();for(const U in te)if(te[U].location>=0){const ae=se[U];let ve=k[U];if(ve===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),ae===void 0||ae.attribute!==ve||ve&&ae.data!==ve.data)return!0;j++}return s.attributesNum!==j||s.index!==X}function g(M,N,z,X){const se={},k=N.attributes;let j=0;const te=z.getAttributes();for(const U in te)if(te[U].location>=0){let ae=k[U];ae===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const ve={};ve.attribute=ae,ae&&ae.data&&(ve.data=ae.data),se[U]=ve,j++}s.attributes=se,s.attributesNum=j,s.index=X}function v(){const M=s.newAttributes;for(let N=0,z=M.length;N<z;N++)M[N]=0}function m(M){u(M,0)}function u(M,N){const z=s.newAttributes,X=s.enabledAttributes,se=s.attributeDivisors;z[M]=1,X[M]===0&&(t.enableVertexAttribArray(M),X[M]=1),se[M]!==N&&(t.vertexAttribDivisor(M,N),se[M]=N)}function _(){const M=s.newAttributes,N=s.enabledAttributes;for(let z=0,X=N.length;z<X;z++)N[z]!==M[z]&&(t.disableVertexAttribArray(z),N[z]=0)}function x(M,N,z,X,se,k,j){j===!0?t.vertexAttribIPointer(M,N,z,se,k):t.vertexAttribPointer(M,N,z,X,se,k)}function y(M,N,z,X){v();const se=X.attributes,k=z.getAttributes(),j=N.defaultAttributeValues;for(const te in k){const U=k[te];if(U.location>=0){let Z=se[te];if(Z===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){const ae=Z.normalized,ve=Z.itemSize,Ie=e.get(Z);if(Ie===void 0)continue;const We=Ie.buffer,qe=Ie.type,$e=Ie.bytesPerElement,J=qe===t.INT||qe===t.UNSIGNED_INT||Z.gpuType===gd;if(Z.isInterleavedBufferAttribute){const ue=Z.data,Le=ue.stride,Ue=Z.offset;if(ue.isInstancedInterleavedBuffer){for(let Fe=0;Fe<U.locationSize;Fe++)u(U.location+Fe,ue.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Fe=0;Fe<U.locationSize;Fe++)m(U.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,We);for(let Fe=0;Fe<U.locationSize;Fe++)x(U.location+Fe,ve/U.locationSize,qe,ae,Le*$e,(Ue+ve/U.locationSize*Fe)*$e,J)}else{if(Z.isInstancedBufferAttribute){for(let ue=0;ue<U.locationSize;ue++)u(U.location+ue,Z.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ue=0;ue<U.locationSize;ue++)m(U.location+ue);t.bindBuffer(t.ARRAY_BUFFER,We);for(let ue=0;ue<U.locationSize;ue++)x(U.location+ue,ve/U.locationSize,qe,ae,ve*$e,ve/U.locationSize*ue*$e,J)}}else if(j!==void 0){const ae=j[te];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(U.location,ae);break;case 3:t.vertexAttrib3fv(U.location,ae);break;case 4:t.vertexAttrib4fv(U.location,ae);break;default:t.vertexAttrib1fv(U.location,ae)}}}}_()}function C(){b();for(const M in i){const N=i[M];for(const z in N){const X=N[z];for(const se in X)f(X[se].object),delete X[se];delete N[z]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const N=i[M.id];for(const z in N){const X=N[z];for(const se in X)f(X[se].object),delete X[se];delete N[z]}delete i[M.id]}function R(M){for(const N in i){const z=i[N];if(z[M.id]===void 0)continue;const X=z[M.id];for(const se in X)f(X[se].object),delete X[se];delete z[M.id]}}function b(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Xw(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let p=0;for(let g=0;g<h;g++)p+=f[g];n.update(p,i,1)}function l(c,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],f[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=f[v]*d[v];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==$n&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const b=R===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ci&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ti&&!b)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:C,maxSamples:A}}function Yw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Wi,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?f(null):c();else{const _=s?0:i,x=_*4;let y=u.clippingState||null;l.value=y,y=f(g,d,x,p);for(let C=0;C!==x;++C)y[C]=n[C];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const u=p+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,y=p;x!==v;++x,y+=4)o.copy(h[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function qw(t){let e=new WeakMap;function n(o,a){return a===kf?o.mapping=Xs:a===zf&&(o.mapping=js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kf||a===zf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new p1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Rs=4,Lm=[.125,.215,.35,.446,.526,.582],Ar=20,Cu=new Q0,Dm=new Ze;let bu=null,Pu=0,Lu=0,Du=!1;const wr=(1+Math.sqrt(5))/2,fs=1/wr,Nm=[new D(-wr,fs,0),new D(wr,fs,0),new D(-fs,0,wr),new D(fs,0,wr),new D(0,wr,-fs),new D(0,wr,fs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],$w=new D;class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=$w}=s;bu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel(),Du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Pu,Lu),this._renderer.xr.enabled=Du,e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel(),Du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:va,format:$n,colorSpace:Ys,depthBuffer:!1},r=Um(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kw(s)),this._blurMaterial=Zw(s,e,n)}return r}_compileMaterial(e){const n=new bt(this._lodPlanes[0],e);this._renderer.compile(n,Cu)}_sceneToCubeUV(e,n,i,r,s){const l=new xn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Dm),h.toneMapping=or,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const v=new ko({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new bt(new to,v);let u=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,u=!0):(v.color.copy(Dm),u=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[x]));const C=this._cubeSize;cl(r,y*C,x>2?C:0,C,C),h.setRenderTarget(r),u&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xs||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;cl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Cu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nm[(r-s-1)%Nm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new bt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ar-1),v=s/g,m=isFinite(s)?1+Math.floor(f*v):Ar;m>Ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);const u=[];let _=0;for(let R=0;R<Ar;++R){const b=R/v,E=Math.exp(-b*b/2);u.push(E),R===0?_+=E:R<m&&(_+=2*E)}for(let R=0;R<u.length;R++)u[R]=u[R]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-Rs?r-x+Rs:0),A=4*(this._cubeSize-y);cl(n,C,A,3*y,2*y),l.setRenderTarget(n),l.render(h,Cu)}}function Kw(t){const e=[],n=[],i=[];let r=t;const s=t-Rs+1+Lm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Rs?l=Lm[o-t+Rs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,g=6,v=3,m=2,u=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),y=new Float32Array(u*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,b=A>2?0:-1,E=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];_.set(E,v*g*A),x.set(d,m*g*A);const M=[A,A,A,A,A,A];y.set(M,u*g*A)}const C=new On;C.setAttribute("position",new li(_,v)),C.setAttribute("uv",new li(x,m)),C.setAttribute("faceIndex",new li(y,u)),e.push(C),r>Rs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Um(t,e,n){const i=new Hr(t,e,n);return i.texture.mapping=Mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Zw(t,e,n){const i=new Float32Array(Ar),r=new D(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Fm(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Om(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Dd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kf||l===zf,f=l===Xs||l===js;if(c||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Im(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new Im(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Qw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ca("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function eT(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let x=0,y=_.length;x<y;x+=3){const C=_[x+0],A=_[x+1],R=_[x+2];d.push(C,A,A,R,R,C)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const C=x+0,A=x+1,R=x+2;d.push(C,A,A,R,R,C)}}else return;const m=new(L0(d)?F0:U0)(d,1);m.version=v;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function tT(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function f(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function h(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,g);let u=0;for(let _=0;_<g;_++)u+=p[_]*v[_];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function nT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function iT(t,e,n){const i=new WeakMap,r=new ft;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let M=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*A*4*h),b=new D0(R,C,A,h);b.type=Ti,b.needsUpdate=!0;const E=y*4;for(let N=0;N<h;N++){const z=u[N],X=_[N],se=x[N],k=C*A*4*N;for(let j=0;j<z.count;j++){const te=j*E;g===!0&&(r.fromBufferAttribute(z,j),R[k+te+0]=r.x,R[k+te+1]=r.y,R[k+te+2]=r.z,R[k+te+3]=0),v===!0&&(r.fromBufferAttribute(X,j),R[k+te+4]=r.x,R[k+te+5]=r.y,R[k+te+6]=r.z,R[k+te+7]=0),m===!0&&(r.fromBufferAttribute(se,j),R[k+te+8]=r.x,R[k+te+9]=r.y,R[k+te+10]=r.z,R[k+te+11]=se.itemSize===4?r.w:1)}}d={count:h,texture:b,size:new ye(C,A)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function rT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const tv=new nn,km=new H0(1,1),nv=new D0,iv=new ZS,rv=new z0,zm=[],Bm=[],Hm=new Float32Array(16),Vm=new Float32Array(9),Gm=new Float32Array(4);function no(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=zm[r];if(s===void 0&&(s=new Float32Array(r),zm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function wc(t,e){let n=Bm[e];n===void 0&&(n=new Int32Array(e),Bm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Gm.set(i),t.uniformMatrix2fv(this.addr,!1,Gm),Ut(n,i)}}function uT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Vm.set(i),t.uniformMatrix3fv(this.addr,!1,Vm),Ut(n,i)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Hm.set(i),t.uniformMatrix4fv(this.addr,!1,Hm),Ut(n,i)}}function hT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function gT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(km.compareFunction=P0,s=km):s=tv,n.setTexture2D(e||s,r)}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||iv,r)}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||rv,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||nv,r)}function wT(t){switch(t){case 5126:return sT;case 35664:return oT;case 35665:return aT;case 35666:return lT;case 35674:return cT;case 35675:return uT;case 35676:return fT;case 5124:case 35670:return hT;case 35667:case 35671:return dT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return _T;case 36295:return vT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return ET}}function TT(t,e){t.uniform1fv(this.addr,e)}function AT(t,e){const n=no(e,this.size,2);t.uniform2fv(this.addr,n)}function RT(t,e){const n=no(e,this.size,3);t.uniform3fv(this.addr,n)}function CT(t,e){const n=no(e,this.size,4);t.uniform4fv(this.addr,n)}function bT(t,e){const n=no(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function PT(t,e){const n=no(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function LT(t,e){const n=no(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function DT(t,e){t.uniform1iv(this.addr,e)}function NT(t,e){t.uniform2iv(this.addr,e)}function IT(t,e){t.uniform3iv(this.addr,e)}function UT(t,e){t.uniform4iv(this.addr,e)}function FT(t,e){t.uniform1uiv(this.addr,e)}function OT(t,e){t.uniform2uiv(this.addr,e)}function kT(t,e){t.uniform3uiv(this.addr,e)}function zT(t,e){t.uniform4uiv(this.addr,e)}function BT(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||tv,s[o])}function HT(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||iv,s[o])}function VT(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||rv,s[o])}function GT(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||nv,s[o])}function WT(t){switch(t){case 5126:return TT;case 35664:return AT;case 35665:return RT;case 35666:return CT;case 35674:return bT;case 35675:return PT;case 35676:return LT;case 5124:case 35670:return DT;case 35667:case 35671:return NT;case 35668:case 35672:return IT;case 35669:case 35673:return UT;case 5125:return FT;case 36294:return OT;case 36295:return kT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return GT}}class XT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=wT(n.type)}}class jT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=WT(n.type)}}class YT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Nu=/(\w+)(\])?(\[|\.)?/g;function Wm(t,e){t.seq.push(e),t.map[e.id]=e}function qT(t,e,n){const i=t.name,r=i.length;for(Nu.lastIndex=0;;){const s=Nu.exec(i),o=Nu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wm(n,c===void 0?new XT(a,t,e):new jT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new YT(a),Wm(n,h)),n=h}}}class Cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);qT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Xm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $T=37297;let KT=0;function ZT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const jm=new Xe;function JT(t){st._getMatrix(jm,st.workingColorSpace,t);const e=`mat3( ${jm.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case Ql:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ym(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+ZT(t.getShaderSource(e),a)}else return s}function QT(t,e){const n=JT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function eA(t,e){let n;switch(e){case uS:n="Linear";break;case fS:n="Reinhard";break;case hS:n="Cineon";break;case dS:n="ACESFilmic";break;case mS:n="AgX";break;case gS:n="Neutral";break;case pS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ul=new D;function tA(){st.getLuminanceCoefficients(ul);const t=ul.x.toFixed(4),e=ul.y.toFixed(4),n=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function iA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function rA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ao(t){return t!==""}function qm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $m(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sA=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(t){return t.replace(sA,aA)}const oA=new Map;function aA(t,e){let n=je[e];if(n===void 0){const i=oA.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yh(n)}const lA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Km(t){return t.replace(lA,cA)}function cA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===_0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function fA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xs:case js:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function dA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case x0:e="ENVMAP_BLENDING_MULTIPLY";break;case lS:e="ENVMAP_BLENDING_MIX";break;case cS:e="ENVMAP_BLENDING_ADD";break}return e}function pA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function mA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=uA(n),c=fA(n),f=hA(n),h=dA(n),d=pA(n),p=nA(n),g=iA(s),v=r.createProgram();let m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ao).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ao).join(`
`),u.length>0&&(u+=`
`)):(m=[Zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),u=[Zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==or?"#define TONE_MAPPING":"",n.toneMapping!==or?je.tonemapping_pars_fragment:"",n.toneMapping!==or?eA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,QT("linearToOutputTexel",n.outputColorSpace),tA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ao).join(`
`)),o=yh(o),o=qm(o,n),o=$m(o,n),a=yh(a),a=qm(a,n),a=$m(a,n),o=Km(o),a=Km(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=_+m+o,y=_+u+a,C=Xm(r,r.VERTEX_SHADER,x),A=Xm(r,r.FRAGMENT_SHADER,y);r.attachShader(v,C),r.attachShader(v,A),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(N){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(v)||"",X=r.getShaderInfoLog(C)||"",se=r.getShaderInfoLog(A)||"",k=z.trim(),j=X.trim(),te=se.trim();let U=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,C,A);else{const ae=Ym(r,C,"vertex"),ve=Ym(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+ae+`
`+ve)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(j===""||te==="")&&(Z=!1);Z&&(N.diagnostics={runnable:U,programLog:k,vertexShader:{log:j,prefix:m},fragmentShader:{log:te,prefix:u}})}r.deleteShader(C),r.deleteShader(A),b=new Cl(r,v),E=rA(r,v)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,$T)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let gA=0;class _A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new vA(e),n.set(e,i)),i}}class vA{constructor(e){this.id=gA++,this.code=e,this.usedTimes=0}}function xA(t,e,n,i,r,s,o){const a=new N0,l=new _A,c=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,N,z,X){const se=z.fog,k=X.geometry,j=E.isMeshStandardMaterial?z.environment:null,te=(E.isMeshStandardMaterial?n:e).get(E.envMap||j),U=te&&te.mapping===Mc?te.image.height:null,Z=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ve=ae!==void 0?ae.length:0;let Ie=0;k.morphAttributes.position!==void 0&&(Ie=1),k.morphAttributes.normal!==void 0&&(Ie=2),k.morphAttributes.color!==void 0&&(Ie=3);let We,qe,$e,J;if(Z){const nt=ni[Z];We=nt.vertexShader,qe=nt.fragmentShader}else We=E.vertexShader,qe=E.fragmentShader,l.update(E),$e=l.getVertexShaderID(E),J=l.getFragmentShaderID(E);const ue=t.getRenderTarget(),Le=t.state.buffers.depth.getReversed(),Ue=X.isInstancedMesh===!0,Fe=X.isBatchedMesh===!0,Ke=!!E.map,ot=!!E.matcap,P=!!te,fe=!!E.aoMap,oe=!!E.lightMap,re=!!E.bumpMap,V=!!E.normalMap,Q=!!E.displacementMap,$=!!E.emissiveMap,Y=!!E.metalnessMap,Ce=!!E.roughnessMap,Me=E.anisotropy>0,T=E.clearcoat>0,S=E.dispersion>0,I=E.iridescence>0,B=E.sheen>0,ne=E.transmission>0,H=Me&&!!E.anisotropyMap,Se=T&&!!E.clearcoatMap,he=T&&!!E.clearcoatNormalMap,Pe=T&&!!E.clearcoatRoughnessMap,me=I&&!!E.iridescenceMap,ee=I&&!!E.iridescenceThicknessMap,ge=B&&!!E.sheenColorMap,we=B&&!!E.sheenRoughnessMap,Te=!!E.specularMap,xe=!!E.specularColorMap,Ee=!!E.specularIntensityMap,L=ne&&!!E.transmissionMap,q=ne&&!!E.thicknessMap,le=!!E.gradientMap,de=!!E.alphaMap,ie=E.alphaTest>0,K=!!E.alphaHash,Ae=!!E.extensions;let Oe=or;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Oe=t.toneMapping);const Qe={shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:We,fragmentShader:qe,defines:E.defines,customVertexShaderID:$e,customFragmentShaderID:J,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&X._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&X.instanceColor!==null,instancingMorph:Ue&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ys,alphaToCoverage:!!E.alphaToCoverage,map:Ke,matcap:ot,envMap:P,envMapMode:P&&te.mapping,envMapCubeUVHeight:U,aoMap:fe,lightMap:oe,bumpMap:re,normalMap:V,displacementMap:d&&Q,emissiveMap:$,normalMapObjectSpace:V&&E.normalMapType===yS,normalMapTangentSpace:V&&E.normalMapType===b0,metalnessMap:Y,roughnessMap:Ce,anisotropy:Me,anisotropyMap:H,clearcoat:T,clearcoatMap:Se,clearcoatNormalMap:he,clearcoatRoughnessMap:Pe,dispersion:S,iridescence:I,iridescenceMap:me,iridescenceThicknessMap:ee,sheen:B,sheenColorMap:ge,sheenRoughnessMap:we,specularMap:Te,specularColorMap:xe,specularIntensityMap:Ee,transmission:ne,transmissionMap:L,thicknessMap:q,gradientMap:le,opaque:E.transparent===!1&&E.blending===Us&&E.alphaToCoverage===!1,alphaMap:de,alphaTest:ie,alphaHash:K,combine:E.combine,mapUv:Ke&&v(E.map.channel),aoMapUv:fe&&v(E.aoMap.channel),lightMapUv:oe&&v(E.lightMap.channel),bumpMapUv:re&&v(E.bumpMap.channel),normalMapUv:V&&v(E.normalMap.channel),displacementMapUv:Q&&v(E.displacementMap.channel),emissiveMapUv:$&&v(E.emissiveMap.channel),metalnessMapUv:Y&&v(E.metalnessMap.channel),roughnessMapUv:Ce&&v(E.roughnessMap.channel),anisotropyMapUv:H&&v(E.anisotropyMap.channel),clearcoatMapUv:Se&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(E.sheenRoughnessMap.channel),specularMapUv:Te&&v(E.specularMap.channel),specularColorMapUv:xe&&v(E.specularColorMap.channel),specularIntensityMapUv:Ee&&v(E.specularIntensityMap.channel),transmissionMapUv:L&&v(E.transmissionMap.channel),thicknessMapUv:q&&v(E.thicknessMap.channel),alphaMapUv:de&&v(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(V||Me),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!k.attributes.uv&&(Ke||de),fog:!!se,useFog:E.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Le,skinning:X.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ke&&E.map.isVideoTexture===!0&&st.getTransfer(E.map.colorSpace)===ct,decodeVideoTextureEmissive:$&&E.emissiveMap.isVideoTexture===!0&&st.getTransfer(E.emissiveMap.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Yn,flipSided:E.side===dn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ae&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&E.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)M.push(N),M.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(_(M,E),x(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const M=g[E.type];let N;if(M){const z=ni[M];N=u1.clone(z.uniforms)}else N=E.uniforms;return N}function C(E,M){let N;for(let z=0,X=f.length;z<X;z++){const se=f[z];if(se.cacheKey===M){N=se,++N.usedTimes;break}}return N===void 0&&(N=new mA(t,M,E,s),f.push(N)),N}function A(E){if(--E.usedTimes===0){const M=f.indexOf(E);f[M]=f[f.length-1],f.pop(),E.destroy()}}function R(E){l.remove(E)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:f,dispose:b}}function yA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function SA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Jm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,g,v,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=v,u.group=m),e++,u}function a(h,d,p,g,v,m){const u=o(h,d,p,g,v,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,d,p,g,v,m){const u=o(h,d,p,g,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||SA),i.length>1&&i.sort(d||Jm),r.length>1&&r.sort(d||Jm)}function f(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function MA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Qm,t.set(i,[o])):r>=s.length?(o=new Qm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function EA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Ze};break;case"SpotLight":n={position:new D,direction:new D,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function wA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let TA=0;function AA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RA(t){const e=new EA,n=wA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new vt,o=new vt;function a(c){let f=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,v=0,m=0,u=0,_=0,x=0,y=0,C=0,A=0,R=0;c.sort(AA);for(let E=0,M=c.length;E<M;E++){const N=c[E],z=N.color,X=N.intensity,se=N.distance,k=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=z.r*X,h+=z.g*X,d+=z.b*X;else if(N.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],X);R++}else if(N.isDirectionalLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const te=N.shadow,U=n.get(N);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=N.shadow.matrix,_++}i.directional[p]=j,p++}else if(N.isSpotLight){const j=e.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(z).multiplyScalar(X),j.distance=se,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[v]=j;const te=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,te.updateMatrices(N),N.castShadow&&A++),i.spotLightMatrix[v]=te.matrix,N.castShadow){const U=n.get(N);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,i.spotShadow[v]=U,i.spotShadowMap[v]=k,y++}v++}else if(N.isRectAreaLight){const j=e.get(N);j.color.copy(z).multiplyScalar(X),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=j,m++}else if(N.isPointLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){const te=N.shadow,U=n.get(N);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,U.shadowCameraNear=te.camera.near,U.shadowCameraFar=te.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=N.shadow.matrix,x++}i.point[g]=j,g++}else if(N.isHemisphereLight){const j=e.get(N);j.skyColor.copy(N.color).multiplyScalar(X),j.groundColor.copy(N.groundColor).multiplyScalar(X),i.hemi[u]=j,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==p||b.pointLength!==g||b.spotLength!==v||b.rectAreaLength!==m||b.hemiLength!==u||b.numDirectionalShadows!==_||b.numPointShadows!==x||b.numSpotShadows!==y||b.numSpotMaps!==C||b.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,b.directionalLength=p,b.pointLength=g,b.spotLength=v,b.rectAreaLength=m,b.hemiLength=u,b.numDirectionalShadows=_,b.numPointShadows=x,b.numSpotShadows=y,b.numSpotMaps=C,b.numLightProbes=R,i.version=TA++)}function l(c,f){let h=0,d=0,p=0,g=0,v=0;const m=f.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const x=c[u];if(x.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function eg(t){const e=new RA(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function CA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new eg(t),e.set(r,[a])):s>=o.length?(a=new eg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const bA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LA(t,e,n){let i=new Ad;const r=new ye,s=new ye,o=new ft,a=new Q1({depthPacking:xS}),l=new eM,c={},f=n.maxTextureSize,h={[cr]:dn,[dn]:cr,[Yn]:Yn},d=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:bA,fragmentShader:PA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new On;g.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new bt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_0;let u=this.type;this.render=function(A,R,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),z=t.state;z.setBlending(sr),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const X=u!==xi&&this.type===xi,se=u===xi&&this.type!==xi;for(let k=0,j=A.length;k<j;k++){const te=A[k],U=te.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const Z=U.getFrameExtents();if(r.multiply(Z),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Z.x),r.x=s.x*Z.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Z.y),r.y=s.y*Z.y,U.mapSize.y=s.y)),U.map===null||X===!0||se===!0){const ve=this.type!==xi?{minFilter:Jn,magFilter:Jn}:{};U.map!==null&&U.map.dispose(),U.map=new Hr(r.x,r.y,ve),U.map.texture.name=te.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const ae=U.getViewportCount();for(let ve=0;ve<ae;ve++){const Ie=U.getViewport(ve);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),z.viewport(o),U.updateMatrices(te,ve),i=U.getFrustum(),y(R,b,U.camera,te,this.type)}U.isPointLightShadow!==!0&&this.type===xi&&_(U,b),U.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,M,N)};function _(A,R){const b=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,b,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,b,p,v,null)}function x(A,R,b,E){let M=null;const N=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)M=N;else if(M=b.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=M.uuid,X=R.uuid;let se=c[z];se===void 0&&(se={},c[z]=se);let k=se[X];k===void 0&&(k=M.clone(),se[X]=k,R.addEventListener("dispose",C)),M=k}if(M.visible=R.visible,M.wireframe=R.wireframe,E===xi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=t.properties.get(M);z.light=b}return M}function y(A,R,b,E,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===xi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const X=e.update(A),se=A.material;if(Array.isArray(se)){const k=X.groups;for(let j=0,te=k.length;j<te;j++){const U=k[j],Z=se[U.materialIndex];if(Z&&Z.visible){const ae=x(A,Z,E,M);A.onBeforeShadow(t,A,R,b,X,ae,U),t.renderBufferDirect(b,null,X,ae,A,U),A.onAfterShadow(t,A,R,b,X,ae,U)}}}else if(se.visible){const k=x(A,se,E,M);A.onBeforeShadow(t,A,R,b,X,k,null),t.renderBufferDirect(b,null,X,k,A,null),A.onAfterShadow(t,A,R,b,X,k,null)}}const z=A.children;for(let X=0,se=z.length;X<se;X++)y(z[X],R,b,E,M)}function C(A){A.target.removeEventListener("dispose",C);for(const b in c){const E=c[b],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const DA={[Lf]:Df,[Nf]:Ff,[If]:Of,[Ws]:Uf,[Df]:Lf,[Ff]:Nf,[Of]:If,[Uf]:Ws};function NA(t,e){function n(){let L=!1;const q=new ft;let le=null;const de=new ft(0,0,0,0);return{setMask:function(ie){le!==ie&&!L&&(t.colorMask(ie,ie,ie,ie),le=ie)},setLocked:function(ie){L=ie},setClear:function(ie,K,Ae,Oe,Qe){Qe===!0&&(ie*=Oe,K*=Oe,Ae*=Oe),q.set(ie,K,Ae,Oe),de.equals(q)===!1&&(t.clearColor(ie,K,Ae,Oe),de.copy(q))},reset:function(){L=!1,le=null,de.set(-1,0,0,0)}}}function i(){let L=!1,q=!1,le=null,de=null,ie=null;return{setReversed:function(K){if(q!==K){const Ae=e.get("EXT_clip_control");K?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),q=K;const Oe=ie;ie=null,this.setClear(Oe)}},getReversed:function(){return q},setTest:function(K){K?ue(t.DEPTH_TEST):Le(t.DEPTH_TEST)},setMask:function(K){le!==K&&!L&&(t.depthMask(K),le=K)},setFunc:function(K){if(q&&(K=DA[K]),de!==K){switch(K){case Lf:t.depthFunc(t.NEVER);break;case Df:t.depthFunc(t.ALWAYS);break;case Nf:t.depthFunc(t.LESS);break;case Ws:t.depthFunc(t.LEQUAL);break;case If:t.depthFunc(t.EQUAL);break;case Uf:t.depthFunc(t.GEQUAL);break;case Ff:t.depthFunc(t.GREATER);break;case Of:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=K}},setLocked:function(K){L=K},setClear:function(K){ie!==K&&(q&&(K=1-K),t.clearDepth(K),ie=K)},reset:function(){L=!1,le=null,de=null,ie=null,q=!1}}}function r(){let L=!1,q=null,le=null,de=null,ie=null,K=null,Ae=null,Oe=null,Qe=null;return{setTest:function(nt){L||(nt?ue(t.STENCIL_TEST):Le(t.STENCIL_TEST))},setMask:function(nt){q!==nt&&!L&&(t.stencilMask(nt),q=nt)},setFunc:function(nt,et,Ft){(le!==nt||de!==et||ie!==Ft)&&(t.stencilFunc(nt,et,Ft),le=nt,de=et,ie=Ft)},setOp:function(nt,et,Ft){(K!==nt||Ae!==et||Oe!==Ft)&&(t.stencilOp(nt,et,Ft),K=nt,Ae=et,Oe=Ft)},setLocked:function(nt){L=nt},setClear:function(nt){Qe!==nt&&(t.clearStencil(nt),Qe=nt)},reset:function(){L=!1,q=null,le=null,de=null,ie=null,K=null,Ae=null,Oe=null,Qe=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,u=null,_=null,x=null,y=null,C=null,A=null,R=new Ze(0,0,0),b=0,E=!1,M=null,N=null,z=null,X=null,se=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,te=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(U)[1]),j=te>=1):U.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),j=te>=2);let Z=null,ae={};const ve=t.getParameter(t.SCISSOR_BOX),Ie=t.getParameter(t.VIEWPORT),We=new ft().fromArray(ve),qe=new ft().fromArray(Ie);function $e(L,q,le,de){const ie=new Uint8Array(4),K=t.createTexture();t.bindTexture(L,K),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ae=0;Ae<le;Ae++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(q,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(q+Ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return K}const J={};J[t.TEXTURE_2D]=$e(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=$e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=$e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=$e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(t.DEPTH_TEST),o.setFunc(Ws),re(!1),V(Yp),ue(t.CULL_FACE),fe(sr);function ue(L){f[L]!==!0&&(t.enable(L),f[L]=!0)}function Le(L){f[L]!==!1&&(t.disable(L),f[L]=!1)}function Ue(L,q){return h[L]!==q?(t.bindFramebuffer(L,q),h[L]=q,L===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=q),L===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=q),!0):!1}function Fe(L,q){let le=p,de=!1;if(L){le=d.get(q),le===void 0&&(le=[],d.set(q,le));const ie=L.textures;if(le.length!==ie.length||le[0]!==t.COLOR_ATTACHMENT0){for(let K=0,Ae=ie.length;K<Ae;K++)le[K]=t.COLOR_ATTACHMENT0+K;le.length=ie.length,de=!0}}else le[0]!==t.BACK&&(le[0]=t.BACK,de=!0);de&&t.drawBuffers(le)}function Ke(L){return g!==L?(t.useProgram(L),g=L,!0):!1}const ot={[Tr]:t.FUNC_ADD,[Xy]:t.FUNC_SUBTRACT,[jy]:t.FUNC_REVERSE_SUBTRACT};ot[Yy]=t.MIN,ot[qy]=t.MAX;const P={[$y]:t.ZERO,[Ky]:t.ONE,[Zy]:t.SRC_COLOR,[bf]:t.SRC_ALPHA,[iS]:t.SRC_ALPHA_SATURATE,[tS]:t.DST_COLOR,[Qy]:t.DST_ALPHA,[Jy]:t.ONE_MINUS_SRC_COLOR,[Pf]:t.ONE_MINUS_SRC_ALPHA,[nS]:t.ONE_MINUS_DST_COLOR,[eS]:t.ONE_MINUS_DST_ALPHA,[rS]:t.CONSTANT_COLOR,[sS]:t.ONE_MINUS_CONSTANT_COLOR,[oS]:t.CONSTANT_ALPHA,[aS]:t.ONE_MINUS_CONSTANT_ALPHA};function fe(L,q,le,de,ie,K,Ae,Oe,Qe,nt){if(L===sr){v===!0&&(Le(t.BLEND),v=!1);return}if(v===!1&&(ue(t.BLEND),v=!0),L!==Wy){if(L!==m||nt!==E){if((u!==Tr||y!==Tr)&&(t.blendEquation(t.FUNC_ADD),u=Tr,y=Tr),nt)switch(L){case Us:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qp:t.blendFunc(t.ONE,t.ONE);break;case $p:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Kp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Us:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case $p:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,x=null,C=null,A=null,R.set(0,0,0),b=0,m=L,E=nt}return}ie=ie||q,K=K||le,Ae=Ae||de,(q!==u||ie!==y)&&(t.blendEquationSeparate(ot[q],ot[ie]),u=q,y=ie),(le!==_||de!==x||K!==C||Ae!==A)&&(t.blendFuncSeparate(P[le],P[de],P[K],P[Ae]),_=le,x=de,C=K,A=Ae),(Oe.equals(R)===!1||Qe!==b)&&(t.blendColor(Oe.r,Oe.g,Oe.b,Qe),R.copy(Oe),b=Qe),m=L,E=!1}function oe(L,q){L.side===Yn?Le(t.CULL_FACE):ue(t.CULL_FACE);let le=L.side===dn;q&&(le=!le),re(le),L.blending===Us&&L.transparent===!1?fe(sr):fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const de=L.stencilWrite;a.setTest(de),de&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),$(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):Le(t.SAMPLE_ALPHA_TO_COVERAGE)}function re(L){M!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),M=L)}function V(L){L!==Vy?(ue(t.CULL_FACE),L!==N&&(L===Yp?t.cullFace(t.BACK):L===Gy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Le(t.CULL_FACE),N=L}function Q(L){L!==z&&(j&&t.lineWidth(L),z=L)}function $(L,q,le){L?(ue(t.POLYGON_OFFSET_FILL),(X!==q||se!==le)&&(t.polygonOffset(q,le),X=q,se=le)):Le(t.POLYGON_OFFSET_FILL)}function Y(L){L?ue(t.SCISSOR_TEST):Le(t.SCISSOR_TEST)}function Ce(L){L===void 0&&(L=t.TEXTURE0+k-1),Z!==L&&(t.activeTexture(L),Z=L)}function Me(L,q,le){le===void 0&&(Z===null?le=t.TEXTURE0+k-1:le=Z);let de=ae[le];de===void 0&&(de={type:void 0,texture:void 0},ae[le]=de),(de.type!==L||de.texture!==q)&&(Z!==le&&(t.activeTexture(le),Z=le),t.bindTexture(L,q||J[L]),de.type=L,de.texture=q)}function T(){const L=ae[Z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{t.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{t.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{t.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{t.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{t.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(L){We.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),We.copy(L))}function we(L){qe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),qe.copy(L))}function Te(L,q){let le=c.get(q);le===void 0&&(le=new WeakMap,c.set(q,le));let de=le.get(L);de===void 0&&(de=t.getUniformBlockIndex(q,L.name),le.set(L,de))}function xe(L,q){const de=c.get(q).get(L);l.get(q)!==de&&(t.uniformBlockBinding(q,de,L.__bindingPointIndex),l.set(q,de))}function Ee(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},Z=null,ae={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,u=null,_=null,x=null,y=null,C=null,A=null,R=new Ze(0,0,0),b=0,E=!1,M=null,N=null,z=null,X=null,se=null,We.set(0,0,t.canvas.width,t.canvas.height),qe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:Le,bindFramebuffer:Ue,drawBuffers:Fe,useProgram:Ke,setBlending:fe,setMaterial:oe,setFlipSided:re,setCullFace:V,setLineWidth:Q,setPolygonOffset:$,setScissorTest:Y,activeTexture:Ce,bindTexture:Me,unbindTexture:T,compressedTexImage2D:S,compressedTexImage3D:I,texImage2D:me,texImage3D:ee,updateUBOMapping:Te,uniformBlockBinding:xe,texStorage2D:he,texStorage3D:Pe,texSubImage2D:B,texSubImage3D:ne,compressedTexSubImage2D:H,compressedTexSubImage3D:Se,scissor:ge,viewport:we,reset:Ee}}function IA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return p?new OffscreenCanvas(T,S):tc("canvas")}function v(T,S,I){let B=1;const ne=Me(T);if((ne.width>I||ne.height>I)&&(B=I/Math.max(ne.width,ne.height)),B<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const H=Math.floor(B*ne.width),Se=Math.floor(B*ne.height);h===void 0&&(h=g(H,Se));const he=S?g(H,Se):h;return he.width=H,he.height=Se,he.getContext("2d").drawImage(T,0,0,H,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+H+"x"+Se+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){t.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(T,S,I,B,ne=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let H=S;if(S===t.RED&&(I===t.FLOAT&&(H=t.R32F),I===t.HALF_FLOAT&&(H=t.R16F),I===t.UNSIGNED_BYTE&&(H=t.R8)),S===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(H=t.R8UI),I===t.UNSIGNED_SHORT&&(H=t.R16UI),I===t.UNSIGNED_INT&&(H=t.R32UI),I===t.BYTE&&(H=t.R8I),I===t.SHORT&&(H=t.R16I),I===t.INT&&(H=t.R32I)),S===t.RG&&(I===t.FLOAT&&(H=t.RG32F),I===t.HALF_FLOAT&&(H=t.RG16F),I===t.UNSIGNED_BYTE&&(H=t.RG8)),S===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(H=t.RG8UI),I===t.UNSIGNED_SHORT&&(H=t.RG16UI),I===t.UNSIGNED_INT&&(H=t.RG32UI),I===t.BYTE&&(H=t.RG8I),I===t.SHORT&&(H=t.RG16I),I===t.INT&&(H=t.RG32I)),S===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(H=t.RGB8UI),I===t.UNSIGNED_SHORT&&(H=t.RGB16UI),I===t.UNSIGNED_INT&&(H=t.RGB32UI),I===t.BYTE&&(H=t.RGB8I),I===t.SHORT&&(H=t.RGB16I),I===t.INT&&(H=t.RGB32I)),S===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(H=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(H=t.RGBA16UI),I===t.UNSIGNED_INT&&(H=t.RGBA32UI),I===t.BYTE&&(H=t.RGBA8I),I===t.SHORT&&(H=t.RGBA16I),I===t.INT&&(H=t.RGBA32I)),S===t.RGB&&(I===t.UNSIGNED_INT_5_9_9_9_REV&&(H=t.RGB9_E5),I===t.UNSIGNED_INT_10F_11F_11F_REV&&(H=t.R11F_G11F_B10F)),S===t.RGBA){const Se=ne?Ql:st.getTransfer(B);I===t.FLOAT&&(H=t.RGBA32F),I===t.HALF_FLOAT&&(H=t.RGBA16F),I===t.UNSIGNED_BYTE&&(H=Se===ct?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(H=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(H=t.RGB5_A1)}return(H===t.R16F||H===t.R32F||H===t.RG16F||H===t.RG32F||H===t.RGBA16F||H===t.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function y(T,S){let I;return T?S===null||S===zr||S===sa?I=t.DEPTH24_STENCIL8:S===Ti?I=t.DEPTH32F_STENCIL8:S===ra&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===zr||S===sa?I=t.DEPTH_COMPONENT24:S===Ti?I=t.DEPTH_COMPONENT32F:S===ra&&(I=t.DEPTH_COMPONENT16),I}function C(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Jn&&T.minFilter!==ri?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function A(T){const S=T.target;S.removeEventListener("dispose",A),b(S),S.isVideoTexture&&f.delete(S)}function R(T){const S=T.target;S.removeEventListener("dispose",R),M(S)}function b(T){const S=i.get(T);if(S.__webglInit===void 0)return;const I=T.source,B=d.get(I);if(B){const ne=B[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(T),Object.keys(B).length===0&&d.delete(I)}i.remove(T)}function E(T){const S=i.get(T);t.deleteTexture(S.__webglTexture);const I=T.source,B=d.get(I);delete B[S.__cacheKey],o.memory.textures--}function M(T){const S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(S.__webglFramebuffer[B]))for(let ne=0;ne<S.__webglFramebuffer[B].length;ne++)t.deleteFramebuffer(S.__webglFramebuffer[B][ne]);else t.deleteFramebuffer(S.__webglFramebuffer[B]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[B])}else{if(Array.isArray(S.__webglFramebuffer))for(let B=0;B<S.__webglFramebuffer.length;B++)t.deleteFramebuffer(S.__webglFramebuffer[B]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let B=0;B<S.__webglColorRenderbuffer.length;B++)S.__webglColorRenderbuffer[B]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[B]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const I=T.textures;for(let B=0,ne=I.length;B<ne;B++){const H=i.get(I[B]);H.__webglTexture&&(t.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(I[B])}i.remove(T)}let N=0;function z(){N=0}function X(){const T=N;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),N+=1,T}function se(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function k(T,S){const I=i.get(T);if(T.isVideoTexture&&Y(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){const B=T.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(I,T,S);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+S)}function j(T,S){const I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){J(I,T,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+S)}function te(T,S){const I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){J(I,T,S);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+S)}function U(T,S){const I=i.get(T);if(T.version>0&&I.__version!==T.version){ue(I,T,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+S)}const Z={[Bf]:t.REPEAT,[Pr]:t.CLAMP_TO_EDGE,[Hf]:t.MIRRORED_REPEAT},ae={[Jn]:t.NEAREST,[_S]:t.NEAREST_MIPMAP_NEAREST,[ka]:t.NEAREST_MIPMAP_LINEAR,[ri]:t.LINEAR,[Qc]:t.LINEAR_MIPMAP_NEAREST,[Lr]:t.LINEAR_MIPMAP_LINEAR},ve={[SS]:t.NEVER,[RS]:t.ALWAYS,[MS]:t.LESS,[P0]:t.LEQUAL,[ES]:t.EQUAL,[AS]:t.GEQUAL,[wS]:t.GREATER,[TS]:t.NOTEQUAL};function Ie(T,S){if(S.type===Ti&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ri||S.magFilter===Qc||S.magFilter===ka||S.magFilter===Lr||S.minFilter===ri||S.minFilter===Qc||S.minFilter===ka||S.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,Z[S.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,Z[S.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,Z[S.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ae[S.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Jn||S.minFilter!==ka&&S.minFilter!==Lr||S.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function We(T,S){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",A));const B=S.source;let ne=d.get(B);ne===void 0&&(ne={},d.set(B,ne));const H=se(S);if(H!==T.__cacheKey){ne[H]===void 0&&(ne[H]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),ne[H].usedTimes++;const Se=ne[T.__cacheKey];Se!==void 0&&(ne[T.__cacheKey].usedTimes--,Se.usedTimes===0&&E(S)),T.__cacheKey=H,T.__webglTexture=ne[H].texture}return I}function qe(T,S,I){return Math.floor(Math.floor(T/I)/S)}function $e(T,S,I,B){const H=T.updateRanges;if(H.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,I,B,S.data);else{H.sort((ee,ge)=>ee.start-ge.start);let Se=0;for(let ee=1;ee<H.length;ee++){const ge=H[Se],we=H[ee],Te=ge.start+ge.count,xe=qe(we.start,S.width,4),Ee=qe(ge.start,S.width,4);we.start<=Te+1&&xe===Ee&&qe(we.start+we.count-1,S.width,4)===xe?ge.count=Math.max(ge.count,we.start+we.count-ge.start):(++Se,H[Se]=we)}H.length=Se+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Pe=t.getParameter(t.UNPACK_SKIP_PIXELS),me=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let ee=0,ge=H.length;ee<ge;ee++){const we=H[ee],Te=Math.floor(we.start/4),xe=Math.ceil(we.count/4),Ee=Te%S.width,L=Math.floor(Te/S.width),q=xe,le=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Ee,L,q,le,I,B,S.data)}T.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(t.UNPACK_SKIP_ROWS,me)}}function J(T,S,I){let B=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(B=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(B=t.TEXTURE_3D);const ne=We(T,S),H=S.source;n.bindTexture(B,T.__webglTexture,t.TEXTURE0+I);const Se=i.get(H);if(H.version!==Se.__version||ne===!0){n.activeTexture(t.TEXTURE0+I);const he=st.getPrimaries(st.workingColorSpace),Pe=S.colorSpace===Yi?null:st.getPrimaries(S.colorSpace),me=S.colorSpace===Yi||he===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let ee=v(S.image,!1,r.maxTextureSize);ee=Ce(S,ee);const ge=s.convert(S.format,S.colorSpace),we=s.convert(S.type);let Te=x(S.internalFormat,ge,we,S.colorSpace,S.isVideoTexture);Ie(B,S);let xe;const Ee=S.mipmaps,L=S.isVideoTexture!==!0,q=Se.__version===void 0||ne===!0,le=H.dataReady,de=C(S,ee);if(S.isDepthTexture)Te=y(S.format===aa,S.type),q&&(L?n.texStorage2D(t.TEXTURE_2D,1,Te,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Te,ee.width,ee.height,0,ge,we,null));else if(S.isDataTexture)if(Ee.length>0){L&&q&&n.texStorage2D(t.TEXTURE_2D,de,Te,Ee[0].width,Ee[0].height);for(let ie=0,K=Ee.length;ie<K;ie++)xe=Ee[ie],L?le&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,xe.width,xe.height,ge,we,xe.data):n.texImage2D(t.TEXTURE_2D,ie,Te,xe.width,xe.height,0,ge,we,xe.data);S.generateMipmaps=!1}else L?(q&&n.texStorage2D(t.TEXTURE_2D,de,Te,ee.width,ee.height),le&&$e(S,ee,ge,we)):n.texImage2D(t.TEXTURE_2D,0,Te,ee.width,ee.height,0,ge,we,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&q&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Te,Ee[0].width,Ee[0].height,ee.depth);for(let ie=0,K=Ee.length;ie<K;ie++)if(xe=Ee[ie],S.format!==$n)if(ge!==null)if(L){if(le)if(S.layerUpdates.size>0){const Ae=Pm(xe.width,xe.height,S.format,S.type);for(const Oe of S.layerUpdates){const Qe=xe.data.subarray(Oe*Ae/xe.data.BYTES_PER_ELEMENT,(Oe+1)*Ae/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,Oe,xe.width,xe.height,1,ge,Qe)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,xe.width,xe.height,ee.depth,ge,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Te,xe.width,xe.height,ee.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?le&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,xe.width,xe.height,ee.depth,ge,we,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Te,xe.width,xe.height,ee.depth,0,ge,we,xe.data)}else{L&&q&&n.texStorage2D(t.TEXTURE_2D,de,Te,Ee[0].width,Ee[0].height);for(let ie=0,K=Ee.length;ie<K;ie++)xe=Ee[ie],S.format!==$n?ge!==null?L?le&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,xe.width,xe.height,ge,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Te,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?le&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,xe.width,xe.height,ge,we,xe.data):n.texImage2D(t.TEXTURE_2D,ie,Te,xe.width,xe.height,0,ge,we,xe.data)}else if(S.isDataArrayTexture)if(L){if(q&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Te,ee.width,ee.height,ee.depth),le)if(S.layerUpdates.size>0){const ie=Pm(ee.width,ee.height,S.format,S.type);for(const K of S.layerUpdates){const Ae=ee.data.subarray(K*ie/ee.data.BYTES_PER_ELEMENT,(K+1)*ie/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,ge,we,Ae)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ge,we,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ee.width,ee.height,ee.depth,0,ge,we,ee.data);else if(S.isData3DTexture)L?(q&&n.texStorage3D(t.TEXTURE_3D,de,Te,ee.width,ee.height,ee.depth),le&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ge,we,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ee.width,ee.height,ee.depth,0,ge,we,ee.data);else if(S.isFramebufferTexture){if(q)if(L)n.texStorage2D(t.TEXTURE_2D,de,Te,ee.width,ee.height);else{let ie=ee.width,K=ee.height;for(let Ae=0;Ae<de;Ae++)n.texImage2D(t.TEXTURE_2D,Ae,Te,ie,K,0,ge,we,null),ie>>=1,K>>=1}}else if(Ee.length>0){if(L&&q){const ie=Me(Ee[0]);n.texStorage2D(t.TEXTURE_2D,de,Te,ie.width,ie.height)}for(let ie=0,K=Ee.length;ie<K;ie++)xe=Ee[ie],L?le&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ge,we,xe):n.texImage2D(t.TEXTURE_2D,ie,Te,ge,we,xe);S.generateMipmaps=!1}else if(L){if(q){const ie=Me(ee);n.texStorage2D(t.TEXTURE_2D,de,Te,ie.width,ie.height)}le&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,we,ee)}else n.texImage2D(t.TEXTURE_2D,0,Te,ge,we,ee);m(S)&&u(B),Se.__version=H.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ue(T,S,I){if(S.image.length!==6)return;const B=We(T,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+I);const H=i.get(ne);if(ne.version!==H.__version||B===!0){n.activeTexture(t.TEXTURE0+I);const Se=st.getPrimaries(st.workingColorSpace),he=S.colorSpace===Yi?null:st.getPrimaries(S.colorSpace),Pe=S.colorSpace===Yi||Se===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const me=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,ge=[];for(let K=0;K<6;K++)!me&&!ee?ge[K]=v(S.image[K],!0,r.maxCubemapSize):ge[K]=ee?S.image[K].image:S.image[K],ge[K]=Ce(S,ge[K]);const we=ge[0],Te=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),Ee=x(S.internalFormat,Te,xe,S.colorSpace),L=S.isVideoTexture!==!0,q=H.__version===void 0||B===!0,le=ne.dataReady;let de=C(S,we);Ie(t.TEXTURE_CUBE_MAP,S);let ie;if(me){L&&q&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ee,we.width,we.height);for(let K=0;K<6;K++){ie=ge[K].mipmaps;for(let Ae=0;Ae<ie.length;Ae++){const Oe=ie[Ae];S.format!==$n?Te!==null?L?le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae,0,0,Oe.width,Oe.height,Te,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae,Ee,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae,0,0,Oe.width,Oe.height,Te,xe,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae,Ee,Oe.width,Oe.height,0,Te,xe,Oe.data)}}}else{if(ie=S.mipmaps,L&&q){ie.length>0&&de++;const K=Me(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ee,K.width,K.height)}for(let K=0;K<6;K++)if(ee){L?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ge[K].width,ge[K].height,Te,xe,ge[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,ge[K].width,ge[K].height,0,Te,xe,ge[K].data);for(let Ae=0;Ae<ie.length;Ae++){const Qe=ie[Ae].image[K].image;L?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae+1,0,0,Qe.width,Qe.height,Te,xe,Qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae+1,Ee,Qe.width,Qe.height,0,Te,xe,Qe.data)}}else{L?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Te,xe,ge[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,Te,xe,ge[K]);for(let Ae=0;Ae<ie.length;Ae++){const Oe=ie[Ae];L?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae+1,0,0,Te,xe,Oe.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae+1,Ee,Te,xe,Oe.image[K])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),H.__version=ne.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Le(T,S,I,B,ne,H){const Se=s.convert(I.format,I.colorSpace),he=s.convert(I.type),Pe=x(I.internalFormat,Se,he,I.colorSpace),me=i.get(S),ee=i.get(I);if(ee.__renderTarget=S,!me.__hasExternalTextures){const ge=Math.max(1,S.width>>H),we=Math.max(1,S.height>>H);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,H,Pe,ge,we,S.depth,0,Se,he,null):n.texImage2D(ne,H,Pe,ge,we,0,Se,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),$(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,B,ne,ee.__webglTexture,0,Q(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,B,ne,ee.__webglTexture,H),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(T,S,I){if(t.bindRenderbuffer(t.RENDERBUFFER,T),S.depthBuffer){const B=S.depthTexture,ne=B&&B.isDepthTexture?B.type:null,H=y(S.stencilBuffer,ne),Se=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=Q(S);$(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,H,S.width,S.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,H,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,H,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,T)}else{const B=S.textures;for(let ne=0;ne<B.length;ne++){const H=B[ne],Se=s.convert(H.format,H.colorSpace),he=s.convert(H.type),Pe=x(H.internalFormat,Se,he,H.colorSpace),me=Q(S);I&&$(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,Pe,S.width,S.height):$(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,Pe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Pe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Fe(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=i.get(S.depthTexture);B.__renderTarget=S,(!B.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const ne=B.__webglTexture,H=Q(S);if(S.depthTexture.format===oa)$(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,H):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(S.depthTexture.format===aa)$(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,H):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ke(T){const S=i.get(T),I=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const B=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),B){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,B.removeEventListener("dispose",ne)};B.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=B}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const B=T.texture.mipmaps;B&&B.length>0?Fe(S.__webglFramebuffer[0],T):Fe(S.__webglFramebuffer,T)}else if(I){S.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[B]),S.__webglDepthbuffer[B]===void 0)S.__webglDepthbuffer[B]=t.createRenderbuffer(),Ue(S.__webglDepthbuffer[B],T,!1);else{const ne=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,H=S.__webglDepthbuffer[B];t.bindRenderbuffer(t.RENDERBUFFER,H),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,H)}}else{const B=T.texture.mipmaps;if(B&&B.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Ue(S.__webglDepthbuffer,T,!1);else{const ne=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,H=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,H),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,H)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ot(T,S,I){const B=i.get(T);S!==void 0&&Le(B.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Ke(T)}function P(T){const S=T.texture,I=i.get(T),B=i.get(S);T.addEventListener("dispose",R);const ne=T.textures,H=T.isWebGLCubeRenderTarget===!0,Se=ne.length>1;if(Se||(B.__webglTexture===void 0&&(B.__webglTexture=t.createTexture()),B.__version=S.version,o.memory.textures++),H){I.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[he]=[];for(let Pe=0;Pe<S.mipmaps.length;Pe++)I.__webglFramebuffer[he][Pe]=t.createFramebuffer()}else I.__webglFramebuffer[he]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)I.__webglFramebuffer[he]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(Se)for(let he=0,Pe=ne.length;he<Pe;he++){const me=i.get(ne[he]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&$(T)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const Pe=ne[he];I.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[he]);const me=s.convert(Pe.format,Pe.colorSpace),ee=s.convert(Pe.type),ge=x(Pe.internalFormat,me,ee,Pe.colorSpace,T.isXRRenderTarget===!0),we=Q(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,we,ge,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,I.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(I.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(H){n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)Le(I.__webglFramebuffer[he][Pe],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe);else Le(I.__webglFramebuffer[he],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let he=0,Pe=ne.length;he<Pe;he++){const me=ne[he],ee=i.get(me);let ge=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ge=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,ee.__webglTexture),Ie(ge,me),Le(I.__webglFramebuffer,T,me,t.COLOR_ATTACHMENT0+he,ge,0),m(me)&&u(ge)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,B.__webglTexture),Ie(he,S),S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)Le(I.__webglFramebuffer[Pe],T,S,t.COLOR_ATTACHMENT0,he,Pe);else Le(I.__webglFramebuffer,T,S,t.COLOR_ATTACHMENT0,he,0);m(S)&&u(he),n.unbindTexture()}T.depthBuffer&&Ke(T)}function fe(T){const S=T.textures;for(let I=0,B=S.length;I<B;I++){const ne=S[I];if(m(ne)){const H=_(T),Se=i.get(ne).__webglTexture;n.bindTexture(H,Se),u(H),n.unbindTexture()}}}const oe=[],re=[];function V(T){if(T.samples>0){if($(T)===!1){const S=T.textures,I=T.width,B=T.height;let ne=t.COLOR_BUFFER_BIT;const H=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(T),he=S.length>1;if(he)for(let me=0;me<S.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Pe=T.texture.mipmaps;Pe&&Pe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let me=0;me<S.length;me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);const ee=i.get(S[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,I,B,0,0,I,B,ne,t.NEAREST),l===!0&&(oe.length=0,re.length=0,oe.push(t.COLOR_ATTACHMENT0+me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(oe.push(H),re.push(H),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,re)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,oe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let me=0;me<S.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);const ee=i.get(S[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Q(T){return Math.min(r.maxSamples,T.samples)}function $(T){const S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Y(T){const S=o.render.frame;f.get(T)!==S&&(f.set(T,S),T.update())}function Ce(T,S){const I=T.colorSpace,B=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==Ys&&I!==Yi&&(st.getTransfer(I)===ct?(B!==$n||ne!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=z,this.setTexture2D=k,this.setTexture2DArray=j,this.setTexture3D=te,this.setTextureCube=U,this.rebindTextures=ot,this.setupRenderTarget=P,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=$}function UA(t,e){function n(i,r=Yi){let s;const o=st.getTransfer(r);if(i===ci)return t.UNSIGNED_BYTE;if(i===_d)return t.UNSIGNED_SHORT_4_4_4_4;if(i===vd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===E0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===w0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===S0)return t.BYTE;if(i===M0)return t.SHORT;if(i===ra)return t.UNSIGNED_SHORT;if(i===gd)return t.INT;if(i===zr)return t.UNSIGNED_INT;if(i===Ti)return t.FLOAT;if(i===va)return t.HALF_FLOAT;if(i===T0)return t.ALPHA;if(i===A0)return t.RGB;if(i===$n)return t.RGBA;if(i===oa)return t.DEPTH_COMPONENT;if(i===aa)return t.DEPTH_STENCIL;if(i===R0)return t.RED;if(i===xd)return t.RED_INTEGER;if(i===C0)return t.RG;if(i===yd)return t.RG_INTEGER;if(i===Sd)return t.RGBA_INTEGER;if(i===wl||i===Tl||i===Al||i===Rl)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vf||i===Gf||i===Wf||i===Xf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jf||i===Yf||i===qf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jf||i===Yf)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$f||i===Kf||i===Zf||i===Jf||i===Qf||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$f)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===th)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ih)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ah)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ch||i===uh||i===fh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ch)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hh||i===dh||i===ph||i===mh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ph)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const FA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new V0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ur({vertexShader:FA,fragmentShader:OA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bt(new Mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zA extends jr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new kA,u={},_=n.getContextAttributes();let x=null,y=null;const C=[],A=[],R=new ye;let b=null;const E=new xn;E.viewport=new ft;const M=new xn;M.viewport=new ft;const N=[E,M],z=new sM;let X=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ue=C[J];return ue===void 0&&(ue=new yu,C[J]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(J){let ue=C[J];return ue===void 0&&(ue=new yu,C[J]=ue),ue.getGripSpace()},this.getHand=function(J){let ue=C[J];return ue===void 0&&(ue=new yu,C[J]=ue),ue.getHandSpace()};function k(J){const ue=A.indexOf(J.inputSource);if(ue===-1)return;const Le=C[ue];Le!==void 0&&(Le.update(J.inputSource,J.frame,c||o),Le.dispatchEvent({type:J.type,data:J.inputSource}))}function j(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",te);for(let J=0;J<C.length;J++){const ue=A[J];ue!==null&&(A[J]=null,C[J].disconnect(ue))}X=null,se=null,m.reset();for(const J in u)delete u[J];e.setRenderTarget(x),p=null,d=null,h=null,r=null,y=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",j),r.addEventListener("inputsourceschange",te),_.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,Ue=null,Fe=null;_.depth&&(Fe=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Le=_.stencil?aa:oa,Ue=_.stencil?sa:zr);const Ke={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ke),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Hr(d.textureWidth,d.textureHeight,{format:$n,type:ci,depthTexture:new H0(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Hr(p.framebufferWidth,p.framebufferHeight,{format:$n,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(J){for(let ue=0;ue<J.removed.length;ue++){const Le=J.removed[ue],Ue=A.indexOf(Le);Ue>=0&&(A[Ue]=null,C[Ue].disconnect(Le))}for(let ue=0;ue<J.added.length;ue++){const Le=J.added[ue];let Ue=A.indexOf(Le);if(Ue===-1){for(let Ke=0;Ke<C.length;Ke++)if(Ke>=A.length){A.push(Le),Ue=Ke;break}else if(A[Ke]===null){A[Ke]=Le,Ue=Ke;break}if(Ue===-1)break}const Fe=C[Ue];Fe&&Fe.connect(Le)}}const U=new D,Z=new D;function ae(J,ue,Le){U.setFromMatrixPosition(ue.matrixWorld),Z.setFromMatrixPosition(Le.matrixWorld);const Ue=U.distanceTo(Z),Fe=ue.projectionMatrix.elements,Ke=Le.projectionMatrix.elements,ot=Fe[14]/(Fe[10]-1),P=Fe[14]/(Fe[10]+1),fe=(Fe[9]+1)/Fe[5],oe=(Fe[9]-1)/Fe[5],re=(Fe[8]-1)/Fe[0],V=(Ke[8]+1)/Ke[0],Q=ot*re,$=ot*V,Y=Ue/(-re+V),Ce=Y*-re;if(ue.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ce),J.translateZ(Y),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Fe[10]===-1)J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Me=ot+Y,T=P+Y,S=Q-Ce,I=$+(Ue-Ce),B=fe*P/T*Me,ne=oe*P/T*Me;J.projectionMatrix.makePerspective(S,I,B,ne,Me,T),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ve(J,ue){ue===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ue.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ue=J.near,Le=J.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(Le=m.depthFar)),z.near=M.near=E.near=ue,z.far=M.far=E.far=Le,(X!==z.near||se!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),X=z.near,se=z.far),z.layers.mask=J.layers.mask|6,E.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;const Ue=J.parent,Fe=z.cameras;ve(z,Ue);for(let Ke=0;Ke<Fe.length;Ke++)ve(Fe[Ke],Ue);Fe.length===2?ae(z,E,M):z.projectionMatrix.copy(E.projectionMatrix),Ie(J,z,Ue)};function Ie(J,ue,Le){Le===null?J.matrix.copy(ue.matrixWorld):(J.matrix.copy(Le.matrixWorld),J.matrix.invert(),J.matrix.multiply(ue.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=la*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(J){return u[J]};let We=null;function qe(J,ue){if(f=ue.getViewerPose(c||o),g=ue,f!==null){const Le=f.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ue=!1;Le.length!==z.cameras.length&&(z.cameras.length=0,Ue=!0);for(let P=0;P<Le.length;P++){const fe=Le[P];let oe=null;if(p!==null)oe=p.getViewport(fe);else{const V=h.getViewSubImage(d,fe);oe=V.viewport,P===0&&(e.setRenderTargetTextures(y,V.colorTexture,V.depthStencilTexture),e.setRenderTarget(y))}let re=N[P];re===void 0&&(re=new xn,re.layers.enable(P),re.viewport=new ft,N[P]=re),re.matrix.fromArray(fe.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(fe.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(oe.x,oe.y,oe.width,oe.height),P===0&&(z.matrix.copy(re.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ue===!0&&z.cameras.push(re)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const P=h.getDepthInformation(Le[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(Fe&&Fe.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let P=0;P<Le.length;P++){const fe=Le[P].camera;if(fe){let oe=u[fe];oe||(oe=new V0,u[fe]=oe);const re=h.getCameraImage(fe);oe.sourceTexture=re}}}}for(let Le=0;Le<C.length;Le++){const Ue=A[Le],Fe=C[Le];Ue!==null&&Fe!==void 0&&Fe.update(Ue,ue,c||o)}We&&We(J,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const $e=new ev;$e.setAnimationLoop(qe),this.setAnimationLoop=function(J){We=J},this.dispose=function(){}}}const yr=new ui,BA=new vt;function HA(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,O0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===dn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===dn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u),x=_.envMap,y=_.envMapRotation;x&&(m.envMap.value=x,yr.copy(y),yr.x*=-1,yr.y*=-1,yr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),m.envMapRotation.value.setFromMatrix4(BA.makeRotationFromEuler(yr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===dn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const y=x.program;i.uniformBlockBinding(_,y)}function c(_,x){let y=r[_.id];y===void 0&&(g(_),y=f(_),r[_.id]=y,_.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(_,C);const A=e.render.frame;s[_.id]!==A&&(d(_),s[_.id]=A)}function f(_){const x=h();_.__bindingPointIndex=x;const y=t.createBuffer(),C=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=r[_.id],y=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,R=y.length;A<R;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,M=b.length;E<M;E++){const N=b[E];if(p(N,A,E,C)===!0){const z=N.__offset,X=Array.isArray(N.value)?N.value:[N.value];let se=0;for(let k=0;k<X.length;k++){const j=X[k],te=v(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,z+se,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,se),se+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,x,y,C){const A=_.value,R=x+"_"+y;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const b=C[R];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return C[R]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function g(_){const x=_.uniforms;let y=0;const C=16;for(let R=0,b=x.length;R<b;R++){const E=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,N=E.length;M<N;M++){const z=E[M],X=Array.isArray(z.value)?z.value:[z.value];for(let se=0,k=X.length;se<k;se++){const j=X[se],te=v(j),U=y%C,Z=U%te.boundary,ae=U+Z;y+=Z,ae!==0&&C-ae<te.storage&&(y+=C-ae),z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=te.storage}}}const A=y%C;return A>0&&(y+=C-A),_.__size=y,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class GA{constructor(e={}){const{canvas:n=WS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const _=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let C=!1;this._outputColorSpace=Pn;let A=0,R=0,b=null,E=-1,M=null;const N=new ft,z=new ft;let X=null;const se=new Ze(0);let k=0,j=n.width,te=n.height,U=1,Z=null,ae=null;const ve=new ft(0,0,j,te),Ie=new ft(0,0,j,te);let We=!1;const qe=new Ad;let $e=!1,J=!1;const ue=new vt,Le=new D,Ue=new ft,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function ot(){return b===null?U:1}let P=i;function fe(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${md}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",ie,!1),P===null){const F="webgl2";if(P=fe(F,w),P===null)throw fe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let oe,re,V,Q,$,Y,Ce,Me,T,S,I,B,ne,H,Se,he,Pe,me,ee,ge,we,Te,xe,Ee;function L(){oe=new Qw(P),oe.init(),Te=new UA(P,oe),re=new jw(P,oe,e,Te),V=new NA(P,oe),re.reversedDepthBuffer&&d&&V.buffers.depth.setReversed(!0),Q=new nT(P),$=new yA,Y=new IA(P,oe,V,$,re,Te,Q),Ce=new qw(y),Me=new Jw(y),T=new lM(P),xe=new Ww(P,T),S=new eT(P,T,Q,xe),I=new rT(P,S,T,Q),ee=new iT(P,re,Y),he=new Yw($),B=new xA(y,Ce,Me,oe,re,xe,he),ne=new HA(y,$),H=new MA,Se=new CA(oe),me=new Gw(y,Ce,Me,V,I,p,l),Pe=new LA(y,I,re),Ee=new VA(P,Q,re,V),ge=new Xw(P,oe,Q),we=new tT(P,oe,Q),Q.programs=B.programs,y.capabilities=re,y.extensions=oe,y.properties=$,y.renderLists=H,y.shadowMap=Pe,y.state=V,y.info=Q}L();const q=new zA(y,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(j,te,!1))},this.getSize=function(w){return w.set(j,te)},this.setSize=function(w,F,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,te=F,n.width=Math.floor(w*U),n.height=Math.floor(F*U),G===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(j*U,te*U).floor()},this.setDrawingBufferSize=function(w,F,G){j=w,te=F,U=G,n.width=Math.floor(w*G),n.height=Math.floor(F*G),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(ve)},this.setViewport=function(w,F,G,W){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,F,G,W),V.viewport(N.copy(ve).multiplyScalar(U).round())},this.getScissor=function(w){return w.copy(Ie)},this.setScissor=function(w,F,G,W){w.isVector4?Ie.set(w.x,w.y,w.z,w.w):Ie.set(w,F,G,W),V.scissor(z.copy(Ie).multiplyScalar(U).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(w){V.setScissorTest(We=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,G=!0){let W=0;if(w){let O=!1;if(b!==null){const _e=b.texture.format;O=_e===Sd||_e===yd||_e===xd}if(O){const _e=b.texture.type,be=_e===ci||_e===zr||_e===ra||_e===sa||_e===_d||_e===vd,ke=me.getClearColor(),Ne=me.getClearAlpha(),Ve=ke.r,Ge=ke.g,ze=ke.b;be?(g[0]=Ve,g[1]=Ge,g[2]=ze,g[3]=Ne,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=Ve,v[1]=Ge,v[2]=ze,v[3]=Ne,P.clearBufferiv(P.COLOR,0,v))}else W|=P.COLOR_BUFFER_BIT}F&&(W|=P.DEPTH_BUFFER_BIT),G&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),me.dispose(),H.dispose(),Se.dispose(),$.dispose(),Ce.dispose(),Me.dispose(),I.dispose(),xe.dispose(),Ee.dispose(),B.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ft),q.removeEventListener("sessionend",Ni),hi.stop()};function le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=Q.autoReset,F=Pe.enabled,G=Pe.autoUpdate,W=Pe.needsUpdate,O=Pe.type;L(),Q.autoReset=w,Pe.enabled=F,Pe.autoUpdate=G,Pe.needsUpdate=W,Pe.type=O}function ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function K(w){const F=w.target;F.removeEventListener("dispose",K),Ae(F)}function Ae(w){Oe(w),$.remove(w)}function Oe(w){const F=$.get(w).programs;F!==void 0&&(F.forEach(function(G){B.releaseProgram(G)}),w.isShaderMaterial&&B.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,G,W,O,_e){F===null&&(F=Fe);const be=O.isMesh&&O.matrixWorld.determinant()<0,ke=Tc(w,F,G,W,O);V.setMaterial(W,be);let Ne=G.index,Ve=1;if(W.wireframe===!0){if(Ne=S.getWireframeAttribute(G),Ne===void 0)return;Ve=2}const Ge=G.drawRange,ze=G.attributes.position;let tt=Ge.start*Ve,lt=(Ge.start+Ge.count)*Ve;_e!==null&&(tt=Math.max(tt,_e.start*Ve),lt=Math.min(lt,(_e.start+_e.count)*Ve)),Ne!==null?(tt=Math.max(tt,0),lt=Math.min(lt,Ne.count)):ze!=null&&(tt=Math.max(tt,0),lt=Math.min(lt,ze.count));const Tt=lt-tt;if(Tt<0||Tt===1/0)return;xe.setup(O,W,ke,G,Ne);let pt,ht=ge;if(Ne!==null&&(pt=T.get(Ne),ht=we,ht.setIndex(pt)),O.isMesh)W.wireframe===!0?(V.setLineWidth(W.wireframeLinewidth*ot()),ht.setMode(P.LINES)):ht.setMode(P.TRIANGLES);else if(O.isLine){let He=W.linewidth;He===void 0&&(He=1),V.setLineWidth(He*ot()),O.isLineSegments?ht.setMode(P.LINES):O.isLineLoop?ht.setMode(P.LINE_LOOP):ht.setMode(P.LINE_STRIP)}else O.isPoints?ht.setMode(P.POINTS):O.isSprite&&ht.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ca("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))ht.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const He=O._multiDrawStarts,xt=O._multiDrawCounts,rt=O._multiDrawCount,pn=Ne?T.get(Ne).bytesPerElement:1,Kr=$.get(W).currentProgram.getUniforms();for(let mn=0;mn<rt;mn++)Kr.setValue(P,"_gl_DrawID",mn),ht.render(He[mn]/pn,xt[mn])}else if(O.isInstancedMesh)ht.renderInstances(tt,Tt,O.count);else if(G.isInstancedBufferGeometry){const He=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xt=Math.min(G.instanceCount,He);ht.renderInstances(tt,Tt,xt)}else ht.render(tt,Tt)};function Qe(w,F,G){w.transparent===!0&&w.side===Yn&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,di(w,F,G),w.side=cr,w.needsUpdate=!0,di(w,F,G),w.side=Yn):di(w,F,G)}this.compile=function(w,F,G=null){G===null&&(G=w),u=Se.get(G),u.init(F),x.push(u),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),w!==G&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const W=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const _e=O.material;if(_e)if(Array.isArray(_e))for(let be=0;be<_e.length;be++){const ke=_e[be];Qe(ke,G,O),W.add(ke)}else Qe(_e,G,O),W.add(_e)}),u=x.pop(),W},this.compileAsync=function(w,F,G=null){const W=this.compile(w,F,G);return new Promise(O=>{function _e(){if(W.forEach(function(be){$.get(be).currentProgram.isReady()&&W.delete(be)}),W.size===0){O(w);return}setTimeout(_e,10)}oe.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let nt=null;function et(w){nt&&nt(w)}function Ft(){hi.stop()}function Ni(){hi.start()}const hi=new ev;hi.setAnimationLoop(et),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(w){nt=w,q.setAnimationLoop(w),w===null?hi.stop():hi.start()},q.addEventListener("sessionstart",Ft),q.addEventListener("sessionend",Ni),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,F,b),u=Se.get(w,x.length),u.init(F),x.push(u),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),qe.setFromProjectionMatrix(ue,si,F.reversedDepth),J=this.localClippingEnabled,$e=he.init(this.clippingPlanes,J),m=H.get(w,_.length),m.init(),_.push(m),q.enabled===!0&&q.isPresenting===!0){const _e=y.xr.getDepthSensingMesh();_e!==null&&qr(_e,F,-1/0,y.sortObjects)}qr(w,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Z,ae),Ke=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ke&&me.addToRenderList(m,w),this.info.render.frame++,$e===!0&&he.beginShadows();const G=u.state.shadowsArray;Pe.render(G,w,F),$e===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(u.setupLights(),F.isArrayCamera){const _e=F.cameras;if(O.length>0)for(let be=0,ke=_e.length;be<ke;be++){const Ne=_e[be];$r(W,O,w,Ne)}Ke&&me.render(w);for(let be=0,ke=_e.length;be<ke;be++){const Ne=_e[be];io(m,w,Ne,Ne.viewport)}}else O.length>0&&$r(W,O,w,F),Ke&&me.render(w),io(m,w,F);b!==null&&R===0&&(Y.updateMultisampleRenderTarget(b),Y.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(y,w,F),xe.resetDefaultState(),E=-1,M=null,x.pop(),x.length>0?(u=x[x.length-1],$e===!0&&he.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function qr(w,F,G,W){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||qe.intersectsSprite(w)){W&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ue);const be=I.update(w),ke=w.material;ke.visible&&m.push(w,be,ke,G,Ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||qe.intersectsObject(w))){const be=I.update(w),ke=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ue.copy(be.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(ue)),Array.isArray(ke)){const Ne=be.groups;for(let Ve=0,Ge=Ne.length;Ve<Ge;Ve++){const ze=Ne[Ve],tt=ke[ze.materialIndex];tt&&tt.visible&&m.push(w,be,tt,G,Ue.z,ze)}}else ke.visible&&m.push(w,be,ke,G,Ue.z,null)}}const _e=w.children;for(let be=0,ke=_e.length;be<ke;be++)qr(_e[be],F,G,W)}function io(w,F,G,W){const O=w.opaque,_e=w.transmissive,be=w.transparent;u.setupLightsView(G),$e===!0&&he.setGlobalState(y.clippingPlanes,G),W&&V.viewport(N.copy(W)),O.length>0&&Tn(O,F,G),_e.length>0&&Tn(_e,F,G),be.length>0&&Tn(be,F,G),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function $r(w,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new Hr(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?va:ci,minFilter:Lr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const _e=u.state.transmissionRenderTarget[W.id],be=W.viewport||N;_e.setSize(be.z*y.transmissionResolutionScale,be.w*y.transmissionResolutionScale);const ke=y.getRenderTarget(),Ne=y.getActiveCubeFace(),Ve=y.getActiveMipmapLevel();y.setRenderTarget(_e),y.getClearColor(se),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear(),Ke&&me.render(G);const Ge=y.toneMapping;y.toneMapping=or;const ze=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),$e===!0&&he.setGlobalState(y.clippingPlanes,W),Tn(w,G,W),Y.updateMultisampleRenderTarget(_e),Y.updateRenderTargetMipmap(_e),oe.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let lt=0,Tt=F.length;lt<Tt;lt++){const pt=F[lt],ht=pt.object,He=pt.geometry,xt=pt.material,rt=pt.group;if(xt.side===Yn&&ht.layers.test(W.layers)){const pn=xt.side;xt.side=dn,xt.needsUpdate=!0,xa(ht,G,W,He,xt,rt),xt.side=pn,xt.needsUpdate=!0,tt=!0}}tt===!0&&(Y.updateMultisampleRenderTarget(_e),Y.updateRenderTargetMipmap(_e))}y.setRenderTarget(ke,Ne,Ve),y.setClearColor(se,k),ze!==void 0&&(W.viewport=ze),y.toneMapping=Ge}function Tn(w,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,_e=w.length;O<_e;O++){const be=w[O],ke=be.object,Ne=be.geometry,Ve=be.group;let Ge=be.material;Ge.allowOverride===!0&&W!==null&&(Ge=W),ke.layers.test(G.layers)&&xa(ke,F,G,Ne,Ge,Ve)}}function xa(w,F,G,W,O,_e){w.onBeforeRender(y,F,G,W,O,_e),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(y,F,G,W,w,_e),O.transparent===!0&&O.side===Yn&&O.forceSinglePass===!1?(O.side=dn,O.needsUpdate=!0,y.renderBufferDirect(G,F,W,O,w,_e),O.side=cr,O.needsUpdate=!0,y.renderBufferDirect(G,F,W,O,w,_e),O.side=Yn):y.renderBufferDirect(G,F,W,O,w,_e),w.onAfterRender(y,F,G,W,O,_e)}function di(w,F,G){F.isScene!==!0&&(F=Fe);const W=$.get(w),O=u.state.lights,_e=u.state.shadowsArray,be=O.state.version,ke=B.getParameters(w,O.state,_e,F,G),Ne=B.getProgramCacheKey(ke);let Ve=W.programs;W.environment=w.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(w.isMeshStandardMaterial?Me:Ce).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",K),Ve=new Map,W.programs=Ve);let Ge=Ve.get(Ne);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===be)return ya(w,ke),Ge}else ke.uniforms=B.getUniforms(w),w.onBeforeCompile(ke,y),Ge=B.acquireProgram(ke,Ne),Ve.set(Ne,Ge),W.uniforms=ke.uniforms;const ze=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=he.uniform),ya(w,ke),W.needsLights=ov(w),W.lightsStateVersion=be,W.needsLights&&(ze.ambientLightColor.value=O.state.ambient,ze.lightProbe.value=O.state.probe,ze.directionalLights.value=O.state.directional,ze.directionalLightShadows.value=O.state.directionalShadow,ze.spotLights.value=O.state.spot,ze.spotLightShadows.value=O.state.spotShadow,ze.rectAreaLights.value=O.state.rectArea,ze.ltc_1.value=O.state.rectAreaLTC1,ze.ltc_2.value=O.state.rectAreaLTC2,ze.pointLights.value=O.state.point,ze.pointLightShadows.value=O.state.pointShadow,ze.hemisphereLights.value=O.state.hemi,ze.directionalShadowMap.value=O.state.directionalShadowMap,ze.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ze.spotShadowMap.value=O.state.spotShadowMap,ze.spotLightMatrix.value=O.state.spotLightMatrix,ze.spotLightMap.value=O.state.spotLightMap,ze.pointShadowMap.value=O.state.pointShadowMap,ze.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ge,W.uniformsList=null,Ge}function An(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Cl.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function ya(w,F){const G=$.get(w);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Tc(w,F,G,W,O){F.isScene!==!0&&(F=Fe),Y.resetTextureUnits();const _e=F.fog,be=W.isMeshStandardMaterial?F.environment:null,ke=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ys,Ne=(W.isMeshStandardMaterial?Me:Ce).get(W.envMap||be),Ve=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ge=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ze=!!G.morphAttributes.position,tt=!!G.morphAttributes.normal,lt=!!G.morphAttributes.color;let Tt=or;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Tt=y.toneMapping);const pt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ht=pt!==void 0?pt.length:0,He=$.get(W),xt=u.state.lights;if($e===!0&&(J===!0||w!==M)){const Zt=w===M&&W.id===E;he.setState(W,w,Zt)}let rt=!1;W.version===He.__version?(He.needsLights&&He.lightsStateVersion!==xt.state.version||He.outputColorSpace!==ke||O.isBatchedMesh&&He.batching===!1||!O.isBatchedMesh&&He.batching===!0||O.isBatchedMesh&&He.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&He.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&He.instancing===!1||!O.isInstancedMesh&&He.instancing===!0||O.isSkinnedMesh&&He.skinning===!1||!O.isSkinnedMesh&&He.skinning===!0||O.isInstancedMesh&&He.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&He.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&He.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&He.instancingMorph===!1&&O.morphTexture!==null||He.envMap!==Ne||W.fog===!0&&He.fog!==_e||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==he.numPlanes||He.numIntersection!==he.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==Ge||He.morphTargets!==ze||He.morphNormals!==tt||He.morphColors!==lt||He.toneMapping!==Tt||He.morphTargetsCount!==ht)&&(rt=!0):(rt=!0,He.__version=W.version);let pn=He.currentProgram;rt===!0&&(pn=di(W,F,O));let Kr=!1,mn=!1,so=!1;const yt=pn.getUniforms(),Rn=He.uniforms;if(V.useProgram(pn.program)&&(Kr=!0,mn=!0,so=!0),W.id!==E&&(E=W.id,mn=!0),Kr||M!==w){V.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),yt.setValue(P,"projectionMatrix",w.projectionMatrix),yt.setValue(P,"viewMatrix",w.matrixWorldInverse);const on=yt.map.cameraPosition;on!==void 0&&on.setValue(P,Le.setFromMatrixPosition(w.matrixWorld)),re.logarithmicDepthBuffer&&yt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,mn=!0,so=!0)}if(O.isSkinnedMesh){yt.setOptional(P,O,"bindMatrix"),yt.setOptional(P,O,"bindMatrixInverse");const Zt=O.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),yt.setValue(P,"boneTexture",Zt.boneTexture,Y))}O.isBatchedMesh&&(yt.setOptional(P,O,"batchingTexture"),yt.setValue(P,"batchingTexture",O._matricesTexture,Y),yt.setOptional(P,O,"batchingIdTexture"),yt.setValue(P,"batchingIdTexture",O._indirectTexture,Y),yt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(P,"batchingColorTexture",O._colorsTexture,Y));const Cn=G.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ee.update(O,G,pn),(mn||He.receiveShadow!==O.receiveShadow)&&(He.receiveShadow=O.receiveShadow,yt.setValue(P,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Rn.envMap.value=Ne,Rn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Rn.envMapIntensity.value=F.environmentIntensity),mn&&(yt.setValue(P,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&ro(Rn,so),_e&&W.fog===!0&&ne.refreshFogUniforms(Rn,_e),ne.refreshMaterialUniforms(Rn,W,U,te,u.state.transmissionRenderTarget[w.id]),Cl.upload(P,An(He),Rn,Y)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Cl.upload(P,An(He),Rn,Y),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(P,"center",O.center),yt.setValue(P,"modelViewMatrix",O.modelViewMatrix),yt.setValue(P,"normalMatrix",O.normalMatrix),yt.setValue(P,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Zt=W.uniformsGroups;for(let on=0,Ac=Zt.length;on<Ac;on++){const pr=Zt[on];Ee.update(pr,pn),Ee.bind(pr,pn)}}return pn}function ro(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function ov(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,F,G){const W=$.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),$.get(w.texture).__webglTexture=F,$.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const G=$.get(w);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const av=P.createFramebuffer();this.setRenderTarget=function(w,F=0,G=0){b=w,A=F,R=G;let W=!0,O=null,_e=!1,be=!1;if(w){const Ne=$.get(w);if(Ne.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(Ne.__webglFramebuffer===void 0)Y.setupRenderTarget(w);else if(Ne.__hasExternalTextures)Y.rebindTextures(w,$.get(w.texture).__webglTexture,$.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ze=w.depthTexture;if(Ne.__boundDepthTexture!==ze){if(ze!==null&&$.has(ze)&&(w.width!==ze.image.width||w.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(w)}}const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(be=!0);const Ge=$.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?O=Ge[F][G]:O=Ge[F],_e=!0):w.samples>0&&Y.useMultisampledRTT(w)===!1?O=$.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?O=Ge[G]:O=Ge,N.copy(w.viewport),z.copy(w.scissor),X=w.scissorTest}else N.copy(ve).multiplyScalar(U).floor(),z.copy(Ie).multiplyScalar(U).floor(),X=We;if(G!==0&&(O=av),V.bindFramebuffer(P.FRAMEBUFFER,O)&&W&&V.drawBuffers(w,O),V.viewport(N),V.scissor(z),V.setScissorTest(X),_e){const Ne=$.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ne.__webglTexture,G)}else if(be){const Ne=F;for(let Ve=0;Ve<w.textures.length;Ve++){const Ge=$.get(w.textures[Ve]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ve,Ge.__webglTexture,G,Ne)}}else if(w!==null&&G!==0){const Ne=$.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ne.__webglTexture,G)}E=-1},this.readRenderTargetPixels=function(w,F,G,W,O,_e,be,ke=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=$.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Ne=Ne[be]),Ne){V.bindFramebuffer(P.FRAMEBUFFER,Ne);try{const Ve=w.textures[ke],Ge=Ve.format,ze=Ve.type;if(!re.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-W&&G>=0&&G<=w.height-O&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ke),P.readPixels(F,G,W,O,Te.convert(Ge),Te.convert(ze),_e))}finally{const Ve=b!==null?$.get(b).__webglFramebuffer:null;V.bindFramebuffer(P.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(w,F,G,W,O,_e,be,ke=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=$.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Ne=Ne[be]),Ne)if(F>=0&&F<=w.width-W&&G>=0&&G<=w.height-O){V.bindFramebuffer(P.FRAMEBUFFER,Ne);const Ve=w.textures[ke],Ge=Ve.format,ze=Ve.type;if(!re.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.bufferData(P.PIXEL_PACK_BUFFER,_e.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ke),P.readPixels(F,G,W,O,Te.convert(Ge),Te.convert(ze),0);const lt=b!==null?$.get(b).__webglFramebuffer:null;V.bindFramebuffer(P.FRAMEBUFFER,lt);const Tt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await XS(P,Tt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,_e),P.deleteBuffer(tt),P.deleteSync(Tt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,G=0){const W=Math.pow(2,-G),O=Math.floor(w.image.width*W),_e=Math.floor(w.image.height*W),be=F!==null?F.x:0,ke=F!==null?F.y:0;Y.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,be,ke,O,_e),V.unbindTexture()};const lv=P.createFramebuffer(),cv=P.createFramebuffer();this.copyTextureToTexture=function(w,F,G=null,W=null,O=0,_e=null){_e===null&&(O!==0?(ca("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=O,O=0):_e=0);let be,ke,Ne,Ve,Ge,ze,tt,lt,Tt;const pt=w.isCompressedTexture?w.mipmaps[_e]:w.image;if(G!==null)be=G.max.x-G.min.x,ke=G.max.y-G.min.y,Ne=G.isBox3?G.max.z-G.min.z:1,Ve=G.min.x,Ge=G.min.y,ze=G.isBox3?G.min.z:0;else{const Cn=Math.pow(2,-O);be=Math.floor(pt.width*Cn),ke=Math.floor(pt.height*Cn),w.isDataArrayTexture?Ne=pt.depth:w.isData3DTexture?Ne=Math.floor(pt.depth*Cn):Ne=1,Ve=0,Ge=0,ze=0}W!==null?(tt=W.x,lt=W.y,Tt=W.z):(tt=0,lt=0,Tt=0);const ht=Te.convert(F.format),He=Te.convert(F.type);let xt;F.isData3DTexture?(Y.setTexture3D(F,0),xt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Y.setTexture2DArray(F,0),xt=P.TEXTURE_2D_ARRAY):(Y.setTexture2D(F,0),xt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const rt=P.getParameter(P.UNPACK_ROW_LENGTH),pn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Kr=P.getParameter(P.UNPACK_SKIP_PIXELS),mn=P.getParameter(P.UNPACK_SKIP_ROWS),so=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,pt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ge),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ze);const yt=w.isDataArrayTexture||w.isData3DTexture,Rn=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Cn=$.get(w),Zt=$.get(F),on=$.get(Cn.__renderTarget),Ac=$.get(Zt.__renderTarget);V.bindFramebuffer(P.READ_FRAMEBUFFER,on.__webglFramebuffer),V.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ac.__webglFramebuffer);for(let pr=0;pr<Ne;pr++)yt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$.get(w).__webglTexture,O,ze+pr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$.get(F).__webglTexture,_e,Tt+pr)),P.blitFramebuffer(Ve,Ge,be,ke,tt,lt,be,ke,P.DEPTH_BUFFER_BIT,P.NEAREST);V.bindFramebuffer(P.READ_FRAMEBUFFER,null),V.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||$.has(w)){const Cn=$.get(w),Zt=$.get(F);V.bindFramebuffer(P.READ_FRAMEBUFFER,lv),V.bindFramebuffer(P.DRAW_FRAMEBUFFER,cv);for(let on=0;on<Ne;on++)yt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Cn.__webglTexture,O,ze+on):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Cn.__webglTexture,O),Rn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Zt.__webglTexture,_e,Tt+on):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Zt.__webglTexture,_e),O!==0?P.blitFramebuffer(Ve,Ge,be,ke,tt,lt,be,ke,P.COLOR_BUFFER_BIT,P.NEAREST):Rn?P.copyTexSubImage3D(xt,_e,tt,lt,Tt+on,Ve,Ge,be,ke):P.copyTexSubImage2D(xt,_e,tt,lt,Ve,Ge,be,ke);V.bindFramebuffer(P.READ_FRAMEBUFFER,null),V.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Rn?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(xt,_e,tt,lt,Tt,be,ke,Ne,ht,He,pt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(xt,_e,tt,lt,Tt,be,ke,Ne,ht,pt.data):P.texSubImage3D(xt,_e,tt,lt,Tt,be,ke,Ne,ht,He,pt):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,_e,tt,lt,be,ke,ht,He,pt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,_e,tt,lt,pt.width,pt.height,ht,pt.data):P.texSubImage2D(P.TEXTURE_2D,_e,tt,lt,be,ke,ht,He,pt);P.pixelStorei(P.UNPACK_ROW_LENGTH,rt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Kr),P.pixelStorei(P.UNPACK_SKIP_ROWS,mn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,so),_e===0&&F.generateMipmaps&&P.generateMipmap(xt),V.unbindTexture()},this.initRenderTarget=function(w){$.get(w).__webglFramebuffer===void 0&&Y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Y.setTextureCube(w,0):w.isData3DTexture?Y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Y.setTexture2DArray(w,0):Y.setTexture2D(w,0),V.unbindTexture()},this.resetState=function(){A=0,R=0,b=null,V.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}class WA{static createButton(e,n={}){const i=document.createElement("button");function r(){if(n.domOverlay===void 0){const d=document.createElement("div");d.style.display="none",document.body.appendChild(d);const p=document.createElementNS("http://www.w3.org/2000/svg","svg");p.setAttribute("width",38),p.setAttribute("height",38),p.style.position="absolute",p.style.right="20px",p.style.top="20px",p.addEventListener("click",function(){c.end()}),d.appendChild(p);const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width",2),p.appendChild(g),n.optionalFeatures===void 0&&(n.optionalFeatures=[]),n.optionalFeatures.push("dom-overlay"),n.domOverlay={root:d}}let c=null;async function f(d){d.addEventListener("end",h),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(d),i.textContent="STOP AR",n.domOverlay.root.style.display="",c=d}function h(){c.removeEventListener("end",h),i.textContent="START AR",n.domOverlay.root.style.display="none",c=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="START AR",i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",n).then(f):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(f).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",n).then(f).catch(d=>{console.warn(d)})}function s(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function o(){s(),i.textContent="AR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),i.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return i.id="ARButton",i.style.display="none",l(i),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?r():o()}).catch(a),i;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const tg={type:"change"},Nd={type:"start"},sv={type:"end"},fl=new wd,ng=new Wi,XA=Math.cos(70*Hi.DEG2RAD),Lt=new D,an=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Iu=1e-6;class jA extends oM{constructor(e,n=null){super(e,n),this.state=ut.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Br,this._lastTargetPosition=new D,this._quat=new Br().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bm,this._sphericalDelta=new bm,this._scale=1,this._panOffset=new D,this._rotateStart=new ye,this._rotateEnd=new ye,this._rotateDelta=new ye,this._panStart=new ye,this._panEnd=new ye,this._panDelta=new ye,this._dollyStart=new ye,this._dollyEnd=new ye,this._dollyDelta=new ye,this._dollyDirection=new D,this._mouse=new ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qA.bind(this),this._onPointerDown=YA.bind(this),this._onPointerUp=$A.bind(this),this._onContextMenu=n2.bind(this),this._onMouseWheel=JA.bind(this),this._onKeyDown=QA.bind(this),this._onTouchStart=e2.bind(this),this._onTouchMove=t2.bind(this),this._onMouseDown=KA.bind(this),this._onMouseMove=ZA.bind(this),this._interceptControlDown=i2.bind(this),this._interceptControlUp=r2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tg),this.update(),this.state=ut.NONE}update(e=null){const n=this.object.position;Lt.copy(n).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=an:i>Math.PI&&(i-=an),r<-Math.PI?r+=an:r>Math.PI&&(r-=an),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Lt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(fl.origin.copy(this.object.position),fl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fl.direction))<XA?this.object.lookAt(this.target):(ng.setFromNormalAndCoplanarPoint(this.object.up,this.target),fl.intersectPlane(ng,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Iu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Iu||this._lastTargetPosition.distanceToSquared(this.target)>Iu?(this.dispatchEvent(tg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Lt.setFromMatrixColumn(n,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,n){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(n,1):(Lt.setFromMatrixColumn(n,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Lt.copy(r).sub(this.target);let s=Lt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(an*this._rotateDelta.x/n.clientHeight),this._rotateUp(an*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(an*this._rotateDelta.x/n.clientHeight),this._rotateUp(an*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ye,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function YA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function qA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function $A(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sv),this.state=ut.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function KA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ut.DOLLY;break;case Is.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ut.ROTATE}break;case Is.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Nd)}function ZA(t){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function JA(t){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(t.preventDefault(),this.dispatchEvent(Nd),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(sv))}function QA(t){this.enabled!==!1&&this._handleKeyDown(t)}function e2(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ut.TOUCH_ROTATE;break;case Ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case Ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ut.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Nd)}function t2(t){switch(this._trackPointer(t),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ut.NONE}}function n2(t){this.enabled!==!1&&t.preventDefault()}function i2(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function r2(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ig(t){const e=new jn,n=new Er({color:3816026,roughness:.8,metalness:.8}),i=t.wallThickness||.2,r=t.wallHeight||3;return t.walls.forEach(s=>{const o=new D(s.p1[0],0,s.p1[1]),a=new D(s.p2[0],0,s.p2[1]),l=new D().subVectors(a,o),c=l.length();if(c<.01)return;const f=new to(c,r,i),h=new bt(f,n.clone()),d=new D().addVectors(o,a).multiplyScalar(.5);h.position.set(d.x,r/2,d.z),h.rotation.y=Math.atan2(l.z,l.x),h.castShadow=!0,h.receiveShadow=!0,e.add(h)}),{wallGroup:e,wallMaterial:n}}const s2={floorId:"f1",floorNumber:1,floorName:"Ground Floor",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.54,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f1_gymkhana",name:"GYMKHANA",center:[3.35,1.6],connectedTo:["f1_wp_hall_gymkhana"]},{id:"f1_g1",name:"Classroom G1",center:[8.62,1.6],connectedTo:["f1_wp_hall_g1"]},{id:"f1_g2",name:"Classroom G2",center:[17.54,1.6],connectedTo:["f1_wp_hall_g2"]},{id:"f1_stairs_top",name:"Stairs (Top)",center:[26.04,1.1],connectedTo:["f1_wp_hall_stairs_top"]},{id:"f1_g6",name:"Classroom G6",center:[33.15,3.65],connectedTo:["f1_wp_hall_g6"]},{id:"f1_lift",name:"Lift",center:[.89,5.7],connectedTo:[]},{id:"f1_stairs_bot",name:"Stairs (Bot)",center:[3.57,5.7],connectedTo:["f1_wp_hall_stairs_bot"]},{id:"f1_g4",name:"Classroom G4",center:[10.95,5.7],connectedTo:["f1_wp_hall_g4"]},{id:"f1_g5",name:"Classroom G5",center:[20.54,5.7],connectedTo:["f1_wp_hall_g5"]},{id:"f1_women",name:"Women Washroom",center:[25.86,5.7],connectedTo:["f1_wp_hall_women"]},{id:"f1_gents",name:"Men Washroom",center:[38.11,5.7],connectedTo:["f1_wp_hall_gents"]}],waypoints:[{id:"f1_wp_hall_stairs_bot",position:[3.57,3.65],connectedTo:["f1_wp_hall_gymkhana"]},{id:"f1_wp_hall_gymkhana",position:[3.35,3.65],connectedTo:["f1_wp_hall_stairs_bot","f1_wp_hall_g1"]},{id:"f1_wp_hall_g1",position:[8.62,3.65],connectedTo:["f1_wp_hall_gymkhana","f1_wp_hall_g4"]},{id:"f1_wp_hall_g4",position:[10.95,3.65],connectedTo:["f1_wp_hall_g1","f1_wp_hall_g2"]},{id:"f1_wp_hall_g2",position:[17.54,3.65],connectedTo:["f1_wp_hall_g4","f1_wp_hall_g5"]},{id:"f1_wp_hall_g5",position:[20.54,3.65],connectedTo:["f1_wp_hall_g2","f1_wp_hall_stairs_top"]},{id:"f1_wp_hall_stairs_top",position:[26.04,3.65],connectedTo:["f1_wp_hall_g5","f1_wp_hall_women"]},{id:"f1_wp_hall_women",position:[25.86,3.65],connectedTo:["f1_wp_hall_stairs_top","f1_wp_hall_g6"]},{id:"f1_wp_hall_g6",position:[33.15,3.65],connectedTo:["f1_wp_hall_women","f1_wp_hall_gents"]},{id:"f1_wp_hall_gents",position:[38.11,3.65],connectedTo:["f1_wp_hall_g6"]}],walls:[{p1:[0,0],p2:[24.54,0]},{p1:[27.54,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[5.36,7.3]},{p1:[1.78,7.3],p2:[0,7.3]},{p1:[0,7.3],p2:[0,0]},{p1:[0,3.2],p2:[24.54,3.2]},{p1:[27.54,3.2],p2:[38.98,3.2]},{p1:[0,4.1],p2:[38.98,4.1]},{p1:[6.7,0],p2:[6.7,3.2]},{p1:[13.54,0],p2:[13.54,3.2]},{p1:[24.54,0],p2:[24.54,3.2]},{p1:[27.54,0],p2:[27.54,3.2]},{p1:[1.78,4.1],p2:[1.78,7.3]},{p1:[5.36,4.1],p2:[5.36,7.3]},{p1:[16.54,4.1],p2:[16.54,7.3]},{p1:[24.54,4.1],p2:[24.54,7.3]},{p1:[32.38,4.1],p2:[32.38,7.3]}],wallHeight:3,wallThickness:.15,floorMessages:[{id:"m1",type:"welcome",text:"GROUND FLOOR - ENTRANCE",position:[2,3.65]},{id:"m2",type:"quote",text:"Keep Moving Forward 🚀",position:[15,3.65]}]},o2={floorId:"f2",floorNumber:2,floorName:"CSE Department (2nd Floor)",rooms:[{id:"f2_hod",name:"HOD Cabin",center:[2.025,1.764],connectedTo:["f2_wp_hod"]},{id:"f2_dept_lib",name:"Dept Library",center:[5.541,1.764],connectedTo:["f2_wp_lib"]},{id:"f2_server",name:"Server Room",center:[9.352,1.764],connectedTo:["f2_wp_server"]},{id:"f2_tutorial",name:"Tutorial Room",center:[14.063,1.764],connectedTo:["f2_wp_tutorial"]},{id:"f2_lab10",name:"Lab 10",center:[22.942,1.764],connectedTo:["f2_wp_lab10"]},{id:"f2_stairs_top",name:"Stairs",center:[29.741,1.678],connectedTo:["f2_wp_stairs_top"]},{id:"f2_lab9",name:"Lab 9",center:[36.276,3.65],connectedTo:["f2_wp_lab9"]},{id:"f2_corridor",name:"Middle Portion",center:[14.887,4.095],connectedTo:["f2_wp_lab7"]},{id:"f2_lift",name:"Lift",center:[2.68,5.894],connectedTo:["f2_wp_lift"]},{id:"f2_stairs_bot",name:"Stairs",center:[6.601,5.894],connectedTo:["f2_wp_stairs_bot"]},{id:"f2_lab7",name:"Lab 7",center:[14.043,5.979],connectedTo:["f2_wp_lab7"]},{id:"f2_lab8",name:"Lab 8",center:[23.191,5.979],connectedTo:["f2_wp_lab8"]},{id:"f2_women",name:"Women Washroom",center:[29.576,5.979],connectedTo:["f2_wp_women"]},{id:"f2_gents",name:"Men Washroom",center:[35.461,6.182],connectedTo:["f2_wp_gents"]}],waypoints:[{id:"f2_wp_lift",position:[2.68,4.095],connectedTo:["f2_wp_stairs_bot"]},{id:"f2_wp_stairs_bot",position:[6.601,4.095],connectedTo:["f2_wp_lift","f2_wp_lab7","f1_wp_stairs_bot","f3_wp_stairs_bot"]},{id:"f2_wp_hod",position:[2.025,4.095],connectedTo:["f2_wp_stairs_bot","f2_wp_lib"]},{id:"f2_wp_lib",position:[5.541,4.095],connectedTo:["f2_wp_hod","f2_wp_server"]},{id:"f2_wp_server",position:[9.352,4.095],connectedTo:["f2_wp_lib","f2_wp_tutorial"]},{id:"f2_wp_tutorial",position:[14.063,4.095],connectedTo:["f2_wp_server","f2_wp_lab10"]},{id:"f2_wp_lab10",position:[22.942,4.095],connectedTo:["f2_wp_tutorial","f2_wp_stairs_top"]},{id:"f2_wp_stairs_top",position:[29.741,4.095],connectedTo:["f2_wp_lab10","f2_wp_lab9","f1_wp_stairs_top","f3_wp_stairs_top"]},{id:"f2_wp_lab7",position:[14.043,4.095],connectedTo:["f2_wp_stairs_bot","f2_wp_lab8"]},{id:"f2_wp_lab8",position:[23.191,4.095],connectedTo:["f2_wp_lab7","f2_wp_women"]},{id:"f2_wp_women",position:[29.576,4.095],connectedTo:["f2_wp_lab8","f2_wp_gents"]},{id:"f2_wp_gents",position:[35.461,4.095],connectedTo:["f2_wp_women","f2_wp_lab9"]},{id:"f2_wp_lab9",position:[36.276,4.095],connectedTo:["f2_wp_stairs_top","f2_wp_gents"]}],walls:[{p1:[0,0],p2:[41.311,0]},{p1:[41.311,0],p2:[41.311,7.3]},{p1:[41.311,7.3],p2:[0,7.3]},{p1:[0,7.3],p2:[0,0]},{p1:[0,6.489],p2:[5.36,6.489]},{p1:[.049,3.528],p2:[0,6.489]},{p1:[.049,3.528],p2:[4.049,3.539]},{p1:[5.041,3.539],p2:[6.041,3.539]},{p1:[6.041,3.539],p2:[9.127,3.534]},{p1:[9.677,3.536],p2:[11.063,3.536]},{p1:[11.063,3.536],p2:[17.063,3.52]},{p1:[18.442,3.52],p2:[26.442,3.499]},{p1:[31.241,3.495],p2:[31.241,0]},{p1:[8.74,4.659],p2:[17.063,4.659]},{p1:[18.463,4.659],p2:[26.442,4.659]},{p1:[6.041,3.539],p2:[6.041,0]},{p1:[9.677,3.541],p2:[9.677,0]},{p1:[15.563,3.536],p2:[15.563,0]},{p1:[19.442,3.52],p2:[19.442,0]},{p1:[28.241,3.495],p2:[28.241,0]},{p1:[31.241,4.359],p2:[41.311,4.359]},{p1:[41.311,4.359],p2:[41.311,5.065]},{p1:[41.311,5.065],p2:[41.311,0]},{p1:[8.74,5.069],p2:[8.74,7.3]},{p1:[19.442,4.659],p2:[19.442,7.3]},{p1:[27.911,5.065],p2:[27.911,7.3]},{p1:[27.911,5.065],p2:[28.311,5.065]},{p1:[29.211,5.065],p2:[35.011,5.065]},{p1:[34.811,5.065],p2:[34.811,7.3]},{p1:[35.911,5.065],p2:[41.311,5.065]}],wallHeight:3,wallThickness:.15,planSize:{width:41.311,height:7.3}},a2={floorId:"f3",floorNumber:3,floorName:"3rd Floor (Placeholder)",rooms:[{id:"f3_room_placeholder",name:"Room 301",center:[10,5],connectedTo:["f3_wp_stairs_bot"]}],waypoints:[{id:"f3_wp_stairs_bot",position:[6.601,4.095],connectedTo:["f2_wp_stairs_bot","f4_wp_hall_stairs_bot"]},{id:"f3_wp_stairs_top",position:[29.741,4.095],connectedTo:["f2_wp_stairs_top","f4_wp_hall_stairs_top"]}],walls:[{p1:[0,0],p2:[41,0]},{p1:[41,0],p2:[41,7]},{p1:[41,7],p2:[0,7]},{p1:[0,7],p2:[0,0]}],wallHeight:3,wallThickness:.15,planSize:{width:41,height:7}},l2={floorId:"f4",floorNumber:4,floorName:"3rd Floor",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.54,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f4_301",name:"Classroom 301",center:[3.35,1.6],connectedTo:["f4_wp_hall_301"]},{id:"f4_302",name:"Classroom 302",center:[8.62,1.6],connectedTo:["f4_wp_hall_302"]},{id:"f4_303",name:"Classroom 303",center:[17.54,1.6],connectedTo:["f4_wp_hall_303"]},{id:"f4_stairs_top",name:"Stairs (Top)",center:[26.04,1.1],connectedTo:["f4_wp_hall_stairs_top"]},{id:"f4_306",name:"Classroom 306",center:[33.15,3.65],connectedTo:["f4_wp_hall_306"]},{id:"f4_lift",name:"Lift",center:[.89,5.7],connectedTo:[]},{id:"f4_stairs_bot",name:"Stairs (Bot)",center:[3.57,5.7],connectedTo:["f4_wp_hall_stairs_bot"]},{id:"f4_304",name:"Classroom 304",center:[10.95,5.7],connectedTo:["f4_wp_hall_304"]},{id:"f4_305",name:"Classroom 305",center:[20.54,5.7],connectedTo:["f4_wp_hall_305"]},{id:"f4_women",name:"Women Washroom",center:[25.86,5.7],connectedTo:["f4_wp_hall_women"]},{id:"f4_gents",name:"Men Washroom",center:[38.11,5.7],connectedTo:["f4_wp_hall_gents"]}],waypoints:[{id:"f4_wp_hall_stairs_bot",position:[3.57,3.65],connectedTo:["f4_wp_hall_301"]},{id:"f4_wp_hall_301",position:[3.35,3.65],connectedTo:["f4_wp_hall_stairs_bot","f4_wp_hall_302"]},{id:"f4_wp_hall_302",position:[8.62,3.65],connectedTo:["f4_wp_hall_301","f4_wp_hall_304"]},{id:"f4_wp_hall_304",position:[10.95,3.65],connectedTo:["f4_wp_hall_302","f4_wp_hall_303"]},{id:"f4_wp_hall_303",position:[17.54,3.65],connectedTo:["f4_wp_hall_304","f4_wp_hall_305"]},{id:"f4_wp_hall_305",position:[20.54,3.65],connectedTo:["f4_wp_hall_303","f4_wp_hall_stairs_top"]},{id:"f4_wp_hall_stairs_top",position:[26.04,3.65],connectedTo:["f4_wp_hall_305","f4_wp_hall_women"]},{id:"f4_wp_hall_women",position:[25.86,3.65],connectedTo:["f4_wp_hall_stairs_top","f4_wp_hall_306"]},{id:"f4_wp_hall_306",position:[33.15,3.65],connectedTo:["f4_wp_hall_women","f4_wp_hall_gents"]},{id:"f4_wp_hall_gents",position:[38.11,3.65],connectedTo:["f4_wp_hall_306"]}],walls:[{p1:[0,0],p2:[24.54,0]},{p1:[27.54,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[5.36,7.3]},{p1:[1.78,7.3],p2:[0,7.3]},{p1:[0,7.3],p2:[0,0]},{p1:[0,3.2],p2:[24.54,3.2]},{p1:[27.54,3.2],p2:[38.98,3.2]},{p1:[0,4.1],p2:[38.98,4.1]},{p1:[6.7,0],p2:[6.7,3.2]},{p1:[13.54,0],p2:[13.54,3.2]},{p1:[24.54,0],p2:[24.54,3.2]},{p1:[27.54,0],p2:[27.54,3.2]},{p1:[1.78,4.1],p2:[1.78,7.3]},{p1:[5.36,4.1],p2:[5.36,7.3]},{p1:[16.54,4.1],p2:[16.54,7.3]},{p1:[24.54,4.1],p2:[24.54,7.3]},{p1:[32.38,4.1],p2:[32.38,7.3]}],wallHeight:3,wallThickness:.15,floorMessages:[{id:"m1",type:"welcome",text:"3RD FLOOR CLASSROOMS",position:[2,3.65]},{id:"m2",type:"quote",text:"Knowledge is Power 📚",position:[15,3.65]}]},c2={floorId:"f5",floorNumber:5,floorName:"4th Floor (ENTC)",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.54,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f5_entc_hod",name:"ENTC HOD Cabin",center:[3.35,1.6],connectedTo:["f5_wp_hall_hod"]},{id:"f5_dept_lib",name:"Dept Library",center:[8.62,1.6],connectedTo:["f5_wp_hall_dlib"]},{id:"f5_tutorial",name:"Tutorial Room",center:[17.54,1.6],connectedTo:["f5_wp_hall_lab11"]},{id:"f5_lab11",name:"Lab 11",center:[26.04,1.1],connectedTo:["f5_wp_hall_lab11"]},{id:"f5_lab12",name:"Lab 12",center:[33.15,3.65],connectedTo:["f5_wp_hall_lab12"]},{id:"f5_lift",name:"Lift",center:[.89,5.7],connectedTo:[]},{id:"f5_stairs_bot",name:"Stairs (Bot)",center:[3.57,5.7],connectedTo:["f5_wp_hall_stairs_bot"]},{id:"f5_lab13",name:"Lab 13",center:[10.95,5.7],connectedTo:["f5_wp_hall_lab14"]},{id:"f5_lab14",name:"Lab 14",center:[20.54,5.7],connectedTo:["f5_wp_hall_lab14"]}],waypoints:[{id:"f5_wp_hall_stairs_bot",position:[3.57,3.65],connectedTo:["f5_wp_hall_hod"]},{id:"f5_wp_hall_hod",position:[3.35,3.65],connectedTo:["f5_wp_hall_stairs_bot","f5_wp_hall_dlib"]},{id:"f5_wp_hall_dlib",position:[8.62,3.65],connectedTo:["f5_wp_hall_hod","f5_wp_hall_lab11"]},{id:"f5_wp_hall_lab11",position:[17.54,3.65],connectedTo:["f5_wp_hall_dlib","f5_wp_hall_lab12"]},{id:"f5_wp_hall_lab12",position:[33.15,3.65],connectedTo:["f5_wp_hall_lab11","f5_wp_hall_lab14"]},{id:"f5_wp_hall_lab14",position:[20.54,3.65],connectedTo:["f5_wp_hall_lab12"]}],walls:[{p1:[0,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[0,7.3]},{p1:[0,7.3],p2:[0,0]},{p1:[0,3.2],p2:[38.98,3.2]},{p1:[0,4.1],p2:[38.98,4.1]}],wallHeight:3,wallThickness:.15,floorMessages:[{id:"m1",type:"welcome",text:"WELCOME TO ENTC DEPT",position:[2,3.65]},{id:"m2",type:"quote",text:"Connecting the World 📡",position:[15,3.65]}]},u2={floorId:"f6",floorNumber:6,floorName:"5th Floor",corridorPolygon:[[0,3.2],[24.54,3.2],[24.54,2.35],[27.54,2.35],[27.54,3.2],[27.54,3.2],[38.98,3.2],[38.98,4.1],[27.17,4.1],[5.36,4.1],[5.36,7.3],[0,7.3],[0,4.1]],corridorColor:"#2ecc40",rooms:[{id:"f6_501",name:"Classroom 501",center:[3.35,1.6],connectedTo:["f6_wp_hall_501"]},{id:"f6_502",name:"Classroom 502",center:[8.62,1.6],connectedTo:["f6_wp_hall_502"]},{id:"f6_503",name:"Classroom 503",center:[17.54,1.6],connectedTo:["f6_wp_hall_503"]},{id:"f6_504",name:"Classroom 504",center:[26.04,1.1],connectedTo:["f6_wp_hall_503"]},{id:"f6_505",name:"Classroom 505",center:[33.15,3.65],connectedTo:["f6_wp_hall_505"]},{id:"f6_lift",name:"Lift",center:[.89,5.7],connectedTo:[]},{id:"f6_stairs_bot",name:"Stairs (Bot)",center:[3.57,5.7],connectedTo:["f6_wp_hall_stairs_bot"]}],waypoints:[{id:"f6_wp_hall_stairs_bot",position:[3.57,3.65],connectedTo:["f6_wp_hall_501"]},{id:"f6_wp_hall_501",position:[3.35,3.65],connectedTo:["f6_wp_hall_stairs_bot","f6_wp_hall_502"]},{id:"f6_wp_hall_502",position:[8.62,3.65],connectedTo:["f6_wp_hall_501","f6_wp_hall_503"]},{id:"f6_wp_hall_503",position:[17.54,3.65],connectedTo:["f6_wp_hall_502","f6_wp_hall_505"]},{id:"f6_wp_hall_505",position:[33.15,3.65],connectedTo:["f6_wp_hall_503"]}],walls:[{p1:[0,0],p2:[38.98,0]},{p1:[38.98,0],p2:[38.98,7.3]},{p1:[38.98,7.3],p2:[0,7.3]},{p1:[0,7.3],p2:[0,0]},{p1:[0,3.2],p2:[38.98,3.2]},{p1:[0,4.1],p2:[38.98,4.1]}],wallHeight:3,wallThickness:.15,floorMessages:[{id:"m1",type:"welcome",text:"5TH FLOOR CLASSROOMS",position:[2,3.65]},{id:"m2",type:"quote",text:"Reach for the Stars ✨",position:[15,3.65]}]},Ki=[{id:"f1",number:1,label:"Ground Floor",marker:{image:"marker_f1.png",position:{x:.89,z:3.65}}},{id:"f2",number:2,label:"2nd Floor (CSE)",marker:{image:"marker_f2.png",position:{x:.89,z:3.65}}},{id:"f3",number:3,label:"3rd Floor (Placeholder)",marker:{image:"marker.png",position:{x:2,z:1.6}}},{id:"f4",number:4,label:"3rd Floor (Classrooms)",marker:{image:"marker_f4.png",position:{x:.89,z:3.65}}},{id:"f5",number:5,label:"4th Floor (ENTC)",marker:{image:"marker_f5.png",position:{x:.89,z:3.65}}},{id:"f6",number:6,label:"5th Floor",marker:{image:"marker_f6.png",position:{x:.89,z:3.65}}}],Gn=[s2,o2,a2,l2,c2,u2],Id=[{name:"Main Stairs (Bottom)",type:"stairs",costPerFloor:10,floorWaypoints:{f1:"f1_wp_hall_stairs_bot",f2:"f2_wp_stairs_bot",f3:"f3_wp_stairs_bot",f4:"f4_wp_hall_stairs_bot",f5:"f5_wp_hall_stairs_bot",f6:"f6_wp_hall_stairs_bot"}},{name:"Side Stairs (Top)",type:"stairs",costPerFloor:10,floorWaypoints:{f1:"f1_wp_hall_stairs_top",f2:"f2_wp_stairs_top",f3:"f3_wp_stairs_top",f4:"f4_wp_hall_stairs_top",f5:"f5_wp_hall_lab12",f6:"f6_wp_hall_505"}}];function f2({floorData:t,activeSegment:e,pathSegments:n,startRoomId:i,endRoomId:r,onSessionStateChange:s,showARButton:o,showUIView:a}){var re;const l=Be.useRef(null),c=Be.useRef(null),f=Be.useRef(null),h=Be.useRef(null),d=Be.useRef(null),p=Be.useRef(null),g=Be.useRef([]),v=Be.useRef(null),m=Be.useRef(null),u=Be.useRef(null),_=Be.useRef(0),x=Be.useRef([]),y=Be.useRef(null),C=Be.useRef(null),A=Be.useRef(null),R=Be.useRef(null),b=Be.useRef(null),E=Be.useRef(null),M=Be.useRef(null),N=Be.useRef(i),z=Be.useRef(r),[X,se]=Be.useState(!1),[k,j]=Be.useState(!1),[te,U]=Be.useState(!1),[Z,ae]=Be.useState(null),[ve,Ie]=Be.useState(null),[We,qe]=Be.useState(null),[$e,J]=Be.useState(""),[ue,Le]=Be.useState(!1),[Ue,Fe]=Be.useState(.3);Be.useEffect(()=>{g.current.forEach(V=>{V.group.position.y=Ue,V.group.userData.baseY=Ue})},[Ue]);const Ke=()=>{var V;if(d.current&&f.current){const Q=d.current,$=f.current,Y=(V=Ki.find(Ce=>Ce.id===t.floorId))==null?void 0:V.marker;if(!Y)return;Q.position.set($.position.x,0,$.position.z),Q.rotation.set(0,$.rotation.y,0),Q.translateX(-Y.position.x),Q.translateZ(-Y.position.z),ae({label:t.floorName,floorId:t.floorId}),U(!0),j(!1),navigator.vibrate&&navigator.vibrate(200)}};Be.useEffect(()=>{if(console.log("isFarView changed:",X),f.current&&p.current){const V=X?70:38;f.current.position.y=V,p.current.update()}},[X]),Be.useEffect(()=>{N.current=i??"",z.current=r??""},[i,r]),Be.useEffect(()=>{if(!d.current)return;A.current&&(d.current.remove(A.current),A.current.traverse(Y=>{Y.isMesh&&(Y.geometry.dispose(),Y.material.dispose())})),b.current&&(d.current.remove(b.current),b.current.traverse(Y=>{Y.isMesh&&(Y.geometry.dispose(),Y.material.dispose())})),E.current&&(d.current.remove(E.current),E.current.traverse(Y=>{Y.isMesh&&(Y.geometry.dispose(),Y.material.dispose())})),g.current.forEach(Y=>{d.current.remove(Y.group),Y.geo.dispose()}),g.current=[],_.current=0,x.current=[],y.current=null;const{wallGroup:V}=ig(t);d.current.add(V),A.current=V;const Q=new jn;b.current=Q,d.current.add(Q),P(Q);const $=new jn;E.current=$,d.current.add($),fe($),M.current&&d.current.remove(M.current),ot(d.current,V),d.current&&e&&oe(e,d.current)},[t,e]),Be.useEffect(()=>{const V=l.current;if(!V)return;const Q=new g1;Q.background=new Ze(657935),Q.fog=new Td(986910,10,60),c.current=Q;const $=new jn;d.current=$,Q.add($);const Y=new jn;b.current=Y,$.add(Y);const Ce=new xn(75,window.innerWidth/window.innerHeight,.1,1e3);Ce.position.set(0,10,50),f.current=Ce;const Me=new GA({antialias:!0,alpha:!0});Me.setSize(window.innerWidth,window.innerHeight),Me.setPixelRatio(window.devicePixelRatio),Me.shadowMap.enabled=!0,Me.shadowMap.type=v0,Me.setClearColor(0,0),l.current.appendChild(Me.domElement),Me.xr.enabled=!0,h.current=Me,(async()=>{var xe;const me={requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","dom-overlay-for-handheld-ar","image-tracking"],domOverlay:{root:document.body}},ee=[],ge=window.location.href.split("?")[0].split("#")[0],we=Ee=>ge.endsWith("/")?ge+Ee:ge.substring(0,ge.lastIndexOf("/")+1)+Ee;for(const Ee of Ki)if(Ee.marker)try{const L=new Image;L.src=we(Ee.marker.image),await L.decode();const q=await createImageBitmap(L);ee.push({image:q,widthInMeters:.2}),console.log(`AR: Loaded marker for ${Ee.label}`)}catch(L){console.warn(`AR: Failed to load marker for ${Ee.label}`,L)}ee.length>0&&(me.trackedImages=ee);const Te=WA.createButton(Me,me);C.current=Te,(xe=l.current)==null||xe.appendChild(Te)})();const S=new rM(16777215,.4);Q.add(S);const I=new iM(16777215,2);I.position.set(10,20,10),I.castShadow=!0,I.shadow.mapSize.width=2048,I.shadow.mapSize.height=2048,I.shadow.camera.left=-50,I.shadow.camera.right=50,I.shadow.camera.top=50,I.shadow.camera.bottom=-20,Q.add(I);const B=new Cm(10980346,.5);B.position.set(-10,10,-10),B.castShadow=!0,Q.add(B);const ne=new Cm(13079274,.5);ne.position.set(10,10,10),ne.castShadow=!0,Q.add(ne);const H=new jA(Ce,Me.domElement);p.current=H;const{wallGroup:Se}=ig(t);$.add(Se),A.current=Se,Me.xr.addEventListener("sessionstart",()=>{var ge;s&&s(!0),c.current&&(c.current.background=null),j(!0),U(!1);const me=d.current;if(!me)return;const ee=1;if(me.scale.set(ee,ee,ee),e&&e.positions.length>=2){const we=e.positions[0],Te=e.positions[1],xe=Te[0]-we[0],Ee=Te[1]-we[1],L=Math.atan2(xe,Ee);me.rotation.set(0,-L,0);const q=new D(we[0],0,we[1]).multiplyScalar(ee);q.applyAxisAngle(new D(0,1,0),me.rotation.y),me.position.set(-q.x,0,-q.z)}else{const we=t.rooms.find(Te=>Te.id===N.current);if((ge=we==null?void 0:we.connectedTo)!=null&&ge[0]){const Te=t.waypoints.find(xe=>xe.id===we.connectedTo[0]);Te&&me.position.set(-Te.position[0]*ee,0,-Te.position[1]*ee)}}b.current&&(b.current.visible=!1),E.current&&(E.current.visible=!1),M.current&&(M.current.visible=!1),A.current&&(A.current.visible=!1),e&&d.current&&oe(e,d.current),g.current.forEach(we=>{we.group.visible=!0}),u.current&&(u.current.visible=!1)}),Me.xr.addEventListener("sessionend",()=>{s&&s(!1),c.current&&(c.current.background=new Ze(657935));const me=d.current;me&&(me.scale.set(1,1,1),me.position.set(0,0,0),me.rotation.set(0,0,0),b.current&&(b.current.visible=!0),M.current&&(M.current.visible=!0),A.current&&(A.current.visible=!0),u.current&&(u.current.visible=!1),e&&me&&oe(e,me))}),ot($,Se),P(Y);const he=()=>{Ce.aspect=window.innerWidth/window.innerHeight,Ce.updateProjectionMatrix(),Me.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",he);const Pe=()=>{var xe;const me=Me.xr.isPresenting;me?Q.background=null:Q.background=new Ze(657935),H.update();const ee=Me.xr.getSession(),ge=Me.xr.getFrame();if(ee&&ge&&k&&!te&&d.current)try{const Ee=((xe=ge.getImageTrackingResults)==null?void 0:xe.call(ge))||[];for(const L of Ee)if(L.trackingState==="tracked"||L.trackingState==="emulated"){const q=L.index,de=Ki.filter(ie=>ie.marker)[q];if(de&&de.marker){const ie=Me.xr.getReferenceSpace();if(ie){const K=ge.getPose(L.imageSpace,ie);if(K){const{position:Ae,orientation:Oe}=K.transform,Qe=d.current;Qe.position.set(Ae.x,Ae.y,Ae.z),Qe.quaternion.set(Oe.x,Oe.y,Oe.z,Oe.w),Qe.translateX(-de.marker.position.x),Qe.translateZ(-de.marker.position.z),ae({label:de.label,floorId:de.id}),U(!0),j(!1),navigator.vibrate&&navigator.vibrate(200)}}}}}catch(Ee){console.error(Ee)}if(me&&te&&e&&e.positions.length>0){const Ee=new D;Ce.getWorldPosition(Ee);const L=e.positions[e.positions.length-1],q=new D(L[0],0,L[1]);d.current&&q.applyMatrix4(d.current.matrixWorld);const le=Ee.distanceTo(q);Ie(le);let de=0;const ie=n.findIndex(K=>K.floorId===t.floorId);if(ie!==-1)for(let K=ie+1;K<n.length;K++){const Ae=n[K];for(let Oe=1;Oe<Ae.positions.length;Oe++)de+=Math.sqrt(Math.pow(Ae.positions[Oe][0]-Ae.positions[Oe-1][0],2)+Math.pow(Ae.positions[Oe][1]-Ae.positions[Oe-1][1],2));de+=5}qe(le+de),ie===n.length-1&&le+de<1.5&&!ue?(navigator.vibrate&&navigator.vibrate([500,100,500]),Le(!0),J("You have arrived!")):le+de>=1.5&&(Le(!1),J(e.transition?`Take ${e.transition.name}`:"Follow arrows"))}if(b.current&&me&&te){const Ee=new D;Ce.getWorldPosition(Ee),b.current.children.forEach(L=>{const q=new D;L.getWorldPosition(q);const le=Ee.distanceTo(q);if(L.visible=le<5,L.visible){const de=L.material;de.opacity=Hi.lerp(1,0,(le-2)/3),L.scale.setScalar(Hi.lerp(1,.5,(le-2)/3))}})}if(E.current){const Ee=new D;Ce.getWorldPosition(Ee);const L=performance.now()*.001;E.current.children.forEach(q=>{const le=new D;q.getWorldPosition(le);const de=Ee.distanceTo(le),ie=me&&te;if(q.visible=ie?de<4:!0,q.visible){const K=q.material;K.opacity=ie?Hi.clamp(1-de/4,0,1):.9,K.transparent=!0,q.scale.setScalar(1+Math.sin(L*3)*.05)}})}const we=performance.now()*.001,Te=new D;if(Ce.getWorldPosition(Te),g.current.forEach((Ee,L)=>{const{group:q,mat:le}=Ee,de=new D;q.getWorldPosition(de);const ie=Te.distanceTo(de),K=ie<8;if(q.visible=K,K){const Ae=Hi.clamp(Hi.lerp(1,0,(ie-2)/6),0,1);le.opacity=Ae;const Oe=Hi.clamp(Hi.lerp(1,.1,(ie-2)/6),.1,1);q.scale.set(Oe,Oe,Oe);const Qe=Math.sin(we*2+L*.4)*.04;q.userData.baseY!==void 0&&(q.position.y=q.userData.baseY+Qe);const nt=1.8+Math.sin(we*3+L)*.7;le.emissiveIntensity=nt}}),v.current){const Ee=1+Math.sin(we*4)*.1;v.current.scale.set(Ee,Ee,Ee),v.current.rotation.y+=.02,v.current.rotation.z+=.01;const L=Math.sin(we*3)*.05;v.current.position.y=.6+L}if(m.current){const Ee=m.current.children.find(q=>q instanceof bt&&q.geometry instanceof sc);if(Ee){const q=1+Math.sin(we*4)*.15;Ee.scale.set(q,q,q)}const L=m.current.children.find(q=>q.userData.isDestinationLabel);if(L){L.lookAt(Ce.position);const q=Math.sin(we*2.5)*.1;L.position.y=1.2+q}}g.current.forEach(Ee=>{const L=Ee.group.children.find(q=>q.userData.isFloorLabel);L&&L.lookAt(Ce.position)}),Me.render(Q,Ce)};return Me.setAnimationLoop(Pe),()=>{window.removeEventListener("resize",he),Me.setAnimationLoop(null),Me.dispose(),H.dispose(),V&&Me.domElement&&V.removeChild(Me.domElement),V&&C.current&&C.current.parentNode&&V.removeChild(C.current)}},[]),Be.useEffect(()=>{d.current&&e&&oe(e,d.current)},[e]),Be.useEffect(()=>{C.current&&(C.current.style.display=o?"block":"none")},[o]);const ot=(V,Q)=>{const $=new Qs().setFromObject(Q),Y=new D;$.getSize(Y);const Ce=new D;$.getCenter(Ce);const Me=4,T=new Mi(Y.x+Me,Y.z+Me),S=new Er({color:526346,roughness:.8,metalness:.2}),I=new bt(T,S);if(I.rotation.x=-Math.PI/2,I.position.copy(Ce),I.position.y=0,I.receiveShadow=!0,R.current=S,M.current=I,V.add(I),t.corridorPolygon&&t.corridorPolygon.length>0){const B=new _h,[ne,H]=t.corridorPolygon[0];B.moveTo(ne,H),t.corridorPolygon.slice(1).forEach(([ee,ge])=>{B.lineTo(ee,ge)}),B.closePath();const Se={depth:.02,bevelEnabled:!1},he=new rc(B,Se),Pe=new Er({color:t.corridorColor||3066944,roughness:.6,metalness:.1,transparent:!0,opacity:.8}),me=new bt(he,Pe);me.rotation.x=-Math.PI/2,me.position.y=.01,V.add(me)}f.current&&p.current&&(f.current.position.set(Ce.x,38,Ce.z+.001),p.current.target.copy(Ce),p.current.update())},P=V=>{if(!t)return;const Q={gymkhana:12,gents:6,women:6,g1:8,g2:8,g3:8,g4:8,g5:8,lab1:8,lab2:8,lab3:8,lab4:8,lab5:8,lab6:8,lab7:10,lab8:10,lab9:14,lab10:8,lab11:8,lab12:8,lab13:8,lab14:8,hod:6,entc_hod:6,dept_lib:4,server:6,tutorial:3.5,corridor:20,lift:3,stairs_bot:3,faculty:6,seminar:10,301:8,302:8,303:8,304:8,306:8,501:8,502:8,503:8,504:8,505:8},$={gymkhana:6,principal:6,admin:6,conf:6,lab1:6,canteen:6,library:6,ramp:6,hod:6,entc_hod:6,dept_lib:6,server:6,tutorial:6,lab10:6,stairs_top:6,lab9:6,corridor:2,lift:6,stairs_bot:6,lab7:6,lab8:6,women:6,gents:6};t.rooms.forEach(Y=>{if(!Y.center)return;const Ce=Y.id.split("_").slice(1).join("_"),Me=Q[Ce]??6,T=$[Ce]??7.5,S=document.createElement("canvas"),I=S.getContext("2d");if(!I)return;S.width=512,S.height=512;const B=96,ne=28;let H=B;for(I.font=`bold ${H}px Arial`;I.measureText(Y.name).width>S.width*.88&&H>ne;)H-=4,I.font=`bold ${H}px Arial`;const Se=Y.name.split(" "),he=[];if(Se.length>1&&I.measureText(Y.name).width>S.width*.85){const de=Math.ceil(Se.length/2);he.push(Se.slice(0,de).join(" ")),he.push(Se.slice(de).join(" "));for(const ie of he)for(;I.measureText(ie).width>S.width*.88&&H>ne;)H-=4,I.font=`bold ${H}px Arial`}else he.push(Y.name);const Pe=H*1.25,me=he.length*Pe;I.clearRect(0,0,S.width,S.height),I.fillStyle="rgba(8, 8, 18, 0.82)";const ee=32;I.beginPath(),I.moveTo(ee,0),I.lineTo(S.width-ee,0),I.quadraticCurveTo(S.width,0,S.width,ee),I.lineTo(S.width,S.height-ee),I.quadraticCurveTo(S.width,S.height,S.width-ee,S.height),I.lineTo(ee,S.height),I.quadraticCurveTo(0,S.height,0,S.height-ee),I.lineTo(0,ee),I.quadraticCurveTo(0,0,ee,0),I.closePath(),I.fill(),I.strokeStyle="rgba(199, 146, 234, 0.85)",I.lineWidth=8,I.stroke(),I.font=`bold ${H}px Arial`,I.textAlign="center",I.textBaseline="middle",I.shadowColor="rgba(199, 146, 234, 1)",I.shadowBlur=24,I.fillStyle="#ffffff";const ge=S.height/2-me/2+Pe/2;he.forEach((de,ie)=>{I.fillText(de,S.width/2,ge+ie*Pe)}),I.shadowBlur=10,I.fillStyle="#eedeff",he.forEach((de,ie)=>{I.fillText(de,S.width/2,ge+ie*Pe)});const we=new rl(S);we.needsUpdate=!0;const Te=new ko({map:we,transparent:!0,depthWrite:!1,side:Yn}),xe=.7,Ee=Math.min(Me-xe,Me*.85),L=Math.min(T-xe,T*.75),q=new Mi(Ee,L),le=new bt(q,Te);le.position.set(Y.center[0],.06,Y.center[1]),le.rotation.x=-Math.PI/2,V.add(le)})},fe=V=>{t.floorMessages&&t.floorMessages.forEach(Q=>{const $=document.createElement("canvas"),Y=$.getContext("2d");if(!Y)return;$.width=1024,$.height=256;const Ce=Q.type==="welcome",Me=Ce?"#8b5cf6":Q.type==="quote"?"#10b981":"#f59e0b";Y.fillStyle="rgba(15, 15, 25, 0.7)",Y.roundRect(0,0,$.width,$.height,40),Y.fill(),Y.strokeStyle=Me,Y.lineWidth=10,Y.stroke(),Y.font="bold 80px Arial",Y.textAlign="center",Y.textBaseline="middle",Y.shadowColor=Me,Y.shadowBlur=30,Y.fillStyle="#ffffff",Y.fillText(Q.text,$.width/2,$.height/2);const T=new rl($),S=new Er({map:T,transparent:!0,opacity:0,depthWrite:!1,emissive:new Ze(Me),emissiveIntensity:2}),I=new Mi(Ce?4:2.5,Ce?1:.6),B=new bt(I,S);B.rotation.x=-Math.PI/2,B.position.set(Q.position[0],.02,Q.position[1]),V.add(B)})},oe=(V,Q)=>{var Qe,nt;if(g.current.forEach(et=>{Q.remove(et.group),et.geo.dispose(),et.mat.dispose()}),g.current=[],v.current&&(Q.remove(v.current),v.current.geometry.dispose(),v.current.material.dispose(),v.current=null),m.current&&(Q.remove(m.current),m.current.traverse(et=>{et.isMesh&&(et.geometry.dispose(),et.material.dispose())}),m.current=null),_.current=0,x.current=[],y.current=null,u.current&&(Q.remove(u.current),u.current.geometry.dispose(),u.current.material.dispose(),u.current=null),!V||V.positions.length<2)return;const $=V.positions.map(et=>new D(et[0],.12,et[1])),Y=new Pd(.25,0),Ce=new Er({color:1096065,emissive:1096065,emissiveIntensity:2,transparent:!0,opacity:.8,flatShading:!0}),Me=new bt(Y,Ce);Me.position.copy($[0]).setY(.6),Q.add(Me),v.current=Me;const T=t.rooms.find(et=>et.id===z.current),S=(T==null?void 0:T.name)||"Destination",I=V.positions[V.positions.length-1];let B=new D(I[0],.01,I[1]);if(T){const et=new D(T.center[0],.01,T.center[1]),Ft=new D().subVectors(et,B).normalize();B.add(Ft.multiplyScalar(.55))}const ne=new jn,H=document.createElement("canvas"),Se=H.getContext("2d");if(Se){H.width=512,H.height=128,Se.fillStyle="rgba(15, 15, 25, 0.85)",Se.roundRect(0,0,H.width,H.height,20),Se.fill(),Se.strokeStyle="#facc15",Se.lineWidth=6,Se.stroke(),Se.font="bold 60px Arial",Se.textAlign="center",Se.textBaseline="middle",Se.fillStyle="#ffffff",Se.shadowColor="#facc15",Se.shadowBlur=15,Se.fillText(S,H.width/2,H.height/2);const et=new rl(H),Ft=new ko({map:et,transparent:!0,side:Yn}),Ni=new bt(new Mi(2.5,.6),Ft);Ni.position.y=1.2,ne.add(Ni),Ni.userData.isDestinationLabel=!0}const he=new sc(.6,.05,16,48),Pe=new Er({color:16436245,emissive:16436245,emissiveIntensity:3}),me=new bt(he,Pe);if(me.rotation.x=-Math.PI/2,ne.add(me),ne.position.copy(B),Q.add(ne),m.current=ne,t.floorId===endFloorIdRef.current&&T&&$[$.length-1].copy(B).setY(.12),$.length<2)return;const ee=new G0($);y.current=ee;const we=ee.getPoints(300);x.current=we;const Te=new On().setFromPoints($.map(et=>et.clone().setY(.15))),xe=new B0({color:62207,linewidth:3}),Ee=new y1(Te,xe);Ee.userData.isPathLine=!0,Q.add(Ee),u.current=Ee;const L=20,q=((Qe=h.current)==null?void 0:Qe.xr.isPresenting)??!1,le=new _h;le.moveTo(-.15,-.1),le.lineTo(0,.08),le.lineTo(.15,-.1),le.lineTo(.15,-.02),le.lineTo(0,.16),le.lineTo(-.15,-.02),le.closePath();const de={depth:.04,bevelEnabled:!1},ie=new rc(le,de),K=q?Ue:.12,Ae=[10980346,3900150,440020,1096065,16436245,16347926,15680580],Oe=((nt=e.transition)==null?void 0:nt.toFloor)==="f1";for(let et=0;et<we.length;et+=L){const Ft=we[et].clone();Ft.y=K;const Ni=et/(we.length-1),hi=ee.getTangent(Ni).normalize(),qr=Oe&&et>we.length-60?16436245:Ae[et/L%Ae.length],io=new Er({color:qr,emissive:qr,emissiveIntensity:3,transparent:!0,opacity:0}),$r=new bt(ie,io),Tn=new jn;Tn.position.copy(Ft);const xa=Ft.clone().add(hi);if(Tn.lookAt(xa),$r.rotateX(-Math.PI/2),$r.rotateY(Math.PI),Tn.add($r),Tn.userData.baseY=K,Oe&&et>we.length-60){const di=document.createElement("canvas"),An=di.getContext("2d");if(An){di.width=256,di.height=64,An.fillStyle="rgba(15,15,25,0.8)",An.roundRect(0,0,256,64,10),An.fill(),An.font="bold 32px Arial",An.textAlign="center",An.textBaseline="middle",An.fillStyle="#ffffff",An.fillText("Ground Floor",128,32);const ya=new rl(di),Tc=new ko({map:ya,transparent:!0}),ro=new bt(new Mi(1.2,.3),Tc);ro.position.y=.6,ro.userData.isFloorLabel=!0,Tn.add(ro)}}Q.add(Tn),g.current.push({group:Tn,geo:ie,mat:io})}};return ce.jsxs(ce.Fragment,{children:[ce.jsx("div",{ref:l,className:"fixed inset-0 z-0"}),k&&ce.jsx("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/40 pointer-events-auto",children:ce.jsxs("div",{className:"bg-slate-900 border border-purple-500/50 p-8 rounded-3xl shadow-2xl flex flex-col items-center max-w-xs text-center pointer-events-auto",children:[ce.jsxs("div",{className:"relative w-24 h-24 mb-6",children:[ce.jsx("div",{className:"absolute inset-0 border-4 border-purple-500 rounded-2xl animate-pulse"}),ce.jsx("div",{className:"absolute inset-4 border-2 border-purple-400/50 rounded-lg animate-ping"}),ce.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:ce.jsx("span",{className:"text-4xl text-purple-400",children:"📷"})})]}),ce.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Aligning World"}),ce.jsxs("p",{className:"text-sm text-purple-200 mb-6 leading-relaxed",children:["Point your camera at the ",ce.jsxs("span",{className:"font-bold text-white underline",children:[((re=Ki.find(V=>V.id===t.floorId))==null?void 0:re.label)||"Floor"," Marker"]})," to calibrate."]}),ce.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[ce.jsx("button",{onClick:()=>Ke(),className:"px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-purple-500/20",children:"Found Marker (Align Now)"}),ce.jsx("button",{onClick:()=>j(!1),className:"px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-xl transition-colors border border-slate-700",children:"Skip Calibration"})]})]})}),te&&We!==null&&ce.jsx("div",{className:"fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm",children:ce.jsxs("div",{className:"bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl flex items-center gap-4",children:[ce.jsx("div",{className:"bg-purple-600/30 p-3 rounded-2xl",children:ce.jsx("div",{className:"w-6 h-6 border-2 border-purple-400 rounded-full animate-pulse flex items-center justify-center",children:ce.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full"})})}),ce.jsxs("div",{className:"flex-1",children:[ce.jsxs("div",{className:"flex items-baseline gap-2",children:[ce.jsx("span",{className:"text-2xl font-black text-white",children:We<1.5?"Arrived":`${Math.round(We)}m`}),ce.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:"Total"}),ve!==null&&Math.round(ve)!==Math.round(We)&&ce.jsxs("span",{className:"text-xs font-medium text-purple-400/80 ml-auto",children:[Math.round(ve),"m this floor"]})]}),ce.jsxs("p",{className:"text-sm font-medium text-purple-300",children:[$e," • ",Math.ceil(We/1.2/60)," min walk"]}),Z&&ce.jsxs("p",{className:"text-[10px] text-green-400 font-bold uppercase mt-1",children:["✓ Synced to ",Z.label]})]})]})}),a&&ce.jsxs(ce.Fragment,{children:[ce.jsx("button",{onClick:()=>{console.log("Button clicked!"),se(!X)},className:"fixed top-20 left-6 z-20 bg-white/95 p-3 rounded-full shadow-lg text-slate-800 hover:bg-slate-100 transition-colors","aria-label":"Toggle Far View",children:X?"Default View":"Far View"}),ce.jsxs("div",{className:"fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 bg-slate-900/80 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-2xl",children:[ce.jsx("span",{className:"text-[10px] font-bold text-white uppercase tracking-widest vertical-text mb-2",children:"Height"}),ce.jsx("div",{className:"relative h-48 w-8 flex items-center justify-center",children:ce.jsx("input",{type:"range",min:"0.05",max:"2.0",step:"0.05",value:Ue,onChange:V=>Fe(parseFloat(V.target.value)),className:"h-40 w-1 accent-purple-500 appearance-none bg-slate-700 rounded-lg cursor-pointer outline-none",style:{WebkitAppearance:"slider-vertical"}})}),ce.jsxs("span",{className:"text-xs font-black text-purple-400 mt-2",children:[Ue.toFixed(2),"m"]})]})]})]})}const h2={lift:"🛗",stairs:"🪜",ramp:"♿"};function d2({startRoomId:t,startFloorId:e,endRoomId:n,endFloorId:i,activeFloorId:r,pathSegments:s,onStartChange:o,onEndChange:a,onFloorChange:l,onFindPath:c,onClose:f}){var p,g;const h=Be.useMemo(()=>Gn.map(v=>{var m;return{floorId:v.floorId,label:((m=Ki.find(u=>u.id===v.floorId))==null?void 0:m.label)??v.floorId,rooms:v.rooms.filter(u=>{var _;return((_=u.connectedTo)==null?void 0:_.length)>0&&!u.id.endsWith("_corridor")})}}),[]),d=e===i;return ce.jsxs("div",{className:"fixed top-4 left-1/2 -translate-x-1/2 z-20 bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 w-full max-w-sm border border-purple-500/30",children:[ce.jsx("button",{onClick:f,className:"absolute top-3 right-3 text-slate-400 hover:text-white transition-colors",children:ce.jsx(Hy,{className:"w-5 h-5"})}),ce.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[ce.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-indigo-600 p-2 rounded-xl",children:ce.jsx(jp,{className:"w-5 h-5 text-white"})}),ce.jsxs("div",{children:[ce.jsx("h1",{className:"text-lg font-bold text-white",children:"AR Navigation"}),ce.jsx("p",{className:"text-xs text-purple-300",children:"Multi-Floor System"})]})]}),ce.jsxs("div",{className:"mb-4",children:[ce.jsxs("label",{className:"flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5",children:[ce.jsx(Wp,{className:"w-3.5 h-3.5"})," Viewing Floor"]}),ce.jsx("div",{className:"grid grid-cols-3 gap-1",children:Ki.map(v=>ce.jsxs("button",{onClick:()=>l(v.id),className:`text-xs py-1.5 px-2 rounded-lg font-medium transition-all truncate ${r===v.id?"bg-purple-600 text-white shadow-lg shadow-purple-500/30":"bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"}`,children:["F",v.number]},v.id))})]}),ce.jsxs("div",{className:"space-y-3",children:[ce.jsxs("div",{children:[ce.jsxs("label",{className:"flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5",children:[ce.jsx(Xp,{className:"w-3.5 h-3.5 text-green-400"})," From"]}),ce.jsx("select",{value:e,onChange:v=>{const m=Gn.find(_=>_.floorId===v.target.value),u=m==null?void 0:m.rooms.find(_=>!_.id.endsWith("_corridor"));o(v.target.value,(u==null?void 0:u.id)??"")},className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs mb-1 focus:outline-none focus:ring-2 focus:ring-purple-500",children:h.map(v=>ce.jsx("option",{value:v.floorId,children:v.label},v.floorId))}),ce.jsx("select",{value:t,onChange:v=>o(e,v.target.value),className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs focus:outline-none focus:ring-2 focus:ring-purple-500",children:(p=h.find(v=>v.floorId===e))==null?void 0:p.rooms.map(v=>ce.jsx("option",{value:v.id,children:v.name},v.id))})]}),ce.jsxs("div",{className:"flex items-center gap-2",children:[ce.jsx("div",{className:"flex-1 h-px bg-slate-700"}),ce.jsx("div",{className:"flex items-center gap-1 text-xs text-purple-400",children:d?ce.jsx("span",{className:"text-slate-500",children:"same floor"}):ce.jsxs(ce.Fragment,{children:[ce.jsx(ky,{className:"w-3 h-3"}),ce.jsx("span",{children:"cross-floor"}),ce.jsx(zy,{className:"w-3 h-3"})]})}),ce.jsx("div",{className:"flex-1 h-px bg-slate-700"})]}),ce.jsxs("div",{children:[ce.jsxs("label",{className:"flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5",children:[ce.jsx(Xp,{className:"w-3.5 h-3.5 text-red-400"})," To"]}),ce.jsx("select",{value:i,onChange:v=>{const m=Gn.find(_=>_.floorId===v.target.value),u=m==null?void 0:m.rooms.find(_=>!_.id.endsWith("_corridor"));a(v.target.value,(u==null?void 0:u.id)??"")},className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs mb-1 focus:outline-none focus:ring-2 focus:ring-purple-500",children:h.map(v=>ce.jsx("option",{value:v.floorId,children:v.label},v.floorId))}),ce.jsx("select",{value:n,onChange:v=>a(i,v.target.value),className:"w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white text-xs focus:outline-none focus:ring-2 focus:ring-purple-500",children:(g=h.find(v=>v.floorId===i))==null?void 0:g.rooms.map(v=>ce.jsx("option",{value:v.id,children:v.name},v.id))})]}),ce.jsxs("button",{onClick:c,className:"w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2",children:[ce.jsx(jp,{className:"w-4 h-4"})," Find Path"]})]}),s.length>0&&ce.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-700",children:[ce.jsxs("p",{className:"text-xs font-semibold text-slate-400 mb-2 flex items-center gap-1",children:[ce.jsx(Wp,{className:"w-3 h-3"})," Route (",s.length," floor",s.length>1?"s":"",")"]}),ce.jsx("div",{className:"space-y-1.5",children:s.map((v,m)=>{var _;const u=Ki.find(x=>x.id===v.floorId);return ce.jsxs("div",{children:[ce.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[ce.jsx("div",{className:`w-2 h-2 rounded-full flex-shrink-0 ${v.floorId===r?"bg-purple-400":"bg-slate-600"}`}),ce.jsx("span",{className:`font-medium ${v.floorId===r?"text-white":"text-slate-400"}`,children:(u==null?void 0:u.label)??v.floorId}),ce.jsxs("span",{className:"text-slate-600 ml-auto",children:[v.waypointIds.length," wp"]}),v.floorId===r&&ce.jsx("span",{className:"text-purple-400 text-[10px]",children:"●"})]}),v.transition&&ce.jsxs("div",{className:"ml-4 text-[11px] text-amber-300 mt-0.5",children:[h2[v.transition.type]," ",v.transition.name,ce.jsxs("span",{className:"text-slate-500",children:[" → ",(_=Ki.find(x=>x.id===v.transition.toFloor))==null?void 0:_.label]})]})]},m)})})]})]})}function p2(t){const e=[];for(const n of t){const i=parseInt(n.floorId.replace("f",""),10);for(const r of n.waypoints)e.push({id:r.id,position:[r.position[0],r.position[1],i],connectedTo:[...r.connectedTo],floorId:n.floorId})}for(const n of Id){const i=Object.keys(n.floorWaypoints);for(let r=0;r<i.length;r++){const s=i[r],o=n.floorWaypoints[s],a=e.find(l=>l.id===o);if(a)for(let l=0;l<i.length;l++){if(r===l)continue;const c=i[l],f=n.floorWaypoints[c];e.find(h=>h.id===f)&&(a.connectedTo.includes(f)||a.connectedTo.push(f))}}}return e}function Uu(t,e){const n=t.position[0]-e.position[0],i=t.position[1]-e.position[1],r=(t.position[2]-e.position[2])*15;return Math.sqrt(n*n+i*i+r*r)}function m2(t,e,n){const i=[t],r={},s={},o={},a=n.find(c=>c.id===e);if(!a)return[];for(const c of n)s[c.id]=1/0,o[c.id]=1/0;s[t]=0;const l=n.find(c=>c.id===t);for(o[t]=l?Uu(l,a):1/0;i.length>0;){i.sort((p,g)=>o[p]-o[g]);const c=i.shift();if(c===e){const p=[c];let g=c;for(;r[g];)g=r[g],p.unshift(g);return p}const f=n.find(p=>p.id===c),h=r[c],d=h?n.find(p=>p.id===h):null;for(const p of f.connectedTo){const g=n.find(u=>u.id===p);if(!g)continue;let v=Uu(f,g);if(f.floorId!==g.floorId){const u=Id.find(_=>Object.values(_.floorWaypoints).includes(c)&&Object.values(_.floorWaypoints).includes(p));v+=(u==null?void 0:u.costPerFloor)??20}if(d){const u=f.position[0]-d.position[0],_=f.position[1]-d.position[1],x=g.position[0]-f.position[0],y=g.position[1]-f.position[1],C=Math.sqrt(u*u+_*_)||1,A=Math.sqrt(x*x+y*y)||1;(u*x+_*y)/(C*A)<.9&&(v+=15)}const m=s[c]+v;m<(s[p]??1/0)&&(r[p]=c,s[p]=m,o[p]=m+Uu(g,a),i.includes(p)||i.push(p))}}return[]}function g2(t,e,n){let i="",r="";for(const c of n){const f=c.rooms.find(d=>d.id===t);f!=null&&f.connectedTo[0]&&(i=f.connectedTo[0]);const h=c.rooms.find(d=>d.id===e);h!=null&&h.connectedTo[0]&&(r=h.connectedTo[0])}if(!i||!r)return[];const s=p2(n),o=m2(i,r,s);if(o.length===0)return[];const a=[];let l=null;for(let c=0;c<o.length;c++){const f=o[c],h=s.find(p=>p.id===f);if(!l||l.floorId!==h.floorId){if(l&&c>0){const p=o[c-1],g=Id.find(v=>Object.values(v.floorWaypoints).includes(p)&&Object.values(v.floorWaypoints).includes(f));g&&(l.transition={type:g.type,name:g.name,fromFloor:l.floorId,toFloor:h.floorId})}l={floorId:h.floorId,waypointIds:[f],positions:[[h.position[0],h.position[1]]]},a.push(l)}else l.waypointIds.push(f),l.positions.push([h.position[0],h.position[1]])}return a}function _2(){var b,E,M,N,z,X,se;console.log("AR System Version 1.0.2 - CSE Update");const t="f2",e=((E=(b=Gn.find(k=>k.floorId===t))==null?void 0:b.rooms.find(k=>!k.id.endsWith("_corridor")))==null?void 0:E.id)??"",n=((N=(M=Gn.find(k=>k.floorId===t))==null?void 0:M.rooms.filter(k=>!k.id.endsWith("_corridor"))[1])==null?void 0:N.id)??"",[i,r]=Be.useState(t),[s,o]=Be.useState(e),[a,l]=Be.useState(t),[c,f]=Be.useState(n),[h,d]=Be.useState(t),[p,g]=Be.useState([]),[v,m]=Be.useState(!1),[u,_]=Be.useState(!1),x=Be.useCallback(()=>{const k=g2(s,c,Gn);g(k),k.length>0&&d(k[0].floorId),_(!1)},[s,c]),y=(k,j)=>{r(k),o(j)},C=(k,j)=>{l(k),f(j)},A=Gn.find(k=>k.floorId===h),R=p.find(k=>k.floorId===h)??null;return ce.jsxs("main",{children:[!v&&!u&&ce.jsx("button",{onClick:()=>_(!0),className:"fixed top-6 left-6 z-20 bg-slate-900/90 border border-purple-500/30 p-3 rounded-full shadow-lg text-white hover:bg-slate-800 transition-colors","aria-label":"Open navigation menu",children:ce.jsx(By,{className:"w-6 h-6"})}),!v&&!u&&ce.jsx("div",{className:"fixed top-6 left-20 z-20 bg-slate-900/90 border border-purple-500/30 px-3 py-2 rounded-full text-xs text-purple-300 font-medium",children:Gn.find(k=>k.floorId===h)&&ce.jsxs(ce.Fragment,{children:["Viewing: ",ce.jsx("span",{className:"text-white font-bold",children:((z=Gn.find(k=>k.floorId===h))==null?void 0:z.floorName)||h})]})}),!v&&u&&ce.jsx(d2,{startRoomId:s,startFloorId:i,endRoomId:c,endFloorId:a,activeFloorId:h,pathSegments:p,onStartChange:y,onEndChange:C,onFloorChange:d,onFindPath:x,onClose:()=>_(!1)}),(R==null?void 0:R.transition)&&!u&&ce.jsxs("div",{className:"fixed bottom-24 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-xs bg-slate-900/95 border border-amber-500/50 p-4 rounded-2xl shadow-2xl backdrop-blur-md",children:[ce.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[ce.jsx("div",{className:"bg-amber-500/20 p-2 rounded-lg",children:ce.jsx("span",{className:"text-xl",children:R.transition.type==="lift"?"🛗":R.transition.type==="stairs"?"🪜":"♿"})}),ce.jsxs("div",{children:[ce.jsx("p",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider",children:"Next Step"}),ce.jsxs("p",{className:"text-sm text-white font-medium",children:["Take the ",R.transition.name," to ",((X=Gn.find(k=>{var j;return k.floorId===((j=R.transition)==null?void 0:j.toFloor)}))==null?void 0:X.floorName)||R.transition.toFloor]})]})]}),ce.jsxs("button",{onClick:()=>d(R.transition.toFloor),className:"w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-2 rounded-xl transition-colors text-sm shadow-lg shadow-amber-500/20",children:["Switch to ",((se=Gn.find(k=>{var j;return k.floorId===((j=R.transition)==null?void 0:j.toFloor)}))==null?void 0:se.floorName.split(" ")[0])||"Next"," Floor"]})]}),A&&ce.jsx(f2,{floorData:A,activeSegment:R,pathSegments:p,startRoomId:i===h?s:null,endRoomId:a===h?c:null,onSessionStateChange:m,showARButton:!u,showUIView:!u})]})}g0(document.getElementById("root")).render(ce.jsx(Be.StrictMode,{children:ce.jsx(_2,{})}));
