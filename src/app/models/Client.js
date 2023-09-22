const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema ({
    name: {
        type: String,
    },
    male: {
        type: String,
    },
    phone: {
        type: String,
    },
    status: {
        type: Boolean,
    },
})

var Client = mongoose.model("Client", ClientSchema);

module.exports = {Client};
// module.exports = mongoose.model('Course', CourseSchema);
