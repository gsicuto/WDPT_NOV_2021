const bcrypt = require('bcryptjs')


for (let saltRounds = 10; saltRounds < 19; saltRounds +=1 ){
    console.time(`bcrypt | cost :${saltRounds}, time to hash`)
    bcrypt.hashSync('qualquer', saltRounds)
    console.timeEnd(`bcrypt | cost :${saltRounds}, time to hash`)
}