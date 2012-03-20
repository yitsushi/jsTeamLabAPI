var http = require('http');
var querystring = require('querystring');

TeamLab = function(domain) {
  this.domain   = domain;
  this.username = 'username';
  this.password = 'password';
  this.session  = null;
};

TeamLab.prototype.authenticate = function(username, password, callback) {
  if (username) this.username = username;
  if (password) this.password = password;
  
  var post_data = querystring.stringify({
    'userName': this.username,
    'password': this.password
  });
  
  var options = {
    host: this.domain,
    port: 80,
    path: '/api/1.0/authentication.json',
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': post_data.length
    }
  };

  var req = http.request(options, function(res) {
    var body = "";
    res.setEncoding('utf8');
    res.addListener('data', function(chunk) {
      body += chunk;
    });
    res.addListener('end', function() {
      var response = JSON.parse(body);
      var error = null;
      var data = null;
      if (response.error) error = response.error;
      if (response.response) {
        data = response.response;
        this.session = response.response;
      }
      if (typeof callback === "function") callback(error, response);
    });
  });
  req.write(post_data);
  req.end();
}

module.exports = TeamLab;