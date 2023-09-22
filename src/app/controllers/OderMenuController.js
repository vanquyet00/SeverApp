const mongoose = require('mongoose');
const {OderMenu} = require('../models/OderMenu');



class OderMenuController {

    //[GET] /news
   async addOderMenu(req, res) {
        try{
            const newOderMenu = new OderMenu(req.body);
            const saveOderMenu = await  newOderMenu.save();
            res.status(200).json(saveOderMenu);
        }catch(err){
            res.status(500).json(err)
        }
    }
    


    async getAllOderMenu(req,res){
        try{
            const getAllOderMenu = await OderMenu.find()
            res.status(200).json(getAllOderMenu);
        }catch(err){
            res.status(500).json(err);
        }
    }
}
module.exports = new OderMenuController;
