import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    let users: User[] = [];

    if (!user) {
      throw new Error("Mensagem do erro");
    }

    if (user.admin) {
      users = this.usersRepository.list();
    } else {
      throw new Error("Mensagem do erro");
    }

    return users;
  }
}

export { ListAllUsersUseCase };
