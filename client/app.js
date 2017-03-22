var myApp = angular.module('Myapp', ['ngRoute']);
// We instantiate our application and we inject ng-router so that it's available
// and so that we can use it to set up our routes below. Remember, we only want
// one module for this app.



// This is our router. You can choose to set your controllers on the partial as well.
// Setting controllers in the router means we can load one partial with different
// controllers, however setting controllers inside the partial means our partials are easier
// to read.
(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/',
			{
				controller: 'usersIndex',
				templateUrl: "partials/users/index.html"
			})
			.when("/users/new",
			{
				controller: 'usersNew',
				templateUrl: "partials/users/new.html"
			})
			// We can also add a .otherwise() for all cases not handled already.
	})
}());
