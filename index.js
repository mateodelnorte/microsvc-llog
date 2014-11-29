var log = require('llog');
var Plugin = require('microsvc').Plugin;
var util = require('util');

function LlogPlugin () {
  Plugin.call(this);
}

util.inherits(LlogPlugin, Plugin);

LlogPlugin.prototype._start = function _start (service) {
  service.log = log;
  this.done();
};

module.exports = new LlogPlugin();