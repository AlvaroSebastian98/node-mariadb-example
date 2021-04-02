import express from 'express';
import App from './app';

class Server {

    private port: number;
    private app: express.Application;

    constructor(port: number, app: express.Application) {
        this.port = port;
        this.app = app;
    }

    listen() {
		this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
		});
	}

}


const app = new App().app;
const port = process.env.PORT || 3000;
const server = new Server(parseInt(port as string), app);

server.listen();