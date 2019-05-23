const express = require('express');
const app = express();
const path = require('path');

module.exports = function(app) {

  app.get('/api/friends', function(req, res) {
    const jsonData = require('../data/friends.json')
    res.send(jsonData);
  });

}