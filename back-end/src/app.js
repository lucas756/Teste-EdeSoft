import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';
import Youch from 'youch';
import fileUpload from 'express-fileupload'
import routes from './routes';

import './database';
import bodyParser from 'body-parser';

class App {
  constructor() {
    this.server = express();

    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(bodyParser.json());
    this.server.use(cors()); // it enables all cors requests
    this.server.use(fileUpload());
    this.server.use(routes);
  }
}

export default new App().server;
