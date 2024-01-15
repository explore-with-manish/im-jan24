const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,   // ReadStream
    output: process.stdout  // WriteStream
});

// rl.question('What is your name? ', (answer) => {
//     console.log('You entered: ', answer);
//     rl.close();
// });

// console.log("I am the line after rl.question....");

// rl.question('Enter the first number: ', (input1) => {
//     rl.question('Enter the second number: ', (input2) => {
//         var sum = parseInt(input1) + parseInt(input2);
//         console.log('Sum is: ', sum);
//         rl.close();
//     });
// });

// // ----------------------------------------

// function enterNumberOne() {
//     return new Promise((resolve, reject) => {
//         rl.question('Enter the first number: ', (input) => {
//             resolve(input);
//         });
//     });
// }

// function enterNumberTwo() {
//     return new Promise((resolve, reject) => {
//         rl.question('Enter the second number: ', (input) => {
//             resolve(input);
//         });
//     });
// }

// function add([n1, n2]) {
//     var sum = parseInt(n1) + parseInt(n2);
//     console.log('Sum is: ', sum);
//     rl.close();
// }

// enterNumberOne().then((n1)=>{
//     enterNumberTwo().then((n2)=>{
//         add([n1, n2]);
//     });
// });

// ----------------------------------------

// function enterNumberOne() {
//     return new Promise((resolve, reject) => {
//         rl.question('Enter the first number: ', (input) => {
//             resolve(input);
//         });
//     });
// }

// function enterNumberTwo(n1) {
//     return new Promise((resolve, reject) => {
//         rl.question('Enter the second number: ', (input) => {
//             resolve([n1, input]);
//         });
//     });
// }

// function add([n1, n2]) {
//     var sum = parseInt(n1) + parseInt(n2);
//     console.log('Sum is: ', sum);
//     rl.close();
// }

// enterNumberOne().then(enterNumberTwo).then(add);

// ---------------------------------------------------------

function enterNumber(message) {
    return new Promise((resolve, reject) => {
        rl.question(message, (input) => {
            var num = parseInt(input);
            resolve(num);
        });
    });
}

(async function() {
    var n1 = await enterNumber('Enter the first number: ');
    var n2 = await enterNumber('Enter the second number: ');
    var sum = n1 + n2;
    console.log('Sum is: ', sum);
    rl.close();
})();