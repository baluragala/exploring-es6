/**
 * Created by moksha on 10/01/17.
 */
console.dir([1,2,3].entries());

var someString = "hi";
typeof someString[Symbol.iterator];

var iterator = someString[Symbol.iterator]();
iterator + "";                               // "[object String Iterator]"

iterator.next();                             // { value: "h", done: false }
iterator.next();                             // { value: "i", done: false }
iterator.next();

[...someString]


//redefine


var someString = new String("hi");          // need to construct a String object explicitly to avoid auto-boxing

someString[Symbol.iterator] = function() {
    return { // this is the iterator object, returning a single element, the string "bye"
        next: function() {
            if (this._first) {
                this._first = false;
                return { value: "bye", done: false };
            } else {
                return { done: true };
            }
        },
        _first: true
    };
};


//welcome to generators

var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable]; // [1, 2, 3]