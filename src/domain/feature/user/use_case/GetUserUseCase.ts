import {UseCaseNoParams} from "../../../core/UseCaseNoParams";
import {UserRepository} from "../repository/UserRepository";
import {User} from "../../../../model/User";
import {autoInjectable, inject} from "tsyringe";

@autoInjectable()
export class GetUserUseCase extends UseCaseNoParams<User> {

    constructor(
        @inject("UserRepository") private userRepository?: UserRepository
    ) {
        super();
        this.userRepository = userRepository
    }

    doWork(params: void): User {
        return this.userRepository.getUser();
    }
}
