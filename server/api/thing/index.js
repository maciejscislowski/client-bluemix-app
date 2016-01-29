'use strict';

var express = require('express');
var router = express.Router();

var controller = require('./thing.controller');
router.get('/', controller.index);


//Below will be implemented later
//router.get('/:id', controller.show);
//router.post('/', controller.create);
//router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
//router.delete('/:id', controller.destroy);
module.exports = router;