// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("buffer"),require("process")):"function"==typeof define&&define.amd?define(["buffer","process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r(e.require$$0,e.require$$0$1)}(this,(function(e,r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function i(e){return"number"==typeof e}function o(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+o(i):o(i)+e,n&&(e="-"+e)),e}var u=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function c(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===f.call(e.specifier)?f.call(t):u.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var s=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,y=String.prototype.replace,b=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,m=/\.0$/,w=/\.0*e/,j=/(\..*[^0])0*e/;function E(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=y.call(t,j,"$1e"),t=y.call(t,w,"e"),t=y.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=y.call(t,b,"e+0$1"),t=y.call(t,v,"e-0$1"),e.alternate&&(t=y.call(t,d,"$1."),t=y.call(t,h,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===g.call(e.specifier)?g.call(t):p.call(t)}function T(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function V(e,r,t){var n=r-e.length;return n<0?e:e=t?e+T(n):T(n)+e}var _=String.fromCharCode,S=isNaN,A=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function B(e){var r,t,n,i,o,u,f,s,p;if(!A(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",f=1,s=0;s<e.length;s++)if(l(n=e[s]))u+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=V(n.arg,n.width,n.padRight)),u+=n.arg||"",f+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=x.exec(e);n;)(r=e.slice(i,x.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=x.lastIndex,n=x.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){return"string"==typeof e}function L(e){var r,t,n;if(!I(e))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return B.apply(null,t)}var P,$=Object.prototype,U=$.toString,M=$.__defineGetter__,N=$.__defineSetter__,R=$.__lookupGetter__,C=$.__lookupSetter__;P=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===U.call(e))throw new TypeError(L("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===U.call(t))throw new TypeError(L("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||C.call(e,r)?(n=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(e,r,t.get),a&&N&&N.call(e,r,t.set),e};var G=P;function Z(e,r,t){G(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var q=/./;function W(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"boolean"==typeof e}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return Y&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;function J(e,r){return null!=e&&H.call(e,r)}var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var ee=z()?function(e){var r,t,n;if(null==e)return D.call(e);t=e[Q],r=J(e,Q);try{e[Q]=void 0}catch(r){return D.call(e)}return n=D.call(e),r?e[Q]=t:delete e[Q],n}:function(e){return D.call(e)},re=Boolean,te=Boolean.prototype.toString;var ne=z();function ie(e){return"object"==typeof e&&(e instanceof re||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ee(e)))}function oe(e){return X(e)||ie(e)}function ae(){return new Function("return this;")()}W(oe,"isPrimitive",X),W(oe,"isObject",ie);var ue="object"==typeof self?self:null,fe="object"==typeof window?window:null,ce="object"==typeof global?global:null,le="object"==typeof globalThis?globalThis:null;function se(e){if(arguments.length){if(!X(e))throw new TypeError(L("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ae()}if(le)return le;if(ue)return ue;if(fe)return fe;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}var pe=se(),ge=pe.document&&pe.document.childNodes,ye=Int8Array;function be(){return/^\s*function\s*([^(]*)/i}var ve,de=/^\s*function\s*([^(]*)/i;W(be,"REGEXP",de),ve=Array.isArray?Array.isArray:function(e){return"[object Array]"===ee(e)};var he=ve;function me(e){return null!==e&&"object"==typeof e}var we=function(e){if("function"!=typeof e)throw new TypeError(L("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!he(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(me);function je(e){return me(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function Ee(e){var r,t,n;if(("Object"===(t=ee(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=de.exec(n.toString()))return r[1]}return je(e)?"Buffer":t}W(me,"isObjectLikeArray",we);var Te="function"==typeof q||"object"==typeof ye||"function"==typeof ge?function(e){return Ee(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Ee(e).toLowerCase():r};function Ve(e){return"function"===Te(e)}var _e="function"==typeof Buffer?Buffer:null;var Se,Ae=e.Buffer;Se=function(){var e,r;if("function"!=typeof _e)return!1;try{e=je(r="function"==typeof _e.from?_e.from([1,2,3,4]):new _e([1,2,3,4]))&&1===r[0]&&2===r[1]&&3===r[2]&&4===r[3]}catch(r){e=!1}return e}()?Ae:function(){throw new Error("not implemented")};var Oe=Se,Be=Ve(Oe.allocUnsafe);function xe(e){return"number"==typeof e}var ke=Number,Fe=ke.prototype.toString;var Ie=z();function Le(e){return"object"==typeof e&&(e instanceof ke||(Ie?function(e){try{return Fe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===ee(e)))}function Pe(e){return xe(e)||Le(e)}W(Pe,"isPrimitive",xe),W(Pe,"isObject",Le);var $e=Number.POSITIVE_INFINITY,Ue=ke.NEGATIVE_INFINITY,Me=Math.floor;function Ne(e){return Me(e)===e}function Re(e){return e<$e&&e>Ue&&Ne(e)}function Ce(e){return xe(e)&&Re(e)}function Ge(e){return Le(e)&&Re(e.valueOf())}function Ze(e){return Ce(e)||Ge(e)}function qe(e){return Ce(e)&&e>=0}function We(e){return Ge(e)&&e.valueOf()>=0}function Xe(e){return qe(e)||We(e)}W(Ze,"isPrimitive",Ce),W(Ze,"isObject",Ge),W(Xe,"isPrimitive",qe),W(Xe,"isObject",We);var Ye=Be?function(e){if(!Xe(e))throw new TypeError(L("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));return Oe.allocUnsafe(e)}:function(e){if(!Xe(e))throw new TypeError(L("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));return new Oe(e)},ze=Ve(Oe.from);function De(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Ne(e.length)&&e.length>=0&&e.length<=9007199254740991}var He=ze?function(e){if(!De(e))throw new TypeError(L("invalid argument. Must provide an array-like object. Value: `%s`.",e));return Oe.from(e)}:function(e){if(!De(e))throw new TypeError(L("invalid argument. Must provide an array-like object. Value: `%s`.",e));return new Oe(e)};var Je,Ke=Object,Qe=Object.getPrototypeOf;Je=Ve(Object.getPrototypeOf)?Qe:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===ee(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var er=Je;var rr=Object.prototype;function tr(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!he(e)}(e)&&(r=function(e){return null==e?null:(e=Ke(e),er(e))}(e),!r||!J(e,"constructor")&&J(r,"constructor")&&Ve(r.constructor)&&"[object Function]"===ee(r.constructor)&&J(r,"isPrototypeOf")&&Ve(r.isPrototypeOf)&&(r===rr||function(e){var r;for(r in e)if(!J(e,r))return!1;return!0}(e)))}function nr(e){return"string"==typeof e}var ir=String.prototype.valueOf;var or=z();function ar(e){return"object"==typeof e&&(e instanceof String||(or?function(e){try{return ir.call(e),!0}catch(e){return!1}}(e):"[object String]"===ee(e)))}function ur(e){return nr(e)||ar(e)}W(ur,"isPrimitive",nr),W(ur,"isObject",ar);var fr=Object.prototype.toString;var cr=new Function("try {return this === global;} catch ( err ) {return false;}")(),lr=r,sr=se(),pr=/node|io\.js/;var gr,yr,br="object"==typeof global&&global===sr&&sr===sr.global&&("[object global]"===ee(sr)||"[object Object]"===ee(sr))&&!0===cr&&"object"==typeof lr&&"[object process]"===(gr=lr,fr.call(gr))&&tr(lr.versions)&&nr(lr.versions.node)&&(void 0===lr.release||tr(lr.release)&&nr(lr.release.name)&&pr.test(lr.release.name)),vr=r.versions.node,dr=(yr=br?vr:null,yr?parseInt(yr.split(".")[0],10):-1),hr=Ve(Oe.from)&&dr>=5,mr="function"==typeof ArrayBuffer;function wr(e){return mr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===ee(e)}var jr="function"==typeof Uint8Array;var Er="function"==typeof Uint8Array?Uint8Array:null;var Tr,Vr="function"==typeof Uint8Array?Uint8Array:void 0;Tr=function(){var e,r;if("function"!=typeof Er)return!1;try{e=function(e){return jr&&e instanceof Uint8Array||"[object Uint8Array]"===ee(e)}(r=new Er(r=[1,3.14,-3.14,256,257]))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Vr:function(){throw new Error("not implemented")};var _r,Sr=Tr;_r=hr?function(e,r,t){var n,i;if(!wr(e))throw new TypeError(L("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",e));if(arguments.length>1){if(!qe(r))throw new TypeError(L("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(r>e.byteLength)throw new RangeError(L("invalid argument. Second argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",r));if(n=r,arguments.length>2){if(!qe(t))throw new TypeError(L("invalid argument. Last argument must be a nonnegative integer. Value: `%s`.",t));if(t>e.byteLength)throw new RangeError(L("invalid argument. Last argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",t));i=t}else i=e.byteLength-n}else n=0,i=e.byteLength;return 0===i&&dr<6?Oe.from([]):Oe.from(e,n,i)}:function(e,r,t){var n;if(!wr(e))throw new TypeError(L("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",e));if(arguments.length>1){if(!qe(r))throw new TypeError(L("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(r>e.byteLength)throw new RangeError(L("invalid argument. Second argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",r));if(arguments.length>2){if(!qe(t))throw new TypeError(L("invalid argument. Last argument must be a nonnegative integer. Value: `%s`.",t));if(t>e.byteLength)throw new RangeError(L("invalid argument. Last argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",t));n=t}else n=e.byteLength-r;return He(new Sr(e,r,n))}return dr<3?He(new Sr(e)):0===e.byteLength?new Oe([]):new Oe(e)};var Ar=_r;var Or,Br=Ve(Oe.from)?function(e){if(!je(e))throw new TypeError(L("invalid argument. Must provide a Buffer. Value: `%s`.",e));return Oe.from(e)}:function(e){if(!je(e))throw new TypeError(L("invalid argument. Must provide a Buffer. Value: `%s`.",e));return new Oe(e)};Or=Ve(Oe.from)?function(e,r){if(!nr(e))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!nr(r))throw new TypeError(L("invalid argument. Second argument must be a string. Value: `%s`.",r));return Oe.from(e,r)}return Oe.from(e,"utf8")}:function(e,r){if(!nr(e))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1){if(!nr(r))throw new TypeError(L("invalid argument. Second argument must be a string. Value: `%s`.",r));return new Oe(e,r)}return new Oe(e,"utf8")};var xr=Or;var kr={};return Z(kr,"allocUnsafe",Ye),Z(kr,"Buffer",Oe),Z(kr,"array2buffer",He),Z(kr,"arraybuffer2buffer",Ar),Z(kr,"copyBuffer",Br),Z(kr,"string2buffer",xr),Z(kr,"reviveBuffer",(function(e,r){return r&&"Buffer"===r.type&&he(r.data)?He(r.data):r})),Z(kr,"buffer2json",(function(e){var r,t;if(!je(e))throw new TypeError(L("invalid argument. Must provide a Buffer. Value: `%s`.",e));for((r={}).type="Buffer",r.data=[],t=0;t<e.length;t++)r.data.push(e[t]);return r})),kr}));
//# sourceMappingURL=index.js.map
