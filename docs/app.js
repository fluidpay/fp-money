(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],f=0,p=[];f<s.length;f++)o=s[f],a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0df1":function(e,t,n){"use strict";var r=n("e637"),a=n.n(r);a.a},"2fc2":function(e,t,n){"use strict";var r=n("eefe"),a=n.n(r);a.a},4286:function(e,t,n){},c30d:function(e,t,n){"use strict";var r=n("4286"),a=n.n(r);a.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d"),n("dc22");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"bluebar"}),n("div",{staticClass:"greenbar"}),n("div",{staticClass:"orangebar"}),n("div",{staticClass:"app"},[n("Header"),n("transition",{attrs:{mode:"out-in",name:"slide-left"}},[n("router-view")],1)],1)])},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[e._v("FluidPay Money Formatter")]),n("div",{staticClass:"menu"},[n("router-link",{attrs:{to:"/"}},[e._v("Basic")]),n("router-link",{attrs:{to:"/vue"}},[e._v("Vue")])],1)])},s=[],c=r["a"].extend({}),u=c,l=(n("0df1"),n("2877")),f=Object(l["a"])(u,o,s,!1,null,null,null);f.options.__file="header.vue";var p=f.exports,v=r["a"].extend({name:"app",components:{Header:p}}),d=v,h=(n("c30d"),Object(l["a"])(d,a,i,!1,null,null,null));h.options.__file="App.vue";var y=h.exports,m=n("8c4f"),b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"basic"},[n("div",{attrs:{id:"example"}})])}],C=(n("28a5"),n("ac6a"),n("a481"),n("c665")),_=n("aa9a"),x=(n("6b54"),{USD:{symbol:"$",fraction:2},EUR:{symbol:"€",fraction:2},GBP:{symbol:"£",fraction:2},INR:{symbol:"₹",fraction:2},VND:{symbol:"₫",fraction:0},ILS:{symbol:"₪",fraction:2},JPY:{symbol:"¥",fraction:0},CNY:{symbol:"¥",fraction:2},CRC:{symbol:"₡",fraction:2},NGN:{symbol:"₦",fraction:2},PYG:{symbol:"₲",fraction:0},PHP:{symbol:"₱",fraction:2},PLN:{symbol:"zł",fraction:2},THB:{symbol:"฿",fraction:2},UAH:{symbol:"₴",fraction:2},KRW:{symbol:"₩",fraction:0}});function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(e=e.toString(),0===t)return parseInt(e,10).toString();for(var n="1",r=0;r<t;r++)n+="0";var a=parseInt(n,10);return(parseInt(e,10)/a).toFixed(t)}var O=function(){function e(t){var n;Object(C["a"])(this,e),this.value="",this.display="",this.format="",this.currency="USD",this.locale=this.getLocale(),this.validate(t),n="string"===typeof t.container?document.querySelector(t.container):t.container,this.container=n,t.currency&&(this.currency=t.currency.toUpperCase()),t.locale&&(this.locale=t.locale),t.value&&(this.value=w(t.value,x[this.currency].fraction)),this.onChange=t.onChange?this.onChange=t.onChange:function(){},this.currencyDiv=document.createElement("div"),this.input=document.createElement("input"),this.select=document.createElement("select"),this.render(),this.setCurrency(this.currency)}return Object(_["a"])(e,[{key:"setCurrency",value:function(e){e=e.toUpperCase(),this.currency=e,this.currencyDiv.innerHTML=x[e].symbol;for(var t=x[e].fraction,n="",r=0;r<t;r++)n+="0";this.input.placeholder="0"+(0===t?"":"."+n),this.select.value=e,this.updateOutput()}},{key:"setLocale",value:function(e){this.locale=e,this.updateOutput()}},{key:"displayValue",value:function(){var e=x[this.currency.toUpperCase()].fraction,t=new Intl.NumberFormat(this.locale,{localeMatcher:"best fit",style:"currency",currency:this.currency.toUpperCase(),currencyDisplay:"symbol",minimumFractionDigits:e,maximumFractionDigits:e});return t.format(parseFloat(this.formatValue()))}},{key:"formatValue",value:function(){var e=""===this.value?"0":this.value,t=x[this.currency.toUpperCase()].fraction;if(0===t)return e;for(var n="1",r=0;r<t;r++)n+="0";var a=parseInt(n,10);return(parseInt(e,10)/a).toFixed(t)}},{key:"validate",value:function(e){var t;if(t="string"===typeof e.container?document.querySelector(e.container):e.container,!t)throw new Error("Could not find container")}},{key:"updateInputDisplay",value:function(){if(""!==this.value){var e=this.display.replace(x[this.currency.toUpperCase()].symbol,""),t=this.currency;t.split("").forEach(function(n,r){e=e.replace(t.substring(0,t.length-r),"")}),e=e.trim(),this.input.value=e}else this.input.value=""}},{key:"updateOutput",value:function(){this.value=""===this.value?"":parseInt(this.value,10).toString(),this.format=this.formatValue(),this.display=this.displayValue(),this.updateInputDisplay(),this.onChange({value:this.value,display:this.display,format:this.format,currency:this.currency,locale:this.locale})}},{key:"render",value:function(){var e=this;for(var t in this.container.classList.add("fpm"),this.currencyDiv.classList.add("fpm-currency"),this.input.classList.add("fpm-value"),this.select.classList.add("fpm-select"),this.input.addEventListener("keydown",function(t){e.inputKeydown(t)},!1),this.input.addEventListener("click",function(t){e.input.focus(),e.moveCursorToEnd(e.input)},!1),x)if(x.hasOwnProperty(t)){var n=document.createElement("option");n.value=t,n.text=t.toUpperCase(),this.select.appendChild(n)}this.select.addEventListener("change",function(){e.setCurrency(e.select.value)}),this.container.appendChild(this.currencyDiv),this.container.appendChild(this.input),this.container.appendChild(this.select)}},{key:"inputKeydown",value:function(e){e.preventDefault();var t=e.keyCode||e.which;return 8===t||46===t?(this.value=this.value.substring(0,this.value.length-1),void this.updateOutput()):t>=48&&t<=57?(this.value+=String.fromCharCode(t),void this.updateOutput()):void 0}},{key:"moveCursorToEnd",value:function(e){if("number"===typeof e.selectionStart)e.selectionStart=e.selectionEnd=e.value.length;else if("undefined"!==typeof e.createTextRange){e.focus();var t=e.createTextRange();t.collapse(!1),t.select()}}},{key:"getLocale",value:function(){return void 0!==navigator.languages?navigator.languages[0]:navigator.language?navigator.language:"en"}}]),e}(),k=r["a"].extend({mounted:function(){new O({container:document.querySelector("#example"),value:5,currency:"usd",onChange:function(e){console.log(e)}})}}),E=k,S=(n("2fc2"),Object(l["a"])(E,b,g,!1,null,null,null));S.options.__file="basic.vue";var j=S.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("Vue")])},D=[],L=r["a"].extend({}),I=L,U=Object(l["a"])(I,P,D,!1,null,null,null);U.options.__file="vue.vue";var T=U.exports;r["a"].use(m["a"]);var F=new m["a"]({mode:"history",routes:[{path:"/",component:j},{path:"/vue",component:T}]});r["a"].config.productionTip=!1,new r["a"]({router:F,render:function(e){return e(y)}}).$mount("#app")},dc22:function(e,t,n){},e637:function(e,t,n){},eefe:function(e,t,n){}});
//# sourceMappingURL=app.js.map