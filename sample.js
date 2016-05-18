'use strict';

// require the nuxeo lib
var Nuxeo = require('nuxeo');

// check for --dry-run option
var dryRun = false;
var args = process.argv.slice(2);
if (args.length > 0 && args[0] === '--dry-run') {
   dryRun = true;
}

// create the Nuxeo client
var client = new Nuxeo({
  baseURL: 'http://localhost:8080/nuxeo/',
  auth: {
    method: 'basic',
    username: 'Administrator',
    password: 'Administrator'
  }
});

// connect to nuxeo
client.login()
.catch(function (error) {
    console.error('connection failed: ' + error);
    throw error;
})
.then(function(user) {
  console.log('connected.');

  // write some things here
})
.catch(function (error) {
  // whatever happens, let's log to console
  return error;
})
.then(function (result) {
  console.log(JSON.stringify(result, undefined, 4));
});
