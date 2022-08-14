import {UserRepository} from "../domain/UserRepository";
import {User} from "../model/User";

export class UserRepositoryImpl implements UserRepository {

    getUser(): User {
        return new User('Jakub', 30)
    }
}
