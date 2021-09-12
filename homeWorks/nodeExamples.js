var http = require('http');
var fs = require('fs');
var url = require('url');


var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
console.log(q.host);
var qdata = q.query;
console.log(qdata);
http.createServer(function(req,res){
    var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
    var q = url.parse(adr, true);
    var txt = q.host;
    res.write(txt);
    res.end();
}).listen(8080);



