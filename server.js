var http=require('http');

var servidor=http.createServer(function(request,response)
{

	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('<h1>Hello World</h1>');
	response.end();

});

servidor.listen(8888);
console.log("Servidor iniciat");