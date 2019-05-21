const path = require('path');
const bodyParser = require('body-parser');

module.exports = function(app) {

var friends = require("/Users/brentabruzese/friend-finder/app/data/friends.json")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/friends', function(req, res) {
  const keys = Object.values(friends);
  for(const key of keys){
    res.send(keys);
  }
})

app.post('/api/friends', function(req, res) {
  json = res.json(req.body);
  res.send(json);
  console.log(json);
})

}

