/**
 * Created by moksha on 09/01/17.
 */

var a, b, rest;
[a, b] = [1, 2];

console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({a, b} = {a:1, b:2});
console.log(a); // 1
console.log(b); // 2

// ES2016 - not implemented in Firefox 47a01
({a, b, ...rest} = {a:1, b:2, c:3, d:4});

let apiResponse = {"username":"baluragala","url":"https://github.com/baluragala","type":"paid"};
let username,url,type;
({username,url,type} = apiResponse);
console.log(username,url,type);

let apiResponse1 = {"username":"baluragala","url":"https://github.com/baluragala"};
let username,url,subscriptionType;
({username,url,type: subscriptionType="free"} = apiResponse1);
console.log(username,url,subscriptionType);


//swap

let a=10,b=20;

console.log(a,b)
[b,a]=[a,b];

console.log(a,b);

//complex object

var metadata = {
    title: "Scratchpad",
    translations: [
        {
            locale: "de",
            localization_tags: [ ],
            last_edit: "2014-04-14T08:43:37",
            url: "/de/docs/Tools/Scratchpad",
            title: "JavaScript-Umgebung"
        }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"