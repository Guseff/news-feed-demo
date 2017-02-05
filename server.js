var express  = require('express')
var webpackMiddleware = require("webpack-dev-middleware");
var webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')
var app = express()
var port = 3000

app.use(express.static('./'));
app.use(webpackMiddleware(webpack(webpackConfig), {
    // publicPath is required, whereas all other options are optional 
 
    noInfo: false,
    // display no info to console (only warnings and errors) 
 
    quiet: false,
    // display nothing to the console 
 
    lazy: true,
    // switch into lazy mode 
    // that means no watching, but recompilation on every request 
 
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    // watch options (only lazy: false) 
 
    publicPath: "/",
    // public path to bind the middleware to 
    // use the same as in webpack 
    
    index: "index.html",
    // the index path for web server 
 
    headers: { "X-Custom-Header": "yes" },
    // custom headers 
 
    stats: {
        colors: true
    },
    // options for formating the statistics 
 
    reporter: null,
    // Provide a custom reporter to change the way how logs are shown. 
 
    serverSideRender: false,
    // Turn off the server-side rendering mode. See Server-Side Rendering part for more info. 
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})