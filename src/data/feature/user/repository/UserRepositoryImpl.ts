import {UserRepository} from "../../../../domain/feature/user/repository/UserRepository";
import {User} from "../../../../model/User";

export class UserRepositoryImpl implements UserRepository {

    getUser(): User {
        return new User('Jakub', 30)
    }

    setUser(user: User): void {
        // TODO - import LocalStorage and save data
    }
}
