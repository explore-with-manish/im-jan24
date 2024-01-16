const EventEmitter = require('events');

class StringEmitter extends EventEmitter {
    constructor() {
        super();
        this.strArr = ['NodeJS', 'ReactJS', 'AngularJS', 'VueJS', 'EmberJS'];
        this.run();
    }

    run() {
        setInterval(() => {
            var str = this.getString();
            this.emit('stringEmitted', str);
        }, 2000);
    }

    pushString(cb) {
        setInterval(() => {
            var str = this.getString();
            cb(str);
        }, 2000);
    }

    getString() {
        var str = this.strArr[Math.floor(Math.random() * this.strArr.length)];
        return str;
    }
}

module.exports = new StringEmitter();