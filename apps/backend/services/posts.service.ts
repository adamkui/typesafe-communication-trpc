import { AppContext, Post } from "@trpc/schemas";

type PostsServiceType = AppContext["postsService"];

class PostsService implements PostsServiceType {
  getPostById(id: string): Post {
    return { id, title: "Új Poszt", content: "Lorem ipsum", author: "12345" };
  }

  createPost(data: Post) {
    return {
      message: "Post created",
      data: JSON.stringify(data),
    };
  }

  updatePost(data: Partial<Post>) {
    return {
      message: "Post updated",
      data: JSON.stringify(data),
    };
  }

  deletePost(id: string) {
    return {
      message: "Post deleted",
      data: JSON.stringify(id),
    };
  }
}

export const postsService = new PostsService();
