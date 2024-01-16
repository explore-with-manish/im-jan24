const Account = require('./account');
const { emailClient, smsClient } = require('./utilities');

let a1 = new Account(1, 1000, 6);

// Code to diplay message on the console
a1.on('depositSuccess', (balance) => {
    console.log(`Deposit Success, Balance is: ${balance}`);
});

a1.on('withdrawSuccess', (balance) => {
    console.log(`Withdraw Success, Balance is: ${balance}`);
});

a1.on('withdrawFailure', (balance) => {
    console.log(`Withdraw Failure, Balance is: ${balance}`);
});

// Code to send email
a1.on('depositSuccess', (balance) => {
    emailClient.send(`Deposit Success, Balance is: ${balance}`);
});

a1.on('withdrawSuccess', (balance) => {
    emailClient.send(`Withdraw Success, Balance is: ${balance}`);
});

a1.on('withdrawFailure', (balance) => {
    emailClient.send(`Withdraw Failure, Balance is: ${balance}`);
});

// Code to send sms
a1.on('depositSuccess', (balance) => {
    smsClient.send(`Deposit Success, Balance is: ${balance}`);
});

a1.on('withdrawSuccess', (balance) => {
    smsClient.send(`Withdraw Success, Balance is: ${balance}`);
});

a1.on('withdrawFailure', (balance) => {
    smsClient.send(`Withdraw Failure, Balance is: ${balance}`);
});

a1.deposit(1000);
a1.withdraw(2000);
a1.withdraw(1000);