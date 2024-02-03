const accountId = 12334
let accountEmail = "meersalal1@mai.com"
var accountPasswaord = "12345" 
accountCity = "lahore"
let accountState
/*
Not use var
because of issue in block scop and functional scop
*/

accountEmail = "salal1@gmail.com"
accountPasswaord = "5678"
accountCity = "karachi"

console.log(accountId);

console.table([accountId, accountEmail, accountPasswaord, accountCity, accountState])
