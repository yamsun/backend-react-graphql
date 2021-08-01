import { createConnection } from "typeorm";
import { Hotel } from "./Hotel";

createConnection({
    type: "postgres",
    url: "postgres://qfzmbpudrcxewu:ac1f0b0577eb21445148ede8b62dc6465012739c318ff8d8d82dc701faad006e@ec2-3-233-100-43.compute-1.amazonaws.com:5432/dcfbq4kiuao8vm",
    ssl: true,
    entities: [Hotel],
    extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      }
})