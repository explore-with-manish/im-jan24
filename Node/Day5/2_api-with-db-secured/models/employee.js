const mongoose = require('../utilities/database');
const Schema = mongoose.Schema;

const employeeSchema = Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = Employee = mongoose.model('Employee', employeeSchema);