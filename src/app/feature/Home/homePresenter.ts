import {GetUserUseCase} from "../../../domain/feature/user/use_case/GetUserUseCase";
import {User} from "../../../model/User";
import {autoInjectable, inject} from "tsyringe";
import {SetUserUseCase} from "../../../domain/feature/user/use_case/SetUserUseCase";
import {BasePresenter} from "../../core/BasePresenter";

@autoInjectable()
export class HomePresenter extends BasePresenter<HomePresenter.State> {

    // this state should be observed by UI layer
    state: HomePresenter.State = new HomePresenter.State()

    constructor(
        @inject(GetUserUseCase) private getUserUseCase: GetUserUseCase,
        @inject(SetUserUseCase) private setUserUseCase: SetUserUseCase
    ) {
        super()
        getUserUseCase.invoke().then(
            (user: User) => {
                this.state.user = user == null ? new User("no initialize user", -1) : user
            },
            (reason) => {
                this.state.errorMessage = reason.toString()
            }
        )
    }

    setUserData() {
        // Show loading...
        this.state.loading = true

        // Save updated data...
        let newUser = new User("Josef", 65)
        let useCaseParams = new SetUserUseCase.Params(newUser)
        this.setUserUseCase.invoke(useCaseParams)

        // Hide loading...
        this.state.loading = false
    }
}

export namespace HomePresenter {
    export class State implements ViewState {
        user: User = new User("empty", -1)
        loading: boolean = false
        errorMessage: string = "no errors"
    }
}
