/*
In the Harry Potter children's books, the sorting hat assigns a new
student at Hogwarts School of Witchcraft and Wizardry to one of the four
classes, which are Gryffindor, Slytherin, Hufflepuff, and Ravenclaw.
Write an electronic sorting hat that asks for a student's name and
draws a room for that student. If you enter Anna as the name,
for example, the program prints to the HTML document
"Anna, you are Ravenclaw." (3p)
*/

'use strict';

//muuttuja
let tupa

//kysytään käyttäjän nimeä
let nimi = prompt("Anna nimesi");

//arvotaan luku yhden ja neljän väliltä
let valinta = Math.floor(Math.random() * 4) + 1;

//valitaan arvottua lukua vastaava tupa
if (valinta === 1)
{
    //Rohkelikko
    tupa = "Rohkelikko"
}
else if (valinta === 2)
{
    //Luihuinen
    tupa = "Luihuinen"
}
else if (valinta === 3)
{
    //Korpinkynsi
    tupa = "Korpinkynsi"
}
else
{
    //Puuskupuh
    tupa = "Puuskupuh"
}

//paikannetaan oikea html elementti
let viesti = document.querySelector('#koira');

//muokataan otsikkoa
viesti.innerHTML =  '"' + nimi + ', olet  ' + tupa + '."';