// import Koa from "koa";

// import { Pool } from "pg";

const Koa = require('koa');
const {Pool} = require('pg');



const postgress = new Pool({
    connectionString: "postgres://qfzmbpudrcxewu:ac1f0b0577eb21445148ede8b62dc6465012739c318ff8d8d82dc701faad006e@ec2-3-233-100-43.compute-1.amazonaws.com:5432/dcfbq4kiuao8vm",
    ssl: {
        rejectUnauthorized: false
        }
})

// const postgress = new Pool({
//     connectionString: "postgres://blhpgpaigbjfjf:bd8f431a3291a4c5a09d224fc1d7c518ec373217d176fdf3acf397592ef7c15a@ec2-34-247-118-233.eu-west-1.compute.amazonaws.com:5432/d9kbrb46sju11n",
//     ssl: {
//         rejectUnauthorized: false
//         }
// })


const app = new Koa();

app.use(async context => {
    const data = await postgress.query("select * from csvdata_csv")
    context.response.body = data;
})

app.listen(3001);

