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

  let str = JSON.parse(res.getBody()).results[0];
  console.log(str.byline);

//   let res1 = request(
//     'POST',
//     'http://localhost:3000/articles/', {
//       json: { 
//         title: str.title,
//         author: str.byline,
//         description: str.abstract 
//       }
//     }
//   ); 
};

module.exports = scraper;
