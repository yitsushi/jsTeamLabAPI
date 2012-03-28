var utils = require('../utils'),
    querystring = require('querystring'),
    http = require('http');

module.exports = function(method, path, post_data, callback) {
  if (post_data === null) post_data = {};
  var options, req,
      query = querystring.stringify(post_data);
      
  method = method.toUpperCase();
  
  options = {
    host: this.domain,
    port: 80,
    path: utils.api_path(path),
    method: method,
    headers: {}
  };
  
  if (this.session) {
    options.headers.Authorization = this.session.token;
  }
  
  if (method === 'POST') {
    if (query.length < 1) {
      throw "This is a POST method without post data?";
    }
    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    options.headers['Content-Length'] = query.length;
  }
  
  var _this = this;
  req = http.request(options, function(res) {
    var body = "";
    res.setEncoding('utf8');
    res.addListener('data', function(chunk) {
      body += chunk;
    });
    res.addListener('end', function() {
      var response = null, error = null, data = null;
      try {
        response = JSON.parse(body);
        if (response.error) error = response.error;
        if (response.response) {
          data = response.response;
          if (_this.session === null) _this.session = response.response;
        }
      } catch(err) {
        error = { 'message': err };
      }
      if (typeof callback === "function") callback(error, data);
    });
  });
  if (method === 'POST') {
    req.write(query);
  }
  req.end();
};