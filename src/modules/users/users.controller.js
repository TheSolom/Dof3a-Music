import { StatusCodes } from 'http-status-codes';
import createError from 'http-errors';

class UsersController {
    #usersService;

    constructor(usersService) {
        this.#usersService = usersService;
    }

    createUser = async (req, res, next) => {
        const { body: userData } = req;

        try {
            const user = await this.#usersService.createUser(userData);
            return res.status(StatusCodes.CREATED).json(user);
        } catch (err) {
            return next(new createError.InternalServerError(err.message));
        }
    };

    getUserById = async (req, res, next) => {
        const { id } = req.params;

        try {
            const user = await this.#usersService.getUserById(id);
            if (!user)
                return next(new createError.NotFound('User not found'));

            return res.status(StatusCodes.OK).json(user);
        } catch (err) {
            return next(new createError.InternalServerError(err.message));
        }
    };
}
export default UsersController;