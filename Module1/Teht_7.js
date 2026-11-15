/*
Write a program that rolls user defined number of dice
and displays the sum of the results of the dice rolls.(2p)
*/

'use strict';

let heitot = 0
let sum = 0

//kysytään montako kertaa noppaa heitetään
let n = prompt("Syötä heittojen määrä");

//heitetään noppaa n kertaa
for (let i = 0; i < n; i += 1)
{
    //arvotaan silmälukuja
    let arvo = Math.floor(Math.random() * 6) + 1;
    sum += arvo;
    heitot += 1;
}

//paikannetaan oikea html elementti
let viesti = document.querySelector('#roller');

//muokataan otsikkoa
viesti.innerHTML =  "Noppaa heitettin " + heitot +
                    " kertaa ja silmälukujen arvo on yhteensä " +
                    sum + ".";