const { TableType } = require('../models/TableType');
const { Table } = require('../models/Table');



class TableTypeController {


    async addTableType(req, res) {
        try {
            const { nameTableType, status } = req.body;
            console.log(status);
            if (!nameTableType) {
                const errorMessage = "Please enter table type";
                const data = await TableType.find();
                return res.render('Desk/createTableType', {
                    showHeader: true,
                    noContainer: true,
                    noMain: true,
                    errorMessage: errorMessage,
                    data: data.map(data => data.toObject()),
                  });
            }
            
            const successMessage = "Add successfully";
            const newTableType = new TableType({ nameTableType: nameTableType, statusTableType: status === 'on' });
            await newTableType.save();
            const data = await TableType.find();
            
            return res.render('Desk/createTableType', {
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
    

    async getAllTableType(req, res) {
        try {
            const data = await TableType.find()
            res.render('Desk/createTableType', {
                showHeader: true,
                noContainer: true,
                noMain : true ,
                data: data.map(data => data.toObject())
              });
            
        } catch (err) {
            res.status(500).json(err);
        }
    }
    
    async deleteTableType(req,res){
        try{
            const id = req.params.id
            const deleteTableType = await TableType.findByIdAndDelete(id);
            const data = await TableType.find();
            await Table.deleteMany({tableType:id})
            res.render('Desk/createTableType', {
                deleteTableType: deleteTableType,
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




    async createTableTypeScreen(req,res){
        try{
            const data = await TableType.find();
            res.render('Desk/createTableType', {
                showHeader: true,
                noContainer: true,
                noMain : true ,
                data: data.map (data => data.toObject())
              });

        }catch(err){
            res.status(500).json(err)
        }
    }


     async updateTableType(req, res) {
        try{
            const { nameTableType, status } = req.body;
            const id = req.params.id;
            await TableType.updateOne({ _id: id }, {nameTableType: nameTableType, statusTableType: status === 'on' });
            const data = await TableType.find();
            return res.render('Desk/createTableType', {
                showHeader: true,
                noContainer: true,
                noMain: true,
                data: data.map(data => data.toObject()),
              });
        }catch(err){
            res.status(500).json(err)
        }
    }



    

    async apiAddTableType(req, res) {
        try{
            const newLB = new TableType(req.body);
            const saveLB = await  newLB.save();
            res.status(200).json(saveLB);
        }catch(err){
            res.status(500).json(err)
        }
    }



    async apiGetAllTableType(req,res){
        try{
            const getAllLB = await TableType.find()
            res.status(200).json(getAllLB);
        }catch(err){
            res.status(500).json(err);
        }
    }
    
}
module.exports = new TableTypeController;
