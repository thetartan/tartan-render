'use strict';

var _ = require('lodash');
var tartan = require('tartan');

_.extend(module.exports, require('./@package'));

module.exports.render = require('./render');

_.extend(tartan.render, module.exports.render);
