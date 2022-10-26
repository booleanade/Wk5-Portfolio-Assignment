//import http and fs modules
const http = require('http');
const fs = require('fs');

//create server
http.createServer((request, res) => {
    if (request.url === "/") {
        fs.readFile('home.html', (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            res.end();
        })
    }

    if (request.url === "/about") {
        fs.readFile('about.html', (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    if (request.url === "/contact") {
        fs.readFile('contact.html', (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    if (request.url === "/home") {
        fs.readFile('home.html', (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            res.end();
        });
    }

}).listen(4000, '127.0.0.1');

//confirm server creation
console.log('Server Started');