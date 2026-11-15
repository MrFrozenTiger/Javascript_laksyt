/*
Write a program that asks the user for the number of participants.
After this, the program asks for the names of all participants.
Finally, the program prints the names of the participants on the
web page in an ordered list (<ol>) in alphabetical order. (2p)
*/

'use strict';

//
let nimet = []

//kysytään osallistujien määrä
let n = prompt("Syötä osallistujien määrä");

//kysytään osallistujien nimet
for (let i = 0; i < n; i += 1)
{
    //lisätään nimet listaan yksi kerrallaan
    let nimi = prompt("Syötä osallistujan nimi");
    nimet.push(nimi);
}

//paikannetaan oikea html elementti
let nimilista = document.querySelector('#listaus');


nimet.sort();

for (let nimi of nimet)
{
  nimilista.innerHTML += `<li>${nimi}</li>`;
}