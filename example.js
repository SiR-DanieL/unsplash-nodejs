var UnsplashAPI = require('./index.js');

var Unsplash = new UnsplashAPI({
  applicationID: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
});

Unsplash.get( 'photos', function(err, data, res) {
  console.log(res);
});
