// This repository interface defines syntactical contract that a repository implementation should confirm to.
import {User} from "../model/User";

export interface UserRepository {

    getUser: () => User

}
