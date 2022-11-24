import express, { Request,Response } from 'express';
import { Article, ArticleStore } from '../models/article';

const store = new ArticleStore();

const index = async (_req: Request, res: Response) => {
  try {
    const result = await store.index();
    res.json(result);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const result = await store.show(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const article: Article = {
      title: req.body.title,
      content: req.body.content,
    };
    const result = await store.create(article);
    res.json(result);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const del = async (req: Request, res: Response) => {
  try {
    const result = await store.delete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const articleRoutes = (app: express.Application) => {
  app.get('/articles', index);
  app.get('/articles/:id', show);
  app.post('/articles', create);
  app.delete('/articles/:id', del);
};
export default articleRoutes;
