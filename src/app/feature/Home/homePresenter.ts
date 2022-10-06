import {User} from "../../../model/User";
import {autoInjectable, inject} from "tsyringe";
import {ViewState} from "../../core/ViewState";
import {BasePresenter} from "../../core/BasePresenter";
import {GetUserLocallyUseCase} from "../../../domain/feature/user/use_case/GetUserLocallyUseCase";
import {SetUserUseCase} from "../../../domain/feature/user/use_case/SetUserUseCase";
import {GetUserFromCloudUseCase} from "../../../domain/feature/user/use_case/GetUserFromCloudUseCase";

@autoInjectable()
export class HomePresenter extends BasePresenter<HomeState> {

    constructor(
        @inject(GetUserLocallyUseCase) private getUserLocallyUseCase: GetUserLocallyUseCase,
        @inject(SetUserUseCase) private setUserUseCase: SetUserUseCase,
        @inject(GetUserFromCloudUseCase) private getUserFromCloudUseCase: GetUserFromCloudUseCase
    ) {
        super()
    }

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

    loadDataFromStorage() {
        this.getUserLocallyUseCase.invoke().subscribe((loadedUserValue) => {

            const newUserValue: User = loadedUserValue == undefined ? new User("Nobody", -1) : loadedUserValue

            this.updateState((current) => {
                current.user = newUserValue
                return current
            })
        })
    }

    // NOTE: An option how to get Promise from Observable!
    // async loadDataFromStorageAsync() {
    //     const loadedUser: User = await firstValueFrom(this.getUserUseCase.invoke())
    //     const newUser: User = loadedUser == undefined ? new User("Nobody", -1) : loadedUser
    //
    //     this.updateState((current) => {
    //         current.user = newUser
    //         return current
    //     })
    // }

    loadDataFromCloud(userId: string) {
        this.getUserFromCloudUseCase.invoke(
            new GetUserFromCloudUseCase.Params(userId)
        ).subscribe((loadedUserValue) => {
            this.updateState((current) => {
                current.user = loadedUserValue
                return current
            })
        })
    }

    saveUserData() {

        this.showLoading(true)
        this.setUserUseCase.invoke(new SetUserUseCase.Params(this.currentState().user))

        // It simulates loading state...
        setTimeout(
            () => {
                this.showLoading(false)
            },
            2000
        )
    }

    initState(): HomeState {
        return new HomeState();
    }


    private showLoading(show: boolean) {
        this.updateState((current) => {
            current.loading = show
            return current
        })
    }
}

export class HomeState implements ViewState {
    constructor(
        public user: User = new User("EMPTY", -1),
        public loading: boolean = false,
        public errorMessage: string = ""
    ) {
    }
}
