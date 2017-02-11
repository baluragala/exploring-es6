/**
 * Created by moksha on 10/01/17.
 */

const shirt = {
    color: 'Red',
    size: 'Medium',
    price: 600,
    test(){}
};

for (const key in shirt) {
    console.log(key, shirt[key]);
}

for (const prop in shirt) {
    const value = shirt[prop];
    console.log(value, prop);
}

