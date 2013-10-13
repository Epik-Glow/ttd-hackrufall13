var express = require('express');
var app = express();
app.use(express.bodyParser());
app.get('/hello.txt', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});
app.get('/hello', function(req, res){
  res.send('Hello World');
});

app.get('/', function(req, res){
	res.sendfile(__dirname+"/index2.html");
});
app.post('/call', function(req, res){
	var phonenumber = req.body.number;
	var client = require('twilio')('ACacc83f5aace960889b563b944466e554', 'c8a3f89cba5175623503195149ef0f10');
	client.makeCall({
		to:'+1'+phonenumber, // Any number Twilio can call
		from: '+16097781605', // A number you bought from Twilio and can use for outbound communication
		url: 'C:\Users\Tom\Desktop\hello-world\instructions.xml' // A URL that produces an XML document (TwiML) which contains instructions for the call
	}, function(err, responseData) {

		//executed when the call has been initiated.
		console.log(responseData.from); // outputs phone number
		
	});
	res.sendfile(__dirname+"/index2.html");
});
app.listen(3000);
console.log('Listening on port 3000');