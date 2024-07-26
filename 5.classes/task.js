//Задача 1. Печатное издание

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(value) {
		if (value < 0) {
			this._state = 0;
		} else if (value > 100) {
			this._state = 100;
		} else {
			this._state = value;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}


//Задача 2. Библиотека

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}
	giveBookByName(bookName) {
		let currentBook = this.books.find(book => book.name === bookName);
		if (currentBook) {
			this.books.splice(currentBook, 1);
			return currentBook;
		} else {
			return null;
		}
	}
}


//Задача 3. Журнал успевапемости

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}
	addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        }
		if (this.marks.hasOwnProperty(subject) !== true) {
			this.marks[subject] = [];
		}
		if (mark >= 2 && mark <= 5) {
			this.marks[subject].push(mark);
		} 
	}
	getAverageBySubject(subject) {
		if (this.marks.hasOwnProperty(subject) === true) {
			return this.marks[subject].reduce((acc, item) => acc + item, 0) / this.marks[subject].length;
		} else {
			return 0;
		}
	}
	getAverage() {
        if (Object.keys(this.marks).length === 0) {
            return 0;
        }
        let average = 0;
        for (let subject in this.marks) {
            average += this.getAverageBySubject(subject);
        }
        return average / Object.keys(this.marks).length;
    }
}