module.exports = function(_instance) {
  return {
    /* Constants */
    Status: {
      OPEN: 'Open',
      CLOSED: 'Closed',
      SUSPENDED: 'Suspended'
    },
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
    },
    /* Write methods */
    create_project: function(title, description, responsibleId, tags, private, callback) {
      var params = {
        title: title,
        description: description,
        responsibleId: responsibleId,
        tags: tags,
        private: !!private
      }
      _instance.api_call('POST', '/project', params, callback);
    },
    request_project: function(title, description, responsibleId, tags, callback) {
      var params = {
        title: title,
        description: description,
        responsibleId: responsibleId,
        tags: tags
      }
      _instance.api_call('POST', '/project/request', params, callback);
    },
    create_milestone: function(project_id, title, deadline, is_key, callback) {
      var params = {
        title: title,
        deadline: deadline,
        isKey: !!is_key
      }
      _instance.api_call('POST', '/project/' + project_id + '/milestone', params, callback);
    },
    update_project: function(project_id, title, description, responsibleId, tags, private, status, callback) {
      var params = {
        title: title,
        description: description,
        responsibleId: responsibleId,
        tags: tags,
        private: !!private,
        status: status
      }
      _instance.api_call('PUT', '/project/' + project_id, params, callback);
    },
    update_tags: function(project_id, tags, callback) {
      var params = {
        tags: tags,
      }
      _instance.api_call('PUT', '/project/' + project_id + '/tag', params, callback);
    },
    request_update_project: function(project_id, title, description, responsibleId, tags, status, callback) {
      var params = {
        title: title,
        description: description,
        responsibleId: responsibleId,
        tags: tags,
        private: !!private,
        status: status
      }
      _instance.api_call('PUT', '/project/' + project_id + '/request', params, callback);
    },
    delete_project: function(project_id, callback) {
      _instance.api_call('DELETE', '/project/' + project_id, null, callback);
    },
    request_delete_project: function(project_id, callback) {
      _instance.api_call('DELETE', '/project/' + project_id + '/request', null, callback);
    },
    delete_task: function(task_id, callback) {
      _instance.api_call('DELETE', '/project/task/' + task_id, null, callback);
    }
  };
};