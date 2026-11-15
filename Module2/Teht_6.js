/*
Write a function that returns a random dice roll between 1 and 6.
The function should not have any parameters. Write a main program that
rolls the dice until the result is 6. The main program should print out
the result of each roll in an unordered list (<ul>). (2p)
*/

'use strict';

//palauttaa satunnaisen kokonaisluvun väliltä yksi - kuusi
function heita_noppaa()
{
    //tämä höskä antaa kokonaisluvun 1, 2, 3, 4, 5 tai 6
    let luku = Math.floor(Math.random() * 6) + 1;
    return luku;
}

let luku;
do
{
    luku = heita_noppaa();
    document.getElementById("kissa").innerHTML += `<li>${luku}</li>`;
}
while (luku != 6);