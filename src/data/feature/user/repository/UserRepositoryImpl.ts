import {UserRepository} from "../../../../domain/feature/user/repository/UserRepository";
import {User} from "../../../../model/User";
import {getLocalUser, setLocalUser} from "../../../source/LocalStorage";
import {from, Observable} from "rxjs";
import {client, GET_USER} from "../../../source/ApolloClient";

export class UserRepositoryImpl implements UserRepository {

    getUserLocally(): Observable<User> {
        return from(getLocalUser())
    }

    setUserLocally(user: User) {
        from(setLocalUser(user.name, user.age))
    }

    getUserFromCloudOrCache(userId: string): Observable<User> {
        return new Observable((subscriber) => {
            client.watchQuery({
                query: GET_USER,
                variables: {userId: userId}
            }).subscribe((response) => {
                const gqlUser = response.data.user
                subscriber.next({name: gqlUser.firstName + " " + gqlUser.lastName, age: 1})
            })
        })
    }

    setUserIntoCache(userId: string, firstName: string, lastName: string) {
        client.writeQuery({
            query: GET_USER,
            data: {
                user: {
                    __typename: 'User',
                    id: userId,
                    firstName: firstName,
                    lastName: lastName,
                    birthDate: "12.9.1991",
                    gender: "OTHER"
                }
            },
            variables: {
                id: userId
            }
        })
    }

}
