function LoginUserMessage(username = "Mehri"){
    if(!username){
        console.log("Please enter a usename")
    }

    return `${username} just Logged In`
}

const UserLoggedIn = LoginUserMessage()

//console.log(UserLoggedIn)


