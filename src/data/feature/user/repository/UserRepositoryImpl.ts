import {UserRepository} from "../../../../domain/feature/user/repository/UserRepository";
import {User} from "../../../../model/User";
import {getLocalUser, setLocalUser} from "../../../source/LocalStorage";
import {from, map, Observable} from "rxjs";
import {client, GET_USER} from "../../../source/ApolloClient";

export class UserRepositoryImpl implements UserRepository {

    getUserLocally(): Observable<User> {
        return from(getLocalUser())
    }

    setUserLocally(user: User) {
        from(setLocalUser(user.name, user.age))
    }

    getUserFromCloud(userId: string): Observable<User> {
        return from(client.query(
            {
                query: GET_USER,
                variables: {userId: userId}
            }
        ))
            .pipe(map(response => {
                const gqlUser = response.data.user
                return {name: gqlUser.firstName + " " + gqlUser.lastName, age: 1}
            }))
    }

}
