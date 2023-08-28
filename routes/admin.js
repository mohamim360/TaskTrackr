const express = require("express");

const router = express.Router();

const adminController = require('../controllers/admin')


router.get('/',adminController.getTask);
router.post('/',adminController.postTask);


module.exports = router;