import { Router } from 'express';
import { downloaderController } from './downloader.module.js';

const router = Router();

router.post('/:mediaId', (req, res, next) => downloaderController.download(req, res, next));

router.get('/:mediaId/info', (req, res, next) => downloaderController.getInfo(req, res, next));

export default router;