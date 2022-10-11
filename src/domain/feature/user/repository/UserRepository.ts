// This repository interface defines syntactical contract that a repository implementation should confirm to.
import {User} from "../../../../model/User";
import {Observable} from "rxjs";

/**
 * Provides an API about user data.
 */
export interface UserRepository {

    /**
     * Returns data about local user.
     */
    getUserLocally: () => Observable<User>

    /**
     * Stores data about user.
     * @param user data about user
     */
    setUserLocally: (user: User) => void

    /**
     * Returns data about user from cloud.
     */
    getUserFromCloudOrCache: (userId: string) => Observable<User>

    /**
     * Sets new user into the local cache.
     */
    setUserIntoCache: (userId: string, firstName: string, lastName: string) => void
}
