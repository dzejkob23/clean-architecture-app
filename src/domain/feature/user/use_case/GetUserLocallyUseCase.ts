import {UseCaseNoParams} from "../../../core/UseCaseNoParams";
import {UserRepository} from "../repository/UserRepository";
import {User} from "../../../../model/User";
import {inject, injectable} from "tsyringe";
import {Observable} from "rxjs";

/**
 * Returns local user data.
 */
@injectable()
export class GetUserLocallyUseCase extends UseCaseNoParams<Observable<User>> {

    constructor(@inject("UserRepository") private userRepository: UserRepository) {
        super()
    }

    doWork(params: void): Observable<User> {
        return this.userRepository.getUserLocally()
    }
}
