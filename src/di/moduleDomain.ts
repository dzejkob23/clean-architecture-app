import {container} from "tsyringe";
import {GetUserUseCase} from "../domain/feature/user/use_case/GetUserUseCase";
import {SetUserUseCase} from "../domain/feature/user/use_case/SetUserUseCase";

/**
 * Registers domain layer injectable objects.
 */
export function initModuleDomain() {

    container.register(GetUserUseCase, {useClass: GetUserUseCase})
    container.register(SetUserUseCase, {useClass: SetUserUseCase})

}