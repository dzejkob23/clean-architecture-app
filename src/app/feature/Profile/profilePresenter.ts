import {autoInjectable, inject} from "tsyringe";
import {BasePresenter} from "../../core/BasePresenter";
import {ViewState} from "../../core/ViewState";
import {User} from "../../../model/User";
import {SetUserInCloudCacheUserCase} from "../../../domain/feature/user/use_case/SetUserInCloudCacheUserCase";

@autoInjectable()
export class ProfilePresenter extends BasePresenter<ProfileState> {

    constructor(
        @inject(SetUserInCloudCacheUserCase) private setUserInCloudCacheUserCase: SetUserInCloudCacheUserCase
    ) {
        super()
        setUserInCloudCacheUserCase.invoke(
            new SetUserInCloudCacheUserCase.Params(
        "1", "Jaja", "Paja"
            )
        )
    }

    initState(): ProfileState {
        return new ProfileState();
    }

    setInputParams(_user: User) {
        this.updateState((current) => {
            current.user = _user
            return current
        })
    }
}

export class ProfileState implements ViewState {
    constructor(
        public user: User = new User("EMPTY", -1),
        public loading: boolean = false,
        public errorMessage: string = ""
    ) {
    }
}