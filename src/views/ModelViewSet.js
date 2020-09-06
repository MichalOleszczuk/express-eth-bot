const express = require('express');
const expressRouter = express.Router();
const responses = require('../requests/index');
const dataBaseConnection = require('../dataBase');

class ModelViewSet {
    constructor() {
        this.router = expressRouter;

        // Bind all methods to instance of view set
        this.create = this.create.bind(this);
        this.list = this.list.bind(this);
        this.retrieve = this.retrieve.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);

        // On construction pass router and DB connection to function.
        // If someone wants to overwrite it he will allways have access to router and dataBase instance.
        this.create(this.router, dataBaseConnection);
        this.list(this.router, dataBaseConnection);
        this.retrieve(this.router, dataBaseConnection);
        this.update(this.router, dataBaseConnection);
        this.delete(this.router, dataBaseConnection);
    }

    create(router, dataBase) {
        dataBase.then(db => {
            return router.post('/', function (req, res) {
                responses.sendOk(req, res, {
                    requestBody: req.body,
                    dbInstance: db,
                });
            });
        });
    }

    list(router, dataBase) {
        dataBase.then(db => {
            return router.get('/', function (req, res) {
                responses.sendOk(req, res, {
                    result: [],
                    dbInstance: db,
                });
            });
        });
    }

    retrieve(router, dataBase) {
        dataBase.then(db => {
            return router.get('/:id', function (req, res) {
                const id = req.params.id;
                responses.sendOk(req, res, {
                    queryParamID: id,
                    dbInstance: db,
                });
            });
        });
    }

    update(router, dataBase) {
        dataBase.then(db => {
            return router.put('/:id', function (req, res) {
                const id = req.params.id;
                responses.sendOk(req, res, {
                    queryParamID: id,
                    dbInstance: db,
                });
            });
        });
    }

    delete(router, dataBase) {
        dataBase.then(db => {
            return router.delete('/:id', function (req, res) {
                const id = req.params.id;
                responses.sendOk(req, res, {
                    queryParamID: id,
                    dbInstance: db,
                });
            });
        });
    }
}

module.exports = ModelViewSet;
