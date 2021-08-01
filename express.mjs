import express from "express";

const app = express();

const router = express.Router();

app.use(express.json());

app.use(router);

router.get("/a", (request, response) => {
    // response.setHeader("Authorization": "shyam");
    console.log(request.headers.authorization)
    ;
    console.log(JSON.stringify(request.body));

    response.send("url a is invoked");
    console.log("server start listen on a");
})

router.get("/b", (request, response) => {
    response.send("url b is invoked");
    console.log("server start listen on b");
})

app.listen(8000, () => {console.log("express server started at 8000")});
