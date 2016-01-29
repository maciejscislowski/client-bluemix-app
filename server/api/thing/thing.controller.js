/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Thing; // this is not implemented yet. It should obtain Thing objection from cloudantUtil.

// Below is a mock object; need to replaced by real implementation GET /things --> index
exports.index = function (req, res) {
        return res.json([
            {
                "key": "1",
                "name": 'live feed 1',
                "info": "DBaSS, MBaSS, IoT"
            }, {
                "key": "2",
                "name": "live feed 2",
                "info": "mobilefirst, urbancode, bluemix"
            }
        ])
    } 
