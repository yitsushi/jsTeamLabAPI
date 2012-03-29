var TeamLab = require('../teamlabapi'),
    Config = require('./config'),
    should = require('should'),
    assert = require("assert");

describe('project', function() {
  var api;
  var project = null;

  beforeEach(function(done) {
    api = new TeamLab(Config.domain);
    api.authenticate(
      Config.true_login.username,
      Config.true_login.password,
      function(err) {
        done(err);
      });
  });

  describe('#list', function() {
    it('should return with a list of projects', function(done) {
      api.project.all(function(err, data) {
        should.not.exist(err);
        should.exist(data);
        assert(typeof data, typeof new Array());
        project = data[0];
        done();
      });
    });
  });

  describe('#get', function() {
    it('should return with a specified project', function(done) {
      api.project.get(project.id, function(err, data) {
        should.not.exist(err);
        should.exist(data);
        data.id.should.eql(project.id);
        done();
      });
    });
  });

  describe('#self', function() {
    it('should return with a list of projects in which the current user participates', function(done) {
      api.project.self(function(err, data) {
        should.not.exist(err);
        should.exist(data);
        assert(typeof data, typeof new Array());
        done();
      });
    });
  });
});