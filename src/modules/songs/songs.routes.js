import { Router } from 'express';
import { songsController } from './songs.module.js';

const router = Router();

router.post('/', songsController.createSong);
router.get('/', songsController.getAllSongs);

export default router;
