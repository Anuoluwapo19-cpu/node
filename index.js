// const http = require('http');

// const server = http.createServer();
// server.listen(3000);

// server.on('connection', (socket) => {
//     console.log('New connnection...')
// })

// console.log("Lis†ening on port 3000...");

// import http from 'http';

// const server = http.createServer((request, response) => {
//     if (request.url ==='/home' && request.method === 'GET') {
//         response.writeHead(200, {'content-type':'application/json'});
//         response.end(JSON.stringify({message:'Welcome to my homepage'}));
//     }else{
//         response.writeHead(404, {'content-type':'application/json'});
//         response.end(JSON.stringify({message:'Page not found'}));
//     }
// });


// server.listen(4000, () => {
//     console.log('Server is running on port 4000: http://localhost:4000');
// });

