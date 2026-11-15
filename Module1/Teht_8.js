/*
Write a program that prompts the user for the start and end year.
The program prints all leap years from the interval given by the user.
Printing is done in an unordered list to the HTML document. (3p)
*/

'use strict';

//lue alku- ja loppu vuosi
let alkuvuosi = parseInt(prompt("Anna alkuvuosi"));
let loppuvuosi = parseInt(prompt("Anna loppuvuosi"));

//etsitään sivulta haluttu html elementti, 'let' voi korvata 'const'
let vastaus = document.querySelector('#lista');
//let vastaus = document.getElementById('lista');

//käydään läpi jokainen vuosi väliltä alkuvuosi => loppuvuosi
for (let vuosi = alkuvuosi; vuosi < loppuvuosi; vuosi += 1)
{
    //tutkitaan onko vuosi i karkausvuosi (&& = and, || = or)
    if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0))
    {
        //vuosi on karkausvuosi
        vastaus.innerHTML += `<li>Vuosi ${vuosi} on karkausvuosi</li>` ;
    }
}

