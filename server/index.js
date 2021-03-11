import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import trainRoutes from './routes/trains.js';
import { play } from './data/trains.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors())

app.use('/trains', trainRoutes)

const PORT = 5000

app.listen(PORT)

play().then(() => {console.log("Running play")})