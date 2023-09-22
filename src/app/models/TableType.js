const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TableTypeSchema = new Schema ({
    nameTableType: {
        type: String,
    },
    statusTableType: {
        type: Boolean,
    },

})

var TableType = mongoose.model("TableType", TableTypeSchema);

module.exports = {TableType};
// module.exports = mongoose.model('Course', CourseSchema);
