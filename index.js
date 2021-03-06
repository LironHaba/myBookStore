var express = require('express');
var app = express();
var books =  require('./books_module');


app.get('/', function(req, res){

	res.status(200).send("<h1>Check out my book store:</h1><br>1. To get the list of my books, use: /getBookList<br>2. To get book name by ID, use: /getBookNameByID/:bookID<br>2. To get the list of books per month, use: /getBookListByMonth/:bookMonth<br><h2>Have Fun!!</h2>");
})

app.get('/getBookList', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-requested-With, Content-Type, Accept");
	app.set('json spaces', 4);
	res.set("Content-Type", "appliction/json");
	res.json(books.getBookList())
})

app.get('/getBookNameByID/:bookID', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-requested-With, Content-Type, Accept");
	app.set('json spaces', 4);
	res.set("Content-Type", "appliction/json");
	var id = req.params.bookID;
	var bookName = books.getBookNameByID(id);

	res.json(bookName)

})

app.get('/getBookListByMonth/:bookMonth', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-requested-With, Content-Type, Accept");
	app.set('json spaces', 4);
	res.set("Content-Type", "appliction/json");
	var bookMonth = req.params.bookMonth;
	var booksOfTheMonth = books.getBookListByMonth(bookMonth);

	res.json(booksOfTheMonth);

})

var port = process.env.PORT || 8080;
app.listen(port, function(){
console.log("listenting to port " + port);
})
