import { AppContext, User } from "@trpc/schemas";

type UsersServiceType = AppContext["usersService"];

class UsersService implements UsersServiceType {
  getUserById(id: string): User {
    return { id, name: "Teszt Elek", email: "teszt.elek@example.com" };
  }

  createUser(data: User) {
    return {
      message: "User created",
      data: JSON.stringify(data),
    };
  }

  updateUser(data: Partial<User>) {
    return {
      message: "User updated",
      data: JSON.stringify(data),
    };
  }

  deleteUser(id: string) {
    return {
      message: "User deleted",
      data: JSON.stringify(id),
    };
  }
}

export const usersService = new UsersService();
