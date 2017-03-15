const request = require('sync-request');
const ArticleModel = require('../src/db/mongoose.js').ArticleModel;

function scraper() {
  let res = request(
    'GET',
    'https://api.nytimes.com/svc/topstories/v2/home.json', {
      'qs': {
        'api-key': 'ba79ef9de3c54ba3b11b29c33a8d321d'
      }
    }
  );

  let str = JSON.parse(res.getBody());

  for (let i = 0; i < str.num_results; i++) {
    let nextart = str.results[i];
    ArticleModel.find({ title: nextart.title }, function (err, res) {
      if (!res.length) {
        let article = new ArticleModel({
          title: nextart.title,
          author: nextart.byline,
          description: nextart.abstract,
          imgURL: nextart.multimedia[0] ? nextart.multimedia[0].url : './img/no-img.png',
          url: nextart.url
        });

        article.save(function (err, article) {
          if (err) return console.error(err);
          console.log(article.title);
        });
      }
    })
  }
};

module.exports = scraper;
