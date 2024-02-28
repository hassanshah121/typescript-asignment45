"use strict";
let Guest_List = ['imran khan', 'nawaz sharif', 'asif ali zardari'];
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mr .  ' + Guest_List[i]+',\n\nit is my pleasure to invite you in my party. \n\nthankyou!\n\n');
// } 
let absent_guest = 'imran khan';
let new_guest = 'kamran tessori';
Guest_List[0] = new_guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr .  ' + Guest_List[i]+',\n\nit is my pleasure to invite you in my party. \n\nthankyou!\n\n');
//     } 
console.log(`MR. ${absent_guest} is not comming. `);
console.log('Good news! We find big table so we re inviting 3 more guest. ');
Guest_List.unshift('sir zia khan');
Guest_List.splice(2, 0, 'Mariyam nawaz');
Guest_List.push('bilawal bhutto zardari');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr .  ' + Guest_List[i] + ',\n\nit is my pleasure to invite you in my party. \n\nthankyou!\n\n');
}
console.log('\nsorry we cannot arrange big table, only two person will be invited.');
while (Guest_List.length > 2) {
    let remove_guest = Guest_List.pop();
    console.log(`sorry mr . ${remove_guest}, you are notinvited for dinner`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr .  ' + Guest_List[i] + ',\n\nyou are still invited. \n\nthankyou!\n\n');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
