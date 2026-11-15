/*
Write a program that prompts for user's name and then greets the user.
Print the result to the HTML document: Hello, Name! (2p)
*/

'use strict';

//kysytään käyttäjän nimeä
let nimi = prompt("Anna nimesi");

//paikannetaan oikea html elementti
let viesti = document.querySelector('#tervehdys');

//muokataan otsikkoa
viesti.innerHTML = "Hello, " + nimi + "!";
