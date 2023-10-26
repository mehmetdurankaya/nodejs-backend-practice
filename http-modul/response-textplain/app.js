const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.statusCode=200;
    res,statusMessage= 'Ok';

    res.write('Hello World');
    res.end();

});

server.listen(3000);
console.log('Listening port on 3000...');