function Car(make, model, price) {
    return {
        make,
        model,
        _price : price,

        get price() {
            return this._price;
        },
        set price(value) {
            if (value < 0)
                throw new Error('invalid value');

            this._price = value;
        }
    };
}

let car = Car('Maruti', 'Celerio', 40000);

// output: 40000
console.log(car.price);

car.price = 30000;

// error thrown
car.price = -1;


function getCar(make, model, value) {
    return {
        // computed values now work with
        // object literals
        ['make' + make]: true
    };
}