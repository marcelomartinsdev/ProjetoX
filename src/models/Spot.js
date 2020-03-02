const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String], //vetor com varias strings dentro
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'                            
    }
});

module.exports = mongoose.model('Spot', SpotSchema);