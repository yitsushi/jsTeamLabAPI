# jsTeamLabAPI

**UNDER DEVELOPMENT**

**Suspended: does not work; reason: API changes**

Node.js module to access TeamLabs's API

### Sample Usage

    var TeamLab = require('jsTeamLabAPI');
    
    var api = new TeamLab('your teamlab subdomain/custom domain');
    
    api.authenticate('username/email address', "password", function(error, data) {
      if (error) return console.log(error);
      console.log("Authentication successful");
    
      api.project_list(function(error, data) {
        if (error) return console.log(error);
        console.log("List of Projects:");
        for(var i = 0, _d = data[i], _l = data.length; i < _l; i++, _d = data[i]) {
          console.log("-----------------------------");
          console.log(_d.title, _d.description);
        }
      })
    });

### Links

* [TeamLab API β](http://api.teamlab.com/)