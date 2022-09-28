import {User} from "../../../model/User";
import {autoInjectable} from "tsyringe";
import {BasePresenter} from "../../core/BasePresenter";
import {ViewState} from "../../core/ViewState";
import {BehaviorSubject} from "rxjs";

@autoInjectable()
export class HomePresenter extends BasePresenter<HomeState> {

    // Observable object that remembers the last emitted value.
    readonly state$ = new BehaviorSubject<HomeState>(this.initState())

    // constructor() {
    //     super();
    // }

    setUserData() {
        // Show loading...

        // Save updated data...
        let newState = new HomeState(
            new User("Karel", -1),
            false,
            "still no errors..."
        )
        this.state$.next(newState)

        // Hide loading...
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

    protected initState(): HomeState {
        return new HomeState()
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
