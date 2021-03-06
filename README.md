<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Buffer

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Buffer namespace.

<section class="installation">

## Installation

```bash
npm install @stdlib/buffer
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/buffer' );
```

#### ns

Buffer namespace.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`allocUnsafe( size )`][@stdlib/buffer/alloc-unsafe]</span><span class="delimiter">: </span><span class="description">allocate a buffer having a specified number of bytes.</span>
-   <span class="signature">[`Buffer()`][@stdlib/buffer/ctor]</span><span class="delimiter">: </span><span class="description">Buffer constructor.</span>
-   <span class="signature">[`arraybuffer2buffer( buf[, byteOffset[, length]] )`][@stdlib/buffer/from-arraybuffer]</span><span class="delimiter">: </span><span class="description">allocate a buffer from an ArrayBuffer.</span>
-   <span class="signature">[`copyBuffer( buffer )`][@stdlib/buffer/from-buffer]</span><span class="delimiter">: </span><span class="description">copy buffer data to a new `Buffer` instance.</span>
-   <span class="signature">[`string2buffer( str[, encoding] )`][@stdlib/buffer/from-string]</span><span class="delimiter">: </span><span class="description">allocate a buffer containing a provided string.</span>
-   <span class="signature">[`reviver( key, value )`][@stdlib/buffer/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized Buffer.</span>
-   <span class="signature">[`toJSON( buffer )`][@stdlib/buffer/to-json]</span><span class="delimiter">: </span><span class="description">return a JSON representation of a Buffer.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/buffer' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/buffer.svg
[npm-url]: https://npmjs.org/package/@stdlib/buffer

[test-image]: https://github.com/stdlib-js/buffer/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/buffer/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/buffer/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/buffer?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/buffer.svg
[dependencies-url]: https://david-dm.org/stdlib-js/buffer/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/buffer/tree/deno
[umd-url]: https://github.com/stdlib-js/buffer/tree/umd
[esm-url]: https://github.com/stdlib-js/buffer/tree/esm
[branches-url]: https://github.com/stdlib-js/buffer/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/buffer/main/LICENSE

<!-- <toc-links> -->

[@stdlib/buffer/alloc-unsafe]: https://github.com/stdlib-js/buffer/tree/main/alloc-unsafe

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer/tree/main/ctor

[@stdlib/buffer/from-arraybuffer]: https://github.com/stdlib-js/buffer/tree/main/from-arraybuffer

[@stdlib/buffer/from-buffer]: https://github.com/stdlib-js/buffer/tree/main/from-buffer

[@stdlib/buffer/from-string]: https://github.com/stdlib-js/buffer/tree/main/from-string

[@stdlib/buffer/reviver]: https://github.com/stdlib-js/buffer/tree/main/reviver

[@stdlib/buffer/to-json]: https://github.com/stdlib-js/buffer/tree/main/to-json

<!-- </toc-links> -->

</section>

<!-- /.links -->
