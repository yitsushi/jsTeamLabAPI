module.exports = {
  authenticate: function(username, password, callback) {
    if (username) this.username = username;
    if (password) this.password = password;
  
    var post_data = {
      'userName': this.username,
      'password': this.password
    };
  
    this.api_call('POST', '/authentication', post_data, callback);
  }
};