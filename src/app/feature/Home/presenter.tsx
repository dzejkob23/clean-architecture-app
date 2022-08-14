import {GetUserUseCase} from "../../../domain/feature/user/use_case/GetUserUseCase";
import {UserRepositoryImpl} from "../../../data/UserRepositoryImpl";
import {User} from "../../../model/User";

export class Presenter {

    user: User

    constructor(
        useCase: GetUserUseCase = new GetUserUseCase(new UserRepositoryImpl()) // FIXME - replace this by DI implementation
    ) {
        this.user = useCase.invoke();
    }

    // FIXME - needs to implement observable ViewState
}
