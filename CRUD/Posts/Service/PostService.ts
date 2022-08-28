/* eslint-disable @typescript-eslint/no-explicit-any */
import Post from "../Post";
import FileService from './FileService';

class PostService {
  async create(post: any, picture: any) {
    const fileName = FileService.saveFile(picture);
    const createdPost = await Post.create({...post, picture: fileName});
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getById(id: any) {
    if (!id) {
      throw new Error("Invalid ID");
    }
    const postById = await Post.findById(id);
    return postById;
  }

  async update(post: any) {
    if (!post._id) {
      throw new Error("Invalid ID");
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }

  async delete(id: any) {
    if (!id) {
      throw new Error("Invalid ID");
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
