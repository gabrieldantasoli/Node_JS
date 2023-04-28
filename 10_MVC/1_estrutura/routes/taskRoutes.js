const express = require('express');
const router = express.Router();

const TaskContoller = require('../controllers/TaskController');

router.get('/add', TaskContoller.createTask);
router.post('/add', TaskContoller.createTaskSave);
router.post('/remove', TaskContoller.removeTask);
router.get('/', TaskContoller.showTasks);

module.exports = router;