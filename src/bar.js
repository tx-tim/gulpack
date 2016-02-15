var _ = require('script!lodash');
var angular = require('angular');

console.log('bar')
console.log('lodash _');
console.log(_);
console.log(angular)
document.write("bar application")

angular.module('basicapp2', []).config(function() {
 console.log("basicapp2 - with webpack and codesplitting")
})

