var mongoose  = require("./connection");
var seed_data = require("./user_seeds");

var User     = mongoose.model("User")

User.remove().then(function(){
  User.collection.insert(user_data).then(function(){
    process.exit();
  });
});


// To see the seeded database, use this command in Mongo:
// db.salads.find().pretty()
// Mongo automatically pluralizes "salads" and ignored the
// name after the under_score.
