// We're giving port and root both their own variable names
var express  = require( 'express' ),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    bp       = require('body-parser'),
    app      = express();

// Note the two seperate static content paths, one for client
// and one for bower components.
app.use(express.static(path.join(root, 'client' )));
app.use(express.static(path.join(root, 'bower_components' )));

// We're calling body-parser `bp` just to shorten it
app.use(bp.json())

// Routes should always go after all of our app.use, app.config
// and all our require statements. Routes needs that middleware
// to be ready.
require('./server/config/db.js');
require('./server/config/routes.js')(app);

// Often in large projects and frameworks, the port is abstracted
// out and given it's own variable, sometimes coming from a deep
// config file. We're doing the same right here.
app.listen(port, function(){
  console.log( "server running on " + port);
});
