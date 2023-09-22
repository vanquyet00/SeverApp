const mongoose = require('mongoose');
const {Client} = require('../models/Client');



class ClientController {

    //[GET] /news
   async addClient(req, res) {
        try{
            const newClient = new Client(req.body);
            const saveClient = await  newClient.save();
            res.status(200).json(saveClient);
        }catch(err){
            res.status(500).json(err)
        }
    }
    


    async getAllClient(req,res){
        try{
            const getAllClient = await Client.find()
            res.status(200).json(getAllClient);
        }catch(err){
            res.status(500).json(err);
        }
    }
}
module.exports = new ClientController;
