import container from '../../common/core/container.js';
import PlaysModel from './plays.model.js';
import SongsModel from '../songs/songs.model.js';
import PlaysService from './plays.service.js';
import PlaysController from './plays.controller.js';


const playsService = new PlaysService(PlaysModel, SongsModel);
container.register('playsService', playsService);

const playsController = new PlaysController(playsService);
container.register('playsController', playsController);

export { playsService, playsController };
