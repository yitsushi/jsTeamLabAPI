var utils = require('./utils'),
    TeamLab;

TeamLab = function(domain) {
  this.domain   = domain;
  this.username = 'username';
  this.password = 'password';
  this.session  = null;
  
  this.project = require('./lib/project')(this);
};

TeamLab.prototype.api_call = require('./lib/api_call');
TeamLab.prototype.authenticate = require('./lib/authentication').authenticate;
//TeamLab.prototype.project = require('./lib/project');

module.exports = TeamLab;