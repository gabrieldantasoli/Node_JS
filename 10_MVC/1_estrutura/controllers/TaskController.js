const Task = require("../models/Task");

module.exports = class TaskContoller {
    static createTask(req, res) {
        res.render('tasks/create');
    }

    static async createTaskSave(req, res) {
        const task = {
            title: req.body.title,
            decription: req.body.decription,
            done: false
        }

        await Task.create(task);

        res.redirect('/tasks');
    }

    static async showTasks(req, res) {
        const tasks = await Task.findAll( { raw: true } );

        res.render('tasks/all', { tasks });
    }
};