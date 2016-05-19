/**
 * event touch
 * @author ydr.me
 * @create 2016-04-22 23:10
 */


'use strict';

var FastClick = require('../shims/fastclick.js');

FastClick.attach(document.body);

module.exports = require('./event.js');
