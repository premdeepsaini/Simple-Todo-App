var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('./lib/mongo/mongo');
var routes = require('./lib/routes');
var port = 3000;
var uri = '127.0.0.1:27017/Todo';

app.use(express.static('./public'));
app.use(bodyParser.json());

mongo.connect(uri);
routes.getRoutes(app);

app.listen(port);
console.log('Node Server listening on port '+ port);
