import {container} from "tsyringe";
import {HomePresenter} from "../app/feature/Home/homePresenter";

/**
 * Registers app layer injectable objects.
 */
export function initModuleApp() {

    container.register(HomePresenter, {useClass: HomePresenter})

}