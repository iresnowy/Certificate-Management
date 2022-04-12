const loginRouter= require('./loginRouter');
const guestRouter = require('./guestRouter');

const adminstu_managerRoute= require('./adminRouter/stu_mamagerRouter');
const adminpoint_managerRoute= require('./adminRouter/point_managerRouter');
const adminaccount_managerRoute = require('./adminRouter/account_managerRouter');
const adminwaitcertifi_manager = require('./adminRouter/waitcertifi_managerRouter');
const admincertifi_manager = require('./adminRouter/certifi_managerRouter');

const updatelist_manager= require('./adminRouter/updatelistRouter')
function route(app) {
  app.use('/', loginRouter);
  app.use('/', guestRouter);
 
  app.use('/', adminstu_managerRoute);
  app.use('/', adminpoint_managerRoute);
  app.use('/', adminaccount_managerRoute);
 
  app.use('/', adminwaitcertifi_manager);
  app.use('/', admincertifi_manager);
 
  app.use('/', updatelist_manager);
}
module.exports = route;
