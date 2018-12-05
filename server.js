const http = require('http');
const port = 3001;
const hostname = 'localhost';
const url = require('url');
const notes = require('./notes');
const querystring = require('querystring');

const server = http.createServer((request, response) => {
	const urlObject = url.parse(request.url);
	const data = querystring.parse(urlObject.query);
	response.setHeader('Content-Type', 'application/json');

	switch (urlObject.pathname) {
		case '/api/notes/list':
			response.end('List all notes');
			break;
		case '/api/notes/add':
			let note = notes.addNote(data.title, data.body);
			if (note) {
				response.end(`{
                    status: "Note created",
                    title: "${note.title}",
                    body: "${note.body}"
                }`);
			} else {
				response.end('Note title already taken');
			}
			response.end('Add a note');
			break;
		case '/api/notes/delete':
			response.end('Delete a note');
			break;
	}

	console.log(urlObject);
	response.end('API STARTED' + request.url);

	/*
	response.setHeader('Content-Type', 'text/html');
	response.write('<h1>Notes : List of Notes</h1>');
	response.write(
		'<div><h3>The notes listed are:</h3>' + '<ul><li>Reading</li> ' + '<li>Listening to music</li>' + '</ul></div>'
	);
	response.end(); */
});
server.listen(port, hostname, () => {
	console.log(`starting app at ${hostname}:${port}`);
});
