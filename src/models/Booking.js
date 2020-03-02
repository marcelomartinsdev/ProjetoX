const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
   data: String,
   approved: Boolean, // boolean inicia como nulo
   user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   },
   spot:{
       type:mongoose.Schema.Types.ObjectId,
       ref: 'User'
   }

    }
);

module.exports = mongoose.model('Booking', BookingSchema);