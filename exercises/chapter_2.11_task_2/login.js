'use strict';

let ADMIN = 'admin';
let PASSWORD = "I'm an admin";

let login = prompt('Who is it');

if (login === ADMIN) {
    let password = prompt('Enter your password')
    if (password === PASSWORD)
        alert('Hello!')
    else if (password === null)
        alert('Canceled')
    else
        alert('Incorrect password')
} else if (login === null)
    alert('Canceled')
 else
    alert("I don't know you")
