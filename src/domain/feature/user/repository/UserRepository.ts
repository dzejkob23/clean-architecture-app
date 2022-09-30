// This repository interface defines syntactical contract that a repository implementation should confirm to.
import {User} from "../../../../model/User";
import {Observable} from "rxjs";

/**
 * Provides an API about user data.
 */
export interface UserRepository {

    /**
     * Returns data about user.
     */
    getUser: () => Observable<User>

    /**
     * Stores data about user.
     * @param user data about user
     */
    setUser: (user: User) => void

}
