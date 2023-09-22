
class SiteController {

    //[GET] /news
    home(req, res) {
        try{
            res.render('home', { 
                showHeader: true,
                noContainer: true,
                noMain : true // Đặt biến showHeader để ẩn header
            });
        }catch(err){
            res.status(500).json(err)
        }
    }

    async login(req, res) {
        try{
            res.render('login', { 
                showHeader: false,
                noContainer: false,
                noMain : false
                // Đặt biến showHeader để ẩn header
            });
        }catch(err){
            res.status(500).json(err)
        }
    }


}
module.exports = new SiteController;

