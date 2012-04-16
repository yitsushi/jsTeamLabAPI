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
  
  describe('#create_project', function() {
    it('should create a new project and return with details of created project', function(done) {
      api.project.create_project(
        Config.project.title,
        Config.project.description,
        Config.project.responsibleId,
        Config.project.tags,
        Config.project.private,
        function(err, data) {
          should.not.exist(err);
          should.exist(data);
          project = data;
          done();
        })
    });
  });

  describe('#list', function() {
    it('should return with a list of projects', function(done) {
      api.project.all(function(err, data) {
        should.not.exist(err);
        should.exist(data);
        assert(typeof data, typeof new Array());
        var _t = false;
        for(var i = 0, _l = data.length; i < _l; i++) {
          if (data[i].id === project.id) {
            _t = true;
            break;
          }
        }
        assert(_t, true);
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
        var _t = false;
        for(var i = 0, _l = data.length; i < _l; i++) {
          if (data[i].id === project.id) {
            _t = true;
            break;
          }
        }
        assert(_t, true);
        done();
      });
    });
  });
  describe('#delete_project', function() {
    it('should delete the test project', function(done) {
      api.project.delete_project(project.id, function(err, data) {
        should.not.exist(err);
        should.exist(data);
        done();
      });
    });
  })
});