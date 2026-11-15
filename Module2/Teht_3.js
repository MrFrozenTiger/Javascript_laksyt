/*
Write a program that asks for the names of six dogs. The program
prints dog names to unordered list <ul> in reverse alphabetical order. (2p)
*/

'use strict';

let vastaus = document.querySelector('#koira');
let lista = [];

for (let i = 0; i < 6; i += 1) {
  let nimi = prompt("Syötä koiran nimi");
  lista.push(nimi);
}

lista.sort().reverse();

for (let nimi of lista)
{
  vastaus.innerHTML += `<li>${nimi}</li>`;
}
