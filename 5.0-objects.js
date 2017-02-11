/**
 * Created by moksha on 10/01/17.
 */
var car = {make, model, year};

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var mycar = new Car("Eagle", "Talon TSi", 1993);


function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}


var rand = new Person("Rand McKinnon", 33, "M");
var ken = new Person("Ken Jones", 39, "M");


function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}


var car1 = new Car("Eagle", "Talon TSi", 1993, rand);
var car2 = new Car("Nissan", "300ZX", 1992, ken);

//Object.create


