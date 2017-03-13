const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test1');
const db = mongoose.connection;

db.on('error', (err) => {
  console.log('connection error:', err.message);
});
db.once('open', () => {
  console.log('Connected to DB!');
});

const Schema = mongoose.Schema;

// Schemas
const Images = new Schema({
  text: { type: String, required: false },
  url: { type: String, required: true },
});

const Article = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  images: [Images],
  modified: { type: Date, default: Date.now },
});

// validation
Article.path('title').validate(v => v.length > 5 && v.length < 70);

const ArticleModel = mongoose.model('Article', Article);

module.exports.ArticleModel = ArticleModel;
