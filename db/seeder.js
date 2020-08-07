const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('./index.js')

const placeSchema = new Schema({
    pricePerNight: Number,
    rating: Number,
    maxGuestCount: Number,
    reviewCount: Number,
    cleaningFee: Number,
    serviceFee: Number,
    taxes: Number,
    bookedDates: [Date],
})
var schema = mongoose.model('Place', placeSchema)

var newPlaces = [{
    pricePerNight: 300,
    rating: 4,
    maxGuestCount: 8,
    reviewCount: 26,
    cleaningFee: 280,
    serviceFee: 200,
    taxes: 195,
    bookedDates: [08/01/2020]
    }]

const insertPlaces = function(){
    schema
    .create(newPlaces)
    .then(()=>(db.disconnect()))
}

// console.log(db)
insertPlaces();
// module.exports = schema;