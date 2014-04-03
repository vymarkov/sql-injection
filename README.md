[![Build Status](https://secure.travis-ci.org/socialradar/sql-injection.png)](http://travis-ci.org/socialradar/sql-injection)

sql-injection
=============

This express module detects sql injection attacks and stops them by sending 403 as response.
The module checks the query string, route params, and body for any sql injection related content.

```js
var app = express();
var sqlinjection = require('sql-injection');
app.use(sqlinjection);
```

## Installation

    $ npm install sql-injection


## Usage

code example:

```js
var app = express();
var sqlinjection = require('sql-injection');
app.use(sqlinjection);

app.get('/route1', function(req, res) {
    res.send(200, {});
});
app.get('/route2/:uid', function(req, res) {
    res.send(200, {});
});
app.post('/route3', function(req, res) {
    res.send(200, {});
});
app.listen(3000);
```