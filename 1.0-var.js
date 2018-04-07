/**
 * Created by moksha on 09/01/17.
 */
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
