var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.write('ok.');
//   res.write(req.url);
//   res.write(txt);

if(req.url == "/style.css"){
    fs.readFile("style.css", function(error, pretty){
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(pretty);
        res.end();
    }); 
}
else if(req.url == "/Add.html"){
    fs.readFile("Add.html", function(error, add){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(add);
        res.end();
    });
}
else if(req.url == "/Subtract.html"){
    fs.readFile("subtract.html", function(error, subtract){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(subtract);
        res.end();
    });
}
else if(req.url == "/Multiply.html"){
    fs.readFile("multiply.html", function(error, multiply){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(multiply);
        res.end();
    });
}
else if(req.url == "/Divide.html"){
    fs.readFile("divide.html", function(error, divide){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(divide);
        res.end();
    });
}
else{
    fs.readFile("index.html", function(error, index){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(index);
        res.end();
    });
}


    
  
}).listen(8080);