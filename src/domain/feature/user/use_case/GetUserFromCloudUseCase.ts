import {inject, injectable} from "tsyringe";
import {UseCaseNoParams} from "../../../core/UseCaseNoParams";
import {Observable} from "rxjs";
import {User} from "../../../../model/User";
import {UserRepository} from "../repository/UserRepository";

/**
 * Returns user data from cloud.
 */
@injectable()
export class GetUserFromCloudUseCase extends UseCaseNoParams<Observable<User>> {

    constructor(@inject("UserRepository") private userRepository: UserRepository) {
        super()
    }

    doWork(params: void): Observable<User> {
        return this.userRepository.getUserFromCloud("1") // fixme: update with useCase parameters...
    }
}