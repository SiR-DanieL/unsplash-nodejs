'use strict';

var request = require('request');

module.exports = UnsplashAPI;

/**
 * Unsplash API wrapper
 *
 * @param {Object} opt
 */
function UnsplashAPI(opt) {
  if (!(this instanceof UnsplashAPI)) {
    return new UnsplashAPI(opt);
  }

  opt = opt || {};

  if (!(opt.applicationID)) {
    throw new Error('applicationID is required');
  }

  this.classVersion = '1.0.0';
  this._setDefaultsOptions(opt);
}

/**
 * Set default options
 *
 * @param {Object} opt
 */
UnsplashAPI.prototype._setDefaultsOptions = function(opt) {
  this.applicationID  = opt.applicationID;
  this.encoding = opt.encoding || 'utf8';
  this.version = 'v1'
};

/**
 * Get URL
 *
 * @param  {String} endpoint
 *
 * @return {String}
 */
UnsplashAPI.prototype._getUrl = function(endpoint) {
  return 'https://api.unsplash.com/' + endpoint + '/?client_id=' + this.applicationID;
};

/**
 * Do requests
 *
 * @param  {String}   method
 * @param  {String}   endpoint
 * @param  {Object}   data
 * @param  {Function} callback
 *
 * @return {Object}
 */
UnsplashAPI.prototype._request = function(method, endpoint, data, callback) {
  var url = this._getUrl(endpoint);

  var params = {
    url: url,
    method: method,
    encoding: this.encoding,
    headers: {
      'Authorization' : 'Client-ID #' + this.applicationID,
      'Accept-Version': this.version
    }
  };

  if (data) {
    params.body = JSON.stringify(data);
  }

  if (!callback) {
    return request(params);
  }

  return request(params, callback);
};

/**
 * GET requests
 *
 * @param  {String}   endpoint
 * @param  {Function} callback
 *
 * @return {Object}
 */
UnsplashAPI.prototype.get = function(endpoint, callback) {
  return this._request('GET', endpoint, null, callback);
};
