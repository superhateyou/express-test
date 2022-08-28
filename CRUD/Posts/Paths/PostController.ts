/* eslint-disable @typescript-eslint/no-explicit-any */
import PostService from '../Service/PostService';

class PostController {
  async create(req: any, res: any) {
    try {
      console.log(req.files)
      const post = await PostService.create(req.body, req.files.picture);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req: any, res: any) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts)
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getById(req: any, res: any) {
    try {
      const postById = await PostService.getById(req.params.id);
      return res.json(postById);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req: any, res: any) {
    try {
      const updatedPost = await PostService.update(req.body);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req: any, res: any) {
    try {
      const post = await PostService.delete(req.body.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();