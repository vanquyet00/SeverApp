const {Staff} = require('../models/Staff');


class StaffController {

    //[GET] /news
   async addStaff(req, res) {
        try{
            const newNV = new Staff(req.body);
            const saveNV = await  newNV.save();
            res.status(200).json(saveNV);
        }catch(err){
            res.status(500).json(err)
        }
    }


    async getAllStaff(req,res){
        try{
            const getAllNV = await Staff.find()
            //.populate('nhaHang') thêm để hiển thị all thông tin
            res.status(200).json(getAllNV);
        }catch(err){
            res.status(500).json(err);
        }
    }

    async login(req, res) {
        try {
            const userName  = req.body.userName;         
            const pass  = req.body.pass;  
            const getUser = await Staff.find();
            // Tìm người dùng có email và password trùng khớp
            const matchedUser = getUser.find(user => user.user === userName && user.pass === pass);
            
            if (matchedUser) {
                res.render('home', { 
                    showHeader: true,
                    noContainer: true,
                    noMain: true,
                });
                // Người dùng trùng khớp, thực hiện các xử lý bạn muốn ở đây
                // res.json({ message: 'Login successful', user: matchedUser });
            } else {
                const errorMessage = "Thông tin tài khoản mật khẩu không chính xác";
                res.render('login', { 
                    showHeader: false,
                    noContainer: false,
                    noMain: false,
                    errorMessage: errorMessage,
                });
            }
           
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // login(req, res) {
    //     try{
    //         res.render('login', { 
    //             showHeader: false,
    //             noContainer: false, // Đặt biến showHeader để ẩn header
    //         });
    //     }catch(err){
    //         res.status(500).json(err)
    //     }
    // }
}
module.exports = new StaffController;
