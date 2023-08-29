const express = require("express");

const router = express.Router();

const adminController = require('../controllers/admin')


router.get('/',adminController.getTask);
router.post('/',adminController.postTask);

router.post('/filter',adminController.postFilter);


router.post('/delete-task',adminController.postDeleteTask);

router.get('/edit-task/:taskId',adminController.getEditTasks);

router.post('/edit-task',adminController.postEditTasks);

router.post("/complete/:taskId",adminController.updateBox)

module.exports = router;