//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

import { log } from "console";

let AlienColors: string = "green";

//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
if (AlienColors === "green"){
    console.log("player earned 5 points.");
}
else if (AlienColors === "yellow"){
    console.log("player earned 10 points.");
}

 else if (AlienColors === "red"){
    console.log("player earned 15 points.");
 }
 else{
    console.log("plz select right color")
 }
 
 // version 2 of the program 
 AlienColors = "yellow";

 if (AlienColors === "green"){
    console.log("player earned 5 points.");
}
else if (AlienColors === "yellow"){
    console.log("player earned 10 points.");
}

 else if (AlienColors === "red"){
    console.log("player earned 15 points.");
 }
 else{
    console.log("plz select right color")
 }



// version 3 of the program 
AlienColors = "red";

if (AlienColors === "green"){
   console.log("player earned 5 points.");
}
else if (AlienColors === "yellow"){
   console.log("player earned 10 points.");
}

else if (AlienColors === "red"){
   console.log("player earned 15 points.");
}
else{
   console.log("plz select right color")
}












