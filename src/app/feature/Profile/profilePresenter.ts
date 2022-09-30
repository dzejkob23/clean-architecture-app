import {autoInjectable} from "tsyringe";
import {BasePresenter} from "../../core/BasePresenter";
import {ViewState} from "../../core/ViewState";
import {User} from "../../../model/User";

@autoInjectable()
export class ProfilePresenter extends BasePresenter<ProfileState> {

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