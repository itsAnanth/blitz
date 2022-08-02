var gc=Object.defineProperty,vc=Object.defineProperties;var yc=Object.getOwnPropertyDescriptors;var Ki=Object.getOwnPropertySymbols;var _c=Object.prototype.hasOwnProperty,wc=Object.prototype.propertyIsEnumerable;var Gi=(t,e,n)=>e in t?gc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ee=(t,e)=>{for(var n in e||(e={}))_c.call(e,n)&&Gi(t,n,e[n]);if(Ki)for(var n of Ki(e))wc.call(e,n)&&Gi(t,n,e[n]);return t},ze=(t,e)=>vc(t,yc(e));var bc=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Wp=bc(qt=>{const Ec=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};Ec();function te(){}function xt(t,e){for(const n in e)t[n]=e[n];return t}function D(t,e,n,r,i){t.__svelte_meta={loc:{file:e,line:n,column:r,char:i}}}function eo(t){return t()}function qi(){return Object.create(null)}function zt(t){t.forEach(eo)}function to(t){return typeof t=="function"}function We(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Sn;function Vn(t,e){return Sn||(Sn=document.createElement("a")),Sn.href=e,t===Sn.href}function Ic(t){return Object.keys(t).length===0}function ne(t,e){if(t!=null&&typeof t.subscribe!="function")throw new Error(`'${e}' is not a store with a 'subscribe' method`)}function _i(t,...e){if(t==null)return te;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function gt(t){let e;return _i(t,n=>e=n)(),e}function re(t,e,n){t.$$.on_destroy.push(_i(e,n))}function no(t,e,n,r){if(t){const i=ro(t,e,n,r);return t[0](i)}}function ro(t,e,n,r){return t[1]&&r?xt(n.ctx.slice(),t[1](r(e))):n.ctx}function io(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function so(t,e,n,r,i,s){if(i){const o=ro(e,n,r,s);t.p(o,i)}}function oo(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Ji(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Yi(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function Xi(t,e,n){return t.set(n),e}function kc(t,e){t.appendChild(e)}function Sc(t,e,n){t.insertBefore(e,n||null)}function ao(t){t.parentNode.removeChild(t)}function Qi(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function N(t){return document.createElement(t)}function Se(t){return document.createTextNode(t)}function K(){return Se(" ")}function ir(){return Se("")}function Ac(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function xc(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Rc(t){return Array.from(t.childNodes)}function Vr(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function co(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}let cn;function rn(t){cn=t}function Kt(){if(!cn)throw new Error("Function called outside component initialization");return cn}function $n(t){Kt().$$.on_mount.push(t)}function Zi(t){Kt().$$.after_update.push(t)}function es(t){Kt().$$.on_destroy.push(t)}function ts(){const t=Kt();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const i=co(e,n);r.slice().forEach(s=>{s.call(t,i)})}}}function dt(t,e){Kt().$$.context.set(t,e)}function Te(t){return Kt().$$.context.get(t)}const en=[],ns=[],Pn=[],rs=[],uo=Promise.resolve();let $r=!1;function lo(){$r||($r=!0,uo.then(fo))}function Tc(){return lo(),uo}function Wr(t){Pn.push(t)}const Ir=new Set;let An=0;function fo(){const t=cn;do{for(;An<en.length;){const e=en[An];An++,rn(e),Cc(e.$$)}for(rn(null),en.length=0,An=0;ns.length;)ns.pop()();for(let e=0;e<Pn.length;e+=1){const n=Pn[e];Ir.has(n)||(Ir.add(n),n())}Pn.length=0}while(en.length);for(;rs.length;)rs.pop()();$r=!1,Ir.clear(),rn(t)}function Cc(t){if(t.fragment!==null){t.update(),zt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Wr)}}const Dn=new Set;let ht;function Dt(){ht={r:0,c:[],p:ht}}function Nt(){ht.r||zt(ht.c),ht=ht.p}function q(t,e){t&&t.i&&(Dn.delete(t),t.i(e))}function ee(t,e,n,r){if(t&&t.o){if(Dn.has(t))return;Dn.add(t),ht.c.push(()=>{Dn.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const Oc=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Pc(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const c in o)c in a||(r[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);t[s]=a}else for(const c in o)i[c]=1}for(const o in r)o in n||(n[o]=void 0);return n}function is(t){return typeof t=="object"&&t!==null?t:{}}function Ae(t){t&&t.c()}function _e(t,e,n,r){const{fragment:i,on_mount:s,on_destroy:o,after_update:a}=t.$$;i&&i.m(e,n),r||Wr(()=>{const c=s.map(eo).filter(to);o?o.push(...c):zt(c),t.$$.on_mount=[]}),a.forEach(Wr)}function we(t,e){const n=t.$$;n.fragment!==null&&(zt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dc(t,e){t.$$.dirty[0]===-1&&(en.push(t),lo(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(t,e,n,r,i,s,o,a=[-1]){const c=cn;rn(t);const u=t.$$={fragment:null,ctx:null,props:s,update:te,not_equal:i,bound:qi(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:qi(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(t,e.props||{},(f,h,...g)=>{const _=g.length?g[0]:h;return u.ctx&&i(u.ctx[f],u.ctx[f]=_)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](_),l&&Dc(t,f)),h}):[],u.update(),l=!0,zt(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const f=Rc(e.target);u.fragment&&u.fragment.l(f),f.forEach(ao)}else u.fragment&&u.fragment.c();e.intro&&q(t.$$.fragment),_e(t,e.target,e.anchor,e.customElement),fo()}rn(c)}class Nc{$destroy(){we(this,1),this.$destroy=te}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Ic(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function L(t,e){document.dispatchEvent(co(t,Object.assign({version:"3.47.0"},e),!0))}function R(t,e){L("SvelteDOMInsert",{target:t,node:e}),kc(t,e)}function Q(t,e,n){L("SvelteDOMInsert",{target:t,node:e,anchor:n}),Sc(t,e,n)}function Z(t){L("SvelteDOMRemove",{node:t}),ao(t)}function sr(t,e,n,r,i,s){const o=r===!0?["capture"]:r?Array.from(Object.keys(r)):[];i&&o.push("preventDefault"),s&&o.push("stopPropagation"),L("SvelteDOMAddEventListener",{node:t,event:e,handler:n,modifiers:o});const a=Ac(t,e,n,r);return()=>{L("SvelteDOMRemoveEventListener",{node:t,event:e,handler:n,modifiers:o}),a()}}function b(t,e,n){xc(t,e,n),n==null?L("SvelteDOMRemoveAttribute",{node:t,attribute:e}):L("SvelteDOMSetAttribute",{node:t,attribute:e,value:n})}function pt(t,e){e=""+e,t.wholeText!==e&&(L("SvelteDOMSetData",{node:t,data:e}),t.data=e)}function xn(t){if(typeof t!="string"&&!(t&&typeof t=="object"&&"length"in t)){let e="{#each} only iterates over array-like objects.";throw typeof Symbol=="function"&&t&&Symbol.iterator in t&&(e+=" You can use a spread to convert this iterable into an array."),new Error(e)}}function it(t,e,n){for(const r of Object.keys(e))~n.indexOf(r)||console.warn(`<${t}> received an unexpected slot "${r}".`)}class st extends Nc{constructor(e){if(!e||!e.target&&!e.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}/**
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
 */const ho=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Uc=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(h=64)),r.push(n[l],n[f],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ho(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Uc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw Error();const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Bc=function(t){const e=ho(t);return po.encodeByteArray(e,!0)},mo=function(t){return Bc(t).replace(/\./g,"")},Mc=function(t){try{return po.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Lc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ce(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function jc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vc(){const t=ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $c(){return typeof indexedDB=="object"}function Wc(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const zc="FirebaseError";class Gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zc,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mn.prototype.create)}}class mn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Kc(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gt(i,a,r)}}function Kc(t,e){return t.replace(Gc,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Gc=/\{\$([^}]+)}/g;function qc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ss(s)&&ss(o)){if(!Wn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ss(t){return t!==null&&typeof t=="object"}/**
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
 */function gn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function nn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jc(t,e){const n=new Yc(t,e);return n.subscribe.bind(n)}class Yc{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xc(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kr),i.error===void 0&&(i.error=kr),i.complete===void 0&&(i.complete=kr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xc(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kr(){}/**
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
 */function bt(t){return t&&t._delegate?t._delegate:t}class Ut{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const lt="[DEFAULT]";/**
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
 */class Qc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Lc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eu(e))try{this.getOrInitializeService({instanceIdentifier:lt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lt){return this.instances.has(e)}getOptions(e=lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zc(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lt){return this.component?this.component.multipleInstances?e:lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zc(t){return t===lt?void 0:t}function eu(t){return t.instantiationMode==="EAGER"}/**
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
 */class tu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const nu={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},ru=J.INFO,iu={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},su=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=iu[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class go{constructor(e){this.name=e,this._logLevel=ru,this._logHandler=su,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const ou=(t,e)=>e.some(n=>t instanceof n);let os,as;function au(){return os||(os=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cu(){return as||(as=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vo=new WeakMap,zr=new WeakMap,yo=new WeakMap,Sr=new WeakMap,wi=new WeakMap;function uu(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(et(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vo.set(n,t)}).catch(()=>{}),wi.set(e,t),e}function lu(t){if(zr.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zr.set(t,e)}let Kr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fu(t){Kr=t(Kr)}function du(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ar(this),e,...n);return yo.set(r,e.sort?e.sort():[e]),et(r)}:cu().includes(t)?function(...e){return t.apply(Ar(this),e),et(vo.get(this))}:function(...e){return et(t.apply(Ar(this),e))}}function hu(t){return typeof t=="function"?du(t):(t instanceof IDBTransaction&&lu(t),ou(t,au())?new Proxy(t,Kr):t)}function et(t){if(t instanceof IDBRequest)return uu(t);if(Sr.has(t))return Sr.get(t);const e=hu(t);return e!==t&&(Sr.set(t,e),wi.set(e,t)),e}const Ar=t=>wi.get(t);function pu(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=et(o);return r&&o.addEventListener("upgradeneeded",c=>{r(et(o.result),c.oldVersion,c.newVersion,et(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const mu=["get","getKey","getAll","getAllKeys","count"],gu=["put","add","delete","clear"],xr=new Map;function cs(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xr.get(e))return xr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mu.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return xr.set(e,s),s}fu(t=>ze(Ee({},t),{get:(e,n,r)=>cs(e,n)||t.get(e,n,r),has:(e,n)=>!!cs(e,n)||t.has(e,n)}));/**
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
 */class vu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yu(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gr="@firebase/app",us="0.7.28";/**
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
 */const bi=new go("@firebase/app"),_u="@firebase/app-compat",wu="@firebase/analytics-compat",bu="@firebase/analytics",Eu="@firebase/app-check-compat",Iu="@firebase/app-check",ku="@firebase/auth",Su="@firebase/auth-compat",Au="@firebase/database",xu="@firebase/database-compat",Ru="@firebase/functions",Tu="@firebase/functions-compat",Cu="@firebase/installations",Ou="@firebase/installations-compat",Pu="@firebase/messaging",Du="@firebase/messaging-compat",Nu="@firebase/performance",Uu="@firebase/performance-compat",Bu="@firebase/remote-config",Mu="@firebase/remote-config-compat",Lu="@firebase/storage",Fu="@firebase/storage-compat",ju="@firebase/firestore",Hu="@firebase/firestore-compat",Vu="firebase",$u="9.9.0";/**
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
 */const _o="[DEFAULT]",Wu={[Gr]:"fire-core",[_u]:"fire-core-compat",[bu]:"fire-analytics",[wu]:"fire-analytics-compat",[Iu]:"fire-app-check",[Eu]:"fire-app-check-compat",[ku]:"fire-auth",[Su]:"fire-auth-compat",[Au]:"fire-rtdb",[xu]:"fire-rtdb-compat",[Ru]:"fire-fn",[Tu]:"fire-fn-compat",[Cu]:"fire-iid",[Ou]:"fire-iid-compat",[Pu]:"fire-fcm",[Du]:"fire-fcm-compat",[Nu]:"fire-perf",[Uu]:"fire-perf-compat",[Bu]:"fire-rc",[Mu]:"fire-rc-compat",[Lu]:"fire-gcs",[Fu]:"fire-gcs-compat",[ju]:"fire-fst",[Hu]:"fire-fst-compat","fire-js":"fire-js",[Vu]:"fire-js-all"};/**
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
 */const zn=new Map,qr=new Map;function zu(t,e){try{t.container.addComponent(e)}catch(n){bi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function un(t){const e=t.name;if(qr.has(e))return bi.debug(`There were multiple attempts to register component ${e}.`),!1;qr.set(e,t);for(const n of zn.values())zu(n,t);return!0}function wo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ku={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},vt=new mn("app","Firebase",Ku);/**
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
 */class Gu{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
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
 */const or=$u;function qu(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:_o,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw vt.create("bad-app-name",{appName:String(r)});const i=zn.get(r);if(i){if(Wn(t,i.options)&&Wn(n,i.config))return i;throw vt.create("duplicate-app",{appName:r})}const s=new tu(r);for(const a of qr.values())s.addComponent(a);const o=new Gu(t,n,s);return zn.set(r,o),o}function Ju(t=_o){const e=zn.get(t);if(!e)throw vt.create("no-app",{appName:t});return e}function Ct(t,e,n){var r;let i=(r=Wu[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bi.warn(a.join(" "));return}un(new Ut(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Yu="firebase-heartbeat-database",Xu=1,ln="firebase-heartbeat-store";let Rr=null;function bo(){return Rr||(Rr=pu(Yu,Xu,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ln)}}}).catch(t=>{throw vt.create("storage-open",{originalErrorMessage:t.message})})),Rr}async function Qu(t){var e;try{return(await bo()).transaction(ln).objectStore(ln).get(Eo(t))}catch(n){throw vt.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function ls(t,e){var n;try{const i=(await bo()).transaction(ln,"readwrite");return await i.objectStore(ln).put(e,Eo(t)),i.done}catch(r){throw vt.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function Eo(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Zu=1024,el=30*24*60*60*1e3;class tl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rl(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=fs();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=el}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fs(),{heartbeatsToSend:n,unsentEntries:r}=nl(this._heartbeatsCache.heartbeats),i=mo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function fs(){return new Date().toISOString().substring(0,10)}function nl(t,e=Zu){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ds(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ds(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $c()?Wc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Qu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ls(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ls(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ds(t){return mo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function il(t){un(new Ut("platform-logger",e=>new vu(e),"PRIVATE")),un(new Ut("heartbeat",e=>new tl(e),"PRIVATE")),Ct(Gr,us,t),Ct(Gr,us,"esm2017"),Ct("fire-js","")}il("");var sl="firebase",ol="9.9.0";/**
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
 */Ct(sl,ol,"app");function hs(){return qu({apiKey:"AIzaSyBHT9wDkmxWs7T6a6m7ZNvFOY6JKJaE5Og",authDomain:"blitzappv1.firebaseapp.com",projectId:"blitzappv1",storageBucket:"blitzappv1.appspot.com",messagingSenderId:"245689724814",appId:"1:245689724814:web:cb42ab432716d16de87edf",measurementId:"G-197ZK5TQZK"})}class ps{constructor({author:e,content:n,timestamp:r,id:i,avatar:s,authorId:o}){this.author=e,this.content=n,this.timestamp=r!=null?r:Date.now(),this.id=i,this.avatar=s,this.authorId=o!=null?o:null}serialize(){return{author:this.author,content:this.content,timestamp:this.timestamp,avatar:this.avatar,id:this.id,authorId:this.authorId}}}const kt=[];function al(t,e){return{subscribe:ae(t,e).subscribe}}function ae(t,e=te){let n;const r=new Set;function i(a){if(We(t,a)&&(t=a,n)){const c=!kt.length;for(const u of r)u[1](),kt.push(u,t);if(c){for(let u=0;u<kt.length;u+=2)kt[u][0](kt[u+1]);kt.length=0}}}function s(a){i(a(t))}function o(a,c=te){const u=[a,c];return r.add(u),r.size===1&&(n=e(i)||te),a(t),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function cl(t,e,n){const r=!Array.isArray(t),i=r?[t]:t,s=e.length<2;return al(n,o=>{let a=!1;const c=[];let u=0,l=te;const f=()=>{if(u)return;l();const g=e(r?c[0]:c,o);s?o(g):l=to(g)?g:te},h=i.map((g,_)=>_i(g,E=>{c[_]=E,u&=~(1<<_),a&&f()},()=>{u|=1<<_}));return a=!0,f(),function(){zt(h),l()}})}const Re=ae([]),Me=ae([]),qe=ae({privateKeyJwk:null,publicKeyJwk:null,sessionKey:null,derivedKey:null,iv:null}),le=ae({signedIn:!1}),St=class{static log(...t){!St.DEV||console.log.apply(this,arguments)}static error(...t){!St.DEV||console.error.apply(this,arguments)}static warn(...t){!St.DEV||console.warn.apply(this,arguments)}static info(...t){!St.DEV||console.info.apply(this,arguments)}static debug(...t){!St.DEV||console.debug.apply(this,arguments)}static logc(t,e){console.log(`%c[%c${t}%c]`,"color: white",`color: ${e}`,"color: white")}};let de=St;de.DEV=!1;var Jr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ei={},Ii={},Io={},ar={},me={},ul=Tr(typeof Buffer!="undefined"&&Buffer)||Tr(Jr.Buffer)||Tr(typeof window!="undefined"&&window.Buffer)||Jr.Buffer;function Tr(t){return t&&t.isBuffer&&t}var ll={}.toString,ki=Array.isArray||function(t){return ll.call(t)=="[object Array]"},ko={exports:{}},At=me,cr=ko.exports=So(0);cr.alloc=So;cr.concat=At.concat;cr.from=fl;function So(t){return new Array(t)}function fl(t){if(!At.isBuffer(t)&&At.isView(t))t=At.Uint8Array.from(t);else if(At.isArrayBuffer(t))t=new Uint8Array(t);else{if(typeof t=="string")return At.from.call(cr,t);if(typeof t=="number")throw new TypeError('"value" argument must not be a number')}return Array.prototype.slice.call(t)}var Ao={exports:{}},Le=me,Rt=Le.global,ur=Ao.exports=Le.hasBuffer?xo(0):[];ur.alloc=Le.hasBuffer&&Rt.alloc||xo;ur.concat=Le.concat;ur.from=dl;function xo(t){return new Rt(t)}function dl(t){if(!Le.isBuffer(t)&&Le.isView(t))t=Le.Uint8Array.from(t);else if(Le.isArrayBuffer(t))t=new Uint8Array(t);else{if(typeof t=="string")return Le.from.call(ur,t);if(typeof t=="number")throw new TypeError('"value" argument must not be a number')}return Rt.from&&Rt.from.length!==1?Rt.from(t):new Rt(t)}var Ro={exports:{}},Kn=me,qt=Ro.exports=Kn.hasArrayBuffer?To(0):[];qt.alloc=To;qt.concat=Kn.concat;qt.from=hl;function To(t){return new Uint8Array(t)}function hl(t){if(Kn.isView(t)){var e=t.byteOffset,n=t.byteLength;t=t.buffer,t.byteLength!==n&&(t.slice?t=t.slice(e,e+n):(t=new Uint8Array(t),t.byteLength!==n&&(t=Array.prototype.slice.call(t,e,e+n))))}else{if(typeof t=="string")return Kn.from.call(qt,t);if(typeof t=="number")throw new TypeError('"value" argument must not be a number')}return new Uint8Array(t)}var Et={},lr={};lr.copy=gl;lr.toString=ml;lr.write=pl;function pl(t,e){for(var n=this,r=e||(e|=0),i=t.length,s=0,o=0;o<i;)s=t.charCodeAt(o++),s<128?n[r++]=s:s<2048?(n[r++]=192|s>>>6,n[r++]=128|s&63):s<55296||s>57343?(n[r++]=224|s>>>12,n[r++]=128|s>>>6&63,n[r++]=128|s&63):(s=(s-55296<<10|t.charCodeAt(o++)-56320)+65536,n[r++]=240|s>>>18,n[r++]=128|s>>>12&63,n[r++]=128|s>>>6&63,n[r++]=128|s&63);return r-e}function ml(t,e,n){var r=this,i=e|0;n||(n=r.length);for(var s="",o=0;i<n;){if(o=r[i++],o<128){s+=String.fromCharCode(o);continue}(o&224)===192?o=(o&31)<<6|r[i++]&63:(o&240)===224?o=(o&15)<<12|(r[i++]&63)<<6|r[i++]&63:(o&248)===240&&(o=(o&7)<<18|(r[i++]&63)<<12|(r[i++]&63)<<6|r[i++]&63),o>=65536?(o-=65536,s+=String.fromCharCode((o>>>10)+55296,(o&1023)+56320)):s+=String.fromCharCode(o)}return s}function gl(t,e,n,r){var i;n||(n=0),!r&&r!==0&&(r=this.length),e||(e=0);var s=r-n;if(t===this&&n<e&&e<r)for(i=s-1;i>=0;i--)t[i+e]=this[i+n];else for(i=0;i<s;i++)t[i+e]=this[i+n];return s}var Si=lr;Et.copy=Do;Et.slice=No;Et.toString=vl;Et.write=yl("write");var Ze=me,Co=Ze.global,Oo=Ze.hasBuffer&&"TYPED_ARRAY_SUPPORT"in Co,Po=Oo&&!Co.TYPED_ARRAY_SUPPORT;function Do(t,e,n,r){var i=Ze.isBuffer(this),s=Ze.isBuffer(t);if(i&&s)return this.copy(t,e,n,r);if(!Po&&!i&&!s&&Ze.isView(this)&&Ze.isView(t)){var o=n||r!=null?No.call(this,n,r):this;return t.set(o,e),o.length}else return Si.copy.call(this,t,e,n,r)}function No(t,e){var n=this.slice||!Po&&this.subarray;if(n)return n.call(this,t,e);var r=Ze.alloc.call(this,e-t);return Do.call(this,r,0,t,e),r}function vl(t,e,n){var r=!Oo&&Ze.isBuffer(this)?this.toString:Si.toString;return r.apply(this,arguments)}function yl(t){return e;function e(){var n=this[t]||Si[t];return n.apply(this,arguments)}}(function(t){var e=t.global=ul,n=t.hasBuffer=e&&!!e.isBuffer,r=t.hasArrayBuffer=typeof ArrayBuffer!="undefined",i=t.isArray=ki;t.isArrayBuffer=r?E:v;var s=t.isBuffer=n?e.isBuffer:v,o=t.isView=r?ArrayBuffer.isView||I("ArrayBuffer","buffer"):v;t.alloc=h,t.concat=g,t.from=f;var a=t.Array=ko.exports,c=t.Buffer=Ao.exports,u=t.Uint8Array=Ro.exports,l=t.prototype=Et;function f(w){return typeof w=="string"?y.call(this,w):d(this).from(w)}function h(w){return d(this).alloc(w)}function g(w,P){P||(P=0,Array.prototype.forEach.call(w,S));var A=this!==t&&this||w[0],T=h.call(A,P),x=0;return Array.prototype.forEach.call(w,p),T;function S(m){P+=m.length}function p(m){x+=l.copy.call(m,T,x)}}var _=I("ArrayBuffer");function E(w){return w instanceof ArrayBuffer||_(w)}function y(w){var P=w.length*3,A=h.call(this,P),T=l.write.call(A,w);return P!==T&&(A=l.slice.call(A,0,T)),A}function d(w){return s(w)?c:o(w)?u:i(w)?a:n?c:r?u:a}function v(){return!1}function I(w,P){return w="[object "+w+"]",function(A){return A!=null&&{}.toString.call(P?A[P]:A)===w}}})(me);ar.ExtBuffer=Yr;var _l=me;function Yr(t,e){if(!(this instanceof Yr))return new Yr(t,e);this.buffer=_l.from(t),this.type=e}var Uo={};Uo.setExtPackers=El;var Gn=me,wl=Gn.global,Ie=Gn.Uint8Array.from,Cr,bl={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1};function El(t){t.addExtPacker(14,Error,[ot,ve]),t.addExtPacker(1,EvalError,[ot,ve]),t.addExtPacker(2,RangeError,[ot,ve]),t.addExtPacker(3,ReferenceError,[ot,ve]),t.addExtPacker(4,SyntaxError,[ot,ve]),t.addExtPacker(5,TypeError,[ot,ve]),t.addExtPacker(6,URIError,[ot,ve]),t.addExtPacker(10,RegExp,[Il,ve]),t.addExtPacker(11,Boolean,[Or,ve]),t.addExtPacker(12,String,[Or,ve]),t.addExtPacker(13,Date,[Number,ve]),t.addExtPacker(15,Number,[Or,ve]),typeof Uint8Array!="undefined"&&(t.addExtPacker(17,Int8Array,Ie),t.addExtPacker(18,Uint8Array,Ie),t.addExtPacker(19,Int16Array,Ie),t.addExtPacker(20,Uint16Array,Ie),t.addExtPacker(21,Int32Array,Ie),t.addExtPacker(22,Uint32Array,Ie),t.addExtPacker(23,Float32Array,Ie),typeof Float64Array!="undefined"&&t.addExtPacker(24,Float64Array,Ie),typeof Uint8ClampedArray!="undefined"&&t.addExtPacker(25,Uint8ClampedArray,Ie),t.addExtPacker(26,ArrayBuffer,Ie),t.addExtPacker(29,DataView,Ie)),Gn.hasBuffer&&t.addExtPacker(27,wl,Gn.from)}function ve(t){return Cr||(Cr=Ei.encode),Cr(t)}function Or(t){return t.valueOf()}function Il(t){t=RegExp.prototype.toString.call(t).split("/"),t.shift();var e=[t.pop()];return e.unshift(t.join("/")),e}function ot(t){var e={};for(var n in bl)e[n]=t[n];return e}var Bo={},fr={};(function(t){(function(e){var n="undefined",r=n!==typeof Buffer&&Buffer,i=n!==typeof Uint8Array&&Uint8Array,s=n!==typeof ArrayBuffer&&ArrayBuffer,o=[0,0,0,0,0,0,0,0],a=Array.isArray||A,c=4294967296,u=16777216,l;f("Uint64BE",!0,!0),f("Int64BE",!0,!1),f("Uint64LE",!1,!0),f("Int64LE",!1,!1);function f(T,x,S){var p=x?0:4,m=x?4:0,k=x?0:3,O=x?1:2,G=x?2:1,ie=x?3:0,F=x?v:w,W=x?I:P,M=se.prototype,U="is"+T,C="_"+U;return M.buffer=void 0,M.offset=0,M[C]=!0,M.toNumber=Wi,M.toString=pc,M.toJSON=Wi,M.toArray=h,r&&(M.toBuffer=g),i&&(M.toArrayBuffer=_),se[U]=ge,e[T]=se,se;function se(V,j,H,$){return this instanceof se?dc(this,V,j,H,$):new se(V,j,H,$)}function ge(V){return!!(V&&V[C])}function dc(V,j,H,$,oe){if(i&&s&&(j instanceof s&&(j=new i(j)),$ instanceof s&&($=new i($))),!j&&!H&&!$&&!l){V.buffer=d(o,0);return}if(!E(j,H)){var Ne=l||Array;oe=H,$=j,H=0,j=new Ne(8)}V.buffer=j,V.offset=H|=0,n!==typeof $&&(typeof $=="string"?hc(j,H,$,oe||10):E($,oe)?y(j,H,$,oe):typeof oe=="number"?(In(j,H+p,$),In(j,H+m,oe)):$>0?F(j,H,$):$<0?W(j,H,$):y(j,H,o,0))}function hc(V,j,H,$){var oe=0,Ne=H.length,Ue=0,be=0;H[0]==="-"&&oe++;for(var mc=oe;oe<Ne;){var zi=parseInt(H[oe++],$);if(!(zi>=0))break;be=be*$+zi,Ue=Ue*$+Math.floor(be/c),be%=c}mc&&(Ue=~Ue,be?be=c-be:Ue++),In(V,j+p,Ue),In(V,j+m,be)}function Wi(){var V=this.buffer,j=this.offset,H=kn(V,j+p),$=kn(V,j+m);return S||(H|=0),H?H*c+$:$}function pc(V){var j=this.buffer,H=this.offset,$=kn(j,H+p),oe=kn(j,H+m),Ne="",Ue=!S&&$&2147483648;for(Ue&&($=~$,oe=c-oe),V=V||10;;){var be=$%V*c+oe;if($=Math.floor($/V),oe=Math.floor(be/V),Ne=(be%V).toString(V)+Ne,!$&&!oe)break}return Ue&&(Ne="-"+Ne),Ne}function In(V,j,H){V[j+ie]=H&255,H=H>>8,V[j+G]=H&255,H=H>>8,V[j+O]=H&255,H=H>>8,V[j+k]=H&255}function kn(V,j){return V[j+k]*u+(V[j+O]<<16)+(V[j+G]<<8)+V[j+ie]}}function h(T){var x=this.buffer,S=this.offset;return l=null,T!==!1&&S===0&&x.length===8&&a(x)?x:d(x,S)}function g(T){var x=this.buffer,S=this.offset;if(l=r,T!==!1&&S===0&&x.length===8&&Buffer.isBuffer(x))return x;var p=new r(8);return y(p,0,x,S),p}function _(T){var x=this.buffer,S=this.offset,p=x.buffer;if(l=i,T!==!1&&S===0&&p instanceof s&&p.byteLength===8)return p;var m=new i(8);return y(m,0,x,S),m.buffer}function E(T,x){var S=T&&T.length;return x|=0,S&&x+8<=S&&typeof T[x]!="string"}function y(T,x,S,p){x|=0,p|=0;for(var m=0;m<8;m++)T[x++]=S[p++]&255}function d(T,x){return Array.prototype.slice.call(T,x,x+8)}function v(T,x,S){for(var p=x+8;p>x;)T[--p]=S&255,S/=256}function I(T,x,S){var p=x+8;for(S++;p>x;)T[--p]=-S&255^255,S/=256}function w(T,x,S){for(var p=x+8;x<p;)T[x++]=S&255,S/=256}function P(T,x,S){var p=x+8;for(S++;x<p;)T[x++]=-S&255^255,S/=256}function A(T){return!!T&&Object.prototype.toString.call(T)=="[object Array]"}})(typeof t.nodeName!="string"?t:Jr||{})})(fr);var Mo={},dr={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */dr.read=function(t,e,n,r,i){var s,o,a=i*8-r-1,c=(1<<a)-1,u=c>>1,l=-7,f=n?i-1:0,h=n?-1:1,g=t[e+f];for(f+=h,s=g&(1<<-l)-1,g>>=-l,l+=a;l>0;s=s*256+t[e+f],f+=h,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=r;l>0;o=o*256+t[e+f],f+=h,l-=8);if(s===0)s=1-u;else{if(s===c)return o?NaN:(g?-1:1)*(1/0);o=o+Math.pow(2,r),s=s-u}return(g?-1:1)*o*Math.pow(2,s-r)};dr.write=function(t,e,n,r,i,s){var o,a,c,u=s*8-i-1,l=(1<<u)-1,f=l>>1,h=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=r?0:s-1,_=r?1:-1,E=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=l):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),o+f>=1?e+=h/c:e+=h*Math.pow(2,1-f),e*c>=2&&(o++,c/=2),o+f>=l?(a=0,o=l):o+f>=1?(a=(e*c-1)*Math.pow(2,i),o=o+f):(a=e*Math.pow(2,f-1)*Math.pow(2,i),o=0));i>=8;t[n+g]=a&255,g+=_,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;t[n+g]=o&255,g+=_,o/=256,u-=8);t[n+g-_]|=E*128};var Ai={},kl=Ai.uint8=new Array(256);for(var Rn=0;Rn<=255;Rn++)kl[Rn]=Sl(Rn);function Sl(t){return function(e){var n=e.reserve(1);e.buffer[n]=t}}var Lo=dr,Fo=fr,Al=Fo.Uint64BE,xl=Fo.Int64BE,jo=Ai.uint8,hr=me,X=hr.global,Rl=hr.hasBuffer&&"TYPED_ARRAY_SUPPORT"in X,Tl=Rl&&!X.TYPED_ARRAY_SUPPORT,ms=hr.hasBuffer&&X.prototype||{};Mo.getWriteToken=Cl;function Cl(t){return t&&t.uint8array?Ol():Tl||hr.hasBuffer&&t&&t.safe?Pl():Ho()}function Ol(){var t=Ho();return t[202]=z(202,4,Wo),t[203]=z(203,8,zo),t}function Ho(){var t=jo.slice();return t[196]=Qt(196),t[197]=at(197),t[198]=ct(198),t[199]=Qt(199),t[200]=at(200),t[201]=ct(201),t[202]=z(202,4,ms.writeFloatBE||Wo,!0),t[203]=z(203,8,ms.writeDoubleBE||zo,!0),t[204]=Qt(204),t[205]=at(205),t[206]=ct(206),t[207]=z(207,8,Vo),t[208]=Qt(208),t[209]=at(209),t[210]=ct(210),t[211]=z(211,8,$o),t[217]=Qt(217),t[218]=at(218),t[219]=ct(219),t[220]=at(220),t[221]=ct(221),t[222]=at(222),t[223]=ct(223),t}function Pl(){var t=jo.slice();return t[196]=z(196,1,X.prototype.writeUInt8),t[197]=z(197,2,X.prototype.writeUInt16BE),t[198]=z(198,4,X.prototype.writeUInt32BE),t[199]=z(199,1,X.prototype.writeUInt8),t[200]=z(200,2,X.prototype.writeUInt16BE),t[201]=z(201,4,X.prototype.writeUInt32BE),t[202]=z(202,4,X.prototype.writeFloatBE),t[203]=z(203,8,X.prototype.writeDoubleBE),t[204]=z(204,1,X.prototype.writeUInt8),t[205]=z(205,2,X.prototype.writeUInt16BE),t[206]=z(206,4,X.prototype.writeUInt32BE),t[207]=z(207,8,Vo),t[208]=z(208,1,X.prototype.writeInt8),t[209]=z(209,2,X.prototype.writeInt16BE),t[210]=z(210,4,X.prototype.writeInt32BE),t[211]=z(211,8,$o),t[217]=z(217,1,X.prototype.writeUInt8),t[218]=z(218,2,X.prototype.writeUInt16BE),t[219]=z(219,4,X.prototype.writeUInt32BE),t[220]=z(220,2,X.prototype.writeUInt16BE),t[221]=z(221,4,X.prototype.writeUInt32BE),t[222]=z(222,2,X.prototype.writeUInt16BE),t[223]=z(223,4,X.prototype.writeUInt32BE),t}function Qt(t){return function(e,n){var r=e.reserve(2),i=e.buffer;i[r++]=t,i[r]=n}}function at(t){return function(e,n){var r=e.reserve(3),i=e.buffer;i[r++]=t,i[r++]=n>>>8,i[r]=n}}function ct(t){return function(e,n){var r=e.reserve(5),i=e.buffer;i[r++]=t,i[r++]=n>>>24,i[r++]=n>>>16,i[r++]=n>>>8,i[r]=n}}function z(t,e,n,r){return function(i,s){var o=i.reserve(e+1);i.buffer[o++]=t,n.call(i.buffer,s,o,r)}}function Vo(t,e){new Al(this,e,t)}function $o(t,e){new xl(this,e,t)}function Wo(t,e){Lo.write(this,t,e,!1,23,4)}function zo(t,e){Lo.write(this,t,e,!1,52,8)}var Dl=ki,Ko=fr,Nl=Ko.Uint64BE,Ul=Ko.Int64BE,gs=me,vs=Et,Bl=Mo,Ml=Ai.uint8,Ll=ar.ExtBuffer,Fl=typeof Uint8Array!="undefined",jl=typeof Map!="undefined",Jt=[];Jt[1]=212;Jt[2]=213;Jt[4]=214;Jt[8]=215;Jt[16]=216;Bo.getWriteType=Hl;function Hl(t){var e=Bl.getWriteToken(t),n=t&&t.useraw,r=Fl&&t&&t.binarraybuffer,i=r?gs.isArrayBuffer:gs.isBuffer,s=r?P:w,o=jl&&t&&t.usemap,a=o?x:T,c={boolean:u,function:v,number:l,object:n?d:y,string:E(n?_:g),symbol:v,undefined:v};return c;function u(p,m){var k=m?195:194;e[k](p,m)}function l(p,m){var k=m|0,O;if(m!==k){O=203,e[O](p,m);return}else-32<=k&&k<=127?O=k&255:0<=k?O=k<=255?204:k<=65535?205:206:O=-128<=k?208:-32768<=k?209:210;e[O](p,k)}function f(p,m){var k=207;e[k](p,m.toArray())}function h(p,m){var k=211;e[k](p,m.toArray())}function g(p){return p<32?1:p<=255?2:p<=65535?3:5}function _(p){return p<32?1:p<=65535?3:5}function E(p){return m;function m(k,O){var G=O.length,ie=5+G*3;k.offset=k.reserve(ie);var F=k.buffer,W=p(G),M=k.offset+W;G=vs.write.call(F,O,M);var U=p(G);if(W!==U){var C=M+U-W,se=M+G;vs.copy.call(F,F,C,M,se)}var ge=U===1?160+G:U<=3?215+U:219;e[ge](k,G),k.offset+=G}}function y(p,m){if(m===null)return v(p,m);if(i(m))return s(p,m);if(Dl(m))return I(p,m);if(Nl.isUint64BE(m))return f(p,m);if(Ul.isInt64BE(m))return h(p,m);var k=p.codec.getExtPacker(m);if(k&&(m=k(m)),m instanceof Ll)return A(p,m);a(p,m)}function d(p,m){if(i(m))return S(p,m);y(p,m)}function v(p,m){var k=192;e[k](p,m)}function I(p,m){var k=m.length,O=k<16?144+k:k<=65535?220:221;e[O](p,k);for(var G=p.codec.encode,ie=0;ie<k;ie++)G(p,m[ie])}function w(p,m){var k=m.length,O=k<255?196:k<=65535?197:198;e[O](p,k),p.send(m)}function P(p,m){w(p,new Uint8Array(m))}function A(p,m){var k=m.buffer,O=k.length,G=Jt[O]||(O<255?199:O<=65535?200:201);e[G](p,O),Ml[m.type](p),p.send(k)}function T(p,m){var k=Object.keys(m),O=k.length,G=O<16?128+O:O<=65535?222:223;e[G](p,O);var ie=p.codec.encode;k.forEach(function(F){ie(p,F),ie(p,m[F])})}function x(p,m){if(!(m instanceof Map))return T(p,m);var k=m.size,O=k<16?128+k:k<=65535?222:223;e[O](p,k);var G=p.codec.encode;m.forEach(function(ie,F,W){G(p,F),G(p,ie)})}function S(p,m){var k=m.length,O=k<32?160+k:k<=65535?218:219;e[O](p,k),p.send(m)}}var It={},Vl=ki;It.createCodec=Go;It.install=Wl;It.filter=Gl;var $l=me;function Bt(t){if(!(this instanceof Bt))return new Bt(t);this.options=t,this.init()}Bt.prototype.init=function(){var t=this.options;return t&&t.uint8array&&(this.bufferish=$l.Uint8Array),this};function Wl(t){for(var e in t)Bt.prototype[e]=zl(Bt.prototype[e],t[e])}function zl(t,e){return t&&e?n:t||e;function n(){return t.apply(this,arguments),e.apply(this,arguments)}}function Kl(t){return t=t.slice(),function(n){return t.reduce(e,n)};function e(n,r){return r(n)}}function Gl(t){return Vl(t)?Kl(t):t}function Go(t){return new Bt(t)}It.preset=Go({preset:!0});var ql=ar.ExtBuffer,Jl=Uo,Yl=Bo,xi=It;xi.install({addExtPacker:Ql,getExtPacker:Zl,init:qo});Io.preset=qo.call(xi.preset);function Xl(t){var e=Yl.getWriteType(t);return n;function n(r,i){var s=e[typeof i];if(!s)throw new Error('Unsupported type "'+typeof i+'": '+i);s(r,i)}}function qo(){var t=this.options;return this.encode=Xl(t),t&&t.preset&&Jl.setExtPackers(this),this}function Ql(t,e,n){n=xi.filter(n);var r=e.name;if(r&&r!=="Object"){var i=this.extPackers||(this.extPackers={});i[r]=o}else{var s=this.extEncoderList||(this.extEncoderList=[]);s.unshift([e,o])}function o(a){return n&&(a=n(a)),new ql(a,t)}}function Zl(t){var e=this.extPackers||(this.extPackers={}),n=t.constructor,r=n&&n.name&&e[n.name];if(r)return r;for(var i=this.extEncoderList||(this.extEncoderList=[]),s=i.length,o=0;o<s;o++){var a=i[o];if(n===a[0])return a[1]}}var pr={};pr.FlexDecoder=Mt;pr.FlexEncoder=Lt;var sn=me,ef=2048,tf=65536,ys="BUFFER_SHORTAGE";function Mt(){if(!(this instanceof Mt))return new Mt}function Lt(){if(!(this instanceof Lt))return new Lt}Mt.mixin=Xo(nf());Mt.mixin(Mt.prototype);Lt.mixin=Xo(rf());Lt.mixin(Lt.prototype);function nf(){return{bufferish:sn,write:t,fetch:of,flush:e,push:Yo,pull:af,read:Jo,reserve:n,offset:0};function t(r){var i=this.offset?sn.prototype.slice.call(this.buffer,this.offset):this.buffer;this.buffer=i?r?this.bufferish.concat([i,r]):i:r,this.offset=0}function e(){for(;this.offset<this.buffer.length;){var r=this.offset,i;try{i=this.fetch()}catch(s){if(s&&s.message!=ys)throw s;this.offset=r;break}this.push(i)}}function n(r){var i=this.offset,s=i+r;if(s>this.buffer.length)throw new Error(ys);return this.offset=s,i}}function rf(){return{bufferish:sn,write:sf,fetch:t,flush:e,push:Yo,pull:n,read:Jo,reserve:r,send:i,maxBufferSize:tf,minBufferSize:ef,offset:0,start:0};function t(){var s=this.start;if(s<this.offset){var o=this.start=this.offset;return sn.prototype.slice.call(this.buffer,s,o)}}function e(){for(;this.start<this.offset;){var s=this.fetch();s&&this.push(s)}}function n(){var s=this.buffers||(this.buffers=[]),o=s.length>1?this.bufferish.concat(s):s[0];return s.length=0,o}function r(s){var o=s|0;if(this.buffer){var a=this.buffer.length,c=this.offset|0,u=c+o;if(u<a)return this.offset=u,c;this.flush(),s=Math.max(s,Math.min(a*2,this.maxBufferSize))}return s=Math.max(s,this.minBufferSize),this.buffer=this.bufferish.alloc(s),this.start=0,this.offset=o,0}function i(s){var o=s.length;if(o>this.minBufferSize)this.flush(),this.push(s);else{var a=this.reserve(o);sn.prototype.copy.call(s,this.buffer,a)}}}function sf(){throw new Error("method not implemented: write()")}function of(){throw new Error("method not implemented: fetch()")}function Jo(){var t=this.buffers&&this.buffers.length;return t?(this.flush(),this.pull()):this.fetch()}function Yo(t){var e=this.buffers||(this.buffers=[]);e.push(t)}function af(){var t=this.buffers||(this.buffers=[]);return t.shift()}function Xo(t){return e;function e(n){for(var r in t)n[r]=t[r];return n}}Ii.EncodeBuffer=Ft;var cf=Io.preset,uf=pr.FlexEncoder;uf.mixin(Ft.prototype);function Ft(t){if(!(this instanceof Ft))return new Ft(t);if(t&&(this.options=t,t.codec)){var e=this.codec=t.codec;e.bufferish&&(this.bufferish=e.bufferish)}}Ft.prototype.codec=cf;Ft.prototype.write=function(t){this.codec.encode(this,t)};Ei.encode=ff;var lf=Ii.EncodeBuffer;function ff(t,e){var n=new lf(e);return n.write(t),n.read()}var Ri={},Ti={},Qo={},Zo={};Zo.setExtUnpackers=pf;var ea=me,df=ea.global,Pr,hf={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1};function pf(t){t.addExtUnpacker(14,[ye,ut(Error)]),t.addExtUnpacker(1,[ye,ut(EvalError)]),t.addExtUnpacker(2,[ye,ut(RangeError)]),t.addExtUnpacker(3,[ye,ut(ReferenceError)]),t.addExtUnpacker(4,[ye,ut(SyntaxError)]),t.addExtUnpacker(5,[ye,ut(TypeError)]),t.addExtUnpacker(6,[ye,ut(URIError)]),t.addExtUnpacker(10,[ye,mf]),t.addExtUnpacker(11,[ye,ue(Boolean)]),t.addExtUnpacker(12,[ye,ue(String)]),t.addExtUnpacker(13,[ye,ue(Date)]),t.addExtUnpacker(15,[ye,ue(Number)]),typeof Uint8Array!="undefined"&&(t.addExtUnpacker(17,ue(Int8Array)),t.addExtUnpacker(18,ue(Uint8Array)),t.addExtUnpacker(19,[Ke,ue(Int16Array)]),t.addExtUnpacker(20,[Ke,ue(Uint16Array)]),t.addExtUnpacker(21,[Ke,ue(Int32Array)]),t.addExtUnpacker(22,[Ke,ue(Uint32Array)]),t.addExtUnpacker(23,[Ke,ue(Float32Array)]),typeof Float64Array!="undefined"&&t.addExtUnpacker(24,[Ke,ue(Float64Array)]),typeof Uint8ClampedArray!="undefined"&&t.addExtUnpacker(25,ue(Uint8ClampedArray)),t.addExtUnpacker(26,Ke),t.addExtUnpacker(29,[Ke,ue(DataView)])),ea.hasBuffer&&t.addExtUnpacker(27,ue(df))}function ye(t){return Pr||(Pr=Ri.decode),Pr(t)}function mf(t){return RegExp.apply(null,t)}function ut(t){return function(e){var n=new t;for(var r in hf)n[r]=e[r];return n}}function ue(t){return function(e){return new t(e)}}function Ke(t){return new Uint8Array(t).buffer}var mr={},ta=dr,na=fr,ra=na.Uint64BE,ia=na.Int64BE;mr.getReadFormat=yf;mr.readUint8=sa;var Ci=me,gr=Et,gf=typeof Map!="undefined",vf=!0;function yf(t){var e=Ci.hasArrayBuffer&&t&&t.binarraybuffer,n=t&&t.int64,r=gf&&t&&t.usemap,i={map:r?wf:_f,array:bf,str:Ef,bin:e?kf:If,ext:Sf,uint8:sa,uint16:xf,uint32:Tf,uint64:Tn(8,n?Df:Of),int8:Af,int16:Rf,int32:Cf,int64:Tn(8,n?Nf:Pf),float32:Tn(4,Uf),float64:Tn(8,Bf)};return i}function _f(t,e){var n={},r,i=new Array(e),s=new Array(e),o=t.codec.decode;for(r=0;r<e;r++)i[r]=o(t),s[r]=o(t);for(r=0;r<e;r++)n[i[r]]=s[r];return n}function wf(t,e){var n=new Map,r,i=new Array(e),s=new Array(e),o=t.codec.decode;for(r=0;r<e;r++)i[r]=o(t),s[r]=o(t);for(r=0;r<e;r++)n.set(i[r],s[r]);return n}function bf(t,e){for(var n=new Array(e),r=t.codec.decode,i=0;i<e;i++)n[i]=r(t);return n}function Ef(t,e){var n=t.reserve(e),r=n+e;return gr.toString.call(t.buffer,"utf-8",n,r)}function If(t,e){var n=t.reserve(e),r=n+e,i=gr.slice.call(t.buffer,n,r);return Ci.from(i)}function kf(t,e){var n=t.reserve(e),r=n+e,i=gr.slice.call(t.buffer,n,r);return Ci.Uint8Array.from(i).buffer}function Sf(t,e){var n=t.reserve(e+1),r=t.buffer[n++],i=n+e,s=t.codec.getExtUnpacker(r);if(!s)throw new Error("Invalid ext type: "+(r&&"0x"+r.toString(16)));var o=gr.slice.call(t.buffer,n,i);return s(o)}function sa(t){var e=t.reserve(1);return t.buffer[e]}function Af(t){var e=t.reserve(1),n=t.buffer[e];return n&128?n-256:n}function xf(t){var e=t.reserve(2),n=t.buffer;return n[e++]<<8|n[e]}function Rf(t){var e=t.reserve(2),n=t.buffer,r=n[e++]<<8|n[e];return r&32768?r-65536:r}function Tf(t){var e=t.reserve(4),n=t.buffer;return n[e++]*16777216+(n[e++]<<16)+(n[e++]<<8)+n[e]}function Cf(t){var e=t.reserve(4),n=t.buffer;return n[e++]<<24|n[e++]<<16|n[e++]<<8|n[e]}function Tn(t,e){return function(n){var r=n.reserve(t);return e.call(n.buffer,r,vf)}}function Of(t){return new ra(this,t).toNumber()}function Pf(t){return new ia(this,t).toNumber()}function Df(t){return new ra(this,t)}function Nf(t){return new ia(this,t)}function Uf(t){return ta.read(this,t,!1,23,4)}function Bf(t){return ta.read(this,t,!1,52,8)}var oa={},Mf=mr;oa.getReadToken=Lf;function Lf(t){var e=Mf.getReadFormat(t);return t&&t.useraw?Ff(e):aa(e)}function aa(t){var e,n=new Array(256);for(e=0;e<=127;e++)n[e]=Zt(e);for(e=128;e<=143;e++)n[e]=Be(e-128,t.map);for(e=144;e<=159;e++)n[e]=Be(e-144,t.array);for(e=160;e<=191;e++)n[e]=Be(e-160,t.str);for(n[192]=Zt(null),n[193]=null,n[194]=Zt(!1),n[195]=Zt(!0),n[196]=he(t.uint8,t.bin),n[197]=he(t.uint16,t.bin),n[198]=he(t.uint32,t.bin),n[199]=he(t.uint8,t.ext),n[200]=he(t.uint16,t.ext),n[201]=he(t.uint32,t.ext),n[202]=t.float32,n[203]=t.float64,n[204]=t.uint8,n[205]=t.uint16,n[206]=t.uint32,n[207]=t.uint64,n[208]=t.int8,n[209]=t.int16,n[210]=t.int32,n[211]=t.int64,n[212]=Be(1,t.ext),n[213]=Be(2,t.ext),n[214]=Be(4,t.ext),n[215]=Be(8,t.ext),n[216]=Be(16,t.ext),n[217]=he(t.uint8,t.str),n[218]=he(t.uint16,t.str),n[219]=he(t.uint32,t.str),n[220]=he(t.uint16,t.array),n[221]=he(t.uint32,t.array),n[222]=he(t.uint16,t.map),n[223]=he(t.uint32,t.map),e=224;e<=255;e++)n[e]=Zt(e-256);return n}function Ff(t){var e,n=aa(t).slice();for(n[217]=n[196],n[218]=n[197],n[219]=n[198],e=160;e<=191;e++)n[e]=Be(e-160,t.bin);return n}function Zt(t){return function(){return t}}function he(t,e){return function(n){var r=t(n);return e(n,r)}}function Be(t,e){return function(n){return e(n,t)}}var jf=ar.ExtBuffer,Hf=Zo,Vf=mr.readUint8,$f=oa,Oi=It;Oi.install({addExtUnpacker:zf,getExtUnpacker:Kf,init:ca});Qo.preset=ca.call(Oi.preset);function Wf(t){var e=$f.getReadToken(t);return n;function n(r){var i=Vf(r),s=e[i];if(!s)throw new Error("Invalid type: "+(i&&"0x"+i.toString(16)));return s(r)}}function ca(){var t=this.options;return this.decode=Wf(t),t&&t.preset&&Hf.setExtUnpackers(this),this}function zf(t,e){var n=this.extUnpackers||(this.extUnpackers=[]);n[t]=Oi.filter(e)}function Kf(t){var e=this.extUnpackers||(this.extUnpackers=[]);return e[t]||n;function n(r){return new jf(r,t)}}Ti.DecodeBuffer=jt;var Gf=Qo.preset,qf=pr.FlexDecoder;qf.mixin(jt.prototype);function jt(t){if(!(this instanceof jt))return new jt(t);if(t&&(this.options=t,t.codec)){var e=this.codec=t.codec;e.bufferish&&(this.bufferish=e.bufferish)}}jt.prototype.codec=Gf;jt.prototype.fetch=function(){return this.codec.decode(this)};Ri.decode=Yf;var Jf=Ti.DecodeBuffer;function Yf(t,e){var n=new Jf(e);return n.write(t),n.read()}var Pi={exports:{}};/**
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
 */(function(t){function e(){if(!(this instanceof e))return new e}(function(n){t.exports=n;var r="listeners",i={on:o,once:a,off:c,emit:u};s(n.prototype),n.mixin=s;function s(f){for(var h in i)f[h]=i[h];return f}function o(f,h){return l(this,f).push(h),this}function a(f,h){var g=this;return _.originalListener=h,l(g,f).push(_),g;function _(){c.call(g,f,_),h.apply(this,arguments)}}function c(f,h){var g=this,_;if(!arguments.length)delete g[r];else if(h){if(_=l(g,f,!0),_){if(_=_.filter(E),!_.length)return c.call(g,f);g[r][f]=_}}else if(_=g[r],_&&(delete _[f],!Object.keys(_).length))return c.call(g);return g;function E(y){return y!==h&&y.originalListener!==h}}function u(f,h){var g=this,_=l(g,f,!0);if(!_)return!1;var E=arguments.length;if(E===1)_.forEach(d);else if(E===2)_.forEach(v);else{var y=Array.prototype.slice.call(arguments,1);_.forEach(I)}return!!_.length;function d(w){w.call(g)}function v(w){w.call(g,h)}function I(w){w.apply(g,y)}}function l(f,h,g){if(!(g&&!f[r])){var _=f[r]||(f[r]={});return _[h]||(_[h]=[])}}})(e)})(Pi);var Xf=Pi.exports,ua=Ii.EncodeBuffer;function Ht(t){if(!(this instanceof Ht))return new Ht(t);ua.call(this,t)}Ht.prototype=new ua;Xf.mixin(Ht.prototype);Ht.prototype.encode=function(t){this.write(t),this.emit("data",this.read())};Ht.prototype.end=function(t){arguments.length&&this.encode(t),this.flush(),this.emit("end")};var Qf=Pi.exports,la=Ti.DecodeBuffer;function yt(t){if(!(this instanceof yt))return new yt(t);la.call(this,t)}yt.prototype=new la;Qf.mixin(yt.prototype);yt.prototype.decode=function(t){arguments.length&&this.write(t),this.flush()};yt.prototype.push=function(t){this.emit("data",t)};yt.prototype.end=function(t){this.decode(t),this.emit("end")};It.preset;var qn=Ei.encode,Zf=Ri.decode,Vt=(t=>(t[t.JOIN=0]="JOIN",t[t.LEAVE=1]="LEAVE",t[t.USERS=2]="USERS",t[t.CONNECT=3]="CONNECT",t[t.DISCONNECT=4]="DISCONNECT",t[t.MESSAGE_CREATE=5]="MESSAGE_CREATE",t[t.MESSAGE_DELETE=6]="MESSAGE_DELETE",t[t.MESSAGE_EDIT=7]="MESSAGE_EDIT",t[t.PING=8]="PING",t[t.PONG=9]="PONG",t[t.SESSION=10]="SESSION",t))(Vt||{});const Nn=class{constructor({type:t,data:e=[]}){this.type=t,this.data=e}deflate(){return[this.type,...this.data||[]]}encode(){return qn(this.deflate())}static typesArray(){const t=[];for(const e in Vt)t.push(Vt[e]);return t}static inflate(t){let e=new Uint8Array(t instanceof DataView?t.buffer:t),n=Zf(e);if(!Array.isArray(n))try{if(n=Array.from(n),!n)return!1}catch{return!1}return new Nn({type:n.shift(),data:n.length==0?[]:n})}static deflate(t){return[t.type,...t.data||[]]}static encode(t){return qn(Nn.deflate(t))}static safeSend(t){return e=>{e instanceof Uint8Array||(e=Nn.encode(e));try{t(e.buffer)}catch(n){console.error(n)}}}};let Y=Nn;Y.types=Vt;qn([Vt.PING]);qn([Vt.PONG]);class _s extends EventTarget{constructor(){super(),this.ws=null}wsHandshake(){const e=Y.encode(new Y({type:Y.types.CONNECT}));return this.ws.send(e),!0}connect(){const e=window.location.protocol==="http:"?"ws":"wss",n=window.location.hostname==="localhost"?"localhost:8000":"blitzv1.herokuapp.com",r=`${e}://${n}`,i=new WebSocket(r);this.ws=i,i.binaryType="arraybuffer",i.addEventListener("open",()=>this.wsHandshake()&&de.logc("WS_OPEN","#A020F0")),i.addEventListener("error",console.error),i.addEventListener("close",()=>de.logc("WS_CLOSE","red")),i.addEventListener("message",s=>{const o=Y.inflate(s.data);if(!o)return;const a=Y.types[o.type];de.logc(a,"cyan");let c,u,l;switch(o.type){case Y.types.CONNECT:c={clientId:o.data[0]};break;case Y.types.SESSION:c={sessionKey:o.data[0],iv:o.data[1]};break;case Y.types.MESSAGE_CREATE:l=o.data,c={messageId:l[0],senderId:l[1],senderPublicKey:l[2],data:l[3]};break;case Y.types.MESSAGE_DELETE:l=o.data,c={messageId:l[0]};break;case Y.types.JOIN:l=o.data,u=l[1],c={message:l[0],users:u||[]};break;case Y.types.USERS:c=o.data[0];case Y.types.LEAVE:l=o.data,u=l[1],c={message:l[0],users:u||[]};break}this.dispatchEvent(new CustomEvent(a,{detail:c}))})}send(e){!this.ws||this.ws.readyState===WebSocket.CLOSED||this.ws.send(Y.encode(e))}}const ft="D:/git projects/wsChatApp/frontend/src/pages/ChatMessage.svelte";function Xr(t){let e,n,r;const i={c:function(){e=N("span"),e.textContent="\u2716",b(e,"class","close"),D(e,ft,38,16,1413)},m:function(o,a){Q(o,e,a),n||(r=sr(e,"click",t[2],!1,!1,!1),n=!0)},p:te,d:function(o){o&&Z(e),n=!1,r()}};return L("SvelteRegisterBlock",{block:i,id:Xr.name,type:"if",source:"(38:12) {#if data.authorId === $client.id}",ctx:t}),i}function Qr(t){let e,n,r,i,s,o,a=t[0].author+"",c,u,l,f=new Date(t[0].timestamp).toLocaleString("en-US",{hour:"numeric",hour12:!0,minute:"numeric"})+"",h,g,_,E,y=t[0].content+"",d,v,I=t[0].authorId===t[1].id&&Xr(t);const w={c:function(){e=N("div"),n=N("img"),i=K(),s=N("div"),o=N("p"),c=Se(a),u=K(),l=N("span"),h=Se(f),g=K(),I&&I.c(),_=K(),E=N("p"),d=Se(y),Vn(n.src,r=`https://avatars.dicebear.com/api/adventurer-neutral/${t[0].avatar}.svg`)||b(n,"src",r),b(n,"alt","avatar"),b(n,"class","avatar"),D(n,ft,22,4,872),D(l,ft,30,12,1117),b(o,"class","meta"),D(o,ft,28,8,1060),b(E,"class","text"),D(E,ft,41,8,1516),b(s,"class","meta-wrapper"),D(s,ft,27,4,1024),b(e,"class",v="message "+t[0].id),D(e,ft,21,0,835)},l:function(A){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(A,T){Q(A,e,T),R(e,n),R(e,i),R(e,s),R(s,o),R(o,c),R(o,u),R(o,l),R(l,h),R(o,g),I&&I.m(o,null),R(s,_),R(s,E),R(E,d)},p:function(A,[T]){T&1&&!Vn(n.src,r=`https://avatars.dicebear.com/api/adventurer-neutral/${A[0].avatar}.svg`)&&b(n,"src",r),T&1&&a!==(a=A[0].author+"")&&pt(c,a),T&1&&f!==(f=new Date(A[0].timestamp).toLocaleString("en-US",{hour:"numeric",hour12:!0,minute:"numeric"})+"")&&pt(h,f),A[0].authorId===A[1].id?I?I.p(A,T):(I=Xr(A),I.c(),I.m(o,null)):I&&(I.d(1),I=null),T&1&&y!==(y=A[0].content+"")&&pt(d,y),T&1&&v!==(v="message "+A[0].id)&&b(e,"class",v)},i:te,o:te,d:function(A){A&&Z(e),I&&I.d()}};return L("SvelteRegisterBlock",{block:w,id:Qr.name,type:"component",source:"",ctx:t}),w}function ed(t,e,n){let r;ne(le,"client"),re(t,le,l=>n(1,r=l));let{$$slots:i={},$$scope:s}=e;it("ChatMessage",i,[]);let{data:o,wsm:a}=e;function c(){const l=this.parentNode.parentNode.parentNode;if(!(l&&l.classList.item(1)))return de.logc("ERROR MESSAGE_DELETE","red");a.send(new Y({type:Y.types.MESSAGE_DELETE,data:[{senderId:r.id,messageId:l.classList.item(1)}]}))}const u=["data","wsm"];return Object.keys(e).forEach(l=>{!~u.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<ChatMessage> was created with unknown prop '${l}'`)}),t.$$set=l=>{"data"in l&&n(0,o=l.data),"wsm"in l&&n(3,a=l.wsm)},t.$capture_state=()=>({client:le,Logger:de,Message:Y,data:o,wsm:a,deleteMessage:c,$client:r}),t.$inject_state=l=>{"data"in l&&n(0,o=l.data),"wsm"in l&&n(3,a=l.wsm)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[o,r,c,a]}class fa extends st{constructor(e){super(e),rt(this,e,ed,Qr,We,{data:0,wsm:3}),L("SvelteRegisterComponent",{component:this,tagName:"ChatMessage",options:e,id:Qr.name});const{ctx:n}=this.$$,r=e.props||{};n[0]===void 0&&!("data"in r)&&console.warn("<ChatMessage> was created without expected prop 'data'"),n[3]===void 0&&!("wsm"in r)&&console.warn("<ChatMessage> was created without expected prop 'wsm'")}get data(){throw new Error("<ChatMessage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<ChatMessage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get wsm(){throw new Error("<ChatMessage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set wsm(e){throw new Error("<ChatMessage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Dr="D:/git projects/wsChatApp/frontend/src/pages/Users.svelte";function Zr(t){let e,n,r,i,s,o=t[0].username+"",a;const c={c:function(){e=N("div"),n=N("img"),i=K(),s=N("p"),a=Se(o),Vn(n.src,r="https://avatars.dicebear.com/api/adventurer-neutral/"+t[0].avatar+".svg")||b(n,"src",r),b(n,"alt","avatar"),b(n,"class","avatar"),D(n,Dr,4,4,73),b(s,"class","username"),D(s,Dr,5,4,188),b(e,"class","user"),D(e,Dr,3,0,49)},l:function(l){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(l,f){Q(l,e,f),R(e,n),R(e,i),R(e,s),R(s,a)},p:function(l,[f]){f&1&&!Vn(n.src,r="https://avatars.dicebear.com/api/adventurer-neutral/"+l[0].avatar+".svg")&&b(n,"src",r),f&1&&o!==(o=l[0].username+"")&&pt(a,o)},i:te,o:te,d:function(l){l&&Z(e)}};return L("SvelteRegisterBlock",{block:c,id:Zr.name,type:"component",source:"",ctx:t}),c}function td(t,e,n){let{$$slots:r={},$$scope:i}=e;it("Users",r,[]);let{data:s}=e;const o=["data"];return Object.keys(e).forEach(a=>{!~o.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Users> was created with unknown prop '${a}'`)}),t.$$set=a=>{"data"in a&&n(0,s=a.data)},t.$capture_state=()=>({data:s}),t.$inject_state=a=>{"data"in a&&n(0,s=a.data)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[s]}class da extends st{constructor(e){super(e),rt(this,e,td,Zr,We,{data:0}),L("SvelteRegisterComponent",{component:this,tagName:"Users",options:e,id:Zr.name});const{ctx:n}=this.$$,r=e.props||{};n[0]===void 0&&!("data"in r)&&console.warn("<Users> was created without expected prop 'data'")}get data(){throw new Error("<Users>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Users>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}class Fe{static async generateKeyPair(){const e=await window.crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveKey","deriveBits"]),n=await window.crypto.subtle.exportKey("jwk",e.publicKey),r=await window.crypto.subtle.exportKey("jwk",e.privateKey);return{publicKeyJwk:n,privateKeyJwk:r}}static async deriveKey(e,n){const r=await window.crypto.subtle.importKey("jwk",e,{name:"ECDH",namedCurve:"P-256"},!0,[]),i=await window.crypto.subtle.importKey("jwk",n,{name:"ECDH",namedCurve:"P-256"},!0,["deriveKey","deriveBits"]);return await window.crypto.subtle.deriveKey({name:"ECDH",public:r},i,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"])}static async encrypt(e,n,r){const i=new TextEncoder().encode(e),s=await window.crypto.subtle.encrypt({name:"AES-GCM",iv:new TextEncoder().encode("Initialization Vector")},n,i);return new Uint8Array(s)}static async decrypt(e,n,r){const i={name:"AES-GCM",iv:new TextEncoder().encode("Initialization Vector")},s=await window.crypto.subtle.decrypt(i,n,e).catch(o=>console.error("decrypt func",o));return new TextDecoder().decode(s)}}Fe.crypto=window.crypto;class ws{constructor(e,n){this.data=e,this.recipientId=n}serialize(){return{data:this.data,recipientId:this.recipientId}}}const bs=t=>typeof t=="undefined",nd=t=>typeof t=="function",ha=t=>typeof t=="number";function vr(){let t=0;return()=>t++}function rd(){return Math.random().toString(36).substring(2)}const Ce=typeof window=="undefined";function pa(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const vn=t=>`@@svnav-ctx__${t}`,Un=vn("LOCATION"),tt=vn("ROUTER"),ei=vn("ROUTE"),Es=vn("ROUTE_PARAMS"),Is=vn("FOCUS_ELEM"),ma=/^:(.+)/,ks=(t,e)=>t.substr(0,e.length)===e,id=t=>t==="",sd=t=>ma.test(t),ga=t=>t[0]==="*",od=t=>t.replace(/\*.*$/,""),va=t=>t.replace(/(^\/+|\/+$)/g,"");function De(t,e=!1){const n=va(t).split("/");return e?n.filter(Boolean):n}const Nr=(t,e)=>t+(e?`?${e}`:""),Jn=t=>`/${va(t)}`;function $t(...t){const e=r=>De(r,!0).join("/"),n=t.map(e).join("/");return Jn(n)}const ya=1,fn=2,nt=3,ad=4,_a=5,cd=6,wa=7,ud=8,ld=9,ba=10,Ea=11,fd={[ya]:"Link",[fn]:"Route",[nt]:"Router",[ad]:"useFocus",[_a]:"useLocation",[cd]:"useMatch",[wa]:"useNavigate",[ud]:"useParams",[ld]:"useResolvable",[ba]:"useResolve",[Ea]:"navigate"},Di=t=>fd[t];function dd(t,e){let n;return t===fn?n=e.path?`path="${e.path}"`:"default":t===ya?n=`to="${e.to}"`:t===nt&&(n=`basepath="${e.basepath||""}"`),`<${Di(t)} ${n||""} />`}function hd(t,e,n,r){const i=n&&dd(r||t,n),s=i?`

Occurred in: ${i}`:"",o=Di(t),a=nd(e)?e(o):e;return`<${o}> ${a}${s}`}const Ia=t=>(...e)=>t(hd(...e)),ka=Ia(t=>{throw new Error(t)}),on=Ia(console.warn),Ss=4,pd=3,md=2,gd=1,vd=1;function yd(t,e){const n=t.default?0:De(t.fullPath).reduce((r,i)=>{let s=r;return s+=Ss,id(i)?s+=vd:sd(i)?s+=md:ga(i)?s-=Ss+gd:s+=pd,s},0);return{route:t,score:n,index:e}}function _d(t){return t.map(yd).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function ti(t,e){let n,r;const[i]=e.split("?"),s=De(i),o=s[0]==="",a=_d(t);for(let c=0,u=a.length;c<u;c++){const{route:l}=a[c];let f=!1;const h={},g=d=>ze(Ee({},l),{params:h,uri:d});if(l.default){r=g(e);continue}const _=De(l.fullPath),E=Math.max(s.length,_.length);let y=0;for(;y<E;y++){const d=_[y],v=s[y];if(!bs(d)&&ga(d)){const w=d==="*"?"*":d.slice(1);h[w]=s.slice(y).map(decodeURIComponent).join("/");break}if(bs(v)){f=!0;break}const I=ma.exec(d);if(I&&!o){const w=decodeURIComponent(v);h[I[1]]=w}else if(d!==v){f=!0;break}}if(!f){n=g($t(...s.slice(0,y)));break}}return n||r||null}function ni(t,e){return ti([t],e)}function wd(t,e){if(ks(t,"/"))return t;const[n,r]=t.split("?"),[i]=e.split("?"),s=De(n),o=De(i);if(s[0]==="")return Nr(i,r);if(!ks(s[0],".")){const u=o.concat(s).join("/");return Nr((i==="/"?"":"/")+u,r)}const a=o.concat(s),c=[];return a.forEach(u=>{u===".."?c.pop():u!=="."&&c.push(u)}),Nr(`/${c.join("/")}`,r)}function Ur(t,e){const{pathname:n,hash:r="",search:i="",state:s}=t,o=De(e,!0),a=De(n,!0);for(;o.length;)o[0]!==a[0]&&ka(nt,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:$t(...a),hash:r,search:i,state:s}}const As=t=>t.length===1?"":t;function ri(t){const e=t.indexOf("?"),n=t.indexOf("#"),r=e!==-1,i=n!==-1,s=i?As(t.substr(n)):"",o=i?t.substr(0,n):t,a=r?As(o.substr(e)):"";return{pathname:r?o.substr(0,e):o,search:a,hash:s}}function bd(t,e,n){return $t(n,wd(t,e))}function xs(t,e){const n=Jn(od(t)),r=De(n,!0),i=De(e,!0).slice(0,r.length),s=ni({fullPath:n},$t(...i));return s&&s.uri}const Br="POP",Ed="PUSH",Id="REPLACE";function Mr(t){return ze(Ee({},t.location),{pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"})}function kd(t){let e=[],n=Mr(t),r=Br;const i=(s=e)=>s.forEach(o=>o({location:n,action:r}));return{get location(){return n},listen(s){e.push(s);const o=()=>{n=Mr(t),r=Br,i([s])};i([s]);const a=pa(t,"popstate",o);return()=>{a(),e=e.filter(c=>c!==s)}},navigate(s,o){const{state:a={},replace:c=!1}=o||{};if(r=c?Id:Ed,ha(s))o&&on(Ea,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),r=Br,t.history.go(s);else{const u=ze(Ee({},a),{_key:rd()});try{t.history[c?"replaceState":"pushState"](u,"",s)}catch{t.location[c?"replace":"assign"](s)}}n=Mr(t),i()}}}function Lr(t,e){return ze(Ee({},ri(e)),{state:t})}function Sd(t="/"){let e=0,n=[Lr(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(r,i,s){e++,n=n.slice(0,e),n.push(Lr(r,s))},replaceState(r,i,s){n[e]=Lr(r,s)},go(r){const i=e+r;i<0||i>n.length-1||(e=i)}}}}const Ad=!!(!Ce&&window.document&&window.document.createElement),xd=!Ce&&window.location.origin==="null",ii=kd(Ad&&!xd?window:Sd()),{navigate:Yn}=ii;let je=null,Sa=!0;function Rd(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let r=0;r<n.length;r++){const i=n[r],s=Number(i.dataset.svnavRouter);if(s===t)return!0;if(s===e)return!1}return!1}function Rs(t){(!je||t.level>je.level||t.level===je.level&&Rd(t.routerId,je.routerId))&&(je=t)}function Td(){je=null}function Cd(){Sa=!1}function Ts(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=pa(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function Od(t,e){return Number(t.dataset.svnavRouteEnd)===e}function Pd(t){return/^H[1-6]$/i.test(t.tagName)}function Cs(t,e=document){return e.querySelector(t)}function Dd(t){let n=Cs(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Od(n,t);){if(Pd(n))return n;const r=Cs("h1,h2,h3,h4,h5,h6",n);if(r)return r;n=n.nextElementSibling}return null}function Nd(t){Promise.resolve(gt(t.focusElement)).then(e=>{const n=e||Dd(t.id);n||on(nt,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,fn),!Ts(n)&&Ts(document.documentElement)})}const Os=(t,e,n)=>(r,i)=>Tc().then(()=>{if(!je||Sa){Cd();return}if(r&&Nd(je.route),t.announcements&&i){const{path:s,fullPath:o,meta:a,params:c,uri:u}=je.route,l=t.createAnnouncement({path:s,fullPath:o,meta:a,params:c,uri:u},gt(n));Promise.resolve(l).then(f=>{e.set(f)})}Td()}),Aa="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;",xa="D:/git projects/wsChatApp/frontend/node_modules/.pnpm/svelte-navigator@3.1.6_svelte@3.47.0+typescript@4.6.3/node_modules/svelte-navigator/src/Router.svelte";function Ra(t){let e,n;const r={c:function(){e=N("div"),n=Se(t[0]),b(e,"role","status"),b(e,"aria-atomic","true"),b(e,"aria-live","polite"),b(e,"style",Aa),D(e,xa,195,1,5906)},m:function(s,o){Q(s,e,o),R(e,n)},p:function(s,o){o[0]&1&&pt(n,s[0])},d:function(s){s&&Z(e)}};return L("SvelteRegisterBlock",{block:r,id:Ra.name,type:"if",source:"(195:0) {#if isTopLevelRouter && manageFocus && a11yConfig.announcements}",ctx:t}),r}function si(t){let e,n,r,i,s;const o=t[20].default,a=no(o,t,t[19],null);let c=t[2]&&t[4]&&t[1].announcements&&Ra(t);const u={c:function(){e=N("div"),n=K(),a&&a.c(),r=K(),c&&c.c(),i=ir(),Vr(e,"display","none"),b(e,"aria-hidden","true"),b(e,"data-svnav-router",t[3]),D(e,xa,190,0,5750)},l:function(f){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(f,h){Q(f,e,h),Q(f,n,h),a&&a.m(f,h),Q(f,r,h),c&&c.m(f,h),Q(f,i,h),s=!0},p:function(f,h){a&&a.p&&(!s||h[0]&524288)&&so(a,o,f,f[19],s?io(o,f[19],h,null):oo(f[19]),null),f[2]&&f[4]&&f[1].announcements&&c.p(f,h)},i:function(f){s||(q(a,f),s=!0)},o:function(f){ee(a,f),s=!1},d:function(f){f&&Z(e),f&&Z(n),a&&a.d(f),f&&Z(r),c&&c.d(f),f&&Z(i)}};return L("SvelteRegisterBlock",{block:u,id:si.name,type:"component",source:"",ctx:t}),u}const Ps=vr(),Fr="/";function Ud(t,e,n){let r,i,s,o,a,{$$slots:c={},$$scope:u}=e;it("Router",c,["default"]);let{basepath:l=Fr}=e,{url:f=null}=e,{history:h=ii}=e,{primary:g=!0}=e,{a11y:_={}}=e;const E=Ee({createAnnouncement:C=>`Navigated to ${C.uri}`,announcements:!0},_),y=l,d=Jn(l),v=Te(Un),I=Te(tt),w=!v,P=Ps(),A=g&&!(I&&!I.manageFocus),T=ae("");ne(T,"announcementText"),re(t,T,C=>n(0,a=C));const x=ae([]);ne(x,"routes"),re(t,x,C=>n(18,o=C));const S=ae(null);ne(S,"activeRoute"),re(t,S,C=>n(16,i=C));let p=!1;const m=w?0:I.level+1,k=()=>Ur(Ce?ri(f):h.location,d),O=w?ae(k()):v;ne(O,"location"),re(t,O,C=>n(15,r=C));const G=ae(r);ne(G,"prevLocation"),re(t,G,C=>n(17,s=C));const ie=Os(E,T,O),F=C=>se=>se.filter(ge=>ge.id!==C);function W(C){if(Ce){if(p)return;const se=ni(C,r.pathname);if(se)return p=!0,se}else x.update(se=>{const ge=F(C.id)(se);return ge.push(C),ge})}function M(C){x.update(F(C))}!w&&l!==Fr&&on(nt,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:l}),w&&($n(()=>h.listen(se=>{const ge=Ur(se.location,d);G.set(r),O.set(ge)})),dt(Un,O)),dt(tt,{activeRoute:S,registerRoute:W,unregisterRoute:M,manageFocus:A,level:m,id:P,history:w?h:I.history,basepath:w?d:I.basepath});const U=["basepath","url","history","primary","a11y"];return Object.keys(e).forEach(C=>{!~U.indexOf(C)&&C.slice(0,2)!=="$$"&&C!=="slot"&&console.warn(`<Router> was created with unknown prop '${C}'`)}),t.$$set=C=>{"basepath"in C&&n(10,l=C.basepath),"url"in C&&n(11,f=C.url),"history"in C&&n(12,h=C.history),"primary"in C&&n(13,g=C.primary),"a11y"in C&&n(14,_=C.a11y),"$$scope"in C&&n(19,u=C.$$scope)},t.$capture_state=()=>({createCounter:vr,createId:Ps,getContext:Te,setContext:dt,onMount:$n,writable:ae,LOCATION:Un,ROUTER:tt,globalHistory:ii,normalizePath:Jn,pick:ti,match:ni,normalizeLocation:Ur,createLocation:ri,isSSR:Ce,warn:on,ROUTER_ID:nt,pushFocusCandidate:Rs,visuallyHiddenStyle:Aa,createTriggerFocus:Os,defaultBasepath:Fr,basepath:l,url:f,history:h,primary:g,a11y:_,a11yConfig:E,initialBasepath:y,normalizedBasepath:d,locationContext:v,routerContext:I,isTopLevelRouter:w,routerId:P,manageFocus:A,announcementText:T,routes:x,activeRoute:S,hasActiveRoute:p,level:m,getInitialLocation:k,location:O,prevLocation:G,triggerFocus:ie,createRouteFilter:F,registerRoute:W,unregisterRoute:M,$location:r,$activeRoute:i,$prevLocation:s,$routes:o,$announcementText:a}),t.$inject_state=C=>{"basepath"in C&&n(10,l=C.basepath),"url"in C&&n(11,f=C.url),"history"in C&&n(12,h=C.history),"primary"in C&&n(13,g=C.primary),"a11y"in C&&n(14,_=C.a11y),"hasActiveRoute"in C&&(p=C.hasActiveRoute)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{if(t.$$.dirty[0]&1024&&l!==y&&on(nt,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&294912){const C=ti(o,r.pathname);S.set(C)}if(t.$$.dirty[0]&163840&&w){const C=!!r.hash,se=!C&&A,ge=!C||r.pathname!==s.pathname;ie(se,ge)}t.$$.dirty[0]&65536&&A&&i&&i.primary&&Rs({level:m,routerId:P,route:i})},[a,E,w,P,A,T,x,S,O,G,l,f,h,g,_,r,i,s,o,u,c]}class yr extends st{constructor(e){super(e),rt(this,e,Ud,si,We,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1]),L("SvelteRegisterComponent",{component:this,tagName:"Router",options:e,id:si.name})}get basepath(){throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set basepath(e){throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get url(){throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set url(e){throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get history(){throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set history(e){throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get primary(){throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set primary(e){throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get a11y(){throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set a11y(e){throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function dn(t,e,n=tt,r=nt){Te(n)||ka(t,s=>`You cannot use ${s} outside of a ${Di(r)}.`,e)}const Bd=t=>{const{subscribe:e}=Te(t);return{subscribe:e}};function Xn(){return dn(_a),Bd(Un)}function Md(){const{history:t}=Te(tt);return t}function oi(){const t=Te(ei);return t?cl(t,e=>e.base):ae("/")}function Ld(){dn(ba);const t=oi(),{basepath:e}=Te(tt);return r=>bd(r,gt(t),e)}function Qn(){dn(wa);const t=Ld(),{navigate:e}=Md();return(r,i)=>{const s=ha(r)?r:t(r);return e(s,i)}}const Ds="D:/git projects/wsChatApp/frontend/node_modules/.pnpm/svelte-navigator@3.1.6_svelte@3.47.0+typescript@4.6.3/node_modules/svelte-navigator/src/Route.svelte",Fd=t=>({params:t&16,location:t&8}),Ns=t=>({params:Ce?gt(t[9]):t[4],location:t[3],navigate:t[10]});function ai(t){let e,n;e=new yr({props:{primary:t[1],$$slots:{default:[Oa]},$$scope:{ctx:t}},$$inline:!0});const r={c:function(){Ae(e.$$.fragment)},m:function(s,o){_e(e,s,o),n=!0},p:function(s,o){const a={};o&2&&(a.primary=s[1]),o&264217&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i:function(s){n||(q(e.$$.fragment,s),n=!0)},o:function(s){ee(e.$$.fragment,s),n=!1},d:function(s){we(e,s)}};return L("SvelteRegisterBlock",{block:r,id:ai.name,type:"if",source:"(97:0) {#if isActive}",ctx:t}),r}function Ta(t){let e;const n=t[17].default,r=no(n,t,t[18],Ns),i={c:function(){r&&r.c()},m:function(o,a){r&&r.m(o,a),e=!0},p:function(o,a){r&&r.p&&(!e||a&262168)&&so(r,n,o,o[18],e?io(n,o[18],a,Fd):oo(o[18]),Ns)},i:function(o){e||(q(r,o),e=!0)},o:function(o){ee(r,o),e=!1},d:function(o){r&&r.d(o)}};return L("SvelteRegisterBlock",{block:i,id:Ta.name,type:"else",source:"(113:2) {:else}",ctx:t}),i}function Ca(t){let e,n,r;const i=[{location:t[3]},{navigate:t[10]},Ce?gt(t[9]):t[4],t[11]];var s=t[0];function o(c){let u={};for(let l=0;l<i.length;l+=1)u=xt(u,i[l]);return{props:u,$$inline:!0}}s&&(e=new s(o()));const a={c:function(){e&&Ae(e.$$.fragment),n=ir()},m:function(u,l){e&&_e(e,u,l),Q(u,n,l),r=!0},p:function(u,l){const f=l&3608?Pc(i,[l&8&&{location:u[3]},l&1024&&{navigate:u[10]},l&528&&is(Ce?gt(u[9]):u[4]),l&2048&&is(u[11])]):{};if(s!==(s=u[0])){if(e){Dt();const h=e;ee(h.$$.fragment,1,0,()=>{we(h,1)}),Nt()}s?(e=new s(o()),Ae(e.$$.fragment),q(e.$$.fragment,1),_e(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i:function(u){r||(e&&q(e.$$.fragment,u),r=!0)},o:function(u){e&&ee(e.$$.fragment,u),r=!1},d:function(u){u&&Z(n),e&&we(e,u)}};return L("SvelteRegisterBlock",{block:a,id:Ca.name,type:"if",source:"(105:2) {#if component !== null}",ctx:t}),a}function Oa(t){let e,n,r,i;const s=[Ca,Ta],o=[];function a(u,l){return u[0]!==null?0:1}e=a(t),n=o[e]=s[e](t);const c={c:function(){n.c(),r=ir()},m:function(l,f){o[e].m(l,f),Q(l,r,f),i=!0},p:function(l,f){let h=e;e=a(l),e===h?o[e].p(l,f):(Dt(),ee(o[h],1,1,()=>{o[h]=null}),Nt(),n=o[e],n?n.p(l,f):(n=o[e]=s[e](l),n.c()),q(n,1),n.m(r.parentNode,r))},i:function(l){i||(q(n),i=!0)},o:function(l){ee(n),i=!1},d:function(l){o[e].d(l),l&&Z(r)}};return L("SvelteRegisterBlock",{block:c,id:Oa.name,type:"slot",source:"(98:1) <Router {primary}>",ctx:t}),c}function ci(t){let e,n,r,i,s,o=t[2]&&ai(t);const a={c:function(){e=N("div"),n=K(),o&&o.c(),r=K(),i=N("div"),Vr(e,"display","none"),b(e,"aria-hidden","true"),b(e,"data-svnav-route-start",t[5]),D(e,Ds,95,0,2622),Vr(i,"display","none"),b(i,"aria-hidden","true"),b(i,"data-svnav-route-end",t[5]),D(i,Ds,121,0,3295)},l:function(u){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(u,l){Q(u,e,l),Q(u,n,l),o&&o.m(u,l),Q(u,r,l),Q(u,i,l),s=!0},p:function(u,[l]){u[2]?o?(o.p(u,l),l&4&&q(o,1)):(o=ai(u),o.c(),q(o,1),o.m(r.parentNode,r)):o&&(Dt(),ee(o,1,1,()=>{o=null}),Nt())},i:function(u){s||(q(o),s=!0)},o:function(u){ee(o),s=!1},d:function(u){u&&Z(e),u&&Z(n),o&&o.d(u),u&&Z(r),u&&Z(i)}};return L("SvelteRegisterBlock",{block:a,id:ci.name,type:"component",source:"",ctx:t}),a}const Us=vr();function jd(t,e,n){let r;const i=["path","component","meta","primary"];let s=Yi(e,i),o,a,c,u,{$$slots:l={},$$scope:f}=e;it("Route",l,["default"]);let{path:h=""}=e,{component:g=null}=e,{meta:_={}}=e,{primary:E=!0}=e;dn(fn,e);const y=Us(),{registerRoute:d,unregisterRoute:v,activeRoute:I}=Te(tt);ne(I,"activeRoute"),re(t,I,m=>n(15,o=m));const w=oi();ne(w,"parentBase"),re(t,w,m=>n(16,c=m));const P=Xn();ne(P,"location"),re(t,P,m=>n(3,a=m));const A=ae(null);let T;const x=ae(),S=ae({});ne(S,"params"),re(t,S,m=>n(4,u=m)),dt(ei,x),dt(Es,S),dt(Is,A);const p=Qn();return Ce||es(()=>v(y)),t.$$set=m=>{n(23,e=xt(xt({},e),Ji(m))),n(11,s=Yi(e,i)),"path"in m&&n(12,h=m.path),"component"in m&&n(0,g=m.component),"meta"in m&&n(13,_=m.meta),"primary"in m&&n(1,E=m.primary),"$$scope"in m&&n(18,f=m.$$scope)},t.$capture_state=()=>({createCounter:vr,createId:Us,getContext:Te,onDestroy:es,setContext:dt,writable:ae,get:gt,Router:yr,ROUTER:tt,ROUTE:ei,ROUTE_PARAMS:Es,FOCUS_ELEM:Is,useLocation:Xn,useNavigate:Qn,useRouteBase:oi,usePreflightCheck:dn,isSSR:Ce,extractBaseUri:xs,join:$t,ROUTE_ID:fn,path:h,component:g,meta:_,primary:E,id:y,registerRoute:d,unregisterRoute:v,activeRoute:I,parentBase:w,location:P,focusElement:A,ssrMatch:T,route:x,params:S,navigate:p,isActive:r,$activeRoute:o,$location:a,$parentBase:c,$params:u}),t.$inject_state=m=>{n(23,e=xt(xt({},e),m)),"path"in e&&n(12,h=m.path),"component"in e&&n(0,g=m.component),"meta"in e&&n(13,_=m.meta),"primary"in e&&n(1,E=m.primary),"ssrMatch"in e&&n(14,T=m.ssrMatch),"isActive"in e&&n(2,r=m.isActive)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{if(t.$$.dirty&77834){const m=h==="",k=$t(c,h),O={id:y,path:h,meta:_,default:m,fullPath:m?"":k,base:m?c:xs(k,a.pathname),primary:E,focusElement:A};x.set(O),n(14,T=d(O))}if(t.$$.dirty&49152&&n(2,r=!!(T||o&&o.id===y)),t.$$.dirty&49156&&r){const{params:m}=T||o;S.set(m)}},e=Ji(e),[g,E,r,a,u,y,I,w,P,S,p,s,h,_,T,o,c,l,f]}class Bn extends st{constructor(e){super(e),rt(this,e,jd,ci,We,{path:12,component:0,meta:13,primary:1}),L("SvelteRegisterComponent",{component:this,tagName:"Route",options:e,id:ci.name})}get path(){throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set path(e){throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get component(){throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set component(e){throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get meta(){throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set meta(e){throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get primary(){throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set primary(e){throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const fe="D:/git projects/wsChatApp/frontend/src/pages/Chat.svelte";function Bs(t,e,n){const r=t.slice();return r[11]=e[n],r}function Ms(t,e,n){const r=t.slice();return r[14]=e[n],r}function ui(t){let e,n;e=new da({props:{data:t[14]},$$inline:!0});const r={c:function(){Ae(e.$$.fragment)},m:function(s,o){_e(e,s,o),n=!0},p:function(s,o){const a={};o&2&&(a.data=s[14]),e.$set(a)},i:function(s){n||(q(e.$$.fragment,s),n=!0)},o:function(s){ee(e.$$.fragment,s),n=!1},d:function(s){we(e,s)}};return L("SvelteRegisterBlock",{block:r,id:ui.name,type:"each",source:"(70:16) {#each $users as user}",ctx:t}),r}function li(t){let e,n;e=new fa({props:{wsm:t[0],data:t[11]},$$inline:!0});const r={c:function(){Ae(e.$$.fragment)},m:function(s,o){_e(e,s,o),n=!0},p:function(s,o){const a={};o&1&&(a.wsm=s[0]),o&4&&(a.data=s[11]),e.$set(a)},i:function(s){n||(q(e.$$.fragment,s),n=!0)},o:function(s){ee(e.$$.fragment,s),n=!1},d:function(s){we(e,s)}};return L("SvelteRegisterBlock",{block:r,id:li.name,type:"each",source:"(76:12) {#each $messages as message}",ctx:t}),r}function fi(t){let e,n,r,i,s,o,a,c,u,l,f,h,g,_,E,y,d,v,I,w,P,A,T,x,S=t[1];xn(S);let p=[];for(let F=0;F<S.length;F+=1)p[F]=ui(Ms(t,S,F));const m=F=>ee(p[F],1,1,()=>{p[F]=null});let k=t[2];xn(k);let O=[];for(let F=0;F<k.length;F+=1)O[F]=li(Bs(t,k,F));const G=F=>ee(O[F],1,1,()=>{O[F]=null}),ie={c:function(){e=N("div"),n=N("header"),r=N("h1"),r.textContent="Blitz",i=K(),s=N("main"),o=N("div"),a=N("h3"),a.textContent="Room Name:",c=K(),u=N("h2"),u.textContent="Test",l=K(),f=N("h3"),f.textContent="Users",h=K(),g=N("div");for(let W=0;W<p.length;W+=1)p[W].c();_=K(),E=N("div");for(let W=0;W<O.length;W+=1)O[W].c();y=K(),d=N("div"),v=N("form"),I=N("input"),w=K(),P=N("button"),P.textContent="Send",D(r,fe,58,8,2101),b(n,"class","chat-header"),D(n,fe,57,4,2063),D(a,fe,65,12,2337),b(u,"id","room-name"),D(u,fe,66,12,2370),D(f,fe,67,12,2412),b(g,"id","users"),D(g,fe,68,12,2440),b(o,"class","chat-sidebar"),D(o,fe,64,8,2297),b(E,"class","chat-messages"),D(E,fe,74,8,2610),b(s,"class","chat-main"),D(s,fe,63,4,2263),b(I,"id","msg"),b(I,"type","text"),b(I,"placeholder","Enter Message"),I.required=!0,b(I,"autocomplete","off"),D(I,fe,83,12,2890),b(P,"class","btn"),D(P,fe,90,12,3088),b(v,"id","chat-form"),D(v,fe,82,8,2834),b(d,"class","chat-form-container"),D(d,fe,81,4,2791),b(e,"class","chat-container"),D(e,fe,56,0,2029)},l:function(W){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(W,M){Q(W,e,M),R(e,n),R(n,r),R(e,i),R(e,s),R(s,o),R(o,a),R(o,c),R(o,u),R(o,l),R(o,f),R(o,h),R(o,g);for(let U=0;U<p.length;U+=1)p[U].m(g,null);R(s,_),R(s,E);for(let U=0;U<O.length;U+=1)O[U].m(E,null);R(e,y),R(e,d),R(d,v),R(v,I),R(v,w),R(v,P),A=!0,T||(x=sr(v,"submit",t[4],!1,!1,!1),T=!0)},p:function(W,[M]){if(M&2){S=W[1],xn(S);let U;for(U=0;U<S.length;U+=1){const C=Ms(W,S,U);p[U]?(p[U].p(C,M),q(p[U],1)):(p[U]=ui(C),p[U].c(),q(p[U],1),p[U].m(g,null))}for(Dt(),U=S.length;U<p.length;U+=1)m(U);Nt()}if(M&5){k=W[2],xn(k);let U;for(U=0;U<k.length;U+=1){const C=Bs(W,k,U);O[U]?(O[U].p(C,M),q(O[U],1)):(O[U]=li(C),O[U].c(),q(O[U],1),O[U].m(E,null))}for(Dt(),U=k.length;U<O.length;U+=1)G(U);Nt()}},i:function(W){if(!A){for(let M=0;M<S.length;M+=1)q(p[M]);for(let M=0;M<k.length;M+=1)q(O[M]);A=!0}},o:function(W){p=p.filter(Boolean);for(let M=0;M<p.length;M+=1)ee(p[M]);O=O.filter(Boolean);for(let M=0;M<O.length;M+=1)ee(O[M]);A=!1},d:function(W){W&&Z(e),Qi(p,W),Qi(O,W),T=!1,x()}};return L("SvelteRegisterBlock",{block:ie,id:fi.name,type:"component",source:"",ctx:t}),ie}function Hd(t,e,n){let r,i,s,o,a;ne(le,"client"),re(t,le,d=>n(5,r=d)),ne(qe,"keys"),re(t,qe,d=>n(6,i=d)),ne(Me,"users"),re(t,Me,d=>n(1,s=d)),ne(Re,"messages"),re(t,Re,d=>n(2,a=d));let{$$slots:c={},$$scope:u}=e;it("Chat",c,[]);const l=Qn(),f=Xn();ne(f,"location"),re(t,f,d=>n(7,o=d));let{wsm:h}=e;r.signedIn||l("/",{state:{from:o.pathname},replace:!0});const g=[];$n(()=>{const d=document.getElementById("msg");document.body.addEventListener("focus",()=>(de.logc("CHAT_FOCUS","#A020F0"),d.focus())),d.focus()}),Zi(()=>{const d=document.querySelector(".chat-messages");d.scrollTo(0,d.scrollHeight)});async function _(d){const v=[],I=s;for(let w=0;w<I.length;w++){const P=await Fe.deriveKey(I[w].publicKeyJwk,i.privateKeyJwk),A=await Fe.encrypt(d,P,i.iv),T=I[w].id;v.push(new ws(A,T).serialize())}return v}async function E(d){d.preventDefault();let v=d.target.elements.msg.value;if(v=v.trim(),!v)return;d.target.elements.msg.value="",d.target.elements.msg.focus();const I=[{senderId:r.id,timestamp:Date.now(),data:await _(v)}];h.send(new Y({type:Y.types.MESSAGE_CREATE,data:I}))}const y=["wsm"];return Object.keys(e).forEach(d=>{!~y.indexOf(d)&&d.slice(0,2)!=="$$"&&d!=="slot"&&console.warn(`<Chat> was created with unknown prop '${d}'`)}),t.$$set=d=>{"wsm"in d&&n(0,h=d.wsm)},t.$capture_state=()=>({ChatMsg:fa,Users:da,Message:Y,onMount:$n,afterUpdate:Zi,client:le,keys:qe,messages:Re,users:Me,CryptoClient:Fe,EncryptedMessage:ws,Logger:de,useNavigate:Qn,useLocation:Xn,navigate:l,location:f,wsm:h,messageMap:g,encryptMessage:_,onSubmit:E,$client:r,$keys:i,$users:s,$location:o,$messages:a}),t.$inject_state=d=>{"wsm"in d&&n(0,h=d.wsm)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[h,s,a,f,E]}class Pa extends st{constructor(e){super(e),rt(this,e,Hd,fi,We,{wsm:0}),L("SvelteRegisterComponent",{component:this,tagName:"Chat",options:e,id:fi.name});const{ctx:n}=this.$$,r=e.props||{};n[0]===void 0&&!("wsm"in r)&&console.warn("<Chat> was created without expected prop 'wsm'")}get wsm(){throw new Error("<Chat>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set wsm(e){throw new Error("<Chat>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function Ni(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Da(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vd=Da,Na=new mn("auth","Firebase",Da());/**
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
 */const Ls=new go("@firebase/auth");function Mn(t,...e){Ls.logLevel<=J.ERROR&&Ls.error(`Auth (${or}): ${t}`,...e)}/**
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
 */function xe(t,...e){throw Ui(t,...e)}function Oe(t,...e){return Ui(t,...e)}function $d(t,e,n){const r=Object.assign(Object.assign({},Vd()),{[e]:n});return new mn("auth","Firebase",r).create(e,{appName:t.name})}function Ui(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Na.create(t,...e)}function B(t,e,...n){if(!t)throw Ui(e,...n)}function He(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mn(e),new Error(e)}function $e(t,e){t||He(e)}/**
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
 */const Fs=new Map;function Ve(t){$e(t instanceof Function,"Expected a class definition");let e=Fs.get(t);return e?($e(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fs.set(t,e),e)}/**
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
 */function Wd(t,e){const n=wo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wn(s,e!=null?e:{}))return i;xe(i,"already-initialized")}return n.initialize({options:e})}function zd(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ve);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function di(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Kd(){return js()==="http:"||js()==="https:"}function js(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Gd(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kd()||jc()||"connection"in navigator)?navigator.onLine:!0}function qd(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yn{constructor(e,n){this.shortDelay=e,this.longDelay=n,$e(n>e,"Short delay should be less than long delay!"),this.isMobile=Fc()||Hc()}get(){return Gd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bi(t,e){$e(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ua{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;He("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;He("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;He("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Jd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Yd=new yn(3e4,6e4);function _n(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yt(t,e,n,r,i={}){return Ba(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=gn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ua.fetch()(Ma(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ba(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jd),e);try{const i=new Xd(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Cn(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Cn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Cn(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $d(t,l,u);xe(t,l)}}catch(i){if(i instanceof Gt)throw i;xe(t,"network-request-failed")}}async function wn(t,e,n,r,i={}){const s=await Yt(t,e,n,r,i);return"mfaPendingCredential"in s&&xe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ma(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bi(t.config,i):`${t.config.apiScheme}://${i}`}class Xd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Oe(this.auth,"network-request-failed")),Yd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Oe(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Qd(t,e){return Yt(t,"POST","/v1/accounts:delete",e)}async function Zd(t,e){return Yt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function an(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eh(t,e=!1){const n=bt(t),r=await n.getIdToken(e),i=Mi(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:an(jr(i.auth_time)),issuedAtTime:an(jr(i.iat)),expirationTime:an(jr(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jr(t){return Number(t)*1e3}function Mi(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Mn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Mc(r);return s?JSON.parse(s):(Mn("Failed to decode base64 JWT payload"),null)}catch(s){return Mn("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function th(t){const e=Mi(t);return B(e,"internal-error"),B(typeof e.exp!="undefined","internal-error"),B(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gt&&nh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class La{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=an(this.lastLoginAt),this.creationTime=an(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zn(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Wt(t,Zd(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?oh(s.providerUserInfo):[],a=sh(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new La(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,f)}async function ih(t){const e=bt(t);await Zn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sh(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function oh(t){return t.map(e=>{var{providerId:n}=e,r=Ni(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ah(t,e){const n=await Ba(t,{},async()=>{const r=gn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ma(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ua.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken!="undefined","internal-error"),B(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):th(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ah(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new hn;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hn,this.toJSON())}_performRefresh(){return He("not implemented")}}/**
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
 */function Ge(t,e){B(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class mt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ni(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new La(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Wt(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eh(this,e)}reload(){return ih(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wt(this,Qd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,l;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,v=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:I,emailVerified:w,isAnonymous:P,providerData:A,stsTokenManager:T}=n;B(I&&T,e,"internal-error");const x=hn.fromJSON(this.name,T);B(typeof I=="string",e,"internal-error"),Ge(f,e.name),Ge(h,e.name),B(typeof w=="boolean",e,"internal-error"),B(typeof P=="boolean",e,"internal-error"),Ge(g,e.name),Ge(_,e.name),Ge(E,e.name),Ge(y,e.name),Ge(d,e.name),Ge(v,e.name);const S=new mt({uid:I,auth:e,email:h,emailVerified:w,displayName:f,isAnonymous:P,photoURL:_,phoneNumber:g,tenantId:E,stsTokenManager:x,createdAt:d,lastLoginAt:v});return A&&Array.isArray(A)&&(S.providerData=A.map(p=>Object.assign({},p))),y&&(S._redirectEventId=y),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new hn;i.updateFromServerResponse(n);const s=new mt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zn(s),s}}/**
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
 */class Fa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fa.type="NONE";const Hs=Fa;/**
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
 */function Ln(t,e,n){return`firebase:${t}:${e}:${n}`}class Ot{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ln(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ln("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ot(Ve(Hs),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ve(Hs);const o=Ln(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const f=mt._fromJSON(e,l);u!==s&&(a=f),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ot(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ot(s,e,r))}}/**
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
 */function Vs(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Va(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ja(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wa(e))return"Blackberry";if(za(e))return"Webos";if(Li(e))return"Safari";if((e.includes("chrome/")||Ha(e))&&!e.includes("edge/"))return"Chrome";if($a(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ja(t=ce()){return/firefox\//i.test(t)}function Li(t=ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ha(t=ce()){return/crios\//i.test(t)}function Va(t=ce()){return/iemobile/i.test(t)}function $a(t=ce()){return/android/i.test(t)}function Wa(t=ce()){return/blackberry/i.test(t)}function za(t=ce()){return/webos/i.test(t)}function _r(t=ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ch(t=ce()){var e;return _r(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uh(){return Vc()&&document.documentMode===10}function Ka(t=ce()){return _r(t)||$a(t)||za(t)||Wa(t)||/windows phone/i.test(t)||Va(t)}function lh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ga(t,e=[]){let n;switch(t){case"Browser":n=Vs(ce());break;case"Worker":n=`${Vs(ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${or}/${r}`}/**
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
 */class fh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class dh{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $s(this),this.idTokenSubscription=new $s(this),this.beforeStateQueue=new fh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Na,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ve(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ot.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Zn(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?bt(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ve(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ve(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Ot.create(this,[Ve(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ga(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function wr(t){return bt(t)}class $s{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jc(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Fi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return He("not implemented")}_getIdTokenResponse(e){return He("not implemented")}_linkToIdToken(e,n){return He("not implemented")}_getReauthenticationResolver(e){return He("not implemented")}}async function hh(t,e){return Yt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ph(t,e){return wn(t,"POST","/v1/accounts:signInWithPassword",_n(t,e))}/**
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
 */async function mh(t,e){return wn(t,"POST","/v1/accounts:signInWithEmailLink",_n(t,e))}async function gh(t,e){return wn(t,"POST","/v1/accounts:signInWithEmailLink",_n(t,e))}/**
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
 */class pn extends Fi{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new pn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new pn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ph(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return mh(e,{email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return hh(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gh(e,{idToken:n,email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Pt(t,e){return wn(t,"POST","/v1/accounts:signInWithIdp",_n(t,e))}/**
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
 */const vh="http://localhost";class _t extends Fi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ni(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new _t(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pt(e,n)}buildRequest(){const e={requestUri:vh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gn(n)}return e}}/**
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
 */function yh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _h(t){const e=tn(nn(t)).link,n=e?tn(nn(e)).deep_link_id:null,r=tn(nn(t)).deep_link_id;return(r?tn(nn(r)).link:null)||r||n||e||t}class ji{constructor(e){var n,r,i,s,o,a;const c=tn(nn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,f=yh((i=c.mode)!==null&&i!==void 0?i:null);B(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_h(e);try{return new ji(n)}catch{return null}}}/**
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
 */class Xt{constructor(){this.providerId=Xt.PROVIDER_ID}static credential(e,n){return pn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ji.parseLink(n);return B(r,"argument-error"),pn._fromEmailAndCode(e,r.code,r.tenantId)}}Xt.PROVIDER_ID="password";Xt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class qa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bn extends qa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Je extends bn{constructor(){super("facebook.com")}static credential(e){return _t._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch{return null}}}Je.FACEBOOK_SIGN_IN_METHOD="facebook.com";Je.PROVIDER_ID="facebook.com";/**
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
 */class Ye extends bn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _t._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ye.credential(n,r)}catch{return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com";Ye.PROVIDER_ID="google.com";/**
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
 */class Xe extends bn{constructor(){super("github.com")}static credential(e){return _t._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch{return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com";Xe.PROVIDER_ID="github.com";/**
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
 */class Qe extends bn{constructor(){super("twitter.com")}static credential(e,n){return _t._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qe.credential(n,r)}catch{return null}}}Qe.TWITTER_SIGN_IN_METHOD="twitter.com";Qe.PROVIDER_ID="twitter.com";/**
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
 */async function wh(t,e){return wn(t,"POST","/v1/accounts:signUp",_n(t,e))}/**
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
 */class wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mt._fromIdTokenResponse(e,r,i),o=Ws(r);return new wt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ws(r);return new wt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ws(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class er extends Gt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,er.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new er(e,n,r,i)}}function Ja(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?er._fromErrorAndOperation(t,s,e,r):s})}async function bh(t,e,n=!1){const r=await Wt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wt._forOperation(t,"link",r)}/**
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
 */async function Eh(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Wt(t,Ja(i,s,e,t),n);B(o.idToken,i,"internal-error");const a=Mi(o.idToken);B(a,i,"internal-error");const{sub:c}=a;return B(t.uid===c,i,"user-mismatch"),wt._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&xe(i,"user-mismatch"),o}}/**
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
 */async function Ya(t,e,n=!1){const r="signIn",i=await Ja(t,r,e),s=await wt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ih(t,e){return Ya(wr(t),e)}async function kh(t,e,n){const r=wr(t),i=await wh(r,{returnSecureToken:!0,email:e,password:n}),s=await wt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Sh(t,e,n){return Ih(bt(t),Xt.credential(e,n))}/**
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
 */async function Ah(t,e){return Yt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function zs(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=bt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Wt(r,Ah(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function xh(t){return bt(t).signOut()}const tr="__sak";/**
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
 */class Xa{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tr,"1"),this.storage.removeItem(tr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Rh(){const t=ce();return Li(t)||_r(t)}const Th=1e3,Ch=10;class Qa extends Xa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rh()&&lh(),this.fallbackToPolling=Ka(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);uh()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ch):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Th)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qa.type="LOCAL";const Oh=Qa;/**
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
 */class Za extends Xa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Za.type="SESSION";const ec=Za;/**
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
 */function Ph(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class br{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new br(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await Ph(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}br.receivers=[];/**
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
 */function Hi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Dh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Hi("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Pe(){return window}function Nh(t){Pe().location.href=t}/**
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
 */function tc(){return typeof Pe().WorkerGlobalScope!="undefined"&&typeof Pe().importScripts=="function"}async function Uh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Mh(){return tc()?self:null}/**
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
 */const nc="firebaseLocalStorageDb",Lh=1,nr="firebaseLocalStorage",rc="fbase_key";class En{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Er(t,e){return t.transaction([nr],e?"readwrite":"readonly").objectStore(nr)}function Fh(){const t=indexedDB.deleteDatabase(nc);return new En(t).toPromise()}function hi(){const t=indexedDB.open(nc,Lh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nr,{keyPath:rc})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nr)?e(r):(r.close(),await Fh(),e(await hi()))})})}async function Ks(t,e,n){const r=Er(t,!0).put({[rc]:e,value:n});return new En(r).toPromise()}async function jh(t,e){const n=Er(t,!1).get(e),r=await new En(n).toPromise();return r===void 0?null:r.value}function Gs(t,e){const n=Er(t,!0).delete(e);return new En(n).toPromise()}const Hh=800,Vh=3;class ic{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Vh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=br._getInstance(Mh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Uh(),!this.activeServiceWorker)return;this.sender=new Dh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hi();return await Ks(e,tr,"1"),await Gs(e,tr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ks(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gs(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Er(i,!1).getAll();return new En(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ic.type="LOCAL";const $h=ic;/**
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
 */function Wh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zh(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Oe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Wh().appendChild(r)})}function Kh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new yn(3e4,6e4);/**
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
 */function Gh(t,e){return e?Ve(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vi extends Fi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qh(t){return Ya(t.auth,new Vi(t),t.bypassAuthState)}function Jh(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Eh(n,new Vi(t),t.bypassAuthState)}async function Yh(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),bh(n,new Vi(t),t.bypassAuthState)}/**
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
 */class sc{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qh;case"linkViaPopup":case"linkViaRedirect":return Yh;case"reauthViaPopup":case"reauthViaRedirect":return Jh;default:xe(this.auth,"internal-error")}}resolve(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Xh=new yn(2e3,1e4);class Tt extends sc{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Tt.currentPopupAction&&Tt.currentPopupAction.cancel(),Tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){$e(this.filter.length===1,"Popup operations only handle one event");const e=Hi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Oe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Oe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Oe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Xh.get())};e()}}Tt.currentPopupAction=null;/**
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
 */const Qh="pendingRedirect",Fn=new Map;class Zh extends sc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fn.get(this.auth._key());if(!e){try{const r=await ep(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fn.set(this.auth._key(),e)}return this.bypassAuthState||Fn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ep(t,e){const n=rp(e),r=np(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tp(t,e){Fn.set(t._key(),e)}function np(t){return Ve(t._redirectPersistence)}function rp(t){return Ln(Qh,t.config.apiKey,t.name)}async function ip(t,e,n=!1){const r=wr(t),i=Gh(r,e),o=await new Zh(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const sp=10*60*1e3;class op{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ap(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oc(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Oe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sp&&this.cachedEventUids.clear(),this.cachedEventUids.has(qs(e))}saveEventToCache(e){this.cachedEventUids.add(qs(e)),this.lastProcessedEventTime=Date.now()}}function qs(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ap(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oc(t);default:return!1}}/**
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
 */async function cp(t,e={}){return Yt(t,"GET","/v1/projects",e)}/**
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
 */const up=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lp=/^https?/;async function fp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cp(t);for(const n of e)try{if(dp(n))return}catch{}xe(t,"unauthorized-domain")}function dp(t){const e=di(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lp.test(n))return!1;if(up.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const hp=new yn(3e4,6e4);function Js(){const t=Pe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pp(t){return new Promise((e,n)=>{var r,i,s;function o(){Js(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Js(),n(Oe(t,"network-request-failed"))},timeout:hp.get()})}if(!((i=(r=Pe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pe().gapi)===null||s===void 0)&&s.load)o();else{const a=Kh("iframefcb");return Pe()[a]=()=>{gapi.load?o():n(Oe(t,"network-request-failed"))},zh(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw jn=null,e})}let jn=null;function mp(t){return jn=jn||pp(t),jn}/**
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
 */const gp=new yn(5e3,15e3),vp="__/auth/iframe",yp="emulator/auth/iframe",_p={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bp(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bi(e,yp):`https://${t.config.authDomain}/${vp}`,r={apiKey:e.apiKey,appName:t.name,v:or},i=wp.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${gn(r).slice(1)}`}async function Ep(t){const e=await mp(t),n=Pe().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:bp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_p,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Oe(t,"network-request-failed"),a=Pe().setTimeout(()=>{s(o)},gp.get());function c(){Pe().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Ip={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kp=500,Sp=600,Ap="_blank",xp="http://localhost";class Ys{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rp(t,e,n,r=kp,i=Sp){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ip),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ce().toLowerCase();n&&(a=Ha(u)?Ap:n),ja(u)&&(e=e||xp,c.scrollbars="yes");const l=Object.entries(c).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(ch(u)&&a!=="_self")return Tp(e||"",a),new Ys(null);const f=window.open(e||"",a,l);B(f,t,"popup-blocked");try{f.focus()}catch{}return new Ys(f)}function Tp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Cp="__/auth/handler",Op="emulator/auth/handler";function Xs(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:or,eventId:i};if(e instanceof qa){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof bn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Pp(t)}?${gn(a).slice(1)}`}function Pp({config:t}){return t.emulator?Bi(t,Op):`https://${t.authDomain}/${Cp}`}/**
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
 */const Hr="webStorageSupport";class Dp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ec,this._completeRedirectFn=ip,this._overrideRedirectResult=tp}async _openPopup(e,n,r,i){var s;$e((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Xs(e,n,r,di(),i);return Rp(e,o,Hi())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Nh(Xs(e,n,r,di(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):($e(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ep(e),r=new op(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hr,{type:Hr},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hr];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ka()||Li()||_r()}}const Np=Dp;var Qs="@firebase/auth",Zs="0.20.5";/**
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
 */class Up{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Bp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Mp(t){un(new Ut("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{B(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),B(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ga(t)},l=new dh(a,c,u);return zd(l,n),l})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),un(new Ut("auth-internal",e=>{const n=wr(e.getProvider("auth").getImmediate());return(r=>new Up(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(Qs,Zs,Bp(t)),Ct(Qs,Zs,"esm2017")}/**
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
 */function On(t=Ju()){const e=wo(t,"auth");return e.isInitialized()?e.getImmediate():Wd(t,{popupRedirectResolver:Np,persistence:[$h,Oh,ec]})}Mp("Browser");class rr{static async update(e){const r=On().currentUser;if(!r)return console.log("Auth user update error, not signed in");try{await zs(r,{displayName:e})}catch(i){return console.log("Auth user update error"),console.log(i),i.code}return!0}static async signUp(e,n,r){const i=On();let s;try{s=await kh(i,n,r),await zs(i.currentUser,{displayName:e})}catch(a){return console.log("Auth signup error"),console.log(a),{error:!0,detail:a.code}}const o=s.user;return{error:!1,detail:o}}static async signIn(e,n){const r=On();let i;try{i=await Sh(r,e,n)}catch(o){return console.log("Auth signin error"),console.log(),{error:!0,detail:o.code}}const s=i.user;return{error:!1,detail:s}}static async signOut(){const e=On();try{await xh(e)}catch(n){console.log("Auth signout error"),console.log(n)}}}const ke="D:/git projects/wsChatApp/frontend/src/pages/SignIn.svelte";function pi(t){let e,n=t[0].detail.split("/")[1].split("-").join(" ")+"",r;const i={c:function(){e=N("div"),r=Se(n),b(e,"class","join-main-error"),D(e,ke,26,12,892)},m:function(o,a){Q(o,e,a),R(e,r)},p:function(o,a){a&1&&n!==(n=o[0].detail.split("/")[1].split("-").join(" ")+"")&&pt(r,n)},d:function(o){o&&Z(e)}};return L("SvelteRegisterBlock",{block:i,id:pi.name,type:"if",source:"(26:8) {#if user && user.error}",ctx:t}),i}function mi(t){let e,n,r,i,s,o,a,c,u,l,f,h,g,_,E,y,d,v=t[0]&&t[0].error&&pi(t);const I={c:function(){e=N("div"),n=N("header"),r=N("h1"),i=N("i"),s=Se("Blitz"),o=K(),a=N("main"),v&&v.c(),c=K(),u=N("form"),l=N("div"),f=N("input"),h=K(),g=N("input"),_=K(),E=N("button"),E.textContent="Sign In",D(i,ke,22,12,784),D(r,ke,22,8,780),b(n,"class","join-header"),D(n,ke,21,4,742),b(f,"type","text"),b(f,"name","email"),b(f,"id","email"),b(f,"placeholder","example@gmail.com"),b(f,"autocomplete","off"),f.required=!0,D(f,ke,32,16,1117),b(g,"type","password"),b(g,"name","password"),b(g,"id","password"),b(g,"placeholder","password"),b(g,"autocomplete","off"),g.required=!0,D(g,ke,40,16,1383),b(l,"class","form-control"),D(l,ke,31,12,1073),b(E,"type","submit"),b(E,"id","signin-btn"),b(E,"class","btn"),D(E,ke,49,12,1666),D(u,ke,30,8,1032),b(a,"class","join-main"),D(a,ke,24,4,820),b(e,"class","join-container"),D(e,ke,20,0,708)},l:function(P){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(P,A){Q(P,e,A),R(e,n),R(n,r),R(r,i),R(r,s),R(e,o),R(e,a),v&&v.m(a,null),R(a,c),R(a,u),R(u,l),R(l,f),R(l,h),R(l,g),R(u,_),R(u,E),y||(d=sr(u,"submit",t[1],!1,!1,!1),y=!0)},p:function(P,[A]){P[0]&&P[0].error?v?v.p(P,A):(v=pi(P),v.c(),v.m(a,c)):v&&(v.d(1),v=null)},i:te,o:te,d:function(P){P&&Z(e),v&&v.d(),y=!1,d()}};return L("SvelteRegisterBlock",{block:I,id:mi.name,type:"component",source:"",ctx:t}),I}function Lp(t,e,n){let r;ne(le,"client"),re(t,le,l=>n(2,r=l));let{$$slots:i={},$$scope:s}=e;it("SignIn",i,[]);let o;const a=ts();async function c(l){const f=document.getElementById("signin-btn");l.preventDefault();let h=l.target.email.value,g=l.target.password.value;f.disabled=!0,n(0,o=await rr.signIn(h,g)),o.error||(Xi(le,r.signedIn=!0,r),Xi(le,r.username=o.detail.displayName,r),a("signin",{username:o.detail.displayName})),f.disabled=!1}const u=[];return Object.keys(e).forEach(l=>{!~u.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<SignIn> was created with unknown prop '${l}'`)}),t.$capture_state=()=>({createEventDispatcher:ts,Accounts:rr,client:le,user:o,dispatch:a,onSubmit:c,$client:r}),t.$inject_state=l=>{"user"in l&&n(0,o=l.user)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[o,c]}class $i extends st{constructor(e){super(e),rt(this,e,Lp,mi,We,{}),L("SvelteRegisterComponent",{component:this,tagName:"SignIn",options:e,id:mi.name})}}const pe="D:/git projects/wsChatApp/frontend/src/pages/SignUp.svelte";function gi(t){let e,n=t[0].detail.split("/")[1].split("-").join(" ")+"",r;const i={c:function(){e=N("div"),r=Se(n),b(e,"class","join-main-error"),D(e,pe,22,12,721)},m:function(o,a){Q(o,e,a),R(e,r)},p:function(o,a){a&1&&n!==(n=o[0].detail.split("/")[1].split("-").join(" ")+"")&&pt(r,n)},d:function(o){o&&Z(e)}};return L("SvelteRegisterBlock",{block:i,id:gi.name,type:"if",source:"(22:8) {#if user && user.error}",ctx:t}),i}function vi(t){let e,n,r,i,s,o,a,c,u,l,f,h,g,_,E,y,d,v,I,w,P,A=t[0]&&t[0].error&&gi(t);const T={c:function(){e=N("div"),n=N("header"),r=N("h1"),i=N("i"),s=Se("Blitz"),o=K(),a=N("main"),A&&A.c(),c=K(),u=N("form"),l=N("div"),f=N("label"),f.textContent="Username",h=K(),g=N("input"),_=K(),E=N("input"),y=K(),d=N("input"),v=K(),I=N("button"),I.textContent="Sign Up",D(i,pe,18,12,613),D(r,pe,18,8,609),b(n,"class","join-header"),D(n,pe,17,4,571),b(f,"for","username"),D(f,pe,29,16,948),b(g,"type","text"),b(g,"name","username"),b(g,"id","username"),b(g,"placeholder","What should everyone call you"),b(g,"autocomplete","off"),g.required=!0,D(g,pe,30,16,1004),b(E,"type","text"),b(E,"name","email"),b(E,"id","email"),b(E,"placeholder","example@gmail.com"),b(E,"autocomplete","off"),E.required=!0,D(E,pe,38,16,1288),b(d,"type","password"),b(d,"name","password"),b(d,"id","password"),b(d,"placeholder","password"),b(d,"autocomplete","off"),d.required=!0,D(d,pe,46,16,1554),b(l,"class","form-control"),D(l,pe,28,12,904),b(I,"type","submit"),b(I,"class","btn"),D(I,pe,55,12,1837),D(u,pe,27,8,863),b(a,"class","join-main"),D(a,pe,20,4,649),b(e,"class","join-container"),D(e,pe,16,0,537)},l:function(S){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(S,p){Q(S,e,p),R(e,n),R(n,r),R(r,i),R(r,s),R(e,o),R(e,a),A&&A.m(a,null),R(a,c),R(a,u),R(u,l),R(l,f),R(l,h),R(l,g),R(l,_),R(l,E),R(l,y),R(l,d),R(u,v),R(u,I),w||(P=sr(u,"submit",t[1],!1,!1,!1),w=!0)},p:function(S,[p]){S[0]&&S[0].error?A?A.p(S,p):(A=gi(S),A.c(),A.m(a,c)):A&&(A.d(1),A=null)},i:te,o:te,d:function(S){S&&Z(e),A&&A.d(),w=!1,P()}};return L("SvelteRegisterBlock",{block:T,id:vi.name,type:"component",source:"",ctx:t}),T}function Fp(t,e,n){let{$$slots:r={},$$scope:i}=e;it("SignUp",r,[]);let s;async function o(c){c.preventDefault();let u=c.target.email.value,l=c.target.password.value,f=c.target.username.value;if(f.length>30){n(0,s={error:!0,detail:"auth/username-too-long"});return}n(0,s=await rr.signUp(f,u,l)),s.error||Yn("/")}const a=[];return Object.keys(e).forEach(c=>{!~a.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<SignUp> was created with unknown prop '${c}'`)}),t.$capture_state=()=>({Accounts:rr,navigate:Yn,user:s,onSubmit:o}),t.$inject_state=c=>{"user"in c&&n(0,s=c.user)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[s,o]}class ac extends st{constructor(e){super(e),rt(this,e,Fp,vi,We,{}),L("SvelteRegisterComponent",{component:this,tagName:"SignUp",options:e,id:vi.name})}}const{Object:jp}=Oc,Hp="D:/git projects/wsChatApp/frontend/src/pages/Main.svelte";function cc(t){let e,n;e=new $i({$$inline:!0}),e.$on("signin",t[2]);const r={c:function(){Ae(e.$$.fragment)},m:function(s,o){_e(e,s,o),n=!0},p:te,i:function(s){n||(q(e.$$.fragment,s),n=!0)},o:function(s){ee(e.$$.fragment,s),n=!1},d:function(s){we(e,s)}};return L("SvelteRegisterBlock",{block:r,id:cc.name,type:"slot",source:'(96:4) <Route path=\\"/\\">',ctx:t}),r}function uc(t){let e,n;e=new $i({$$inline:!0}),e.$on("signin",t[2]);const r={c:function(){Ae(e.$$.fragment)},m:function(s,o){_e(e,s,o),n=!0},p:te,i:function(s){n||(q(e.$$.fragment,s),n=!0)},o:function(s){ee(e.$$.fragment,s),n=!1},d:function(s){we(e,s)}};return L("SvelteRegisterBlock",{block:r,id:uc.name,type:"if",source:"(104:32) ",ctx:t}),r}function lc(t){let e;const n={c:function(){e=N("div"),e.textContent="connecting",D(e,Hp,102,8,3566)},m:function(i,s){Q(i,e,s)},p:te,i:te,o:te,d:function(i){i&&Z(e)}};return L("SvelteRegisterBlock",{block:n,id:lc.name,type:"if",source:"(102:4) {#if !wsConnected}",ctx:t}),n}function fc(t){let e,n,r,i,s,o,a,c,u,l;e=new Bn({props:{path:"/",$$slots:{default:[cc]},$$scope:{ctx:t}},$$inline:!0}),r=new Bn({props:{path:"/chat",component:Pa},$$inline:!0}),s=new Bn({props:{path:"/signup",component:ac},$$inline:!0});const f=[lc,uc],h=[];function g(E,y){return E[0]?E[1].signedIn?-1:1:0}~(a=g(t))&&(c=h[a]=f[a](t));const _={c:function(){Ae(e.$$.fragment),n=K(),Ae(r.$$.fragment),i=K(),Ae(s.$$.fragment),o=K(),c&&c.c(),u=ir()},m:function(y,d){_e(e,y,d),Q(y,n,d),_e(r,y,d),Q(y,i,d),_e(s,y,d),Q(y,o,d),~a&&h[a].m(y,d),Q(y,u,d),l=!0},p:function(y,d){const v={};d&2048&&(v.$$scope={dirty:d,ctx:y}),e.$set(v);let I=a;a=g(y),a===I?~a&&h[a].p(y,d):(c&&(Dt(),ee(h[I],1,1,()=>{h[I]=null}),Nt()),~a?(c=h[a],c?c.p(y,d):(c=h[a]=f[a](y),c.c()),q(c,1),c.m(u.parentNode,u)):c=null)},i:function(y){l||(q(e.$$.fragment,y),q(r.$$.fragment,y),q(s.$$.fragment,y),q(c),l=!0)},o:function(y){ee(e.$$.fragment,y),ee(r.$$.fragment,y),ee(s.$$.fragment,y),ee(c),l=!1},d:function(y){we(e,y),y&&Z(n),we(r,y),y&&Z(i),we(s,y),y&&Z(o),~a&&h[a].d(y),y&&Z(u)}};return L("SvelteRegisterBlock",{block:_,id:fc.name,type:"slot",source:"(95:0) <Router>",ctx:t}),_}function yi(t){let e,n;e=new yr({props:{$$slots:{default:[fc]},$$scope:{ctx:t}},$$inline:!0});const r={c:function(){Ae(e.$$.fragment)},l:function(s){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(s,o){_e(e,s,o),n=!0},p:function(s,[o]){const a={};o&2051&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i:function(s){n||(q(e.$$.fragment,s),n=!0)},o:function(s){ee(e.$$.fragment,s),n=!1},d:function(s){we(e,s)}};return L("SvelteRegisterBlock",{block:r,id:yi.name,type:"component",source:"",ctx:t}),r}function Vp(t,e,n){let r,i,s,o;ne(le,"client"),re(t,le,d=>n(1,r=d)),ne(qe,"keys"),re(t,qe,d=>n(5,i=d)),ne(Re,"messages"),re(t,Re,d=>n(6,s=d)),ne(Me,"users"),re(t,Me,d=>n(7,o=d));let{$$slots:a={},$$scope:c}=e;it("Main",a,[]);let u=!1,l=null,f=null,h=new _s;const g={CONNECT:d=>{le.set(ze(Ee({},r),{id:d.detail.clientId})),n(0,u=!0),de.log("connect",r)},JOIN:d=>{const v=d.detail.message;Re.set([...s,v]),Me.set([...d.detail.users])},USERS:d=>{Me.set([...d.detail.users])},LEAVE:d=>{const v=d.detail.message;Re.set([...s,v]),Me.set([...d.detail.users])},MESSAGE_CREATE:async d=>{const v=await Fe.deriveKey(d.detail.senderPublicKey,i.privateKeyJwk),I=await Fe.decrypt(d.detail.data,v,i.iv),w=o.find(A=>A.id===d.detail.senderId);if(!w)return de.logc("MESSAGE_CREATE_UNKNOWN_USER","red");const P=new ps({author:w.username,content:I,avatar:w.avatar,id:d.detail.messageId,authorId:d.detail.senderId});Re.set([...s,P])},MESSAGE_DELETE:d=>{const v=[...s],I=v.find(P=>P.id===d.detail.messageId),w=v.indexOf(I);!w||(v.splice(w,1),Re.set(v))},SESSION:async d=>{const v=await Fe.deriveKey(d.detail.sessionKey,i.privateKeyJwk);qe.set(ze(Ee({},i),{sessionKey:d.detail.sessionKey,derivedKey:v,iv:d.detail.iv})),de.log("session update",i)}};for(const[d,v]of Object.entries(g))h.addEventListener(d,v),de.info(`event ${d} attached`);hs(),h.connect();async function _(d){f=Math.floor(Math.random()*100);const v=await Fe.generateKeyPair();qe.set(Ee(Ee({},i),v)),h.send(new Y({type:Y.types.JOIN,data:[r.username,f,v.publicKeyJwk]})),Yn("/chat")}function E(){h.send(new Y({type:Y.types.LEAVE,data:[l]})),l=null,f=null}const y=[];return jp.keys(e).forEach(d=>{!~y.indexOf(d)&&d.slice(0,2)!=="$$"&&d!=="slot"&&console.warn(`<Main> was created with unknown prop '${d}'`)}),t.$capture_state=()=>({firebase:hs,Chat:Pa,SignIn:$i,SignUp:ac,WsManager:_s,Message:Y,CryptoClient:Fe,client:le,keys:qe,messages:Re,users:Me,ChatMessage:ps,Logger:de,Router:yr,Route:Bn,navigate:Yn,wsConnected:u,username:l,avatar:f,wsm:h,events:g,handleLogin:_,handleLogout:E,$client:r,$keys:i,$messages:s,$users:o}),t.$inject_state=d=>{"wsConnected"in d&&n(0,u=d.wsConnected),"username"in d&&(l=d.username),"avatar"in d&&(f=d.avatar),"wsm"in d&&(h=d.wsm)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[u,r,_]}class $p extends st{constructor(e){super(e),rt(this,e,Vp,yi,We,{}),L("SvelteRegisterComponent",{component:this,tagName:"Main",options:e,id:yi.name})}}let Hn=!1;Hn=window.location.hostname==="localhost";de.DEV=Hn!=null?Hn:!1;new $p({target:document.body})});export default Wp();
