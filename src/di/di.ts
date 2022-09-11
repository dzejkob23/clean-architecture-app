import {initPresenter} from "./presenter";
import {initUseCase} from "./useCase";
import {initRepository} from "./repository";

/**
 * Registers all injectable classes. This needs to be called as a first thing
 * before the app starts. The file that calls this method also needs to import \"reflect-metadata\".
 */
export function initDi() {
    initPresenter()
    initUseCase()
    initRepository()
}