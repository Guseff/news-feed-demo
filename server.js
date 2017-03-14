const express = require('express');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const ArticleModel = require('./src/db/mongoose.js').ArticleModel;
const scraper = require('./server/scraper.js');

const compiler = webpack(webpackConfig);

app.use(express.static('./public/'));

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// parse application/json
app.use(bodyParser.json());
// MongoDB

app.get('/articles', (req, res) => ArticleModel.find((err, articles) => {
  if (!err) {
    return res.send(articles); // json
  }
  res.statusCode = 500;
  console.log('Internal error(%d): %s', res.statusCode, err.message);
  return res.send({ error: 'Server error' });
}));

app.post('/articles', (req, res) => {
  const article = new ArticleModel({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    images: req.body.images,
  });

  article.save((err) => {
    if (!err) {
      console.log('article created');
      return res.send({ status: 'OK', article });
    }
    console.log(err);
    if (err.name == 'ValidationError') {
      res.statusCode = 400;
      res.send({ error: 'Validation error' });
    } else {
      res.statusCode = 500;
      res.send({ error: 'Server error' });
    }
    console.log('Internal error(%d): %s', res.statusCode, err.message);
  });
});

app.get('/articles/:id', (req, res) => ArticleModel.findById(req.params.id, (err, article) => {
  if (!article) {
    res.statusCode = 404;
    return res.send({ error: 'Not found' });
  }
  if (!err) {
    return res.send({ status: 'OK', article });
  }
  res.statusCode = 500;
  console.log('Internal error(%d): %s', res.statusCode, err.message);
  return res.send({ error: 'Server error' });
}));

app.put('/articles/:id', (req, res) => ArticleModel.findById(req.params.id, (err, article) => {
  if (!article) {
    res.statusCode = 404;
    return res.send({ error: 'Not found' });
  }

  article.title = req.body.title;
  article.description = req.body.description;
  article.author = req.body.author;
  article.images = req.body.images;
  return article.save((err) => {
    if (!err) {
      console.log('article updated');
      return res.send({ status: 'OK', article });
    }
    if (err.name == 'ValidationError') {
      res.statusCode = 400;
      res.send({ error: 'Validation error' });
    } else {
      res.statusCode = 500;
      res.send({ error: 'Server error' });
    }
    console.log('Internal error(%d): %s', res.statusCode, err.message);
  });
}));

app.delete('/articles/:id', (req, res) => ArticleModel.findById(req.params.id, (err, article) => {
  if (!article) {
    res.statusCode = 404;
    return res.send({ error: 'Not found' });
  }
  return article.remove((err) => {
    if (!err) {
      console.log('article removed');
      return res.send({ status: 'OK' });
    }
    res.statusCode = 500;
    console.log('Internal error(%d): %s', res.statusCode, err.message);
    return res.send({ error: 'Server error' });
  });
}));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});


app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});

scraper();
// let intervalID = setInterval(scraper, 10000);
