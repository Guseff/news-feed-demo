var express  = require('express')
var webpackMiddleware = require("webpack-dev-middleware")
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')
var app = express()
var port = 3000

var bodyParser = require('body-parser')
var ArticleModel    = require('./src/db/mongoose.js').ArticleModel;

var compiler = webpack(webpackConfig)

app.use(express.static('./public/'));
app.use(webpackMiddleware(webpack(webpackConfig), {
    // publicPath is required, whereas all other options are optional 
 
    noInfo: false,
    // display no info to console (only warnings and errors) 
 
    quiet: false,
    // display nothing to the console 
 
    lazy: false,
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

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

// parse application/json
app.use(bodyParser.json())
// MongoDB

app.get('/articles', function(req, res) {
    return ArticleModel.find(function (err, articles) {
        if (!err) {
            return res.send(articles); // json
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
});

app.post('/articles', function(req, res) {
    var article = new ArticleModel({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        images: req.body.images
    });

    article.save(function (err) {
        if (!err) {
            console.log("article created");
            return res.send({ status: 'OK', article:article });
        } else {
            console.log(err);
            if(err.name == 'ValidationError') {
                res.statusCode = 400;
                res.send({ error: 'Validation error' });
            } else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
            }
            console.log('Internal error(%d): %s',res.statusCode,err.message);
        }
    });
});

app.get('/articles/:id', function(req, res) {
    return ArticleModel.findById(req.params.id, function (err, article) {
        if(!article) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        if (!err) {
            return res.send({ status: 'OK', article:article });
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
});

app.put('/articles/:id', function (req, res){
    return ArticleModel.findById(req.params.id, function (err, article) {
        if(!article) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }

        article.title = req.body.title;
        article.description = req.body.description;
        article.author = req.body.author;
        article.images = req.body.images;
        return article.save(function (err) {
            if (!err) {
                console.log("article updated");
                return res.send({ status: 'OK', article:article });
            } else {
                if(err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({ error: 'Validation error' });
                } else {
                    res.statusCode = 500;
                    res.send({ error: 'Server error' });
                }
                console.log('Internal error(%d): %s',res.statusCode,err.message);
            }
        });
    });
});

app.delete('/articles/:id', function (req, res){
    return ArticleModel.findById(req.params.id, function (err, article) {
        if(!article) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        return article.remove(function (err) {
            if (!err) {
                console.log("article removed");
                return res.send({ status: 'OK' });
            } else {
                res.statusCode = 500;
                console.log('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        });
    });
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
})


app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
