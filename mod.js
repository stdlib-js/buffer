// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return t({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty;var i=function(r){return"number"==typeof r};function o(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}var a=function(r,t,e){var n=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+o(i):o(i)+r,n&&(r="-"+r)),r},u=i,f=a,s=String.prototype.toLowerCase,c=String.prototype.toUpperCase;var h=function(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!u(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=f(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=f(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===c.call(r.specifier)?c.call(e):s.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e},l=i,p=Math.abs,g=String.prototype.toLowerCase,y=String.prototype.toUpperCase,v=String.prototype.replace,w=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,m=/^(\d+)e/,E=/\.0$/,_=/\.0*e/,A=/(\..*[^0])0*e/;var T=function(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!l(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=v.call(e,A,"$1e"),e=v.call(e,_,"e"),e=v.call(e,E,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=v.call(e,w,"e+0$1"),e=v.call(e,d,"e-0$1"),r.alternate&&(e=v.call(e,b,"$1."),e=v.call(e,m,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===y.call(r.specifier)?y.call(e):g.call(e)},P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}function S(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var B=h,U=T,O=function(r){var t,e,n,i;for(e=[],i=0,n=P.exec(r);n;)(t=r.slice(i,P.lastIndex-n[0].length)).length&&e.push(t),e.push(R(n)),i=P.lastIndex,n=P.exec(r);return(t=r.slice(i)).length&&e.push(t),e},I=function(r,t,e){var n=t-r.length;return n<0?r:r=e?r+S(n):S(n)+r},j=a,L=function(r){return"string"==typeof r},Y=String.fromCharCode,x=isNaN;var M=function r(t){var e,n,i,o,a,u,f,s,c;if(!L(t))throw new TypeError(r("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=O(t),u="",f=1,s=0;s<e.length;s++)if(i=e[s],L(i))u+=i;else{for(i.mapping&&(f=i.mapping),n=i.flags,c=0;c<n.length;c++)switch(o=n.charAt(c)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=n.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===i.width){if(i.width=parseInt(arguments[f],10),f+=1,x(i.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if("*"===i.precision&&i.hasPeriod){if(i.precision=parseInt(arguments[f],10),f+=1,x(i.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,i.hasPeriod=!1)}switch(i.arg=arguments[f],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":i.hasPeriod&&(i.padZeros=!1),i.arg=B(i);break;case"s":i.maxWidth=i.hasPeriod?i.precision:-1;break;case"c":if(!x(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=x(a)?String(i.arg):Y(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":i.hasPeriod||(i.precision=6),i.arg=U(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=j(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=I(i.arg,i.width,i.padRight)),u+=i.arg||"",f+=1}return u},k=M,C=k,V=Object.prototype,N=V.toString,D=V.__defineGetter__,F=V.__defineSetter__,z=V.__lookupGetter__,$=V.__lookupSetter__;var q,G=function(r,t,e){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(z.call(r,t)||$.call(r,t)?(n=r.__proto__,r.__proto__=V,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&D&&D.call(r,t,e.get),a&&F&&F.call(r,t,e.set),r},Z=n,X=G,W=(q=e()?Z:X,q);var J=function(r,t,e){W(r,t,{configurable:!1,enumerable:!0,writable:!1,value:e})},H=J,K=/./,Q=q;var rr=function(r,t,e){Q(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},tr=rr;var er=function(r){return"boolean"==typeof r};var nr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var ir=function(){return nr&&"symbol"==typeof Symbol.toStringTag},or=Object.prototype.toString,ar=or;var ur=function(r){return ar.call(r)},fr=Object.prototype.hasOwnProperty;var sr=function(r,t){return null!=r&&fr.call(r,t)},cr="function"==typeof Symbol?Symbol.toStringTag:"",hr=sr,lr=cr,pr=or;var gr=ur,yr=function(r){var t,e,n;if(null==r)return pr.call(r);e=r[lr],t=hr(r,lr);try{r[lr]=void 0}catch(t){return pr.call(r)}return n=pr.call(r),t?r[lr]=e:delete r[lr],n},vr=ir()?yr:gr,wr=Boolean.prototype.toString;var dr=vr,br=function(r){try{return wr.call(r),!0}catch(r){return!1}},mr=ir();var Er=function(r){return"object"==typeof r&&(r instanceof Boolean||(mr?br(r):"[object Boolean]"===dr(r)))},_r=er,Ar=Er;var Tr=tr,Pr=function(r){return _r(r)||Ar(r)},Rr=Er;Tr(Pr,"isPrimitive",er),Tr(Pr,"isObject",Rr);var Sr="object"==typeof self?self:null,Br="object"==typeof window?window:null,Ur="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Or=Pr.isPrimitive,Ir=k,jr=function(){return new Function("return this;")()},Lr=Sr,Yr=Br,xr=r(Object.freeze({__proto__:null}));var Mr=function(r){if(arguments.length){if(!Or(r))throw new TypeError(Ir("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return jr()}if(Lr)return Lr;if(Yr)return Yr;if(xr)return xr;throw new Error("unexpected error. Unable to resolve global object.")},kr=Mr(),Cr=kr.document&&kr.document.childNodes,Vr=Int8Array,Nr=K,Dr=Cr,Fr=Vr;var zr=function(){return"function"==typeof Nr||"object"==typeof Fr||"function"==typeof Dr};var $r=function(){return/^\s*function\s*([^(]*)/i},qr=$r;tr(qr,"REGEXP",$r());var Gr=qr,Zr=vr;var Xr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Zr(r)},Wr=Xr,Jr=k;var Hr=function(r){return null!==r&&"object"==typeof r};tr(Hr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Jr("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!Wr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Hr));var Kr=Hr;var Qr=function(r){return Kr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))},rt=vr,tt=Gr.REGEXP,et=Qr;var nt=function(r){var t,e,n;if(("Object"===(e=rt(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=tt.exec(n.toString()))return t[1]}return et(r)?"Buffer":e},it=nt;var ot=nt;var at=function(r){var t;return null===r?"null":"object"===(t=typeof r)?it(r).toLowerCase():t},ut=function(r){return ot(r).toLowerCase()},ft=zr()?ut:at;var st=function(r){return"function"===ft(r)},ct=[],ht=[],lt="undefined"!=typeof Uint8Array?Uint8Array:Array,pt=!1;function gt(){pt=!0;for(var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=0,e=r.length;t<e;++t)ct[t]=r[t],ht[r.charCodeAt(t)]=t;ht["-".charCodeAt(0)]=62,ht["_".charCodeAt(0)]=63}function yt(r,t,e){for(var n,i,o=[],a=t;a<e;a+=3)n=(r[a]<<16)+(r[a+1]<<8)+r[a+2],o.push(ct[(i=n)>>18&63]+ct[i>>12&63]+ct[i>>6&63]+ct[63&i]);return o.join("")}function vt(r){var t;pt||gt();for(var e=r.length,n=e%3,i="",o=[],a=16383,u=0,f=e-n;u<f;u+=a)o.push(yt(r,u,u+a>f?f:u+a));return 1===n?(t=r[e-1],i+=ct[t>>2],i+=ct[t<<4&63],i+="=="):2===n&&(t=(r[e-2]<<8)+r[e-1],i+=ct[t>>10],i+=ct[t>>4&63],i+=ct[t<<2&63],i+="="),o.push(i),o.join("")}function wt(r,t,e,n,i){var o,a,u=8*i-n-1,f=(1<<u)-1,s=f>>1,c=-7,h=e?i-1:0,l=e?-1:1,p=r[t+h];for(h+=l,o=p&(1<<-c)-1,p>>=-c,c+=u;c>0;o=256*o+r[t+h],h+=l,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=n;c>0;a=256*a+r[t+h],h+=l,c-=8);if(0===o)o=1-s;else{if(o===f)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),o-=s}return(p?-1:1)*a*Math.pow(2,o-n)}function dt(r,t,e,n,i,o){var a,u,f,s=8*o-i-1,c=(1<<s)-1,h=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,y=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(u=isNaN(t)?1:0,a=c):(a=Math.floor(Math.log(t)/Math.LN2),t*(f=Math.pow(2,-a))<1&&(a--,f*=2),(t+=a+h>=1?l/f:l*Math.pow(2,1-h))*f>=2&&(a++,f/=2),a+h>=c?(u=0,a=c):a+h>=1?(u=(t*f-1)*Math.pow(2,i),a+=h):(u=t*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;r[e+p]=255&u,p+=g,u/=256,i-=8);for(a=a<<i|u,s+=i;s>0;r[e+p]=255&a,p+=g,a/=256,s-=8);r[e+p-g]|=128*y}var bt={}.toString,mt=Array.isArray||function(r){return"[object Array]"==bt.call(r)};Tt.TYPED_ARRAY_SUPPORT=void 0===Ur.TYPED_ARRAY_SUPPORT||Ur.TYPED_ARRAY_SUPPORT;var Et=_t();function _t(){return Tt.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function At(r,t){if(_t()<t)throw new RangeError("Invalid typed array length");return Tt.TYPED_ARRAY_SUPPORT?(r=new Uint8Array(t)).__proto__=Tt.prototype:(null===r&&(r=new Tt(t)),r.length=t),r}function Tt(r,t,e){if(!(Tt.TYPED_ARRAY_SUPPORT||this instanceof Tt))return new Tt(r,t,e);if("number"==typeof r){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return St(this,r)}return Pt(this,r,t,e)}function Pt(r,t,e,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(r,t,e,n){if(t.byteLength,e<0||t.byteLength<e)throw new RangeError("'offset' is out of bounds");if(t.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");t=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n);Tt.TYPED_ARRAY_SUPPORT?(r=t).__proto__=Tt.prototype:r=Bt(r,t);return r}(r,t,e,n):"string"==typeof t?function(r,t,e){"string"==typeof e&&""!==e||(e="utf8");if(!Tt.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|It(t,e),i=(r=At(r,n)).write(t,e);i!==n&&(r=r.slice(0,i));return r}(r,t,e):function(r,t){if(Ot(t)){var e=0|Ut(t.length);return 0===(r=At(r,e)).length||t.copy(r,0,0,e),r}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(n=t.length)!=n?At(r,0):Bt(r,t);if("Buffer"===t.type&&mt(t.data))return Bt(r,t.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(r,t)}function Rt(r){if("number"!=typeof r)throw new TypeError('"size" argument must be a number');if(r<0)throw new RangeError('"size" argument must not be negative')}function St(r,t){if(Rt(t),r=At(r,t<0?0:0|Ut(t)),!Tt.TYPED_ARRAY_SUPPORT)for(var e=0;e<t;++e)r[e]=0;return r}function Bt(r,t){var e=t.length<0?0:0|Ut(t.length);r=At(r,e);for(var n=0;n<e;n+=1)r[n]=255&t[n];return r}function Ut(r){if(r>=_t())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+_t().toString(16)+" bytes");return 0|r}function Ot(r){return!(null==r||!r._isBuffer)}function It(r,t){if(Ot(r))return r.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(r)||r instanceof ArrayBuffer))return r.byteLength;"string"!=typeof r&&(r=""+r);var e=r.length;if(0===e)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return ne(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return ie(r).length;default:if(n)return ne(r).length;t=(""+t).toLowerCase(),n=!0}}function jt(r,t,e){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(t>>>=0))return"";for(r||(r="utf8");;)switch(r){case"hex":return Gt(this,t,e);case"utf8":case"utf-8":return zt(this,t,e);case"ascii":return $t(this,t,e);case"latin1":case"binary":return qt(this,t,e);case"base64":return Ft(this,t,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Zt(this,t,e);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}function Lt(r,t,e){var n=r[t];r[t]=r[e],r[e]=n}function Yt(r,t,e,n,i){if(0===r.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:r.length-1),e<0&&(e=r.length+e),e>=r.length){if(i)return-1;e=r.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof t&&(t=Tt.from(t,n)),Ot(t))return 0===t.length?-1:xt(r,t,e,n,i);if("number"==typeof t)return t&=255,Tt.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(r,t,e):Uint8Array.prototype.lastIndexOf.call(r,t,e):xt(r,[t],e,n,i);throw new TypeError("val must be string, number or Buffer")}function xt(r,t,e,n,i){var o,a=1,u=r.length,f=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(r.length<2||t.length<2)return-1;a=2,u/=2,f/=2,e/=2}function s(r,t){return 1===a?r[t]:r.readUInt16BE(t*a)}if(i){var c=-1;for(o=e;o<u;o++)if(s(r,o)===s(t,-1===c?0:o-c)){if(-1===c&&(c=o),o-c+1===f)return c*a}else-1!==c&&(o-=o-c),c=-1}else for(e+f>u&&(e=u-f),o=e;o>=0;o--){for(var h=!0,l=0;l<f;l++)if(s(r,o+l)!==s(t,l)){h=!1;break}if(h)return o}return-1}function Mt(r,t,e,n){e=Number(e)||0;var i=r.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=t.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var a=0;a<n;++a){var u=parseInt(t.substr(2*a,2),16);if(isNaN(u))return a;r[e+a]=u}return a}function kt(r,t,e,n){return oe(ne(t,r.length-e),r,e,n)}function Ct(r,t,e,n){return oe(function(r){for(var t=[],e=0;e<r.length;++e)t.push(255&r.charCodeAt(e));return t}(t),r,e,n)}function Vt(r,t,e,n){return Ct(r,t,e,n)}function Nt(r,t,e,n){return oe(ie(t),r,e,n)}function Dt(r,t,e,n){return oe(function(r,t){for(var e,n,i,o=[],a=0;a<r.length&&!((t-=2)<0);++a)n=(e=r.charCodeAt(a))>>8,i=e%256,o.push(i),o.push(n);return o}(t,r.length-e),r,e,n)}function Ft(r,t,e){return 0===t&&e===r.length?vt(r):vt(r.slice(t,e))}function zt(r,t,e){e=Math.min(r.length,e);for(var n=[],i=t;i<e;){var o,a,u,f,s=r[i],c=null,h=s>239?4:s>223?3:s>191?2:1;if(i+h<=e)switch(h){case 1:s<128&&(c=s);break;case 2:128==(192&(o=r[i+1]))&&(f=(31&s)<<6|63&o)>127&&(c=f);break;case 3:o=r[i+1],a=r[i+2],128==(192&o)&&128==(192&a)&&(f=(15&s)<<12|(63&o)<<6|63&a)>2047&&(f<55296||f>57343)&&(c=f);break;case 4:o=r[i+1],a=r[i+2],u=r[i+3],128==(192&o)&&128==(192&a)&&128==(192&u)&&(f=(15&s)<<18|(63&o)<<12|(63&a)<<6|63&u)>65535&&f<1114112&&(c=f)}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),i+=h}return function(r){var t=r.length;if(t<=4096)return String.fromCharCode.apply(String,r);var e="",n=0;for(;n<t;)e+=String.fromCharCode.apply(String,r.slice(n,n+=4096));return e}(n)}Tt.poolSize=8192,Tt._augment=function(r){return r.__proto__=Tt.prototype,r},Tt.from=function(r,t,e){return Pt(null,r,t,e)},Tt.TYPED_ARRAY_SUPPORT&&(Tt.prototype.__proto__=Uint8Array.prototype,Tt.__proto__=Uint8Array),Tt.alloc=function(r,t,e){return function(r,t,e,n){return Rt(t),t<=0?At(r,t):void 0!==e?"string"==typeof n?At(r,t).fill(e,n):At(r,t).fill(e):At(r,t)}(null,r,t,e)},Tt.allocUnsafe=function(r){return St(null,r)},Tt.allocUnsafeSlow=function(r){return St(null,r)},Tt.isBuffer=ae,Tt.compare=function(r,t){if(!Ot(r)||!Ot(t))throw new TypeError("Arguments must be Buffers");if(r===t)return 0;for(var e=r.length,n=t.length,i=0,o=Math.min(e,n);i<o;++i)if(r[i]!==t[i]){e=r[i],n=t[i];break}return e<n?-1:n<e?1:0},Tt.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Tt.concat=function(r,t){if(!mt(r))throw new TypeError('"list" argument must be an Array of Buffers');if(0===r.length)return Tt.alloc(0);var e;if(void 0===t)for(t=0,e=0;e<r.length;++e)t+=r[e].length;var n=Tt.allocUnsafe(t),i=0;for(e=0;e<r.length;++e){var o=r[e];if(!Ot(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},Tt.byteLength=It,Tt.prototype._isBuffer=!0,Tt.prototype.swap16=function(){var r=this.length;if(r%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<r;t+=2)Lt(this,t,t+1);return this},Tt.prototype.swap32=function(){var r=this.length;if(r%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<r;t+=4)Lt(this,t,t+3),Lt(this,t+1,t+2);return this},Tt.prototype.swap64=function(){var r=this.length;if(r%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<r;t+=8)Lt(this,t,t+7),Lt(this,t+1,t+6),Lt(this,t+2,t+5),Lt(this,t+3,t+4);return this},Tt.prototype.toString=function(){var r=0|this.length;return 0===r?"":0===arguments.length?zt(this,0,r):jt.apply(this,arguments)},Tt.prototype.equals=function(r){if(!Ot(r))throw new TypeError("Argument must be a Buffer");return this===r||0===Tt.compare(this,r)},Tt.prototype.inspect=function(){var r="";return this.length>0&&(r=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(r+=" ... ")),"<Buffer "+r+">"},Tt.prototype.compare=function(r,t,e,n,i){if(!Ot(r))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===e&&(e=r?r.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||e>r.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=e)return 0;if(n>=i)return-1;if(t>=e)return 1;if(this===r)return 0;for(var o=(i>>>=0)-(n>>>=0),a=(e>>>=0)-(t>>>=0),u=Math.min(o,a),f=this.slice(n,i),s=r.slice(t,e),c=0;c<u;++c)if(f[c]!==s[c]){o=f[c],a=s[c];break}return o<a?-1:a<o?1:0},Tt.prototype.includes=function(r,t,e){return-1!==this.indexOf(r,t,e)},Tt.prototype.indexOf=function(r,t,e){return Yt(this,r,t,e,!0)},Tt.prototype.lastIndexOf=function(r,t,e){return Yt(this,r,t,e,!1)},Tt.prototype.write=function(r,t,e,n){if(void 0===t)n="utf8",e=this.length,t=0;else if(void 0===e&&"string"==typeof t)n=t,e=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-t;if((void 0===e||e>i)&&(e=i),r.length>0&&(e<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return Mt(this,r,t,e);case"utf8":case"utf-8":return kt(this,r,t,e);case"ascii":return Ct(this,r,t,e);case"latin1":case"binary":return Vt(this,r,t,e);case"base64":return Nt(this,r,t,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Dt(this,r,t,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},Tt.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function $t(r,t,e){var n="";e=Math.min(r.length,e);for(var i=t;i<e;++i)n+=String.fromCharCode(127&r[i]);return n}function qt(r,t,e){var n="";e=Math.min(r.length,e);for(var i=t;i<e;++i)n+=String.fromCharCode(r[i]);return n}function Gt(r,t,e){var n=r.length;(!t||t<0)&&(t=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=t;o<e;++o)i+=ee(r[o]);return i}function Zt(r,t,e){for(var n=r.slice(t,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function Xt(r,t,e){if(r%1!=0||r<0)throw new RangeError("offset is not uint");if(r+t>e)throw new RangeError("Trying to access beyond buffer length")}function Wt(r,t,e,n,i,o){if(!Ot(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(e+n>r.length)throw new RangeError("Index out of range")}function Jt(r,t,e,n){t<0&&(t=65535+t+1);for(var i=0,o=Math.min(r.length-e,2);i<o;++i)r[e+i]=(t&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function Ht(r,t,e,n){t<0&&(t=4294967295+t+1);for(var i=0,o=Math.min(r.length-e,4);i<o;++i)r[e+i]=t>>>8*(n?i:3-i)&255}function Kt(r,t,e,n,i,o){if(e+n>r.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function Qt(r,t,e,n,i){return i||Kt(r,0,e,4),dt(r,t,e,n,23,4),e+4}function re(r,t,e,n,i){return i||Kt(r,0,e,8),dt(r,t,e,n,52,8),e+8}Tt.prototype.slice=function(r,t){var e,n=this.length;if((r=~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<r&&(t=r),Tt.TYPED_ARRAY_SUPPORT)(e=this.subarray(r,t)).__proto__=Tt.prototype;else{var i=t-r;e=new Tt(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+r]}return e},Tt.prototype.readUIntLE=function(r,t,e){r|=0,t|=0,e||Xt(r,t,this.length);for(var n=this[r],i=1,o=0;++o<t&&(i*=256);)n+=this[r+o]*i;return n},Tt.prototype.readUIntBE=function(r,t,e){r|=0,t|=0,e||Xt(r,t,this.length);for(var n=this[r+--t],i=1;t>0&&(i*=256);)n+=this[r+--t]*i;return n},Tt.prototype.readUInt8=function(r,t){return t||Xt(r,1,this.length),this[r]},Tt.prototype.readUInt16LE=function(r,t){return t||Xt(r,2,this.length),this[r]|this[r+1]<<8},Tt.prototype.readUInt16BE=function(r,t){return t||Xt(r,2,this.length),this[r]<<8|this[r+1]},Tt.prototype.readUInt32LE=function(r,t){return t||Xt(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+16777216*this[r+3]},Tt.prototype.readUInt32BE=function(r,t){return t||Xt(r,4,this.length),16777216*this[r]+(this[r+1]<<16|this[r+2]<<8|this[r+3])},Tt.prototype.readIntLE=function(r,t,e){r|=0,t|=0,e||Xt(r,t,this.length);for(var n=this[r],i=1,o=0;++o<t&&(i*=256);)n+=this[r+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},Tt.prototype.readIntBE=function(r,t,e){r|=0,t|=0,e||Xt(r,t,this.length);for(var n=t,i=1,o=this[r+--n];n>0&&(i*=256);)o+=this[r+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},Tt.prototype.readInt8=function(r,t){return t||Xt(r,1,this.length),128&this[r]?-1*(255-this[r]+1):this[r]},Tt.prototype.readInt16LE=function(r,t){t||Xt(r,2,this.length);var e=this[r]|this[r+1]<<8;return 32768&e?4294901760|e:e},Tt.prototype.readInt16BE=function(r,t){t||Xt(r,2,this.length);var e=this[r+1]|this[r]<<8;return 32768&e?4294901760|e:e},Tt.prototype.readInt32LE=function(r,t){return t||Xt(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},Tt.prototype.readInt32BE=function(r,t){return t||Xt(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},Tt.prototype.readFloatLE=function(r,t){return t||Xt(r,4,this.length),wt(this,r,!0,23,4)},Tt.prototype.readFloatBE=function(r,t){return t||Xt(r,4,this.length),wt(this,r,!1,23,4)},Tt.prototype.readDoubleLE=function(r,t){return t||Xt(r,8,this.length),wt(this,r,!0,52,8)},Tt.prototype.readDoubleBE=function(r,t){return t||Xt(r,8,this.length),wt(this,r,!1,52,8)},Tt.prototype.writeUIntLE=function(r,t,e,n){(r=+r,t|=0,e|=0,n)||Wt(this,r,t,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[t]=255&r;++o<e&&(i*=256);)this[t+o]=r/i&255;return t+e},Tt.prototype.writeUIntBE=function(r,t,e,n){(r=+r,t|=0,e|=0,n)||Wt(this,r,t,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[t+i]=255&r;--i>=0&&(o*=256);)this[t+i]=r/o&255;return t+e},Tt.prototype.writeUInt8=function(r,t,e){return r=+r,t|=0,e||Wt(this,r,t,1,255,0),Tt.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),this[t]=255&r,t+1},Tt.prototype.writeUInt16LE=function(r,t,e){return r=+r,t|=0,e||Wt(this,r,t,2,65535,0),Tt.TYPED_ARRAY_SUPPORT?(this[t]=255&r,this[t+1]=r>>>8):Jt(this,r,t,!0),t+2},Tt.prototype.writeUInt16BE=function(r,t,e){return r=+r,t|=0,e||Wt(this,r,t,2,65535,0),Tt.TYPED_ARRAY_SUPPORT?(this[t]=r>>>8,this[t+1]=255&r):Jt(this,r,t,!1),t+2},Tt.prototype.writeUInt32LE=function(r,t,e){return r=+r,t|=0,e||Wt(this,r,t,4,4294967295,0),Tt.TYPED_ARRAY_SUPPORT?(this[t+3]=r>>>24,this[t+2]=r>>>16,this[t+1]=r>>>8,this[t]=255&r):Ht(this,r,t,!0),t+4},Tt.prototype.writeUInt32BE=function(r,t,e){return r=+r,t|=0,e||Wt(this,r,t,4,4294967295,0),Tt.TYPED_ARRAY_SUPPORT?(this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=255&r):Ht(this,r,t,!1),t+4},Tt.prototype.writeIntLE=function(r,t,e,n){if(r=+r,t|=0,!n){var i=Math.pow(2,8*e-1);Wt(this,r,t,e,i-1,-i)}var o=0,a=1,u=0;for(this[t]=255&r;++o<e&&(a*=256);)r<0&&0===u&&0!==this[t+o-1]&&(u=1),this[t+o]=(r/a>>0)-u&255;return t+e},Tt.prototype.writeIntBE=function(r,t,e,n){if(r=+r,t|=0,!n){var i=Math.pow(2,8*e-1);Wt(this,r,t,e,i-1,-i)}var o=e-1,a=1,u=0;for(this[t+o]=255&r;--o>=0&&(a*=256);)r<0&&0===u&&0!==this[t+o+1]&&(u=1),this[t+o]=(r/a>>0)-u&255;return t+e},Tt.prototype.writeInt8=function(r,t,e){return r=+r,t|=0,e||Wt(this,r,t,1,127,-128),Tt.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),r<0&&(r=255+r+1),this[t]=255&r,t+1},Tt.prototype.writeInt16LE=function(r,t,e){return r=+r,t|=0,e||Wt(this,r,t,2,32767,-32768),Tt.TYPED_ARRAY_SUPPORT?(this[t]=255&r,this[t+1]=r>>>8):Jt(this,r,t,!0),t+2},Tt.prototype.writeInt16BE=function(r,t,e){return r=+r,t|=0,e||Wt(this,r,t,2,32767,-32768),Tt.TYPED_ARRAY_SUPPORT?(this[t]=r>>>8,this[t+1]=255&r):Jt(this,r,t,!1),t+2},Tt.prototype.writeInt32LE=function(r,t,e){return r=+r,t|=0,e||Wt(this,r,t,4,2147483647,-2147483648),Tt.TYPED_ARRAY_SUPPORT?(this[t]=255&r,this[t+1]=r>>>8,this[t+2]=r>>>16,this[t+3]=r>>>24):Ht(this,r,t,!0),t+4},Tt.prototype.writeInt32BE=function(r,t,e){return r=+r,t|=0,e||Wt(this,r,t,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),Tt.TYPED_ARRAY_SUPPORT?(this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=255&r):Ht(this,r,t,!1),t+4},Tt.prototype.writeFloatLE=function(r,t,e){return Qt(this,r,t,!0,e)},Tt.prototype.writeFloatBE=function(r,t,e){return Qt(this,r,t,!1,e)},Tt.prototype.writeDoubleLE=function(r,t,e){return re(this,r,t,!0,e)},Tt.prototype.writeDoubleBE=function(r,t,e){return re(this,r,t,!1,e)},Tt.prototype.copy=function(r,t,e,n){if(e||(e=0),n||0===n||(n=this.length),t>=r.length&&(t=r.length),t||(t=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===r.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),r.length-t<n-e&&(n=r.length-t+e);var i,o=n-e;if(this===r&&e<t&&t<n)for(i=o-1;i>=0;--i)r[i+t]=this[i+e];else if(o<1e3||!Tt.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)r[i+t]=this[i+e];else Uint8Array.prototype.set.call(r,this.subarray(e,e+o),t);return o},Tt.prototype.fill=function(r,t,e,n){if("string"==typeof r){if("string"==typeof t?(n=t,t=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===r.length){var i=r.charCodeAt(0);i<256&&(r=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!Tt.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof r&&(r&=255);if(t<0||this.length<t||this.length<e)throw new RangeError("Out of range index");if(e<=t)return this;var o;if(t>>>=0,e=void 0===e?this.length:e>>>0,r||(r=0),"number"==typeof r)for(o=t;o<e;++o)this[o]=r;else{var a=Ot(r)?r:ne(new Tt(r,n).toString()),u=a.length;for(o=0;o<e-t;++o)this[o+t]=a[o%u]}return this};var te=/[^+\/0-9A-Za-z-_]/g;function ee(r){return r<16?"0"+r.toString(16):r.toString(16)}function ne(r,t){var e;t=t||1/0;for(var n=r.length,i=null,o=[],a=0;a<n;++a){if((e=r.charCodeAt(a))>55295&&e<57344){if(!i){if(e>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(t-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((t-=1)<0)break;o.push(e)}else if(e<2048){if((t-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((t-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function ie(r){return function(r){var t,e,n,i,o,a;pt||gt();var u=r.length;if(u%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o="="===r[u-2]?2:"="===r[u-1]?1:0,a=new lt(3*u/4-o),n=o>0?u-4:u;var f=0;for(t=0,e=0;t<n;t+=4,e+=3)i=ht[r.charCodeAt(t)]<<18|ht[r.charCodeAt(t+1)]<<12|ht[r.charCodeAt(t+2)]<<6|ht[r.charCodeAt(t+3)],a[f++]=i>>16&255,a[f++]=i>>8&255,a[f++]=255&i;return 2===o?(i=ht[r.charCodeAt(t)]<<2|ht[r.charCodeAt(t+1)]>>4,a[f++]=255&i):1===o&&(i=ht[r.charCodeAt(t)]<<10|ht[r.charCodeAt(t+1)]<<4|ht[r.charCodeAt(t+2)]>>2,a[f++]=i>>8&255,a[f++]=255&i),a}(function(r){if((r=function(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}(r).replace(te,"")).length<2)return"";for(;r.length%4!=0;)r+="=";return r}(r))}function oe(r,t,e,n){for(var i=0;i<n&&!(i+e>=t.length||i>=r.length);++i)t[i+e]=r[i];return i}function ae(r){return null!=r&&(!!r._isBuffer||ue(r)||function(r){return"function"==typeof r.readFloatLE&&"function"==typeof r.slice&&ue(r.slice(0,0))}(r))}function ue(r){return!!r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r)}var fe=Object.freeze({__proto__:null,Buffer:Tt,INSPECT_MAX_BYTES:50,SlowBuffer:function(r){return+r!=r&&(r=0),Tt.alloc(+r)},isBuffer:ae,kMaxLength:Et}),se=Qr,ce=r(Object.freeze({__proto__:null}));var he=function(){var r,t;if("function"!=typeof ce)return!1;try{t="function"==typeof ce.from?ce.from([1,2,3,4]):new ce([1,2,3,4]),r=se(t)&&1===t[0]&&2===t[1]&&3===t[2]&&4===t[3]}catch(t){r=!1}return r},le=he;var pe=r(fe).Buffer,ge=function(){throw new Error("not implemented")},ye=le()?pe:ge,ve=st(ye.allocUnsafe);var we=function(r){return"number"==typeof r},de=Number,be=de.prototype.toString;var me=vr,Ee=de,_e=function(r){try{return be.call(r),!0}catch(r){return!1}},Ae=ir();var Te=function(r){return"object"==typeof r&&(r instanceof Ee||(Ae?_e(r):"[object Number]"===me(r)))},Pe=we,Re=Te;var Se=tr,Be=function(r){return Pe(r)||Re(r)},Ue=Te;Se(Be,"isPrimitive",we),Se(Be,"isObject",Ue);var Oe=Be,Ie=Number.POSITIVE_INFINITY,je=de.NEGATIVE_INFINITY,Le=Math.floor;var Ye=function(r){return Le(r)===r},xe=Ie,Me=je,ke=Ye;var Ce=function(r){return r<xe&&r>Me&&ke(r)},Ve=Oe.isPrimitive,Ne=Ce;var De=function(r){return Ve(r)&&Ne(r)},Fe=Oe.isObject,ze=Ce;var $e=function(r){return Fe(r)&&ze(r.valueOf())},qe=De,Ge=$e;var Ze=tr,Xe=function(r){return qe(r)||Ge(r)},We=$e;Ze(Xe,"isPrimitive",De),Ze(Xe,"isObject",We);var Je=Xe.isPrimitive;var He=function(r){return Je(r)&&r>=0},Ke=Xe.isObject;var Qe=function(r){return Ke(r)&&r.valueOf()>=0},rn=He,tn=Qe;var en=tr,nn=function(r){return rn(r)||tn(r)},on=Qe;en(nn,"isPrimitive",He),en(nn,"isObject",on);var an=nn,un=an,fn=k,sn=ye;var cn=an,hn=k,ln=ye;var pn=ve?function(r){if(!un(r))throw new TypeError(fn("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return sn.allocUnsafe(r)}:function(r){if(!cn(r))throw new TypeError(hn("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new ln(r)},gn=st(ye.from),yn=Ye;var vn=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&yn(r.length)&&r.length>=0&&r.length<=9007199254740991},wn=vn,dn=k,bn=ye;var mn=vn,En=k,_n=ye;var An=gn?function(r){if(!wn(r))throw new TypeError(dn("invalid argument. Must provide an array-like object. Value: `%s`.",r));return bn.from(r)}:function(r){if(!mn(r))throw new TypeError(En("invalid argument. Must provide an array-like object. Value: `%s`.",r));return new _n(r)};require("process");var Tn=require("@stdlib/utils/global");require("@stdlib/utils/native-class"),require("./../../is-plain-object"),require("./../../is-string").isPrimitive,require("./to_string.js"),require("./global_scope.js"),Tn();var Pn=r(Object.freeze({__proto__:null}))();function Rn(){throw new Error("setTimeout has not been defined")}function Sn(){throw new Error("clearTimeout has not been defined")}var Bn=Rn,Un=Sn;function On(r){if(Bn===setTimeout)return setTimeout(r,0);if((Bn===Rn||!Bn)&&setTimeout)return Bn=setTimeout,setTimeout(r,0);try{return Bn(r,0)}catch(t){try{return Bn.call(null,r,0)}catch(t){return Bn.call(this,r,0)}}}"function"==typeof Ur.setTimeout&&(Bn=setTimeout),"function"==typeof Ur.clearTimeout&&(Un=clearTimeout);var In,jn=[],Ln=!1,Yn=-1;function xn(){Ln&&In&&(Ln=!1,In.length?jn=In.concat(jn):Yn=-1,jn.length&&Mn())}function Mn(){if(!Ln){var r=On(xn);Ln=!0;for(var t=jn.length;t;){for(In=jn,jn=[];++Yn<t;)In&&In[Yn].run();Yn=-1,t=jn.length}In=null,Ln=!1,function(r){if(Un===clearTimeout)return clearTimeout(r);if((Un===Sn||!Un)&&clearTimeout)return Un=clearTimeout,clearTimeout(r);try{Un(r)}catch(t){try{return Un.call(null,r)}catch(t){return Un.call(this,r)}}}(r)}}function kn(r){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];jn.push(new Cn(r,t)),1!==jn.length||Ln||On(Mn)}function Cn(r,t){this.fun=r,this.array=t}Cn.prototype.run=function(){this.fun.apply(null,this.array)};var Vn={},Nn=[],Dn={},Fn={},zn={};function $n(){}var qn=$n,Gn=$n,Zn=$n,Xn=$n,Wn=$n,Jn=$n,Hn=$n;function Kn(r){throw new Error("process.binding is not supported")}function Qn(){return"/"}function ri(r){throw new Error("process.chdir is not supported")}function ti(){return 0}var ei=Ur.performance||{},ni=ei.now||ei.mozNow||ei.msNow||ei.oNow||ei.webkitNow||function(){return(new Date).getTime()};function ii(r){var t=.001*ni.call(ei),e=Math.floor(t),n=Math.floor(t%1*1e9);return r&&(e-=r[0],(n-=r[1])<0&&(e--,n+=1e9)),[e,n]}var oi=new Date;function ai(){return(new Date-oi)/1e3}var ui,fi={nextTick:kn,title:"browser",browser:true,env:Vn,argv:Nn,version:"",versions:Dn,on:qn,addListener:Gn,once:Zn,off:Xn,removeListener:Wn,removeAllListeners:Jn,emit:Hn,binding:Kn,cwd:Qn,chdir:ri,umask:ti,hrtime:ii,platform:"browser",release:Fn,config:zn,uptime:ai},si=r(Object.freeze({__proto__:null,addListener:Gn,argv:Nn,binding:Kn,browser:true,chdir:ri,config:zn,cwd:Qn,default:fi,emit:Hn,env:Vn,hrtime:ii,nextTick:kn,off:Xn,on:qn,once:Zn,platform:"browser",release:Fn,removeAllListeners:Jn,removeListener:Wn,title:"browser",umask:ti,uptime:ai,version:"",versions:Dn})).versions.node,ci=(ui=Pn?si:null,ui?parseInt(ui.split(".")[0],10):-1),hi=ci,li=st(ye.from)&&hi>=5,pi=vr,gi="function"==typeof ArrayBuffer;var yi=function(r){return gi&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===pi(r)},vi=yi,wi=an.isPrimitive,di=ye,bi=k,mi=ci;var Ei=function(r,t,e){var n,i;if(!vi(r))throw new TypeError(bi("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",r));if(arguments.length>1){if(!wi(t))throw new TypeError(bi("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(t>r.byteLength)throw new RangeError(bi("invalid argument. Second argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",t));if(n=t,arguments.length>2){if(!wi(e))throw new TypeError(bi("invalid argument. Last argument must be a nonnegative integer. Value: `%s`.",e));if(e>r.byteLength)throw new RangeError(bi("invalid argument. Last argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",e));i=e}else i=r.byteLength-n}else n=0,i=r.byteLength;return 0===i&&mi<6?di.from([]):di.from(r,n,i)},_i=vr,Ai="function"==typeof Uint8Array;var Ti="function"==typeof Uint8Array?Uint8Array:null,Pi=function(r){return Ai&&r instanceof Uint8Array||"[object Uint8Array]"===_i(r)},Ri=Ti;var Si=function(){var r,t;if("function"!=typeof Ri)return!1;try{t=new Ri(t=[1,3.14,-3.14,256,257]),r=Pi(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Bi,Ui="function"==typeof Uint8Array?Uint8Array:void 0,Oi=function(){throw new Error("not implemented")};Bi=Si()?Ui:Oi;var Ii=yi,ji=an.isPrimitive,Li=ye,Yi=Bi,xi=An,Mi=k,ki=ci;var Ci=li?Ei:function(r,t,e){var n;if(!Ii(r))throw new TypeError(Mi("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",r));if(arguments.length>1){if(!ji(t))throw new TypeError(Mi("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(t>r.byteLength)throw new RangeError(Mi("invalid argument. Second argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",t));if(arguments.length>2){if(!ji(e))throw new TypeError(Mi("invalid argument. Last argument must be a nonnegative integer. Value: `%s`.",e));if(e>r.byteLength)throw new RangeError(Mi("invalid argument. Last argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",e));n=e}else n=r.byteLength-t;return xi(new Yi(r,t,n))}return ki<3?xi(new Yi(r)):0===r.byteLength?new Li([]):new Li(r)},Vi=st(ye.from),Ni=Qr,Di=k,Fi=ye;var zi=function(r){if(!Ni(r))throw new TypeError(Di("invalid argument. Must provide a Buffer. Value: `%s`.",r));return Fi.from(r)},$i=Qr,qi=k,Gi=ye;var Zi=function(r){if(!$i(r))throw new TypeError(qi("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Gi(r)},Xi=Vi?zi:Zi,Wi=st(ye.from);var Ji=function(r){return"string"==typeof r},Hi=String.prototype.valueOf;var Ki=vr,Qi=function(r){try{return Hi.call(r),!0}catch(r){return!1}},ro=ir();var to=function(r){return"object"==typeof r&&(r instanceof String||(ro?Qi(r):"[object String]"===Ki(r)))},eo=Ji,no=to;var io=tr,oo=function(r){return eo(r)||no(r)},ao=to;io(oo,"isPrimitive",Ji),io(oo,"isObject",ao);var uo=oo.isPrimitive,fo=k,so=ye;var co=oo.isPrimitive,ho=k,lo=ye;var po=Wi?function(r,t){if(!uo(r))throw new TypeError(fo("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!uo(t))throw new TypeError(fo("invalid argument. Second argument must be a string. Value: `%s`.",t));return so.from(r,t)}return so.from(r,"utf8")}:function(r,t){if(!co(r))throw new TypeError(ho("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1){if(!co(t))throw new TypeError(ho("invalid argument. Second argument must be a string. Value: `%s`.",t));return new lo(r,t)}return new lo(r,"utf8")},go=Xr,yo=An;var vo=function(r,t){return t&&"Buffer"===t.type&&go(t.data)?yo(t.data):t},wo=Qr,bo=k;var mo=function(r){var t,e;if(!wo(r))throw new TypeError(bo("invalid argument. Must provide a Buffer. Value: `%s`.",r));for((t={}).type="Buffer",t.data=[],e=0;e<r.length;e++)t.data.push(r[e]);return t},Eo=mo,_o=H,Ao={};_o(Ao,"allocUnsafe",pn),_o(Ao,"Buffer",ye),_o(Ao,"array2buffer",An),_o(Ao,"arraybuffer2buffer",Ci),_o(Ao,"copyBuffer",Xi),_o(Ao,"string2buffer",po),_o(Ao,"reviver",vo),_o(Ao,"toJSON",Eo);var To=Ao;export{ye as Buffer,pn as allocUnsafe,An as array2buffer,Ci as arraybuffer2buffer,Xi as copyBuffer,To as default,vo as reviver,po as string2buffer,Eo as toJSON};
//# sourceMappingURL=mod.js.map
