const multer = require('multer');
var maxSize = 1000000000;

// 30720
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const fileFilter = (req, file, cb) => {
  const fileSize = parseInt(req.headers['content-length']);
  if (file.mimetype !== "image/png") {
    return cb(new Error('Chỉ chấp nhận tệp png.'));
  }
  if (fileSize > maxSize) {
    return cb(new Error('Dung File Lượng Quá Lớn'));
  }
  cb(null, true);
};

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/public/img');
  },
  filename: function (req, file, cb) {
    // Đặt tên file được upload lên để không bị trùng lặp
    const originalname = file.originalname;
     var name = Date.now() + originalname.replace(/[^a-zA-Z0-9.-]/g, '_')
    cb(null, name);
  },
});


var upload = multer({
  storage: storage,
  fileFilter: fileFilter // Sử dụng hàm fileFilter để kiểm tra tệp
}).array('images',2);



module.exports = upload;