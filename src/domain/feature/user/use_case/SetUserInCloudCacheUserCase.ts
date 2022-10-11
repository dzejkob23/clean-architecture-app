import {UseCase} from "../../../core/UseCase";
import {inject, injectable} from "tsyringe";
import {UserRepository} from "../repository/UserRepository";

@injectable()
export class SetUserInCloudCacheUserCase extends UseCase<void, SetUserInCloudCacheUserCase.Params> {

    constructor(@inject("UserRepository") private userRepository: UserRepository) {
        super()
    }

    protected doWork(params: SetUserInCloudCacheUserCase.Params): void {
        this.userRepository.setUserIntoCache(
            params.userId,
            params.firstName,
            params.lastName
        )
    }

}

export namespace SetUserInCloudCacheUserCase {
    export class Params {
        constructor(
            public userId: string,
            public firstName: string,
            public lastName: string
        ) {
        }
    }
}