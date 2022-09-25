import {container, Lifecycle} from "tsyringe";
import {UserRepositoryImpl} from "../data/feature/user/repository/UserRepositoryImpl";

/**
 * Registers data layer injectable objects.
 */
export function initModuleData() {

    container.register("UserRepository",
        {useClass: UserRepositoryImpl},
        {lifecycle: Lifecycle.Singleton}
    )

}