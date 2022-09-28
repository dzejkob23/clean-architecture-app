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
    }

    // TODO: Just for testing...
    updateUserFromPresenter(name: string, age: number) {
        // Updates data...
        const newState = new HomeState(
            new User(name, age),
            false,
            ""
        )
        // Provides new data on the UI...
        this.updateState(() => {
            return newState
        })
    }

    // TODO: Just for testing...
    loadDataFromStorage() {
        this.getUserUseCase.invoke().then(
            (user: User) => {
                const newUser: User = user == undefined
                    ? new User("no initialize user", -1) : user

                this.updateState((current) => {
                    const newState = {...current}
                    newState.user = newUser
                    return newState
                })
            },
            (reason) => {
                this.updateState((current) => {
                    const newState = {...current}
                    newState.errorMessage = reason.toString()
                    return newState
                })
            }
        )
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
