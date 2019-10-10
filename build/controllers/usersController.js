"use strict";

var fs = require('fs');

var User = require('../models/users.js');

exports.addUser = function (req, res) {
  var data = new User({
    "name": req.body.name,
    "email": req.body.email
  });

  var storeData = function storeData(data, path) {
    try {
      fs.writeFileSync('./usersDetails.json', JSON.stringify(data));
    } catch (err) {
      console.error(err);
    }
  };
};
//# sourceMappingURL=usersController.js.map