/*
Write a program that prompts for three integers. The program prints
the sum, product and average of the numbers to the HTML document. (3p)
*/

//muuttujat
let n = 3
let sum = 0
let product = 1

//kysytään käyttäjältä kokonaislukuja n kertaa
for (let i = 0; i < n; i += 1)
{
    luku = parseInt(prompt("Syötä kokonaisluku"));
    //ynnätään
    sum += luku;
    //kerrotaan
    product = product * luku;
}

//keskiarvioidaan
let average = sum/n

//paikannetaan oikea html elementti
let viesti = document.querySelector('#maths');

//muokataan otsikkoa
viesti.innerHTML =  "Lukujen summa on " + sum +
                    ", tulo on " + product + "" +
                    " ja keskiarvo on " + average;