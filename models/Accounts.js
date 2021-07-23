const mongoose = require ('mongoose');

const accounts = mongoose.model ('accounts', {
   email: {
        type: String,
        required: true
    },
   password: {
        type: String,
        required:true
    },
});

module.exports = {accounts}