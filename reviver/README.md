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

# reviveBuffer

> Revive a JSON-serialized [Buffer][@stdlib/buffer/ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reviveBuffer = require( '@stdlib/buffer/reviver' );
```

#### reviveBuffer( key, value )

Revives a JSON-serialized [`Buffer`][@stdlib/buffer/ctor].

```javascript
var parseJSON = require( '@stdlib/utils/parse-json' );

var str = '{"type":"Buffer","data":[5,3]}';

var buf = parseJSON( str, reviveBuffer );
// returns <Buffer>[ 5, 3 ]
```

For details on the JSON serialization format, see [`@stdlib/buffer/to-json`][@stdlib/buffer/to-json].

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
var array2buffer = require( '@stdlib/buffer/from-array' );
var parseJSON = require( '@stdlib/utils/parse-json' );
var buffer2json = require( '@stdlib/buffer/to-json' );
var reviveBuffer = require( '@stdlib/buffer/reviver' );

var buf = array2buffer( [ 1, 2 ] );
var str = JSON.stringify( buffer2json( buf ) );
console.log( str );
// => '{"type":"Buffer","data":[1,2]}'

var out = parseJSON( str, reviveBuffer );
if ( out instanceof Error ) {
    throw out;
}
console.log( out );
// => <Buffer>[ 1, 2 ]
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

-   <span class="package-name">[`@stdlib/buffer/to-json`][@stdlib/buffer/to-json]</span><span class="delimiter">: </span><span class="description">return a JSON representation of a Buffer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer/tree/main/ctor

[@stdlib/buffer/to-json]: https://github.com/stdlib-js/buffer/tree/main/to-json

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
