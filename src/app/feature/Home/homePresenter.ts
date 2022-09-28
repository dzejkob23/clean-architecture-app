import {User} from "../../../model/User";
import {autoInjectable} from "tsyringe";
import {ViewState} from "../../core/ViewState";
import {BasePresenter} from "../../core/BasePresenter";

@autoInjectable()
export class HomePresenter extends BasePresenter<HomeState> {

    // constructor() {
    //     super();
    // }

    setUserData() {
        // Show loading...

        // Save updated data...
        const newState = new HomeState(
            new User("Karel II.", -1),
            false,
            "still no errors..."
        )

        this.updateState(() => {
            return newState
        })

        // Hide loading...
    }

    initState(): HomeState {
        return new HomeState();
    }

    // constructor(
    //     @inject(GetUserUseCase) private getUserUseCase: GetUserUseCase,
    //     @inject(SetUserUseCase) private setUserUseCase: SetUserUseCase
    // ) {
    //     super()
    //     getUserUseCase.invoke().then(
    //         (user: User) => {
    //             const newUser: User = user == undefined
    //                 ? new User("no initialize user", -1) : user
    //
    //             super.updateState((current) => {
    //                 current.user = newUser
    //                 return current
    //             })
    //         },
    //         (reason) => {
    //             super.updateState((current) => {
    //                 current.errorMessage = reason.toString()
    //                 return current
    //             })
    //         }
    //     )
    // }
}

export class HomeState implements ViewState {
    constructor(
        public user: User = new User("empty", -1),
        public loading: boolean = false,
        public errorMessage: string = "no errors"
    ) {
    }
}
