const http = require("http");
const fs = require("fs");

http.createServer(function(request, response){

    console.log(`Запрошенный адрес: ${request.url}`);
    if(request.url.startsWith("/public/")){
        let filePath = request.url.substr(1);
        fs.readFile(filePath, function(error, data){
            if(error){
                let error_ = fs.readFileSync('public/error.html');
                response.end(error_);
            }
            else{
                response.end(data);
            }
            return;
        })
    }
    else{
        response.end("Hello World!");
    }
}).listen(3000);