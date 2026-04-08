const prompt = require("prompt-sync")();

let a = "admin"
let b = 1234
let attempts = 3
console.log("you have 3 attempts to solve");
while (attempts > 0) {
   let username = prompt("enter your username:")
    let password = prompt("enter your password:")
    if (username == a && password == b) {
        console.log("login successfully")
        break;
    } else {

        console.log("wrong credentials");
        attempts -= 1

    }
    if (attempts === 0) {
        console.log("Account locked");

    } else {

      console.log("attempts left", +attempts);
        }
}