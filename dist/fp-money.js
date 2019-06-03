!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.FPMoney=e():t.FPMoney=e()}(window,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){"use strict";function n(t,e){void 0===e&&(e=2),""===(t=t.toString())&&(t="0");for(var i="1",n=0;n<e;n++)i+="0";var r=parseInt(i,10);return-1!==t.indexOf(".")&&(t=(parseFloat(t)*r).toString()),0===e?parseInt(t,10):parseFloat((parseInt(t,10)/r).toFixed(e))}function r(){return void 0!==navigator.languages?navigator.languages[0]:navigator.language?navigator.language:"en-US"}e.__esModule=!0,e.currencies={USD:{symbol:"$",fraction:2},EUR:{symbol:"€",fraction:2},GBP:{symbol:"£",fraction:2},INR:{symbol:"₹",fraction:2},CRC:{symbol:"₡",fraction:2},VND:{symbol:"₫",fraction:0},HUF:{symbol:"Ft",fraction:2},ILS:{symbol:"₪",fraction:2},CNY:{symbol:"¥",fraction:2},KRW:{symbol:"₩",fraction:0},NGN:{symbol:"₦",fraction:2},PYG:{symbol:"₲",fraction:0},PHP:{symbol:"₱",fraction:2},PLN:{symbol:"zł",fraction:2},THB:{symbol:"฿",fraction:2},UAH:{symbol:"₴",fraction:2},JPY:{symbol:"¥",fraction:0}},e.intToFraction=n,e.fractionToInt=function(t,e){void 0===e&&(e=2);var i=t.toString();if(""===i.trim())return 0;for(var n="1",r=0;r<e;r++)n+="0";var s=parseInt(n,10),a=Math.round(parseFloat(i)*s).toString();return parseInt(a,10)},e.displayValue=function(t,e,i,s){return void 0===s&&(s=r()),new Intl.NumberFormat(s,{localeMatcher:"best fit",style:"currency",currency:e.toUpperCase(),currencyDisplay:"symbol",minimumFractionDigits:i,maximumFractionDigits:i}).format(n(t,i))},e.getLocale=r,e.isNegative=function(t){return-1!==String(t).indexOf("-")}},function(t,e,i){"use strict";e.__esModule=!0;var n=i(0);!function(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}(i(0));var r=function(){function t(t){var e;if(this.isNegative=!1,this.value="",this.display="",this.format="",this.currencies=JSON.parse(JSON.stringify(n.currencies)),this.currency="",this.locale=n.getLocale(),this.valueFormat="float",this.minValue=void 0,this.maxValue=void 0,this.step=1,this.disabled=!1,this.displayOnly=!1,this.showSelection=!1,this.validate(t),this.mobileOs=this.getMobileOs(),e="string"==typeof t.container?document.querySelector(t.container):t.container,this.container=e,t.currencies&&(this.currencies=t.currencies),t.currency?this.currency=t.currency.toUpperCase():this.currency=Object.keys(this.currencies)[0],t.locale&&(this.locale=t.locale),t.valueFormat&&(this.valueFormat=t.valueFormat),void 0!==t.value){var i=t.value;this.isNegative=n.isNegative(i.toString()),"int"===t.valueFormat&&(i=n.intToFraction(i,this.currencies[this.currency].fraction)),this.value=n.fractionToInt(i,this.currencies[this.currency].fraction).toString()}t.minValue&&(this.minValue=n.fractionToInt(t.minValue,this.currencies[this.currency].fraction)),t.maxValue&&(this.maxValue=n.fractionToInt(t.maxValue,this.currencies[this.currency].fraction)),t.step&&(this.step=t.step),!0===t.disabled&&(this.disabled=!0),!0===t.displayOnly&&(this.displayOnly=!0),void 0!==t.showSelection&&(this.showSelection=t.showSelection),this.onChange=t.onChange?this.onChange=t.onChange:function(){},this.currencyDiv=document.createElement("div"),this.input=document.createElement("input"),"android"===this.mobileOs&&(this.input.inputMode="numeric"),"ios"===this.mobileOs&&(this.input.inputMode="numeric",this.input.pattern="[0-9]*"),this.select=document.createElement("select"),this.render(),this.setCurrency(this.currency),this.disabled&&this.setDisabled(this.disabled),this.displayOnly&&this.setDisplayOnly(this.displayOnly)}return t.prototype.setValue=function(t){var e=this.currencies[this.currency].fraction;t="float"===this.valueFormat?n.fractionToInt(t,e).toString():t.toString(),this.value.toString()!==t&&(this.isNegative=n.isNegative(t),this.value=n.fractionToInt(n.intToFraction(t,e),e).toString(),this.updateOutput())},t.prototype.setCurrencies=function(t){this.currencies=t,this.currencies[this.currency]||(this.currency=Object.keys(this.currencies)[0]),this.updateCurrenciesSelect(),this.setCurrency(this.currency)},t.prototype.setCurrency=function(t){this.currency=t.toUpperCase(),this.currencyDiv.innerHTML=this.currencies[this.currency].symbol;for(var e=this.currencies[this.currency].fraction,i="",n=0;n<e;n++)i+="0";this.input.placeholder="0"+(0===e?"":"."+i),this.select.value=this.currency,this.updateOutput()},t.prototype.setLocale=function(t){this.locale=t,this.updateOutput()},t.prototype.setDisabled=function(t){this.disabled=t,this.disabled?(this.container.classList.add("disabled"),this.input.disabled=!0,this.select.disabled=!0):(this.container.classList.remove("disabled"),this.input.disabled=!1,this.select.disabled=!1)},t.prototype.setDisplayOnly=function(t){this.displayOnly=t,this.displayOnly?(this.container.classList.add("display-only"),this.input.tabIndex=-1,this.input.readOnly=!0,this.select.disabled=!0):(this.container.classList.remove("display-only"),this.input.readOnly=!1,this.input.removeAttribute("tabindex"),this.select.disabled=!1)},t.prototype.destroy=function(){this.container.innerHTML=""},t.prototype.validate=function(t){if(!("string"==typeof t.container?document.querySelector(t.container):t.container))throw new Error("Could not find container")},t.prototype.updateOutput=function(){if(""!==this.value){var t=parseInt(this.value,10);void 0!==this.minValue&&t<this.minValue&&(t=this.minValue),void 0!==this.maxValue&&t>this.maxValue&&(t=this.maxValue),this.value=t.toString()}this.isNegative?(this.value="-"+this.value.replace("-",""),"-"===this.value&&(this.value="")):this.value=this.value.replace("-",""),this.format=n.intToFraction(this.value,this.currencies[this.currency].fraction).toFixed(this.currencies[this.currency].fraction),this.display=n.displayValue(this.value,this.currency,this.currencies[this.currency].fraction,this.locale),this.updateInputDisplay(),this.onChange({value:this.value,display:this.display,format:this.format,currency:this.currency,locale:this.locale})},t.prototype.updateInputDisplay=function(){if(""!==this.value){var t=this.display.replace(this.currencies[this.currency.toUpperCase()].symbol,""),e=this.currency;for(var i in t=t.replace(e,""),e.split("").forEach(function(i,n){t=t.replace(e.substring(0,e.length-n),"")}),n.currencies)n.currencies.hasOwnProperty(i)&&(t=(t=t.replace(i,"")).replace(n.currencies[i].symbol,""));t=t.trim(),this.isNegative&&(t="-"+t.replace("-","")),this.input.value=t}else this.input.value=""},t.prototype.render=function(){var t=this;this.container.classList.add("fpm"),this.currencyDiv.classList.add("fpm-currency"),this.input.classList.add("fpm-value"),this.select.classList.add("fpm-select"),this.input.addEventListener("keydown",function(e){t.inputKeydown(e)},!1),this.input.addEventListener("click",function(e){t.displayOnly?e.preventDefault():(t.input.focus(),t.moveCursorToEnd(t.input))},!1),this.displayOnly&&this.setDisplayOnly(!0),this.updateCurrenciesSelect(),this.select.addEventListener("change",function(){t.setCurrency(t.select.value)}),this.container.appendChild(this.currencyDiv),this.container.appendChild(this.input),this.showSelection&&this.container.appendChild(this.select)},t.prototype.updateCurrenciesSelect=function(){for(var t in this.select.innerHTML="",this.currencies)if(this.currencies.hasOwnProperty(t)){var e=document.createElement("option");e.value=t,e.text=t.toUpperCase(),this.select.appendChild(e)}},t.prototype.inputKeydown=function(t){var e=this;if(this.displayOnly)t.preventDefault();else{var i=t.key,r=i.charCodeAt(0);if("unidentified"===i.toLowerCase())return t.preventDefault(),void setTimeout(function(){e.updateOutput()},100);if(68===r||66===r)return t.preventDefault(),this.value=this.value.substring(0,this.value.length-1),"-"===this.value&&(this.value=""),void this.updateOutput();if(r>=48&&r<=57||r>=96&&r<=105)return t.preventDefault(),this.value+=t.key,void this.updateOutput();if(84!==r)return 43===r?(t.preventDefault(),this.isNegative=!1,void this.updateOutput()):45===r?(t.preventDefault(),this.isNegative=!0,void this.updateOutput()):"ArrowUp"===i?(t.preventDefault(),this.value=String(parseInt(this.value,10)+n.fractionToInt(this.step)),void this.updateOutput()):"ArrowDown"===i?(t.preventDefault(),this.value=String(parseInt(this.value,10)-n.fractionToInt(this.step)),void this.updateOutput()):void t.preventDefault()}},t.prototype.moveCursorToEnd=function(t){if("number"==typeof t.selectionStart)t.selectionStart=t.selectionEnd=t.value.length;else if(void 0!==t.createTextRange){t.focus();var e=t.createTextRange();e.collapse(!1),e.select()}},t.prototype.getMobileOs=function(){var t=window,e=navigator.userAgent||navigator.vendor||t.opera;return/windows phone/i.test(e)?"windows":/android/i.test(e)?"android":/iPad|iPhone|iPod/.test(e)&&!t.MSStream?"ios":"desktop"},t}();e.default=r}])});