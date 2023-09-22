
const siteRouter = require('./site');
const StaffRouter = require('./staff');
const RestaurantRouter = require('./restaurant');
const MenuTypeRouter = require('./menuType');
const TableTypeRouter = require('./tableType');
const TableRouter = require('./table');
const MenuRouter = require('./menu');
const OderMenuRouter = require('./oderMenu');
const OderTableRouter = require('./oderTable');
const InvoiceRouter = require('./invoice');
const ClientRouter = require('./client');


function route(app){

app.use('/',siteRouter);
//add
app.use('/nv',StaffRouter);
app.use('/nh',RestaurantRouter);
app.use('/lm',MenuTypeRouter);
app.use('/lb',TableTypeRouter);
app.use('/ban',TableRouter);
app.use('/mon',MenuRouter);
app.use('/dm',OderMenuRouter);
app.use('/db',OderTableRouter);
app.use('/hd',InvoiceRouter);
app.use('/kh',ClientRouter);





}

module.exports = route;