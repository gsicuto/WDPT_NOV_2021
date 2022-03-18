const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(10)

const pass1 = 'ola amigos'
const pass2 = 'ola amigos'

const hash1 = bcrypt.hashSync(pass1, salt)
const hash1_2 = bcrypt.hashSync(pass1)
const hash2 = bcrypt.hashSync(pass2)

console.log(salt)
console.log(pass1, 'hash --->', hash1)
console.log(pass2, 'hash --->', hash2)
console.log(pass1, 'hash --->', hash1_2)

const compare1 = bcrypt.compareSync(pass1, hash1)
const compare2 = bcrypt.compareSync(pass2, hash1)

console.log(compare1)
console.log(compare2)