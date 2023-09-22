const mongoose = require('mongoose');
const {Invoice} = require('../models/Invoice');



class InvoiceController {

    //[GET] /news
   async addInvoice(req, res) {
        try{
            const newInvoice = new Invoice(req.body);
            const saveInvoice = await  newInvoice.save();
            res.status(200).json(saveInvoice);
        }catch(err){
            res.status(500).json(err)
        }
    }
    


    async getAllInvoice(req,res){
        try{
            const getAllInvoice = await Invoice.find()
            res.status(200).json(getAllInvoice);
        }catch(err){
            res.status(500).json(err);
        }
    }
}
module.exports = new InvoiceController;
