const mongoose = require('mongoose');


const db = mongoose.connect('mongodb://localhost/calendar', { useNewUrlParser: true, useUnifiedTopology: true });


// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('connected to mongodb')
// });

module.exports = db;