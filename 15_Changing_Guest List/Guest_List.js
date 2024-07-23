"use strict";
let Guest_List = ['imran khan', 'nawaz sharif', 'asif ali zardari'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr .  ' + Guest_List[i] + ',\n\nit is my pleasure to invite you in my party. \n\nthankyou!\n\n');
}
let absent_guest = 'imran khan';
let new_guest = 'kamran tessori';
Guest_List[0] = new_guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr .  ' + Guest_List[i] + ',\n\nit is my pleasure to invite you in my party. \n\nthankyou!\n\n');
}
console.log(`MR. ${absent_guest} is not comming. `);
