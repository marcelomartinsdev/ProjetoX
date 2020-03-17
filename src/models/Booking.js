const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
   data: String,
   approved: Boolean, // boolean start with null argument
   user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   },
   spot: {
       type:mongoose.Schema.Types.ObjectId,
       ref: 'Spot'
   }

    }
);

module.exports = mongoose.model('Booking', BookingSchema);