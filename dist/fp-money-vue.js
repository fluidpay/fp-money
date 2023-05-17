!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.FPMoney=e():t.FPMoney=e()}(self,(function(){return function(){"use strict";var t={474:function(t,e){function n(t,e){void 0===e&&(e=2),""===(t=t.toString())&&(t="0");for(var n="1",i=0;i<e;i++)n+="0";var r=parseInt(n,10);return-1!==t.indexOf(".")&&(t=(parseFloat(t)*r).toString()),0===e?parseInt(t,10):parseFloat((parseInt(t,10)/r).toFixed(e))}function i(){return void 0!==navigator.languages?navigator.languages[0]:navigator.language?navigator.language:"en-US"}function r(t,e){var n=e||0,i=Math.pow(10,n),r=+(n?t*i:t).toFixed(8),s=Math.floor(r),o=r-s,a=o>.5-1e-8&&o<.5+1e-8?s%2==0?s:s+1:Math.round(r);return n?a/i:a}e.__esModule=!0,e.originalNumberFromPercentage=e.bankersRounding=e.isNegative=e.getLocale=e.displayValue=e.percentOfValue=e.fractionToInt=e.intToFraction=e.currencies=void 0,e.currencies={USD:{symbol:"$",fraction:2},CAD:{symbol:"$",fraction:2},EUR:{symbol:"€",fraction:2},MXN:{symbol:"$",fraction:2},AUD:{symbol:"$",fraction:2},SEK:{symbol:"kr",fraction:2},NOK:{symbol:"kr",fraction:2},DKK:{symbol:"kr",fraction:2},GBP:{symbol:"£",fraction:2},INR:{symbol:"₹",fraction:2},CRC:{symbol:"₡",fraction:2},VND:{symbol:"₫",fraction:0},HUF:{symbol:"Ft",fraction:2},ILS:{symbol:"₪",fraction:2},CNY:{symbol:"¥",fraction:2},KRW:{symbol:"₩",fraction:0},NGN:{symbol:"₦",fraction:2},PYG:{symbol:"₲",fraction:0},PHP:{symbol:"₱",fraction:2},PLN:{symbol:"zł",fraction:2},THB:{symbol:"฿",fraction:2},UAH:{symbol:"₴",fraction:2},PEN:{symbol:"S/",fraction:2},RUB:{symbol:"₽",fraction:2},JPY:{symbol:"¥",fraction:0}},e.intToFraction=n,e.fractionToInt=function(t,e){void 0===e&&(e=2);var n=t.toString();if(""===n.trim())return 0;for(var i="1",r=0;r<e;r++)i+="0";var s=parseInt(i,10),o=Math.round(parseFloat(n)*s).toString();return parseInt(o,10)},e.percentOfValue=function(t,e,n,i){if(void 0===i&&(i="round"),""===(t=t.toString()).trim())return 0;if(t=parseFloat(t),""===(e=e.toString()).trim())return 0;e=parseFloat(e);for(var s="1",o=0;o<n;o++)s+="0";var a=parseInt(s,10);return"ceil"===i?Math.ceil(Number((t/100*e).toFixed(5))*a)/a:"floor"===i?Math.floor(Number((t/100*e).toFixed(5))*a)/a:"round"===i?Math.round(Number((t/100*e).toFixed(5))*a)/a:"bankers"===i?r(Number((t/100*e).toFixed(5))*a,0)/a:Math.round(Number((t/100*e).toFixed(5))*a)/a},e.displayValue=function(t,e,r,s){return void 0===s&&(s=i()),new Intl.NumberFormat(s,{localeMatcher:"best fit",style:"currency",currency:e.toUpperCase(),currencyDisplay:"symbol",minimumFractionDigits:r,maximumFractionDigits:r}).format(n(t,r))},e.getLocale=i,e.isNegative=function(t){return-1!==String(t).indexOf("-")},e.bankersRounding=r,e.originalNumberFromPercentage=function(t,e,n){var i=t.toString();if(""===i.trim())return 0;t=parseFloat(i);var r=e.toString();if(""===r.trim())return 0;e=parseFloat(r);for(var s="1",o=0;o<n;o++)s+="0";var a=parseInt(s,10),c=1+e/100;return Math.round(Number((t/c).toFixed(5))*a)/a}},653:function(t,e,n){var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(e,n);r&&!("get"in r?!e.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,r)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),r=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||i(e,t,n)};e.__esModule=!0;var s=n(474);r(n(474),e);var o=function(){function t(t){var e,n,i,r,o,a=this;if(this.isNegative=!1,this.value="",this.display="",this.format="",this.currencies=JSON.parse(JSON.stringify(s.currencies)),this.currency="",this.locale=(0,s.getLocale)(),this.valueFormat="float",this.minValue=void 0,this.maxValue=void 0,this.step=1,this.disabled=!1,this.displayOnly=!1,this.showSelection=!1,this.debounceUpdateOutput=(n=function(){a.updateOutput()},void 0===i&&(i=100),void 0===r&&(r={isImmediate:!1}),function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var s=this,a=function(){o=void 0,r.isImmediate||n.apply(s,t)},c=r.isImmediate&&void 0===o;void 0!==o&&clearTimeout(o),o=setTimeout(a,i),c&&n.apply(s,t)}),this.validate(t),this.mobileOs=this.getMobileOs(),e="string"==typeof t.container?document.querySelector(t.container):t.container,this.container=e,t.currencies&&(this.currencies=JSON.parse(JSON.stringify(t.currencies))),t.currency?this.currency=t.currency.toUpperCase():this.currency=Object.keys(this.currencies)[0],t.locale&&(this.locale=t.locale),t.valueFormat&&(this.valueFormat=t.valueFormat),void 0!==t.value){var c=t.value;this.isNegative=(0,s.isNegative)(c.toString()),"int"===t.valueFormat&&(c=(0,s.intToFraction)(c,this.currencies[this.currency].fraction)),this.value=(0,s.fractionToInt)(c,this.currencies[this.currency].fraction).toString()}void 0!==t.minValue&&(this.minValue=(0,s.fractionToInt)(t.minValue,this.currencies[this.currency].fraction)),void 0!==t.maxValue&&(this.maxValue=(0,s.fractionToInt)(t.maxValue,this.currencies[this.currency].fraction)),t.step&&(this.step=t.step),!0===t.disabled&&(this.disabled=!0),!0===t.displayOnly&&(this.displayOnly=!0),void 0!==t.showSelection&&(this.showSelection=t.showSelection),this.onChange=t.onChange?this.onChange=t.onChange:function(){},this.currencyDiv=document.createElement("div"),this.input=document.createElement("input"),"android"===this.mobileOs&&(this.input.inputMode="numeric"),"ios"===this.mobileOs&&(this.input.inputMode="numeric",this.input.pattern="[0-9]*"),this.select=document.createElement("select"),this.render(),this.setCurrency(this.currency),this.disabled&&this.setDisabled(this.disabled),this.displayOnly&&this.setDisplayOnly(this.displayOnly)}return t.prototype.setValue=function(t){var e=this.currencies[this.currency].fraction;t="float"===this.valueFormat?(0,s.fractionToInt)(t,e).toString():t.toString(),this.value.toString()!==t&&(this.isNegative=(0,s.isNegative)(t),this.value=(0,s.fractionToInt)((0,s.intToFraction)(t,e),e).toString(),this.debounceUpdateOutput())},t.prototype.setCurrencies=function(t){this.currencies=JSON.parse(JSON.stringify(t)),this.currencies[this.currency]||(this.currency=Object.keys(this.currencies)[0]),this.updateCurrenciesSelect(),this.setCurrency(this.currency)},t.prototype.setCurrency=function(t){this.currency=t.toUpperCase(),this.currencyDiv.innerHTML=this.currencies[this.currency].symbol;for(var e=this.currencies[this.currency].fraction,n="",i=0;i<e;i++)n+="0";this.input.placeholder="0"+(0===e?"":"."+n),this.select.value=this.currency,this.debounceUpdateOutput()},t.prototype.setLocale=function(t){this.locale=t,this.debounceUpdateOutput()},t.prototype.setDisabled=function(t){this.disabled=t,this.disabled?(this.container.classList.add("disabled"),this.input.disabled=!0,this.select.disabled=!0):(this.container.classList.remove("disabled"),this.input.disabled=!1,this.select.disabled=!1)},t.prototype.setDisplayOnly=function(t){this.displayOnly=t,this.displayOnly?(this.container.classList.add("display-only"),this.input.tabIndex=-1,this.input.readOnly=!0,this.select.disabled=!0):(this.container.classList.remove("display-only"),this.input.readOnly=!1,this.input.removeAttribute("tabindex"),this.select.disabled=!1)},t.prototype.destroy=function(){this.container.innerHTML=""},t.prototype.validate=function(t){if(!("string"==typeof t.container?document.querySelector(t.container):t.container))throw new Error("Could not find container")},t.prototype.updateOutput=function(){if(""!==this.value){var t=parseInt(this.value,10);void 0!==this.minValue&&t<this.minValue&&(t=this.minValue),void 0!==this.maxValue&&t>this.maxValue&&(t=this.maxValue),this.value=t.toString()}this.isNegative?(this.value="-"+this.value.replace("-",""),"-"===this.value&&(this.value="")):this.value=this.value.replace("-",""),this.format=(0,s.intToFraction)(this.value,this.currencies[this.currency].fraction).toFixed(this.currencies[this.currency].fraction),this.display=(0,s.displayValue)(this.value,this.currency,this.currencies[this.currency].fraction,this.locale),this.updateInputDisplay(),this.onChange({value:this.value,display:this.display,format:this.format,currency:this.currency,locale:this.locale})},t.prototype.updateInputDisplay=function(){if(""!==this.value){var t=this.display.replace(this.currencies[this.currency.toUpperCase()].symbol,""),e=this.currency;for(var n in t=t.replace(e,""),e.split("").forEach((function(n,i){t=t.replace(e.substring(0,e.length-i),"")})),s.currencies)s.currencies.hasOwnProperty(n)&&(t=(t=t.replace(n,"")).replace(s.currencies[n].symbol,""));t=t.trim(),this.isNegative&&(t="-"+t.replace("-","")),this.input.value=t}else this.input.value=""},t.prototype.render=function(){var t=this;this.container.classList.add("fpm"),this.currencyDiv.classList.add("fpm-currency"),this.input.classList.add("fpm-value"),this.input.dataset.lpignore="true",this.select.classList.add("fpm-select"),this.input.addEventListener("keydown",(function(e){t.inputKeydown(e)}),!1),this.input.addEventListener("click",(function(e){t.displayOnly?e.preventDefault():(t.input.focus(),t.moveCursorToEnd(t.input))}),!1),this.displayOnly&&this.setDisplayOnly(!0),this.updateCurrenciesSelect(),this.select.addEventListener("change",(function(){t.setCurrency(t.select.value)})),this.container.appendChild(this.currencyDiv),this.container.appendChild(this.input),this.showSelection&&this.container.appendChild(this.select)},t.prototype.updateCurrenciesSelect=function(){for(var t in this.select.innerHTML="",this.currencies)if(this.currencies.hasOwnProperty(t)){var e=document.createElement("option");e.value=t,e.text=t.toUpperCase(),this.select.appendChild(e)}},t.prototype.inputKeydown=function(t){var e=this;if(this.displayOnly)t.preventDefault();else{var n=t.key,i=n.charCodeAt(0);if("unidentified"===n.toLowerCase())return t.preventDefault(),void setTimeout((function(){e.updateOutput()}),100);if(68===i||66===i)return t.preventDefault(),this.value=this.value.substring(0,this.value.length-1),"-"===this.value&&(this.value=""),void this.updateOutput();if(i>=48&&i<=57)return t.preventDefault(),this.value+=t.key,void this.updateOutput();if(84!==i){if(43===i)return t.preventDefault(),this.isNegative=!1,void this.updateOutput();if(45===i){if(t.preventDefault(),void 0!==this.minValue&&this.minValue>=0)return;return this.isNegative=!0,void this.updateOutput()}if("ArrowUp"===n)return t.preventDefault(),this.value=String(parseInt(this.value,10)+(0,s.fractionToInt)(this.step)),void this.updateOutput();if("ArrowDown"===n)return t.preventDefault(),this.value=String(parseInt(this.value,10)-(0,s.fractionToInt)(this.step)),void this.updateOutput();t.preventDefault(),t.stopPropagation()}}},t.prototype.moveCursorToEnd=function(t){if("number"==typeof t.selectionStart)t.selectionStart=t.selectionEnd=t.value.length;else if(void 0!==t.createTextRange){t.focus();var e=t.createTextRange();e.collapse(!1),e.select()}},t.prototype.getMobileOs=function(){var t=window,e=navigator.userAgent||navigator.vendor||t.opera;return/windows phone/i.test(e)?"windows":/android/i.test(e)?"android":/iPad|iPhone|iPod/.test(e)&&!t.MSStream?"ios":"desktop"},t}();e.default=o},407:function(t,e){e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[t,i]of e)n[t]=i;return n}}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){function t(t,e){const n=Object.create(null),i=t.split(",");for(let t=0;t<i.length;t++)n[i[t]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}function e(t){if(v(t)){const n={};for(let i=0;i<t.length;i++){const r=t[i],s=b(r)?o(r):e(r);if(s)for(const t in s)n[t]=s[t]}return n}return b(t)||S(t)?t:void 0}n.r(i),n.d(i,{default:function(){return ze}});const r=/;(?![^(]*\))/g,s=/:(.+)/;function o(t){const e={};return t.split(r).forEach((t=>{if(t){const n=t.split(s);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function a(t){let e="";if(b(t))e=t;else if(v(t))for(let n=0;n<t.length;n++){const i=a(t[n]);i&&(e+=i+" ")}else if(S(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const c={},l=[],u=()=>{},h=/^on[^a-z]/,f=t=>h.test(t),p=Object.assign,d=Object.prototype.hasOwnProperty,y=(t,e)=>d.call(t,e),v=Array.isArray,m=t=>"[object Map]"===w(t),g=t=>"function"==typeof t,b=t=>"string"==typeof t,_=t=>"symbol"==typeof t,S=t=>null!==t&&"object"==typeof t,O=Object.prototype.toString,w=t=>O.call(t),x=t=>b(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,C=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},F=/-(\w)/g,N=(C((t=>t.replace(F,((t,e)=>e?e.toUpperCase():"")))),/\B([A-Z])/g),P=(C((t=>t.replace(N,"-$1").toLowerCase())),C((t=>t.charAt(0).toUpperCase()+t.slice(1)))),k=(C((t=>t?`on${P(t)}`:"")),(t,e)=>!Object.is(t,e));const M=t=>{const e=new Set(t);return e.w=0,e.n=0,e},I=t=>(t.w&D)>0,j=t=>(t.n&D)>0,V=new WeakMap;let R,T=0,D=1;const E=Symbol(""),L=Symbol("");class ${constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,function(t,e){e&&e.active&&e.effects.push(t)}(this,n)}run(){if(!this.active)return this.fn();let t=R,e=A;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=R,R=this,A=!0,D=1<<++T,T<=30?(({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=D})(this):U(this),this.fn()}finally{T<=30&&(t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];I(r)&&!j(r)?r.delete(t):e[n++]=r,r.w&=~D,r.n&=~D}e.length=n}})(this),D=1<<--T,R=this.parent,A=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){R===this?this.deferStop=!0:this.active&&(U(this),this.onStop&&this.onStop(),this.active=!1)}}function U(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let A=!0;const B=[];function W(){B.push(A),A=!1}function z(){const t=B.pop();A=void 0===t||t}function J(t,e,n){if(A&&R){let e=V.get(t);e||V.set(t,e=new Map);let i=e.get(n);i||e.set(n,i=M()),function(t,e){let n=!1;T<=30?j(t)||(t.n|=D,n=!I(t)):n=!t.has(R),n&&(t.add(R),R.deps.push(t))}(i)}}function K(t,e,n,i,r,s){const o=V.get(t);if(!o)return;let a=[];if("clear"===e)a=[...o.values()];else if("length"===n&&v(t))o.forEach(((t,e)=>{("length"===e||e>=i)&&a.push(t)}));else switch(void 0!==n&&a.push(o.get(n)),e){case"add":v(t)?x(n)&&a.push(o.get("length")):(a.push(o.get(E)),m(t)&&a.push(o.get(L)));break;case"delete":v(t)||(a.push(o.get(E)),m(t)&&a.push(o.get(L)));break;case"set":m(t)&&a.push(o.get(E))}if(1===a.length)a[0]&&H(a[0]);else{const t=[];for(const e of a)e&&t.push(...e);H(M(t))}}function H(t,e){const n=v(t)?t:[...t];for(const t of n)t.computed&&G(t);for(const t of n)t.computed||G(t)}function G(t,e){(t!==R||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Y=t("__proto__,__v_isRef,__isVue"),Z=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(_)),q=et(),X=et(!0),Q=tt();function tt(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Dt(this);for(let t=0,e=this.length;t<e;t++)J(n,0,t+"");const i=n[e](...t);return-1===i||!1===i?n[e](...t.map(Dt)):i}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){W();const n=Dt(this)[e].apply(this,t);return z(),n}})),t}function et(t=!1,e=!1){return function(n,i,r){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&r===(t?e?Pt:Nt:e?Ft:Ct).get(n))return n;const s=v(n);if(!t&&s&&y(Q,i))return Reflect.get(Q,i,r);const o=Reflect.get(n,i,r);return(_(i)?Z.has(i):Y(i))?o:(t||J(n,0,i),e?o:Ut(o)?s&&x(i)?o:o.value:S(o)?t?Mt(o):kt(o):o)}}function nt(t=!1){return function(e,n,i,r){let s=e[n];if(Vt(s)&&Ut(s)&&!Ut(i))return!1;if(!t&&(Rt(i)||Vt(i)||(s=Dt(s),i=Dt(i)),!v(e)&&Ut(s)&&!Ut(i)))return s.value=i,!0;const o=v(e)&&x(n)?Number(n)<e.length:y(e,n),a=Reflect.set(e,n,i,r);return e===Dt(r)&&(o?k(i,s)&&K(e,"set",n,i):K(e,"add",n,i)),a}}const it={get:q,set:nt(),deleteProperty:function(t,e){const n=y(t,e),i=(t[e],Reflect.deleteProperty(t,e));return i&&n&&K(t,"delete",e,void 0),i},has:function(t,e){const n=Reflect.has(t,e);return _(e)&&Z.has(e)||J(t,0,e),n},ownKeys:function(t){return J(t,0,v(t)?"length":E),Reflect.ownKeys(t)}},rt={get:X,set(t,e){return!0},deleteProperty(t,e){return!0}},st=t=>t,ot=t=>Reflect.getPrototypeOf(t);function at(t,e,n=!1,i=!1){const r=Dt(t=t.__v_raw),s=Dt(e);n||(e!==s&&J(r,0,e),J(r,0,s));const{has:o}=ot(r),a=i?st:n?$t:Lt;return o.call(r,e)?a(t.get(e)):o.call(r,s)?a(t.get(s)):void(t!==r&&t.get(e))}function ct(t,e=!1){const n=this.__v_raw,i=Dt(n),r=Dt(t);return e||(t!==r&&J(i,0,t),J(i,0,r)),t===r?n.has(t):n.has(t)||n.has(r)}function lt(t,e=!1){return t=t.__v_raw,!e&&J(Dt(t),0,E),Reflect.get(t,"size",t)}function ut(t){t=Dt(t);const e=Dt(this);return ot(e).has.call(e,t)||(e.add(t),K(e,"add",t,t)),this}function ht(t,e){e=Dt(e);const n=Dt(this),{has:i,get:r}=ot(n);let s=i.call(n,t);s||(t=Dt(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?k(e,o)&&K(n,"set",t,e):K(n,"add",t,e),this}function ft(t){const e=Dt(this),{has:n,get:i}=ot(e);let r=n.call(e,t);r||(t=Dt(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&K(e,"delete",t,void 0),s}function pt(){const t=Dt(this),e=0!==t.size,n=t.clear();return e&&K(t,"clear",void 0,void 0),n}function dt(t,e){return function(n,i){const r=this,s=r.__v_raw,o=Dt(s),a=e?st:t?$t:Lt;return!t&&J(o,0,E),s.forEach(((t,e)=>n.call(i,a(t),a(e),r)))}}function yt(t,e,n){return function(...i){const r=this.__v_raw,s=Dt(r),o=m(s),a="entries"===t||t===Symbol.iterator&&o,c="keys"===t&&o,l=r[t](...i),u=n?st:e?$t:Lt;return!e&&J(s,0,c?L:E),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:a?[u(t[0]),u(t[1])]:u(t),done:e}},[Symbol.iterator](){return this}}}}function vt(t){return function(...e){return"delete"!==t&&this}}function mt(){const t={get(t){return at(this,t)},get size(){return lt(this)},has:ct,add:ut,set:ht,delete:ft,clear:pt,forEach:dt(!1,!1)},e={get(t){return at(this,t,!1,!0)},get size(){return lt(this)},has:ct,add:ut,set:ht,delete:ft,clear:pt,forEach:dt(!1,!0)},n={get(t){return at(this,t,!0)},get size(){return lt(this,!0)},has(t){return ct.call(this,t,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:dt(!0,!1)},i={get(t){return at(this,t,!0,!0)},get size(){return lt(this,!0)},has(t){return ct.call(this,t,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:dt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((r=>{t[r]=yt(r,!1,!1),n[r]=yt(r,!0,!1),e[r]=yt(r,!1,!0),i[r]=yt(r,!0,!0)})),[t,n,e,i]}const[gt,bt,_t,St]=mt();function Ot(t,e){const n=e?t?St:_t:t?bt:gt;return(e,i,r)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get(y(n,i)&&i in e?n:e,i,r)}const wt={get:Ot(!1,!1)},xt={get:Ot(!0,!1)},Ct=new WeakMap,Ft=new WeakMap,Nt=new WeakMap,Pt=new WeakMap;function kt(t){return Vt(t)?t:It(t,!1,it,wt,Ct)}function Mt(t){return It(t,!0,rt,xt,Nt)}function It(t,e,n,i,r){if(!S(t))return t;if(t.__v_raw&&(!e||!t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=(a=t).__v_skip||!Object.isExtensible(a)?0:function(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((t=>w(t).slice(8,-1))(a));var a;if(0===o)return t;const c=new Proxy(t,2===o?i:n);return r.set(t,c),c}function jt(t){return Vt(t)?jt(t.__v_raw):!(!t||!t.__v_isReactive)}function Vt(t){return!(!t||!t.__v_isReadonly)}function Rt(t){return!(!t||!t.__v_isShallow)}function Tt(t){return jt(t)||Vt(t)}function Dt(t){const e=t&&t.__v_raw;return e?Dt(e):t}function Et(t){return((t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})})(t,"__v_skip",!0),t}const Lt=t=>S(t)?kt(t):t,$t=t=>S(t)?Mt(t):t;function Ut(t){return!(!t||!0!==t.__v_isRef)}const At={get:(t,e,n)=>{return Ut(i=Reflect.get(t,e,n))?i.value:i;var i},set:(t,e,n,i)=>{const r=t[e];return Ut(r)&&!Ut(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Bt(t,e,n,i){let r;try{r=i?t(...i):t()}catch(t){zt(t,e,n)}return r}function Wt(t,e,n,i){if(g(t)){const s=Bt(t,e,n,i);return s&&(S(r=s)&&g(r.then)&&g(r.catch))&&s.catch((t=>{zt(t,e,n)})),s}var r;const s=[];for(let r=0;r<t.length;r++)s.push(Wt(t[r],e,n,i));return s}function zt(t,e,n,i=!0){if(e&&e.vnode,e){let i=e.parent;const r=e.proxy,s=n;for(;i;){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,r,s))return;i=i.parent}const o=e.appContext.config.errorHandler;if(o)return void Bt(o,null,10,[t,r,s])}!function(t,e,n,i=!0){console.error(t)}(t,0,0,i)}let Jt=!1,Kt=!1;const Ht=[];let Gt=0;const Yt=[];let Zt=null,qt=0;const Xt=Promise.resolve();let Qt=null;function te(t){const e=Qt||Xt;return t?e.then(this?t.bind(this):t):e}function ee(t){Ht.length&&Ht.includes(t,Jt&&t.allowRecurse?Gt+1:Gt)||(null==t.id?Ht.push(t):Ht.splice(function(t){let e=Gt+1,n=Ht.length;for(;e<n;){const i=e+n>>>1;ie(Ht[i])<t?e=i+1:n=i}return e}(t.id),0,t),ne())}function ne(){Jt||Kt||(Kt=!0,Qt=Xt.then(se))}const ie=t=>null==t.id?1/0:t.id,re=(t,e)=>{const n=ie(t)-ie(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function se(t){Kt=!1,Jt=!0,Ht.sort(re);try{for(Gt=0;Gt<Ht.length;Gt++){const t=Ht[Gt];t&&!1!==t.active&&Bt(t,null,14)}}finally{Gt=0,Ht.length=0,function(t){if(Yt.length){const t=[...new Set(Yt)];if(Yt.length=0,Zt)return void Zt.push(...t);for(Zt=t,Zt.sort(((t,e)=>ie(t)-ie(e))),qt=0;qt<Zt.length;qt++)Zt[qt]();Zt=null,qt=0}}(),Jt=!1,Qt=null,(Ht.length||Yt.length)&&se(t)}}new Set,new Map;let oe=null;const ae={};function ce(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=c){const a=De;let l,h,f=!1,p=!1;if(Ut(t)?(l=()=>t.value,f=Rt(t)):jt(t)?(l=()=>t,i=!0):v(t)?(p=!0,f=t.some((t=>jt(t)||Rt(t))),l=()=>t.map((t=>Ut(t)?t.value:jt(t)?ue(t):g(t)?Bt(t,a,2):void 0))):l=g(t)?e?()=>Bt(t,a,2):()=>{if(!a||!a.isUnmounted)return h&&h(),Wt(t,a,3,[d])}:u,e&&i){const t=l;l=()=>ue(t())}let d=t=>{h=_.onStop=()=>{Bt(t,a,4)}};if($e)return d=u,e?n&&Wt(e,a,3,[l(),p?[]:void 0,d]):l(),u;let y=p?[]:ae;const m=()=>{if(_.active)if(e){const t=_.run();(i||f||(p?t.some(((t,e)=>k(t,y[e]))):k(t,y)))&&(h&&h(),Wt(e,a,3,[t,y===ae?void 0:y,d]),y=t)}else _.run()};let b;m.allowRecurse=!!e,"sync"===r?b=m:"post"===r?b=()=>Se(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),b=()=>ee(m));const _=new $(l,b);return e?n?m():y=_.run():"post"===r?Se(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&((t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)})(a.scope.effects,_)}}function le(t,e,n){const i=this.proxy,r=b(t)?t.includes(".")?function(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}(i,t):()=>i[t]:t.bind(i,i);let s;g(e)?s=e:(s=e.handler,n=e);const o=De;Ee(this);const a=ce(r,s.bind(i),n);return o?Ee(o):Le(),a}function ue(t,e){if(!S(t)||t.__v_skip)return t;if((e=e||new Set).has(t))return t;if(e.add(t),Ut(t))ue(t.value,e);else if(v(t))for(let n=0;n<t.length;n++)ue(t[n],e);else if("[object Set]"===w(t)||m(t))t.forEach((t=>{ue(t,e)}));else if((t=>"[object Object]"===w(t))(t))for(const n in t)ue(t[n],e);return t}Boolean,Boolean;RegExp,RegExp;const he=t=>(e,n=De)=>(!$e||"sp"===t)&&function(t,e,n=De,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;W(),Ee(n);const r=Wt(e,n,t,i);return Le(),z(),r});return i?r.unshift(s):r.push(s),s}}(t,e,n);he("bm"),he("m"),he("bu"),he("u"),he("bum");he("um"),he("sp"),he("rtg"),he("rtc");const fe=Symbol(),pe=t=>t?4&t.vnode.shapeFlag?function(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((e=Et(t.exposed),jt(e)?e:new Proxy(e,At)),{get(e,n){return n in e?e[n]:n in de?de[n](t):void 0}}));var e}(t)||t.proxy:pe(t.parent):null,de=p(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pe(t.parent),$root:t=>pe(t.root),$emit:t=>t.emit,$options:t=>__VUE_OPTIONS_API__?function(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:r.length||n||i?(c={},r.length&&r.forEach((t=>ye(c,t,o,!0))),ye(c,e,o)):c=e,S(e)&&s.set(e,c),c}(t):t.type,$forceUpdate:t=>t.f||(t.f=()=>ee(t.update)),$nextTick:t=>t.n||(t.n=te.bind(t.proxy)),$watch:t=>__VUE_OPTIONS_API__?le.bind(t):u});function ye(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&ye(t,s,n,!0),r&&r.forEach((e=>ye(t,e,n,!0)));for(const r in e)if(i&&"expose"===r);else{const i=ve[r]||n&&n[r];t[r]=i?i(t[r],e[r]):e[r]}return t}const ve={data:me,props:_e,emits:_e,methods:_e,computed:_e,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:_e,directives:_e,watch:function(t,e){if(!t)return e;if(!e)return t;const n=p(Object.create(null),t);for(const i in e)n[i]=be(t[i],e[i]);return n},provide:me,inject:function(t,e){return _e(ge(t),ge(e))}};function me(t,e){return e?t?function(){return p(g(t)?t.call(this,this):t,g(e)?e.call(this,this):e)}:e:t}function ge(t){if(v(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function be(t,e){return t?[...new Set([].concat(t,e))]:e}function _e(t,e){return t?p(p(Object.create(null),t),e):e}const Se=function(t,e){var n;e&&e.pendingBranch?v(t)?e.effects.push(...t):e.effects.push(t):(v(n=t)?Yt.push(...n):Zt&&Zt.includes(n,n.allowRecurse?qt+1:qt)||Yt.push(n),ne())},Oe=Symbol(void 0),we=Symbol(void 0),xe=Symbol(void 0),Ce=(Symbol(void 0),[]);let Fe=null;function Ne(t){return t.dynamicChildren=Fe||l,Ce.pop(),Fe=Ce[Ce.length-1]||null,Fe&&Fe.push(t),t}const Pe="__vInternal",ke=({key:t})=>null!=t?t:null,Me=({ref:t,ref_key:e,ref_for:n})=>null!=t?b(t)||Ut(t)||g(t)?{i:oe,r:t,k:e,f:!!n}:t:null;function Ie(t,e=null,n=null,i=0,r=null,s=(t===Oe?0:1),o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ke(e),ref:e&&Me(e),scopeId:null,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Te(c,n),128&s&&t.normalize(c)):n&&(c.shapeFlag|=b(n)?8:16),!o&&Fe&&(c.patchFlag>0||6&s)&&32!==c.patchFlag&&Fe.push(c),c}const je=function(t,n=null,i=null,r=0,s=null,o=!1){if(t&&t!==fe||(t=xe),c=t,c&&!0===c.__v_isVNode){const e=Ve(t,n,!0);return i&&Te(e,i),!o&&Fe&&(6&e.shapeFlag?Fe[Fe.indexOf(t)]=e:Fe.push(e)),e.patchFlag|=-2,e}var c;if(function(t){return g(t)&&"__vccOpts"in t}(t)&&(t=t.__vccOpts),n){n=function(t){return t?Tt(t)||Pe in t?p({},t):t:null}(n);let{class:t,style:i}=n;t&&!b(t)&&(n.class=a(t)),S(i)&&(Tt(i)&&!v(i)&&(i=p({},i)),n.style=e(i))}return Ie(t,n,i,r,s,b(t)?1:(t=>t.__isSuspense)(t)?128:(t=>t.__isTeleport)(t)?64:S(t)?4:g(t)?2:0,o,!0)};function Ve(t,n,i=!1){const{props:r,ref:s,patchFlag:o,children:c}=t,l=n?function(...t){const n={};for(let i=0;i<t.length;i++){const r=t[i];for(const t in r)if("class"===t)n.class!==r.class&&(n.class=a([n.class,r.class]));else if("style"===t)n.style=e([n.style,r.style]);else if(f(t)){const e=n[t],i=r[t];!i||e===i||v(e)&&e.includes(i)||(n[t]=e?[].concat(e,i):i)}else""!==t&&(n[t]=r[t])}return n}(r||{},n):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ke(l),ref:n&&n.ref?i&&s?v(s)?s.concat(Me(n)):[s,Me(n)]:Me(n):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Oe?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ve(t.ssContent),ssFallback:t.ssFallback&&Ve(t.ssFallback),el:t.el,anchor:t.anchor}}function Re(t=" ",e=0){return je(we,null,t,e)}function Te(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if(v(e))n=16;else if("object"==typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),Te(t,n()),n._c&&(n._d=!0)))}{n=32;const t=e._;!t&&!(Pe in e)&&(e._ctx=oe)}}else g(e)?(e={default:e,_ctx:oe},n=32):(e=String(e),64&i?(n=16,e=[Re(e)]):n=8);t.children=e,t.shapeFlag|=n}Object.create(null),new WeakMap,new WeakMap,new WeakMap;let De=null;const Ee=t=>{De=t,t.scope.on()},Le=()=>{De&&De.scope.off(),De=null};let $e=!1;Symbol("");const Ue={ref:"fpmoney"};var Ae=n(653),Be=n.n(Ae),We={name:"fp-money",props:{value:[String,Number],currencies:Object,currency:String,locale:String,minValue:Number,maxValue:Number,step:Number,disabled:Boolean,displayOnly:Boolean,onChange:Function,valueFormat:String,showSelection:{type:Boolean,default:!1}},data(){return{fpmoney:null,values:{value:"",format:"",display:"",currency:"",locale:""}}},mounted(){this.init()},watch:{value(t,e){t.toString()!==e.toString()&&this.fpmoney.setValue(t)},currencies(t,e){JSON.stringify(t)!==JSON.stringify(e)&&this.fpmoney.setCurrencies(t)},currency(t,e){t.toLowerCase()!==e.toLowerCase()&&this.fpmoney.setCurrency(t)},locale(t,e){t.toLowerCase()!==e.toLowerCase()&&this.fpmoney.setLocale(t)},disabled(t,e){this.fpmoney.setDisabled(t)},displayOnly(t,e){this.fpmoney.setDisplayOnly(t)}},methods:{init(){const t={container:this.$refs.fpmoney,onChange:t=>{this.values=t,this.$emit("input","int"===this.valueFormat?this.values.value:this.values.format),this.$emit("update:value",this.values.value),this.$emit("update:format",this.values.format),this.$emit("update:display",this.values.display),this.$emit("update:currency",this.values.currency),this.$emit("update:locale",this.values.locale),this.onChange&&this.onChange(t)}};this.currencies?t.currencies=this.currencies:t.currencies=Ae.currencies,this.currency?t.currency=this.currency:t.currency=Object.keys(t.currencies)[0],this.valueFormat&&(t.valueFormat=this.valueFormat),void 0!==this.value&&(t.value=this.value),this.locale&&(t.locale=this.locale),void 0!==this.minValue&&(t.minValue=this.minValue),void 0!==this.maxValue&&(t.maxValue=this.maxValue),void 0!==this.step&&(t.step=this.step),!0===this.disabled&&(t.disabled=!0),!0===this.displayOnly&&(t.displayOnly=!0),t.showSelection=this.showSelection,this.fpmoney=new(Be())(t)}}},ze=(0,n(407).Z)(We,[["render",function(t,e,n,i,r,s){return function(t=!1){Ce.push(Fe=t?null:[])}(),Ne(Ie("div",Ue,null,512,undefined,undefined,!0))}]])}(),i}()}));