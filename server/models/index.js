//ONLY HANDLES SQL QUERIES
var mysql = require('mysql');
var db = require('../db');
var connection = db.connection;

var sql = 'SELECT * FROM ?? WHERE ?? = ?';
var insert = [];
//sql = mysql.format(sql, inserts);
module.exports = {
  user: {
    get: function (username, callback) { 
      connection.query('SELECT username,password,firstname FROM users WHERE username=\'' + username + '\'', (err, results) => {
        if (err) { 
          throw err; 
        } else {
          if (results.length === 1) {
            console.log('success getting user:', results);
            //callback(results, true);
            callback(results);
          } else {
            console.log('error getting user (multiple or none)');
            //callback(results, false);
          }
        }
      });
    },
    post: function (options) { //WORKING
      connection.query('INSERT INTO users SET?', 
        { username: options.username,
          password: options.password,
          firstname: options.firstname,
          lastname: options.lastname,
          phone: options.phone,
          email: options.email,
          diet: options.diet }, 
        function(err, res) {
          if (err) {
            console.log(err);
          }
          console.log('success adding user', res);
        }
      ); 
    }
  },
  users: {
    get: function (groupname) {  
      console.log('GETTING ALL USERS FROM', groupname);
      connection.query('SELECT * FROM users', (err, rows) => {
        if (err) { throw err; }
        console.log('success getting users from group:', rows);
      });
    },
    post: function (username) {
    }
  },

  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////

  group: {
    get: function (groupname, callback) {
      connection.query('SELECT * FROM groups', (err, rows) => {
        if (err) { throw err; }
        console.log('sucess getting group:', rows);
        callback(rows);
      });
    },
    post: function (options) {
      console.log('POSTING TO GROUPS', options);
      connection.query('INSERT INTO groups SET?', 
        { groupname: options.groupname}, 
        function(err, res) {
          if (err) {
            console.log(err);
          }
          console.log('success adding group', res);
        }
      ); 
    } 
  },
  groups: {
    get: function (callback) {
      connection.query('SELECT * FROM groups', (err, rows) => {
        if (err) { throw err; }
        console.log('sucess getting group:', rows);
        callback(rows);
      });
    },
    post: function (options) {
    } 
  },

  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////

  menu: {
    get: function(username, groupname, callback) {
      console.log('username', username, 'groupname', groupname);
      connection.query('SELECT id FROM users WHERE username=\'' + username + '\'', (err, uid) => {
        if (err) { 
          throw err; 
        } else {
          if (uid.length === 1) {
            console.log('success getting uid:', uid[0]);
            connection.query('SELECT id FROM groups WHERE groupname=\'' + groupname + '\'', (err, gid) => {
              if (err) { 
                throw err; 
              } else {
                if (gid.length === 1) {
                  console.log('success getting gid:', gid[0]);

                  connection.query('SELECT menu FROM usergroup WHERE gid=\'' + gid + '\' AND uid=\'' + uid + '\'', (err, rows) => {
                    if (err) { throw err; }
                    if (rows.length > 0) {
                      console.log('sucess getting MENU:', rows);
                      console.log('MENUS ROW', rows);
                      callback(rows);
                    }
                  });


                } else {
                  console.log('error getting gid (multiple or none)');
                }
              }
            });
          } else {
            console.log('error getting uid (multiple or none)');
          }
        }
      });
    },
    post: function(options) {
      console.log('options', options);
      connection.query('SELECT id FROM users WHERE username=\'' + options.username + '\'', (err, uid) => {
        if (err) { 
          throw err; 
        } else {
          if (uid.length === 1) {
            console.log('success getting uid:', uid[0]);
            connection.query('SELECT id FROM groups WHERE groupname=\'' + options.groupname + '\'', (err, gid) => {
              if (err) { 
                throw err; 
              } else {
                if (gid.length === 1) {
                  console.log('success getting gid:', gid[0]);
                  console.log('INSERT MENU as', 'uid', uid[0].id, 'gid', gid[0].id);
                  connection.query('INSERT INTO usergroup SET?', 
                    { menu: options.menu,
                      uid: uid[0].id,
                      gid: gid[0].id}, 
                    function(err, res) {
                      if (err) {
                        console.log(err);
                      }
                      console.log('success inserted into usergroup');
                    }
                  ); 
                } else {
                  console.log('error getting gid (multiple or none)');
                }
              }
            });
          } else {
            console.log('error getting uid (multiple or none)');
          }
        }
      });

    }      
  }  
};