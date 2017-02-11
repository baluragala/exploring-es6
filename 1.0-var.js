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
    var message = 'tall';
    console.log(`You are ${height} feet tall`);
}