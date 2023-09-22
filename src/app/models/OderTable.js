const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OderTableSchema = new Schema ({
    invoice:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Invoice"
    },
    table:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Table"
    }],
    status: {
        type: Boolean
    }
})

var OderTable = mongoose.model("OderTable", OderTableSchema);

module.exports = {OderTable};
// module.exports = mongoose.model('Course', CourseSchema);
