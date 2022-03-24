const express = require("express");
const router = express.Router();
const userController = require('../controllers/user');

router.get('/getUsers' , userController.getUsers);
router.post('/addUser' ,userController.addUser);
router.delete('/deleteUser/:id',userController.deleteUser);

module.exports = router;