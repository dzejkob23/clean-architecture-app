import {container, Lifecycle} from "tsyringe";
import {UserRepositoryImpl} from "../data/UserRepositoryImpl";

/**
 * Registers all repositories.
 */
export function initRepository() {

    container.register("UserRepository",
        {useClass: UserRepositoryImpl},
        {lifecycle: Lifecycle.Singleton}
    )

}