import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './config/database.js';

import apiRoutes from './routes/index.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

const setupAndStartServer = () => {
    app.listen(3000, async () => {
        console.log("Server started at PORT: 3000");
        await connect();
        console.log('MongoDB connected');   

    });
}

setupAndStartServer();