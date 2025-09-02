import container from '../../common/core/container.js';
import UsersModel from './users.model.js';
import UsersService from './users.service.js';
import UsersController from './users.controller.js';

const usersService = new UsersService(UsersModel);
container.register('usersService', usersService);

const usersController = new UsersController(usersService);
container.register('usersController', usersController);

export { usersService, usersController };
