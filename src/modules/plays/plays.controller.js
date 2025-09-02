import { StatusCodes } from 'http-status-codes';
import createError from 'http-errors';

class PlaysController {
    #playsService;

    constructor(playsService) {
        this.#playsService = playsService;
    }

    logPlay = async (req, res, next) => {
        const { body: playData } = req;

        try {
            const play = await this.#playsService.logPlay(playData);
            return res.status(StatusCodes.CREATED).json(play);
        } catch (err) {
            return next(new createError.InternalServerError(err.message));
        }
    };

    getTopSongs = async (req, res, next) => {
        const { userId } = req.params;
        try {
            const stats = await this.#playsService.getTopSongs(userId);
            return res.status(StatusCodes.OK).json(stats);
        } catch (err) {
            return next(new createError.InternalServerError(err.message));
        }
    };
}
export default PlaysController;