const mongoose = require('mongoose');

mongoose.connect(process.env.mongoURI)
    .then(() => { console.log('Connected to MongoDB...'); })
    .catch(err => { console.error('Could not connect to MongoDB...', err.message); });

mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB...');
});

module.exports = mongoose;