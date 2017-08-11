var express = require("express");
var NewController = require('../controllers/NewController');
var router = express.Router();
var NewRoutes = (function () {
    function NewRoutes() {
        this._newController = new NewController();
    }
    Object.defineProperty(NewRoutes.prototype, "routes", {
        get: function () {
            var controller = this._newController;
            console.log('-------------routes------------------');
            router.get("/new", controller.retrieve.bind(controller));
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return NewRoutes;
})();
Object.seal(NewRoutes);
module.exports = NewRoutes;
//
// 'use strict';
//
// // ---
//
// const path        = require('path');
// const Busboy      = require('busboy');
// const csv         = require('fast-csv');
// const Excel       = require('exceljs');
// const nodemailer  = require('nodemailer');
// const Promise     = require('bluebird');
// const moment      = require('moment');
// const mylog       = require('../common/mylog.js');
// const mytmp       = require('../common/mytmp.js');
// const repository  = require('./clientRateRepository.js')();
// const tools       = require('../common/tools.js')();
// const userService = require('../user/userService.js');
//
// // ---
//
// module.exports.route = require('express').Router()
//     .put('/', userService.authenticate('upload_rates'), (req, res, next) => {
//       repository.update(req.body)
//           .then(res.json.bind(res))
//           .catch(next)
//       ;
//     })
//
//     .post('/byCriteria', userService.authenticate('rates'), (req, res, next) => {
//       assertClientIdIsAllowed(req.user, req.body.criteria);
//       repository.getByCriteria(req.body)
//           .then(res.json.bind(res))
//           .catch(next)
//       ;
//     }) 
//# sourceMappingURL=newService.js.map