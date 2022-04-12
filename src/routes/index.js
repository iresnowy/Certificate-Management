const loginRouter= require('./loginRouter');
const guestRouter = require('./guestRouter');
const pdtstu_managerRoute= require('./pdtRouter/stu_mamagerRouter');
const pdtpoint_managerRoute= require('./pdtRouter/point_managerRouter');
const adminstu_managerRoute= require('./adminRouter/stu_mamagerRouter');
const adminpoint_managerRoute= require('./adminRouter/point_managerRouter');
const adminaccount_managerRoute = require('./adminRouter/account_managerRouter');
const adminwaitcertifi_manager = require('./adminRouter/waitcertifi_managerRouter');
const admincertifi_manager = require('./adminRouter/certifi_managerRouter');
const htstu_managerRoute= require('./htRouter/stu_managementRouter');
const htpoint_managerRoute=require('./htRouter/point_managementRouter');
const pdtcertifi_manager = require('./pdtRouter/certifi_managerRouter');
const htwaitcertifi_manager = require('./htRouter/waitcertifi_managerRouter');
const htcertifi_manager = require('./htRouter/certifi_managerRouter');
const updatelist_manager= require('./adminRouter/updatelistRouter')
function route(app) {
  app.use('/', loginRouter);
  app.use('/', guestRouter);
  app.use('/', pdtstu_managerRoute);
  app.use('/', pdtpoint_managerRoute);
  app.use('/', adminstu_managerRoute);
  app.use('/', adminpoint_managerRoute);
  app.use('/', adminaccount_managerRoute);
  app.use('/',htstu_managerRoute);
  app.use('/',htpoint_managerRoute);
  app.use('/', adminwaitcertifi_manager);
  app.use('/', admincertifi_manager);
  app.use('/', pdtcertifi_manager);
  app.use('/', htwaitcertifi_manager);
  app.use('/', htcertifi_manager);
  app.use('/', updatelist_manager);
}
module.exports = route;
