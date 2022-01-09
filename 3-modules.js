// Modules
// CommonJS, every file is module (by defult)
// Modules - Encapsuled Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-granade')

sayHi('bado')
sayHi(names.ivan)
sayHi(names.dusan)