const mongoose = require('mongoose');
const {OderTable} = require('../models/OderTable');



class OderTableController {

    //[GET] /news
   async addOderTable(req, res) {
        try{
            const newOderTable = new OderTable(req.body);
            const saveOderTable = await  newOderTable.save();
            res.status(200).json(saveOderTable);
        }catch(err){
            res.status(500).json(err)
        }
    }
    


    async getAllOderTable(req,res){
        try{
            const getAllOderTable = await OderTable.find()
            res.status(200).json(getAllOderTable);
        }catch(err){
            res.status(500).json(err);
        }
    }
}
module.exports = new OderTableController;
