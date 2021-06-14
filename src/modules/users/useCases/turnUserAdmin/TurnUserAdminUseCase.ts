import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user_temp = this.usersRepository.findById(user_id);

    let user: User;
    if (user_temp) {
      user = this.usersRepository.turnAdmin(user_temp);
    } else {
      throw new Error("User not found");
    }

    return user;
  }
}

export { TurnUserAdminUseCase };
