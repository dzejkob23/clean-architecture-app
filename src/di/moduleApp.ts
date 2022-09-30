import {container} from "tsyringe";
import {HomePresenter} from "../app/feature/Home/homePresenter";
import {ProfilePresenter} from "../app/feature/Profile/profilePresenter";

/**
 * Registers app layer injectable objects.
 */
export function initModuleApp() {

    container.register(HomePresenter, {useClass: HomePresenter})
    container.register(ProfilePresenter, {useClass: ProfilePresenter})

}