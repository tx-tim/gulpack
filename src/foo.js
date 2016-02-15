var _ = require('script!lodash');
var angular = require('angular');
var uirouter = require('ui-router');

console.log('foo')
console.log('lodash _');
console.log(_);
console.log(angular)
console.log(uirouter)
document.write("foo application")

var dependencies = [
	uirouter
];

angular.module('basicapp', [uirouter]).config(function($stateProvider) {
 console.log("basicapp with webpack and codesplitting")
 console.log($stateProvider);
})

