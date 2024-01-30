import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from './serverConfig';

/* DATABASE CONNECT */

mongoose
    .connect(config.mongodbURL)
    .then(() => {
        console.log('connect to db');
    })
    .catch((err) => {
        console.log(`DB error ${err}`);
        console.log(config.mongodbURL);
    });

/* DATABASE END */

/* CONFIGURATE APP */
const app = express();
app.use(express.json());
app.use(cors());
app.listen(config.port, () => {
    console.log(`Listening p ort ${config.port}`);
});
/* CONFIGURATE APP END*/
