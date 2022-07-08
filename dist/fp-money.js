!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.FPMoney=e():t.FPMoney=e()}(window,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){"use strict";function n(t,e){void 0===e&&(e=2),""===(t=t.toString())&&(t="0");for(var i="1",n=0;n<e;n++)i+="0";var r=parseInt(i,10);return-1!==t.indexOf(".")&&(t=(parseFloat(t)*r).toString()),0===e?parseInt(t,10):parseFloat((parseInt(t,10)/r).toFixed(e))}function r(){return void 0!==navigator.languages?navigator.languages[0]:navigator.language?navigator.language:"en-US"}function s(t,e){var i=e||0,n=Math.pow(10,i),r=+(i?t*n:t).toFixed(8),s=Math.floor(r),o=r-s,a=o>.5-1e-8&&o<.5+1e-8?s%2==0?s:s+1:Math.round(r);return i?a/n:a}e.__esModule=!0,e.bankersRounding=e.isNegative=e.getLocale=e.displayValue=e.percentOfValue=e.fractionToInt=e.intToFraction=e.currencies=void 0,e.currencies={USD:{symbol:"$",fraction:2},CAD:{symbol:"$",fraction:2},EUR:{symbol:"€",fraction:2},MXN:{symbol:"$",fraction:2},AUD:{symbol:"$",fraction:2},SEK:{symbol:"kr",fraction:2},NOK:{symbol:"kr",fraction:2},DKK:{symbol:"kr",fraction:2},GBP:{symbol:"£",fraction:2},INR:{symbol:"₹",fraction:2},CRC:{symbol:"₡",fraction:2},VND:{symbol:"₫",fraction:0},HUF:{symbol:"Ft",fraction:2},ILS:{symbol:"₪",fraction:2},CNY:{symbol:"¥",fraction:2},KRW:{symbol:"₩",fraction:0},NGN:{symbol:"₦",fraction:2},PYG:{symbol:"₲",fraction:0},PHP:{symbol:"₱",fraction:2},PLN:{symbol:"zł",fraction:2},THB:{symbol:"฿",fraction:2},UAH:{symbol:"₴",fraction:2},PEN:{symbol:"S/",fraction:2},RUB:{symbol:"₽",fraction:2},JPY:{symbol:"¥",fraction:0}},e.intToFraction=n,e.fractionToInt=function(t,e){void 0===e&&(e=2);var i=t.toString();if(""===i.trim())return 0;for(var n="1",r=0;r<e;r++)n+="0";var s=parseInt(n,10),o=Math.round(parseFloat(i)*s).toString();return parseInt(o,10)},e.percentOfValue=function(t,e,i,n){if(void 0===n&&(n="round"),""===(t=t.toString()).trim())return 0;if(t=parseFloat(t),""===(e=e.toString()).trim())return 0;e=parseFloat(e);for(var r="1",o=0;o<i;o++)r+="0";var a=parseInt(r,10);return"ceil"===n?Math.ceil(Number((t/100*e).toFixed(5))*a)/a:"floor"===n?Math.floor(Number((t/100*e).toFixed(5))*a)/a:"round"===n?Math.round(Number((t/100*e).toFixed(5))*a)/a:"bankers"===n?s(Number((t/100*e).toFixed(5))*a,0)/a:Math.round(Number((t/100*e).toFixed(5))*a)/a},e.displayValue=function(t,e,i,s){return void 0===s&&(s=r()),new Intl.NumberFormat(s,{localeMatcher:"best fit",style:"currency",currency:e.toUpperCase(),currencyDisplay:"symbol",minimumFractionDigits:i,maximumFractionDigits:i}).format(n(t,i))},e.getLocale=r,e.isNegative=function(t){return-1!==String(t).indexOf("-")},e.bankersRounding=s},function(t,e,i){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,i,n){void 0===n&&(n=i),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,n){void 0===n&&(n=i),t[n]=e[i]}),r=this&&this.__exportStar||function(t,e){for(var i in t)"default"===i||Object.prototype.hasOwnProperty.call(e,i)||n(e,t,i)};e.__esModule=!0;var s=i(0);r(i(0),e);var o=function(){function t(t){var e,i=this;if(this.isNegative=!1,this.value="",this.display="",this.format="",this.currencies=JSON.parse(JSON.stringify(s.currencies)),this.currency="",this.locale=(0,s.getLocale)(),this.valueFormat="float",this.minValue=void 0,this.maxValue=void 0,this.step=1,this.disabled=!1,this.displayOnly=!1,this.showSelection=!1,this.debounceUpdateOutput=function(t,e,i){void 0===e&&(e=100);void 0===i&&(i={isImmediate:!1});var n;return function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];var o=this,a=function(){n=void 0,i.isImmediate||t.apply(o,r)},u=i.isImmediate&&void 0===n;void 0!==n&&clearTimeout(n),n=setTimeout(a,e),u&&t.apply(o,r)}}((function(){i.updateOutput()})),this.validate(t),this.mobileOs=this.getMobileOs(),e="string"==typeof t.container?document.querySelector(t.container):t.container,this.container=e,t.currencies&&(this.currencies=JSON.parse(JSON.stringify(t.currencies))),t.currency?this.currency=t.currency.toUpperCase():this.currency=Object.keys(this.currencies)[0],t.locale&&(this.locale=t.locale),t.valueFormat&&(this.valueFormat=t.valueFormat),void 0!==t.value){var n=t.value;this.isNegative=(0,s.isNegative)(n.toString()),"int"===t.valueFormat&&(n=(0,s.intToFraction)(n,this.currencies[this.currency].fraction)),this.value=(0,s.fractionToInt)(n,this.currencies[this.currency].fraction).toString()}void 0!==t.minValue&&(this.minValue=(0,s.fractionToInt)(t.minValue,this.currencies[this.currency].fraction)),void 0!==t.maxValue&&(this.maxValue=(0,s.fractionToInt)(t.maxValue,this.currencies[this.currency].fraction)),t.step&&(this.step=t.step),!0===t.disabled&&(this.disabled=!0),!0===t.displayOnly&&(this.displayOnly=!0),void 0!==t.showSelection&&(this.showSelection=t.showSelection),this.onChange=t.onChange?this.onChange=t.onChange:function(){},this.currencyDiv=document.createElement("div"),this.input=document.createElement("input"),"android"===this.mobileOs&&(this.input.inputMode="numeric"),"ios"===this.mobileOs&&(this.input.inputMode="numeric",this.input.pattern="[0-9]*"),this.select=document.createElement("select"),this.render(),this.setCurrency(this.currency),this.disabled&&this.setDisabled(this.disabled),this.displayOnly&&this.setDisplayOnly(this.displayOnly)}return t.prototype.setValue=function(t){var e=this.currencies[this.currency].fraction;t="float"===this.valueFormat?(0,s.fractionToInt)(t,e).toString():t.toString(),this.value.toString()!==t&&(this.isNegative=(0,s.isNegative)(t),this.value=(0,s.fractionToInt)((0,s.intToFraction)(t,e),e).toString(),this.debounceUpdateOutput())},t.prototype.setCurrencies=function(t){this.currencies=JSON.parse(JSON.stringify(t)),this.currencies[this.currency]||(this.currency=Object.keys(this.currencies)[0]),this.updateCurrenciesSelect(),this.setCurrency(this.currency)},t.prototype.setCurrency=function(t){this.currency=t.toUpperCase(),this.currencyDiv.innerHTML=this.currencies[this.currency].symbol;for(var e=this.currencies[this.currency].fraction,i="",n=0;n<e;n++)i+="0";this.input.placeholder="0"+(0===e?"":"."+i),this.select.value=this.currency,this.debounceUpdateOutput()},t.prototype.setLocale=function(t){this.locale=t,this.debounceUpdateOutput()},t.prototype.setDisabled=function(t){this.disabled=t,this.disabled?(this.container.classList.add("disabled"),this.input.disabled=!0,this.select.disabled=!0):(this.container.classList.remove("disabled"),this.input.disabled=!1,this.select.disabled=!1)},t.prototype.setDisplayOnly=function(t){this.displayOnly=t,this.displayOnly?(this.container.classList.add("display-only"),this.input.tabIndex=-1,this.input.readOnly=!0,this.select.disabled=!0):(this.container.classList.remove("display-only"),this.input.readOnly=!1,this.input.removeAttribute("tabindex"),this.select.disabled=!1)},t.prototype.destroy=function(){this.container.innerHTML=""},t.prototype.validate=function(t){if(!("string"==typeof t.container?document.querySelector(t.container):t.container))throw new Error("Could not find container")},t.prototype.updateOutput=function(){if(""!==this.value){var t=parseInt(this.value,10);void 0!==this.minValue&&t<this.minValue&&(t=this.minValue),void 0!==this.maxValue&&t>this.maxValue&&(t=this.maxValue),this.value=t.toString()}this.isNegative?(this.value="-"+this.value.replace("-",""),"-"===this.value&&(this.value="")):this.value=this.value.replace("-",""),this.format=(0,s.intToFraction)(this.value,this.currencies[this.currency].fraction).toFixed(this.currencies[this.currency].fraction),this.display=(0,s.displayValue)(this.value,this.currency,this.currencies[this.currency].fraction,this.locale),this.updateInputDisplay(),this.onChange({value:this.value,display:this.display,format:this.format,currency:this.currency,locale:this.locale})},t.prototype.updateInputDisplay=function(){if(""!==this.value){var t=this.display.replace(this.currencies[this.currency.toUpperCase()].symbol,""),e=this.currency;for(var i in t=t.replace(e,""),e.split("").forEach((function(i,n){t=t.replace(e.substring(0,e.length-n),"")})),s.currencies)s.currencies.hasOwnProperty(i)&&(t=(t=t.replace(i,"")).replace(s.currencies[i].symbol,""));t=t.trim(),this.isNegative&&(t="-"+t.replace("-","")),this.input.value=t}else this.input.value=""},t.prototype.render=function(){var t=this;this.container.classList.add("fpm"),this.currencyDiv.classList.add("fpm-currency"),this.input.classList.add("fpm-value"),this.input.dataset.lpignore="true",this.select.classList.add("fpm-select"),this.input.addEventListener("keydown",(function(e){t.inputKeydown(e)}),!1),this.input.addEventListener("click",(function(e){t.displayOnly?e.preventDefault():(t.input.focus(),t.moveCursorToEnd(t.input))}),!1),this.displayOnly&&this.setDisplayOnly(!0),this.updateCurrenciesSelect(),this.select.addEventListener("change",(function(){t.setCurrency(t.select.value)})),this.container.appendChild(this.currencyDiv),this.container.appendChild(this.input),this.showSelection&&this.container.appendChild(this.select)},t.prototype.updateCurrenciesSelect=function(){for(var t in this.select.innerHTML="",this.currencies)if(this.currencies.hasOwnProperty(t)){var e=document.createElement("option");e.value=t,e.text=t.toUpperCase(),this.select.appendChild(e)}},t.prototype.inputKeydown=function(t){var e=this;if(this.displayOnly)t.preventDefault();else{var i=t.key,n=i.charCodeAt(0);if("unidentified"===i.toLowerCase())return t.preventDefault(),void setTimeout((function(){e.updateOutput()}),100);if(68===n||66===n)return t.preventDefault(),this.value=this.value.substring(0,this.value.length-1),"-"===this.value&&(this.value=""),void this.updateOutput();if(n>=48&&n<=57)return t.preventDefault(),this.value+=t.key,void this.updateOutput();if(84!==n){if(43===n)return t.preventDefault(),this.isNegative=!1,void this.updateOutput();if(45===n){if(t.preventDefault(),void 0!==this.minValue&&this.minValue>=0)return;return this.isNegative=!0,void this.updateOutput()}if("ArrowUp"===i)return t.preventDefault(),this.value=String(parseInt(this.value,10)+(0,s.fractionToInt)(this.step)),void this.updateOutput();if("ArrowDown"===i)return t.preventDefault(),this.value=String(parseInt(this.value,10)-(0,s.fractionToInt)(this.step)),void this.updateOutput();t.preventDefault(),t.stopPropagation()}}},t.prototype.moveCursorToEnd=function(t){if("number"==typeof t.selectionStart)t.selectionStart=t.selectionEnd=t.value.length;else if(void 0!==t.createTextRange){t.focus();var e=t.createTextRange();e.collapse(!1),e.select()}},t.prototype.getMobileOs=function(){var t=window,e=navigator.userAgent||navigator.vendor||t.opera;return/windows phone/i.test(e)?"windows":/android/i.test(e)?"android":/iPad|iPhone|iPod/.test(e)&&!t.MSStream?"ios":"desktop"},t}();e.default=o}])}));