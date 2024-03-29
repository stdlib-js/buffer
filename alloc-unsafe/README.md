<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# allocUnsafe

> Allocate a [buffer][@stdlib/buffer/ctor] having a specified number of bytes.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );
```

#### allocUnsafe( size )

**Unsafely** allocates a [buffer][@stdlib/buffer/ctor] having a specified number of bytes.

```javascript
var buf = allocUnsafe( 10 );
// returns <Buffer>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The underlying memory of returned [`Buffer`][@stdlib/buffer/ctor] instances is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
-   When the `size` is less than half the pool size (specified on the [`Buffer`][@stdlib/buffer/ctor] constructor in modern Node.js environments), memory is allocated from the [`Buffer`][@stdlib/buffer/ctor] pool for faster allocation of new [`Buffer`][@stdlib/buffer/ctor] instances.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );

var buf;
var i;

// Repeatedly unsafely allocate memory and inspect the buffer contents...
for ( i = 0; i < 100; i++ ) {
    buf = allocUnsafe( 100 );
    console.log( buf.toString() );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/buffer/ctor`][@stdlib/buffer/ctor]</span><span class="delimiter">: </span><span class="description">Buffer.</span>
-   <span class="package-name">[`@stdlib/buffer/from-array`][@stdlib/buffer/from-array]</span><span class="delimiter">: </span><span class="description">allocate a buffer using an octet array.</span>
-   <span class="package-name">[`@stdlib/buffer/from-arraybuffer`][@stdlib/buffer/from-arraybuffer]</span><span class="delimiter">: </span><span class="description">allocate a buffer from an ArrayBuffer.</span>
-   <span class="package-name">[`@stdlib/buffer/from-buffer`][@stdlib/buffer/from-buffer]</span><span class="delimiter">: </span><span class="description">copy buffer data to a new Buffer instance.</span>
-   <span class="package-name">[`@stdlib/buffer/from-string`][@stdlib/buffer/from-string]</span><span class="delimiter">: </span><span class="description">allocate a buffer containing a provided string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer/tree/main/ctor

[@stdlib/buffer/from-array]: https://github.com/stdlib-js/buffer/tree/main/from-array

[@stdlib/buffer/from-arraybuffer]: https://github.com/stdlib-js/buffer/tree/main/from-arraybuffer

[@stdlib/buffer/from-buffer]: https://github.com/stdlib-js/buffer/tree/main/from-buffer

[@stdlib/buffer/from-string]: https://github.com/stdlib-js/buffer/tree/main/from-string

<!-- </related-links> -->

</section>

<!-- /.links -->
