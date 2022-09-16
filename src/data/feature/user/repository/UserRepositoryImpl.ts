import {UserRepository} from "../../../../domain/feature/user/repository/UserRepository";
import {User} from "../../../../model/User";
import {getLocalUser, setLocalUser} from "../../../source/LocalStorage";

export class UserRepositoryImpl implements UserRepository {

    async getUser(): Promise<User> {
        return getLocalUser()
    }

    async setUser(user: User): Promise<void> {
        return setLocalUser(user.name, user.age)
    }

}
