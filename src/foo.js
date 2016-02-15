var _ = require('script!lodash');
var angular = require('angular');

console.log('foo')
console.log('lodash _');
console.log(_);
console.log(angular)
document.write("foo application")

angular.module('basicapp', []).config(function() {
 console.log("x")
})

