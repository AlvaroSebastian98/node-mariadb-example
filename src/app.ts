import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import Products from './routes/products.routes';
import { Router } from 'express';

export default class App {

    public app: express.Application;
    private rt: Router;

    constructor() {
        this.app = express();
        this.rt = Router();

        this.execute();
    }

    private middlewares() {
        // Body parser
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // API endpoints
        this.app.use('/products', new Products(this.rt).router);

    }

    public execute() {
        // Initialize Middlewares
        this.middlewares()
    }

}