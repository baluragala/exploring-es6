//example 0

new Promise(function (resolve, reject) {
    setTimeout(() => resolve(2), 1000)
})
    .then(data => {
        console.log(data)
        return data * 2;
    })
    .then(data => {
        console.log(data)
        return data * 3;
    })
    .then(data => {
        console.log(data)
        return data * 4;
    })

//example 1

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p1 resolved'), 1000)
// })

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p2 resolved'), 2000)
// })

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p3 resolved'), 3000)
// })

// p1
//     .then(data => {
//         console.log(data)
//         return p2;
//     })
//     .then(data => {
//         console.log(data)
//         return p3;
//     })
//     .then(data => {
//         console.log(data)
//     })


// example 2 


// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p1 resolved '), 1000)
// })

// p1
//     .then(data => {
//         console.log(data)
//         return new Promise((resolve, reject) => {
//             setTimeout(function () {
//                 resolve(data + '-> p2 resolved ')
//             }, 1000);
//         })
//     })

//     .then(data => {
//         console.log(data)
//         return new Promise((resolve, reject) => {
//             setTimeout(function () {
//                 resolve(data + '-> p3 resolved ')
//             }, 1000);
//         })
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.error('ERROR : ' + err))


// example 3
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p1 resolved '), 1000)
// })

// p1
//     .then(data => {
//         console.log(data)
//         return new Promise((resolve, reject) => {
//             setTimeout(function () {
//                 reject(data + '-> p2 resolved - ERROR ')
//             }, 1000);
//         })
//     })

//     .then(data => {
//         console.log(data)
//         return new Promise((resolve, reject) => {
//             setTimeout(function () {
//                 resolve(data + '-> p3 resolved ')
//             }, 1000);
//         })
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.error('ERROR : ' + err))


// example 4

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p1 resolved '), 1000)
// })

// p1
//     .then(data => {
//         console.log('In p1 resolve : ' + data)
//         return new Promise((resolve, reject) => {
//             setTimeout(function () {
//                 reject(data + '-> p2 resolved - ERROR ')
//             }, 1000);
//         })
//     })
//     .catch(err => console.error('ERROR : ' + err))
//     .then(data => {
//         console.log('In p2 resolve : ' + data)
//         return new Promise((resolve, reject) => {
//             setTimeout(function () {
//                 reject(data + '-> p3 resolved - ERROR ')
//             }, 1000);
//         })
//     })
//     .catch(err => console.error('ERROR : ' + err))
//     .then(data => {
//         console.log('In p3 resolve : ' + data)
//         console.log(data)
//     })
//     .catch(err => console.error('ERROR : ' + err))
