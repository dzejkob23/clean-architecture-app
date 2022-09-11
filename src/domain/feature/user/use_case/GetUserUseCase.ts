import {UseCaseNoParams} from "../../../core/UseCaseNoParams";
import {UserRepository} from "../repository/UserRepository";
import {User} from "../../../../model/User";
import {autoInjectable, inject} from "tsyringe";

/**
 * Returns user data. UseCase does not care where the data is from.
 * It simply calls a repository interface only.
 */
@autoInjectable()
export class GetUserUseCase extends UseCaseNoParams<User> {

    constructor(
        @inject("UserRepository") private userRepository?: UserRepository
    ) {
        super()
    }

    doWork(params: void): User {
        return this.userRepository.getUser();
    }
}
