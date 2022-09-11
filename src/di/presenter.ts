import {container} from "tsyringe";
import {HomePresenter} from "../app/feature/Home/homePresenter";

/**
 * Registers all presenters.
 */
export function initPresenter() {

    container.register(HomePresenter, {useClass: HomePresenter})

}