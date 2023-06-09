// Taken from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/json-bigint

import JSONBig = require('./index');

const jsonString = `{ "a": "b"}`;
const jsonObject = { a: 'b' };

// $ExpectType any
JSONBig({
    useNativeBigInt: true,
    alwaysParseAsBig: false,
    useOldNumberParser: true,
    constructorAction: 'error',
    protoAction: 'preserve',
    storeAsString: undefined,
    strict: true,
}).parse(jsonString);

JSONBig.parse(jsonString); // $ExpectType any

JSONBig().stringify(jsonObject); // $ExpectType string
JSONBig.stringify(jsonObject); // $ExpectType string