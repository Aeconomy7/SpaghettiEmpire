var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "sc00by",
  password: "!Badspaghettipassword1!",
  database: "spaghetti"
});

con.connect(function(err){
  if(err) throw err;
  console.log("Connected to MySQL!");
});
