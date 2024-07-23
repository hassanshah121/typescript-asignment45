"use strict";
const personNames = "hassan raza ";
console.log(`Name in uppercase : ${personNames.toUpperCase()}`);
console.log(`Name in lowercase : ${personNames.toLowerCase()}`);
let step1 = personNames.split(' ');
let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
let step3 = step2.join(' ');
console.log(`Name in title case : ${step3}`);
