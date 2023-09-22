const mongoose = require('mongoose');
const {MenuType} = require('../models/MenuType');
const {Menu} = require('../models/Menu');




class MenuTypeController {





    
    async addMenuType(req, res) {
        try {
            const { nameMenuType, status } = req.body;
            console.log(status);
            if (!nameMenuType) {
                const errorMessage = "Please enter Menu type";
                const data = await MenuType.find();
                return res.render('Desk/createMenuType', {
                    showHeader: true,
                    noContainer: true,
                    noMain: true,
                    errorMessage: errorMessage,
                    data: data.map(data => data.toObject()),
                  });
            }
            
            const successMessage = "Add successfully";
            const newMenuType = new MenuType({ nameMenuType: nameMenuType, statusMenuType: status === 'on' });
            await newMenuType.save();
            const data = await MenuType.find();
            
            return res.render('Menu/createMenuType', {
                showHeader: true,
                noContainer: true,
                noMain: true,
                successMessage: successMessage,
                data: data.map(data => data.toObject()),
              });
        } catch(err) {
            res.status(500).json(err);
        }
    }

    async getAllMenuType(req,res){
    try{
        const getAllLM = await MenuType.find()
        res.status(200).json(getAllLM);
    }catch(err){
        res.status(500).json(err);
    }
}



async deleteMenuType(req,res){
    try{
        const id = req.params.id
        const deleteMenuType = await MenuType.findByIdAndDelete(id);
        const data = await MenuType.find();
        await Menu.deleteMany({MenuType:id})
        res.render('Menu/createMenuType', {
            deleteMenuType: deleteMenuType,
            showHeader: true,
            noContainer: true,
            noMain: true,
            data: data.map (data => data.toObject()),
            success: true,
            // data: data.map(data => data.toObject()),
          });
    }catch(err){
        res.status(500).json(err);
    }
}



async updateMenuType(req, res) {
    try{
        const { nameMenuType, status } = req.body;
        const id = req.params.id;
        await MenuType.updateOne({ _id: id }, {nameMenuType: nameMenuType, statusMenuType: status === 'on' });
        const data = await MenuType.find();
        return res.render('Menu/createMenuType', {
            showHeader: true,
            noContainer: true,
            noMain: true,
            data: data.map(data => data.toObject()),
          });
    }catch(err){
        res.status(500).json(err)
    }
}
    

 


    async menuScreen(req,res){
        try{
           const data =  await MenuType.find();
            res.render('Menu/createMenuType', {
                showHeader: true,
                noContainer: true,
                noMain : true ,
                data: data.map(data => data.toObject()),
              });
        }catch(err){
            res.status(500).json(err);
        }
    }



    //   api
    
   async apiAddMenuType(req, res) {
    try{
        const newLM = new MenuType(req.body);
        const saveLM = await  newLM.save();
        res.status(200).json(saveLM);
    }catch(err){
        res.status(500).json(err)
    }
}



async apiGetAllMenuType(req,res){
    try{
        const getAllLM = await MenuType.find()
        res.status(200).json(getAllLM);
    }catch(err){
        res.status(500).json(err);
    }
}
}
module.exports = new MenuTypeController;
