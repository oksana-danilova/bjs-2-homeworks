function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);


Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (this.hasOwnProperty('marks') === true) {
		this.marks.push(...marksToAdd);
	}
}

Student.prototype.getAverage = function() {
	if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
		return 0;
	} else {
		return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
	}
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}