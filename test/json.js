/*const object = {
	name : 'Ansu'
};

const great = JSON.stringify(object);
console.log(great);
console.log(typeof great);

const jsontest = '{"name": "Ansu", "age": 30}'
const converted = JSON.parse(jsontest)
console.log(converted);
console.log(typeof converted);*/

const fs = require('fs');

const testNote = {
	title : 'Testing',
	body  : 'testing the notes'
};

const noteString = JSON.stringify(testNote);

fs.writeFileSync('notes.json', noteString);
console.log('notes.json', noteString);

const noteString2 = fs.readFileSync('notes.json');
const note = JSON.parse(noteString2);
console.log(note.title);
console.log(typeof note);
