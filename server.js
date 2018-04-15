var express = require('express');
var app = express();
var  server = require('http').createServer(app);
bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = mysql.createConnection({
      host: 'localhost',
      database: 'Project',
      user: 'root',
      password: 'password',
});

app.use(bodyParser.urlencoded({ extended: true })); 


app.get('/login_basic.html', function (req, res) {
   res.sendFile( __dirname + "/" + "login_basic.html" );
})

connection.connect(function(err){
   if (err) throw err;
   console.log("Connected");
});
app.post('/process_post', function(req, res){
   console.log('req.body');

  var u={
  "email"= req.body.email;
  "password" = req.body.password;
}
  connection.query('INSERT into users SET ?',u,function(error,response,fields) {
  if (error) {
    console.log("Sorry error ocurred.!!",error);
    dataresults.send({
      "code":400,
      "failed":"Sorry error ocurred!!"
    })
  }else{
    console.log('The Live solution is: ', respnose);
    dataresults.send({
      "code":200,
      "success":"Good Luck Students registered sucessfully"
        });
  }
  });
   

})


















var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})