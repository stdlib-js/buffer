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

# string2buffer

> Allocate a [buffer][@stdlib/buffer/ctor] containing a provided string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var string2buffer = require( '@stdlib/buffer/from-string' );
```

#### string2buffer( str\[, encoding] )

Allocates a [buffer][@stdlib/buffer/ctor] containing a provided `string`.

```javascript
var buf = string2buffer( 'beep boop' );
// returns <Buffer>
```

The default character encoding is `utf8`. To specify an alternative encoding, provide an `encoding` argument.

```javascript
var buf = string2buffer( '7468697320697320612074c3a97374', 'hex' );
// returns <Buffer>
```

The following `encodings` are supported:

-   `utf8` (`utf-8`)
-   `hex`
-   `binary`
-   `ascii`
-   `ucs2` (`ucs-2`)
-   `base64`

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
var randu = require( '@stdlib/random/base/randu' );
var randint = require( '@stdlib/random/base/discrete-uniform' );
var string2buffer = require( '@stdlib/buffer/from-string' );

// Create a buffer from a string:
var buf = string2buffer( 'beep boop bop' );
console.log( buf.toString() );

// Generate random strings...
var i;
var j;
for ( i = 0; i < 100; i++ ) {
    j = randint( 0, buf.length );
    if ( randu() < 2/buf.length ) {
        buf[ j ] = 32; // space
    } else {
        buf[ j ] = randint( 97, 122 );
    }
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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer/tree/main/ctor

[@stdlib/buffer/from-array]: https://github.com/stdlib-js/buffer/tree/main/from-array

[@stdlib/buffer/from-arraybuffer]: https://github.com/stdlib-js/buffer/tree/main/from-arraybuffer

[@stdlib/buffer/from-buffer]: https://github.com/stdlib-js/buffer/tree/main/from-buffer

<!-- </related-links> -->

</section>

<!-- /.links -->
