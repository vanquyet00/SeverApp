const {Menu} = require('../models/Menu');
const {MenuType} = require('../models/MenuType');
const upload = require('../../config/multer/multerConfig');
 // Import cấu hình multer
const multer = require("multer");
const path = require('path');
const fs = require('fs');

function deleteImages(images) {
    for (const image of images) {
        const imagePath = path.join(__dirname, '../../public/img', image);
        try {
          fs.unlinkSync(imagePath);
        } catch (error) {
          // Bỏ qua lỗi và tiếp tục xóa các tệp còn lại
        }
      }
  }

class MenuController {

    async addMenu(req, res) {
        try{
            upload(req, res, async (err) => {
                if (req.files.length > 2) {
                  return res
                    .status(400)
                    .json({ error: "chỉ chọn tối đa 2 ảnh" });
                }
        
                if (req.files && req.files.length > 2) {
                  const errorMessage = "Bạn chỉ có thể chọn tối đa 2 ảnh.";
                  const dataMenu = await Menu.find().populate('menuType');
                  const dataMenuType = await MenuType.find();
                  return res.render('Menu/createMenu', {
                      showHeader: true,
                      noContainer: true,
                      noMain: true,
                      errorMessage: errorMessage,
                      dataMenuType: dataMenuType.map (dataMenuType => dataMenuType.toObject()),
                      dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
                    });
                }
        
                if (err instanceof multer.MulterError) {
                  const errorMessage = "Bạn đã chọn nhiều hơn 2 ảnh";
                  const dataMenu = await Menu.find().populate('menuType');
                  const dataMenuType = await MenuType.find();
                  return res.render('Menu/createMenu', {
                      showHeader: true,
                      noContainer: true,
                      noMain: true,
                      errorMessage: errorMessage,
                      dataMenuType: dataMenuType.map (dataMenuType => dataMenuType.toObject()),
                      dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
                    });
                } else if (err) {
                const errorMessage = err.message;
                 const dataMenu = await Menu.find().populate('menuType');
                const dataMenuType = await MenuType.find();
                return res.render('Menu/createMenu', {
                    showHeader: true,
                    noContainer: true,
                    noMain: true,
                    errorMessage: errorMessage,
                    dataMenuType: dataMenuType.map (dataMenuType => dataMenuType.toObject()),
                    dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
                  });
                }
            
                
            const { selectMenuType ,nameMenu,statusMenu, priceMenu } = req.body;
         
            if(!nameMenu || !priceMenu || selectMenuType == "no"){
                const errorMessage = "Vui lòng điền đầy đủ thông tin";
                const dataMenuType = await MenuType.find();
                const dataMenu = await Menu.find().populate('menuType');
                return res.render('Menu/createMenu', {
                    showHeader: true,
                    noContainer: true,
                    noMain: true,
                    errorMessage: errorMessage,
                    dataMenuType: dataMenuType.map (dataMenuType => dataMenuType.toObject()),
                    dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
                  });
            }else if (!req.files || req.files.length === 0) {
                const errorMessage = 'Vui lòng chọn ảnh'
                const dataMenuType = await MenuType.find();
                const dataMenu = await Menu.find().populate('menuType');
                return res.render('Menu/createMenu', {
                    showHeader: true,
                    noContainer: true,
                    noMain: true,
                    errorMessage: errorMessage,
                    dataMenuType: dataMenuType.map (dataMenuType => dataMenuType.toObject()),
                    dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
                  });
              }else{
                const images = req.files.map((file) => file.filename);
                const newMenu =  new Menu({menuType: selectMenuType, nameMenu: nameMenu, priceMenu:priceMenu, statusMenu:statusMenu === 'on' , imageMenu: images});
                const saveMenu = await newMenu.save();
                const dataMenuType = await MenuType.find();
                const dataMenu = await Menu.find().populate('menuType')
                const successMessage = "Add successfully";
                return res.render('Menu/createMenu', {
                    saveMenu: saveMenu,
                    showHeader: true,
                    noContainer: true,
                    noMain: true,
                    dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
                    dataMenuType: dataMenuType.map (dataMenuType => dataMenuType.toObject()),
                    successMessage: successMessage,
                    // data: data.map(data => data.toObject()),
                  });
                  
            }
        })
        }catch(err){
            res.status(500).json(err)
        }
    }


    // async addMenu(req, res) {
    //     try{
          
            
                
    //         const { selectMenuType ,nameMenu,statusMenu, priceMenu } = req.body;
    //         if(!nameMenu){
    //             const errorMessage = "Please enter Menu name";
    //             const dataMenuType = await MenuType.find();
    //             const dataMenu = await Menu.find().populate('menuType');
    //             return res.render('Menu/createMenu', {
    //                 showHeader: true,
    //                 noContainer: true,
    //                 noMain: true,
    //                 errorMessage: errorMessage,
    //                 dataMenuType: dataMenuType.map (dataMenuType => dataMenuType.toObject()),
    //                 dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
    //               });
    //         }else if(selectMenuType == "no"){
    //             const errorMessage = "Please select Menu type";
    //             const dataMenu = await Menu.find().populate('menuType');
    //             const dataMenuType = await MenuType.find();
    //             return res.render('Menu/createMenu', {
    //                 showHeader: true,
    //                 noContainer: true,
    //                 noMain: true,
    //                 errorMessage: errorMessage,
    //                 dataMenuType: dataMenuType.map (dataMenuType => dataMenuType.toObject()),
    //                 dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
    //               });
    //         }else{

    //             const newMenu =  new Menu({menuType: selectMenuType, nameMenu: nameMenu, priceMenu:priceMenu, statusMenu:statusMenu === 'on'});
    //             const saveMenu = await newMenu.save();
    //             const dataMenuType = await MenuType.find();
    //             const dataMenu = await Menu.find().populate('menuType')

    //             const successMessage = "Add successfully";
    //             return res.render('Menu/createMenu', {
    //                 saveMenu: saveMenu,
    //                 showHeader: true,
    //                 noContainer: true,
    //                 noMain: true,
    //                 dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
    //                 dataMenuType: dataMenuType.map (dataMenuType => dataMenuType.toObject()),
    //                 successMessage: successMessage,
    //                 // data: data.map(data => data.toObject()),
    //               });
                  
    //         }
   
    //     }catch(err){
    //         res.status(500).json(err)
    //     }
    // }
    
    async getAllMenu(req,res){
        try{
            const getAllMenu = await Menu.find()
            res.status(200).json(getAllMenu);
        }catch(err){
            res.status(500).json(err);
        }
    }

    

    async deleteMenu(req,res){
        try {
            const id = req.params.id;
            const menu = await Menu.findOne({ _id: id });
      
            if (!menu) {
              return res.status(404).json({ error: 'Menu not found' });
            }
      
            // Gọi hàm deleteImages để xóa ảnh từ thư mục img
            deleteImages(menu.imageMenu);
      
            // Xóa menu
            const deleteMenu = await menu.deleteOne();
      
            const dataMenuType = await MenuType.find();
            const dataMenu = await Menu.find().populate('menuType');
            res.render('Menu/createMenu', {
              deleteMenu: deleteMenu,
              showHeader: true,
              noContainer: true,
              noMain: true,
              dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
              dataMenuType: dataMenuType.map(dataMenuType => dataMenuType.toObject()),
              success: true,
            });
        }catch(err){
            res.status(500).json(err);
        }
    }



    // async deleteMenu(req,res){
    //     try{
    //         const id = req.params.id
    //         const deleteMenu = await Menu.findByIdAndDelete(id);
    //         const dataMenuType = await MenuType.find();
    //         const dataMenu = await Menu.find().populate('menuType')
    //         res.render('Menu/createMenu', {
    //             deleteMenu: deleteMenu,
    //             showHeader: true,
    //             noContainer: true,
    //             noMain: true,
    //             dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
    //             dataMenuType: dataMenuType.map (dataMenuType => dataMenuType.toObject()),
    //             success: true,
    //             // data: data.map(data => data.toObject()),
    //           });
    //     }catch(err){
    //         res.status(500).json(err);
    //     }
    // }

    async updateMenu(req,res){
        try{

            upload(req, res, async (err) => {
                if (req.files.length > 2) {
                  return res
                    .status(400)
                    .json({ error: "chỉ chọn tối đa 2 ảnh" });
                }
        
                if (req.files && req.files.length > 2) {
                  const errorMessage = "Bạn chỉ có thể chọn tối đa 2 ảnh.";
                  const dataMenu = await Menu.find().populate('menuType');
                  const dataMenuType = await MenuType.find();
                  return res.render('Menu/createMenu', {
                      showHeader: true,
                      noContainer: true,
                      noMain: true,
                      errorMessage: errorMessage,
                      dataMenuType: dataMenuType.map (dataMenuType => dataMenuType.toObject()),
                      dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
                    });
                }
        
                if (err instanceof multer.MulterError) {
                  const errorMessage = "Bạn đã chọn nhiều hơn 2 ảnh";
                  const dataMenu = await Menu.find().populate('menuType');
                  const dataMenuType = await MenuType.find();
                  return res.render('Menu/createMenu', {
                      showHeader: true,
                      noContainer: true,
                      noMain: true,
                      errorMessage: errorMessage,
                      dataMenuType: dataMenuType.map (dataMenuType => dataMenuType.toObject()),
                      dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
                    });
                } else if (err) {
                const errorMessage = err.message;
                 const dataMenu = await Menu.find().populate('menuType');
                const dataMenuType = await MenuType.find();
                return res.render('Menu/createMenu', {
                    showHeader: true,
                    noContainer: true,
                    noMain: true,
                    errorMessage: errorMessage,
                    dataMenuType: dataMenuType.map (dataMenuType => dataMenuType.toObject()),
                    dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
                  });
                }
            
            const { selectMenuType ,nameMenu,statusMenu, priceMenu } = req.body;
            const id = req.params.id;
            const menu =  await Menu.findOne({_id: id});
            // Nếu có tệp ảnh mới được gửi lên, cập nhật ảnh
            if (req.files && req.files.length > 0) {
            // Xóa ảnh cũ của xe từ thư mục "uploads"
                for (const image of menu.imageMenu) {
                const imagePath = path.join(__dirname, "../../public/img", image);
                fs.unlinkSync(imagePath);
            }
  
            // Thêm ảnh mới vào thông tin xe
            const images = req.files.map((file) => file.filename);
            menu.imageMenu = images;
          }

          menu.nameMenu = nameMenu;
          menu.priceMenu = priceMenu;
          menu.selectMenuType = selectMenuType;
          menu.statusMenu = statusMenu === 'on';
          await menu.save();
                // lấy data
                const dataMenuType = await MenuType.find();
                const dataMenu = await Menu.find().populate('menuType')
                return res.render('Menu/createMenu', {
                    showHeader: true,
                    noContainer: true,
                    noMain: true,
                    dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
                    dataMenuType: dataMenuType.map (dataMenuType => dataMenuType.toObject()),
                    // data: data.map(data => data.toObject()),
                  });
                });
        }catch(err){
            res.status(500).json(err);
        }
    }







    async createMenuScreen(req,res){
        try{
            const dataMenuType = await MenuType.find();
            const dataMenu = await Menu.find().populate('menuType','nameMenuType')
            res.render('Menu/createMenu', {
                showHeader: true,
                noContainer: true,
                noMain : true ,
                dataMenuType: dataMenuType.map (dataMenuType => dataMenuType.toObject()),
                dataMenu: dataMenu.map(dataMenu => dataMenu.toObject()),
              });
        }catch(err){
            res.status(500).json(err);
        }
    }







   async apiAddMenu(req, res) {
        try{
            const newMenu = new Menu(req.body);
            const saveMenu = await  newMenu.save();
            res.status(200).json(saveMenu);
        }catch(err){
            res.status(500).json(err)
        }
    }
    


    async apiGetAllMenu(req,res){
        try{
            const getAllMenu = await Menu.find()
            res.status(200).json(getAllMenu);
        }catch(err){
            res.status(500).json(err);
        }
    }


    // async apiDeleteMenu(req,res){
    //     try{
    //         const getAllMenu = await Menu.find()
    //         res.status(200).json(getAllMenu);
    //     }catch(err){
    //         res.status(500).json(err);
    //     }
    // }


    // async apiUpdateMenu(req,res){
    //     try{
    //         const getAllMenu = await Menu.find()
    //         res.status(200).json(getAllMenu);
    //     }catch(err){
    //         res.status(500).json(err);
    //     }
    // }





}
module.exports = new MenuController;
