import express from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import * as configs from './common/config/index.js';
import './modules/users/users.module.js';
import './modules/plays/plays.module.js';
import './modules/songs/songs.module.js';
import './modules/downloader/downloader.module.js';

const { NODE_ENV } = process.env;
const inProduction = NODE_ENV === 'production';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(configs.corsConfig));
app.use(compression());
app.use(morgan(inProduction ? 'combined' : 'dev'));

configs.connectDB();
configs.routerConfig(app, '/api/v1');

export default app;