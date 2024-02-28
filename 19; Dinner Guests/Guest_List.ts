
let Guest_List :string[] = ['imran khan','nawaz sharif','asif ali zardari'];
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mr .  ' + Guest_List[i]+',\n\nit is my pleasure to invite you in my party. \n\nthankyou!\n\n');
// } 
let absent_guest :string = 'imran khan';
let new_guest :string = 'kamran tessori';
Guest_List[0] = new_guest ;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr .  ' + Guest_List[i]+',\n\nit is my pleasure to invite you in my party. \n\nthankyou!\n\n');
//     } 
//     console.log(`MR. ${absent_guest} is not comming. `);
// console.log ('Good news! We find big table so we re inviting 3 more guest. ')
// i added three guest in array.
Guest_List.unshift('sir zia khan');
Guest_List.splice(2 , 0 , 'Mariyam nawaz');
Guest_List.push('bilawal bhutto zardari');
// in there i printed 6 guest array.
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr .  ' + Guest_List[i]+',\n\nit is my pleasure to invite you in my party. \n\nthankyou!\n\n');
//     } 
// sorry message to all guest who not invited 
// console.log('\nsorry we cannot arrange big table, only two person will be invited.');
// i removed the guest here. 
while(Guest_List.length > 2){
   let remove_guest = Guest_List.pop()
// // console.log(`sorry mr . ${remove_guest}, you are not invited for dinner`);
} 

//our left 2 invited guest .
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr .  ' + Guest_List[i]+',\n\nyou are still invited. \n\nthankyou!\n\n');
//     } 

// i remove all the guest from array 
Guest_List.splice(0, 2);
console.log(Guest_List);

//exercise 19 

//print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of guest are: ${Guest_List.length}`);



