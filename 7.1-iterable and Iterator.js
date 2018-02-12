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

// override iterator
var numbers = [1, 2, 3, 4, 5];

numbers[Symbol.iterator] = function() {
  console.log(arguments);
  var index = 0;
  return {
    next() {
      if (index < numbers.length) {
        return { value: numbers[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
};

for (let n of numbers) {
  console.log(n);
}
