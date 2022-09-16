import {GetUserUseCase} from "../../../domain/feature/user/use_case/GetUserUseCase";
import {User} from "../../../model/User";
import {autoInjectable, inject} from "tsyringe";
import {SetUserUseCase} from "../../../domain/feature/user/use_case/SetUserUseCase";
import {BasePresenter} from "../../core/BasePresenter";

@autoInjectable()
export class HomePresenter extends BasePresenter<HomePresenter.State>{

    // this state should be observed by UI layer
    public viewState: HomePresenter.State = new HomePresenter.State()

    constructor(
        @inject(GetUserUseCase) private getUserUseCase?: GetUserUseCase,
        @inject(SetUserUseCase) private setUserUseCase?: SetUserUseCase
    ) {
        super()
        viewState.user = getUserUseCase.invoke();
    }

    setUserData() {
        let newUser = new User("Josef", 65)
        let useCaseParams = new SetUserUseCase.Params(newUser)
        this.setUserUseCase.invoke(useCaseParams)
    }
}

export namespace HomePresenter {
    export class State implements ViewState {
        constructor(
            public user: User = new User("", -1)
        ) {}
    }
}
