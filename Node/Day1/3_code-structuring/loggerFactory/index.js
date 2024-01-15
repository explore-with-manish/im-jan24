const DBLogger = require('./db-logger');
const FileLogger = require('./file-logger');

exports.DBLFactory = {
    getLogger: function() {
        return new DBLogger();
    }
};

exports.FLFactory = {
    getLogger: function() {
        return new FileLogger();
    }
};