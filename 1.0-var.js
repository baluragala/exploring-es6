/**
 * Created by moksha on 09/01/17.
 */

for(var i=0; i<10; i++){
  console.log(i); //i is visible thus is logged in the console as 0,1,2,....,9
}
console.log(i); //i is visible here too. thus is logged as 10.




// re-declaration

'use strict';
var temp = "this is a temp variable";
var temp = "this is a second temp variable"; //replaced easily

var x = 3;
function func(randomize) {
    if (randomize) {
        var x = Math.random(); // (A) scope: whole function
        return x;
    }
    return x; // accesses the x from line A
}
func(false); // undefined


var height = 7;
if(height > 6) {
    var part1 = 'You are';
    let part2 = 'feet tall';
    console.log(`${part1} ${height} ${part2}`);
}

console.log(part1) // part1 variable is accessible outside if statement
console.log(part2) // reference error part2 is not accessible outside if
