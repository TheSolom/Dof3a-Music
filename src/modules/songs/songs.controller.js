import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';

export default class SongsController {
    #songsService;

    constructor(songsService) {
        this.#songsService = songsService;
    }

    createSong = async (req, res, next) => {
        try {
            const song = await this.#songsService.createSong(req.body);
            return res.status(StatusCodes.CREATED).json(song);
        } catch (err) {
            return next(new createError.InternalServerError(err.message));
        }
    };

    getAllSongs = async (req, res, next) => {
        try {
            const songs = await this.#songsService.getAllSongs();
            return res.status(StatusCodes.OK).json(songs);
        } catch (err) {
            return next(new createError.InternalServerError(err.message));
        }
    };
}
