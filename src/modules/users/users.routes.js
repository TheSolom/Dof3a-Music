import { Router } from 'express';
import { usersController } from './users.module.js';

const router = Router();

router.post('/', usersController.createUser);
router.get('/:id', usersController.getUserById);

export default router;
