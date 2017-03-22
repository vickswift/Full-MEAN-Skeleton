// importing my usersController from controllers folder
// If you change folder structure make sure to update controller path
var usersController = require('../controllers/users.js')

// Routes exports a function that requires app
module.exports = function(app){

	app.post('/users', function(req, res){
		console.log("third: /server/config/routes.js app.post('/users')")
		// I'm testing the info that I'm receiving from my user Factory
		// I log the body and the params just to make sure that the data is making it to my backend
		// Make sure that you're logging every step of the way, javascript is not great with providing
		// userful error output.

		console.log(req.body);
		usersController.create(req, res);
	})

	app.get("/users", function(req, res){
		usersController.index(req, res);
		// Lets try to keep our routes as restful as possible
		// Check out the guide below to see the restful and semirestful routes
		// as well as what method they should be calling

		// get /users should retrieve all of the users in our database
		// usersController.index(req, res);
	})
}


// You can use restful or semi restful routes for your application.
// Remember that we're dealing with Angular which will take care
// of rendering static pages for us so some of these routes might
// be unnecessary

// The edit and new route might not be necessary. You will only need
// these routes if the data you are retrieving is different than the
// data you retrieve for show, angular will take care of displaying
// static pages like new in the front end

// FUll RESTFUL
// get "/users" => UsersController index => grab all users
// get "/users/:id" => UsersController show => grab one user
// get "/users/:id/edit" => UsersController edit => show edit user page
// get "/users/new" => UsersController new => show new user page
// post "/users" => UsersController create => create a user
// patch/put "/users/:id" => UsersController update => update a user
// delete "/users/:id" => UsersController destroy => destroy a user

// SEMI RESTFUL -- look at destroy and update methods
// get "/users" => UsersController index => grab all users
// get "/users/:id" => UsersController show => grab one user
// get "/users/:id/edit" => UsersController edit => show edit user page
// get "/users/new" => UsersController new => show new user page
// post "/users" => UsersController create => create a user
// post "/users/:id/update" => UsersController update => update a user
// post "/users/:id/destroy" => UsersController destroy => destroy a user
