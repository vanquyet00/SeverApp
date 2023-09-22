const {Table} = require('../models/Table');

const { TableType } = require('../models/TableType');




class TableController {

   
   async addTable(req, res) {
        try{
            const { selectTableType ,nameTable,statusTable } = req.body;
            if(!nameTable){
                const errorMessage = "Please enter table name";
                const dataTableType = await TableType.find();
                const dataTable = await Table.find().populate('tableType');
                return res.render('Desk/createTable', {
                    showHeader: true,
                    noContainer: true,
                    noMain: true,
                    errorMessage: errorMessage,
                    dataTableType: dataTableType.map (dataTableType => dataTableType.toObject()),
                    dataTable: dataTable.map(dataTable => dataTable.toObject()),
                  });
            }else if(selectTableType == "no"){
                const errorMessage = "Please select table type";
                const dataTable = await Table.find().populate('tableType');
                const dataTableType = await TableType.find();
                return res.render('Desk/createTable', {
                    showHeader: true,
                    noContainer: true,
                    noMain: true,
                    errorMessage: errorMessage,
                    dataTableType: dataTableType.map (dataTableType => dataTableType.toObject()),
                    dataTable: dataTable.map(dataTable => dataTable.toObject()),
                  });
            }else{

                const newTable =  new Table({tableType: selectTableType, nameTable: nameTable, statusTable:statusTable === 'on'});
                const saveTable = await newTable.save();
                const dataTableType = await TableType.find();
                const dataTable = await Table.find().populate('tableType')

                const successMessage = "Add successfully";
                return res.render('Desk/createTable', {
                    saveTable: saveTable,
                    showHeader: true,
                    noContainer: true,
                    noMain: true,
                    dataTable: dataTable.map(dataTable => dataTable.toObject()),
                    dataTableType: dataTableType.map (dataTableType => dataTableType.toObject()),
                    successMessage: successMessage,
                    // data: data.map(data => data.toObject()),
                  });
            }

          
        }catch(err){
            res.status(500).json(err)
        }
    }
    


    async getAllTable(req,res){
        try{
            const getAllTable = await Table.find()
            res.status(200).json(getAllTable);
        }catch(err){
            res.status(500).json(err);
        }
    }


    async deleteTable(req,res){
        try{
            const id = req.params.id
            console.log(id + "raaa");
            const deleteTable = await Table.findByIdAndDelete(id);
            const dataTableType = await TableType.find();
            const dataTable = await Table.find().populate('tableType')
            res.render('Desk/createTable', {
                deleteTable: deleteTable,
                showHeader: true,
                noContainer: true,
                noMain: true,
                dataTable: dataTable.map(dataTable => dataTable.toObject()),
                dataTableType: dataTableType.map (dataTableType => dataTableType.toObject()),
                success: true,
                // data: data.map(data => data.toObject()),
              });
        }catch(err){
            res.status(500).json(err);
        }
    }

    async updateTable(req,res){
        try{
            const { selectTableType ,nameTable,statusTable } = req.body;
            const id = req.params.id;
                await Table.updateOne({_id:id},{tableType: selectTableType, nameTable: nameTable, statusTable:statusTable === 'on'});
                const dataTableType = await TableType.find();
                const dataTable = await Table.find().populate('tableType')
                return res.render('Desk/createTable', {
                    showHeader: true,
                    noContainer: true,
                    noMain: true,
                    dataTable: dataTable.map(dataTable => dataTable.toObject()),
                    dataTableType: dataTableType.map (dataTableType => dataTableType.toObject()),
                    // data: data.map(data => data.toObject()),
                  });
        }catch(err){
            res.status(500).json(err);
        }
    }







    async createTableScreen(req,res){
        try{
            const dataTableType = await TableType.find();
            const dataTable = await Table.find().populate('tableType','nameTableType')
            res.render('Desk/createTable', {
                showHeader: true,
                noContainer: true,
                noMain : true ,
                dataTableType: dataTableType.map (dataTableType => dataTableType.toObject()),
                dataTable: dataTable.map(dataTable => dataTable.toObject()),
              });
        }catch(err){
            res.status(500).json(err);
        }
    }
    // api






    async apiAddTable(req, res) {
        try{
            const newTable = new Table(req.body);
            const saveTable = await  newTable.save();
            res.status(200).json(saveTable);
        }catch(err){
            res.status(500).json(err)
        }
    }
    


    async apiGetAllTable(req,res){
        try{
            const getAllTable = await Table.find().populate('tableType','nameTableType')
            res.status(200).json(getAllTable);
        }catch(err){
            res.status(500).json(err);
        }
    }
}
module.exports = new TableController;
