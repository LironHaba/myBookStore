    var books =  [
        {
            "id": 1,
            "name": "Green Eggs and Ham",
            "Autor": "Dr._Seuss",
            "month": "June"
        },
        {
            "id": 2,
            "name": "A Game of Thrones",
            "Autor": "George R. R. Martin",
            "month": "May"
        },
        {
            "id": 3,
            "name": "War and Peace",
            "Autor": "Leo Tolstoy",
            "month": "July"
        },
        {
            "id": 4,
            "name": "Fermat''s Last Theorem",
            "Autor": "Simon Singh",
            "month": "December"
        },
        {
            "id": 5,
            "name": "The Da Vinci Code",
            "Autor": "Dan Brown",
            "month": "April"
        },
        {
            "id": 6,
            "name": "One Hundred Years of Solitude",
            "Autor": "Gabriel García Márquez",
            "month": "October"
        }
    ]
exports.getBookList = function (){
	return books;
};


exports.getBookNameByID = function(id){
	var bookName = 'id does not exist';
		for (i = 0; i < books.length; i++) {
			if(id == books[i].id)
				bookName = 	books[i].name;
		}
	return bookName;
};


exports.getBookListByMonth = function(month){
	var bookList = [];
	var emptyList = 'No new books this month..';
			for (i = 0; i < books.length; i++) {
			if(month == books[i].month)
				bookList.push(books[i].name);
		}
	
if(bookList)
	return bookList;
else
	return emptyList;

};
