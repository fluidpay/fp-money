(function(e){function t(t){for(var a,o,c=t[0],s=t[1],l=t[2],p=0,v=[];p<c.length;p++)o=c[p],i[o]&&v.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(v.length)v.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"078e":function(e,t,n){"use strict";var a=n("250c"),i=n.n(a);i.a},"0df1":function(e,t,n){"use strict";var a=n("f6a3"),i=n.n(a);i.a},"250c":function(e,t,n){},"3eba":function(e,t,n){},7721:function(e,t,n){},"7ddf":function(e,t,n){},8325:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},"94b9":function(e,t,n){"use strict";var a=n("7ddf"),i=n.n(a);i.a},c30d:function(e,t,n){"use strict";var a=n("3eba"),i=n.n(a);i.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d"),n("dc22");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"bluebar"}),n("div",{staticClass:"greenbar"}),n("div",{staticClass:"orangebar"}),n("div",{staticClass:"app"},[n("Header"),n("transition",{attrs:{mode:"out-in",name:"slide-left"}},[n("router-view")],1)],1)])},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[e._v("FluidPay Money Formatter")]),a("div",{staticClass:"menu"},[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),a("router-link",{attrs:{to:"/functions"}},[e._v("Functions")]),a("router-link",{attrs:{to:"/vue"}},[e._v("Vue")]),a("a",{attrs:{target:"_blank",href:"http://github.com/fluidpay/fp-money"}},[a("img",{attrs:{height:"20",alt:"Github Logomark",src:n("8325")}})])],1)])},c=[],s=a["a"].extend({}),l=s,u=(n("0df1"),n("2877")),p=Object(u["a"])(l,o,c,!1,null,null,null);p.options.__file="header.vue";var v=p.exports,f=a["a"].extend({name:"app",components:{Header:v}}),h=f,d=(n("c30d"),Object(u["a"])(h,i,r,!1,null,null,null));d.options.__file="App.vue";var m=d.exports,y=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"basic"},[n("div",{attrs:{id:"example"}}),n("div",{staticClass:"outputs"},[e._v("\n    Value: "+e._s(e.value)),n("br"),e._v("\n    Format: "+e._s(e.format)),n("br"),e._v("\n    Display: "+e._s(e.display)),n("br"),e._v("\n    Currency: "+e._s(e.currency)+"\n  ")]),e._m(0),e._m(1),e._m(2)])},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("    "),n("code",{staticClass:"language-bash"},[e._v("\n      npm install fp-money\n    ")]),e._v("\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("    "),n("code",{staticClass:"language-html"},[e._v('\n      <div id="example"></div>\n    ')]),e._v("\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("    "),n("code",{staticClass:"language-javascript"},[e._v("\n      import FPMoney from 'fp-money'\n      import 'fp-money/dist/fp-money.css'\n\n      new FPMoney({\n        container: document.querySelector('#example'),\n        // value: 86753.09,     // optional - default ''\n        // currencies: Object   // optional - {USD: {symbol: '$', fraction:2}}\n        // currency: 'USD',     // optional - default 'USD'\n        // locale: 'en-us',     // optional - default navigator.language\n        // maxValue: 999,       // optional - default no limit\n        // showSelection: true, // optional - default true\n\n        onChange: (values) => {\n          console.log(values)\n          // {\n          // value: \"8675309\",\n          // format: \"86753.09\",\n          // display: \"$86,753.09\",\n          // currency: \"USD\",\n          // locale: \"en-US\"\n          // }\n        }\n      })\n    ")]),e._v("\n  ")])}],_=(n("28a5"),n("a481"),n("6b54"),n("ac6a"),n("456d"),n("d4ec")),S=n("bee2"),A={USD:{symbol:"$",fraction:2},EUR:{symbol:"€",fraction:2},GBP:{symbol:"£",fraction:2},INR:{symbol:"₹",fraction:2},CRC:{symbol:"₡",fraction:2},VND:{symbol:"₫",fraction:0},HUF:{symbol:"Ft",fraction:2},ILS:{symbol:"₪",fraction:2},CNY:{symbol:"¥",fraction:2},KRW:{symbol:"₩",fraction:0},NGN:{symbol:"₦",fraction:2},PYG:{symbol:"₲",fraction:0},PHP:{symbol:"₱",fraction:2},PLN:{symbol:"zł",fraction:2},THB:{symbol:"฿",fraction:2},UAH:{symbol:"₴",fraction:2},JPY:{symbol:"¥",fraction:0}};function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;e=e.toString(),""===e&&(e="0");for(var n="1",a=0;a<t;a++)n+="0";var i=parseInt(n,10);return-1!==e.indexOf(".")&&(e=(parseFloat(e)*i).toString()),0===t?parseInt(e,10):parseFloat((parseInt(e,10)/i).toFixed(t))}function w(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=e.toString(),a="1",i=0;i<t;i++)a+="0";var r=parseInt(a,10),o=Math.round(parseFloat(n)*r).toString();return parseInt(o,10)}function E(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:x(),i=new Intl.NumberFormat(a,{localeMatcher:"best fit",style:"currency",currency:t.toUpperCase(),currencyDisplay:"symbol",minimumFractionDigits:n,maximumFractionDigits:n});return i.format(C(e,n))}function x(){return void 0!==navigator.languages?navigator.languages[0]:navigator.language?navigator.language:"en-US"}function I(e){return-1!==e.indexOf("-")}var O=function(){function e(t){var n;if(Object(_["a"])(this,e),this.isNegative=!1,this.value="",this.display="",this.format="",this.currencies=JSON.parse(JSON.stringify(A)),this.currency="",this.locale=x(),this.valueFormat="float",this.maxValue=0,this.showSelection=!0,this.validate(t),n="string"===typeof t.container?document.querySelector(t.container):t.container,this.container=n,t.currencies&&(this.currencies=t.currencies),t.currency?this.currency=t.currency.toUpperCase():this.currency=Object.keys(this.currencies)[0],t.locale&&(this.locale=t.locale),t.valueFormat&&(this.valueFormat=t.valueFormat),t.value){var a=t.value;this.isNegative=I(a.toString()),"int"===t.valueFormat&&(a=C(a,this.currencies[this.currency].fraction)),this.value=w(a,this.currencies[this.currency].fraction).toString()}t.maxValue&&(this.maxValue=w(t.maxValue,this.currencies[this.currency].fraction)),void 0!==t.showSelection&&(this.showSelection=t.showSelection),this.onChange=t.onChange?this.onChange=t.onChange:function(){},this.currencyDiv=document.createElement("div"),this.input=document.createElement("input"),this.select=document.createElement("select"),this.render(),this.setCurrency(this.currency)}return Object(S["a"])(e,[{key:"setValue",value:function(e){var t=this.currencies[this.currency].fraction;this.value.toString()!==("float"===this.valueFormat?w(e,t).toString():e.toString())&&(this.isNegative=I(e.toString()),"int"===this.format&&(e=C(e,t)),this.value=w(e,t).toString(),this.updateOutput())}},{key:"setCurrency",value:function(e){e=e.toUpperCase(),this.currency=e,this.currencyDiv.innerHTML=this.currencies[e].symbol;for(var t=this.currencies[e].fraction,n="",a=0;a<t;a++)n+="0";this.input.placeholder="0"+(0===t?"":"."+n),this.select.value=e,this.updateOutput()}},{key:"setLocale",value:function(e){this.locale=e,this.updateOutput()}},{key:"destroy",value:function(){this.container.innerHTML=""}},{key:"validate",value:function(e){var t;if(t="string"===typeof e.container?document.querySelector(e.container):e.container,!t)throw new Error("Could not find container")}},{key:"updateOutput",value:function(){if(""!==this.value){var e=parseInt(this.value,10);0!==this.maxValue&&e>this.maxValue&&(e=this.maxValue),this.value=e.toString()}this.isNegative?(this.value="-"+this.value.replace("-",""),"-"===this.value&&(this.value="")):this.value=this.value.replace("-",""),this.format=C(this.value,this.currencies[this.currency].fraction).toFixed(this.currencies[this.currency].fraction),this.display=E(this.value,this.currency,this.currencies[this.currency].fraction,this.locale),this.updateInputDisplay(),this.onChange({value:this.value,display:this.display,format:this.format,currency:this.currency,locale:this.locale})}},{key:"updateInputDisplay",value:function(){if(""!==this.value){var e=this.display.replace(this.currencies[this.currency.toUpperCase()].symbol,""),t=this.currency;e=e.replace(t,""),t.split("").forEach(function(n,a){e=e.replace(t.substring(0,t.length-a),"")}),e=e.trim(),this.isNegative&&(e="-"+e.replace("-","")),this.input.value=e}else this.input.value=""}},{key:"render",value:function(){var e=this;for(var t in this.container.classList.add("fpm"),this.currencyDiv.classList.add("fpm-currency"),this.input.classList.add("fpm-value"),this.select.classList.add("fpm-select"),this.input.addEventListener("keydown",function(t){e.inputKeydown(t)},!1),this.input.addEventListener("click",function(t){e.input.focus(),e.moveCursorToEnd(e.input)},!1),this.currencies)if(this.currencies.hasOwnProperty(t)){var n=document.createElement("option");n.value=t,n.text=t.toUpperCase(),this.select.appendChild(n)}this.select.addEventListener("change",function(){e.setCurrency(e.select.value)}),this.container.appendChild(this.currencyDiv),this.container.appendChild(this.input),this.showSelection&&this.container.appendChild(this.select)}},{key:"inputKeydown",value:function(e){var t=e.keyCode||e.which,n=e.shiftKey;8===t||46===t?(e.preventDefault(),this.value=this.value.substring(0,this.value.length-1),"-"===this.value&&(this.value=""),this.updateOutput()):t>=48&&t<=57||t>=96&&t<=105?(e.preventDefault(),this.value+=e.key,this.updateOutput()):9===t||13===t||(107===t||n&&187===t?(e.preventDefault(),this.isNegative=!1,this.updateOutput()):109===t||189===t?(e.preventDefault(),this.isNegative=!0,this.updateOutput()):e.preventDefault())}},{key:"moveCursorToEnd",value:function(e){if("number"===typeof e.selectionStart)e.selectionStart=e.selectionEnd=e.value.length;else if("undefined"!==typeof e.createTextRange){e.focus();var t=e.createTextRange();t.collapse(!1),t.select()}}}]),e}(),D=a["a"].extend({data:function(){return{value:"",format:"",display:"",currency:""}},mounted:function(){var e=this;new O({container:document.querySelector("#example"),value:86753.09,onChange:function(t){console.log(t),e.value=t.value,e.format=t.format,e.display=t.display,e.currency=t.currency}})}}),M=D,T=(n("078e"),Object(u["a"])(M,g,b,!1,null,null,null));T.options.__file="home.vue";var j=T.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main functions"},[e._m(0),n("div",{staticClass:"section"},[n("div",{staticClass:"item"},[e._v("fractionToInt(value, fraction): 86753.09 - "+e._s(e.fractionToInt(86753.09,2)))]),n("div",{staticClass:"item"},[e._v("intToFraction(value, fraction): 8675309 - "+e._s(e.intToFraction(8675309,2)))]),n("div",{staticClass:"item"},[e._v("displayValue(value, currency, fraction, locale): 86753.09 - "+e._s(e.displayValue(86753.09,"usd",2,"en-us")))]),n("div",{staticClass:"item"},[e._v("getLocale(): "+e._s(e.getLocale()))])])])},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("    "),n("code",{staticClass:"language-javascript"},[e._v("\n      import {\n        currencies, // Array of object currencies\n        fractionToInt, \n        intToFraction, \n        displayValue, \n        getLocale // Will output a string based upon your local language\n      } from 'fp-money'\n    ")]),e._v("\n  ")])}],N=a["a"].extend({data:function(){return{}},methods:{fractionToInt:function(e,t){return w(e,t)},intToFraction:function(e,t){return C(e,t)},displayValue:function(e,t,n,a){return E(e,t,n,a)},getLocale:function(){return x()}}}),R=N,B=(n("94b9"),Object(u["a"])(R,F,k,!1,null,null,null));B.options.__file="functions.vue";var U=B.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue"},[n("fpmoney",{attrs:{id:"example",value:e.int,format:e.format,display:e.display,currency:e.currency,locale:e.locale,onChange:e.change},on:{"update:value":function(t){e.int=t},"update:format":function(t){e.format=t},"update:display":function(t){e.display=t},"update:currency":function(t){e.currency=t},"update:locale":function(t){e.locale=t}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("div",{staticClass:"outputs"},[e._v("\n    Value: "+e._s(e.int)),n("br"),e._v("\n    Format: "+e._s(e.format)),n("br"),e._v("\n    Display: "+e._s(e.display)),n("br"),e._v("\n    Currency: "+e._s(e.currency)+"\n  ")]),e._m(0),e._m(1)],1)},Z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("    "),n("code",{staticClass:"language-javascript"},[e._v("\n      import fpmoney from 'fp-money/dist/fp-money-vue.js'\n\n      export default {\n        components: { fpmoney },\n        data() {\n          return {\n            value: 86753.09,\n            int: '',\n            format: '',\n            display: '',\n            currency: '',\n            locale: 'en-us'\n          }\n        },\n        methods: {\n          change(values) {\n            console.log(values)\n          }\n        }\n      }\n    ")]),e._v("\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("    "),n("code",{staticClass:"language-html"},[e._v('\n      <fpmoney id="example" \n        v-model="value" \n        :value.sync="int" <-- Optional\n        :format.sync="format" <-- Optional\n        :display.sync="display" <-- Optional\n        :currency.sync="currency" <-- Optional\n        :locale="locale" <-- Optional\n        valueFormat="float | int" <-- Optional - default float\n        :onChange="change" <-- Optional \n        :showSelection="true" <-- Optional />\n    ')]),e._v("\n  ")])}],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"fpmoney"})},P=[],V=(n("c5f6"),{name:"fp-money",props:{value:[String,Number],currencies:Object,currency:String,locale:String,maxValue:Number,onChange:Function,valueFormat:String,showSelection:{type:Boolean,default:!0}},data:function(){return{fpmoney:null,values:{value:"",format:"",display:"",currency:"",locale:""}}},mounted:function(){this.init()},updated:function(){this.fpmoney&&this.fpmoney.destroy(),this.init()},watch:{value:function(e,t){e.toString()!==t.toString()&&this.fpmoney.setValue(e)},currency:function(e,t){this.fpmoney.setCurrency(e)},locale:function(e,t){this.fpmoney.setLocale(e)}},methods:{init:function(){var e=this,t={container:this.$refs.fpmoney,onChange:function(t){e.values=t,e.$emit("input","int"===e.valueFormat?e.values.value:e.values.format),e.$emit("update:value",e.values.value),e.$emit("update:format",e.values.format),e.$emit("update:display",e.values.display),e.$emit("update:currency",e.values.currency),e.$emit("update:locale",e.values.locale),e.onChange&&e.onChange(t)}};this.currencies?t.currencies=this.currencies:t.currencies=A,this.currency?t.currency=this.currency:t.currency=Object.keys(t.currencies)[0],this.valueFormat&&(t.valueFormat=this.valueFormat),this.value&&(t.value=this.value),this.locale&&(t.locale=this.locale),this.maxValue&&(t.maxValue=this.maxValue),t.showSelection=this.showSelection,this.fpmoney=new O(t)}}}),G=V,W=Object(u["a"])(G,L,P,!1,null,null,null);W.options.__file="component.vue";var Y=W.exports,H=n("9e67"),Q=n.n(H),X=new Q.a,z=a["a"].extend({components:{fpmoney:Y},data:function(){return{value:86753.09,int:"",format:"",display:"",currency:"",locale:"en-US"}},mounted:function(){var e=this;setInterval(function(){e.value=X.integer({min:1e3,max:1e5})},1e4)},methods:{change:function(e){console.log(e)}}}),$=z,K=(n("d57a"),Object(u["a"])($,J,Z,!1,null,null,null));K.options.__file="vue.vue";var q=K.exports;a["a"].use(y["a"]);var ee=new y["a"]({mode:"history",routes:[{path:"/",component:j},{path:"/functions",component:U},{path:"/vue",component:q}]}),te=n("c197"),ne=n.n(te),ae=n("6f35"),ie=n.n(ae);n("e391"),n("7362");new ie.a({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),a["a"].mixin({updated:function(){ne.a.highlightAll()}}),a["a"].config.productionTip=!1,new a["a"]({router:ee,render:function(e){return e(m)}}).$mount("#app")},d57a:function(e,t,n){"use strict";var a=n("7721"),i=n.n(a);i.a},dc22:function(e,t,n){},f6a3:function(e,t,n){}});
//# sourceMappingURL=app.js.map