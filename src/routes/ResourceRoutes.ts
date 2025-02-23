import express from 'express';
import ResourceController from '../controllers/ResourceController';

const router = express.Router();

// Use middleware functions to wrap controller methods
router.get('/', (req, res, next) => {
  ResourceController.getAll(req, res).catch(next);
});

router.get('/:id', (req, res, next) => {
  ResourceController.getById(req, res).catch(next);
});

router.post('/', (req, res, next) => {
  ResourceController.create(req, res).catch(next);
});

router.put('/:id', (req, res, next) => {
  ResourceController.update(req, res).catch(next);
});

router.delete('/:id', (req, res, next) => {
  ResourceController.delete(req, res).catch(next);
});

export default router;