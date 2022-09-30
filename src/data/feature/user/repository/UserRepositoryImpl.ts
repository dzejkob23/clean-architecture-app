import {UserRepository} from "../../../../domain/feature/user/repository/UserRepository";
import {User} from "../../../../model/User";
import {getLocalUser, setLocalUser} from "../../../source/LocalStorage";
import {from, Observable} from "rxjs";

export class UserRepositoryImpl implements UserRepository {

    getUser(): Observable<User> {
        return from(getLocalUser())
    }

    setUser(user: User) {
        from(setLocalUser(user.name, user.age))
    }

}
