myApp.factory('userFactory', function($http){

	// This is my dummyFactory. I usually add this into any project that
	// I do. Just so that I can use it for reference as I add new Factories.
	// Below we have an example of how we would create a post request, as well
	// as how we would create a get request.

	var users = []

	var factory = {}

	factory.index = function(callback){
		$http.get('/users').then(function(response){
			users = response.data;
			callback(users);
		});
	}

	// the info parameter below is the the user that we're trying to add into our database

	// Check out your server console and you should see the body of this request
	factory.create = function(userInfo, callback){
		console.log("second: /factories/userFactory create");
		console.log("making http.post to '/users' check node console")
		$http.post('/users', userInfo).then(function(response){
			console.log("fifth: /factories/userFactory create just got data from server")
			if(response.error){
				callback(response);
			} else {
				users.push(response.data);
				callback(response.data);
			}
		})
	}

	// Don't forget to return your factory!
	return factory;
})
