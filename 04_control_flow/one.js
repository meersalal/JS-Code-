const userloggenIn = true
const debitCard = false
const LoggenInFormGoggle = false
const LoggedInFromEmail = true

if (userloggenIn == true && debitCard == true) {
    console.log('Allow to buy course');
}

if (LoggenInFormGoggle == true || LoggedInFromEmail == true) {
    console.log("User Logged In");
}