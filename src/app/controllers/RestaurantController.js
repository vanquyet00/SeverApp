const mongoose = require('mongoose');
const {Restaurant} = require('../models/Restaurant')



class RestaurantController {

    //[GET] /news
   async addRestaurant(req, res) {
        try{
            const newNH = new Restaurant(req.body);
            const saveNH = await  newNH.save();
            res.status(200).json(saveNH);
        }catch(err){
            res.status(500).json(err)
        }
    }
    


    async getAllRestaurant(req,res){
        try{
            const getAllNH = await Restaurant.find()
            //.populate('Restaurant') thêm để hiển thị all thông tin
            res.status(200).json(getAllNH);
        }catch(err){
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
module.exports = new RestaurantController;
