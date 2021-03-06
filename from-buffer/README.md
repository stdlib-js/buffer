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

# copyBuffer

> Copy [buffer][@stdlib/buffer/ctor] data to a new [`Buffer`][@stdlib/buffer/ctor] instance.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var copyBuffer = require( '@stdlib/buffer/from-buffer' );
```

#### copyBuffer( buffer )

Copies [buffer][@stdlib/buffer/ctor] data to a new [`Buffer`][@stdlib/buffer/ctor] instance.

```javascript
var array2buffer = require( '@stdlib/buffer/from-array' );

var b1 = array2buffer( [ 1, 2, 3, 4 ] );
// returns <Buffer>[ 1, 2, 3, 4 ]

var b2 = copyBuffer( b1 );
// returns <Buffer>[ 1, 2, 3, 4 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );
var copyBuffer = require( '@stdlib/buffer/from-buffer' );

var bool;
var b1;
var b2;
var i;

// Allocate a new buffer:
b1 = allocUnsafe( 10 );

// Generate a new buffer from the existing buffer:
b2 = copyBuffer( b1 );

bool = ( b2 === b1 );
// returns false

bool = ( b2.length === b1.length );
// returns true

for ( i = 0; i < b2.length; i++ ) {
    console.log( b2[ i ] === b1[ i ] );
    // => true
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

-   <span class="package-name">[`@stdlib/buffer/alloc-unsafe`][@stdlib/buffer/alloc-unsafe]</span><span class="delimiter">: </span><span class="description">allocate a buffer having a specified number of bytes.</span>
-   <span class="package-name">[`@stdlib/buffer/ctor`][@stdlib/buffer/ctor]</span><span class="delimiter">: </span><span class="description">Buffer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/buffer/alloc-unsafe]: https://github.com/stdlib-js/buffer/tree/main/alloc-unsafe

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer/tree/main/ctor

<!-- </related-links> -->

</section>

<!-- /.links -->
