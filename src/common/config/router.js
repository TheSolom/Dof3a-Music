import { StatusCodes } from 'http-status-codes';
import usersRouter from '../../modules/users/users.routes.js';
import playsRouter from '../../modules/plays/plays.routes.js';
import songsRouter from '../../modules/songs/songs.routes.js';
import downloaderRouter from '../../modules/downloader/downloader.routes.js';

export default (app, prefix = '') => {
    app.get('/api/v1', (req, res, next) => {
        res.status(StatusCodes.IM_A_TEAPOT).json({
            message: 'Welcome to Dof3a Music API V1',
            repository: 'https://github.com/TheSolom/Dof3a-Music',
        });
    });

    app.use(`${ prefix }/users`, usersRouter);
    app.use(`${ prefix }/plays`, playsRouter);
    app.use(`${ prefix }/songs`, songsRouter);
    app.use(`${ prefix }/downloader`, downloaderRouter);

    app.use((err, req, res, next) => {
        res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    });
};