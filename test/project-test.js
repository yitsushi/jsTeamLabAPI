var TeamLab = require('../teamlabapi'),
    Config = require('./config'),
    should = require('should'),
    assert = require("assert");

describe('project', function() {
  var api;
  
  beforeEach(function() {
    api = new TeamLab(Config.domain);
  });
  
  describe('#list', function() {
    it('should return with a list of projects', function(done) {
      api.authenticate(
        Config.true_login.username,
        Config.true_login.password,
        function(err) {
          should.not.exist(err);
          api.project.all(function(err, data) {
            should.not.exist(err);
            should.exist(data);
            assert(typeof data, typeof new Array());
            done();
          });
        });
    });
  });
});