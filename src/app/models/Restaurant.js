const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema ({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    status: {
        type: Boolean,
    },
    imgae:[{
        type:String
    }]
})

var Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = {Restaurant};
// module.exports = mongoose.model('Course', CourseSchema);
