import {User} from "../../../model/User";
import {autoInjectable, inject} from "tsyringe";
import {ViewState} from "../../core/ViewState";
import {BasePresenter} from "../../core/BasePresenter";
import {GetUserUseCase} from "../../../domain/feature/user/use_case/GetUserUseCase";
import {SetUserUseCase} from "../../../domain/feature/user/use_case/SetUserUseCase";

@autoInjectable()
export class HomePresenter extends BasePresenter<HomeState> {

    constructor(
        @inject(GetUserUseCase) private getUserUseCase: GetUserUseCase,
        @inject(SetUserUseCase) private setUserUseCase: SetUserUseCase
    ) {
        super()
        getUserUseCase.invoke().then(
            (user: User) => {
                const newUser: User = user == undefined
                    ? new User("no initialize user", -1) : user

                this.updateState((current) => {
                    current.user = newUser
                    return current
                })
            },
            (reason) => {
                this.updateState((current) => {
                    current.errorMessage = reason.toString()
                    return current
                })
            }
        )
    }

    setUserData() {
        // Updates data...
        const newState = new HomeState(
            new User("Karel II.", -1),
            false,
            "still no errors..."
        )
        // Provides new data on the UI...
        this.updateState(() => {
            return newState
        })
    }

    initState(): HomeState {
        return new HomeState();
    }
}

export class HomeState implements ViewState {
    constructor(
        public user: User = new User("empty", -1),
        public loading: boolean = false,
        public errorMessage: string = "no errors"
    ) {
    }
}
