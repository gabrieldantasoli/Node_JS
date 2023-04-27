const Task = require("../models/Task");

module.exports = class TaskContoller {
    static createTask(req, res) {
        res.render('tasks/create');
    }
};