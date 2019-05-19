const path = require('path');
const bodyParser = require('body-parser');

module.exports = function(app) {

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/friends', function(req, res) {
  res.sendFile('/Users/brentabruzese/friend-finder/app/data/friends.js');
})

app.post('/api/friends', function(req, res) {

})

}

