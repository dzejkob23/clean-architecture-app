import {GetUserUseCase} from "../../../domain/feature/user/use_case/GetUserUseCase";
import {User} from "../../../model/User";
import {autoInjectable, inject} from "tsyringe";

@autoInjectable()
export class HomePresenter {

    user: User

    constructor(
        @inject(GetUserUseCase) private useCase?: GetUserUseCase
    ) {
        this.user = useCase.invoke();
    }

    // FIXME - needs to implement observable ViewState
}
