var router = require('express').Router();
var controller = require('./controllers');


router.get('/user', controller.user.get);
router.post('/user', controller.user.post);

router.get('/users', controller.users.get);
router.post('/users', controller.users.post);

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

router.get('/getgroup', controller.group.get);
router.post('/addgroup', controller.group.post);

router.get('/getgroups', controller.groups.get);

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

router.get('/menu', controller.menu.get);
router.post('/menu', controller.menu.post);

module.exports = router;