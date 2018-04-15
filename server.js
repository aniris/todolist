
var express = require('express');
var history = require('connect-history-api-fallback');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(history({
  // verbose: true
}));
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);

// var express = require('express');
// var app = express();
// var path = require('path');
//

//
// app.use(express.static(__dirname + '/dist'));
//
// app.set('port', (process.env.PORT || 8080));
//
// app.listen(app.get('port'), () => {
//   console.log(`ENV: ${process.env.NODE_ENV}`);
//   console.log(`Derp is running at localhost: ${app.get('port')}`);
// });

