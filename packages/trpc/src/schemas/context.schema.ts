import { MutationReponse } from "./common.schema";
import { Post } from "./post.schema";
import { User } from "./user.schema";

export type AppContext = {
  usersService: {
    getUserById: (id: string) => User;
    createUser: (data: User) => MutationReponse;
    updateUser: (data: Partial<User>) => MutationReponse;
    deleteUser: (id: string) => MutationReponse;
  };
  postsService: {
    getPostById: (id: string) => Post;
    createPost: (data: Post) => MutationReponse;
    updatePost: (data: Partial<Post>) => MutationReponse;
    deletePost: (id: string) => MutationReponse;
  };
};
