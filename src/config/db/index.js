
const mongo = require('mongoose')
function connect(){

mongo.connect('mongodb+srv://Quyet123:Quyet123@cluster0.ar3a3ig.mongodb.net/')
  .then(() => {
    console.log("Connected to MongoDB");  // Tiếp tục thực hiện các tác vụ sau khi kết nối thành công nếu cần thiết
  })
  .catch((error) => {
    console.error("Errors to MongoDB:", error);
  });


}
module.exports = {connect}