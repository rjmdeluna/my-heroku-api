const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    last_name: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    phone_numbers: {
        type: [String],
        required: true
    },
});

module.exports = mongoose.model('contacts', PostSchema);