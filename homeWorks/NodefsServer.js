var http = require('http');
var fs = require('fs');
var url = require('url');
var adr = ""

http.createServer(function(req,res){
    fs.readFile('myFirstHTML.html',function(err, data){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

http.createServer(function(req,res){
    fs.appendFile('text.txt', 'Hi World', function(err){
        if(err) throw err;
        console.log('Saved!');
    });
}).listen(8080);

http.createServer(function(req,res){
    fs.open('text2.txt', 'w', function(err,file){
        if(err) throw err;
        console.log('Saved!');
    });
}).listen(8080);

http.createServer(function(req,res){
    fs.unlink('text3.txt', function(err){
        if(err) throw err;
        console.log('File Deleted!');
    });
}).listen(8080);