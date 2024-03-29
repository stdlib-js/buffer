/*
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

import array2buffer = require( './../../../from-array' );
import buffer2json = require( './index' );


// TESTS //

// The function returns an object...
{
	const buf = array2buffer( [ 1, 2 ] );
	buffer2json( buf ); // $ExpectType any
}

// The compiler throws an error if the function is provided a value other than a buffer...
{
	buffer2json( 'abc' ); // $ExpectError
	buffer2json( true ); // $ExpectError
	buffer2json( false ); // $ExpectError
	buffer2json( null ); // $ExpectError
	buffer2json( undefined ); // $ExpectError
	buffer2json( 5 ); // $ExpectError
	buffer2json( [] ); // $ExpectError
	buffer2json( {} ); // $ExpectError
	buffer2json( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	buffer2json(); // $ExpectError
}
