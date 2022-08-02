var xc=Object.defineProperty,Tc=Object.defineProperties;var Cc=Object.getOwnPropertyDescriptors;var os=Object.getOwnPropertySymbols;var Pc=Object.prototype.hasOwnProperty,Oc=Object.prototype.propertyIsEnumerable;var as=(t,e,n)=>e in t?xc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,_e=(t,e)=>{for(var n in e||(e={}))Pc.call(e,n)&&as(t,n,e[n]);if(os)for(var n of os(e))Oc.call(e,n)&&as(t,n,e[n]);return t},Je=(t,e)=>Tc(t,Cc(e));var Dc=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var em=Dc(Xt=>{const Nc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};Nc();function se(){}function Re(t,e){for(const n in e)t[n]=e[n];return t}function D(t,e,n,r,i){t.__svelte_meta={loc:{file:e,line:n,column:r,char:i}}}function ho(t){return t()}function cs(){return Object.create(null)}function $t(t){t.forEach(ho)}function po(t){return typeof t=="function"}function Ue(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let xn;function Kn(t,e){return xn||(xn=document.createElement("a")),xn.href=e,t===xn.href}function Uc(t){return Object.keys(t).length===0}function ne(t,e){if(t!=null&&typeof t.subscribe!="function")throw new Error(`'${e}' is not a store with a 'subscribe' method`)}function Ti(t,...e){if(t==null)return se;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function yt(t){let e;return Ti(t,n=>e=n)(),e}function re(t,e,n){t.$$.on_destroy.push(Ti(e,n))}function Ci(t,e,n,r){if(t){const i=mo(t,e,n,r);return t[0](i)}}function mo(t,e,n,r){return t[1]&&r?Re(n.ctx.slice(),t[1](r(e))):n.ctx}function Pi(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function Oi(t,e,n,r,i,s){if(i){const o=mo(e,n,r,s);t.p(o,i)}}function Di(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Gn(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function qn(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function us(t,e,n){return t.set(n),e}function Bc(t,e){t.appendChild(e)}function Mc(t,e,n){t.insertBefore(e,n||null)}function go(t){t.parentNode.removeChild(t)}function ls(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function N(t){return document.createElement(t)}function de(t){return document.createTextNode(t)}function K(){return de(" ")}function lr(){return de("")}function Lc(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function vo(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function fs(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:vo(t,r,e[r])}function Fc(t){return Array.from(t.childNodes)}function $r(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function yo(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}let fn;function an(t){fn=t}function Jt(){if(!fn)throw new Error("Function called outside component initialization");return fn}function $n(t){Jt().$$.on_mount.push(t)}function ds(t){Jt().$$.after_update.push(t)}function hs(t){Jt().$$.on_destroy.push(t)}function Jn(){const t=Jt();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const i=yo(e,n);r.slice().forEach(s=>{s.call(t,i)})}}}function pt(t,e){Jt().$$.context.set(t,e)}function Ce(t){return Jt().$$.context.get(t)}const rn=[],ps=[],Un=[],ms=[],_o=Promise.resolve();let Jr=!1;function wo(){Jr||(Jr=!0,_o.then(bo))}function jc(){return wo(),_o}function Yr(t){Un.push(t)}const Tr=new Set;let Tn=0;function bo(){const t=fn;do{for(;Tn<rn.length;){const e=rn[Tn];Tn++,an(e),Hc(e.$$)}for(an(null),rn.length=0,Tn=0;ps.length;)ps.pop()();for(let e=0;e<Un.length;e+=1){const n=Un[e];Tr.has(n)||(Tr.add(n),n())}Un.length=0}while(rn.length);for(;ms.length;)ms.pop()();Jr=!1,Tr.clear(),an(t)}function Hc(t){if(t.fragment!==null){t.update(),$t(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Yr)}}const Bn=new Set;let mt;function Ut(){mt={r:0,c:[],p:mt}}function Bt(){mt.r||$t(mt.c),mt=mt.p}function $(t,e){t&&t.i&&(Bn.delete(t),t.i(e))}function Y(t,e,n,r){if(t&&t.o){if(Bn.has(t))return;Bn.add(t),mt.c.push(()=>{Bn.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const Vc=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Eo(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const c in o)c in a||(r[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);t[s]=a}else for(const c in o)i[c]=1}for(const o in r)o in n||(n[o]=void 0);return n}function gs(t){return typeof t=="object"&&t!==null?t:{}}function ye(t){t&&t.c()}function he(t,e,n,r){const{fragment:i,on_mount:s,on_destroy:o,after_update:a}=t.$$;i&&i.m(e,n),r||Yr(()=>{const c=s.map(ho).filter(po);o?o.push(...c):$t(c),t.$$.on_mount=[]}),a.forEach(Yr)}function pe(t,e){const n=t.$$;n.fragment!==null&&($t(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wc(t,e){t.$$.dirty[0]===-1&&(rn.push(t),wo(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ge(t,e,n,r,i,s,o,a=[-1]){const c=fn;an(t);const u=t.$$={fragment:null,ctx:null,props:s,update:se,not_equal:i,bound:cs(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:cs(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(t,e.props||{},(f,m,...h)=>{const y=h.length?h[0]:m;return u.ctx&&i(u.ctx[f],u.ctx[f]=y)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](y),l&&Wc(t,f)),m}):[],u.update(),l=!0,$t(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const f=Fc(e.target);u.fragment&&u.fragment.l(f),f.forEach(go)}else u.fragment&&u.fragment.c();e.intro&&$(t.$$.fragment),he(t,e.target,e.anchor,e.customElement),bo()}an(c)}class zc{$destroy(){pe(this,1),this.$destroy=se}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Uc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function j(t,e){document.dispatchEvent(yo(t,Object.assign({version:"3.47.0"},e),!0))}function b(t,e){j("SvelteDOMInsert",{target:t,node:e}),Bc(t,e)}function X(t,e,n){j("SvelteDOMInsert",{target:t,node:e,anchor:n}),Mc(t,e,n)}function Q(t){j("SvelteDOMRemove",{node:t}),go(t)}function vn(t,e,n,r,i,s){const o=r===!0?["capture"]:r?Array.from(Object.keys(r)):[];i&&o.push("preventDefault"),s&&o.push("stopPropagation"),j("SvelteDOMAddEventListener",{node:t,event:e,handler:n,modifiers:o});const a=Lc(t,e,n,r);return()=>{j("SvelteDOMRemoveEventListener",{node:t,event:e,handler:n,modifiers:o}),a()}}function E(t,e,n){vo(t,e,n),n==null?j("SvelteDOMRemoveAttribute",{node:t,attribute:e}):j("SvelteDOMSetAttribute",{node:t,attribute:e,value:n})}function gt(t,e){e=""+e,t.wholeText!==e&&(j("SvelteDOMSetData",{node:t,data:e}),t.data=e)}function Cn(t){if(typeof t!="string"&&!(t&&typeof t=="object"&&"length"in t)){let e="{#each} only iterates over array-like objects.";throw typeof Symbol=="function"&&t&&Symbol.iterator in t&&(e+=" You can use a spread to convert this iterable into an array."),new Error(e)}}function qe(t,e,n){for(const r of Object.keys(e))~n.indexOf(r)||console.warn(`<${t}> received an unexpected slot "${r}".`)}class $e extends zc{constructor(e){if(!e||!e.target&&!e.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}/**
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
 *//**
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
 */const Io=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Kc=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ko={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,h=u&63;c||(h=64,o||(m=64)),r.push(n[l],n[f],n[m],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Io(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw Error();const m=s<<2|a>>4;if(r.push(m),u!==64){const h=a<<4&240|u>>2;if(r.push(h),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Gc=function(t){const e=Io(t);return ko.encodeByteArray(e,!0)},So=function(t){return Gc(t).replace(/\./g,"")},qc=function(t){try{return ko.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class $c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ue(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function Yc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Xc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qc(){const t=ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zc(){return typeof indexedDB=="object"}function eu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const tu="FirebaseError";class Yt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tu,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yn.prototype.create)}}class yn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?nu(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,a,r)}}function nu(t,e){return t.replace(ru,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ru=/\{\$([^}]+)}/g;function iu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(vs(s)&&vs(o)){if(!Yn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vs(t){return t!==null&&typeof t=="object"}/**
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
 */function _n(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function on(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function su(t,e){const n=new ou(t,e);return n.subscribe.bind(n)}class ou{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");au(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Cr),i.error===void 0&&(i.error=Cr),i.complete===void 0&&(i.complete=Cr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function au(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cr(){}/**
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
 */function kt(t){return t&&t._delegate?t._delegate:t}class Mt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const dt="[DEFAULT]";/**
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
 */class cu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $c;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lu(e))try{this.getOrInitializeService({instanceIdentifier:dt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dt){return this.instances.has(e)}getOptions(e=dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uu(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dt){return this.component?this.component.multipleInstances?e:dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uu(t){return t===dt?void 0:t}function lu(t){return t.instantiationMode==="EAGER"}/**
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
 */class fu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const du={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},hu=Z.INFO,pu={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},mu=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=pu[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ao{constructor(e){this.name=e,this._logLevel=hu,this._logHandler=mu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?du[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const gu=(t,e)=>e.some(n=>t instanceof n);let ys,_s;function vu(){return ys||(ys=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yu(){return _s||(_s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ro=new WeakMap,Xr=new WeakMap,xo=new WeakMap,Pr=new WeakMap,Ni=new WeakMap;function _u(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(it(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ro.set(n,t)}).catch(()=>{}),Ni.set(e,t),e}function wu(t){if(Xr.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xr.set(t,e)}let Qr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return it(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bu(t){Qr=t(Qr)}function Eu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Or(this),e,...n);return xo.set(r,e.sort?e.sort():[e]),it(r)}:yu().includes(t)?function(...e){return t.apply(Or(this),e),it(Ro.get(this))}:function(...e){return it(t.apply(Or(this),e))}}function Iu(t){return typeof t=="function"?Eu(t):(t instanceof IDBTransaction&&wu(t),gu(t,vu())?new Proxy(t,Qr):t)}function it(t){if(t instanceof IDBRequest)return _u(t);if(Pr.has(t))return Pr.get(t);const e=Iu(t);return e!==t&&(Pr.set(t,e),Ni.set(e,t)),e}const Or=t=>Ni.get(t);function ku(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=it(o);return r&&o.addEventListener("upgradeneeded",c=>{r(it(o.result),c.oldVersion,c.newVersion,it(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Su=["get","getKey","getAll","getAllKeys","count"],Au=["put","add","delete","clear"],Dr=new Map;function ws(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dr.get(e))return Dr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Au.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Su.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Dr.set(e,s),s}bu(t=>Je(_e({},t),{get:(e,n,r)=>ws(e,n)||t.get(e,n,r),has:(e,n)=>!!ws(e,n)||t.has(e,n)}));/**
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
 */class Ru{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xu(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zr="@firebase/app",bs="0.7.28";/**
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
 */const Ui=new Ao("@firebase/app"),Tu="@firebase/app-compat",Cu="@firebase/analytics-compat",Pu="@firebase/analytics",Ou="@firebase/app-check-compat",Du="@firebase/app-check",Nu="@firebase/auth",Uu="@firebase/auth-compat",Bu="@firebase/database",Mu="@firebase/database-compat",Lu="@firebase/functions",Fu="@firebase/functions-compat",ju="@firebase/installations",Hu="@firebase/installations-compat",Vu="@firebase/messaging",Wu="@firebase/messaging-compat",zu="@firebase/performance",Ku="@firebase/performance-compat",Gu="@firebase/remote-config",qu="@firebase/remote-config-compat",$u="@firebase/storage",Ju="@firebase/storage-compat",Yu="@firebase/firestore",Xu="@firebase/firestore-compat",Qu="firebase",Zu="9.9.0";/**
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
 */const To="[DEFAULT]",el={[Zr]:"fire-core",[Tu]:"fire-core-compat",[Pu]:"fire-analytics",[Cu]:"fire-analytics-compat",[Du]:"fire-app-check",[Ou]:"fire-app-check-compat",[Nu]:"fire-auth",[Uu]:"fire-auth-compat",[Bu]:"fire-rtdb",[Mu]:"fire-rtdb-compat",[Lu]:"fire-fn",[Fu]:"fire-fn-compat",[ju]:"fire-iid",[Hu]:"fire-iid-compat",[Vu]:"fire-fcm",[Wu]:"fire-fcm-compat",[zu]:"fire-perf",[Ku]:"fire-perf-compat",[Gu]:"fire-rc",[qu]:"fire-rc-compat",[$u]:"fire-gcs",[Ju]:"fire-gcs-compat",[Yu]:"fire-fst",[Xu]:"fire-fst-compat","fire-js":"fire-js",[Qu]:"fire-js-all"};/**
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
 */const Xn=new Map,ei=new Map;function tl(t,e){try{t.container.addComponent(e)}catch(n){Ui.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dn(t){const e=t.name;if(ei.has(e))return Ui.debug(`There were multiple attempts to register component ${e}.`),!1;ei.set(e,t);for(const n of Xn.values())tl(n,t);return!0}function Co(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const nl={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},_t=new yn("app","Firebase",nl);/**
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
 */class rl{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}/**
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
 */const fr=Zu;function il(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:To,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw _t.create("bad-app-name",{appName:String(r)});const i=Xn.get(r);if(i){if(Yn(t,i.options)&&Yn(n,i.config))return i;throw _t.create("duplicate-app",{appName:r})}const s=new fu(r);for(const a of ei.values())s.addComponent(a);const o=new rl(t,n,s);return Xn.set(r,o),o}function sl(t=To){const e=Xn.get(t);if(!e)throw _t.create("no-app",{appName:t});return e}function Ot(t,e,n){var r;let i=(r=el[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ui.warn(a.join(" "));return}dn(new Mt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ol="firebase-heartbeat-database",al=1,hn="firebase-heartbeat-store";let Nr=null;function Po(){return Nr||(Nr=ku(ol,al,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hn)}}}).catch(t=>{throw _t.create("storage-open",{originalErrorMessage:t.message})})),Nr}async function cl(t){var e;try{return(await Po()).transaction(hn).objectStore(hn).get(Oo(t))}catch(n){throw _t.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Es(t,e){var n;try{const i=(await Po()).transaction(hn,"readwrite");return await i.objectStore(hn).put(e,Oo(t)),i.done}catch(r){throw _t.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function Oo(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ul=1024,ll=30*24*60*60*1e3;class fl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hl(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Is();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ll}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Is(),{heartbeatsToSend:n,unsentEntries:r}=dl(this._heartbeatsCache.heartbeats),i=So(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Is(){return new Date().toISOString().substring(0,10)}function dl(t,e=ul){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ks(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ks(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zc()?eu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Es(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Es(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ks(t){return So(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function pl(t){dn(new Mt("platform-logger",e=>new Ru(e),"PRIVATE")),dn(new Mt("heartbeat",e=>new fl(e),"PRIVATE")),Ot(Zr,bs,t),Ot(Zr,bs,"esm2017"),Ot("fire-js","")}pl("");var ml="firebase",gl="9.9.0";/**
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
 */Ot(ml,gl,"app");function Ss(){return il({apiKey:"AIzaSyBHT9wDkmxWs7T6a6m7ZNvFOY6JKJaE5Og",authDomain:"blitzappv1.firebaseapp.com",projectId:"blitzappv1",storageBucket:"blitzappv1.appspot.com",messagingSenderId:"245689724814",appId:"1:245689724814:web:cb42ab432716d16de87edf",measurementId:"G-197ZK5TQZK"})}class As{constructor({author:e,content:n,timestamp:r,id:i,avatar:s,authorId:o}){this.author=e,this.content=n,this.timestamp=r!=null?r:Date.now(),this.id=i,this.avatar=s,this.authorId=o!=null?o:null}serialize(){return{author:this.author,content:this.content,timestamp:this.timestamp,avatar:this.avatar,id:this.id,authorId:this.authorId}}}const Rt=[];function vl(t,e){return{subscribe:ce(t,e).subscribe}}function ce(t,e=se){let n;const r=new Set;function i(a){if(Ue(t,a)&&(t=a,n)){const c=!Rt.length;for(const u of r)u[1](),Rt.push(u,t);if(c){for(let u=0;u<Rt.length;u+=2)Rt[u][0](Rt[u+1]);Rt.length=0}}}function s(a){i(a(t))}function o(a,c=se){const u=[a,c];return r.add(u),r.size===1&&(n=e(i)||se),a(t),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function yl(t,e,n){const r=!Array.isArray(t),i=r?[t]:t,s=e.length<2;return vl(n,o=>{let a=!1;const c=[];let u=0,l=se;const f=()=>{if(u)return;l();const h=e(r?c[0]:c,o);s?o(h):l=po(h)?h:se},m=i.map((h,y)=>Ti(h,C=>{c[y]=C,u&=~(1<<y),a&&f()},()=>{u|=1<<y}));return a=!0,f(),function(){$t(m),l()}})}const Te=ce([]),Fe=ce([]),Qe=ce({privateKeyJwk:null,publicKeyJwk:null,sessionKey:null,derivedKey:null,iv:null}),fe=ce({signedIn:!1}),xt=class{static log(...t){!xt.DEV||console.log.apply(this,arguments)}static error(...t){!xt.DEV||console.error.apply(this,arguments)}static warn(...t){!xt.DEV||console.warn.apply(this,arguments)}static info(...t){!xt.DEV||console.info.apply(this,arguments)}static debug(...t){!xt.DEV||console.debug.apply(this,arguments)}static logc(t,e){console.log(`%c[%c${t}%c]`,"color: white",`color: ${e}`,"color: white")}};let ve=xt;ve.DEV=!1;var ti=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Bi={},Mi={},Do={},dr={},be={},_l=Ur(typeof Buffer!="undefined"&&Buffer)||Ur(ti.Buffer)||Ur(typeof window!="undefined"&&window.Buffer)||ti.Buffer;function Ur(t){return t&&t.isBuffer&&t}var wl={}.toString,Li=Array.isArray||function(t){return wl.call(t)=="[object Array]"},No={exports:{}},Tt=be,hr=No.exports=Uo(0);hr.alloc=Uo;hr.concat=Tt.concat;hr.from=bl;function Uo(t){return new Array(t)}function bl(t){if(!Tt.isBuffer(t)&&Tt.isView(t))t=Tt.Uint8Array.from(t);else if(Tt.isArrayBuffer(t))t=new Uint8Array(t);else{if(typeof t=="string")return Tt.from.call(hr,t);if(typeof t=="number")throw new TypeError('"value" argument must not be a number')}return Array.prototype.slice.call(t)}var Bo={exports:{}},je=be,Ct=je.global,pr=Bo.exports=je.hasBuffer?Mo(0):[];pr.alloc=je.hasBuffer&&Ct.alloc||Mo;pr.concat=je.concat;pr.from=El;function Mo(t){return new Ct(t)}function El(t){if(!je.isBuffer(t)&&je.isView(t))t=je.Uint8Array.from(t);else if(je.isArrayBuffer(t))t=new Uint8Array(t);else{if(typeof t=="string")return je.from.call(pr,t);if(typeof t=="number")throw new TypeError('"value" argument must not be a number')}return Ct.from&&Ct.from.length!==1?Ct.from(t):new Ct(t)}var Lo={exports:{}},Qn=be,Xt=Lo.exports=Qn.hasArrayBuffer?Fo(0):[];Xt.alloc=Fo;Xt.concat=Qn.concat;Xt.from=Il;function Fo(t){return new Uint8Array(t)}function Il(t){if(Qn.isView(t)){var e=t.byteOffset,n=t.byteLength;t=t.buffer,t.byteLength!==n&&(t.slice?t=t.slice(e,e+n):(t=new Uint8Array(t),t.byteLength!==n&&(t=Array.prototype.slice.call(t,e,e+n))))}else{if(typeof t=="string")return Qn.from.call(Xt,t);if(typeof t=="number")throw new TypeError('"value" argument must not be a number')}return new Uint8Array(t)}var St={},mr={};mr.copy=Al;mr.toString=Sl;mr.write=kl;function kl(t,e){for(var n=this,r=e||(e|=0),i=t.length,s=0,o=0;o<i;)s=t.charCodeAt(o++),s<128?n[r++]=s:s<2048?(n[r++]=192|s>>>6,n[r++]=128|s&63):s<55296||s>57343?(n[r++]=224|s>>>12,n[r++]=128|s>>>6&63,n[r++]=128|s&63):(s=(s-55296<<10|t.charCodeAt(o++)-56320)+65536,n[r++]=240|s>>>18,n[r++]=128|s>>>12&63,n[r++]=128|s>>>6&63,n[r++]=128|s&63);return r-e}function Sl(t,e,n){var r=this,i=e|0;n||(n=r.length);for(var s="",o=0;i<n;){if(o=r[i++],o<128){s+=String.fromCharCode(o);continue}(o&224)===192?o=(o&31)<<6|r[i++]&63:(o&240)===224?o=(o&15)<<12|(r[i++]&63)<<6|r[i++]&63:(o&248)===240&&(o=(o&7)<<18|(r[i++]&63)<<12|(r[i++]&63)<<6|r[i++]&63),o>=65536?(o-=65536,s+=String.fromCharCode((o>>>10)+55296,(o&1023)+56320)):s+=String.fromCharCode(o)}return s}function Al(t,e,n,r){var i;n||(n=0),!r&&r!==0&&(r=this.length),e||(e=0);var s=r-n;if(t===this&&n<e&&e<r)for(i=s-1;i>=0;i--)t[i+e]=this[i+n];else for(i=0;i<s;i++)t[i+e]=this[i+n];return s}var Fi=mr;St.copy=Wo;St.slice=zo;St.toString=Rl;St.write=xl("write");var rt=be,jo=rt.global,Ho=rt.hasBuffer&&"TYPED_ARRAY_SUPPORT"in jo,Vo=Ho&&!jo.TYPED_ARRAY_SUPPORT;function Wo(t,e,n,r){var i=rt.isBuffer(this),s=rt.isBuffer(t);if(i&&s)return this.copy(t,e,n,r);if(!Vo&&!i&&!s&&rt.isView(this)&&rt.isView(t)){var o=n||r!=null?zo.call(this,n,r):this;return t.set(o,e),o.length}else return Fi.copy.call(this,t,e,n,r)}function zo(t,e){var n=this.slice||!Vo&&this.subarray;if(n)return n.call(this,t,e);var r=rt.alloc.call(this,e-t);return Wo.call(this,r,0,t,e),r}function Rl(t,e,n){var r=!Ho&&rt.isBuffer(this)?this.toString:Fi.toString;return r.apply(this,arguments)}function xl(t){return e;function e(){var n=this[t]||Fi[t];return n.apply(this,arguments)}}(function(t){var e=t.global=_l,n=t.hasBuffer=e&&!!e.isBuffer,r=t.hasArrayBuffer=typeof ArrayBuffer!="undefined",i=t.isArray=Li;t.isArrayBuffer=r?C:_;var s=t.isBuffer=n?e.isBuffer:_,o=t.isView=r?ArrayBuffer.isView||A("ArrayBuffer","buffer"):_;t.alloc=m,t.concat=h,t.from=f;var a=t.Array=No.exports,c=t.Buffer=Bo.exports,u=t.Uint8Array=Lo.exports,l=t.prototype=St;function f(I){return typeof I=="string"?v.call(this,I):d(this).from(I)}function m(I){return d(this).alloc(I)}function h(I,O){O||(O=0,Array.prototype.forEach.call(I,T));var w=this!==t&&this||I[0],k=m.call(w,O),R=0;return Array.prototype.forEach.call(I,g),k;function T(p){O+=p.length}function g(p){R+=l.copy.call(p,k,R)}}var y=A("ArrayBuffer");function C(I){return I instanceof ArrayBuffer||y(I)}function v(I){var O=I.length*3,w=m.call(this,O),k=l.write.call(w,I);return O!==k&&(w=l.slice.call(w,0,k)),w}function d(I){return s(I)?c:o(I)?u:i(I)?a:n?c:r?u:a}function _(){return!1}function A(I,O){return I="[object "+I+"]",function(w){return w!=null&&{}.toString.call(O?w[O]:w)===I}}})(be);dr.ExtBuffer=ni;var Tl=be;function ni(t,e){if(!(this instanceof ni))return new ni(t,e);this.buffer=Tl.from(t),this.type=e}var Ko={};Ko.setExtPackers=Ol;var Zn=be,Cl=Zn.global,Ae=Zn.Uint8Array.from,Br,Pl={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1};function Ol(t){t.addExtPacker(14,Error,[ct,Ie]),t.addExtPacker(1,EvalError,[ct,Ie]),t.addExtPacker(2,RangeError,[ct,Ie]),t.addExtPacker(3,ReferenceError,[ct,Ie]),t.addExtPacker(4,SyntaxError,[ct,Ie]),t.addExtPacker(5,TypeError,[ct,Ie]),t.addExtPacker(6,URIError,[ct,Ie]),t.addExtPacker(10,RegExp,[Dl,Ie]),t.addExtPacker(11,Boolean,[Mr,Ie]),t.addExtPacker(12,String,[Mr,Ie]),t.addExtPacker(13,Date,[Number,Ie]),t.addExtPacker(15,Number,[Mr,Ie]),typeof Uint8Array!="undefined"&&(t.addExtPacker(17,Int8Array,Ae),t.addExtPacker(18,Uint8Array,Ae),t.addExtPacker(19,Int16Array,Ae),t.addExtPacker(20,Uint16Array,Ae),t.addExtPacker(21,Int32Array,Ae),t.addExtPacker(22,Uint32Array,Ae),t.addExtPacker(23,Float32Array,Ae),typeof Float64Array!="undefined"&&t.addExtPacker(24,Float64Array,Ae),typeof Uint8ClampedArray!="undefined"&&t.addExtPacker(25,Uint8ClampedArray,Ae),t.addExtPacker(26,ArrayBuffer,Ae),t.addExtPacker(29,DataView,Ae)),Zn.hasBuffer&&t.addExtPacker(27,Cl,Zn.from)}function Ie(t){return Br||(Br=Bi.encode),Br(t)}function Mr(t){return t.valueOf()}function Dl(t){t=RegExp.prototype.toString.call(t).split("/"),t.shift();var e=[t.pop()];return e.unshift(t.join("/")),e}function ct(t){var e={};for(var n in Pl)e[n]=t[n];return e}var Go={},gr={};(function(t){(function(e){var n="undefined",r=n!==typeof Buffer&&Buffer,i=n!==typeof Uint8Array&&Uint8Array,s=n!==typeof ArrayBuffer&&ArrayBuffer,o=[0,0,0,0,0,0,0,0],a=Array.isArray||w,c=4294967296,u=16777216,l;f("Uint64BE",!0,!0),f("Int64BE",!0,!1),f("Uint64LE",!1,!0),f("Int64LE",!1,!1);function f(k,R,T){var g=R?0:4,p=R?4:0,S=R?0:3,x=R?1:2,M=R?2:1,H=R?3:0,F=R?_:I,V=R?A:O,B=ie.prototype,U="is"+k,P="_"+U;return B.buffer=void 0,B.offset=0,B[P]=!0,B.toNumber=is,B.toString=Ac,B.toJSON=is,B.toArray=m,r&&(B.toBuffer=h),i&&(B.toArrayBuffer=y),ie[U]=Ee,e[k]=ie,ie;function ie(G,W,z,q){return this instanceof ie?kc(this,G,W,z,q):new ie(G,W,z,q)}function Ee(G){return!!(G&&G[P])}function kc(G,W,z,q,oe){if(i&&s&&(W instanceof s&&(W=new i(W)),q instanceof s&&(q=new i(q))),!W&&!z&&!q&&!l){G.buffer=d(o,0);return}if(!C(W,z)){var Be=l||Array;oe=z,q=W,z=0,W=new Be(8)}G.buffer=W,G.offset=z|=0,n!==typeof q&&(typeof q=="string"?Sc(W,z,q,oe||10):C(q,oe)?v(W,z,q,oe):typeof oe=="number"?(An(W,z+g,q),An(W,z+p,oe)):q>0?F(W,z,q):q<0?V(W,z,q):v(W,z,o,0))}function Sc(G,W,z,q){var oe=0,Be=z.length,Me=0,Se=0;z[0]==="-"&&oe++;for(var Rc=oe;oe<Be;){var ss=parseInt(z[oe++],q);if(!(ss>=0))break;Se=Se*q+ss,Me=Me*q+Math.floor(Se/c),Se%=c}Rc&&(Me=~Me,Se?Se=c-Se:Me++),An(G,W+g,Me),An(G,W+p,Se)}function is(){var G=this.buffer,W=this.offset,z=Rn(G,W+g),q=Rn(G,W+p);return T||(z|=0),z?z*c+q:q}function Ac(G){var W=this.buffer,z=this.offset,q=Rn(W,z+g),oe=Rn(W,z+p),Be="",Me=!T&&q&2147483648;for(Me&&(q=~q,oe=c-oe),G=G||10;;){var Se=q%G*c+oe;if(q=Math.floor(q/G),oe=Math.floor(Se/G),Be=(Se%G).toString(G)+Be,!q&&!oe)break}return Me&&(Be="-"+Be),Be}function An(G,W,z){G[W+H]=z&255,z=z>>8,G[W+M]=z&255,z=z>>8,G[W+x]=z&255,z=z>>8,G[W+S]=z&255}function Rn(G,W){return G[W+S]*u+(G[W+x]<<16)+(G[W+M]<<8)+G[W+H]}}function m(k){var R=this.buffer,T=this.offset;return l=null,k!==!1&&T===0&&R.length===8&&a(R)?R:d(R,T)}function h(k){var R=this.buffer,T=this.offset;if(l=r,k!==!1&&T===0&&R.length===8&&Buffer.isBuffer(R))return R;var g=new r(8);return v(g,0,R,T),g}function y(k){var R=this.buffer,T=this.offset,g=R.buffer;if(l=i,k!==!1&&T===0&&g instanceof s&&g.byteLength===8)return g;var p=new i(8);return v(p,0,R,T),p.buffer}function C(k,R){var T=k&&k.length;return R|=0,T&&R+8<=T&&typeof k[R]!="string"}function v(k,R,T,g){R|=0,g|=0;for(var p=0;p<8;p++)k[R++]=T[g++]&255}function d(k,R){return Array.prototype.slice.call(k,R,R+8)}function _(k,R,T){for(var g=R+8;g>R;)k[--g]=T&255,T/=256}function A(k,R,T){var g=R+8;for(T++;g>R;)k[--g]=-T&255^255,T/=256}function I(k,R,T){for(var g=R+8;R<g;)k[R++]=T&255,T/=256}function O(k,R,T){var g=R+8;for(T++;R<g;)k[R++]=-T&255^255,T/=256}function w(k){return!!k&&Object.prototype.toString.call(k)=="[object Array]"}})(typeof t.nodeName!="string"?t:ti||{})})(gr);var qo={},vr={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */vr.read=function(t,e,n,r,i){var s,o,a=i*8-r-1,c=(1<<a)-1,u=c>>1,l=-7,f=n?i-1:0,m=n?-1:1,h=t[e+f];for(f+=m,s=h&(1<<-l)-1,h>>=-l,l+=a;l>0;s=s*256+t[e+f],f+=m,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=r;l>0;o=o*256+t[e+f],f+=m,l-=8);if(s===0)s=1-u;else{if(s===c)return o?NaN:(h?-1:1)*(1/0);o=o+Math.pow(2,r),s=s-u}return(h?-1:1)*o*Math.pow(2,s-r)};vr.write=function(t,e,n,r,i,s){var o,a,c,u=s*8-i-1,l=(1<<u)-1,f=l>>1,m=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:s-1,y=r?1:-1,C=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=l):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),o+f>=1?e+=m/c:e+=m*Math.pow(2,1-f),e*c>=2&&(o++,c/=2),o+f>=l?(a=0,o=l):o+f>=1?(a=(e*c-1)*Math.pow(2,i),o=o+f):(a=e*Math.pow(2,f-1)*Math.pow(2,i),o=0));i>=8;t[n+h]=a&255,h+=y,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;t[n+h]=o&255,h+=y,o/=256,u-=8);t[n+h-y]|=C*128};var ji={},Nl=ji.uint8=new Array(256);for(var Pn=0;Pn<=255;Pn++)Nl[Pn]=Ul(Pn);function Ul(t){return function(e){var n=e.reserve(1);e.buffer[n]=t}}var $o=vr,Jo=gr,Bl=Jo.Uint64BE,Ml=Jo.Int64BE,Yo=ji.uint8,yr=be,te=yr.global,Ll=yr.hasBuffer&&"TYPED_ARRAY_SUPPORT"in te,Fl=Ll&&!te.TYPED_ARRAY_SUPPORT,Rs=yr.hasBuffer&&te.prototype||{};qo.getWriteToken=jl;function jl(t){return t&&t.uint8array?Hl():Fl||yr.hasBuffer&&t&&t.safe?Vl():Xo()}function Hl(){var t=Xo();return t[202]=J(202,4,ea),t[203]=J(203,8,ta),t}function Xo(){var t=Yo.slice();return t[196]=tn(196),t[197]=ut(197),t[198]=lt(198),t[199]=tn(199),t[200]=ut(200),t[201]=lt(201),t[202]=J(202,4,Rs.writeFloatBE||ea,!0),t[203]=J(203,8,Rs.writeDoubleBE||ta,!0),t[204]=tn(204),t[205]=ut(205),t[206]=lt(206),t[207]=J(207,8,Qo),t[208]=tn(208),t[209]=ut(209),t[210]=lt(210),t[211]=J(211,8,Zo),t[217]=tn(217),t[218]=ut(218),t[219]=lt(219),t[220]=ut(220),t[221]=lt(221),t[222]=ut(222),t[223]=lt(223),t}function Vl(){var t=Yo.slice();return t[196]=J(196,1,te.prototype.writeUInt8),t[197]=J(197,2,te.prototype.writeUInt16BE),t[198]=J(198,4,te.prototype.writeUInt32BE),t[199]=J(199,1,te.prototype.writeUInt8),t[200]=J(200,2,te.prototype.writeUInt16BE),t[201]=J(201,4,te.prototype.writeUInt32BE),t[202]=J(202,4,te.prototype.writeFloatBE),t[203]=J(203,8,te.prototype.writeDoubleBE),t[204]=J(204,1,te.prototype.writeUInt8),t[205]=J(205,2,te.prototype.writeUInt16BE),t[206]=J(206,4,te.prototype.writeUInt32BE),t[207]=J(207,8,Qo),t[208]=J(208,1,te.prototype.writeInt8),t[209]=J(209,2,te.prototype.writeInt16BE),t[210]=J(210,4,te.prototype.writeInt32BE),t[211]=J(211,8,Zo),t[217]=J(217,1,te.prototype.writeUInt8),t[218]=J(218,2,te.prototype.writeUInt16BE),t[219]=J(219,4,te.prototype.writeUInt32BE),t[220]=J(220,2,te.prototype.writeUInt16BE),t[221]=J(221,4,te.prototype.writeUInt32BE),t[222]=J(222,2,te.prototype.writeUInt16BE),t[223]=J(223,4,te.prototype.writeUInt32BE),t}function tn(t){return function(e,n){var r=e.reserve(2),i=e.buffer;i[r++]=t,i[r]=n}}function ut(t){return function(e,n){var r=e.reserve(3),i=e.buffer;i[r++]=t,i[r++]=n>>>8,i[r]=n}}function lt(t){return function(e,n){var r=e.reserve(5),i=e.buffer;i[r++]=t,i[r++]=n>>>24,i[r++]=n>>>16,i[r++]=n>>>8,i[r]=n}}function J(t,e,n,r){return function(i,s){var o=i.reserve(e+1);i.buffer[o++]=t,n.call(i.buffer,s,o,r)}}function Qo(t,e){new Bl(this,e,t)}function Zo(t,e){new Ml(this,e,t)}function ea(t,e){$o.write(this,t,e,!1,23,4)}function ta(t,e){$o.write(this,t,e,!1,52,8)}var Wl=Li,na=gr,zl=na.Uint64BE,Kl=na.Int64BE,xs=be,Ts=St,Gl=qo,ql=ji.uint8,$l=dr.ExtBuffer,Jl=typeof Uint8Array!="undefined",Yl=typeof Map!="undefined",Qt=[];Qt[1]=212;Qt[2]=213;Qt[4]=214;Qt[8]=215;Qt[16]=216;Go.getWriteType=Xl;function Xl(t){var e=Gl.getWriteToken(t),n=t&&t.useraw,r=Jl&&t&&t.binarraybuffer,i=r?xs.isArrayBuffer:xs.isBuffer,s=r?O:I,o=Yl&&t&&t.usemap,a=o?R:k,c={boolean:u,function:_,number:l,object:n?d:v,string:C(n?y:h),symbol:_,undefined:_};return c;function u(g,p){var S=p?195:194;e[S](g,p)}function l(g,p){var S=p|0,x;if(p!==S){x=203,e[x](g,p);return}else-32<=S&&S<=127?x=S&255:0<=S?x=S<=255?204:S<=65535?205:206:x=-128<=S?208:-32768<=S?209:210;e[x](g,S)}function f(g,p){var S=207;e[S](g,p.toArray())}function m(g,p){var S=211;e[S](g,p.toArray())}function h(g){return g<32?1:g<=255?2:g<=65535?3:5}function y(g){return g<32?1:g<=65535?3:5}function C(g){return p;function p(S,x){var M=x.length,H=5+M*3;S.offset=S.reserve(H);var F=S.buffer,V=g(M),B=S.offset+V;M=Ts.write.call(F,x,B);var U=g(M);if(V!==U){var P=B+U-V,ie=B+M;Ts.copy.call(F,F,P,B,ie)}var Ee=U===1?160+M:U<=3?215+U:219;e[Ee](S,M),S.offset+=M}}function v(g,p){if(p===null)return _(g,p);if(i(p))return s(g,p);if(Wl(p))return A(g,p);if(zl.isUint64BE(p))return f(g,p);if(Kl.isInt64BE(p))return m(g,p);var S=g.codec.getExtPacker(p);if(S&&(p=S(p)),p instanceof $l)return w(g,p);a(g,p)}function d(g,p){if(i(p))return T(g,p);v(g,p)}function _(g,p){var S=192;e[S](g,p)}function A(g,p){var S=p.length,x=S<16?144+S:S<=65535?220:221;e[x](g,S);for(var M=g.codec.encode,H=0;H<S;H++)M(g,p[H])}function I(g,p){var S=p.length,x=S<255?196:S<=65535?197:198;e[x](g,S),g.send(p)}function O(g,p){I(g,new Uint8Array(p))}function w(g,p){var S=p.buffer,x=S.length,M=Qt[x]||(x<255?199:x<=65535?200:201);e[M](g,x),ql[p.type](g),g.send(S)}function k(g,p){var S=Object.keys(p),x=S.length,M=x<16?128+x:x<=65535?222:223;e[M](g,x);var H=g.codec.encode;S.forEach(function(F){H(g,F),H(g,p[F])})}function R(g,p){if(!(p instanceof Map))return k(g,p);var S=p.size,x=S<16?128+S:S<=65535?222:223;e[x](g,S);var M=g.codec.encode;p.forEach(function(H,F,V){M(g,F),M(g,H)})}function T(g,p){var S=p.length,x=S<32?160+S:S<=65535?218:219;e[x](g,S),g.send(p)}}var At={},Ql=Li;At.createCodec=ra;At.install=ef;At.filter=rf;var Zl=be;function Lt(t){if(!(this instanceof Lt))return new Lt(t);this.options=t,this.init()}Lt.prototype.init=function(){var t=this.options;return t&&t.uint8array&&(this.bufferish=Zl.Uint8Array),this};function ef(t){for(var e in t)Lt.prototype[e]=tf(Lt.prototype[e],t[e])}function tf(t,e){return t&&e?n:t||e;function n(){return t.apply(this,arguments),e.apply(this,arguments)}}function nf(t){return t=t.slice(),function(n){return t.reduce(e,n)};function e(n,r){return r(n)}}function rf(t){return Ql(t)?nf(t):t}function ra(t){return new Lt(t)}At.preset=ra({preset:!0});var sf=dr.ExtBuffer,of=Ko,af=Go,Hi=At;Hi.install({addExtPacker:uf,getExtPacker:lf,init:ia});Do.preset=ia.call(Hi.preset);function cf(t){var e=af.getWriteType(t);return n;function n(r,i){var s=e[typeof i];if(!s)throw new Error('Unsupported type "'+typeof i+'": '+i);s(r,i)}}function ia(){var t=this.options;return this.encode=cf(t),t&&t.preset&&of.setExtPackers(this),this}function uf(t,e,n){n=Hi.filter(n);var r=e.name;if(r&&r!=="Object"){var i=this.extPackers||(this.extPackers={});i[r]=o}else{var s=this.extEncoderList||(this.extEncoderList=[]);s.unshift([e,o])}function o(a){return n&&(a=n(a)),new sf(a,t)}}function lf(t){var e=this.extPackers||(this.extPackers={}),n=t.constructor,r=n&&n.name&&e[n.name];if(r)return r;for(var i=this.extEncoderList||(this.extEncoderList=[]),s=i.length,o=0;o<s;o++){var a=i[o];if(n===a[0])return a[1]}}var _r={};_r.FlexDecoder=Ft;_r.FlexEncoder=jt;var cn=be,ff=2048,df=65536,Cs="BUFFER_SHORTAGE";function Ft(){if(!(this instanceof Ft))return new Ft}function jt(){if(!(this instanceof jt))return new jt}Ft.mixin=aa(hf());Ft.mixin(Ft.prototype);jt.mixin=aa(pf());jt.mixin(jt.prototype);function hf(){return{bufferish:cn,write:t,fetch:gf,flush:e,push:oa,pull:vf,read:sa,reserve:n,offset:0};function t(r){var i=this.offset?cn.prototype.slice.call(this.buffer,this.offset):this.buffer;this.buffer=i?r?this.bufferish.concat([i,r]):i:r,this.offset=0}function e(){for(;this.offset<this.buffer.length;){var r=this.offset,i;try{i=this.fetch()}catch(s){if(s&&s.message!=Cs)throw s;this.offset=r;break}this.push(i)}}function n(r){var i=this.offset,s=i+r;if(s>this.buffer.length)throw new Error(Cs);return this.offset=s,i}}function pf(){return{bufferish:cn,write:mf,fetch:t,flush:e,push:oa,pull:n,read:sa,reserve:r,send:i,maxBufferSize:df,minBufferSize:ff,offset:0,start:0};function t(){var s=this.start;if(s<this.offset){var o=this.start=this.offset;return cn.prototype.slice.call(this.buffer,s,o)}}function e(){for(;this.start<this.offset;){var s=this.fetch();s&&this.push(s)}}function n(){var s=this.buffers||(this.buffers=[]),o=s.length>1?this.bufferish.concat(s):s[0];return s.length=0,o}function r(s){var o=s|0;if(this.buffer){var a=this.buffer.length,c=this.offset|0,u=c+o;if(u<a)return this.offset=u,c;this.flush(),s=Math.max(s,Math.min(a*2,this.maxBufferSize))}return s=Math.max(s,this.minBufferSize),this.buffer=this.bufferish.alloc(s),this.start=0,this.offset=o,0}function i(s){var o=s.length;if(o>this.minBufferSize)this.flush(),this.push(s);else{var a=this.reserve(o);cn.prototype.copy.call(s,this.buffer,a)}}}function mf(){throw new Error("method not implemented: write()")}function gf(){throw new Error("method not implemented: fetch()")}function sa(){var t=this.buffers&&this.buffers.length;return t?(this.flush(),this.pull()):this.fetch()}function oa(t){var e=this.buffers||(this.buffers=[]);e.push(t)}function vf(){var t=this.buffers||(this.buffers=[]);return t.shift()}function aa(t){return e;function e(n){for(var r in t)n[r]=t[r];return n}}Mi.EncodeBuffer=Ht;var yf=Do.preset,_f=_r.FlexEncoder;_f.mixin(Ht.prototype);function Ht(t){if(!(this instanceof Ht))return new Ht(t);if(t&&(this.options=t,t.codec)){var e=this.codec=t.codec;e.bufferish&&(this.bufferish=e.bufferish)}}Ht.prototype.codec=yf;Ht.prototype.write=function(t){this.codec.encode(this,t)};Bi.encode=bf;var wf=Mi.EncodeBuffer;function bf(t,e){var n=new wf(e);return n.write(t),n.read()}var Vi={},Wi={},ca={},ua={};ua.setExtUnpackers=kf;var la=be,Ef=la.global,Lr,If={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1};function kf(t){t.addExtUnpacker(14,[ke,ft(Error)]),t.addExtUnpacker(1,[ke,ft(EvalError)]),t.addExtUnpacker(2,[ke,ft(RangeError)]),t.addExtUnpacker(3,[ke,ft(ReferenceError)]),t.addExtUnpacker(4,[ke,ft(SyntaxError)]),t.addExtUnpacker(5,[ke,ft(TypeError)]),t.addExtUnpacker(6,[ke,ft(URIError)]),t.addExtUnpacker(10,[ke,Sf]),t.addExtUnpacker(11,[ke,le(Boolean)]),t.addExtUnpacker(12,[ke,le(String)]),t.addExtUnpacker(13,[ke,le(Date)]),t.addExtUnpacker(15,[ke,le(Number)]),typeof Uint8Array!="undefined"&&(t.addExtUnpacker(17,le(Int8Array)),t.addExtUnpacker(18,le(Uint8Array)),t.addExtUnpacker(19,[Ye,le(Int16Array)]),t.addExtUnpacker(20,[Ye,le(Uint16Array)]),t.addExtUnpacker(21,[Ye,le(Int32Array)]),t.addExtUnpacker(22,[Ye,le(Uint32Array)]),t.addExtUnpacker(23,[Ye,le(Float32Array)]),typeof Float64Array!="undefined"&&t.addExtUnpacker(24,[Ye,le(Float64Array)]),typeof Uint8ClampedArray!="undefined"&&t.addExtUnpacker(25,le(Uint8ClampedArray)),t.addExtUnpacker(26,Ye),t.addExtUnpacker(29,[Ye,le(DataView)])),la.hasBuffer&&t.addExtUnpacker(27,le(Ef))}function ke(t){return Lr||(Lr=Vi.decode),Lr(t)}function Sf(t){return RegExp.apply(null,t)}function ft(t){return function(e){var n=new t;for(var r in If)n[r]=e[r];return n}}function le(t){return function(e){return new t(e)}}function Ye(t){return new Uint8Array(t).buffer}var wr={},fa=vr,da=gr,ha=da.Uint64BE,pa=da.Int64BE;wr.getReadFormat=xf;wr.readUint8=ma;var zi=be,br=St,Af=typeof Map!="undefined",Rf=!0;function xf(t){var e=zi.hasArrayBuffer&&t&&t.binarraybuffer,n=t&&t.int64,r=Af&&t&&t.usemap,i={map:r?Cf:Tf,array:Pf,str:Of,bin:e?Nf:Df,ext:Uf,uint8:ma,uint16:Mf,uint32:Ff,uint64:On(8,n?Wf:Hf),int8:Bf,int16:Lf,int32:jf,int64:On(8,n?zf:Vf),float32:On(4,Kf),float64:On(8,Gf)};return i}function Tf(t,e){var n={},r,i=new Array(e),s=new Array(e),o=t.codec.decode;for(r=0;r<e;r++)i[r]=o(t),s[r]=o(t);for(r=0;r<e;r++)n[i[r]]=s[r];return n}function Cf(t,e){var n=new Map,r,i=new Array(e),s=new Array(e),o=t.codec.decode;for(r=0;r<e;r++)i[r]=o(t),s[r]=o(t);for(r=0;r<e;r++)n.set(i[r],s[r]);return n}function Pf(t,e){for(var n=new Array(e),r=t.codec.decode,i=0;i<e;i++)n[i]=r(t);return n}function Of(t,e){var n=t.reserve(e),r=n+e;return br.toString.call(t.buffer,"utf-8",n,r)}function Df(t,e){var n=t.reserve(e),r=n+e,i=br.slice.call(t.buffer,n,r);return zi.from(i)}function Nf(t,e){var n=t.reserve(e),r=n+e,i=br.slice.call(t.buffer,n,r);return zi.Uint8Array.from(i).buffer}function Uf(t,e){var n=t.reserve(e+1),r=t.buffer[n++],i=n+e,s=t.codec.getExtUnpacker(r);if(!s)throw new Error("Invalid ext type: "+(r&&"0x"+r.toString(16)));var o=br.slice.call(t.buffer,n,i);return s(o)}function ma(t){var e=t.reserve(1);return t.buffer[e]}function Bf(t){var e=t.reserve(1),n=t.buffer[e];return n&128?n-256:n}function Mf(t){var e=t.reserve(2),n=t.buffer;return n[e++]<<8|n[e]}function Lf(t){var e=t.reserve(2),n=t.buffer,r=n[e++]<<8|n[e];return r&32768?r-65536:r}function Ff(t){var e=t.reserve(4),n=t.buffer;return n[e++]*16777216+(n[e++]<<16)+(n[e++]<<8)+n[e]}function jf(t){var e=t.reserve(4),n=t.buffer;return n[e++]<<24|n[e++]<<16|n[e++]<<8|n[e]}function On(t,e){return function(n){var r=n.reserve(t);return e.call(n.buffer,r,Rf)}}function Hf(t){return new ha(this,t).toNumber()}function Vf(t){return new pa(this,t).toNumber()}function Wf(t){return new ha(this,t)}function zf(t){return new pa(this,t)}function Kf(t){return fa.read(this,t,!1,23,4)}function Gf(t){return fa.read(this,t,!1,52,8)}var ga={},qf=wr;ga.getReadToken=$f;function $f(t){var e=qf.getReadFormat(t);return t&&t.useraw?Jf(e):va(e)}function va(t){var e,n=new Array(256);for(e=0;e<=127;e++)n[e]=nn(e);for(e=128;e<=143;e++)n[e]=Le(e-128,t.map);for(e=144;e<=159;e++)n[e]=Le(e-144,t.array);for(e=160;e<=191;e++)n[e]=Le(e-160,t.str);for(n[192]=nn(null),n[193]=null,n[194]=nn(!1),n[195]=nn(!0),n[196]=we(t.uint8,t.bin),n[197]=we(t.uint16,t.bin),n[198]=we(t.uint32,t.bin),n[199]=we(t.uint8,t.ext),n[200]=we(t.uint16,t.ext),n[201]=we(t.uint32,t.ext),n[202]=t.float32,n[203]=t.float64,n[204]=t.uint8,n[205]=t.uint16,n[206]=t.uint32,n[207]=t.uint64,n[208]=t.int8,n[209]=t.int16,n[210]=t.int32,n[211]=t.int64,n[212]=Le(1,t.ext),n[213]=Le(2,t.ext),n[214]=Le(4,t.ext),n[215]=Le(8,t.ext),n[216]=Le(16,t.ext),n[217]=we(t.uint8,t.str),n[218]=we(t.uint16,t.str),n[219]=we(t.uint32,t.str),n[220]=we(t.uint16,t.array),n[221]=we(t.uint32,t.array),n[222]=we(t.uint16,t.map),n[223]=we(t.uint32,t.map),e=224;e<=255;e++)n[e]=nn(e-256);return n}function Jf(t){var e,n=va(t).slice();for(n[217]=n[196],n[218]=n[197],n[219]=n[198],e=160;e<=191;e++)n[e]=Le(e-160,t.bin);return n}function nn(t){return function(){return t}}function we(t,e){return function(n){var r=t(n);return e(n,r)}}function Le(t,e){return function(n){return e(n,t)}}var Yf=dr.ExtBuffer,Xf=ua,Qf=wr.readUint8,Zf=ga,Ki=At;Ki.install({addExtUnpacker:td,getExtUnpacker:nd,init:ya});ca.preset=ya.call(Ki.preset);function ed(t){var e=Zf.getReadToken(t);return n;function n(r){var i=Qf(r),s=e[i];if(!s)throw new Error("Invalid type: "+(i&&"0x"+i.toString(16)));return s(r)}}function ya(){var t=this.options;return this.decode=ed(t),t&&t.preset&&Xf.setExtUnpackers(this),this}function td(t,e){var n=this.extUnpackers||(this.extUnpackers=[]);n[t]=Ki.filter(e)}function nd(t){var e=this.extUnpackers||(this.extUnpackers=[]);return e[t]||n;function n(r){return new Yf(r,t)}}Wi.DecodeBuffer=Vt;var rd=ca.preset,id=_r.FlexDecoder;id.mixin(Vt.prototype);function Vt(t){if(!(this instanceof Vt))return new Vt(t);if(t&&(this.options=t,t.codec)){var e=this.codec=t.codec;e.bufferish&&(this.bufferish=e.bufferish)}}Vt.prototype.codec=rd;Vt.prototype.fetch=function(){return this.codec.decode(this)};Vi.decode=od;var sd=Wi.DecodeBuffer;function od(t,e){var n=new sd(e);return n.write(t),n.read()}var Gi={exports:{}};/**
 * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
 *
 * @copyright Yusuke Kawasaki
 * @license MIT
 * @constructor
 * @see https://github.com/kawanet/event-lite
 * @see http://kawanet.github.io/event-lite/EventLite.html
 * @example
 * var EventLite = require("event-lite");
 *
 * function MyClass() {...}             // your class
 *
 * EventLite.mixin(MyClass.prototype);  // import event methods
 *
 * var obj = new MyClass();
 * obj.on("foo", function() {...});     // add event listener
 * obj.once("bar", function() {...});   // add one-time event listener
 * obj.emit("foo");                     // dispatch event
 * obj.emit("bar");                     // dispatch another event
 * obj.off("foo");                      // remove event listener
 */(function(t){function e(){if(!(this instanceof e))return new e}(function(n){t.exports=n;var r="listeners",i={on:o,once:a,off:c,emit:u};s(n.prototype),n.mixin=s;function s(f){for(var m in i)f[m]=i[m];return f}function o(f,m){return l(this,f).push(m),this}function a(f,m){var h=this;return y.originalListener=m,l(h,f).push(y),h;function y(){c.call(h,f,y),m.apply(this,arguments)}}function c(f,m){var h=this,y;if(!arguments.length)delete h[r];else if(m){if(y=l(h,f,!0),y){if(y=y.filter(C),!y.length)return c.call(h,f);h[r][f]=y}}else if(y=h[r],y&&(delete y[f],!Object.keys(y).length))return c.call(h);return h;function C(v){return v!==m&&v.originalListener!==m}}function u(f,m){var h=this,y=l(h,f,!0);if(!y)return!1;var C=arguments.length;if(C===1)y.forEach(d);else if(C===2)y.forEach(_);else{var v=Array.prototype.slice.call(arguments,1);y.forEach(A)}return!!y.length;function d(I){I.call(h)}function _(I){I.call(h,m)}function A(I){I.apply(h,v)}}function l(f,m,h){if(!(h&&!f[r])){var y=f[r]||(f[r]={});return y[m]||(y[m]=[])}}})(e)})(Gi);var ad=Gi.exports,_a=Mi.EncodeBuffer;function Wt(t){if(!(this instanceof Wt))return new Wt(t);_a.call(this,t)}Wt.prototype=new _a;ad.mixin(Wt.prototype);Wt.prototype.encode=function(t){this.write(t),this.emit("data",this.read())};Wt.prototype.end=function(t){arguments.length&&this.encode(t),this.flush(),this.emit("end")};var cd=Gi.exports,wa=Wi.DecodeBuffer;function wt(t){if(!(this instanceof wt))return new wt(t);wa.call(this,t)}wt.prototype=new wa;cd.mixin(wt.prototype);wt.prototype.decode=function(t){arguments.length&&this.write(t),this.flush()};wt.prototype.push=function(t){this.emit("data",t)};wt.prototype.end=function(t){this.decode(t),this.emit("end")};At.preset;var er=Bi.encode,ud=Vi.decode,zt=(t=>(t[t.JOIN=0]="JOIN",t[t.LEAVE=1]="LEAVE",t[t.USERS=2]="USERS",t[t.CONNECT=3]="CONNECT",t[t.DISCONNECT=4]="DISCONNECT",t[t.MESSAGE_CREATE=5]="MESSAGE_CREATE",t[t.MESSAGE_DELETE=6]="MESSAGE_DELETE",t[t.MESSAGE_EDIT=7]="MESSAGE_EDIT",t[t.PING=8]="PING",t[t.PONG=9]="PONG",t[t.SESSION=10]="SESSION",t))(zt||{});const Mn=class{constructor({type:t,data:e=[]}){this.type=t,this.data=e}deflate(){return[this.type,...this.data||[]]}encode(){return er(this.deflate())}static typesArray(){const t=[];for(const e in zt)t.push(zt[e]);return t}static inflate(t){let e=new Uint8Array(t instanceof DataView?t.buffer:t),n=ud(e);if(!Array.isArray(n))try{if(n=Array.from(n),!n)return!1}catch{return!1}return new Mn({type:n.shift(),data:n.length==0?[]:n})}static deflate(t){return[t.type,...t.data||[]]}static encode(t){return er(Mn.deflate(t))}static safeSend(t){return e=>{e instanceof Uint8Array||(e=Mn.encode(e));try{t(e.buffer)}catch(n){console.error(n)}}}};let ee=Mn;ee.types=zt;er([zt.PING]);er([zt.PONG]);class Ps extends EventTarget{constructor(){super(),this.ws=null}wsHandshake(){const e=ee.encode(new ee({type:ee.types.CONNECT}));return this.ws.send(e),!0}connect(){const e=window.location.protocol==="http:"?"ws":"wss",n=window.location.hostname==="localhost"?"localhost:8000":"blitzv1.herokuapp.com",r=`${e}://${n}`,i=new WebSocket(r);this.ws=i,i.binaryType="arraybuffer",i.addEventListener("open",()=>this.wsHandshake()&&ve.logc("WS_OPEN","#A020F0")),i.addEventListener("error",console.error),i.addEventListener("close",()=>ve.logc("WS_CLOSE","red")),i.addEventListener("message",s=>{const o=ee.inflate(s.data);if(!o)return;const a=ee.types[o.type];ve.logc(a,"cyan");let c,u,l;switch(o.type){case ee.types.CONNECT:c={clientId:o.data[0]};break;case ee.types.SESSION:c={sessionKey:o.data[0],iv:o.data[1]};break;case ee.types.MESSAGE_CREATE:l=o.data,c={messageId:l[0],senderId:l[1],senderPublicKey:l[2],data:l[3]};break;case ee.types.MESSAGE_DELETE:l=o.data,c={messageId:l[0]};break;case ee.types.JOIN:l=o.data,u=l[1],c={message:l[0],users:u||[]};break;case ee.types.USERS:c=o.data[0];case ee.types.LEAVE:l=o.data,u=l[1],c={message:l[0],users:u||[]};break}this.dispatchEvent(new CustomEvent(a,{detail:c}))})}send(e){!this.ws||this.ws.readyState===WebSocket.CLOSED||this.ws.send(ee.encode(e))}}const ht="D:/git projects/wsChatApp/frontend/src/pages/ChatMessage.svelte";function ri(t){let e,n,r;const i={c:function(){e=N("span"),e.textContent="\u2716",E(e,"class","close"),D(e,ht,38,16,1413)},m:function(o,a){X(o,e,a),n||(r=vn(e,"click",t[2],!1,!1,!1),n=!0)},p:se,d:function(o){o&&Q(e),n=!1,r()}};return j("SvelteRegisterBlock",{block:i,id:ri.name,type:"if",source:"(38:12) {#if data.authorId === $client.id}",ctx:t}),i}function ii(t){let e,n,r,i,s,o,a=t[0].author+"",c,u,l,f=new Date(t[0].timestamp).toLocaleString("en-US",{hour:"numeric",hour12:!0,minute:"numeric"})+"",m,h,y,C,v=t[0].content+"",d,_,A=t[0].authorId===t[1].id&&ri(t);const I={c:function(){e=N("div"),n=N("img"),i=K(),s=N("div"),o=N("p"),c=de(a),u=K(),l=N("span"),m=de(f),h=K(),A&&A.c(),y=K(),C=N("p"),d=de(v),Kn(n.src,r=`https://avatars.dicebear.com/api/adventurer-neutral/${t[0].avatar}.svg`)||E(n,"src",r),E(n,"alt","avatar"),E(n,"class","avatar"),D(n,ht,22,4,872),D(l,ht,30,12,1117),E(o,"class","meta"),D(o,ht,28,8,1060),E(C,"class","text"),D(C,ht,41,8,1516),E(s,"class","meta-wrapper"),D(s,ht,27,4,1024),E(e,"class",_="message "+t[0].id),D(e,ht,21,0,835)},l:function(w){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(w,k){X(w,e,k),b(e,n),b(e,i),b(e,s),b(s,o),b(o,c),b(o,u),b(o,l),b(l,m),b(o,h),A&&A.m(o,null),b(s,y),b(s,C),b(C,d)},p:function(w,[k]){k&1&&!Kn(n.src,r=`https://avatars.dicebear.com/api/adventurer-neutral/${w[0].avatar}.svg`)&&E(n,"src",r),k&1&&a!==(a=w[0].author+"")&&gt(c,a),k&1&&f!==(f=new Date(w[0].timestamp).toLocaleString("en-US",{hour:"numeric",hour12:!0,minute:"numeric"})+"")&&gt(m,f),w[0].authorId===w[1].id?A?A.p(w,k):(A=ri(w),A.c(),A.m(o,null)):A&&(A.d(1),A=null),k&1&&v!==(v=w[0].content+"")&&gt(d,v),k&1&&_!==(_="message "+w[0].id)&&E(e,"class",_)},i:se,o:se,d:function(w){w&&Q(e),A&&A.d()}};return j("SvelteRegisterBlock",{block:I,id:ii.name,type:"component",source:"",ctx:t}),I}function ld(t,e,n){let r;ne(fe,"client"),re(t,fe,l=>n(1,r=l));let{$$slots:i={},$$scope:s}=e;qe("ChatMessage",i,[]);let{data:o,wsm:a}=e;function c(){const l=this.parentNode.parentNode.parentNode;if(!(l&&l.classList.item(1)))return ve.logc("ERROR MESSAGE_DELETE","red");a.send(new ee({type:ee.types.MESSAGE_DELETE,data:[{senderId:r.id,messageId:l.classList.item(1)}]}))}const u=["data","wsm"];return Object.keys(e).forEach(l=>{!~u.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<ChatMessage> was created with unknown prop '${l}'`)}),t.$$set=l=>{"data"in l&&n(0,o=l.data),"wsm"in l&&n(3,a=l.wsm)},t.$capture_state=()=>({client:fe,Logger:ve,Message:ee,data:o,wsm:a,deleteMessage:c,$client:r}),t.$inject_state=l=>{"data"in l&&n(0,o=l.data),"wsm"in l&&n(3,a=l.wsm)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[o,r,c,a]}class ba extends $e{constructor(e){super(e),Ge(this,e,ld,ii,Ue,{data:0,wsm:3}),j("SvelteRegisterComponent",{component:this,tagName:"ChatMessage",options:e,id:ii.name});const{ctx:n}=this.$$,r=e.props||{};n[0]===void 0&&!("data"in r)&&console.warn("<ChatMessage> was created without expected prop 'data'"),n[3]===void 0&&!("wsm"in r)&&console.warn("<ChatMessage> was created without expected prop 'wsm'")}get data(){throw new Error("<ChatMessage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<ChatMessage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get wsm(){throw new Error("<ChatMessage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set wsm(e){throw new Error("<ChatMessage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Fr="D:/git projects/wsChatApp/frontend/src/pages/Users.svelte";function si(t){let e,n,r,i,s,o=t[0].username+"",a;const c={c:function(){e=N("div"),n=N("img"),i=K(),s=N("p"),a=de(o),Kn(n.src,r="https://avatars.dicebear.com/api/adventurer-neutral/"+t[0].avatar+".svg")||E(n,"src",r),E(n,"alt","avatar"),E(n,"class","avatar"),D(n,Fr,4,4,73),E(s,"class","username"),D(s,Fr,5,4,188),E(e,"class","user"),D(e,Fr,3,0,49)},l:function(l){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(l,f){X(l,e,f),b(e,n),b(e,i),b(e,s),b(s,a)},p:function(l,[f]){f&1&&!Kn(n.src,r="https://avatars.dicebear.com/api/adventurer-neutral/"+l[0].avatar+".svg")&&E(n,"src",r),f&1&&o!==(o=l[0].username+"")&&gt(a,o)},i:se,o:se,d:function(l){l&&Q(e)}};return j("SvelteRegisterBlock",{block:c,id:si.name,type:"component",source:"",ctx:t}),c}function fd(t,e,n){let{$$slots:r={},$$scope:i}=e;qe("Users",r,[]);let{data:s}=e;const o=["data"];return Object.keys(e).forEach(a=>{!~o.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Users> was created with unknown prop '${a}'`)}),t.$$set=a=>{"data"in a&&n(0,s=a.data)},t.$capture_state=()=>({data:s}),t.$inject_state=a=>{"data"in a&&n(0,s=a.data)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[s]}class Ea extends $e{constructor(e){super(e),Ge(this,e,fd,si,Ue,{data:0}),j("SvelteRegisterComponent",{component:this,tagName:"Users",options:e,id:si.name});const{ctx:n}=this.$$,r=e.props||{};n[0]===void 0&&!("data"in r)&&console.warn("<Users> was created without expected prop 'data'")}get data(){throw new Error("<Users>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Users>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}class He{static async generateKeyPair(){const e=await window.crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveKey","deriveBits"]),n=await window.crypto.subtle.exportKey("jwk",e.publicKey),r=await window.crypto.subtle.exportKey("jwk",e.privateKey);return{publicKeyJwk:n,privateKeyJwk:r}}static async deriveKey(e,n){const r=await window.crypto.subtle.importKey("jwk",e,{name:"ECDH",namedCurve:"P-256"},!0,[]),i=await window.crypto.subtle.importKey("jwk",n,{name:"ECDH",namedCurve:"P-256"},!0,["deriveKey","deriveBits"]);return await window.crypto.subtle.deriveKey({name:"ECDH",public:r},i,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"])}static async encrypt(e,n,r){const i=new TextEncoder().encode(e),s=await window.crypto.subtle.encrypt({name:"AES-GCM",iv:new TextEncoder().encode("Initialization Vector")},n,i);return new Uint8Array(s)}static async decrypt(e,n,r){const i={name:"AES-GCM",iv:new TextEncoder().encode("Initialization Vector")},s=await window.crypto.subtle.decrypt(i,n,e).catch(o=>console.error("decrypt func",o));return new TextDecoder().decode(s)}}He.crypto=window.crypto;class Os{constructor(e,n){this.data=e,this.recipientId=n}serialize(){return{data:this.data,recipientId:this.recipientId}}}const Ds=t=>typeof t=="undefined",oi=t=>typeof t=="function",Ia=t=>typeof t=="number";function Ns(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Er(){let t=0;return()=>t++}function dd(){return Math.random().toString(36).substring(2)}const Pe=typeof window=="undefined";function ka(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const wn=t=>`@@svnav-ctx__${t}`,Ln=wn("LOCATION"),st=wn("ROUTER"),ai=wn("ROUTE"),Us=wn("ROUTE_PARAMS"),Bs=wn("FOCUS_ELEM"),Sa=/^:(.+)/,tr=(t,e)=>t.substr(0,e.length)===e,hd=t=>t==="",pd=t=>Sa.test(t),Aa=t=>t[0]==="*",md=t=>t.replace(/\*.*$/,""),Ra=t=>t.replace(/(^\/+|\/+$)/g,"");function Ne(t,e=!1){const n=Ra(t).split("/");return e?n.filter(Boolean):n}const jr=(t,e)=>t+(e?`?${e}`:""),nr=t=>`/${Ra(t)}`;function Kt(...t){const e=r=>Ne(r,!0).join("/"),n=t.map(e).join("/");return nr(n)}const rr=1,pn=2,ot=3,gd=4,xa=5,vd=6,Ta=7,yd=8,_d=9,Ca=10,Pa=11,wd={[rr]:"Link",[pn]:"Route",[ot]:"Router",[gd]:"useFocus",[xa]:"useLocation",[vd]:"useMatch",[Ta]:"useNavigate",[yd]:"useParams",[_d]:"useResolvable",[Ca]:"useResolve",[Pa]:"navigate"},qi=t=>wd[t];function bd(t,e){let n;return t===pn?n=e.path?`path="${e.path}"`:"default":t===rr?n=`to="${e.to}"`:t===ot&&(n=`basepath="${e.basepath||""}"`),`<${qi(t)} ${n||""} />`}function Ed(t,e,n,r){const i=n&&bd(r||t,n),s=i?`

Occurred in: ${i}`:"",o=qi(t),a=oi(e)?e(o):e;return`<${o}> ${a}${s}`}const Oa=t=>(...e)=>t(Ed(...e)),Da=Oa(t=>{throw new Error(t)}),un=Oa(console.warn),Ms=4,Id=3,kd=2,Sd=1,Ad=1;function Rd(t,e){const n=t.default?0:Ne(t.fullPath).reduce((r,i)=>{let s=r;return s+=Ms,hd(i)?s+=Ad:pd(i)?s+=kd:Aa(i)?s-=Ms+Sd:s+=Id,s},0);return{route:t,score:n,index:e}}function xd(t){return t.map(Rd).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function ci(t,e){let n,r;const[i]=e.split("?"),s=Ne(i),o=s[0]==="",a=xd(t);for(let c=0,u=a.length;c<u;c++){const{route:l}=a[c];let f=!1;const m={},h=d=>Je(_e({},l),{params:m,uri:d});if(l.default){r=h(e);continue}const y=Ne(l.fullPath),C=Math.max(s.length,y.length);let v=0;for(;v<C;v++){const d=y[v],_=s[v];if(!Ds(d)&&Aa(d)){const I=d==="*"?"*":d.slice(1);m[I]=s.slice(v).map(decodeURIComponent).join("/");break}if(Ds(_)){f=!0;break}const A=Sa.exec(d);if(A&&!o){const I=decodeURIComponent(_);m[A[1]]=I}else if(d!==_){f=!0;break}}if(!f){n=h(Kt(...s.slice(0,v)));break}}return n||r||null}function ui(t,e){return ci([t],e)}function Td(t,e){if(tr(t,"/"))return t;const[n,r]=t.split("?"),[i]=e.split("?"),s=Ne(n),o=Ne(i);if(s[0]==="")return jr(i,r);if(!tr(s[0],".")){const u=o.concat(s).join("/");return jr((i==="/"?"":"/")+u,r)}const a=o.concat(s),c=[];return a.forEach(u=>{u===".."?c.pop():u!=="."&&c.push(u)}),jr(`/${c.join("/")}`,r)}function Hr(t,e){const{pathname:n,hash:r="",search:i="",state:s}=t,o=Ne(e,!0),a=Ne(n,!0);for(;o.length;)o[0]!==a[0]&&Da(ot,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:Kt(...a),hash:r,search:i,state:s}}const Ls=t=>t.length===1?"":t;function li(t){const e=t.indexOf("?"),n=t.indexOf("#"),r=e!==-1,i=n!==-1,s=i?Ls(t.substr(n)):"",o=i?t.substr(0,n):t,a=r?Ls(o.substr(e)):"";return{pathname:r?o.substr(0,e):o,search:a,hash:s}}function Cd(t,e,n){return Kt(n,Td(t,e))}function Fs(t,e){const n=nr(md(t)),r=Ne(n,!0),i=Ne(e,!0).slice(0,r.length),s=ui({fullPath:n},Kt(...i));return s&&s.uri}const Vr="POP",Pd="PUSH",Od="REPLACE";function Wr(t){return Je(_e({},t.location),{pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"})}function Dd(t){let e=[],n=Wr(t),r=Vr;const i=(s=e)=>s.forEach(o=>o({location:n,action:r}));return{get location(){return n},listen(s){e.push(s);const o=()=>{n=Wr(t),r=Vr,i([s])};i([s]);const a=ka(t,"popstate",o);return()=>{a(),e=e.filter(c=>c!==s)}},navigate(s,o){const{state:a={},replace:c=!1}=o||{};if(r=c?Od:Pd,Ia(s))o&&un(Pa,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),r=Vr,t.history.go(s);else{const u=Je(_e({},a),{_key:dd()});try{t.history[c?"replaceState":"pushState"](u,"",s)}catch{t.location[c?"replace":"assign"](s)}}n=Wr(t),i()}}}function zr(t,e){return Je(_e({},li(e)),{state:t})}function Nd(t="/"){let e=0,n=[zr(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(r,i,s){e++,n=n.slice(0,e),n.push(zr(r,s))},replaceState(r,i,s){n[e]=zr(r,s)},go(r){const i=e+r;i<0||i>n.length-1||(e=i)}}}}const Ud=!!(!Pe&&window.document&&window.document.createElement),Bd=!Pe&&window.location.origin==="null",fi=Dd(Ud&&!Bd?window:Nd()),{navigate:ir}=fi;let Ve=null,Na=!0;function Md(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let r=0;r<n.length;r++){const i=n[r],s=Number(i.dataset.svnavRouter);if(s===t)return!0;if(s===e)return!1}return!1}function js(t){(!Ve||t.level>Ve.level||t.level===Ve.level&&Md(t.routerId,Ve.routerId))&&(Ve=t)}function Ld(){Ve=null}function Fd(){Na=!1}function Hs(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=ka(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function jd(t,e){return Number(t.dataset.svnavRouteEnd)===e}function Hd(t){return/^H[1-6]$/i.test(t.tagName)}function Vs(t,e=document){return e.querySelector(t)}function Vd(t){let n=Vs(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!jd(n,t);){if(Hd(n))return n;const r=Vs("h1,h2,h3,h4,h5,h6",n);if(r)return r;n=n.nextElementSibling}return null}function Wd(t){Promise.resolve(yt(t.focusElement)).then(e=>{const n=e||Vd(t.id);n||un(ot,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,pn),!Hs(n)&&Hs(document.documentElement)})}const Ws=(t,e,n)=>(r,i)=>jc().then(()=>{if(!Ve||Na){Fd();return}if(r&&Wd(Ve.route),t.announcements&&i){const{path:s,fullPath:o,meta:a,params:c,uri:u}=Ve.route,l=t.createAnnouncement({path:s,fullPath:o,meta:a,params:c,uri:u},yt(n));Promise.resolve(l).then(f=>{e.set(f)})}Ld()}),Ua="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;",Ba="D:/git projects/wsChatApp/frontend/node_modules/.pnpm/svelte-navigator@3.1.6_svelte@3.47.0+typescript@4.6.3/node_modules/svelte-navigator/src/Router.svelte";function Ma(t){let e,n;const r={c:function(){e=N("div"),n=de(t[0]),E(e,"role","status"),E(e,"aria-atomic","true"),E(e,"aria-live","polite"),E(e,"style",Ua),D(e,Ba,195,1,5906)},m:function(s,o){X(s,e,o),b(e,n)},p:function(s,o){o[0]&1&&gt(n,s[0])},d:function(s){s&&Q(e)}};return j("SvelteRegisterBlock",{block:r,id:Ma.name,type:"if",source:"(195:0) {#if isTopLevelRouter && manageFocus && a11yConfig.announcements}",ctx:t}),r}function di(t){let e,n,r,i,s;const o=t[20].default,a=Ci(o,t,t[19],null);let c=t[2]&&t[4]&&t[1].announcements&&Ma(t);const u={c:function(){e=N("div"),n=K(),a&&a.c(),r=K(),c&&c.c(),i=lr(),$r(e,"display","none"),E(e,"aria-hidden","true"),E(e,"data-svnav-router",t[3]),D(e,Ba,190,0,5750)},l:function(f){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(f,m){X(f,e,m),X(f,n,m),a&&a.m(f,m),X(f,r,m),c&&c.m(f,m),X(f,i,m),s=!0},p:function(f,m){a&&a.p&&(!s||m[0]&524288)&&Oi(a,o,f,f[19],s?Pi(o,f[19],m,null):Di(f[19]),null),f[2]&&f[4]&&f[1].announcements&&c.p(f,m)},i:function(f){s||($(a,f),s=!0)},o:function(f){Y(a,f),s=!1},d:function(f){f&&Q(e),f&&Q(n),a&&a.d(f),f&&Q(r),c&&c.d(f),f&&Q(i)}};return j("SvelteRegisterBlock",{block:u,id:di.name,type:"component",source:"",ctx:t}),u}const zs=Er(),Kr="/";function zd(t,e,n){let r,i,s,o,a,{$$slots:c={},$$scope:u}=e;qe("Router",c,["default"]);let{basepath:l=Kr}=e,{url:f=null}=e,{history:m=fi}=e,{primary:h=!0}=e,{a11y:y={}}=e;const C=_e({createAnnouncement:P=>`Navigated to ${P.uri}`,announcements:!0},y),v=l,d=nr(l),_=Ce(Ln),A=Ce(st),I=!_,O=zs(),w=h&&!(A&&!A.manageFocus),k=ce("");ne(k,"announcementText"),re(t,k,P=>n(0,a=P));const R=ce([]);ne(R,"routes"),re(t,R,P=>n(18,o=P));const T=ce(null);ne(T,"activeRoute"),re(t,T,P=>n(16,i=P));let g=!1;const p=I?0:A.level+1,S=()=>Hr(Pe?li(f):m.location,d),x=I?ce(S()):_;ne(x,"location"),re(t,x,P=>n(15,r=P));const M=ce(r);ne(M,"prevLocation"),re(t,M,P=>n(17,s=P));const H=Ws(C,k,x),F=P=>ie=>ie.filter(Ee=>Ee.id!==P);function V(P){if(Pe){if(g)return;const ie=ui(P,r.pathname);if(ie)return g=!0,ie}else R.update(ie=>{const Ee=F(P.id)(ie);return Ee.push(P),Ee})}function B(P){R.update(F(P))}!I&&l!==Kr&&un(ot,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:l}),I&&($n(()=>m.listen(ie=>{const Ee=Hr(ie.location,d);M.set(r),x.set(Ee)})),pt(Ln,x)),pt(st,{activeRoute:T,registerRoute:V,unregisterRoute:B,manageFocus:w,level:p,id:O,history:I?m:A.history,basepath:I?d:A.basepath});const U=["basepath","url","history","primary","a11y"];return Object.keys(e).forEach(P=>{!~U.indexOf(P)&&P.slice(0,2)!=="$$"&&P!=="slot"&&console.warn(`<Router> was created with unknown prop '${P}'`)}),t.$$set=P=>{"basepath"in P&&n(10,l=P.basepath),"url"in P&&n(11,f=P.url),"history"in P&&n(12,m=P.history),"primary"in P&&n(13,h=P.primary),"a11y"in P&&n(14,y=P.a11y),"$$scope"in P&&n(19,u=P.$$scope)},t.$capture_state=()=>({createCounter:Er,createId:zs,getContext:Ce,setContext:pt,onMount:$n,writable:ce,LOCATION:Ln,ROUTER:st,globalHistory:fi,normalizePath:nr,pick:ci,match:ui,normalizeLocation:Hr,createLocation:li,isSSR:Pe,warn:un,ROUTER_ID:ot,pushFocusCandidate:js,visuallyHiddenStyle:Ua,createTriggerFocus:Ws,defaultBasepath:Kr,basepath:l,url:f,history:m,primary:h,a11y:y,a11yConfig:C,initialBasepath:v,normalizedBasepath:d,locationContext:_,routerContext:A,isTopLevelRouter:I,routerId:O,manageFocus:w,announcementText:k,routes:R,activeRoute:T,hasActiveRoute:g,level:p,getInitialLocation:S,location:x,prevLocation:M,triggerFocus:H,createRouteFilter:F,registerRoute:V,unregisterRoute:B,$location:r,$activeRoute:i,$prevLocation:s,$routes:o,$announcementText:a}),t.$inject_state=P=>{"basepath"in P&&n(10,l=P.basepath),"url"in P&&n(11,f=P.url),"history"in P&&n(12,m=P.history),"primary"in P&&n(13,h=P.primary),"a11y"in P&&n(14,y=P.a11y),"hasActiveRoute"in P&&(g=P.hasActiveRoute)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{if(t.$$.dirty[0]&1024&&l!==v&&un(ot,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&294912){const P=ci(o,r.pathname);T.set(P)}if(t.$$.dirty[0]&163840&&I){const P=!!r.hash,ie=!P&&w,Ee=!P||r.pathname!==s.pathname;H(ie,Ee)}t.$$.dirty[0]&65536&&w&&i&&i.primary&&js({level:p,routerId:O,route:i})},[a,C,I,O,w,k,R,T,x,M,l,f,m,h,y,r,i,s,o,u,c]}class Ir extends $e{constructor(e){super(e),Ge(this,e,zd,di,Ue,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1]),j("SvelteRegisterComponent",{component:this,tagName:"Router",options:e,id:di.name})}get basepath(){throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set basepath(e){throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get url(){throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set url(e){throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get history(){throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set history(e){throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get primary(){throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set primary(e){throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get a11y(){throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set a11y(e){throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function bt(t,e,n=st,r=ot){Ce(n)||Da(t,s=>`You cannot use ${s} outside of a ${qi(r)}.`,e)}const Kd=t=>{const{subscribe:e}=Ce(t);return{subscribe:e}};function at(){return bt(xa),Kd(Ln)}function hi(){const{history:t}=Ce(st);return t}function pi(){const t=Ce(ai);return t?yl(t,e=>e.base):ce("/")}function mi(){bt(Ca);const t=pi(),{basepath:e}=Ce(st);return r=>Cd(r,yt(t),e)}function Gt(){bt(Ta);const t=mi(),{navigate:e}=hi();return(r,i)=>{const s=Ia(r)?r:t(r);return e(s,i)}}const Ks="D:/git projects/wsChatApp/frontend/node_modules/.pnpm/svelte-navigator@3.1.6_svelte@3.47.0+typescript@4.6.3/node_modules/svelte-navigator/src/Route.svelte",Gd=t=>({params:t&16,location:t&8}),Gs=t=>({params:Pe?yt(t[9]):t[4],location:t[3],navigate:t[10]});function gi(t){let e,n;e=new Ir({props:{primary:t[1],$$slots:{default:[ja]},$$scope:{ctx:t}},$$inline:!0});const r={c:function(){ye(e.$$.fragment)},m:function(s,o){he(e,s,o),n=!0},p:function(s,o){const a={};o&2&&(a.primary=s[1]),o&264217&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i:function(s){n||($(e.$$.fragment,s),n=!0)},o:function(s){Y(e.$$.fragment,s),n=!1},d:function(s){pe(e,s)}};return j("SvelteRegisterBlock",{block:r,id:gi.name,type:"if",source:"(97:0) {#if isActive}",ctx:t}),r}function La(t){let e;const n=t[17].default,r=Ci(n,t,t[18],Gs),i={c:function(){r&&r.c()},m:function(o,a){r&&r.m(o,a),e=!0},p:function(o,a){r&&r.p&&(!e||a&262168)&&Oi(r,n,o,o[18],e?Pi(n,o[18],a,Gd):Di(o[18]),Gs)},i:function(o){e||($(r,o),e=!0)},o:function(o){Y(r,o),e=!1},d:function(o){r&&r.d(o)}};return j("SvelteRegisterBlock",{block:i,id:La.name,type:"else",source:"(113:2) {:else}",ctx:t}),i}function Fa(t){let e,n,r;const i=[{location:t[3]},{navigate:t[10]},Pe?yt(t[9]):t[4],t[11]];var s=t[0];function o(c){let u={};for(let l=0;l<i.length;l+=1)u=Re(u,i[l]);return{props:u,$$inline:!0}}s&&(e=new s(o()));const a={c:function(){e&&ye(e.$$.fragment),n=lr()},m:function(u,l){e&&he(e,u,l),X(u,n,l),r=!0},p:function(u,l){const f=l&3608?Eo(i,[l&8&&{location:u[3]},l&1024&&{navigate:u[10]},l&528&&gs(Pe?yt(u[9]):u[4]),l&2048&&gs(u[11])]):{};if(s!==(s=u[0])){if(e){Ut();const m=e;Y(m.$$.fragment,1,0,()=>{pe(m,1)}),Bt()}s?(e=new s(o()),ye(e.$$.fragment),$(e.$$.fragment,1),he(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i:function(u){r||(e&&$(e.$$.fragment,u),r=!0)},o:function(u){e&&Y(e.$$.fragment,u),r=!1},d:function(u){u&&Q(n),e&&pe(e,u)}};return j("SvelteRegisterBlock",{block:a,id:Fa.name,type:"if",source:"(105:2) {#if component !== null}",ctx:t}),a}function ja(t){let e,n,r,i;const s=[Fa,La],o=[];function a(u,l){return u[0]!==null?0:1}e=a(t),n=o[e]=s[e](t);const c={c:function(){n.c(),r=lr()},m:function(l,f){o[e].m(l,f),X(l,r,f),i=!0},p:function(l,f){let m=e;e=a(l),e===m?o[e].p(l,f):(Ut(),Y(o[m],1,1,()=>{o[m]=null}),Bt(),n=o[e],n?n.p(l,f):(n=o[e]=s[e](l),n.c()),$(n,1),n.m(r.parentNode,r))},i:function(l){i||($(n),i=!0)},o:function(l){Y(n),i=!1},d:function(l){o[e].d(l),l&&Q(r)}};return j("SvelteRegisterBlock",{block:c,id:ja.name,type:"slot",source:"(98:1) <Router {primary}>",ctx:t}),c}function vi(t){let e,n,r,i,s,o=t[2]&&gi(t);const a={c:function(){e=N("div"),n=K(),o&&o.c(),r=K(),i=N("div"),$r(e,"display","none"),E(e,"aria-hidden","true"),E(e,"data-svnav-route-start",t[5]),D(e,Ks,95,0,2622),$r(i,"display","none"),E(i,"aria-hidden","true"),E(i,"data-svnav-route-end",t[5]),D(i,Ks,121,0,3295)},l:function(u){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(u,l){X(u,e,l),X(u,n,l),o&&o.m(u,l),X(u,r,l),X(u,i,l),s=!0},p:function(u,[l]){u[2]?o?(o.p(u,l),l&4&&$(o,1)):(o=gi(u),o.c(),$(o,1),o.m(r.parentNode,r)):o&&(Ut(),Y(o,1,1,()=>{o=null}),Bt())},i:function(u){s||($(o),s=!0)},o:function(u){Y(o),s=!1},d:function(u){u&&Q(e),u&&Q(n),o&&o.d(u),u&&Q(r),u&&Q(i)}};return j("SvelteRegisterBlock",{block:a,id:vi.name,type:"component",source:"",ctx:t}),a}const qs=Er();function qd(t,e,n){let r;const i=["path","component","meta","primary"];let s=qn(e,i),o,a,c,u,{$$slots:l={},$$scope:f}=e;qe("Route",l,["default"]);let{path:m=""}=e,{component:h=null}=e,{meta:y={}}=e,{primary:C=!0}=e;bt(pn,e);const v=qs(),{registerRoute:d,unregisterRoute:_,activeRoute:A}=Ce(st);ne(A,"activeRoute"),re(t,A,p=>n(15,o=p));const I=pi();ne(I,"parentBase"),re(t,I,p=>n(16,c=p));const O=at();ne(O,"location"),re(t,O,p=>n(3,a=p));const w=ce(null);let k;const R=ce(),T=ce({});ne(T,"params"),re(t,T,p=>n(4,u=p)),pt(ai,R),pt(Us,T),pt(Bs,w);const g=Gt();return Pe||hs(()=>_(v)),t.$$set=p=>{n(23,e=Re(Re({},e),Gn(p))),n(11,s=qn(e,i)),"path"in p&&n(12,m=p.path),"component"in p&&n(0,h=p.component),"meta"in p&&n(13,y=p.meta),"primary"in p&&n(1,C=p.primary),"$$scope"in p&&n(18,f=p.$$scope)},t.$capture_state=()=>({createCounter:Er,createId:qs,getContext:Ce,onDestroy:hs,setContext:pt,writable:ce,get:yt,Router:Ir,ROUTER:st,ROUTE:ai,ROUTE_PARAMS:Us,FOCUS_ELEM:Bs,useLocation:at,useNavigate:Gt,useRouteBase:pi,usePreflightCheck:bt,isSSR:Pe,extractBaseUri:Fs,join:Kt,ROUTE_ID:pn,path:m,component:h,meta:y,primary:C,id:v,registerRoute:d,unregisterRoute:_,activeRoute:A,parentBase:I,location:O,focusElement:w,ssrMatch:k,route:R,params:T,navigate:g,isActive:r,$activeRoute:o,$location:a,$parentBase:c,$params:u}),t.$inject_state=p=>{n(23,e=Re(Re({},e),p)),"path"in e&&n(12,m=p.path),"component"in e&&n(0,h=p.component),"meta"in e&&n(13,y=p.meta),"primary"in e&&n(1,C=p.primary),"ssrMatch"in e&&n(14,k=p.ssrMatch),"isActive"in e&&n(2,r=p.isActive)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{if(t.$$.dirty&77834){const p=m==="",S=Kt(c,m),x={id:v,path:m,meta:y,default:p,fullPath:p?"":S,base:p?c:Fs(S,a.pathname),primary:C,focusElement:w};R.set(x),n(14,k=d(x))}if(t.$$.dirty&49152&&n(2,r=!!(k||o&&o.id===v)),t.$$.dirty&49156&&r){const{params:p}=k||o;T.set(p)}},e=Gn(e),[h,C,r,a,u,v,A,I,O,T,g,s,m,y,k,o,c,l,f]}class Fn extends $e{constructor(e){super(e),Ge(this,e,qd,vi,Ue,{path:12,component:0,meta:13,primary:1}),j("SvelteRegisterComponent",{component:this,tagName:"Route",options:e,id:vi.name})}get path(){throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set path(e){throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get component(){throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set component(e){throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get meta(){throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set meta(e){throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get primary(){throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set primary(e){throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const $d="D:/git projects/wsChatApp/frontend/node_modules/.pnpm/svelte-navigator@3.1.6_svelte@3.47.0+typescript@4.6.3/node_modules/svelte-navigator/src/Link.svelte";function yi(t){let e,n,r,i;const s=t[13].default,o=Ci(s,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],c={};for(let l=0;l<a.length;l+=1)c=Re(c,a[l]);const u={c:function(){e=N("a"),o&&o.c(),fs(e,c),D(e,$d,63,0,1735)},l:function(f){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(f,m){X(f,e,m),o&&o.m(e,null),n=!0,r||(i=vn(e,"click",t[4],!1,!1,!1),r=!0)},p:function(f,[m]){o&&o.p&&(!n||m&4096)&&Oi(o,s,f,f[12],n?Pi(s,f[12],m,null):Di(f[12]),null),fs(e,c=Eo(a,[(!n||m&1)&&{href:f[0]},m&4&&f[2],m&2&&f[1]]))},i:function(f){n||($(o,f),n=!0)},o:function(f){Y(o,f),n=!1},d:function(f){f&&Q(e),o&&o.d(f),r=!1,i()}};return j("SvelteRegisterBlock",{block:u,id:yi.name,type:"component",source:"",ctx:t}),u}function Jd(t,e,n){let r,i,s,o,a;const c=["to","replace","state","getProps"];let u=qn(e,c),l,{$$slots:f={},$$scope:m}=e;qe("Link",f,["default"]);let{to:h}=e,{replace:y=!1}=e,{state:C={}}=e,{getProps:v=null}=e;bt(rr,e);const d=at();ne(d,"location"),re(t,d,w=>n(11,l=w));const _=Jn(),A=mi(),{navigate:I}=hi();function O(w){_("click",w),Ns(w)&&(w.preventDefault(),I(r,{state:C,replace:s||y}))}return t.$$set=w=>{n(18,e=Re(Re({},e),Gn(w))),n(17,u=qn(e,c)),"to"in w&&n(5,h=w.to),"replace"in w&&n(6,y=w.replace),"state"in w&&n(7,C=w.state),"getProps"in w&&n(8,v=w.getProps),"$$scope"in w&&n(12,m=w.$$scope)},t.$capture_state=()=>({createEventDispatcher:Jn,useLocation:at,useResolve:mi,useHistory:hi,usePreflightCheck:bt,shouldNavigate:Ns,isFunction:oi,startsWith:tr,LINK_ID:rr,to:h,replace:y,state:C,getProps:v,location:d,dispatch:_,resolve:A,navigate:I,onClick:O,href:r,isCurrent:s,isPartiallyCurrent:i,props:a,ariaCurrent:o,$location:l}),t.$inject_state=w=>{n(18,e=Re(Re({},e),w)),"to"in e&&n(5,h=w.to),"replace"in e&&n(6,y=w.replace),"state"in e&&n(7,C=w.state),"getProps"in e&&n(8,v=w.getProps),"href"in e&&n(0,r=w.href),"isCurrent"in e&&n(9,s=w.isCurrent),"isPartiallyCurrent"in e&&n(10,i=w.isPartiallyCurrent),"props"in e&&n(1,a=w.props),"ariaCurrent"in e&&n(2,o=w.ariaCurrent)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&2080&&n(0,r=A(h,l)),t.$$.dirty&2049&&n(10,i=tr(l.pathname,r)),t.$$.dirty&2049&&n(9,s=r===l.pathname),t.$$.dirty&512&&n(2,o=s?{"aria-current":"page"}:{}),n(1,a=(()=>{if(oi(v)){const w=v({location:l,href:r,isPartiallyCurrent:i,isCurrent:s});return _e(_e({},u),w)}return u})())},e=Gn(e),[r,a,o,d,O,h,y,C,v,s,i,l,m,f]}class kr extends $e{constructor(e){super(e),Ge(this,e,Jd,yi,Ue,{to:5,replace:6,state:7,getProps:8}),j("SvelteRegisterComponent",{component:this,tagName:"Link",options:e,id:yi.name});const{ctx:n}=this.$$,r=e.props||{};n[5]===void 0&&!("to"in r)&&console.warn("<Link> was created without expected prop 'to'")}get to(){throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set to(e){throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get replace(){throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set replace(e){throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get state(){throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set state(e){throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get getProps(){throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set getProps(e){throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const me="D:/git projects/wsChatApp/frontend/src/pages/Chat.svelte";function $s(t,e,n){const r=t.slice();return r[10]=e[n],r}function Js(t,e,n){const r=t.slice();return r[13]=e[n],r}function _i(t){let e,n;e=new Ea({props:{data:t[13]},$$inline:!0});const r={c:function(){ye(e.$$.fragment)},m:function(s,o){he(e,s,o),n=!0},p:function(s,o){const a={};o&2&&(a.data=s[13]),e.$set(a)},i:function(s){n||($(e.$$.fragment,s),n=!0)},o:function(s){Y(e.$$.fragment,s),n=!1},d:function(s){pe(e,s)}};return j("SvelteRegisterBlock",{block:r,id:_i.name,type:"each",source:"(69:16) {#each $users as user}",ctx:t}),r}function wi(t){let e,n;e=new ba({props:{wsm:t[0],data:t[10]},$$inline:!0});const r={c:function(){ye(e.$$.fragment)},m:function(s,o){he(e,s,o),n=!0},p:function(s,o){const a={};o&1&&(a.wsm=s[0]),o&4&&(a.data=s[10]),e.$set(a)},i:function(s){n||($(e.$$.fragment,s),n=!0)},o:function(s){Y(e.$$.fragment,s),n=!1},d:function(s){pe(e,s)}};return j("SvelteRegisterBlock",{block:r,id:wi.name,type:"each",source:"(75:12) {#each $messages as message}",ctx:t}),r}function bi(t){let e,n,r,i,s,o,a,c,u,l,f,m,h,y,C,v,d,_,A,I,O,w,k,R,T=t[1];Cn(T);let g=[];for(let F=0;F<T.length;F+=1)g[F]=_i(Js(t,T,F));const p=F=>Y(g[F],1,1,()=>{g[F]=null});let S=t[2];Cn(S);let x=[];for(let F=0;F<S.length;F+=1)x[F]=wi($s(t,S,F));const M=F=>Y(x[F],1,1,()=>{x[F]=null}),H={c:function(){e=N("div"),n=N("header"),r=N("h1"),r.textContent="Blitz",i=K(),s=N("main"),o=N("div"),a=N("h3"),a.textContent="Room Name:",c=K(),u=N("h2"),u.textContent="Test",l=K(),f=N("h3"),f.textContent="Users",m=K(),h=N("div");for(let V=0;V<g.length;V+=1)g[V].c();y=K(),C=N("div");for(let V=0;V<x.length;V+=1)x[V].c();v=K(),d=N("div"),_=N("form"),A=N("input"),I=K(),O=N("button"),O.textContent="Send",D(r,me,57,8,2077),E(n,"class","chat-header"),D(n,me,56,4,2039),D(a,me,64,12,2313),E(u,"id","room-name"),D(u,me,65,12,2346),D(f,me,66,12,2388),E(h,"id","users"),D(h,me,67,12,2416),E(o,"class","chat-sidebar"),D(o,me,63,8,2273),E(C,"class","chat-messages"),D(C,me,73,8,2586),E(s,"class","chat-main"),D(s,me,62,4,2239),E(A,"id","msg"),E(A,"type","text"),E(A,"placeholder","Enter Message"),A.required=!0,E(A,"autocomplete","off"),D(A,me,82,12,2866),E(O,"class","btn"),D(O,me,89,12,3064),E(_,"id","chat-form"),D(_,me,81,8,2810),E(d,"class","chat-form-container"),D(d,me,80,4,2767),E(e,"class","chat-container"),D(e,me,55,0,2005)},l:function(V){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(V,B){X(V,e,B),b(e,n),b(n,r),b(e,i),b(e,s),b(s,o),b(o,a),b(o,c),b(o,u),b(o,l),b(o,f),b(o,m),b(o,h);for(let U=0;U<g.length;U+=1)g[U].m(h,null);b(s,y),b(s,C);for(let U=0;U<x.length;U+=1)x[U].m(C,null);b(e,v),b(e,d),b(d,_),b(_,A),b(_,I),b(_,O),w=!0,k||(R=vn(_,"submit",t[4],!1,!1,!1),k=!0)},p:function(V,[B]){if(B&2){T=V[1],Cn(T);let U;for(U=0;U<T.length;U+=1){const P=Js(V,T,U);g[U]?(g[U].p(P,B),$(g[U],1)):(g[U]=_i(P),g[U].c(),$(g[U],1),g[U].m(h,null))}for(Ut(),U=T.length;U<g.length;U+=1)p(U);Bt()}if(B&5){S=V[2],Cn(S);let U;for(U=0;U<S.length;U+=1){const P=$s(V,S,U);x[U]?(x[U].p(P,B),$(x[U],1)):(x[U]=wi(P),x[U].c(),$(x[U],1),x[U].m(C,null))}for(Ut(),U=S.length;U<x.length;U+=1)M(U);Bt()}},i:function(V){if(!w){for(let B=0;B<T.length;B+=1)$(g[B]);for(let B=0;B<S.length;B+=1)$(x[B]);w=!0}},o:function(V){g=g.filter(Boolean);for(let B=0;B<g.length;B+=1)Y(g[B]);x=x.filter(Boolean);for(let B=0;B<x.length;B+=1)Y(x[B]);w=!1},d:function(V){V&&Q(e),ls(g,V),ls(x,V),k=!1,R()}};return j("SvelteRegisterBlock",{block:H,id:bi.name,type:"component",source:"",ctx:t}),H}function Yd(t,e,n){let r,i,s,o,a;ne(fe,"client"),re(t,fe,v=>n(5,r=v)),ne(Qe,"keys"),re(t,Qe,v=>n(6,i=v)),ne(Fe,"users"),re(t,Fe,v=>n(1,s=v)),ne(Te,"messages"),re(t,Te,v=>n(2,a=v));let{$$slots:c={},$$scope:u}=e;qe("Chat",c,[]);const l=Gt(),f=at();ne(f,"location"),re(t,f,v=>n(7,o=v));let{wsm:m}=e;r.signedIn||l("/",{state:{from:o.pathname},replace:!0}),$n(()=>{const v=document.getElementById("msg");document.body.addEventListener("focus",()=>(ve.logc("CHAT_FOCUS","#A020F0"),v.focus())),v.focus()}),ds(()=>{const v=document.querySelector(".chat-messages");v.scrollTo(0,v.scrollHeight)});async function h(v){const d=[],_=s;for(let A=0;A<_.length;A++){const I=await He.deriveKey(_[A].publicKeyJwk,i.privateKeyJwk),O=await He.encrypt(v,I,i.iv),w=_[A].id;d.push(new Os(O,w).serialize())}return d}async function y(v){v.preventDefault();let d=v.target.elements.msg.value;if(d=d.trim(),!d)return;v.target.elements.msg.value="",v.target.elements.msg.focus();const _=[{senderId:r.id,timestamp:Date.now(),data:await h(d)}];m.send(new ee({type:ee.types.MESSAGE_CREATE,data:_}))}const C=["wsm"];return Object.keys(e).forEach(v=>{!~C.indexOf(v)&&v.slice(0,2)!=="$$"&&v!=="slot"&&console.warn(`<Chat> was created with unknown prop '${v}'`)}),t.$$set=v=>{"wsm"in v&&n(0,m=v.wsm)},t.$capture_state=()=>({ChatMsg:ba,Users:Ea,Message:ee,onMount:$n,afterUpdate:ds,client:fe,keys:Qe,messages:Te,users:Fe,CryptoClient:He,EncryptedMessage:Os,Logger:ve,useNavigate:Gt,useLocation:at,navigate:l,location:f,wsm:m,encryptMessage:h,onSubmit:y,$client:r,$keys:i,$users:s,$location:o,$messages:a}),t.$inject_state=v=>{"wsm"in v&&n(0,m=v.wsm)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[m,s,a,f,y]}class Ha extends $e{constructor(e){super(e),Ge(this,e,Yd,bi,Ue,{wsm:0}),j("SvelteRegisterComponent",{component:this,tagName:"Chat",options:e,id:bi.name});const{ctx:n}=this.$$,r=e.props||{};n[0]===void 0&&!("wsm"in r)&&console.warn("<Chat> was created without expected prop 'wsm'")}get wsm(){throw new Error("<Chat>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set wsm(e){throw new Error("<Chat>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function $i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Va(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xd=Va,Wa=new yn("auth","Firebase",Va());/**
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
 */const Ys=new Ao("@firebase/auth");function jn(t,...e){Ys.logLevel<=Z.ERROR&&Ys.error(`Auth (${fr}): ${t}`,...e)}/**
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
 */function xe(t,...e){throw Ji(t,...e)}function Oe(t,...e){return Ji(t,...e)}function Qd(t,e,n){const r=Object.assign(Object.assign({},Xd()),{[e]:n});return new yn("auth","Firebase",r).create(e,{appName:t.name})}function Ji(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wa.create(t,...e)}function L(t,e,...n){if(!t)throw Ji(e,...n)}function We(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jn(e),new Error(e)}function Ke(t,e){t||We(e)}/**
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
 */const Xs=new Map;function ze(t){Ke(t instanceof Function,"Expected a class definition");let e=Xs.get(t);return e?(Ke(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xs.set(t,e),e)}/**
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
 */function Zd(t,e){const n=Co(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yn(s,e!=null?e:{}))return i;xe(i,"already-initialized")}return n.initialize({options:e})}function eh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ze);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ei(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function th(){return Qs()==="http:"||Qs()==="https:"}function Qs(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nh(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(th()||Yc()||"connection"in navigator)?navigator.onLine:!0}function rh(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class bn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ke(n>e,"Short delay should be less than long delay!"),this.isMobile=Jc()||Xc()}get(){return nh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yi(t,e){Ke(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class za{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;We("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;We("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;We("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ih={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const sh=new bn(3e4,6e4);function En(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zt(t,e,n,r,i={}){return Ka(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=_n(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),za.fetch()(Ga(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ka(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ih),e);try{const i=new oh(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Dn(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Dn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Dn(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qd(t,l,u);xe(t,l)}}catch(i){if(i instanceof Yt)throw i;xe(t,"network-request-failed")}}async function In(t,e,n,r,i={}){const s=await Zt(t,e,n,r,i);return"mfaPendingCredential"in s&&xe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ga(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Yi(t.config,i):`${t.config.apiScheme}://${i}`}class oh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Oe(this.auth,"network-request-failed")),sh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Oe(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function ah(t,e){return Zt(t,"POST","/v1/accounts:delete",e)}async function ch(t,e){return Zt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ln(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uh(t,e=!1){const n=kt(t),r=await n.getIdToken(e),i=Xi(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ln(Gr(i.auth_time)),issuedAtTime:ln(Gr(i.iat)),expirationTime:ln(Gr(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Gr(t){return Number(t)*1e3}function Xi(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return jn("JWT malformed, contained fewer than 3 sections"),null;try{const s=qc(r);return s?JSON.parse(s):(jn("Failed to decode base64 JWT payload"),null)}catch(s){return jn("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function lh(t){const e=Xi(t);return L(e,"internal-error"),L(typeof e.exp!="undefined","internal-error"),L(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yt&&fh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ln(this.lastLoginAt),this.creationTime=ln(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sr(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qt(t,ch(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?mh(s.providerUserInfo):[],a=ph(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qa(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,f)}async function hh(t){const e=kt(t);await sr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ph(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function mh(t){return t.map(e=>{var{providerId:n}=e,r=$i(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function gh(t,e){const n=await Ka(t,{},async()=>{const r=_n({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ga(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",za.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken!="undefined","internal-error"),L(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):lh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gh(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new mn;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mn,this.toJSON())}_performRefresh(){return We("not implemented")}}/**
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
 */function Xe(t,e){L(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class vt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qt(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uh(this,e)}reload(){return hh(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qt(this,ah(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,l;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,_=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:A,emailVerified:I,isAnonymous:O,providerData:w,stsTokenManager:k}=n;L(A&&k,e,"internal-error");const R=mn.fromJSON(this.name,k);L(typeof A=="string",e,"internal-error"),Xe(f,e.name),Xe(m,e.name),L(typeof I=="boolean",e,"internal-error"),L(typeof O=="boolean",e,"internal-error"),Xe(h,e.name),Xe(y,e.name),Xe(C,e.name),Xe(v,e.name),Xe(d,e.name),Xe(_,e.name);const T=new vt({uid:A,auth:e,email:m,emailVerified:I,displayName:f,isAnonymous:O,photoURL:y,phoneNumber:h,tenantId:C,stsTokenManager:R,createdAt:d,lastLoginAt:_});return w&&Array.isArray(w)&&(T.providerData=w.map(g=>Object.assign({},g))),v&&(T._redirectEventId=v),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new mn;i.updateFromServerResponse(n);const s=new vt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await sr(s),s}}/**
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
 */class $a{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$a.type="NONE";const Zs=$a;/**
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
 */function Hn(t,e,n){return`firebase:${t}:${e}:${n}`}class Dt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hn(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hn("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Dt(ze(Zs),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ze(Zs);const o=Hn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const f=vt._fromJSON(e,l);u!==s&&(a=f),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Dt(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Dt(s,e,r))}}/**
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
 */function eo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ja(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Za(e))return"Blackberry";if(ec(e))return"Webos";if(Qi(e))return"Safari";if((e.includes("chrome/")||Ya(e))&&!e.includes("edge/"))return"Chrome";if(Qa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ja(t=ue()){return/firefox\//i.test(t)}function Qi(t=ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ya(t=ue()){return/crios\//i.test(t)}function Xa(t=ue()){return/iemobile/i.test(t)}function Qa(t=ue()){return/android/i.test(t)}function Za(t=ue()){return/blackberry/i.test(t)}function ec(t=ue()){return/webos/i.test(t)}function Sr(t=ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vh(t=ue()){var e;return Sr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yh(){return Qc()&&document.documentMode===10}function tc(t=ue()){return Sr(t)||Qa(t)||ec(t)||Za(t)||/windows phone/i.test(t)||Xa(t)}function _h(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function nc(t,e=[]){let n;switch(t){case"Browser":n=eo(ue());break;case"Worker":n=`${eo(ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fr}/${r}`}/**
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
 */class wh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class bh{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new to(this),this.idTokenSubscription=new to(this),this.beforeStateQueue=new wh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ze(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Dt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await sr(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?kt(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ze(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ze(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Dt.create(this,[ze(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ar(t){return kt(t)}class to{constructor(e){this.auth=e,this.observer=null,this.addObserver=su(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Zi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return We("not implemented")}_getIdTokenResponse(e){return We("not implemented")}_linkToIdToken(e,n){return We("not implemented")}_getReauthenticationResolver(e){return We("not implemented")}}async function Eh(t,e){return Zt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ih(t,e){return In(t,"POST","/v1/accounts:signInWithPassword",En(t,e))}/**
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
 */async function kh(t,e){return In(t,"POST","/v1/accounts:signInWithEmailLink",En(t,e))}async function Sh(t,e){return In(t,"POST","/v1/accounts:signInWithEmailLink",En(t,e))}/**
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
 */class gn extends Zi{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new gn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new gn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ih(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kh(e,{email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Eh(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Sh(e,{idToken:n,email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Nt(t,e){return In(t,"POST","/v1/accounts:signInWithIdp",En(t,e))}/**
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
 */const Ah="http://localhost";class Et extends Zi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$i(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Et(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Nt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Nt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nt(e,n)}buildRequest(){const e={requestUri:Ah,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_n(n)}return e}}/**
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
 */function Rh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xh(t){const e=sn(on(t)).link,n=e?sn(on(e)).deep_link_id:null,r=sn(on(t)).deep_link_id;return(r?sn(on(r)).link:null)||r||n||e||t}class es{constructor(e){var n,r,i,s,o,a;const c=sn(on(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Rh((i=c.mode)!==null&&i!==void 0?i:null);L(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=xh(e);try{return new es(n)}catch{return null}}}/**
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
 */class en{constructor(){this.providerId=en.PROVIDER_ID}static credential(e,n){return gn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=es.parseLink(n);return L(r,"argument-error"),gn._fromEmailAndCode(e,r.code,r.tenantId)}}en.PROVIDER_ID="password";en.EMAIL_PASSWORD_SIGN_IN_METHOD="password";en.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class rc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kn extends rc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ze extends kn{constructor(){super("facebook.com")}static credential(e){return Et._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ze.PROVIDER_ID="facebook.com";/**
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
 */class et extends kn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Et._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return et.credential(n,r)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
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
 */class tt extends kn{constructor(){super("github.com")}static credential(e){return Et._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.GITHUB_SIGN_IN_METHOD="github.com";tt.PROVIDER_ID="github.com";/**
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
 */class nt extends kn{constructor(){super("twitter.com")}static credential(e,n){return Et._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nt.credential(n,r)}catch{return null}}}nt.TWITTER_SIGN_IN_METHOD="twitter.com";nt.PROVIDER_ID="twitter.com";/**
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
 */async function Th(t,e){return In(t,"POST","/v1/accounts:signUp",En(t,e))}/**
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
 */class It{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await vt._fromIdTokenResponse(e,r,i),o=no(r);return new It({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=no(r);return new It({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function no(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class or extends Yt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,or.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new or(e,n,r,i)}}function ic(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?or._fromErrorAndOperation(t,s,e,r):s})}async function Ch(t,e,n=!1){const r=await qt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return It._forOperation(t,"link",r)}/**
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
 */async function Ph(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await qt(t,ic(i,s,e,t),n);L(o.idToken,i,"internal-error");const a=Xi(o.idToken);L(a,i,"internal-error");const{sub:c}=a;return L(t.uid===c,i,"user-mismatch"),It._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&xe(i,"user-mismatch"),o}}/**
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
 */async function sc(t,e,n=!1){const r="signIn",i=await ic(t,r,e),s=await It._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Oh(t,e){return sc(Ar(t),e)}async function Dh(t,e,n){const r=Ar(t),i=await Th(r,{returnSecureToken:!0,email:e,password:n}),s=await It._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Nh(t,e,n){return Oh(kt(t),en.credential(e,n))}/**
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
 */async function Uh(t,e){return Zt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ro(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=kt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await qt(r,Uh(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Bh(t){return kt(t).signOut()}const ar="__sak";/**
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
 */class oc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ar,"1"),this.storage.removeItem(ar),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Mh(){const t=ue();return Qi(t)||Sr(t)}const Lh=1e3,Fh=10;class ac extends oc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mh()&&_h(),this.fallbackToPolling=tc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yh()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Fh):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Lh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ac.type="LOCAL";const jh=ac;/**
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
 */class cc extends oc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cc.type="SESSION";const uc=cc;/**
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
 */function Hh(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Rr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Rr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await Hh(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rr.receivers=[];/**
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
 */function ts(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Vh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=ts("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function De(){return window}function Wh(t){De().location.href=t}/**
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
 */function lc(){return typeof De().WorkerGlobalScope!="undefined"&&typeof De().importScripts=="function"}async function zh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Gh(){return lc()?self:null}/**
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
 */const fc="firebaseLocalStorageDb",qh=1,cr="firebaseLocalStorage",dc="fbase_key";class Sn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xr(t,e){return t.transaction([cr],e?"readwrite":"readonly").objectStore(cr)}function $h(){const t=indexedDB.deleteDatabase(fc);return new Sn(t).toPromise()}function Ii(){const t=indexedDB.open(fc,qh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cr,{keyPath:dc})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cr)?e(r):(r.close(),await $h(),e(await Ii()))})})}async function io(t,e,n){const r=xr(t,!0).put({[dc]:e,value:n});return new Sn(r).toPromise()}async function Jh(t,e){const n=xr(t,!1).get(e),r=await new Sn(n).toPromise();return r===void 0?null:r.value}function so(t,e){const n=xr(t,!0).delete(e);return new Sn(n).toPromise()}const Yh=800,Xh=3;class hc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ii(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Xh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rr._getInstance(Gh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zh(),!this.activeServiceWorker)return;this.sender=new Vh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ii();return await io(e,ar,"1"),await so(e,ar),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>io(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Jh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>so(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xr(i,!1).getAll();return new Sn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hc.type="LOCAL";const Qh=hc;/**
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
 */function Zh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ep(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Oe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Zh().appendChild(r)})}function tp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new bn(3e4,6e4);/**
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
 */function np(t,e){return e?ze(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ns extends Zi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rp(t){return sc(t.auth,new ns(t),t.bypassAuthState)}function ip(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Ph(n,new ns(t),t.bypassAuthState)}async function sp(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Ch(n,new ns(t),t.bypassAuthState)}/**
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
 */class pc{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rp;case"linkViaPopup":case"linkViaRedirect":return sp;case"reauthViaPopup":case"reauthViaRedirect":return ip;default:xe(this.auth,"internal-error")}}resolve(e){Ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const op=new bn(2e3,1e4);class Pt extends pc{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pt.currentPopupAction&&Pt.currentPopupAction.cancel(),Pt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Ke(this.filter.length===1,"Popup operations only handle one event");const e=ts();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Oe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Oe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Oe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,op.get())};e()}}Pt.currentPopupAction=null;/**
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
 */const ap="pendingRedirect",Vn=new Map;class cp extends pc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vn.get(this.auth._key());if(!e){try{const r=await up(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vn.set(this.auth._key(),e)}return this.bypassAuthState||Vn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function up(t,e){const n=dp(e),r=fp(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function lp(t,e){Vn.set(t._key(),e)}function fp(t){return ze(t._redirectPersistence)}function dp(t){return Hn(ap,t.config.apiKey,t.name)}async function hp(t,e,n=!1){const r=Ar(t),i=np(r,e),o=await new cp(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const pp=10*60*1e3;class mp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mc(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Oe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pp&&this.cachedEventUids.clear(),this.cachedEventUids.has(oo(e))}saveEventToCache(e){this.cachedEventUids.add(oo(e)),this.lastProcessedEventTime=Date.now()}}function oo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mc(t);default:return!1}}/**
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
 */async function vp(t,e={}){return Zt(t,"GET","/v1/projects",e)}/**
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
 */const yp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_p=/^https?/;async function wp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vp(t);for(const n of e)try{if(bp(n))return}catch{}xe(t,"unauthorized-domain")}function bp(t){const e=Ei(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_p.test(n))return!1;if(yp.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Ep=new bn(3e4,6e4);function ao(){const t=De().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ip(t){return new Promise((e,n)=>{var r,i,s;function o(){ao(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ao(),n(Oe(t,"network-request-failed"))},timeout:Ep.get()})}if(!((i=(r=De().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=De().gapi)===null||s===void 0)&&s.load)o();else{const a=tp("iframefcb");return De()[a]=()=>{gapi.load?o():n(Oe(t,"network-request-failed"))},ep(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Wn=null,e})}let Wn=null;function kp(t){return Wn=Wn||Ip(t),Wn}/**
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
 */const Sp=new bn(5e3,15e3),Ap="__/auth/iframe",Rp="emulator/auth/iframe",xp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cp(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yi(e,Rp):`https://${t.config.authDomain}/${Ap}`,r={apiKey:e.apiKey,appName:t.name,v:fr},i=Tp.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_n(r).slice(1)}`}async function Pp(t){const e=await kp(t),n=De().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:Cp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xp,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Oe(t,"network-request-failed"),a=De().setTimeout(()=>{s(o)},Sp.get());function c(){De().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Op={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dp=500,Np=600,Up="_blank",Bp="http://localhost";class co{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mp(t,e,n,r=Dp,i=Np){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Op),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ue().toLowerCase();n&&(a=Ya(u)?Up:n),Ja(u)&&(e=e||Bp,c.scrollbars="yes");const l=Object.entries(c).reduce((m,[h,y])=>`${m}${h}=${y},`,"");if(vh(u)&&a!=="_self")return Lp(e||"",a),new co(null);const f=window.open(e||"",a,l);L(f,t,"popup-blocked");try{f.focus()}catch{}return new co(f)}function Lp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Fp="__/auth/handler",jp="emulator/auth/handler";function uo(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fr,eventId:i};if(e instanceof rc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof kn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Hp(t)}?${_n(a).slice(1)}`}function Hp({config:t}){return t.emulator?Yi(t,jp):`https://${t.authDomain}/${Fp}`}/**
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
 */const qr="webStorageSupport";class Vp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uc,this._completeRedirectFn=hp,this._overrideRedirectResult=lp}async _openPopup(e,n,r,i){var s;Ke((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=uo(e,n,r,Ei(),i);return Mp(e,o,ts())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Wh(uo(e,n,r,Ei(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ke(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Pp(e),r=new mp(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qr,{type:qr},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[qr];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tc()||Qi()||Sr()}}const Wp=Vp;var lo="@firebase/auth",fo="0.20.5";/**
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
 */class zp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Kp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Gp(t){dn(new Mt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{L(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),L(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nc(t)},l=new bh(a,c,u);return eh(l,n),l})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dn(new Mt("auth-internal",e=>{const n=Ar(e.getProvider("auth").getImmediate());return(r=>new zp(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(lo,fo,Kp(t)),Ot(lo,fo,"esm2017")}/**
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
 */function Nn(t=sl()){const e=Co(t,"auth");return e.isInitialized()?e.getImmediate():Zd(t,{popupRedirectResolver:Wp,persistence:[Qh,jh,uc]})}Gp("Browser");class ur{static async update(e){const r=Nn().currentUser;if(!r)return console.log("Auth user update error, not signed in");try{await ro(r,{displayName:e})}catch(i){return console.log("Auth user update error"),console.log(i),i.code}return!0}static async signUp(e,n,r){const i=Nn();let s;try{s=await Dh(i,n,r),await ro(i.currentUser,{displayName:e})}catch(a){return console.log("Auth signup error"),console.log(a),{error:!0,detail:a.code}}const o=s.user;return{error:!1,detail:o}}static async signIn(e,n){const r=Nn();let i;try{i=await Nh(r,e,n)}catch(o){return console.log("Auth signin error"),console.log(),{error:!0,detail:o.code}}const s=i.user;return{error:!1,detail:s}}static async signOut(){const e=Nn();try{await Bh(e)}catch(n){console.log("Auth signout error"),console.log(n)}}}const ge="D:/git projects/wsChatApp/frontend/src/pages/SignIn.svelte";function ki(t){let e,n=t[0].detail.split("/")[1].split("-").join(" ")+"",r;const i={c:function(){e=N("div"),r=de(n),E(e,"class","join-main-error"),D(e,ge,35,12,1158)},m:function(o,a){X(o,e,a),b(e,r)},p:function(o,a){a&1&&n!==(n=o[0].detail.split("/")[1].split("-").join(" ")+"")&&gt(r,n)},d:function(o){o&&Q(e)}};return j("SvelteRegisterBlock",{block:i,id:ki.name,type:"if",source:"(35:8) {#if user && user.error}",ctx:t}),i}function gc(t){let e;const n={c:function(){e=de("sign up")},m:function(i,s){X(i,e,s)},d:function(i){i&&Q(e)}};return j("SvelteRegisterBlock",{block:n,id:gc.name,type:"slot",source:'(63:51) <Link to=\\"/signup\\">',ctx:t}),n}function Si(t){let e,n,r,i,s,o,a,c,u,l,f,m,h,y,C,v,d,_,A,I,O,w,k,R,T,g,p=t[0]&&t[0].error&&ki(t);k=new kr({props:{to:"/signup",$$slots:{default:[gc]},$$scope:{ctx:t}},$$inline:!0});const S={c:function(){e=N("div"),n=N("header"),r=N("h1"),i=N("i"),s=de("Blitz"),o=K(),a=N("main"),p&&p.c(),c=K(),u=N("form"),l=N("div"),f=N("label"),f.textContent="Email",m=K(),h=N("input"),y=K(),C=N("label"),C.textContent="Password",v=K(),d=N("input"),_=K(),A=N("button"),A.textContent="Sign In",I=K(),O=N("div"),w=de("Don't have an Account? "),ye(k.$$.fragment),D(i,ge,31,12,1050),D(r,ge,31,8,1046),E(n,"class","join-header"),D(n,ge,30,4,1008),E(f,"for","email"),D(f,ge,41,16,1383),E(h,"type","text"),E(h,"name","email"),E(h,"id","email"),E(h,"placeholder","example@gmail.com"),E(h,"autocomplete","off"),h.required=!0,D(h,ge,42,16,1433),E(C,"for","password"),D(C,ge,50,16,1699),E(d,"type","password"),E(d,"name","password"),E(d,"id","password"),E(d,"placeholder","password"),E(d,"autocomplete","off"),d.required=!0,D(d,ge,51,16,1755),E(l,"class","form-control"),D(l,ge,40,12,1339),E(A,"type","submit"),E(A,"id","signin-btn"),E(A,"class","btn"),D(A,ge,60,12,2038),D(u,ge,39,8,1298),E(O,"class","signup"),D(O,ge,62,8,2131),E(a,"class","join-main"),D(a,ge,33,4,1086),E(e,"class","join-container"),D(e,ge,29,0,974)},l:function(M){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(M,H){X(M,e,H),b(e,n),b(n,r),b(r,i),b(r,s),b(e,o),b(e,a),p&&p.m(a,null),b(a,c),b(a,u),b(u,l),b(l,f),b(l,m),b(l,h),b(l,y),b(l,C),b(l,v),b(l,d),b(u,_),b(u,A),b(a,I),b(a,O),b(O,w),he(k,O,null),R=!0,T||(g=vn(u,"submit",t[2],!1,!1,!1),T=!0)},p:function(M,[H]){M[0]&&M[0].error?p?p.p(M,H):(p=ki(M),p.c(),p.m(a,c)):p&&(p.d(1),p=null);const F={};H&128&&(F.$$scope={dirty:H,ctx:M}),k.$set(F)},i:function(M){R||($(k.$$.fragment,M),R=!0)},o:function(M){Y(k.$$.fragment,M),R=!1},d:function(M){M&&Q(e),p&&p.d(),pe(k),T=!1,g()}};return j("SvelteRegisterBlock",{block:S,id:Si.name,type:"component",source:"",ctx:t}),S}function qp(t,e,n){let r,i;ne(fe,"client"),re(t,fe,h=>n(3,r=h));let{$$slots:s={},$$scope:o}=e;qe("SignIn",s,[]);let a;const c=Gt(),u=at();ne(u,"location"),re(t,u,h=>n(4,i=h)),r.signedIn&&c("/chat",{state:{from:i.pathname},replace:!0});const l=Jn();async function f(h){const y=document.getElementById("signin-btn");h.preventDefault();let C=h.target.email.value,v=h.target.password.value;y.disabled=!0,n(0,a=await ur.signIn(C,v)),a.error||(us(fe,r.signedIn=!0,r),us(fe,r.username=a.detail.displayName,r),l("signin",{username:a.detail.displayName})),y.disabled=!1}const m=[];return Object.keys(e).forEach(h=>{!~m.indexOf(h)&&h.slice(0,2)!=="$$"&&h!=="slot"&&console.warn(`<SignIn> was created with unknown prop '${h}'`)}),t.$capture_state=()=>({createEventDispatcher:Jn,Accounts:ur,client:fe,Link:kr,useNavigate:Gt,useLocation:at,user:a,navigate:c,location:u,dispatch:l,onSubmit:f,$client:r,$location:i}),t.$inject_state=h=>{"user"in h&&n(0,a=h.user)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[a,u,f]}class rs extends $e{constructor(e){super(e),Ge(this,e,qp,Si,Ue,{}),j("SvelteRegisterComponent",{component:this,tagName:"SignIn",options:e,id:Si.name})}}const ae="D:/git projects/wsChatApp/frontend/src/pages/SignUp.svelte";function Ai(t){let e,n=t[0].detail.split("/")[1].split("-").join(" ")+"",r;const i={c:function(){e=N("div"),r=de(n),E(e,"class","join-main-error"),D(e,ae,22,12,727)},m:function(o,a){X(o,e,a),b(e,r)},p:function(o,a){a&1&&n!==(n=o[0].detail.split("/")[1].split("-").join(" ")+"")&&gt(r,n)},d:function(o){o&&Q(e)}};return j("SvelteRegisterBlock",{block:i,id:Ai.name,type:"if",source:"(22:8) {#if user && user.error}",ctx:t}),i}function vc(t){let e;const n={c:function(){e=de("sign in")},m:function(i,s){X(i,e,s)},d:function(i){i&&Q(e)}};return j("SvelteRegisterBlock",{block:n,id:vc.name,type:"slot",source:'(57:53) <Link to=\\"/\\">',ctx:t}),n}function Ri(t){let e,n,r,i,s,o,a,c,u,l,f,m,h,y,C,v,d,_,A,I,O,w,k,R,T,g,p,S,x,M,H=t[0]&&t[0].error&&Ai(t);p=new kr({props:{to:"/",$$slots:{default:[vc]},$$scope:{ctx:t}},$$inline:!0});const F={c:function(){e=N("div"),n=N("header"),r=N("h1"),i=N("i"),s=de("Blitz"),o=K(),a=N("main"),H&&H.c(),c=K(),u=N("form"),l=N("div"),f=N("label"),f.textContent="username",m=K(),h=N("input"),y=K(),C=N("label"),C.textContent="Email",v=K(),d=N("input"),_=K(),A=N("label"),A.textContent="Password",I=K(),O=N("input"),w=K(),k=N("button"),k.textContent="Sign Up",R=K(),T=N("div"),g=de("Already have an Account? "),ye(p.$$.fragment),D(i,ae,18,12,619),D(r,ae,18,8,615),E(n,"class","join-header"),D(n,ae,17,4,577),E(f,"for","username"),D(f,ae,29,16,973),E(h,"type","text"),E(h,"name","username"),E(h,"id","username"),E(h,"placeholder","What should everyone call you"),h.required=!0,D(h,ae,30,16,1029),E(C,"for","email"),D(C,ae,37,16,1273),E(d,"type","text"),E(d,"name","email"),E(d,"id","email"),E(d,"placeholder","example@gmail.com"),d.required=!0,D(d,ae,38,16,1323),E(A,"for","password"),D(A,ae,45,16,1549),E(O,"type","password"),E(O,"name","password"),E(O,"id","password"),E(O,"placeholder","password"),O.required=!0,D(O,ae,46,16,1605),E(l,"class","form-control"),D(l,ae,28,12,929),E(k,"type","submit"),E(k,"class","btn"),D(k,ae,54,12,1848),E(u,"autocomplete","off"),D(u,ae,27,8,869),E(T,"class","signup"),D(T,ae,56,8,1925),E(a,"class","join-main"),D(a,ae,20,4,655),E(e,"class","join-container"),D(e,ae,16,0,543)},l:function(B){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(B,U){X(B,e,U),b(e,n),b(n,r),b(r,i),b(r,s),b(e,o),b(e,a),H&&H.m(a,null),b(a,c),b(a,u),b(u,l),b(l,f),b(l,m),b(l,h),b(l,y),b(l,C),b(l,v),b(l,d),b(l,_),b(l,A),b(l,I),b(l,O),b(u,w),b(u,k),b(a,R),b(a,T),b(T,g),he(p,T,null),S=!0,x||(M=vn(u,"submit",t[1],!1,!1,!1),x=!0)},p:function(B,[U]){B[0]&&B[0].error?H?H.p(B,U):(H=Ai(B),H.c(),H.m(a,c)):H&&(H.d(1),H=null);const P={};U&4&&(P.$$scope={dirty:U,ctx:B}),p.$set(P)},i:function(B){S||($(p.$$.fragment,B),S=!0)},o:function(B){Y(p.$$.fragment,B),S=!1},d:function(B){B&&Q(e),H&&H.d(),pe(p),x=!1,M()}};return j("SvelteRegisterBlock",{block:F,id:Ri.name,type:"component",source:"",ctx:t}),F}function $p(t,e,n){let{$$slots:r={},$$scope:i}=e;qe("SignUp",r,[]);let s;async function o(c){c.preventDefault();let u=c.target.email.value,l=c.target.password.value,f=c.target.username.value;if(f.length>30){n(0,s={error:!0,detail:"auth/username-too-long"});return}n(0,s=await ur.signUp(f,u,l)),s.error||ir("/")}const a=[];return Object.keys(e).forEach(c=>{!~a.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<SignUp> was created with unknown prop '${c}'`)}),t.$capture_state=()=>({Accounts:ur,navigate:ir,Link:kr,user:s,onSubmit:o}),t.$inject_state=c=>{"user"in c&&n(0,s=c.user)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[s,o]}class yc extends $e{constructor(e){super(e),Ge(this,e,$p,Ri,Ue,{}),j("SvelteRegisterComponent",{component:this,tagName:"SignUp",options:e,id:Ri.name})}}const{Object:Jp,console:Yp}=Vc,Xp="D:/git projects/wsChatApp/frontend/src/pages/Main.svelte";function _c(t){let e,n;e=new rs({$$inline:!0}),e.$on("signin",t[3]);const r={c:function(){ye(e.$$.fragment)},m:function(s,o){he(e,s,o),n=!0},p:se,i:function(s){n||($(e.$$.fragment,s),n=!0)},o:function(s){Y(e.$$.fragment,s),n=!1},d:function(s){pe(e,s)}};return j("SvelteRegisterBlock",{block:r,id:_c.name,type:"slot",source:'(97:4) <Route path=\\"/\\">',ctx:t}),r}function wc(t){let e,n;e=new Ha({props:{wsm:t[2]},$$inline:!0}),e.$on("logout",t[4]);const r={c:function(){ye(e.$$.fragment)},m:function(s,o){he(e,s,o),n=!0},p:se,i:function(s){n||($(e.$$.fragment,s),n=!0)},o:function(s){Y(e.$$.fragment,s),n=!1},d:function(s){pe(e,s)}};return j("SvelteRegisterBlock",{block:r,id:wc.name,type:"slot",source:'(100:4) <Route path=\\"/chat\\">',ctx:t}),r}function bc(t){let e,n;e=new rs({$$inline:!0}),e.$on("signin",t[3]);const r={c:function(){ye(e.$$.fragment)},m:function(s,o){he(e,s,o),n=!0},p:se,i:function(s){n||($(e.$$.fragment,s),n=!0)},o:function(s){Y(e.$$.fragment,s),n=!1},d:function(s){pe(e,s)}};return j("SvelteRegisterBlock",{block:r,id:bc.name,type:"if",source:"(107:80) ",ctx:t}),r}function Ec(t){let e;const n={c:function(){e=N("div"),e.textContent="connecting",D(e,Xp,105,8,3674)},m:function(i,s){X(i,e,s)},p:se,i:se,o:se,d:function(i){i&&Q(e)}};return j("SvelteRegisterBlock",{block:n,id:Ec.name,type:"if",source:"(105:4) {#if !wsConnected}",ctx:t}),n}function Ic(t){let e,n,r,i,s,o,a,c,u,l,f;e=new Fn({props:{path:"/",$$slots:{default:[_c]},$$scope:{ctx:t}},$$inline:!0}),r=new Fn({props:{path:"/chat",$$slots:{default:[wc]},$$scope:{ctx:t}},$$inline:!0}),s=new Fn({props:{path:"/signup",component:yc},$$inline:!0});const m=[Ec,bc],h=[];function y(v,d){return d&2&&(a=null),v[0]?(a==null&&(a=!v[1].signedIn&&!window.location.pathname.includes("signup")),a?1:-1):0}~(c=y(t,-1))&&(u=h[c]=m[c](t));const C={c:function(){ye(e.$$.fragment),n=K(),ye(r.$$.fragment),i=K(),ye(s.$$.fragment),o=K(),u&&u.c(),l=lr()},m:function(d,_){he(e,d,_),X(d,n,_),he(r,d,_),X(d,i,_),he(s,d,_),X(d,o,_),~c&&h[c].m(d,_),X(d,l,_),f=!0},p:function(d,_){const A={};_&2048&&(A.$$scope={dirty:_,ctx:d}),e.$set(A);const I={};_&2048&&(I.$$scope={dirty:_,ctx:d}),r.$set(I);let O=c;c=y(d,_),c===O?~c&&h[c].p(d,_):(u&&(Ut(),Y(h[O],1,1,()=>{h[O]=null}),Bt()),~c?(u=h[c],u?u.p(d,_):(u=h[c]=m[c](d),u.c()),$(u,1),u.m(l.parentNode,l)):u=null)},i:function(d){f||($(e.$$.fragment,d),$(r.$$.fragment,d),$(s.$$.fragment,d),$(u),f=!0)},o:function(d){Y(e.$$.fragment,d),Y(r.$$.fragment,d),Y(s.$$.fragment,d),Y(u),f=!1},d:function(d){pe(e,d),d&&Q(n),pe(r,d),d&&Q(i),pe(s,d),d&&Q(o),~c&&h[c].d(d),d&&Q(l)}};return j("SvelteRegisterBlock",{block:C,id:Ic.name,type:"slot",source:"(96:0) <Router>",ctx:t}),C}function xi(t){let e,n;e=new Ir({props:{$$slots:{default:[Ic]},$$scope:{ctx:t}},$$inline:!0});const r={c:function(){ye(e.$$.fragment)},l:function(s){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(s,o){he(e,s,o),n=!0},p:function(s,[o]){const a={};o&2051&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i:function(s){n||($(e.$$.fragment,s),n=!0)},o:function(s){Y(e.$$.fragment,s),n=!1},d:function(s){pe(e,s)}};return j("SvelteRegisterBlock",{block:r,id:xi.name,type:"component",source:"",ctx:t}),r}function Qp(t,e,n){let r,i,s,o;ne(fe,"client"),re(t,fe,d=>n(1,r=d)),ne(Qe,"keys"),re(t,Qe,d=>n(7,i=d)),ne(Te,"messages"),re(t,Te,d=>n(8,s=d)),ne(Fe,"users"),re(t,Fe,d=>n(9,o=d));let{$$slots:a={},$$scope:c}=e;qe("Main",a,[]);let u=!1,l=null,f=null,m=new Ps;const h={CONNECT:d=>{fe.set(Je(_e({},r),{id:d.detail.clientId})),n(0,u=!0),ve.log("connect",r)},JOIN:d=>{const _=d.detail.message;Te.set([...s,_]),Fe.set([...d.detail.users])},USERS:d=>{Fe.set([...d.detail.users])},LEAVE:d=>{const _=d.detail.message;Te.set([...s,_]),Fe.set([...d.detail.users])},MESSAGE_CREATE:async d=>{const _=await He.deriveKey(d.detail.senderPublicKey,i.privateKeyJwk),A=await He.decrypt(d.detail.data,_,i.iv),I=o.find(w=>w.id===d.detail.senderId);if(!I)return ve.logc("MESSAGE_CREATE_UNKNOWN_USER","red");const O=new As({author:I.username,content:A,avatar:I.avatar,id:d.detail.messageId,authorId:d.detail.senderId});Te.set([...s,O])},MESSAGE_DELETE:d=>{const _=[...s],A=_.find(O=>O.id===d.detail.messageId),I=_.indexOf(A);!I||(_.splice(I,1),Te.set(_))},SESSION:async d=>{const _=await He.deriveKey(d.detail.sessionKey,i.privateKeyJwk);Qe.set(Je(_e({},i),{sessionKey:d.detail.sessionKey,derivedKey:_,iv:d.detail.iv})),ve.log("session update",i)}};for(const[d,_]of Object.entries(h))m.addEventListener(d,_),ve.info(`event ${d} attached`);Ss(),m.connect();async function y(d){f=Math.floor(Math.random()*100);const _=await He.generateKeyPair();Qe.set(_e(_e({},i),_)),m.send(new ee({type:ee.types.JOIN,data:[r.username,f,_.publicKeyJwk]})),console.log("Signed in or not >>>",r.signedIn),ir("/chat",{})}function C(){m.send(new ee({type:ee.types.LEAVE,data:[l]})),l=null,f=null}const v=[];return Jp.keys(e).forEach(d=>{!~v.indexOf(d)&&d.slice(0,2)!=="$$"&&d!=="slot"&&Yp.warn(`<Main> was created with unknown prop '${d}'`)}),t.$capture_state=()=>({firebase:Ss,Chat:Ha,SignIn:rs,SignUp:yc,WsManager:Ps,Message:ee,CryptoClient:He,client:fe,keys:Qe,messages:Te,users:Fe,ChatMessage:As,Logger:ve,Router:Ir,Route:Fn,navigate:ir,wsConnected:u,username:l,avatar:f,wsm:m,events:h,handleLogin:y,handleLogout:C,$client:r,$keys:i,$messages:s,$users:o}),t.$inject_state=d=>{"wsConnected"in d&&n(0,u=d.wsConnected),"username"in d&&(l=d.username),"avatar"in d&&(f=d.avatar),"wsm"in d&&n(2,m=d.wsm)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[u,r,m,y,C]}class Zp extends $e{constructor(e){super(e),Ge(this,e,Qp,xi,Ue,{}),j("SvelteRegisterComponent",{component:this,tagName:"Main",options:e,id:xi.name})}}let zn=!1;zn=window.location.hostname==="localhost";ve.DEV=zn!=null?zn:!1;new Zp({target:document.body})});export default em();
