/**
 * Created by moksha on 10/01/17.
 */
setTimeout(function(){
    console.log("Hello World");
},1);

function foo() {
    // NOTE: don't ever do crazy long-running loops like this
    for (var i=0; i<=1E10; i++) {
        console.log(i);
    }
}

foo();
// 0..1E10
// "Hello World"



function *generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

var iterator = generateNumbers();


//passing data

function *foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var it = foo( 5 );

// note: not sending anything into `next()` here
console.log( it.next() );       // { value:6, done:false }
console.log( it.next( 12 ) );   // { value:8, done:false }
console.log( it.next( 13 ) );   // { value:42, done:true }