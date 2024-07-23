// Write a program that creates objects containing these items.

import { Console } from "console"

// let person_Name :string = 'huzaifa';

// const personName_Array :string[] = ['person','car','water'];





// data type of person
interface person{
    age : number
    name : string,
    nationality : string,
    student : Boolean
}
// person object
let person :person = {
    age: 20 ,
    name : 'huzaifa' ,
    nationality : 'pakistani' ,
    student : true
}




// print person
console.log(person);






//data type of car object 
interface car {
    maker :string, 
    color :string, 
    automatic : boolean,
}

// car object
let car = {
    maker : 'toyota',
    color : 'black',
    automatic : true
}
//print car
console.log(car);
