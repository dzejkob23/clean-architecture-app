import {inject, injectable} from "tsyringe";
import {Observable} from "rxjs";
import {User} from "../../../../model/User";
import {UserRepository} from "../repository/UserRepository";
import {UseCase} from "../../../core/UseCase";

/**
 * Returns user data from cloud.
 */
@injectable()
export class GetUserFromCloudUseCase extends UseCase<Observable<User>, GetUserFromCloudUseCase.Params> {

    constructor(@inject("UserRepository") private userRepository: UserRepository) {
        super()
    }

    doWork(params: GetUserFromCloudUseCase.Params): Observable<User> {
        return this.userRepository.getUserFromCloudOrCache(params.userId)
    }
}

export namespace GetUserFromCloudUseCase {
    export class Params {
        constructor(
            public userId: string
        ) {
        }
    }
}