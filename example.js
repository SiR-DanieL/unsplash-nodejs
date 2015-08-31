var UnsplashAPI = require('unsplash-api');

var Unsplash = new UnsplashAPI({
  applicationID: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
});

Unsplash.get( 'photos', function(err, data, res) {
  console.log(res);
});
