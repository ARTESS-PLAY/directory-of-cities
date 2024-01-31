import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from './serverConfig';
import { createAddressValidator } from './validators/adressValidator';
import { createAddress, getAddresses, getAvailable } from './controllers/AddressController';

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
    console.log(`Listening port ${config.port}`);
});
/* CONFIGURATE APP END*/

app.post('/addresses', createAddressValidator, createAddress);
app.get('/addresses', getAddresses);
app.get('/addresses/available', getAvailable);
