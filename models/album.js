
var mongoose = require("mongoose");

var albumSchema = new Schema({

	artistName: String,
	name:String,
	releaseDate: String,
	genres:[String]

});


var album = mongoose.model('album', albumSchema);

module.exports = album;