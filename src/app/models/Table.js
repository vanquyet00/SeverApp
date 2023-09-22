const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TableSchema = new Schema ({
    tableType:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "TableType"
    },
    nameTable: {
        type: String,
    },
    statusTable: {
        type: Boolean
    }
})

var Table = mongoose.model("Table", TableSchema);

module.exports = {Table};
// module.exports = mongoose.model('Course', CourseSchema);
