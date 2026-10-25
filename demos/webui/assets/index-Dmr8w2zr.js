import {installShowcase} from "./showcase-bridge.js";
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./main-Dqivs-S6.js","./main-JfTR4zFi.css"])))=>i.map(i=>d[i]);
function rp(i,u){for(var a=0;a<u.length;a++){const h=u[a];if(typeof h!="string"&&!Array.isArray(h)){for(const p in h)if(p!=="default"&&!(p in i)){const w=Object.getOwnPropertyDescriptor(h,p);w&&Object.defineProperty(i,p,w.get?w:{enumerable:!0,get:()=>h[p]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))h(p);new MutationObserver(p=>{for(const w of p)if(w.type==="childList")for(const k of w.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&h(k)}).observe(document,{childList:!0,subtree:!0});function a(p){const w={};return p.integrity&&(w.integrity=p.integrity),p.referrerPolicy&&(w.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?w.credentials="include":p.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function h(p){if(p.ep)return;p.ep=!0;const w=a(p);fetch(p.href,w)}})();const op="modulepreload",lp=function(i,u){return new URL(i,u).href},Cc={},ip=function(u,a,h){let p=Promise.resolve();if(a&&a.length>0){let k=function(S){return Promise.all(S.map(P=>Promise.resolve(P).then(D=>({status:"fulfilled",value:D}),D=>({status:"rejected",reason:D}))))};const _=document.getElementsByTagName("link"),x=document.querySelector("meta[property=csp-nonce]"),A=(x==null?void 0:x.nonce)||(x==null?void 0:x.getAttribute("nonce"));p=k(a.map(S=>{if(S=lp(S,h),S in Cc)return;Cc[S]=!0;const P=S.endsWith(".css"),D=P?'[rel="stylesheet"]':"";if(!!h)for(let V=_.length-1;V>=0;V--){const Q=_[V];if(Q.href===S&&(!P||Q.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${S}"]${D}`))return;const F=document.createElement("link");if(F.rel=P?"stylesheet":op,P||(F.as="script"),F.crossOrigin="",F.href=S,A&&F.setAttribute("nonce",A),document.head.appendChild(F),P)return new Promise((V,Q)=>{F.addEventListener("load",V),F.addEventListener("error",()=>Q(new Error(`Unable to preload CSS for ${S}`)))})}))}function w(k){const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=k,window.dispatchEvent(_),!_.defaultPrevented)throw k}return p.then(k=>{for(const _ of k||[])_.status==="rejected"&&w(_.reason);return u().catch(w)})};var Z0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function em(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var u=i.default;if(typeof u=="function"){var a=function h(){return this instanceof h?Reflect.construct(u,arguments,this.constructor):u.apply(this,arguments)};a.prototype=u.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(i).forEach(function(h){var p=Object.getOwnPropertyDescriptor(i,h);Object.defineProperty(a,h,p.get?p:{enumerable:!0,get:function(){return i[h]}})}),a}var rs={exports:{}},Or={},os={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec;function sp(){if(Ec)return X;Ec=1;var i=Symbol.for("react.element"),u=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),k=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),P=Symbol.iterator;function D(m){return m===null||typeof m!="object"?null:(m=P&&m[P]||m["@@iterator"],typeof m=="function"?m:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,V={};function Q(m,E,G){this.props=m,this.context=E,this.refs=V,this.updater=G||j}Q.prototype.isReactComponent={},Q.prototype.setState=function(m,E){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,E,"setState")},Q.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function le(){}le.prototype=Q.prototype;function Ce(m,E,G){this.props=m,this.context=E,this.refs=V,this.updater=G||j}var W=Ce.prototype=new le;W.constructor=Ce,F(W,Q.prototype),W.isPureReactComponent=!0;var ae=Array.isArray,Ee=Object.prototype.hasOwnProperty,ke={current:null},Te={key:!0,ref:!0,__self:!0,__source:!0};function Le(m,E,G){var J,Z={},ee=null,ie=null;if(E!=null)for(J in E.ref!==void 0&&(ie=E.ref),E.key!==void 0&&(ee=""+E.key),E)Ee.call(E,J)&&!Te.hasOwnProperty(J)&&(Z[J]=E[J]);var te=arguments.length-2;if(te===1)Z.children=G;else if(1<te){for(var fe=Array(te),Je=0;Je<te;Je++)fe[Je]=arguments[Je+2];Z.children=fe}if(m&&m.defaultProps)for(J in te=m.defaultProps,te)Z[J]===void 0&&(Z[J]=te[J]);return{$$typeof:i,type:m,key:ee,ref:ie,props:Z,_owner:ke.current}}function kn(m,E){return{$$typeof:i,type:m.type,key:E,ref:m.ref,props:m.props,_owner:m._owner}}function Ve(m){return typeof m=="object"&&m!==null&&m.$$typeof===i}function fn(m){var E={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(G){return E[G]})}var rn=/\/+/g;function Oe(m,E){return typeof m=="object"&&m!==null&&m.key!=null?fn(""+m.key):E.toString(36)}function Xe(m,E,G,J,Z){var ee=typeof m;(ee==="undefined"||ee==="boolean")&&(m=null);var ie=!1;if(m===null)ie=!0;else switch(ee){case"string":case"number":ie=!0;break;case"object":switch(m.$$typeof){case i:case u:ie=!0}}if(ie)return ie=m,Z=Z(ie),m=J===""?"."+Oe(ie,0):J,ae(Z)?(G="",m!=null&&(G=m.replace(rn,"$&/")+"/"),Xe(Z,E,G,"",function(Je){return Je})):Z!=null&&(Ve(Z)&&(Z=kn(Z,G+(!Z.key||ie&&ie.key===Z.key?"":(""+Z.key).replace(rn,"$&/")+"/")+m)),E.push(Z)),1;if(ie=0,J=J===""?".":J+":",ae(m))for(var te=0;te<m.length;te++){ee=m[te];var fe=J+Oe(ee,te);ie+=Xe(ee,E,G,fe,Z)}else if(fe=D(m),typeof fe=="function")for(m=fe.call(m),te=0;!(ee=m.next()).done;)ee=ee.value,fe=J+Oe(ee,te++),ie+=Xe(ee,E,G,fe,Z);else if(ee==="object")throw E=String(m),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.");return ie}function Y(m,E,G){if(m==null)return m;var J=[],Z=0;return Xe(m,J,"","",function(ee){return E.call(G,ee,Z++)}),J}function ye(m){if(m._status===-1){var E=m._result;E=E(),E.then(function(G){(m._status===0||m._status===-1)&&(m._status=1,m._result=G)},function(G){(m._status===0||m._status===-1)&&(m._status=2,m._result=G)}),m._status===-1&&(m._status=0,m._result=E)}if(m._status===1)return m._result.default;throw m._result}var oe={current:null},z={transition:null},B={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:z,ReactCurrentOwner:ke};function M(){throw Error("act(...) is not supported in production builds of React.")}return X.Children={map:Y,forEach:function(m,E,G){Y(m,function(){E.apply(this,arguments)},G)},count:function(m){var E=0;return Y(m,function(){E++}),E},toArray:function(m){return Y(m,function(E){return E})||[]},only:function(m){if(!Ve(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},X.Component=Q,X.Fragment=a,X.Profiler=p,X.PureComponent=Ce,X.StrictMode=h,X.Suspense=x,X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,X.act=M,X.cloneElement=function(m,E,G){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var J=F({},m.props),Z=m.key,ee=m.ref,ie=m._owner;if(E!=null){if(E.ref!==void 0&&(ee=E.ref,ie=ke.current),E.key!==void 0&&(Z=""+E.key),m.type&&m.type.defaultProps)var te=m.type.defaultProps;for(fe in E)Ee.call(E,fe)&&!Te.hasOwnProperty(fe)&&(J[fe]=E[fe]===void 0&&te!==void 0?te[fe]:E[fe])}var fe=arguments.length-2;if(fe===1)J.children=G;else if(1<fe){te=Array(fe);for(var Je=0;Je<fe;Je++)te[Je]=arguments[Je+2];J.children=te}return{$$typeof:i,type:m.type,key:Z,ref:ee,props:J,_owner:ie}},X.createContext=function(m){return m={$$typeof:k,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:w,_context:m},m.Consumer=m},X.createElement=Le,X.createFactory=function(m){var E=Le.bind(null,m);return E.type=m,E},X.createRef=function(){return{current:null}},X.forwardRef=function(m){return{$$typeof:_,render:m}},X.isValidElement=Ve,X.lazy=function(m){return{$$typeof:S,_payload:{_status:-1,_result:m},_init:ye}},X.memo=function(m,E){return{$$typeof:A,type:m,compare:E===void 0?null:E}},X.startTransition=function(m){var E=z.transition;z.transition={};try{m()}finally{z.transition=E}},X.unstable_act=M,X.useCallback=function(m,E){return oe.current.useCallback(m,E)},X.useContext=function(m){return oe.current.useContext(m)},X.useDebugValue=function(){},X.useDeferredValue=function(m){return oe.current.useDeferredValue(m)},X.useEffect=function(m,E){return oe.current.useEffect(m,E)},X.useId=function(){return oe.current.useId()},X.useImperativeHandle=function(m,E,G){return oe.current.useImperativeHandle(m,E,G)},X.useInsertionEffect=function(m,E){return oe.current.useInsertionEffect(m,E)},X.useLayoutEffect=function(m,E){return oe.current.useLayoutEffect(m,E)},X.useMemo=function(m,E){return oe.current.useMemo(m,E)},X.useReducer=function(m,E,G){return oe.current.useReducer(m,E,G)},X.useRef=function(m){return oe.current.useRef(m)},X.useState=function(m){return oe.current.useState(m)},X.useSyncExternalStore=function(m,E,G){return oe.current.useSyncExternalStore(m,E,G)},X.useTransition=function(){return oe.current.useTransition()},X.version="18.3.1",X}var Tc;function Ts(){return Tc||(Tc=1,os.exports=sp()),os.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc;function ap(){if(Pc)return Or;Pc=1;var i=Ts(),u=Symbol.for("react.element"),a=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,p=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function k(_,x,A){var S,P={},D=null,j=null;A!==void 0&&(D=""+A),x.key!==void 0&&(D=""+x.key),x.ref!==void 0&&(j=x.ref);for(S in x)h.call(x,S)&&!w.hasOwnProperty(S)&&(P[S]=x[S]);if(_&&_.defaultProps)for(S in x=_.defaultProps,x)P[S]===void 0&&(P[S]=x[S]);return{$$typeof:u,type:_,key:D,ref:j,props:P,_owner:p.current}}return Or.Fragment=a,Or.jsx=k,Or.jsxs=k,Or}var Ic;function up(){return Ic||(Ic=1,rs.exports=ap()),rs.exports}var de=up(),lt=Ts();const Vr=Qc(lt),nm=rp({__proto__:null,default:Vr},[lt]);var Zo={},ls={exports:{}},Ye={},is={exports:{}},ss={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc;function cp(){return Dc||(Dc=1,(function(i){function u(z,B){var M=z.length;z.push(B);e:for(;0<M;){var m=M-1>>>1,E=z[m];if(0<p(E,B))z[m]=B,z[M]=E,M=m;else break e}}function a(z){return z.length===0?null:z[0]}function h(z){if(z.length===0)return null;var B=z[0],M=z.pop();if(M!==B){z[0]=M;e:for(var m=0,E=z.length,G=E>>>1;m<G;){var J=2*(m+1)-1,Z=z[J],ee=J+1,ie=z[ee];if(0>p(Z,M))ee<E&&0>p(ie,Z)?(z[m]=ie,z[ee]=M,m=ee):(z[m]=Z,z[J]=M,m=J);else if(ee<E&&0>p(ie,M))z[m]=ie,z[ee]=M,m=ee;else break e}}return B}function p(z,B){var M=z.sortIndex-B.sortIndex;return M!==0?M:z.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;i.unstable_now=function(){return w.now()}}else{var k=Date,_=k.now();i.unstable_now=function(){return k.now()-_}}var x=[],A=[],S=1,P=null,D=3,j=!1,F=!1,V=!1,Q=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,Ce=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(z){for(var B=a(A);B!==null;){if(B.callback===null)h(A);else if(B.startTime<=z)h(A),B.sortIndex=B.expirationTime,u(x,B);else break;B=a(A)}}function ae(z){if(V=!1,W(z),!F)if(a(x)!==null)F=!0,ye(Ee);else{var B=a(A);B!==null&&oe(ae,B.startTime-z)}}function Ee(z,B){F=!1,V&&(V=!1,le(Le),Le=-1),j=!0;var M=D;try{for(W(B),P=a(x);P!==null&&(!(P.expirationTime>B)||z&&!fn());){var m=P.callback;if(typeof m=="function"){P.callback=null,D=P.priorityLevel;var E=m(P.expirationTime<=B);B=i.unstable_now(),typeof E=="function"?P.callback=E:P===a(x)&&h(x),W(B)}else h(x);P=a(x)}if(P!==null)var G=!0;else{var J=a(A);J!==null&&oe(ae,J.startTime-B),G=!1}return G}finally{P=null,D=M,j=!1}}var ke=!1,Te=null,Le=-1,kn=5,Ve=-1;function fn(){return!(i.unstable_now()-Ve<kn)}function rn(){if(Te!==null){var z=i.unstable_now();Ve=z;var B=!0;try{B=Te(!0,z)}finally{B?Oe():(ke=!1,Te=null)}}else ke=!1}var Oe;if(typeof Ce=="function")Oe=function(){Ce(rn)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,Y=Xe.port2;Xe.port1.onmessage=rn,Oe=function(){Y.postMessage(null)}}else Oe=function(){Q(rn,0)};function ye(z){Te=z,ke||(ke=!0,Oe())}function oe(z,B){Le=Q(function(){z(i.unstable_now())},B)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(z){z.callback=null},i.unstable_continueExecution=function(){F||j||(F=!0,ye(Ee))},i.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):kn=0<z?Math.floor(1e3/z):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_getFirstCallbackNode=function(){return a(x)},i.unstable_next=function(z){switch(D){case 1:case 2:case 3:var B=3;break;default:B=D}var M=D;D=B;try{return z()}finally{D=M}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(z,B){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var M=D;D=z;try{return B()}finally{D=M}},i.unstable_scheduleCallback=function(z,B,M){var m=i.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?m+M:m):M=m,z){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=M+E,z={id:S++,callback:B,priorityLevel:z,startTime:M,expirationTime:E,sortIndex:-1},M>m?(z.sortIndex=M,u(A,z),a(x)===null&&z===a(A)&&(V?(le(Le),Le=-1):V=!0,oe(ae,M-m))):(z.sortIndex=E,u(x,z),F||j||(F=!0,ye(Ee))),z},i.unstable_shouldYield=fn,i.unstable_wrapCallback=function(z){var B=D;return function(){var M=D;D=B;try{return z.apply(this,arguments)}finally{D=M}}}})(ss)),ss}var Ac;function dp(){return Ac||(Ac=1,is.exports=cp()),is.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc;function fp(){if(Nc)return Ye;Nc=1;var i=Ts(),u=dp();function a(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h=new Set,p={};function w(e,n){k(e,n),k(e+"Capture",n)}function k(e,n){for(p[e]=n,e=0;e<n.length;e++)h.add(n[e])}var _=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,A=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},P={};function D(e){return x.call(P,e)?!0:x.call(S,e)?!1:A.test(e)?P[e]=!0:(S[e]=!0,!1)}function j(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F(e,n,t,r){if(n===null||typeof n>"u"||j(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function V(e,n,t,r,o,l,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=s}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new V(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Q[n]=new V(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new V(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new V(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new V(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new V(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new V(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new V(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new V(e,5,!1,e.toLowerCase(),null,!1,!1)});var le=/[\-:]([a-z])/g;function Ce(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(le,Ce);Q[n]=new V(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(le,Ce);Q[n]=new V(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(le,Ce);Q[n]=new V(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new V(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new V(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,n,t,r){var o=Q.hasOwnProperty(n)?Q[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(F(n,t,o,r)&&(t=null),r||o===null?D(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var ae=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ee=Symbol.for("react.element"),ke=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),Le=Symbol.for("react.strict_mode"),kn=Symbol.for("react.profiler"),Ve=Symbol.for("react.provider"),fn=Symbol.for("react.context"),rn=Symbol.for("react.forward_ref"),Oe=Symbol.for("react.suspense"),Xe=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),z=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var M=Object.assign,m;function E(e){if(m===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);m=n&&n[1]||""}return`
`+m+e}var G=!1;function J(e,n){if(!e||G)return"";G=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(y){var r=y}Reflect.construct(e,[],n)}else{try{n.call()}catch(y){r=y}e.call(n.prototype)}else{try{throw Error()}catch(y){r=y}e()}}catch(y){if(y&&r&&typeof y.stack=="string"){for(var o=y.stack.split(`
`),l=r.stack.split(`
`),s=o.length-1,c=l.length-1;1<=s&&0<=c&&o[s]!==l[c];)c--;for(;1<=s&&0<=c;s--,c--)if(o[s]!==l[c]){if(s!==1||c!==1)do if(s--,c--,0>c||o[s]!==l[c]){var d=`
`+o[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=c);break}}}finally{G=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?E(e):""}function Z(e){switch(e.tag){case 5:return E(e.type);case 16:return E("Lazy");case 13:return E("Suspense");case 19:return E("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1),e;case 11:return e=J(e.type.render,!1),e;case 1:return e=J(e.type,!0),e;default:return""}}function ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Te:return"Fragment";case ke:return"Portal";case kn:return"Profiler";case Le:return"StrictMode";case Oe:return"Suspense";case Xe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fn:return(e.displayName||"Context")+".Consumer";case Ve:return(e._context.displayName||"Context")+".Provider";case rn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return n=e.displayName||null,n!==null?n:ee(e.type)||"Memo";case ye:n=e._payload,e=e._init;try{return ee(e(n))}catch{}}return null}function ie(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(n);case 8:return n===Le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function te(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e){var n=fe(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wr(e){e._valueTracker||(e._valueTracker=Je(e))}function As(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=fe(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,n){var t=n.checked;return M({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ns(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=te(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function zs(e,n){n=n.checked,n!=null&&W(e,"checked",n,!1)}function dl(e,n){zs(e,n);var t=te(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?fl(e,n.type,t):n.hasOwnProperty("defaultValue")&&fl(e,n.type,te(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ls(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function fl(e,n,t){(n!=="number"||Hr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Jt=Array.isArray;function St(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+te(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function pl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(a(91));return M({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(a(92));if(Jt(t)){if(1<t.length)throw Error(a(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:te(t)}}function Ms(e,n){var t=te(n.value),r=te(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Os(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ml(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?bs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $r,Us=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=$r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function qt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Zt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},id=["Webkit","ms","Moz","O"];Object.keys(Zt).forEach(function(e){id.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Zt[n]=Zt[e]})});function js(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Zt.hasOwnProperty(e)&&Zt[e]?(""+n).trim():n+"px"}function Fs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=js(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var sd=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hl(e,n){if(n){if(sd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(a(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(a(61))}if(n.style!=null&&typeof n.style!="object")throw Error(a(62))}}function gl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,xt=null,_t=null;function Vs(e){if(e=Sr(e)){if(typeof wl!="function")throw Error(a(280));var n=e.stateNode;n&&(n=mo(n),wl(e.stateNode,e.type,n))}}function Ws(e){xt?_t?_t.push(e):_t=[e]:xt=e}function Hs(){if(xt){var e=xt,n=_t;if(_t=xt=null,Vs(e),n)for(e=0;e<n.length;e++)Vs(n[e])}}function $s(e,n){return e(n)}function Qs(){}var kl=!1;function Bs(e,n,t){if(kl)return e(n,t);kl=!0;try{return $s(e,n,t)}finally{kl=!1,(xt!==null||_t!==null)&&(Qs(),Hs())}}function er(e,n){var t=e.stateNode;if(t===null)return null;var r=mo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var Sl=!1;if(_)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Sl=!1}function ad(e,n,t,r,o,l,s,c,d){var y=Array.prototype.slice.call(arguments,3);try{n.apply(t,y)}catch(T){this.onError(T)}}var tr=!1,Qr=null,Br=!1,xl=null,ud={onError:function(e){tr=!0,Qr=e}};function cd(e,n,t,r,o,l,s,c,d){tr=!1,Qr=null,ad.apply(ud,arguments)}function dd(e,n,t,r,o,l,s,c,d){if(cd.apply(this,arguments),tr){if(tr){var y=Qr;tr=!1,Qr=null}else throw Error(a(198));Br||(Br=!0,xl=y)}}function it(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ks(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Gs(e){if(it(e)!==e)throw Error(a(188))}function fd(e){var n=e.alternate;if(!n){if(n=it(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===t)return Gs(o),e;if(l===r)return Gs(o),n;l=l.sibling}throw Error(a(188))}if(t.return!==r.return)t=o,r=l;else{for(var s=!1,c=o.child;c;){if(c===t){s=!0,t=o,r=l;break}if(c===r){s=!0,r=o,t=l;break}c=c.sibling}if(!s){for(c=l.child;c;){if(c===t){s=!0,t=l,r=o;break}if(c===r){s=!0,r=l,t=o;break}c=c.sibling}if(!s)throw Error(a(189))}}if(t.alternate!==r)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function Ys(e){return e=fd(e),e!==null?Xs(e):null}function Xs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Xs(e);if(n!==null)return n;e=e.sibling}return null}var Js=u.unstable_scheduleCallback,qs=u.unstable_cancelCallback,pd=u.unstable_shouldYield,md=u.unstable_requestPaint,Se=u.unstable_now,hd=u.unstable_getCurrentPriorityLevel,_l=u.unstable_ImmediatePriority,Zs=u.unstable_UserBlockingPriority,Kr=u.unstable_NormalPriority,gd=u.unstable_LowPriority,ea=u.unstable_IdlePriority,Gr=null,Sn=null;function vd(e){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Gr,e,void 0,(e.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:kd,yd=Math.log,wd=Math.LN2;function kd(e){return e>>>=0,e===0?32:31-(yd(e)/wd|0)|0}var Yr=64,Xr=4194304;function rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,s=t&268435455;if(s!==0){var c=s&~o;c!==0?r=rr(c):(l&=s,l!==0&&(r=rr(l)))}else s=t&~o,s!==0?r=rr(s):l!==0&&(r=rr(l));if(r===0)return 0;if(n!==0&&n!==r&&(n&o)===0&&(o=r&-r,l=n&-n,o>=l||o===16&&(l&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-pn(n),o=1<<t,r|=e[t],n&=~o;return r}function Sd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-pn(l),c=1<<s,d=o[s];d===-1?((c&t)===0||(c&r)!==0)&&(o[s]=Sd(c,n)):d<=n&&(e.expiredLanes|=c),l&=~c}}function Cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function na(){var e=Yr;return Yr<<=1,(Yr&4194240)===0&&(Yr=64),e}function El(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function or(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-pn(n),e[n]=t}function _d(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-pn(t),l=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~l}}function Tl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-pn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var re=0;function ta(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ra,Pl,oa,la,ia,Il=!1,qr=[],bn=null,Un=null,jn=null,lr=new Map,ir=new Map,Fn=[],Cd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sa(e,n){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":lr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ir.delete(n.pointerId)}}function sr(e,n,t,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},n!==null&&(n=Sr(n),n!==null&&Pl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Ed(e,n,t,r,o){switch(n){case"focusin":return bn=sr(bn,e,n,t,r,o),!0;case"dragenter":return Un=sr(Un,e,n,t,r,o),!0;case"mouseover":return jn=sr(jn,e,n,t,r,o),!0;case"pointerover":var l=o.pointerId;return lr.set(l,sr(lr.get(l)||null,e,n,t,r,o)),!0;case"gotpointercapture":return l=o.pointerId,ir.set(l,sr(ir.get(l)||null,e,n,t,r,o)),!0}return!1}function aa(e){var n=st(e.target);if(n!==null){var t=it(n);if(t!==null){if(n=t.tag,n===13){if(n=Ks(t),n!==null){e.blockedOn=n,ia(e.priority,function(){oa(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Al(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);vl=r,t.target.dispatchEvent(r),vl=null}else return n=Sr(t),n!==null&&Pl(n),e.blockedOn=t,!1;n.shift()}return!0}function ua(e,n,t){Zr(e)&&t.delete(n)}function Td(){Il=!1,bn!==null&&Zr(bn)&&(bn=null),Un!==null&&Zr(Un)&&(Un=null),jn!==null&&Zr(jn)&&(jn=null),lr.forEach(ua),ir.forEach(ua)}function ar(e,n){e.blockedOn===n&&(e.blockedOn=null,Il||(Il=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Td)))}function ur(e){function n(o){return ar(o,e)}if(0<qr.length){ar(qr[0],e);for(var t=1;t<qr.length;t++){var r=qr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(bn!==null&&ar(bn,e),Un!==null&&ar(Un,e),jn!==null&&ar(jn,e),lr.forEach(n),ir.forEach(n),t=0;t<Fn.length;t++)r=Fn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Fn.length&&(t=Fn[0],t.blockedOn===null);)aa(t),t.blockedOn===null&&Fn.shift()}var Ct=ae.ReactCurrentBatchConfig,eo=!0;function Pd(e,n,t,r){var o=re,l=Ct.transition;Ct.transition=null;try{re=1,Dl(e,n,t,r)}finally{re=o,Ct.transition=l}}function Id(e,n,t,r){var o=re,l=Ct.transition;Ct.transition=null;try{re=4,Dl(e,n,t,r)}finally{re=o,Ct.transition=l}}function Dl(e,n,t,r){if(eo){var o=Al(e,n,t,r);if(o===null)Kl(e,n,r,no,t),sa(e,r);else if(Ed(o,e,n,t,r))r.stopPropagation();else if(sa(e,r),n&4&&-1<Cd.indexOf(e)){for(;o!==null;){var l=Sr(o);if(l!==null&&ra(l),l=Al(e,n,t,r),l===null&&Kl(e,n,r,no,t),l===o)break;o=l}o!==null&&r.stopPropagation()}else Kl(e,n,r,null,t)}}var no=null;function Al(e,n,t,r){if(no=null,e=yl(r),e=st(e),e!==null)if(n=it(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ks(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return no=e,null}function ca(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hd()){case _l:return 1;case Zs:return 4;case Kr:case gd:return 16;case ea:return 536870912;default:return 16}default:return 16}}var Vn=null,Nl=null,to=null;function da(){if(to)return to;var e,n=Nl,t=n.length,r,o="value"in Vn?Vn.value:Vn.textContent,l=o.length;for(e=0;e<t&&n[e]===o[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===o[l-r];r++);return to=o.slice(e,1<r?1-r:void 0)}function ro(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function oo(){return!0}function fa(){return!1}function qe(e){function n(t,r,o,l,s){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?oo:fa,this.isPropagationStopped=fa,this}return M(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),n}var Et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=qe(Et),cr=M({},Et,{view:0,detail:0}),Dd=qe(cr),Ll,Rl,dr,lo=M({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(Ll=e.screenX-dr.screenX,Rl=e.screenY-dr.screenY):Rl=Ll=0,dr=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),pa=qe(lo),Ad=M({},lo,{dataTransfer:0}),Nd=qe(Ad),zd=M({},cr,{relatedTarget:0}),Ml=qe(zd),Ld=M({},Et,{animationName:0,elapsedTime:0,pseudoElement:0}),Rd=qe(Ld),Md=M({},Et,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Od=qe(Md),bd=M({},Et,{data:0}),ma=qe(bd),Ud={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fd[e])?!!n[e]:!1}function Ol(){return Vd}var Wd=M({},cr,{key:function(e){if(e.key){var n=Ud[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ol,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hd=qe(Wd),$d=M({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ha=qe($d),Qd=M({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ol}),Bd=qe(Qd),Kd=M({},Et,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gd=qe(Kd),Yd=M({},lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xd=qe(Yd),Jd=[9,13,27,32],bl=_&&"CompositionEvent"in window,fr=null;_&&"documentMode"in document&&(fr=document.documentMode);var qd=_&&"TextEvent"in window&&!fr,ga=_&&(!bl||fr&&8<fr&&11>=fr),va=" ",ya=!1;function wa(e,n){switch(e){case"keyup":return Jd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ka(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tt=!1;function Zd(e,n){switch(e){case"compositionend":return ka(n);case"keypress":return n.which!==32?null:(ya=!0,va);case"textInput":return e=n.data,e===va&&ya?null:e;default:return null}}function ef(e,n){if(Tt)return e==="compositionend"||!bl&&wa(e,n)?(e=da(),to=Nl=Vn=null,Tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ga&&n.locale!=="ko"?null:n.data;default:return null}}var nf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!nf[e.type]:n==="textarea"}function xa(e,n,t,r){Ws(r),n=co(n,"onChange"),0<n.length&&(t=new zl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var pr=null,mr=null;function tf(e){Fa(e,0)}function io(e){var n=Nt(e);if(As(n))return e}function rf(e,n){if(e==="change")return n}var _a=!1;if(_){var Ul;if(_){var jl="oninput"in document;if(!jl){var Ca=document.createElement("div");Ca.setAttribute("oninput","return;"),jl=typeof Ca.oninput=="function"}Ul=jl}else Ul=!1;_a=Ul&&(!document.documentMode||9<document.documentMode)}function Ea(){pr&&(pr.detachEvent("onpropertychange",Ta),mr=pr=null)}function Ta(e){if(e.propertyName==="value"&&io(mr)){var n=[];xa(n,mr,e,yl(e)),Bs(tf,n)}}function of(e,n,t){e==="focusin"?(Ea(),pr=n,mr=t,pr.attachEvent("onpropertychange",Ta)):e==="focusout"&&Ea()}function lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return io(mr)}function sf(e,n){if(e==="click")return io(n)}function af(e,n){if(e==="input"||e==="change")return io(n)}function uf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var mn=typeof Object.is=="function"?Object.is:uf;function hr(e,n){if(mn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!x.call(n,o)||!mn(e[o],n[o]))return!1}return!0}function Pa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ia(e,n){var t=Pa(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Pa(t)}}function Da(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Da(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Aa(){for(var e=window,n=Hr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Hr(e.document)}return n}function Fl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function cf(e){var n=Aa(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Da(t.ownerDocument.documentElement,t)){if(r!==null&&Fl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ia(t,l);var s=Ia(t,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var df=_&&"documentMode"in document&&11>=document.documentMode,Pt=null,Vl=null,gr=null,Wl=!1;function Na(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Wl||Pt==null||Pt!==Hr(r)||(r=Pt,"selectionStart"in r&&Fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&hr(gr,r)||(gr=r,r=co(Vl,"onSelect"),0<r.length&&(n=new zl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Pt)))}function so(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var It={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Hl={},za={};_&&(za=document.createElement("div").style,"AnimationEvent"in window||(delete It.animationend.animation,delete It.animationiteration.animation,delete It.animationstart.animation),"TransitionEvent"in window||delete It.transitionend.transition);function ao(e){if(Hl[e])return Hl[e];if(!It[e])return e;var n=It[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in za)return Hl[e]=n[t];return e}var La=ao("animationend"),Ra=ao("animationiteration"),Ma=ao("animationstart"),Oa=ao("transitionend"),ba=new Map,Ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(e,n){ba.set(e,n),w(n,[e])}for(var $l=0;$l<Ua.length;$l++){var Ql=Ua[$l],ff=Ql.toLowerCase(),pf=Ql[0].toUpperCase()+Ql.slice(1);Wn(ff,"on"+pf)}Wn(La,"onAnimationEnd"),Wn(Ra,"onAnimationIteration"),Wn(Ma,"onAnimationStart"),Wn("dblclick","onDoubleClick"),Wn("focusin","onFocus"),Wn("focusout","onBlur"),Wn(Oa,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function ja(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,dd(r,n,void 0,e),e.currentTarget=null}function Fa(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var s=r.length-1;0<=s;s--){var c=r[s],d=c.instance,y=c.currentTarget;if(c=c.listener,d!==l&&o.isPropagationStopped())break e;ja(o,c,y),l=d}else for(s=0;s<r.length;s++){if(c=r[s],d=c.instance,y=c.currentTarget,c=c.listener,d!==l&&o.isPropagationStopped())break e;ja(o,c,y),l=d}}}if(Br)throw e=xl,Br=!1,xl=null,e}function ue(e,n){var t=n[Zl];t===void 0&&(t=n[Zl]=new Set);var r=e+"__bubble";t.has(r)||(Va(n,e,2,!1),t.add(r))}function Bl(e,n,t){var r=0;n&&(r|=4),Va(t,e,r,n)}var uo="_reactListening"+Math.random().toString(36).slice(2);function yr(e){if(!e[uo]){e[uo]=!0,h.forEach(function(t){t!=="selectionchange"&&(mf.has(t)||Bl(t,!1,e),Bl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[uo]||(n[uo]=!0,Bl("selectionchange",!1,n))}}function Va(e,n,t,r){switch(ca(n)){case 1:var o=Pd;break;case 4:o=Id;break;default:o=Dl}t=o.bind(null,n,t,e),o=void 0,!Sl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Kl(e,n,t,r,o){var l=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;s=s.return}for(;c!==null;){if(s=st(c),s===null)return;if(d=s.tag,d===5||d===6){r=l=s;continue e}c=c.parentNode}}r=r.return}Bs(function(){var y=l,T=yl(t),I=[];e:{var C=ba.get(e);if(C!==void 0){var L=zl,O=e;switch(e){case"keypress":if(ro(t)===0)break e;case"keydown":case"keyup":L=Hd;break;case"focusin":O="focus",L=Ml;break;case"focusout":O="blur",L=Ml;break;case"beforeblur":case"afterblur":L=Ml;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Nd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Bd;break;case La:case Ra:case Ma:L=Rd;break;case Oa:L=Gd;break;case"scroll":L=Dd;break;case"wheel":L=Xd;break;case"copy":case"cut":case"paste":L=Od;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=ha}var b=(n&4)!==0,xe=!b&&e==="scroll",g=b?C!==null?C+"Capture":null:C;b=[];for(var f=y,v;f!==null;){v=f;var N=v.stateNode;if(v.tag===5&&N!==null&&(v=N,g!==null&&(N=er(f,g),N!=null&&b.push(wr(f,N,v)))),xe)break;f=f.return}0<b.length&&(C=new L(C,O,null,t,T),I.push({event:C,listeners:b}))}}if((n&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",C&&t!==vl&&(O=t.relatedTarget||t.fromElement)&&(st(O)||O[Pn]))break e;if((L||C)&&(C=T.window===T?T:(C=T.ownerDocument)?C.defaultView||C.parentWindow:window,L?(O=t.relatedTarget||t.toElement,L=y,O=O?st(O):null,O!==null&&(xe=it(O),O!==xe||O.tag!==5&&O.tag!==6)&&(O=null)):(L=null,O=y),L!==O)){if(b=pa,N="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(b=ha,N="onPointerLeave",g="onPointerEnter",f="pointer"),xe=L==null?C:Nt(L),v=O==null?C:Nt(O),C=new b(N,f+"leave",L,t,T),C.target=xe,C.relatedTarget=v,N=null,st(T)===y&&(b=new b(g,f+"enter",O,t,T),b.target=v,b.relatedTarget=xe,N=b),xe=N,L&&O)n:{for(b=L,g=O,f=0,v=b;v;v=Dt(v))f++;for(v=0,N=g;N;N=Dt(N))v++;for(;0<f-v;)b=Dt(b),f--;for(;0<v-f;)g=Dt(g),v--;for(;f--;){if(b===g||g!==null&&b===g.alternate)break n;b=Dt(b),g=Dt(g)}b=null}else b=null;L!==null&&Wa(I,C,L,b,!1),O!==null&&xe!==null&&Wa(I,xe,O,b,!0)}}e:{if(C=y?Nt(y):window,L=C.nodeName&&C.nodeName.toLowerCase(),L==="select"||L==="input"&&C.type==="file")var U=rf;else if(Sa(C))if(_a)U=af;else{U=lf;var H=of}else(L=C.nodeName)&&L.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(U=sf);if(U&&(U=U(e,y))){xa(I,U,t,T);break e}H&&H(e,C,y),e==="focusout"&&(H=C._wrapperState)&&H.controlled&&C.type==="number"&&fl(C,"number",C.value)}switch(H=y?Nt(y):window,e){case"focusin":(Sa(H)||H.contentEditable==="true")&&(Pt=H,Vl=y,gr=null);break;case"focusout":gr=Vl=Pt=null;break;case"mousedown":Wl=!0;break;case"contextmenu":case"mouseup":case"dragend":Wl=!1,Na(I,t,T);break;case"selectionchange":if(df)break;case"keydown":case"keyup":Na(I,t,T)}var $;if(bl)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Tt?wa(e,t)&&(K="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(K="onCompositionStart");K&&(ga&&t.locale!=="ko"&&(Tt||K!=="onCompositionStart"?K==="onCompositionEnd"&&Tt&&($=da()):(Vn=T,Nl="value"in Vn?Vn.value:Vn.textContent,Tt=!0)),H=co(y,K),0<H.length&&(K=new ma(K,e,null,t,T),I.push({event:K,listeners:H}),$?K.data=$:($=ka(t),$!==null&&(K.data=$)))),($=qd?Zd(e,t):ef(e,t))&&(y=co(y,"onBeforeInput"),0<y.length&&(T=new ma("onBeforeInput","beforeinput",null,t,T),I.push({event:T,listeners:y}),T.data=$))}Fa(I,n)})}function wr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function co(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=er(e,t),l!=null&&r.unshift(wr(e,l,o)),l=er(e,n),l!=null&&r.push(wr(e,l,o))),e=e.return}return r}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wa(e,n,t,r,o){for(var l=n._reactName,s=[];t!==null&&t!==r;){var c=t,d=c.alternate,y=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&y!==null&&(c=y,o?(d=er(t,l),d!=null&&s.unshift(wr(t,d,c))):o||(d=er(t,l),d!=null&&s.push(wr(t,d,c)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var hf=/\r\n?/g,gf=/\u0000|\uFFFD/g;function Ha(e){return(typeof e=="string"?e:""+e).replace(hf,`
`).replace(gf,"")}function fo(e,n,t){if(n=Ha(n),Ha(e)!==n&&t)throw Error(a(425))}function po(){}var Gl=null,Yl=null;function Xl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jl=typeof setTimeout=="function"?setTimeout:void 0,vf=typeof clearTimeout=="function"?clearTimeout:void 0,$a=typeof Promise=="function"?Promise:void 0,yf=typeof queueMicrotask=="function"?queueMicrotask:typeof $a<"u"?function(e){return $a.resolve(null).then(e).catch(wf)}:Jl;function wf(e){setTimeout(function(){throw e})}function ql(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),ur(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);ur(n)}function Hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Qa(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var At=Math.random().toString(36).slice(2),xn="__reactFiber$"+At,kr="__reactProps$"+At,Pn="__reactContainer$"+At,Zl="__reactEvents$"+At,kf="__reactListeners$"+At,Sf="__reactHandles$"+At;function st(e){var n=e[xn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Pn]||t[xn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Qa(e);e!==null;){if(t=e[xn])return t;e=Qa(e)}return n}e=t,t=e.parentNode}return null}function Sr(e){return e=e[xn]||e[Pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function mo(e){return e[kr]||null}var ei=[],zt=-1;function $n(e){return{current:e}}function ce(e){0>zt||(e.current=ei[zt],ei[zt]=null,zt--)}function se(e,n){zt++,ei[zt]=e.current,e.current=n}var Qn={},be=$n(Qn),$e=$n(!1),at=Qn;function Lt(e,n){var t=e.type.contextTypes;if(!t)return Qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in t)o[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Qe(e){return e=e.childContextTypes,e!=null}function ho(){ce($e),ce(be)}function Ba(e,n,t){if(be.current!==Qn)throw Error(a(168));se(be,n),se($e,t)}function Ka(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(a(108,ie(e)||"Unknown",o));return M({},t,r)}function go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,at=be.current,se(be,e),se($e,$e.current),!0}function Ga(e,n,t){var r=e.stateNode;if(!r)throw Error(a(169));t?(e=Ka(e,n,at),r.__reactInternalMemoizedMergedChildContext=e,ce($e),ce(be),se(be,e)):ce($e),se($e,t)}var In=null,vo=!1,ni=!1;function Ya(e){In===null?In=[e]:In.push(e)}function xf(e){vo=!0,Ya(e)}function Bn(){if(!ni&&In!==null){ni=!0;var e=0,n=re;try{var t=In;for(re=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}In=null,vo=!1}catch(o){throw In!==null&&(In=In.slice(e+1)),Js(_l,Bn),o}finally{re=n,ni=!1}}return null}var Rt=[],Mt=0,yo=null,wo=0,on=[],ln=0,ut=null,Dn=1,An="";function ct(e,n){Rt[Mt++]=wo,Rt[Mt++]=yo,yo=e,wo=n}function Xa(e,n,t){on[ln++]=Dn,on[ln++]=An,on[ln++]=ut,ut=e;var r=Dn;e=An;var o=32-pn(r)-1;r&=~(1<<o),t+=1;var l=32-pn(n)+o;if(30<l){var s=o-o%5;l=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Dn=1<<32-pn(n)+o|t<<o|r,An=l+e}else Dn=1<<l|t<<o|r,An=e}function ti(e){e.return!==null&&(ct(e,1),Xa(e,1,0))}function ri(e){for(;e===yo;)yo=Rt[--Mt],Rt[Mt]=null,wo=Rt[--Mt],Rt[Mt]=null;for(;e===ut;)ut=on[--ln],on[ln]=null,An=on[--ln],on[ln]=null,Dn=on[--ln],on[ln]=null}var Ze=null,en=null,pe=!1,hn=null;function Ja(e,n){var t=cn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function qa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ze=e,en=Hn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ze=e,en=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ut!==null?{id:Dn,overflow:An}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=cn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ze=e,en=null,!0):!1;default:return!1}}function oi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function li(e){if(pe){var n=en;if(n){var t=n;if(!qa(e,n)){if(oi(e))throw Error(a(418));n=Hn(t.nextSibling);var r=Ze;n&&qa(e,n)?Ja(r,t):(e.flags=e.flags&-4097|2,pe=!1,Ze=e)}}else{if(oi(e))throw Error(a(418));e.flags=e.flags&-4097|2,pe=!1,Ze=e}}}function Za(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function ko(e){if(e!==Ze)return!1;if(!pe)return Za(e),pe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Xl(e.type,e.memoizedProps)),n&&(n=en)){if(oi(e))throw eu(),Error(a(418));for(;n;)Ja(e,n),n=Hn(n.nextSibling)}if(Za(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){en=Hn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}en=null}}else en=Ze?Hn(e.stateNode.nextSibling):null;return!0}function eu(){for(var e=en;e;)e=Hn(e.nextSibling)}function Ot(){en=Ze=null,pe=!1}function ii(e){hn===null?hn=[e]:hn.push(e)}var _f=ae.ReactCurrentBatchConfig;function xr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(a(309));var r=t.stateNode}if(!r)throw Error(a(147,e));var o=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(s){var c=o.refs;s===null?delete c[l]:c[l]=s},n._stringRef=l,n)}if(typeof e!="string")throw Error(a(284));if(!t._owner)throw Error(a(290,e))}return e}function So(e,n){throw e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function nu(e){var n=e._init;return n(e._payload)}function tu(e){function n(g,f){if(e){var v=g.deletions;v===null?(g.deletions=[f],g.flags|=16):v.push(f)}}function t(g,f){if(!e)return null;for(;f!==null;)n(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function o(g,f){return g=et(g,f),g.index=0,g.sibling=null,g}function l(g,f,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<f?(g.flags|=2,f):v):(g.flags|=2,f)):(g.flags|=1048576,f)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function c(g,f,v,N){return f===null||f.tag!==6?(f=Ji(v,g.mode,N),f.return=g,f):(f=o(f,v),f.return=g,f)}function d(g,f,v,N){var U=v.type;return U===Te?T(g,f,v.props.children,N,v.key):f!==null&&(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ye&&nu(U)===f.type)?(N=o(f,v.props),N.ref=xr(g,f,v),N.return=g,N):(N=Qo(v.type,v.key,v.props,null,g.mode,N),N.ref=xr(g,f,v),N.return=g,N)}function y(g,f,v,N){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=qi(v,g.mode,N),f.return=g,f):(f=o(f,v.children||[]),f.return=g,f)}function T(g,f,v,N,U){return f===null||f.tag!==7?(f=yt(v,g.mode,N,U),f.return=g,f):(f=o(f,v),f.return=g,f)}function I(g,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ji(""+f,g.mode,v),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ee:return v=Qo(f.type,f.key,f.props,null,g.mode,v),v.ref=xr(g,null,f),v.return=g,v;case ke:return f=qi(f,g.mode,v),f.return=g,f;case ye:var N=f._init;return I(g,N(f._payload),v)}if(Jt(f)||B(f))return f=yt(f,g.mode,v,null),f.return=g,f;So(g,f)}return null}function C(g,f,v,N){var U=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return U!==null?null:c(g,f,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ee:return v.key===U?d(g,f,v,N):null;case ke:return v.key===U?y(g,f,v,N):null;case ye:return U=v._init,C(g,f,U(v._payload),N)}if(Jt(v)||B(v))return U!==null?null:T(g,f,v,N,null);So(g,v)}return null}function L(g,f,v,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return g=g.get(v)||null,c(f,g,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ee:return g=g.get(N.key===null?v:N.key)||null,d(f,g,N,U);case ke:return g=g.get(N.key===null?v:N.key)||null,y(f,g,N,U);case ye:var H=N._init;return L(g,f,v,H(N._payload),U)}if(Jt(N)||B(N))return g=g.get(v)||null,T(f,g,N,U,null);So(f,N)}return null}function O(g,f,v,N){for(var U=null,H=null,$=f,K=f=0,Ne=null;$!==null&&K<v.length;K++){$.index>K?(Ne=$,$=null):Ne=$.sibling;var ne=C(g,$,v[K],N);if(ne===null){$===null&&($=Ne);break}e&&$&&ne.alternate===null&&n(g,$),f=l(ne,f,K),H===null?U=ne:H.sibling=ne,H=ne,$=Ne}if(K===v.length)return t(g,$),pe&&ct(g,K),U;if($===null){for(;K<v.length;K++)$=I(g,v[K],N),$!==null&&(f=l($,f,K),H===null?U=$:H.sibling=$,H=$);return pe&&ct(g,K),U}for($=r(g,$);K<v.length;K++)Ne=L($,g,K,v[K],N),Ne!==null&&(e&&Ne.alternate!==null&&$.delete(Ne.key===null?K:Ne.key),f=l(Ne,f,K),H===null?U=Ne:H.sibling=Ne,H=Ne);return e&&$.forEach(function(nt){return n(g,nt)}),pe&&ct(g,K),U}function b(g,f,v,N){var U=B(v);if(typeof U!="function")throw Error(a(150));if(v=U.call(v),v==null)throw Error(a(151));for(var H=U=null,$=f,K=f=0,Ne=null,ne=v.next();$!==null&&!ne.done;K++,ne=v.next()){$.index>K?(Ne=$,$=null):Ne=$.sibling;var nt=C(g,$,ne.value,N);if(nt===null){$===null&&($=Ne);break}e&&$&&nt.alternate===null&&n(g,$),f=l(nt,f,K),H===null?U=nt:H.sibling=nt,H=nt,$=Ne}if(ne.done)return t(g,$),pe&&ct(g,K),U;if($===null){for(;!ne.done;K++,ne=v.next())ne=I(g,ne.value,N),ne!==null&&(f=l(ne,f,K),H===null?U=ne:H.sibling=ne,H=ne);return pe&&ct(g,K),U}for($=r(g,$);!ne.done;K++,ne=v.next())ne=L($,g,K,ne.value,N),ne!==null&&(e&&ne.alternate!==null&&$.delete(ne.key===null?K:ne.key),f=l(ne,f,K),H===null?U=ne:H.sibling=ne,H=ne);return e&&$.forEach(function(tp){return n(g,tp)}),pe&&ct(g,K),U}function xe(g,f,v,N){if(typeof v=="object"&&v!==null&&v.type===Te&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ee:e:{for(var U=v.key,H=f;H!==null;){if(H.key===U){if(U=v.type,U===Te){if(H.tag===7){t(g,H.sibling),f=o(H,v.props.children),f.return=g,g=f;break e}}else if(H.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ye&&nu(U)===H.type){t(g,H.sibling),f=o(H,v.props),f.ref=xr(g,H,v),f.return=g,g=f;break e}t(g,H);break}else n(g,H);H=H.sibling}v.type===Te?(f=yt(v.props.children,g.mode,N,v.key),f.return=g,g=f):(N=Qo(v.type,v.key,v.props,null,g.mode,N),N.ref=xr(g,f,v),N.return=g,g=N)}return s(g);case ke:e:{for(H=v.key;f!==null;){if(f.key===H)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){t(g,f.sibling),f=o(f,v.children||[]),f.return=g,g=f;break e}else{t(g,f);break}else n(g,f);f=f.sibling}f=qi(v,g.mode,N),f.return=g,g=f}return s(g);case ye:return H=v._init,xe(g,f,H(v._payload),N)}if(Jt(v))return O(g,f,v,N);if(B(v))return b(g,f,v,N);So(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(t(g,f.sibling),f=o(f,v),f.return=g,g=f):(t(g,f),f=Ji(v,g.mode,N),f.return=g,g=f),s(g)):t(g,f)}return xe}var bt=tu(!0),ru=tu(!1),xo=$n(null),_o=null,Ut=null,si=null;function ai(){si=Ut=_o=null}function ui(e){var n=xo.current;ce(xo),e._currentValue=n}function ci(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function jt(e,n){_o=e,si=Ut=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Be=!0),e.firstContext=null)}function sn(e){var n=e._currentValue;if(si!==e)if(e={context:e,memoizedValue:n,next:null},Ut===null){if(_o===null)throw Error(a(308));Ut=e,_o.dependencies={lanes:0,firstContext:e}}else Ut=Ut.next=e;return n}var dt=null;function di(e){dt===null?dt=[e]:dt.push(e)}function ou(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,di(n)):(t.next=o.next,o.next=t),n.interleaved=t,Nn(e,r)}function Nn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Kn=!1;function fi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Gn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(q&2)!==0){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Nn(e,t)}return o=r.interleaved,o===null?(n.next=n,di(r)):(n.next=o.next,o.next=n),r.interleaved=n,Nn(e,t)}function Co(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Tl(e,t)}}function iu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?o=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?o=l=n:l=l.next=n}else o=l=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Eo(e,n,t,r){var o=e.updateQueue;Kn=!1;var l=o.firstBaseUpdate,s=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var d=c,y=d.next;d.next=null,s===null?l=y:s.next=y,s=d;var T=e.alternate;T!==null&&(T=T.updateQueue,c=T.lastBaseUpdate,c!==s&&(c===null?T.firstBaseUpdate=y:c.next=y,T.lastBaseUpdate=d))}if(l!==null){var I=o.baseState;s=0,T=y=d=null,c=l;do{var C=c.lane,L=c.eventTime;if((r&C)===C){T!==null&&(T=T.next={eventTime:L,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var O=e,b=c;switch(C=n,L=t,b.tag){case 1:if(O=b.payload,typeof O=="function"){I=O.call(L,I,C);break e}I=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=b.payload,C=typeof O=="function"?O.call(L,I,C):O,C==null)break e;I=M({},I,C);break e;case 2:Kn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,C=o.effects,C===null?o.effects=[c]:C.push(c))}else L={eventTime:L,lane:C,tag:c.tag,payload:c.payload,callback:c.callback,next:null},T===null?(y=T=L,d=I):T=T.next=L,s|=C;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;C=c,c=C.next,C.next=null,o.lastBaseUpdate=C,o.shared.pending=null}}while(!0);if(T===null&&(d=I),o.baseState=d,o.firstBaseUpdate=y,o.lastBaseUpdate=T,n=o.shared.interleaved,n!==null){o=n;do s|=o.lane,o=o.next;while(o!==n)}else l===null&&(o.shared.lanes=0);mt|=s,e.lanes=s,e.memoizedState=I}}function su(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(a(191,o));o.call(r)}}}var _r={},_n=$n(_r),Cr=$n(_r),Er=$n(_r);function ft(e){if(e===_r)throw Error(a(174));return e}function pi(e,n){switch(se(Er,n),se(Cr,e),se(_n,_r),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ml(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ml(n,e)}ce(_n),se(_n,n)}function Ft(){ce(_n),ce(Cr),ce(Er)}function au(e){ft(Er.current);var n=ft(_n.current),t=ml(n,e.type);n!==t&&(se(Cr,e),se(_n,t))}function mi(e){Cr.current===e&&(ce(_n),ce(Cr))}var ge=$n(0);function To(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var hi=[];function gi(){for(var e=0;e<hi.length;e++)hi[e]._workInProgressVersionPrimary=null;hi.length=0}var Po=ae.ReactCurrentDispatcher,vi=ae.ReactCurrentBatchConfig,pt=0,ve=null,Pe=null,De=null,Io=!1,Tr=!1,Pr=0,Cf=0;function Ue(){throw Error(a(321))}function yi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!mn(e[t],n[t]))return!1;return!0}function wi(e,n,t,r,o,l){if(pt=l,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Po.current=e===null||e.memoizedState===null?If:Df,e=t(r,o),Tr){l=0;do{if(Tr=!1,Pr=0,25<=l)throw Error(a(301));l+=1,De=Pe=null,n.updateQueue=null,Po.current=Af,e=t(r,o)}while(Tr)}if(Po.current=No,n=Pe!==null&&Pe.next!==null,pt=0,De=Pe=ve=null,Io=!1,n)throw Error(a(300));return e}function ki(){var e=Pr!==0;return Pr=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ve.memoizedState=De=e:De=De.next=e,De}function an(){if(Pe===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=De===null?ve.memoizedState:De.next;if(n!==null)De=n,Pe=e;else{if(e===null)throw Error(a(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},De===null?ve.memoizedState=De=e:De=De.next=e}return De}function Ir(e,n){return typeof n=="function"?n(e):n}function Si(e){var n=an(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=Pe,o=r.baseQueue,l=t.pending;if(l!==null){if(o!==null){var s=o.next;o.next=l.next,l.next=s}r.baseQueue=o=l,t.pending=null}if(o!==null){l=o.next,r=r.baseState;var c=s=null,d=null,y=l;do{var T=y.lane;if((pt&T)===T)d!==null&&(d=d.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),r=y.hasEagerState?y.eagerState:e(r,y.action);else{var I={lane:T,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};d===null?(c=d=I,s=r):d=d.next=I,ve.lanes|=T,mt|=T}y=y.next}while(y!==null&&y!==l);d===null?s=r:d.next=c,mn(r,n.memoizedState)||(Be=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=d,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do l=o.lane,ve.lanes|=l,mt|=l,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function xi(e){var n=an(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,l=n.memoizedState;if(o!==null){t.pending=null;var s=o=o.next;do l=e(l,s.action),s=s.next;while(s!==o);mn(l,n.memoizedState)||(Be=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function uu(){}function cu(e,n){var t=ve,r=an(),o=n(),l=!mn(r.memoizedState,o);if(l&&(r.memoizedState=o,Be=!0),r=r.queue,_i(pu.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||De!==null&&De.memoizedState.tag&1){if(t.flags|=2048,Dr(9,fu.bind(null,t,r,o,n),void 0,null),Ae===null)throw Error(a(349));(pt&30)!==0||du(t,n,o)}return o}function du(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function fu(e,n,t,r){n.value=t,n.getSnapshot=r,mu(n)&&hu(e)}function pu(e,n,t){return t(function(){mu(n)&&hu(e)})}function mu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!mn(e,t)}catch{return!0}}function hu(e){var n=Nn(e,1);n!==null&&wn(n,e,1,-1)}function gu(e){var n=Cn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},n.queue=e,e=e.dispatch=Pf.bind(null,ve,e),[n.memoizedState,e]}function Dr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function vu(){return an().memoizedState}function Do(e,n,t,r){var o=Cn();ve.flags|=e,o.memoizedState=Dr(1|n,t,void 0,r===void 0?null:r)}function Ao(e,n,t,r){var o=an();r=r===void 0?null:r;var l=void 0;if(Pe!==null){var s=Pe.memoizedState;if(l=s.destroy,r!==null&&yi(r,s.deps)){o.memoizedState=Dr(n,t,l,r);return}}ve.flags|=e,o.memoizedState=Dr(1|n,t,l,r)}function yu(e,n){return Do(8390656,8,e,n)}function _i(e,n){return Ao(2048,8,e,n)}function wu(e,n){return Ao(4,2,e,n)}function ku(e,n){return Ao(4,4,e,n)}function Su(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xu(e,n,t){return t=t!=null?t.concat([e]):null,Ao(4,4,Su.bind(null,n,e),t)}function Ci(){}function _u(e,n){var t=an();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Cu(e,n){var t=an();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Eu(e,n,t){return(pt&21)===0?(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=t):(mn(t,n)||(t=na(),ve.lanes|=t,mt|=t,e.baseState=!0),n)}function Ef(e,n){var t=re;re=t!==0&&4>t?t:4,e(!0);var r=vi.transition;vi.transition={};try{e(!1),n()}finally{re=t,vi.transition=r}}function Tu(){return an().memoizedState}function Tf(e,n,t){var r=qn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Pu(e))Iu(n,t);else if(t=ou(e,n,t,r),t!==null){var o=He();wn(t,e,r,o),Du(t,n,r)}}function Pf(e,n,t){var r=qn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Pu(e))Iu(n,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var s=n.lastRenderedState,c=l(s,t);if(o.hasEagerState=!0,o.eagerState=c,mn(c,s)){var d=n.interleaved;d===null?(o.next=o,di(n)):(o.next=d.next,d.next=o),n.interleaved=o;return}}catch{}finally{}t=ou(e,n,o,r),t!==null&&(o=He(),wn(t,e,r,o),Du(t,n,r))}}function Pu(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function Iu(e,n){Tr=Io=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Du(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Tl(e,t)}}var No={readContext:sn,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},If={readContext:sn,useCallback:function(e,n){return Cn().memoizedState=[e,n===void 0?null:n],e},useContext:sn,useEffect:yu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Do(4194308,4,Su.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Do(4194308,4,e,n)},useInsertionEffect:function(e,n){return Do(4,2,e,n)},useMemo:function(e,n){var t=Cn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Cn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Tf.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var n=Cn();return e={current:e},n.memoizedState=e},useState:gu,useDebugValue:Ci,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=gu(!1),n=e[0];return e=Ef.bind(null,e[1]),Cn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ve,o=Cn();if(pe){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),Ae===null)throw Error(a(349));(pt&30)!==0||du(r,n,t)}o.memoizedState=t;var l={value:t,getSnapshot:n};return o.queue=l,yu(pu.bind(null,r,l,e),[e]),r.flags|=2048,Dr(9,fu.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Cn(),n=Ae.identifierPrefix;if(pe){var t=An,r=Dn;t=(r&~(1<<32-pn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Pr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Cf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Df={readContext:sn,useCallback:_u,useContext:sn,useEffect:_i,useImperativeHandle:xu,useInsertionEffect:wu,useLayoutEffect:ku,useMemo:Cu,useReducer:Si,useRef:vu,useState:function(){return Si(Ir)},useDebugValue:Ci,useDeferredValue:function(e){var n=an();return Eu(n,Pe.memoizedState,e)},useTransition:function(){var e=Si(Ir)[0],n=an().memoizedState;return[e,n]},useMutableSource:uu,useSyncExternalStore:cu,useId:Tu,unstable_isNewReconciler:!1},Af={readContext:sn,useCallback:_u,useContext:sn,useEffect:_i,useImperativeHandle:xu,useInsertionEffect:wu,useLayoutEffect:ku,useMemo:Cu,useReducer:xi,useRef:vu,useState:function(){return xi(Ir)},useDebugValue:Ci,useDeferredValue:function(e){var n=an();return Pe===null?n.memoizedState=e:Eu(n,Pe.memoizedState,e)},useTransition:function(){var e=xi(Ir)[0],n=an().memoizedState;return[e,n]},useMutableSource:uu,useSyncExternalStore:cu,useId:Tu,unstable_isNewReconciler:!1};function gn(e,n){if(e&&e.defaultProps){n=M({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ei(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:M({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var zo={isMounted:function(e){return(e=e._reactInternals)?it(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=He(),o=qn(e),l=zn(r,o);l.payload=n,t!=null&&(l.callback=t),n=Gn(e,l,o),n!==null&&(wn(n,e,o,r),Co(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=He(),o=qn(e),l=zn(r,o);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Gn(e,l,o),n!==null&&(wn(n,e,o,r),Co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=He(),r=qn(e),o=zn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Gn(e,o,r),n!==null&&(wn(n,e,r,t),Co(n,e,r))}};function Au(e,n,t,r,o,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):n.prototype&&n.prototype.isPureReactComponent?!hr(t,r)||!hr(o,l):!0}function Nu(e,n,t){var r=!1,o=Qn,l=n.contextType;return typeof l=="object"&&l!==null?l=sn(l):(o=Qe(n)?at:be.current,r=n.contextTypes,l=(r=r!=null)?Lt(e,o):Qn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=zo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),n}function zu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&zo.enqueueReplaceState(n,n.state,null)}function Ti(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},fi(e);var l=n.contextType;typeof l=="object"&&l!==null?o.context=sn(l):(l=Qe(n)?at:be.current,o.context=Lt(e,l)),o.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Ei(e,n,l,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&zo.enqueueReplaceState(o,o.state,null),Eo(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Vt(e,n){try{var t="",r=n;do t+=Z(r),r=r.return;while(r);var o=t}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:o,digest:null}}function Pi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ii(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Nf=typeof WeakMap=="function"?WeakMap:Map;function Lu(e,n,t){t=zn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){jo||(jo=!0,Hi=r),Ii(e,n)},t}function Ru(e,n,t){t=zn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Ii(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Ii(e,n),typeof r!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function Mu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Nf;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Qf.bind(null,e,n,t),n.then(e,e))}function Ou(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function bu(e,n,t,r,o){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=zn(-1,1),n.tag=2,Gn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var zf=ae.ReactCurrentOwner,Be=!1;function We(e,n,t,r){n.child=e===null?ru(n,null,t,r):bt(n,e.child,t,r)}function Uu(e,n,t,r,o){t=t.render;var l=n.ref;return jt(n,o),r=wi(e,n,t,r,l,o),t=ki(),e!==null&&!Be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Ln(e,n,o)):(pe&&t&&ti(n),n.flags|=1,We(e,n,r,o),n.child)}function ju(e,n,t,r,o){if(e===null){var l=t.type;return typeof l=="function"&&!Xi(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Fu(e,n,l,r,o)):(e=Qo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,(e.lanes&o)===0){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:hr,t(s,r)&&e.ref===n.ref)return Ln(e,n,o)}return n.flags|=1,e=et(l,r),e.ref=n.ref,e.return=n,n.child=e}function Fu(e,n,t,r,o){if(e!==null){var l=e.memoizedProps;if(hr(l,r)&&e.ref===n.ref)if(Be=!1,n.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Be=!0);else return n.lanes=e.lanes,Ln(e,n,o)}return Di(e,n,t,r,o)}function Vu(e,n,t){var r=n.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Ht,nn),nn|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,se(Ht,nn),nn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,se(Ht,nn),nn|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,se(Ht,nn),nn|=r;return We(e,n,o,t),n.child}function Wu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Di(e,n,t,r,o){var l=Qe(t)?at:be.current;return l=Lt(n,l),jt(n,o),t=wi(e,n,t,r,l,o),r=ki(),e!==null&&!Be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Ln(e,n,o)):(pe&&r&&ti(n),n.flags|=1,We(e,n,t,o),n.child)}function Hu(e,n,t,r,o){if(Qe(t)){var l=!0;go(n)}else l=!1;if(jt(n,o),n.stateNode===null)Ro(e,n),Nu(n,t,r),Ti(n,t,r,o),r=!0;else if(e===null){var s=n.stateNode,c=n.memoizedProps;s.props=c;var d=s.context,y=t.contextType;typeof y=="object"&&y!==null?y=sn(y):(y=Qe(t)?at:be.current,y=Lt(n,y));var T=t.getDerivedStateFromProps,I=typeof T=="function"||typeof s.getSnapshotBeforeUpdate=="function";I||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==r||d!==y)&&zu(n,s,r,y),Kn=!1;var C=n.memoizedState;s.state=C,Eo(n,r,s,o),d=n.memoizedState,c!==r||C!==d||$e.current||Kn?(typeof T=="function"&&(Ei(n,t,T,r),d=n.memoizedState),(c=Kn||Au(n,t,c,r,C,d,y))?(I||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=d),s.props=r,s.state=d,s.context=y,r=c):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,lu(e,n),c=n.memoizedProps,y=n.type===n.elementType?c:gn(n.type,c),s.props=y,I=n.pendingProps,C=s.context,d=t.contextType,typeof d=="object"&&d!==null?d=sn(d):(d=Qe(t)?at:be.current,d=Lt(n,d));var L=t.getDerivedStateFromProps;(T=typeof L=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==I||C!==d)&&zu(n,s,r,d),Kn=!1,C=n.memoizedState,s.state=C,Eo(n,r,s,o);var O=n.memoizedState;c!==I||C!==O||$e.current||Kn?(typeof L=="function"&&(Ei(n,t,L,r),O=n.memoizedState),(y=Kn||Au(n,t,y,r,C,O,d)||!1)?(T||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,O,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,O,d)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=O),s.props=r,s.state=O,s.context=d,r=y):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),r=!1)}return Ai(e,n,t,r,l,o)}function Ai(e,n,t,r,o,l){Wu(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return o&&Ga(n,t,!1),Ln(e,n,l);r=n.stateNode,zf.current=n;var c=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=bt(n,e.child,null,l),n.child=bt(n,null,c,l)):We(e,n,c,l),n.memoizedState=r.state,o&&Ga(n,t,!0),n.child}function $u(e){var n=e.stateNode;n.pendingContext?Ba(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ba(e,n.context,!1),pi(e,n.containerInfo)}function Qu(e,n,t,r,o){return Ot(),ii(o),n.flags|=256,We(e,n,t,r),n.child}var Ni={dehydrated:null,treeContext:null,retryLane:0};function zi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bu(e,n,t){var r=n.pendingProps,o=ge.current,l=!1,s=(n.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),se(ge,o&1),e===null)return li(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(s=r.children,e=r.fallback,l?(r=n.mode,l=n.child,s={mode:"hidden",children:s},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Bo(s,r,0,null),e=yt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=zi(t),n.memoizedState=Ni,e):Li(n,s));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return Lf(e,n,s,r,c,o,t);if(l){l=r.fallback,s=n.mode,o=e.child,c=o.sibling;var d={mode:"hidden",children:r.children};return(s&1)===0&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=d,n.deletions=null):(r=et(o,d),r.subtreeFlags=o.subtreeFlags&14680064),c!==null?l=et(c,l):(l=yt(l,s,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,s=e.child.memoizedState,s=s===null?zi(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~t,n.memoizedState=Ni,r}return l=e.child,e=l.sibling,r=et(l,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Li(e,n){return n=Bo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Lo(e,n,t,r){return r!==null&&ii(r),bt(n,e.child,null,t),e=Li(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Lf(e,n,t,r,o,l,s){if(t)return n.flags&256?(n.flags&=-257,r=Pi(Error(a(422))),Lo(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,o=n.mode,r=Bo({mode:"visible",children:r.children},o,0,null),l=yt(l,o,s,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,(n.mode&1)!==0&&bt(n,e.child,null,s),n.child.memoizedState=zi(s),n.memoizedState=Ni,l);if((n.mode&1)===0)return Lo(e,n,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;return r=c,l=Error(a(419)),r=Pi(l,r,void 0),Lo(e,n,s,r)}if(c=(s&e.childLanes)!==0,Be||c){if(r=Ae,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|s))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Nn(e,o),wn(r,e,o,-1))}return Yi(),r=Pi(Error(a(421))),Lo(e,n,s,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Bf.bind(null,e),o._reactRetry=n,null):(e=l.treeContext,en=Hn(o.nextSibling),Ze=n,pe=!0,hn=null,e!==null&&(on[ln++]=Dn,on[ln++]=An,on[ln++]=ut,Dn=e.id,An=e.overflow,ut=n),n=Li(n,r.children),n.flags|=4096,n)}function Ku(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ci(e.return,n,t)}function Ri(e,n,t,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=o)}function Gu(e,n,t){var r=n.pendingProps,o=r.revealOrder,l=r.tail;if(We(e,n,r.children,t),r=ge.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ku(e,t,n);else if(e.tag===19)Ku(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(ge,r),(n.mode&1)===0)n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&To(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Ri(n,!1,o,t,l);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&To(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Ri(n,!0,t,null,l);break;case"together":Ri(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ro(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ln(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),mt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=et(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=et(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Rf(e,n,t){switch(n.tag){case 3:$u(n),Ot();break;case 5:au(n);break;case 1:Qe(n.type)&&go(n);break;case 4:pi(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;se(xo,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(se(ge,ge.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?Bu(e,n,t):(se(ge,ge.current&1),e=Ln(e,n,t),e!==null?e.sibling:null);se(ge,ge.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return Gu(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),se(ge,ge.current),r)break;return null;case 22:case 23:return n.lanes=0,Vu(e,n,t)}return Ln(e,n,t)}var Yu,Mi,Xu,Ju;Yu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Mi=function(){},Xu=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,ft(_n.current);var l=null;switch(t){case"input":o=cl(e,o),r=cl(e,r),l=[];break;case"select":o=M({},o,{value:void 0}),r=M({},r,{value:void 0}),l=[];break;case"textarea":o=pl(e,o),r=pl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=po)}hl(t,r);var s;t=null;for(y in o)if(!r.hasOwnProperty(y)&&o.hasOwnProperty(y)&&o[y]!=null)if(y==="style"){var c=o[y];for(s in c)c.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(p.hasOwnProperty(y)?l||(l=[]):(l=l||[]).push(y,null));for(y in r){var d=r[y];if(c=o!=null?o[y]:void 0,r.hasOwnProperty(y)&&d!==c&&(d!=null||c!=null))if(y==="style")if(c){for(s in c)!c.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in d)d.hasOwnProperty(s)&&c[s]!==d[s]&&(t||(t={}),t[s]=d[s])}else t||(l||(l=[]),l.push(y,t)),t=d;else y==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(l=l||[]).push(y,d)):y==="children"?typeof d!="string"&&typeof d!="number"||(l=l||[]).push(y,""+d):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(p.hasOwnProperty(y)?(d!=null&&y==="onScroll"&&ue("scroll",e),l||c===d||(l=[])):(l=l||[]).push(y,d))}t&&(l=l||[]).push("style",t);var y=l;(n.updateQueue=y)&&(n.flags|=4)}},Ju=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ar(e,n){if(!pe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Mf(e,n,t){var r=n.pendingProps;switch(ri(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return Qe(n.type)&&ho(),je(n),null;case 3:return r=n.stateNode,Ft(),ce($e),ce(be),gi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ko(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hn!==null&&(Bi(hn),hn=null))),Mi(e,n),je(n),null;case 5:mi(n);var o=ft(Er.current);if(t=n.type,e!==null&&n.stateNode!=null)Xu(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(a(166));return je(n),null}if(e=ft(_n.current),ko(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[xn]=n,r[kr]=l,e=(n.mode&1)!==0,t){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(o=0;o<vr.length;o++)ue(vr[o],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Ns(r,l),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ue("invalid",r);break;case"textarea":Rs(r,l),ue("invalid",r)}hl(t,l),o=null;for(var s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="children"?typeof c=="string"?r.textContent!==c&&(l.suppressHydrationWarning!==!0&&fo(r.textContent,c,e),o=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(l.suppressHydrationWarning!==!0&&fo(r.textContent,c,e),o=["children",""+c]):p.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&ue("scroll",r)}switch(t){case"input":Wr(r),Ls(r,l,!0);break;case"textarea":Wr(r),Os(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=po)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[xn]=n,e[kr]=r,Yu(e,n,!1,!1),n.stateNode=e;e:{switch(s=gl(t,r),t){case"dialog":ue("cancel",e),ue("close",e),o=r;break;case"iframe":case"object":case"embed":ue("load",e),o=r;break;case"video":case"audio":for(o=0;o<vr.length;o++)ue(vr[o],e);o=r;break;case"source":ue("error",e),o=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),o=r;break;case"details":ue("toggle",e),o=r;break;case"input":Ns(e,r),o=cl(e,r),ue("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=M({},r,{value:void 0}),ue("invalid",e);break;case"textarea":Rs(e,r),o=pl(e,r),ue("invalid",e);break;default:o=r}hl(t,o),c=o;for(l in c)if(c.hasOwnProperty(l)){var d=c[l];l==="style"?Fs(e,d):l==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Us(e,d)):l==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&qt(e,d):typeof d=="number"&&qt(e,""+d):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(p.hasOwnProperty(l)?d!=null&&l==="onScroll"&&ue("scroll",e):d!=null&&W(e,l,d,s))}switch(t){case"input":Wr(e),Ls(e,r,!1);break;case"textarea":Wr(e),Os(e);break;case"option":r.value!=null&&e.setAttribute("value",""+te(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?St(e,!!r.multiple,l,!1):r.defaultValue!=null&&St(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=po)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return je(n),null;case 6:if(e&&n.stateNode!=null)Ju(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(a(166));if(t=ft(Er.current),ft(_n.current),ko(n)){if(r=n.stateNode,t=n.memoizedProps,r[xn]=n,(l=r.nodeValue!==t)&&(e=Ze,e!==null))switch(e.tag){case 3:fo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fo(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[xn]=n,n.stateNode=r}return je(n),null;case 13:if(ce(ge),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&en!==null&&(n.mode&1)!==0&&(n.flags&128)===0)eu(),Ot(),n.flags|=98560,l=!1;else if(l=ko(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(a(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(a(317));l[xn]=n}else Ot(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),l=!1}else hn!==null&&(Bi(hn),hn=null),l=!0;if(!l)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ge.current&1)!==0?Ie===0&&(Ie=3):Yi())),n.updateQueue!==null&&(n.flags|=4),je(n),null);case 4:return Ft(),Mi(e,n),e===null&&yr(n.stateNode.containerInfo),je(n),null;case 10:return ui(n.type._context),je(n),null;case 17:return Qe(n.type)&&ho(),je(n),null;case 19:if(ce(ge),l=n.memoizedState,l===null)return je(n),null;if(r=(n.flags&128)!==0,s=l.rendering,s===null)if(r)Ar(l,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=To(e),s!==null){for(n.flags|=128,Ar(l,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return se(ge,ge.current&1|2),n.child}e=e.sibling}l.tail!==null&&Se()>$t&&(n.flags|=128,r=!0,Ar(l,!1),n.lanes=4194304)}else{if(!r)if(e=To(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ar(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!pe)return je(n),null}else 2*Se()-l.renderingStartTime>$t&&t!==1073741824&&(n.flags|=128,r=!0,Ar(l,!1),n.lanes=4194304);l.isBackwards?(s.sibling=n.child,n.child=s):(t=l.last,t!==null?t.sibling=s:n.child=s,l.last=s)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Se(),n.sibling=null,t=ge.current,se(ge,r?t&1|2:t&1),n):(je(n),null);case 22:case 23:return Gi(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(nn&1073741824)!==0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),null;case 24:return null;case 25:return null}throw Error(a(156,n.tag))}function Of(e,n){switch(ri(n),n.tag){case 1:return Qe(n.type)&&ho(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ft(),ce($e),ce(be),gi(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return mi(n),null;case 13:if(ce(ge),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Ot()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ce(ge),null;case 4:return Ft(),null;case 10:return ui(n.type._context),null;case 22:case 23:return Gi(),null;case 24:return null;default:return null}}var Mo=!1,Fe=!1,bf=typeof WeakSet=="function"?WeakSet:Set,R=null;function Wt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){we(e,n,r)}else t.current=null}function Oi(e,n,t){try{t()}catch(r){we(e,n,r)}}var qu=!1;function Uf(e,n){if(Gl=eo,e=Aa(),Fl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var s=0,c=-1,d=-1,y=0,T=0,I=e,C=null;n:for(;;){for(var L;I!==t||o!==0&&I.nodeType!==3||(c=s+o),I!==l||r!==0&&I.nodeType!==3||(d=s+r),I.nodeType===3&&(s+=I.nodeValue.length),(L=I.firstChild)!==null;)C=I,I=L;for(;;){if(I===e)break n;if(C===t&&++y===o&&(c=s),C===l&&++T===r&&(d=s),(L=I.nextSibling)!==null)break;I=C,C=I.parentNode}I=L}t=c===-1||d===-1?null:{start:c,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(Yl={focusedElem:e,selectionRange:t},eo=!1,R=n;R!==null;)if(n=R,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,R=e;else for(;R!==null;){n=R;try{var O=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var b=O.memoizedProps,xe=O.memoizedState,g=n.stateNode,f=g.getSnapshotBeforeUpdate(n.elementType===n.type?b:gn(n.type,b),xe);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(N){we(n,n.return,N)}if(e=n.sibling,e!==null){e.return=n.return,R=e;break}R=n.return}return O=qu,qu=!1,O}function Nr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Oi(n,t,l)}o=o.next}while(o!==r)}}function Oo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function bi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Zu(e){var n=e.alternate;n!==null&&(e.alternate=null,Zu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[xn],delete n[kr],delete n[Zl],delete n[kf],delete n[Sf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ec(e){return e.tag===5||e.tag===3||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ui(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=po));else if(r!==4&&(e=e.child,e!==null))for(Ui(e,n,t),e=e.sibling;e!==null;)Ui(e,n,t),e=e.sibling}function ji(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ji(e,n,t),e=e.sibling;e!==null;)ji(e,n,t),e=e.sibling}var Re=null,vn=!1;function Yn(e,n,t){for(t=t.child;t!==null;)tc(e,n,t),t=t.sibling}function tc(e,n,t){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Gr,t)}catch{}switch(t.tag){case 5:Fe||Wt(t,n);case 6:var r=Re,o=vn;Re=null,Yn(e,n,t),Re=r,vn=o,Re!==null&&(vn?(e=Re,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Re.removeChild(t.stateNode));break;case 18:Re!==null&&(vn?(e=Re,t=t.stateNode,e.nodeType===8?ql(e.parentNode,t):e.nodeType===1&&ql(e,t),ur(e)):ql(Re,t.stateNode));break;case 4:r=Re,o=vn,Re=t.stateNode.containerInfo,vn=!0,Yn(e,n,t),Re=r,vn=o;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,s=l.destroy;l=l.tag,s!==void 0&&((l&2)!==0||(l&4)!==0)&&Oi(t,n,s),o=o.next}while(o!==r)}Yn(e,n,t);break;case 1:if(!Fe&&(Wt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(c){we(t,n,c)}Yn(e,n,t);break;case 21:Yn(e,n,t);break;case 22:t.mode&1?(Fe=(r=Fe)||t.memoizedState!==null,Yn(e,n,t),Fe=r):Yn(e,n,t);break;default:Yn(e,n,t)}}function rc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new bf),n.forEach(function(r){var o=Kf.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function yn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var l=e,s=n,c=s;e:for(;c!==null;){switch(c.tag){case 5:Re=c.stateNode,vn=!1;break e;case 3:Re=c.stateNode.containerInfo,vn=!0;break e;case 4:Re=c.stateNode.containerInfo,vn=!0;break e}c=c.return}if(Re===null)throw Error(a(160));tc(l,s,o),Re=null,vn=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(y){we(o,n,y)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)oc(n,e),n=n.sibling}function oc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(n,e),En(e),r&4){try{Nr(3,e,e.return),Oo(3,e)}catch(b){we(e,e.return,b)}try{Nr(5,e,e.return)}catch(b){we(e,e.return,b)}}break;case 1:yn(n,e),En(e),r&512&&t!==null&&Wt(t,t.return);break;case 5:if(yn(n,e),En(e),r&512&&t!==null&&Wt(t,t.return),e.flags&32){var o=e.stateNode;try{qt(o,"")}catch(b){we(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,s=t!==null?t.memoizedProps:l,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&l.type==="radio"&&l.name!=null&&zs(o,l),gl(c,s);var y=gl(c,l);for(s=0;s<d.length;s+=2){var T=d[s],I=d[s+1];T==="style"?Fs(o,I):T==="dangerouslySetInnerHTML"?Us(o,I):T==="children"?qt(o,I):W(o,T,I,y)}switch(c){case"input":dl(o,l);break;case"textarea":Ms(o,l);break;case"select":var C=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var L=l.value;L!=null?St(o,!!l.multiple,L,!1):C!==!!l.multiple&&(l.defaultValue!=null?St(o,!!l.multiple,l.defaultValue,!0):St(o,!!l.multiple,l.multiple?[]:"",!1))}o[kr]=l}catch(b){we(e,e.return,b)}}break;case 6:if(yn(n,e),En(e),r&4){if(e.stateNode===null)throw Error(a(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(b){we(e,e.return,b)}}break;case 3:if(yn(n,e),En(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ur(n.containerInfo)}catch(b){we(e,e.return,b)}break;case 4:yn(n,e),En(e);break;case 13:yn(n,e),En(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Wi=Se())),r&4&&rc(e);break;case 22:if(T=t!==null&&t.memoizedState!==null,e.mode&1?(Fe=(y=Fe)||T,yn(n,e),Fe=y):yn(n,e),En(e),r&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!T&&(e.mode&1)!==0)for(R=e,T=e.child;T!==null;){for(I=R=T;R!==null;){switch(C=R,L=C.child,C.tag){case 0:case 11:case 14:case 15:Nr(4,C,C.return);break;case 1:Wt(C,C.return);var O=C.stateNode;if(typeof O.componentWillUnmount=="function"){r=C,t=C.return;try{n=r,O.props=n.memoizedProps,O.state=n.memoizedState,O.componentWillUnmount()}catch(b){we(r,t,b)}}break;case 5:Wt(C,C.return);break;case 22:if(C.memoizedState!==null){sc(I);continue}}L!==null?(L.return=C,R=L):sc(I)}T=T.sibling}e:for(T=null,I=e;;){if(I.tag===5){if(T===null){T=I;try{o=I.stateNode,y?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(c=I.stateNode,d=I.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=js("display",s))}catch(b){we(e,e.return,b)}}}else if(I.tag===6){if(T===null)try{I.stateNode.nodeValue=y?"":I.memoizedProps}catch(b){we(e,e.return,b)}}else if((I.tag!==22&&I.tag!==23||I.memoizedState===null||I===e)&&I.child!==null){I.child.return=I,I=I.child;continue}if(I===e)break e;for(;I.sibling===null;){if(I.return===null||I.return===e)break e;T===I&&(T=null),I=I.return}T===I&&(T=null),I.sibling.return=I.return,I=I.sibling}}break;case 19:yn(n,e),En(e),r&4&&rc(e);break;case 21:break;default:yn(n,e),En(e)}}function En(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ec(t)){var r=t;break e}t=t.return}throw Error(a(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(qt(o,""),r.flags&=-33);var l=nc(e);ji(e,l,o);break;case 3:case 4:var s=r.stateNode.containerInfo,c=nc(e);Ui(e,c,s);break;default:throw Error(a(161))}}catch(d){we(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function jf(e,n,t){R=e,lc(e)}function lc(e,n,t){for(var r=(e.mode&1)!==0;R!==null;){var o=R,l=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Mo;if(!s){var c=o.alternate,d=c!==null&&c.memoizedState!==null||Fe;c=Mo;var y=Fe;if(Mo=s,(Fe=d)&&!y)for(R=o;R!==null;)s=R,d=s.child,s.tag===22&&s.memoizedState!==null?ac(o):d!==null?(d.return=s,R=d):ac(o);for(;l!==null;)R=l,lc(l),l=l.sibling;R=o,Mo=c,Fe=y}ic(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,R=l):ic(e)}}function ic(e){for(;R!==null;){var n=R;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Fe||Oo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Fe)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:gn(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&su(n,l,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}su(n,s,t)}break;case 5:var c=n.stateNode;if(t===null&&n.flags&4){t=c;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var y=n.alternate;if(y!==null){var T=y.memoizedState;if(T!==null){var I=T.dehydrated;I!==null&&ur(I)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Fe||n.flags&512&&bi(n)}catch(C){we(n,n.return,C)}}if(n===e){R=null;break}if(t=n.sibling,t!==null){t.return=n.return,R=t;break}R=n.return}}function sc(e){for(;R!==null;){var n=R;if(n===e){R=null;break}var t=n.sibling;if(t!==null){t.return=n.return,R=t;break}R=n.return}}function ac(e){for(;R!==null;){var n=R;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Oo(4,n)}catch(d){we(n,t,d)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(d){we(n,o,d)}}var l=n.return;try{bi(n)}catch(d){we(n,l,d)}break;case 5:var s=n.return;try{bi(n)}catch(d){we(n,s,d)}}}catch(d){we(n,n.return,d)}if(n===e){R=null;break}var c=n.sibling;if(c!==null){c.return=n.return,R=c;break}R=n.return}}var Ff=Math.ceil,bo=ae.ReactCurrentDispatcher,Fi=ae.ReactCurrentOwner,un=ae.ReactCurrentBatchConfig,q=0,Ae=null,_e=null,Me=0,nn=0,Ht=$n(0),Ie=0,zr=null,mt=0,Uo=0,Vi=0,Lr=null,Ke=null,Wi=0,$t=1/0,Rn=null,jo=!1,Hi=null,Xn=null,Fo=!1,Jn=null,Vo=0,Rr=0,$i=null,Wo=-1,Ho=0;function He(){return(q&6)!==0?Se():Wo!==-1?Wo:Wo=Se()}function qn(e){return(e.mode&1)===0?1:(q&2)!==0&&Me!==0?Me&-Me:_f.transition!==null?(Ho===0&&(Ho=na()),Ho):(e=re,e!==0||(e=window.event,e=e===void 0?16:ca(e.type)),e)}function wn(e,n,t,r){if(50<Rr)throw Rr=0,$i=null,Error(a(185));or(e,t,r),((q&2)===0||e!==Ae)&&(e===Ae&&((q&2)===0&&(Uo|=t),Ie===4&&Zn(e,Me)),Ge(e,r),t===1&&q===0&&(n.mode&1)===0&&($t=Se()+500,vo&&Bn()))}function Ge(e,n){var t=e.callbackNode;xd(e,n);var r=Jr(e,e===Ae?Me:0);if(r===0)t!==null&&qs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&qs(t),n===1)e.tag===0?xf(cc.bind(null,e)):Ya(cc.bind(null,e)),yf(function(){(q&6)===0&&Bn()}),t=null;else{switch(ta(r)){case 1:t=_l;break;case 4:t=Zs;break;case 16:t=Kr;break;case 536870912:t=ea;break;default:t=Kr}t=yc(t,uc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function uc(e,n){if(Wo=-1,Ho=0,(q&6)!==0)throw Error(a(327));var t=e.callbackNode;if(Qt()&&e.callbackNode!==t)return null;var r=Jr(e,e===Ae?Me:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=$o(e,r);else{n=r;var o=q;q|=2;var l=fc();(Ae!==e||Me!==n)&&(Rn=null,$t=Se()+500,gt(e,n));do try{Hf();break}catch(c){dc(e,c)}while(!0);ai(),bo.current=l,q=o,_e!==null?n=0:(Ae=null,Me=0,n=Ie)}if(n!==0){if(n===2&&(o=Cl(e),o!==0&&(r=o,n=Qi(e,o))),n===1)throw t=zr,gt(e,0),Zn(e,r),Ge(e,Se()),t;if(n===6)Zn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Vf(o)&&(n=$o(e,r),n===2&&(l=Cl(e),l!==0&&(r=l,n=Qi(e,l))),n===1))throw t=zr,gt(e,0),Zn(e,r),Ge(e,Se()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(a(345));case 2:vt(e,Ke,Rn);break;case 3:if(Zn(e,r),(r&130023424)===r&&(n=Wi+500-Se(),10<n)){if(Jr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Jl(vt.bind(null,e,Ke,Rn),n);break}vt(e,Ke,Rn);break;case 4:if(Zn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var s=31-pn(r);l=1<<s,s=n[s],s>o&&(o=s),r&=~l}if(r=o,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ff(r/1960))-r,10<r){e.timeoutHandle=Jl(vt.bind(null,e,Ke,Rn),r);break}vt(e,Ke,Rn);break;case 5:vt(e,Ke,Rn);break;default:throw Error(a(329))}}}return Ge(e,Se()),e.callbackNode===t?uc.bind(null,e):null}function Qi(e,n){var t=Lr;return e.current.memoizedState.isDehydrated&&(gt(e,n).flags|=256),e=$o(e,n),e!==2&&(n=Ke,Ke=t,n!==null&&Bi(n)),e}function Bi(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function Vf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],l=o.getSnapshot;o=o.value;try{if(!mn(l(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zn(e,n){for(n&=~Vi,n&=~Uo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-pn(n),r=1<<t;e[t]=-1,n&=~r}}function cc(e){if((q&6)!==0)throw Error(a(327));Qt();var n=Jr(e,0);if((n&1)===0)return Ge(e,Se()),null;var t=$o(e,n);if(e.tag!==0&&t===2){var r=Cl(e);r!==0&&(n=r,t=Qi(e,r))}if(t===1)throw t=zr,gt(e,0),Zn(e,n),Ge(e,Se()),t;if(t===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,vt(e,Ke,Rn),Ge(e,Se()),null}function Ki(e,n){var t=q;q|=1;try{return e(n)}finally{q=t,q===0&&($t=Se()+500,vo&&Bn())}}function ht(e){Jn!==null&&Jn.tag===0&&(q&6)===0&&Qt();var n=q;q|=1;var t=un.transition,r=re;try{if(un.transition=null,re=1,e)return e()}finally{re=r,un.transition=t,q=n,(q&6)===0&&Bn()}}function Gi(){nn=Ht.current,ce(Ht)}function gt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,vf(t)),_e!==null)for(t=_e.return;t!==null;){var r=t;switch(ri(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ho();break;case 3:Ft(),ce($e),ce(be),gi();break;case 5:mi(r);break;case 4:Ft();break;case 13:ce(ge);break;case 19:ce(ge);break;case 10:ui(r.type._context);break;case 22:case 23:Gi()}t=t.return}if(Ae=e,_e=e=et(e.current,null),Me=nn=n,Ie=0,zr=null,Vi=Uo=mt=0,Ke=Lr=null,dt!==null){for(n=0;n<dt.length;n++)if(t=dt[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,l=t.pending;if(l!==null){var s=l.next;l.next=o,r.next=s}t.pending=r}dt=null}return e}function dc(e,n){do{var t=_e;try{if(ai(),Po.current=No,Io){for(var r=ve.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Io=!1}if(pt=0,De=Pe=ve=null,Tr=!1,Pr=0,Fi.current=null,t===null||t.return===null){Ie=1,zr=n,_e=null;break}e:{var l=e,s=t.return,c=t,d=n;if(n=Me,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var y=d,T=c,I=T.tag;if((T.mode&1)===0&&(I===0||I===11||I===15)){var C=T.alternate;C?(T.updateQueue=C.updateQueue,T.memoizedState=C.memoizedState,T.lanes=C.lanes):(T.updateQueue=null,T.memoizedState=null)}var L=Ou(s);if(L!==null){L.flags&=-257,bu(L,s,c,l,n),L.mode&1&&Mu(l,y,n),n=L,d=y;var O=n.updateQueue;if(O===null){var b=new Set;b.add(d),n.updateQueue=b}else O.add(d);break e}else{if((n&1)===0){Mu(l,y,n),Yi();break e}d=Error(a(426))}}else if(pe&&c.mode&1){var xe=Ou(s);if(xe!==null){(xe.flags&65536)===0&&(xe.flags|=256),bu(xe,s,c,l,n),ii(Vt(d,c));break e}}l=d=Vt(d,c),Ie!==4&&(Ie=2),Lr===null?Lr=[l]:Lr.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var g=Lu(l,d,n);iu(l,g);break e;case 1:c=d;var f=l.type,v=l.stateNode;if((l.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Xn===null||!Xn.has(v)))){l.flags|=65536,n&=-n,l.lanes|=n;var N=Ru(l,c,n);iu(l,N);break e}}l=l.return}while(l!==null)}mc(t)}catch(U){n=U,_e===t&&t!==null&&(_e=t=t.return);continue}break}while(!0)}function fc(){var e=bo.current;return bo.current=No,e===null?No:e}function Yi(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Ae===null||(mt&268435455)===0&&(Uo&268435455)===0||Zn(Ae,Me)}function $o(e,n){var t=q;q|=2;var r=fc();(Ae!==e||Me!==n)&&(Rn=null,gt(e,n));do try{Wf();break}catch(o){dc(e,o)}while(!0);if(ai(),q=t,bo.current=r,_e!==null)throw Error(a(261));return Ae=null,Me=0,Ie}function Wf(){for(;_e!==null;)pc(_e)}function Hf(){for(;_e!==null&&!pd();)pc(_e)}function pc(e){var n=vc(e.alternate,e,nn);e.memoizedProps=e.pendingProps,n===null?mc(e):_e=n,Fi.current=null}function mc(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Mf(t,n,nn),t!==null){_e=t;return}}else{if(t=Of(t,n),t!==null){t.flags&=32767,_e=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,_e=null;return}}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);Ie===0&&(Ie=5)}function vt(e,n,t){var r=re,o=un.transition;try{un.transition=null,re=1,$f(e,n,t,r)}finally{un.transition=o,re=r}return null}function $f(e,n,t,r){do Qt();while(Jn!==null);if((q&6)!==0)throw Error(a(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(_d(e,l),e===Ae&&(_e=Ae=null,Me=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Fo||(Fo=!0,yc(Kr,function(){return Qt(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=un.transition,un.transition=null;var s=re;re=1;var c=q;q|=4,Fi.current=null,Uf(e,t),oc(t,e),cf(Yl),eo=!!Gl,Yl=Gl=null,e.current=t,jf(t),md(),q=c,re=s,un.transition=l}else e.current=t;if(Fo&&(Fo=!1,Jn=e,Vo=o),l=e.pendingLanes,l===0&&(Xn=null),vd(t.stateNode),Ge(e,Se()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(jo)throw jo=!1,e=Hi,Hi=null,e;return(Vo&1)!==0&&e.tag!==0&&Qt(),l=e.pendingLanes,(l&1)!==0?e===$i?Rr++:(Rr=0,$i=e):Rr=0,Bn(),null}function Qt(){if(Jn!==null){var e=ta(Vo),n=un.transition,t=re;try{if(un.transition=null,re=16>e?16:e,Jn===null)var r=!1;else{if(e=Jn,Jn=null,Vo=0,(q&6)!==0)throw Error(a(331));var o=q;for(q|=4,R=e.current;R!==null;){var l=R,s=l.child;if((R.flags&16)!==0){var c=l.deletions;if(c!==null){for(var d=0;d<c.length;d++){var y=c[d];for(R=y;R!==null;){var T=R;switch(T.tag){case 0:case 11:case 15:Nr(8,T,l)}var I=T.child;if(I!==null)I.return=T,R=I;else for(;R!==null;){T=R;var C=T.sibling,L=T.return;if(Zu(T),T===y){R=null;break}if(C!==null){C.return=L,R=C;break}R=L}}}var O=l.alternate;if(O!==null){var b=O.child;if(b!==null){O.child=null;do{var xe=b.sibling;b.sibling=null,b=xe}while(b!==null)}}R=l}}if((l.subtreeFlags&2064)!==0&&s!==null)s.return=l,R=s;else e:for(;R!==null;){if(l=R,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Nr(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,R=g;break e}R=l.return}}var f=e.current;for(R=f;R!==null;){s=R;var v=s.child;if((s.subtreeFlags&2064)!==0&&v!==null)v.return=s,R=v;else e:for(s=f;R!==null;){if(c=R,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:Oo(9,c)}}catch(U){we(c,c.return,U)}if(c===s){R=null;break e}var N=c.sibling;if(N!==null){N.return=c.return,R=N;break e}R=c.return}}if(q=o,Bn(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Gr,e)}catch{}r=!0}return r}finally{re=t,un.transition=n}}return!1}function hc(e,n,t){n=Vt(t,n),n=Lu(e,n,1),e=Gn(e,n,1),n=He(),e!==null&&(or(e,1,n),Ge(e,n))}function we(e,n,t){if(e.tag===3)hc(e,e,t);else for(;n!==null;){if(n.tag===3){hc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xn===null||!Xn.has(r))){e=Vt(t,e),e=Ru(n,e,1),n=Gn(n,e,1),e=He(),n!==null&&(or(n,1,e),Ge(n,e));break}}n=n.return}}function Qf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=He(),e.pingedLanes|=e.suspendedLanes&t,Ae===e&&(Me&t)===t&&(Ie===4||Ie===3&&(Me&130023424)===Me&&500>Se()-Wi?gt(e,0):Vi|=t),Ge(e,n)}function gc(e,n){n===0&&((e.mode&1)===0?n=1:(n=Xr,Xr<<=1,(Xr&130023424)===0&&(Xr=4194304)));var t=He();e=Nn(e,n),e!==null&&(or(e,n,t),Ge(e,t))}function Bf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),gc(e,t)}function Kf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(n),gc(e,t)}var vc;vc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||$e.current)Be=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Be=!1,Rf(e,n,t);Be=(e.flags&131072)!==0}else Be=!1,pe&&(n.flags&1048576)!==0&&Xa(n,wo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ro(e,n),e=n.pendingProps;var o=Lt(n,be.current);jt(n,t),o=wi(null,n,r,e,o,t);var l=ki();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Qe(r)?(l=!0,go(n)):l=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,fi(n),o.updater=zo,n.stateNode=o,o._reactInternals=n,Ti(n,r,e,t),n=Ai(null,n,r,!0,l,t)):(n.tag=0,pe&&l&&ti(n),We(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ro(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Yf(r),e=gn(r,e),o){case 0:n=Di(null,n,r,e,t);break e;case 1:n=Hu(null,n,r,e,t);break e;case 11:n=Uu(null,n,r,e,t);break e;case 14:n=ju(null,n,r,gn(r.type,e),t);break e}throw Error(a(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:gn(r,o),Di(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:gn(r,o),Hu(e,n,r,o,t);case 3:e:{if($u(n),e===null)throw Error(a(387));r=n.pendingProps,l=n.memoizedState,o=l.element,lu(e,n),Eo(n,r,null,t);var s=n.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){o=Vt(Error(a(423)),n),n=Qu(e,n,r,t,o);break e}else if(r!==o){o=Vt(Error(a(424)),n),n=Qu(e,n,r,t,o);break e}else for(en=Hn(n.stateNode.containerInfo.firstChild),Ze=n,pe=!0,hn=null,t=ru(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ot(),r===o){n=Ln(e,n,t);break e}We(e,n,r,t)}n=n.child}return n;case 5:return au(n),e===null&&li(n),r=n.type,o=n.pendingProps,l=e!==null?e.memoizedProps:null,s=o.children,Xl(r,o)?s=null:l!==null&&Xl(r,l)&&(n.flags|=32),Wu(e,n),We(e,n,s,t),n.child;case 6:return e===null&&li(n),null;case 13:return Bu(e,n,t);case 4:return pi(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=bt(n,null,r,t):We(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:gn(r,o),Uu(e,n,r,o,t);case 7:return We(e,n,n.pendingProps,t),n.child;case 8:return We(e,n,n.pendingProps.children,t),n.child;case 12:return We(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,l=n.memoizedProps,s=o.value,se(xo,r._currentValue),r._currentValue=s,l!==null)if(mn(l.value,s)){if(l.children===o.children&&!$e.current){n=Ln(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var c=l.dependencies;if(c!==null){s=l.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(l.tag===1){d=zn(-1,t&-t),d.tag=2;var y=l.updateQueue;if(y!==null){y=y.shared;var T=y.pending;T===null?d.next=d:(d.next=T.next,T.next=d),y.pending=d}}l.lanes|=t,d=l.alternate,d!==null&&(d.lanes|=t),ci(l.return,t,n),c.lanes|=t;break}d=d.next}}else if(l.tag===10)s=l.type===n.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(a(341));s.lanes|=t,c=s.alternate,c!==null&&(c.lanes|=t),ci(s,t,n),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===n){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}We(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,jt(n,t),o=sn(o),r=r(o),n.flags|=1,We(e,n,r,t),n.child;case 14:return r=n.type,o=gn(r,n.pendingProps),o=gn(r.type,o),ju(e,n,r,o,t);case 15:return Fu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:gn(r,o),Ro(e,n),n.tag=1,Qe(r)?(e=!0,go(n)):e=!1,jt(n,t),Nu(n,r,o),Ti(n,r,o,t),Ai(null,n,r,!0,e,t);case 19:return Gu(e,n,t);case 22:return Vu(e,n,t)}throw Error(a(156,n.tag))};function yc(e,n){return Js(e,n)}function Gf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,n,t,r){return new Gf(e,n,t,r)}function Xi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yf(e){if(typeof e=="function")return Xi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rn)return 11;if(e===Y)return 14}return 2}function et(e,n){var t=e.alternate;return t===null?(t=cn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Qo(e,n,t,r,o,l){var s=2;if(r=e,typeof e=="function")Xi(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Te:return yt(t.children,o,l,n);case Le:s=8,o|=8;break;case kn:return e=cn(12,t,n,o|2),e.elementType=kn,e.lanes=l,e;case Oe:return e=cn(13,t,n,o),e.elementType=Oe,e.lanes=l,e;case Xe:return e=cn(19,t,n,o),e.elementType=Xe,e.lanes=l,e;case oe:return Bo(t,o,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ve:s=10;break e;case fn:s=9;break e;case rn:s=11;break e;case Y:s=14;break e;case ye:s=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return n=cn(s,t,n,o),n.elementType=e,n.type=r,n.lanes=l,n}function yt(e,n,t,r){return e=cn(7,e,r,n),e.lanes=t,e}function Bo(e,n,t,r){return e=cn(22,e,r,n),e.elementType=oe,e.lanes=t,e.stateNode={isHidden:!1},e}function Ji(e,n,t){return e=cn(6,e,null,n),e.lanes=t,e}function qi(e,n,t){return n=cn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Xf(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Zi(e,n,t,r,o,l,s,c,d){return e=new Xf(e,n,t,c,d),n===1?(n=1,l===!0&&(n|=8)):n=0,l=cn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},fi(l),e}function Jf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function wc(e){if(!e)return Qn;e=e._reactInternals;e:{if(it(e)!==e||e.tag!==1)throw Error(a(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Qe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(a(171))}if(e.tag===1){var t=e.type;if(Qe(t))return Ka(e,t,n)}return n}function kc(e,n,t,r,o,l,s,c,d){return e=Zi(t,r,!0,e,o,l,s,c,d),e.context=wc(null),t=e.current,r=He(),o=qn(t),l=zn(r,o),l.callback=n??null,Gn(t,l,o),e.current.lanes=o,or(e,o,r),Ge(e,r),e}function Ko(e,n,t,r){var o=n.current,l=He(),s=qn(o);return t=wc(t),n.context===null?n.context=t:n.pendingContext=t,n=zn(l,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Gn(o,n,s),e!==null&&(wn(e,o,s,l),Co(e,o,s)),s}function Go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function es(e,n){Sc(e,n),(e=e.alternate)&&Sc(e,n)}function qf(){return null}var xc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ns(e){this._internalRoot=e}Yo.prototype.render=ns.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));Ko(e,n,null,null)},Yo.prototype.unmount=ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ht(function(){Ko(null,e,null,null)}),n[Pn]=null}};function Yo(e){this._internalRoot=e}Yo.prototype.unstable_scheduleHydration=function(e){if(e){var n=la();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Fn.length&&n!==0&&n<Fn[t].priority;t++);Fn.splice(t,0,e),t===0&&aa(e)}};function ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _c(){}function Zf(e,n,t,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var y=Go(s);l.call(y)}}var s=kc(n,r,e,0,null,!1,!1,"",_c);return e._reactRootContainer=s,e[Pn]=s.current,yr(e.nodeType===8?e.parentNode:e),ht(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var c=r;r=function(){var y=Go(d);c.call(y)}}var d=Zi(e,0,!1,null,null,!1,!1,"",_c);return e._reactRootContainer=d,e[Pn]=d.current,yr(e.nodeType===8?e.parentNode:e),ht(function(){Ko(n,d,t,r)}),d}function Jo(e,n,t,r,o){var l=t._reactRootContainer;if(l){var s=l;if(typeof o=="function"){var c=o;o=function(){var d=Go(s);c.call(d)}}Ko(n,s,e,o)}else s=Zf(t,n,e,o,r);return Go(s)}ra=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=rr(n.pendingLanes);t!==0&&(Tl(n,t|1),Ge(n,Se()),(q&6)===0&&($t=Se()+500,Bn()))}break;case 13:ht(function(){var r=Nn(e,1);if(r!==null){var o=He();wn(r,e,1,o)}}),es(e,1)}},Pl=function(e){if(e.tag===13){var n=Nn(e,134217728);if(n!==null){var t=He();wn(n,e,134217728,t)}es(e,134217728)}},oa=function(e){if(e.tag===13){var n=qn(e),t=Nn(e,n);if(t!==null){var r=He();wn(t,e,n,r)}es(e,n)}},la=function(){return re},ia=function(e,n){var t=re;try{return re=e,n()}finally{re=t}},wl=function(e,n,t){switch(n){case"input":if(dl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=mo(r);if(!o)throw Error(a(90));As(r),dl(r,o)}}}break;case"textarea":Ms(e,t);break;case"select":n=t.value,n!=null&&St(e,!!t.multiple,n,!1)}},$s=Ki,Qs=ht;var ep={usingClientEntryPoint:!1,Events:[Sr,Nt,mo,Ws,Hs,Ki]},Mr={findFiberByHostInstance:st,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},np={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ys(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{Gr=qo.inject(np),Sn=qo}catch{}}return Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ep,Ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ts(n))throw Error(a(200));return Jf(e,n,null,t)},Ye.createRoot=function(e,n){if(!ts(e))throw Error(a(299));var t=!1,r="",o=xc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Zi(e,1,!1,null,null,t,!1,r,o),e[Pn]=n.current,yr(e.nodeType===8?e.parentNode:e),new ns(n)},Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Ys(n),e=e===null?null:e.stateNode,e},Ye.flushSync=function(e){return ht(e)},Ye.hydrate=function(e,n,t){if(!Xo(n))throw Error(a(200));return Jo(null,e,n,!0,t)},Ye.hydrateRoot=function(e,n,t){if(!ts(e))throw Error(a(405));var r=t!=null&&t.hydratedSources||null,o=!1,l="",s=xc;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=kc(n,null,e,1,t??null,o,!1,l,s),e[Pn]=n.current,yr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Yo(n)},Ye.render=function(e,n,t){if(!Xo(n))throw Error(a(200));return Jo(null,e,n,!1,t)},Ye.unmountComponentAtNode=function(e){if(!Xo(e))throw Error(a(40));return e._reactRootContainer?(ht(function(){Jo(null,null,e,!1,function(){e._reactRootContainer=null,e[Pn]=null})}),!0):!1},Ye.unstable_batchedUpdates=Ki,Ye.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Xo(t))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Jo(e,n,t,!1,r)},Ye.version="18.3.1-next-f1338f8080-20240426",Ye}var zc;function pp(){if(zc)return ls.exports;zc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),ls.exports=fp(),ls.exports}var Lc;function mp(){if(Lc)return Zo;Lc=1;var i=pp();return Zo.createRoot=i.createRoot,Zo.hydrateRoot=i.hydrateRoot,Zo}var hp=mp();const gp=Qc(hp),Mn={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1};function Bc(i){return"init"in i}function fs(i){return typeof i.write=="function"}function vp(i){return!!i.onMount}function Rc(i){return"v"in i||"e"in i}function ll(i){if("e"in i)throw i.e;if((Mn?"production":void 0)!=="production"&&!("v"in i))throw new Error("[Bug] atom state is not initialized");return i.v}function il(i){return typeof(i==null?void 0:i.then)=="function"}function yp(i){if(!(i instanceof Error))return!1;const u=i.name,a=i.message.toLowerCase();return(u==="RangeError"||u==="InternalError")&&(a.includes("call stack")||a.includes("too much recursion")||a.includes("stack overflow"))}function Kc(i,u,a){if(!a.p.has(i)){a.p.add(i);const h=()=>a.p.delete(i);u.then(h,h)}}function Gc(i,u,a){const h=a.get(i),p=h==null?void 0:h.t,w=u.p;if(!(p!=null&&p.size))return w;if(!w.size)return p;const k=new Set(p);for(const _ of w)k.add(_);return k}function wp(i){return!!i.INTERNAL_onInit}const kp=(i,u,a,...h)=>a.read(...h),Sp=(i,u,a,...h)=>a.write(...h),xp=(i,u,a)=>a.INTERNAL_onInit(u),_p=(i,u,a,h)=>{var p;return(p=a.onMount)==null?void 0:p.call(a,h)},Cp=(i,u,a)=>{var h;const p=i[0];let w=p.get(a);if(!w){const k=i[6],_=i[9];w={d:new Map,p:new Set,n:0},p.set(a,w),(h=k.i)==null||h.call(k,a),wp(a)&&_(i,u,a)}return w},Ep=(i,u)=>{var a;const h=i[1],p=i[3],w=i[4],k=i[5],_=i[6],x=i[13];if(!_.f&&!p.size&&!w.size&&!k.size)return;const A=[],S=P=>{try{P()}catch(D){A.push(D)}};do{_.f&&S(_.f);const P=new Set;for(const D of p){const j=(a=h.get(D))==null?void 0:a.l;if(j)for(const F of j)P.add(F)}p.clear();for(const D of k)P.add(D);k.clear();for(const D of w)P.add(D);w.clear();for(const D of P)S(D);p.size&&x(i,u)}while(p.size||k.size||w.size);if(A.length)throw new AggregateError(A)},Tp=(i,u)=>{const a=i[1],h=i[2],p=i[3],w=i[11],k=i[14],_=i[17];if(!p.size)return;const x=[],A=[],S=new WeakSet,P=new WeakSet,D=[],j=[];for(const F of p)D.push(F),j.push(w(i,u,F));for(;D.length;){const F=D.length-1,V=D[F],Q=j[F];if(P.has(V)){D.pop(),j.pop();continue}if(S.has(V)){if(h.get(V)===Q.n)x.push(V),A.push(Q);else if((Mn?"production":void 0)!=="production"&&h.has(V))throw new Error("[Bug] invalidated atom exists");P.add(V),D.pop(),j.pop();continue}S.add(V);for(const le of Gc(V,Q,a))S.has(le)||(D.push(le),j.push(w(i,u,le)))}for(let F=x.length-1;F>=0;--F){const V=x[F],Q=A[F];let le=!1;for(const Ce of Q.d.keys())if(Ce!==V&&p.has(Ce)){le=!0;break}le&&(h.set(V,Q.n),k(i,u,V),_(i,u,V)),h.delete(V)}},ps=new WeakSet,Pp=(i,u,a)=>{var h,p;const w=i[1],k=i[2],_=i[3],x=i[6],A=i[7],S=i[11],P=i[12],D=i[13],j=i[14],F=i[16],V=i[17],Q=i[20],le=i[26],Ce=i[28],W=S(i,u,a),ae=Ce[0];if(Rc(W)){if(w.has(a)&&k.get(a)!==W.n||W.m===ae)return W.m=ae,W;let Y=!1;for(const[ye,oe]of W.d)if(j(i,u,ye).n!==oe){Y=!0;break}if(!Y)return W.m=ae,W}let Ee=!0;const ke=new Set(W.d.keys()),Te=()=>{for(const Y of ke)W.d.delete(Y)},Le=()=>{if(w.has(a)){const Y=!_.size;V(i,u,a),Y&&(D(i,u),P(i,u))}},kn=Y=>{var ye;if(Y===a){const z=S(i,u,Y);if(!Rc(z))if(Bc(Y))Q(i,u,Y,Y.init);else throw new Error("no atom init");return ll(z)}const oe=j(i,u,Y);try{return ll(oe)}finally{ke.delete(Y),W.d.set(Y,oe.n),il(W.v)&&Kc(a,W.v,oe),w.has(a)&&((ye=w.get(Y))==null||ye.t.add(a)),Ee||Le()}};let Ve,fn;const rn={get signal(){return Ve||(Ve=new AbortController),Ve.signal},get setSelf(){return(Mn?"production":void 0)!=="production"&&console.warn("[DEPRECATED] setSelf is deprecated and will be removed in v3."),(Mn?"production":void 0)!=="production"&&!fs(a)&&console.warn("setSelf function cannot be used with read-only atom"),!fn&&fs(a)&&(fn=(...Y)=>{if((Mn?"production":void 0)!=="production"&&Ee&&console.warn("setSelf function cannot be called in sync"),!Ee)try{return F(i,u,a,Y)}finally{D(i,u),P(i,u)}}),fn}},Oe=W.n,Xe=k.get(a)===Oe;try{(Mn?"production":void 0)!=="production"&&ps.delete(u);const Y=A(i,u,a,kn,rn);if((Mn?"production":void 0)!=="production"&&ps.has(u)&&console.warn("Detected store mutation during atom read. This is not supported."),Q(i,u,a,Y),il(Y)){le(i,u,Y,()=>Ve==null?void 0:Ve.abort());const ye=()=>{Te(),Le()};Y.then(ye,ye)}else Te();return(h=x.r)==null||h.call(x,a),W.m=ae,W}catch(Y){if(yp(Y))throw Y;return delete W.v,W.e=Y,++W.n,W.m=ae,W}finally{Ee=!1,W.n!==Oe&&Xe&&(k.set(a,W.n),_.add(a),(p=x.c)==null||p.call(x,a))}},Ip=(i,u,a)=>{const h=i[1],p=i[2],w=i[11],k=[a];for(;k.length;){const _=k.pop(),x=w(i,u,_);for(const A of Gc(_,x,h)){const S=w(i,u,A);p.get(A)!==S.n&&(p.set(A,S.n),k.push(A))}}},Dp=(i,u,a,h)=>{const p=i[3],w=i[6],k=i[8],_=i[11],x=i[12],A=i[13],S=i[14],P=i[15],D=i[16],j=i[17],F=i[20],V=i[28];let Q=!0;const le=W=>ll(S(i,u,W)),Ce=(W,...ae)=>{var Ee;const ke=_(i,u,W);try{if(W===a){if(!Bc(W))throw new Error("atom not writable");(Mn?"production":void 0)!=="production"&&ps.add(u);const Te=ke.n,Le=ae[0];F(i,u,W,Le),j(i,u,W),Te!==ke.n&&(++V[0],p.add(W),P(i,u,W),(Ee=w.c)==null||Ee.call(w,W));return}else return D(i,u,W,ae)}finally{Q||(A(i,u),x(i,u))}};try{return k(i,u,a,le,Ce,...h)}finally{Q=!1}},Ap=(i,u,a)=>{var h;const p=i[1],w=i[3],k=i[6],_=i[11],x=i[15],A=i[18],S=i[19],P=_(i,u,a),D=p.get(a);if(D&&P.d.size>0){for(const[j,F]of P.d)if(!D.d.has(j)){const V=_(i,u,j);A(i,u,j).t.add(a),D.d.add(j),F!==V.n&&(w.add(j),x(i,u,j),(h=k.c)==null||h.call(k,j))}for(const j of D.d)if(!P.d.has(j)){D.d.delete(j);const F=S(i,u,j);F==null||F.t.delete(a)}}},Np=(i,u,a)=>{var h;const p=i[1],w=i[4],k=i[6],_=i[10],x=i[11],A=i[12],S=i[13],P=i[14],D=i[16],j=i[18],F=x(i,u,a);let V=p.get(a);if(!V){P(i,u,a);for(const Q of F.d.keys())j(i,u,Q).t.add(a);if(V={l:new Set,d:new Set(F.d.keys()),t:new Set},p.set(a,V),fs(a)&&vp(a)){const Q=()=>{let le=!0;const Ce=(...W)=>{try{return D(i,u,a,W)}finally{le||(S(i,u),A(i,u))}};try{const W=_(i,u,a,Ce);W&&(V.u=()=>{le=!0;try{W()}finally{le=!1}})}finally{le=!1}};w.add(Q)}(h=k.m)==null||h.call(k,a)}return V},zp=(i,u,a)=>{var h,p;const w=i[1],k=i[5],_=i[6],x=i[11],A=i[19],S=x(i,u,a);let P=w.get(a);if(!P||P.l.size)return P;let D=!1;for(const j of P.t)if((h=w.get(j))!=null&&h.d.has(a)){D=!0;break}if(!D){P.u&&k.add(P.u),P=void 0,w.delete(a);for(const j of S.d.keys()){const F=A(i,u,j);F==null||F.t.delete(a)}(p=_.u)==null||p.call(_,a);return}return P},Lp=(i,u,a,h)=>{const p=i[11],w=i[27],k=p(i,u,a),_="v"in k,x=k.v;if(il(h))for(const A of k.d.keys())Kc(a,h,p(i,u,A));k.v=h,delete k.e,(!_||!Object.is(x,k.v))&&(++k.n,il(x)&&w(i,u,x))},Rp=(i,u,a)=>{const h=i[14];return ll(h(i,u,a))},Mp=(i,u,a,...h)=>{const p=i[3],w=i[12],k=i[13],_=i[16],x=p.size;try{return _(i,u,a,h)}finally{p.size!==x&&(k(i,u),w(i,u))}},Op=(i,u,a,h)=>{const p=i[12],w=i[13],k=i[18],_=i[19],A=k(i,u,a).l;return A.add(h),w(i,u),p(i,u),()=>{A.delete(h),_(i,u,a),w(i,u),p(i,u)}},bp=(i,u,a,h)=>{const p=i[25];let w=p.get(a);if(!w){w=new Set,p.set(a,w);const k=()=>p.delete(a);a.then(k,k)}w.add(h)},Up=(i,u,a)=>{const p=i[25].get(a);p==null||p.forEach(w=>w())},Yc=new WeakMap;function jp(i){const u=Yc.get(i);if((Mn?"production":void 0)!=="production"&&!u)throw new Error("Store must be created by buildStore to read its building blocks");const a=u[24];return a?a(u,i):u}function Fp(...i){const u={get(k){return h(a,u,k)},set(k,..._){return p(a,u,k,..._)},sub(k,_){return w(a,u,k,_)}},a=[new WeakMap,new WeakMap,new WeakMap,new Set,new Set,new Set,{},kp,Sp,xp,_p,Cp,Ep,Tp,Pp,Ip,Dp,Ap,Np,zp,Lp,Rp,Mp,Op,void 0,new WeakMap,bp,Up,[0]].map((k,_)=>i[_]||k);Yc.set(u,Object.freeze(a));const h=a[21],p=a[22],w=a[23];return u}const Xc={};let Vp=0;function Tn(i,u){const a=`atom${++Vp}`,h={toString(){return(Xc?"production":void 0)!=="production"&&this.debugLabel?a+":"+this.debugLabel:a}};return typeof i=="function"?h.read=i:(h.init=i,h.read=Wp,h.write=Hp),u&&(h.write=u),h}function Wp(i){return i(this)}function Hp(i,u,a){return u(this,typeof a=="function"?a(i(this)):a)}function $p(){return Fp()}let br;function kt(){return br||(br=$p(),(Xc?"production":void 0)!=="production"&&(globalThis.__JOTAI_DEFAULT_STORE__||(globalThis.__JOTAI_DEFAULT_STORE__=br),globalThis.__JOTAI_DEFAULT_STORE__!==br&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"))),br}const Qp={},Bp=lt.createContext(void 0);function Jc(i){return lt.useContext(Bp)||kt()}const ms=i=>typeof(i==null?void 0:i.then)=="function",hs=i=>{i.status||(i.status="pending",i.then(u=>{i.status="fulfilled",i.value=u},u=>{i.status="rejected",i.reason=u}))},Kp=Vr.use||(i=>{if(i.status==="pending")throw i;if(i.status==="fulfilled")return i.value;throw i.status==="rejected"?i.reason:(hs(i),i)}),as=new WeakMap,Mc=(i,u,a)=>{const h=jp(i),p=h[26];let w=as.get(u);return w||(w=new Promise((k,_)=>{let x=u;const A=D=>j=>{x===D&&k(j)},S=D=>j=>{x===D&&_(j)},P=()=>{try{const D=a();ms(D)?(as.set(D,w),x=D,D.then(A(D),S(D)),p(h,i,D,P)):k(D)}catch(D){_(D)}};u.then(A(u),S(u)),p(h,i,u,P)}),as.set(u,w)),w};function Ur(i,u){const{delay:a,unstable_promiseStatus:h=!Vr.use}={},p=Jc(),[[w,k,_],x]=lt.useReducer(S=>{const P=p.get(i);return Object.is(S[0],P)&&S[1]===p&&S[2]===i?S:[P,p,i]},void 0,()=>[p.get(i),p,i]);let A=w;if((k!==p||_!==i)&&(x(),A=p.get(i)),lt.useEffect(()=>{const S=p.sub(i,()=>{if(h)try{const P=p.get(i);ms(P)&&hs(Mc(p,P,()=>p.get(i)))}catch{}if(typeof a=="number"){console.warn(`[DEPRECATED] delay option is deprecated and will be removed in v3.

Migration guide:

Create a custom hook like the following.

function useAtomValueWithDelay<Value>(
  atom: Atom<Value>,
  options: { delay: number },
): Value {
  const { delay } = options
  const store = useStore(options)
  const [value, setValue] = useState(() => store.get(atom))
  useEffect(() => {
    const unsub = store.sub(atom, () => {
      setTimeout(() => setValue(store.get(atom)), delay)
    })
    return unsub
  }, [store, atom, delay])
  return value
}
`),setTimeout(x,a);return}x()});return x(),S},[p,i,a,h]),lt.useDebugValue(A),ms(A)){const S=Mc(p,A,()=>p.get(i));return h&&hs(S),Kp(S)}return A}function Gp(i,u){const a=Jc();return lt.useCallback((...p)=>{if((Qp?"production":void 0)!=="production"&&!("write"in i))throw new Error("not writable atom");return a.set(i,...p)},[a,i])}function tm(i,u){return[Ur(i),Gp(i)]}const ul={},Yp=Symbol((ul?"production":void 0)!=="production"?"RESET":"");let Oc=!1;function rm(i,u){(ul?"production":void 0)!=="production"&&!Oc&&(console.warn("[DEPRECATED] atomFamily is deprecated and will be removed in v3. Please use the `jotai-family` package instead: https://github.com/jotaijs/jotai-family"),Oc=!0);let a=null;const h=new Map,p=new Set,w=_=>{let x;if(x=h.get(_),x!==void 0)if(a!=null&&a(x[1],_))w.remove(_);else return x[0];const A=i(_);return h.set(_,[A,Date.now()]),k("CREATE",_,A),A},k=(_,x,A)=>{for(const S of p)S({type:_,param:x,atom:A})};return w.unstable_listen=_=>(p.add(_),()=>{p.delete(_)}),w.getParams=()=>h.keys(),w.remove=_=>{{if(!h.has(_))return;const[x]=h.get(_);h.delete(_),k("REMOVE",_,x)}},w.setShouldRemove=_=>{if(a=_,!!a)for(const[x,[A,S]]of h)a(S,x)&&(h.delete(x),k("REMOVE",x,A))},w}const qc=i=>typeof(i==null?void 0:i.then)=="function";function Xp(i=()=>{try{return window.localStorage}catch(a){(ul?"production":void 0)!=="production"&&typeof window<"u"&&console.warn(a);return}},u){var a;let h,p;const w={getItem:(x,A)=>{var S,P;const D=F=>{if(F=F||"",h!==F){try{p=JSON.parse(F,u==null?void 0:u.reviver)}catch{return A}h=F}return p},j=(P=(S=i())==null?void 0:S.getItem(x))!=null?P:null;return qc(j)?j.then(D):D(j)},setItem:(x,A)=>{var S;return(S=i())==null?void 0:S.setItem(x,JSON.stringify(A,void 0))},removeItem:x=>{var A;return(A=i())==null?void 0:A.removeItem(x)}},k=x=>(A,S,P)=>x(A,D=>{let j;try{j=JSON.parse(D||"",u==null?void 0:u.reviver)}catch{j=P}S(j)});let _;try{_=(a=i())==null?void 0:a.subscribe}catch{}return!_&&typeof window<"u"&&typeof window.addEventListener=="function"&&window.Storage&&(_=(x,A)=>{if(!(i()instanceof window.Storage))return()=>{};const S=P=>{P.storageArea===i()&&P.key===x&&A(P.newValue)};return window.addEventListener("storage",S),()=>{window.removeEventListener("storage",S)}}),_&&(w.subscribe=k(_)),w}const Jp=Xp();function qp(i,u,a=Jp,h){const p=h==null?void 0:h.getOnInit,w=Tn(p?a.getItem(i,u):u);return(ul?"production":void 0)!=="production"&&(w.debugPrivate=!0),w.onMount=_=>{var x;return _(a.getItem(i,u)),(x=a.subscribe)==null?void 0:x.call(a,i,_,u)},Tn(_=>_(w),(_,x,A)=>{const S=typeof A=="function"?A(_(w)):A;return S===Yp?(x(w,u),a.removeItem(i)):qc(S)?S.then(P=>(x(w,P),a.setItem(i,P))):(x(w,S),a.setItem(i,S))})}const gs=qp("profer-active-view","conversations"),Zp=`{
  "id": "forest-dark",
  "name": "森息夜语",
  "tone": "dark",
  "version": "1.0.0",
  "author": "Profer",
  "description": "森息夜语 — 雾林清晨",
  "titlebar": {
    "color": "#16201b",
    "symbolColor": "#e3e8e5"
  },
  "contractVersion": 2
}
`,e0=`{
  "id": "forest-light",
  "name": "森息晨光",
  "tone": "light",
  "version": "1.0.0",
  "author": "Profer",
  "description": "森息晨光 — 自然绿调",
  "previewScale": 1.45,
  "titlebar": {
    "color": "#ecf1ee",
    "symbolColor": "#1d3026"
  },
  "contractVersion": 2
}
`,n0=`{
  "id": "mist-paper-dark",
  "name": "雾纸暖灰",
  "tone": "dark",
  "version": "1.0.0",
  "author": "Profer",
  "description": "雾纸暖灰 — 安静的暖石墨工作台",
  "titlebar": {
    "color": "#2a2928",
    "symbolColor": "#b8b6b3"
  },
  "contractVersion": 2
}
`,t0=`{
  "id": "ocean-dark",
  "name": "Ocean Dark",
  "tone": "dark",
  "version": "1.0.0",
  "author": "Profer",
  "description": "远山暮霭 — 深海玻璃",
  "titlebar": {
    "color": "#131c26",
    "symbolColor": "#e7ebef"
  },
  "contractVersion": 2
}
`,r0=`{
  "id": "ocean-light",
  "name": "晴空碧海",
  "tone": "light",
  "version": "1.0.0",
  "author": "Profer",
  "description": "晴空碧海 — 海天晨光",
  "titlebar": {
    "color": "#e6eef5",
    "symbolColor": "#1b2632"
  },
  "contractVersion": 2
}
`,o0=`{
  "id": "slate-dark",
  "name": "莫兰迪夜",
  "tone": "dark",
  "version": "1.0.0",
  "author": "Profer",
  "description": "莫兰迪夜 — 莫兰迪灰紫",
  "previewScale": 1.15,
  "previewPosition": "44% 58%",
  "titlebar": {
    "color": "#1f1c21",
    "symbolColor": "#e9e6e3"
  },
  "contractVersion": 2
}
`,l0=`{
  "id": "slate-light",
  "name": "云朵舞者",
  "tone": "light",
  "version": "1.0.1",
  "author": "Profer",
  "description": "云朵舞者 — 温暖灰调",
  "previewScale": 1.3,
  "titlebar": {
    "color": "#e6e4df",
    "symbolColor": "#312f2a"
  },
  "contractVersion": 2
}
`,i0=`{
  "id": "terminal-dark",
  "name": "旧屏微光",
  "tone": "dark",
  "version": "1.0.0",
  "author": "Profer",
  "description": "CRT 终端 — 暖磷光",
  "tooltip": "该主题包含轻微闪烁动画",
  "titlebar": {
    "color": "#0d0e0c",
    "symbolColor": "#acb09f"
  },
  "contractVersion": 2
}
`,s0=`/* ===== Forest Dark（森息夜语）皮肤 =====
 *
 * 皮肤文件 = :root token 表 + 特例规则。
 * token 表是完整自描述：所有颜色/表面 token 在此赋值，未定义 token 继承
 * globals.css 的 :root / .dark 默认值（几何/阴影等通常不必重复）。
 * 公共组件规则（选中态、滚动条等）在 skin-base.css 中引用这些 token，
 * 皮肤作者无需了解内部类名。
 */

:root {
  /* ===== 基底色板 ===== */
  --background: 150 8% 14%;             /* 侧边栏：近中性灰 + 微微森绿余韵 */
  --foreground: 140 10% 92%;
  --content-area: 150 10% 9%;           /* 内容区：深林泥土 */
  --sidebar-surface: 150 8% 14%;
  --tabbar-surface: 150 8% 14%;
  --input-surface: 150 8% 14%;
  --muted: 150 10% 17%;
  --muted-foreground: 145 8% 60%;
  --border: 150 12% 25%;
  --primary: 145 25% 42%;               /* 雾绿灰主色，沉静的森林背影 */
  --primary-foreground: 0 0% 100%;      /* 白字配中性灰绿 */
  --secondary: 150 10% 17%;
  --secondary-foreground: 140 10% 92%;
  --accent: 150 12% 22%;
  --accent-foreground: 145 35% 65%;     /* 高亮态：雾绿灰偏亮 */
  --ring: 145 35% 55%;                  /* focus：略亮于 primary */
  --card: 150 10% 17%;
  --card-foreground: 140 10% 92%;
  --input: 150 10% 17%;
  --popover: 150 10% 19%;
  --popover-foreground: 140 10% 92%;
  --dialog: 150 10% 22%;
  --dialog-foreground: 140 10% 92%;
  --destructive: 0 55% 50%;
  --destructive-foreground: 0 0% 98%;
  --stop-hover-bg: hsl(0, 35%, 18%);
  --tooltip: 150 14% 24%;
  --tooltip-foreground: 0 0% 98%;
  --tooltip-muted: 140 10% 70%;
  /* 代码块背景 - 深森绿 */
  --code-bg: 150 20% 8%;
  /* 虚线边框色 */
  --dashed-border: 145 25% 42% / 0.35;
  --dashed-border-hover: 145 25% 42% / 0.55;

  /* ===== 文字选区 =====
   * --primary 在暗背景上太暗，改用明亮的 accent-foreground + 高不透明度。
   */
  --selection-bg: hsl(var(--accent-foreground) / 0.75);
  --selection-color: hsl(var(--background));

  /* ===== 外层缝隙背景 ===== */
  --shell-bg-gradient: linear-gradient(135deg, hsl(150 10% 5%) 0%, hsl(150 10% 7%) 100%);

  /* ===== 模式切换器 ===== */
  --mode-slider-bg: hsl(150 18% 28%);   /* 雾绿灰，沉静 */
  --mode-slider-shadow: 0 2px 4px rgba(59, 84, 71, 0.3);
  --mode-btn-selected-color: #ffffff;

  /* ===== 选中态（会话/工作区/Tab/自动化入口） ===== */
  --item-selected-bg: hsl(150 12% 22%); /* 低饱和背景，不抢戏 */
  --item-selected-fg: hsl(145 35% 65%); /* 雾绿灰文字 */

  /* ===== 工作区 Badge ===== */
  --workspace-badge-color: hsl(145 35% 65%);

  /* ===== Dialog 光晕 ===== */
  --dialog-glow-shadow:
    0 0 40px 8px rgba(255, 255, 255, 0.06),
    0 25px 50px -12px rgba(0, 0, 0, 0.5);

  /* ===== 输入区代码块（globals: .theme-forest-dark .tiptap pre） ===== */
  --tiptap-pre-bg: 150 20% 9%;

  /* ===== 代码块标题栏 ===== */
  --code-block-header-bg: rgb(34, 42, 37);

  /* ===== Minimap 可见指示器 ===== */
  --minimap-indicator-bg: hsl(145 25% 45%);

  /* ===== 滚动进度条三态 ===== */
  --scroll-thumb-bg: hsl(145 25% 45% / 0.20);
  --scroll-thumb-hover: hsl(145 25% 45% / 0.32);
  --scroll-thumb-active: hsl(145 25% 45% / 0.42);

  /* ===== 计划模式虚线 ===== */
  --plan-mode-stroke-color: hsl(145 25% 45% / 0.7);

  /* ===== ui-classic TabBar 下缘阴影（经典界面） ===== */
  --tabbar-shadow-color: hsl(150 12% 22% / 0.6);
}

/* ===== Skin Surface Contract v2 =====
 * 本组将稳定的语义表面映射到本皮肤既有色板；业务组件不得依赖具体色相。 */
:root {
  --shell-surface: var(--background);
  --raised-surface: var(--card);
  --sunken-surface: var(--muted);
  --surface-border: var(--border);
  --surface-border-strong: var(--border);
  --input-hover: var(--muted);
  --control-surface: var(--secondary);
  --control-hover: var(--accent);
  --selected-surface: var(--accent);
  --selected-foreground: var(--accent-foreground);
  --focus-ring: var(--ring);
  --overlay: 0 0% 0%;
  --overlay-foreground: var(--foreground);
  --message-surface: var(--content-area);
  --message-user-surface: var(--secondary);
  --code-fg: var(--foreground);
  --blockquote-surface: var(--muted);
  --table-header-surface: var(--muted);
  --diff-addition-bg: 142 65% 45% / 0.18;
  --diff-addition-fg: 142 60% 75%;
  --diff-deletion-bg: 0 70% 52% / 0.20;
  --diff-deletion-fg: 0 80% 78%;
  --browser-host-surface: var(--content-area);
  --success: 142 65% 45%;
  --success-foreground: 0 0% 100%;
  --warning: 38 92% 50%;
  --warning-foreground: 26 83% 14%;
  --info: var(--primary);
  --info-foreground: var(--primary-foreground);
}
`,a0=`/* ===== Forest Light（森息晨光）皮肤 =====
 *
 * 皮肤文件 = :root token 表 + 特例规则。
 * token 表是完整自描述：所有颜色/表面 token 在此赋值，未定义 token 继承
 * globals.css 的 :root / .dark 默认值（几何/阴影等通常不必重复）。
 * 公共组件规则（选中态、滚动条等）在 skin-base.css 中引用这些 token，
 * 皮肤作者无需了解内部类名。
 */

:root {
  /* ===== 基底色板 ===== */
  --background: 140 25% 95%;            /* #eff5f1 背景 */
  --foreground: 150 25% 15%;            /* #1d3026 前景文字 */
  --content-area: 140 20% 97%;          /* #f6f9f7 内容区域 */
  --sidebar-surface: 140 25% 95%;
  --tabbar-surface: 140 25% 95%;
  --input-surface: 60 14.3% 98.6%;
  --tab-surface: 140 20% 97%;
  --muted: 140 15% 90%;                 /* #e2e9e4 次要背景 */
  --muted-foreground: 145 10% 45%;      /* #677e71 次要文字 */
  --border: 140 15% 82%;                /* #cad8cf 边框 */
  --primary: 150 35% 38%;               /* #3f8361 主色 */
  --primary-foreground: 0 0% 100%;      /* #ffffff 主色前景 */
  --secondary: 140 15% 92%;             /* #e8eeea 二级背景 */
  --secondary-foreground: 150 20% 20%;  /* #293d33 二级前景 */
  --accent: 145 20% 88%;                /* #dae7df 强调背景 */
  --accent-foreground: 150 30% 30%;     /* #36634d 强调文字 */
  --ring: 150 35% 38%;                  /* #3f8361 聚焦环 */
  --card: 140 20% 97%;                  /* #f6f9f7 卡片背景 */
  --card-foreground: 150 25% 15%;       /* #1d3026 卡片前景 */
  --input: 140 18% 92%;                 /* #e7eee9 输入框背景 */
  --popover: 140 18% 98%;               /* #f9fbfa 弹出层 */
  --popover-foreground: 150 25% 15%;    /* #1d3026 弹出前景 */
  --dialog: 140 15% 96%;                /* #f3f6f4 弹窗背景 */
  --dialog-foreground: 150 25% 15%;     /* #1d3026 弹窗前景 */
  --destructive: 0 72% 51%;             /* #dc2828 危险色 */
  --destructive-foreground: 0 0% 100%;  /* #ffffff 危险前景 */
  --stop-hover-bg: hsla(0, 70%, 50%, 0.12);
  --tooltip: 150 20% 18%;               /* #25372e Tooltip */
  --tooltip-foreground: 0 0% 98%;       /* #fafafa Tooltip前景 */
  --tooltip-muted: 140 10% 60%;         /* #8fa396 Tooltip弱 */
  /* 代码块背景 - 森林绿调 */
  --code-bg: 150 35% 12%;               /* #142820 深森绿 */
  /* 虚线边框色 */
  --dashed-border: 150 35% 38% / 0.35;
  --dashed-border-hover: 150 35% 38% / 0.50;

  /* ===== 外层缝隙背景 ===== */
  --shell-bg-gradient: linear-gradient(135deg, hsl(140 15% 90%) 0%, hsl(140 15% 92%) 100%);

  /* ===== 模式切换器 ===== */
  --mode-slider-bg: hsl(150 35% 38%);   /* #3f8361 主色 */
  --mode-slider-shadow: 0 2px 4px rgba(63, 131, 97, 0.3);
  --mode-btn-selected-color: #ffffff;

  /* ===== 选中态（会话/工作区/Tab/自动化入口） ===== */
  --item-selected-bg: hsl(145 25% 82%); /* 浅绿色背景 */
  --item-selected-fg: hsl(150 35% 25%); /* 深绿色文字 */

  /* ===== 工作区 Badge ===== */
  --workspace-badge-color: hsl(150 35% 25%);

  /* ===== 滚动进度条三态 ===== */
  --scroll-thumb-bg: hsl(150 35% 38% / 0.18);
  --scroll-thumb-hover: hsl(150 35% 38% / 0.30);
  --scroll-thumb-active: hsl(150 35% 38% / 0.40);
}

/* ===== Skin Surface Contract v2 =====
 * 本组将稳定的语义表面映射到本皮肤既有色板；业务组件不得依赖具体色相。 */
:root {
  --shell-surface: var(--background);
  --raised-surface: var(--card);
  --sunken-surface: var(--muted);
  --surface-border: var(--border);
  --surface-border-strong: var(--border);
  --input-hover: var(--muted);
  --control-surface: var(--secondary);
  --control-hover: var(--accent);
  --selected-surface: var(--accent);
  --selected-foreground: var(--accent-foreground);
  --focus-ring: var(--ring);
  --overlay: 0 0% 0%;
  --overlay-foreground: var(--foreground);
  --message-surface: var(--content-area);
  --message-user-surface: var(--secondary);
  /* 代码块使用深色背景，不能复用浅色页面正文前景色。 */
  --code-fg: 215 28% 92%;
  --blockquote-surface: var(--muted);
  --table-header-surface: var(--muted);
  --diff-addition-bg: 142 65% 45% / 0.18;
  --diff-addition-fg: 142 60% 75%;
  --diff-deletion-bg: 0 70% 52% / 0.20;
  --diff-deletion-fg: 0 80% 78%;
  --browser-host-surface: var(--content-area);
  --success: 142 65% 45%;
  --success-foreground: 0 0% 100%;
  --warning: 38 92% 50%;
  --warning-foreground: 26 83% 14%;
  --info: var(--primary);
  --info-foreground: var(--primary-foreground);
}
`,u0=`/* ===== Mist Paper Dark（雾纸暖灰）皮肤 =====
 *
 * 皮肤文件 = :root token 表 + 特例规则。
 * token 表是完整自描述：所有颜色/表面 token 在此赋值，未定义 token 继承
 * globals.css 的 :root / .dark 默认值（几何/阴影等通常不必重复）。
 * 公共组件规则（选中态、滚动条等）在 skin-base.css 中引用这些 token，
 * 皮肤作者无需了解内部类名。
 */

:root {
  /* ===== 基底色板 =====
   * 用户校准后的暖雾石墨：低饱和暖灰，保证主画布、框架与浮层可辨。
   */
  --background: 35 3.3333333333333335% 16%;
  --foreground: 35 3.3333333333333335% 71%;
  /* 对话正文专用 token：用户校准为比通用文字更柔和时可独立维护。 */
  --mist-paper-message-foreground: 35 3.3333333333333335% 71%;
  --muted: 35 3.3333333333333335% 19%;
  --muted-foreground: 35 3.3333333333333335% 55%;
  --border: 35 3.3333333333333335% 29%;
  --input: 35 3.3333333333333335% 29%;
  --ring: 221 18% 62%;
  --primary: 221 18% 38%;
  --primary-foreground: 0 0% 100%;
  --secondary: 35 3.3333333333333335% 19%;
  --secondary-foreground: 35 3.3333333333333335% 71%;
  --accent: 35 3.3333333333333335% 24%;
  --accent-foreground: 35 3.3333333333333335% 78%;
  --destructive: 0 58% 50%;
  --destructive-foreground: 0 0% 100%;
  --stop-hover-bg: hsl(0 35% 23%);
  /* 设置页再收一档：Dialog 贴近暖石墨，卡片只保留克制的 3% 层次差。 */
  --card: 35 3.3333333333333335% 25%;
  --card-foreground: 35 3.3333333333333335% 71%;
  --popover: 35 3.3333333333333335% 22%;
  --popover-foreground: 35 3.3333333333333335% 71%;
  --dialog: 35 3.3333333333333335% 22%;
  --dialog-foreground: 35 3.3333333333333335% 71%;
  --content-area: 35 3.3333333333333335% 17%;
  --sidebar-surface: 35 3.3333333333333335% 16%;
  --tabbar-surface: 35 3.3333333333333335% 16%;
  --input-surface: 35 3.3333333333333335% 20%;
  --tab-surface: 35 3.3333333333333335% 25%;
  --tooltip: 35 3.3333333333333335% 29%;
  --tooltip-foreground: 0 0% 98%;
  --tooltip-muted: 35 3.3333333333333335% 76%;
  --code-bg: 35 3.3333333333333335% 15%;
  --dashed-border: 35 3.3333333333333335% 92% / 0.26;
  --dashed-border-hover: 221 18% 62% / 0.68;

  /* ===== 深色化阴影五档（暖石墨专属定制） ===== */
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.34);
  --shadow-sm: 0 2px 5px 0 rgb(0 0 0 / 0.42), inset 0 1px 0 0 hsl(0 0% 100% / 0.045);
  --shadow-md: 0 8px 20px -5px rgb(0 0 0 / 0.52), 0 2px 5px 0 rgb(0 0 0 / 0.32), inset 0 1px 0 0 hsl(0 0% 100% / 0.055);
  --shadow-lg: 0 18px 38px -9px rgb(0 0 0 / 0.60), 0 8px 16px -3px rgb(0 0 0 / 0.40), inset 0 1px 0 0 hsl(0 0% 100% / 0.065);
  --shadow-xl: 0 36px 72px -18px rgb(0 0 0 / 0.68), 0 18px 32px -8px rgb(0 0 0 / 0.50), inset 0 1px 0 0 hsl(0 0% 100% / 0.075);

  /* ===== 输入区代码块（globals: .dark .tiptap pre = muted） ===== */
  --tiptap-pre-bg: 35 3.3333333333333335% 19%;
}

/* ===== 特例规则区（雾纸专属，不 token 化） ===== */

/* 高使用频率表面需要专用 token，避免 backdrop 透明度把输入区混回主画布。 */
.agent-input-surface {
  background-color: hsl(var(--input-surface) / 0.98);
  border-color: hsl(var(--border) / 0.92);
  box-shadow: var(--shadow-md);
}

.agent-input-surface:focus-within {
  border-color: hsl(var(--ring) / 0.72);
  box-shadow: 0 0 0 3px hsl(var(--ring) / 0.14), var(--shadow-md);
}

/* 经典界面：默认以 background 覆盖输入表面，这里恢复专用输入 token。 */
.ui-classic .agent-input-surface {
  background-color: hsl(var(--input-surface)) !important;
}

/* 对话正文独立于设置与全局文字，避免主题正文过亮。代码块仍保留 Shiki 高亮。 */
.message-item .prose {
  --tw-prose-body: hsl(var(--mist-paper-message-foreground));
  --tw-prose-headings: hsl(var(--mist-paper-message-foreground));
  --tw-prose-bold: hsl(var(--mist-paper-message-foreground));
  --tw-prose-bullets: hsl(var(--mist-paper-message-foreground) / 0.7);
  --tw-prose-counters: hsl(var(--mist-paper-message-foreground) / 0.7);
}

.message-item .prose :is(p, li, blockquote, strong, em, h1, h2, h3, h4, h5, h6) {
  color: hsl(var(--mist-paper-message-foreground));
}

/* 已回答但未激活的题目 Tab：温和提示但增加可读底色和边界。 */
.ask-user-banner .ask-user-question-tab-answered {
  background-color: hsl(var(--primary) / 0.32);
  color: hsl(0 0% 96%);
  box-shadow: inset 0 0 0 1px hsl(var(--ring) / 0.28);
}

/* ===== Skin Surface Contract v2 =====
 * 本组将稳定的语义表面映射到本皮肤既有色板；业务组件不得依赖具体色相。 */
:root {
  --shell-surface: var(--background);
  --raised-surface: var(--card);
  --sunken-surface: var(--muted);
  --surface-border: var(--border);
  --surface-border-strong: var(--border);
  --input-hover: var(--muted);
  --control-surface: var(--secondary);
  --control-hover: var(--accent);
  --selected-surface: var(--accent);
  --selected-foreground: var(--accent-foreground);
  --focus-ring: var(--ring);
  --overlay: 0 0% 0%;
  --overlay-foreground: var(--foreground);
  --message-surface: var(--content-area);
  --message-user-surface: var(--secondary);
  --code-fg: var(--foreground);
  --blockquote-surface: var(--muted);
  --table-header-surface: var(--muted);
  --diff-addition-bg: 142 65% 45% / 0.18;
  --diff-addition-fg: 142 60% 75%;
  --diff-deletion-bg: 0 70% 52% / 0.20;
  --diff-deletion-fg: 0 80% 78%;
  --browser-host-surface: var(--content-area);
  --success: 142 65% 45%;
  --success-foreground: 0 0% 100%;
  --warning: 38 92% 50%;
  --warning-foreground: 26 83% 14%;
  --info: var(--primary);
  --info-foreground: var(--primary-foreground);
}
`,c0=`/* ===== Ocean Dark（远山暮霭）皮肤 =====
 *
 * 皮肤文件 = :root token 表 + 特例规则。
 * token 表是完整自描述：所有颜色/表面 token 在此赋值，未定义 token 继承
 * globals.css 的 :root / .dark 默认值（几何/阴影等通常不必重复）。
 * 公共组件规则（选中态、滚动条等）在 skin-base.css 中引用这些 token，
 * 皮肤作者无需了解内部类名。
 */

:root {
  /* ===== 基底色板 ===== */
  --background: 210 12% 13%;            /* 侧边栏：深海玻璃，色相微存 */
  --foreground: 210 14% 92%;
  --content-area: 210 14% 9%;           /* 内容区：最深，专注 */
  --sidebar-surface: 210 12% 13%;
  --tabbar-surface: 210 12% 13%;
  --input-surface: 210 12% 13%;
  --muted: 210 12% 17%;
  --muted-foreground: 210 10% 60%;
  --border: 210 14% 24%;                /* 与背景拉开 11% 亮度，hairline 后可见 */
  --primary: 210 28% 48%;               /* 雾蓝灰主色，对齐 mode-slider 灰度 */
  --primary-foreground: 0 0% 100%;      /* 白字配中性灰蓝 */
  --secondary: 210 12% 17%;
  --secondary-foreground: 210 14% 92%;
  --accent: 210 14% 22%;
  --accent-foreground: 210 35% 70%;     /* 高亮态：雾蓝灰偏亮（选区色源） */
  --ring: 210 35% 60%;                  /* focus：略亮于 primary，保持反馈感 */
  --card: 210 8% 18%;                   /* 卡片：sat 12→8 更中性，亮度 +2 浮起更明显 */
  --card-foreground: 210 14% 92%;
  --input: 210 12% 17%;
  --popover: 210 12% 18%;               /* 弹出层浮 +5% */
  --popover-foreground: 210 14% 92%;
  --dialog: 210 12% 21%;                /* 弹窗最高 +8% */
  --dialog-foreground: 210 14% 92%;
  --destructive: 0 55% 50%;
  --destructive-foreground: 0 0% 98%;
  --stop-hover-bg: hsl(0, 35%, 18%);
  --tooltip: 210 14% 24%;
  --tooltip-foreground: 0 0% 98%;
  --tooltip-muted: 210 14% 72%;
  --code-bg: 210 30% 8%;                /* 代码块背景 - 深海蓝调（保留饱和） */
  --dashed-border: 210 28% 48% / 0.35;
  --dashed-border-hover: 210 28% 48% / 0.55;

  /* ===== 文字选区 =====
   * --primary 在暗背景上太暗，改用明亮的 accent-foreground + 高不透明度。
   */
  --selection-bg: hsl(var(--accent-foreground) / 0.75);
  --selection-color: hsl(var(--background));

  /* ===== 外层缝隙背景 ===== */
  --shell-bg-gradient: linear-gradient(135deg, hsl(210 14% 5%) 0%, hsl(210 12% 7%) 100%);

  /* ===== 模式切换器 ===== */
  --mode-slider-bg: hsl(210 28% 38%);   /* 雾蓝灰，沉静 */
  --mode-slider-shadow: 0 2px 4px rgba(64, 88, 116, 0.35);
  --mode-btn-selected-color: #ffffff;

  /* ===== 选中态（会话/工作区/Tab/自动化入口） ===== */
  --item-selected-bg: hsl(210 14% 22%); /* 低饱和背景，不抢戏 */
  --item-selected-fg: hsl(210 35% 70%); /* 雾蓝灰文字 */

  /* ===== 工作区 Badge ===== */
  --workspace-badge-color: hsl(210 35% 70%);

  /* ===== Dialog 光晕 ===== */
  --dialog-glow-shadow:
    0 0 40px 8px rgba(255, 255, 255, 0.06),
    0 25px 50px -12px rgba(0, 0, 0, 0.5);

  /* ===== 输入区代码块 ===== */
  --tiptap-pre-bg: 210 12% 17%;         /* = muted */

  /* ===== 代码块标题栏 ===== */
  --code-block-header-bg: rgb(26, 34, 43);

  /* ===== Minimap 可见指示器 ===== */
  --minimap-indicator-bg: hsl(210 30% 50%);

  /* ===== 滚动进度条三态 ===== */
  --scroll-thumb-bg: hsl(210 30% 50% / 0.20);
  --scroll-thumb-hover: hsl(210 30% 50% / 0.32);
  --scroll-thumb-active: hsl(210 30% 50% / 0.42);

  /* ===== 计划模式虚线 ===== */
  --plan-mode-stroke-color: hsl(210 30% 50% / 0.7);

  /* ===== ui-classic TabBar 下缘阴影（经典界面） ===== */
  --tabbar-shadow-color: hsl(210 14% 24% / 0.6);
}

/* ===== Skin Surface Contract v2 =====
 * 本组将稳定的语义表面映射到本皮肤既有色板；业务组件不得依赖具体色相。 */
:root {
  --shell-surface: var(--background);
  --raised-surface: var(--card);
  --sunken-surface: var(--muted);
  --surface-border: var(--border);
  --surface-border-strong: var(--border);
  --input-hover: var(--muted);
  --control-surface: var(--secondary);
  --control-hover: var(--accent);
  --selected-surface: var(--accent);
  --selected-foreground: var(--accent-foreground);
  --focus-ring: var(--ring);
  --overlay: 0 0% 0%;
  --overlay-foreground: var(--foreground);
  --message-surface: var(--content-area);
  --message-user-surface: var(--secondary);
  --code-fg: var(--foreground);
  --blockquote-surface: var(--muted);
  --table-header-surface: var(--muted);
  --diff-addition-bg: 142 65% 45% / 0.18;
  --diff-addition-fg: 142 60% 75%;
  --diff-deletion-bg: 0 70% 52% / 0.20;
  --diff-deletion-fg: 0 80% 78%;
  --browser-host-surface: var(--content-area);
  --success: 142 65% 45%;
  --success-foreground: 0 0% 100%;
  --warning: 38 92% 50%;
  --warning-foreground: 26 83% 14%;
  --info: var(--primary);
  --info-foreground: var(--primary-foreground);
}
`,d0=`/* ===== Ocean Light（晴空碧海）皮肤 =====
 *
 * 皮肤文件 = :root token 表 + 特例规则。
 * token 表是完整自描述：所有颜色/表面 token 在此赋值，未定义 token 继承
 * globals.css 的 :root / .dark 默认值（几何/阴影等通常不必重复）。
 * 公共组件规则（选中态、滚动条等）在 skin-base.css 中引用这些 token，
 * 皮肤作者无需了解内部类名。
 */

:root {
  /* ===== 基底色板 ===== */
  --background: 205 35% 94%;            /* #ecf2f7 背景（侧边栏）- 调浅 */
  --foreground: 210 30% 15%;            /* #1b2632 前景文字 */
  --content-area: 205 30% 97%;          /* #f4f7fa 内容区域 */
  --sidebar-surface: 205 35% 94%;
  --tabbar-surface: 205 35% 94%;
  --input-surface: 60 14.3% 98.6%;
  --tab-surface: 205 30% 97%;
  --muted: 205 35% 88%;                 /* #d7e4ef 次要背景 */
  --muted-foreground: 210 15% 40%;      /* #576675 次要文字 */
  --border: 205 30% 82%;                /* #c3d5e5 边框 */
  --primary: 205 50% 50%;               /* #408abf 主色 */
  --primary-foreground: 0 0% 100%;      /* #ffffff 主色前景 */
  --secondary: 205 35% 91%;             /* #e2ebf3 二级背景 */
  --secondary-foreground: 210 30% 20%;  /* #243342 二级前景 */
  --accent: 205 35% 82%;                /* #c1d6e7 强调背景 */
  --accent-foreground: 205 50% 30%;     /* #265373 强调文字 */
  --ring: 205 50% 50%;                  /* #408abf 聚焦环 */
  --card: 205 30% 97%;                  /* #f4f7fa 卡片背景 */
  --card-foreground: 210 30% 15%;       /* #1b2632 卡片前景 */
  --input: 205 35% 91%;                 /* #e2ebf3 输入框背景 */
  --popover: 205 30% 97%;               /* #f4f7fa 弹出层 */
  --popover-foreground: 210 30% 15%;    /* #1b2632 弹出前景 */
  --dialog: 0 0% 100%;                  /* #ffffff 弹窗背景 */
  --dialog-foreground: 210 30% 15%;     /* #1b2632 弹窗前景 */
  --destructive: 0 84.2% 60.2%;         /* #ef4444 危险色 */
  --destructive-foreground: 0 0% 98%;   /* #fafafa 危险前景 */
  --stop-hover-bg: hsla(0, 80%, 60%, 0.12);
  --tooltip: 210 45% 18%;               /* #192e43 Tooltip */
  --tooltip-foreground: 0 0% 98%;       /* #fafafa Tooltip前景 */
  --tooltip-muted: 210 20% 75%;         /* #b3bfcc Tooltip弱 */
  /* 代码块背景 - 蓝调 */
  --code-bg: 210 35% 14%;               /* #172030 深蓝 */
  /* 虚线边框色 */
  --dashed-border: 205 50% 50% / 0.30;
  --dashed-border-hover: 205 50% 50% / 0.45;

  /* ===== 外层缝隙背景 ===== */
  --shell-bg-gradient: linear-gradient(135deg, hsl(205 35% 88%) 0%, hsl(205 30% 91%) 100%);

  /* ===== 模式切换器 ===== */
  --mode-slider-bg: hsl(205 50% 50%);   /* #408abf 主色 */
  --mode-slider-shadow: 0 2px 4px rgba(64, 138, 191, 0.3);
  --mode-btn-selected-color: #ffffff;

  /* ===== 选中态（会话/工作区/Tab/自动化入口） ===== */
  --item-selected-bg: hsl(205 35% 82%); /* 浅蓝色背景 */
  --item-selected-fg: hsl(205 50% 25%); /* 深蓝色文字 */

  /* ===== 工作区 Badge ===== */
  --workspace-badge-color: hsl(205 50% 25%);

  /* ===== 滚动进度条三态 ===== */
  --scroll-thumb-bg: hsl(205 50% 50% / 0.18);
  --scroll-thumb-hover: hsl(205 50% 50% / 0.30);
  --scroll-thumb-active: hsl(205 50% 50% / 0.40);
}

/* ===== Skin Surface Contract v2 =====
 * 本组将稳定的语义表面映射到本皮肤既有色板；业务组件不得依赖具体色相。 */
:root {
  --shell-surface: var(--background);
  --raised-surface: var(--card);
  --sunken-surface: var(--muted);
  --surface-border: var(--border);
  --surface-border-strong: var(--border);
  --input-hover: var(--muted);
  --control-surface: var(--secondary);
  --control-hover: var(--accent);
  --selected-surface: var(--accent);
  --selected-foreground: var(--accent-foreground);
  --focus-ring: var(--ring);
  --overlay: 0 0% 0%;
  --overlay-foreground: var(--foreground);
  --message-surface: var(--content-area);
  --message-user-surface: var(--secondary);
  /* 代码块使用深色背景，不能复用浅色页面正文前景色。 */
  --code-fg: 215 28% 92%;
  --blockquote-surface: var(--muted);
  --table-header-surface: var(--muted);
  --diff-addition-bg: 142 65% 45% / 0.18;
  --diff-addition-fg: 142 60% 75%;
  --diff-deletion-bg: 0 70% 52% / 0.20;
  --diff-deletion-fg: 0 80% 78%;
  --browser-host-surface: var(--content-area);
  --success: 142 65% 45%;
  --success-foreground: 0 0% 100%;
  --warning: 38 92% 50%;
  --warning-foreground: 26 83% 14%;
  --info: var(--primary);
  --info-foreground: var(--primary-foreground);
}
`,f0=`/* ===== Slate Dark（莫兰迪夜）皮肤 =====
 *
 * 皮肤文件 = :root token 表 + 特例规则。
 * token 表是完整自描述：所有颜色/表面 token 在此赋值，未定义 token 继承
 * globals.css 的 :root / .dark 默认值（几何/阴影等通常不必重复）。
 * 公共组件规则（选中态、滚动条等）在 skin-base.css 中引用这些 token，
 * 皮肤作者无需了解内部类名。
 */

:root {
  /* ===== 基底色板 ===== */
  --background: 260 6% 12%;             /* #1d1b20 背景（侧边栏） */
  --foreground: 30 10% 90%;             /* #e9e6e3 温暖前景文字 */
  --content-area: 270 8% 9%;            /* #161418 内容区域 */
  --sidebar-surface: 260 6% 12%;
  --tabbar-surface: 260 6% 12%;
  --input-surface: 260 6% 12%;
  --muted: 260 6% 16%;                  /* #272429 次要背景 */
  --muted-foreground: 30 8% 60%;        /* #9f9690 次要文字 */
  --border: 260 8% 26%;                 /* 26% 与 12% 背景拉开 14%，hairline 后可见 */
  --primary: 15 25% 68%;                /* #c9a89e 淡杏粉主色 */
  --primary-foreground: 270 8% 9%;      /* #161418 主色前景 */
  --secondary: 260 5% 18%;              /* #2c2930 二级背景 */
  --secondary-foreground: 30 10% 88%;   /* #e5e1dc 二级前景 */
  --accent: 200 12% 22%;                /* #303740 淡蓝灰强调背景 */
  --accent-foreground: 200 25% 75%;     /* #a5c4d1 淡天蓝强调文字 */
  --ring: 15 45% 72%;                   /* 焦点：稍鲜活的莫兰迪粉（保留克制感） */
  --card: 260 6% 13%;                   /* #201e22 卡片背景 */
  --card-foreground: 30 10% 90%;        /* #e9e6e3 卡片前景 */
  --input: 260 6% 16%;                  /* #272429 输入框背景 */
  --popover: 260 6% 15%;                /* #252228 弹出层 */
  --popover-foreground: 30 10% 90%;     /* #e9e6e3 弹出前景 */
  --dialog: 260 5% 16%;                 /* #282528 弹窗背景 */
  --dialog-foreground: 30 10% 90%;      /* #e9e6e3 弹窗前景 */
  --destructive: 0 45% 50%;             /* #b8635f 柔和危险色 */
  --destructive-foreground: 0 0% 98%;   /* #fafafa 危险前景 */
  --stop-hover-bg: hsl(0, 25%, 20%);
  --tooltip: 260 8% 22%;                /* #38343d Tooltip */
  --tooltip-foreground: 0 0% 98%;       /* #fafafa Tooltip前景 */
  --tooltip-muted: 30 8% 65%;           /* #aca49d Tooltip弱 */
  /* 代码块背景 - 莫兰迪紫调 */
  --code-bg: 270 10% 10%;               /* #1a171d 淡紫深灰 */
  /* 虚线边框色 */
  --dashed-border: 15 25% 68% / 0.30;
  --dashed-border-hover: 15 25% 68% / 0.45;

  /* ===== 文字选区 =====
   * 保持柔和：不覆写文字色，仅提高背景不透明度。
   */
  --selection-bg: hsl(var(--accent-foreground) / 0.4);

  /* ===== 外层缝隙背景 ===== */
  --shell-bg-gradient: linear-gradient(135deg, hsl(270 10% 7%) 0%, hsl(260 8% 9%) 100%);

  /* ===== 模式切换器 ===== */
  --mode-slider-bg: hsl(15 25% 68%);    /* #c9a89e 淡杏粉主色 */
  --mode-slider-shadow: 0 2px 4px rgba(201, 168, 158, 0.3);
  --mode-btn-selected-color: hsl(270 8% 12%);   /* 深色文字 */

  /* ===== 选中态（会话/工作区/Tab/自动化入口） ===== */
  --item-selected-bg: hsl(260 10% 22%); /* 淡紫灰背景 */
  --item-selected-fg: hsl(15 30% 75%);  /* 淡杏粉文字 */

  /* ===== 工作区 Badge ===== */
  --workspace-badge-color: hsl(15 30% 75%);

  /* ===== Dialog 光晕 ===== */
  --dialog-glow-shadow:
    0 0 40px 8px rgba(255, 255, 255, 0.06),
    0 25px 50px -12px rgba(0, 0, 0, 0.5);

  /* ===== 输入区代码块（globals: .theme-slate-dark .tiptap pre = muted） ===== */
  --tiptap-pre-bg: 260 6% 16%;

  /* ===== 代码块标题栏 ===== */
  --code-block-header-bg: rgb(36, 35, 39);

  /* ===== 滚动进度条三态 ===== */
  --scroll-thumb-bg: hsl(15 25% 68% / 0.18);
  --scroll-thumb-hover: hsl(15 25% 68% / 0.30);
  --scroll-thumb-active: hsl(15 25% 68% / 0.40);

  /* ===== ui-classic TabBar 下缘阴影（经典界面） ===== */
  --tabbar-shadow-color: hsl(260 10% 18% / 0.6);
}

/* ===== Skin Surface Contract v2 =====
 * 本组将稳定的语义表面映射到本皮肤既有色板；业务组件不得依赖具体色相。 */
:root {
  --shell-surface: var(--background);
  --raised-surface: var(--card);
  --sunken-surface: var(--muted);
  --surface-border: var(--border);
  --surface-border-strong: var(--border);
  --input-hover: var(--muted);
  --control-surface: var(--secondary);
  --control-hover: var(--accent);
  --selected-surface: var(--accent);
  --selected-foreground: var(--accent-foreground);
  --focus-ring: var(--ring);
  --overlay: 0 0% 0%;
  --overlay-foreground: var(--foreground);
  --message-surface: var(--content-area);
  --message-user-surface: var(--secondary);
  --code-fg: var(--foreground);
  --blockquote-surface: var(--muted);
  --table-header-surface: var(--muted);
  --diff-addition-bg: 142 65% 45% / 0.18;
  --diff-addition-fg: 142 60% 75%;
  --diff-deletion-bg: 0 70% 52% / 0.20;
  --diff-deletion-fg: 0 80% 78%;
  --browser-host-surface: var(--content-area);
  --success: 142 65% 45%;
  --success-foreground: 0 0% 100%;
  --warning: 38 92% 50%;
  --warning-foreground: 26 83% 14%;
  --info: var(--primary);
  --info-foreground: var(--primary-foreground);
}
`,p0=`/* ===== Slate Light（云朵舞者）皮肤 =====
 *
 * 皮肤文件 = :root token 表 + 特例规则。
 * token 表是完整自描述：所有颜色/表面 token 在此赋值，未定义 token 继承
 * globals.css 的 :root / .dark 默认值（几何/阴影等通常不必重复）。
 * 公共组件规则（选中态、滚动条等）在 skin-base.css 中引用这些 token，
 * 皮肤作者无需了解内部类名。
 */

:root {
  /* ===== 基底色板 ===== */
  --background: 40 6% 88%;              /* #e3e1dc 侧边栏背景（比主题色深） */
  --foreground: 40 8% 18%;              /* #312f2a 前景文字 */
  --content-area: 40 8% 94%;            /* #f0efec 内容区域 */
  --sidebar-surface: 40 6% 88%;
  --tabbar-surface: 40 6% 88%;
  --input-surface: 60 14.3% 98.6%;
  --tab-surface: 40 8% 94%;
  --muted: 40 6% 85%;                   /* #dbd8d2 次要背景 */
  --muted-foreground: 40 5% 45%;        /* #787568 次要文字 */
  --border: 40 6% 80%;                  /* #d0cdc6 边框 */
  --primary: 18 20% 43%;                /* 主色（加深以保证 WCAG AA 4.5:1 对比度） */
  --primary-foreground: 0 0% 100%;      /* #ffffff 主色前景（白色文字） */
  --secondary: 40 6% 90%;               /* #e8e6e2 二级背景 */
  --secondary-foreground: 40 8% 22%;    /* #3c3933 二级前景 */
  --accent: 40 6% 86%;                  /* #dddad4 强调背景 */
  --accent-foreground: 40 10% 30%;      /* #554f44 强调文字 */
  --ring: 18 20% 43%;                   /* 聚焦环（与主色一致） */
  --card: 40 8% 96%;                    /* #f6f5f2 卡片背景 */
  --card-foreground: 40 8% 18%;         /* #312f2a 卡片前景 */
  --input: 40 6% 90%;                   /* #e8e6e2 输入框背景 */
  --popover: 40 8% 96%;                 /* #f6f5f2 弹出层 */
  --popover-foreground: 40 8% 18%;      /* #312f2a 弹出前景 */
  --dialog: 40 8% 94%;                  /* #f0efec 弹窗背景（主题色） */
  --dialog-foreground: 40 8% 18%;       /* #312f2a 弹窗前景 */
  --destructive: 0 65% 50%;             /* #d43c3c 危险色 */
  --destructive-foreground: 0 0% 100%;  /* #ffffff 危险前景 */
  --stop-hover-bg: hsla(0, 60%, 50%, 0.12);
  --tooltip: 40 8% 20%;                 /* #37352e Tooltip */
  --tooltip-foreground: 0 0% 98%;       /* #fafafa Tooltip前景 */
  --tooltip-muted: 40 5% 55%;           /* #928e84 Tooltip弱 */
  /* 代码块背景 - 与主色相近的深暖棕 */
  --code-bg: 18 15% 18%;                /* #362f2b 深暖棕（主色深版） */
  /* 虚线边框色 */
  --dashed-border: 18 20% 50% / 0.40;
  --dashed-border-hover: 18 20% 50% / 0.55;

  /* ===== 文字选区 =====
   * --primary 是淡杏粉，亮背景下需要更高不透明度才看得见。
   */
  --selection-bg: hsl(var(--primary) / 0.6);

  /* ===== 外层缝隙背景 ===== */
  --shell-bg-gradient: linear-gradient(135deg, hsl(40 6% 84%) 0%, hsl(40 6% 86%) 100%);

  /* ===== 模式切换器 ===== */
  --mode-slider-bg: hsl(18 20% 67%);    /* #bda59b RGB(189,165,155) */
  --mode-slider-shadow: 0 2px 4px rgba(189, 165, 155, 0.4);
  --mode-btn-selected-color: #ffffff;

  /* ===== 选中态（会话/工作区/Tab/自动化入口） ===== */
  --item-selected-bg: hsl(40 8% 84%);   /* 温暖灰背景 */
  --item-selected-fg: hsl(40 10% 25%);  /* 深暖灰文字 */

  /* ===== 工作区 Badge ===== */
  --workspace-badge-color: hsl(40 10% 25%);

  /* ===== 滚动进度条三态 ===== */
  --scroll-thumb-bg: hsl(18 20% 67% / 0.22);
  --scroll-thumb-hover: hsl(18 20% 67% / 0.35);
  --scroll-thumb-active: hsl(18 20% 67% / 0.45);

  /* 热力图 0 级格：使用浅色实心填充，保持原有热力图层次。 */
  --heatmap-empty-cell: 40 8% 82%;
}

/* 仅云朵舞者覆盖 0 级格；其他皮肤继续使用组件原有的 bg-muted。 */
html.skin-slate-light .heatmap-empty-cell {
  background-color: hsl(var(--heatmap-empty-cell));
}

/* ===== Skin Surface Contract v2 =====
 * 本组将稳定的语义表面映射到本皮肤既有色板；业务组件不得依赖具体色相。 */
:root {
  --shell-surface: var(--background);
  --raised-surface: var(--card);
  --sunken-surface: var(--muted);
  --surface-border: var(--border);
  --surface-border-strong: var(--border);
  --input-hover: var(--muted);
  --control-surface: var(--secondary);
  --control-hover: var(--accent);
  --selected-surface: var(--accent);
  --selected-foreground: var(--accent-foreground);
  --focus-ring: var(--ring);
  --overlay: 0 0% 0%;
  --overlay-foreground: var(--foreground);
  --message-surface: var(--content-area);
  --message-user-surface: var(--secondary);
  /* 代码块使用深色背景，不能复用浅色页面正文前景色。 */
  --code-fg: 215 28% 92%;
  --blockquote-surface: var(--muted);
  --table-header-surface: var(--muted);
  --diff-addition-bg: 142 65% 45% / 0.18;
  --diff-addition-fg: 142 60% 75%;
  --diff-deletion-bg: 0 70% 52% / 0.20;
  --diff-deletion-fg: 0 80% 78%;
  --browser-host-surface: var(--content-area);
  --success: 142 65% 45%;
  --success-foreground: 0 0% 100%;
  --warning: 38 92% 50%;
  --warning-foreground: 26 83% 14%;
  --info: var(--primary);
  --info-foreground: var(--primary-foreground);
}
`,m0=`/* ===== Terminal Dark（CRT 终端）皮肤 =====
 *
 * 结构：:root token 表 + 特例规则区（终端专属效果不 token 化：
 * 等宽字体、扫描线/辉光、灯珠面板动画、机械风滚动条、全局直角化）。
 * 未定义 token 继承 globals.css 默认值；公共组件规则见 skin-base.css。
 */

:root {
  /* ===== 基底色板 — 近纯黑的极暗暖灰底 ===== */
  --background: 100 6% 5%;              /* #0d0e0c 侧边栏 */
  --foreground: 90 20% 65%;             /* #acb09f 暖黄绿白 */
  --content-area: 100 6% 3%;            /* #080907 内容区：最深 */
  --sidebar-surface: 100 6% 5%;
  --tabbar-surface: 100 6% 5%;
  --input-surface: 100 6% 5%;
  --muted: 100 5% 10%;                  /* #1a1b19 次要背景 */
  --muted-foreground: 90 12% 38%;       /* #636b5e 次要文字 */
  --border: 90 10% 18%;                 /* #2d3029 暗暖边框 */
  --primary: 100 30% 48%;               /* #6b9e52 收敛暖绿 */
  --primary-foreground: 100 6% 5%;      /* 黑字 */
  --secondary: 100 5% 10%;              /* 与 muted 一致 */
  --secondary-foreground: 90 20% 65%;   /* 与 foreground 一致 */
  --accent: 70 20% 18%;                 /* #2d2e24 暖琥珀暗强调 */
  --accent-foreground: 70 35% 58%;      /* #a8a45e 暖琥珀高亮 */
  --ring: 100 35% 42%;                  /* #5b8a3f 聚焦环 */
  --card: 100 6% 7%;                    /* #111210 卡片略高于背景 */
  --card-foreground: 90 20% 65%;
  --input: 100 5% 10%;
  --popover: 100 6% 8%;                 /* #141412 弹出层 */
  --popover-foreground: 90 20% 65%;
  --dialog: 100 6% 10%;                 /* #1a1b18 弹窗 */
  --dialog-foreground: 90 20% 65%;
  --destructive: 10 35% 42%;            /* #9e5546 暖红 */
  --destructive-foreground: 90 20% 65%;
  --stop-hover-bg: hsl(10, 25%, 15%);
  --tooltip: 100 8% 14%;
  --tooltip-foreground: 0 0% 98%;
  --tooltip-muted: 90 15% 48%;
  --code-bg: 100 8% 4%;
  --radius: 2px;                        /* 全局直角：rounded-md = calc(2px - 2px) = 0 */
  --dashed-border: 100 30% 48% / 0.25;
  --dashed-border-hover: 100 30% 48% / 0.40;

  /* ===== 文字选区：亮绿选区 + 黑字 ===== */
  --selection-bg: hsl(var(--primary) / 0.30);
  --selection-color: hsl(var(--background));

  /* ===== 外层缝隙背景 ===== */
  --shell-bg-gradient: linear-gradient(135deg, hsl(100 6% 3%) 0%, hsl(100 8% 5%) 100%);

  /* ===== 选中态（会话/工作区/Tab/自动化入口） ===== */
  --item-selected-bg: hsl(100 10% 16%);
  --item-selected-fg: hsl(var(--primary));

  /* ===== 工作区 Badge ===== */
  --workspace-badge-color: hsl(var(--primary));

  /* ===== Dialog 光晕：暖磷光微光弹窗 ===== */
  --dialog-glow-shadow:
    0 0 40px 8px hsl(var(--primary) / 0.06),
    0 0 80px 4px hsl(var(--primary) / 0.03),
    0 25px 50px -12px rgba(0, 0, 0, 0.5);

  /* ===== 输入区代码块 ===== */
  --tiptap-pre-bg: 100 8% 4%;           /* = code-bg */

  /* ===== 代码块标题栏 ===== */
  --code-block-header-bg: rgb(11, 14, 10);

  /* ===== 计划模式虚线 ===== */
  --plan-mode-stroke-color: hsl(var(--ring) / 0.7);

  /* ===== ui-classic TabBar 下缘阴影（经典界面） ===== */
  --tabbar-shadow-color: hsl(var(--border) / 0.6);
}

/* ===== 特例规则区（终端专属，不 token 化） ===== */

/* 全局等宽字体覆写 */
:root {
  font-family:
    'Cascadia Code', 'Cascadia Mono', 'JetBrainsMono Nerd Font',
    ui-monospace, SFMono-Regular, Menlo, Monaco,
    Consolas, 'Courier New', monospace;
  font-weight: 400;
  font-feature-settings: 'cv11', 'ss01', 'ss03', 'tnum', 'calt';
}

/* ===== CRT 扫描线 / 暗角 ===== */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 1px,
    rgba(30, 35, 20, 0.18) 1px,
    rgba(30, 35, 20, 0.18) 2px
  );
  animation: crt-flicker 8s infinite steps(10);
  will-change: opacity;
  transform: translateZ(0);
}

body::after {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;
  background: radial-gradient(
    ellipse at center,
    transparent 60%,
    rgba(0, 0, 0, 0.45) 100%
  );
  will-change: opacity;
  transform: translateZ(0);
}

@keyframes crt-flicker {
  0%   { opacity: 0.97; }
  5%   { opacity: 1.0; }
  10%  { opacity: 0.98; }
  15%  { opacity: 1.0; }
  20%  { opacity: 0.96; }
  30%  { opacity: 1.0; }
  50%  { opacity: 0.98; }
  70%  { opacity: 1.0; }
  80%  { opacity: 0.97; }
  90%  { opacity: 1.0; }
  100% { opacity: 0.98; }
}

@media (prefers-reduced-motion: reduce) {
  body::before { animation: none; }
  body::after { background: none; }
  .text-foreground,
  [class*="text-foreground"],
  .crt-sidebar .text-foreground,
  .crt-sidebar [class*="text-foreground"],
  .model-selector-trigger,
  .text-primary,
  [class*="text-primary"] {
    text-shadow: none;
  }
}

/* ===== 荧光辉光 ===== */
.text-foreground,
[class*="text-foreground"] {
  text-shadow: 0 0 2.5px hsl(90 25% 55% / 0.14), 0 0 1px hsl(90 25% 55% / 0.20);
}

.crt-sidebar .text-foreground,
.crt-sidebar [class*="text-foreground"] {
  color: hsl(90 25% 75%);
  text-shadow: 0 0 3.3px hsl(90 25% 55% / 0.18), 0 0 1.5px hsl(90 25% 55% / 0.28);
}

.model-selector-trigger {
  text-shadow: 0 0 6px hsl(100 40% 45% / 0.25), 0 0 2px hsl(100 40% 45% / 0.40);
}

.text-primary,
[class*="text-primary"] {
  text-shadow: 0 0 8px hsl(100 40% 45% / 0.28), 0 0 3px hsl(100 40% 45% / 0.40);
}

/* ===== 模式切换器：古早指示灯面板 =====
 * 轨道是暗底 + 未点亮灯珠网格；滑块是点亮灯珠面板 + 电磁闪烁。
 * .mode-switcher-track .mode-slider 特异性 (0,3,0) 显式覆盖末尾 [class*="rounded"]
 * catch-all (0,2,0)，防止 border-radius 被直角化。
 */
.mode-switcher-track {
  background-color: hsl(var(--background)) !important;
  background-image:
    radial-gradient(circle, hsl(var(--muted-foreground) / 0.20) 0.5px, transparent 0.5px) !important;
  background-size: 4px 4px !important;
  border: 1px solid hsl(var(--border)) !important;
}

.mode-switcher-track .mode-slider {
  background-color: hsl(100 40% 52%) !important;
  background-image:
    radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px),
    radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.40) 0.5px, transparent 0.5px) !important;
  background-size: 3px 3px, 3px 3px !important;
  background-position: 0 0, 1px 1px !important;
  border: 1px solid hsl(var(--primary) / 0.30) !important;
  border-radius: 2px !important;
  box-shadow:
    0 0 10px hsl(var(--primary) / 0.30),
    0 0 20px hsl(var(--ring) / 0.20),
    inset 0 0 6px hsl(var(--primary) / 0.10) !important;
  animation: indicator-flicker 2.5s infinite steps(15);
}

@keyframes indicator-flicker {
  0%   { opacity: 0.94; }
  12%  { opacity: 0.99; }
  25%  { opacity: 0.96; }
  37%  { opacity: 1.0; }
  50%  { opacity: 0.93; }
  62%  { opacity: 0.98; }
  75%  { opacity: 0.95; }
  87%  { opacity: 0.99; }
  100% { opacity: 0.94; }
}

@media (prefers-reduced-motion: reduce) {
  .mode-switcher-track .mode-slider {
    animation: none;
  }
}

.mode-btn-selected {
  color: #000000 !important;
}

/* ===== 机械风滚动条（覆盖公共三态规则） ===== */
.scroll-progress-track {
  background: transparent !important;
  border-left: none;
}

.scroll-progress-thumb {
  background: linear-gradient(
    90deg,
    hsl(var(--primary) / 0.25),
    hsl(var(--primary) / 0.45),
    hsl(var(--primary) / 0.25)
  ) !important;
  border: 1px solid hsl(var(--primary) / 0.35) !important;
  box-shadow:
    inset 0 3px 0 hsl(var(--primary) / 0.12),
    inset 0 -3px 0 hsl(var(--primary) / 0.12),
    inset 0 6px 0 hsl(var(--primary) / 0.06),
    inset 0 -6px 0 hsl(var(--primary) / 0.06) !important;
  border-radius: 0 !important;
}

.scroll-progress-thumb:hover {
  background: linear-gradient(
    90deg,
    hsl(var(--primary) / 0.35),
    hsl(var(--primary) / 0.55),
    hsl(var(--primary) / 0.35)
  ) !important;
  border-color: hsl(var(--primary) / 0.50) !important;
}

.scroll-progress-thumb-active {
  background: linear-gradient(
    90deg,
    hsl(var(--primary) / 0.45),
    hsl(var(--primary) / 0.65),
    hsl(var(--primary) / 0.45)
  ) !important;
  border-color: hsl(var(--primary) / 0.60) !important;
  box-shadow:
    inset 0 3px 0 hsl(var(--primary) / 0.20),
    inset 0 -3px 0 hsl(var(--primary) / 0.20),
    inset 0 6px 0 hsl(var(--primary) / 0.10),
    inset 0 -6px 0 hsl(var(--primary) / 0.10),
    0 0 8px hsl(var(--primary) / 0.25) !important;
}

/* ===== Minimap 指示器：工业指示灯短条 ===== */
.minimap-visible-indicator {
  background-color: hsl(var(--primary)) !important;
  box-shadow: 0 0 3px hsl(var(--primary) / 0.5), 0 0 6px hsl(var(--primary) / 0.2);
}

/* ===== UI 组件终端化 ===== */

/* 输入框容器：直角实色背景 + 实线边框 */
.agent-input-surface {
  border-radius: 0 !important;
  border: 1px solid hsl(var(--border)) !important;
  border-top-width: 1px !important;
  border-bottom-width: 1px !important;
  border-left-width: 1px !important;
  border-right-width: 1px !important;
  background: hsl(var(--background)) !important;
  backdrop-filter: none !important;
}

/* 设置卡片：纯边框 */
.settings-card {
  background: transparent !important;
  box-shadow: none !important;
  border: 1px solid hsl(var(--border)) !important;
}

/* 按钮：去阴影 */
button {
  box-shadow: none !important;
}

button.bg-primary {
  background: transparent !important;
  border: 1px solid hsl(var(--primary)) !important;
  color: hsl(var(--primary)) !important;
  text-shadow: 0 0 6px hsl(var(--primary) / 0.25);
}
button.bg-primary:hover {
  background: hsl(var(--primary) / 0.12) !important;
  color: hsl(var(--primary)) !important;
}

button.bg-secondary {
  background: transparent !important;
  border: 1px solid hsl(var(--border)) !important;
  color: hsl(var(--foreground)) !important;
}
button.bg-secondary:hover {
  background: hsl(var(--muted)) !important;
}

/* 闪烁光标 */
@keyframes terminal-cursor-blink {
  0%, 50% { caret-color: hsl(100 40% 50%); }
  51%, 100% { caret-color: transparent; }
}

.ProseMirror:focus {
  caret-color: hsl(100 40% 50%);
  animation: terminal-cursor-blink 1s step-end infinite;
}

@media (prefers-reduced-motion: reduce) {
  .ProseMirror:focus {
    animation: none;
  }
}

/* ===== 消息去气泡化：终端 stdout 滚动记录 ===== */
.message-item {
  border-radius: 0 !important;
  padding: 2px 4px !important;
}

.is-user [class*="bg-primary/10"] {
  background: transparent !important;
  border-radius: 0 !important;
  padding: 0 !important;
}

.is-user [class*="bg-gradient-to-t"] {
  background: transparent !important;
}

/* 终端格式时间戳 — [MM/DD HH:MM] */
.message-time::before {
  content: '[';
}
.message-time::after {
  content: ']';
}

/* 置顶用户消息 banner — 去毛玻璃实色 */
.sticky-user-banner {
  backdrop-filter: none !important;
  background: hsl(var(--background)) !important;
  box-shadow: none !important;
  border-color: hsl(var(--border)) !important;
}
.sticky-user-banner:hover {
  background: hsl(var(--muted)) !important;
  border-color: hsl(var(--primary) / 0.35) !important;
}

/* 追问选中项：深绿实底 + 亮绿描边，文案无辉光 */
.ask-user-banner button.ask-user-option-selected {
  background: hsl(100 22% 26%) !important;
  border: 1px solid hsl(100 36% 54%) !important;
  color: hsl(0 0% 100%) !important;
  text-shadow: none !important;
}
.ask-user-banner button.ask-user-option-selected > span {
  color: hsl(0 0% 100%) !important;
  text-shadow: none !important;
}
.ask-user-banner .ask-user-option-description {
  color: hsl(90 18% 72%) !important;
  text-shadow: none !important;
}
.ask-user-banner .ask-user-option-description-selected {
  color: hsl(0 0% 100%) !important;
}
.ask-user-banner button.ask-user-option-focused {
  background: hsl(100 12% 17%) !important;
  color: hsl(0 0% 100%) !important;
}
.ask-user-banner button.ask-user-option-focused > span,
.ask-user-banner .ask-user-option-description-focused {
  color: hsl(0 0% 100%) !important;
  text-shadow: none !important;
}

/* 空态欢迎屏：终端 prompt 前缀 */
.welcome-empty-state h1::before {
  content: '> ';
  color: hsl(var(--primary));
  font-weight: 600;
}

/* ===== 全局直角化 catch-all =====
 * 匹配所有 Tailwind rounded- 类；模式切换器指示灯由
 * .mode-switcher-track .mode-slider (0,3,0) 显式覆盖 (0,2,0)。
 */
[class*="rounded"] {
  border-radius: 0 !important;
}

/* ===== Skin Surface Contract v2 =====
 * 本组将稳定的语义表面映射到本皮肤既有色板；业务组件不得依赖具体色相。 */
:root {
  --shell-surface: var(--background);
  --raised-surface: var(--card);
  --sunken-surface: var(--muted);
  --surface-border: var(--border);
  --surface-border-strong: var(--border);
  --input-hover: var(--muted);
  --control-surface: var(--secondary);
  --control-hover: var(--accent);
  --selected-surface: var(--accent);
  --selected-foreground: var(--accent-foreground);
  --focus-ring: var(--ring);
  --overlay: 0 0% 0%;
  --overlay-foreground: var(--foreground);
  --message-surface: var(--content-area);
  --message-user-surface: var(--secondary);
  --code-fg: var(--foreground);
  --blockquote-surface: var(--muted);
  --table-header-surface: var(--muted);
  --diff-addition-bg: 142 65% 45% / 0.18;
  --diff-addition-fg: 142 60% 75%;
  --diff-deletion-bg: 0 70% 52% / 0.20;
  --diff-deletion-fg: 0 80% 78%;
  --browser-host-surface: var(--content-area);
  --success: 142 65% 45%;
  --success-foreground: 0 0% 100%;
  --warning: 38 92% 50%;
  --warning-foreground: 26 83% 14%;
  --info: var(--primary);
  --info-foreground: var(--primary-foreground);
}
`,h0=""+new URL("preview-DuUMPx1_.webp",import.meta.url).href,g0=""+new URL("preview-CyjUU746.webp",import.meta.url).href,v0="data:image/svg+xml,%3csvg%20width='198'%20height='366'%20viewBox='0%200%20198%20366'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='198'%20height='366'%20rx='16'%20fill='%23211F1D'/%3e%3crect%20x='12'%20y='14'%20width='42'%20height='338'%20rx='9'%20fill='%23292624'/%3e%3crect%20x='19'%20y='25'%20width='18'%20height='5'%20rx='2.5'%20fill='%23ECE8E1'%20fill-opacity='.9'/%3e%3crect%20x='19'%20y='52'%20width='28'%20height='7'%20rx='3.5'%20fill='%23302D29'/%3e%3crect%20x='19'%20y='68'%20width='24'%20height='5'%20rx='2.5'%20fill='%23AAA49C'%20fill-opacity='.64'/%3e%3crect%20x='16'%20y='87'%20width='34'%20height='23'%20rx='6'%20fill='%2337312C'/%3e%3crect%20x='16'%20y='87'%20width='2'%20height='23'%20rx='1'%20fill='%23A0624B'/%3e%3crect%20x='22'%20y='96'%20width='20'%20height='5'%20rx='2.5'%20fill='%23ECE8E1'%20fill-opacity='.88'/%3e%3crect%20x='19'%20y='126'%20width='27'%20height='5'%20rx='2.5'%20fill='%23AAA49C'%20fill-opacity='.5'/%3e%3crect%20x='19'%20y='142'%20width='20'%20height='5'%20rx='2.5'%20fill='%23AAA49C'%20fill-opacity='.4'/%3e%3crect%20x='65'%20y='14'%20width='121'%20height='338'%20rx='10'%20fill='%23181716'/%3e%3crect%20x='77'%20y='29'%20width='42'%20height='6'%20rx='3'%20fill='%23ECE8E1'%20fill-opacity='.9'/%3e%3crect%20x='77'%20y='45'%20width='71'%20height='4'%20rx='2'%20fill='%23AAA49C'%20fill-opacity='.62'/%3e%3crect%20x='77'%20y='76'%20width='75'%20height='42'%20rx='9'%20fill='%23292624'/%3e%3crect%20x='87'%20y='88'%20width='45'%20height='4'%20rx='2'%20fill='%23ECE8E1'%20fill-opacity='.72'/%3e%3crect%20x='87'%20y='101'%20width='55'%20height='4'%20rx='2'%20fill='%23AAA49C'%20fill-opacity='.5'/%3e%3crect%20x='96'%20y='137'%20width='70'%20height='49'%20rx='9'%20fill='%23262321'/%3e%3crect%20x='106'%20y='149'%20width='47'%20height='4'%20rx='2'%20fill='%23ECE8E1'%20fill-opacity='.68'/%3e%3crect%20x='106'%20y='163'%20width='35'%20height='4'%20rx='2'%20fill='%23AAA49C'%20fill-opacity='.48'/%3e%3crect%20x='77'%20y='288'%20width='97'%20height='48'%20rx='11'%20fill='%23262321'%20stroke='%233B3631'/%3e%3crect%20x='88'%20y='304'%20width='50'%20height='4'%20rx='2'%20fill='%23AAA49C'%20fill-opacity='.55'/%3e%3ccircle%20cx='159'%20cy='312'%20r='9'%20fill='%23A0624B'/%3e%3cpath%20d='M156%20312h6M159%20309v6'%20stroke='%23F7F3ED'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",y0=""+new URL("preview-CE0cZTFa.webp",import.meta.url).href,w0=""+new URL("preview-BNIbxSQ3.webp",import.meta.url).href,k0=""+new URL("preview-BaC1l3Pq.webp",import.meta.url).href,S0=""+new URL("preview-Dmx31XVY.webp",import.meta.url).href,x0=""+new URL("preview-Rwftwfwb.png",import.meta.url).href,_0=`<svg xmlns="http://www.w3.org/2000/svg" width="420" height="260" viewBox="0 0 420 260">
  <rect x="4" y="4" width="412" height="252" fill="#fffdf5" stroke="#b8860b" stroke-width="6"/>
  <rect x="16" y="16" width="388" height="228" fill="none" stroke="#d9b45a" stroke-width="2"/>
  <text x="210" y="60" text-anchor="middle" font-size="26" font-weight="bold" fill="#8b5a00">获奖证书（模拟）</text>
  <text x="210" y="105" text-anchor="middle" font-size="17" fill="#333">姓名：张三（模拟）</text>
  <text x="210" y="140" text-anchor="middle" font-size="17" fill="#333">奖项：蓝桥杯省赛</text>
  <text x="210" y="175" text-anchor="middle" font-size="17" fill="#333">等级：二等奖</text>
  <text x="210" y="210" text-anchor="middle" font-size="17" fill="#333">日期：2024-11-20</text>
</svg>`,C0=`<svg xmlns="http://www.w3.org/2000/svg" width="420" height="260" viewBox="0 0 420 260">
  <rect x="4" y="4" width="412" height="252" fill="#fffdf5" stroke="#4a6fa5" stroke-width="6"/>
  <rect x="16" y="16" width="388" height="228" fill="none" stroke="#9db4d6" stroke-width="2"/>
  <text x="210" y="60" text-anchor="middle" font-size="24" font-weight="bold" fill="#28527a">荣誉证书（模拟）</text>
  <text x="210" y="105" text-anchor="middle" font-size="17" fill="#333">姓名：张三（模拟）</text>
  <text x="210" y="140" text-anchor="middle" font-size="17" fill="#333">奖项：优秀学生干部</text>
  <rect x="150" y="152" width="120" height="32" fill="#cccccc" opacity="0.85"/>
  <text x="210" y="175" text-anchor="middle" font-size="15" fill="#666">等级：（遮挡）</text>
  <text x="210" y="215" text-anchor="middle" font-size="17" fill="#333">日期：2024-11-01</text>
  <circle cx="352" cy="200" r="34" fill="none" stroke="#c0392b" stroke-width="3" opacity="0.35"/>
</svg>`,E0=`<svg xmlns="http://www.w3.org/2000/svg" width="420" height="260" viewBox="0 0 420 260">
  <rect x="4" y="4" width="412" height="252" fill="#f7fdf9" stroke="#2e7d54" stroke-width="6"/>
  <rect x="16" y="16" width="388" height="228" fill="none" stroke="#8fc9ad" stroke-width="2"/>
  <text x="210" y="60" text-anchor="middle" font-size="24" font-weight="bold" fill="#1e5b3c">志愿服务证明（模拟）</text>
  <text x="210" y="105" text-anchor="middle" font-size="17" fill="#333">姓名：张三（模拟）</text>
  <text x="210" y="140" text-anchor="middle" font-size="17" fill="#333">项目：社区疫情防控志愿服务</text>
  <text x="210" y="175" text-anchor="middle" font-size="17" fill="#333">类别：志愿服务</text>
  <text x="210" y="210" text-anchor="middle" font-size="17" fill="#333">日期：2024-12-01</text>
</svg>`,T0=`<svg xmlns="http://www.w3.org/2000/svg" width="420" height="260" viewBox="0 0 420 260">
  <rect x="4" y="4" width="412" height="252" fill="#fffdf8" stroke="#7d3c98" stroke-width="6"/>
  <rect x="16" y="16" width="388" height="228" fill="none" stroke="#c9a7e0" stroke-width="2"/>
  <text x="210" y="60" text-anchor="middle" font-size="26" font-weight="bold" fill="#5b2c6f">获奖证书（模拟）</text>
  <text x="210" y="105" text-anchor="middle" font-size="17" fill="#333">姓名：张三（模拟）</text>
  <text x="210" y="140" text-anchor="middle" font-size="17" fill="#333">奖项：校园歌手大赛</text>
  <text x="210" y="175" text-anchor="middle" font-size="17" fill="#333">等级：校级一等奖</text>
  <text x="210" y="210" text-anchor="middle" font-size="17" fill="#333">日期：2026-03-10</text>
</svg>`,bc="序号,申报人,学号,学年,指标类别,项目名称,申报等级,申报分值,获得日期,证明材料",Uc=["1,张三（模拟）,2023123456,2025-2026,智育,学科竞赛-蓝桥杯省赛,一等奖,4,2024-11-20,蓝桥杯获奖证书.svg","2,张三（模拟）,2023123456,2025-2026,智育,学科竞赛-数学建模国赛,国家二等奖,4,2024-10-15,（无）","3,张三（模拟）,2023123456,2025-2026,德育,志愿服务-社区疫情防控志愿,,2,2024-12-01,志愿服务证明.svg","4,张三（模拟）,2023123456,2025-2026,劳育,劳动实践-校园劳动周,,2,2024-12-05,（无）","5,张三（模拟）,2023123456,2025-2026,美育,文体活动-校园歌手大赛,校级一等奖,2,2026-03-10,校园歌手大赛证书.svg","6,张三（模拟）,2023123456,2025-2026,其他,荣誉称号-优秀学生干部,,2,2024-11-01,优秀学生干部证书.svg"];function me(i,u,a,h){const p={id:i,kind:u,text:a,page:1};return u==="image"&&(p.imageAlt=(h==null?void 0:h.imageAlt)??""),p}function ze(i,u){return u?{documentId:i,blockId:u,page:1,precision:"block"}:{documentId:i,page:1,precision:"page"}}function el(i){return{id:i.id,fileName:i.fileName,role:"evidence",mimeType:"image/svg+xml",sizeBytes:new TextEncoder().encode(i.svg).length,parseStatus:"parsed",blocks:[me(i.blockId,"image","",{imageAlt:i.imageAlt})],origin:"fixture",importedAt:i.importedAt}}function P0(){const i=new Date().toISOString(),u=[me("blk-rule-001","heading","学生综合素质测评实施办法（模拟）"),me("blk-rule-002","paragraph","（演示数据，虚构文件，不作为任何真实审核依据）适用学年：2025-2026。"),me("blk-rule-003","heading","第一章 准入条件"),me("blk-rule-004","paragraph","申报本学年综合素质测评加分的学生，须满足本学年无挂科、无违纪记录的准入条件。"),me("blk-rule-005","heading","第二章 指标分类"),me("blk-rule-006","list-item","综合素质测评指标分为德育、智育、体育、美育、劳育五类。"),me("blk-rule-007","list-item","学科竞赛与学术创新成果计入智育类；志愿服务计入德育类；劳动实践计入劳育类；文体活动计入美育类。"),me("blk-rule-008","heading","第三章 等级分值"),me("blk-rule-009","list-item","学科竞赛：国家级一等奖 6 分、二等奖 4 分、三等奖 2 分。"),me("blk-rule-010","list-item","学科竞赛：省级一等奖 4 分、二等奖 2.5 分、三等奖 1.5 分。"),me("blk-rule-011","list-item","学科竞赛：校级一等奖 2 分、二等奖 1 分、三等奖 0.5 分。"),me("blk-rule-012","heading","第四章 计分上限"),me("blk-rule-013","paragraph","学科竞赛类得分单学年累计不超过 8 分，超出部分不予计入。"),me("blk-rule-014","heading","第五章 互斥与重复申报"),me("blk-rule-015","list-item","同一活动获得多级奖项的，按最高等级计分，不得重复申报。"),me("blk-rule-016","list-item","志愿服务与劳动实践互斥计分：同一事项只能作为其中一类计算，不得双重计分。"),me("blk-rule-017","heading","第六章 时间范围"),me("blk-rule-018","paragraph","仅认可 2024-09-01 至 2025-08-31 期间获得的奖项，区间外获得的奖项不予计分。"),me("blk-rule-019","heading","第七章 材料要求"),me("blk-rule-020","list-item","每项申报须附证书照片或电子证明，无证明材料的申报不予受理。"),me("blk-rule-021","list-item","证书须含姓名、奖项名称、等级、日期四项要素，缺项或无法辨认的转人工复核。")],a={id:"doc-rule-001",fileName:"综合素质测评实施办法（模拟）v2025.md",role:"rule",mimeType:"text/markdown",sizeBytes:new TextEncoder().encode(u.map(D=>D.text).join(`
`)).length,parseStatus:"parsed",blocks:u,origin:"fixture",importedAt:i},h=[me("blk-app-000","heading",bc),...Uc.map((D,j)=>{const F=String(j+1).padStart(3,"0");return me(`blk-app-${F}`,"line",D)})],p=[bc,...Uc].join(`
`),w={id:"doc-app-001",fileName:"综测申报表（模拟）张三.csv",role:"application",mimeType:"text/csv",sizeBytes:new TextEncoder().encode(p).length,parseStatus:"parsed",blocks:h,origin:"fixture",importedAt:i},k=[el({id:"doc-ev-001",fileName:"蓝桥杯省赛获奖证书（模拟）.svg",svg:_0,blockId:"blk-ev-001",imageAlt:"获奖证书（模拟）：姓名 张三（模拟），奖项 蓝桥杯省赛，等级 二等奖，日期 2024-11-20（证书等级为二等奖，与申报表的一等奖不一致）",importedAt:i}),el({id:"doc-ev-002",fileName:"优秀学生干部证书（模拟）.svg",svg:C0,blockId:"blk-ev-002",imageAlt:"荣誉证书（模拟）：姓名 张三（模拟），奖项 优秀学生干部，日期 2024-11-01；印章模糊，等级栏被遮挡，无法辨认等级",importedAt:i}),el({id:"doc-ev-003",fileName:"社区疫情防控志愿服务证明（模拟）.svg",svg:E0,blockId:"blk-ev-003",imageAlt:"志愿服务证明（模拟）：姓名 张三（模拟），项目 社区疫情防控志愿服务，类别 志愿服务，日期 2024-12-01",importedAt:i}),el({id:"doc-ev-004",fileName:"校园歌手大赛获奖证书（模拟）.svg",svg:T0,blockId:"blk-ev-004",imageAlt:"获奖证书（模拟）：姓名 张三（模拟），奖项 校园歌手大赛，等级 校级一等奖，日期 2026-03-10（超出认可时段）",importedAt:i})],_=[a,w,...k],x=[{id:"item-001",title:"学科竞赛 蓝桥杯省赛一等奖",category:"智育",level:"一等奖",declaredScore:4,activityDate:"2024-11-20",organizer:"蓝桥杯大赛组委会（模拟）",anchor:ze("doc-app-001","blk-app-001"),evidenceDocumentIds:["doc-ev-001"],status:"identified",identifiedBy:"fixture"},{id:"item-002",title:"学科竞赛 数学建模国赛国家二等奖",category:"智育",level:"国家二等奖",declaredScore:4,activityDate:"2024-10-15",organizer:"全国大学生数学建模竞赛组委会（模拟）",anchor:ze("doc-app-001","blk-app-002"),evidenceDocumentIds:[],status:"identified",identifiedBy:"fixture"},{id:"item-003",title:"志愿服务 社区疫情防控志愿",category:"德育",declaredScore:2,activityDate:"2024-12-01",organizer:"社区居委会（模拟）",anchor:ze("doc-app-001","blk-app-003"),evidenceDocumentIds:["doc-ev-003"],status:"identified",identifiedBy:"fixture"},{id:"item-004",title:"劳动实践 校园劳动周",category:"劳育",declaredScore:2,activityDate:"2024-12-05",organizer:"学校后勤处（模拟）",anchor:ze("doc-app-001","blk-app-004"),evidenceDocumentIds:[],status:"identified",identifiedBy:"fixture"},{id:"item-005",title:"文体活动 校园歌手大赛校级一等奖",category:"美育",level:"校级一等奖",declaredScore:2,activityDate:"2026-03-10",organizer:"校学生会（模拟）",anchor:ze("doc-app-001","blk-app-005"),evidenceDocumentIds:["doc-ev-004"],status:"identified",identifiedBy:"fixture"},{id:"item-006",title:"荣誉称号 优秀学生干部",category:"其他",declaredScore:2,activityDate:"2024-11-01",organizer:"学生工作处（模拟）",anchor:ze("doc-app-001","blk-app-006"),evidenceDocumentIds:["doc-ev-002"],status:"identified",identifiedBy:"fixture"}],A=[{documentId:"doc-ev-001",recognizedFacts:"蓝桥杯省赛获奖证书（模拟）：张三（模拟），二等奖，2024-11-20",recognizedLevel:"二等奖",parseStatus:"recognized",linkedItemIds:["item-001"]},{documentId:"doc-ev-002",recognizedFacts:"优秀学生干部荣誉证书（模拟）：张三（模拟），2024-11-01；印章模糊，等级栏被遮挡",parseStatus:"unclear",linkedItemIds:["item-006"]},{documentId:"doc-ev-003",recognizedFacts:"社区疫情防控志愿服务证明（模拟）：张三（模拟），志愿服务，2024-12-01",parseStatus:"recognized",linkedItemIds:["item-003"]},{documentId:"doc-ev-004",recognizedFacts:"校园歌手大赛获奖证书（模拟）：张三（模拟），校级一等奖，2026-03-10",recognizedLevel:"校级一等奖",parseStatus:"recognized",linkedItemIds:["item-005"]}],P={id:"rulepack-demo-001",documentId:"doc-rule-001",name:"学生综合素质测评实施办法（模拟）",publisher:"某某大学学生工作处（模拟）",academicYear:"2025-2026",version:"v2025（模拟）",outline:[{id:"outline-001",category:"准入条件",title:"申报准入条件",summary:"本学年无挂科、无违纪记录方可申报加分。",anchors:[ze("doc-rule-001","blk-rule-004")],generatedBy:"fixture"},{id:"outline-002",category:"指标分类",title:"五类指标分类",summary:"测评指标分为德育、智育、体育、美育、劳育五类。",anchors:[ze("doc-rule-001","blk-rule-006"),ze("doc-rule-001","blk-rule-007")],generatedBy:"fixture"},{id:"outline-003",category:"等级分值",title:"学科竞赛获奖等级分值",summary:"国家级一等 6 / 二等 4 / 三等 2 分；省级一等 4 / 二等 2.5 / 三等 1.5 分；校级一等 2 / 二等 1 / 三等 0.5 分。",constraint:{kind:"level-mapping",levels:{国家级一等奖:6,国家级二等奖:4,国家二等奖:4,国家级三等奖:2,省级一等奖:4,省级二等奖:2.5,省级三等奖:1.5,校级一等奖:2,校级二等奖:1,校级三等奖:.5},levelKeywords:{一等奖:"一等奖",二等奖:"二等奖",三等奖:"三等奖"}},anchors:[ze("doc-rule-001","blk-rule-009"),ze("doc-rule-001","blk-rule-010"),ze("doc-rule-001","blk-rule-011")],generatedBy:"fixture"},{id:"outline-004",category:"上限",title:"学科竞赛类单学年累计上限",summary:"学科竞赛类单学年累计不超过 8 分。",constraint:{kind:"max-score",value:8},anchors:[ze("doc-rule-001","blk-rule-013")],generatedBy:"fixture"},{id:"outline-005",category:"互斥",title:"重复申报与互斥计分",summary:"同一活动按最高等级计分且不得重复申报；志愿服务与劳动实践互斥，同一事项只能计一类。",constraint:{kind:"mutual-exclusion",exclusionGroup:"volunteer-labor"},anchors:[ze("doc-rule-001","blk-rule-015"),ze("doc-rule-001","blk-rule-016")],generatedBy:"fixture"},{id:"outline-006",category:"时间范围",title:"奖项认可时间范围",summary:"仅认可 2024-09-01 至 2025-08-31 期间获得的奖项。",constraint:{kind:"date-range",dateFrom:"2024-09-01",dateTo:"2025-08-31"},anchors:[ze("doc-rule-001","blk-rule-018")],generatedBy:"fixture"},{id:"outline-007",category:"材料要求",title:"申报材料要求",summary:"每项申报须附证书照片或电子证明；证书须含姓名、奖项名称、等级、日期。",constraint:{kind:"required-evidence",requiredEvidenceTypes:["certificate"]},anchors:[ze("doc-rule-001","blk-rule-020"),ze("doc-rule-001","blk-rule-021")],generatedBy:"fixture"}],confirmed:!1};return{id:"demo-zhangsan-2026",title:"综测加分审核演示案卷（模拟）· 张三（模拟）",type:"综合测评",applicant:"张三（模拟）",academicYear:"2025-2026",createdAt:i,updatedAt:i,documents:_,rulePacks:[P],items:x,evidences:A,isDemo:!0}}const I0=Object.assign({"../../../CDUT-Studio/apps/electron/resources/skins/forest-dark/manifest.json":Zp,"../../../CDUT-Studio/apps/electron/resources/skins/forest-light/manifest.json":e0,"../../../CDUT-Studio/apps/electron/resources/skins/mist-paper-dark/manifest.json":n0,"../../../CDUT-Studio/apps/electron/resources/skins/ocean-dark/manifest.json":t0,"../../../CDUT-Studio/apps/electron/resources/skins/ocean-light/manifest.json":r0,"../../../CDUT-Studio/apps/electron/resources/skins/slate-dark/manifest.json":o0,"../../../CDUT-Studio/apps/electron/resources/skins/slate-light/manifest.json":l0,"../../../CDUT-Studio/apps/electron/resources/skins/terminal-dark/manifest.json":i0}),Zc=Object.assign({"../../../CDUT-Studio/apps/electron/resources/skins/forest-dark/skin.css":s0,"../../../CDUT-Studio/apps/electron/resources/skins/forest-light/skin.css":a0,"../../../CDUT-Studio/apps/electron/resources/skins/mist-paper-dark/skin.css":u0,"../../../CDUT-Studio/apps/electron/resources/skins/ocean-dark/skin.css":c0,"../../../CDUT-Studio/apps/electron/resources/skins/ocean-light/skin.css":d0,"../../../CDUT-Studio/apps/electron/resources/skins/slate-dark/skin.css":f0,"../../../CDUT-Studio/apps/electron/resources/skins/slate-light/skin.css":p0,"../../../CDUT-Studio/apps/electron/resources/skins/terminal-dark/skin.css":m0}),D0=Object.assign({"../../../CDUT-Studio/apps/electron/resources/skins/forest-dark/preview.webp":h0,"../../../CDUT-Studio/apps/electron/resources/skins/forest-light/preview.webp":g0,"../../../CDUT-Studio/apps/electron/resources/skins/mist-paper-dark/preview.svg":v0,"../../../CDUT-Studio/apps/electron/resources/skins/ocean-dark/preview.webp":y0,"../../../CDUT-Studio/apps/electron/resources/skins/ocean-light/preview.webp":w0,"../../../CDUT-Studio/apps/electron/resources/skins/slate-dark/preview.webp":k0,"../../../CDUT-Studio/apps/electron/resources/skins/slate-light/preview.webp":S0,"../../../CDUT-Studio/apps/electron/resources/skins/terminal-dark/preview.png":x0}),nl=Object.entries(I0).map(([i,u])=>{var h;const a=JSON.parse(u);return{...a,builtin:!0,previewPath:(h=Object.entries(D0).find(([p])=>p.includes(`/${a.id}/`)))==null?void 0:h[1],cssPath:Object.keys(Zc).find(p=>p.includes(`/${a.id}/`))}}).sort((i,u)=>i.name.localeCompare(u.name,"zh-CN")),jr={onboardingCompleted:!0,coachTourVersion:999,tutorialBannerDismissed:!0,themeMode:localStorage.getItem("profer-theme-mode")||"system",themeStyle:localStorage.getItem("profer-theme-style")||"default",interfaceVariant:"classic",agentRuntime:"pi",agentChannelId:"webui-demo",agentModelId:"demo-model",agentChannelIds:["webui-demo"],agentWorkspaceId:"webui-project",markdownFontSize:"medium",uiScale:"standard",notificationsEnabled:!1,notificationSoundEnabled:!1,...JSON.parse(localStorage.getItem("cdut-studio-webui-settings")||"{}")},tl=[];let wt=null;const A0=i=>({id:i.id,title:i.title,type:i.type,applicant:i.applicant,academicYear:i.academicYear,updatedAt:i.updatedAt,isDemo:i.isDemo,documentCount:i.documents.length,domainPackId:i.domainPackId??"comprehensive-assessment"});function N0(){const i=P0(),u=new Date().toISOString(),a=p=>{const w=p.blocks.map(k=>String(k.text??k.imageAlt??"")).join(`
`);return{document:{id:p.id,fileName:p.fileName,role:"evidence",mimeType:p.mimeType,sizeBytes:new TextEncoder().encode(w).length,parseStatus:"parsed",blocks:p.blocks,origin:"fixture",importedAt:u},evidence:{documentId:p.id,recognizedFacts:p.facts,parseStatus:p.status,linkedItemIds:[p.itemId]},itemId:p.itemId}},h=[a({id:"webui-ev-pdf-roster",fileName:"蓝桥杯省赛团队成员名单（模拟）.pdf",mimeType:"application/pdf",itemId:"item-001",facts:"名单列出张三（模拟）为参赛成员；赛事名称与申报一致，但名单本身没有获奖等级。",status:"recognized",blocks:[{id:"webui-pdf-001",kind:"heading",text:"2024 年蓝桥杯省赛团队名单（模拟）",page:1},{id:"webui-pdf-002",kind:"paragraph",text:"赛事组别：软件类省级竞赛；名单共 2 页。",page:1},{id:"webui-pdf-003",kind:"heading",text:"参赛成员（第 2 页）",page:2},{id:"webui-pdf-004",kind:"table-cell",text:"姓名：张三（模拟）　角色：团队成员　队伍编号：LQ-2024-018",page:2,table:{row:2,column:1,sheet:"成员名单"}},{id:"webui-pdf-005",kind:"paragraph",text:"本名单仅用于核对成员身份，获奖等级以正式获奖证书为准。",page:2}]}),a({id:"webui-ev-docx-volunteer",fileName:"社区志愿服务情况证明（模拟）.docx",mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",itemId:"item-003",facts:"证明正文记载张三（模拟）于 2024-12-01 参加社区志愿服务，日期与申报一致。",status:"recognized",blocks:[{id:"webui-docx-001",kind:"heading",text:"志愿服务情况证明（模拟）",page:1},{id:"webui-docx-002",kind:"paragraph",text:"兹证明张三（模拟）于 2024 年 12 月 1 日参加社区服务活动。",page:1},{id:"webui-docx-003",kind:"paragraph",text:"服务内容：秩序引导与物资登记。服务时长：4 小时。",page:1},{id:"webui-docx-004",kind:"paragraph",text:"出具单位：幸福社区居委会（模拟）　经办人：李老师（模拟）",page:1}]}),a({id:"webui-ev-xlsx-labor",fileName:"校园劳动周参与记录（模拟）.xlsx",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",itemId:"item-004",facts:"表格列出张三（模拟）参加劳动周及 4 小时记录；未见组织单位确认或签章，仍需核实证明效力。",status:"unclear",blocks:[{id:"webui-xlsx-001",kind:"heading",text:"劳动周参与明细（模拟）",page:1},{id:"webui-xlsx-002",kind:"table-cell",text:"姓名",page:1,table:{sheet:"参与记录",row:1,column:1}},{id:"webui-xlsx-003",kind:"table-cell",text:"活动日期",page:1,table:{sheet:"参与记录",row:1,column:2}},{id:"webui-xlsx-004",kind:"table-cell",text:"时长（小时）",page:1,table:{sheet:"参与记录",row:1,column:3}},{id:"webui-xlsx-005",kind:"table-cell",text:"张三（模拟）",page:1,table:{sheet:"参与记录",row:2,column:1}},{id:"webui-xlsx-006",kind:"table-cell",text:"2024-12-05",page:1,table:{sheet:"参与记录",row:2,column:2}},{id:"webui-xlsx-007",kind:"table-cell",text:"4",page:1,table:{sheet:"参与记录",row:2,column:3}},{id:"webui-xlsx-008",kind:"paragraph",text:"来源标注：活动签到表汇总；当前样例未附签字页。",page:1}]}),a({id:"webui-ev-html-award",fileName:"校园歌手大赛获奖公示（模拟）.html",mimeType:"text/html",itemId:"item-005",facts:"网页存档记载张三（模拟）获校级一等奖，活动日期为 2026-03-10，与证书一致但晚于规则认可区间。",status:"recognized",blocks:[{id:"webui-html-001",kind:"heading",text:"校园歌手大赛获奖公示（模拟）",page:1},{id:"webui-html-002",kind:"paragraph",text:"发布单位：校学生会（模拟）　发布日期：2026-03-12",page:1},{id:"webui-html-003",kind:"list-item",text:"张三（模拟）　校园歌手大赛　校级一等奖",page:1},{id:"webui-html-004",kind:"paragraph",text:"比赛日期：2026-03-10。此页面为网页存档文本，不代表当前网站仍可访问。",page:1}]}),a({id:"webui-ev-eml-appointment",fileName:"学生干部任职通知（模拟）.eml",mimeType:"message/rfc822",itemId:"item-006",facts:"邮件正文确认张三（模拟）的任职时间；邮件未说明荣誉等级，且发件身份需要人工核实。",status:"unclear",blocks:[{id:"webui-eml-001",kind:"line",text:"From: 学生工作处（模拟） <student-office@example.invalid>",page:1},{id:"webui-eml-002",kind:"line",text:"To: 张三（模拟）",page:1},{id:"webui-eml-003",kind:"line",text:"Date: 2024-11-01",page:1},{id:"webui-eml-004",kind:"line",text:"Subject: 学生干部任职通知（模拟）",page:1},{id:"webui-eml-005",kind:"paragraph",text:"经工作安排，张三（模拟）自 2024 年 11 月起担任班级干部。该邮件未包含评优等级或正式盖章附件。",page:1}]})];return{...i,documents:[...i.documents,...h.map(p=>p.document)],items:i.items.map(p=>{const w=h.filter(k=>k.itemId===p.id).map(k=>k.document.id);return w.length>0?{...p,evidenceDocumentIds:[...p.evidenceDocumentIds,...w]}:p}),evidences:[...i.evidences,...h.map(p=>p.evidence)]}}const vs={id:"webui-project",name:"演示工作区",slug:"webui-demo",type:"personal",createdAt:Date.now()-864e5*14,updatedAt:Date.now()},Xt={id:"webui-session",title:"认识会话工作区",channelId:"webui-demo",modelId:"demo-model",agentRuntime:"pi",workspaceId:vs.id,createdAt:Date.now()-36e5,updatedAt:Date.now(),pinned:!1,archived:!1},Ps={...Xt,id:"webui-session-themes",title:"主题与页面预览",createdAt:Date.now()-864e5*2,updatedAt:Date.now()-864e5},rl={id:"webui-project-teaching",name:"教学质量评估",slug:"webui-teaching-quality",type:"personal",createdAt:Date.now()-864e5*20,updatedAt:Date.now()-864e5*2},ol={id:"webui-project-research",name:"科研项目管理",slug:"webui-research-management",type:"personal",createdAt:Date.now()-864e5*30,updatedAt:Date.now()-864e5*3},Bt=(i,u,a,h)=>{const p=Date.now()-36e5*h;return{...Xt,id:i,title:u,workspaceId:a,createdAt:p,updatedAt:p+6e4}},tn=[Bt("webui-teaching-review","本科教学审核评估材料一致性复核",rl.id,8),Bt("webui-teaching-outcomes","课程目标达成度与持续改进闭环分析",rl.id,20),Bt("webui-teaching-lab-safety","实验课程安全规范与教学大纲核验",rl.id,32),Bt("webui-research-proposal","省级科研项目申报书合规性预审",ol.id,10),Bt("webui-research-budget","科研经费预算结构与采购条款校核",ol.id,22),Bt("webui-research-award","科研成果奖励申报材料证据链审查",ol.id,34)],z0=[{slug:"document-evidence-check",name:"文档证据核验",description:"整理多格式材料中的关键事实、来源位置与相互印证关系。",group:"材料处理",version:"1.2.0",enabled:!0,actualSource:"workspace"},{slug:"course-knowledge-map",name:"课程知识图谱",description:"从课件和讲义提炼章节结构、概念关系与复习问题。",group:"学习支持",version:"1.0.0",enabled:!0,actualSource:"workspace"},{slug:"research-proposal-precheck",name:"科研申报预审",description:"按资格、形式、附件与论证逻辑逐项预检申报材料。",group:"科研管理",version:"0.9.0",enabled:!1,actualSource:"workspace"}],jc=[Xt,Ps,...tn],rt=(i,u,a)=>{const h=i.createdAt;return[{type:"user",message:{content:[{type:"text",text:u}]},parent_tool_use_id:null,session_id:i.id,uuid:`${i.id}-user`,_createdAt:h+1e3},{type:"assistant",message:{content:[{type:"text",text:a}],model:"demo-model"},parent_tool_use_id:null,session_id:i.id,uuid:`${i.id}-assistant`,_createdAt:h+5e3,_channelModelId:"demo-model"}]},L0=rt(Xt,"我刚打开 CDUT Studio 的会话页。这里能调整哪些选项？",`这个演示会话可以从几处浏览功能：

- 左侧的“新会话”和搜索入口；项目下有两条可切换的演示会话，也可以打开已归档列表。
- 输入框工具栏里的模型、权限模式、Agent 预设和思考强度；还可以添加文件或文件夹、管理会话记忆、查看或压缩上下文。
- 顶部工作标签可以切换已打开的会话和文件、浏览器工作页；右侧面板可以展开当前工作区文件。

当前对话、账户和模型都是演示数据。WebUI 不连接模型或本机文件系统；发送、上传等操作不会触达真实服务。`),R0=rt(Ps,"我想用这个 WebUI 做页面演示，主题和页面怎么切换？","打开右下角 WebUI 控制台，可以在对话、规划中心、Agent 技能和 CDUT 专区之间切换，也可以试用浅色、深色、跟随系统以及上游内置皮肤。页面组件沿用 CDUT Studio 上游 renderer；浏览器里的模型、账号和主进程能力由 mock 提供，适合查看和讲解界面，不会调用真实服务。"),M0=new Map([[tn[0].id,rt(tn[0],"请按评估指标核对自评报告、支撑材料和数据表之间是否一致，优先列出可追溯的证据。","建议按“指标点—报告表述—原始支撑材料—数据口径”逐项对照。先检查统计范围和时间口径，再核对附件是否能支持结论；发现差异时记录原文位置、材料版本和需补充的证据。")],[tn[1].id,rt(tn[1],"请分析这门课程的目标达成度，判断改进措施是否形成闭环。","核对课程目标与毕业要求映射、考核项权重、达成度计算口径及原始成绩分布。改进闭环应能对应到具体薄弱目标，说明责任人、实施时间和下一轮验证指标；只有原则性表述时应标记为待补证。")],[tn[2].id,rt(tn[2],"检查实验课程大纲和安全材料，找出开课前必须确认的事项。","优先确认实验风险分级、个人防护要求、危险源与应急措施是否对应，检查大纲中的实验项目、学时和考核方式是否一致。涉及设备或化学品的项目应关联有效的操作规程和培训记录。")],[tn[3].id,rt(tn[3],"请预审这份省级科研项目申请，按资格、形式和论证逻辑整理问题。","先核验申报主体、负责人资格、限项要求和附件完整性，再检查摘要、研究目标、技术路线、进度安排和预期成果是否相互支撑。对需要政策原文判断的资格条件，保留条款出处并标记核验日期。")],[tn[4].id,rt(tn[4],"请检查预算说明、采购清单与项目任务之间的对应关系。","逐项检查预算科目、测算依据、数量单价和研究任务是否匹配；采购条款要关注验收指标、交付时间、知识产权和付款条件。金额或制度口径存在冲突时先列明差异，不据此自动认定违规。")],[tn[5].id,rt(tn[5],"核验成果奖励申报中的获奖证明、成员排序和成果归属是否构成完整证据链。","按成果名称和编号关联申报书、正式获奖文件、成员名单及单位署名页。重点检查奖项级别与授奖主体、排序变更依据、成果完成时间和申报类别；无法从原件确认的信息单独列为人工核验项。")]]),ed={[Xt.id]:L0,[Ps.id]:R0};for(const[i,u]of M0)ed[i]=u;const us={id:"webui-demo",name:"浏览器演示模型",provider:"openai",baseUrl:"https://example.invalid/v1",apiKey:"",enabled:!0,createdAt:Date.now(),updatedAt:Date.now(),models:[{id:"demo-model",name:"WebUI 演示模型",enabled:!0,contextWindow:128e3,maxTokens:8192}]},he=()=>()=>{},Kt=()=>new Proxy({},{get:(i,u)=>{if(typeof u=="string")return u.startsWith("on")?he:/^(list|search|find|query|refresh)/i.test(u)?async()=>[]:u==="getWorkspaceMemorySummary"?async()=>({workspaceProfile:{exists:!1},autoMemory:{fileCount:0}}):u==="getWorkspaceMcpConfig"?async()=>({servers:{}}):u==="getWorkspaceSkills"?async()=>[]:u==="getWorkspaceSkillsDir"?async()=>"/browser-demo/skills":u==="getDefaultSkillSlugs"?async()=>[]:u==="getAccount"?async()=>({status:"active",studentId:"2023000000",studentName:"WebUI 演示用户",college:"演示学院",major:"演示专业",classCode:"演示班级"}):u==="getSavedAccount"?async()=>({hasSaved:!1}):u==="login"?async()=>({success:!1,error:"浏览器 WebUI 使用演示账户，不连接教务认证服务。"}):u==="getStatus"?async()=>({status:"idle"}):u==="getSessions"||u==="listSessions"?async()=>[]:async()=>({ok:!0,success:!0,id:`webui-${Date.now()}`})}}),cs={sessionId:"webui-ai-class-session",courseName:"材料科学与工程：硅酸盐结构",createdAt:Date.now()-36e5,updatedAt:Date.now(),documentCount:0},Fc={id:"tab-home",type:"home",title:"学习概览",closable:!1,data:{}},O0=new Proxy({getTabs:async i=>({sessionId:i,tabs:[Fc],activeTabId:Fc.id}),saveTabs:async()=>({ok:!0}),listDocuments:async()=>[],listArtifacts:async()=>[],getQuiz:async()=>null,getFlashcards:async()=>({cards:[]})},{get(i,u){return u in i?i[u]:Reflect.get(Kt(),u)}}),b0=new Proxy({listSessions:async()=>[cs],createSession:async(i="")=>({...cs,sessionId:`webui-ai-class-${Date.now()}`,courseName:i.trim()||cs.courseName,createdAt:Date.now(),updatedAt:Date.now()}),deleteSession:async()=>({ok:!0})},{get(i,u){return u in i?i[u]:Reflect.get(Kt(),u)}}),dn={activeTabId:"webui-yanhu-tab",tabs:[{id:"webui-yanhu-tab",url:"https://bsdt.cdut.edu.cn/EIP/onewebsitehande/toPersonalCenterPage.htm",title:"成理一网通办",canGoBack:!1,canGoForward:!1,loading:!1}]},U0=new Proxy({initOrRestore:async()=>dn,showView:async()=>dn,hideView:async()=>dn,createTab:async()=>dn,activateTab:async()=>dn,closeTab:async()=>dn,reorderTabs:async()=>dn,navigate:async()=>dn,goBack:async()=>dn,goForward:async()=>dn,reload:async()=>dn,retryWithClean:async()=>dn,syncTheme:async()=>({ok:!0}),updateBounds:async()=>({ok:!0}),petSyncViewport:async()=>({ok:!0})},{get(i,u){return u in i?i[u]:Reflect.get(Kt(),u)}}),Vc=()=>{localStorage.setItem("cdut-studio-webui-settings",JSON.stringify(jr))},j0=new Proxy({getSettings:async()=>({...jr}),getUserProfile:async()=>({userName:"WebUI 演示用户",avatar:"🪷"}),updateSettings:async i=>(Object.assign(jr,i),Vc(),{...jr}),updateSettingsSync:i=>{Object.assign(jr,i),Vc()},listChannels:async()=>[us],listAgentWorkspaces:async()=>[vs,rl,ol],listAgentSessions:async()=>[...jc],createAgentSession:async(i,u,a,h)=>{var k;const p=Date.now(),w={...Xt,id:`webui-session-${p}`,title:i||"新建演示会话",channelId:u||us.id,modelId:h||((k=us.models[0])==null?void 0:k.id),workspaceId:a||vs.id,createdAt:p,updatedAt:p};return jc.unshift(w),w},getAgentSessionSDKMessages:async i=>ed[i]??[],getWorkspaceDirectories:async()=>[],getWorkspaceAttachedFiles:async()=>[],getWorkspaceFilesPath:async()=>"/browser-demo/workspace",getAgentSessionPath:async()=>"/browser-demo/workspace/sessions/webui-session",getWorkspaceHeatmapDaily:async()=>[],listConversations:async()=>[],listTodos:async()=>[],listCalendarEvents:async()=>[],listPlanningGroups:async()=>[],listPlanningTags:async()=>[],listAutomations:async()=>[],listGoals:async()=>[],getWorkspaceMcpConfig:async()=>({servers:{}}),getWorkspaceSkills:async()=>z0,getWorkspaceSkillsDir:async()=>"/browser-demo/skills",getDefaultSkillSlugs:async()=>[],getWorkspaceMemorySummary:async()=>({workspaceProfile:{exists:!1},autoMemory:{fileCount:0}}),getPathForFile:i=>i.name,registerPreviewPath:async i=>i,setReviewAgentAutoApproval:async({enabled:i})=>({enabled:i}),listAgentPresets:async()=>[],listGlobalAgentPresets:async()=>[],listGlobalSkills:async()=>[],getDefaultAgentPreset:async()=>"",getDefaultAgentPresetReference:async()=>null,getOtherWorkspacePresets:async()=>[],getOtherWorkspaceSkills:async()=>[],getAccountCapabilities:async()=>({}),skillMarketplace:Kt(),skillMaster:Kt(),globalSkill:Kt(),study:O0,cdutAiClass:b0,yanhuExpress:U0,getTutorialContent:async()=>`# CDUT Studio 使用教程

这是浏览器演示版。`,getSystemTheme:async()=>matchMedia("(prefers-color-scheme: dark)").matches,getSkins:async()=>nl,refreshSkins:async()=>nl,getSkinCss:async i=>{const u=nl.find(a=>a.id===i);return u!=null&&u.cssPath?Zc[u.cssPath]??null:null},getSkinPreview:async i=>{var u;return((u=nl.find(a=>a.id===i))==null?void 0:u.previewPath)??null},onSystemThemeChanged:he,onThemeSettingsChanged:he,onSkinsChanged:he,onAgentWorkspacesChanged:he,onWorkspaceFilesChanged:he,onCapabilitiesChanged:he,onPlanningChanged:he,onAutomationChanged:he,onFeishuStatusChanged:he,onDingTalkStatusChanged:he,onDesktopNotificationClicked:he,onGoalEvent:he,onAgentStreamEvent:he,onAgentStreamComplete:he,onAgentStreamError:he,onAgentTitleUpdated:he,onAgentSessionUpdated:he,onTodoAgentSessionReady:he,notifyRendererReady:async()=>{},restoreActiveAgentStreams:async()=>[],loadScratchPad:async()=>"",saveScratchPad:async()=>!0,saveScratchPadSync:()=>!0,getFeishuStatus:async()=>({connected:!1}),getFeishuMultiStatus:async()=>[],getDingTalkStatus:async()=>({connected:!1}),getDingTalkMultiStatus:async()=>[],getArchivedCounts:async()=>({conversations:0,agentSessions:0,workspaces:0}),getWorkspaceCapabilities:async()=>({tools:[],skills:[],mcpServers:[]}),getWorkspaceFiles:async()=>[],getProxySettings:async()=>({enabled:!1}),updateProxySettings:async()=>({enabled:!1}),reportFeishuPresence:async()=>{},setDockBadgeCount:async()=>{},showDesktopNotification:async()=>{},windowMinimize:async()=>{},windowMaximize:async()=>{},windowClose:async()=>{},openExternal:async()=>{},cdutZone:new Proxy({},{get:(i,u)=>{if(typeof u=="string")return u.startsWith("on")?he:u==="getAccount"?async()=>({status:"active",studentId:"2023000000",studentName:"WebUI 演示用户",college:"演示学院",major:"演示专业",classCode:"演示班级"}):u==="getSavedAccount"?async()=>({hasSaved:!1}):u==="login"?async()=>({success:!1,error:"浏览器 WebUI 使用演示账户，不连接教务认证服务。"}):/^(list|search|find|query|refresh)/i.test(u)?async()=>[]:async()=>({ok:!0,success:!0})}}),sse:{connect:async()=>{},disconnect:async()=>{},onEvent:he},team:new Proxy({},{get:(i,u)=>String(u).startsWith("on")?he:async()=>[]})},{get(i,u){if(u in i)return i[u];if(typeof u=="string")return u.startsWith("on")?he:/^(list|search|find|query|refresh)/i.test(u)?async()=>[]:/^(create|update|rename|toggle|set|delete|remove|archive|restore|mark|clear|save|add|import|export|open|show|hide|focus|copy|move|attach|detach|activate|cancel|stop|retry|start|complete|finish|submit|resolve|read|write|report|test|check|download|upload)/i.test(u)?async()=>({ok:!0,id:`webui-${Date.now()}`}):async()=>({})}}),F0=new Proxy({listCases:async()=>tl.map(A0),getCase:async i=>tl.find(u=>u.id===i),loadDemoCase:async()=>(wt||(wt=N0()),tl.some(i=>i.id===(wt==null?void 0:wt.id))||tl.push(wt),wt),getLatestRun:async()=>({run:null,inputStale:!1}),getModelGatewayStatus:async()=>({available:!1,protocol:"none",reason:"浏览器 WebUI 不连接审核模型"}),onImportProgress:he,getModuleSettingsV2:async()=>({agentModelSelection:null,autoApproval:!1}),listCasesV2:async()=>[],listTemplateVersionsV2:async()=>[],listTemplatesV2:async()=>[],listArchivedTemplatesV2:async()=>[],listBatchesV2:async()=>[],listRunsV2:async()=>[],listAssignmentsV2:async()=>[],getRunObservationsV2:async()=>[],getWorkspaceRunValidityV2:async()=>!1,getAggregateV2:async()=>{},getTemplateV2:async()=>{},getPiReviewSessionV2:async()=>null,bootCheckV2:async()=>({templatesSeeded:0,templatesPublished:0,migratableCases:[],notes:["浏览器预览模式"]}),saveModuleSettingsV2:async i=>i},{get(i,u){if(u in i)return i[u];if(typeof u=="string")return/^(list|search|find|query|refresh)/i.test(u)?async()=>[]:/^(get|open)/i.test(u)?async()=>{}:async()=>({ok:!0,success:!0,id:`webui-${Date.now()}`})}});function V0(){Object.defineProperty(window,"electronAPI",{configurable:!0,value:j0}),Object.defineProperty(window,"reviewAPI",{configurable:!0,value:F0})}const sl="classic",om="medium",lm="standard",im=1,nd="profer-theme-mode",td="profer-theme-style",rd="profer-interface-variant",od="cdut-skin-tone";function ld(){try{const i=localStorage.getItem(od);if(i==="dark"||i==="light")return i}catch{}return null}function W0(i){try{localStorage.setItem(od,i)}catch{}}function H0(){try{const i=localStorage.getItem(nd);if(i==="light"||i==="dark"||i==="system"||i==="special")return i}catch{}return"system"}function $0(){try{const i=localStorage.getItem(td);if(i&&/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(i))return i}catch{}return"default"}function ys(i){try{localStorage.setItem(nd,i)}catch{}}function ws(i){try{localStorage.setItem(td,i)}catch{}}const Gt=Tn(H0()),Yt=Tn($0());function Q0(){try{const i=localStorage.getItem(rd);if(i==="classic"||i==="modern")return i==="modern"?"classic":i}catch{}return sl}function ks(i){try{localStorage.setItem(rd,i)}catch{}}const Wc=Tn(Q0());var $c;const Ss=Tn(typeof window<"u"?(($c=window.matchMedia)==null?void 0:$c.call(window,"(prefers-color-scheme: dark)").matches)??!0:!0),xs=Tn([]),sm=Tn(i=>{if(i(Gt)!=="special")return null;const u=i(Yt);return u==="default"?null:u});function _s(i){return i.endsWith("-light")?"light":"dark"}const am=Tn(i=>{var a;const u=i(Gt);if(u==="system")return i(Ss)?"dark":"light";if(u==="special"){const h=i(Yt),p=(a=i(xs).find(k=>k.id===h))==null?void 0:a.tone;if(p)return p;const w=ld();return w||_s(h)}return u});let ot=null;async function Is(i=!1){if(ot&&!i)return ot;try{const u=i?await window.electronAPI.refreshSkins():await window.electronAPI.getSkins();return ot=u,kt().set(xs,u),u}catch{return ot=[],kt().set(xs,[]),[]}}const Fr="skin-css";let Hc=0,On=null;const B0=Tn(0);function um(i){if(!i||typeof document>"u")return Promise.resolve();const u=document.getElementById(Fr);return(u==null?void 0:u.dataset.skinId)===i&&u.textContent?Promise.resolve():(On==null?void 0:On.skinId)===i?On.promise:Promise.resolve()}function Ds(i,u=!1){const a=K0(i,u).finally(()=>{(On==null?void 0:On.promise)===a&&(On=null),kt().set(B0,h=>h+1)});return On={skinId:i,promise:a},a}async function K0(i,u){const a=document.documentElement,h=++Hc;if(!u){const k=document.getElementById(Fr);if(k&&k.dataset.skinId===i&&k.textContent)return}const p=await window.electronAPI.getSkinCss(i).catch(()=>null);if(h!==Hc)return;if(!p){a.classList.contains(`skin-${i}`)&&a.classList.remove(`skin-${i}`);return}let w=document.getElementById(Fr);w||(w=document.createElement("style"),w.id=Fr,document.head.appendChild(w)),w.dataset.skinId=i,w.textContent=p}async function cm(i){const u=await Is(!0);return i&&u.some(a=>a.id===i)&&await Ds(i,!0),u}async function dm(i){const u=kt(),a=await Is(!0),h=u.get(Gt),p=u.get(Yt);h!=="special"||p==="default"||(i.deletedId&&i.deletedId===p?(await Promise.all([Cs("dark"),Es("default")]),al("dark","default")):a.some(w=>w.id===p)&&await Ds(p,!0))}function al(i,u="default",a=!0){var S;const h=document.documentElement;let p=null,w=null,k;if(i==="special"&&u!=="default"){const P=ot==null?void 0:ot.find(D=>D.id===u);if(P)w=`skin-${u}`,k=P.tone==="dark",W0(P.tone),Ds(u);else if(ot===null){const D=ld();w=`skin-${u}`,k=(D??_s(u))==="dark"}else k=_s(u)==="dark"}else i==="system"?k=a:k=i==="dark";const _=h.classList.contains("dark"),x=Array.from(h.classList).find(P=>P.startsWith("theme-"))??null,A=Array.from(h.classList).find(P=>P.startsWith("skin-"))??null;_===k&&x===p&&A===w||(x!==p&&x&&h.classList.remove(x),A!==w&&(A&&h.classList.remove(A),w?h.classList.add(w):(S=document.getElementById(Fr))==null||S.remove()),_!==k&&h.classList.toggle("dark",k))}function G0(i=sl){const u=document.documentElement,a=i==="classic"?"ui-classic":"ui-modern",h=u.classList.contains("ui-classic")?"ui-classic":u.classList.contains("ui-modern")?"ui-modern":null;h!==a&&(h&&u.classList.remove(h),u.classList.add(a))}async function fm(i,u,a,h){const[p]=await Promise.all([window.electronAPI.getSettings(),Is()]);i(p.themeMode),ys(p.themeMode),a&&p.themeStyle&&(a(p.themeStyle),ws(p.themeStyle));const w=p.interfaceVariant||sl;h&&h(w),ks(w);const k=await window.electronAPI.getSystemTheme();u(k),al(p.themeMode,p.themeStyle||"default",k);const _=window.electronAPI.onSystemThemeChanged(A=>{u(A)}),x=window.electronAPI.onThemeSettingsChanged(A=>{const S=A.themeMode,P=A.themeStyle||"default",D=A.interfaceVariant||sl;i(S),ys(S),a&&(a(P),ws(P)),h&&(h(D),ks(D))});return()=>{_(),x()}}async function Cs(i){ys(i),await window.electronAPI.updateSettings({themeMode:i})}async function Es(i){ws(i),await window.electronAPI.updateSettings({themeStyle:i})}async function Y0(i){ks(i),await window.electronAPI.updateSettings({interfaceVariant:i})}const tt=kt(),X0=[["mist-paper-dark","雾纸暖灰"],["ocean-light","晴空碧海"],["ocean-dark","Ocean Dark"],["forest-light","森息晨光"],["forest-dark","森息夜语"],["slate-light","云朵舞者"],["slate-dark","莫兰迪夜"],["terminal-dark","旧屏微光"]],J0=[["conversations","对话"],["planning","规划中心"],["agent-skills","Agent 技能"],["cdut-zone","CDUT 专区"]];function q0(){const[i,u]=Vr.useState(new URLSearchParams(location.search).get("webuiTools")==="1"),a=Ur(gs),h=Ur(Gt),p=Ur(Yt),w=Ur(Wc);if(!i)return de.jsx("button",{className:"webui-tools-launcher",onClick:()=>u(!0),title:"打开 WebUI 预览控制台",children:"WebUI"});const k=S=>{tt.set(Gt,S),tt.set(Yt,"default"),Cs(S),Es("default"),al(S,"default",tt.get(Ss))},_=S=>{tt.set(Gt,"special"),tt.set(Yt,S),Cs("special"),Es(S),al("special",S,tt.get(Ss))},x=S=>{tt.set(Wc,S),Y0(S),G0(S)},A=S=>{tt.set(gs,S)};return de.jsxs("aside",{className:"webui-tools-panel","aria-label":"WebUI 预览控制台",children:[de.jsxs("header",{children:[de.jsx("strong",{children:"WebUI 预览"}),de.jsx("button",{onClick:()=>u(!1),"aria-label":"收起预览控制台",children:"收起"})]}),de.jsxs("label",{children:["页面",de.jsx("select",{value:a,onChange:S=>A(S.target.value),children:J0.map(([S,P])=>de.jsx("option",{value:S,children:P},S))})]}),de.jsxs("label",{children:["基础主题",de.jsxs("select",{value:h==="special"?"special":h,onChange:S=>S.target.value!=="special"&&k(S.target.value),children:[de.jsx("option",{value:"system",children:"跟随系统"}),de.jsx("option",{value:"light",children:"浅色"}),de.jsx("option",{value:"dark",children:"深色"}),de.jsx("option",{value:"special",disabled:!0,children:"皮肤（在下方选择）"})]})]}),de.jsxs("label",{children:["项目皮肤",de.jsxs("select",{value:h==="special"?p:"default",onChange:S=>S.target.value!=="default"&&_(S.target.value),children:[de.jsx("option",{value:"default",children:"默认"}),X0.map(([S,P])=>de.jsx("option",{value:S,children:P},S))]})]}),de.jsxs("label",{children:["界面样式",de.jsxs("select",{value:w,onChange:S=>x(S.target.value),children:[de.jsx("option",{value:"classic",children:"经典"}),de.jsx("option",{value:"modern",children:"现代"})]})]}),de.jsx("small",{children:"页面和文案来自上游渲染器；这里的模型、账户及写入操作仅保存在当前浏览器。"})]})}V0();const __r06Showcase=installShowcase({store:kt(),viewAtom:gs,themeAtom:Gt,styleAtom:Yt,applyTheme:al});const ds=new URLSearchParams(location.search).get("view");ds&&["conversations","planning","agent-skills","cdut-zone"].includes(ds)&&kt().set(gs,ds);ip(()=>import("./main-Dqivs-S6.js").then(i=>i.cJ),__vite__mapDeps([0,1]),import.meta.url).then(()=>{if(__r06Showcase)return;const i=document.createElement("div");i.id="webui-preview-controls",document.body.appendChild(i),gp.createRoot(i).render(de.jsx(Vr.StrictMode,{children:de.jsx(q0,{})}))}).catch(i=>{console.error("[WebUI] 上游渲染器加载失败",i);const u=document.getElementById("root");u&&(u.innerHTML='<main style="padding:32px;font:14px system-ui;color:#b42318">WebUI 加载失败，请查看终端中的 Vite 错误。</main>')});export{Vr as $,Wc as A,im as B,lm as C,om as D,sm as E,B0 as F,um as G,gp as H,fm as I,dm as J,G0 as K,nm as R,ip as _,Ur as a,Tn as b,hp as c,tm as d,Qc as e,Z0 as f,em as g,Yt as h,xs as i,de as j,Cs as k,Es as l,al as m,cm as n,Jc as o,pp as p,qp as q,lt as r,Ss as s,Gt as t,Gp as u,kt as v,rm as w,gs as x,am as y,Ts as z};
