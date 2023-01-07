//Modules  - encapsulated code that only share minimum information
//CommonJs - Every file is a module by default

const names = require('./4_names');
const sayHi = require('./5_utils');
const data = require('./6_alt_flav');
require('./7_mind_grenade')

console.log(data)

sayHi(names.john);
sayHi(names.peter);
