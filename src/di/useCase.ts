import {container} from "tsyringe";
import {GetUserUseCase} from "../domain/feature/user/use_case/GetUserUseCase";

/**
 * Registers all use-case.
 */
export function initUseCase() {

    container.register(GetUserUseCase, {useClass: GetUserUseCase})

}