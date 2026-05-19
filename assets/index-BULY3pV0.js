function hv(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function pv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zu={exports:{}},Xa={},Vu={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function mv(){if(gm)return xt;gm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function x(F,ee,Oe){this.props=F,this.context=ee,this.refs=R,this.updater=Oe||y}x.prototype.isReactComponent={},x.prototype.setState=function(F,ee){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ee,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function S(){}S.prototype=x.prototype;function C(F,ee,Oe){this.props=F,this.context=ee,this.refs=R,this.updater=Oe||y}var L=C.prototype=new S;L.constructor=C,T(L,x.prototype),L.isPureReactComponent=!0;var N=Array.isArray,V=Object.prototype.hasOwnProperty,D={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function A(F,ee,Oe){var He,Ie={},le=null,Se=null;if(ee!=null)for(He in ee.ref!==void 0&&(Se=ee.ref),ee.key!==void 0&&(le=""+ee.key),ee)V.call(ee,He)&&!z.hasOwnProperty(He)&&(Ie[He]=ee[He]);var me=arguments.length-2;if(me===1)Ie.children=Oe;else if(1<me){for(var Ue=Array(me),Qe=0;Qe<me;Qe++)Ue[Qe]=arguments[Qe+2];Ie.children=Ue}if(F&&F.defaultProps)for(He in me=F.defaultProps,me)Ie[He]===void 0&&(Ie[He]=me[He]);return{$$typeof:r,type:F,key:le,ref:Se,props:Ie,_owner:D.current}}function U(F,ee){return{$$typeof:r,type:F.type,key:ee,ref:F.ref,props:F.props,_owner:F._owner}}function Y(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function O(F){var ee={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Oe){return ee[Oe]})}var Z=/\/+/g;function ce(F,ee){return typeof F=="object"&&F!==null&&F.key!=null?O(""+F.key):ee.toString(36)}function de(F,ee,Oe,He,Ie){var le=typeof F;(le==="undefined"||le==="boolean")&&(F=null);var Se=!1;if(F===null)Se=!0;else switch(le){case"string":case"number":Se=!0;break;case"object":switch(F.$$typeof){case r:case e:Se=!0}}if(Se)return Se=F,Ie=Ie(Se),F=He===""?"."+ce(Se,0):He,N(Ie)?(Oe="",F!=null&&(Oe=F.replace(Z,"$&/")+"/"),de(Ie,ee,Oe,"",function(Qe){return Qe})):Ie!=null&&(Y(Ie)&&(Ie=U(Ie,Oe+(!Ie.key||Se&&Se.key===Ie.key?"":(""+Ie.key).replace(Z,"$&/")+"/")+F)),ee.push(Ie)),1;if(Se=0,He=He===""?".":He+":",N(F))for(var me=0;me<F.length;me++){le=F[me];var Ue=He+ce(le,me);Se+=de(le,ee,Oe,Ue,Ie)}else if(Ue=g(F),typeof Ue=="function")for(F=Ue.call(F),me=0;!(le=F.next()).done;)le=le.value,Ue=He+ce(le,me++),Se+=de(le,ee,Oe,Ue,Ie);else if(le==="object")throw ee=String(F),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return Se}function j(F,ee,Oe){if(F==null)return F;var He=[],Ie=0;return de(F,He,"","",function(le){return ee.call(Oe,le,Ie++)}),He}function re(F){if(F._status===-1){var ee=F._result;ee=ee(),ee.then(function(Oe){(F._status===0||F._status===-1)&&(F._status=1,F._result=Oe)},function(Oe){(F._status===0||F._status===-1)&&(F._status=2,F._result=Oe)}),F._status===-1&&(F._status=0,F._result=ee)}if(F._status===1)return F._result.default;throw F._result}var k={current:null},q={transition:null},Q={ReactCurrentDispatcher:k,ReactCurrentBatchConfig:q,ReactCurrentOwner:D};function se(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:j,forEach:function(F,ee,Oe){j(F,function(){ee.apply(this,arguments)},Oe)},count:function(F){var ee=0;return j(F,function(){ee++}),ee},toArray:function(F){return j(F,function(ee){return ee})||[]},only:function(F){if(!Y(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},xt.Component=x,xt.Fragment=t,xt.Profiler=o,xt.PureComponent=C,xt.StrictMode=s,xt.Suspense=h,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,xt.act=se,xt.cloneElement=function(F,ee,Oe){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var He=T({},F.props),Ie=F.key,le=F.ref,Se=F._owner;if(ee!=null){if(ee.ref!==void 0&&(le=ee.ref,Se=D.current),ee.key!==void 0&&(Ie=""+ee.key),F.type&&F.type.defaultProps)var me=F.type.defaultProps;for(Ue in ee)V.call(ee,Ue)&&!z.hasOwnProperty(Ue)&&(He[Ue]=ee[Ue]===void 0&&me!==void 0?me[Ue]:ee[Ue])}var Ue=arguments.length-2;if(Ue===1)He.children=Oe;else if(1<Ue){me=Array(Ue);for(var Qe=0;Qe<Ue;Qe++)me[Qe]=arguments[Qe+2];He.children=me}return{$$typeof:r,type:F.type,key:Ie,ref:le,props:He,_owner:Se}},xt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},xt.createElement=A,xt.createFactory=function(F){var ee=A.bind(null,F);return ee.type=F,ee},xt.createRef=function(){return{current:null}},xt.forwardRef=function(F){return{$$typeof:f,render:F}},xt.isValidElement=Y,xt.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:re}},xt.memo=function(F,ee){return{$$typeof:p,type:F,compare:ee===void 0?null:ee}},xt.startTransition=function(F){var ee=q.transition;q.transition={};try{F()}finally{q.transition=ee}},xt.unstable_act=se,xt.useCallback=function(F,ee){return k.current.useCallback(F,ee)},xt.useContext=function(F){return k.current.useContext(F)},xt.useDebugValue=function(){},xt.useDeferredValue=function(F){return k.current.useDeferredValue(F)},xt.useEffect=function(F,ee){return k.current.useEffect(F,ee)},xt.useId=function(){return k.current.useId()},xt.useImperativeHandle=function(F,ee,Oe){return k.current.useImperativeHandle(F,ee,Oe)},xt.useInsertionEffect=function(F,ee){return k.current.useInsertionEffect(F,ee)},xt.useLayoutEffect=function(F,ee){return k.current.useLayoutEffect(F,ee)},xt.useMemo=function(F,ee){return k.current.useMemo(F,ee)},xt.useReducer=function(F,ee,Oe){return k.current.useReducer(F,ee,Oe)},xt.useRef=function(F){return k.current.useRef(F)},xt.useState=function(F){return k.current.useState(F)},xt.useSyncExternalStore=function(F,ee,Oe){return k.current.useSyncExternalStore(F,ee,Oe)},xt.useTransition=function(){return k.current.useTransition()},xt.version="18.3.1",xt}var xm;function wf(){return xm||(xm=1,Vu.exports=mv()),Vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function gv(){if(vm)return Xa;vm=1;var r=wf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var _,v={},g=null,y=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(y=h.ref);for(_ in h)s.call(h,_)&&!l.hasOwnProperty(_)&&(v[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:f,key:g,ref:y,props:v,_owner:o.current}}return Xa.Fragment=t,Xa.jsx=u,Xa.jsxs=u,Xa}var _m;function xv(){return _m||(_m=1,zu.exports=gv()),zu.exports}var E=xv(),Ne=wf();const vv=pv(Ne),_v=hv({__proto__:null,default:vv},[Ne]);var ml={},Gu={exports:{}},Bn={},Hu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function Sv(){return Sm||(Sm=1,(function(r){function e(q,Q){var se=q.length;q.push(Q);e:for(;0<se;){var F=se-1>>>1,ee=q[F];if(0<o(ee,Q))q[F]=Q,q[se]=ee,se=F;else break e}}function t(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var Q=q[0],se=q.pop();if(se!==Q){q[0]=se;e:for(var F=0,ee=q.length,Oe=ee>>>1;F<Oe;){var He=2*(F+1)-1,Ie=q[He],le=He+1,Se=q[le];if(0>o(Ie,se))le<ee&&0>o(Se,Ie)?(q[F]=Se,q[le]=se,F=le):(q[F]=Ie,q[He]=se,F=He);else if(le<ee&&0>o(Se,se))q[F]=Se,q[le]=se,F=le;else break e}}return Q}function o(q,Q){var se=q.sortIndex-Q.sortIndex;return se!==0?se:q.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var h=[],p=[],_=1,v=null,g=3,y=!1,T=!1,R=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(q){for(var Q=t(p);Q!==null;){if(Q.callback===null)s(p);else if(Q.startTime<=q)s(p),Q.sortIndex=Q.expirationTime,e(h,Q);else break;Q=t(p)}}function N(q){if(R=!1,L(q),!T)if(t(h)!==null)T=!0,re(V);else{var Q=t(p);Q!==null&&k(N,Q.startTime-q)}}function V(q,Q){T=!1,R&&(R=!1,S(A),A=-1),y=!0;var se=g;try{for(L(Q),v=t(h);v!==null&&(!(v.expirationTime>Q)||q&&!O());){var F=v.callback;if(typeof F=="function"){v.callback=null,g=v.priorityLevel;var ee=F(v.expirationTime<=Q);Q=r.unstable_now(),typeof ee=="function"?v.callback=ee:v===t(h)&&s(h),L(Q)}else s(h);v=t(h)}if(v!==null)var Oe=!0;else{var He=t(p);He!==null&&k(N,He.startTime-Q),Oe=!1}return Oe}finally{v=null,g=se,y=!1}}var D=!1,z=null,A=-1,U=5,Y=-1;function O(){return!(r.unstable_now()-Y<U)}function Z(){if(z!==null){var q=r.unstable_now();Y=q;var Q=!0;try{Q=z(!0,q)}finally{Q?ce():(D=!1,z=null)}}else D=!1}var ce;if(typeof C=="function")ce=function(){C(Z)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,j=de.port2;de.port1.onmessage=Z,ce=function(){j.postMessage(null)}}else ce=function(){x(Z,0)};function re(q){z=q,D||(D=!0,ce())}function k(q,Q){A=x(function(){q(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(q){q.callback=null},r.unstable_continueExecution=function(){T||y||(T=!0,re(V))},r.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<q?Math.floor(1e3/q):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(q){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var se=g;g=Q;try{return q()}finally{g=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(q,Q){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var se=g;g=q;try{return Q()}finally{g=se}},r.unstable_scheduleCallback=function(q,Q,se){var F=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?F+se:F):se=F,q){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=se+ee,q={id:_++,callback:Q,priorityLevel:q,startTime:se,expirationTime:ee,sortIndex:-1},se>F?(q.sortIndex=se,e(p,q),t(h)===null&&q===t(p)&&(R?(S(A),A=-1):R=!0,k(N,se-F))):(q.sortIndex=ee,e(h,q),T||y||(T=!0,re(V))),q},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(q){var Q=g;return function(){var se=g;g=Q;try{return q.apply(this,arguments)}finally{g=se}}}})(Wu)),Wu}var ym;function yv(){return ym||(ym=1,Hu.exports=Sv()),Hu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function Mv(){if(Mm)return Bn;Mm=1;var r=wf(),e=yv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function g(n){return h.call(v,n)?!0:h.call(_,n)?!1:p.test(n)?v[n]=!0:(_[n]=!0,!1)}function y(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||y(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,d,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,C);x[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,C);x[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,C);x[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var N=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),D=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),O=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),k=Symbol.for("react.offscreen"),q=Symbol.iterator;function Q(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,F;function ee(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Oe=!1;function He(n,i){if(!n||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){c=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}n()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var d=oe.stack.split(`
`),m=c.stack.split(`
`),w=d.length-1,I=m.length-1;1<=w&&0<=I&&d[w]!==m[I];)I--;for(;1<=w&&0<=I;w--,I--)if(d[w]!==m[I]){if(w!==1||I!==1)do if(w--,I--,0>I||d[w]!==m[I]){var B=`
`+d[w].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=w&&0<=I);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ee(n):""}function Ie(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=He(n.type,!1),n;case 11:return n=He(n.type.render,!1),n;case 1:return n=He(n.type,!0),n;default:return""}}function le(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case z:return"Fragment";case D:return"Portal";case U:return"Profiler";case A:return"StrictMode";case ce:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case Y:return(n._context.displayName||"Context")+".Provider";case Z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case j:return i=n.displayName||null,i!==null?i:le(n.type)||"Memo";case re:i=n._payload,n=n._init;try{return le(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Ue(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Je(n){n._valueTracker||(n._valueTracker=Qe(n))}function Ut(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function wt(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Dt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function Xt(n,i){dt(n,i);var a=me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?hn(n,i.type,a):i.hasOwnProperty("defaultValue")&&hn(n,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ft(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function hn(n,i,a){(i!=="number"||ut(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var H=Array.isArray;function Ot(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+me(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function ft(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Rt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(H(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:me(a)}}function Le(n,i){var a=me(i.value),c=me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function zt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function P(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?P(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $,he=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for($=$||document.createElement("div"),$.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ge(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function ue(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function pe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ue(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Fe=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(n,i){if(i){if(Fe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ae(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ee=null;function nt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var st=null,pt=null,G=null;function Te(n){if(n=Na(n)){if(typeof st!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Po(i),st(n.stateNode,n.type,i))}}function fe(n){pt?G?G.push(n):G=[n]:pt=n}function ke(){if(pt){var n=pt,i=G;if(G=pt=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function Ce(n,i){return n(i)}function xe(){}var Xe=!1;function at(n,i,a){if(Xe)return n(i,a);Xe=!0;try{return Ce(n,i,a)}finally{Xe=!1,(pt!==null||G!==null)&&(xe(),ke())}}function It(n,i){var a=n.stateNode;if(a===null)return null;var c=Po(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Tt=!1;if(f)try{var An={};Object.defineProperty(An,"passive",{get:function(){Tt=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Tt=!1}function Qn(n,i,a,c,d,m,w,I,B){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(_e){this.onError(_e)}}var Fi=!1,fs=null,Or=!1,hs=null,Oi={onError:function(n){Fi=!0,fs=n}};function ua(n,i,a,c,d,m,w,I,B){Fi=!1,fs=null,Qn.apply(Oi,arguments)}function ho(n,i,a,c,d,m,w,I,B){if(ua.apply(this,arguments),Fi){if(Fi){var oe=fs;Fi=!1,fs=null}else throw Error(t(198));Or||(Or=!0,hs=oe)}}function yi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function kr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function da(n){if(yi(n)!==n)throw Error(t(188))}function ps(n){var i=n.alternate;if(!i){if(i=yi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return da(d),n;if(m===c)return da(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var w=!1,I=d.child;I;){if(I===a){w=!0,a=d,c=m;break}if(I===c){w=!0,c=d,a=m;break}I=I.sibling}if(!w){for(I=m.child;I;){if(I===a){w=!0,a=m,c=d;break}if(I===c){w=!0,c=m,a=d;break}I=I.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function fa(n){return n=ps(n),n!==null?ha(n):null}function ha(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ha(n);if(i!==null)return i;n=n.sibling}return null}var po=e.unstable_scheduleCallback,mo=e.unstable_cancelCallback,cc=e.unstable_shouldYield,uc=e.unstable_requestPaint,qt=e.unstable_now,dc=e.unstable_getCurrentPriorityLevel,pa=e.unstable_ImmediatePriority,b=e.unstable_UserBlockingPriority,X=e.unstable_NormalPriority,ae=e.unstable_LowPriority,te=e.unstable_IdlePriority,J=null,Re=null;function Ge(n){if(Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(J,n,void 0,(n.current.flags&128)===128)}catch{}}var be=Math.clz32?Math.clz32:ot,qe=Math.log,Ze=Math.LN2;function ot(n){return n>>>=0,n===0?32:31-(qe(n)/Ze|0)|0}var lt=64,$e=4194304;function St(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function kt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,w=a&268435455;if(w!==0){var I=w&~d;I!==0?c=St(I):(m&=w,m!==0&&(c=St(m)))}else w=a&~d,w!==0?c=St(w):m!==0&&(c=St(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-be(i),d=1<<a,c|=n[a],i&=~d;return c}function Wt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-be(m),I=1<<w,B=d[w];B===-1?((I&a)===0||(I&c)!==0)&&(d[w]=Wt(I,i)):B<=i&&(n.expiredLanes|=I),m&=~I}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ze(){var n=lt;return lt<<=1,(lt&4194240)===0&&(lt=64),n}function pn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function mt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-be(i),n[i]=a}function Ln(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-be(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Dn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-be(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var gt=0;function ki(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ct,Vt,oi,Nt,li,Mi=!1,Br=[],rr=null,sr=null,ar=null,ma=new Map,ga=new Map,or=[],U0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jf(n,i){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":ma.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ga.delete(i.pointerId)}}function xa(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Na(i),i!==null&&Vt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function F0(n,i,a,c,d){switch(i){case"focusin":return rr=xa(rr,n,i,a,c,d),!0;case"dragenter":return sr=xa(sr,n,i,a,c,d),!0;case"mouseover":return ar=xa(ar,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return ma.set(m,xa(ma.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,ga.set(m,xa(ga.get(m)||null,n,i,a,c,d)),!0}return!1}function eh(n){var i=zr(n.target);if(i!==null){var a=yi(i);if(a!==null){if(i=a.tag,i===13){if(i=kr(a),i!==null){n.blockedOn=i,li(n.priority,function(){oi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function go(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=hc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ee=c,a.target.dispatchEvent(c),Ee=null}else return i=Na(a),i!==null&&Vt(i),n.blockedOn=a,!1;i.shift()}return!0}function th(n,i,a){go(n)&&a.delete(i)}function O0(){Mi=!1,rr!==null&&go(rr)&&(rr=null),sr!==null&&go(sr)&&(sr=null),ar!==null&&go(ar)&&(ar=null),ma.forEach(th),ga.forEach(th)}function va(n,i){n.blockedOn===i&&(n.blockedOn=null,Mi||(Mi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,O0)))}function _a(n){function i(d){return va(d,n)}if(0<Br.length){va(Br[0],n);for(var a=1;a<Br.length;a++){var c=Br[a];c.blockedOn===n&&(c.blockedOn=null)}}for(rr!==null&&va(rr,n),sr!==null&&va(sr,n),ar!==null&&va(ar,n),ma.forEach(i),ga.forEach(i),a=0;a<or.length;a++)c=or[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<or.length&&(a=or[0],a.blockedOn===null);)eh(a),a.blockedOn===null&&or.shift()}var ms=N.ReactCurrentBatchConfig,xo=!0;function k0(n,i,a,c){var d=gt,m=ms.transition;ms.transition=null;try{gt=1,fc(n,i,a,c)}finally{gt=d,ms.transition=m}}function B0(n,i,a,c){var d=gt,m=ms.transition;ms.transition=null;try{gt=4,fc(n,i,a,c)}finally{gt=d,ms.transition=m}}function fc(n,i,a,c){if(xo){var d=hc(n,i,a,c);if(d===null)Pc(n,i,c,vo,a),Jf(n,c);else if(F0(d,n,i,a,c))c.stopPropagation();else if(Jf(n,c),i&4&&-1<U0.indexOf(n)){for(;d!==null;){var m=Na(d);if(m!==null&&Ct(m),m=hc(n,i,a,c),m===null&&Pc(n,i,c,vo,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Pc(n,i,c,null,a)}}var vo=null;function hc(n,i,a,c){if(vo=null,n=nt(c),n=zr(n),n!==null)if(i=yi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=kr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return vo=n,null}function nh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dc()){case pa:return 1;case b:return 4;case X:case ae:return 16;case te:return 536870912;default:return 16}default:return 16}}var lr=null,pc=null,_o=null;function ih(){if(_o)return _o;var n,i=pc,a=i.length,c,d="value"in lr?lr.value:lr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===d[m-c];c++);return _o=d.slice(n,1<c?1-c:void 0)}function So(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function yo(){return!0}function rh(){return!1}function Hn(n){function i(a,c,d,m,w){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?yo:rh,this.isPropagationStopped=rh,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=Hn(gs),Sa=se({},gs,{view:0,detail:0}),z0=Hn(Sa),gc,xc,ya,Mo=se({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ya&&(ya&&n.type==="mousemove"?(gc=n.screenX-ya.screenX,xc=n.screenY-ya.screenY):xc=gc=0,ya=n),gc)},movementY:function(n){return"movementY"in n?n.movementY:xc}}),sh=Hn(Mo),V0=se({},Mo,{dataTransfer:0}),G0=Hn(V0),H0=se({},Sa,{relatedTarget:0}),vc=Hn(H0),W0=se({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),j0=Hn(W0),X0=se({},gs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),q0=Hn(X0),Y0=se({},gs,{data:0}),ah=Hn(Y0),$0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Z0[n])?!!i[n]:!1}function _c(){return Q0}var J0=se({},Sa,{key:function(n){if(n.key){var i=$0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=So(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?K0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(n){return n.type==="keypress"?So(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?So(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ex=Hn(J0),tx=se({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=Hn(tx),nx=se({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),ix=Hn(nx),rx=se({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=Hn(rx),ax=se({},Mo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ox=Hn(ax),lx=[9,13,27,32],Sc=f&&"CompositionEvent"in window,Ma=null;f&&"documentMode"in document&&(Ma=document.documentMode);var cx=f&&"TextEvent"in window&&!Ma,lh=f&&(!Sc||Ma&&8<Ma&&11>=Ma),ch=" ",uh=!1;function dh(n,i){switch(n){case"keyup":return lx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function ux(n,i){switch(n){case"compositionend":return fh(i);case"keypress":return i.which!==32?null:(uh=!0,ch);case"textInput":return n=i.data,n===ch&&uh?null:n;default:return null}}function dx(n,i){if(xs)return n==="compositionend"||!Sc&&dh(n,i)?(n=ih(),_o=pc=lr=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return lh&&i.locale!=="ko"?null:i.data;default:return null}}var fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!fx[n.type]:i==="textarea"}function ph(n,i,a,c){fe(c),i=bo(i,"onChange"),0<i.length&&(a=new mc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ea=null,wa=null;function hx(n){Lh(n,0)}function Eo(n){var i=Ms(n);if(Ut(i))return n}function px(n,i){if(n==="change")return i}var mh=!1;if(f){var yc;if(f){var Mc="oninput"in document;if(!Mc){var gh=document.createElement("div");gh.setAttribute("oninput","return;"),Mc=typeof gh.oninput=="function"}yc=Mc}else yc=!1;mh=yc&&(!document.documentMode||9<document.documentMode)}function xh(){Ea&&(Ea.detachEvent("onpropertychange",vh),wa=Ea=null)}function vh(n){if(n.propertyName==="value"&&Eo(wa)){var i=[];ph(i,wa,n,nt(n)),at(hx,i)}}function mx(n,i,a){n==="focusin"?(xh(),Ea=i,wa=a,Ea.attachEvent("onpropertychange",vh)):n==="focusout"&&xh()}function gx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Eo(wa)}function xx(n,i){if(n==="click")return Eo(i)}function vx(n,i){if(n==="input"||n==="change")return Eo(i)}function _x(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ci=typeof Object.is=="function"?Object.is:_x;function Ta(n,i){if(ci(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!ci(n[d],i[d]))return!1}return!0}function _h(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sh(n,i){var a=_h(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_h(a)}}function yh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?yh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Mh(){for(var n=window,i=ut();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ut(n.document)}return i}function Ec(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Sx(n){var i=Mh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&yh(a.ownerDocument.documentElement,a)){if(c!==null&&Ec(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Sh(a,m);var w=Sh(a,c);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yx=f&&"documentMode"in document&&11>=document.documentMode,vs=null,wc=null,Aa=null,Tc=!1;function Eh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tc||vs==null||vs!==ut(c)||(c=vs,"selectionStart"in c&&Ec(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Aa&&Ta(Aa,c)||(Aa=c,c=bo(wc,"onSelect"),0<c.length&&(i=new mc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=vs)))}function wo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var _s={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},Ac={},wh={};f&&(wh=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function To(n){if(Ac[n])return Ac[n];if(!_s[n])return n;var i=_s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in wh)return Ac[n]=i[a];return n}var Th=To("animationend"),Ah=To("animationiteration"),bh=To("animationstart"),Ch=To("transitionend"),Rh=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(n,i){Rh.set(n,i),l(i,[n])}for(var bc=0;bc<Ph.length;bc++){var Cc=Ph[bc],Mx=Cc.toLowerCase(),Ex=Cc[0].toUpperCase()+Cc.slice(1);cr(Mx,"on"+Ex)}cr(Th,"onAnimationEnd"),cr(Ah,"onAnimationIteration"),cr(bh,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(Ch,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function Nh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ho(c,i,void 0,n),n.currentTarget=null}function Lh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var w=c.length-1;0<=w;w--){var I=c[w],B=I.instance,oe=I.currentTarget;if(I=I.listener,B!==m&&d.isPropagationStopped())break e;Nh(d,I,oe),m=B}else for(w=0;w<c.length;w++){if(I=c[w],B=I.instance,oe=I.currentTarget,I=I.listener,B!==m&&d.isPropagationStopped())break e;Nh(d,I,oe),m=B}}}if(Or)throw n=hs,Or=!1,hs=null,n}function Gt(n,i){var a=i[Fc];a===void 0&&(a=i[Fc]=new Set);var c=n+"__bubble";a.has(c)||(Dh(i,n,2,!1),a.add(c))}function Rc(n,i,a){var c=0;i&&(c|=4),Dh(a,n,c,i)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Ca(n){if(!n[Ao]){n[Ao]=!0,s.forEach(function(a){a!=="selectionchange"&&(wx.has(a)||Rc(a,!1,n),Rc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ao]||(i[Ao]=!0,Rc("selectionchange",!1,i))}}function Dh(n,i,a,c){switch(nh(i)){case 1:var d=k0;break;case 4:d=B0;break;default:d=fc}a=d.bind(null,i,a,n),d=void 0,!Tt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Pc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;w=w.return}for(;I!==null;){if(w=zr(I),w===null)return;if(B=w.tag,B===5||B===6){c=m=w;continue e}I=I.parentNode}}c=c.return}at(function(){var oe=m,_e=nt(a),ye=[];e:{var ve=Rh.get(n);if(ve!==void 0){var Ve=mc,je=n;switch(n){case"keypress":if(So(a)===0)break e;case"keydown":case"keyup":Ve=ex;break;case"focusin":je="focus",Ve=vc;break;case"focusout":je="blur",Ve=vc;break;case"beforeblur":case"afterblur":Ve=vc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=G0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=ix;break;case Th:case Ah:case bh:Ve=j0;break;case Ch:Ve=sx;break;case"scroll":Ve=z0;break;case"wheel":Ve=ox;break;case"copy":case"cut":case"paste":Ve=q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=oh}var Ye=(i&4)!==0,Jt=!Ye&&n==="scroll",K=Ye?ve!==null?ve+"Capture":null:ve;Ye=[];for(var W=oe,ie;W!==null;){ie=W;var we=ie.stateNode;if(ie.tag===5&&we!==null&&(ie=we,K!==null&&(we=It(W,K),we!=null&&Ye.push(Ra(W,we,ie)))),Jt)break;W=W.return}0<Ye.length&&(ve=new Ve(ve,je,null,a,_e),ye.push({event:ve,listeners:Ye}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",ve&&a!==Ee&&(je=a.relatedTarget||a.fromElement)&&(zr(je)||je[Bi]))break e;if((Ve||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ve?(je=a.relatedTarget||a.toElement,Ve=oe,je=je?zr(je):null,je!==null&&(Jt=yi(je),je!==Jt||je.tag!==5&&je.tag!==6)&&(je=null)):(Ve=null,je=oe),Ve!==je)){if(Ye=sh,we="onMouseLeave",K="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=oh,we="onPointerLeave",K="onPointerEnter",W="pointer"),Jt=Ve==null?ve:Ms(Ve),ie=je==null?ve:Ms(je),ve=new Ye(we,W+"leave",Ve,a,_e),ve.target=Jt,ve.relatedTarget=ie,we=null,zr(_e)===oe&&(Ye=new Ye(K,W+"enter",je,a,_e),Ye.target=ie,Ye.relatedTarget=Jt,we=Ye),Jt=we,Ve&&je)t:{for(Ye=Ve,K=je,W=0,ie=Ye;ie;ie=Ss(ie))W++;for(ie=0,we=K;we;we=Ss(we))ie++;for(;0<W-ie;)Ye=Ss(Ye),W--;for(;0<ie-W;)K=Ss(K),ie--;for(;W--;){if(Ye===K||K!==null&&Ye===K.alternate)break t;Ye=Ss(Ye),K=Ss(K)}Ye=null}else Ye=null;Ve!==null&&Ih(ye,ve,Ve,Ye,!1),je!==null&&Jt!==null&&Ih(ye,Jt,je,Ye,!0)}}e:{if(ve=oe?Ms(oe):window,Ve=ve.nodeName&&ve.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&ve.type==="file")var Ke=px;else if(hh(ve))if(mh)Ke=vx;else{Ke=gx;var et=mx}else(Ve=ve.nodeName)&&Ve.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ke=xx);if(Ke&&(Ke=Ke(n,oe))){ph(ye,Ke,a,_e);break e}et&&et(n,ve,oe),n==="focusout"&&(et=ve._wrapperState)&&et.controlled&&ve.type==="number"&&hn(ve,"number",ve.value)}switch(et=oe?Ms(oe):window,n){case"focusin":(hh(et)||et.contentEditable==="true")&&(vs=et,wc=oe,Aa=null);break;case"focusout":Aa=wc=vs=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,Eh(ye,a,_e);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":Eh(ye,a,_e)}var tt;if(Sc)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else xs?dh(n,a)&&(rt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(lh&&a.locale!=="ko"&&(xs||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&xs&&(tt=ih()):(lr=_e,pc="value"in lr?lr.value:lr.textContent,xs=!0)),et=bo(oe,rt),0<et.length&&(rt=new ah(rt,n,null,a,_e),ye.push({event:rt,listeners:et}),tt?rt.data=tt:(tt=fh(a),tt!==null&&(rt.data=tt)))),(tt=cx?ux(n,a):dx(n,a))&&(oe=bo(oe,"onBeforeInput"),0<oe.length&&(_e=new ah("onBeforeInput","beforeinput",null,a,_e),ye.push({event:_e,listeners:oe}),_e.data=tt))}Lh(ye,i)})}function Ra(n,i,a){return{instance:n,listener:i,currentTarget:a}}function bo(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=It(n,a),m!=null&&c.unshift(Ra(n,m,d)),m=It(n,i),m!=null&&c.push(Ra(n,m,d))),n=n.return}return c}function Ss(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ih(n,i,a,c,d){for(var m=i._reactName,w=[];a!==null&&a!==c;){var I=a,B=I.alternate,oe=I.stateNode;if(B!==null&&B===c)break;I.tag===5&&oe!==null&&(I=oe,d?(B=It(a,m),B!=null&&w.unshift(Ra(a,B,I))):d||(B=It(a,m),B!=null&&w.push(Ra(a,B,I)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var Tx=/\r\n?/g,Ax=/\u0000|\uFFFD/g;function Uh(n){return(typeof n=="string"?n:""+n).replace(Tx,`
`).replace(Ax,"")}function Co(n,i,a){if(i=Uh(i),Uh(n)!==i&&a)throw Error(t(425))}function Ro(){}var Nc=null,Lc=null;function Dc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,bx=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,Cx=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(n){return Fh.resolve(null).then(n).catch(Rx)}:Ic;function Rx(n){setTimeout(function(){throw n})}function Uc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),_a(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);_a(i)}function ur(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Oh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Ei="__reactFiber$"+ys,Pa="__reactProps$"+ys,Bi="__reactContainer$"+ys,Fc="__reactEvents$"+ys,Px="__reactListeners$"+ys,Nx="__reactHandles$"+ys;function zr(n){var i=n[Ei];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Bi]||a[Ei]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Oh(n);n!==null;){if(a=n[Ei])return a;n=Oh(n)}return i}n=a,a=n.parentNode}return null}function Na(n){return n=n[Ei]||n[Bi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Po(n){return n[Pa]||null}var Oc=[],Es=-1;function dr(n){return{current:n}}function Ht(n){0>Es||(n.current=Oc[Es],Oc[Es]=null,Es--)}function Bt(n,i){Es++,Oc[Es]=n.current,n.current=i}var fr={},_n=dr(fr),In=dr(!1),Vr=fr;function ws(n,i){var a=n.type.contextTypes;if(!a)return fr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Un(n){return n=n.childContextTypes,n!=null}function No(){Ht(In),Ht(_n)}function kh(n,i,a){if(_n.current!==fr)throw Error(t(168));Bt(_n,i),Bt(In,a)}function Bh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Se(n)||"Unknown",d));return se({},a,c)}function Lo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||fr,Vr=_n.current,Bt(_n,n),Bt(In,In.current),!0}function zh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Bh(n,i,Vr),c.__reactInternalMemoizedMergedChildContext=n,Ht(In),Ht(_n),Bt(_n,n)):Ht(In),Bt(In,a)}var zi=null,Do=!1,kc=!1;function Vh(n){zi===null?zi=[n]:zi.push(n)}function Lx(n){Do=!0,Vh(n)}function hr(){if(!kc&&zi!==null){kc=!0;var n=0,i=gt;try{var a=zi;for(gt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}zi=null,Do=!1}catch(d){throw zi!==null&&(zi=zi.slice(n+1)),po(pa,hr),d}finally{gt=i,kc=!1}}return null}var Ts=[],As=0,Io=null,Uo=0,Jn=[],ei=0,Gr=null,Vi=1,Gi="";function Hr(n,i){Ts[As++]=Uo,Ts[As++]=Io,Io=n,Uo=i}function Gh(n,i,a){Jn[ei++]=Vi,Jn[ei++]=Gi,Jn[ei++]=Gr,Gr=n;var c=Vi;n=Gi;var d=32-be(c)-1;c&=~(1<<d),a+=1;var m=32-be(i)+d;if(30<m){var w=d-d%5;m=(c&(1<<w)-1).toString(32),c>>=w,d-=w,Vi=1<<32-be(i)+d|a<<d|c,Gi=m+n}else Vi=1<<m|a<<d|c,Gi=n}function Bc(n){n.return!==null&&(Hr(n,1),Gh(n,1,0))}function zc(n){for(;n===Io;)Io=Ts[--As],Ts[As]=null,Uo=Ts[--As],Ts[As]=null;for(;n===Gr;)Gr=Jn[--ei],Jn[ei]=null,Gi=Jn[--ei],Jn[ei]=null,Vi=Jn[--ei],Jn[ei]=null}var Wn=null,jn=null,jt=!1,ui=null;function Hh(n,i){var a=ri(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Wh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Wn=n,jn=ur(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Wn=n,jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Gr!==null?{id:Vi,overflow:Gi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ri(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Wn=n,jn=null,!0):!1;default:return!1}}function Vc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Gc(n){if(jt){var i=jn;if(i){var a=i;if(!Wh(n,i)){if(Vc(n))throw Error(t(418));i=ur(a.nextSibling);var c=Wn;i&&Wh(n,i)?Hh(c,a):(n.flags=n.flags&-4097|2,jt=!1,Wn=n)}}else{if(Vc(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,Wn=n}}}function jh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Wn=n}function Fo(n){if(n!==Wn)return!1;if(!jt)return jh(n),jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Dc(n.type,n.memoizedProps)),i&&(i=jn)){if(Vc(n))throw Xh(),Error(t(418));for(;i;)Hh(n,i),i=ur(i.nextSibling)}if(jh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){jn=ur(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}jn=null}}else jn=Wn?ur(n.stateNode.nextSibling):null;return!0}function Xh(){for(var n=jn;n;)n=ur(n.nextSibling)}function bs(){jn=Wn=null,jt=!1}function Hc(n){ui===null?ui=[n]:ui.push(n)}var Dx=N.ReactCurrentBatchConfig;function La(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var I=d.refs;w===null?delete I[m]:I[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Oo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function qh(n){var i=n._init;return i(n._payload)}function Yh(n){function i(K,W){if(n){var ie=K.deletions;ie===null?(K.deletions=[W],K.flags|=16):ie.push(W)}}function a(K,W){if(!n)return null;for(;W!==null;)i(K,W),W=W.sibling;return null}function c(K,W){for(K=new Map;W!==null;)W.key!==null?K.set(W.key,W):K.set(W.index,W),W=W.sibling;return K}function d(K,W){return K=yr(K,W),K.index=0,K.sibling=null,K}function m(K,W,ie){return K.index=ie,n?(ie=K.alternate,ie!==null?(ie=ie.index,ie<W?(K.flags|=2,W):ie):(K.flags|=2,W)):(K.flags|=1048576,W)}function w(K){return n&&K.alternate===null&&(K.flags|=2),K}function I(K,W,ie,we){return W===null||W.tag!==6?(W=Iu(ie,K.mode,we),W.return=K,W):(W=d(W,ie),W.return=K,W)}function B(K,W,ie,we){var Ke=ie.type;return Ke===z?_e(K,W,ie.props.children,we,ie.key):W!==null&&(W.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===re&&qh(Ke)===W.type)?(we=d(W,ie.props),we.ref=La(K,W,ie),we.return=K,we):(we=ol(ie.type,ie.key,ie.props,null,K.mode,we),we.ref=La(K,W,ie),we.return=K,we)}function oe(K,W,ie,we){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=Uu(ie,K.mode,we),W.return=K,W):(W=d(W,ie.children||[]),W.return=K,W)}function _e(K,W,ie,we,Ke){return W===null||W.tag!==7?(W=Zr(ie,K.mode,we,Ke),W.return=K,W):(W=d(W,ie),W.return=K,W)}function ye(K,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Iu(""+W,K.mode,ie),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case V:return ie=ol(W.type,W.key,W.props,null,K.mode,ie),ie.ref=La(K,null,W),ie.return=K,ie;case D:return W=Uu(W,K.mode,ie),W.return=K,W;case re:var we=W._init;return ye(K,we(W._payload),ie)}if(H(W)||Q(W))return W=Zr(W,K.mode,ie,null),W.return=K,W;Oo(K,W)}return null}function ve(K,W,ie,we){var Ke=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Ke!==null?null:I(K,W,""+ie,we);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case V:return ie.key===Ke?B(K,W,ie,we):null;case D:return ie.key===Ke?oe(K,W,ie,we):null;case re:return Ke=ie._init,ve(K,W,Ke(ie._payload),we)}if(H(ie)||Q(ie))return Ke!==null?null:_e(K,W,ie,we,null);Oo(K,ie)}return null}function Ve(K,W,ie,we,Ke){if(typeof we=="string"&&we!==""||typeof we=="number")return K=K.get(ie)||null,I(W,K,""+we,Ke);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case V:return K=K.get(we.key===null?ie:we.key)||null,B(W,K,we,Ke);case D:return K=K.get(we.key===null?ie:we.key)||null,oe(W,K,we,Ke);case re:var et=we._init;return Ve(K,W,ie,et(we._payload),Ke)}if(H(we)||Q(we))return K=K.get(ie)||null,_e(W,K,we,Ke,null);Oo(W,we)}return null}function je(K,W,ie,we){for(var Ke=null,et=null,tt=W,rt=W=0,dn=null;tt!==null&&rt<ie.length;rt++){tt.index>rt?(dn=tt,tt=null):dn=tt.sibling;var At=ve(K,tt,ie[rt],we);if(At===null){tt===null&&(tt=dn);break}n&&tt&&At.alternate===null&&i(K,tt),W=m(At,W,rt),et===null?Ke=At:et.sibling=At,et=At,tt=dn}if(rt===ie.length)return a(K,tt),jt&&Hr(K,rt),Ke;if(tt===null){for(;rt<ie.length;rt++)tt=ye(K,ie[rt],we),tt!==null&&(W=m(tt,W,rt),et===null?Ke=tt:et.sibling=tt,et=tt);return jt&&Hr(K,rt),Ke}for(tt=c(K,tt);rt<ie.length;rt++)dn=Ve(tt,K,rt,ie[rt],we),dn!==null&&(n&&dn.alternate!==null&&tt.delete(dn.key===null?rt:dn.key),W=m(dn,W,rt),et===null?Ke=dn:et.sibling=dn,et=dn);return n&&tt.forEach(function(Mr){return i(K,Mr)}),jt&&Hr(K,rt),Ke}function Ye(K,W,ie,we){var Ke=Q(ie);if(typeof Ke!="function")throw Error(t(150));if(ie=Ke.call(ie),ie==null)throw Error(t(151));for(var et=Ke=null,tt=W,rt=W=0,dn=null,At=ie.next();tt!==null&&!At.done;rt++,At=ie.next()){tt.index>rt?(dn=tt,tt=null):dn=tt.sibling;var Mr=ve(K,tt,At.value,we);if(Mr===null){tt===null&&(tt=dn);break}n&&tt&&Mr.alternate===null&&i(K,tt),W=m(Mr,W,rt),et===null?Ke=Mr:et.sibling=Mr,et=Mr,tt=dn}if(At.done)return a(K,tt),jt&&Hr(K,rt),Ke;if(tt===null){for(;!At.done;rt++,At=ie.next())At=ye(K,At.value,we),At!==null&&(W=m(At,W,rt),et===null?Ke=At:et.sibling=At,et=At);return jt&&Hr(K,rt),Ke}for(tt=c(K,tt);!At.done;rt++,At=ie.next())At=Ve(tt,K,rt,At.value,we),At!==null&&(n&&At.alternate!==null&&tt.delete(At.key===null?rt:At.key),W=m(At,W,rt),et===null?Ke=At:et.sibling=At,et=At);return n&&tt.forEach(function(fv){return i(K,fv)}),jt&&Hr(K,rt),Ke}function Jt(K,W,ie,we){if(typeof ie=="object"&&ie!==null&&ie.type===z&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case V:e:{for(var Ke=ie.key,et=W;et!==null;){if(et.key===Ke){if(Ke=ie.type,Ke===z){if(et.tag===7){a(K,et.sibling),W=d(et,ie.props.children),W.return=K,K=W;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===re&&qh(Ke)===et.type){a(K,et.sibling),W=d(et,ie.props),W.ref=La(K,et,ie),W.return=K,K=W;break e}a(K,et);break}else i(K,et);et=et.sibling}ie.type===z?(W=Zr(ie.props.children,K.mode,we,ie.key),W.return=K,K=W):(we=ol(ie.type,ie.key,ie.props,null,K.mode,we),we.ref=La(K,W,ie),we.return=K,K=we)}return w(K);case D:e:{for(et=ie.key;W!==null;){if(W.key===et)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){a(K,W.sibling),W=d(W,ie.children||[]),W.return=K,K=W;break e}else{a(K,W);break}else i(K,W);W=W.sibling}W=Uu(ie,K.mode,we),W.return=K,K=W}return w(K);case re:return et=ie._init,Jt(K,W,et(ie._payload),we)}if(H(ie))return je(K,W,ie,we);if(Q(ie))return Ye(K,W,ie,we);Oo(K,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,W!==null&&W.tag===6?(a(K,W.sibling),W=d(W,ie),W.return=K,K=W):(a(K,W),W=Iu(ie,K.mode,we),W.return=K,K=W),w(K)):a(K,W)}return Jt}var Cs=Yh(!0),$h=Yh(!1),ko=dr(null),Bo=null,Rs=null,Wc=null;function jc(){Wc=Rs=Bo=null}function Xc(n){var i=ko.current;Ht(ko),n._currentValue=i}function qc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ps(n,i){Bo=n,Wc=Rs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Fn=!0),n.firstContext=null)}function ti(n){var i=n._currentValue;if(Wc!==n)if(n={context:n,memoizedValue:i,next:null},Rs===null){if(Bo===null)throw Error(t(308));Rs=n,Bo.dependencies={lanes:0,firstContext:n}}else Rs=Rs.next=n;return i}var Wr=null;function Yc(n){Wr===null?Wr=[n]:Wr.push(n)}function Kh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Yc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Hi(n,c)}function Hi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var pr=!1;function $c(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Mt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Hi(n,a)}return d=c.interleaved,d===null?(i.next=i,Yc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Hi(n,a)}function zo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Dn(n,a)}}function Qh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Vo(n,i,a,c){var d=n.updateQueue;pr=!1;var m=d.firstBaseUpdate,w=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var B=I,oe=B.next;B.next=null,w===null?m=oe:w.next=oe,w=B;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==w&&(I===null?_e.firstBaseUpdate=oe:I.next=oe,_e.lastBaseUpdate=B))}if(m!==null){var ye=d.baseState;w=0,_e=oe=B=null,I=m;do{var ve=I.lane,Ve=I.eventTime;if((c&ve)===ve){_e!==null&&(_e=_e.next={eventTime:Ve,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var je=n,Ye=I;switch(ve=i,Ve=a,Ye.tag){case 1:if(je=Ye.payload,typeof je=="function"){ye=je.call(Ve,ye,ve);break e}ye=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ye.payload,ve=typeof je=="function"?je.call(Ve,ye,ve):je,ve==null)break e;ye=se({},ye,ve);break e;case 2:pr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[I]:ve.push(I))}else Ve={eventTime:Ve,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(oe=_e=Ve,B=ye):_e=_e.next=Ve,w|=ve;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(_e===null&&(B=ye),d.baseState=B,d.firstBaseUpdate=oe,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);qr|=w,n.lanes=w,n.memoizedState=ye}}function Jh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Da={},wi=dr(Da),Ia=dr(Da),Ua=dr(Da);function jr(n){if(n===Da)throw Error(t(174));return n}function Kc(n,i){switch(Bt(Ua,i),Bt(Ia,n),Bt(wi,Da),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}Ht(wi),Bt(wi,i)}function Ns(){Ht(wi),Ht(Ia),Ht(Ua)}function ep(n){jr(Ua.current);var i=jr(wi.current),a=M(i,n.type);i!==a&&(Bt(Ia,n),Bt(wi,a))}function Zc(n){Ia.current===n&&(Ht(wi),Ht(Ia))}var Yt=dr(0);function Go(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Qc=[];function Jc(){for(var n=0;n<Qc.length;n++)Qc[n]._workInProgressVersionPrimary=null;Qc.length=0}var Ho=N.ReactCurrentDispatcher,eu=N.ReactCurrentBatchConfig,Xr=0,$t=null,sn=null,cn=null,Wo=!1,Fa=!1,Oa=0,Ix=0;function Sn(){throw Error(t(321))}function tu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ci(n[a],i[a]))return!1;return!0}function nu(n,i,a,c,d,m){if(Xr=m,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ho.current=n===null||n.memoizedState===null?kx:Bx,n=a(c,d),Fa){m=0;do{if(Fa=!1,Oa=0,25<=m)throw Error(t(301));m+=1,cn=sn=null,i.updateQueue=null,Ho.current=zx,n=a(c,d)}while(Fa)}if(Ho.current=qo,i=sn!==null&&sn.next!==null,Xr=0,cn=sn=$t=null,Wo=!1,i)throw Error(t(300));return n}function iu(){var n=Oa!==0;return Oa=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?$t.memoizedState=cn=n:cn=cn.next=n,cn}function ni(){if(sn===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var i=cn===null?$t.memoizedState:cn.next;if(i!==null)cn=i,sn=n;else{if(n===null)throw Error(t(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},cn===null?$t.memoizedState=cn=n:cn=cn.next=n}return cn}function ka(n,i){return typeof i=="function"?i(n):i}function ru(n){var i=ni(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=sn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var w=d.next;d.next=m.next,m.next=w}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=w=null,B=null,oe=m;do{var _e=oe.lane;if((Xr&_e)===_e)B!==null&&(B=B.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:n(c,oe.action);else{var ye={lane:_e,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};B===null?(I=B=ye,w=c):B=B.next=ye,$t.lanes|=_e,qr|=_e}oe=oe.next}while(oe!==null&&oe!==m);B===null?w=c:B.next=I,ci(c,i.memoizedState)||(Fn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,$t.lanes|=m,qr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function su(n){var i=ni(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do m=n(m,w.action),w=w.next;while(w!==d);ci(m,i.memoizedState)||(Fn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function tp(){}function np(n,i){var a=$t,c=ni(),d=i(),m=!ci(c.memoizedState,d);if(m&&(c.memoizedState=d,Fn=!0),c=c.queue,au(sp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||cn!==null&&cn.memoizedState.tag&1){if(a.flags|=2048,Ba(9,rp.bind(null,a,c,d,i),void 0,null),un===null)throw Error(t(349));(Xr&30)!==0||ip(a,i,d)}return d}function ip(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function rp(n,i,a,c){i.value=a,i.getSnapshot=c,ap(i)&&op(n)}function sp(n,i,a){return a(function(){ap(i)&&op(n)})}function ap(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ci(n,a)}catch{return!0}}function op(n){var i=Hi(n,1);i!==null&&pi(i,n,1,-1)}function lp(n){var i=Ti();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:n},i.queue=n,n=n.dispatch=Ox.bind(null,$t,n),[i.memoizedState,n]}function Ba(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function cp(){return ni().memoizedState}function jo(n,i,a,c){var d=Ti();$t.flags|=n,d.memoizedState=Ba(1|i,a,void 0,c===void 0?null:c)}function Xo(n,i,a,c){var d=ni();c=c===void 0?null:c;var m=void 0;if(sn!==null){var w=sn.memoizedState;if(m=w.destroy,c!==null&&tu(c,w.deps)){d.memoizedState=Ba(i,a,m,c);return}}$t.flags|=n,d.memoizedState=Ba(1|i,a,m,c)}function up(n,i){return jo(8390656,8,n,i)}function au(n,i){return Xo(2048,8,n,i)}function dp(n,i){return Xo(4,2,n,i)}function fp(n,i){return Xo(4,4,n,i)}function hp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function pp(n,i,a){return a=a!=null?a.concat([n]):null,Xo(4,4,hp.bind(null,i,n),a)}function ou(){}function mp(n,i){var a=ni();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&tu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function gp(n,i){var a=ni();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&tu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function xp(n,i,a){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,Fn=!0),n.memoizedState=a):(ci(a,i)||(a=ze(),$t.lanes|=a,qr|=a,n.baseState=!0),i)}function Ux(n,i){var a=gt;gt=a!==0&&4>a?a:4,n(!0);var c=eu.transition;eu.transition={};try{n(!1),i()}finally{gt=a,eu.transition=c}}function vp(){return ni().memoizedState}function Fx(n,i,a){var c=_r(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},_p(n))Sp(i,a);else if(a=Kh(n,i,a,c),a!==null){var d=Cn();pi(a,n,c,d),yp(a,i,c)}}function Ox(n,i,a){var c=_r(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(_p(n))Sp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,I=m(w,a);if(d.hasEagerState=!0,d.eagerState=I,ci(I,w)){var B=i.interleaved;B===null?(d.next=d,Yc(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}a=Kh(n,i,d,c),a!==null&&(d=Cn(),pi(a,n,c,d),yp(a,i,c))}}function _p(n){var i=n.alternate;return n===$t||i!==null&&i===$t}function Sp(n,i){Fa=Wo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function yp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Dn(n,a)}}var qo={readContext:ti,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},kx={readContext:ti,useCallback:function(n,i){return Ti().memoizedState=[n,i===void 0?null:i],n},useContext:ti,useEffect:up,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,jo(4194308,4,hp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return jo(4194308,4,n,i)},useInsertionEffect:function(n,i){return jo(4,2,n,i)},useMemo:function(n,i){var a=Ti();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ti();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Fx.bind(null,$t,n),[c.memoizedState,n]},useRef:function(n){var i=Ti();return n={current:n},i.memoizedState=n},useState:lp,useDebugValue:ou,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=lp(!1),i=n[0];return n=Ux.bind(null,n[1]),Ti().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=$t,d=Ti();if(jt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),un===null)throw Error(t(349));(Xr&30)!==0||ip(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,up(sp.bind(null,c,m,n),[n]),c.flags|=2048,Ba(9,rp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Ti(),i=un.identifierPrefix;if(jt){var a=Gi,c=Vi;a=(c&~(1<<32-be(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Oa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ix++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Bx={readContext:ti,useCallback:mp,useContext:ti,useEffect:au,useImperativeHandle:pp,useInsertionEffect:dp,useLayoutEffect:fp,useMemo:gp,useReducer:ru,useRef:cp,useState:function(){return ru(ka)},useDebugValue:ou,useDeferredValue:function(n){var i=ni();return xp(i,sn.memoizedState,n)},useTransition:function(){var n=ru(ka)[0],i=ni().memoizedState;return[n,i]},useMutableSource:tp,useSyncExternalStore:np,useId:vp,unstable_isNewReconciler:!1},zx={readContext:ti,useCallback:mp,useContext:ti,useEffect:au,useImperativeHandle:pp,useInsertionEffect:dp,useLayoutEffect:fp,useMemo:gp,useReducer:su,useRef:cp,useState:function(){return su(ka)},useDebugValue:ou,useDeferredValue:function(n){var i=ni();return sn===null?i.memoizedState=n:xp(i,sn.memoizedState,n)},useTransition:function(){var n=su(ka)[0],i=ni().memoizedState;return[n,i]},useMutableSource:tp,useSyncExternalStore:np,useId:vp,unstable_isNewReconciler:!1};function di(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function lu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Yo={isMounted:function(n){return(n=n._reactInternals)?yi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Cn(),d=_r(n),m=Wi(c,d);m.payload=i,a!=null&&(m.callback=a),i=mr(n,m,d),i!==null&&(pi(i,n,d,c),zo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Cn(),d=_r(n),m=Wi(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=mr(n,m,d),i!==null&&(pi(i,n,d,c),zo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Cn(),c=_r(n),d=Wi(a,c);d.tag=2,i!=null&&(d.callback=i),i=mr(n,d,c),i!==null&&(pi(i,n,c,a),zo(i,n,c))}};function Mp(n,i,a,c,d,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,w):i.prototype&&i.prototype.isPureReactComponent?!Ta(a,c)||!Ta(d,m):!0}function Ep(n,i,a){var c=!1,d=fr,m=i.contextType;return typeof m=="object"&&m!==null?m=ti(m):(d=Un(i)?Vr:_n.current,c=i.contextTypes,m=(c=c!=null)?ws(n,d):fr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Yo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function wp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Yo.enqueueReplaceState(i,i.state,null)}function cu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},$c(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=ti(m):(m=Un(i)?Vr:_n.current,d.context=ws(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(lu(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Yo.enqueueReplaceState(d,d.state,null),Vo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,i){try{var a="",c=i;do a+=Ie(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function uu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function du(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Vx=typeof WeakMap=="function"?WeakMap:Map;function Tp(n,i,a){a=Wi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){tl||(tl=!0,Au=c),du(n,i)},a}function Ap(n,i,a){a=Wi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){du(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){du(n,i),typeof c!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function bp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Vx;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=tv.bind(null,n,i,a),i.then(n,n))}function Cp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Rp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Wi(-1,1),i.tag=2,mr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Gx=N.ReactCurrentOwner,Fn=!1;function bn(n,i,a,c){i.child=n===null?$h(i,null,a,c):Cs(i,n.child,a,c)}function Pp(n,i,a,c,d){a=a.render;var m=i.ref;return Ps(i,d),c=nu(n,i,a,c,m,d),a=iu(),n!==null&&!Fn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ji(n,i,d)):(jt&&a&&Bc(i),i.flags|=1,bn(n,i,c,d),i.child)}function Np(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Du(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Lp(n,i,m,c,d)):(n=ol(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ta,a(w,c)&&n.ref===i.ref)return ji(n,i,d)}return i.flags|=1,n=yr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Lp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Ta(m,c)&&n.ref===i.ref)if(Fn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Fn=!0);else return i.lanes=n.lanes,ji(n,i,d)}return fu(n,i,a,c,d)}function Dp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Is,Xn),Xn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Bt(Is,Xn),Xn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Bt(Is,Xn),Xn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Bt(Is,Xn),Xn|=c;return bn(n,i,d,a),i.child}function Ip(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function fu(n,i,a,c,d){var m=Un(a)?Vr:_n.current;return m=ws(i,m),Ps(i,d),a=nu(n,i,a,c,m,d),c=iu(),n!==null&&!Fn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ji(n,i,d)):(jt&&c&&Bc(i),i.flags|=1,bn(n,i,a,d),i.child)}function Up(n,i,a,c,d){if(Un(a)){var m=!0;Lo(i)}else m=!1;if(Ps(i,d),i.stateNode===null)Ko(n,i),Ep(i,a,c),cu(i,a,c,d),c=!0;else if(n===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var B=w.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=ti(oe):(oe=Un(a)?Vr:_n.current,oe=ws(i,oe));var _e=a.getDerivedStateFromProps,ye=typeof _e=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==c||B!==oe)&&wp(i,w,c,oe),pr=!1;var ve=i.memoizedState;w.state=ve,Vo(i,c,w,d),B=i.memoizedState,I!==c||ve!==B||In.current||pr?(typeof _e=="function"&&(lu(i,a,_e,c),B=i.memoizedState),(I=pr||Mp(i,a,I,c,ve,B,oe))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),w.props=c,w.state=B,w.context=oe,c=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Zh(n,i),I=i.memoizedProps,oe=i.type===i.elementType?I:di(i.type,I),w.props=oe,ye=i.pendingProps,ve=w.context,B=a.contextType,typeof B=="object"&&B!==null?B=ti(B):(B=Un(a)?Vr:_n.current,B=ws(i,B));var Ve=a.getDerivedStateFromProps;(_e=typeof Ve=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==ye||ve!==B)&&wp(i,w,c,B),pr=!1,ve=i.memoizedState,w.state=ve,Vo(i,c,w,d);var je=i.memoizedState;I!==ye||ve!==je||In.current||pr?(typeof Ve=="function"&&(lu(i,a,Ve,c),je=i.memoizedState),(oe=pr||Mp(i,a,oe,c,ve,je,B)||!1)?(_e||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,je,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,je,B)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),w.props=c,w.state=je,w.context=B,c=oe):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return hu(n,i,a,c,m,d)}function hu(n,i,a,c,d,m){Ip(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return d&&zh(i,a,!1),ji(n,i,m);c=i.stateNode,Gx.current=i;var I=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=Cs(i,n.child,null,m),i.child=Cs(i,null,I,m)):bn(n,i,I,m),i.memoizedState=c.state,d&&zh(i,a,!0),i.child}function Fp(n){var i=n.stateNode;i.pendingContext?kh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&kh(n,i.context,!1),Kc(n,i.containerInfo)}function Op(n,i,a,c,d){return bs(),Hc(d),i.flags|=256,bn(n,i,a,c),i.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function mu(n){return{baseLanes:n,cachePool:null,transitions:null}}function kp(n,i,a){var c=i.pendingProps,d=Yt.current,m=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Bt(Yt,d&1),n===null)return Gc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,m?(c=i.mode,m=i.child,w={mode:"hidden",children:w},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=ll(w,c,0,null),n=Zr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=mu(a),i.memoizedState=pu,n):gu(i,w));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Hx(n,i,w,c,I,d,a);if(m){m=c.fallback,w=i.mode,d=n.child,I=d.sibling;var B={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=yr(d,B),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=yr(I,m):(m=Zr(m,w,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,w=n.child.memoizedState,w=w===null?mu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~a,i.memoizedState=pu,c}return m=n.child,n=m.sibling,c=yr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function gu(n,i){return i=ll({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function $o(n,i,a,c){return c!==null&&Hc(c),Cs(i,n.child,null,a),n=gu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Hx(n,i,a,c,d,m,w){if(a)return i.flags&256?(i.flags&=-257,c=uu(Error(t(422))),$o(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=ll({mode:"visible",children:c.children},d,0,null),m=Zr(m,d,w,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Cs(i,n.child,null,w),i.child.memoizedState=mu(w),i.memoizedState=pu,m);if((i.mode&1)===0)return $o(n,i,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=uu(m,c,void 0),$o(n,i,w,c)}if(I=(w&n.childLanes)!==0,Fn||I){if(c=un,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|w))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Hi(n,d),pi(c,n,d,-1))}return Lu(),c=uu(Error(t(421))),$o(n,i,w,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=nv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,jn=ur(d.nextSibling),Wn=i,jt=!0,ui=null,n!==null&&(Jn[ei++]=Vi,Jn[ei++]=Gi,Jn[ei++]=Gr,Vi=n.id,Gi=n.overflow,Gr=i),i=gu(i,c.children),i.flags|=4096,i)}function Bp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),qc(n.return,i,a)}function xu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function zp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(bn(n,i,c.children,a),c=Yt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bp(n,a,i);else if(n.tag===19)Bp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Bt(Yt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Go(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),xu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Go(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}xu(i,!0,a,null,m);break;case"together":xu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ko(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ji(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),qr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=yr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=yr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Wx(n,i,a){switch(i.tag){case 3:Fp(i),bs();break;case 5:ep(i);break;case 1:Un(i.type)&&Lo(i);break;case 4:Kc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Bt(ko,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Bt(Yt,Yt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?kp(n,i,a):(Bt(Yt,Yt.current&1),n=ji(n,i,a),n!==null?n.sibling:null);Bt(Yt,Yt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return zp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Bt(Yt,Yt.current),c)break;return null;case 22:case 23:return i.lanes=0,Dp(n,i,a)}return ji(n,i,a)}var Vp,vu,Gp,Hp;Vp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vu=function(){},Gp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,jr(wi.current);var m=null;switch(a){case"input":d=wt(n,d),c=wt(n,c),m=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":d=ft(n,d),c=ft(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ro)}Be(a,c);var w;a=null;for(oe in d)if(!c.hasOwnProperty(oe)&&d.hasOwnProperty(oe)&&d[oe]!=null)if(oe==="style"){var I=d[oe];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?m||(m=[]):(m=m||[]).push(oe,null));for(oe in c){var B=c[oe];if(I=d!=null?d[oe]:void 0,c.hasOwnProperty(oe)&&B!==I&&(B!=null||I!=null))if(oe==="style")if(I){for(w in I)!I.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in B)B.hasOwnProperty(w)&&I[w]!==B[w]&&(a||(a={}),a[w]=B[w])}else a||(m||(m=[]),m.push(oe,a)),a=B;else oe==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(m=m||[]).push(oe,B)):oe==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(oe,""+B):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(B!=null&&oe==="onScroll"&&Gt("scroll",n),m||I===B||(m=[])):(m=m||[]).push(oe,B))}a&&(m=m||[]).push("style",a);var oe=m;(i.updateQueue=oe)&&(i.flags|=4)}},Hp=function(n,i,a,c){a!==c&&(i.flags|=4)};function za(n,i){if(!jt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function yn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function jx(n,i,a){var c=i.pendingProps;switch(zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(i),null;case 1:return Un(i.type)&&No(),yn(i),null;case 3:return c=i.stateNode,Ns(),Ht(In),Ht(_n),Jc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Fo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ui!==null&&(Ru(ui),ui=null))),vu(n,i),yn(i),null;case 5:Zc(i);var d=jr(Ua.current);if(a=i.type,n!==null&&i.stateNode!=null)Gp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return yn(i),null}if(n=jr(wi.current),Fo(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Ei]=i,c[Pa]=m,n=(i.mode&1)!==0,a){case"dialog":Gt("cancel",c),Gt("close",c);break;case"iframe":case"object":case"embed":Gt("load",c);break;case"video":case"audio":for(d=0;d<ba.length;d++)Gt(ba[d],c);break;case"source":Gt("error",c);break;case"img":case"image":case"link":Gt("error",c),Gt("load",c);break;case"details":Gt("toggle",c);break;case"input":Dt(c,m),Gt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Gt("invalid",c);break;case"textarea":Rt(c,m),Gt("invalid",c)}Be(a,m),d=null;for(var w in m)if(m.hasOwnProperty(w)){var I=m[w];w==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Co(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Co(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Gt("scroll",c)}switch(a){case"input":Je(c),Ft(c,m,!0);break;case"textarea":Je(c),zt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Ro)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=P(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[Ei]=i,n[Pa]=c,Vp(n,i,!1,!1),i.stateNode=n;e:{switch(w=Ae(a,c),a){case"dialog":Gt("cancel",n),Gt("close",n),d=c;break;case"iframe":case"object":case"embed":Gt("load",n),d=c;break;case"video":case"audio":for(d=0;d<ba.length;d++)Gt(ba[d],n);d=c;break;case"source":Gt("error",n),d=c;break;case"img":case"image":case"link":Gt("error",n),Gt("load",n),d=c;break;case"details":Gt("toggle",n),d=c;break;case"input":Dt(n,c),d=wt(n,c),Gt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),Gt("invalid",n);break;case"textarea":Rt(n,c),d=ft(n,c),Gt("invalid",n);break;default:d=c}Be(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var B=I[m];m==="style"?pe(n,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&he(n,B)):m==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&ge(n,B):typeof B=="number"&&ge(n,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?B!=null&&m==="onScroll"&&Gt("scroll",n):B!=null&&L(n,m,B,w))}switch(a){case"input":Je(n),Ft(n,c,!1);break;case"textarea":Je(n),zt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+me(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Ot(n,!!c.multiple,m,!1):c.defaultValue!=null&&Ot(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ro)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return yn(i),null;case 6:if(n&&i.stateNode!=null)Hp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=jr(Ua.current),jr(wi.current),Fo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ei]=i,(m=c.nodeValue!==a)&&(n=Wn,n!==null))switch(n.tag){case 3:Co(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Co(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ei]=i,i.stateNode=c}return yn(i),null;case 13:if(Ht(Yt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xh(),bs(),i.flags|=98560,m=!1;else if(m=Fo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ei]=i}else bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;yn(i),m=!1}else ui!==null&&(Ru(ui),ui=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Yt.current&1)!==0?an===0&&(an=3):Lu())),i.updateQueue!==null&&(i.flags|=4),yn(i),null);case 4:return Ns(),vu(n,i),n===null&&Ca(i.stateNode.containerInfo),yn(i),null;case 10:return Xc(i.type._context),yn(i),null;case 17:return Un(i.type)&&No(),yn(i),null;case 19:if(Ht(Yt),m=i.memoizedState,m===null)return yn(i),null;if(c=(i.flags&128)!==0,w=m.rendering,w===null)if(c)za(m,!1);else{if(an!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Go(n),w!==null){for(i.flags|=128,za(m,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Bt(Yt,Yt.current&1|2),i.child}n=n.sibling}m.tail!==null&&qt()>Us&&(i.flags|=128,c=!0,za(m,!1),i.lanes=4194304)}else{if(!c)if(n=Go(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),za(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!jt)return yn(i),null}else 2*qt()-m.renderingStartTime>Us&&a!==1073741824&&(i.flags|=128,c=!0,za(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=qt(),i.sibling=null,a=Yt.current,Bt(Yt,c?a&1|2:a&1),i):(yn(i),null);case 22:case 23:return Nu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Xn&1073741824)!==0&&(yn(i),i.subtreeFlags&6&&(i.flags|=8192)):yn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Xx(n,i){switch(zc(i),i.tag){case 1:return Un(i.type)&&No(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ns(),Ht(In),Ht(_n),Jc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Zc(i),null;case 13:if(Ht(Yt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ht(Yt),null;case 4:return Ns(),null;case 10:return Xc(i.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var Zo=!1,Mn=!1,qx=typeof WeakSet=="function"?WeakSet:Set,We=null;function Ds(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Kt(n,i,c)}else a.current=null}function _u(n,i,a){try{a()}catch(c){Kt(n,i,c)}}var Wp=!1;function Yx(n,i){if(Nc=xo,n=Mh(),Ec(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,I=-1,B=-1,oe=0,_e=0,ye=n,ve=null;t:for(;;){for(var Ve;ye!==a||d!==0&&ye.nodeType!==3||(I=w+d),ye!==m||c!==0&&ye.nodeType!==3||(B=w+c),ye.nodeType===3&&(w+=ye.nodeValue.length),(Ve=ye.firstChild)!==null;)ve=ye,ye=Ve;for(;;){if(ye===n)break t;if(ve===a&&++oe===d&&(I=w),ve===m&&++_e===c&&(B=w),(Ve=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=Ve}a=I===-1||B===-1?null:{start:I,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lc={focusedElem:n,selectionRange:a},xo=!1,We=i;We!==null;)if(i=We,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,We=n;else for(;We!==null;){i=We;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ye=je.memoizedProps,Jt=je.memoizedState,K=i.stateNode,W=K.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:di(i.type,Ye),Jt);K.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Kt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,We=n;break}We=i.return}return je=Wp,Wp=!1,je}function Va(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&_u(i,a,m)}d=d.next}while(d!==c)}}function Qo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Su(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function jp(n){var i=n.alternate;i!==null&&(n.alternate=null,jp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ei],delete i[Pa],delete i[Fc],delete i[Px],delete i[Nx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xp(n){return n.tag===5||n.tag===3||n.tag===4}function qp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ro));else if(c!==4&&(n=n.child,n!==null))for(yu(n,i,a),n=n.sibling;n!==null;)yu(n,i,a),n=n.sibling}function Mu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Mu(n,i,a),n=n.sibling;n!==null;)Mu(n,i,a),n=n.sibling}var mn=null,fi=!1;function gr(n,i,a){for(a=a.child;a!==null;)Yp(n,i,a),a=a.sibling}function Yp(n,i,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(J,a)}catch{}switch(a.tag){case 5:Mn||Ds(a,i);case 6:var c=mn,d=fi;mn=null,gr(n,i,a),mn=c,fi=d,mn!==null&&(fi?(n=mn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):mn.removeChild(a.stateNode));break;case 18:mn!==null&&(fi?(n=mn,a=a.stateNode,n.nodeType===8?Uc(n.parentNode,a):n.nodeType===1&&Uc(n,a),_a(n)):Uc(mn,a.stateNode));break;case 4:c=mn,d=fi,mn=a.stateNode.containerInfo,fi=!0,gr(n,i,a),mn=c,fi=d;break;case 0:case 11:case 14:case 15:if(!Mn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&_u(a,i,w),d=d.next}while(d!==c)}gr(n,i,a);break;case 1:if(!Mn&&(Ds(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Kt(a,i,I)}gr(n,i,a);break;case 21:gr(n,i,a);break;case 22:a.mode&1?(Mn=(c=Mn)||a.memoizedState!==null,gr(n,i,a),Mn=c):gr(n,i,a);break;default:gr(n,i,a)}}function $p(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new qx),i.forEach(function(c){var d=iv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function hi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:mn=I.stateNode,fi=!1;break e;case 3:mn=I.stateNode.containerInfo,fi=!0;break e;case 4:mn=I.stateNode.containerInfo,fi=!0;break e}I=I.return}if(mn===null)throw Error(t(160));Yp(m,w,d),mn=null,fi=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(oe){Kt(d,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Kp(i,n),i=i.sibling}function Kp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(hi(i,n),Ai(n),c&4){try{Va(3,n,n.return),Qo(3,n)}catch(Ye){Kt(n,n.return,Ye)}try{Va(5,n,n.return)}catch(Ye){Kt(n,n.return,Ye)}}break;case 1:hi(i,n),Ai(n),c&512&&a!==null&&Ds(a,a.return);break;case 5:if(hi(i,n),Ai(n),c&512&&a!==null&&Ds(a,a.return),n.flags&32){var d=n.stateNode;try{ge(d,"")}catch(Ye){Kt(n,n.return,Ye)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,w=a!==null?a.memoizedProps:m,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&dt(d,m),Ae(I,w);var oe=Ae(I,m);for(w=0;w<B.length;w+=2){var _e=B[w],ye=B[w+1];_e==="style"?pe(d,ye):_e==="dangerouslySetInnerHTML"?he(d,ye):_e==="children"?ge(d,ye):L(d,_e,ye,oe)}switch(I){case"input":Xt(d,m);break;case"textarea":Le(d,m);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ve=m.value;Ve!=null?Ot(d,!!m.multiple,Ve,!1):ve!==!!m.multiple&&(m.defaultValue!=null?Ot(d,!!m.multiple,m.defaultValue,!0):Ot(d,!!m.multiple,m.multiple?[]:"",!1))}d[Pa]=m}catch(Ye){Kt(n,n.return,Ye)}}break;case 6:if(hi(i,n),Ai(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ye){Kt(n,n.return,Ye)}}break;case 3:if(hi(i,n),Ai(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{_a(i.containerInfo)}catch(Ye){Kt(n,n.return,Ye)}break;case 4:hi(i,n),Ai(n);break;case 13:hi(i,n),Ai(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Tu=qt())),c&4&&$p(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(Mn=(oe=Mn)||_e,hi(i,n),Mn=oe):hi(i,n),Ai(n),c&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!_e&&(n.mode&1)!==0)for(We=n,_e=n.child;_e!==null;){for(ye=We=_e;We!==null;){switch(ve=We,Ve=ve.child,ve.tag){case 0:case 11:case 14:case 15:Va(4,ve,ve.return);break;case 1:Ds(ve,ve.return);var je=ve.stateNode;if(typeof je.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Ye){Kt(c,a,Ye)}}break;case 5:Ds(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Jp(ye);continue}}Ve!==null?(Ve.return=ve,We=Ve):Jp(ye)}_e=_e.sibling}e:for(_e=null,ye=n;;){if(ye.tag===5){if(_e===null){_e=ye;try{d=ye.stateNode,oe?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=ye.stateNode,B=ye.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=ue("display",w))}catch(Ye){Kt(n,n.return,Ye)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=oe?"":ye.memoizedProps}catch(Ye){Kt(n,n.return,Ye)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:hi(i,n),Ai(n),c&4&&$p(n);break;case 21:break;default:hi(i,n),Ai(n)}}function Ai(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Xp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ge(d,""),c.flags&=-33);var m=qp(n);Mu(n,m,d);break;case 3:case 4:var w=c.stateNode.containerInfo,I=qp(n);yu(n,I,w);break;default:throw Error(t(161))}}catch(B){Kt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function $x(n,i,a){We=n,Zp(n)}function Zp(n,i,a){for(var c=(n.mode&1)!==0;We!==null;){var d=We,m=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||Zo;if(!w){var I=d.alternate,B=I!==null&&I.memoizedState!==null||Mn;I=Zo;var oe=Mn;if(Zo=w,(Mn=B)&&!oe)for(We=d;We!==null;)w=We,B=w.child,w.tag===22&&w.memoizedState!==null?em(d):B!==null?(B.return=w,We=B):em(d);for(;m!==null;)We=m,Zp(m),m=m.sibling;We=d,Zo=I,Mn=oe}Qp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,We=m):Qp(n)}}function Qp(n){for(;We!==null;){var i=We;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mn||Qo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:di(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Jh(i,m,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Jh(i,w,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var _e=oe.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&_a(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||i.flags&512&&Su(i)}catch(ve){Kt(i,i.return,ve)}}if(i===n){We=null;break}if(a=i.sibling,a!==null){a.return=i.return,We=a;break}We=i.return}}function Jp(n){for(;We!==null;){var i=We;if(i===n){We=null;break}var a=i.sibling;if(a!==null){a.return=i.return,We=a;break}We=i.return}}function em(n){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Qo(4,i)}catch(B){Kt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(B){Kt(i,d,B)}}var m=i.return;try{Su(i)}catch(B){Kt(i,m,B)}break;case 5:var w=i.return;try{Su(i)}catch(B){Kt(i,w,B)}}}catch(B){Kt(i,i.return,B)}if(i===n){We=null;break}var I=i.sibling;if(I!==null){I.return=i.return,We=I;break}We=i.return}}var Kx=Math.ceil,Jo=N.ReactCurrentDispatcher,Eu=N.ReactCurrentOwner,ii=N.ReactCurrentBatchConfig,Mt=0,un=null,nn=null,gn=0,Xn=0,Is=dr(0),an=0,Ga=null,qr=0,el=0,wu=0,Ha=null,On=null,Tu=0,Us=1/0,Xi=null,tl=!1,Au=null,xr=null,nl=!1,vr=null,il=0,Wa=0,bu=null,rl=-1,sl=0;function Cn(){return(Mt&6)!==0?qt():rl!==-1?rl:rl=qt()}function _r(n){return(n.mode&1)===0?1:(Mt&2)!==0&&gn!==0?gn&-gn:Dx.transition!==null?(sl===0&&(sl=ze()),sl):(n=gt,n!==0||(n=window.event,n=n===void 0?16:nh(n.type)),n)}function pi(n,i,a,c){if(50<Wa)throw Wa=0,bu=null,Error(t(185));mt(n,a,c),((Mt&2)===0||n!==un)&&(n===un&&((Mt&2)===0&&(el|=a),an===4&&Sr(n,gn)),kn(n,c),a===1&&Mt===0&&(i.mode&1)===0&&(Us=qt()+500,Do&&hr()))}function kn(n,i){var a=n.callbackNode;Pt(n,i);var c=kt(n,n===un?gn:0);if(c===0)a!==null&&mo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&mo(a),i===1)n.tag===0?Lx(nm.bind(null,n)):Vh(nm.bind(null,n)),Cx(function(){(Mt&6)===0&&hr()}),a=null;else{switch(ki(c)){case 1:a=pa;break;case 4:a=b;break;case 16:a=X;break;case 536870912:a=te;break;default:a=X}a=um(a,tm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function tm(n,i){if(rl=-1,sl=0,(Mt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Fs()&&n.callbackNode!==a)return null;var c=kt(n,n===un?gn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=al(n,c);else{i=c;var d=Mt;Mt|=2;var m=rm();(un!==n||gn!==i)&&(Xi=null,Us=qt()+500,$r(n,i));do try{Jx();break}catch(I){im(n,I)}while(!0);jc(),Jo.current=m,Mt=d,nn!==null?i=0:(un=null,gn=0,i=an)}if(i!==0){if(i===2&&(d=tn(n),d!==0&&(c=d,i=Cu(n,d))),i===1)throw a=Ga,$r(n,0),Sr(n,c),kn(n,qt()),a;if(i===6)Sr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Zx(d)&&(i=al(n,c),i===2&&(m=tn(n),m!==0&&(c=m,i=Cu(n,m))),i===1))throw a=Ga,$r(n,0),Sr(n,c),kn(n,qt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Kr(n,On,Xi);break;case 3:if(Sr(n,c),(c&130023424)===c&&(i=Tu+500-qt(),10<i)){if(kt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Cn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ic(Kr.bind(null,n,On,Xi),i);break}Kr(n,On,Xi);break;case 4:if(Sr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var w=31-be(c);m=1<<w,w=i[w],w>d&&(d=w),c&=~m}if(c=d,c=qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Kx(c/1960))-c,10<c){n.timeoutHandle=Ic(Kr.bind(null,n,On,Xi),c);break}Kr(n,On,Xi);break;case 5:Kr(n,On,Xi);break;default:throw Error(t(329))}}}return kn(n,qt()),n.callbackNode===a?tm.bind(null,n):null}function Cu(n,i){var a=Ha;return n.current.memoizedState.isDehydrated&&($r(n,i).flags|=256),n=al(n,i),n!==2&&(i=On,On=a,i!==null&&Ru(i)),n}function Ru(n){On===null?On=n:On.push.apply(On,n)}function Zx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!ci(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Sr(n,i){for(i&=~wu,i&=~el,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-be(i),c=1<<a;n[a]=-1,i&=~c}}function nm(n){if((Mt&6)!==0)throw Error(t(327));Fs();var i=kt(n,0);if((i&1)===0)return kn(n,qt()),null;var a=al(n,i);if(n.tag!==0&&a===2){var c=tn(n);c!==0&&(i=c,a=Cu(n,c))}if(a===1)throw a=Ga,$r(n,0),Sr(n,i),kn(n,qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Kr(n,On,Xi),kn(n,qt()),null}function Pu(n,i){var a=Mt;Mt|=1;try{return n(i)}finally{Mt=a,Mt===0&&(Us=qt()+500,Do&&hr())}}function Yr(n){vr!==null&&vr.tag===0&&(Mt&6)===0&&Fs();var i=Mt;Mt|=1;var a=ii.transition,c=gt;try{if(ii.transition=null,gt=1,n)return n()}finally{gt=c,ii.transition=a,Mt=i,(Mt&6)===0&&hr()}}function Nu(){Xn=Is.current,Ht(Is)}function $r(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,bx(a)),nn!==null)for(a=nn.return;a!==null;){var c=a;switch(zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&No();break;case 3:Ns(),Ht(In),Ht(_n),Jc();break;case 5:Zc(c);break;case 4:Ns();break;case 13:Ht(Yt);break;case 19:Ht(Yt);break;case 10:Xc(c.type._context);break;case 22:case 23:Nu()}a=a.return}if(un=n,nn=n=yr(n.current,null),gn=Xn=i,an=0,Ga=null,wu=el=qr=0,On=Ha=null,Wr!==null){for(i=0;i<Wr.length;i++)if(a=Wr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var w=m.next;m.next=d,c.next=w}a.pending=c}Wr=null}return n}function im(n,i){do{var a=nn;try{if(jc(),Ho.current=qo,Wo){for(var c=$t.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Wo=!1}if(Xr=0,cn=sn=$t=null,Fa=!1,Oa=0,Eu.current=null,a===null||a.return===null){an=1,Ga=i,nn=null;break}e:{var m=n,w=a.return,I=a,B=i;if(i=gn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var oe=B,_e=I,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ve=Cp(w);if(Ve!==null){Ve.flags&=-257,Rp(Ve,w,I,m,i),Ve.mode&1&&bp(m,oe,i),i=Ve,B=oe;var je=i.updateQueue;if(je===null){var Ye=new Set;Ye.add(B),i.updateQueue=Ye}else je.add(B);break e}else{if((i&1)===0){bp(m,oe,i),Lu();break e}B=Error(t(426))}}else if(jt&&I.mode&1){var Jt=Cp(w);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),Rp(Jt,w,I,m,i),Hc(Ls(B,I));break e}}m=B=Ls(B,I),an!==4&&(an=2),Ha===null?Ha=[m]:Ha.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var K=Tp(m,B,i);Qh(m,K);break e;case 1:I=B;var W=m.type,ie=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(xr===null||!xr.has(ie)))){m.flags|=65536,i&=-i,m.lanes|=i;var we=Ap(m,I,i);Qh(m,we);break e}}m=m.return}while(m!==null)}am(a)}catch(Ke){i=Ke,nn===a&&a!==null&&(nn=a=a.return);continue}break}while(!0)}function rm(){var n=Jo.current;return Jo.current=qo,n===null?qo:n}function Lu(){(an===0||an===3||an===2)&&(an=4),un===null||(qr&268435455)===0&&(el&268435455)===0||Sr(un,gn)}function al(n,i){var a=Mt;Mt|=2;var c=rm();(un!==n||gn!==i)&&(Xi=null,$r(n,i));do try{Qx();break}catch(d){im(n,d)}while(!0);if(jc(),Mt=a,Jo.current=c,nn!==null)throw Error(t(261));return un=null,gn=0,an}function Qx(){for(;nn!==null;)sm(nn)}function Jx(){for(;nn!==null&&!cc();)sm(nn)}function sm(n){var i=cm(n.alternate,n,Xn);n.memoizedProps=n.pendingProps,i===null?am(n):nn=i,Eu.current=null}function am(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=jx(a,i,Xn),a!==null){nn=a;return}}else{if(a=Xx(a,i),a!==null){a.flags&=32767,nn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,nn=null;return}}if(i=i.sibling,i!==null){nn=i;return}nn=i=n}while(i!==null);an===0&&(an=5)}function Kr(n,i,a){var c=gt,d=ii.transition;try{ii.transition=null,gt=1,ev(n,i,a,c)}finally{ii.transition=d,gt=c}return null}function ev(n,i,a,c){do Fs();while(vr!==null);if((Mt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Ln(n,m),n===un&&(nn=un=null,gn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||nl||(nl=!0,um(X,function(){return Fs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ii.transition,ii.transition=null;var w=gt;gt=1;var I=Mt;Mt|=4,Eu.current=null,Yx(n,a),Kp(a,n),Sx(Lc),xo=!!Nc,Lc=Nc=null,n.current=a,$x(a),uc(),Mt=I,gt=w,ii.transition=m}else n.current=a;if(nl&&(nl=!1,vr=n,il=d),m=n.pendingLanes,m===0&&(xr=null),Ge(a.stateNode),kn(n,qt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(tl)throw tl=!1,n=Au,Au=null,n;return(il&1)!==0&&n.tag!==0&&Fs(),m=n.pendingLanes,(m&1)!==0?n===bu?Wa++:(Wa=0,bu=n):Wa=0,hr(),null}function Fs(){if(vr!==null){var n=ki(il),i=ii.transition,a=gt;try{if(ii.transition=null,gt=16>n?16:n,vr===null)var c=!1;else{if(n=vr,vr=null,il=0,(Mt&6)!==0)throw Error(t(331));var d=Mt;for(Mt|=4,We=n.current;We!==null;){var m=We,w=m.child;if((We.flags&16)!==0){var I=m.deletions;if(I!==null){for(var B=0;B<I.length;B++){var oe=I[B];for(We=oe;We!==null;){var _e=We;switch(_e.tag){case 0:case 11:case 15:Va(8,_e,m)}var ye=_e.child;if(ye!==null)ye.return=_e,We=ye;else for(;We!==null;){_e=We;var ve=_e.sibling,Ve=_e.return;if(jp(_e),_e===oe){We=null;break}if(ve!==null){ve.return=Ve,We=ve;break}We=Ve}}}var je=m.alternate;if(je!==null){var Ye=je.child;if(Ye!==null){je.child=null;do{var Jt=Ye.sibling;Ye.sibling=null,Ye=Jt}while(Ye!==null)}}We=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,We=w;else e:for(;We!==null;){if(m=We,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Va(9,m,m.return)}var K=m.sibling;if(K!==null){K.return=m.return,We=K;break e}We=m.return}}var W=n.current;for(We=W;We!==null;){w=We;var ie=w.child;if((w.subtreeFlags&2064)!==0&&ie!==null)ie.return=w,We=ie;else e:for(w=W;We!==null;){if(I=We,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Qo(9,I)}}catch(Ke){Kt(I,I.return,Ke)}if(I===w){We=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,We=we;break e}We=I.return}}if(Mt=d,hr(),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(J,n)}catch{}c=!0}return c}finally{gt=a,ii.transition=i}}return!1}function om(n,i,a){i=Ls(a,i),i=Tp(n,i,1),n=mr(n,i,1),i=Cn(),n!==null&&(mt(n,1,i),kn(n,i))}function Kt(n,i,a){if(n.tag===3)om(n,n,a);else for(;i!==null;){if(i.tag===3){om(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(xr===null||!xr.has(c))){n=Ls(a,n),n=Ap(i,n,1),i=mr(i,n,1),n=Cn(),i!==null&&(mt(i,1,n),kn(i,n));break}}i=i.return}}function tv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Cn(),n.pingedLanes|=n.suspendedLanes&a,un===n&&(gn&a)===a&&(an===4||an===3&&(gn&130023424)===gn&&500>qt()-Tu?$r(n,0):wu|=a),kn(n,i)}function lm(n,i){i===0&&((n.mode&1)===0?i=1:(i=$e,$e<<=1,($e&130023424)===0&&($e=4194304)));var a=Cn();n=Hi(n,i),n!==null&&(mt(n,i,a),kn(n,a))}function nv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),lm(n,a)}function iv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),lm(n,a)}var cm;cm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||In.current)Fn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Fn=!1,Wx(n,i,a);Fn=(n.flags&131072)!==0}else Fn=!1,jt&&(i.flags&1048576)!==0&&Gh(i,Uo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ko(n,i),n=i.pendingProps;var d=ws(i,_n.current);Ps(i,a),d=nu(null,i,c,n,d,a);var m=iu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Un(c)?(m=!0,Lo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,$c(i),d.updater=Yo,i.stateNode=d,d._reactInternals=i,cu(i,c,n,a),i=hu(null,i,c,!0,m,a)):(i.tag=0,jt&&m&&Bc(i),bn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Ko(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=sv(c),n=di(c,n),d){case 0:i=fu(null,i,c,n,a);break e;case 1:i=Up(null,i,c,n,a);break e;case 11:i=Pp(null,i,c,n,a);break e;case 14:i=Np(null,i,c,di(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:di(c,d),fu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:di(c,d),Up(n,i,c,d,a);case 3:e:{if(Fp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Zh(n,i),Vo(i,c,null,a);var w=i.memoizedState;if(c=w.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ls(Error(t(423)),i),i=Op(n,i,c,a,d);break e}else if(c!==d){d=Ls(Error(t(424)),i),i=Op(n,i,c,a,d);break e}else for(jn=ur(i.stateNode.containerInfo.firstChild),Wn=i,jt=!0,ui=null,a=$h(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(bs(),c===d){i=ji(n,i,a);break e}bn(n,i,c,a)}i=i.child}return i;case 5:return ep(i),n===null&&Gc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,w=d.children,Dc(c,d)?w=null:m!==null&&Dc(c,m)&&(i.flags|=32),Ip(n,i),bn(n,i,w,a),i.child;case 6:return n===null&&Gc(i),null;case 13:return kp(n,i,a);case 4:return Kc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Cs(i,null,c,a):bn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:di(c,d),Pp(n,i,c,d,a);case 7:return bn(n,i,i.pendingProps,a),i.child;case 8:return bn(n,i,i.pendingProps.children,a),i.child;case 12:return bn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,w=d.value,Bt(ko,c._currentValue),c._currentValue=w,m!==null)if(ci(m.value,w)){if(m.children===d.children&&!In.current){i=ji(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){w=m.child;for(var B=I.firstContext;B!==null;){if(B.context===c){if(m.tag===1){B=Wi(-1,a&-a),B.tag=2;var oe=m.updateQueue;if(oe!==null){oe=oe.shared;var _e=oe.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),oe.pending=B}}m.lanes|=a,B=m.alternate,B!==null&&(B.lanes|=a),qc(m.return,a,i),I.lanes|=a;break}B=B.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),qc(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}bn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ps(i,a),d=ti(d),c=c(d),i.flags|=1,bn(n,i,c,a),i.child;case 14:return c=i.type,d=di(c,i.pendingProps),d=di(c.type,d),Np(n,i,c,d,a);case 15:return Lp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:di(c,d),Ko(n,i),i.tag=1,Un(c)?(n=!0,Lo(i)):n=!1,Ps(i,a),Ep(i,c,d),cu(i,c,d,a),hu(null,i,c,!0,n,a);case 19:return zp(n,i,a);case 22:return Dp(n,i,a)}throw Error(t(156,i.tag))};function um(n,i){return po(n,i)}function rv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(n,i,a,c){return new rv(n,i,a,c)}function Du(n){return n=n.prototype,!(!n||!n.isReactComponent)}function sv(n){if(typeof n=="function")return Du(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===j)return 14}return 2}function yr(n,i){var a=n.alternate;return a===null?(a=ri(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ol(n,i,a,c,d,m){var w=2;if(c=n,typeof n=="function")Du(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case z:return Zr(a.children,d,m,i);case A:w=8,d|=8;break;case U:return n=ri(12,a,i,d|2),n.elementType=U,n.lanes=m,n;case ce:return n=ri(13,a,i,d),n.elementType=ce,n.lanes=m,n;case de:return n=ri(19,a,i,d),n.elementType=de,n.lanes=m,n;case k:return ll(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y:w=10;break e;case O:w=9;break e;case Z:w=11;break e;case j:w=14;break e;case re:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ri(w,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Zr(n,i,a,c){return n=ri(7,n,c,i),n.lanes=a,n}function ll(n,i,a,c){return n=ri(22,n,c,i),n.elementType=k,n.lanes=a,n.stateNode={isHidden:!1},n}function Iu(n,i,a){return n=ri(6,n,null,i),n.lanes=a,n}function Uu(n,i,a){return i=ri(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function av(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Fu(n,i,a,c,d,m,w,I,B){return n=new av(n,i,a,I,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ri(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(m),n}function ov(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function dm(n){if(!n)return fr;n=n._reactInternals;e:{if(yi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Un(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Un(a))return Bh(n,a,i)}return i}function fm(n,i,a,c,d,m,w,I,B){return n=Fu(a,c,!0,n,d,m,w,I,B),n.context=dm(null),a=n.current,c=Cn(),d=_r(a),m=Wi(c,d),m.callback=i??null,mr(a,m,d),n.current.lanes=d,mt(n,d,c),kn(n,c),n}function cl(n,i,a,c){var d=i.current,m=Cn(),w=_r(d);return a=dm(a),i.context===null?i.context=a:i.pendingContext=a,i=Wi(m,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=mr(d,i,w),n!==null&&(pi(n,d,w,m),zo(n,d,w)),w}function ul(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ou(n,i){hm(n,i),(n=n.alternate)&&hm(n,i)}function lv(){return null}var pm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ku(n){this._internalRoot=n}dl.prototype.render=ku.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));cl(n,i,null,null)},dl.prototype.unmount=ku.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Yr(function(){cl(null,n,null,null)}),i[Bi]=null}};function dl(n){this._internalRoot=n}dl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Nt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<or.length&&i!==0&&i<or[a].priority;a++);or.splice(a,0,n),a===0&&eh(n)}};function Bu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function fl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function mm(){}function cv(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var oe=ul(w);m.call(oe)}}var w=fm(i,c,n,0,null,!1,!1,"",mm);return n._reactRootContainer=w,n[Bi]=w.current,Ca(n.nodeType===8?n.parentNode:n),Yr(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var oe=ul(B);I.call(oe)}}var B=Fu(n,0,!1,null,null,!1,!1,"",mm);return n._reactRootContainer=B,n[Bi]=B.current,Ca(n.nodeType===8?n.parentNode:n),Yr(function(){cl(i,B,a,c)}),B}function hl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var w=m;if(typeof d=="function"){var I=d;d=function(){var B=ul(w);I.call(B)}}cl(i,w,n,d)}else w=cv(a,i,n,d,c);return ul(w)}Ct=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=St(i.pendingLanes);a!==0&&(Dn(i,a|1),kn(i,qt()),(Mt&6)===0&&(Us=qt()+500,hr()))}break;case 13:Yr(function(){var c=Hi(n,1);if(c!==null){var d=Cn();pi(c,n,1,d)}}),Ou(n,1)}},Vt=function(n){if(n.tag===13){var i=Hi(n,134217728);if(i!==null){var a=Cn();pi(i,n,134217728,a)}Ou(n,134217728)}},oi=function(n){if(n.tag===13){var i=_r(n),a=Hi(n,i);if(a!==null){var c=Cn();pi(a,n,i,c)}Ou(n,i)}},Nt=function(){return gt},li=function(n,i){var a=gt;try{return gt=n,i()}finally{gt=a}},st=function(n,i,a){switch(i){case"input":if(Xt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Po(c);if(!d)throw Error(t(90));Ut(c),Xt(c,d)}}}break;case"textarea":Le(n,a);break;case"select":i=a.value,i!=null&&Ot(n,!!a.multiple,i,!1)}},Ce=Pu,xe=Yr;var uv={usingClientEntryPoint:!1,Events:[Na,Ms,Po,fe,ke,Pu]},ja={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dv={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fa(n),n===null?null:n.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||lv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{J=pl.inject(dv),Re=pl}catch{}}return Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uv,Bn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bu(i))throw Error(t(200));return ov(n,i,null,a)},Bn.createRoot=function(n,i){if(!Bu(n))throw Error(t(299));var a=!1,c="",d=pm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Fu(n,1,!1,null,null,a,!1,c,d),n[Bi]=i.current,Ca(n.nodeType===8?n.parentNode:n),new ku(i)},Bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=fa(i),n=n===null?null:n.stateNode,n},Bn.flushSync=function(n){return Yr(n)},Bn.hydrate=function(n,i,a){if(!fl(i))throw Error(t(200));return hl(null,n,i,!0,a)},Bn.hydrateRoot=function(n,i,a){if(!Bu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",w=pm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=fm(i,null,n,1,a??null,d,!1,m,w),n[Bi]=i.current,Ca(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new dl(i)},Bn.render=function(n,i,a){if(!fl(i))throw Error(t(200));return hl(null,n,i,!1,a)},Bn.unmountComponentAtNode=function(n){if(!fl(n))throw Error(t(40));return n._reactRootContainer?(Yr(function(){hl(null,null,n,!1,function(){n._reactRootContainer=null,n[Bi]=null})}),!0):!1},Bn.unstable_batchedUpdates=Pu,Bn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!fl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return hl(n,i,a,!1,c)},Bn.version="18.3.1-next-f1338f8080-20240426",Bn}var Em;function Bg(){if(Em)return Gu.exports;Em=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Gu.exports=Mv(),Gu.exports}var wm;function Ev(){if(wm)return ml;wm=1;var r=Bg();return ml.createRoot=r.createRoot,ml.hydrateRoot=r.hydrateRoot,ml}var wv=Ev(),Tv=Bg();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},ro.apply(this,arguments)}var Pr;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Pr||(Pr={}));const Tm="popstate";function Av(r){r===void 0&&(r={});function e(o,l){let{pathname:u="/",search:f="",hash:h=""}=us(o.location.hash.substr(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Ad("",{pathname:u,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let u=o.document.querySelector("base"),f="";if(u&&u.getAttribute("href")){let h=o.location.href,p=h.indexOf("#");f=p===-1?h:h.slice(0,p)}return f+"#"+(typeof l=="string"?l:$l(l))}function s(o,l){nc(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Cv(e,t,s,r)}function en(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function nc(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bv(){return Math.random().toString(36).substr(2,8)}function Am(r,e){return{usr:r.state,key:r.key,idx:e}}function Ad(r,e,t,s){return t===void 0&&(t=null),ro({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?us(e):e,{state:t,key:e&&e.key||s||bv()})}function $l(r){let{pathname:e="/",search:t="",hash:s=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function us(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function Cv(r,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,u=o.history,f=Pr.Pop,h=null,p=_();p==null&&(p=0,u.replaceState(ro({},u.state,{idx:p}),""));function _(){return(u.state||{idx:null}).idx}function v(){f=Pr.Pop;let x=_(),S=x==null?null:x-p;p=x,h&&h({action:f,location:R.location,delta:S})}function g(x,S){f=Pr.Push;let C=Ad(R.location,x,S);t&&t(C,x),p=_()+1;let L=Am(C,p),N=R.createHref(C);try{u.pushState(L,"",N)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;o.location.assign(N)}l&&h&&h({action:f,location:R.location,delta:1})}function y(x,S){f=Pr.Replace;let C=Ad(R.location,x,S);t&&t(C,x),p=_();let L=Am(C,p),N=R.createHref(C);u.replaceState(L,"",N),l&&h&&h({action:f,location:R.location,delta:0})}function T(x){let S=o.location.origin!=="null"?o.location.origin:o.location.href,C=typeof x=="string"?x:$l(x);return C=C.replace(/ $/,"%20"),en(S,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,S)}let R={get action(){return f},get location(){return r(o,u)},listen(x){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Tm,v),h=x,()=>{o.removeEventListener(Tm,v),h=null}},createHref(x){return e(o,x)},createURL:T,encodeLocation(x){let S=T(x);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:g,replace:y,go(x){return u.go(x)}};return R}var bm;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(bm||(bm={}));function Rv(r,e,t){return t===void 0&&(t="/"),Pv(r,e,t)}function Pv(r,e,t,s){let o=typeof e=="string"?us(e):e,l=Tf(o.pathname||"/",t);if(l==null)return null;let u=zg(r);Nv(u);let f=null;for(let h=0;f==null&&h<u.length;++h){let p=Hv(l);f=zv(u[h],p)}return f}function zg(r,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,u,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};h.relativePath.startsWith("/")&&(en(h.relativePath.startsWith(s),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(s.length));let p=Lr([s,h.relativePath]),_=t.concat(h);l.children&&l.children.length>0&&(en(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),zg(l.children,e,_,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:kv(p,l.index),routesMeta:_})};return r.forEach((l,u)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,u);else for(let h of Vg(l.path))o(l,u,h)}),e}function Vg(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let u=Vg(s.join("/")),f=[];return f.push(...u.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...u),f.map(h=>r.startsWith("/")&&h===""?"/":h)}function Nv(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Bv(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const Lv=/^:[\w-]+$/,Dv=3,Iv=2,Uv=1,Fv=10,Ov=-2,Cm=r=>r==="*";function kv(r,e){let t=r.split("/"),s=t.length;return t.some(Cm)&&(s+=Ov),e&&(s+=Iv),t.filter(o=>!Cm(o)).reduce((o,l)=>o+(Lv.test(l)?Dv:l===""?Uv:Fv),s)}function Bv(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function zv(r,e,t){let{routesMeta:s}=r,o={},l="/",u=[];for(let f=0;f<s.length;++f){let h=s[f],p=f===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",v=Vv({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},_),g=h.route;if(!v)return null;Object.assign(o,v.params),u.push({params:o,pathname:Lr([l,v.pathname]),pathnameBase:Yv(Lr([l,v.pathnameBase])),route:g}),v.pathnameBase!=="/"&&(l=Lr([l,v.pathnameBase]))}return u}function Vv(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=Gv(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((p,_,v)=>{let{paramName:g,isOptional:y}=_;if(g==="*"){let R=f[v]||"";u=l.slice(0,l.length-R.length).replace(/(.)\/+$/,"$1")}const T=f[v];return y&&!T?p[g]=void 0:p[g]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:r}}function Gv(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),nc(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,h)=>(s.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Hv(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return nc(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Tf(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}const Wv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jv=r=>Wv.test(r);function Xv(r,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?us(r):r,l;if(t)if(jv(t))l=t;else{if(t.includes("//")){let u=t;t=t.replace(/\/\/+/g,"/"),nc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+t))}t.startsWith("/")?l=Rm(t.substring(1),"/"):l=Rm(t,e)}else l=e;return{pathname:l,search:$v(s),hash:Kv(o)}}function Rm(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ju(r,e,t,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qv(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Af(r,e){let t=qv(r);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function bf(r,e,t,s){s===void 0&&(s=!1);let o;typeof r=="string"?o=us(r):(o=ro({},r),en(!o.pathname||!o.pathname.includes("?"),ju("?","pathname","search",o)),en(!o.pathname||!o.pathname.includes("#"),ju("#","pathname","hash",o)),en(!o.search||!o.search.includes("#"),ju("#","search","hash",o)));let l=r===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=t;else{let v=e.length-1;if(!s&&u.startsWith("..")){let g=u.split("/");for(;g[0]==="..";)g.shift(),v-=1;o.pathname=g.join("/")}f=v>=0?e[v]:"/"}let h=Xv(o,f),p=u&&u!=="/"&&u.endsWith("/"),_=(l||u===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||_)&&(h.pathname+="/"),h}const Lr=r=>r.join("/").replace(/\/\/+/g,"/"),Yv=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),$v=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Kv=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Zv(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Gg=["post","put","patch","delete"];new Set(Gg);const Qv=["get",...Gg];new Set(Qv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},so.apply(this,arguments)}const Cf=Ne.createContext(null),Jv=Ne.createContext(null),Ur=Ne.createContext(null),ic=Ne.createContext(null),Fr=Ne.createContext({outlet:null,matches:[],isDataRoute:!1}),Hg=Ne.createContext(null);function e_(r,e){let{relative:t}=e===void 0?{}:e;sa()||en(!1);let{basename:s,navigator:o}=Ne.useContext(Ur),{hash:l,pathname:u,search:f}=Xg(r,{relative:t}),h=u;return s!=="/"&&(h=u==="/"?s:Lr([s,u])),o.createHref({pathname:h,search:f,hash:l})}function sa(){return Ne.useContext(ic)!=null}function aa(){return sa()||en(!1),Ne.useContext(ic).location}function Wg(r){Ne.useContext(Ur).static||Ne.useLayoutEffect(r)}function jg(){let{isDataRoute:r}=Ne.useContext(Fr);return r?h_():t_()}function t_(){sa()||en(!1);let r=Ne.useContext(Cf),{basename:e,future:t,navigator:s}=Ne.useContext(Ur),{matches:o}=Ne.useContext(Fr),{pathname:l}=aa(),u=JSON.stringify(Af(o,t.v7_relativeSplatPath)),f=Ne.useRef(!1);return Wg(()=>{f.current=!0}),Ne.useCallback(function(p,_){if(_===void 0&&(_={}),!f.current)return;if(typeof p=="number"){s.go(p);return}let v=bf(p,JSON.parse(u),l,_.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Lr([e,v.pathname])),(_.replace?s.replace:s.push)(v,_.state,_)},[e,s,u,l,r])}function Xg(r,e){let{relative:t}=e===void 0?{}:e,{future:s}=Ne.useContext(Ur),{matches:o}=Ne.useContext(Fr),{pathname:l}=aa(),u=JSON.stringify(Af(o,s.v7_relativeSplatPath));return Ne.useMemo(()=>bf(r,JSON.parse(u),l,t==="path"),[r,u,l,t])}function n_(r,e){return i_(r,e)}function i_(r,e,t,s){sa()||en(!1);let{navigator:o}=Ne.useContext(Ur),{matches:l}=Ne.useContext(Fr),u=l[l.length-1],f=u?u.params:{};u&&u.pathname;let h=u?u.pathnameBase:"/";u&&u.route;let p=aa(),_;if(e){var v;let x=typeof e=="string"?us(e):e;h==="/"||(v=x.pathname)!=null&&v.startsWith(h)||en(!1),_=x}else _=p;let g=_.pathname||"/",y=g;if(h!=="/"){let x=h.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let T=Rv(r,{pathname:y}),R=l_(T&&T.map(x=>Object.assign({},x,{params:Object.assign({},f,x.params),pathname:Lr([h,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?h:Lr([h,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),l,t,s);return e&&R?Ne.createElement(ic.Provider,{value:{location:so({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Pr.Pop}},R):R}function r_(){let r=f_(),e=Zv(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Ne.createElement(Ne.Fragment,null,Ne.createElement("h2",null,"Unexpected Application Error!"),Ne.createElement("h3",{style:{fontStyle:"italic"}},e),t?Ne.createElement("pre",{style:o},t):null,null)}const s_=Ne.createElement(r_,null);class a_ extends Ne.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Ne.createElement(Fr.Provider,{value:this.props.routeContext},Ne.createElement(Hg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function o_(r){let{routeContext:e,match:t,children:s}=r,o=Ne.useContext(Cf);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Ne.createElement(Fr.Provider,{value:e},s)}function l_(r,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let u=r,f=(o=t)==null?void 0:o.errors;if(f!=null){let _=u.findIndex(v=>v.route.id&&(f==null?void 0:f[v.route.id])!==void 0);_>=0||en(!1),u=u.slice(0,Math.min(u.length,_+1))}let h=!1,p=-1;if(t&&s&&s.v7_partialHydration)for(let _=0;_<u.length;_++){let v=u[_];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=_),v.route.id){let{loaderData:g,errors:y}=t,T=v.route.loader&&g[v.route.id]===void 0&&(!y||y[v.route.id]===void 0);if(v.route.lazy||T){h=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((_,v,g)=>{let y,T=!1,R=null,x=null;t&&(y=f&&v.route.id?f[v.route.id]:void 0,R=v.route.errorElement||s_,h&&(p<0&&g===0?(p_("route-fallback"),T=!0,x=null):p===g&&(T=!0,x=v.route.hydrateFallbackElement||null)));let S=e.concat(u.slice(0,g+1)),C=()=>{let L;return y?L=R:T?L=x:v.route.Component?L=Ne.createElement(v.route.Component,null):v.route.element?L=v.route.element:L=_,Ne.createElement(o_,{match:v,routeContext:{outlet:_,matches:S,isDataRoute:t!=null},children:L})};return t&&(v.route.ErrorBoundary||v.route.errorElement||g===0)?Ne.createElement(a_,{location:t.location,revalidation:t.revalidation,component:R,error:y,children:C(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):C()},null)}var qg=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(qg||{}),Yg=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(Yg||{});function c_(r){let e=Ne.useContext(Cf);return e||en(!1),e}function u_(r){let e=Ne.useContext(Jv);return e||en(!1),e}function d_(r){let e=Ne.useContext(Fr);return e||en(!1),e}function $g(r){let e=d_(),t=e.matches[e.matches.length-1];return t.route.id||en(!1),t.route.id}function f_(){var r;let e=Ne.useContext(Hg),t=u_(),s=$g();return e!==void 0?e:(r=t.errors)==null?void 0:r[s]}function h_(){let{router:r}=c_(qg.UseNavigateStable),e=$g(Yg.UseNavigateStable),t=Ne.useRef(!1);return Wg(()=>{t.current=!0}),Ne.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,so({fromRouteId:e},l)))},[r,e])}const Pm={};function p_(r,e,t){Pm[r]||(Pm[r]=!0)}function m_(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function g_(r){let{to:e,replace:t,state:s,relative:o}=r;sa()||en(!1);let{future:l,static:u}=Ne.useContext(Ur),{matches:f}=Ne.useContext(Fr),{pathname:h}=aa(),p=jg(),_=bf(e,Af(f,l.v7_relativeSplatPath),h,o==="path"),v=JSON.stringify(_);return Ne.useEffect(()=>p(JSON.parse(v),{replace:t,state:s,relative:o}),[p,v,o,t,s]),null}function Vl(r){en(!1)}function x_(r){let{basename:e="/",children:t=null,location:s,navigationType:o=Pr.Pop,navigator:l,static:u=!1,future:f}=r;sa()&&en(!1);let h=e.replace(/^\/*/,"/"),p=Ne.useMemo(()=>({basename:h,navigator:l,static:u,future:so({v7_relativeSplatPath:!1},f)}),[h,f,l,u]);typeof s=="string"&&(s=us(s));let{pathname:_="/",search:v="",hash:g="",state:y=null,key:T="default"}=s,R=Ne.useMemo(()=>{let x=Tf(_,h);return x==null?null:{location:{pathname:x,search:v,hash:g,state:y,key:T},navigationType:o}},[h,_,v,g,y,T,o]);return R==null?null:Ne.createElement(Ur.Provider,{value:p},Ne.createElement(ic.Provider,{children:t,value:R}))}function v_(r){let{children:e,location:t}=r;return n_(bd(e),t)}new Promise(()=>{});function bd(r,e){e===void 0&&(e=[]);let t=[];return Ne.Children.forEach(r,(s,o)=>{if(!Ne.isValidElement(s))return;let l=[...e,o];if(s.type===Ne.Fragment){t.push.apply(t,bd(s.props.children,l));return}s.type!==Vl&&en(!1),!s.props.index||!s.props.children||en(!1);let u={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=bd(s.props.children,l)),t.push(u)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cd(){return Cd=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Cd.apply(this,arguments)}function __(r,e){if(r==null)return{};var t={},s=Object.keys(r),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(t[o]=r[o]);return t}function S_(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function y_(r,e){return r.button===0&&(!e||e==="_self")&&!S_(r)}const M_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],E_="6";try{window.__reactRouterVersion=E_}catch{}const w_="startTransition",Nm=_v[w_];function T_(r){let{basename:e,children:t,future:s,window:o}=r,l=Ne.useRef();l.current==null&&(l.current=Av({window:o,v5Compat:!0}));let u=l.current,[f,h]=Ne.useState({action:u.action,location:u.location}),{v7_startTransition:p}=s||{},_=Ne.useCallback(v=>{p&&Nm?Nm(()=>h(v)):h(v)},[h,p]);return Ne.useLayoutEffect(()=>u.listen(_),[u,_]),Ne.useEffect(()=>m_(s),[s]),Ne.createElement(x_,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:u,future:s})}const A_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",b_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gl=Ne.forwardRef(function(e,t){let{onClick:s,relative:o,reloadDocument:l,replace:u,state:f,target:h,to:p,preventScrollReset:_,viewTransition:v}=e,g=__(e,M_),{basename:y}=Ne.useContext(Ur),T,R=!1;if(typeof p=="string"&&b_.test(p)&&(T=p,A_))try{let L=new URL(window.location.href),N=p.startsWith("//")?new URL(L.protocol+p):new URL(p),V=Tf(N.pathname,y);N.origin===L.origin&&V!=null?p=V+N.search+N.hash:R=!0}catch{}let x=e_(p,{relative:o}),S=C_(p,{replace:u,state:f,target:h,preventScrollReset:_,relative:o,viewTransition:v});function C(L){s&&s(L),L.defaultPrevented||S(L)}return Ne.createElement("a",Cd({},g,{href:T||x,onClick:R||l?s:C,ref:t,target:h}))});var Lm;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Lm||(Lm={}));var Dm;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Dm||(Dm={}));function C_(r,e){let{target:t,replace:s,state:o,preventScrollReset:l,relative:u,viewTransition:f}=e===void 0?{}:e,h=jg(),p=aa(),_=Xg(r,{relative:u});return Ne.useCallback(v=>{if(y_(v,t)){v.preventDefault();let g=s!==void 0?s:$l(p)===$l(_);h(r,{replace:g,state:o,preventScrollReset:l,relative:u,viewTransition:f})}},[p,h,_,s,o,t,r,l,u,f])}const ea="26.4.0",Kg="https://github.com/babyvibe/deplao-builder/releases",Rf=`${Kg}/latest/download`,R_=Kg,Rd="https://github.com/babyvibe/deplao-builder",P_=`Deplao-Setup-${ea}.exe`,Pf=`${Rf}/${P_}`,N_=`Deplao-${ea}-arm64.dmg`,Nf=`${Rf}/${N_}`,L_=`Deplao-${ea}.dmg`,Zg=`${Rf}/${L_}`,qa=240,Qg=({label:r="Tải xuống",variant:e="primary",block:t=!1,dropUp:s=!1,align:o="center",className:l="",wrapperClassName:u=""})=>{const[f,h]=Ne.useState(!1),[p,_]=Ne.useState({}),v=Ne.useRef(null),g=Ne.useRef(null),y=()=>{if(f){h(!1);return}if(v.current){const x=v.current.getBoundingClientRect();let S=o==="left"?x.left:o==="right"?x.right-qa:x.left+x.width/2-qa/2;S=Math.max(8,Math.min(S,window.innerWidth-qa-8));const C={position:"fixed",left:S,width:qa,zIndex:9999};s?C.bottom=window.innerHeight-x.top+6:C.top=x.bottom+6,_(C)}h(!0)};Ne.useEffect(()=>{const x=S=>{var L,N;const C=S.target;(L=v.current)!=null&&L.contains(C)||(N=g.current)!=null&&N.contains(C)||h(!1)};return f&&document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[f]),Ne.useEffect(()=>{if(!f)return;const x=()=>h(!1);return window.addEventListener("scroll",x,!0),window.addEventListener("resize",x),()=>{window.removeEventListener("scroll",x,!0),window.removeEventListener("resize",x)}},[f]);const T="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer border-none outline-none",R={primary:"btn-primary text-white",secondary:"btn-secondary",featured:"px-6 py-3 rounded-2xl text-sm text-white bg-gradient-to-r from-indigo-600 to-sky-500 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5",outlined:"px-6 py-3 rounded-2xl text-sm text-slate-700 border border-slate-200 bg-white/80 hover:bg-white hover:border-indigo-200 shadow-[0_10px_30px_rgba(148,163,184,0.12)]"};return E.jsxs("div",{className:`relative ${t?"block":"inline-block"} ${u}`.trim(),children:[E.jsxs("button",{ref:v,onClick:y,className:`${T} ${R[e]} ${t?"w-full":""} ${l}`,children:[E.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),E.jsx("span",{children:r}),E.jsx("svg",{className:`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${f?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M19 9l-7 7-7-7"})})]}),f&&Tv.createPortal(E.jsxs("div",{ref:g,style:{position:"fixed",top:p.top,bottom:p.bottom,left:p.left,width:qa,zIndex:9999,background:"rgba(255,255,255,0.92)",borderRadius:"18px",border:"1px solid rgba(148,163,184,0.18)",boxShadow:"0 30px 80px rgba(76,98,148,0.18)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",overflow:"hidden"},children:[E.jsxs("a",{href:Pf,download:!0,onClick:()=>h(!1),className:"flex items-center gap-3 px-4 py-3.5 text-sm text-slate-800 no-underline",style:{transition:"background 0.15s"},onMouseEnter:x=>x.currentTarget.style.background="rgba(238,242,255,0.95)",onMouseLeave:x=>x.currentTarget.style.background="transparent",children:[E.jsx("span",{className:"text-xl",children:"🪟"}),E.jsxs("div",{children:[E.jsx("div",{className:"font-semibold",children:"Windows 10/11"}),E.jsx("div",{className:"text-xs text-slate-500",children:".exe · 64-bit"})]})]}),E.jsx("div",{style:{borderTop:"1px solid rgba(148,163,184,0.14)"}}),E.jsxs("a",{href:Nf,download:!0,onClick:()=>h(!1),className:"flex items-center gap-3 px-4 py-3.5 text-sm text-slate-800 no-underline",style:{transition:"background 0.15s"},onMouseEnter:x=>x.currentTarget.style.background="rgba(238,242,255,0.95)",onMouseLeave:x=>x.currentTarget.style.background="transparent",children:[E.jsx("span",{className:"text-xl",children:"🍎"}),E.jsxs("div",{children:[E.jsx("div",{className:"font-semibold",children:"macOS Apple"}),E.jsx("div",{className:"text-xs text-slate-500",children:"chip M series"})]})]}),E.jsxs("a",{href:Zg,download:!0,onClick:()=>h(!1),className:"flex items-center gap-3 px-4 py-3.5 text-sm text-slate-800 no-underline",style:{transition:"background 0.15s"},onMouseEnter:x=>x.currentTarget.style.background="rgba(238,242,255,0.95)",onMouseLeave:x=>x.currentTarget.style.background="transparent",children:[E.jsx("span",{className:"text-xl",children:"💻"}),E.jsxs("div",{children:[E.jsx("div",{className:"font-semibold",children:"macOS Intel"}),E.jsx("div",{className:"text-xs text-slate-500",children:"chip Intel series"})]})]})]}),document.body)]})},D_="/deplao-builder/icon.png",Im=[{target:"features",label:"Tính năng"},{target:"workflow",label:"Workflow"},{target:"integration",label:"Tích hợp"},{target:"how-it-works",label:"Hướng dẫn"},{target:"faq",label:"FAQ"}],I_=()=>{const[r,e]=Ne.useState(!1),t=Ne.useCallback(s=>{const o=document.getElementById(s);o&&o.scrollIntoView({behavior:"smooth"})},[]);return E.jsxs("nav",{className:"fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/88 backdrop-blur-2xl shadow-[0_10px_28px_rgba(15,23,42,0.06)]",children:[E.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between",children:[E.jsxs("button",{onClick:()=>t("hero"),className:"flex items-center gap-3 no-underline group bg-transparent border-none cursor-pointer",children:[E.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)] ring-1 ring-slate-200",children:E.jsx("img",{src:D_,alt:"Deplao",className:"w-8 h-8 rounded-lg object-contain group-hover:scale-105 transition-transform"})}),E.jsxs("div",{className:"text-left",children:[E.jsx("span",{className:"block font-bold text-lg text-slate-900 tracking-tight",children:"Deplao"}),E.jsx("span",{className:"block text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400",children:"operator workspace"})]})]}),E.jsx("div",{className:"hidden md:flex items-center gap-6",children:Im.map(s=>E.jsx("button",{onClick:()=>t(s.target),className:"text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200 no-underline bg-transparent border-none cursor-pointer",children:s.label},s.target))}),E.jsx("div",{className:"hidden md:flex items-center gap-3",children:E.jsx(Qg,{label:"Tải xuống",variant:"primary",align:"right",className:"px-4 py-2 text-sm"})}),E.jsx("button",{onClick:()=>e(!r),className:"md:hidden p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors","aria-label":"Toggle menu",children:r?E.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):E.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]}),r&&E.jsxs("div",{className:"md:hidden border-t border-slate-200/80 bg-white/80 px-6 py-4 space-y-3 backdrop-blur-2xl",children:[Im.map(s=>E.jsx("button",{onClick:()=>{t(s.target),e(!1)},className:"block text-slate-600 hover:text-slate-900 py-2 text-sm font-medium no-underline bg-transparent border-none cursor-pointer w-full text-left",children:s.label},s.target)),E.jsxs("div",{className:"border-t border-slate-200 pt-3 space-y-2",children:[E.jsxs("a",{href:Pf,download:!0,onClick:()=>e(!1),className:"flex items-center gap-3 py-2.5 px-3 rounded-2xl text-sm font-semibold text-white no-underline shadow-[0_16px_35px_rgba(79,70,229,0.2)]",style:{background:"linear-gradient(135deg, #4f46e5, #0ea5e9)"},children:[E.jsx("span",{children:"🪟"})," Tải Windows (.exe)"]}),E.jsxs("a",{href:Nf,download:!0,onClick:()=>e(!1),className:"flex items-center gap-3 py-2.5 px-3 rounded-2xl text-sm font-semibold text-slate-700 no-underline bg-slate-50 hover:bg-white border border-slate-200",children:[E.jsx("span",{children:"🍎"})," macOS Apple Silicon"]}),E.jsxs("a",{href:Zg,download:!0,onClick:()=>e(!1),className:"flex items-center gap-3 py-2.5 px-3 rounded-2xl text-sm font-semibold text-slate-700 no-underline bg-slate-50 hover:bg-white border border-slate-200",children:[E.jsx("span",{children:"🍎"})," macOS Intel"]})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lf="184",U_=0,Um=1,F_=2,Hl=1,O_=2,to=3,Dr=0,Gn=1,Qi=2,er=0,Qs=1,Fm=2,Om=3,km=4,k_=5,is=100,B_=101,z_=102,V_=103,G_=104,H_=200,W_=201,j_=202,X_=203,Pd=204,Nd=205,q_=206,Y_=207,$_=208,K_=209,Z_=210,Q_=211,J_=212,eS=213,tS=214,Ld=0,Dd=1,Id=2,ta=3,Ud=4,Fd=5,Od=6,kd=7,Df=0,nS=1,iS=2,Li=0,Jg=1,e0=2,t0=3,n0=4,i0=5,r0=6,s0=7,a0=300,ls=301,na=302,Xu=303,qu=304,rc=306,Bd=1e3,Ji=1001,zd=1002,xn=1003,rS=1004,gl=1005,Tn=1006,Yu=1007,ss=1008,Kn=1009,o0=1010,l0=1011,ao=1012,If=1013,Ii=1014,Pi=1015,nr=1016,Uf=1017,Ff=1018,oo=1020,c0=35902,u0=35899,d0=1021,f0=1022,_i=1023,ir=1026,as=1027,h0=1028,Of=1029,cs=1030,kf=1031,Bf=1033,Wl=33776,jl=33777,Xl=33778,ql=33779,Vd=35840,Gd=35841,Hd=35842,Wd=35843,jd=36196,Xd=37492,qd=37496,Yd=37488,$d=37489,Kl=37490,Kd=37491,Zd=37808,Qd=37809,Jd=37810,ef=37811,tf=37812,nf=37813,rf=37814,sf=37815,af=37816,of=37817,lf=37818,cf=37819,uf=37820,df=37821,ff=36492,hf=36494,pf=36495,mf=36283,gf=36284,Zl=36285,xf=36286,sS=3200,vf=0,aS=1,Rr="",ai="srgb",Ql="srgb-linear",Jl="linear",Lt="srgb",Os=7680,Bm=519,oS=512,lS=513,cS=514,zf=515,uS=516,dS=517,Vf=518,fS=519,zm=35044,Vm="300 es",Ni=2e3,lo=2001;function hS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ec(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pS(){const r=ec("canvas");return r.style.display="block",r}const Gm={};function Hm(...r){const e="THREE."+r.shift();console.log(e,...r)}function p0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function it(...r){r=p0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Et(...r){r=p0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function _f(...r){const e=r.join(" ");e in Gm||(Gm[e]=!0,it(...r))}function mS(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const gS={[Ld]:Dd,[Id]:Od,[Ud]:kd,[ta]:Fd,[Dd]:Ld,[Od]:Id,[kd]:Ud,[Fd]:ta};class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$u=Math.PI/180,Sf=180/Math.PI;function co(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function xS(r,e){return(r%e+e)%e}function Ku(r,e,t){return(1-t)*r+t*e}function Ya(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function zn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Yf=class Yf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yf.prototype.isVector2=!0;let bt=Yf;class oa{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,f){let h=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3],g=l[u+0],y=l[u+1],T=l[u+2],R=l[u+3];if(v!==R||h!==g||p!==y||_!==T){let x=h*g+p*y+_*T+v*R;x<0&&(g=-g,y=-y,T=-T,R=-R,x=-x);let S=1-f;if(x<.9995){const C=Math.acos(x),L=Math.sin(C);S=Math.sin(S*C)/L,f=Math.sin(f*C)/L,h=h*S+g*f,p=p*S+y*f,_=_*S+T*f,v=v*S+R*f}else{h=h*S+g*f,p=p*S+y*f,_=_*S+T*f,v=v*S+R*f;const C=1/Math.sqrt(h*h+p*p+_*_+v*v);h*=C,p*=C,_*=C,v*=C}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,o,l,u){const f=s[o],h=s[o+1],p=s[o+2],_=s[o+3],v=l[u],g=l[u+1],y=l[u+2],T=l[u+3];return e[t]=f*T+_*v+h*y-p*g,e[t+1]=h*T+_*g+p*v-f*y,e[t+2]=p*T+_*y+f*g-h*v,e[t+3]=_*T-f*v-h*g-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(s/2),_=f(o/2),v=f(l/2),g=h(s/2),y=h(o/2),T=h(l/2);switch(u){case"XYZ":this._x=g*_*v+p*y*T,this._y=p*y*v-g*_*T,this._z=p*_*T+g*y*v,this._w=p*_*v-g*y*T;break;case"YXZ":this._x=g*_*v+p*y*T,this._y=p*y*v-g*_*T,this._z=p*_*T-g*y*v,this._w=p*_*v+g*y*T;break;case"ZXY":this._x=g*_*v-p*y*T,this._y=p*y*v+g*_*T,this._z=p*_*T+g*y*v,this._w=p*_*v-g*y*T;break;case"ZYX":this._x=g*_*v-p*y*T,this._y=p*y*v+g*_*T,this._z=p*_*T-g*y*v,this._w=p*_*v+g*y*T;break;case"YZX":this._x=g*_*v+p*y*T,this._y=p*y*v+g*_*T,this._z=p*_*T-g*y*v,this._w=p*_*v-g*y*T;break;case"XZY":this._x=g*_*v-p*y*T,this._y=p*y*v-g*_*T,this._z=p*_*T+g*y*v,this._w=p*_*v+g*y*T;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],_=t[6],v=t[10],g=s+f+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-h)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(s>f&&s>v){const y=2*Math.sqrt(1+s-f-v);this._w=(_-h)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(f>v){const y=2*Math.sqrt(1+f-s-v);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(h+_)/y}else{const y=2*Math.sqrt(1+v-s-f);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(h+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,_=t._w;return this._x=s*_+u*f+o*p-l*h,this._y=o*_+u*h+l*f-s*p,this._z=l*_+u*p+s*h-o*f,this._w=u*_-s*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),_=Math.sin(p);h=Math.sin(h*p)/_,t=Math.sin(t*p)/_,this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $f=class $f{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*s),_=2*(f*t-l*o),v=2*(l*s-u*t);return this.x=t+h*p+u*v-f*_,this.y=s+h*_+f*p-l*v,this.z=o+h*v+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-s*h,this.z=s*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$f.prototype.isVector3=!0;let ne=$f;const Zu=new ne,Wm=new oa,Kf=class Kf{constructor(e,t,s,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p)}set(e,t,s,o,l,u,f,h,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=t,_[4]=l,_[5]=h,_[6]=s,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[3],h=s[6],p=s[1],_=s[4],v=s[7],g=s[2],y=s[5],T=s[8],R=o[0],x=o[3],S=o[6],C=o[1],L=o[4],N=o[7],V=o[2],D=o[5],z=o[8];return l[0]=u*R+f*C+h*V,l[3]=u*x+f*L+h*D,l[6]=u*S+f*N+h*z,l[1]=p*R+_*C+v*V,l[4]=p*x+_*L+v*D,l[7]=p*S+_*N+v*z,l[2]=g*R+y*C+T*V,l[5]=g*x+y*L+T*D,l[8]=g*S+y*N+T*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8];return t*u*_-t*f*p-s*l*_+s*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],v=_*u-f*p,g=f*h-_*l,y=p*l-u*h,T=t*v+s*g+o*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(o*p-_*s)*R,e[2]=(f*s-o*u)*R,e[3]=g*R,e[4]=(_*t-o*h)*R,e[5]=(o*l-f*t)*R,e[6]=y*R,e[7]=(s*h-p*t)*R,e[8]=(u*t-s*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Qu.makeScale(e,t)),this}rotate(e){return this.premultiply(Qu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kf.prototype.isMatrix3=!0;let ct=Kf;const Qu=new ct,jm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vS(){const r={enabled:!0,workingColorSpace:Ql,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Lt&&(o.r=tr(o.r),o.g=tr(o.g),o.b=tr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Lt&&(o.r=Js(o.r),o.g=Js(o.g),o.b=Js(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Rr?Jl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return _f("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return _f("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ql]:{primaries:e,whitePoint:s,transfer:Jl,toXYZ:jm,fromXYZ:Xm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:s,transfer:Lt,toXYZ:jm,fromXYZ:Xm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),r}const vt=vS();function tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Js(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ks;class _S{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ks===void 0&&(ks=ec("canvas")),ks.width=e.width,ks.height=e.height;const o=ks.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=ks}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ec("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=tr(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(tr(t[s]/255)*255):t[s]=tr(t[s]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let SS=0;class Gf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Ju(o[u].image)):l.push(Ju(o[u]))}else l=Ju(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Ju(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_S.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let yS=0;const ed=new ne;class Pn extends ds{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,s=Ji,o=Ji,l=Tn,u=ss,f=_i,h=Kn,p=Pn.DEFAULT_ANISOTROPY,_=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=co(),this.name="",this.source=new Gf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==a0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bd:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bd:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=a0;Pn.DEFAULT_ANISOTROPY=1;const Zf=class Zf{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],_=h[4],v=h[8],g=h[1],y=h[5],T=h[9],R=h[2],x=h[6],S=h[10];if(Math.abs(_-g)<.01&&Math.abs(v-R)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+R)<.1&&Math.abs(T+x)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,N=(y+1)/2,V=(S+1)/2,D=(_+g)/4,z=(v+R)/4,A=(T+x)/4;return L>N&&L>V?L<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(L),o=D/s,l=z/s):N>V?N<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(N),s=D/o,l=A/o):V<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),s=z/l,o=A/l),this.set(s,o,l,t),this}let C=Math.sqrt((x-T)*(x-T)+(v-R)*(v-R)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(x-T)/C,this.y=(v-R)/C,this.z=(g-_)/C,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zf.prototype.isVector4=!0;let Zt=Zf;class MS extends ds{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new Pn(o),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Gf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends MS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class m0 extends Pn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ES extends Pn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tc=class tc{constructor(e,t,s,o,l,u,f,h,p,_,v,g,y,T,R,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p,_,v,g,y,T,R,x)}set(e,t,s,o,l,u,f,h,p,_,v,g,y,T,R,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=o,S[1]=l,S[5]=u,S[9]=f,S[13]=h,S[2]=p,S[6]=_,S[10]=v,S[14]=g,S[3]=y,S[7]=T,S[11]=R,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tc().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,o=1/Bs.setFromMatrixColumn(e,0).length(),l=1/Bs.setFromMatrixColumn(e,1).length(),u=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),_=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const g=u*_,y=u*v,T=f*_,R=f*v;t[0]=h*_,t[4]=-h*v,t[8]=p,t[1]=y+T*p,t[5]=g-R*p,t[9]=-f*h,t[2]=R-g*p,t[6]=T+y*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*_,y=h*v,T=p*_,R=p*v;t[0]=g+R*f,t[4]=T*f-y,t[8]=u*p,t[1]=u*v,t[5]=u*_,t[9]=-f,t[2]=y*f-T,t[6]=R+g*f,t[10]=u*h}else if(e.order==="ZXY"){const g=h*_,y=h*v,T=p*_,R=p*v;t[0]=g-R*f,t[4]=-u*v,t[8]=T+y*f,t[1]=y+T*f,t[5]=u*_,t[9]=R-g*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const g=u*_,y=u*v,T=f*_,R=f*v;t[0]=h*_,t[4]=T*p-y,t[8]=g*p+R,t[1]=h*v,t[5]=R*p+g,t[9]=y*p-T,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,y=u*p,T=f*h,R=f*p;t[0]=h*_,t[4]=R-g*v,t[8]=T*v+y,t[1]=v,t[5]=u*_,t[9]=-f*_,t[2]=-p*_,t[6]=y*v+T,t[10]=g-R*v}else if(e.order==="XZY"){const g=u*h,y=u*p,T=f*h,R=f*p;t[0]=h*_,t[4]=-v,t[8]=p*_,t[1]=g*v+R,t[5]=u*_,t[9]=y*v-T,t[2]=T*v-y,t[6]=f*_,t[10]=R*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wS,e,TS)}lookAt(e,t,s){const o=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Er.crossVectors(s,qn),Er.lengthSq()===0&&(Math.abs(s.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Er.crossVectors(s,qn)),Er.normalize(),xl.crossVectors(qn,Er),o[0]=Er.x,o[4]=xl.x,o[8]=qn.x,o[1]=Er.y,o[5]=xl.y,o[9]=qn.y,o[2]=Er.z,o[6]=xl.z,o[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[4],h=s[8],p=s[12],_=s[1],v=s[5],g=s[9],y=s[13],T=s[2],R=s[6],x=s[10],S=s[14],C=s[3],L=s[7],N=s[11],V=s[15],D=o[0],z=o[4],A=o[8],U=o[12],Y=o[1],O=o[5],Z=o[9],ce=o[13],de=o[2],j=o[6],re=o[10],k=o[14],q=o[3],Q=o[7],se=o[11],F=o[15];return l[0]=u*D+f*Y+h*de+p*q,l[4]=u*z+f*O+h*j+p*Q,l[8]=u*A+f*Z+h*re+p*se,l[12]=u*U+f*ce+h*k+p*F,l[1]=_*D+v*Y+g*de+y*q,l[5]=_*z+v*O+g*j+y*Q,l[9]=_*A+v*Z+g*re+y*se,l[13]=_*U+v*ce+g*k+y*F,l[2]=T*D+R*Y+x*de+S*q,l[6]=T*z+R*O+x*j+S*Q,l[10]=T*A+R*Z+x*re+S*se,l[14]=T*U+R*ce+x*k+S*F,l[3]=C*D+L*Y+N*de+V*q,l[7]=C*z+L*O+N*j+V*Q,l[11]=C*A+L*Z+N*re+V*se,l[15]=C*U+L*ce+N*k+V*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],_=e[2],v=e[6],g=e[10],y=e[14],T=e[3],R=e[7],x=e[11],S=e[15],C=h*y-p*g,L=f*y-p*v,N=f*g-h*v,V=u*y-p*_,D=u*g-h*_,z=u*v-f*_;return t*(R*C-x*L+S*N)-s*(T*C-x*V+S*D)+o*(T*L-R*V+S*z)-l*(T*N-R*D+x*z)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],v=e[9],g=e[10],y=e[11],T=e[12],R=e[13],x=e[14],S=e[15],C=t*f-s*u,L=t*h-o*u,N=t*p-l*u,V=s*h-o*f,D=s*p-l*f,z=o*p-l*h,A=_*R-v*T,U=_*x-g*T,Y=_*S-y*T,O=v*x-g*R,Z=v*S-y*R,ce=g*S-y*x,de=C*ce-L*Z+N*O+V*Y-D*U+z*A;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/de;return e[0]=(f*ce-h*Z+p*O)*j,e[1]=(o*Z-s*ce-l*O)*j,e[2]=(R*z-x*D+S*V)*j,e[3]=(g*D-v*z-y*V)*j,e[4]=(h*Y-u*ce-p*U)*j,e[5]=(t*ce-o*Y+l*U)*j,e[6]=(x*N-T*z-S*L)*j,e[7]=(_*z-g*N+y*L)*j,e[8]=(u*Z-f*Y+p*A)*j,e[9]=(s*Y-t*Z-l*A)*j,e[10]=(T*D-R*N+S*C)*j,e[11]=(v*N-_*D-y*C)*j,e[12]=(f*U-u*O-h*A)*j,e[13]=(t*O-s*U+o*A)*j,e[14]=(R*L-T*V-x*C)*j,e[15]=(_*V-v*L+g*C)*j,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,f=e.y,h=e.z,p=l*u,_=l*f;return this.set(p*u+s,p*f-o*h,p*h+o*f,0,p*f+o*h,_*f+s,_*h-o*u,0,p*h-o*f,_*h+o*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,_=u+u,v=f+f,g=l*p,y=l*_,T=l*v,R=u*_,x=u*v,S=f*v,C=h*p,L=h*_,N=h*v,V=s.x,D=s.y,z=s.z;return o[0]=(1-(R+S))*V,o[1]=(y+N)*V,o[2]=(T-L)*V,o[3]=0,o[4]=(y-N)*D,o[5]=(1-(g+S))*D,o[6]=(x+C)*D,o[7]=0,o[8]=(T+L)*z,o[9]=(x-C)*z,o[10]=(1-(g+R))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return s.set(1,1,1),t.identity(),this;let u=Bs.set(o[0],o[1],o[2]).length();const f=Bs.set(o[4],o[5],o[6]).length(),h=Bs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),mi.copy(this);const p=1/u,_=1/f,v=1/h;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=_,mi.elements[5]*=_,mi.elements[6]*=_,mi.elements[8]*=v,mi.elements[9]*=v,mi.elements[10]*=v,t.setFromRotationMatrix(mi),s.x=u,s.y=f,s.z=h,this}makePerspective(e,t,s,o,l,u,f=Ni,h=!1){const p=this.elements,_=2*l/(t-e),v=2*l/(s-o),g=(t+e)/(t-e),y=(s+o)/(s-o);let T,R;if(h)T=l/(u-l),R=u*l/(u-l);else if(f===Ni)T=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===lo)T=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,u,f=Ni,h=!1){const p=this.elements,_=2/(t-e),v=2/(s-o),g=-(t+e)/(t-e),y=-(s+o)/(s-o);let T,R;if(h)T=1/(u-l),R=u/(u-l);else if(f===Ni)T=-2/(u-l),R=-(u+l)/(u-l);else if(f===lo)T=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};tc.prototype.isMatrix4=!0;let Qt=tc;const Bs=new ne,mi=new Qt,wS=new ne(0,0,0),TS=new ne(1,1,1),Er=new ne,xl=new ne,qn=new ne,qm=new Qt,Ym=new oa;class Ir{constructor(e=0,t=0,s=0,o=Ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],_=o[9],v=o[2],g=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ym.setFromEuler(this),this.setFromQuaternion(Ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ir.DEFAULT_ORDER="XYZ";class g0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AS=0;const $m=new ne,zs=new oa,qi=new Qt,vl=new ne,$a=new ne,bS=new ne,CS=new oa,Km=new ne(1,0,0),Zm=new ne(0,1,0),Qm=new ne(0,0,1),Jm={type:"added"},RS={type:"removed"},Vs={type:"childadded",child:null},td={type:"childremoved",child:null};class vn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new ne,t=new Ir,s=new oa,o=new ne(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Qt},normalMatrix:{value:new ct}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Km,e)}rotateY(e){return this.rotateOnAxis(Zm,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,t){return $m.copy(e).applyQuaternion(this.quaternion),this.position.add($m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Km,e)}translateY(e){return this.translateOnAxis(Zm,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?vl.copy(e):vl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt($a,vl,this.up):qi.lookAt(vl,$a,this.up),this.quaternion.setFromRotationMatrix(qi),o&&(qi.extractRotation(o.matrixWorld),zs.setFromRotationMatrix(qi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jm),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RS),td.child=e,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jm),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,bS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,CS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const v=h[p];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),_=u(e.images),v=u(e.shapes),g=u(e.skeletons),y=u(e.animations),T=u(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=o,s;function u(f){const h=[];for(const p in f){const _=f[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}vn.DEFAULT_UP=new ne(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class os extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PS={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const x=t.getJointPose(R,s),S=this._getHandJoint(p,R);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),y=.02,T=.005;p.inputState.pinching&&g>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(PS)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new os;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const x0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},_l={h:0,s:0,l:0};function id(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class yt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=vt.workingColorSpace){return this.r=e,this.g=t,this.b=s,vt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=vt.workingColorSpace){if(e=xS(e,1),t=_t(t,0,1),s=_t(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=id(u,l,e+1/3),this.g=id(u,l,e),this.b=id(u,l,e-1/3)}return vt.colorSpaceToWorking(this,o),this}setStyle(e,t=ai){function s(l){l!==void 0&&parseFloat(l)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const s=x0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return vt.workingToColorSpace(wn.copy(this),e),Math.round(_t(wn.r*255,0,255))*65536+Math.round(_t(wn.g*255,0,255))*256+Math.round(_t(wn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(wn.copy(this),t);const s=wn.r,o=wn.g,l=wn.b,u=Math.max(s,o,l),f=Math.min(s,o,l);let h,p;const _=(f+u)/2;if(f===u)h=0,p=0;else{const v=u-f;switch(p=_<=.5?v/(u+f):v/(2-u-f),u){case s:h=(o-l)/v+(o<l?6:0);break;case o:h=(l-s)/v+2;break;case l:h=(s-o)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ai){vt.workingToColorSpace(wn.copy(this),e);const t=wn.r,s=wn.g,o=wn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(_l);const s=Ku(wr.h,_l.h,t),o=Ku(wr.s,_l.s,t),l=Ku(wr.l,_l.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new yt;yt.NAMES=x0;class Hf{constructor(e,t=1,s=1e3){this.isFog=!0,this.name="",this.color=new yt(e),this.near=t,this.far=s}clone(){return new Hf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class NS extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ir,this.environmentIntensity=1,this.environmentRotation=new Ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gi=new ne,Yi=new ne,rd=new ne,$i=new ne,Gs=new ne,Hs=new ne,eg=new ne,sd=new ne,ad=new ne,od=new ne,ld=new Zt,cd=new Zt,ud=new Zt;class vi{constructor(e=new ne,t=new ne,s=new ne){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),gi.subVectors(e,t),o.cross(gi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){gi.subVectors(o,t),Yi.subVectors(s,t),rd.subVectors(e,t);const u=gi.dot(gi),f=gi.dot(Yi),h=gi.dot(rd),p=Yi.dot(Yi),_=Yi.dot(rd),v=u*p-f*f;if(v===0)return l.set(0,0,0),null;const g=1/v,y=(p*h-f*_)*g,T=(u*_-f*h)*g;return l.set(1-y-T,T,y)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,s,o,l,u,f,h){return this.getBarycoord(e,t,s,o,$i)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,$i.x),h.addScaledVector(u,$i.y),h.addScaledVector(f,$i.z),h)}static getInterpolatedAttribute(e,t,s,o,l,u){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(e,t),cd.fromBufferAttribute(e,s),ud.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ld,l.x),u.addScaledVector(cd,l.y),u.addScaledVector(ud,l.z),u}static isFrontFacing(e,t,s,o){return gi.subVectors(s,t),Yi.subVectors(e,t),gi.cross(Yi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),gi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return vi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,f;Gs.subVectors(o,s),Hs.subVectors(l,s),sd.subVectors(e,s);const h=Gs.dot(sd),p=Hs.dot(sd);if(h<=0&&p<=0)return t.copy(s);ad.subVectors(e,o);const _=Gs.dot(ad),v=Hs.dot(ad);if(_>=0&&v<=_)return t.copy(o);const g=h*v-_*p;if(g<=0&&h>=0&&_<=0)return u=h/(h-_),t.copy(s).addScaledVector(Gs,u);od.subVectors(e,l);const y=Gs.dot(od),T=Hs.dot(od);if(T>=0&&y<=T)return t.copy(l);const R=y*p-h*T;if(R<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(s).addScaledVector(Hs,f);const x=_*T-y*v;if(x<=0&&v-_>=0&&y-T>=0)return eg.subVectors(l,o),f=(v-_)/(v-_+(y-T)),t.copy(o).addScaledVector(eg,f);const S=1/(x+R+g);return u=R*S,f=g*S,t.copy(s).addScaledVector(Gs,u).addScaledVector(Hs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class uo{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,xi):xi.fromBufferAttribute(l,u),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Sl.copy(s.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ka),yl.subVectors(this.max,Ka),Ws.subVectors(e.a,Ka),js.subVectors(e.b,Ka),Xs.subVectors(e.c,Ka),Tr.subVectors(js,Ws),Ar.subVectors(Xs,js),Qr.subVectors(Ws,Xs);let t=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-Qr.z,Qr.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,Qr.z,0,-Qr.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-Qr.y,Qr.x,0];return!dd(t,Ws,js,Xs,yl)||(t=[1,0,0,0,1,0,0,0,1],!dd(t,Ws,js,Xs,yl))?!1:(Ml.crossVectors(Tr,Ar),t=[Ml.x,Ml.y,Ml.z],dd(t,Ws,js,Xs,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],xi=new ne,Sl=new uo,Ws=new ne,js=new ne,Xs=new ne,Tr=new ne,Ar=new ne,Qr=new ne,Ka=new ne,yl=new ne,Ml=new ne,Jr=new ne;function dd(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){Jr.fromArray(r,l);const f=o.x*Math.abs(Jr.x)+o.y*Math.abs(Jr.y)+o.z*Math.abs(Jr.z),h=e.dot(Jr),p=t.dot(Jr),_=s.dot(Jr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>f)return!1}return!0}const rn=new ne,El=new bt;let LS=0;class Si extends ds{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=zm,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ya(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=zn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ya(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ya(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ya(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ya(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),s=zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),s=zn(s,this.array),o=zn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),s=zn(s,this.array),o=zn(o,this.array),l=zn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class v0 extends Si{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class _0 extends Si{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Nn extends Si{constructor(e,t,s){super(new Float32Array(e),t,s)}}const DS=new uo,Za=new ne,fd=new ne;class sc{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):DS.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Za.subVectors(e,this.center);const t=Za.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Za,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Za.copy(e.center).add(fd)),this.expandByPoint(Za.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let IS=0;const si=new Qt,hd=new vn,qs=new ne,Yn=new uo,Qa=new uo,fn=new ne;class Zn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hS(e)?_0:v0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ct().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,s){return si.makeTranslation(e,t,s),this.applyMatrix4(si),this}scale(e,t,s){return si.makeScale(e,t,s),this.applyMatrix4(si),this}lookAt(e){return hd.lookAt(e),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Nn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const s=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Qa.setFromBufferAttribute(f),this.morphTargetsRelative?(fn.addVectors(Yn.min,Qa.min),Yn.expandByPoint(fn),fn.addVectors(Yn.max,Qa.max),Yn.expandByPoint(fn)):(Yn.expandByPoint(Qa.min),Yn.expandByPoint(Qa.max))}Yn.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)fn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(fn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)fn.fromBufferAttribute(f,p),h&&(qs.fromBufferAttribute(e,p),fn.add(qs)),o=Math.max(o,s.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let A=0;A<s.count;A++)f[A]=new ne,h[A]=new ne;const p=new ne,_=new ne,v=new ne,g=new bt,y=new bt,T=new bt,R=new ne,x=new ne;function S(A,U,Y){p.fromBufferAttribute(s,A),_.fromBufferAttribute(s,U),v.fromBufferAttribute(s,Y),g.fromBufferAttribute(l,A),y.fromBufferAttribute(l,U),T.fromBufferAttribute(l,Y),_.sub(p),v.sub(p),y.sub(g),T.sub(g);const O=1/(y.x*T.y-T.x*y.y);isFinite(O)&&(R.copy(_).multiplyScalar(T.y).addScaledVector(v,-y.y).multiplyScalar(O),x.copy(v).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(O),f[A].add(R),f[U].add(R),f[Y].add(R),h[A].add(x),h[U].add(x),h[Y].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let A=0,U=C.length;A<U;++A){const Y=C[A],O=Y.start,Z=Y.count;for(let ce=O,de=O+Z;ce<de;ce+=3)S(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const L=new ne,N=new ne,V=new ne,D=new ne;function z(A){V.fromBufferAttribute(o,A),D.copy(V);const U=f[A];L.copy(U),L.sub(V.multiplyScalar(V.dot(U))).normalize(),N.crossVectors(D,U);const O=N.dot(h[A])<0?-1:1;u.setXYZW(A,L.x,L.y,L.z,O)}for(let A=0,U=C.length;A<U;++A){const Y=C[A],O=Y.start,Z=Y.count;for(let ce=O,de=O+Z;ce<de;ce+=3)z(e.getX(ce+0)),z(e.getX(ce+1)),z(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const o=new ne,l=new ne,u=new ne,f=new ne,h=new ne,p=new ne,_=new ne,v=new ne;if(e)for(let g=0,y=e.count;g<y;g+=3){const T=e.getX(g+0),R=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,x),_.subVectors(u,l),v.subVectors(o,l),_.cross(v),f.fromBufferAttribute(s,T),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,x),f.add(_),h.add(_),p.add(_),s.setXYZ(T,f.x,f.y,f.z),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let g=0,y=t.count;g<y;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),_.subVectors(u,l),v.subVectors(o,l),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(f,h){const p=f.array,_=f.itemSize,v=f.normalized,g=new p.constructor(h.length*_);let y=0,T=0;for(let R=0,x=h.length;R<x;R++){f.isInterleavedBufferAttribute?y=h[R]*f.data.stride+f.offset:y=h[R]*_;for(let S=0;S<_;S++)g[T++]=p[y++]}return new Si(g,_,v)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let _=0,v=p.length;_<v;_++){const g=p[_],y=e(g,s);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let v=0,g=p.length;v<g;v++){const y=p[v];_.push(y.toJSON(e.data))}_.length>0&&(o[h]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],v=l[p];for(let g=0,y=v.length;g<y;g++)_.push(v[g].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let US=0;class la extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=co(),this.name="",this.type="Material",this.blending=Qs,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Nd,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(s.blending=this.blending),this.side!==Dr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Pd&&(s.blendSrc=this.blendSrc),this.blendDst!==Nd&&(s.blendDst=this.blendDst),this.blendEquation!==is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zi=new ne,pd=new ne,wl=new ne,br=new ne,md=new ne,Tl=new ne,gd=new ne;class S0{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){pd.copy(e).add(t).multiplyScalar(.5),wl.copy(t).sub(e).normalize(),br.copy(this.origin).sub(pd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(wl),f=br.dot(this.direction),h=-br.dot(wl),p=br.lengthSq(),_=Math.abs(1-u*u);let v,g,y,T;if(_>0)if(v=u*h-f,g=u*f-h,T=l*_,v>=0)if(g>=-T)if(g<=T){const R=1/_;v*=R,g*=R,y=v*(v+u*g+2*f)+g*(u*v+g+2*h)+p}else g=l,v=Math.max(0,-(u*g+f)),y=-v*v+g*(g+2*h)+p;else g=-l,v=Math.max(0,-(u*g+f)),y=-v*v+g*(g+2*h)+p;else g<=-T?(v=Math.max(0,-(-u*l+f)),g=v>0?-l:Math.min(Math.max(-l,-h),l),y=-v*v+g*(g+2*h)+p):g<=T?(v=0,g=Math.min(Math.max(-l,-h),l),y=g*(g+2*h)+p):(v=Math.max(0,-(u*l+f)),g=v>0?l:Math.min(Math.max(-l,-h),l),y=-v*v+g*(g+2*h)+p);else g=u>0?-l:l,v=Math.max(0,-(u*g+f)),y=-v*v+g*(g+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(pd).addScaledVector(wl,g),y}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const s=Zi.dot(this.direction),o=Zi.dot(Zi)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=s-u,h=s+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,f,h;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(l=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),v>=0?(f=(e.min.z-g.z)*v,h=(e.max.z-g.z)*v):(f=(e.max.z-g.z)*v,h=(e.min.z-g.z)*v),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,s,o,l){md.subVectors(t,e),Tl.subVectors(s,e),gd.crossVectors(md,Tl);let u=this.direction.dot(gd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;br.subVectors(this.origin,e);const h=f*this.direction.dot(Tl.crossVectors(br,Tl));if(h<0)return null;const p=f*this.direction.dot(md.cross(br));if(p<0||h+p>u)return null;const _=-f*br.dot(gd);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class io extends la{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=Df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tg=new Qt,es=new S0,Al=new sc,ng=new ne,bl=new ne,Cl=new ne,Rl=new ne,xd=new ne,Pl=new ne,ig=new ne,Nl=new ne;class Vn extends vn{constructor(e=new Zn,t=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Pl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=f[h],v=l[h];_!==0&&(xd.fromBufferAttribute(v,e),u?Pl.addScaledVector(xd,_):Pl.addScaledVector(xd.sub(t),_))}t.add(Pl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Al.copy(s.boundingSphere),Al.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(Al.containsPoint(es.origin)===!1&&(es.intersectSphere(Al,ng)===null||es.origin.distanceToSquared(ng)>(e.far-e.near)**2))&&(tg.copy(l).invert(),es.copy(e.ray).applyMatrix4(tg),!(s.boundingBox!==null&&es.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,g=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,R=g.length;T<R;T++){const x=g[T],S=u[x.materialIndex],C=Math.max(x.start,y.start),L=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let N=C,V=L;N<V;N+=3){const D=f.getX(N),z=f.getX(N+1),A=f.getX(N+2);o=Ll(this,S,e,s,p,_,v,D,z,A),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const T=Math.max(0,y.start),R=Math.min(f.count,y.start+y.count);for(let x=T,S=R;x<S;x+=3){const C=f.getX(x),L=f.getX(x+1),N=f.getX(x+2);o=Ll(this,u,e,s,p,_,v,C,L,N),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,R=g.length;T<R;T++){const x=g[T],S=u[x.materialIndex],C=Math.max(x.start,y.start),L=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let N=C,V=L;N<V;N+=3){const D=N,z=N+1,A=N+2;o=Ll(this,S,e,s,p,_,v,D,z,A),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const T=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let x=T,S=R;x<S;x+=3){const C=x,L=x+1,N=x+2;o=Ll(this,u,e,s,p,_,v,C,L,N),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function FS(r,e,t,s,o,l,u,f){let h;if(e.side===Gn?h=s.intersectTriangle(u,l,o,!0,f):h=s.intersectTriangle(o,l,u,e.side===Dr,f),h===null)return null;Nl.copy(f),Nl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Nl);return p<t.near||p>t.far?null:{distance:p,point:Nl.clone(),object:r}}function Ll(r,e,t,s,o,l,u,f,h,p){r.getVertexPosition(f,bl),r.getVertexPosition(h,Cl),r.getVertexPosition(p,Rl);const _=FS(r,e,t,s,bl,Cl,Rl,ig);if(_){const v=new ne;vi.getBarycoord(ig,bl,Cl,Rl,v),o&&(_.uv=vi.getInterpolatedAttribute(o,f,h,p,v,new bt)),l&&(_.uv1=vi.getInterpolatedAttribute(l,f,h,p,v,new bt)),u&&(_.normal=vi.getInterpolatedAttribute(u,f,h,p,v,new ne),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new ne,materialIndex:0};vi.getNormal(bl,Cl,Rl,g.normal),_.face=g,_.barycoord=v}return _}class OS extends Pn{constructor(e=null,t=1,s=1,o,l,u,f,h,p=xn,_=xn,v,g){super(null,u,f,h,p,_,o,l,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vd=new ne,kS=new ne,BS=new ct;class ns{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=vd.subVectors(s,t).cross(kS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const o=e.delta(vd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||BS.getNormalMatrix(e),o=this.coplanarPoint(vd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new sc,zS=new bt(.5,.5),Dl=new ne;class Wf{constructor(e=new ns,t=new ns,s=new ns,o=new ns,l=new ns,u=new ns){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Ni,s=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],_=l[4],v=l[5],g=l[6],y=l[7],T=l[8],R=l[9],x=l[10],S=l[11],C=l[12],L=l[13],N=l[14],V=l[15];if(o[0].setComponents(p-u,y-_,S-T,V-C).normalize(),o[1].setComponents(p+u,y+_,S+T,V+C).normalize(),o[2].setComponents(p+f,y+v,S+R,V+L).normalize(),o[3].setComponents(p-f,y-v,S-R,V-L).normalize(),s)o[4].setComponents(h,g,x,N).normalize(),o[5].setComponents(p-h,y-g,S-x,V-N).normalize();else if(o[4].setComponents(p-h,y-g,S-x,V-N).normalize(),t===Ni)o[5].setComponents(p+h,y+g,S+x,V+N).normalize();else if(t===lo)o[5].setComponents(h,g,x,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=zS.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Dl.x=o.normal.x>0?e.max.x:e.min.x,Dl.y=o.normal.y>0?e.max.y:e.min.y,Dl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class y0 extends la{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rg=new Qt,yf=new S0,Il=new sc,Ul=new ne;class VS extends vn{constructor(e=new Zn,t=new y0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Il.copy(s.boundingSphere),Il.applyMatrix4(o),Il.radius+=l,e.ray.intersectsSphere(Il)===!1)return;rg.copy(o).invert(),yf.copy(e.ray).applyMatrix4(rg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=s.index,v=s.attributes.position;if(p!==null){const g=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let T=g,R=y;T<R;T++){const x=p.getX(T);Ul.fromBufferAttribute(v,x),sg(Ul,x,h,o,e,t,this)}}else{const g=Math.max(0,u.start),y=Math.min(v.count,u.start+u.count);for(let T=g,R=y;T<R;T++)Ul.fromBufferAttribute(v,T),sg(Ul,T,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function sg(r,e,t,s,o,l,u){const f=yf.distanceSqToPoint(r);if(f<t){const h=new ne;yf.closestPointToPoint(r,h),h.applyMatrix4(s);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class M0 extends Pn{constructor(e=[],t=ls,s,o,l,u,f,h,p,_){super(e,t,s,o,l,u,f,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ia extends Pn{constructor(e,t,s=Ii,o,l,u,f=xn,h=xn,p,_=ir,v=1){if(_!==ir&&_!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,o,l,u,f,h,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class GS extends ia{constructor(e,t=Ii,s=ls,o,l,u=xn,f=xn,h,p=ir){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,t,s,o,l,u,f,h,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class E0 extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fo extends Zn{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],_=[],v=[];let g=0,y=0;T("z","y","x",-1,-1,s,t,e,u,l,0),T("z","y","x",1,-1,s,t,-e,u,l,1),T("x","z","y",1,1,e,s,t,o,u,2),T("x","z","y",1,-1,e,s,-t,o,u,3),T("x","y","z",1,-1,e,t,s,o,l,4),T("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new Nn(p,3)),this.setAttribute("normal",new Nn(_,3)),this.setAttribute("uv",new Nn(v,2));function T(R,x,S,C,L,N,V,D,z,A,U){const Y=N/z,O=V/A,Z=N/2,ce=V/2,de=D/2,j=z+1,re=A+1;let k=0,q=0;const Q=new ne;for(let se=0;se<re;se++){const F=se*O-ce;for(let ee=0;ee<j;ee++){const Oe=ee*Y-Z;Q[R]=Oe*C,Q[x]=F*L,Q[S]=de,p.push(Q.x,Q.y,Q.z),Q[R]=0,Q[x]=0,Q[S]=D>0?1:-1,_.push(Q.x,Q.y,Q.z),v.push(ee/z),v.push(1-se/A),k+=1}}for(let se=0;se<A;se++)for(let F=0;F<z;F++){const ee=g+F+j*se,Oe=g+F+j*(se+1),He=g+(F+1)+j*(se+1),Ie=g+(F+1)+j*se;h.push(ee,Oe,Ie),h.push(Oe,He,Ie),q+=6}f.addGroup(y,q,U),y+=q,g+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ac extends Zn{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(s),h=Math.floor(o),p=f+1,_=h+1,v=e/f,g=t/h,y=[],T=[],R=[],x=[];for(let S=0;S<_;S++){const C=S*g-u;for(let L=0;L<p;L++){const N=L*v-l;T.push(N,-C,0),R.push(0,0,1),x.push(L/f),x.push(1-S/h)}}for(let S=0;S<h;S++)for(let C=0;C<f;C++){const L=C+p*S,N=C+p*(S+1),V=C+1+p*(S+1),D=C+1+p*S;y.push(L,N,D),y.push(N,V,D)}this.setIndex(y),this.setAttribute("position",new Nn(T,3)),this.setAttribute("normal",new Nn(R,3)),this.setAttribute("uv",new Nn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zs extends Zn{constructor(e=1,t=32,s=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const h=Math.min(u+f,Math.PI);let p=0;const _=[],v=new ne,g=new ne,y=[],T=[],R=[],x=[];for(let S=0;S<=s;S++){const C=[],L=S/s;let N=0;S===0&&u===0?N=.5/t:S===s&&h===Math.PI&&(N=-.5/t);for(let V=0;V<=t;V++){const D=V/t;v.x=-e*Math.cos(o+D*l)*Math.sin(u+L*f),v.y=e*Math.cos(u+L*f),v.z=e*Math.sin(o+D*l)*Math.sin(u+L*f),T.push(v.x,v.y,v.z),g.copy(v).normalize(),R.push(g.x,g.y,g.z),x.push(D+N,1-L),C.push(p++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<t;C++){const L=_[S][C+1],N=_[S][C],V=_[S+1][C],D=_[S+1][C+1];(S!==0||u>0)&&y.push(L,N,D),(S!==s-1||h<Math.PI)&&y.push(N,V,D)}this.setIndex(y),this.setAttribute("position",new Nn(T,3)),this.setAttribute("normal",new Nn(R,3)),this.setAttribute("uv",new Nn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jf extends Zn{constructor(e=1,t=.4,s=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},s=Math.floor(s),o=Math.floor(o);const h=[],p=[],_=[],v=[],g=new ne,y=new ne,T=new ne;for(let R=0;R<=s;R++){const x=u+R/s*f;for(let S=0;S<=o;S++){const C=S/o*l;y.x=(e+t*Math.cos(x))*Math.cos(C),y.y=(e+t*Math.cos(x))*Math.sin(C),y.z=t*Math.sin(x),p.push(y.x,y.y,y.z),g.x=e*Math.cos(C),g.y=e*Math.sin(C),T.subVectors(y,g).normalize(),_.push(T.x,T.y,T.z),v.push(S/o),v.push(R/s)}}for(let R=1;R<=s;R++)for(let x=1;x<=o;x++){const S=(o+1)*R+x-1,C=(o+1)*(R-1)+x-1,L=(o+1)*(R-1)+x,N=(o+1)*R+x;h.push(S,C,N),h.push(C,L,N)}this.setIndex(h),this.setAttribute("position",new Nn(p,3)),this.setAttribute("normal",new Nn(_,3)),this.setAttribute("uv",new Nn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function ra(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];if(ag(o))o.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(ag(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function Rn(r){const e={};for(let t=0;t<r.length;t++){const s=ra(r[t]);for(const o in s)e[o]=s[o]}return e}function ag(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function HS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function w0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const WS={clone:ra,merge:Rn};var jS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends la{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jS,this.fragmentShader=XS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=HS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class qS extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class og extends la{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new yt(16777215),this.specular=new yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=Df,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class YS extends la{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $S extends la{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xf extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const _d=new Qt,lg=new ne,cg=new ne;class T0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wf,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;lg.setFromMatrixPosition(e.matrixWorld),t.position.copy(lg),cg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cg),t.updateMatrixWorld(),_d.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_d,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===lo||t.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(_d)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fl=new ne,Ol=new oa,bi=new ne;class A0 extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fl,Ol,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Ol,bi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Fl,Ol,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Ol,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new ne,ug=new bt,dg=new bt;class $n extends A0{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sf*2*Math.atan(Math.tan($u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,ug,dg),t.subVectors(dg,ug)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($u*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*s/p,o*=u.width/h,s*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class KS extends T0{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0}}class fg extends Xf{constructor(e,t,s=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=o,this.shadow=new KS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class qf extends A0{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ZS extends T0{constructor(){super(new qf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class QS extends Xf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new ZS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class JS extends Xf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ys=-90,$s=1;class ey extends vn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new $n(Ys,$s,e,t);o.layers=this.layers,this.add(o);const l=new $n(Ys,$s,e,t);l.layers=this.layers,this.add(l);const u=new $n(Ys,$s,e,t);u.layers=this.layers,this.add(u);const f=new $n(Ys,$s,e,t);f.layers=this.layers,this.add(f);const h=new $n(Ys,$s,e,t);h.layers=this.layers,this.add(h);const p=new $n(Ys,$s,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Ni)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===lo)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(v,g,y),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class ty extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ny{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,it("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Qf=class Qf{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};Qf.prototype.isMatrix2=!0;let hg=Qf;function pg(r,e,t,s){const o=iy(s);switch(t){case d0:return r*e;case h0:return r*e/o.components*o.byteLength;case Of:return r*e/o.components*o.byteLength;case cs:return r*e*2/o.components*o.byteLength;case kf:return r*e*2/o.components*o.byteLength;case f0:return r*e*3/o.components*o.byteLength;case _i:return r*e*4/o.components*o.byteLength;case Bf:return r*e*4/o.components*o.byteLength;case Wl:case jl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xl:case ql:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gd:case Wd:return Math.max(r,16)*Math.max(e,8)/4;case Vd:case Hd:return Math.max(r,8)*Math.max(e,8)/2;case jd:case Xd:case Yd:case $d:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qd:case Kl:case Kd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ef:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case tf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case nf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case rf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case sf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case af:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case of:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case lf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case cf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case uf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case df:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ff:case hf:case pf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case mf:case gf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Zl:case xf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iy(r){switch(r){case Kn:case o0:return{byteLength:1,components:1};case ao:case l0:case nr:return{byteLength:2,components:1};case Uf:case Ff:return{byteLength:2,components:4};case Ii:case If:case Pi:return{byteLength:4,components:1};case c0:case u0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lf}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function b0(){let r=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function ry(r){const e=new WeakMap;function t(f,h){const p=f.array,_=f.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,p,_),f.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,h,p){const _=h.array,v=h.updateRanges;if(r.bindBuffer(p,f),v.length===0)r.bufferSubData(p,0,_);else{v.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<v.length;y++){const T=v[g],R=v[y];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++g,v[g]=R)}v.length=g+1;for(let y=0,T=v.length;y<T;y++){const R=v[y];r.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ay=`#ifdef USE_ALPHAHASH
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
#endif`,oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dy=`#ifdef USE_AOMAP
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
#endif`,fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hy=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,my=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vy=`#ifdef USE_IRIDESCENCE
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
#endif`,_y=`#ifdef USE_BUMPMAP
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
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,by=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cy=`#define PI 3.141592653589793
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
} // validated`,Ry=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Py=`vec3 transformedNormal = objectNormal;
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
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oy=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xy=`#ifdef USE_GRADIENTMAP
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
}`,qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ky=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,Zy=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,iM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rM=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,aM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mM=`#if defined( USE_POINTS_UV )
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
#endif`,gM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_M=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yM=`#ifdef USE_MORPHTARGETS
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
#endif`,MM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CM=`#ifdef USE_NORMALMAP
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
#endif`,RM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,UM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,GM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,WM=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,jM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XM=`#ifdef USE_SKINNING
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
#endif`,qM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YM=`#ifdef USE_SKINNING
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
#endif`,$M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JM=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eE=`#ifdef USE_TRANSMISSION
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
#endif`,tE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aE=`uniform sampler2D t2D;
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
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`#include <common>
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
}`,fE=`#if DEPTH_PACKING == 3200
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
}`,hE=`#define DISTANCE
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
}`,pE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`uniform float scale;
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
}`,vE=`uniform vec3 diffuse;
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
}`,_E=`#include <common>
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
}`,SE=`uniform vec3 diffuse;
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
}`,yE=`#define LAMBERT
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
}`,ME=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,EE=`#define MATCAP
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
}`,wE=`#define MATCAP
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
}`,TE=`#define NORMAL
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
}`,AE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bE=`#define PHONG
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
}`,CE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,RE=`#define STANDARD
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
}`,PE=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,NE=`#define TOON
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
}`,LE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,DE=`uniform float size;
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
}`,IE=`uniform vec3 diffuse;
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
}`,UE=`#include <common>
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
}`,FE=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,OE=`uniform float rotation;
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
}`,kE=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:sy,alphahash_pars_fragment:ay,alphamap_fragment:oy,alphamap_pars_fragment:ly,alphatest_fragment:cy,alphatest_pars_fragment:uy,aomap_fragment:dy,aomap_pars_fragment:fy,batching_pars_vertex:hy,batching_vertex:py,begin_vertex:my,beginnormal_vertex:gy,bsdfs:xy,iridescence_fragment:vy,bumpmap_pars_fragment:_y,clipping_planes_fragment:Sy,clipping_planes_pars_fragment:yy,clipping_planes_pars_vertex:My,clipping_planes_vertex:Ey,color_fragment:wy,color_pars_fragment:Ty,color_pars_vertex:Ay,color_vertex:by,common:Cy,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Py,displacementmap_pars_vertex:Ny,displacementmap_vertex:Ly,emissivemap_fragment:Dy,emissivemap_pars_fragment:Iy,colorspace_fragment:Uy,colorspace_pars_fragment:Fy,envmap_fragment:Oy,envmap_common_pars_fragment:ky,envmap_pars_fragment:By,envmap_pars_vertex:zy,envmap_physical_pars_fragment:Zy,envmap_vertex:Vy,fog_vertex:Gy,fog_pars_vertex:Hy,fog_fragment:Wy,fog_pars_fragment:jy,gradientmap_pars_fragment:Xy,lightmap_pars_fragment:qy,lights_lambert_fragment:Yy,lights_lambert_pars_fragment:$y,lights_pars_begin:Ky,lights_toon_fragment:Qy,lights_toon_pars_fragment:Jy,lights_phong_fragment:eM,lights_phong_pars_fragment:tM,lights_physical_fragment:nM,lights_physical_pars_fragment:iM,lights_fragment_begin:rM,lights_fragment_maps:sM,lights_fragment_end:aM,lightprobes_pars_fragment:oM,logdepthbuf_fragment:lM,logdepthbuf_pars_fragment:cM,logdepthbuf_pars_vertex:uM,logdepthbuf_vertex:dM,map_fragment:fM,map_pars_fragment:hM,map_particle_fragment:pM,map_particle_pars_fragment:mM,metalnessmap_fragment:gM,metalnessmap_pars_fragment:xM,morphinstance_vertex:vM,morphcolor_vertex:_M,morphnormal_vertex:SM,morphtarget_pars_vertex:yM,morphtarget_vertex:MM,normal_fragment_begin:EM,normal_fragment_maps:wM,normal_pars_fragment:TM,normal_pars_vertex:AM,normal_vertex:bM,normalmap_pars_fragment:CM,clearcoat_normal_fragment_begin:RM,clearcoat_normal_fragment_maps:PM,clearcoat_pars_fragment:NM,iridescence_pars_fragment:LM,opaque_fragment:DM,packing:IM,premultiplied_alpha_fragment:UM,project_vertex:FM,dithering_fragment:OM,dithering_pars_fragment:kM,roughnessmap_fragment:BM,roughnessmap_pars_fragment:zM,shadowmap_pars_fragment:VM,shadowmap_pars_vertex:GM,shadowmap_vertex:HM,shadowmask_pars_fragment:WM,skinbase_vertex:jM,skinning_pars_vertex:XM,skinning_vertex:qM,skinnormal_vertex:YM,specularmap_fragment:$M,specularmap_pars_fragment:KM,tonemapping_fragment:ZM,tonemapping_pars_fragment:QM,transmission_fragment:JM,transmission_pars_fragment:eE,uv_pars_fragment:tE,uv_pars_vertex:nE,uv_vertex:iE,worldpos_vertex:rE,background_vert:sE,background_frag:aE,backgroundCube_vert:oE,backgroundCube_frag:lE,cube_vert:cE,cube_frag:uE,depth_vert:dE,depth_frag:fE,distance_vert:hE,distance_frag:pE,equirect_vert:mE,equirect_frag:gE,linedashed_vert:xE,linedashed_frag:vE,meshbasic_vert:_E,meshbasic_frag:SE,meshlambert_vert:yE,meshlambert_frag:ME,meshmatcap_vert:EE,meshmatcap_frag:wE,meshnormal_vert:TE,meshnormal_frag:AE,meshphong_vert:bE,meshphong_frag:CE,meshphysical_vert:RE,meshphysical_frag:PE,meshtoon_vert:NE,meshtoon_frag:LE,points_vert:DE,points_frag:IE,shadow_vert:UE,shadow_frag:FE,sprite_vert:OE,sprite_frag:kE},De={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ri={basic:{uniforms:Rn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Rn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Rn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Rn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Rn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new yt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Rn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Rn([De.points,De.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Rn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Rn([De.common,De.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Rn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Rn([De.sprite,De.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Rn([De.common,De.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Rn([De.lights,De.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ri.physical={uniforms:Rn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const kl={r:0,b:0,g:0},BE=new Qt,C0=new ct;C0.set(-1,0,0,0,1,0,0,0,1);function zE(r,e,t,s,o,l){const u=new yt(0);let f=o===!0?0:1,h,p,_=null,v=0,g=null;function y(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const N=C.backgroundBlurriness>0;L=e.get(L,N)}return L}function T(C){let L=!1;const N=y(C);N===null?x(u,f):N&&N.isColor&&(x(N,1),L=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?t.buffers.color.setClear(0,0,0,1,l):V==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(C,L){const N=y(L);N&&(N.isCubeTexture||N.mapping===rc)?(p===void 0&&(p=new Vn(new fo(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:ra(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(BE.makeRotationFromEuler(L.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(C0),p.material.toneMapped=vt.getTransfer(N.colorSpace)!==Lt,(_!==N||v!==N.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new Vn(new ac(2,2),new Ui({name:"BackgroundMaterial",uniforms:ra(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.toneMapped=vt.getTransfer(N.colorSpace)!==Lt,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||v!==N.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,_=N,v=N.version,g=r.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function x(C,L){C.getRGB(kl,w0(r)),t.buffers.color.setClear(kl.r,kl.g,kl.b,L,l)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,L=1){u.set(C),f=L,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,x(u,f)},render:T,addToRenderList:R,dispose:S}}function VE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=g(null);let l=o,u=!1;function f(O,Z,ce,de,j){let re=!1;const k=v(O,de,ce,Z);l!==k&&(l=k,p(l.object)),re=y(O,de,ce,j),re&&T(O,de,ce,j),j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,N(O,Z,ce,de),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function h(){return r.createVertexArray()}function p(O){return r.bindVertexArray(O)}function _(O){return r.deleteVertexArray(O)}function v(O,Z,ce,de){const j=de.wireframe===!0;let re=s[Z.id];re===void 0&&(re={},s[Z.id]=re);const k=O.isInstancedMesh===!0?O.id:0;let q=re[k];q===void 0&&(q={},re[k]=q);let Q=q[ce.id];Q===void 0&&(Q={},q[ce.id]=Q);let se=Q[j];return se===void 0&&(se=g(h()),Q[j]=se),se}function g(O){const Z=[],ce=[],de=[];for(let j=0;j<t;j++)Z[j]=0,ce[j]=0,de[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ce,attributeDivisors:de,object:O,attributes:{},index:null}}function y(O,Z,ce,de){const j=l.attributes,re=Z.attributes;let k=0;const q=ce.getAttributes();for(const Q in q)if(q[Q].location>=0){const F=j[Q];let ee=re[Q];if(ee===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor)),F===void 0||F.attribute!==ee||ee&&F.data!==ee.data)return!0;k++}return l.attributesNum!==k||l.index!==de}function T(O,Z,ce,de){const j={},re=Z.attributes;let k=0;const q=ce.getAttributes();for(const Q in q)if(q[Q].location>=0){let F=re[Q];F===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(F=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(F=O.instanceColor));const ee={};ee.attribute=F,F&&F.data&&(ee.data=F.data),j[Q]=ee,k++}l.attributes=j,l.attributesNum=k,l.index=de}function R(){const O=l.newAttributes;for(let Z=0,ce=O.length;Z<ce;Z++)O[Z]=0}function x(O){S(O,0)}function S(O,Z){const ce=l.newAttributes,de=l.enabledAttributes,j=l.attributeDivisors;ce[O]=1,de[O]===0&&(r.enableVertexAttribArray(O),de[O]=1),j[O]!==Z&&(r.vertexAttribDivisor(O,Z),j[O]=Z)}function C(){const O=l.newAttributes,Z=l.enabledAttributes;for(let ce=0,de=Z.length;ce<de;ce++)Z[ce]!==O[ce]&&(r.disableVertexAttribArray(ce),Z[ce]=0)}function L(O,Z,ce,de,j,re,k){k===!0?r.vertexAttribIPointer(O,Z,ce,j,re):r.vertexAttribPointer(O,Z,ce,de,j,re)}function N(O,Z,ce,de){R();const j=de.attributes,re=ce.getAttributes(),k=Z.defaultAttributeValues;for(const q in re){const Q=re[q];if(Q.location>=0){let se=j[q];if(se===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),se!==void 0){const F=se.normalized,ee=se.itemSize,Oe=e.get(se);if(Oe===void 0)continue;const He=Oe.buffer,Ie=Oe.type,le=Oe.bytesPerElement,Se=Ie===r.INT||Ie===r.UNSIGNED_INT||se.gpuType===If;if(se.isInterleavedBufferAttribute){const me=se.data,Ue=me.stride,Qe=se.offset;if(me.isInstancedInterleavedBuffer){for(let Je=0;Je<Q.locationSize;Je++)S(Q.location+Je,me.meshPerAttribute);O.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Je=0;Je<Q.locationSize;Je++)x(Q.location+Je);r.bindBuffer(r.ARRAY_BUFFER,He);for(let Je=0;Je<Q.locationSize;Je++)L(Q.location+Je,ee/Q.locationSize,Ie,F,Ue*le,(Qe+ee/Q.locationSize*Je)*le,Se)}else{if(se.isInstancedBufferAttribute){for(let me=0;me<Q.locationSize;me++)S(Q.location+me,se.meshPerAttribute);O.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<Q.locationSize;me++)x(Q.location+me);r.bindBuffer(r.ARRAY_BUFFER,He);for(let me=0;me<Q.locationSize;me++)L(Q.location+me,ee/Q.locationSize,Ie,F,ee*le,ee/Q.locationSize*me*le,Se)}}else if(k!==void 0){const F=k[q];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(Q.location,F);break;case 3:r.vertexAttrib3fv(Q.location,F);break;case 4:r.vertexAttrib4fv(Q.location,F);break;default:r.vertexAttrib1fv(Q.location,F)}}}}C()}function V(){U();for(const O in s){const Z=s[O];for(const ce in Z){const de=Z[ce];for(const j in de){const re=de[j];for(const k in re)_(re[k].object),delete re[k];delete de[j]}}delete s[O]}}function D(O){if(s[O.id]===void 0)return;const Z=s[O.id];for(const ce in Z){const de=Z[ce];for(const j in de){const re=de[j];for(const k in re)_(re[k].object),delete re[k];delete de[j]}}delete s[O.id]}function z(O){for(const Z in s){const ce=s[Z];for(const de in ce){const j=ce[de];if(j[O.id]===void 0)continue;const re=j[O.id];for(const k in re)_(re[k].object),delete re[k];delete j[O.id]}}}function A(O){for(const Z in s){const ce=s[Z],de=O.isInstancedMesh===!0?O.id:0,j=ce[de];if(j!==void 0){for(const re in j){const k=j[re];for(const q in k)_(k[q].object),delete k[q];delete j[re]}delete ce[de],Object.keys(ce).length===0&&delete s[Z]}}}function U(){Y(),u=!0,l!==o&&(l=o,p(l.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:U,resetDefaultState:Y,dispose:V,releaseStatesOfGeometry:D,releaseStatesOfObject:A,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:x,disableUnusedAttributes:C}}function GE(r,e,t){let s;function o(h){s=h}function l(h,p){r.drawArrays(s,h,p),t.update(p,s,1)}function u(h,p,_){_!==0&&(r.drawArraysInstanced(s,h,p,_),t.update(p,s,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,p,0,_);let g=0;for(let y=0;y<_;y++)g+=p[y];t.update(g,s,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function HE(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==_i&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const A=z===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Kn&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Pi&&!A)}function h(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(it("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=r.getParameter(r.MAX_SAMPLES),D=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:N,maxSamples:V,samples:D}}function WE(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new ns,f=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||s!==0||o;return o=g,s=v.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){t=_(v,g,0)},this.setState=function(v,g,y){const T=v.clippingPlanes,R=v.clipIntersection,x=v.clipShadows,S=r.get(v);if(!o||T===null||T.length===0||l&&!x)l?_(null):p();else{const C=l?0:s,L=C*4;let N=S.clippingState||null;h.value=N,N=_(T,g,L,y);for(let V=0;V!==L;++V)N[V]=t[V];S.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=C}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(v,g,y,T){const R=v!==null?v.length:0;let x=null;if(R!==0){if(x=h.value,T!==!0||x===null){const S=y+R*4,C=g.matrixWorldInverse;f.getNormalMatrix(C),(x===null||x.length<S)&&(x=new Float32Array(S));for(let L=0,N=y;L!==R;++L,N+=4)u.copy(v[L]).applyMatrix4(C,f),u.normal.toArray(x,N),x[N+3]=u.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}const Nr=4,mg=[.125,.215,.35,.446,.526,.582],rs=20,jE=256,Ja=new qf,gg=new yt;let Sd=null,yd=0,Md=0,Ed=!1;const XE=new ne;class xg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:f=XE}=l;Sd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sd,yd,Md),this._renderer.xr.enabled=Ed,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:nr,format:_i,colorSpace:Ql,depthBuffer:!1},o=vg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vg(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qE(l)),this._blurMaterial=$E(l,e,t),this._ggxMaterial=YE(l,e,t)}return o}_compileMaterial(e){const t=new Vn(new Zn,e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,s,o,l){const h=new $n(90,1,t,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(gg),v.toneMapping=Li,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vn(new fo,new io({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,x=R.material;let S=!1;const C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,S=!0):(x.color.copy(gg),S=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[L],l.y,l.z)):N===1?(h.up.set(0,0,p[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[L],l.z)):(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[L]));const V=this._cubeSize;Ks(o,N*V,L>2?V:0,V,V),v.setRenderTarget(o),S&&v.render(R,h),v.render(e,h)}v.toneMapping=y,v.autoClear=g,e.background=C}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===ls||e.mapping===na;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_g());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ks(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,Ja)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const h=u.uniforms,p=s/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,y=v*g,{_lodMax:T}=this,R=this._sizeLods[s],x=3*R*(s>T-Nr?s-T+Nr:0),S=4*(this._cubeSize-R);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=T-t,Ks(l,x,S,3*R,2*R),o.setRenderTarget(l),o.render(f,Ja),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=T-s,Ks(e,x,S,3*R,2*R),o.setRenderTarget(e),o.render(f,Ja)}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[o];v.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,T=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*rs-1),R=l/T,x=isFinite(l)?1+Math.floor(_*R):rs;x>rs&&it(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${rs}`);const S=[];let C=0;for(let z=0;z<rs;++z){const A=z/R,U=Math.exp(-A*A/2);S.push(U),z===0?C+=U:z<x&&(C+=2*U)}for(let z=0;z<S.length;z++)S[z]=S[z]/C;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=S,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:L}=this;g.dTheta.value=T,g.mipInt.value=L-s;const N=this._sizeLods[o],V=3*N*(o>L-Nr?o-L+Nr:0),D=4*(this._cubeSize-N);Ks(t,V,D,3*N,2*N),h.setRenderTarget(t),h.render(v,Ja)}}function qE(r){const e=[],t=[],s=[];let o=r;const l=r-Nr+1+mg.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>r-Nr?h=mg[u-r+Nr-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,T=6,R=3,x=2,S=1,C=new Float32Array(R*T*y),L=new Float32Array(x*T*y),N=new Float32Array(S*T*y);for(let D=0;D<y;D++){const z=D%3*2/3-1,A=D>2?0:-1,U=[z,A,0,z+2/3,A,0,z+2/3,A+1,0,z,A,0,z+2/3,A+1,0,z,A+1,0];C.set(U,R*T*D),L.set(g,x*T*D);const Y=[D,D,D,D,D,D];N.set(Y,S*T*D)}const V=new Zn;V.setAttribute("position",new Si(C,R)),V.setAttribute("uv",new Si(L,x)),V.setAttribute("faceIndex",new Si(N,S)),s.push(new Vn(V,null)),o>Nr&&o--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function vg(r,e,t){const s=new Di(r,e,t);return s.texture.mapping=rc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ks(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function YE(r,e,t){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function $E(r,e,t){const s=new Float32Array(rs),o=new ne(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:oc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function _g(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Sg(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}class R0 extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new M0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new fo(5,5,5),l=new Ui({name:"CubemapFromEquirect",uniforms:ra(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Gn,blending:er});l.uniforms.tEquirect.value=t;const u=new Vn(o,l),f=t.minFilter;return t.minFilter===ss&&(t.minFilter=Tn),new ey(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}function KE(r){let e=new WeakMap,t=new WeakMap,s=null;function o(g,y=!1){return g==null?null:y?u(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===Xu||y===qu)if(e.has(g)){const T=e.get(g).texture;return f(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const R=new R0(T.height);return R.fromEquirectangularTexture(r,g),e.set(g,R),g.addEventListener("dispose",p),f(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const y=g.mapping,T=y===Xu||y===qu,R=y===ls||y===na;if(T||R){let x=t.get(g);const S=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new xg(r)),x=T?s.fromEquirectangular(g,x):s.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const C=g.image;return T&&C&&C.height>0||R&&C&&h(C)?(s===null&&(s=new xg(r)),x=T?s.fromEquirectangular(g):s.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",_),x.texture):null}}}return g}function f(g,y){return y===Xu?g.mapping=ls:y===qu&&(g.mapping=na),g}function h(g){let y=0;const T=6;for(let R=0;R<T;R++)g[R]!==void 0&&y++;return y===T}function p(g){const y=g.target;y.removeEventListener("dispose",p);const T=e.get(y);T!==void 0&&(e.delete(y),T.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const T=t.get(y);T!==void 0&&(t.delete(y),T.dispose())}function v(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:v}}function ZE(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&_f("WebGLRenderer: "+s+" extension not supported."),o}}}function QE(r,e,t,s){const o={},l=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete o[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function h(v){const g=v.attributes;for(const y in g)e.update(g[y],r.ARRAY_BUFFER)}function p(v){const g=[],y=v.index,T=v.attributes.position;let R=0;if(T===void 0)return;if(y!==null){const C=y.array;R=y.version;for(let L=0,N=C.length;L<N;L+=3){const V=C[L+0],D=C[L+1],z=C[L+2];g.push(V,D,D,z,z,V)}}else{const C=T.array;R=T.version;for(let L=0,N=C.length/3-1;L<N;L+=3){const V=L+0,D=L+1,z=L+2;g.push(V,D,D,z,z,V)}}const x=new(T.count>=65535?_0:v0)(g,1);x.version=R;const S=l.get(v);S&&e.remove(S),l.set(v,x)}function _(v){const g=l.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:_}}function JE(r,e,t){let s;function o(v){s=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function h(v,g){r.drawElements(s,g,l,v*u),t.update(g,s,1)}function p(v,g,y){y!==0&&(r.drawElementsInstanced(s,g,l,v*u,y),t.update(g,s,y))}function _(v,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,l,v,0,y);let R=0;for(let x=0;x<y;x++)R+=g[x];t.update(R,s,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=_}function e1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:Et("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function t1(r,e,t){const s=new WeakMap,o=new Zt;function l(u,f,h){const p=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(f);if(g===void 0||g.count!==v){let Y=function(){A.dispose(),s.delete(f),f.removeEventListener("dispose",Y)};var y=Y;g!==void 0&&g.texture.dispose();const T=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let N=0;T===!0&&(N=1),R===!0&&(N=2),x===!0&&(N=3);let V=f.attributes.position.count*N,D=1;V>e.maxTextureSize&&(D=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const z=new Float32Array(V*D*4*v),A=new m0(z,V,D,v);A.type=Pi,A.needsUpdate=!0;const U=N*4;for(let O=0;O<v;O++){const Z=S[O],ce=C[O],de=L[O],j=V*D*4*O;for(let re=0;re<Z.count;re++){const k=re*U;T===!0&&(o.fromBufferAttribute(Z,re),z[j+k+0]=o.x,z[j+k+1]=o.y,z[j+k+2]=o.z,z[j+k+3]=0),R===!0&&(o.fromBufferAttribute(ce,re),z[j+k+4]=o.x,z[j+k+5]=o.y,z[j+k+6]=o.z,z[j+k+7]=0),x===!0&&(o.fromBufferAttribute(de,re),z[j+k+8]=o.x,z[j+k+9]=o.y,z[j+k+10]=o.z,z[j+k+11]=de.itemSize===4?o.w:1)}}g={count:v,texture:A,size:new bt(V,D)},s.set(f,g),f.addEventListener("dispose",Y)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const R=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(r,"morphTargetBaseInfluence",R),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:l}}function n1(r,e,t,s,o){let l=new WeakMap;function u(p){const _=o.render.frame,v=p.geometry,g=e.get(p,v);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==_&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==_&&(y.update(),l.set(y,_))}return g}function f(){l=new WeakMap}function h(p){const _=p.target;_.removeEventListener("dispose",h),s.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:f}}const i1={[Jg]:"LINEAR_TONE_MAPPING",[e0]:"REINHARD_TONE_MAPPING",[t0]:"CINEON_TONE_MAPPING",[n0]:"ACES_FILMIC_TONE_MAPPING",[r0]:"AGX_TONE_MAPPING",[s0]:"NEUTRAL_TONE_MAPPING",[i0]:"CUSTOM_TONE_MAPPING"};function r1(r,e,t,s,o){const l=new Di(e,t,{type:r,depthBuffer:s,stencilBuffer:o,depthTexture:s?new ia(e,t):void 0}),u=new Di(e,t,{type:nr,depthBuffer:!1,stencilBuffer:!1}),f=new Zn;f.setAttribute("position",new Nn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Nn([0,2,0,0,2,0],2));const h=new qS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Vn(f,h),_=new qf(-1,1,1,-1,0,1);let v=null,g=null,y=!1,T,R=null,x=[],S=!1;this.setSize=function(C,L){l.setSize(C,L),u.setSize(C,L);for(let N=0;N<x.length;N++){const V=x[N];V.setSize&&V.setSize(C,L)}},this.setEffects=function(C){x=C,S=x.length>0&&x[0].isRenderPass===!0;const L=l.width,N=l.height;for(let V=0;V<x.length;V++){const D=x[V];D.setSize&&D.setSize(L,N)}},this.begin=function(C,L){if(y||C.toneMapping===Li&&x.length===0)return!1;if(R=L,L!==null){const N=L.width,V=L.height;(l.width!==N||l.height!==V)&&this.setSize(N,V)}return S===!1&&C.setRenderTarget(l),T=C.toneMapping,C.toneMapping=Li,!0},this.hasRenderPass=function(){return S},this.end=function(C,L){C.toneMapping=T,y=!0;let N=l,V=u;for(let D=0;D<x.length;D++){const z=x[D];if(z.enabled!==!1&&(z.render(C,V,N,L),z.needsSwap!==!1)){const A=N;N=V,V=A}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,h.defines={},vt.getTransfer(v)===Lt&&(h.defines.SRGB_TRANSFER="");const D=i1[g];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(R),C.render(p,_),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const P0=new Pn,Mf=new ia(1,1),N0=new m0,L0=new ES,D0=new M0,yg=[],Mg=[],Eg=new Float32Array(16),wg=new Float32Array(9),Tg=new Float32Array(4);function ca(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=yg[o];if(l===void 0&&(l=new Float32Array(o),yg[o]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function on(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function ln(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function lc(r,e){let t=Mg[e];t===void 0&&(t=new Int32Array(e),Mg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function s1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function a1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}function o1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}function l1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}function c1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(on(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,s))return;Tg.set(s),r.uniformMatrix2fv(this.addr,!1,Tg),ln(t,s)}}function u1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(on(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,s))return;wg.set(s),r.uniformMatrix3fv(this.addr,!1,wg),ln(t,s)}}function d1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(on(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,s))return;Eg.set(s),r.uniformMatrix4fv(this.addr,!1,Eg),ln(t,s)}}function f1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function h1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2iv(this.addr,e),ln(t,e)}}function p1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3iv(this.addr,e),ln(t,e)}}function m1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4iv(this.addr,e),ln(t,e)}}function g1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function x1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2uiv(this.addr,e),ln(t,e)}}function v1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3uiv(this.addr,e),ln(t,e)}}function _1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4uiv(this.addr,e),ln(t,e)}}function S1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Mf.compareFunction=t.isReversedDepthBuffer()?Vf:zf,l=Mf):l=P0,t.setTexture2D(e||l,o)}function y1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||L0,o)}function M1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||D0,o)}function E1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||N0,o)}function w1(r){switch(r){case 5126:return s1;case 35664:return a1;case 35665:return o1;case 35666:return l1;case 35674:return c1;case 35675:return u1;case 35676:return d1;case 5124:case 35670:return f1;case 35667:case 35671:return h1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return x1;case 36295:return v1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return E1}}function T1(r,e){r.uniform1fv(this.addr,e)}function A1(r,e){const t=ca(e,this.size,2);r.uniform2fv(this.addr,t)}function b1(r,e){const t=ca(e,this.size,3);r.uniform3fv(this.addr,t)}function C1(r,e){const t=ca(e,this.size,4);r.uniform4fv(this.addr,t)}function R1(r,e){const t=ca(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function P1(r,e){const t=ca(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function N1(r,e){const t=ca(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function L1(r,e){r.uniform1iv(this.addr,e)}function D1(r,e){r.uniform2iv(this.addr,e)}function I1(r,e){r.uniform3iv(this.addr,e)}function U1(r,e){r.uniform4iv(this.addr,e)}function F1(r,e){r.uniform1uiv(this.addr,e)}function O1(r,e){r.uniform2uiv(this.addr,e)}function k1(r,e){r.uniform3uiv(this.addr,e)}function B1(r,e){r.uniform4uiv(this.addr,e)}function z1(r,e,t){const s=this.cache,o=e.length,l=lc(t,o);on(s,l)||(r.uniform1iv(this.addr,l),ln(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=Mf:u=P0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function V1(r,e,t){const s=this.cache,o=e.length,l=lc(t,o);on(s,l)||(r.uniform1iv(this.addr,l),ln(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||L0,l[u])}function G1(r,e,t){const s=this.cache,o=e.length,l=lc(t,o);on(s,l)||(r.uniform1iv(this.addr,l),ln(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||D0,l[u])}function H1(r,e,t){const s=this.cache,o=e.length,l=lc(t,o);on(s,l)||(r.uniform1iv(this.addr,l),ln(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||N0,l[u])}function W1(r){switch(r){case 5126:return T1;case 35664:return A1;case 35665:return b1;case 35666:return C1;case 35674:return R1;case 35675:return P1;case 35676:return N1;case 5124:case 35670:return L1;case 35667:case 35671:return D1;case 35668:case 35672:return I1;case 35669:case 35673:return U1;case 5125:return F1;case 36294:return O1;case 36295:return k1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return G1;case 36289:case 36303:case 36311:case 36292:return H1}}class j1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=w1(t.type)}}class X1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=W1(t.type)}}class q1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function Ag(r,e){r.seq.push(e),r.map[e.id]=e}function Y1(r,e,t){const s=r.name,o=s.length;for(wd.lastIndex=0;;){const l=wd.exec(s),u=wd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){Ag(t,p===void 0?new j1(f,r,e):new X1(f,r,e));break}else{let v=t.map[f];v===void 0&&(v=new q1(f),Ag(t,v)),t=v}}}class Yl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);Y1(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function bg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const $1=37297;let K1=0;function Z1(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const Cg=new ct;function Q1(r){vt._getMatrix(Cg,vt.workingColorSpace,r);const e=`mat3( ${Cg.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(r)){case Jl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Rg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+Z1(r.getShaderSource(e),f)}else return l}function J1(r,e){const t=Q1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ew={[Jg]:"Linear",[e0]:"Reinhard",[t0]:"Cineon",[n0]:"ACESFilmic",[r0]:"AgX",[s0]:"Neutral",[i0]:"Custom"};function tw(r,e){const t=ew[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bl=new ne;function nw(){vt.getLuminanceCoefficients(Bl);const r=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function rw(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function sw(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function no(r){return r!==""}function Pg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ng(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ef(r){return r.replace(aw,lw)}const ow=new Map;function lw(r,e){let t=ht[e];if(t===void 0){const s=ow.get(e);if(s!==void 0)t=ht[s],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ef(t)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lg(r){return r.replace(cw,uw)}function uw(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Dg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const dw={[Hl]:"SHADOWMAP_TYPE_PCF",[to]:"SHADOWMAP_TYPE_VSM"};function fw(r){return dw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hw={[ls]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE",[rc]:"ENVMAP_TYPE_CUBE_UV"};function pw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":hw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const mw={[na]:"ENVMAP_MODE_REFRACTION"};function gw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":mw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xw={[Df]:"ENVMAP_BLENDING_MULTIPLY",[nS]:"ENVMAP_BLENDING_MIX",[iS]:"ENVMAP_BLENDING_ADD"};function vw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":xw[r.combine]||"ENVMAP_BLENDING_NONE"}function _w(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function Sw(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=fw(t),p=pw(t),_=gw(t),v=vw(t),g=_w(t),y=iw(t),T=rw(l),R=o.createProgram();let x,S,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(no).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(no).join(`
`),S.length>0&&(S+=`
`)):(x=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),S=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?ht.tonemapping_pars_fragment:"",t.toneMapping!==Li?tw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,J1("linearToOutputTexel",t.outputColorSpace),nw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),u=Ef(u),u=Pg(u,t),u=Ng(u,t),f=Ef(f),f=Pg(f,t),f=Ng(f,t),u=Lg(u),f=Lg(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===Vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=C+x+u,N=C+S+f,V=bg(o,o.VERTEX_SHADER,L),D=bg(o,o.FRAGMENT_SHADER,N);o.attachShader(R,V),o.attachShader(R,D),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function z(O){if(r.debug.checkShaderErrors){const Z=o.getProgramInfoLog(R)||"",ce=o.getShaderInfoLog(V)||"",de=o.getShaderInfoLog(D)||"",j=Z.trim(),re=ce.trim(),k=de.trim();let q=!0,Q=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,R,V,D);else{const se=Rg(o,V,"vertex"),F=Rg(o,D,"fragment");Et("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+j+`
`+se+`
`+F)}else j!==""?it("WebGLProgram: Program Info Log:",j):(re===""||k==="")&&(Q=!1);Q&&(O.diagnostics={runnable:q,programLog:j,vertexShader:{log:re,prefix:x},fragmentShader:{log:k,prefix:S}})}o.deleteShader(V),o.deleteShader(D),A=new Yl(o,R),U=sw(o,R)}let A;this.getUniforms=function(){return A===void 0&&z(this),A};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(R,$1)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=V,this.fragmentShader=D,this}let yw=0;class Mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new Ew(e),t.set(e,s)),s}}class Ew{constructor(e){this.id=yw++,this.code=e,this.usedTimes=0}}function ww(r){return r===cs||r===Kl||r===Zl}function Tw(r,e,t,s,o,l){const u=new g0,f=new Mw,h=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return h.add(A),A===0?"uv":`uv${A}`}function R(A,U,Y,O,Z,ce){const de=O.fog,j=Z.geometry,re=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?O.environment:null,k=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,q=e.get(A.envMap||re,k),Q=q&&q.mapping===rc?q.image.height:null,se=y[A.type];A.precision!==null&&(g=s.getMaxPrecision(A.precision),g!==A.precision&&it("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const F=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ee=F!==void 0?F.length:0;let Oe=0;j.morphAttributes.position!==void 0&&(Oe=1),j.morphAttributes.normal!==void 0&&(Oe=2),j.morphAttributes.color!==void 0&&(Oe=3);let He,Ie,le,Se;if(se){const at=Ri[se];He=at.vertexShader,Ie=at.fragmentShader}else He=A.vertexShader,Ie=A.fragmentShader,f.update(A),le=f.getVertexShaderID(A),Se=f.getFragmentShaderID(A);const me=r.getRenderTarget(),Ue=r.state.buffers.depth.getReversed(),Qe=Z.isInstancedMesh===!0,Je=Z.isBatchedMesh===!0,Ut=!!A.map,ut=!!A.matcap,wt=!!q,Dt=!!A.aoMap,dt=!!A.lightMap,Xt=!!A.bumpMap,Ft=!!A.normalMap,hn=!!A.displacementMap,H=!!A.emissiveMap,Ot=!!A.metalnessMap,ft=!!A.roughnessMap,Rt=A.anisotropy>0,Le=A.clearcoat>0,zt=A.dispersion>0,P=A.iridescence>0,M=A.sheen>0,$=A.transmission>0,he=Rt&&!!A.anisotropyMap,ge=Le&&!!A.clearcoatMap,Me=Le&&!!A.clearcoatNormalMap,Pe=Le&&!!A.clearcoatRoughnessMap,ue=P&&!!A.iridescenceMap,pe=P&&!!A.iridescenceThicknessMap,Fe=M&&!!A.sheenColorMap,Be=M&&!!A.sheenRoughnessMap,Ae=!!A.specularMap,Ee=!!A.specularColorMap,nt=!!A.specularIntensityMap,st=$&&!!A.transmissionMap,pt=$&&!!A.thicknessMap,G=!!A.gradientMap,Te=!!A.alphaMap,fe=A.alphaTest>0,ke=!!A.alphaHash,Ce=!!A.extensions;let xe=Li;A.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(xe=r.toneMapping);const Xe={shaderID:se,shaderType:A.type,shaderName:A.name,vertexShader:He,fragmentShader:Ie,defines:A.defines,customVertexShaderID:le,customFragmentShaderID:Se,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:Je,batchingColor:Je&&Z._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&Z.instanceColor!==null,instancingMorph:Qe&&Z.morphTexture!==null,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Ut,matcap:ut,envMap:wt,envMapMode:wt&&q.mapping,envMapCubeUVHeight:Q,aoMap:Dt,lightMap:dt,bumpMap:Xt,normalMap:Ft,displacementMap:hn,emissiveMap:H,normalMapObjectSpace:Ft&&A.normalMapType===aS,normalMapTangentSpace:Ft&&A.normalMapType===vf,packedNormalMap:Ft&&A.normalMapType===vf&&ww(A.normalMap.format),metalnessMap:Ot,roughnessMap:ft,anisotropy:Rt,anisotropyMap:he,clearcoat:Le,clearcoatMap:ge,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:zt,iridescence:P,iridescenceMap:ue,iridescenceThicknessMap:pe,sheen:M,sheenColorMap:Fe,sheenRoughnessMap:Be,specularMap:Ae,specularColorMap:Ee,specularIntensityMap:nt,transmission:$,transmissionMap:st,thicknessMap:pt,gradientMap:G,opaque:A.transparent===!1&&A.blending===Qs&&A.alphaToCoverage===!1,alphaMap:Te,alphaTest:fe,alphaHash:ke,combine:A.combine,mapUv:Ut&&T(A.map.channel),aoMapUv:Dt&&T(A.aoMap.channel),lightMapUv:dt&&T(A.lightMap.channel),bumpMapUv:Xt&&T(A.bumpMap.channel),normalMapUv:Ft&&T(A.normalMap.channel),displacementMapUv:hn&&T(A.displacementMap.channel),emissiveMapUv:H&&T(A.emissiveMap.channel),metalnessMapUv:Ot&&T(A.metalnessMap.channel),roughnessMapUv:ft&&T(A.roughnessMap.channel),anisotropyMapUv:he&&T(A.anisotropyMap.channel),clearcoatMapUv:ge&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Me&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(A.sheenRoughnessMap.channel),specularMapUv:Ae&&T(A.specularMap.channel),specularColorMapUv:Ee&&T(A.specularColorMap.channel),specularIntensityMapUv:nt&&T(A.specularIntensityMap.channel),transmissionMapUv:st&&T(A.transmissionMap.channel),thicknessMapUv:pt&&T(A.thicknessMap.channel),alphaMapUv:Te&&T(A.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ft||Rt),vertexNormals:!!j.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!j.attributes.uv&&(Ut||Te),fog:!!de,useFog:A.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||j.attributes.normal===void 0&&Ft===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ue,skinning:Z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Oe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:xe,decodeVideoTexture:Ut&&A.map.isVideoTexture===!0&&vt.getTransfer(A.map.colorSpace)===Lt,decodeVideoTextureEmissive:H&&A.emissiveMap.isVideoTexture===!0&&vt.getTransfer(A.emissiveMap.colorSpace)===Lt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Qi,flipSided:A.side===Gn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ce&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&A.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Xe.vertexUv1s=h.has(1),Xe.vertexUv2s=h.has(2),Xe.vertexUv3s=h.has(3),h.clear(),Xe}function x(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const Y in A.defines)U.push(Y),U.push(A.defines[Y]);return A.isRawShaderMaterial===!1&&(S(U,A),C(U,A),U.push(r.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function S(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function C(A,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),A.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),A.push(u.mask)}function L(A){const U=y[A.type];let Y;if(U){const O=Ri[U];Y=WS.clone(O.uniforms)}else Y=A.uniforms;return Y}function N(A,U){let Y=_.get(U);return Y!==void 0?++Y.usedTimes:(Y=new Sw(r,U,A,o),p.push(Y),_.set(U,Y)),Y}function V(A){if(--A.usedTimes===0){const U=p.indexOf(A);p[U]=p[p.length-1],p.pop(),_.delete(A.cacheKey),A.destroy()}}function D(A){f.remove(A)}function z(){f.dispose()}return{getParameters:R,getProgramCacheKey:x,getUniforms:L,acquireProgram:N,releaseProgram:V,releaseShaderCache:D,programs:p,dispose:z}}function Aw(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function o(u,f,h){r.get(u)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function bw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Ig(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ug(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function f(g,y,T,R,x,S){let C=r[e];return C===void 0?(C={id:g.id,object:g,geometry:y,material:T,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:x,group:S},r[e]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=T,C.materialVariant=u(g),C.groupOrder=R,C.renderOrder=g.renderOrder,C.z=x,C.group=S),e++,C}function h(g,y,T,R,x,S){const C=f(g,y,T,R,x,S);T.transmission>0?s.push(C):T.transparent===!0?o.push(C):t.push(C)}function p(g,y,T,R,x,S){const C=f(g,y,T,R,x,S);T.transmission>0?s.unshift(C):T.transparent===!0?o.unshift(C):t.unshift(C)}function _(g,y){t.length>1&&t.sort(g||bw),s.length>1&&s.sort(y||Ig),o.length>1&&o.sort(y||Ig)}function v(){for(let g=e,y=r.length;g<y;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:h,unshift:p,finish:v,sort:_}}function Cw(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new Ug,r.set(s,[u])):o>=l.length?(u=new Ug,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function Rw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new yt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return r[e.id]=t,t}}}function Pw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Nw=0;function Lw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Dw(r){const e=new Rw,t=Pw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ne);const o=new ne,l=new Qt,u=new Qt;function f(p){let _=0,v=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let y=0,T=0,R=0,x=0,S=0,C=0,L=0,N=0,V=0,D=0,z=0;p.sort(Lw);for(let U=0,Y=p.length;U<Y;U++){const O=p[U],Z=O.color,ce=O.intensity,de=O.distance;let j=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===cs?j=O.shadow.map.texture:j=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)_+=Z.r*ce,v+=Z.g*ce,g+=Z.b*ce;else if(O.isLightProbe){for(let re=0;re<9;re++)s.probe[re].addScaledVector(O.sh.coefficients[re],ce);z++}else if(O.isDirectionalLight){const re=e.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const k=O.shadow,q=t.get(O);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,s.directionalShadow[y]=q,s.directionalShadowMap[y]=j,s.directionalShadowMatrix[y]=O.shadow.matrix,C++}s.directional[y]=re,y++}else if(O.isSpotLight){const re=e.get(O);re.position.setFromMatrixPosition(O.matrixWorld),re.color.copy(Z).multiplyScalar(ce),re.distance=de,re.coneCos=Math.cos(O.angle),re.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),re.decay=O.decay,s.spot[R]=re;const k=O.shadow;if(O.map&&(s.spotLightMap[V]=O.map,V++,k.updateMatrices(O),O.castShadow&&D++),s.spotLightMatrix[R]=k.matrix,O.castShadow){const q=t.get(O);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,s.spotShadow[R]=q,s.spotShadowMap[R]=j,N++}R++}else if(O.isRectAreaLight){const re=e.get(O);re.color.copy(Z).multiplyScalar(ce),re.halfWidth.set(O.width*.5,0,0),re.halfHeight.set(0,O.height*.5,0),s.rectArea[x]=re,x++}else if(O.isPointLight){const re=e.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity),re.distance=O.distance,re.decay=O.decay,O.castShadow){const k=O.shadow,q=t.get(O);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,s.pointShadow[T]=q,s.pointShadowMap[T]=j,s.pointShadowMatrix[T]=O.shadow.matrix,L++}s.point[T]=re,T++}else if(O.isHemisphereLight){const re=e.get(O);re.skyColor.copy(O.color).multiplyScalar(ce),re.groundColor.copy(O.groundColor).multiplyScalar(ce),s.hemi[S]=re,S++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const A=s.hash;(A.directionalLength!==y||A.pointLength!==T||A.spotLength!==R||A.rectAreaLength!==x||A.hemiLength!==S||A.numDirectionalShadows!==C||A.numPointShadows!==L||A.numSpotShadows!==N||A.numSpotMaps!==V||A.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=R,s.rectArea.length=x,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=N+V-D,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=z,A.directionalLength=y,A.pointLength=T,A.spotLength=R,A.rectAreaLength=x,A.hemiLength=S,A.numDirectionalShadows=C,A.numPointShadows=L,A.numSpotShadows=N,A.numSpotMaps=V,A.numLightProbes=z,s.version=Nw++)}function h(p,_){let v=0,g=0,y=0,T=0,R=0;const x=_.matrixWorldInverse;for(let S=0,C=p.length;S<C;S++){const L=p[S];if(L.isDirectionalLight){const N=s.directional[v];N.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(x),v++}else if(L.isSpotLight){const N=s.spot[y];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(x),y++}else if(L.isRectAreaLight){const N=s.rectArea[T];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(x),u.identity(),l.copy(L.matrixWorld),l.premultiply(x),u.extractRotation(l),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(x),g++}else if(L.isHemisphereLight){const N=s.hemi[R];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(x),R++}}}return{setup:f,setupView:h,state:s}}function Fg(r){const e=new Dw(r),t=[],s=[],o=[];function l(g){v.camera=g,t.length=0,s.length=0,o.length=0}function u(g){t.push(g)}function f(g){s.push(g)}function h(g){o.push(g)}function p(){e.setup(t)}function _(g){e.setupView(t,g)}const v={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function Iw(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Fg(r),e.set(o,[f])):l>=u.length?(f=new Fg(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const Uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ow=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],kw=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],Og=new Qt,eo=new ne,Td=new ne;function Bw(r,e,t){let s=new Wf;const o=new bt,l=new bt,u=new Zt,f=new YS,h=new $S,p={},_=t.maxTextureSize,v={[Dr]:Gn,[Gn]:Dr,[Qi]:Qi},g=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Uw,fragmentShader:Fw}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new Zn;T.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Vn(T,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let S=this.type;this.render=function(D,z,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;this.type===O_&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hl);const U=r.getRenderTarget(),Y=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(er),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ce=S!==this.type;ce&&z.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(j=>j.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,j=D.length;de<j;de++){const re=D[de],k=re.shadow;if(k===void 0){it("WebGLShadowMap:",re,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const q=k.getFrameExtents();o.multiply(q),l.copy(k.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/q.x),o.x=l.x*q.x,k.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/q.y),o.y=l.y*q.y,k.mapSize.y=l.y));const Q=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Q,k.map===null||ce===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===to){if(re.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Di(o.x,o.y,{format:cs,type:nr,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),k.map.texture.name=re.name+".shadowMap",k.map.depthTexture=new ia(o.x,o.y,Pi),k.map.depthTexture.name=re.name+".shadowMapDepth",k.map.depthTexture.format=ir,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=xn,k.map.depthTexture.magFilter=xn}else re.isPointLight?(k.map=new R0(o.x),k.map.depthTexture=new GS(o.x,Ii)):(k.map=new Di(o.x,o.y),k.map.depthTexture=new ia(o.x,o.y,Ii)),k.map.depthTexture.name=re.name+".shadowMap",k.map.depthTexture.format=ir,this.type===Hl?(k.map.depthTexture.compareFunction=Q?Vf:zf,k.map.depthTexture.minFilter=Tn,k.map.depthTexture.magFilter=Tn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=xn,k.map.depthTexture.magFilter=xn);k.camera.updateProjectionMatrix()}const se=k.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<se;F++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,F),r.clear();else{F===0&&(r.setRenderTarget(k.map),r.clear());const ee=k.getViewport(F);u.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),Z.viewport(u)}if(re.isPointLight){const ee=k.camera,Oe=k.matrix,He=re.distance||ee.far;He!==ee.far&&(ee.far=He,ee.updateProjectionMatrix()),eo.setFromMatrixPosition(re.matrixWorld),ee.position.copy(eo),Td.copy(ee.position),Td.add(Ow[F]),ee.up.copy(kw[F]),ee.lookAt(Td),ee.updateMatrixWorld(),Oe.makeTranslation(-eo.x,-eo.y,-eo.z),Og.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Og,ee.coordinateSystem,ee.reversedDepth)}else k.updateMatrices(re);s=k.getFrustum(),N(z,A,k.camera,re,this.type)}k.isPointLightShadow!==!0&&this.type===to&&C(k,A),k.needsUpdate=!1}S=this.type,x.needsUpdate=!1,r.setRenderTarget(U,Y,O)};function C(D,z){const A=e.update(R);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Di(o.x,o.y,{format:cs,type:nr})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(z,null,A,g,R,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(z,null,A,y,R,null)}function L(D,z,A,U){let Y=null;const O=A.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(O!==void 0)Y=O;else if(Y=A.isPointLight===!0?h:f,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=Y.uuid,ce=z.uuid;let de=p[Z];de===void 0&&(de={},p[Z]=de);let j=de[ce];j===void 0&&(j=Y.clone(),de[ce]=j,z.addEventListener("dispose",V)),Y=j}if(Y.visible=z.visible,Y.wireframe=z.wireframe,U===to?Y.side=z.shadowSide!==null?z.shadowSide:z.side:Y.side=z.shadowSide!==null?z.shadowSide:v[z.side],Y.alphaMap=z.alphaMap,Y.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,Y.map=z.map,Y.clipShadows=z.clipShadows,Y.clippingPlanes=z.clippingPlanes,Y.clipIntersection=z.clipIntersection,Y.displacementMap=z.displacementMap,Y.displacementScale=z.displacementScale,Y.displacementBias=z.displacementBias,Y.wireframeLinewidth=z.wireframeLinewidth,Y.linewidth=z.linewidth,A.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const Z=r.properties.get(Y);Z.light=A}return Y}function N(D,z,A,U,Y){if(D.visible===!1)return;if(D.layers.test(z.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&Y===to)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,D.matrixWorld);const ce=e.update(D),de=D.material;if(Array.isArray(de)){const j=ce.groups;for(let re=0,k=j.length;re<k;re++){const q=j[re],Q=de[q.materialIndex];if(Q&&Q.visible){const se=L(D,Q,U,Y);D.onBeforeShadow(r,D,z,A,ce,se,q),r.renderBufferDirect(A,null,ce,se,D,q),D.onAfterShadow(r,D,z,A,ce,se,q)}}}else if(de.visible){const j=L(D,de,U,Y);D.onBeforeShadow(r,D,z,A,ce,j,null),r.renderBufferDirect(A,null,ce,j,D,null),D.onAfterShadow(r,D,z,A,ce,j,null)}}const Z=D.children;for(let ce=0,de=Z.length;ce<de;ce++)N(Z[ce],z,A,U,Y)}function V(D){D.target.removeEventListener("dispose",V);for(const A in p){const U=p[A],Y=D.target.uuid;Y in U&&(U[Y].dispose(),delete U[Y])}}}function zw(r,e){function t(){let G=!1;const Te=new Zt;let fe=null;const ke=new Zt(0,0,0,0);return{setMask:function(Ce){fe!==Ce&&!G&&(r.colorMask(Ce,Ce,Ce,Ce),fe=Ce)},setLocked:function(Ce){G=Ce},setClear:function(Ce,xe,Xe,at,It){It===!0&&(Ce*=at,xe*=at,Xe*=at),Te.set(Ce,xe,Xe,at),ke.equals(Te)===!1&&(r.clearColor(Ce,xe,Xe,at),ke.copy(Te))},reset:function(){G=!1,fe=null,ke.set(-1,0,0,0)}}}function s(){let G=!1,Te=!1,fe=null,ke=null,Ce=null;return{setReversed:function(xe){if(Te!==xe){const Xe=e.get("EXT_clip_control");xe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Te=xe;const at=Ce;Ce=null,this.setClear(at)}},getReversed:function(){return Te},setTest:function(xe){xe?me(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(xe){fe!==xe&&!G&&(r.depthMask(xe),fe=xe)},setFunc:function(xe){if(Te&&(xe=gS[xe]),ke!==xe){switch(xe){case Ld:r.depthFunc(r.NEVER);break;case Dd:r.depthFunc(r.ALWAYS);break;case Id:r.depthFunc(r.LESS);break;case ta:r.depthFunc(r.LEQUAL);break;case Ud:r.depthFunc(r.EQUAL);break;case Fd:r.depthFunc(r.GEQUAL);break;case Od:r.depthFunc(r.GREATER);break;case kd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ke=xe}},setLocked:function(xe){G=xe},setClear:function(xe){Ce!==xe&&(Ce=xe,Te&&(xe=1-xe),r.clearDepth(xe))},reset:function(){G=!1,fe=null,ke=null,Ce=null,Te=!1}}}function o(){let G=!1,Te=null,fe=null,ke=null,Ce=null,xe=null,Xe=null,at=null,It=null;return{setTest:function(Tt){G||(Tt?me(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(Tt){Te!==Tt&&!G&&(r.stencilMask(Tt),Te=Tt)},setFunc:function(Tt,An,Qn){(fe!==Tt||ke!==An||Ce!==Qn)&&(r.stencilFunc(Tt,An,Qn),fe=Tt,ke=An,Ce=Qn)},setOp:function(Tt,An,Qn){(xe!==Tt||Xe!==An||at!==Qn)&&(r.stencilOp(Tt,An,Qn),xe=Tt,Xe=An,at=Qn)},setLocked:function(Tt){G=Tt},setClear:function(Tt){It!==Tt&&(r.clearStencil(Tt),It=Tt)},reset:function(){G=!1,Te=null,fe=null,ke=null,Ce=null,xe=null,Xe=null,at=null,It=null}}}const l=new t,u=new s,f=new o,h=new WeakMap,p=new WeakMap;let _={},v={},g={},y=new WeakMap,T=[],R=null,x=!1,S=null,C=null,L=null,N=null,V=null,D=null,z=null,A=new yt(0,0,0),U=0,Y=!1,O=null,Z=null,ce=null,de=null,j=null;const re=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,q=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Q)[1]),k=q>=1):Q.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),k=q>=2);let se=null,F={};const ee=r.getParameter(r.SCISSOR_BOX),Oe=r.getParameter(r.VIEWPORT),He=new Zt().fromArray(ee),Ie=new Zt().fromArray(Oe);function le(G,Te,fe,ke){const Ce=new Uint8Array(4),xe=r.createTexture();r.bindTexture(G,xe),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<fe;Xe++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,ke,0,r.RGBA,r.UNSIGNED_BYTE,Ce):r.texImage2D(Te+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ce);return xe}const Se={};Se[r.TEXTURE_2D]=le(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=le(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),me(r.DEPTH_TEST),u.setFunc(ta),Xt(!1),Ft(Um),me(r.CULL_FACE),Dt(er);function me(G){_[G]!==!0&&(r.enable(G),_[G]=!0)}function Ue(G){_[G]!==!1&&(r.disable(G),_[G]=!1)}function Qe(G,Te){return g[G]!==Te?(r.bindFramebuffer(G,Te),g[G]=Te,G===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Te),G===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function Je(G,Te){let fe=T,ke=!1;if(G){fe=y.get(Te),fe===void 0&&(fe=[],y.set(Te,fe));const Ce=G.textures;if(fe.length!==Ce.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,Xe=Ce.length;xe<Xe;xe++)fe[xe]=r.COLOR_ATTACHMENT0+xe;fe.length=Ce.length,ke=!0}}else fe[0]!==r.BACK&&(fe[0]=r.BACK,ke=!0);ke&&r.drawBuffers(fe)}function Ut(G){return R!==G?(r.useProgram(G),R=G,!0):!1}const ut={[is]:r.FUNC_ADD,[B_]:r.FUNC_SUBTRACT,[z_]:r.FUNC_REVERSE_SUBTRACT};ut[V_]=r.MIN,ut[G_]=r.MAX;const wt={[H_]:r.ZERO,[W_]:r.ONE,[j_]:r.SRC_COLOR,[Pd]:r.SRC_ALPHA,[Z_]:r.SRC_ALPHA_SATURATE,[$_]:r.DST_COLOR,[q_]:r.DST_ALPHA,[X_]:r.ONE_MINUS_SRC_COLOR,[Nd]:r.ONE_MINUS_SRC_ALPHA,[K_]:r.ONE_MINUS_DST_COLOR,[Y_]:r.ONE_MINUS_DST_ALPHA,[Q_]:r.CONSTANT_COLOR,[J_]:r.ONE_MINUS_CONSTANT_COLOR,[eS]:r.CONSTANT_ALPHA,[tS]:r.ONE_MINUS_CONSTANT_ALPHA};function Dt(G,Te,fe,ke,Ce,xe,Xe,at,It,Tt){if(G===er){x===!0&&(Ue(r.BLEND),x=!1);return}if(x===!1&&(me(r.BLEND),x=!0),G!==k_){if(G!==S||Tt!==Y){if((C!==is||V!==is)&&(r.blendEquation(r.FUNC_ADD),C=is,V=is),Tt)switch(G){case Qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fm:r.blendFunc(r.ONE,r.ONE);break;case Om:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case km:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Et("WebGLState: Invalid blending: ",G);break}else switch(G){case Qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Om:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case km:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",G);break}L=null,N=null,D=null,z=null,A.set(0,0,0),U=0,S=G,Y=Tt}return}Ce=Ce||Te,xe=xe||fe,Xe=Xe||ke,(Te!==C||Ce!==V)&&(r.blendEquationSeparate(ut[Te],ut[Ce]),C=Te,V=Ce),(fe!==L||ke!==N||xe!==D||Xe!==z)&&(r.blendFuncSeparate(wt[fe],wt[ke],wt[xe],wt[Xe]),L=fe,N=ke,D=xe,z=Xe),(at.equals(A)===!1||It!==U)&&(r.blendColor(at.r,at.g,at.b,It),A.copy(at),U=It),S=G,Y=!1}function dt(G,Te){G.side===Qi?Ue(r.CULL_FACE):me(r.CULL_FACE);let fe=G.side===Gn;Te&&(fe=!fe),Xt(fe),G.blending===Qs&&G.transparent===!1?Dt(er):Dt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const ke=G.stencilWrite;f.setTest(ke),ke&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),H(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(G){O!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),O=G)}function Ft(G){G!==U_?(me(r.CULL_FACE),G!==Z&&(G===Um?r.cullFace(r.BACK):G===F_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),Z=G}function hn(G){G!==ce&&(k&&r.lineWidth(G),ce=G)}function H(G,Te,fe){G?(me(r.POLYGON_OFFSET_FILL),(de!==Te||j!==fe)&&(de=Te,j=fe,u.getReversed()&&(Te=-Te),r.polygonOffset(Te,fe))):Ue(r.POLYGON_OFFSET_FILL)}function Ot(G){G?me(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function ft(G){G===void 0&&(G=r.TEXTURE0+re-1),se!==G&&(r.activeTexture(G),se=G)}function Rt(G,Te,fe){fe===void 0&&(se===null?fe=r.TEXTURE0+re-1:fe=se);let ke=F[fe];ke===void 0&&(ke={type:void 0,texture:void 0},F[fe]=ke),(ke.type!==G||ke.texture!==Te)&&(se!==fe&&(r.activeTexture(fe),se=fe),r.bindTexture(G,Te||Se[G]),ke.type=G,ke.texture=Te)}function Le(){const G=F[se];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function zt(){try{r.compressedTexImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function M(){try{r.texSubImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function $(){try{r.texSubImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function Me(){try{r.texStorage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function Pe(){try{r.texStorage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function ue(){try{r.texImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function pe(){try{r.texImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function Fe(G){return v[G]!==void 0?v[G]:r.getParameter(G)}function Be(G,Te){v[G]!==Te&&(r.pixelStorei(G,Te),v[G]=Te)}function Ae(G){He.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),He.copy(G))}function Ee(G){Ie.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Ie.copy(G))}function nt(G,Te){let fe=p.get(Te);fe===void 0&&(fe=new WeakMap,p.set(Te,fe));let ke=fe.get(G);ke===void 0&&(ke=r.getUniformBlockIndex(Te,G.name),fe.set(G,ke))}function st(G,Te){const ke=p.get(Te).get(G);h.get(Te)!==ke&&(r.uniformBlockBinding(Te,ke,G.__bindingPointIndex),h.set(Te,ke))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},se=null,F={},g={},y=new WeakMap,T=[],R=null,x=!1,S=null,C=null,L=null,N=null,V=null,D=null,z=null,A=new yt(0,0,0),U=0,Y=!1,O=null,Z=null,ce=null,de=null,j=null,He.set(0,0,r.canvas.width,r.canvas.height),Ie.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:me,disable:Ue,bindFramebuffer:Qe,drawBuffers:Je,useProgram:Ut,setBlending:Dt,setMaterial:dt,setFlipSided:Xt,setCullFace:Ft,setLineWidth:hn,setPolygonOffset:H,setScissorTest:Ot,activeTexture:ft,bindTexture:Rt,unbindTexture:Le,compressedTexImage2D:zt,compressedTexImage3D:P,texImage2D:ue,texImage3D:pe,pixelStorei:Be,getParameter:Fe,updateUBOMapping:nt,uniformBlockBinding:st,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:M,texSubImage3D:$,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:Ae,viewport:Ee,reset:pt}}function Vw(r,e,t,s,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new bt,_=new WeakMap,v=new Set;let g;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(P,M){return T?new OffscreenCanvas(P,M):ec("canvas")}function x(P,M,$){let he=1;const ge=zt(P);if((ge.width>$||ge.height>$)&&(he=$/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Me=Math.floor(he*ge.width),Pe=Math.floor(he*ge.height);g===void 0&&(g=R(Me,Pe));const ue=M?R(Me,Pe):g;return ue.width=Me,ue.height=Pe,ue.getContext("2d").drawImage(P,0,0,Me,Pe),it("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Me+"x"+Pe+")."),ue}else return"data"in P&&it("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function S(P){return P.generateMipmaps}function C(P){r.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(P,M,$,he,ge,Me=!1){if(P!==null){if(r[P]!==void 0)return r[P];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Pe;he&&(Pe=e.get("EXT_texture_norm16"),Pe||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=M;if(M===r.RED&&($===r.FLOAT&&(ue=r.R32F),$===r.HALF_FLOAT&&(ue=r.R16F),$===r.UNSIGNED_BYTE&&(ue=r.R8),$===r.UNSIGNED_SHORT&&Pe&&(ue=Pe.R16_EXT),$===r.SHORT&&Pe&&(ue=Pe.R16_SNORM_EXT)),M===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(ue=r.R8UI),$===r.UNSIGNED_SHORT&&(ue=r.R16UI),$===r.UNSIGNED_INT&&(ue=r.R32UI),$===r.BYTE&&(ue=r.R8I),$===r.SHORT&&(ue=r.R16I),$===r.INT&&(ue=r.R32I)),M===r.RG&&($===r.FLOAT&&(ue=r.RG32F),$===r.HALF_FLOAT&&(ue=r.RG16F),$===r.UNSIGNED_BYTE&&(ue=r.RG8),$===r.UNSIGNED_SHORT&&Pe&&(ue=Pe.RG16_EXT),$===r.SHORT&&Pe&&(ue=Pe.RG16_SNORM_EXT)),M===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(ue=r.RG8UI),$===r.UNSIGNED_SHORT&&(ue=r.RG16UI),$===r.UNSIGNED_INT&&(ue=r.RG32UI),$===r.BYTE&&(ue=r.RG8I),$===r.SHORT&&(ue=r.RG16I),$===r.INT&&(ue=r.RG32I)),M===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),$===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),$===r.UNSIGNED_INT&&(ue=r.RGB32UI),$===r.BYTE&&(ue=r.RGB8I),$===r.SHORT&&(ue=r.RGB16I),$===r.INT&&(ue=r.RGB32I)),M===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),$===r.UNSIGNED_INT&&(ue=r.RGBA32UI),$===r.BYTE&&(ue=r.RGBA8I),$===r.SHORT&&(ue=r.RGBA16I),$===r.INT&&(ue=r.RGBA32I)),M===r.RGB&&($===r.UNSIGNED_SHORT&&Pe&&(ue=Pe.RGB16_EXT),$===r.SHORT&&Pe&&(ue=Pe.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(ue=r.R11F_G11F_B10F)),M===r.RGBA){const pe=Me?Jl:vt.getTransfer(ge);$===r.FLOAT&&(ue=r.RGBA32F),$===r.HALF_FLOAT&&(ue=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ue=pe===Lt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Pe&&(ue=Pe.RGBA16_EXT),$===r.SHORT&&Pe&&(ue=Pe.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function V(P,M){let $;return P?M===null||M===Ii||M===oo?$=r.DEPTH24_STENCIL8:M===Pi?$=r.DEPTH32F_STENCIL8:M===ao&&($=r.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ii||M===oo?$=r.DEPTH_COMPONENT24:M===Pi?$=r.DEPTH_COMPONENT32F:M===ao&&($=r.DEPTH_COMPONENT16),$}function D(P,M){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==xn&&P.minFilter!==Tn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function z(P){const M=P.target;M.removeEventListener("dispose",z),U(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&v.delete(M)}function A(P){const M=P.target;M.removeEventListener("dispose",A),O(M)}function U(P){const M=s.get(P);if(M.__webglInit===void 0)return;const $=P.source,he=y.get($);if(he){const ge=he[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&Y(P),Object.keys(he).length===0&&y.delete($)}s.remove(P)}function Y(P){const M=s.get(P);r.deleteTexture(M.__webglTexture);const $=P.source,he=y.get($);delete he[M.__cacheKey],u.memory.textures--}function O(P){const M=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let ge=0;ge<M.__webglFramebuffer[he].length;ge++)r.deleteFramebuffer(M.__webglFramebuffer[he][ge]);else r.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)r.deleteFramebuffer(M.__webglFramebuffer[he]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=P.textures;for(let he=0,ge=$.length;he<ge;he++){const Me=s.get($[he]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),u.memory.textures--),s.remove($[he])}s.remove(P)}let Z=0;function ce(){Z=0}function de(){return Z}function j(P){Z=P}function re(){const P=Z;return P>=o.maxTextures&&it("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),Z+=1,P}function k(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function q(P,M){const $=s.get(P);if(P.isVideoTexture&&Rt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){const he=P.image;if(he===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue($,P,M);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+M)}function Q(P,M){const $=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Ue($,P,M);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+M)}function se(P,M){const $=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Ue($,P,M);return}t.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+M)}function F(P,M){const $=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&$.__version!==P.version){Qe($,P,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+M)}const ee={[Bd]:r.REPEAT,[Ji]:r.CLAMP_TO_EDGE,[zd]:r.MIRRORED_REPEAT},Oe={[xn]:r.NEAREST,[rS]:r.NEAREST_MIPMAP_NEAREST,[gl]:r.NEAREST_MIPMAP_LINEAR,[Tn]:r.LINEAR,[Yu]:r.LINEAR_MIPMAP_NEAREST,[ss]:r.LINEAR_MIPMAP_LINEAR},He={[oS]:r.NEVER,[fS]:r.ALWAYS,[lS]:r.LESS,[zf]:r.LEQUAL,[cS]:r.EQUAL,[Vf]:r.GEQUAL,[uS]:r.GREATER,[dS]:r.NOTEQUAL};function Ie(P,M){if(M.type===Pi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Tn||M.magFilter===Yu||M.magFilter===gl||M.magFilter===ss||M.minFilter===Tn||M.minFilter===Yu||M.minFilter===gl||M.minFilter===ss)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ee[M.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ee[M.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ee[M.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Oe[M.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Oe[M.minFilter]),M.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,He[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===xn||M.minFilter!==gl&&M.minFilter!==ss||M.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function le(P,M){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",z));const he=M.source;let ge=y.get(he);ge===void 0&&(ge={},y.set(he,ge));const Me=k(M);if(Me!==P.__cacheKey){ge[Me]===void 0&&(ge[Me]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,$=!0),ge[Me].usedTimes++;const Pe=ge[P.__cacheKey];Pe!==void 0&&(ge[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&Y(M)),P.__cacheKey=Me,P.__webglTexture=ge[Me].texture}return $}function Se(P,M,$){return Math.floor(Math.floor(P/$)/M)}function me(P,M,$,he){const Me=P.updateRanges;if(Me.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,$,he,M.data);else{Me.sort((Be,Ae)=>Be.start-Ae.start);let Pe=0;for(let Be=1;Be<Me.length;Be++){const Ae=Me[Pe],Ee=Me[Be],nt=Ae.start+Ae.count,st=Se(Ee.start,M.width,4),pt=Se(Ae.start,M.width,4);Ee.start<=nt+1&&st===pt&&Se(Ee.start+Ee.count-1,M.width,4)===st?Ae.count=Math.max(Ae.count,Ee.start+Ee.count-Ae.start):(++Pe,Me[Pe]=Ee)}Me.length=Pe+1;const ue=t.getParameter(r.UNPACK_ROW_LENGTH),pe=t.getParameter(r.UNPACK_SKIP_PIXELS),Fe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Be=0,Ae=Me.length;Be<Ae;Be++){const Ee=Me[Be],nt=Math.floor(Ee.start/4),st=Math.ceil(Ee.count/4),pt=nt%M.width,G=Math.floor(nt/M.width),Te=st,fe=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),t.pixelStorei(r.UNPACK_SKIP_ROWS,G),t.texSubImage2D(r.TEXTURE_2D,0,pt,G,Te,fe,$,he,M.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ue),t.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(r.UNPACK_SKIP_ROWS,Fe)}}function Ue(P,M,$){let he=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=r.TEXTURE_3D);const ge=le(P,M),Me=M.source;t.bindTexture(he,P.__webglTexture,r.TEXTURE0+$);const Pe=s.get(Me);if(Me.version!==Pe.__version||ge===!0){if(t.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const fe=vt.getPrimaries(vt.workingColorSpace),ke=M.colorSpace===Rr?null:vt.getPrimaries(M.colorSpace),Ce=M.colorSpace===Rr||fe===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let pe=x(M.image,!1,o.maxTextureSize);pe=Le(M,pe);const Fe=l.convert(M.format,M.colorSpace),Be=l.convert(M.type);let Ae=N(M.internalFormat,Fe,Be,M.normalized,M.colorSpace,M.isVideoTexture);Ie(he,M);let Ee;const nt=M.mipmaps,st=M.isVideoTexture!==!0,pt=Pe.__version===void 0||ge===!0,G=Me.dataReady,Te=D(M,pe);if(M.isDepthTexture)Ae=V(M.format===as,M.type),pt&&(st?t.texStorage2D(r.TEXTURE_2D,1,Ae,pe.width,pe.height):t.texImage2D(r.TEXTURE_2D,0,Ae,pe.width,pe.height,0,Fe,Be,null));else if(M.isDataTexture)if(nt.length>0){st&&pt&&t.texStorage2D(r.TEXTURE_2D,Te,Ae,nt[0].width,nt[0].height);for(let fe=0,ke=nt.length;fe<ke;fe++)Ee=nt[fe],st?G&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,Fe,Be,Ee.data):t.texImage2D(r.TEXTURE_2D,fe,Ae,Ee.width,Ee.height,0,Fe,Be,Ee.data);M.generateMipmaps=!1}else st?(pt&&t.texStorage2D(r.TEXTURE_2D,Te,Ae,pe.width,pe.height),G&&me(M,pe,Fe,Be)):t.texImage2D(r.TEXTURE_2D,0,Ae,pe.width,pe.height,0,Fe,Be,pe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){st&&pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ae,nt[0].width,nt[0].height,pe.depth);for(let fe=0,ke=nt.length;fe<ke;fe++)if(Ee=nt[fe],M.format!==_i)if(Fe!==null)if(st){if(G)if(M.layerUpdates.size>0){const Ce=pg(Ee.width,Ee.height,M.format,M.type);for(const xe of M.layerUpdates){const Xe=Ee.data.subarray(xe*Ce/Ee.data.BYTES_PER_ELEMENT,(xe+1)*Ce/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,xe,Ee.width,Ee.height,1,Fe,Xe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,pe.depth,Fe,Ee.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,Ae,Ee.width,Ee.height,pe.depth,0,Ee.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?G&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,pe.depth,Fe,Be,Ee.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,Ae,Ee.width,Ee.height,pe.depth,0,Fe,Be,Ee.data)}else{st&&pt&&t.texStorage2D(r.TEXTURE_2D,Te,Ae,nt[0].width,nt[0].height);for(let fe=0,ke=nt.length;fe<ke;fe++)Ee=nt[fe],M.format!==_i?Fe!==null?st?G&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,Fe,Ee.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,Ae,Ee.width,Ee.height,0,Ee.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?G&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,Fe,Be,Ee.data):t.texImage2D(r.TEXTURE_2D,fe,Ae,Ee.width,Ee.height,0,Fe,Be,Ee.data)}else if(M.isDataArrayTexture)if(st){if(pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ae,pe.width,pe.height,pe.depth),G)if(M.layerUpdates.size>0){const fe=pg(pe.width,pe.height,M.format,M.type);for(const ke of M.layerUpdates){const Ce=pe.data.subarray(ke*fe/pe.data.BYTES_PER_ELEMENT,(ke+1)*fe/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ke,pe.width,pe.height,1,Fe,Be,Ce)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Fe,Be,pe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,pe.width,pe.height,pe.depth,0,Fe,Be,pe.data);else if(M.isData3DTexture)st?(pt&&t.texStorage3D(r.TEXTURE_3D,Te,Ae,pe.width,pe.height,pe.depth),G&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Fe,Be,pe.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,pe.width,pe.height,pe.depth,0,Fe,Be,pe.data);else if(M.isFramebufferTexture){if(pt)if(st)t.texStorage2D(r.TEXTURE_2D,Te,Ae,pe.width,pe.height);else{let fe=pe.width,ke=pe.height;for(let Ce=0;Ce<Te;Ce++)t.texImage2D(r.TEXTURE_2D,Ce,Ae,fe,ke,0,Fe,Be,null),fe>>=1,ke>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const fe=r.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),pe.parentNode!==fe){fe.appendChild(pe),v.add(M),fe.onpaint=at=>{const It=at.changedElements;for(const Tt of v)It.includes(Tt.image)&&(Tt.needsUpdate=!0)},fe.requestPaint();return}const ke=0,Ce=r.RGBA,xe=r.RGBA,Xe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,ke,Ce,xe,Xe,pe),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(nt.length>0){if(st&&pt){const fe=zt(nt[0]);t.texStorage2D(r.TEXTURE_2D,Te,Ae,fe.width,fe.height)}for(let fe=0,ke=nt.length;fe<ke;fe++)Ee=nt[fe],st?G&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Fe,Be,Ee):t.texImage2D(r.TEXTURE_2D,fe,Ae,Fe,Be,Ee);M.generateMipmaps=!1}else if(st){if(pt){const fe=zt(pe);t.texStorage2D(r.TEXTURE_2D,Te,Ae,fe.width,fe.height)}G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Fe,Be,pe)}else t.texImage2D(r.TEXTURE_2D,0,Ae,Fe,Be,pe);S(M)&&C(he),Pe.__version=Me.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Qe(P,M,$){if(M.image.length!==6)return;const he=le(P,M),ge=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+$);const Me=s.get(ge);if(ge.version!==Me.__version||he===!0){t.activeTexture(r.TEXTURE0+$);const Pe=vt.getPrimaries(vt.workingColorSpace),ue=M.colorSpace===Rr?null:vt.getPrimaries(M.colorSpace),pe=M.colorSpace===Rr||Pe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let xe=0;xe<6;xe++)!Fe&&!Be?Ae[xe]=x(M.image[xe],!0,o.maxCubemapSize):Ae[xe]=Be?M.image[xe].image:M.image[xe],Ae[xe]=Le(M,Ae[xe]);const Ee=Ae[0],nt=l.convert(M.format,M.colorSpace),st=l.convert(M.type),pt=N(M.internalFormat,nt,st,M.normalized,M.colorSpace),G=M.isVideoTexture!==!0,Te=Me.__version===void 0||he===!0,fe=ge.dataReady;let ke=D(M,Ee);Ie(r.TEXTURE_CUBE_MAP,M);let Ce;if(Fe){G&&Te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,pt,Ee.width,Ee.height);for(let xe=0;xe<6;xe++){Ce=Ae[xe].mipmaps;for(let Xe=0;Xe<Ce.length;Xe++){const at=Ce[Xe];M.format!==_i?nt!==null?G?fe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,at.width,at.height,nt,at.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,pt,at.width,at.height,0,at.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,at.width,at.height,nt,st,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,pt,at.width,at.height,0,nt,st,at.data)}}}else{if(Ce=M.mipmaps,G&&Te){Ce.length>0&&ke++;const xe=zt(Ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,pt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Be){G?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ae[xe].width,Ae[xe].height,nt,st,Ae[xe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,pt,Ae[xe].width,Ae[xe].height,0,nt,st,Ae[xe].data);for(let Xe=0;Xe<Ce.length;Xe++){const It=Ce[Xe].image[xe].image;G?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,It.width,It.height,nt,st,It.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,pt,It.width,It.height,0,nt,st,It.data)}}else{G?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,nt,st,Ae[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,pt,nt,st,Ae[xe]);for(let Xe=0;Xe<Ce.length;Xe++){const at=Ce[Xe];G?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,nt,st,at.image[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,pt,nt,st,at.image[xe])}}}S(M)&&C(r.TEXTURE_CUBE_MAP),Me.__version=ge.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Je(P,M,$,he,ge,Me){const Pe=l.convert($.format,$.colorSpace),ue=l.convert($.type),pe=N($.internalFormat,Pe,ue,$.normalized,$.colorSpace),Fe=s.get(M),Be=s.get($);if(Be.__renderTarget=M,!Fe.__hasExternalTextures){const Ae=Math.max(1,M.width>>Me),Ee=Math.max(1,M.height>>Me);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?t.texImage3D(ge,Me,pe,Ae,Ee,M.depth,0,Pe,ue,null):t.texImage2D(ge,Me,pe,Ae,Ee,0,Pe,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),ft(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,ge,Be.__webglTexture,0,Ot(M)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,ge,Be.__webglTexture,Me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(P,M,$){if(r.bindRenderbuffer(r.RENDERBUFFER,P),M.depthBuffer){const he=M.depthTexture,ge=he&&he.isDepthTexture?he.type:null,Me=V(M.stencilBuffer,ge),Pe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ft(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot(M),Me,M.width,M.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot(M),Me,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Me,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,P)}else{const he=M.textures;for(let ge=0;ge<he.length;ge++){const Me=he[ge],Pe=l.convert(Me.format,Me.colorSpace),ue=l.convert(Me.type),pe=N(Me.internalFormat,Pe,ue,Me.normalized,Me.colorSpace);ft(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot(M),pe,M.width,M.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot(M),pe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,pe,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(P,M,$){const he=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(M.depthTexture);if(ge.__renderTarget=M,(!ge.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,M.depthTexture.addEventListener("dispose",z)),ge.__webglTexture===void 0){ge.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,M.depthTexture);const Fe=l.convert(M.depthTexture.format),Be=l.convert(M.depthTexture.type);let Ae;M.depthTexture.format===ir?Ae=r.DEPTH_COMPONENT24:M.depthTexture.format===as&&(Ae=r.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Ae,M.width,M.height,0,Fe,Be,null)}}else q(M.depthTexture,0);const Me=ge.__webglTexture,Pe=Ot(M),ue=he?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,pe=M.depthTexture.format===as?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===ir)ft(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,ue,Me,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,pe,ue,Me,0);else if(M.depthTexture.format===as)ft(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,ue,Me,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,pe,ue,Me,0);else throw new Error("Unknown depthTexture format")}function wt(P){const M=s.get(P),$=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const he=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=he}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if($)for(let he=0;he<6;he++)ut(M.__webglFramebuffer[he],P,he);else{const he=P.texture.mipmaps;he&&he.length>0?ut(M.__webglFramebuffer[0],P,0):ut(M.__webglFramebuffer,P,0)}else if($){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=r.createRenderbuffer(),Ut(M.__webglDepthbuffer[he],P,!1);else{const ge=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=M.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,Me),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,Me)}}else{const he=P.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ut(M.__webglDepthbuffer,P,!1);else{const ge=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Me),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,Me)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(P,M,$){const he=s.get(P);M!==void 0&&Je(he.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&wt(P)}function dt(P){const M=P.texture,$=s.get(P),he=s.get(M);P.addEventListener("dispose",A);const ge=P.textures,Me=P.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=M.version,u.memory.textures++),Me){$.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[ue]=[];for(let pe=0;pe<M.mipmaps.length;pe++)$.__webglFramebuffer[ue][pe]=r.createFramebuffer()}else $.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)$.__webglFramebuffer[ue]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let ue=0,pe=ge.length;ue<pe;ue++){const Fe=s.get(ge[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=r.createTexture(),u.memory.textures++)}if(P.samples>0&&ft(P)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ue=0;ue<ge.length;ue++){const pe=ge[ue];$.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[ue]);const Fe=l.convert(pe.format,pe.colorSpace),Be=l.convert(pe.type),Ae=N(pe.internalFormat,Fe,Be,pe.normalized,pe.colorSpace,P.isXRRenderTarget===!0),Ee=Ot(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,Ae,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,$.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Ut($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Me){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)Je($.__webglFramebuffer[ue][pe],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,pe);else Je($.__webglFramebuffer[ue],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(M)&&C(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ue=0,pe=ge.length;ue<pe;ue++){const Fe=ge[ue],Be=s.get(Fe);let Ae=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Be.__webglTexture),Ie(Ae,Fe),Je($.__webglFramebuffer,P,Fe,r.COLOR_ATTACHMENT0+ue,Ae,0),S(Fe)&&C(Ae)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,he.__webglTexture),Ie(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)Je($.__webglFramebuffer[pe],P,M,r.COLOR_ATTACHMENT0,ue,pe);else Je($.__webglFramebuffer,P,M,r.COLOR_ATTACHMENT0,ue,0);S(M)&&C(ue),t.unbindTexture()}P.depthBuffer&&wt(P)}function Xt(P){const M=P.textures;for(let $=0,he=M.length;$<he;$++){const ge=M[$];if(S(ge)){const Me=L(P),Pe=s.get(ge).__webglTexture;t.bindTexture(Me,Pe),C(Me),t.unbindTexture()}}}const Ft=[],hn=[];function H(P){if(P.samples>0){if(ft(P)===!1){const M=P.textures,$=P.width,he=P.height;let ge=r.COLOR_BUFFER_BIT;const Me=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=s.get(P),ue=M.length>1;if(ue)for(let Fe=0;Fe<M.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const pe=P.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Fe=0;Fe<M.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const Be=s.get(M[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Be,0)}r.blitFramebuffer(0,0,$,he,0,0,$,he,ge,r.NEAREST),h===!0&&(Ft.length=0,hn.length=0,Ft.push(r.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ft.push(Me),hn.push(Me),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,hn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let Fe=0;Fe<M.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const Be=s.get(M[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,Be,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const M=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Ot(P){return Math.min(o.maxSamples,P.samples)}function ft(P){const M=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Rt(P){const M=u.render.frame;_.get(P)!==M&&(_.set(P,M),P.update())}function Le(P,M){const $=P.colorSpace,he=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Ql&&$!==Rr&&(vt.getTransfer($)===Lt?(he!==_i||ge!==Kn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",$)),M}function zt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=re,this.resetTextureUnits=ce,this.getTextureUnits=de,this.setTextureUnits=j,this.setTexture2D=q,this.setTexture2DArray=Q,this.setTexture3D=se,this.setTextureCube=F,this.rebindTextures=Dt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Gw(r,e){function t(s,o=Rr){let l;const u=vt.getTransfer(o);if(s===Kn)return r.UNSIGNED_BYTE;if(s===Uf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ff)return r.UNSIGNED_SHORT_5_5_5_1;if(s===c0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===u0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===o0)return r.BYTE;if(s===l0)return r.SHORT;if(s===ao)return r.UNSIGNED_SHORT;if(s===If)return r.INT;if(s===Ii)return r.UNSIGNED_INT;if(s===Pi)return r.FLOAT;if(s===nr)return r.HALF_FLOAT;if(s===d0)return r.ALPHA;if(s===f0)return r.RGB;if(s===_i)return r.RGBA;if(s===ir)return r.DEPTH_COMPONENT;if(s===as)return r.DEPTH_STENCIL;if(s===h0)return r.RED;if(s===Of)return r.RED_INTEGER;if(s===cs)return r.RG;if(s===kf)return r.RG_INTEGER;if(s===Bf)return r.RGBA_INTEGER;if(s===Wl||s===jl||s===Xl||s===ql)if(u===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Wl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Wl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vd||s===Gd||s===Hd||s===Wd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Vd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jd||s===Xd||s===qd||s===Yd||s===$d||s===Kl||s===Kd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===jd||s===Xd)return u===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===qd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===Yd)return l.COMPRESSED_R11_EAC;if(s===$d)return l.COMPRESSED_SIGNED_R11_EAC;if(s===Kl)return l.COMPRESSED_RG11_EAC;if(s===Kd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Zd||s===Qd||s===Jd||s===ef||s===tf||s===nf||s===rf||s===sf||s===af||s===of||s===lf||s===cf||s===uf||s===df)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Zd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ef)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===nf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===rf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===af)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===of)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===lf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===uf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===df)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ff||s===hf||s===pf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===ff)return u===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===pf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mf||s===gf||s===Zl||s===xf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===mf)return l.COMPRESSED_RED_RGTC1_EXT;if(s===gf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===oo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const Hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ww=`
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

}`;class jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new E0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Ui({vertexShader:Hw,fragmentShader:Ww,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vn(new ac(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xw extends ds{constructor(e,t){super();const s=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,_=null,v=null,g=null,y=null,T=null;const R=typeof XRWebGLBinding<"u",x=new jw,S={},C=t.getContextAttributes();let L=null,N=null;const V=[],D=[],z=new bt;let A=null;const U=new $n;U.viewport=new Zt;const Y=new $n;Y.viewport=new Zt;const O=[U,Y],Z=new ty;let ce=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Se=V[le];return Se===void 0&&(Se=new nd,V[le]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(le){let Se=V[le];return Se===void 0&&(Se=new nd,V[le]=Se),Se.getGripSpace()},this.getHand=function(le){let Se=V[le];return Se===void 0&&(Se=new nd,V[le]=Se),Se.getHandSpace()};function j(le){const Se=D.indexOf(le.inputSource);if(Se===-1)return;const me=V[Se];me!==void 0&&(me.update(le.inputSource,le.frame,p||u),me.dispatchEvent({type:le.type,data:le.inputSource}))}function re(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",re),o.removeEventListener("inputsourceschange",k);for(let le=0;le<V.length;le++){const Se=D[le];Se!==null&&(D[le]=null,V[le].disconnect(Se))}ce=null,de=null,x.reset();for(const le in S)delete S[le];e.setRenderTarget(L),y=null,g=null,v=null,o=null,N=null,Ie.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){l=le,s.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){f=le,s.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(le){p=le},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",re),o.addEventListener("inputsourceschange",k),C.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,Qe=null;C.depth&&(Qe=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=C.stencil?as:ir,Ue=C.stencil?oo:Ii);const Je={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:l};v=this.getBinding(),g=v.createProjectionLayer(Je),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new Di(g.textureWidth,g.textureHeight,{format:_i,type:Kn,depthTexture:new ia(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Di(y.framebufferWidth,y.framebufferHeight,{format:_i,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Ie.setContext(o),Ie.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(le){for(let Se=0;Se<le.removed.length;Se++){const me=le.removed[Se],Ue=D.indexOf(me);Ue>=0&&(D[Ue]=null,V[Ue].disconnect(me))}for(let Se=0;Se<le.added.length;Se++){const me=le.added[Se];let Ue=D.indexOf(me);if(Ue===-1){for(let Je=0;Je<V.length;Je++)if(Je>=D.length){D.push(me),Ue=Je;break}else if(D[Je]===null){D[Je]=me,Ue=Je;break}if(Ue===-1)break}const Qe=V[Ue];Qe&&Qe.connect(me)}}const q=new ne,Q=new ne;function se(le,Se,me){q.setFromMatrixPosition(Se.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);const Ue=q.distanceTo(Q),Qe=Se.projectionMatrix.elements,Je=me.projectionMatrix.elements,Ut=Qe[14]/(Qe[10]-1),ut=Qe[14]/(Qe[10]+1),wt=(Qe[9]+1)/Qe[5],Dt=(Qe[9]-1)/Qe[5],dt=(Qe[8]-1)/Qe[0],Xt=(Je[8]+1)/Je[0],Ft=Ut*dt,hn=Ut*Xt,H=Ue/(-dt+Xt),Ot=H*-dt;if(Se.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Ot),le.translateZ(H),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Qe[10]===-1)le.projectionMatrix.copy(Se.projectionMatrix),le.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const ft=Ut+H,Rt=ut+H,Le=Ft-Ot,zt=hn+(Ue-Ot),P=wt*ut/Rt*ft,M=Dt*ut/Rt*ft;le.projectionMatrix.makePerspective(Le,zt,P,M,ft,Rt),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function F(le,Se){Se===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Se.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let Se=le.near,me=le.far;x.texture!==null&&(x.depthNear>0&&(Se=x.depthNear),x.depthFar>0&&(me=x.depthFar)),Z.near=Y.near=U.near=Se,Z.far=Y.far=U.far=me,(ce!==Z.near||de!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ce=Z.near,de=Z.far),Z.layers.mask=le.layers.mask|6,U.layers.mask=Z.layers.mask&-5,Y.layers.mask=Z.layers.mask&-3;const Ue=le.parent,Qe=Z.cameras;F(Z,Ue);for(let Je=0;Je<Qe.length;Je++)F(Qe[Je],Ue);Qe.length===2?se(Z,U,Y):Z.projectionMatrix.copy(U.projectionMatrix),ee(le,Z,Ue)};function ee(le,Se,me){me===null?le.matrix.copy(Se.matrixWorld):(le.matrix.copy(me.matrixWorld),le.matrix.invert(),le.matrix.multiply(Se.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Se.projectionMatrix),le.projectionMatrixInverse.copy(Se.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Sf*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&y===null))return h},this.setFoveation=function(le){h=le,g!==null&&(g.fixedFoveation=le),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=le)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Z)},this.getCameraTexture=function(le){return S[le]};let Oe=null;function He(le,Se){if(_=Se.getViewerPose(p||u),T=Se,_!==null){const me=_.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let Ue=!1;me.length!==Z.cameras.length&&(Z.cameras.length=0,Ue=!0);for(let ut=0;ut<me.length;ut++){const wt=me[ut];let Dt=null;if(y!==null)Dt=y.getViewport(wt);else{const Xt=v.getViewSubImage(g,wt);Dt=Xt.viewport,ut===0&&(e.setRenderTargetTextures(N,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(N))}let dt=O[ut];dt===void 0&&(dt=new $n,dt.layers.enable(ut),dt.viewport=new Zt,O[ut]=dt),dt.matrix.fromArray(wt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(wt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),ut===0&&(Z.matrix.copy(dt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ue===!0&&Z.cameras.push(dt)}const Qe=o.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){v=s.getBinding();const ut=v.getDepthInformation(me[0]);ut&&ut.isValid&&ut.texture&&x.init(ut,o.renderState)}if(Qe&&Qe.includes("camera-access")&&R){e.state.unbindTexture(),v=s.getBinding();for(let ut=0;ut<me.length;ut++){const wt=me[ut].camera;if(wt){let Dt=S[wt];Dt||(Dt=new E0,S[wt]=Dt);const dt=v.getCameraImage(wt);Dt.sourceTexture=dt}}}}for(let me=0;me<V.length;me++){const Ue=D[me],Qe=V[me];Ue!==null&&Qe!==void 0&&Qe.update(Ue,Se,p||u)}Oe&&Oe(le,Se),Se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Se}),T=null}const Ie=new b0;Ie.setAnimationLoop(He),this.setAnimationLoop=function(le){Oe=le},this.dispose=function(){}}}const qw=new Qt,I0=new ct;I0.set(-1,0,0,0,1,0,0,0,1);function Yw(r,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function s(x,S){S.color.getRGB(x.fogColor.value,w0(r)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function o(x,S,C,L,N){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(x,S):S.isMeshLambertMaterial?(l(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(x,S),v(x,S)):S.isMeshPhongMaterial?(l(x,S),_(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(x,S),g(x,S),S.isMeshPhysicalMaterial&&y(x,S,N)):S.isMeshMatcapMaterial?(l(x,S),T(x,S)):S.isMeshDepthMaterial?l(x,S):S.isMeshDistanceMaterial?(l(x,S),R(x,S)):S.isMeshNormalMaterial?l(x,S):S.isLineBasicMaterial?(u(x,S),S.isLineDashedMaterial&&f(x,S)):S.isPointsMaterial?h(x,S,C,L):S.isSpriteMaterial?p(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Gn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Gn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const C=e.get(S),L=C.envMap,N=C.envMapRotation;L&&(x.envMap.value=L,x.envMapRotation.value.setFromMatrix4(qw.makeRotationFromEuler(N)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(I0),x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function u(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function f(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function h(x,S,C,L){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*C,x.scale.value=L*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function _(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function v(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function g(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,C){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Gn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,S){S.matcap&&(x.matcap.value=S.matcap)}function R(x,S){const C=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function $w(r,e,t,s){let o={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,L){const N=L.program;s.uniformBlockBinding(C,N)}function p(C,L){let N=o[C.id];N===void 0&&(T(C),N=_(C),o[C.id]=N,C.addEventListener("dispose",x));const V=L.program;s.updateUBOMapping(C,V);const D=e.render.frame;l[C.id]!==D&&(g(C),l[C.id]=D)}function _(C){const L=v();C.__bindingPointIndex=L;const N=r.createBuffer(),V=C.__size,D=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,V,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,N),N}function v(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const L=o[C.id],N=C.uniforms,V=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let D=0,z=N.length;D<z;D++){const A=Array.isArray(N[D])?N[D]:[N[D]];for(let U=0,Y=A.length;U<Y;U++){const O=A[U];if(y(O,D,U,V)===!0){const Z=O.__offset,ce=Array.isArray(O.value)?O.value:[O.value];let de=0;for(let j=0;j<ce.length;j++){const re=ce[j],k=R(re);typeof re=="number"||typeof re=="boolean"?(O.__data[0]=re,r.bufferSubData(r.UNIFORM_BUFFER,Z+de,O.__data)):re.isMatrix3?(O.__data[0]=re.elements[0],O.__data[1]=re.elements[1],O.__data[2]=re.elements[2],O.__data[3]=0,O.__data[4]=re.elements[3],O.__data[5]=re.elements[4],O.__data[6]=re.elements[5],O.__data[7]=0,O.__data[8]=re.elements[6],O.__data[9]=re.elements[7],O.__data[10]=re.elements[8],O.__data[11]=0):ArrayBuffer.isView(re)?O.__data.set(new re.constructor(re.buffer,re.byteOffset,O.__data.length)):(re.toArray(O.__data,de),de+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,L,N,V){const D=C.value,z=L+"_"+N;if(V[z]===void 0)return typeof D=="number"||typeof D=="boolean"?V[z]=D:ArrayBuffer.isView(D)?V[z]=D.slice():V[z]=D.clone(),!0;{const A=V[z];if(typeof D=="number"||typeof D=="boolean"){if(A!==D)return V[z]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(A.equals(D)===!1)return A.copy(D),!0}}return!1}function T(C){const L=C.uniforms;let N=0;const V=16;for(let z=0,A=L.length;z<A;z++){const U=Array.isArray(L[z])?L[z]:[L[z]];for(let Y=0,O=U.length;Y<O;Y++){const Z=U[Y],ce=Array.isArray(Z.value)?Z.value:[Z.value];for(let de=0,j=ce.length;de<j;de++){const re=ce[de],k=R(re),q=N%V,Q=q%k.boundary,se=q+Q;N+=Q,se!==0&&V-se<k.storage&&(N+=V-se),Z.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=N,N+=k.storage}}}const D=N%V;return D>0&&(N+=V-D),C.__size=N,C.__cache={},this}function R(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):it("WebGLRenderer: Unsupported uniform value type.",C),L}function x(C){const L=C.target;L.removeEventListener("dispose",x);const N=u.indexOf(L.__bindingPointIndex);u.splice(N,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function S(){for(const C in o)r.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:h,update:p,dispose:S}}const Kw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function Zw(){return Ci===null&&(Ci=new OS(Kw,16,16,cs,nr),Ci.name="DFG_LUT",Ci.minFilter=Tn,Ci.magFilter=Tn,Ci.wrapS=Ji,Ci.wrapT=Ji,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class Qw{constructor(e={}){const{canvas:t=pS(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Kn}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=u;const R=y,x=new Set([Bf,kf,Of]),S=new Set([Kn,Ii,ao,oo,Uf,Ff]),C=new Uint32Array(4),L=new Int32Array(4),N=new ne;let V=null,D=null;const z=[],A=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let O=!1,Z=null;this._outputColorSpace=ai;let ce=0,de=0,j=null,re=-1,k=null;const q=new Zt,Q=new Zt;let se=null;const F=new yt(0);let ee=0,Oe=t.width,He=t.height,Ie=1,le=null,Se=null;const me=new Zt(0,0,Oe,He),Ue=new Zt(0,0,Oe,He);let Qe=!1;const Je=new Wf;let Ut=!1,ut=!1;const wt=new Qt,Dt=new ne,dt=new Zt,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function hn(){return j===null?Ie:1}let H=s;function Ot(b,X){return t.getContext(b,X)}try{const b={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lf}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",at,!1),H===null){const X="webgl2";if(H=Ot(X,b),H===null)throw Ot(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Et("WebGLRenderer: "+b.message),b}let ft,Rt,Le,zt,P,M,$,he,ge,Me,Pe,ue,pe,Fe,Be,Ae,Ee,nt,st,pt,G,Te,fe;function ke(){ft=new ZE(H),ft.init(),G=new Gw(H,ft),Rt=new HE(H,ft,e,G),Le=new zw(H,ft),Rt.reversedDepthBuffer&&g&&Le.buffers.depth.setReversed(!0),zt=new e1(H),P=new Aw,M=new Vw(H,ft,Le,P,Rt,G,zt),$=new KE(Y),he=new ry(H),Te=new VE(H,he),ge=new QE(H,he,zt,Te),Me=new n1(H,ge,he,Te,zt),nt=new t1(H,Rt,M),Be=new WE(P),Pe=new Tw(Y,$,ft,Rt,Te,Be),ue=new Yw(Y,P),pe=new Cw,Fe=new Iw(ft),Ee=new zE(Y,$,Le,Me,T,h),Ae=new Bw(Y,Me,Rt),fe=new $w(H,zt,Rt,Le),st=new GE(H,ft,zt),pt=new JE(H,ft,zt),zt.programs=Pe.programs,Y.capabilities=Rt,Y.extensions=ft,Y.properties=P,Y.renderLists=pe,Y.shadowMap=Ae,Y.state=Le,Y.info=zt}ke(),R!==Kn&&(U=new r1(R,t.width,t.height,o,l));const Ce=new Xw(Y,H);this.xr=Ce,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(b){b!==void 0&&(Ie=b,this.setSize(Oe,He,!1))},this.getSize=function(b){return b.set(Oe,He)},this.setSize=function(b,X,ae=!0){if(Ce.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=b,He=X,t.width=Math.floor(b*Ie),t.height=Math.floor(X*Ie),ae===!0&&(t.style.width=b+"px",t.style.height=X+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(Oe*Ie,He*Ie).floor()},this.setDrawingBufferSize=function(b,X,ae){Oe=b,He=X,Ie=ae,t.width=Math.floor(b*ae),t.height=Math.floor(X*ae),this.setViewport(0,0,b,X)},this.setEffects=function(b){if(R===Kn){Et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let X=0;X<b.length;X++)if(b[X].isOutputPass===!0){it("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(q)},this.getViewport=function(b){return b.copy(me)},this.setViewport=function(b,X,ae,te){b.isVector4?me.set(b.x,b.y,b.z,b.w):me.set(b,X,ae,te),Le.viewport(q.copy(me).multiplyScalar(Ie).round())},this.getScissor=function(b){return b.copy(Ue)},this.setScissor=function(b,X,ae,te){b.isVector4?Ue.set(b.x,b.y,b.z,b.w):Ue.set(b,X,ae,te),Le.scissor(Q.copy(Ue).multiplyScalar(Ie).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(b){Le.setScissorTest(Qe=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){Se=b},this.getClearColor=function(b){return b.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,ae=!0){let te=0;if(b){let J=!1;if(j!==null){const Re=j.texture.format;J=x.has(Re)}if(J){const Re=j.texture.type,Ge=S.has(Re),be=Ee.getClearColor(),qe=Ee.getClearAlpha(),Ze=be.r,ot=be.g,lt=be.b;Ge?(C[0]=Ze,C[1]=ot,C[2]=lt,C[3]=qe,H.clearBufferuiv(H.COLOR,0,C)):(L[0]=Ze,L[1]=ot,L[2]=lt,L[3]=qe,H.clearBufferiv(H.COLOR,0,L))}else te|=H.COLOR_BUFFER_BIT}X&&(te|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(te|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&H.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),Z=b},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",at,!1),Ee.dispose(),pe.dispose(),Fe.dispose(),P.dispose(),$.dispose(),Me.dispose(),Te.dispose(),fe.dispose(),Pe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Or),Ce.removeEventListener("sessionend",hs),Oi.stop()};function xe(b){b.preventDefault(),Hm("WebGLRenderer: Context Lost."),O=!0}function Xe(){Hm("WebGLRenderer: Context Restored."),O=!1;const b=zt.autoReset,X=Ae.enabled,ae=Ae.autoUpdate,te=Ae.needsUpdate,J=Ae.type;ke(),zt.autoReset=b,Ae.enabled=X,Ae.autoUpdate=ae,Ae.needsUpdate=te,Ae.type=J}function at(b){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function It(b){const X=b.target;X.removeEventListener("dispose",It),Tt(X)}function Tt(b){An(b),P.remove(b)}function An(b){const X=P.get(b).programs;X!==void 0&&(X.forEach(function(ae){Pe.releaseProgram(ae)}),b.isShaderMaterial&&Pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,ae,te,J,Re){X===null&&(X=Xt);const Ge=J.isMesh&&J.matrixWorld.determinant()<0,be=mo(b,X,ae,te,J);Le.setMaterial(te,Ge);let qe=ae.index,Ze=1;if(te.wireframe===!0){if(qe=ge.getWireframeAttribute(ae),qe===void 0)return;Ze=2}const ot=ae.drawRange,lt=ae.attributes.position;let $e=ot.start*Ze,St=(ot.start+ot.count)*Ze;Re!==null&&($e=Math.max($e,Re.start*Ze),St=Math.min(St,(Re.start+Re.count)*Ze)),qe!==null?($e=Math.max($e,0),St=Math.min(St,qe.count)):lt!=null&&($e=Math.max($e,0),St=Math.min(St,lt.count));const kt=St-$e;if(kt<0||kt===1/0)return;Te.setup(J,te,be,ae,qe);let Wt,Pt=st;if(qe!==null&&(Wt=he.get(qe),Pt=pt,Pt.setIndex(Wt)),J.isMesh)te.wireframe===!0?(Le.setLineWidth(te.wireframeLinewidth*hn()),Pt.setMode(H.LINES)):Pt.setMode(H.TRIANGLES);else if(J.isLine){let tn=te.linewidth;tn===void 0&&(tn=1),Le.setLineWidth(tn*hn()),J.isLineSegments?Pt.setMode(H.LINES):J.isLineLoop?Pt.setMode(H.LINE_LOOP):Pt.setMode(H.LINE_STRIP)}else J.isPoints?Pt.setMode(H.POINTS):J.isSprite&&Pt.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))Pt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const tn=J._multiDrawStarts,ze=J._multiDrawCounts,pn=J._multiDrawCount,mt=qe?he.get(qe).bytesPerElement:1,Ln=P.get(te).currentProgram.getUniforms();for(let Dn=0;Dn<pn;Dn++)Ln.setValue(H,"_gl_DrawID",Dn),Pt.render(tn[Dn]/mt,ze[Dn])}else if(J.isInstancedMesh)Pt.renderInstances($e,kt,J.count);else if(ae.isInstancedBufferGeometry){const tn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,ze=Math.min(ae.instanceCount,tn);Pt.renderInstances($e,kt,ze)}else Pt.render($e,kt)};function Qn(b,X,ae){b.transparent===!0&&b.side===Qi&&b.forceSinglePass===!1?(b.side=Gn,b.needsUpdate=!0,ps(b,X,ae),b.side=Dr,b.needsUpdate=!0,ps(b,X,ae),b.side=Qi):ps(b,X,ae)}this.compile=function(b,X,ae=null){ae===null&&(ae=b),D=Fe.get(ae),D.init(X),A.push(D),ae.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),b!==ae&&b.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),D.setupLights();const te=new Set;return b.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Re=J.material;if(Re)if(Array.isArray(Re))for(let Ge=0;Ge<Re.length;Ge++){const be=Re[Ge];Qn(be,ae,J),te.add(be)}else Qn(Re,ae,J),te.add(Re)}),D=A.pop(),te},this.compileAsync=function(b,X,ae=null){const te=this.compile(b,X,ae);return new Promise(J=>{function Re(){if(te.forEach(function(Ge){P.get(Ge).currentProgram.isReady()&&te.delete(Ge)}),te.size===0){J(b);return}setTimeout(Re,10)}ft.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Fi=null;function fs(b){Fi&&Fi(b)}function Or(){Oi.stop()}function hs(){Oi.start()}const Oi=new b0;Oi.setAnimationLoop(fs),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(b){Fi=b,Ce.setAnimationLoop(b),b===null?Oi.stop():Oi.start()},Ce.addEventListener("sessionstart",Or),Ce.addEventListener("sessionend",hs),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;Z!==null&&Z.renderStart(b,X);const ae=Ce.enabled===!0&&Ce.isPresenting===!0,te=U!==null&&(j===null||ae)&&U.begin(Y,j);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(X),X=Ce.getCamera()),b.isScene===!0&&b.onBeforeRender(Y,b,X,j),D=Fe.get(b,A.length),D.init(X),D.state.textureUnits=M.getTextureUnits(),A.push(D),wt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Je.setFromProjectionMatrix(wt,Ni,X.reversedDepth),ut=this.localClippingEnabled,Ut=Be.init(this.clippingPlanes,ut),V=pe.get(b,z.length),V.init(),z.push(V),Ce.enabled===!0&&Ce.isPresenting===!0){const Ge=Y.xr.getDepthSensingMesh();Ge!==null&&ua(Ge,X,-1/0,Y.sortObjects)}ua(b,X,0,Y.sortObjects),V.finish(),Y.sortObjects===!0&&V.sort(le,Se),Ft=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Ft&&Ee.addToRenderList(V,b),this.info.render.frame++,Ut===!0&&Be.beginShadows();const J=D.state.shadowsArray;if(Ae.render(J,b,X),Ut===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&U.hasRenderPass())===!1){const Ge=V.opaque,be=V.transmissive;if(D.setupLights(),X.isArrayCamera){const qe=X.cameras;if(be.length>0)for(let Ze=0,ot=qe.length;Ze<ot;Ze++){const lt=qe[Ze];yi(Ge,be,b,lt)}Ft&&Ee.render(b);for(let Ze=0,ot=qe.length;Ze<ot;Ze++){const lt=qe[Ze];ho(V,b,lt,lt.viewport)}}else be.length>0&&yi(Ge,be,b,X),Ft&&Ee.render(b),ho(V,b,X)}j!==null&&de===0&&(M.updateMultisampleRenderTarget(j),M.updateRenderTargetMipmap(j)),te&&U.end(Y),b.isScene===!0&&b.onAfterRender(Y,b,X),Te.resetDefaultState(),re=-1,k=null,A.pop(),A.length>0?(D=A[A.length-1],M.setTextureUnits(D.state.textureUnits),Ut===!0&&Be.setGlobalState(Y.clippingPlanes,D.state.camera)):D=null,z.pop(),z.length>0?V=z[z.length-1]:V=null,Z!==null&&Z.renderEnd()};function ua(b,X,ae,te){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)ae=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLightProbeGrid)D.pushLightProbeGrid(b);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Je.intersectsSprite(b)){te&&dt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(wt);const Ge=Me.update(b),be=b.material;be.visible&&V.push(b,Ge,be,ae,dt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Je.intersectsObject(b))){const Ge=Me.update(b),be=b.material;if(te&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),dt.copy(b.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),dt.copy(Ge.boundingSphere.center)),dt.applyMatrix4(b.matrixWorld).applyMatrix4(wt)),Array.isArray(be)){const qe=Ge.groups;for(let Ze=0,ot=qe.length;Ze<ot;Ze++){const lt=qe[Ze],$e=be[lt.materialIndex];$e&&$e.visible&&V.push(b,Ge,$e,ae,dt.z,lt)}}else be.visible&&V.push(b,Ge,be,ae,dt.z,null)}}const Re=b.children;for(let Ge=0,be=Re.length;Ge<be;Ge++)ua(Re[Ge],X,ae,te)}function ho(b,X,ae,te){const{opaque:J,transmissive:Re,transparent:Ge}=b;D.setupLightsView(ae),Ut===!0&&Be.setGlobalState(Y.clippingPlanes,ae),te&&Le.viewport(q.copy(te)),J.length>0&&kr(J,X,ae),Re.length>0&&kr(Re,X,ae),Ge.length>0&&kr(Ge,X,ae),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function yi(b,X,ae,te){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[te.id]===void 0){const $e=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[te.id]=new Di(1,1,{generateMipmaps:!0,type:$e?nr:Kn,minFilter:ss,samples:Math.max(4,Rt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Re=D.state.transmissionRenderTarget[te.id],Ge=te.viewport||q;Re.setSize(Ge.z*Y.transmissionResolutionScale,Ge.w*Y.transmissionResolutionScale);const be=Y.getRenderTarget(),qe=Y.getActiveCubeFace(),Ze=Y.getActiveMipmapLevel();Y.setRenderTarget(Re),Y.getClearColor(F),ee=Y.getClearAlpha(),ee<1&&Y.setClearColor(16777215,.5),Y.clear(),Ft&&Ee.render(ae);const ot=Y.toneMapping;Y.toneMapping=Li;const lt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),D.setupLightsView(te),Ut===!0&&Be.setGlobalState(Y.clippingPlanes,te),kr(b,ae,te),M.updateMultisampleRenderTarget(Re),M.updateRenderTargetMipmap(Re),ft.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let St=0,kt=X.length;St<kt;St++){const Wt=X[St],{object:Pt,geometry:tn,material:ze,group:pn}=Wt;if(ze.side===Qi&&Pt.layers.test(te.layers)){const mt=ze.side;ze.side=Gn,ze.needsUpdate=!0,da(Pt,ae,te,tn,ze,pn),ze.side=mt,ze.needsUpdate=!0,$e=!0}}$e===!0&&(M.updateMultisampleRenderTarget(Re),M.updateRenderTargetMipmap(Re))}Y.setRenderTarget(be,qe,Ze),Y.setClearColor(F,ee),lt!==void 0&&(te.viewport=lt),Y.toneMapping=ot}function kr(b,X,ae){const te=X.isScene===!0?X.overrideMaterial:null;for(let J=0,Re=b.length;J<Re;J++){const Ge=b[J],{object:be,geometry:qe,group:Ze}=Ge;let ot=Ge.material;ot.allowOverride===!0&&te!==null&&(ot=te),be.layers.test(ae.layers)&&da(be,X,ae,qe,ot,Ze)}}function da(b,X,ae,te,J,Re){b.onBeforeRender(Y,X,ae,te,J,Re),b.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),J.onBeforeRender(Y,X,ae,te,b,Re),J.transparent===!0&&J.side===Qi&&J.forceSinglePass===!1?(J.side=Gn,J.needsUpdate=!0,Y.renderBufferDirect(ae,X,te,J,b,Re),J.side=Dr,J.needsUpdate=!0,Y.renderBufferDirect(ae,X,te,J,b,Re),J.side=Qi):Y.renderBufferDirect(ae,X,te,J,b,Re),b.onAfterRender(Y,X,ae,te,J,Re)}function ps(b,X,ae){X.isScene!==!0&&(X=Xt);const te=P.get(b),J=D.state.lights,Re=D.state.shadowsArray,Ge=J.state.version,be=Pe.getParameters(b,J.state,Re,X,ae,D.state.lightProbeGridArray),qe=Pe.getProgramCacheKey(be);let Ze=te.programs;te.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?X.environment:null,te.fog=X.fog;const ot=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;te.envMap=$.get(b.envMap||te.environment,ot),te.envMapRotation=te.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,Ze===void 0&&(b.addEventListener("dispose",It),Ze=new Map,te.programs=Ze);let lt=Ze.get(qe);if(lt!==void 0){if(te.currentProgram===lt&&te.lightsStateVersion===Ge)return ha(b,be),lt}else be.uniforms=Pe.getUniforms(b),Z!==null&&b.isNodeMaterial&&Z.build(b,ae,be),b.onBeforeCompile(be,Y),lt=Pe.acquireProgram(be,qe),Ze.set(qe,lt),te.uniforms=be.uniforms;const $e=te.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&($e.clippingPlanes=Be.uniform),ha(b,be),te.needsLights=uc(b),te.lightsStateVersion=Ge,te.needsLights&&($e.ambientLightColor.value=J.state.ambient,$e.lightProbe.value=J.state.probe,$e.directionalLights.value=J.state.directional,$e.directionalLightShadows.value=J.state.directionalShadow,$e.spotLights.value=J.state.spot,$e.spotLightShadows.value=J.state.spotShadow,$e.rectAreaLights.value=J.state.rectArea,$e.ltc_1.value=J.state.rectAreaLTC1,$e.ltc_2.value=J.state.rectAreaLTC2,$e.pointLights.value=J.state.point,$e.pointLightShadows.value=J.state.pointShadow,$e.hemisphereLights.value=J.state.hemi,$e.directionalShadowMatrix.value=J.state.directionalShadowMatrix,$e.spotLightMatrix.value=J.state.spotLightMatrix,$e.spotLightMap.value=J.state.spotLightMap,$e.pointShadowMatrix.value=J.state.pointShadowMatrix),te.lightProbeGrid=D.state.lightProbeGridArray.length>0,te.currentProgram=lt,te.uniformsList=null,lt}function fa(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Yl.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function ha(b,X){const ae=P.get(b);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function po(b,X){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;N.setFromMatrixPosition(X.matrixWorld);for(let ae=0,te=b.length;ae<te;ae++){const J=b[ae];if(J.texture!==null&&J.boundingBox.containsPoint(N))return J}return null}function mo(b,X,ae,te,J){X.isScene!==!0&&(X=Xt),M.resetTextureUnits();const Re=X.fog,Ge=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?X.environment:null,be=j===null?Y.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:vt.workingColorSpace,qe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ze=$.get(te.envMap||Ge,qe),ot=te.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,lt=!!ae.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),$e=!!ae.morphAttributes.position,St=!!ae.morphAttributes.normal,kt=!!ae.morphAttributes.color;let Wt=Li;te.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Wt=Y.toneMapping);const Pt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,tn=Pt!==void 0?Pt.length:0,ze=P.get(te),pn=D.state.lights;if(Ut===!0&&(ut===!0||b!==k)){const Nt=b===k&&te.id===re;Be.setState(te,b,Nt)}let mt=!1;te.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==pn.state.version||ze.outputColorSpace!==be||J.isBatchedMesh&&ze.batching===!1||!J.isBatchedMesh&&ze.batching===!0||J.isBatchedMesh&&ze.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ze.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ze.instancing===!1||!J.isInstancedMesh&&ze.instancing===!0||J.isSkinnedMesh&&ze.skinning===!1||!J.isSkinnedMesh&&ze.skinning===!0||J.isInstancedMesh&&ze.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ze.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ze.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ze.instancingMorph===!1&&J.morphTexture!==null||ze.envMap!==Ze||te.fog===!0&&ze.fog!==Re||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Be.numPlanes||ze.numIntersection!==Be.numIntersection)||ze.vertexAlphas!==ot||ze.vertexTangents!==lt||ze.morphTargets!==$e||ze.morphNormals!==St||ze.morphColors!==kt||ze.toneMapping!==Wt||ze.morphTargetsCount!==tn||!!ze.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,ze.__version=te.version);let Ln=ze.currentProgram;mt===!0&&(Ln=ps(te,X,J),Z&&te.isNodeMaterial&&Z.onUpdateProgram(te,Ln,ze));let Dn=!1,gt=!1,ki=!1;const Ct=Ln.getUniforms(),Vt=ze.uniforms;if(Le.useProgram(Ln.program)&&(Dn=!0,gt=!0,ki=!0),te.id!==re&&(re=te.id,gt=!0),ze.needsLights){const Nt=po(D.state.lightProbeGridArray,J);ze.lightProbeGrid!==Nt&&(ze.lightProbeGrid=Nt,gt=!0)}if(Dn||k!==b){Le.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ct.setValue(H,"projectionMatrix",b.projectionMatrix),Ct.setValue(H,"viewMatrix",b.matrixWorldInverse);const li=Ct.map.cameraPosition;li!==void 0&&li.setValue(H,Dt.setFromMatrixPosition(b.matrixWorld)),Rt.logarithmicDepthBuffer&&Ct.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ct.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),k!==b&&(k=b,gt=!0,ki=!0)}if(ze.needsLights&&(pn.state.directionalShadowMap.length>0&&Ct.setValue(H,"directionalShadowMap",pn.state.directionalShadowMap,M),pn.state.spotShadowMap.length>0&&Ct.setValue(H,"spotShadowMap",pn.state.spotShadowMap,M),pn.state.pointShadowMap.length>0&&Ct.setValue(H,"pointShadowMap",pn.state.pointShadowMap,M)),J.isSkinnedMesh){Ct.setOptional(H,J,"bindMatrix"),Ct.setOptional(H,J,"bindMatrixInverse");const Nt=J.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Ct.setValue(H,"boneTexture",Nt.boneTexture,M))}J.isBatchedMesh&&(Ct.setOptional(H,J,"batchingTexture"),Ct.setValue(H,"batchingTexture",J._matricesTexture,M),Ct.setOptional(H,J,"batchingIdTexture"),Ct.setValue(H,"batchingIdTexture",J._indirectTexture,M),Ct.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&Ct.setValue(H,"batchingColorTexture",J._colorsTexture,M));const oi=ae.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&nt.update(J,ae,Ln),(gt||ze.receiveShadow!==J.receiveShadow)&&(ze.receiveShadow=J.receiveShadow,Ct.setValue(H,"receiveShadow",J.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&X.environment!==null&&(Vt.envMapIntensity.value=X.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=Zw()),gt){if(Ct.setValue(H,"toneMappingExposure",Y.toneMappingExposure),ze.needsLights&&cc(Vt,ki),Re&&te.fog===!0&&ue.refreshFogUniforms(Vt,Re),ue.refreshMaterialUniforms(Vt,te,Ie,He,D.state.transmissionRenderTarget[b.id]),ze.needsLights&&ze.lightProbeGrid){const Nt=ze.lightProbeGrid;Vt.probesSH.value=Nt.texture,Vt.probesMin.value.copy(Nt.boundingBox.min),Vt.probesMax.value.copy(Nt.boundingBox.max),Vt.probesResolution.value.copy(Nt.resolution)}Yl.upload(H,fa(ze),Vt,M)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Yl.upload(H,fa(ze),Vt,M),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ct.setValue(H,"center",J.center),Ct.setValue(H,"modelViewMatrix",J.modelViewMatrix),Ct.setValue(H,"normalMatrix",J.normalMatrix),Ct.setValue(H,"modelMatrix",J.matrixWorld),te.uniformsGroups!==void 0){const Nt=te.uniformsGroups;for(let li=0,Mi=Nt.length;li<Mi;li++){const Br=Nt[li];fe.update(Br,Ln),fe.bind(Br,Ln)}}return Ln}function cc(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function uc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,X,ae){const te=P.get(b);te.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),P.get(b.texture).__webglTexture=X,P.get(b.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ae,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){const ae=P.get(b);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0};const qt=H.createFramebuffer();this.setRenderTarget=function(b,X=0,ae=0){j=b,ce=X,de=ae;let te=null,J=!1,Re=!1;if(b){const be=P.get(b);if(be.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(H.FRAMEBUFFER,be.__webglFramebuffer),q.copy(b.viewport),Q.copy(b.scissor),se=b.scissorTest,Le.viewport(q),Le.scissor(Q),Le.setScissorTest(se),re=-1;return}else if(be.__webglFramebuffer===void 0)M.setupRenderTarget(b);else if(be.__hasExternalTextures)M.rebindTextures(b,P.get(b.texture).__webglTexture,P.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ot=b.depthTexture;if(be.__boundDepthTexture!==ot){if(ot!==null&&P.has(ot)&&(b.width!==ot.image.width||b.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(b)}}const qe=b.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Re=!0);const Ze=P.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?te=Ze[X][ae]:te=Ze[X],J=!0):b.samples>0&&M.useMultisampledRTT(b)===!1?te=P.get(b).__webglMultisampledFramebuffer:Array.isArray(Ze)?te=Ze[ae]:te=Ze,q.copy(b.viewport),Q.copy(b.scissor),se=b.scissorTest}else q.copy(me).multiplyScalar(Ie).floor(),Q.copy(Ue).multiplyScalar(Ie).floor(),se=Qe;if(ae!==0&&(te=qt),Le.bindFramebuffer(H.FRAMEBUFFER,te)&&Le.drawBuffers(b,te),Le.viewport(q),Le.scissor(Q),Le.setScissorTest(se),J){const be=P.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,be.__webglTexture,ae)}else if(Re){const be=X;for(let qe=0;qe<b.textures.length;qe++){const Ze=P.get(b.textures[qe]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+qe,Ze.__webglTexture,ae,be)}}else if(b!==null&&ae!==0){const be=P.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,be.__webglTexture,ae)}re=-1},this.readRenderTargetPixels=function(b,X,ae,te,J,Re,Ge,be=0){if(!(b&&b.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=P.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe){Le.bindFramebuffer(H.FRAMEBUFFER,qe);try{const Ze=b.textures[be],ot=Ze.format,lt=Ze.type;if(b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+be),!Rt.textureFormatReadable(ot)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(lt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-te&&ae>=0&&ae<=b.height-J&&H.readPixels(X,ae,te,J,G.convert(ot),G.convert(lt),Re)}finally{const Ze=j!==null?P.get(j).__webglFramebuffer:null;Le.bindFramebuffer(H.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(b,X,ae,te,J,Re,Ge,be=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=P.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe)if(X>=0&&X<=b.width-te&&ae>=0&&ae<=b.height-J){Le.bindFramebuffer(H.FRAMEBUFFER,qe);const Ze=b.textures[be],ot=Ze.format,lt=Ze.type;if(b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+be),!Rt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,$e),H.bufferData(H.PIXEL_PACK_BUFFER,Re.byteLength,H.STREAM_READ),H.readPixels(X,ae,te,J,G.convert(ot),G.convert(lt),0);const St=j!==null?P.get(j).__webglFramebuffer:null;Le.bindFramebuffer(H.FRAMEBUFFER,St);const kt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await mS(H,kt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,$e),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Re),H.deleteBuffer($e),H.deleteSync(kt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,ae=0){const te=Math.pow(2,-ae),J=Math.floor(b.image.width*te),Re=Math.floor(b.image.height*te),Ge=X!==null?X.x:0,be=X!==null?X.y:0;M.setTexture2D(b,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,Ge,be,J,Re),Le.unbindTexture()};const dc=H.createFramebuffer(),pa=H.createFramebuffer();this.copyTextureToTexture=function(b,X,ae=null,te=null,J=0,Re=0){let Ge,be,qe,Ze,ot,lt,$e,St,kt;const Wt=b.isCompressedTexture?b.mipmaps[Re]:b.image;if(ae!==null)Ge=ae.max.x-ae.min.x,be=ae.max.y-ae.min.y,qe=ae.isBox3?ae.max.z-ae.min.z:1,Ze=ae.min.x,ot=ae.min.y,lt=ae.isBox3?ae.min.z:0;else{const Vt=Math.pow(2,-J);Ge=Math.floor(Wt.width*Vt),be=Math.floor(Wt.height*Vt),b.isDataArrayTexture?qe=Wt.depth:b.isData3DTexture?qe=Math.floor(Wt.depth*Vt):qe=1,Ze=0,ot=0,lt=0}te!==null?($e=te.x,St=te.y,kt=te.z):($e=0,St=0,kt=0);const Pt=G.convert(X.format),tn=G.convert(X.type);let ze;X.isData3DTexture?(M.setTexture3D(X,0),ze=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(M.setTexture2DArray(X,0),ze=H.TEXTURE_2D_ARRAY):(M.setTexture2D(X,0),ze=H.TEXTURE_2D),Le.activeTexture(H.TEXTURE0),Le.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),Le.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),Le.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const pn=Le.getParameter(H.UNPACK_ROW_LENGTH),mt=Le.getParameter(H.UNPACK_IMAGE_HEIGHT),Ln=Le.getParameter(H.UNPACK_SKIP_PIXELS),Dn=Le.getParameter(H.UNPACK_SKIP_ROWS),gt=Le.getParameter(H.UNPACK_SKIP_IMAGES);Le.pixelStorei(H.UNPACK_ROW_LENGTH,Wt.width),Le.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Wt.height),Le.pixelStorei(H.UNPACK_SKIP_PIXELS,Ze),Le.pixelStorei(H.UNPACK_SKIP_ROWS,ot),Le.pixelStorei(H.UNPACK_SKIP_IMAGES,lt);const ki=b.isDataArrayTexture||b.isData3DTexture,Ct=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const Vt=P.get(b),oi=P.get(X),Nt=P.get(Vt.__renderTarget),li=P.get(oi.__renderTarget);Le.bindFramebuffer(H.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let Mi=0;Mi<qe;Mi++)ki&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,P.get(b).__webglTexture,J,lt+Mi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,P.get(X).__webglTexture,Re,kt+Mi)),H.blitFramebuffer(Ze,ot,Ge,be,$e,St,Ge,be,H.DEPTH_BUFFER_BIT,H.NEAREST);Le.bindFramebuffer(H.READ_FRAMEBUFFER,null),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||b.isRenderTargetTexture||P.has(b)){const Vt=P.get(b),oi=P.get(X);Le.bindFramebuffer(H.READ_FRAMEBUFFER,dc),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,pa);for(let Nt=0;Nt<qe;Nt++)ki?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.__webglTexture,J,lt+Nt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Vt.__webglTexture,J),Ct?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,oi.__webglTexture,Re,kt+Nt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,oi.__webglTexture,Re),J!==0?H.blitFramebuffer(Ze,ot,Ge,be,$e,St,Ge,be,H.COLOR_BUFFER_BIT,H.NEAREST):Ct?H.copyTexSubImage3D(ze,Re,$e,St,kt+Nt,Ze,ot,Ge,be):H.copyTexSubImage2D(ze,Re,$e,St,Ze,ot,Ge,be);Le.bindFramebuffer(H.READ_FRAMEBUFFER,null),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ct?b.isDataTexture||b.isData3DTexture?H.texSubImage3D(ze,Re,$e,St,kt,Ge,be,qe,Pt,tn,Wt.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(ze,Re,$e,St,kt,Ge,be,qe,Pt,Wt.data):H.texSubImage3D(ze,Re,$e,St,kt,Ge,be,qe,Pt,tn,Wt):b.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Re,$e,St,Ge,be,Pt,tn,Wt.data):b.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Re,$e,St,Wt.width,Wt.height,Pt,Wt.data):H.texSubImage2D(H.TEXTURE_2D,Re,$e,St,Ge,be,Pt,tn,Wt);Le.pixelStorei(H.UNPACK_ROW_LENGTH,pn),Le.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt),Le.pixelStorei(H.UNPACK_SKIP_PIXELS,Ln),Le.pixelStorei(H.UNPACK_SKIP_ROWS,Dn),Le.pixelStorei(H.UNPACK_SKIP_IMAGES,gt),Re===0&&X.generateMipmaps&&H.generateMipmap(ze),Le.unbindTexture()},this.initRenderTarget=function(b){P.get(b).__webglFramebuffer===void 0&&M.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?M.setTextureCube(b,0):b.isData3DTexture?M.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?M.setTexture2DArray(b,0):M.setTexture2D(b,0),Le.unbindTexture()},this.resetState=function(){ce=0,de=0,j=null,Le.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const Jw=()=>{const r=Ne.useRef(null);return Ne.useEffect(()=>{const e=r.current;if(!e)return;const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=window.innerWidth<768,o=new NS;o.fog=new Hf(16185599,9,18);const l=new $n(50,e.clientWidth/e.clientHeight,.1,1e3);l.position.set(0,.3,9.5);const u=new Qw({antialias:!0,alpha:!0});u.setSize(e.clientWidth,e.clientHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,t?1.2:1.8)),u.setClearColor(0,0),e.appendChild(u.domElement);const f=new os;o.add(f);const h=t?48:s?90:150,p=new Float32Array(h*3);for(let k=0;k<h;k++)p[k*3]=(Math.random()-.5)*18,p[k*3+1]=(Math.random()-.5)*10,p[k*3+2]=-1.5-Math.random()*8;const _=new Zn;_.setAttribute("position",new Si(p,3));const v=new y0({color:9227257,size:t?.045:.065,transparent:!0,opacity:.72,sizeAttenuation:!0}),g=new VS(_,v);f.add(g);const y=new JS(16777215,1.25);o.add(y);const T=new fg(16773562,2.2,22,2);T.position.set(0,0,4),o.add(T);const R=new fg(8246268,1.6,22,2);R.position.set(-5,-2,4),o.add(R);const x=new QS(6514417,.9);x.position.set(5,4,6),o.add(x);const S=new Zs(.9,48,48),C=new og({color:16773810,emissive:16096779,emissiveIntensity:.55,shininess:80}),L=new Vn(S,C);f.add(L);const N=new Zs(1.38,40,40),V=new io({color:16708551,transparent:!0,opacity:.18}),D=new Vn(N,V);f.add(D);const z=[];[1.9,2.85,3.75,4.6].forEach((k,q)=>{const Q=new Vn(new jf(k,.01,8,120),new io({color:q%2===0?13095678:12248829,transparent:!0,opacity:.42}));Q.rotation.x=Math.PI/2.25,Q.rotation.z=q*.24,f.add(Q),z.push(Q)});const A=new os;f.add(A);const U=[{radius:1.9,size:.22,color:6514417,speed:.48,offset:.2,y:.08},{radius:2.85,size:.32,color:959977,speed:.3,offset:1.4,y:-.1},{radius:3.75,size:.26,color:16096779,speed:.2,offset:2.2,y:.15},{radius:4.6,size:.36,color:15485081,speed:.14,offset:3.4,y:-.22}].map(k=>{const q=new os;A.add(q);const Q=new Vn(new Zs(k.size,32,32),new og({color:k.color,emissive:k.color,emissiveIntensity:.16,shininess:70}));Q.position.set(k.radius,k.y,0),q.add(Q);const se=new Vn(new Zs(k.size*1.6,24,24),new io({color:k.color,transparent:!0,opacity:.08}));return se.position.copy(Q.position),q.add(se),{...k,pivot:q,planet:Q,halo:se}});let Y=0,O=0;const Z=k=>{t||(Y=(k.clientX/window.innerWidth-.5)*.65,O=(k.clientY/window.innerHeight-.5)*.45)};t||window.addEventListener("mousemove",Z);const ce=()=>{e&&(l.aspect=e.clientWidth/e.clientHeight,l.updateProjectionMatrix(),u.setSize(e.clientWidth,e.clientHeight))};window.addEventListener("resize",ce);let de;const j=new ny,re=()=>{de=requestAnimationFrame(re);const k=j.getElapsedTime();L.rotation.y=k*.25,L.rotation.x=Math.sin(k*.4)*.06;const q=1+Math.sin(k*1.4)*.04;D.scale.setScalar(q),f.rotation.z=Math.sin(k*.16)*.05,f.rotation.x=t?.08:O*.08,z.forEach((Q,se)=>{Q.rotation.z+=(se%2===0?1:-1)*.0012}),U.forEach((Q,se)=>{const F=k*Q.speed+Q.offset;Q.pivot.rotation.y=F,Q.planet.position.y=Q.y+Math.sin(k*1.3+se)*.08,Q.planet.rotation.y+=.01,Q.halo.position.copy(Q.planet.position)}),g.rotation.z=k*.02,l.position.x+=((t?0:Y*1.25)-l.position.x)*.03,l.position.y+=((t?.3:.35-O*.8)-l.position.y)*.03,l.lookAt(o.position),u.render(o,l)};return re(),()=>{cancelAnimationFrame(de),t||window.removeEventListener("mousemove",Z),window.removeEventListener("resize",ce),_.dispose(),v.dispose(),S.dispose(),C.dispose(),N.dispose(),V.dispose(),z.forEach(k=>{k.geometry.dispose(),k.material.dispose()}),U.forEach(k=>{k.planet.geometry.dispose(),k.planet.material.dispose(),k.halo.geometry.dispose(),k.halo.material.dispose()}),u.dispose(),e.contains(u.domElement)&&e.removeChild(u.domElement)}},[]),E.jsx("div",{ref:r,className:"absolute inset-0 w-full h-full",style:{pointerEvents:"none"}})},eT="https://github.com/babyvibe/Deplao-releases",tT=[{value:"10+",label:"module",note:"chat · crm · ai"},{value:"50+",label:"workflow mẫu",note:"cài nhanh"},{value:"24/7",label:"automation",note:"chạy nền"}],zl=[{id:"shop-online",tab:"Shop online",audience:"Shop online / TMĐT",trigger:"Khách hỏi giá, hỏi tình trạng đơn hoặc cần báo phí ship",logic:"AI hiểu ý định → tra CRM / POS / vận chuyển theo hội thoại hiện tại",action:"Gửi báo giá, trạng thái đơn, ưu đãi và gắn nhãn để nuôi lead tiếp",outcome:"Chốt đơn nhanh hơn mà không cần nhảy qua nhiều phần mềm khác nhau.",steps:[{icon:"💬",label:"Khách nhắn Zalo",group:"Trigger"},{icon:"🤖",label:"AI hiểu nhu cầu",group:"AI"},{icon:"🛒",label:"Tra POS / vận chuyển",group:"Tích hợp"},{icon:"🏷️",label:"Gửi báo giá + gắn nhãn",group:"Action"}],icon:"🛒",badge:"Bán hàng",tone:"bg-blue-50 border-blue-200 text-blue-700"},{id:"sales",tab:"Sales",audience:"Sales / Telesales",trigger:"Lead chưa phản hồi 4 giờ",logic:"Workflow đọc trạng thái lead + kiểm tra lần tương tác cuối",action:"Tự follow-up, lưu log CRM, nhắc nhân viên phụ trách",outcome:"Giảm bỏ sót lead và giữ nhịp follow-up đồng đều cho toàn đội.",steps:[{icon:"⏳",label:"Lead im lặng 4 giờ",group:"Trigger"},{icon:"👥",label:"Đọc trạng thái CRM",group:"CRM"},{icon:"⚙️",label:"Workflow kiểm tra điều kiện",group:"Logic"},{icon:"📞",label:"Follow-up + nhắc sales",group:"Action"}],icon:"📞",badge:"Follow-up",tone:"bg-emerald-50 border-emerald-200 text-emerald-700"},{id:"education",tab:"Giáo dục",audience:"Trung tâm đào tạo / Giáo dục",trigger:"Đến lịch học, đổi lịch hoặc cần nhắc học viên / phụ huynh",logic:"Lọc theo lớp, khóa học, ngày học và người phụ trách từng nhóm",action:"Gửi nhắc lịch, thông báo thay đổi và chăm sóc học viên hàng loạt",outcome:"Giảm công việc thủ công cho giáo vụ và giữ liên lạc ổn định với phụ huynh.",steps:[{icon:"📅",label:"Đến lịch học",group:"Trigger"},{icon:"🧩",label:"Lọc theo lớp / khóa",group:"Logic"},{icon:"👨‍👩‍👧",label:"Tách học viên / phụ huynh",group:"CRM"},{icon:"📣",label:"Gửi nhắc lịch hàng loạt",group:"Action"}],icon:"🎓",badge:"Giáo dục",tone:"bg-amber-50 border-amber-200 text-amber-700"},{id:"spa-clinic",tab:"Spa / Clinic",audience:"Phòng khám / Spa / Làm đẹp",trigger:"Lịch hẹn ngày mai hoặc sinh nhật khách",logic:"Lọc danh sách theo ngày, gói dịch vụ và nhãn chăm sóc sau dịch vụ",action:"Gửi nhắc lịch, chúc mừng sinh nhật và ưu đãi kéo khách quay lại",outcome:"Tăng tỷ lệ khách quay lại và giữ trải nghiệm chăm sóc cá nhân hoá hơn.",steps:[{icon:"🎂",label:"Sinh nhật / lịch hẹn",group:"Trigger"},{icon:"🗂️",label:"Lọc gói dịch vụ",group:"Logic"},{icon:"💎",label:"Chọn ưu đãi phù hợp",group:"CRM"},{icon:"🏥",label:"Nhắc lịch + chăm sóc lại",group:"Action"}],icon:"🏥",badge:"CSKH",tone:"bg-violet-50 border-violet-200 text-violet-700"},{id:"fnb",tab:"F&B",audience:"F&B / Nhà hàng / Quán ăn",trigger:"Khách đặt bàn, đặt món hoặc đến ngày ưu đãi đặc biệt",logic:"Tra trạng thái đặt bàn, lịch sử mua và nhóm khách thân thiết",action:"Xác nhận đơn, gửi ưu đãi phù hợp và nhắc khách quay lại đúng dịp",outcome:"Giữ tương tác đều với khách quen và tự động hoá phần nhắc món/ưu đãi.",steps:[{icon:"🍽️",label:"Đặt bàn / đặt món",group:"Trigger"},{icon:"🧾",label:"Tra lịch sử mua",group:"CRM"},{icon:"🎯",label:"Chọn ưu đãi theo dịp",group:"Logic"},{icon:"📩",label:"Xác nhận + nhắc quay lại",group:"Action"}],icon:"🍜",badge:"F&B",tone:"bg-rose-50 border-rose-200 text-rose-700"},{id:"agency",tab:"Agency",audience:"Agency / Freelancer Marketing",trigger:"Lead mới vào nhiều tài khoản Zalo của từng client",logic:"Phân loại nguồn lead, gắn nhãn theo chiến dịch và tách từng client",action:"Tự nurture lead, báo cáo kết quả và giảm bỏ sót tin nhắn cho từng khách hàng",outcome:"Quản lý nhiều client trên cùng một workspace mà vẫn tách luồng rõ ràng.",steps:[{icon:"📥",label:"Lead mới vào nhiều page",group:"Trigger"},{icon:"🏷️",label:"Gắn nhãn theo client",group:"CRM"},{icon:"🪄",label:"Workflow nurture tự động",group:"Workflow"},{icon:"📊",label:"Báo cáo theo chiến dịch",group:"Analytics"}],icon:"📣",badge:"Agency",tone:"bg-cyan-50 border-cyan-200 text-cyan-700"}],nT=["Đa tài khoản Zalo","Inbox tập trung","CRM khách hàng","AI Assistant","Workflow tự động","Tích hợp bán hàng","Nhân viên & workspace"],iT=()=>{const[r,e]=Ne.useState(zl[0].id),t=zl.find(s=>s.id===r)??zl[0];return E.jsxs("section",{id:"hero",className:"relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32",children:[E.jsx("div",{className:"pointer-events-none absolute inset-0 z-0 opacity-60",children:E.jsx(Jw,{})}),E.jsx("div",{className:"pointer-events-none absolute inset-0 z-[1]",style:{background:"radial-gradient(ellipse 80% 60% at 50% 0%, rgba(246,248,255,0.0) 0%, rgba(246,248,255,0.55) 60%, rgba(246,248,255,0.92) 100%)"}}),E.jsxs("div",{className:"mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 relative z-10",children:[E.jsxs("div",{className:"relative z-10 pt-0 sm:pt-2",children:[E.jsxs("div",{className:"orbit-badge mb-6 aos-element",children:[E.jsx("span",{className:"dot-pulse"}),"Workspace CSKH & Automation Zalo"]}),E.jsxs("h1",{className:"aos-element delay-1 mb-5 max-w-[12ch] text-4xl font-black leading-[0.98] tracking-tight text-slate-950 sm:max-w-[14ch] sm:text-5xl lg:text-7xl",children:["Quản lý Zalo chuyên nghiệp ",E.jsx("span",{className:"gradient-text",children:"Đa tài khoản, CRM, Workflow và  AI Assistant"})]}),E.jsx("p",{className:"aos-element delay-2 mb-7 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-md md:text-md",children:"Phần mềm giúp bạn phản hồi nhanh hơn, chuyển đổi cao hơn, tự động chăm sóc khách hàng, AI xử lý 24/7, giảm tải cho đội ngũ. Vận hành gọn nhẹ, không bỏ sót khách hàng."}),E.jsx("div",{className:"aos-element delay-2 mb-8 flex flex-wrap gap-2.5 sm:gap-3",children:nT.map(s=>E.jsx("span",{className:"hero-pill",children:s},s))}),E.jsxs("div",{className:"hero-cta-row aos-element delay-3 mb-8 sm:mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",children:[E.jsx(Qg,{label:"Tải xuống",variant:"primary",align:"left",className:"hero-cta-button px-6 py-4 text-base sm:px-8",wrapperClassName:"hero-download-trigger"}),E.jsxs("a",{href:eT,target:"_blank",rel:"noreferrer",className:"btn-secondary hero-cta-button hero-github-button flex items-center gap-2 text-base no-underline",children:[E.jsx("svg",{className:"h-5 w-5",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:E.jsx("path",{d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.344-3.369-1.344-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.389-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.922.678 1.858 0 1.341-.012 2.422-.012 2.751 0 .268.18.579.688.481A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z"})}),E.jsx("span",{children:"GitHub"})]}),E.jsxs("button",{onClick:()=>{var s;return(s=document.getElementById("features"))==null?void 0:s.scrollIntoView({behavior:"smooth"})},className:"btn-secondary hero-cta-button flex cursor-pointer items-center gap-2 bg-transparent text-base",children:[E.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Tính năng"]})]}),E.jsx("div",{className:"aos-element delay-4 grid gap-3 sm:grid-cols-3 md:gap-4",children:tT.map(s=>E.jsxs("div",{className:"metric-tile",children:[E.jsx("div",{className:"text-3xl font-black text-slate-950",children:s.value}),E.jsx("div",{className:"mt-1 text-sm font-semibold text-slate-800",children:s.label}),E.jsx("div",{className:"mt-1 text-xs text-slate-500",children:s.note})]},s.label))})]}),E.jsx("div",{className:"relative min-w-0 aos-element delay-3 lg:pl-20",children:E.jsxs("div",{className:"command-panel rounded-[1.6rem] p-3.5 sm:rounded-[2rem] sm:p-4 md:p-5",children:[E.jsx("div",{className:"mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4",children:E.jsxs("div",{children:[E.jsxs("div",{className:"mini-kicker mb-2",children:[E.jsx("span",{className:"signal-dot"}),"Workflow live preview"]}),E.jsx("h3",{className:"max-w-[24rem] text-lg font-bold text-slate-950 sm:text-xl",children:"Nhiều use case vận hành thực tế trên cùng một workspace"})]})}),E.jsxs("div",{className:"workflow-preview",children:[E.jsx("div",{className:"workflow-tabs relative z-10 mb-4",children:zl.map(s=>E.jsxs("button",{type:"button",onClick:()=>e(s.id),className:`workflow-tab ${t.id===s.id?"is-active":""}`,children:[E.jsx("span",{className:"workflow-tab-icon",children:s.icon}),E.jsx("span",{children:s.tab})]},s.id))}),E.jsxs("div",{className:"workflow-tab-panel workflow-live-spotlight workflow-node workflow-node-dark",children:[E.jsxs("div",{className:"mb-4 flex flex-wrap items-start justify-between gap-3",children:[E.jsxs("div",{children:[E.jsx("div",{className:"inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80",children:t.badge}),E.jsx("div",{className:"mt-3 text-lg font-black text-white md:text-xl",children:t.audience})]}),E.jsx("div",{className:"workflow-live-orb",children:E.jsx("span",{children:t.icon})})]}),E.jsx("div",{className:"workflow-step-flow mb-4",children:t.steps.map((s,o)=>E.jsxs("div",{className:"workflow-step-flow-item",children:[E.jsxs("div",{className:"workflow-step-card",children:[E.jsx("div",{className:"workflow-step-icon",children:s.icon}),E.jsxs("div",{className:"workflow-step-copy",children:[E.jsx("div",{className:"workflow-step-group",children:s.group}),E.jsx("div",{className:"workflow-step-label",children:s.label})]})]}),o<t.steps.length-1&&E.jsx("div",{className:"workflow-step-arrow",children:"→"})]},s.label))}),E.jsxs("div",{className:"grid gap-3 md:grid-cols-[0.9fr_1.05fr_1.2fr]",children:[E.jsxs("div",{className:"feature-proof-dark",children:[E.jsx("div",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-white/60",children:"Trigger"}),E.jsx("div",{className:"mt-2 text-sm leading-relaxed text-white/88",children:t.trigger})]}),E.jsxs("div",{className:"feature-proof-dark",children:[E.jsx("div",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-white/60",children:"Logic"}),E.jsx("div",{className:"mt-2 text-sm leading-relaxed text-white/88",children:t.logic})]}),E.jsxs("div",{className:"feature-proof-dark",children:[E.jsx("div",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-white/60",children:"Action"}),E.jsx("div",{className:"mt-2 text-sm leading-relaxed text-white/88",children:t.action})]})]}),E.jsxs("div",{className:"workflow-live-result mt-4",children:[E.jsx("div",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-white/60",children:"Outcome"}),E.jsx("div",{className:"mt-2 text-sm leading-relaxed text-white/88",children:t.outcome})]})]},t.id)]})]})})]})]})},rT=[{icon:"👤",color:"bg-blue-50 text-blue-600",title:"Đa tài khoản Zalo",desc:"Đăng nhập không giới hạn tài khoản qua QR Code. Gộp inbox từ nhiều tài khoản vào một giao diện duy nhất.",tags:["Đa tài khoản","Unified inbox","QR login"]},{icon:"💬",color:"bg-emerald-50 text-emerald-600",title:"Chat đầy đủ tính năng",desc:"Gửi tin nhắn, ảnh, video, file. Quick messages, ghim tin nhắn không giới hạn, reply, tag thành viên.",tags:["Quick reply","Media","Stickers"]},{icon:"👥",color:"bg-purple-50 text-purple-600",title:"CRM & Campaign",desc:"Quản lý liên hệ, nhãn, ghi chú nội bộ. Tạo campaign gửi tin, kết bạn, mời vào nhóm với tiến độ real-time.",tags:["Labels","Campaign","Contact sync"]},{icon:"⚙️",color:"bg-orange-50 text-orange-600",title:"Workflow tự động hóa",desc:"Kéo-thả Trigger → Node → Action, hoặc dùng AI tạo workflow từ prompt. Chạy nền 24/7 không cần code.",tags:["No-code","AI builder","Cron trigger"]},{icon:"🤖",color:"bg-pink-50 text-pink-600",title:"AI Assistant",desc:"Gợi ý câu trả lời, phân loại tin nhắn, trả lời khách hàng 24/7. Tích hợp trực tiếp trong hội thoại.",tags:["OpenAI","Auto-reply","Suggestion"]},{icon:"🔗",color:"bg-cyan-50 text-cyan-600",title:"Tích hợp ngoài",desc:"POS, vận chuyển, Google Sheets, Telegram, Discord, Email, HTTP Request. Kết hợp trong workflow.",tags:["POS","GHN/GHTK","Webhooks"]},{icon:"📈",color:"bg-indigo-50 text-indigo-600",title:"Báo cáo & Phân tích",desc:"Theo dõi tin nhắn, liên hệ, nhãn, nhân viên, chiến dịch, workflow và AI usage theo thời gian.",tags:["Analytics","Charts","Export"]},{icon:"🧑‍💼",color:"bg-amber-50 text-amber-600",title:"Boss ↔ Nhân viên",desc:"Nhiều thiết bị cùng quản lý, phân quyền từng module, relay qua LAN hoặc tunnel. Theo dõi hiệu suất.",tags:["Multi-device","Permissions","ERP"]}];function sT(){return E.jsx("section",{id:"features",className:"py-20 px-5 orbit-shell",children:E.jsxs("div",{className:"mx-auto max-w-6xl",children:[E.jsxs("div",{className:"text-center mb-14 aos-element",children:[E.jsxs("div",{className:"mini-kicker mb-3",children:[E.jsx("span",{className:"signal-dot"}),"Tính năng"]}),E.jsxs("h2",{className:"text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3",children:["Mọi thứ bạn cần trong ",E.jsx("span",{className:"gradient-text",children:"một app"})]}),E.jsx("p",{className:"text-slate-500 max-w-xl mx-auto",children:"Từ chat đơn giản đến automation phức tạp — Deplao xử lý hết, không cần nhiều công cụ rời rạc."})]}),E.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:rT.map((r,e)=>E.jsxs("div",{className:`aos-element delay-${Math.min(e+1,6)} glass glass-hover rounded-2xl p-5 flex flex-col gap-3`,children:[E.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${r.color}`,children:r.icon}),E.jsxs("div",{children:[E.jsx("h3",{className:"font-bold text-slate-900 mb-1",children:r.title}),E.jsx("p",{className:"text-sm text-slate-500 leading-relaxed",children:r.desc})]}),E.jsx("div",{className:"flex flex-wrap gap-1.5 mt-auto",children:r.tags.map(t=>E.jsx("span",{className:"planet-chip text-[11px]",children:t},t))})]},r.title))})]})})}const kg=[{icon:"⚡",label:"TRIGGER",color:"bg-blue-600",examples:["Tin nhắn mới","Nhãn thay đổi","Cron schedule","Webhook"]},{icon:"🧠",label:"LOGIC / AI",color:"bg-violet-600",examples:["Điều kiện","AI phân loại","Biến / bộ nhớ","Vòng lặp"]},{icon:"🎯",label:"ACTION",color:"bg-emerald-600",examples:["Gửi tin nhắn","Cập nhật CRM","Google Sheets","HTTP Request"]}],aT=[{emoji:"🛒",title:"Chốt đơn tự động",desc:"Nhận 'cho xin giá' → AI gợi ý → gửi báo giá → theo dõi phản hồi"},{emoji:"📅",title:"Nhắc lịch hẹn",desc:"Cron mỗi sáng → lọc lịch hôm nay → nhắn từng khách"},{emoji:"🏷️",title:"Phân loại khách",desc:"Tin nhắn mới → AI phân tích → gắn nhãn → chuyển nhân viên phù hợp"},{emoji:"💳",title:"Xác nhận thanh toán",desc:"Webhook nhận tiền → tạo đơn POS → nhắn xác nhận → báo nội bộ"}];function oT(){return E.jsx("section",{id:"workflow",className:"py-20 px-5",children:E.jsxs("div",{className:"mx-auto max-w-6xl",children:[E.jsxs("div",{className:"text-center mb-14 aos-element",children:[E.jsxs("div",{className:"mini-kicker mb-3",children:[E.jsx("span",{className:"signal-dot"}),"Tự động hóa"]}),E.jsxs("h2",{className:"text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3",children:["Workflow ",E.jsx("span",{className:"gradient-text",children:"kéo-thả"}),", chạy 24/7"]}),E.jsx("p",{className:"text-slate-500 max-w-xl mx-auto",children:"Không cần code. Dùng AI tạo flow từ một câu mô tả, hoặc kéo-thả node trực tiếp."})]}),E.jsxs("div",{className:"aos-element workflow-preview mb-10",children:[E.jsx("div",{className:"workflow-tabs mb-6",children:kg.map(r=>E.jsxs("div",{className:"workflow-tab is-active",children:[E.jsx("div",{className:"workflow-tab-icon",children:r.icon}),r.label]},r.label))}),E.jsx("div",{className:"workflow-stack",children:kg.map((r,e)=>E.jsxs("div",{className:"workflow-stack-item",children:[e>0&&E.jsx("div",{className:"workflow-connector workflow-connector-live mx-auto"}),E.jsx("div",{className:`workflow-node ${e===1?"workflow-node-dark":""}`,children:E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("div",{className:`w-9 h-9 rounded-xl flex items-center justify-center text-white text-base ${r.color}`,children:r.icon}),E.jsxs("div",{children:[E.jsx("p",{className:`text-xs font-black tracking-widest uppercase ${e===1?"text-white/60":"text-slate-400"}`,children:r.label}),E.jsx("p",{className:`text-sm font-bold ${e===1?"text-white":"text-slate-800"}`,children:r.examples[0]})]}),E.jsx("div",{className:"ml-auto flex flex-wrap gap-1.5",children:r.examples.slice(1).map(t=>E.jsx("span",{className:`planet-chip text-[11px] ${e===1?"bg-white/10 border-white/10 text-white/80":""}`,children:t},t))})]})})]},r.label))})]}),E.jsx("div",{className:"workflow-usecase-grid",children:aT.map((r,e)=>E.jsx("div",{className:`aos-element delay-${e+1} workflow-mini-card`,children:E.jsxs("div",{className:"flex items-start gap-3",children:[E.jsx("span",{className:"text-2xl",children:r.emoji}),E.jsxs("div",{children:[E.jsx("p",{className:"font-bold text-slate-900 text-sm mb-1",children:r.title}),E.jsx("p",{className:"text-xs text-slate-500 leading-relaxed",children:r.desc})]})]})},r.title))})]})})}const lT=[{category:"🛒 POS",items:["KiotViet","Haravan","Sapo","Nhanh.vn","Pancake POS"]},{category:"🚚 Vận chuyển",items:["GHN","GHTK"]},{category:"💳 Thanh toán",items:["Casso","SePay","Webhook"]},{category:"📊 Data",items:["Google Sheets","Google Calendar","Notion"]},{category:"📣 Thông báo",items:["Telegram Bot","Discord","Email (SMTP)"]},{category:"🤖 AI",items:["OpenAI GPT","Custom Prompt","AI Node"]},{category:"🌐 HTTP",items:["HTTP Request","Webhook In","REST API"]},{category:"📘 Facebook",items:["FB Graph API","FB Messenger"]}];function cT(){return E.jsx("section",{id:"integrations",className:"py-20 px-5 orbit-shell",children:E.jsxs("div",{className:"mx-auto max-w-6xl",children:[E.jsxs("div",{className:"text-center mb-14 aos-element",children:[E.jsxs("div",{className:"mini-kicker mb-3",children:[E.jsx("span",{className:"signal-dot"}),"Tích hợp"]}),E.jsxs("h2",{className:"text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3",children:["Kết nối với ",E.jsx("span",{className:"gradient-text",children:"mọi công cụ"})]}),E.jsx("p",{className:"text-slate-500 max-w-xl mx-auto",children:"POS, vận chuyển, thanh toán, AI, Google Sheets và hàng chục platform khác — dùng trực tiếp trong workflow hoặc khi chat."})]}),E.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:lT.map((r,e)=>E.jsxs("div",{className:`aos-element delay-${Math.min(e+1,6)} glass glass-hover rounded-2xl p-4`,children:[E.jsx("p",{className:"font-bold text-slate-800 mb-3 text-sm",children:r.category}),E.jsx("div",{className:"flex flex-wrap gap-1.5",children:r.items.map(t=>E.jsx("span",{className:"planet-chip text-[11px]",children:t},t))})]},r.category))})]})})}const uT=[{num:"01",icon:"⬇️",title:"Tải & cài đặt",desc:"Tải file .exe (Windows) hoặc .dmg (macOS). Cài đặt và mở app trong vài phút."},{num:"02",icon:"📱",title:"Đăng nhập Zalo",desc:"Quét QR Code bằng điện thoại. App kết nối ngay, không cần mật khẩu."},{num:"03",icon:"💬",title:"Quản lý hội thoại",desc:"Xem inbox, trả lời khách, gắn nhãn và ghi chú nội bộ ngay trong app."},{num:"04",icon:"⚙️",title:"Tạo Workflow",desc:"Kéo-thả hoặc mô tả bằng tiếng Việt để AI tạo workflow tự động cho bạn."}];function dT(){return E.jsx("section",{id:"how-it-works",className:"py-20 px-5",children:E.jsxs("div",{className:"mx-auto max-w-5xl",children:[E.jsxs("div",{className:"text-center mb-14 aos-element",children:[E.jsxs("div",{className:"mini-kicker mb-3",children:[E.jsx("span",{className:"signal-dot"}),"Bắt đầu"]}),E.jsxs("h2",{className:"text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3",children:["Chạy ngay trong ",E.jsx("span",{className:"gradient-text",children:"5 phút"})]}),E.jsx("p",{className:"text-slate-500 max-w-xl mx-auto",children:"Không cần server, không cần tài khoản cloud. Cài và chạy thôi."})]}),E.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:uT.map((r,e)=>E.jsx("div",{className:`aos-element delay-${e+1} relative`,children:E.jsxs("div",{className:"glass glass-hover rounded-2xl p-5 h-full flex flex-col gap-3",children:[E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsx("span",{className:"text-3xl",children:r.icon}),E.jsx("span",{className:"text-4xl font-black text-slate-100",children:r.num})]}),E.jsx("h3",{className:"font-bold text-slate-900",children:r.title}),E.jsx("p",{className:"text-sm text-slate-500 leading-relaxed",children:r.desc})]})},r.num))})]})})}function fT(){return E.jsx("section",{id:"download",className:"py-24 px-5",children:E.jsx("div",{className:"mx-auto max-w-3xl text-center",children:E.jsxs("div",{className:"editorial-band rounded-3xl p-10 md:p-14 stellar-panel",children:[E.jsxs("div",{className:"mini-kicker mb-4 text-white/70",children:[E.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 inline-block"}),"Sẵn sàng"]}),E.jsxs("h2",{className:"text-3xl md:text-4xl font-black text-white tracking-tight mb-4",children:["Tải Deplao miễn phí",E.jsx("br",{}),"ngay hôm nay"]}),E.jsx("p",{className:"text-white/70 mb-8 max-w-lg mx-auto",children:"Mã nguồn mở. Dữ liệu lưu cục bộ 100%. Không subscription, không yêu cầu tài khoản cloud."}),E.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[E.jsxs("a",{href:Pf,className:"flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-white/90 transition-colors no-underline",children:[E.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[E.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),E.jsx("path",{d:"M9 9l3 3 3-3M12 12V4"})]}),"🪟 Windows · v",ea]}),E.jsxs("a",{href:Nf,className:"flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-colors no-underline",children:[E.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor",children:[E.jsx("path",{d:"M18.7 12.4c0-2.9 2.3-4.3 2.4-4.4-1.3-1.9-3.3-2.1-4.1-2.2-1.7-.2-3.4 1-4.3 1-.9 0-2.3-1-3.8-1-1.9 0-3.7 1.1-4.7 2.9-2 3.5-.5 8.6 1.4 11.4 1 1.4 2.1 2.9 3.6 2.9 1.4-.1 2-.9 3.7-.9 1.7 0 2.2.9 3.7.9 1.6 0 2.6-1.4 3.6-2.8.7-1 1.3-2.1 1.5-3.3-3.3-1.3-3.1-5.4.0-5.5z"}),E.jsx("path",{d:"M15.6 4.2c.8-1 1.3-2.4 1.2-3.7-1.2.1-2.5.8-3.3 1.8-.7.9-1.3 2.2-1.1 3.5 1.3 0 2.5-.7 3.2-1.6z"})]}),"🍎 macOS (M1+) · v",ea]})]}),E.jsxs("div",{className:"mt-6 flex items-center justify-center gap-4 text-sm text-white/50",children:[E.jsx("a",{href:R_,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white/80 transition-colors no-underline",children:"Tất cả phiên bản →"}),E.jsx("span",{children:"·"}),E.jsxs("a",{href:Rd,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white/80 transition-colors no-underline flex items-center gap-1",children:[E.jsx("svg",{viewBox:"0 0 24 24",width:"13",height:"13",fill:"currentColor",children:E.jsx("path",{d:"M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.479 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.5 24 5.87 18.627.5 12 .5z"})}),"Source code"]})]})]})})})}function hT(){return E.jsxs("footer",{className:"border-t border-black/5 bg-white/60 backdrop-blur-xl",children:[E.jsxs("div",{className:"mx-auto max-w-6xl px-5 py-10 flex flex-col md:flex-row items-start justify-between gap-8",children:[E.jsxs("div",{className:"flex items-center gap-2.5",children:[E.jsx("img",{src:"/deplao-builder/icon.png",alt:"Deplao",className:"w-8 h-8 rounded-xl object-contain"}),E.jsxs("div",{children:[E.jsxs("p",{className:"font-extrabold text-slate-900",children:["Deplao ",E.jsxs("span",{className:"text-slate-400 font-normal text-sm",children:["v",ea]})]}),E.jsx("p",{className:"text-xs text-slate-400",children:"Open source · Local-first"})]})]}),E.jsxs("div",{className:"flex flex-wrap gap-8 text-sm text-slate-500",children:[E.jsxs("div",{className:"space-y-2",children:[E.jsx("p",{className:"font-semibold text-slate-700 text-xs uppercase tracking-widest mb-2",children:"Sản phẩm"}),E.jsx("a",{href:"#features",className:"block hover:text-slate-900 no-underline transition-colors",children:"Tính năng"}),E.jsx("a",{href:"#workflow",className:"block hover:text-slate-900 no-underline transition-colors",children:"Workflow"}),E.jsx("a",{href:"#integrations",className:"block hover:text-slate-900 no-underline transition-colors",children:"Tích hợp"}),E.jsx("a",{href:"#how-it-works",className:"block hover:text-slate-900 no-underline transition-colors",children:"Cách dùng"})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("p",{className:"font-semibold text-slate-700 text-xs uppercase tracking-widest mb-2",children:"Tải về"}),E.jsx("a",{href:"https://github.com/babyvibe/deplao-builder/releases/latest/download/Deplao-Setup-26.4.0.exe",className:"block hover:text-slate-900 no-underline transition-colors",children:"🪟 Windows"}),E.jsx("a",{href:"https://github.com/babyvibe/deplao-builder/releases/latest/download/Deplao-26.4.0-arm64.dmg",className:"block hover:text-slate-900 no-underline transition-colors",children:"🍎 macOS (M1+)"}),E.jsx("a",{href:"https://github.com/babyvibe/deplao-builder/releases",target:"_blank",rel:"noopener noreferrer",className:"block hover:text-slate-900 no-underline transition-colors",children:"Tất cả phiên bản"})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("p",{className:"font-semibold text-slate-700 text-xs uppercase tracking-widest mb-2",children:"Hỗ trợ"}),E.jsx("a",{href:Rd+"/issues",target:"_blank",rel:"noopener noreferrer",className:"block hover:text-slate-900 no-underline transition-colors",children:"Báo lỗi (GitHub)"}),E.jsx("a",{href:"https://t.me/deplao_support",target:"_blank",rel:"noopener noreferrer",className:"block hover:text-slate-900 no-underline transition-colors",children:"Telegram support"}),E.jsx(Gl,{to:"/terms",className:"block hover:text-slate-900 no-underline transition-colors",children:"Điều khoản"})]})]})]}),E.jsxs("div",{className:"border-t border-black/5 py-5 text-center text-xs text-slate-400",children:["© ",new Date().getFullYear()," Deplao. Open source under ISC License. ·"," ",E.jsx("a",{href:Rd,target:"_blank",rel:"noopener noreferrer",className:"hover:text-slate-600 no-underline",children:"GitHub"})]})]})}function pT(){return Ne.useEffect(()=>{const r=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&s.target.classList.add("visible")})},{threshold:.1}),e=document.querySelectorAll(".aos-element");return e.forEach(t=>{t.getBoundingClientRect().top<window.innerHeight&&t.classList.add("visible")}),e.forEach(t=>r.observe(t)),()=>r.disconnect()},[]),E.jsxs("div",{className:"landing-light relative overflow-hidden",children:[E.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top,rgba(29,78,216,0.08),transparent_62%)]"}),E.jsx("div",{className:"dashboard-stripe left-[6%] top-[8rem] h-28 w-60 rotate-[-12deg]"}),E.jsx("div",{className:"dashboard-stripe right-[8%] top-[22rem] h-24 w-72 rotate-[18deg]"}),E.jsx(I_,{}),E.jsxs("main",{className:"relative z-10",children:[E.jsx(iT,{}),E.jsx(sT,{}),E.jsx(oT,{}),E.jsx(cT,{}),E.jsx(dT,{}),E.jsx(fT,{})]}),E.jsx(hT,{})]})}function mT(){return E.jsxs("div",{className:"min-h-screen bg-[#060a18] text-white",children:[E.jsx("nav",{className:"border-b border-white/5 bg-[#060a18]/80 backdrop-blur-xl sticky top-0 z-50",children:E.jsxs("div",{className:"max-w-4xl mx-auto px-6 h-16 flex items-center justify-between",children:[E.jsxs(Gl,{to:"/",className:"flex items-center gap-2.5 no-underline group",children:[E.jsx("img",{src:"/deplao-builder/icon.png",alt:"Deplao",className:"w-8 h-8 rounded-lg object-contain group-hover:scale-105 transition-transform"}),E.jsx("span",{className:"font-bold text-lg text-white tracking-tight",children:"Deplao"})]}),E.jsx(Gl,{to:"/",className:"text-sm text-slate-400 hover:text-white transition-colors no-underline",children:"← Về trang chủ"})]})}),E.jsxs("main",{className:"max-w-4xl mx-auto px-6 py-16",children:[E.jsxs("div",{className:"text-center mb-12",children:[E.jsx("div",{className:"inline-block px-4 py-1.5 rounded-full text-sm font-medium text-blue-300 border border-blue-500/30 bg-blue-500/10 mb-4",children:"Chính sách & Điều khoản"}),E.jsx("h1",{className:"text-3xl md:text-4xl font-bold mb-3",children:"Điều khoản sử dụng & Chính sách bảo mật"}),E.jsx("p",{className:"text-slate-500 text-sm",children:"Có hiệu lực khi bạn sử dụng phần mềm"})]}),E.jsxs("div",{className:"space-y-8",children:[E.jsxs("section",{className:"glass rounded-2xl border border-white/5 p-6 md:p-8",children:[E.jsxs("h2",{className:"text-xl font-bold text-white mb-4 flex items-center gap-2",children:[E.jsx("span",{className:"text-blue-400",children:"1."})," Mục đích sử dụng hợp pháp"]}),E.jsxs("p",{className:"text-slate-400 text-sm leading-relaxed mb-4",children:["Deplao là phần mềm hỗ trợ quản lý giao tiếp trên nền tảng Zalo dành cho mục đích",E.jsx("strong",{className:"text-white",children:" kinh doanh hợp pháp"}),", chăm sóc khách hàng và tự động hoá quy trình làm việc. Phần mềm ",E.jsx("strong",{className:"text-amber-400",children:"không được thiết kế"})," và ",E.jsx("strong",{className:"text-amber-400",children:"không khuyến khích sử dụng"})," cho các hành vi:"]}),E.jsxs("ul",{className:"space-y-2 text-slate-400 text-sm",children:[E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-red-400 mt-0.5",children:"✗"}),"Gửi tin nhắn spam, quảng cáo không có sự đồng ý của người nhận"]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-red-400 mt-0.5",children:"✗"}),"Thu thập thông tin cá nhân trái phép"]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-red-400 mt-0.5",children:"✗"}),"Phát tán nội dung vi phạm pháp luật, nội dung khiêu dâm, bạo lực"]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-red-400 mt-0.5",children:"✗"}),"Lừa đảo, gian lận, hoặc bất kỳ hành vi vi phạm pháp luật Việt Nam nào"]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-red-400 mt-0.5",children:"✗"}),"Vi phạm Điều khoản dịch vụ của Zalo"]})]})]}),E.jsxs("section",{className:"glass rounded-2xl border border-white/5 p-6 md:p-8",children:[E.jsxs("h2",{className:"text-xl font-bold text-white mb-4 flex items-center gap-2",children:[E.jsx("span",{className:"text-blue-400",children:"2."})," Dữ liệu người dùng & Quyền riêng tư"]}),E.jsxs("ul",{className:"space-y-3 text-slate-400 text-sm",children:[E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-emerald-400 mt-0.5 flex-shrink-0",children:"🔒"}),E.jsxs("span",{children:[E.jsx("strong",{className:"text-white",children:"Dữ liệu lưu hoàn toàn cục bộ"})," trên máy tính của người dùng. Chúng tôi không thu thập, lưu trữ hoặc xử lý nội dung tin nhắn, danh bạ hay thông tin khách hàng của bạn trên bất kỳ server nào."]})]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-emerald-400 mt-0.5 flex-shrink-0",children:"🔒"}),E.jsxs("span",{children:[E.jsx("strong",{className:"text-white",children:"Không chia sẻ với bên thứ 3:"})," Deplao không tích hợp bất kỳ SDK thu thập dữ liệu, analytics hay quảng cáo của bên thứ 3."]})]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-emerald-400 mt-0.5 flex-shrink-0",children:"🔒"}),E.jsxs("span",{children:[E.jsx("strong",{className:"text-white",children:"Phiên Zalo:"})," Cookie phiên Zalo được mã hóa AES và lưu cục bộ, chỉ dùng để duy trì kết nối Zalo từ máy bạn."]})]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-emerald-400 mt-0.5 flex-shrink-0",children:"🔒"}),E.jsxs("span",{children:[E.jsx("strong",{className:"text-white",children:"Không lưu mật khẩu:"})," App đăng nhập qua QR Code, không bao giờ yêu cầu hoặc lưu mật khẩu Zalo."]})]})]})]}),E.jsxs("section",{className:"glass rounded-2xl border border-white/5 p-6 md:p-8",children:[E.jsxs("h2",{className:"text-xl font-bold text-white mb-4 flex items-center gap-2",children:[E.jsx("span",{className:"text-blue-400",children:"3."})," Bảo mật tài khoản & Dữ liệu"]}),E.jsx("p",{className:"text-slate-400 text-sm leading-relaxed mb-4",children:"Deplao được xây dựng theo kiến trúc toàn bộ dữ liệu được xử lý và lưu trữ ngay trên máy tính của bạn."}),E.jsxs("ul",{className:"space-y-2 text-slate-400 text-sm",children:[E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-blue-400 mt-0.5",children:"•"}),E.jsxs("span",{children:[E.jsx("strong",{className:"text-white",children:"Dữ liệu lưu cục bộ 100%:"})," Tin nhắn, danh bạ, CRM, cài đặt — tất cả được lưu trong cơ sở dữ liệu ngay trên máy bạn"]})]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-blue-400 mt-0.5",children:"•"}),E.jsxs("span",{children:[E.jsx("strong",{className:"text-white",children:"Không có server trung gian:"})," App kết nối trực tiếp Zalo ↔ máy bạn, không đi qua proxy của chúng tôi"]})]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-blue-400 mt-0.5",children:"•"}),E.jsxs("span",{children:[E.jsx("strong",{className:"text-white",children:"Phiên đăng nhập Zalo được mã hóa:"})," Cookie phiên được lưu bảo mật trong vùng dữ liệu riêng của ứng dụng"]})]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-blue-400 mt-0.5",children:"•"}),E.jsxs("span",{children:[E.jsx("strong",{className:"text-white",children:"Sao lưu định kỳ:"})," Khuyến nghị backup thư mục dữ liệu hàng tuần để phòng mất dữ liệu khi hỏng ổ cứng"]})]})]})]}),E.jsxs("section",{className:"glass rounded-2xl border border-white/5 p-6 md:p-8",children:[E.jsxs("h2",{className:"text-xl font-bold text-white mb-4 flex items-center gap-2",children:[E.jsx("span",{className:"text-blue-400",children:"4."})," Yêu cầu vận hành 24/7"]}),E.jsxs("p",{className:"text-slate-400 text-sm leading-relaxed",children:["Để các tính năng tự động hoá (Workflow, nhắn tin theo lịch, nhận tin nhắn thời gian thực) hoạt động liên tục, ứng dụng cần được ",E.jsx("strong",{className:"text-white",children:"để chạy nền 24/7"})," trên máy tính. Người dùng chịu trách nhiệm đảm bảo máy tính có nguồn điện ổn định và kết nối Internet. Việc tắt máy hoặc ngắt kết nối Internet sẽ làm gián đoạn các automation đang chạy."]})]}),E.jsxs("section",{className:"glass rounded-2xl border border-white/5 p-6 md:p-8",children:[E.jsxs("h2",{className:"text-xl font-bold text-white mb-4 flex items-center gap-2",children:[E.jsx("span",{className:"text-blue-400",children:"5."})," Tuyên bố miễn trách nhiệm"]}),E.jsxs("ul",{className:"space-y-3 text-slate-400 text-sm",children:[E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-amber-400 mt-0.5 flex-shrink-0",children:"⚠️"}),E.jsxs("span",{children:["Deplao là công cụ hỗ trợ. Người dùng ",E.jsx("strong",{className:"text-white",children:"hoàn toàn chịu trách nhiệm"})," về cách sử dụng phần mềm và tuân thủ pháp luật hiện hành."]})]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-amber-400 mt-0.5 flex-shrink-0",children:"⚠️"}),E.jsx("span",{children:"Chúng tôi không chịu trách nhiệm nếu tài khoản Zalo của bạn bị Zalo hạn chế do sử dụng không đúng cách hoặc vi phạm điều khoản Zalo."})]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-amber-400 mt-0.5 flex-shrink-0",children:"⚠️"}),E.jsx("span",{children:"Dữ liệu lưu trên máy bạn là trách nhiệm của bạn. Hãy sao lưu định kỳ để tránh mất mát."})]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-amber-400 mt-0.5 flex-shrink-0",children:"⚠️"}),E.jsx("span",{children:'Phần mềm được cung cấp "nguyên trạng" (as-is). Chúng tôi không đảm bảo phần mềm hoạt động hoàn toàn không có lỗi trong mọi môi trường.'})]})]})]}),E.jsxs("section",{className:"glass rounded-2xl border border-white/5 p-6 md:p-8",children:[E.jsxs("h2",{className:"text-xl font-bold text-white mb-4 flex items-center gap-2",children:[E.jsx("span",{className:"text-blue-400",children:"6."})," Kích hoạt & sử dụng"]}),E.jsxs("ul",{className:"space-y-2 text-slate-400 text-sm",children:[E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-blue-400 mt-0.5",children:"•"}),E.jsx("span",{children:"Trong giai đoạn hiện tại, Deplao đang được mở để người dùng có thể kích hoạt và sử dụng mà không cần thao tác gia hạn thủ công trên giao diện công khai."})]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-blue-400 mt-0.5",children:"•"}),E.jsxs("span",{children:["Tài khoản mới vẫn có thể được hệ thống ghi nhận dưới trạng thái ",E.jsx("strong",{className:"text-white",children:"trial"})," để phục vụ vận hành và theo dõi nội bộ."]})]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-blue-400 mt-0.5",children:"•"}),E.jsx("span",{children:"Thông tin kích hoạt và trạng thái sử dụng có thể được cập nhật phục vụ mục đích hỗ trợ, đồng bộ thiết bị và theo dõi vận hành hệ thống."})]}),E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"text-blue-400 mt-0.5",children:"•"}),E.jsx("span",{children:"Khi chính sách thương mại thay đổi trong tương lai, Deplao có thể cập nhật lại giao diện và điều khoản liên quan trước khi áp dụng công khai."})]})]})]}),E.jsxs("section",{className:"glass rounded-2xl border border-white/5 p-6 md:p-8",children:[E.jsxs("h2",{className:"text-xl font-bold text-white mb-4 flex items-center gap-2",children:[E.jsx("span",{className:"text-blue-400",children:"7."})," Sở hữu trí tuệ"]}),E.jsxs("p",{className:"text-slate-400 text-sm leading-relaxed",children:["Deplao và tất cả tài liệu liên quan là tài sản trí tuệ của ",E.jsx("strong",{className:"text-white",children:"DepLao Team"}),". Nghiêm cấm sao chép, phân phối lại, reverse-engineer hoặc bán lại phần mềm dưới bất kỳ hình thức nào khi chưa có sự đồng ý bằng văn bản."]})]}),E.jsxs("section",{className:"glass rounded-2xl border border-white/5 p-6 md:p-8",children:[E.jsxs("h2",{className:"text-xl font-bold text-white mb-4 flex items-center gap-2",children:[E.jsx("span",{className:"text-blue-400",children:"8."})," Liên hệ & Hỗ trợ"]}),E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[E.jsxs("div",{className:"flex items-center gap-3 bg-gray-800/50 rounded-xl px-4 py-3",children:[E.jsx("span",{className:"text-2xl",children:"💬"}),E.jsxs("div",{children:[E.jsx("p",{className:"text-white text-sm font-medium",children:"Telegram hỗ trợ"}),E.jsx("a",{href:"https://t.me/deplao_support",className:"text-blue-400 text-sm no-underline hover:underline",target:"_blank",rel:"noopener noreferrer",children:"@Deplao_support"})]})]}),E.jsxs("div",{className:"flex items-center gap-3 bg-gray-800/50 rounded-xl px-4 py-3",children:[E.jsx("span",{className:"text-2xl",children:"📧"}),E.jsxs("div",{children:[E.jsx("p",{className:"text-white text-sm font-medium",children:"Email"}),E.jsx("a",{href:"mailto:Deplao_support@gmail.com",className:"text-blue-400 text-sm no-underline hover:underline",children:"Deplao_support@gmail.com"})]})]})]})]})]})]}),E.jsx("footer",{className:"border-t border-white/5 bg-[#060a18]",children:E.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600",children:[E.jsxs("p",{children:["© ",new Date().getFullYear()," Deplao. All rights reserved."]}),E.jsx("div",{className:"flex items-center gap-4",children:E.jsx(Gl,{to:"/",className:"hover:text-slate-400 transition-colors no-underline",children:"Trang chủ"})})]})})]})}function gT(){const{pathname:r}=aa();return Ne.useEffect(()=>{window.scrollTo(0,0)},[r]),null}function xT(){return E.jsxs(T_,{children:[E.jsx(gT,{}),E.jsx("div",{className:"min-h-screen bg-[#060a18] text-white",children:E.jsxs(v_,{children:[E.jsx(Vl,{path:"/",element:E.jsx(pT,{})}),E.jsx(Vl,{path:"/affiliate",element:E.jsx(g_,{to:"/",replace:!0})}),E.jsx(Vl,{path:"/terms",element:E.jsx(mT,{})})]})})]})}wv.createRoot(document.getElementById("root")).render(E.jsx(Ne.StrictMode,{children:E.jsx(xT,{})}));
