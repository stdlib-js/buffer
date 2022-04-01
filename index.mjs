// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-node-buffer-support@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/process-node-version@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-buffer@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";function c(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var p="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},g=[],d=[],y="undefined"!=typeof Uint8Array?Uint8Array:Array,w=!1;function m(){w=!0;for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0,e=t.length;r<e;++r)g[r]=t[r],d[t.charCodeAt(r)]=r;d["-".charCodeAt(0)]=62,d["_".charCodeAt(0)]=63}function v(t,r,e){for(var n,i,o=[],u=r;u<e;u+=3)n=(t[u]<<16)+(t[u+1]<<8)+t[u+2],o.push(g[(i=n)>>18&63]+g[i>>12&63]+g[i>>6&63]+g[63&i]);return o.join("")}function b(t){var r;w||m();for(var e=t.length,n=e%3,i="",o=[],u=16383,s=0,f=e-n;s<f;s+=u)o.push(v(t,s,s+u>f?f:s+u));return 1===n?(r=t[e-1],i+=g[r>>2],i+=g[r<<4&63],i+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],i+=g[r>>10],i+=g[r>>4&63],i+=g[r<<2&63],i+="="),o.push(i),o.join("")}function E(t,r,e,n,i){var o,u,s=8*i-n-1,f=(1<<s)-1,a=f>>1,h=-7,l=e?i-1:0,c=e?-1:1,p=t[r+l];for(l+=c,o=p&(1<<-h)-1,p>>=-h,h+=s;h>0;o=256*o+t[r+l],l+=c,h-=8);for(u=o&(1<<-h)-1,o>>=-h,h+=n;h>0;u=256*u+t[r+l],l+=c,h-=8);if(0===o)o=1-a;else{if(o===f)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),o-=a}return(p?-1:1)*u*Math.pow(2,o-n)}function A(t,r,e,n,i,o){var u,s,f,a=8*o-i-1,h=(1<<a)-1,l=h>>1,c=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,d=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(s=isNaN(r)?1:0,u=h):(u=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-u))<1&&(u--,f*=2),(r+=u+l>=1?c/f:c*Math.pow(2,1-l))*f>=2&&(u++,f/=2),u+l>=h?(s=0,u=h):u+l>=1?(s=(r*f-1)*Math.pow(2,i),u+=l):(s=r*Math.pow(2,l-1)*Math.pow(2,i),u=0));i>=8;t[e+p]=255&s,p+=g,s/=256,i-=8);for(u=u<<i|s,a+=i;a>0;t[e+p]=255&u,p+=g,u/=256,a-=8);t[e+p-g]|=128*d}var R={}.toString,_=Array.isArray||function(t){return"[object Array]"==R.call(t)};U.TYPED_ARRAY_SUPPORT=void 0===p.TYPED_ARRAY_SUPPORT||p.TYPED_ARRAY_SUPPORT;var T=P();function P(){return U.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function B(t,r){if(P()<r)throw new RangeError("Invalid typed array length");return U.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=U.prototype:(null===t&&(t=new U(r)),t.length=r),t}function U(t,r,e){if(!(U.TYPED_ARRAY_SUPPORT||this instanceof U))return new U(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return Y(this,t)}return S(this,t,r,e)}function S(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);U.TYPED_ARRAY_SUPPORT?(t=r).__proto__=U.prototype:t=I(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!U.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|O(r,e),i=(t=B(t,n)).write(r,e);i!==n&&(t=t.slice(0,i));return t}(t,r,e):function(t,r){if(M(r)){var e=0|L(r.length);return 0===(t=B(t,e)).length||r.copy(t,0,0,e),t}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?B(t,0):I(t,r);if("Buffer"===r.type&&_(r.data))return I(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function j(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function Y(t,r){if(j(r),t=B(t,r<0?0:0|L(r)),!U.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function I(t,r){var e=r.length<0?0:0|L(r.length);t=B(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function L(t){if(t>=P())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+P().toString(16)+" bytes");return 0|t}function M(t){return!(null==t||!t._isBuffer)}function O(t,r){if(M(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return st(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return ft(t).length;default:if(n)return st(t).length;r=(""+r).toLowerCase(),n=!0}}function x(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return K(this,r,e);case"utf8":case"utf-8":return Z(this,r,e);case"ascii":return G(this,r,e);case"latin1":case"binary":return H(this,r,e);case"base64":return X(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Q(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function C(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function D(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=U.from(r,n)),M(r))return 0===r.length?-1:V(t,r,e,n,i);if("number"==typeof r)return r&=255,U.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):V(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function V(t,r,e,n,i){var o,u=1,s=t.length,f=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,s/=2,f/=2,e/=2}function a(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}if(i){var h=-1;for(o=e;o<s;o++)if(a(t,o)===a(r,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===f)return h*u}else-1!==h&&(o-=o-h),h=-1}else for(e+f>s&&(e=s-f),o=e;o>=0;o--){for(var l=!0,c=0;c<f;c++)if(a(t,o+c)!==a(r,c)){l=!1;break}if(l)return o}return-1}function k(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var u=0;u<n;++u){var s=parseInt(r.substr(2*u,2),16);if(isNaN(s))return u;t[e+u]=s}return u}function N(t,r,e,n){return at(st(r,t.length-e),t,e,n)}function F(t,r,e,n){return at(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function z(t,r,e,n){return F(t,r,e,n)}function J(t,r,e,n){return at(ft(r),t,e,n)}function q(t,r,e,n){return at(function(t,r){for(var e,n,i,o=[],u=0;u<t.length&&!((r-=2)<0);++u)n=(e=t.charCodeAt(u))>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function X(t,r,e){return 0===r&&e===t.length?b(t):b(t.slice(r,e))}function Z(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,u,s,f,a=t[i],h=null,l=a>239?4:a>223?3:a>191?2:1;if(i+l<=e)switch(l){case 1:a<128&&(h=a);break;case 2:128==(192&(o=t[i+1]))&&(f=(31&a)<<6|63&o)>127&&(h=f);break;case 3:o=t[i+1],u=t[i+2],128==(192&o)&&128==(192&u)&&(f=(15&a)<<12|(63&o)<<6|63&u)>2047&&(f<55296||f>57343)&&(h=f);break;case 4:o=t[i+1],u=t[i+2],s=t[i+3],128==(192&o)&&128==(192&u)&&128==(192&s)&&(f=(15&a)<<18|(63&o)<<12|(63&u)<<6|63&s)>65535&&f<1114112&&(h=f)}null===h?(h=65533,l=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=l}return function(t){var r=t.length;if(r<=4096)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return e}(n)}U.poolSize=8192,U._augment=function(t){return t.__proto__=U.prototype,t},U.from=function(t,r,e){return S(null,t,r,e)},U.TYPED_ARRAY_SUPPORT&&(U.prototype.__proto__=Uint8Array.prototype,U.__proto__=Uint8Array),U.alloc=function(t,r,e){return function(t,r,e,n){return j(r),r<=0?B(t,r):void 0!==e?"string"==typeof n?B(t,r).fill(e,n):B(t,r).fill(e):B(t,r)}(null,t,r,e)},U.allocUnsafe=function(t){return Y(null,t)},U.allocUnsafeSlow=function(t){return Y(null,t)},U.isBuffer=ht,U.compare=function(t,r){if(!M(t)||!M(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},U.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},U.concat=function(t,r){if(!_(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return U.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=U.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(!M(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},U.byteLength=O,U.prototype._isBuffer=!0,U.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)C(this,r,r+1);return this},U.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)C(this,r,r+3),C(this,r+1,r+2);return this},U.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)C(this,r,r+7),C(this,r+1,r+6),C(this,r+2,r+5),C(this,r+3,r+4);return this},U.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?Z(this,0,t):x.apply(this,arguments)},U.prototype.equals=function(t){if(!M(t))throw new TypeError("Argument must be a Buffer");return this===t||0===U.compare(this,t)},U.prototype.inspect=function(){var t="";return this.length>0&&(t=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(t+=" ... ")),"<Buffer "+t+">"},U.prototype.compare=function(t,r,e,n,i){if(!M(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),u=(e>>>=0)-(r>>>=0),s=Math.min(o,u),f=this.slice(n,i),a=t.slice(r,e),h=0;h<s;++h)if(f[h]!==a[h]){o=f[h],u=a[h];break}return o<u?-1:u<o?1:0},U.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},U.prototype.indexOf=function(t,r,e){return D(this,t,r,e,!0)},U.prototype.lastIndexOf=function(t,r,e){return D(this,t,r,e,!1)},U.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return k(this,t,r,e);case"utf8":case"utf-8":return N(this,t,r,e);case"ascii":return F(this,t,r,e);case"latin1":case"binary":return z(this,t,r,e);case"base64":return J(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return q(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},U.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function G(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function H(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function K(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=ut(t[o]);return i}function Q(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function W(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function $(t,r,e,n,i,o){if(!M(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function tt(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function rt(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function et(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function nt(t,r,e,n,i){return i||et(t,0,e,4),A(t,r,e,n,23,4),e+4}function it(t,r,e,n,i){return i||et(t,0,e,8),A(t,r,e,n,52,8),e+8}U.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),U.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=U.prototype;else{var i=r-t;e=new U(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},U.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||W(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},U.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||W(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},U.prototype.readUInt8=function(t,r){return r||W(t,1,this.length),this[t]},U.prototype.readUInt16LE=function(t,r){return r||W(t,2,this.length),this[t]|this[t+1]<<8},U.prototype.readUInt16BE=function(t,r){return r||W(t,2,this.length),this[t]<<8|this[t+1]},U.prototype.readUInt32LE=function(t,r){return r||W(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},U.prototype.readUInt32BE=function(t,r){return r||W(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},U.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||W(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},U.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||W(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},U.prototype.readInt8=function(t,r){return r||W(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},U.prototype.readInt16LE=function(t,r){r||W(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},U.prototype.readInt16BE=function(t,r){r||W(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},U.prototype.readInt32LE=function(t,r){return r||W(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},U.prototype.readInt32BE=function(t,r){return r||W(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},U.prototype.readFloatLE=function(t,r){return r||W(t,4,this.length),E(this,t,!0,23,4)},U.prototype.readFloatBE=function(t,r){return r||W(t,4,this.length),E(this,t,!1,23,4)},U.prototype.readDoubleLE=function(t,r){return r||W(t,8,this.length),E(this,t,!0,52,8)},U.prototype.readDoubleBE=function(t,r){return r||W(t,8,this.length),E(this,t,!1,52,8)},U.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||$(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},U.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||$(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},U.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||$(this,t,r,1,255,0),U.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},U.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||$(this,t,r,2,65535,0),U.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):tt(this,t,r,!0),r+2},U.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||$(this,t,r,2,65535,0),U.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):tt(this,t,r,!1),r+2},U.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||$(this,t,r,4,4294967295,0),U.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):rt(this,t,r,!0),r+4},U.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||$(this,t,r,4,4294967295,0),U.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):rt(this,t,r,!1),r+4},U.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);$(this,t,r,e,i-1,-i)}var o=0,u=1,s=0;for(this[r]=255&t;++o<e&&(u*=256);)t<0&&0===s&&0!==this[r+o-1]&&(s=1),this[r+o]=(t/u>>0)-s&255;return r+e},U.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);$(this,t,r,e,i-1,-i)}var o=e-1,u=1,s=0;for(this[r+o]=255&t;--o>=0&&(u*=256);)t<0&&0===s&&0!==this[r+o+1]&&(s=1),this[r+o]=(t/u>>0)-s&255;return r+e},U.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||$(this,t,r,1,127,-128),U.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},U.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||$(this,t,r,2,32767,-32768),U.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):tt(this,t,r,!0),r+2},U.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||$(this,t,r,2,32767,-32768),U.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):tt(this,t,r,!1),r+2},U.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||$(this,t,r,4,2147483647,-2147483648),U.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):rt(this,t,r,!0),r+4},U.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||$(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),U.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):rt(this,t,r,!1),r+4},U.prototype.writeFloatLE=function(t,r,e){return nt(this,t,r,!0,e)},U.prototype.writeFloatBE=function(t,r,e){return nt(this,t,r,!1,e)},U.prototype.writeDoubleLE=function(t,r,e){return it(this,t,r,!0,e)},U.prototype.writeDoubleBE=function(t,r,e){return it(this,t,r,!1,e)},U.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!U.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},U.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!U.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var u=M(t)?t:st(new U(t,n).toString()),s=u.length;for(o=0;o<e-r;++o)this[o+r]=u[o%s]}return this};var ot=/[^+\/0-9A-Za-z-_]/g;function ut(t){return t<16?"0"+t.toString(16):t.toString(16)}function st(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function ft(t){return function(t){var r,e,n,i,o,u;w||m();var s=t.length;if(s%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o="="===t[s-2]?2:"="===t[s-1]?1:0,u=new y(3*s/4-o),n=o>0?s-4:s;var f=0;for(r=0,e=0;r<n;r+=4,e+=3)i=d[t.charCodeAt(r)]<<18|d[t.charCodeAt(r+1)]<<12|d[t.charCodeAt(r+2)]<<6|d[t.charCodeAt(r+3)],u[f++]=i>>16&255,u[f++]=i>>8&255,u[f++]=255&i;return 2===o?(i=d[t.charCodeAt(r)]<<2|d[t.charCodeAt(r+1)]>>4,u[f++]=255&i):1===o&&(i=d[t.charCodeAt(r)]<<10|d[t.charCodeAt(r+1)]<<4|d[t.charCodeAt(r+2)]>>2,u[f++]=i>>8&255,u[f++]=255&i),u}(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(ot,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function at(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function ht(t){return null!=t&&(!!t._isBuffer||lt(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&lt(t.slice(0,0))}(t))}function lt(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var ct=c(Object.freeze({__proto__:null,Buffer:U,INSPECT_MAX_BYTES:50,SlowBuffer:function(t){return+t!=t&&(t=0),U.alloc(+t)},isBuffer:ht,kMaxLength:T})).Buffer,pt=function(){throw new Error("not implemented")},gt=e()?ct:pt,dt=r(gt.allocUnsafe),yt=n,wt=i,mt=gt;var vt=n,bt=i,Et=gt;var At=dt?function(t){if(!yt(t))throw new TypeError(wt("invalid argument. Must provide a nonnegative integer. Value: `%s`.",t));return mt.allocUnsafe(t)}:function(t){if(!vt(t))throw new TypeError(bt("invalid argument. Must provide a nonnegative integer. Value: `%s`.",t));return new Et(t)},Rt=r(gt.from),_t=o,Tt=i,Pt=gt;var Bt=o,Ut=i,St=gt;var jt=Rt?function(t){if(!_t(t))throw new TypeError(Tt("invalid argument. Must provide an array-like object. Value: `%s`.",t));return Pt.from(t)}:function(t){if(!Bt(t))throw new TypeError(Ut("invalid argument. Must provide an array-like object. Value: `%s`.",t));return new St(t)},Yt=u?parseInt(u.split(".")[0],10):-1,It=Yt,Lt=r(gt.from)&&It>=5,Mt=s,Ot=n.isPrimitive,xt=gt,Ct=i,Dt=Yt;var Vt=function(t,r,e){var n,i;if(!Mt(t))throw new TypeError(Ct("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(arguments.length>1){if(!Ot(r))throw new TypeError(Ct("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(r>t.byteLength)throw new RangeError(Ct("invalid argument. Second argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",r));if(n=r,arguments.length>2){if(!Ot(e))throw new TypeError(Ct("invalid argument. Last argument must be a nonnegative integer. Value: `%s`.",e));if(e>t.byteLength)throw new RangeError(Ct("invalid argument. Last argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",e));i=e}else i=t.byteLength-n}else n=0,i=t.byteLength;return 0===i&&Dt<6?xt.from([]):xt.from(t,n,i)},kt=s,Nt=n.isPrimitive,Ft=gt,zt=f,Jt=jt,qt=i,Xt=Yt;var Zt=Lt?Vt:function(t,r,e){var n;if(!kt(t))throw new TypeError(qt("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(arguments.length>1){if(!Nt(r))throw new TypeError(qt("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(r>t.byteLength)throw new RangeError(qt("invalid argument. Second argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",r));if(arguments.length>2){if(!Nt(e))throw new TypeError(qt("invalid argument. Last argument must be a nonnegative integer. Value: `%s`.",e));if(e>t.byteLength)throw new RangeError(qt("invalid argument. Last argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",e));n=e}else n=t.byteLength-r;return Jt(new zt(t,r,n))}return Xt<3?Jt(new zt(t)):0===t.byteLength?new Ft([]):new Ft(t)},Gt=r(gt.from),Ht=a,Kt=i,Qt=gt;var Wt=function(t){if(!Ht(t))throw new TypeError(Kt("invalid argument. Must provide a Buffer. Value: `%s`.",t));return Qt.from(t)},$t=a,tr=i,rr=gt;var er=function(t){if(!$t(t))throw new TypeError(tr("invalid argument. Must provide a Buffer. Value: `%s`.",t));return new rr(t)},nr=Gt?Wt:er,ir=r(gt.from),or=h.isPrimitive,ur=i,sr=gt;var fr=function(t,r){if(!or(t))throw new TypeError(ur("invalid argument. First argument must be a string. Value: `%s`.",t));if(arguments.length>1){if(!or(r))throw new TypeError(ur("invalid argument. Second argument must be a string. Value: `%s`.",r));return sr.from(t,r)}return sr.from(t,"utf8")},ar=h.isPrimitive,hr=i,lr=gt;var cr=ir?fr:function(t,r){if(!ar(t))throw new TypeError(hr("invalid argument. First argument must be a string. Value: `%s`.",t));if(arguments.length>1){if(!ar(r))throw new TypeError(hr("invalid argument. Second argument must be a string. Value: `%s`.",r));return new lr(t,r)}return new lr(t,"utf8")},pr=l,gr=jt;var dr=function(t,r){return r&&"Buffer"===r.type&&pr(r.data)?gr(r.data):r},yr=a,wr=i;var mr=function(t){var r,e;if(!yr(t))throw new TypeError(wr("invalid argument. Must provide a Buffer. Value: `%s`.",t));for((r={}).type="Buffer",r.data=[],e=0;e<t.length;e++)r.data.push(t[e]);return r},vr=mr,br=t,Er={};br(Er,"allocUnsafe",At),br(Er,"Buffer",gt),br(Er,"array2buffer",jt),br(Er,"arraybuffer2buffer",Zt),br(Er,"copyBuffer",nr),br(Er,"string2buffer",cr),br(Er,"reviver",dr),br(Er,"toJSON",vr);var Ar=Er;export{gt as Buffer,At as allocUnsafe,jt as array2buffer,Zt as arraybuffer2buffer,nr as copyBuffer,Ar as default,dr as reviver,cr as string2buffer,vr as toJSON};
//# sourceMappingURL=index.mjs.map
