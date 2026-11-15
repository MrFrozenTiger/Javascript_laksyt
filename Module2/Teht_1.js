/*
Write a program that prompts the user for five numbers and prints
them in the reverse order they were entered (not reverse sorted).
Print the result to the console.(2p)
*/

'use strict';

//luodaan lista
let luvut = [];

//toistetaan viisi kertaa
for (let i = 0; i < 5; i += 1)
{
    //pyydetään numeroa ja lisätään listaan.
    let luku = parseInt(prompt(`Syötä ${i+1}. luku`));
    luvut.push(luku)
    //luvut.push(+prompt(`Syötä ${i+1}. luku`));
}

//luetaan lista takaperin
for (let j = 4; j < 0; j -= 1)
{
    console.log(luvut[j]);
}

