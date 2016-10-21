var http=require('http');
var url=require('url');

var server = http.createServer(function(req, response){
	//Serveix per separar els diferents components de la url
	//parsejem la url a través de objurl
	var objurl=url.parse(req.url);
	console.log('PATH: '+objurl.path);
	console.log('PATHNAME: '+objurl.pathname);
	console.log('QUERY: '+objurl.query);
	response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
	response.write('<!DOCTYPE html><html><head></head>');
	response.write('<body><h1>Hola Món</h1>');
	response.write('<h2>'+objurl.path+'<h2>');
	response.write('<h2>'+objurl.pathname+'<h2>');
	response.write('<h2>'+objurl.query+'<h2>');
	response.write('</body></html>');
	response.end();
});

server.listen(3000);
console.log('Servidor Iniciat');