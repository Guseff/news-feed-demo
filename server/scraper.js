const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const fetch = require('node-fetch');

const ArticleModel = require('../src/db/mongoose.js').ArticleModel;

const proccessRecord = (record) => {
  const { title } = record;

  return ArticleModel.find({ title })
    .then((res) => {
      if (res.length) throw new Error();

      const article = new ArticleModel({
        title: record.title,
        author: record.byline ? record.byline : 'by NY Times',
        description: record.abstract,
        imgURL: record.multimedia[0] ? record.multimedia[0].url : './img/no-img.png',
        url: record.url,
      });

      return article.save();
    })
    .catch(() => console.log('skip article', title));
};

function scraper() {
  const apiKey = 'ba79ef9de3c54ba3b11b29c33a8d321d';

  console.log('start scraper');

  fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(json => Promise.all(json.results.map(proccessRecord)))
    .then(() => console.log('finished'))
    .catch(console.log);
}

module.exports = scraper;
