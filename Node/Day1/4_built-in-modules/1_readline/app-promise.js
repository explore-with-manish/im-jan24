const readline = require('readline').promises;

const rl = readline.createInterface({
    input: process.stdin,   // ReadStream
    output: process.stdout  // WriteStream
});

(async function() {
    var n1 = await rl.question('Enter the first number: ');
    var n2 = await rl.question('Enter the second number: ');
    var sum = n1 + n2;
    console.log('Sum is: ', sum);
    rl.close();
})();