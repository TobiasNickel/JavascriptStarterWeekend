var http = require('http');

var bestellungen=[];//{"product":""}
var neueBestellungClients=[];

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	console.log(request.url);
	// /user/10
	var urlPieces=request.url.split("/");
	switch(urlPieces[1]){
		case "bestellung": 
			response.end(
				JSON.stringify(
					bestellungen[urlPieces[2]]
				)
			);
			break;
		case "createBestellung":
			var neueBestellung={product:urlPieces[2]}
			bestellungen.push(neueBestellung);
			response.end(JSON.stringify(true));
			for(var i in neueBestellungClients){
				neueBestellungClients[i].end(
					JSON.stringify(
						neueBestellung
					)
				);
			}
			neueBestellungClients=[];
			break;
		case "neueBestellung.json":
			neueBestellungClients.push(response);
			break;
		case "alleBestellungen.json":
			response.end(JSON.stringify(bestellungen));
			break;
		default:
			response.end('Hello World\n');
	}
}).listen(1337);

console.log('Server running at http://127.0.0.1:1337/');