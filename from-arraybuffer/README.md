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

# arraybuffer2buffer

> Allocate a [buffer][@stdlib/buffer/ctor] from an [ArrayBuffer][@stdlib/array/buffer].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var arraybuffer2buffer = require( '@stdlib/buffer/from-arraybuffer' );
```

#### arraybuffer2buffer( buf\[, byteOffset\[, length]] )

Allocates a [buffer][@stdlib/buffer/ctor] from an [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var ab = new ArrayBuffer( 10 );

var buf = arraybuffer2buffer( ab );
// returns <Buffer>
```

By default, the function allocates a [buffer][@stdlib/buffer/ctor] starting from the first byte of the provided [`ArrayBuffer`][@stdlib/array/buffer]. To specify an alternative starting index, provide a `byteOffset`.

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var ab = new ArrayBuffer( 10 );

var buf = arraybuffer2buffer( ab, 2 );
// returns <Buffer>

var len = buf.length;
// returns 8
```

By default, the function allocates a [buffer][@stdlib/buffer/ctor] until the end of the provided [`ArrayBuffer`][@stdlib/array/buffer]. To allocate a specified number of [`ArrayBuffer`][@stdlib/array/buffer] bytes, provide a `length`.

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var ab = new ArrayBuffer( 10 );

var buf = arraybuffer2buffer( ab, 2, 4 );
// returns <Buffer>

var len = buf.length;
// returns 4
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

The behavior of this function varies across Node.js versions due to changes in the underlying Node.js APIs:

-   `<3.0.0`: the function copies [`ArrayBuffer`][@stdlib/array/buffer] bytes to a new [`Buffer`][@stdlib/buffer/ctor] instance.
-   `>=3.0.0` and `<5.10.0`: if provided a `byteOffset`, the function copies [`ArrayBuffer`][@stdlib/array/buffer] bytes to a new [`Buffer`][@stdlib/buffer/ctor] instance; otherwise, the function returns a view of an [`ArrayBuffer`][@stdlib/array/buffer] without copying the underlying memory.
-   `<6.0.0`: if provided an empty [`ArrayBuffer`][@stdlib/array/buffer], the function returns an empty [`Buffer`][@stdlib/buffer/ctor] which is **not** an [`ArrayBuffer`][@stdlib/array/buffer] view.
-   `>=6.0.0`: the function returns a view of an [`ArrayBuffer`][@stdlib/array/buffer] without copying the underlying memory.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var Float64Array = require( '@stdlib/array/float64' );
var randu = require( '@stdlib/random/base/randu' );
var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var arraybuffer2buffer = require( '@stdlib/buffer/from-arraybuffer' );

var high;
var view;
var low;
var buf;
var ab;
var i;

// Allocate an ArrayBuffer:
ab = new ArrayBuffer( 64 );

// Create a Float64 view and set random values:
view = new Float64Array( ab );
for ( i = 0; i < view.length; i++ ) {
    view[ i ] = randu();
}

// Create a new buffer from the ArrayBuffer:
buf = arraybuffer2buffer( ab );

// Read the high and low words for each double:
for ( i = 0; i < view.length; i++ ) {
    if ( IS_LITTLE_ENDIAN ) {
        high = buf.readUInt32LE( (8*i)+4 );
        low = buf.readUInt32LE( 8*i );
    } else {
        high = buf.readUInt32BE( 8*i );
        low = buf.readUInt32BE( (8*i)+4 );
    }
    console.log( 'Value: %d. High: %d. Low: %d.', view[ i ], high, low );
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
-   <span class="package-name">[`@stdlib/buffer/from-buffer`][@stdlib/buffer/from-buffer]</span><span class="delimiter">: </span><span class="description">copy buffer data to a new Buffer instance.</span>
-   <span class="package-name">[`@stdlib/buffer/from-string`][@stdlib/buffer/from-string]</span><span class="delimiter">: </span><span class="description">allocate a buffer containing a provided string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer

<!-- <related-links> -->

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer/tree/main/ctor

[@stdlib/buffer/from-array]: https://github.com/stdlib-js/buffer/tree/main/from-array

[@stdlib/buffer/from-buffer]: https://github.com/stdlib-js/buffer/tree/main/from-buffer

[@stdlib/buffer/from-string]: https://github.com/stdlib-js/buffer/tree/main/from-string

<!-- </related-links> -->

</section>

<!-- /.links -->
