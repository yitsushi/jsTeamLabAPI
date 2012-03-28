var TeamLab = require('../teamlabapi'),
    Config = require('./config'),
    should = require('should');

describe('authentication', function() {
  var api;
  
  beforeEach(function() {
    api = new TeamLab(Config.domain);
  });
  
  describe('with false login', function() {
    it('should return with error and null', function(done) {
      api.authenticate(
        Config.false_login.username,
        Config.false_login.password,
        function(err, data) {
          should.not.exist(data);
          should.exist(err);
          err.should.have.property('message');
          err.message.should.eql('Invalid username or password.');
          done()
        });
    });
  });
  
  describe('with true login', function() {
    it('should return with error and null', function(done) {
      api.authenticate(
        Config.true_login.username,
        Config.true_login.password,
        function(err, data) {
          should.not.exist(err);
          should.exist(data);
          data.should.have.property('token');
          data.should.have.property('expires');
          done();
        });
    });
  });
});
