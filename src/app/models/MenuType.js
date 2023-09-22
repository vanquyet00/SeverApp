const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuTypeSchema = new Schema ({
    nameMenuType: {
        type: String,
    },
    statusMenuType: {
        type: Boolean,
    },
    
})

var MenuType = mongoose.model("MenuType", MenuTypeSchema);

module.exports = {MenuType};
// module.exports = mongoose.model('Course', CourseSchema);
