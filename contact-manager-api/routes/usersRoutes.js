const express = require('express');
const {loginUsers,currentUsers,registerUsers} = require('../controllers/usersControllers')
const router = express.Router();

router.route('/current').get(currentUsers);
router.route('/login').post(loginUsers);
router.route('/register').post(registerUsers);

module.exports = router;