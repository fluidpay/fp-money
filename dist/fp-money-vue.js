!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.FPMoney=e():t.FPMoney=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";function i(t,e){void 0===e&&(e=2),""===(t=t.toString())&&(t="0");for(var n="1",i=0;i<e;i++)n+="0";var r=parseInt(n,10);return-1!==t.indexOf(".")&&(t=(parseFloat(t)*r).toString()),0===e?parseInt(t,10):parseFloat((parseInt(t,10)/r).toFixed(e))}function r(){return void 0!==navigator.languages?navigator.languages[0]:navigator.language?navigator.language:"en-US"}e.__esModule=!0,e.currencies={USD:{symbol:"$",fraction:2},EUR:{symbol:"€",fraction:2},GBP:{symbol:"£",fraction:2},INR:{symbol:"₹",fraction:2},CRC:{symbol:"₡",fraction:2},VND:{symbol:"₫",fraction:0},HUF:{symbol:"Ft",fraction:2},ILS:{symbol:"₪",fraction:2},CNY:{symbol:"¥",fraction:2},KRW:{symbol:"₩",fraction:0},NGN:{symbol:"₦",fraction:2},PYG:{symbol:"₲",fraction:0},PHP:{symbol:"₱",fraction:2},PLN:{symbol:"zł",fraction:2},THB:{symbol:"฿",fraction:2},UAH:{symbol:"₴",fraction:2},JPY:{symbol:"¥",fraction:0}},e.intToFraction=i,e.fractionToInt=function(t,e){void 0===e&&(e=2);for(var n=t.toString(),i="1",r=0;r<e;r++)i+="0";var o=parseInt(i,10),s=Math.round(parseFloat(n)*o).toString();return parseInt(s,10)},e.displayValue=function(t,e,n,o){return void 0===o&&(o=r()),new Intl.NumberFormat(o,{localeMatcher:"best fit",style:"currency",currency:e.toUpperCase(),currencyDisplay:"symbol",minimumFractionDigits:n,maximumFractionDigits:n}).format(i(t,n))},e.getLocale=r},function(t,e,n){"use strict";e.__esModule=!0;var i=n(0);!function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(0));var r=function(){function t(t){var e;this.value="",this.display="",this.format="",this.currencies=JSON.parse(JSON.stringify(i.currencies)),this.currency="",this.locale=i.getLocale(),this.maxValue=0,this.showSelection=!0,this.validate(t),e="string"==typeof t.container?document.querySelector(t.container):t.container,this.container=e,t.currencies&&(this.currencies=t.currencies),t.currency?this.currency=t.currency.toUpperCase():this.currency=Object.keys(this.currencies)[0],t.locale&&(this.locale=t.locale),t.value&&(this.value=i.fractionToInt(t.value,this.currencies[this.currency].fraction).toString()),t.maxValue&&(this.maxValue=i.fractionToInt(t.maxValue,this.currencies[this.currency].fraction)),void 0!==t.showSelection&&(this.showSelection=t.showSelection),this.onChange=t.onChange?this.onChange=t.onChange:function(){},this.currencyDiv=document.createElement("div"),this.input=document.createElement("input"),this.select=document.createElement("select"),this.render(),this.setCurrency(this.currency)}return t.prototype.setValue=function(t){this.value=i.fractionToInt(t,this.currencies[this.currency].fraction).toString(),this.updateOutput()},t.prototype.setCurrency=function(t){t=t.toUpperCase(),this.currency=t,this.currencyDiv.innerHTML=this.currencies[t].symbol;for(var e=this.currencies[t].fraction,n="",i=0;i<e;i++)n+="0";this.input.placeholder="0"+(0===e?"":"."+n),this.select.value=t,this.updateOutput()},t.prototype.setLocale=function(t){this.locale=t,this.updateOutput()},t.prototype.destroy=function(){this.container.innerHTML=""},t.prototype.validate=function(t){if(!("string"==typeof t.container?document.querySelector(t.container):t.container))throw new Error("Could not find container")},t.prototype.updateOutput=function(){if(""!==this.value){var t=parseInt(this.value,10);0!==this.maxValue&&t>this.maxValue&&(t=this.maxValue),this.value=t.toString()}this.format=i.intToFraction(this.value,this.currencies[this.currency].fraction).toFixed(this.currencies[this.currency].fraction),this.display=i.displayValue(this.value,this.currency,this.currencies[this.currency].fraction,this.locale),this.updateInputDisplay(),this.onChange({value:this.value,display:this.display,format:this.format,currency:this.currency,locale:this.locale})},t.prototype.updateInputDisplay=function(){if(""!==this.value){var t=this.display.replace(this.currencies[this.currency.toUpperCase()].symbol,""),e=this.currency;t=t.replace(e,""),e.split("").forEach(function(n,i){t=t.replace(e.substring(0,e.length-i),"")}),t=t.trim(),this.input.value=t}else this.input.value=""},t.prototype.render=function(){var t=this;for(var e in this.container.classList.add("fpm"),this.currencyDiv.classList.add("fpm-currency"),this.input.classList.add("fpm-value"),this.select.classList.add("fpm-select"),this.input.addEventListener("keydown",function(e){t.inputKeydown(e)},!1),this.input.addEventListener("click",function(e){t.input.focus(),t.moveCursorToEnd(t.input)},!1),this.currencies)if(this.currencies.hasOwnProperty(e)){var n=document.createElement("option");n.value=e,n.text=e.toUpperCase(),this.select.appendChild(n)}this.select.addEventListener("change",function(){t.setCurrency(t.select.value)}),this.container.appendChild(this.currencyDiv),this.container.appendChild(this.input),this.showSelection&&this.container.appendChild(this.select)},t.prototype.inputKeydown=function(t){var e=t.keyCode||t.which;8===e||46===e?(t.preventDefault(),this.value=this.value.substring(0,this.value.length-1),this.updateOutput()):e>=48&&e<=57||e>=96&&e<=105?(t.preventDefault(),this.value+=t.key,this.updateOutput()):9===e||13===e||t.preventDefault()},t.prototype.moveCursorToEnd=function(t){if("number"==typeof t.selectionStart)t.selectionStart=t.selectionEnd=t.value.length;else if(void 0!==t.createTextRange){t.focus();var e=t.createTextRange();e.collapse(!1),e.select()}},t}();e.default=r},,,function(t,e,n){"use strict";n.r(e);var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"fpmoney"})};i._withStripped=!0;var r=n(1),o=n.n(r);var s=function(t,e,n,i,r,o,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}({name:"fp-money",props:{value:[String,Number],currencies:Object,currency:String,locale:String,maxValue:Number,onChange:Function,showSelection:{type:Boolean,default:!0}},data:()=>({fpmoney:null,values:{value:"",format:"",display:"",currency:"",locale:""}}),mounted(){this.init()},updated(){this.fpmoney&&this.fpmoney.destroy(),this.init()},watch:{value(t,e){this.fpmoney.setValue(t)},currency(t,e){this.fpmoney.setCurrency(t)},locale(t,e){this.fpmoney.setLocale(t)}},methods:{init(){const t={container:this.$refs.fpmoney,onChange:t=>{this.values=t,this.$emit("input",this.values.format),this.$emit("update:value",this.values.value),this.$emit("update:format",this.values.format),this.$emit("update:display",this.values.display),this.$emit("update:currency",this.values.currency),this.$emit("update:locale",this.values.locale),this.onChange&&this.onChange(t)}};this.value&&(t.value=this.value),this.currencies&&(t.currencies=this.currencies),this.currency&&(t.currency=this.currency),this.locale&&(t.locale=this.locale),this.maxValue&&(t.maxValue=this.maxValue),t.showSelection=this.showSelection,this.fpmoney=new o.a(t)}}},i,[],!1,null,null,null);s.options.__file="component.vue";e.default=s.exports}])});