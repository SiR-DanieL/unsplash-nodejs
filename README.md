# Unsplash API - Node.js Client

A Node.js wrapper for the Unsplash API. Easily interact with the Unsplash API using this library.

[![build status](https://secure.travis-ci.org/SiR-DanieL/unsplash-nodejs.svg)](http://travis-ci.org/SiR-DanieL/unsplash-nodejs)
[![dependency status](https://david-dm.org/SiR-DanieL/unsplash-nodejs.svg)](https://david-dm.org/SiR-DanieL/unsplash-nodejs)
[![npm version](https://img.shields.io/npm/v/unsplash-api.svg)](https://www.npmjs.com/package/unsplash-api)

## Installation

```
npm install --save unsplash-api
```

## Getting started

Generate API credentials (Application ID) following this instructions <https://unsplash.com/documentation>
.

Check out the Unsplash API endpoints and data that can be manipulated in <https://unsplash.com/documentation>.

## Setup

```js
var UnsplashAPI = require('unsplash-api');

var Unsplash = new UnsplashAPI({
  applicationID: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
});
```

### Options

|      Option      |   Type   | Required |                                             Description                                             |
| ---------------- | -------- | -------- | --------------------------------------------------------------------------------------------------- |                                                           |
| `applicationID`       | `String` | yes       | Your Application ID                                                                        |

## Methods

|   Params   |    Type    |                         Description                          |
| ---------- | ---------- | ------------------------------------------------------------ |
| `endpoint` | `String`   | Unsplash API endpoint, example: `photos` |
| `callback` | `Function` | Callback function. Returns `err`, `data` and `res`           |

### GET

- `.get(endpoint)`
- `.get(endpoint, callback)`


## Release History

- 2015-08-30 - v1.0.1 - Missing data and files.
- 2015-08-30 - v1.0.0 - Initial release.