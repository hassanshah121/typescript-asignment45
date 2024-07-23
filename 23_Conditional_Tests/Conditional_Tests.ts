//  = hum kisi value ko set kar rahe hain.
// == hum kisi value ko check kar rahe hain
// === hum kisi value ko uski datatype kai sath check kar rahin hain




// write a series of coditional test .

let car :string = 'subaru';



// Test No 1
console.log("Is car === 'subaru ? I predict true.");
console.log(car ==='subaru');

//Test No 2 
console.log("Is car == 'subaru ? I predict true.");
console.log(car =='subaru');

//Test No 3
console.log("Is car != 'honda ? I predict true.");
console.log(car !='honda');

//Test No 4
console.log("Is car !== 'ford ? I predict true.");
console.log(car !=='ford');

//Test No 5
console.log("Is car.Upper case == 'SUBARU ? I predict true.");
console.log(car.toUpperCase() == 'SUBARU');

//Test No 6
console.log("Is car == 'SUBARU ? I predict false.");
console.log(car  =='SUBARU');

//Test No 7
console.log("Is car === 'SUBARU ? I predict false.");
console.log(car  === 'SUBARU');

//Test No 8
console.log("Is car === 'Train ? I predict false.");
console.log(car  === 'Train');

//Test No 9
console.log("Is car === 'Bus ? I predict false.");
console.log(car  === 'Bus');

//Test No 10
console.log("Is car === 'cycle ? I predict false.");
console.log(car  === 'cycle');
