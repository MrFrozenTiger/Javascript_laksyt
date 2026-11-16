/*
Open t2 folder in your IDE/editor. Add HTML by using createElement()
and appendChild methods. (2p)
Add the following HTML code to the element with id="target"
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
Add class my-item to the second list item
*/

'use strict';

let target = document.getElementById("target");

let li1 = document.createElement("li");
li1.appendChild(document.createTextNode("First "));

let em = document.createElement("em");
em.setAttribute("data-lexical-text", "true");
em.textContent = "item";

li1.appendChild(em);

let li2 = document.createElement("li");
li2.classList.add("my-item");
li2.textContent = "Second item";

let li3 = document.createElement("li");
li3.textContent = "Third item";

target.appendChild(li1);
target.appendChild(li2);
target.appendChild(li3);
