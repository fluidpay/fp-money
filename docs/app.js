(function(e){function t(t){for(var a,o,l=t[0],c=t[1],s=t[2],p=0,h=[];p<l.length;p++)o=l[p],i[o]&&h.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"078e":function(e,t,n){"use strict";var a=n("b13f"),i=n.n(a);i.a},"0df1":function(e,t,n){"use strict";var a=n("e637"),i=n.n(a);i.a},4286:function(e,t,n){},8325:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},b13f:function(e,t,n){},bc8c:function(e,t,n){},c30d:function(e,t,n){"use strict";var a=n("4286"),i=n.n(a);i.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d"),n("dc22");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"bluebar"}),n("div",{staticClass:"greenbar"}),n("div",{staticClass:"orangebar"}),n("div",{staticClass:"app"},[n("Header"),n("transition",{attrs:{mode:"out-in",name:"slide-left"}},[n("router-view")],1)],1)])},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[e._v("FluidPay Money Formatter")]),a("div",{staticClass:"menu"},[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),a("router-link",{attrs:{to:"/vue"}},[e._v("Vue")]),a("a",{attrs:{target:"_blank",href:"http://github.com/fluidpay/fp-money"}},[a("img",{attrs:{height:"20",alt:"Github Logomark",src:n("8325")}})])],1)])},l=[],c=a["a"].extend({}),s=c,u=(n("0df1"),n("2877")),p=Object(u["a"])(s,o,l,!1,null,null,null);p.options.__file="header.vue";var h=p.exports,f=a["a"].extend({name:"app",components:{Header:h}}),v=f,d=(n("c30d"),Object(u["a"])(v,i,r,!1,null,null,null));d.options.__file="App.vue";var m=d.exports,y=n("8c4f"),g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"basic"},[n("div",{attrs:{id:"example"}}),n("pre",[e._v("    "),n("code",{staticClass:"language-bash"},[e._v("\n      npm install fp-money\n    ")]),e._v("\n  ")]),n("pre",[e._v("    "),n("code",{staticClass:"language-html"},[e._v('\n      <div id="example"></div>\n    ')]),e._v("\n  ")]),n("pre",[e._v("    "),n("code",{staticClass:"language-javascript"},[e._v("\n      import FPMoney from 'fp-money'\n      import 'fp-money/dist/fp-money.css'\n\n      new FPMoney({\n        container: document.querySelector('#example'),\n        // value: 86753.09, // optional - default ''\n        // currency: 'usd', // optional - default 'usd'\n        // locale: 'en-us', // optional - default navigator.language\n        // showSelection: true, // optional - default true\n        onChange: (values) => {\n          console.log(values)\n          // {\n          // value: \"8675309\",\n          // display: \"$86,753.09\",\n          // format: \"86753.09\",\n          // currency: \"USD\",\n          // locale: \"en-US\"\n          // }\n        }\n      })\n    ")]),e._v("\n  ")])])}],A=(n("28a5"),n("ac6a"),n("a481"),n("c665")),w=n("aa9a"),E=(n("6b54"),{USD:{symbol:"$",fraction:2},EUR:{symbol:"€",fraction:2},GBP:{symbol:"£",fraction:2},INR:{symbol:"₹",fraction:2},CRC:{symbol:"₡",fraction:2},VND:{symbol:"₫",fraction:0},HUF:{symbol:"Ft",fraction:2},ILS:{symbol:"₪",fraction:2},CNY:{symbol:"¥",fraction:2},KRW:{symbol:"₩",fraction:0},NGN:{symbol:"₦",fraction:2},PYG:{symbol:"₲",fraction:0},PHP:{symbol:"₱",fraction:2},PLN:{symbol:"zł",fraction:2},THB:{symbol:"฿",fraction:2},UAH:{symbol:"₴",fraction:2},JPY:{symbol:"¥",fraction:0}});function C(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=e.toString(),a="1",i=0;i<t;i++)a+="0";var r=parseInt(a,10),o=(parseFloat(n)*r).toString();return parseInt(o,10).toString()}var S=function(){function e(t){var n;Object(A["a"])(this,e),this.value="",this.display="",this.format="",this.currency="USD",this.locale=this.getLocale(),this.showSelection=!0,this.validate(t),n="string"===typeof t.container?document.querySelector(t.container):t.container,this.container=n,t.currency&&(this.currency=t.currency.toUpperCase()),t.locale&&(this.locale=t.locale),t.value&&(this.value=C(t.value,E[this.currency].fraction)),void 0!==t.showSelection&&(this.showSelection=t.showSelection),this.onChange=t.onChange?this.onChange=t.onChange:function(){},this.currencyDiv=document.createElement("div"),this.input=document.createElement("input"),this.select=document.createElement("select"),this.render(),this.setCurrency(this.currency)}return Object(w["a"])(e,[{key:"setCurrency",value:function(e){e=e.toUpperCase(),this.currency=e,this.currencyDiv.innerHTML=E[e].symbol;for(var t=E[e].fraction,n="",a=0;a<t;a++)n+="0";this.input.placeholder="0"+(0===t?"":"."+n),this.select.value=e,this.updateOutput()}},{key:"setLocale",value:function(e){this.locale=e,this.updateOutput()}},{key:"displayValue",value:function(){var e=E[this.currency.toUpperCase()].fraction,t=new Intl.NumberFormat(this.locale,{localeMatcher:"best fit",style:"currency",currency:this.currency.toUpperCase(),currencyDisplay:"symbol",minimumFractionDigits:e,maximumFractionDigits:e});return t.format(parseFloat(this.formatValue()))}},{key:"formatValue",value:function(){var e=""===this.value?"0":this.value,t=E[this.currency.toUpperCase()].fraction;if(0===t)return e;for(var n="1",a=0;a<t;a++)n+="0";var i=parseInt(n,10);return(parseInt(e,10)/i).toFixed(t)}},{key:"destroy",value:function(){this.container.innerHTML=""}},{key:"validate",value:function(e){var t;if(t="string"===typeof e.container?document.querySelector(e.container):e.container,!t)throw new Error("Could not find container")}},{key:"updateInputDisplay",value:function(){if(""!==this.value){var e=this.display.replace(E[this.currency.toUpperCase()].symbol,""),t=this.currency;t.split("").forEach(function(n,a){e=e.replace(t.substring(0,t.length-a),"")}),e=e.trim(),this.input.value=e}else this.input.value=""}},{key:"updateOutput",value:function(){this.value=""===this.value?"":parseInt(this.value,10).toString(),this.format=this.formatValue(),this.display=this.displayValue(),this.updateInputDisplay(),this.onChange({value:this.value,display:this.display,format:this.format,currency:this.currency,locale:this.locale})}},{key:"render",value:function(){var e=this;for(var t in this.container.classList.add("fpm"),this.currencyDiv.classList.add("fpm-currency"),this.input.classList.add("fpm-value"),this.select.classList.add("fpm-select"),this.input.addEventListener("keydown",function(t){e.inputKeydown(t)},!1),this.input.addEventListener("click",function(t){e.input.focus(),e.moveCursorToEnd(e.input)},!1),E)if(E.hasOwnProperty(t)){var n=document.createElement("option");n.value=t,n.text=t.toUpperCase(),this.select.appendChild(n)}this.select.addEventListener("change",function(){e.setCurrency(e.select.value)}),this.container.appendChild(this.currencyDiv),this.container.appendChild(this.input),this.showSelection&&this.container.appendChild(this.select)}},{key:"inputKeydown",value:function(e){e.preventDefault();var t=e.keyCode||e.which;return 8===t||46===t?(this.value=this.value.substring(0,this.value.length-1),void this.updateOutput()):t>=48&&t<=57?(this.value+=String.fromCharCode(t),void this.updateOutput()):void 0}},{key:"moveCursorToEnd",value:function(e){if("number"===typeof e.selectionStart)e.selectionStart=e.selectionEnd=e.value.length;else if("undefined"!==typeof e.createTextRange){e.focus();var t=e.createTextRange();t.collapse(!1),t.select()}}},{key:"getLocale",value:function(){return void 0!==navigator.languages?navigator.languages[0]:navigator.language?navigator.language:"en"}}]),e}(),M=a["a"].extend({mounted:function(){new S({container:document.querySelector("#example"),value:86753.09,onChange:function(e){console.log(e)}})}}),I=M,D=(n("078e"),Object(u["a"])(I,g,b,!1,null,null,null));D.options.__file="home.vue";var k=D.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue"},[n("fpmoney",{attrs:{id:"example",value:"85555",onChange:e.change}}),e._m(0),e._m(1)],1)},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("    "),n("code",{staticClass:"language-javascript"},[e._v("\n      import fpmoney from 'fp-money/dist/fp-money-vue.js'\n\n      export default {\n        components: { fpmoney },\n        methods: {\n          change(values: Values) {\n            console.log(values)\n          }\n        }\n      }\n    ")]),e._v("\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("    "),n("code",{staticClass:"language-html"},[e._v('\n      <fpmoney value="85555" :onChange="change" />\n    ')]),e._v("\n  ")])}],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"fpmoney"})},B=[],x=(n("c5f6"),{name:"fp-money",props:{value:[String,Number],currency:String,locale:String,onChange:Function,showSelection:{type:Boolean,default:!0}},data:function(){return{fpmoney:null}},mounted:function(){this.init()},updated:function(){this.fpmoney&&this.fpmoney.destroy(),this.init()},methods:{init:function(){var e={container:this.$refs.fpmoney};this.value&&(e.value=this.value),this.currency&&(e.currency=this.currency),this.locale&&(e.locale=this.locale),e.showSelection=this.showSelection,this.onChange&&(e.onChange=this.onChange),this.fpmoney=new S(e)}}}),U=x,_=Object(u["a"])(U,T,B,!1,null,null,null);_.options.__file="component.vue";var Z=_.exports,J=a["a"].extend({components:{fpmoney:Z},methods:{change:function(e){console.log(e)}}}),O=J,N=(n("d57a"),Object(u["a"])(O,R,j,!1,null,null,null));N.options.__file="vue.vue";var L=N.exports;a["a"].use(y["a"]);var P=new y["a"]({mode:"history",routes:[{path:"/",component:k},{path:"/vue",component:L}]}),G=n("c197"),Y=n.n(G),W=n("6f35"),F=n.n(W);n("e391"),n("7362");new F.a({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),a["a"].mixin({updated:function(){Y.a.highlightAll()}}),a["a"].config.productionTip=!1,new a["a"]({router:P,render:function(e){return e(m)}}).$mount("#app")},d57a:function(e,t,n){"use strict";var a=n("bc8c"),i=n.n(a);i.a},dc22:function(e,t,n){},e637:function(e,t,n){}});
//# sourceMappingURL=app.js.map