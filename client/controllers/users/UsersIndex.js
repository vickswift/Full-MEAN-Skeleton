myApp.controller('usersIndex', function($scope, $location, userFactory){
	// Here is where we are creating the index method for users
	// You have to make sure that our index controller matches the name
	// that we pass back in our router.
	// Note at the top that we're also injecting $scope, $location, and  userFactory!

	// Another console.log for diagnostic purposes
	console.log("loading usersIndex controller /client/controllers/users/UsersIndex");

	// Calling userFactory.index ON LOAD.
	// Remember, we can call factory methods as soon as the controller loads,
	// or we can attach them to $scope events and allow the user to call them!
	userFactory.index(function(users){
			// no errros lets display users on to page
			$scope.users = users;
	})
})
