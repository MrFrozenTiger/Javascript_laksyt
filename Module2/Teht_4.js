/*
Write a program that asks the user for numbers until the user gives
zero. The given numbers are printed in the console from the largest to
the smallest. (2p)
*/


'use strict';

let lista = [];

while (true)
{
    let luku = parseInt(prompt("Syötä kokonaisluku (Nolla lopettaa):"));
    lista.push(luku);
    if (luku === 0)
    {
        break;
    }
}

lista.sort((a, b) => b - a);

for (let i of lista.reverse())
{
    console.log(i);
}