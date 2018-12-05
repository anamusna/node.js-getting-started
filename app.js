const yargs = require('yargs');
const argv = yargs.argv;
const command = argv._[0];
const notes = require('./notes');

if (command === 'add') {
	let note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	} else {
		console.log('Note title already taken');
	}
} else if (command === 'list') {
	let result = notes.fetchNotes();
	console.log(result);
} else if (command === 'remove') {
	notes.removeNote(argv.title);
} else if (command === 'read') {
	notes.getNote(argv.title);
} else {
	console.log('command not recognized');
}
