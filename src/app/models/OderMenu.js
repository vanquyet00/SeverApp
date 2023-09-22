const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OderMenuSchema = new Schema ({
    invoice:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Invoice"
    },
    menu:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu"
    }],
    Quantity: {
        type: Number
    },
    status: {
        type: Boolean
    }
})

var OderMenu = mongoose.model("OderMenu", OderMenuSchema);

module.exports = {OderMenu};
// module.exports = mongoose.model('Course', CourseSchema);
