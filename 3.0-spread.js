/**
 * Created by moksha on 09/01/17.
 */

let name="Bala Krishna Ragala";
[...name];

let print = function (...args) {
    console.log(args);
}

let chars=[];
chars.push(...name)
chars