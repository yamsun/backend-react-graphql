import http from "http";

const server = http.createServer((request, response) => {
    console.log("api is invoked");
    if(request.url === "/a") {
        response.end("url a is invoked");
    }
    else if(resquest.url === "/b"){
        response.end("url b is invoked");
    }
    else {
        response.end("this url is unknown");
    }
});

server.listen(8000, () => {
    console.log("normal node js server started at port 8000")
})


