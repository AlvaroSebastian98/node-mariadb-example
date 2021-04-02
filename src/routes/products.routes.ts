import { Router } from 'express';
import { PoolConnection } from 'mariadb';
import { Request, Response } from 'express';
import pool from '../database';

export default class Products {

    public router: Router;

    constructor(router: Router) {
        this.router = router;

        this.router.get('/', this.getAll);
        this.router.post('/create', this.create);
    }

    private async getAll(req: Request, res: Response) {

        try {
            const conn: PoolConnection = await pool.getConnection() as PoolConnection;
            const query = 'select * from products';

            const rows = await conn.query(query);
            res.json(rows);

        } catch (error) {
            console.error(error);
        }

    }

    private async create(req: Request, res: Response) {

        console.log(req.body);

        try {
            const conn: PoolConnection = await pool.getConnection() as PoolConnection;
            const query = 'INSERT INTO products (name) VALUES (?)';

            const result = await conn.query(query, [req.body.name]);
            res.json(result);

        } catch (error) {
            console.error(error);
        }

    }

}