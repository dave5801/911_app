var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/911_user");

// var Topping = mongoose.Schema({
//   text:     String
// });

var User = mongoose.Schema({
  name:     String,
  location: String,
  health:   String,
  response: String
});

mongoose.model("User",   User);
// mongoose.model("Topping", Topping);

module.exports= mongoose;
