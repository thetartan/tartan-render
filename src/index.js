'use strict';

var _ = require('lodash');
var tartan = require('tartan');
var canvas = require('./canvas');
var houseOfTartan = require('./house-of-tartan');

_.extend(module.exports, require('./@package'));

module.exports.canvas = canvas;
module.exports.houseOfTartan = houseOfTartan;

tartan.render.canvas = canvas;
tartan.render.houseOfTartan = houseOfTartan;
