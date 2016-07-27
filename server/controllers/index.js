//PASS REQ DATA TO MODELS

var models = require('../models');
var app = require('../server.js').app;

module.exports = {
  user: { 
    get: function (req, res) { //LOGIN USER
      console.log('passing to models', req.query);
      models.user.get(req.query.username, (data) => {
        res.json(data);
      });
    },
    post: function (req, res) { //REGISTER USER
      models.user.post(req.body);
      res.end();
    }
  },
  users: { 
    get: function (req, res) { //GET USERS FOR A SPECIFIC GROUP
      models.users.get(req.body.groupname);
    },
    post: function (req, res) { //mostlikely not needed-------------------
    }
  },
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  group: {
    get: function (req, res) { //LOOKING AT A GROUP
      models.group.get(req.body.groupname, (data) => {
        res.json(data);
      });
    },
    post: function (req, res) { //ADD GROUP
      models.group.post(req.body);
      res.end();
    }
  },
  groups: {
    get: function (req, res) { //GET ALL GROUPS
      models.groups.get((data) => {
        res.json(data);
      });
    },
    post: function (req, res) { //mostlikely not needed-------------------
    }
  },
  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  menu: {
    get: function(req, res) {
      console.log('menu in controllers', req.body, req.query);
      models.menu.get(req.query.username, req.query.groupname, (data) => {
        res.json(data);
      });
    },
    post: function(req, res) {
      models.menu.post(req.body);
      res.end();      
    }
  }
};

