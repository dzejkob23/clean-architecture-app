import {UseCase} from "../../../core/UseCase";
import {autoInjectable, inject} from "tsyringe";
import {UserRepository} from "../repository/UserRepository";
import {User} from "../../../../model/User";

/**
 * Saves received data about user.
 */
@autoInjectable()
export class SetUserUseCase extends UseCase<void, SetUserUseCase.Params> {

    constructor(
        @inject("UserRepository") private userRepository?: UserRepository
    ) {
        super()
    }

    doWork(params: SetUserUseCase.Params): void {
        this.userRepository.setUser(params.user)
    }
}

export namespace SetUserUseCase {
    export class Params {
        constructor(public user: User) { }
    }
}