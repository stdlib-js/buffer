/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name allocUnsafe
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/buffer/alloc-unsafe}
*/
setReadOnly( ns, 'allocUnsafe', require( './../alloc-unsafe' ) );

/**
* @name Buffer
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/buffer/ctor}
*/
setReadOnly( ns, 'Buffer', require( './../ctor' ) );

/**
* @name array2buffer
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/buffer/from-arraybuffer}
*/
setReadOnly( ns, 'array2buffer', require( './../from-array' ) );

/**
* @name arraybuffer2buffer
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/buffer/from-arraybuffer}
*/
setReadOnly( ns, 'arraybuffer2buffer', require( './../from-arraybuffer' ) );

/**
* @name copyBuffer
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/buffer/from-buffer}
*/
setReadOnly( ns, 'copyBuffer', require( './../from-buffer' ) );

/**
* @name string2buffer
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/buffer/from-string}
*/
setReadOnly( ns, 'string2buffer', require( './../from-string' ) );

/**
* @name reviveBuffer
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/buffer/reviver}
*/
setReadOnly( ns, 'reviveBuffer', require( './../reviver' ) );

/**
* @name buffer2json
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/buffer/to-json}
*/
setReadOnly( ns, 'buffer2json', require( './../to-json' ) );


// EXPORTS //

module.exports = ns;
