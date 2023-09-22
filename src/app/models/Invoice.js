const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema ({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
    },
    saff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff",
    },
    quantity: {
        type: String,
    },
    time: {

        type: String,
    },
    tiemOut:{

    },
    status: {
        type: Boolean,
    },
})

var Invoice = mongoose.model("Invoice", InvoiceSchema);

module.exports = {Invoice};
// module.exports = mongoose.model('Course', CourseSchema);
