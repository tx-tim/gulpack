var _ = require('script!lodash');
var angular = require('angular');
var uirouter = require('ui-router');
var templateUrl = require('ngtemplate!html!./test.html');


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
.directive('temptest', Temptest);

function Temptest() {
	return {
		templateUrl: templateUrl
	}
}

