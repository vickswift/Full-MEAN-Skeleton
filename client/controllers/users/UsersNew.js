myApp.controller('usersNew', function($scope, $location, userFactory){

	// Attaching a method to $scope allows the user to run it.
	// This can be useful for events like submitting forms.
	$scope.createUser = function(){
		console.log("start: /client/controllers/users/UsersNew createUser");

		userFactory.create($scope.user, function(resp){
			console.log("sixth: callback sent to factory definied in /client/controllers/users/UsersNew")
			console.log("I commented out redirect, but usually I would redirect here or show errors");

			// Error handling. We simply check the `resp` coming back from our factory to see if it
			// contains a .error. If so, we'll display errors.
			if(resp.error){
				// display resp.data.errors on to page
				$scope.errors = resp.errors;
			} else {
				// no errors redirect user back to index page.
				// Take note of location, we're using it to change the partial from within
				// our controller!
				// $location.path('/')
			}
		})
	}
})
