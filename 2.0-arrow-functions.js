/**
 * Created by moksha on 09/01/17.
 */

const scores = [60, 40, 56, 77, 89];
scores.filter(score => score > 60);

const temperatures = [20, 0, -10, 14, -7, -6, 1];
temperatures.sort();

const users = ["Zeo", "Logi", "Juicy"];
const hola = 'Hola';

users.map((user, index) => ({name: user, wish: `${hola} ${user}`, token: index + 100}));


var materials = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
];

var materialsLength1 = materials.map(function (material) {
    return material.length
});

var materialsLength2 = materials.map((material) => {
    return material.length
});

var materialsLength3 = materials.map(material => material.length);


var multiply = (x, y) => x * y;

var wish = user => `Hello ${user}`;

var whoAreYou = () => `Arrow function with no params`;

let smartPhones = [
    {name: 'iphone', price: 649},
    {name: 'Galaxy S6', price: 576},
    {name: 'Galaxy Note 5', price: 489}
];

// ES6
console.log(smartPhones.map(smartPhone => smartPhone.price)); // [649, 576, 489]


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let divisibleBy3 = numbers.filter(function (number) {
    return number % 3 == 0;
})

let divisibleBy2 = numbers.filter((number) => number % 2 == 0);