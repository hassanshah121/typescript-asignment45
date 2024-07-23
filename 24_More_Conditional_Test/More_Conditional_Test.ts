

//Equality and Ineuality Test 
console.log("Equality test with strings: ", "Apple" === "Apple");

//Equality and Ineuality Test 
console.log("InEquality test with strings:",("Apple" as string) != "orange");

// test using the lower case function :-
console.log("Lower case function test : ","HELLO".toLowerCase() === "hello");

// numerical test involving equality 
console.log("Equality test with number:", 26 === 26);
// numerical test involving inequality
console.log("Inequality test with number:" , (26 as number) != 35 );


// greater than and less than 
console.log("Greater than test : ",10 > 5);
// less than tes
console.log("Less than test : ",5 < 10 );



// greater than or equal to
console.log ("Greater than or equal to test: ", 10 >=10 );
// less than or equal to
console.log("Less than or equal to test: ", 5 <= 10  );

// test using "and" opreator
console.log("And opreator test :", 5===5 && 10 > 5);
// test using "or" opreator
console.log("or opreator test :", 5===5  || false );

//test wether the item is in an array 
const fruits :string [] =['banana','apple','orange'];
console.log('Test "banana" in the array: ', fruits.includes("banana"));

//test wether the item is not in an array 
console.log('Testing "grapes" is not in array: ' , ! fruits.includes('grapes'));
