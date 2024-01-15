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

rl.question('Enter the first number: ', (input1) => {
    rl.question('Enter the second number: ', (input2) => {
        var sum = parseInt(input1) + parseInt(input2);
        console.log('Sum is: ', sum);
        rl.close();
    });
});