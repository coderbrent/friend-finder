const express = require('express')
const app = express()
const path = require('path');

const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/app', express.static(path.join(__dirname, 'public')));
// require("/Users/brentabruzese/Desktop/projects/friend-finder/app/routing/apiRoutes.js")(app);
require("/Users/brentabruzese/Desktop/projects/friend-finder/app/routing/htmlRoutes.js")(app);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

