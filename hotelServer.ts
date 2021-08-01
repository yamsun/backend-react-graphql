const koa = require('koa');
const Router = require("koa-router");
const koaGraphQl = require("koa-graphql");

import { ApolloServer } from "apollo-server-koa";
import { buildSchema } from "type-graphql";
import "./CreateConnection";
import HotelResolver from "./HotelResolver";

async function main() {
    const app = new koa();
    const resolvers = await buildSchema({resolvers: [HotelResolver]});
    const appolloServer = new ApolloServer({
        schema: resolvers,
        context: (req, res) => ({req, res})
    });


    appolloServer.applyMiddleware({app, cors:false});

    //router
    const router = new Router();
    router.all("/graphql", koaGraphQl({
        schema: resolvers,
        graphiql: true
    }))
    app.use(router.routes()).use(router.allowedMethods());

    

    app.listen(8000);


}

main();