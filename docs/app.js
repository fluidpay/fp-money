(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],f=0,p=[];f<s.length;f++)o=s[f],i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0df1":function(e,t,n){"use strict";var a=n("e637"),i=n.n(a);i.a},"2fc2":function(e,t,n){"use strict";var a=n("eefe"),i=n.n(a);i.a},4286:function(e,t,n){},bc8c:function(e,t,n){},c30d:function(e,t,n){"use strict";var a=n("4286"),i=n.n(a);i.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d"),n("dc22");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"bluebar"}),n("div",{staticClass:"greenbar"}),n("div",{staticClass:"orangebar"}),n("div",{staticClass:"app"},[n("Header"),n("transition",{attrs:{mode:"out-in",name:"slide-left"}},[n("router-view")],1)],1)])},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[e._v("FluidPay Money Formatter")]),n("div",{staticClass:"menu"},[n("router-link",{attrs:{to:"/"}},[e._v("Basic")]),n("router-link",{attrs:{to:"/vue"}},[e._v("Vue")])],1)])},s=[],c=a["a"].extend({}),l=c,u=(n("0df1"),n("2877")),f=Object(u["a"])(l,o,s,!1,null,null,null);f.options.__file="header.vue";var p=f.exports,v=a["a"].extend({name:"app",components:{Header:p}}),h=v,d=(n("c30d"),Object(u["a"])(h,i,r,!1,null,null,null));d.options.__file="App.vue";var m=d.exports,y=n("8c4f"),g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"basic"},[n("div",{attrs:{id:"example"}}),n("pre",[e._v("    "),n("code",{staticClass:"language-bash"},[e._v("\n      npm install fp-money\n    ")]),e._v("\n  ")]),n("pre",[e._v("    "),n("code",{staticClass:"language-html"},[e._v('\n      <div id="example"></div>\n    ')]),e._v("\n  ")]),n("pre",[e._v("    "),n("code",{staticClass:"language-javascript"},[e._v('\n      new FPMoney({\n        container: document.querySelector(\'#example\') as HTMLDivElement,\n        // value: 86753.09, // optional\n        // locale: \'en-us\', // optional\n        onChange: (values) => {\n          console.log(values)\n          // {\n          // value: "8675309",\n          // display: "$86,753.09",\n          // format: "86753.09",\n          // currency: "USD",\n          // locale: "en-US"\n          // }\n        }\n      })\n    ')]),e._v("\n  ")])])}],C=(n("28a5"),n("ac6a"),n("a481"),n("c665")),_=n("aa9a"),x=(n("6b54"),{USD:{symbol:"$",fraction:2},EUR:{symbol:"€",fraction:2},GBP:{symbol:"£",fraction:2},INR:{symbol:"₹",fraction:2},CRC:{symbol:"₡",fraction:2},VND:{symbol:"₫",fraction:0},HUF:{symbol:"Ft",fraction:2},ILS:{symbol:"₪",fraction:2},CNY:{symbol:"¥",fraction:2},KRW:{symbol:"₩",fraction:0},NGN:{symbol:"₦",fraction:2},PYG:{symbol:"₲",fraction:0},PHP:{symbol:"₱",fraction:2},PLN:{symbol:"zł",fraction:2},THB:{symbol:"฿",fraction:2},UAH:{symbol:"₴",fraction:2},JPY:{symbol:"¥",fraction:0}});function w(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=e.toString(),a="1",i=0;i<t;i++)a+="0";var r=parseInt(a,10),o=(parseFloat(n)*r).toString();return parseInt(o,10).toString()}var S=function(){function e(t){var n;Object(C["a"])(this,e),this.value="",this.display="",this.format="",this.currency="USD",this.locale=this.getLocale(),this.validate(t),n="string"===typeof t.container?document.querySelector(t.container):t.container,this.container=n,t.currency&&(this.currency=t.currency.toUpperCase()),t.locale&&(this.locale=t.locale),t.value&&(this.value=w(t.value,x[this.currency].fraction)),this.onChange=t.onChange?this.onChange=t.onChange:function(){},this.currencyDiv=document.createElement("div"),this.input=document.createElement("input"),this.select=document.createElement("select"),this.render(),this.setCurrency(this.currency)}return Object(_["a"])(e,[{key:"setCurrency",value:function(e){e=e.toUpperCase(),this.currency=e,this.currencyDiv.innerHTML=x[e].symbol;for(var t=x[e].fraction,n="",a=0;a<t;a++)n+="0";this.input.placeholder="0"+(0===t?"":"."+n),this.select.value=e,this.updateOutput()}},{key:"setLocale",value:function(e){this.locale=e,this.updateOutput()}},{key:"displayValue",value:function(){var e=x[this.currency.toUpperCase()].fraction,t=new Intl.NumberFormat(this.locale,{localeMatcher:"best fit",style:"currency",currency:this.currency.toUpperCase(),currencyDisplay:"symbol",minimumFractionDigits:e,maximumFractionDigits:e});return t.format(parseFloat(this.formatValue()))}},{key:"formatValue",value:function(){var e=""===this.value?"0":this.value,t=x[this.currency.toUpperCase()].fraction;if(0===t)return e;for(var n="1",a=0;a<t;a++)n+="0";var i=parseInt(n,10);return(parseInt(e,10)/i).toFixed(t)}},{key:"destroy",value:function(){this.container.innerHTML=""}},{key:"validate",value:function(e){var t;if(t="string"===typeof e.container?document.querySelector(e.container):e.container,!t)throw new Error("Could not find container")}},{key:"updateInputDisplay",value:function(){if(""!==this.value){var e=this.display.replace(x[this.currency.toUpperCase()].symbol,""),t=this.currency;t.split("").forEach(function(n,a){e=e.replace(t.substring(0,t.length-a),"")}),e=e.trim(),this.input.value=e}else this.input.value=""}},{key:"updateOutput",value:function(){this.value=""===this.value?"":parseInt(this.value,10).toString(),this.format=this.formatValue(),this.display=this.displayValue(),this.updateInputDisplay(),this.onChange({value:this.value,display:this.display,format:this.format,currency:this.currency,locale:this.locale})}},{key:"render",value:function(){var e=this;for(var t in this.container.classList.add("fpm"),this.currencyDiv.classList.add("fpm-currency"),this.input.classList.add("fpm-value"),this.select.classList.add("fpm-select"),this.input.addEventListener("keydown",function(t){e.inputKeydown(t)},!1),this.input.addEventListener("click",function(t){e.input.focus(),e.moveCursorToEnd(e.input)},!1),x)if(x.hasOwnProperty(t)){var n=document.createElement("option");n.value=t,n.text=t.toUpperCase(),this.select.appendChild(n)}this.select.addEventListener("change",function(){e.setCurrency(e.select.value)}),this.container.appendChild(this.currencyDiv),this.container.appendChild(this.input),this.container.appendChild(this.select)}},{key:"inputKeydown",value:function(e){e.preventDefault();var t=e.keyCode||e.which;return 8===t||46===t?(this.value=this.value.substring(0,this.value.length-1),void this.updateOutput()):t>=48&&t<=57?(this.value+=String.fromCharCode(t),void this.updateOutput()):void 0}},{key:"moveCursorToEnd",value:function(e){if("number"===typeof e.selectionStart)e.selectionStart=e.selectionEnd=e.value.length;else if("undefined"!==typeof e.createTextRange){e.focus();var t=e.createTextRange();t.collapse(!1),t.select()}}},{key:"getLocale",value:function(){return void 0!==navigator.languages?navigator.languages[0]:navigator.language?navigator.language:"en"}}]),e}(),O=a["a"].extend({mounted:function(){new S({container:document.querySelector("#example"),value:86753.09,onChange:function(e){console.log(e)}})}}),E=O,k=(n("2fc2"),Object(u["a"])(E,g,b,!1,null,null,null));k.options.__file="basic.vue";var j=k.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue"},[n("fpmoney",{attrs:{id:"example",value:"85555",onChange:e.change}}),e._m(0)],1)},L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("    "),n("code",{staticClass:"language-html"},[e._v('\n      <fpmoney value="85555" :onChange="change" />\n    ')]),e._v("\n  ")])}],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"fpmoney"})},U=[],F=(n("c5f6"),{name:"fp-money",props:{value:[String,Number],locale:String,onChange:Function},data:function(){return{fpmoney:null}},mounted:function(){this.init()},updated:function(){this.fpmoney&&this.fpmoney.destroy(),this.init()},methods:{init:function(){var e={container:this.$refs.fpmoney};this.value&&(e.value=this.value),this.locale&&(e.locale=this.locale),this.onChange&&(e.onChange=this.onChange),this.fpmoney=new S(e)}}}),T=F,$=Object(u["a"])(T,P,U,!1,null,null,null);$.options.__file="component.vue";var I=$.exports,M=a["a"].extend({components:{fpmoney:I},methods:{change:function(e){console.log(e)}}}),H=M,N=(n("d57a"),Object(u["a"])(H,D,L,!1,null,null,null));N.options.__file="vue.vue";var V=N.exports;a["a"].use(y["a"]);var R=new y["a"]({mode:"history",routes:[{path:"/",component:j},{path:"/vue",component:V}]}),q=n("c197"),A=n.n(q),B=n("6f35"),G=n.n(B);n("e391"),n("7362");new G.a({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),a["a"].mixin({updated:function(){A.a.highlightAll()}}),a["a"].config.productionTip=!1,new a["a"]({router:R,render:function(e){return e(m)}}).$mount("#app")},d57a:function(e,t,n){"use strict";var a=n("bc8c"),i=n.n(a);i.a},dc22:function(e,t,n){},e637:function(e,t,n){},eefe:function(e,t,n){}});
//# sourceMappingURL=app.js.map