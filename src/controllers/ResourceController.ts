import { Request, Response } from 'express';
import ResourceModel from '../models/ResourceModel';

const ResourceController = {
  async getAll(req: Request, res: Response) {
    try {
      const resources = await ResourceModel.getAll();
      res.json(resources);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  async getById(req: Request, res: Response) {
    try {
      const resource = await ResourceModel.getById(Number(req.params.id));
      if (!resource) return res.status(404).json({ error: 'Resource not found' });
      res.json(resource);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  async create(req: Request, res: Response) {
    try {
      const { title, type, content, userId } = req.body;
      const result = await ResourceModel.create(title, type, content, userId);
      res.status(201).json({ id: (result as any).insertId, title, type, content });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const { title, type, content } = req.body;
      const result = await ResourceModel.update(Number(req.params.id), title, type, content);
      if ((result as any).affectedRows === 0) return res.status(404).json({ error: 'Resource not found' });
      res.json({ id: req.params.id, title, type, content });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const result = await ResourceModel.delete(Number(req.params.id));
      if ((result as any).affectedRows === 0) return res.status(404).json({ error: 'Resource not found' });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

export default ResourceController;