// This repository interface defines syntactical contract that a repository implementation should confirm to.
import {User} from "../../../../model/User";

/**
 * Provides an API about user data.
 */
export interface UserRepository {

    /**
     * Returns data about user.
     */
    getUser: () => Promise<User>

    /**
     * Stores data about user.
     * @param user data about user
     */
    setUser: (user: User) => Promise<void>

}
