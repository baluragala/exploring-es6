/**
 * Created by moksha on 09/01/17.
 */

{
    const name = 'Zeo';
    console.log(name);
}
console.log(name) //reference error



for(var i = 0; i < 10; i++) {
    console.log(i);
    setTimeout(function() {
        console.log('The number is ' + i);
    },1000);
}


for(let i = 0; i < 10; i++) {
    console.log(i);
    setTimeout(function() {
        console.log('The number is ' + i);
    },1000);
}