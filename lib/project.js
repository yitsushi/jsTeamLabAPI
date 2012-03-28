module.exports = function(_instance) {
  return {
    /* Read methods */
    all: function(callback) {
      _instance.api_call('GET', '/project', null, callback);
    },
    get: function(id, callback) {
      _instance.api_call('GET', '/project/' + id, null, callback);
    },
    self: function(callback) {
      _instance.api_call('GET', '/project/@self', null, callback);
    },
    follow: function(callback) {
      _instance.api_call('GET', '/project/@follow', null, callback);
    },
    by_status: function(status, callback) {
      _instance.api_call('GET', '/project/' + status, null, callback);
    },
    time_spent: function(id, callback) {
      _instance.api_call('GET', '/project/' + id + '/time', null, callback);
    },
    milestones_in: function(id, callback) {
      _instance.api_call('GET', '/project/' + id + '/milestone', null, callback);
    },
    find: function(query, callback) {
      _instance.api_call('GET', '/project/@search/' + query, null, callback);
    },
    find_in: function(id, query, callback) {
      _instance.api_call('GET', '/project/' + id + '/@search/' + query, null, callback);
    },
    milestones_by_status_in: function(id, status, callback) {
      _instance.api_call('GET', '/project/' + id + '/milestone/' + status, null, callback);
    }
    /* Write methods */
    /* ... */
  };
};