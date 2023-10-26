const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.statusCode=200;
    res.statusMessage= 'Ok';

    res.write(JSON.stringify({name:'Mehmet Duran Kaya',title:'Fullstack Developer'}));
    res.end();

});

server.listen(3000);
console.log('Listening port on 3000...');