import {UseCaseNoParams} from "../../../core/UseCaseNoParams";
import {UserRepository} from "../repository/UserRepository";
import {User} from "../../../../model/User";

export class GetUserUseCase extends UseCaseNoParams<User> {

    private userRepository: UserRepository;

    constructor(
        userRepository: UserRepository
    ) {
        super();
        this.userRepository = userRepository
    }

    doWork(params: void): User {
        return this.userRepository.getUser();
    }
}
