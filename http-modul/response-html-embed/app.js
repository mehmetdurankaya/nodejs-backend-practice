const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.statusCode=200;
    res.statusMessage= 'Ok';

    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1> Hello from Nodjs Server</h1></body>');

    res.end();

});

server.listen(3000);
console.log('Listening port on 3000...');