!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.FPMoney=e():t.FPMoney=e()}(window,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){"use strict";function n(t,e){void 0===e&&(e=2),""===(t=t.toString())&&(t="0");for(var i="1",n=0;n<e;n++)i+="0";var r=parseInt(i,10);return-1!==t.indexOf(".")&&(t=(parseFloat(t)*r).toString()),0===e?parseInt(t,10):parseFloat((parseInt(t,10)/r).toFixed(e))}function r(){return void 0!==navigator.languages?navigator.languages[0]:navigator.language?navigator.language:"en-US"}e.__esModule=!0,e.currencies={USD:{symbol:"$",fraction:2},EUR:{symbol:"€",fraction:2},GBP:{symbol:"£",fraction:2},INR:{symbol:"₹",fraction:2},CRC:{symbol:"₡",fraction:2},VND:{symbol:"₫",fraction:0},HUF:{symbol:"Ft",fraction:2},ILS:{symbol:"₪",fraction:2},CNY:{symbol:"¥",fraction:2},KRW:{symbol:"₩",fraction:0},NGN:{symbol:"₦",fraction:2},PYG:{symbol:"₲",fraction:0},PHP:{symbol:"₱",fraction:2},PLN:{symbol:"zł",fraction:2},THB:{symbol:"฿",fraction:2},UAH:{symbol:"₴",fraction:2},JPY:{symbol:"¥",fraction:0}},e.intToFraction=n,e.fractionToInt=function(t,e){void 0===e&&(e=2);for(var i=t.toString(),n="1",r=0;r<e;r++)n+="0";var o=parseInt(n,10),s=Math.round(parseFloat(i)*o).toString();return parseInt(s,10)},e.displayValue=function(t,e,i,o){return void 0===o&&(o=r()),new Intl.NumberFormat(o,{localeMatcher:"best fit",style:"currency",currency:e.toUpperCase(),currencyDisplay:"symbol",minimumFractionDigits:i,maximumFractionDigits:i}).format(n(t,i))},e.getLocale=r,e.isNegative=function(t){return-1!==t.indexOf("-")}},function(t,e,i){"use strict";e.__esModule=!0;var n=i(0);!function(t){for(var i in t)e.hasOwnProperty(i)||(e[i]=t[i])}(i(0));var r=function(){function t(t){var e;this.isNegative=!1,this.value="",this.display="",this.format="",this.currencies=JSON.parse(JSON.stringify(n.currencies)),this.currency="",this.locale=n.getLocale(),this.maxValue=0,this.showSelection=!0,this.validate(t),e="string"==typeof t.container?document.querySelector(t.container):t.container,this.container=e,t.currencies&&(this.currencies=t.currencies),t.currency?this.currency=t.currency.toUpperCase():this.currency=Object.keys(this.currencies)[0],t.locale&&(this.locale=t.locale),t.value&&(this.isNegative=n.isNegative(t.value.toString()),this.value=n.fractionToInt(t.value,this.currencies[this.currency].fraction).toString()),t.maxValue&&(this.maxValue=n.fractionToInt(t.maxValue,this.currencies[this.currency].fraction)),void 0!==t.showSelection&&(this.showSelection=t.showSelection),this.onChange=t.onChange?this.onChange=t.onChange:function(){},this.currencyDiv=document.createElement("div"),this.input=document.createElement("input"),this.select=document.createElement("select"),this.render(),this.setCurrency(this.currency)}return t.prototype.setValue=function(t){this.isNegative=n.isNegative(t.toString()),this.value=n.fractionToInt(t,this.currencies[this.currency].fraction).toString(),this.updateOutput()},t.prototype.setCurrency=function(t){t=t.toUpperCase(),this.currency=t,this.currencyDiv.innerHTML=this.currencies[t].symbol;for(var e=this.currencies[t].fraction,i="",n=0;n<e;n++)i+="0";this.input.placeholder="0"+(0===e?"":"."+i),this.select.value=t,this.updateOutput()},t.prototype.setLocale=function(t){this.locale=t,this.updateOutput()},t.prototype.destroy=function(){this.container.innerHTML=""},t.prototype.validate=function(t){if(!("string"==typeof t.container?document.querySelector(t.container):t.container))throw new Error("Could not find container")},t.prototype.updateOutput=function(){if(""!==this.value){var t=parseInt(this.value,10);0!==this.maxValue&&t>this.maxValue&&(t=this.maxValue),this.value=t.toString()}this.isNegative?(this.value="-"+this.value.replace("-",""),"-"===this.value&&(this.value="")):this.value=this.value.replace("-",""),this.format=n.intToFraction(this.value,this.currencies[this.currency].fraction).toFixed(this.currencies[this.currency].fraction),this.display=n.displayValue(this.value,this.currency,this.currencies[this.currency].fraction,this.locale),this.updateInputDisplay(),this.onChange({value:this.value,display:this.display,format:this.format,currency:this.currency,locale:this.locale})},t.prototype.updateInputDisplay=function(){if(""!==this.value){var t=this.display.replace(this.currencies[this.currency.toUpperCase()].symbol,""),e=this.currency;t=t.replace(e,""),e.split("").forEach(function(i,n){t=t.replace(e.substring(0,e.length-n),"")}),t=t.trim(),this.isNegative&&(t="-"+t.replace("-","")),this.input.value=t}else this.input.value=""},t.prototype.render=function(){var t=this;for(var e in this.container.classList.add("fpm"),this.currencyDiv.classList.add("fpm-currency"),this.input.classList.add("fpm-value"),this.select.classList.add("fpm-select"),this.input.addEventListener("keydown",function(e){t.inputKeydown(e)},!1),this.input.addEventListener("click",function(e){t.input.focus(),t.moveCursorToEnd(t.input)},!1),this.currencies)if(this.currencies.hasOwnProperty(e)){var i=document.createElement("option");i.value=e,i.text=e.toUpperCase(),this.select.appendChild(i)}this.select.addEventListener("change",function(){t.setCurrency(t.select.value)}),this.container.appendChild(this.currencyDiv),this.container.appendChild(this.input),this.showSelection&&this.container.appendChild(this.select)},t.prototype.inputKeydown=function(t){var e=t.keyCode||t.which,i=t.shiftKey;8===e||46===e?(t.preventDefault(),this.value=this.value.substring(0,this.value.length-1),"-"===this.value&&(this.value=""),this.updateOutput()):e>=48&&e<=57||e>=96&&e<=105?(t.preventDefault(),this.value+=t.key,this.updateOutput()):9===e||13===e||(107===e||i&&187===e?(t.preventDefault(),this.isNegative=!1,this.updateOutput()):109===e||189===e?(t.preventDefault(),this.isNegative=!0,this.updateOutput()):t.preventDefault())},t.prototype.moveCursorToEnd=function(t){if("number"==typeof t.selectionStart)t.selectionStart=t.selectionEnd=t.value.length;else if(void 0!==t.createTextRange){t.focus();var e=t.createTextRange();e.collapse(!1),e.select()}},t}();e.default=r}])});