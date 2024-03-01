// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-node-buffer-support@v0.2.1-esm/index.mjs";import n,{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/process-node-version@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-buffer@v0.2.1-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.1-esm/index.mjs";function p(t){if(t.__esModule)return t;var r=t.default;if("function"==typeof r){var e=function t(){return this instanceof t?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var g="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},d=[],y=[],w="undefined"!=typeof Uint8Array?Uint8Array:Array,v=!1;function m(){v=!0;for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0;r<64;++r)d[r]=t[r],y[t.charCodeAt(r)]=r;y["-".charCodeAt(0)]=62,y["_".charCodeAt(0)]=63}function b(t,r,e){for(var n,i,o=[],u=r;u<e;u+=3)n=(t[u]<<16)+(t[u+1]<<8)+t[u+2],o.push(d[(i=n)>>18&63]+d[i>>12&63]+d[i>>6&63]+d[63&i]);return o.join("")}function E(t){var r;v||m();for(var e=t.length,n=e%3,i="",o=[],u=16383,s=0,f=e-n;s<f;s+=u)o.push(b(t,s,s+u>f?f:s+u));return 1===n?(r=t[e-1],i+=d[r>>2],i+=d[r<<4&63],i+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],i+=d[r>>10],i+=d[r>>4&63],i+=d[r<<2&63],i+="="),o.push(i),o.join("")}function A(t,r,e,n,i){var o,u,s=8*i-n-1,f=(1<<s)-1,a=f>>1,h=-7,l=e?i-1:0,c=e?-1:1,p=t[r+l];for(l+=c,o=p&(1<<-h)-1,p>>=-h,h+=s;h>0;o=256*o+t[r+l],l+=c,h-=8);for(u=o&(1<<-h)-1,o>>=-h,h+=n;h>0;u=256*u+t[r+l],l+=c,h-=8);if(0===o)o=1-a;else{if(o===f)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),o-=a}return(p?-1:1)*u*Math.pow(2,o-n)}function R(t,r,e,n,i,o){var u,s,f,a=8*o-i-1,h=(1<<a)-1,l=h>>1,c=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,d=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(s=isNaN(r)?1:0,u=h):(u=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-u))<1&&(u--,f*=2),(r+=u+l>=1?c/f:c*Math.pow(2,1-l))*f>=2&&(u++,f/=2),u+l>=h?(s=0,u=h):u+l>=1?(s=(r*f-1)*Math.pow(2,i),u+=l):(s=r*Math.pow(2,l-1)*Math.pow(2,i),u=0));i>=8;t[e+p]=255&s,p+=g,s/=256,i-=8);for(u=u<<i|s,a+=i;a>0;t[e+p]=255&u,p+=g,u/=256,a-=8);t[e+p-g]|=128*d}var _={}.toString,T=Array.isArray||function(t){return"[object Array]"==_.call(t)};S.TYPED_ARRAY_SUPPORT=void 0===g.TYPED_ARRAY_SUPPORT||g.TYPED_ARRAY_SUPPORT;var P=B();function B(){return S.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function U(t,r){if(B()<r)throw new RangeError("Invalid typed array length");return S.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=S.prototype:(null===t&&(t=new S(r)),t.length=r),t}function S(t,r,e){if(!(S.TYPED_ARRAY_SUPPORT||this instanceof S))return new S(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return I(this,t)}return j(this,t,r,e)}function j(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);S.TYPED_ARRAY_SUPPORT?(t=r).__proto__=S.prototype:t=L(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!S.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|O(r,e);t=U(t,n);var i=t.write(r,e);i!==n&&(t=t.slice(0,i));return t}(t,r,e):function(t,r){if(x(r)){var e=0|M(r.length);return 0===(t=U(t,e)).length||r.copy(t,0,0,e),t}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?U(t,0):L(t,r);if("Buffer"===r.type&&T(r.data))return L(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function Y(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function I(t,r){if(Y(r),t=U(t,r<0?0:0|M(r)),!S.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function L(t,r){var e=r.length<0?0:0|M(r.length);t=U(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function M(t){if(t>=B())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+B().toString(16)+" bytes");return 0|t}function x(t){return!(null==t||!t._isBuffer)}function O(t,r){if(x(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return at(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return ht(t).length;default:if(n)return at(t).length;r=(""+r).toLowerCase(),n=!0}}function C(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return W(this,r,e);case"utf8":case"utf-8":return G(this,r,e);case"ascii":return K(this,r,e);case"latin1":case"binary":return Q(this,r,e);case"base64":return Z(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function D(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function V(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=S.from(r,n)),x(r))return 0===r.length?-1:k(t,r,e,n,i);if("number"==typeof r)return r&=255,S.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):k(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function k(t,r,e,n,i){var o,u=1,s=t.length,f=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,s/=2,f/=2,e/=2}function a(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}if(i){var h=-1;for(o=e;o<s;o++)if(a(t,o)===a(r,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===f)return h*u}else-1!==h&&(o-=o-h),h=-1}else for(e+f>s&&(e=s-f),o=e;o>=0;o--){for(var l=!0,c=0;c<f;c++)if(a(t,o+c)!==a(r,c)){l=!1;break}if(l)return o}return-1}function N(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var u=0;u<n;++u){var s=parseInt(r.substr(2*u,2),16);if(isNaN(s))return u;t[e+u]=s}return u}function F(t,r,e,n){return lt(at(r,t.length-e),t,e,n)}function z(t,r,e,n){return lt(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function q(t,r,e,n){return z(t,r,e,n)}function J(t,r,e,n){return lt(ht(r),t,e,n)}function X(t,r,e,n){return lt(function(t,r){for(var e,n,i,o=[],u=0;u<t.length&&!((r-=2)<0);++u)n=(e=t.charCodeAt(u))>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function Z(t,r,e){return 0===r&&e===t.length?E(t):E(t.slice(r,e))}function G(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,u,s,f,a=t[i],h=null,l=a>239?4:a>223?3:a>191?2:1;if(i+l<=e)switch(l){case 1:a<128&&(h=a);break;case 2:128==(192&(o=t[i+1]))&&(f=(31&a)<<6|63&o)>127&&(h=f);break;case 3:o=t[i+1],u=t[i+2],128==(192&o)&&128==(192&u)&&(f=(15&a)<<12|(63&o)<<6|63&u)>2047&&(f<55296||f>57343)&&(h=f);break;case 4:o=t[i+1],u=t[i+2],s=t[i+3],128==(192&o)&&128==(192&u)&&128==(192&s)&&(f=(15&a)<<18|(63&o)<<12|(63&u)<<6|63&s)>65535&&f<1114112&&(h=f)}null===h?(h=65533,l=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=l}return function(t){var r=t.length;if(r<=H)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=H));return e}(n)}S.poolSize=8192,S._augment=function(t){return t.__proto__=S.prototype,t},S.from=function(t,r,e){return j(null,t,r,e)},S.TYPED_ARRAY_SUPPORT&&(S.prototype.__proto__=Uint8Array.prototype,S.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&S[Symbol.species]),S.alloc=function(t,r,e){return function(t,r,e,n){return Y(r),r<=0?U(t,r):void 0!==e?"string"==typeof n?U(t,r).fill(e,n):U(t,r).fill(e):U(t,r)}(null,t,r,e)},S.allocUnsafe=function(t){return I(null,t)},S.allocUnsafeSlow=function(t){return I(null,t)},S.isBuffer=ct,S.compare=function(t,r){if(!x(t)||!x(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},S.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},S.concat=function(t,r){if(!T(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return S.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=S.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(!x(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},S.byteLength=O,S.prototype._isBuffer=!0,S.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)D(this,r,r+1);return this},S.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)D(this,r,r+3),D(this,r+1,r+2);return this},S.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)D(this,r,r+7),D(this,r+1,r+6),D(this,r+2,r+5),D(this,r+3,r+4);return this},S.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?G(this,0,t):C.apply(this,arguments)},S.prototype.equals=function(t){if(!x(t))throw new TypeError("Argument must be a Buffer");return this===t||0===S.compare(this,t)},S.prototype.inspect=function(){var t="";return this.length>0&&(t=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(t+=" ... ")),"<Buffer "+t+">"},S.prototype.compare=function(t,r,e,n,i){if(!x(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),u=(e>>>=0)-(r>>>=0),s=Math.min(o,u),f=this.slice(n,i),a=t.slice(r,e),h=0;h<s;++h)if(f[h]!==a[h]){o=f[h],u=a[h];break}return o<u?-1:u<o?1:0},S.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},S.prototype.indexOf=function(t,r,e){return V(this,t,r,e,!0)},S.prototype.lastIndexOf=function(t,r,e){return V(this,t,r,e,!1)},S.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return N(this,t,r,e);case"utf8":case"utf-8":return F(this,t,r,e);case"ascii":return z(this,t,r,e);case"latin1":case"binary":return q(this,t,r,e);case"base64":return J(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return X(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},S.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var H=4096;function K(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function Q(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function W(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=ft(t[o]);return i}function $(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function tt(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function rt(t,r,e,n,i,o){if(!x(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function et(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function nt(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function it(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function ot(t,r,e,n,i){return i||it(t,0,e,4),R(t,r,e,n,23,4),e+4}function ut(t,r,e,n,i){return i||it(t,0,e,8),R(t,r,e,n,52,8),e+8}S.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),S.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=S.prototype;else{var i=r-t;e=new S(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},S.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||tt(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},S.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||tt(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},S.prototype.readUInt8=function(t,r){return r||tt(t,1,this.length),this[t]},S.prototype.readUInt16LE=function(t,r){return r||tt(t,2,this.length),this[t]|this[t+1]<<8},S.prototype.readUInt16BE=function(t,r){return r||tt(t,2,this.length),this[t]<<8|this[t+1]},S.prototype.readUInt32LE=function(t,r){return r||tt(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},S.prototype.readUInt32BE=function(t,r){return r||tt(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},S.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||tt(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},S.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||tt(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},S.prototype.readInt8=function(t,r){return r||tt(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},S.prototype.readInt16LE=function(t,r){r||tt(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},S.prototype.readInt16BE=function(t,r){r||tt(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},S.prototype.readInt32LE=function(t,r){return r||tt(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},S.prototype.readInt32BE=function(t,r){return r||tt(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},S.prototype.readFloatLE=function(t,r){return r||tt(t,4,this.length),A(this,t,!0,23,4)},S.prototype.readFloatBE=function(t,r){return r||tt(t,4,this.length),A(this,t,!1,23,4)},S.prototype.readDoubleLE=function(t,r){return r||tt(t,8,this.length),A(this,t,!0,52,8)},S.prototype.readDoubleBE=function(t,r){return r||tt(t,8,this.length),A(this,t,!1,52,8)},S.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||rt(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},S.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||rt(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},S.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||rt(this,t,r,1,255,0),S.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},S.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||rt(this,t,r,2,65535,0),S.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):et(this,t,r,!0),r+2},S.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||rt(this,t,r,2,65535,0),S.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):et(this,t,r,!1),r+2},S.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||rt(this,t,r,4,4294967295,0),S.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):nt(this,t,r,!0),r+4},S.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||rt(this,t,r,4,4294967295,0),S.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):nt(this,t,r,!1),r+4},S.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);rt(this,t,r,e,i-1,-i)}var o=0,u=1,s=0;for(this[r]=255&t;++o<e&&(u*=256);)t<0&&0===s&&0!==this[r+o-1]&&(s=1),this[r+o]=(t/u>>0)-s&255;return r+e},S.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);rt(this,t,r,e,i-1,-i)}var o=e-1,u=1,s=0;for(this[r+o]=255&t;--o>=0&&(u*=256);)t<0&&0===s&&0!==this[r+o+1]&&(s=1),this[r+o]=(t/u>>0)-s&255;return r+e},S.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||rt(this,t,r,1,127,-128),S.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},S.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||rt(this,t,r,2,32767,-32768),S.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):et(this,t,r,!0),r+2},S.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||rt(this,t,r,2,32767,-32768),S.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):et(this,t,r,!1),r+2},S.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||rt(this,t,r,4,2147483647,-2147483648),S.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):nt(this,t,r,!0),r+4},S.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||rt(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),S.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):nt(this,t,r,!1),r+4},S.prototype.writeFloatLE=function(t,r,e){return ot(this,t,r,!0,e)},S.prototype.writeFloatBE=function(t,r,e){return ot(this,t,r,!1,e)},S.prototype.writeDoubleLE=function(t,r,e){return ut(this,t,r,!0,e)},S.prototype.writeDoubleBE=function(t,r,e){return ut(this,t,r,!1,e)},S.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!S.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},S.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!S.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var u=x(t)?t:at(new S(t,n).toString()),s=u.length;for(o=0;o<e-r;++o)this[o+r]=u[o%s]}return this};var st=/[^+\/0-9A-Za-z-_]/g;function ft(t){return t<16?"0"+t.toString(16):t.toString(16)}function at(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function ht(t){return function(t){var r,e,n,i,o,u;v||m();var s=t.length;if(s%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o="="===t[s-2]?2:"="===t[s-1]?1:0,u=new w(3*s/4-o),n=o>0?s-4:s;var f=0;for(r=0,e=0;r<n;r+=4,e+=3)i=y[t.charCodeAt(r)]<<18|y[t.charCodeAt(r+1)]<<12|y[t.charCodeAt(r+2)]<<6|y[t.charCodeAt(r+3)],u[f++]=i>>16&255,u[f++]=i>>8&255,u[f++]=255&i;return 2===o?(i=y[t.charCodeAt(r)]<<2|y[t.charCodeAt(r+1)]>>4,u[f++]=255&i):1===o&&(i=y[t.charCodeAt(r)]<<10|y[t.charCodeAt(r+1)]<<4|y[t.charCodeAt(r+2)]>>2,u[f++]=i>>8&255,u[f++]=255&i),u}(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(st,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function lt(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function ct(t){return null!=t&&(!!t._isBuffer||pt(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&pt(t.slice(0,0))}(t))}function pt(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var gt=p(Object.freeze({__proto__:null,Buffer:S,INSPECT_MAX_BYTES:50,SlowBuffer:function(t){return+t!=t&&(t=0),S.alloc(+t)},isBuffer:ct,kMaxLength:P})).Buffer;var dt=e()?gt:function(){throw new Error("not implemented")};var yt=r(dt.allocUnsafe)?function(t){if(!n(t))throw new TypeError(o("invalid argument. Must provide a nonnegative integer. Value: `%s`.",t));return dt.allocUnsafe(t)}:function(t){if(!n(t))throw new TypeError(o("invalid argument. Must provide a nonnegative integer. Value: `%s`.",t));return new dt(t)};var wt=r(dt.from)?function(t){if(!u(t))throw new TypeError(o("invalid argument. Must provide an array-like object. Value: `%s`.",t));return dt.from(t)}:function(t){if(!u(t))throw new TypeError(o("invalid argument. Must provide an array-like object. Value: `%s`.",t));return new dt(t)},vt=s?parseInt(s.split(".")[0],10):-1;var mt=r(dt.from)&&vt>=5?function(t,r,e){var n,u;if(!f(t))throw new TypeError(o("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(arguments.length>1){if(!i(r))throw new TypeError(o("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(r>t.byteLength)throw new RangeError(o("invalid argument. Second argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",r));if(n=r,arguments.length>2){if(!i(e))throw new TypeError(o("invalid argument. Last argument must be a nonnegative integer. Value: `%s`.",e));if(e>t.byteLength)throw new RangeError(o("invalid argument. Last argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",e));u=e}else u=t.byteLength-n}else n=0,u=t.byteLength;return 0===u&&vt<6?dt.from([]):dt.from(t,n,u)}:function(t,r,e){var n;if(!f(t))throw new TypeError(o("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(arguments.length>1){if(!i(r))throw new TypeError(o("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(r>t.byteLength)throw new RangeError(o("invalid argument. Second argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",r));if(arguments.length>2){if(!i(e))throw new TypeError(o("invalid argument. Last argument must be a nonnegative integer. Value: `%s`.",e));if(e>t.byteLength)throw new RangeError(o("invalid argument. Last argument must not exceed the number of bytes in the input ArrayBuffer. Value: `%s`.",e));n=e}else n=t.byteLength-r;return wt(new a(t,r,n))}return vt<3?wt(new a(t)):0===t.byteLength?new dt([]):new dt(t)};var bt=r(dt.from)?function(t){if(!h(t))throw new TypeError(o("invalid argument. Must provide a Buffer. Value: `%s`.",t));return dt.from(t)}:function(t){if(!h(t))throw new TypeError(o("invalid argument. Must provide a Buffer. Value: `%s`.",t));return new dt(t)};var Et=r(dt.from)?function(t,r){if(!l(t))throw new TypeError(o("invalid argument. First argument must be a string. Value: `%s`.",t));if(arguments.length>1){if(!l(r))throw new TypeError(o("invalid argument. Second argument must be a string. Value: `%s`.",r));return dt.from(t,r)}return dt.from(t,"utf8")}:function(t,r){if(!l(t))throw new TypeError(o("invalid argument. First argument must be a string. Value: `%s`.",t));if(arguments.length>1){if(!l(r))throw new TypeError(o("invalid argument. Second argument must be a string. Value: `%s`.",r));return new dt(t,r)}return new dt(t,"utf8")};function At(t,r){return r&&"Buffer"===r.type&&c(r.data)?wt(r.data):r}function Rt(t){var r,e;if(!h(t))throw new TypeError(o("invalid argument. Must provide a Buffer. Value: `%s`.",t));for((r={}).type="Buffer",r.data=[],e=0;e<t.length;e++)r.data.push(t[e]);return r}var _t={};t(_t,"allocUnsafe",yt),t(_t,"Buffer",dt),t(_t,"array2buffer",wt),t(_t,"arraybuffer2buffer",mt),t(_t,"copyBuffer",bt),t(_t,"string2buffer",Et),t(_t,"reviveBuffer",At),t(_t,"buffer2json",Rt);export{dt as Buffer,yt as allocUnsafe,wt as array2buffer,mt as arraybuffer2buffer,Rt as buffer2json,bt as copyBuffer,_t as default,At as reviveBuffer,Et as string2buffer};
//# sourceMappingURL=index.mjs.map
