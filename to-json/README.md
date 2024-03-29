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

# buffer2json

> Return a [JSON][json] representation of a [Buffer][@stdlib/buffer/ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var buffer2json = require( '@stdlib/buffer/to-json' );
```

#### buffer2json( buffer )

Returns a [JSON][json] representation of a [`Buffer`][@stdlib/buffer/ctor].

```javascript
var array2buffer = require( '@stdlib/buffer/from-array' );

var buf = array2buffer( [ 1, 2 ] );

var json = buffer2json( buf );
/* returns
    {
        'type': 'Buffer',
        'data': [ 1, 2 ]
    }
*/
```

For guidance on reviving a JSON-serialized [`Buffer`][@stdlib/buffer/ctor], see [`reviver()`][@stdlib/buffer/reviver].

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
var randi = require( '@stdlib/random/base/discrete-uniform' );
var buffer2json = require( '@stdlib/buffer/to-json' );

var buf = allocUnsafe( 100 );
var i;
for ( i = 0; i < buf.length; i++ ) {
    buf[ i ] = randi( 0, 255 );
}

console.log( buffer2json( buf ) );
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

-   <span class="package-name">[`@stdlib/array/to-json`][@stdlib/array/to-json]</span><span class="delimiter">: </span><span class="description">return a JSON representation of a typed array.</span>
-   <span class="package-name">[`@stdlib/buffer/reviver`][@stdlib/buffer/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized Buffer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[json]: http://www.json.org/

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer/tree/main/ctor

<!-- <related-links> -->

[@stdlib/array/to-json]: https://github.com/stdlib-js/array-to-json

[@stdlib/buffer/reviver]: https://github.com/stdlib-js/buffer/tree/main/reviver

<!-- </related-links> -->

</section>

<!-- /.links -->
