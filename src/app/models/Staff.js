const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema ({
    nhaHang: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NhaHang",
    },
    name: {
        type: String,
    },
    male: {
        type: String,
    },
    bird: {

        type: String,
    },
    phone: {
        type: String,
    },
    Permission: {
        type: String,
    },
    status: {
        type: Boolean,
    },
    user: {
        type: String,
    },
    pass: {
        type: String,
    },
    image:{
        typeof: String,
    }
})

var Staff = mongoose.model("Staff", StaffSchema);

module.exports = {Staff};
// module.exports = mongoose.model('Course', CourseSchema);
