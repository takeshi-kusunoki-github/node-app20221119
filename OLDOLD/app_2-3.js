const http = require('http');

var server = http.createServer(
    (request,response)=>{
            // response.end('<html><head></head><body><h1>header</h1><p>本文main</p></body></html>');
            response.setHeader('Content-Tupe','text/html');
            response.write('<!DOCTYPE html><html lang = "ja">');
            response.write('<head>');
            response.write('<meta charset="utf-8">');
            response.write('<title>タイトル Title</title>');
            response.write('</head>');
            response.write('<body>');
            response.write('<h1>ヘッダheader</h1>');
            response.write('<p>Paragraph パラグラフ☺</h1>');
            response.write('</body>');         
            response.write('</html>');
            response.end();   
    }
);

server.listen(3000);
console.log('Server started')