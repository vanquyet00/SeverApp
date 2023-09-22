const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema ({
    nameMenu: {
        type: String,
    },
    priceMenu: {
        type: String,
    },
    statusMenu: {
        type: Boolean,
    },
    menuType:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuType"
        
    },
    imageMenu:[{
        type:String
    }],
})

var Menu = mongoose.model("Menu", MenuSchema);

module.exports = {Menu};
// module.exports = mongoose.model('Course', CourseSchema);
