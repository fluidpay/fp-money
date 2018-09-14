!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.FPMoney=e():t.FPMoney=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e,n){"use strict";function r(t,e){if(void 0===e&&(e=2),t=t.toString(),0===e)return parseInt(t,10).toString();for(var n="1",r=0;r<e;r++)n+="0";var i=parseInt(n,10);return(parseInt(t,10)/i).toFixed(e)}e.__esModule=!0,e.currencies={USD:{symbol:"$",fraction:2},EUR:{symbol:"€",fraction:2},GBP:{symbol:"£",fraction:2},INR:{symbol:"₹",fraction:2},VND:{symbol:"₫",fraction:0},ILS:{symbol:"₪",fraction:2},JPY:{symbol:"¥",fraction:0},CNY:{symbol:"¥",fraction:2},CRC:{symbol:"₡",fraction:2},NGN:{symbol:"₦",fraction:2},PYG:{symbol:"₲",fraction:0},PHP:{symbol:"₱",fraction:2},PLN:{symbol:"zł",fraction:2},THB:{symbol:"฿",fraction:2},UAH:{symbol:"₴",fraction:2},KRW:{symbol:"₩",fraction:0}},e.lowestCommonToFloat=function(){},e.floatToLowestCommon=r;var i=function(){function t(t){var n;this.value="",this.display="",this.format="",this.currency="USD",this.locale=this.getLocale(),this.validate(t),n="string"==typeof t.container?document.querySelector(t.container):t.container,this.container=n,t.currency&&(this.currency=t.currency.toUpperCase()),t.locale&&(this.locale=t.locale),t.value&&(this.value=r(t.value,e.currencies[this.currency].fraction)),this.onChange=t.onChange?this.onChange=t.onChange:function(){},this.currencyDiv=document.createElement("div"),this.input=document.createElement("input"),this.select=document.createElement("select"),this.render(),this.setCurrency(this.currency)}return t.prototype.setCurrency=function(t){t=t.toUpperCase(),this.currency=t,this.currencyDiv.innerHTML=e.currencies[t].symbol;for(var n=e.currencies[t].fraction,r="",i=0;i<n;i++)r+="0";this.input.placeholder="0"+(0===n?"":"."+r),this.select.value=t,this.updateOutput()},t.prototype.setLocale=function(t){this.locale=t,this.updateOutput()},t.prototype.displayValue=function(){var t=e.currencies[this.currency.toUpperCase()].fraction;return new Intl.NumberFormat(this.locale,{localeMatcher:"best fit",style:"currency",currency:this.currency.toUpperCase(),currencyDisplay:"symbol",minimumFractionDigits:t,maximumFractionDigits:t}).format(parseFloat(this.formatValue()))},t.prototype.formatValue=function(){var t=""===this.value?"0":this.value,n=e.currencies[this.currency.toUpperCase()].fraction;if(0===n)return t;for(var r="1",i=0;i<n;i++)r+="0";var o=parseInt(r,10);return(parseInt(t,10)/o).toFixed(n)},t.prototype.validate=function(t){if(!("string"==typeof t.container?document.querySelector(t.container):t.container))throw new Error("Could not find container")},t.prototype.updateInputDisplay=function(){if(""!==this.value){var t=this.display.replace(e.currencies[this.currency.toUpperCase()].symbol,""),n=this.currency;n.split("").forEach(function(e,r){t=t.replace(n.substring(0,n.length-r),"")}),t=t.trim(),this.input.value=t}else this.input.value=""},t.prototype.updateOutput=function(){this.value=""===this.value?"":parseInt(this.value,10).toString(),this.format=this.formatValue(),this.display=this.displayValue(),this.updateInputDisplay(),this.onChange({value:this.value,display:this.display,format:this.format,currency:this.currency,locale:this.locale})},t.prototype.render=function(){var t=this;for(var n in this.container.classList.add("fpm"),this.currencyDiv.classList.add("fpm-currency"),this.input.classList.add("fpm-value"),this.select.classList.add("fpm-select"),this.input.addEventListener("keydown",function(e){t.inputKeydown(e)},!1),this.input.addEventListener("click",function(e){t.input.focus(),t.moveCursorToEnd(t.input)},!1),e.currencies)if(e.currencies.hasOwnProperty(n)){var r=document.createElement("option");r.value=n,r.text=n.toUpperCase(),this.select.appendChild(r)}this.select.addEventListener("change",function(){t.setCurrency(t.select.value)}),this.container.appendChild(this.currencyDiv),this.container.appendChild(this.input),this.container.appendChild(this.select)},t.prototype.inputKeydown=function(t){t.preventDefault();var e=t.keyCode||t.which;return 8===e||46===e?(this.value=this.value.substring(0,this.value.length-1),void this.updateOutput()):e>=48&&e<=57?(this.value+=String.fromCharCode(e),void this.updateOutput()):void 0},t.prototype.moveCursorToEnd=function(t){if("number"==typeof t.selectionStart)t.selectionStart=t.selectionEnd=t.value.length;else if(void 0!==t.createTextRange){t.focus();var e=t.createTextRange();e.collapse(!1),e.select()}},t.prototype.getLocale=function(){return void 0!==navigator.languages?navigator.languages[0]:navigator.language?navigator.language:"en"},t}();e.default=i},function(t,e,n){}]).default});