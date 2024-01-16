const sEmitter = require('./string-emitter');

// let s = sEmitter.getString();
// console.log(s);

// setInterval(() => {
//     let s = sEmitter.getString();
//     console.log(s);
// }, 2000);

// Call 1 - 1000
// Call 2 - 3000
// Call 3 - 1000

// ----------------------------

// sEmitter.pushString((s) => {
//     console.log(s);
// });

// sEmitter.pushString((s) => {
//     console.log("S1", s);
// });

// sEmitter.pushString((s) => {
//     console.log("S2", s);
// });

// ---------------------------- Events
sEmitter.on('stringEmitted', (s) => {
    console.log("S1", s);
});

// sEmitter.on('stringEmitted', (s) => {
//     console.log("S2", s);
// });

let count = 0;

function S2(s) {
    console.log("S2", s);
    ++count;

    if(count>2) {
        sEmitter.off('stringEmitted', S2);
    }
}

sEmitter.on('stringEmitted', S2);