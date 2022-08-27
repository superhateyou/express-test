import Router from 'express';
import PostController from './Posts/Paths/PostController.js';

const router = new Router();

router.post('/posts', PostController.create);
router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getById);
router.put('/posts', PostController.update);
router.delete('/posts/:id', PostController.delete);

export default router;