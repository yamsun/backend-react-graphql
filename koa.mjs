import Koa from "koa";

const app = new Koa();

app.use(context => {
    context.response.body = "something"
})

app.listen(3001);