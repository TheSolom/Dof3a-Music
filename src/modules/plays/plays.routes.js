import { Router } from 'express';
import { playsController } from './plays.module.js';

const router = Router();

router.post('/', playsController.logPlay);
router.get('/top/:userId', playsController.getTopSongs);

export default router;
