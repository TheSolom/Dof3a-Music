import container from '../../common/core/container.js';
import SongsModel from './songs.model.js';
import SongsService from './songs.service.js';
import SongsController from './songs.controller.js';

const songsService = new SongsService(SongsModel);
container.register('songsService', songsService);

const songsController = new SongsController(songsService);
container.register('songsController', songsController);

export { songsService, songsController };
