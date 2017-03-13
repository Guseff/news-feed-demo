const request = require('sync-request');

function scraper() {
  let res = request(
    'GET',
    'https://api.nytimes.com/svc/topstories/v2/home.json', {
      'qs': {
        'api-key': 'ba79ef9de3c54ba3b11b29c33a8d321d'
      }
    }
  );

  let str = res.getBody();
  console.log(JSON.parse(str).results[0].title);
};

module.exports.scraper = scraper;