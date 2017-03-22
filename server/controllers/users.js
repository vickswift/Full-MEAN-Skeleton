var mongoose = require('mongoose');
// Importing User model, using mongoose getter method, see the model page for more info
var User = mongoose.model('User');

function UsersController(){
	this.index = function(req, res){
		console.log('find function users controller /server/controllers/users.js');
		User.find({}, function(err, users){
			if(err){
				console.log(err);
				res.json({error: true, errors: err})
			} else {
				// Notice, all of our responses are now JSON
				res.json(users);
			}
		})
	}
	this.create = function(req, res){

		console.log('fourth: create function users controller /server/controllers/users.js');
		User.create(req.body, function(err, user){
			console.log("sending json back to user factory check browser console")
			if(err){
				// console.log(err);
				res.json({error: true, errors: err});
			} else {
				res.json(user);
			}
		})
	}
	this.show = function(req, res){
		// retrieve single user
		// this is how we retrieve the users id
		console.log(req.body.id)
	}
}

// Remember, the users.js controller needs to export an OBJECT with
// METHODS attached to it. We can export this as an object literal, we
// can export this with a Class and the new keyword, like below.
// We can export this with an immediately invoked function that returns
// an object. At the end of the day, backend controller exports an
// OBJECT full of METHODS.
module.exports = new UsersController();
